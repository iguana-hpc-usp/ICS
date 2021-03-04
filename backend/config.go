package main

import (
	"bytes"
	"encoding/json"
	"github.com/tkanos/gonfig"
	"net"
	"os"
	"strconv"
)

// MAIN TYPES AND GLOBALS
var GLOBAL_HOST 				HostInfoStr
var GLOBAL_NODES[] 				NodeStr				//AUX VAR TO GET NODES
var GLOBAL_FRONTNAMES[] 		HostInfoStr 		//MASTER CONTROL FRONTEND USERS
var GLOBAL_QUEUE_FRONTEND[] 	QueueStr			//CONTROL CODE RUN ORDER
var GLOBAL_CLUSTERS_AVAILABLE[] ClusterStr			//CONTROL CLUSTERS AVAILABLE IN THE SAME NET
var GLOBAL_KILL 				string				//DESTROY THREADS
var GLOBAL_OP_MODE				ServiceOpModeStr	//USED IN SERVICE MANAGER
var config Configuration

var DEFAULT_NFS_PATH string
var DEFAULT_CONFIG_PATH string
var DEFAULT_STATIC_PATH string

func ConfigFileRead() {
	// CLEAN THE GLOBALS
	GLOBAL_HOST = HostInfoStr{}
	GLOBAL_HOST.Cluster = ClusterStr{}
	GLOBAL_NODES = []NodeStr{}
	GLOBAL_FRONTNAMES = []HostInfoStr{}
	GLOBAL_QUEUE_FRONTEND = []QueueStr{}
	GLOBAL_CLUSTERS_AVAILABLE = []ClusterStr{}

	nfsDir := UtilDefaultDir("NFS")
	DEFAULT_NFS_PATH = nfsDir

	staticDir := UtilDefaultDir("STATIC")
	DEFAULT_STATIC_PATH = staticDir

	configDir := UtilDefaultDir("CONFIG")
	DEFAULT_CONFIG_PATH = configDir + "/config.yaml"

	// READ THE CONFIGURATION FILE
	err := gonfig.GetConf(DEFAULT_CONFIG_PATH, &config)
	Log("", err, "1")
	if err != nil {
		Log("Config file not found in dir: "+DEFAULT_CONFIG_PATH + ". " +
			"Let's set the system to use the default configuration!", nil, "1")
	}

	if config.FrontendPort == "" {
		config.FrontendPort = "8000"
	}
	GLOBAL_HOST.PortFrontend = config.FrontendPort

	if config.BackendPort == "" {
		config.BackendPort = "10001"
	}

	if config.OperationMode == "" {
		config.OperationMode = "LOCAL"
	}

	if config.StartContainers == "" {
		config.StartContainers = "0"
	}

	if config.MaxContainers == "" {
		config.MaxContainers = "30"
	}

	if config.ClusterName == "" {
		config.ClusterName = "CLUSTER01"
	}

	if config.HostUser == "" {
		config.HostUser = "user@user"
	}
	GLOBAL_HOST.Owner = config.HostUser

	if config.HostPassword == "" {
		config.HostPassword = "user"
	}
	GLOBAL_HOST.Password = config.HostPassword

	if config.SelfRegistration == "" {
		config.SelfRegistration = "On"
	}
	GLOBAL_HOST.SelfRegistration = config.SelfRegistration

	if config.CodeExecTimeout == "" {
		config.CodeExecTimeout = "60"
	}
	GLOBAL_HOST.CodeExecTimeout, _ = strconv.Atoi(config.CodeExecTimeout)

	if config.Queue == "" {
		config.Queue = "Off"
	}
	GLOBAL_HOST.Queue = config.Queue

	if config.MaxConcurrency == "" {
		config.MaxConcurrency = "30"
	}
	GLOBAL_HOST.MaxConcurrency,_ = strconv.Atoi(config.MaxConcurrency)

	if config.Debug == "" {
		config.Debug = "Off"
	}

	if config.Error == "" {
		config.Error = "Off"
	}

	if config.PublicInterface != "" {
		GLOBAL_HOST.PublicAddr = config.PublicInterface
		ip, _ := HostIP(config.PublicInterface)
		GLOBAL_HOST.IP = ip.String()
	}

	GLOBAL_HOST.Hostname, _ = os.Hostname()

	Log(config, nil, "0")
}

