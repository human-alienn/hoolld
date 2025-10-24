# HOLD Website - Complete Image List

All images should be placed in the `/images` folder at the root of your Netlify deployment.

## Complete List of Image Files Needed:

1. **hold_logo.png** - Main HOLD logo used in multiple sections
2. **anndy_lian.png** - Anndy Lian profile image
3. **cz.png** - CZ (Binance CEO) profile image for "Who Accepted HOLD" section
4. **cz_orbital.png** - CZ (Binance CEO) profile image for "Orbital Quotes" section
5. **saylor.png** - Michael Saylor profile image
6. **binance_logo.png** - Binance logo
7. **vitalik.png** - Vitalik Buterin profile image
8. **masayoshi_son.png** - Masayoshi Son (SoftBank) profile image
9. **elon_musk.png** - Elon Musk profile image
10. **bruce_lee.png** - Bruce Lee profile image
11. **ronaldo.png** - Cristiano Ronaldo profile image
12. **jack_ma.png** - Jack Ma (Alibaba) profile image
13. **musashi.png** - Miyamoto Musashi profile image
14. **michael_jordan.png** - Michael Jordan profile image
15. **son_goku.png** - Son Goku (Dragon Ball) character image
16. **saitama.png** - Saitama (One Punch Man) character image
17. **socrates.png** - Socrates philosopher image
18. **confucius.png** - Confucius philosopher image
19. **leonardo.png** - Leonardo da Vinci image
20. **walt_disney.png** - Walt Disney profile image
21. **naruto.png** - Naruto Uzumaki character image
22. **neo.png** - Neo (The Matrix) character image

## Components Updated:

- ✅ HoldLogo.tsx
- ✅ OrbitalQuotes.tsx
- ✅ RoadmapEndTransition.tsx
- ✅ TheChoice.tsx
- ✅ TheRules.tsx
- ✅ WhoAcceptedHold.tsx

## Deployment Instructions:

1. Create an `/images` folder in your Netlify public directory
2. Place all 21 images listed above in that folder
3. Ensure all image filenames use underscores (_) not hyphens (-)
4. All image paths in the code now reference `/images/[filename].png`
5. Deploy to Netlify

## Note:
All image imports using `figma:asset/` have been replaced with direct paths to `/images/` folder for Netlify compatibility.
