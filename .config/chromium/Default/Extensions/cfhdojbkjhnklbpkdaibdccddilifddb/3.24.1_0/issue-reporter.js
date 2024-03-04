/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nhtml:not([dir=\"rtl\"]) io-highlighter .options button,\nhtml[dir=\"rtl\"] io-highlighter .options button\n{\n  margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-highlighter,\nio-highlighter *,\nio-highlighter *::before,\nio-highlighter *::after\n{\n  box-sizing: border-box;\n}\n\nio-highlighter\n{\n  display: block;\n  position: relative;\n  border: 1px solid #979797;\n}\n\nio-highlighter .split\n{\n  display: flex;\n  height: 100%;\n}\n\nio-highlighter .options\n{\n  width: 95px;\n  padding: 12px;\n  border-right: 1px solid #979797;\n  color: #4A4A4A;\n  background-color: #f1f1f1;\n}\n\nio-highlighter canvas\n{\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  pointer-events: none;\n  flex-grow: 1;\n  touch-action: none;\n}\n\nio-highlighter[drawing] canvas\n{\n  pointer-events: all;\n}\n\nio-highlighter .options .highlight\n{\n  background-image: url(/skin/icons/highlight.svg?off#off);\n}\n\nio-highlighter[drawing=\"highlight\"] .options .highlight\n{\n  background-image: url(/skin/icons/highlight.svg?on#on);\n}\n\nio-highlighter .options .hide\n{\n  background-image: url(/skin/icons/hide.svg?off#off);\n}\n\nio-highlighter[drawing=\"hide\"] .options .hide\n{\n  background-image: url(/skin/icons/hide.svg?on#on);\n}\n\nio-highlighter .options .highlight,\nio-highlighter .options .hide\n{\n  width: 70px;\n  min-height: 70px;\n  margin-bottom: 12px;\n  padding: 0;\n  padding-top: 40px;\n  border-width: 0;\n  border-radius: 12px;\n  outline: none;\n  color: inherit;\n  background-repeat: no-repeat;\n  background-position: center 12px;\n  font-size: 0.7rem;\n  word-break: break-all;\n}\n\nio-highlighter[drawing=\"highlight\"] .options .highlight,\nio-highlighter[drawing=\"hide\"] .options .hide\n{\n  color: #FFF;\n  background-color: #9b9b9b;\n}\n\nio-highlighter .closer\n{\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  background-color: #4a4a4a;\n  cursor: pointer;\n  transform: translateX(-12px) translateY(-12px);\n}\n\nio-highlighter .closer img\n{\n  width: 12px;\n  margin: 6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-steps\n{\n  display: flex;\n  position: relative;\n  margin: 0;\n  margin-top: 2rem;\n  padding: 0;\n  justify-content: space-between;\n}\n\n/* this element is used only to decorate via horizontal line */\nio-steps::before\n{\n  position: absolute;\n  z-index: -1;\n  top: 12px;\n  width: 100%;\n  height: 1px;\n  background-color: #bcbcbc;\n  font-size: 1px;\n  line-height: 1px;\n  content: \" \";\n}\n\nhtml:not([dir=\"rtl\"]) io-steps button,\nhtml[dir=\"rtl\"] io-steps button\n{\n  margin: initial;\n  padding: initial;\n}\n\nio-steps button\n{\n  min-width: 80px;\n  border: 0;\n  outline: none;\n  color: #0797E1;\n  background: #f3f3f3;\n  font-size: small;\n  font-weight: initial;\n  text-transform: inherit;\n}\n\nio-steps button::before\n{\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: auto;\n  margin-bottom: 8px;\n  border-radius: 12px;\n  color: #fafbfd;\n  background-color: #0797E1;\n  font-size: 0.8rem;\n  font-weight: 400;\n  line-height: 24px;\n  content: attr(data-value);\n}\n\nio-steps button:disabled::before\n{\n  background-color: #9b9b9b;\n}\n\nio-steps button:disabled\n{\n  color: #d8d8d8;\n}\n\nio-steps button.completed::before\n{\n  content: \"✔\";\n  animation: io-steps-completed 0.3s ease-in-out;\n}\n\n@keyframes io-steps-completed\n{\n  0%\n  {\n    content: \" \";\n  }\n\n  30%\n  {\n    font-size: 0;\n    content: \"✔\";\n    transform: scale(0.5);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(909);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(742);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(873);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_steps_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(366);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_highlighter_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(985);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_highlighter_fixes_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(565);
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_common_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_steps_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_highlighter_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_highlighter_fixes_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nhtml\n{\n  font-size: 16px;\n}\n\nbody\n{\n  display: flex;\n  flex-direction: column;\n  margin: 0rem;\n  color: #494949;\n  background-color: #F3F3F3;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\ninput,\nbutton\n{\n  font-family: inherit;\n}\n\nheader,\nmain,\nfooter\n{\n  width: 46.3rem;\n}\n\nheader\n{\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.2rem;\n  margin-bottom: 2rem;\n  align-items: stretch;\n}\n\nheader > .logo\n{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#logo\n{\n  height: 2.8rem;\n}\n\n.logo > p\n{\n  margin: 0;\n  margin-top: 1.2rem;\n  padding: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.8rem;\n  text-transform: uppercase;\n}\n\nmain\n{\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 1.4rem;\n  flex-grow: 1;\n}\n\nmain,\n#other-issues,\n.modalContent\n{\n  border: 1px solid #CDCDCD;\n  background-color: #FFF;\n}\n\n.page:not([hidden])\n{\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.page > p\n{\n  font-size: 0.9rem;\n}\n\nmain h1\n{\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n}\n\n#typeSelectorGroup\n{\n  font-size: 1rem;\n}\n\n#typeSelectorGroup > label\n{\n  font-weight: 700;\n}\n\n#typeSelectorGroup > p\n{\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n  font-size: 0.9rem;\n}\n\n#typeSelectorGroup > p:first-of-type\n{\n  margin-bottom: 30px;\n}\n\nhtml:not([dir=\"rtl\"]) #typeSelectorGroup > p\n{\n  margin-left: 30px;\n}\n\nhtml[dir=\"rtl\"] #typeSelectorGroup > p\n{\n  margin-right: 30px;\n}\n\n#anonymousSubmissionContainer\n{\n  margin-top: 0.5em;\n}\n\n#anonymousSubmissionWarning,\n#error\n{\n  margin-top: 0.3em;\n  margin-bottom: 1em;\n  color: var(--color-error);\n}\n\n#comment\n{\n  min-height: 2em;\n  flex-grow: 1;\n}\n\n#sendingProgressContainer:not([hidden])\n{\n  display: flex;\n  flex-direction: row;\n  margin-top: 2rem;\n  justify-content: center;\n}\n\n#result\n{\n  border-width: 0px;\n  flex-grow: 1;\n}\n\n#showData\n{\n  margin: 0;\n}\n\n#showDataValue\n{\n  overflow: auto;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0 0 1rem;\n  padding: 20px;\n  border: 1px solid #CCC;\n  font-size: 1rem;\n  flex-grow: 1;\n}\n\nfooter,\nfooter > div\n{\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n\nfooter > div:not(#other-issues)\n{\n  display: flex;\n  flex-direction: row;\n  margin-top: 2rem;\n}\n\nfooter > div:not(#other-issues) > div\n{\n  flex-grow: 1;\n  align-self: flex-end;\n}\n\n#privacyPolicy,\n#other-issues\n{\n  font-size: 1rem;\n}\n\n#other-issues\n{\n  margin-top: 1rem;\n  padding-top: 16px;\n  background-image: url(/skin/icons/info-big.svg);\n  background-repeat: no-repeat;\n}\n\nhtml[dir=\"ltr\"] #other-issues\n{\n  padding-left: 72px;\n  background-position: 24px center;\n}\n\nhtml[dir=\"rtl\"] #other-issues\n{\n  padding-right: 72px;\n  background-position: calc(100% - 24px) center;\n}\n\n#other-issues a,\n#other-issues a:visited\n{\n  font-weight: 600;\n  text-decoration: none;\n}\n\n#privacyPolicy,\n#privacyPolicy:visited,\n#other-issues a,\n#other-issues a:visited\n{\n  color: #0797E1;\n}\n\n/*\n * Generic styles\n */\n\n[data-invisible=\"true\"]\n{\n  visibility: hidden;\n}\n\nbutton\n{\n  padding: 0.8rem 1.2rem;\n  background-color: transparent;\n  font-size: 1.125rem;\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\nhtml:not([dir=\"rtl\"]) button\n{\n  margin-left: 0.5rem;\n}\n\nhtml[dir=\"rtl\"] button\n{\n  margin-right: 0.5rem;\n}\n\nbutton.primary:not(.icon)\n{\n  border: 0px;\n  color: #FFF;\n  background-color: #0797E1;\n}\n\nbutton.primary:not([disabled]):not(.icon):hover\n{\n  box-shadow: inset 0 0 0 3px #005D80;\n}\n\nbutton.primary[disabled]:not(.icon)\n{\n  background-color: #5CBCE1;\n}\n\nbutton.secondary\n{\n  border: 1px solid #0797E1;\n  color: #0797E1;\n}\n\nbutton.secondary:hover\n{\n  box-shadow: inset 0 0 0 2px #0797E1;\n}\n\nbutton.link\n{\n  padding: 0.2rem;\n  border: 0px;\n  color: #0797E1;\n  background-color: transparent;\n  font-weight: 400;\n  text-decoration: underline;\n  text-transform: none;\n}\n\nbutton.link:hover\n{\n  color: #5CBCE1;\n}\n\nbutton.link:disabled,\nbutton.link:disabled:hover\n{\n  color: #ccc;\n  cursor: default;\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ntextarea\n{\n  border: 2px solid #0797E1;\n  font-size: 1.25rem;\n}\n\ninput[type=\"email\"]:invalid\n{\n  border-color: var(--color-error);\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"]\n{\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 0px 3px;\n  padding: 0px;\n  border: 0px;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=\"checkbox\"]\n{\n  background-image: url(/skin/icons/checkbox.svg?off#off);\n}\n\ninput[type=\"checkbox\"]:checked\n{\n  background-image: url(/skin/icons/checkbox.svg?on#on);\n}\n\ninput[type=\"radio\"]\n{\n  background-image: url(/skin/icons/radio.svg?normal#normal);\n}\n\ninput[type=\"radio\"]:hover\n{\n  background-image: url(/skin/icons/radio.svg?hover#hover);\n}\n\ninput[type=\"radio\"]:checked\n{\n  background-image: url(/skin/icons/radio.svg?selected#selected);\n}\n\n.modal:not([hidden])\n{\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 5rem;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modalContent\n{\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  padding: 2rem;\n  flex-grow: 1;\n  align-items: flex-end;\n}\n\n[aria-hidden=\"true\"]\n{\n  display: none !important;\n}\n\n#notification\n{\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 2px;\n  opacity: 0.8;\n  color: #4A4A4A;\n  background-color: #d8d8d8;\n  font-size: 1rem;\n}\n\n#notification-text\n{\n  text-align: center;\n  flex: 1;\n}\n\n.icon\n{\n  padding: 0px;\n  border: 0px;\n  background-color: transparent;\n}\n\n.icon:hover\n{\n  box-shadow: none;\n}\n\n.icon::before\n{\n  display: block;\n  border: 0.2rem solid transparent;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n\n.close.icon::before\n{\n  width: 1rem;\n  height: 1rem;\n}\n\n.icon.close.tertiary::before\n{\n  background-image: url(/skin/icons/close.svg?tertiary#tertiary);\n}\n\n.icon.close.tertiary:hover::before\n{\n  background-image: url(/skin/icons/close.svg?tertiary-hover#tertiary-hover);\n}\n\nbody[data-page=\"commentPage\"] #continue\n{\n  display: none;\n}\n\n#commentPage > label\n{\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n#anonymousSubmissionContainer\n{\n  font-size: 0.9rem;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"]\n{\n  vertical-align: top;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n/*\n  Used for translatable screen reader only content.\n  e.g.: Use instead of aria-label to avoid complex attribute value translation\n*/\n.sr-only\n{\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0px;\n  border: 0px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n@font-face\n{\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Source Sans Pro Light\"),\n    local(\"SourceSansPro-Light\"),\n    url(/skin/fonts/source-sans-pro-300.woff2)\n    format(\"woff2\");\n}\n\n@font-face\n{\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Source Sans Pro Regular\"),\n    local(\"SourceSansPro-Regular\"),\n    url(/skin/fonts/source-sans-pro-400.woff2)\n    format(\"woff2\");\n}\n\n@font-face\n{\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Source Sans Pro Bold\"),\n    local(\"SourceSansPro-Bold\"),\n    url(/skin/fonts/source-sans-pro-700.woff2)\n    format(\"woff2\");\n}\n\nbody\n{\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: inherit;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n:root\n{\n  --background-color-cta-primary: #0797E1;\n  --background-color-cta-primary-hover: #0797E1EE;\n  --background-color-cta-secondary: #FFF;\n  --background-color-cta-secondary-hover: #0001;\n  --background-color-error: #F7DDE1;\n  --background-color-info: #0797E1;\n  --background-color-secondary: #f7f7f7;\n  --background-color-primary: #fff;\n  --background-color-ternary: #edf9ff;\n  --border-color-cta-primary: var(--background-color-cta-primary);\n  --border-color-cta-secondary: var(--color-primary);\n  --border-color-secondary: #d2d2d2;\n  --border-color-primary: #e6e6e6;\n  --border-color-ternary: #c0e6f9;\n  --border-color-outline: #acacac;\n  --border-radius: 4px;\n  --border-radius-primary: 6px;\n  --border-style-primary: solid;\n  --border-width-thick: 4px;\n  --border-width-thin: 1px;\n  --box-shadow-primary: 0 2px 4px 0 hsla(0, 0%, 84%, 0.5);\n  --color-brand-primary: #ED1E45;\n  --color-cta-primary: #FFF;\n  --color-cta-secondary: #666;\n  --color-primary: #585858;\n  --color-secondary: #000;\n  --color-dimmed: #4A4A4A;\n  --color-critical: var(--color-brand-primary);\n  --color-default: #FF8F00;\n  --color-error: var(--color-brand-primary);\n  --color-link: #0797E1;\n  --color-info: #0797E1;\n  --color-premium: #EDA51E;\n  --color-premium-hover: #EB9B05;\n  --font-size-heavy: 20px;\n  --font-size-big: 17px;\n  --font-size-medium: 16px;\n  --font-size-primary: 13px;\n  --font-size-small: 12px;\n  --margin-primary: 16px;\n  --margin-secondary: calc(var(--margin-primary) / 2);\n  --padding-primary: 16px;\n  --padding-secondary: calc(var(--padding-primary) / 2);\n  --primary-outline: var(--border-color-outline) dotted 1px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 352:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 402:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 80:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 182:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 236:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 213:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 935:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      }); // Keep track if the deprecation warning has been logged at least once.

      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/id/shared/uuid.ts
const { crypto: uuid_crypto } = self;
function generateUUID() {
    const uuid = new Uint16Array(8);
    uuid_crypto.getRandomValues(uuid);
    uuid[3] = (uuid[3] & 0x0fff) | 0x4000;
    uuid[4] = (uuid[4] & 0x3fff) | 0x8000;
    const uuidChunks = [];
    for (let i = 0; i < uuid.length; i += 1) {
        const component = uuid[i].toString(16);
        uuidChunks.push(`000${component}`.slice(-4));
        if (i >= 1 && i <= 4)
            uuidChunks.push("-");
    }
    return uuidChunks.join("");
}
function getUUID() {
    return "randomUUID" in uuid_crypto ? uuid_crypto.randomUUID() : generateUUID();
}

;// CONCATENATED MODULE: ./src/id/shared/index.ts


;// CONCATENATED MODULE: ./js/common.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

function convertDoclinks()
{
  const links = document.querySelectorAll("a[data-doclink]");
  for (const link of links)
  {
    getDoclink(link.dataset.doclink).then((url) =>
    {
      link.target = link.target || "_blank";
      link.href = url;
    });
  }
}

function getDoclink(link)
{
  return browser.runtime.sendMessage({
    type: "app.get",
    what: "doclink",
    link
  });
}

function getErrorMessage(error)
{
  let message = null;
  if (error)
  {
    let messageId = error.reason || error.type;
    let placeholders = [];
    if (error.reason === "filter_unknown_option")
    {
      if (error.option)
        placeholders = [error.option];
      else
        messageId = "filter_invalid_option";
    }

    message = browser.i18n.getMessage(messageId, placeholders);
  }

  // Use a generic error message if we don't have one available yet
  if (!message)
  {
    message = browser.i18n.getMessage("filter_action_failed");
  }

  if (!error || typeof error.lineno !== "number")
    return message;

  return browser.i18n.getMessage("line", [
    error.lineno.toLocaleString(),
    message
  ]);
}

function getSourceAttribute(element)
{
  const sourceContainer = element.closest("[data-source]");

  if (!sourceContainer)
    return null;

  return sourceContainer.dataset.source;
}

;// CONCATENATED MODULE: ./js/dom.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

const $ = (selector, container) =>
{
  if (!container)
    container = document;
  return container.querySelector(selector);
};
const $$ = (selector, container) =>
{
  if (!container)
    container = document;
  return container.querySelectorAll(selector);
};

// basic copy and paste clipboard utility
const clipboard = {
  // warning: Firefox needs a proper event to work
  //          such click or mousedown or similar.
  copy(text)
  {
    const selection = document.getSelection();
    const selected = selection.rangeCount > 0 ?
                      selection.getRangeAt(0) : null;
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:fixed;top:-999px";
    document.body.appendChild(el).select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected)
    {
      selection.removeAllRanges();
      // simply putting back selected doesn't work anymore
      const range = document.createRange();
      range.setStart(selected.startContainer, selected.startOffset);
      range.setEnd(selected.endContainer, selected.endOffset);
      selection.addRange(range);
    }
  },
  // optionally accepts a `paste` DOM event
  // it uses global clipboardData, if available, otherwise.
  // i.e. input.onpaste = event => console.log(dom.clipboard.paste(event));
  paste(event)
  {
    if (!event)
      event = window;
    const clipboardData = event.clipboardData || window.clipboardData;
    return clipboardData ? clipboardData.getData("text") : "";
  }
};

// helper to provide the relative coordinates
// to the closest positioned containing element
function relativeCoordinates(event)
{
  return {x: event.offsetX, y: event.offsetY};
}

// helper to format as indented string any HTML/XML node
function asIndentedString(element, indentation = 0)
{
  // only the first time it's called
  if (!indentation)
  {
    // get the top meaningful element to parse
    if (element.nodeType === Node.DOCUMENT_NODE)
      element = element.documentElement;
    // accept only elements
    if (element.nodeType !== Node.ELEMENT_NODE)
      throw new Error("Unable to serialize " + element);
    // avoid original XML pollution at first iteration
    element = element.cloneNode(true);
  }
  const before = "  ".repeat(indentation + 1);
  const after = "  ".repeat(indentation);
  const doc = element.ownerDocument;
  for (const child of Array.from(element.childNodes))
  {
    const {nodeType} = child;
    if (nodeType === Node.ELEMENT_NODE || nodeType === Node.TEXT_NODE)
    {
      if (nodeType === Node.TEXT_NODE)
      {
        const content = child.textContent.trim();
        child.textContent = content.length ? `\n${before}${content}` : "";
      }
      else
      {
        element.insertBefore(doc.createTextNode(`\n${before}`), child);
        asIndentedString(child, indentation + 1);
      }
    }
    if (child === element.lastChild)
      element.appendChild(doc.createTextNode(`\n${after}`));
  }
  // inner calls don't need to bother serialization
  if (indentation)
    return "";
  // easiest way to recognize an HTML element from an XML one
  if (/^https?:\/\/www\.w3\.org\/1999\/xhtml$/.test(element.namespaceURI))
    return element.outerHTML;
  // all other elements should use XML serializer
  return new XMLSerializer().serializeToString(element);
}

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(935);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
;// CONCATENATED MODULE: ./src/i18n/i18n.ts

const i18nAttributes = ["alt", "placeholder", "title", "value"];
function assignAction(elements, action) {
    for (const element of elements) {
        switch (typeof action) {
            case "string":
                element.href = action;
                element.target = "_blank";
                break;
            case "function":
                element.href = "#";
                element.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    action();
                });
                break;
        }
    }
}
function* getRemainingLinks(parent) {
    const links = parent.querySelectorAll("a:not([data-i18n-index])");
    for (const link of links) {
        yield link;
    }
}
function setElementLinks(idOrElement, ...actions) {
    var _a;
    const element = typeof idOrElement === "string"
        ? document.getElementById(idOrElement)
        : idOrElement;
    if (element === null) {
        return;
    }
    const remainingLinks = getRemainingLinks(element);
    for (let i = 0; i < actions.length; i++) {
        const links = element.querySelectorAll(`a[data-i18n-index='${i}']`);
        if (links.length > 0) {
            assignAction(links, actions[i]);
            continue;
        }
        const link = remainingLinks.next();
        if ((_a = link.done) !== null && _a !== void 0 ? _a : false)
            continue;
        assignAction([link.value], actions[i]);
    }
}
function stripTagsUnsafe(text) {
    return text.replace(/<\/?[^>]+>/g, "");
}
function setElementText(element, stringName, args, children = []) {
    function processString(str, currentElement) {
        const match = /^(.*?)<(a|em|slot|strong)(\d)?>(.*?)<\/\2\3>(.*)$/.exec(str);
        if (match !== null) {
            const [, before, name, index, innerText, after] = match;
            processString(before, currentElement);
            if (name === "slot") {
                const e = children[Number(index)];
                if (e !== undefined) {
                    currentElement.appendChild(e);
                }
            }
            else {
                const e = document.createElement(name);
                if (typeof index !== "undefined") {
                    e.dataset.i18nIndex = index;
                }
                processString(innerText, e);
                currentElement.appendChild(e);
            }
            processString(after, currentElement);
        }
        else
            currentElement.appendChild(document.createTextNode(str));
    }
    while (element.lastChild !== null) {
        element.removeChild(element.lastChild);
    }
    processString(browser_polyfill_default().i18n.getMessage(stringName, args), element);
}
function loadI18nStrings() {
    function resolveStringNames(container) {
        var _a, _b;
        if (container === null || container === undefined) {
            return;
        }
        {
            const elements = container.querySelectorAll("[data-i18n]");
            for (const element of elements) {
                const children = Array.from(element.children);
                setElementText(element, (_a = element.dataset.i18n) !== null && _a !== void 0 ? _a : "", null, children);
            }
        }
        for (const attr of i18nAttributes) {
            const elements = container.querySelectorAll(`[data-i18n-${attr}]`);
            for (const element of elements) {
                const stringName = (_b = element.getAttribute(`data-i18n-${attr}`)) !== null && _b !== void 0 ? _b : "";
                element.setAttribute(attr, browser_polyfill_default().i18n.getMessage(stringName));
            }
        }
    }
    resolveStringNames(document);
    for (const template of document.querySelectorAll("template")) {
        resolveStringNames(template.content);
    }
}
async function setLanguageAttributes() {
    const localeInfo = await browser_polyfill_default().runtime.sendMessage({
        type: "app.get",
        what: "localeInfo"
    });
    document.documentElement.lang = localeInfo.locale;
    document.documentElement.dir = localeInfo.bidiDir;
}
function initI18n() {
    void setLanguageAttributes();
    loadI18nStrings();
}

