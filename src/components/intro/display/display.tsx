import React, { useRef, useEffect, useState } from "react";
import "./display.css";

export const Display: React.FC = () => {
  // 1. Properly type the Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // 2. Type the Mouse Ref
  const mouse = useRef<{ x: number | undefined; y: number | undefined }>({
    x: undefined,
    y: undefined,
  });

  const headerHeight = 0;

  const colorArray: string[] = [
    "rgb(66, 49, 138)",
    "rgb(61, 175, 86)",
    "rgb(70, 125, 197)",
    "rgb(91, 216, 204)",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - headerHeight;
    setContainerHeight(window.innerHeight - headerHeight);

    // 3. Add types to Class Properties and Constructor Parameters
    class Circle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;
      minRadius: number;
      maxRadius: number;

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        radius: number,
        minRadius: number,
        maxRadius: number,
      ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      draw() {
        if (!c) return;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      }

      update() {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius > window.innerHeight - headerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity (using mouse.current)
        if (
          mouse.current.x !== undefined &&
          mouse.current.y !== undefined &&
          mouse.current.x - this.x < 50 &&
          mouse.current.x - this.x > -50 &&
          mouse.current.y - this.y < 50 &&
          mouse.current.y - this.y > -50
        ) {
          if (this.radius < this.maxRadius) this.radius += 1;
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }
        this.draw();
      }
    }

    let circleArray: Circle[] = [];

    const init = () => {
      circleArray = [];
      const totalCircles = 800;
      for (let i = 0; i < totalCircles; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * (window.innerWidth - radius * 2) + radius;
        const y =
          Math.random() * (window.innerHeight - headerHeight - radius * 2) +
          radius;
        // Speed
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = (Math.random() - 0.5) * 0.5;
        // Size of Circles
        const minRadius = Math.random() * 5 + 3;
        const maxRadius = Math.random() * 10 + 3;
        circleArray.push(
          new Circle(x, y, dx, dy, radius, minRadius, maxRadius),
        );
      }
    };

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight - headerHeight);
      circleArray.forEach((circle) => circle.update());
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX + window.scrollX;
      mouse.current.y = event.clientY + window.scrollY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - headerHeight;
      setContainerHeight(window.innerHeight - headerHeight);
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        top: headerHeight,
        height: containerHeight,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          top: 0,
        }}
      />
      <div className="Intro" id="Intro">
        <div className="header h1">
          <div className="name">Alan Curtis</div>
          <img src="/images/misc/alan-01-small.jpg" alt="profile" />
        </div>
        <div className="sub">
          <div className="sub-header h2"> Senior Software Engineer</div>
          <button className="goto colorBtn h3" onClick={() => {}}>
            My Work
          </button>
        </div>
      </div>
    </div>
  );
};
