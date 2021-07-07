(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Apis_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Apis/Auth */ "./resources/js/Apis/Auth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmaition: ''
      },
      errors: []
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      _Apis_Auth__WEBPACK_IMPORTED_MODULE_0__.default.register(this.form).then(function () {
        _this.$router.push({
          name: "login"
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/Register.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=161a75ec& */ "./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_161a75ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=161a75ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Register.vue?vue&type=template&id=161a75ec& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("h1", [_vm._v("ユーザー登録")]),
      _vm._v(" "),
      _c(
        "v-form",
        [
          _c("v-text-field", {
            attrs: { name: "name", label: "名前", required: "" },
            model: {
              value: _vm.form.name,
              callback: function($$v) {
                _vm.$set(_vm.form, "name", $$v)
              },
              expression: "form.name"
            }
          }),
          _vm._v(" "),
          _vm.errors.name
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n        ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { name: "email", label: "メールアドレス", required: "" },
            model: {
              value: _vm.form.email,
              callback: function($$v) {
                _vm.$set(_vm.form, "email", $$v)
              },
              expression: "form.email"
            }
          }),
          _vm._v(" "),
          _vm.errors.email
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.errors.email[0]) + "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              type: "password",
              name: "password",
              label: "パスワード",
              hint: "8文字以上入力してください",
              counter: ""
            },
            model: {
              value: _vm.form.password,
              callback: function($$v) {
                _vm.$set(_vm.form, "password", $$v)
              },
              expression: "form.password"
            }
          }),
          _vm._v(" "),
          _vm.errors.password
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.errors.password[0]) + "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              type: "password",
              name: "password_confirmation",
              label: "パスワード確認",
              hint: "8文字以上入力してください",
              counter: ""
            },
            model: {
              value: _vm.form.password_confirmation,
              callback: function($$v) {
                _vm.$set(_vm.form, "password_confirmation", $$v)
              },
              expression: "form.password_confirmation"
            }
          }),
          _vm._v(" "),
          _vm.errors.password_confirmation
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.errors.password_confirmation[0]) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.register($event)
                }
              }
            },
            [_vm._v("\n        登録\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);