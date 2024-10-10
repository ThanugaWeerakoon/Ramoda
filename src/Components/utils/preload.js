// utils/preload.js
export const preloadImages = (images) => {
    return new Promise((resolve, reject) => {
      let loadedImages = 0;
      let totalImages = images.length;
  
      const onImageLoad = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          resolve();
        }
      };
  
      images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = onImageLoad;
        img.onerror = reject;
      });
    });
  };
  