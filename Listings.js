ScrollReveal().reveal('.room', 
{ delay: 500, duration: 1000, origin: 'top', distance: '70px' });



// Add a hover effect to each room
document.querySelectorAll('.room').forEach(room => {
    room.addEventListener('mouseover', () => {
        room.style.transform = 'scale(1.1)';
    });
    room.addEventListener('mouseout', () => {
        room.style.transform = 'scale(1.0)';
    });
});

const text = 'Create memories';
let index = 0;

function writeText() {
    document.getElementById('create-memories').innerText = text.slice(0, index);

    index++;

    // If we've gotten to the end of the text, stop the interval
    if (index > text.length) {
        clearInterval(intervalId);
    }
}

// Start the interval
const intervalId = setInterval(writeText, 100); // Adjust the second parameter to make the typing faster or slower