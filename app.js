/**
 * Earth Tech — Sustainable Infrastructure & Building Lifespan Intelligence
 * Core JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all application modules
  initThemeToggle();
  initGoogleAuth();
  initNavigation();
  initLifespanCalculator();
  initMaintenancePlanner();
  initMaterialsExplorer();
  initComparisonTool();
  initHeroPresets();
  initNewsletter();
  initAIAssistant();
});

/* ==========================================================================
   MODULE 1: DATA REPOSITORY & BENCHMARKS
   Based on ISO 15686, Circular Economy & Carbon LCA Benchmarks
   ========================================================================== */

const SUSTAINABLE_MATERIALS_DATA = [
  {
    id: 'mass-timber',
    name: 'Cross-Laminated Timber (CLT)',
    category: 'structural',
    categoryLabel: 'Structural Frame',
    carbonReduction: '-65%',
    lifespan: '80 – 120 Years',
    rValue: 'R-1.25 / inch (Inherent Thermal Mass)',
    fireRating: '2h+ Char-Layer Self-Insulation (IBC compliant)',
    costIndex: 'Moderate (offset by 30% faster build time)',
    summary: 'Engineered multi-layer timber panels providing structural strength rivaling concrete while sequestering atmospheric carbon directly inside the building envelope.',
    benefits: [
      'Carbon-negative when sourced from certified sustainably managed forests (PEFC/FSC).',
      'Charring mechanism protects core structural load capacity in fires.',
      'Prefabricated offsite with millimeter accuracy, reducing job-site waste by up to 75%.'
    ],
    maintenanceTip: 'Ensure robust roof flashing and moisture barriers during transport and erection. Keep end-grain sealed.'
  },
  {
    id: 'geopolymer-concrete',
    name: 'Low-Carbon Geopolymer Concrete',
    category: 'structural',
    categoryLabel: 'Structural Frame',
    carbonReduction: '-70%',
    lifespan: '100 – 150 Years',
    rValue: 'Similar to standard concrete',
    fireRating: 'Class A (Non-combustible, superior spalling resistance)',
    costIndex: 'Moderate to Competitive',
    summary: 'Synthesized using industrial byproducts (fly ash and blast-furnace slag) activated by alkali solutions, virtually eliminating Portland cement calcination emissions.',
    benefits: [
      'Immune to alkali-silica reaction (ASR) which causes premature cracking in traditional concrete.',
      'Exceptional resistance to sulfate and chloride attacks, perfect for marine and coastal structures.',
      'High early compressive strength and lower permeability.'
    ],
    maintenanceTip: 'Requires standard elastomeric sealants at control joints every 7-10 years. Minimal sub-grade degradation.'
  },
  {
    id: 'rammed-earth',
    name: 'Rammed Earth & Stabilized Blocks',
    category: 'structural',
    categoryLabel: 'Structural Frame',
    carbonReduction: '-80%',
    lifespan: '100+ Years',
    rValue: 'High thermal inertia (Passive solar heating/cooling)',
    fireRating: 'Class A (Non-combustible)',
    costIndex: 'Low material cost / Moderate labor',
    summary: 'Compacted mixtures of subsoil, aggregate, and minimal mineral binder. Creates breathable, ultra-durable thermal battery walls with minimal processing.',
    benefits: [
      'Outstanding acoustic dampening and natural indoor humidity buffering (keeps 40-60% RH).',
      'Ultra-low transportation carbon when local excavation soils are utilized.',
      'Non-toxic and 100% recyclable back into the landscape at end of life.'
    ],
    maintenanceTip: 'Provide deep roof overhangs ("good boots and a good hat") to shield exterior surfaces from driving monsoon rain.'
  },
  {
    id: 'hempcrete',
    name: 'Hempcrete & Lime Biocomposite',
    category: 'insulation',
    categoryLabel: 'Insulation & Envelope',
    carbonReduction: '-90% (Net Carbon Sink)',
    lifespan: '75 – 100 Years',
    rValue: 'R-2.4 to R-3.0 / inch',
    fireRating: 'Class B-s1,d0 (Naturally fire retardant via mineralized lime)',
    costIndex: 'Moderate',
    summary: 'A biocomposite of industrial hemp shiv and natural hydraulic lime. Provides monolithic vapor-permeable insulation that prevents mold and rot permanently.',
    benefits: [
      'Locks away approximately 110 kg of CO₂ per cubic meter throughout its lifecycle.',
      'Vapor-permeable "breathable" envelope avoids internal condensation and sick building syndrome.',
      'Immune to rodent nesting, termites, and fungal growth without chemical pesticides.'
    ],
    maintenanceTip: 'Finish with mineral silicate or breathable lime render. Never seal with petrochemical acrylic paints.'
  },
  {
    id: 'green-roof',
    name: 'Living Vegetative Green Roof',
    category: 'roofing',
    categoryLabel: 'Roofing & Microclimate',
    carbonReduction: '-35% (Operational Energy)',
    lifespan: '40 – 60 Years (2x Asphalt lifespan)',
    rValue: 'Adds R-15 to R-30 dynamic insulation',
    fireRating: 'Class A when maintained with proper hydration',
    costIndex: 'Higher upfront / High 20-yr ROI',
    summary: 'Engineered sedum and perennial vegetative layer that protects the underlying waterproof membrane from UV degradation, thermal shock, and stormwater surges.',
    benefits: [
      'Doubles or triples underlying waterproof membrane lifespan by preventing UV cracking.',
      'Absorbs up to 70-90% of stormwater runoff, easing pressure on municipal sewer grids.',
      'Lowers building surface temperature by up to 25°C, mitigating the urban heat island effect.'
    ],
    maintenanceTip: 'Inspect perimeter gravel borders and drainage drains bi-annually. Weed invasive taproot species once per spring.'
  },
  {
    id: 'recycled-steel',
    name: 'Electric Arc Furnace (EAF) Recycled Steel',
    category: 'circular',
    categoryLabel: 'Circular & Recycled',
    carbonReduction: '-55% to -75%',
    lifespan: '90 – 120 Years',
    rValue: 'Requires thermal break insulation',
    fireRating: 'Requires intumescent coating for 2h rating',
    costIndex: 'Competitive with virgin steel',
    summary: 'Structural beams and framing manufactured with up to 98% recycled scrap steel in electric arc furnaces powered by renewable electrical grids.',
    benefits: [
      'Maintains 100% of metallurgical structural strength indefinitely through infinite recycling cycles.',
      'High strength-to-weight ratio allows longer spans and lighter foundations.',
      'Designed for bolted deconstruction and future reuse in circular architecture.'
    ],
    maintenanceTip: 'Apply high-durability epoxy zinc primer or hot-dip galvanization in marine exposures. Inspect bolted connections at 10-year intervals.'
  },
  {
    id: 'mycelium-panels',
    name: 'Mycelium Acoustic & Thermal Boards',
    category: 'insulation',
    categoryLabel: 'Insulation & Envelope',
    carbonReduction: '-85%',
    lifespan: '30 – 50 Years',
    rValue: 'R-3.5 / inch',
    fireRating: 'Class A (Naturally self-extinguishing)',
    costIndex: 'Emerging / Rapidly decreasing',
    summary: 'Grown from fungal root networks fed on agricultural crop residue (straw, sawdust, hemp stalks). Grown in days without petroleum resins.',
    benefits: [
      'Replaces toxic polyurethane (PU) and expanded polystyrene (EPS) foam boards.',
      'Zero volatile organic compound (VOC) emissions for superior indoor air quality.',
      '100% compostable at building end-of-life.'
    ],
    maintenanceTip: 'Install within dry interior cavity walls or protected rain-screen assemblies. Protect from continuous liquid water pooling.'
  },
  {
    id: 'charred-timber',
    name: 'Shou Sugi Ban (Yakisugi) Facade',
    category: 'insulation',
    categoryLabel: 'Insulation & Envelope',
    carbonReduction: '-60%',
    lifespan: '60 – 80 Years without chemical sealants',
    rValue: 'R-1.1 / inch',
    fireRating: 'Increased surface ignition resistance',
    costIndex: 'Moderate',
    summary: 'Traditional Japanese technique of surface charring timber cladding. Creates a carbonized, weather-resistant layer that naturally repels insects, water, and fungal decay.',
    benefits: [
      'Eliminates the need for synthetic chemical paints, petroleum stains, or biocides.',
      'Deep matte, aesthetic dark patina that patinates gracefully across decades.',
      'Outstanding natural resilience against UV fading and wind-driven rain.'
    ],
    maintenanceTip: 'Occasional natural tung or linseed oil reapplication every 10-15 years, or leave to weather naturally.'
  },
  {
    id: 'bamboo-scrimber',
    name: 'Engineered Bamboo Scrimber (Glubam)',
    category: 'structural',
    categoryLabel: 'Structural Frame',
    carbonReduction: '-75% (Rapid Carbon Sink)',
    lifespan: '70 – 100 Years',
    rValue: 'R-1.4 / inch',
    fireRating: 'Class B (Treated Class A available)',
    costIndex: 'Competitive with Hardwoods',
    summary: 'High-density structural timber substitute formed from compressed bamboo fibers. Reaches maturity in just 3-5 years compared to 40+ years for traditional forestry trees.',
    benefits: [
      'Fastest growing woody plant on earth with unprecedented biogenic carbon capture speed.',
      'Tensile and compressive strength matching or exceeding structural grade oak and mild steel.',
      'Highly dimensionally stable under cyclical atmospheric moisture swings.'
    ],
    maintenanceTip: 'Apply UV-inhibiting hydrophobic natural stain on exposed elements every 5-7 years.'
  },
  {
    id: 'cork-facade',
    name: 'Expanded Natural Cork Thermal Cladding',
    category: 'insulation',
    categoryLabel: 'Insulation & Envelope',
    carbonReduction: '-85% (100% Tree-Safe Harvest)',
    lifespan: '50 – 75 Years',
    rValue: 'R-3.6 to R-4.0 / inch',
    fireRating: 'Class B-s1,d0 (Naturally fire retardant suberin)',
    costIndex: 'Moderate to Premium',
    summary: 'Manufactured by steam-expanding pure cork granules without petrochemical adhesives. Suberin resin binds the boards while providing impenetrable cellular moisture resistance.',
    benefits: [
      'Harvested solely from oak tree bark without felling a single tree; bark regenerates every 9 years.',
      'Exceptional acoustic damping (reduces impact and airborne noise up to 32 dB).',
      'Naturally hydrophobic, rot-proof, and insect-repellent.'
    ],
    maintenanceTip: 'Inspect perimeter expansion joints and stainless steel wall brackets during annual facade checkups.'
  },
  {
    id: 'straw-bale',
    name: 'Modular Prefab Compressed Straw Panels',
    category: 'insulation',
    categoryLabel: 'Insulation & Envelope',
    carbonReduction: '-95% (Agricultural Biomass)',
    lifespan: '80 – 100+ Years',
    rValue: 'R-28 to R-35 per wall assembly',
    fireRating: '2h+ Fire Endurance (Dense lack of oxygen inside panels)',
    costIndex: 'Low Material Cost / High Efficiency',
    summary: 'Densely compressed agricultural byproduct straw encapsulated in timber cassettes. Delivers Passive House thermal envelopes while upcycling post-harvest stubble.',
    benefits: [
      'Eliminates open-field agricultural stubble burning, significantly improving regional air quality.',
      'Super-insulated envelope reduces space heating/cooling energy consumption by up to 80%.',
      'Breathable dynamic vapor diffusion prevents interstitial rot.'
    ],
    maintenanceTip: 'Ensure exterior lime render is intact; never puncture interior vapor control membrane without resealing.'
  },
  {
    id: 'algae-bioreactor',
    name: 'Bio-Reactive Solar Algae Glass Facade',
    category: 'roofing',
    categoryLabel: 'Roofing & Microclimate',
    carbonReduction: '-50% (Dynamic Carbon Capture & Solar Thermal)',
    lifespan: '30 – 45 Years',
    rValue: 'Dynamic Solar Heat Gain (SHGC 0.15 - 0.45)',
    fireRating: 'Class A (Non-combustible double glass)',
    costIndex: 'Cutting-Edge / High Long-Term Return',
    summary: 'Integrated secondary facade glass panels cultivating microalgae in liquid culture. Provides dynamic daylight shading, absorbs active CO₂, and harvests solar thermal energy.',
    benefits: [
      'Captures up to 8 kg of CO₂ per square meter of facade annually through photosynthesis.',
      'Harvests excess solar heat into hot water loops, reducing facility heating demand.',
      'Cultivated biomass is periodically harvested for bio-fertilizers or green fuels.'
    ],
    maintenanceTip: 'Automated nutrient dosing and periodic peristaltic pump fluid circulator inspection every 6 months.'
  }
];

