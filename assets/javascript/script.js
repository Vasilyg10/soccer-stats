// get elements from HTML
var teamSearchEl = document.getElementById("team-search");
var searchButtonEl = document.getElementById("search-button");

// Fetch Team Highlights
function searchYoutubeAPI() {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIjpyMS1pcaKbblX4aqhz-wMKyGR2HdRQ&type=video&q=" + teamSearchEl.value + " highlight")
        .then(function(response) {
            return response.json();
        }) 
        .then(function(response) {
            let videoEl = document.getElementById("video")

        videoEl.setAttribute("src", "https://www.youtube.com/embed/" + response.items[0].id.videoId + "?autoplay=1")
    });
};

// add event listener to "go" button and send that search term to APIs
searchButtonEl.addEventListener("click", function(event){  
    searchYoutubeAPI()
    searchOddsAPI()
    searchSportsDBAPI();
});

document.querySelector('#team-search').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    console.log('keypress')
    searchYoutubeAPI()
    searchOddsAPI()
    searchSportsDBAPI();
  }
});

// save favorite team to local storage
var favoriteTeam = function (){
  var sel = $('select');
  
  var clearSelected = function(){
      sel.find(':selected').prop('selected', false);
  }
  
  if(localStorage.getItem('pref')){
    var pref = localStorage.getItem('pref');
    clearSelected();
    //set the selected state to true on the option localStorage remembers
    sel.find('#' + pref).prop('selected', true);
  }

  var setPreference = function(){
    //remember the ID of the option the user selected
    localStorage.setItem('pref', sel.find(':selected').attr('id'));
  };
  
  sel.on('change', setPreference);
  console.log(favoriteTeam);
};
$(document).ready(favoriteTeam);

// Fetch Match Odds
function searchOddsAPI() {
    fetch("https://api.the-odds-api.com/v3/odds/?apiKey=ef7de8199afd716aca1f0d24bbd3badf&sport=soccer_epl&region=uk&mkt=h2h")
      .then(function(response) {
        return response.json();
    }) 
      .then(function(response) {

      var matchEl = document.getElementById("game-scorecard");
      var competition = document.createElement("h2");
      var teamOne = document.createElement("h2");
      var teamTwo = document.createElement("h2");
      var matchTime = document.createElement("h3");
      

// find team in arrays
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

// displays home and away team and formatted match time
    matchEl.append(competition, teamOne, teamTwo, matchTime);
      $("#game-scorecard").empty().append(competition, teamOne, teamTwo, matchTime);
          
// converts unix commence_time to formatted time
      let unixMatchTime = teamObj.commence_time;
      let matchTimeFormat = new Date(unixMatchTime * 1000);
      var hours = matchTimeFormat.getHours();
      var minutes = "0" + matchTimeFormat.getMinutes();

      var formattedTime = hours + ":" + minutes.substr(-2);
      
      matchTime.textContent = "Match Time: " + formattedTime;

// populate odds element
    var oddsEl = document.getElementById("game-spread");
    var homeOdds = document.createElement("h2");
    var awayOdds = document.createElement("h2");
    var drawOdds = document.createElement("h2");
    var oddsSource = document.createElement("h3");
    
    homeOdds.textContent = "Home Odds: " + teamObj.sites[0].odds.h2h[0];
    awayOdds.textContent = "Away Odds: " + teamObj.sites[0].odds.h2h[1];
    drawOdds.textContent = "Draw Odds: " + teamObj.sites[0].odds.h2h[2];
    oddsSource.textContent = "Source: " + teamObj.sites[0].site_nice;

    oddsEl.append(homeOdds, awayOdds, drawOdds, oddsSource);

    $("#game-spread").empty().append(homeOdds, awayOdds, drawOdds, oddsSource);

    });
  }

// Fetch Team Information
function searchSportsDBAPI() {
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamSearchEl.value)
        .then(function(response) {
          return response.json();
      }) 
        .then(function(response) {   
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