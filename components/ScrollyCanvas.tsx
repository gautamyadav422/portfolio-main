"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

export default function ScrollyCanvas({ frameCount = 75 }: { frameCount?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(frameCount);

            // 1. Instantly load the very first frame to prevent an empty background!
            const loadSingleFrame = (index: number): Promise<void> => {
                return new Promise((resolve) => {
                    const img = new Image();
                    const frameId = index.toString().padStart(4, "0");
                    img.src = `/portfolio-main/sequence/${frameId}.png`;
                    img.onload = () => {
                        loadedImages[index] = img;
                        resolve();
                    };
                    img.onerror = () => resolve();
                });
            };

            await loadSingleFrame(0);
            setImages([...loadedImages]);
            setIsLoaded(true); // Reveal the first frame to the user instantly

            // 2. Silently load the remaining 74 frames in the background so the page doesn't freeze
            const promises: Promise<void>[] = [];
            for (let i = 1; i < frameCount; i++) {
                promises.push(loadSingleFrame(i));
            }
            
            await Promise.all(promises);
            setImages([...loadedImages]); // Fully equip the scroll sequence
        };

        loadImages();
    }, [frameCount]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Responsive Object-Fit Cover Logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        // Clear and Draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
