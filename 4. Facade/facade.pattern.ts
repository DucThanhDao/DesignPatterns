//#region Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem.
/**
 * Separate big system into smaller subsystem 
 * From Multiple step --> step by step
 */
// Subsystem: DVD Player
class DVDPlayer {
  turnOn() {
    console.log("DVD Player: Turning on");
  }

  turnOff() {
    console.log("DVD Player: Turning off");
  }

  playMovie(movie: string) {
    console.log(`DVD Player: Playing ${movie}`);
  }
}

// Subsystem: Audio Amplifier
class AudioAmplifier {
  turnOn() {
    console.log("Audio Amplifier: Turning on");
  }

  turnOff() {
    console.log("Audio Amplifier: Turning off");
  }

  setVolume(volume: number) {
    console.log(`Audio Amplifier: Setting volume to ${volume}`);
  }
}

// Subsystem: Projector
class Projector {
  turnOn() {
    console.log("Projector: Turning on");
  }

  turnOff() {
    console.log("Projector: Turning off");
  }

  setInput(input: string) {
    console.log(`Projector: Setting input to ${input}`);
  }
}

// Facade: HomeTheaterFacade
class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private audioAmplifier: AudioAmplifier;
  private projector: Projector;

  constructor() {
    this.dvdPlayer = new DVDPlayer();
    this.audioAmplifier = new AudioAmplifier();
    this.projector = new Projector();
  }

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...");
    this.dvdPlayer.turnOn();
    this.audioAmplifier.turnOn();
    this.audioAmplifier.setVolume(10);
    this.projector.turnOn();
    this.projector.setInput("DVD");
    this.dvdPlayer.playMovie(movie);
  }

  endMovie() {
    console.log("Shutting down the home theater...");
    this.dvdPlayer.turnOff();
    this.audioAmplifier.turnOff();
    this.projector.turnOff();
  }
}

// Client code
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("Inception");
homeTheater.endMovie();

//#endregion

//#region  Use the Facade when you want to structure a subsystem into layers.
/**
 * Seperate 1 big layer to smaller layers, each layer provide a specific service
 */
// Subsystem: Data Access Layer
class DataAccessLayer {
    fetchData() {
      console.log("Data Access Layer: Fetching data from the database");
    }
  }
  
  // Subsystem: Business Logic Layer
  class BusinessLogicLayer {
    processData(data: any) {
      console.log("Business Logic Layer: Processing data");
      // Business logic operations on data
    }
  }
  
  // Subsystem: Presentation Layer
  class PresentationLayer {
    renderUI() {
      console.log("Presentation Layer: Rendering user interface");
    }
  }
  
  // Facade: ApplicationFacade
  class ApplicationFacade {
    private dataAccessLayer: DataAccessLayer;
    private businessLogicLayer: BusinessLogicLayer;
    private presentationLayer: PresentationLayer;
  
    constructor() {
      this.dataAccessLayer = new DataAccessLayer();
      this.businessLogicLayer = new BusinessLogicLayer();
      this.presentationLayer = new PresentationLayer();
    }
  
    runApp() {
      console.log("Starting the application...");
      this.dataAccessLayer.fetchData();
      const data = {}; // Simulated data
      this.businessLogicLayer.processData(data);
      this.presentationLayer.renderUI();
      console.log("Application started successfully.");
    }
  }
  
  // Client code
  const appFacade = new ApplicationFacade();
  appFacade.runApp();
  
//#endregion