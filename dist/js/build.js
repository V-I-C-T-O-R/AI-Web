/*!
 * Vue.js v1.0.28-csp
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t();
}(this, function () {
  "use strict";
  function e(t, r, i) {
    if (n(t, r)) return void (t[r] = i);if (t._isVue) return void e(t._data, r, i);var a = t.__ob__;if (!a) return void (t[r] = i);if (a.convert(r, i), a.dep.notify(), a.vms) for (var o = a.vms.length; o--;) {
      var s = a.vms[o];s._proxy(r), s._digest();
    }return i;
  }function t(e, t) {
    if (n(e, t)) {
      delete e[t];var r = e.__ob__;if (!r) return void (e._isVue && (delete e._data[t], e._digest()));if (r.dep.notify(), r.vms) for (var i = r.vms.length; i--;) {
        var a = r.vms[i];a._unproxy(t), a._digest();
      }
    }
  }function n(e, t) {
    return Mn.call(e, t);
  }function r(e) {
    return Vn.test(e);
  }function i(e) {
    var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
  }function a(e) {
    return null == e ? "" : e.toString();
  }function o(e) {
    if ("string" != typeof e) return e;var t = Number(e);return isNaN(t) ? e : t;
  }function s(e) {
    return "true" === e || "false" !== e && e;
  }function l(e) {
    var t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);return t !== n || 34 !== t && 39 !== t ? e : e.slice(1, -1);
  }function u(e) {
    return e.replace(Hn, c);
  }function c(e, t) {
    return t ? t.toUpperCase() : "";
  }function p(e) {
    return e.replace(Wn, "$1-$2").replace(Wn, "$1-$2").toLowerCase();
  }function h(e) {
    return e.replace(zn, c);
  }function f(e, t) {
    return function (n) {
      var r = arguments.length;return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
    };
  }function d(e, t) {
    t = t || 0;for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];return r;
  }function v(e, t) {
    for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];return e;
  }function m(e) {
    return null !== e && "object" == typeof e;
  }function g(e) {
    return qn.call(e) === Gn;
  }function y(e, t, n, r) {
    Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
  }function b(e, t) {
    var n,
        r,
        i,
        a,
        o,
        s = function s() {
      var l = Date.now() - a;l < t && l >= 0 ? n = setTimeout(s, t - l) : (n = null, o = e.apply(i, r), n || (i = r = null));
    };return function () {
      return i = this, r = arguments, a = Date.now(), n || (n = setTimeout(s, t)), o;
    };
  }function _(e, t) {
    for (var n = e.length; n--;) if (e[n] === t) return n;return -1;
  }function x(e) {
    var t = function t() {
      if (!t.cancelled) return e.apply(this, arguments);
    };return t.cancel = function () {
      t.cancelled = !0;
    }, t;
  }function w(e, t) {
    return e == t || !(!m(e) || !m(t)) && JSON.stringify(e) === JSON.stringify(t);
  }function k(e) {
    return (/native code/.test(e.toString())
    );
  }function S(e) {
    this.size = 0, this.limit = e, this.head = this.tail = void 0, this._keymap = Object.create(null);
  }function C() {
    return hr.charCodeAt(vr + 1);
  }function E() {
    return hr.charCodeAt(++vr);
  }function $() {
    return vr >= dr;
  }function O() {
    for (; C() === Or;) E();
  }function A(e) {
    return e === Sr || e === Cr;
  }function N(e) {
    return Ar[e];
  }function L(e, t) {
    return Nr[e] === t;
  }function P() {
    for (var e, t = E(); !$();) if (e = E(), e === $r) E();else if (e === t) break;
  }function I(e) {
    for (var t = 0, n = e; !$();) if (e = C(), A(e)) P();else if (n === e && t++, L(n, e) && t--, E(), 0 === t) break;
  }function j() {
    for (var e = vr; !$();) if (mr = C(), A(mr)) P();else if (N(mr)) I(mr);else if (mr === Er) {
      if (E(), mr = C(), mr !== Er) {
        gr !== _r && gr !== kr || (gr = xr);break;
      }E();
    } else {
      if (mr === Or && (gr === wr || gr === kr)) {
        O();break;
      }gr === xr && (gr = wr), E();
    }return hr.slice(e + 1, vr) || null;
  }function T() {
    for (var e = []; !$();) e.push(F());return e;
  }function F() {
    var e,
        t = {};return gr = xr, t.name = j().trim(), gr = kr, e = D(), e.length && (t.args = e), t;
  }function D() {
    for (var e = []; !$() && gr !== xr;) {
      var t = j();if (!t) break;e.push(R(t));
    }return e;
  }function R(e) {
    if (br.test(e)) return { value: o(e), dynamic: !1 };var t = l(e),
        n = t === e;return { value: n ? e : t, dynamic: n };
  }function B(e) {
    var t = yr.get(e);if (t) return t;hr = e, fr = {}, dr = hr.length, vr = -1, mr = "", gr = _r;var n;return hr.indexOf("|") < 0 ? fr.expression = hr.trim() : (fr.expression = j().trim(), n = T(), n.length && (fr.filters = n)), yr.put(e, fr), fr;
  }function U(e) {
    return e.replace(Pr, "\\$&");
  }function M() {
    var e = U(Ur.delimiters[0]),
        t = U(Ur.delimiters[1]),
        n = U(Ur.unsafeDelimiters[0]),
        r = U(Ur.unsafeDelimiters[1]);jr = new RegExp(n + "((?:.|\\n)+?)" + r + "|" + e + "((?:.|\\n)+?)" + t, "g"), Tr = new RegExp("^" + n + "((?:.|\\n)+?)" + r + "$"), Ir = new S(1e3);
  }function V(e) {
    Ir || M();var t = Ir.get(e);if (t) return t;if (!jr.test(e)) return null;for (var n, r, i, a, o, s, l = [], u = jr.lastIndex = 0; n = jr.exec(e);) r = n.index, r > u && l.push({ value: e.slice(u, r) }), i = Tr.test(n[0]), a = i ? n[1] : n[2], o = a.charCodeAt(0), s = 42 === o, a = s ? a.slice(1) : a, l.push({ tag: !0, value: a.trim(), html: i, oneTime: s }), u = r + n[0].length;return u < e.length && l.push({ value: e.slice(u) }), Ir.put(e, l), l;
  }function H(e, t) {
    return e.length > 1 ? e.map(function (e) {
      return W(e, t);
    }).join("+") : W(e[0], t, !0);
  }function W(e, t, n) {
    return e.tag ? e.oneTime && t ? '"' + t.$eval(e.value) + '"' : z(e.value, n) : '"' + e.value + '"';
  }function z(e, t) {
    if (Fr.test(e)) {
      var n = B(e);return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(n.filters) + ",false)" : "(" + e + ")";
    }return t ? e : "(" + e + ")";
  }function q(e, t, n, r) {
    K(e, 1, function () {
      t.appendChild(e);
    }, n, r);
  }function G(e, t, n, r) {
    K(e, 1, function () {
      te(e, t);
    }, n, r);
  }function J(e, t, n) {
    K(e, -1, function () {
      re(e);
    }, t, n);
  }function K(e, t, n, r, i) {
    var a = e.__v_trans;if (!a || !a.hooks && !ir || !r._isCompiled || r.$parent && !r.$parent._isCompiled) return n(), void (i && i());var o = t > 0 ? "enter" : "leave";a[o](n, i);
  }function Q(e) {
    if ("string" == typeof e) {
      e = document.querySelector(e);
    }return e;
  }function X(e) {
    if (!e) return !1;var t = e.ownerDocument.documentElement,
        n = e.parentNode;return t === e || t === n || !(!n || 1 !== n.nodeType || !t.contains(n));
  }function Z(e, t) {
    var n = e.getAttribute(t);return null !== n && e.removeAttribute(t), n;
  }function Y(e, t) {
    var n = Z(e, ":" + t);return null === n && (n = Z(e, "v-bind:" + t)), n;
  }function ee(e, t) {
    return e.hasAttribute(t) || e.hasAttribute(":" + t) || e.hasAttribute("v-bind:" + t);
  }function te(e, t) {
    t.parentNode.insertBefore(e, t);
  }function ne(e, t) {
    t.nextSibling ? te(e, t.nextSibling) : t.parentNode.appendChild(e);
  }function re(e) {
    e.parentNode.removeChild(e);
  }function ie(e, t) {
    t.firstChild ? te(e, t.firstChild) : t.appendChild(e);
  }function ae(e, t) {
    var n = e.parentNode;n && n.replaceChild(t, e);
  }function oe(e, t, n, r) {
    e.addEventListener(t, n, r);
  }function se(e, t, n) {
    e.removeEventListener(t, n);
  }function le(e) {
    var t = e.className;return "object" == typeof t && (t = t.baseVal || ""), t;
  }function ue(e, t) {
    er && !/svg$/.test(e.namespaceURI) ? e.className = t : e.setAttribute("class", t);
  }function ce(e, t) {
    if (e.classList) e.classList.add(t);else {
      var n = " " + le(e) + " ";n.indexOf(" " + t + " ") < 0 && ue(e, (n + t).trim());
    }
  }function pe(e, t) {
    if (e.classList) e.classList.remove(t);else {
      for (var n = " " + le(e) + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");ue(e, n.trim());
    }e.className || e.removeAttribute("class");
  }function he(e, t) {
    var n, r;if (ve(e) && _e(e.content) && (e = e.content), e.hasChildNodes()) for (fe(e), r = t ? document.createDocumentFragment() : document.createElement("div"); n = e.firstChild;) r.appendChild(n);return r;
  }function fe(e) {
    for (var t; t = e.firstChild, de(t);) e.removeChild(t);for (; t = e.lastChild, de(t);) e.removeChild(t);
  }function de(e) {
    return e && (3 === e.nodeType && !e.data.trim() || 8 === e.nodeType);
  }function ve(e) {
    return e.tagName && "template" === e.tagName.toLowerCase();
  }function me(e, t) {
    var n = Ur.debug ? document.createComment(e) : document.createTextNode(t ? " " : "");return n.__v_anchor = !0, n;
  }function ge(e) {
    if (e.hasAttributes()) for (var t = e.attributes, n = 0, r = t.length; n < r; n++) {
      var i = t[n].name;if (Hr.test(i)) return u(i.replace(Hr, ""));
    }
  }function ye(e, t, n) {
    for (var r; e !== t;) r = e.nextSibling, n(e), e = r;n(t);
  }function be(e, t, n, r, i) {
    function a() {
      if (s++, o && s >= l.length) {
        for (var e = 0; e < l.length; e++) r.appendChild(l[e]);i && i();
      }
    }var o = !1,
        s = 0,
        l = [];ye(e, t, function (e) {
      e === t && (o = !0), l.push(e), J(e, n, a);
    });
  }function _e(e) {
    return e && 11 === e.nodeType;
  }function xe(e) {
    if (e.outerHTML) return e.outerHTML;var t = document.createElement("div");return t.appendChild(e.cloneNode(!0)), t.innerHTML;
  }function we(e, t) {
    var n = e.tagName.toLowerCase(),
        r = e.hasAttributes();if (Wr.test(n) || zr.test(n)) {
      if (r) return ke(e, t);
    } else {
      if (Ne(t, "components", n)) return { id: n };var i = r && ke(e, t);if (i) return i;
    }
  }function ke(e, t) {
    var n = e.getAttribute("is");if (null != n) {
      if (Ne(t, "components", n)) return e.removeAttribute("is"), { id: n };
    } else if (n = Y(e, "is"), null != n) return { id: n, dynamic: !0 };
  }function Se(t, r) {
    var i, a, o;for (i in r) a = t[i], o = r[i], n(t, i) ? m(a) && m(o) && Se(a, o) : e(t, i, o);return t;
  }function Ce(e, t) {
    var n = Object.create(e || null);return t ? v(n, Oe(t)) : n;
  }function Ee(e) {
    if (e.components) for (var t, n = e.components = Oe(e.components), r = Object.keys(n), i = 0, a = r.length; i < a; i++) {
      var o = r[i];Wr.test(o) || zr.test(o) || (t = n[o], g(t) && (n[o] = Tn.extend(t)));
    }
  }function $e(e) {
    var t,
        n,
        r = e.props;if (Jn(r)) for (e.props = {}, t = r.length; t--;) n = r[t], "string" == typeof n ? e.props[n] = null : n.name && (e.props[n.name] = n);else if (g(r)) {
      var i = Object.keys(r);for (t = i.length; t--;) n = r[i[t]], "function" == typeof n && (r[i[t]] = { type: n });
    }
  }function Oe(e) {
    if (Jn(e)) {
      for (var t, n = {}, r = e.length; r--;) {
        t = e[r];var i = "function" == typeof t ? t.options && t.options.name || t.id : t.name || t.id;i && (n[i] = t);
      }return n;
    }return e;
  }function Ae(e, t, r) {
    function i(n) {
      var i = qr[n] || Gr;o[n] = i(e[n], t[n], r, n);
    }Ee(t), $e(t);var a,
        o = {};if (t.extends && (e = "function" == typeof t.extends ? Ae(e, t.extends.options, r) : Ae(e, t.extends, r)), t.mixins) for (var s = 0, l = t.mixins.length; s < l; s++) {
      var u = t.mixins[s],
          c = u.prototype instanceof Tn ? u.options : u;e = Ae(e, c, r);
    }for (a in e) i(a);for (a in t) n(e, a) || i(a);return o;
  }function Ne(e, t, n, r) {
    if ("string" == typeof n) {
      var i,
          a = e[t],
          o = a[n] || a[i = u(n)] || a[i.charAt(0).toUpperCase() + i.slice(1)];return o;
    }
  }function Le() {
    this.id = Jr++, this.subs = [];
  }function Pe(e) {
    Zr = !1, e(), Zr = !0;
  }function Ie(e) {
    if (this.value = e, this.dep = new Le(), y(e, "__ob__", this), Jn(e)) {
      var t = Kn ? je : Te;t(e, Qr, Xr), this.observeArray(e);
    } else this.walk(e);
  }function je(e, t) {
    e.__proto__ = t;
  }function Te(e, t, n) {
    for (var r = 0, i = n.length; r < i; r++) {
      var a = n[r];y(e, a, t[a]);
    }
  }function Fe(e, t) {
    if (e && "object" == typeof e) {
      var r;return n(e, "__ob__") && e.__ob__ instanceof Ie ? r = e.__ob__ : Zr && (Jn(e) || g(e)) && Object.isExtensible(e) && !e._isVue && (r = new Ie(e)), r && t && r.addVm(t), r;
    }
  }function De(e, t, n) {
    var r = new Le(),
        i = Object.getOwnPropertyDescriptor(e, t);if (!i || i.configurable !== !1) {
      var a = i && i.get,
          o = i && i.set,
          s = Fe(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function () {
          var t = a ? a.call(e) : n;if (Le.target && (r.depend(), s && s.dep.depend(), Jn(t))) for (var i, o = 0, l = t.length; o < l; o++) i = t[o], i && i.__ob__ && i.__ob__.dep.depend();return t;
        }, set: function (t) {
          var i = a ? a.call(e) : n;t !== i && (o ? o.call(e, t) : n = t, s = Fe(t), r.notify());
        } });
    }
  }function Re(e) {
    e.prototype._init = function (e) {
      e = e || {}, this.$el = null, this.$parent = e.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = ei++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = e._context || this.$parent, this._scope = e._scope, this._frag = e._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), e = this.$options = Ae(this.constructor.options, e, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), e.el && this.$mount(e.el);
    };
  }function Be(e) {
    if (void 0 === e) return "eof";var t = e.charCodeAt(0);switch (t) {case 91:case 93:case 46:case 34:case 39:case 48:
        return e;case 95:case 36:
        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
        return "ws";}return t >= 97 && t <= 122 || t >= 65 && t <= 90 ? "ident" : t >= 49 && t <= 57 ? "number" : "else";
  }function Ue(e) {
    var t = e.trim();return ("0" !== e.charAt(0) || !isNaN(e)) && (r(t) ? l(t) : "*" + t);
  }function Me(e) {
    function t() {
      var t = e[c + 1];if (p === yi && "'" === t || p === bi && '"' === t) return c++, r = "\\" + t, f[ui](), !0;
    }var n,
        r,
        i,
        a,
        o,
        s,
        l,
        u = [],
        c = -1,
        p = fi,
        h = 0,
        f = [];for (f[ci] = function () {
      void 0 !== i && (u.push(i), i = void 0);
    }, f[ui] = function () {
      void 0 === i ? i = r : i += r;
    }, f[pi] = function () {
      f[ui](), h++;
    }, f[hi] = function () {
      if (h > 0) h--, p = gi, f[ui]();else {
        if (h = 0, i = Ue(i), i === !1) return !1;f[ci]();
      }
    }; null != p;) if (c++, n = e[c], "\\" !== n || !t()) {
      if (a = Be(n), l = wi[p], o = l[a] || l.else || xi, o === xi) return;if (p = o[0], s = f[o[1]], s && (r = o[2], r = void 0 === r ? n : r, s() === !1)) return;if (p === _i) return u.raw = e, u;
    }
  }function Ve(e) {
    var t = li.get(e);return t || (t = Me(e), t && li.put(e, t)), t;
  }function He(e, t) {
    return Ze(t).get(e);
  }function We(t, n, r) {
    var i = t;if ("string" == typeof n && (n = Me(n)), !n || !m(t)) return !1;for (var a, o, s = 0, l = n.length; s < l; s++) a = t, o = n[s], "*" === o.charAt(0) && (o = Ze(o.slice(1)).get.call(i, i)), s < l - 1 ? (t = t[o], m(t) || (t = {}, e(a, o, t))) : Jn(t) ? t.$set(o, r) : o in t ? t[o] = r : e(t, o, r);return !0;
  }function ze() {}function qe(e, t) {
    var n = Fi.length;return Fi[n] = t ? e.replace(Ni, "\\n") : e, '"' + n + '"';
  }function Ge(e) {
    var t = e.charAt(0),
        n = e.slice(1);return Ei.test(n) ? e : (n = n.indexOf('"') > -1 ? n.replace(Pi, Je) : n, t + "scope." + n);
  }function Je(e, t) {
    return Fi[t];
  }function Ke(e) {
    Oi.test(e), Fi.length = 0;var t = e.replace(Li, qe).replace(Ai, "");return t = (" " + t).replace(ji, Ge).replace(Pi, Je), Qe(t);
  }function Qe(e) {
    try {
      var t = oi.Function("scope", "Math", "return " + e);return function (e) {
        return t.call(this, e, Math);
      };
    } catch (e) {
      return ze;
    }
  }function Xe(e) {
    var t = Ve(e);if (t) return function (e, n) {
      We(e, t, n);
    };
  }function Ze(e, t) {
    e = e.trim();var n = Si.get(e);if (n) return t && !n.set && (n.set = Xe(n.exp)), n;var r = { exp: e };return r.get = Ye(e) && e.indexOf("[") < 0 ? Qe("scope." + e) : Ke(e), t && (r.set = Xe(e)), Si.put(e, r), r;
  }function Ye(e) {
    return Ii.test(e) && !Ti.test(e) && "Math." !== e.slice(0, 5);
  }function et() {
    Ri.length = 0, Bi.length = 0, Ui = {}, Mi = {}, Vi = !1;
  }function tt() {
    for (var e = !0; e;) e = !1, nt(Ri), nt(Bi), Ri.length ? e = !0 : (Xn && Ur.devtools && Xn.emit("flush"), et());
  }function nt(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t],
          r = n.id;Ui[r] = null, n.run();
    }e.length = 0;
  }function rt(e) {
    var t = e.id;if (null == Ui[t]) {
      var n = e.user ? Bi : Ri;Ui[t] = n.length, n.push(e), Vi || (Vi = !0, ur(tt));
    }
  }function it(e, t, n, r) {
    r && v(this, r);var i = "function" == typeof t;if (this.vm = e, e._watchers.push(this), this.expression = t, this.cb = n, this.id = ++Hi, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new cr(), this.newDepIds = new cr(), this.prevError = null, i) this.getter = t, this.setter = void 0;else {
      var a = Ze(t, this.twoWay);this.getter = a.get, this.setter = a.set;
    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
  }function at(e, t) {
    var n = void 0,
        r = void 0;t || (t = Wi, t.clear());var i = Jn(e),
        a = m(e);if ((i || a) && Object.isExtensible(e)) {
      if (e.__ob__) {
        var o = e.__ob__.dep.id;if (t.has(o)) return;t.add(o);
      }if (i) for (n = e.length; n--;) at(e[n], t);else if (a) for (r = Object.keys(e), n = r.length; n--;) at(e[r[n]], t);
    }
  }function ot(e) {
    return ve(e) && _e(e.content);
  }function st(e, t) {
    var n = t ? e : e.trim(),
        r = qi.get(n);if (r) return r;var i = document.createDocumentFragment(),
        a = e.match(Ki),
        o = Qi.test(e),
        s = Xi.test(e);if (a || o || s) {
      var l = a && a[1],
          u = Ji[l] || Ji.efault,
          c = u[0],
          p = u[1],
          h = u[2],
          f = document.createElement("div");for (f.innerHTML = p + e + h; c--;) f = f.lastChild;for (var d; d = f.firstChild;) i.appendChild(d);
    } else i.appendChild(document.createTextNode(e));return t || fe(i), qi.put(n, i), i;
  }function lt(e) {
    if (ot(e)) return st(e.innerHTML);if ("SCRIPT" === e.tagName) return st(e.textContent);for (var t, n = ut(e), r = document.createDocumentFragment(); t = n.firstChild;) r.appendChild(t);return fe(r), r;
  }function ut(e) {
    if (!e.querySelectorAll) return e.cloneNode();var t,
        n,
        r,
        i = e.cloneNode(!0);if (Zi) {
      var a = i;if (ot(e) && (e = e.content, a = i.content), n = e.querySelectorAll("template"), n.length) for (r = a.querySelectorAll("template"), t = r.length; t--;) r[t].parentNode.replaceChild(ut(n[t]), r[t]);
    }if (Yi) if ("TEXTAREA" === e.tagName) i.value = e.value;else if (n = e.querySelectorAll("textarea"), n.length) for (r = i.querySelectorAll("textarea"), t = r.length; t--;) r[t].value = n[t].value;return i;
  }function ct(e, t, n) {
    var r, i;return _e(e) ? (fe(e), t ? ut(e) : e) : ("string" == typeof e ? n || "#" !== e.charAt(0) ? i = st(e, n) : (i = Gi.get(e), i || (r = document.getElementById(e.slice(1)), r && (i = lt(r), Gi.put(e, i)))) : e.nodeType && (i = lt(e)), i && t ? ut(i) : i);
  }function pt(e, t, n, r, i, a) {
    this.children = [], this.childFrags = [], this.vm = t, this.scope = i, this.inserted = !1, this.parentFrag = a, a && a.childFrags.push(this), this.unlink = e(t, n, r, i, this);var o = this.single = 1 === n.childNodes.length && !n.childNodes[0].__v_anchor;o ? (this.node = n.childNodes[0], this.before = ht, this.remove = ft) : (this.node = me("fragment-start"), this.end = me("fragment-end"), this.frag = n, ie(this.node, n), n.appendChild(this.end), this.before = dt, this.remove = vt), this.node.__v_frag = this;
  }function ht(e, t) {
    this.inserted = !0;var n = t !== !1 ? G : te;n(this.node, e, this.vm), X(this.node) && this.callHook(mt);
  }function ft() {
    this.inserted = !1;var e = X(this.node),
        t = this;this.beforeRemove(), J(this.node, this.vm, function () {
      e && t.callHook(gt), t.destroy();
    });
  }function dt(e, t) {
    this.inserted = !0;var n = this.vm,
        r = t !== !1 ? G : te;ye(this.node, this.end, function (t) {
      r(t, e, n);
    }), X(this.node) && this.callHook(mt);
  }function vt() {
    this.inserted = !1;var e = this,
        t = X(this.node);this.beforeRemove(), be(this.node, this.end, this.vm, this.frag, function () {
      t && e.callHook(gt), e.destroy();
    });
  }function mt(e) {
    !e._isAttached && X(e.$el) && e._callHook("attached");
  }function gt(e) {
    e._isAttached && !X(e.$el) && e._callHook("detached");
  }function yt(e, t) {
    this.vm = e;var n,
        r = "string" == typeof t;r || ve(t) && !t.hasAttribute("v-if") ? n = ct(t, !0) : (n = document.createDocumentFragment(), n.appendChild(t)), this.template = n;var i,
        a = e.constructor.cid;if (a > 0) {
      var o = a + (r ? t : xe(t));i = na.get(o), i || (i = Gt(n, e.$options, !0), na.put(o, i));
    } else i = Gt(n, e.$options, !0);this.linker = i;
  }function bt(e, t, n) {
    var r = e.node.previousSibling;if (r) {
      for (e = r.__v_frag; !(e && e.forId === n && e.inserted || r === t);) {
        if (r = r.previousSibling, !r) return;e = r.__v_frag;
      }return e;
    }
  }function _t(e) {
    for (var t = -1, n = new Array(Math.floor(e)); ++t < e;) n[t] = t;return n;
  }function xt(e, t, n, r) {
    return r ? "$index" === r ? e : r.charAt(0).match(/\w/) ? He(n, r) : n[r] : t || n;
  }function wt(e) {
    var t = e.node;if (e.end) for (; !t.__vue__ && t !== e.end && t.nextSibling;) t = t.nextSibling;return t.__vue__;
  }function kt(e, t, n) {
    for (var r, i, a, o = t ? [] : null, s = 0, l = e.options.length; s < l; s++) if (r = e.options[s], a = n ? r.hasAttribute("selected") : r.selected) {
      if (i = r.hasOwnProperty("_value") ? r._value : r.value, !t) return i;o.push(i);
    }return o;
  }function St(e, t) {
    for (var n = e.length; n--;) if (w(e[n], t)) return n;return -1;
  }function Ct(e, t) {
    var n = t.map(function (e) {
      var t = e.charCodeAt(0);return t > 47 && t < 58 ? parseInt(e, 10) : 1 === e.length && (t = e.toUpperCase().charCodeAt(0), t > 64 && t < 91) ? t : ka[e];
    });return n = [].concat.apply([], n), function (t) {
      if (n.indexOf(t.keyCode) > -1) return e.call(this, t);
    };
  }function Et(e) {
    return function (t) {
      return t.stopPropagation(), e.call(this, t);
    };
  }function $t(e) {
    return function (t) {
      return t.preventDefault(), e.call(this, t);
    };
  }function Ot(e) {
    return function (t) {
      if (t.target === t.currentTarget) return e.call(this, t);
    };
  }function At(e) {
    if (Oa[e]) return Oa[e];var t = Nt(e);return Oa[e] = Oa[t] = t, t;
  }function Nt(e) {
    e = p(e);var t = u(e),
        n = t.charAt(0).toUpperCase() + t.slice(1);Aa || (Aa = document.createElement("div"));var r,
        i = Ca.length;if ("filter" !== t && t in Aa.style) return { kebab: e, camel: t };for (; i--;) if (r = Ea[i] + n, r in Aa.style) return { kebab: Ca[i] + e, camel: r };
  }function Lt(e) {
    var t = [];if (Jn(e)) for (var n = 0, r = e.length; n < r; n++) {
      var i = e[n];if (i) if ("string" == typeof i) t.push(i);else for (var a in i) i[a] && t.push(a);
    } else if (m(e)) for (var o in e) e[o] && t.push(o);return t;
  }function Pt(e, t, n) {
    if (t = t.trim(), t.indexOf(" ") === -1) return void n(e, t);for (var r = t.split(/\s+/), i = 0, a = r.length; i < a; i++) n(e, r[i]);
  }function It(e, t, n) {
    function r() {
      ++a >= i ? n() : e[a].call(t, r);
    }var i = e.length,
        a = 0;e[0].call(t, r);
  }function jt(e, t, n) {
    for (var i, a, o, s, l, c, h, f = [], d = n.$options.propsData, v = Object.keys(t), m = v.length; m--;) a = v[m], i = t[a] || za, l = u(a), qa.test(l) && (h = { name: a, path: l, options: i, mode: Wa.ONE_WAY, raw: null }, o = p(a), null === (s = Y(e, o)) && (null !== (s = Y(e, o + ".sync")) ? h.mode = Wa.TWO_WAY : null !== (s = Y(e, o + ".once")) && (h.mode = Wa.ONE_TIME)), null !== s ? (h.raw = s, c = B(s), s = c.expression, h.filters = c.filters, r(s) && !c.filters ? h.optimizedLiteral = !0 : h.dynamic = !0, h.parentPath = s) : null !== (s = Z(e, o)) ? h.raw = s : d && null !== (s = d[a] || d[l]) && (h.raw = s), f.push(h));return Tt(f);
  }function Tt(e) {
    return function (t, r) {
      t._props = {};for (var i, a, u, c, h, f = t.$options.propsData, d = e.length; d--;) if (i = e[d], h = i.raw, a = i.path, u = i.options, t._props[a] = i, f && n(f, a) && Dt(t, i, f[a]), null === h) Dt(t, i, void 0);else if (i.dynamic) i.mode === Wa.ONE_TIME ? (c = (r || t._context || t).$get(i.parentPath), Dt(t, i, c)) : t._context ? t._bindDir({ name: "prop", def: Ja, prop: i }, null, null, r) : Dt(t, i, t.$get(i.parentPath));else if (i.optimizedLiteral) {
        var v = l(h);c = v === h ? s(o(h)) : v, Dt(t, i, c);
      } else c = u.type === Boolean && ("" === h || h === p(i.name)) || h, Dt(t, i, c);
    };
  }function Ft(e, t, n, r) {
    var i = t.dynamic && Ye(t.parentPath),
        a = n;void 0 === a && (a = Bt(e, t)), a = Mt(t, a, e);var o = a !== n;Ut(t, a, e) || (a = void 0), i && !o ? Pe(function () {
      r(a);
    }) : r(a);
  }function Dt(e, t, n) {
    Ft(e, t, n, function (n) {
      De(e, t.path, n);
    });
  }function Rt(e, t, n) {
    Ft(e, t, n, function (n) {
      e[t.path] = n;
    });
  }function Bt(e, t) {
    var r = t.options;if (!n(r, "default")) return r.type !== Boolean && void 0;var i = r.default;return m(i), "function" == typeof i && r.type !== Function ? i.call(e) : i;
  }function Ut(e, t, n) {
    if (!e.options.required && (null === e.raw || null == t)) return !0;var r = e.options,
        i = r.type,
        a = !i,
        o = [];if (i) {
      Jn(i) || (i = [i]);for (var s = 0; s < i.length && !a; s++) {
        var l = Vt(t, i[s]);o.push(l.expectedType), a = l.valid;
      }
    }if (!a) return !1;var u = r.validator;return !(u && !u(t));
  }function Mt(e, t, n) {
    var r = e.options.coerce;return r && "function" == typeof r ? r(t) : t;
  }function Vt(e, t) {
    var n, r;return t === String ? (r = "string", n = typeof e === r) : t === Number ? (r = "number", n = typeof e === r) : t === Boolean ? (r = "boolean", n = typeof e === r) : t === Function ? (r = "function", n = typeof e === r) : t === Object ? (r = "object", n = g(e)) : t === Array ? (r = "array", n = Jn(e)) : n = e instanceof t, { valid: n, expectedType: r };
  }function Ht(e) {
    Ka.push(e), Qa || (Qa = !0, ur(Wt));
  }function Wt() {
    for (var e = document.documentElement.offsetHeight, t = 0; t < Ka.length; t++) Ka[t]();return Ka = [], Qa = !1, e;
  }function zt(e, t, n, r) {
    this.id = t, this.el = e, this.enterClass = n && n.enterClass || t + "-enter", this.leaveClass = n && n.leaveClass || t + "-leave", this.hooks = n, this.vm = r, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = n && n.type;var i = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (e) {
      i[e] = f(i[e], i);
    });
  }function qt(e) {
    if (/svg$/.test(e.namespaceURI)) {
      var t = e.getBoundingClientRect();return !(t.width || t.height);
    }return !(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }function Gt(e, t, n) {
    var r = n || !t._asComponent ? en(e, t) : null,
        i = r && r.terminal || yn(e) || !e.hasChildNodes() ? null : sn(e.childNodes, t);return function (e, t, n, a, o) {
      var s = d(t.childNodes),
          l = Jt(function () {
        r && r(e, t, n, a, o), i && i(e, s, n, a, o);
      }, e);return Qt(e, l);
    };
  }function Jt(e, t) {
    t._directives = [];var n = t._directives.length;e();var r = t._directives.slice(n);Kt(r);for (var i = 0, a = r.length; i < a; i++) r[i]._bind();return r;
  }function Kt(e) {
    if (0 !== e.length) {
      var t,
          n,
          r,
          i,
          a = {},
          o = 0,
          s = [];for (t = 0, n = e.length; t < n; t++) {
        var l = e[t],
            u = l.descriptor.def.priority || po,
            c = a[u];c || (c = a[u] = [], s.push(u)), c.push(l);
      }for (s.sort(function (e, t) {
        return e > t ? -1 : e === t ? 0 : 1;
      }), t = 0, n = s.length; t < n; t++) {
        var p = a[s[t]];for (r = 0, i = p.length; r < i; r++) e[o++] = p[r];
      }
    }
  }function Qt(e, t, n, r) {
    function i(i) {
      Xt(e, t, i), n && r && Xt(n, r);
    }return i.dirs = t, i;
  }function Xt(e, t, n) {
    for (var r = t.length; r--;) t[r]._teardown();
  }function Zt(e, t, n, r) {
    var i = jt(t, n, e),
        a = Jt(function () {
      i(e, r);
    }, e);return Qt(e, a);
  }function Yt(e, t, n) {
    var r,
        i,
        a = t._containerAttrs,
        o = t._replacerAttrs;return 11 !== e.nodeType && (t._asComponent ? (a && n && (r = dn(a, n)), o && (i = dn(o, t))) : i = dn(e.attributes, t)), t._containerAttrs = t._replacerAttrs = null, function (e, t, n) {
      var a,
          o = e._context;o && r && (a = Jt(function () {
        r(o, t, null, n);
      }, o));var s = Jt(function () {
        i && i(e, t);
      }, e);return Qt(e, s, o, a);
    };
  }function en(e, t) {
    var n = e.nodeType;return 1 !== n || yn(e) ? 3 === n && e.data.trim() ? nn(e, t) : null : tn(e, t);
  }function tn(e, t) {
    if ("TEXTAREA" === e.tagName) {
      if (null !== Z(e, "v-pre")) return hn;var n = V(e.value);n && (e.setAttribute(":value", H(n)), e.value = "");
    }var r,
        i = e.hasAttributes(),
        a = i && d(e.attributes);return i && (r = pn(e, a, t)), r || (r = un(e, t)), r || (r = cn(e, t)), !r && i && (r = dn(a, t)), r;
  }function nn(e, t) {
    if (e._skip) return rn;var n = V(e.wholeText);if (!n) return null;for (var r = e.nextSibling; r && 3 === r.nodeType;) r._skip = !0, r = r.nextSibling;for (var i, a, o = document.createDocumentFragment(), s = 0, l = n.length; s < l; s++) a = n[s], i = a.tag ? an(a, t) : document.createTextNode(a.value), o.appendChild(i);return on(n, o, t);
  }function rn(e, t) {
    re(t);
  }function an(e, t) {
    function n(t) {
      if (!e.descriptor) {
        var n = B(e.value);e.descriptor = { name: t, def: Ma[t], expression: n.expression, filters: n.filters };
      }
    }var r;return e.oneTime ? r = document.createTextNode(e.value) : e.html ? (r = document.createComment("v-html"), n("html")) : (r = document.createTextNode(" "), n("text")), r;
  }function on(e, t) {
    return function (n, r, i, o) {
      for (var s, l, u, c = t.cloneNode(!0), p = d(c.childNodes), h = 0, f = e.length; h < f; h++) s = e[h], l = s.value, s.tag && (u = p[h], s.oneTime ? (l = (o || n).$eval(l), s.html ? ae(u, ct(l, !0)) : u.data = a(l)) : n._bindDir(s.descriptor, u, i, o));ae(r, c);
    };
  }function sn(e, t) {
    for (var n, r, i, a = [], o = 0, s = e.length; o < s; o++) i = e[o], n = en(i, t), r = n && n.terminal || "SCRIPT" === i.tagName || !i.hasChildNodes() ? null : sn(i.childNodes, t), a.push(n, r);return a.length ? ln(a) : null;
  }function ln(e) {
    return function (t, n, r, i, a) {
      for (var o, s, l, u = 0, c = 0, p = e.length; u < p; c++) {
        o = n[c], s = e[u++], l = e[u++];var h = d(o.childNodes);s && s(t, o, r, i, a), l && l(t, h, r, i, a);
      }
    };
  }function un(e, t) {
    var n = e.tagName.toLowerCase();if (!Wr.test(n)) {
      var r = Ne(t, "elementDirectives", n);return r ? fn(e, n, "", t, r) : void 0;
    }
  }function cn(e, t) {
    var n = we(e, t);if (n) {
      var r = ge(e),
          i = { name: "component", ref: r, expression: n.id, def: ao.component, modifiers: { literal: !n.dynamic } },
          a = function (e, t, n, a, o) {
        r && De((a || e).$refs, r, null), e._bindDir(i, t, n, a, o);
      };return a.terminal = !0, a;
    }
  }function pn(e, t, n) {
    if (null !== Z(e, "v-pre")) return hn;if (e.hasAttribute("v-else")) {
      var r = e.previousElementSibling;if (r && r.hasAttribute("v-if")) return hn;
    }for (var i, a, o, s, l, u, c, p, h, f, d = 0, v = t.length; d < v; d++) i = t[d], a = i.name.replace(uo, ""), (l = a.match(lo)) && (h = Ne(n, "directives", l[1]), h && h.terminal && (!f || (h.priority || ho) > f.priority) && (f = h, c = i.name, s = vn(i.name), o = i.value, u = l[1], p = l[2]));return f ? fn(e, u, o, n, f, c, p, s) : void 0;
  }function hn() {}function fn(e, t, n, r, i, a, o, s) {
    var l = B(n),
        u = { name: t, arg: o, expression: l.expression, filters: l.filters, raw: n, attr: a, modifiers: s, def: i };"for" !== t && "router-view" !== t || (u.ref = ge(e));var c = function (e, t, n, r, i) {
      u.ref && De((r || e).$refs, u.ref, null), e._bindDir(u, t, n, r, i);
    };return c.terminal = !0, c;
  }function dn(e, t) {
    function n(e, t, n) {
      var r = n && gn(n),
          i = !r && B(a);v.push({ name: e, attr: o, raw: s, def: t, arg: u, modifiers: c, expression: i && i.expression, filters: i && i.filters, interp: n, hasOneTime: r });
    }for (var r, i, a, o, s, l, u, c, p, h, f, d = e.length, v = []; d--;) if (r = e[d], i = o = r.name, a = s = r.value, h = V(a), u = null, c = vn(i), i = i.replace(uo, ""), h) a = H(h), u = i, n("bind", Ma.bind, h);else if (co.test(i)) c.literal = !oo.test(i), n("transition", ao.transition);else if (so.test(i)) u = i.replace(so, ""), n("on", Ma.on);else if (oo.test(i)) l = i.replace(oo, ""), "style" === l || "class" === l ? n(l, ao[l]) : (u = l, n("bind", Ma.bind));else if (f = i.match(lo)) {
      if (l = f[1], u = f[2], "else" === l) continue;p = Ne(t, "directives", l, !0), p && n(l, p);
    }if (v.length) return mn(v);
  }function vn(e) {
    var t = Object.create(null),
        n = e.match(uo);if (n) for (var r = n.length; r--;) t[n[r].slice(1)] = !0;return t;
  }function mn(e) {
    return function (t, n, r, i, a) {
      for (var o = e.length; o--;) t._bindDir(e[o], n, r, i, a);
    };
  }function gn(e) {
    for (var t = e.length; t--;) if (e[t].oneTime) return !0;
  }function yn(e) {
    return "SCRIPT" === e.tagName && (!e.hasAttribute("type") || "text/javascript" === e.getAttribute("type"));
  }function bn(e, t) {
    return t && (t._containerAttrs = xn(e)), ve(e) && (e = ct(e)), t && (t._asComponent && !t.template && (t.template = "<slot></slot>"), t.template && (t._content = he(e), e = _n(e, t))), _e(e) && (ie(me("v-start", !0), e), e.appendChild(me("v-end", !0))), e;
  }function _n(e, t) {
    var n = t.template,
        r = ct(n, !0);if (r) {
      var i = r.firstChild;if (!i) return r;var a = i.tagName && i.tagName.toLowerCase();return t.replace ? (e === document.body, r.childNodes.length > 1 || 1 !== i.nodeType || "component" === a || Ne(t, "components", a) || ee(i, "is") || Ne(t, "elementDirectives", a) || i.hasAttribute("v-for") || i.hasAttribute("v-if") ? r : (t._replacerAttrs = xn(i), wn(e, i), i)) : (e.appendChild(r), e);
    }
  }function xn(e) {
    if (1 === e.nodeType && e.hasAttributes()) return d(e.attributes);
  }function wn(e, t) {
    for (var n, r, i = e.attributes, a = i.length; a--;) n = i[a].name, r = i[a].value, t.hasAttribute(n) || fo.test(n) ? "class" === n && !V(r) && (r = r.trim()) && r.split(/\s+/).forEach(function (e) {
      ce(t, e);
    }) : t.setAttribute(n, r);
  }function kn(e, t) {
    if (t) {
      for (var n, r, i = e._slotContents = Object.create(null), a = 0, o = t.children.length; a < o; a++) n = t.children[a], (r = n.getAttribute("slot")) && (i[r] || (i[r] = [])).push(n);for (r in i) i[r] = Sn(i[r], t);if (t.hasChildNodes()) {
        var s = t.childNodes;if (1 === s.length && 3 === s[0].nodeType && !s[0].data.trim()) return;i.default = Sn(t.childNodes, t);
      }
    }
  }function Sn(e, t) {
    var n = document.createDocumentFragment();e = d(e);for (var r = 0, i = e.length; r < i; r++) {
      var a = e[r];!ve(a) || a.hasAttribute("v-if") || a.hasAttribute("v-for") || (t.removeChild(a), a = ct(a, !0)), n.appendChild(a);
    }return n;
  }function Cn(e) {
    function t() {}function r(e, t) {
      var n = new it(t, e, null, { lazy: !0 });return function () {
        return n.dirty && n.evaluate(), Le.target && n.depend(), n.value;
      };
    }Object.defineProperty(e.prototype, "$data", { get: function () {
        return this._data;
      }, set: function (e) {
        e !== this._data && this._setData(e);
      } }), e.prototype._initState = function () {
      this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed();
    }, e.prototype._initProps = function () {
      var e = this.$options,
          t = e.el,
          n = e.props;t = e.el = Q(t), this._propsUnlinkFn = t && 1 === t.nodeType && n ? Zt(this, t, n, this._scope) : null;
    }, e.prototype._initData = function () {
      var e = this.$options.data,
          t = this._data = e ? e() : {};g(t) || (t = {});var r,
          i,
          a = this._props,
          o = Object.keys(t);for (r = o.length; r--;) i = o[r], a && n(a, i) || this._proxy(i);Fe(t, this);
    }, e.prototype._setData = function (e) {
      e = e || {};var t = this._data;this._data = e;var r, i, a;for (r = Object.keys(t), a = r.length; a--;) i = r[a], i in e || this._unproxy(i);for (r = Object.keys(e), a = r.length; a--;) i = r[a], n(this, i) || this._proxy(i);t.__ob__.removeVm(this), Fe(e, this), this._digest();
    }, e.prototype._proxy = function (e) {
      if (!i(e)) {
        var t = this;Object.defineProperty(t, e, { configurable: !0, enumerable: !0, get: function () {
            return t._data[e];
          }, set: function (n) {
            t._data[e] = n;
          } });
      }
    }, e.prototype._unproxy = function (e) {
      i(e) || delete this[e];
    }, e.prototype._digest = function () {
      for (var e = 0, t = this._watchers.length; e < t; e++) this._watchers[e].update(!0);
    }, e.prototype._initComputed = function () {
      var e = this.$options.computed;if (e) for (var n in e) {
        var i = e[n],
            a = { enumerable: !0, configurable: !0 };"function" == typeof i ? (a.get = r(i, this), a.set = t) : (a.get = i.get ? i.cache !== !1 ? r(i.get, this) : f(i.get, this) : t, a.set = i.set ? f(i.set, this) : t), Object.defineProperty(this, n, a);
      }
    }, e.prototype._initMethods = function () {
      var e = this.$options.methods;if (e) for (var t in e) this[t] = f(e[t], this);
    }, e.prototype._initMeta = function () {
      var e = this.$options._meta;if (e) for (var t in e) De(this, t, e[t]);
    };
  }function En(e) {
    function t(e, t) {
      for (var n, r, i, a = t.attributes, o = 0, s = a.length; o < s; o++) n = a[o].name, mo.test(n) && (n = n.replace(mo, ""), r = a[o].value, Ye(r) && (r += ".apply(this, $arguments)"), i = (e._scope || e._context).$eval(r, !0), i._fromParent = !0, e.$on(n.replace(mo), i));
    }function n(e, t, n) {
      if (n) {
        var i, a, o, s;for (a in n) if (i = n[a], Jn(i)) for (o = 0, s = i.length; o < s; o++) r(e, t, a, i[o]);else r(e, t, a, i);
      }
    }function r(e, t, n, i, a) {
      var o = typeof i;if ("function" === o) e[t](n, i, a);else if ("string" === o) {
        var s = e.$options.methods,
            l = s && s[i];l && e[t](n, l, a);
      } else i && "object" === o && r(e, t, n, i.handler, i);
    }function i() {
      this._isAttached || (this._isAttached = !0, this.$children.forEach(a));
    }function a(e) {
      !e._isAttached && X(e.$el) && e._callHook("attached");
    }function o() {
      this._isAttached && (this._isAttached = !1, this.$children.forEach(s));
    }function s(e) {
      e._isAttached && !X(e.$el) && e._callHook("detached");
    }e.prototype._initEvents = function () {
      var e = this.$options;e._asComponent && t(this, e.el), n(this, "$on", e.events), n(this, "$watch", e.watch);
    }, e.prototype._initDOMHooks = function () {
      this.$on("hook:attached", i), this.$on("hook:detached", o);
    }, e.prototype._callHook = function (e) {
      this.$emit("pre-hook:" + e);var t = this.$options[e];if (t) for (var n = 0, r = t.length; n < r; n++) t[n].call(this);this.$emit("hook:" + e);
    };
  }function $n() {}function On(e, t, n, r, i, a) {
    this.vm = t, this.el = n, this.descriptor = e, this.name = e.name, this.expression = e.expression, this.arg = e.arg, this.modifiers = e.modifiers, this.filters = e.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = r, this._scope = i, this._frag = a;
  }function An(e) {
    e.prototype._updateRef = function (e) {
      var t = this.$options._ref;if (t) {
        var n = (this._scope || this._context).$refs;e ? n[t] === this && (n[t] = null) : n[t] = this;
      }
    }, e.prototype._compile = function (e) {
      var t = this.$options,
          n = e;if (e = bn(e, t), this._initElement(e), 1 !== e.nodeType || null === Z(e, "v-pre")) {
        var r = this._context && this._context.$options,
            i = Yt(e, t, r);kn(this, t._content);var a,
            o = this.constructor;t._linkerCachable && (a = o.linker, a || (a = o.linker = Gt(e, t)));var s = i(this, e, this._scope),
            l = a ? a(this, e) : Gt(e, t)(this, e);
        this._unlinkFn = function () {
          s(), l(!0);
        }, t.replace && ae(n, e), this._isCompiled = !0, this._callHook("compiled");
      }
    }, e.prototype._initElement = function (e) {
      _e(e) ? (this._isFragment = !0, this.$el = this._fragmentStart = e.firstChild, this._fragmentEnd = e.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = e) : this.$el = e, this.$el.__vue__ = this, this._callHook("beforeCompile");
    }, e.prototype._bindDir = function (e, t, n, r, i) {
      this._directives.push(new On(e, this, t, n, r, i));
    }, e.prototype._destroy = function (e, t) {
      if (this._isBeingDestroyed) return void (t || this._cleanup());var n,
          r,
          i = this,
          a = function () {
        !n || r || t || i._cleanup();
      };e && this.$el && (r = !0, this.$remove(function () {
        r = !1, a();
      })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;var o,
          s = this.$parent;for (s && !s._isBeingDestroyed && (s.$children.$remove(this), this._updateRef(!0)), o = this.$children.length; o--;) this.$children[o].$destroy();for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), o = this._watchers.length; o--;) this._watchers[o].teardown();this.$el && (this.$el.__vue__ = null), n = !0, a();
    }, e.prototype._cleanup = function () {
      this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data && this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off());
    };
  }function Nn(e) {
    e.prototype._applyFilters = function (e, t, n, r) {
      var i, a, o, s, l, u, c, p, h;for (u = 0, c = n.length; u < c; u++) if (i = n[r ? c - u - 1 : u], a = Ne(this.$options, "filters", i.name, !0), a && (a = r ? a.write : a.read || a, "function" == typeof a)) {
        if (o = r ? [e, t] : [e], l = r ? 2 : 1, i.args) for (p = 0, h = i.args.length; p < h; p++) s = i.args[p], o[p + l] = s.dynamic ? this.$get(s.value) : s.value;e = a.apply(this, o);
      }return e;
    }, e.prototype._resolveComponent = function (t, n) {
      var r;if (r = "function" == typeof t ? t : Ne(this.$options, "components", t, !0)) if (r.options) n(r);else if (r.resolved) n(r.resolved);else if (r.requested) r.pendingCallbacks.push(n);else {
        r.requested = !0;var i = r.pendingCallbacks = [n];r.call(this, function (t) {
          g(t) && (t = e.extend(t)), r.resolved = t;for (var n = 0, a = i.length; n < a; n++) i[n](t);
        }, function (e) {});
      }
    };
  }function Ln(e) {
    function n(e) {
      return JSON.parse(JSON.stringify(e));
    }e.prototype.$get = function (e, t) {
      var n = Ze(e);if (n) {
        if (t) {
          var r = this;return function () {
            r.$arguments = d(arguments);var e = n.get.call(r, r);return r.$arguments = null, e;
          };
        }try {
          return n.get.call(this, this);
        } catch (e) {}
      }
    }, e.prototype.$set = function (e, t) {
      var n = Ze(e, !0);n && n.set && n.set.call(this, this, t);
    }, e.prototype.$delete = function (e) {
      t(this._data, e);
    }, e.prototype.$watch = function (e, t, n) {
      var r,
          i = this;"string" == typeof e && (r = B(e), e = r.expression);var a = new it(i, e, t, { deep: n && n.deep, sync: n && n.sync, filters: r && r.filters, user: !n || n.user !== !1 });return n && n.immediate && t.call(i, a.value), function () {
        a.teardown();
      };
    }, e.prototype.$eval = function (e, t) {
      if (go.test(e)) {
        var n = B(e),
            r = this.$get(n.expression, t);return n.filters ? this._applyFilters(r, null, n.filters) : r;
      }return this.$get(e, t);
    }, e.prototype.$interpolate = function (e) {
      var t = V(e),
          n = this;return t ? 1 === t.length ? n.$eval(t[0].value) + "" : t.map(function (e) {
        return e.tag ? n.$eval(e.value) : e.value;
      }).join("") : e;
    }, e.prototype.$log = function (e) {
      var t = e ? He(this._data, e) : this._data;if (t && (t = n(t)), !e) {
        var r;for (r in this.$options.computed) t[r] = n(this[r]);if (this._props) for (r in this._props) t[r] = n(this[r]);
      }console.log(t);
    };
  }function Pn(e) {
    function t(e, t, r, i, a, o) {
      t = n(t);var s = !X(t),
          l = i === !1 || s ? a : o,
          u = !s && !e._isAttached && !X(e.$el);return e._isFragment ? (ye(e._fragmentStart, e._fragmentEnd, function (n) {
        l(n, t, e);
      }), r && r()) : l(e.$el, t, e, r), u && e._callHook("attached"), e;
    }function n(e) {
      return "string" == typeof e ? document.querySelector(e) : e;
    }function r(e, t, n, r) {
      t.appendChild(e), r && r();
    }function i(e, t, n, r) {
      te(e, t), r && r();
    }function a(e, t, n) {
      re(e), n && n();
    }e.prototype.$nextTick = function (e) {
      ur(e, this);
    }, e.prototype.$appendTo = function (e, n, i) {
      return t(this, e, n, i, r, q);
    }, e.prototype.$prependTo = function (e, t, r) {
      return e = n(e), e.hasChildNodes() ? this.$before(e.firstChild, t, r) : this.$appendTo(e, t, r), this;
    }, e.prototype.$before = function (e, n, r) {
      return t(this, e, n, r, i, G);
    }, e.prototype.$after = function (e, t, r) {
      return e = n(e), e.nextSibling ? this.$before(e.nextSibling, t, r) : this.$appendTo(e.parentNode, t, r), this;
    }, e.prototype.$remove = function (e, t) {
      if (!this.$el.parentNode) return e && e();var n = this._isAttached && X(this.$el);n || (t = !1);var r = this,
          i = function () {
        n && r._callHook("detached"), e && e();
      };if (this._isFragment) be(this._fragmentStart, this._fragmentEnd, this, this._fragment, i);else {
        var o = t === !1 ? a : J;o(this.$el, this, i);
      }return this;
    };
  }function In(e) {
    function t(e, t, r) {
      var i = e.$parent;if (i && r && !n.test(t)) for (; i;) i._eventsCount[t] = (i._eventsCount[t] || 0) + r, i = i.$parent;
    }e.prototype.$on = function (e, n) {
      return (this._events[e] || (this._events[e] = [])).push(n), t(this, e, 1), this;
    }, e.prototype.$once = function (e, t) {
      function n() {
        r.$off(e, n), t.apply(this, arguments);
      }var r = this;return n.fn = t, this.$on(e, n), this;
    }, e.prototype.$off = function (e, n) {
      var r;if (!arguments.length) {
        if (this.$parent) for (e in this._events) r = this._events[e], r && t(this, e, -r.length);return this._events = {}, this;
      }if (r = this._events[e], !r) return this;if (1 === arguments.length) return t(this, e, -r.length), this._events[e] = null, this;for (var i, a = r.length; a--;) if (i = r[a], i === n || i.fn === n) {
        t(this, e, -1), r.splice(a, 1);break;
      }return this;
    }, e.prototype.$emit = function (e) {
      var t = "string" == typeof e;e = t ? e : e.name;var n = this._events[e],
          r = t || !n;if (n) {
        n = n.length > 1 ? d(n) : n;var i = t && n.some(function (e) {
          return e._fromParent;
        });i && (r = !1);for (var a = d(arguments, 1), o = 0, s = n.length; o < s; o++) {
          var l = n[o],
              u = l.apply(this, a);u !== !0 || i && !l._fromParent || (r = !0);
        }
      }return r;
    }, e.prototype.$broadcast = function (e) {
      var t = "string" == typeof e;if (e = t ? e : e.name, this._eventsCount[e]) {
        var n = this.$children,
            r = d(arguments);t && (r[0] = { name: e, source: this });for (var i = 0, a = n.length; i < a; i++) {
          var o = n[i],
              s = o.$emit.apply(o, r);s && o.$broadcast.apply(o, r);
        }return this;
      }
    }, e.prototype.$dispatch = function (e) {
      var t = this.$emit.apply(this, arguments);if (t) {
        var n = this.$parent,
            r = d(arguments);for (r[0] = { name: e, source: this }; n;) t = n.$emit.apply(n, r), n = t ? n.$parent : null;return this;
      }
    };var n = /^hook:/;
  }function jn(e) {
    function t() {
      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
    }e.prototype.$mount = function (e) {
      if (!this._isCompiled) return e = Q(e), e || (e = document.createElement("div")), this._compile(e), this._initDOMHooks(), X(this.$el) ? (this._callHook("attached"), t.call(this)) : this.$once("hook:attached", t), this;
    }, e.prototype.$destroy = function (e, t) {
      this._destroy(e, t);
    }, e.prototype.$compile = function (e, t, n, r) {
      return Gt(e, this.$options, !0)(this, e, t, n, r);
    };
  }function Tn(e) {
    this._init(e);
  }function Fn(e, t, n) {
    return n = n ? parseInt(n, 10) : 0, t = o(t), "number" == typeof t ? e.slice(n, n + t) : e;
  }function Dn(e, t, n) {
    if (e = xo(e), null == t) return e;if ("function" == typeof t) return e.filter(t);t = ("" + t).toLowerCase();for (var r, i, a, o, s = "in" === n ? 3 : 2, l = Array.prototype.concat.apply([], d(arguments, s)), u = [], c = 0, p = e.length; c < p; c++) if (r = e[c], a = r && r.$value || r, o = l.length) {
      for (; o--;) if (i = l[o], "$key" === i && Bn(r.$key, t) || Bn(He(a, i), t)) {
        u.push(r);break;
      }
    } else Bn(r, t) && u.push(r);return u;
  }function Rn(e) {
    function t(e, t, n) {
      var i = r[n];return i && ("$key" !== i && (m(e) && "$value" in e && (e = e.$value), m(t) && "$value" in t && (t = t.$value)), e = m(e) ? He(e, i) : e, t = m(t) ? He(t, i) : t), e === t ? 0 : e > t ? a : -a;
    }var n = null,
        r = void 0;e = xo(e);var i = d(arguments, 1),
        a = i[i.length - 1];"number" == typeof a ? (a = a < 0 ? -1 : 1, i = i.length > 1 ? i.slice(0, -1) : i) : a = 1;var o = i[0];return o ? ("function" == typeof o ? n = function (e, t) {
      return o(e, t) * a;
    } : (r = Array.prototype.concat.apply([], i), n = function (e, i, a) {
      return a = a || 0, a >= r.length - 1 ? t(e, i, a) : t(e, i, a) || n(e, i, a + 1);
    }), e.slice().sort(n)) : e;
  }function Bn(e, t) {
    var n;if (g(e)) {
      var r = Object.keys(e);for (n = r.length; n--;) if (Bn(e[r[n]], t)) return !0;
    } else if (Jn(e)) {
      for (n = e.length; n--;) if (Bn(e[n], t)) return !0;
    } else if (null != e) return e.toString().toLowerCase().indexOf(t) > -1;
  }function Un(n) {
    n.options = { directives: Ma, elementDirectives: _o, filters: ko, transitions: {}, components: {}, partials: {}, replace: !0 }, n.util = Yr, n.config = Ur, n.set = e, n.delete = t, n.nextTick = ur, n.compiler = vo, n.FragmentFactory = yt, n.internalDirectives = ao, n.parsers = { path: ki, text: Dr, template: ea, directive: Lr, expression: Di }, n.cid = 0;var r = 1;n.extend = function (e) {
      e = e || {};var t = this,
          i = 0 === t.cid;if (i && e._Ctor) return e._Ctor;var a = e.name || t.options.name,
          o = function (e) {
        n.call(this, e);
      };return o.prototype = Object.create(t.prototype), o.prototype.constructor = o, o.cid = r++, o.options = Ae(t.options, e), o.super = t, o.extend = t.extend, Ur._assetTypes.forEach(function (e) {
        o[e] = t[e];
      }), a && (o.options.components[a] = o), i && (e._Ctor = o), o;
    }, n.use = function (e) {
      if (!e.installed) {
        var t = d(arguments, 1);return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t), e.installed = !0, this;
      }
    }, n.mixin = function (e) {
      n.options = Ae(n.options, e);
    }, Ur._assetTypes.forEach(function (e) {
      n[e] = function (t, r) {
        return r ? ("component" === e && g(r) && (r.name || (r.name = t), r = n.extend(r)), this.options[e + "s"][t] = r, r) : this.options[e + "s"][t];
      };
    }), v(n.transition, Vr);
  }var Mn = Object.prototype.hasOwnProperty,
      Vn = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
      Hn = /-(\w)/g,
      Wn = /([^-])([A-Z])/g,
      zn = /(?:^|[-_\/])(\w)/g,
      qn = Object.prototype.toString,
      Gn = "[object Object]",
      Jn = Array.isArray,
      Kn = "__proto__" in {},
      Qn = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
      Xn = Qn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      Zn = Qn && window.navigator.userAgent.toLowerCase(),
      Yn = Zn && Zn.indexOf("trident") > 0,
      er = Zn && Zn.indexOf("msie 9.0") > 0,
      tr = Zn && Zn.indexOf("android") > 0,
      nr = Zn && /iphone|ipad|ipod|ios/.test(Zn),
      rr = void 0,
      ir = void 0,
      ar = void 0,
      or = void 0;if (Qn && !er) {
    var sr = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
        lr = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;rr = sr ? "WebkitTransition" : "transition", ir = sr ? "webkitTransitionEnd" : "transitionend", ar = lr ? "WebkitAnimation" : "animation", or = lr ? "webkitAnimationEnd" : "animationend";
  }var ur = function () {
    function e() {
      n = !1;var e = t.slice(0);t.length = 0;for (var r = 0; r < e.length; r++) e[r]();
    }var t = [],
        n = !1,
        r = void 0;if ("undefined" != typeof Promise && k(Promise)) {
      var i = Promise.resolve(),
          a = function () {};r = function () {
        i.then(e), nr && setTimeout(a);
      };
    } else if ("undefined" != typeof MutationObserver) {
      var o = 1,
          s = new MutationObserver(e),
          l = document.createTextNode(String(o));s.observe(l, { characterData: !0 }), r = function () {
        o = (o + 1) % 2, l.data = String(o);
      };
    } else r = setTimeout;return function (i, a) {
      var o = a ? function () {
        i.call(a);
      } : i;t.push(o), n || (n = !0, r(e, 0));
    };
  }(),
      cr = void 0;"undefined" != typeof Set && k(Set) ? cr = Set : (cr = function () {
    this.set = Object.create(null);
  }, cr.prototype.has = function (e) {
    return void 0 !== this.set[e];
  }, cr.prototype.add = function (e) {
    this.set[e] = 1;
  }, cr.prototype.clear = function () {
    this.set = Object.create(null);
  });var pr = S.prototype;pr.put = function (e, t) {
    var n,
        r = this.get(e, !0);return r || (this.size === this.limit && (n = this.shift()), r = { key: e }, this._keymap[e] = r, this.tail ? (this.tail.newer = r, r.older = this.tail) : this.head = r, this.tail = r, this.size++), r.value = t, n;
  }, pr.shift = function () {
    var e = this.head;return e && (this.head = this.head.newer, this.head.older = void 0, e.newer = e.older = void 0, this._keymap[e.key] = void 0, this.size--), e;
  }, pr.get = function (e, t) {
    var n = this._keymap[e];if (void 0 !== n) return n === this.tail ? t ? n : n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, t ? n : n.value);
  };var hr,
      fr,
      dr,
      vr,
      mr,
      gr,
      yr = new S(1e3),
      br = /^in$|^-?\d+/,
      _r = 0,
      xr = 1,
      wr = 2,
      kr = 3,
      Sr = 34,
      Cr = 39,
      Er = 124,
      $r = 92,
      Or = 32,
      Ar = { 91: 1, 123: 1, 40: 1 },
      Nr = { 91: 93, 123: 125, 40: 41 },
      Lr = Object.freeze({ parseDirective: B }),
      Pr = /[-.*+?^${}()|[\]\/\\]/g,
      Ir = void 0,
      jr = void 0,
      Tr = void 0,
      Fr = /[^|]\|[^|]/,
      Dr = Object.freeze({ compileRegex: M, parseText: V, tokensToExp: H }),
      Rr = ["{{", "}}"],
      Br = ["{{{", "}}}"],
      Ur = Object.defineProperties({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, devtools: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function () {
        return Rr;
      }, set: function (e) {
        Rr = e, M();
      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function () {
        return Br;
      }, set: function (e) {
        Br = e, M();
      }, configurable: !0, enumerable: !0 } }),
      Mr = void 0,
      Vr = Object.freeze({ appendWithTransition: q, beforeWithTransition: G, removeWithTransition: J, applyTransition: K }),
      Hr = /^v-ref:/,
      Wr = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,
      zr = /^(slot|partial|component)$/i,
      qr = Ur.optionMergeStrategies = Object.create(null);qr.data = function (e, t, n) {
    return n ? e || t ? function () {
      var r = "function" == typeof t ? t.call(n) : t,
          i = "function" == typeof e ? e.call(n) : void 0;return r ? Se(r, i) : i;
    } : void 0 : t ? "function" != typeof t ? e : e ? function () {
      return Se(t.call(this), e.call(this));
    } : t : e;
  }, qr.el = function (e, t, n) {
    if (n || !t || "function" == typeof t) {
      var r = t || e;return n && "function" == typeof r ? r.call(n) : r;
    }
  }, qr.init = qr.created = qr.ready = qr.attached = qr.detached = qr.beforeCompile = qr.compiled = qr.beforeDestroy = qr.destroyed = qr.activate = function (e, t) {
    return t ? e ? e.concat(t) : Jn(t) ? t : [t] : e;
  }, Ur._assetTypes.forEach(function (e) {
    qr[e + "s"] = Ce;
  }), qr.watch = qr.events = function (e, t) {
    if (!t) return e;if (!e) return t;var n = {};v(n, e);for (var r in t) {
      var i = n[r],
          a = t[r];i && !Jn(i) && (i = [i]), n[r] = i ? i.concat(a) : [a];
    }return n;
  }, qr.props = qr.methods = qr.computed = function (e, t) {
    if (!t) return e;if (!e) return t;var n = Object.create(null);return v(n, e), v(n, t), n;
  };var Gr = function (e, t) {
    return void 0 === t ? e : t;
  },
      Jr = 0;Le.target = null, Le.prototype.addSub = function (e) {
    this.subs.push(e);
  }, Le.prototype.removeSub = function (e) {
    this.subs.$remove(e);
  }, Le.prototype.depend = function () {
    Le.target.addDep(this);
  }, Le.prototype.notify = function () {
    for (var e = d(this.subs), t = 0, n = e.length; t < n; t++) e[t].update();
  };var Kr = Array.prototype,
      Qr = Object.create(Kr);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
    var t = Kr[e];y(Qr, e, function () {
      for (var n = arguments.length, r = new Array(n); n--;) r[n] = arguments[n];var i,
          a = t.apply(this, r),
          o = this.__ob__;switch (e) {case "push":
          i = r;break;case "unshift":
          i = r;break;case "splice":
          i = r.slice(2);}return i && o.observeArray(i), o.dep.notify(), a;
    });
  }), y(Kr, "$set", function (e, t) {
    return e >= this.length && (this.length = Number(e) + 1), this.splice(e, 1, t)[0];
  }), y(Kr, "$remove", function (e) {
    if (this.length) {
      var t = _(this, e);return t > -1 ? this.splice(t, 1) : void 0;
    }
  });var Xr = Object.getOwnPropertyNames(Qr),
      Zr = !0;Ie.prototype.walk = function (e) {
    for (var t = Object.keys(e), n = 0, r = t.length; n < r; n++) this.convert(t[n], e[t[n]]);
  }, Ie.prototype.observeArray = function (e) {
    for (var t = 0, n = e.length; t < n; t++) Fe(e[t]);
  }, Ie.prototype.convert = function (e, t) {
    De(this.value, e, t);
  }, Ie.prototype.addVm = function (e) {
    (this.vms || (this.vms = [])).push(e);
  }, Ie.prototype.removeVm = function (e) {
    this.vms.$remove(e);
  };var Yr = Object.freeze({ defineReactive: De, set: e, del: t, hasOwn: n, isLiteral: r, isReserved: i, _toString: a, toNumber: o, toBoolean: s, stripQuotes: l, camelize: u, hyphenate: p, classify: h, bind: f, toArray: d, extend: v, isObject: m, isPlainObject: g, def: y, debounce: b, indexOf: _, cancellable: x, looseEqual: w, isArray: Jn, hasProto: Kn, inBrowser: Qn, devtools: Xn, isIE: Yn, isIE9: er, isAndroid: tr, isIOS: nr, get transitionProp() {
      return rr;
    }, get transitionEndEvent() {
      return ir;
    }, get animationProp() {
      return ar;
    }, get animationEndEvent() {
      return or;
    }, nextTick: ur, get _Set() {
      return cr;
    }, query: Q, inDoc: X, getAttr: Z, getBindAttr: Y, hasBindAttr: ee, before: te, after: ne, remove: re, prepend: ie, replace: ae, on: oe, off: se, setClass: ue, addClass: ce, removeClass: pe, extractContent: he, trimNode: fe, isTemplate: ve, createAnchor: me, findRef: ge, mapNodeRange: ye, removeNodeRange: be, isFragment: _e, getOuterHTML: xe, mergeOptions: Ae, resolveAsset: Ne, checkComponentAttr: we, commonTagRE: Wr, reservedTagRE: zr, warn: Mr }),
      ei = 0,
      ti = "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0,
      ni = function (e, t) {
    function n(e) {
      if (!(this instanceof n)) return new n(e);this.context = e;for (var t = 0; t < s.length; t++) this.context[s[t]] || (this.context[s[t]] = o(u[t]));
    }function r(e) {
      return e.prototype;
    }function i(e) {
      return t[e];
    }function a(e, t) {
      e.__proto__ = t;
    }function o(e) {
      var t = Object.create(e.prototype),
          n = function () {
        if (!(this instanceof n)) {
          var r = e.apply(null, arguments);return a(r, t), r;
        }e.apply(this, arguments);
      };return a(n, e), n.prototype = t, n.wrapped = !0, n;
    }var s = (e.exports, ["Object", "String", "Boolean", "Number", "RegExp", "Date", "Array"]),
        l = { string: "String", boolean: "Boolean", number: "Number" },
        u = s.map(i),
        c = u.map(r);return e.exports = n, n.prototype.replace = function (e) {
      var t = u.indexOf(e),
          n = c.indexOf(e);if (~t) {
        var r = s[t];return this.context[r];
      }if (~n) {
        var r = s[n];return this.context[r].prototype;
      }return e;
    }, n.prototype.getPropertyObject = function (e, t) {
      return l[typeof e] ? this.getPrototypeOf(e) : e;
    }, n.prototype.isPrimitive = function (e) {
      return !!~u.indexOf(e) || !!~c.indexOf(e);
    }, n.prototype.getPrototypeOf = function (e) {
      if (null == e) return e;var t = l[typeof e];if (t) var n = this.context[t].prototype;else var n = Object.getPrototypeOf(e);if (n && n !== Object.prototype) {
        var r = this.replace(n);return r === e && (r = this.replace(Object.prototype)), r;
      }return null;
    }, n.prototype.applyNew = function (e, t) {
      if (e.wrapped) {
        var n = Object.getPrototypeOf(e),
            r = new (Function.prototype.bind.apply(n, arguments))();return a(r, e.prototype), r;
      }return new (Function.prototype.bind.apply(e, arguments))();
    }, e.exports;
  }({ exports: {} }, ti),
      ri = function (e) {
    function t(e) {
      return this instanceof t ? (this.maxIterations = e, void (this.count = 0)) : new t(e);
    }e.exports;return e.exports = t, t.prototype.check = function () {
      if (this.count += 1, this.count > this.maxIterations) throw new Error("Infinite loop detected - reached max iterations");
    }, e.exports;
  }({ exports: {} }),
      ii = function (e) {
    function t(e) {
      function i(e) {
        for (var t = null, n = 0; n < e.length; n++) {
          var r = e[n];if ("EmptyStatement" !== r.type) {
            var t = a(r);"remove" === t && e.splice(n--, 1);
          }
        }
      }function a(e) {
        var r = o[o.length - 1],
            u = !1;o.push(e);var c = !1;n(e, r) && (t(e.body), c = !0), "VariableDeclarator" === e.type && s.push(e), "FunctionDeclaration" === e.type && (l.push(e), u = !0);for (var p in e) "type" === p || c && "body" === p || p in e && e[p] && "object" == typeof e[p] && (e[p].type ? a(e[p]) : Array.isArray(e[p]) && i(e[p]));if (o.pop(), u) return "remove";
      }var o = [],
          s = [],
          l = [];return Array.isArray(e) ? (i(e), r(e, s, l)) : a(e), e;
    }function n(e, t) {
      return "Program" === e.type || !("BlockStatement" !== e.type || !t || "FunctionExpression" !== t.type && "FunctionDeclaration" !== t.type) || void 0;
    }function r(e, t, n) {
      if (t && t.length) {
        for (var r = [], i = 0; i < t.length; i++) r.push({ type: "VariableDeclarator", id: t[i].id, init: null });e.unshift({ type: "VariableDeclaration", kind: "var", declarations: r });
      }if (n && n.length) for (var i = 0; i < n.length; i++) e.unshift(n[i]);
    }e.exports;return e.exports = t, e.exports;
  }({ exports: {} }),
      ai = function (e) {
    var t = e.exports;return function (e, n) {
      "function" == typeof define && define.amd ? define(["exports"], n) : n("undefined" != typeof t ? t : e.esprima = {});
    }(this, function (e) {
      function t(e, t) {
        if (!e) throw new Error("ASSERT: " + t);
      }function n(e, t) {
        return ht.slice(e, t);
      }function r(e) {
        return "0123456789".indexOf(e) >= 0;
      }function i(e) {
        return "0123456789abcdefABCDEF".indexOf(e) >= 0;
      }function a(e) {
        return "01234567".indexOf(e) >= 0;
      }function o(e) {
        return " " === e || "\t" === e || "\v" === e || "\f" === e || "\xa0" === e || e.charCodeAt(0) >= 5760 && "\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\ufeff".indexOf(e) >= 0;
      }function s(e) {
        return "\n" === e || "\r" === e || "\u2028" === e || "\u2029" === e;
      }function l(e) {
        return "$" === e || "_" === e || "\\" === e || e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e.charCodeAt(0) >= 128 && pt.NonAsciiIdentifierStart.test(e);
      }function u(e) {
        return "$" === e || "_" === e || "\\" === e || e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e.charCodeAt(0) >= 128 && pt.NonAsciiIdentifierPart.test(e);
      }function c(e) {
        switch (e) {case "class":case "enum":case "export":case "extends":case "import":case "super":
            return !0;}return !1;
      }function p(e) {
        switch (e) {case "implements":case "interface":case "package":case "private":case "protected":case "public":case "static":case "yield":case "let":
            return !0;}return !1;
      }function h(e) {
        return "eval" === e || "arguments" === e;
      }function f(e) {
        var t = !1;switch (e.length) {case 2:
            t = "if" === e || "in" === e || "do" === e;break;case 3:
            t = "var" === e || "for" === e || "new" === e || "try" === e;break;case 4:
            t = "this" === e || "else" === e || "case" === e || "void" === e || "with" === e;break;case 5:
            t = "while" === e || "break" === e || "catch" === e || "throw" === e;break;case 6:
            t = "return" === e || "typeof" === e || "delete" === e || "switch" === e;break;case 7:
            t = "default" === e || "finally" === e;break;case 8:
            t = "function" === e || "continue" === e || "debugger" === e;break;case 10:
            t = "instanceof" === e;}if (t) return !0;switch (e) {case "const":
            return !0;case "yield":case "let":
            return !0;}return !(!ft || !p(e)) || c(e);
      }function d() {
        var e, t, n;for (t = !1, n = !1; dt < gt;) if (e = ht[dt], n) e = ht[dt++], s(e) && (n = !1, "\r" === e && "\n" === ht[dt] && ++dt, ++vt, mt = dt);else if (t) s(e) ? ("\r" === e && "\n" === ht[dt + 1] && ++dt, ++vt, ++dt, mt = dt, dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL")) : (e = ht[dt++], dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL"), "*" === e && (e = ht[dt], "/" === e && (++dt, t = !1)));else if ("/" === e) {
          if (e = ht[dt + 1], "/" === e) dt += 2, n = !0;else {
            if ("*" !== e) break;dt += 2, t = !0, dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL");
          }
        } else if (o(e)) ++dt;else {
          if (!s(e)) break;++dt, "\r" === e && "\n" === ht[dt] && ++dt, ++vt, mt = dt;
        }
      }function v(e) {
        var t,
            n,
            r,
            a = 0;for (n = "u" === e ? 4 : 2, t = 0; t < n; ++t) {
          if (!(dt < gt && i(ht[dt]))) return "";r = ht[dt++], a = 16 * a + "0123456789abcdef".indexOf(r.toLowerCase());
        }return String.fromCharCode(a);
      }function m() {
        var e, t, n, r;if (e = ht[dt], l(e)) {
          if (t = dt, "\\" === e) {
            if (++dt, "u" !== ht[dt]) return;if (++dt, r = dt, e = v("u")) {
              if ("\\" === e || !l(e)) return;n = e;
            } else dt = r, n = "u";
          } else n = ht[dt++];for (; dt < gt && (e = ht[dt], u(e));) if ("\\" === e) {
            if (++dt, "u" !== ht[dt]) return;if (++dt, r = dt, e = v("u")) {
              if ("\\" === e || !u(e)) return;n += e;
            } else dt = r, n += "u";
          } else n += ht[dt++];return 1 === n.length ? { type: ot.Identifier, value: n, lineNumber: vt, lineStart: mt, range: [t, dt] } : f(n) ? { type: ot.Keyword, value: n, lineNumber: vt, lineStart: mt, range: [t, dt] } : "null" === n ? { type: ot.NullLiteral, value: n, lineNumber: vt, lineStart: mt, range: [t, dt] } : "true" === n || "false" === n ? { type: ot.BooleanLiteral, value: n, lineNumber: vt, lineStart: mt, range: [t, dt] } : { type: ot.Identifier, value: n, lineNumber: vt, lineStart: mt, range: [t, dt] };
        }
      }function g() {
        var e,
            t,
            n,
            i = dt,
            a = ht[dt];return ";" === a || "{" === a || "}" === a ? (++dt, { type: ot.Punctuator, value: a, lineNumber: vt, lineStart: mt, range: [i, dt] }) : "," === a || "(" === a || ")" === a ? (++dt, { type: ot.Punctuator, value: a, lineNumber: vt, lineStart: mt, range: [i, dt] }) : (e = ht[dt + 1], "." !== a || r(e) ? (t = ht[dt + 2], n = ht[dt + 3], ">" === a && ">" === e && ">" === t && "=" === n ? (dt += 4, { type: ot.Punctuator, value: ">>>=", lineNumber: vt, lineStart: mt, range: [i, dt] }) : "=" === a && "=" === e && "=" === t ? (dt += 3, { type: ot.Punctuator, value: "===", lineNumber: vt, lineStart: mt, range: [i, dt] }) : "!" === a && "=" === e && "=" === t ? (dt += 3, { type: ot.Punctuator, value: "!==", lineNumber: vt, lineStart: mt, range: [i, dt] }) : ">" === a && ">" === e && ">" === t ? (dt += 3, { type: ot.Punctuator, value: ">>>", lineNumber: vt, lineStart: mt, range: [i, dt] }) : "<" === a && "<" === e && "=" === t ? (dt += 3, { type: ot.Punctuator, value: "<<=", lineNumber: vt, lineStart: mt, range: [i, dt] }) : ">" === a && ">" === e && "=" === t ? (dt += 3, { type: ot.Punctuator, value: ">>=", lineNumber: vt, lineStart: mt, range: [i, dt] }) : "=" === e && "<>=!+-*%&|^/".indexOf(a) >= 0 ? (dt += 2, { type: ot.Punctuator, value: a + e, lineNumber: vt, lineStart: mt, range: [i, dt] }) : a === e && "+-<>&|".indexOf(a) >= 0 && "+-<>&|".indexOf(e) >= 0 ? (dt += 2, { type: ot.Punctuator, value: a + e, lineNumber: vt, lineStart: mt, range: [i, dt] }) : "[]<>+-*%&|^!~?:=/".indexOf(a) >= 0 ? { type: ot.Punctuator, value: ht[dt++], lineNumber: vt, lineStart: mt, range: [i, dt] } : void 0) : { type: ot.Punctuator, value: ht[dt++], lineNumber: vt, lineStart: mt, range: [i, dt] });
      }function y() {
        var e, n, o;if (o = ht[dt], t(r(o) || "." === o, "Numeric literal must start with a decimal digit or a decimal point"), n = dt, e = "", "." !== o) {
          if (e = ht[dt++], o = ht[dt], "0" === e) {
            if ("x" === o || "X" === o) {
              for (e += ht[dt++]; dt < gt && (o = ht[dt], i(o));) e += ht[dt++];return e.length <= 2 && E({}, ct.UnexpectedToken, "ILLEGAL"), dt < gt && (o = ht[dt], l(o) && E({}, ct.UnexpectedToken, "ILLEGAL")), { type: ot.NumericLiteral, value: parseInt(e, 16), lineNumber: vt, lineStart: mt, range: [n, dt] };
            }if (a(o)) {
              for (e += ht[dt++]; dt < gt && (o = ht[dt], a(o));) e += ht[dt++];return dt < gt && (o = ht[dt], (l(o) || r(o)) && E({}, ct.UnexpectedToken, "ILLEGAL")), { type: ot.NumericLiteral, value: parseInt(e, 8), octal: !0, lineNumber: vt, lineStart: mt, range: [n, dt] };
            }r(o) && E({}, ct.UnexpectedToken, "ILLEGAL");
          }for (; dt < gt && (o = ht[dt], r(o));) e += ht[dt++];
        }if ("." === o) for (e += ht[dt++]; dt < gt && (o = ht[dt], r(o));) e += ht[dt++];if ("e" === o || "E" === o) if (e += ht[dt++], o = ht[dt], "+" !== o && "-" !== o || (e += ht[dt++]), o = ht[dt], r(o)) for (e += ht[dt++]; dt < gt && (o = ht[dt], r(o));) e += ht[dt++];else o = "character " + o, dt >= gt && (o = "<end>"), E({}, ct.UnexpectedToken, "ILLEGAL");return dt < gt && (o = ht[dt], l(o) && E({}, ct.UnexpectedToken, "ILLEGAL")), { type: ot.NumericLiteral, value: parseFloat(e), lineNumber: vt, lineStart: mt, range: [n, dt] };
      }function b() {
        var e,
            n,
            r,
            i,
            o,
            l,
            u = "",
            c = !1;for (e = ht[dt], t("'" === e || '"' === e, "String literal must starts with a quote"), n = dt, ++dt; dt < gt;) {
          if (r = ht[dt++], r === e) {
            e = "";break;
          }if ("\\" === r) {
            if (r = ht[dt++], s(r)) ++vt, "\r" === r && "\n" === ht[dt] && ++dt;else switch (r) {case "n":
                u += "\n";break;case "r":
                u += "\r";break;case "t":
                u += "\t";break;case "u":case "x":
                l = dt, o = v(r), o ? u += o : (dt = l, u += r);break;case "b":
                u += "\b";break;case "f":
                u += "\f";break;case "v":
                u += "\v";break;default:
                a(r) ? (i = "01234567".indexOf(r), 0 !== i && (c = !0), dt < gt && a(ht[dt]) && (c = !0, i = 8 * i + "01234567".indexOf(ht[dt++]), "0123".indexOf(r) >= 0 && dt < gt && a(ht[dt]) && (i = 8 * i + "01234567".indexOf(ht[dt++]))), u += String.fromCharCode(i)) : u += r;}
          } else {
            if (s(r)) break;u += r;
          }
        }return "" !== e && E({}, ct.UnexpectedToken, "ILLEGAL"), { type: ot.StringLiteral, value: u, octal: c, lineNumber: vt, lineStart: mt, range: [n, dt] };
      }function _() {
        var e,
            n,
            r,
            i,
            a,
            o,
            l,
            c = !1,
            p = !1;for (yt = null, d(), r = dt, n = ht[dt], t("/" === n, "Regular expression literal must start with a slash"), e = ht[dt++]; dt < gt;) if (n = ht[dt++], e += n, "\\" === n) n = ht[dt++], s(n) && E({}, ct.UnterminatedRegExp), e += n;else if (c) "]" === n && (c = !1);else {
          if ("/" === n) {
            p = !0;break;
          }"[" === n ? c = !0 : s(n) && E({}, ct.UnterminatedRegExp);
        }for (p || E({}, ct.UnterminatedRegExp), i = e.substr(1, e.length - 2), a = ""; dt < gt && (n = ht[dt], u(n));) if (++dt, "\\" === n && dt < gt) {
          if (n = ht[dt], "u" === n) {
            if (++dt, l = dt, n = v("u")) for (a += n, e += "\\u"; l < dt; ++l) e += ht[l];else dt = l, a += "u", e += "\\u";
          } else e += "\\";
        } else a += n, e += n;try {
          o = new RegExp(i, a);
        } catch (e) {
          E({}, ct.InvalidRegExp);
        }return { literal: e, value: o, range: [r, dt] };
      }function x(e) {
        return e.type === ot.Identifier || e.type === ot.Keyword || e.type === ot.BooleanLiteral || e.type === ot.NullLiteral;
      }function w() {
        var e, t;return d(), dt >= gt ? { type: ot.EOF, lineNumber: vt, lineStart: mt, range: [dt, dt] } : (t = g(), "undefined" != typeof t ? t : (e = ht[dt], "'" === e || '"' === e ? b() : "." === e || r(e) ? y() : (t = m(), "undefined" != typeof t ? t : void E({}, ct.UnexpectedToken, "ILLEGAL"))));
      }function k() {
        var e;return yt ? (dt = yt.range[1], vt = yt.lineNumber, mt = yt.lineStart, e = yt, yt = null, e) : (yt = null, w());
      }function S() {
        var e, t, n;return null !== yt ? yt : (e = dt, t = vt, n = mt, yt = w(), dt = e, vt = t, mt = n, yt);
      }function C() {
        var e, t, n, r;return e = dt, t = vt, n = mt, d(), r = vt !== t, dt = e, vt = t, mt = n, r;
      }function E(e, t) {
        var n,
            r = Array.prototype.slice.call(arguments, 2),
            i = t.replace(/%(\d)/g, function (e, t) {
          return r[t] || "";
        });throw "number" == typeof e.lineNumber ? (n = new Error("Line " + e.lineNumber + ": " + i), n.index = e.range[0], n.lineNumber = e.lineNumber, n.column = e.range[0] - mt + 1) : (n = new Error("Line " + vt + ": " + i), n.index = dt, n.lineNumber = vt, n.column = dt - mt + 1), n;
      }function $() {
        try {
          E.apply(null, arguments);
        } catch (e) {
          if (!_t.errors) throw e;_t.errors.push(e);
        }
      }function O(e) {
        if (e.type === ot.EOF && E(e, ct.UnexpectedEOS), e.type === ot.NumericLiteral && E(e, ct.UnexpectedNumber), e.type === ot.StringLiteral && E(e, ct.UnexpectedString), e.type === ot.Identifier && E(e, ct.UnexpectedIdentifier), e.type === ot.Keyword) {
          if (c(e.value)) E(e, ct.UnexpectedReserved);else if (ft && p(e.value)) return void $(e, ct.StrictReservedWord);E(e, ct.UnexpectedToken, e.value);
        }E(e, ct.UnexpectedToken, e.value);
      }function A(e) {
        var t = k();t.type === ot.Punctuator && t.value === e || O(t);
      }function N(e) {
        var t = k();t.type === ot.Keyword && t.value === e || O(t);
      }function L(e) {
        var t = S();return t.type === ot.Punctuator && t.value === e;
      }function P(e) {
        var t = S();return t.type === ot.Keyword && t.value === e;
      }function I() {
        var e = S(),
            t = e.value;return e.type === ot.Punctuator && ("=" === t || "*=" === t || "/=" === t || "%=" === t || "+=" === t || "-=" === t || "<<=" === t || ">>=" === t || ">>>=" === t || "&=" === t || "^=" === t || "|=" === t);
      }function j() {
        var e, t;if (";" === ht[dt]) return void k();if (t = vt, d(), vt === t) {
          if (L(";")) return void k();e = S(), e.type === ot.EOF || L("}") || O(e);
        }
      }function T(e) {
        return e.type === lt.Identifier || e.type === lt.MemberExpression;
      }function F() {
        var e = [];for (A("["); !L("]");) L(",") ? (k(), e.push(null)) : (e.push(ue()), L("]") || A(","));return A("]"), { type: lt.ArrayExpression, elements: e };
      }function D(e, t) {
        var n, r;return n = ft, r = Fe(), t && ft && h(e[0].name) && $(t, ct.StrictParamName), ft = n, { type: lt.FunctionExpression, id: null, params: e, defaults: [], body: r, rest: null, generator: !1, expression: !1 };
      }function R() {
        var e = k();return e.type === ot.StringLiteral || e.type === ot.NumericLiteral ? (ft && e.octal && $(e, ct.StrictOctalLiteral), Je(e)) : { type: lt.Identifier, name: e.value };
      }function B() {
        var e, t, n, r;return e = S(), e.type === ot.Identifier ? (n = R(), "get" !== e.value || L(":") ? "set" !== e.value || L(":") ? (A(":"), { type: lt.Property, key: n, value: ue(), kind: "init" }) : (t = R(), A("("), e = S(), e.type !== ot.Identifier ? (A(")"), $(e, ct.UnexpectedToken, e.value), { type: lt.Property, key: t, value: D([]), kind: "set" }) : (r = [fe()], A(")"), { type: lt.Property, key: t, value: D(r, e), kind: "set" })) : (t = R(), A("("), A(")"), { type: lt.Property, key: t, value: D([]), kind: "get" })) : e.type !== ot.EOF && e.type !== ot.Punctuator ? (t = R(), A(":"), { type: lt.Property, key: t, value: ue(), kind: "init" }) : void O(e);
      }function U() {
        var e,
            t,
            n,
            r = [],
            i = {},
            a = String;for (A("{"); !L("}");) e = B(), t = e.key.type === lt.Identifier ? e.key.name : a(e.key.value), n = "init" === e.kind ? ut.Data : "get" === e.kind ? ut.Get : ut.Set, Object.prototype.hasOwnProperty.call(i, t) ? (i[t] === ut.Data ? ft && n === ut.Data ? $({}, ct.StrictDuplicateProperty) : n !== ut.Data && $({}, ct.AccessorDataProperty) : n === ut.Data ? $({}, ct.AccessorDataProperty) : i[t] & n && $({}, ct.AccessorGetSet), i[t] |= n) : i[t] = n, r.push(e), L("}") || A(",");return A("}"), { type: lt.ObjectExpression, properties: r };
      }function M() {
        var e;return A("("), e = ce(), A(")"), e;
      }function V() {
        var e = S(),
            t = e.type;if (t === ot.Identifier) return { type: lt.Identifier, name: k().value };if (t === ot.StringLiteral || t === ot.NumericLiteral) return ft && e.octal && $(e, ct.StrictOctalLiteral), Je(k());if (t === ot.Keyword) {
          if (P("this")) return k(), { type: lt.ThisExpression };if (P("function")) return Re();
        }return t === ot.BooleanLiteral ? (k(), e.value = "true" === e.value, Je(e)) : t === ot.NullLiteral ? (k(), e.value = null, Je(e)) : L("[") ? F() : L("{") ? U() : L("(") ? M() : L("/") || L("/=") ? Je(_()) : O(k());
      }function H() {
        var e = [];if (A("("), !L(")")) for (; dt < gt && (e.push(ue()), !L(")"));) A(",");return A(")"), e;
      }function W() {
        var e = k();return x(e) || O(e), { type: lt.Identifier, name: e.value };
      }function z() {
        return A("."), W();
      }function q() {
        var e;return A("["), e = ce(), A("]"), e;
      }function G() {
        var e;return N("new"), e = { type: lt.NewExpression, callee: K(), arguments: [] }, L("(") && (e.arguments = H()), e;
      }function J() {
        var e;for (e = P("new") ? G() : V(); L(".") || L("[") || L("(");) e = L("(") ? { type: lt.CallExpression, callee: e, arguments: H() } : L("[") ? { type: lt.MemberExpression, computed: !0, object: e, property: q() } : { type: lt.MemberExpression, computed: !1, object: e, property: z() };return e;
      }function K() {
        var e;for (e = P("new") ? G() : V(); L(".") || L("[");) e = L("[") ? { type: lt.MemberExpression, computed: !0, object: e, property: q() } : { type: lt.MemberExpression, computed: !1, object: e, property: z() };return e;
      }function Q() {
        var e,
            t = J();return e = S(), e.type !== ot.Punctuator ? t : (!L("++") && !L("--") || C() || (ft && t.type === lt.Identifier && h(t.name) && $({}, ct.StrictLHSPostfix), T(t) || $({}, ct.InvalidLHSInAssignment), t = { type: lt.UpdateExpression, operator: k().value, argument: t, prefix: !1 }), t);
      }function X() {
        var e, t;return e = S(), e.type !== ot.Punctuator && e.type !== ot.Keyword ? Q() : L("++") || L("--") ? (e = k(), t = X(), ft && t.type === lt.Identifier && h(t.name) && $({}, ct.StrictLHSPrefix), T(t) || $({}, ct.InvalidLHSInAssignment), t = { type: lt.UpdateExpression, operator: e.value, argument: t, prefix: !0 }) : L("+") || L("-") || L("~") || L("!") ? t = { type: lt.UnaryExpression, operator: k().value, argument: X(), prefix: !0 } : P("delete") || P("void") || P("typeof") ? (t = { type: lt.UnaryExpression, operator: k().value, argument: X(), prefix: !0 }, ft && "delete" === t.operator && t.argument.type === lt.Identifier && $({}, ct.StrictDelete), t) : Q();
      }function Z() {
        for (var e = X(); L("*") || L("/") || L("%");) e = { type: lt.BinaryExpression, operator: k().value, left: e, right: X() };return e;
      }function Y() {
        for (var e = Z(); L("+") || L("-");) e = { type: lt.BinaryExpression, operator: k().value, left: e, right: Z() };return e;
      }function ee() {
        for (var e = Y(); L("<<") || L(">>") || L(">>>");) e = { type: lt.BinaryExpression,
          operator: k().value, left: e, right: Y() };return e;
      }function te() {
        var e, t;for (t = bt.allowIn, bt.allowIn = !0, e = ee(); L("<") || L(">") || L("<=") || L(">=") || t && P("in") || P("instanceof");) e = { type: lt.BinaryExpression, operator: k().value, left: e, right: ee() };return bt.allowIn = t, e;
      }function ne() {
        for (var e = te(); L("==") || L("!=") || L("===") || L("!==");) e = { type: lt.BinaryExpression, operator: k().value, left: e, right: te() };return e;
      }function re() {
        for (var e = ne(); L("&");) k(), e = { type: lt.BinaryExpression, operator: "&", left: e, right: ne() };return e;
      }function ie() {
        for (var e = re(); L("^");) k(), e = { type: lt.BinaryExpression, operator: "^", left: e, right: re() };return e;
      }function ae() {
        for (var e = ie(); L("|");) k(), e = { type: lt.BinaryExpression, operator: "|", left: e, right: ie() };return e;
      }function oe() {
        for (var e = ae(); L("&&");) k(), e = { type: lt.LogicalExpression, operator: "&&", left: e, right: ae() };return e;
      }function se() {
        for (var e = oe(); L("||");) k(), e = { type: lt.LogicalExpression, operator: "||", left: e, right: oe() };return e;
      }function le() {
        var e, t, n;return e = se(), L("?") && (k(), t = bt.allowIn, bt.allowIn = !0, n = ue(), bt.allowIn = t, A(":"), e = { type: lt.ConditionalExpression, test: e, consequent: n, alternate: ue() }), e;
      }function ue() {
        var e, t;return e = S(), t = le(), I() && (T(t) || $({}, ct.InvalidLHSInAssignment), ft && t.type === lt.Identifier && h(t.name) && $(e, ct.StrictLHSAssignment), t = { type: lt.AssignmentExpression, operator: k().value, left: t, right: ue() }), t;
      }function ce() {
        var e = ue();if (L(",")) for (e = { type: lt.SequenceExpression, expressions: [e] }; dt < gt && L(",");) k(), e.expressions.push(ue());return e;
      }function pe() {
        for (var e, t = []; dt < gt && !L("}") && (e = Be(), "undefined" != typeof e);) t.push(e);return t;
      }function he() {
        var e;return A("{"), e = pe(), A("}"), { type: lt.BlockStatement, body: e };
      }function fe() {
        var e = k();return e.type !== ot.Identifier && O(e), { type: lt.Identifier, name: e.value };
      }function de(e) {
        var t = fe(),
            n = null;return ft && h(t.name) && $({}, ct.StrictVarName), "const" === e ? (A("="), n = ue()) : L("=") && (k(), n = ue()), { type: lt.VariableDeclarator, id: t, init: n };
      }function ve(e) {
        var t = [];do {
          if (t.push(de(e)), !L(",")) break;k();
        } while (dt < gt);return t;
      }function me() {
        var e;return N("var"), e = ve(), j(), { type: lt.VariableDeclaration, declarations: e, kind: "var" };
      }function ge(e) {
        var t;return N(e), t = ve(e), j(), { type: lt.VariableDeclaration, declarations: t, kind: e };
      }function ye() {
        return A(";"), { type: lt.EmptyStatement };
      }function be() {
        var e = ce();return j(), { type: lt.ExpressionStatement, expression: e };
      }function _e() {
        var e, t, n;return N("if"), A("("), e = ce(), A(")"), t = Te(), P("else") ? (k(), n = Te()) : n = null, { type: lt.IfStatement, test: e, consequent: t, alternate: n };
      }function xe() {
        var e, t, n;return N("do"), n = bt.inIteration, bt.inIteration = !0, e = Te(), bt.inIteration = n, N("while"), A("("), t = ce(), A(")"), L(";") && k(), { type: lt.DoWhileStatement, body: e, test: t };
      }function we() {
        var e, t, n;return N("while"), A("("), e = ce(), A(")"), n = bt.inIteration, bt.inIteration = !0, t = Te(), bt.inIteration = n, { type: lt.WhileStatement, test: e, body: t };
      }function ke() {
        var e = k();return { type: lt.VariableDeclaration, declarations: ve(), kind: e.value };
      }function Se() {
        var e, t, n, r, i, a, o;return e = t = n = null, N("for"), A("("), L(";") ? k() : (P("var") || P("let") ? (bt.allowIn = !1, e = ke(), bt.allowIn = !0, 1 === e.declarations.length && P("in") && (k(), r = e, i = ce(), e = null)) : (bt.allowIn = !1, e = ce(), bt.allowIn = !0, P("in") && (T(e) || $({}, ct.InvalidLHSInForIn), k(), r = e, i = ce(), e = null)), "undefined" == typeof r && A(";")), "undefined" == typeof r && (L(";") || (t = ce()), A(";"), L(")") || (n = ce())), A(")"), o = bt.inIteration, bt.inIteration = !0, a = Te(), bt.inIteration = o, "undefined" == typeof r ? { type: lt.ForStatement, init: e, test: t, update: n, body: a } : { type: lt.ForInStatement, left: r, right: i, body: a, each: !1 };
      }function Ce() {
        var e,
            t = null;return N("continue"), ";" === ht[dt] ? (k(), bt.inIteration || E({}, ct.IllegalContinue), { type: lt.ContinueStatement, label: null }) : C() ? (bt.inIteration || E({}, ct.IllegalContinue), { type: lt.ContinueStatement, label: null }) : (e = S(), e.type === ot.Identifier && (t = fe(), Object.prototype.hasOwnProperty.call(bt.labelSet, t.name) || E({}, ct.UnknownLabel, t.name)), j(), null !== t || bt.inIteration || E({}, ct.IllegalContinue), { type: lt.ContinueStatement, label: t });
      }function Ee() {
        var e,
            t = null;return N("break"), ";" === ht[dt] ? (k(), bt.inIteration || bt.inSwitch || E({}, ct.IllegalBreak), { type: lt.BreakStatement, label: null }) : C() ? (bt.inIteration || bt.inSwitch || E({}, ct.IllegalBreak), { type: lt.BreakStatement, label: null }) : (e = S(), e.type === ot.Identifier && (t = fe(), Object.prototype.hasOwnProperty.call(bt.labelSet, t.name) || E({}, ct.UnknownLabel, t.name)), j(), null !== t || bt.inIteration || bt.inSwitch || E({}, ct.IllegalBreak), { type: lt.BreakStatement, label: t });
      }function $e() {
        var e,
            t = null;return N("return"), bt.inFunctionBody || $({}, ct.IllegalReturn), " " === ht[dt] && l(ht[dt + 1]) ? (t = ce(), j(), { type: lt.ReturnStatement, argument: t }) : C() ? { type: lt.ReturnStatement, argument: null } : (L(";") || (e = S(), L("}") || e.type === ot.EOF || (t = ce())), j(), { type: lt.ReturnStatement, argument: t });
      }function Oe() {
        var e, t;return ft && $({}, ct.StrictModeWith), N("with"), A("("), e = ce(), A(")"), t = Te(), { type: lt.WithStatement, object: e, body: t };
      }function Ae() {
        var e,
            t,
            n = [];for (P("default") ? (k(), e = null) : (N("case"), e = ce()), A(":"); dt < gt && !(L("}") || P("default") || P("case")) && (t = Te(), "undefined" != typeof t);) n.push(t);return { type: lt.SwitchCase, test: e, consequent: n };
      }function Ne() {
        var e, t, n, r, i;if (N("switch"), A("("), e = ce(), A(")"), A("{"), t = [], L("}")) return k(), { type: lt.SwitchStatement, discriminant: e, cases: t };for (r = bt.inSwitch, bt.inSwitch = !0, i = !1; dt < gt && !L("}");) n = Ae(), null === n.test && (i && E({}, ct.MultipleDefaultsInSwitch), i = !0), t.push(n);return bt.inSwitch = r, A("}"), { type: lt.SwitchStatement, discriminant: e, cases: t };
      }function Le() {
        var e;return N("throw"), C() && E({}, ct.NewlineAfterThrow), e = ce(), j(), { type: lt.ThrowStatement, argument: e };
      }function Pe() {
        var e;return N("catch"), A("("), L(")") && O(S()), e = fe(), ft && h(e.name) && $({}, ct.StrictCatchVariable), A(")"), { type: lt.CatchClause, param: e, body: he() };
      }function Ie() {
        var e,
            t = [],
            n = null;return N("try"), e = he(), P("catch") && t.push(Pe()), P("finally") && (k(), n = he()), 0 !== t.length || n || E({}, ct.NoCatchOrFinally), { type: lt.TryStatement, block: e, guardedHandlers: [], handlers: t, finalizer: n };
      }function je() {
        return N("debugger"), j(), { type: lt.DebuggerStatement };
      }function Te() {
        var e,
            t,
            n = S();if (n.type === ot.EOF && O(n), n.type === ot.Punctuator) switch (n.value) {case ";":
            return ye();case "{":
            return he();case "(":
            return be();}if (n.type === ot.Keyword) switch (n.value) {case "break":
            return Ee();case "continue":
            return Ce();case "debugger":
            return je();case "do":
            return xe();case "for":
            return Se();case "function":
            return De();case "if":
            return _e();case "return":
            return $e();case "switch":
            return Ne();case "throw":
            return Le();case "try":
            return Ie();case "var":
            return me();case "while":
            return we();case "with":
            return Oe();}return e = ce(), e.type === lt.Identifier && L(":") ? (k(), Object.prototype.hasOwnProperty.call(bt.labelSet, e.name) && E({}, ct.Redeclaration, "Label", e.name), bt.labelSet[e.name] = !0, t = Te(), delete bt.labelSet[e.name], { type: lt.LabeledStatement, label: e, body: t }) : (j(), { type: lt.ExpressionStatement, expression: e });
      }function Fe() {
        var e,
            t,
            r,
            i,
            a,
            o,
            s,
            l,
            u = [];for (A("{"); dt < gt && (t = S(), t.type === ot.StringLiteral) && (e = Be(), u.push(e), e.expression.type === lt.Literal);) r = n(t.range[0] + 1, t.range[1] - 1), "use strict" === r ? (ft = !0, i && $(i, ct.StrictOctalLiteral)) : !i && t.octal && (i = t);for (a = bt.labelSet, o = bt.inIteration, s = bt.inSwitch, l = bt.inFunctionBody, bt.labelSet = {}, bt.inIteration = !1, bt.inSwitch = !1, bt.inFunctionBody = !0; dt < gt && !L("}") && (e = Be(), "undefined" != typeof e);) u.push(e);return A("}"), bt.labelSet = a, bt.inIteration = o, bt.inSwitch = s, bt.inFunctionBody = l, { type: lt.BlockStatement, body: u };
      }function De() {
        var e,
            t,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u = [];if (N("function"), r = S(), e = fe(), ft ? h(r.value) && $(r, ct.StrictFunctionName) : h(r.value) ? (a = r, o = ct.StrictFunctionName) : p(r.value) && (a = r, o = ct.StrictReservedWord), A("("), !L(")")) for (l = {}; dt < gt && (r = S(), t = fe(), ft ? (h(r.value) && (i = r, o = ct.StrictParamName), Object.prototype.hasOwnProperty.call(l, r.value) && (i = r, o = ct.StrictParamDupe)) : a || (h(r.value) ? (a = r, o = ct.StrictParamName) : p(r.value) ? (a = r, o = ct.StrictReservedWord) : Object.prototype.hasOwnProperty.call(l, r.value) && (a = r, o = ct.StrictParamDupe)), u.push(t), l[t.name] = !0, !L(")"));) A(",");return A(")"), s = ft, n = Fe(), ft && a && E(a, o), ft && i && $(i, o), ft = s, { type: lt.FunctionDeclaration, id: e, params: u, defaults: [], body: n, rest: null, generator: !1, expression: !1 };
      }function Re() {
        var e,
            t,
            n,
            r,
            i,
            a,
            o,
            s,
            l = null,
            u = [];if (N("function"), L("(") || (e = S(), l = fe(), ft ? h(e.value) && $(e, ct.StrictFunctionName) : h(e.value) ? (n = e, r = ct.StrictFunctionName) : p(e.value) && (n = e, r = ct.StrictReservedWord)), A("("), !L(")")) for (s = {}; dt < gt && (e = S(), i = fe(), ft ? (h(e.value) && (t = e, r = ct.StrictParamName), Object.prototype.hasOwnProperty.call(s, e.value) && (t = e, r = ct.StrictParamDupe)) : n || (h(e.value) ? (n = e, r = ct.StrictParamName) : p(e.value) ? (n = e, r = ct.StrictReservedWord) : Object.prototype.hasOwnProperty.call(s, e.value) && (n = e, r = ct.StrictParamDupe)), u.push(i), s[i.name] = !0, !L(")"));) A(",");return A(")"), o = ft, a = Fe(), ft && n && E(n, r), ft && t && $(t, r), ft = o, { type: lt.FunctionExpression, id: l, params: u, defaults: [], body: a, rest: null, generator: !1, expression: !1 };
      }function Be() {
        var e = S();if (e.type === ot.Keyword) switch (e.value) {case "const":case "let":
            return ge(e.value);case "function":
            return De();default:
            return Te();}if (e.type !== ot.EOF) return Te();
      }function Ue() {
        for (var e, t, r, i, a = []; dt < gt && (t = S(), t.type === ot.StringLiteral) && (e = Be(), a.push(e), e.expression.type === lt.Literal);) r = n(t.range[0] + 1, t.range[1] - 1), "use strict" === r ? (ft = !0, i && $(i, ct.StrictOctalLiteral)) : !i && t.octal && (i = t);for (; dt < gt && (e = Be(), "undefined" != typeof e);) a.push(e);return a;
      }function Me() {
        var e;return ft = !1, e = { type: lt.Program, body: Ue() };
      }function Ve(e, n, r, i, a) {
        t("number" == typeof r, "Comment must have valid position"), _t.comments.length > 0 && _t.comments[_t.comments.length - 1].range[1] > r || _t.comments.push({ type: e, value: n, range: [r, i], loc: a });
      }function He() {
        var e, t, n, r, i, a;for (e = "", i = !1, a = !1; dt < gt;) if (t = ht[dt], a) t = ht[dt++], s(t) ? (n.end = { line: vt, column: dt - mt - 1 }, a = !1, Ve("Line", e, r, dt - 1, n), "\r" === t && "\n" === ht[dt] && ++dt, ++vt, mt = dt, e = "") : dt >= gt ? (a = !1, e += t, n.end = { line: vt, column: gt - mt }, Ve("Line", e, r, gt, n)) : e += t;else if (i) s(t) ? ("\r" === t && "\n" === ht[dt + 1] ? (++dt, e += "\r\n") : e += t, ++vt, ++dt, mt = dt, dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL")) : (t = ht[dt++], dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL"), e += t, "*" === t && (t = ht[dt], "/" === t && (e = e.substr(0, e.length - 1), i = !1, ++dt, n.end = { line: vt, column: dt - mt }, Ve("Block", e, r, dt, n), e = "")));else if ("/" === t) {
          if (t = ht[dt + 1], "/" === t) n = { start: { line: vt, column: dt - mt } }, r = dt, dt += 2, a = !0, dt >= gt && (n.end = { line: vt, column: dt - mt }, a = !1, Ve("Line", e, r, dt, n));else {
            if ("*" !== t) break;r = dt, dt += 2, i = !0, n = { start: { line: vt, column: dt - mt - 2 } }, dt >= gt && E({}, ct.UnexpectedToken, "ILLEGAL");
          }
        } else if (o(t)) ++dt;else {
          if (!s(t)) break;++dt, "\r" === t && "\n" === ht[dt] && ++dt, ++vt, mt = dt;
        }
      }function We() {
        var e,
            t,
            n,
            r = [];for (e = 0; e < _t.comments.length; ++e) t = _t.comments[e], n = { type: t.type, value: t.value }, _t.range && (n.range = t.range), _t.loc && (n.loc = t.loc), r.push(n);_t.comments = r;
      }function ze() {
        var e, t, r, i, a;return d(), e = dt, t = { start: { line: vt, column: dt - mt } }, r = _t.advance(), t.end = { line: vt, column: dt - mt }, r.type !== ot.EOF && (i = [r.range[0], r.range[1]], a = n(r.range[0], r.range[1]), _t.tokens.push({ type: st[r.type], value: a, range: i, loc: t })), r;
      }function qe() {
        var e, t, n, r;return d(), e = dt, t = { start: { line: vt, column: dt - mt } }, n = _t.scanRegExp(), t.end = { line: vt, column: dt - mt }, _t.tokens.length > 0 && (r = _t.tokens[_t.tokens.length - 1], r.range[0] === e && "Punctuator" === r.type && ("/" !== r.value && "/=" !== r.value || _t.tokens.pop())), _t.tokens.push({ type: "RegularExpression", value: n.literal, range: [e, dt], loc: t }), n;
      }function Ge() {
        var e,
            t,
            n,
            r = [];for (e = 0; e < _t.tokens.length; ++e) t = _t.tokens[e], n = { type: t.type, value: t.value }, _t.range && (n.range = t.range), _t.loc && (n.loc = t.loc), r.push(n);_t.tokens = r;
      }function Je(e) {
        return { type: lt.Literal, value: e.value };
      }function Ke(e) {
        return { type: lt.Literal, value: e.value, raw: n(e.range[0], e.range[1]) };
      }function Qe() {
        var e = {};return e.range = [dt, dt], e.loc = { start: { line: vt, column: dt - mt }, end: { line: vt, column: dt - mt } }, e.end = function () {
          this.range[1] = dt, this.loc.end.line = vt, this.loc.end.column = dt - mt;
        }, e.applyGroup = function (e) {
          _t.range && (e.groupRange = [this.range[0], this.range[1]]), _t.loc && (e.groupLoc = { start: { line: this.loc.start.line, column: this.loc.start.column }, end: { line: this.loc.end.line, column: this.loc.end.column } });
        }, e.apply = function (e) {
          _t.range && (e.range = [this.range[0], this.range[1]]), _t.loc && (e.loc = { start: { line: this.loc.start.line, column: this.loc.start.column }, end: { line: this.loc.end.line, column: this.loc.end.column } });
        }, e;
      }function Xe() {
        var e, t;return d(), e = Qe(), A("("), t = ce(), A(")"), e.end(), e.applyGroup(t), t;
      }function Ze() {
        var e, t;for (d(), e = Qe(), t = P("new") ? G() : V(); L(".") || L("[");) L("[") ? (t = { type: lt.MemberExpression, computed: !0, object: t, property: q() }, e.end(), e.apply(t)) : (t = { type: lt.MemberExpression, computed: !1, object: t, property: z() }, e.end(), e.apply(t));return t;
      }function Ye() {
        var e, t;for (d(), e = Qe(), t = P("new") ? G() : V(); L(".") || L("[") || L("(");) L("(") ? (t = { type: lt.CallExpression, callee: t, arguments: H() }, e.end(), e.apply(t)) : L("[") ? (t = { type: lt.MemberExpression, computed: !0, object: t, property: q() }, e.end(), e.apply(t)) : (t = { type: lt.MemberExpression, computed: !1, object: t, property: z() }, e.end(), e.apply(t));return t;
      }function et(e) {
        var t, n, r;t = "[object Array]" === Object.prototype.toString.apply(e) ? [] : {};for (n in e) e.hasOwnProperty(n) && "groupRange" !== n && "groupLoc" !== n && (r = e[n], null === r || "object" != typeof r || r instanceof RegExp ? t[n] = r : t[n] = et(r));return t;
      }function tt(e, t) {
        return function (n) {
          function r(e) {
            return e.type === lt.LogicalExpression || e.type === lt.BinaryExpression;
          }function i(n) {
            var a, o;r(n.left) && i(n.left), r(n.right) && i(n.right), e && (n.left.groupRange || n.right.groupRange ? (a = n.left.groupRange ? n.left.groupRange[0] : n.left.range[0], o = n.right.groupRange ? n.right.groupRange[1] : n.right.range[1], n.range = [a, o]) : "undefined" == typeof n.range && (a = n.left.range[0], o = n.right.range[1], n.range = [a, o])), t && (n.left.groupLoc || n.right.groupLoc ? (a = n.left.groupLoc ? n.left.groupLoc.start : n.left.loc.start, o = n.right.groupLoc ? n.right.groupLoc.end : n.right.loc.end, n.loc = { start: a, end: o }) : "undefined" == typeof n.loc && (n.loc = { start: n.left.loc.start, end: n.right.loc.end }));
          }return function () {
            var a, o;return d(), a = Qe(), o = n.apply(null, arguments), a.end(), e && "undefined" == typeof o.range && a.apply(o), t && "undefined" == typeof o.loc && a.apply(o), r(o) && i(o), o;
          };
        };
      }function nt() {
        var e;_t.comments && (_t.skipComment = d, d = He), _t.raw && (_t.createLiteral = Je, Je = Ke), (_t.range || _t.loc) && (_t.parseGroupExpression = M, _t.parseLeftHandSideExpression = K, _t.parseLeftHandSideExpressionAllowCall = J, M = Xe, K = Ze, J = Ye, e = tt(_t.range, _t.loc), _t.parseAdditiveExpression = Y, _t.parseAssignmentExpression = ue, _t.parseBitwiseANDExpression = re, _t.parseBitwiseORExpression = ae, _t.parseBitwiseXORExpression = ie, _t.parseBlock = he, _t.parseFunctionSourceElements = Fe, _t.parseCatchClause = Pe, _t.parseComputedMember = q, _t.parseConditionalExpression = le, _t.parseConstLetDeclaration = ge, _t.parseEqualityExpression = ne, _t.parseExpression = ce, _t.parseForVariableDeclaration = ke, _t.parseFunctionDeclaration = De, _t.parseFunctionExpression = Re, _t.parseLogicalANDExpression = oe, _t.parseLogicalORExpression = se, _t.parseMultiplicativeExpression = Z, _t.parseNewExpression = G, _t.parseNonComputedProperty = W, _t.parseObjectProperty = B, _t.parseObjectPropertyKey = R, _t.parsePostfixExpression = Q, _t.parsePrimaryExpression = V, _t.parseProgram = Me, _t.parsePropertyFunction = D, _t.parseRelationalExpression = te, _t.parseStatement = Te, _t.parseShiftExpression = ee, _t.parseSwitchCase = Ae, _t.parseUnaryExpression = X, _t.parseVariableDeclaration = de, _t.parseVariableIdentifier = fe, Y = e(_t.parseAdditiveExpression), ue = e(_t.parseAssignmentExpression), re = e(_t.parseBitwiseANDExpression), ae = e(_t.parseBitwiseORExpression), ie = e(_t.parseBitwiseXORExpression), he = e(_t.parseBlock), Fe = e(_t.parseFunctionSourceElements), Pe = e(_t.parseCatchClause), q = e(_t.parseComputedMember), le = e(_t.parseConditionalExpression), ge = e(_t.parseConstLetDeclaration), ne = e(_t.parseEqualityExpression), ce = e(_t.parseExpression), ke = e(_t.parseForVariableDeclaration), De = e(_t.parseFunctionDeclaration), Re = e(_t.parseFunctionExpression), K = e(K), oe = e(_t.parseLogicalANDExpression), se = e(_t.parseLogicalORExpression), Z = e(_t.parseMultiplicativeExpression), G = e(_t.parseNewExpression), W = e(_t.parseNonComputedProperty), B = e(_t.parseObjectProperty), R = e(_t.parseObjectPropertyKey), Q = e(_t.parsePostfixExpression), V = e(_t.parsePrimaryExpression), Me = e(_t.parseProgram), D = e(_t.parsePropertyFunction), te = e(_t.parseRelationalExpression), Te = e(_t.parseStatement), ee = e(_t.parseShiftExpression), Ae = e(_t.parseSwitchCase), X = e(_t.parseUnaryExpression), de = e(_t.parseVariableDeclaration), fe = e(_t.parseVariableIdentifier)), "undefined" != typeof _t.tokens && (_t.advance = w, _t.scanRegExp = _, w = ze, _ = qe);
      }function rt() {
        "function" == typeof _t.skipComment && (d = _t.skipComment), _t.raw && (Je = _t.createLiteral), (_t.range || _t.loc) && (Y = _t.parseAdditiveExpression, ue = _t.parseAssignmentExpression, re = _t.parseBitwiseANDExpression, ae = _t.parseBitwiseORExpression, ie = _t.parseBitwiseXORExpression, he = _t.parseBlock, Fe = _t.parseFunctionSourceElements, Pe = _t.parseCatchClause, q = _t.parseComputedMember, le = _t.parseConditionalExpression, ge = _t.parseConstLetDeclaration, ne = _t.parseEqualityExpression, ce = _t.parseExpression, ke = _t.parseForVariableDeclaration, De = _t.parseFunctionDeclaration, Re = _t.parseFunctionExpression, M = _t.parseGroupExpression, K = _t.parseLeftHandSideExpression, J = _t.parseLeftHandSideExpressionAllowCall, oe = _t.parseLogicalANDExpression, se = _t.parseLogicalORExpression, Z = _t.parseMultiplicativeExpression, G = _t.parseNewExpression, W = _t.parseNonComputedProperty, B = _t.parseObjectProperty, R = _t.parseObjectPropertyKey, V = _t.parsePrimaryExpression, Q = _t.parsePostfixExpression, Me = _t.parseProgram, D = _t.parsePropertyFunction, te = _t.parseRelationalExpression, Te = _t.parseStatement, ee = _t.parseShiftExpression, Ae = _t.parseSwitchCase, X = _t.parseUnaryExpression, de = _t.parseVariableDeclaration, fe = _t.parseVariableIdentifier), "function" == typeof _t.scanRegExp && (w = _t.advance, _ = _t.scanRegExp);
      }function it(e) {
        var t,
            n = e.length,
            r = [];for (t = 0; t < n; ++t) r[t] = e.charAt(t);return r;
      }function at(e, t) {
        var n, r;r = String, "string" == typeof e || e instanceof String || (e = r(e)), ht = e, dt = 0, vt = ht.length > 0 ? 1 : 0, mt = 0, gt = ht.length, yt = null, bt = { allowIn: !0, labelSet: {}, inFunctionBody: !1, inIteration: !1, inSwitch: !1 }, _t = {}, "undefined" != typeof t && (_t.range = "boolean" == typeof t.range && t.range, _t.loc = "boolean" == typeof t.loc && t.loc, _t.raw = "boolean" == typeof t.raw && t.raw, "boolean" == typeof t.tokens && t.tokens && (_t.tokens = []), "boolean" == typeof t.comment && t.comment && (_t.comments = []), "boolean" == typeof t.tolerant && t.tolerant && (_t.errors = [])), gt > 0 && "undefined" == typeof ht[0] && (e instanceof String && (ht = e.valueOf()), "undefined" == typeof ht[0] && (ht = it(e))), nt();try {
          n = Me(), "undefined" != typeof _t.comments && (We(), n.comments = _t.comments), "undefined" != typeof _t.tokens && (Ge(), n.tokens = _t.tokens), "undefined" != typeof _t.errors && (n.errors = _t.errors), (_t.range || _t.loc) && (n.body = et(n.body));
        } catch (e) {
          throw e;
        } finally {
          rt(), _t = {};
        }return n;
      }var ot, st, lt, ut, ct, pt, ht, ft, dt, vt, mt, gt, yt, bt, _t;ot = { BooleanLiteral: 1, EOF: 2, Identifier: 3, Keyword: 4, NullLiteral: 5, NumericLiteral: 6, Punctuator: 7, StringLiteral: 8 }, st = {}, st[ot.BooleanLiteral] = "Boolean", st[ot.EOF] = "<end>", st[ot.Identifier] = "Identifier", st[ot.Keyword] = "Keyword", st[ot.NullLiteral] = "Null", st[ot.NumericLiteral] = "Numeric", st[ot.Punctuator] = "Punctuator", st[ot.StringLiteral] = "String", lt = { AssignmentExpression: "AssignmentExpression", ArrayExpression: "ArrayExpression", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", CatchClause: "CatchClause", ConditionalExpression: "ConditionalExpression", ContinueStatement: "ContinueStatement", DoWhileStatement: "DoWhileStatement", DebuggerStatement: "DebuggerStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ForStatement: "ForStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", FunctionExpression: "FunctionExpression", Identifier: "Identifier", IfStatement: "IfStatement", Literal: "Literal", LabeledStatement: "LabeledStatement", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", NewExpression: "NewExpression", ObjectExpression: "ObjectExpression", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", SequenceExpression: "SequenceExpression", SwitchStatement: "SwitchStatement", SwitchCase: "SwitchCase", ThisExpression: "ThisExpression", ThrowStatement: "ThrowStatement", TryStatement: "TryStatement", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement", WithStatement: "WithStatement" }, ut = { Data: 1, Get: 2, Set: 4 }, ct = { UnexpectedToken: "Unexpected token %0", UnexpectedNumber: "Unexpected number", UnexpectedString: "Unexpected string", UnexpectedIdentifier: "Unexpected identifier", UnexpectedReserved: "Unexpected reserved word", UnexpectedEOS: "Unexpected end of input", NewlineAfterThrow: "Illegal newline after throw", InvalidRegExp: "Invalid regular expression", UnterminatedRegExp: "Invalid regular expression: missing /", InvalidLHSInAssignment: "Invalid left-hand side in assignment", InvalidLHSInForIn: "Invalid left-hand side in for-in", MultipleDefaultsInSwitch: "More than one default clause in switch statement", NoCatchOrFinally: "Missing catch or finally after try", UnknownLabel: "Undefined label '%0'", Redeclaration: "%0 '%1' has already been declared", IllegalContinue: "Illegal continue statement", IllegalBreak: "Illegal break statement", IllegalReturn: "Illegal return statement", StrictModeWith: "Strict mode code may not include a with statement", StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode", StrictVarName: "Variable name may not be eval or arguments in strict mode", StrictParamName: "Parameter name eval or arguments is not allowed in strict mode", StrictParamDupe: "Strict mode function may not have duplicate parameter names", StrictFunctionName: "Function name may not be eval or arguments in strict mode", StrictOctalLiteral: "Octal literals are not allowed in strict mode.", StrictDelete: "Delete of an unqualified identifier in strict mode.", StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode", AccessorDataProperty: "Object literal may not have data and accessor property with the same name", AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name", StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode", StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode", StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode", StrictReservedWord: "Use of future reserved word in strict mode" }, pt = { NonAsciiIdentifierStart: new RegExp("[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"), NonAsciiIdentifierPart: new RegExp("[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]") }, "undefined" == typeof "esprima"[0] && (n = function (e, t) {
        return ht.slice(e, t).join("");
      }), e.version = "1.0.4", e.parse = at, e.Syntax = function () {
        var e,
            t = {};"function" == typeof Object.create && (t = Object.create(null));for (e in lt) lt.hasOwnProperty(e) && (t[e] = lt[e]);
        return "function" == typeof Object.freeze && Object.freeze(t), t;
      }();
    }), e.exports;
  }({ exports: {} }),
      oi = function (e, t) {
    function n(e, t) {
      var n = i(e),
          r = Object.create(t || {});return f(a(n, r));
    }function r(e) {
      var t = Object.create(e || {});return function () {
        var e = Array.prototype.slice.call(arguments),
            n = e.slice(-1)[0];e = e.slice(0, -1), "string" == typeof n && (n = m("function a(){" + n + "}").body[0].body);var r = i(n);return h(r, e, t);
      };
    }function i(e) {
      var t = "string" == typeof e ? m(e) : e;return g(t);
    }function a(e, t) {
      function n(e) {
        for (var t = void 0, n = 0; n < e.length; n++) {
          var r = e[n];if ("EmptyStatement" !== r.type && (t = i(r), t instanceof v)) return t;
        }return t;
      }function i(e) {
        if (e) switch (e.type) {case "Program":
            return n(e.body);case "BlockStatement":
            u();var r = n(e.body);return c(), r;case "FunctionDeclaration":
            var s = e.params.map(d),
                p = h(e.body, s, w);return t[e.id.name] = p;case "FunctionExpression":
            var s = e.params.map(d);return h(e.body, s, w);case "ReturnStatement":
            var p = i(e.argument);return new v("return", p);case "BreakStatement":
            return new v("break");case "ContinueStatement":
            return new v("continue");case "ExpressionStatement":
            return i(e.expression);case "AssignmentExpression":
            return m(w, e.left, e.right, e.operator);case "UpdateExpression":
            return m(w, e.argument, null, e.operator);case "VariableDeclaration":
            e.declarations.forEach(function (n) {
              var r = "let" === e.kind ? w : t;n.init ? r[n.id.name] = i(n.init) : r[n.id.name] = void 0;
            });break;case "SwitchStatement":
            var g = null,
                b = !1,
                p = i(e.discriminant),
                r = void 0;u();for (var k = 0; null == r;) if (k < e.cases.length) {
              if (e.cases[k].test ? b = b || i(e.cases[k].test) === p : null == g && (g = k), b) {
                var S = n(e.cases[k].consequent);if (S instanceof v) {
                  if ("break" == S.type) break;r = S;
                }
              }k += 1;
            } else {
              if (b || null == g) break;k = g, b = !0;
            }return c(), r;case "IfStatement":
            if (i(e.test)) return i(e.consequent);if (e.alternate) return i(e.alternate);case "ForStatement":
            var C = y(_),
                r = void 0;for (u(), i(e.init); i(e.test); i(e.update)) {
              var S = i(e.body);if (S instanceof v) {
                if ("continue" == S.type) continue;if ("break" == S.type) break;r = S;break;
              }C.check();
            }return c(), r;case "ForInStatement":
            var C = y(_),
                r = void 0,
                p = i(e.right),
                E = e.left,
                $ = t;u(), "VariableDeclaration" == E.type && (i(E), E = E.declarations[0].id, "let" === E.kind && ($ = w));for (var O in p) {
              m($, E, { type: "Literal", value: O });var S = i(e.body);if (S instanceof v) {
                if ("continue" == S.type) continue;if ("break" == S.type) break;r = S;break;
              }C.check();
            }return c(), r;case "WhileStatement":
            for (var C = y(_); i(e.test);) i(e.body), C.check();break;case "TryStatement":
            try {
              i(e.block);
            } catch (t) {
              u();var A = e.handlers[0];A && (w[A.param.name] = t, i(A.body)), c();
            } finally {
              e.finalizer && i(e.finalizer);
            }break;case "Literal":
            return e.value;case "UnaryExpression":
            var N = i(e.argument);switch (e.operator) {case "+":
                return +N;case "-":
                return -N;case "~":
                return ~N;case "!":
                return !N;case "typeof":
                return typeof N;default:
                return o(e);}case "ArrayExpression":
            for (var L = w.Array(), k = 0; k < e.elements.length; k++) L.push(i(e.elements[k]));return L;case "ObjectExpression":
            for (var L = w.Object(), k = 0; k < e.properties.length; k++) {
              var P = e.properties[k],
                  p = null === P.value ? P.value : i(P.value);L[P.key.value || P.key.name] = p;
            }return L;case "NewExpression":
            var I = e.arguments.map(function (e) {
              return i(e);
            }),
                $ = i(e.callee);return x.applyNew($, I);case "BinaryExpression":
            var j = i(e.left),
                S = i(e.right);switch (e.operator) {case "==":
                return j === S;case "===":
                return j === S;case "!=":
                return j != S;case "!==":
                return j !== S;case "+":
                return j + S;case "-":
                return j - S;case "*":
                return j * S;case "/":
                return j / S;case "%":
                return j % S;case "<":
                return j < S;case "<=":
                return j <= S;case ">":
                return j > S;case ">=":
                return j >= S;case "|":
                return j | S;case "&":
                return j & S;case "^":
                return j ^ S;case "instanceof":
                return j instanceof S;default:
                return o(e);}case "LogicalExpression":
            switch (e.operator) {case "&&":
                return i(e.left) && i(e.right);case "||":
                return i(e.left) || i(e.right);default:
                return o(e);}case "ThisExpression":
            return w.this;case "Identifier":
            if ("undefined" === e.name) return;if (l(w, e.name, x)) return f(w[e.name]);throw new ReferenceError(e.name + " is not defined");case "CallExpression":
            var I = e.arguments.map(function (e) {
              return i(e);
            }),
                T = null,
                $ = i(e.callee);return "MemberExpression" === e.callee.type && (T = i(e.callee.object)), $.apply(T, I);case "MemberExpression":
            var L = i(e.object);if (e.computed) var P = i(e.property);else var P = e.property.name;return L = x.getPropertyObject(L, P), a(L[P]);case "ConditionalExpression":
            var N = i(e.test);return i(N ? e.consequent : e.alternate);case "EmptyStatement":
            return;default:
            return o(e);}
      }function a(e) {
        return e === si && (e = g), f(e);
      }function u() {
        w = Object.create(w);
      }function c() {
        w = Object.getPrototypeOf(w);
      }function m(e, t, n, r) {
        var a = null;if ("Identifier" === t.type ? (a = t.name, e = s(e, a, x)) : "MemberExpression" === t.type && (a = t.computed ? i(t.property) : t.property.name, e = i(t.object)), p(e, a, x)) switch (r) {case void 0:
            return e[a] = i(n);case "=":
            return e[a] = i(n);case "+=":
            return e[a] += i(n);case "-=":
            return e[a] -= i(n);case "++":
            return e[a]++;case "--":
            return e[a]--;}
      }var g = r(t),
          x = b(t),
          w = t;return i(e);
    }function o(e) {
      console.error(e);var t = new Error("Unsupported expression: " + e.type);throw t.node = e, t;
    }function s(e, t, n) {
      var r = n.getPrototypeOf(e);return !r || u(e, t) ? e : s(r, t, n);
    }function l(e, t, n) {
      var r = n.getPrototypeOf(e),
          i = u(e, t);return void 0 !== e[t] || (!r || i ? i : l(r, t, n));
    }function u(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }function c(e, t) {
      return Object.prototype.propertyIsEnumerable.call(e, t);
    }function p(e, t, n) {
      return "__proto__" !== t && !n.isPrimitive(e) && (null == e || (u(e, t) ? !!c(e, t) : p(n.getPrototypeOf(e), t, n)));
    }function h(e, n, r) {
      return function () {
        var i = Object.create(r);this == t ? i.this = null : i.this = this;var o = Array.prototype.slice.call(arguments);i.arguments = arguments, o.forEach(function (e, t) {
          var r = n[t];r && (i[r] = e);
        });var s = a(e, i);if (s instanceof v) return s.value;
      };
    }function f(e) {
      return e instanceof v ? e.value : e;
    }function d(e) {
      return e.name;
    }function v(e, t) {
      this.type = e, this.value = t;
    }var m = (e.exports, ai.parse),
        g = ii,
        y = ri,
        b = ni;e.exports = n, e.exports.FunctionFactory = r, e.exports.Function = r();var _ = 1e6;return e.exports;
  }({ exports: {} }, ti),
      si = oi.Function,
      li = new S(1e3),
      ui = 0,
      ci = 1,
      pi = 2,
      hi = 3,
      fi = 0,
      di = 1,
      vi = 2,
      mi = 3,
      gi = 4,
      yi = 5,
      bi = 6,
      _i = 7,
      xi = 8,
      wi = [];wi[fi] = { ws: [fi], ident: [mi, ui], "[": [gi], eof: [_i] }, wi[di] = { ws: [di], ".": [vi], "[": [gi], eof: [_i] }, wi[vi] = { ws: [vi], ident: [mi, ui] }, wi[mi] = { ident: [mi, ui], 0: [mi, ui], number: [mi, ui], ws: [di, ci], ".": [vi, ci], "[": [gi, ci], eof: [_i, ci] }, wi[gi] = { "'": [yi, ui], '"': [bi, ui], "[": [gi, pi], "]": [di, hi], eof: xi, else: [gi, ui] }, wi[yi] = { "'": [gi, ui], eof: xi, else: [yi, ui] }, wi[bi] = { '"': [gi, ui], eof: xi, else: [bi, ui] };var ki = Object.freeze({ parsePath: Ve, getPath: He, setPath: We }),
      Si = new S(1e3),
      Ci = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
      Ei = new RegExp("^(" + Ci.replace(/,/g, "\\b|") + "\\b)"),
      $i = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",
      Oi = new RegExp("^(" + $i.replace(/,/g, "\\b|") + "\\b)"),
      Ai = /\s/g,
      Ni = /\n/g,
      Li = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,
      Pi = /"(\d+)"/g,
      Ii = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
      ji = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
      Ti = /^(?:true|false|null|undefined|Infinity|NaN)$/,
      Fi = [],
      Di = Object.freeze({ parseExpression: Ze, isSimplePath: Ye }),
      Ri = [],
      Bi = [],
      Ui = {},
      Mi = {},
      Vi = !1,
      Hi = 0;it.prototype.get = function () {
    this.beforeGet();var e,
        t = this.scope || this.vm;try {
      e = this.getter.call(t, t);
    } catch (e) {}return this.deep && at(e), this.preProcess && (e = this.preProcess(e)), this.filters && (e = t._applyFilters(e, null, this.filters, !1)), this.postProcess && (e = this.postProcess(e)), this.afterGet(), e;
  }, it.prototype.set = function (e) {
    var t = this.scope || this.vm;this.filters && (e = t._applyFilters(e, this.value, this.filters, !0));try {
      this.setter.call(t, t, e);
    } catch (e) {}var n = t.$forContext;if (n && n.alias === this.expression) {
      if (n.filters) return;n._withLock(function () {
        t.$key ? n.rawValue[t.$key] = e : n.rawValue.$set(t.$index, e);
      });
    }
  }, it.prototype.beforeGet = function () {
    Le.target = this;
  }, it.prototype.addDep = function (e) {
    var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
  }, it.prototype.afterGet = function () {
    Le.target = null;for (var e = this.deps.length; e--;) {
      var t = this.deps[e];this.newDepIds.has(t.id) || t.removeSub(this);
    }var n = this.depIds;this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
  }, it.prototype.update = function (e) {
    this.lazy ? this.dirty = !0 : this.sync || !Ur.async ? this.run() : (this.shallow = this.queued ? !!e && this.shallow : !!e, this.queued = !0, rt(this));
  }, it.prototype.run = function () {
    if (this.active) {
      var e = this.get();if (e !== this.value || (m(e) || this.deep) && !this.shallow) {
        var t = this.value;this.value = e;this.prevError;this.cb.call(this.vm, e, t);
      }this.queued = this.shallow = !1;
    }
  }, it.prototype.evaluate = function () {
    var e = Le.target;this.value = this.get(), this.dirty = !1, Le.target = e;
  }, it.prototype.depend = function () {
    for (var e = this.deps.length; e--;) this.deps[e].depend();
  }, it.prototype.teardown = function () {
    if (this.active) {
      this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);this.active = !1, this.vm = this.cb = this.value = null;
    }
  };var Wi = new cr(),
      zi = { bind: function () {
      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
    }, update: function (e) {
      this.el[this.attr] = a(e);
    } },
      qi = new S(1e3),
      Gi = new S(1e3),
      Ji = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };Ji.td = Ji.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Ji.option = Ji.optgroup = [1, '<select multiple="multiple">', "</select>"], Ji.thead = Ji.tbody = Ji.colgroup = Ji.caption = Ji.tfoot = [1, "<table>", "</table>"], Ji.g = Ji.defs = Ji.symbol = Ji.use = Ji.image = Ji.text = Ji.circle = Ji.ellipse = Ji.line = Ji.path = Ji.polygon = Ji.polyline = Ji.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var Ki = /<([\w:-]+)/,
      Qi = /&#?\w+?;/,
      Xi = /<!--/,
      Zi = function () {
    if (Qn) {
      var e = document.createElement("div");return e.innerHTML = "<template>1</template>", !e.cloneNode(!0).firstChild.innerHTML;
    }return !1;
  }(),
      Yi = function () {
    if (Qn) {
      var e = document.createElement("textarea");return e.placeholder = "t", "t" === e.cloneNode(!0).value;
    }return !1;
  }(),
      ea = Object.freeze({ cloneNode: ut, parseTemplate: ct }),
      ta = { bind: function () {
      8 === this.el.nodeType && (this.nodes = [], this.anchor = me("v-html"), ae(this.el, this.anchor));
    }, update: function (e) {
      e = a(e), this.nodes ? this.swap(e) : this.el.innerHTML = e;
    }, swap: function (e) {
      for (var t = this.nodes.length; t--;) re(this.nodes[t]);var n = ct(e, !0, !0);this.nodes = d(n.childNodes), te(n, this.anchor);
    } };pt.prototype.callHook = function (e) {
    var t, n;for (t = 0, n = this.childFrags.length; t < n; t++) this.childFrags[t].callHook(e);for (t = 0, n = this.children.length; t < n; t++) e(this.children[t]);
  }, pt.prototype.beforeRemove = function () {
    var e, t;for (e = 0, t = this.childFrags.length; e < t; e++) this.childFrags[e].beforeRemove(!1);for (e = 0, t = this.children.length; e < t; e++) this.children[e].$destroy(!1, !0);var n = this.unlink.dirs;for (e = 0, t = n.length; e < t; e++) n[e]._watcher && n[e]._watcher.teardown();
  }, pt.prototype.destroy = function () {
    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__v_frag = null, this.unlink();
  };var na = new S(5e3);yt.prototype.create = function (e, t, n) {
    var r = ut(this.template);return new pt(this.linker, this.vm, r, e, t, n);
  };var ra = 700,
      ia = 800,
      aa = 850,
      oa = 1100,
      sa = 1500,
      la = 1500,
      ua = 1750,
      ca = 2100,
      pa = 2200,
      ha = 2300,
      fa = 0,
      da = { priority: pa, terminal: !0, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function () {
      var e = this.expression.match(/(.*) (?:in|of) (.*)/);if (e) {
        var t = e[1].match(/\((.*),(.*)\)/);t ? (this.iterator = t[1].trim(), this.alias = t[2].trim()) : this.alias = e[1].trim(), this.expression = e[2];
      }if (this.alias) {
        this.id = "__v-for__" + ++fa;var n = this.el.tagName;this.isOption = ("OPTION" === n || "OPTGROUP" === n) && "SELECT" === this.el.parentNode.tagName, this.start = me("v-for-start"), this.end = me("v-for-end"), ae(this.el, this.end), te(this.start, this.end), this.cache = Object.create(null), this.factory = new yt(this.vm, this.el);
      }
    }, update: function (e) {
      this.diff(e), this.updateRef(), this.updateModel();
    }, diff: function (e) {
      var t,
          r,
          i,
          a,
          o,
          s,
          l = e[0],
          u = this.fromObject = m(l) && n(l, "$key") && n(l, "$value"),
          c = this.params.trackBy,
          p = this.frags,
          h = this.frags = new Array(e.length),
          f = this.alias,
          d = this.iterator,
          v = this.start,
          g = this.end,
          y = X(v),
          b = !p;for (t = 0, r = e.length; t < r; t++) l = e[t], a = u ? l.$key : null, o = u ? l.$value : l, s = !m(o), i = !b && this.getCachedFrag(o, t, a), i ? (i.reused = !0, i.scope.$index = t, a && (i.scope.$key = a), d && (i.scope[d] = null !== a ? a : t), (c || u || s) && Pe(function () {
        i.scope[f] = o;
      })) : (i = this.create(o, f, t, a), i.fresh = !b), h[t] = i, b && i.before(g);if (!b) {
        var _ = 0,
            x = p.length - h.length;for (this.vm._vForRemoving = !0, t = 0, r = p.length; t < r; t++) i = p[t], i.reused || (this.deleteCachedFrag(i), this.remove(i, _++, x, y));this.vm._vForRemoving = !1, _ && (this.vm._watchers = this.vm._watchers.filter(function (e) {
          return e.active;
        }));var w,
            k,
            S,
            C = 0;for (t = 0, r = h.length; t < r; t++) i = h[t], w = h[t - 1], k = w ? w.staggerCb ? w.staggerAnchor : w.end || w.node : v, i.reused && !i.staggerCb ? (S = bt(i, v, this.id), S === w || S && bt(S, v, this.id) === w || this.move(i, k)) : this.insert(i, C++, k, y), i.reused = i.fresh = !1;
      }
    }, create: function (e, t, n, r) {
      var i = this._host,
          a = this._scope || this.vm,
          o = Object.create(a);o.$refs = Object.create(a.$refs), o.$els = Object.create(a.$els), o.$parent = a, o.$forContext = this, Pe(function () {
        De(o, t, e);
      }), De(o, "$index", n), r ? De(o, "$key", r) : o.$key && y(o, "$key", null), this.iterator && De(o, this.iterator, null !== r ? r : n);var s = this.factory.create(i, o, this._frag);return s.forId = this.id, this.cacheFrag(e, s, n, r), s;
    }, updateRef: function () {
      var e = this.descriptor.ref;if (e) {
        var t,
            n = (this._scope || this.vm).$refs;this.fromObject ? (t = {}, this.frags.forEach(function (e) {
          t[e.scope.$key] = wt(e);
        })) : t = this.frags.map(wt), n[e] = t;
      }
    }, updateModel: function () {
      if (this.isOption) {
        var e = this.start.parentNode,
            t = e && e.__v_model;t && t.forceUpdate();
      }
    }, insert: function (e, t, n, r) {
      e.staggerCb && (e.staggerCb.cancel(), e.staggerCb = null);var i = this.getStagger(e, t, null, "enter");if (r && i) {
        var a = e.staggerAnchor;a || (a = e.staggerAnchor = me("stagger-anchor"), a.__v_frag = e), ne(a, n);var o = e.staggerCb = x(function () {
          e.staggerCb = null, e.before(a), re(a);
        });setTimeout(o, i);
      } else {
        var s = n.nextSibling;s || (ne(this.end, n), s = this.end), e.before(s);
      }
    }, remove: function (e, t, n, r) {
      if (e.staggerCb) return e.staggerCb.cancel(), void (e.staggerCb = null);var i = this.getStagger(e, t, n, "leave");if (r && i) {
        var a = e.staggerCb = x(function () {
          e.staggerCb = null, e.remove();
        });setTimeout(a, i);
      } else e.remove();
    }, move: function (e, t) {
      t.nextSibling || this.end.parentNode.appendChild(this.end), e.before(t.nextSibling, !1);
    }, cacheFrag: function (e, t, r, i) {
      var a,
          o = this.params.trackBy,
          s = this.cache,
          l = !m(e);i || o || l ? (a = xt(r, i, e, o), s[a] || (s[a] = t)) : (a = this.id, n(e, a) ? null === e[a] && (e[a] = t) : Object.isExtensible(e) && y(e, a, t)), t.raw = e;
    }, getCachedFrag: function (e, t, n) {
      var r,
          i = this.params.trackBy,
          a = !m(e);if (n || i || a) {
        var o = xt(t, n, e, i);r = this.cache[o];
      } else r = e[this.id];return r && (r.reused || r.fresh), r;
    }, deleteCachedFrag: function (e) {
      var t = e.raw,
          r = this.params.trackBy,
          i = e.scope,
          a = i.$index,
          o = n(i, "$key") && i.$key,
          s = !m(t);if (r || o || s) {
        var l = xt(a, o, t, r);this.cache[l] = null;
      } else t[this.id] = null, e.raw = null;
    }, getStagger: function (e, t, n, r) {
      r += "Stagger";var i = e.node.__v_trans,
          a = i && i.hooks,
          o = a && (a[r] || a.stagger);return o ? o.call(e, t, n) : t * parseInt(this.params[r] || this.params.stagger, 10);
    }, _preProcess: function (e) {
      return this.rawValue = e, e;
    }, _postProcess: function (e) {
      if (Jn(e)) return e;if (g(e)) {
        for (var t, n = Object.keys(e), r = n.length, i = new Array(r); r--;) t = n[r], i[r] = { $key: t, $value: e[t] };return i;
      }return "number" != typeof e || isNaN(e) || (e = _t(e)), e || [];
    }, unbind: function () {
      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var e, t = this.frags.length; t--;) e = this.frags[t], this.deleteCachedFrag(e), e.destroy();
    } },
      va = { priority: ca, terminal: !0, bind: function () {
      var e = this.el;if (e.__vue__) this.invalid = !0;else {
        var t = e.nextElementSibling;t && null !== Z(t, "v-else") && (re(t), this.elseEl = t), this.anchor = me("v-if"), ae(e, this.anchor);
      }
    }, update: function (e) {
      this.invalid || (e ? this.frag || this.insert() : this.remove());
    }, insert: function () {
      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.factory || (this.factory = new yt(this.vm, this.el)), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
    }, remove: function () {
      this.frag && (this.frag.remove(), this.frag = null), this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new yt(this.elseEl._context || this.vm, this.elseEl)), this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
    }, unbind: function () {
      this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy();
    } },
      ma = { bind: function () {
      var e = this.el.nextElementSibling;e && null !== Z(e, "v-else") && (this.elseEl = e);
    }, update: function (e) {
      this.apply(this.el, e), this.elseEl && this.apply(this.elseEl, !e);
    }, apply: function (e, t) {
      function n() {
        e.style.display = t ? "" : "none";
      }X(e) ? K(e, t ? 1 : -1, n, this.vm) : n();
    } },
      ga = { bind: function () {
      var e = this,
          t = this.el,
          n = "range" === t.type,
          r = this.params.lazy,
          i = this.params.number,
          a = this.params.debounce,
          s = !1;if (tr || n || (this.on("compositionstart", function () {
        s = !0;
      }), this.on("compositionend", function () {
        s = !1, r || e.listener();
      })), this.focused = !1, n || r || (this.on("focus", function () {
        e.focused = !0;
      }), this.on("blur", function () {
        e.focused = !1, e._frag && !e._frag.inserted || e.rawListener();
      })), this.listener = this.rawListener = function () {
        if (!s && e._bound) {
          var r = i || n ? o(t.value) : t.value;e.set(r), ur(function () {
            e._bound && !e.focused && e.update(e._watcher.value);
          });
        }
      }, a && (this.listener = b(this.listener, a)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
        var l = jQuery.fn.on ? "on" : "bind";jQuery(t)[l]("change", this.rawListener), r || jQuery(t)[l]("input", this.listener);
      } else this.on("change", this.rawListener), r || this.on("input", this.listener);!r && er && (this.on("cut", function () {
        ur(e.listener);
      }), this.on("keyup", function (t) {
        46 !== t.keyCode && 8 !== t.keyCode || e.listener();
      })), (t.hasAttribute("value") || "TEXTAREA" === t.tagName && t.value.trim()) && (this.afterBind = this.listener);
    }, update: function (e) {
      e = a(e), e !== this.el.value && (this.el.value = e);
    }, unbind: function () {
      var e = this.el;if (this.hasjQuery) {
        var t = jQuery.fn.off ? "off" : "unbind";jQuery(e)[t]("change", this.listener), jQuery(e)[t]("input", this.listener);
      }
    } },
      ya = { bind: function () {
      var e = this,
          t = this.el;this.getValue = function () {
        if (t.hasOwnProperty("_value")) return t._value;var n = t.value;return e.params.number && (n = o(n)), n;
      }, this.listener = function () {
        e.set(e.getValue());
      }, this.on("change", this.listener), t.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function (e) {
      this.el.checked = w(e, this.getValue());
    } },
      ba = { bind: function () {
      var e = this,
          t = this,
          n = this.el;this.forceUpdate = function () {
        t._watcher && t.update(t._watcher.get());
      };var r = this.multiple = n.hasAttribute("multiple");this.listener = function () {
        var e = kt(n, r);e = t.params.number ? Jn(e) ? e.map(o) : o(e) : e, t.set(e);
      }, this.on("change", this.listener);var i = kt(n, r, !0);(r && i.length || !r && null !== i) && (this.afterBind = this.listener), this.vm.$on("hook:attached", function () {
        ur(e.forceUpdate);
      }), X(n) || ur(this.forceUpdate);
    }, update: function (e) {
      var t = this.el;t.selectedIndex = -1;for (var n, r, i = this.multiple && Jn(e), a = t.options, o = a.length; o--;) n = a[o], r = n.hasOwnProperty("_value") ? n._value : n.value, n.selected = i ? St(e, r) > -1 : w(e, r);
    }, unbind: function () {
      this.vm.$off("hook:attached", this.forceUpdate);
    } },
      _a = { bind: function () {
      function e() {
        var e = n.checked;return e && n.hasOwnProperty("_trueValue") ? n._trueValue : !e && n.hasOwnProperty("_falseValue") ? n._falseValue : e;
      }var t = this,
          n = this.el;this.getValue = function () {
        return n.hasOwnProperty("_value") ? n._value : t.params.number ? o(n.value) : n.value;
      }, this.listener = function () {
        var r = t._watcher.get();if (Jn(r)) {
          var i = t.getValue(),
              a = _(r, i);n.checked ? a < 0 && t.set(r.concat(i)) : a > -1 && t.set(r.slice(0, a).concat(r.slice(a + 1)));
        } else t.set(e());
      }, this.on("change", this.listener), n.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function (e) {
      var t = this.el;Jn(e) ? t.checked = _(e, this.getValue()) > -1 : t.hasOwnProperty("_trueValue") ? t.checked = w(e, t._trueValue) : t.checked = !!e;
    } },
      xa = { text: ga, radio: ya, select: ba, checkbox: _a },
      wa = { priority: ia, twoWay: !0, handlers: xa, params: ["lazy", "number", "debounce"], bind: function () {
      this.checkFilters(), this.hasRead && !this.hasWrite;var e,
          t = this.el,
          n = t.tagName;if ("INPUT" === n) e = xa[t.type] || xa.text;else if ("SELECT" === n) e = xa.select;else {
        if ("TEXTAREA" !== n) return;e = xa.text;
      }t.__v_model = this, e.bind.call(this), this.update = e.update, this._unbind = e.unbind;
    }, checkFilters: function () {
      var e = this.filters;if (e) for (var t = e.length; t--;) {
        var n = Ne(this.vm.$options, "filters", e[t].name);("function" == typeof n || n.read) && (this.hasRead = !0), n.write && (this.hasWrite = !0);
      }
    }, unbind: function () {
      this.el.__v_model = null, this._unbind && this._unbind();
    } },
      ka = { esc: 27, tab: 9, enter: 13, space: 32, delete: [8, 46], up: 38, left: 37, right: 39, down: 40 },
      Sa = { priority: ra, acceptStatement: !0, keyCodes: ka, bind: function () {
      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
        var e = this;this.iframeBind = function () {
          oe(e.el.contentWindow, e.arg, e.handler, e.modifiers.capture);
        }, this.on("load", this.iframeBind);
      }
    }, update: function (e) {
      if (this.descriptor.raw || (e = function () {}), "function" == typeof e) {
        this.modifiers.stop && (e = Et(e)), this.modifiers.prevent && (e = $t(e)), this.modifiers.self && (e = Ot(e));var t = Object.keys(this.modifiers).filter(function (e) {
          return "stop" !== e && "prevent" !== e && "self" !== e && "capture" !== e;
        });t.length && (e = Ct(e, t)), this.reset(), this.handler = e, this.iframeBind ? this.iframeBind() : oe(this.el, this.arg, this.handler, this.modifiers.capture);
      }
    }, reset: function () {
      var e = this.iframeBind ? this.el.contentWindow : this.el;this.handler && se(e, this.arg, this.handler);
    }, unbind: function () {
      this.reset();
    } },
      Ca = ["-webkit-", "-moz-", "-ms-"],
      Ea = ["Webkit", "Moz", "ms"],
      $a = /!important;?$/,
      Oa = Object.create(null),
      Aa = null,
      Na = { deep: !0, update: function (e) {
      "string" == typeof e ? this.el.style.cssText = e : Jn(e) ? this.handleObject(e.reduce(v, {})) : this.handleObject(e || {});
    }, handleObject: function (e) {
      var t,
          n,
          r = this.cache || (this.cache = {});for (t in r) t in e || (this.handleSingle(t, null), delete r[t]);for (t in e) n = e[t], n !== r[t] && (r[t] = n, this.handleSingle(t, n));
    }, handleSingle: function (e, t) {
      if (e = At(e)) if (null != t && (t += ""), t) {
        var n = $a.test(t) ? "important" : "";n ? (t = t.replace($a, "").trim(), this.el.style.setProperty(e.kebab, t, n)) : this.el.style[e.camel] = t;
      } else this.el.style[e.camel] = "";
    } },
      La = "http://www.w3.org/1999/xlink",
      Pa = /^xlink:/,
      Ia = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
      ja = /^(?:value|checked|selected|muted)$/,
      Ta = /^(?:draggable|contenteditable|spellcheck)$/,
      Fa = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
      Da = { priority: aa, bind: function () {
      var e = this.arg,
          t = this.el.tagName;e || (this.deep = !0);var n = this.descriptor,
          r = n.interp;r && (n.hasOneTime && (this.expression = H(r, this._scope || this.vm)), (Ia.test(e) || "name" === e && ("PARTIAL" === t || "SLOT" === t)) && (this.el.removeAttribute(e), this.invalid = !0));
    }, update: function (e) {
      if (!this.invalid) {
        var t = this.arg;this.arg ? this.handleSingle(t, e) : this.handleObject(e || {});
      }
    }, handleObject: Na.handleObject, handleSingle: function (e, t) {
      var n = this.el,
          r = this.descriptor.interp;if (this.modifiers.camel && (e = u(e)), !r && ja.test(e) && e in n) {
        var i = "value" === e && null == t ? "" : t;n[e] !== i && (n[e] = i);
      }var a = Fa[e];if (!r && a) {
        n[a] = t;var o = n.__v_model;o && o.listener();
      }return "value" === e && "TEXTAREA" === n.tagName ? void n.removeAttribute(e) : void (Ta.test(e) ? n.setAttribute(e, t ? "true" : "false") : null != t && t !== !1 ? "class" === e ? (n.__v_trans && (t += " " + n.__v_trans.id + "-transition"), ue(n, t)) : Pa.test(e) ? n.setAttributeNS(La, e, t === !0 ? "" : t) : n.setAttribute(e, t === !0 ? "" : t) : n.removeAttribute(e));
    } },
      Ra = { priority: sa, bind: function () {
      if (this.arg) {
        var e = this.id = u(this.arg),
            t = (this._scope || this.vm).$els;n(t, e) ? t[e] = this.el : De(t, e, this.el);
      }
    }, unbind: function () {
      var e = (this._scope || this.vm).$els;e[this.id] === this.el && (e[this.id] = null);
    } },
      Ba = { bind: function () {} },
      Ua = { bind: function () {
      var e = this.el;this.vm.$once("pre-hook:compiled", function () {
        e.removeAttribute("v-cloak");
      });
    } },
      Ma = { text: zi, html: ta, for: da, if: va, show: ma, model: wa, on: Sa, bind: Da, el: Ra, ref: Ba, cloak: Ua },
      Va = { deep: !0, update: function (e) {
      e ? "string" == typeof e ? this.setClass(e.trim().split(/\s+/)) : this.setClass(Lt(e)) : this.cleanup();
    }, setClass: function (e) {
      this.cleanup(e);for (var t = 0, n = e.length; t < n; t++) {
        var r = e[t];r && Pt(this.el, r, ce);
      }this.prevKeys = e;
    }, cleanup: function (e) {
      var t = this.prevKeys;if (t) for (var n = t.length; n--;) {
        var r = t[n];(!e || e.indexOf(r) < 0) && Pt(this.el, r, pe);
      }
    } },
      Ha = { priority: la, params: ["keep-alive", "transition-mode", "inline-template"], bind: function () {
      this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = he(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = me("v-component"), ae(this.el, this.anchor), this.el.removeAttribute("is"), this.el.removeAttribute(":is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + p(this.descriptor.ref)), this.literal && this.setComponent(this.expression));
    }, update: function (e) {
      this.literal || this.setComponent(e);
    }, setComponent: function (e, t) {
      if (this.invalidatePending(), e) {
        var n = this;this.resolveComponent(e, function () {
          n.mountComponent(t);
        });
      } else this.unbuild(!0), this.remove(this.childVM, t), this.childVM = null;
    }, resolveComponent: function (e, t) {
      var n = this;this.pendingComponentCb = x(function (r) {
        n.ComponentName = r.options.name || ("string" == typeof e ? e : null), n.Component = r, t();
      }), this.vm._resolveComponent(e, this.pendingComponentCb);
    }, mountComponent: function (e) {
      this.unbuild(!0);var t = this,
          n = this.Component.options.activate,
          r = this.getCached(),
          i = this.build();n && !r ? (this.waitingFor = i, It(n, i, function () {
        t.waitingFor === i && (t.waitingFor = null, t.transition(i, e));
      })) : (r && i._updateRef(), this.transition(i, e));
    }, invalidatePending: function () {
      this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null);
    }, build: function (e) {
      var t = this.getCached();if (t) return t;if (this.Component) {
        var n = { name: this.ComponentName, el: ut(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };e && v(n, e);var r = new this.Component(n);return this.keepAlive && (this.cache[this.Component.cid] = r), r;
      }
    }, getCached: function () {
      return this.keepAlive && this.cache[this.Component.cid];
    }, unbuild: function (e) {
      this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(), this.waitingFor = null);var t = this.childVM;return !t || this.keepAlive ? void (t && (t._inactive = !0, t._updateRef(!0))) : void t.$destroy(!1, e);
    }, remove: function (e, t) {
      var n = this.keepAlive;if (e) {
        this.pendingRemovals++, this.pendingRemovalCb = t;var r = this;e.$remove(function () {
          r.pendingRemovals--, n || e._cleanup(), !r.pendingRemovals && r.pendingRemovalCb && (r.pendingRemovalCb(), r.pendingRemovalCb = null);
        });
      } else t && t();
    }, transition: function (e, t) {
      var n = this,
          r = this.childVM;switch (r && (r._inactive = !0), e._inactive = !1, this.childVM = e, n.params.transitionMode) {case "in-out":
          e.$before(n.anchor, function () {
            n.remove(r, t);
          });break;case "out-in":
          n.remove(r, function () {
            e.$before(n.anchor, t);
          });break;default:
          n.remove(r), e.$before(n.anchor, t);}
    }, unbind: function () {
      if (this.invalidatePending(), this.unbuild(), this.cache) {
        for (var e in this.cache) this.cache[e].$destroy();this.cache = null;
      }
    } },
      Wa = Ur._propBindingModes,
      za = {},
      qa = /^[$_a-zA-Z]+[\w$]*$/,
      Ga = Ur._propBindingModes,
      Ja = { bind: function () {
      var e = this.vm,
          t = e._context,
          n = this.descriptor.prop,
          r = n.path,
          i = n.parentPath,
          a = n.mode === Ga.TWO_WAY,
          o = this.parentWatcher = new it(t, i, function (t) {
        Rt(e, n, t);
      }, { twoWay: a, filters: n.filters, scope: this._scope });if (Dt(e, n, o.value), a) {
        var s = this;e.$once("pre-hook:created", function () {
          s.childWatcher = new it(e, r, function (e) {
            o.set(e);
          }, { sync: !0 });
        });
      }
    }, unbind: function () {
      this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown();
    } },
      Ka = [],
      Qa = !1,
      Xa = "transition",
      Za = "animation",
      Ya = rr + "Duration",
      eo = ar + "Duration",
      to = Qn && window.requestAnimationFrame,
      no = to ? function (e) {
    to(function () {
      to(e);
    });
  } : function (e) {
    setTimeout(e, 50);
  },
      ro = zt.prototype;ro.enter = function (e, t) {
    this.cancelPending(), this.callHook("beforeEnter"), this.cb = t, ce(this.el, this.enterClass), e(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, Ht(this.enterNextTick));
  }, ro.enterNextTick = function () {
    var e = this;this.justEntered = !0, no(function () {
      e.justEntered = !1;
    });var t = this.enterDone,
        n = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? n === Xa && pe(this.el, this.enterClass) : n === Xa ? (pe(this.el, this.enterClass), this.setupCssCb(ir, t)) : n === Za ? this.setupCssCb(or, t) : t();
  }, ro.enterDone = function () {
    this.entered = !0, this.cancel = this.pendingJsCb = null, pe(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
  }, ro.leave = function (e, t) {
    this.cancelPending(), this.callHook("beforeLeave"), this.op = e, this.cb = t, ce(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : Ht(this.leaveNextTick)));
  }, ro.leaveNextTick = function () {
    var e = this.getCssTransitionType(this.leaveClass);if (e) {
      var t = e === Xa ? ir : or;this.setupCssCb(t, this.leaveDone);
    } else this.leaveDone();
  }, ro.leaveDone = function () {
    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), pe(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
  }, ro.cancelPending = function () {
    this.op = this.cb = null;var e = !1;this.pendingCssCb && (e = !0, se(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (e = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), e && (pe(this.el, this.enterClass), pe(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
  }, ro.callHook = function (e) {
    this.hooks && this.hooks[e] && this.hooks[e].call(this.vm, this.el);
  }, ro.callHookWithCb = function (e) {
    var t = this.hooks && this.hooks[e];t && (t.length > 1 && (this.pendingJsCb = x(this[e + "Done"])), t.call(this.vm, this.el, this.pendingJsCb));
  }, ro.getCssTransitionType = function (e) {
    if (!(!ir || document.hidden || this.hooks && this.hooks.css === !1 || qt(this.el))) {
      var t = this.type || this.typeCache[e];if (t) return t;var n = this.el.style,
          r = window.getComputedStyle(this.el),
          i = n[Ya] || r[Ya];if (i && "0s" !== i) t = Xa;else {
        var a = n[eo] || r[eo];a && "0s" !== a && (t = Za);
      }return t && (this.typeCache[e] = t), t;
    }
  }, ro.setupCssCb = function (e, t) {
    this.pendingCssEvent = e;var n = this,
        r = this.el,
        i = this.pendingCssCb = function (a) {
      a.target === r && (se(r, e, i), n.pendingCssEvent = n.pendingCssCb = null, !n.pendingJsCb && t && t());
    };oe(r, e, i);
  };var io = { priority: oa, update: function (e, t) {
      var n = this.el,
          r = Ne(this.vm.$options, "transitions", e);e = e || "v", t = t || "v", n.__v_trans = new zt(n, e, r, this.vm), pe(n, t + "-transition"), ce(n, e + "-transition");
    } },
      ao = { style: Na, class: Va, component: Ha, prop: Ja, transition: io },
      oo = /^v-bind:|^:/,
      so = /^v-on:|^@/,
      lo = /^v-([^:]+)(?:$|:(.*)$)/,
      uo = /\.[^\.]+/g,
      co = /^(v-bind:|:)?transition$/,
      po = 1e3,
      ho = 2e3;hn.terminal = !0;var fo = /[^\w\-:\.]/,
      vo = Object.freeze({ compile: Gt, compileAndLinkProps: Zt, compileRoot: Yt, transclude: bn, resolveSlots: kn }),
      mo = /^v-on:|^@/;On.prototype._bind = function () {
    var e = this.name,
        t = this.descriptor;if (("cloak" !== e || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
      var n = t.attr || "v-" + e;this.el.removeAttribute(n);
    }var r = t.def;if ("function" == typeof r ? this.update = r : v(this, r), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(t.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
      var i = this;this.update ? this._update = function (e, t) {
        i._locked || i.update(e, t);
      } : this._update = $n;var a = this._preProcess ? f(this._preProcess, this) : null,
          o = this._postProcess ? f(this._postProcess, this) : null,
          s = this._watcher = new it(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: a, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(s.value);
    }
  }, On.prototype._setupParams = function () {
    if (this.params) {
      var e = this.params;this.params = Object.create(null);for (var t, n, r, i = e.length; i--;) t = p(e[i]), r = u(t), n = Y(this.el, t), null != n ? this._setupParamWatcher(r, n) : (n = Z(this.el, t), null != n && (this.params[r] = "" === n || n));
    }
  }, On.prototype._setupParamWatcher = function (e, t) {
    var n = this,
        r = !1,
        i = (this._scope || this.vm).$watch(t, function (t, i) {
      if (n.params[e] = t, r) {
        var a = n.paramWatchers && n.paramWatchers[e];a && a.call(n, t, i);
      } else r = !0;
    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(i);
  }, On.prototype._checkStatement = function () {
    var e = this.expression;if (e && this.acceptStatement && !Ye(e)) {
      var t = Ze(e).get,
          n = this._scope || this.vm,
          r = function (e) {
        n.$event = e, t.call(n, n), n.$event = null;
      };return this.filters && (r = n._applyFilters(r, null, this.filters)), this.update(r), !0;
    }
  }, On.prototype.set = function (e) {
    this.twoWay && this._withLock(function () {
      this._watcher.set(e);
    });
  }, On.prototype._withLock = function (e) {
    var t = this;t._locked = !0, e.call(t), ur(function () {
      t._locked = !1;
    });
  }, On.prototype.on = function (e, t, n) {
    oe(this.el, e, t, n), (this._listeners || (this._listeners = [])).push([e, t]);
  }, On.prototype._teardown = function () {
    if (this._bound) {
      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var e,
          t = this._listeners;if (t) for (e = t.length; e--;) se(this.el, t[e][0], t[e][1]);var n = this._paramUnwatchFns;if (n) for (e = n.length; e--;) n[e]();this.vm = this.el = this._watcher = this._listeners = null;
    }
  };var go = /[^|]\|[^|]/;Re(Tn), Cn(Tn), En(Tn), An(Tn), Nn(Tn), Ln(Tn), Pn(Tn), In(Tn), jn(Tn);var yo = { priority: ha, params: ["name"], bind: function () {
      var e = this.params.name || "default",
          t = this.vm._slotContents && this.vm._slotContents[e];t && t.hasChildNodes() ? this.compile(t.cloneNode(!0), this.vm._context, this.vm) : this.fallback();
    }, compile: function (e, t, n) {
      if (e && t) {
        if (this.el.hasChildNodes() && 1 === e.childNodes.length && 1 === e.childNodes[0].nodeType && e.childNodes[0].hasAttribute("v-if")) {
          var r = document.createElement("template");r.setAttribute("v-else", ""), r.innerHTML = this.el.innerHTML, r._context = this.vm, e.appendChild(r);
        }var i = n ? n._scope : this._scope;this.unlink = t.$compile(e, n, i, this._frag);
      }e ? ae(this.el, e) : re(this.el);
    }, fallback: function () {
      this.compile(he(this.el, !0), this.vm);
    }, unbind: function () {
      this.unlink && this.unlink();
    } },
      bo = { priority: ua, params: ["name"], paramWatchers: { name: function (e) {
        va.remove.call(this), e && this.insert(e);
      } }, bind: function () {
      this.anchor = me("v-partial"), ae(this.el, this.anchor), this.insert(this.params.name);
    }, insert: function (e) {
      var t = Ne(this.vm.$options, "partials", e, !0);t && (this.factory = new yt(this.vm, t), va.insert.call(this));
    }, unbind: function () {
      this.frag && this.frag.destroy();
    } },
      _o = { slot: yo, partial: bo },
      xo = da._postProcess,
      wo = /(\d{3})(?=\d)/g,
      ko = { orderBy: Rn, filterBy: Dn, limitBy: Fn, json: { read: function (e, t) {
        return "string" == typeof e ? e : JSON.stringify(e, null, arguments.length > 1 ? t : 2);
      }, write: function (e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      } }, capitalize: function (e) {
      return e || 0 === e ? (e = e.toString(), e.charAt(0).toUpperCase() + e.slice(1)) : "";
    }, uppercase: function (e) {
      return e || 0 === e ? e.toString().toUpperCase() : "";
    }, lowercase: function (e) {
      return e || 0 === e ? e.toString().toLowerCase() : "";
    }, currency: function (e, t, n) {
      if (e = parseFloat(e), !isFinite(e) || !e && 0 !== e) return "";t = null != t ? t : "$", n = null != n ? n : 2;var r = Math.abs(e).toFixed(n),
          i = n ? r.slice(0, -1 - n) : r,
          a = i.length % 3,
          o = a > 0 ? i.slice(0, a) + (i.length > 3 ? "," : "") : "",
          s = n ? r.slice(-1 - n) : "",
          l = e < 0 ? "-" : "";return l + t + o + i.slice(a).replace(wo, "$1,") + s;
    }, pluralize: function (e) {
      var t = d(arguments, 1),
          n = t.length;if (n > 1) {
        var r = e % 10 - 1;return r in t ? t[r] : t[n - 1];
      }return t[0] + (1 === e ? "" : "s");
    }, debounce: function (e, t) {
      if (e) return t || (t = 300), b(e, t);
    } };return Un(Tn), Tn.version = "1.0.28-csp", setTimeout(function () {
    Ur.devtools && Xn && Xn.emit("init", Tn);
  }, 0), Tn;
});
//# sourceMappingURL=vue.min.js.map
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.io = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  }({ 1: [function (_dereq_, module, exports) {

      module.exports = _dereq_('./lib/');
    }, { "./lib/": 2 }], 2: [function (_dereq_, module, exports) {

      module.exports = _dereq_('./socket');

      /**
       * Exports parser
       *
       * @api public
       *
       */
      module.exports.parser = _dereq_('engine.io-parser');
    }, { "./socket": 3, "engine.io-parser": 19 }], 3: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Module dependencies.
         */

        var transports = _dereq_('./transports');
        var Emitter = _dereq_('component-emitter');
        var debug = _dereq_('debug')('engine.io-client:socket');
        var index = _dereq_('indexof');
        var parser = _dereq_('engine.io-parser');
        var parseuri = _dereq_('parseuri');
        var parsejson = _dereq_('parsejson');
        var parseqs = _dereq_('parseqs');

        /**
         * Module exports.
         */

        module.exports = Socket;

        /**
         * Noop function.
         *
         * @api private
         */

        function noop() {}

        /**
         * Socket constructor.
         *
         * @param {String|Object} uri or options
         * @param {Object} options
         * @api public
         */

        function Socket(uri, opts) {
          if (!(this instanceof Socket)) return new Socket(uri, opts);

          opts = opts || {};

          if (uri && 'object' == typeof uri) {
            opts = uri;
            uri = null;
          }

          if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = parseuri(opts.host).host;
          }

          this.secure = null != opts.secure ? opts.secure : global.location && 'https:' == location.protocol;

          if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? '443' : '80';
          }

          this.agent = opts.agent || false;
          this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
          this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
          this.query = opts.query || {};
          if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
          this.upgrade = false !== opts.upgrade;
          this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
          this.forceJSONP = !!opts.forceJSONP;
          this.jsonp = false !== opts.jsonp;
          this.forceBase64 = !!opts.forceBase64;
          this.enablesXDR = !!opts.enablesXDR;
          this.timestampParam = opts.timestampParam || 't';
          this.timestampRequests = opts.timestampRequests;
          this.transports = opts.transports || ['polling', 'websocket'];
          this.readyState = '';
          this.writeBuffer = [];
          this.policyPort = opts.policyPort || 843;
          this.rememberUpgrade = opts.rememberUpgrade || false;
          this.binaryType = null;
          this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
          this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;

          if (true === this.perMessageDeflate) this.perMessageDeflate = {};
          if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
            this.perMessageDeflate.threshold = 1024;
          }

          // SSL options for Node.js client
          this.pfx = opts.pfx || null;
          this.key = opts.key || null;
          this.passphrase = opts.passphrase || null;
          this.cert = opts.cert || null;
          this.ca = opts.ca || null;
          this.ciphers = opts.ciphers || null;
          this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;

          // other options for Node.js client
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal) {
            if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
              this.extraHeaders = opts.extraHeaders;
            }
          }

          this.open();
        }

        Socket.priorWebsocketSuccess = false;

        /**
         * Mix in `Emitter`.
         */

        Emitter(Socket.prototype);

        /**
         * Protocol version.
         *
         * @api public
         */

        Socket.protocol = parser.protocol; // this is an int

        /**
         * Expose deps for legacy compatibility
         * and standalone browser access.
         */

        Socket.Socket = Socket;
        Socket.Transport = _dereq_('./transport');
        Socket.transports = _dereq_('./transports');
        Socket.parser = _dereq_('engine.io-parser');

        /**
         * Creates transport of the given type.
         *
         * @param {String} transport name
         * @return {Transport}
         * @api private
         */

        Socket.prototype.createTransport = function (name) {
          debug('creating transport "%s"', name);
          var query = clone(this.query);

          // append engine.io protocol identifier
          query.EIO = parser.protocol;

          // transport name
          query.transport = name;

          // session id if we already have one
          if (this.id) query.sid = this.id;

          var transport = new transports[name]({
            agent: this.agent,
            hostname: this.hostname,
            port: this.port,
            secure: this.secure,
            path: this.path,
            query: query,
            forceJSONP: this.forceJSONP,
            jsonp: this.jsonp,
            forceBase64: this.forceBase64,
            enablesXDR: this.enablesXDR,
            timestampRequests: this.timestampRequests,
            timestampParam: this.timestampParam,
            policyPort: this.policyPort,
            socket: this,
            pfx: this.pfx,
            key: this.key,
            passphrase: this.passphrase,
            cert: this.cert,
            ca: this.ca,
            ciphers: this.ciphers,
            rejectUnauthorized: this.rejectUnauthorized,
            perMessageDeflate: this.perMessageDeflate,
            extraHeaders: this.extraHeaders
          });

          return transport;
        };

        function clone(obj) {
          var o = {};
          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              o[i] = obj[i];
            }
          }
          return o;
        }

        /**
         * Initializes transport to use and starts probe.
         *
         * @api private
         */
        Socket.prototype.open = function () {
          var transport;
          if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
            transport = 'websocket';
          } else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            var self = this;
            setTimeout(function () {
              self.emit('error', 'No transports available');
            }, 0);
            return;
          } else {
            transport = this.transports[0];
          }
          this.readyState = 'opening';

          // Retry with the next transport if the transport is disabled (jsonp: false)
          try {
            transport = this.createTransport(transport);
          } catch (e) {
            this.transports.shift();
            this.open();
            return;
          }

          transport.open();
          this.setTransport(transport);
        };

        /**
         * Sets the current transport. Disables the existing one (if any).
         *
         * @api private
         */

        Socket.prototype.setTransport = function (transport) {
          debug('setting transport %s', transport.name);
          var self = this;

          if (this.transport) {
            debug('clearing existing transport %s', this.transport.name);
            this.transport.removeAllListeners();
          }

          // set up transport
          this.transport = transport;

          // set up transport listeners
          transport.on('drain', function () {
            self.onDrain();
          }).on('packet', function (packet) {
            self.onPacket(packet);
          }).on('error', function (e) {
            self.onError(e);
          }).on('close', function () {
            self.onClose('transport close');
          });
        };

        /**
         * Probes a transport.
         *
         * @param {String} transport name
         * @api private
         */

        Socket.prototype.probe = function (name) {
          debug('probing transport "%s"', name);
          var transport = this.createTransport(name, { probe: 1 }),
              failed = false,
              self = this;

          Socket.priorWebsocketSuccess = false;

          function onTransportOpen() {
            if (self.onlyBinaryUpgrades) {
              var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
              failed = failed || upgradeLosesBinary;
            }
            if (failed) return;

            debug('probe transport "%s" opened', name);
            transport.send([{ type: 'ping', data: 'probe' }]);
            transport.once('packet', function (msg) {
              if (failed) return;
              if ('pong' == msg.type && 'probe' == msg.data) {
                debug('probe transport "%s" pong', name);
                self.upgrading = true;
                self.emit('upgrading', transport);
                if (!transport) return;
                Socket.priorWebsocketSuccess = 'websocket' == transport.name;

                debug('pausing current transport "%s"', self.transport.name);
                self.transport.pause(function () {
                  if (failed) return;
                  if ('closed' == self.readyState) return;
                  debug('changing transport and sending upgrade packet');

                  cleanup();

                  self.setTransport(transport);
                  transport.send([{ type: 'upgrade' }]);
                  self.emit('upgrade', transport);
                  transport = null;
                  self.upgrading = false;
                  self.flush();
                });
              } else {
                debug('probe transport "%s" failed', name);
                var err = new Error('probe error');
                err.transport = transport.name;
                self.emit('upgradeError', err);
              }
            });
          }

          function freezeTransport() {
            if (failed) return;

            // Any callback called by transport should be ignored since now
            failed = true;

            cleanup();

            transport.close();
            transport = null;
          }

          //Handle any error that happens while probing
          function onerror(err) {
            var error = new Error('probe error: ' + err);
            error.transport = transport.name;

            freezeTransport();

            debug('probe transport "%s" failed because of error: %s', name, err);

            self.emit('upgradeError', error);
          }

          function onTransportClose() {
            onerror("transport closed");
          }

          //When the socket is closed while we're probing
          function onclose() {
            onerror("socket closed");
          }

          //When the socket is upgraded while we're probing
          function onupgrade(to) {
            if (transport && to.name != transport.name) {
              debug('"%s" works - aborting "%s"', to.name, transport.name);
              freezeTransport();
            }
          }

          //Remove all listeners on the transport and on self
          function cleanup() {
            transport.removeListener('open', onTransportOpen);
            transport.removeListener('error', onerror);
            transport.removeListener('close', onTransportClose);
            self.removeListener('close', onclose);
            self.removeListener('upgrading', onupgrade);
          }

          transport.once('open', onTransportOpen);
          transport.once('error', onerror);
          transport.once('close', onTransportClose);

          this.once('close', onclose);
          this.once('upgrading', onupgrade);

          transport.open();
        };

        /**
         * Called when connection is deemed open.
         *
         * @api public
         */

        Socket.prototype.onOpen = function () {
          debug('socket open');
          this.readyState = 'open';
          Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
          this.emit('open');
          this.flush();

          // we check for `readyState` in case an `open`
          // listener already closed the socket
          if ('open' == this.readyState && this.upgrade && this.transport.pause) {
            debug('starting upgrade probes');
            for (var i = 0, l = this.upgrades.length; i < l; i++) {
              this.probe(this.upgrades[i]);
            }
          }
        };

        /**
         * Handles a packet.
         *
         * @api private
         */

        Socket.prototype.onPacket = function (packet) {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

            this.emit('packet', packet);

            // Socket is live - any packet counts
            this.emit('heartbeat');

            switch (packet.type) {
              case 'open':
                this.onHandshake(parsejson(packet.data));
                break;

              case 'pong':
                this.setPing();
                this.emit('pong');
                break;

              case 'error':
                var err = new Error('server error');
                err.code = packet.data;
                this.onError(err);
                break;

              case 'message':
                this.emit('data', packet.data);
                this.emit('message', packet.data);
                break;
            }
          } else {
            debug('packet received with socket readyState "%s"', this.readyState);
          }
        };

        /**
         * Called upon handshake completion.
         *
         * @param {Object} handshake obj
         * @api private
         */

        Socket.prototype.onHandshake = function (data) {
          this.emit('handshake', data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this.upgrades = this.filterUpgrades(data.upgrades);
          this.pingInterval = data.pingInterval;
          this.pingTimeout = data.pingTimeout;
          this.onOpen();
          // In case open handler closes socket
          if ('closed' == this.readyState) return;
          this.setPing();

          // Prolong liveness of socket on heartbeat
          this.removeListener('heartbeat', this.onHeartbeat);
          this.on('heartbeat', this.onHeartbeat);
        };

        /**
         * Resets ping timeout.
         *
         * @api private
         */

        Socket.prototype.onHeartbeat = function (timeout) {
          clearTimeout(this.pingTimeoutTimer);
          var self = this;
          self.pingTimeoutTimer = setTimeout(function () {
            if ('closed' == self.readyState) return;
            self.onClose('ping timeout');
          }, timeout || self.pingInterval + self.pingTimeout);
        };

        /**
         * Pings server every `this.pingInterval` and expects response
         * within `this.pingTimeout` or closes connection.
         *
         * @api private
         */

        Socket.prototype.setPing = function () {
          var self = this;
          clearTimeout(self.pingIntervalTimer);
          self.pingIntervalTimer = setTimeout(function () {
            debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
            self.ping();
            self.onHeartbeat(self.pingTimeout);
          }, self.pingInterval);
        };

        /**
        * Sends a ping packet.
        *
        * @api private
        */

        Socket.prototype.ping = function () {
          var self = this;
          this.sendPacket('ping', function () {
            self.emit('ping');
          });
        };

        /**
         * Called on `drain` event
         *
         * @api private
         */

        Socket.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen);

          // setting prevBufferLen = 0 is very important
          // for example, when upgrading, upgrade packet is sent over,
          // and a nonzero prevBufferLen could cause problems on `drain`
          this.prevBufferLen = 0;

          if (0 === this.writeBuffer.length) {
            this.emit('drain');
          } else {
            this.flush();
          }
        };

        /**
         * Flush write buffers.
         *
         * @api private
         */

        Socket.prototype.flush = function () {
          if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            debug('flushing %d packets in socket', this.writeBuffer.length);
            this.transport.send(this.writeBuffer);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = this.writeBuffer.length;
            this.emit('flush');
          }
        };

        /**
         * Sends a message.
         *
         * @param {String} message.
         * @param {Function} callback function.
         * @param {Object} options.
         * @return {Socket} for chaining.
         * @api public
         */

        Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
          this.sendPacket('message', msg, options, fn);
          return this;
        };

        /**
         * Sends a packet.
         *
         * @param {String} packet type.
         * @param {String} data.
         * @param {Object} options.
         * @param {Function} callback function.
         * @api private
         */

        Socket.prototype.sendPacket = function (type, data, options, fn) {
          if ('function' == typeof data) {
            fn = data;
            data = undefined;
          }

          if ('function' == typeof options) {
            fn = options;
            options = null;
          }

          if ('closing' == this.readyState || 'closed' == this.readyState) {
            return;
          }

          options = options || {};
          options.compress = false !== options.compress;

          var packet = {
            type: type,
            data: data,
            options: options
          };
          this.emit('packetCreate', packet);
          this.writeBuffer.push(packet);
          if (fn) this.once('flush', fn);
          this.flush();
        };

        /**
         * Closes the connection.
         *
         * @api private
         */

        Socket.prototype.close = function () {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            this.readyState = 'closing';

            var self = this;

            if (this.writeBuffer.length) {
              this.once('drain', function () {
                if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }

          function close() {
            self.onClose('forced close');
            debug('socket closing - telling transport to close');
            self.transport.close();
          }

          function cleanupAndClose() {
            self.removeListener('upgrade', cleanupAndClose);
            self.removeListener('upgradeError', cleanupAndClose);
            close();
          }

          function waitForUpgrade() {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            self.once('upgrade', cleanupAndClose);
            self.once('upgradeError', cleanupAndClose);
          }

          return this;
        };

        /**
         * Called upon transport error
         *
         * @api private
         */

        Socket.prototype.onError = function (err) {
          debug('socket error %j', err);
          Socket.priorWebsocketSuccess = false;
          this.emit('error', err);
          this.onClose('transport error', err);
        };

        /**
         * Called upon transport close.
         *
         * @api private
         */

        Socket.prototype.onClose = function (reason, desc) {
          if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
            debug('socket close with reason: "%s"', reason);
            var self = this;

            // clear timers
            clearTimeout(this.pingIntervalTimer);
            clearTimeout(this.pingTimeoutTimer);

            // stop event from firing again for transport
            this.transport.removeAllListeners('close');

            // ensure transport won't stay open
            this.transport.close();

            // ignore further transport communication
            this.transport.removeAllListeners();

            // set ready state
            this.readyState = 'closed';

            // clear session id
            this.id = null;

            // emit close event
            this.emit('close', reason, desc);

            // clean buffers after, so users can still
            // grab the buffers on `close` event
            self.writeBuffer = [];
            self.prevBufferLen = 0;
          }
        };

        /**
         * Filters upgrades, returning only those matching client transports.
         *
         * @param {Array} server upgrades
         * @api private
         *
         */

        Socket.prototype.filterUpgrades = function (upgrades) {
          var filteredUpgrades = [];
          for (var i = 0, j = upgrades.length; i < j; i++) {
            if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
          }
          return filteredUpgrades;
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./transport": 4, "./transports": 5, "component-emitter": 15, "debug": 17, "engine.io-parser": 19, "indexof": 23, "parsejson": 26, "parseqs": 27, "parseuri": 28 }], 4: [function (_dereq_, module, exports) {
      /**
       * Module dependencies.
       */

      var parser = _dereq_('engine.io-parser');
      var Emitter = _dereq_('component-emitter');

      /**
       * Module exports.
       */

      module.exports = Transport;

      /**
       * Transport abstract constructor.
       *
       * @param {Object} options.
       * @api private
       */

      function Transport(opts) {
        this.path = opts.path;
        this.hostname = opts.hostname;
        this.port = opts.port;
        this.secure = opts.secure;
        this.query = opts.query;
        this.timestampParam = opts.timestampParam;
        this.timestampRequests = opts.timestampRequests;
        this.readyState = '';
        this.agent = opts.agent || false;
        this.socket = opts.socket;
        this.enablesXDR = opts.enablesXDR;

        // SSL options for Node.js client
        this.pfx = opts.pfx;
        this.key = opts.key;
        this.passphrase = opts.passphrase;
        this.cert = opts.cert;
        this.ca = opts.ca;
        this.ciphers = opts.ciphers;
        this.rejectUnauthorized = opts.rejectUnauthorized;

        // other options for Node.js client
        this.extraHeaders = opts.extraHeaders;
      }

      /**
       * Mix in `Emitter`.
       */

      Emitter(Transport.prototype);

      /**
       * Emits an error.
       *
       * @param {String} str
       * @return {Transport} for chaining
       * @api public
       */

      Transport.prototype.onError = function (msg, desc) {
        var err = new Error(msg);
        err.type = 'TransportError';
        err.description = desc;
        this.emit('error', err);
        return this;
      };

      /**
       * Opens the transport.
       *
       * @api public
       */

      Transport.prototype.open = function () {
        if ('closed' == this.readyState || '' == this.readyState) {
          this.readyState = 'opening';
          this.doOpen();
        }

        return this;
      };

      /**
       * Closes the transport.
       *
       * @api private
       */

      Transport.prototype.close = function () {
        if ('opening' == this.readyState || 'open' == this.readyState) {
          this.doClose();
          this.onClose();
        }

        return this;
      };

      /**
       * Sends multiple packets.
       *
       * @param {Array} packets
       * @api private
       */

      Transport.prototype.send = function (packets) {
        if ('open' == this.readyState) {
          this.write(packets);
        } else {
          throw new Error('Transport not open');
        }
      };

      /**
       * Called upon open
       *
       * @api private
       */

      Transport.prototype.onOpen = function () {
        this.readyState = 'open';
        this.writable = true;
        this.emit('open');
      };

      /**
       * Called with data.
       *
       * @param {String} data
       * @api private
       */

      Transport.prototype.onData = function (data) {
        var packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      };

      /**
       * Called with a decoded packet.
       */

      Transport.prototype.onPacket = function (packet) {
        this.emit('packet', packet);
      };

      /**
       * Called upon close.
       *
       * @api private
       */

      Transport.prototype.onClose = function () {
        this.readyState = 'closed';
        this.emit('close');
      };
    }, { "component-emitter": 15, "engine.io-parser": 19 }], 5: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Module dependencies
         */

        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var XHR = _dereq_('./polling-xhr');
        var JSONP = _dereq_('./polling-jsonp');
        var websocket = _dereq_('./websocket');

        /**
         * Export transports.
         */

        exports.polling = polling;
        exports.websocket = websocket;

        /**
         * Polling transport polymorphic constructor.
         * Decides on xhr vs jsonp based on feature detection.
         *
         * @api private
         */

        function polling(opts) {
          var xhr;
          var xd = false;
          var xs = false;
          var jsonp = false !== opts.jsonp;

          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;

            // some user agents have empty `location.port`
            if (!port) {
              port = isSSL ? 443 : 80;
            }

            xd = opts.hostname != location.hostname || port != opts.port;
            xs = opts.secure != isSSL;
          }

          opts.xdomain = xd;
          opts.xscheme = xs;
          xhr = new XMLHttpRequest(opts);

          if ('open' in xhr && !opts.forceJSONP) {
            return new XHR(opts);
          } else {
            if (!jsonp) throw new Error('JSONP disabled');
            return new JSONP(opts);
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./polling-jsonp": 6, "./polling-xhr": 7, "./websocket": 9, "xmlhttprequest-ssl": 10 }], 6: [function (_dereq_, module, exports) {
      (function (global) {

        /**
         * Module requirements.
         */

        var Polling = _dereq_('./polling');
        var inherit = _dereq_('component-inherit');

        /**
         * Module exports.
         */

        module.exports = JSONPPolling;

        /**
         * Cached regular expressions.
         */

        var rNewline = /\n/g;
        var rEscapedNewline = /\\n/g;

        /**
         * Global JSONP callbacks.
         */

        var callbacks;

        /**
         * Callbacks count.
         */

        var index = 0;

        /**
         * Noop.
         */

        function empty() {}

        /**
         * JSONP Polling constructor.
         *
         * @param {Object} opts.
         * @api public
         */

        function JSONPPolling(opts) {
          Polling.call(this, opts);

          this.query = this.query || {};

          // define global callbacks array if not present
          // we do this here (lazily) to avoid unneeded global pollution
          if (!callbacks) {
            // we need to consider multiple engines in the same page
            if (!global.___eio) global.___eio = [];
            callbacks = global.___eio;
          }

          // callback identifier
          this.index = callbacks.length;

          // add callback to jsonp global
          var self = this;
          callbacks.push(function (msg) {
            self.onData(msg);
          });

          // append to query string
          this.query.j = this.index;

          // prevent spurious errors from being emitted when the window is unloaded
          if (global.document && global.addEventListener) {
            global.addEventListener('beforeunload', function () {
              if (self.script) self.script.onerror = empty;
            }, false);
          }
        }

        /**
         * Inherits from Polling.
         */

        inherit(JSONPPolling, Polling);

        /*
         * JSONP only supports binary as base64 encoded strings
         */

        JSONPPolling.prototype.supportsBinary = false;

        /**
         * Closes the socket.
         *
         * @api private
         */

        JSONPPolling.prototype.doClose = function () {
          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }

          if (this.form) {
            this.form.parentNode.removeChild(this.form);
            this.form = null;
            this.iframe = null;
          }

          Polling.prototype.doClose.call(this);
        };

        /**
         * Starts a poll cycle.
         *
         * @api private
         */

        JSONPPolling.prototype.doPoll = function () {
          var self = this;
          var script = document.createElement('script');

          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }

          script.async = true;
          script.src = this.uri();
          script.onerror = function (e) {
            self.onError('jsonp poll error', e);
          };

          var insertAt = document.getElementsByTagName('script')[0];
          if (insertAt) {
            insertAt.parentNode.insertBefore(script, insertAt);
          } else {
            (document.head || document.body).appendChild(script);
          }
          this.script = script;

          var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

          if (isUAgecko) {
            setTimeout(function () {
              var iframe = document.createElement('iframe');
              document.body.appendChild(iframe);
              document.body.removeChild(iframe);
            }, 100);
          }
        };

        /**
         * Writes with a hidden iframe.
         *
         * @param {String} data to send
         * @param {Function} called upon flush.
         * @api private
         */

        JSONPPolling.prototype.doWrite = function (data, fn) {
          var self = this;

          if (!this.form) {
            var form = document.createElement('form');
            var area = document.createElement('textarea');
            var id = this.iframeId = 'eio_iframe_' + this.index;
            var iframe;

            form.className = 'socketio';
            form.style.position = 'absolute';
            form.style.top = '-1000px';
            form.style.left = '-1000px';
            form.target = id;
            form.method = 'POST';
            form.setAttribute('accept-charset', 'utf-8');
            area.name = 'd';
            form.appendChild(area);
            document.body.appendChild(form);

            this.form = form;
            this.area = area;
          }

          this.form.action = this.uri();

          function complete() {
            initIframe();
            fn();
          }

          function initIframe() {
            if (self.iframe) {
              try {
                self.form.removeChild(self.iframe);
              } catch (e) {
                self.onError('jsonp polling iframe removal error', e);
              }
            }

            try {
              // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
              var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
              iframe = document.createElement(html);
            } catch (e) {
              iframe = document.createElement('iframe');
              iframe.name = self.iframeId;
              iframe.src = 'javascript:0';
            }

            iframe.id = self.iframeId;

            self.form.appendChild(iframe);
            self.iframe = iframe;
          }

          initIframe();

          // escape \n to prevent it from being converted into \r\n by some UAs
          // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
          data = data.replace(rEscapedNewline, '\\\n');
          this.area.value = data.replace(rNewline, '\\n');

          try {
            this.form.submit();
          } catch (e) {}

          if (this.iframe.attachEvent) {
            this.iframe.onreadystatechange = function () {
              if (self.iframe.readyState == 'complete') {
                complete();
              }
            };
          } else {
            this.iframe.onload = complete;
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./polling": 8, "component-inherit": 16 }], 7: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Module requirements.
         */

        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var Polling = _dereq_('./polling');
        var Emitter = _dereq_('component-emitter');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:polling-xhr');

        /**
         * Module exports.
         */

        module.exports = XHR;
        module.exports.Request = Request;

        /**
         * Empty function
         */

        function empty() {}

        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @api public
         */

        function XHR(opts) {
          Polling.call(this, opts);

          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;

            // some user agents have empty `location.port`
            if (!port) {
              port = isSSL ? 443 : 80;
            }

            this.xd = opts.hostname != global.location.hostname || port != opts.port;
            this.xs = opts.secure != isSSL;
          } else {
            this.extraHeaders = opts.extraHeaders;
          }
        }

        /**
         * Inherits from Polling.
         */

        inherit(XHR, Polling);

        /**
         * XHR supports binary
         */

        XHR.prototype.supportsBinary = true;

        /**
         * Creates a request.
         *
         * @param {String} method
         * @api private
         */

        XHR.prototype.request = function (opts) {
          opts = opts || {};
          opts.uri = this.uri();
          opts.xd = this.xd;
          opts.xs = this.xs;
          opts.agent = this.agent || false;
          opts.supportsBinary = this.supportsBinary;
          opts.enablesXDR = this.enablesXDR;

          // SSL options for Node.js client
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;

          // other options for Node.js client
          opts.extraHeaders = this.extraHeaders;

          return new Request(opts);
        };

        /**
         * Sends data.
         *
         * @param {String} data to send.
         * @param {Function} called upon flush.
         * @api private
         */

        XHR.prototype.doWrite = function (data, fn) {
          var isBinary = typeof data !== 'string' && data !== undefined;
          var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
          var self = this;
          req.on('success', fn);
          req.on('error', function (err) {
            self.onError('xhr post error', err);
          });
          this.sendXhr = req;
        };

        /**
         * Starts a poll cycle.
         *
         * @api private
         */

        XHR.prototype.doPoll = function () {
          debug('xhr poll');
          var req = this.request();
          var self = this;
          req.on('data', function (data) {
            self.onData(data);
          });
          req.on('error', function (err) {
            self.onError('xhr poll error', err);
          });
          this.pollXhr = req;
        };

        /**
         * Request constructor
         *
         * @param {Object} options
         * @api public
         */

        function Request(opts) {
          this.method = opts.method || 'GET';
          this.uri = opts.uri;
          this.xd = !!opts.xd;
          this.xs = !!opts.xs;
          this.async = false !== opts.async;
          this.data = undefined != opts.data ? opts.data : null;
          this.agent = opts.agent;
          this.isBinary = opts.isBinary;
          this.supportsBinary = opts.supportsBinary;
          this.enablesXDR = opts.enablesXDR;

          // SSL options for Node.js client
          this.pfx = opts.pfx;
          this.key = opts.key;
          this.passphrase = opts.passphrase;
          this.cert = opts.cert;
          this.ca = opts.ca;
          this.ciphers = opts.ciphers;
          this.rejectUnauthorized = opts.rejectUnauthorized;

          // other options for Node.js client
          this.extraHeaders = opts.extraHeaders;

          this.create();
        }

        /**
         * Mix in `Emitter`.
         */

        Emitter(Request.prototype);

        /**
         * Creates the XHR object and sends the request.
         *
         * @api private
         */

        Request.prototype.create = function () {
          var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

          // SSL options for Node.js client
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;

          var xhr = this.xhr = new XMLHttpRequest(opts);
          var self = this;

          try {
            debug('xhr open %s: %s', this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
              if (this.extraHeaders) {
                xhr.setDisableHeaderCheck(true);
                for (var i in this.extraHeaders) {
                  if (this.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {}
            if (this.supportsBinary) {
              // This has to be done after open because Firefox is stupid
              // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
              xhr.responseType = 'arraybuffer';
            }

            if ('POST' == this.method) {
              try {
                if (this.isBinary) {
                  xhr.setRequestHeader('Content-type', 'application/octet-stream');
                } else {
                  xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                }
              } catch (e) {}
            }

            // ie6 check
            if ('withCredentials' in xhr) {
              xhr.withCredentials = true;
            }

            if (this.hasXDR()) {
              xhr.onload = function () {
                self.onLoad();
              };
              xhr.onerror = function () {
                self.onError(xhr.responseText);
              };
            } else {
              xhr.onreadystatechange = function () {
                if (4 != xhr.readyState) return;
                if (200 == xhr.status || 1223 == xhr.status) {
                  self.onLoad();
                } else {
                  // make sure the `error` event handler that's user-set
                  // does not throw in the same tick and gets caught here
                  setTimeout(function () {
                    self.onError(xhr.status);
                  }, 0);
                }
              };
            }

            debug('xhr data %s', this.data);
            xhr.send(this.data);
          } catch (e) {
            // Need to defer since .create() is called directly fhrom the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            setTimeout(function () {
              self.onError(e);
            }, 0);
            return;
          }

          if (global.document) {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
          }
        };

        /**
         * Called upon successful response.
         *
         * @api private
         */

        Request.prototype.onSuccess = function () {
          this.emit('success');
          this.cleanup();
        };

        /**
         * Called if we have data.
         *
         * @api private
         */

        Request.prototype.onData = function (data) {
          this.emit('data', data);
          this.onSuccess();
        };

        /**
         * Called upon error.
         *
         * @api private
         */

        Request.prototype.onError = function (err) {
          this.emit('error', err);
          this.cleanup(true);
        };

        /**
         * Cleans up house.
         *
         * @api private
         */

        Request.prototype.cleanup = function (fromError) {
          if ('undefined' == typeof this.xhr || null === this.xhr) {
            return;
          }
          // xmlhttprequest
          if (this.hasXDR()) {
            this.xhr.onload = this.xhr.onerror = empty;
          } else {
            this.xhr.onreadystatechange = empty;
          }

          if (fromError) {
            try {
              this.xhr.abort();
            } catch (e) {}
          }

          if (global.document) {
            delete Request.requests[this.index];
          }

          this.xhr = null;
        };

        /**
         * Called upon load.
         *
         * @api private
         */

        Request.prototype.onLoad = function () {
          var data;
          try {
            var contentType;
            try {
              contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
            } catch (e) {}
            if (contentType === 'application/octet-stream') {
              data = this.xhr.response;
            } else {
              if (!this.supportsBinary) {
                data = this.xhr.responseText;
              } else {
                try {
                  data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                } catch (e) {
                  var ui8Arr = new Uint8Array(this.xhr.response);
                  var dataArray = [];
                  for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
                    dataArray.push(ui8Arr[idx]);
                  }

                  data = String.fromCharCode.apply(null, dataArray);
                }
              }
            }
          } catch (e) {
            this.onError(e);
          }
          if (null != data) {
            this.onData(data);
          }
        };

        /**
         * Check if it has XDomainRequest.
         *
         * @api private
         */

        Request.prototype.hasXDR = function () {
          return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
        };

        /**
         * Aborts the request.
         *
         * @api public
         */

        Request.prototype.abort = function () {
          this.cleanup();
        };

        /**
         * Aborts pending requests when unloading the window. This is needed to prevent
         * memory leaks (e.g. when using IE) and to ensure that no spurious error is
         * emitted.
         */

        if (global.document) {
          Request.requestsCount = 0;
          Request.requests = {};
          if (global.attachEvent) {
            global.attachEvent('onunload', unloadHandler);
          } else if (global.addEventListener) {
            global.addEventListener('beforeunload', unloadHandler, false);
          }
        }

        function unloadHandler() {
          for (var i in Request.requests) {
            if (Request.requests.hasOwnProperty(i)) {
              Request.requests[i].abort();
            }
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./polling": 8, "component-emitter": 15, "component-inherit": 16, "debug": 17, "xmlhttprequest-ssl": 10 }], 8: [function (_dereq_, module, exports) {
      /**
       * Module dependencies.
       */

      var Transport = _dereq_('../transport');
      var parseqs = _dereq_('parseqs');
      var parser = _dereq_('engine.io-parser');
      var inherit = _dereq_('component-inherit');
      var yeast = _dereq_('yeast');
      var debug = _dereq_('debug')('engine.io-client:polling');

      /**
       * Module exports.
       */

      module.exports = Polling;

      /**
       * Is XHR2 supported?
       */

      var hasXHR2 = function () {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var xhr = new XMLHttpRequest({ xdomain: false });
        return null != xhr.responseType;
      }();

      /**
       * Polling interface.
       *
       * @param {Object} opts
       * @api private
       */

      function Polling(opts) {
        var forceBase64 = opts && opts.forceBase64;
        if (!hasXHR2 || forceBase64) {
          this.supportsBinary = false;
        }
        Transport.call(this, opts);
      }

      /**
       * Inherits from Transport.
       */

      inherit(Polling, Transport);

      /**
       * Transport name.
       */

      Polling.prototype.name = 'polling';

      /**
       * Opens the socket (triggers polling). We write a PING message to determine
       * when the transport is open.
       *
       * @api private
       */

      Polling.prototype.doOpen = function () {
        this.poll();
      };

      /**
       * Pauses polling.
       *
       * @param {Function} callback upon buffers are flushed and transport is paused
       * @api private
       */

      Polling.prototype.pause = function (onPause) {
        var pending = 0;
        var self = this;

        this.readyState = 'pausing';

        function pause() {
          debug('paused');
          self.readyState = 'paused';
          onPause();
        }

        if (this.polling || !this.writable) {
          var total = 0;

          if (this.polling) {
            debug('we are currently polling - waiting to pause');
            total++;
            this.once('pollComplete', function () {
              debug('pre-pause polling complete');
              --total || pause();
            });
          }

          if (!this.writable) {
            debug('we are currently writing - waiting to pause');
            total++;
            this.once('drain', function () {
              debug('pre-pause writing complete');
              --total || pause();
            });
          }
        } else {
          pause();
        }
      };

      /**
       * Starts polling cycle.
       *
       * @api public
       */

      Polling.prototype.poll = function () {
        debug('polling');
        this.polling = true;
        this.doPoll();
        this.emit('poll');
      };

      /**
       * Overloads onData to detect payloads.
       *
       * @api private
       */

      Polling.prototype.onData = function (data) {
        var self = this;
        debug('polling got data %s', data);
        var callback = function (packet, index, total) {
          // if its the first message we consider the transport open
          if ('opening' == self.readyState) {
            self.onOpen();
          }

          // if its a close packet, we close the ongoing requests
          if ('close' == packet.type) {
            self.onClose();
            return false;
          }

          // otherwise bypass onData and handle the message
          self.onPacket(packet);
        };

        // decode payload
        parser.decodePayload(data, this.socket.binaryType, callback);

        // if an event did not trigger closing
        if ('closed' != this.readyState) {
          // if we got data we're not polling
          this.polling = false;
          this.emit('pollComplete');

          if ('open' == this.readyState) {
            this.poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      };

      /**
       * For polling, send a close packet.
       *
       * @api private
       */

      Polling.prototype.doClose = function () {
        var self = this;

        function close() {
          debug('writing close packet');
          self.write([{ type: 'close' }]);
        }

        if ('open' == this.readyState) {
          debug('transport open - closing');
          close();
        } else {
          // in case we're trying to close while
          // handshaking is in progress (GH-164)
          debug('transport not open - deferring close');
          this.once('open', close);
        }
      };

      /**
       * Writes a packets payload.
       *
       * @param {Array} data packets
       * @param {Function} drain callback
       * @api private
       */

      Polling.prototype.write = function (packets) {
        var self = this;
        this.writable = false;
        var callbackfn = function () {
          self.writable = true;
          self.emit('drain');
        };

        var self = this;
        parser.encodePayload(packets, this.supportsBinary, function (data) {
          self.doWrite(data, callbackfn);
        });
      };

      /**
       * Generates uri for connection.
       *
       * @api private
       */

      Polling.prototype.uri = function () {
        var query = this.query || {};
        var schema = this.secure ? 'https' : 'http';
        var port = '';

        // cache busting is forced
        if (false !== this.timestampRequests) {
          query[this.timestampParam] = yeast();
        }

        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }

        query = parseqs.encode(query);

        // avoid port if default for schema
        if (this.port && ('https' == schema && this.port != 443 || 'http' == schema && this.port != 80)) {
          port = ':' + this.port;
        }

        // prepend ? to query
        if (query.length) {
          query = '?' + query;
        }

        var ipv6 = this.hostname.indexOf(':') !== -1;
        return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
      };
    }, { "../transport": 4, "component-inherit": 16, "debug": 17, "engine.io-parser": 19, "parseqs": 27, "xmlhttprequest-ssl": 10, "yeast": 30 }], 9: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Module dependencies.
         */

        var Transport = _dereq_('../transport');
        var parser = _dereq_('engine.io-parser');
        var parseqs = _dereq_('parseqs');
        var inherit = _dereq_('component-inherit');
        var yeast = _dereq_('yeast');
        var debug = _dereq_('debug')('engine.io-client:websocket');
        var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

        /**
         * Get either the `WebSocket` or `MozWebSocket` globals
         * in the browser or try to resolve WebSocket-compatible
         * interface exposed by `ws` for Node-like environment.
         */

        var WebSocket = BrowserWebSocket;
        if (!WebSocket && typeof window === 'undefined') {
          try {
            WebSocket = _dereq_('ws');
          } catch (e) {}
        }

        /**
         * Module exports.
         */

        module.exports = WS;

        /**
         * WebSocket transport constructor.
         *
         * @api {Object} connection options
         * @api public
         */

        function WS(opts) {
          var forceBase64 = opts && opts.forceBase64;
          if (forceBase64) {
            this.supportsBinary = false;
          }
          this.perMessageDeflate = opts.perMessageDeflate;
          Transport.call(this, opts);
        }

        /**
         * Inherits from Transport.
         */

        inherit(WS, Transport);

        /**
         * Transport name.
         *
         * @api public
         */

        WS.prototype.name = 'websocket';

        /*
         * WebSockets support binary
         */

        WS.prototype.supportsBinary = true;

        /**
         * Opens socket.
         *
         * @api private
         */

        WS.prototype.doOpen = function () {
          if (!this.check()) {
            // let probe timeout
            return;
          }

          var self = this;
          var uri = this.uri();
          var protocols = void 0;
          var opts = {
            agent: this.agent,
            perMessageDeflate: this.perMessageDeflate
          };

          // SSL options for Node.js client
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          if (this.extraHeaders) {
            opts.headers = this.extraHeaders;
          }

          this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

          if (this.ws.binaryType === undefined) {
            this.supportsBinary = false;
          }

          if (this.ws.supports && this.ws.supports.binary) {
            this.supportsBinary = true;
            this.ws.binaryType = 'buffer';
          } else {
            this.ws.binaryType = 'arraybuffer';
          }

          this.addEventListeners();
        };

        /**
         * Adds event listeners to the socket
         *
         * @api private
         */

        WS.prototype.addEventListeners = function () {
          var self = this;

          this.ws.onopen = function () {
            self.onOpen();
          };
          this.ws.onclose = function () {
            self.onClose();
          };
          this.ws.onmessage = function (ev) {
            self.onData(ev.data);
          };
          this.ws.onerror = function (e) {
            self.onError('websocket error', e);
          };
        };

        /**
         * Override `onData` to use a timer on iOS.
         * See: https://gist.github.com/mloughran/2052006
         *
         * @api private
         */

        if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          WS.prototype.onData = function (data) {
            var self = this;
            setTimeout(function () {
              Transport.prototype.onData.call(self, data);
            }, 0);
          };
        }

        /**
         * Writes data to socket.
         *
         * @param {Array} array of packets.
         * @api private
         */

        WS.prototype.write = function (packets) {
          var self = this;
          this.writable = false;

          // encodePacket efficient as it uses WS framing
          // no need for encodePayload
          var total = packets.length;
          for (var i = 0, l = total; i < l; i++) {
            (function (packet) {
              parser.encodePacket(packet, self.supportsBinary, function (data) {
                if (!BrowserWebSocket) {
                  // always create a new object (GH-437)
                  var opts = {};
                  if (packet.options) {
                    opts.compress = packet.options.compress;
                  }

                  if (self.perMessageDeflate) {
                    var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
                    if (len < self.perMessageDeflate.threshold) {
                      opts.compress = false;
                    }
                  }
                }

                //Sometimes the websocket has already been closed but the browser didn't
                //have a chance of informing us about it yet, in that case send will
                //throw an error
                try {
                  if (BrowserWebSocket) {
                    // TypeError is thrown when passing the second argument on Safari
                    self.ws.send(data);
                  } else {
                    self.ws.send(data, opts);
                  }
                } catch (e) {
                  debug('websocket closed before onclose event');
                }

                --total || done();
              });
            })(packets[i]);
          }

          function done() {
            self.emit('flush');

            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            setTimeout(function () {
              self.writable = true;
              self.emit('drain');
            }, 0);
          }
        };

        /**
         * Called upon close
         *
         * @api private
         */

        WS.prototype.onClose = function () {
          Transport.prototype.onClose.call(this);
        };

        /**
         * Closes socket.
         *
         * @api private
         */

        WS.prototype.doClose = function () {
          if (typeof this.ws !== 'undefined') {
            this.ws.close();
          }
        };

        /**
         * Generates uri for connection.
         *
         * @api private
         */

        WS.prototype.uri = function () {
          var query = this.query || {};
          var schema = this.secure ? 'wss' : 'ws';
          var port = '';

          // avoid port if default for schema
          if (this.port && ('wss' == schema && this.port != 443 || 'ws' == schema && this.port != 80)) {
            port = ':' + this.port;
          }

          // append timestamp to URI
          if (this.timestampRequests) {
            query[this.timestampParam] = yeast();
          }

          // communicate binary support capabilities
          if (!this.supportsBinary) {
            query.b64 = 1;
          }

          query = parseqs.encode(query);

          // prepend ? to query
          if (query.length) {
            query = '?' + query;
          }

          var ipv6 = this.hostname.indexOf(':') !== -1;
          return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
        };

        /**
         * Feature detection for WebSocket.
         *
         * @return {Boolean} whether this transport is available.
         * @api public
         */

        WS.prototype.check = function () {
          return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "../transport": 4, "component-inherit": 16, "debug": 17, "engine.io-parser": 19, "parseqs": 27, "ws": undefined, "yeast": 30 }], 10: [function (_dereq_, module, exports) {
      // browser shim for xmlhttprequest module
      var hasCORS = _dereq_('has-cors');

      module.exports = function (opts) {
        var xdomain = opts.xdomain;

        // scheme must be same when usign XDomainRequest
        // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
        var xscheme = opts.xscheme;

        // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
        // https://github.com/Automattic/engine.io-client/pull/217
        var enablesXDR = opts.enablesXDR;

        // XMLHttpRequest can be disabled on IE
        try {
          if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {}

        // Use XDomainRequest for IE8 if enablesXDR is true
        // because loading bar keeps flashing when using jsonp-polling
        // https://github.com/yujiosaka/socke.io-ie8-loading-example
        try {
          if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
            return new XDomainRequest();
          }
        } catch (e) {}

        if (!xdomain) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {}
        }
      };
    }, { "has-cors": 22 }], 11: [function (_dereq_, module, exports) {
      module.exports = after;

      function after(count, callback, err_cb) {
        var bail = false;
        err_cb = err_cb || noop;
        proxy.count = count;

        return count === 0 ? callback() : proxy;

        function proxy(err, result) {
          if (proxy.count <= 0) {
            throw new Error('after called too many times');
          }
          --proxy.count;

          // after first error, rest are passed to err_cb
          if (err) {
            bail = true;
            callback(err);
            // future error callbacks will go to error handler
            callback = err_cb;
          } else if (proxy.count === 0 && !bail) {
            callback(null, result);
          }
        }
      }

      function noop() {}
    }, {}], 12: [function (_dereq_, module, exports) {
      /**
       * An abstraction for slicing an arraybuffer even when
       * ArrayBuffer.prototype.slice is not supported
       *
       * @api public
       */

      module.exports = function (arraybuffer, start, end) {
        var bytes = arraybuffer.byteLength;
        start = start || 0;
        end = end || bytes;

        if (arraybuffer.slice) {
          return arraybuffer.slice(start, end);
        }

        if (start < 0) {
          start += bytes;
        }
        if (end < 0) {
          end += bytes;
        }
        if (end > bytes) {
          end = bytes;
        }

        if (start >= bytes || start >= end || bytes === 0) {
          return new ArrayBuffer(0);
        }

        var abv = new Uint8Array(arraybuffer);
        var result = new Uint8Array(end - start);
        for (var i = start, ii = 0; i < end; i++, ii++) {
          result[ii] = abv[i];
        }
        return result.buffer;
      };
    }, {}], 13: [function (_dereq_, module, exports) {
      /*
       * base64-arraybuffer
       * https://github.com/niklasvh/base64-arraybuffer
       *
       * Copyright (c) 2012 Niklas von Hertzen
       * Licensed under the MIT license.
       */
      (function (chars) {
        "use strict";

        exports.encode = function (arraybuffer) {
          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";

          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
          }

          if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
          }

          return base64;
        };

        exports.decode = function (base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;

          if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") {
              bufferLength--;
            }
          }

          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = chars.indexOf(base64[i]);
            encoded2 = chars.indexOf(base64[i + 1]);
            encoded3 = chars.indexOf(base64[i + 2]);
            encoded4 = chars.indexOf(base64[i + 3]);

            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return arraybuffer;
        };
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    }, {}], 14: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Create a blob builder even when vendor prefixes exist
         */

        var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;

        /**
         * Check if Blob constructor is supported
         */

        var blobSupported = function () {
          try {
            var a = new Blob(['hi']);
            return a.size === 2;
          } catch (e) {
            return false;
          }
        }();

        /**
         * Check if Blob constructor supports ArrayBufferViews
         * Fails in Safari 6, so we need to map to ArrayBuffers there.
         */

        var blobSupportsArrayBufferView = blobSupported && function () {
          try {
            var b = new Blob([new Uint8Array([1, 2])]);
            return b.size === 2;
          } catch (e) {
            return false;
          }
        }();

        /**
         * Check if BlobBuilder is supported
         */

        var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

        /**
         * Helper function that maps ArrayBufferViews to ArrayBuffers
         * Used by BlobBuilder constructor and old browsers that didn't
         * support it in the Blob constructor.
         */

        function mapArrayBufferViews(ary) {
          for (var i = 0; i < ary.length; i++) {
            var chunk = ary[i];
            if (chunk.buffer instanceof ArrayBuffer) {
              var buf = chunk.buffer;

              // if this is a subarray, make a copy so we only
              // include the subarray region from the underlying buffer
              if (chunk.byteLength !== buf.byteLength) {
                var copy = new Uint8Array(chunk.byteLength);
                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                buf = copy.buffer;
              }

              ary[i] = buf;
            }
          }
        }

        function BlobBuilderConstructor(ary, options) {
          options = options || {};

          var bb = new BlobBuilder();
          mapArrayBufferViews(ary);

          for (var i = 0; i < ary.length; i++) {
            bb.append(ary[i]);
          }

          return options.type ? bb.getBlob(options.type) : bb.getBlob();
        };

        function BlobConstructor(ary, options) {
          mapArrayBufferViews(ary);
          return new Blob(ary, options || {});
        };

        module.exports = function () {
          if (blobSupported) {
            return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
          } else if (blobBuilderSupported) {
            return BlobBuilderConstructor;
          } else {
            return undefined;
          }
        }();
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}], 15: [function (_dereq_, module, exports) {

      /**
       * Expose `Emitter`.
       */

      module.exports = Emitter;

      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */

      function Emitter(obj) {
        if (obj) return mixin(obj);
      };

      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }

      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        return this;
      };

      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.once = function (event, fn) {
        var self = this;
        this._callbacks = this._callbacks || {};

        function on() {
          self.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };

      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};

        // all
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }

        // specific event
        var callbacks = this._callbacks[event];
        if (!callbacks) return this;

        // remove all handlers
        if (1 == arguments.length) {
          delete this._callbacks[event];
          return this;
        }

        // remove specific handler
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };

      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */

      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks[event];

        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };

      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */

      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
      };

      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */

      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
    }, {}], 16: [function (_dereq_, module, exports) {

      module.exports = function (a, b) {
        var fn = function () {};
        fn.prototype = b.prototype;
        a.prototype = new fn();
        a.prototype.constructor = a;
      };
    }, {}], 17: [function (_dereq_, module, exports) {

      /**
       * This is the web browser implementation of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports = module.exports = _dereq_('./debug');
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

      /**
       * Colors.
       */

      exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

      /**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */

      function useColors() {
        // is webkit? http://stackoverflow.com/a/16459606/376773
        return 'WebkitAppearance' in document.documentElement.style ||
        // is firebug? http://stackoverflow.com/a/398120/376773
        window.console && (console.firebug || console.exception && console.table) ||
        // is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
      }

      /**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */

      exports.formatters.j = function (v) {
        return JSON.stringify(v);
      };

      /**
       * Colorize log arguments if enabled.
       *
       * @api public
       */

      function formatArgs() {
        var args = arguments;
        var useColors = this.useColors;

        args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

        if (!useColors) return args;

        var c = 'color: ' + this.color;
        args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

        // the final "%c" is somewhat tricky, because there could be other
        // arguments passed either before or after the %c, so we need to
        // figure out the correct index to insert the CSS into
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-z%]/g, function (match) {
          if ('%%' === match) return;
          index++;
          if ('%c' === match) {
            // we only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
          }
        });

        args.splice(lastC, 0, c);
        return args;
      }

      /**
       * Invokes `console.log()` when available.
       * No-op when `console.log` is not a "function".
       *
       * @api public
       */

      function log() {
        // this hackery is required for IE8/9, where
        // the `console.log` function doesn't have 'apply'
        return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }

      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        try {
          if (null == namespaces) {
            exports.storage.removeItem('debug');
          } else {
            exports.storage.debug = namespaces;
          }
        } catch (e) {}
      }

      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        var r;
        try {
          r = exports.storage.debug;
        } catch (e) {}
        return r;
      }

      /**
       * Enable namespaces listed in `localStorage.debug` initially.
       */

      exports.enable(load());

      /**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */

      function localstorage() {
        try {
          return window.localStorage;
        } catch (e) {}
      }
    }, { "./debug": 18 }], 18: [function (_dereq_, module, exports) {

      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports = module.exports = debug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = _dereq_('ms');

      /**
       * The currently active debug mode names, and names to skip.
       */

      exports.names = [];
      exports.skips = [];

      /**
       * Map of special "%n" handling functions, for the debug "format" argument.
       *
       * Valid key names are a single, lowercased letter, i.e. "n".
       */

      exports.formatters = {};

      /**
       * Previously assigned color.
       */

      var prevColor = 0;

      /**
       * Previous log timestamp.
       */

      var prevTime;

      /**
       * Select a color.
       *
       * @return {Number}
       * @api private
       */

      function selectColor() {
        return exports.colors[prevColor++ % exports.colors.length];
      }

      /**
       * Create a debugger with the given `namespace`.
       *
       * @param {String} namespace
       * @return {Function}
       * @api public
       */

      function debug(namespace) {

        // define the `disabled` version
        function disabled() {}
        disabled.enabled = false;

        // define the `enabled` version
        function enabled() {

          var self = enabled;

          // set `diff` timestamp
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;

          // add the `color` if not set
          if (null == self.useColors) self.useColors = exports.useColors();
          if (null == self.color && self.useColors) self.color = selectColor();

          var args = Array.prototype.slice.call(arguments);

          args[0] = exports.coerce(args[0]);

          if ('string' !== typeof args[0]) {
            // anything else let's inspect with %o
            args = ['%o'].concat(args);
          }

          // apply any `formatters` transformations
          var index = 0;
          args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === '%%') return match;
            index++;
            var formatter = exports.formatters[format];
            if ('function' === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val);

              // now we need to remove `args[index]` since it's inlined in the `format`
              args.splice(index, 1);
              index--;
            }
            return match;
          });

          if ('function' === typeof exports.formatArgs) {
            args = exports.formatArgs.apply(self, args);
          }
          var logFn = enabled.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }
        enabled.enabled = true;

        var fn = exports.enabled(namespace) ? enabled : disabled;

        fn.namespace = namespace;

        return fn;
      }

      /**
       * Enables a debug mode by namespaces. This can include modes
       * separated by a colon and wildcards.
       *
       * @param {String} namespaces
       * @api public
       */

      function enable(namespaces) {
        exports.save(namespaces);

        var split = (namespaces || '').split(/[\s,]+/);
        var len = split.length;

        for (var i = 0; i < len; i++) {
          if (!split[i]) continue; // ignore empty strings
          namespaces = split[i].replace(/\*/g, '.*?');
          if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
      }

      /**
       * Disable debug output.
       *
       * @api public
       */

      function disable() {
        exports.enable('');
      }

      /**
       * Returns true if the given mode name is enabled, false otherwise.
       *
       * @param {String} name
       * @return {Boolean}
       * @api public
       */

      function enabled(name) {
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }

      /**
       * Coerce `val`.
       *
       * @param {Mixed} val
       * @return {Mixed}
       * @api private
       */

      function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
      }
    }, { "ms": 25 }], 19: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * Module dependencies.
         */

        var keys = _dereq_('./keys');
        var hasBinary = _dereq_('has-binary');
        var sliceBuffer = _dereq_('arraybuffer.slice');
        var base64encoder = _dereq_('base64-arraybuffer');
        var after = _dereq_('after');
        var utf8 = _dereq_('utf8');

        /**
         * Check if we are running an android browser. That requires us to use
         * ArrayBuffer with polling transports...
         *
         * http://ghinda.net/jpeg-blob-ajax-android/
         */

        var isAndroid = navigator.userAgent.match(/Android/i);

        /**
         * Check if we are running in PhantomJS.
         * Uploading a Blob with PhantomJS does not work correctly, as reported here:
         * https://github.com/ariya/phantomjs/issues/11395
         * @type boolean
         */
        var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

        /**
         * When true, avoids using Blobs to encode payloads.
         * @type boolean
         */
        var dontSendBlobs = isAndroid || isPhantomJS;

        /**
         * Current protocol version.
         */

        exports.protocol = 3;

        /**
         * Packet types.
         */

        var packets = exports.packets = {
          open: 0 // non-ws
          , close: 1 // non-ws
          , ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6
        };

        var packetslist = keys(packets);

        /**
         * Premade error packet.
         */

        var err = { type: 'error', data: 'parser error' };

        /**
         * Create a blob api even for blob builder when vendor prefixes exist
         */

        var Blob = _dereq_('blob');

        /**
         * Encodes a packet.
         *
         *     <packet type id> [ <data> ]
         *
         * Example:
         *
         *     5hello world
         *     3
         *     4
         *
         * Binary is encoded in an identical principle
         *
         * @api private
         */

        exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
          if ('function' == typeof supportsBinary) {
            callback = supportsBinary;
            supportsBinary = false;
          }

          if ('function' == typeof utf8encode) {
            callback = utf8encode;
            utf8encode = null;
          }

          var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

          if (global.ArrayBuffer && data instanceof ArrayBuffer) {
            return encodeArrayBuffer(packet, supportsBinary, callback);
          } else if (Blob && data instanceof global.Blob) {
            return encodeBlob(packet, supportsBinary, callback);
          }

          // might be an object with { base64: true, data: dataAsBase64String }
          if (data && data.base64) {
            return encodeBase64Object(packet, callback);
          }

          // Sending data as a utf-8 string
          var encoded = packets[packet.type];

          // data fragment is optional
          if (undefined !== packet.data) {
            encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
          }

          return callback('' + encoded);
        };

        function encodeBase64Object(packet, callback) {
          // packet data is an object { base64: true, data: dataAsBase64String }
          var message = 'b' + exports.packets[packet.type] + packet.data.data;
          return callback(message);
        }

        /**
         * Encode packet helpers for binary types
         */

        function encodeArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }

          var data = packet.data;
          var contentArray = new Uint8Array(data);
          var resultBuffer = new Uint8Array(1 + data.byteLength);

          resultBuffer[0] = packets[packet.type];
          for (var i = 0; i < contentArray.length; i++) {
            resultBuffer[i + 1] = contentArray[i];
          }

          return callback(resultBuffer.buffer);
        }

        function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }

          var fr = new FileReader();
          fr.onload = function () {
            packet.data = fr.result;
            exports.encodePacket(packet, supportsBinary, true, callback);
          };
          return fr.readAsArrayBuffer(packet.data);
        }

        function encodeBlob(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }

          if (dontSendBlobs) {
            return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
          }

          var length = new Uint8Array(1);
          length[0] = packets[packet.type];
          var blob = new Blob([length.buffer, packet.data]);

          return callback(blob);
        }

        /**
         * Encodes a packet with binary data in a base64 string
         *
         * @param {Object} packet, has `type` and `data`
         * @return {String} base64 encoded message
         */

        exports.encodeBase64Packet = function (packet, callback) {
          var message = 'b' + exports.packets[packet.type];
          if (Blob && packet.data instanceof global.Blob) {
            var fr = new FileReader();
            fr.onload = function () {
              var b64 = fr.result.split(',')[1];
              callback(message + b64);
            };
            return fr.readAsDataURL(packet.data);
          }

          var b64data;
          try {
            b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
          } catch (e) {
            // iPhone Safari doesn't let you apply with typed arrays
            var typed = new Uint8Array(packet.data);
            var basic = new Array(typed.length);
            for (var i = 0; i < typed.length; i++) {
              basic[i] = typed[i];
            }
            b64data = String.fromCharCode.apply(null, basic);
          }
          message += global.btoa(b64data);
          return callback(message);
        };

        /**
         * Decodes a packet. Changes format to Blob if requested.
         *
         * @return {Object} with `type` and `data` (if any)
         * @api private
         */

        exports.decodePacket = function (data, binaryType, utf8decode) {
          // String data
          if (typeof data == 'string' || data === undefined) {
            if (data.charAt(0) == 'b') {
              return exports.decodeBase64Packet(data.substr(1), binaryType);
            }

            if (utf8decode) {
              try {
                data = utf8.decode(data);
              } catch (e) {
                return err;
              }
            }
            var type = data.charAt(0);

            if (Number(type) != type || !packetslist[type]) {
              return err;
            }

            if (data.length > 1) {
              return { type: packetslist[type], data: data.substring(1) };
            } else {
              return { type: packetslist[type] };
            }
          }

          var asArray = new Uint8Array(data);
          var type = asArray[0];
          var rest = sliceBuffer(data, 1);
          if (Blob && binaryType === 'blob') {
            rest = new Blob([rest]);
          }
          return { type: packetslist[type], data: rest };
        };

        /**
         * Decodes a packet encoded in a base64 string
         *
         * @param {String} base64 encoded message
         * @return {Object} with `type` and `data` (if any)
         */

        exports.decodeBase64Packet = function (msg, binaryType) {
          var type = packetslist[msg.charAt(0)];
          if (!global.ArrayBuffer) {
            return { type: type, data: { base64: true, data: msg.substr(1) } };
          }

          var data = base64encoder.decode(msg.substr(1));

          if (binaryType === 'blob' && Blob) {
            data = new Blob([data]);
          }

          return { type: type, data: data };
        };

        /**
         * Encodes multiple messages (payload).
         *
         *     <length>:data
         *
         * Example:
         *
         *     11:hello world2:hi
         *
         * If any contents are binary, they will be encoded as base64 strings. Base64
         * encoded strings are marked with a b before the length specifier
         *
         * @param {Array} packets
         * @api private
         */

        exports.encodePayload = function (packets, supportsBinary, callback) {
          if (typeof supportsBinary == 'function') {
            callback = supportsBinary;
            supportsBinary = null;
          }

          var isBinary = hasBinary(packets);

          if (supportsBinary && isBinary) {
            if (Blob && !dontSendBlobs) {
              return exports.encodePayloadAsBlob(packets, callback);
            }

            return exports.encodePayloadAsArrayBuffer(packets, callback);
          }

          if (!packets.length) {
            return callback('0:');
          }

          function setLengthHeader(message) {
            return message.length + ':' + message;
          }

          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
              doneCallback(null, setLengthHeader(message));
            });
          }

          map(packets, encodeOne, function (err, results) {
            return callback(results.join(''));
          });
        };

        /**
         * Async array map using after
         */

        function map(ary, each, done) {
          var result = new Array(ary.length);
          var next = after(ary.length, done);

          var eachWithIndex = function (i, el, cb) {
            each(el, function (error, msg) {
              result[i] = msg;
              cb(error, result);
            });
          };

          for (var i = 0; i < ary.length; i++) {
            eachWithIndex(i, ary[i], next);
          }
        }

        /*
         * Decodes data when a payload is maybe expected. Possible binary contents are
         * decoded from their base64 representation
         *
         * @param {String} data, callback method
         * @api public
         */

        exports.decodePayload = function (data, binaryType, callback) {
          if (typeof data != 'string') {
            return exports.decodePayloadAsBinary(data, binaryType, callback);
          }

          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }

          var packet;
          if (data == '') {
            // parser error - ignoring payload
            return callback(err, 0, 1);
          }

          var length = '',
              n,
              msg;

          for (var i = 0, l = data.length; i < l; i++) {
            var chr = data.charAt(i);

            if (':' != chr) {
              length += chr;
            } else {
              if ('' == length || length != (n = Number(length))) {
                // parser error - ignoring payload
                return callback(err, 0, 1);
              }

              msg = data.substr(i + 1, n);

              if (length != msg.length) {
                // parser error - ignoring payload
                return callback(err, 0, 1);
              }

              if (msg.length) {
                packet = exports.decodePacket(msg, binaryType, true);

                if (err.type == packet.type && err.data == packet.data) {
                  // parser error in individual packet - ignoring payload
                  return callback(err, 0, 1);
                }

                var ret = callback(packet, i + n, l);
                if (false === ret) return;
              }

              // advance cursor
              i += n;
              length = '';
            }
          }

          if (length != '') {
            // parser error - ignoring payload
            return callback(err, 0, 1);
          }
        };

        /**
         * Encodes multiple messages (payload) as binary.
         *
         * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
         * 255><data>
         *
         * Example:
         * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
         *
         * @param {Array} packets
         * @return {ArrayBuffer} encoded payload
         * @api private
         */

        exports.encodePayloadAsArrayBuffer = function (packets, callback) {
          if (!packets.length) {
            return callback(new ArrayBuffer(0));
          }

          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function (data) {
              return doneCallback(null, data);
            });
          }

          map(packets, encodeOne, function (err, encodedPackets) {
            var totalLength = encodedPackets.reduce(function (acc, p) {
              var len;
              if (typeof p === 'string') {
                len = p.length;
              } else {
                len = p.byteLength;
              }
              return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
            }, 0);

            var resultArray = new Uint8Array(totalLength);

            var bufferIndex = 0;
            encodedPackets.forEach(function (p) {
              var isString = typeof p === 'string';
              var ab = p;
              if (isString) {
                var view = new Uint8Array(p.length);
                for (var i = 0; i < p.length; i++) {
                  view[i] = p.charCodeAt(i);
                }
                ab = view.buffer;
              }

              if (isString) {
                // not true binary
                resultArray[bufferIndex++] = 0;
              } else {
                // true binary
                resultArray[bufferIndex++] = 1;
              }

              var lenStr = ab.byteLength.toString();
              for (var i = 0; i < lenStr.length; i++) {
                resultArray[bufferIndex++] = parseInt(lenStr[i]);
              }
              resultArray[bufferIndex++] = 255;

              var view = new Uint8Array(ab);
              for (var i = 0; i < view.length; i++) {
                resultArray[bufferIndex++] = view[i];
              }
            });

            return callback(resultArray.buffer);
          });
        };

        /**
         * Encode as Blob
         */

        exports.encodePayloadAsBlob = function (packets, callback) {
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function (encoded) {
              var binaryIdentifier = new Uint8Array(1);
              binaryIdentifier[0] = 1;
              if (typeof encoded === 'string') {
                var view = new Uint8Array(encoded.length);
                for (var i = 0; i < encoded.length; i++) {
                  view[i] = encoded.charCodeAt(i);
                }
                encoded = view.buffer;
                binaryIdentifier[0] = 0;
              }

              var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;

              var lenStr = len.toString();
              var lengthAry = new Uint8Array(lenStr.length + 1);
              for (var i = 0; i < lenStr.length; i++) {
                lengthAry[i] = parseInt(lenStr[i]);
              }
              lengthAry[lenStr.length] = 255;

              if (Blob) {
                var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                doneCallback(null, blob);
              }
            });
          }

          map(packets, encodeOne, function (err, results) {
            return callback(new Blob(results));
          });
        };

        /*
         * Decodes data when a payload is maybe expected. Strings are decoded by
         * interpreting each byte as a key code for entries marked to start with 0. See
         * description of encodePayloadAsBinary
         *
         * @param {ArrayBuffer} data, callback method
         * @api public
         */

        exports.decodePayloadAsBinary = function (data, binaryType, callback) {
          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }

          var bufferTail = data;
          var buffers = [];

          var numberTooLong = false;
          while (bufferTail.byteLength > 0) {
            var tailArray = new Uint8Array(bufferTail);
            var isString = tailArray[0] === 0;
            var msgLength = '';

            for (var i = 1;; i++) {
              if (tailArray[i] == 255) break;

              if (msgLength.length > 310) {
                numberTooLong = true;
                break;
              }

              msgLength += tailArray[i];
            }

            if (numberTooLong) return callback(err, 0, 1);

            bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
            msgLength = parseInt(msgLength);

            var msg = sliceBuffer(bufferTail, 0, msgLength);
            if (isString) {
              try {
                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
              } catch (e) {
                // iPhone Safari doesn't let you apply to typed arrays
                var typed = new Uint8Array(msg);
                msg = '';
                for (var i = 0; i < typed.length; i++) {
                  msg += String.fromCharCode(typed[i]);
                }
              }
            }

            buffers.push(msg);
            bufferTail = sliceBuffer(bufferTail, msgLength);
          }

          var total = buffers.length;
          buffers.forEach(function (buffer, i) {
            callback(exports.decodePacket(buffer, binaryType, true), i, total);
          });
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./keys": 20, "after": 11, "arraybuffer.slice": 12, "base64-arraybuffer": 13, "blob": 14, "has-binary": 21, "utf8": 29 }], 20: [function (_dereq_, module, exports) {

      /**
       * Gets the keys for an object.
       *
       * @return {Array} keys
       * @api private
       */

      module.exports = Object.keys || function keys(obj) {
        var arr = [];
        var has = Object.prototype.hasOwnProperty;

        for (var i in obj) {
          if (has.call(obj, i)) {
            arr.push(i);
          }
        }
        return arr;
      };
    }, {}], 21: [function (_dereq_, module, exports) {
      (function (global) {

        /*
         * Module requirements.
         */

        var isArray = _dereq_('isarray');

        /**
         * Module exports.
         */

        module.exports = hasBinary;

        /**
         * Checks for binary data.
         *
         * Right now only Buffer and ArrayBuffer are supported..
         *
         * @param {Object} anything
         * @api public
         */

        function hasBinary(data) {

          function _hasBinary(obj) {
            if (!obj) return false;

            if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
              return true;
            }

            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              if (obj.toJSON) {
                obj = obj.toJSON();
              }

              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }

            return false;
          }

          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "isarray": 24 }], 22: [function (_dereq_, module, exports) {

      /**
       * Module exports.
       *
       * Logic borrowed from Modernizr:
       *
       *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
       */

      try {
        module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        // if XMLHttp support is disabled in IE then it will throw
        // when trying to create
        module.exports = false;
      }
    }, {}], 23: [function (_dereq_, module, exports) {

      var indexOf = [].indexOf;

      module.exports = function (arr, obj) {
        if (indexOf) return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj) return i;
        }
        return -1;
      };
    }, {}], 24: [function (_dereq_, module, exports) {
      module.exports = Array.isArray || function (arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
      };
    }, {}], 25: [function (_dereq_, module, exports) {
      /**
       * Helpers.
       */

      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;

      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} options
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        if ('string' == typeof val) return parse(val);
        return options.long ? long(val) : short(val);
      };

      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = '' + str;
        if (str.length > 10000) return;
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match) return;
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;
          case 'days':
          case 'day':
          case 'd':
            return n * d;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
        }
      }

      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function short(ms) {
        if (ms >= d) return Math.round(ms / d) + 'd';
        if (ms >= h) return Math.round(ms / h) + 'h';
        if (ms >= m) return Math.round(ms / m) + 'm';
        if (ms >= s) return Math.round(ms / s) + 's';
        return ms + 'ms';
      }

      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function long(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
      }

      /**
       * Pluralization helper.
       */

      function plural(ms, n, name) {
        if (ms < n) return;
        if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
        return Math.ceil(ms / n) + ' ' + name + 's';
      }
    }, {}], 26: [function (_dereq_, module, exports) {
      (function (global) {
        /**
         * JSON parse.
         *
         * @see Based on jQuery#parseJSON (MIT) and JSON2
         * @api private
         */

        var rvalidchars = /^[\],:{}\s]*$/;
        var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
        var rtrimLeft = /^\s+/;
        var rtrimRight = /\s+$/;

        module.exports = function parsejson(data) {
          if ('string' != typeof data || !data) {
            return null;
          }

          data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

          // Attempt to parse using the native JSON parser first
          if (global.JSON && JSON.parse) {
            return JSON.parse(data);
          }

          if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
            return new Function('return ' + data)();
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}], 27: [function (_dereq_, module, exports) {
      /**
       * Compiles a querystring
       * Returns string representation of the object
       *
       * @param {Object}
       * @api private
       */

      exports.encode = function (obj) {
        var str = '';

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }

        return str;
      };

      /**
       * Parses a simple querystring into an object
       *
       * @param {String} qs
       * @api private
       */

      exports.decode = function (qs) {
        var qry = {};
        var pairs = qs.split('&');
        for (var i = 0, l = pairs.length; i < l; i++) {
          var pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      };
    }, {}], 28: [function (_dereq_, module, exports) {
      /**
       * Parses an URI
       *
       * @author Steven Levithan <stevenlevithan.com> (MIT license)
       * @api private
       */

      var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

      var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

      module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');

        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }

        var m = re.exec(str || ''),
            uri = {},
            i = 14;

        while (i--) {
          uri[parts[i]] = m[i] || '';
        }

        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }

        return uri;
      };
    }, {}], 29: [function (_dereq_, module, exports) {
      (function (global) {
        /*! https://mths.be/utf8js v2.0.0 by @mathias */
        ;(function (root) {

          // Detect free variables `exports`
          var freeExports = typeof exports == 'object' && exports;

          // Detect free variable `module`
          var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

          // Detect free variable `global`, from Node.js or Browserified code,
          // and use it as `root`
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
            root = freeGlobal;
          }

          /*--------------------------------------------------------------------------*/

          var stringFromCharCode = String.fromCharCode;

          // Taken from https://mths.be/punycode
          function ucs2decode(string) {
            var output = [];
            var counter = 0;
            var length = string.length;
            var value;
            var extra;
            while (counter < length) {
              value = string.charCodeAt(counter++);
              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                  // low surrogate
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  // unmatched surrogate; only append this code unit, in case the next
                  // code unit is the high surrogate of a surrogate pair
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }
            return output;
          }

          // Taken from https://mths.be/punycode
          function ucs2encode(array) {
            var length = array.length;
            var index = -1;
            var value;
            var output = '';
            while (++index < length) {
              value = array[index];
              if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
              }
              output += stringFromCharCode(value);
            }
            return output;
          }

          function checkScalarValue(codePoint) {
            if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
              throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
            }
          }
          /*--------------------------------------------------------------------------*/

          function createByte(codePoint, shift) {
            return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
          }

          function encodeCodePoint(codePoint) {
            if ((codePoint & 0xFFFFFF80) == 0) {
              // 1-byte sequence
              return stringFromCharCode(codePoint);
            }
            var symbol = '';
            if ((codePoint & 0xFFFFF800) == 0) {
              // 2-byte sequence
              symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
            } else if ((codePoint & 0xFFFF0000) == 0) {
              // 3-byte sequence
              checkScalarValue(codePoint);
              symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
              symbol += createByte(codePoint, 6);
            } else if ((codePoint & 0xFFE00000) == 0) {
              // 4-byte sequence
              symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
              symbol += createByte(codePoint, 12);
              symbol += createByte(codePoint, 6);
            }
            symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
            return symbol;
          }

          function utf8encode(string) {
            var codePoints = ucs2decode(string);
            var length = codePoints.length;
            var index = -1;
            var codePoint;
            var byteString = '';
            while (++index < length) {
              codePoint = codePoints[index];
              byteString += encodeCodePoint(codePoint);
            }
            return byteString;
          }

          /*--------------------------------------------------------------------------*/

          function readContinuationByte() {
            if (byteIndex >= byteCount) {
              throw Error('Invalid byte index');
            }

            var continuationByte = byteArray[byteIndex] & 0xFF;
            byteIndex++;

            if ((continuationByte & 0xC0) == 0x80) {
              return continuationByte & 0x3F;
            }

            // If we end up here, it鈥檚 not a continuation byte
            throw Error('Invalid continuation byte');
          }

          function decodeSymbol() {
            var byte1;
            var byte2;
            var byte3;
            var byte4;
            var codePoint;

            if (byteIndex > byteCount) {
              throw Error('Invalid byte index');
            }

            if (byteIndex == byteCount) {
              return false;
            }

            // Read first byte
            byte1 = byteArray[byteIndex] & 0xFF;
            byteIndex++;

            // 1-byte sequence (no continuation bytes)
            if ((byte1 & 0x80) == 0) {
              return byte1;
            }

            // 2-byte sequence
            if ((byte1 & 0xE0) == 0xC0) {
              var byte2 = readContinuationByte();
              codePoint = (byte1 & 0x1F) << 6 | byte2;
              if (codePoint >= 0x80) {
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }

            // 3-byte sequence (may include unpaired surrogates)
            if ((byte1 & 0xF0) == 0xE0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
              if (codePoint >= 0x0800) {
                checkScalarValue(codePoint);
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }

            // 4-byte sequence
            if ((byte1 & 0xF8) == 0xF0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              byte4 = readContinuationByte();
              codePoint = (byte1 & 0x0F) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
              if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                return codePoint;
              }
            }

            throw Error('Invalid UTF-8 detected');
          }

          var byteArray;
          var byteCount;
          var byteIndex;
          function utf8decode(byteString) {
            byteArray = ucs2decode(byteString);
            byteCount = byteArray.length;
            byteIndex = 0;
            var codePoints = [];
            var tmp;
            while ((tmp = decodeSymbol()) !== false) {
              codePoints.push(tmp);
            }
            return ucs2encode(codePoints);
          }

          /*--------------------------------------------------------------------------*/

          var utf8 = {
            'version': '2.0.0',
            'encode': utf8encode,
            'decode': utf8decode
          };

          // Some AMD build optimizers, like r.js, check for specific condition patterns
          // like the following:
          if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
            define(function () {
              return utf8;
            });
          } else if (freeExports && !freeExports.nodeType) {
            if (freeModule) {
              // in Node.js or RingoJS v0.8.0+
              freeModule.exports = utf8;
            } else {
              // in Narwhal or RingoJS v0.7.0-
              var object = {};
              var hasOwnProperty = object.hasOwnProperty;
              for (var key in utf8) {
                hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
              }
            }
          } else {
            // in Rhino or a web browser
            root.utf8 = utf8;
          }
        })(this);
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}], 30: [function (_dereq_, module, exports) {
      'use strict';

      var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
          length = 64,
          map = {},
          seed = 0,
          i = 0,
          prev;

      /**
       * Return a string representing the specified number.
       *
       * @param {Number} num The number to convert.
       * @returns {String} The string representation of the number.
       * @api public
       */
      function encode(num) {
        var encoded = '';

        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);

        return encoded;
      }

      /**
       * Return the integer value specified by the given string.
       *
       * @param {String} str The string to convert.
       * @returns {Number} The integer value represented by the string.
       * @api public
       */
      function decode(str) {
        var decoded = 0;

        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }

        return decoded;
      }

      /**
       * Yeast: A tiny growing id generator.
       *
       * @returns {String} A unique id.
       * @api public
       */
      function yeast() {
        var now = encode(+new Date());

        if (now !== prev) return seed = 0, prev = now;
        return now + '.' + encode(seed++);
      }

      //
      // Map each character to its index.
      //
      for (; i < length; i++) map[alphabet[i]] = i;

      //
      // Expose the `yeast`, `encode` and `decode` functions.
      //
      yeast.encode = encode;
      yeast.decode = decode;
      module.exports = yeast;
    }, {}], 31: [function (_dereq_, module, exports) {

      /**
       * Module dependencies.
       */

      var url = _dereq_('./url');
      var parser = _dereq_('socket.io-parser');
      var Manager = _dereq_('./manager');
      var debug = _dereq_('debug')('socket.io-client');

      /**
       * Module exports.
       */

      module.exports = exports = lookup;

      /**
       * Managers cache.
       */

      var cache = exports.managers = {};

      /**
       * Looks up an existing `Manager` for multiplexing.
       * If the user summons:
       *
       *   `io('http://localhost/a');`
       *   `io('http://localhost/b');`
       *
       * We reuse the existing instance based on same scheme/port/host,
       * and we initialize sockets for each namespace.
       *
       * @api public
       */

      function lookup(uri, opts) {
        if (typeof uri == 'object') {
          opts = uri;
          uri = undefined;
        }

        opts = opts || {};

        var parsed = url(uri);
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id].nsps;
        var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

        var io;

        if (newConnection) {
          debug('ignoring socket cache for %s', source);
          io = Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug('new io instance for %s', source);
            cache[id] = Manager(source, opts);
          }
          io = cache[id];
        }

        return io.socket(parsed.path);
      }

      /**
       * Protocol version.
       *
       * @api public
       */

      exports.protocol = parser.protocol;

      /**
       * `connect`.
       *
       * @param {String} uri
       * @api public
       */

      exports.connect = lookup;

      /**
       * Expose constructors for standalone build.
       *
       * @api public
       */

      exports.Manager = _dereq_('./manager');
      exports.Socket = _dereq_('./socket');
    }, { "./manager": 32, "./socket": 34, "./url": 35, "debug": 39, "socket.io-parser": 47 }], 32: [function (_dereq_, module, exports) {

      /**
       * Module dependencies.
       */

      var eio = _dereq_('engine.io-client');
      var Socket = _dereq_('./socket');
      var Emitter = _dereq_('component-emitter');
      var parser = _dereq_('socket.io-parser');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:manager');
      var indexOf = _dereq_('indexof');
      var Backoff = _dereq_('backo2');

      /**
       * IE6+ hasOwnProperty
       */

      var has = Object.prototype.hasOwnProperty;

      /**
       * Module exports
       */

      module.exports = Manager;

      /**
       * `Manager` constructor.
       *
       * @param {String} engine instance or engine uri/opts
       * @param {Object} options
       * @api public
       */

      function Manager(uri, opts) {
        if (!(this instanceof Manager)) return new Manager(uri, opts);
        if (uri && 'object' == typeof uri) {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};

        opts.path = opts.path || '/socket.io';
        this.nsps = {};
        this.subs = [];
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this.readyState = 'closed';
        this.uri = uri;
        this.connecting = [];
        this.lastPing = null;
        this.encoding = false;
        this.packetBuffer = [];
        this.encoder = new parser.Encoder();
        this.decoder = new parser.Decoder();
        this.autoConnect = opts.autoConnect !== false;
        if (this.autoConnect) this.open();
      }

      /**
       * Propagate given event to sockets and emit on `this`
       *
       * @api private
       */

      Manager.prototype.emitAll = function () {
        this.emit.apply(this, arguments);
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
          }
        }
      };

      /**
       * Update `socket.id` of all sockets
       *
       * @api private
       */

      Manager.prototype.updateSocketIds = function () {
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].id = this.engine.id;
          }
        }
      };

      /**
       * Mix in `Emitter`.
       */

      Emitter(Manager.prototype);

      /**
       * Sets the `reconnection` config.
       *
       * @param {Boolean} true/false if it should automatically reconnect
       * @return {Manager} self or value
       * @api public
       */

      Manager.prototype.reconnection = function (v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
      };

      /**
       * Sets the reconnection attempts config.
       *
       * @param {Number} max reconnection attempts before giving up
       * @return {Manager} self or value
       * @api public
       */

      Manager.prototype.reconnectionAttempts = function (v) {
        if (!arguments.length) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      };

      /**
       * Sets the delay between reconnections.
       *
       * @param {Number} delay
       * @return {Manager} self or value
       * @api public
       */

      Manager.prototype.reconnectionDelay = function (v) {
        if (!arguments.length) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        this.backoff && this.backoff.setMin(v);
        return this;
      };

      Manager.prototype.randomizationFactor = function (v) {
        if (!arguments.length) return this._randomizationFactor;
        this._randomizationFactor = v;
        this.backoff && this.backoff.setJitter(v);
        return this;
      };

      /**
       * Sets the maximum delay between reconnections.
       *
       * @param {Number} delay
       * @return {Manager} self or value
       * @api public
       */

      Manager.prototype.reconnectionDelayMax = function (v) {
        if (!arguments.length) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        this.backoff && this.backoff.setMax(v);
        return this;
      };

      /**
       * Sets the connection timeout. `false` to disable
       *
       * @return {Manager} self or value
       * @api public
       */

      Manager.prototype.timeout = function (v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
      };

      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @api private
       */

      Manager.prototype.maybeReconnectOnOpen = function () {
        // Only try to reconnect if it's the first time we're connecting
        if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
          // keeps reconnection from firing twice for the same reconnection loop
          this.reconnect();
        }
      };

      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} optional, callback
       * @return {Manager} self
       * @api public
       */

      Manager.prototype.open = Manager.prototype.connect = function (fn) {
        debug('readyState %s', this.readyState);
        if (~this.readyState.indexOf('open')) return this;

        debug('opening %s', this.uri);
        this.engine = eio(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this.readyState = 'opening';
        this.skipReconnect = false;

        // emit `open`
        var openSub = on(socket, 'open', function () {
          self.onopen();
          fn && fn();
        });

        // emit `connect_error`
        var errorSub = on(socket, 'error', function (data) {
          debug('connect_error');
          self.cleanup();
          self.readyState = 'closed';
          self.emitAll('connect_error', data);
          if (fn) {
            var err = new Error('Connection error');
            err.data = data;
            fn(err);
          } else {
            // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
          }
        });

        // emit `connect_timeout`
        if (false !== this._timeout) {
          var timeout = this._timeout;
          debug('connect attempt will timeout after %d', timeout);

          // set timer
          var timer = setTimeout(function () {
            debug('connect attempt timed out after %d', timeout);
            openSub.destroy();
            socket.close();
            socket.emit('error', 'timeout');
            self.emitAll('connect_timeout', timeout);
          }, timeout);

          this.subs.push({
            destroy: function () {
              clearTimeout(timer);
            }
          });
        }

        this.subs.push(openSub);
        this.subs.push(errorSub);

        return this;
      };

      /**
       * Called upon transport open.
       *
       * @api private
       */

      Manager.prototype.onopen = function () {
        debug('open');

        // clear old subs
        this.cleanup();

        // mark as open
        this.readyState = 'open';
        this.emit('open');

        // add new subs
        var socket = this.engine;
        this.subs.push(on(socket, 'data', bind(this, 'ondata')));
        this.subs.push(on(socket, 'ping', bind(this, 'onping')));
        this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
        this.subs.push(on(socket, 'error', bind(this, 'onerror')));
        this.subs.push(on(socket, 'close', bind(this, 'onclose')));
        this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
      };

      /**
       * Called upon a ping.
       *
       * @api private
       */

      Manager.prototype.onping = function () {
        this.lastPing = new Date();
        this.emitAll('ping');
      };

      /**
       * Called upon a packet.
       *
       * @api private
       */

      Manager.prototype.onpong = function () {
        this.emitAll('pong', new Date() - this.lastPing);
      };

      /**
       * Called with data.
       *
       * @api private
       */

      Manager.prototype.ondata = function (data) {
        this.decoder.add(data);
      };

      /**
       * Called when parser fully decodes a packet.
       *
       * @api private
       */

      Manager.prototype.ondecoded = function (packet) {
        this.emit('packet', packet);
      };

      /**
       * Called upon socket error.
       *
       * @api private
       */

      Manager.prototype.onerror = function (err) {
        debug('error', err);
        this.emitAll('error', err);
      };

      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @api public
       */

      Manager.prototype.socket = function (nsp) {
        var socket = this.nsps[nsp];
        if (!socket) {
          socket = new Socket(this, nsp);
          this.nsps[nsp] = socket;
          var self = this;
          socket.on('connecting', onConnecting);
          socket.on('connect', function () {
            socket.id = self.engine.id;
          });

          if (this.autoConnect) {
            // manually call here since connecting evnet is fired before listening
            onConnecting();
          }
        }

        function onConnecting() {
          if (!~indexOf(self.connecting, socket)) {
            self.connecting.push(socket);
          }
        }

        return socket;
      };

      /**
       * Called upon a socket close.
       *
       * @param {Socket} socket
       */

      Manager.prototype.destroy = function (socket) {
        var index = indexOf(this.connecting, socket);
        if (~index) this.connecting.splice(index, 1);
        if (this.connecting.length) return;

        this.close();
      };

      /**
       * Writes a packet.
       *
       * @param {Object} packet
       * @api private
       */

      Manager.prototype.packet = function (packet) {
        debug('writing packet %j', packet);
        var self = this;

        if (!self.encoding) {
          // encode, then write to engine with result
          self.encoding = true;
          this.encoder.encode(packet, function (encodedPackets) {
            for (var i = 0; i < encodedPackets.length; i++) {
              self.engine.write(encodedPackets[i], packet.options);
            }
            self.encoding = false;
            self.processPacketQueue();
          });
        } else {
          // add packet to the queue
          self.packetBuffer.push(packet);
        }
      };

      /**
       * If packet buffer is non-empty, begins encoding the
       * next packet in line.
       *
       * @api private
       */

      Manager.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var pack = this.packetBuffer.shift();
          this.packet(pack);
        }
      };

      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @api private
       */

      Manager.prototype.cleanup = function () {
        debug('cleanup');

        var sub;
        while (sub = this.subs.shift()) sub.destroy();

        this.packetBuffer = [];
        this.encoding = false;
        this.lastPing = null;

        this.decoder.destroy();
      };

      /**
       * Close the current socket.
       *
       * @api private
       */

      Manager.prototype.close = Manager.prototype.disconnect = function () {
        debug('disconnect');
        this.skipReconnect = true;
        this.reconnecting = false;
        if ('opening' == this.readyState) {
          // `onclose` will not fire because
          // an open event never happened
          this.cleanup();
        }
        this.backoff.reset();
        this.readyState = 'closed';
        if (this.engine) this.engine.close();
      };

      /**
       * Called upon engine close.
       *
       * @api private
       */

      Manager.prototype.onclose = function (reason) {
        debug('onclose');

        this.cleanup();
        this.backoff.reset();
        this.readyState = 'closed';
        this.emit('close', reason);

        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      };

      /**
       * Attempt a reconnection.
       *
       * @api private
       */

      Manager.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;

        var self = this;

        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug('reconnect failed');
          this.backoff.reset();
          this.emitAll('reconnect_failed');
          this.reconnecting = false;
        } else {
          var delay = this.backoff.duration();
          debug('will wait %dms before reconnect attempt', delay);

          this.reconnecting = true;
          var timer = setTimeout(function () {
            if (self.skipReconnect) return;

            debug('attempting reconnect');
            self.emitAll('reconnect_attempt', self.backoff.attempts);
            self.emitAll('reconnecting', self.backoff.attempts);

            // check again for the case socket closed in above events
            if (self.skipReconnect) return;

            self.open(function (err) {
              if (err) {
                debug('reconnect attempt error');
                self.reconnecting = false;
                self.reconnect();
                self.emitAll('reconnect_error', err.data);
              } else {
                debug('reconnect success');
                self.onreconnect();
              }
            });
          }, delay);

          this.subs.push({
            destroy: function () {
              clearTimeout(timer);
            }
          });
        }
      };

      /**
       * Called upon successful reconnect.
       *
       * @api private
       */

      Manager.prototype.onreconnect = function () {
        var attempt = this.backoff.attempts;
        this.reconnecting = false;
        this.backoff.reset();
        this.updateSocketIds();
        this.emitAll('reconnect', attempt);
      };
    }, { "./on": 33, "./socket": 34, "backo2": 36, "component-bind": 37, "component-emitter": 38, "debug": 39, "engine.io-client": 1, "indexof": 42, "socket.io-parser": 47 }], 33: [function (_dereq_, module, exports) {

      /**
       * Module exports.
       */

      module.exports = on;

      /**
       * Helper for subscriptions.
       *
       * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
       * @param {String} event name
       * @param {Function} callback
       * @api public
       */

      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return {
          destroy: function () {
            obj.removeListener(ev, fn);
          }
        };
      }
    }, {}], 34: [function (_dereq_, module, exports) {

      /**
       * Module dependencies.
       */

      var parser = _dereq_('socket.io-parser');
      var Emitter = _dereq_('component-emitter');
      var toArray = _dereq_('to-array');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:socket');
      var hasBin = _dereq_('has-binary');

      /**
       * Module exports.
       */

      module.exports = exports = Socket;

      /**
       * Internal events (blacklisted).
       * These events can't be emitted by the user.
       *
       * @api private
       */

      var events = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      };

      /**
       * Shortcut to `Emitter#emit`.
       */

      var emit = Emitter.prototype.emit;

      /**
       * `Socket` constructor.
       *
       * @api public
       */

      function Socket(io, nsp) {
        this.io = io;
        this.nsp = nsp;
        this.json = this; // compat
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        if (this.io.autoConnect) this.open();
      }

      /**
       * Mix in `Emitter`.
       */

      Emitter(Socket.prototype);

      /**
       * Subscribe to open, close and packet events
       *
       * @api private
       */

      Socket.prototype.subEvents = function () {
        if (this.subs) return;

        var io = this.io;
        this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
      };

      /**
       * "Opens" the socket.
       *
       * @api public
       */

      Socket.prototype.open = Socket.prototype.connect = function () {
        if (this.connected) return this;

        this.subEvents();
        this.io.open(); // ensure open
        if ('open' == this.io.readyState) this.onopen();
        this.emit('connecting');
        return this;
      };

      /**
       * Sends a `message` event.
       *
       * @return {Socket} self
       * @api public
       */

      Socket.prototype.send = function () {
        var args = toArray(arguments);
        args.unshift('message');
        this.emit.apply(this, args);
        return this;
      };

      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @param {String} event name
       * @return {Socket} self
       * @api public
       */

      Socket.prototype.emit = function (ev) {
        if (events.hasOwnProperty(ev)) {
          emit.apply(this, arguments);
          return this;
        }

        var args = toArray(arguments);
        var parserType = parser.EVENT; // default
        if (hasBin(args)) {
          parserType = parser.BINARY_EVENT;
        } // binary
        var packet = { type: parserType, data: args };

        packet.options = {};
        packet.options.compress = !this.flags || false !== this.flags.compress;

        // event ack callback
        if ('function' == typeof args[args.length - 1]) {
          debug('emitting packet with ack id %d', this.ids);
          this.acks[this.ids] = args.pop();
          packet.id = this.ids++;
        }

        if (this.connected) {
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }

        delete this.flags;

        return this;
      };

      /**
       * Sends a packet.
       *
       * @param {Object} packet
       * @api private
       */

      Socket.prototype.packet = function (packet) {
        packet.nsp = this.nsp;
        this.io.packet(packet);
      };

      /**
       * Called upon engine `open`.
       *
       * @api private
       */

      Socket.prototype.onopen = function () {
        debug('transport is open - connecting');

        // write connect packet if necessary
        if ('/' != this.nsp) {
          this.packet({ type: parser.CONNECT });
        }
      };

      /**
       * Called upon engine `close`.
       *
       * @param {String} reason
       * @api private
       */

      Socket.prototype.onclose = function (reason) {
        debug('close (%s)', reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emit('disconnect', reason);
      };

      /**
       * Called with socket packet.
       *
       * @param {Object} packet
       * @api private
       */

      Socket.prototype.onpacket = function (packet) {
        if (packet.nsp != this.nsp) return;

        switch (packet.type) {
          case parser.CONNECT:
            this.onconnect();
            break;

          case parser.EVENT:
            this.onevent(packet);
            break;

          case parser.BINARY_EVENT:
            this.onevent(packet);
            break;

          case parser.ACK:
            this.onack(packet);
            break;

          case parser.BINARY_ACK:
            this.onack(packet);
            break;

          case parser.DISCONNECT:
            this.ondisconnect();
            break;

          case parser.ERROR:
            this.emit('error', packet.data);
            break;
        }
      };

      /**
       * Called upon a server event.
       *
       * @param {Object} packet
       * @api private
       */

      Socket.prototype.onevent = function (packet) {
        var args = packet.data || [];
        debug('emitting event %j', args);

        if (null != packet.id) {
          debug('attaching ack callback to event');
          args.push(this.ack(packet.id));
        }

        if (this.connected) {
          emit.apply(this, args);
        } else {
          this.receiveBuffer.push(args);
        }
      };

      /**
       * Produces an ack callback to emit with an event.
       *
       * @api private
       */

      Socket.prototype.ack = function (id) {
        var self = this;
        var sent = false;
        return function () {
          // prevent double callbacks
          if (sent) return;
          sent = true;
          var args = toArray(arguments);
          debug('sending ack %j', args);

          var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
          self.packet({
            type: type,
            id: id,
            data: args
          });
        };
      };

      /**
       * Called upon a server acknowlegement.
       *
       * @param {Object} packet
       * @api private
       */

      Socket.prototype.onack = function (packet) {
        var ack = this.acks[packet.id];
        if ('function' == typeof ack) {
          debug('calling ack %s with %j', packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else {
          debug('bad ack %s', packet.id);
        }
      };

      /**
       * Called upon server connect.
       *
       * @api private
       */

      Socket.prototype.onconnect = function () {
        this.connected = true;
        this.disconnected = false;
        this.emit('connect');
        this.emitBuffered();
      };

      /**
       * Emit buffered events (received and emitted).
       *
       * @api private
       */

      Socket.prototype.emitBuffered = function () {
        var i;
        for (i = 0; i < this.receiveBuffer.length; i++) {
          emit.apply(this, this.receiveBuffer[i]);
        }
        this.receiveBuffer = [];

        for (i = 0; i < this.sendBuffer.length; i++) {
          this.packet(this.sendBuffer[i]);
        }
        this.sendBuffer = [];
      };

      /**
       * Called upon server disconnect.
       *
       * @api private
       */

      Socket.prototype.ondisconnect = function () {
        debug('server disconnect (%s)', this.nsp);
        this.destroy();
        this.onclose('io server disconnect');
      };

      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @api private.
       */

      Socket.prototype.destroy = function () {
        if (this.subs) {
          // clean subscriptions to avoid reconnections
          for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].destroy();
          }
          this.subs = null;
        }

        this.io.destroy(this);
      };

      /**
       * Disconnects the socket manually.
       *
       * @return {Socket} self
       * @api public
       */

      Socket.prototype.close = Socket.prototype.disconnect = function () {
        if (this.connected) {
          debug('performing disconnect (%s)', this.nsp);
          this.packet({ type: parser.DISCONNECT });
        }

        // remove socket from pool
        this.destroy();

        if (this.connected) {
          // fire events
          this.onclose('io client disconnect');
        }
        return this;
      };

      /**
       * Sets the compress flag.
       *
       * @param {Boolean} if `true`, compresses the sending data
       * @return {Socket} self
       * @api public
       */

      Socket.prototype.compress = function (compress) {
        this.flags = this.flags || {};
        this.flags.compress = compress;
        return this;
      };
    }, { "./on": 33, "component-bind": 37, "component-emitter": 38, "debug": 39, "has-binary": 41, "socket.io-parser": 47, "to-array": 51 }], 35: [function (_dereq_, module, exports) {
      (function (global) {

        /**
         * Module dependencies.
         */

        var parseuri = _dereq_('parseuri');
        var debug = _dereq_('debug')('socket.io-client:url');

        /**
         * Module exports.
         */

        module.exports = url;

        /**
         * URL parser.
         *
         * @param {String} url
         * @param {Object} An object meant to mimic window.location.
         *                 Defaults to window.location.
         * @api public
         */

        function url(uri, loc) {
          var obj = uri;

          // default to window.location
          var loc = loc || global.location;
          if (null == uri) uri = loc.protocol + '//' + loc.host;

          // relative path support
          if ('string' == typeof uri) {
            if ('/' == uri.charAt(0)) {
              if ('/' == uri.charAt(1)) {
                uri = loc.protocol + uri;
              } else {
                uri = loc.host + uri;
              }
            }

            if (!/^(https?|wss?):\/\//.test(uri)) {
              debug('protocol-less url %s', uri);
              if ('undefined' != typeof loc) {
                uri = loc.protocol + '//' + uri;
              } else {
                uri = 'https://' + uri;
              }
            }

            // parse
            debug('parse %s', uri);
            obj = parseuri(uri);
          }

          // make sure we treat `localhost:80` and `localhost` equally
          if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) {
              obj.port = '80';
            } else if (/^(http|ws)s$/.test(obj.protocol)) {
              obj.port = '443';
            }
          }

          obj.path = obj.path || '/';

          var ipv6 = obj.host.indexOf(':') !== -1;
          var host = ipv6 ? '[' + obj.host + ']' : obj.host;

          // define unique id
          obj.id = obj.protocol + '://' + host + ':' + obj.port;
          // define href
          obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : ':' + obj.port);

          return obj;
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "debug": 39, "parseuri": 45 }], 36: [function (_dereq_, module, exports) {

      /**
       * Expose `Backoff`.
       */

      module.exports = Backoff;

      /**
       * Initialize backoff timer with `opts`.
       *
       * - `min` initial timeout in milliseconds [100]
       * - `max` max timeout [10000]
       * - `jitter` [0]
       * - `factor` [2]
       *
       * @param {Object} opts
       * @api public
       */

      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }

      /**
       * Return the backoff duration.
       *
       * @return {Number}
       * @api public
       */

      Backoff.prototype.duration = function () {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };

      /**
       * Reset the number of attempts.
       *
       * @api public
       */

      Backoff.prototype.reset = function () {
        this.attempts = 0;
      };

      /**
       * Set the minimum duration
       *
       * @api public
       */

      Backoff.prototype.setMin = function (min) {
        this.ms = min;
      };

      /**
       * Set the maximum duration
       *
       * @api public
       */

      Backoff.prototype.setMax = function (max) {
        this.max = max;
      };

      /**
       * Set the jitter
       *
       * @api public
       */

      Backoff.prototype.setJitter = function (jitter) {
        this.jitter = jitter;
      };
    }, {}], 37: [function (_dereq_, module, exports) {
      /**
       * Slice reference.
       */

      var slice = [].slice;

      /**
       * Bind `obj` to `fn`.
       *
       * @param {Object} obj
       * @param {Function|String} fn or string
       * @return {Function}
       * @api public
       */

      module.exports = function (obj, fn) {
        if ('string' == typeof fn) fn = obj[fn];
        if ('function' != typeof fn) throw new Error('bind() requires a function');
        var args = slice.call(arguments, 2);
        return function () {
          return fn.apply(obj, args.concat(slice.call(arguments)));
        };
      };
    }, {}], 38: [function (_dereq_, module, exports) {

      /**
       * Expose `Emitter`.
       */

      module.exports = Emitter;

      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */

      function Emitter(obj) {
        if (obj) return mixin(obj);
      };

      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }

      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };

      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };

      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};

        // all
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }

        // specific event
        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this;

        // remove all handlers
        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        }

        // remove specific handler
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };

      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */

      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks['$' + event];

        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };

      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */

      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };

      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */

      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
    }, {}], 39: [function (_dereq_, module, exports) {
      arguments[4][17][0].apply(exports, arguments);
    }, { "./debug": 40, "dup": 17 }], 40: [function (_dereq_, module, exports) {
      arguments[4][18][0].apply(exports, arguments);
    }, { "dup": 18, "ms": 44 }], 41: [function (_dereq_, module, exports) {
      (function (global) {

        /*
         * Module requirements.
         */

        var isArray = _dereq_('isarray');

        /**
         * Module exports.
         */

        module.exports = hasBinary;

        /**
         * Checks for binary data.
         *
         * Right now only Buffer and ArrayBuffer are supported..
         *
         * @param {Object} anything
         * @api public
         */

        function hasBinary(data) {

          function _hasBinary(obj) {
            if (!obj) return false;

            if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
              return true;
            }

            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              // see: https://github.com/Automattic/has-binary/pull/4
              if (obj.toJSON && 'function' == typeof obj.toJSON) {
                obj = obj.toJSON();
              }

              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }

            return false;
          }

          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "isarray": 43 }], 42: [function (_dereq_, module, exports) {
      arguments[4][23][0].apply(exports, arguments);
    }, { "dup": 23 }], 43: [function (_dereq_, module, exports) {
      arguments[4][24][0].apply(exports, arguments);
    }, { "dup": 24 }], 44: [function (_dereq_, module, exports) {
      arguments[4][25][0].apply(exports, arguments);
    }, { "dup": 25 }], 45: [function (_dereq_, module, exports) {
      arguments[4][28][0].apply(exports, arguments);
    }, { "dup": 28 }], 46: [function (_dereq_, module, exports) {
      (function (global) {
        /*global Blob,File*/

        /**
         * Module requirements
         */

        var isArray = _dereq_('isarray');
        var isBuf = _dereq_('./is-buffer');

        /**
         * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
         * Anything with blobs or files should be fed through removeBlobs before coming
         * here.
         *
         * @param {Object} packet - socket.io event packet
         * @return {Object} with deconstructed packet and list of buffers
         * @api public
         */

        exports.deconstructPacket = function (packet) {
          var buffers = [];
          var packetData = packet.data;

          function _deconstructPacket(data) {
            if (!data) return data;

            if (isBuf(data)) {
              var placeholder = { _placeholder: true, num: buffers.length };
              buffers.push(data);
              return placeholder;
            } else if (isArray(data)) {
              var newData = new Array(data.length);
              for (var i = 0; i < data.length; i++) {
                newData[i] = _deconstructPacket(data[i]);
              }
              return newData;
            } else if ('object' == typeof data && !(data instanceof Date)) {
              var newData = {};
              for (var key in data) {
                newData[key] = _deconstructPacket(data[key]);
              }
              return newData;
            }
            return data;
          }

          var pack = packet;
          pack.data = _deconstructPacket(packetData);
          pack.attachments = buffers.length; // number of binary 'attachments'
          return { packet: pack, buffers: buffers };
        };

        /**
         * Reconstructs a binary packet from its placeholder packet and buffers
         *
         * @param {Object} packet - event packet with placeholders
         * @param {Array} buffers - binary buffers to put in placeholder positions
         * @return {Object} reconstructed packet
         * @api public
         */

        exports.reconstructPacket = function (packet, buffers) {
          var curPlaceHolder = 0;

          function _reconstructPacket(data) {
            if (data && data._placeholder) {
              var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
              return buf;
            } else if (isArray(data)) {
              for (var i = 0; i < data.length; i++) {
                data[i] = _reconstructPacket(data[i]);
              }
              return data;
            } else if (data && 'object' == typeof data) {
              for (var key in data) {
                data[key] = _reconstructPacket(data[key]);
              }
              return data;
            }
            return data;
          }

          packet.data = _reconstructPacket(packet.data);
          packet.attachments = undefined; // no longer useful
          return packet;
        };

        /**
         * Asynchronously removes Blobs or Files from data via
         * FileReader's readAsArrayBuffer method. Used before encoding
         * data as msgpack. Calls callback with the blobless data.
         *
         * @param {Object} data
         * @param {Function} callback
         * @api private
         */

        exports.removeBlobs = function (data, callback) {
          function _removeBlobs(obj, curKey, containingObject) {
            if (!obj) return obj;

            // convert any blob
            if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
              pendingBlobs++;

              // async filereader
              var fileReader = new FileReader();
              fileReader.onload = function () {
                // this.result == arraybuffer
                if (containingObject) {
                  containingObject[curKey] = this.result;
                } else {
                  bloblessData = this.result;
                }

                // if nothing pending its callback time
                if (! --pendingBlobs) {
                  callback(bloblessData);
                }
              };

              fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
            } else if (isArray(obj)) {
              // handle array
              for (var i = 0; i < obj.length; i++) {
                _removeBlobs(obj[i], i, obj);
              }
            } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
              // and object
              for (var key in obj) {
                _removeBlobs(obj[key], key, obj);
              }
            }
          }

          var pendingBlobs = 0;
          var bloblessData = data;
          _removeBlobs(bloblessData);
          if (!pendingBlobs) {
            callback(bloblessData);
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, { "./is-buffer": 48, "isarray": 43 }], 47: [function (_dereq_, module, exports) {

      /**
       * Module dependencies.
       */

      var debug = _dereq_('debug')('socket.io-parser');
      var json = _dereq_('json3');
      var isArray = _dereq_('isarray');
      var Emitter = _dereq_('component-emitter');
      var binary = _dereq_('./binary');
      var isBuf = _dereq_('./is-buffer');

      /**
       * Protocol version.
       *
       * @api public
       */

      exports.protocol = 4;

      /**
       * Packet types.
       *
       * @api public
       */

      exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'BINARY_EVENT', 'ACK', 'BINARY_ACK', 'ERROR'];

      /**
       * Packet type `connect`.
       *
       * @api public
       */

      exports.CONNECT = 0;

      /**
       * Packet type `disconnect`.
       *
       * @api public
       */

      exports.DISCONNECT = 1;

      /**
       * Packet type `event`.
       *
       * @api public
       */

      exports.EVENT = 2;

      /**
       * Packet type `ack`.
       *
       * @api public
       */

      exports.ACK = 3;

      /**
       * Packet type `error`.
       *
       * @api public
       */

      exports.ERROR = 4;

      /**
       * Packet type 'binary event'
       *
       * @api public
       */

      exports.BINARY_EVENT = 5;

      /**
       * Packet type `binary ack`. For acks with binary arguments.
       *
       * @api public
       */

      exports.BINARY_ACK = 6;

      /**
       * Encoder constructor.
       *
       * @api public
       */

      exports.Encoder = Encoder;

      /**
       * Decoder constructor.
       *
       * @api public
       */

      exports.Decoder = Decoder;

      /**
       * A socket.io Encoder instance
       *
       * @api public
       */

      function Encoder() {}

      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       * @param {Function} callback - function to handle encodings (likely engine.write)
       * @return Calls callback with Array of encodings
       * @api public
       */

      Encoder.prototype.encode = function (obj, callback) {
        debug('encoding packet %j', obj);

        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          encodeAsBinary(obj, callback);
        } else {
          var encoding = encodeAsString(obj);
          callback([encoding]);
        }
      };

      /**
       * Encode packet as string.
       *
       * @param {Object} packet
       * @return {String} encoded
       * @api private
       */

      function encodeAsString(obj) {
        var str = '';
        var nsp = false;

        // first is type
        str += obj.type;

        // attachments if we have them
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          str += obj.attachments;
          str += '-';
        }

        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && '/' != obj.nsp) {
          nsp = true;
          str += obj.nsp;
        }

        // immediately followed by the id
        if (null != obj.id) {
          if (nsp) {
            str += ',';
            nsp = false;
          }
          str += obj.id;
        }

        // json data
        if (null != obj.data) {
          if (nsp) str += ',';
          str += json.stringify(obj.data);
        }

        debug('encoded %j as %s', obj, str);
        return str;
      }

      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       *
       * @param {Object} packet
       * @return {Buffer} encoded
       * @api private
       */

      function encodeAsBinary(obj, callback) {

        function writeEncoding(bloblessData) {
          var deconstruction = binary.deconstructPacket(bloblessData);
          var pack = encodeAsString(deconstruction.packet);
          var buffers = deconstruction.buffers;

          buffers.unshift(pack); // add packet info to beginning of data list
          callback(buffers); // write all the buffers
        }

        binary.removeBlobs(obj, writeEncoding);
      }

      /**
       * A socket.io Decoder instance
       *
       * @return {Object} decoder
       * @api public
       */

      function Decoder() {
        this.reconstructor = null;
      }

      /**
       * Mix in `Emitter` with Decoder.
       */

      Emitter(Decoder.prototype);

      /**
       * Decodes an ecoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       * @return {Object} packet
       * @api public
       */

      Decoder.prototype.add = function (obj) {
        var packet;
        if ('string' == typeof obj) {
          packet = decodeString(obj);
          if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
            // binary packet's json
            this.reconstructor = new BinaryReconstructor(packet);

            // no attachments, labeled binary but no binary data to follow
            if (this.reconstructor.reconPack.attachments === 0) {
              this.emit('decoded', packet);
            }
          } else {
            // non-binary full packet
            this.emit('decoded', packet);
          }
        } else if (isBuf(obj) || obj.base64) {
          // raw binary data
          if (!this.reconstructor) {
            throw new Error('got binary data when not reconstructing a packet');
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              // received final buffer
              this.reconstructor = null;
              this.emit('decoded', packet);
            }
          }
        } else {
          throw new Error('Unknown type: ' + obj);
        }
      };

      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       * @api private
       */

      function decodeString(str) {
        var p = {};
        var i = 0;

        // look up type
        p.type = Number(str.charAt(0));
        if (null == exports.types[p.type]) return error();

        // look up attachments if type binary
        if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
          var buf = '';
          while (str.charAt(++i) != '-') {
            buf += str.charAt(i);
            if (i == str.length) break;
          }
          if (buf != Number(buf) || str.charAt(i) != '-') {
            throw new Error('Illegal attachments');
          }
          p.attachments = Number(buf);
        }

        // look up namespace (if any)
        if ('/' == str.charAt(i + 1)) {
          p.nsp = '';
          while (++i) {
            var c = str.charAt(i);
            if (',' == c) break;
            p.nsp += c;
            if (i == str.length) break;
          }
        } else {
          p.nsp = '/';
        }

        // look up id
        var next = str.charAt(i + 1);
        if ('' !== next && Number(next) == next) {
          p.id = '';
          while (++i) {
            var c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            p.id += str.charAt(i);
            if (i == str.length) break;
          }
          p.id = Number(p.id);
        }

        // look up json data
        if (str.charAt(++i)) {
          try {
            p.data = json.parse(str.substr(i));
          } catch (e) {
            return error();
          }
        }

        debug('decoded %s as %j', str, p);
        return p;
      }

      /**
       * Deallocates a parser's resources
       *
       * @api public
       */

      Decoder.prototype.destroy = function () {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      };

      /**
       * A manager of a binary event's 'buffer sequence'. Should
       * be constructed whenever a packet of type BINARY_EVENT is
       * decoded.
       *
       * @param {Object} packet
       * @return {BinaryReconstructor} initialized reconstructor
       * @api private
       */

      function BinaryReconstructor(packet) {
        this.reconPack = packet;
        this.buffers = [];
      }

      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       * @api private
       */

      BinaryReconstructor.prototype.takeBinaryData = function (binData) {
        this.buffers.push(binData);
        if (this.buffers.length == this.reconPack.attachments) {
          // done with buffer list
          var packet = binary.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      };

      /**
       * Cleans up binary packet reconstruction variables.
       *
       * @api private
       */

      BinaryReconstructor.prototype.finishedReconstruction = function () {
        this.reconPack = null;
        this.buffers = [];
      };

      function error(data) {
        return {
          type: exports.ERROR,
          data: 'parser error'
        };
      }
    }, { "./binary": 46, "./is-buffer": 48, "component-emitter": 49, "debug": 39, "isarray": 43, "json3": 50 }], 48: [function (_dereq_, module, exports) {
      (function (global) {

        module.exports = isBuf;

        /**
         * Returns true if obj is a buffer or an arraybuffer.
         *
         * @api private
         */

        function isBuf(obj) {
          return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}], 49: [function (_dereq_, module, exports) {
      arguments[4][15][0].apply(exports, arguments);
    }, { "dup": 15 }], 50: [function (_dereq_, module, exports) {
      (function (global) {
        /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        ;(function () {
          // Detect the `define` function exposed by asynchronous module loaders. The
          // strict `define` check is necessary for compatibility with `r.js`.
          var isLoader = typeof define === "function" && define.amd;

          // A set of types used to distinguish objects from primitives.
          var objectTypes = {
            "function": true,
            "object": true
          };

          // Detect the `exports` object exposed by CommonJS implementations.
          var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

          // Use the `global` object exposed by Node (including Browserify via
          // `insert-module-globals`), Narwhal, and Ringo as the default context,
          // and the `window` object in browsers. Rhino exports a `global` function
          // instead.
          var root = objectTypes[typeof window] && window || this,
              freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

          if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
            root = freeGlobal;
          }

          // Public: Initializes JSON 3 using the given `context` object, attaching the
          // `stringify` and `parse` functions to the specified `exports` object.
          function runInContext(context, exports) {
            context || (context = root["Object"]());
            exports || (exports = root["Object"]());

            // Native constructor aliases.
            var Number = context["Number"] || root["Number"],
                String = context["String"] || root["String"],
                Object = context["Object"] || root["Object"],
                Date = context["Date"] || root["Date"],
                SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                TypeError = context["TypeError"] || root["TypeError"],
                Math = context["Math"] || root["Math"],
                nativeJSON = context["JSON"] || root["JSON"];

            // Delegate to the native `stringify` and `parse` implementations.
            if (typeof nativeJSON == "object" && nativeJSON) {
              exports.stringify = nativeJSON.stringify;
              exports.parse = nativeJSON.parse;
            }

            // Convenience aliases.
            var objectProto = Object.prototype,
                getClass = objectProto.toString,
                isProperty,
                forEach,
                undef;

            // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
            var isExtended = new Date(-3509827334573292);
            try {
              // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
              // results for certain dates in Opera >= 10.53.
              isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
              // Safari < 2.0.2 stores the internal millisecond time value correctly,
              // but clips the values returned by the date methods to the range of
              // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
              isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
            } catch (exception) {}

            // Internal: Determines whether the native `JSON.stringify` and `parse`
            // implementations are spec-compliant. Based on work by Ken Snyder.
            function has(name) {
              if (has[name] !== undef) {
                // Return cached feature test result.
                return has[name];
              }
              var isSupported;
              if (name == "bug-string-char-index") {
                // IE <= 7 doesn't support accessing string characters using square
                // bracket notation. IE 8 only supports this for primitives.
                isSupported = "a"[0] != "a";
              } else if (name == "json") {
                // Indicates whether both `JSON.stringify` and `JSON.parse` are
                // supported.
                isSupported = has("json-stringify") && has("json-parse");
              } else {
                var value,
                    serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                // Test `JSON.stringify`.
                if (name == "json-stringify") {
                  var stringify = exports.stringify,
                      stringifySupported = typeof stringify == "function" && isExtended;
                  if (stringifySupported) {
                    // A test function object with a custom `toJSON` method.
                    (value = function () {
                      return 1;
                    }).toJSON = value;
                    try {
                      stringifySupported =
                      // Firefox 3.1b1 and b2 serialize string, number, and boolean
                      // primitives as object literals.
                      stringify(0) === "0" &&
                      // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                      // literals.
                      stringify(new Number()) === "0" && stringify(new String()) == '""' &&
                      // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                      // does not define a canonical JSON representation (this applies to
                      // objects with `toJSON` properties as well, *unless* they are nested
                      // within an object or array).
                      stringify(getClass) === undef &&
                      // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                      // FF 3.1b3 pass this test.
                      stringify(undef) === undef &&
                      // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                      // respectively, if the value is omitted entirely.
                      stringify() === undef &&
                      // FF 3.1b1, 2 throw an error if the given value is not a number,
                      // string, array, object, Boolean, or `null` literal. This applies to
                      // objects with custom `toJSON` methods as well, unless they are nested
                      // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                      // methods entirely.
                      stringify(value) === "1" && stringify([value]) == "[1]" &&
                      // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                      // `"[null]"`.
                      stringify([undef]) == "[null]" &&
                      // YUI 3.0.0b1 fails to serialize `null` literals.
                      stringify(null) == "null" &&
                      // FF 3.1b1, 2 halts serialization if an array contains a function:
                      // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                      // elides non-JSON values from objects and arrays, unless they
                      // define custom `toJSON` methods.
                      stringify([undef, getClass, null]) == "[null,null,null]" &&
                      // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                      // where character escape codes are expected (e.g., `\b` => `\u0008`).
                      stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                      // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                      stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                      // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                      // serialize extended years.
                      stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                      // The milliseconds are optional in ES 5, but required in 5.1.
                      stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                      // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                      // four-digit years instead of six-digit years. Credits: @Yaffle.
                      stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                      // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                      // values less than 1000. Credits: @Yaffle.
                      stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                    } catch (exception) {
                      stringifySupported = false;
                    }
                  }
                  isSupported = stringifySupported;
                }
                // Test `JSON.parse`.
                if (name == "json-parse") {
                  var parse = exports.parse;
                  if (typeof parse == "function") {
                    try {
                      // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                      // Conforming implementations should also coerce the initial argument to
                      // a string prior to parsing.
                      if (parse("0") === 0 && !parse(false)) {
                        // Simple parsing test.
                        value = parse(serialized);
                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                        if (parseSupported) {
                          try {
                            // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                            parseSupported = !parse('"\t"');
                          } catch (exception) {}
                          if (parseSupported) {
                            try {
                              // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                              // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                              // certain octal literals.
                              parseSupported = parse("01") !== 1;
                            } catch (exception) {}
                          }
                          if (parseSupported) {
                            try {
                              // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                              // points. These environments, along with FF 3.1b1 and 2,
                              // also allow trailing commas in JSON objects and arrays.
                              parseSupported = parse("1.") !== 1;
                            } catch (exception) {}
                          }
                        }
                      }
                    } catch (exception) {
                      parseSupported = false;
                    }
                  }
                  isSupported = parseSupported;
                }
              }
              return has[name] = !!isSupported;
            }

            if (!has("json")) {
              // Common `[[Class]]` name aliases.
              var functionClass = "[object Function]",
                  dateClass = "[object Date]",
                  numberClass = "[object Number]",
                  stringClass = "[object String]",
                  arrayClass = "[object Array]",
                  booleanClass = "[object Boolean]";

              // Detect incomplete support for accessing string characters by index.
              var charIndexBuggy = has("bug-string-char-index");

              // Define additional utility methods if the `Date` methods are buggy.
              if (!isExtended) {
                var floor = Math.floor;
                // A mapping between the months of the year and the number of days between
                // January 1st and the first of the respective month.
                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                // Internal: Calculates the number of days between the Unix epoch and the
                // first day of the given month.
                var getDay = function (year, month) {
                  return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                };
              }

              // Internal: Determines if a property is a direct property of the given
              // object. Delegates to the native `Object#hasOwnProperty` method.
              if (!(isProperty = objectProto.hasOwnProperty)) {
                isProperty = function (property) {
                  var members = {},
                      constructor;
                  if ((members.__proto__ = null, members.__proto__ = {
                    // The *proto* property cannot be set multiple times in recent
                    // versions of Firefox and SeaMonkey.
                    "toString": 1
                  }, members).toString != getClass) {
                    // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                    // supports the mutable *proto* property.
                    isProperty = function (property) {
                      // Capture and break the object's prototype chain (see section 8.6.2
                      // of the ES 5.1 spec). The parenthesized expression prevents an
                      // unsafe transformation by the Closure Compiler.
                      var original = this.__proto__,
                          result = property in (this.__proto__ = null, this);
                      // Restore the original prototype chain.
                      this.__proto__ = original;
                      return result;
                    };
                  } else {
                    // Capture a reference to the top-level `Object` constructor.
                    constructor = members.constructor;
                    // Use the `constructor` property to simulate `Object#hasOwnProperty` in
                    // other environments.
                    isProperty = function (property) {
                      var parent = (this.constructor || constructor).prototype;
                      return property in this && !(property in parent && this[property] === parent[property]);
                    };
                  }
                  members = null;
                  return isProperty.call(this, property);
                };
              }

              // Internal: Normalizes the `for...in` iteration algorithm across
              // environments. Each enumerated key is yielded to a `callback` function.
              forEach = function (object, callback) {
                var size = 0,
                    Properties,
                    members,
                    property;

                // Tests for bugs in the current environment's `for...in` algorithm. The
                // `valueOf` property inherits the non-enumerable flag from
                // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                (Properties = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0;

                // Iterate over a new instance of the `Properties` class.
                members = new Properties();
                for (property in members) {
                  // Ignore all properties inherited from `Object.prototype`.
                  if (isProperty.call(members, property)) {
                    size++;
                  }
                }
                Properties = members = null;

                // Normalize the iteration algorithm.
                if (!size) {
                  // A list of non-enumerable properties inherited from `Object.prototype`.
                  members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                  // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                  // properties.
                  forEach = function (object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        length;
                    var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                    for (property in object) {
                      // Gecko <= 1.0 enumerates the `prototype` property of functions under
                      // certain conditions; IE does not.
                      if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                    // Manually invoke the callback for each non-enumerable property.
                    for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                  };
                } else if (size == 2) {
                  // Safari <= 2.0.4 enumerates shadowed properties twice.
                  forEach = function (object, callback) {
                    // Create a set of iterated properties.
                    var members = {},
                        isFunction = getClass.call(object) == functionClass,
                        property;
                    for (property in object) {
                      // Store each property name to prevent double enumeration. The
                      // `prototype` property of functions is not enumerated due to cross-
                      // environment inconsistencies.
                      if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                  };
                } else {
                  // No bugs detected; use the standard `for...in` algorithm.
                  forEach = function (object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        isConstructor;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                        callback(property);
                      }
                    }
                    // Manually invoke the callback for the `constructor` property due to
                    // cross-environment inconsistencies.
                    if (isConstructor || isProperty.call(object, property = "constructor")) {
                      callback(property);
                    }
                  };
                }
                return forEach(object, callback);
              };

              // Public: Serializes a JavaScript `value` as a JSON string. The optional
              // `filter` argument may specify either a function that alters how object and
              // array members are serialized, or an array of strings and numbers that
              // indicates which properties should be serialized. The optional `width`
              // argument may be either a string or number that specifies the indentation
              // level of the output.
              if (!has("json-stringify")) {
                // Internal: A map of control characters and their escaped equivalents.
                var Escapes = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                };

                // Internal: Converts `value` into a zero-padded string such that its
                // length is at least equal to `width`. The `width` must be <= 6.
                var leadingZeroes = "000000";
                var toPaddedString = function (width, value) {
                  // The `|| 0` expression is necessary to work around a bug in
                  // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                  return (leadingZeroes + (value || 0)).slice(-width);
                };

                // Internal: Double-quotes a string `value`, replacing all ASCII control
                // characters (characters with code unit values between 0 and 31) with
                // their escaped equivalents. This is an implementation of the
                // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
                var unicodePrefix = "\\u00";
                var quote = function (value) {
                  var result = '"',
                      index = 0,
                      length = value.length,
                      useCharIndex = !charIndexBuggy || length > 10;
                  var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                  for (; index < length; index++) {
                    var charCode = value.charCodeAt(index);
                    // If the character is a control character, append its Unicode or
                    // shorthand escape sequence; otherwise, append the character as-is.
                    switch (charCode) {
                      case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                        result += Escapes[charCode];
                        break;
                      default:
                        if (charCode < 32) {
                          result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                          break;
                        }
                        result += useCharIndex ? symbols[index] : value.charAt(index);
                    }
                  }
                  return result + '"';
                };

                // Internal: Recursively serializes an object. Implements the
                // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
                var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
                  var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                  try {
                    // Necessary for host object support.
                    value = object[property];
                  } catch (exception) {}
                  if (typeof value == "object" && value) {
                    className = getClass.call(value);
                    if (className == dateClass && !isProperty.call(value, "toJSON")) {
                      if (value > -1 / 0 && value < 1 / 0) {
                        // Dates are serialized according to the `Date#toJSON` method
                        // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                        // for the ISO 8601 date time string format.
                        if (getDay) {
                          // Manually compute the year, month, date, hours, minutes,
                          // seconds, and milliseconds if the `getUTC*` methods are
                          // buggy. Adapted from @Yaffle's `date-shim` project.
                          date = floor(value / 864e5);
                          for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                          for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                          date = 1 + date - getDay(year, month);
                          // The `time` value specifies the time within the day (see ES
                          // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                          // to compute `A modulo B`, as the `%` operator does not
                          // correspond to the `modulo` operation for negative numbers.
                          time = (value % 864e5 + 864e5) % 864e5;
                          // The hours, minutes, seconds, and milliseconds are obtained by
                          // decomposing the time within the day. See section 15.9.1.10.
                          hours = floor(time / 36e5) % 24;
                          minutes = floor(time / 6e4) % 60;
                          seconds = floor(time / 1e3) % 60;
                          milliseconds = time % 1e3;
                        } else {
                          year = value.getUTCFullYear();
                          month = value.getUTCMonth();
                          date = value.getUTCDate();
                          hours = value.getUTCHours();
                          minutes = value.getUTCMinutes();
                          seconds = value.getUTCSeconds();
                          milliseconds = value.getUTCMilliseconds();
                        }
                        // Serialize extended years correctly.
                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                        // Months, dates, hours, minutes, and seconds should have two
                        // digits; milliseconds should have three.
                        "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                        // Milliseconds are optional in ES 5.0, but required in 5.1.
                        "." + toPaddedString(3, milliseconds) + "Z";
                      } else {
                        value = null;
                      }
                    } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
                      // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                      // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                      // ignores all `toJSON` methods on these objects unless they are
                      // defined directly on an instance.
                      value = value.toJSON(property);
                    }
                  }
                  if (callback) {
                    // If a replacement function was provided, call it to obtain the value
                    // for serialization.
                    value = callback.call(object, property, value);
                  }
                  if (value === null) {
                    return "null";
                  }
                  className = getClass.call(value);
                  if (className == booleanClass) {
                    // Booleans are represented literally.
                    return "" + value;
                  } else if (className == numberClass) {
                    // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                    // `"null"`.
                    return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                  } else if (className == stringClass) {
                    // Strings are double-quoted and escaped.
                    return quote("" + value);
                  }
                  // Recursively serialize objects and arrays.
                  if (typeof value == "object") {
                    // Check for cyclic structures. This is a linear search; performance
                    // is inversely proportional to the number of unique nested objects.
                    for (length = stack.length; length--;) {
                      if (stack[length] === value) {
                        // Cyclic structures cannot be serialized by `JSON.stringify`.
                        throw TypeError();
                      }
                    }
                    // Add the object to the stack of traversed objects.
                    stack.push(value);
                    results = [];
                    // Save the current indentation level and indent one additional level.
                    prefix = indentation;
                    indentation += whitespace;
                    if (className == arrayClass) {
                      // Recursively serialize array elements.
                      for (index = 0, length = value.length; index < length; index++) {
                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                        results.push(element === undef ? "null" : element);
                      }
                      result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                    } else {
                      // Recursively serialize object members. Members are selected from
                      // either a user-specified list of property names, or the object
                      // itself.
                      forEach(properties || value, function (property) {
                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                        if (element !== undef) {
                          // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                          // is not the empty string, let `member` {quote(property) + ":"}
                          // be the concatenation of `member` and the `space` character."
                          // The "`space` character" refers to the literal space
                          // character, not the `space` {width} argument provided to
                          // `JSON.stringify`.
                          results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                        }
                      });
                      result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                    }
                    // Remove the object from the traversed object stack.
                    stack.pop();
                    return result;
                  }
                };

                // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
                exports.stringify = function (source, filter, width) {
                  var whitespace, callback, properties, className;
                  if (objectTypes[typeof filter] && filter) {
                    if ((className = getClass.call(filter)) == functionClass) {
                      callback = filter;
                    } else if (className == arrayClass) {
                      // Convert the property names array into a makeshift set.
                      properties = {};
                      for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
                    }
                  }
                  if (width) {
                    if ((className = getClass.call(width)) == numberClass) {
                      // Convert the `width` to an integer and create a string containing
                      // `width` number of space characters.
                      if ((width -= width % 1) > 0) {
                        for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                      }
                    } else if (className == stringClass) {
                      whitespace = width.length <= 10 ? width : width.slice(0, 10);
                    }
                  }
                  // Opera <= 7.54u2 discards the values associated with empty string keys
                  // (`""`) only if they are used directly within an object member list
                  // (e.g., `!("" in { "": 1})`).
                  return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                };
              }

              // Public: Parses a JSON source string.
              if (!has("json-parse")) {
                var fromCharCode = String.fromCharCode;

                // Internal: A map of escaped control characters and their unescaped
                // equivalents.
                var Unescapes = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "\t",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                };

                // Internal: Stores the parser state.
                var Index, Source;

                // Internal: Resets the parser state and throws a `SyntaxError`.
                var abort = function () {
                  Index = Source = null;
                  throw SyntaxError();
                };

                // Internal: Returns the next token, or `"$"` if the parser has reached
                // the end of the source string. A token may be a string, number, `null`
                // literal, or Boolean literal.
                var lex = function () {
                  var source = Source,
                      length = source.length,
                      value,
                      begin,
                      position,
                      isSigned,
                      charCode;
                  while (Index < length) {
                    charCode = source.charCodeAt(Index);
                    switch (charCode) {
                      case 9:case 10:case 13:case 32:
                        // Skip whitespace tokens, including tabs, carriage returns, line
                        // feeds, and space characters.
                        Index++;
                        break;
                      case 123:case 125:case 91:case 93:case 58:case 44:
                        // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                        // the current position.
                        value = charIndexBuggy ? source.charAt(Index) : source[Index];
                        Index++;
                        return value;
                      case 34:
                        // `"` delimits a JSON string; advance to the next character and
                        // begin parsing the string. String tokens are prefixed with the
                        // sentinel `@` character to distinguish them from punctuators and
                        // end-of-string tokens.
                        for (value = "@", Index++; Index < length;) {
                          charCode = source.charCodeAt(Index);
                          if (charCode < 32) {
                            // Unescaped ASCII control characters (those with a code unit
                            // less than the space character) are not permitted.
                            abort();
                          } else if (charCode == 92) {
                            // A reverse solidus (`\`) marks the beginning of an escaped
                            // control character (including `"`, `\`, and `/`) or Unicode
                            // escape sequence.
                            charCode = source.charCodeAt(++Index);
                            switch (charCode) {
                              case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                                // Revive escaped control characters.
                                value += Unescapes[charCode];
                                Index++;
                                break;
                              case 117:
                                // `\u` marks the beginning of a Unicode escape sequence.
                                // Advance to the first character and validate the
                                // four-digit code point.
                                begin = ++Index;
                                for (position = Index + 4; Index < position; Index++) {
                                  charCode = source.charCodeAt(Index);
                                  // A valid sequence comprises four hexdigits (case-
                                  // insensitive) that form a single hexadecimal value.
                                  if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                    // Invalid Unicode escape sequence.
                                    abort();
                                  }
                                }
                                // Revive the escaped character.
                                value += fromCharCode("0x" + source.slice(begin, Index));
                                break;
                              default:
                                // Invalid escape sequence.
                                abort();
                            }
                          } else {
                            if (charCode == 34) {
                              // An unescaped double-quote character marks the end of the
                              // string.
                              break;
                            }
                            charCode = source.charCodeAt(Index);
                            begin = Index;
                            // Optimize for the common case where a string is valid.
                            while (charCode >= 32 && charCode != 92 && charCode != 34) {
                              charCode = source.charCodeAt(++Index);
                            }
                            // Append the string as-is.
                            value += source.slice(begin, Index);
                          }
                        }
                        if (source.charCodeAt(Index) == 34) {
                          // Advance to the next character and return the revived string.
                          Index++;
                          return value;
                        }
                        // Unterminated string.
                        abort();
                      default:
                        // Parse numbers and literals.
                        begin = Index;
                        // Advance past the negative sign, if one is specified.
                        if (charCode == 45) {
                          isSigned = true;
                          charCode = source.charCodeAt(++Index);
                        }
                        // Parse an integer or floating-point value.
                        if (charCode >= 48 && charCode <= 57) {
                          // Leading zeroes are interpreted as octal literals.
                          if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                            // Illegal octal literal.
                            abort();
                          }
                          isSigned = false;
                          // Parse the integer component.
                          for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                          // Floats cannot contain a leading decimal point; however, this
                          // case is already accounted for by the parser.
                          if (source.charCodeAt(Index) == 46) {
                            position = ++Index;
                            // Parse the decimal component.
                            for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                            if (position == Index) {
                              // Illegal trailing decimal.
                              abort();
                            }
                            Index = position;
                          }
                          // Parse exponents. The `e` denoting the exponent is
                          // case-insensitive.
                          charCode = source.charCodeAt(Index);
                          if (charCode == 101 || charCode == 69) {
                            charCode = source.charCodeAt(++Index);
                            // Skip past the sign following the exponent, if one is
                            // specified.
                            if (charCode == 43 || charCode == 45) {
                              Index++;
                            }
                            // Parse the exponential component.
                            for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                            if (position == Index) {
                              // Illegal empty exponent.
                              abort();
                            }
                            Index = position;
                          }
                          // Coerce the parsed value to a JavaScript number.
                          return +source.slice(begin, Index);
                        }
                        // A negative sign may only precede numbers.
                        if (isSigned) {
                          abort();
                        }
                        // `true`, `false`, and `null` literals.
                        if (source.slice(Index, Index + 4) == "true") {
                          Index += 4;
                          return true;
                        } else if (source.slice(Index, Index + 5) == "false") {
                          Index += 5;
                          return false;
                        } else if (source.slice(Index, Index + 4) == "null") {
                          Index += 4;
                          return null;
                        }
                        // Unrecognized token.
                        abort();
                    }
                  }
                  // Return the sentinel `$` character if the parser has reached the end
                  // of the source string.
                  return "$";
                };

                // Internal: Parses a JSON `value` token.
                var get = function (value) {
                  var results, hasMembers;
                  if (value == "$") {
                    // Unexpected end of input.
                    abort();
                  }
                  if (typeof value == "string") {
                    if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                      // Remove the sentinel `@` character.
                      return value.slice(1);
                    }
                    // Parse object and array literals.
                    if (value == "[") {
                      // Parses a JSON array, returning a new JavaScript array.
                      results = [];
                      for (;; hasMembers || (hasMembers = true)) {
                        value = lex();
                        // A closing square bracket marks the end of the array literal.
                        if (value == "]") {
                          break;
                        }
                        // If the array literal contains elements, the current token
                        // should be a comma separating the previous element from the
                        // next.
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "]") {
                              // Unexpected trailing `,` in array literal.
                              abort();
                            }
                          } else {
                            // A `,` must separate each array element.
                            abort();
                          }
                        }
                        // Elisions and leading commas are not permitted.
                        if (value == ",") {
                          abort();
                        }
                        results.push(get(value));
                      }
                      return results;
                    } else if (value == "{") {
                      // Parses a JSON object, returning a new JavaScript object.
                      results = {};
                      for (;; hasMembers || (hasMembers = true)) {
                        value = lex();
                        // A closing curly brace marks the end of the object literal.
                        if (value == "}") {
                          break;
                        }
                        // If the object literal contains members, the current token
                        // should be a comma separator.
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "}") {
                              // Unexpected trailing `,` in object literal.
                              abort();
                            }
                          } else {
                            // A `,` must separate each object member.
                            abort();
                          }
                        }
                        // Leading commas are not permitted, object property names must be
                        // double-quoted strings, and a `:` must separate each property
                        // name and value.
                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                          abort();
                        }
                        results[value.slice(1)] = get(lex());
                      }
                      return results;
                    }
                    // Unexpected token encountered.
                    abort();
                  }
                  return value;
                };

                // Internal: Updates a traversed object member.
                var update = function (source, property, callback) {
                  var element = walk(source, property, callback);
                  if (element === undef) {
                    delete source[property];
                  } else {
                    source[property] = element;
                  }
                };

                // Internal: Recursively traverses a parsed JSON object, invoking the
                // `callback` function for each value. This is an implementation of the
                // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
                var walk = function (source, property, callback) {
                  var value = source[property],
                      length;
                  if (typeof value == "object" && value) {
                    // `forEach` can't be used to traverse an array in Opera <= 8.54
                    // because its `Object#hasOwnProperty` implementation returns `false`
                    // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                    if (getClass.call(value) == arrayClass) {
                      for (length = value.length; length--;) {
                        update(value, length, callback);
                      }
                    } else {
                      forEach(value, function (property) {
                        update(value, property, callback);
                      });
                    }
                  }
                  return callback.call(source, property, value);
                };

                // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
                exports.parse = function (source, callback) {
                  var result, value;
                  Index = 0;
                  Source = "" + source;
                  result = get(lex());
                  // If a JSON string contains multiple tokens, it is invalid.
                  if (lex() != "$") {
                    abort();
                  }
                  // Reset the parser state.
                  Index = Source = null;
                  return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                };
              }
            }

            exports["runInContext"] = runInContext;
            return exports;
          }

          if (freeExports && !isLoader) {
            // Export for CommonJS environments.
            runInContext(root, freeExports);
          } else {
            // Export for web browsers and JavaScript engines.
            var nativeJSON = root.JSON,
                previousJSON = root["JSON3"],
                isRestored = false;

            var JSON3 = runInContext(root, root["JSON3"] = {
              // Public: Restores the original value of the global `JSON` object and
              // returns a reference to the `JSON3` object.
              "noConflict": function () {
                if (!isRestored) {
                  isRestored = true;
                  root.JSON = nativeJSON;
                  root["JSON3"] = previousJSON;
                  nativeJSON = previousJSON = null;
                }
                return JSON3;
              }
            });

            root.JSON = {
              "parse": JSON3.parse,
              "stringify": JSON3.stringify
            };
          }

          // Export for asynchronous module loaders.
          if (isLoader) {
            define(function () {
              return JSON3;
            });
          }
        }).call(this);
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}], 51: [function (_dereq_, module, exports) {
      module.exports = toArray;

      function toArray(list, index) {
        var array = [];

        index = index || 0;

        for (var i = index || 0; i < list.length; i++) {
          array[i - index] = list[i];
        }

        return array;
      }
    }, {}] }, {}, [31])(31);
});
var socket = io.connect("ws://localhost:8000");

var vm = new Vue({
  el: "#app",
  data: {
    list: [],
    input: "",
    userName: ""
  },

  ready() {
    this.createUser();
    this.init();
    this.list = [{
      name: "AI",
      txt: "hi,我是小i"
    }];

    this.scrollToBottom();
  },

  methods: {
    createUser() {
      var names = ["刘禅", "庄周", "韩信", "墨子", "李白", "貂蝉", "妲己", "小乔", "后羿", "张良", "荆轲", "达摩"];
      this.userName = names[parseInt(names.length * Math.random())];
    },

    init() {
      var self = this;
      socket.on("server_send", function (data) {
        if (data) {
          self.list.push({
            name: "AI",
            txt: data
          });
          self.scrollToBottom();
        }
      });
    },

    send() {
      var self = this;
      if (self.input) {
        self.list.push({
          name: self.userName,
          txt: self.input
        });
        self.scrollToBottom();
        socket.emit("client_send", self.input);
        self.input = "";
      } else {
        //alert("请输入内容");
      }
    },

    scrollToBottom() {
      var list = document.getElementById('list');
      window.scrollTo(0, list.clientHeight);
    }

  }
});