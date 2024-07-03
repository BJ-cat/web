document.addEventListener('mousemove', function(event) {
    const sidebar = document.querySelector('.sidebar');
       
    const threshold = 100; // triger for 10 distance
        
       
    if (event.clientX < threshold) {
            sidebar.style.left = '0px'; // show
        
        } else {
            sidebar.style.left = '-150px'; // hide
        }
    
    });
