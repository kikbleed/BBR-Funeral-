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

export default function FuneralPlansPlanAPlus() {
  return (
    <main id="content" tabIndex="-1">
      <section className="plan-hero">
        <div className="shell">
          <p className="eyebrow">{'FAMILY FUNERAL COVER WITH GROCERY BENEFITS'}</p>
          <h1>{'Plan A+ Plus'}</h1>
          <p className="starting">
            {'Starting from '}
            <strong>
              {'R200.00 '}
              <span>{'/pm'}</span>
            </strong>
          </p>
          <p>{'Open-face coffin, practical funeral benefits and family support.'}</p>
          <a className="button outline" href="https://wa.me/27818366788">
            <span aria-hidden="true">{'›'}</span>
            {' WHATSAPP US'}
          </a>
        </div>
      </section>
      <div className="shell plan-highlights">
        <div>
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
          {'Main member +'}
          <br />
          {'5, 9 or 13 dependants'}
        </div>
        <div>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="m6 12 5-9m13 9-5-9M2 12h27l-3 15H6L2 12Zm8 4v7m6-7v7m6-7v7"></path>
          </svg>
          {'R1,500'}
          <br />
          {'Grocery Fund'}
        </div>
        <div>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="m3 14 4-8h17l4 8v11H3V14Zm0 1h25M7 20h4m10 0h4M7 25v4m17-4v4"></path>
          </svg>
          {'Funeral Transport'}
          <br />
          {'Support'}
        </div>
        <div>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M27 9A13 13 0 1 0 28 23M27 2v8h-8M15 7v10l7 4"></path>
          </svg>
          {'6-Month'}
          <br />
          {'Waiting Period'}
        </div>
      </div>
      <section className="section">
        <div className="shell narrow">
          <BenefitTabs labels={['Funeral Benefits', 'Grocery Benefits', 'Terms & Conditions']}>
            <section role="tabpanel" id="panel-benefits" aria-labelledby="tab-benefits">
              <h2>{'Funeral Benefits'}</h2>
              <ul className="checks">
                <li>{'Open-face coffin'}</li>
                <li>{'Coffin spray'}</li>
                <li>{'Mortuary service'}</li>
                <li>{'Death registration'}</li>
                <li>{'Graveyard décor'}</li>
                <li>{'Refreshments'}</li>
                <li>{'Hearse'}</li>
                <li>{'Family car/s'}</li>
                <li>{'1 bus'}</li>
                <li>{'Tent'}</li>
                <li>{'2 tables'}</li>
                <li>{'50 chairs'}</li>
              </ul>
            </section>
            <section role="tabpanel" id="panel-groceries" aria-labelledby="tab-groceries">
              <h2>{'Grocery Benefits'}</h2>
              <p>
                {'Grocery fund: '}
                <strong>{'R1,500.00'}</strong>
              </p>
            </section>
            <section role="tabpanel" id="panel-terms" aria-labelledby="tab-terms">
              <h2>{'Terms & Conditions'}</h2>
              <p>
                {
                  'R250 joining fee, or switch to us for free. A 6-month waiting period applies. Contact our team to confirm eligibility, age-band application and full policy terms before joining.'
                }
              </p>
            </section>
          </BenefitTabs>
          <div className="rates-grid">
            <article className="rate-card">
              <h3>
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
                {' Main member + 5'}
              </h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p>
                  <span>{'0–64 years'}</span>
                  <strong>
                    {'R200.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <p>
                  <span>{'65–74 years'}</span>
                  <strong>
                    {'R250.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <ul className="checks">
                  <li>{'Family funeral support'}</li>
                  <li>{'R1,500 grocery fund'}</li>
                </ul>
                <QuoteButton plan="Plan A+ Plus" family="1 + 5">
                  {'CHOOSE PLAN'}
                </QuoteButton>
              </div>
            </article>
            <article className="rate-card">
              <h3>
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
                {' Main member + 9'}
              </h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p>
                  <span>{'0–64 years'}</span>
                  <strong>
                    {'R250.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <p>
                  <span>{'65–74 years'}</span>
                  <strong>
                    {'R320.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <ul className="checks">
                  <li>{'Family funeral support'}</li>
                  <li>{'R1,500 grocery fund'}</li>
                </ul>
                <QuoteButton plan="Plan A+ Plus" family="1 + 9">
                  {'CHOOSE PLAN'}
                </QuoteButton>
              </div>
            </article>
            <article className="rate-card">
              <h3>
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
                {' Main member + 13'}
              </h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p>
                  <span>{'0–64 years'}</span>
                  <strong>
                    {'R320.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <p>
                  <span>{'65–74 years'}</span>
                  <strong>
                    {'R400.00'}
                    <small>{' /pm'}</small>
                  </strong>
                </p>
                <ul className="checks">
                  <li>{'Family funeral support'}</li>
                  <li>{'R1,500 grocery fund'}</li>
                </ul>
                <QuoteButton plan="Plan A+ Plus" family="1 + 13">
                  {'CHOOSE PLAN'}
                </QuoteButton>
              </div>
            </article>
          </div>
          <div className="download-bar">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M5 2h14l8 8v19H5V2Zm14 0v9h8M10 17h12m-12 6h12"></path>
            </svg>
            <div>
              <h2>{'View the Original Plan Details'}</h2>
              <p>{'See the complete flyer supplied by Bontle Ba Rona.'}</p>
            </div>
            <FlyerButton file="assets/plan-plus.png" caption="Plan A+ Plus flyer">
              {'VIEW FLYER'}
            </FlyerButton>
            <a className="button secondary" href={asset('assets/plan-plus.png')} download>
              {'DOWNLOAD FLYER'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