;// CONCATENATED MODULE: ./src/i18n/index.ts


;// CONCATENATED MODULE: ./src/core/api/front/api.port.ts
let port;
const connectListeners = new Set();
const disconnectListeners = new Set();
const messageListeners = new Set();
function addConnectListener(listener) {
    connectListeners.add(listener);
    listener();
}
function addDisconnectListener(listener) {
    disconnectListeners.add(listener);
}
function addMessageListener(listener) {
    messageListeners.add(listener);
}
const connect = () => {
    if (port) {
        return port;
    }
    try {
        port = browser.runtime.connect({ name: "ui" });
    }
    catch (ex) {
        port = null;
        disconnectListeners.forEach((listener) => {
            listener();
        });
        return port;
    }
    port.onMessage.addListener((message) => {
        onMessage(message);
    });
    port.onDisconnect.addListener(onDisconnect);
    connectListeners.forEach((listener) => {
        listener();
    });
    return port;
};
function listen({ type, filter, ...options }) {
    addConnectListener(() => {
        if (port) {
            port.postMessage({
                type: `${type}.listen`,
                filter,
                ...options
            });
        }
    });
}
function onDisconnect() {
    port = null;
    setTimeout(() => connect(), 100);
}
function onMessage(message) {
    if (!message.type.endsWith(".respond")) {
        return;
    }
    messageListeners.forEach((listener) => {
        listener(message);
    });
}
function removeDisconnectListener(listener) {
    disconnectListeners.delete(listener);
}

;// CONCATENATED MODULE: ./src/core/api/front/api.ts

const platformToStore = {
    chromium: "chrome",
    edgehtml: "edge",
    gecko: "firefox"
};
const app = {
    get: async (what) => await send("app.get", { what }),
    getInfo: async () => {
        return await Promise.all([
            app.get("application"),
            app.get("platform")
        ]).then(([application, rawPlatform]) => {
            var _a;
            const platform = rawPlatform;
            let store;
            if (application !== "edge" && application !== "opera") {
                store = (_a = platformToStore[platform]) !== null && _a !== void 0 ? _a : "chrome";
            }
            else {
                store = application;
            }
            return {
                application,
                platform,
                store
            };
        });
    },
    listen: (filter) => {
        listen({ type: "app", filter });
    },
    open: async (what, options = {}) => await send("app.open", { what, ...options })
};
const ctalinks = {
    get: async (link, queryParams = {}) => await send("app.get", { what: "ctalink", link, queryParams })
};
const doclinks = {
    get: async (link) => await send("app.get", { what: "doclink", link })
};
const filters = {
    get: async () => await send("filters.get"),
    listen: (filter) => {
        listen({ type: "filters", filter });
    }
};
const notifications = {
    get: async (displayMethod) => await send("notifications.get", { displayMethod }),
    seen: async () => await send("notifications.seen")
};
const prefs = {
    get: async (key) => await send("prefs.get", { key }),
    listen: (filter) => {
        listen({ type: "prefs", filter });
    }
};
const premium = {
    activate: async (userId) => await send("premium.activate", { userId }),
    get: async () => await send("premium.get"),
    listen: (filter) => {
        listen({ type: "premium", filter });
    }
};
const requests = {
    listen: (filter, tabId) => {
        listen({ type: "requests", filter, tabId });
    }
};
async function send(sendType, rawArgs = {}) {
    const args = {
        ...rawArgs,
        type: sendType
    };
    return await browser.runtime.sendMessage(args);
}
const stats = {
    getBlockedPerPage: async (tab) => await send("stats.getBlockedPerPage", { tab }),
    getBlockedTotal: async () => await send("stats.getBlockedTotal"),
    listen: (filter) => {
        listen({ type: "stats", filter });
    }
};
const subscriptions = {
    add: async (url) => await send("subscriptions.add", { url }),
    get: async (options) => await send("subscriptions.get", options),
    getInitIssues: async () => await send("subscriptions.getInitIssues"),
    getRecommendations: async () => await send("subscriptions.getRecommendations"),
    listen: (filter) => {
        listen({ type: "subscriptions", filter });
    },
    remove: async (url) => await send("subscriptions.remove", { url })
};
const api = {
    addDisconnectListener: addDisconnectListener,
    addListener: addMessageListener,
    app,
    ctalinks,
    doclinks,
    filters,
    notifications,
    prefs,
    premium,
    requests,
    removeDisconnectListener: removeDisconnectListener,
    subscriptions,
    stats
};
connect();
/* harmony default export */ const front_api = (api);

;// CONCATENATED MODULE: ./src/core/api/front/index.ts




/* harmony default export */ const front = (front_api);

;// CONCATENATED MODULE: ./js/pages/issue-reporter/report.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */




const reportData = new DOMParser().parseFromString(
  "<report></report>",
  "text/xml"
);
let dataGatheringTabId = null;
let isMinimumTimeMet = false;

function getOriginalTabId()
{
  const tabId = parseInt(location.search.replace(/^\?/, ""), 10);
  if (!tabId && tabId !== 0)
  {
    console.warn("Missing tab id. Try appending '?1' to the end of the url.");
    throw new Error("invalid tab id");
  }

  return tabId;
}

front.addListener((message) =>
{
  if (message.type !== "requests.respond" || message.action !== "hits")
    return;

  const [request, filter, subscriptions] = message.args;
  const requestsContainerElem = $("requests", reportData);
  const filtersElem = $("filters", reportData);
  // ELEMHIDE hitLog request doesn't contain url
  if (request.url)
  {
    let requestElem = $(`[location="${request.url}"]`, reportData);
    if (!requestElem)
    {
      requestElem = reportData.createElement("request");
      requestElem.setAttribute("location", censorURL(request.url));
      requestElem.setAttribute("type", request.type);
      requestElem.setAttribute("docDomain", request.docDomain);
      requestElem.setAttribute("thirdParty", request.thirdParty);
      requestElem.setAttribute("count", 0);
      requestsContainerElem.appendChild(requestElem);
    }

    const countNum = parseInt(requestElem.getAttribute("count"), 10);
    requestElem.setAttribute("count", countNum + 1);

    if (filter)
      requestElem.setAttribute("filter", filter.text);
  }
  if (filter)
  {
    const escapedText = CSS.escape(filter.text);
    const existingFilter = $(`[text="${escapedText}"]`, reportData);
    if (existingFilter)
    {
      const countNum = parseInt(
        existingFilter.getAttribute("hitCount"),
        10
      );
      existingFilter.setAttribute("hitCount", countNum + 1);
    }
    else
    {
      const filterElem = reportData.createElement("filter");
      filterElem.setAttribute("text", filter.text);
      const subscriptionUrls = subscriptions
        .map((subscription) => subscription.url);
      filterElem.setAttribute("subscriptions", subscriptionUrls.join(" "));
      filterElem.setAttribute("hitCount", 1);
      filtersElem.appendChild(filterElem);
    }
  }
});

function collectRequests(tabId)
{
  reportData.documentElement.appendChild(reportData.createElement("requests"));
  reportData.documentElement.appendChild(reportData.createElement("filters"));
  return browser.tabs.get(tabId).then(tab =>
  {
    return browser.tabs.create({active: false, url: tab.url});
  }).then((tab) =>
  {
    dataGatheringTabId = tab.id;
    front.requests.listen(["hits"], dataGatheringTabId);

    function minimumTimeMet()
    {
      if (isMinimumTimeMet)
        return;

      isMinimumTimeMet = true;
      document.getElementById("showData").disabled = false;
      $("io-steps").dispatchEvent(new CustomEvent("requestcollected"));
      validateCommentsPage();
    }
    browser.tabs.onUpdated.addListener((updatedTabId, changeInfo) =>
    {
      if (updatedTabId == dataGatheringTabId && changeInfo.status == "complete")
        minimumTimeMet();
    });
    window.setTimeout(minimumTimeMet, 5000);
    window.addEventListener("beforeunload", (event) =>
    {
      closeRequestsCollectingTab();
    });
  });
}

let closedRequestsCollectingTab;
function closeRequestsCollectingTab()
{
  if (!closedRequestsCollectingTab)
    closedRequestsCollectingTab = browser.tabs.remove(dataGatheringTabId);

  return closedRequestsCollectingTab;
}

function retrieveAddonInfo()
{
  const element = reportData.createElement("adblock-plus");
  return browser.runtime.sendMessage({
    type: "app.get",
    what: "addonVersion"
  }).then(addonVersion =>
  {
    element.setAttribute("version", addonVersion);
    return browser.runtime.sendMessage({
      type: "app.get",
      what: "localeInfo"
    });
  }).then(({locale}) =>
  {
    element.setAttribute("locale", locale);
    reportData.documentElement.appendChild(element);
  });
}

