var teamSearchEl = document.getElementById("team-search");
var searchButtonEl = document.getElementById("search-button");

// Fetch Team Highlights
// function searchYoutubeAPI() {
//     fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIjpyMS1pcaKbblX4aqhz-wMKyGR2HdRQ&type=video&q=" + teamSearchEl.value + " highlight")
//         .then(function(response) {
//             return response.json();
//         }) 
//         .then(function(response) {
//          let videoEl = document.getElementById("video")
//             // console.log(response);

//        videoEl.setAttribute("src", "https://www.youtube.com/embed/" + response.items[0].id.videoId + "?autoplay=1")

//     });
// };

// add event listener to "go" button and send that search term to APIs
searchButtonEl.addEventListener("click", function(event){
    
    // searchYoutubeAPI()
    searchOddsAPI()
    searchSportsDBAPI();
});

document.querySelector('#team-search').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    console.log('keypress')
    // searchYoutubeAPI()
    searchOddsAPI()
    searchSportsDBAPI();
  }
});

// Fetch Match Odds
 
function searchOddsAPI() {
    fetch("https://api.the-odds-api.com/v3/odds/?apiKey=ef7de8199afd716aca1f0d24bbd3badf&sport=soccer_epl&region=uk&mkt=h2h")
      .then(function(response) {
        return response.json();
    }) 
      .then(function(response) {
      console.log(response);

      var matchEl = document.getElementById("game-scorecard");
      var competition = document.createElement("h2");
      var teamOne = document.createElement("h2");
      var teamTwo = document.createElement("h2");
      var matchTime = document.createElement("h3");
      

      // Raj's code
      var oddObj = response.data;
      let teamObj = oddObj.find(obj =>
        obj.home_team.toLowerCase() == teamSearchEl.value.toLowerCase())
          let awayTeam = []
          let selectedTeams = teamObj.teams;
          for (var i = 0; i< selectedTeams.length; i++) {
            if (selectedTeams[i] !== teamObj.home_team) {
              awayTeam.push(selectedTeams[i])
              competition.textContent = "Competition: " + teamObj.sport_nice;
              teamOne.textContent = "Home: " + teamObj.home_team;
              teamTwo.textContent = "Away: " + awayTeam[0];
            }
          }
          // Raj's code end

      // var oddTeams = response.data;
      // console.log(oddTeams);
      // console.log(typeof teamSearchEl)

      // // for (
      // //  const team in response 
      // // ) {
      // //   // if (response.hasOwnProperty(team)) {
      // //   console.log(team) 
      // // }
      //   for (
      //     var i = 0; i < oddTeams.length; i++
      //   )   
      //     var oddResponse = response.data[i];
      //     // var oddTeamsOne = oddResponse.home_team;
      //     var stringTeamSearch = teamSearchEl.value
      //     console.log(stringTeamSearch);
      //   if (stringTeamSearch === oddResponse.home_team) {
      //     console.log("test");
      //     console.log(response.data[0])
      //     // return oddResponse
          // competition.textContent = "Competition: " + oddResponse.sport_nice;
          // teamOne.textContent = "Home: " + response.data[0].teams[0];
          // teamTwo.textContent = "Away: " + response.data[0].teams[1];

          // displays home and away team and formatted match time
          matchEl.append(competition, teamOne, teamTwo, matchTime);
          $("#game-scorecard").empty().append(competition, teamOne, teamTwo, matchTime);
          
        
        // {
        //   console.log(oddTeams[i].teams)
        // }

     


// converts unix commence_time to formatted time
      let unixMatchTime = response.data[0].commence_time;
      let matchTimeFormat = new Date(unixMatchTime * 1000);
      var hours = matchTimeFormat.getHours();
      var minutes = "0" + matchTimeFormat.getMinutes();

      var formattedTime = hours + ":" + minutes.substr(-2);
      // console.log(formattedTime);
    // displays formatted time
      matchTime.textContent = "Match Time: " + formattedTime;

    // populate odds element
    var oddsEl = document.getElementById("game-spread");
    var homeOdds = document.createElement("h2");
    var awayOdds = document.createElement("h2");
    var drawOdds = document.createElement("h2");
    var oddsSource = document.createElement("h3");
    
    homeOdds.textContent = "Home Odds: " + response.data[0].sites[0].odds.h2h[0];
    awayOdds.textContent = "Away Odds: " + response.data[0].sites[0].odds.h2h[1];
    drawOdds.textContent = "Draw Odds: " + response.data[0].sites[0].odds.h2h[2];
    oddsSource.textContent = "Source: " + response.data[0].sites[0].site_nice;


    oddsEl.append(homeOdds, awayOdds, drawOdds, oddsSource);

    $("#game-spread").empty().append(homeOdds, awayOdds, drawOdds, oddsSource);

    });
  }


// This API for team crest / name / league table / previous fixtures if we need/want to add

function searchSportsDBAPI() {
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamSearchEl.value)
        .then(function(response) {
          return response.json();
      }) 
      .then(function(response) {
        console.log(response);

        // console.log(response.teams[0].strTeam);
        // console.log(response.teams[0].strTeamBadge);

       
        let imageEl = document.getElementById("team-crest");
        imageEl.setAttribute("src", response.teams[0].strTeamBadge)
        imageEl.height = 225;
        imageEl.width = 225;

        

        let clubNameEl = document.getElementById("club-name");
        

        var clubName = (response.teams[0].strTeam)

        clubNameEl.append(clubName);
        
        $("#club-name").empty().append(clubName);
      })
};