import React from 'react';
import { asset } from '../lib.js';
import { SiteLink, Logo } from './Brand.jsx';
import { QuoteButton, FlyerButton } from './Dialogs.jsx';
import { BenefitTabs, PlanCarousel, GalleryGrid, SitePhoto, HeroSlideshow } from './Content.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <SiteLink className="footer-brand" href="#/">
            <Logo />
          </SiteLink>
          <p>
            {'Bontle Ba Rona Funeral Services.'}
            <br />
            {'We serve with pride.'}
          </p>
          <p>{'Family funeral plans and society packages. Terms and conditions apply.'}</p>
        </div>
        <div>
          <h3>{'Quick Links'}</h3>
          <SiteLink href="#/">{'Home'}</SiteLink>
          <SiteLink href="#/about-us">{'About Us'}</SiteLink>
          <SiteLink href="#/faqs">{'FAQs'}</SiteLink>
          <SiteLink href="#/locate-your-branch">{'Branch Location'}</SiteLink>
        </div>
        <div>
          <h3>{'Our Services'}</h3>
          <SiteLink href="#/services">{'Services'}</SiteLink>
          <SiteLink href="#/funeral-plans/plan-a">{'Plan A'}</SiteLink>
          <SiteLink href="#/funeral-plans/plan-a-plus">{'Plan A+ Plus'}</SiteLink>
          <SiteLink href="#/funeral-plans/plan-b">{'Plan B'}</SiteLink>
          <SiteLink href="#/funeral-plans/group-societies">{'Group Societies'}</SiteLink>
        </div>
        <div>
          <h3>{'Contact Us'}</h3>
          <a href="tel:+27818366788">{'081 836 6788'}</a>
          <a href="tel:+27723657435">{'072 365 7435'}</a>
          <a href="https://wa.me/27818366788">{'WhatsApp our team'}</a>
          <p>
            {'Plot No. 25, Stand 165'}
            <br />
            {'Main Lethlabile Road'}
            <br />
            {'Newtown, Lethlabile, 0264'}
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <div>
          <SiteLink href="#/privacy-policy">{'Privacy Policy'}</SiteLink>
          <SiteLink href="#/terms-conditions">{'Terms & Conditions'}</SiteLink>
        </div>
        <p>{'Copyright © 2026 Bontle Ba Rona Funeral Services. All Rights Reserved.'}</p>
      </div>
    </footer>
  );
}
