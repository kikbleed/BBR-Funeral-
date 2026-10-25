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

export default function ClaimsForm() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Claims & Family Support'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow copy-panel">
          <h2>{'Speak to our team about a claim'}</h2>
          <p>
            {
              'Call our office for guidance on the documents and next steps for your policy. Our team will confirm the applicable claim process and benefits.'
            }
          </p>
          <p>
            {
              'Please provide sensitive documents directly to the office through a channel agreed with the team.'
            }
          </p>
          <a className="button " href="tel:+27818366788">
            <span aria-hidden="true">{'›'}</span>
            {' Call 081 836 6788'}
          </a>
          <SiteLink className="button secondary" href="#/locate-your-branch">
            <span aria-hidden="true">{'›'}</span>
            {' Find Your Office'}
          </SiteLink>
        </div>
      </section>
    </main>
  );
}
