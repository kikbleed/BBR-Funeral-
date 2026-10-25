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

export default function Careers() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Careers'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow copy-panel">
          <h2>{'Career Enquiries'}</h2>
          <p>
            {
              'Contact Bontle Ba Rona directly for information about career opportunities and how to apply.'
            }
          </p>
          <SiteLink className="button " href="#/contact-info">
            <span aria-hidden="true">{'›'}</span>
            {' Contact Us'}
          </SiteLink>
        </div>
      </section>
    </main>
  );
}
