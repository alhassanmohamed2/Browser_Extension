// Removes Twitter Trend Section

setInterval(() => {
    var twitter_feed = document.querySelectorAll(" .r-vacyoi ")
    if (twitter_feed.length != 0) {

        twitter_feed[0].outerHTML = "";


    } else {
        setTimeout(checkDOMChange, 100);
    }
}, 1000);