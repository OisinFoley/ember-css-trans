import Ember from 'ember';

export default Ember.Controller.extend({
	show:false,
	actions:{
		pressed(){
			console.log('hello');
			this.toggleProperty('show');
		}
	}

});
