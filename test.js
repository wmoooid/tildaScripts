$(document).ready(function () {
  $(function () {
    let liter = 'a'; //Литера для сборки
    let oneAcc = false; // Открывать по одной вкладке  false - true
    let accOpen = true; // Открытая  вкладка  false - true
    let openNum = 1; // Номер открытой вкладки
    let scroll = false; // Скролл к открытой вкладке  false - true

    $('div[class*="uc-accord-' + liter + '"]').each(function (index) {
      $('.uc-accord-' + liter + '-' + index + ':first')
        .addClass('title-accord')
        .attr('data-accord-index', index);
      $('.uc-accord-' + liter + '-' + index + '')
        .not(':first')
        .addClass('content-accord hide-accord');
    });

    if (accOpen) {
      $('div[class*="uc-accord-' + liter + '-' + openNum + '"]').addClass('active-accord');
      $('div.content-accord[class*="uc-accord-' + liter + '-' + openNum + '"]').removeClass('hide-accord');
    }

    setTimeout(function () {
      $('.content-accord').addClass('time-step');
    }, 1500);

    function videoStop() {
      setTimeout(function () {
        $('div.content-accord.hide-accord[class*="uc-accord-' + liter + '-"]').each(function () {
          let videoNum = $(this).find('div[data-elem-type="video"]').length;
          if (videoNum) {
            $(this)
              .find('div[data-elem-type="video"]')
              .each(function () {
                $(this)
                  .find('iframe')
                  .attr('src', function (i, val) {
                    return val;
                  });
              });
          }
        });
      }, 300);
    }

    $('div[class*="uc-accord-' + liter + '"]')
      .find('.accord')
      .click(function (e) {
        let cT = $(this).closest('.title-accord');
        let ind = cT.attr('data-accord-index');

        if (oneAcc) {
          //По одной  вкладке
          if (cT.hasClass('active-accord')) {
            cT.removeClass('active-accord');
            $('div.content-accord.uc-accord-' + liter + '-' + ind + '').toggleClass('hide-accord');
            videoStop();
          } else {
            $('div.title-accord[class*="uc-accord-' + liter + '"]').removeClass('active-accord');
            cT.addClass('active-accord');
            $('div.content-accord[class*="uc-accord-' + liter + '-"]').addClass('hide-accord');
            $('div.content-accord.uc-accord-' + liter + '-' + ind + '').removeClass('hide-accord');
            videoStop();
          }
        } else {
          //По несколько вкладок
          cT.toggleClass('active-accord');
          $('div.content-accord.uc-accord-' + liter + '-' + ind + '').toggleClass('hide-accord');
          videoStop();
        }

        if (scroll) {
          //скролл до вкладки
          let el = $(this).closest('.r');
          setTimeout(function () {
            $('html, body').animate({ scrollTop: el.offset().top - 50 }, 400);
          }, 600);
        }
      });
  });
});
