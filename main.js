let link_nav = document.querySelectorAll(".insteadLink");
let popup = document.querySelectorAll(".popup");

link_nav.forEach(e => {
    e.addEventListener('click', ()=> {
        popup.forEach(e_popup => {
            if (e_popup === e.querySelector(".popup")) {
                if (!e_popup.classList.contains("show")) {
                    $(e.querySelector(".popup")).fadeIn();
                    e_popup.classList.add("show");
                } else {
                    $(e.querySelector(".popup")).fadeOut();
                    e_popup.classList.remove("show");
                }
            } else {
                $(e_popup).fadeOut();
                e_popup.classList.remove("show");
            }
        });
    })
});


document.addEventListener('click', function(event) {
    if (!event.target.closest('.popup') && !event.target.closest('.insteadLink')) {
        popup.forEach(e_popup => {
            $(e_popup).fadeOut();
            e_popup.classList.remove("show");
        });
    }
});






const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  

var swiper1 = new Swiper(".myswiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 7,
    spaceBetween: 20,
    freeMode: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        1000: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 45,
          },
        1300: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1600: {
            slidesPerView: 7,
            spaceBetween: 0,
          }
      },



    autoplay: {
        delay: 7000,
        reverseDirection: true,
    },
    navigation: {
        nextEl: '.nxt',
        prevEl: '.prv',
    },
});


const btn_srch = document.getElementById("focus_link");
const inp_search = document.getElementById("search");

btn_srch.addEventListener('click', ()=> {
    inp_search.focus();
})