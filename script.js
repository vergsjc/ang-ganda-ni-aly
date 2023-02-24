const swiper = new Swiper('.swiper', {
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
  
  
    },
    
      // Optional parameters
  
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  

  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vergarajhoncarl@gmail.com",
        Password : "jhoncarl123456",
        To : 'vergarajhoncarl@gmail.com',
        From : document.getElementById("email").value,
        Subject :"New Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

  }
ScrollReveal({
reset:true,
distance:'60px',
duration:2500,
delay:400,



});




  ScrollReveal().reveal('.pichold2 ',{delay:500,origin:'bottom'});
  ScrollReveal().reveal('.about-text ',{delay:500,origin:'right'});
  ScrollReveal().reveal('.content ',{delay:500,origin:'left'});
  

  ScrollReveal().reveal('.resume-left ',{delay:500,origin:'left'});
  ScrollReveal().reveal('.resume-right ',{delay:500,origin:'right'});
  ScrollReveal().reveal('.upcontent ',{delay:500,origin:'bottom'});

  ScrollReveal().reveal('.project-top ',{delay:500,origin:'left'});
  ScrollReveal().reveal('.swiper ',{delay:500,origin:'right'});

  ScrollReveal().reveal('.contactbox ',{delay:500,origin:'bottom'});