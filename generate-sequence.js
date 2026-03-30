const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const SOURCE_IMAGE = "/Users/ascra_gautamy/Downloads/IMG_0192.JPG";
const OUTPUT_DIR = path.join(__dirname, "public", "sequence");
const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 450;
const FRAMES = 75;
const MAX_ZOOM = 1.3;

async function generate() {
    console.log("Loading source image...");
    try {
        const image = await Jimp.read(SOURCE_IMAGE);
        
        const sourceWidth = image.bitmap.width;
        const sourceHeight = image.bitmap.height;
        
        let cropWidth = sourceWidth;
        let cropHeight = sourceWidth * (TARGET_HEIGHT / TARGET_WIDTH);
        
        if (cropHeight > sourceHeight) {
            cropHeight = sourceHeight;
            cropWidth = sourceHeight * (TARGET_WIDTH / TARGET_HEIGHT);
        }
        
        const startX = (sourceWidth - cropWidth) / 2;
        const startY = (sourceHeight - cropHeight) / 2;
        
        const baseCropped = image.clone().crop(startX, startY, cropWidth, cropHeight);
        
        console.log("Generating frames...");
        const promises = [];
        for (let i = 0; i < FRAMES; i++) {
            const progress = i / (FRAMES - 1);
            const currentZoom = 1.0 + progress * (MAX_ZOOM - 1.0);
            
            const frameCropWidth = cropWidth / currentZoom;
            const frameCropHeight = cropHeight / currentZoom;
            
            const frameStartX = (cropWidth - frameCropWidth) / 2;
            const frameStartY = (cropHeight - frameCropHeight) / 2;
            
            const frame = baseCropped.clone()
                .crop(frameStartX, frameStartY, frameCropWidth, frameCropHeight)
                .resize(TARGET_WIDTH, TARGET_HEIGHT);
                
            const filename = i.toString().padStart(4, "0") + ".png";
            const outputPath = path.join(OUTPUT_DIR, filename);
            
            promises.push(frame.writeAsync(outputPath).then(() => {
                console.log(`Generated ${filename}`);
            }));
        }
        await Promise.all(promises);
        console.log("Success! Generated 75 frames.");
    } catch(err) {
        console.error("Error generating sequence:", err);
    }
}

generate();
