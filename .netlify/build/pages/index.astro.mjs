import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderComponent } from '../chunks/astro/server_DWB63hCX.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles } from '../chunks/index.95d291e9_DAFXqDkw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Microdose Cafe</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/garywintle/code/microdose-cafe/src/layouts/MainLayout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(styles.nav, "class")}> <div${addAttribute(styles.logo, "class")}> <div${addAttribute(styles.logoImage, "class")}> <img src="/images/mdc-logo-image.webp" alt="Microdose Cafe Logo"></div> <div${addAttribute(styles.logoText, "class")}> <img src="/images/mdc-logo-text.webp" alt="Microdose Cafe Logo"> </div> </div> <ul${addAttribute(styles.navLinks, "class")}> <li><a href="#"><span>About Microdosing</span></a></li> <li><a href="#"><span>Menu</span></a></li> <li><a href="#"><span>FAQs</span></a></li> <li><a href="#"><span>Find Us!</span></a></li> </ul> </nav>`;
}, "/home/garywintle/code/microdose-cafe/src/components/Navbar/Navbar.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})}   ` })}`;
}, "/home/garywintle/code/microdose-cafe/src/pages/index.astro", void 0);

const $$file = "/home/garywintle/code/microdose-cafe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
