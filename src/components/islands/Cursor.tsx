import { useEffect, useRef, useState } from "react";

const pointerQuery = "(hover: hover) and (pointer: fine)";
const reducedQuery = "(prefers-reduced-motion: reduce)";
const interactiveSelector = 'a, button, [role="button"], summary, [data-cursor="hover"]';
const inputSelector = 'input[type="text"], input[type="email"], input[type="search"], input[type="url"], input[type="password"], textarea, [contenteditable="true"]';

function tokenMilliseconds(name: string): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const amount = Number.parseFloat(value);
  return value.endsWith("s") && !value.endsWith("ms") ? amount * 1000 : amount;
}

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = window.matchMedia(pointerQuery);
    const reduced = window.matchMedia(reducedQuery);
    const update = () => setEnabled(pointer.matches && !reduced.matches);
    update();
    pointer.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      pointer.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursor?.querySelector<HTMLElement>(".custom-cursor-ring-position");
    const dot = cursor?.querySelector<HTMLElement>(".custom-cursor-dot-position");
    if (!enabled || !cursor || !ring || !dot) return;

    const root = document.documentElement;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame = 0;
    let pressTimer: ReturnType<typeof setTimeout> | undefined;
    let hasMoved = false;

    root.classList.add("has-custom-cursor");

    const stopLoop = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const setPosition = (element: HTMLElement, x: number, y: number) => {
      element.style.setProperty("--cursor-x", `${x}px`);
      element.style.setProperty("--cursor-y", `${y}px`);
    };

    const animateRing = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      setPosition(ring, currentX, currentY);
      if (Math.abs(targetX - currentX) < 0.1 && Math.abs(targetY - currentY) < 0.1) {
        currentX = targetX;
        currentY = targetY;
        setPosition(ring, currentX, currentY);
        animationFrame = 0;
        return;
      }
      animationFrame = requestAnimationFrame(animateRing);
    };

    const show = () => {
      if (hasMoved && !document.hidden) cursor.classList.add("is-visible");
    };

    const updateTarget = (x: number, y: number) => {
      targetX = x;
      targetY = y;
      setPosition(dot, x, y);
      if (!hasMoved) {
        hasMoved = true;
        currentX = x;
        currentY = y;
        setPosition(ring, x, y);
      } else if (!animationFrame && (Math.abs(targetX - currentX) >= 0.1 || Math.abs(targetY - currentY) >= 0.1)) {
        animationFrame = requestAnimationFrame(animateRing);
      }
      show();
    };

    const applyTargetState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      const input = Boolean(target.closest(inputSelector));
      cursor.classList.toggle("is-hidden", input);
      cursor.classList.toggle("is-hover", !input && Boolean(target.closest(interactiveSelector)));
    };

    const onPointerMove = (event: PointerEvent) => {
      if (document.hidden || event.pointerType === "touch") return;
      applyTargetState(event.target);
      updateTarget(event.clientX, event.clientY);
    };

    const onPointerOver = (event: PointerEvent) => applyTargetState(event.target);

    const onMouseDown = () => {
      ring.classList.add("is-pressed");
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = setTimeout(() => ring.classList.remove("is-pressed"), tokenMilliseconds("--duration-cursor-press"));
    };

    const hide = () => {
      cursor.classList.remove("is-visible");
      stopLoop();
    };

    const onWindowEnter = (event: MouseEvent) => {
      if (!hasMoved) return;
      updateTarget(event.clientX, event.clientY);
      show();
    };

    const onVisibilityChange = () => {
      if (document.hidden) hide();
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("mouseenter", onWindowEnter);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("mouseenter", onWindowEnter);
      stopLoop();
      if (pressTimer) clearTimeout(pressTimer);
      root.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={cursorRef} className="custom-cursor-layer" data-custom-cursor="true" aria-hidden="true">
      <span className="custom-cursor-position custom-cursor-ring-position"><span className="custom-cursor-ring" /></span>
      <span className="custom-cursor-position custom-cursor-dot-position"><span className="custom-cursor-dot" /></span>
    </div>
  );
}