const COMPARISON_DATA = {
  traditional: {
    'trad-concrete': {
      name: 'Standard Portland Concrete',
      carbon: '350 – 420 kg CO₂e / m³',
      lifespan: '50 – 70 Years',
      energyImpact: 'High embodied energy (clinker calcination at 1450°C)',
      maintenanceNeeds: 'Prone to carbonation-induced rebar corrosion and spalling; repairs every 15-20 yrs',
      circularity: 'Downcycled into low-grade road base; difficult to reuse'
    },
    'trad-steel': {
      name: 'Virgin Blast Furnace Steel',
      carbon: '1,800 – 2,200 kg CO₂e / ton',
      lifespan: '60 – 80 Years',
      energyImpact: 'High coal/coke dependency in blast furnaces',
      maintenanceNeeds: 'Requires recurring corrosion repainting and thermal break mitigation',
      circularity: 'Recyclable, but high energy remelting required'
    },
    'trad-fiberglass': {
      name: 'Petrochemical Fiberglass Batts',
      carbon: 'Moderate to High (Energy-dense glass melting & binders)',
      lifespan: '20 – 30 Years',
      energyImpact: 'Prone to sagging and thermal bridging if moisture is present',
      maintenanceNeeds: 'Loses R-value if exposed to moisture; irritating microfibers during replacement',
      circularity: 'Landfill bound at renovation; non-biodegradable'
    },
    'trad-asphalt': {
      name: 'Petroleum Asphalt Shingles',
      carbon: 'High hydrocarbon footprint',
      lifespan: '15 – 22 Years',
      energyImpact: 'Absorbs extreme heat (roof surface reaches 70°C in summer)',
      maintenanceNeeds: 'Frequent granule loss, thermal shock cracking, wind blow-off',
      circularity: 'Generates 11+ million tons of non-recyclable landfill waste annually in the US alone'
    },
    'trad-pvc': {
      name: 'Synthetic PVC Siding & Trim Cladding',
      carbon: '2,800 – 3,500 kg CO₂e / ton (Petrochemical chlorine synthesis)',
      lifespan: '20 – 35 Years',
      energyImpact: 'Emits hazardous dioxins in manufacturing; brittle under intense UV exposure',
      maintenanceNeeds: 'Prone to cracking in sub-zero freeze cycles; discoloration requiring specialized chemical wash',
      circularity: 'Extremely poor recyclability; hazardous landfill leachate risks'
    }
  },
  sustainable: {
    'sust-timber': {
      name: 'Mass Timber / Cross-Laminated Timber (CLT)',
      carbon: '-450 to -600 kg CO₂e / m³ (Net Carbon Negative Storage)',
      lifespan: '80 – 120+ Years',
      energyImpact: 'Low processing energy; superior natural envelope thermal mass',
      maintenanceNeeds: 'Stable if moisture control is maintained; simple localized repairs',
      circularity: '100% deconstructable, reusable beams or biomass at end-of-life'
    },
    'sust-geopolymer': {
      name: 'Low-Carbon Geopolymer Concrete',
      carbon: '90 – 130 kg CO₂e / m³ (Up to 70% reduction)',
      lifespan: '100 – 150 Years',
      energyImpact: 'Utilizes ambient or mild thermal curing with zero clinker kiln burning',
      maintenanceNeeds: 'Resistant to chloride corrosion; substantially lower rebar degradation',
      circularity: 'Higher durability enables multiple century service before recycling'
    },
    'sust-hempcrete': {
      name: 'Hempcrete & Bio-Composite Insulation',
      carbon: '-110 kg CO₂e / m³ (Sequesters atmospheric carbon)',
      lifespan: '75 – 100 Years',
      energyImpact: 'Passive humidity buffering saves 30% HVAC energy',
      maintenanceNeeds: 'Zero rot or insect degradation; maintenance-free inside breathable walls',
      circularity: 'Cradle-to-cradle compostable and soil conditioning'
    },
    'sust-greenroof': {
      name: 'Extensive Living Bio-Solar Green Roof',
      carbon: 'Net Carbon Sequestering + Urban Cooling',
      lifespan: '45 – 60 Years (Doubles waterproofing life)',
      energyImpact: 'Cuts summer peak air conditioning demand by up to 40%',
      maintenanceNeeds: 'Bi-annual seasonal drain clearance & weeding; self-regenerating sedums',
      circularity: 'Organic growth medium, reusable drainage mats, high biodiversity support'
    },
    'sust-rammedearth': {
      name: 'Rammed Earth & Compressed Earth Blocks',
      carbon: '30 – 60 kg CO₂e / m³ (80-90% lower than concrete)',
      lifespan: '100 – 200+ Years',
      energyImpact: 'Superb thermal inertia minimizes diurnal temperature swings naturally',
      maintenanceNeeds: 'Minimal ongoing upkeep when sheltered with adequate eaves and good drainage',
      circularity: '100% cradle-to-cradle recyclable back into natural non-toxic soil'
    },
    'sust-cork': {
      name: 'Expanded Natural Pure Cork Cladding',
      carbon: '-130 kg CO₂e / m³ (Carbon negative tree bark harvest)',
      lifespan: '50 – 75 Years',
      energyImpact: 'R-3.8 / inch provides outstanding continuous insulation and acoustic noise buffering',
      maintenanceNeeds: 'Suberin resin naturally repels water and insects; virtually maintenance-free',
      circularity: 'Fully biodegradable and recyclable into high-performance acoustic mats'
    }
  }
};

