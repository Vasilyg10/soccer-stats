var teamSearchEl = document.getElementById("team-search");
var searchButtonEl = document.getElementById("search-button");

// Fetch Team Highlights
function searchYoutubeAPI() {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAFFU4jeWp4CulQBzEPnVz-mnODODs_Rpg&type=video&q=" + teamSearchEl.value)
        .then(function(response) {
            return response.json();
        }) 
        .then(function(response) {
         let videoEl = document.getElementById("video")
            console.log(response);

       videoEl.setAttribute("src", "https://www.youtube.com/embed/" + response.items[0].id.videoId + "?autoplay=1")

    });
};


searchButtonEl.addEventListener("click", function(){
    searchYoutubeAPI()
    searchOddsAPI();
});


// Fetch Match Odds
 
function searchOddsAPI() {
    // fetch("https://api.the-odds-api.com/v3/odds/?apiKey=8509b882b891fad9105002e5e52276cc&sport=soccer_epl&region=uk&mkt=h2h")
        // .then(response => response.json())
        // .then(json => console.log(json));


 var mockData = {
            "success": true,
            "data": [
              {
                "id": "5cc7c4e08fb03088252f8e0b046bb761",
                "sport_key": "soccer_epl",
                "sport_nice": "EPL",
                "teams": ["Bournemouth", "Everton"],
                "commence_time": 1535205600,
                "home_team": "Bournemouth",
                "sites": [
                  {
                    "site_key": "unibet",
                    "site_nice": "Unibet",
                    "last_update": 1535157373,
                    "odds": { "h2h": [2.65, 2.7, 3.6] }
                  },
                  {
                    "site_key": "betvictor",
                    "site_nice": "Bet Victor",
                    "last_update": 1535157374,
                    "odds": { "h2h": [2.55, 2.8, 3.6] }
                  },
                  {
                    "site_key": "ladbrokes",
                    "site_nice": "Ladbrokes",
                    "last_update": 1535157143,
                    "odds": { "h2h": [2.5, 2.65, 3.5] }
                  },
                  {
                    "site_key": "betfair",
                    "site_nice": "Betfair",
                    "last_update": 1535157209,
                    "odds": { "h2h": [2.68, 2.8, 3.65] }
                  },
                  {
                    "site_key": "skybet",
                    "site_nice": "Sky Bet",
                    "last_update": 1535157054,
                    "odds": { "h2h": [2.4, 2.63, 3.6] }
                  },
                  {
                    "site_key": "paddypower",
                    "site_nice": "Paddy Power",
                    "last_update": 1535157357,
                    "odds": { "h2h": [2.6, 2.7, 3.5] }
                  }
                ],
                "sites_count": 6
              },
              {
                "id": "d689bc4a1d0fe53463e500059280057e",
                "sport_key": "soccer_epl",
                "sport_nice": "EPL",
                "teams": ["Arsenal", "West Ham United"],
                "commence_time": 1535205600,
                "home_team": "Arsenal",
                "sites": [
                  {
                    "site_key": "unibet",
                    "site_nice": "Unibet",
                    "last_update": 1535157373,
                    "odds": { "h2h": [1.38, 8.75, 5.5] }
                  },
                  {
                    "site_key": "betvictor",
                    "site_nice": "Bet Victor",
                    "last_update": 1535157374,
                    "odds": { "h2h": [1.36, 8.5, 5.5] }
                  },
                  {
                    "site_key": "ladbrokes",
                    "site_nice": "Ladbrokes",
                    "last_update": 1535157143,
                    "odds": { "h2h": [1.36, 8, 5] }
                  },
                  {
                    "site_key": "betfair",
                    "site_nice": "Betfair",
                    "last_update": 1535157209,
                    "odds": { "h2h": [1.39, 9.4, 5.6] }
                  },
                  {
                    "site_key": "skybet",
                    "site_nice": "Sky Bet",
                    "last_update": 1535157054,
                    "odds": { "h2h": [1.36, 7.5, 5] }
                  },
                  {
                    "site_key": "paddypower",
                    "site_nice": "Paddy Power",
                    "last_update": 1535157357,
                    "odds": { "h2h": [1.33, 8.5, 5.5] }
                  }
                ],
                "sites_count": 6
              },
              {
                "id": "c66e5a4cfe4e2571734021d8340a02c2",
                "sport_key": "soccer_epl",
                "sport_nice": "EPL",
                "teams": ["Huddersfield Town", "Cardiff City"],
                "commence_time": 1535205600,
                "home_team": "Huddersfield Town",
                "sites": [
                  {
                    "site_key": "unibet",
                    "site_nice": "Unibet",
                    "last_update": 1535157373,
                    "odds": { "h2h": [2.4, 3.65, 3] }
                  },
                  {
                    "site_key": "betvictor",
                    "site_nice": "Bet Victor",
                    "last_update": 1535157374,
                    "odds": { "h2h": [2.4, 3.6, 3] }
                  },
                  {
                    "site_key": "ladbrokes",
                    "site_nice": "Ladbrokes",
                    "last_update": 1535157143,
                    "odds": { "h2h": [2.3, 3.4, 2.9] }
                  },
                  {
                    "site_key": "betfair",
                    "site_nice": "Betfair",
                    "last_update": 1535157209,
                    "odds": { "h2h": [2.46, 3.7, 3.05] }
                  },
                  {
                    "site_key": "skybet",
                    "site_nice": "Sky Bet",
                    "last_update": 1535157054,
                    "odds": { "h2h": [2.38, 3.4, 2.9] }
                  },
                  {
                    "site_key": "paddypower",
                    "site_nice": "Paddy Power",
                    "last_update": 1535157357,
                    "odds": { "h2h": [2.3, 3.5, 2.88] }
                  }
                ],
                "sites_count": 6
              },
              {
                "id": "d676957e3a4a2d652c7c4237869f7c0b",
                "sport_key": "soccer_epl",
                "sport_nice": "EPL",
                "teams": ["Southampton", "Leicester City"],
                "commence_time": 1535205600,
                "home_team": "Southampton",
                "sites": [
                  {
                    "site_key": "unibet",
                    "site_nice": "Unibet",
                    "last_update": 1535157373,
                    "odds": { "h2h": [2.45, 3.2, 3.3] }
                  },
                  {
                    "site_key": "betvictor",
                    "site_nice": "Bet Victor",
                    "last_update": 1535157374,
                    "odds": { "h2h": [2.4, 3.3, 3.25] }
                  },
                  {
                    "site_key": "ladbrokes",
                    "site_nice": "Ladbrokes",
                    "last_update": 1535157143,
                    "odds": { "h2h": [2.35, 3.2, 3.1] }
                  },
                  {
                    "site_key": "skybet",
                    "site_nice": "Sky Bet",
                    "last_update": 1535157054,
                    "odds": { "h2h": [2.3, 3.2, 3.2] }
                  },
                  {
                    "site_key": "paddypower",
                    "site_nice": "Paddy Power",
                    "last_update": 1535157357,
                    "odds": { "h2h": [2.4, 3.1, 3.2] }
                  },
                  {
                    "site_key": "betfair",
                    "site_nice": "Betfair",
                    "last_update": 1535157209,
                    "odds": { "h2h": [2.44, 3.3, 3.4] }
                  }
                ],
                "sites_count": 6
              }
            ]
          };

      var oddsEl = document.getElementById("game-scorecard");
      var teamOne = document.createElement("h2");
      var teamTwo = document.createElement("h2");
      var matchTime = document.createElement("h3");
      console.log(mockData.data);
      teamOne.textContent = mockData.data[0].teams[0];
      teamTwo.textContent = mockData.data[0].teams[1];
      matchTime.textContent = mockData.data[0].commence_time;

      oddsEl.append(teamOne, teamTwo, matchTime);



        }

// This API for team crest / league table / previous fixtures if we need/want to add
// fetch("https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=4328&r=31&s=2020-2021&api_key=1")
//         .then(response => response.json())
//         .then(json => console.log(json));