"use strict";

// src/main.tsx
var import_obsidian = require("obsidian");

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var y = [];
var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u3, t2) {
  var i3, r2, o2, e2 = {};
  for (o2 in u3) "key" == o2 ? i3 = u3[o2] : "ref" == o2 ? r2 = u3[o2] : e2[o2] = u3[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) null == e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m(l2, e2, i3, r2, null);
}
function m(n2, t2, i3, r2, o2) {
  var e2 = { type: n2, props: t2, key: i3, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l2, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u3, t2, r2, o2, f3, c2, s2 = 1; i.length; ) i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (t2 = void 0, o2 = (r2 = (u3 = n2).__v).__e, f3 = [], c2 = [], u3.__P && ((t2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(t2), O(u3.__P, t2, r2, u3.__n, u3.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f3, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, z(f3, t2, c2), t2.__e != o2 && C(t2)));
  $.__r = 0;
}
function I(n2, l2, u3, t2, i3, r2, o2, e2, f3, c2, s2) {
  var a2, h3, v2, w2, d2, g2, _2 = t2 && t2.__k || y, m2 = l2.length;
  for (f3 = P(u3, l2, _2, f3, m2), a2 = 0; a2 < m2; a2++) null != (v2 = u3.__k[a2]) && (h3 = -1 == v2.__i ? p : _2[v2.__i] || p, v2.__i = a2, g2 = O(n2, v2, h3, i3, r2, o2, e2, f3, c2, s2), w2 = v2.__e, v2.ref && h3.ref != v2.ref && (h3.ref && q(h3.ref, null, v2), s2.push(v2.ref, v2.__c || w2, v2)), null == d2 && null != w2 && (d2 = w2), 4 & v2.__u || h3.__k === v2.__k ? f3 = A(v2, f3, n2) : "function" == typeof v2.type && void 0 !== g2 ? f3 = g2 : w2 && (f3 = w2.nextSibling), v2.__u &= -7);
  return u3.__e = d2, f3;
}
function P(n2, l2, u3, t2, i3) {
  var r2, o2, e2, f3, c2, s2 = u3.length, a2 = s2, h3 = 0;
  for (n2.__k = new Array(i3), r2 = 0; r2 < i3; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f3 = r2 + h3, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m(null, o2, null, null, null) : w(o2) ? m(k, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = L(o2, u3, f3, a2)) && (a2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i3 > s2 ? h3-- : i3 < s2 && h3++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h3-- : c2 == f3 + 1 ? h3++ : (c2 > f3 ? h3-- : h3++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), B(e2, e2));
  return t2;
}
function A(n2, l2, u3) {
  var t2, i3;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i3 = 0; t2 && i3 < t2.length; i3++) t2[i3] && (t2[i3].__ = n2, l2 = A(t2[i3], l2, u3));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u3.contains(l2) && (l2 = S(n2)), u3.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function L(n2, l2, u3, t2) {
  var i3, r2, o2 = n2.key, e2 = n2.type, f3 = l2[u3];
  if (null === f3 && null == n2.key || f3 && o2 == f3.key && e2 == f3.type && 0 == (2 & f3.__u)) return u3;
  if (t2 > (null != f3 && 0 == (2 & f3.__u) ? 1 : 0)) for (i3 = u3 - 1, r2 = u3 + 1; i3 >= 0 || r2 < l2.length; ) {
    if (i3 >= 0) {
      if ((f3 = l2[i3]) && 0 == (2 & f3.__u) && o2 == f3.key && e2 == f3.type) return i3;
      i3--;
    }
    if (r2 < l2.length) {
      if ((f3 = l2[r2]) && 0 == (2 & f3.__u) && o2 == f3.key && e2 == f3.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T(n2, l2, u3) {
  "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || v.test(l2) ? u3 : u3 + "px";
}
function j(n2, l2, u3, t2, i3) {
  var r2;
  n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || T(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || T(n2.style, l2, u3[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = c++;
      else if (u3.t < t2.u) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t2, i3, r2, o2, e2, f3, c2, s2) {
  var a2, h3, p2, y2, v2, _2, m2, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j2 = u3.type;
  if (null != u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
  n: if ("function" == typeof j2) try {
    if (b = u3.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i3[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i3, t2.__c ? m2 = (h3 = u3.__c = t2.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j2(b, M2) : (u3.__c = h3 = new x(b, M2), h3.constructor = j2, h3.render = D), C2 && C2.sub(h3), h3.props = b, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i3, p2 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j2.getDerivedStateFromProps(b, h3.__s))), y2 = h3.props, v2 = h3.state, h3.__v = u3, p2) S2 && null == j2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2) || u3.__v == t2.__v) {
        for (u3.__v != t2.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
        h3._sb = [], h3.__h.length && e2.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(y2, v2, _2);
      });
    }
    if (h3.context = M2, h3.props = b, h3.__P = n2, h3.__e = false, P2 = l.__r, A2 = 0, S2) {
      for (h3.state = h3.__s, h3.__d = false, P2 && P2(u3), a2 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, P2 && P2(u3), a2 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p2 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(y2, v2)), L2 = a2, null != a2 && a2.type === k && null == a2.key && (L2 = N(a2.props.children)), f3 = I(n2, w(L2) ? L2 : [L2], u3, t2, i3, r2, o2, e2, f3, c2, s2), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e2.push(h3), m2 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u3.__v = null, c2 || null != o2) if (n3.then) {
      for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
      o2[o2.indexOf(f3)] = null, u3.__e = f3;
    } else for (T2 = o2.length; T2--; ) g(o2[T2]);
    else u3.__e = t2.__e, u3.__k = t2.__k;
    l.__e(n3, u3, t2);
  }
  else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = V(t2.__e, u3, t2, i3, r2, o2, e2, c2, s2);
  return (a2 = l.diffed) && a2(u3), 128 & u3.__u ? void 0 : f3;
}
function z(n2, u3, t2) {
  for (var i3 = 0; i3 < t2.length; i3++) q(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function N(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(N) : d({}, n2);
}
function V(u3, t2, i3, r2, o2, e2, f3, c2, s2) {
  var a2, h3, y2, v2, d2, _2, m2, b = i3.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : 3 == d2.nodeType)) {
      u3 = d2, e2[a2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k2);
    u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b === k2 || c2 && u3.data == k2 || (u3.data = k2);
  else {
    if (e2 = e2 && n.call(u3.childNodes), b = i3.props || p, !c2 && null != e2) for (b = {}, a2 = 0; a2 < u3.attributes.length; a2++) b[(d2 = u3.attributes[a2]).name] = d2.value;
    for (a2 in b) if (d2 = b[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) y2 = d2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      j(u3, a2, null, d2, o2);
    }
    for (a2 in k2) d2 = k2[a2], "children" == a2 ? v2 = d2 : "dangerouslySetInnerHTML" == a2 ? h3 = d2 : "value" == a2 ? _2 = d2 : "checked" == a2 ? m2 = d2 : c2 && "function" != typeof d2 || b[a2] === d2 || j(u3, a2, d2, b[a2], o2);
    if (h3) c2 || y2 && (h3.__html == y2.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t2.__k = [];
    else if (y2 && (u3.innerHTML = ""), I("template" == t2.type ? u3.content : u3, w(v2) ? v2 : [v2], t2, i3, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i3.__k && S(i3, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u3.removeAttribute("value") : null != _2 && (_2 !== u3[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a2]) && j(u3, a2, _2, b[a2], o2), a2 = "checked", null != m2 && m2 != u3[a2] && j(u3, a2, m2, b[a2], o2));
  }
  return u3;
}
function q(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function B(n2, u3, t2) {
  var i3, r2;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || q(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (r2 = 0; r2 < i3.length; r2++) i3[r2] && B(i3[r2], u3, t2 || "function" != typeof n2.type);
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D(n2, l2, u3) {
  return this.constructor(n2, u3);
}
function E(u3, t2, i3) {
  var r2, o2, e2, f3;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u3, t2), o2 = (r2 = "function" == typeof i3) ? null : i3 && i3.__k || t2.__k, e2 = [], f3 = [], O(t2, u3 = (!r2 && i3 || t2).__k = _(k, null, [u3]), o2 || p, p, t2.namespaceURI, !r2 && i3 ? [i3] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i3 ? i3 : o2 ? o2.__e : t2.firstChild, r2, f3), z(e2, u3, f3);
}
n = y.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i3, r2, o2; l2 = l2.__; ) if ((i3 = l2.__c) && !i3.__) try {
    if ((r2 = i3.constructor) && null != r2.getDerivedStateFromError && (i3.setState(r2.getDerivedStateFromError(n2)), o2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), o2 = i3.__d), o2) return i3.__E = i3;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i3, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/views/activeList.tsx
function ActiveList({ projects }) {
  return /* @__PURE__ */ u2("div", { class: "p-4", children: [
    /* @__PURE__ */ u2("h2", { class: "text-lg font-bold mb-2", children: "Active Projects" }),
    /* @__PURE__ */ u2("ul", { class: "list-disc list-inside space-y-1", children: projects.map((name) => /* @__PURE__ */ u2("li", { children: name })) })
  ] });
}

// src/main.tsx
var APP_VERSION = "0.1.5";
var PROJECT_FOLDER = '"GTD/projects"';
var THIS_PLUGIN;
var dv = app.plugins.plugins.dataview?.api;
function display_active_count(el) {
  console.log("attempting active count");
  const count = dv.pages(PROJECT_FOLDER).where((p2) => p2.status === "active").length;
  el.innerHTML = `Active Projects: ${count}`;
}
function display_button(el) {
  el.innerHTML = `
    <button id="my-button">Click me</button>
  `;
  const button = el.querySelector("#my-button");
  if (button) {
    button.addEventListener("click", handleButtonClick);
  }
}
function handleButtonClick() {
  console.log("Button was clicked!");
  forceReload();
}
async function forceReload() {
  const id = THIS_PLUGIN.manifest.id;
  await THIS_PLUGIN.app.plugins.disablePlugin(id);
  await THIS_PLUGIN.app.plugins.enablePlugin(id);
}
module.exports = class ChrispyGTD extends import_obsidian.Plugin {
  async onload() {
    console.log("Chrispy GTD plugin loaded! Version: " + APP_VERSION);
    THIS_PLUGIN = this;
    this.registerMarkdownCodeBlockProcessor("chrispy-gtd", async (source, el) => {
      const [command] = source.trim().split("\n");
      if (!dv) {
        el.innerHTML = "Dataview plugin not available.";
        return;
      }
      if (command === "active-count") {
        display_active_count(el);
      } else if (command === "display-button") {
        display_button(el);
      } else if (command === "active-list") {
        const projects = dv.pages(PROJECT_FOLDER).where((p2) => p2.status === "active").map((p2) => p2.file.name);
        E(/* @__PURE__ */ u2(ActiveList, { projects }), el);
      } else {
        el.innerHTML = `Unknown command: ${command}`;
      }
    });
  }
  onunload() {
    console.log("Chrispy GTD plugin unloaded!");
  }
};
