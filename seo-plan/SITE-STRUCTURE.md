# Site Structure & Information Architecture — EcoEscape Mukteshwar

**Prepared:** 2026-06-04 · Template: Local Service / Hospitality

---

## 1. Current Architecture (as built)

```
/                                    Home — LodgingBusiness + Organization + WebSite schema
├── /about                           About the property
├── /experiences                     Experiences/activities
├── /gallery  ·  /gallery/:suite     Photo gallery (+ per-suite)
├── /workcation-mukteshwar           Commercial money-page (workcation) ✅ already a strong pattern
├── /rooms/
│   ├── /suite-with-mountain-view    Apartment schema, per-room meta + FAQ
│   ├── /spacious-apartment
│   ├── /family-room
│   └── /family-room-2
├── /blog                            Blog index
│   └── /blog/{76 posts}             Travel-guide hub (the moat)
├── /#booking                        Booking anchor (WhatsApp/Formspree)
└── Redirects: /contactus→/#booking, /tariffs→/rooms, /aboutus→/about
```

**Assessment:** Clean, shallow, crawlable hierarchy. The structure is good. Two structural weaknesses:
1. **No `/rooms` index page** — `/tariffs` redirects to `/rooms` but there's no canonical rooms hub listing all 4 units (good for "rooms/tariff/price" intent and internal linking).
2. **No "where to stay" / destination guide hub** — 76 blog posts exist but lack a top-level commercial funnel page that consolidates planning intent and routes to rooms + booking.

---

## 2. Target Architecture (proposed additions in **bold**)

```
/                                    Home
├── /about
├── /experiences
├── /gallery  ·  /gallery/:suite
│
├── /rooms                           ★ NEW: canonical rooms/tariff hub (ItemList schema, all 4 units + prices + direct-booking offer)
│   ├── /suite-with-mountain-view
│   ├── /spacious-apartment
│   ├── /family-room
│   └── /family-room-2
│
├── /stays/                          ★ NEW: commercial money-page cluster (USP long-tail → booking)
│   ├── /workcation-mukteshwar       (exists — relocate or keep + canonicalise; strengthen)
│   ├── /pet-friendly-stay-mukteshwar          ★ NEW
│   ├── /sunrise-view-stay-mukteshwar          ★ NEW
│   └── /family-safe-stay-mukteshwar           ★ NEW (CCTV/fenced/solo-female trust)
│
├── /dining                          ★ NEW: in-house Kumaoni restaurant money-page (Menu/Restaurant schema)
│
├── /where-to-stay-in-mukteshwar     ★ NEW: decision hub (by area / budget / view / trip-type) → funnels to /rooms
│
├── /blog                            Travel-guide hub (consolidated — see §3)
│   ├── Destination & planning
│   ├── Distances & routes
│   ├── Itineraries & trip-types
│   ├── Seasonal (month-by-month)
│   ├── Comparisons
│   ├── Food & culture
│   └── Outdoor & experiences
│
├── /reviews                         ★ NEW (optional): first-party reviews page (enables compliant Review/AggregateRating schema — see F1/F2)
└── /#booking                        Booking flow (sharpen — see IMPLEMENTATION-ROADMAP)
```

> **URL note:** Keep all existing slugs stable — do not migrate the 76 blog URLs. New money-pages can live under `/stays/` or at root; whichever is chosen, set canonicals and add to sitemap. If `/workcation-mukteshwar` is kept at root, leave it (avoid needless redirects); just ensure one canonical.

---

## 3. Blog Content Clusters (existing 76 posts, organised for internal linking)

The estate already maps to clean topical clusters (confirmed via `llms.txt`). Use these as **hub-and-spoke** groupings — each cluster should cross-link internally and up to its commercial money-page.

