/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 208:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-checkbox\n{\n  display: inline-block;\n  width: 1.2rem;\n  height: 1.2rem;\n  margin: 2px;\n  padding: 0px;\n  border: 0.2rem solid transparent;\n  cursor: pointer;\n}\n\nio-checkbox[disabled]\n{\n  cursor: default;\n}\n\nio-checkbox > button\n{\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background-color: transparent;\n  background-image: url(/skin/icons/checkbox.svg?off#off);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: inherit;\n}\n\nio-checkbox[disabled] > button\n{\n  outline: none;\n  background-image: url(/skin/icons/checkbox.svg?off-disabled#off-disabled);\n}\n\nio-checkbox[checked] > button\n{\n  background-image: url(/skin/icons/checkbox.svg?on#on);\n}\n\nio-checkbox[disabled][checked] > button\n{\n  background-image: url(/skin/icons/checkbox.svg?on-disabled#on-disabled);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_toggle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(507);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(769);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_checkbox_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_toggle_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n/*\n  The component depends on its style and it will look for the\n  --io-filter-list property to ensure the CSS has been loaded.\n  The property is also named like the component on purpose,\n  to be sure its an own property, not something inherited.\n*/\nio-filter-list\n{\n  --io-filter-list: ready;\n  width: 100%;\n  padding: 0;\n  /* used to bootstrap the component once it's visible */\n  animation: -io-filter-list 0.001s;\n}\n\n/* used to bootstrap the component once it's visible */\n@keyframes -io-filter-list\n{\n  from\n  {\n    --io-filter-list: #fff;\n  }\n\n  to\n  {\n    --io-filter-list: #000;\n  }\n}\n\nio-filter-list,\nio-filter-list *,\nio-filter-list *::before,\nio-filter-list *::after\n{\n  box-sizing: border-box;\n}\n\nio-filter-list[disabled] io-checkbox,\nio-filter-list[disabled] io-toggle\n{\n  pointer-events: none;\n}\n\nio-filter-list table\n{\n  width: 100%;\n  border: 1px solid #bcbcbc;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  color: #505050;\n  background-color: #fff;\n  user-select: none;\n}\n\nio-filter-list thead tr,\nio-filter-list td\n{\n  border-bottom: 1px solid #bcbcbc;\n}\n\nio-filter-list tr.empty td,\nio-filter-list tr:last-child td\n{\n  border-bottom: 0;\n}\n\n/* necessary to have scrollable tbody */\nio-filter-list thead,\nio-filter-list tbody\n{\n  display: block;\n}\n\nio-filter-list tr\n{\n  display: flex;\n}\n\nio-filter-list tbody\n{\n  overflow: hidden;\n  height: 300px;\n}\n\nio-filter-list th,\nio-filter-list td\n{\n  min-width: 24px;\n  padding: 4px 8px;\n  text-align: center;\n}\n\nio-filter-list th\n{\n  display: flex;\n  padding: 8px;\n  cursor: pointer;\n  transition: background 0.2s ease-in;\n  align-items: center;\n}\n\nio-filter-list th:not([data-column=\"rule\"])\n{\n  justify-content: center;\n}\n\nio-filter-list th:hover\n{\n  background-color: #f6f6f6;\n}\n\nio-filter-list tbody tr\n{\n  height: var(--row-height, auto);\n  outline: none;\n}\n\nio-filter-list tbody tr.odd.selected,\nio-filter-list tbody tr.selected\n{\n  background-color: #f6f6f6;\n}\n\nio-filter-list [data-column=\"rule\"]\n{\n  width: var(--rule-width, auto);\n  white-space: nowrap;\n  flex-grow: 1;\n}\n\nio-filter-list [data-column=\"rule\"] .content\n{\n  overflow: hidden;\n  height: 100%;\n  text-overflow: ellipsis;\n  font-family: monospace;\n}\n\nio-filter-list [data-column=\"rule\"] .saved\n{\n  animation-name: saved-animation;\n  animation-duration: 0.2s;\n}\n\nio-filter-list [data-column=\"rule\"] .content:focus\n{\n  text-overflow: initial;\n}\n\nio-filter-list tbody tr.editing\n{\n  height: auto;\n}\n\nio-filter-list tbody tr.editing [data-column=\"rule\"]\n{\n  overflow: initial;\n  white-space: initial;\n}\n\nhtml:not([dir=\"rtl\"]) io-filter-list [data-column=\"rule\"]\n{\n  text-align: left;\n}\n\nhtml[dir=\"rtl\"] io-filter-list [data-column=\"rule\"]\n{\n  text-align: right;\n}\n\n/* stylelint-disable indentation */\nio-filter-list tbody tr:not(.empty):not(.editing)\n  [data-column=\"rule\"] div:hover\n{\n  outline: 1px dashed #d0d0d0;\n  cursor: pointer;\n}\n/* stylelint-enable indentation */\n\n\nio-filter-list [data-column=\"status\"],\nio-filter-list [data-column=\"selected\"],\nio-filter-list [data-column=\"warning\"]\n{\n  width: 72px;\n}\n\nio-filter-list [data-column=\"warning\"] img\n{\n  width: 1em;\n  height: 1em;\n}\n\nio-filter-list td[data-column=\"warning\"] img\n{\n  opacity: 0.5;\n}\n\nio-filter-list thead th:not([data-column=\"selected\"])::after\n{\n  display: inline-block;\n  width: 24px;\n  padding: 4px;\n  opacity: 0.3;\n  font-size: 0.7em;\n  line-height: 1rem;\n}\n\nio-filter-list thead th:not([data-column=\"selected\"])::after\n{\n  content: \"▲\";\n}\n\nio-filter-list thead[data-dir=\"desc\"] th:not([data-column=\"selected\"])::after\n{\n  content: \"▼\";\n}\n\nio-filter-list thead[data-sort=\"status\"] th[data-column=\"status\"]::after,\nio-filter-list thead[data-sort=\"rule\"] th[data-column=\"rule\"]::after,\nio-filter-list thead[data-sort=\"warning\"] th[data-column=\"warning\"]::after\n{\n  opacity: 1;\n}\n\nio-filter-list table\n{\n  position: relative;\n}\n\nio-filter-list io-scrollbar\n{\n  position: absolute;\n  top: 46px;\n  bottom: 8px;\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n}\n\nio-filter-list:hover io-scrollbar\n{\n  opacity: 1;\n}\n\nhtml:not([dir=\"rtl\"]) io-filter-list io-scrollbar\n{\n  right: 12px;\n}\n\nhtml[dir=\"rtl\"] io-filter-list io-scrollbar\n{\n  left: 12px;\n}\n\nio-filter-list io-toggle\n{\n  margin-top: 2px;\n  vertical-align: top;\n}\n\n@keyframes saved-animation\n{\n  from\n  {\n    background: #bcffbc;\n  }\n\n  to\n  {\n    background: default;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 839:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-filter-search\n{\n  display: flex;\n  flex-direction: row;\n  height: 48px;\n}\n\nio-filter-search > input\n{\n  padding: 0 8px;\n  border: 1px solid #bcbcbc;\n  border-radius: var(--border-radius) 0 0 0;\n  font-size: inherit;\n  flex-grow: 1;\n}\n\nhtml[dir=\"rtl\"] io-filter-search > input\n{\n  border-radius: 0 var(--border-radius) 0 0;\n}\n\nio-filter-search > button\n{\n  padding: 0 32px;\n  border: 0;\n  border-radius: 0 var(--border-radius) 0 0;\n  color: #fff;\n  background-color: #3a97b9;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\nhtml[dir=\"rtl\"] io-filter-search > button\n{\n  border-radius: var(--border-radius) 0 0 0;\n}\n\nio-filter-search > button:disabled\n{\n  opacity: 0.7;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(873);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_filter_search_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(839);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_filter_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(242);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_filter_search_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_io_filter_list_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-filter-table\n{\n  display: flex;\n  flex-direction: column;\n}\n\nio-filter-table[disabled]\n{\n  opacity: 0.6;\n}\n\nio-filter-table > io-filter-search\n{\n  z-index: 1;\n}\n\nio-filter-table > io-filter-search > input\n{\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\nio-filter-table > io-filter-list > table\n{\n  border-top: 0;\n}\n\nio-filter-table .footer\n{\n  display: flex;\n  flex-direction: row;\n  margin-top: 16px;\n  align-items: center;\n}\n\nio-filter-table .footer > *\n{\n  font-weight: 700;\n}\n\nio-filter-table .footer button\n{\n  padding: 4px;\n  text-transform: uppercase;\n}\n\nio-filter-table .footer button[disabled]\n{\n  display: none;\n}\n\nio-filter-table .footer button:not(:first-child)\n{\n  margin: auto 16px;\n}\n\nio-filter-table .footer .delete\n{\n  border: 2px solid var(--color-brand-primary);\n  color: var(--color-brand-primary);\n}\n\nio-filter-table .footer .copy\n{\n  border: 2px solid #337ba2;\n  color: #337ba2;\n}\n\nio-filter-table .footer button::before\n{\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background-repeat: no-repeat;\n  background-size: contain;\n  content: \"\";\n  transform: translateY(0.1em);\n}\n\n\nio-filter-table .footer .delete::before\n{\n  background-image: url(/skin/icons/trash.svg?error#error);\n}\n\nio-filter-table .footer .copy::before\n{\n  background-image: url(/skin/icons/copy.svg);\n}\n\nio-filter-table .footer ul.error\n{\n  border: 0;\n  padding: 0;\n  color: var(--color-error);\n  text-transform: none;\n  flex-grow: 1;\n  line-height: 1.9rem;\n  list-style: none;\n}\n\nio-filter-table .footer ul.error li\n{\n  padding: var(--padding-secondary) var(--padding-primary);\n  margin-bottom: var(--margin-secondary);\n  border-radius: 4px;\n  background-color: #ED1E4526;\n}\n\nio-filter-table .footer .error strong\n{\n  border: 1px dashed #bcbcbc;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #F3F3F3;\n  color: #000;\n  font-family: monospace;\n}\n\nhtml:not([dir=\"rtl\"]) io-filter-table .footer .delete::before,\nhtml:not([dir=\"rtl\"]) io-filter-table .footer .copy::before\n{\n  margin-right: 4px;\n}\n\nhtml[dir=\"rtl\"] io-filter-table .footer .delete::before,\nhtml[dir=\"rtl\"] io-filter-table .footer .copy::before\n{\n  margin-left: 4px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-list-box\n{\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n}\n\nbody:not(.premium) io-list-box [role=\"option\"].premium\n{\n  display: none;\n}\n\nio-list-box,\nio-list-box button,\nio-list-box [role=\"listbox\"],\nio-list-box [role=\"option\"],\nio-list-box .group\n{\n  margin: 0;\n  padding: 0;\n  color: #4a4a4a;\n  background: #fff;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: inherit;\n}\n\nio-list-box button,\nio-list-box [role=\"listbox\"]\n{\n  box-sizing: inherit;\n  width: var(--width, 100%);\n  border: 1px solid #bcbcbc;\n  cursor: pointer;\n}\n\nio-list-box .group,\nio-list-box [role=\"option\"]\n{\n  padding: 0.6rem 32px;\n}\n\nio-list-box button\n{\n  padding: 0.6rem 0.8rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\nio-list-box button[aria-expanded=\"false\"]\n{\n  color: #0797E1;\n  background: #e9f6fc;\n  text-transform: uppercase;\n}\n\nio-list-box[detached] button[aria-expanded=\"false\"]\n{\n  border-radius: var(--border-radius);\n}\n\nio-list-box button:focus\n{\n  outline: none;\n}\n\nio-list-box [role=\"listbox\"]\n{\n  overflow: auto;\n  position: absolute;\n  z-index: var(--z-popout-active);\n  bottom: 2.2em;\n  max-height: 290px;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  box-shadow: 0 -4px 20px 0 rgba(0,0,0,0.11);\n}\n\nio-list-box [role=\"option\"].hover\n{\n  background: #e1f2fa;\n}\n\nio-list-box .group,\nio-list-box [role=\"option\"][aria-disabled=\"true\"],\nio-list-box [role=\"option\"][aria-disabled=\"true\"].hover\n{\n  background-color: #eee;\n  cursor: default;\n}\n\nio-list-box [role=\"option\"][aria-selected=\"true\"]\n{\n  background-image: url(/skin/icons/checkmark.svg?default#default);\n  background-repeat: no-repeat;\n  background-position: 8px center;\n  background-size: 20px 20px;\n}\n\nio-list-box [role=\"combobox\"]\n{\n  z-index: 1;\n}\n\nhtml[dir=\"rtl\"] io-list-box [role=\"option\"][aria-selected=\"true\"]\n{\n  background-position: calc(100% - 8px) center;\n}\n\nio-list-box .group\n{\n  font-weight: 600;\n  text-transform: uppercase;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 729:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-popout ul\n{\n  padding: 0;\n}\n\nio-popout li\n{\n  list-style: none;\n}\n\n.table.cols io-popout li\n{\n  padding: 0;\n  border: 0;\n}\n\n.table.cols io-popout[type=\"menubar\"] li > *\n{\n  display: flex;\n  width: 100%;\n  padding: 0.7rem 0rem;\n  border: 0rem;\n  color: #0797E1;\n  font-size: 1rem;\n  font-weight: 400;\n  text-decoration: none;\n  text-transform: none;\n  align-items: center;\n}\n\nio-popout[type=\"menubar\"] li > *:hover,\nio-popout[type=\"menubar\"] li > *:focus\n{\n  background-color: #E1F2FA;\n  cursor: pointer;\n}\n\nio-popout li .icon::before\n{\n  width: var(--icon-size-inner);\n  height: var(--icon-size-inner);\n  margin: 0 var(--icon-size-inner);\n  border: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-popout\n{\n  --background-color: #FFF;\n  --border-color: #0797E1;\n  --border: 1px solid var(--border-color);\n  --horizontal-padding: 1rem;\n  --icon-margin: 0.4rem;\n  --icon-size-inner: 1rem;\n  --icon-size-outer: calc(var(--icon-size-inner) + var(--icon-margin));\n  --pointer-size: 10px;\n  --pointer-offset-out: calc(var(--pointer-size) / -2 - 1px);\n  --pointer-offset-start: calc(\n    var(--icon-size-outer) + var(--pointer-offset-out)\n  );\n  --content-offset-out: calc(-0.5 * var(--icon-size-outer));\n  --content-offset-start: calc(var(--icon-size-outer) + 2 * var(--icon-margin));\n}\n\nio-popout[type=\"dialog\"]\n{\n  --icon-size-inner: 3rem;\n}\n\n/*\n * This component is not keyboard-accessible yet but we need it to be focusable\n * to detect when we can close it\n */\nio-popout:focus\n{\n  outline: none;\n}\n\n/* Prevent pre-rendered content to show up before component has loaded */\nio-popout > :not(.wrapper)\n{\n  display: none;\n}\n\n/*******************************************************************************\n * Z-Index\n ******************************************************************************/\n\n/*\n * z-index on custom elements seem to be ignored, so that\n * this extra z-index for io-popout > .wrapper is needed to avoid issues\n */\nio-popout,\nio-popout > .wrapper\n{\n  z-index: var(--z-popout);\n}\n\n/* Ensures that expanded popouts are always shown on top of other popouts */\nio-popout[expanded],\nio-popout[expanded] > .wrapper\n{\n  /*\n   * We can't use calc() for setting the z-index yet because support for it was\n   * only added in Firefox 57. Therefore we have to hardcode its value for now.\n   * https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/57#Quantum_CSS_notes\n   */\n  z-index: var(--z-popout-active);\n}\n\n/*\n * We need to ensure that any content overlays the anchor pointer or otherwise\n * its inner half becomes visible when the content's background color changes\n */\nio-popout > .wrapper > [role] *\n{\n  z-index: 1;\n}\n\n/*******************************************************************************\n * Anchor\n ******************************************************************************/\n\nio-popout > .wrapper\n{\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\nio-popout > .wrapper::before\n{\n  width: var(--icon-size-inner);\n  height: var(--icon-size-inner);\n  cursor: pointer;\n}\n\nio-popout[anchor-icon=\"heart\"] > .wrapper::before\n{\n  border-radius: 50%;\n  background-color: #0797E1;\n  background-repeat: no-repeat;\n  background-size: 40%;\n  background-position: center;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  transition: background-color 100ms,\n    box-shadow 100ms;\n}\n\nio-popout[anchor-icon=\"heart\"][expanded] > .wrapper::before\n{\n  background-color: #4A4A4A;\n  box-shadow: none;\n  animation-name: tap;\n  animation-duration: 500ms;\n}\n\nio-popout[type=\"menubar\"] > .wrapper::before\n{\n  background-image: url(/skin/icons/gear.svg?default#default);\n}\n\nio-popout[type=\"tooltip\"] > .wrapper::before\n{\n  background-image: url(/skin/icons/tooltip.svg);\n}\n\nio-popout[anchor-icon=\"heart\"] > .wrapper::before\n{\n  background-image: url(/skin/icons/heart.svg);\n}\n\nio-popout[anchor-icon=\"error\"] > .wrapper::before\n{\n  background-image: url(/skin/icons/error-round.svg);\n}\n\n/*******************************************************************************\n * Anchor pointer\n ******************************************************************************/\n\nio-popout > .wrapper > [role]::before\n{\n  display: block;\n  position: absolute;\n  width: var(--pointer-size);\n  height: var(--pointer-size);\n  border: var(--border);\n  border-right: none;\n  border-bottom: none;\n  background-color: var(--background-color);\n  content: \"\";\n}\n\nio-popout:not([expanded]) > .wrapper > [role]::before,\nio-popout[expanded=\"above\"] > .wrapper > [role]::before,\nio-popout[expanded=\"below\"] > .wrapper > [role]::before\n{\n  right: var(--pointer-offset-start);\n}\n\nhtml[dir=\"rtl\"] io-popout:not([expanded]) > .wrapper > [role]::before,\nhtml[dir=\"rtl\"] io-popout[expanded=\"above\"] > .wrapper > [role]::before,\nhtml[dir=\"rtl\"] io-popout[expanded=\"below\"] > .wrapper > [role]::before\n{\n  right: auto;\n  left: var(--pointer-offset-start);\n}\n\nio-popout:not([expanded]) > .wrapper > [role]::before,\nio-popout[expanded=\"below\"] > .wrapper > [role]::before\n{\n  top: var(--pointer-offset-out);\n  transform: rotate(45deg);\n}\n\nio-popout[expanded=\"above\"] > .wrapper > [role]::before\n{\n  bottom: var(--pointer-offset-out);\n  transform: rotate(-135deg);\n}\n\nio-popout[expanded=\"start\"] > .wrapper > [role]::before\n{\n  top: var(--pointer-offset-start);\n  right: var(--pointer-offset-out);\n  transform: rotate(135deg);\n}\n\nhtml[dir=\"rtl\"] io-popout[expanded=\"start\"] > .wrapper > [role]::before\n{\n  right: auto;\n  left: var(--pointer-offset-out);\n  transform: rotate(-45deg);\n}\n\n/*******************************************************************************\n * Content\n ******************************************************************************/\n\nio-popout > .wrapper > [role]\n{\n  position: absolute;\n  box-sizing: border-box;\n  border: var(--border);\n  border-radius: var(--border-radius);\n  background-color: var(--background-color);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n\nio-popout [aria-hidden=\"true\"]\n{\n  display: none;\n}\n\nio-popout:not([expanded]) > .wrapper > [role],\nio-popout[expanded=\"above\"] > .wrapper > [role],\nio-popout[expanded=\"below\"] > .wrapper > [role]\n{\n  right: var(--content-offset-out);\n}\n\nhtml[dir=\"rtl\"] io-popout:not([expanded]) > .wrapper > [role],\nhtml[dir=\"rtl\"] io-popout[expanded=\"above\"] > .wrapper > [role],\nhtml[dir=\"rtl\"] io-popout[expanded=\"below\"] > .wrapper > [role]\n{\n  right: auto;\n  left: var(--content-offset-out);\n}\n\nio-popout:not([expanded]) > .wrapper > [role],\nio-popout[expanded=\"below\"] > .wrapper > [role]\n{\n  top: var(--content-offset-start);\n}\n\nio-popout[expanded=\"above\"] > .wrapper > [role]\n{\n  bottom: var(--content-offset-start);\n}\n\nio-popout[expanded=\"start\"] > .wrapper > [role]\n{\n  top: var(--content-offset-out);\n  right: var(--content-offset-start);\n}\n\nhtml[dir=\"rtl\"] io-popout[expanded=\"start\"] > .wrapper > [role]\n{\n  right: auto;\n  left: var(--content-offset-start);\n}\n\nio-popout > .wrapper > [role=\"dialog\"]\n{\n  width: 12rem;\n  padding: 20px;\n}\n\nio-popout > .wrapper > [role=\"menubar\"]\n{\n  width: 12.2rem;\n}\n\nio-popout > .wrapper > [role=\"tooltip\"]\n{\n  width: 15rem;\n}\n\nio-popout .close\n{\n  position: absolute;\n  top: 10px;\n}\n\nio-popout .close:focus\n{\n  outline: none;\n}\n\nio-popout p\n{\n  padding: 0.2rem var(--horizontal-padding);\n}\n\nio-popout [role=\"dialog\"] p\n{\n  padding: 1em 0;\n  margin: 0;\n  font-size: 0.9em;\n}\n\nio-popout [role=\"tooltip\"] p\n{\n  overflow-y: auto;\n  /* Approximated to achieve a total tooltip height of 12.5em without\n  hiding overflowing anchor pointer */\n  max-height: 9em;\n  line-height: 1.5rem;\n}\n\nhtml[dir=\"ltr\"] io-popout button.close\n{\n  right: 10px;\n  left: auto;\n}\n\nhtml[dir=\"rtl\"] io-popout button.close\n{\n  right: auto;\n  left: 10px;\n}\n\nio-popout .close + *\n{\n  margin-top: 2em;\n}\n\nhtml[dir=\"ltr\"] io-popout button.close\n{\n  right: 10px;\n  left: auto;\n}\n\nhtml[dir=\"rtl\"] io-popout button.close\n{\n  right: auto;\n  left: 10px;\n}\n\n/*******************************************************************************\n * Appearance variants\n ******************************************************************************/\n\nio-popout[appearance=\"error\"] .icon.close::before\n{\n  background-image: url(/skin/icons/close.svg?error#error);\n}\n\nio-popout[appearance=\"error\"] .icon.close:hover::before\n{\n  background-image: url(/skin/icons/close.svg?error-hover#error-hover);\n}\n\nio-popout[appearance=\"error\"]\n{\n  --border-color: var(--color-error);\n}\n\nio-popout[appearance=\"error\"] ul\n{\n  padding: 0 var(--horizontal-padding);\n  margin-bottom: 1rem;\n}\n\nio-popout[appearance=\"error\"] .error-list li\n{\n  --border-size: 4px;\n  --border: var(--border-size) solid var(--background-color-error);\n  --padding: calc(var(--horizontal-padding) - var(--border-size));\n  display: block;\n  border-radius: 0;\n  margin: 0.8rem 0;\n  color: var(--color-error);\n}\n\nhtml:not([dir=\"rtl\"]) io-popout[appearance=\"error\"] .error-list li\n{\n  border-left: var(--border);\n  padding-left: var(--padding);\n}\n\nhtml[dir=\"rtl\"] io-popout[appearance=\"error\"] .error-list li\n{\n  border-right: var(--border);\n  padding-right: var(--padding);\n}\n\nio-popout[appearance=\"error\"] .error-list li a\n{\n  display: block;\n  color: inherit;\n  font-weight: 600;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*******************************************************************************\n * Animations\n ******************************************************************************/\n\n@keyframes tap\n{\n  0%\n  {\n    background-position: center;\n    background-size: 40%;\n  }\n\n  20%\n  {\n    background-position: center 40%;\n    background-size: 50%;\n  }\n\n  100%\n  {\n    background-position: center;\n    background-size: 40%;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 769:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-scrollbar\n{\n  /*\n    related to the container height, as in ░▓░░░░░░░░░░░\n    or width, in case it's a vertical scrollbar\n  */\n  --size: 12px;\n  overflow: hidden;\n  cursor: default;\n  user-select: none;\n}\n\nio-scrollbar,\nio-scrollbar > .slider\n{\n  display: block;\n  box-sizing: border-box;\n  padding: 0;\n}\n\nio-scrollbar > .slider\n{\n  margin: 0;\n  border: 1px solid #979797;\n  background-color: #d8d8d8;\n  font-size: 0;\n  line-height: 0;\n}\n\nio-scrollbar[direction=\"horizontal\"]\n{\n  height: var(--size);\n}\n\nio-scrollbar[direction=\"vertical\"]\n{\n  width: var(--size);\n}\n\nio-scrollbar[direction=\"horizontal\"] > .slider\n{\n  width: var(--slider-size, var(--size));\n  height: 100%;\n  transform: translateX(var(--position, 0));\n}\n\nio-scrollbar[direction=\"vertical\"] > .slider\n{\n  width: 100%;\n  height: var(--slider-size, var(--size));\n  transform: translateY(var(--position, 0));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 507:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-toggle\n{\n  --width: 30px;\n  --height: 8px;\n  --translateY: -4px;\n  --translateX: 14px;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  border-radius: 4px;\n  background-color: #9b9b9b;\n  cursor: pointer;\n  transition: background 0.2s ease-out;\n  transform: translateY(calc(var(--translateY) * -1));\n  will-change: background;\n}\n\nhtml[dir=\"rtl\"] io-toggle\n{\n  --translateX: -14px;\n}\n\nio-toggle[checked]\n{\n  background-color: #92d3ea;\n}\n\nio-toggle[disabled]\n{\n  opacity: 0.5;\n  cursor: default;\n}\n\nio-toggle button\n{\n  width: calc(var(--height) * 2);\n  height: calc(var(--height) * 2);\n  padding: 0;\n  border: 2px solid #e1e0e1;\n  border-radius: var(--height);\n  outline: none;\n  cursor: pointer;\n  transition: border 0.2s ease-out,\n    box-shadow 0.2s ease-out,\n    transform 0.2s ease-out,\n    width 0.2s ease-out;\n  transform: translateY(var(--translateY));\n  will-change: border, box-shadow, transform, width;\n}\n\nio-toggle button[aria-checked=\"false\"]\n{\n  background-color: #f1f1f1;\n  box-shadow: 0 1px 2px 0 #e5d1d1;\n}\n\nio-toggle button[aria-checked=\"false\"]:hover\n{\n  box-shadow: 0 2px 4px 0 #d3b0b0;\n}\n\nio-toggle button[aria-checked=\"true\"]\n{\n  border: 2px solid #0797E1;\n  background-color: #0797E1;\n  box-shadow: 0 1px 2px 0 #a6cede;\n  transform: translateY(var(--translateY)) translateX(var(--translateX));\n}\n\nio-toggle button[aria-checked=\"true\"]:hover\n{\n  box-shadow: 0 2px 4px 0 #a6cede;\n}\n\nio-toggle button:focus,\nio-toggle button[aria-checked=\"true\"]:focus\n{\n  border: 2px solid #87bffe;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 973:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_common_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(742);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(873);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_filter_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_list_box_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(607);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popout_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(799);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popout_fixes_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(729);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_toggle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(507);
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_z_index_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_common_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_filter_table_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_list_box_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popout_css__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popout_fixes_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_toggle_css__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nhtml\n{\n  font-size: 16px;\n}\n\nbody\n{\n  display: grid;\n  /* We force vertical scrollbars to keep the content centered */\n  overflow-y: scroll;\n  margin: 1rem 0.3rem;\n  color: #4A4A4A;\n  background-color: #F3F3F3;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  justify-content: center;\n  grid-template-areas: \"sidebar premium-banner\"\n    \"sidebar main\";\n  grid-template-columns: auto 46.3rem auto;\n}\n\nh1\n{\n  font-size: 3rem;\n  font-weight: 300;\n  line-height: 3rem;\n}\n\nh2\n{\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n\na\n{\n  color: #0797E1;\n}\n\na:hover\n{\n  color: #5CBCE1;\n}\n\nul\n{\n  margin: 0rem;\n}\n\nmain h3\n{\n  margin-top: 0rem;\n  margin-bottom: 0.5rem;\n}\n\n.description\n{\n  font-size: 0.9rem;\n}\n\n[aria-hidden=\"true\"],\n[hidden]\n{\n  display: none !important;\n}\n\ninput[type=\"text\"],\ninput[type=\"url\"],\ntextarea,\nmain\n{\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n/*\n  Normalization\n */\n\nbutton\n{\n  font-family: inherit;\n}\n\nbutton\n{\n  border-radius: 0rem;\n}\n\n/*\n  Buttons and links\n */\n\nbutton,\n.button\n{\n  display: block;\n  padding: 0.6rem 0.8rem;\n  border-radius: var(--border-radius);\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\nbutton:disabled,\nbutton[aria-disabled=\"true\"]\n{\n  cursor: default;\n}\n\nbutton.primary:not(.icon),\n.button.primary:not(.icon),\nbutton.secondary:not(.icon),\n.button.secondary:not(.icon)\n{\n  padding: 0.6rem 2rem;\n}\n\n/* Ignore .icon to avoid overriding \"specific\" (primary, secondary) styles */\nbutton.primary:not(.icon),\n.button.primary:not(.icon)\n{\n  border: 0px;\n  color: #FFF;\n  background-color: #0797E1;\n}\n\nbutton.primary:not([disabled]):not(.icon):hover,\n.button.primary:not(.icon):hover\n{\n  box-shadow: inset 0 0 0 3px #005D80;\n}\n\nbutton.primary[disabled]:not(.icon)\n{\n  background-color: #5CBCE1;\n}\n\nbutton.secondary:not(.icon),\n.button.secondary:not(.icon)\n{\n  border: 2px solid #0797E1;\n  color: #0797E1;\n}\n\nbutton.secondary:not(.icon):hover,\n.button.secondary:not(.icon):hover\n{\n  box-shadow: inset 0 0 0 1px #0797E1;\n}\n\nbutton.link,\nbutton.list\n{\n  color: #0797E1;\n}\n\nbutton.link\n{\n  padding: 0.2rem;\n  border: 0px;\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: 400;\n  text-decoration: underline;\n  text-transform: none;\n}\n\nbutton.link:hover\n{\n  color: #5CBCE1;\n}\n\nbutton.list\n{\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #CDCDCD;\n  background-color: #E1F2FA;\n  text-align: initial;\n}\n\nbutton.list:hover\n{\n  border-color: #0797E1;\n  box-shadow: inset 0 0 0 3px #0797E1;\n}\n\nbutton.add.secondary\n{\n  width: 100%;\n  border: 1px solid #bcbcbc;\n}\n\nbutton.add.secondary:hover\n{\n  border-color: #0797E1;\n}\n\nbutton.add::before\n{\n  content: \"+ \";\n}\n\n#filters-box li[aria-selected=\"true\"]\n{\n  background-color: #e1f2fa;\n}\n\n#filterlist-by-url-wrap\n{\n  position: relative;\n}\n\n#filterlist-by-url\n{\n  position: absolute;\n  /* ensures it overlaps same popout z-indexes */\n  z-index: var(--z-popout-active);\n  top: -260px;\n  width: 100%;\n  height: 260px;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  background: #fff;\n  box-shadow: 0 -4px 20px 0 rgba(0,0,0,0.11);\n}\n\nbutton[data-action=\"open-filterlist-by-url\"]\n{\n  /* needed to avoid being shadowed by #filterlist-by-url */\n  position: relative;\n  z-index: 1;\n  background-color: #FFF;\n}\n\n.side-controls:not(.wrap)\n{\n  display: flex;\n  margin: 0.8rem 0rem;\n  justify-content: flex-end;\n}\n\n.side-controls > *\n{\n  margin: 0rem;\n}\n\n#filterlist-by-url .main-input,\n#filterlist-by-url h3\n{\n  margin: 0.8rem;\n}\n\n#filterlist-by-url h3\n{\n  text-transform: uppercase;\n}\n\n#filterlist-by-url .side-controls\n{\n  justify-content: flex-start;\n}\n\n/*\n  Due to Edge adoption as new target browser\n  we cannot use -moz/webkit-margin-start\n  or -moz/webkit-margin-end because\n  these lack Edge support.\n  Yet we need to preserve html direction\n  and potential UI that might swap right to left.\n*/\nhtml:not([dir=\"rtl\"]) .side-controls > *\n{\n  margin-left: 0.8rem;\n}\n\nhtml[dir=\"rtl\"] .side-controls > *\n{\n  margin-right: 0.8rem;\n}\n\n.side-controls.wrap > *\n{\n  margin: 0.6rem 0;\n}\n\nhtml:not([dir=\"rtl\"]) .side-controls.wrap > *\n{\n  margin-left: auto;\n}\n\nhtml[dir=\"rtl\"] .side-controls.wrap > *\n{\n  margin-right: auto;\n}\n\n/*\n  icons\n */\n\n.icon\n{\n  padding: 0px;\n  border: 0px;\n  background-color: transparent;\n}\n\n.icon:hover\n{\n  box-shadow: none;\n}\n\n.icon::before\n{\n  display: block;\n  border: 0.2rem solid transparent;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n\ninput[type=\"checkbox\"].icon\n{\n  margin-top: -1px;\n  margin-left: 2px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ninput[type=\"checkbox\"].icon:not(:disabled),\ninput[type=\"checkbox\"].icon:not(:disabled) + label[for]\n{\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"].icon::before\n{\n  border-width: 0.05rem;\n}\n\n/*\n all button[role=\"checkbox\"] styles can be removed once the html and js are\n updated to use input[type=\"checkbox\"]. I started improving the code I touched\n but generally speaking, accessibility properties should not be used for\n styling.\n\n For now I have just made sure both types work\n*/\n\nbutton[role=\"checkbox\"].icon::before,\ninput[type=\"checkbox\"].icon::before\n{\n  width: 1.2rem;\n  height: 1.2rem;\n  padding: 0px;\n}\n\nbutton[role=\"checkbox\"][disabled].icon:not(.toggle)::before,\nbutton[role=\"checkbox\"][aria-disabled=\"true\"].icon:not(.toggle)::before\n{\n  margin: 0.2rem;\n  border: 0rem;\n  border-radius: 2px;\n  background-color: #ccc;\n}\n\nbutton[role=\"checkbox\"].icon:not(.toggle)::before,\ninput[type=\"checkbox\"].icon:not(.toggle)::before\n{\n  /* Using ?query as a workaround to chromium bug #643716 */\n  background-image: url(/skin/icons/checkbox.svg?off#off);\n}\n\ninput[type=\"checkbox\"].icon:disabled::before\n{\n  background-image: url(/skin/icons/checkbox.svg?off-disabled#off-disabled);\n}\n\nbutton[role=\"checkbox\"][aria-checked=\"true\"].icon:not(.toggle)::before,\ninput[type=\"checkbox\"].icon:checked:not(.toggle)::before\n{\n  background-image: url(/skin/icons/checkbox.svg?on#on);\n}\n\nbutton[role=\"checkbox\"][aria-checked=\"true\"].icon:disabled:not(.toggle)::before,\ninput[type=\"checkbox\"].icon:checked:disabled:not(.toggle)::before\n{\n  background-image: url(/skin/icons/checkbox.svg?on-disabled#on-disabled);\n}\n\nbutton[role=\"checkbox\"].icon.toggle::before,\ninput[type=\"checkbox\"].icon.toggle::before\n{\n  width: 1.9rem;\n  height: 1rem;\n  background-image: url(/skin/icons/toggle.svg?on#on);\n}\n\nbutton[role=\"checkbox\"][aria-checked=\"false\"].icon.toggle::before,\ninput[type=\"checkbox\"].icon.toggle:not(:checked)::before\n{\n  background-image: url(/skin/icons/toggle.svg?off#off);\n}\n\nbutton[role=\"checkbox\"][disabled].icon.toggle::before,\ninput[type=\"checkbox\"].icon.toggle:disabled::before\n{\n  background: none;\n}\n\n.icon.delete::before\n{\n  background-image: url(/skin/icons/trash.svg?default#default);\n}\n\n.icon.delete:hover::before\n{\n  background-image: url(/skin/icons/trash.svg?hover#hover);\n}\n\n.icon.delete::before\n{\n  width: 1rem;\n  height: 1rem;\n}\n\n[data-validation] .main-input input:focus:invalid ~ .icon.attention::before\n{\n  background-image: url(/skin/icons/attention.svg);\n}\n\n[data-validation] .main-input input:valid ~ .icon.attention::before\n{\n  background-image: url(/skin/icons/checkmark.svg?approved#approved);\n}\n\n.icon.update-subscription::before\n{\n  background-image: url(/skin/icons/reload.svg);\n}\n\n.icon.website::before\n{\n  background-image: url(/skin/icons/globe.svg);\n}\n\n.icon.source::before\n{\n  background-image: url(/skin/icons/code.svg);\n}\n\n.icon.delete::before\n{\n  background-image: url(/skin/icons/trash.svg?default#default);\n}\n\n.close\n{\n  margin: 0;\n  cursor: pointer;\n}\n\n.close.icon::before\n{\n  width: 1rem;\n  height: 1rem;\n}\n\n.icon.close.primary::before\n{\n  background-image: url(/skin/icons/close.svg?primary#primary);\n}\n\n.icon.close.primary:hover::before\n{\n  background-image: url(/skin/icons/close.svg?primary-hover#primary-hover);\n}\n\n.icon.close.secondary::before\n{\n  background-image: url(/skin/icons/close.svg?secondary#secondary);\n}\n\n.icon.close.tertiary::before\n{\n  background-image: url(/skin/icons/close.svg?tertiary#tertiary);\n}\n\n.icon.close.secondary:hover::before\n{\n  background-image: url(/skin/icons/close.svg?secondary-hover#secondary-hover);\n}\n\n.icon.close.tertiary:hover::before\n{\n  background-image: url(/skin/icons/close.svg?tertiary-hover#tertiary-hover);\n}\n\n#dialog .table.list li button.icon::before\n{\n  width: 1.3rem;\n  height: 1.3rem;\n  margin: 0rem;\n  border: 0rem;\n  background-image: none;\n}\n\n#dialog .table.list li button[aria-checked=\"true\"].icon::before\n{\n  background-image: url(/skin/icons/checkmark.svg?default#default);\n}\n\n#social ul li .icon::before\n{\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0em auto;\n}\n\n.icon.twitter::before\n{\n  background-image: url(/skin/icons/twitter.svg);\n}\n\n.icon.facebook::before\n{\n  background-image: url(/skin/icons/facebook.svg);\n}\n\n/*\n  Forms\n */\n\n.main-input\n{\n  position: relative;\n  margin: 1.8rem 0rem 0.5rem;\n  padding-top: 0.7rem;\n}\n\n.main-input input\n{\n  width: 100%;\n  padding: var(--padding-primary);\n  border: 1px solid #CDCDCD;\n  outline: none;\n  font-size: 1rem;\n}\n\n[data-validation] .main-input input ~ .error-msg\n{\n  display: none;\n  position: absolute;\n  top: calc(var(--padding-primary) * -2);\n  right: 0;\n  z-index: 10;\n  color: var(--color-error);\n}\n\n[data-validation] .side-controls\n{\n  margin-top: 1.2rem;\n}\n\nhtml[dir=\"rtl\"] [data-validation] .main-input input ~ .error-msg\n{\n  right: auto;\n  left: 0;\n}\n\n[data-validation] .main-input input:focus:invalid ~ .error-msg\n{\n  display: block;\n}\n\n[data-validation] .main-input input:focus:invalid\n{\n  border-color: var(--color-error);\n}\n\n[data-validation] .main-input input:focus:invalid ~ .attention::before,\n[data-validation] .main-input input ~ .attention::before\n{\n  position: absolute;\n  top: 0.8rem;\n  right: 0rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  margin: 0.8rem;\n}\n\n/* stylelint-disable indentation */\nhtml[dir=\"rtl\"] [data-validation] .main-input input:focus:invalid\n  ~ .attention::before,\nhtml[dir=\"rtl\"] [data-validation] .main-input input\n  ~ .attention::before\n{\n  right: auto;\n  left: 0rem;\n}\n/* stylelint-enable indentation */\n\n/*\n  Animations\n*/\n\n.highlight-animate\n{\n  animation: highlight 1s 3;\n}\n\n@keyframes highlight\n{\n  0% { background-color: transparent }\n\n  30% { background-color: #ffd7a3 }\n\n  70% { background-color: #ffd7a3 }\n\n  100% { background-color: transparent }\n}\n\n/*\n  Sidebar\n */\n\n#sidebar,\n#sidebar .fixed,\n[role=\"tablist\"]\n{\n  width: 14.3rem;\n}\n\n#sidebar\n{\n  grid-area: sidebar;\n  flex-shrink: 0;\n}\n\n#sidebar .fixed\n{\n  top: 1.2rem;\n  bottom: 0rem;\n  height: auto;\n}\n\nhtml[dir=\"ltr\"] #sidebar header\n{\n  margin-right: 2rem;\n}\n\nhtml[dir=\"rtl\"] #sidebar header\n{\n  margin-left: 2rem;\n}\n\n#sidebar header h1,\n#sidebar header p\n{\n  margin: 0rem;\n  user-select: none;\n}\n\n#sidebar header h1\n{\n  font-size: 0;\n  line-height: 48px;\n  color: transparent;\n  background-image: url(/skin/icons/logo/abp-full.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#sidebar header p\n{\n  margin-top: 30px;\n  line-height: 2.6rem;\n  opacity: 0.6;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nhtml[dir=\"rtl\"] #sidebar header\n{\n  text-align: left;\n}\n\nhtml[dir=\"rtl\"] #sidebar header p\n{\n  text-align: right;\n}\n\nhtml[dir=\"rtl\"] #sidebar header h1\n{\n  background-position: center left;\n}\n\n#sidebar nav,\n#sidebar footer\n{\n  margin: 1.4rem 0rem;\n}\n\n[role=\"tablist\"]\n{\n  position: relative;\n  margin: 0rem;\n  padding: 0rem;\n  font-size: 1rem;\n  list-style: none;\n}\n\nli a[role=\"tab\"]\n{\n  display: flex;\n  margin-right: -1px;\n  margin-left: -1px;\n  padding: 1rem 0.8rem;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nli a[role=\"tab\"]:hover\n{\n  background-color: #EAEAEA;\n}\n\nli a[role=\"tab\"][aria-selected]\n{\n  border-color: #CDCDCD;\n  background-color: #FFF;\n  font-weight: 700;\n}\n\nhtml[dir=\"rtl\"] li a[role=\"tab\"]\n{\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n}\n\nhtml:not([dir=\"rtl\"]) li a[role=\"tab\"]:hover\n{\n  border-right-color: #CDCDCD;\n}\n\nhtml[dir=\"rtl\"] li a[role=\"tab\"]:hover\n{\n  border-left-color: #CDCDCD;\n}\n\nhtml:not([dir=\"rtl\"]) li a[role=\"tab\"][aria-selected]\n{\n  border-right-color: transparent;\n}\n\nhtml[dir=\"rtl\"] li a[role=\"tab\"][aria-selected]\n{\n  border-left-color: transparent;\n}\n\n#sidebar footer\n{\n  width: 100%;\n}\n\n#sidebar footer p\n{\n  display: flex;\n  margin: 1rem 0rem;\n  justify-content: center;\n}\n\n#support-us\n{\n  position: fixed;\n  bottom: 40px;\n  margin: 0 40px;\n}\n\n#support-us .h2-icon\n{\n  /* Align icon with edges of text based on text's line height and font size */\n  width: 2em;\n  height: 2em;\n  margin-top: 0.3em;\n}\n\nhtml:not([dir=\"rtl\"]) #support-us .h2-icon\n{\n  float: left;\n  margin-right: 0.5em;\n}\n\nhtml[dir=\"rtl\"] #support-us .h2-icon\n{\n  float: right;\n  margin-left: 0.5em;\n}\n\n#support-us h2\n{\n  margin: 0;\n  font-size: 1rem;\n}\n\n#support-us p\n{\n  text-align: center;\n}\n\n#support-us a.button\n{\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 2px;\n  border: 1px solid var(--border-color-ternary);\n  font-size: var(--font-size-primary);\n  color: #0797e1;\n  text-transform: uppercase;\n  text-align: center;\n  transition: background-color 0.2s ease-out;\n}\n\n#support-us a.button:last-of-type\n{\n  margin-bottom: 0;\n}\n\n#support-us a.button:hover,\n#support-us a.button:focus\n{\n  background-color: #e9f6fc;\n}\n\n/* This is a stopgap solution of footer overlapping tabs on low resolutions */\n@media (min-height: 37rem)\n{\n  #sidebar .fixed\n  {\n    position: fixed;\n  }\n\n  #sidebar footer\n  {\n    position: absolute;\n    bottom: 0px;\n  }\n}\n\n/*\n  Premium\n */\n\n.premium.icon::before\n{\n  border: none;\n  content: none;\n}\n\nbody.premium .premium.icon::before\n{\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin-right: 0.5rem;\n  background-image: url(/skin/icons/premium-crown.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 0 3px;\n  content: \"\";\n}\n\nbody.premium .premium.upgrade.button\n{\n  display: none;\n}\n\n.premium.upgrade.button\n{\n  display: inline-block;\n  padding: 8px 20px;\n  background-color: var(--color-premium);\n  color: var(--background-color-primary);\n  text-transform: none;\n  white-space: nowrap;\n}\n\n.premium.upgrade.button:hover,\n.premium.upgrade.button:focus\n{\n  background-color: var(--color-premium-hover);\n}\n\n.premium.list button.icon[role=\"checkbox\"]:disabled::before\n{\n  margin-top: 0;\n  background-color: transparent;\n  background-image: url(/skin/icons/premium-lock.svg);\n  background-position: center;\n}\n\n.premium-banner-container\n{\n  grid-area: premium-banner;\n}\n\n.premium-banner-container .banner\n{\n  display: flex;\n  padding: 1.4rem;\n  margin-bottom: 1.4rem;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n}\n\n.premium-banner-container .banner.background\n{\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.premium-banner-container .banner.foreground\n{\n  background-color: var(--background-color-primary);\n}\n\n.premium-banner-container .premium-label\n{\n  display: flex;\n  font-weight: 700;\n}\n\n.premium-banner-container a\n{\n  white-space: nowrap;\n}\n\n.premium-banner-container .button\n{\n  padding: 0;\n  text-transform: none;\n}\n\nbody.premium .premium-upgrade.banner\n{\n  display: none;\n}\n\n.premium-upgrade.banner .premium-label\n{\n  align-items: baseline;\n  font-size: 20px;\n}\n\n.premium-upgrade.banner .premium-label::before\n{\n  margin: 0 7px;\n  width: 25px;\n  height: 17px;\n  background-image: url(/skin/icons/premium-crown.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  content: \"\";\n}\n\n.premium-upgrade.banner p\n{\n  margin: 0 1rem;\n}\n\nbody:not(.premium) .premium-manage.banner\n{\n  display: none;\n}\n\n.premium-manage.banner\n{\n  justify-content: flex-end;\n}\n\n.premium-manage.banner > *\n{\n  margin-right: 10px;\n}\n\nhtml:not([dir=\"rtl\"]) .premium-manage.banner > *:last-child,\nhtml[dir=\"rtl\"] .premium-manage.banner > *:first-child\n{\n  margin-right: 0;\n}\n\n.premium-manage.banner .premium-label\n{\n  --button-primary-color: var(--color-premium);\n  align-items: baseline;\n  padding: 5px 11px;\n  border: 1px solid;\n  border-radius: var(--border-radius);\n  color: var(--button-primary-color);\n  font-size: var(--font-size-primary);\n  line-height: 16px;\n}\n\n.premium-manage.banner .premium-label:hover,\n.premium-manage.banner .premium-label:focus\n{\n  --button-primary-color: var(--color-premium-hover);\n}\n\n.premium-manage.banner .premium-label::before\n{\n  width: 15px;\n  height: 10px;\n  margin-right: 3px;\n  -webkit-mask-image: url(/skin/icons/premium-crown.svg);\n  mask-image: url(/skin/icons/premium-crown.svg);\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n  -webkit-mask-position: center;\n  mask-position: center;\n  background-color: var(--button-primary-color);\n  content: \"\";\n}\n\n/*\n  Main content\n */\n\nbody[data-tab|=\"general\"] #content-general,\nbody[data-tab|=\"advanced\"] #content-advanced,\nbody[data-tab|=\"allowlist\"] #content-allowlist,\nbody[data-tab|=\"help\"] #content-help\n{\n  display: block;\n}\n\nmain\n{\n  grid-area: main;\n  padding: 0px 0rem 1.4rem;\n  border: 1px solid #CDCDCD;\n  border-radius: var(--border-radius);\n  background-color: #FFF;\n}\n\nmain > div\n{\n  display: none;\n}\n\nmain p\n{\n  margin: 0.8rem 0rem;\n}\n\n/*\n  Sections\n */\n\n[role=\"tabpanel\"] > section,\n[role=\"tabpanel\"] > .section\n{\n  margin: 0 2rem;\n  padding: 1.4rem 0;\n  border-top: 1px solid #CDCDCD;\n}\n\n[role=\"tabpanel\"] > header h1,\n[role=\"tabpanel\"] > header p\n{\n  margin: 1.4rem 0rem;\n  padding: 0rem 2rem;\n}\n\nsection h2,\n.section h2\n{\n  margin: 0rem;\n}\n\nsection h2\n{\n  text-transform: uppercase;\n}\n\nsection,\n.section\n{\n  clear: both;\n}\n\nsection.cols\n{\n  display: flex;\n}\n\nsection.cols > *:first-child\n{\n  flex: 1;\n}\n\nhtml:not([dir=\"rtl\"]) section.cols > *:first-child\n{\n  margin-right: 2rem;\n}\n\nhtml[dir=\"rtl\"] section.cols > *:first-child\n{\n  margin-left: 2rem;\n}\n\nsection.cols > *:last-child\n{\n  flex: 3;\n}\n\n/*\n  Acceptable ads\n */\n\n#tracking-warning\n{\n  position: relative;\n  margin-bottom: 1rem;\n  padding: 1.5rem;\n  border: 2px solid #ffd7a3;\n  background-color: #fefbe3;\n}\n\n#acceptable-ads:not(.show-warning) #tracking-warning\n{\n  display: none;\n}\n\n#hide-tracking-warning\n{\n  position: absolute;\n  top: 0.8rem;\n  right: 0.8rem;\n}\n\nhtml[dir=\"rtl\"] #hide-tracking-warning\n{\n  right: auto;\n  left: 1rem;\n}\n\n#tracking-warning .link\n{\n  color: inherit;\n  font-weight: 700;\n  text-decoration: underline;\n}\n\n#acceptable-ads ul\n{\n  position: relative;\n  padding-left: 2.2rem;\n  list-style: none;\n}\n\nhtml[dir=\"rtl\"] #acceptable-ads ul\n{\n  padding-right: 2.2rem;\n  padding-left: 0rem;\n}\n\n#acceptable-ads ul button,\n#acceptable-ads ul input\n{\n  position: absolute;\n}\n\nhtml[dir=\"ltr\"] button,\nhtml[dir=\"ltr\"] input\n{\n  left: 0rem;\n}\n\nhtml[dir=\"rtl\"] button,\nhtml[dir=\"rtl\"] input\n{\n  right: 0rem;\n}\n\n#acceptable-ads label\n{\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n#acceptable-ads #acceptable-ads-why-not\n{\n  --background-color: #FFF;\n  --border-color: #099CD0;\n  position: absolute;\n  z-index: 1;\n  width: 260px;\n  margin-top: 15px;\n  padding: 16px;\n  box-sizing: border-box;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n  background-color: var(--background-color);\n  text-align: center;\n}\n\nhtml[dir=\"ltr\"] #acceptable-ads #acceptable-ads-why-not\n{\n  left: -117px;\n}\n\nhtml[dir=\"rtl\"] #acceptable-ads #acceptable-ads-why-not\n{\n  right: -117px;\n}\n\n#acceptable-ads #acceptable-ads-why-not::before\n{\n  display: block;\n  position: absolute;\n  top: -6px;\n  left: calc(50% - 5px);\n  width: 10px;\n  height: 10px;\n  border: 1px solid var(--border-color);\n  border-right: none;\n  border-bottom: none;\n  background-color: var(--background-color);\n  content: \"\";\n  transform: rotate(45deg);\n}\n\n#acceptable-ads #acceptable-ads-why-not > a,\n#acceptable-ads #acceptable-ads-why-not > button\n{\n  font-size: 0.9rem;\n}\n\n#acceptable-ads #acceptable-ads-why-not > button\n{\n  position: initial;\n  margin: auto;\n  border: 0;\n  color: #0797E1;\n}\n\nhtml:not([dir=\"rtl\"]) #acceptable-ads label\n{\n  margin-right: 0.5rem;\n}\n\nhtml[dir=\"rtl\"] #acceptable-ads label\n{\n  margin-left: 0.5rem;\n}\n\n#dnt\n{\n  padding: 0.8rem;\n  border: 1px solid #0797E1;\n}\n\n/*\n  Tables\n */\n\nul.table,\nul.list\n{\n  margin: 0rem;\n  padding: 0rem;\n  list-style: none;\n}\n\n.table li,\n.list li\n{\n  display: flex;\n  align-items: center;\n}\n\n.table li\n{\n  margin: 0rem;\n  border-width: 0px 1px 1px;\n  border-style: solid;\n  border-color: #CDCDCD;\n}\n\n.list li\n{\n  margin-bottom: 0.8rem;\n  padding: 0rem;\n}\n\n.list li [role=\"checkbox\"]\n{\n  flex-shrink: 0;\n}\n\n.table li:first-of-type\n{\n  border-top: 1px solid #CDCDCD;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n\n.table.list li\n{\n  margin: 0rem;\n  padding: 0.5rem 1rem;\n}\n\n.table.list.bottom-control li:last-of-type\n{\n  border-bottom: 0px;\n}\n\n.list li > span\n{\n  margin: 0rem 1rem;\n}\n\n.table.list li > span\n{\n  overflow: hidden;\n  margin: 0rem;\n  flex: 1;\n  text-overflow: ellipsis;\n}\n\n#content-allowlist .table.list li > span\n{\n  white-space: nowrap;\n}\n\n.table.list li[aria-label^=\"https://\"] > span,\n.table.list li[aria-label^=\"data:\"] > span\n{\n  white-space: initial;\n  word-break: break-all;\n}\n\n.table.list li.empty-placeholder,\n#all-filter-lists-table .empty-placeholder\n{\n  padding: 1rem 1.4rem;\n}\n\n.table.list li.empty-placeholder:not(:last-of-type)\n{\n  border-bottom: 0px;\n}\n\n.table.list button.link\n{\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.table:not(.list):not(.cols) li\n{\n  padding-top: 0px;\n  padding-bottom: 6px;\n}\n\n.table li [data-single=\"visible\"],\n.table li:first-of-type:last-of-type [data-single=\"hidden\"]\n{\n  display: none;\n}\n\n.table li:first-of-type:last-of-type [data-single=\"visible\"]\n{\n  display: block;\n}\n\n.th\n{\n  display: flex;\n}\n\n.col5 > *\n{\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.cols .col5,\n.th .col5\n{\n  margin: 0rem 1rem;\n  align-self: center;\n}\n\n.th .col5:nth-of-type(1),\n.table .col5:nth-of-type(1)\n{\n  flex: 3;\n  text-align: center;\n}\n\n.th .col5:nth-of-type(2),\n.table .col5:nth-of-type(2)\n{\n  flex: 8;\n}\n\n.table [aria-label^=\"https://\"] .col5:nth-of-type(2),\n.table [aria-label^=\"data:\"] .col5:nth-of-type(2)\n{\n  word-break: break-all;\n}\n\n.th .col5:nth-of-type(3),\n.table .col5:nth-of-type(3)\n{\n  flex: 4;\n}\n\n.th .col5:nth-of-type(4),\n.table .col5:nth-of-type(4)\n{\n  flex: 1;\n}\n\n.th .col5:nth-of-type(5),\n.table .col5:nth-of-type(5)\n{\n  flex: 1;\n}\n\nhtml:not([dir=\"rtl\"]) .th .col5:nth-of-type(5),\nhtml:not([dir=\"rtl\"]) .table .col5:nth-of-type(5)\n{\n  margin-right: 1.8rem;\n  margin-left: 0;\n}\n\nhtml[dir=\"rtl\"] .th .col5:nth-of-type(5),\nhtml[dir=\"rtl\"] .table .col5:nth-of-type(5)\n{\n  margin-right: 0;\n  margin-left: 1.8rem;\n}\n\n.table.cols > span\n{\n  margin: 0rem;\n}\n\n.table.cols li\n{\n  padding: 0.5rem 0rem;\n}\n\n.table.cols li.error .col5:nth-of-type(2)\n{\n  color: var(--color-error);\n  font-style: italic;\n}\n\n.table.cols .toggle\n{\n  -moz-margin-end: 0.5rem;\n  -webkit-margin-end: 0.5rem;\n}\n\n#dialog .table.list li\n{\n  display: block;\n  padding: 0rem;\n  border-width: 1px 0px 0px;\n}\n\n#dialog .table.list li:first-of-type\n{\n  border: 0px;\n}\n\n#dialog .table.list li button\n{\n  display: flex;\n  width: 100%;\n  height: auto;\n  padding: 1.1rem 1rem;\n  background-image: none;\n}\n\n#dialog .table.list li button:hover,\n#dialog .table.list li button:focus\n{\n  background-color: #E1F2FA;\n}\n\n#dialog .table.list li button[aria-checked=\"true\"],\n.table.list li .dimmed\n{\n  color: #BBB;\n}\n\n#dialog .table.list li button > span\n{\n  margin: 0rem 0.8rem;\n  font-weight: 400;\n  text-transform: none;\n  flex: none;\n}\n\nli.preconfigured [data-hide=\"preconfigured\"]\n{\n  display: none !important;\n}\n\n/*\n  Tooltips\n*/\n\n.tooltip\n{\n  position: relative;\n  margin: 0rem;\n  line-height: 1.5rem;\n  text-decoration: none;\n  cursor: help;\n}\n\nhtml:not([dir=\"rtl\"]) .tooltip\n{\n  margin-right: 1rem;\n}\n\nhtml[dir=\"rtl\"] .tooltip\n{\n  margin-left: 1rem;\n}\n\n/*\n  General tab content\n*/\n\nsection.recommended-features\n{\n  display: flex;\n  padding-top: 2rem;\n}\n\nsection.recommended-features > :not(template)\n{\n  flex: 1;\n  margin-right: 24px;\n}\n\n/* stylelint-disable indentation */\nhtml:not([dir=\"rtl\"])\n  section.recommended-features > :not(template):last-of-type,\nhtml[dir=\"rtl\"] section.recommended-features > :not(template):first-of-type\n{\n  margin-right: 0;\n}\n/* stylelint-enable indentation */\n\nsection.recommended-features h2\n{\n  display: flex;\n  margin-bottom: 1.75rem;\n}\n\nsection.recommended-features .premium.list-header\n{\n  display: flex;\n  align-items: flex-start;\n}\n\nsection.recommended-features .premium.list-header > *\n{\n  margin-right: 1.4rem;\n}\n\n/* stylelint-disable indentation */\nhtml:not([dir=\"rtl\"]) section.recommended-features\n  .premium.list-header > *:last-child,\nhtml[dir=\"rtl\"] section.recommended-features\n  .premium.list-header > *:first-child\n{\n  margin-right: 0;\n}\n/* stylelint-enable indentation */\n\nsection.recommended-features .premium.list-header a.button\n{\n  transform: translateY(-25%);\n}\n\nsection.recommended-features li\n{\n  align-items: flex-start;\n}\n\nsection.recommended-features .description-container\n{\n  margin: 0 0.5rem;\n}\n\nsection.recommended-features li button\n{\n  margin-top: -2px;\n}\n\nsection.recommended-features h3\n{\n  display: inline-block;\n  margin: 0;\n  font-size: 1rem;\n}\n\nsection.recommended-features li .label.new\n{\n  display: none;\n  margin: 0 4px;\n  padding: 0 4px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-size: var(--font-size-small);\n  color: #FFF;\n  background-color: var(--background-color-info);\n}\n\nsection.recommended-features li.new .label.new\n{\n  display: inline-block;\n}\n\nsection.recommended-features .description\n{\n  margin: 0.25rem 0;\n}\n\n#blocking-languages li button[data-single]\n{\n  padding: 0;\n}\n\n#languages-box\n{\n  margin-bottom: 0.8rem;\n}\n\nhtml[lang^=\"de\"] #language-recommend,\nhtml[lang^=\"fr\"] #language-recommend,\n/*\n  Hide language recommendation feature for Opera users\n  due to problems with its language detection\n  https://gitlab.com/eyeo/adblockplus/abpui/adblockplusui/-/issues/960\n*/\nhtml[data-application=\"opera\"] #language-recommend\n{\n  display: none;\n}\n\n/*\n  Allowlist tab\n */\n\n#content-allowlist form\n{\n  display: flex;\n  margin-bottom: 1.4rem;\n}\n\n#content-allowlist form input\n{\n  padding: 0.5rem 1rem;\n  border: 2px solid #0797E1;\n  border-radius: var(--border-radius);\n  font-size: 1rem;\n  flex: 1;\n}\n\nhtml:not([dir=\"rtl\"]) #content-allowlist form button\n{\n  margin-left: 0.7rem;\n}\n\nhtml[dir=\"rtl\"] #content-allowlist form button\n{\n  margin-right: 0.7rem;\n}\n\n#allowlisting-table li\n{\n  padding-right: 1.4rem;\n  padding-left: 1.4rem;\n  border-right: 0rem;\n  border-left: 0rem;\n}\n\n/*\n  Advanced tab content\n*/\n\n#custom-filters\n{\n  margin-top: 3rem;\n}\n\n#custom-filters h3\n{\n  font-size: 1.125rem;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n#custom-filters .io-filter-table-title\n{\n  font-weight: 600;\n}\n\nhtml:not([dir=\"rtl\"]) #custom-filters .io-filter-table-title\n{\n  margin-right: 2rem;\n}\n\nhtml[dir=\"rtl\"] #custom-filters .io-filter-table-title\n{\n  margin-left: 2rem;\n}\n\n#update-all-subscriptions button\n{\n  display: initial;\n}\n\n#update-all-subscriptions\n{\n  margin: 2rem auto;\n  text-align: right;\n}\n\nhtml[dir=\"rtl\"] #update-all-subscriptions\n{\n  text-align: left;\n}\n\n#all-filter-lists-table li.show-message .last-update,\n#all-filter-lists-table li:not(.show-message) .message,\n#all-filter-lists-table li.error .last-update,\n#all-filter-lists-table li:not(.error) io-popout[appearance=\"error\"],\n#acceptable-ads:not(.show-dnt-notification) #dnt\n{\n  display: none;\n}\n\n#all-filter-lists-table li.show-message .message.error\n{\n  color: var(--color-error);\n}\n\n#all-filter-lists-table li.show-message .message.error::before\n{\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-right: 0.5em;\n  vertical-align: middle;\n  background-image: url(/skin/icons/attention.svg);\n  background-size: contain;\n  content: \"\";\n}\n\nhtml[dir=\"rtl\"] #all-filter-lists-table li.show-message .message.error::before\n{\n  margin-right: 0;\n  margin-left: 0.5em;\n}\n\n#all-filter-lists-table\n{\n  margin-bottom: 0.8rem;\n}\n\n/*\n  Help tab content\n*/\n\n#social ul\n{\n  padding: 0px;\n  list-style: none;\n}\n\n#social ul li\n{\n  display: inline-block;\n}\n\nhtml:not([dir=\"rtl\"]) #social ul li\n{\n  margin-right: 1rem;\n}\n\nhtml[dir=\"rtl\"] #social ul li\n{\n  margin-left: 1rem;\n}\n\n#social ul li a\n{\n  display: block;\n  text-align: center;\n  text-decoration: none;\n}\n\n/*\n  Dialog\n*/\n\n#dialog-background\n{\n  display: none;\n  position: fixed;\n  z-index: var(--z-dialog);\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.2;\n  background-color: #000;\n}\n\nbody[data-dialog] #dialog-background\n{\n  display: block;\n}\n\n#dialog\n{\n  overflow: hidden;\n  position: fixed;\n  z-index: var(--z-dialog);\n  top: 50%;\n  right: 0;\n  left: 0;\n  width: 700px;\n  margin: auto;\n  padding: 20px;\n  border-radius: var(--border-radius);\n  background-color: #FFF;\n  box-shadow: 0 -4px 20px 0 rgba(255, 255, 255, 0.11);\n  transform: translateY(-50%);\n}\n\n#dialog-title h3\n{\n  margin: 0 0 1.2em;\n  text-transform: uppercase;\n}\n\n#dialog-body\n{\n  overflow: auto;\n  max-height: 60vh;\n}\n\n#dialog-body h3\n{\n  margin: 0 0 0.5em;\n  line-height: 0.9em;\n  font-size: 0.9em;\n}\n\n#dialog-body h3::before\n{\n  position: absolute;\n  width: 18px;\n  height: 11px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n\nhtml[dir=\"ltr\"] #dialog-body h3::before\n{\n  margin-left: -26px;\n}\n\nhtml[dir=\"rtl\"] #dialog-body h3::before\n{\n  margin-right: -26px;\n}\n\n#dialog-body .field.title h3::before\n{\n  background-image: url(/skin/icons/filter-list-title.svg);\n}\n\n#dialog-body .field.url h3::before\n{\n  background-image: url(/skin/icons/filter-list-url.svg);\n}\n\n#dialog-body p\n{\n  margin: 0;\n}\n\n#dialog-body .ctas\n{\n  display: flex;\n  justify-content: end;\n  margin-top: 1.2em;\n}\n\nhtml:not([dir=\"rtl\"]) #dialog-body .ctas > *:not(:last-child),\nhtml[dir=\"rtl\"] #dialog-body .ctas > *:not(:first-child)\n{\n  margin-right: 1.5em;\n}\n\n#dialog-body .ctas button\n{\n  min-width: 150px;\n  padding: 0.5em 1em;\n  border: 1px solid var(--border-color-cta-secondary);\n  border-radius: 6px;\n  font-size: var(--font-size-primary);\n  font-weight: 700;\n  color: var(--color-cta-secondary);\n  background-color: var(--background-color-cta-secondary);\n  box-shadow: none;\n  text-transform: capitalize;\n  transition: 100ms background-color;\n  cursor: pointer;\n}\n\n#dialog-body .ctas button:hover\n{\n  background-color: var(--background-color-cta-secondary-hover);\n}\n\n#dialog-body .ctas button.primary\n{\n  border-color: var(--border-color-cta-primary);\n  color: var(--color-cta-primary);\n  background-color: var(--background-color-cta-primary);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n}\n\n#dialog-body .ctas button.primary:hover\n{\n  background-color: var(--background-color-cta-primary-hover);\n}\n\n#dialog-body .ctas button.premium\n{\n  border-color: var(--color-premium);\n  background-color: var(--color-premium);\n  color: #000;\n}\n\n#dialog-body .ctas button.premium:hover\n{\n  border-color: var(--color-premium-hover);\n  background-color: var(--color-premium-hover);\n}\n\n#dialog-content-language-add\n{\n  margin: 0rem;\n}\n\n#dialog-content-about,\n#dialog-content-invalid,\n#filters-box button[role=\"combobox\"]\n{\n  text-align: center;\n}\n\n#dialog-content-about p\n{\n  margin: 0.5rem 0rem;\n}\n\n#dialog-content-about .ctas,\n#dialog-content-invalid .ctas\n{\n  justify-content: center;\n}\n\n#dialog-content-import .side-controls\n{\n  margin-top: 2.45rem;\n}\n\n#dialog-content-invalid\n{\n  color: var(--color-error);\n}\n\n#dialog-content-invalid .error\n{\n  width: 50px;\n  height: 50px;\n  margin: 0 auto 1em;\n  border-radius: 50%;\n  font-size: 25px;\n  font-weight: 600;\n  line-height: 50px;\n  background-color: var(--background-color-error);\n}\n\n#dialog-content-invalid strong\n{\n  padding: 2px 5px;\n  border-radius: var(--border-radius);\n  font-style: italic;\n  background-color: var(--background-color-error);\n}\n\n#dialog .field\n{\n  margin-bottom: 1.5em;\n}\n\nhtml[dir=\"ltr\"] #dialog .field\n{\n  margin-left: 28px;\n}\n\nhtml[dir=\"rtl\"] #dialog .field\n{\n  margin-right: 28px;\n}\n\n#dialog .field:last-of-type\n{\n  margin-bottom: 0;\n}\n\n#dialog .table\n{\n  width: 100%;\n}\n\n#dialog .section:not(:first-child)\n{\n  margin-top: 24px;\n}\n\n#dialog .url > a\n{\n  word-wrap: break-word;\n  text-decoration: none;\n}\n\n#dialog .url > a:hover\n{\n  text-decoration: underline;\n}\n\n#dialog .url > a::after\n{\n  display: inline-block;\n  width: 0.7em;\n  height: 0.7em;\n  vertical-align: middle;\n  background-image: url(/skin/icons/open-link.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n\nhtml[dir=\"ltr\"] #dialog .url > a::after\n{\n  margin-left: 0.3em;\n}\n\nhtml[dir=\"rtl\"] #dialog .url > a::after\n{\n  margin-right: 0.3em;\n  transform: scaleX(-1);\n}\n\n/* stylelint-disable indentation */\nbody:not([data-dialog=\"about\"]) #dialog-title-about,\nbody:not([data-dialog=\"about\"]) #dialog-content-about,\nbody:not([data-dialog=\"import\"]) #dialog-title-import,\nbody:not([data-dialog=\"import\"]) #dialog-content-import,\nbody:not([data-dialog=\"language-add\"]) #dialog-title-language-add,\nbody:not([data-dialog=\"language-change\"]) #dialog-title-language-change,\nbody:not([data-dialog=\"language-add\"]):not([data-dialog=\"language-change\"])\n  #dialog-content-language-add,\nbody:not([data-dialog=\"language-add\"]) #dialog-body button.add,\nbody:not([data-dialog=\"language-change\"]) #dialog-body button.change,\nbody:not([data-dialog=\"predefined\"]) #dialog-title-predefined,\nbody:not([data-dialog=\"predefined\"]) #dialog-content-predefined,\nbody:not([data-dialog=\"invalid\"]) #dialog-title-invalid,\nbody:not([data-dialog=\"invalid\"]) #dialog-content-invalid,\nbody:not([data-dialog=\"optIn-premium-subscription\"])\n  #dialog-title-optIn-premium-subscription,\nbody:not([data-dialog=\"optIn-premium-subscription\"])\n  #dialog-content-optIn-premium-subscription,\nbody:not([data-dialog]) #dialog\n{\n  display: none;\n}\n/* stylelint-enable indentation */\n\n/*\n  Notification\n*/\n\n#notification\n{\n  display: flex;\n  position: fixed;\n  top: 0rem;\n  left: 0rem;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 1rem 1.9rem;\n  font-size: 1rem;\n}\n\n#notification strong\n{\n  text-align: center;\n  flex: 1;\n}\n\n#notification.info\n{\n  color: #0797E1;\n  background-color: rgba(225, 242, 250, 0.8);\n}\n\n#notification.error\n{\n  color: var(--color-error);\n  background-color: rgba(235, 199, 203, 0.8);\n}\n\n#notification.error .close\n{\n  display: none;\n}\n\n#notification[aria-hidden=\"false\"]\n{\n  animation: show-notification 3s;\n  will-change: transform;\n}\n\n#data-collection\n{\n  display: none;\n}\n\nhtml[data-application=\"firefox\"] #data-collection\n{\n  display: block;\n}\n\n@keyframes show-notification\n{\n  0%\n  {\n    transform: translateY(-4.8rem);\n  }\n\n  25%\n  {\n    transform: translateY(0);\n  }\n\n  75%\n  {\n    transform: translateY(0);\n  }\n\n  100%\n  {\n    transform: translateY(-4.8rem);\n  }\n}\n", ""]);
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

/***/ 155:
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n:root\n{\n  --z-popout: 10;\n  --z-popout-active: 11;\n  --z-dialog: 20;\n}\n", ""]);
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

// UNUSED EXPORTS: emitter

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

;// CONCATENATED MODULE: ./js/pages/desktop-options/add-filters-by-url.mjs
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



let ignoreFocus = false;

function closeAddFiltersByURL()
{
  // if not closed, gives back the focus to the opener being sure it'll close
  if (!isClosed())
  {
    ignoreFocus = false;
    $("[data-action='open-filterlist-by-url']").focus();
  }
}

function setupAddFiltersByURL()
{
  const wrapper = $("#filterlist-by-url-wrap");
  wrapper.addEventListener("blur", filtersBlur, true);
  wrapper.addEventListener("keydown", filtersKeydown);

  const opener = $("[data-action='open-filterlist-by-url']", wrapper);
  opener.addEventListener("mousedown", filtersToggle);
  opener.addEventListener("focus", filtersToggle);
  opener.addEventListener("keydown", openerKeys);

  const input = $("input[type='url']", wrapper);
  input.addEventListener("keyup", checkIfValid);
}

function checkIfValid(event)
{
  const {currentTarget} = event;
  const isValid = currentTarget.checkValidity();

  currentTarget.setAttribute("aria-invalid", !isValid);

  let errorText = "";
  if (!isValid)
  {
    const url = currentTarget.value;
    if (url)
    {
      let errorId = null;
      if (!(new RegExp(currentTarget.pattern).test(url)))
      {
        errorId = "options_dialog_import_subscription_location_error_protocol";
      }
      else
      {
        errorId = "options_dialog_import_subscription_location_error";
      }
      errorText = browser.i18n.getMessage(errorId);
    }
  }
  $("#import-list-url ~ .error-msg").textContent = errorText;
}

function filtersBlur()
{
  // needed to ensure there is an eventually focused element to check
  // it sets aria-hidden when focus moves elsewhere
  setTimeout(
    (wrapper) =>
    {
      const {activeElement} = document;
      if (!activeElement || !wrapper.contains(activeElement))
      {
        filtersClose();
      }
    },
    0,
    $("#filterlist-by-url-wrap")
  );
}

function filtersClose()
{
  $("#filterlist-by-url").setAttribute("aria-hidden", "true");
}

function filtersKeydown(event)
{
  // We're only interested in dialog-internal key presses so we ignore any
  // that we might get while the dialog is closed
  if (isClosed())
    return;

  const {key} = event;
  if (key !== "Enter" && key !== "Escape")
    return;

  event.preventDefault();
  event.stopPropagation();

  switch (key)
  {
    case "Enter":
      $("[data-action='validate-import-subscription']").click();
      break;
    case "Escape":
      $("[data-action='open-filterlist-by-url']").focus();
      filtersClose();
      break;
  }
}

function filtersOpen()
{
  const element = $("#filterlist-by-url");
  element.removeAttribute("aria-hidden");
  $("input[type='url']", element).focus();
}

function filtersToggle(event)
{
  // prevent mousedown + focus to backfire
  if (ignoreFocus)
  {
    ignoreFocus = false;
    return;
  }

  const {currentTarget} = event;
  const {activeElement} = document;
  ignoreFocus = event.type === "mousedown" && currentTarget !== activeElement;

  if (isClosed())
  {
    event.preventDefault();
    filtersOpen();
  }
  else
  {
    filtersClose();
  }
}

function isClosed()
{
  return $("#filterlist-by-url").getAttribute("aria-hidden") === "true";
}

function openerKeys(event)
{
  switch (event.key)
  {
    case " ":
    case "Enter":
      ignoreFocus = false;
      filtersToggle(event);
      break;
  }
}

;// CONCATENATED MODULE: ./js/pages/desktop-options/titles.mjs
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

const {getMessage} = browser.i18n;

let languageNames = new Map();

function getRawItemTitle(item)
{
  return item.title || item.originalTitle || item.url || item.text;
}

function getLanguageItemTitle(item)
{
  const description = item.languages
    .map((langCode) => languageNames.get(langCode))
    // Remove duplicate language names
    .filter((langName, idx, arr) => arr.indexOf(langName) === idx)
    .reduce(
      (acc, langName, idx) =>
      {
        if (idx === 0)
          return langName;

        return getMessage("options_language_join", [acc, langName]);
      },
      ""
    );

  if (/\+EasyList$/.test(getRawItemTitle(item)))
    return `${description} + ${getMessage("options_english")}`;

  return description;
}

function getPrettyItemTitle(item, includeRaw)
{
  const {recommended} = item;

  let description = null;
  if (recommended === "ads")
  {
    description = getLanguageItemTitle(item);
  }
  else
  {
    description = getMessage(
      `common_feature_${recommended.replace(/-/g, "_")}_title`
    );
  }

  if (!description)
    return getRawItemTitle(item);

  if (includeRaw)
    return `${getRawItemTitle(item)} (${description})`;

  return description;
}

async function loadLanguageNames()
{
  const resp = await fetch("./data/locales.json");
  const localeData = await resp.json();
  languageNames = new Map(Object.entries(localeData.nativeNames));
}

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

;// CONCATENATED MODULE: ./src/premium-subscriptions/shared/premium-subscriptions.ts
const premiumTypes = new Set(["annoyances", "cookies-premium"]);

;// CONCATENATED MODULE: ./src/premium-subscriptions/shared/index.ts


;// CONCATENATED MODULE: ./src/polyfills/ui/desktop-options.ts
function isInitialRecommendedSubscription(item) {
    return (item !== null &&
        typeof item === "object" &&
        "disabled" in item &&
        "downloadStatus" in item &&
        "homepage" in item &&
        "languages" in item &&
        "recommended" in item &&
        "title" in item &&
        "url" in item);
}
function isRecommendedSubscription(item) {
    return (item !== null &&
        typeof item === "object" &&
        "disabled" in item &&
        "languages" in item &&
        "recommended" in item &&
        "title" in item &&
        "updatable" in item &&
        "url" in item &&
        "version" in item);
}
function isCollectionSubscription(item) {
    return (isInitialRecommendedSubscription(item) || isRecommendedSubscription(item));
}

;// CONCATENATED MODULE: ./src/premium-subscriptions/ui/desktop-options.ts




function updateListItem(listItem, premiumIsActive) {
    if (!listItem) {
        return;
    }
    const checkbox = $("button[role='checkbox']", listItem);
    if (!checkbox) {
        return;
    }
    checkbox.toggleAttribute("disabled", !premiumIsActive);
    const { recommended } = listItem.dataset;
    if (recommended === "cookies-premium") {
        const checked = checkbox.getAttribute("aria-checked") === "true";
        if (checked) {
            checkbox.setAttribute("data-action", "toggle-remove-subscription");
            checkbox.removeAttribute("data-dialog");
        }
        else {
            checkbox.setAttribute("data-action", "open-dialog");
            checkbox.setAttribute("data-dialog", "optIn-premium-subscription");
        }
    }
}
function updateListItems(premiumIsActive) {
    const premiumListItems = $$("#premium-list-table li");
    premiumListItems.forEach((listItem) => {
        updateListItem(listItem, premiumIsActive);
    });
}
function getRecommendedListItem(recommended) {
    const listItem = $(`#premium-list-table li[data-recommended="${recommended}"]`);
    if (!(listItem instanceof HTMLElement)) {
        return null;
    }
    return listItem;
}
async function onCollectionItemUpdated(item) {
    if (!isCollectionSubscription(item)) {
        return;
    }
    if (premiumTypes.has(item.recommended)) {
        const listItem = getRecommendedListItem(item.recommended);
        if (!listItem) {
            return;
        }
        const { isActive: premiumIsActive } = await front.premium.get();
        updateListItem(listItem, premiumIsActive);
        if (item.recommended === "cookies-premium") {
            listItem.classList.add("new");
        }
    }
}
function onApiMessage(message) {
    if (!message) {
        return;
    }
    switch (message.type) {
        case "premium.respond": {
            const premiumIsActive = message.args[0].isActive;
            updateListItems(premiumIsActive);
            break;
        }
    }
}
async function start(optionsPageEmitter) {
    const { isActive: premiumIsActive } = await front.premium.get();
    updateListItems(premiumIsActive);
    optionsPageEmitter.on("collectionItem.updated", onCollectionItemUpdated);
    front.addListener(onApiMessage);
}

;// CONCATENATED MODULE: ./src/premium-subscriptions/ui/index.ts


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

;// CONCATENATED MODULE: ./adblockpluschrome/lib/events.js
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

/** @module */

/**
 * Registers and emits named events.
 */
class EventEmitter
{
  constructor()
  {
    this._listeners = new Map();
  }

  /**
   * Adds a listener for the specified event name.
   *
   * @param {string}   name
   * @param {function} listener
   */
  on(name, listener)
  {
    let listeners = this._listeners.get(name);
    if (listeners)
      listeners.push(listener);
    else
      this._listeners.set(name, [listener]);
  }

  /**
   * Removes a listener for the specified event name.
   *
   * @param {string}   name
   * @param {function} listener
   */
  off(name, listener)
  {
    let listeners = this._listeners.get(name);
    if (listeners)
    {
      if (listeners.length > 1)
      {
        let idx = listeners.indexOf(listener);
        if (idx != -1)
          listeners.splice(idx, 1);
      }
      else if (listeners[0] === listener)
      {
        // We must use strict equality above for compatibility with
        // Array.prototype.indexOf
        this._listeners.delete(name);
      }
    }
  }

  /**
   * Returns a copy of the array of listeners for the specified event.
   *
   * @param {string} name
   *
   * @returns {Array.<function>}
   */
  listeners(name)
  {
    let listeners = this._listeners.size > 0 ? this._listeners.get(name) : null;
    return listeners ? listeners.slice() : [];
  }

  /**
   * Checks whether there are any listeners for the specified event.
   *
   * @param {string} [name] The name of the event. If omitted, checks whether
   *   there are any listeners for any event.
   *
   * @returns {boolean}
   */
  hasListeners(name)
  {
    return this._listeners.size > 0 &&
           (typeof name == "undefined" || this._listeners.has(name));
  }

  /**
   * Calls all previously added listeners for the given event name.
   *
   * @param {string} name
   * @param {...*}   [args]
   */
  emit(name, ...args)
  {
    let listeners = this._listeners.size > 0 ? this._listeners.get(name) : null;
    if (listeners)
    {
      for (let listener of listeners.slice())
        listener(...args);
    }
  }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/desktop-options/ui/desktop-options.css
var desktop_options = __webpack_require__(973);
;// CONCATENATED MODULE: ./src/desktop-options/ui/desktop-options.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(desktop_options/* default */.Z, options);




       /* harmony default export */ const ui_desktop_options = (desktop_options/* default */.Z && desktop_options/* default.locals */.Z.locals ? desktop_options/* default.locals */.Z.locals : undefined);

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

;// CONCATENATED MODULE: ./js/io-scrollbar.mjs
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




const {isLeftClick} = io_element.utils.event;

class IOScrollbar extends io_element
{
  static get observedAttributes()
  {
    return ["direction", "position", "size"];
  }

  created()
  {
    this.addEventListener(
      "click",
      (event) =>
      {
        // ignore clicks on the slider or right clicks
        if (event.target !== this || !isLeftClick(event))
          return;
        // prevents clicks action on the component
        // after dragging the slider so that it won't
        // be re-positioned again on click coordinates
        if (this._dragging)
        {
          this._dragging = false;
          return;
        }
        const {x, y} = relativeCoordinates(event);
        if (this.direction === "horizontal")
          setPosition.call(this, x - (this._sliderSize / 2));
        else if (this.direction === "vertical")
          setPosition.call(this, y - (this._sliderSize / 2));
        this.dispatchEvent(new CustomEvent("scroll"));
      }
    );
    this.addEventListener(
      "wheel",
      (event) =>
      {
        stopEvent(event);
        let delta = 0;
        if (this.direction === "vertical")
          delta = event.deltaY;
        else if (this.direction === "horizontal")
          delta = event.deltaX;
        // this extra delta transformation is mostly needed for MS Edge
        // but it works OK in every other browser too
        delta = delta * this._sliderSize / this.size;
        setPosition.call(this, this.position + delta);
        this.dispatchEvent(new CustomEvent("scroll"));
      },
      {passive: false}
    );
  }

  get defaultState()
  {
    return {
      direction: "",
      position: 0,
      size: 0
    };
  }

  get direction()
  {
    return this.state.direction;
  }

  // can be (ignore case) horizontal or vertical
  set direction(value)
  {
    value = value.toLowerCase();
    this.setState({direction: value});
    this.setAttribute("direction", value);
    // trigger eventual size recalculation
    sizeChange.call(this);
  }

  get position()
  {
    return this.state.position || 0;
  }

  set position(value)
  {
    if (!this._elSize)
      return;
    setPosition.call(this, value);
  }

  // read-only: the amount of positions covered by the slider
  get range()
  {
    return this._elSize - this._sliderSize;
  }

  get size()
  {
    return this.state.size;
  }

  set size(value)
  {
    this.setState({size: parseInt(value, 10)});
    sizeChange.call(this);
  }

  onmousedown(event)
  {
    if (!isLeftClick(event))
      return;
    this._dragging = true;
    this._coords = {
      x: event.clientX,
      y: event.clientY
    };
    const slider = event.currentTarget;
    const doc = slider.ownerDocument;
    // use the document as source of mouse events truth
    // use true as third option to intercept before bubbling
    doc.addEventListener("mousemove", this, true);
    doc.addEventListener("mouseup", this, true);
    // also prevents selection like a native scrollbar would
    // (this is specially needed for Firefox and Edge)
    doc.addEventListener("selectstart", stopEvent, true);
  }

  onmousemove(event)
  {
    const {x, y} = this._coords;
    if (this.direction === "horizontal")
    {
      const {clientX} = event;
      setPosition.call(this, this.position + clientX - x);
      this._coords.x = clientX;
    }
    else if (this.direction === "vertical")
    {
      const {clientY} = event;
      setPosition.call(this, this.position + clientY - y);
      this._coords.y = clientY;
    }
    this.dispatchEvent(new CustomEvent("scroll"));
  }

  onmouseup(event)
  {
    if (!isLeftClick(event))
      return;
    const {currentTarget: doc, target} = event;
    doc.removeEventListener("mousemove", this, true);
    doc.removeEventListener("mouseup", this, true);
    doc.removeEventListener("selectstart", stopEvent, true);
    // stop dragging if mouseup happens outside this component
    // or within this component slider (the only child)
    // otherwise let the click handler ignore the action
    // which happens through the component itself
    if (target !== this || target === this.child)
      this._dragging = false;
  }

  render()
  {
    // the component and its slider are styled 100% through CSS, i.e.
    // io-scrollbar[direction="vertical"] > .slider {}
    this.html`<div
      class="slider"
      onmousedown="${this}"
    />`;
  }
}

IOScrollbar.define("io-scrollbar");

function setPosition(value)
{
  this.setState({
    position: Math.max(
      0,
      Math.min(
        parseFloat(value),
        this.range
      )
    )
  });
  this.style.setProperty(
    "--position",
    this.state.position + "px"
  );
}

function sizeChange()
{
  if (this.direction === "horizontal")
    this._elSize = this.clientWidth;
  else if (this.direction === "vertical")
    this._elSize = this.clientHeight;
  this._sliderSize = Math.floor(
    Math.min(1, this._elSize / this.state.size) * this._elSize
  );
  if (this.direction === "horizontal")
    this._sliderSize = Math.max(this._sliderSize, this.clientHeight);
  else if (this.direction === "vertical")
    this._sliderSize = Math.max(this._sliderSize, this.clientWidth);
  this.style.setProperty("--slider-size", this._sliderSize + "px");
  // trigger eventual position recalculation
  // once this._elSize change
  // set again the style to re-position the scroller
  setPosition.call(this, this.position);
}

// if inside a container with its own wheel or mouse events,
// avoid possible backfiring through already handled events.
function stopEvent(event)
{
  event.preventDefault();
  event.stopPropagation();
}

/* harmony default export */ const io_scrollbar = (IOScrollbar);

;// CONCATENATED MODULE: ./js/io-checkbox.mjs
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



class IOCheckbox extends io_element
{
  static get booleanAttributes()
  {
    return ["checked", "disabled"];
  }

  attributeChangedCallback(name)
  {
    if (!this.disabled && name === "checked")
    {
      this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        cancelable: true,
        detail: this.checked
      }));
    }

    this.render();
  }

  created()
  {
    this.addEventListener("click", this);
    this.render();
  }

  onclick(event)
  {
    if (this.disabled)
    {
      return;
    }

    this.checked = !this.checked;
  }

  render()
  {
    this.html`
    <button
      role="checkbox"
      disabled="${this.disabled}"
      aria-checked="${this.checked}"
      aria-disabled="${this.disabled}"
    />`;
  }
}

IOCheckbox.define("io-checkbox");

/* harmony default export */ const io_checkbox = ((/* unused pure expression or super */ null && (IOCheckbox)));

;// CONCATENATED MODULE: ./js/io-toggle.mjs
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



class IOToggle extends io_element
{
  // action, checked, and disabled should be reflected down the button
  static get observedAttributes()
  {
    return ["checked", "disabled"];
  }

  static get booleanAttributes()
  {
    return ["checked", "disabled"];
  }

  attributeChangedCallback()
  {
    this.render();
  }

  created()
  {
    this.addEventListener("click", this);
    this.render();
  }

  onclick(event)
  {
    if (!this.disabled)
    {
      this.checked = !this.checked;
      if (this.ownerDocument.activeElement !== this.child)
      {
        this.child.focus();
      }
      this.firstElementChild.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        cancelable: true,
        detail: this.checked
      }));
    }
  }

  render()
  {
    this.html`
    <button
      role="checkbox"
      disabled="${this.disabled}"
      aria-checked="${this.checked}"
      aria-disabled="${this.disabled}"
    />`;
  }
}

