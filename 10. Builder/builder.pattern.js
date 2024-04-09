//Create player classes
class FootballFifaOnlinePlayer {
    constructor(builder){
        this.name = builder.name;
        this.position = builder.position;
        this.nationality = builder.nationality;
        this.team = builder.team;
        this.stats = builder.stats;
    }
    toString(){
        let player = `Player: \n`;
        player += `- Name: ${this.name} \n`;
        player += `- Position: ${this.position} \n`;
        player += `- Nationality: ${this.nationality} \n`;
        player += `- Team: ${this.team} \n`;
        player += `- Stats: ${JSON.stringify(this.stats)} \n`;
        return player;
    }
}

// Create Builder classed 
class FootballFifaOnlinePlayerBuilder {
    constructor(){
        this.name = "";
        this.position = "";
        this.nationality = "";
        this.team = "";
        this.stats = {};
    }
    withName (name) {
        this.name = name;
        return this
    }
    withPosition (position) {
        this.position = position;
        return this
    }
    withNationality (nationality) {
        this.nationality = nationality;
        return this
    }
    withTeam (team) {
        this.team = team;
        return this
    }
    withStats (stats) {
        this.stats = stats;
        return this
    }
    build() {
        return new FootballFifaOnlinePlayer(this);
    }
}

const playerBuilderPattern = new FootballFifaOnlinePlayerBuilder;
const cr7 = playerBuilderPattern
    .withName("CR7")
    .withPosition("FW")
    .withNationality("Portugal")
    .withTeam("Real Marid")
    .withStats({goals: 0, assists: 0})
    .build()

console.log(cr7.toString());


