import Ember from 'ember';
const {$} = Ember;

export default Ember.Component.extend({
	didInsertElement(){
		this._super(...arguments);
		$('#blah').hide().fadeIn('90000');
	}

	/***************

THIS IS BUILT IN SIMPLE JQUERY, HACKY, AND NOT GOOD
	THE REAL EXAMPLE IS SHOWIN IN THE 
									INDEX.HBS PAGE!!!

	*////////////////
});
