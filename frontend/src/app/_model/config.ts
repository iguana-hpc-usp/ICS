export interface Configuration {
  PublicInterface:    		string;
  BackendPort:          	string;
  FrontendPort: 	        string;
  StartContainers:     		string;
  MaxContainers:            string;
  OperationMode:        	string;
  ClusterName: 	         	string;
  ClusterPassword:  		string;
  HostUser:       	 		string;
  HostPassword:     		string;
  SelfRegistration:   		string;
  CodeExecTimeout:          string;
  Queue:                    string;
  MaxConcurrency:           string;
  Debug:         			string;
  Error:           			string;
  SmtpServer: 				string;
  SmtpPort: 				string;
  SmtpUser: 				string;
  SmtpPassword: 			string;
}
