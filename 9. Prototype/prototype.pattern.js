// Define a prototype object for fifaonline

class FootballFifaOnline {
    constructor(name, team, position, goals) {
        this.name = name;
        this.team = team;
        this.position = position;
        this.goals = goals;
    }
    score() {
        this.goals++
    }
    clone() {
        return new FootballFifaOnline(this.name, this.team, this.position, this.goals)
    }
}

//Drawbacks
FootballFifaOnline.prototype.stats = {
    minutesPlayed: 0
}

const prototypePattern = new FootballFifaOnline("Ronaldo", "Real Marid", "FW", 0);

//create multi instance of the ff online player
const cr7 = prototypePattern.clone();
cr7.stats.minutesPlayed +=1000;
const m10 = prototypePattern.clone();
m10.name = "Messi";
m10.team = "PSG";

//Test instance
cr7.score();
console.log(`${cr7.name} has recored ${cr7.goals} within ${JSON.stringify(cr7.stats)}`);
console.log(`${m10.name} has recored ${m10.goals} within ${JSON.stringify(m10.stats)}`);

//--> Big Cons of prototype pattern
/*
All properties in preferences will be shared to the others
*/