func ConfigUpdateFile(config Configuration) ResponseStr {
	// READ THE CONFIGURATION FILE

	ret := ResponseStr{"ok", "Configuration updated! " +
		"The system will be restarted to apply the changes. Wait a few seconds!"}

	//write data as buffer to json encoder
	buffer := new(bytes.Buffer)
	encoder := json.NewEncoder(buffer)

	header := "" +
		"### If empty, the system will attempt to detect your network parameters. ###\n" +
		"##\n" +
		"## HostPublicInterface ## Default: empty   			(Optional) Public interface to connect in the network\n" +
		"## BackendPort         ## Default: 10001   			(Optional) Back door to inter-nodes communication\n" +
		"## FrontendPort        ## Default: 8000    			(Optional) Port to get access to browser web page\n" +
		"## OperationMode       ## Default: LOCAL   			(Optional) LOCAL, NODE or MASTER\n" +
		"## StartContainers     ## Default: Auto       			(Optional) The number of containers to be started on init\n" +
		"## MaxContainers		## Default: 30       			(Optional) The maximum number of containers running as nodes\n" +
		"## ClusterName         ## Default: CLUSTER01  			(Optional) Only NUMBERS and CHARACTERS\n" +
		"## ClusterPassword     ## Default: user    			(Optional) password to connect in the cluster\n" +
		"## HostUser            ## Default: user@user   		(Optional) Default User Host (Default login to Frontend)\n" +
		"## HostPassword        ## Default: user    			(Optional) Default User Password\n" +
		"## SelfRegistration    ## Default: On      			(Optional) Allow user self-registration\n" +
		"## KeySecret		    ## Default: NPZ8fvABP5pKSwU3	(Optional) A secret key to communication between nodes (16 characters)\n" +
		"## CodeExecTimeout		## Default: 60					(Optional) Defines a timeout to code execution (in seconds)\n" +
		"## Queue				## Default: Off					(Optional) If enabled, a queue system will prevent two codes from running at the same time\n" +
		"## MaxConcurrency		## Default: 30					(Optional) Defines the maximum number of users in the queue, competing for resources\n" +
		"## Debug               ## Default: Off     			(Optional) On or Off\n" +
		"## Error               ## Default: Off  	   			(Optional) On or Off\n" +
		"\n" +
		"### SMTP account parameters for sending account registration emails and recovering passwords. ###\n" +
		"## SmtpServer          ## Default: empty  	   			(Optional) \n" +
		"## SmtpPort            ## Default: empty  	   			(Optional)\n" +
		"## SmtpUser            ## Default: empty  	   			(Optional)\n" +
		"## SmtpPassword        ## Default: empty  	   			(Optional)\n" +
		"\n"

	encoder.SetIndent("", "\t")

	err := encoder.Encode(config)
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}
	file, err := os.OpenFile(DEFAULT_CONFIG_PATH, os.O_RDWR|os.O_CREATE, 0755)
	file.Truncate(0)
	file.Seek(0,0)
	file.WriteString(header)
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}
	_, err = file.Write(buffer.Bytes())
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}

	return ret
}

func ConfigNetParameters(ip net.IP, netAddr string) {

	//If we have any IP, we don't need to continue anymore
	if GLOBAL_HOST.IP != "" {
		return
	}

	Log("UtilSetNetParameter ip|netAddr " +
		ip.String() + "|" + netAddr, nil, "0" )

	// If the netAddr was set in config file
	if config.PublicInterface != "" {
		netAddr = config.PublicInterface
		Log("config netAddr " + netAddr, nil, "0" )
	}

	// If receive an IP from Node Or Frontend Browser
	if GLOBAL_HOST.IP == "" && ip.String() != "" && netAddr == "" {
		GLOBAL_HOST.IP = ip.String()
		Log("Node Or Frontend Browser ip " + ip.String(), nil, "0" )
	}

	// If receive an IP from ClusterNotify
	if GLOBAL_HOST.IP == "" && netAddr != "" {
		ip, _ := HostIP(netAddr)
		GLOBAL_HOST.IP = ip.String()
		GLOBAL_HOST.PublicAddr = netAddr
		Log("ClusterNotify " + ip.String() + "|" + netAddr, nil, "0" )
	}

	// START SWARM AND CONTAINER IF HAS A Public Addr
	if GLOBAL_HOST.IP != "" &&
		(GLOBAL_HOST.OpMode == "LOCAL" || GLOBAL_HOST.OpMode == "MASTER") {

		GLOBAL_HOST.Cluster.MasterIP = net.ParseIP(GLOBAL_HOST.IP)
		HostPublicAddr()
	}

}

func ConfigCheckGWisCorrect(gwMaster net.IP, gwMask net.IPMask) string {
	Log("CheckGWisCorrect", nil, "")

	ip := gwMaster.Mask(gwMask)

	itf, _ := net.Interfaces()

	for _, adders := range itf {
		address, _ := adders.Addrs()
		for _, addr := range address {
			switch v := addr.(type) {
			case *net.IPNet:
				if !v.IP.IsLoopback() {
					if v.Contains(ip) {
						Log("New default gateway has been set to " + adders.Name, nil, "0")
						return adders.Name
					}
				}
			}
		}
	}
	return ""
}

func ConfigDefaultAddr() []HostIPsStr {

	IPs := []HostIPsStr{}

	itf, _ := net.Interfaces()

	for _, adders := range itf {
		if (len(adders.Name) >= 6 && adders.Name[:6] == "docker") ||
			(len(adders.Name) >= 2 && adders.Name[:2] == "lo") ||
			(len(adders.Name) >= 4 && adders.Name[:4] == "veth") {
			continue
		}

		addr, _ := adders.Addrs()
		for _, a := range addr {
			switch v := a.(type) {
			case *net.IPNet:
				if v.IP.To4() != nil {
					IPs = append(IPs,
						HostIPsStr{Name:adders.Name,
						IP:v.IP.To4().String(),
						Mask:v.Mask.String(),
						GW:v.IP.Mask(v.Mask).String()})
				}
			}
		}

	}

	return IPs

}