// Removes Twitter Trend Section

function checkDOMChange() {
    var twitter_feed = document.querySelectorAll(".r-g2wdr4");
    if (twitter_feed.length != 0) {

        twitter_feed[0].outerHTML = "";
        twitter_feed[1].outerHTML = "";



    } else {
        setTimeout(checkDOMChange, 100);
    }
}

checkDOMChange();