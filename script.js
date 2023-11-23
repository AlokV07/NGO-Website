//****************************************** SLIDER QUERY ***********************************//

(function () {
  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  Slideshow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slider-wrapper");
      this.slides = this.el.querySelectorAll(".slide");
      this.previous = this.el.querySelector(".slider-previous");
      this.next = this.el.querySelector(".slider-next");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function () {
      var self = this;
      self.timer = setInterval(function () {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);
      }, 4000);
    },
    stopStart: function () {
      var self = this;
      self.el.addEventListener(
        "mouseover",
        function () {
          clearInterval(self.timer);
          self.timer = null;
        },
        false
      );
      self.el.addEventListener(
        "mouseout",
        function () {
          self.action();
        },
        false
      );
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    var slider = new Slideshow("#main-slider");
  });
})();


//*************************** Outreach and Impact ******************************/


function changeImage(programme) {
  var img1 = document.getElementById("impactimg1");
  var img2 = document.getElementById("impactimg2");

  var adolescentsColumn = document.getElementById("adolescentsColumn");
  var communitiesColumn = document.getElementById("communitiesColumn");
  var schoolsColumn = document.getElementById("schoolsColumn");
  var learningColumn = document.getElementById("learningColumn");
  var participantsColumn = document.getElementById("participantsColumn");
  var districtsColumn = document.getElementById("districtsColumn");
  var stateColumn = document.getElementById("stateColumn");
  
  // Add IDs for other columns as well

  if (programme === "child") {
    img1.src = "./img/impacthome.jpg";
    img2.src = "./img/childhood-programme.png";

    adolescentsColumn.querySelector("h2").textContent = "394,206";
    adolescentsColumn.querySelector("p").textContent = "Adolescents";

    communitiesColumn.querySelector("h2").textContent = "1,961";
    communitiesColumn.querySelector("p").textContent = "Communities";

    schoolsColumn.querySelector("h2").textContent = "2,770";
    schoolsColumn.querySelector("p").textContent = "Schools";

    learningColumn.querySelector("h2").textContent = "302";
    learningColumn.querySelector("p").textContent =
      "Community Learning Centres";

    participantsColumn.querySelector("h2").textContent = "51";
    participantsColumn.querySelector("p").textContent = "% Girls Participants";

    districtsColumn.querySelector("h2").textContent = "72";
    districtsColumn.querySelector("p").textContent = "Districts";

    stateColumn.querySelector("h2").textContent = "24";
    stateColumn.querySelector("p").textContent = "State & UTs";
    stateColumn.style.display = "block";

  } else if (programme === "livelihood") {
    img1.src = "./img/impacthome1.jpg";
    img2.src = "./img/livelihood-programme.png";

    adolescentsColumn.querySelector("h2").textContent = "202,429";
    adolescentsColumn.querySelector("p").textContent = "Youth Placed";

    communitiesColumn.querySelector("h2").textContent = "94,296";
    communitiesColumn.querySelector("p").textContent = "Outreach";

    schoolsColumn.querySelector("h2").textContent = "825";
    schoolsColumn.querySelector("p").textContent = "Colleges";

    learningColumn.querySelector("h2").textContent = "95";
    learningColumn.querySelector("p").textContent = "Livelihood Centres";

    participantsColumn.querySelector("h2").textContent = "56";
    participantsColumn.querySelector("p").textContent = "% Girls Participants";

    districtsColumn.querySelector("h2").textContent = "8";
    districtsColumn.querySelector("p").textContent =
      "Entrepreneurship Incubation Centres";

    stateColumn.querySelector("h2").textContent = "";
    stateColumn.querySelector("p").textContent = "";
    stateColumn.style.display = "none";
  }
}


// *********************************** Gallery Slider **********************/ 







// *********************************** Award Slider **********************/ 


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop:true,
  centerSlide:'true',
  fade: 'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    520: {
      slidesPerView:2,
    },
    950: {
      slidesPerView:3,
    },
  },
});


// Testimonial Section Start

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});