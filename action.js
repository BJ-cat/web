function handleKeyPress(event, actionFunction) {
    if (event.key === 'Enter') {
      actionFunction();
    }
  }

function toggleTheme() {
    var circle = document.querySelector('.toggle-circle');
    var modeChange = document.querySelector('.mode-change');  
    var nightModeCss = document.getElementById('night-mode-css');
    var dayModeCss = document.getElementById('day-mode-css');
    var arrow1 = document.getElementById('arrowImage1');
    var arrow2 = document.getElementById('arrowImage2');
   


    // Check the position of the circle to toggle its state
    if (circle.style.left === '1px') {
        circle.style.left = '21px'; // Move circle to the right
        circle.style.backgroundColor = 'white'; // Change circle color to white
        modeChange.style.backgroundColor = 'grey'; // Change box background to black
        nightModeCss.disabled = true;  // Disable the default stylesheet
        dayModeCss.disabled = false; // Enable the night-mode stylesheet
         // Switch to second arrow
         arrow1.style.display = 'none';
         arrow2.style.display = 'block';
       

    } else {
        circle.style.left = '1px'; // Move circle back to the left
        circle.style.backgroundColor = 'black'; // Change circle color back to black
        modeChange.style.backgroundColor = 'white'; // Change box background to white
        nightModeCss.disabled = false;  // Enable the default stylesheet
        dayModeCss.disabled = true; // Disable the night-mode stylesheet

        // Switch back to first arrow
        arrow1.style.display = 'block';
        arrow2.style.display = 'none';
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    var arrow1 = document.getElementById('arrowImage1');
    var arrow2 = document.getElementById('arrowImage2');

    function scrollToSecondPage() {
        document.getElementById("second-page").scrollIntoView({ behavior: 'smooth' });
    }

    arrow1.addEventListener("click", scrollToSecondPage);
    arrow2.addEventListener("click", scrollToSecondPage);

    arrow1.addEventListener("keydown", function(event) { handleKeyPress(event, scrollToSecondPage); });
    arrow2.addEventListener("keydown", function(event) { handleKeyPress(event, scrollToSecondPage); });
});