function retrieveApplicationInfo()
{
  const element = reportData.createElement("application");
  return browser.runtime.sendMessage({
    type: "app.get",
    what: "application"
  }).then(application =>
  {
    element.setAttribute("name", capitalize(application));
    return browser.runtime.sendMessage({
      type: "app.get",
      what: "applicationVersion"
    });
  }).then(applicationVersion =>
  {
    element.setAttribute("version", applicationVersion);
    element.setAttribute("vendor", navigator.vendor);
    element.setAttribute("userAgent", navigator.userAgent);
    reportData.documentElement.appendChild(element);
  });
}

function retrievePlatformInfo()
{
  const element = reportData.createElement("platform");
  const {getBrowserInfo, sendMessage} = browser.runtime;
  return Promise.all([
    // Only Firefox supports browser.runtime.getBrowserInfo()
    (getBrowserInfo) ? getBrowserInfo() : null,
    sendMessage({
      type: "app.get",
      what: "platform"
    }),
    sendMessage({
      type: "app.get",
      what: "platformVersion"
    })
  ])
  .then(([browserInfo, platform, platformVersion]) =>
  {
    if (browserInfo)
    {
      element.setAttribute("build", browserInfo.buildID);
    }
    element.setAttribute("name", capitalize(platform));
    element.setAttribute("version", platformVersion);
    reportData.documentElement.appendChild(element);
  });
}

async function retrieveWindowInfo(tabId)
{
  const tab = await browser.tabs.get(tabId);
  let openerUrl = null;
  let referrerUrl = null;

  if (tab.openerTabId)
  {
    const openerTab = await browser.tabs.get(tab.openerTabId);
    openerUrl = openerTab.url;
  }

  // We need to use both browser.tabs.executeScript and
  // browser.scripting.executeScript because they're exclusive to
  // Manifest v2 and v3 respectively
  if (browser.scripting)
  {
    const [frameResult] = await browser.scripting.executeScript({
      target: {tabId},
      // Despite being an arrow function, its content is evaluated
      // in the context of the target page
      func: () => document.referrer
    });
    referrerUrl = frameResult.result;
  }
  else
  {
    [referrerUrl] = await browser.tabs.executeScript(tabId, {
      code: "document.referrer"
    });
  }

  const element = reportData.createElement("window");
  if (openerUrl)
  {
    element.setAttribute("opener", censorURL(openerUrl));
  }
  if (referrerUrl)
  {
    element.setAttribute("referrer", censorURL(referrerUrl));
  }
  element.setAttribute("url", censorURL(tab.url));
  reportData.documentElement.appendChild(element);
}

function retrieveSubscriptions()
{
  return front.subscriptions.get({
    ignoreDisabled: true,
    disabledFilters: true
  }).then(subscriptions =>
  {
    const element = reportData.createElement("subscriptions");
    for (const subscription of subscriptions)
    {
      if (!/^(http|https|ftp):/.test(subscription.url))
        continue;

      const now = Math.round(Date.now() / 1000);
      const subscriptionElement = reportData.createElement("subscription");
      subscriptionElement.setAttribute("id", subscription.url);
      if (subscription.version)
        subscriptionElement.setAttribute("version", subscription.version);
      if (subscription.lastDownload)
      {
        subscriptionElement.setAttribute("lastDownloadAttempt",
                                         subscription.lastDownload - now);
      }
      if (subscription.lastSuccess)
      {
        subscriptionElement.setAttribute("lastDownloadSuccess",
                                         subscription.lastSuccess - now);
      }
      if (subscription.softExpiration)
      {
        subscriptionElement.setAttribute("softExpiration",
                                         subscription.softExpiration - now);
      }
      if (subscription.expires)
      {
        subscriptionElement.setAttribute("hardExpiration",
                                         subscription.expires - now);
      }
      if (subscription.downloadStatus)
      {
        subscriptionElement.setAttribute("downloadStatus",
                                         subscription.downloadStatus);
      }
      subscriptionElement.setAttribute("disabledFilters",
                                       subscription.disabledFilters.length);
      element.appendChild(subscriptionElement);
    }
    reportData.documentElement.appendChild(element);
  });
}

function setConfigurationInfo(configInfo)
{
  let extensionsContainer = $("extensions", reportData);
  let optionsContainer = $("options", reportData);

  if (!configInfo)
  {
    if (extensionsContainer)
    {
      extensionsContainer.parentNode.removeChild(extensionsContainer);
    }
    if (optionsContainer)
    {
      optionsContainer.parentNode.removeChild(optionsContainer);
    }
    return;
  }

  if (!extensionsContainer)
  {
    extensionsContainer = reportData.createElement("extensions");
    reportData.documentElement.appendChild(extensionsContainer);
  }
  if (!optionsContainer)
  {
    optionsContainer = reportData.createElement("options");
    reportData.documentElement.appendChild(optionsContainer);
  }

  extensionsContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  const {extensions, options} = configInfo;

  for (const id in options)
  {
    const element = reportData.createElement("option");
    element.setAttribute("id", id);
    element.textContent = options[id];
    optionsContainer.appendChild(element);
  }

  for (const extension of extensions)
  {
    const element = reportData.createElement("extension");
    element.setAttribute("id", extension.id);
    element.setAttribute("name", extension.name);
    element.setAttribute("type", extension.type);
    if (extension.version)
    {
      element.setAttribute("version", extension.version);
    }
    extensionsContainer.appendChild(element);
  }
}

// Chrome doesn't update the JavaScript context to reflect changes in the
// extension's permissions so we need to proxy our calls through a frame that
// loads after we request the necessary permissions
// https://bugs.chromium.org/p/chromium/issues/detail?id=594703
function proxyApiCall(apiId, ...args)
{
  return new Promise((resolve) =>
  {
    const iframe = document.createElement("iframe");
    iframe.hidden = true;
    iframe.src = browser.runtime.getURL("proxy.html");
    iframe.onload = () =>
    {
      function callback(...results)
      {
        document.body.removeChild(iframe);
        resolve(results[0]);
      }

      // The following APIs are injected at runtime so we can't rely on our
      // promise polyfill. Therefore we simplify things by proxying calls even
      // if the API has been made available to us in the same frame.
      const proxy = iframe.contentWindow.browser;
      switch (apiId)
      {
        case "contentSettings.cookies":
          if ("contentSettings" in proxy)
          {
            // browser.contentSettings is not supported by webextension-polyfill
            // so we need to fall back to using callbacks as defined by Chrome
            proxy.contentSettings.cookies.get(...args, callback);
          }
          else
          {
            callback(null);
          }
          break;
        case "contentSettings.javascript":
          if ("contentSettings" in proxy)
          {
            // browser.contentSettings is not supported by webextension-polyfill
            // so we need to fall back to using callbacks as defined by Chrome
            proxy.contentSettings.javascript.get(...args, callback);
          }
          else
          {
            callback(null);
          }
          break;
        case "management.getAll":
          if ("getAll" in proxy.management)
          {
            proxy.management.getAll(...args).then(callback);
          }
          else
          {
            callback(null);
          }
          break;
      }
    };
    document.body.appendChild(iframe);
  });
}

function retrieveExtensions()
{
  return proxyApiCall("management.getAll")
    .then((installed) =>
    {
      const extensions = [];

      for (const extension of installed)
      {
        if (!extension.enabled || extension.type != "extension")
          continue;

        extensions.push({
          id: extension.id,
          name: extension.name,
          type: "extension",
          version: extension.version
        });
      }

      const {plugins} = navigator;
      for (const plugin of plugins)
      {
        extensions.push({
          id: plugin.filename,
          name: plugin.name,
          type: "plugin"
        });
      }

      return extensions;
    })
    .catch((err) =>
    {
      console.error("Could not retrieve list of extensions");
      return [];
    });
}

function retrieveOptions()
{
  // Firefox doesn't support browser.contentSettings API
  if (!("contentSettings" in browser))
    return Promise.resolve({});

  let tabId;
  try
  {
    tabId = getOriginalTabId();
  }
  catch (ex)
  {
    return Promise.reject(ex);
  }

  return browser.tabs.get(tabId)
    .then((tab) =>
    {
      const details = {primaryUrl: tab.url, incognito: tab.incognito};

      return Promise.all([
        proxyApiCall("contentSettings.cookies", details),
        proxyApiCall("contentSettings.javascript", details),
        tab.incognito
      ]);
    })
    .then(([cookies, javascript, incognito]) =>
    {
      return {
        cookieBehavior: cookies.setting == "allow" ||
          cookies.setting == "session_only",
        javascript: javascript.setting == "allow",
        privateBrowsing: incognito
      };
    })
    .catch((err) =>
    {
      console.error("Could not retrieve configuration options");
      return {};
    });
}

function updateConfigurationInfo(isAccessible)
{
  if (!isAccessible)
  {
    setConfigurationInfo(null);
    return Promise.resolve();
  }

  return Promise.all([
    retrieveExtensions(),
    retrieveOptions()
  ])
  .then(([extensions, options]) =>
  {
    setConfigurationInfo({extensions, options});
  });
}

function capitalize(str)
{
  return str[0].toUpperCase() + str.slice(1);
}

function censorURL(url)
{
  return url.replace(/([?;&/#][^?;&/#]+?=)[^?;&/#]+/g, "$1*");
}

function setReportType(event)
{
  reportData.documentElement.setAttribute("type", event.target.value);
}

for (const typeElement of $$("#typeSelectorGroup input"))
{
  typeElement.addEventListener("change", setReportType);
}

let commentElement = null;
$("#comment").addEventListener("input", (event) =>
{
  const comment = event.target.value;
  if (!comment)
  {
    if (commentElement)
    {
      commentElement.parentNode.removeChild(commentElement);
      commentElement = null;
    }
  }
  else if (commentElement)
  {
    commentElement.textContent = comment;
  }
  else
  {
    commentElement = reportData.createElement("comment");
    commentElement.textContent = comment;
    reportData.documentElement.appendChild(commentElement);
  }
});

const anonSubmissionField = $("#anonymousSubmission");
const emailField = $("#email");
emailField.addEventListener("input", validateCommentsPage);
anonSubmissionField.addEventListener("click", validateCommentsPage);

const emailElement = reportData.createElement("email");
function validateCommentsPage()
{
  const sendButton = $("#send");
  $("#anonymousSubmissionWarning").setAttribute(
    "data-invisible",
    !anonSubmissionField.checked
  );
  if (anonSubmissionField.checked)
  {
    emailField.value = "";
    emailField.disabled = true;
    sendButton.disabled = !isMinimumTimeMet;
    if (emailElement.parentNode)
      emailElement.parentNode.removeChild(emailElement);
  }
  else
  {
    emailField.disabled = false;

    const value = emailField.value.trim();
    emailElement.textContent = value;
    reportData.documentElement.appendChild(emailElement);
    sendButton.disabled = (value == "" || !emailField.validity.valid ||
      !isMinimumTimeMet);
  }
  $("io-steps").dispatchEvent(
    new CustomEvent("formvalidated", {detail: !sendButton.disabled})
  );
}

function collectData()
{
  let tabId;
  try
  {
    tabId = getOriginalTabId();
  }
  catch (ex)
  {
    return Promise.reject(ex);
  }

  return Promise.all([
    retrieveAddonInfo(),
    retrieveApplicationInfo(),
    retrievePlatformInfo(),
    retrieveWindowInfo(tabId),
    collectRequests(tabId),
    retrieveSubscriptions()
  ]).then(() => reportData);
}

;// CONCATENATED MODULE: ./node_modules/@ungap/weakmap/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var esm_self = {};
try { esm_self.WeakMap = WeakMap; }
catch (WeakMap) {
  // this could be better but 90% of the time
  // it's everything developers need as fallback
  esm_self.WeakMap = (function (id, Object) {'use strict';
    var dP = Object.defineProperty;
    var hOP = Object.hasOwnProperty;
    var proto = WeakMap.prototype;
    proto.delete = function (key) {
      return this.has(key) && delete key[this._];
    };
    proto.get = function (key) {
      return this.has(key) ? key[this._] : void 0;
    };
    proto.has = function (key) {
      return hOP.call(key, this._);
    };
    proto.set = function (key, value) {
      dP(key, this._, {configurable: true, value: value});
      return this;
    };
    return WeakMap;
    function WeakMap(iterable) {
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
      if (iterable)
        iterable.forEach(add, this);
    }
    function add(pair) {
      this.set(pair[0], pair[1]);
    }
  }(Math.random(), Object));
}
/* harmony default export */ const esm = (esm_self.WeakMap);

;// CONCATENATED MODULE: ./node_modules/@ungap/essential-weakset/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var essential_weakset_esm_self = {};
try { essential_weakset_esm_self.WeakSet = WeakSet; }
catch (WeakSet) {
  (function (id, dP) {
    var proto = WeakSet.prototype;
    proto.add = function (object) {
      if (!this.has(object))
        dP(object, this._, {value: true, configurable: true});
      return this;
    };
    proto.has = function (object) {
      return this.hasOwnProperty.call(object, this._);
    };
    proto.delete = function (object) {
      return this.has(object) && delete object[this._];
    };
    essential_weakset_esm_self.WeakSet = WeakSet;
    function WeakSet() {'use strict';
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
    }
  }(Math.random(), Object.defineProperty));
}
/* harmony default export */ const essential_weakset_esm = (essential_weakset_esm_self.WeakSet);

;// CONCATENATED MODULE: ./node_modules/uarray/esm/index.js
const {isArray} = Array;
const {indexOf, slice} = [];



;// CONCATENATED MODULE: ./node_modules/domdiff/esm/utils.js


const append = (get, parent, children, start, end, before) => {
  const isSelect = 'selectedIndex' in parent;
  let noSelection = isSelect;
  while (start < end) {
    const child = get(children[start], 1);
    parent.insertBefore(child, before);
    if (isSelect && noSelection && child.selected) {
      noSelection = !noSelection;
      let {selectedIndex} = parent;
      parent.selectedIndex = selectedIndex < 0 ?
        start :
        indexOf.call(parent.querySelectorAll('option'), child);
    }
    start++;
  }
};

const eqeq = (a, b) => a == b;

const identity = O => O;

const utils_indexOf = (
  moreNodes,
  moreStart,
  moreEnd,
  lessNodes,
  lessStart,
  lessEnd,
  compare
) => {
  const length = lessEnd - lessStart;
  /* istanbul ignore if */
  if (length < 1)
    return -1;
  while ((moreEnd - moreStart) >= length) {
    let m = moreStart;
    let l = lessStart;
    while (
      m < moreEnd &&
      l < lessEnd &&
      compare(moreNodes[m], lessNodes[l])
    ) {
      m++;
      l++;
    }
    if (l === lessEnd)
      return moreStart;
    moreStart = m + 1;
  }
  return -1;
};

const isReversed = (
  futureNodes,
  futureEnd,
  currentNodes,
  currentStart,
  currentEnd,
  compare
) => {
  while (
    currentStart < currentEnd &&
    compare(
      currentNodes[currentStart],
      futureNodes[futureEnd - 1]
    )) {
      currentStart++;
      futureEnd--;
    };
  return futureEnd === 0;
};

const next = (get, list, i, length, before) => i < length ?
              get(list[i], 0) :
              (0 < i ?
                get(list[i - 1], -0).nextSibling :
                before);

const remove = (get, children, start, end) => {
  while (start < end)
    drop(get(children[start++], -1));
};

// - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -

const DELETION = -1;
const INSERTION = 1;
const SKIP = 0;
const SKIP_OND = 50;

const HS = (
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges
) => {

  let k = 0;
  /* istanbul ignore next */
  let minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  const link = Array(minLen++);
  const tresh = Array(minLen);
  tresh[0] = -1;

  for (let i = 1; i < minLen; i++)
    tresh[i] = currentEnd;

  const nodes = currentNodes.slice(currentStart, currentEnd);

  for (let i = futureStart; i < futureEnd; i++) {
    const index = nodes.indexOf(futureNodes[i]);
    if (-1 < index) {
      const idxInOld = index + currentStart;
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */
      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;
  while (tresh[k] > currentEnd) --k;

  minLen = currentChanges + futureChanges - k;
  const diff = Array(minLen);
  let ptr = link[k];
  --futureEnd;
  while (ptr) {
    const {newi, oldi} = ptr;
    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }
    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }
    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }
  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }
  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }
  return diff;
};

// this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561
const OND = (
  futureNodes,
  futureStart,
  rows,
  currentNodes,
  currentStart,
  cols,
  compare
) => {
  const length = rows + cols;
  const v = [];
  let d, k, r, c, pv, cv, pd;
  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND)
      return null;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];
    for (k = -d; k <= d; k += 2) {
      if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }
      r = c - k;
      while (
        c < cols &&
        r < rows &&
        compare(
          currentNodes[currentStart + c],
          futureNodes[futureStart + r]
        )
      ) {
        c++;
        r++;
      }
      if (c === cols && r === rows) {
        break outer;
      }
      cv[d + k] = c;
    }
  }

  const diff = Array(d / 2 + length / 2);
  let diffIdx = diff.length - 1;
  for (d = v.length - 1; d >= 0; d--) {
    while (
      c > 0 &&
      r > 0 &&
      compare(
        currentNodes[currentStart + c - 1],
        futureNodes[futureStart + r - 1]
      )
    ) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }
    if (!d)
      break;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    k = c - r;
    if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }
  return diff;
};

