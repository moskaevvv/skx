let fullSchedule1 = [
  {
    "city" : "САНКТ-ПЕТЕРБУРГ",
    "flights" : {
        "flightNumber" : "С76003",
        "fromSaransk": "false",
        "company": "S7 Airlines",
        "airPort" : "LED",
        "parts" : [
          {
            "days" : ["пн", "пт"],
            "timeFrom" : "14:10",
            "timeTo" : "16:15",
          },
          {
            "days" : ["сб"],
            "timeFrom" : "7:25",
            "timeTo" : "9:40",
          }
        ]
      }
    }
];

let fullSchedule2 = [
  {
    "city" : "САНКТ-ПЕТЕРБУРГ",
    "flights" : [
          {
            "flightNumber" : "С76003",
            "airPort" : "LED",
            "directionFromSaransk": "false",
            "days" : "[1, ., ., ., 5, ., .]",
            "timeFrom" : "14:10",
            "timeTo" : "16:15",
          },
          {
            "flightNumber" : "С76003",
            "airPort" : "LED",
            "directionFromSaransk": "false",
            "days" : "[., ., ., ., ., 6, .]",
            "timeFrom" : "7:25",
            "timeTo" : "9:40",
          }
        ]
    }
];
