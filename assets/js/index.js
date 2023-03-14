let menuButton = document.querySelector('#menu-btn');
let responsiveNavBarDiv = document.querySelector('#nav-links-div');
let cancelButton = document.querySelector('#cancel-btn');
menuButton.addEventListener('click', function() {
    responsiveNavBarDiv.style.width = "75%";
})
cancelButton.addEventListener('click', function() {
    responsiveNavBarDiv.style.width = "0%";
})


// $('#menu-btn').click(function() {
//     $('#nav-links-div').css('width', '75%');
// })