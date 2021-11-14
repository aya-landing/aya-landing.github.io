/* Welcome to Aya website! */

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

class Carousel {

  constructor(element, margin /* margins that child elements have */, offset) {
    this.carousel = element;
    this.content = this.carousel.querySelector('.js-carousel__content');
    this.left = this.carousel.querySelector('.js-carousel__left');
    this.right = this.carousel.querySelector('.js-carousel__right');

    this.left.addEventListener('click', this.moveLeft.bind(this));
    this.right.addEventListener('click', this.moveRight.bind(this));
    this.margin = margin;
    this.offset = offset;

    this.reset();
    window.addEventListener('resize', throttle(this.resize.bind(this), 100));
  }

  updateArrowVisiblity(scrollLeftTarget) {
    const scrollLeft = scrollLeftTarget === undefined ? this.content.scrollLeft : scrollLeftTarget;
    let left = false;
    let right = false;

    if (this.contentWidth > this.blockWidth) {
      left = true;
      right = true;
    }

    if (scrollLeft === 0) {
      left = false;
    }

    if (scrollLeft + this.blockWidth >= this.content.scrollWidth) {
      right = false;
    }

    this.left.classList.toggle('aya-list-controller--active', left);
    this.right.classList.toggle('aya-list-controller--active', right);
  }

  moveLeft() {
    let left;
    this.index -= 1;
    if (this.index <= 0) {
      left = 0;
      this.index = 0;
    } else {
      left = this.visibleChildren[this.index].offsetLeft - this.offset;
    }

    this.content.scrollTo({
      left,
      behavior: 'smooth',
    });
    this.updateArrowVisiblity(left);
  }

  moveRight() {
    let left;
    this.index += 1;
    if (this.index >= this.visibleChildren.length - 1) {
      left = this.content.scrollWidth - this.blockWidth;
      this.index = this.visibleChildren.length - 1;
    } else {
      left = this.visibleChildren[this.index].offsetLeft + this.offset;
    }

    this.content.scrollTo({
      left,
      behavior: 'smooth',
    });
    this.updateArrowVisiblity(left);
  }

  resize() {
    this.blockWidth = this.content.getBoundingClientRect().width;
    this.updateArrowVisiblity();
  }

  reset() {
    this.index = 0;
    this.blockWidth = this.content.getBoundingClientRect().width;

    this.visibleChildren = [...this.content.children].map((item) => {
      const width = item.getBoundingClientRect().width ;
      return {
        width: width ? width + this.margin : 0,
        offsetLeft: item.offsetLeft,
      };
    }).filter((item) => item.width > 0);

    this.contentWidth = this.visibleChildren.reduce((acc, value) => {
      return acc + value.width;
    }, 0);

    this.content.scrollLeft = 0;
    this.updateArrowVisiblity();
  }
}

const carouselElement = document.querySelector('.js-carousel');

if (carouselElement) {
  new Carousel(carouselElement, 0, 0);
}

document.querySelector('video').playbackRate = 0.5;
