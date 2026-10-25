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

export default function Home() {
  return (
    <main id="content" tabIndex="-1">
      <section className="home-hero">
        <HeroSlideshow />
        <div className="hero-shade"></div>
        <div className="shell">
          <div className="hero-copy reveal from-left">
            <p className="tag">{'WELCOME TO BONTLE BA RONA'}</p>
            <h1>
              {'Funeral Services &'}
              <br />
              {'Funeral Cover For'}
              <br />
              {'Your Family'}
            </h1>
            <p>
              {
                'Family funeral plans, society packages and compassionate support in Lethlabile and Brits. We help your family prepare for a dignified farewell with practical care when it matters most.'
              }
            </p>
            <div className="hero-actions">
              <SiteLink className="button " href="#/services">
                <span aria-hidden="true">{'›'}</span>
                {' Learn More'}
              </SiteLink>
              <SiteLink className="hero-gallery" href="#/gallery">
                <span>{'▷'}</span>
                {' View Gallery'}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className="home-intro">
        <div className="shell feature-row">
          <article>
            <h3>{'Funeral Cover & Policies'}</h3>
            <p>
              {
                'Choose from Plan A, Plan A+ Plus and Plan B, with cover for a main member and dependants.'
              }
            </p>
          </article>
          <article>
            <h3>{'Grocery & Family Benefits'}</h3>
            <p>
              {
                'Our family plans include grocery funds, funeral transport and support for the farewell.'
              }
            </p>
          </article>
          <article>
            <h3>{'Local Branch Support'}</h3>
            <p>
              {
                'Visit our offices in Lethlabile and Brits for help with your plan and funeral arrangements.'
              }
            </p>
          </article>
        </div>
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
      <section className="section services-section">
        <div className="shell">
          <div className="center-heading">
            <p className="tag">{'What We Offer'}</p>
            <h2>{'Supporting Families Every Step Of The Way'}</h2>
          </div>
          <div className="service-row">
            <SiteLink href="#/funeral-plans/plan-a">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M15 28 3 16C-6 6 9-2 15 8 21-2 36 6 27 16L15 28Z"></path>
              </svg>
              <h3>{'Funeral Cover Plans'}</h3>
              <p>{'Explore family options and compare monthly premiums.'}</p>
            </SiteLink>
            <SiteLink href="#/services">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="m3 14 4-8h17l4 8v11H3V14Zm0 1h25M7 20h4m10 0h4M7 25v4m17-4v4"></path>
              </svg>
              <h3>{'Funeral Services'}</h3>
              <p>{'Mortuary service, death registration and funeral transport.'}</p>
            </SiteLink>
            <SiteLink href="#/claims-form">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="10" cy="8" r="4"></circle>
                <circle cx="23" cy="9" r="3"></circle>
                <path d="M2 28v-8a8 8 0 0 1 16 0v8M20 16c6-1 9 3 9 7v5"></path>
              </svg>
              <h3>{'Claims & Family Support'}</h3>
              <p>{'Contact our team for assistance and next steps.'}</p>
            </SiteLink>
          </div>
        </div>
      </section>
      <section className="care-band">
        <div className="shell">
          <h2>{'Funeral Services With Care, Dignity & Family Support'}</h2>
          <div>
            <span>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="m6 12 5-9m13 9-5-9M2 12h27l-3 15H6L2 12Zm8 4v7m6-7v7m6-7v7"></path>
              </svg>
              {' Grocery Benefits Included'}
            </span>
            <span>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="m3 14 4-8h17l4 8v11H3V14Zm0 1h25M7 20h4m10 0h4M7 25v4m17-4v4"></path>
              </svg>
              {' Funeral Transport'}
            </span>
            <span>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M7 3 3 7c0 10 10 20 20 20l4-4-7-5-3 3c-5-2-8-5-10-10l3-3-3-5Z"></path>
              </svg>
              {' Accessible Support'}
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="center-heading">
            <p className="tag">{'WHAT WE OFFER'}</p>
            <h2 className="mulish">{'Funeral Plans Designed Around Family Support'}</h2>
          </div>
          <div className="carousel">
            <PlanCarousel>
              <article className="summary-card">
                <h3>{'Plan A'}</h3>
                <div>
                  <p className="accent">{'STARTING FROM'}</p>
                  <p className="summary-price">
                    {'R170.00 '}
                    <span>{'/pm'}</span>
                  </p>
                  <p>{'Standard flat-lid coffin'}</p>
                  <ul className="checks">
                    <li>{'Main member + dependants'}</li>
                    <li>{'R1,500 grocery fund'}</li>
                    <li>{'Funeral transport support'}</li>
                  </ul>
                  <SiteLink className="button " href="#/funeral-plans/plan-a">
                    <span aria-hidden="true">{'›'}</span>
                    {' VIEW PLAN'}
                  </SiteLink>
                </div>
              </article>
              <article className="summary-card">
                <h3>{'Plan A+ Plus'}</h3>
                <div>
                  <p className="accent">{'STARTING FROM'}</p>
                  <p className="summary-price">
                    {'R200.00 '}
                    <span>{'/pm'}</span>
                  </p>
                  <p>{'Open-face coffin'}</p>
                  <ul className="checks">
                    <li>{'Main member + dependants'}</li>
                    <li>{'R1,500 grocery fund'}</li>
                    <li>{'Funeral transport support'}</li>
                  </ul>
                  <SiteLink className="button " href="#/funeral-plans/plan-a-plus">
                    <span aria-hidden="true">{'›'}</span>
                    {' VIEW PLAN'}
                  </SiteLink>
                </div>
              </article>
              <article className="summary-card">
                <h3>{'Plan B'}</h3>
                <div>
                  <p className="accent">{'STARTING FROM'}</p>
                  <p className="summary-price">
                    {'R250.00 '}
                    <span>{'/pm'}</span>
                  </p>
                  <p>{'Casket'}</p>
                  <ul className="checks">
                    <li>{'Main member + dependants'}</li>
                    <li>{'R2,000 grocery fund'}</li>
                    <li>{'Funeral transport support'}</li>
                  </ul>
                  <SiteLink className="button " href="#/funeral-plans/plan-b">
                    <span aria-hidden="true">{'›'}</span>
                    {' VIEW PLAN'}
                  </SiteLink>
                </div>
              </article>
              <article className="summary-card">
                <h3>{'Group Societies'}</h3>
                <div>
                  <p className="accent">{'STARTING FROM'}</p>
                  <p className="summary-price">
                    {'R250.00 '}
                    <span>{'/pm'}</span>
                  </p>
                  <p>{'Society funeral packages'}</p>
                  <ul className="checks">
                    <li>{'14 members'}</li>
                    <li>{'No age limit'}</li>
                    <li>{'Groceries included'}</li>
                  </ul>
                  <SiteLink className="button " href="#/funeral-plans/group-societies">
                    <span aria-hidden="true">{'›'}</span>
                    {' VIEW PLAN'}
                  </SiteLink>
                </div>
              </article>
            </PlanCarousel>
          </div>
        </div>
      </section>
    </main>
  );
}
