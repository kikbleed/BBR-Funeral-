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

export default function FuneralPlansGroupSocieties() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'14 MEMBERS · NO AGE LIMIT'}</p>
          <h1>{'Group Societies'}</h1>
          <p>{'Funeral support for your society, with three package options.'}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="rates-grid">
            <article className="rate-card">
              <h3>{'Flat Lid'}</h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p className="summary-price">
                  {'R250.00 '}
                  <span>{'/pm'}</span>
                </p>
                <ul className="checks">
                  <li>{'14 members'}</li>
                  <li>{'No age limit'}</li>
                  <li>{'Groceries included'}</li>
                </ul>
                <QuoteButton plan="Group Societies">{'ENQUIRE NOW'}</QuoteButton>
              </div>
            </article>
            <article className="rate-card">
              <h3>{'Pine 3 Tier'}</h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p className="summary-price">
                  {'R300.00 '}
                  <span>{'/pm'}</span>
                </p>
                <ul className="checks">
                  <li>{'14 members'}</li>
                  <li>{'No age limit'}</li>
                  <li>{'Groceries included'}</li>
                </ul>
                <QuoteButton plan="Group Societies">{'ENQUIRE NOW'}</QuoteButton>
              </div>
            </article>
            <article className="rate-card">
              <h3>{'Red Wood Casket'}</h3>
              <div>
                <p className="accent">{'MONTHLY PREMIUM'}</p>
                <p className="summary-price">
                  {'R400.00 '}
                  <span>{'/pm'}</span>
                </p>
                <ul className="checks">
                  <li>{'14 members'}</li>
                  <li>{'No age limit'}</li>
                  <li>{'Groceries included'}</li>
                </ul>
                <QuoteButton plan="Group Societies">{'ENQUIRE NOW'}</QuoteButton>
              </div>
            </article>
          </div>
          <div className="benefit-tabs society-benefits">
            <h2>{'Funeral Benefits'}</h2>
            <ul className="checks">
              <li>{'Collection of the body'}</li>
              <li>{'Coffin'}</li>
              <li>{'Hearse'}</li>
              <li>{'Tent'}</li>
              <li>{'2 tables'}</li>
              <li>{'Bus'}</li>
              <li>{'Death registration'}</li>
              <li>{'Graveside décor'}</li>
              <li>{'Refreshments'}</li>
              <li>{'Fresh flowers'}</li>
              <li>{'Family car'}</li>
              <li>{'50 chairs'}</li>
              <li>{'1 toilet'}</li>
              <li>{'R120 airtime'}</li>
            </ul>
            <h2>{'Groceries'}</h2>
            <ul className="checks">
              <li>{'1 bag potatoes'}</li>
              <li>{'1 box tomatoes'}</li>
              <li>{'1 bag cabbage (6)'}</li>
              <li>{'1 bag onions'}</li>
              <li>{'1 bag butternut'}</li>
              <li>{'1 bag beetroot'}</li>
              <li>{'1 bag carrots'}</li>
              <li>{'10 kg mabele'}</li>
              <li>{'10 kg sugar'}</li>
              <li>{'10 kg samp'}</li>
              <li>{'25 kg maize meal'}</li>
              <li>{'10 kg cake flour'}</li>
              <li>{'10 kg mala mogodu'}</li>
              <li>{'Tea bags: 500 × 2 (as listed)'}</li>
              <li>{'900 g powdered milk'}</li>
              <li>{'5 L cooking oil'}</li>
              <li>{'10 packets stew beef'}</li>
              <li>{'2 kg braai pack (6)'}</li>
            </ul>
          </div>
          <div className="copy-panel">
            <h2>{'Waiting Period, Switching & Claims'}</h2>
            <p>
              {
                'A 6-month waiting period applies. Cover includes up to 50 km, with extra charges thereafter.'
              }
            </p>
            <p>
              {
                "No joining fee and no waiting period when switching from another society with an up-to-date policy. Bring a copy of the policy and members' ID copies to the office."
              }
            </p>
            <p>
              {
                'Grocery claims close on Wednesday at 10:00. The flyer states that money can be claimed afterwards. It also lists a R2,000 cash claim for the 3-tier option and R3,000 for the casket option. Terms and conditions apply; contact the team to confirm the applicable option.'
              }
            </p>
            <p>
              {'Society enquiries: '}
              <a href="tel:+27818366788">{'081 836 6788'}</a>
              {' / '}
              <a href="tel:+27722627056">{'072 262 7056'}</a>
              {'.'}
            </p>
            <FlyerButton file="assets/societies.png" caption="Group societies flyer">
              {'VIEW ORIGINAL FLYER'}
            </FlyerButton>
          </div>
        </div>
      </section>
    </main>
  );
}