| Cluster | Example posts | Links up to (money-page) |
|---------|---------------|--------------------------|
| **Destination core** | mukteshwar-uttarakhand-travel-guide, things-to-do-in-mukteshwar, is-mukteshwar-worth-visiting | /where-to-stay-in-mukteshwar, /rooms |
| **Distances & routes** | delhi/nainital/kathgodam/pantnagar/bhimtal/lucknow/mumbai/bangalore → mukteshwar | /rooms, booking |
| **Itineraries & trip-types** | weekend, 3D2N, honeymoon, family, solo, group, workcation, romantic | matching /stays/* money-page |
| **Seasonal** | best-time, weather, temperature, snowfall, in-march/may/june/october | seasonal booking CTA |
| **Comparisons** | vs-nainital / mussoorie / shimla / almora-ranikhet / garhmukteshwar; resort-vs-homestay; airbnb-vs-direct | /where-to-stay, /rooms |
| **Food & culture** | kumaoni-food, cafes-restaurants, farm-to-table, festivals | **/dining** |
| **Outdoor & experiences** | trekking, bhalu-gaad, birdwatching, stargazing, photography, fruit-orchards | /experiences |
| **Stay/lodging informational** | best-homestays, best-resorts, budget, pet-friendly, sustainable, backpacker | /rooms, /stays/* |

### ⚠ Cannibalization clusters to resolve (Pillar D)
These overlap on intent and likely compete with each other — audit and consolidate/differentiate:
- **Weather/temperature:** `mukteshwar-weather-guide` ↔ `mukteshwar-temperature-today-and-monthly-guide` ↔ `best-time-to-visit-mukteshwar-guide` (3 posts, overlapping "weather/best time" intent).
- **Temple:** `mukteshwar-mahadev-temple-guide` ↔ `mukteshwar-mahadev-temple-history` ↔ `mukteshwar-mahadev-mandir-darshan-timings` (3 posts).
- **Things to do / places to visit:** `things-to-do-in-mukteshwar` ↔ `things-to-do-in-mukteshwar-beyond-temple` ↔ `offbeat-places-in-mukteshwar` ↔ `places-to-visit-near-mukteshwar-within-50km`.
- **Distances:** `mukteshwar-distance-from-major-cities` ↔ individual city-route posts (decide: pillar + spokes, with the pillar canonical for "distance from major cities").
- **Resorts/homestays listicles:** `best-resorts-in-mukteshwar` ↔ `best-homestays-in-mukteshwar-with-himalayan-views` ↔ `best-resorts-in-mukteshwar` — ensure distinct primary keywords.

**Resolution pattern per overlap:** pick one **primary** URL per intent → make it the canonical "pillar" → convert the others into **differentiated spokes** (narrower angle) that link up to the pillar, OR merge + 301 the weaker URL into the stronger.

---

## 4. Internal Linking Rules

1. **Every blog post** links to: (a) its cluster pillar, (b) the most relevant room, (c) `/where-to-stay-in-mukteshwar` or `/rooms`, (d) a contextual booking CTA.
2. **Money-pages** (`/stays/*`, `/dining`) link to supporting blog spokes and to `/rooms` + booking.
3. **Room pages** cross-link to the other 3 rooms, `/rooms` hub, `/dining`, and the most relevant trip-type money-page.
4. **Breadcrumbs** (`BreadcrumbList` schema) on all blog + room pages.
5. **Homepage** links to the rooms hub, where-to-stay hub, dining, and top 3–5 seasonal/itinerary posts (rotated by season).

---

## 5. Schema Map (target)

| Page | Primary schema | Add |
|------|---------------|-----|
| Home | `LodgingBusiness` + `Organization` + `WebSite` | Keep; fix `aggregateRating` (F1/F2) |
| /rooms (new hub) | `ItemList` of `Apartment` | `offers` per unit |
| /rooms/* | `Apartment`/`HotelRoom` | `offers`, `floorSize`, `occupancy`, `amenityFeature`, `FAQPage` |
| /dining (new) | `Restaurant` | `servesCuisine: Kumaoni`, `menu`, hours |
| /stays/* (new) | `WebPage` + `FAQPage` | breadcrumb |
| /where-to-stay (new) | `Article` + `ItemList` + `FAQPage` | breadcrumb |
| Blog posts | `BlogPosting`/`Article` + `BreadcrumbList` | `FAQPage` where Q&A exists |
| /reviews (optional) | `LodgingBusiness` w/ first-party `Review` + `AggregateRating` | only if reviews shown on-page |

---

## 6. Quality Gates (hospitality template)

- **No location-page sprawl:** This is a single-location property. Do **not** generate per-city "Mukteshwar homestay for {city} travellers" doorway pages — the existing origin-market posts (Delhi/Mumbai/Bangalore→Mukteshwar) are the right, content-rich approach. Hard stop on thin programmatic location pages.
- **Min content depth:** money-pages ≥ 800 words, 100% unique; blog spokes ≥ 600 words.
- **Index discipline:** every new URL must target a distinct primary keyword and link to a commercial page. Keep total indexed URLs growing slowly and deliberately (see SEO-STRATEGY KPI note).
