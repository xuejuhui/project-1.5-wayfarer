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


  var posts = [
    {
      title: "Cool Place",
      description: "I think that London is a really cool place to visit and I would recommend it to any of my friends."
    },

    {
      title: "Don't Go",
      description: "I wasn't a huge fan of this place. I felt like my life was in danget all of the time."
    },

    {
      title: "Nice Plane Flight",
      description: "The plane flight was really nice. I would recommend Southwest to anyone... not United"
    },

    {
      title: "France",
      description: "I think France is a great place and I loved the culture. I think everyone should go once in their life."
    }
  ];

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
