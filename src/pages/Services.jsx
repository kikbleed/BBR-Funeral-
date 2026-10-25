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

export default function Services() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'WHAT WE OFFER'}</p>
          <h1>{'Our Services'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell service-grid">
          <article>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M15 28 3 16C-6 6 9-2 15 8 21-2 36 6 27 16L15 28Z"></path>
            </svg>
            <h2>{'Funeral Arrangements'}</h2>
            <p>
              {
                'Coffin and casket options, mortuary service, death registration, graveyard décor and refreshments.'
              }
            </p>
          </article>
          <article>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="m3 14 4-8h17l4 8v11H3V14Zm0 1h25M7 20h4m10 0h4M7 25v4m17-4v4"></path>
            </svg>
            <h2>{'Funeral Transport'}</h2>
            <p>{'A hearse, family car/s and one bus are included in the family plans.'}</p>
          </article>
          <article>
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
            <h2>{'Family Support'}</h2>
            <p>{'A tent, two tables and 50 chairs are included with each family plan.'}</p>
          </article>
          <article>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="m6 12 5-9m13 9-5-9M2 12h27l-3 15H6L2 12Zm8 4v7m6-7v7m6-7v7"></path>
            </svg>
            <h2>{'Grocery Benefits'}</h2>
            <p>
              {
                'Plan A and Plan A+ Plus include a R1,500 grocery fund. Plan B includes a R2,000 grocery fund.'
              }
            </p>
          </article>
          <article>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M5 2h14l8 8v19H5V2Zm14 0v9h8M10 17h12m-12 6h12"></path>
            </svg>
            <h2>{'Family Funeral Plans'}</h2>
            <p>{'Choose a main member plus 5, 9 or 13 dependants, with two listed age bands.'}</p>
          </article>
          <article>
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
            <h2>{'Group Societies'}</h2>
            <p>
              {
                'Packages for 14 members with no age limit. View the society page for benefits and conditions.'
              }
            </p>
          </article>
        </div>
      </section>
      <div className="center section compact">
        <SiteLink className="button " href="#/funeral-plans/plan-a">
          <span aria-hidden="true">{'›'}</span>
          {' Explore Our Plans'}
        </SiteLink>
      </div>
    </main>
  );
}
