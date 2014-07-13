console.log('The Iron Yard Rocks');
console.log(Backbone);

all_cars.fetch().done(function(){
	new CarView({collection: all_cars});
});

// var mustang = new Car({ 
// 	make: 'Ford',
// 	model: '1965 Mustang',
// });
// all_cars.add(mustang).save();

// var camaro = new Car({ 
// 	make: 'Chevrolet',
// 	model: '1969 Camaro SS',
// });
// all_cars.add(camaro).save();

// var roadrunner = new Car({ 
// 	make: 'Plymouth',
// 	model: '1971 RoadRunner',
// });
// all_cars.add(roadrunner).save();

// var m3 = new Car({ 
// 	make: 'BMW',
// 	model: '2000 E46 M3',
// });
// all_cars.add(m3).save();

// var belair = new Car({ 
// 	make: 'Chevrolet',
// 	model: '1955 BelAir',
// });
// all_cars.add(belair).save();

// var de_lorean = new Car({ 
// 	make: 'DMC',
// 	model: '1983 DeLorean DMC-12',
// });
// all_cars.add(de_lorean).save();

// var bye = all_cars.findWhere({ model: '1965 Mustang'});
// bye.destroy();

// var bye_bye = all_cars.findWhere({ model: '1969 Camaro SS'});
// bye_bye.destroy();
// var bye_bye_birdie = all_cars.findWhere({ model: '1971 RoadRunner'});
// bye_bye_birdie.destroy();

var mustang = new Car({ 
	make: 'Ford',
	model: '1965 Mustang',
});
all_cars.add(mustang).save();

var camaro = new Car({ 
	make: 'Chevrolet',
	model: '1969 Camaro SS',
});
all_cars.add(camaro).save();

var roadrunner = new Car({ 
	make: 'Plymouth',
	model: '1971 RoadRunner',
});
all_cars.add(roadrunner).save();

var m3 = new Car({ 
	make: 'BMW',
	model: '2000 E46 M3',
});
all_cars.add(m3).save();

var belair = new Car({ 
	make: 'Chevrolet',
	model: '1955 BelAir',
});
all_cars.add(belair).save();

var de_lorean = new Car({ 
	make: 'DMC',
	model: '1983 DeLorean DMC-12',
});
all_cars.add(de_lorean).save();
