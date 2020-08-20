function printScores () {
    var list = JSON.parse(localStorage.getItem("highscores")) || []
    for (var i = 0; i < list.length; i++) {
       
        var currScore = list[i].score
        var currInitial = list[i].initials

        var listEl = document.createElement("p")
        listEl.textContent = `Current score: ${currScore} User: ${currInitial}`

        document.querySelector("#list-of-scores").append(listEl)
    }

};
printScores();