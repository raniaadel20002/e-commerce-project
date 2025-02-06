// start section 2
const swiper = new Swiper('.custom-slider', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// end section 2

// start section 5
function changeSlide(index, carouselId) {
  const carousel = document.querySelector(`#${carouselId}`);
  const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  carouselInstance.to(index);
}
// end section 5

// start section 6
const swiperr = new Swiper('.custom-slider1', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

 const swiper12 = new Swiper('.custom-slider12', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next12',
    prevEl: '.swiper-button-prev12',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
 const swiper13 = new Swiper('.custom-slider13', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next13',
    prevEl: '.swiper-button-prev13',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// end section 6

// start section 8
const swiperer = new Swiper('.rrr', {
  loop: true, // Enable looping
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.ttt',
    prevEl: '.vvv',
  },
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
// end section 8

// strat regester

function savedata(){
  let firstname=document.getElementById('firstname').value
  let lasttname=document.getElementById('lasttname').value
  let email=document.getElementById('email').value
  let telephone=document.getElementById('telephone').value
  let password=document.getElementById('password').value
  console.log( firstname)
  console.log(email)
  console.log(password)
  localStorage.setItem("firstname",firstname)
  localStorage.setItem("lasttname",lasttname)
  localStorage.setItem("email",email)
  localStorage.setItem("telephone",telephone)
  localStorage.setItem("password",password)
  let users_arr = new Array();
    users_arr = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

   if (users_arr.some((v) => {return v.email == email;})) {
        alert("Duplicate Data");
    }else{
      users_arr.push({
            "firstname":firstname,
            "lasttname":lasttname,
           "email":email,
           "telephone":telephone,
            "password":password,
        })
        localStorage.setItem("users",JSON.stringify(users_arr))
         window.location.href=""
    }
  
  }
  // end regester

  // start login
  document.getElementById('loginButton').addEventListener('click', function() {
    document.querySelector(".popup").style.display = "flex";
});

  document.querySelector(".close").addEventListener("click" , function(){
    document.querySelector(".popup").style.display ="none";
  })
  document.querySelector(".popup").addEventListener("click" , function(e){
    if(e.target==this){
      document.querySelector(".popup").style.display ="none";
    }
  })
  function savedata() {
        let email, password;
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        let users_arr = new Array();
        users_arr = JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [];
          if(users_arr.some((v)=>{
            return v.email==email && v.password==password
          })){
            alert("Login sucsses")
            let currentUser=users_arr.filter((v)=>{
              return v.email==email&&v.password==password

            })[0]
            localStorage.setItem("name",currentUser.name);
            localStorage.setItem("email",currentUser.email);
            window.location.href=""
          }else{
            alert("Login Fail")
          }
      }
  // end login
  //start card
  var cart = document.querySelector('.cart');

  function open_close_cart(){
    cart.classList.toggle("active")
}
 //end card