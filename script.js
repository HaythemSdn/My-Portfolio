$(document).ready(function () {
  var projects=[
    {
      title:"Hangman Game",
      image:"images/Hangman.jpeg",
      link:"https://hangman-game-htmsdn.netlify.app",
      desc:" is a guessing game ,the player guessing the word may, at any time, attempt to guess the whole word if the word is correct, the game is over and the guesser wins.",
      tchlgs:["html","css","java-script","json"],
    },
    {
      title:"Memory Game",
      image:"images/Memory-game.jpeg",
      link:"https://memory-game-htmsdn.netlify.app",
      desc:" is a common game played with a set of cards.Players turn two cards if the two cards are the same, then they keep them, otherwise they turn the cards face down again.",
      tchlgs:["html","css","java-script","tailwind"],
    },
    {
      title:"Quiz Game",
      image:"images/quiz.jpeg",
      link:"https://quiz-game-htm.netlify.app",
      desc:" refers to a short test of HTML , CSS and JS, typically around 10 questions in length, with question formats often including multiple choice and fill in the blanks .'PC only'",
      tchlgs:["html","css","java-script","json","tailwind"],
    },
    {
      title:"Pig Game",
      image:"images/pig.jpg",
      link:"https://pig-game-htm.netlify.app",
      desc:" is a simple dice game players take turns to roll a single die , adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.",
      tchlgs:["html","css","java-script"],
    },
    {
      title:"Bankist",
      image:"images/bankist.jpeg",
      link:"https://bankist-htm.netlify.app",
      desc:" it's a small front-end application , made for bank functionalities like: bank transfers and loans , it counts also incomes , outcomes and the balance of the movements.",
      tchlgs:["html","css","java-script"],
    },
    {
      title:"Scout-web-site",
      image:"images/scout.png",
      link:"https://scout-web-site-htmsdn.netlify.app",
      desc:" it is a simple scout web site that contains all the information about the scout architecture and how you can reach them",
      tchlgs:["html","css","java-script"],
    },
    {
      title:"DashDark",
      image:"images/Dashboard.png",
      link:"https://dashboard-darkmode-htmsdn.netlify.app",
      desc:" it is a static Dashboard (just front-end ) in the dark-mode that shows statistics and information about a company ",
      tchlgs:["vueJS","tailwind"],
    },
    {
      title:"Ecommerce-store",
      image:"images/Ecommerce-store .jpg",
      link:"https://ecommerce-store-htmsdn.netlify.app",
      desc:" it's a full-stuck project that made for business owner to display thier products for customers , and i am working on it now (not completed)",
      tchlgs:["vueJS","firebase","tailwind"],
    }, 
    {
      title:"Tabaki",
      image:"images/tabaki.png",
      link:"images/app-release.apk",
      desc:" is a restaurant marketplace App that allows clients to find a restaurant that fits them ,I have worked on this project as a project manager and mobile developer",
      tchlgs:["flutter","firebase","python"],
    }, 
  ]
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

//add projects 
for (var i = 0; i < projects.length; i++) {
  var skillsHtml = '';
  // Loop through the skills array for the current project
  for (var j = 0; j < projects[i].tchlgs.length; j++) {
    skillsHtml += `<div class="image-div"><img src="images/technlgs/${projects[i].tchlgs[j]}.png" alt="" class="image"></div>`;
  }

  // Create the HTML code using jQuery
  var card = $('<div>').addClass('card');
  var turn = $('<img>').attr('src', 'images/turn.png').addClass('turn');
  var box = $('<div>').addClass('box');
  var front = $('<div>').addClass('front');
  if(projects[i].title=="Tabaki"){
    var visitBtn=`<a href=${projects[i].link}><span class="visit-btn">Download app</span></a>`
  }else{
    var visitBtn=`<a href=${projects[i].link}><span class="visit-btn">Visit project </span></a>`
  }
   
  var text = $('<div>').addClass('text').text(projects[i].title);
  var link = $('<a>').attr('href', projects[i].link);
  var image = $('<img>').attr('src', projects[i].image).addClass('img').attr('alt', '');
  var description = $('<p>').html(`<span>${projects[i].title}</span>${projects[i].desc}`);

  var back = $('<div>').addClass('back');
  var backText = $('<div>').addClass('text');
  var technologiesHeading = $('<h1>').text('Technologies');
  var technologiesDiv = $('<div>').addClass('technologies').append(skillsHtml);

  // Append the elements to the respective containers
  link.append(image);
  front.append(text, link, description);
  backText.append(technologiesHeading, technologiesDiv);
  back.append(backText);
  box.append(front, back);
  card.append(visitBtn,turn, box);

  $('.serv-content').append(card);
  $(".card .turn").on("click", function(event) {
    event.stopPropagation(); 
  
    var box = $(this).siblings(".box");
    box.addClass("isFlipped");
    $(this).addClass("hidden")
    setTimeout(function() {
      box.removeClass("isFlipped");
      $(".card .turn").removeClass("hidden")
    }, 3000);
  });
}

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Freelancer","Cyber Security enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-3", {
    strings: [" This feature is not available for now , Thank you !"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
