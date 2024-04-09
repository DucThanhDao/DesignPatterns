class RoundRobin {
    constructor() {
        if(RoundRobin.instance){
            return RoundRobin.instance
        }
        RoundRobin.instance = this
        this.servers = [];
        this.index = 0;

    }
    addServer(server) {
        this.servers.push(server)
    };

    getNextServer(){
        if(!this.servers.length){
            throw new Error('Invalid number of servers')
        }
        const server = this.servers[this.index]
        this.index = (this.index+1) % this.servers.length;
        return server
    }
}
const loadBalancer = new RoundRobin();
loadBalancer.addServer("Server1")
loadBalancer.addServer("Server2")
loadBalancer.addServer("Server3")

console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());

    