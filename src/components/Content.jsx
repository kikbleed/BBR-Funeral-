import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { asset } from '../lib.js';
import { photos } from '../data/gallery.js';
import { useDialogs } from './Dialogs.jsx';

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function BenefitTabs({ labels, children }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef([]);
  const panels = Children.toArray(children);
  const selectWithKeyboard = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % labels.length;
    if (event.key === 'ArrowLeft') next = (index + labels.length - 1) % labels.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = labels.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setSelected(next);
      buttons.current[next]?.focus();
    }
  };
  return (
    <div className="benefit-tabs">
      <div role="tablist" aria-label="Plan details">
        {labels.map((label, index) => (
          <button
            key={label}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            role="tab"
            id={`plan-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`plan-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => selectWithKeyboard(event, index)}
          >
            {label}
          </button>
        ))}
      </div>
      {panels.map((panel, index) =>
        cloneElement(panel, {
          id: `plan-panel-${index}`,
          'aria-labelledby': `plan-tab-${index}`,
          hidden: selected !== index,
          tabIndex: 0,
        }),
      )}
    </div>
  );
}

export function PlanCarousel({ children }) {
  const track = useRef(null);
  const hovering = useRef(false);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const move = (direction) => {
    const element = track.current;
    if (!element?.firstElementChild) return;
    const distance = element.firstElementChild.getBoundingClientRect().width + 30;
    const end = element.scrollWidth - element.clientWidth;
    let next = element.scrollLeft + direction * distance;
    if (next > end + 5) next = 0;
    if (next < 0) next = end;
    element.scrollTo({ left: next, behavior: reduced ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => {
      if (
        !document.hidden &&
        !hovering.current &&
        !document.querySelector('dialog[open]') &&
        !track.current?.contains(document.activeElement)
      )
        move(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, reduced]);
  return (
    <>
      <div
        className="plan-track"
        ref={track}
        onPointerEnter={() => {
          hovering.current = true;
        }}
        onPointerLeave={() => {
          hovering.current = false;
        }}
      >
        {children}
      </div>
      <div className="carousel-controls">
        <button
          aria-label="Previous plans"
          onClick={() => {
            setPaused(true);
            move(-1);
          }}
        >
          ‹
        </button>
        <button
          className="pause-plans"
          aria-label={paused || reduced ? 'Play plan carousel' : 'Pause plan carousel'}
          aria-pressed={paused || reduced}
          disabled={reduced}
          onClick={() => setPaused(!paused)}
        >
          {paused || reduced ? '▷' : 'Ⅱ'}
        </button>
        <button
          aria-label="Next plans"
          onClick={() => {
            setPaused(true);
            move(1);
          }}
        >
          ›
        </button>
      </div>
    </>
  );
}

export function GalleryGrid() {
  const { openPhotos } = useDialogs();
  if (!photos.length)
    return (
      <div className="gallery-empty">
        <h2>Gallery</h2>
        <p>Photographs will appear here once added.</p>
      </div>
    );
  return (
    <div className="photo-grid" id="gallery-grid">
      {photos.map((photo, index) => (
        <button
          key={photo.file}
          className="photo-tile"
          aria-label={`Open photograph ${index + 1}${photo.caption ? ': ' + photo.caption : ''}`}
          onClick={() => openPhotos(photos, index)}
        >
          <img
            src={asset(photo.file)}
            alt={photo.alt || photo.caption || 'Bontle Ba Rona gallery photograph'}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        </button>
      ))}
    </div>
  );
}

export function SitePhoto({ className, index }) {
  const photo = photos[index];
  return (
    <div
      className={className}
      style={photo ? { backgroundImage: `url("${asset(photo.file)}")` } : undefined}
      role={photo ? 'img' : undefined}
      aria-label={photo ? photo.alt || photo.caption || 'Bontle Ba Rona' : undefined}
    />
  );
}

export function HeroSlideshow() {
  const slides = photos.filter((photo) => photo.hero !== false).slice(0, 4);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (slides.length < 2 || paused || reduced) return;
    const timer = setInterval(() => {
      if (!document.hidden && !document.querySelector('dialog[open]'))
        setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, paused, reduced]);
  return (
    <>
      <div className="hero-slides" aria-hidden="true">
        {slides.map((photo, index) => (
          <div
            key={photo.file}
            className={`hero-slide${index === active ? ' active' : ''}${paused || reduced ? ' paused' : ''}`}
            style={{ backgroundImage: `url("${asset(photo.file)}")` }}
          />
        ))}
      </div>
      {slides.length > 1 && (
        <button
          className="slideshow-pause"
          aria-pressed={paused || reduced}
          aria-label={paused || reduced ? 'Play slideshow' : 'Pause slideshow'}
          disabled={reduced}
          onClick={() => setPaused(!paused)}
        >
          {paused || reduced ? '▷' : 'Ⅱ'}
        </button>
      )}
    </>
  );
}
