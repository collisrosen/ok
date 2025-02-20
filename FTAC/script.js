// script.js

document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const media = item.querySelector('img, video');
        
        if (media) {
            // Resize media elements to fit within the thumbnail
            media.onload = () => {
                resizeMedia(media);
            };
            media.onloadeddata = () => {
                resizeMedia(media);
            };
        }
    });

    function resizeMedia(media) {
        const item = media.closest('.grid-item');
        const itemWidth = item.offsetWidth;

        // Make sure aspect ratio is maintained
        if (media.tagName.toLowerCase() === 'img') {
            const aspectRatio = media.naturalWidth / media.naturalHeight;
            if (aspectRatio > 1) {
                media.style.width = '100%';
                media.style.height = 'auto';
            } else {
                media.style.height = '100%';
                media.style.width = 'auto';
            }
        } else if (media.tagName.toLowerCase() === 'video') {
            const aspectRatio = media.videoWidth / media.videoHeight;
            if (aspectRatio > 1) {
                media.style.width = '100%';
                media.style.height = 'auto';
            } else {
                media.style.height = '100%';
                media.style.width = 'auto';
            }
        }
    }
});