const MAINTENANCE_TASKS_DATABASE = [
  {
    id: 'task-roof-1',
    system: 'sysRoof',
    title: 'Clean Stormwater Roof Drains & Inspect Scuppers',
    frequency: 'quarterly',
    frequencyLabel: 'Quarterly',
    priority: 'critical',
    priorityLabel: 'Critical Safety',
    cost: 'Low ($100 - $300)',
    description: 'Clear debris, sediment, and organic matter from roof gullies to prevent ponding water and structural dead-load surges.',
    systemName: 'Roofing'
  },
  {
    id: 'task-roof-2',
    system: 'sysRoof',
    title: 'Infrared Thermographic Moisture Scan of Roof Membrane',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'preventative',
    priorityLabel: 'Preventative',
    cost: 'Moderate ($400 - $800)',
    description: 'Detect sub-membrane moisture traps before water penetrates structural insulation or timber/concrete decking.',
    systemName: 'Roofing'
  },
  {
    id: 'task-roof-3',
    system: 'sysRoof',
    title: 'Parapet Flashing & Counter-Flashing Elasticity Reseal',
    frequency: '5year',
    frequencyLabel: '5-Year Capital',
    priority: 'preventative',
    priorityLabel: 'Capital Upkeep',
    cost: 'Moderate ($1,200 - $2,500)',
    description: 'Renew degraded silicone or polyurethane sealants at parapet caps, penetrations, and mechanical curbs.',
    systemName: 'Roofing'
  },
  {
    id: 'task-env-1',
    system: 'sysEnvelope',
    title: 'Exterior Cladding & Rain-Screen Weep Hole Clearance',
    frequency: 'quarterly',
    frequencyLabel: 'Quarterly',
    priority: 'preventative',
    priorityLabel: 'Preventative',
    cost: 'Low ($50 - $150)',
    description: 'Ensure bottom ventilation tracks and insect screens in rain-screens remain unobstructed for cavity drainage.',
    systemName: 'Building Envelope'
  },
  {
    id: 'task-env-2',
    system: 'sysEnvelope',
    title: 'Facade Movement Joint & Window Perimeter Sealant Audit',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'critical',
    priorityLabel: 'High Priority',
    cost: 'Moderate ($300 - $700)',
    description: 'Inspect expansion joints for adhesion loss or ultraviolet brittleness to prevent moisture ingress into wall cavities.',
    systemName: 'Building Envelope'
  },
  {
    id: 'task-env-3',
    system: 'sysEnvelope',
    title: 'Breathable Mineral Silicate Coating Reapplication',
    frequency: '5year',
    frequencyLabel: '5-Year Capital',
    priority: 'preventative',
    priorityLabel: 'Capital Upkeep',
    cost: 'Substantial ($3,000 - $7,000)',
    description: 'Reapply breathable, vapor-permeable mineral or bio-oil protection to exposed wood siding or lime/rammed earth renders.',
    systemName: 'Building Envelope'
  },
  {
    id: 'task-hvac-1',
    system: 'sysHvac',
    title: 'MERV-13 / HEPA Filter Replacement & Heat Exchanger Wash',
    frequency: 'quarterly',
    frequencyLabel: 'Quarterly',
    priority: 'preventative',
    priorityLabel: 'Efficiency',
    cost: 'Low ($80 - $200)',
    description: 'Maintains optimal airflow, protects heat recovery ventilator (HRV/ERV) cores, and preserves 99% indoor air purity.',
    systemName: 'HVAC'
  },
  {
    id: 'task-hvac-2',
    system: 'sysHvac',
    title: 'Heat Pump Refrigerant Charge & Compressor Harmonic Testing',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'critical',
    priorityLabel: 'High Priority',
    cost: 'Moderate ($250 - $600)',
    description: 'Verify thermodynamic COP (Coefficient of Performance), leak check eco-refrigerants, and lubricate variable-speed fan motors.',
    systemName: 'HVAC'
  },
  {
    id: 'task-solar-1',
    system: 'sysSolar',
    title: 'Solar PV Module Soiling Wash & Hot-Spot Thermal Check',
    frequency: 'quarterly',
    frequencyLabel: 'Quarterly',
    priority: 'preventative',
    priorityLabel: 'Efficiency',
    cost: 'Low ($100 - $250)',
    description: 'Wash pollen/dust accumulation to recover 6-12% suppressed energy yield; inspect for micro-cracks using handheld IR.',
    systemName: 'Solar PV'
  },
  {
    id: 'task-solar-2',
    system: 'sysSolar',
    title: 'Hybrid Inverter Diagnostic & Rapid Shutdown Benchmarking',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'critical',
    priorityLabel: 'Critical Safety',
    cost: 'Moderate ($200 - $450)',
    description: 'Test arc-fault detection (AFCI), ground fault interrupters, and battery BMS state-of-health degradation curve.',
    systemName: 'Solar PV'
  },
  {
    id: 'task-plumb-1',
    system: 'sysPlumbing',
    title: 'Rainwater Cistern Pre-Filter Flush & UV Sterilizer Lamp Check',
    frequency: 'quarterly',
    frequencyLabel: 'Quarterly',
    priority: 'preventative',
    priorityLabel: 'Preventative',
    cost: 'Low ($60 - $180)',
    description: 'Backwash vortex sediment filters and replace UV-C purification lamp to guarantee potable/irrigation quality.',
    systemName: 'Plumbing'
  },
  {
    id: 'task-plumb-2',
    system: 'sysPlumbing',
    title: 'Backflow Preventer Testing & Pressure Relief Valve Calibrate',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'critical',
    priorityLabel: 'Critical Safety',
    cost: 'Moderate ($180 - $350)',
    description: 'Mandatory annual certification of backflow assemblies to protect potable municipal or well supplies.',
    systemName: 'Plumbing'
  },
  {
    id: 'task-struct-1',
    system: 'sysStructure',
    title: 'Foundation Perimeter Settlement & Crack Gauge Benchmark',
    frequency: 'annual',
    frequencyLabel: 'Annual',
    priority: 'critical',
    priorityLabel: 'Structural Audit',
    cost: 'Moderate ($350 - $700)',
    description: 'Monitor telltale crack monitors across foundation stem walls and slab joints to verify ground stability.',
    systemName: 'Structural'
  },
  {
    id: 'task-struct-2',
    system: 'sysStructure',
    title: 'Timber Moisture Sensor Telemetry / Rebar Cover Depth Audit',
    frequency: '5year',
    frequencyLabel: '5-Year Capital',
    priority: 'critical',
    priorityLabel: 'Structural Audit',
    cost: 'Substantial ($1,500 - $3,500)',
    description: 'Inspect embedded timber equilibrium moisture content (must stay below 16%) and check concrete carbonation depth.',
    systemName: 'Structural'
  }
];

/* ==========================================================================
   MODULE 2: NAVIGATION & MOBILE MENU
   ========================================================================== */

function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // Smooth active highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('text-accent');
        } else {
          targetNav.classList.remove('text-accent');
        }
      }
    });
  });
}

/* ==========================================================================
   MODULE 3: BUILDING LIFESPAN CALCULATOR ENGINE
   ========================================================================== */

function initLifespanCalculator() {
  const form = document.getElementById('lifespanForm');
  const recalcBtn = document.getElementById('recalcBtn');
  const ageSlider = document.getElementById('buildingAge');
  const ageDisplay = document.getElementById('ageDisplay');
  const goalSlider = document.getElementById('targetGoal');
  const goalDisplay = document.getElementById('goalDisplay');

  if (ageSlider && ageDisplay) {
    ageSlider.addEventListener('input', (e) => {
      ageDisplay.textContent = e.target.value;
      calculateLifespan();
    });
  }

  if (goalSlider && goalDisplay) {
    goalSlider.addEventListener('input', (e) => {
      goalDisplay.textContent = e.target.value;
      calculateLifespan();
    });
  }

  // Trigger calculation on select change
  const selects = form.querySelectorAll('select');
  selects.forEach(sel => {
    sel.addEventListener('change', calculateLifespan);
  });

  if (recalcBtn) {
    recalcBtn.addEventListener('click', () => {
      calculateLifespan();
      showToast('Lifespan model recalculated successfully.');
    });
  }

  // Initial calculation
  calculateLifespan();
}

