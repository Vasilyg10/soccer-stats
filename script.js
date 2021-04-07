fetch("https://www.scorebat.com/video-api/v1/")
    .then(response => response.json())
    .then(json => console.log(json));