const applyDiff = (
  diff,
  get,
  parentNode,
  futureNodes,
  futureStart,
  currentNodes,
  currentStart,
  currentLength,
  before
) => {
  const live = [];
  const length = diff.length;
  let currentIndex = currentStart;
  let i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;
      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.push(futureNodes[futureStart]);
        append(
          get,
          parentNode,
          futureNodes,
          futureStart++,
          futureStart,
          currentIndex < currentLength ?
            get(currentNodes[currentIndex], 0) :
            before
        );
        break;
      case DELETION:
        currentIndex++;
        break;
    }
  }
  i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;
      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (-1 < live.indexOf(currentNodes[currentStart]))
          currentStart++;
        else
          remove(
            get,
            currentNodes,
            currentStart++,
            currentStart
          );
        break;
    }
  }
};

const findK = (ktr, length, j) => {
  let lo = 1;
  let hi = length;
  while (lo < hi) {
    const mid = ((lo + hi) / 2) >>> 0;
    if (j < ktr[mid])
      hi = mid;
    else
      lo = mid + 1;
  }
  return lo;
}

const smartDiff = (
  get,
  parentNode,
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges,
  currentLength,
  compare,
  before
) => {
  applyDiff(
    OND(
      futureNodes,
      futureStart,
      futureChanges,
      currentNodes,
      currentStart,
      currentChanges,
      compare
    ) ||
    HS(
      futureNodes,
      futureStart,
      futureEnd,
      futureChanges,
      currentNodes,
      currentStart,
      currentEnd,
      currentChanges
    ),
    get,
    parentNode,
    futureNodes,
    futureStart,
    currentNodes,
    currentStart,
    currentLength,
    before
  );
};

const drop = node => (node.remove || dropChild).call(node);

function dropChild() {
  const {parentNode} = this;
  /* istanbul ignore else */
  if (parentNode)
    parentNode.removeChild(this);
}

;// CONCATENATED MODULE: ./node_modules/domdiff/esm/index.js
/*! (c) 2018 Andrea Giammarchi (ISC) */



const domdiff = (
  parentNode,     // where changes happen
  currentNodes,   // Array of current items/nodes
  futureNodes,    // Array of future items/nodes
  options         // optional object with one of the following properties
                  //  before: domNode
                  //  compare(generic, generic) => true if same generic
                  //  node(generic) => Node
) => {
  if (!options)
    options = {};

  const compare = options.compare || eqeq;
  const get = options.node || identity;
  const before = options.before == null ? null : get(options.before, 0);

  const currentLength = currentNodes.length;
  let currentEnd = currentLength;
  let currentStart = 0;

  let futureEnd = futureNodes.length;
  let futureStart = 0;

  // common prefix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentStart], futureNodes[futureStart])
  ) {
    currentStart++;
    futureStart++;
  }

  // common suffix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])
  ) {
    currentEnd--;
    futureEnd--;
  }

  const currentSame = currentStart === currentEnd;
  const futureSame = futureStart === futureEnd;

  // same list
  if (currentSame && futureSame)
    return futureNodes;

  // only stuff to add
  if (currentSame && futureStart < futureEnd) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      next(get, currentNodes, currentStart, currentLength, before)
    );
    return futureNodes;
  }

  // only stuff to remove
  if (futureSame && currentStart < currentEnd) {
    remove(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  const currentChanges = currentEnd - currentStart;
  const futureChanges = futureEnd - futureStart;
  let i = -1;

  // 2 simple indels: the shortest sequence is a subsequence of the longest
  if (currentChanges < futureChanges) {
    i = utils_indexOf(
      futureNodes,
      futureStart,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    );
    // inner diff
    if (-1 < i) {
      append(
        get,
        parentNode,
        futureNodes,
        futureStart,
        i,
        get(currentNodes[currentStart], 0)
      );
      append(
        get,
        parentNode,
        futureNodes,
        i + currentChanges,
        futureEnd,
        next(get, currentNodes, currentEnd, currentLength, before)
      );
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
    i = utils_indexOf(
      currentNodes,
      currentStart,
      currentEnd,
      futureNodes,
      futureStart,
      futureEnd,
      compare
    );
    // outer diff
    if (-1 < i) {
      remove(
        get,
        currentNodes,
        currentStart,
        i
      );
      remove(
        get,
        currentNodes,
        i + futureChanges,
        currentEnd
      );
      return futureNodes;
    }
  }

  // common case with one replacement for many nodes
  // or many nodes replaced for a single one
  /* istanbul ignore else */
  if ((currentChanges < 2 || futureChanges < 2)) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      get(currentNodes[currentStart], 0)
    );
    remove(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too

  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.
  if (
    currentChanges === futureChanges &&
    isReversed(
      futureNodes,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    )
  ) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      next(get, currentNodes, currentEnd, currentLength, before)
    );
    return futureNodes;
  }

  // last resort through a smart diff
  smartDiff(
    get,
    parentNode,
    futureNodes,
    futureStart,
    futureEnd,
    futureChanges,
    currentNodes,
    currentStart,
    currentEnd,
    currentChanges,
    currentLength,
    compare,
    before
  );

  return futureNodes;
};

/* harmony default export */ const domdiff_esm = (domdiff);

;// CONCATENATED MODULE: ./node_modules/@ungap/custom-event/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var custom_event_esm_self = {};
custom_event_esm_self.CustomEvent = typeof CustomEvent === 'function' ?
  CustomEvent :
  (function (__p__) {
    CustomEvent[__p__] = new CustomEvent('').constructor[__p__];
    return CustomEvent;
    function CustomEvent(type, init) {
      if (!init) init = {};
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, !!init.bubbles, !!init.cancelable, init.detail);
      return e;
    }
  }('prototype'));
/* harmony default export */ const custom_event_esm = (custom_event_esm_self.CustomEvent);

;// CONCATENATED MODULE: ./node_modules/@ungap/essential-map/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var essential_map_esm_self = {};
try { essential_map_esm_self.Map = Map; }
catch (Map) {
  essential_map_esm_self.Map = function Map() {
    var i = 0;
    var k = [];
    var v = [];
    return {
      delete: function (key) {
        var had = contains(key);
        if (had) {
          k.splice(i, 1);
          v.splice(i, 1);
        }
        return had;
      },
      forEach: function forEach(callback, context) {
        k.forEach(
          function (key, i)  {
            callback.call(context, v[i], key, this);
          },
          this
        );
      },
      get: function get(key) {
        return contains(key) ? v[i] : void 0;
      },
      has: function has(key) {
        return contains(key);
      },
      set: function set(key, value) {
        v[contains(key) ? i : (k.push(key) - 1)] = value;
        return this;
      }
    };
    function contains(v) {
      i = k.indexOf(v);
      return -1 < i;
    }
  };
}
/* harmony default export */ const essential_map_esm = (essential_map_esm_self.Map);

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/classes/Component.js




// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function Component() {
  return this; // this is needed in Edge !!!
}

// Component is lazily setup because it needs
// wire mechanism as lazy content
function setup(content) {
  // there are various weakly referenced variables in here
  // and mostly are to use Component.for(...) static method.
  const children = new esm;
  const create = Object.create;
  const createEntry = (wm, id, component) => {
    wm.set(id, component);
    return component;
  };
  const get = (Class, info, context, id) => {
    const relation = info.get(Class) || relate(Class, info);
    switch (typeof id) {
      case 'object':
      case 'function':
        const wm = relation.w || (relation.w = new esm);
        return wm.get(id) || createEntry(wm, id, new Class(context));
      default:
        const sm = relation.p || (relation.p = create(null));
        return sm[id] || (sm[id] = new Class(context));
    }
  };
  const relate = (Class, info) => {
    const relation = {w: null, p: null};
    info.set(Class, relation);
    return relation;
  };
  const set = context => {
    const info = new essential_map_esm;
    children.set(context, info);
    return info;
  };
  // The Component Class
  Object.defineProperties(
    Component,
    {
      // Component.for(context[, id]) is a convenient way
      // to automatically relate data/context to children components
      // If not created yet, the new Component(context) is weakly stored
      // and after that same instance would always be returned.
      for: {
        configurable: true,
        value(context, id) {
          return get(
            this,
            children.get(context) || set(context),
            context,
            id == null ?
              'default' : id
          );
        }
      }
    }
  );
  Object.defineProperties(
    Component.prototype,
    {
      // all events are handled with the component as context
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      // components will lazily define html or svg properties
      // as soon as these are invoked within the .render() method
      // Such render() method is not provided by the base class
      // but it must be available through the Component extend.
      // Declared components could implement a
      // render(props) method too and use props as needed.
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      // the state is a very basic/simple mechanism inspired by Preact
      state: lazyGetter('state', function () { return this.defaultState; }),
      // it is possible to define a default state that'd be always an object otherwise
      defaultState: {get() { return {}; }},
      // dispatch a bubbling, cancelable, custom event
      // through the first known/available node
      dispatch: {value(type, detail) {
        const {_wire$} = this;
        if (_wire$) {
          const event = new custom_event_esm(type, {
            bubbles: true,
            cancelable: true,
            detail
          });
          event.component = this;
          return (_wire$.dispatchEvent ?
                    _wire$ :
                    _wire$.firstChild
                  ).dispatchEvent(event);
        }
        return false;
      }},
      // setting some property state through a new object
      // or a callback, triggers also automatically a render
      // unless explicitly specified to not do so (render === false)
      setState: {value(state, render) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        if (render !== false)
          this.render();
        return this;
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || setValue(this, secret, fn.call(this, type));
    },
    set(value) {
      setValue(this, secret, value);
    }
  };
};

// shortcut to set value on get or set(value)
const setValue = (self, secret, value) =>
  Object.defineProperty(self, secret, {
    configurable: true,
    value: typeof value === 'function' ?
      function () {
        return (self._wire$ = value.apply(this, arguments));
      } :
      value
  })[secret]
;

Object.defineProperties(
  Component.prototype,
  {
    // used to distinguish better than instanceof
    ELEMENT_NODE: {value: 1},
    nodeType: {value: -1}
  }
);

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Intent.js
const attributes = {};
const intents = {};
const keys = [];
const Intent_hasOwnProperty = intents.hasOwnProperty;

let Intent_length = 0;

/* harmony default export */ const Intent = ({

  // used to invoke right away hyper:attributes
  attributes,

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (intent.indexOf('-') < 0) {
      if (!(intent in intents)) {
        Intent_length = keys.push(intent);
      }
      intents[intent] = callback;
    } else {
      attributes[intent] = callback;
    }
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < Intent_length; i++) {
      let key = keys[i];
      if (Intent_hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});

;// CONCATENATED MODULE: ./node_modules/@ungap/is-array/esm/index.js
var esm_isArray = Array.isArray || /* istanbul ignore next */ (function (toString) {
  /* istanbul ignore next */
  var $ = toString.call([]);
  /* istanbul ignore next */
  return function isArray(object) {
    return toString.call(object) === $;
  };
}({}.toString));
/* harmony default export */ const is_array_esm = (esm_isArray);

;// CONCATENATED MODULE: ./node_modules/@ungap/create-content/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var createContent = (function (document) {'use strict';
  var FRAGMENT = 'fragment';
  var TEMPLATE = 'template';
  var HAS_CONTENT = 'content' in create(TEMPLATE);

  var createHTML = HAS_CONTENT ?
    function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } :
    function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;
      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }
      append(content, childNodes);
      return content;
    };

  return function createContent(markup, type) {
    return (type === 'svg' ? createSVG : createHTML)(markup);
  };

  function append(root, childNodes) {
    var length = childNodes.length;
    while (length--)
      root.appendChild(childNodes[0]);
  }

  function create(element) {
    return element === FRAGMENT ?
      document.createDocumentFragment() :
      document.createElementNS('http://www.w3.org/1999/xhtml', element);
  }

  // it could use createElementNS when hasNode is there
  // but this fallback is equally fast and easier to maintain
  // it is also battle tested already in all IE
  function createSVG(svg) {
    var content = create(FRAGMENT);
    var template = create('div');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
    append(content, template.firstChild.childNodes);
    return content;
  }

}(document));
/* harmony default export */ const create_content_esm = (createContent);

;// CONCATENATED MODULE: ./node_modules/disconnected/esm/index.js
/*! (c) Andrea Giammarchi */
function disconnected(poly) {'use strict';
  var Event = poly.Event;
  var WeakSet = poly.WeakSet;
  var notObserving = true;
  var observer = null;
  return function observe(node) {
    if (notObserving) {
      notObserving = !notObserving;
      observer = new WeakSet;
      startObserving(node.ownerDocument);
    }
    observer.add(node);
    return node;
  };
  function startObserving(document) {
    var connected = new WeakSet;
    var disconnected = new WeakSet;
    try {
      (new MutationObserver(changes)).observe(
        document,
        {subtree: true, childList: true}
      );
    }
    catch(o_O) {
      var timer = 0;
      var records = [];
      var reschedule = function (record) {
        records.push(record);
        clearTimeout(timer);
        timer = setTimeout(
          function () {
            changes(records.splice(timer = 0, records.length));
          },
          0
        );
      };
      document.addEventListener(
        'DOMNodeRemoved',
        function (event) {
          reschedule({addedNodes: [], removedNodes: [event.target]});
        },
        true
      );
      document.addEventListener(
        'DOMNodeInserted',
        function (event) {
          reschedule({addedNodes: [event.target], removedNodes: []});
        },
        true
      );
    }
    function changes(records) {
      for (var
        record,
        length = records.length,
        i = 0; i < length; i++
      ) {
        record = records[i];
        dispatchAll(record.removedNodes, 'disconnected', disconnected, connected);
        dispatchAll(record.addedNodes, 'connected', connected, disconnected);
      }
    }
    function dispatchAll(nodes, type, wsin, wsout) {
      for (var
        node,
        event = new Event(type),
        length = nodes.length,
        i = 0; i < length;
        (node = nodes[i++]).nodeType === 1 &&
        dispatchTarget(node, event, type, wsin, wsout)
      );
    }
    function dispatchTarget(node, event, type, wsin, wsout) {
      if (observer.has(node) && !wsin.has(node)) {
        wsout.delete(node);
        wsin.add(node);
        node.dispatchEvent(event);
        /*
        // The event is not bubbling (perf reason: should it?),
        // hence there's no way to know if
        // stop/Immediate/Propagation() was called.
        // Should DOM Level 0 work at all?
        // I say it's a YAGNI case for the time being,
        // and easy to implement in user-land.
        if (!event.cancelBubble) {
          var fn = node['on' + type];
          if (fn)
            fn.call(node, event);
        }
        */
      }
      for (var
        // apparently is node.children || IE11 ... ^_^;;
        // https://github.com/WebReflection/disconnected/issues/1
        children = node.children || [],
        length = children.length,
        i = 0; i < length;
        dispatchTarget(children[i++], event, type, wsin, wsout)
      );
    }
  }
}
/* harmony default export */ const disconnected_esm = (disconnected);

