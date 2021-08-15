const img_1 = Array.from(document.getElementsByTagName('img'));
console.log(img_1)
img_1.forEach(tag=> {
    tag.classList.remove('img-transition');
})
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            img_1.classList.add('img-transition');
            return;
        }
        img_1.classList.remove('img-transition')
    })
})

observer.observe(document.querySelector('.imgdiv'))