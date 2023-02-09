const size = {
  celMin: '320px',
  celMax: '480px',
  tabletMin: '481px',
  tabletMax: '768px',
};

const device = {
  cel: `(min-width: ${size.celMin}) and (max-width: ${size.celMax})`,
  tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
};

const breakpoints = { size, device };

export default breakpoints;
