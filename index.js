window.onload = () => {
    let posY = window.pageYOffset || document.documentElement.scrollTop;
    if(posY>80){
        document.querySelector('header').classList.add('hdr-sm', 'hdr-dw');
    }
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if (distanceY > 40) {
            document.querySelector('header').classList.add('hdr-sm');
            if (distanceY > 80) {
                (posY < distanceY) ? document.querySelector('header').classList.add('hdr-dw') : document.querySelector('header').classList.remove('hdr-dw');
                (posY > distanceY) ? document.querySelector('header').classList.add('hdr-up') : document.querySelector('header').classList.remove('hdr-up');
            }
        } else {
            document.querySelector('header').classList.remove('hdr-sm','hdr-dw','hdr-up');
        }posY = window.pageYOffset || document.documentElement.scrollTop;
    });
};