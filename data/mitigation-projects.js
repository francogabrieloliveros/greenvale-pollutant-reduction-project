const mitigationProjects = [
  {
    cost: 4000,
    name: "Large Solar Park",
    pollutantReduction: [60, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },

  {
    cost: 1200,
    name: "Small Solar Installations",
    pollutantReduction: [18, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },

  {
    cost: 3800,
    name: "Wind Farm",
    pollutantReduction: [55, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },

  {
    cost: 3200,
    name: "Gas-to-renewables Conversion",
    pollutantReduction: [25, 1, 0.2, 0.1, 1.5, 0.5, 2, 0.05, 0.01, 0.3],
  },

  {
    cost: 1400,
    name: "Boiler Retrofit",
    pollutantReduction: [20, 0.9, 0.4, 0.2, 0.1, 0.05, 1.2, 0.02, 0.01, 0.05],
  },

  {
    cost: 2600,
    name: "Catalytic Converters for Buses",
    pollutantReduction: [30, 2.8, 0.6, 0.8, 0, 0.5, 5, 0.01, 0.05, 0.02],
  },

  {
    cost: 5000,
    name: "Diesel Bus Replacement",
    pollutantReduction: [48, 3.2, 0.9, 1, 0, 0.7, 6, 0.02, 0.08, 0.03],
  },

  {
    cost: 1000,
    name: "Traffic Signal/Flow Upgrade",
    pollutantReduction: [12, 0.6, 0.1, 0.4, 0.05, 0.2, 3, 0.02, 0.02, 0.01],
  },

  {
    cost: 180,
    name: " Low-Emission Stove Program",
    pollutantReduction: [2, 0.02, 0.01, 0.7, 0, 0.01, 1.5, 0.03, 0.2, 0],
  },

  {
    cost: 900,
    name: "Residential Insulation/ Efficiency",
    pollutantReduction: [15, 0.1, 0.05, 0.05, 0.02, 0.02, 0.5, 0, 0, 0.01],
  },

  {
    cost: 4200,
    name: "Industrial Scrubbers",
    pollutantReduction: [6, 0.4, 6, 0.4, 0, 0.1, 0.6, 0.01, 0.01, 0],
  },

  {
    cost: 3600,
    name: "Waste Methane Capture System",
    pollutantReduction: [28, 0.2, 0.1, 0.05, 8, 0.2, 0.1, 0, 0, 0.05],
  },

  {
    cost: 3400,
    name: "Landfill Gas-to-Energy",
    pollutantReduction: [24, 0.15, 0.05, 0.03, 6.5, 0.1, 0.05, 0, 0, 0.03],
  },

  {
    cost: 220,
    name: "Reforestation (acre-package)",
    pollutantReduction: [
      3.5, 0.04, 0.02, 0.01, 0.8, 0.03, 0.1, 0.01, 0.005, 0.005,
    ],
  },

  {
    cost: 300,
    name: "Urban Tree Canopy Program (street trees)",
    pollutantReduction: [
      4.2, 0.06, 0.01, 0.03, 0.6, 0.02, 0.15, 0.005, 0.02, 0.002,
    ],
  },

  {
    cost: 1600,
    name: "Industrial Energy Efficient Retrofit",
    pollutantReduction: [22, 0.5, 0.3, 0.15, 0.2, 0.1, 1, 0.01, 0.01, 0.03],
  },

  {
    cost: 1800,
    name: "Natural Gas Leak Repair",
    pollutantReduction: [10, 0.05, 0.01, 0.01, 4, 0.02, 0.02, 0, 0, 0.01],
  },

  {
    cost: 2800,
    name: "Agricultural Methane Reduction",
    pollutantReduction: [8, 0.02, 0.01, 0.02, 7.2, 0.05, 0.02, 0.1, 0, 0.05],
  },

  {
    cost: 450,
    name: "Clean Cookstove & Fuel Switiching (community scale)",
    pollutantReduction: [3.2, 0.04, 0.02, 0.9, 0.1, 0.02, 2, 0.05, 0.25, 0],
  },

  {
    cost: 6000,
    name: "Rail Electrification",
    pollutantReduction: [80, 2, 0.4, 1.2, 0, 0.6, 10, 0.02, 0.1, 0.05],
  },

  {
    cost: 2200,
    name: "EV Charging Infrastructure",
    pollutantReduction: [20, 0.3, 0.05, 0.1, 0, 0.05, 0.5, 0.01, 0.01, 0.01],
  },

  {
    cost: 1400,
    name: "Biochar for Soils (per project unit)",
    pollutantReduction: [6, 0.01, 0, 0.01, 2.5, 0.01, 0.01, 0.2, 0, 0.02],
  },

  {
    cost: 2600,
    name: "Industrial VOC",
    pollutantReduction: [2, 0.01, 0, 0, 0, 6.5, 0.1, 0, 0, 0],
  },

  {
    cost: 4200,
    name: "Heavy-Duty Truck Retrofit",
    pollutantReduction: [36, 2.2, 0.6, 0.6, 0, 0.3, 4.2, 0.01, 0.04, 0.02],
  },

  {
    cost: 4800,
    name: "Port/Harbor Electrification",
    pollutantReduction: [28, 1.9, 0.8, 0.7, 0, 0.2, 3.6, 0.01, 0.03, 0.02],
  },

  {
    cost: 600,
    name: "Black Carbon Reduction",
    pollutantReduction: [1.8, 0.02, 0.01, 0.6, 0.05, 0.01, 1, 0.02, 0.9, 0],
  },

  {
    cost: 1800,
    name: "Wetlands Restoration",
    pollutantReduction: [
      10, 0.03, 0.02, 0.02, 3.2, 0.01, 0.05, 0.15, 0.02, 0.04,
    ],
  },

  {
    cost: 700,
    name: "Household LPG Conversion Program",
    pollutantReduction: [2.5, 0.03, 0.01, 0.4, 0.05, 0.02, 1.2, 0.03, 0.1, 0],
  },

  {
    cost: 5000,
    name: "Industrial Process Change",
    pollutantReduction: [3, 0.02, 0.01, 0, 0, 0, 0, 0, 0, 1.5],
  },

  {
    cost: 400,
    name: "Behavioral Demand-Reduction Program",
    pollutantReduction: [9, 0.4, 0.05, 0.05, 0.01, 0.3, 2.5, 0.01, 0.01, 0.01],
  },
];

export default mitigationProjects;
