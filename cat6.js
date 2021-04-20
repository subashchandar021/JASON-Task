var cat = {
    "name": 'Fluffy',
    "activities":['play', 'eat cat food'],
    "catFriends":[
                  {
                   "name": 'bar',
                   "activities": ['be grumpy', 'eat bread omlete'],
                   "weight": 8,
                  "furcolor": 'white'
                  }, 
                 {
                   "name": 'foo',
                    "activities": ["sleep", "pre-sleep naps"],
                    "weight": 3
                  }
                ]
               }
               cat.catFriends[0].activities=["be grumpy","eat bread omlete","sleep","play"];
               cat.catFriends[1].activities=["sleep","pre-sleep naps","play","drink milk"];
               console.log(cat.catFriends[0].activities);
               console.log(cat.catFriends[1].activities);
