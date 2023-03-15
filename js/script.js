const namesContainer = document.querySelector('.names');
let draggedName = null;
namesContainer.addEventListener('dragstart', (event) => {
    draggedName = event.target;
    event.target.style.opacity = '0.5';
});
namesContainer.addEventListener('dragend', (event) => {
    event.target.style.opacity = '';
    draggedName = null;
});
namesContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
});
namesContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('name')) {
        const droppedName = event.target;
        const temp = document.createElement('div');
        draggedName.parentNode.insertBefore(temp, draggedName);
        droppedName.parentNode.insertBefore(draggedName, droppedName);
        temp.parentNode.insertBefore(droppedName, temp);
        temp.parentNode.removeChild(temp);
    }
});