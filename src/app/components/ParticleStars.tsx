'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
}

const ParticleStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 鼠标位置跟踪
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 初始化粒子
    const initParticles = () => {
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200);
      particlesRef.current = [];

      const colors = [
        'rgba(91, 164, 164, ',   // 松石绿
        'rgba(212, 168, 83, ',   // 琥珀金
        'rgba(194, 112, 78, ',   // 陶土
        'rgba(240, 235, 228, ',  // 暖米白
      ];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };
    initParticles();

    // 绘制粒子
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制渐变背景
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(91, 164, 164, 0.1)');
      gradient.addColorStop(0.5, 'rgba(212, 168, 83, 0.1)');
      gradient.addColorStop(1, 'rgba(194, 112, 78, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // 更新和绘制每个粒子
      particlesRef.current.forEach((particle) => {
        // 更新位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 边界检测
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // 闪烁效果
        particle.opacity += particle.twinkleSpeed;
        if (particle.opacity > 0.8 || particle.opacity < 0.2) {
          particle.twinkleSpeed = -particle.twinkleSpeed;
        }

        // 鼠标互动 - 粒子轻微避开鼠标
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.x -= (dx / distance) * force * 2;
          particle.y -= (dy / distance) * force * 2;
        }

        // 绘制粒子（带光晕效果）
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // 外层光晕
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        glowGradient.addColorStop(0, particle.color + (particle.opacity * 0.8) + ')');
        glowGradient.addColorStop(0.5, particle.color + (particle.opacity * 0.3) + ')');
        glowGradient.addColorStop(1, particle.color + '0)');
        
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // 核心亮点
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (particle.opacity + 0.2) + ')';
        ctx.fill();
      });

      // 绘制星座连线（当粒子距离较近时）
      ctx.strokeStyle = 'rgba(91, 164, 164, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            ctx.strokeStyle = `rgba(91, 164, 164, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // 偶尔绘制流星
      if (Math.random() < 0.001) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * (canvas.height / 2);
        const length = Math.random() * 100 + 50;
        const angle = Math.PI / 4;

        const gradient = ctx.createLinearGradient(
          startX, startY,
          startX + length * Math.cos(angle),
          startY + length * Math.sin(angle)
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(
          startX + length * Math.cos(angle),
          startY + length * Math.sin(angle)
        );
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleStars;
