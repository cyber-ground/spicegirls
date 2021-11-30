'use strict';



// ----------------------------------------------------------------------
// mouseMove heart ---

// const redHeart = document.querySelector('.red-heart');
// const heartGrid = document.querySelector('.heart-grid');

// heartGrid.addEventListener('mouseenter', function (e) {
//   redHeart.style.opacity = '1';
// });

// heartGrid.addEventListener('mousemove', function (e) {
//   redHeart.style.left = e.clientX + 'px';
//   redHeart.style.top = e.clientY + 'px';
// });

// heartGrid.addEventListener('mouseleave', function (e) {
//   redHeart.style.opacity = '0';
// });

// heartGrid.addEventListener('click', function (e) {
//   redHeart.style.opacity = '0';
// });

// ----------------------------------------------------------------------


const video = document.querySelector('.video');
  const starWrapper = document.querySelector('.star-wrapper');
    const whiteStar = document.querySelectorAll('.white-star');
    const text = document.querySelector('.text');
  const heart = document.querySelector('.heart');
const img = document.querySelector('.img');

const unMatchedGirls = ['img/unMatched1.jpg','img/unMatched2.jpg','img/unMatched3.jpg']
const whiteStars = ['white-star1','white-star2','white-star3','white-star4','white-star5'];
  let randomStar = whiteStars[Math.floor(Math.random() * whiteStars.length)];
let index = 0;
let starActive = false;

// redStar(); //////////////////////// !!!

whiteStar.forEach(star => {
  star.addEventListener('click', function () {
    if(starActive) return;
      starActive = true;
      if(star.classList.contains(randomStar)) { // matched //
        star.classList.add('js_red'); /////////////////////////////////// !!!
        setTimeout(() => {
          star.classList.remove('js_red');
          starWrapper.classList.add('js_displayNone');
          img.src = matchedGirls[index].matched;
          heart.classList.add('js_heart');
          // heart.innerHTML = '<i class="fas fa-heart faa-tada animated"></i>';
          // heart.innerHTML = '<img src="img/cake.svg" class="cake">';
          // heart.innerHTML = '<img src="img/strawberries2.svg" class="cake">';
          heart.innerHTML = '<img src="img/kiss1.svg" class="cake">';
          // heart.innerHTML = '<img src="img/kiss.svg" class="cake">';
          index++;
        }, 1000);
        setTimeout(() => { // step to next //
          if(index === matchedGirls.length) { index = 0;}
          heart.classList.remove('js_heart');
          heart.innerHTML = '';
          img.src = matchedGirls[index].girl;
            starWrapper.classList.remove('js_displayNone');
          randomStar = whiteStars[Math.floor(Math.random() * whiteStars.length)];
          // redStar() /////////////////////////////////////////////////////////////// !!!
          starActive = false;
        }, 5000); // 6000
      }
      if(!star.classList.contains(randomStar)) { // unMatched //
        star.classList.add('js_black');
        setTimeout(() => {
          star.classList.remove('js_black');
          starWrapper.classList.add('js_displayNone');
          img.src = unMatchedGirls[Math.floor(Math.random() * unMatchedGirls.length)];
          setTimeout(() => {
            text.classList.add('js_text');
            text.innerHTML = 'CALL ME<i class="fas fa-phone faa-vertical animated"></i>';
          }, 1000); // 500 to 800
        }, 1000);
        setTimeout(() => { // back to before // 
          img.src = matchedGirls[index].girl;
          starWrapper.classList.remove('js_displayNone');
          randomStar = whiteStars[Math.floor(Math.random() * whiteStars.length)];
          starActive = false;
            text.classList.remove('js_text');
          text.textContent = ''
        }, 5000); // 5000
      }
    });
  });
  
  window.addEventListener('resize', function () {
    video.src = 'img/cake.mp4';
  });

  // window.addEventListener('resize', function () {
  //   video.src = 'img/strawberries.mp4';
  // });


//-----------------------------------------------------------------------------------------------------------
// randomStarの所在位置確認記述 //

// function redStar() {
//   whiteStar.forEach(star => {
//     if(star.classList.contains(randomStar)) {
//       star.classList.add('js_red');
//     }
//   })
// }

//-----------------------------------------------------------------------------------------------------------

















