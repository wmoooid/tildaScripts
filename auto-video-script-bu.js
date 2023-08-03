$('#t-header').remove();
$('#t-footer').remove();

const styles = document.createElement('style');
styles.innerHTML = `
.t-store__prod-snippet__container {
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
  width: 58% !important;
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

.t-slds__arrow_wrapper,
.t-slds__thumbsbullet-wrapper {
  display: none !important;
}

.t-slds__items-wrapper {
  transform: none !important;
  width: unset !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.t-slds__item {
  display: none;
}

.t-slds__item:nth-child(2) {
  display: unset !important;
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

/* bu */

.utp > div {
  width: unset !important;
  background: #ff8000;
  margin-right: 24px;
  padding: 8px 24px;
  border-radius: 100px;
  line-height: 3 !important;
  display: inline !important;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

#nav496232420 {
  backdrop-filter: blur(20px);
  /*border-radius: 0 0 8px 8px;*/
  border-bottom: rgba(0, 0, 0, 0.07) solid 1px;
}

#rec496232427 {
  padding-top: 32px !important;
  padding-bottom: 24px !important;
}

.t981__wrapper {
  padding: 0 !important;
}

.js-store-prod-all-text {
  font-size: 14px;
}

.js-store-prod-charcs {
  display: block;
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.t-store__card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  transition: box-shadow 300ms ease-out, border 300ms ease-out, border-radius 300ms ease-out;
}

.t-store__card:hover {
  border: 1px solid #266fff;
  border-radius: 12px;
  box-shadow: 0px 4px 25px rgb(0 0 0 / 10%);
}

.t-store__card:hover .js-store-prod-btn {
  animation: jiggle 2s ease-in-out 1;
}

.t-store__card__textwrapper {
  padding: 24px 24px 0px 24px;
}

/*.t-store__card__descr {*/
/*  min-height: 40px;*/
/*  display: -webkit-box;*/
/*  -webkit-line-clamp: 2;*/
/*  -webkit-box-orient: vertical;*/
/*  overflow: hidden;*/
/*}*/

/*.t-store__card__price-wrapper {*/
/*    margin-top: 24px !important;*/
/*}*/

.t-store__card__price,
.js-store-prod-price {
  background: #10c44c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 12px;
}

.t-store__card__mark {
  width: unset !important;
  height: unset !important;
  padding: 4px 12px !important;
  font-size: 14px !important;
}

.t-store__card__btns-wrapper {
  margin: 0 !important;
  padding: 0px 24px 24px 24px;
}

.t-store__card__btn {
  width: 100%;
  height: 40px;
  color: #333 !important;
  background-color: unset !important;
  border: 1px solid #cacaca !important;
}

.t-store__card__btn:hover {
  color: white !important;
  background-color: #266fff !important;
  border: 1px solid #266fff !important;
}

.js-product-controls-wrapper {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.js-product-option {
  margin: 0 !important;
}

.js-product-option-name {
  width: max-content;
  padding: 4px 16px !important;
  font-size: 18px !important;
  font-weight: 500;
  border-radius: 100px;
  color: #000;
  border: 1px #ff4a4a solid;
}

.t-product__option-variants {
  display: none !important;
}

.t-store__card > .js-product-controls-wrapper {
  margin-top: 0 !important;
  margin-bottom: 24px;
  padding: 0 24px;
}

.js-product-option:first-child > .js-product-option-name {
  background: linear-gradient(93.15deg, #eb2828 0%, #eb2891 100%);
  color: white;
  border: 1px solid #eb2828;
}

.t-store__prod-snippet__container {
  padding-top: 64px;
  padding-bottom: 64px;
}

.t-store__prod-popup__info {
  max-width: unset !important;
}

.t-slds__container {
  background-color: white !important;
}

/*.t-store__card__imgwrapper  {*/
/*    border-radius: 8px;*/
/*    overflow: hidden;*/
/*}*/

.button-accent {
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 24px;
  padding: 16px 0px;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white !important;
  border-radius: 100px;
}

button[type='submit'],
.t-store__prod-popup__btn,
.button-accent {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%), #4080ff;
  background-repeat: no-repeat;
  animation: accent 3s linear infinite;
}

button[type='submit']:hover,
.t-store__prod-popup__btn:hover,
.button-accent:hover {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%), #5991ff;
  background-repeat: no-repeat;
}

button[type='submit']:active,
.t-store__prod-popup__btn:active,
.button-accent:hover {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%), #266fff;
  background-repeat: no-repeat;
}

@media screen and (max-width: 960px) {
  .t-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 640px) {
  .t835 {
    padding: 0 12px;
  }

  .t-store__prod-snippet__container {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 480px) {
  .t-store__card__btn {
    margin-top: 16px !important;
  }

  .t-store__card > .js-product-controls-wrapper {
    margin-top: 20px !important;
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 960px) and (min-width: 480px) {
  .t-store__grid-cont_mobile-grid .t-col:not(.t-col_8):not(.t-col_12),
  .t-store__grid-cont_mobile-grid .t-store__stretch-col:not(.t-store__stretch-col_100) {
    width: 47% !important;
    margin-left: 12px;
  }
}

@keyframes accent {
  0% {
    background-position: -500px 0;
  }

  100% {
    background-position: 500px 0;
  }
}

@keyframes jiggle {
  0% {
    transform: rotate(2deg);
  }
  5% {
    transform: rotate(-2deg);
  }
  10% {
    transform: rotate(2deg);
  }
  15% {
    transform: rotate(-2deg);
  }
  20% {
    transform: rotate(2deg);
  }
  25%,
  95% {
    transform: rotate(0);
  }
}
`;
document.body.append(styles);

$('.t-store__prod-popup__slider').addClass('leftside-in');
setTimeout(() => {
  $('.t-store__prod-popup__slider').removeClass('leftside-in');
  $('.t-store__prod-popup__slider').addClass('leftside-out');
}, 6000);

$('.t-store__prod-popup__info').addClass('rightside-in');
setTimeout(() => {
  $('.t-store__prod-popup__info').removeClass('rightside-in');
  $('.t-store__prod-popup__info').addClass('rightside-out');
  $('.t-store__prod-popup__info').on('animationend', () => {
    $('.r.t-rec').css('background-color', 'red');
  });
}, 6000);
