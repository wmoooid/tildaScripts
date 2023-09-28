document.addEventListener('tStoreRendered', handleFilterUpdate);
document.querySelector('.t-store__filter__chosen-bar').addEventListener('click', handleFilterUpdate);

function handleFilterUpdate() {
    const isPriceTouched =
        [...document.querySelector('.t-store__filter__chosen-wrapper').querySelectorAll('[data-field-val]')].filter(
            (el) => !isNaN(Number(el.dataset.fieldVal)),
        ).length > 0;

    if (isPriceTouched) return;

    // Собираем все фильтры
    const filterArr = JSON.parse(Object.values(window.tStoreXHR)[0].responseText).filters.filters;
    const priceFilterValues = [];

    // Сортируем фильтры по видам
    filterArr.forEach((filter) => {
        if (filter.name == 'price') priceFilterValues.push(...[filter.min, filter.max]);
    });

    const minRange = document.querySelector('.t-store__filter__range_min');
    const minInput = document.querySelector('.js-store-filter-pricemin');
    const maxRange = document.querySelector('.t-store__filter__range_max');
    const maxInput = document.querySelector('.js-store-filter-pricemax');

    if (priceFilterValues[0] == priceFilterValues[1]) {
        --priceFilterValues[0];
    }

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
}
