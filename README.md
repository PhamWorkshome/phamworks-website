# PhamWorks Home Services Inc. website

A free, responsive one-page website for https://phamworks.ca/.

## Preview locally

Double-click `index.html` to open it in your browser. No build tools or paid hosting required.

## Publish with GitHub Pages

1. Sign in at https://github.com/ and create a **public** repository named `phamworks-website`.
2. Choose **Add file → Upload files** and upload the **contents** of this folder: `index.html`, `styles.css`, `script.js`, `CNAME`, and the `assets` folder with its files. (If the upload interface doesn't accept folders, upload the files inside `assets` with their relative paths using GitHub's web editor or GitHub Desktop.) Commit the changes.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. Under **Custom domain**, enter `phamworks.ca` and save. The included `CNAME` file already names this domain.
5. At Porkbun, open **Domain Management → phamworks.ca → DNS**. Replace the default Porkbun website records only (such as an ALIAS at the root pointing to `pixie.porkbun.com`, and wildcard CNAME if appropriate). Add these GitHub Pages records:

   | Type | Host | Answer |
   | --- | --- | --- |
   | A | (blank or @) | 185.199.108.153 |
   | A | (blank or @) | 185.199.109.153 |
   | A | (blank or @) | 185.199.110.153 |
   | A | (blank or @) | 185.199.111.153 |
   | CNAME | www | YOUR_GITHUB_USERNAME.github.io |

   **Replace `YOUR_GITHUB_USERNAME` with your real GitHub username.** Some DNS interfaces want the host blank for the root, others use `@`.
6. **Do not remove or change** your Purelymail MX, TXT ownership, SPF, DKIM CNAME, or other email DNS records. Website DNS and email DNS can coexist.
7. After DNS updates propagate, return to **Settings → Pages** and enable **Enforce HTTPS** once GitHub makes it available. Confirm both `https://phamworks.ca` and `https://www.phamworks.ca` open the site.

GitHub Pages may take a few minutes to deploy and DNS/HTTPS can take longer to activate. Check GitHub's current official guidance if the interface or IP addresses change: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Edit your site

- `index.html`: business copy, services, email links.
- `styles.css`: layout and brand colours (`#0b5e4b` and `#1f2933`).
- `assets/services-hero.webp`: approved modern six-service homepage image.
- `assets/logo.webp`: cropped version of your supplied white-background logo.
- `script.js`: mobile menu and automatic footer year.

## Before advertising

Review all service descriptions for work you actually offer and any applicable licensing/permit requirements. No customer reviews, completed-project photos, credentials, or insurance claims have been invented. The quote button opens the visitor's email app; it is not a web form and does not collect information on the site.

## Services update
Flooring is not offered. Added home audio equipment installation, combined junk and yard waste removal (excluding items restricted by the receiving local waste centre). Confirm acceptance requirements with the receiving facility before taking waste.

## Service update
Basic automotive maintenance is listed as a by-request service (oil/filter changes, tire rotations and other straightforward maintenance), subject to vehicle suitability, safe working conditions and applicable requirements. No major mechanical repairs are advertised.


## Branding update
This version uses the original supplied white-background PhamWorks logo in the header, unchanged, and a photographic service collage without an AI-generated logo. The screenshot-style mockup is a design reference, not a pixel-perfect website.

## Compact homepage revision
Reduced excessive top and internal hero whitespace, tightened heading/button spacing, and brought the service photo collage higher into view. The original logo, six services, and quote links remain unchanged.

## New service photo gallery

The gallery displays six illustrative images cropped from the existing service collage. These are examples, not completed PhamWorks projects. Click or tap any photo to enlarge it; close with ×, Escape, or by clicking outside. To replace a photo later, replace its corresponding `assets/gallery-*.webp` file.


Update: The homepage horizontal collage now displays all six service photographs in full, rather than cutting them into narrow slices.


Update: Six distinct service photographs are shown in complete vertical panels, each labeled. On mobile, swipe horizontally to see the entire strip.


Update: Replaced sliced collage with six distinct service photographs. Responsive 6/3/2 card grid; each photo is also used in the enlarged gallery.


Gallery fix: Six replacement, independently framed images are included in assets/gallery-*.webp. Both homepage cards and gallery use the complete photographs without narrow slices.
