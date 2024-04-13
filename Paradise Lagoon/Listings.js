ScrollReveal().reveal('.room', 
{ delay: 500, duration: 1000, origin: 'top', distance: '70px' });





const text = 'Create memories';
const text1='Hand Picked Rooms';


function writeText(text, elementId) {
    let index = 0;

    function write() {
        document.getElementById(elementId).innerText = text.slice(0, index);
        index++;

        // If we've gotten to the end of the text, stop the interval
        if (index > text.length) {
            clearInterval(intervalId);
        }
    }

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        // If the element is in the viewport, start the interval
        if (entries[0].isIntersecting) {
            intervalId = setInterval(write, 100);
            observer.disconnect(); // Stop observing once the text starts typing
        }
    });

    // Start observing
    observer.observe(document.getElementById(elementId));
}

let intervalId;
writeText(text, 'create-memories');
writeText(text1, 'hand-picked-rooms'); // Replace 'hand-picked-rooms' with the actual ID of the element containing the "Hand Picked Rooms" text
