type Icon = string;

const svg = (inner: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const iconHome = svg(
  '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>'
);

export const iconBriefcase = svg(
  '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>'
);

export const iconStore = svg(
  '<path d="M4 10 5.8 5.5h12.4L20 10"/><path d="M3 10h18v11H3z"/><path d="M6 21v-7h12v7"/><path d="M9 14h.01M15 14h.01"/>'
);

export const iconTag = svg(
  '<path d="M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H4a2 2 0 0 0-2 2v5.6c0 .5.2 1 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/>'
);

export const iconLayers = svg(
  '<path d="M12 2l10 5.5L12 13 2 7.5 12 2z"/><path d="M2 12.5L12 18l10-5.5"/><path d="M2 17.5L12 23l10-5.5"/>'
);

export const iconGem = svg(
  '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/><path d="M12 3v18"/>'
);

export const iconChat = svg(
  '<path d="M21 12a8.5 8.5 0 0 1-12.5 7.5L4 21l1.6-4.3A8.5 8.5 0 1 1 21 12z"/><path d="M8.5 10h7M8.5 13.5h4.5"/>'
);

export const iconPin = svg(
  '<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'
);

export const iconParking = svg(
  '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 16V8h3.2a2.2 2.2 0 0 1 0 4.4H9"/>'
);

export const iconTerrasse = svg(
  '<path d="M12 3v14"/><path d="M12 3a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6z"/><path d="M12 17v4"/><path d="M9 21h6"/>'
);

export const iconElevator = svg(
  '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 8v8M9.5 13 12 15.5 14.5 13M9.5 11 12 8.5 14.5 11"/>'
);

export const iconShield = svg(
  '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/>'
);

export const iconKey = svg(
  '<circle cx="7.5" cy="15.5" r="4"/><path d="M11 12l8-8M15 8l3 3M17.5 5.5 20 8"/>'
);

export const iconBuilding = svg(
  '<path d="M4 21V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16"/><path d="M14 21V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12"/><path d="M2 21h20"/><path d="M6.5 7h1M6.5 10h1M6.5 13h1"/>'
);

export const iconWindow = svg(
  '<rect x="3" y="4" width="18" height="16"/><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 13h4M17 13h4"/>'
);

export const iconDrop = svg(
  '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'
);

export const iconArrowOut = svg(
  '<path d="M12 5v14M5 12h9M11 8l4 4-4 4"/><path d="M15 5h4v4"/>'
);

export const iconBlueprint = svg(
  '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>'
);

export const iconUsers = svg(
  '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5a4.5 4.5 0 0 1 6 4.3"/>'
);

export const iconScales = svg(
  '<path d="M12 3v18M8 21h8"/><path d="M4 6h16M6 6l-2.5 8a2.5 2.5 0 0 0 5 0L6 6zM18 6l-2.5 8a2.5 2.5 0 0 0 5 0L18 6z"/>'
);

export const iconCheck = svg(
  '<path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/><path d="m8 12 2.5 2.5L16 9.5"/>'
);

export const iconArrow = svg(
  '<path d="M5 12h14M13 6l6 6-6 6"/>'
);

export const iconMoney = svg(
  '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9.5v.01M18 14.5v.01"/>'
);