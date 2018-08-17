"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* -- OTHER COMPANY BRANDS -- */
var colorFacebook = exports.colorFacebook = "#3b5998";
var colorInstagram = exports.colorInstagram = "#3c5a96";
var colorTwitter = exports.colorTwitter = "#00b6f1";
var colorPinterest = exports.colorPinterest = "#cb2027";
var colorYoutube = exports.colorYoutube = "#cd201f";
var colorOdnok = exports.colorOdnok = "#ed812b";
var colorVk = exports.colorVk = "#45668e";

/* Yellows */
var yellow10 = exports.yellow10 = "#ffb81c"; // citrine
var yellow20 = exports.yellow20 = "#f68d2e"; // amber
var yellow30 = exports.yellow30 = "#d45311"; // topaz
var yellow40 = exports.yellow40 = "#674730"; // bronzite

var yellow = exports.yellow = yellow30;

/* -- Greys  -- */
var lightGrey = exports.lightGrey = "#f9f9f9";
var mediumGrey = exports.mediumGrey = "#e9e9e9";
var darkGrey = exports.darkGrey = "#808080";

var grey3 = exports.grey3 = "#eff0f0"; // onyx10
var grey5 = exports.grey5 = "#e0e2e2"; // onyx20
var grey10 = exports.grey10 = "#d0d3d3"; //quartz
var grey15 = exports.grey15 = "#bdc0c0"; // onyx40
var grey20 = exports.grey20 = "#a9adad"; // granite
var grey30 = exports.grey30 = "#878a8c"; // slate
var grey40 = exports.grey40 = "#53575b"; // onyx
var grey60 = exports.grey60 = "#3a3d40"; // onyx110

var grey = exports.grey = grey30;

var text120 = exports.text120 = "#212225"; // onyxtext
var black = exports.black = "#0d0f10";
var white = exports.white = "#f9f9f9";

/* Util Colors */
var colorError = exports.colorError = "orange"; // TODO:red10;
var colorSuccess = exports.colorSuccess = "#a3d287";
var colorWarn = exports.colorWarn = "#ffd072";

var colorLink30 = exports.colorLink30 = "#177c9c"; // blue 600
var colorLink = exports.colorLink = colorLink30;
var colorLinkHover = exports.colorLinkHover = "yellow"; // TODO:blue20;

//normal 16px/1.4em
var sans = exports.sans = "BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Arial,sans-serif;";
var serif = exports.serif = "\"Baskerville\", \"Palatino\", \"Palatino Linotype\", \"Georgia\", \"Times New Roman\", serif";
var monospace = exports.monospace = "\"Courier New\", Courier, monospace";

/* effectively 16px (16px * 100% = 16px) but respects users' special needs */
var fontSizeRoot = exports.fontSizeRoot = "100%";

/* desired px / 16px (root size) = rem */
var fontSize18 = exports.fontSize18 = "1.125rem";
var fontSize28 = exports.fontSize28 = "1.75rem";
var fontSize42 = exports.fontSize42 = "2.625rem";

var lineHeightTight = exports.lineHeightTight = 1.2;
var lineHeight = exports.lineHeight = 1.4;

/* text_transform variables (may not internationalize so variablelize) */
var capitalize = exports.capitalize = "capitalize";
var uppercase = exports.uppercase = "uppercase";

/* Spacing Variables  */

var spacing4 = exports.spacing4 = "0.25rem"; /* 4px */
var spacing8 = exports.spacing8 = "0.5rem"; /* 8px */
var spacing16 = exports.spacing16 = "1rem"; /* 16px */
var spacing32 = exports.spacing32 = "2rem"; /* 32px */
var spacing64 = exports.spacing64 = "4rem"; /* 64px */
var spacing128 = exports.spacing128 = "8rem"; /* 128px */

/* -- MATERIAL BREAKPOINTS -- */
var breakWidth400 = exports.breakWidth400 = "400px";
var breakWidth480 = exports.breakWidth480 = "480px";
var breakWidth600 = exports.breakWidth600 = "600px";
var breakWidth840 = exports.breakWidth840 = "840px";
var breakWidth960 = exports.breakWidth960 = "960px";
var breakWidth1280 = exports.breakWidth1280 = "1280px";
var breakWidth1440 = exports.breakWidth1440 = "1440px";
var breakWidth1600 = exports.breakWidth1600 = "1600px";

var breakWidthMax = exports.breakWidthMax = breakWidth1600;

/*
According to material design, the gutter width should be:
	16px (1em) when the smallest width of the devices is < 600
	24px (1.5em) otherwise
*/
var breakWidthGutterShift = exports.breakWidthGutterShift = breakWidth600;

var gutter = exports.gutter = "var(--gutter, 1.5rem)";