var Car = Backbone.Model.extend ({

	defaults: {
		make:'',
		model:'',
	},
	idAttribute: "_id",

	initialize: function (){
		var model = this.get('model');
		console.log(model + 'has been added to your garage.');
	}
});

var garage = Backbone.Collection.extend ({

	model: Car,
	url: "http://tiy-atl-fe-server.herokuapp.com/collections/joshua" 
});

var all_cars = new garage();