IOToggle.define("io-toggle");

/* harmony default export */ const io_toggle = ((/* unused pure expression or super */ null && (IOToggle)));

;// CONCATENATED MODULE: ./js/io-filter-base.mjs
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









// <io-filter-list disabled />.{filters = [...]}
class IOFilterBase extends io_element
{
  static get booleanAttributes()
  {
    return ["disabled"];
  }

  static get observedAttributes()
  {
    return ["filters"];
  }

  get selected()
  {
    return this._selected || (this._selected = new Set());
  }

  set selected(value)
  {
    this._selected = new Set(value);
    this.render();
  }

  get defaultState()
  {
    return {
      infinite: false,
      filters: [],
      viewHeight: 0,
      rowHeight: 0,
      scrollTop: 0,
      scrollHeight: 0,
      tbody: null
    };
  }

  get filters()
  {
    return this.state.filters || [];
  }

  set filters(value)
  {
    // if the offsetParent is null, hence the component is not visible, or
    // if the related CSS is not loaded yet, this component cannot bootstrap
    // because its TBODY will never be scrollable so there's no way
    // to calculate its viewport height in pixels
    // in such case, just execute later on until the CSS is parsed
    if (!this.ready)
    {
      this._filters = value;
      return;
    }
    this.selected = [];
    // clear any previous --rule-width info
    this.style.setProperty("--rule-width", "auto");
    // render one row only for the setup
    this.setState({infinite: false, filters: []});
    // set current flex grown rule column
    this.style.setProperty(
      "--rule-width",
      $('[data-column="rule"]', this).clientWidth + "px"
    );
    // if filters have more than a row
    // prepare the table with a new state
    if (value.length)
    {
      const tbody = $("tbody", this);
      const rowHeight = $("tr", tbody).clientHeight;
      const viewHeight = tbody.clientHeight;
      this.setState({
        infinite: true,
        filters: value,
        scrollTop: tbody.scrollTop,
        scrollHeight: rowHeight * (value.length + 1) - viewHeight,
        viewHeight,
        rowHeight
      });
      // needed mostly for Firefox and Edge to have extra rows
      // reflecting the same weight of others
      this.style.setProperty("--row-height", `${rowHeight}px`);
      // setup the scrollbar size too
      this.scrollbar.size = rowHeight * value.length;
    }
  }

