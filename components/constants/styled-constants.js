/* -- OTHER COMPANY BRANDS -- */
export const colorFacebook = "#3b5998";
export const colorInstagram = "#3c5a96";
export const colorTwitter = "#00b6f1";
export const colorPinterest = "#cb2027";
export const colorYoutube = "#cd201f";
export const colorOdnok = "#ed812b";
export const colorVk = "#45668e";

/* Yellows */
export const yellow10 = "#ffb81c"; // citrine
export const yellow20 = "#f68d2e"; // amber
export const yellow30 = "#d45311"; // topaz
export const yellow40 = "#674730"; // bronzite

export const yellow = yellow30;

/* -- Greys  -- */
export const lightGrey = "#f9f9f9";
export const mediumGrey = "#e9e9e9";
export const darkGrey = "#808080";

export const grey3 = "#eff0f0"; // onyx10
export const grey5 = "#e0e2e2"; // onyx20
export const grey10 = "#d0d3d3"; //quartz
export const grey15 = "#bdc0c0"; // onyx40
export const grey20 = "#a9adad"; // granite
export const grey30 = "#878a8c"; // slate
export const grey40 = "#53575b"; // onyx
export const grey60 = "#3a3d40"; // onyx110

export const grey = grey30;

export const text120 = "#212225"; // onyxtext
export const black = "#0d0f10";
export const white = "#fff";

/* Util Colors */
export const colorError = "orange"; // TODO:red10;
export const colorSuccess = "#a3d287";
export const colorWarn = "#ffd072";

export const colorLink30 = "#177c9c"; // blue 600
export const colorLink = colorLink30;
export const colorLinkHover = colorLink; // TODO:blue20;

//normal 16px/1.4em
export const sans = `Montserrat, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;`;
export const serif = `"Slabo 27px", "Palatino", "Palatino Linotype", "Georgia", "Times New Roman", serif`;
export const monospace = `"Courier New", Courier, monospace`;

/* effectively 16px (16px * 100% = 16px) but respects users' special needs */
export const fontSizeRoot = `100%`;

/* desired px / 16px (root size) = rem */
export const fontSize11 = "0.6875rem";
export const fontSize13 = "0.8125rem";
export const fontSize14 = "0.875rem";
export const fontSize16 = "1rem";
export const fontSize18 = "1.125rem";
export const fontSize20 = "1.25rem";
export const fontSize28 = "1.75rem";
export const fontSize32 = "2rem";
export const fontSize42 = "2.625rem";

export const lineHeightTight = 1.2;
export const lineHeight = 1.4;

/* text_transform variables (may not internationalize so variablelize) */
export const capitalize = `capitalize`;
export const uppercase = `uppercase`;

/* Spacing Variables  */

export const spacing4 = "0.25rem"; /* 4px */
export const spacing8 = "0.5rem"; /* 8px */
export const spacing16 = "1rem"; /* 16px */
export const spacing32 = "2rem"; /* 32px */
export const spacing64 = "4rem"; /* 64px */
export const spacing128 = "8rem"; /* 128px */

/* -- MATERIAL BREAKPOINTS -- */
export const breakWidth400 = "400px";
export const breakWidth480 = "480px";
export const breakWidth600 = "600px";
export const breakWidth840 = "840px";
export const breakWidth960 = "960px";
export const breakWidth1280 = "1280px";
export const breakWidth1440 = "1440px";
export const breakWidth1600 = "1600px";

export const breakWidthMax = breakWidth1600;

/*
According to material design, the gutter width should be:
	16px (1em) when the smallest width of the devices is < 600
	24px (1.5em) otherwise
*/
export const breakWidthGutterShift = breakWidth600;

export const gutter = "var(--gutter, 1.5rem)";
