import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { mountLumenfallGame } from './game/engine.js';
import './styles.css';

function StatusBar({ id, label }) {
  return (
    <div className="h-8 w-64 rounded-lg border-2 border-white/20 bg-black/50 p-1 shadow-[0_0_20px_rgba(0,0,0,0.45)]" aria-label={label}>
      <div id={id} className="h-full w-full rounded-md transition-[width] duration-200 ease-out" />
    </div>
  );
}

function TouchControls() {
  return (
    <div id="touch-controls-layer" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-56 items-center justify-between p-5">
      <div id="move-stick" className="joystick-base bottom-8 left-8">
        <div id="move-knob" className="joystick-knob left-1/2 top-1/2" />
      </div>
      <div id="action-buttons" className="pointer-events-auto absolute bottom-10 right-8 flex items-center gap-5">
        <button id="fire-button" type="button" className="action-button" aria-label="Disparar magia">
          <svg viewBox="0 0 24 24" fill="var(--magic-color)" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 drop-shadow-[0_0_8px_var(--magic-color)]">
            <path d="M12 2C12 2 4.9 8.3 4.9 12.5C4.9 17.5 8.1 21 12 21s7.1-3.5 7.1-8.5C19.1 8.3 12 2 12 2Z" />
          </svg>
        </button>
        <button id="jump-button" type="button" className="action-button text-5xl text-white" aria-label="Saltar">▲</button>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => mountLumenfallGame(), []);

  return (
    <main id="game-container" className="relative h-dvh w-screen cursor-none overflow-hidden font-serif text-white">
      <canvas id="background-canvas" className="game-canvas z-[1]" />
      <canvas id="midground-canvas" className="game-canvas z-[2]" />
      <canvas id="game-canvas" className="game-canvas z-[3]" />
      <canvas id="foreground-canvas" className="game-canvas z-[4]" />

      <section id="hud-container" className="absolute left-5 top-5 z-10 flex flex-col gap-2.5">
        <StatusBar id="health-bar" label="Salud" />
        <StatusBar id="mana-bar" label="Maná" />
      </section>

      <div id="level-indicator" className="absolute right-5 top-5 z-10 text-xl text-white shadow-black text-shadow" />

      <section id="boss-hud-container" className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1">
        <div id="boss-name" className="text-xl text-white drop-shadow-[0_2px_4px_#000]" />
        <div className="h-7 w-[min(25rem,80vw)] rounded-lg border-2 border-white/20 bg-black/50 p-1 shadow-[0_0_20px_rgba(0,0,0,0.45)]">
          <div id="boss-health-bar" className="h-full w-full rounded-md bg-[var(--boss-health-color)] transition-[width] duration-200 ease-out" />
        </div>
      </section>

      <TouchControls />

      <section id="menu-overlay" className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-black/70 text-center text-white drop-shadow-[0_2px_4px_#000]">
        <p className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-1 text-sm uppercase tracking-[0.35em] text-cyan-100">React + Tailwind</p>
        <h1 className="text-6xl font-bold">LumenFall</h1>
        <p className="max-w-md px-6 text-lg text-slate-200">Explora seis mundos, domina el doble salto y derrota al Espectro Ocular.</p>
        <button id="start-button" type="button" className="rounded-xl bg-blue-600 px-8 py-4 text-2xl font-bold text-white shadow-[0_6px_#1e3a8a] transition active:translate-y-1 active:shadow-[0_2px_#1e3a8a]">Empezar</button>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
