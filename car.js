var myCar = {
    "make": "Bugatti",
    "model": "Bugatti La Voiture Noire",
    "year": 2019,
    "accidents": [
    {
    "date": "3/15/2019",
    "damage_points": 5000,
    "atFaultForAccident": true
    },
    {
    "date": "7/4/2022",
    "damage_points": 2200,
    "atFaultForAccident": true
    },
    {
    "date": "6/22/2021",
    "damage_points": 7900,
    "atFaultForAccident": true
    }
    ]
   }
   myCar.accidents[0].atFaultForAccident=false;
   myCar.accidents[1].atFaultForAccident=false;
   myCar.accidents[2].atFaultForAccident=false;
   console.log(myCar.accidents);
   console.log(myCar.accidents[0].date);
   console.log(myCar.accidents[1].date);
   console.log(myCar.accidents[2].date);