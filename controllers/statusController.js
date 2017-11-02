var db = require('../models');

//all veggies
function index(req, res) {
	db.Status.find({}, function(err, allposts){
		res.json(allposts);
	});
};

//one veggie
function show(req, res) {
	var statusId = req.params.status_id;
	db.Status.find({_id:statusId}, function(err, foundpost){
		if(err){res.send(err)}
		res.json(foundpost);
	});
	console.log('status id is: ', req.params.status_id);
};

//create
function create(req, res) {
	var status = new db.Status();
	status.title = req.body.title;
	status.description = req.body.description;
	var id = req.body.userId;
	db.User.findOne({_id: id}, function(err, user){
		if(err){
			console.log('no user');
			console.log(err);
		}
		console.log('user found: ', user);

		status.user = user;
		// status.username = user.username;
		status.save(function(err) {
			if(err){res.send(err)}
			console.log('created ', req.body.title);
			res.json('created a post');
		});
	})
};

//destroy
function destroy(req, res) {
	var statusId = req.params.status_id;
	db.Status.remove({_id:statusId}, function(err, foundpost){
		if(err){res.send(err)}
		res.json('deleted a post');
	})
};

function nuke(req,res) {
	db.Status.remove(function(err, succ){
		res.json(succ);
	})
};


module.exports = {
	index: index,
	show: show,
	create: create,
	destroy: destroy,
	nuke: nuke
};
