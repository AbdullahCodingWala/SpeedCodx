import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const BackgroundGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 20; // Reduced from 50 for better performance

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(251, 191, 36, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationFrameId;
        let lastTime = 0;
        const targetFPS = 30; // Limit to 30 FPS for better performance
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime) => {
            if (currentTime - lastTime >= frameInterval) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                lastTime = currentTime;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const debouncedResize = debounce(handleResize, 250);
        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
            <div className="absolute inset-0 minecraft-grid opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>

            {/* Optimized Dynamic ambient glows - reduced blur and simplified animations */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[60px] rounded-full will-change-transform" style={{ transform: 'translate3d(0, 0, 0)' }} />
            <div className="absolute top-[20%] -right-[10%] w-[35%] h-[45%] bg-amber-500/10 blur-[60px] rounded-full will-change-transform" style={{ transform: 'translate3d(0, 0, 0)' }} />
            <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[40%] bg-yellow-600/15 blur-[60px] rounded-full will-change-transform" style={{ transform: 'translate3d(0, 0, 0)' }} />
        </div>
    );
};

export default BackgroundGrid;
