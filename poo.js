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

const android2 = new Android;
