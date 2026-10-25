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

export default function TermsConditions() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Plan Information & Terms'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow copy-panel">
          <h2>{'Before Joining'}</h2>
          <p>
            {
              'Prices and benefits shown on this website are taken from the supplied Bontle Ba Rona plan flyers. Premiums are monthly. The original flyers are available under Resources → Plan Brochures.'
            }
          </p>
          <p>
            {
              'Family plans list a R250 joining fee, or free switching, and a 6-month waiting period. Group societies have separate conditions.'
            }
          </p>
          <p>
            {
              'Please confirm current premiums, eligibility, exclusions, waiting periods, switching conditions and complete policy terms with the office before joining. An enquiry through this website does not create a policy or confirm cover.'
            }
          </p>
        </div>
      </section>
    </main>
  );
}
