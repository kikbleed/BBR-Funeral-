import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { asset, quoteUrl } from '../lib.js';

const DialogContext = createContext(null);
export const useDialogs = () => useContext(DialogContext);

export function DialogProvider({ children }) {
  const [quote, setQuote] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  return (
    <DialogContext.Provider
      value={{
        openQuote: setQuote,
        openPhotos: (items, index = 0) => {
          if (items.length) setLightbox({ items, index });
        },
      }}
    >
      {children}
      {quote && <QuoteDialog initial={quote} onClose={() => setQuote(null)} />}
      {lightbox && <PhotoDialog initial={lightbox} onClose={() => setLightbox(null)} />}
    </DialogContext.Provider>
  );
}

export function QuoteButton({ plan, age, family, children }) {
  const { openQuote } = useDialogs();
  return (
    <button className="button quote-trigger" onClick={() => openQuote({ plan, age, family })}>
      {children}
    </button>
  );
}

export function FlyerButton({ file, caption, children }) {
  const { openPhotos } = useDialogs();
  return (
    <button
      className="button flyer-open"
      onClick={() => openPhotos([{ file, caption, alt: caption }])}
    >
      {children}
    </button>
  );
}

function Modal({ id, onClose, children, onKeyDown, labelledBy }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      if (previous?.isConnected) previous.focus();
    };
  }, []);
  return (
    <dialog
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
    >
      {children}
    </dialog>
  );
}

function QuoteDialog({ initial, onClose }) {
  const [plan, setPlan] = useState(initial.plan || 'Plan A');
  const [age, setAge] = useState(initial.age || '0–64 years');
  const [family, setFamily] = useState(initial.family || '1 + 5');
  return (
    <Modal id="quote-dialog" onClose={onClose} labelledBy="quote-title">
      <div className="dialog-top">
        <h2 id="quote-title">Request a Free Quote</h2>
        <button className="dialog-close" aria-label="Close quote" onClick={onClose}>
          ×
        </button>
      </div>
      <p>
        Tell us which plan you are interested in. Continue to WhatsApp to review and send your
        enquiry.
      </p>
      <form
        id="quote-form"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.assign(quoteUrl({ plan, age, family }));
        }}
      >
        <label htmlFor="quote-plan">Choose a plan</label>
        <select id="quote-plan" value={plan} onChange={(event) => setPlan(event.target.value)}>
          {['Plan A', 'Plan A+ Plus', 'Plan B', 'Group Societies', 'Help me choose'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label htmlFor="quote-age">Age band</label>
        <select id="quote-age" value={age} onChange={(event) => setAge(event.target.value)}>
          {['0–64 years', '65–74 years', 'Please advise me'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label htmlFor="quote-family">Main member + dependants</label>
        <select
          id="quote-family"
          value={family}
          onChange={(event) => setFamily(event.target.value)}
        >
          {['1 + 5', '1 + 9', '1 + 13', 'Group society'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button className="button" type="submit">
          Continue on WhatsApp ›
        </button>
        <small>No message is sent until you send it in WhatsApp.</small>
      </form>
    </Modal>
  );
}

function PhotoDialog({ initial, onClose }) {
  const [index, setIndex] = useState(initial.index);
  const items = initial.items;
  const photo = items[index];
  const move = (direction) =>
    setIndex((current) => (current + direction + items.length) % items.length);
  return (
    <Modal
      id="photo-dialog"
      onClose={onClose}
      labelledBy="photo-caption"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div className="lightbox-toolbar">
        <span>
          {index + 1} / {items.length}
        </span>
        <button className="photo-close" aria-label="Close image" onClick={onClose}>
          ×
        </button>
      </div>
      <button
        className="photo-prev"
        aria-label="Previous image"
        hidden={items.length < 2}
        onClick={() => move(-1)}
      >
        ‹
      </button>
      <figure>
        <img
          id="lightbox-image"
          src={asset(photo.file)}
          alt={photo.alt || photo.caption || 'Bontle Ba Rona gallery photograph'}
        />
        <figcaption id="photo-caption">
          {photo.caption || photo.alt || 'Bontle Ba Rona gallery photograph'}
        </figcaption>
      </figure>
      <button
        className="photo-next"
        aria-label="Next image"
        hidden={items.length < 2}
        onClick={() => move(1)}
      >
        ›
      </button>
    </Modal>
  );
}
