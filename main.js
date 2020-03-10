window.addEventListener('DOMContentLoaded', function() { // for using script only when will load html content

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {

        for(let i = a; i <tabContent.length; i++){
            
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }

    }

    hideTabContent(1);

    function showTabContent(b) {

        if(tabContent[b].classList.contains('hide')){

            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', function(event) {

        let target = event.target;

        if(target && target.classList.contains('info-header-tab')) {

            for(let i=0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //timer 

    let deadTime = '2020-03-11';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor(t/1000/3600);


        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } 

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
                
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
            // added '0' before hours, minutes, seconds
            if(t.hours < 10 && t.total >= 0) {
                hours.textContent = '0' + t.hours;
            }
            
            if(t.minutes < 10 && t.total >= 0) {
                minutes.textContent = '0' + t.minutes;
            }
            
            if(t.seconds < 10 && t.total >= 0) {
                seconds.textContent = '0' + t.seconds;
            }
        }
    }

    setClock('timer', deadTime);

});

// modal window


let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    description = document.getElementsByClassName('description-btn'); //for 'узнать больше'

more.addEventListener('click', function() {

    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';

});

close.addEventListener('click', function() {

    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

});

// modal windows for tabs 

function tabsOn(a) {

    for(let i = a; i < description.length; i++) {
        
        // added modal window
        description[i].addEventListener('click', function() {

            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        }); 

        //delite class "more-splash" for "Learn more"
        close.addEventListener('click', function() {

            description[i].classList.remove('more-splash');
            
        }); 

    }
}

tabsOn(0);

// added block to HTML file
class Options {

    constructor(height, width, bg, fontSize, textAlign) {

        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;

    }
    divEns() {
        
        let divEl = document.createElement('div'),
            myDiv = document.querySelector('.counter-title');
        
        divEl.textContent = "Golden dojo goldspotted killifish trench, bandfish South American Lungfish central mudminnow shovelnose sturgeon tonguefish, jewfish Bitterling snake mudhead bramble shark. Yellowfin surgeonfish sandbar shark pearl perch daggertooth pike conger turkeyfish, longfin dragonfish";

        myDiv.insertAdjacentElement("beforebegin", divEl);

        divEl.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;

    }
}

const invocationDiv = new Options('80px', 'max-width', '#3b3838', '18px', 'left');


console.log(invocationDiv.divEns());