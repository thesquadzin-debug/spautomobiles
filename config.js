/* =====================================================================
   SP AUTOMOBILES - EDIT THIS FILE TO CHANGE YOUR WEBSITE CONTENT
   =====================================================================
   You do not need to touch index.html, style.css or script.js for
   normal changes. Edit the values below, save, and refresh the page.

   Rules to stay safe:
   - Keep the quotes "like this" around text.
   - Keep the commas at the end of each line.
   - Do not delete the { } [ ] brackets.
   ===================================================================== */

var SP = {

  /* ---------- 1. SHOP DETAILS (shown in header, contact and footer) ---------- */
  shop: {
    name: "SP Automobiles",
    tagline: "Hero motorcycles, scooters & Vida \u00b7 Sales, service & spares",
    phoneDisplay: "+91 00000 00000",      /* how the number looks on the page */
    whatsapp: "910000000000",             /* WhatsApp number: country code + number, no + or spaces. Example: 919876543210 */
    address: "Add your full address here",
    hours: "Mon\u2013Sat 9:30 AM \u2013 7:30 PM \u00b7 Sunday by appointment",
    hoursShort: "Mon\u2013Sat 9:30 AM \u2013 7:30 PM",
    priceNote: "Ex-showroom price: ask our team for today\u2019s offer"
  },

  /* ---------- 2. HERO SLIDER ---------- */
  slideSeconds: 4,                        /* seconds each slide stays on screen */
  /* Model names shown in the big slider. Must match a model name in section 5 exactly. */
  heroSlides: ["Xtreme 250R", "Xpulse 210", "Xoom 160", "Vida V2 Plus", "Splendor+ Xtec 2.0"],
  /* Glow colour behind each slide as "red green blue" (0-255). One per slide, same order. */
  slideColours: ["255 51 71", "255 140 40", "60 170 255", "60 220 180", "170 110 255"],

  /* ---------- 3. FILTER TABS above the model grid ---------- */
  /* Each tab name must also appear in a model's "groups" list in section 5. */
  tabs: ["New Launch", "100 CC", "125 CC", "Premium", "Scooters", "Electric"],

  /* ---------- 4. OPTIONS in the "I want to" dropdown of the enquiry form ---------- */
  requests: ["Book a test ride", "Get on-road price", "Exchange my old bike", "Book a service"],

  /* ---------- 5. MODELS ----------
     To ADD a model: copy one block { ... }, paste it below the last one, change the values.
     To REMOVE a model: delete its whole { ... }, block.
     name    : model name
     engine  : engine size, like "125 cc"  (for electric: "143 km range")
     torque  : like "10.5 nm @ 6500 rpm"   (or "8.5 kW @ 8250 rpm")
     type    : "bike" or "scooter"  (decides the drawing)
     groups  : which filter tabs it appears under (names from section 3)
     isNew   : true shows a NEW badge, false hides it
     about   : one short line of description
  */
  models: [
    { name:"Xtreme 250R", engine:"250 cc", torque:"25 nm @ 7250 rpm", type:"bike", groups:["New Launch", "Premium"], isNew:true,
      about:"4-stroke, 4-valve, single-cylinder, liquid-cooled DOHC." },
    { name:"Xtreme 160R 4V", engine:"163.2 cc", torque:"14.6 nm @ 6500 rpm", type:"bike", groups:["New Launch", "Premium"], isNew:true,
      about:"Air-oil cooled, single-cylinder OHC streetfighter." },
    { name:"Xpulse 210", engine:"210 cc", torque:"20.7 nm @ 7250 rpm", type:"bike", groups:["Premium"], isNew:false,
      about:"Liquid-cooled 4-valve adventure machine." },
    { name:"Karizma XMR", engine:"210 cc", torque:"20.4 nm @ 4000 rpm", type:"bike", groups:["Premium"], isNew:false,
      about:"Liquid-cooled, full-faired sport." },
    { name:"Xpulse 200 4V", engine:"199.6 cc", torque:"17.35 nm @ 6500 rpm", type:"bike", groups:["Premium"], isNew:false,
      about:"Oil-cooled 4-valve, ready for every road." },
    { name:"Xtreme 160R", engine:"163.2 cc", torque:"14 nm @ 6500 rpm", type:"bike", groups:["Premium"], isNew:false,
      about:"Air-cooled 4-stroke performance." },
    { name:"Harley-Davidson X440", engine:"440 cc", torque:"38 nm @ 4000 rpm", type:"bike", groups:["Premium"], isNew:false,
      about:"Air-cooled single, available via Hero Premia." },
    { name:"Glamour X ABS", engine:"125 cc", torque:"8.5 kW @ 8250 rpm", type:"bike", groups:["New Launch", "125 CC"], isNew:true,
      about:"Air-cooled 4-stroke 125 with ABS." },
    { name:"Glamour X", engine:"125 cc", torque:"10.5 nm @ 6500 rpm", type:"bike", groups:["125 CC"], isNew:false,
      about:"Stylish, refined everyday 125." },
    { name:"Xtreme 125R", engine:"125 cc", torque:"10.5 nm @ 6500 rpm", type:"bike", groups:["125 CC"], isNew:false,
      about:"0–60 km/h in 5.7 sec." },
    { name:"Glamour", engine:"125 cc", torque:"10.6 nm @ 6000 rpm", type:"bike", groups:["125 CC"], isNew:false,
      about:"Air-cooled single-cylinder OHC." },
    { name:"Super Splendor Xtec 2.0", engine:"124.7 cc", torque:"10.6 nm @ 6000 rpm", type:"bike", groups:["New Launch", "125 CC"], isNew:true,
      about:"2-valve, air-cooled, single-cylinder." },
    { name:"Super Splendor Xtec", engine:"124.7 cc", torque:"10.6 nm @ 6000 rpm", type:"bike", groups:["125 CC"], isNew:false,
      about:"Air-cooled 4-stroke OHC." },
    { name:"Splendor+ Xtec 2.0", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"India’s favourite commuter, upgraded." },
    { name:"Splendor+", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"Air-cooled, 4-stroke, single-cylinder OHC." },
    { name:"Splendor+ Xtec", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"Splendor+ with Xtec features." },
    { name:"HF Deluxe", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"Reliable, light and easy on the pocket." },
    { name:"HF 100", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"Simple, dependable entry commuter." },
    { name:"Passion+", engine:"97.2 cc", torque:"8.05 nm @ 6000 rpm", type:"bike", groups:["100 CC"], isNew:false,
      about:"New variant of the stylish commuter." },
    { name:"Splendor+ Flex", engine:"97.2 cc", torque:"8.3 nm (E85) @ 6000 rpm", type:"bike", groups:["New Launch", "100 CC"], isNew:true,
      about:"Flex-fuel Splendor+ for E85." },
    { name:"HF Deluxe Flex", engine:"97.2 cc", torque:"8.3 nm (E85) @ 6000 rpm", type:"bike", groups:["New Launch", "100 CC"], isNew:true,
      about:"Flex-fuel HF Deluxe for E85." },
    { name:"Xoom 160", engine:"156 cc", torque:"14 nm @ 6250 rpm", type:"scooter", groups:["New Launch", "Scooters"], isNew:true,
      about:"Liquid-cooled 4-valve SOHC maxi-style scooter." },
    { name:"Xoom 125", engine:"124.6 cc", torque:"10.4 nm @ 6000 rpm", type:"scooter", groups:["New Launch", "Scooters"], isNew:true,
      about:"Air-cooled, sporty 125 scooter." },
    { name:"Destini 110", engine:"110 cc", torque:"8.7 nm @ 5750 rpm", type:"scooter", groups:["New Launch", "Scooters"], isNew:true,
      about:"Air-cooled 4-stroke, smooth city scooter." },
    { name:"New Destini 125", engine:"125 cc", torque:"10.4 nm @ 5500 rpm", type:"scooter", groups:["Scooters"], isNew:false,
      about:"Premium-feel 125 scooter." },
    { name:"Destini Prime", engine:"124.6 cc", torque:"10.36 nm @ 5500 rpm", type:"scooter", groups:["Scooters"], isNew:false,
      about:"Air-cooled 4-stroke SI engine." },
    { name:"Xoom 110", engine:"110.9 cc", torque:"8.7 nm @ 5750 rpm", type:"scooter", groups:["Scooters"], isNew:false,
      about:"Light, peppy 110 scooter." },
    { name:"Pleasure+ Xtec", engine:"110.9 cc", torque:"8.7 nm @ 5500 rpm", type:"scooter", groups:["Scooters"], isNew:false,
      about:"Single-cylinder OHC with Xtec." },
    { name:"Vida V2 Plus", engine:"143 km range", torque:"6 kW peak power", type:"scooter", groups:["Electric"], isNew:false,
      about:"Vida electric scooter (IDC range)." },
  ]
};