function calculateLifespan() {
  const bldgType = document.getElementById('buildingType').value;
  const structMat = document.getElementById('structuralMaterial').value;
  const envelope = document.getElementById('envelopeType').value;
  const climate = document.getElementById('climateZone').value;
  const foundation = document.getElementById('foundationType')?.value || 'low-carbon-slab';
  const strategy = document.getElementById('maintenanceStrategy').value;
  const age = parseInt(document.getElementById('buildingAge').value, 10) || 0;
  const goal = parseInt(document.getElementById('targetGoal').value, 10) || 75;

  // 1. Baseline Durability and Carbon by Structure
  let baseYears = 70;
  let structCarbon = -30;

  switch (structMat) {
    case 'mass-timber':
      baseYears = 95;
      structCarbon = -65;
      break;
    case 'low-carbon-concrete':
      baseYears = 105;
      structCarbon = -50;
      break;
    case 'traditional-concrete':
      baseYears = 65;
      structCarbon = 0;
      break;
    case 'recycled-steel':
      baseYears = 85;
      structCarbon = -40;
      break;
    case 'rammed-earth':
      baseYears = 110;
      structCarbon = -80;
      break;
    case 'light-timber':
      baseYears = 55;
      structCarbon = -35;
      break;
  }

  // 2. Building Usage Factor
  let usageMultiplier = 1.0;
  if (bldgType === 'residential-single') usageMultiplier = 1.05;
  if (bldgType === 'commercial-office') usageMultiplier = 0.95;
  if (bldgType === 'industrial') usageMultiplier = 0.88;
  if (bldgType === 'institutional') usageMultiplier = 1.15; // Built for generations

  // 3. Envelope Impact
  let envelopeBonus = 0;
  let envelopeCarbon = 0;
  if (envelope === 'brick-masonry') { envelopeBonus = +12; envelopeCarbon = -4; }
  if (envelope === 'charred-timber') { envelopeBonus = +10; envelopeCarbon = -8; }
  if (envelope === 'fiber-cement') { envelopeBonus = +6; envelopeCarbon = -4; }
  if (envelope === 'curtain-wall') { envelopeBonus = +2; envelopeCarbon = -2; }
  if (envelope === 'eifs-stucco') { envelopeBonus = -4; envelopeCarbon = +3; }

  // 4. Foundation System Impact
  let foundationBonus = 0;
  let foundationCarbon = 0;
  if (foundation === 'low-carbon-slab') { foundationBonus = +6; foundationCarbon = -8; }
  if (foundation === 'stone-lime') { foundationBonus = +12; foundationCarbon = -15; }
  if (foundation === 'deep-piles') { foundationBonus = +10; foundationCarbon = -2; }
  if (foundation === 'standard-concrete-slab') { foundationBonus = 0; foundationCarbon = 0; }

  // 5. Climate Degradation Stress
  let climateFactor = 1.0;
  let advisoryText = '';
  let advisoryTitle = '';

  switch (climate) {
    case 'temperate':
      climateFactor = 1.05;
      advisoryTitle = 'Climate Context: Temperate (Low Stress)';
      advisoryText = 'Favorable weather conditions with moderate thermal cycling. Focus standard attention on roof flashing and winter drainage.';
      break;
    case 'coastal':
      climateFactor = 0.82;
      advisoryTitle = 'Climate Vulnerability: Marine Salt Fog & Chloride Ingress';
      advisoryText = 'Chloride ions penetrate unsealed concrete or fasteners, triggering rust jacking. Recommendation: Specify marine grade 316 stainless connectors and silane water repellents.';
      break;
    case 'freeze-thaw':
      climateFactor = 0.85;
      advisoryTitle = 'Climate Vulnerability: Severe Freeze-Thaw Thermal Shock';
      advisoryText = 'Trapped moisture expands 9% upon freezing, causing spalling in low-grade masonry or exposed concrete. Recommendation: Maintain breathable hydrophobic envelope coats.';
      break;
    case 'humid-tropical':
      climateFactor = 0.88;
      advisoryTitle = 'Climate Vulnerability: High Humidity & Mold/Fungal Pressure';
      advisoryText = 'Elevated ambient moisture accelerates wood rot and degrades synthetic sealants. Recommendation: Install continuous ventilated rain-screen cavities and bio-resistant timber.';
      break;
    case 'arid':
      climateFactor = 0.92;
      advisoryTitle = 'Climate Vulnerability: Extreme UV Radiation & Diurnal Thermal Shock';
      advisoryText = 'Substantial day-to-night temperature swings stress elastomeric joints, while intense UV degrades sealants. Recommendation: Use silicone-based sealants with high UV inhibitors.';
      break;
  }

  // 6. Maintenance Strategy Multiplier
  let maintMultiplier = 1.0;
  if (strategy === 'proactive-smart') maintMultiplier = 1.25;
  if (strategy === 'standard-routine') maintMultiplier = 1.0;
  if (strategy === 'reactive-minimal') maintMultiplier = 0.68;

  // Composite Calculation
  let calculatedYears = Math.round((baseYears * usageMultiplier + envelopeBonus + foundationBonus) * climateFactor * maintMultiplier);

  // Bounds
  if (calculatedYears < 30) calculatedYears = 30;
  if (calculatedYears > 165) calculatedYears = 165;

  const remaining = Math.max(0, calculatedYears - age);

  // Dynamic Embodied Carbon Offset
  let netCarbon = structCarbon + envelopeCarbon + foundationCarbon;
  if (netCarbon < -90) netCarbon = -90;
  const carbonOffset = netCarbon === 0 ? '0% (Baseline)' : `${netCarbon}% vs. Standard`;

  // Determine Durability Grade
  let grade = 'B';
  let gradeClass = 'grade-b';
  if (calculatedYears >= 105) {
    grade = 'A+';
    gradeClass = 'grade-a';
  } else if (calculatedYears >= 85) {
    grade = 'A';
    gradeClass = 'grade-a';
  } else if (calculatedYears >= 65) {
    grade = 'B';
    gradeClass = 'grade-b';
  } else if (calculatedYears >= 50) {
    grade = 'C';
    gradeClass = 'grade-c';
  } else {
    grade = 'D';
    gradeClass = 'grade-d';
  }

  // Update UI Elements
  const estimatedYearsEl = document.getElementById('estimatedYears');
  const remainingYearsEl = document.getElementById('remainingYears');
  const durabilityGradeEl = document.getElementById('durabilityGrade');
  const carbonOffsetStat = document.getElementById('carbonOffsetStat');
  const goalAlignmentText = document.getElementById('goalAlignmentText');
  const gaugeProgress = document.getElementById('gaugeProgress');

  if (estimatedYearsEl) estimatedYearsEl.textContent = calculatedYears;
  if (remainingYearsEl) remainingYearsEl.textContent = `${remaining} years remaining`;
  if (carbonOffsetStat) carbonOffsetStat.textContent = `${carbonOffset}`;

  if (durabilityGradeEl) {
    durabilityGradeEl.textContent = grade;
    durabilityGradeEl.className = `metric-badge ${gradeClass}`;
  }

  if (goalAlignmentText) {
    const diff = calculatedYears - goal;
    if (diff >= 0) {
      goalAlignmentText.innerHTML = `<span class="text-success">Exceeds Goal (+${diff} yrs)</span>`;
    } else {
      goalAlignmentText.innerHTML = `<span style="color: #dc2626;">Under Goal (${diff} yrs)</span>`;
    }
  }

  // Update SVG Gauge Ring (circumference = 2 * PI * 50 = 314.15)
  if (gaugeProgress) {
    const maxScale = 150;
    const ratio = Math.min(1, Math.max(0, calculatedYears / maxScale));
    const offset = 314.15 * (1 - ratio);
    gaugeProgress.style.strokeDashoffset = offset;
    
    // Color gauge fill based on score
    if (calculatedYears >= 85) {
      gaugeProgress.style.stroke = '#2d6a4f';
    } else if (calculatedYears >= 65) {
      gaugeProgress.style.stroke = '#0284c7';
    } else {
      gaugeProgress.style.stroke = '#d97706';
    }
  }

  // Render Risk Advisory
  const advisoryTitleEl = document.getElementById('advisoryTitle');
  const advisoryTextEl = document.getElementById('advisoryText');
  if (advisoryTitleEl) advisoryTitleEl.textContent = advisoryTitle;
  if (advisoryTextEl) advisoryTextEl.textContent = advisoryText;

  // Render Milestones
  renderMilestones(calculatedYears, age);

  // Render Eco Opportunities
  renderEcoRecommendations(structMat, envelope, foundation, strategy, calculatedYears);
}

function renderMilestones(totalYears, currentAge) {
  const container = document.getElementById('milestoneTimeline');
  if (!container) return;

  const m1 = Math.round(totalYears * 0.15);
  const m2 = Math.round(totalYears * 0.35);
  const m3 = Math.round(totalYears * 0.60);
  const m4 = totalYears;

  const milestones = [
    {
      year: `Yr ${m1}`,
      desc: 'First envelope seal audit, elastomeric window joint renewal, and HVAC heat-exchanger recalibration.'
    },
    {
      year: `Yr ${m2}`,
      desc: 'Major mechanical replacement (inverters/heat pump compressors) & deep roof membrane warranty inspection.'
    },
    {
      year: `Yr ${m3}`,
      desc: 'Deep decarbonization retrofit, secondary facade refresh, and structural fastener non-destructive evaluation.'
    },
    {
      year: `Yr ${m4}+`,
      desc: 'Building reaches baseline design threshold. With active preservation, adaptable for 50+ year circular life extension.'
    }
  ];

  container.innerHTML = milestones.map(m => `
    <div class="milestone-item">
      <span class="milestone-year">${m.year}</span>
      <span class="milestone-detail">${m.desc}</span>
    </div>
  `).join('');
}

