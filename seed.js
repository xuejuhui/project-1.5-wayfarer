var user = require('./models');

var user_list = [
  {
    username: 'go home',
    password: '123'
  },
  {
    username: 'come back',
    password: '1245'
  },
  {
    username: 'i hate u ',
    password: 'sdwafd'
  }
  ]
  // remove all records that match {} -- which means remove ALL records
  console.log(user);
user.User.remove({}, function(err, users){
  if(err) {
    console.log('Error occurred in remove', err);
    return;
  } 

    user.User.create(user_list, function(err, users){
      if (err) { return console.log('err', err); }
      console.log("created", users.length, "users");
    });
  
});

  