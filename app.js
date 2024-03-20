document.addEventListener('mousemove', function(e) {
    var dotCovers = document.querySelectorAll('.energy span');
    dotCovers.forEach(function(dotCover) {
        dotCover.style.left = e.pageX + (0.6)'px';
        dotCover.style.top = e.pageY + (0.6)'px';
    });
});