  created()
  {
    // force one off setup whenever the component enters the view
    if (!this.ready)
      this.addEventListener(
        "animationstart",
        function prepare(event)
        {
          this.removeEventListener(event.type, prepare);
          if (this._filters)
          {
            this.filters = this._filters;
            this._filters = null;
          }
        }
      );

    // the rest of the setup
    this.scrollbar = new io_scrollbar();
    this.scrollbar.direction = "vertical";
    this.scrollbar.addEventListener("scroll", () =>
    {
      const {position, range} = this.scrollbar;
      const {scrollHeight} = this.state;
      this.setState({
        scrollTop: getScrollTop(scrollHeight * position / range)
      });
    });
    this.addEventListener(
      "wheel",
      event =>
      {
        event.preventDefault();
        // prevent race conditions between the blur event and the scroll
        const activeElement = this.ownerDocument.activeElement;
        if (activeElement && activeElement !== this.ownerDocument.body)
        {
          activeElement.blur();
          return;
        }
        // it's necessary to handle deltaMode as it indicates
        // the units of measurement for the event delta values
        // e.g. Firefox uses a deltaMode of 1 (DOM_DELTA_LINE)
        const {scrollHeight, scrollTop, rowHeight, viewHeight} = this.state;
        const scrollFactors = {
          0: 1,
          1: rowHeight,
          // as defined in Gecko implementation
          // https://github.com/mozilla/gecko-dev/blob/535145f19797558c2bad0d1d6f8b7f06d3e6346b/layout/generic/nsGfxScrollFrame.cpp#L4527
          2: viewHeight - Math.min(0.1 * viewHeight, 2 * rowHeight)
        };
        this.setState({
          scrollTop: getScrollTop(
            scrollTop + event.deltaY * scrollFactors[event.deltaMode],
            scrollHeight
          )
        });
        // update the scrollbar position accordingly
        updateScrollbarPosition.call(this);
      },
      {passive: false}
    );
    setScrollbarReactiveOpacity.call(this);
  }

