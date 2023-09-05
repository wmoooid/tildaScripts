document.addEventListener('tStoreRendered', () => {
    // Собираем все фильтры
    const filterArr = JSON.parse(Object.values(window.tStoreXHR)[0].responseText).filters.filters;
    const filtersWithCheckbox = {};
    const filtersWithSelect = {};
    const priceFilterValues = [];

    // Сортируем фильтры по видам
    filterArr.forEach((filter) => {
        if (filter.control == 'checkbox') filtersWithCheckbox[filter.name] = filter.values.map((item) => String(item.value));
        if (filter.control == 'select') filtersWithSelect[filter.name] = filter.values.map((item) => String(item.value));
        if (filter.name == 'price') priceFilterValues.push(...[filter.min, filter.max]);
    });

    Object.keys(filtersWithCheckbox).forEach((filter) => {
        // Значения, которые нужно отобразить в списке фильтра после выбора
        const availableValues = filtersWithCheckbox[filter];
        // Ноды пунктов фильтра
        const filterOptions = document.querySelector(`[name="${filter}"]`).parentNode.querySelectorAll(`[data-filter-value]`);
        // Список выбранных фильтров
        const chosenFilters = [...document.querySelector('.t-store__filter__chosen-wrapper').querySelectorAll('[data-option-name]')].map(
            (el) => el.dataset.optionName,
        );
        // Если фильтр уже есть среди выбранных, не скрываем его пункты
        if (chosenFilters.includes(filter)) return;
        // Отображаем/прячем пункты
        filterOptions.forEach((option) => {
            if (availableValues.includes(option.dataset.filterValue)) {
                option.parentNode.style.display = '';
            } else {
                option.parentNode.style.display = 'none';
            }
        });
    });

    Object.keys(filtersWithSelect).forEach((filter) => {
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

    const minRange = document.querySelector('.t-store__filter__range_min');
    const minInput = document.querySelector('.js-store-filter-pricemin');
    const maxRange = document.querySelector('.t-store__filter__range_max');
    const maxInput = document.querySelector('.js-store-filter-pricemax');

    minInput.dataset.minVal = priceFilterValues[0];
    minInput.value = priceFilterValues[0];

    maxInput.dataset.maxVal = priceFilterValues[1];
    maxInput.value = priceFilterValues[1];

    minRange.min = priceFilterValues[0];
    minRange.max = priceFilterValues[1];
    minRange.dataset.minVal = priceFilterValues[0];
    minRange.value = priceFilterValues[0];

    maxRange.min = priceFilterValues[0];
    maxRange.max = priceFilterValues[1];
    maxRange.dataset.maxVal = priceFilterValues[1];
    maxRange.value = priceFilterValues[1];
});
