# Icons

Icons in this directory are outline-style SVGs sourced from
[Heroicons](https://heroicons.com/), converted into thin Astro
wrapper components so they can be styled with Tailwind classes (used
by, for example, the `{% list %}` / `{% listitem %}` Markdoc tags —
see the style guide's *Icon Lists* section).

Non-Heroicons icons (brand marks, chain logos) live here too and
don't need to follow this pattern.

## Adding a new Heroicon

1. Find the icon's slug on [heroicons.com](https://heroicons.com/) or
   the [Heroicons repo](https://github.com/tailwindlabs/heroicons).
   Use the **outline** style (24x24) to match the existing set.
2. Fetch the source SVG directly from GitHub, don't retype it from
   memory — near-identical icons exist (for example the
   `arrow-*-start-on-rectangle` / `arrow-*-end-on-rectangle` family),
   and a hand-copied path can silently be the wrong sibling icon:

   ```bash
   curl -s "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/<slug>.svg"
   ```
3. Create `<PascalCaseName>.astro` (the slug in PascalCase, hyphens
   removed — `lock-closed` becomes `LockClosed.astro`) using this
   template, with the fetched `viewBox` and `d` attribute(s):

   ```astro
   ---
   // https://heroicons.com/
   // <slug> outline
   const { class: className } = Astro.props;
   ---
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={className}>
     <path stroke-linecap="round" stroke-linejoin="round" d="..." />
   </svg>
   ```

   Drop the fetched SVG's `aria-hidden` and `data-slot` attributes —
   neither is used by this component pattern — and add `class={className}`
   in their place so callers can pass Tailwind classes through.
