document.addEventListener('tStoreRendered', () => {
    $('.t1025 .js-product').each((i, el) => {
        if ($(el).attr('touched') === 'true') return;
        $(el).on('click', (e) => {
            const modelName = $(e.currentTarget).find('.js-product-option-name').text();
            if (modelName) {
                const popupName = $(e.currentTarget).find('.js-store-prod-btn').attr('href');
                const targetPopupHeading = $(`[data-tooltip-hook="${popupName}"]`).find('.t1014__title');
                targetPopupHeading.html(`Забронируйте </br> ${modelName}`);
                console.log(targetPopupHeading);
            }
        });
        $(el).attr('touched', 'true');
    });
});
