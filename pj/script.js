const highlight = document.getElementById('highlight');
const blurOverlay = document.getElementById('blurOverlay');

document.addEventListener('mousemove', (e) => {
    highlight.style.top = `${e.clientY - 25}px`;  

    
    const barHeight = 50; 
    const fadeAmount = 20;

    
    blurOverlay.style.maskImage = `linear-gradient(
        black ${e.clientY - (barHeight / 2) - fadeAmount}px, 
        transparent ${e.clientY - (barHeight / 2)}px, 
        transparent ${e.clientY + (barHeight / 2)}px, 
        black ${e.clientY + (barHeight / 2) + fadeAmount}px
    )`;
});
