$('#t-header').remove();
$('#t-footer').remove();

const styles = document.createElement('style');
styles.innerHTML = `.t-store__prod-snippet__container {
  height: 100vh !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  padding: 64px !important;
}

.js-store-product {
  height: 100% !important;
}

.t-container {
  height: 100% !important;
  margin: 0 !important;
  max-width: none !important;
  width: 100% !important;
}

.t-container > div {
  display: flex !important;
  align-items: center !important;
  width: 100% !important;
  height: 100% !important;
}

.t-store__prod-popup__slider {
  width: 60% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 0;
}

.t-store__prod-popup__info {
  opacity: 0;
}

.t-store__prod-popup__slider * {
  height: 100% !important;
}

.t-slds__bgimg {
  background-size: contain !important;
  padding: unset !important;
}

.t-slds__item {
  width: 36% !important;
}

.t-store__prod-popup__title-wrapper > .t-store__prod-popup__name {
  font-size: 40px !important;
}

.js-store-prod-price {
  font-size: 28px !important;
}

.js-store-prod-charcs {
  font-size: 24px !important;
}

.t-store__prod-popup__info {
  margin-left: 32px !important;
}

.button-accent {
  font-size: 24px !important;
}

.leftside-in {
  animation-name: leftside-in;
  animation-duration: 1000ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.leftside-out {
  animation-name: leftside-out;
  animation-duration: 1000ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes leftside-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes leftside-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.rightside-in {
  animation-name: rightside-in;
  animation-duration: 1000ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.rightside-out {
  animation-name: rightside-out;
  animation-duration: 1000ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes rightside-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes rightside-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
`;
document.body.append(styles);

setTimeout(() => {
  $('.t-store__prod-popup__slider').addClass('leftside-in');
  setTimeout(() => {
    $('.t-store__prod-popup__slider').removeClass('leftside-in');
    $('.t-store__prod-popup__slider').addClass('leftside-out');
  }, 6000);

  setTimeout(() => {
    $('.t-store__prod-popup__info').addClass('rightside-in');
    setTimeout(() => {
      $('.t-store__prod-popup__info').removeClass('rightside-in');
      $('.t-store__prod-popup__info').addClass('rightside-out');
    }, 6000);
  }, 500);
}, 1000);