  scrollTo(row)
  {
    const {rowHeight, scrollHeight} = this.state;
    const index = typeof row === "string" ?
      this.filters.findIndex(filter => filter.text === row) :
      this.filters.findIndex(filter => filter === row);
    if (index < 0)
      console.error("invalid filter", row);
    else
    {
      this.setState({
        scrollTop: getScrollTop(index * rowHeight, scrollHeight)
      });
      updateScrollbarPosition.call(this);
    }
  }

  renderTable()
  {
    throw new Error("renderTable not implemented");
  }

  render()
  {
    let list = this.state.filters;
    if (this.state.infinite)
    {
      list = [];
      const {rowHeight, scrollTop, viewHeight} = this.state;
      const length = this.state.filters.length;
      let count = 0;
      let i = Math.floor(scrollTop / rowHeight);
      // always add an extra row to make scrolling smooth
      while ((count * rowHeight) < (viewHeight + rowHeight))
      {
        list[count++] = i < length ? this.state.filters[i++] : null;
      }
    }
    this.renderTable(list);
    postRender.call(this, list);
  }

  updateScrollbar()
  {
    const {rowHeight, viewHeight} = this.state;
    const {length} = this.filters;
    this.scrollbar.size = rowHeight * length;
    this.setState({
      scrollHeight: rowHeight * (length + 1) - viewHeight
    });
  }
}

