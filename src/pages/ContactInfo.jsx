import React from 'react';
import { asset } from '../lib.js';
import { SiteLink, Logo } from '../components/Brand.jsx';
import { QuoteButton, FlyerButton } from '../components/Dialogs.jsx';
import {
  BenefitTabs,
  PlanCarousel,
  GalleryGrid,
  SitePhoto,
  HeroSlideshow,
} from '../components/Content.jsx';

export default function ContactInfo() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Contact Us'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="office-grid">
            <article>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M15 28S5 17 5 11a10 10 0 0 1 20 0c0 6-10 17-10 17Z"></path>
                <circle cx="15" cy="11" r="3"></circle>
              </svg>
              <h2>{'Main Office'}</h2>
              <address>
                {'Plot No. 25, Stand 165'}
                <br />
                {'Main Lethlabile Road'}
                <br />
                {'Newtown, Lethlabile, 0264'}
              </address>
              <a className="phone-link" href="tel:+27818366788">
                {'081 836 6788'}
              </a>
              <div className="office-actions">
                <a href="https://wa.me/27818366788">{'WhatsApp ›'}</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+25+Stand+165+Main+Lethlabile+Road+Newtown+Lethlabile"
                  target="_blank"
                  rel="noopener"
                >
                  {'View Map ›'}
                </a>
              </div>
            </article>
            <article>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M15 28S5 17 5 11a10 10 0 0 1 20 0c0 6-10 17-10 17Z"></path>
                <circle cx="15" cy="11" r="3"></circle>
              </svg>
              <h2>{'Brits Office'}</h2>
              <address>
                {'Edelweiss Building'}
                <br />
                {'Cnr Kerk St & Maclean St'}
                <br />
                {'Opposite AutoZone, Brits'}
              </address>
              <a className="phone-link" href="tel:+27723657435">
                {'072 365 7435'}
              </a>
              <div className="office-actions">
                <a href="https://wa.me/27723657435">{'WhatsApp ›'}</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Edelweiss+Building+Kerk+Street+Maclean+Street+Brits"
                  target="_blank"
                  rel="noopener"
                >
                  {'View Map ›'}
                </a>
              </div>
            </article>
            <article>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M15 28S5 17 5 11a10 10 0 0 1 20 0c0 6-10 17-10 17Z"></path>
                <circle cx="15" cy="11" r="3"></circle>
              </svg>
              <h2>{'Lethlabile Office'}</h2>
              <address>
                {'1517 Block B'}
                <br />
                {"Dr Tjangase's Surgery"}
                <br />
                {'Sampax 911, Lethlabile'}
              </address>
              <a className="phone-link" href="tel:+27818366788">
                {'081 836 6788'}
              </a>
              <div className="office-actions">
                <a href="https://wa.me/27818366788">{'WhatsApp ›'}</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1517+Block+B+Lethlabile"
                  target="_blank"
                  rel="noopener"
                >
                  {'View Map ›'}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
