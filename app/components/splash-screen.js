import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        nextChapter() {
            this.sendAction("nextChapter");
        }
    }
});
