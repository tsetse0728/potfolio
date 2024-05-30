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

