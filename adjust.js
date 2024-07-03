document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.styled-link');
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            var tooltip = this.querySelector('.tooltip');
            var linkRect = this.getBoundingClientRect();
            var tooltipHeight = tooltip.offsetHeight;

            if (linkRect.top < tooltipHeight) {
                tooltip.style.bottom = 'auto';
                tooltip.style.top = '110%'; // for down
            } else {
                tooltip.style.top = 'auto';
                tooltip.style.bottom = '110%'; //for up
            }
        });
    });
});