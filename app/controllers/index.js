import Ember from 'ember';

export default Ember.Controller.extend({
    showImage: function() {
        return this.get("model.type") === "text-image"
    }.property("model.type"),

    showAnimation: function() {
        return this.get("model.type") === "text-animation"
    }.property("model.type"),

    showGame: function() {
        return (this.get("model.type") === "game")
    }.property("model.type"),

    showText: function() {
        return ((this.get("model.type") === "text") || (this.get("model.type") === "text-image") || (this.get("model.type") === "text-animation"))
    }.property("model.type"),

    loadNextChapter() {
        this.transitionToRoute('index', parseInt(this.get("model.id")) + 1);
    },

    startChapter() {
        var controller = this;
        if (this.get("model.goal_type") === "time") {
            setTimeout(function () {
                controller.loadNextChapter()
            }, controller.get("model.goal_value") * 1000);
        }
    },

    actions: {
        nextChapter: function() {
            this.loadNextChapter()
        }
    }
});
