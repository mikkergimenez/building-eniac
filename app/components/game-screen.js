import Ember from 'ember';

export default Ember.Component.extend({
    showTransistors: true,
    showAccumulators: false,
    showSolderJoints: false,

    money: 150000,
    showMoney: true,

    reputation: 1,
    showReputation: true,

    accumulatorVacuumTubeCost: 280,
    accumulatorSolderJointCost: 7480,
    accumulatorVacuumTubes: 0,
    accumulatorSolderJoints: 0,

    vacuumTubes: 19,
    vacuumTubesTotal: 19,
    accumulators: 0,
    solderJoints: 19,
    buildingAccumulator: false,
    interns: 0,
    solderingIronsCost: 100,
    solderingGunsCost: 1000,
    solderingIrons: false,
    solderingGuns: false,
    internSolderingSkill: 1,
    internsShown: false,

    showInterns: function() {
        if (this.get("solderJoints") > 20) {
            if (this.get("internsShown") == false) {
                this.notifications.info("You're doing great collecting vacuum tubes, but it looks like you could use some help.");
                this.set("internsShown", true)
            }
            return true;
        }
        return false;
    },

    internFree: function() {
        return this.get("internCost") === 0;
    }.property("interns"),

    internCost: function() {

        if (this.get("interns") == 0) {
            return 1;
        }

        if (this.get("interns") == 1) {
            return 5;
        }

        if (this.get("interns") > 1) {
            return ((this.get("interns") - 1) * 10);
        }
    }.property("interns"),

    init: function() {
        this.tick();
        this._super();
    },

    accumulatorBuilt: function() {
        if ((this.get("vacuumTubes") > 280) && (this.get("solderJoints") > 7480)) {
            return true;
        } else {
            return false;
        }
    },

    finishAccumulator: function() {
        this.incremenetProperty("accumulators");
        this.set("accumulatorSolderJoints", 0);
        this.set("accumulatorVacuumTubes", 0);
    },

    internSolderingSkill: function() {
        return Math.ceil(Math.log10(this.get("solderJoints")));
    }.property("solderJoints"),

    solderingIncrementAmount: function() {
        var incrementAmount = this.get("interns") + 1;

        if (this.get("solderingIrons")) {
            incrementAmount  = incrementAmount * 2;
        }

        if (this.get("solderingGuns")) {
            incrementAmount = incrementAmount * 2;
        }

        incrementAmount = incrementAmount * this.get("internSolderingSkill");

        return incrementAmount
    }.property("solderingIrons", "solderingGuns", "solderJoints"),

    doSoldering: function() {
        if (this.get("accumulatorSolderJoints") < this.get("accumulatorSolderJointCost")) {
            this.incrementProperty("solderJoints", this.get("solderingIncrementAmount"));
            this.incrementProperty("accumulatorSolderJoints", this.get("solderingIncrementAmount"));
        }
    },

    finishAccumulator: function() {
        this.incrementProperty("accumulators")
        this.set("buildingAccumulator", false)
        this.set("accumulatorVacuumTubes", 0)
        this.set("accumulatorSolderJoints", 0)
    },

    getVacuumTubes: function() {
        if (this.get("accumulatorVacuumTubes") < this.get("accumulatorVacuumTubeCost")) {
            this.decrementProperty("vacuumTubes");
            this.incrementProperty("accumulatorVacuumTubes");
            if (this.get("vacuumTubes") >= 1) {
                this.decrementProperty("vacuumTubes");
                this.incrementProperty("accumulatorVacuumTubes");
            }
        }
    },

    workOnAccumulator: function() {
        if (this.get("vacuumTubes") >= 1) {
            this.getVacuumTubes()
            this.doSoldering()

            if (this.get("accumulatorVacuumTubes") >= this.get("accumulatorVacuumTubeCost")) {
                if (this.get("accumulatorSolderJoints") >= this.get("accumulatorSolderJointCost")) {
                    this.finishAccumulator();
                }
            }

        }
    },

    tick: function() {
        this.incrementProperty("vacuumTubes");
        this.incrementProperty("vacuumTubesTotal");
        // this.incrementProperty("money", this.get("reputation"));
        if (this.get("buildingAccumulator")) {
            this.workOnAccumulator()
        }

        if (this.accumulatorBuilt()) {
            this.finishAccumulator();
        }

        if (this.get("vacuumTubes") === 20) {
            this.notifications.info("We've got enough vacuum tubes to start working on our first panel!");
            this.set("showAccumulators", true);
            this.set("showSolderJoints", true);
        }

        if (this.get("buildingAccumulator") && this.get("reputation") < 5) {
            this.notifications.info("You've started building your first panel!");
            this.incrementProperty("reputation", 4);
        }

        if ((this.get("vacuumTubesTotal") === 100) && this.get("buildingAccumulator")) {
            this.incrementProperty("reputation", 5);
        }

        var oneSecond = 1000;
        var self = this;
        setTimeout(function(){ self.tick(); }, oneSecond);
    },

    actions: {
        upgrade: function(thingToUpgrade) {
            console.log(this.get("money") + " > " + thingToUpgrade + this.get(thingToUpgrade + "Cost"))
            if (this.get("money") > this.get(thingToUpgrade + "Cost")) {
                console.log("Buying " + thingToUpgrade);
                this.set(thingToUpgrade, true);
                this.decrementProperty("money", this.get(thingToUpgrade + "Cost"));
            } else {
                this.notifications.warning("You can't afford that yet.");
            }
        },

        startBuildingAccumulator: function() {
            if (this.get("buildingAccumulator") === false) {
                if (this.get("vacuumTubes") > 10) {
                    console.log("Building Accumulator");
                    this.set("vacuumTubes", this.get("vacuumTubes") - 10);
                    this.set("accumulatorVacuumTubes", this.get("accumulatorVacuumTubes") + 10);
                    this.set("buildingAccumulator", true);
                } else {
                    this.notifications.warning("You need at least 10 vacuum tubes to start building an accumulator");
                }
            }
        },

        hireIntern: function() {
            if (this.get("internCost") > this.get("reputation")) {
                this.notifications.warning("Students aren't interested in your project unless it loooks good on them.  Build some reputation before you can hire another.");
            } else {
                this.incrementProperty("interns");
            }
        }

    }

});
