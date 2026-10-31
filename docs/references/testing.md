# Validation

## Commands

- `make build`: copy the three public assets into dist.
- `make check`: Node syntax and source validation; anchors, heading, static scope, accessibility hooks, exact built bytes.
- `make lint`: the same narrow static HTML/CSS contract check. No third-party lint suite is installed.
- `kit check --project`: Kit project coherence.
- `make dev`: one loopback preview on port 4174. No dependencies or credentials.

## Browser validation

Use an owned browser tab with the local preview. Inspect at 320, 390, 768, and desktop widths. Verify readable layout, no horizontal overflow, anchor navigation, keyboard focus and skip link. Inspect reduced-motion CSS; the page has no scripted motion. Check browser console. Save screenshots under ignored `output/playwright/` and close the owned browser tab when complete. Stop the preview server after review.

## Observed on 2026-10-31

Build, source check, static lint, Kit coherence passed. Browser desktop and mobile rendered. DOM measurements showed scrollWidth equal to clientWidth at 320, 390, 768 and default 1280 width. Product anchor navigated correctly. Keyboard Tab produced visible 3px focus outline. Reduced-motion stylesheet rule disables smooth scrolling; illustration is static. No warning/error console entries observed. Local HTTP checks returned 200 for root, 404 for /.env, 405 for POST.

## Limits

No production deployment or production validation. Reduced-motion media setting was inspected in the parsed stylesheet; OS preference was not toggled. No screen-reader audit, external accessibility scanner, complete WCAG certification, medical model, bill-processing engine, legal eligibility assessment, or real patient data used. Source validation is deliberately narrow; it is not a general HTML/CSS standards linter.
