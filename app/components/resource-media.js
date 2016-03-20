import Ember from 'ember';

export default Ember.Component.extend({
    hovering: false,

    percentComplete: function() {
        var resourceOne = this.get("collectedResourceOne");
        var resourceTwo = this.get("collectedResourceTwo");

        var resourceOneTotal = this.get("collectedResourceOneTotal");
        var resourceTwoTotal = this.get("collectedResourceTwoTotal");

        var percent = Math.min((resourceOne / resourceOneTotal), (resourceTwo / resourceTwoTotal));
        console.log(percent);
        return Math.floor(percent * 100);
    }.property("collectedResourceOne", "collectedResourceTwo"),

    mouseEnter() {
        this.set("hovering", true)
    },

    mouseLeave() {
        this.set("hovering", false)
    },

    actions: {
        buyAction() {
            this.sendAction("buyAction");
        }
    }
});