;// CONCATENATED MODULE: ./node_modules/@ungap/import-node/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var importNode = (function (
  document,
  appendChild,
  cloneNode,
  createTextNode,
  importNode
) {
  var native = importNode in document;
  // IE 11 has problems with cloning templates:
  // it "forgets" empty childNodes. This feature-detects that.
  var fragment = document.createDocumentFragment();
  fragment[appendChild](document[createTextNode]('g'));
  fragment[appendChild](document[createTextNode](''));
  /* istanbul ignore next */
  var content = native ?
    document[importNode](fragment, true) :
    fragment[cloneNode](true);
  return content.childNodes.length < 2 ?
    function importNode(node, deep) {
      var clone = node[cloneNode]();
      for (var
        /* istanbul ignore next */
        childNodes = node.childNodes || [],
        length = childNodes.length,
        i = 0; deep && i < length; i++
      ) {
        clone[appendChild](importNode(childNodes[i], deep));
      }
      return clone;
    } :
    /* istanbul ignore next */
    (native ?
      document[importNode] :
      function (node, deep) {
        return node[cloneNode](!!deep);
      }
    );
}(
  document,
  'appendChild',
  'cloneNode',
  'createTextNode',
  'importNode'
));
/* harmony default export */ const import_node_esm = (importNode);

;// CONCATENATED MODULE: ./node_modules/@ungap/trim/esm/index.js
var trim = ''.trim || /* istanbul ignore next */ function () {
  return String(this).replace(/^\s+|\s+/g, '');
};
/* harmony default export */ const trim_esm = (trim);

;// CONCATENATED MODULE: ./node_modules/domconstants/esm/index.js
/*! (c) Andrea Giammarchi - ISC */

// Custom
var UID = '-' + Math.random().toFixed(6) + '%';
//                           Edge issue!

var UID_IE = false;

try {
  if (!(function (template, content, tabindex) {
    return content in template && (
      (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>'),
      template[content].childNodes[0].getAttribute(tabindex) == UID
    );
  }(document.createElement('template'), 'content', 'tabindex'))) {
    UID = '_dt: ' + UID.slice(1, -1) + ';';
    UID_IE = true;
  }
} catch(meh) {}

var UIDC = '<!--' + UID + '-->';

// DOM
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;



;// CONCATENATED MODULE: ./node_modules/domsanitizer/esm/index.js
/*! (c) Andrea Giammarchi - ISC */



/* harmony default export */ function domsanitizer_esm(template) {
  return template.join(UIDC)
          .replace(selfClosing, fullClosing)
          .replace(attrSeeker, attrReplacer);
}

var spaces = ' \\f\\n\\r\\t';
var almostEverything = '[^' + spaces + '\\/>"\'=]+';
var attrName = '[' + spaces + ']+' + almostEverything;
var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';

var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + UIDC + '\\2', 'gi');

function attrReplacer($0, $1, $2, $3) {
  return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}

function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + UID + ($2 || '"');
}

function fullClosing($0, $1, $2) {
  return VOID_ELEMENTS.test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');
}

;// CONCATENATED MODULE: ./node_modules/umap/esm/index.js
/* harmony default export */ const umap_esm = (_ => ({
  // About: get: _.get.bind(_)
  // It looks like WebKit/Safari didn't optimize bind at all,
  // so that using bind slows it down by 60%.
  // Firefox and Chrome are just fine in both cases,
  // so let's use the approach that works fast everywhere 👍
  get: key => _.get(key),
  set: (key, value) => (_.set(key, value), value)
}));

;// CONCATENATED MODULE: ./node_modules/domtagger/esm/walker.js






/* istanbul ignore next */
var normalizeAttributes = UID_IE ?
  function (attributes, parts) {
    var html = parts.join(' ');
    return parts.slice.call(attributes, 0).sort(function (left, right) {
      return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
  } :
  function (attributes, parts) {
    return parts.slice.call(attributes, 0);
  }
;

function find(node, path) {
  var length = path.length;
  var i = 0;
  while (i < length)
    node = node.childNodes[path[i++]];
  return node;
}

function parse(node, holes, parts, path) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var i = 0;
  while (i < length) {
    var child = childNodes[i];
    switch (child.nodeType) {
      case ELEMENT_NODE:
        var childPath = path.concat(i);
        parseAttributes(child, holes, parts, childPath);
        parse(child, holes, parts, childPath);
        break;
      case COMMENT_NODE:
        var textContent = child.textContent;
        if (textContent === UID) {
          parts.shift();
          holes.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ?
              Text(node, path) :
              Any(child, path.concat(i))
          );
        } else {
          switch (textContent.slice(0, 2)) {
            case '/*':
              if (textContent.slice(-2) !== '*/')
                break;
            case '\uD83D\uDC7B': // ghost
              node.removeChild(child);
              i--;
              length--;
          }
        }
        break;
      case TEXT_NODE:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          SHOULD_USE_TEXT_CONTENT.test(node.nodeName) &&
          trim_esm.call(child.textContent) === UIDC
        ) {
          parts.shift();
          holes.push(Text(node, path));
        }
        break;
    }
    i++;
  }
}

function parseAttributes(node, holes, parts, path) {
  var attributes = node.attributes;
  var cache = [];
  var remove = [];
  var array = normalizeAttributes(attributes, parts);
  var length = array.length;
  var i = 0;
  while (i < length) {
    var attribute = array[i++];
    var direct = attribute.value === UID;
    var sparse;
    if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
      var name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (cache.indexOf(name) < 0) {
        cache.push(name);
        var realName = parts.shift().replace(
          direct ?
            /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ :
            new RegExp(
              '^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")[\\S\\s]*',
              'i'
            ),
            '$1'
        );
        var value = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        if (direct)
          holes.push(Attr(value, path, realName, null));
        else {
          var skip = sparse.length - 2;
          while (skip--)
            parts.shift();
          holes.push(Attr(value, path, realName, sparse));
        }
      }
      remove.push(attribute);
    }
  }
  length = remove.length;
  i = 0;

  /* istanbul ignore next */
  var cleanValue = 0 < length && UID_IE && !('ownerSVGElement' in node);
  while (i < length) {
    // Edge HTML bug #16878726
    var attr = remove[i++];
    // IE/Edge bug lighterhtml#63 - clean the value or it'll persist
    /* istanbul ignore next */
    if (cleanValue)
      attr.value = '';
    // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode
    node.removeAttribute(attr.name);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?
  var nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // var script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    var script = document.createElement(nodeName);
    length = attributes.length;
    i = 0;
    while (i < length)
      script.setAttributeNode(attributes[i++].cloneNode(true));
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
}

function Any(node, path) {
  return {
    type: 'any',
    node: node,
    path: path
  };
}

function Attr(node, path, name, sparse) {
  return {
    type: 'attr',
    node: node,
    path: path,
    name: name,
    sparse: sparse
  };
}

function Text(node, path) {
  return {
    type: 'text',
    node: node,
    path: path
  };
}

;// CONCATENATED MODULE: ./node_modules/domtagger/esm/index.js
// globals


// utils






// local


// the domtagger 🎉
/* harmony default export */ const domtagger_esm = (domtagger);

var parsed = umap_esm(new esm);

function createInfo(options, template) {
  var markup = (options.convert || domsanitizer_esm)(template);
  var transform = options.transform;
  if (transform)
    markup = transform(markup);
  var content = create_content_esm(markup, options.type);
  cleanContent(content);
  var holes = [];
  parse(content, holes, template.slice(0), []);
  return {
    content: content,
    updates: function (content) {
      var updates = [];
      var len = holes.length;
      var i = 0;
      var off = 0;
      while (i < len) {
        var info = holes[i++];
        var node = find(content, info.path);
        switch (info.type) {
          case 'any':
            updates.push({fn: options.any(node, []), sparse: false});
            break;
          case 'attr':
            var sparse = info.sparse;
            var fn = options.attribute(node, info.name, info.node);
            if (sparse === null)
              updates.push({fn: fn, sparse: false});
            else {
              off += sparse.length - 2;
              updates.push({fn: fn, sparse: true, values: sparse});
            }
            break;
          case 'text':
            updates.push({fn: options.text(node), sparse: false});
            node.textContent = '';
            break;
        }
      }
      len += off;
      return function () {
        var length = arguments.length;
        if (len !== (length - 1)) {
          throw new Error(
            (length - 1) + ' values instead of ' + len + '\n' +
            template.join('${value}')
          );
        }
        var i = 1;
        var off = 1;
        while (i < length) {
          var update = updates[i - off];
          if (update.sparse) {
            var values = update.values;
            var value = values[0];
            var j = 1;
            var l = values.length;
            off += l - 2;
            while (j < l)
              value += arguments[i++] + values[j++];
            update.fn(value);
          }
          else
            update.fn(arguments[i++]);
        }
        return content;
      };
    }
  };
}

function createDetails(options, template) {
  var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
  return info.updates(import_node_esm.call(document, info.content, true));
}

var empty = [];
function domtagger(options) {
  var previous = empty;
  var updates = cleanContent;
  return function (template) {
    if (previous !== template)
      updates = createDetails(options, (previous = template));
    return updates.apply(null, arguments);
  };
}

function cleanContent(fragment) {
  var childNodes = fragment.childNodes;
  var i = childNodes.length;
  while (i--) {
    var child = childNodes[i];
    if (
      child.nodeType !== 1 &&
      trim_esm.call(child.textContent).length === 0
    ) {
      fragment.removeChild(child);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/hyperhtml-style/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var hyperStyle = (function (){'use strict';
  // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var hyphen = /([^A-Z])([A-Z]+)/g;
  return function hyperStyle(node, original) {
    return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
  };
  function ized($0, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  }
  function svg(node, original) {
    var style;
    if (original)
      style = original.cloneNode(true);
    else {
      node.setAttribute('style', '--hyper:style;');
      style = node.getAttributeNode('style');
    }
    style.value = '';
    node.setAttributeNode(style);
    return update(style, true);
  }
  function toStyle(object) {
    var key, css = [];
    for (key in object)
      css.push(key.replace(hyphen, ized), ':', object[key], ';');
    return css.join('');
  }
  function update(style, isSVG) {
    var oldType, oldValue;
    return function (newValue) {
      var info, key, styleValue, value;
      switch (typeof newValue) {
        case 'object':
          if (newValue) {
            if (oldType === 'object') {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = '';
                    }
                  }
                }
              }
            } else {
              if (isSVG)
                style.value = '';
              else
                style.cssText = '';
            }
            info = isSVG ? {} : style;
            for (key in newValue) {
              value = newValue[key];
              styleValue = typeof value === 'number' &&
                                  !IS_NON_DIMENSIONAL.test(key) ?
                                  (value + 'px') : value;
              if (!isSVG && /^--/.test(key))
                info.setProperty(key, styleValue);
              else
                info[key] = styleValue;
            }
            oldType = 'object';
            if (isSVG)
              style.value = toStyle((oldValue = info));
            else
              oldValue = newValue;
            break;
          }
        default:
          if (oldValue != newValue) {
            oldType = 'string';
            oldValue = newValue;
            if (isSVG)
              style.value = newValue || '';
            else
              style.cssText = newValue || '';
          }
          break;
      }
    };
  }
}());
/* harmony default export */ const hyperhtml_style_esm = (hyperStyle);

;// CONCATENATED MODULE: ./node_modules/hyperhtml-wire/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var Wire = (function (slice, proto) {

  proto = Wire.prototype;

  proto.ELEMENT_NODE = 1;
  proto.nodeType = 111;

  proto.remove = function (keepFirst) {
    var childNodes = this.childNodes;
    var first = this.firstChild;
    var last = this.lastChild;
    this._ = null;
    if (keepFirst && childNodes.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      var range = this.ownerDocument.createRange();
      range.setStartBefore(keepFirst ? childNodes[1] : first);
      range.setEndAfter(last);
      range.deleteContents();
    }
    return first;
  };

  proto.valueOf = function (forceAppend) {
    var fragment = this._;
    var noFragment = fragment == null;
    if (noFragment)
      fragment = (this._ = this.ownerDocument.createDocumentFragment());
    if (noFragment || forceAppend) {
      for (var n = this.childNodes, i = 0, l = n.length; i < l; i++)
        fragment.appendChild(n[i]);
    }
    return fragment;
  };

  return Wire;

  function Wire(childNodes) {
    var nodes = (this.childNodes = slice.call(childNodes, 0));
    this.firstChild = nodes[0];
    this.lastChild = nodes[nodes.length - 1];
    this.ownerDocument = nodes[0].ownerDocument;
    this._ = null;
  }

}([].slice));
/* harmony default export */ const hyperhtml_wire_esm = (Wire);

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/constants.js
// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const constants_ELEMENT_NODE = 1;
const constants_DOCUMENT_FRAGMENT_NODE = 11;

// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';

// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Updates.js
















const componentType = Component.prototype.nodeType;
const wireType = hyperhtml_wire_esm.prototype.nodeType;

const observe = disconnected_esm({Event: custom_event_esm, WeakSet: essential_weakset_esm});



// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// returns nodes from wires and components
const asNode = (item, i) => {
  switch (item.nodeType) {
    case wireType:
      // in the Wire case, the content can be
      // removed, post-pended, inserted, or pre-pended and
      // all these cases are handled by domdiff already
      /* istanbul ignore next */
      return (1 / i) < 0 ?
        (i ? item.remove(true) : item.lastChild) :
        (i ? item.valueOf(true) : item.firstChild);
    case componentType:
      return asNode(item.render(), i);
    default:
      return item;
  }
}

// returns true if domdiff can handle the value
const canDiff = value => 'ELEMENT_NODE' in value;

// borrowed from uhandlers
// https://github.com/WebReflection/uhandlers
const booleanSetter = (node, key, oldValue) => newValue => {
  if (oldValue !== !!newValue) {
    if ((oldValue = !!newValue))
      node.setAttribute(key, '');
    else
      node.removeAttribute(key);
  }
};

