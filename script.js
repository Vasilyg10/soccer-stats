fetch("https://www.scorebat.com/video-api/v1/")
    .then(response => response.json())
    .then(json => console.log(json));

 fetch("https://api.the-odds-api.com/v3/odds/?apiKey=8509b882b891fad9105002e5e52276cc&sport=soccer_epl&region=uk&mkt=h2h")
        .then(response => response.json())
        .then(json => console.log(json));