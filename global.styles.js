const variablesStyles = '@use "./src/scss/common/_vars"';
const breakpointsStyles = '@use "./src/scss/common/_breakpoints"';
const mixinsStyles = '@use "./src/scss/common/_mixins"';
const resetStyles = '@use "./src/scss/common/_reset"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
