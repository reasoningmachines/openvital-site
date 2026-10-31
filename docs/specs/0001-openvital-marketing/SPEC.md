---
kit_metadata_version: 1
artifact: "spec"
workflow_version: 3
phase: "complete"
feature:
  id: "0001"
  slug: "openvital-marketing"
  dir: "0001-openvital-marketing"
---
# OpenVital marketing

## PURPOSE
Introduce OpenVital as the healthcare AI arm of Reasoning Machines, broader than its first planned product, Medproof.

## CONTEXT
New standalone local workspace; no existing OpenVital project found in authorized local project metadata. The parent website records reasoningmachines.co as its custom domain. Kit v3.0.50 initialized this workspace. Parent code, preview port 4173, DNS, and email work are outside scope.

## REQUIREMENTS
Readable responsive static page. Warm ivory, near-black, restrained green, editorial typography and precise geometry. Mission first, practical approach, modest Medproof section explicitly in development, parent relationship and contact status. No PHI collection, backend, tracking, invented credentials or contact address. Qualify planned privacy and product capabilities. No clinical, legal, model or savings guarantees. Publish only to the user-approved reasoningmachines/openvital-site repository and GitHub Pages domain openvital.co. DNS and other repositories remain outside scope.

## ACCEPTED PLAN
Implement dependency-free HTML/CSS with original SVG artwork, system typography, anchor navigation, focus states and reduced-motion support. Build a static dist directory and serve only its allowlisted public files on loopback port 4174. Validate source/build and render at desktop/mobile sizes. Save screenshots and document remaining publication decisions.

## DECISIONS
Use broad mission copy and three concrete design principles rather than promising an unbuilt healthcare platform. Medproof is an early direction with planned capabilities, not a live demonstration. Use verified parent domain from local project documentation; no OpenVital domain is assumed. Keep static files self-contained without remote fonts or images.
Initial work was local-only. The user subsequently authorized public repository creation, PR delivery and merge, Pages deployment, and binding openvital.co. Registration is confirmed separately. DNS is owned by another task and must wait for Pages binding.

## DISCOVERIES
Kit initialization initially failed its Mint release lookup in the restricted sandbox without changing files. Authorized escalation succeeded. No existing OpenVital repository or domain ownership was established. The user subsequently selected and registered openvital.co; keep the OpenVital brand unchanged. Public checks verified OpenCarrier and Ambient OS pages; reasoningmachines.co and limina.dev currently show Coming Soon. A visual refinement reduced the smallest phone headline to preserve intentional line breaks and removed unnecessary entrance motion.

## VALIDATION
`make build`, `make check`, `make lint`, and `kit check --project` passed. Owned browser tab rendered at 320/390/768/1280 widths without horizontal overflow. Navigation and visible keyboard focus verified. Reduced-motion parsed rule inspected; no illustration animation. Console warnings/errors empty. HTTP root 200, private path 404, POST 405. Desktop/mobile screenshots saved in output/playwright. No production validation.

## OUTCOME
Complete static marketing page with broad mission, approach, qualified Medproof section, parent relationship, pending contact, and family navigation. New user scope added suite links: live Jameson Stone, OpenCarrier, Ambient OS; GitHub organization links labeled as such; parent site explicitly marked coming soon; Spectral7 text only. The user selected openvital.co; registration and public publication authority are confirmed. Publication proceeds through issue GH-1 and a reviewed PR in reasoningmachines/openvital-site. No DNS/email changes, parent code changes, or port 4173 use.

## REPOSITORY MEMORY
This spec preserves positioning and scope. README and testing reference document commands and publication limits. Constitution bootstrap remains unchanged until validated behavior supports promotion.
