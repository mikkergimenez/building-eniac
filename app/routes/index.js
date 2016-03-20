import Ember from 'ember';

export default Ember.Route.extend({
    playing: false,

    model: function(params) {

        var chapter = 1;
        if (params.chapter_id) {
            chapter = params.chapter_id;
        }
        return this.store.findRecord('chapter', chapter);
    },

    setupController: function(controller, model) {
        controller.set('model', model);
        controller.startChapter();
    }
});