function renderEcoRecommendations(structMat, envelope, foundation, strategy, calculatedYears) {
  const listEl = document.getElementById('enhancementList');
  if (!listEl) return;

  const recs = [];

  if (structMat !== 'mass-timber' && structMat !== 'rammed-earth') {
    recs.push('Switching structural frame to Mass Timber / CLT could store ~45 tons of biogenic CO₂ and boost longevity.');
  } else {
    recs.push('Excellent structural choice: biogenic carbon sequestration active with high natural fire char protection.');
  }

  if (foundation === 'standard-concrete-slab') {
    recs.push('Upgrading from standard slab to Low-Carbon Insulated Raft Slab or Lime-stabilized trench cuts foundation embodied carbon by up to 50% while mitigating freeze settlement.');
  } else {
    recs.push('Foundation optimized: low thermal bridging and reduced Portland cement usage active.');
  }

  if (envelope !== 'charred-timber' && envelope !== 'brick-masonry') {
    recs.push('Upgrade to Charred Timber (Yakisugi) or Fiber-cement rainscreens to eliminate toxic recurring repainting cycles.');
  }

  if (strategy !== 'proactive-smart') {
    recs.push('Adopting IoT predictive timber moisture and structural settlement sensors can add +15 to +25 useful service years.');
  } else {
    recs.push('Your proactive protocol avoids the "deferred maintenance debt" that causes premature building condemnations.');
  }

  listEl.innerHTML = recs.map(r => `<li>${r}</li>`).join('');
}

/* ==========================================================================
   MODULE 4: SMART MAINTENANCE SCHEDULE PLANNER
   ========================================================================== */

let currentCompletedTasks = new Set();
let currentFilter = 'all';

function initMaintenancePlanner() {
  const toggles = document.querySelectorAll('.system-toggle input[type="checkbox"]');
  toggles.forEach(toggle => {
    toggle.addEventListener('change', renderMaintenanceSchedule);
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderMaintenanceSchedule();
    });
  });

  const printBtn = document.getElementById('printPlanBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const exportBtn = document.getElementById('exportJsonBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportMaintenanceData);
  }

  renderMaintenanceSchedule();
}

function renderMaintenanceSchedule() {
  const timelineEl = document.getElementById('scheduleTimeline');
  const taskCountEl = document.getElementById('activeTaskCount');
  if (!timelineEl) return;

  // Find active systems
  const activeSystems = new Set();
  document.querySelectorAll('.system-toggle input[type="checkbox"]').forEach(chk => {
    if (chk.checked) activeSystems.add(chk.id);
  });

  // Filter tasks based on active systems and current filter
  let visibleTasks = MAINTENANCE_TASKS_DATABASE.filter(task => activeSystems.has(task.system));

  if (currentFilter !== 'all') {
    if (currentFilter === 'critical') {
      visibleTasks = visibleTasks.filter(t => t.priority === 'critical');
    } else {
      visibleTasks = visibleTasks.filter(t => t.frequency === currentFilter);
    }
  }

  if (taskCountEl) {
    taskCountEl.textContent = `Showing ${visibleTasks.length} active maintenance milestones`;
  }

  if (visibleTasks.length === 0) {
    timelineEl.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--neutral-500);">
        <p>No maintenance tasks match the selected systems or frequency filter.</p>
        <small>Select one or more building systems above to view actionable milestones.</small>
      </div>
    `;
    updateTaskProgressBar(0, 0);
    updateMaintenanceCostEstimates(activeSystems);
    return;
  }

  timelineEl.innerHTML = visibleTasks.map(task => {
    const isCompleted = currentCompletedTasks.has(task.id);
    let badgeClass = 'badge-quarterly';
    if (task.frequency === 'annual') badgeClass = 'badge-annual';
    if (task.frequency === '5year') badgeClass = 'badge-5year';
    if (task.priority === 'critical') badgeClass = 'badge-critical';

    return `
      <div class="task-item ${isCompleted ? 'completed' : ''}" data-task-id="${task.id}">
        <div class="task-left">
          <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${isCompleted ? 'checked' : ''} aria-label="Mark task complete">
          <span class="task-badge ${badgeClass}">${task.frequencyLabel}</span>
          <div class="task-info">
            <span class="task-text">${task.title}</span>
            <div class="task-meta">
              <span>Category: <strong>${task.systemName}</strong></span>
              <span>Priority: <strong>${task.priorityLabel}</strong></span>
            </div>
            <p style="font-size: 0.8rem; color: var(--neutral-600); margin-top: 0.25rem;">${task.description}</p>
          </div>
        </div>
        <div class="task-cost-impact">
          <span>Est. Cost: ${task.cost}</span>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners to checkboxes
  timelineEl.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        currentCompletedTasks.add(id);
      } else {
        currentCompletedTasks.delete(id);
      }
      renderMaintenanceSchedule();
    });
  });

  // Calculate completed count
  const completedInView = visibleTasks.filter(t => currentCompletedTasks.has(t.id)).length;
  updateTaskProgressBar(completedInView, visibleTasks.length);

  // Dynamically update cost and avoided failure savings metrics
  updateMaintenanceCostEstimates(activeSystems);
}

function updateMaintenanceCostEstimates(activeSystems) {
  const annualCostEl = document.getElementById('annualCostEstimate');
  const savingsEl = document.getElementById('costSavingsEstimate');
  if (!annualCostEl || !savingsEl) return;

  if (activeSystems.size === 0) {
    annualCostEl.textContent = '$0 (No active systems)';
    savingsEl.textContent = '$0 avoided costs';
    return;
  }

  let minAnnual = 0;
  let maxAnnual = 0;
  let totalSavings = 0;

  if (activeSystems.has('sysRoof')) { minAnnual += 500; maxAnnual += 1100; totalSavings += 14000; }
  if (activeSystems.has('sysEnvelope')) { minAnnual += 350; maxAnnual += 850; totalSavings += 12000; }
  if (activeSystems.has('sysHvac')) { minAnnual += 330; maxAnnual += 800; totalSavings += 9000; }
  if (activeSystems.has('sysSolar')) { minAnnual += 300; maxAnnual += 700; totalSavings += 6500; }
  if (activeSystems.has('sysPlumbing')) { minAnnual += 240; maxAnnual += 530; totalSavings += 5500; }
  if (activeSystems.has('sysStructure')) { minAnnual += 350; maxAnnual += 700; totalSavings += 22000; }

  annualCostEl.textContent = `$${minAnnual.toLocaleString()} – $${maxAnnual.toLocaleString()} / yr`;
  savingsEl.textContent = `Up to $${totalSavings.toLocaleString()} / 10 yrs`;
}

function updateTaskProgressBar(completed, total) {
  const bar = document.getElementById('tasksProgressBar');
  const label = document.getElementById('tasksProgressLabel');
  if (!bar || !label) return;

  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  bar.style.width = `${pct}%`;
  label.textContent = `${completed} of ${total} Completed (${pct}%)`;
}

function exportMaintenanceData() {
  const activeSystems = [];
  document.querySelectorAll('.system-toggle input[type="checkbox"]').forEach(chk => {
    if (chk.checked) activeSystems.push(chk.id);
  });

  const exportPayload = {
    exportedAt: new Date().toISOString(),
    organization: 'Earth Tech Lifecycle Manager',
    buildingProfile: {
      type: document.getElementById('buildingType').value,
      structure: document.getElementById('structuralMaterial').value,
      climate: document.getElementById('climateZone').value,
      projectedLifespanYears: document.getElementById('estimatedYears').textContent
    },
    activeSystems: activeSystems,
    tasks: MAINTENANCE_TASKS_DATABASE.filter(t => activeSystems.includes(t.system)).map(t => ({
      ...t,
      isCompleted: currentCompletedTasks.has(t.id)
    }))
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', 'earth-tech-maintenance-plan.json');
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('Maintenance schedule downloaded as JSON.');
}

/* ==========================================================================
   MODULE 5: SUSTAINABLE MATERIALS EXPLORER & MODAL
   ========================================================================== */

function initMaterialsExplorer() {
  const searchInput = document.getElementById('materialSearchInput');
  const categoryChips = document.getElementById('categoryChips');
  const modal = document.getElementById('materialModal');
  const modalClose = document.getElementById('modalCloseBtn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderMaterialsGrid();
    });
  }

  if (categoryChips) {
    categoryChips.querySelectorAll('.category-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        categoryChips.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderMaterialsGrid();
      });
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  renderMaterialsGrid();
}