// ensure the number is always between 0 and a positive number
// specially handy when filters are erased and the viewHeight
// is higher than scrollHeight and other cases too
function getScrollTop(value, scrollHeight)
{
  const scrollTop = Math.max(
    0,
    Math.min(scrollHeight || Infinity, value)
  );
  // avoid division by zero gotchas
  return isNaN(scrollTop) ? 0 : scrollTop;
}

function postRender(list)
{
  const {tbody, scrollTop, rowHeight} = this.state;
  if (this.state.infinite)
  {
    tbody.scrollTop = scrollTop % rowHeight;
  }
  // keep growing the fake list until the tbody becomes scrollable
  else if (
    !tbody ||
    (tbody.scrollHeight <= tbody.clientHeight && tbody.clientHeight)
  )
  {
    this.setState({
      tbody: tbody || $("tbody", this),
      filters: list.concat({})
    });
  }
}

function setScrollbarReactiveOpacity()
{
  // get native value for undefined opacity
  const opacity = this.scrollbar.style.opacity;
  // cache it once to never duplicate listeners
  const cancelOpacity = () =>
  {
    // store default opacity value back
    this.scrollbar.style.opacity = opacity;
    // drop all listeners
    document.removeEventListener("pointerup", cancelOpacity);
    document.removeEventListener("pointercancel", cancelOpacity);
  };
  // add listeners on scrollbaro pointerdown event
  this.scrollbar.addEventListener("pointerdown", () =>
  {
    this.scrollbar.style.opacity = 1;
    document.addEventListener("pointerup", cancelOpacity);
    document.addEventListener("pointercancel", cancelOpacity);
  });
}

function updateScrollbarPosition()
{
  const {scrollbar, state} = this;
  const {scrollHeight, scrollTop} = state;
  scrollbar.position = scrollTop * scrollbar.range / scrollHeight;
}

/* harmony default export */ const io_filter_base = (IOFilterBase);

;// CONCATENATED MODULE: ./js/io-filter-list.mjs
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











const prevFilterText = new WeakMap();

// <io-filter-list disabled />.{filters = [...]}
class IOFilterList extends io_filter_base
{
  get defaultState()
  {
    return Object.assign(super.defaultState, {
      sort: {
        current: "",
        asc: false
      },
      sortMap: {
        status: "disabled",
        rule: "text",
        warning: "slow"
      }
    });
  }

  created()
  {
    setupPort.call(this);
    super.created();
  }

  onheaderclick(event)
  {
    const th = event.target.closest("th");
    if (!io_element.utils.event.isLeftClick(event) || !th)
      return;
    const {column} = th.dataset;
    if (column === "selected")
    {
      const ioCheckbox = event.target.closest("io-checkbox");
      // ignore clicks outside the io-checkbox
      if (ioCheckbox)
        this.selected = ioCheckbox.checked ? this.filters : [];
      return;
    }
    event.preventDefault();
    const {sort, sortMap} = this.state;
    if (column !== sort.current)
    {
      sort.current = column;
      sort.asc = false;
    }
    sort.asc = !sort.asc;
    const sorter = sort.asc ? 1 : -1;
    const property = sortMap[column];
    const direction = property === "slow" ? -1 : 1;
    this.filters.sort((fa, fb) =>
    {
      if (fa[property] === fb[property])
        return 0;
      return (fa[property] < fb[property] ? -sorter : sorter) * direction;
    });
    this.render();
    const dataset = th.closest("thead").dataset;
    dataset.sort = column;
    dataset.dir = sort.asc ? "asc" : "desc";
  }

  onpaste(event)
  {
    event.preventDefault();

    const data = event.clipboardData.getData("text/plain");
    // Filters must be written within a single line so we're ignoring any
    // subsequent lines in case clipboard data contains multiple lines.
    const [text] = data.trim().split("\n", 1);
    document.execCommand("insertText", false, text);
  }

  onkeydown(event)
  {
    const {key} = event;
    if (key === "Enter" || key === "Escape")
    {
      event.preventDefault();
      if (key === "Escape" && this._filter)
      {
        const {currentTarget} = event;
        const text = prevFilterText.get(this._filter) || this._filter.text;
        currentTarget.textContent = text;
        currentTarget.blur();
        this._filter = null;
      }
    }
  }

  onkeyup(event)
  {
    const isEnter = event.key === "Enter";
    const update = isEnter || event.type === "blur";
    const {currentTarget} = event;
    const {title} = currentTarget;
    const text = currentTarget.textContent.trim();
    const filter = this._filter;

    // if triggered but there was focus lost already: return
    if (!filter)
      return;

    // in case of empty filter, remove it
    if (!text)
    {
      if (!update)
        return;
      browser.runtime.sendMessage({
        type: "filters.remove",
        text: filter.text
      }).then(errors =>
      {
        if (!errors.length)
        {
          this.selected.delete(filter);
          this.render();
          this.dispatchEvent(new CustomEvent("filter:removed", {
            cancelable: false,
            bubbles: true
          }));
        }
      });
      this._filter = null;
      return;
    }

    // store the initial filter value once
    // needed to remove the filter once finished the editing
    if (!prevFilterText.has(filter))
      prevFilterText.set(filter, title);

    // avoid updating filters that didn't change
    if (prevFilterText.get(filter) === text)
    {
      if (isEnter)
        focusTheNextFilterIfAny.call(this, currentTarget.closest("tr"));
      return;
    }

    // add + remove the filter on Enter / update
    if (update)
    {
      filter.text = text;
      currentTarget.title = text;
      // drop any validation action at distance
      this._validating = 0;
      if (this.filters.some(f => f.text === filter.text && f !== filter))
      {
        const {reason} = filter;
        filter.reason = {type: "filter_duplicated"};

        // render only if there's something different to show
        if (!isSameError(filter.reason, reason))
        {
          this.render();
        }
      }
      else
      {
        replaceFilter.call(this, filter, currentTarget);
        if (isEnter)
          focusTheNextFilterIfAny.call(this, currentTarget.closest("tr"));
      }
      return;
    }

    // don't overload validation
    if (this._validating > 0)
    {
      // but signal there is more validation to do
      this._validating++;
      return;
    }
    this._validating = 1;
    browser.runtime.sendMessage({
      type: "filters.validate",
      text
    }).then(errors =>
    {
      // in case a save operation has been asked in the meanwhile
      if (this._validating < 1)
        return;
      // if there were more validation requests
      if (this._validating > 1)
      {
        // reset the counter
        this._validating = 0;
        // re-trigger the event with same target
        this.onkeyup({currentTarget});
        return;
      }
      const {reason} = filter;
      if (errors.length)
        filter.reason = errors[0];
      else
        delete filter.reason;
      // render only if there's something different to show
      if (!isSameError(filter.reason, reason))
        this.render();
    });
  }

  onfocus(event)
  {
    const {currentTarget} = event;
    this._filter = currentTarget.data;
    currentTarget.closest("tr").classList.add("editing");
  }

  onblur(event)
  {
    const {currentTarget} = event;
    currentTarget.closest("tr").classList.remove("editing");
    // needed to avoid ellipsis on overflow hidden
    // make the filter look like disappeared from the list
    currentTarget.scrollLeft = 0;
    if (this._changingFocus)
    {
      this._filter = null;
      return;
    }
    this.onkeyup(event);
    this._filter = null;
  }

  // used in the checkbox of the selected column only
  onclick(event)
  {
    const filter = getFilter(event);
    const {filters} = this;
    if (event.shiftKey && this.selected.size)
    {
      let start = filters.indexOf(this._lastFilter);
      const end = filters.indexOf(filter);
      const method = this.selected.has(this._lastFilter) ?
                          "add" :
                          "delete";
      if (start < end)
      {
        while (start++ < end)
          this.selected[method](filters[start]);
      }
      else
      {
        while (start-- > end)
          this.selected[method](filters[start]);
      }
    }
    else
    {
      this._lastFilter = filter;
      if (this.selected.has(filter))
        this.selected.delete(filter);
      else
        this.selected.add(filter);
    }
    // render updated right after the checkbox changes
  }

  // used in both selected and status
  // the selected needs it to render at the right time
  // which is when the checkbox status changed
  // not when it's clicked
  onchange(event)
  {
    const {currentTarget} = event;
    const td = currentTarget.closest("td");
    if (td.dataset.column === "status")
    {
      const checkbox = currentTarget.closest("io-toggle");
      const filter = getFilter(event);
      filter.disabled = !checkbox.checked;
      browser.runtime.sendMessage({
        type: "filters.toggle",
        text: filter.text,
        disabled: filter.disabled
      });
    }
    else
    {
      this.render();
    }
  }

  renderTable(visibleFilters)
  {
    const {length} = this.filters;
    this.html`<table cellpadding="0" cellspacing="0">
      <thead onclick="${this}" data-call="onheaderclick">
        <th data-column="selected">
          <io-checkbox ?checked=${!!length && this.selected.size === length} />
        </th>
        <th data-column="status"></th>
        <th data-column="rule">${{i18n: "options_filter_list_rule"}}</th>
        <th data-column="warning">${
          // for the header, just return always the same warning icon
          warnings.get(this) ||
          warnings.set(this, createImageForType(false)).get(this)
        }</th>
      </thead>
      <tbody>${visibleFilters.map(getRow, this)}</tbody>
      ${this.scrollbar}
    </table>`;
  }

  sortBy(type, isAscending)
  {
    const th = $(`th[data-column="${type}"]`, this);
    if (!th)
    {
      console.error(`unable to sort by ${type}`);
      return;
    }
    const {sort} = this.state;
    sort.current = type;
    // sort.asc is flipped with current state
    // so set the one that is not desired
    sort.asc = !isAscending;
    // before triggering the event
    th.click();
  }
}

IOFilterList.define("io-filter-list");

// Please note: the contenteditable=${...} attribute
// cannot be set directly to the TD because of an ugly
// MS Edge bug that does not allow TDs to be editable.
function getRow(filter, i)
{
  if (filter)
  {
    const selected = this.selected.has(filter);
    return io_element.wire(filter)`
    <tr class="${selected ? "selected" : ""}">
      <td data-column="selected">
        <io-checkbox
          ?checked=${selected}
          onclick="${this}" onchange="${this}"
        />
      </td>
      <td data-column="status">
        <!-- Not all filters can be en-/disabled (e.g. comments) -->
        <io-toggle
          ?checked=${!filter.disabled}
          ?disabled=${!("disabled" in filter)}
          aria-hidden="${!("disabled" in filter)}"
          onchange="${this}"
        />
      </td>
      <td data-column="rule">
        <div
          class="content"
          contenteditable="${!this.disabled}"
          title="${filter.text}"
          onpaste="${this}"
          onkeydown="${this}"
          onkeyup="${this}"
          onfocus="${this}"
          onblur="${this}"
          data="${filter}"
        >${filter.text}</div>
      </td>
      <td data-column="warning">
        ${getWarning(filter)}
      </td>
    </tr>`;
  }
  // no filter results into an empty, not editable, row
  return io_element.wire(this, `:${i}`)`
    <tr class="empty">
      <td data-column="selected"></td>
      <td data-column="status"></td>
      <td data-column="rule"></td>
      <td data-column="warning"></td>
    </tr>`;
}

// used to show issues in the last column
const issues = new WeakMap();

// used to show warnings in the last column
const warnings = new WeakMap();

// relate either issues or warnings to a filter
const createImageForFilter = (isIssue, filter) =>
{
  const error = (isIssue) ? filter.reason : {type: "filter_slow"};
  const image = createImageForType(isIssue);
  image.title = stripTagsUnsafe(getErrorMessage(error));
  return image;
};

const createImageForType = (isIssue) =>
{
  const image = new Image();
  image.src = `skin/icons/${isIssue ? "error" : "alert"}.svg`;
  return image;
};

function focusTheNextFilterIfAny(tr)
{
  const i = this.filters.indexOf(this._filter) + 1;
  if (i < this.filters.length)
  {
    const next = tr.nextElementSibling;
    const {rowHeight, scrollTop, viewHeight} = this.state;
    // used to avoid race conditions with blur event
    this._changingFocus = true;
    // force eventually the scrollTop to make
    // the next row visible
    if (next.offsetTop > viewHeight)
    {
      this.setState({
        scrollTop: io_filter_list_getScrollTop(scrollTop + rowHeight)
      });
    }
    // focus its content field
    $(".content", next).focus();
    // set back the _changingFocus
    this._changingFocus = false;
  }
}

function animateAndDrop(target)
{
  target.addEventListener("animationend", dropSavedClass);
  target.classList.add("saved");
}

function dropSavedClass(event)
{
  const {currentTarget} = event;
  currentTarget.classList.remove("saved");
  currentTarget.removeEventListener(event.type, dropSavedClass);
}

function getFilter(event)
{
  const el = event.currentTarget;
  const div = $('td[data-column="rule"] > .content', el.closest("tr"));
  return div.data;
}

// ensure the number is always between 0 and a positive number
// specially handy when filters are erased and the viewHeight
// is higher than scrollHeight and other cases too
function io_filter_list_getScrollTop(value, scrollHeight)
{
  const scrollTop = Math.max(
    0,
    Math.min(scrollHeight || Infinity, value)
  );
  // avoid division by zero gotchas
  return isNaN(scrollTop) ? 0 : scrollTop;
}

function getWarning(filter)
{
  let map;
  if (filter.reason)
  {
    map = issues;
  }
  else if (filter.slow)
  {
    map = warnings;
  }
  else
    return "";

  let warning = map.get(filter);
  if (warning)
    return warning;

  warning = createImageForFilter(map === issues, filter);
  map.set(filter, warning);
  return warning;
}

function isSameError(errorA = {}, errorB = {})
{
  return errorA.type === errorB.type && errorA.reason === errorB.reason;
}

function replaceFilter(filter, currentTarget)
{
  const {text} = filter;
  const old = prevFilterText.get(filter);
  // if same text, no need to bother the extension at all
  if (old === text)
  {
    animateAndDrop(currentTarget);
    return;
  }
  browser.runtime.sendMessage({
    type: "filters.replace",
    new: text,
    old
  }).then(errors =>
  {
    if (errors.length)
    {
      filter.reason = errors[0];
    }
    else
    {
      // see https://gitlab.com/eyeo/adblockplus/abpui/adblockplusui/issues/338
      // until that lands, we remove the filter and add it at the end
      // of the table so, before rendering, drop the new filter and update
      // the current known one
      const {filters} = this;
      let i = filters.length;
      let newFilter;
      while (i--)
      {
        newFilter = filters[i];
        if (newFilter.text === text)
          break;
      }
      filters.splice(i, 1);
      delete filter.disabled;
      delete filter.reason;
      Object.assign(filter, newFilter);
      prevFilterText.set(filter, text);
      animateAndDrop(currentTarget);
    }
    this.render();
  });
}

// listen to filters messages and eventually
// delegate the error handling
function setupPort()
{
  front.addListener((message) =>
  {
    if (message.type === "filters.respond" && message.action === "changed")
    {
      const {text, disabled} = message.args[0];
      const filter = this.filters.find(f => f.text === text);

      if (!filter)
        return;

      const shownDisabled = filter.disabled;

      if (disabled !== shownDisabled)
      {
        filter.reason = {type: "filter_disabled"};
        filter.disabled = disabled;
      }
      this.render();
    }
  });
}

/* harmony default export */ const io_filter_list = (IOFilterList);

;// CONCATENATED MODULE: ./js/io-filter-search.mjs
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





const MINIMUM_SEARCH_LENGTH = 3;

// this component simply emits filter:add(text)
// and filter:match({accuracy, filter}) events
class IOFilterSearch extends io_element
{
  static get booleanAttributes()
  {
    return ["disabled"];
  }

  static get observedAttributes()
  {
    return ["match"];
  }

  get defaultState()
  {
    return {
      filterExists: true,
      filters: [],
      match: -1
    };
  }

  get filters()
  {
    return this.state.filters;
  }

  // filters are never modified or copied
  // but used to find out if one could be added
  // or if the component in charge should show the found one
  set filters(value)
  {
    this.setState({filters: value || []});
  }

  get match()
  {
    return this.state.match;
  }

  // match is a number between -1 and 1
  // -1 means any match
  // 1 means exact match
  // 0 means match disabled => no filter:match event ever
  set match(value)
  {
    this.setState({
      match: Math.max(-1, Math.min(1, parseFloat(value) || 0))
    }, false);
  }

  get value()
  {
    return $("input", this).value.trim();
  }

  set value(text)
  {
    const value = String(text || "").trim();
    $("input", this).value = value;
    this.setState({
      filterExists: value.length ?
                      this.state.filters.some(hasValue, value) :
                      false
    });
  }

  attributeChangedCallback(name, previous, current)
  {
    if (name === "match")
      this.match = current;
    else
      this.render();
  }

  created()
  {
    const {i18n} = browser;
    this._placeholder = i18n.getMessage("options_filters_search_or_add");
    this._addingFilter = false;
    this._timer = 0;
    this.render();
  }

  onclick()
  {
    if (this.value)
      addFilter.call(this, this.value);
  }

  ondrop(event)
  {
    event.preventDefault();
    addFilter.call(this, event.dataTransfer.getData("text"));
  }

  onkeydown(event)
  {
    switch (event.key)
    {
      case "Enter":
        const {value} = this;
        if (
          value.length &&
          !this.disabled &&
          !this.state.filters.some(hasValue, value)
        )
          addFilter.call(this, value);
        break;
      case "Escape":
        dispatch.call(this, "filter:none");
        this.value = "";
        break;
    }
  }

