// Remove Whatsapp story icon
function checkDOMChange() {
    var story_icon = document.querySelector("[title='Status']");



    if (story_icon != null) {
        story_icon.style.display = "none";


    } else {
        setTimeout(checkDOMChange, 1000);
    }

}

checkDOMChange();