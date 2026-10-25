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

export default function AboutUs() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'About Us'}</h1>
        </div>
      </section>
      <section className="section home-intro">
        <div className="shell about-grid">
          <div className="about-collage reveal from-left">
            <SitePhoto className="collage-photo first" index={0} />
            <SitePhoto className="collage-photo second" index={1} />
            <div className="office-badge">
              <strong>{'3'}</strong>
              {' Offices in'}
              <br />
              {'Lethlabile & Brits'}
            </div>
            <div className="collage-caption">{'We serve with pride.'}</div>
          </div>
          <div className="reveal from-right">
            <p className="tag">{'ABOUT BONTLE BA RONA'}</p>
            <h2 className="compact-title">
              {'Funeral Services Designed Around Care, Family & Respect'}
            </h2>
            <p>
              {
                'Bontle Ba Rona Funeral Services offers family funeral plans and society packages, with offices in Lethlabile and Brits.'
              }
            </p>
            <p>
              {
                'From mortuary service and death registration to funeral transport and grocery benefits, our plans bring practical support together for your family.'
              }
            </p>
            <ul className="checks">
              <li>{'Family funeral plans from R170 per month'}</li>
              <li>{'Grocery and funeral transport benefits'}</li>
              <li>{'Three offices in Lethlabile and Brits'}</li>
            </ul>
            <div className="about-bottom">
              <strong>
                {'More Than Funeral Services'}
                <br />
                <span>{'We serve with pride.'}</span>
              </strong>
              <SiteLink className="button secondary" href="#/about-us">
                <span aria-hidden="true">{'›'}</span>
                {' More About Us'}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
