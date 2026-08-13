document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.social-btn');
    const characterImgs = document.querySelectorAll('.character-img');

    // Preload PNG image objects for immediate zero-lag transitions
    const imageSources = [
        'image/socials 1.png',
        'image/socials 2.png',
        'image/socials 3.png',
        'image/sidechar.png'
    ];
    
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Function to set active pose
    function setPose(poseId) {
        // Switch active character image (handles both right and left images)
        characterImgs.forEach(img => {
            if (img.classList.contains('always-active') || img.id === `pose-${poseId}` || img.id === `left-pose-${poseId}` || img.dataset.pose === poseId) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });

        // Switch active button hover styling
        buttons.forEach(btn => {
            if (btn.dataset.pose === poseId) {
                btn.classList.add('active-hover');
            } else {
                btn.classList.remove('active-hover');
            }
        });
    }

    // Attach listeners for buttons b1, b2, b3
    buttons.forEach(btn => {
        const poseId = btn.dataset.pose;
        btn.addEventListener('mouseenter', () => setPose(poseId));
        btn.addEventListener('focus', () => setPose(poseId));
    });

    // Default pose 1 on load
    setPose('1');
});
