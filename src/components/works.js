export default () => document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('partfolio')
    if (works && Array.isArray(works)) {
        works.forEach(work => root.insertAdjacentHTML('beforeend', `
        <article class="partfolio__item">
            <h3 class="partfolio__item-title quates">${work.title}</h3>
            <div data-partfolio-image class="partfolio__item-image">
                <img data-fancybox src="${work.image}" alt="${work.title}">
            </div>
            <p class="partfolio__item-description">${getPreTitle(work.title)}${work.description}</p>
        </article>
        `))
        Array.prototype.forEach.call(document.querySelectorAll('[data-partfolio-image]'), imageBlock => {
            imageBlock.querySelector('img').onload = (e) => {
                const image = e.target
                const { naturalHeight: height, naturalWidth: width } = image
                if (height > width) {
                    imageBlock.classList.add('vertical')
                }
            }
        })
    }
})