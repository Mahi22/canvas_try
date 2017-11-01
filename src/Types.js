type commonPropTypes = {
  columns: number,
  columnWidth: number,
  gutterWidth: number,
  component: string,
  layout: any,
};

type springConfig = {
  stiffness: number,
  damping: number,
  precision: number
};

export default { commonPropTypes, springConfig };