function renderMaterialsGrid() {
  const grid = document.getElementById('materialsGrid');
  const searchInput = document.getElementById('materialSearchInput');
  const activeChip = document.querySelector('.category-chip.active');

  if (!grid) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCat = activeChip ? activeChip.dataset.cat : 'all';

  const filtered = SUSTAINABLE_MATERIALS_DATA.filter(mat => {
    const matchesCategory = selectedCat === 'all' || mat.category === selectedCat;
    const matchesQuery = !query || 
      mat.name.toLowerCase().includes(query) ||
      mat.summary.toLowerCase().includes(query) ||
      mat.categoryLabel.toLowerCase().includes(query) ||
      mat.rValue.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-lg);">
        <p style="font-size: 1.1rem; color: var(--neutral-600); font-weight: 600;">No sustainable materials matched "${query}"</p>
        <p style="font-size: 0.875rem; color: var(--neutral-500); margin-top: 0.5rem;">Try searching for "Mass Timber", "Hempcrete", "Concrete", or reset your category filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(mat => `
    <div class="material-card" onclick="openMaterialModal('${mat.id}')">
      <div>
        <div class="material-card-top">
          <span class="material-badge-category">${mat.categoryLabel}</span>
          <span class="carbon-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            ${mat.carbonReduction} CO₂
          </span>
        </div>
        <h3 class="material-name">${mat.name}</h3>
        <p class="material-summary">${mat.summary}</p>
        <div class="material-specs-grid">
          <div class="spec-item">
            <span class="spec-key">Expected Longevity</span>
            <span class="spec-value">${mat.lifespan}</span>
          </div>
          <div class="spec-item">
            <span class="spec-key">Thermal / R-Value</span>
            <span class="spec-value">${mat.rValue.split(' ')[0]}</span>
          </div>
          <div class="spec-item">
            <span class="spec-key">Fire Performance</span>
            <span class="spec-value">${mat.fireRating.split(' ')[0]}</span>
          </div>
          <div class="spec-item">
            <span class="spec-key">Relative Cost</span>
            <span class="spec-value">${mat.costIndex.split(' ')[0]}</span>
          </div>
        </div>
      </div>
      <div>
        <button class="card-view-btn" type="button">
          Explore Technical Profile
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

window.openMaterialModal = function(materialId) {
  const mat = SUSTAINABLE_MATERIALS_DATA.find(m => m.id === materialId);
  const modal = document.getElementById('materialModal');
  const content = document.getElementById('modalContent');
  if (!mat || !modal || !content) return;

  content.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="material-badge-category">${mat.categoryLabel}</span>
      <h2 style="font-family: var(--font-display); font-size: 1.85rem; color: var(--primary-900); margin-top: 0.4rem; margin-bottom: 0.5rem;">${mat.name}</h2>
      <p style="color: var(--neutral-600); line-height: 1.6;">${mat.summary}</p>
    </div>

    <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary-800); margin-bottom: 0.5rem;">Key Ecological Advantages</h4>
      <ul style="list-style: disc; margin-left: 1.25rem; font-size: 0.875rem; color: var(--primary-900); display: flex; flex-direction: column; gap: 0.4rem;">
        ${mat.benefits.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: var(--neutral-100); padding: 0.85rem; border-radius: var(--radius-md);">
        <span style="font-size: 0.725rem; text-transform: uppercase; color: var(--neutral-500); font-weight: 600; display: block;">Carbon Footprint Reduction</span>
        <strong style="color: #15803d; font-size: 1.15rem;">${mat.carbonReduction}</strong>
      </div>
      <div style="background: var(--neutral-100); padding: 0.85rem; border-radius: var(--radius-md);">
        <span style="font-size: 0.725rem; text-transform: uppercase; color: var(--neutral-500); font-weight: 600; display: block;">Design Service Life</span>
        <strong style="color: var(--neutral-900); font-size: 1.15rem;">${mat.lifespan}</strong>
      </div>
      <div style="background: var(--neutral-100); padding: 0.85rem; border-radius: var(--radius-md);">
        <span style="font-size: 0.725rem; text-transform: uppercase; color: var(--neutral-500); font-weight: 600; display: block;">Thermal Resistance</span>
        <strong style="color: var(--neutral-800); font-size: 0.95rem;">${mat.rValue}</strong>
      </div>
      <div style="background: var(--neutral-100); padding: 0.85rem; border-radius: var(--radius-md);">
        <span style="font-size: 0.725rem; text-transform: uppercase; color: var(--neutral-500); font-weight: 600; display: block;">Fire Performance</span>
        <strong style="color: var(--neutral-800); font-size: 0.95rem;">${mat.fireRating}</strong>
      </div>
    </div>

    <div style="border-top: 1px solid var(--neutral-200); padding-top: 1rem;">
      <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--neutral-800); margin-bottom: 0.35rem;">Long-Term Maintenance Guidance</h4>
      <p style="font-size: 0.85rem; color: var(--neutral-600); line-height: 1.5;">${mat.maintenanceTip}</p>
    </div>

    <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">Close Technical Sheet</button>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
};

function closeModal() {
  const modal = document.getElementById('materialModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

/* ==========================================================================
   MODULE 6: INTERACTIVE COMPARISON MATRIX
   ========================================================================== */

function initComparisonTool() {
  const tradSelect = document.getElementById('compareTraditional');
  const sustSelect = document.getElementById('compareSustainable');

  if (tradSelect && sustSelect) {
    tradSelect.addEventListener('change', renderComparison);
    sustSelect.addEventListener('change', renderComparison);
    renderComparison();
  }
}

function renderComparison() {
  const tradVal = document.getElementById('compareTraditional').value;
  const sustVal = document.getElementById('compareSustainable').value;
  const display = document.getElementById('comparisonDisplay');
  if (!display) return;

  const trad = COMPARISON_DATA.traditional[tradVal] || COMPARISON_DATA.traditional['trad-concrete'];
  const sust = COMPARISON_DATA.sustainable[sustVal] || COMPARISON_DATA.sustainable['sust-timber'];

  display.innerHTML = `
    <!-- Traditional Column -->
    <div class="compare-column">
      <div class="col-header">
        <span class="col-tag">Conventional Standard</span>
        <h4 class="col-title">${trad.name}</h4>
      </div>

      <div class="compare-row">
        <span class="row-label">Embodied Carbon</span>
        <span class="row-val" style="color: #b91c1c;">${trad.carbon}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Expected Longevity</span>
        <span class="row-val">${trad.lifespan}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Energy & Thermal Impact</span>
        <span class="row-val">${trad.energyImpact}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Ongoing Upkeep</span>
        <span class="row-val">${trad.maintenanceNeeds}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">End-of-Life Circularity</span>
        <span class="row-val">${trad.circularity}</span>
      </div>
    </div>

    <!-- Sustainable Column -->
    <div class="compare-column highlight">
      <div class="col-header">
        <span class="col-tag">Earth Tech Green Alternative</span>
        <h4 class="col-title text-accent">${sust.name}</h4>
      </div>

      <div class="compare-row">
        <span class="row-label">Embodied Carbon</span>
        <span class="row-val text-success font-bold">${sust.carbon}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Expected Longevity</span>
        <span class="row-val font-bold text-accent">${sust.lifespan}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Energy & Thermal Impact</span>
        <span class="row-val">${sust.energyImpact}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">Ongoing Upkeep</span>
        <span class="row-val">${sust.maintenanceNeeds}</span>
      </div>

      <div class="compare-row">
        <span class="row-label">End-of-Life Circularity</span>
        <span class="row-val font-bold text-success">${sust.circularity}</span>
      </div>
    </div>
  `;
}

/* ==========================================================================
   MODULE 7: BEGINNER PRESETS
   ========================================================================== */

function initHeroPresets() {
  const chips = document.querySelectorAll('.preset-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const presetKey = chip.dataset.preset;
      applyPreset(presetKey);
    });
  });
}

function applyPreset(presetKey) {
  const bldgType = document.getElementById('buildingType');
  const structMat = document.getElementById('structuralMaterial');
  const envelope = document.getElementById('envelopeType');
  const climate = document.getElementById('climateZone');
  const foundation = document.getElementById('foundationType');
  const strategy = document.getElementById('maintenanceStrategy');
  const ageSlider = document.getElementById('buildingAge');
  const ageDisplay = document.getElementById('ageDisplay');
  const goalSlider = document.getElementById('targetGoal');
  const goalDisplay = document.getElementById('goalDisplay');

  if (presetKey === 'suburban-home') {
    if (bldgType) bldgType.value = 'residential-single';
    if (structMat) structMat.value = 'mass-timber';
    if (envelope) envelope.value = 'charred-timber';
    if (climate) climate.value = 'temperate';
    if (foundation) foundation.value = 'low-carbon-slab';
    if (strategy) strategy.value = 'proactive-smart';
    if (ageSlider) ageSlider.value = 5;
    if (ageDisplay) ageDisplay.textContent = '5';
    if (goalSlider) goalSlider.value = 90;
    if (goalDisplay) goalDisplay.textContent = '90';
    showToast('Loaded preset: Suburban Eco-Home');
  } else if (presetKey === 'mass-timber-office') {
    if (bldgType) bldgType.value = 'commercial-office';
    if (structMat) structMat.value = 'mass-timber';
    if (envelope) envelope.value = 'curtain-wall';
    if (climate) climate.value = 'humid-tropical';
    if (foundation) foundation.value = 'deep-piles';
    if (strategy) strategy.value = 'proactive-smart';
    if (ageSlider) ageSlider.value = 0;
    if (ageDisplay) ageDisplay.textContent = '0';
    if (goalSlider) goalSlider.value = 100;
    if (goalDisplay) goalDisplay.textContent = '100';
    showToast('Loaded preset: Mass Timber Office');
  } else if (presetKey === 'rammed-earth-cabin') {
    if (bldgType) bldgType.value = 'residential-single';
    if (structMat) structMat.value = 'rammed-earth';
    if (envelope) envelope.value = 'brick-masonry';
    if (climate) climate.value = 'arid';
    if (foundation) foundation.value = 'stone-lime';
    if (strategy) strategy.value = 'standard-routine';
    if (ageSlider) ageSlider.value = 12;
    if (ageDisplay) ageDisplay.textContent = '12';
    if (goalSlider) goalSlider.value = 120;
    if (goalDisplay) goalDisplay.textContent = '120';
    showToast('Loaded preset: Rammed Earth Cabin');
  }

  // Recalculate and scroll to calculator
  calculateLifespan();
  const estimatorSection = document.getElementById('estimator');
  if (estimatorSection) {
    estimatorSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   MODULE 8: NEWSLETTER & TOAST NOTIFICATIONS
   ========================================================================== */

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const successMsg = document.getElementById('newsletterSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
      showToast('Thank you for subscribing to Earth Tech intelligence.');
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74c69d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   MODULE 9: DARK / WHITE THEME TOGGLE
   ========================================================================== */

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('earthtech_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply default or stored theme
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme, true);
    });
  }
}

function setTheme(theme, notify = false) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('earthtech_theme', 'dark');
    if (notify) showToast('Switched to Dark Mode 🌙');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('earthtech_theme', 'light');
    if (notify) showToast('Switched to Light (White) Mode ☀️');
  }

  // Recalculate gauge colors if needed
  if (typeof calculateLifespan === 'function') {
    calculateLifespan();
  }
}

/* ==========================================================================
   MODULE 10: GOOGLE AUTHENTICATION & USER PROFILE
   ========================================================================== */

function initGoogleAuth() {
  const loginBtn = document.getElementById('googleLoginBtn');
  const authModal = document.getElementById('googleAuthModal');
  const modalClose = document.getElementById('authModalCloseBtn');
  const userProfileMenu = document.getElementById('userProfileMenu');
  const userProfileToggle = document.getElementById('userProfileToggle');
  const userDropdown = document.getElementById('userDropdown');
  const logoutBtn = document.getElementById('logoutBtn');
  const customSubmitBtn = document.getElementById('customAuthSubmitBtn');

  // Open modal
  if (loginBtn && authModal) {
    loginBtn.addEventListener('click', () => {
      authModal.classList.add('active');
      authModal.setAttribute('aria-hidden', 'false');
    });
  }

  // Close modal
  function closeAuthModal() {
    if (authModal) {
      authModal.classList.remove('active');
      authModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeAuthModal);
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  // Account item clicks
  document.querySelectorAll('.auth-account-item').forEach(item => {
    item.addEventListener('click', () => {
      const name = item.dataset.name;
      const email = item.dataset.email;
      const badge = item.dataset.badge;
      loginUser({ name, email, badge });
      closeAuthModal();
    });
  });

  // Custom account submission
  if (customSubmitBtn) {
    customSubmitBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('customAuthName');
      const emailInput = document.getElementById('customAuthEmail');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Earth Tech Member';
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'member@earthtech.eco';
      const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      loginUser({ name, email, badge: initials || 'ET' });
      closeAuthModal();
    });
  }

  // Toggle user profile dropdown
  if (userProfileToggle && userDropdown) {
    userProfileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (userDropdown.classList.contains('show') && !userDropdown.contains(e.target) && !userProfileToggle.contains(e.target)) {
        userDropdown.classList.remove('show');
      }
    });
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('earthtech_user');
      updateAuthUI(null);
      if (userDropdown) userDropdown.classList.remove('show');
      showToast('You have signed out.');
    });
  }

  // Check stored login on load
  const storedUser = localStorage.getItem('earthtech_user');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      updateAuthUI(user);
    } catch (e) {
      localStorage.removeItem('earthtech_user');
    }
  }
}

function loginUser(user) {
  localStorage.setItem('earthtech_user', JSON.stringify(user));
  updateAuthUI(user);
  showToast(`Signed in with Google as ${user.name}`);
}

function updateAuthUI(user) {
  const loginBtn = document.getElementById('googleLoginBtn');
  const userProfileMenu = document.getElementById('userProfileMenu');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const userAvatarBadge = document.getElementById('userAvatarBadge');
  const dropdownUserName = document.getElementById('dropdownUserName');
  const dropdownUserEmail = document.getElementById('dropdownUserEmail');

  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userProfileMenu) userProfileMenu.style.display = 'block';
    if (userNameDisplay) userNameDisplay.textContent = user.name.split(' ')[0];
    if (userAvatarBadge) userAvatarBadge.textContent = user.badge;
    if (dropdownUserName) dropdownUserName.textContent = user.name;
    if (dropdownUserEmail) dropdownUserEmail.textContent = user.email;
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (userProfileMenu) userProfileMenu.style.display = 'none';
  }
}

/* ==========================================================================
   MODULE 11: AI BUILDING MAINTENANCE ASSISTANT
   Intelligent Natural Language Specialist for Building Durability & Upkeep
   ========================================================================== */

const AI_MAINTENANCE_KNOWLEDGE_BASE = [
  {
    keywords: ['roof', 'leak', 'ponding', 'drain', 'scupper', 'membrane', 'waterproof'],
    response: `
      <strong>💧 Roof Leak & Ponding Water Diagnosis:</strong>
      <p>Water ponding on flat roofs is one of the top causes of premature structural failure. Any standing water remaining 48 hours after rainfall degrades asphalt or single-ply membranes (TPO/EPDM) via accelerated UV hydrolysis.</p>
      <ul>
        <li><strong>Immediate Action:</strong> Clear internal roof drains, gravel guards, and parapet scuppers. Inspect seams using a blunt probe for separation.</li>
        <li><strong>Maintenance Schedule:</strong> Inspect quarterly and immediately after major storm events. Check counter-flashings every spring.</li>
        <li><strong>Low-Carbon Retrofit:</strong> Consider adding an <em>Extensive Sedum Green Roof</em> to absorb 70-90% of rainwater runoff and shield underlying membranes from UV breakdown.</li>
      </ul>
    `
  },
  {
    keywords: ['timber', 'clt', 'mass timber', 'wood', 'rot', 'moisture', 'fungal'],
    response: `
      <strong>🪵 Mass Timber (CLT / Glulam) Maintenance Playbook:</strong>
      <p>Mass timber structures can easily achieve 100+ years of service life provided <strong>equilibrium moisture content stays strictly below 16%</strong>.</p>
      <ul>
        <li><strong>Critical Vulnerabilities:</strong> End-grain water exposure, plumbing shaft leaks, and ground contact.</li>
        <li><strong>Action Steps:</strong> Install embedded wireless moisture telemetry sensors at perimeter beam ends. Reapply breathable tung or linseed bio-oils every 7-10 years.</li>
        <li><strong>Indoor RH Control:</strong> Maintain indoor relative humidity between 40% and 60% with balanced HRV/ERV systems to prevent checking and dimensional movement.</li>
      </ul>
    `
  },
  {
    keywords: ['concrete', 'crack', 'freeze', 'thaw', 'spalling', 'salt', 'rebar', 'rust'],
    response: `
      <strong>❄️ Concrete Durability & Freeze-Thaw Protection:</strong>
      <p>Trapped moisture in concrete pores expands 9% upon freezing, generating hydraulic pressure exceeding concrete tensile strength and causing surface spalling.</p>
      <ul>
        <li><strong>Coastal & Cold Protection:</strong> Apply penetrating alkylalkoxysilane hydrophobic sealers every 5-7 years to repel moisture and salt chlorides without trapping vapor.</li>
        <li><strong>Crack Inspection:</strong> Hairline surface shrinkage cracks (< 0.3mm) are cosmetic; diagonal cracks or rebar rust-jacking with orange staining require structural epoxy or polyurethane injection.</li>
        <li><strong>Sustainable Alternative:</strong> Low-Carbon Geopolymer Concrete is inherently free from alkali-silica reactions (ASR) and resists chloride corrosion up to 3x longer than traditional Portland cement.</li>
      </ul>
    `
  },
  {
    keywords: ['foundation', 'settlement', 'sink', 'heave', 'subsidence', 'basement', 'stem wall'],
    response: `
      <strong>🏗️ Foundation Settlement & Ground Movement:</strong>
      <p>Foundations move due to cyclical clay soil shrinkage, hydrostatic ground pressure, or poor perimeter gutter discharge.</p>
      <ul>
        <li><strong>Warning Signs:</strong> Step-stair cracks in brick mortar, doors sticking in frames, or horizontal stem wall cracks indicative of excessive lateral soil load.</li>
        <li><strong>Immediate Mitigation:</strong> Extend downspout discharge pipes at least 6-10 feet away from the foundation perimeter. Install telltale acrylic crack monitors to track active movement.</li>
        <li><strong>Remediation:</strong> If progressive settlement exceeds 1/4 inch, helical steel screw piles or low-carbon lime-grouting underpin the structure with minimal excavation disturbance.</li>
      </ul>
    `
  },
  {
    keywords: ['hvac', 'heat pump', 'filter', 'erv', 'hrv', 'air', 'ventilation', 'heating', 'cooling'],
    response: `
      <strong>💨 Heat Pump & High-Performance Ventilation Care:</strong>
      <p>Modern heat pumps and Energy Recovery Ventilators (ERVs) provide up to 400% thermal efficiency (COP 4.0) but require routine filter and airflow hygiene.</p>
      <ul>
        <li><strong>Quarterly:</strong> Replace MERV-13 or HEPA filters. Clogged filters force fan motors to over-amp, increasing electricity draw by 15-25%.</li>
        <li><strong>Bi-Annual:</strong> Vacuum outdoor condensing coil fins, clear surrounding foliage (maintain 24" clearance), and test condensate drain pan pan-tabs.</li>
        <li><strong>Annual:</strong> Wash ERV/HRV enthalpy core with mild lukewarm water and benchmark compressor startup sound and refrigerant subcooling levels.</li>
      </ul>
    `
  },
  {
    keywords: ['solar', 'pv', 'panel', 'inverter', 'battery', 'storage', 'photovoltaic'],
    response: `
      <strong>☀️ Solar PV & Energy Storage Maintenance:</strong>
      <p>While solar panels have no moving parts and boast 25-30 year lifespans, inverters and balance-of-system electrical components require proactive checkups.</p>
      <ul>
        <li><strong>Quarterly Soiling Cleanse:</strong> In dry or pollen-heavy climates, dust accumulation robs 6-12% of peak generation. Wash panels in the early morning using demineralized water and soft squeegees.</li>
        <li><strong>Annual Thermal Scan:</strong> Use handheld infrared thermometers to identify shaded hot-spots or bypass diode malfunctions.</li>
        <li><strong>Inverter Life:</strong> String/hybrid inverters typically need capacitor or cooling fan service at Year 10-12. Keep battery ambient temperature between 15°C and 25°C.</li>
      </ul>
    `
  },
  {
    keywords: ['shou sugi ban', 'charred', 'yakisugi', 'siding', 'facade', 'cladding'],
    response: `
      <strong>🔥 Shou Sugi Ban (Yakisugi) Facade Upkeep:</strong>
      <p>Yakisugi uses surface timber carbonization to naturally resist termites, rot, and wind-driven rain without chemical pressure-treatment biocides.</p>
      <ul>
        <li><strong>Maintenance Interval:</strong> True deeply-charred Yakisugi can last 60-80+ years with virtually zero chemical maintenance.</li>
        <li><strong>Surface Renewal:</strong> If a rich deep sheen is desired rather than natural weathered silver patina, reapply natural tung oil or linseed oil every 10-15 years.</li>
        <li><strong>Assembly Check:</strong> Ensure lower ventilated rainscreen cavity weep holes remain clear of garden soil or mulch build-up.</li>
      </ul>
    `
  },
  {
    keywords: ['green roof', 'sedum', 'vegetative', 'living roof', 'soil', 'weeds'],
    response: `
      <strong>🌿 Living Green Roof Maintenance Routine:</strong>
      <p>Green roofs protect building waterproof membranes from extreme diurnal temperature swings and UV degradation, extending roof lifespan by 200-300%.</p>
      <ul>
        <li><strong>Spring & Autumn Checks:</strong> Clear gravel perimeter drainage borders and clear sedum foliage from internal drain baskets.</li>
        <li><strong>Weeding:</strong> Hand-pull aggressive windblown taproot weeds (like dandelions or saplings) that could threaten root-barrier membranes.</li>
        <li><strong>Hydration:</strong> Sedum is naturally drought-tolerant; during severe prolonged heatwaves (>3 weeks without rain), perform a 20-minute irrigation cycle at dusk.</li>
      </ul>
    `
  },
  {
    keywords: ['hempcrete', 'lime', 'plaster', 'breathable', 'vapor'],
    response: `
      <strong>🌱 Hempcrete & Hydraulic Lime Wall Maintenance:</strong>
      <p>Hempcrete is a breathable biocomposite that regulates interior humidity (40-60% RH) and prevents mold permanently.</p>
      <ul>
        <li><strong>Strict Rule:</strong> NEVER paint hempcrete walls with petroleum acrylic or oil-based paints, as they seal the wall, trapping moisture and causing degradation.</li>
        <li><strong>Permissible Finishes:</strong> Use only breathable mineral silicate paints, limewash, or natural hydraulic lime renders (NHL 2 or 3.5).</li>
        <li><strong>Inspections:</strong> Check base splash zones annually. Ensure ground clearance is at least 150mm above finished grade.</li>
      </ul>
    `
  },
  {
    keywords: ['cost', 'budget', 'expense', 'how much', 'price', 'roi', 'savings'],
    response: `
      <strong>💰 Building Maintenance Budgeting & ROI:</strong>
      <p>Industry engineering benchmarks recommend budgeting <strong>1.0% to 1.5% of total building asset value annually</strong> for preventive maintenance.</p>
      <ul>
        <li><strong>The 1:5:20 Rule:</strong> Every $1 spent on proactive routine upkeep averts $5 in emergency repairs and $20 in premature structural replacement down the road.</li>
        <li><strong>Avoided Costs:</strong> Proactive roof and joint maintenance prevents average catastrophic leak claims averaging $32,000 to $65,000 over a 10-year period.</li>
        <li><strong>Asset Valuation:</strong> Documented digital maintenance logs increase commercial property resale valuation by 4% to 9%.</li>
      </ul>
    `
  }
];

function initAIAssistant() {
  const launcher = document.getElementById('aiAssistantLauncher');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiCloseChatBtn');
  const clearBtn = document.getElementById('aiClearChatBtn');
  const form = document.getElementById('aiChatForm');
  const input = document.getElementById('aiChatInput');
  const chatBody = document.getElementById('aiChatBody');

  if (!launcher || !chatWindow) return;

  // Toggle chat drawer
  launcher.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    const isActive = chatWindow.classList.contains('active');
    chatWindow.setAttribute('aria-hidden', (!isActive).toString());
    if (isActive && input) {
      setTimeout(() => input.focus(), 200);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
      chatWindow.setAttribute('aria-hidden', 'true');
    });
  }

  // Clear chat
  if (clearBtn && chatBody) {
    clearBtn.addEventListener('click', () => {
      chatBody.innerHTML = `
        <div class="ai-message bot">
          <div class="msg-avatar bot-avatar">🌱</div>
          <div class="msg-bubble">
            <p>Chat cleared! I am your <strong>Earth Tech AI Maintenance Specialist</strong>.</p>
            <p>Ask any question about structural durability, waterproofing, heat pumps, mass timber, concrete, or sustainable retrofits.</p>
            <span class="msg-time">Just now</span>
          </div>
        </div>
      `;
      showToast('AI conversation reset.');
    });
  }

  // Suggestion chips
  document.querySelectorAll('.ai-suggest-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      if (input) input.value = query;
      submitUserQuery(query);
    });
  });

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = input.value.trim();
      if (!query) return;
      submitUserQuery(query);
      input.value = '';
    });
  }

  function submitUserQuery(query) {
    if (!chatBody) return;

    // 1. Add User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message user';
    userMsg.innerHTML = `
      <div class="msg-avatar user-avatar-chat">You</div>
      <div class="msg-bubble">
        <p>${escapeHtml(query)}</p>
        <span class="msg-time">Just now</span>
      </div>
    `;
    chatBody.appendChild(userMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. Add Typing Indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'ai-message bot typing';
    typingIndicator.id = 'aiTypingIndicator';
    typingIndicator.innerHTML = `
      <div class="msg-avatar bot-avatar">🌱</div>
      <div class="msg-bubble">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // 3. Generate Answer (simulated AI thinking delay)
    setTimeout(() => {
      const indicator = document.getElementById('aiTypingIndicator');
      if (indicator) indicator.remove();

      const aiResponseHtml = getAIResponse(query);

      const botMsg = document.createElement('div');
      botMsg.className = 'ai-message bot';
      botMsg.innerHTML = `
        <div class="msg-avatar bot-avatar">🌱</div>
        <div class="msg-bubble">
          ${aiResponseHtml}
          <span class="msg-time">Just now</span>
        </div>
      `;
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 450);
  }
}

function getAIResponse(userQuery) {
  const q = userQuery.toLowerCase();

  // Search Knowledge Base
  for (const item of AI_MAINTENANCE_KNOWLEDGE_BASE) {
    const matched = item.keywords.some(kw => q.includes(kw));
    if (matched) {
      return item.response;
    }
  }

  // Dynamic Synthesis Fallback
  return `
    <strong>🏗️ Earth Tech Diagnostic Advice:</strong>
    <p>Regarding: <em>"${escapeHtml(userQuery)}"</em></p>
    <p>Here is an engineering-aligned maintenance recommendation for your property:</p>
    <ul>
      <li><strong>1. Inspection Protocol:</strong> Clean surfaces and check for moisture ingress, thermal leaks, or structural settling. Use calibrated moisture meters or infrared thermometers.</li>
      <li><strong>2. Preventative Action:</strong> Ensure control joints, flashing seals, and weep holes remain unobstructed. Prevent deferred maintenance before minor wear triggers structural replacement.</li>
      <li><strong>3. Low-Carbon Choice:</strong> Prioritize bio-based, non-toxic materials (mineral silicate renders, timber bio-oils, geopolymer mixes) that protect indoor air quality and lower lifecycle embodied carbon.</li>
    </ul>
    <p><small>Tip: You can also use our <strong>Maintenance Planner</strong> above to generate a full customized quarterly and annual roadmap for your active systems!</small></p>
  `;
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

