$(document).ready(() => {
  $('.t744__btn-wrapper').each((i, el) => {
    $(el).prepend(`<a class="button-accent" href="${$(el).closest('.t-container').data('product-url')}">Узнать подробнее</a>`);
  });

  $('.t744 .js-product-option').each((i, el) => {
    el.style.setProperty('--bg-image', `url(${$(el).find('option').text()})`);
  });
});
