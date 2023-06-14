const systemConfigureMap = {
    "System 1": {
      endpoint:
        "https://cgt-r1-pocsub1-eu12.authentication.eu12.hana.ondemand.com"
      // apiKey: "xxxxxxxx"
      
    },
    "System 2": {
      endpoint: "https://api.system2.com"
      //apiKey: "yyyyyyyy"
      // Other configuration properties specific to System 2
    },
    "System 3": {
      endpoint: "https://api.system3.com"
      //apiKey: "zzzzzzzz"
      // Other configuration properties specific to System 3
    }
  };
  
  export const getDomainName = (system) => {
    if (system in systemConfigureMap) {
      return systemConfigureMap[system].endpoint;
    }
    return null;
  };
  