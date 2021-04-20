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
               cat.catFriends[0].furcolor="grey";
               console.log(cat.catFriends[0]);