let intervalId;

const text = 'Paradise Lagoon';

function writeText(text) {
    let index = 0;

    function write() {
        document.getElementById('paradise').innerText = text.slice(0, index);
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
    observer.observe(document.getElementById('paradise'));
}

writeText(text);