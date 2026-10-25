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

export default function Articles() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Information & Resources'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell resource-grid">
          <article>
            <h2>{'Compare Family Funeral Plans'}</h2>
            <p>{'View the three family plans, their grocery funds and monthly premiums.'}</p>
            <SiteLink className="button " href="#/funeral-plans/plan-a">
              <span aria-hidden="true">{'›'}</span>
              {' View Plans'}
            </SiteLink>
          </article>
          <article>
            <h2>{'Switching From Another Society'}</h2>
            <p>{'Read the society switching conditions and the documents listed in the flyer.'}</p>
            <SiteLink className="button " href="#/funeral-plans/group-societies">
              <span aria-hidden="true">{'›'}</span>
              {' Society Information'}
            </SiteLink>
          </article>
          <article>
            <h2>{'Original Plan Brochures'}</h2>
            <p>{'Read or download the original Bontle Ba Rona flyers.'}</p>
            <SiteLink className="button " href="#/brochures">
              <span aria-hidden="true">{'›'}</span>
              {' View Brochures'}
            </SiteLink>
          </article>
        </div>
      </section>
    </main>
  );
}
