const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                resetBoxes();
                box.style.backgroundColor = 'white';
            });
        });

        function resetBoxes() {
            boxes.forEach(box => {
                box.style.backgroundColor = 'blue';
            });
        }