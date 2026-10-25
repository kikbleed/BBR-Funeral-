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

export default function Gallery() {
  return (
    <main id="content" tabIndex="-1">
      <section className="gallery-shell shell">
        <h1 className="visually-hidden">{'Gallery'}</h1>
        <GalleryGrid />
      </section>
    </main>
  );
}