const hyperSetter = (node, name, svg) => svg ?
  value => {
    try {
      node[name] = value;
    }
    catch (nope) {
      node.setAttribute(name, value);
    }
  } :
  value => {
    node[name] = value;
  };

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(Intent.invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
const isPromise_ish = value => value != null && 'then' in value;

// list of attributes that should not be directly assigned
const readOnly = /^(?:form|list)$/i;

// reused every slice time
const Updates_slice = [].slice;

// simplifies text node creation
const Updates_text = (node, text) => node.ownerDocument.createTextNode(text);

function Tagger(type) {
  this.type = type;
  return domtagger_esm(this);
}

Tagger.prototype = {

  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    const isSVG = OWNER_SVG_ELEMENT in node;
    let oldValue;
    // if the attribute is the style one
    // handle it differently from others
    if (name === 'style')
      return hyperhtml_style_esm(node, original, isSVG);
    // direct accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '.')
      return hyperSetter(node, name.slice(1), isSVG);
    // boolean accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '?')
      return booleanSetter(node, name.slice(1));
    // the name is an event one,
    // add/remove event listeners accordingly
    else if (/^on/.test(name)) {
      let type = name.slice(2);
      if (type === CONNECTED || type === DISCONNECTED) {
        observe(node);
      }
      else if (name.toLowerCase()
        in node) {
        type = type.toLowerCase();
      }
      return newValue => {
        if (oldValue !== newValue) {
          if (oldValue)
            node.removeEventListener(type, oldValue, false);
          oldValue = newValue;
          if (newValue)
            node.addEventListener(type, newValue, false);
        }
      };
    }
    // the attribute is special ('value' in input)
    // and it's not SVG *or* the name is exactly data,
    // in this case assign the value directly
    else if (
      name === 'data' ||
      (!isSVG && name in node && !readOnly.test(name))
    ) {
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (node[name] !== newValue && newValue == null) {
            // cleanup on null to avoid silly IE/Edge bug
            node[name] = '';
            node.removeAttribute(name);
          }
          else
            node[name] = newValue;
        }
      };
    }
    else if (name in Intent.attributes) {
      oldValue;
      return any => {
        const newValue = Intent.attributes[name](node, any);
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (newValue == null)
            node.removeAttribute(name);
          else
            node.setAttribute(name, newValue);
        }
      };
    }
    // in every other case, use the attribute node as it is
    // update only the value, set it as node only when/if needed
    else {
      let owner = false;
      const attribute = original.cloneNode(true);
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (attribute.value !== newValue) {
            if (newValue == null) {
              if (owner) {
                owner = false;
                node.removeAttributeNode(attribute);
              }
              attribute.value = newValue;
            } else {
              attribute.value = newValue;
              if (!owner) {
                owner = true;
                node.setAttributeNode(attribute);
              }
            }
          }
        }
      };
    }
  },

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a component, update the content by rendering it
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const diffOptions = {node: asNode, before: node};
    const nodeType = OWNER_SVG_ELEMENT in node ? /* istanbul ignore next */ 'svg' : 'html';
    let fastPath = false;
    let oldValue;
    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              [Updates_text(node, value)],
              diffOptions
            );
          }
          break;
        case 'function':
          anyContent(value(node));
          break;
        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              [],
              diffOptions
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if (is_array_esm(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = domdiff_esm(
                  node.parentNode,
                  childNodes,
                  [],
                  diffOptions
                );
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent({html: value});
                  break;
                case 'object':
                  if (is_array_esm(value[0])) {
                    value = value.concat.apply([], value);
                  }
                  if (isPromise_ish(value[0])) {
                    Promise.all(value).then(anyContent);
                    break;
                  }
                default:
                  childNodes = domdiff_esm(
                    node.parentNode,
                    childNodes,
                    value,
                    diffOptions
                  );
                  break;
              }
            }
          } else if (canDiff(value)) {
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              value.nodeType === constants_DOCUMENT_FRAGMENT_NODE ?
                Updates_slice.call(value.childNodes) :
                [value],
              diffOptions
            );
          } else if (isPromise_ish(value)) {
            value.then(anyContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, anyContent);
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              Updates_slice.call(
                create_content_esm(
                  [].concat(value.html).join(''),
                  nodeType
                ).childNodes
              ),
              diffOptions
            );
          } else if ('length' in value) {
            anyContent(Updates_slice.call(value));
          } else {
            anyContent(Intent.invoke(value, anyContent));
          }
          break;
      }
    };
    return anyContent;
  },

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;
    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;
        if (type === 'object' && value) {
          if (isPromise_ish(value)) {
            value.then(textContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, textContent);
          } else if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(Updates_slice.call(value).join(''));
          } else {
            textContent(Intent.invoke(value, textContent));
          }
        } else if (type === 'function') {
          textContent(value(node));
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };
    return textContent;
  }
};

;// CONCATENATED MODULE: ./node_modules/@ungap/template-literal/esm/index.js


var isNoOp = typeof document !== 'object';

var templateLiteral = function (tl) {
  var RAW = 'raw';
  var isBroken = function (UA) {
    return /(Firefox|Safari)\/(\d+)/.test(UA) &&
          !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
  };
  var broken = isBroken((document.defaultView.navigator || {}).userAgent);
  var FTS = !(RAW in tl) ||
            tl.propertyIsEnumerable(RAW) ||
            !Object.isFrozen(tl[RAW]);
  if (broken || FTS) {
    var forever = {};
    var foreverCache = function (tl) {
      for (var key = '.', i = 0; i < tl.length; i++)
        key += tl[i].length + '.' + tl[i];
      return forever[key] || (forever[key] = tl);
    };
    // Fallback TypeScript shenanigans
    if (FTS)
      templateLiteral = foreverCache;
    // try fast path for other browsers:
    // store the template as WeakMap key
    // and forever cache it only when it's not there.
    // this way performance is still optimal,
    // penalized only when there are GC issues
    else {
      var wm = new esm;
      var set = function (tl, unique) {
        wm.set(tl, unique);
        return unique;
      };
      templateLiteral = function (tl) {
        return wm.get(tl) || set(tl, foreverCache(tl));
      };
    }
  } else {
    isNoOp = true;
  }
  return TL(tl);
};

/* harmony default export */ const template_literal_esm = (TL);

function TL(tl) {
  return isNoOp ? tl : templateLiteral(tl);
}

;// CONCATENATED MODULE: ./node_modules/@ungap/template-tag-arguments/esm/index.js


