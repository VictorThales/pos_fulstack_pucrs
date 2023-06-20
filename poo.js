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
