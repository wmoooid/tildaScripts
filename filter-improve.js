document.addEventListener('tStoreRendered', () => {
  const filterArr = JSON.parse(Object.values(window.tStoreXHR)[0].responseText).filters.filters;
  const filtersWithCheckbox = {};
  const filtersWithSelect = {};

  filterArr.forEach((filter) => {
    if (filter.control == 'checkbox') filtersWithCheckbox[filter.name] = filter.values.map((item) => String(item.value));
    if (filter.control == 'select') filtersWithSelect[filter.name] = filter.values.map((item) => String(item.value));
  });

  Object.keys(filtersWithCheckbox).forEach((filter) => {
    const availableValues = filtersWithCheckbox[filter];
    const filterOptions = document.querySelector(`[name="${filter}"]`).parentNode.querySelectorAll(`[data-filter-value]`);

    const chosenFilters = [
      ...document.querySelector('.t-store__filter__chosen-wrapper').querySelectorAll('[data-option-name]'),
    ].map((el) => el.dataset.optionName);

    if (chosenFilters.includes(filter)) return;

    filterOptions.forEach((option) => {
      if (availableValues.includes(option.dataset.filterValue)) {
        option.parentNode.style.display = '';
      } else {
        option.parentNode.style.display = 'none';
      }
    });
  });

  Object.keys(filtersWithSelect).forEach((filter) => {
    const availableValues = filtersWithSelect[filter];
    const filterOptions = document.querySelector(`[name="${filter}"]`).parentNode.querySelectorAll(`[data-filter-value]`);
    filterOptions.forEach((option) => {
      if (availableValues.includes(option.dataset.filterValue)) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    });
  });
});

//$('.t-store').siblings('script').html().split('\n')[7]
