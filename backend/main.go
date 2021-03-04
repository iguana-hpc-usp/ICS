package main

import (
	"os"
)

var GLOBAL_VERSION_NUMBER = "2.57"
var GLOBAL_VERSION_RELEASE = "2020-12-18" +
	""

func main() {
	//SET DOCKER/SWARM API VERSION
	os.Setenv("DOCKER_API_VERSION", "1.39")
	Log("VERSION " + GLOBAL_VERSION_NUMBER +
		" >>><<< RELEASE " + GLOBAL_VERSION_RELEASE, nil, "1")

	// Read the Configuration File
	ConfigFileRead()

	//START THE SERVICES, BASED ON CONFIG FILE OR DEFAULT SETTINGS
	go ServiceManager()

	//START QUEUE MONITOR
	go HostMonitor()

	//CHECK THE QUEUE
	go QueueMonitor()

	// START THE WEB SERVER (GO GENERATE THE FRONTEND WEB HTML)
	Webserver()
}