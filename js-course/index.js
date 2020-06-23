window.onload = () => {
    const div3 = document.getElementById('div3');
    div3.style.width = '100px';

    setTimeout(animate1, 16.7);
    function animate1() {
        let currentWidth = parseInt(div3.style.width);
        if (currentWidth < 600) {
            div3.style.width = currentWidth + 3 + 'px';
            setTimeout(animate1, 16.7)
        }
    }

    const div4 = document.getElementById('div4');
    div4.style.width = '100px';
    // RAF
    function animate2() {
        let currentWidth = parseInt(div4.style.width);
        if(currentWidth < 600){
            div4.style.width =  currentWidth + 3 + 'px';
            window.requestAnimationFrame(animate2);
        }
    }
    animate2();
}