/* harmony default export */ function template_tag_arguments_esm(template) {
  var length = arguments.length;
  var args = [template_literal_esm(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};

/**
 * best benchmark goes here
 * https://jsperf.com/tta-bench
 * I should probably have an @ungap/template-literal-es too
export default (...args) => {
  args[0] = unique(args[0]);
  return args;
};
 */
;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/hyper/wire.js







// all wires used per each context
const wires = new esm;

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, tagger, template;
  return function () {
    const args = template_tag_arguments_esm.apply(null, arguments);
    if (template !== args[0]) {
      template = args[0];
      tagger = new Tagger(type);
      wire = wireContent(tagger.apply(tagger, args));
    } else {
      tagger.apply(tagger, args);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire)
    wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// A document fragment loses its nodes 
// as soon as it is appended into another node.
// This has the undesired effect of losing wired content
// on a second render call, because (by then) the fragment would be empty:
// no longer providing access to those sub-nodes that ultimately need to
// stay associated with the original interpolation.
// To prevent hyperHTML from forgetting about a fragment's sub-nodes,
// fragments are instead returned as an Array of nodes or, if there's only one entry,
// as a single referenced node which, unlike fragments, will indeed persist
// wire content throughout multiple renderings.
// The initial fragment, at this point, would be used as unique reference to this
// array of nodes or to this single referenced node.
const wireContent = node => {
  const childNodes = node.childNodes;
  const {length} = childNodes;
  return length === 1 ?
    childNodes[0] :
    (length ? new hyperhtml_wire_esm(childNodes) : node);
};


/* harmony default export */ const hyper_wire = (wire);

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/hyper/render.js






// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new esm;

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render() {
  const wicked = bewitched.get(this);
  const args = template_tag_arguments_esm.apply(null, arguments);
  if (wicked && wicked.template === args[0]) {
    wicked.tagger.apply(null, args);
  } else {
    upgrade.apply(this, args);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  const type = OWNER_SVG_ELEMENT in this ? 'svg' : 'html';
  const tagger = new Tagger(type);
  bewitched.set(this, {tagger, template: template});
  this.textContent = '';
  this.appendChild(tagger.apply(null, arguments));
}

/* harmony default export */ const hyper_render = (render);

;// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/index.js
/*! (c) Andrea Giammarchi (ISC) */










// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => hyper_render.bind(context);
const esm_define = Intent.define;
const tagger = Tagger.prototype;

hyper.Component = Component;
hyper.bind = bind;
hyper.define = esm_define;
hyper.diff = domdiff_esm;
hyper.hyper = hyper;
hyper.observe = observe;
hyper.tagger = tagger;
hyper.wire = hyper_wire;

// exported as shared utils
// for projects based on hyperHTML
// that don't necessarily need upfront polyfills
// i.e. those still targeting IE
hyper._ = {
  WeakMap: esm,
  WeakSet: essential_weakset_esm
};

// the wire content is the lazy defined
// html or svg property of each hyper.Component
setup(content);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      content('html') :
      (typeof HTML === 'string' ?
        hyper.wire(null, HTML) :
        ('raw' in HTML ?
          content('html')(HTML) :
          ('nodeType' in HTML ?
            hyper.bind(HTML) :
            weakly(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      content('html') : hyper.wire
    ).apply(null, arguments);
}

;// CONCATENATED MODULE: ./node_modules/hyperhtml-element/esm/index.js
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */



// utils to deal with custom elements builtin extends
const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
const O = Object;
const classes = [];
const defineProperty = O.defineProperty;
const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
const getOwnPropertyNames = O.getOwnPropertyNames;
/* istanbul ignore next */
const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
/* istanbul ignore next */
const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
/* istanbul ignore next */
const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
                (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
/* istanbul ignore next */
const setPrototypeOf = O.setPrototypeOf ||
                      ((o, p) => (o.__proto__ = p, o));
/* istanbul ignore stop */
const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());
const {attachShadow} = HTMLElement.prototype;
const sr = new WeakMap;

class HyperHTMLElement extends HTMLElement {

  // define a custom-element in the CustomElementsRegistry
  // class MyEl extends HyperHTMLElement {}
  // MyEl.define('my-el');
  static define(name, options) {
    const Class = this;
    const proto = Class.prototype;

    const onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
    const hasChange = !!onChanged;

    // Class.booleanAttributes
    // -----------------------------------------------
    // attributes defined as boolean will have
    // an either available or not available attribute
    // regardless of the value.
    // All falsy values, or "false", mean attribute removed
    // while truthy values will be set as is.
    // Boolean attributes are also automatically observed.
    const booleanAttributes = Class.booleanAttributes || [];
    booleanAttributes.forEach(attribute => {
      const name = camel(attribute);
      if (!(name in proto)) defineProperty(
        proto,
        name,
        {
          configurable: true,
          get() {
            return this.hasAttribute(attribute);
          },
          set(value) {
            if (!value || value === 'false')
              this.removeAttribute(attribute);
            else
              this.setAttribute(attribute, '');
          }
        }
      );
    });

    // Class.observedAttributes
    // -------------------------------------------------------
    // HyperHTMLElement will directly reflect get/setAttribute
    // operation once these attributes are used, example:
    // el.observed = 123;
    // will automatically do
    // el.setAttribute('observed', 123);
    // triggering also the attributeChangedCallback
    const observedAttributes = (Class.observedAttributes || []).filter(
      attribute => booleanAttributes.indexOf(attribute) < 0
    );
    observedAttributes.forEach(attribute => {
      // it is possible to redefine the behavior at any time
      // simply overwriting get prop() and set prop(value)
      const name = camel(attribute);
      if (!(name in proto)) defineProperty(
        proto,
        name,
        {
          configurable: true,
          get() {
            return this.getAttribute(attribute);
          },
          set(value) {
            if (value == null)
              this.removeAttribute(attribute);
            else
              this.setAttribute(attribute, value);
          }
        }
      );
    });

    // if these are defined, overwrite the observedAttributes getter
    // to include also booleanAttributes
    const attributes = booleanAttributes.concat(observedAttributes);
    if (attributes.length)
      defineProperty(Class, 'observedAttributes', {
        get() { return attributes; }
      });

    // created() {}
    // ---------------------------------
    // an initializer method that grants
    // the node is fully known to the browser.
    // It is ensured to run either after DOMContentLoaded,
    // or once there is a next sibling (stream-friendly) so that
    // you have full access to element attributes and/or childNodes.
    const created = proto.created || function () {
      this.render();
    };

    // used to ensure create() is called once and once only
    defineProperty(
      proto,
      '_init$',
      {
        configurable: true,
        writable: true,
        value: true
      }
    );

    defineProperty(
      proto,
      ATTRIBUTE_CHANGED_CALLBACK,
      {
        configurable: true,
        value: function aCC(name, prev, curr) {
          if (this._init$) {
            checkReady.call(this, created, attributes, booleanAttributes);
            if (this._init$)
              return this._init$$.push(aCC.bind(this, name, prev, curr));
          }
          // ensure setting same value twice
          // won't trigger twice attributeChangedCallback
          if (hasChange && prev !== curr) {
            onChanged.apply(this, arguments);
          }
        }
      }
    );

    const onConnected = proto.connectedCallback;
    const hasConnect = !!onConnected;
    defineProperty(
      proto,
      'connectedCallback',
      {
        configurable: true,
        value: function cC() {
          if (this._init$) {
            checkReady.call(this, created, attributes, booleanAttributes);
            if (this._init$)
              return this._init$$.push(cC.bind(this));
          }
          if (hasConnect) {
            onConnected.apply(this, arguments);
          }
        }
      }
    );

    // define lazily all handlers
    // class { handleClick() { ... }
    // render() { `<a onclick=${this.handleClick}>` } }
    getOwnPropertyNames(proto).forEach(key => {
      if (/^handle[A-Z]/.test(key)) {
        const _key$ = '_' + key + '$';
        const method = proto[key];
        defineProperty(proto, key, {
          configurable: true,
          get() {
            return  this[_key$] ||
                    (this[_key$] = method.bind(this));
          }
        });
      }
    });

    // whenever you want to directly use the component itself
    // as EventListener, you can pass it directly.
    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
    //  class Reactive extends HyperHTMLElement {
    //    oninput(e) { console.log(this, 'changed', e.target.value); }
    //    render() { this.html`<input oninput="${this}">`; }
    //  }
    if (!('handleEvent' in proto)) {
      defineProperty(
        proto,
        'handleEvent',
        {
          configurable: true,
          value(event) {
            this[
              (event.currentTarget.dataset || {}).call ||
              ('on' + event.type)
            ](event);
          }
        }
      );
    }

    if (options && options.extends) {
      const Native = document.createElement(options.extends).constructor;
      const Intermediate = class extends Native {};
      const ckeys = ['length', 'name', 'arguments', 'caller', 'prototype'];
      const pkeys = [];
      let Super = null;
      let BaseClass = Class;
      while (Super = getPrototypeOf(BaseClass)) {
        [
          {target: Intermediate, base: Super, keys: ckeys},
          {target: Intermediate.prototype, base: Super.prototype, keys: pkeys}
        ]
        .forEach(({target, base, keys}) => {
          ownKeys(base)
            .filter(key => keys.indexOf(key) < 0)
            .forEach((key) => {
              keys.push(key);
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(base, key)
              );
            });
        });

        BaseClass = Super;
        if (Super === HyperHTMLElement)
          break;
      }
      setPrototypeOf(Class, Intermediate);
      setPrototypeOf(proto, Intermediate.prototype);
      customElements.define(name, Class, options);
    } else {
      customElements.define(name, Class);
    }
    classes.push(Class);
    return Class;
  }

  // weakly relate the shadowRoot for refs usage
  attachShadow() {
    const shadowRoot = attachShadow.apply(this, arguments);
    sr.set(this, shadowRoot);
    return shadowRoot;
  }

  // returns elements by ref
  get refs() {
    const value = {};
    if ('_html$' in this) {
      const all = (sr.get(this) || this).querySelectorAll('[ref]');
      for (let {length} = all, i = 0; i < length; i++) {
        const node = all[i];
        value[node.getAttribute('ref')] = node;
      }
      Object.defineProperty(this, 'refs', {value});
      return value;
    }
    return value;
  }

  // lazily bind once hyperHTML logic
  // to either the shadowRoot, if present and open,
  // the _shadowRoot property, if set due closed shadow root,
  // or the custom-element itself if no Shadow DOM is used.
  get html() {
    return this._html$ || (this.html = bind(
      // in a way or another, bind to the right node
      // backward compatible, first two could probably go already
      this.shadowRoot || this._shadowRoot || sr.get(this) || this
    ));
  }

  // it can be set too if necessary, it won't invoke render()
  set html(value) {
    defineProperty(this, '_html$', {configurable: true, value: value});
  }

  // overwrite this method with your own render
  render() {}

  // ---------------------//
  // Basic State Handling //
  // ---------------------//

  // define the default state object
  // you could use observed properties too
  get defaultState() { return {}; }

  // the state with a default
  get state() {
    return this._state$ || (this.state = this.defaultState);
  }

  // it can be set too if necessary, it won't invoke render()
  set state(value) {
    defineProperty(this, '_state$', {configurable: true, value: value});
  }

  // currently a state is a shallow copy, like in Preact or other libraries.
  // after the state is updated, the render() method will be invoked.
  // ⚠️ do not ever call this.setState() inside this.render()
  setState(state, render) {
    const target = this.state;
    const source = typeof state === 'function' ? state.call(this, target) : state;
    for (const key in source) target[key] = source[key];
    if (render !== false) this.render();
    return this;
  }

};

// exposing hyperHTML utilities
HyperHTMLElement.Component = Component;
HyperHTMLElement.bind = bind;
HyperHTMLElement.intent = esm_define;
HyperHTMLElement.wire = hyper_wire;
HyperHTMLElement.hyper = hyper;

try {
  if (Symbol.hasInstance) classes.push(
    defineProperty(HyperHTMLElement, Symbol.hasInstance, {
      enumerable: false,
      configurable: true,
      value(instance) {
        return classes.some(esm_isPrototypeOf, getPrototypeOf(instance));
      }
    }));
} catch(meh) {}

/* harmony default export */ const hyperhtml_element_esm = (HyperHTMLElement);

// ------------------------------//
// DOMContentLoaded VS created() //
// ------------------------------//
const dom = {
  type: 'DOMContentLoaded',
  handleEvent() {
    if (dom.ready()) {
      document.removeEventListener(dom.type, dom, false);
      dom.list.splice(0).forEach(invoke);
    }
    else
      setTimeout(dom.handleEvent);
  },
  ready() {
    return document.readyState === 'complete';
  },
  list: []
};

if (!dom.ready()) {
  document.addEventListener(dom.type, dom, false);
}

function checkReady(created, attributes, booleanAttributes) {
  if (dom.ready() || isReady.call(this, created, attributes, booleanAttributes)) {
    if (this._init$) {
      const list = this._init$$ || [];
      delete this._init$$;
      const self = defineProperty(this, '_init$', {value: false});
      booleanAttributes.forEach(name => {
        if (self.getAttribute(name) === 'false')
          self.removeAttribute(name);
      });
      attributes.forEach(name => {
        if (self.hasOwnProperty(name)) {
          const curr = self[name];
          delete self[name];
          list.unshift(() => { self[name] = curr; });
        }
      });
      created.call(self);
      list.forEach(invoke);
    }
  } else {
    if (!this.hasOwnProperty('_init$$'))
      defineProperty(this, '_init$$', {configurable: true, value: []});
    dom.list.push(checkReady.bind(this, created, attributes, booleanAttributes));
  }
}

function invoke(fn) {
  fn();
}

function esm_isPrototypeOf(Class) {
  return this === Class.prototype;
}

function isReady(created, attributes, booleanAttributes) {
  let el = this;
  do { if (el.nextSibling) return true; }
  while (el = el.parentNode);
  setTimeout(checkReady.bind(this, created, attributes, booleanAttributes));
  return false;
}

;// CONCATENATED MODULE: ./js/io-element.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */




// common DOM utilities exposed as IOElement.utils
const DOMUtils = {

  // boolean related operations/helpers
  boolean: {
    // utils.boolean.attribute(node, name, setAsTrue):void
    // set a generic node attribute name as "true"
    // if value is a boolean one or it removes the attribute
    attribute(node, name, setAsTrue)
    {
      // don't use `this.value(value)` with `this` as context
      // to make destructuring of helpers always work.
      // @example
      // const {attribute: setBoolAttr} = IOElement.utils.boolean;
      // setBoolAttr(node, 'test', true);
      if (DOMUtils.boolean.value(setAsTrue))
      {
        node.setAttribute(name, "true");
      }
      else
      {
        node.removeAttribute(name);
      }
    },

    // utils.boolean.value(any):boolean
    // it returns either true or false
    // via truthy or falsy values, but also via strings
    // representing "true", "false" as well as "0" or "1"
    value(value)
    {
      if (typeof value === "string" && value.length)
      {
        try
        {
          value = JSON.parse(value);
        }
        catch (error)
        {
          // Ignore invalid JSON to continue using value as string
        }
      }
      return !!value;
    }
  },

  event: {
    // returns true if it's a left click or a touch event.
    // The left mouse button value is 0 and this
    // is compatible with pointers/touch events
    // where `button` might not be there.
    isLeftClick(event)
    {
      const re = /^(?:click|mouse|touch|pointer)/;
      return re.test(event.type) && !event.button;
    }
  }
};

// provides a unique-id suffix per each component
let counter = 0;

// common Custom Element class to extend
class IOElement extends hyperhtml_element_esm
{
  // exposes DOM helpers as read only utils
  static get utils()
  {
    return DOMUtils;
  }

  // get a unique ID or, if null, set one and returns it
  static getID(element)
  {
    return element.getAttribute("id") || IOElement.setID(element);
  }

  // set a unique ID to a generic element and returns the ID
  static setID(element)
  {
    const id = `${element.nodeName.toLowerCase()}-${counter++}`;
    element.setAttribute("id", id);
    return id;
  }

  // lazily retrieve or define a custom element ID
  get id()
  {
    return IOElement.getID(this);
  }

  // returns true only when the component is live and styled
  get ready()
  {
    return !!this.offsetParent && this.isStyled();
  }

  // whenever an element is created, render its content once
  created() { this.render(); }

  // based on a `--component-name: ready;` convention
  // under the `component-name {}` related stylesheet,
  // this method returns true only if such stylesheet
  // has been already loaded.
  isStyled()
  {
    const computed = window.getComputedStyle(this, null);
    const property = "--" + this.nodeName.toLowerCase();
    // in some case Edge returns '#fff' instead of ready
    return computed.getPropertyValue(property).trim() !== "";
  }

  // by default, render is a no-op
  render() {}

  // usually a template would contain a main element such
  // input, button, div, section, etc.
  // having a simple way to retrieve such element can be
  // both semantic and handy, as opposite of using
  // this.children[0] each time
  get child()
  {
    let element = this.firstElementChild;
    // if accessed too early, will render automatically
    if (!element)
    {
      this.render();
      element = this.firstElementChild;
    }
    return element;
  }
}

// whenever an interpolation with ${{i18n: 'string-id'}} is found
// transform such value into the expected content
// example:
//  render() {
//    return this.html`<div>${{i18n:'about-abp'}}</div>`;
//  }
IOElement.intent("i18n", idOrArgs =>
{
  const fragment = document.createDocumentFragment();
  if (typeof idOrArgs === "string")
    setElementText(fragment, idOrArgs);
  else if (idOrArgs instanceof Array)
    setElementText(fragment, ...idOrArgs);
  return fragment;
});

/* harmony default export */ const io_element = (IOElement);

;// CONCATENATED MODULE: ./js/io-steps.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */



// a three steps example:
// <io-steps i18n-labels="first second third" />
class IOSteps extends io_element
{
  static get observedAttributes()
  {
    return ["i18n-labels"];
  }

  created()
  {
    io_steps_reset.call(this);
  }

  attributeChangedCallback()
  {
    // reset setup
    io_steps_reset.call(this);
    // attributes can have spaces or new lines too
    for (const label of this.i18nLabels.split(/[\n ]+/))
    {
      const trimmed = label.trim();
      if (trimmed.length)
      {
        this.labels.push(browser.i18n.getMessage(trimmed));
      }
    }
    this.render();
  }

  // return the amount of enabled steps
  get enabled()
  {
    return this._enabled;
  }

  // return true or false accordingly if an index/step
  // has been already completed.
  getCompleted(index)
  {
    return index < this._enabled;
  }

  // set an index completed state
  // by default, completed is true
  setCompleted(index, completed = true)
  {
    if (index < 0)
      index = this.children.length + index;
    this.children[index].classList.toggle("completed", completed);
    if (
      completed &&
      index < this.labels.length &&
      this._enabled <= index
    )
    {
      this._enabled = index + 1;
      this.render();
    }
  }

  // dispatch a "step:click" event providing
  // the clicked index as event.detail property
  onclick(event)
  {
    event.preventDefault();
    event.stopPropagation();
    const indexOf = Array.prototype.indexOf;
    this.dispatchEvent(new CustomEvent("step:click", {
      bubbles: true,
      detail: indexOf.call(this.children, event.currentTarget)
    }));
  }

  render()
  {
    this.html`${this.labels.map(getButton, this)}`;
  }
}

const {wire: io_steps_wire} = io_element;
function getButton(label, index)
{
  // each click dispatches change event
  // data-value is used to show the number
  return io_steps_wire(this, `:${index}`)`
    <button
      onclick="${this}"
      disabled="${index > this._enabled}"
      data-value="${index + 1}"
    >${label}</button>`;
}

function io_steps_reset()
{
  // amount of enabled lables, starts from at least one
  this._enabled = 0;
  // all the labels, passed as list
  this.labels = [];
}

IOSteps.define("io-steps");

;// CONCATENATED MODULE: ./js/drawing-handler.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */




// use native requestIdleCallback where available, fallback to setTimeout
const requestIdleCb = window.requestIdleCallback || setTimeout;

// at this point this is just a helper class
// for op-highlighter component but it could
// become a generic draw-on-canvas helper too
class DrawingHandler
{
  constructor(canvas, maxSize)
  {
    this.paths = new Set();
    this.canvas = canvas;
    this.maxSize = maxSize;

    // the canvas needs proper width and height
    const canvasRect = canvas.getBoundingClientRect();
    canvas.width = canvasRect.width;
    canvas.height = canvasRect.height;

    // define a ratio that will produce an image with at least
    // 800px (maxSize) width and multiply by the device pixel ratio
    // to preserve the image quality on HiDPi screens.
    this.ratio = (maxSize / canvas.width) * (window.devicePixelRatio || 1);

    // it also needs to intercept all events
    if ("onpointerup" in canvas)
    {
      // the instance is the handler itself, no need to bind anything
      canvas.addEventListener("pointerdown", this, {passive: false});
      canvas.addEventListener("pointermove", this, {passive: false});
      canvas.addEventListener("pointerup", this, {passive: false});
      document.addEventListener("pointerup", this, {passive: false});
    }
    else
    {
      // some browser might not have pointer events.
      // the fallback should be regular mouse events
      this.onmousedown = this.onpointerdown;
      this.onmousemove = this.onpointermove;
      this.onmouseup = this.onpointerup;
      canvas.addEventListener("mousedown", this, {passive: false});
      canvas.addEventListener("mousemove", this, {passive: false});
      canvas.addEventListener("mouseup", this, {passive: false});
      document.addEventListener("mouseup", this, {passive: false});
    }
  }

  // draws an image and it starts processing its data
  // in an asynchronous, not CPU greedy, way.
  // It returns a promise that will resolve only
  // once the image has been fully processed.
  // Meanwhile, it is possible to draw rectangles on top.
  changeColorDepth(image)
  {
    this.clear();
    const {naturalWidth, naturalHeight} = image;
    const canvasWidth = this.canvas.width * this.ratio;
    const canvasHeight = (canvasWidth * naturalHeight) / naturalWidth;
    // resize the canvas to the displayed image size
    // to preserve HiDPi pixels
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    // force its computed size in normal CSS pixels
    this.canvas.style.width = Math.round(canvasWidth / this.ratio) + "px";
    this.canvas.style.height = Math.round(canvasHeight / this.ratio) + "px";
    // draw resized image accordingly with new dimensions
    this.ctx.drawImage(
      image,
      0, 0, naturalWidth, naturalHeight,
      0, 0, canvasWidth, canvasHeight
    );
    // collect all info to process the iamge data
    this.imageData = this.ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = this.imageData.data;
    const length = data.length;
    const mapping = [0x00, 0x55, 0xAA, 0xFF];
    // don't loop all pixels at once, assuming devices
    // capable of HiDPi images have also enough power
    // to handle all those pixels.
    const avoidBlocking = Math.round(5000 * this.ratio);
    return new Promise(resolve =>
    {
      const remap = i =>
      {
        for (; i < length; i++)
        {
          data[i] = mapping[data[i] >> 6];
          if (i > 0 && i % avoidBlocking == 0)
          {
            notifyColorDepthChanges.call(this, i, length);
            // faster when possible, otherwise less intrusive
            // than a promise based on setTimeout as in legacy code
            return requestIdleCb(() =>
            {
              this.draw();
              requestIdleCb(() => remap(i + 1));
            });
          }
        }
        notifyColorDepthChanges.call(this, i, length);
        resolve();
      };
      remap(0);
    });
  }

  // setup the context the first time, and clean the area
  clear()
  {
    if (!this.ctx)
    {
      this.ctx = this.canvas.getContext("2d");
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineJoin = "round";
    this.ctx.strokeStyle = "#ED1E45";
    this.ctx.fillStyle = "#000";
    this.ctx.lineWidth = 4 * this.ratio;
  }

  // draw the image during or after it's being processed
  // and draw on top all rectangles
  draw()
  {
    this.clear();
    if (this.imageData)
    {
      this.ctx.putImageData(this.imageData, 0, 0);
    }
    for (const rect of this.paths)
    {
      const method = `${rect.type}Rect`;
      this.ctx[method](
        rect.x * this.ratio,
        rect.y * this.ratio,
        rect.width * this.ratio,
        rect.height * this.ratio
      );
    }
  }

  // central event dispatcher
  // https://dom.spec.whatwg.org/#interface-eventtarget
  handleEvent(event)
  {
    this[`on${event.type}`](event);
  }

  // pointer events to draw on canvas
  onpointerdown(event)
  {
    // avoid multiple pointers/fingers
    if (this.drawing || !io_element.utils.event.isLeftClick(event))
      return;

    // react only if not drawing already
    stopEvent(event);
    this.drawing = true;
    const start = relativeCoordinates(event);
    // set current rect to speed up coordinates updates
    this.rect = {
      type: this.mode,
      x: start.x,
      y: start.y,
      width: 0,
      height: 0
    };
    this.paths.add(this.rect);
  }

  onpointermove(event)
  {
    // only if drawing
    if (!this.drawing)
      return;

    // update the current rect coordinates
    stopEvent(event);
    this.updateRect(event);
    // update the canvas view
    this.draw();
  }

  onpointerup(event)
  {
    // drop only if drawing
    // avoid issues when this event happens
    // outside the expected DOM node (or outside the browser)
    if (!this.drawing)
      return;

    stopEvent(event);
    if (event.currentTarget === this.canvas)
    {
      this.updateRect(event);
    }
    this.draw();
    this.drawing = false;

    // get out of here if the mouse didn't move at all
    if (!this.rect.width && !this.rect.height)
    {
      // also drop current rect from the list: it's useless.
      this.paths.delete(this.rect);
      return;
    }
    const rect = this.rect;
    const parent = this.canvas.parentNode;
    const closeCoords = getRelativeCoordinates(
      this.canvas,
      rect,
      {
        x: rect.x + rect.width,
        y: rect.y + rect.height
      }
    );

    // use the DOM to show the close event
    //  - always visible, even outside the canvas
    //  - no need to re-invent hit-test coordinates
    //  - no need to redraw without closers later on
    parent.appendChild(io_element.wire()`
      <span
        class="closer"
        onclick="${
          evt =>
          {
            if (!io_element.utils.event.isLeftClick(evt))
              return;
            // when clicked, remove the related rectangle
            // and draw the canvas again
            stopEvent(evt);
            parent.removeChild(evt.currentTarget);
            this.paths.delete(rect);
            this.draw();
          }
        }"
        style="${{
          // always top right corner
          top: closeCoords.y + "px",
          left: closeCoords.x + "px"
        }}"
      >
        <img src="/skin/icons/close.svg" />
      </span>`);
  }

  // update current rectangle size
  updateRect(event)
  {
    const coords = relativeCoordinates(event);
    this.rect.width = coords.x - this.rect.x;
    this.rect.height = coords.y - this.rect.y;
  }
}

function notifyColorDepthChanges(value, max)
{
  const info = {detail: {value, max}};
  const ioHighlighter = this.canvas.closest("io-highlighter");
  ioHighlighter.dispatchEvent(new CustomEvent("changecolordepth", info));
}

// helper to retrieve absolute page coordinates
// of a generic target node
function getRelativeCoordinates(canvas, start, end)
{
  const x = Math.max(start.x, end.x) + canvas.offsetLeft;
  const y = Math.min(start.y, end.y) + canvas.offsetTop;
  return {x: Math.round(x), y: Math.round(y)};
}

// prevent events from doing anything
// in the current node, and every parent too
function stopEvent(event)
{
  event.preventDefault();
  event.stopPropagation();
}

/* harmony default export */ const drawing_handler = (DrawingHandler);

;// CONCATENATED MODULE: ./js/io-highlighter.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */





// <io-highlighter data-max-size=800 />
class IOHighlighter extends io_element
{
  // define an initial state per each new instance
  // https://viperhtml.js.org/hyperhtml/documentation/#components-2
  get defaultState()
  {
    return {drawing: "", changeDepth: null};
  }

  // resolves once the image depth has been fully changed
  // comp.changeDepth.then(...)
  get changeDepth()
  {
    return this.state.changeDepth;
  }

  // returns true if there were hidden/highlighted areas
  get edited()
  {
    return this.drawingHandler ? this.drawingHandler.paths.size > 0 : false;
  }

  // process an image and setup changeDepth promise
  // returns the component for chainability sake
  // comp.edit(imageOrString).changeDepth.then(...);
  edit(source)
  {
    return this.setState({
      changeDepth: new Promise((res, rej) =>
      {
        const changeDepth = image =>
        {
          this.drawingHandler.changeColorDepth(image).then(res, rej);
        };

        if (typeof source === "string")
        {
          // create an image and use the source as data
          const img = this.ownerDocument.createElement("img");
          img.onload = () => changeDepth(img);
          img.onerror = rej;
          img.src = source;
        }
        else
        {
          // assume the source is an Image already
          // (or anything that can be drawn on a canvas)
          changeDepth(source);
        }
      })
    });
  }

  // the component content (invoked automatically on state change too)
  render()
  {
    if (this.state.drawing)
      this.setAttribute("drawing", this.state.drawing);
    else
      this.removeAttribute("drawing");

    this.html`
    <div class="split">
      <div class="options">
        <button
          tabindex="-1"
          class="highlight"
          onclick="${
            event =>
            {
              if (io_element.utils.event.isLeftClick(event))
                changeMode(this, "highlight");
            }
          }"
        >
          ${{i18n: "issueReporter_screenshot_highlight"}}
        </button>
        <button
          tabindex="-1"
          class="hide"
          onclick="${
            event =>
            {
              if (io_element.utils.event.isLeftClick(event))
                changeMode(this, "hide");
            }
          }"
        >
          ${{i18n: "issueReporter_screenshot_hide"}}
        </button>
      </div>
      <canvas />
    </div>`;

    // first time only, initialize the DrawingHandler
    // through the newly created canvas
    if (!this.drawingHandler)
      this.drawingHandler = new drawing_handler(
        $("canvas", this),
        parseInt(this.dataset.maxSize, 10) || 800
      );
  }

  // shortcut for internal canvas.toDataURL()
  toDataURL()
  {
    return $("canvas", this).toDataURL();
  }
}

IOHighlighter.define("io-highlighter");

const changeMode = (self, mode) =>
{
  const drawing = self.state.drawing === mode ? "" : mode;
  self.drawingHandler.mode = mode === "hide" ? "fill" : "stroke";
  self.setState({drawing});
};

;// CONCATENATED MODULE: ./js/pages/issue-reporter/steps-manager.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */



// both components are needed,
// and handled, by this file



// managers are invoked right away
// but their initialization might be asynchronous
const managers = [
  // first screen, the welcome one
  // as soon as one radiobox is selected
  // the user can move forward
  ({ioSteps, page, index}) =>
  {
    page.addEventListener("change", event =>
    {
      ioSteps.setCompleted(index, true);
      enableContinue();
    });
  },

  // screenshot page, with highlight and hide ability
  // the canvas need to be visible to have a meaningful
  // computed with or height so the component itself
  // is injected only after the page has been selected
  // for the very first time only
  ({ioSteps, page, index, screenshot}) =>
  {
    // setup only first time is visible
    ioSteps.addEventListener("step:click", function once(event)
    {
      if (event.detail !== index)
        return;
      ioSteps.removeEventListener(event.type, once);
      const ioHighlighter = document.createElement("io-highlighter");
      page.appendChild(ioHighlighter);
      ioHighlighter.edit(screenshot);
      ioSteps.setCompleted(index, true);
      enableContinue();
    });
  },

  // third page, optional extra details where
  // the user can move on only if a valid email
  // is entered or the anonymous checkbox is used
  ({ioSteps, page, index}) =>
  {
    Promise.all([
      new Promise(resolve =>
      {
        ioSteps.addEventListener("requestcollected", resolve);
      }),
      new Promise(resolve =>
      {
        ioSteps.addEventListener("formvalidated", event =>
        {
          ioSteps.setCompleted(index, event.detail);
          $("button:last-child", ioSteps).disabled = true;
          if (event.detail)
            resolve();
        });
      })
    ]).then(() =>
    {
      $("#continue").hidden = true;
      $("#send").hidden = false;
    });
  },

  // last page, the sending of the report
  ({ioSteps, page, index, resolve}) =>
  {
    ioSteps.addEventListener("step:click", function once(event)
    {
      ioSteps.removeEventListener(event.type, once);
      const ioHighlighter = $("io-highlighter");
      ioHighlighter.changeDepth.then(() =>
      {
        resolve({
          screenshot:
          {
            get edited()
            {
              return ioHighlighter.edited;
            },
            get data()
            {
              return ioHighlighter.toDataURL();
            }
          }
        });
      });
    });
  }
];

const stepManager = ({screenshot}) => new Promise(resolve =>
{
  const ioSteps = $("io-steps");
  const pages = $$("main > .page");
  const btnContinue = $("#continue");
  let currentPage = pages[0];
  let index = 0;
  ioSteps.addEventListener(
    "step:click",
    event =>
    {
      index = event.detail;
      const nextPage = pages[index];
      if (nextPage === currentPage)
        return;
      currentPage.hidden = true;
      currentPage = nextPage;
      currentPage.hidden = false;
      // allow users to click previous section that might be
      // already completed so that there's no reason to disable
      // the continue button
      btnContinue.disabled = !ioSteps.getCompleted(index);
    }
  );
  btnContinue.addEventListener(
    "click",
    event =>
    {
      ioSteps.dispatchEvent(
        new CustomEvent("step:click", {detail: index + 1})
      );
    }
  );
  managers.forEach((setup, i) =>
  {
    setup({ioSteps, page: pages[i], index: i, resolve, screenshot});
  });
});

function enableContinue()
{
  $("#continue").disabled = false;
}

/* harmony default export */ const steps_manager = (stepManager);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(701);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(236);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(80);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(850);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(182);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(213);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/issue-reporter/ui/issue-reporter.css
var issue_reporter = __webpack_require__(384);
;// CONCATENATED MODULE: ./src/issue-reporter/ui/issue-reporter.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(issue_reporter/* default */.Z, options);




       /* harmony default export */ const ui_issue_reporter = (issue_reporter/* default */.Z && issue_reporter/* default.locals */.Z.locals ? issue_reporter/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./js/pages/issue-reporter/index.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */










const optionalPermissions = {
  permissions: [
    "contentSettings",
    "management"
  ]
};

convertDoclinks();
initI18n();

function containsPermissions()
{
  // Firefox doesn't trigger the promise's catch() but instead throws
  try
  {
    return browser.permissions.contains(optionalPermissions);
  }
  catch (ex)
  {
    return Promise.reject(ex);
  }
}

document.addEventListener("DOMContentLoaded", async() =>
{
  const supportEmail = "support@adblockplus.org";
  setElementLinks("sr-warning", `mailto:${supportEmail}`);
  setElementLinks(
    "other-issues",
    `mailto:${supportEmail}?subject=${encodeURIComponent("[Issue Reporter]")}`
  );

  const cancelButton = $("#cancel");
  cancelButton.addEventListener("click", closeMe);
  $("#hide-notification").addEventListener("click", () =>
  {
    $("#notification").setAttribute("aria-hidden", true);
  });

  const screenshot = await browser.tabs.captureVisibleTab(
    null,
    {format: "png"}
  );
  // activate current tab and let the user report
  const tab = await browser.tabs.getCurrent();
  await browser.tabs.update(tab.id, {active: true});
  const manageSteps = steps_manager({screenshot});

  // Steps manager is waiting for the data to be collected, so to avoid race
  // conditions, we need to wait for it to be initialized before collection
  const collectedData = collectData().catch(e =>
  {
    console.error(e);
    alert(e);
    closeMe();
  });

  $("#send").addEventListener("click", function sendAll(event)
  {
    const sendButton = event.currentTarget;
    const lastStep = $("io-steps button:last-child");
    sendButton.removeEventListener("click", sendAll);
    sendButton.disabled = true;
    lastStep.disabled = false;
    lastStep.click();
    $("io-highlighter").addEventListener("changecolordepth", evt =>
    {
      const progress = $("#sendingProgress");
      const {max, value} = evt.detail;
      // do not fulfill the bar with this info only
      // the idea is to show a general progress for
      // both the color depth and the sending report
      progress.max = max * 2;
      progress.value = value;
    });
    Promise.all([collectedData, manageSteps]).then(results =>
    {
      // At this point the report is sent,
      // and there will be a link within an iframe
      // that navigates, within the same page, to the
      // reported issue online.
      // Without removing the beforeunload callback,
      // and because the page is the current tab,
      // the user won't be able to reach the report,
      // because the tab itself would close instead.
      window.removeEventListener("beforeunload", closeMe);
      cancelButton.disabled = true;
      cancelButton.hidden = true;
      sendReport(reportWithScreenshot(...results));
      sendButton.textContent =
        browser.i18n.getMessage("issueReporter_closeButton_label");
      $("io-steps").setCompleted(-1, true);
    });
  });

  // We query our permissions here to find out whether the browser supports them
  containsPermissions()
    .then(() =>
    {
      const includeConfig = $("#includeConfig");
      includeConfig.addEventListener("change", (event) =>
      {
        if (!includeConfig.checked)
        {
          updateConfigurationInfo(false);
          return;
        }

        event.preventDefault();

        browser.permissions.request(optionalPermissions)
          .then((granted) =>
          {
            return updateConfigurationInfo(granted)
              .then(() =>
              {
                includeConfig.checked = granted;
              });
          })
          // Catch error here already to ensure permission is removed
          // even if we are unable to update the report data
          .catch(console.error)
          .then(() => browser.permissions.remove(optionalPermissions))
          .then((success) =>
          {
            if (!success)
              throw new Error("Failed to remove permissions");
          })
          .catch(console.error);
      });
    })
    .catch((err) =>
    {
      // No need to ask for more data if we won't be able to access it anyway
      const includeConfig = $("#includeConfigContainer");
      includeConfig.hidden = true;
    });

  const showDataOverlay = $("#showDataOverlay");
  $("#showData").addEventListener("click", event =>
  {
    event.preventDefault();

    collectedData.then(
      xmlReport =>
      {
        closeRequestsCollectingTab().then(() =>
        {
          showDataOverlay.hidden = false;

          reportWithScreenshot(xmlReport, {screenshot: $("io-highlighter")});
          const element = $("#showDataValue");
          element.textContent = asIndentedString(xmlReport);
          element.focus();
        });
      }
    );
  });
  $("#showDataClose").addEventListener("click", event =>
  {
    showDataOverlay.hidden = true;
    $("#showData").focus();
  });
});

let notifyClosing = true;
window.addEventListener("beforeunload", closeMe);
function closeMe()
{
  if (notifyClosing)
  {
    notifyClosing = false;
    browser.runtime.sendMessage({
      type: "app.get",
      what: "senderId"
    }).then(tabId => browser.tabs.remove(tabId));
  }
}

function reportWithScreenshot(xmlReport, stepsData)
{
  const {edited, data} = stepsData.screenshot;
  const element = $("screenshot", xmlReport.documentElement) ||
                  xmlReport.createElement("screenshot");
  element.setAttribute("edited", edited);
  const proc = browser.i18n.getMessage("issueReporter_processing_screenshot");
  element.textContent = data || `data:image/png;base64,...${proc}...`;
  xmlReport.documentElement.appendChild(element);
  return xmlReport;
}

function sendReport(reportData)
{
  // Passing a sequence to URLSearchParams() constructor only works starting
  // with Firefox 53, add values "manually" for now.
  const params = new URLSearchParams();
  for (const [param, value] of [
    ["version", 1],
    ["guid", getUUID()],
    ["lang", $("adblock-plus", reportData)
                       .getAttribute("locale")]
  ])
  {
    params.append(param, value);
  }

  const url = "https://reports.adblockplus.org/submitReport?" + params;

  const reportSent = event =>
  {
    let success = false;
    let errorMessage = browser.i18n.getMessage(
      "filters_subscription_lastDownload_connectionError"
    );
    try
    {
      success = request.status == 200;
      if (request.status != 0)
        errorMessage = request.status + " " + request.statusText;
    }
    catch (e)
    {
      // Getting request status might throw if no connection was established
    }

    let result;
    try
    {
      result = request.responseText;
    }
    catch (e)
    {
      result = "";
    }

    if (!success)
    {
      const errorElement = document.getElementById("error");
      const template = browser.i18n.getMessage("issueReporter_errorMessage")
                                    .replace(/[\r\n\s]+/g, " ");

      const [, before, linkText, after] =
              /(.*)\[link\](.*)\[\/link\](.*)/.exec(template) ||
              [null, "", template, ""];
      const beforeLink = before.replace(/\?1\?/g, errorMessage);
      const afterLink = after.replace(/\?1\?/g, errorMessage);

      while (errorElement.firstChild)
        errorElement.removeChild(errorElement.firstChild);

      const link = document.createElement("a");
      link.textContent = linkText;
      browser.runtime.sendMessage({
        type: "app.get",
        what: "doclink",
        link: "reporter_connect_issue"
      }).then(supportUrl =>
      {
        link.href = supportUrl;
      });


      errorElement.appendChild(document.createTextNode(beforeLink));
      errorElement.appendChild(link);
      errorElement.appendChild(document.createTextNode(afterLink));

      errorElement.hidden = false;
    }

    result = result.replace(
      /%CONFIRMATION%/g,
      encodeHTML(browser.i18n.getMessage("issueReporter_confirmationMessage"))
    );
    result = result.replace(
      /%KNOWNISSUE%/g,
      encodeHTML(browser.i18n.getMessage("issueReporter_knownIssueMessage"))
    );
    const {direction} = window.getComputedStyle(document.documentElement, "");
    result = result.replace(
      /(<html)\b/,
      `$1 dir="${encodeHTML(direction)}"`
    );

    document.getElementById("sendReportMessage").hidden = true;
    document.getElementById("sendingProgressContainer").hidden = true;

    const resultFrame = document.getElementById("result");
    resultFrame.setAttribute("src", "data:text/html;charset=utf-8," +
                                    encodeURIComponent(result));
    resultFrame.hidden = false;

    document.getElementById("continue").disabled = false;

    if (success)
    {
      $("#send").disabled = false;
      $("#send").addEventListener("click", closeMe);
    }
  };

  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "text/xml");
  request.setRequestHeader("X-Adblock-Plus", "1");
  request.addEventListener("load", reportSent);
  request.addEventListener("error", reportSent);
  const progress = document.getElementById("sendingProgress");
  request.upload.addEventListener("progress", event =>
  {
    if (!event.lengthComputable)
      return;

    if (event.loaded > 0)
    {
      // normalize the ratio between previous loading and the current one
      // previous one stopped at 50, so it starts from 50
      progress.max = 100;
      progress.value = 50 + (50 * event.loaded) / event.total;
    }
  });
  request.send(asIndentedString(reportData));
}

function encodeHTML(str)
{
  return str.replace(/[&<>"]/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  }[c]));
}

document.body.hidden = false;

})();

/******/ })()
;