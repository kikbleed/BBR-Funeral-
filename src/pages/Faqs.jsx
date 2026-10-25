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

export default function Faqs() {
  return (
    <main id="content" tabIndex="-1">
      <section className="page-banner">
        <div className="shell">
          <p className="eyebrow">{'BONTLE BA RONA FUNERAL SERVICES'}</p>
          <h1>{'Frequently Asked Questions'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow faq-list">
          <details>
            <summary>
              {'How do I join a funeral plan?'}
              <span>{'+'}</span>
            </summary>
            <p>
              {
                'Call or visit an office in Lethlabile or Brits. Our team will explain the plan options, documents and policy terms.'
              }
            </p>
          </details>
          <details>
            <summary>
              {'Who can I include on my family plan?'}
              <span>{'+'}</span>
            </summary>
            <p>
              {
                'The family plans list a main member plus 5, 9 or 13 dependants, with age bands of 0–64 and 65–74 years. Please confirm how the bands apply to your family with our team.'
              }
            </p>
          </details>
          <details>
            <summary>
              {'Is there a joining fee?'}
              <span>{'+'}</span>
            </summary>
            <p>{'Family plans have a R250 joining fee, or you can switch to us for free.'}</p>
          </details>
          <details>
            <summary>
              {'Is there a waiting period?'}
              <span>{'+'}</span>
            </summary>
            <p>
              {
                'The family plans state a 6-month waiting period. Society packages have their own switching conditions, explained on the Group Societies page.'
              }
            </p>
          </details>
          <details>
            <summary>
              {'What is included in the grocery benefit?'}
              <span>{'+'}</span>
            </summary>
            <p>
              {
                'Plan A and Plan A+ Plus include a R1,500 grocery fund; Plan B includes R2,000. Society packages list a grocery package on the original society flyer.'
              }
            </p>
          </details>
          <details>
            <summary>
              {'What should I do when a loved one passes away?'}
              <span>{'+'}</span>
            </summary>
            <p>
              {
                'Call 081 836 6788 or the Brits office on 072 365 7435. The team can guide you through the next steps.'
              }
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