  onkeyup()
  {
    // clear timeout on any action
    clearTimeout(this._timer);

    // in case it was just added, don't do anything
    if (this._addingFilter)
    {
      this._addingFilter = false;
      return;
    }

    // debounce the search operations to avoid degrading
    // performance on very long list of filters
    this._timer = setTimeout(() =>
    {
      this._timer = 0;

      const {match, value} = this;
      // clear on backspace
      if (!value.length)
      {
        dispatch.call(this, "filter:none");
        this.value = "";
      }
      // do nothing when the search text is too small
      // also no match means don't validate
      // but also multi line (paste on old browsers)
      // shouldn't pass through this logic (filtered later on)
      else if (
        !match ||
        value.length < MINIMUM_SEARCH_LENGTH ||
        isMultiLine(value)
      )
      {
        this.setState({filterExists: this.state.filters.some(hasValue, value)});
        dispatch.call(this, "filter:none");
      }
      else
      {
        const result = search.call(this, value);
        if (result.accuracy && match <= result.accuracy)
          dispatch.call(this, "filter:match", result);
        else
          dispatch.call(this, "filter:none");
      }
    }, 100);
  }

  onpaste(event)
  {
    const clipboardData = event.clipboardData || window.clipboardData;
    const data = clipboardData.getData("text").trim();
    // do not automatically paste on single line
    if (isMultiLine(data))
      addFilter.call(this, data);
  }

  render()
  {
    const {disabled} = this;
    this.html`
    <input
      placeholder="${this._placeholder}"
      onkeydown="${this}" onkeyup="${this}"
      ondrop="${this}" onpaste="${this}"
      disabled="${disabled}"
    >
    <button
      onclick="${this}"
      disabled="${disabled || this.state.filterExists || !this.value}">
      + ${{i18n: "add"}}
    </button>`;
  }
}

IOFilterSearch.define("io-filter-search");

function addFilter(data)
{
  dispatch.call(this, "filter:none");
  let value = data.trim();
  if (!value)
    return;

  // in case of multi line don't bother the search
  if (isMultiLine(value))
  {
    value = clearMultiLine(value);
    dispatch.call(this, "filter:add", value);
  }
  else
  {
    const result = search.call(this, value);
    if (result.accuracy < 1)
    {
      this._addingFilter = true;
      dispatch.call(this, "filter:add", value);
    }
    else if (result.accuracy && value.length >= MINIMUM_SEARCH_LENGTH)
      dispatch.call(this, "filter:match", result);
  }
}

function dispatch(type, detail)
{
  if (type === "filter:add" || this.filters.length)
    this.dispatchEvent(new CustomEvent(type, {detail}));
}

function hasValue(filter)
{
  return filter.text == this;
}

function clearMultiLine(data)
{
  return data.split(/[\r\n]/)
              .map(text => text.trim())
              .filter(text => text.length)
              .join("\n");
}

function isMultiLine(data)
{
  return /[\r\n]/.test(data.trim());
}

function search(value)
{
  let accuracy = 0;
  let closerFilter = null;
  const matches = [];
  const searchLength = value.length;
  if (searchLength)
  {
    const match = this.match;
    const {filters} = this.state;
    const {length} = filters;
    for (let i = 0; i < length; i++)
    {
      const filter = filters[i];
      const filterLength = filter.text.length;
      // ignore all filters shorter than current search
      if (searchLength > filterLength)
        continue;
      // compare the two strings only if length is the same
      if (searchLength === filterLength)
      {
        if (filter.text === value)
        {
          matches.push(filter);
          closerFilter = filter;
          accuracy = 1;
        }
        continue;
      }
      // otherwise verify text includes searched value
      // only if the match is not meant to be 1:1
      if (match < 1 && filter.text.includes(value))
      {
        matches.push(filter);
        const tmpAccuracy = searchLength / filterLength;
        if (accuracy < tmpAccuracy)
        {
          closerFilter = filter;
          accuracy = tmpAccuracy;
        }
      }
    }
    this.setState({filterExists: accuracy === 1});
  }
  return {accuracy, matches, value, filter: closerFilter};
}

/* harmony default export */ const io_filter_search = (IOFilterSearch);

;// CONCATENATED MODULE: ./js/io-filter-table.mjs
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








// io-filter-table is a basic controller
// used to relate the search and the list
class IOFilterTable extends io_element
{
  static get booleanAttributes()
  {
    return ["disabled"];
  }

  static get observedAttributes()
  {
    return ["match"];
  }

  get defaultState()
  {
    return {filters: [], match: -1, ready: false};
  }

  created()
  {
    this._showing = null;
    this.search = this.appendChild(new io_filter_search());
    this.search.addEventListener(
      "filter:add",
      event => this.onFilterAdd(event)
    );
    this.search.addEventListener(
      "filter:match",
      event => this.onFilterMatch(event)
    );
    this.search.addEventListener(
      "filter:none",
      () =>
      {
        this.list.selected = [];
        this.updateFooter();
      }
    );
    this.list = this.appendChild(new io_filter_list());
    this.list.addEventListener(
      "filter:removed",
      event => this.onFilterRemoved(event)
    );
    this.footer = this.appendChild(io_element.wire()`<div class="footer" />`);
    this.addEventListener("click", this);
    this.addEventListener("error", this);
    this.setState({ready: true});
  }

  attributeChangedCallback(name, prev, value)
  {
    if (name === "match")
      this.setState({match: value}, false);
    this.render();
  }

  get filters()
  {
    return this.state.filters;
  }

  set filters(value)
  {
    this.setState({filters: value});
  }

  get match()
  {
    return this.state.match;
  }

  set match(value)
  {
    this.setState({match: value});
  }

  onclick(event)
  {
    if (event.target.closest("io-checkbox"))
    {
      cleanErrors.call(this);
    }
  }

  onerror(event)
  {
    // force the footer to be visible since errors are shown there
    this.updateFooter();
    this.footer.classList.add("visible");
    const {errors} = event.detail;
    const footerError = $(".footer .error", this);

    const errorMessages = errors.map(getErrorMessage);
    io_element.bind(footerError)`
      ${errorMessages.map(mssg => `<li>${mssg}</li>`)}`;
    footerError.removeAttribute("hidden");
  }

  onfooterclick(event)
  {
    const {classList} = event.currentTarget;
    switch (true)
    {
      case classList.contains("delete"):
        const resolve = [];
        for (const filter of this.list.selected)
        {
          this.list.selected.delete(filter);
          this.filters.splice(this.filters.indexOf(filter), 1);
          resolve.push(browser.runtime.sendMessage({
            type: "filters.remove",
            text: filter.text
          }));
        }
        Promise.all(resolve).then(
          () => updateList(this.list),
          (errors) => this.onerror({detail: {errors}})
        );
        cleanErrors.call(this);
        break;
      case classList.contains("copy"):
        const filters = [];
        for (const filter of this.list.selected)
        {
          filters.push(filter.text);
        }
        clipboard.copy(filters.join("\n"));
        break;
    }
  }

  onFilterAdd(event)
  {
    const filters = event.detail.split(/(?:\r\n|\n)/);

    cleanErrors.call(this);
    browser.runtime.sendMessage({
      type: "filters.importRaw",
      text: filters.join("\n")
    })
    .then(errors =>
    {
      if (!errors.length)
      {
        filters.reverse();
        let added = false;
        for (const text of filters)
        {
          // We don't treat filter headers like invalid filters,
          // instead we simply ignore them and don't show any errors
          // in order to allow pasting complete filter lists
          if (text[0] === "[")
            continue;

          added = true;
          const i = this.filters.findIndex(flt => flt.text === text);
          const [filter] = i < 0 ? [{text}] : this.filters.splice(i, 1);
          this.filters.unshift(filter);
        }

        this.search.value = "";
        if (!added)
          return;

        this.render();
        updateList(this.list);
        this.list.scrollTo(this.filters[0]);
        this.updateFooter();
      }
      else
      {
        this.onerror({detail: {errors}});
      }
    });
  }

  onFilterMatch(event)
  {
    const {accuracy, filter, matches} = event.detail;
    this.list.selected = matches;
    // scroll either to the exact match or the first close match
    this.list.scrollTo(accuracy === 1 ? filter : matches[0]);
    this.updateFooter();
  }

  onFilterRemoved()
  {
    cleanErrors.call(this);
    this.updateFooter();
  }

  render()
  {
    const {disabled} = this;
    const {filters, match, ready} = this.state;
    if (!ready || !filters.length)
      return;

    // update inner components setting filters
    // only if necessary
    this.search.disabled = disabled;
    this.search.match = match;
    if (this.search.filters !== filters)
      this.search.filters = filters;

    this.list.disabled = disabled;
    if (this.list.filters !== filters)
      this.list.filters = filters;

    this.updateFooter();
  }

  updateFooter()
  {
    const disabled = !this.list.selected.size;
    io_element.bind(this.footer)`
      <button
        class="delete"
        onclick="${this}"
        disabled="${disabled}"
        data-call="onfooterclick"
      >${{i18n: "delete"}}</button>
      <button
        class="copy"
        onclick="${this}"
        disabled="${disabled}"
        data-call="onfooterclick"
      >${{i18n: "copy_selected"}}</button>
      <ul class="error" hidden></ul>
    `;
  }
}

IOFilterTable.define("io-filter-table");

function cleanErrors()
{
  const footerError = $(".footer .error", this);
  if (footerError)
  {
    footerError.setAttribute("hidden", true);
    io_element.bind(footerError)``;
  }
  this.updateFooter();
}

function updateList(list)
{
  list.render();
  list.updateScrollbar();
}

;// CONCATENATED MODULE: ./js/io-list-box.mjs
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





const DELAY = 200;

// used to map codes across browser
const KeyCode = {
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  DELETE: "Delete",
  ENTER: "Enter",
  ESCAPE: "Escape",
  END: "End",
  HOME: "Home",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SPACE: " ",
  TAB: "Tab"
};

/*
  <io-list-box
    ?autoclose=${boolean} to close per each change
    data-text="i18n entry text when it's closed"
    data-expanded="optional i18n entry text when it's opened"
  />
*/
class IOListBox extends io_element
{
  static get observedAttributes()
  {
    return ["action", "swap", "disabled", "expanded", "items"];
  }

  static get booleanAttributes()
  {
    return ["autoclose"];
  }

  created()
  {
    this._blurTimer = 0;
    this._bootstrap = true;
    // in case the component has been addressed and
    // it has already an attached items property
    if (this.hasOwnProperty("items"))
    {
      const items = this.items;
      delete this.items;
      this.items = items;
    }

    this.addEventListener("blur", this, true);
  }

  // can be overridden but by default
  // it returns the item.title
  getItemTitle(item)
  {
    return item.title;
  }

  get swap()
  {
    return !!this._swap;
  }

  set swap(value)
  {
    this._swap = !!value;
  }

  // shortcuts to retrieve sub elements
  get label()
  {
    return $(`#${this.id}label`, this);
  }

  get popup()
  {
    return $(`#${this.id}popup`, this);
  }

  // component status
  get disabled()
  {
    return this.hasAttribute("disabled");
  }

  set disabled(value)
  {
    io_element.utils.boolean.attribute(this, "disabled", value);
    this.render();
  }

  get expanded()
  {
    return this.hasAttribute("expanded");
  }

  set expanded(value)
  {
    io_element.utils.boolean.attribute(this, "expanded", value);
    this.render();
    setTimeout(
      () =>
      {
        // be sure the element is blurred to re-open on focus
        if (!value && this.expanded)
          this.ownerDocument.activeElement.blur();
        this.dispatchEvent(new CustomEvent(value ? "open" : "close"));
      },
      DELAY + 1
    );
  }

  // items handler
  get items()
  {
    return this._items || [];
  }

  set items(items)
  {
    this._items = items;
    this.render();
    // WAI-ARIA guidelines:
    //  If an option is selected before the listbox receives focus,
    //  focus is set on the selected option.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // if no items were passed, clean up
    // and bootstrap the next time.
    // The bootstrap will focus the right item.
    if (!items.length)
    {
      this._bootstrap = true;
    }
    // if it needs to bootstrap (cleanup or new component)
    else if (this._bootstrap)
    {
      this._bootstrap = false;
      for (const item of items)
      {
        if (item.group)
          continue;

        // if an item is selected
        if (!item.disabled)
        {
          // simulate hover it and exit
          hover.call(this, "items", item);
          return;
        }
      }
      // if no item was selected, hover the first one that is not a group
      hover.call(this, "items", items.find(item => !item.group));
    }
  }

  // events related methods
  handleEvent(event)
  {
    if (!this.disabled)
    {
      this[`on${event.type}`](event);
    }
  }

  // label related events
  onblur(event)
  {
    if (event.relatedTarget && this.contains(event.relatedTarget))
      return;

    // ensure blur won't close the list right away or it's impossible
    // to get the selected raw on click (bad target)
    if (this.expanded)
      this._blurTimer = setTimeout(() =>
      {
        this.expanded = false;
      }, DELAY);
  }

  onfocus(event)
  {
    // if 0 or already cleared, nothing happens, really
    clearTimeout(this._blurTimer);
    // show the popup
    this.expanded = true;
  }

  onkeydown(event)
  {
    const hovered = $(".hover", this);
    switch (event.key)
    {
      case KeyCode.BACKSPACE:
      case KeyCode.DELETE:
        event.preventDefault();
        break;
      /* both SPACE, RETURN and ESC hide and blur */
      case KeyCode.ENTER:
      case KeyCode.SPACE:
        hovered.dispatchEvent(new CustomEvent("click", {bubbles: true}));
        /* eslint: fall through */
      case KeyCode.ESCAPE:
        event.preventDefault();
        this.expanded = false;
        break;
      case KeyCode.ARROW_UP:
        const prev = findNext.call(
          this,
          hovered, "previousElementSibling"
        );
        if (prev)
          hover.call(this, "key", getItem.call(this, prev.id));
        event.preventDefault();
        break;
      case KeyCode.ARROW_DOWN:
        const next = findNext.call(
          this,
          hovered, "nextElementSibling"
        );
        if (next)
          hover.call(this, "key", getItem.call(this, next.id));
        event.preventDefault();
        break;
    }
  }

  // popup related events
  onclick(event)
  {
    if (!io_element.utils.event.isLeftClick(event))
      return;
    event.preventDefault();
    clearTimeout(this._blurTimer);
    const el = event.target.closest('[role="option"]');
    if (el)
    {
      const detail = getItem.call(this, el.id);
      const {unselectable} = detail;
      if (el.getAttribute("aria-disabled") !== "true")
      {
        this.dispatchEvent(new CustomEvent("change", {detail}));
        this.render();
      }
      if ((this.swap || this.autoclose) && !unselectable)
      {
        this.expanded = false;
      }
    }
  }

  onmousedown(event)
  {
    this.expanded = !this.expanded;
  }

  onmouseover(event)
  {
    const el = event.target.closest('[role="option"]');
    if (el && !el.classList.contains("hover"))
    {
      const item = getItem.call(this, el.id);
      if (item)
        hover.call(this, "mouse", item);
    }
  }

  // the view
  render()
  {
    const {action, dataset, disabled, expanded, id, swap} = this;
    const enabled = this._items.filter(item => !item.disabled).length;
    let buttonText = "";
    if (expanded && dataset.expanded)
      buttonText = dataset.expanded;
    else
      buttonText = dataset.text;
    const {i18n} = browser;
    this.html`
    <button
      role="combobox"
      aria-readonly="true"
      id="${id + "label"}"
      disabled="${disabled}"
      data-action="${action}"
      aria-owns="${id + "popup"}"
      aria-disabled="${disabled}"
      aria-expanded="${expanded}"
      aria-haspopup="${id + "popup"}"
      onblur="${this}" onfocus="${this}"
      onkeydown="${this}" onmousedown="${this}"
    >${"+ " + i18n.getMessage(buttonText)}</button>
    <ul
      role="listbox"
      tabindex="-1"
      id="${id + "popup"}"
      aria-labelledby="${id + "label"}"
      hidden="${!expanded}"
      onclick="${this}" onmouseover="${this}"
    >${this._items.map(item =>
    {
      if (item.group)
        return io_element.wire()`<li class="group">${item.description}</li>`;

      const itemID = getID(item);
      const selected = !swap && !item.disabled;
      const liDisabled = item.unselectable || (selected && enabled === 1);
      return io_element.wire(this, `html:${itemID}`)`
      <li
        id="${itemID}"
        class="${item.premium ? "premium" : ""}"
        role="option"
        aria-disabled="${swap ? !item.disabled : liDisabled}"
        aria-selected="${selected}"
      >${this.getItemTitle(item)}</li>`;
    })}</ul>`;
  }
}

IOListBox.define("io-list-box");

let resizeTimer = 0;
window.addEventListener("resize", () =>
{
  // debounce the potentially heavy resize at 30 FPS rate
  // which is, at least, twice as slower than standard 60 FPS
  // scheduled when it comes to requestAnimationFrame
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() =>
  {
    resizeTimer = 0;
    for (const ioListBox of $$("io-list-box"))
    {
      // avoid computing the width if there are no items
      // or if the element is inside an invisible tab
      // where such width cannot possibly be computed
      if (!ioListBox.items || isVisible(ioListBox))
        return;

      ioListBox.style.setProperty("--width", "100%");
      // theoretically one rAF should be sufficient
      // https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model
      // but some browser needs double rAF needed to ensure layout changes
      // https://bugs.chromium.org/p/chromium/issues/detail?id=675795
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15469349/
      // https://bugs.webkit.org/show_bug.cgi?id=177484
      requestAnimationFrame(() =>
      {
        requestAnimationFrame(setWidth.bind(ioListBox));
      });
    }
  }, 1000 / 30);
});

// to retrieve a unique ID per item
function getID(item)
{
  // get a unique URL for each known item
  return `li-${item.url.split("").map(
    c => c.charCodeAt(0).toString(32)
  ).join("")}`;
}

// to retrieve an item from an option id
function getItem(id)
{
  return this._items.find(item => (!item.group && getID(item) === id));
}

// private helper
function hover(type, item)
{
  const id = getID(item);
  if (!id)
    return;
  const hovered = $(".hover", this);
  if (hovered)
    hovered.classList.remove("hover");
  const option = $(`#${id}`, this);
  option.classList.add("hover");
  this.label.setAttribute("aria-activedescendant", id);
  const popup = this.popup;
  // if it's the mouse moving, don't auto scroll (annoying)
  if (type !== "mouse" && popup.scrollHeight > popup.clientHeight)
  {
    const scrollBottom = popup.clientHeight + popup.scrollTop;
    const elementBottom = option.offsetTop + option.offsetHeight;
    if (elementBottom > scrollBottom)
    {
      popup.scrollTop = elementBottom - popup.clientHeight;
    }
    else if (option.offsetTop < popup.scrollTop)
    {
      popup.scrollTop = option.offsetTop;
    }
  }
}

// find next available hoverable node
function findNext(el, other)
{
  const first = el;
  do
  {
    el = el[other];
  }
  // skip disabled items and separators/rows without an ID
  while (el && el !== first && !isDisabled.call(this, el));
  return el === first ? null : el;
}

function isDisabled(el)
{
  return el.id && getItem.call(this, el.id).disabled;
}

function isVisible(el)
{
  const cstyle = window.getComputedStyle(el, null);
  return cstyle.getPropertyValue("display") !== "none";
}

function setWidth()
{
  this.style.setProperty("--width", this.label.offsetWidth + "px");
}

;// CONCATENATED MODULE: ./js/io-popout.mjs
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





class IOPopout extends io_element
{
  static get observedAttributes()
  {
    return ["anchor-icon", "expanded", "i18n-body", "i18n-doclinks", "type"];
  }

  created()
  {
    this._children = Array.from(this.children);
    this.addEventListener("blur", this);
    this.addEventListener("click", this);
    this.setAttribute("tabindex", 0);
  }

  attributeChangedCallback()
  {
    this.render();
  }

  onblur(ev)
  {
    if (ev.relatedTarget && this.contains(ev.relatedTarget))
      return;

    this.expanded = null;
  }

  onclick(ev)
  {
    const {target} = ev;

    if (target.classList.contains("wrapper"))
    {
      ev.preventDefault();

      if (this.expanded)
      {
        this.expanded = null;
      }
      else if (this.type == "dialog" || this.type == "tooltip")
      {
        const {bottom, top} = ev.target.getBoundingClientRect();
        const {clientHeight} = document.documentElement;
        this.expanded = (clientHeight - bottom > top) ? "below" : "above";
      }
      else
      {
        this.expanded = "start";
      }
    }
    else if (target.nodeName == "A" || target.nodeName == "BUTTON")
    {
      this.expanded = null;
    }
  }

  render()
  {
    const {wire} = IOPopout;

    const role = this.type || "tooltip";
    const content = [];

    if (role == "dialog" || role == "tooltip")
    {
      content.push(wire(this, ":close")`
        <button class="icon close secondary"></button>
      `);
    }

    if (this.i18nBody)
    {
      const body = wire(this, ":body")`
        <p>${{i18n: this.i18nBody}}</p>
      `;

      // Support for link elements in the body is given through the mapping
      // of comma-separated values of `i18n-doclinks` popout dataset property
      // and the corresponding indexed anchor descendants.
      const {i18nDoclinks} = this.dataset;
      if (i18nDoclinks)
      {
        Promise.all(i18nDoclinks.split(",").map(getDoclink)).then(links =>
        {
          setElementLinks(body, ...links);
        });
      }

      content.push(body);
    }

    content.push(...this._children);

    this.html`
    <div class="wrapper icon">
      <div role="${role}" aria-hidden="${!this.expanded}">
        ${content}
      </div>
    </div>
    `;
  }
}

IOPopout.define("io-popout");

;// CONCATENATED MODULE: ./js/pages/desktop-options/index.mjs
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

















const ALLOWED_PROTOCOLS = /^(?:data|https):/;

const emitter = new EventEmitter();

let subscriptionsMap = Object.create(null);
let filtersMap = Object.create(null);
let acceptableAdsUrl = null;
let acceptableAdsPrivacyUrl = null;
let isCustomFiltersLoaded = false;
let additionalSubscriptions = [];
let premiumIsActive = null;

const collections = Object.create(null);
const {getMessage: desktop_options_getMessage} = browser.i18n;
const customFilters = [];
const syncErrorIds = new Map([
  ["synchronize_invalid_url",
   "options_filterList_lastDownload_invalidURL"],
  ["synchronize_connection_error",
   "options_filterList_lastDownload_connectionError"],
  ["synchronize_invalid_data",
   "options_filterList_lastDownload_invalidData"],
  ["synchronize_checksum_mismatch",
   "options_filterList_lastDownload_checksumMismatch"]
]);
const filtersDisabledErrorId = "options_filterList_filtersDisabled";
const subscriptionErrorIds = new Map();
const timestampUI = Symbol();
const allowlistedDomainRegexp = /^@@\|\|([^/:]+)\^\$document$/;
const allowlistedPageRegexp = /^@@\|([^?|]+(?:\?[^|]*)?)\|?\$document$/;
// Period of time in milliseconds
const minuteInMs = 60000;
const hourInMs = 3600000;
const fullDayInMs = 86400000;

