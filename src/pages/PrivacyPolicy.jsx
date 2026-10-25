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

export default function PrivacyPolicy() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Website Privacy'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow copy-panel">
          <h2>{'Using this website'}</h2>
          <p>
            {
              'This website does not store enquiry forms, process payments or create accounts. Enquiry controls open WhatsApp so that you can review and send your message there. Calling and map links open external services.'
            }
          </p>
          <p>
            {
              'Fonts are hosted with this website. If you follow WhatsApp, telephone or map links, those external services handle information under their own privacy policies.'
            }
          </p>
          <p>
            {
              'For questions about Bontle Ba Rona’s handling of policyholder information, contact the office directly.'
            }
          </p>
        </div>
      </section>
    </main>
  );
}
