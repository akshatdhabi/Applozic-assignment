var nextTab, totalCards, centerCard, leftCard, rightCard;

//Tab switching class
function tabSwitch(e, tab, tab_no) {
    var i, tabContent, tabLinks,
        currentTab = parseInt(tab_no);
    //Changing the autoswitcher tab number to select the next tab

    currentTab == 5 ? nextTab = 1 : nextTab = currentTab + 1;

    tabContent = document.getElementsByClassName('tabcontent');
    tabLinks = document.getElementsByClassName('tablink');

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        // console.log(tabContent);
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace('active', '');
    }

    document.getElementById(tab).style.display = 'block';
    e.currentTarget.className += " active";
}

//Carousel Functions

//Sorting cards and select a middle card
function sortCards() {
    totalCards = parseInt(document.getElementsByClassName('carousel_card').length);
    centerCard = Math.round(totalCards / 2);
    leftCard = centerCard - 1;
    rightCard = centerCard + 1;
}

function carousel() {
    for (var i = 1; i <= totalCards; i++) {
        if (i < centerCard && leftCard !== 0) {
            document.getElementById('indicator' + i).className = "carousel_indicator_block";
            if (i == leftCard) {
                document.getElementById('card_' + leftCard).className = "carousel_card card_left active_left";
            } else {
                document.getElementById('card_' + i).className = "carousel_card card_left";
            }
        } else if (i == centerCard) {
            document.getElementById('card_' + i).className = "carousel_card card_active";
            document.getElementById('indicator' + i).className = "carousel_indicator_block active";
        } else if (i > centerCard && rightCard !== 0) {
            document.getElementById('indicator' + i).className = "carousel_indicator_block";
            if (i == rightCard) {
                document.getElementById('card_' + rightCard).className = "carousel_card card_right active_right";
            } else {
                document.getElementById('card_' + i).className = "carousel_card card_right";
            }
        }
    }
}

function slideLeft() {
    centerCard == totalCards ? null : (centerCard += 1, leftCard = centerCard - 1, rightCard = centerCard + 1);
    carousel();
}

function slideRight() {
    centerCard == 1 ? null : (centerCard -= 1, leftCard = centerCard - 1, rightCard = centerCard + 1);
    carousel();
}

function changeCard(selected_card) {
    centerCard = selected_card - 1;
    selected_card > centerCard ? slideLeft() : slideRight();
}

//Navigation toggle

function navToggle(anim){
    document.getElementById('nav_content').classList.toggle("nav_open");
    anim.classList.toggle("anim");

}


//Sort and initiate the carousel
sortCards();
carousel();

//Auto switching tabs
setInterval(function () {
    document.getElementById('tab_' + nextTab).click();
}, 5000);


//Opening the default tab
document.getElementById('tab_1').click();