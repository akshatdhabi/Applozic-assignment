var nextTab,totalCards,centerCard,leftCard,rightCard;function tabSwitch(e,t,a){var r,c,d,n=parseInt(a);for(nextTab=5==n?1:n+1,c=document.getElementsByClassName("tabcontent"),d=document.getElementsByClassName("tablink"),r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<d.length;r++)d[r].className=d[r].className.replace("active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function sortCards(){totalCards=parseInt(document.getElementsByClassName("carousel_card").length),centerCard=Math.round(totalCards/2),leftCard=centerCard-1,rightCard=centerCard+1}function carousel(){for(var e=1;e<=totalCards;e++)e<centerCard&&0!==leftCard?(document.getElementById("indicator"+e).className="carousel_indicator_block",e==leftCard?document.getElementById("card_"+leftCard).className="carousel_card card_left active_left":document.getElementById("card_"+e).className="carousel_card card_left"):e==centerCard?(document.getElementById("card_"+e).className="carousel_card card_active",document.getElementById("indicator"+e).className="carousel_indicator_block active"):e>centerCard&&0!==rightCard&&(document.getElementById("indicator"+e).className="carousel_indicator_block",e==rightCard?document.getElementById("card_"+rightCard).className="carousel_card card_right active_right":document.getElementById("card_"+e).className="carousel_card card_right")}function slideLeft(){centerCard!=totalCards&&(leftCard=(centerCard+=1)-1,rightCard=centerCard+1),carousel()}function slideRight(){1!=centerCard&&(leftCard=(centerCard-=1)-1,rightCard=centerCard+1),carousel()}function changeCard(e){e>(centerCard=e-1)?slideLeft():slideRight()}function navToggle(e){document.getElementById("nav_content").classList.toggle("nav_open"),e.classList.toggle("anim")}sortCards(),carousel(),setInterval(function(){document.getElementById("tab_"+nextTab).click()},5e3),document.getElementById("tab_1").click();