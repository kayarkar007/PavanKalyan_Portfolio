import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            
            // Add particles on move
            for (let i = 0; i < 2; i++) {
                particlesRef.current.push(new Particle(e.clientX, e.clientY));
            }
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = `rgba(255, 195, 0, ${Math.random() * 0.5 + 0.2})`;
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.01;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
                if (this.size > 0.2) this.size -= 0.05;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.life;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesRef.current.length; i++) {
                const p = particlesRef.current[i];
                p.update();
                p.draw();
                
                if (p.life <= 0) {
                    particlesRef.current.splice(i, 1);
                    i--;
                }
            }
            
            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default CursorTrail;
