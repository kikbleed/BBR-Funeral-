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

export default function Brochures() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Plan Brochures'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell brochure-grid">
          <article>
            <FlyerButton file="assets/plan-a.png" caption="Plan A">
              <img src={asset('assets/plan-a.png')} alt="Plan A flyer" loading="lazy" />
            </FlyerButton>
            <h2>{'Plan A'}</h2>
            <a className="button" href={asset('assets/plan-a.png')} download>
              {'Download Flyer'}
            </a>
          </article>
          <article>
            <FlyerButton file="assets/plan-plus.png" caption="Plan A+ Plus">
              <img src={asset('assets/plan-plus.png')} alt="Plan A+ Plus flyer" loading="lazy" />
            </FlyerButton>
            <h2>{'Plan A+ Plus'}</h2>
            <a className="button" href={asset('assets/plan-plus.png')} download>
              {'Download Flyer'}
            </a>
          </article>
          <article>
            <FlyerButton file="assets/plan-b.png" caption="Plan B">
              <img src={asset('assets/plan-b.png')} alt="Plan B flyer" loading="lazy" />
            </FlyerButton>
            <h2>{'Plan B'}</h2>
            <a className="button" href={asset('assets/plan-b.png')} download>
              {'Download Flyer'}
            </a>
          </article>
          <article>
            <FlyerButton file="assets/societies.png" caption="Group Societies">
              <img src={asset('assets/societies.png')} alt="Group Societies flyer" loading="lazy" />
            </FlyerButton>
            <h2>{'Group Societies'}</h2>
            <a className="button" href={asset('assets/societies.png')} download>
              {'Download Flyer'}
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
