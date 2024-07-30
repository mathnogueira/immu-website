function startCarrossel() {
    const element = document.getElementById("carrossel");
    const images = element.getElementsByTagName('img');

    for (let i = 1; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    let currentItem = 0;
    setInterval(() => {
        let nextItem = (currentItem + 1) % images.length
        images[currentItem].style.opacity = 0;
        images[nextItem].style.opacity = 1;

        currentItem = nextItem;
    }, 5000)
}

window.onload = function() {
    startCarrossel();
}