(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      sending: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;
      this.sending = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (res) {
        _this.sending = false;
        _this.$toast.fire({
          icon: 'success',
          title: 'Registro exitoso'
        });
        _this.$router.push('/pages/login');
      })["catch"](function (err) {
        _this.sending = false;
        console.log();
        if (err.response.status != 422) {
          _this.$toast.fire({
            icon: 'error',
            title: 'Registro fallido'
          });
        }
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CContainer",
    { staticClass: "min-vh-100 d-flex align-items-center" },
    [
      _c(
        "CRow",
        { staticClass: "w-100 justify-content-center" },
        [
          _c(
            "CCol",
            { attrs: { md: "6", sm: "8" } },
            [
              _c(
                "CCard",
                { staticClass: "mx-4 mb-0" },
                [
                  _c(
                    "CCardBody",
                    { staticClass: "p-4" },
                    [
                      _c(
                        "CForm",
                        [
                          _c("h1", [_vm._v("Registro")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-muted" }, [
                            _vm._v("Crea tu cuenta"),
                          ]),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Nombre",
                              autocomplete: "name",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function () {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-user" },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.name,
                              callback: function ($$v) {
                                _vm.name = $$v
                              },
                              expression: "name",
                            },
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Correo electrónico",
                              autocomplete: "email",
                              prepend: "@",
                            },
                            model: {
                              value: _vm.email,
                              callback: function ($$v) {
                                _vm.email = $$v
                              },
                              expression: "email",
                            },
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Contraseña",
                              type: "password",
                              autocomplete: "new-password",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function () {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-lock-locked" },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.password,
                              callback: function ($$v) {
                                _vm.password = $$v
                              },
                              expression: "password",
                            },
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            staticClass: "mb-4",
                            attrs: {
                              placeholder: "Repite la contraseña",
                              type: "password",
                              autocomplete: "new-password",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function () {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-lock-locked" },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.password_confirmation,
                              callback: function ($$v) {
                                _vm.password_confirmation = $$v
                              },
                              expression: "password_confirmation",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              attrs: {
                                color: "success",
                                disabled: _vm.sending,
                                block: "",
                              },
                              on: { click: _vm.register },
                            },
                            [_vm._v("Crear cuenta")]
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              attrs: { color: "primary", block: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.$router.push("/pages/login")
                                },
                              },
                            },
                            [_vm._v("Iniciar Sesión")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/pages/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=fa417f26& */ "./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=fa417f26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);