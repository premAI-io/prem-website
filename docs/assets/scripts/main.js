var Gr = Object.defineProperty;
var Wr = (a, t, e) =>
	t in a
		? Gr(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (a[t] = e);
var ce = (a, t, e) => (Wr(a, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
	new MutationObserver((i) => {
		for (const r of i)
			if (r.type === "childList")
				for (const s of r.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(i) {
		const r = {};
		return (
			i.integrity && (r.integrity = i.integrity),
			i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (r.credentials = "include")
				: i.crossOrigin === "anonymous"
					? (r.credentials = "omit")
					: (r.credentials = "same-origin"),
			r
		);
	}
	function n(i) {
		if (i.ep) return;
		i.ep = !0;
		const r = e(i);
		fetch(i.href, r);
	}
})();
class Hr {
	constructor() {
		this.instances = {};
	}
	add(t, e, n) {
		this.instances[t] = { key: t, instance: e, preserve: n };
	}
	get(t) {
		return this.instances[t] && this.instances[t].instance
			? this.instances[t].instance
			: null;
	}
	getAll() {
		return this.instances;
	}
	remove(t) {
		const e = this.get(t);
		e && (!e.preserve && e.destroy && e.destroy(), (this.instances[t] = null));
	}
	removeAll() {
		for (const t in this.instances) this.remove(t);
	}
	destroy(t) {
		const e = this.get(t),
			n = this.instances[t] ? this.instances[t].preserve : !1;
		e && !n && e.destroy && e.destroy();
	}
	destroyAll() {
		for (const t in this.instances) this.destroy(t);
	}
	map(t, ...e) {
		for (const n in this.instances) {
			const i = this.get(n);
			i[t] && i[t](...e);
		}
	}
	call(t, e, ...n) {
		const i = this.get(t);
		if (i && i[e]) return i[e](...n);
	}
}
const be = new Hr();
class jr {
	constructor() {
		(this.device = 0), (this.window = { width: 0, height: 0 });
	}
	detectApple() {
		(this.isIos =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
			(this.isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			));
	}
	createRuler() {
		let t = document.createElement("div");
		(t.style.position = "fixed"),
			(t.style.height = "100%"),
			(t.style.width = 0),
			(t.style.top = 0),
			document.documentElement.appendChild(t),
			(this.window.height = this.isIos ? t.offsetHeight : window.innerHeight),
			document.documentElement.removeChild(t),
			(t = null);
	}
	getWindow() {
		this.createRuler(), (this.window.width = window.innerWidth);
	}
	getDevice() {
		this.device = window.matchMedia("(min-width:1920px)").matches
			? 3
			: window.matchMedia("(min-width:1024px)").matches
				? 2
				: window.matchMedia("(min-width:768px)").matches
					? 1
					: 0;
	}
	isTouch() {
		return document.body.classList.contains("is-touch");
	}
	setup() {
		this.detectApple(), this.getDevice(), this.getWindow();
	}
	init() {
		this.setup();
	}
	resize() {
		const t = window.innerWidth,
			e = window.innerHeight;
		this.detectApple(),
			this.getDevice(),
			this.window.width !== t && (this.window.width = window.innerWidth),
			this.window.height !== e && this.createRuler();
	}
}
const le = new jr();
function Ft(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function Ii(a, t) {
	(a.prototype = Object.create(t.prototype)),
		(a.prototype.constructor = a),
		(a.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var yt = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	ge = { duration: 0.5, overwrite: !1, delay: 0 },
	Bn,
	nt,
	B,
	wt = 1e8,
	N = 1 / wt,
	Sn = Math.PI * 2,
	$r = Sn / 4,
	Kr = 0,
	Ri = Math.sqrt,
	Qr = Math.cos,
	Zr = Math.sin,
	Q = function (t) {
		return typeof t == "string";
	},
	X = function (t) {
		return typeof t == "function";
	},
	Nt = function (t) {
		return typeof t == "number";
	},
	Vn = function (t) {
		return typeof t > "u";
	},
	kt = function (t) {
		return typeof t == "object";
	},
	ut = function (t) {
		return t !== !1;
	},
	qn = function () {
		return typeof window < "u";
	},
	Ge = function (t) {
		return X(t) || Q(t);
	},
	Fi =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	it = Array.isArray,
	bn = /(?:-?\.?\d|\.)+/gi,
	zi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	he = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	dn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Ni = /[+-]=-?[.\d]+/,
	Bi = /[^,'"\[\]\s]+/gi,
	Jr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	U,
	Mt,
	On,
	Un,
	xt = {},
	Qe = {},
	Vi,
	qi = function (t) {
		return (Qe = se(t, xt)) && ht;
	},
	Yn = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	Ae = function (t, e) {
		return !e && console.warn(t);
	},
	Ui = function (t, e) {
		return (t && (xt[t] = e) && Qe && (Qe[t] = e)) || xt;
	},
	Le = function () {
		return 0;
	},
	ts = { suppressEvents: !0, isStart: !0, kill: !1 },
	He = { suppressEvents: !0, kill: !1 },
	es = { suppressEvents: !0 },
	Xn = {},
	Gt = [],
	Pn = {},
	Yi,
	pt = {},
	_n = {},
	_i = 30,
	je = [],
	Gn = "",
	Wn = function (t) {
		var e = t[0],
			n,
			i;
		if ((kt(e) || X(e) || (t = [t]), !(n = (e._gsap || {}).harness))) {
			for (i = je.length; i-- && !je[i].targetTest(e); );
			n = je[i];
		}
		for (i = t.length; i--; )
			(t[i] && (t[i]._gsap || (t[i]._gsap = new dr(t[i], n)))) ||
				t.splice(i, 1);
		return t;
	},
	ee = function (t) {
		return t._gsap || Wn(Tt(t))[0]._gsap;
	},
	Xi = function (t, e, n) {
		return (n = t[e]) && X(n)
			? t[e]()
			: (Vn(n) && t.getAttribute && t.getAttribute(e)) || n;
	},
	ct = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	G = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	K = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	_e = function (t, e) {
		var n = e.charAt(0),
			i = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			n === "+" ? t + i : n === "-" ? t - i : n === "*" ? t * i : t / i
		);
	},
	ns = function (t, e) {
		for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
		return i < n;
	},
	Ze = function () {
		var t = Gt.length,
			e = Gt.slice(0),
			n,
			i;
		for (Pn = {}, Gt.length = 0, n = 0; n < t; n++)
			(i = e[n]),
				i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
	},
	Gi = function (t, e, n, i) {
		Gt.length && !nt && Ze(),
			t.render(e, n, i || (nt && e < 0 && (t._initted || t._startAt))),
			Gt.length && !nt && Ze();
	},
	Wi = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(Bi).length < 2
			? e
			: Q(t)
				? t.trim()
				: t;
	},
	Hi = function (t) {
		return t;
	},
	St = function (t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t;
	},
	is = function (t) {
		return function (e, n) {
			for (var i in n)
				i in e || (i === "duration" && t) || i === "ease" || (e[i] = n[i]);
		};
	},
	se = function (t, e) {
		for (var n in e) t[n] = e[n];
		return t;
	},
	pi = function a(t, e) {
		for (var n in e)
			n !== "__proto__" &&
				n !== "constructor" &&
				n !== "prototype" &&
				(t[n] = kt(e[n]) ? a(t[n] || (t[n] = {}), e[n]) : e[n]);
		return t;
	},
	Je = function (t, e) {
		var n = {},
			i;
		for (i in t) i in e || (n[i] = t[i]);
		return n;
	},
	De = function (t) {
		var e = t.parent || U,
			n = t.keyframes ? is(it(t.keyframes)) : St;
		if (ut(t.inherit))
			for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	rs = function (t, e) {
		for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; );
		return n < 0;
	},
	ji = function (t, e, n, i, r) {
		n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
		var s = t[i],
			o;
		if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
		return (
			s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)),
			e._next ? (e._next._prev = e) : (t[i] = e),
			(e._prev = s),
			(e.parent = e._dp = t),
			e
		);
	},
	sn = function (t, e, n, i) {
		n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
		var r = e._prev,
			s = e._next;
		r ? (r._next = s) : t[n] === e && (t[n] = s),
			s ? (s._prev = r) : t[i] === e && (t[i] = r),
			(e._next = e._prev = e.parent = null);
	},
	Ht = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	ne = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
		return t;
	},
	ss = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	Mn = function (t, e, n, i) {
		return (
			t._startAt &&
			(nt
				? t._startAt.revert(He)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, i))
		);
	},
	os = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	mi = function (t) {
		return t._repeat ? ye(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	ye = function (t, e) {
		var n = Math.floor((t /= e));
		return t && n === t ? n - 1 : n;
	},
	tn = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	on = function (t) {
		return (t._end = K(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || N) || 0),
		));
	},
	an = function (t, e) {
		var n = t._dp;
		return (
			n &&
				n.smoothChildTiming &&
				t._ts &&
				((t._start = K(
					n._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
				)),
				on(t),
				n._dirty || ne(n, t)),
			t
		);
	},
	$i = function (t, e) {
		var n;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((n = tn(t.rawTime(), e)),
				(!e._dur || Ue(0, e.totalDuration(), n) - e._tTime > N) &&
					e.render(n, !0)),
			ne(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (n = t; n._dp; )
					n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
			t._zTime = -N;
		}
	},
	Dt = function (t, e, n, i) {
		return (
			e.parent && Ht(e),
			(e._start = K(
				(Nt(n) ? n : n || t !== U ? vt(t, n, e) : t._time) + e._delay,
			)),
			(e._end = K(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			ji(t, e, "_first", "_last", t._sort ? "_start" : 0),
			Dn(e) || (t._recent = e),
			i || $i(t, e),
			t._ts < 0 && an(t, t._tTime),
			t
		);
	},
	Ki = function (t, e) {
		return (
			(xt.ScrollTrigger || Yn("scrollTrigger", e)) &&
			xt.ScrollTrigger.create(e, t)
		);
	},
	Qi = function (t, e, n, i, r) {
		if ((jn(t, e, r), !t._initted)) return 1;
		if (
			!n &&
			t._pt &&
			!nt &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Yi !== mt.frame
		)
			return Gt.push(t), (t._lazy = [r, i]), 1;
	},
	as = function a(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
	},
	Dn = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	us = function (t, e, n, i) {
		var r = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && as(t) && !(!t._initted && Dn(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !Dn(t))))
					? 0
					: 1,
			o = t._rDelay,
			u = 0,
			c,
			f,
			h;
		if (
			(o &&
				t._repeat &&
				((u = Ue(0, t._tDur, e)),
				(f = ye(u, o)),
				t._yoyo && f & 1 && (s = 1 - s),
				f !== ye(t._tTime, o) &&
					((r = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== r || nt || i || t._zTime === N || (!e && t._zTime))
		) {
			if (!t._initted && Qi(t, e, i, n, u)) return;
			for (
				h = t._zTime,
					t._zTime = e || (n ? N : 0),
					n || (n = e && !h),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = u,
					c = t._pt;
				c;

			)
				c.r(s, c.d), (c = c._next);
			e < 0 && Mn(t, e, n, !0),
				t._onUpdate && !n && gt(t, "onUpdate"),
				u && t._repeat && !n && t.parent && gt(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && Ht(t, 1),
					!n &&
						!nt &&
						(gt(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	cs = function (t, e, n) {
		var i;
		if (n > e)
			for (i = t._first; i && i._start <= n; ) {
				if (i.data === "isPause" && i._start > e) return i;
				i = i._next;
			}
		else
			for (i = t._last; i && i._start >= n; ) {
				if (i.data === "isPause" && i._start < e) return i;
				i = i._prev;
			}
	},
	xe = function (t, e, n, i) {
		var r = t._repeat,
			s = K(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !i && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = r ? (r < 0 ? 1e10 : K(s * (r + 1) + t._rDelay * r)) : s),
			o > 0 && !i && an(t, (t._tTime = t._tDur * o)),
			t.parent && on(t),
			n || ne(t.parent, t),
			t
		);
	},
	gi = function (t) {
		return t instanceof rt ? ne(t) : xe(t, t._dur);
	},
	fs = { _start: 0, endTime: Le, totalDuration: Le },
	vt = function a(t, e, n) {
		var i = t.labels,
			r = t._recent || fs,
			s = t.duration() >= wt ? r.endTime(!1) : t._dur,
			o,
			u,
			c;
		return Q(e) && (isNaN(e) || e in i)
			? ((u = e.charAt(0)),
				(c = e.substr(-1) === "%"),
				(o = e.indexOf("=")),
				u === "<" || u === ">"
					? (o >= 0 && (e = e.replace(/=/, "")),
						(u === "<" ? r._start : r.endTime(r._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(c ? (o < 0 ? r : n).totalDuration() / 100 : 1))
					: o < 0
						? (e in i || (i[e] = s), i[e])
						: ((u = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
							c && n && (u = (u / 100) * (it(n) ? n[0] : n).totalDuration()),
							o > 1 ? a(t, e.substr(0, o - 1), n) + u : s + u))
			: e == null
				? s
				: +e;
	},
	Ce = function (t, e, n) {
		var i = Nt(e[1]),
			r = (i ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[r],
			o,
			u;
		if ((i && (s.duration = e[1]), (s.parent = n), t)) {
			for (o = s, u = n; u && !("immediateRender" in o); )
				(o = u.vars.defaults || {}), (u = ut(u.vars.inherit) && u.parent);
			(s.immediateRender = ut(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[r - 1]);
		}
		return new j(e[0], s, e[r + 1]);
	},
	$t = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	Ue = function (t, e, n) {
		return n < t ? t : n > e ? e : n;
	},
	et = function (t, e) {
		return !Q(t) || !(e = Jr.exec(t)) ? "" : e[1];
	},
	ls = function (t, e, n) {
		return $t(n, function (i) {
			return Ue(t, e, i);
		});
	},
	Cn = [].slice,
	Zi = function (t, e) {
		return (
			t &&
			kt(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && kt(t[0]))) &&
			!t.nodeType &&
			t !== Mt
		);
	},
	hs = function (t, e, n) {
		return (
			n === void 0 && (n = []),
			t.forEach(function (i) {
				var r;
				return (Q(i) && !e) || Zi(i, 1)
					? (r = n).push.apply(r, Tt(i))
					: n.push(i);
			}) || n
		);
	},
	Tt = function (t, e, n) {
		return B && !e && B.selector
			? B.selector(t)
			: Q(t) && !n && (On || !ve())
				? Cn.call((e || Un).querySelectorAll(t), 0)
				: it(t)
					? hs(t, n)
					: Zi(t)
						? Cn.call(t, 0)
						: t
							? [t]
							: [];
	},
	En = function (t) {
		return (
			(t = Tt(t)[0] || Ae("Invalid scope") || {}),
			function (e) {
				var n = t.current || t.nativeElement || t;
				return Tt(
					e,
					n.querySelectorAll
						? n
						: n === t
							? Ae("Invalid scope") || Un.createElement("div")
							: t,
				);
			}
		);
	},
	Ji = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	tr = function (t) {
		if (X(t)) return t;
		var e = kt(t) ? t : { each: t },
			n = ie(e.ease),
			i = e.from || 0,
			r = parseFloat(e.base) || 0,
			s = {},
			o = i > 0 && i < 1,
			u = isNaN(i) || o,
			c = e.axis,
			f = i,
			h = i;
		return (
			Q(i)
				? (f = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !o && u && ((f = i[0]), (h = i[1])),
			function (d, _, p) {
				var l = (p || e).length,
					m = s[l],
					g,
					y,
					x,
					v,
					w,
					b,
					O,
					S,
					T;
				if (!m) {
					if (((T = e.grid === "auto" ? 0 : (e.grid || [1, wt])[1]), !T)) {
						for (
							O = -wt;
							O < (O = p[T++].getBoundingClientRect().left) && T < l;

						);
						T < l && T--;
					}
					for (
						m = s[l] = [],
							g = u ? Math.min(T, l) * f - 0.5 : i % T,
							y = T === wt ? 0 : u ? (l * h) / T - 0.5 : (i / T) | 0,
							O = 0,
							S = wt,
							b = 0;
						b < l;
						b++
					)
						(x = (b % T) - g),
							(v = y - ((b / T) | 0)),
							(m[b] = w = c ? Math.abs(c === "y" ? v : x) : Ri(x * x + v * v)),
							w > O && (O = w),
							w < S && (S = w);
					i === "random" && Ji(m),
						(m.max = O - S),
						(m.min = S),
						(m.v = l =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(T > l
										? l - 1
										: c
											? c === "y"
												? l / T
												: T
											: Math.max(T, l / T)) ||
								0) * (i === "edges" ? -1 : 1)),
						(m.b = l < 0 ? r - l : r),
						(m.u = et(e.amount || e.each) || 0),
						(n = n && l < 0 ? fr(n) : n);
				}
				return (
					(l = (m[d] - m.min) / m.max || 0), K(m.b + (n ? n(l) : l) * m.v) + m.u
				);
			}
		);
	},
	kn = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (n) {
			var i = K(Math.round(parseFloat(n) / t) * t * e);
			return (i - (i % 1)) / e + (Nt(n) ? 0 : et(n));
		};
	},
	er = function (t, e) {
		var n = it(t),
			i,
			r;
		return (
			!n &&
				kt(t) &&
				((i = n = t.radius || wt),
				t.values
					? ((t = Tt(t.values)), (r = !Nt(t[0])) && (i *= i))
					: (t = kn(t.increment))),
			$t(
				e,
				n
					? X(t)
						? function (s) {
								return (r = t(s)), Math.abs(r - s) <= i ? r : s;
							}
						: function (s) {
								for (
									var o = parseFloat(r ? s.x : s),
										u = parseFloat(r ? s.y : 0),
										c = wt,
										f = 0,
										h = t.length,
										d,
										_;
									h--;

								)
									r
										? ((d = t[h].x - o), (_ = t[h].y - u), (d = d * d + _ * _))
										: (d = Math.abs(t[h] - o)),
										d < c && ((c = d), (f = h));
								return (
									(f = !i || c <= i ? t[f] : s),
									r || f === s || Nt(s) ? f : f + et(s)
								);
							}
					: kn(t),
			)
		);
	},
	nr = function (t, e, n, i) {
		return $t(it(t) ? !e : n === !0 ? !!(n = 0) : !i, function () {
			return it(t)
				? t[~~(Math.random() * t.length)]
				: (n = n || 1e-5) &&
						(i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
						Math.floor(
							Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) *
								n *
								i,
						) / i;
		});
	},
	ds = function () {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
			e[n] = arguments[n];
		return function (i) {
			return e.reduce(function (r, s) {
				return s(r);
			}, i);
		};
	},
	_s = function (t, e) {
		return function (n) {
			return t(parseFloat(n)) + (e || et(n));
		};
	},
	ps = function (t, e, n) {
		return rr(t, e, 0, 1, n);
	},
	ir = function (t, e, n) {
		return $t(n, function (i) {
			return t[~~e(i)];
		});
	},
	ms = function a(t, e, n) {
		var i = e - t;
		return it(t)
			? ir(t, a(0, t.length), e)
			: $t(n, function (r) {
					return ((i + ((r - t) % i)) % i) + t;
				});
	},
	gs = function a(t, e, n) {
		var i = e - t,
			r = i * 2;
		return it(t)
			? ir(t, a(0, t.length - 1), e)
			: $t(n, function (s) {
					return (s = (r + ((s - t) % r)) % r || 0), t + (s > i ? r - s : s);
				});
	},
	Ie = function (t) {
		for (var e = 0, n = "", i, r, s, o; ~(i = t.indexOf("random(", e)); )
			(s = t.indexOf(")", i)),
				(o = t.charAt(i + 7) === "["),
				(r = t.substr(i + 7, s - i - 7).match(o ? Bi : bn)),
				(n +=
					t.substr(e, i - e) + nr(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
				(e = s + 1);
		return n + t.substr(e, t.length - e);
	},
	rr = function (t, e, n, i, r) {
		var s = e - t,
			o = i - n;
		return $t(r, function (u) {
			return n + (((u - t) / s) * o || 0);
		});
	},
	ys = function a(t, e, n, i) {
		var r = isNaN(t + e)
			? 0
			: function (_) {
					return (1 - _) * t + _ * e;
				};
		if (!r) {
			var s = Q(t),
				o = {},
				u,
				c,
				f,
				h,
				d;
			if ((n === !0 && (i = 1) && (n = null), s))
				(t = { p: t }), (e = { p: e });
			else if (it(t) && !it(e)) {
				for (f = [], h = t.length, d = h - 2, c = 1; c < h; c++)
					f.push(a(t[c - 1], t[c]));
				h--,
					(r = function (p) {
						p *= h;
						var l = Math.min(d, ~~p);
						return f[l](p - l);
					}),
					(n = e);
			} else i || (t = se(it(t) ? [] : {}, t));
			if (!f) {
				for (u in e) Hn.call(o, t, u, "get", e[u]);
				r = function (p) {
					return Qn(p, o) || (s ? t.p : t);
				};
			}
		}
		return $t(n, r);
	},
	yi = function (t, e, n) {
		var i = t.labels,
			r = wt,
			s,
			o,
			u;
		for (s in i)
			(o = i[s] - e),
				o < 0 == !!n && o && r > (o = Math.abs(o)) && ((u = s), (r = o));
		return u;
	},
	gt = function (t, e, n) {
		var i = t.vars,
			r = i[e],
			s = B,
			o = t._ctx,
			u,
			c,
			f;
		if (r)
			return (
				(u = i[e + "Params"]),
				(c = i.callbackScope || t),
				n && Gt.length && Ze(),
				o && (B = o),
				(f = u ? r.apply(c, u) : r.call(c)),
				(B = s),
				f
			);
	},
	Pe = function (t) {
		return (
			Ht(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!nt),
			t.progress() < 1 && gt(t, "onInterrupt"),
			t
		);
	},
	de,
	sr = [],
	or = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), qn() || t.headless)) {
				var e = t.name,
					n = X(t),
					i =
						e && !n && t.init
							? function () {
									this._props = [];
								}
							: t,
					r = {
						init: Le,
						render: Qn,
						add: Hn,
						kill: Is,
						modifier: Ls,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: Kn,
						aliases: {},
						register: 0,
					};
				if ((ve(), t !== i)) {
					if (pt[e]) return;
					St(i, St(Je(t, r), s)),
						se(i.prototype, se(r, Je(t, s))),
						(pt[(i.prop = e)] = i),
						t.targetTest && (je.push(i), (Xn[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				Ui(e, i), t.register && t.register(ht, i, ft);
			} else sr.push(t);
	},
	z = 255,
	Me = {
		aqua: [0, z, z],
		lime: [0, z, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, z],
		navy: [0, 0, 128],
		white: [z, z, z],
		olive: [128, 128, 0],
		yellow: [z, z, 0],
		orange: [z, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [z, 0, 0],
		pink: [z, 192, 203],
		cyan: [0, z, z],
		transparent: [z, z, z, 0],
	},
	pn = function (t, e, n) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? e + (n - e) * t * 6
				: t < 0.5
					? n
					: t * 3 < 2
						? e + (n - e) * (2 / 3 - t) * 6
						: e) *
				z +
				0.5) |
				0
		);
	},
	ar = function (t, e, n) {
		var i = t ? (Nt(t) ? [t >> 16, (t >> 8) & z, t & z] : 0) : Me.black,
			r,
			s,
			o,
			u,
			c,
			f,
			h,
			d,
			_,
			p;
		if (!i) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Me[t]))
				i = Me[t];
			else if (t.charAt(0) === "#") {
				if (
					(t.length < 6 &&
						((r = t.charAt(1)),
						(s = t.charAt(2)),
						(o = t.charAt(3)),
						(t =
							"#" +
							r +
							r +
							s +
							s +
							o +
							o +
							(t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
					t.length === 9)
				)
					return (
						(i = parseInt(t.substr(1, 6), 16)),
						[i >> 16, (i >> 8) & z, i & z, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (i = [t >> 16, (t >> 8) & z, t & z]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((i = p = t.match(bn)), !e))
					(u = (+i[0] % 360) / 360),
						(c = +i[1] / 100),
						(f = +i[2] / 100),
						(s = f <= 0.5 ? f * (c + 1) : f + c - f * c),
						(r = f * 2 - s),
						i.length > 3 && (i[3] *= 1),
						(i[0] = pn(u + 1 / 3, r, s)),
						(i[1] = pn(u, r, s)),
						(i[2] = pn(u - 1 / 3, r, s));
				else if (~t.indexOf("="))
					return (i = t.match(zi)), n && i.length < 4 && (i[3] = 1), i;
			} else i = t.match(bn) || Me.transparent;
			i = i.map(Number);
		}
		return (
			e &&
				!p &&
				((r = i[0] / z),
				(s = i[1] / z),
				(o = i[2] / z),
				(h = Math.max(r, s, o)),
				(d = Math.min(r, s, o)),
				(f = (h + d) / 2),
				h === d
					? (u = c = 0)
					: ((_ = h - d),
						(c = f > 0.5 ? _ / (2 - h - d) : _ / (h + d)),
						(u =
							h === r
								? (s - o) / _ + (s < o ? 6 : 0)
								: h === s
									? (o - r) / _ + 2
									: (r - s) / _ + 4),
						(u *= 60)),
				(i[0] = ~~(u + 0.5)),
				(i[1] = ~~(c * 100 + 0.5)),
				(i[2] = ~~(f * 100 + 0.5))),
			n && i.length < 4 && (i[3] = 1),
			i
		);
	},
	ur = function (t) {
		var e = [],
			n = [],
			i = -1;
		return (
			t.split(Wt).forEach(function (r) {
				var s = r.match(he) || [];
				e.push.apply(e, s), n.push((i += s.length + 1));
			}),
			(e.c = n),
			e
		);
	},
	xi = function (t, e, n) {
		var i = "",
			r = (t + i).match(Wt),
			s = e ? "hsla(" : "rgba(",
			o = 0,
			u,
			c,
			f,
			h;
		if (!r) return t;
		if (
			((r = r.map(function (d) {
				return (
					(d = ar(d, e, 1)) &&
					s +
						(e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
						")"
				);
			})),
			n && ((f = ur(t)), (u = n.c), u.join(i) !== f.c.join(i)))
		)
			for (c = t.replace(Wt, "1").split(he), h = c.length - 1; o < h; o++)
				i +=
					c[o] +
					(~u.indexOf(o)
						? r.shift() || s + "0,0,0,0)"
						: (f.length ? f : r.length ? r : n).shift());
		if (!c)
			for (c = t.split(Wt), h = c.length - 1; o < h; o++) i += c[o] + r[o];
		return i + c[h];
	},
	Wt = (function () {
		var a =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in Me) a += "|" + t + "\\b";
		return new RegExp(a + ")", "gi");
	})(),
	xs = /hsl[a]?\(/,
	cr = function (t) {
		var e = t.join(" "),
			n;
		if (((Wt.lastIndex = 0), Wt.test(e)))
			return (
				(n = xs.test(e)),
				(t[1] = xi(t[1], n)),
				(t[0] = xi(t[0], n, ur(t[1]))),
				!0
			);
	},
	Re,
	mt = (function () {
		var a = Date.now,
			t = 500,
			e = 33,
			n = a(),
			i = n,
			r = 1e3 / 240,
			s = r,
			o = [],
			u,
			c,
			f,
			h,
			d,
			_,
			p = function l(m) {
				var g = a() - i,
					y = m === !0,
					x,
					v,
					w,
					b;
				if (
					((g > t || g < 0) && (n += g - e),
					(i += g),
					(w = i - n),
					(x = w - s),
					(x > 0 || y) &&
						((b = ++h.frame),
						(d = w - h.time * 1e3),
						(h.time = w = w / 1e3),
						(s += x + (x >= r ? 4 : r - x)),
						(v = 1)),
					y || (u = c(l)),
					v)
				)
					for (_ = 0; _ < o.length; _++) o[_](w, d, b, m);
			};
		return (
			(h = {
				time: 0,
				frame: 0,
				tick: function () {
					p(!0);
				},
				deltaRatio: function (m) {
					return d / (1e3 / (m || 60));
				},
				wake: function () {
					Vi &&
						(!On &&
							qn() &&
							((Mt = On = window),
							(Un = Mt.document || {}),
							(xt.gsap = ht),
							(Mt.gsapVersions || (Mt.gsapVersions = [])).push(ht.version),
							qi(Qe || Mt.GreenSockGlobals || (!Mt.gsap && Mt) || {}),
							sr.forEach(or)),
						(f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						u && h.sleep(),
						(c =
							f ||
							function (m) {
								return setTimeout(m, (s - h.time * 1e3 + 1) | 0);
							}),
						(Re = 1),
						p(2));
				},
				sleep: function () {
					(f ? cancelAnimationFrame : clearTimeout)(u), (Re = 0), (c = Le);
				},
				lagSmoothing: function (m, g) {
					(t = m || 1 / 0), (e = Math.min(g || 33, t));
				},
				fps: function (m) {
					(r = 1e3 / (m || 240)), (s = h.time * 1e3 + r);
				},
				add: function (m, g, y) {
					var x = g
						? function (v, w, b, O) {
								m(v, w, b, O), h.remove(x);
							}
						: m;
					return h.remove(m), o[y ? "unshift" : "push"](x), ve(), x;
				},
				remove: function (m, g) {
					~(g = o.indexOf(m)) && o.splice(g, 1) && _ >= g && _--;
				},
				_listeners: o,
			}),
			h
		);
	})(),
	ve = function () {
		return !Re && mt.wake();
	},
	k = {},
	vs = /^[\d.\-M][\d.\-,\s]/,
	ws = /["']/g,
	Ts = function (t) {
		for (
			var e = {},
				n = t.substr(1, t.length - 3).split(":"),
				i = n[0],
				r = 1,
				s = n.length,
				o,
				u,
				c;
			r < s;
			r++
		)
			(u = n[r]),
				(o = r !== s - 1 ? u.lastIndexOf(",") : u.length),
				(c = u.substr(0, o)),
				(e[i] = isNaN(c) ? c.replace(ws, "").trim() : +c),
				(i = u.substr(o + 1).trim());
		return e;
	},
	Ss = function (t) {
		var e = t.indexOf("(") + 1,
			n = t.indexOf(")"),
			i = t.indexOf("(", e);
		return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
	},
	bs = function (t) {
		var e = (t + "").split("("),
			n = k[e[0]];
		return n && e.length > 1 && n.config
			? n.config.apply(
					null,
					~t.indexOf("{") ? [Ts(e[1])] : Ss(t).split(",").map(Wi),
				)
			: k._CE && vs.test(t)
				? k._CE("", t)
				: n;
	},
	fr = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	lr = function a(t, e) {
		for (var n = t._first, i; n; )
			n instanceof rt
				? a(n, e)
				: n.vars.yoyoEase &&
					(!n._yoyo || !n._repeat) &&
					n._yoyo !== e &&
					(n.timeline
						? a(n.timeline, e)
						: ((i = n._ease),
							(n._ease = n._yEase),
							(n._yEase = i),
							(n._yoyo = e))),
				(n = n._next);
	},
	ie = function (t, e) {
		return (t && (X(t) ? t : k[t] || bs(t))) || e;
	},
	ue = function (t, e, n, i) {
		n === void 0 &&
			(n = function (u) {
				return 1 - e(1 - u);
			}),
			i === void 0 &&
				(i = function (u) {
					return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
				});
		var r = { easeIn: e, easeOut: n, easeInOut: i },
			s;
		return (
			ct(t, function (o) {
				(k[o] = xt[o] = r), (k[(s = o.toLowerCase())] = n);
				for (var u in r)
					k[
						s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
					] = k[o + "." + u] = r[u];
			}),
			r
		);
	},
	hr = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	mn = function a(t, e, n) {
		var i = e >= 1 ? e : 1,
			r = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (r / Sn) * (Math.asin(1 / i) || 0),
			o = function (f) {
				return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Zr((f - s) * r) + 1;
			},
			u =
				t === "out"
					? o
					: t === "in"
						? function (c) {
								return 1 - o(1 - c);
							}
						: hr(o);
		return (
			(r = Sn / r),
			(u.config = function (c, f) {
				return a(t, c, f);
			}),
			u
		);
	},
	gn = function a(t, e) {
		e === void 0 && (e = 1.70158);
		var n = function (s) {
				return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
			},
			i =
				t === "out"
					? n
					: t === "in"
						? function (r) {
								return 1 - n(1 - r);
							}
						: hr(n);
		return (
			(i.config = function (r) {
				return a(t, r);
			}),
			i
		);
	};
ct("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var e = t < 5 ? t + 1 : t;
	ue(
		a + ",Power" + (e - 1),
		t
			? function (n) {
					return Math.pow(n, e);
				}
			: function (n) {
					return n;
				},
		function (n) {
			return 1 - Math.pow(1 - n, e);
		},
		function (n) {
			return n < 0.5
				? Math.pow(n * 2, e) / 2
				: 1 - Math.pow((1 - n) * 2, e) / 2;
		},
	);
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
ue("Elastic", mn("in"), mn("out"), mn());
(function (a, t) {
	var e = 1 / t,
		n = 2 * e,
		i = 2.5 * e,
		r = function (o) {
			return o < e
				? a * o * o
				: o < n
					? a * Math.pow(o - 1.5 / t, 2) + 0.75
					: o < i
						? a * (o -= 2.25 / t) * o + 0.9375
						: a * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	ue(
		"Bounce",
		function (s) {
			return 1 - r(1 - s);
		},
		r,
	);
})(7.5625, 2.75);
ue("Expo", function (a) {
	return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
ue("Circ", function (a) {
	return -(Ri(1 - a * a) - 1);
});
ue("Sine", function (a) {
	return a === 1 ? 1 : -Qr(a * $r) + 1;
});
ue("Back", gn("in"), gn("out"), gn());
k.SteppedEase =
	k.steps =
	xt.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var n = 1 / t,
					i = t + (e ? 0 : 1),
					r = e ? 1 : 0,
					s = 1 - N;
				return function (o) {
					return (((i * Ue(0, s, o)) | 0) + r) * n;
				};
			},
		};
ge.ease = k["quad.out"];
ct(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (Gn += a + "," + a + "Params,");
	},
);
var dr = function (t, e) {
		(this.id = Kr++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : Xi),
			(this.set = e ? e.getSetter : Kn);
	},
	Fe = (function () {
		function a(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				xe(this, +e.duration, 1, 1),
				(this.data = e.data),
				B && ((this._ctx = B), B.data.push(this)),
				Re || mt.wake();
		}
		var t = a.prototype;
		return (
			(t.delay = function (n) {
				return n || n === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + n - this._delay),
						(this._delay = n),
						this)
					: this._delay;
			}),
			(t.duration = function (n) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n,
						)
					: this.totalDuration() && this._dur;
			}),
			(t.totalDuration = function (n) {
				return arguments.length
					? ((this._dirty = 0),
						xe(
							this,
							this._repeat < 0
								? n
								: (n - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (n, i) {
				if ((ve(), !arguments.length)) return this._tTime;
				var r = this._dp;
				if (r && r.smoothChildTiming && this._ts) {
					for (an(this, n), !r._dp || r.parent || $i(r, this); r && r.parent; )
						r.parent._time !==
							r._start +
								(r._ts >= 0
									? r._tTime / r._ts
									: (r.totalDuration() - r._tTime) / -r._ts) &&
							r.totalTime(r._tTime, !0),
							(r = r.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && n < this._tDur) ||
							(this._ts < 0 && n > 0) ||
							(!this._tDur && !n)) &&
						Dt(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== n ||
						(!this._dur && !i) ||
						(this._initted && Math.abs(this._zTime) === N) ||
						(!n && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = n), Gi(this, n, i)),
					this
				);
			}),
			(t.time = function (n, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), n + mi(this)) %
								(this._dur + this._rDelay) || (n ? this._dur : 0),
							i,
						)
					: this._time;
			}),
			(t.totalProgress = function (n, i) {
				return arguments.length
					? this.totalTime(this.totalDuration() * n, i)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.progress = function (n, i) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
								mi(this),
							i,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (n, i) {
				var r = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (n - 1) * r, i)
					: this._repeat
						? ye(this._tTime, r) + 1
						: 1;
			}),
			(t.timeScale = function (n, i) {
				if (!arguments.length) return this._rts === -N ? 0 : this._rts;
				if (this._rts === n) return this;
				var r =
					this.parent && this._ts ? tn(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +n || 0),
					(this._ts = this._ps || n === -N ? 0 : this._rts),
					this.totalTime(Ue(-Math.abs(this._delay), this._tDur, r), i !== !1),
					on(this),
					ss(this)
				);
			}),
			(t.paused = function (n) {
				return arguments.length
					? (this._ps !== n &&
							((this._ps = n),
							n
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (ve(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== N &&
											(this._tTime -= N),
									))),
						this)
					: this._ps;
			}),
			(t.startTime = function (n) {
				if (arguments.length) {
					this._start = n;
					var i = this.parent || this._dp;
					return (
						i && (i._sort || !this.parent) && Dt(i, this, n - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (n) {
				return (
					this._start +
					(ut(n) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (n) {
				var i = this.parent || this._dp;
				return i
					? n &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? tn(i.rawTime(n), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (n) {
				n === void 0 && (n = es);
				var i = nt;
				return (
					(nt = n),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(n),
						this.totalTime(-0.01, n.suppressEvents)),
					this.data !== "nested" && n.kill !== !1 && this.kill(),
					(nt = i),
					this
				);
			}),
			(t.globalTime = function (n) {
				for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
					(r = i._start + r / (Math.abs(i._ts) || 1)), (i = i._dp);
				return !this.parent && this._sat ? this._sat.globalTime(n) : r;
			}),
			(t.repeat = function (n) {
				return arguments.length
					? ((this._repeat = n === 1 / 0 ? -2 : n), gi(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (n) {
				if (arguments.length) {
					var i = this._time;
					return (this._rDelay = n), gi(this), i ? this.time(i) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (n) {
				return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
			}),
			(t.seek = function (n, i) {
				return this.totalTime(vt(this, n), ut(i));
			}),
			(t.restart = function (n, i) {
				return this.play().totalTime(n ? -this._delay : 0, ut(i));
			}),
			(t.play = function (n, i) {
				return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (n, i) {
				return (
					n != null && this.seek(n || this.totalDuration(), i),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (n, i) {
				return n != null && this.seek(n, i), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (n) {
				return arguments.length
					? (!!n !== this.reversed() &&
							this.timeScale(-this._rts || (n ? -N : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -N), this;
			}),
			(t.isActive = function () {
				var n = this.parent || this._dp,
					i = this._start,
					r;
				return !!(
					!n ||
					(this._ts &&
						this._initted &&
						n.isActive() &&
						(r = n.rawTime(!0)) >= i &&
						r < this.endTime(!0) - N)
				);
			}),
			(t.eventCallback = function (n, i, r) {
				var s = this.vars;
				return arguments.length > 1
					? (i
							? ((s[n] = i),
								r && (s[n + "Params"] = r),
								n === "onUpdate" && (this._onUpdate = i))
							: delete s[n],
						this)
					: s[n];
			}),
			(t.then = function (n) {
				var i = this;
				return new Promise(function (r) {
					var s = X(n) ? n : Hi,
						o = function () {
							var c = i.then;
							(i.then = null),
								X(s) && (s = s(i)) && (s.then || s === i) && (i.then = c),
								r(s),
								(i.then = c);
						};
					(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
					(!i._tTime && i._ts < 0)
						? o()
						: (i._prom = o);
				});
			}),
			(t.kill = function () {
				Pe(this);
			}),
			a
		);
	})();
St(Fe.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -N,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var rt = (function (a) {
	Ii(t, a);
	function t(n, i) {
		var r;
		return (
			n === void 0 && (n = {}),
			(r = a.call(this, n) || this),
			(r.labels = {}),
			(r.smoothChildTiming = !!n.smoothChildTiming),
			(r.autoRemoveChildren = !!n.autoRemoveChildren),
			(r._sort = ut(n.sortChildren)),
			U && Dt(n.parent || U, Ft(r), i),
			n.reversed && r.reverse(),
			n.paused && r.paused(!0),
			n.scrollTrigger && Ki(Ft(r), n.scrollTrigger),
			r
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (i, r, s) {
			return Ce(0, arguments, this), this;
		}),
		(e.from = function (i, r, s) {
			return Ce(1, arguments, this), this;
		}),
		(e.fromTo = function (i, r, s, o) {
			return Ce(2, arguments, this), this;
		}),
		(e.set = function (i, r, s) {
			return (
				(r.duration = 0),
				(r.parent = this),
				De(r).repeatDelay || (r.repeat = 0),
				(r.immediateRender = !!r.immediateRender),
				new j(i, r, vt(this, s), 1),
				this
			);
		}),
		(e.call = function (i, r, s) {
			return Dt(this, j.delayedCall(0, i, r), s);
		}),
		(e.staggerTo = function (i, r, s, o, u, c, f) {
			return (
				(s.duration = r),
				(s.stagger = s.stagger || o),
				(s.onComplete = c),
				(s.onCompleteParams = f),
				(s.parent = this),
				new j(i, s, vt(this, u)),
				this
			);
		}),
		(e.staggerFrom = function (i, r, s, o, u, c, f) {
			return (
				(s.runBackwards = 1),
				(De(s).immediateRender = ut(s.immediateRender)),
				this.staggerTo(i, r, s, o, u, c, f)
			);
		}),
		(e.staggerFromTo = function (i, r, s, o, u, c, f, h) {
			return (
				(o.startAt = s),
				(De(o).immediateRender = ut(o.immediateRender)),
				this.staggerTo(i, r, o, u, c, f, h)
			);
		}),
		(e.render = function (i, r, s) {
			var o = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				c = this._dur,
				f = i <= 0 ? 0 : K(i),
				h = this._zTime < 0 != i < 0 && (this._initted || !c),
				d,
				_,
				p,
				l,
				m,
				g,
				y,
				x,
				v,
				w,
				b,
				O;
			if (
				(this !== U && f > u && i >= 0 && (f = u), f !== this._tTime || s || h)
			) {
				if (
					(o !== this._time &&
						c &&
						((f += this._time - o), (i += this._time - o)),
					(d = f),
					(v = this._start),
					(x = this._ts),
					(g = !x),
					h && (c || (o = this._zTime), (i || !r) && (this._zTime = i)),
					this._repeat)
				) {
					if (
						((b = this._yoyo),
						(m = c + this._rDelay),
						this._repeat < -1 && i < 0)
					)
						return this.totalTime(m * 100 + i, r, s);
					if (
						((d = K(f % m)),
						f === u
							? ((l = this._repeat), (d = c))
							: ((l = ~~(f / m)),
								l && l === f / m && ((d = c), l--),
								d > c && (d = c)),
						(w = ye(this._tTime, m)),
						!o &&
							this._tTime &&
							w !== l &&
							this._tTime - w * m - this._dur <= 0 &&
							(w = l),
						b && l & 1 && ((d = c - d), (O = 1)),
						l !== w && !this._lock)
					) {
						var S = b && w & 1,
							T = S === (b && l & 1);
						if (
							(l < w && (S = !S),
							(o = S ? 0 : f % c ? c : f),
							(this._lock = 1),
							(this.render(o || (O ? 0 : K(l * m)), r, !c)._lock = 0),
							(this._tTime = f),
							!r && this.parent && gt(this, "onRepeat"),
							this.vars.repeatRefresh && !O && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								g !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((c = this._dur),
							(u = this._tDur),
							T &&
								((this._lock = 2),
								(o = S ? c : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !O && this.invalidate()),
							(this._lock = 0),
							!this._ts && !g)
						)
							return this;
						lr(this, O);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = cs(this, K(o), K(d))), y && (f -= d - (d = y._start))),
					(this._tTime = f),
					(this._time = d),
					(this._act = !x),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(o = 0)),
					!o && d && !r && !l && (gt(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (d >= o && i >= 0)
					for (_ = this._first; _; ) {
						if (
							((p = _._next), (_._act || d >= _._start) && _._ts && y !== _)
						) {
							if (_.parent !== this) return this.render(i, r, s);
							if (
								(_.render(
									_._ts > 0
										? (d - _._start) * _._ts
										: (_._dirty ? _.totalDuration() : _._tDur) +
												(d - _._start) * _._ts,
									r,
									s,
								),
								d !== this._time || (!this._ts && !g))
							) {
								(y = 0), p && (f += this._zTime = -N);
								break;
							}
						}
						_ = p;
					}
				else {
					_ = this._last;
					for (var P = i < 0 ? i : d; _; ) {
						if (((p = _._prev), (_._act || P <= _._end) && _._ts && y !== _)) {
							if (_.parent !== this) return this.render(i, r, s);
							if (
								(_.render(
									_._ts > 0
										? (P - _._start) * _._ts
										: (_._dirty ? _.totalDuration() : _._tDur) +
												(P - _._start) * _._ts,
									r,
									s || (nt && (_._initted || _._startAt)),
								),
								d !== this._time || (!this._ts && !g))
							) {
								(y = 0), p && (f += this._zTime = P ? -N : N);
								break;
							}
						}
						_ = p;
					}
				}
				if (
					y &&
					!r &&
					(this.pause(),
					(y.render(d >= o ? 0 : -N)._zTime = d >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = v), on(this), this.render(i, r, s);
				this._onUpdate && !r && gt(this, "onUpdate", !0),
					((f === u && this._tTime >= this.totalDuration()) || (!f && o)) &&
						(v === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !c) &&
								((f === u && this._ts > 0) || (!f && this._ts < 0)) &&
								Ht(this, 1),
							!r &&
								!(i < 0 && !o) &&
								(f || o || !u) &&
								(gt(
									this,
									f === u && i >= 0 ? "onComplete" : "onReverseComplete",
									!0,
								),
								this._prom &&
									!(f < u && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(e.add = function (i, r) {
			var s = this;
			if ((Nt(r) || (r = vt(this, r, i)), !(i instanceof Fe))) {
				if (it(i))
					return (
						i.forEach(function (o) {
							return s.add(o, r);
						}),
						this
					);
				if (Q(i)) return this.addLabel(i, r);
				if (X(i)) i = j.delayedCall(0, i);
				else return this;
			}
			return this !== i ? Dt(this, i, r) : this;
		}),
		(e.getChildren = function (i, r, s, o) {
			i === void 0 && (i = !0),
				r === void 0 && (r = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -wt);
			for (var u = [], c = this._first; c; )
				c._start >= o &&
					(c instanceof j
						? r && u.push(c)
						: (s && u.push(c), i && u.push.apply(u, c.getChildren(!0, r, s)))),
					(c = c._next);
			return u;
		}),
		(e.getById = function (i) {
			for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
				if (r[s].vars.id === i) return r[s];
		}),
		(e.remove = function (i) {
			return Q(i)
				? this.removeLabel(i)
				: X(i)
					? this.killTweensOf(i)
					: (sn(this, i),
						i === this._recent && (this._recent = this._last),
						ne(this));
		}),
		(e.totalTime = function (i, r) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = K(
							mt.time -
								(this._ts > 0
									? i / this._ts
									: (this.totalDuration() - i) / -this._ts),
						)),
					a.prototype.totalTime.call(this, i, r),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(e.addLabel = function (i, r) {
			return (this.labels[i] = vt(this, r)), this;
		}),
		(e.removeLabel = function (i) {
			return delete this.labels[i], this;
		}),
		(e.addPause = function (i, r, s) {
			var o = j.delayedCall(0, r || Le, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), Dt(this, o, vt(this, i))
			);
		}),
		(e.removePause = function (i) {
			var r = this._first;
			for (i = vt(this, i); r; )
				r._start === i && r.data === "isPause" && Ht(r), (r = r._next);
		}),
		(e.killTweensOf = function (i, r, s) {
			for (var o = this.getTweensOf(i, s), u = o.length; u--; )
				Ut !== o[u] && o[u].kill(i, r);
			return this;
		}),
		(e.getTweensOf = function (i, r) {
			for (var s = [], o = Tt(i), u = this._first, c = Nt(r), f; u; )
				u instanceof j
					? ns(u._targets, o) &&
						(c
							? (!Ut || (u._initted && u._ts)) &&
								u.globalTime(0) <= r &&
								u.globalTime(u.totalDuration()) > r
							: !r || u.isActive()) &&
						s.push(u)
					: (f = u.getTweensOf(o, r)).length && s.push.apply(s, f),
					(u = u._next);
			return s;
		}),
		(e.tweenTo = function (i, r) {
			r = r || {};
			var s = this,
				o = vt(s, i),
				u = r,
				c = u.startAt,
				f = u.onStart,
				h = u.onStartParams,
				d = u.immediateRender,
				_,
				p = j.to(
					s,
					St(
						{
							ease: r.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: o,
							overwrite: "auto",
							duration:
								r.duration ||
								Math.abs(
									(o - (c && "time" in c ? c.time : s._time)) / s.timeScale(),
								) ||
								N,
							onStart: function () {
								if ((s.pause(), !_)) {
									var m =
										r.duration ||
										Math.abs(
											(o - (c && "time" in c ? c.time : s._time)) /
												s.timeScale(),
										);
									p._dur !== m && xe(p, m, 0, 1).render(p._time, !0, !0),
										(_ = 1);
								}
								f && f.apply(p, h || []);
							},
						},
						r,
					),
				);
			return d ? p.render(0) : p;
		}),
		(e.tweenFromTo = function (i, r, s) {
			return this.tweenTo(r, St({ startAt: { time: vt(this, i) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (i) {
			return i === void 0 && (i = this._time), yi(this, vt(this, i));
		}),
		(e.previousLabel = function (i) {
			return i === void 0 && (i = this._time), yi(this, vt(this, i), 1);
		}),
		(e.currentLabel = function (i) {
			return arguments.length
				? this.seek(i, !0)
				: this.previousLabel(this._time + N);
		}),
		(e.shiftChildren = function (i, r, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, u = this.labels, c; o; )
				o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
			if (r) for (c in u) u[c] >= s && (u[c] += i);
			return ne(this);
		}),
		(e.invalidate = function (i) {
			var r = this._first;
			for (this._lock = 0; r; ) r.invalidate(i), (r = r._next);
			return a.prototype.invalidate.call(this, i);
		}),
		(e.clear = function (i) {
			i === void 0 && (i = !0);
			for (var r = this._first, s; r; ) (s = r._next), this.remove(r), (r = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				i && (this.labels = {}),
				ne(this)
			);
		}),
		(e.totalDuration = function (i) {
			var r = 0,
				s = this,
				o = s._last,
				u = wt,
				c,
				f,
				h;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -i : i),
				);
			if (s._dirty) {
				for (h = s.parent; o; )
					(c = o._prev),
						o._dirty && o.totalDuration(),
						(f = o._start),
						f > u && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (Dt(s, o, f - o._delay, 1)._lock = 0))
							: (u = f),
						f < 0 &&
							o._ts &&
							((r -= f),
							((!h && !s._dp) || (h && h.smoothChildTiming)) &&
								((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
							s.shiftChildren(-f, !1, -1 / 0),
							(u = 0)),
						o._end > r && o._ts && (r = o._end),
						(o = c);
				xe(s, s === U && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (i) {
			if ((U._ts && (Gi(U, tn(i, U)), (Yi = mt.frame)), mt.frame >= _i)) {
				_i += yt.autoSleep || 120;
				var r = U._first;
				if ((!r || !r._ts) && yt.autoSleep && mt._listeners.length < 2) {
					for (; r && !r._ts; ) r = r._next;
					r || mt.sleep();
				}
			}
		}),
		t
	);
})(Fe);
St(rt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Os = function (t, e, n, i, r, s, o) {
		var u = new ft(this._pt, t, e, 0, 1, xr, null, r),
			c = 0,
			f = 0,
			h,
			d,
			_,
			p,
			l,
			m,
			g,
			y;
		for (
			u.b = n,
				u.e = i,
				n += "",
				i += "",
				(g = ~i.indexOf("random(")) && (i = Ie(i)),
				s && ((y = [n, i]), s(y, t, e), (n = y[0]), (i = y[1])),
				d = n.match(dn) || [];
			(h = dn.exec(i));

		)
			(p = h[0]),
				(l = i.substring(c, h.index)),
				_ ? (_ = (_ + 1) % 5) : l.substr(-5) === "rgba(" && (_ = 1),
				p !== d[f++] &&
					((m = parseFloat(d[f - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: l || f === 1 ? l : ",",
						s: m,
						c: p.charAt(1) === "=" ? _e(m, p) - m : parseFloat(p) - m,
						m: _ && _ < 4 ? Math.round : 0,
					}),
					(c = dn.lastIndex));
		return (
			(u.c = c < i.length ? i.substring(c, i.length) : ""),
			(u.fp = o),
			(Ni.test(i) || g) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	Hn = function (t, e, n, i, r, s, o, u, c, f) {
		X(i) && (i = i(r || 0, t, s));
		var h = t[e],
			d =
				n !== "get"
					? n
					: X(h)
						? c
							? t[
									e.indexOf("set") || !X(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](c)
							: t[e]()
						: h,
			_ = X(h) ? (c ? Es : gr) : $n,
			p;
		if (
			(Q(i) &&
				(~i.indexOf("random(") && (i = Ie(i)),
				i.charAt(1) === "=" &&
					((p = _e(d, i) + (et(d) || 0)), (p || p === 0) && (i = p))),
			!f || d !== i || An)
		)
			return !isNaN(d * i) && i !== ""
				? ((p = new ft(
						this._pt,
						t,
						e,
						+d || 0,
						i - (d || 0),
						typeof h == "boolean" ? As : yr,
						0,
						_,
					)),
					c && (p.fp = c),
					o && p.modifier(o, this, t),
					(this._pt = p))
				: (!h && !(e in t) && Yn(e, i),
					Os.call(this, t, e, d, i, _, u || yt.stringFilter, c));
	},
	Ps = function (t, e, n, i, r) {
		if (
			(X(t) && (t = Ee(t, r, e, n, i)),
			!kt(t) || (t.style && t.nodeType) || it(t) || Fi(t))
		)
			return Q(t) ? Ee(t, r, e, n, i) : t;
		var s = {},
			o;
		for (o in t) s[o] = Ee(t[o], r, e, n, i);
		return s;
	},
	_r = function (t, e, n, i, r, s) {
		var o, u, c, f;
		if (
			pt[t] &&
			(o = new pt[t]()).init(
				r,
				o.rawVars ? e[t] : Ps(e[t], i, r, s, n),
				n,
				i,
				s,
			) !== !1 &&
			((n._pt = u = new ft(n._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
			n !== de)
		)
			for (c = n._ptLookup[n._targets.indexOf(r)], f = o._props.length; f--; )
				c[o._props[f]] = u;
		return o;
	},
	Ut,
	An,
	jn = function a(t, e, n) {
		var i = t.vars,
			r = i.ease,
			s = i.startAt,
			o = i.immediateRender,
			u = i.lazy,
			c = i.onUpdate,
			f = i.runBackwards,
			h = i.yoyoEase,
			d = i.keyframes,
			_ = i.autoRevert,
			p = t._dur,
			l = t._startAt,
			m = t._targets,
			g = t.parent,
			y = g && g.data === "nested" ? g.vars.targets : m,
			x = t._overwrite === "auto" && !Bn,
			v = t.timeline,
			w,
			b,
			O,
			S,
			T,
			P,
			D,
			C,
			E,
			A,
			I,
			L,
			R;
		if (
			(v && (!d || !r) && (r = "none"),
			(t._ease = ie(r, ge.ease)),
			(t._yEase = h ? fr(ie(h === !0 ? r : h, ge.ease)) : 0),
			h &&
				t._yoyo &&
				!t._repeat &&
				((h = t._yEase), (t._yEase = t._ease), (t._ease = h)),
			(t._from = !v && !!i.runBackwards),
			!v || (d && !i.stagger))
		) {
			if (
				((C = m[0] ? ee(m[0]).harness : 0),
				(L = C && i[C.prop]),
				(w = Je(i, Xn)),
				l &&
					(l._zTime < 0 && l.progress(1),
					e < 0 && f && o && !_ ? l.render(-1, !0) : l.revert(f && p ? He : ts),
					(l._lazy = 0)),
				s)
			) {
				if (
					(Ht(
						(t._startAt = j.set(
							m,
							St(
								{
									data: "isStart",
									overwrite: !1,
									parent: g,
									immediateRender: !0,
									lazy: !l && ut(u),
									startAt: null,
									delay: 0,
									onUpdate:
										c &&
										function () {
											return gt(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (nt || (!o && !_)) && t._startAt.revert(He),
					o && p && e <= 0 && n <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (f && p && !l) {
				if (
					(e && (o = !1),
					(O = St(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !l && ut(u),
							immediateRender: o,
							stagger: 0,
							parent: g,
						},
						w,
					)),
					L && (O[C.prop] = L),
					Ht((t._startAt = j.set(m, O))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (nt ? t._startAt.revert(He) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					a(t._startAt, N, N);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, u = (p && ut(u)) || (u && !p), b = 0;
				b < m.length;
				b++
			) {
				if (
					((T = m[b]),
					(D = T._gsap || Wn(m)[b]._gsap),
					(t._ptLookup[b] = A = {}),
					Pn[D.id] && Gt.length && Ze(),
					(I = y === m ? b : y.indexOf(T)),
					C &&
						(E = new C()).init(T, L || w, t, I, y) !== !1 &&
						((t._pt = S =
							new ft(t._pt, T, E.name, 0, 1, E.render, E, 0, E.priority)),
						E._props.forEach(function (W) {
							A[W] = S;
						}),
						E.priority && (P = 1)),
					!C || L)
				)
					for (O in w)
						pt[O] && (E = _r(O, w, t, I, T, y))
							? E.priority && (P = 1)
							: (A[O] = S =
									Hn.call(t, T, O, "get", w[O], I, y, 0, i.stringFilter));
				t._op && t._op[b] && t.kill(T, t._op[b]),
					x &&
						t._pt &&
						((Ut = t),
						U.killTweensOf(T, A, t.globalTime(e)),
						(R = !t.parent),
						(Ut = 0)),
					t._pt && u && (Pn[D.id] = 1);
			}
			P && vr(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = c),
			(t._initted = (!t._op || t._pt) && !R),
			d && e <= 0 && v.render(wt, !0, !0);
	},
	Ms = function (t, e, n, i, r, s, o, u) {
		var c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
			f,
			h,
			d,
			_;
		if (!c)
			for (
				c = t._ptCache[e] = [], d = t._ptLookup, _ = t._targets.length;
				_--;

			) {
				if (((f = d[_][e]), f && f.d && f.d._pt))
					for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
				if (!f)
					return (
						(An = 1),
						(t.vars[e] = "+=0"),
						jn(t, o),
						(An = 0),
						u ? Ae(e + " not eligible for reset") : 1
					);
				c.push(f);
			}
		for (_ = c.length; _--; )
			(h = c[_]),
				(f = h._pt || h),
				(f.s = (i || i === 0) && !r ? i : f.s + (i || 0) + s * f.c),
				(f.c = n - f.s),
				h.e && (h.e = G(n) + et(h.e)),
				h.b && (h.b = f.s + et(h.b));
	},
	Ds = function (t, e) {
		var n = t[0] ? ee(t[0]).harness : 0,
			i = n && n.aliases,
			r,
			s,
			o,
			u;
		if (!i) return e;
		r = se({}, e);
		for (s in i)
			if (s in r) for (u = i[s].split(","), o = u.length; o--; ) r[u[o]] = r[s];
		return r;
	},
	Cs = function (t, e, n, i) {
		var r = e.ease || i || "power1.inOut",
			s,
			o;
		if (it(e))
			(o = n[t] || (n[t] = [])),
				e.forEach(function (u, c) {
					return o.push({ t: (c / (e.length - 1)) * 100, v: u, e: r });
				});
		else
			for (s in e)
				(o = n[s] || (n[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: r });
	},
	Ee = function (t, e, n, i, r) {
		return X(t)
			? t.call(e, n, i, r)
			: Q(t) && ~t.indexOf("random(")
				? Ie(t)
				: t;
	},
	pr = Gn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	mr = {};
ct(pr + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (mr[a] = 1);
});
var j = (function (a) {
	Ii(t, a);
	function t(n, i, r, s) {
		var o;
		typeof i == "number" && ((r.duration = i), (i = r), (r = null)),
			(o = a.call(this, s ? i : De(i)) || this);
		var u = o.vars,
			c = u.duration,
			f = u.delay,
			h = u.immediateRender,
			d = u.stagger,
			_ = u.overwrite,
			p = u.keyframes,
			l = u.defaults,
			m = u.scrollTrigger,
			g = u.yoyoEase,
			y = i.parent || U,
			x = (it(n) || Fi(n) ? Nt(n[0]) : "length" in i) ? [n] : Tt(n),
			v,
			w,
			b,
			O,
			S,
			T,
			P,
			D;
		if (
			((o._targets = x.length
				? Wn(x)
				: Ae(
						"GSAP target " + n + " not found. https://gsap.com",
						!yt.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = _),
			p || d || Ge(c) || Ge(f))
		) {
			if (
				((i = o.vars),
				(v = o.timeline =
					new rt({
						data: "nested",
						defaults: l || {},
						targets: y && y.data === "nested" ? y.vars.targets : x,
					})),
				v.kill(),
				(v.parent = v._dp = Ft(o)),
				(v._start = 0),
				d || Ge(c) || Ge(f))
			) {
				if (((O = x.length), (P = d && tr(d)), kt(d)))
					for (S in d) ~pr.indexOf(S) && (D || (D = {}), (D[S] = d[S]));
				for (w = 0; w < O; w++)
					(b = Je(i, mr)),
						(b.stagger = 0),
						g && (b.yoyoEase = g),
						D && se(b, D),
						(T = x[w]),
						(b.duration = +Ee(c, Ft(o), w, T, x)),
						(b.delay = (+Ee(f, Ft(o), w, T, x) || 0) - o._delay),
						!d &&
							O === 1 &&
							b.delay &&
							((o._delay = f = b.delay), (o._start += f), (b.delay = 0)),
						v.to(T, b, P ? P(w, T, x) : 0),
						(v._ease = k.none);
				v.duration() ? (c = f = 0) : (o.timeline = 0);
			} else if (p) {
				De(St(v.vars.defaults, { ease: "none" })),
					(v._ease = ie(p.ease || i.ease || "none"));
				var C = 0,
					E,
					A,
					I;
				if (it(p))
					p.forEach(function (L) {
						return v.to(x, L, ">");
					}),
						v.duration();
				else {
					b = {};
					for (S in p)
						S === "ease" || S === "easeEach" || Cs(S, p[S], b, p.easeEach);
					for (S in b)
						for (
							E = b[S].sort(function (L, R) {
								return L.t - R.t;
							}),
								C = 0,
								w = 0;
							w < E.length;
							w++
						)
							(A = E[w]),
								(I = {
									ease: A.e,
									duration: ((A.t - (w ? E[w - 1].t : 0)) / 100) * c,
								}),
								(I[S] = A.v),
								v.to(x, I, C),
								(C += I.duration);
					v.duration() < c && v.to({}, { duration: c - v.duration() });
				}
			}
			c || o.duration((c = v.duration()));
		} else o.timeline = 0;
		return (
			_ === !0 && !Bn && ((Ut = Ft(o)), U.killTweensOf(x), (Ut = 0)),
			Dt(y, Ft(o), r),
			i.reversed && o.reverse(),
			i.paused && o.paused(!0),
			(h ||
				(!c &&
					!p &&
					o._start === K(y._time) &&
					ut(h) &&
					os(Ft(o)) &&
					y.data !== "nested")) &&
				((o._tTime = -N), o.render(Math.max(0, -f) || 0)),
			m && Ki(Ft(o), m),
			o
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (i, r, s) {
			var o = this._time,
				u = this._tDur,
				c = this._dur,
				f = i < 0,
				h = i > u - N && !f ? u : i < N ? 0 : i,
				d,
				_,
				p,
				l,
				m,
				g,
				y,
				x,
				v;
			if (!c) us(this, i, r, s);
			else if (
				h !== this._tTime ||
				!i ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((d = h), (x = this.timeline), this._repeat)) {
					if (((l = c + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(l * 100 + i, r, s);
					if (
						((d = K(h % l)),
						h === u
							? ((p = this._repeat), (d = c))
							: ((p = ~~(h / l)),
								p && p === K(h / l) && ((d = c), p--),
								d > c && (d = c)),
						(g = this._yoyo && p & 1),
						g && ((v = this._yEase), (d = c - d)),
						(m = ye(this._tTime, l)),
						d === o && !s && this._initted && p === m)
					)
						return (this._tTime = h), this;
					p !== m &&
						(x && this._yEase && lr(x, g),
						this.vars.repeatRefresh &&
							!g &&
							!this._lock &&
							this._time !== l &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(K(l * p), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Qi(this, f ? i : d, s, r, h)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
						return this;
					if (c !== this._dur) return this.render(i, r, s);
				}
				if (
					((this._tTime = h),
					(this._time = d),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (v || this._ease)(d / c)),
					this._from && (this.ratio = y = 1 - y),
					d && !o && !r && !p && (gt(this, "onStart"), this._tTime !== h))
				)
					return this;
				for (_ = this._pt; _; ) _.r(y, _.d), (_ = _._next);
				(x && x.render(i < 0 ? i : x._dur * x._ease(d / this._dur), r, s)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!r &&
						(f && Mn(this, i, r, s), gt(this, "onUpdate")),
					this._repeat &&
						p !== m &&
						this.vars.onRepeat &&
						!r &&
						this.parent &&
						gt(this, "onRepeat"),
					(h === this._tDur || !h) &&
						this._tTime === h &&
						(f && !this._onUpdate && Mn(this, i, !0, !0),
						(i || !c) &&
							((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
							Ht(this, 1),
						!r &&
							!(f && !o) &&
							(h || o || g) &&
							(gt(this, h === u ? "onComplete" : "onReverseComplete", !0),
							this._prom && !(h < u && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(e.targets = function () {
			return this._targets;
		}),
		(e.invalidate = function (i) {
			return (
				(!i || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(i),
				a.prototype.invalidate.call(this, i)
			);
		}),
		(e.resetTo = function (i, r, s, o, u) {
			Re || mt.wake(), this._ts || this.play();
			var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				f;
			return (
				this._initted || jn(this, c),
				(f = this._ease(c / this._dur)),
				Ms(this, i, r, s, o, f, c, u)
					? this.resetTo(i, r, s, o, 1)
					: (an(this, 0),
						this.parent ||
							ji(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(e.kill = function (i, r) {
			if ((r === void 0 && (r = "all"), !i && (!r || r === "all")))
				return (this._lazy = this._pt = 0), this.parent ? Pe(this) : this;
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(i, r, Ut && Ut.vars.overwrite !== !0)
						._first || Pe(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						xe(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				u = i ? Tt(i) : o,
				c = this._ptLookup,
				f = this._pt,
				h,
				d,
				_,
				p,
				l,
				m,
				g;
			if ((!r || r === "all") && rs(o, u))
				return r === "all" && (this._pt = 0), Pe(this);
			for (
				h = this._op = this._op || [],
					r !== "all" &&
						(Q(r) &&
							((l = {}),
							ct(r, function (y) {
								return (l[y] = 1);
							}),
							(r = l)),
						(r = Ds(o, r))),
					g = o.length;
				g--;

			)
				if (~u.indexOf(o[g])) {
					(d = c[g]),
						r === "all"
							? ((h[g] = r), (p = d), (_ = {}))
							: ((_ = h[g] = h[g] || {}), (p = r));
					for (l in p)
						(m = d && d[l]),
							m &&
								((!("kill" in m.d) || m.d.kill(l) === !0) && sn(this, m, "_pt"),
								delete d[l]),
							_ !== "all" && (_[l] = 1);
				}
			return this._initted && !this._pt && f && Pe(this), this;
		}),
		(t.to = function (i, r) {
			return new t(i, r, arguments[2]);
		}),
		(t.from = function (i, r) {
			return Ce(1, arguments);
		}),
		(t.delayedCall = function (i, r, s, o) {
			return new t(r, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: i,
				onComplete: r,
				onReverseComplete: r,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: o,
			});
		}),
		(t.fromTo = function (i, r, s) {
			return Ce(2, arguments);
		}),
		(t.set = function (i, r) {
			return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(i, r);
		}),
		(t.killTweensOf = function (i, r, s) {
			return U.killTweensOf(i, r, s);
		}),
		t
	);
})(Fe);
St(j.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ct("staggerTo,staggerFrom,staggerFromTo", function (a) {
	j[a] = function () {
		var t = new rt(),
			e = Cn.call(arguments, 0);
		return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
	};
});
var $n = function (t, e, n) {
		return (t[e] = n);
	},
	gr = function (t, e, n) {
		return t[e](n);
	},
	Es = function (t, e, n, i) {
		return t[e](i.fp, n);
	},
	ks = function (t, e, n) {
		return t.setAttribute(e, n);
	},
	Kn = function (t, e) {
		return X(t[e]) ? gr : Vn(t[e]) && t.setAttribute ? ks : $n;
	},
	yr = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	As = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	xr = function (t, e) {
		var n = e._pt,
			i = "";
		if (!t && e.b) i = e.b;
		else if (t === 1 && e.e) i = e.e;
		else {
			for (; n; )
				(i =
					n.p +
					(n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) +
					i),
					(n = n._next);
			i += e.c;
		}
		e.set(e.t, e.p, i, e);
	},
	Qn = function (t, e) {
		for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
	},
	Ls = function (t, e, n, i) {
		for (var r = this._pt, s; r; )
			(s = r._next), r.p === i && r.modifier(t, e, n), (r = s);
	},
	Is = function (t) {
		for (var e = this._pt, n, i; e; )
			(i = e._next),
				(e.p === t && !e.op) || e.op === t
					? sn(this, e, "_pt")
					: e.dep || (n = 1),
				(e = i);
		return !n;
	},
	Rs = function (t, e, n, i) {
		i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
	},
	vr = function (t) {
		for (var e = t._pt, n, i, r, s; e; ) {
			for (n = e._next, i = r; i && i.pr > e.pr; ) i = i._next;
			(e._prev = i ? i._prev : s) ? (e._prev._next = e) : (r = e),
				(e._next = i) ? (i._prev = e) : (s = e),
				(e = n);
		}
		t._pt = r;
	},
	ft = (function () {
		function a(e, n, i, r, s, o, u, c, f) {
			(this.t = n),
				(this.s = r),
				(this.c = s),
				(this.p = i),
				(this.r = o || yr),
				(this.d = u || this),
				(this.set = c || $n),
				(this.pr = f || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (n, i, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = Rs),
					(this.m = n),
					(this.mt = r),
					(this.tween = i);
			}),
			a
		);
	})();
ct(
	Gn +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (Xn[a] = 1);
	},
);
xt.TweenMax = xt.TweenLite = j;
xt.TimelineLite = xt.TimelineMax = rt;
U = new rt({
	sortChildren: !1,
	defaults: ge,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
yt.stringFilter = cr;
var re = [],
	$e = {},
	Fs = [],
	vi = 0,
	zs = 0,
	yn = function (t) {
		return ($e[t] || Fs).map(function (e) {
			return e();
		});
	},
	Ln = function () {
		var t = Date.now(),
			e = [];
		t - vi > 2 &&
			(yn("matchMediaInit"),
			re.forEach(function (n) {
				var i = n.queries,
					r = n.conditions,
					s,
					o,
					u,
					c;
				for (o in i)
					(s = Mt.matchMedia(i[o]).matches),
						s && (u = 1),
						s !== r[o] && ((r[o] = s), (c = 1));
				c && (n.revert(), u && e.push(n));
			}),
			yn("matchMediaRevert"),
			e.forEach(function (n) {
				return n.onMatch(n, function (i) {
					return n.add(null, i);
				});
			}),
			(vi = t),
			yn("matchMedia"));
	},
	wr = (function () {
		function a(e, n) {
			(this.selector = n && En(n)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = zs++),
				e && this.add(e);
		}
		var t = a.prototype;
		return (
			(t.add = function (n, i, r) {
				X(n) && ((r = i), (i = n), (n = X));
				var s = this,
					o = function () {
						var c = B,
							f = s.selector,
							h;
						return (
							c && c !== s && c.data.push(s),
							r && (s.selector = En(r)),
							(B = s),
							(h = i.apply(s, arguments)),
							X(h) && s._r.push(h),
							(B = c),
							(s.selector = f),
							(s.isReverted = !1),
							h
						);
					};
				return (
					(s.last = o),
					n === X
						? o(s, function (u) {
								return s.add(null, u);
							})
						: n
							? (s[n] = o)
							: o
				);
			}),
			(t.ignore = function (n) {
				var i = B;
				(B = null), n(this), (B = i);
			}),
			(t.getTweens = function () {
				var n = [];
				return (
					this.data.forEach(function (i) {
						return i instanceof a
							? n.push.apply(n, i.getTweens())
							: i instanceof j &&
									!(i.parent && i.parent.data === "nested") &&
									n.push(i);
					}),
					n
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (n, i) {
				var r = this;
				if (
					(n
						? (function () {
								for (var o = r.getTweens(), u = r.data.length, c; u--; )
									(c = r.data[u]),
										c.data === "isFlip" &&
											(c.revert(),
											c.getChildren(!0, !0, !1).forEach(function (f) {
												return o.splice(o.indexOf(f), 1);
											}));
								for (
									o
										.map(function (f) {
											return {
												g:
													f._dur ||
													f._delay ||
													(f._sat && !f._sat.vars.immediateRender)
														? f.globalTime(0)
														: -1 / 0,
												t: f,
											};
										})
										.sort(function (f, h) {
											return h.g - f.g || -1 / 0;
										})
										.forEach(function (f) {
											return f.t.revert(n);
										}),
										u = r.data.length;
									u--;

								)
									(c = r.data[u]),
										c instanceof rt
											? c.data !== "nested" &&
												(c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
											: !(c instanceof j) && c.revert && c.revert(n);
								r._r.forEach(function (f) {
									return f(n, r);
								}),
									(r.isReverted = !0);
							})()
						: this.data.forEach(function (o) {
								return o.kill && o.kill();
							}),
					this.clear(),
					i)
				)
					for (var s = re.length; s--; )
						re[s].id === this.id && re.splice(s, 1);
			}),
			(t.revert = function (n) {
				this.kill(n || {});
			}),
			a
		);
	})(),
	Ns = (function () {
		function a(e) {
			(this.contexts = []), (this.scope = e), B && B.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (n, i, r) {
				kt(n) || (n = { matches: n });
				var s = new wr(0, r || this.scope),
					o = (s.conditions = {}),
					u,
					c,
					f;
				B && !s.selector && (s.selector = B.selector),
					this.contexts.push(s),
					(i = s.add("onMatch", i)),
					(s.queries = n);
				for (c in n)
					c === "all"
						? (f = 1)
						: ((u = Mt.matchMedia(n[c])),
							u &&
								(re.indexOf(s) < 0 && re.push(s),
								(o[c] = u.matches) && (f = 1),
								u.addListener
									? u.addListener(Ln)
									: u.addEventListener("change", Ln)));
				return (
					f &&
						i(s, function (h) {
							return s.add(null, h);
						}),
					this
				);
			}),
			(t.revert = function (n) {
				this.kill(n || {});
			}),
			(t.kill = function (n) {
				this.contexts.forEach(function (i) {
					return i.kill(n, !0);
				});
			}),
			a
		);
	})(),
	en = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
				e[n] = arguments[n];
			e.forEach(function (i) {
				return or(i);
			});
		},
		timeline: function (t) {
			return new rt(t);
		},
		getTweensOf: function (t, e) {
			return U.getTweensOf(t, e);
		},
		getProperty: function (t, e, n, i) {
			Q(t) && (t = Tt(t)[0]);
			var r = ee(t || {}).get,
				s = n ? Hi : Wi;
			return (
				n === "native" && (n = ""),
				t &&
					(e
						? s(((pt[e] && pt[e].get) || r)(t, e, n, i))
						: function (o, u, c) {
								return s(((pt[o] && pt[o].get) || r)(t, o, u, c));
							})
			);
		},
		quickSetter: function (t, e, n) {
			if (((t = Tt(t)), t.length > 1)) {
				var i = t.map(function (f) {
						return ht.quickSetter(f, e, n);
					}),
					r = i.length;
				return function (f) {
					for (var h = r; h--; ) i[h](f);
				};
			}
			t = t[0] || {};
			var s = pt[e],
				o = ee(t),
				u = (o.harness && (o.harness.aliases || {})[e]) || e,
				c = s
					? function (f) {
							var h = new s();
							(de._pt = 0),
								h.init(t, n ? f + n : f, de, 0, [t]),
								h.render(1, h),
								de._pt && Qn(1, de);
						}
					: o.set(t, u);
			return s
				? c
				: function (f) {
						return c(t, u, n ? f + n : f, o, 1);
					};
		},
		quickTo: function (t, e, n) {
			var i,
				r = ht.to(
					t,
					se(((i = {}), (i[e] = "+=0.1"), (i.paused = !0), i), n || {}),
				),
				s = function (u, c, f) {
					return r.resetTo(e, u, c, f);
				};
			return (s.tween = r), s;
		},
		isTweening: function (t) {
			return U.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = ie(t.ease, ge.ease)), pi(ge, t || {});
		},
		config: function (t) {
			return pi(yt, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				n = t.effect,
				i = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(i || "").split(",").forEach(function (o) {
				return (
					o && !pt[o] && !xt[o] && Ae(e + " effect requires " + o + " plugin.")
				);
			}),
				(_n[e] = function (o, u, c) {
					return n(Tt(o), St(u || {}, r), c);
				}),
				s &&
					(rt.prototype[e] = function (o, u, c) {
						return this.add(_n[e](o, kt(u) ? u : (c = u) && {}, this), c);
					});
		},
		registerEase: function (t, e) {
			k[t] = ie(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? ie(t, e) : k;
		},
		getById: function (t) {
			return U.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var n = new rt(t),
				i,
				r;
			for (
				n.smoothChildTiming = ut(t.smoothChildTiming),
					U.remove(n),
					n._dp = 0,
					n._time = n._tTime = U._time,
					i = U._first;
				i;

			)
				(r = i._next),
					(e ||
						!(
							!i._dur &&
							i instanceof j &&
							i.vars.onComplete === i._targets[0]
						)) &&
						Dt(n, i, i._start - i._delay),
					(i = r);
			return Dt(U, n, 0), n;
		},
		context: function (t, e) {
			return t ? new wr(t, e) : B;
		},
		matchMedia: function (t) {
			return new Ns(t);
		},
		matchMediaRefresh: function () {
			return (
				re.forEach(function (t) {
					var e = t.conditions,
						n,
						i;
					for (i in e) e[i] && ((e[i] = !1), (n = 1));
					n && t.revert();
				}) || Ln()
			);
		},
		addEventListener: function (t, e) {
			var n = $e[t] || ($e[t] = []);
			~n.indexOf(e) || n.push(e);
		},
		removeEventListener: function (t, e) {
			var n = $e[t],
				i = n && n.indexOf(e);
			i >= 0 && n.splice(i, 1);
		},
		utils: {
			wrap: ms,
			wrapYoyo: gs,
			distribute: tr,
			random: nr,
			snap: er,
			normalize: ps,
			getUnit: et,
			clamp: ls,
			splitColor: ar,
			toArray: Tt,
			selector: En,
			mapRange: rr,
			pipe: ds,
			unitize: _s,
			interpolate: ys,
			shuffle: Ji,
		},
		install: qi,
		effects: _n,
		ticker: mt,
		updateRoot: rt.updateRoot,
		plugins: pt,
		globalTimeline: U,
		core: {
			PropTween: ft,
			globals: Ui,
			Tween: j,
			Timeline: rt,
			Animation: Fe,
			getCache: ee,
			_removeLinkedListItem: sn,
			reverting: function () {
				return nt;
			},
			context: function (t) {
				return t && B && (B.data.push(t), (t._ctx = B)), B;
			},
			suppressOverwrites: function (t) {
				return (Bn = t);
			},
		},
	};
ct("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return (en[a] = j[a]);
});
mt.add(rt.updateRoot);
de = en.to({}, { duration: 0 });
var Bs = function (t, e) {
		for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
			n = n._next;
		return n;
	},
	Vs = function (t, e) {
		var n = t._targets,
			i,
			r,
			s;
		for (i in e)
			for (r = n.length; r--; )
				(s = t._ptLookup[r][i]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Bs(s, i)),
						s && s.modifier && s.modifier(e[i], t, n[r], i));
	},
	xn = function (t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function (i, r, s) {
				s._onInit = function (o) {
					var u, c;
					if (
						(Q(r) &&
							((u = {}),
							ct(r, function (f) {
								return (u[f] = 1);
							}),
							(r = u)),
						e)
					) {
						u = {};
						for (c in r) u[c] = e(r[c]);
						r = u;
					}
					Vs(o, r);
				};
			},
		};
	},
	ht =
		en.registerPlugin(
			{
				name: "attr",
				init: function (t, e, n, i, r) {
					var s, o, u;
					this.tween = n;
					for (s in e)
						(u = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(u || 0) + "",
								e[s],
								i,
								r,
								0,
								0,
								s,
							)),
							(o.op = s),
							(o.b = u),
							this._props.push(s);
				},
				render: function (t, e) {
					for (var n = e._pt; n; )
						nt ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
				},
			},
			{
				name: "endArray",
				init: function (t, e) {
					for (var n = e.length; n--; )
						this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
				},
			},
			xn("roundProps", kn),
			xn("modifiers"),
			xn("snap", er),
		) || en;
j.version = rt.version = ht.version = "3.12.5";
Vi = 1;
qn() && ve();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var wi,
	Yt,
	pe,
	Zn,
	te,
	Ti,
	Jn,
	qs = function () {
		return typeof window < "u";
	},
	Bt = {},
	Jt = 180 / Math.PI,
	me = Math.PI / 180,
	fe = Math.atan2,
	Si = 1e8,
	ti = /([A-Z])/g,
	Us = /(left|right|width|margin|padding|x)/i,
	Ys = /[\s,\(]\S/,
	Ct = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	In = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Xs = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	Gs = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e,
		);
	},
	Ws = function (t, e) {
		var n = e.s + e.c * t;
		e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	Tr = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	Sr = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	Hs = function (t, e, n) {
		return (t.style[e] = n);
	},
	js = function (t, e, n) {
		return t.style.setProperty(e, n);
	},
	$s = function (t, e, n) {
		return (t._gsap[e] = n);
	},
	Ks = function (t, e, n) {
		return (t._gsap.scaleX = t._gsap.scaleY = n);
	},
	Qs = function (t, e, n, i, r) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = n), s.renderTransform(r, s);
	},
	Zs = function (t, e, n, i, r) {
		var s = t._gsap;
		(s[e] = n), s.renderTransform(r, s);
	},
	Y = "transform",
	lt = Y + "Origin",
	Js = function a(t, e) {
		var n = this,
			i = this.target,
			r = i.style,
			s = i._gsap;
		if (t in Bt && r) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = Ct[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (n.tfm[o] = zt(i, o));
							})
						: (this.tfm[t] = s.x ? s[t] : zt(i, t)),
					t === lt && (this.tfm.zOrigin = s.zOrigin);
			else
				return Ct.transform.split(",").forEach(function (o) {
					return a.call(n, o, e);
				});
			if (this.props.indexOf(Y) >= 0) return;
			s.svg &&
				((this.svgo = i.getAttribute("data-svg-origin")),
				this.props.push(lt, e, "")),
				(t = Y);
		}
		(r || e) && this.props.push(t, e, r[t]);
	},
	br = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	to = function () {
		var t = this.props,
			e = this.target,
			n = e.style,
			i = e._gsap,
			r,
			s;
		for (r = 0; r < t.length; r += 3)
			t[r + 1]
				? (e[t[r]] = t[r + 2])
				: t[r + 2]
					? (n[t[r]] = t[r + 2])
					: n.removeProperty(
							t[r].substr(0, 2) === "--"
								? t[r]
								: t[r].replace(ti, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) i[s] = this.tfm[s];
			i.svg &&
				(i.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(r = Jn()),
				(!r || !r.isStart) &&
					!n[Y] &&
					(br(n),
					i.zOrigin &&
						n[lt] &&
						((n[lt] += " " + i.zOrigin + "px"),
						(i.zOrigin = 0),
						i.renderTransform()),
					(i.uncache = 1));
		}
	},
	Or = function (t, e) {
		var n = { target: t, props: [], revert: to, save: Js };
		return (
			t._gsap || ht.core.getCache(t),
			e &&
				e.split(",").forEach(function (i) {
					return n.save(i);
				}),
			n
		);
	},
	Pr,
	Rn = function (t, e) {
		var n = Yt.createElementNS
			? Yt.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Yt.createElement(t);
		return n && n.style ? n : Yt.createElement(t);
	},
	Et = function a(t, e, n) {
		var i = getComputedStyle(t);
		return (
			i[e] ||
			i.getPropertyValue(e.replace(ti, "-$1").toLowerCase()) ||
			i.getPropertyValue(e) ||
			(!n && a(t, we(e) || e, 1)) ||
			""
		);
	},
	bi = "O,Moz,ms,Ms,Webkit".split(","),
	we = function (t, e, n) {
		var i = e || te,
			r = i.style,
			s = 5;
		if (t in r && !n) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(bi[s] + t in r);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? bi[s] : "") + t;
	},
	Fn = function () {
		qs() &&
			window.document &&
			((wi = window),
			(Yt = wi.document),
			(pe = Yt.documentElement),
			(te = Rn("div") || { style: {} }),
			Rn("div"),
			(Y = we(Y)),
			(lt = Y + "Origin"),
			(te.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Pr = !!we("perspective")),
			(Jn = ht.core.reverting),
			(Zn = 1));
	},
	vn = function a(t) {
		var e = Rn(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			n = this.parentNode,
			i = this.nextSibling,
			r = this.style.cssText,
			s;
		if (
			(pe.appendChild(e),
			e.appendChild(this),
			(this.style.display = "block"),
			t)
		)
			try {
				(s = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = a);
			} catch {}
		else this._gsapBBox && (s = this._gsapBBox());
		return (
			n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
			pe.removeChild(e),
			(this.style.cssText = r),
			s
		);
	},
	Oi = function (t, e) {
		for (var n = e.length; n--; )
			if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
	},
	Mr = function (t) {
		var e;
		try {
			e = t.getBBox();
		} catch {
			e = vn.call(t, !0);
		}
		return (
			(e && (e.width || e.height)) || t.getBBox === vn || (e = vn.call(t, !0)),
			e && !e.width && !e.x && !e.y
				? {
						x: +Oi(t, ["x", "cx", "x1"]) || 0,
						y: +Oi(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	Dr = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mr(t));
	},
	oe = function (t, e) {
		if (e) {
			var n = t.style,
				i;
			e in Bt && e !== lt && (e = Y),
				n.removeProperty
					? ((i = e.substr(0, 2)),
						(i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						n.removeProperty(
							i === "--" ? e : e.replace(ti, "-$1").toLowerCase(),
						))
					: n.removeAttribute(e);
		}
	},
	Xt = function (t, e, n, i, r, s) {
		var o = new ft(t._pt, e, n, 0, 1, s ? Sr : Tr);
		return (t._pt = o), (o.b = i), (o.e = r), t._props.push(n), o;
	},
	Pi = { deg: 1, rad: 1, turn: 1 },
	eo = { grid: 1, flex: 1 },
	jt = function a(t, e, n, i) {
		var r = parseFloat(n) || 0,
			s = (n + "").trim().substr((r + "").length) || "px",
			o = te.style,
			u = Us.test(e),
			c = t.tagName.toLowerCase() === "svg",
			f = (c ? "client" : "offset") + (u ? "Width" : "Height"),
			h = 100,
			d = i === "px",
			_ = i === "%",
			p,
			l,
			m,
			g;
		if (i === s || !r || Pi[i] || Pi[s]) return r;
		if (
			(s !== "px" && !d && (r = a(t, e, n, "px")),
			(g = t.getCTM && Dr(t)),
			(_ || s === "%") && (Bt[e] || ~e.indexOf("adius")))
		)
			return (
				(p = g ? t.getBBox()[u ? "width" : "height"] : t[f]),
				G(_ ? (r / p) * h : (r / 100) * p)
			);
		if (
			((o[u ? "width" : "height"] = h + (d ? s : i)),
			(l =
				~e.indexOf("adius") || (i === "em" && t.appendChild && !c)
					? t
					: t.parentNode),
			g && (l = (t.ownerSVGElement || {}).parentNode),
			(!l || l === Yt || !l.appendChild) && (l = Yt.body),
			(m = l._gsap),
			m && _ && m.width && u && m.time === mt.time && !m.uncache)
		)
			return G((r / m.width) * h);
		if (_ && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = h + i), (p = t[f]), y ? (t.style[e] = y) : oe(t, e);
		} else
			(_ || s === "%") &&
				!eo[Et(l, "display")] &&
				(o.position = Et(t, "position")),
				l === t && (o.position = "static"),
				l.appendChild(te),
				(p = te[f]),
				l.removeChild(te),
				(o.position = "absolute");
		return (
			u && _ && ((m = ee(l)), (m.time = mt.time), (m.width = l[f])),
			G(d ? (p * r) / h : p && r ? (h / p) * r : 0)
		);
	},
	zt = function (t, e, n, i) {
		var r;
		return (
			Zn || Fn(),
			e in Ct &&
				e !== "transform" &&
				((e = Ct[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			Bt[e] && e !== "transform"
				? ((r = Ne(t, i)),
					(r =
						e !== "transformOrigin"
							? r[e]
							: r.svg
								? r.origin
								: rn(Et(t, lt)) + " " + r.zOrigin + "px"))
				: ((r = t.style[e]),
					(!r || r === "auto" || i || ~(r + "").indexOf("calc(")) &&
						(r =
							(nn[e] && nn[e](t, e, n)) ||
							Et(t, e) ||
							Xi(t, e) ||
							(e === "opacity" ? 1 : 0))),
			n && !~(r + "").trim().indexOf(" ") ? jt(t, e, r, n) + n : r
		);
	},
	no = function (t, e, n, i) {
		if (!n || n === "none") {
			var r = we(e, t, 1),
				s = r && Et(t, r, 1);
			s && s !== n
				? ((e = r), (n = s))
				: e === "borderColor" && (n = Et(t, "borderTopColor"));
		}
		var o = new ft(this._pt, t.style, e, 0, 1, xr),
			u = 0,
			c = 0,
			f,
			h,
			d,
			_,
			p,
			l,
			m,
			g,
			y,
			x,
			v,
			w;
		if (
			((o.b = n),
			(o.e = i),
			(n += ""),
			(i += ""),
			i === "auto" &&
				((l = t.style[e]),
				(t.style[e] = i),
				(i = Et(t, e) || i),
				l ? (t.style[e] = l) : oe(t, e)),
			(f = [n, i]),
			cr(f),
			(n = f[0]),
			(i = f[1]),
			(d = n.match(he) || []),
			(w = i.match(he) || []),
			w.length)
		) {
			for (; (h = he.exec(i)); )
				(m = h[0]),
					(y = i.substring(u, h.index)),
					p
						? (p = (p + 1) % 5)
						: (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
					m !== (l = d[c++] || "") &&
						((_ = parseFloat(l) || 0),
						(v = l.substr((_ + "").length)),
						m.charAt(1) === "=" && (m = _e(_, m) + v),
						(g = parseFloat(m)),
						(x = m.substr((g + "").length)),
						(u = he.lastIndex - x.length),
						x ||
							((x = x || yt.units[e] || v),
							u === i.length && ((i += x), (o.e += x))),
						v !== x && (_ = jt(t, e, l, x) || 0),
						(o._pt = {
							_next: o._pt,
							p: y || c === 1 ? y : ",",
							s: _,
							c: g - _,
							m: (p && p < 4) || e === "zIndex" ? Math.round : 0,
						}));
			o.c = u < i.length ? i.substring(u, i.length) : "";
		} else o.r = e === "display" && i === "none" ? Sr : Tr;
		return Ni.test(i) && (o.e = 0), (this._pt = o), o;
	},
	Mi = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	io = function (t) {
		var e = t.split(" "),
			n = e[0],
			i = e[1] || "50%";
		return (
			(n === "top" || n === "bottom" || i === "left" || i === "right") &&
				((t = n), (n = i), (i = t)),
			(e[0] = Mi[n] || n),
			(e[1] = Mi[i] || i),
			e.join(" ")
		);
	},
	ro = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var n = e.t,
				i = n.style,
				r = e.u,
				s = n._gsap,
				o,
				u,
				c;
			if (r === "all" || r === !0) (i.cssText = ""), (u = 1);
			else
				for (r = r.split(","), c = r.length; --c > -1; )
					(o = r[c]),
						Bt[o] && ((u = 1), (o = o === "transformOrigin" ? lt : Y)),
						oe(n, o);
			u &&
				(oe(n, Y),
				s &&
					(s.svg && n.removeAttribute("transform"),
					Ne(n, 1),
					(s.uncache = 1),
					br(i)));
		}
	},
	nn = {
		clearProps: function (t, e, n, i, r) {
			if (r.data !== "isFromStart") {
				var s = (t._pt = new ft(t._pt, e, n, 0, 0, ro));
				return (s.u = i), (s.pr = -10), (s.tween = r), t._props.push(n), 1;
			}
		},
	},
	ze = [1, 0, 0, 1, 0, 0],
	Cr = {},
	Er = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	Di = function (t) {
		var e = Et(t, Y);
		return Er(e) ? ze : e.substr(7).match(zi).map(G);
	},
	ei = function (t, e) {
		var n = t._gsap || ee(t),
			i = t.style,
			r = Di(t),
			s,
			o,
			u,
			c;
		return n.svg && t.getAttribute("transform")
			? ((u = t.transform.baseVal.consolidate().matrix),
				(r = [u.a, u.b, u.c, u.d, u.e, u.f]),
				r.join(",") === "1,0,0,1,0,0" ? ze : r)
			: (r === ze &&
					!t.offsetParent &&
					t !== pe &&
					!n.svg &&
					((u = i.display),
					(i.display = "block"),
					(s = t.parentNode),
					(!s || !t.offsetParent) &&
						((c = 1), (o = t.nextElementSibling), pe.appendChild(t)),
					(r = Di(t)),
					u ? (i.display = u) : oe(t, "display"),
					c &&
						(o
							? s.insertBefore(t, o)
							: s
								? s.appendChild(t)
								: pe.removeChild(t))),
				e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
	},
	zn = function (t, e, n, i, r, s) {
		var o = t._gsap,
			u = r || ei(t, !0),
			c = o.xOrigin || 0,
			f = o.yOrigin || 0,
			h = o.xOffset || 0,
			d = o.yOffset || 0,
			_ = u[0],
			p = u[1],
			l = u[2],
			m = u[3],
			g = u[4],
			y = u[5],
			x = e.split(" "),
			v = parseFloat(x[0]) || 0,
			w = parseFloat(x[1]) || 0,
			b,
			O,
			S,
			T;
		n
			? u !== ze &&
				(O = _ * m - p * l) &&
				((S = v * (m / O) + w * (-l / O) + (l * y - m * g) / O),
				(T = v * (-p / O) + w * (_ / O) - (_ * y - p * g) / O),
				(v = S),
				(w = T))
			: ((b = Mr(t)),
				(v = b.x + (~x[0].indexOf("%") ? (v / 100) * b.width : v)),
				(w = b.y + (~(x[1] || x[0]).indexOf("%") ? (w / 100) * b.height : w))),
			i || (i !== !1 && o.smooth)
				? ((g = v - c),
					(y = w - f),
					(o.xOffset = h + (g * _ + y * l) - g),
					(o.yOffset = d + (g * p + y * m) - y))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = v),
			(o.yOrigin = w),
			(o.smooth = !!i),
			(o.origin = e),
			(o.originIsAbsolute = !!n),
			(t.style[lt] = "0px 0px"),
			s &&
				(Xt(s, o, "xOrigin", c, v),
				Xt(s, o, "yOrigin", f, w),
				Xt(s, o, "xOffset", h, o.xOffset),
				Xt(s, o, "yOffset", d, o.yOffset)),
			t.setAttribute("data-svg-origin", v + " " + w);
	},
	Ne = function (t, e) {
		var n = t._gsap || new dr(t);
		if ("x" in n && !e && !n.uncache) return n;
		var i = t.style,
			r = n.scaleX < 0,
			s = "px",
			o = "deg",
			u = getComputedStyle(t),
			c = Et(t, lt) || "0",
			f,
			h,
			d,
			_,
			p,
			l,
			m,
			g,
			y,
			x,
			v,
			w,
			b,
			O,
			S,
			T,
			P,
			D,
			C,
			E,
			A,
			I,
			L,
			R,
			W,
			st,
			bt,
			Z,
			ot,
			At,
			$,
			dt;
		return (
			(f = h = d = l = m = g = y = x = v = 0),
			(_ = p = 1),
			(n.svg = !!(t.getCTM && Dr(t))),
			u.translate &&
				((u.translate !== "none" ||
					u.scale !== "none" ||
					u.rotate !== "none") &&
					(i[Y] =
						(u.translate !== "none"
							? "translate3d(" +
								(u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
						(u.scale !== "none"
							? "scale(" + u.scale.split(" ").join(",") + ") "
							: "") +
						(u[Y] !== "none" ? u[Y] : "")),
				(i.scale = i.rotate = i.translate = "none")),
			(O = ei(t, n.svg)),
			n.svg &&
				(n.uncache
					? ((W = t.getBBox()),
						(c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px"),
						(R = ""))
					: (R = !e && t.getAttribute("data-svg-origin")),
				zn(t, R || c, !!R || n.originIsAbsolute, n.smooth !== !1, O)),
			(w = n.xOrigin || 0),
			(b = n.yOrigin || 0),
			O !== ze &&
				((D = O[0]),
				(C = O[1]),
				(E = O[2]),
				(A = O[3]),
				(f = I = O[4]),
				(h = L = O[5]),
				O.length === 6
					? ((_ = Math.sqrt(D * D + C * C)),
						(p = Math.sqrt(A * A + E * E)),
						(l = D || C ? fe(C, D) * Jt : 0),
						(y = E || A ? fe(E, A) * Jt + l : 0),
						y && (p *= Math.abs(Math.cos(y * me))),
						n.svg && ((f -= w - (w * D + b * E)), (h -= b - (w * C + b * A))))
					: ((dt = O[6]),
						(At = O[7]),
						(bt = O[8]),
						(Z = O[9]),
						(ot = O[10]),
						($ = O[11]),
						(f = O[12]),
						(h = O[13]),
						(d = O[14]),
						(S = fe(dt, ot)),
						(m = S * Jt),
						S &&
							((T = Math.cos(-S)),
							(P = Math.sin(-S)),
							(R = I * T + bt * P),
							(W = L * T + Z * P),
							(st = dt * T + ot * P),
							(bt = I * -P + bt * T),
							(Z = L * -P + Z * T),
							(ot = dt * -P + ot * T),
							($ = At * -P + $ * T),
							(I = R),
							(L = W),
							(dt = st)),
						(S = fe(-E, ot)),
						(g = S * Jt),
						S &&
							((T = Math.cos(-S)),
							(P = Math.sin(-S)),
							(R = D * T - bt * P),
							(W = C * T - Z * P),
							(st = E * T - ot * P),
							($ = A * P + $ * T),
							(D = R),
							(C = W),
							(E = st)),
						(S = fe(C, D)),
						(l = S * Jt),
						S &&
							((T = Math.cos(S)),
							(P = Math.sin(S)),
							(R = D * T + C * P),
							(W = I * T + L * P),
							(C = C * T - D * P),
							(L = L * T - I * P),
							(D = R),
							(I = W)),
						m &&
							Math.abs(m) + Math.abs(l) > 359.9 &&
							((m = l = 0), (g = 180 - g)),
						(_ = G(Math.sqrt(D * D + C * C + E * E))),
						(p = G(Math.sqrt(L * L + dt * dt))),
						(S = fe(I, L)),
						(y = Math.abs(S) > 2e-4 ? S * Jt : 0),
						(v = $ ? 1 / ($ < 0 ? -$ : $) : 0)),
				n.svg &&
					((R = t.getAttribute("transform")),
					(n.forceCSS = t.setAttribute("transform", "") || !Er(Et(t, Y))),
					R && t.setAttribute("transform", R))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(r
					? ((_ *= -1), (y += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180))
					: ((p *= -1), (y += y <= 0 ? 180 : -180))),
			(e = e || n.uncache),
			(n.x =
				f -
				((n.xPercent =
					f &&
					((!e && n.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
					? (t.offsetWidth * n.xPercent) / 100
					: 0) +
				s),
			(n.y =
				h -
				((n.yPercent =
					h &&
					((!e && n.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
					? (t.offsetHeight * n.yPercent) / 100
					: 0) +
				s),
			(n.z = d + s),
			(n.scaleX = G(_)),
			(n.scaleY = G(p)),
			(n.rotation = G(l) + o),
			(n.rotationX = G(m) + o),
			(n.rotationY = G(g) + o),
			(n.skewX = y + o),
			(n.skewY = x + o),
			(n.transformPerspective = v + s),
			(n.zOrigin = parseFloat(c.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
				(i[lt] = rn(c)),
			(n.xOffset = n.yOffset = 0),
			(n.force3D = yt.force3D),
			(n.renderTransform = n.svg ? oo : Pr ? kr : so),
			(n.uncache = 0),
			n
		);
	},
	rn = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	wn = function (t, e, n) {
		var i = et(e);
		return G(parseFloat(e) + parseFloat(jt(t, "x", n + "px", i))) + i;
	},
	so = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			kr(t, e);
	},
	Qt = "0deg",
	Oe = "0px",
	Zt = ") ",
	kr = function (t, e) {
		var n = e || this,
			i = n.xPercent,
			r = n.yPercent,
			s = n.x,
			o = n.y,
			u = n.z,
			c = n.rotation,
			f = n.rotationY,
			h = n.rotationX,
			d = n.skewX,
			_ = n.skewY,
			p = n.scaleX,
			l = n.scaleY,
			m = n.transformPerspective,
			g = n.force3D,
			y = n.target,
			x = n.zOrigin,
			v = "",
			w = (g === "auto" && t && t !== 1) || g === !0;
		if (x && (h !== Qt || f !== Qt)) {
			var b = parseFloat(f) * me,
				O = Math.sin(b),
				S = Math.cos(b),
				T;
			(b = parseFloat(h) * me),
				(T = Math.cos(b)),
				(s = wn(y, s, O * T * -x)),
				(o = wn(y, o, -Math.sin(b) * -x)),
				(u = wn(y, u, S * T * -x + x));
		}
		m !== Oe && (v += "perspective(" + m + Zt),
			(i || r) && (v += "translate(" + i + "%, " + r + "%) "),
			(w || s !== Oe || o !== Oe || u !== Oe) &&
				(v +=
					u !== Oe || w
						? "translate3d(" + s + ", " + o + ", " + u + ") "
						: "translate(" + s + ", " + o + Zt),
			c !== Qt && (v += "rotate(" + c + Zt),
			f !== Qt && (v += "rotateY(" + f + Zt),
			h !== Qt && (v += "rotateX(" + h + Zt),
			(d !== Qt || _ !== Qt) && (v += "skew(" + d + ", " + _ + Zt),
			(p !== 1 || l !== 1) && (v += "scale(" + p + ", " + l + Zt),
			(y.style[Y] = v || "translate(0, 0)");
	},
	oo = function (t, e) {
		var n = e || this,
			i = n.xPercent,
			r = n.yPercent,
			s = n.x,
			o = n.y,
			u = n.rotation,
			c = n.skewX,
			f = n.skewY,
			h = n.scaleX,
			d = n.scaleY,
			_ = n.target,
			p = n.xOrigin,
			l = n.yOrigin,
			m = n.xOffset,
			g = n.yOffset,
			y = n.forceCSS,
			x = parseFloat(s),
			v = parseFloat(o),
			w,
			b,
			O,
			S,
			T;
		(u = parseFloat(u)),
			(c = parseFloat(c)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (c += f), (u += f)),
			u || c
				? ((u *= me),
					(c *= me),
					(w = Math.cos(u) * h),
					(b = Math.sin(u) * h),
					(O = Math.sin(u - c) * -d),
					(S = Math.cos(u - c) * d),
					c &&
						((f *= me),
						(T = Math.tan(c - f)),
						(T = Math.sqrt(1 + T * T)),
						(O *= T),
						(S *= T),
						f &&
							((T = Math.tan(f)),
							(T = Math.sqrt(1 + T * T)),
							(w *= T),
							(b *= T))),
					(w = G(w)),
					(b = G(b)),
					(O = G(O)),
					(S = G(S)))
				: ((w = h), (S = d), (b = O = 0)),
			((x && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
				((x = jt(_, "x", s, "px")), (v = jt(_, "y", o, "px"))),
			(p || l || m || g) &&
				((x = G(x + p - (p * w + l * O) + m)),
				(v = G(v + l - (p * b + l * S) + g))),
			(i || r) &&
				((T = _.getBBox()),
				(x = G(x + (i / 100) * T.width)),
				(v = G(v + (r / 100) * T.height))),
			(T =
				"matrix(" + w + "," + b + "," + O + "," + S + "," + x + "," + v + ")"),
			_.setAttribute("transform", T),
			y && (_.style[Y] = T);
	},
	ao = function (t, e, n, i, r) {
		var s = 360,
			o = Q(r),
			u = parseFloat(r) * (o && ~r.indexOf("rad") ? Jt : 1),
			c = u - i,
			f = i + c + "deg",
			h,
			d;
		return (
			o &&
				((h = r.split("_")[1]),
				h === "short" && ((c %= s), c !== c % (s / 2) && (c += c < 0 ? s : -s)),
				h === "cw" && c < 0
					? (c = ((c + s * Si) % s) - ~~(c / s) * s)
					: h === "ccw" && c > 0 && (c = ((c - s * Si) % s) - ~~(c / s) * s)),
			(t._pt = d = new ft(t._pt, e, n, i, c, Xs)),
			(d.e = f),
			(d.u = "deg"),
			t._props.push(n),
			d
		);
	},
	Ci = function (t, e) {
		for (var n in e) t[n] = e[n];
		return t;
	},
	uo = function (t, e, n) {
		var i = Ci({}, n._gsap),
			r = "perspective,force3D,transformOrigin,svgOrigin",
			s = n.style,
			o,
			u,
			c,
			f,
			h,
			d,
			_,
			p;
		i.svg
			? ((c = n.getAttribute("transform")),
				n.setAttribute("transform", ""),
				(s[Y] = e),
				(o = Ne(n, 1)),
				oe(n, Y),
				n.setAttribute("transform", c))
			: ((c = getComputedStyle(n)[Y]), (s[Y] = e), (o = Ne(n, 1)), (s[Y] = c));
		for (u in Bt)
			(c = i[u]),
				(f = o[u]),
				c !== f &&
					r.indexOf(u) < 0 &&
					((_ = et(c)),
					(p = et(f)),
					(h = _ !== p ? jt(n, u, c, p) : parseFloat(c)),
					(d = parseFloat(f)),
					(t._pt = new ft(t._pt, o, u, h, d - h, In)),
					(t._pt.u = p || 0),
					t._props.push(u));
		Ci(o, i);
	};
ct("padding,margin,Width,Radius", function (a, t) {
	var e = "Top",
		n = "Right",
		i = "Bottom",
		r = "Left",
		s = (t < 3 ? [e, n, i, r] : [e + r, e + n, i + n, i + r]).map(function (o) {
			return t < 2 ? a + o : "border" + o + a;
		});
	nn[t > 1 ? "border" + a : a] = function (o, u, c, f, h) {
		var d, _;
		if (arguments.length < 4)
			return (
				(d = s.map(function (p) {
					return zt(o, p, c);
				})),
				(_ = d.join(" ")),
				_.split(d[0]).length === 5 ? d[0] : _
			);
		(d = (f + "").split(" ")),
			(_ = {}),
			s.forEach(function (p, l) {
				return (_[p] = d[l] = d[l] || d[((l - 1) / 2) | 0]);
			}),
			o.init(u, _, h);
	};
});
var Ar = {
	name: "css",
	register: Fn,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, n, i, r) {
		var s = this._props,
			o = t.style,
			u = n.vars.startAt,
			c,
			f,
			h,
			d,
			_,
			p,
			l,
			m,
			g,
			y,
			x,
			v,
			w,
			b,
			O,
			S;
		Zn || Fn(),
			(this.styles = this.styles || Or(t)),
			(S = this.styles.props),
			(this.tween = n);
		for (l in e)
			if (l !== "autoRound" && ((f = e[l]), !(pt[l] && _r(l, e, n, i, t, r)))) {
				if (
					((_ = typeof f),
					(p = nn[l]),
					_ === "function" && ((f = f.call(n, i, t, r)), (_ = typeof f)),
					_ === "string" && ~f.indexOf("random(") && (f = Ie(f)),
					p)
				)
					p(this, t, l, f, n) && (O = 1);
				else if (l.substr(0, 2) === "--")
					(c = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
						(f += ""),
						(Wt.lastIndex = 0),
						Wt.test(c) || ((m = et(c)), (g = et(f))),
						g ? m !== g && (c = jt(t, l, c, g) + g) : m && (f += m),
						this.add(o, "setProperty", c, f, i, r, 0, 0, l),
						s.push(l),
						S.push(l, 0, o[l]);
				else if (_ !== "undefined") {
					if (
						(u && l in u
							? ((c = typeof u[l] == "function" ? u[l].call(n, i, t, r) : u[l]),
								Q(c) && ~c.indexOf("random(") && (c = Ie(c)),
								et(c + "") ||
									c === "auto" ||
									(c += yt.units[l] || et(zt(t, l)) || ""),
								(c + "").charAt(1) === "=" && (c = zt(t, l)))
							: (c = zt(t, l)),
						(d = parseFloat(c)),
						(y = _ === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
						y && (f = f.substr(2)),
						(h = parseFloat(f)),
						l in Ct &&
							(l === "autoAlpha" &&
								(d === 1 && zt(t, "visibility") === "hidden" && h && (d = 0),
								S.push("visibility", 0, o.visibility),
								Xt(
									this,
									o,
									"visibility",
									d ? "inherit" : "hidden",
									h ? "inherit" : "hidden",
									!h,
								)),
							l !== "scale" &&
								l !== "transform" &&
								((l = Ct[l]), ~l.indexOf(",") && (l = l.split(",")[0]))),
						(x = l in Bt),
						x)
					) {
						if (
							(this.styles.save(l),
							v ||
								((w = t._gsap),
								(w.renderTransform && !e.parseTransform) ||
									Ne(t, e.parseTransform),
								(b = e.smoothOrigin !== !1 && w.smooth),
								(v = this._pt =
									new ft(this._pt, o, Y, 0, 1, w.renderTransform, w, 0, -1)),
								(v.dep = 1)),
							l === "scale")
						)
							(this._pt = new ft(
								this._pt,
								w,
								"scaleY",
								w.scaleY,
								(y ? _e(w.scaleY, y + h) : h) - w.scaleY || 0,
								In,
							)),
								(this._pt.u = 0),
								s.push("scaleY", l),
								(l += "X");
						else if (l === "transformOrigin") {
							S.push(lt, 0, o[lt]),
								(f = io(f)),
								w.svg
									? zn(t, f, 0, b, 0, this)
									: ((g = parseFloat(f.split(" ")[2]) || 0),
										g !== w.zOrigin && Xt(this, w, "zOrigin", w.zOrigin, g),
										Xt(this, o, l, rn(c), rn(f)));
							continue;
						} else if (l === "svgOrigin") {
							zn(t, f, 1, b, 0, this);
							continue;
						} else if (l in Cr) {
							ao(this, w, l, d, y ? _e(d, y + f) : f);
							continue;
						} else if (l === "smoothOrigin") {
							Xt(this, w, "smooth", w.smooth, f);
							continue;
						} else if (l === "force3D") {
							w[l] = f;
							continue;
						} else if (l === "transform") {
							uo(this, f, t);
							continue;
						}
					} else l in o || (l = we(l) || l);
					if (x || ((h || h === 0) && (d || d === 0) && !Ys.test(f) && l in o))
						(m = (c + "").substr((d + "").length)),
							h || (h = 0),
							(g = et(f) || (l in yt.units ? yt.units[l] : m)),
							m !== g && (d = jt(t, l, c, g)),
							(this._pt = new ft(
								this._pt,
								x ? w : o,
								l,
								d,
								(y ? _e(d, y + h) : h) - d,
								!x && (g === "px" || l === "zIndex") && e.autoRound !== !1
									? Ws
									: In,
							)),
							(this._pt.u = g || 0),
							m !== g && g !== "%" && ((this._pt.b = c), (this._pt.r = Gs));
					else if (l in o) no.call(this, t, l, c, y ? y + f : f);
					else if (l in t) this.add(t, l, c || t[l], y ? y + f : f, i, r);
					else if (l !== "parseTransform") {
						Yn(l, f);
						continue;
					}
					x || (l in o ? S.push(l, 0, o[l]) : S.push(l, 1, c || t[l])),
						s.push(l);
				}
			}
		O && vr(this);
	},
	render: function (t, e) {
		if (e.tween._time || !Jn())
			for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
		else e.styles.revert();
	},
	get: zt,
	aliases: Ct,
	getSetter: function (t, e, n) {
		var i = Ct[e];
		return (
			i && i.indexOf(",") < 0 && (e = i),
			e in Bt && e !== lt && (t._gsap.x || zt(t, "x"))
				? n && Ti === n
					? e === "scale"
						? Ks
						: $s
					: (Ti = n || {}) && (e === "scale" ? Qs : Zs)
				: t.style && !Vn(t.style[e])
					? Hs
					: ~e.indexOf("-")
						? js
						: Kn(t, e)
		);
	},
	core: { _removeProperty: oe, _getMatrix: ei },
};
ht.utils.checkPrefix = we;
ht.core.getStyleSaver = Or;
(function (a, t, e, n) {
	var i = ct(a + "," + t + "," + e, function (r) {
		Bt[r] = 1;
	});
	ct(t, function (r) {
		(yt.units[r] = "deg"), (Cr[r] = 1);
	}),
		(Ct[i[13]] = a + "," + t),
		ct(n, function (r) {
			var s = r.split(":");
			Ct[s[1]] = i[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
ct(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		yt.units[a] = "px";
	},
);
ht.registerPlugin(Ar);
var tt = ht.registerPlugin(Ar) || ht;
tt.core.Tween;
function ni(a) {
	return typeof a == "number";
}
function Nn(a) {
	return typeof a == "string";
}
function ii(a) {
	return typeof a == "boolean";
}
function Ei(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function V(a) {
	return Math.abs(a);
}
function ri(a) {
	return Math.sign(a);
}
function ke(a, t) {
	return V(a - t);
}
function co(a, t) {
	if (a === 0 || t === 0 || V(a) <= V(t)) return 0;
	const e = ke(V(a), V(t));
	return V(e / a);
}
function Be(a) {
	return Ve(a).map(Number);
}
function Pt(a) {
	return a[Ye(a)];
}
function Ye(a) {
	return Math.max(0, a.length - 1);
}
function si(a, t) {
	return t === Ye(a);
}
function ki(a, t = 0) {
	return Array.from(Array(a), (e, n) => t + n);
}
function Ve(a) {
	return Object.keys(a);
}
function Lr(a, t) {
	return [a, t].reduce(
		(e, n) => (
			Ve(n).forEach((i) => {
				const r = e[i],
					s = n[i],
					o = Ei(r) && Ei(s);
				e[i] = o ? Lr(r, s) : s;
			}),
			e
		),
		{},
	);
}
function Ir(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function fo(a, t) {
	const e = { start: n, center: i, end: r };
	function n() {
		return 0;
	}
	function i(u) {
		return r(u) / 2;
	}
	function r(u) {
		return t - u;
	}
	function s(u, c) {
		return Nn(a) ? e[a](u) : a(t, u, c);
	}
	return { measure: s };
}
function qe() {
	let a = [];
	function t(i, r, s, o = { passive: !0 }) {
		let u;
		if ("addEventListener" in i)
			i.addEventListener(r, s, o), (u = () => i.removeEventListener(r, s, o));
		else {
			const c = i;
			c.addListener(s), (u = () => c.removeListener(s));
		}
		return a.push(u), n;
	}
	function e() {
		a = a.filter((i) => i());
	}
	const n = { add: t, clear: e };
	return n;
}
function lo(a, t, e, n) {
	const i = qe(),
		r = 1e3 / 60;
	let s = null,
		o = 0,
		u = 0;
	function c() {
		i.add(a, "visibilitychange", () => {
			a.hidden && p();
		});
	}
	function f() {
		_(), i.clear();
	}
	function h(m) {
		if (!u) return;
		s || (s = m);
		const g = m - s;
		for (s = m, o += g; o >= r; ) e(), (o -= r);
		const y = V(o / r);
		n(y), u && t.requestAnimationFrame(h);
	}
	function d() {
		u || (u = t.requestAnimationFrame(h));
	}
	function _() {
		t.cancelAnimationFrame(u), (s = null), (o = 0), (u = 0);
	}
	function p() {
		(s = null), (o = 0);
	}
	return { init: c, destroy: f, start: d, stop: _, update: e, render: n };
}
function ho(a, t) {
	const e = a === "y" ? "y" : "x",
		n = a === "y" ? "x" : "y",
		i = o(),
		r = u();
	function s(f) {
		const { width: h, height: d } = f;
		return e === "x" ? h : d;
	}
	function o() {
		return e === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function u() {
		return e === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: e, cross: n, startEdge: i, endEdge: r, measureSize: s };
}
function ae(a = 0, t = 0) {
	const e = V(a - t);
	function n(c) {
		return c < a;
	}
	function i(c) {
		return c > t;
	}
	function r(c) {
		return n(c) || i(c);
	}
	function s(c) {
		return r(c) ? (n(c) ? a : t) : c;
	}
	function o(c) {
		return e ? c - e * Math.ceil((c - t) / e) : c;
	}
	return {
		length: e,
		max: t,
		min: a,
		constrain: s,
		reachedAny: r,
		reachedMax: i,
		reachedMin: n,
		removeOffset: o,
	};
}
function Rr(a, t, e) {
	const { constrain: n } = ae(0, a),
		i = a + 1;
	let r = s(t);
	function s(d) {
		return e ? V((i + d) % i) : n(d);
	}
	function o() {
		return r;
	}
	function u(d) {
		return (r = s(d)), h;
	}
	function c(d) {
		return f().set(o() + d);
	}
	function f() {
		return Rr(a, o(), e);
	}
	const h = { get: o, set: u, add: c, clone: f };
	return h;
}
function _o(a) {
	const t = a === "rtl" ? -1 : 1;
	function e(i) {
		return i * t;
	}
	return { apply: e };
}
function po(a, t, e, n, i, r, s, o, u, c, f, h, d, _, p, l, m, g, y, x) {
	const { cross: v } = a,
		w = ["INPUT", "SELECT", "TEXTAREA"],
		b = { passive: !1 },
		O = qe(),
		S = qe(),
		T = ae(50, 225).constrain(p.measure(20)),
		P = { mouse: 300, touch: 400 },
		D = { mouse: 500, touch: 600 },
		C = l ? 43 : 25;
	let E = !1,
		A = 0,
		I = 0,
		L = !1,
		R = !1,
		W = !1,
		st = !1;
	function bt(M) {
		if (!x) return;
		function F(J) {
			(ii(x) || x(M, J)) && Te(J);
		}
		const H = e;
		O.add(H, "dragstart", (J) => J.preventDefault(), b)
			.add(H, "touchmove", () => {}, b)
			.add(H, "touchend", () => {})
			.add(H, "touchstart", F)
			.add(H, "mousedown", F)
			.add(H, "touchcancel", at)
			.add(H, "contextmenu", at)
			.add(H, "click", Lt, !0);
	}
	function Z() {
		O.clear(), S.clear();
	}
	function ot() {
		const M = st ? n : e;
		S.add(M, "touchmove", _t, b)
			.add(M, "touchend", at)
			.add(M, "mousemove", _t, b)
			.add(M, "mouseup", at);
	}
	function At(M) {
		const F = M.nodeName || "";
		return w.includes(F);
	}
	function $() {
		return (l ? D : P)[st ? "mouse" : "touch"];
	}
	function dt(M, F) {
		const H = d.add(ri(M) * -1),
			J = h.byDistance(M, !l).distance;
		return l || V(M) < T
			? J
			: g && F
				? J * 0.5
				: h.byIndex(H.get(), 0).distance;
	}
	function Te(M) {
		const F = Ir(M, i);
		(st = F),
			!(F && M.button !== 0) &&
				(At(M.target) ||
					((W = l && F && !M.buttons && E),
					(E = ke(r.get(), o.get()) >= 2),
					(L = !0),
					s.pointerDown(M),
					f.useFriction(0).useDuration(0),
					r.set(o),
					ot(),
					(A = s.readPoint(M)),
					(I = s.readPoint(M, v)),
					_.emit("pointerDown")));
	}
	function _t(M) {
		const F = s.readPoint(M),
			H = s.readPoint(M, v),
			J = ke(F, A),
			Vt = ke(H, I);
		if (!R && !st && (!M.cancelable || ((R = J > Vt), !R))) return at(M);
		const It = s.pointerMove(M);
		J > m && (W = !0),
			f.useFriction(0.3).useDuration(1),
			u.start(),
			r.add(t.apply(It)),
			M.preventDefault();
	}
	function at(M) {
		const H = h.byDistance(0, !1).index !== d.get(),
			J = s.pointerUp(M) * $(),
			Vt = dt(t.apply(J), H),
			It = co(J, Vt),
			qt = C - 10 * It,
			Rt = y + It / 50;
		(R = !1),
			(L = !1),
			S.clear(),
			f.useDuration(qt).useFriction(Rt),
			c.distance(Vt, !l),
			(st = !1),
			_.emit("pointerUp");
	}
	function Lt(M) {
		W && (M.stopPropagation(), M.preventDefault());
	}
	function Ot() {
		return L;
	}
	return { init: bt, pointerDown: Ot, destroy: Z };
}
function mo(a, t) {
	let n, i;
	function r(h) {
		return h.timeStamp;
	}
	function s(h, d) {
		const p = `client${(d || a.scroll) === "x" ? "X" : "Y"}`;
		return (Ir(h, t) ? h : h.touches[0])[p];
	}
	function o(h) {
		return (n = h), (i = h), s(h);
	}
	function u(h) {
		const d = s(h) - s(i),
			_ = r(h) - r(n) > 170;
		return (i = h), _ && (n = h), d;
	}
	function c(h) {
		if (!n || !i) return 0;
		const d = s(i) - s(n),
			_ = r(h) - r(n),
			p = r(h) - r(i) > 170,
			l = d / _;
		return _ && !p && V(l) > 0.1 ? l : 0;
	}
	return { pointerDown: o, pointerMove: u, pointerUp: c, readPoint: s };
}
function go() {
	function a(e) {
		const { offsetTop: n, offsetLeft: i, offsetWidth: r, offsetHeight: s } = e;
		return {
			top: n,
			right: i + r,
			bottom: n + s,
			left: i,
			width: r,
			height: s,
		};
	}
	return { measure: a };
}
function yo(a) {
	function t(n) {
		return a * (n / 100);
	}
	return { measure: t };
}
function xo(a, t, e, n, i, r, s) {
	let o,
		u,
		c = [],
		f = !1;
	function h(l) {
		return i.measureSize(s.measure(l));
	}
	function d(l) {
		if (!r) return;
		(u = h(a)), (c = n.map(h));
		function m(y) {
			for (const x of y) {
				const v = x.target === a,
					w = n.indexOf(x.target),
					b = v ? u : c[w],
					O = h(v ? a : n[w]);
				if (V(O - b) >= 0.5) {
					e.requestAnimationFrame(() => {
						l.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((y) => {
			f || ((ii(r) || r(l, y)) && m(y));
		})),
			[a].concat(n).forEach((y) => o.observe(y));
	}
	function _() {
		o && o.disconnect(), (f = !0);
	}
	return { init: d, destroy: _ };
}
function vo(a, t, e, n, i) {
	let r = 0,
		s = 0,
		o = n,
		u = i,
		c = a.get(),
		f = 0;
	function h() {
		const w = e.get() - a.get(),
			b = !o;
		let O = 0;
		return (
			b
				? ((r = 0), a.set(e), (O = w))
				: ((r += w / o), (r *= u), (c += r), a.add(r), (O = c - f)),
			(s = ri(O)),
			(f = c),
			v
		);
	}
	function d() {
		const w = e.get() - t.get();
		return V(w) < 0.001;
	}
	function _() {
		return o;
	}
	function p() {
		return s;
	}
	function l() {
		return r;
	}
	function m() {
		return y(n);
	}
	function g() {
		return x(i);
	}
	function y(w) {
		return (o = w), v;
	}
	function x(w) {
		return (u = w), v;
	}
	const v = {
		direction: p,
		duration: _,
		velocity: l,
		seek: h,
		settled: d,
		useBaseFriction: g,
		useBaseDuration: m,
		useFriction: x,
		useDuration: y,
	};
	return v;
}
function wo(a, t, e, n, i) {
	const r = i.measure(10),
		s = i.measure(50),
		o = ae(0.1, 0.99);
	let u = !1;
	function c() {
		return !(u || !a.reachedAny(e.get()) || !a.reachedAny(t.get()));
	}
	function f(_) {
		if (!c()) return;
		const p = a.reachedMin(t.get()) ? "min" : "max",
			l = V(a[p] - t.get()),
			m = e.get() - t.get(),
			g = o.constrain(l / s);
		e.subtract(m * g),
			!_ &&
				V(m) < r &&
				(e.set(a.constrain(e.get())), n.useDuration(25).useBaseFriction());
	}
	function h(_) {
		u = !_;
	}
	return { constrain: f, toggleActive: h };
}
function To(a, t, e, n, i) {
	const r = ae(-t + a, 0),
		s = h(),
		o = f(),
		u = d();
	function c(p, l) {
		return ke(p, l) < 1;
	}
	function f() {
		const p = s[0],
			l = Pt(s),
			m = s.lastIndexOf(p),
			g = s.indexOf(l) + 1;
		return ae(m, g);
	}
	function h() {
		return e
			.map((p, l) => {
				const { min: m, max: g } = r,
					y = r.constrain(p),
					x = !l,
					v = si(e, l);
				return x ? g : v || c(m, y) ? m : c(g, y) ? g : y;
			})
			.map((p) => parseFloat(p.toFixed(3)));
	}
	function d() {
		if (t <= a + i) return [r.max];
		if (n === "keepSnaps") return s;
		const { min: p, max: l } = o;
		return s.slice(p, l);
	}
	return { snapsContained: u, scrollContainLimit: o };
}
function So(a, t, e) {
	const n = t[0],
		i = e ? n - a : Pt(t);
	return { limit: ae(i, n) };
}
function bo(a, t, e, n) {
	const r = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: u } = ae(r, s);
	function c(d) {
		return d === 1 ? u(e.get()) : d === -1 ? o(e.get()) : !1;
	}
	function f(d) {
		if (!c(d)) return;
		const _ = a * (d * -1);
		n.forEach((p) => p.add(_));
	}
	return { loop: f };
}
function Oo(a) {
	const { max: t, length: e } = a;
	function n(r) {
		const s = r - t;
		return e ? s / -e : 0;
	}
	return { get: n };
}
function Po(a, t, e, n, i) {
	const { startEdge: r, endEdge: s } = a,
		{ groupSlides: o } = i,
		u = h().map(t.measure),
		c = d(),
		f = _();
	function h() {
		return o(n)
			.map((l) => Pt(l)[s] - l[0][r])
			.map(V);
	}
	function d() {
		return n.map((l) => e[r] - l[r]).map((l) => -V(l));
	}
	function _() {
		return o(c)
			.map((l) => l[0])
			.map((l, m) => l + u[m]);
	}
	return { snaps: c, snapsAligned: f };
}
function Mo(a, t, e, n, i, r) {
	const { groupSlides: s } = i,
		{ min: o, max: u } = n,
		c = f();
	function f() {
		const d = s(r),
			_ = !a || t === "keepSnaps";
		return e.length === 1
			? [r]
			: _
				? d
				: d.slice(o, u).map((p, l, m) => {
						const g = !l,
							y = si(m, l);
						if (g) {
							const x = Pt(m[0]) + 1;
							return ki(x);
						}
						if (y) {
							const x = Ye(r) - Pt(m)[0] + 1;
							return ki(x, Pt(m)[0]);
						}
						return p;
					});
	}
	return { slideRegistry: c };
}
function Do(a, t, e, n, i) {
	const { reachedAny: r, removeOffset: s, constrain: o } = n;
	function u(p) {
		return p.concat().sort((l, m) => V(l) - V(m))[0];
	}
	function c(p) {
		const l = a ? s(p) : o(p),
			m = t
				.map((y) => y - l)
				.map((y) => f(y, 0))
				.map((y, x) => ({ diff: y, index: x }))
				.sort((y, x) => V(y.diff) - V(x.diff)),
			{ index: g } = m[0];
		return { index: g, distance: l };
	}
	function f(p, l) {
		const m = [p, p + e, p - e];
		if (!a) return m[0];
		if (!l) return u(m);
		const g = m.filter((y) => ri(y) === l);
		return g.length ? u(g) : Pt(m) - e;
	}
	function h(p, l) {
		const m = t[p] - i.get(),
			g = f(m, l);
		return { index: p, distance: g };
	}
	function d(p, l) {
		const m = i.get() + p,
			{ index: g, distance: y } = c(m),
			x = !a && r(m);
		if (!l || x) return { index: g, distance: p };
		const v = t[g] - y,
			w = p + f(v, 0);
		return { index: g, distance: w };
	}
	return { byDistance: d, byIndex: h, shortcut: f };
}
function Co(a, t, e, n, i, r, s) {
	function o(h) {
		const d = h.distance,
			_ = h.index !== t.get();
		r.add(d),
			d && (n.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			_ && (e.set(t.get()), t.set(h.index), s.emit("select"));
	}
	function u(h, d) {
		const _ = i.byDistance(h, d);
		o(_);
	}
	function c(h, d) {
		const _ = t.clone().set(h),
			p = i.byIndex(_.get(), d);
		o(p);
	}
	return { distance: u, index: c };
}
function Eo(a, t, e, n, i, r) {
	let s = 0;
	function o() {
		r.add(document, "keydown", u, !1), t.forEach(c);
	}
	function u(h) {
		h.code === "Tab" && (s = new Date().getTime());
	}
	function c(h) {
		const d = () => {
			if (new Date().getTime() - s > 10) return;
			a.scrollLeft = 0;
			const l = t.indexOf(h),
				m = e.findIndex((g) => g.includes(l));
			ni(m) && (i.useDuration(0), n.index(m, 0));
		};
		r.add(h, "focus", d, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function Ke(a) {
	let t = a;
	function e() {
		return t;
	}
	function n(u) {
		t = s(u);
	}
	function i(u) {
		t += s(u);
	}
	function r(u) {
		t -= s(u);
	}
	function s(u) {
		return ni(u) ? u : u.get();
	}
	return { get: e, set: n, add: i, subtract: r };
}
function Fr(a, t, e) {
	const n = a.scroll === "x" ? s : o,
		i = e.style;
	let r = !1;
	function s(d) {
		return `translate3d(${d}px,0px,0px)`;
	}
	function o(d) {
		return `translate3d(0px,${d}px,0px)`;
	}
	function u(d) {
		r || (i.transform = n(t.apply(d)));
	}
	function c(d) {
		r = !d;
	}
	function f() {
		r ||
			((i.transform = ""),
			e.getAttribute("style") || e.removeAttribute("style"));
	}
	return { clear: f, to: u, toggleActive: c };
}
function ko(a, t, e, n, i, r, s, o, u, c) {
	const h = Be(r),
		d = Be(r).reverse(),
		_ = y().concat(x());
	function p(S, T) {
		return S.reduce((P, D) => P - r[D], T);
	}
	function l(S, T) {
		return S.reduce((P, D) => (p(P, T) > 0 ? P.concat([D]) : P), []);
	}
	function m(S) {
		return s.map((T, P) => ({
			start: T - i[P] + 0.5 + S,
			end: T + e - 0.5 + S,
		}));
	}
	function g(S, T, P) {
		const D = m(T);
		return S.map((C) => {
			const E = P ? 0 : -n,
				A = P ? n : 0,
				I = P ? "end" : "start",
				L = D[C][I];
			return {
				index: C,
				loopPoint: L,
				slideLocation: Ke(-1),
				translate: Fr(a, t, c[C]),
				target: () => (u.get() > L ? E : A),
			};
		});
	}
	function y() {
		const S = o[0],
			T = l(d, S);
		return g(T, n, !1);
	}
	function x() {
		const S = e - o[0] - 1,
			T = l(h, S);
		return g(T, -n, !0);
	}
	function v() {
		return _.every(({ index: S }) => {
			const T = h.filter((P) => P !== S);
			return p(T, e) <= 0.1;
		});
	}
	function w() {
		_.forEach((S) => {
			const { target: T, translate: P, slideLocation: D } = S,
				C = T();
			C !== D.get() && (P.to(C), D.set(C));
		});
	}
	function b() {
		_.forEach((S) => S.translate.clear());
	}
	return { canLoop: v, clear: b, loop: w, loopPoints: _ };
}
function Ao(a, t, e) {
	let n,
		i = !1;
	function r(u) {
		if (!e) return;
		function c(f) {
			for (const h of f)
				if (h.type === "childList") {
					u.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(n = new MutationObserver((f) => {
			i || ((ii(e) || e(u, f)) && c(f));
		})),
			n.observe(a, { childList: !0 });
	}
	function s() {
		n && n.disconnect(), (i = !0);
	}
	return { init: r, destroy: s };
}
function Lo(a, t, e, n) {
	const i = {};
	let r = null,
		s = null,
		o,
		u = !1;
	function c() {
		(o = new IntersectionObserver(
			(p) => {
				u ||
					(p.forEach((l) => {
						const m = t.indexOf(l.target);
						i[m] = l;
					}),
					(r = null),
					(s = null),
					e.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: n },
		)),
			t.forEach((p) => o.observe(p));
	}
	function f() {
		o && o.disconnect(), (u = !0);
	}
	function h(p) {
		return Ve(i).reduce((l, m) => {
			const g = parseInt(m),
				{ isIntersecting: y } = i[g];
			return ((p && y) || (!p && !y)) && l.push(g), l;
		}, []);
	}
	function d(p = !0) {
		if (p && r) return r;
		if (!p && s) return s;
		const l = h(p);
		return p && (r = l), p || (s = l), l;
	}
	return { init: c, destroy: f, get: d };
}
function Io(a, t, e, n, i, r) {
	const { measureSize: s, startEdge: o, endEdge: u } = a,
		c = e[0] && i,
		f = p(),
		h = l(),
		d = e.map(s),
		_ = m();
	function p() {
		if (!c) return 0;
		const y = e[0];
		return V(t[o] - y[o]);
	}
	function l() {
		if (!c) return 0;
		const y = r.getComputedStyle(Pt(n));
		return parseFloat(y.getPropertyValue(`margin-${u}`));
	}
	function m() {
		return e
			.map((y, x, v) => {
				const w = !x,
					b = si(v, x);
				return w ? d[x] + f : b ? d[x] + h : v[x + 1][o] - y[o];
			})
			.map(V);
	}
	return { slideSizes: d, slideSizesWithGaps: _, startGap: f, endGap: h };
}
function Ro(a, t, e, n, i, r, s, o, u, c) {
	const { startEdge: f, endEdge: h } = a,
		d = ni(n);
	function _(g, y) {
		return Be(g)
			.filter((x) => x % y === 0)
			.map((x) => g.slice(x, x + y));
	}
	function p(g) {
		return g.length
			? Be(g)
					.reduce((y, x) => {
						const v = Pt(y) || 0,
							w = v === 0,
							b = x === Ye(g),
							O = r[f] - s[v][f],
							S = r[f] - s[x][h],
							T = !i && w ? t.apply(o) : 0,
							P = !i && b ? t.apply(u) : 0;
						return (
							V(S - P - (O + T)) > e + c && y.push(x), b && y.push(g.length), y
						);
					}, [])
					.map((y, x, v) => {
						const w = Math.max(v[x - 1] || 0);
						return g.slice(w, y);
					})
			: [];
	}
	function l(g) {
		return d ? _(g, n) : p(g);
	}
	return { groupSlides: l };
}
function Fo(a, t, e, n, i, r, s) {
	const {
			align: o,
			axis: u,
			direction: c,
			startIndex: f,
			loop: h,
			duration: d,
			dragFree: _,
			dragThreshold: p,
			inViewThreshold: l,
			slidesToScroll: m,
			skipSnaps: g,
			containScroll: y,
			watchResize: x,
			watchSlides: v,
			watchDrag: w,
		} = r,
		b = 2,
		O = go(),
		S = O.measure(t),
		T = e.map(O.measure),
		P = _o(c),
		D = ho(u, c),
		C = D.measureSize(S),
		E = yo(C),
		A = fo(o, C),
		I = !h && !!y,
		L = h || !!y,
		{
			slideSizes: R,
			slideSizesWithGaps: W,
			startGap: st,
			endGap: bt,
		} = Io(D, S, T, e, L, i),
		Z = Ro(D, P, C, m, h, S, T, st, bt, b),
		{ snaps: ot, snapsAligned: At } = Po(D, A, S, T, Z),
		$ = -Pt(ot) + Pt(W),
		{ snapsContained: dt, scrollContainLimit: Te } = To(C, $, At, y, b),
		_t = I ? dt : At,
		{ limit: at } = So($, _t, h),
		Lt = Rr(Ye(_t), f, h),
		Ot = Lt.clone(),
		q = Be(e),
		M = ({
			dragHandler: Kt,
			scrollBody: ln,
			scrollBounds: hn,
			options: { loop: Xe },
		}) => {
			Xe || hn.constrain(Kt.pointerDown()), ln.seek();
		},
		F = (
			{
				scrollBody: Kt,
				translate: ln,
				location: hn,
				offsetLocation: Xe,
				scrollLooper: Br,
				slideLooper: Vr,
				dragHandler: qr,
				animation: Ur,
				eventHandler: li,
				options: { loop: Yr },
			},
			Xr,
		) => {
			const hi = Kt.velocity(),
				di = Kt.settled();
			di && !qr.pointerDown() && (Ur.stop(), li.emit("settle")),
				di || li.emit("scroll"),
				Xe.set(hn.get() - hi + hi * Xr),
				Yr && (Br.loop(Kt.direction()), Vr.loop()),
				ln.to(Xe.get());
		},
		H = lo(
			n,
			i,
			() => M(fn),
			(Kt) => F(fn, Kt),
		),
		J = 0.68,
		Vt = _t[Lt.get()],
		It = Ke(Vt),
		qt = Ke(Vt),
		Rt = Ke(Vt),
		Se = vo(It, qt, Rt, d, J),
		un = Do(h, _t, $, at, Rt),
		cn = Co(H, Lt, Ot, Se, un, Rt, s),
		ui = Oo(at),
		ci = qe(),
		zr = Lo(t, e, s, l),
		{ slideRegistry: fi } = Mo(I, y, _t, Te, Z, q),
		Nr = Eo(a, e, fi, cn, Se, ci),
		fn = {
			ownerDocument: n,
			ownerWindow: i,
			eventHandler: s,
			containerRect: S,
			slideRects: T,
			animation: H,
			axis: D,
			direction: P,
			dragHandler: po(
				D,
				P,
				a,
				n,
				i,
				Rt,
				mo(D, i),
				It,
				H,
				cn,
				Se,
				un,
				Lt,
				s,
				E,
				_,
				p,
				g,
				J,
				w,
			),
			eventStore: ci,
			percentOfView: E,
			index: Lt,
			indexPrevious: Ot,
			limit: at,
			location: It,
			offsetLocation: qt,
			options: r,
			resizeHandler: xo(t, s, i, e, D, x, O),
			scrollBody: Se,
			scrollBounds: wo(at, qt, Rt, Se, E),
			scrollLooper: bo($, at, qt, [It, qt, Rt]),
			scrollProgress: ui,
			scrollSnapList: _t.map(ui.get),
			scrollSnaps: _t,
			scrollTarget: un,
			scrollTo: cn,
			slideLooper: ko(D, P, C, $, R, W, ot, _t, qt, e),
			slideFocus: Nr,
			slidesHandler: Ao(t, s, v),
			slidesInView: zr,
			slideIndexes: q,
			slideRegistry: fi,
			slidesToScroll: Z,
			target: Rt,
			translate: Fr(D, P, t),
		};
	return fn;
}
function zo() {
	const a = {};
	let t;
	function e(u) {
		t = u;
	}
	function n(u) {
		return a[u] || [];
	}
	function i(u) {
		return n(u).forEach((c) => c(t, u)), o;
	}
	function r(u, c) {
		return (a[u] = n(u).concat([c])), o;
	}
	function s(u, c) {
		return (a[u] = n(u).filter((f) => f !== c)), o;
	}
	const o = { init: e, emit: i, off: s, on: r };
	return o;
}
const No = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
};
function Bo(a) {
	function t(r, s) {
		return Lr(r, s || {});
	}
	function e(r) {
		const s = r.breakpoints || {},
			o = Ve(s)
				.filter((u) => a.matchMedia(u).matches)
				.map((u) => s[u])
				.reduce((u, c) => t(u, c), {});
		return t(r, o);
	}
	function n(r) {
		return r
			.map((s) => Ve(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: n };
}
function Vo(a) {
	let t = [];
	function e(r, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(r, a)),
			s.reduce((o, u) => Object.assign(o, { [u.name]: u }), {})
		);
	}
	function n() {
		t = t.filter((r) => r.destroy());
	}
	return { init: e, destroy: n };
}
function oi(a, t, e) {
	const n = a.ownerDocument,
		i = n.defaultView,
		r = Bo(i),
		s = Vo(r),
		o = qe(),
		u = zo(),
		{ mergeOptions: c, optionsAtMedia: f, optionsMediaQueries: h } = r,
		{ on: d, off: _, emit: p } = u,
		l = D;
	let m = !1,
		g,
		y = c(No, oi.globalOptions),
		x = c(y),
		v = [],
		w,
		b,
		O;
	function S() {
		const { container: q, slides: M } = x;
		b = (Nn(q) ? a.querySelector(q) : q) || a.children[0];
		const H = Nn(M) ? b.querySelectorAll(M) : M;
		O = [].slice.call(H || b.children);
	}
	function T(q) {
		const M = Fo(a, b, O, n, i, q, u);
		if (q.loop && !M.slideLooper.canLoop()) {
			const F = Object.assign({}, q, { loop: !1 });
			return T(F);
		}
		return M;
	}
	function P(q, M) {
		m ||
			((y = c(y, q)),
			(x = f(y)),
			(v = M || v),
			S(),
			(g = T(x)),
			h([y, ...v.map(({ options: F }) => F)]).forEach((F) =>
				o.add(F, "change", D),
			),
			x.active &&
				(g.translate.to(g.location.get()),
				g.animation.init(),
				g.slidesInView.init(),
				g.slideFocus.init(),
				g.eventHandler.init(Ot),
				g.resizeHandler.init(Ot),
				g.slidesHandler.init(Ot),
				g.options.loop && g.slideLooper.loop(),
				b.offsetParent && O.length && g.dragHandler.init(Ot),
				(w = s.init(Ot, v))));
	}
	function D(q, M) {
		const F = Z();
		C(), P(c({ startIndex: F }, q), M), u.emit("reInit");
	}
	function C() {
		g.dragHandler.destroy(),
			g.eventStore.clear(),
			g.translate.clear(),
			g.slideLooper.clear(),
			g.resizeHandler.destroy(),
			g.slidesHandler.destroy(),
			g.slidesInView.destroy(),
			g.animation.destroy(),
			s.destroy(),
			o.clear();
	}
	function E() {
		m || ((m = !0), o.clear(), C(), u.emit("destroy"));
	}
	function A(q, M, F) {
		!x.active ||
			m ||
			(g.scrollBody.useBaseFriction().useDuration(M === !0 ? 0 : x.duration),
			g.scrollTo.index(q, F || 0));
	}
	function I(q) {
		const M = g.index.add(1).get();
		A(M, q, -1);
	}
	function L(q) {
		const M = g.index.add(-1).get();
		A(M, q, 1);
	}
	function R() {
		return g.index.add(1).get() !== Z();
	}
	function W() {
		return g.index.add(-1).get() !== Z();
	}
	function st() {
		return g.scrollSnapList;
	}
	function bt() {
		return g.scrollProgress.get(g.location.get());
	}
	function Z() {
		return g.index.get();
	}
	function ot() {
		return g.indexPrevious.get();
	}
	function At() {
		return g.slidesInView.get();
	}
	function $() {
		return g.slidesInView.get(!1);
	}
	function dt() {
		return w;
	}
	function Te() {
		return g;
	}
	function _t() {
		return a;
	}
	function at() {
		return b;
	}
	function Lt() {
		return O;
	}
	const Ot = {
		canScrollNext: R,
		canScrollPrev: W,
		containerNode: at,
		internalEngine: Te,
		destroy: E,
		off: _,
		on: d,
		emit: p,
		plugins: dt,
		previousScrollSnap: ot,
		reInit: l,
		rootNode: _t,
		scrollNext: I,
		scrollPrev: L,
		scrollProgress: bt,
		scrollSnapList: st,
		scrollTo: A,
		selectedScrollSnap: Z,
		slideNodes: Lt,
		slidesInView: At,
		slidesNotInView: $,
	};
	return P(t, e), setTimeout(() => u.emit("init"), 0), Ot;
}
oi.globalOptions = void 0;
const qo = {
	active: !0,
	breakpoints: {},
	delay: 4e3,
	jump: !1,
	playOnInit: !0,
	stopOnFocusIn: !0,
	stopOnInteraction: !0,
	stopOnMouseEnter: !1,
	stopOnLastSnap: !1,
	rootNode: null,
};
function ai(a = {}) {
	let t,
		e,
		n,
		i = !1,
		r = !0,
		s = !1,
		o = 0,
		u = 0;
	function c(v, w) {
		e = v;
		const { mergeOptions: b, optionsAtMedia: O } = w,
			S = b(qo, ai.globalOptions),
			T = b(S, a);
		if (((t = O(T)), e.scrollSnapList().length <= 1)) return;
		(s = t.jump), (n = !1);
		const { eventStore: P, ownerDocument: D } = e.internalEngine(),
			C = e.rootNode(),
			E = (t.rootNode && t.rootNode(C)) || C,
			A = e.containerNode();
		e.on("pointerDown", d),
			t.stopOnInteraction || e.on("pointerUp", h),
			t.stopOnMouseEnter &&
				(P.add(E, "mouseenter", () => {
					(r = !1), d();
				}),
				t.stopOnInteraction ||
					P.add(E, "mouseleave", () => {
						(r = !0), h();
					})),
			t.stopOnFocusIn &&
				(P.add(A, "focusin", d),
				t.stopOnInteraction || P.add(A, "focusout", h)),
			P.add(D, "visibilitychange", _),
			t.playOnInit && e.on("init", h).on("reInit", h);
	}
	function f() {
		e.off("init", h).off("reInit", h).off("pointerDown", d).off("pointerUp", h),
			d(),
			cancelAnimationFrame(o),
			(o = 0),
			(n = !0),
			(i = !1);
	}
	function h() {
		if (n || !r) return;
		i || e.emit("autoplay:play");
		const { ownerWindow: v } = e.internalEngine();
		v.clearInterval(u), (u = v.setInterval(y, t.delay)), (i = !0);
	}
	function d() {
		if (n) return;
		i && e.emit("autoplay:stop");
		const { ownerWindow: v } = e.internalEngine();
		v.clearInterval(u), (u = 0), (i = !1);
	}
	function _() {
		const { ownerDocument: v } = e.internalEngine();
		if (v.visibilityState === "hidden") return (r = i), d();
		r && h();
	}
	function p(v) {
		typeof v < "u" && (s = v), (r = !0), h();
	}
	function l() {
		i && d();
	}
	function m() {
		i && p();
	}
	function g() {
		return i;
	}
	function y() {
		o = requestAnimationFrame(() => {
			const { index: v } = e.internalEngine(),
				w = v.clone().add(1).get(),
				b = e.scrollSnapList().length - 1;
			t.stopOnLastSnap && w === b && d(),
				e.canScrollNext() ? e.scrollNext(s) : e.scrollTo(0, s);
		});
	}
	return {
		name: "autoplay",
		options: a,
		init: c,
		destroy: f,
		play: p,
		stop: l,
		reset: m,
		isPlaying: g,
	};
}
ai.globalOptions = void 0;
const We = "power4.inOut",
	Tn = (a, t = !0, e = 0) => (t ? e : a);
function Uo(a, t) {
	(a = tt.utils.toArray(a)), (t = t || {});
	let e = tt.timeline({
			repeat: t.repeat,
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => e.totalTime(e.rawTime() + e.duration() * 100),
		}),
		n = a.length,
		i = a[0].offsetLeft,
		r = [],
		s = [],
		o = [],
		u = 0,
		c = (t.speed || 1) * 100,
		f = t.snap === !1 ? (y) => y : tt.utils.snap(t.snap || 1),
		h,
		d,
		_,
		p,
		l,
		m;
	for (
		tt.set(a, {
			xPercent: (y, x) => {
				let v = (s[y] = parseFloat(tt.getProperty(x, "width", "px")));
				return (
					(o[y] = f(
						(parseFloat(tt.getProperty(x, "x", "px")) / v) * 100 +
							tt.getProperty(x, "xPercent"),
					)),
					o[y]
				);
			},
		}),
			tt.set(a, { x: 0 }),
			h =
				a[n - 1].offsetLeft +
				(o[n - 1] / 100) * s[n - 1] -
				i +
				a[n - 1].offsetWidth * tt.getProperty(a[n - 1], "scaleX") +
				(parseFloat(t.paddingRight) || 0),
			m = 0;
		m < n;
		m++
	)
		(l = a[m]),
			(d = (o[m] / 100) * s[m]),
			(_ = l.offsetLeft + d - i),
			(p = _ + s[m] * tt.getProperty(l, "scaleX")),
			e.to(l, { xPercent: f(((d - p) / s[m]) * 100), duration: p / c }, 0),
			e
				.fromTo(
					l,
					{ xPercent: f(((d - p + h) / s[m]) * 100) },
					{
						xPercent: o[m],
						duration: (d - p + h - d) / c,
						immediateRender: !1,
					},
					p / c,
				)
				.add("label" + m, _ / c),
			(r[m] = _ / c);
	function g(y, x) {
		(x = x || {}), Math.abs(y - u) > n / 2 && (y += y > u ? -n : n);
		let v = tt.utils.wrap(0, n, y),
			w = r[v];
		return (
			w > e.time() != y > u &&
				((x.modifiers = { time: tt.utils.wrap(0, e.duration()) }),
				(w += e.duration() * (y > u ? 1 : -1))),
			(u = v),
			(x.overwrite = !0),
			e.tweenTo(w, x)
		);
	}
	return (
		(e.next = (y) => g(u + 1, y)),
		(e.previous = (y) => g(u - 1, y)),
		(e.current = () => u),
		(e.toIndex = (y, x) => g(y, x)),
		(e.times = r),
		e.progress(1, !0).progress(0, !0),
		t.reversed && (e.vars.onReverseComplete(), e.reverse()),
		e
	);
}
const Yo = 0.72331,
	Xo = 5e3;
class Go {
	constructor() {
		ce(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const n = this.DOM.slides[e],
				i = this.DOM.slides[this.activeIndex];
			tt.timeline({
				onStart: () => {
					t.stop();
				},
				onComplete: () => {
					t.play();
				},
			})
				.add(this.outSlide(n))
				.add(this.inSlide(i), "<");
		});
		ce(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				n = tt.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				n
					.to(t, { height: 66, duration: 0.8, ease: We })
					.to(e, { opacity: 0, height: 0, duration: 0.8, ease: We }, "-=0.8"),
				n
			);
		});
		ce(this, "inSlide", (t, e = !1) => {
			const n = t.querySelector(".js-features-carousel-item-text"),
				i = tt.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				i
					.to(t, { height: t.offsetWidth * Yo, duration: Tn(0.8, e), ease: We })
					.to(
						n,
						{ opacity: 1, height: "auto", duration: Tn(0.8, e), ease: We },
						Tn("-=0.67", e),
					),
				i
			);
		});
		this.init();
	}
	setup() {
		(this.instance = oi(this.DOM.fakeCarousel, { loop: !0 }, [
			ai({ delay: Xo }),
		])),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-features-carousel");
		e &&
			((this.DOM = {}),
			(this.DOM.wrap = e),
			(this.DOM.fakeCarousel = this.DOM.wrap.querySelector(
				".js-time-carousel-viewport",
			)),
			(this.DOM.slides = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item",
			)),
			(this.instance = void 0),
			(this.activeIndex = 0),
			this.setup());
	}
}
function Wo(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function Ho(a, t = 0) {
	const e = a.getBoundingClientRect(),
		n = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	Wo(n);
}
class jo {
	constructor() {
		ce(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const n = t.currentTarget.getAttribute("href"),
				i = document.querySelector(`${n}`);
			i ? Ho(i, 150) : console.warn("Target non esiste per l'id: ", n);
		});
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.hashElements.length; t++)
			this.DOM.hashElements[t].addEventListener("click", this.scrollLinkTo);
	}
	reinit(t) {
		this.init(t);
	}
	destroy() {
		if (this.DOM)
			for (let t = 0; t < this.DOM.hashElements.length; t++)
				this.DOM.hashElements[t].removeEventListener(
					"click",
					this.scrollLinkTo,
				);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-hash-scroll");
		e.length > 0 &&
			((this.DOM = {}), (this.DOM.hashElements = e), this.setup());
	}
}
class $o {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = Uo(this.DOM.items, {
			paused: !1,
			repeat: this.config.repeat,
			speed: this.config.speed,
			reversed: this.config.reversed,
			paddingRight: 40,
		});
	}
	init(t) {
		(this.DOM = {}),
			(this.DOM.container = t.container),
			(this.DOM.items =
				this.DOM.container.querySelectorAll(".js-marquee-item")),
			(this.config = {
				repeat: t.config.repeat || -1,
				speed: t.config.speed || 1.25,
				reversed: t.config.reversed || !1,
			}),
			this.start();
	}
}
class Ko {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const e = this.DOM.rows[t];
			e &&
				this.instances.push(
					new $o({
						container: e,
						config: {
							repeat: -1,
							speed: 1.25,
							reversed: e.dataset.reversed !== void 0,
						},
					}),
				);
		}
	}
	destroy() {
		if (this.DOM) {
			for (let t = 0; t < this.instances.length; t++)
				this.instances[t].destroy();
			(this.instances = []), (this.DOM = void 0);
		}
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-marquee-row");
		e.length &&
			((this.DOM = {}),
			(this.DOM.rows = e),
			(this.instances = []),
			this.setup());
	}
}
class Qo {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== le.window.width &&
			((this.winW = le.window.width), this.setup());
	}
	setup() {
		const t = le.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = le.window.width), this.setup();
	}
}
function Ai(a, t, e) {
	var n;
	return function () {
		var i = this,
			r = arguments,
			s = function () {
				(n = null), e || a.apply(i, r);
			},
			o = e && !n;
		clearTimeout(n), (n = setTimeout(s, t)), o && a.apply(i, r);
	};
}
function Li() {
	let a = !1;
	return (
		window.PointerEvent && "maxTouchPoints" in navigator
			? navigator.maxTouchPoints > 0 && (a = !0)
			: ((window.matchMedia &&
					window.matchMedia("(any-pointer:coarse)").matches) ||
					window.TouchEvent ||
					"ontouchstart" in window) &&
				(a = !0),
		a
	);
}
class Zo {
	constructor() {
		ce(this, "onResize", () => {
			le.resize(),
				document.body.classList.toggle("is-touch", Li()),
				be.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", Li());
		}),
			window.addEventListener("load", () => {
				le.init(),
					be.add("viewportFixer", new Qo()),
					be.add("hashScroll", new jo()),
					be.add("featuresCarousel", new Go()),
					be.add("marqueeManager", new Ko());
			}),
			window.addEventListener("resize", Ai(this.onResize, 150)),
			window.addEventListener("orientationchange", Ai(this.onResize, 150));
	}
}
const Jo = new Zo();
Jo.start();
