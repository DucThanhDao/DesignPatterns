//#region 1. Lazy Initialization (Virtual Proxy):
class Documents {
    private documentName: string
    constructor(documentName: string) {
        this.documentName = documentName;
    }
    loadContent(startPage: number, endPage: number) {
      console.log(`Loading pages ${startPage}-${endPage} of document: ${this.documentName}`);
      // Simulate loading content for the specified pages.
    }
    displayContent() {
      console.log(`Displaying content of document: ${this.documentName}`);
      // Simulate displaying the content.
    }
}
// Proxy for Document. The Document class only be created when some actions are required
class DocumentProxy {
    private document: Documents | null = null;
    private documentName: string;
    private currentPage = 1;
    constructor(doccumentName: string){
        this.document = new Documents(doccumentName);
    }
    displayPage(startPage: number, endPage: number){
        if(!this.document){
            this.document = new Documents("DocumentName");
        }
        this.document.loadContent(startPage, endPage);
        this.document.displayContent();
        this.currentPage = endPage
    }
    scrollToNextPage(pagesToLoad: number){
        const startPage = this.currentPage + 1;
        const endPage = startPage + pagesToLoad;
        this.displayPage(startPage, endPage);
    }
}
// Client coding
const documentViewer = new DocumentProxy('largeDocument.pdf');
documentViewer.scrollToNextPage(5);
//#endregion

//#region Access control (Protection Proxy)
class AdminActions {
    getAllUsers(){
        //Logic get all user here
    }
    deleteUser(id: number){
        //Logic delete user by id here
    }
}
class AdminProxy {
    private adminActions= new AdminActions();
    role: string;
    constructor(role: string){
        this.role = role;
    }
    getAllUsers(){
        if(this.role==='Admin'){
            this.adminActions.getAllUsers()
        } else {
            // Logic notify unauthorized here
        }
    }
    deleteUserById(id: number){
        if(this.role==='Admin'){
            this.adminActions.deleteUser(id)
        } else {
            // Logic notify unauthorized here
        }
    }
}
// Client coding
const proxy1 = new AdminProxy("Admin");
proxy1.getAllUsers() // Actions perform
const proxy2 = new AdminProxy("User");
const id = 1;
proxy2.deleteUserById(id) // Throw Unauthorized
//#endregion


//#region Logging Requests (Logging Proxy):
// Real Service
class DataService {
    fetchData() {
      console.log("Fetching data...");
    }
  }
  
  // Proxy for Logging Requests
  class LoggingProxy {
    private service: DataService = new DataService();
  
    fetchData() {
      console.log("Logging: Requesting data...");
      this.service.fetchData();
      console.log("Logging: Data request completed.");
    }
  }
  
  // Client code
  const proxy = new LoggingProxy();
  proxy.fetchData(); // The request is logged before and after execution.
  
//#endregion

//#region  Caching Request Results (Caching Proxy)
// Real Service
class DataProvider {
    fetchData(key: string) {
      console.log(`Fetching data for key: ${key}`);
      // Simulate data retrieval from a data source.
      return `Data for ${key}`;
    }
  }
  // Proxy for Caching Request Results
  class CachingProxy {
    private cache: { [key: string]: any } = {};
    private provider: DataProvider = new DataProvider();
  
    fetchData(key: string) {
      if (this.cache[key]) {
        console.log(`Cache hit for key: ${key}`);
        return this.cache[key];
      }
      const data = this.provider.fetchData(key);
      this.cache[key] = data;
      console.log(`Cache miss for key: ${key}`);
      return data;
    }
  }
  // Client code
  const cacheProxy = new CachingProxy();
  console.log(cacheProxy.fetchData("request1")); // Data is fetched and cached.
  console.log(cacheProxy.fetchData("request1")); // Data is retrieved from the cache.
  console.log(cacheProxy.fetchData("request2")); // New data is fetched and cached.
//#endregion

//#region Smart Reference
// Real Service
class HeavyObject {
    constructor() {
      console.log("Creating a heavy object...");
    }
    operation() {
      console.log("Heavy object operation executed.");
    }
  }
  // Proxy for Smart Reference
  class SmartReferenceProxy {
    private object: HeavyObject | null = null;
  
    operation() {
      if (!this.object) {
        this.object = new HeavyObject();
      }
      this.object.operation();
    }
    release() {
      if (this.object) {
        console.log("Releasing the heavy object.");
        this.object = null;
      }
    }
  }
  // Client code
  const smartContractProxy = new SmartReferenceProxy();
  smartContractProxy.operation(); // The heavy object is created and operated on.
  smartContractProxy.release();   // The heavy object is released.
  smartContractProxy.operation(); // A new heavy object is created and operated on.
//#endregion