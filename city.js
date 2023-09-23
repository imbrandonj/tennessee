/*
    city.js
    author: Brandon Jenkins

    The purpose of this script is to display a typing effect for each list item for each city
    This script is reusable for each city
*/

const pageTitle = document.title;
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
let words1, words2, words3; // strings that will be displayed via type effect

// words1, words2, words3 are different for each city page
switch ( pageTitle ) {
    case ('Nashville City Page'):
        words1 = 'It\'s the capital of Tennessee.';
        words2 = 'Nashville is known as the "Music City."';
        words3 = 'Nashville was the first Confederate state capital to fall to Union forces during the Civil War in 1862.';
        break;
    case ('Memphis City Page'):
        words1 = 'test1';
        words2 = 'test2';
        words3 = 'test3';
        break;
    case ('Gatlinburg City Page'):
        words1 = 'It\s nested just outside of the Great Smoky Mountains National Park.';
        words2 = 'The area itself is a congested cesspool of tourism.';
        words3 = 'Escape the Gatlinburg area and explore the beautiful mountains.';
        break;
    case ('Knoxville City Page'):
        words1 = 'test1';
        words2 = 'test2';
        words3 = 'test3';
}

function typing(words, item) {
    let i = 0;
    const typeOn = item;  // to clarify, this is the element where the text is appended

    setInterval(() => {
        typeOn.innerHTML += words.charAt(i);
        i++;
    }, 60);  // interval rate is typing speed
}

// type effect display sequentially:
// item1:
typing(words1, item1);

// wait for item1 completion
setTimeout(function () {
    typing(words2, item2)
    }, words1.length * 60);

// wait for item1 and item2 completion
setTimeout(function () {
    typing(words3, item3)
}, words1.length * 60 + words2.length * 60);  
