document.addEventListener('tStoreRendered', () => {
    const isPriceTouched =
        [...document.querySelector('.t-store__filter__chosen-wrapper').querySelectorAll('[data-field-val]')].filter(
            (el) => !isNaN(Number(el.dataset.fieldVal)),
        ).length > 0;

    const isModelSelectTouched = document.querySelector('.t-store__filter__chosen-wrapper').querySelectorAll('[data-option-name]').length > 0;

    // Собираем все фильтры
    const filterArr = JSON.parse(Object.values(window.tStoreXHR)[0].responseText).filters.filters;
    const filtersWithSelect = {};
    const priceFilterValues = [];

    // Сортируем фильтры по видам
    filterArr.forEach((filter) => {
        if (filter.control == 'select') filtersWithSelect[filter.name] = filter.values.map((item) => String(item.value));
        if (filter.name == 'price') priceFilterValues.push(...[filter.min, filter.max]);
    });

    if (isPriceTouched) {
        Object.keys(filtersWithSelect).forEach((filter) => {
            if (isModelSelectTouched) return;
            // Значения, которые нужно отобразить в списке фильтра после выбора
            const availableValues = filtersWithSelect[filter];
            // Ноды пунктов фильтра
            const filterOptions = document.querySelector(`[name="${filter}"]`).parentNode.querySelectorAll(`[data-filter-value]`);
            filterOptions.forEach((option) => {
                if (availableValues.includes(option.dataset.filterValue)) {
                    option.style.display = '';
                } else {
                    option.style.display = 'none';
                }
            });
        });
        return;
    }

    const minRange = document.querySelector('.t-store__filter__range_min');
    const minInput = document.querySelector('.js-store-filter-pricemin');
    const maxRange = document.querySelector('.t-store__filter__range_max');
    const maxInput = document.querySelector('.js-store-filter-pricemax');

    minInput.dataset.previousmin = priceFilterValues[0];
    minInput.dataset.minVal = priceFilterValues[0];
    minInput.dataset.filterValue = priceFilterValues[0];
    minInput.value = t_store__getFormattedPrice(1, priceFilterValues[0]);

    maxInput.dataset.previousmax = priceFilterValues[1];
    maxInput.dataset.maxVal = priceFilterValues[1];
    maxInput.dataset.filterValue = priceFilterValues[1];
    maxInput.value = t_store__getFormattedPrice(1, priceFilterValues[1]);

    minRange.min = priceFilterValues[0];
    minRange.max = priceFilterValues[1];
    minRange.dataset.minVal = priceFilterValues[0];
    minRange.value = priceFilterValues[0];

    maxRange.min = priceFilterValues[0];
    maxRange.max = priceFilterValues[1];
    maxRange.dataset.maxVal = priceFilterValues[1];
    maxRange.value = priceFilterValues[1];
});
