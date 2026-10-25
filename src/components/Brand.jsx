import React from 'react';
import { asset, routeFromHash } from '../lib.js';

export function Logo() {
  return (
    <span className="logo-crop">
      <img
        src={asset('assets/plan-a.png')}
        alt="Bontle Ba Rona Funeral Services — We serve with pride"
      />
    </span>
  );
}

export function SiteLink({ href, children, ...props }) {
  const current = routeFromHash(window.location.hash) === routeFromHash(href);
  return (
    <a href={href} aria-current={current ? 'page' : undefined} {...props}>
      {children}
    </a>
  );
}
