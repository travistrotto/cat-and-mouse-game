function spawnCat() {
    // Create new cat element and set initial position
    var newCat = $('<div class="cat">🐱</div>').appendTo('body');
    var left = Math.floor(Math.random() * (window.innerWidth - newCat.width()));
    var top = Math.floor(Math.random() * (window.innerHeight - newCat.height()));
    newCat.css('left', left + 'px');
    newCat.css('top', top + 'px');

    // Set initial speed and time
    var speed = Math.floor(Math.random() * 5000) + 2000; // between 2 to 7 seconds
    var time = 0;

    // Animate cat position randomly
    setInterval(function () {
        // Update time and speed
        time += speed;
        speed = Math.floor(Math.max((5000 - time) / 1000, 1) * 1000);

        var left = Math.floor(Math.random() * (window.innerWidth - newCat.width()));
        var top = Math.floor(Math.random() * (window.innerHeight - newCat.height()));
        newCat.animate({
            'left': left + 'px',
            'top': top + 'px'
        }, speed);
    }, Math.floor(Math.random() * 3000)); // between 0 to 3 seconds
}


$(document).ready(function () {
    // Spawn new cats every 5 seconds
    setInterval(spawnCat, 5000);
});

// Change text on mouseover
$('body').on('mouseover', '.cat', function () {
    $('#text').text('Game over');
});