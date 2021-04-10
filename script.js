// Fetch Team Highlights
fetch("https://www.scorebat.com/video-api/v1/")
    .then(response => response.json())
    .then(json => console.log(json));

// Fetch Match Odds
 fetch("https://api.the-odds-api.com/v3/odds/?apiKey=8509b882b891fad9105002e5e52276cc&sport=soccer_epl&region=uk&mkt=h2h")
        .then(response => response.json())
        .then(json => console.log(json));


// This API for team crest / league table / previous fixtures if we need/want to add
// fetch("https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=4328&r=31&s=2020-2021&api_key=1")
//         .then(response => response.json())
//         .then(json => console.log(json));

// The below code is the JavaScript supplied by the scorebat.com embed code

// <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>