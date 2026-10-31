# OpenVital

OpenVital is the healthcare AI arm of Reasoning Machines LLC. This static page introduces its mission, approach, and first product in development, Medproof.

## Development

Requires Node.js 22 or later. No dependency installation is needed.

```sh
make build
make check
make lint
make dev
```

The local preview is http://127.0.0.1:4174. Rebuild and refresh after source edits. Stop with Ctrl-C. The loopback-only preview serves only index.html, styles.css and favicon.svg from dist/.

## Design and product scope

Warm ivory, restrained green, system typography and original SVG geometry. Semantic navigation, visible keyboard focus, skip link, responsive layout, and reduced-motion scroll behavior. No browser JavaScript, analytics, cookies, forms, uploads, storage, billing engine or patient-data processing.

Medproof is in development. Copy describes planned capabilities for an iPhone app; it does not claim clinical effectiveness, legal eligibility, model performance or guaranteed savings. Contact details remain pending.

## Publication

Repository: https://github.com/reasoningmachines/openvital-site. Intended canonical domain: https://openvital.co.

Pull requests run the static build and source checks. The Pages workflow builds the three public assets, retains a Pages artifact and deploys it after a merge to main. Only the deploy job has Pages/OIDC write permissions. Kit's pinned Mint workflow separately manages immutable tags and GitHub Releases on main.

GitHub Pages must exist and bind openvital.co before the domain's DNS web records change. DNS and email are managed separately. Recovery uses Pages deployment history or a reviewed source correction. Do not change mail records during website connection.

Family navigation uses verified live destinations or labels unfinished sites and GitHub organization links explicitly. See the feature specification for rationale and testing reference for validation limits.

## Maintainers

Jameson Stone.
