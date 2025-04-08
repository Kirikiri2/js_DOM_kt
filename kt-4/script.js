const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');
const valueDisplay = document.querySelector('.slider-value');
const fill = document.querySelector('.slider-fill');

let isDragging = false;

function updateSlider(event) {
    const sliderRect = slider.getBoundingClientRect();
    let position = event.clientX - sliderRect.left;
    
    if (position < 0) position = 0;
    if (position > sliderRect.width) position = sliderRect.width;
    
    const percent = Math.round((position / sliderRect.width) * 100);
    
    thumb.style.left = `${position}px`;
    valueDisplay.textContent = percent;
    valueDisplay.style.left = `${position}px`;
    fill.style.width = `${position}px`;
}

thumb.addEventListener('mousedown', (event) => {
    isDragging = true;
    event.preventDefault();
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        updateSlider(event);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('click', (event) => {
    updateSlider(event);
}); 