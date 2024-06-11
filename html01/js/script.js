const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                resetBoxes();
                box.style.backgroundColor = 'white';
            });
        });

        function resetBoxes() {
            boxes.forEach(box => {
                box.style.backgroundColor = 'transparent';
            });
        }

function showBlock(clickedBox, blockId) {
    const hiddenBlock = document.getElementById(blockId);
    const container = document.querySelector('.container');
    const allHiddenBlocks = document.querySelectorAll('.hidden-block');

    // If the clicked block is already active, close it
    if (hiddenBlock.classList.contains('active')) {
        hiddenBlock.classList.remove('active');
        container.appendChild(hiddenBlock); // Move the block back to its original position
        return;
    }

    // Close all hidden blocks
    allHiddenBlocks.forEach(block => {
        block.classList.remove('active');
        container.appendChild(block); // Move each block back to its original position
    });

    // Move hiddenBlock to the clicked box position
    clickedBox.after(hiddenBlock);

    // Force reflow to restart the animation
    void hiddenBlock.offsetWidth;

    // Add the active class to show the block
    hiddenBlock.classList.add('active');

    const image = hiddenBlock.querySelector('img');
        if (image) {
            image.onload = function() {
                hiddenBlock.style.maxHeight = `${this.height}px`;
            };
    }
}
