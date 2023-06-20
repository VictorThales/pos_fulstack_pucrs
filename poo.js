//factory
function createAndroid (type, velocity, cpu, state) {
    return {
        type,
        velocity,
        cpu,
        state,
        stateOn: function () {
            this.state = true;
        },
        stateOff: function () {
            this.state = false;
        },
        speedUp: function () {
            this.velocity = this.velocity + 50;
        },
        speedDown: function () {
            this.velocity = this.velocity - 50;
        },
    };
};

const android1 = createAndroid('original',150,2.5,true);

//constructor

function Android() {
    this.type = "Original";
    this.velocity = 100;
    this.state = true;
    this.cpu = "2.7";
    this.stateOn = function () {
        this.state = true;
    };
    this.stateOff = function () {
        this.state = false;
    };
     this.speedUp = function () {
        this.velocity = this.velocity + 50;
    };
    this.speedDown = function () {
        this.velocity = this.velocity - 50;
    };
}

const android2 = new Android();

//prototype
Object.getPrototypeOf(android2); 
//Log -> {constructor: ƒ} Android() ...

//create
const android3 = Object.create(android2);

Android.prototype.message = function () {
    console.log("🤖 Hello human, i am C-3PO");
};

//next Android objects has a message method

//Class

class Human {
    constructor(name, age) {
        this.nome = nome;
        this.age = age;
    }
    message() {
        console.log("👦🏻 Hello android, i am " + this.nome)
    }
}

const human1 = new Human("finn",12);

//extends and polymorphism

class Astronaut extends Human {
    constructor(name, age, target, rocket){
        super(name, age);
        this.target = target;
        this.rocket = rocket;
    }
    message() {
      super.message();
      console.log("and my rocket is "+ this.rocket);
    };
}

const astronaut1 = new Astronaut("Simon","60","mars","falcon9");
astronaut1.message();
//Log -> 👦🏻 Hello android, i am Simon and my rocket is the falcon9 
