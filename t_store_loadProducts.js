function t_store_loadProducts(e, _, p, u, r) {
  window.tStoreProductsRequested = !0;
  var g,
    m,
    t,
    o,
    y,
    v = 'relevants' === e,
    s = Date.now(),
    i = p.storepart,
    h = !u || 1 === parseInt(u, 10),
    f = document.getElementById('rec' + _);
  f &&
    ((m = v ? f.querySelector('.js-store-relevants-grid-cont') : f.querySelector('.js-store-grid-cont')),
    (g = '973' === f.getAttribute('data-record-type')),
    v
      ? ((t = {
          storepartuid: i,
          productuid: r.currentProductUid,
          quantity: r.relevantsQuantity,
          method: r.relevantsMethod,
          sort: r.relevantsSort,
        }),
        (m = f.querySelector('.t-store__relevants-grid-cont')) && (m.style.opacity = 0))
      : (t = { storepartuid: i, recid: _, c: s }),
    h && ((t.getparts = !0), (t.getoptions = !0)),
    u && (t.slice = u),
    p.filters && ((t.filters = p.filters), (t.getparts = !0)),
    p.sort && !v && (t.sort = p.sort),
    p.size && 0 < p.size && (t.size = p.size),
    p && p.defaultSort && p.defaultSort.in_stock && v && (t.filters || (t.filters = {}), (t.filters.quantity = 'y')),
    window.t_store_endpoint || (window.t_store_endpoint = 'store.tildacdn.com'),
    (s = 'https://' + window.t_store_endpoint + '/api' + (v ? '/getrelevantproducts/' : '/getproductslist/')),
    p.isPublishedPage ||
      ((t.projectid = document.getElementById('allrecords').getAttribute('data-tilda-project-id')),
      (s = 'https://tilda.cc/projects/store' + (v ? '/getrelevantproducts/' : '/getproductslist/'))),
    (o = Date.now()),
    window.tStoreXHR || (window.tStoreXHR = {}),
    window.tStoreXHR[_] && (window.tStoreXHR[_].abort(), delete window.tStoreXHR[_]),
    (y = new XMLHttpRequest()),
    ((window.tStoreXHR[_] = y).onload = function () {
      if (y.readyState === y.DONE && 200 === y.status) {
        var e = y.responseText;
        clearTimeout(f.getAttribute('data-preloader-timeout'));
        var t = f.querySelector('.js-store-grid-cont-preloader');
        if (
          (t && (t.style.display = 'none'),
          !p.sidebar || ((o = f.querySelector('.t951__grid-cont')) && o.classList.remove('t951__grid-cont_hidden')),
          h && m && (m.innerHTML = ''),
          'string' == typeof e && '{' !== e.substring(0, 1) && (-1 !== e.indexOf('ERROR:') || -1 !== e.indexOf('Wrong')))
        ) {
          var r = t_store_get_errorBox(p, e);
          return m.insertAdjacentHTML('beforeend', r), void t_store__fadeIn(f.querySelector('.js-store-error-msg'));
        }
        if ('' !== e) {
          var o,
            s,
            i,
            n,
            a,
            d,
            c,
            l = {};
          try {
            (l = JSON.parse(e)).partlinks && (p.linksSizeChart = l.partlinks);
            // сюда встраиваю
            console.log(l?.filters?.filters);
            l?.filters?.filters?.forEach((filter) => {
              const filterOptions = $(`[name="${filter.name}"]`).siblings('[data-filter-value]');
              console.log(filterOptions);
              filter?.values?.forEach((value) => {
                filterOptions.each((i, el) => {
                  if (el.dataset.filterValue != value.value) {
                    $(el).hide();
                  }
                });
              });
            });
            // console.log($('[data-filter-value="Chery"]').parent().hide());
          } catch (t) {
            console.log(e);
          }
          'object' == typeof l &&
            ((t = v ? l.relevants : l.products),
            l.options && 1 <= l.options.length && (window.tStoreOptionsList = l.options),
            t_store_process(t, _, p, !!u, v, l),
            l.parts &&
              1 < l.parts.length &&
              !f.querySelector('.js-store-parts-switcher') &&
              !p.hideStoreParts &&
              ((o = function () {
                t_store_onFuncLoad('t_store_addStoreParts', function () {
                  t_store_addStoreParts(_, p, l.parts), t_store_setActiveStorePart(_);
                });
              }),
              (s = 'tilda-catalog-filters-1.0'),
              document.head.querySelector('script[src*="' + s + '"]')
                ? o()
                : (((r = document.createElement('script')).type = 'text/javascript'),
                  (r.src = 'https://static.tildacdn.com/js/' + s + '.min.js'),
                  (r.onload = o),
                  (r.onerror = function () {
                    console.error('Failed to load tilda-catalog-filters: ', this.src);
                  }),
                  document.head.appendChild(r)),
              document.head.querySelector('link[href*="' + s + '"]') ||
                (((i = document.createElement('link')).rel = 'stylesheet'),
                (i.type = 'text/css'),
                (i.href = 'https://static.tildacdn.com/css/' + s + '.min.css'),
                (i.media = 'all'),
                document.head.appendChild(i))),
            window.tStoreFilters || (window.tStoreFilters = {}),
            (e = window.tStoreFilters[_]),
            'y' === l.filter && !p.hideFilters && e
              ? e &&
                ((e.filters && 0 < e.filters.length) || e.search || e.sort) &&
                t_store_onFuncLoad('t_store_filters_init', function () {
                  t_store_filters_init(_, p, e), v || t_store_filters_prodsNumber_update(f, p, l);
                  // !!!
                })
              : !p.sidebar ||
                v ||
                !l.parts ||
                0 !== l.parts.length ||
                ((s = f.querySelector('.t951__sidebar')) &&
                  (s.classList.add('t951__sidebar_empty'),
                  (i =
                    'RU' === window.tStoreBrowserLang
                      ? 'Пожалуйста, добавьте хотя бы один фильтр каталога для отображения боковой панели магазина. <a href="https://help-ru.tilda.cc/online-store-payments/filters" target="_blank" rel="nofollow noopener">Справка</a>'
                      : 'Please <a href="https://help.tilda.cc/online-store-payments/filters" target="_blank" rel="nofollow noopener">add at least one catalog filter</a> to display the store sidebar'),
                  (s.innerHTML = '<span class="t-text t-text_xxs">' + i + '</span>'))),
            t_store_isQueryInAddressBar('tstore') &&
              window.t_store__scrollToBlock &&
              ((a = (c = decodeURI(window.location.hash).split('/')).indexOf('r') + 1),
              c[a] === _ &&
                ('scrollBehavior' in document.documentElement.style
                  ? window.scrollTo({
                      left: 0,
                      top: f.getBoundingClientRect().top + window.pageYOffset - 50,
                      behavior: 'smooth',
                    })
                  : window.scrollTo(0, f.getBoundingClientRect().top + window.pageYOffset - 50),
                (window.t_store__scrollToBlock = null))),
            (d = f.querySelector('.js-store-load-more-btn')) && d.classList.remove('t-btn_sending'),
            (n = t_throttle(function () {
              var t, e;
              window.tStoreProductsRequested ||
                (window.innerWidth < 960 &&
                  ((t = m.scrollWidth),
                  (e = m.scrollLeft),
                  t < m.offsetWidth + e + 20 &&
                    'none' !== d.style.display &&
                    (d.click(), m.removeEventListener('scroll', n))));
            })),
            (c = m && m.classList.contains('t-store__grid-cont_mobile-one-row')),
            l.nextslice
              ? (d ||
                  ((d = t_store_get_loadMoreBtn_html(f, p)),
                  p.sidebar
                    ? f.querySelector('.t951__cont-w-filter .t951__cont-wrapper + .t-store__pagination') ||
                      f.querySelector('.t951__cont-w-filter').insertAdjacentHTML('beforeend', d)
                    : v || ((a = f.querySelector('.js-store-grid-cont')) && a.insertAdjacentHTML('afterend', d)),
                  (d = f.querySelector('.js-store-load-more-btn'))),
                d &&
                  ((d.style.display = ''),
                  d.parentNode.replaceChild(d.cloneNode(!0), d),
                  (d = f.querySelector('.js-store-load-more-btn')).addEventListener('click', function () {
                    window.tStoreProductsRequested ||
                      (d.classList.add('t-btn_sending'), t_store_loadProducts('', _, p, l.nextslice));
                  })),
                c && m.addEventListener('scroll', n))
              : v || (d && (d.style.display = 'none'), m && m.removeEventListener('scroll', n)),
            p.showPagination &&
              'on' === p.showPagination &&
              !v &&
              t_store_onFuncLoad('t_store_pagination_draw', function () {
                t_store_pagination_draw(_, p, u, l.total);
              }),
            c &&
              ((c = document.getElementById('allrecords').getAttribute('data-tilda-mode')),
              m &&
                'edit' !== c &&
                'preview' !== c &&
                (('y' !== window.lazy && 'yes' !== document.getElementById('allrecords').getAttribute('data-tilda-lazy')) ||
                  t_store_onFuncLoad('t_lazyload_update', function () {
                    m.addEventListener(
                      'scroll',
                      t_throttle(function () {
                        t_lazyload_update();
                      }),
                    );
                  }))),
            v &&
              ((f.querySelector('.t-store__relevants-grid-cont').style.opacity = 1),
              p.relevants_slider &&
                (4 < t.length || window.innerWidth <= 960) &&
                t_store_onFuncLoad('t_sldsInit', function () {
                  t_sldsInit(_ + ' .js-store-relevants-grid-cont');
                })),
            g &&
              !v &&
              t_store_onFuncLoad('t_sldsInit', function () {
                t_sldsInit(_ + ' .js-store-grid-cont');
              }),
            p.verticalAlignButtons && t_store_verticalAlignButtons(_, p),
            p.verticalAlignButtons &&
              ('complete' === document.readyState
                ? t_store_verticalAlignButtons(_, p)
                : window.addEventListener('load', function () {
                    t_store_verticalAlignButtons(_, p);
                  })),
            p.itemsAnim &&
              p.previewmode &&
              t_store_onFuncLoad('t_animate__startAnimation', function () {
                t_animate__startAnimation();
              }),
            (m.style.height = ''),
            t_store__triggerEvent(document.body, 'twishlist_addbtn'),
            t_store__triggerEvent(m, 'tStoreRendered'),
            (window.tStoreProductsRequested = !1));
        }
      }
    }),
    (y.ontimeout = y.onerror =
      function () {
        var t;
        'store.tildacdn.com' === window.t_store_endpoint
          ? t_store_changeEndpoint(y, function () {
              t_store_loadProducts(e, _, p, u, r);
            })
          : ((t = f.querySelector('.js-store-load-more-btn')) && t.classList.remove('t-btn_sending'),
            (t = Date.now() - o),
            0 === y.status &&
              t < 100 &&
              console.log('Request error (get store products). Please check internet connection...'),
            (window.tStoreProductsRequested = !1),
            (t = f.querySelector('.js-store-grid-cont-preloader')) && (t.style.display = 'none'),
            (t = t_store_get_errorBox(
              p,
              'Request timeout (40s). Please check internet connection and <a href="javascript:window.location.reload();" style="text-decoration:underline">reload the page</a>. If the situation has not changed, please contact support <a href="mailto:team@tilda.cc?subject=Unable to get a catalog" style="text-decoration:underline">team@tilda.cc</a>.',
            )),
            m.insertAdjacentHTML('beforeend', t),
            t_store__fadeIn(f.querySelector('.js-store-error-msg')));
      }),
    y.open('GET', s + '?' + t_store__serializeData(t)),
    (y.timeout = 2e4),
    y.send());
}
