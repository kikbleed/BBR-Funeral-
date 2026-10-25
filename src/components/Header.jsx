import React, { useEffect, useRef, useState } from 'react';
import ContactStrip from './ContactStrip.jsx';
import { Logo, SiteLink } from './Brand.jsx';
import { QuoteButton } from './Dialogs.jsx';

const navigation = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about-us' },
  { label: 'Services', href: '#/services' },
  {
    label: 'Our Plans',
    links: [
      ['Plan A', 'funeral-plans/plan-a'],
      ['Plan A+ Plus', 'funeral-plans/plan-a-plus'],
      ['Plan B', 'funeral-plans/plan-b'],
      ['Group Societies', 'funeral-plans/group-societies'],
    ],
  },
  { label: 'FAQs', href: '#/faqs' },
  { label: 'Media', links: [['Gallery', 'gallery']] },
  {
    label: 'Resources',
    links: [
      ['Articles', 'articles'],
      ['Careers', 'careers'],
      ['Plan Brochures', 'brochures'],
    ],
  },
  {
    label: 'Contact Us',
    links: [
      ['Contact Info', 'contact-info'],
      ['Claims', 'claims-form'],
      ['Branch Locator', 'locate-your-branch'],
      ['Complaints', 'complaints'],
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const header = useRef(null);
  const mobileButton = useRef(null);
  const triggers = useRef({});
  const groups = useRef({});
  useEffect(() => {
    const outside = (event) => {
      if (!header.current?.contains(event.target)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', outside);
    return () => document.removeEventListener('click', outside);
  }, []);
  const desktopPointer = (event) =>
    event.pointerType === 'mouse' && window.matchMedia('(min-width:1025px)').matches;

  return (
    <>
      <a
        className="skip"
        href="#content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('content')?.focus();
        }}
      >
        Skip to content
      </a>
      <ContactStrip />
      <header
        ref={header}
        onKeyDown={(event) => {
          if (event.key !== 'Escape') return;
          if (open !== null) triggers.current[open]?.focus();
          else {
            setMobileOpen(false);
            mobileButton.current?.focus();
          }
          setOpen(null);
        }}
      >
        <div className="shell nav-bar">
          <SiteLink className="brand" href="#/" aria-label="Bontle Ba Rona home">
            <Logo />
          </SiteLink>
          <button
            ref={mobileButton}
            className="mobile-menu"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpen(null);
            }}
          >
            ☰ <span>Menu</span>
          </button>
          <nav id="main-nav" className={mobileOpen ? 'open' : ''} aria-label="Main navigation">
            {navigation.map((item, index) =>
              item.href ? (
                <SiteLink key={item.label} href={item.href}>
                  {item.label}
                </SiteLink>
              ) : (
                <div
                  key={item.label}
                  ref={(element) => {
                    groups.current[index] = element;
                  }}
                  className={`nav-group${open === index ? ' is-open' : ''}`}
                  onPointerEnter={(event) => {
                    if (desktopPointer(event)) setOpen(index);
                  }}
                  onPointerLeave={(event) => {
                    if (
                      desktopPointer(event) &&
                      !event.currentTarget.contains(document.activeElement)
                    )
                      setOpen(null);
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget))
                      setOpen((current) => (current === index ? null : current));
                  }}
                >
                  <button
                    className="nav-trigger"
                    ref={(element) => {
                      triggers.current[index] = element;
                    }}
                    aria-expanded={open === index}
                    aria-controls={`nav-panel-${index}`}
                    onClick={() => setOpen(open === index ? null : index)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        setOpen(index);
                        requestAnimationFrame(() =>
                          groups.current[index]?.querySelector('.submenu a')?.focus(),
                        );
                      }
                    }}
                  >
                    {item.label}
                    <span aria-hidden="true">⌄</span>
                  </button>
                  <div className="submenu" id={`nav-panel-${index}`}>
                    {item.links.map(([label, path]) => (
                      <SiteLink
                        key={path}
                        href={`#/${path}`}
                        onClick={() => {
                          setOpen(null);
                          setMobileOpen(false);
                        }}
                      >
                        {label}
                      </SiteLink>
                    ))}
                  </div>
                </div>
              ),
            )}
          </nav>
          <QuoteButton>
            <span aria-hidden="true">›</span> Free Quote
          </QuoteButton>
        </div>
      </header>
    </>
  );
}
