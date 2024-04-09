class Observer {
    constructor(name){
        this.namePick = name;
    }
    updateStatus(location){
        this.goToHelp(location);
    }
    goToHelp(location){
        console.log(`${this.namePick}::::PING::::${JSON.stringify(location)}`);
    }
}
class Subject {
    constructor(){
        this.observerList = [];
    }
    addObserver(observer){
        this.observerList.push(observer)
    }
    notify(location){
        this.observerList.forEach(observer => {
            observer.updateStatus(location)
        })
    }
}

const subject = new Subject();

//New pick
const ashe = new Observer('Ashe');
const syndra = new Observer('Syndra');
const miss4 = new Observer('Miss4');

subject.addObserver(ashe);
subject.addObserver(syndra);
subject.addObserver(miss4);
subject.notify({lat: 100, lng:200})


//Advanced Topic: Push and Pull distribution strategy
/*
New feed functions in FB, Zalo,...
- Open app and go into newfeed
- Different User get different new feeds
- Different amounts of new feed for different users
--> How to design the system?
--> Pull and Push design
*/

/*
Pull:
User --> access newfeed --> send request to get all followed user to get new posts --> n follow user - n request
Pros: User need to save post only 1 times --> memory efficency
Cons: User have to send n req to n followed --> high latency

Push:
User --> access newfeed --> send request to newfeed table only
Every time user create new post --> post will be saved into all the users following him/herself
Pros: When access newfeed, 1 request is sent only --> low latency
Cons: 1 post will be save into n-table of followed user --> high usage of memories --> Not a big deal since hardware becomes much cheaper now
 */