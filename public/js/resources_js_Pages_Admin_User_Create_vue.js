(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_User_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Apis_Admin_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Apis/Admin/User */ "./resources/js/Apis/Admin/User.js");
/* harmony import */ var _Mixins_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Mixins/mixin */ "./resources/js/Mixins/mixin.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        gender: '',
        email: '',
        role: null,
        favorite_colors: [],
        file: null,
        password: '',
        password_confirmation: ''
      },
      uploadImageUrl: '',
      errors: []
    };
  },
  mixins: [_Mixins_mixin__WEBPACK_IMPORTED_MODULE_1__.default],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    genders: function genders(state) {
      return state.user.genders;
    },
    roles: function roles(state) {
      return state.user.roles;
    }
  })),
  methods: {
    // 登録
    register: function register() {
      var _this = this;

      var data = this.createFormData(this.form);
      _Apis_Admin_User__WEBPACK_IMPORTED_MODULE_0__.default.create(data).then(function (response) {
        _this.$router.push({
          name: "admin.user"
        });

        flash({
          message: response.data.message,
          type: 'success'
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }

        if (error.response.status == 417) {
          flash({
            message: error.response.data.error,
            type: 'error'
          });
        }
      });
    },
    // 画像表示
    onImagePicked: function onImagePicked(file) {
      var _this2 = this;

      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return;
        }

        var fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener('load', function () {
          _this2.uploadImageUrl = fr.result;
        });
      } else {
        this.uploadImageUrl = '';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Mixins/mixin.js":
/*!**************************************!*\
  !*** ./resources/js/Mixins/mixin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    // FormData生成
    createFormData: function createFormData(data) {
      var form = new FormData();
      Object.keys(data).forEach(function (key) {
        var value = data[key];

        if (Array.isArray(value)) {
          value.forEach(function (entry) {
            form.append(key + '[]', entry);
          });
        } else {
          form.append(key, value);
        }
      });
      return form;
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/User/Create.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Create.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=78e462a7& */ "./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/User/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_78e462a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=78e462a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/User/Create.vue?vue&type=template&id=78e462a7& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            attrs: { name: "name", label: "お名前", required: "" },
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
                _vm._v(
                  "\n            " + _vm._s(_vm.errors.name[0]) + "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", [_vm._v("性別")]),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-radio-group",
                {
                  model: {
                    value: _vm.form.gender,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "gender", $$v)
                    },
                    expression: "form.gender"
                  }
                },
                [
                  _c(
                    "v-row",
                    [
                      _vm._l(_vm.genders, function(gender) {
                        return [
                          _c(
                            "v-col",
                            { key: gender.id },
                            [
                              _c("v-radio", {
                                attrs: {
                                  label: "" + gender.value,
                                  value: "" + gender.id
                                }
                              })
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.errors.gender
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n            " + _vm._s(_vm.errors.gender[0]) + "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              name: "role",
              items: _vm.roles,
              "item-text": "value",
              "item-value": "id",
              label: "権限"
            },
            model: {
              value: _vm.form.role,
              callback: function($$v) {
                _vm.$set(_vm.form, "role", $$v)
              },
              expression: "form.role"
            }
          }),
          _vm._v(" "),
          _vm.errors.role
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n            " + _vm._s(_vm.errors.role[0]) + "\n        "
                )
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
                  "\n            " + _vm._s(_vm.errors.email[0]) + "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", [_vm._v("好きな色")]),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ma-1" },
            [
              _c(
                "v-col",
                [
                  _c("v-checkbox", {
                    attrs: {
                      name: "favorite_colors",
                      label: "青",
                      color: "blue",
                      value: "1",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.form.favorite_colors,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "favorite_colors", $$v)
                      },
                      expression: "form.favorite_colors"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-checkbox", {
                    attrs: {
                      name: "favorite_colors",
                      label: "赤",
                      color: "red",
                      value: "2",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.form.favorite_colors,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "favorite_colors", $$v)
                      },
                      expression: "form.favorite_colors"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-checkbox", {
                    attrs: {
                      name: "favorite_colors",
                      label: "緑",
                      color: "green",
                      value: "3",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.form.favorite_colors,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "favorite_colors", $$v)
                      },
                      expression: "form.favorite_colors"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.errors.favorite_colors
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.favorite_colors[0]) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.uploadImageUrl
            ? _c("img", { attrs: { src: _vm.uploadImageUrl } })
            : _vm._e(),
          _vm._v(" "),
          _c("v-file-input", {
            attrs: {
              name: "file",
              accept: "image/*",
              "show-size": "",
              label: "画像ファイルをアップロードしてください",
              "prepend-icon": "mdi-image"
            },
            on: { change: _vm.onImagePicked },
            model: {
              value: _vm.form.file,
              callback: function($$v) {
                _vm.$set(_vm.form, "file", $$v)
              },
              expression: "form.file"
            }
          }),
          _vm._v(" "),
          _vm.errors.file
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v(
                  "\n            " + _vm._s(_vm.errors.file[0]) + "\n        "
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
                  "\n            " +
                    _vm._s(_vm.errors.password[0]) +
                    "\n        "
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
                  "\n            " +
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