'use strict';
let slider = document.querySelector('.slider');
// загрузка иконки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// загрузка leftArrow
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// загрузка rightArrow
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// ждем когда весь контент загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });
});


// ждем когда весь контент загрузится
window.addEventListener('load', function () {
    images.init();
    loadIcon.style.display = 'none';
});

/**
 *
 * @param {HTMLDivElement}slider
 */
function setSize(slider) {
    let width = slider.getAttribute('data-width');
    let height = slider.getAttribute('data-height');
    if (width != null && width != "") {
        slider.style.width = width;
    }
    if (height != null && height != "") {
        slider.style.height = height;
    }

}

setSize(slider);

let images = {
    /*{int} номер текущего изображения*/
    currentIdx: 0,
    /*{HTMLDivElement[]} номер текущего изображения*/
    slides: [],
    /*получаем все слайды и записываем первый слайд*/
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImagesWithCurrentIndx();
    },
    showImagesWithCurrentIndx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },
    /*Всем слайдам добавляем hidden-slide*/
    hideVisibleImage() {
        this.slides.forEach(function (slide) {
            if (!slide.classList.contains('hidden-slide')) {
                slide.classList.add('hidden-slide');
            }

        });
    },
    // переключение на следующие картинки left
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImagesWithCurrentIndx();
    },
    // переключение на следующие картинки left
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImagesWithCurrentIndx();
    },
};

