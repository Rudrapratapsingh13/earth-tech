# Earth Tech — Building Lifespan, Maintenance & Sustainable Construction Platform

**Earth Tech** is a modern, responsive web application for a climate-tech startup dedicated to infrastructure longevity, proactive asset maintenance, and low-carbon construction methods.

---

## 🌟 Key Features

### 1. Building Lifespan Estimator
* **Predictive Durability Modeling**: Calculates projected building service life in years based on ISO 15686 building lifecycle principles.
* **Multi-Factor Calibration**: Evaluates building classification (residential, commercial, institutional), structural material (Mass Timber CLT, Low-Carbon Geopolymer, Rammed Earth, Recycled Steel, Traditional Concrete), exterior facade envelope, and foundation type.
* **Climate Stress Factors**: Accounts for climate vulnerabilities like coastal marine salt fog/corrosion, severe freeze-thaw spalling, humid subtropical rot/mold, and high-UV desert thermal shock.
* **Proactive Maintenance Multiplier**: Demonstrates how predictive sensor-monitored maintenance can unlock +25% to +40% longer lifespans compared to reactive neglect.
* **Dynamic Results Gauge & Milestones**: Live SVG radial gauge, durability letter grade (A+ to D), embodied carbon reduction offset stat, and lifecycle intervention milestones (Year 15, 35, 60, 100+).

### 2. Smart Maintenance Schedule Planner
* **System Component Toggles**: Filter milestones by installed systems:
  * 🏠 Roofing & Waterproofing
  * 🧱 Envelope & Facades
  * 💨 HVAC & Heat Pumps
  * ☀️ Solar PV & Battery Storage
  * 💧 Plumbing & Rainwater Harvesting
  * 🏗️ Structural Frame & Foundation
* **Frequency & Priority Filter**: View tasks by Quarterly, Annual, 5-Year Capital, or High-Priority only.
* **Interactive Checklist & Progress Tracker**: Check off completed items to visualize maintenance compliance in real-time.
* **Print & Export**: One-click **Print / Save PDF** (with custom print-optimized styling) and **Export Data** (JSON payload with property profile and checklist status).

### 3. Sustainable Construction Explorer
* **Eco-Material Knowledge Base**: Interactive catalog of next-generation low-carbon construction technologies:
  * Cross-Laminated Timber (CLT) & Mass Timber
  * Low-Carbon Geopolymer Concrete
  * Rammed Earth & Compressed Stabilized Earth Blocks (CSEB)
  * Hempcrete & Lime Biocomposite
  * Living Vegetative Green Roofs
  * Recycled Electric Arc Furnace (EAF) Steel
  * Mycelium Thermal & Acoustic Panels
  * Shou Sugi Ban (Charred Timber) Cladding
  * Engineered Structural Bamboo Scrimber (Glubam)
  * Expanded Natural Cork Thermal Cladding
  * Modular Prefab Compressed Straw Panels
  * Bio-Reactive Solar Algae Glass Facades
* **Search & Filter**: Real-time keyword search and category filters (Structural, Insulation, Roofing, Circular).
* **Technical Spec Modals**: In-depth drawer for each material showing carbon reduction %, thermal R-values, fire performance ratings, and long-term maintenance guidelines.

### 4. Side-by-Side Comparison Matrix
* Direct comparison between conventional standard materials (Portland cement, virgin blast-furnace steel, fiberglass batts, asphalt shingles, synthetic PVC siding) and sustainable Earth Tech alternatives (Mass Timber CLT, Geopolymer concrete, Hempcrete, Green roofs, Rammed Earth, Expanded Cork).
* Visualizes differences in Embodied Carbon, Design Lifespan, Thermal Performance, Ongoing Upkeep, and Circularity.

### 5. Dark & White Mode Toggle (Theme Switcher)
* One-click theme switcher button in the top navigation header.
* Seamless transition between **Eco-Dark Mode** (deep charcoal green, emerald neon highlights, high contrast) and **White Light Mode**.
* Automatically detects system `prefers-color-scheme` and persists user preference in `localStorage`.

### 6. Google Sign-In & User Profile Management
* Authentic **Google Sign-In** button in the header.
* Interactive Google account selection dialog (quick accounts or custom credential entry).
* Profile widget displaying user avatar, name, and account dropdown with links to saved specs, active maintenance plans, and sign-out action.
* Persists authentication session locally across browser refreshes.

### 7. AI Building Maintenance Assistant
* Floating **AI Specialist FAB** and slide-out chat drawer.
* Provides instant, expert diagnostic answers for any building maintenance question (roof ponding leaks, timber moisture thresholds, freeze-thaw spalling, foundation settlement cracks, HVAC heat pump filter hygiene, solar PV inverter life, green roof sedum care, and budgeting).
* Features quick suggestion prompt chips, simulated natural typing indicator, and conversational history reset.

### 8. Beginner-Friendly Presets
* 1-click preset selector in the Hero section:
  * 🏡 **Suburban Eco-Home**
  * 🏢 **Mass Timber Office**
  * 🌿 **Rammed Earth Cabin**
* Instantly configures the calculator, jumps to results, and shows informative toast notifications.

---

## 📁 Project Structure

```
earth-tech/
├── index.html        # Main landing page, calculators, and interactive widgets
├── styles.css        # Responsive eco-tech styling, CSS variables, and print stylesheets
├── app.js            # Calculation engines, state management, modal handlers, and data
└── README.md         # Documentation & user guide
```

---

## 🚀 How to Run and View the Website

You can view the website directly in any web browser without needing to install complex dependencies:

### Option A: Open directly in your browser
Double-click `index.html` or open it with your browser of choice (Chrome, Edge, Firefox, Safari):
```powershell
Start-Process "C:\Users\PC\.gemini\antigravity\scratch\earth-tech\index.html"
```

### Option B: Local HTTP Server (Python / Node / Live Server)
If you prefer running a local development server:

```powershell
# Using Python
python -m http.server 8080 --directory "C:\Users\PC\.gemini\antigravity\scratch\earth-tech"

# Or using Node / npx
npx serve "C:\Users\PC\.gemini\antigravity\scratch\earth-tech"
```
Then navigate to `http://localhost:8080` in your browser.

---

## 🌿 Technical Highlights

* **Zero external dependencies**: Built using clean, modern, native HTML5, CSS3 (flexbox, grid, CSS custom properties), and vanilla ES6+ JavaScript.
* **Mobile-friendly & responsive**: Adapts seamlessly to smartphones, tablets, laptops, and ultra-wide displays.
* **Accessible design**: Semantic HTML landmarks, contrast ratios adhering to WCAG standards, and clear focus states.
* **Print-ready**: Dedicated `@media print` rules ensure maintenance schedules print cleanly without distracting web headers or footers.
