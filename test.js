$('.t-slds__thumbsbullet .t-slds__bgimg').each((i, el) => {
    const src = el.dataset.original;

    const canvas = document.createElement('canvas');

    const pic = new Image();
    pic.crossOrigin = 'Anonymous';
    pic.src = src;
    pic.onload = function () {
        canvas.width = pic.width;
        canvas.height = pic.height;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(pic, 0, 0);

        var c = canvas.getContext('2d');
        var p = c.getImageData(110, 130, 1, 1).data;
        var hex = 'rgb(' + p[0] + ', ' + p[1] + ', ' + p[2] + ')';

        console.log(c.getImageData(110, 130, 1, 1));

        el.style.backgroundColor = hex;
    };
});
