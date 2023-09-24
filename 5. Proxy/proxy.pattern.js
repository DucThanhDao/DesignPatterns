class Leader {
    receiveReq(offer){
        console.log(`Accept offer ::: ${offer}`);
    }
}

class Secretary {
    constructor(){
        this.leader = new Leader();
    }
    receiveReq(offer){
        this.leader.receiveReq(offer);
    }
}

class Developer {
    constructor(offer){
        this.offer = offer
    }
    applyFor(target){
        target.receiveReq(this.offer)
    }
}

//How to use
const dev1 = new Developer('Target upto 5K$')
dev1.applyFor(new Secretary())