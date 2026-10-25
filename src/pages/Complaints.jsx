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

export default function Complaints() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Complaints & Feedback'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow copy-panel">
          <h2>{'Talk to us about your concern'}</h2>
          <p>
            {
              'Contact the office to discuss your concern and request the appropriate complaints process.'
            }
          </p>
          <a className="button " href="tel:+27818366788">
            <span aria-hidden="true">{'›'}</span>
            {' Call Our Team'}
          </a>
          <a className="button secondary" href="https://wa.me/27818366788">
            <span aria-hidden="true">{'›'}</span>
            {' WhatsApp Us'}
          </a>
        </div>
      </section>
    </main>
  );
}
