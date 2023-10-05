$(window).load(() => {
    window.t_inputRange__updateVal = function (recId, lid, style) {
        var inputWraps = document.querySelectorAll('#rec' + recId + ' [data-input-lid="' + lid + '"]');
        Array.prototype.forEach.call(inputWraps, function (inputWrap) {
            var input = inputWrap.querySelector('.t-range');
            if (input) {
                var inputWidth;
                if (((input.style.width = '100%'), 0 === input.offsetWidth)) {
                    var parent = input.closest('.t-input-group');
                    if (parent) {
                        var parentDisplayValue = parent.style.display;
                        (parent.style.display = 'block'),
                            (parent.style.opacity = '0'),
                            (parent.style.transform = 'translateX(-100000px)'),
                            (inputWidth = input.offsetWidth),
                            (parent.style.display = parentDisplayValue),
                            (parent.style.opacity = ''),
                            (parent.style.transform = '');
                    }
                } else inputWidth = input.offsetWidth;
                var textValue = inputWrap.querySelector('.t-range__value-txt'),
                    color1 = input.getAttribute('data-range-color'),
                    color2 = '#f4f4f4',
                    maxValue = input.getAttribute('max').replace(/\s/g, ''),
                    max = parseFloat(maxValue);
                isNaN(max) && (max = 100);
                var minValue = input.getAttribute('min').replace(/\s/g, ''),
                    min = parseFloat(minValue);
                isNaN(min) && (min = 0), input.setAttribute('max', max), input.setAttribute('min', min);
                var dist = max - min,
                    thumbWidth = 21,
                    value = input.value,
                    percentage = (value - min) / dist,
                    offLeft = Math.floor(percentage * (inputWidth - 21) + 10.5),
                    breakPoint = 100 * percentage,
                    attrValue =
                        'linear-gradient(to right, ' +
                        (color1 = color1 || '#000') +
                        ' 0%, ' +
                        color1 +
                        ' ' +
                        breakPoint +
                        '%, ' +
                        color2 +
                        ' ' +
                        breakPoint +
                        '%, ' +
                        color2 +
                        ' 100%)',
                    fieldSelector = '#rec' + recId + ' [data-input-lid="' + lid + '"] .t-range',
                    styleValue =
                        fieldSelector +
                        '::-webkit-slider-runnable-track{\nbackground:' +
                        attrValue +
                        ';\n}\n' +
                        fieldSelector +
                        '::-moz-range-track{\nbackground:' +
                        attrValue +
                        ';\n}';
                (styleValue +=
                    '\n' +
                    fieldSelector +
                    '::-ms-fill-upper{\nbackground:' +
                    color2 +
                    ';\n}\n' +
                    fieldSelector +
                    '::-ms-fill-lower{\nbackground:' +
                    color1 +
                    ';\n}'),
                    style && (style.innerHTML = styleValue),
                    (textValue.textContent = new Intl.NumberFormat('ru-RU').format(value)),
                    (textValue.style.cssText = 'left:' + offLeft + 'px; display: block;');
            }
        });
    };
});
