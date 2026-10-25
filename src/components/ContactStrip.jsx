import React from 'react';
import { asset } from '../lib.js';
import { SiteLink, Logo } from './Brand.jsx';
import { QuoteButton, FlyerButton } from './Dialogs.jsx';
import { BenefitTabs, PlanCarousel, GalleryGrid, SitePhoto, HeroSlideshow } from './Content.jsx';

export default function ContactStrip() {
  return (
    <div className="contact-strip">
      <div className="shell contact-items">
        <a href="tel:+27818366788">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M7 3 3 7c0 10 10 20 20 20l4-4-7-5-3 3c-5-2-8-5-10-10l3-3-3-5Z"></path>
          </svg>
          <span>
            <strong>{'Main Office'}</strong>
            {'081 836 6788'}
          </span>
        </a>
        <a href="tel:+27723657435">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M7 3 3 7c0 10 10 20 20 20l4-4-7-5-3 3c-5-2-8-5-10-10l3-3-3-5Z"></path>
          </svg>
          <span>
            <strong>{'Call Us · Brits'}</strong>
            {'072 365 7435'}
          </span>
        </a>
        <SiteLink href="#/locate-your-branch">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M15 28S5 17 5 11a10 10 0 0 1 20 0c0 6-10 17-10 17Z"></path>
            <circle cx="15" cy="11" r="3"></circle>
          </svg>
          <span>
            <strong>{'Location'}</strong>
            {'Newtown, Lethlabile'}
          </span>
        </SiteLink>
        <a href="tel:+27722627056">
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
          <span>
            <strong>{'Society Enquiries'}</strong>
            {'072 262 7056'}
          </span>
        </a>
      </div>
    </div>
  );
}
