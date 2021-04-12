// Fetch Team Highlights
fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAFFU4jeWp4CulQBzEPnVz-mnODODs_Rpg&type=video&q=liverpool")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        let videoEl = document.getElementById("video")

        // response.setAttribute("src", "https://www.youtube.com/embed/9PAIC8Yv29s?autoplay=1")


        videoEl.append(response);
    });

// Fetch Match Odds
//  fetch("https://api.the-odds-api.com/v3/odds/?apiKey=8509b882b891fad9105002e5e52276cc&sport=soccer_epl&region=uk&mkt=h2h")
//         .then(response => response.json())
//         .then(json => console.log(json));


// This API for team crest / league table / previous fixtures if we need/want to add
// fetch("https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=4328&r=31&s=2020-2021&api_key=1")
//         .then(response => response.json())
//         .then(json => console.log(json));