convertDoclinks();
initI18n();

const promisedLocaleInfo = browser.runtime.sendMessage({
  type: "app.get",
  what: "localeInfo"
});
const promisedDateFormat = promisedLocaleInfo.then((addonLocale) =>
{
  return new Intl.DateTimeFormat(addonLocale.locale);
}).catch(dispatchError);
const promisedResources = loadResources();

function Collection(details)
{
  this.details = details;
  this.items = [];
}

Collection.prototype._setEmpty = function(table, detail, removeEmpty)
{
  if (removeEmpty)
  {
    const placeholders = $$(".empty-placeholder", table);
    for (const placeholder of placeholders)
      table.removeChild(placeholder);

    execAction(detail.removeEmptyAction, table);
  }
  else
  {
    const {emptyTexts = []} = detail;
    for (const text of emptyTexts)
    {
      const placeholder = document.createElement("li");
      placeholder.className = "empty-placeholder";
      placeholder.textContent = desktop_options_getMessage(text);
      table.appendChild(placeholder);
    }

    execAction(detail.setEmptyAction, table);
  }
};

Collection.prototype._createElementQuery = function(item)
{
  const access = (item.url || item.text).replace(/'/g, "\\'");
  return function(container)
  {
    return $(`[data-access="${access}"]`, container);
  };
};

Collection.prototype._getItemTitle = function(item, i)
{
  if (this.details[i].getItemTitle)
    return this.details[i].getItemTitle(item);

  return getRawItemTitle(item);
};

Collection.prototype._sortItems = function()
{
  this.items.sort((a, b) =>
  {
    // Make sure that Acceptable Ads is always last, since it cannot be
    // disabled, but only be removed. That way it's grouped together with
    // the "Own filter list" which cannot be disabled either at the bottom
    // of the filter lists in the Advanced tab.
    if (a.url && isAcceptableAds(a.url))
      return 1;
    if (b.url && isAcceptableAds(b.url))
      return -1;

    // Make sure that newly added entries always appear on top in descending
    // chronological order
    const aTimestamp = a[timestampUI] || 0;
    const bTimestamp = b[timestampUI] || 0;
    if (aTimestamp || bTimestamp)
      return bTimestamp - aTimestamp;

    const aTitle = this._getItemTitle(a, 0).toLowerCase();
    const bTitle = this._getItemTitle(b, 0).toLowerCase();
    return aTitle.localeCompare(bTitle);
  });
};

Collection.prototype.addItem = function(item)
{
  if (this.items.indexOf(item) >= 0)
    return;

  this.items.push(item);
  this._sortItems();
  for (let j = 0; j < this.details.length; j++)
  {
    const detail = this.details[j];
    const table = $(`#${detail.id}`);
    const template =
      $("template", table) ||
      $("template", table.closest(".template-container"));
    const listItem = document.createElement("li");
    listItem.appendChild(document.importNode(template.content, true));
    listItem.setAttribute("aria-label", this._getItemTitle(item, j));
    listItem.setAttribute("data-recommended", item.recommended);
    listItem.setAttribute("data-access", item.url || item.text);
    listItem.setAttribute("role", "section");

    const tooltip = $("io-popout[type='tooltip']", listItem);
    if (tooltip)
    {
      let tooltipId = tooltip.dataset.templateI18nBody;
      tooltipId = tooltipId.replace("%value%", item.recommended);
      if (desktop_options_getMessage(tooltipId))
      {
        tooltip.setAttribute("i18n-body", tooltipId);
      }
    }

    const descriptionNode = $(".description", listItem);
    if (descriptionNode)
    {
      let descriptionId = descriptionNode.dataset.templateI18nBody;
      descriptionId = descriptionId.replace(
        "%value%",
        item.recommended.replace(/-/g, "_")
      );
      const description = desktop_options_getMessage(descriptionId);
      descriptionNode.textContent = description;
    }

    this._setEmpty(table, detail, true);
    if (table.children.length > 0)
      table.insertBefore(listItem, table.children[this.items.indexOf(item)]);
    else
      table.appendChild(listItem);

    this.updateItem(item);
  }

  return length;
};

Collection.prototype.removeItem = function(item)
{
  const index = this.items.indexOf(item);
  if (index == -1)
    return;

  this.items.splice(index, 1);
  const getListElement = this._createElementQuery(item);
  for (const detail of this.details)
  {
    const table = $(`#${detail.id}`);
    const element = getListElement(table);

    // Element gets removed so make sure to handle focus appropriately
    const control = $(".control", element);
    if (control && control == document.activeElement)
    {
      if (!focusNextElement(element.parentElement, control))
      {
        // Fall back to next focusable element within same tab or dialog
        let focusableElement = element.parentElement;
        while (focusableElement)
        {
          if (focusableElement.classList.contains("tab-content") ||
              focusableElement.classList.contains("dialog-content"))
            break;

          focusableElement = focusableElement.parentElement;
        }
        focusNextElement(focusableElement || document, control);
      }
    }

    element.parentElement.removeChild(element);
    if (this.items.length == 0)
      this._setEmpty(table, detail);
  }
};

Collection.prototype.updateItem = function(item)
{
  const oldIndex = this.items.indexOf(item);
  if (oldIndex === -1)
    return;

  this._sortItems();
  const access = (item.url || item.text).replace(/'/g, "\\'");
  for (let i = 0; i < this.details.length; i++)
  {
    const table = $(`#${this.details[i].id}`);
    const element = $(`[data-access="${access}"]`, table);
    const title = this._getItemTitle(item, i);
    const displays = $$("[data-display]", element);
    for (let j = 0; j < displays.length; j++)
    {
      if (item[displays[j].dataset.display])
        displays[j].textContent = item[displays[j].dataset.display];
      else
        displays[j].textContent = title;
    }

    element.setAttribute("aria-label", title);
    if (this.details[i].searchable)
      element.setAttribute("data-search", title.toLowerCase());

    const controls = $$(
      `.control[role='checkbox'],
      io-toggle.control`,
      element
    );
    for (const control of controls)
    {
      const checked = !item.disabled;
      if (control.matches("io-toggle"))
        control.checked = checked;
      else
        control.setAttribute("aria-checked", checked);
      if (isAcceptableAds(item.url) && this == collections.filterLists)
      {
        control.disabled = true;
        control.setAttribute("aria-hidden", true);
      }
    }
    if (additionalSubscriptions.includes(item.url))
    {
      element.classList.add("preconfigured");
      const disablePreconfigures =
        $$("[data-disable~='preconfigured']", element);
      for (const disablePreconfigure of disablePreconfigures)
        disablePreconfigure.disabled = true;
    }

    const lastUpdateElement = $(".last-update", element);
    if (lastUpdateElement)
    {
      element.classList.remove("show-message");
      cleanSyncErrorIdsFromSubscription(item.url);
      if (!item.updatable)
      {
        const text = desktop_options_getMessage("options_filterList_lastDownload_bundled");
        $(".message", element).textContent = text;
        element.classList.add("show-message");
      }
      else if (item.downloading)
      {
        const text = desktop_options_getMessage("options_filterList_lastDownload_inProgress");
        $(".message", element).textContent = text;
        element.classList.add("show-message");
      }
      else if (item.downloadStatus != "synchronize_ok")
      {
        // Core doesn't tell us why the URL is invalid so we have to check
        // ourselves whether the filter list is using a supported protocol
        // https://gitlab.com/eyeo/adblockplus/adblockpluscore/blob/d3f6b1b7e3880eab6356b132493a4a947c87d33f/lib/downloader.js#L270
        if (item.downloadStatus === "synchronize_invalid_url" &&
            !ALLOWED_PROTOCOLS.test(item.url))
        {
          addErrorIdToSubscription(
            item.url,
            "options_filterList_lastDownload_invalidURLProtocol"
          );
        }
        else
        {
          const errorId = syncErrorIds.get(item.downloadStatus) ||
                          item.downloadStatus;
          if (errorId)
            addErrorIdToSubscription(item.url, errorId);
        }
      }
      else if (item.lastDownload > 0)
      {
        const lastUpdate = item.lastDownload * 1000;
        const sinceUpdate = Date.now() - lastUpdate;
        if (sinceUpdate > fullDayInMs)
        {
          const lastUpdateDate = new Date(item.lastDownload * 1000);
          promisedDateFormat.then((dateFormat) =>
          {
            lastUpdateElement.textContent = dateFormat.format(lastUpdateDate);
          });
        }
        else if (sinceUpdate > hourInMs)
        {
          lastUpdateElement.textContent =
            desktop_options_getMessage("options_filterList_hours");
        }
        else if (sinceUpdate > minuteInMs)
        {
          lastUpdateElement.textContent =
            desktop_options_getMessage("options_filterList_minutes");
        }
        else
        {
          lastUpdateElement.textContent =
            desktop_options_getMessage("options_filterList_now");
        }
      }

      updateErrorTooltip(element, subscriptionErrorIds.get(item.url));
    }

    const updateElement = $("io-popout .update-subscription", element);
    if (updateElement)
    {
      updateElement.setAttribute("aria-hidden", !item.updatable);
    }

    const websiteElement = $("io-popout .website", element);
    if (websiteElement)
    {
      if (item.homepage)
        websiteElement.setAttribute("href", item.homepage);
      websiteElement.setAttribute("aria-hidden", !item.homepage);
    }

    const sourceElement = $("io-popout .source", element);
    if (sourceElement)
      sourceElement.setAttribute("href", item.url);

    const newIndex = this.items.indexOf(item);
    if (oldIndex != newIndex)
      table.insertBefore(element, table.childNodes[newIndex]);
  }

  emitter.emit("collectionItem.updated", item);
};

Collection.prototype.clearAll = function()
{
  this.items = [];
  for (const detail of this.details)
  {
    const table = $(`#${detail.id}`);
    let element = table.firstChild;
    while (element)
    {
      if (element.tagName == "LI" && !element.classList.contains("static"))
        table.removeChild(element);
      element = element.nextElementSibling;
    }

    this._setEmpty(table, detail);
  }
};

function focusNextElement(container, currentElement)
{
  let focusables = $$("a, button, input, .control", container);
  focusables = Array.prototype.slice.call(focusables);
  let index = focusables.indexOf(currentElement);
  index += (index == focusables.length - 1) ? -1 : 1;

  const nextElement = focusables[index];
  if (!nextElement)
    return false;

  nextElement.focus();
  return true;
}

collections.recommendedFreeList = new Collection([
  {
    id: "free-list-table",
    getItemTitle: (item) => getPrettyItemTitle(item, false)
  }
]);
collections.recommendedPremiumList = new Collection([
  {
    id: "premium-list-table",
    getItemTitle: (item) => getPrettyItemTitle(item, false)
  }
]);
collections.langs = new Collection([
  {
    id: "blocking-languages-table",
    emptyTexts: ["options_language_empty"],
    getItemTitle: (item) => getPrettyItemTitle(item, false)
  }
]);
collections.more = new Collection([
  {
    id: "more-list-table",
    setEmptyAction: "hide-more-filters-section",
    removeEmptyAction: "show-more-filters-section"
  }
]);
collections.allowlist = new Collection([
  {
    id: "allowlisting-table",
    emptyTexts: ["options_allowlist_empty_1", "options_allowlist_empty_2"]
  }
]);
collections.filterLists = new Collection([
  {
    id: "all-filter-lists-table",
    emptyTexts: ["options_filterList_empty"]
  }
]);

function addSubscription(subscription)
{
  const {disabled, recommended, url} = subscription;
  let collection = null;
  switch (recommended)
  {
    case "ads":
      if (disabled == false)
        collection = collections.langs;

      const ioListBox = $("#languages-box");
      ioListBox.items = ioListBox.items.concat(subscription);
      break;
    case "notifications":
    case "privacy":
    case "social":
      collection = collections.recommendedFreeList;
      break;
    default:
      if (typeof recommended === "undefined" &&
          !isAcceptableAds(url) &&
          disabled == false)
        collection = collections.more;
      else if (premiumTypes.has(recommended))
      {
        collection = collections.recommendedPremiumList;
      }
      break;
  }

  if (collection)
  {
    collection.addItem(subscription);
  }

  subscriptionsMap[url] = subscription;
}

function updateSubscription(subscription)
{
  for (const name in collections)
    collections[name].updateItem(subscription);

  if (subscription.recommended == "ads")
  {
    if (subscription.disabled)
      collections.langs.removeItem(subscription);
    else
      collections.langs.addItem(subscription);
  }
  else if (!subscription.recommended && !isAcceptableAds(subscription.url))
  {
    if (subscription.disabled == false)
    {
      collections.more.addItem(subscription);
    }
    else
    {
      collections.more.removeItem(subscription);
    }
  }

  if (!(subscription.url in subscriptionsMap))
  {
    subscriptionsMap[subscription.url] = subscription;
  }
}

function updateFilter(filter)
{
  let allowlistTitle = null;

  const domainMatch = filter.text.match(allowlistedDomainRegexp);
  if (domainMatch && !filtersMap[filter.text])
  {
    allowlistTitle = domainMatch[1];
  }
  else
  {
    const pageMatch = filter.text.match(allowlistedPageRegexp);
    if (pageMatch && !filtersMap[filter.text])
    {
      const url = pageMatch[1];
      allowlistTitle = url.replace(/^[\w-]+:\/+(?:www\.)?/, "");
      if (/\?$/.test(allowlistTitle))
      {
        allowlistTitle += "…";
      }
    }
  }

  if (allowlistTitle)
  {
    filter.title = allowlistTitle;
    collections.allowlist.addItem(filter);
    if (isCustomFiltersLoaded)
    {
      const text = desktop_options_getMessage("options_allowlist_notification", [filter.title]);
      showNotification(text, "info");
    }
  }
  else
  {
    customFilters.push(filter);
  }

  filtersMap[filter.text] = filter;
}

function loadCustomFilters(filters)
{
  for (const filter of filters)
    updateFilter(filter);

  const cfTable = $("#custom-filters io-filter-table");
  cfTable.filters = customFilters;
}

function removeCustomFilter(text)
{
  const index = customFilters.findIndex(filter => filter.text === text);
  if (index >= 0)
    customFilters.splice(index, 1);
}

async function loadResources()
{
  const subscriptions = [];

  try
  {
    await loadLanguageNames();

    const recommendations = await front.app.get("recommendations");
    for (const recommendation of recommendations)
    {
      const subscription = {
        disabled: true,
        downloadStatus: null,
        homepage: null,
        languages: recommendation.languages,
        recommended: recommendation.type,
        title: recommendation.title,
        url: recommendation.url
      };

      subscriptions.push(subscription);
      addSubscription(subscription);
    }
  }
  catch (ex)
  {
    dispatchError(ex);
  }

  return {recommendations: subscriptions};
}

function findParentData(element, dataName, returnElement)
{
  element = element.closest(`[data-${dataName}]`);
  if (!element)
    return null;
  if (returnElement)
    return element;
  return element.getAttribute(`data-${dataName}`);
}

function sendMessageHandleErrors(message, onSuccess)
{
  browser.runtime.sendMessage(message).then(errors =>
  {
    if (errors.length > 0)
    {
      errors = errors.map(getErrorMessage);
      alert(stripTagsUnsafe(errors.join("\n")));
    }
    else if (onSuccess)
      onSuccess();
  });
}

function switchTab(id)
{
  location.hash = id;
}

/**
 * Checks if a url string equals either of the acceptable ads urls
 *
 * @param {string} url url to check against the acceptable ads urls
 *
 * @returns {boolean}
 */
function isAcceptableAds(url)
{
  return url == acceptableAdsUrl || url == acceptableAdsPrivacyUrl;
}

/**
 * Checks if there is a privacy conflict between acceptable ads
 * and disabling additional tracking
 *
 * @returns {boolean}
 */
function hasPrivacyConflict()
{
  const acceptableAdsList = subscriptionsMap[acceptableAdsUrl];
  let privacyList = null;
  for (const url in subscriptionsMap)
  {
    const subscription = subscriptionsMap[url];
    if (subscription.recommended == "privacy")
    {
      privacyList = subscription;
      break;
    }
  }
  return acceptableAdsList && acceptableAdsList.disabled == false &&
    privacyList && privacyList.disabled == false;
}

/**
 * Sets the states of the acceptable ads checkboxes. This is set on load but
 * also in reaction to subscriptions being added or removed
 *
 * @param {Object} options config params
 */
const setAcceptableAds = async(options = {}) =>
{
  const {firstLoad} = options;
  const subscriptions = await front.subscriptions.get();

  const activeSubscriptionUrls = subscriptions.map(
    ({disabled, url}) => !disabled && url
  ).filter(Boolean);

  const acceptableAds = $("#acceptable-ads-allow");
  const acceptableAdsPrivacy = $("#acceptable-ads-privacy-allow");
  const acceptableAdsWhyNot = $("#acceptable-ads-why-not");

  if (activeSubscriptionUrls.includes(acceptableAdsUrl))
  {
    acceptableAds.checked = true;
    acceptableAdsPrivacy.disabled = false;

    toggleDntNotification(false);
    acceptableAdsWhyNot.setAttribute("aria-hidden", true);
  }
  else if (activeSubscriptionUrls.includes(acceptableAdsPrivacyUrl))
  {
    acceptableAds.checked = true;
    acceptableAdsPrivacy.checked = true;
    acceptableAdsPrivacy.disabled = false;

    if (navigator.doNotTrack !== "1")
    {
      toggleDntNotification(true);
    }
    acceptableAdsWhyNot.setAttribute("aria-hidden", true);
  }
  else
  {
    acceptableAds.checked = false;
    acceptableAdsPrivacy.checked = false;
    acceptableAdsPrivacy.disabled = true;

    if (!firstLoad)
    {
      acceptableAdsWhyNot.setAttribute("aria-hidden", false);
    }

    toggleDntNotification(false);
  }
};

/**
 * Shows or hides the privacy conflict warning according to hasPrivacyConflict
 */
function setPrivacyConflict()
{
  const acceptableAdsForm = $("#acceptable-ads");

  if (hasPrivacyConflict())
  {
    getPref("ui_warn_tracking").then((showTrackingWarning) =>
    {
      acceptableAdsForm.classList.toggle("show-warning", showTrackingWarning);
    });
  }
  else
  {
    acceptableAdsForm.classList.remove("show-warning");
  }
}

/**
 * The event listener for a click
 *
 * @param {Event} e event send in from the listener
 */
const switchAcceptableAds = (e) =>
{
  e.stopPropagation();

  const {checked, dataset: {value}} = e.target;

  // Acceptable Ads checkbox clicked
  if (value === "ads")
  {
    const acceptableAdsPrivacy = $("#acceptable-ads-privacy-allow");
    const aaSurvey = $("#acceptable-ads-why-not");

    if (acceptableAdsPrivacy.checked)
    {
      void browser.runtime.sendMessage({
        type: "subscriptions.remove",
        url: acceptableAdsPrivacyUrl
      });
    }
    else
    {
      aaSurvey.setAttribute("aria-hidden", checked);
      void browser.runtime.sendMessage({
        type: (checked) ? "subscriptions.add" : "subscriptions.remove",
        url: acceptableAdsUrl
      });
    }
  }
  // Privacy Friendly Acceptable Ads checkbox clicked
  else
  {
    void browser.runtime.sendMessage({
      type: (!checked) ? "subscriptions.add" : "subscriptions.remove",
      url: acceptableAdsUrl
    });

    void browser.runtime.sendMessage({
      type: (checked) ? "subscriptions.add" : "subscriptions.remove",
      url: acceptableAdsPrivacyUrl
    });
  }
};

/**
 * Toggles the class to show the dnt notification
 *
 * @param {Boolean} show whether to add or remove the class
 */
const toggleDntNotification = (show) =>
{
  const acceptableAdsForm = $("#acceptable-ads");

  if (show === false)
  {
    acceptableAdsForm.classList.remove("show-dnt-notification");
  }
  else
  {
    acceptableAdsForm.classList.add("show-dnt-notification");
  }
};

function execAction(action, element)
{
  if (
    element.getAttribute("aria-disabled") === "true" ||
    element.disabled === true ||
    !action
  )
  {
    return false;
  }

  switch (action)
  {
    case "add-domain-exception":
      addAllowlistedDomain();
      return true;
    case "add-language-subscription":
      addEnableSubscription(findParentData(element, "access", false));
      return true;
    case "add-predefined-subscription": {
      const dialog = $("#dialog-content-predefined");
      const title = $(".title > span", dialog).textContent;
      const url = $(".url > a", dialog).textContent;
      addEnableSubscription(url, title);
      closeDialog();
      return true;
    }
    case "change-language-subscription":
      changeLanguageSubscription(findParentData(element, "access", false));
      return true;
    case "add-subscription": {
      const url = findParentData(element, "access", false);
      addEnableSubscription(url);
      closeDialog();
      return true;
    }
    case "close-dialog":
      closeDialog();
      return true;
    case "hide-more-filters-section":
      $("#more-filters").setAttribute("aria-hidden", true);
      return true;
    case "hide-acceptable-ads-survey":
      $("#acceptable-ads-why-not").setAttribute("aria-hidden", true);
      return false;
    case "hide-notification":
      hideNotification();
      return true;
    case "import-subscription": {
      const url = $("#blockingList-textbox").value;
      addEnableSubscription(url);
      closeDialog();
      return true;
    }
    case "open-dialog": {
      // For dialogs specific to a certain subscription,
      // pass the subscription data to the dialog
      const url = findParentData(element, "access", false);

      const dialog = findParentData(element, "dialog", false);
      openDialog(dialog, {subscriptionUrl: url});
      return true;
    }
    case "close-filterlist-by-url":
      closeAddFiltersByURL();
      return true;
    case "open-languages-box":
      const ioListBox = $("#languages-box");
      ioListBox.swap = true;
      $("button", ioListBox).focus();
      return true;
    case "remove-filter":
      browser.runtime.sendMessage({
        type: "filters.remove",
        text: findParentData(element, "access", false)
      });
      return true;
    case "remove-subscription":
      browser.runtime.sendMessage({
        type: "subscriptions.remove",
        url: findParentData(element, "access", false)
      });
      return true;
    case "show-more-filters-section":
      $("#more-filters").setAttribute("aria-hidden", false);
      return true;
    case "switch-tab":
      switchTab(element.getAttribute("href").substr(1));
      return true;
    case "enable-filters":
      const url = findParentData(element, "access", false);
      const subscription = subscriptionsMap[url];
      browser.runtime.sendMessage({
        type: "subscriptions.enableAllFilters",
        url
      }).then(() => updateSubscription(subscription));
      return true;
    case "toggle-disable-subscription":
      browser.runtime.sendMessage({
        type: "subscriptions.toggle",
        keepInstalled: true,
        url: findParentData(element, "access", false)
      });
      return true;
    case "toggle-pref":
      browser.runtime.sendMessage({
        type: "prefs.toggle",
        key: findParentData(element, "pref", false)
      });
      return true;
    case "toggle-remove-subscription":
      const subscriptionUrl = findParentData(element, "access", false);
      if (element.getAttribute("aria-checked") == "true")
      {
        browser.runtime.sendMessage({
          type: "subscriptions.remove",
          url: subscriptionUrl
        });
      }
      else
        addEnableSubscription(subscriptionUrl);
      return true;
    case "update-all-subscriptions":
      browser.runtime.sendMessage({
        type: "subscriptions.update"
      });
      return true;
    case "update-subscription":
      browser.runtime.sendMessage({
        type: "subscriptions.update",
        url: findParentData(element, "access", false)
      });
      return true;
    case "validate-import-subscription":
      const form = findParentData(element, "validation", true);
      if (!form)
        return;

      if (form.checkValidity())
      {
        addEnableSubscription($("#import-list-url", form).value);
        form.reset();
        closeAddFiltersByURL();
      }
      else
      {
        $(":invalid", form).focus();
      }
      return true;
  }

  return false;
}

function execActions(actions, element)
{
  actions = actions.split(",");
  let foundAction = false;

  for (const action of actions)
  {
    foundAction |= execAction(action, element);
  }

  return !!foundAction;
}

function changeLanguageSubscription(url)
{
  for (const key in subscriptionsMap)
  {
    const subscription = subscriptionsMap[key];
    const subscriptionType = subscription.recommended;
    if (subscriptionType == "ads" && subscription.disabled == false)
    {
      browser.runtime.sendMessage({
        type: "subscriptions.remove",
        url: subscription.url
      });
      browser.runtime.sendMessage({
        type: "subscriptions.add",
        url
      });
      break;
    }
  }
}

function onClick(e)
{
  const actions = findParentData(e.target, "action", false);
  if (!actions)
    return;

  const foundAction = execActions(actions, e.target);
  if (foundAction)
  {
    e.preventDefault();
  }
}

function onKeyUp(event)
{
  const {key} = event;
  let element = document.activeElement;
  if (!key || !element)
    return;

  const container = findParentData(element, "action", true);
  if (!container || !container.hasAttribute("data-keys"))
    return;

  const keys = container.getAttribute("data-keys").split(" ");
  if (keys.indexOf(key) < 0)
    return;

  if (element.getAttribute("role") == "tab")
  {
    let parent = element.parentElement;
    if (key == "ArrowLeft" || key == "ArrowUp")
      parent = parent.previousElementSibling || container.lastElementChild;
    else if (key == "ArrowRight" || key == "ArrowDown")
      parent = parent.nextElementSibling || container.firstElementChild;
    element = parent.firstElementChild;
  }

  const actions = container.getAttribute("data-action");
  const foundAction = execActions(actions, element);
  if (foundAction)
  {
    event.preventDefault();
  }
}

function selectTabItem(tabId, container, focus)
{
  // Show tab content
  document.body.setAttribute("data-tab", tabId);

  // Select tab
  const tabList = $("[role='tablist']", container);
  if (!tabList)
    return null;

  const previousTab = $("[aria-selected]", tabList);
  previousTab.removeAttribute("aria-selected");
  previousTab.setAttribute("tabindex", -1);

  const tab = $(`a[href="#${tabId}"]`, tabList);
  tab.setAttribute("aria-selected", true);
  tab.setAttribute("tabindex", 0);

  const tabContentId = tab.getAttribute("aria-controls");
  const tabContent = document.getElementById(tabContentId);

  if (tab && focus)
    tab.focus();

  if (tabId === "advanced")
  {
    setupFiltersBox();
    setupAddFiltersByURL();
  }

  return tabContent;
}

function onHashChange()
{
  const hash = location.hash.substr(1);
  if (!hash)
    return;

  // Select tab and parent tabs
  const tabIds = hash.split("-");
  let tabContent = document.body;
  for (let i = 0; i < tabIds.length; i++)
  {
    const tabId = tabIds.slice(0, i + 1).join("-");
    tabContent = selectTabItem(tabId, tabContent, true);
    if (!tabContent)
      break;
  }
}

function setupFiltersBox()
{
  const ioListBox = $("#filters-box");

  if (!ioListBox.items.length)
  {
    ioListBox.getItemTitle = (item) => getPrettyItemTitle(item, true);
    ioListBox.addEventListener("change", (event) =>
    {
      const item = event.detail;
      addEnableSubscription(item.url, item.title, item.homepage);
    });
  }

  promisedResources.then(({recommendations}) =>
  {
    ioListBox.items = getListBoxItems(recommendations);
  });
}

function getListBoxItems(subscriptions)
{
  const urls = new Set();
  for (const subscription of collections.filterLists.items)
    urls.add(subscription.url);

  const groups = {
    ads: [],
    others: []
  };

  for (const subscription of subscriptions)
  {
    const {recommended, url} = subscription;
    if (recommended === "allowing")
      continue;

    const key = recommended === "ads" ? recommended : "others";
    const label = getPrettyItemTitle(subscription, true);
    const selected = urls.has(url);
    const premium = premiumTypes.has(recommended);
    const overrides = {unselectable: selected, label, selected, premium};
    groups[key].push(Object.assign({}, subscription, overrides));
  }

  // items ordered with groups
  return [
    ...groups.others,
    {
      type: "ads",
      group: true,
      description: browser.i18n.getMessage("options_language_filter_list")
    },
    ...groups.ads
  ];
}

function setupLanguagesBox()
{
  const ioListBox = $("#languages-box");
  ioListBox.getItemTitle = (item) => getPrettyItemTitle(item, false);
  ioListBox.addEventListener("close", (event) =>
  {
    ioListBox.swap = false;
  });
  ioListBox.addEventListener("change", (event) =>
  {
    const item = event.detail;
    if (ioListBox.swap)
      changeLanguageSubscription(item.url);
    else
    {
      item.disabled = !item.disabled;
      addEnableSubscription(item.url, item.title, item.homepage);
    }
  });
}

function onDOMLoaded()
{
  void setupPremium();
  setupLanguagesBox();
  populateLists().catch(dispatchError);
  populateFilters().catch(dispatchError);

  // Initialize navigation sidebar
  browser.runtime.sendMessage({
    type: "app.get",
    what: "addonVersion"
  }).then(addonVersion =>
  {
    $("#abp-version").textContent = desktop_options_getMessage(
      "options_dialog_about_version",
      [addonVersion]
    );
  });

  // Initialize interactive UI elements
  document.body.addEventListener("click", onClick, false);

  $("#acceptable-ads-allow").addEventListener("click", switchAcceptableAds);
  $("#acceptable-ads-privacy-allow")
    .addEventListener("click", switchAcceptableAds);

  document.body.addEventListener("keyup", onKeyUp, false);
  $("#allowlisting-textbox").addEventListener("keyup", (e) =>
  {
    $("#allowlisting-add-button").disabled = !e.target.value;
  }, false);

  $$("li[data-pref]").forEach(async(option) =>
  {
    const key = option.dataset.pref;
    const value = await getPref(key);
    onPrefMessage(key, value, true);
  });

  // General tab
  getDoclink("acceptable_ads_criteria").then(link =>
  {
    setElementLinks("enable-acceptable-ads-description", link);
  });
  getDoclink("imprint").then((url) =>
  {
    setElementText(
      $("#copyright"),
      "options_dialog_about_copyright",
      [new Date().getFullYear()]
    );
    setElementLinks("copyright", url);
  });
  getDoclink("privacy").then((url) =>
  {
    $("#privacy-policy").href = url;
  });
  getDoclink("language_subscription").then((url) =>
  {
    setElementLinks("blocking-languages-description", url);
  });
  setElementText(
    $("#tracking-warning-1"),
    "options_tracking_warning_1",
    [
      desktop_options_getMessage("common_feature_privacy_title"),
      desktop_options_getMessage("options_acceptableAds_ads_label")
    ]
  );
  setElementText(
    $("#tracking-warning-3"),
    "options_tracking_warning_3",
    [desktop_options_getMessage("options_acceptableAds_privacy_label")]
  );

  getDoclink("adblock_plus_{browser}_dnt").then(url =>
  {
    setElementLinks("dnt", url);
  });
  getDoclink("acceptable_ads_survey").then(url =>
  {
    $("#acceptable-ads-why-not a.primary").href = url;
  });

  // Advanced tab
  browser.runtime.sendMessage({
    type: "app.get",
    what: "features"
  }).then(features =>
  {
    hidePref("show_devtools_panel", !features.devToolsPanel);
  });

  getDoclink("filterdoc").then(link =>
  {
    setElementLinks("custom-filters-description", link);
  });

  // Help tab
  getDoclink("help_center_abp_en").then(link =>
  {
    setElementLinks("help-center", link);
  });
  getDoclink("adblock_plus_report_bug").then(link =>
  {
    setElementLinks("report-bug", link);
  });
  getDoclink("{browser}_support").then(url =>
  {
    setElementLinks("visit-forum", url);
  });

  front.app.getInfo().then(({application, store}) =>
  {
    document.documentElement.dataset.application = application;

    // We need to restrict this feature to certain browsers for which we
    // have a link to where users can rate us
    if (!["chrome", "chromium", "opera", "firefox"].includes(application))
    {
      $("#support-us").setAttribute("aria-hidden", true);
      return;
    }

    front.doclinks.get(`${store}_review`).then((url) =>
    {
      $("#support-us a[data-i18n='options_rating_button']").href = url;
    });
  });

  $("#dialog").addEventListener("keydown", function(event)
  {
    const {key, shiftKey, target} = event;

    switch (key)
    {
      case "Escape":
        closeDialog();
        break;
      case "Tab":
        if (shiftKey)
        {
          if (target.classList.contains("focus-first"))
          {
            event.preventDefault();
            $(".focus-last", this).focus();
          }
        }
        else if (target.classList.contains("focus-last"))
        {
          event.preventDefault();
          $(".focus-first", this).focus();
        }
        break;
    }
  }, false);

  onHashChange();
}

let focusedBeforeDialog = null;
function openDialog(name, options)
{
  const dialog = $("#dialog");
  dialog.setAttribute("aria-hidden", false);
  dialog.setAttribute("aria-labelledby", `dialog-title-${name}`);
  dialog.setAttribute("aria-describedby", `dialog-description-${name}`);
  document.body.setAttribute("data-dialog", name);

  if (options && options.subscriptionUrl)
  {
    dialog.setAttribute("data-access", options.subscriptionUrl);
  }

  let defaultFocus = $(`#dialog-content-${name} .default-focus`);
  if (!defaultFocus)
    defaultFocus = $(".focus-first", dialog);
  focusedBeforeDialog = document.activeElement;
  defaultFocus.focus();
}

function closeDialog()
{
  const dialog = $("#dialog");
  dialog.setAttribute("aria-hidden", true);
  dialog.removeAttribute("aria-labelledby");
  document.body.removeAttribute("data-dialog");
  focusedBeforeDialog.focus();
}

function showNotification(text, kind)
{
  const notification = $("#notification");
  notification.setAttribute("aria-hidden", false);
  $("#notification-text", notification).textContent = text;
  notification.classList.add(kind);
  notification.addEventListener("animationend", hideNotification);
}

function hideNotification()
{
  const notification = $("#notification");
  notification.classList.remove("info", "error");
  notification.setAttribute("aria-hidden", true);
  $("#notification-text", notification).textContent = "";
}

async function populateFilters()
{
  const filters = await front.filters.get();
  loadCustomFilters([].concat(...filters));
  isCustomFiltersLoaded = true;
}

async function populateLists()
{
  subscriptionsMap = Object.create(null);
  filtersMap = Object.create(null);

  // Empty collections and lists
  for (const property in collections)
    collections[property].clearAll();

  const [
    url,
    privacyUrl,
    additionalSubscriptionUrls,
    subscriptions
  ] = await Promise.all([
    front.app.get("acceptableAdsUrl"),
    front.app.get("acceptableAdsPrivacyUrl"),
    front.prefs.get("additional_subscriptions"),
    front.subscriptions.get()
  ]);

  acceptableAdsUrl = url;
  acceptableAdsPrivacyUrl = privacyUrl;
  additionalSubscriptions = additionalSubscriptionUrls;

  setAcceptableAds({firstLoad: true});

  for (const subscription of subscriptions)
    onSubscriptionMessage("added", subscription);
}

function addAllowlistedDomain()
{
  const domain = $("#allowlisting-textbox");
  const value = domain.value.trim();

  if (!value)
    return;

  for (const allowlistItem of collections.allowlist.items)
  {
    if (allowlistItem.title == value)
    {
      allowlistItem[timestampUI] = Date.now();
      collections.allowlist.updateItem(allowlistItem);
      domain.value = "";
      break;
    }
  }

  try
  {
    const {host} = new URL(/^https?:/.test(value) ? value : `http://${value}`);
    sendMessageHandleErrors({
      type: "filters.add",
      text: "@@||" + host.toLowerCase() + "^$document"
    });
    domain.value = "";
    $("#allowlisting-add-button").disabled = true;
  }
  catch (error)
  {
    dispatchError(error);
  }
}

function addEnableSubscription(url, title, homepage)
{
  let messageType = null;
  const knownSubscription = subscriptionsMap[url];
  if (knownSubscription && knownSubscription.disabled == true)
    messageType = "subscriptions.toggle";
  else
    messageType = "subscriptions.add";

  const message = {
    type: messageType,
    url
  };
  if (title)
    message.title = title;
  if (homepage)
    message.homepage = homepage;

  browser.runtime.sendMessage(message);
}

function cleanSyncErrorIdsFromSubscription(url)
{
  for (const syncErrorId of syncErrorIds.values())
  {
    removeErrorIdFromSubscription(url, syncErrorId);
  }
}

function addErrorIdToSubscription(url, errorId)
{
  let errorIds = subscriptionErrorIds.get(url);

  if (!errorIds)
  {
    errorIds = new Set();
    subscriptionErrorIds.set(url, errorIds);
  }

  errorIds.add(errorId);
}

function removeErrorIdFromSubscription(url, errorId)
{
  const errorIds = subscriptionErrorIds.get(url);

  if (!errorIds)
    return;

  errorIds.delete(errorId);

  if (errorIds.size === 0)
    subscriptionErrorIds.delete(url);
}

function updateErrorTooltip(element, errorIds)
{
  const errorTooltip = $("io-popout[anchor-icon='error']", element);
  const errorList = $(".error-list", errorTooltip);
  errorList.innerHTML = "";

  if (!errorIds || element.classList.contains("show-message"))
  {
    element.classList.remove("error");
    return;
  }

  for (const errorId of errorIds)
  {
    const listItem = document.createElement("li");
    listItem.textContent = desktop_options_getMessage(errorId) || errorId;
    if (errorId === filtersDisabledErrorId)
    {
      const enableFiltersButton = document.createElement("a");
      enableFiltersButton.textContent = desktop_options_getMessage(
        "options_filterList_enableFilters"
      );
      enableFiltersButton.setAttribute("data-action", "enable-filters");
      listItem.appendChild(enableFiltersButton);
    }
    errorList.appendChild(listItem);
  }

  element.classList.add("error");
}

async function setupPremium()
{
  setupPremiumBanners();
  setupPremiumInRecommended();

  const premium = await front.premium.get();
  premiumIsActive = premium.isActive;
  updatePremiumStateInPage();

  void start(emitter);
}

async function setupPremiumBanners()
{
  const premiumUpgradeBanner = $(".premium-upgrade.banner");
  const upgradeCTA = $(".upgrade.button", premiumUpgradeBanner);
  const upgradeDescription = $("#premium-upgrade-description");

  const source = getSourceAttribute(premiumUpgradeBanner);
  const manageUrl = await front.ctalinks.get("premium-manage", {source});
  const upgradeUrl = await front.ctalinks.get("premium-upgrade", {source});

  $$(".premium-manage.banner a").forEach(cta =>
  {
    cta.setAttribute("href", manageUrl);
  });
  upgradeCTA.setAttribute("href", upgradeUrl);
  setElementLinks(upgradeDescription, upgradeUrl);
}

async function setupPremiumInRecommended()
{
  const upgradeCTA = $(".recommended-features .upgrade.button");

  const source = getSourceAttribute(upgradeCTA);
  const upgradeUrl = await front.ctalinks.get("premium-upgrade", {source});

  upgradeCTA.setAttribute("href", upgradeUrl);
}

function updatePremiumStateInPage()
{
  document.body.classList.toggle("premium", premiumIsActive);

  setupFiltersBox();
}

function onFilterMessage(action, filter)
{
  switch (action)
  {
    case "added":
      filter[timestampUI] = Date.now();
      updateFilter(filter);
      break;
    case "removed":
      const knownFilter = filtersMap[filter.text];
      if (allowlistedDomainRegexp.test(knownFilter.text) ||
          allowlistedPageRegexp.test(knownFilter.text))
        collections.allowlist.removeItem(knownFilter);
      else
        removeCustomFilter(filter.text);

      delete filtersMap[filter.text];
      break;
  }
}

function onSubscriptionMessage(action, subscription, ...args)
{
  // Ensure that recommendations have already been loaded so that we can
  // identify and handle recommended filter lists accordingly (see #6838)
  promisedResources.then(() =>
  {
    if (subscription.url in subscriptionsMap)
    {
      const knownSubscription = subscriptionsMap[subscription.url];
      for (const property in subscription)
      {
        knownSubscription[property] = subscription[property];
      }
      subscription = knownSubscription;
    }

    switch (action)
    {
      case "added":
        const {url} = subscription;
        // Handle custom subscription
        if (/^~user/.test(url))
        {
          loadCustomFilters(subscription.filters);
          return;
        }
        else if (url in subscriptionsMap)
          updateSubscription(subscription);
        else
          addSubscription(subscription);

        if (isAcceptableAds(url))
        {
          setAcceptableAds();
        }

        browser.runtime.sendMessage({
          type: "subscriptions.getDisabledFilterCount",
          url: subscription.url
        }).then(disabledFilterCount =>
        {
          if (disabledFilterCount > 0)
            addErrorIdToSubscription(subscription.url, filtersDisabledErrorId);
          collections.filterLists.addItem(subscription);
          setPrivacyConflict();
        });
        break;
      case "changed":
        updateSubscription(subscription);

        setPrivacyConflict();
        break;
      case "filtersDisabled":
        const filtersDisabled = args[0];
        if (filtersDisabled)
          addErrorIdToSubscription(subscription.url, filtersDisabledErrorId);
        else
        {
          removeErrorIdFromSubscription(
            subscription.url,
            filtersDisabledErrorId
          );
        }
        updateSubscription(subscription);
        break;
      case "removed":
        if (subscription.recommended && subscription.recommended !== "allowing")
        {
          subscription.disabled = true;
          onSubscriptionMessage("changed", subscription);
        }
        else
        {
          delete subscriptionsMap[subscription.url];
          if (isAcceptableAds(subscription.url))
          {
            setAcceptableAds();
          }
          else
          {
            collections.more.removeItem(subscription);
          }
        }

        subscriptionErrorIds.delete(subscription.url);
        collections.filterLists.removeItem(subscription);
        setPrivacyConflict();
        break;
    }
  }).catch(dispatchError);
}

function hidePref(key, value)
{
  const element = getPrefElement(key);
  if (element)
    element.setAttribute("aria-hidden", value);
}

function getPrefElement(key)
{
  return $(`[data-pref="${key}"]`);
}

function getPref(key)
{
  return browser.runtime.sendMessage({
    type: "prefs.get",
    key
  });
}

function onPrefMessage(key, value, initial)
{
  switch (key)
  {
    case "notifications_ignoredcategories":
      value = value.indexOf("*") == -1;
      break;
    case "ui_warn_tracking":
      setPrivacyConflict();
      break;
  }

  const checkbox = $(`[data-pref="${key}"] button[role="checkbox"]`);
  if (checkbox)
    checkbox.setAttribute("aria-checked", value);
}

front.addListener((message) =>
{
  switch (message.type)
  {
    case "app.respond":
      switch (message.action)
      {
        case "addSubscription":
          const subscription = message.args[0];

          let {title, url} = subscription;
          if (!title || title == url)
          {
            title = "";
          }

          if (ALLOWED_PROTOCOLS.test(url))
          {
            const dialog = $("#dialog-content-predefined");
            $(".title > span", dialog).textContent = title;
            $(".title", dialog).hidden = !title;
            const link = $(".url > a", dialog);
            link.href = url;
            link.textContent = url;
            openDialog("predefined");
          }
          else
          {
            openDialog("invalid");
          }
          break;
        case "focusSection":
          let section = message.args[0];
          if (section == "notifications")
          {
            section = "advanced";
            const elem = getPrefElement("notifications_ignoredcategories");
            elem.classList.add("highlight-animate");

            // Reset animation, in case we need to repeat it later
            const onAnimationEnd = () =>
            {
              elem.classList.remove("highlight-animate");
              elem.removeEventListener("animationcancel", onAnimationEnd);
              elem.removeEventListener("animationend", onAnimationEnd);
            };
            elem.addEventListener("animationcancel", onAnimationEnd);
            elem.addEventListener("animationend", onAnimationEnd);

            $("button", elem).focus();
          }

          selectTabItem(section, document.body, false);
          break;
      }
      break;
    case "filters.respond":
      onFilterMessage(message.action, message.args[0]);
      break;
    case "prefs.respond":
      onPrefMessage(message.action, message.args[0], false);
      break;
    case "premium.respond":
      premiumIsActive = message.args[0].isActive;
      setupPremiumBanners();
      updatePremiumStateInPage();
      break;
    case "subscriptions.respond":
      onSubscriptionMessage(message.action, ...message.args);
      setupFiltersBox();
      break;
  }
});

front.app.listen(["addSubscription", "focusSection"]);
front.filters.listen(["added", "changed", "removed"]);
front.prefs.listen([
  "elemhide_debug",
  "notifications_ignoredcategories",
  "recommend_language_subscriptions",
  "shouldShowBlockElementMenu",
  "show_devtools_panel",
  "show_statsinicon",
  "ui_warn_tracking",
  "data_collection_opt_out"
]);
front.premium.listen(["changed"]);
front.subscriptions.listen(["added", "changed", "filtersDisabled", "removed"]);

onDOMLoaded();

window.addEventListener("hashchange", onHashChange, false);

// Show a generic error message
window.addEventListener(
  "error",
  showNotification.bind(
    null,
    browser.i18n.getMessage("options_generic_error"),
    "error"
  )
);

function dispatchError(error)
{
  if (error)
    window.console.error(error);
  window.dispatchEvent(new CustomEvent("error"));
}

document.body.hidden = false;

})();

/******/ })()
;