document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const circleSize = 100; // Circle size
  let circle = document.getElementById('circle');

  if (!circle) {
    circle = document.createElement('div');
    circle.id = 'circle';
    circle.style.width = circleSize + 'px';
    circle.style.height = circleSize + 'px';
    circle.style.position = 'fixed';
    circle.style.pointerEvents = 'none';
    circle.style.transition = 'transform 0.1s ease-out';
    document.body.appendChild(circle);
  }

  
  const circleCenterX = mouseX - circleSize / 2;
  const circleCenterY = mouseY - circleSize / 2;

  circle.style.left = circleCenterX + 'px';
  circle.style.top = circleCenterY + 'px';

  const container = document.querySelector('.contain');
  const containerRect = container.getBoundingClientRect();
  const isInContainer = mouseX >= containerRect.left && mouseX <= containerRect.right && mouseY >= containerRect.top && mouseY <= containerRect.bottom;

  if (isInContainer) {
    circle.classList.add('filter-invert');
  } else {
    circle.classList.remove('filter-invert');
  }
});

const containers = document.querySelectorAll('.circle-container');
const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('scroll', () => {
  const centerX = scrollContainer.scrollLeft + (scrollContainer.clientWidth / 2);
  
  containers.forEach(container => {
    const containerCenterX = container.offsetLeft + (container.clientWidth / 2);
    const distance = Math.abs(centerX - containerCenterX);

    if (distance < container.clientWidth / 2) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
});

// Initial check to activate the circle in the center on load
window.addEventListener('load', () => {
  scrollContainer.dispatchEvent(new Event('scroll'));
});

// Typography scroll interaction
const typographyItems = document.querySelectorAll('.typography-item');
const infoContainer = document.querySelector('.info');

infoContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    scrollToNextItem();
  } else {
    scrollToPrevItem();
  }
});

function scrollToNextItem() {
  const currentItem = document.querySelector('.typography-item.active');
  if (currentItem) {
    const nextItem = currentItem.nextElementSibling;
    if (nextItem) {
      currentItem.classList.remove('active');
      nextItem.classList.add('active');
      nextItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    const firstItem = typographyItems[0];
    if (firstItem) {
      firstItem.classList.add('active');
      firstItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

function scrollToPrevItem() {
  const currentItem = document.querySelector('.typography-item.active');
  if (currentItem) {
    const prevItem = currentItem.previousElementSibling;
    if (prevItem) {
      currentItem.classList.remove('active');
      prevItem.classList.add('active');
      prevItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// Initial check to activate the first typography item on load
window.addEventListener('load', () => {
  const firstItem = typographyItems[0];
  if (firstItem) {
    firstItem.classList.add('active');
    firstItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});


const typographyItems = document.querySelectorAll('.typography-item01');
const scrollContainerTypography = document.querySelector('.scroll-container-typography01');

scrollContainerTypography.addEventListener('scroll', () => {
  const centerX = scrollContainerTypography.scrollLeft + (scrollContainerTypography.clientWidth / 2);
  
  typographyItems.forEach(item => {
    const itemCenterX = item.offsetLeft + (item.clientWidth / 2);
    const distance = Math.abs(centerX - itemCenterX);

    if (distance < item.clientWidth / 2) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// Initial check to activate the circle in the center on load
window.addEventListener('load', () => {
  scrollContainer.dispatchEvent(new Event('scroll'));
  scrollContainerTypography.dispatchEvent(new Event('scroll'));
});