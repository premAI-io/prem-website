var Sc = Object.defineProperty;
var Mc = (a, t, i) =>
	t in a
		? Sc(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
		: (a[t] = i);
var we = (a, t, i) => (Mc(a, typeof t != "symbol" ? t + "" : t, i), i);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) e(n);
	new MutationObserver((n) => {
		for (const r of n)
			if (r.type === "childList")
				for (const s of r.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && e(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function i(n) {
		const r = {};
		return (
			n.integrity && (r.integrity = n.integrity),
			n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
			n.crossOrigin === "use-credentials"
				? (r.credentials = "include")
				: n.crossOrigin === "anonymous"
					? (r.credentials = "omit")
					: (r.credentials = "same-origin"),
			r
		);
	}
	function e(n) {
		if (n.ep) return;
		n.ep = !0;
		const r = i(n);
		fetch(n.href, r);
	}
})();
function Fi(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function zl(a, t) {
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
 */ var ni = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	rr = { duration: 0.5, overwrite: !1, delay: 0 },
	aa,
	Me,
	zt,
	ci = 1e8,
	It = 1 / ci,
	Co = Math.PI * 2,
	Dc = Co / 4,
	Oc = 0,
	Bl = Math.sqrt,
	Pc = Math.cos,
	Cc = Math.sin,
	fe = function (t) {
		return typeof t == "string";
	},
	Gt = function (t) {
		return typeof t == "function";
	},
	Wi = function (t) {
		return typeof t == "number";
	},
	la = function (t) {
		return typeof t > "u";
	},
	Li = function (t) {
		return typeof t == "object";
	},
	Xe = function (t) {
		return t !== !1;
	},
	ua = function () {
		return typeof window < "u";
	},
	cs = function (t) {
		return Gt(t) || fe(t);
	},
	Yl =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	De = Array.isArray,
	Eo = /(?:-?\.?\d|\.)+/gi,
	Xl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	qn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	ro = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	$l = /[+-]=-?[.\d]+/,
	Hl = /[^,'"\[\]\s]+/gi,
	Ec = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Ht,
	Di,
	ko,
	ca,
	ri = {},
	zs = {},
	Vl,
	Wl = function (t) {
		return (zs = kn(t, ri)) && We;
	},
	fa = function (t, i) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			i,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	qr = function (t, i) {
		return !i && console.warn(t);
	},
	ql = function (t, i) {
		return (t && (ri[t] = i) && zs && (zs[t] = i)) || ri;
	},
	Ur = function () {
		return 0;
	},
	kc = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ms = { suppressEvents: !0, kill: !1 },
	Ac = { suppressEvents: !0 },
	da = {},
	rn = [],
	Ao = {},
	Ul,
	Ze = {},
	so = {},
	Xa = 30,
	Ds = [],
	ha = "",
	pa = function (t) {
		var i = t[0],
			e,
			n;
		if ((Li(i) || Gt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
			for (n = Ds.length; n-- && !Ds[n].targetTest(i); );
			e = Ds[n];
		}
		for (n = t.length; n--; )
			(t[n] && (t[n]._gsap || (t[n]._gsap = new mu(t[n], e)))) ||
				t.splice(n, 1);
		return t;
	},
	bn = function (t) {
		return t._gsap || pa(fi(t))[0]._gsap;
	},
	Gl = function (t, i, e) {
		return (e = t[i]) && Gt(e)
			? t[i]()
			: (la(e) && t.getAttribute && t.getAttribute(i)) || e;
	},
	$e = function (t, i) {
		return (t = t.split(",")).forEach(i) || t;
	},
	Kt = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	ce = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	jn = function (t, i) {
		var e = i.charAt(0),
			n = parseFloat(i.substr(2));
		return (
			(t = parseFloat(t)),
			e === "+" ? t + n : e === "-" ? t - n : e === "*" ? t * n : t / n
		);
	},
	Lc = function (t, i) {
		for (var e = i.length, n = 0; t.indexOf(i[n]) < 0 && ++n < e; );
		return n < e;
	},
	Bs = function () {
		var t = rn.length,
			i = rn.slice(0),
			e,
			n;
		for (Ao = {}, rn.length = 0, e = 0; e < t; e++)
			(n = i[e]),
				n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
	},
	jl = function (t, i, e, n) {
		rn.length && !Me && Bs(),
			t.render(i, e, n || (Me && i < 0 && (t._initted || t._startAt))),
			rn.length && !Me && Bs();
	},
	Kl = function (t) {
		var i = parseFloat(t);
		return (i || i === 0) && (t + "").match(Hl).length < 2
			? i
			: fe(t)
				? t.trim()
				: t;
	},
	Ql = function (t) {
		return t;
	},
	hi = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	Rc = function (t) {
		return function (i, e) {
			for (var n in e)
				n in i || (n === "duration" && t) || n === "ease" || (i[n] = e[n]);
		};
	},
	kn = function (t, i) {
		for (var e in i) t[e] = i[e];
		return t;
	},
	$a = function a(t, i) {
		for (var e in i)
			e !== "__proto__" &&
				e !== "constructor" &&
				e !== "prototype" &&
				(t[e] = Li(i[e]) ? a(t[e] || (t[e] = {}), i[e]) : i[e]);
		return t;
	},
	Ys = function (t, i) {
		var e = {},
			n;
		for (n in t) n in i || (e[n] = t[n]);
		return e;
	},
	Er = function (t) {
		var i = t.parent || Ht,
			e = t.keyframes ? Rc(De(t.keyframes)) : hi;
		if (Xe(t.inherit))
			for (; i; ) e(t, i.vars.defaults), (i = i.parent || i._dp);
		return t;
	},
	Ic = function (t, i) {
		for (var e = t.length, n = e === i.length; n && e-- && t[e] === i[e]; );
		return e < 0;
	},
	Zl = function (t, i, e, n, r) {
		e === void 0 && (e = "_first"), n === void 0 && (n = "_last");
		var s = t[n],
			o;
		if (r) for (o = i[r]; s && s[r] > o; ) s = s._prev;
		return (
			s ? ((i._next = s._next), (s._next = i)) : ((i._next = t[e]), (t[e] = i)),
			i._next ? (i._next._prev = i) : (t[n] = i),
			(i._prev = s),
			(i.parent = i._dp = t),
			i
		);
	},
	Zs = function (t, i, e, n) {
		e === void 0 && (e = "_first"), n === void 0 && (n = "_last");
		var r = i._prev,
			s = i._next;
		r ? (r._next = s) : t[e] === i && (t[e] = s),
			s ? (s._prev = r) : t[n] === i && (t[n] = r),
			(i._next = i._prev = i.parent = null);
	},
	an = function (t, i) {
		t.parent &&
			(!i || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Tn = function (t, i) {
		if (t && (!i || i._end > t._dur || i._start < 0))
			for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
		return t;
	},
	Fc = function (t) {
		for (var i = t.parent; i && i.parent; )
			(i._dirty = 1), i.totalDuration(), (i = i.parent);
		return t;
	},
	Lo = function (t, i, e, n) {
		return (
			t._startAt &&
			(Me
				? t._startAt.revert(Ms)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(i, !0, n))
		);
	},
	Nc = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	Ha = function (t) {
		return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	sr = function (t, i) {
		var e = Math.floor((t /= i));
		return t && e === t ? e - 1 : e;
	},
	Xs = function (t, i) {
		return (
			(t - i._start) * i._ts +
			(i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
		);
	},
	Js = function (t) {
		return (t._end = ce(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || It) || 0),
		));
	},
	to = function (t, i) {
		var e = t._dp;
		return (
			e &&
				e.smoothChildTiming &&
				t._ts &&
				((t._start = ce(
					e._time -
						(t._ts > 0
							? i / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts),
				)),
				Js(t),
				e._dirty || Tn(e, t)),
			t
		);
	},
	Jl = function (t, i) {
		var e;
		if (
			((i._time ||
				(!i._dur && i._initted) ||
				(i._start < t._time && (i._dur || !i.add))) &&
				((e = Xs(t.rawTime(), i)),
				(!i._dur || os(0, i.totalDuration(), e) - i._tTime > It) &&
					i.render(e, !0)),
			Tn(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (e = t; e._dp; )
					e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
			t._zTime = -It;
		}
	},
	Pi = function (t, i, e, n) {
		return (
			i.parent && an(i),
			(i._start = ce(
				(Wi(e) ? e : e || t !== Ht ? ai(t, e, i) : t._time) + i._delay,
			)),
			(i._end = ce(
				i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0),
			)),
			Zl(t, i, "_first", "_last", t._sort ? "_start" : 0),
			Ro(i) || (t._recent = i),
			n || Jl(t, i),
			t._ts < 0 && to(t, t._tTime),
			t
		);
	},
	tu = function (t, i) {
		return (
			(ri.ScrollTrigger || fa("scrollTrigger", i)) &&
			ri.ScrollTrigger.create(i, t)
		);
	},
	eu = function (t, i, e, n, r) {
		if ((_a(t, i, r), !t._initted)) return 1;
		if (
			!e &&
			t._pt &&
			!Me &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Ul !== Je.frame
		)
			return rn.push(t), (t._lazy = [r, n]), 1;
	},
	zc = function a(t) {
		var i = t.parent;
		return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || a(i));
	},
	Ro = function (t) {
		var i = t.data;
		return i === "isFromStart" || i === "isStart";
	},
	Bc = function (t, i, e, n) {
		var r = t.ratio,
			s =
				i < 0 ||
				(!i &&
					((!t._start && zc(t) && !(!t._initted && Ro(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !Ro(t))))
					? 0
					: 1,
			o = t._rDelay,
			u = 0,
			c,
			f,
			d;
		if (
			(o &&
				t._repeat &&
				((u = os(0, t._tDur, i)),
				(f = sr(u, o)),
				t._yoyo && f & 1 && (s = 1 - s),
				f !== sr(t._tTime, o) &&
					((r = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== r || Me || n || t._zTime === It || (!i && t._zTime))
		) {
			if (!t._initted && eu(t, i, n, e, u)) return;
			for (
				d = t._zTime,
					t._zTime = i || (e ? It : 0),
					e || (e = i && !d),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = u,
					c = t._pt;
				c;

			)
				c.r(s, c.d), (c = c._next);
			i < 0 && Lo(t, i, e, !0),
				t._onUpdate && !e && ii(t, "onUpdate"),
				u && t._repeat && !e && t.parent && ii(t, "onRepeat"),
				(i >= t._tDur || i < 0) &&
					t.ratio === s &&
					(s && an(t, 1),
					!e &&
						!Me &&
						(ii(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = i);
	},
	Yc = function (t, i, e) {
		var n;
		if (e > i)
			for (n = t._first; n && n._start <= e; ) {
				if (n.data === "isPause" && n._start > i) return n;
				n = n._next;
			}
		else
			for (n = t._last; n && n._start >= e; ) {
				if (n.data === "isPause" && n._start < i) return n;
				n = n._prev;
			}
	},
	or = function (t, i, e, n) {
		var r = t._repeat,
			s = ce(i) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !n && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = r ? (r < 0 ? 1e10 : ce(s * (r + 1) + t._rDelay * r)) : s),
			o > 0 && !n && to(t, (t._tTime = t._tDur * o)),
			t.parent && Js(t),
			e || Tn(t.parent, t),
			t
		);
	},
	Va = function (t) {
		return t instanceof Le ? Tn(t) : or(t, t._dur);
	},
	Xc = { _start: 0, endTime: Ur, totalDuration: Ur },
	ai = function a(t, i, e) {
		var n = t.labels,
			r = t._recent || Xc,
			s = t.duration() >= ci ? r.endTime(!1) : t._dur,
			o,
			u,
			c;
		return fe(i) && (isNaN(i) || i in n)
			? ((u = i.charAt(0)),
				(c = i.substr(-1) === "%"),
				(o = i.indexOf("=")),
				u === "<" || u === ">"
					? (o >= 0 && (i = i.replace(/=/, "")),
						(u === "<" ? r._start : r.endTime(r._repeat >= 0)) +
							(parseFloat(i.substr(1)) || 0) *
								(c ? (o < 0 ? r : e).totalDuration() / 100 : 1))
					: o < 0
						? (i in n || (n[i] = s), n[i])
						: ((u = parseFloat(i.charAt(o - 1) + i.substr(o + 1))),
							c && e && (u = (u / 100) * (De(e) ? e[0] : e).totalDuration()),
							o > 1 ? a(t, i.substr(0, o - 1), e) + u : s + u))
			: i == null
				? s
				: +i;
	},
	kr = function (t, i, e) {
		var n = Wi(i[1]),
			r = (n ? 2 : 1) + (t < 2 ? 0 : 1),
			s = i[r],
			o,
			u;
		if ((n && (s.duration = i[1]), (s.parent = e), t)) {
			for (o = s, u = e; u && !("immediateRender" in o); )
				(o = u.vars.defaults || {}), (u = Xe(u.vars.inherit) && u.parent);
			(s.immediateRender = Xe(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = i[r - 1]);
		}
		return new ee(i[0], s, i[r + 1]);
	},
	cn = function (t, i) {
		return t || t === 0 ? i(t) : i;
	},
	os = function (t, i, e) {
		return e < t ? t : e > i ? i : e;
	},
	Se = function (t, i) {
		return !fe(t) || !(i = Ec.exec(t)) ? "" : i[1];
	},
	$c = function (t, i, e) {
		return cn(e, function (n) {
			return os(t, i, n);
		});
	},
	Io = [].slice,
	iu = function (t, i) {
		return (
			t &&
			Li(t) &&
			"length" in t &&
			((!i && !t.length) || (t.length - 1 in t && Li(t[0]))) &&
			!t.nodeType &&
			t !== Di
		);
	},
	Hc = function (t, i, e) {
		return (
			e === void 0 && (e = []),
			t.forEach(function (n) {
				var r;
				return (fe(n) && !i) || iu(n, 1)
					? (r = e).push.apply(r, fi(n))
					: e.push(n);
			}) || e
		);
	},
	fi = function (t, i, e) {
		return zt && !i && zt.selector
			? zt.selector(t)
			: fe(t) && !e && (ko || !ar())
				? Io.call((i || ca).querySelectorAll(t), 0)
				: De(t)
					? Hc(t, e)
					: iu(t)
						? Io.call(t, 0)
						: t
							? [t]
							: [];
	},
	Fo = function (t) {
		return (
			(t = fi(t)[0] || qr("Invalid scope") || {}),
			function (i) {
				var e = t.current || t.nativeElement || t;
				return fi(
					i,
					e.querySelectorAll
						? e
						: e === t
							? qr("Invalid scope") || ca.createElement("div")
							: t,
				);
			}
		);
	},
	nu = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	ru = function (t) {
		if (Gt(t)) return t;
		var i = Li(t) ? t : { each: t },
			e = Sn(i.ease),
			n = i.from || 0,
			r = parseFloat(i.base) || 0,
			s = {},
			o = n > 0 && n < 1,
			u = isNaN(n) || o,
			c = i.axis,
			f = n,
			d = n;
		return (
			fe(n)
				? (f = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
				: !o && u && ((f = n[0]), (d = n[1])),
			function (h, l, g) {
				var p = (g || i).length,
					_ = s[p],
					m,
					x,
					M,
					v,
					T,
					C,
					S,
					O,
					E;
				if (!_) {
					if (((E = i.grid === "auto" ? 0 : (i.grid || [1, ci])[1]), !E)) {
						for (
							S = -ci;
							S < (S = g[E++].getBoundingClientRect().left) && E < p;

						);
						E < p && E--;
					}
					for (
						_ = s[p] = [],
							m = u ? Math.min(E, p) * f - 0.5 : n % E,
							x = E === ci ? 0 : u ? (p * d) / E - 0.5 : (n / E) | 0,
							S = 0,
							O = ci,
							C = 0;
						C < p;
						C++
					)
						(M = (C % E) - m),
							(v = x - ((C / E) | 0)),
							(_[C] = T = c ? Math.abs(c === "y" ? v : M) : Bl(M * M + v * v)),
							T > S && (S = T),
							T < O && (O = T);
					n === "random" && nu(_),
						(_.max = S - O),
						(_.min = O),
						(_.v = p =
							(parseFloat(i.amount) ||
								parseFloat(i.each) *
									(E > p
										? p - 1
										: c
											? c === "y"
												? p / E
												: E
											: Math.max(E, p / E)) ||
								0) * (n === "edges" ? -1 : 1)),
						(_.b = p < 0 ? r - p : r),
						(_.u = Se(i.amount || i.each) || 0),
						(e = e && p < 0 ? pu(e) : e);
				}
				return (
					(p = (_[h] - _.min) / _.max || 0),
					ce(_.b + (e ? e(p) : p) * _.v) + _.u
				);
			}
		);
	},
	No = function (t) {
		var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (e) {
			var n = ce(Math.round(parseFloat(e) / t) * t * i);
			return (n - (n % 1)) / i + (Wi(e) ? 0 : Se(e));
		};
	},
	su = function (t, i) {
		var e = De(t),
			n,
			r;
		return (
			!e &&
				Li(t) &&
				((n = e = t.radius || ci),
				t.values
					? ((t = fi(t.values)), (r = !Wi(t[0])) && (n *= n))
					: (t = No(t.increment))),
			cn(
				i,
				e
					? Gt(t)
						? function (s) {
								return (r = t(s)), Math.abs(r - s) <= n ? r : s;
							}
						: function (s) {
								for (
									var o = parseFloat(r ? s.x : s),
										u = parseFloat(r ? s.y : 0),
										c = ci,
										f = 0,
										d = t.length,
										h,
										l;
									d--;

								)
									r
										? ((h = t[d].x - o), (l = t[d].y - u), (h = h * h + l * l))
										: (h = Math.abs(t[d] - o)),
										h < c && ((c = h), (f = d));
								return (
									(f = !n || c <= n ? t[f] : s),
									r || f === s || Wi(s) ? f : f + Se(s)
								);
							}
					: No(t),
			)
		);
	},
	ou = function (t, i, e, n) {
		return cn(De(t) ? !i : e === !0 ? !!(e = 0) : !n, function () {
			return De(t)
				? t[~~(Math.random() * t.length)]
				: (e = e || 1e-5) &&
						(n = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
						Math.floor(
							Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) *
								e *
								n,
						) / n;
		});
	},
	Vc = function () {
		for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
			i[e] = arguments[e];
		return function (n) {
			return i.reduce(function (r, s) {
				return s(r);
			}, n);
		};
	},
	Wc = function (t, i) {
		return function (e) {
			return t(parseFloat(e)) + (i || Se(e));
		};
	},
	qc = function (t, i, e) {
		return lu(t, i, 0, 1, e);
	},
	au = function (t, i, e) {
		return cn(e, function (n) {
			return t[~~i(n)];
		});
	},
	Uc = function a(t, i, e) {
		var n = i - t;
		return De(t)
			? au(t, a(0, t.length), i)
			: cn(e, function (r) {
					return ((n + ((r - t) % n)) % n) + t;
				});
	},
	Gc = function a(t, i, e) {
		var n = i - t,
			r = n * 2;
		return De(t)
			? au(t, a(0, t.length - 1), i)
			: cn(e, function (s) {
					return (s = (r + ((s - t) % r)) % r || 0), t + (s > n ? r - s : s);
				});
	},
	Gr = function (t) {
		for (var i = 0, e = "", n, r, s, o; ~(n = t.indexOf("random(", i)); )
			(s = t.indexOf(")", n)),
				(o = t.charAt(n + 7) === "["),
				(r = t.substr(n + 7, s - n - 7).match(o ? Hl : Eo)),
				(e +=
					t.substr(i, n - i) + ou(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
				(i = s + 1);
		return e + t.substr(i, t.length - i);
	},
	lu = function (t, i, e, n, r) {
		var s = i - t,
			o = n - e;
		return cn(r, function (u) {
			return e + (((u - t) / s) * o || 0);
		});
	},
	jc = function a(t, i, e, n) {
		var r = isNaN(t + i)
			? 0
			: function (l) {
					return (1 - l) * t + l * i;
				};
		if (!r) {
			var s = fe(t),
				o = {},
				u,
				c,
				f,
				d,
				h;
			if ((e === !0 && (n = 1) && (e = null), s))
				(t = { p: t }), (i = { p: i });
			else if (De(t) && !De(i)) {
				for (f = [], d = t.length, h = d - 2, c = 1; c < d; c++)
					f.push(a(t[c - 1], t[c]));
				d--,
					(r = function (g) {
						g *= d;
						var p = Math.min(h, ~~g);
						return f[p](g - p);
					}),
					(e = i);
			} else n || (t = kn(De(t) ? [] : {}, t));
			if (!f) {
				for (u in i) ga.call(o, t, u, "get", i[u]);
				r = function (g) {
					return xa(g, o) || (s ? t.p : t);
				};
			}
		}
		return cn(e, r);
	},
	Wa = function (t, i, e) {
		var n = t.labels,
			r = ci,
			s,
			o,
			u;
		for (s in n)
			(o = n[s] - i),
				o < 0 == !!e && o && r > (o = Math.abs(o)) && ((u = s), (r = o));
		return u;
	},
	ii = function (t, i, e) {
		var n = t.vars,
			r = n[i],
			s = zt,
			o = t._ctx,
			u,
			c,
			f;
		if (r)
			return (
				(u = n[i + "Params"]),
				(c = n.callbackScope || t),
				e && rn.length && Bs(),
				o && (zt = o),
				(f = u ? r.apply(c, u) : r.call(c)),
				(zt = s),
				f
			);
	},
	xr = function (t) {
		return (
			an(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!Me),
			t.progress() < 1 && ii(t, "onInterrupt"),
			t
		);
	},
	Un,
	uu = [],
	cu = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), ua() || t.headless)) {
				var i = t.name,
					e = Gt(t),
					n =
						i && !e && t.init
							? function () {
									this._props = [];
								}
							: t,
					r = {
						init: Ur,
						render: xa,
						add: ga,
						kill: df,
						modifier: ff,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: ya,
						aliases: {},
						register: 0,
					};
				if ((ar(), t !== n)) {
					if (Ze[i]) return;
					hi(n, hi(Ys(t, r), s)),
						kn(n.prototype, kn(r, Ys(t, s))),
						(Ze[(n.prop = i)] = n),
						t.targetTest && (Ds.push(n), (da[i] = 1)),
						(i =
							(i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
							"Plugin");
				}
				ql(i, n), t.register && t.register(We, n, He);
			} else uu.push(t);
	},
	kt = 255,
	vr = {
		aqua: [0, kt, kt],
		lime: [0, kt, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, kt],
		navy: [0, 0, 128],
		white: [kt, kt, kt],
		olive: [128, 128, 0],
		yellow: [kt, kt, 0],
		orange: [kt, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [kt, 0, 0],
		pink: [kt, 192, 203],
		cyan: [0, kt, kt],
		transparent: [kt, kt, kt, 0],
	},
	oo = function (t, i, e) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? i + (e - i) * t * 6
				: t < 0.5
					? e
					: t * 3 < 2
						? i + (e - i) * (2 / 3 - t) * 6
						: i) *
				kt +
				0.5) |
				0
		);
	},
	fu = function (t, i, e) {
		var n = t ? (Wi(t) ? [t >> 16, (t >> 8) & kt, t & kt] : 0) : vr.black,
			r,
			s,
			o,
			u,
			c,
			f,
			d,
			h,
			l,
			g;
		if (!n) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), vr[t]))
				n = vr[t];
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
						(n = parseInt(t.substr(1, 6), 16)),
						[n >> 16, (n >> 8) & kt, n & kt, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (n = [t >> 16, (t >> 8) & kt, t & kt]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((n = g = t.match(Eo)), !i))
					(u = (+n[0] % 360) / 360),
						(c = +n[1] / 100),
						(f = +n[2] / 100),
						(s = f <= 0.5 ? f * (c + 1) : f + c - f * c),
						(r = f * 2 - s),
						n.length > 3 && (n[3] *= 1),
						(n[0] = oo(u + 1 / 3, r, s)),
						(n[1] = oo(u, r, s)),
						(n[2] = oo(u - 1 / 3, r, s));
				else if (~t.indexOf("="))
					return (n = t.match(Xl)), e && n.length < 4 && (n[3] = 1), n;
			} else n = t.match(Eo) || vr.transparent;
			n = n.map(Number);
		}
		return (
			i &&
				!g &&
				((r = n[0] / kt),
				(s = n[1] / kt),
				(o = n[2] / kt),
				(d = Math.max(r, s, o)),
				(h = Math.min(r, s, o)),
				(f = (d + h) / 2),
				d === h
					? (u = c = 0)
					: ((l = d - h),
						(c = f > 0.5 ? l / (2 - d - h) : l / (d + h)),
						(u =
							d === r
								? (s - o) / l + (s < o ? 6 : 0)
								: d === s
									? (o - r) / l + 2
									: (r - s) / l + 4),
						(u *= 60)),
				(n[0] = ~~(u + 0.5)),
				(n[1] = ~~(c * 100 + 0.5)),
				(n[2] = ~~(f * 100 + 0.5))),
			e && n.length < 4 && (n[3] = 1),
			n
		);
	},
	du = function (t) {
		var i = [],
			e = [],
			n = -1;
		return (
			t.split(sn).forEach(function (r) {
				var s = r.match(qn) || [];
				i.push.apply(i, s), e.push((n += s.length + 1));
			}),
			(i.c = e),
			i
		);
	},
	qa = function (t, i, e) {
		var n = "",
			r = (t + n).match(sn),
			s = i ? "hsla(" : "rgba(",
			o = 0,
			u,
			c,
			f,
			d;
		if (!r) return t;
		if (
			((r = r.map(function (h) {
				return (
					(h = fu(h, i, 1)) &&
					s +
						(i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
						")"
				);
			})),
			e && ((f = du(t)), (u = e.c), u.join(n) !== f.c.join(n)))
		)
			for (c = t.replace(sn, "1").split(qn), d = c.length - 1; o < d; o++)
				n +=
					c[o] +
					(~u.indexOf(o)
						? r.shift() || s + "0,0,0,0)"
						: (f.length ? f : r.length ? r : e).shift());
		if (!c)
			for (c = t.split(sn), d = c.length - 1; o < d; o++) n += c[o] + r[o];
		return n + c[d];
	},
	sn = (function () {
		var a =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in vr) a += "|" + t + "\\b";
		return new RegExp(a + ")", "gi");
	})(),
	Kc = /hsl[a]?\(/,
	hu = function (t) {
		var i = t.join(" "),
			e;
		if (((sn.lastIndex = 0), sn.test(i)))
			return (
				(e = Kc.test(i)),
				(t[1] = qa(t[1], e)),
				(t[0] = qa(t[0], e, du(t[1]))),
				!0
			);
	},
	jr,
	Je = (function () {
		var a = Date.now,
			t = 500,
			i = 33,
			e = a(),
			n = e,
			r = 1e3 / 240,
			s = r,
			o = [],
			u,
			c,
			f,
			d,
			h,
			l,
			g = function p(_) {
				var m = a() - n,
					x = _ === !0,
					M,
					v,
					T,
					C;
				if (
					((m > t || m < 0) && (e += m - i),
					(n += m),
					(T = n - e),
					(M = T - s),
					(M > 0 || x) &&
						((C = ++d.frame),
						(h = T - d.time * 1e3),
						(d.time = T = T / 1e3),
						(s += M + (M >= r ? 4 : r - M)),
						(v = 1)),
					x || (u = c(p)),
					v)
				)
					for (l = 0; l < o.length; l++) o[l](T, h, C, _);
			};
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					g(!0);
				},
				deltaRatio: function (_) {
					return h / (1e3 / (_ || 60));
				},
				wake: function () {
					Vl &&
						(!ko &&
							ua() &&
							((Di = ko = window),
							(ca = Di.document || {}),
							(ri.gsap = We),
							(Di.gsapVersions || (Di.gsapVersions = [])).push(We.version),
							Wl(zs || Di.GreenSockGlobals || (!Di.gsap && Di) || {}),
							uu.forEach(cu)),
						(f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						u && d.sleep(),
						(c =
							f ||
							function (_) {
								return setTimeout(_, (s - d.time * 1e3 + 1) | 0);
							}),
						(jr = 1),
						g(2));
				},
				sleep: function () {
					(f ? cancelAnimationFrame : clearTimeout)(u), (jr = 0), (c = Ur);
				},
				lagSmoothing: function (_, m) {
					(t = _ || 1 / 0), (i = Math.min(m || 33, t));
				},
				fps: function (_) {
					(r = 1e3 / (_ || 240)), (s = d.time * 1e3 + r);
				},
				add: function (_, m, x) {
					var M = m
						? function (v, T, C, S) {
								_(v, T, C, S), d.remove(M);
							}
						: _;
					return d.remove(_), o[x ? "unshift" : "push"](M), ar(), M;
				},
				remove: function (_, m) {
					~(m = o.indexOf(_)) && o.splice(m, 1) && l >= m && l--;
				},
				_listeners: o,
			}),
			d
		);
	})(),
	ar = function () {
		return !jr && Je.wake();
	},
	xt = {},
	Qc = /^[\d.\-M][\d.\-,\s]/,
	Zc = /["']/g,
	Jc = function (t) {
		for (
			var i = {},
				e = t.substr(1, t.length - 3).split(":"),
				n = e[0],
				r = 1,
				s = e.length,
				o,
				u,
				c;
			r < s;
			r++
		)
			(u = e[r]),
				(o = r !== s - 1 ? u.lastIndexOf(",") : u.length),
				(c = u.substr(0, o)),
				(i[n] = isNaN(c) ? c.replace(Zc, "").trim() : +c),
				(n = u.substr(o + 1).trim());
		return i;
	},
	tf = function (t) {
		var i = t.indexOf("(") + 1,
			e = t.indexOf(")"),
			n = t.indexOf("(", i);
		return t.substring(i, ~n && n < e ? t.indexOf(")", e + 1) : e);
	},
	ef = function (t) {
		var i = (t + "").split("("),
			e = xt[i[0]];
		return e && i.length > 1 && e.config
			? e.config.apply(
					null,
					~t.indexOf("{") ? [Jc(i[1])] : tf(t).split(",").map(Kl),
				)
			: xt._CE && Qc.test(t)
				? xt._CE("", t)
				: e;
	},
	pu = function (t) {
		return function (i) {
			return 1 - t(1 - i);
		};
	},
	gu = function a(t, i) {
		for (var e = t._first, n; e; )
			e instanceof Le
				? a(e, i)
				: e.vars.yoyoEase &&
					(!e._yoyo || !e._repeat) &&
					e._yoyo !== i &&
					(e.timeline
						? a(e.timeline, i)
						: ((n = e._ease),
							(e._ease = e._yEase),
							(e._yEase = n),
							(e._yoyo = i))),
				(e = e._next);
	},
	Sn = function (t, i) {
		return (t && (Gt(t) ? t : xt[t] || ef(t))) || i;
	},
	zn = function (t, i, e, n) {
		e === void 0 &&
			(e = function (u) {
				return 1 - i(1 - u);
			}),
			n === void 0 &&
				(n = function (u) {
					return u < 0.5 ? i(u * 2) / 2 : 1 - i((1 - u) * 2) / 2;
				});
		var r = { easeIn: i, easeOut: e, easeInOut: n },
			s;
		return (
			$e(t, function (o) {
				(xt[o] = ri[o] = r), (xt[(s = o.toLowerCase())] = e);
				for (var u in r)
					xt[
						s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
					] = xt[o + "." + u] = r[u];
			}),
			r
		);
	},
	_u = function (t) {
		return function (i) {
			return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
		};
	},
	ao = function a(t, i, e) {
		var n = i >= 1 ? i : 1,
			r = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
			s = (r / Co) * (Math.asin(1 / n) || 0),
			o = function (f) {
				return f === 1 ? 1 : n * Math.pow(2, -10 * f) * Cc((f - s) * r) + 1;
			},
			u =
				t === "out"
					? o
					: t === "in"
						? function (c) {
								return 1 - o(1 - c);
							}
						: _u(o);
		return (
			(r = Co / r),
			(u.config = function (c, f) {
				return a(t, c, f);
			}),
			u
		);
	},
	lo = function a(t, i) {
		i === void 0 && (i = 1.70158);
		var e = function (s) {
				return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
			},
			n =
				t === "out"
					? e
					: t === "in"
						? function (r) {
								return 1 - e(1 - r);
							}
						: _u(e);
		return (
			(n.config = function (r) {
				return a(t, r);
			}),
			n
		);
	};
$e("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var i = t < 5 ? t + 1 : t;
	zn(
		a + ",Power" + (i - 1),
		t
			? function (e) {
					return Math.pow(e, i);
				}
			: function (e) {
					return e;
				},
		function (e) {
			return 1 - Math.pow(1 - e, i);
		},
		function (e) {
			return e < 0.5
				? Math.pow(e * 2, i) / 2
				: 1 - Math.pow((1 - e) * 2, i) / 2;
		},
	);
});
xt.Linear.easeNone = xt.none = xt.Linear.easeIn;
zn("Elastic", ao("in"), ao("out"), ao());
(function (a, t) {
	var i = 1 / t,
		e = 2 * i,
		n = 2.5 * i,
		r = function (o) {
			return o < i
				? a * o * o
				: o < e
					? a * Math.pow(o - 1.5 / t, 2) + 0.75
					: o < n
						? a * (o -= 2.25 / t) * o + 0.9375
						: a * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	zn(
		"Bounce",
		function (s) {
			return 1 - r(1 - s);
		},
		r,
	);
})(7.5625, 2.75);
zn("Expo", function (a) {
	return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
zn("Circ", function (a) {
	return -(Bl(1 - a * a) - 1);
});
zn("Sine", function (a) {
	return a === 1 ? 1 : -Pc(a * Dc) + 1;
});
zn("Back", lo("in"), lo("out"), lo());
xt.SteppedEase =
	xt.steps =
	ri.SteppedEase =
		{
			config: function (t, i) {
				t === void 0 && (t = 1);
				var e = 1 / t,
					n = t + (i ? 0 : 1),
					r = i ? 1 : 0,
					s = 1 - It;
				return function (o) {
					return (((n * os(0, s, o)) | 0) + r) * e;
				};
			},
		};
rr.ease = xt["quad.out"];
$e(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (ha += a + "," + a + "Params,");
	},
);
var mu = function (t, i) {
		(this.id = Oc++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = i),
			(this.get = i ? i.get : Gl),
			(this.set = i ? i.getSetter : ya);
	},
	Kr = (function () {
		function a(i) {
			(this.vars = i),
				(this._delay = +i.delay || 0),
				(this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
					((this._rDelay = i.repeatDelay || 0),
					(this._yoyo = !!i.yoyo || !!i.yoyoEase)),
				(this._ts = 1),
				or(this, +i.duration, 1, 1),
				(this.data = i.data),
				zt && ((this._ctx = zt), zt.data.push(this)),
				jr || Je.wake();
		}
		var t = a.prototype;
		return (
			(t.delay = function (e) {
				return e || e === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + e - this._delay),
						(this._delay = e),
						this)
					: this._delay;
			}),
			(t.duration = function (e) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
						)
					: this.totalDuration() && this._dur;
			}),
			(t.totalDuration = function (e) {
				return arguments.length
					? ((this._dirty = 0),
						or(
							this,
							this._repeat < 0
								? e
								: (e - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (e, n) {
				if ((ar(), !arguments.length)) return this._tTime;
				var r = this._dp;
				if (r && r.smoothChildTiming && this._ts) {
					for (to(this, e), !r._dp || r.parent || Jl(r, this); r && r.parent; )
						r.parent._time !==
							r._start +
								(r._ts >= 0
									? r._tTime / r._ts
									: (r.totalDuration() - r._tTime) / -r._ts) &&
							r.totalTime(r._tTime, !0),
							(r = r.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && e < this._tDur) ||
							(this._ts < 0 && e > 0) ||
							(!this._tDur && !e)) &&
						Pi(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== e ||
						(!this._dur && !n) ||
						(this._initted && Math.abs(this._zTime) === It) ||
						(!e && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = e), jl(this, e, n)),
					this
				);
			}),
			(t.time = function (e, n) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), e + Ha(this)) %
								(this._dur + this._rDelay) || (e ? this._dur : 0),
							n,
						)
					: this._time;
			}),
			(t.totalProgress = function (e, n) {
				return arguments.length
					? this.totalTime(this.totalDuration() * e, n)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.progress = function (e, n) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
								Ha(this),
							n,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (e, n) {
				var r = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (e - 1) * r, n)
					: this._repeat
						? sr(this._tTime, r) + 1
						: 1;
			}),
			(t.timeScale = function (e, n) {
				if (!arguments.length) return this._rts === -It ? 0 : this._rts;
				if (this._rts === e) return this;
				var r =
					this.parent && this._ts ? Xs(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +e || 0),
					(this._ts = this._ps || e === -It ? 0 : this._rts),
					this.totalTime(os(-Math.abs(this._delay), this._tDur, r), n !== !1),
					Js(this),
					Fc(this)
				);
			}),
			(t.paused = function (e) {
				return arguments.length
					? (this._ps !== e &&
							((this._ps = e),
							e
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (ar(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== It &&
											(this._tTime -= It),
									))),
						this)
					: this._ps;
			}),
			(t.startTime = function (e) {
				if (arguments.length) {
					this._start = e;
					var n = this.parent || this._dp;
					return (
						n && (n._sort || !this.parent) && Pi(n, this, e - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (e) {
				return (
					this._start +
					(Xe(e) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (e) {
				var n = this.parent || this._dp;
				return n
					? e &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? Xs(n.rawTime(e), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (e) {
				e === void 0 && (e = Ac);
				var n = Me;
				return (
					(Me = e),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(e),
						this.totalTime(-0.01, e.suppressEvents)),
					this.data !== "nested" && e.kill !== !1 && this.kill(),
					(Me = n),
					this
				);
			}),
			(t.globalTime = function (e) {
				for (var n = this, r = arguments.length ? e : n.rawTime(); n; )
					(r = n._start + r / (Math.abs(n._ts) || 1)), (n = n._dp);
				return !this.parent && this._sat ? this._sat.globalTime(e) : r;
			}),
			(t.repeat = function (e) {
				return arguments.length
					? ((this._repeat = e === 1 / 0 ? -2 : e), Va(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (e) {
				if (arguments.length) {
					var n = this._time;
					return (this._rDelay = e), Va(this), n ? this.time(n) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (e) {
				return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
			}),
			(t.seek = function (e, n) {
				return this.totalTime(ai(this, e), Xe(n));
			}),
			(t.restart = function (e, n) {
				return this.play().totalTime(e ? -this._delay : 0, Xe(n));
			}),
			(t.play = function (e, n) {
				return e != null && this.seek(e, n), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (e, n) {
				return (
					e != null && this.seek(e || this.totalDuration(), n),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (e, n) {
				return e != null && this.seek(e, n), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (e) {
				return arguments.length
					? (!!e !== this.reversed() &&
							this.timeScale(-this._rts || (e ? -It : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -It), this;
			}),
			(t.isActive = function () {
				var e = this.parent || this._dp,
					n = this._start,
					r;
				return !!(
					!e ||
					(this._ts &&
						this._initted &&
						e.isActive() &&
						(r = e.rawTime(!0)) >= n &&
						r < this.endTime(!0) - It)
				);
			}),
			(t.eventCallback = function (e, n, r) {
				var s = this.vars;
				return arguments.length > 1
					? (n
							? ((s[e] = n),
								r && (s[e + "Params"] = r),
								e === "onUpdate" && (this._onUpdate = n))
							: delete s[e],
						this)
					: s[e];
			}),
			(t.then = function (e) {
				var n = this;
				return new Promise(function (r) {
					var s = Gt(e) ? e : Ql,
						o = function () {
							var c = n.then;
							(n.then = null),
								Gt(s) && (s = s(n)) && (s.then || s === n) && (n.then = c),
								r(s),
								(n.then = c);
						};
					(n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
					(!n._tTime && n._ts < 0)
						? o()
						: (n._prom = o);
				});
			}),
			(t.kill = function () {
				xr(this);
			}),
			a
		);
	})();
hi(Kr.prototype, {
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
	_zTime: -It,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Le = (function (a) {
	zl(t, a);
	function t(e, n) {
		var r;
		return (
			e === void 0 && (e = {}),
			(r = a.call(this, e) || this),
			(r.labels = {}),
			(r.smoothChildTiming = !!e.smoothChildTiming),
			(r.autoRemoveChildren = !!e.autoRemoveChildren),
			(r._sort = Xe(e.sortChildren)),
			Ht && Pi(e.parent || Ht, Fi(r), n),
			e.reversed && r.reverse(),
			e.paused && r.paused(!0),
			e.scrollTrigger && tu(Fi(r), e.scrollTrigger),
			r
		);
	}
	var i = t.prototype;
	return (
		(i.to = function (n, r, s) {
			return kr(0, arguments, this), this;
		}),
		(i.from = function (n, r, s) {
			return kr(1, arguments, this), this;
		}),
		(i.fromTo = function (n, r, s, o) {
			return kr(2, arguments, this), this;
		}),
		(i.set = function (n, r, s) {
			return (
				(r.duration = 0),
				(r.parent = this),
				Er(r).repeatDelay || (r.repeat = 0),
				(r.immediateRender = !!r.immediateRender),
				new ee(n, r, ai(this, s), 1),
				this
			);
		}),
		(i.call = function (n, r, s) {
			return Pi(this, ee.delayedCall(0, n, r), s);
		}),
		(i.staggerTo = function (n, r, s, o, u, c, f) {
			return (
				(s.duration = r),
				(s.stagger = s.stagger || o),
				(s.onComplete = c),
				(s.onCompleteParams = f),
				(s.parent = this),
				new ee(n, s, ai(this, u)),
				this
			);
		}),
		(i.staggerFrom = function (n, r, s, o, u, c, f) {
			return (
				(s.runBackwards = 1),
				(Er(s).immediateRender = Xe(s.immediateRender)),
				this.staggerTo(n, r, s, o, u, c, f)
			);
		}),
		(i.staggerFromTo = function (n, r, s, o, u, c, f, d) {
			return (
				(o.startAt = s),
				(Er(o).immediateRender = Xe(o.immediateRender)),
				this.staggerTo(n, r, o, u, c, f, d)
			);
		}),
		(i.render = function (n, r, s) {
			var o = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				c = this._dur,
				f = n <= 0 ? 0 : ce(n),
				d = this._zTime < 0 != n < 0 && (this._initted || !c),
				h,
				l,
				g,
				p,
				_,
				m,
				x,
				M,
				v,
				T,
				C,
				S;
			if (
				(this !== Ht && f > u && n >= 0 && (f = u), f !== this._tTime || s || d)
			) {
				if (
					(o !== this._time &&
						c &&
						((f += this._time - o), (n += this._time - o)),
					(h = f),
					(v = this._start),
					(M = this._ts),
					(m = !M),
					d && (c || (o = this._zTime), (n || !r) && (this._zTime = n)),
					this._repeat)
				) {
					if (
						((C = this._yoyo),
						(_ = c + this._rDelay),
						this._repeat < -1 && n < 0)
					)
						return this.totalTime(_ * 100 + n, r, s);
					if (
						((h = ce(f % _)),
						f === u
							? ((p = this._repeat), (h = c))
							: ((p = ~~(f / _)),
								p && p === f / _ && ((h = c), p--),
								h > c && (h = c)),
						(T = sr(this._tTime, _)),
						!o &&
							this._tTime &&
							T !== p &&
							this._tTime - T * _ - this._dur <= 0 &&
							(T = p),
						C && p & 1 && ((h = c - h), (S = 1)),
						p !== T && !this._lock)
					) {
						var O = C && T & 1,
							E = O === (C && p & 1);
						if (
							(p < T && (O = !O),
							(o = O ? 0 : f % c ? c : f),
							(this._lock = 1),
							(this.render(o || (S ? 0 : ce(p * _)), r, !c)._lock = 0),
							(this._tTime = f),
							!r && this.parent && ii(this, "onRepeat"),
							this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								m !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((c = this._dur),
							(u = this._tDur),
							E &&
								((this._lock = 2),
								(o = O ? c : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !S && this.invalidate()),
							(this._lock = 0),
							!this._ts && !m)
						)
							return this;
						gu(this, S);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((x = Yc(this, ce(o), ce(h))), x && (f -= h - (h = x._start))),
					(this._tTime = f),
					(this._time = h),
					(this._act = !M),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = n),
						(o = 0)),
					!o && h && !r && !p && (ii(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (h >= o && n >= 0)
					for (l = this._first; l; ) {
						if (
							((g = l._next), (l._act || h >= l._start) && l._ts && x !== l)
						) {
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (h - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(h - l._start) * l._ts,
									r,
									s,
								),
								h !== this._time || (!this._ts && !m))
							) {
								(x = 0), g && (f += this._zTime = -It);
								break;
							}
						}
						l = g;
					}
				else {
					l = this._last;
					for (var L = n < 0 ? n : h; l; ) {
						if (((g = l._prev), (l._act || L <= l._end) && l._ts && x !== l)) {
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (L - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(L - l._start) * l._ts,
									r,
									s || (Me && (l._initted || l._startAt)),
								),
								h !== this._time || (!this._ts && !m))
							) {
								(x = 0), g && (f += this._zTime = L ? -It : It);
								break;
							}
						}
						l = g;
					}
				}
				if (
					x &&
					!r &&
					(this.pause(),
					(x.render(h >= o ? 0 : -It)._zTime = h >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = v), Js(this), this.render(n, r, s);
				this._onUpdate && !r && ii(this, "onUpdate", !0),
					((f === u && this._tTime >= this.totalDuration()) || (!f && o)) &&
						(v === this._start || Math.abs(M) !== Math.abs(this._ts)) &&
						(this._lock ||
							((n || !c) &&
								((f === u && this._ts > 0) || (!f && this._ts < 0)) &&
								an(this, 1),
							!r &&
								!(n < 0 && !o) &&
								(f || o || !u) &&
								(ii(
									this,
									f === u && n >= 0 ? "onComplete" : "onReverseComplete",
									!0,
								),
								this._prom &&
									!(f < u && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(i.add = function (n, r) {
			var s = this;
			if ((Wi(r) || (r = ai(this, r, n)), !(n instanceof Kr))) {
				if (De(n))
					return (
						n.forEach(function (o) {
							return s.add(o, r);
						}),
						this
					);
				if (fe(n)) return this.addLabel(n, r);
				if (Gt(n)) n = ee.delayedCall(0, n);
				else return this;
			}
			return this !== n ? Pi(this, n, r) : this;
		}),
		(i.getChildren = function (n, r, s, o) {
			n === void 0 && (n = !0),
				r === void 0 && (r = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -ci);
			for (var u = [], c = this._first; c; )
				c._start >= o &&
					(c instanceof ee
						? r && u.push(c)
						: (s && u.push(c), n && u.push.apply(u, c.getChildren(!0, r, s)))),
					(c = c._next);
			return u;
		}),
		(i.getById = function (n) {
			for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
				if (r[s].vars.id === n) return r[s];
		}),
		(i.remove = function (n) {
			return fe(n)
				? this.removeLabel(n)
				: Gt(n)
					? this.killTweensOf(n)
					: (Zs(this, n),
						n === this._recent && (this._recent = this._last),
						Tn(this));
		}),
		(i.totalTime = function (n, r) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = ce(
							Je.time -
								(this._ts > 0
									? n / this._ts
									: (this.totalDuration() - n) / -this._ts),
						)),
					a.prototype.totalTime.call(this, n, r),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(i.addLabel = function (n, r) {
			return (this.labels[n] = ai(this, r)), this;
		}),
		(i.removeLabel = function (n) {
			return delete this.labels[n], this;
		}),
		(i.addPause = function (n, r, s) {
			var o = ee.delayedCall(0, r || Ur, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), Pi(this, o, ai(this, n))
			);
		}),
		(i.removePause = function (n) {
			var r = this._first;
			for (n = ai(this, n); r; )
				r._start === n && r.data === "isPause" && an(r), (r = r._next);
		}),
		(i.killTweensOf = function (n, r, s) {
			for (var o = this.getTweensOf(n, s), u = o.length; u--; )
				Qi !== o[u] && o[u].kill(n, r);
			return this;
		}),
		(i.getTweensOf = function (n, r) {
			for (var s = [], o = fi(n), u = this._first, c = Wi(r), f; u; )
				u instanceof ee
					? Lc(u._targets, o) &&
						(c
							? (!Qi || (u._initted && u._ts)) &&
								u.globalTime(0) <= r &&
								u.globalTime(u.totalDuration()) > r
							: !r || u.isActive()) &&
						s.push(u)
					: (f = u.getTweensOf(o, r)).length && s.push.apply(s, f),
					(u = u._next);
			return s;
		}),
		(i.tweenTo = function (n, r) {
			r = r || {};
			var s = this,
				o = ai(s, n),
				u = r,
				c = u.startAt,
				f = u.onStart,
				d = u.onStartParams,
				h = u.immediateRender,
				l,
				g = ee.to(
					s,
					hi(
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
								It,
							onStart: function () {
								if ((s.pause(), !l)) {
									var _ =
										r.duration ||
										Math.abs(
											(o - (c && "time" in c ? c.time : s._time)) /
												s.timeScale(),
										);
									g._dur !== _ && or(g, _, 0, 1).render(g._time, !0, !0),
										(l = 1);
								}
								f && f.apply(g, d || []);
							},
						},
						r,
					),
				);
			return h ? g.render(0) : g;
		}),
		(i.tweenFromTo = function (n, r, s) {
			return this.tweenTo(r, hi({ startAt: { time: ai(this, n) } }, s));
		}),
		(i.recent = function () {
			return this._recent;
		}),
		(i.nextLabel = function (n) {
			return n === void 0 && (n = this._time), Wa(this, ai(this, n));
		}),
		(i.previousLabel = function (n) {
			return n === void 0 && (n = this._time), Wa(this, ai(this, n), 1);
		}),
		(i.currentLabel = function (n) {
			return arguments.length
				? this.seek(n, !0)
				: this.previousLabel(this._time + It);
		}),
		(i.shiftChildren = function (n, r, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, u = this.labels, c; o; )
				o._start >= s && ((o._start += n), (o._end += n)), (o = o._next);
			if (r) for (c in u) u[c] >= s && (u[c] += n);
			return Tn(this);
		}),
		(i.invalidate = function (n) {
			var r = this._first;
			for (this._lock = 0; r; ) r.invalidate(n), (r = r._next);
			return a.prototype.invalidate.call(this, n);
		}),
		(i.clear = function (n) {
			n === void 0 && (n = !0);
			for (var r = this._first, s; r; ) (s = r._next), this.remove(r), (r = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				n && (this.labels = {}),
				Tn(this)
			);
		}),
		(i.totalDuration = function (n) {
			var r = 0,
				s = this,
				o = s._last,
				u = ci,
				c,
				f,
				d;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -n : n),
				);
			if (s._dirty) {
				for (d = s.parent; o; )
					(c = o._prev),
						o._dirty && o.totalDuration(),
						(f = o._start),
						f > u && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (Pi(s, o, f - o._delay, 1)._lock = 0))
							: (u = f),
						f < 0 &&
							o._ts &&
							((r -= f),
							((!d && !s._dp) || (d && d.smoothChildTiming)) &&
								((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
							s.shiftChildren(-f, !1, -1 / 0),
							(u = 0)),
						o._end > r && o._ts && (r = o._end),
						(o = c);
				or(s, s === Ht && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (n) {
			if ((Ht._ts && (jl(Ht, Xs(n, Ht)), (Ul = Je.frame)), Je.frame >= Xa)) {
				Xa += ni.autoSleep || 120;
				var r = Ht._first;
				if ((!r || !r._ts) && ni.autoSleep && Je._listeners.length < 2) {
					for (; r && !r._ts; ) r = r._next;
					r || Je.sleep();
				}
			}
		}),
		t
	);
})(Kr);
hi(Le.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var nf = function (t, i, e, n, r, s, o) {
		var u = new He(this._pt, t, i, 0, 1, Tu, null, r),
			c = 0,
			f = 0,
			d,
			h,
			l,
			g,
			p,
			_,
			m,
			x;
		for (
			u.b = e,
				u.e = n,
				e += "",
				n += "",
				(m = ~n.indexOf("random(")) && (n = Gr(n)),
				s && ((x = [e, n]), s(x, t, i), (e = x[0]), (n = x[1])),
				h = e.match(ro) || [];
			(d = ro.exec(n));

		)
			(g = d[0]),
				(p = n.substring(c, d.index)),
				l ? (l = (l + 1) % 5) : p.substr(-5) === "rgba(" && (l = 1),
				g !== h[f++] &&
					((_ = parseFloat(h[f - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: p || f === 1 ? p : ",",
						s: _,
						c: g.charAt(1) === "=" ? jn(_, g) - _ : parseFloat(g) - _,
						m: l && l < 4 ? Math.round : 0,
					}),
					(c = ro.lastIndex));
		return (
			(u.c = c < n.length ? n.substring(c, n.length) : ""),
			(u.fp = o),
			($l.test(n) || m) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	ga = function (t, i, e, n, r, s, o, u, c, f) {
		Gt(n) && (n = n(r || 0, t, s));
		var d = t[i],
			h =
				e !== "get"
					? e
					: Gt(d)
						? c
							? t[
									i.indexOf("set") || !Gt(t["get" + i.substr(3)])
										? i
										: "get" + i.substr(3)
								](c)
							: t[i]()
						: d,
			l = Gt(d) ? (c ? lf : wu) : ma,
			g;
		if (
			(fe(n) &&
				(~n.indexOf("random(") && (n = Gr(n)),
				n.charAt(1) === "=" &&
					((g = jn(h, n) + (Se(h) || 0)), (g || g === 0) && (n = g))),
			!f || h !== n || zo)
		)
			return !isNaN(h * n) && n !== ""
				? ((g = new He(
						this._pt,
						t,
						i,
						+h || 0,
						n - (h || 0),
						typeof d == "boolean" ? cf : bu,
						0,
						l,
					)),
					c && (g.fp = c),
					o && g.modifier(o, this, t),
					(this._pt = g))
				: (!d && !(i in t) && fa(i, n),
					nf.call(this, t, i, h, n, l, u || ni.stringFilter, c));
	},
	rf = function (t, i, e, n, r) {
		if (
			(Gt(t) && (t = Ar(t, r, i, e, n)),
			!Li(t) || (t.style && t.nodeType) || De(t) || Yl(t))
		)
			return fe(t) ? Ar(t, r, i, e, n) : t;
		var s = {},
			o;
		for (o in t) s[o] = Ar(t[o], r, i, e, n);
		return s;
	},
	yu = function (t, i, e, n, r, s) {
		var o, u, c, f;
		if (
			Ze[t] &&
			(o = new Ze[t]()).init(
				r,
				o.rawVars ? i[t] : rf(i[t], n, r, s, e),
				e,
				n,
				s,
			) !== !1 &&
			((e._pt = u = new He(e._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
			e !== Un)
		)
			for (c = e._ptLookup[e._targets.indexOf(r)], f = o._props.length; f--; )
				c[o._props[f]] = u;
		return o;
	},
	Qi,
	zo,
	_a = function a(t, i, e) {
		var n = t.vars,
			r = n.ease,
			s = n.startAt,
			o = n.immediateRender,
			u = n.lazy,
			c = n.onUpdate,
			f = n.runBackwards,
			d = n.yoyoEase,
			h = n.keyframes,
			l = n.autoRevert,
			g = t._dur,
			p = t._startAt,
			_ = t._targets,
			m = t.parent,
			x = m && m.data === "nested" ? m.vars.targets : _,
			M = t._overwrite === "auto" && !aa,
			v = t.timeline,
			T,
			C,
			S,
			O,
			E,
			L,
			N,
			D,
			R,
			B,
			Y,
			H,
			X;
		if (
			(v && (!h || !r) && (r = "none"),
			(t._ease = Sn(r, rr.ease)),
			(t._yEase = d ? pu(Sn(d === !0 ? r : d, rr.ease)) : 0),
			d &&
				t._yoyo &&
				!t._repeat &&
				((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
			(t._from = !v && !!n.runBackwards),
			!v || (h && !n.stagger))
		) {
			if (
				((D = _[0] ? bn(_[0]).harness : 0),
				(H = D && n[D.prop]),
				(T = Ys(n, da)),
				p &&
					(p._zTime < 0 && p.progress(1),
					i < 0 && f && o && !l ? p.render(-1, !0) : p.revert(f && g ? Ms : kc),
					(p._lazy = 0)),
				s)
			) {
				if (
					(an(
						(t._startAt = ee.set(
							_,
							hi(
								{
									data: "isStart",
									overwrite: !1,
									parent: m,
									immediateRender: !0,
									lazy: !p && Xe(u),
									startAt: null,
									delay: 0,
									onUpdate:
										c &&
										function () {
											return ii(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					i < 0 && (Me || (!o && !l)) && t._startAt.revert(Ms),
					o && g && i <= 0 && e <= 0)
				) {
					i && (t._zTime = i);
					return;
				}
			} else if (f && g && !p) {
				if (
					(i && (o = !1),
					(S = hi(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !p && Xe(u),
							immediateRender: o,
							stagger: 0,
							parent: m,
						},
						T,
					)),
					H && (S[D.prop] = H),
					an((t._startAt = ee.set(_, S))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					i < 0 && (Me ? t._startAt.revert(Ms) : t._startAt.render(-1, !0)),
					(t._zTime = i),
					!o)
				)
					a(t._startAt, It, It);
				else if (!i) return;
			}
			for (
				t._pt = t._ptCache = 0, u = (g && Xe(u)) || (u && !g), C = 0;
				C < _.length;
				C++
			) {
				if (
					((E = _[C]),
					(N = E._gsap || pa(_)[C]._gsap),
					(t._ptLookup[C] = B = {}),
					Ao[N.id] && rn.length && Bs(),
					(Y = x === _ ? C : x.indexOf(E)),
					D &&
						(R = new D()).init(E, H || T, t, Y, x) !== !1 &&
						((t._pt = O =
							new He(t._pt, E, R.name, 0, 1, R.render, R, 0, R.priority)),
						R._props.forEach(function (J) {
							B[J] = O;
						}),
						R.priority && (L = 1)),
					!D || H)
				)
					for (S in T)
						Ze[S] && (R = yu(S, T, t, Y, E, x))
							? R.priority && (L = 1)
							: (B[S] = O =
									ga.call(t, E, S, "get", T[S], Y, x, 0, n.stringFilter));
				t._op && t._op[C] && t.kill(E, t._op[C]),
					M &&
						t._pt &&
						((Qi = t),
						Ht.killTweensOf(E, B, t.globalTime(i)),
						(X = !t.parent),
						(Qi = 0)),
					t._pt && u && (Ao[N.id] = 1);
			}
			L && Su(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = c),
			(t._initted = (!t._op || t._pt) && !X),
			h && i <= 0 && v.render(ci, !0, !0);
	},
	sf = function (t, i, e, n, r, s, o, u) {
		var c = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
			f,
			d,
			h,
			l;
		if (!c)
			for (
				c = t._ptCache[i] = [], h = t._ptLookup, l = t._targets.length;
				l--;

			) {
				if (((f = h[l][i]), f && f.d && f.d._pt))
					for (f = f.d._pt; f && f.p !== i && f.fp !== i; ) f = f._next;
				if (!f)
					return (
						(zo = 1),
						(t.vars[i] = "+=0"),
						_a(t, o),
						(zo = 0),
						u ? qr(i + " not eligible for reset") : 1
					);
				c.push(f);
			}
		for (l = c.length; l--; )
			(d = c[l]),
				(f = d._pt || d),
				(f.s = (n || n === 0) && !r ? n : f.s + (n || 0) + s * f.c),
				(f.c = e - f.s),
				d.e && (d.e = Kt(e) + Se(d.e)),
				d.b && (d.b = f.s + Se(d.b));
	},
	of = function (t, i) {
		var e = t[0] ? bn(t[0]).harness : 0,
			n = e && e.aliases,
			r,
			s,
			o,
			u;
		if (!n) return i;
		r = kn({}, i);
		for (s in n)
			if (s in r) for (u = n[s].split(","), o = u.length; o--; ) r[u[o]] = r[s];
		return r;
	},
	af = function (t, i, e, n) {
		var r = i.ease || n || "power1.inOut",
			s,
			o;
		if (De(i))
			(o = e[t] || (e[t] = [])),
				i.forEach(function (u, c) {
					return o.push({ t: (c / (i.length - 1)) * 100, v: u, e: r });
				});
		else
			for (s in i)
				(o = e[s] || (e[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: i[s], e: r });
	},
	Ar = function (t, i, e, n, r) {
		return Gt(t)
			? t.call(i, e, n, r)
			: fe(t) && ~t.indexOf("random(")
				? Gr(t)
				: t;
	},
	xu = ha + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	vu = {};
$e(xu + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (vu[a] = 1);
});
var ee = (function (a) {
	zl(t, a);
	function t(e, n, r, s) {
		var o;
		typeof n == "number" && ((r.duration = n), (n = r), (r = null)),
			(o = a.call(this, s ? n : Er(n)) || this);
		var u = o.vars,
			c = u.duration,
			f = u.delay,
			d = u.immediateRender,
			h = u.stagger,
			l = u.overwrite,
			g = u.keyframes,
			p = u.defaults,
			_ = u.scrollTrigger,
			m = u.yoyoEase,
			x = n.parent || Ht,
			M = (De(e) || Yl(e) ? Wi(e[0]) : "length" in n) ? [e] : fi(e),
			v,
			T,
			C,
			S,
			O,
			E,
			L,
			N;
		if (
			((o._targets = M.length
				? pa(M)
				: qr(
						"GSAP target " + e + " not found. https://gsap.com",
						!ni.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = l),
			g || h || cs(c) || cs(f))
		) {
			if (
				((n = o.vars),
				(v = o.timeline =
					new Le({
						data: "nested",
						defaults: p || {},
						targets: x && x.data === "nested" ? x.vars.targets : M,
					})),
				v.kill(),
				(v.parent = v._dp = Fi(o)),
				(v._start = 0),
				h || cs(c) || cs(f))
			) {
				if (((S = M.length), (L = h && ru(h)), Li(h)))
					for (O in h) ~xu.indexOf(O) && (N || (N = {}), (N[O] = h[O]));
				for (T = 0; T < S; T++)
					(C = Ys(n, vu)),
						(C.stagger = 0),
						m && (C.yoyoEase = m),
						N && kn(C, N),
						(E = M[T]),
						(C.duration = +Ar(c, Fi(o), T, E, M)),
						(C.delay = (+Ar(f, Fi(o), T, E, M) || 0) - o._delay),
						!h &&
							S === 1 &&
							C.delay &&
							((o._delay = f = C.delay), (o._start += f), (C.delay = 0)),
						v.to(E, C, L ? L(T, E, M) : 0),
						(v._ease = xt.none);
				v.duration() ? (c = f = 0) : (o.timeline = 0);
			} else if (g) {
				Er(hi(v.vars.defaults, { ease: "none" })),
					(v._ease = Sn(g.ease || n.ease || "none"));
				var D = 0,
					R,
					B,
					Y;
				if (De(g))
					g.forEach(function (H) {
						return v.to(M, H, ">");
					}),
						v.duration();
				else {
					C = {};
					for (O in g)
						O === "ease" || O === "easeEach" || af(O, g[O], C, g.easeEach);
					for (O in C)
						for (
							R = C[O].sort(function (H, X) {
								return H.t - X.t;
							}),
								D = 0,
								T = 0;
							T < R.length;
							T++
						)
							(B = R[T]),
								(Y = {
									ease: B.e,
									duration: ((B.t - (T ? R[T - 1].t : 0)) / 100) * c,
								}),
								(Y[O] = B.v),
								v.to(M, Y, D),
								(D += Y.duration);
					v.duration() < c && v.to({}, { duration: c - v.duration() });
				}
			}
			c || o.duration((c = v.duration()));
		} else o.timeline = 0;
		return (
			l === !0 && !aa && ((Qi = Fi(o)), Ht.killTweensOf(M), (Qi = 0)),
			Pi(x, Fi(o), r),
			n.reversed && o.reverse(),
			n.paused && o.paused(!0),
			(d ||
				(!c &&
					!g &&
					o._start === ce(x._time) &&
					Xe(d) &&
					Nc(Fi(o)) &&
					x.data !== "nested")) &&
				((o._tTime = -It), o.render(Math.max(0, -f) || 0)),
			_ && tu(Fi(o), _),
			o
		);
	}
	var i = t.prototype;
	return (
		(i.render = function (n, r, s) {
			var o = this._time,
				u = this._tDur,
				c = this._dur,
				f = n < 0,
				d = n > u - It && !f ? u : n < It ? 0 : n,
				h,
				l,
				g,
				p,
				_,
				m,
				x,
				M,
				v;
			if (!c) Bc(this, n, r, s);
			else if (
				d !== this._tTime ||
				!n ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((h = d), (M = this.timeline), this._repeat)) {
					if (((p = c + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(p * 100 + n, r, s);
					if (
						((h = ce(d % p)),
						d === u
							? ((g = this._repeat), (h = c))
							: ((g = ~~(d / p)),
								g && g === ce(d / p) && ((h = c), g--),
								h > c && (h = c)),
						(m = this._yoyo && g & 1),
						m && ((v = this._yEase), (h = c - h)),
						(_ = sr(this._tTime, p)),
						h === o && !s && this._initted && g === _)
					)
						return (this._tTime = d), this;
					g !== _ &&
						(M && this._yEase && gu(M, m),
						this.vars.repeatRefresh &&
							!m &&
							!this._lock &&
							this._time !== p &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(ce(p * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (eu(this, f ? n : h, s, r, d)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && g !== _))
						return this;
					if (c !== this._dur) return this.render(n, r, s);
				}
				if (
					((this._tTime = d),
					(this._time = h),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = x = (v || this._ease)(h / c)),
					this._from && (this.ratio = x = 1 - x),
					h && !o && !r && !g && (ii(this, "onStart"), this._tTime !== d))
				)
					return this;
				for (l = this._pt; l; ) l.r(x, l.d), (l = l._next);
				(M && M.render(n < 0 ? n : M._dur * M._ease(h / this._dur), r, s)) ||
					(this._startAt && (this._zTime = n)),
					this._onUpdate &&
						!r &&
						(f && Lo(this, n, r, s), ii(this, "onUpdate")),
					this._repeat &&
						g !== _ &&
						this.vars.onRepeat &&
						!r &&
						this.parent &&
						ii(this, "onRepeat"),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(f && !this._onUpdate && Lo(this, n, !0, !0),
						(n || !c) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							an(this, 1),
						!r &&
							!(f && !o) &&
							(d || o || m) &&
							(ii(this, d === u ? "onComplete" : "onReverseComplete", !0),
							this._prom && !(d < u && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(i.targets = function () {
			return this._targets;
		}),
		(i.invalidate = function (n) {
			return (
				(!n || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(n),
				a.prototype.invalidate.call(this, n)
			);
		}),
		(i.resetTo = function (n, r, s, o, u) {
			jr || Je.wake(), this._ts || this.play();
			var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				f;
			return (
				this._initted || _a(this, c),
				(f = this._ease(c / this._dur)),
				sf(this, n, r, s, o, f, c, u)
					? this.resetTo(n, r, s, o, 1)
					: (to(this, 0),
						this.parent ||
							Zl(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(i.kill = function (n, r) {
			if ((r === void 0 && (r = "all"), !n && (!r || r === "all")))
				return (this._lazy = this._pt = 0), this.parent ? xr(this) : this;
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(n, r, Qi && Qi.vars.overwrite !== !0)
						._first || xr(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						or(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				u = n ? fi(n) : o,
				c = this._ptLookup,
				f = this._pt,
				d,
				h,
				l,
				g,
				p,
				_,
				m;
			if ((!r || r === "all") && Ic(o, u))
				return r === "all" && (this._pt = 0), xr(this);
			for (
				d = this._op = this._op || [],
					r !== "all" &&
						(fe(r) &&
							((p = {}),
							$e(r, function (x) {
								return (p[x] = 1);
							}),
							(r = p)),
						(r = of(o, r))),
					m = o.length;
				m--;

			)
				if (~u.indexOf(o[m])) {
					(h = c[m]),
						r === "all"
							? ((d[m] = r), (g = h), (l = {}))
							: ((l = d[m] = d[m] || {}), (g = r));
					for (p in g)
						(_ = h && h[p]),
							_ &&
								((!("kill" in _.d) || _.d.kill(p) === !0) && Zs(this, _, "_pt"),
								delete h[p]),
							l !== "all" && (l[p] = 1);
				}
			return this._initted && !this._pt && f && xr(this), this;
		}),
		(t.to = function (n, r) {
			return new t(n, r, arguments[2]);
		}),
		(t.from = function (n, r) {
			return kr(1, arguments);
		}),
		(t.delayedCall = function (n, r, s, o) {
			return new t(r, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: n,
				onComplete: r,
				onReverseComplete: r,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: o,
			});
		}),
		(t.fromTo = function (n, r, s) {
			return kr(2, arguments);
		}),
		(t.set = function (n, r) {
			return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(n, r);
		}),
		(t.killTweensOf = function (n, r, s) {
			return Ht.killTweensOf(n, r, s);
		}),
		t
	);
})(Kr);
hi(ee.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
$e("staggerTo,staggerFrom,staggerFromTo", function (a) {
	ee[a] = function () {
		var t = new Le(),
			i = Io.call(arguments, 0);
		return i.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, i);
	};
});
var ma = function (t, i, e) {
		return (t[i] = e);
	},
	wu = function (t, i, e) {
		return t[i](e);
	},
	lf = function (t, i, e, n) {
		return t[i](n.fp, e);
	},
	uf = function (t, i, e) {
		return t.setAttribute(i, e);
	},
	ya = function (t, i) {
		return Gt(t[i]) ? wu : la(t[i]) && t.setAttribute ? uf : ma;
	},
	bu = function (t, i) {
		return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
	},
	cf = function (t, i) {
		return i.set(i.t, i.p, !!(i.s + i.c * t), i);
	},
	Tu = function (t, i) {
		var e = i._pt,
			n = "";
		if (!t && i.b) n = i.b;
		else if (t === 1 && i.e) n = i.e;
		else {
			for (; e; )
				(n =
					e.p +
					(e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
					n),
					(e = e._next);
			n += i.c;
		}
		i.set(i.t, i.p, n, i);
	},
	xa = function (t, i) {
		for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
	},
	ff = function (t, i, e, n) {
		for (var r = this._pt, s; r; )
			(s = r._next), r.p === n && r.modifier(t, i, e), (r = s);
	},
	df = function (t) {
		for (var i = this._pt, e, n; i; )
			(n = i._next),
				(i.p === t && !i.op) || i.op === t
					? Zs(this, i, "_pt")
					: i.dep || (e = 1),
				(i = n);
		return !e;
	},
	hf = function (t, i, e, n) {
		n.mSet(t, i, n.m.call(n.tween, e, n.mt), n);
	},
	Su = function (t) {
		for (var i = t._pt, e, n, r, s; i; ) {
			for (e = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
			(i._prev = n ? n._prev : s) ? (i._prev._next = i) : (r = i),
				(i._next = n) ? (n._prev = i) : (s = i),
				(i = e);
		}
		t._pt = r;
	},
	He = (function () {
		function a(i, e, n, r, s, o, u, c, f) {
			(this.t = e),
				(this.s = r),
				(this.c = s),
				(this.p = n),
				(this.r = o || bu),
				(this.d = u || this),
				(this.set = c || ma),
				(this.pr = f || 0),
				(this._next = i),
				i && (i._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (e, n, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = hf),
					(this.m = e),
					(this.mt = r),
					(this.tween = n);
			}),
			a
		);
	})();
$e(
	ha +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (da[a] = 1);
	},
);
ri.TweenMax = ri.TweenLite = ee;
ri.TimelineLite = ri.TimelineMax = Le;
Ht = new Le({
	sortChildren: !1,
	defaults: rr,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
ni.stringFilter = hu;
var Mn = [],
	Os = {},
	pf = [],
	Ua = 0,
	gf = 0,
	uo = function (t) {
		return (Os[t] || pf).map(function (i) {
			return i();
		});
	},
	Bo = function () {
		var t = Date.now(),
			i = [];
		t - Ua > 2 &&
			(uo("matchMediaInit"),
			Mn.forEach(function (e) {
				var n = e.queries,
					r = e.conditions,
					s,
					o,
					u,
					c;
				for (o in n)
					(s = Di.matchMedia(n[o]).matches),
						s && (u = 1),
						s !== r[o] && ((r[o] = s), (c = 1));
				c && (e.revert(), u && i.push(e));
			}),
			uo("matchMediaRevert"),
			i.forEach(function (e) {
				return e.onMatch(e, function (n) {
					return e.add(null, n);
				});
			}),
			(Ua = t),
			uo("matchMedia"));
	},
	Mu = (function () {
		function a(i, e) {
			(this.selector = e && Fo(e)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = gf++),
				i && this.add(i);
		}
		var t = a.prototype;
		return (
			(t.add = function (e, n, r) {
				Gt(e) && ((r = n), (n = e), (e = Gt));
				var s = this,
					o = function () {
						var c = zt,
							f = s.selector,
							d;
						return (
							c && c !== s && c.data.push(s),
							r && (s.selector = Fo(r)),
							(zt = s),
							(d = n.apply(s, arguments)),
							Gt(d) && s._r.push(d),
							(zt = c),
							(s.selector = f),
							(s.isReverted = !1),
							d
						);
					};
				return (
					(s.last = o),
					e === Gt
						? o(s, function (u) {
								return s.add(null, u);
							})
						: e
							? (s[e] = o)
							: o
				);
			}),
			(t.ignore = function (e) {
				var n = zt;
				(zt = null), e(this), (zt = n);
			}),
			(t.getTweens = function () {
				var e = [];
				return (
					this.data.forEach(function (n) {
						return n instanceof a
							? e.push.apply(e, n.getTweens())
							: n instanceof ee &&
									!(n.parent && n.parent.data === "nested") &&
									e.push(n);
					}),
					e
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (e, n) {
				var r = this;
				if (
					(e
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
										.sort(function (f, d) {
											return d.g - f.g || -1 / 0;
										})
										.forEach(function (f) {
											return f.t.revert(e);
										}),
										u = r.data.length;
									u--;

								)
									(c = r.data[u]),
										c instanceof Le
											? c.data !== "nested" &&
												(c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
											: !(c instanceof ee) && c.revert && c.revert(e);
								r._r.forEach(function (f) {
									return f(e, r);
								}),
									(r.isReverted = !0);
							})()
						: this.data.forEach(function (o) {
								return o.kill && o.kill();
							}),
					this.clear(),
					n)
				)
					for (var s = Mn.length; s--; )
						Mn[s].id === this.id && Mn.splice(s, 1);
			}),
			(t.revert = function (e) {
				this.kill(e || {});
			}),
			a
		);
	})(),
	_f = (function () {
		function a(i) {
			(this.contexts = []), (this.scope = i), zt && zt.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (e, n, r) {
				Li(e) || (e = { matches: e });
				var s = new Mu(0, r || this.scope),
					o = (s.conditions = {}),
					u,
					c,
					f;
				zt && !s.selector && (s.selector = zt.selector),
					this.contexts.push(s),
					(n = s.add("onMatch", n)),
					(s.queries = e);
				for (c in e)
					c === "all"
						? (f = 1)
						: ((u = Di.matchMedia(e[c])),
							u &&
								(Mn.indexOf(s) < 0 && Mn.push(s),
								(o[c] = u.matches) && (f = 1),
								u.addListener
									? u.addListener(Bo)
									: u.addEventListener("change", Bo)));
				return (
					f &&
						n(s, function (d) {
							return s.add(null, d);
						}),
					this
				);
			}),
			(t.revert = function (e) {
				this.kill(e || {});
			}),
			(t.kill = function (e) {
				this.contexts.forEach(function (n) {
					return n.kill(e, !0);
				});
			}),
			a
		);
	})(),
	$s = {
		registerPlugin: function () {
			for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
				i[e] = arguments[e];
			i.forEach(function (n) {
				return cu(n);
			});
		},
		timeline: function (t) {
			return new Le(t);
		},
		getTweensOf: function (t, i) {
			return Ht.getTweensOf(t, i);
		},
		getProperty: function (t, i, e, n) {
			fe(t) && (t = fi(t)[0]);
			var r = bn(t || {}).get,
				s = e ? Ql : Kl;
			return (
				e === "native" && (e = ""),
				t &&
					(i
						? s(((Ze[i] && Ze[i].get) || r)(t, i, e, n))
						: function (o, u, c) {
								return s(((Ze[o] && Ze[o].get) || r)(t, o, u, c));
							})
			);
		},
		quickSetter: function (t, i, e) {
			if (((t = fi(t)), t.length > 1)) {
				var n = t.map(function (f) {
						return We.quickSetter(f, i, e);
					}),
					r = n.length;
				return function (f) {
					for (var d = r; d--; ) n[d](f);
				};
			}
			t = t[0] || {};
			var s = Ze[i],
				o = bn(t),
				u = (o.harness && (o.harness.aliases || {})[i]) || i,
				c = s
					? function (f) {
							var d = new s();
							(Un._pt = 0),
								d.init(t, e ? f + e : f, Un, 0, [t]),
								d.render(1, d),
								Un._pt && xa(1, Un);
						}
					: o.set(t, u);
			return s
				? c
				: function (f) {
						return c(t, u, e ? f + e : f, o, 1);
					};
		},
		quickTo: function (t, i, e) {
			var n,
				r = We.to(
					t,
					kn(((n = {}), (n[i] = "+=0.1"), (n.paused = !0), n), e || {}),
				),
				s = function (u, c, f) {
					return r.resetTo(i, u, c, f);
				};
			return (s.tween = r), s;
		},
		isTweening: function (t) {
			return Ht.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = Sn(t.ease, rr.ease)), $a(rr, t || {});
		},
		config: function (t) {
			return $a(ni, t || {});
		},
		registerEffect: function (t) {
			var i = t.name,
				e = t.effect,
				n = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(n || "").split(",").forEach(function (o) {
				return (
					o && !Ze[o] && !ri[o] && qr(i + " effect requires " + o + " plugin.")
				);
			}),
				(so[i] = function (o, u, c) {
					return e(fi(o), hi(u || {}, r), c);
				}),
				s &&
					(Le.prototype[i] = function (o, u, c) {
						return this.add(so[i](o, Li(u) ? u : (c = u) && {}, this), c);
					});
		},
		registerEase: function (t, i) {
			xt[t] = Sn(i);
		},
		parseEase: function (t, i) {
			return arguments.length ? Sn(t, i) : xt;
		},
		getById: function (t) {
			return Ht.getById(t);
		},
		exportRoot: function (t, i) {
			t === void 0 && (t = {});
			var e = new Le(t),
				n,
				r;
			for (
				e.smoothChildTiming = Xe(t.smoothChildTiming),
					Ht.remove(e),
					e._dp = 0,
					e._time = e._tTime = Ht._time,
					n = Ht._first;
				n;

			)
				(r = n._next),
					(i ||
						!(
							!n._dur &&
							n instanceof ee &&
							n.vars.onComplete === n._targets[0]
						)) &&
						Pi(e, n, n._start - n._delay),
					(n = r);
			return Pi(Ht, e, 0), e;
		},
		context: function (t, i) {
			return t ? new Mu(t, i) : zt;
		},
		matchMedia: function (t) {
			return new _f(t);
		},
		matchMediaRefresh: function () {
			return (
				Mn.forEach(function (t) {
					var i = t.conditions,
						e,
						n;
					for (n in i) i[n] && ((i[n] = !1), (e = 1));
					e && t.revert();
				}) || Bo()
			);
		},
		addEventListener: function (t, i) {
			var e = Os[t] || (Os[t] = []);
			~e.indexOf(i) || e.push(i);
		},
		removeEventListener: function (t, i) {
			var e = Os[t],
				n = e && e.indexOf(i);
			n >= 0 && e.splice(n, 1);
		},
		utils: {
			wrap: Uc,
			wrapYoyo: Gc,
			distribute: ru,
			random: ou,
			snap: su,
			normalize: qc,
			getUnit: Se,
			clamp: $c,
			splitColor: fu,
			toArray: fi,
			selector: Fo,
			mapRange: lu,
			pipe: Vc,
			unitize: Wc,
			interpolate: jc,
			shuffle: nu,
		},
		install: Wl,
		effects: so,
		ticker: Je,
		updateRoot: Le.updateRoot,
		plugins: Ze,
		globalTimeline: Ht,
		core: {
			PropTween: He,
			globals: ql,
			Tween: ee,
			Timeline: Le,
			Animation: Kr,
			getCache: bn,
			_removeLinkedListItem: Zs,
			reverting: function () {
				return Me;
			},
			context: function (t) {
				return t && zt && (zt.data.push(t), (t._ctx = zt)), zt;
			},
			suppressOverwrites: function (t) {
				return (aa = t);
			},
		},
	};
$e("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return ($s[a] = ee[a]);
});
Je.add(Le.updateRoot);
Un = $s.to({}, { duration: 0 });
var mf = function (t, i) {
		for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
			e = e._next;
		return e;
	},
	yf = function (t, i) {
		var e = t._targets,
			n,
			r,
			s;
		for (n in i)
			for (r = e.length; r--; )
				(s = t._ptLookup[r][n]),
					s &&
						(s = s.d) &&
						(s._pt && (s = mf(s, n)),
						s && s.modifier && s.modifier(i[n], t, e[r], n));
	},
	co = function (t, i) {
		return {
			name: t,
			rawVars: 1,
			init: function (n, r, s) {
				s._onInit = function (o) {
					var u, c;
					if (
						(fe(r) &&
							((u = {}),
							$e(r, function (f) {
								return (u[f] = 1);
							}),
							(r = u)),
						i)
					) {
						u = {};
						for (c in r) u[c] = i(r[c]);
						r = u;
					}
					yf(o, r);
				};
			},
		};
	},
	We =
		$s.registerPlugin(
			{
				name: "attr",
				init: function (t, i, e, n, r) {
					var s, o, u;
					this.tween = e;
					for (s in i)
						(u = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(u || 0) + "",
								i[s],
								n,
								r,
								0,
								0,
								s,
							)),
							(o.op = s),
							(o.b = u),
							this._props.push(s);
				},
				render: function (t, i) {
					for (var e = i._pt; e; )
						Me ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next);
				},
			},
			{
				name: "endArray",
				init: function (t, i) {
					for (var e = i.length; e--; )
						this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
				},
			},
			co("roundProps", No),
			co("modifiers"),
			co("snap", su),
		) || $s;
ee.version = Le.version = We.version = "3.12.5";
Vl = 1;
ua() && ar();
xt.Power0;
xt.Power1;
xt.Power2;
xt.Power3;
xt.Power4;
xt.Linear;
xt.Quad;
xt.Cubic;
xt.Quart;
xt.Quint;
xt.Strong;
xt.Elastic;
xt.Back;
xt.SteppedEase;
xt.Bounce;
xt.Sine;
xt.Expo;
xt.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ga,
	Zi,
	Kn,
	va,
	vn,
	ja,
	wa,
	xf = function () {
		return typeof window < "u";
	},
	qi = {},
	_n = 180 / Math.PI,
	Qn = Math.PI / 180,
	Bn = Math.atan2,
	Ka = 1e8,
	ba = /([A-Z])/g,
	vf = /(left|right|width|margin|padding|x)/i,
	wf = /[\s,\(]\S/,
	Ci = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	Yo = function (t, i) {
		return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
	},
	bf = function (t, i) {
		return i.set(
			i.t,
			i.p,
			t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
			i,
		);
	},
	Tf = function (t, i) {
		return i.set(
			i.t,
			i.p,
			t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
			i,
		);
	},
	Sf = function (t, i) {
		var e = i.s + i.c * t;
		i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
	},
	Du = function (t, i) {
		return i.set(i.t, i.p, t ? i.e : i.b, i);
	},
	Ou = function (t, i) {
		return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
	},
	Mf = function (t, i, e) {
		return (t.style[i] = e);
	},
	Df = function (t, i, e) {
		return t.style.setProperty(i, e);
	},
	Of = function (t, i, e) {
		return (t._gsap[i] = e);
	},
	Pf = function (t, i, e) {
		return (t._gsap.scaleX = t._gsap.scaleY = e);
	},
	Cf = function (t, i, e, n, r) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = e), s.renderTransform(r, s);
	},
	Ef = function (t, i, e, n, r) {
		var s = t._gsap;
		(s[i] = e), s.renderTransform(r, s);
	},
	Vt = "transform",
	Ve = Vt + "Origin",
	kf = function a(t, i) {
		var e = this,
			n = this.target,
			r = n.style,
			s = n._gsap;
		if (t in qi && r) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = Ci[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (e.tfm[o] = Ni(n, o));
							})
						: (this.tfm[t] = s.x ? s[t] : Ni(n, t)),
					t === Ve && (this.tfm.zOrigin = s.zOrigin);
			else
				return Ci.transform.split(",").forEach(function (o) {
					return a.call(e, o, i);
				});
			if (this.props.indexOf(Vt) >= 0) return;
			s.svg &&
				((this.svgo = n.getAttribute("data-svg-origin")),
				this.props.push(Ve, i, "")),
				(t = Vt);
		}
		(r || i) && this.props.push(t, i, r[t]);
	},
	Pu = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Af = function () {
		var t = this.props,
			i = this.target,
			e = i.style,
			n = i._gsap,
			r,
			s;
		for (r = 0; r < t.length; r += 3)
			t[r + 1]
				? (i[t[r]] = t[r + 2])
				: t[r + 2]
					? (e[t[r]] = t[r + 2])
					: e.removeProperty(
							t[r].substr(0, 2) === "--"
								? t[r]
								: t[r].replace(ba, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) n[s] = this.tfm[s];
			n.svg &&
				(n.renderTransform(),
				i.setAttribute("data-svg-origin", this.svgo || "")),
				(r = wa()),
				(!r || !r.isStart) &&
					!e[Vt] &&
					(Pu(e),
					n.zOrigin &&
						e[Ve] &&
						((e[Ve] += " " + n.zOrigin + "px"),
						(n.zOrigin = 0),
						n.renderTransform()),
					(n.uncache = 1));
		}
	},
	Cu = function (t, i) {
		var e = { target: t, props: [], revert: Af, save: kf };
		return (
			t._gsap || We.core.getCache(t),
			i &&
				i.split(",").forEach(function (n) {
					return e.save(n);
				}),
			e
		);
	},
	Eu,
	Xo = function (t, i) {
		var e = Zi.createElementNS
			? Zi.createElementNS(
					(i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Zi.createElement(t);
		return e && e.style ? e : Zi.createElement(t);
	},
	ki = function a(t, i, e) {
		var n = getComputedStyle(t);
		return (
			n[i] ||
			n.getPropertyValue(i.replace(ba, "-$1").toLowerCase()) ||
			n.getPropertyValue(i) ||
			(!e && a(t, lr(i) || i, 1)) ||
			""
		);
	},
	Qa = "O,Moz,ms,Ms,Webkit".split(","),
	lr = function (t, i, e) {
		var n = i || vn,
			r = n.style,
			s = 5;
		if (t in r && !e) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(Qa[s] + t in r);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Qa[s] : "") + t;
	},
	$o = function () {
		xf() &&
			window.document &&
			((Ga = window),
			(Zi = Ga.document),
			(Kn = Zi.documentElement),
			(vn = Xo("div") || { style: {} }),
			Xo("div"),
			(Vt = lr(Vt)),
			(Ve = Vt + "Origin"),
			(vn.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Eu = !!lr("perspective")),
			(wa = We.core.reverting),
			(va = 1));
	},
	fo = function a(t) {
		var i = Xo(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			e = this.parentNode,
			n = this.nextSibling,
			r = this.style.cssText,
			s;
		if (
			(Kn.appendChild(i),
			i.appendChild(this),
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
			e && (n ? e.insertBefore(this, n) : e.appendChild(this)),
			Kn.removeChild(i),
			(this.style.cssText = r),
			s
		);
	},
	Za = function (t, i) {
		for (var e = i.length; e--; )
			if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
	},
	ku = function (t) {
		var i;
		try {
			i = t.getBBox();
		} catch {
			i = fo.call(t, !0);
		}
		return (
			(i && (i.width || i.height)) || t.getBBox === fo || (i = fo.call(t, !0)),
			i && !i.width && !i.x && !i.y
				? {
						x: +Za(t, ["x", "cx", "x1"]) || 0,
						y: +Za(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: i
		);
	},
	Au = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ku(t));
	},
	An = function (t, i) {
		if (i) {
			var e = t.style,
				n;
			i in qi && i !== Ve && (i = Vt),
				e.removeProperty
					? ((n = i.substr(0, 2)),
						(n === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
						e.removeProperty(
							n === "--" ? i : i.replace(ba, "-$1").toLowerCase(),
						))
					: e.removeAttribute(i);
		}
	},
	Ji = function (t, i, e, n, r, s) {
		var o = new He(t._pt, i, e, 0, 1, s ? Ou : Du);
		return (t._pt = o), (o.b = n), (o.e = r), t._props.push(e), o;
	},
	Ja = { deg: 1, rad: 1, turn: 1 },
	Lf = { grid: 1, flex: 1 },
	ln = function a(t, i, e, n) {
		var r = parseFloat(e) || 0,
			s = (e + "").trim().substr((r + "").length) || "px",
			o = vn.style,
			u = vf.test(i),
			c = t.tagName.toLowerCase() === "svg",
			f = (c ? "client" : "offset") + (u ? "Width" : "Height"),
			d = 100,
			h = n === "px",
			l = n === "%",
			g,
			p,
			_,
			m;
		if (n === s || !r || Ja[n] || Ja[s]) return r;
		if (
			(s !== "px" && !h && (r = a(t, i, e, "px")),
			(m = t.getCTM && Au(t)),
			(l || s === "%") && (qi[i] || ~i.indexOf("adius")))
		)
			return (
				(g = m ? t.getBBox()[u ? "width" : "height"] : t[f]),
				Kt(l ? (r / g) * d : (r / 100) * g)
			);
		if (
			((o[u ? "width" : "height"] = d + (h ? s : n)),
			(p =
				~i.indexOf("adius") || (n === "em" && t.appendChild && !c)
					? t
					: t.parentNode),
			m && (p = (t.ownerSVGElement || {}).parentNode),
			(!p || p === Zi || !p.appendChild) && (p = Zi.body),
			(_ = p._gsap),
			_ && l && _.width && u && _.time === Je.time && !_.uncache)
		)
			return Kt((r / _.width) * d);
		if (l && (i === "height" || i === "width")) {
			var x = t.style[i];
			(t.style[i] = d + n), (g = t[f]), x ? (t.style[i] = x) : An(t, i);
		} else
			(l || s === "%") &&
				!Lf[ki(p, "display")] &&
				(o.position = ki(t, "position")),
				p === t && (o.position = "static"),
				p.appendChild(vn),
				(g = vn[f]),
				p.removeChild(vn),
				(o.position = "absolute");
		return (
			u && l && ((_ = bn(p)), (_.time = Je.time), (_.width = p[f])),
			Kt(h ? (g * r) / d : g && r ? (d / g) * r : 0)
		);
	},
	Ni = function (t, i, e, n) {
		var r;
		return (
			va || $o(),
			i in Ci &&
				i !== "transform" &&
				((i = Ci[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
			qi[i] && i !== "transform"
				? ((r = Zr(t, n)),
					(r =
						i !== "transformOrigin"
							? r[i]
							: r.svg
								? r.origin
								: Vs(ki(t, Ve)) + " " + r.zOrigin + "px"))
				: ((r = t.style[i]),
					(!r || r === "auto" || n || ~(r + "").indexOf("calc(")) &&
						(r =
							(Hs[i] && Hs[i](t, i, e)) ||
							ki(t, i) ||
							Gl(t, i) ||
							(i === "opacity" ? 1 : 0))),
			e && !~(r + "").trim().indexOf(" ") ? ln(t, i, r, e) + e : r
		);
	},
	Rf = function (t, i, e, n) {
		if (!e || e === "none") {
			var r = lr(i, t, 1),
				s = r && ki(t, r, 1);
			s && s !== e
				? ((i = r), (e = s))
				: i === "borderColor" && (e = ki(t, "borderTopColor"));
		}
		var o = new He(this._pt, t.style, i, 0, 1, Tu),
			u = 0,
			c = 0,
			f,
			d,
			h,
			l,
			g,
			p,
			_,
			m,
			x,
			M,
			v,
			T;
		if (
			((o.b = e),
			(o.e = n),
			(e += ""),
			(n += ""),
			n === "auto" &&
				((p = t.style[i]),
				(t.style[i] = n),
				(n = ki(t, i) || n),
				p ? (t.style[i] = p) : An(t, i)),
			(f = [e, n]),
			hu(f),
			(e = f[0]),
			(n = f[1]),
			(h = e.match(qn) || []),
			(T = n.match(qn) || []),
			T.length)
		) {
			for (; (d = qn.exec(n)); )
				(_ = d[0]),
					(x = n.substring(u, d.index)),
					g
						? (g = (g + 1) % 5)
						: (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1),
					_ !== (p = h[c++] || "") &&
						((l = parseFloat(p) || 0),
						(v = p.substr((l + "").length)),
						_.charAt(1) === "=" && (_ = jn(l, _) + v),
						(m = parseFloat(_)),
						(M = _.substr((m + "").length)),
						(u = qn.lastIndex - M.length),
						M ||
							((M = M || ni.units[i] || v),
							u === n.length && ((n += M), (o.e += M))),
						v !== M && (l = ln(t, i, p, M) || 0),
						(o._pt = {
							_next: o._pt,
							p: x || c === 1 ? x : ",",
							s: l,
							c: m - l,
							m: (g && g < 4) || i === "zIndex" ? Math.round : 0,
						}));
			o.c = u < n.length ? n.substring(u, n.length) : "";
		} else o.r = i === "display" && n === "none" ? Ou : Du;
		return $l.test(n) && (o.e = 0), (this._pt = o), o;
	},
	tl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	If = function (t) {
		var i = t.split(" "),
			e = i[0],
			n = i[1] || "50%";
		return (
			(e === "top" || e === "bottom" || n === "left" || n === "right") &&
				((t = e), (e = n), (n = t)),
			(i[0] = tl[e] || e),
			(i[1] = tl[n] || n),
			i.join(" ")
		);
	},
	Ff = function (t, i) {
		if (i.tween && i.tween._time === i.tween._dur) {
			var e = i.t,
				n = e.style,
				r = i.u,
				s = e._gsap,
				o,
				u,
				c;
			if (r === "all" || r === !0) (n.cssText = ""), (u = 1);
			else
				for (r = r.split(","), c = r.length; --c > -1; )
					(o = r[c]),
						qi[o] && ((u = 1), (o = o === "transformOrigin" ? Ve : Vt)),
						An(e, o);
			u &&
				(An(e, Vt),
				s &&
					(s.svg && e.removeAttribute("transform"),
					Zr(e, 1),
					(s.uncache = 1),
					Pu(n)));
		}
	},
	Hs = {
		clearProps: function (t, i, e, n, r) {
			if (r.data !== "isFromStart") {
				var s = (t._pt = new He(t._pt, i, e, 0, 0, Ff));
				return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(e), 1;
			}
		},
	},
	Qr = [1, 0, 0, 1, 0, 0],
	Lu = {},
	Ru = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	el = function (t) {
		var i = ki(t, Vt);
		return Ru(i) ? Qr : i.substr(7).match(Xl).map(Kt);
	},
	Ta = function (t, i) {
		var e = t._gsap || bn(t),
			n = t.style,
			r = el(t),
			s,
			o,
			u,
			c;
		return e.svg && t.getAttribute("transform")
			? ((u = t.transform.baseVal.consolidate().matrix),
				(r = [u.a, u.b, u.c, u.d, u.e, u.f]),
				r.join(",") === "1,0,0,1,0,0" ? Qr : r)
			: (r === Qr &&
					!t.offsetParent &&
					t !== Kn &&
					!e.svg &&
					((u = n.display),
					(n.display = "block"),
					(s = t.parentNode),
					(!s || !t.offsetParent) &&
						((c = 1), (o = t.nextElementSibling), Kn.appendChild(t)),
					(r = el(t)),
					u ? (n.display = u) : An(t, "display"),
					c &&
						(o
							? s.insertBefore(t, o)
							: s
								? s.appendChild(t)
								: Kn.removeChild(t))),
				i && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
	},
	Ho = function (t, i, e, n, r, s) {
		var o = t._gsap,
			u = r || Ta(t, !0),
			c = o.xOrigin || 0,
			f = o.yOrigin || 0,
			d = o.xOffset || 0,
			h = o.yOffset || 0,
			l = u[0],
			g = u[1],
			p = u[2],
			_ = u[3],
			m = u[4],
			x = u[5],
			M = i.split(" "),
			v = parseFloat(M[0]) || 0,
			T = parseFloat(M[1]) || 0,
			C,
			S,
			O,
			E;
		e
			? u !== Qr &&
				(S = l * _ - g * p) &&
				((O = v * (_ / S) + T * (-p / S) + (p * x - _ * m) / S),
				(E = v * (-g / S) + T * (l / S) - (l * x - g * m) / S),
				(v = O),
				(T = E))
			: ((C = ku(t)),
				(v = C.x + (~M[0].indexOf("%") ? (v / 100) * C.width : v)),
				(T = C.y + (~(M[1] || M[0]).indexOf("%") ? (T / 100) * C.height : T))),
			n || (n !== !1 && o.smooth)
				? ((m = v - c),
					(x = T - f),
					(o.xOffset = d + (m * l + x * p) - m),
					(o.yOffset = h + (m * g + x * _) - x))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = v),
			(o.yOrigin = T),
			(o.smooth = !!n),
			(o.origin = i),
			(o.originIsAbsolute = !!e),
			(t.style[Ve] = "0px 0px"),
			s &&
				(Ji(s, o, "xOrigin", c, v),
				Ji(s, o, "yOrigin", f, T),
				Ji(s, o, "xOffset", d, o.xOffset),
				Ji(s, o, "yOffset", h, o.yOffset)),
			t.setAttribute("data-svg-origin", v + " " + T);
	},
	Zr = function (t, i) {
		var e = t._gsap || new mu(t);
		if ("x" in e && !i && !e.uncache) return e;
		var n = t.style,
			r = e.scaleX < 0,
			s = "px",
			o = "deg",
			u = getComputedStyle(t),
			c = ki(t, Ve) || "0",
			f,
			d,
			h,
			l,
			g,
			p,
			_,
			m,
			x,
			M,
			v,
			T,
			C,
			S,
			O,
			E,
			L,
			N,
			D,
			R,
			B,
			Y,
			H,
			X,
			J,
			ut,
			b,
			j,
			nt,
			ct,
			tt,
			Pt;
		return (
			(f = d = h = p = _ = m = x = M = v = 0),
			(l = g = 1),
			(e.svg = !!(t.getCTM && Au(t))),
			u.translate &&
				((u.translate !== "none" ||
					u.scale !== "none" ||
					u.rotate !== "none") &&
					(n[Vt] =
						(u.translate !== "none"
							? "translate3d(" +
								(u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
						(u.scale !== "none"
							? "scale(" + u.scale.split(" ").join(",") + ") "
							: "") +
						(u[Vt] !== "none" ? u[Vt] : "")),
				(n.scale = n.rotate = n.translate = "none")),
			(S = Ta(t, e.svg)),
			e.svg &&
				(e.uncache
					? ((J = t.getBBox()),
						(c = e.xOrigin - J.x + "px " + (e.yOrigin - J.y) + "px"),
						(X = ""))
					: (X = !i && t.getAttribute("data-svg-origin")),
				Ho(t, X || c, !!X || e.originIsAbsolute, e.smooth !== !1, S)),
			(T = e.xOrigin || 0),
			(C = e.yOrigin || 0),
			S !== Qr &&
				((N = S[0]),
				(D = S[1]),
				(R = S[2]),
				(B = S[3]),
				(f = Y = S[4]),
				(d = H = S[5]),
				S.length === 6
					? ((l = Math.sqrt(N * N + D * D)),
						(g = Math.sqrt(B * B + R * R)),
						(p = N || D ? Bn(D, N) * _n : 0),
						(x = R || B ? Bn(R, B) * _n + p : 0),
						x && (g *= Math.abs(Math.cos(x * Qn))),
						e.svg && ((f -= T - (T * N + C * R)), (d -= C - (T * D + C * B))))
					: ((Pt = S[6]),
						(ct = S[7]),
						(b = S[8]),
						(j = S[9]),
						(nt = S[10]),
						(tt = S[11]),
						(f = S[12]),
						(d = S[13]),
						(h = S[14]),
						(O = Bn(Pt, nt)),
						(_ = O * _n),
						O &&
							((E = Math.cos(-O)),
							(L = Math.sin(-O)),
							(X = Y * E + b * L),
							(J = H * E + j * L),
							(ut = Pt * E + nt * L),
							(b = Y * -L + b * E),
							(j = H * -L + j * E),
							(nt = Pt * -L + nt * E),
							(tt = ct * -L + tt * E),
							(Y = X),
							(H = J),
							(Pt = ut)),
						(O = Bn(-R, nt)),
						(m = O * _n),
						O &&
							((E = Math.cos(-O)),
							(L = Math.sin(-O)),
							(X = N * E - b * L),
							(J = D * E - j * L),
							(ut = R * E - nt * L),
							(tt = B * L + tt * E),
							(N = X),
							(D = J),
							(R = ut)),
						(O = Bn(D, N)),
						(p = O * _n),
						O &&
							((E = Math.cos(O)),
							(L = Math.sin(O)),
							(X = N * E + D * L),
							(J = Y * E + H * L),
							(D = D * E - N * L),
							(H = H * E - Y * L),
							(N = X),
							(Y = J)),
						_ &&
							Math.abs(_) + Math.abs(p) > 359.9 &&
							((_ = p = 0), (m = 180 - m)),
						(l = Kt(Math.sqrt(N * N + D * D + R * R))),
						(g = Kt(Math.sqrt(H * H + Pt * Pt))),
						(O = Bn(Y, H)),
						(x = Math.abs(O) > 2e-4 ? O * _n : 0),
						(v = tt ? 1 / (tt < 0 ? -tt : tt) : 0)),
				e.svg &&
					((X = t.getAttribute("transform")),
					(e.forceCSS = t.setAttribute("transform", "") || !Ru(ki(t, Vt))),
					X && t.setAttribute("transform", X))),
			Math.abs(x) > 90 &&
				Math.abs(x) < 270 &&
				(r
					? ((l *= -1), (x += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
					: ((g *= -1), (x += x <= 0 ? 180 : -180))),
			(i = i || e.uncache),
			(e.x =
				f -
				((e.xPercent =
					f &&
					((!i && e.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
					? (t.offsetWidth * e.xPercent) / 100
					: 0) +
				s),
			(e.y =
				d -
				((e.yPercent =
					d &&
					((!i && e.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (t.offsetHeight * e.yPercent) / 100
					: 0) +
				s),
			(e.z = h + s),
			(e.scaleX = Kt(l)),
			(e.scaleY = Kt(g)),
			(e.rotation = Kt(p) + o),
			(e.rotationX = Kt(_) + o),
			(e.rotationY = Kt(m) + o),
			(e.skewX = x + o),
			(e.skewY = M + o),
			(e.transformPerspective = v + s),
			(e.zOrigin = parseFloat(c.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
				(n[Ve] = Vs(c)),
			(e.xOffset = e.yOffset = 0),
			(e.force3D = ni.force3D),
			(e.renderTransform = e.svg ? zf : Eu ? Iu : Nf),
			(e.uncache = 0),
			e
		);
	},
	Vs = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	ho = function (t, i, e) {
		var n = Se(i);
		return Kt(parseFloat(i) + parseFloat(ln(t, "x", e + "px", n))) + n;
	},
	Nf = function (t, i) {
		(i.z = "0px"),
			(i.rotationY = i.rotationX = "0deg"),
			(i.force3D = 0),
			Iu(t, i);
	},
	dn = "0deg",
	gr = "0px",
	hn = ") ",
	Iu = function (t, i) {
		var e = i || this,
			n = e.xPercent,
			r = e.yPercent,
			s = e.x,
			o = e.y,
			u = e.z,
			c = e.rotation,
			f = e.rotationY,
			d = e.rotationX,
			h = e.skewX,
			l = e.skewY,
			g = e.scaleX,
			p = e.scaleY,
			_ = e.transformPerspective,
			m = e.force3D,
			x = e.target,
			M = e.zOrigin,
			v = "",
			T = (m === "auto" && t && t !== 1) || m === !0;
		if (M && (d !== dn || f !== dn)) {
			var C = parseFloat(f) * Qn,
				S = Math.sin(C),
				O = Math.cos(C),
				E;
			(C = parseFloat(d) * Qn),
				(E = Math.cos(C)),
				(s = ho(x, s, S * E * -M)),
				(o = ho(x, o, -Math.sin(C) * -M)),
				(u = ho(x, u, O * E * -M + M));
		}
		_ !== gr && (v += "perspective(" + _ + hn),
			(n || r) && (v += "translate(" + n + "%, " + r + "%) "),
			(T || s !== gr || o !== gr || u !== gr) &&
				(v +=
					u !== gr || T
						? "translate3d(" + s + ", " + o + ", " + u + ") "
						: "translate(" + s + ", " + o + hn),
			c !== dn && (v += "rotate(" + c + hn),
			f !== dn && (v += "rotateY(" + f + hn),
			d !== dn && (v += "rotateX(" + d + hn),
			(h !== dn || l !== dn) && (v += "skew(" + h + ", " + l + hn),
			(g !== 1 || p !== 1) && (v += "scale(" + g + ", " + p + hn),
			(x.style[Vt] = v || "translate(0, 0)");
	},
	zf = function (t, i) {
		var e = i || this,
			n = e.xPercent,
			r = e.yPercent,
			s = e.x,
			o = e.y,
			u = e.rotation,
			c = e.skewX,
			f = e.skewY,
			d = e.scaleX,
			h = e.scaleY,
			l = e.target,
			g = e.xOrigin,
			p = e.yOrigin,
			_ = e.xOffset,
			m = e.yOffset,
			x = e.forceCSS,
			M = parseFloat(s),
			v = parseFloat(o),
			T,
			C,
			S,
			O,
			E;
		(u = parseFloat(u)),
			(c = parseFloat(c)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (c += f), (u += f)),
			u || c
				? ((u *= Qn),
					(c *= Qn),
					(T = Math.cos(u) * d),
					(C = Math.sin(u) * d),
					(S = Math.sin(u - c) * -h),
					(O = Math.cos(u - c) * h),
					c &&
						((f *= Qn),
						(E = Math.tan(c - f)),
						(E = Math.sqrt(1 + E * E)),
						(S *= E),
						(O *= E),
						f &&
							((E = Math.tan(f)),
							(E = Math.sqrt(1 + E * E)),
							(T *= E),
							(C *= E))),
					(T = Kt(T)),
					(C = Kt(C)),
					(S = Kt(S)),
					(O = Kt(O)))
				: ((T = d), (O = h), (C = S = 0)),
			((M && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
				((M = ln(l, "x", s, "px")), (v = ln(l, "y", o, "px"))),
			(g || p || _ || m) &&
				((M = Kt(M + g - (g * T + p * S) + _)),
				(v = Kt(v + p - (g * C + p * O) + m))),
			(n || r) &&
				((E = l.getBBox()),
				(M = Kt(M + (n / 100) * E.width)),
				(v = Kt(v + (r / 100) * E.height))),
			(E =
				"matrix(" + T + "," + C + "," + S + "," + O + "," + M + "," + v + ")"),
			l.setAttribute("transform", E),
			x && (l.style[Vt] = E);
	},
	Bf = function (t, i, e, n, r) {
		var s = 360,
			o = fe(r),
			u = parseFloat(r) * (o && ~r.indexOf("rad") ? _n : 1),
			c = u - n,
			f = n + c + "deg",
			d,
			h;
		return (
			o &&
				((d = r.split("_")[1]),
				d === "short" && ((c %= s), c !== c % (s / 2) && (c += c < 0 ? s : -s)),
				d === "cw" && c < 0
					? (c = ((c + s * Ka) % s) - ~~(c / s) * s)
					: d === "ccw" && c > 0 && (c = ((c - s * Ka) % s) - ~~(c / s) * s)),
			(t._pt = h = new He(t._pt, i, e, n, c, bf)),
			(h.e = f),
			(h.u = "deg"),
			t._props.push(e),
			h
		);
	},
	il = function (t, i) {
		for (var e in i) t[e] = i[e];
		return t;
	},
	Yf = function (t, i, e) {
		var n = il({}, e._gsap),
			r = "perspective,force3D,transformOrigin,svgOrigin",
			s = e.style,
			o,
			u,
			c,
			f,
			d,
			h,
			l,
			g;
		n.svg
			? ((c = e.getAttribute("transform")),
				e.setAttribute("transform", ""),
				(s[Vt] = i),
				(o = Zr(e, 1)),
				An(e, Vt),
				e.setAttribute("transform", c))
			: ((c = getComputedStyle(e)[Vt]),
				(s[Vt] = i),
				(o = Zr(e, 1)),
				(s[Vt] = c));
		for (u in qi)
			(c = n[u]),
				(f = o[u]),
				c !== f &&
					r.indexOf(u) < 0 &&
					((l = Se(c)),
					(g = Se(f)),
					(d = l !== g ? ln(e, u, c, g) : parseFloat(c)),
					(h = parseFloat(f)),
					(t._pt = new He(t._pt, o, u, d, h - d, Yo)),
					(t._pt.u = g || 0),
					t._props.push(u));
		il(o, n);
	};
$e("padding,margin,Width,Radius", function (a, t) {
	var i = "Top",
		e = "Right",
		n = "Bottom",
		r = "Left",
		s = (t < 3 ? [i, e, n, r] : [i + r, i + e, n + e, n + r]).map(function (o) {
			return t < 2 ? a + o : "border" + o + a;
		});
	Hs[t > 1 ? "border" + a : a] = function (o, u, c, f, d) {
		var h, l;
		if (arguments.length < 4)
			return (
				(h = s.map(function (g) {
					return Ni(o, g, c);
				})),
				(l = h.join(" ")),
				l.split(h[0]).length === 5 ? h[0] : l
			);
		(h = (f + "").split(" ")),
			(l = {}),
			s.forEach(function (g, p) {
				return (l[g] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
			}),
			o.init(u, l, d);
	};
});
var Fu = {
	name: "css",
	register: $o,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, i, e, n, r) {
		var s = this._props,
			o = t.style,
			u = e.vars.startAt,
			c,
			f,
			d,
			h,
			l,
			g,
			p,
			_,
			m,
			x,
			M,
			v,
			T,
			C,
			S,
			O;
		va || $o(),
			(this.styles = this.styles || Cu(t)),
			(O = this.styles.props),
			(this.tween = e);
		for (p in i)
			if (p !== "autoRound" && ((f = i[p]), !(Ze[p] && yu(p, i, e, n, t, r)))) {
				if (
					((l = typeof f),
					(g = Hs[p]),
					l === "function" && ((f = f.call(e, n, t, r)), (l = typeof f)),
					l === "string" && ~f.indexOf("random(") && (f = Gr(f)),
					g)
				)
					g(this, t, p, f, e) && (S = 1);
				else if (p.substr(0, 2) === "--")
					(c = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
						(f += ""),
						(sn.lastIndex = 0),
						sn.test(c) || ((_ = Se(c)), (m = Se(f))),
						m ? _ !== m && (c = ln(t, p, c, m) + m) : _ && (f += _),
						this.add(o, "setProperty", c, f, n, r, 0, 0, p),
						s.push(p),
						O.push(p, 0, o[p]);
				else if (l !== "undefined") {
					if (
						(u && p in u
							? ((c = typeof u[p] == "function" ? u[p].call(e, n, t, r) : u[p]),
								fe(c) && ~c.indexOf("random(") && (c = Gr(c)),
								Se(c + "") ||
									c === "auto" ||
									(c += ni.units[p] || Se(Ni(t, p)) || ""),
								(c + "").charAt(1) === "=" && (c = Ni(t, p)))
							: (c = Ni(t, p)),
						(h = parseFloat(c)),
						(x = l === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
						x && (f = f.substr(2)),
						(d = parseFloat(f)),
						p in Ci &&
							(p === "autoAlpha" &&
								(h === 1 && Ni(t, "visibility") === "hidden" && d && (h = 0),
								O.push("visibility", 0, o.visibility),
								Ji(
									this,
									o,
									"visibility",
									h ? "inherit" : "hidden",
									d ? "inherit" : "hidden",
									!d,
								)),
							p !== "scale" &&
								p !== "transform" &&
								((p = Ci[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
						(M = p in qi),
						M)
					) {
						if (
							(this.styles.save(p),
							v ||
								((T = t._gsap),
								(T.renderTransform && !i.parseTransform) ||
									Zr(t, i.parseTransform),
								(C = i.smoothOrigin !== !1 && T.smooth),
								(v = this._pt =
									new He(this._pt, o, Vt, 0, 1, T.renderTransform, T, 0, -1)),
								(v.dep = 1)),
							p === "scale")
						)
							(this._pt = new He(
								this._pt,
								T,
								"scaleY",
								T.scaleY,
								(x ? jn(T.scaleY, x + d) : d) - T.scaleY || 0,
								Yo,
							)),
								(this._pt.u = 0),
								s.push("scaleY", p),
								(p += "X");
						else if (p === "transformOrigin") {
							O.push(Ve, 0, o[Ve]),
								(f = If(f)),
								T.svg
									? Ho(t, f, 0, C, 0, this)
									: ((m = parseFloat(f.split(" ")[2]) || 0),
										m !== T.zOrigin && Ji(this, T, "zOrigin", T.zOrigin, m),
										Ji(this, o, p, Vs(c), Vs(f)));
							continue;
						} else if (p === "svgOrigin") {
							Ho(t, f, 1, C, 0, this);
							continue;
						} else if (p in Lu) {
							Bf(this, T, p, h, x ? jn(h, x + f) : f);
							continue;
						} else if (p === "smoothOrigin") {
							Ji(this, T, "smooth", T.smooth, f);
							continue;
						} else if (p === "force3D") {
							T[p] = f;
							continue;
						} else if (p === "transform") {
							Yf(this, f, t);
							continue;
						}
					} else p in o || (p = lr(p) || p);
					if (M || ((d || d === 0) && (h || h === 0) && !wf.test(f) && p in o))
						(_ = (c + "").substr((h + "").length)),
							d || (d = 0),
							(m = Se(f) || (p in ni.units ? ni.units[p] : _)),
							_ !== m && (h = ln(t, p, c, m)),
							(this._pt = new He(
								this._pt,
								M ? T : o,
								p,
								h,
								(x ? jn(h, x + d) : d) - h,
								!M && (m === "px" || p === "zIndex") && i.autoRound !== !1
									? Sf
									: Yo,
							)),
							(this._pt.u = m || 0),
							_ !== m && m !== "%" && ((this._pt.b = c), (this._pt.r = Tf));
					else if (p in o) Rf.call(this, t, p, c, x ? x + f : f);
					else if (p in t) this.add(t, p, c || t[p], x ? x + f : f, n, r);
					else if (p !== "parseTransform") {
						fa(p, f);
						continue;
					}
					M || (p in o ? O.push(p, 0, o[p]) : O.push(p, 1, c || t[p])),
						s.push(p);
				}
			}
		S && Su(this);
	},
	render: function (t, i) {
		if (i.tween._time || !wa())
			for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
		else i.styles.revert();
	},
	get: Ni,
	aliases: Ci,
	getSetter: function (t, i, e) {
		var n = Ci[i];
		return (
			n && n.indexOf(",") < 0 && (i = n),
			i in qi && i !== Ve && (t._gsap.x || Ni(t, "x"))
				? e && ja === e
					? i === "scale"
						? Pf
						: Of
					: (ja = e || {}) && (i === "scale" ? Cf : Ef)
				: t.style && !la(t.style[i])
					? Mf
					: ~i.indexOf("-")
						? Df
						: ya(t, i)
		);
	},
	core: { _removeProperty: An, _getMatrix: Ta },
};
We.utils.checkPrefix = lr;
We.core.getStyleSaver = Cu;
(function (a, t, i, e) {
	var n = $e(a + "," + t + "," + i, function (r) {
		qi[r] = 1;
	});
	$e(t, function (r) {
		(ni.units[r] = "deg"), (Lu[r] = 1);
	}),
		(Ci[n[13]] = a + "," + t),
		$e(e, function (r) {
			var s = r.split(":");
			Ci[s[1]] = n[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
$e(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		ni.units[a] = "px";
	},
);
We.registerPlugin(Fu);
var et = We.registerPlugin(Fu) || We;
et.core.Tween;
function nl(a, t) {
	for (var i = 0; i < t.length; i++) {
		var e = t[i];
		(e.enumerable = e.enumerable || !1),
			(e.configurable = !0),
			"value" in e && (e.writable = !0),
			Object.defineProperty(a, e.key, e);
	}
}
function Xf(a, t, i) {
	return t && nl(a.prototype, t), i && nl(a, i), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _e,
	Ps,
	ti,
	tn,
	en,
	Zn,
	Nu,
	mn,
	Lr,
	zu,
	Xi,
	gi,
	Bu,
	Yu = function () {
		return (
			_e ||
			(typeof window < "u" && (_e = window.gsap) && _e.registerPlugin && _e)
		);
	},
	Xu = 1,
	Gn = [],
	gt = [],
	Ai = [],
	Rr = Date.now,
	Vo = function (t, i) {
		return i;
	},
	$f = function () {
		var t = Lr.core,
			i = t.bridge || {},
			e = t._scrollers,
			n = t._proxies;
		e.push.apply(e, gt),
			n.push.apply(n, Ai),
			(gt = e),
			(Ai = n),
			(Vo = function (s, o) {
				return i[s](o);
			});
	},
	on = function (t, i) {
		return ~Ai.indexOf(t) && Ai[Ai.indexOf(t) + 1][i];
	},
	Ir = function (t) {
		return !!~zu.indexOf(t);
	},
	Ce = function (t, i, e, n, r) {
		return t.addEventListener(i, e, { passive: n !== !1, capture: !!r });
	},
	Pe = function (t, i, e, n) {
		return t.removeEventListener(i, e, !!n);
	},
	fs = "scrollLeft",
	ds = "scrollTop",
	Wo = function () {
		return (Xi && Xi.isPressed) || gt.cache++;
	},
	Ws = function (t, i) {
		var e = function n(r) {
			if (r || r === 0) {
				Xu && (ti.history.scrollRestoration = "manual");
				var s = Xi && Xi.isPressed;
				(r = n.v = Math.round(r) || (Xi && Xi.iOS ? 1 : 0)),
					t(r),
					(n.cacheID = gt.cache),
					s && Vo("ss", r);
			} else
				(i || gt.cache !== n.cacheID || Vo("ref")) &&
					((n.cacheID = gt.cache), (n.v = t()));
			return n.v + n.offset;
		};
		return (e.offset = 0), t && e;
	},
	Re = {
		s: fs,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: Ws(function (a) {
			return arguments.length
				? ti.scrollTo(a, oe.sc())
				: ti.pageXOffset || tn[fs] || en[fs] || Zn[fs] || 0;
		}),
	},
	oe = {
		s: ds,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Re,
		sc: Ws(function (a) {
			return arguments.length
				? ti.scrollTo(Re.sc(), a)
				: ti.pageYOffset || tn[ds] || en[ds] || Zn[ds] || 0;
		}),
	},
	Be = function (t, i) {
		return (
			((i && i._ctx && i._ctx.selector) || _e.utils.toArray)(t)[0] ||
			(typeof t == "string" && _e.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	un = function (t, i) {
		var e = i.s,
			n = i.sc;
		Ir(t) && (t = tn.scrollingElement || en);
		var r = gt.indexOf(t),
			s = n === oe.sc ? 1 : 2;
		!~r && (r = gt.push(t) - 1), gt[r + s] || Ce(t, "scroll", Wo);
		var o = gt[r + s],
			u =
				o ||
				(gt[r + s] =
					Ws(on(t, e), !0) ||
					(Ir(t)
						? n
						: Ws(function (c) {
								return arguments.length ? (t[e] = c) : t[e];
							})));
		return (
			(u.target = t),
			o || (u.smooth = _e.getProperty(t, "scrollBehavior") === "smooth"),
			u
		);
	},
	qo = function (t, i, e) {
		var n = t,
			r = t,
			s = Rr(),
			o = s,
			u = i || 50,
			c = Math.max(500, u * 3),
			f = function (g, p) {
				var _ = Rr();
				p || _ - s > u
					? ((r = n), (n = g), (o = s), (s = _))
					: e
						? (n += g)
						: (n = r + ((g - r) / (_ - o)) * (s - o));
			},
			d = function () {
				(r = n = e ? 0 : n), (o = s = 0);
			},
			h = function (g) {
				var p = o,
					_ = r,
					m = Rr();
				return (
					(g || g === 0) && g !== n && f(g),
					s === o || m - o > c
						? 0
						: ((n + (e ? _ : -_)) / ((e ? m : s) - p)) * 1e3
				);
			};
		return { update: f, reset: d, getVelocity: h };
	},
	_r = function (t, i) {
		return (
			i && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	rl = function (t) {
		var i = Math.max.apply(Math, t),
			e = Math.min.apply(Math, t);
		return Math.abs(i) >= Math.abs(e) ? i : e;
	},
	$u = function () {
		(Lr = _e.core.globals().ScrollTrigger), Lr && Lr.core && $f();
	},
	Hu = function (t) {
		return (
			(_e = t || Yu()),
			!Ps &&
				_e &&
				typeof document < "u" &&
				document.body &&
				((ti = window),
				(tn = document),
				(en = tn.documentElement),
				(Zn = tn.body),
				(zu = [ti, tn, en, Zn]),
				_e.utils.clamp,
				(Bu = _e.core.context || function () {}),
				(mn = "onpointerenter" in Zn ? "pointer" : "mouse"),
				(Nu = Qt.isTouch =
					ti.matchMedia &&
					ti.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in ti ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(gi = Qt.eventTypes =
					(
						"ontouchstart" in en
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in en
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (Xu = 0);
				}, 500),
				$u(),
				(Ps = 1)),
			Ps
		);
	};
Re.op = oe;
gt.cache = 0;
var Qt = (function () {
	function a(i) {
		this.init(i);
	}
	var t = a.prototype;
	return (
		(t.init = function (e) {
			Ps || Hu(_e) || console.warn("Please gsap.registerPlugin(Observer)"),
				Lr || $u();
			var n = e.tolerance,
				r = e.dragMinimum,
				s = e.type,
				o = e.target,
				u = e.lineHeight,
				c = e.debounce,
				f = e.preventDefault,
				d = e.onStop,
				h = e.onStopDelay,
				l = e.ignore,
				g = e.wheelSpeed,
				p = e.event,
				_ = e.onDragStart,
				m = e.onDragEnd,
				x = e.onDrag,
				M = e.onPress,
				v = e.onRelease,
				T = e.onRight,
				C = e.onLeft,
				S = e.onUp,
				O = e.onDown,
				E = e.onChangeX,
				L = e.onChangeY,
				N = e.onChange,
				D = e.onToggleX,
				R = e.onToggleY,
				B = e.onHover,
				Y = e.onHoverEnd,
				H = e.onMove,
				X = e.ignoreCheck,
				J = e.isNormalizer,
				ut = e.onGestureStart,
				b = e.onGestureEnd,
				j = e.onWheel,
				nt = e.onEnable,
				ct = e.onDisable,
				tt = e.onClick,
				Pt = e.scrollSpeed,
				vt = e.capture,
				ft = e.allowClicks,
				rt = e.lockAxis,
				Mt = e.onLockAxis;
			(this.target = o = Be(o) || en),
				(this.vars = e),
				l && (l = _e.utils.toArray(l)),
				(n = n || 1e-9),
				(r = r || 0),
				(g = g || 1),
				(Pt = Pt || 1),
				(s = s || "wheel,touch,pointer"),
				(c = c !== !1),
				u || (u = parseFloat(ti.getComputedStyle(Zn).lineHeight) || 22);
			var Dt,
				st,
				V,
				q,
				Z,
				K,
				Ft,
				P = this,
				wt = 0,
				Yt = 0,
				ae = e.passive || !f,
				Ct = un(o, Re),
				Lt = un(o, oe),
				qe = Ct(),
				Fe = Lt(),
				Xt =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					gi[0] === "pointerdown",
				Wt = Ir(o),
				St = o.ownerDocument || tn,
				ie = [0, 0, 0],
				qt = [0, 0, 0],
				de = 0,
				pi = function () {
					return (de = Rr());
				},
				Et = function (k, F) {
					return (
						((P.event = k) && l && ~l.indexOf(k.target)) ||
						(F && Xt && k.pointerType !== "touch") ||
						(X && X(k, F))
					);
				},
				bi = function () {
					P._vx.reset(), P._vy.reset(), st.pause(), d && d(P);
				},
				Ue = function () {
					var k = (P.deltaX = rl(ie)),
						F = (P.deltaY = rl(qt)),
						A = Math.abs(k) >= n,
						$ = Math.abs(F) >= n;
					N && (A || $) && N(P, k, F, ie, qt),
						A &&
							(T && P.deltaX > 0 && T(P),
							C && P.deltaX < 0 && C(P),
							E && E(P),
							D && P.deltaX < 0 != wt < 0 && D(P),
							(wt = P.deltaX),
							(ie[0] = ie[1] = ie[2] = 0)),
						$ &&
							(O && P.deltaY > 0 && O(P),
							S && P.deltaY < 0 && S(P),
							L && L(P),
							R && P.deltaY < 0 != Yt < 0 && R(P),
							(Yt = P.deltaY),
							(qt[0] = qt[1] = qt[2] = 0)),
						(q || V) && (H && H(P), V && (x(P), (V = !1)), (q = !1)),
						K && !(K = !1) && Mt && Mt(P),
						Z && (j(P), (Z = !1)),
						(Dt = 0);
				},
				Ge = function (k, F, A) {
					(ie[A] += k),
						(qt[A] += F),
						P._vx.update(k),
						P._vy.update(F),
						c ? Dt || (Dt = requestAnimationFrame(Ue)) : Ue();
				},
				Ne = function (k, F) {
					rt &&
						!Ft &&
						((P.axis = Ft = Math.abs(k) > Math.abs(F) ? "x" : "y"), (K = !0)),
						Ft !== "y" && ((ie[2] += k), P._vx.update(k, !0)),
						Ft !== "x" && ((qt[2] += F), P._vy.update(F, !0)),
						c ? Dt || (Dt = requestAnimationFrame(Ue)) : Ue();
				},
				je = function (k) {
					if (!Et(k, 1)) {
						k = _r(k, f);
						var F = k.clientX,
							A = k.clientY,
							$ = F - P.x,
							I = A - P.y,
							W = P.isDragging;
						(P.x = F),
							(P.y = A),
							(W ||
								Math.abs(P.startX - F) >= r ||
								Math.abs(P.startY - A) >= r) &&
								(x && (V = !0),
								W || (P.isDragging = !0),
								Ne($, I),
								W || (_ && _(P)));
					}
				},
				Oe = (P.onPress = function (w) {
					Et(w, 1) ||
						(w && w.button) ||
						((P.axis = Ft = null),
						st.pause(),
						(P.isPressed = !0),
						(w = _r(w)),
						(wt = Yt = 0),
						(P.startX = P.x = w.clientX),
						(P.startY = P.y = w.clientY),
						P._vx.reset(),
						P._vy.reset(),
						Ce(J ? o : St, gi[1], je, ae, !0),
						(P.deltaX = P.deltaY = 0),
						M && M(P));
				}),
				ot = (P.onRelease = function (w) {
					if (!Et(w, 1)) {
						Pe(J ? o : St, gi[1], je, !0);
						var k = !isNaN(P.y - P.startY),
							F = P.isDragging,
							A =
								F &&
								(Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3),
							$ = _r(w);
						!A &&
							k &&
							(P._vx.reset(),
							P._vy.reset(),
							f &&
								ft &&
								_e.delayedCall(0.08, function () {
									if (Rr() - de > 300 && !w.defaultPrevented) {
										if (w.target.click) w.target.click();
										else if (St.createEvent) {
											var I = St.createEvent("MouseEvents");
											I.initMouseEvent(
												"click",
												!0,
												!0,
												ti,
												1,
												$.screenX,
												$.screenY,
												$.clientX,
												$.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												w.target.dispatchEvent(I);
										}
									}
								})),
							(P.isDragging = P.isGesturing = P.isPressed = !1),
							d && F && !J && st.restart(!0),
							m && F && m(P),
							v && v(P, A);
					}
				}),
				me = function (k) {
					return (
						k.touches &&
						k.touches.length > 1 &&
						(P.isGesturing = !0) &&
						ut(k, P.isDragging)
					);
				},
				Rt = function () {
					return (P.isGesturing = !1) || b(P);
				},
				ye = function (k) {
					if (!Et(k)) {
						var F = Ct(),
							A = Lt();
						Ge((F - qe) * Pt, (A - Fe) * Pt, 1),
							(qe = F),
							(Fe = A),
							d && st.restart(!0);
					}
				},
				ze = function (k) {
					if (!Et(k)) {
						(k = _r(k, f)), j && (Z = !0);
						var F =
							(k.deltaMode === 1 ? u : k.deltaMode === 2 ? ti.innerHeight : 1) *
							g;
						Ge(k.deltaX * F, k.deltaY * F, 0), d && !J && st.restart(!0);
					}
				},
				Ti = function (k) {
					if (!Et(k)) {
						var F = k.clientX,
							A = k.clientY,
							$ = F - P.x,
							I = A - P.y;
						(P.x = F),
							(P.y = A),
							(q = !0),
							d && st.restart(!0),
							($ || I) && Ne($, I);
					}
				},
				Q = function (k) {
					(P.event = k), B(P);
				},
				y = function (k) {
					(P.event = k), Y(P);
				},
				z = function (k) {
					return Et(k) || (_r(k, f) && tt(P));
				};
			(st = P._dc = _e.delayedCall(h || 0.25, bi).pause()),
				(P.deltaX = P.deltaY = 0),
				(P._vx = qo(0, 50, !0)),
				(P._vy = qo(0, 50, !0)),
				(P.scrollX = Ct),
				(P.scrollY = Lt),
				(P.isDragging = P.isGesturing = P.isPressed = !1),
				Bu(this),
				(P.enable = function (w) {
					return (
						P.isEnabled ||
							(Ce(Wt ? St : o, "scroll", Wo),
							s.indexOf("scroll") >= 0 && Ce(Wt ? St : o, "scroll", ye, ae, vt),
							s.indexOf("wheel") >= 0 && Ce(o, "wheel", ze, ae, vt),
							((s.indexOf("touch") >= 0 && Nu) || s.indexOf("pointer") >= 0) &&
								(Ce(o, gi[0], Oe, ae, vt),
								Ce(St, gi[2], ot),
								Ce(St, gi[3], ot),
								ft && Ce(o, "click", pi, !0, !0),
								tt && Ce(o, "click", z),
								ut && Ce(St, "gesturestart", me),
								b && Ce(St, "gestureend", Rt),
								B && Ce(o, mn + "enter", Q),
								Y && Ce(o, mn + "leave", y),
								H && Ce(o, mn + "move", Ti)),
							(P.isEnabled = !0),
							w && w.type && Oe(w),
							nt && nt(P)),
						P
					);
				}),
				(P.disable = function () {
					P.isEnabled &&
						(Gn.filter(function (w) {
							return w !== P && Ir(w.target);
						}).length || Pe(Wt ? St : o, "scroll", Wo),
						P.isPressed &&
							(P._vx.reset(), P._vy.reset(), Pe(J ? o : St, gi[1], je, !0)),
						Pe(Wt ? St : o, "scroll", ye, vt),
						Pe(o, "wheel", ze, vt),
						Pe(o, gi[0], Oe, vt),
						Pe(St, gi[2], ot),
						Pe(St, gi[3], ot),
						Pe(o, "click", pi, !0),
						Pe(o, "click", z),
						Pe(St, "gesturestart", me),
						Pe(St, "gestureend", Rt),
						Pe(o, mn + "enter", Q),
						Pe(o, mn + "leave", y),
						Pe(o, mn + "move", Ti),
						(P.isEnabled = P.isPressed = P.isDragging = !1),
						ct && ct(P));
				}),
				(P.kill = P.revert =
					function () {
						P.disable();
						var w = Gn.indexOf(P);
						w >= 0 && Gn.splice(w, 1), Xi === P && (Xi = 0);
					}),
				Gn.push(P),
				J && Ir(o) && (Xi = P),
				P.enable(p);
		}),
		Xf(a, [
			{
				key: "velocityX",
				get: function () {
					return this._vx.getVelocity();
				},
			},
			{
				key: "velocityY",
				get: function () {
					return this._vy.getVelocity();
				},
			},
		]),
		a
	);
})();
Qt.version = "3.12.5";
Qt.create = function (a) {
	return new Qt(a);
};
Qt.register = Hu;
Qt.getAll = function () {
	return Gn.slice();
};
Qt.getById = function (a) {
	return Gn.filter(function (t) {
		return t.vars.id === a;
	})[0];
};
Yu() && _e.registerPlugin(Qt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var U,
	Vn,
	mt,
	$t,
	mi,
	Nt,
	Vu,
	qs,
	Jr,
	Fr,
	wr,
	hs,
	be,
	eo,
	Uo,
	ke,
	sl,
	ol,
	Wn,
	Wu,
	po,
	qu,
	Ee,
	Go,
	Uu,
	Gu,
	ji,
	jo,
	Sa,
	Jn,
	Ma,
	Us,
	Ko,
	go,
	ps = 1,
	Te = Date.now,
	_o = Te(),
	di = 0,
	br = 0,
	al = function (t, i, e) {
		var n = Qe(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (e["_" + i + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
	},
	ll = function (t, i) {
		return i && (!Qe(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	Hf = function a() {
		return br && requestAnimationFrame(a);
	},
	ul = function () {
		return (eo = 1);
	},
	cl = function () {
		return (eo = 0);
	},
	Oi = function (t) {
		return t;
	},
	Tr = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	ju = function () {
		return typeof window < "u";
	},
	Ku = function () {
		return U || (ju() && (U = window.gsap) && U.registerPlugin && U);
	},
	Ln = function (t) {
		return !!~Vu.indexOf(t);
	},
	Qu = function (t) {
		return (
			(t === "Height" ? Ma : mt["inner" + t]) ||
			mi["client" + t] ||
			Nt["client" + t]
		);
	},
	Zu = function (t) {
		return (
			on(t, "getBoundingClientRect") ||
			(Ln(t)
				? function () {
						return (Ls.width = mt.innerWidth), (Ls.height = Ma), Ls;
					}
				: function () {
						return Bi(t);
					})
		);
	},
	Vf = function (t, i, e) {
		var n = e.d,
			r = e.d2,
			s = e.a;
		return (s = on(t, "getBoundingClientRect"))
			? function () {
					return s()[n];
				}
			: function () {
					return (i ? Qu(r) : t["client" + r]) || 0;
				};
	},
	Wf = function (t, i) {
		return !i || ~Ai.indexOf(t)
			? Zu(t)
			: function () {
					return Ls;
				};
	},
	Ei = function (t, i) {
		var e = i.s,
			n = i.d2,
			r = i.d,
			s = i.a;
		return Math.max(
			0,
			(e = "scroll" + n) && (s = on(t, e))
				? s() - Zu(t)()[r]
				: Ln(t)
					? (mi[e] || Nt[e]) - Qu(n)
					: t[e] - t["offset" + n],
		);
	},
	gs = function (t, i) {
		for (var e = 0; e < Wn.length; e += 3)
			(!i || ~i.indexOf(Wn[e + 1])) && t(Wn[e], Wn[e + 1], Wn[e + 2]);
	},
	Qe = function (t) {
		return typeof t == "string";
	},
	Ie = function (t) {
		return typeof t == "function";
	},
	Sr = function (t) {
		return typeof t == "number";
	},
	yn = function (t) {
		return typeof t == "object";
	},
	mr = function (t, i, e) {
		return t && t.progress(i ? 0 : 1) && e && t.pause();
	},
	mo = function (t, i) {
		if (t.enabled) {
			var e = t._ctx
				? t._ctx.add(function () {
						return i(t);
					})
				: i(t);
			e && e.totalTime && (t.callbackAnimation = e);
		}
	},
	Yn = Math.abs,
	Ju = "left",
	tc = "top",
	Da = "right",
	Oa = "bottom",
	Dn = "width",
	On = "height",
	Nr = "Right",
	zr = "Left",
	Br = "Top",
	Yr = "Bottom",
	Jt = "padding",
	li = "margin",
	ur = "Width",
	Pa = "Height",
	re = "px",
	ui = function (t) {
		return mt.getComputedStyle(t);
	},
	qf = function (t) {
		var i = ui(t).position;
		t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
	},
	fl = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	Bi = function (t, i) {
		var e =
				i &&
				ui(t)[Uo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				U.to(t, {
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					skewX: 0,
					skewY: 0,
				}).progress(1),
			n = t.getBoundingClientRect();
		return e && e.progress(0).kill(), n;
	},
	Gs = function (t, i) {
		var e = i.d2;
		return t["offset" + e] || t["client" + e] || 0;
	},
	ec = function (t) {
		var i = [],
			e = t.labels,
			n = t.duration(),
			r;
		for (r in e) i.push(e[r] / n);
		return i;
	},
	Uf = function (t) {
		return function (i) {
			return U.utils.snap(ec(t), i);
		};
	},
	Ca = function (t) {
		var i = U.utils.snap(t),
			e =
				Array.isArray(t) &&
				t.slice(0).sort(function (n, r) {
					return n - r;
				});
		return e
			? function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o;
					if (!r) return i(n);
					if (r > 0) {
						for (n -= s, o = 0; o < e.length; o++) if (e[o] >= n) return e[o];
						return e[o - 1];
					} else for (o = e.length, n += s; o--; ) if (e[o] <= n) return e[o];
					return e[0];
				}
			: function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o = i(n);
					return !r || Math.abs(o - n) < s || o - n < 0 == r < 0
						? o
						: i(r < 0 ? n - t : n + t);
				};
	},
	Gf = function (t) {
		return function (i, e) {
			return Ca(ec(t))(i, e.direction);
		};
	},
	_s = function (t, i, e, n) {
		return e.split(",").forEach(function (r) {
			return t(i, r, n);
		});
	},
	ue = function (t, i, e, n, r) {
		return t.addEventListener(i, e, { passive: !n, capture: !!r });
	},
	le = function (t, i, e, n) {
		return t.removeEventListener(i, e, !!n);
	},
	ms = function (t, i, e) {
		(e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e));
	},
	dl = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	ys = { toggleActions: "play", anticipatePin: 0 },
	js = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Cs = function (t, i) {
		if (Qe(t)) {
			var e = t.indexOf("="),
				n = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
			~e && (t.indexOf("%") > e && (n *= i / 100), (t = t.substr(0, e - 1))),
				(t =
					n +
					(t in js
						? js[t] * i
						: ~t.indexOf("%")
							? (parseFloat(t) * i) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	xs = function (t, i, e, n, r, s, o, u) {
		var c = r.startColor,
			f = r.endColor,
			d = r.fontSize,
			h = r.indent,
			l = r.fontWeight,
			g = $t.createElement("div"),
			p = Ln(e) || on(e, "pinType") === "fixed",
			_ = t.indexOf("scroller") !== -1,
			m = p ? Nt : e,
			x = t.indexOf("start") !== -1,
			M = x ? c : f,
			v =
				"border-color:" +
				M +
				";font-size:" +
				d +
				";color:" +
				M +
				";font-weight:" +
				l +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(v += "position:" + ((_ || u) && p ? "fixed;" : "absolute;")),
			(_ || u || !p) &&
				(v += (n === oe ? Da : Oa) + ":" + (s + parseFloat(h)) + "px;"),
			o &&
				(v +=
					"box-sizing:border-box;text-align:left;width:" +
					o.offsetWidth +
					"px;"),
			(g._isStart = x),
			g.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
			(g.style.cssText = v),
			(g.innerText = i || i === 0 ? t + "-" + i : t),
			m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
			(g._offset = g["offset" + n.op.d2]),
			Es(g, 0, n, x),
			g
		);
	},
	Es = function (t, i, e, n) {
		var r = { display: "block" },
			s = e[n ? "os2" : "p2"],
			o = e[n ? "p2" : "os2"];
		(t._isFlipped = n),
			(r[e.a + "Percent"] = n ? -100 : 0),
			(r[e.a] = n ? "1px" : 0),
			(r["border" + s + ur] = 1),
			(r["border" + o + ur] = 0),
			(r[e.p] = i + "px"),
			U.set(t, r);
	},
	ht = [],
	Qo = {},
	ts,
	hl = function () {
		return Te() - di > 34 && (ts || (ts = requestAnimationFrame(Vi)));
	},
	Xn = function () {
		(!Ee || !Ee.isPressed || Ee.startX > Nt.clientWidth) &&
			(gt.cache++,
			Ee ? ts || (ts = requestAnimationFrame(Vi)) : Vi(),
			di || In("scrollStart"),
			(di = Te()));
	},
	yo = function () {
		(Gu = mt.innerWidth), (Uu = mt.innerHeight);
	},
	Mr = function () {
		gt.cache++,
			!be &&
				!qu &&
				!$t.fullscreenElement &&
				!$t.webkitFullscreenElement &&
				(!Go ||
					Gu !== mt.innerWidth ||
					Math.abs(mt.innerHeight - Uu) > mt.innerHeight * 0.25) &&
				qs.restart(!0);
	},
	Rn = {},
	jf = [],
	ic = function a() {
		return le(dt, "scrollEnd", a) || wn(!0);
	},
	In = function (t) {
		return (
			(Rn[t] &&
				Rn[t].map(function (i) {
					return i();
				})) ||
			jf
		);
	},
	Ke = [],
	nc = function (t) {
		for (var i = 0; i < Ke.length; i += 5)
			(!t || (Ke[i + 4] && Ke[i + 4].query === t)) &&
				((Ke[i].style.cssText = Ke[i + 1]),
				Ke[i].getBBox && Ke[i].setAttribute("transform", Ke[i + 2] || ""),
				(Ke[i + 3].uncache = 1));
	},
	Ea = function (t, i) {
		var e;
		for (ke = 0; ke < ht.length; ke++)
			(e = ht[ke]),
				e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
		(Us = !0), i && nc(i), i || In("revert");
	},
	rc = function (t, i) {
		gt.cache++,
			(i || !Ae) &&
				gt.forEach(function (e) {
					return Ie(e) && e.cacheID++ && (e.rec = 0);
				}),
			Qe(t) && (mt.history.scrollRestoration = Sa = t);
	},
	Ae,
	Pn = 0,
	pl,
	Kf = function () {
		if (pl !== Pn) {
			var t = (pl = Pn);
			requestAnimationFrame(function () {
				return t === Pn && wn(!0);
			});
		}
	},
	sc = function () {
		Nt.appendChild(Jn),
			(Ma = (!Ee && Jn.offsetHeight) || mt.innerHeight),
			Nt.removeChild(Jn);
	},
	gl = function (t) {
		return Jr(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (i) {
			return (i.style.display = t ? "none" : "block");
		});
	},
	wn = function (t, i) {
		if (di && !t && !Us) {
			ue(dt, "scrollEnd", ic);
			return;
		}
		sc(),
			(Ae = dt.isRefreshing = !0),
			gt.forEach(function (n) {
				return Ie(n) && ++n.cacheID && (n.rec = n());
			});
		var e = In("refreshInit");
		Wu && dt.sort(),
			i || Ea(),
			gt.forEach(function (n) {
				Ie(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
			}),
			ht.slice(0).forEach(function (n) {
				return n.refresh();
			}),
			(Us = !1),
			ht.forEach(function (n) {
				if (n._subPinOffset && n.pin) {
					var r = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
						s = n.pin[r];
					n.revert(!0, 1), n.adjustPinSpacing(n.pin[r] - s), n.refresh();
				}
			}),
			(Ko = 1),
			gl(!0),
			ht.forEach(function (n) {
				var r = Ei(n.scroller, n._dir),
					s = n.vars.end === "max" || (n._endClamp && n.end > r),
					o = n._startClamp && n.start >= r;
				(s || o) &&
					n.setPositions(
						o ? r - 1 : n.start,
						s ? Math.max(o ? r : n.start + 1, r) : n.end,
						!0,
					);
			}),
			gl(!1),
			(Ko = 0),
			e.forEach(function (n) {
				return n && n.render && n.render(-1);
			}),
			gt.forEach(function (n) {
				Ie(n) &&
					(n.smooth &&
						requestAnimationFrame(function () {
							return (n.target.style.scrollBehavior = "smooth");
						}),
					n.rec && n(n.rec));
			}),
			rc(Sa, 1),
			qs.pause(),
			Pn++,
			(Ae = 2),
			Vi(2),
			ht.forEach(function (n) {
				return Ie(n.vars.onRefresh) && n.vars.onRefresh(n);
			}),
			(Ae = dt.isRefreshing = !1),
			In("refresh");
	},
	Zo = 0,
	ks = 1,
	Xr,
	Vi = function (t) {
		if (t === 2 || (!Ae && !Us)) {
			(dt.isUpdating = !0), Xr && Xr.update(0);
			var i = ht.length,
				e = Te(),
				n = e - _o >= 50,
				r = i && ht[0].scroll();
			if (
				((ks = Zo > r ? -1 : 1),
				Ae || (Zo = r),
				n &&
					(di && !eo && e - di > 200 && ((di = 0), In("scrollEnd")),
					(wr = _o),
					(_o = e)),
				ks < 0)
			) {
				for (ke = i; ke-- > 0; ) ht[ke] && ht[ke].update(0, n);
				ks = 1;
			} else for (ke = 0; ke < i; ke++) ht[ke] && ht[ke].update(0, n);
			dt.isUpdating = !1;
		}
		ts = 0;
	},
	Jo = [
		Ju,
		tc,
		Oa,
		Da,
		li + Yr,
		li + Nr,
		li + Br,
		li + zr,
		"display",
		"flexShrink",
		"float",
		"zIndex",
		"gridColumnStart",
		"gridColumnEnd",
		"gridRowStart",
		"gridRowEnd",
		"gridArea",
		"justifySelf",
		"alignSelf",
		"placeSelf",
		"order",
	],
	As = Jo.concat([
		Dn,
		On,
		"boxSizing",
		"max" + ur,
		"max" + Pa,
		"position",
		li,
		Jt,
		Jt + Br,
		Jt + Nr,
		Jt + Yr,
		Jt + zr,
	]),
	Qf = function (t, i, e) {
		tr(e);
		var n = t._gsap;
		if (n.spacerIsNative) tr(n.spacerState);
		else if (t._gsap.swappedIn) {
			var r = i.parentNode;
			r && (r.insertBefore(t, i), r.removeChild(i));
		}
		t._gsap.swappedIn = !1;
	},
	xo = function (t, i, e, n) {
		if (!t._gsap.swappedIn) {
			for (var r = Jo.length, s = i.style, o = t.style, u; r--; )
				(u = Jo[r]), (s[u] = e[u]);
			(s.position = e.position === "absolute" ? "absolute" : "relative"),
				e.display === "inline" && (s.display = "inline-block"),
				(o[Oa] = o[Da] = "auto"),
				(s.flexBasis = e.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[Dn] = Gs(t, Re) + re),
				(s[On] = Gs(t, oe) + re),
				(s[Jt] = o[li] = o[tc] = o[Ju] = "0"),
				tr(n),
				(o[Dn] = o["max" + ur] = e[Dn]),
				(o[On] = o["max" + Pa] = e[On]),
				(o[Jt] = e[Jt]),
				t.parentNode !== i &&
					(t.parentNode.insertBefore(i, t), i.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	Zf = /([A-Z])/g,
	tr = function (t) {
		if (t) {
			var i = t.t.style,
				e = t.length,
				n = 0,
				r,
				s;
			for ((t.t._gsap || U.core.getCache(t.t)).uncache = 1; n < e; n += 2)
				(s = t[n + 1]),
					(r = t[n]),
					s
						? (i[r] = s)
						: i[r] && i.removeProperty(r.replace(Zf, "-$1").toLowerCase());
		}
	},
	vs = function (t) {
		for (var i = As.length, e = t.style, n = [], r = 0; r < i; r++)
			n.push(As[r], e[As[r]]);
		return (n.t = t), n;
	},
	Jf = function (t, i, e) {
		for (var n = [], r = t.length, s = e ? 8 : 0, o; s < r; s += 2)
			(o = t[s]), n.push(o, o in i ? i[o] : t[s + 1]);
		return (n.t = t.t), n;
	},
	Ls = { left: 0, top: 0 },
	_l = function (t, i, e, n, r, s, o, u, c, f, d, h, l, g) {
		Ie(t) && (t = t(u)),
			Qe(t) &&
				t.substr(0, 3) === "max" &&
				(t = h + (t.charAt(4) === "=" ? Cs("0" + t.substr(3), e) : 0));
		var p = l ? l.time() : 0,
			_,
			m,
			x;
		if ((l && l.seek(0), isNaN(t) || (t = +t), Sr(t)))
			l &&
				(t = U.utils.mapRange(
					l.scrollTrigger.start,
					l.scrollTrigger.end,
					0,
					h,
					t,
				)),
				o && Es(o, e, n, !0);
		else {
			Ie(i) && (i = i(u));
			var M = (t || "0").split(" "),
				v,
				T,
				C,
				S;
			(x = Be(i, u) || Nt),
				(v = Bi(x) || {}),
				(!v || (!v.left && !v.top)) &&
					ui(x).display === "none" &&
					((S = x.style.display),
					(x.style.display = "block"),
					(v = Bi(x)),
					S ? (x.style.display = S) : x.style.removeProperty("display")),
				(T = Cs(M[0], v[n.d])),
				(C = Cs(M[1] || "0", e)),
				(t = v[n.p] - c[n.p] - f + T + r - C),
				o && Es(o, C, n, e - C < 20 || (o._isStart && C > 20)),
				(e -= e - C);
		}
		if ((g && ((u[g] = t || -0.001), t < 0 && (t = 0)), s)) {
			var O = t + e,
				E = s._isStart;
			(_ = "scroll" + n.d2),
				Es(
					s,
					O,
					n,
					(E && O > 20) ||
						(!E && (d ? Math.max(Nt[_], mi[_]) : s.parentNode[_]) <= O + 1),
				),
				d &&
					((c = Bi(o)),
					d && (s.style[n.op.p] = c[n.op.p] - n.op.m - s._offset + re));
		}
		return (
			l &&
				x &&
				((_ = Bi(x)),
				l.seek(h),
				(m = Bi(x)),
				(l._caScrollDist = _[n.p] - m[n.p]),
				(t = (t / l._caScrollDist) * h)),
			l && l.seek(p),
			l ? t : Math.round(t)
		);
	},
	td = /(webkit|moz|length|cssText|inset)/i,
	ml = function (t, i, e, n) {
		if (t.parentNode !== i) {
			var r = t.style,
				s,
				o;
			if (i === Nt) {
				(t._stOrig = r.cssText), (o = ui(t));
				for (s in o)
					!+s &&
						!td.test(s) &&
						o[s] &&
						typeof r[s] == "string" &&
						s !== "0" &&
						(r[s] = o[s]);
				(r.top = e), (r.left = n);
			} else r.cssText = t._stOrig;
			(U.core.getCache(t).uncache = 1), i.appendChild(t);
		}
	},
	oc = function (t, i, e) {
		var n = i,
			r = n;
		return function (s) {
			var o = Math.round(t());
			return (
				o !== n &&
					o !== r &&
					Math.abs(o - n) > 3 &&
					Math.abs(o - r) > 3 &&
					((s = o), e && e()),
				(r = n),
				(n = s),
				s
			);
		};
	},
	ws = function (t, i, e) {
		var n = {};
		(n[i.p] = "+=" + e), U.set(t, n);
	},
	yl = function (t, i) {
		var e = un(t, i),
			n = "_scroll" + i.p2,
			r = function s(o, u, c, f, d) {
				var h = s.tween,
					l = u.onComplete,
					g = {};
				c = c || e();
				var p = oc(e, c, function () {
					h.kill(), (s.tween = 0);
				});
				return (
					(d = (f && d) || 0),
					(f = f || o - c),
					h && h.kill(),
					(u[n] = o),
					(u.inherit = !1),
					(u.modifiers = g),
					(g[n] = function () {
						return p(c + f * h.ratio + d * h.ratio * h.ratio);
					}),
					(u.onUpdate = function () {
						gt.cache++, s.tween && Vi();
					}),
					(u.onComplete = function () {
						(s.tween = 0), l && l.call(h);
					}),
					(h = s.tween = U.to(t, u)),
					h
				);
			};
		return (
			(t[n] = e),
			(e.wheelHandler = function () {
				return r.tween && r.tween.kill() && (r.tween = 0);
			}),
			ue(t, "wheel", e.wheelHandler),
			dt.isTouch && ue(t, "touchmove", e.wheelHandler),
			r
		);
	},
	dt = (function () {
		function a(i, e) {
			Vn ||
				a.register(U) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				jo(this),
				this.init(i, e);
		}
		var t = a.prototype;
		return (
			(t.init = function (e, n) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!br)
				) {
					this.update = this.refresh = this.kill = Oi;
					return;
				}
				e = fl(Qe(e) || Sr(e) || e.nodeType ? { trigger: e } : e, ys);
				var r = e,
					s = r.onUpdate,
					o = r.toggleClass,
					u = r.id,
					c = r.onToggle,
					f = r.onRefresh,
					d = r.scrub,
					h = r.trigger,
					l = r.pin,
					g = r.pinSpacing,
					p = r.invalidateOnRefresh,
					_ = r.anticipatePin,
					m = r.onScrubComplete,
					x = r.onSnapComplete,
					M = r.once,
					v = r.snap,
					T = r.pinReparent,
					C = r.pinSpacer,
					S = r.containerAnimation,
					O = r.fastScrollEnd,
					E = r.preventOverlaps,
					L =
						e.horizontal || (e.containerAnimation && e.horizontal !== !1)
							? Re
							: oe,
					N = !d && d !== 0,
					D = Be(e.scroller || mt),
					R = U.core.getCache(D),
					B = Ln(D),
					Y =
						("pinType" in e
							? e.pinType
							: on(D, "pinType") || (B && "fixed")) === "fixed",
					H = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
					X = N && e.toggleActions.split(" "),
					J = "markers" in e ? e.markers : ys.markers,
					ut = B ? 0 : parseFloat(ui(D)["border" + L.p2 + ur]) || 0,
					b = this,
					j =
						e.onRefreshInit &&
						function () {
							return e.onRefreshInit(b);
						},
					nt = Vf(D, B, L),
					ct = Wf(D, B),
					tt = 0,
					Pt = 0,
					vt = 0,
					ft = un(D, L),
					rt,
					Mt,
					Dt,
					st,
					V,
					q,
					Z,
					K,
					Ft,
					P,
					wt,
					Yt,
					ae,
					Ct,
					Lt,
					qe,
					Fe,
					Xt,
					Wt,
					St,
					ie,
					qt,
					de,
					pi,
					Et,
					bi,
					Ue,
					Ge,
					Ne,
					je,
					Oe,
					ot,
					me,
					Rt,
					ye,
					ze,
					Ti,
					Q,
					y;
				if (
					((b._startClamp = b._endClamp = !1),
					(b._dir = L),
					(_ *= 45),
					(b.scroller = D),
					(b.scroll = S ? S.time.bind(S) : ft),
					(st = ft()),
					(b.vars = e),
					(n = n || e.animation),
					"refreshPriority" in e &&
						((Wu = 1), e.refreshPriority === -9999 && (Xr = b)),
					(R.tweenScroll = R.tweenScroll || {
						top: yl(D, oe),
						left: yl(D, Re),
					}),
					(b.tweenTo = rt = R.tweenScroll[L.p]),
					(b.scrubDuration = function (A) {
						(me = Sr(A) && A),
							me
								? ot
									? ot.duration(A)
									: (ot = U.to(n, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: me,
											paused: !0,
											onComplete: function () {
												return m && m(b);
											},
										}))
								: (ot && ot.progress(1).kill(), (ot = 0));
					}),
					n &&
						((n.vars.lazy = !1),
						(n._initted && !b.isReverted) ||
							(n.vars.immediateRender !== !1 &&
								e.immediateRender !== !1 &&
								n.duration() &&
								n.render(0, !0, !0)),
						(b.animation = n.pause()),
						(n.scrollTrigger = b),
						b.scrubDuration(d),
						(je = 0),
						u || (u = n.vars.id)),
					v &&
						((!yn(v) || v.push) && (v = { snapTo: v }),
						"scrollBehavior" in Nt.style &&
							U.set(B ? [Nt, mi] : D, { scrollBehavior: "auto" }),
						gt.forEach(function (A) {
							return (
								Ie(A) &&
								A.target === (B ? $t.scrollingElement || mi : D) &&
								(A.smooth = !1)
							);
						}),
						(Dt = Ie(v.snapTo)
							? v.snapTo
							: v.snapTo === "labels"
								? Uf(n)
								: v.snapTo === "labelsDirectional"
									? Gf(n)
									: v.directional !== !1
										? function (A, $) {
												return Ca(v.snapTo)(
													A,
													Te() - Pt < 500 ? 0 : $.direction,
												);
											}
										: U.utils.snap(v.snapTo)),
						(Rt = v.duration || { min: 0.1, max: 2 }),
						(Rt = yn(Rt) ? Fr(Rt.min, Rt.max) : Fr(Rt, Rt)),
						(ye = U.delayedCall(v.delay || me / 2 || 0.1, function () {
							var A = ft(),
								$ = Te() - Pt < 500,
								I = rt.tween;
							if (
								($ || Math.abs(b.getVelocity()) < 10) &&
								!I &&
								!eo &&
								tt !== A
							) {
								var W = (A - q) / Ct,
									it = n && !N ? n.totalProgress() : W,
									G = $ ? 0 : ((it - Oe) / (Te() - wr)) * 1e3 || 0,
									lt = U.utils.clamp(-W, 1 - W, (Yn(G / 2) * G) / 0.185),
									bt = W + (v.inertia === !1 ? 0 : lt),
									Tt,
									pt,
									_t = v,
									Ot = _t.onStart,
									at = _t.onInterrupt,
									he = _t.onComplete;
								if (
									((Tt = Dt(bt, b)),
									Sr(Tt) || (Tt = bt),
									(pt = Math.round(q + Tt * Ct)),
									A <= Z && A >= q && pt !== A)
								) {
									if (I && !I._initted && I.data <= Yn(pt - A)) return;
									v.inertia === !1 && (lt = Tt - W),
										rt(
											pt,
											{
												duration: Rt(
													Yn(
														(Math.max(Yn(bt - it), Yn(Tt - it)) * 0.185) /
															G /
															0.05 || 0,
													),
												),
												ease: v.ease || "power3",
												data: Yn(pt - A),
												onInterrupt: function () {
													return ye.restart(!0) && at && at(b);
												},
												onComplete: function () {
													b.update(),
														(tt = ft()),
														n &&
															(ot
																? ot.resetTo(
																		"totalProgress",
																		Tt,
																		n._tTime / n._tDur,
																	)
																: n.progress(Tt)),
														(je = Oe =
															n && !N ? n.totalProgress() : b.progress),
														x && x(b),
														he && he(b);
												},
											},
											A,
											lt * Ct,
											pt - A - lt * Ct,
										),
										Ot && Ot(b, rt.tween);
								}
							} else b.isActive && tt !== A && ye.restart(!0);
						}).pause())),
					u && (Qo[u] = b),
					(h = b.trigger = Be(h || (l !== !0 && l))),
					(y = h && h._gsap && h._gsap.stRevert),
					y && (y = y(b)),
					(l = l === !0 ? h : Be(l)),
					Qe(o) && (o = { targets: h, className: o }),
					l &&
						(g === !1 ||
							g === li ||
							(g =
								!g &&
								l.parentNode &&
								l.parentNode.style &&
								ui(l.parentNode).display === "flex"
									? !1
									: Jt),
						(b.pin = l),
						(Mt = U.core.getCache(l)),
						Mt.spacer
							? (Lt = Mt.pinState)
							: (C &&
									((C = Be(C)),
									C && !C.nodeType && (C = C.current || C.nativeElement),
									(Mt.spacerIsNative = !!C),
									C && (Mt.spacerState = vs(C))),
								(Mt.spacer = Xt = C || $t.createElement("div")),
								Xt.classList.add("pin-spacer"),
								u && Xt.classList.add("pin-spacer-" + u),
								(Mt.pinState = Lt = vs(l))),
						e.force3D !== !1 && U.set(l, { force3D: !0 }),
						(b.spacer = Xt = Mt.spacer),
						(Ne = ui(l)),
						(pi = Ne[g + L.os2]),
						(St = U.getProperty(l)),
						(ie = U.quickSetter(l, L.a, re)),
						xo(l, Xt, Ne),
						(Fe = vs(l))),
					J)
				) {
					(Yt = yn(J) ? fl(J, dl) : dl),
						(P = xs("scroller-start", u, D, L, Yt, 0)),
						(wt = xs("scroller-end", u, D, L, Yt, 0, P)),
						(Wt = P["offset" + L.op.d2]);
					var z = Be(on(D, "content") || D);
					(K = this.markerStart = xs("start", u, z, L, Yt, Wt, 0, S)),
						(Ft = this.markerEnd = xs("end", u, z, L, Yt, Wt, 0, S)),
						S && (Q = U.quickSetter([K, Ft], L.a, re)),
						!Y &&
							!(Ai.length && on(D, "fixedMarkers") === !0) &&
							(qf(B ? Nt : D),
							U.set([P, wt], { force3D: !0 }),
							(bi = U.quickSetter(P, L.a, re)),
							(Ge = U.quickSetter(wt, L.a, re)));
				}
				if (S) {
					var w = S.vars.onUpdate,
						k = S.vars.onUpdateParams;
					S.eventCallback("onUpdate", function () {
						b.update(0, 0, 1), w && w.apply(S, k || []);
					});
				}
				if (
					((b.previous = function () {
						return ht[ht.indexOf(b) - 1];
					}),
					(b.next = function () {
						return ht[ht.indexOf(b) + 1];
					}),
					(b.revert = function (A, $) {
						if (!$) return b.kill(!0);
						var I = A !== !1 || !b.enabled,
							W = be;
						I !== b.isReverted &&
							(I &&
								((ze = Math.max(ft(), b.scroll.rec || 0)),
								(vt = b.progress),
								(Ti = n && n.progress())),
							K &&
								[K, Ft, P, wt].forEach(function (it) {
									return (it.style.display = I ? "none" : "block");
								}),
							I && ((be = b), b.update(I)),
							l &&
								(!T || !b.isActive) &&
								(I ? Qf(l, Xt, Lt) : xo(l, Xt, ui(l), Et)),
							I || b.update(I),
							(be = W),
							(b.isReverted = I));
					}),
					(b.refresh = function (A, $, I, W) {
						if (!((be || !b.enabled) && !$)) {
							if (l && A && di) {
								ue(a, "scrollEnd", ic);
								return;
							}
							!Ae && j && j(b),
								(be = b),
								rt.tween && !I && (rt.tween.kill(), (rt.tween = 0)),
								ot && ot.pause(),
								p && n && n.revert({ kill: !1 }).invalidate(),
								b.isReverted || b.revert(!0, !0),
								(b._subPinOffset = !1);
							var it = nt(),
								G = ct(),
								lt = S ? S.duration() : Ei(D, L),
								bt = Ct <= 0.01,
								Tt = 0,
								pt = W || 0,
								_t = yn(I) ? I.end : e.end,
								Ot = e.endTrigger || h,
								at = yn(I)
									? I.start
									: e.start || (e.start === 0 || !h ? 0 : l ? "0 0" : "0 100%"),
								he = (b.pinnedContainer =
									e.pinnedContainer && Be(e.pinnedContainer, b)),
								Ut = (h && Math.max(0, ht.indexOf(b))) || 0,
								pe = Ut,
								ge,
								xe,
								fn,
								ls,
								ve,
								ne,
								Si,
								no,
								Ya,
								dr,
								Mi,
								hr,
								us;
							for (
								J &&
								yn(I) &&
								((hr = U.getProperty(P, L.p)), (us = U.getProperty(wt, L.p)));
								pe--;

							)
								(ne = ht[pe]),
									ne.end || ne.refresh(0, 1) || (be = b),
									(Si = ne.pin),
									Si &&
										(Si === h || Si === l || Si === he) &&
										!ne.isReverted &&
										(dr || (dr = []), dr.unshift(ne), ne.revert(!0, !0)),
									ne !== ht[pe] && (Ut--, pe--);
							for (
								Ie(at) && (at = at(b)),
									at = al(at, "start", b),
									q =
										_l(
											at,
											h,
											it,
											L,
											ft(),
											K,
											P,
											b,
											G,
											ut,
											Y,
											lt,
											S,
											b._startClamp && "_startClamp",
										) || (l ? -0.001 : 0),
									Ie(_t) && (_t = _t(b)),
									Qe(_t) &&
										!_t.indexOf("+=") &&
										(~_t.indexOf(" ")
											? (_t = (Qe(at) ? at.split(" ")[0] : "") + _t)
											: ((Tt = Cs(_t.substr(2), it)),
												(_t = Qe(at)
													? at
													: (S
															? U.utils.mapRange(
																	0,
																	S.duration(),
																	S.scrollTrigger.start,
																	S.scrollTrigger.end,
																	q,
																)
															: q) + Tt),
												(Ot = h))),
									_t = al(_t, "end", b),
									Z =
										Math.max(
											q,
											_l(
												_t || (Ot ? "100% 0" : lt),
												Ot,
												it,
												L,
												ft() + Tt,
												Ft,
												wt,
												b,
												G,
												ut,
												Y,
												lt,
												S,
												b._endClamp && "_endClamp",
											),
										) || -0.001,
									Tt = 0,
									pe = Ut;
								pe--;

							)
								(ne = ht[pe]),
									(Si = ne.pin),
									Si &&
										ne.start - ne._pinPush <= q &&
										!S &&
										ne.end > 0 &&
										((ge =
											ne.end -
											(b._startClamp ? Math.max(0, ne.start) : ne.start)),
										((Si === h && ne.start - ne._pinPush < q) || Si === he) &&
											isNaN(at) &&
											(Tt += ge * (1 - ne.progress)),
										Si === l && (pt += ge));
							if (
								((q += Tt),
								(Z += Tt),
								b._startClamp && (b._startClamp += Tt),
								b._endClamp &&
									!Ae &&
									((b._endClamp = Z || -0.001), (Z = Math.min(Z, Ei(D, L)))),
								(Ct = Z - q || ((q -= 0.01) && 0.001)),
								bt && (vt = U.utils.clamp(0, 1, U.utils.normalize(q, Z, ze))),
								(b._pinPush = pt),
								K &&
									Tt &&
									((ge = {}),
									(ge[L.a] = "+=" + Tt),
									he && (ge[L.p] = "-=" + ft()),
									U.set([K, Ft], ge)),
								l && !(Ko && b.end >= Ei(D, L)))
							)
								(ge = ui(l)),
									(ls = L === oe),
									(fn = ft()),
									(qt = parseFloat(St(L.a)) + pt),
									!lt &&
										Z > 1 &&
										((Mi = (B ? $t.scrollingElement || mi : D).style),
										(Mi = {
											style: Mi,
											value: Mi["overflow" + L.a.toUpperCase()],
										}),
										B &&
											ui(Nt)["overflow" + L.a.toUpperCase()] !== "scroll" &&
											(Mi.style["overflow" + L.a.toUpperCase()] = "scroll")),
									xo(l, Xt, ge),
									(Fe = vs(l)),
									(xe = Bi(l, !0)),
									(no = Y && un(D, ls ? Re : oe)()),
									g
										? ((Et = [g + L.os2, Ct + pt + re]),
											(Et.t = Xt),
											(pe = g === Jt ? Gs(l, L) + Ct + pt : 0),
											pe &&
												(Et.push(L.d, pe + re),
												Xt.style.flexBasis !== "auto" &&
													(Xt.style.flexBasis = pe + re)),
											tr(Et),
											he &&
												ht.forEach(function (pr) {
													pr.pin === he &&
														pr.vars.pinSpacing !== !1 &&
														(pr._subPinOffset = !0);
												}),
											Y && ft(ze))
										: ((pe = Gs(l, L)),
											pe &&
												Xt.style.flexBasis !== "auto" &&
												(Xt.style.flexBasis = pe + re)),
									Y &&
										((ve = {
											top: xe.top + (ls ? fn - q : no) + re,
											left: xe.left + (ls ? no : fn - q) + re,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(ve[Dn] = ve["max" + ur] = Math.ceil(xe.width) + re),
										(ve[On] = ve["max" + Pa] = Math.ceil(xe.height) + re),
										(ve[li] =
											ve[li + Br] =
											ve[li + Nr] =
											ve[li + Yr] =
											ve[li + zr] =
												"0"),
										(ve[Jt] = ge[Jt]),
										(ve[Jt + Br] = ge[Jt + Br]),
										(ve[Jt + Nr] = ge[Jt + Nr]),
										(ve[Jt + Yr] = ge[Jt + Yr]),
										(ve[Jt + zr] = ge[Jt + zr]),
										(qe = Jf(Lt, ve, T)),
										Ae && ft(0)),
									n
										? ((Ya = n._initted),
											po(1),
											n.render(n.duration(), !0, !0),
											(de = St(L.a) - qt + Ct + pt),
											(Ue = Math.abs(Ct - de) > 1),
											Y && Ue && qe.splice(qe.length - 2, 2),
											n.render(0, !0, !0),
											Ya || n.invalidate(!0),
											n.parent || n.totalTime(n.totalTime()),
											po(0))
										: (de = Ct),
									Mi &&
										(Mi.value
											? (Mi.style["overflow" + L.a.toUpperCase()] = Mi.value)
											: Mi.style.removeProperty("overflow-" + L.a));
							else if (h && ft() && !S)
								for (xe = h.parentNode; xe && xe !== Nt; )
									xe._pinOffset && ((q -= xe._pinOffset), (Z -= xe._pinOffset)),
										(xe = xe.parentNode);
							dr &&
								dr.forEach(function (pr) {
									return pr.revert(!1, !0);
								}),
								(b.start = q),
								(b.end = Z),
								(st = V = Ae ? ze : ft()),
								!S && !Ae && (st < ze && ft(ze), (b.scroll.rec = 0)),
								b.revert(!1, !0),
								(Pt = Te()),
								ye && ((tt = -1), ye.restart(!0)),
								(be = 0),
								n &&
									N &&
									(n._initted || Ti) &&
									n.progress() !== Ti &&
									n.progress(Ti || 0, !0).render(n.time(), !0, !0),
								(bt || vt !== b.progress || S || p) &&
									(n &&
										!N &&
										n.totalProgress(
											S && q < -0.001 && !vt ? U.utils.normalize(q, Z, 0) : vt,
											!0,
										),
									(b.progress = bt || (st - q) / Ct === vt ? 0 : vt)),
								l && g && (Xt._pinOffset = Math.round(b.progress * de)),
								ot && ot.invalidate(),
								isNaN(hr) ||
									((hr -= U.getProperty(P, L.p)),
									(us -= U.getProperty(wt, L.p)),
									ws(P, L, hr),
									ws(K, L, hr - (W || 0)),
									ws(wt, L, us),
									ws(Ft, L, us - (W || 0))),
								bt && !Ae && b.update(),
								f && !Ae && !ae && ((ae = !0), f(b), (ae = !1));
						}
					}),
					(b.getVelocity = function () {
						return ((ft() - V) / (Te() - wr)) * 1e3 || 0;
					}),
					(b.endAnimation = function () {
						mr(b.callbackAnimation),
							n &&
								(ot
									? ot.progress(1)
									: n.paused()
										? N || mr(n, b.direction < 0, 1)
										: mr(n, n.reversed()));
					}),
					(b.labelToScroll = function (A) {
						return (
							(n &&
								n.labels &&
								(q || b.refresh() || q) + (n.labels[A] / n.duration()) * Ct) ||
							0
						);
					}),
					(b.getTrailing = function (A) {
						var $ = ht.indexOf(b),
							I = b.direction > 0 ? ht.slice(0, $).reverse() : ht.slice($ + 1);
						return (
							Qe(A)
								? I.filter(function (W) {
										return W.vars.preventOverlaps === A;
									})
								: I
						).filter(function (W) {
							return b.direction > 0 ? W.end <= q : W.start >= Z;
						});
					}),
					(b.update = function (A, $, I) {
						if (!(S && !I && !A)) {
							var W = Ae === !0 ? ze : b.scroll(),
								it = A ? 0 : (W - q) / Ct,
								G = it < 0 ? 0 : it > 1 ? 1 : it || 0,
								lt = b.progress,
								bt,
								Tt,
								pt,
								_t,
								Ot,
								at,
								he,
								Ut;
							if (
								($ &&
									((V = st),
									(st = S ? ft() : W),
									v && ((Oe = je), (je = n && !N ? n.totalProgress() : G))),
								_ &&
									l &&
									!be &&
									!ps &&
									di &&
									(!G && q < W + ((W - V) / (Te() - wr)) * _
										? (G = 1e-4)
										: G === 1 &&
											Z > W + ((W - V) / (Te() - wr)) * _ &&
											(G = 0.9999)),
								G !== lt && b.enabled)
							) {
								if (
									((bt = b.isActive = !!G && G < 1),
									(Tt = !!lt && lt < 1),
									(at = bt !== Tt),
									(Ot = at || !!G != !!lt),
									(b.direction = G > lt ? 1 : -1),
									(b.progress = G),
									Ot &&
										!be &&
										((pt = G && !lt ? 0 : G === 1 ? 1 : lt === 1 ? 2 : 3),
										N &&
											((_t =
												(!at && X[pt + 1] !== "none" && X[pt + 1]) || X[pt]),
											(Ut =
												n &&
												(_t === "complete" || _t === "reset" || _t in n)))),
									E &&
										(at || Ut) &&
										(Ut || d || !n) &&
										(Ie(E)
											? E(b)
											: b.getTrailing(E).forEach(function (fn) {
													return fn.endAnimation();
												})),
									N ||
										(ot && !be && !ps
											? (ot._dp._time - ot._start !== ot._time &&
													ot.render(ot._dp._time - ot._start),
												ot.resetTo
													? ot.resetTo("totalProgress", G, n._tTime / n._tDur)
													: ((ot.vars.totalProgress = G),
														ot.invalidate().restart()))
											: n && n.totalProgress(G, !!(be && (Pt || A)))),
									l)
								) {
									if ((A && g && (Xt.style[g + L.os2] = pi), !Y))
										ie(Tr(qt + de * G));
									else if (Ot) {
										if (
											((he = !A && G > lt && Z + 1 > W && W + 1 >= Ei(D, L)), T)
										)
											if (!A && (bt || he)) {
												var pe = Bi(l, !0),
													ge = W - q;
												ml(
													l,
													Nt,
													pe.top + (L === oe ? ge : 0) + re,
													pe.left + (L === oe ? 0 : ge) + re,
												);
											} else ml(l, Xt);
										tr(bt || he ? qe : Fe),
											(Ue && G < 1 && bt) || ie(qt + (G === 1 && !he ? de : 0));
									}
								}
								v && !rt.tween && !be && !ps && ye.restart(!0),
									o &&
										(at || (M && G && (G < 1 || !go))) &&
										Jr(o.targets).forEach(function (fn) {
											return fn.classList[bt || M ? "add" : "remove"](
												o.className,
											);
										}),
									s && !N && !A && s(b),
									Ot && !be
										? (N &&
												(Ut &&
													(_t === "complete"
														? n.pause().totalProgress(1)
														: _t === "reset"
															? n.restart(!0).pause()
															: _t === "restart"
																? n.restart(!0)
																: n[_t]()),
												s && s(b)),
											(at || !go) &&
												(c && at && mo(b, c),
												H[pt] && mo(b, H[pt]),
												M && (G === 1 ? b.kill(!1, 1) : (H[pt] = 0)),
												at || ((pt = G === 1 ? 1 : 3), H[pt] && mo(b, H[pt]))),
											O &&
												!bt &&
												Math.abs(b.getVelocity()) > (Sr(O) ? O : 2500) &&
												(mr(b.callbackAnimation),
												ot
													? ot.progress(1)
													: mr(n, _t === "reverse" ? 1 : !G, 1)))
										: N && s && !be && s(b);
							}
							if (Ge) {
								var xe = S ? (W / S.duration()) * (S._caScrollDist || 0) : W;
								bi(xe + (P._isFlipped ? 1 : 0)), Ge(xe);
							}
							Q && Q((-W / S.duration()) * (S._caScrollDist || 0));
						}
					}),
					(b.enable = function (A, $) {
						b.enabled ||
							((b.enabled = !0),
							ue(D, "resize", Mr),
							B || ue(D, "scroll", Xn),
							j && ue(a, "refreshInit", j),
							A !== !1 && ((b.progress = vt = 0), (st = V = tt = ft())),
							$ !== !1 && b.refresh());
					}),
					(b.getTween = function (A) {
						return A && rt ? rt.tween : ot;
					}),
					(b.setPositions = function (A, $, I, W) {
						if (S) {
							var it = S.scrollTrigger,
								G = S.duration(),
								lt = it.end - it.start;
							(A = it.start + (lt * A) / G), ($ = it.start + (lt * $) / G);
						}
						b.refresh(
							!1,
							!1,
							{
								start: ll(A, I && !!b._startClamp),
								end: ll($, I && !!b._endClamp),
							},
							W,
						),
							b.update();
					}),
					(b.adjustPinSpacing = function (A) {
						if (Et && A) {
							var $ = Et.indexOf(L.d) + 1;
							(Et[$] = parseFloat(Et[$]) + A + re),
								(Et[1] = parseFloat(Et[1]) + A + re),
								tr(Et);
						}
					}),
					(b.disable = function (A, $) {
						if (
							b.enabled &&
							(A !== !1 && b.revert(!0, !0),
							(b.enabled = b.isActive = !1),
							$ || (ot && ot.pause()),
							(ze = 0),
							Mt && (Mt.uncache = 1),
							j && le(a, "refreshInit", j),
							ye && (ye.pause(), rt.tween && rt.tween.kill() && (rt.tween = 0)),
							!B)
						) {
							for (var I = ht.length; I--; )
								if (ht[I].scroller === D && ht[I] !== b) return;
							le(D, "resize", Mr), B || le(D, "scroll", Xn);
						}
					}),
					(b.kill = function (A, $) {
						b.disable(A, $), ot && !$ && ot.kill(), u && delete Qo[u];
						var I = ht.indexOf(b);
						I >= 0 && ht.splice(I, 1),
							I === ke && ks > 0 && ke--,
							(I = 0),
							ht.forEach(function (W) {
								return W.scroller === b.scroller && (I = 1);
							}),
							I || Ae || (b.scroll.rec = 0),
							n &&
								((n.scrollTrigger = null),
								A && n.revert({ kill: !1 }),
								$ || n.kill()),
							K &&
								[K, Ft, P, wt].forEach(function (W) {
									return W.parentNode && W.parentNode.removeChild(W);
								}),
							Xr === b && (Xr = 0),
							l &&
								(Mt && (Mt.uncache = 1),
								(I = 0),
								ht.forEach(function (W) {
									return W.pin === l && I++;
								}),
								I || (Mt.spacer = 0)),
							e.onKill && e.onKill(b);
					}),
					ht.push(b),
					b.enable(!1, !1),
					y && y(b),
					n && n.add && !Ct)
				) {
					var F = b.update;
					(b.update = function () {
						(b.update = F), q || Z || b.refresh();
					}),
						U.delayedCall(0.01, b.update),
						(Ct = 0.01),
						(q = Z = 0);
				} else b.refresh();
				l && Kf();
			}),
			(a.register = function (e) {
				return (
					Vn ||
						((U = e || Ku()), ju() && window.document && a.enable(), (Vn = br)),
					Vn
				);
			}),
			(a.defaults = function (e) {
				if (e) for (var n in e) ys[n] = e[n];
				return ys;
			}),
			(a.disable = function (e, n) {
				(br = 0),
					ht.forEach(function (s) {
						return s[n ? "kill" : "disable"](e);
					}),
					le(mt, "wheel", Xn),
					le($t, "scroll", Xn),
					clearInterval(hs),
					le($t, "touchcancel", Oi),
					le(Nt, "touchstart", Oi),
					_s(le, $t, "pointerdown,touchstart,mousedown", ul),
					_s(le, $t, "pointerup,touchend,mouseup", cl),
					qs.kill(),
					gs(le);
				for (var r = 0; r < gt.length; r += 3)
					ms(le, gt[r], gt[r + 1]), ms(le, gt[r], gt[r + 2]);
			}),
			(a.enable = function () {
				if (
					((mt = window),
					($t = document),
					(mi = $t.documentElement),
					(Nt = $t.body),
					U &&
						((Jr = U.utils.toArray),
						(Fr = U.utils.clamp),
						(jo = U.core.context || Oi),
						(po = U.core.suppressOverwrites || Oi),
						(Sa = mt.history.scrollRestoration || "auto"),
						(Zo = mt.pageYOffset),
						U.core.globals("ScrollTrigger", a),
						Nt))
				) {
					(br = 1),
						(Jn = document.createElement("div")),
						(Jn.style.height = "100vh"),
						(Jn.style.position = "absolute"),
						sc(),
						Hf(),
						Qt.register(U),
						(a.isTouch = Qt.isTouch),
						(ji =
							Qt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(Go = Qt.isTouch === 1),
						ue(mt, "wheel", Xn),
						(Vu = [mt, $t, mi, Nt]),
						U.matchMedia
							? ((a.matchMedia = function (u) {
									var c = U.matchMedia(),
										f;
									for (f in u) c.add(f, u[f]);
									return c;
								}),
								U.addEventListener("matchMediaInit", function () {
									return Ea();
								}),
								U.addEventListener("matchMediaRevert", function () {
									return nc();
								}),
								U.addEventListener("matchMedia", function () {
									wn(0, 1), In("matchMedia");
								}),
								U.matchMedia("(orientation: portrait)", function () {
									return yo(), yo;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						yo(),
						ue($t, "scroll", Xn);
					var e = Nt.style,
						n = e.borderTopStyle,
						r = U.core.Animation.prototype,
						s,
						o;
					for (
						r.revert ||
							Object.defineProperty(r, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							e.borderTopStyle = "solid",
							s = Bi(Nt),
							oe.m = Math.round(s.top + oe.sc()) || 0,
							Re.m = Math.round(s.left + Re.sc()) || 0,
							n ? (e.borderTopStyle = n) : e.removeProperty("border-top-style"),
							hs = setInterval(hl, 250),
							U.delayedCall(0.5, function () {
								return (ps = 0);
							}),
							ue($t, "touchcancel", Oi),
							ue(Nt, "touchstart", Oi),
							_s(ue, $t, "pointerdown,touchstart,mousedown", ul),
							_s(ue, $t, "pointerup,touchend,mouseup", cl),
							Uo = U.utils.checkPrefix("transform"),
							As.push(Uo),
							Vn = Te(),
							qs = U.delayedCall(0.2, wn).pause(),
							Wn = [
								$t,
								"visibilitychange",
								function () {
									var u = mt.innerWidth,
										c = mt.innerHeight;
									$t.hidden
										? ((sl = u), (ol = c))
										: (sl !== u || ol !== c) && Mr();
								},
								$t,
								"DOMContentLoaded",
								wn,
								mt,
								"load",
								wn,
								mt,
								"resize",
								Mr,
							],
							gs(ue),
							ht.forEach(function (u) {
								return u.enable(0, 1);
							}),
							o = 0;
						o < gt.length;
						o += 3
					)
						ms(le, gt[o], gt[o + 1]), ms(le, gt[o], gt[o + 2]);
				}
			}),
			(a.config = function (e) {
				"limitCallbacks" in e && (go = !!e.limitCallbacks);
				var n = e.syncInterval;
				(n && clearInterval(hs)) || ((hs = n) && setInterval(hl, n)),
					"ignoreMobileResize" in e &&
						(Go = a.isTouch === 1 && e.ignoreMobileResize),
					"autoRefreshEvents" in e &&
						(gs(le) || gs(ue, e.autoRefreshEvents || "none"),
						(qu = (e.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (e, n) {
				var r = Be(e),
					s = gt.indexOf(r),
					o = Ln(r);
				~s && gt.splice(s, o ? 6 : 2),
					n && (o ? Ai.unshift(mt, n, Nt, n, mi, n) : Ai.unshift(r, n));
			}),
			(a.clearMatchMedia = function (e) {
				ht.forEach(function (n) {
					return n._ctx && n._ctx.query === e && n._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (e, n, r) {
				var s = (Qe(e) ? Be(e) : e).getBoundingClientRect(),
					o = s[r ? Dn : On] * n || 0;
				return r
					? s.right - o > 0 && s.left + o < mt.innerWidth
					: s.bottom - o > 0 && s.top + o < mt.innerHeight;
			}),
			(a.positionInViewport = function (e, n, r) {
				Qe(e) && (e = Be(e));
				var s = e.getBoundingClientRect(),
					o = s[r ? Dn : On],
					u =
						n == null
							? o / 2
							: n in js
								? js[n] * o
								: ~n.indexOf("%")
									? (parseFloat(n) * o) / 100
									: parseFloat(n) || 0;
				return r ? (s.left + u) / mt.innerWidth : (s.top + u) / mt.innerHeight;
			}),
			(a.killAll = function (e) {
				if (
					(ht.slice(0).forEach(function (r) {
						return r.vars.id !== "ScrollSmoother" && r.kill();
					}),
					e !== !0)
				) {
					var n = Rn.killAll || [];
					(Rn = {}),
						n.forEach(function (r) {
							return r();
						});
				}
			}),
			a
		);
	})();
dt.version = "3.12.5";
dt.saveStyles = function (a) {
	return a
		? Jr(a).forEach(function (t) {
				if (t && t.style) {
					var i = Ke.indexOf(t);
					i >= 0 && Ke.splice(i, 5),
						Ke.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							U.core.getCache(t),
							jo(),
						);
				}
			})
		: Ke;
};
dt.revert = function (a, t) {
	return Ea(!a, t);
};
dt.create = function (a, t) {
	return new dt(a, t);
};
dt.refresh = function (a) {
	return a ? Mr() : (Vn || dt.register()) && wn(!0);
};
dt.update = function (a) {
	return ++gt.cache && Vi(a === !0 ? 2 : 0);
};
dt.clearScrollMemory = rc;
dt.maxScroll = function (a, t) {
	return Ei(a, t ? Re : oe);
};
dt.getScrollFunc = function (a, t) {
	return un(Be(a), t ? Re : oe);
};
dt.getById = function (a) {
	return Qo[a];
};
dt.getAll = function () {
	return ht.filter(function (a) {
		return a.vars.id !== "ScrollSmoother";
	});
};
dt.isScrolling = function () {
	return !!di;
};
dt.snapDirectional = Ca;
dt.addEventListener = function (a, t) {
	var i = Rn[a] || (Rn[a] = []);
	~i.indexOf(t) || i.push(t);
};
dt.removeEventListener = function (a, t) {
	var i = Rn[a],
		e = i && i.indexOf(t);
	e >= 0 && i.splice(e, 1);
};
dt.batch = function (a, t) {
	var i = [],
		e = {},
		n = t.interval || 0.016,
		r = t.batchMax || 1e9,
		s = function (c, f) {
			var d = [],
				h = [],
				l = U.delayedCall(n, function () {
					f(d, h), (d = []), (h = []);
				}).pause();
			return function (g) {
				d.length || l.restart(!0),
					d.push(g.trigger),
					h.push(g),
					r <= d.length && l.progress(1);
			};
		},
		o;
	for (o in t)
		e[o] =
			o.substr(0, 2) === "on" && Ie(t[o]) && o !== "onRefreshInit"
				? s(o, t[o])
				: t[o];
	return (
		Ie(r) &&
			((r = r()),
			ue(dt, "refresh", function () {
				return (r = t.batchMax());
			})),
		Jr(a).forEach(function (u) {
			var c = {};
			for (o in e) c[o] = e[o];
			(c.trigger = u), i.push(dt.create(c));
		}),
		i
	);
};
var xl = function (t, i, e, n) {
		return (
			i > n ? t(n) : i < 0 && t(0),
			e > n ? (n - i) / (e - i) : e < 0 ? i / (i - e) : 1
		);
	},
	vo = function a(t, i) {
		i === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					i === !0
						? "auto"
						: i
							? "pan-" + i + (Qt.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === mi && a(Nt, i);
	},
	bs = { auto: 1, scroll: 1 },
	ed = function (t) {
		var i = t.event,
			e = t.target,
			n = t.axis,
			r = (i.changedTouches ? i.changedTouches[0] : i).target,
			s = r._gsap || U.core.getCache(r),
			o = Te(),
			u;
		if (!s._isScrollT || o - s._isScrollT > 2e3) {
			for (
				;
				r &&
				r !== Nt &&
				((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
					!(bs[(u = ui(r)).overflowY] || bs[u.overflowX]));

			)
				r = r.parentNode;
			(s._isScroll =
				r &&
				r !== e &&
				!Ln(r) &&
				(bs[(u = ui(r)).overflowY] || bs[u.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || n === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
	},
	ac = function (t, i, e, n) {
		return Qt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: i,
			onWheel: (n = n && ed),
			onPress: n,
			onDrag: n,
			onScroll: n,
			onEnable: function () {
				return e && ue($t, Qt.eventTypes[0], wl, !1, !0);
			},
			onDisable: function () {
				return le($t, Qt.eventTypes[0], wl, !0);
			},
		});
	},
	id = /(input|label|select|textarea)/i,
	vl,
	wl = function (t) {
		var i = id.test(t.target.tagName);
		(i || vl) && ((t._gsapAllow = !0), (vl = i));
	},
	nd = function (t) {
		yn(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var i = t,
			e = i.normalizeScrollX,
			n = i.momentum,
			r = i.allowNestedScroll,
			s = i.onRelease,
			o,
			u,
			c = Be(t.target) || mi,
			f = U.core.globals().ScrollSmoother,
			d = f && f.get(),
			h =
				ji &&
				((t.content && Be(t.content)) ||
					(d && t.content !== !1 && !d.smooth() && d.content())),
			l = un(c, oe),
			g = un(c, Re),
			p = 1,
			_ =
				(Qt.isTouch && mt.visualViewport
					? mt.visualViewport.scale * mt.visualViewport.width
					: mt.outerWidth) / mt.innerWidth,
			m = 0,
			x = Ie(n)
				? function () {
						return n(o);
					}
				: function () {
						return n || 2.8;
					},
			M,
			v,
			T = ac(c, t.type, !0, r),
			C = function () {
				return (v = !1);
			},
			S = Oi,
			O = Oi,
			E = function () {
				(u = Ei(c, oe)),
					(O = Fr(ji ? 1 : 0, u)),
					e && (S = Fr(0, Ei(c, Re))),
					(M = Pn);
			},
			L = function () {
				(h._gsap.y = Tr(parseFloat(h._gsap.y) + l.offset) + "px"),
					(h.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(h._gsap.y) +
						", 0, 1)"),
					(l.offset = l.cacheID = 0);
			},
			N = function () {
				if (v) {
					requestAnimationFrame(C);
					var J = Tr(o.deltaY / 2),
						ut = O(l.v - J);
					if (h && ut !== l.v + l.offset) {
						l.offset = ut - l.v;
						var b = Tr((parseFloat(h && h._gsap.y) || 0) - l.offset);
						(h.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							b +
							", 0, 1)"),
							(h._gsap.y = b + "px"),
							(l.cacheID = gt.cache),
							Vi();
					}
					return !0;
				}
				l.offset && L(), (v = !0);
			},
			D,
			R,
			B,
			Y,
			H = function () {
				E(),
					D.isActive() &&
						D.vars.scrollY > u &&
						(l() > u ? D.progress(1) && l(u) : D.resetTo("scrollY", u));
			};
		return (
			h && U.set(h, { y: "+=0" }),
			(t.ignoreCheck = function (X) {
				return (
					(ji && X.type === "touchmove" && N()) ||
					(p > 1.05 && X.type !== "touchstart") ||
					o.isGesturing ||
					(X.touches && X.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				v = !1;
				var X = p;
				(p = Tr(((mt.visualViewport && mt.visualViewport.scale) || 1) / _)),
					D.pause(),
					X !== p && vo(c, p > 1.01 ? !0 : e ? !1 : "x"),
					(R = g()),
					(B = l()),
					E(),
					(M = Pn);
			}),
			(t.onRelease = t.onGestureStart =
				function (X, J) {
					if ((l.offset && L(), !J)) Y.restart(!0);
					else {
						gt.cache++;
						var ut = x(),
							b,
							j;
						e &&
							((b = g()),
							(j = b + (ut * 0.05 * -X.velocityX) / 0.227),
							(ut *= xl(g, b, j, Ei(c, Re))),
							(D.vars.scrollX = S(j))),
							(b = l()),
							(j = b + (ut * 0.05 * -X.velocityY) / 0.227),
							(ut *= xl(l, b, j, Ei(c, oe))),
							(D.vars.scrollY = O(j)),
							D.invalidate().duration(ut).play(0.01),
							((ji && D.vars.scrollY >= u) || b >= u - 1) &&
								U.to({}, { onUpdate: H, duration: ut });
					}
					s && s(X);
				}),
			(t.onWheel = function () {
				D._ts && D.pause(), Te() - m > 1e3 && ((M = 0), (m = Te()));
			}),
			(t.onChange = function (X, J, ut, b, j) {
				if (
					(Pn !== M && E(),
					J && e && g(S(b[2] === J ? R + (X.startX - X.x) : g() + J - b[1])),
					ut)
				) {
					l.offset && L();
					var nt = j[2] === ut,
						ct = nt ? B + X.startY - X.y : l() + ut - j[1],
						tt = O(ct);
					nt && ct !== tt && (B += tt - ct), l(tt);
				}
				(ut || J) && Vi();
			}),
			(t.onEnable = function () {
				vo(c, e ? !1 : "x"),
					dt.addEventListener("refresh", H),
					ue(mt, "resize", H),
					l.smooth &&
						((l.target.style.scrollBehavior = "auto"),
						(l.smooth = g.smooth = !1)),
					T.enable();
			}),
			(t.onDisable = function () {
				vo(c, !0),
					le(mt, "resize", H),
					dt.removeEventListener("refresh", H),
					T.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(o = new Qt(t)),
			(o.iOS = ji),
			ji && !l() && l(1),
			ji && U.ticker.add(Oi),
			(Y = o._dc),
			(D = U.to(o, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: e ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: oc(l, l(), function () {
						return D.pause();
					}),
				},
				onUpdate: Vi,
				onComplete: Y.vars.onComplete,
			})),
			o
		);
	};
dt.sort = function (a) {
	return ht.sort(
		a ||
			function (t, i) {
				return (
					(t.vars.refreshPriority || 0) * -1e6 +
					t.start -
					(i.start + (i.vars.refreshPriority || 0) * -1e6)
				);
			},
	);
};
dt.observe = function (a) {
	return new Qt(a);
};
dt.normalizeScroll = function (a) {
	if (typeof a > "u") return Ee;
	if (a === !0 && Ee) return Ee.enable();
	if (a === !1) {
		Ee && Ee.kill(), (Ee = a);
		return;
	}
	var t = a instanceof Qt ? a : nd(a);
	return Ee && Ee.target === t.target && Ee.kill(), Ln(t.target) && (Ee = t), t;
};
dt.core = {
	_getVelocityProp: qo,
	_inputObserver: ac,
	_scrollers: gt,
	_proxies: Ai,
	bridge: {
		ss: function () {
			di || In("scrollStart"), (di = Te());
		},
		ref: function () {
			return be;
		},
	},
};
Ku() && U.registerPlugin(dt);
et.registerPlugin(dt);
class rd {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = et.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				onEnter: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeave: () => {
					this.DOM.section.classList.remove("is-active");
				},
				onEnterBack: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeaveBack: () => {
					this.DOM.section.classList.remove("is-active");
				},
			},
		});
	}
	destroy() {
		var t;
		this.DOM &&
			((t = this.visibilityTl) == null || t.kill(),
			(this.visibilityTl = void 0),
			(this.DOM = void 0));
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const i = t.querySelector(".js-compute-section");
		i && ((this.DOM = {}), (this.DOM.section = i), this.setup());
	}
}
function ka(a) {
	return typeof a == "number";
}
function ta(a) {
	return typeof a == "string";
}
function Aa(a) {
	return typeof a == "boolean";
}
function bl(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function Bt(a) {
	return Math.abs(a);
}
function La(a) {
	return Math.sign(a);
}
function $r(a, t) {
	return Bt(a - t);
}
function sd(a, t) {
	if (a === 0 || t === 0 || Bt(a) <= Bt(t)) return 0;
	const i = $r(Bt(a), Bt(t));
	return Bt(i / a);
}
function es(a) {
	return is(a).map(Number);
}
function vi(a) {
	return a[as(a)];
}
function as(a) {
	return Math.max(0, a.length - 1);
}
function Ra(a, t) {
	return t === as(a);
}
function Tl(a, t = 0) {
	return Array.from(Array(a), (i, e) => t + e);
}
function is(a) {
	return Object.keys(a);
}
function lc(a, t) {
	return [a, t].reduce(
		(i, e) => (
			is(e).forEach((n) => {
				const r = i[n],
					s = e[n],
					o = bl(r) && bl(s);
				i[n] = o ? lc(r, s) : s;
			}),
			i
		),
		{},
	);
}
function uc(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function od(a, t) {
	const i = { start: e, center: n, end: r };
	function e() {
		return 0;
	}
	function n(u) {
		return r(u) / 2;
	}
	function r(u) {
		return t - u;
	}
	function s(u, c) {
		return ta(a) ? i[a](u) : a(t, u, c);
	}
	return { measure: s };
}
function ns() {
	let a = [];
	function t(n, r, s, o = { passive: !0 }) {
		let u;
		if ("addEventListener" in n)
			n.addEventListener(r, s, o), (u = () => n.removeEventListener(r, s, o));
		else {
			const c = n;
			c.addListener(s), (u = () => c.removeListener(s));
		}
		return a.push(u), e;
	}
	function i() {
		a = a.filter((n) => n());
	}
	const e = { add: t, clear: i };
	return e;
}
function ad(a, t, i, e) {
	const n = ns(),
		r = 1e3 / 60;
	let s = null,
		o = 0,
		u = 0;
	function c() {
		n.add(a, "visibilitychange", () => {
			a.hidden && g();
		});
	}
	function f() {
		l(), n.clear();
	}
	function d(_) {
		if (!u) return;
		s || (s = _);
		const m = _ - s;
		for (s = _, o += m; o >= r; ) i(), (o -= r);
		const x = Bt(o / r);
		e(x), u && t.requestAnimationFrame(d);
	}
	function h() {
		u || (u = t.requestAnimationFrame(d));
	}
	function l() {
		t.cancelAnimationFrame(u), (s = null), (o = 0), (u = 0);
	}
	function g() {
		(s = null), (o = 0);
	}
	return { init: c, destroy: f, start: h, stop: l, update: i, render: e };
}
function ld(a, t) {
	const i = a === "y" ? "y" : "x",
		e = a === "y" ? "x" : "y",
		n = o(),
		r = u();
	function s(f) {
		const { width: d, height: h } = f;
		return i === "x" ? d : h;
	}
	function o() {
		return i === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function u() {
		return i === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: i, cross: e, startEdge: n, endEdge: r, measureSize: s };
}
function Fn(a = 0, t = 0) {
	const i = Bt(a - t);
	function e(c) {
		return c < a;
	}
	function n(c) {
		return c > t;
	}
	function r(c) {
		return e(c) || n(c);
	}
	function s(c) {
		return r(c) ? (e(c) ? a : t) : c;
	}
	function o(c) {
		return i ? c - i * Math.ceil((c - t) / i) : c;
	}
	return {
		length: i,
		max: t,
		min: a,
		constrain: s,
		reachedAny: r,
		reachedMax: n,
		reachedMin: e,
		removeOffset: o,
	};
}
function cc(a, t, i) {
	const { constrain: e } = Fn(0, a),
		n = a + 1;
	let r = s(t);
	function s(h) {
		return i ? Bt((n + h) % n) : e(h);
	}
	function o() {
		return r;
	}
	function u(h) {
		return (r = s(h)), d;
	}
	function c(h) {
		return f().set(o() + h);
	}
	function f() {
		return cc(a, o(), i);
	}
	const d = { get: o, set: u, add: c, clone: f };
	return d;
}
function ud(a) {
	const t = a === "rtl" ? -1 : 1;
	function i(n) {
		return n * t;
	}
	return { apply: i };
}
function cd(a, t, i, e, n, r, s, o, u, c, f, d, h, l, g, p, _, m, x, M) {
	const { cross: v } = a,
		T = ["INPUT", "SELECT", "TEXTAREA"],
		C = { passive: !1 },
		S = ns(),
		O = ns(),
		E = Fn(50, 225).constrain(g.measure(20)),
		L = { mouse: 300, touch: 400 },
		N = { mouse: 500, touch: 600 },
		D = p ? 43 : 25;
	let R = !1,
		B = 0,
		Y = 0,
		H = !1,
		X = !1,
		J = !1,
		ut = !1;
	function b(V) {
		if (!M) return;
		function q(K) {
			(Aa(M) || M(V, K)) && vt(K);
		}
		const Z = i;
		S.add(Z, "dragstart", (K) => K.preventDefault(), C)
			.add(Z, "touchmove", () => {}, C)
			.add(Z, "touchend", () => {})
			.add(Z, "touchstart", q)
			.add(Z, "mousedown", q)
			.add(Z, "touchcancel", rt)
			.add(Z, "contextmenu", rt)
			.add(Z, "click", Mt, !0);
	}
	function j() {
		S.clear(), O.clear();
	}
	function nt() {
		const V = ut ? e : i;
		O.add(V, "touchmove", ft, C)
			.add(V, "touchend", rt)
			.add(V, "mousemove", ft, C)
			.add(V, "mouseup", rt);
	}
	function ct(V) {
		const q = V.nodeName || "";
		return T.includes(q);
	}
	function tt() {
		return (p ? N : L)[ut ? "mouse" : "touch"];
	}
	function Pt(V, q) {
		const Z = h.add(La(V) * -1),
			K = d.byDistance(V, !p).distance;
		return p || Bt(V) < E
			? K
			: m && q
				? K * 0.5
				: d.byIndex(Z.get(), 0).distance;
	}
	function vt(V) {
		const q = uc(V, n);
		(ut = q),
			!(q && V.button !== 0) &&
				(ct(V.target) ||
					((J = p && q && !V.buttons && R),
					(R = $r(r.get(), o.get()) >= 2),
					(H = !0),
					s.pointerDown(V),
					f.useFriction(0).useDuration(0),
					r.set(o),
					nt(),
					(B = s.readPoint(V)),
					(Y = s.readPoint(V, v)),
					l.emit("pointerDown")));
	}
	function ft(V) {
		const q = s.readPoint(V),
			Z = s.readPoint(V, v),
			K = $r(q, B),
			Ft = $r(Z, Y);
		if (!X && !ut && (!V.cancelable || ((X = K > Ft), !X))) return rt(V);
		const P = s.pointerMove(V);
		K > _ && (J = !0),
			f.useFriction(0.3).useDuration(1),
			u.start(),
			r.add(t.apply(P)),
			V.preventDefault();
	}
	function rt(V) {
		const Z = d.byDistance(0, !1).index !== h.get(),
			K = s.pointerUp(V) * tt(),
			Ft = Pt(t.apply(K), Z),
			P = sd(K, Ft),
			wt = D - 10 * P,
			Yt = x + P / 50;
		(X = !1),
			(H = !1),
			O.clear(),
			f.useDuration(wt).useFriction(Yt),
			c.distance(Ft, !p),
			(ut = !1),
			l.emit("pointerUp");
	}
	function Mt(V) {
		J && (V.stopPropagation(), V.preventDefault());
	}
	function Dt() {
		return H;
	}
	return { init: b, pointerDown: Dt, destroy: j };
}
function fd(a, t) {
	let e, n;
	function r(d) {
		return d.timeStamp;
	}
	function s(d, h) {
		const g = `client${(h || a.scroll) === "x" ? "X" : "Y"}`;
		return (uc(d, t) ? d : d.touches[0])[g];
	}
	function o(d) {
		return (e = d), (n = d), s(d);
	}
	function u(d) {
		const h = s(d) - s(n),
			l = r(d) - r(e) > 170;
		return (n = d), l && (e = d), h;
	}
	function c(d) {
		if (!e || !n) return 0;
		const h = s(n) - s(e),
			l = r(d) - r(e),
			g = r(d) - r(n) > 170,
			p = h / l;
		return l && !g && Bt(p) > 0.1 ? p : 0;
	}
	return { pointerDown: o, pointerMove: u, pointerUp: c, readPoint: s };
}
function dd() {
	function a(i) {
		const { offsetTop: e, offsetLeft: n, offsetWidth: r, offsetHeight: s } = i;
		return {
			top: e,
			right: n + r,
			bottom: e + s,
			left: n,
			width: r,
			height: s,
		};
	}
	return { measure: a };
}
function hd(a) {
	function t(e) {
		return a * (e / 100);
	}
	return { measure: t };
}
function pd(a, t, i, e, n, r, s) {
	let o,
		u,
		c = [],
		f = !1;
	function d(p) {
		return n.measureSize(s.measure(p));
	}
	function h(p) {
		if (!r) return;
		(u = d(a)), (c = e.map(d));
		function _(x) {
			for (const M of x) {
				const v = M.target === a,
					T = e.indexOf(M.target),
					C = v ? u : c[T],
					S = d(v ? a : e[T]);
				if (Bt(S - C) >= 0.5) {
					i.requestAnimationFrame(() => {
						p.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((x) => {
			f || ((Aa(r) || r(p, x)) && _(x));
		})),
			[a].concat(e).forEach((x) => o.observe(x));
	}
	function l() {
		o && o.disconnect(), (f = !0);
	}
	return { init: h, destroy: l };
}
function gd(a, t, i, e, n) {
	let r = 0,
		s = 0,
		o = e,
		u = n,
		c = a.get(),
		f = 0;
	function d() {
		const T = i.get() - a.get(),
			C = !o;
		let S = 0;
		return (
			C
				? ((r = 0), a.set(i), (S = T))
				: ((r += T / o), (r *= u), (c += r), a.add(r), (S = c - f)),
			(s = La(S)),
			(f = c),
			v
		);
	}
	function h() {
		const T = i.get() - t.get();
		return Bt(T) < 0.001;
	}
	function l() {
		return o;
	}
	function g() {
		return s;
	}
	function p() {
		return r;
	}
	function _() {
		return x(e);
	}
	function m() {
		return M(n);
	}
	function x(T) {
		return (o = T), v;
	}
	function M(T) {
		return (u = T), v;
	}
	const v = {
		direction: g,
		duration: l,
		velocity: p,
		seek: d,
		settled: h,
		useBaseFriction: m,
		useBaseDuration: _,
		useFriction: M,
		useDuration: x,
	};
	return v;
}
function _d(a, t, i, e, n) {
	const r = n.measure(10),
		s = n.measure(50),
		o = Fn(0.1, 0.99);
	let u = !1;
	function c() {
		return !(u || !a.reachedAny(i.get()) || !a.reachedAny(t.get()));
	}
	function f(l) {
		if (!c()) return;
		const g = a.reachedMin(t.get()) ? "min" : "max",
			p = Bt(a[g] - t.get()),
			_ = i.get() - t.get(),
			m = o.constrain(p / s);
		i.subtract(_ * m),
			!l &&
				Bt(_) < r &&
				(i.set(a.constrain(i.get())), e.useDuration(25).useBaseFriction());
	}
	function d(l) {
		u = !l;
	}
	return { constrain: f, toggleActive: d };
}
function md(a, t, i, e, n) {
	const r = Fn(-t + a, 0),
		s = d(),
		o = f(),
		u = h();
	function c(g, p) {
		return $r(g, p) < 1;
	}
	function f() {
		const g = s[0],
			p = vi(s),
			_ = s.lastIndexOf(g),
			m = s.indexOf(p) + 1;
		return Fn(_, m);
	}
	function d() {
		return i
			.map((g, p) => {
				const { min: _, max: m } = r,
					x = r.constrain(g),
					M = !p,
					v = Ra(i, p);
				return M ? m : v || c(_, x) ? _ : c(m, x) ? m : x;
			})
			.map((g) => parseFloat(g.toFixed(3)));
	}
	function h() {
		if (t <= a + n) return [r.max];
		if (e === "keepSnaps") return s;
		const { min: g, max: p } = o;
		return s.slice(g, p);
	}
	return { snapsContained: u, scrollContainLimit: o };
}
function yd(a, t, i) {
	const e = t[0],
		n = i ? e - a : vi(t);
	return { limit: Fn(n, e) };
}
function xd(a, t, i, e) {
	const r = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: u } = Fn(r, s);
	function c(h) {
		return h === 1 ? u(i.get()) : h === -1 ? o(i.get()) : !1;
	}
	function f(h) {
		if (!c(h)) return;
		const l = a * (h * -1);
		e.forEach((g) => g.add(l));
	}
	return { loop: f };
}
function vd(a) {
	const { max: t, length: i } = a;
	function e(r) {
		const s = r - t;
		return i ? s / -i : 0;
	}
	return { get: e };
}
function wd(a, t, i, e, n) {
	const { startEdge: r, endEdge: s } = a,
		{ groupSlides: o } = n,
		u = d().map(t.measure),
		c = h(),
		f = l();
	function d() {
		return o(e)
			.map((p) => vi(p)[s] - p[0][r])
			.map(Bt);
	}
	function h() {
		return e.map((p) => i[r] - p[r]).map((p) => -Bt(p));
	}
	function l() {
		return o(c)
			.map((p) => p[0])
			.map((p, _) => p + u[_]);
	}
	return { snaps: c, snapsAligned: f };
}
function bd(a, t, i, e, n, r) {
	const { groupSlides: s } = n,
		{ min: o, max: u } = e,
		c = f();
	function f() {
		const h = s(r),
			l = !a || t === "keepSnaps";
		return i.length === 1
			? [r]
			: l
				? h
				: h.slice(o, u).map((g, p, _) => {
						const m = !p,
							x = Ra(_, p);
						if (m) {
							const M = vi(_[0]) + 1;
							return Tl(M);
						}
						if (x) {
							const M = as(r) - vi(_)[0] + 1;
							return Tl(M, vi(_)[0]);
						}
						return g;
					});
	}
	return { slideRegistry: c };
}
function Td(a, t, i, e, n) {
	const { reachedAny: r, removeOffset: s, constrain: o } = e;
	function u(g) {
		return g.concat().sort((p, _) => Bt(p) - Bt(_))[0];
	}
	function c(g) {
		const p = a ? s(g) : o(g),
			_ = t
				.map((x) => x - p)
				.map((x) => f(x, 0))
				.map((x, M) => ({ diff: x, index: M }))
				.sort((x, M) => Bt(x.diff) - Bt(M.diff)),
			{ index: m } = _[0];
		return { index: m, distance: p };
	}
	function f(g, p) {
		const _ = [g, g + i, g - i];
		if (!a) return _[0];
		if (!p) return u(_);
		const m = _.filter((x) => La(x) === p);
		return m.length ? u(m) : vi(_) - i;
	}
	function d(g, p) {
		const _ = t[g] - n.get(),
			m = f(_, p);
		return { index: g, distance: m };
	}
	function h(g, p) {
		const _ = n.get() + g,
			{ index: m, distance: x } = c(_),
			M = !a && r(_);
		if (!p || M) return { index: m, distance: g };
		const v = t[m] - x,
			T = g + f(v, 0);
		return { index: m, distance: T };
	}
	return { byDistance: h, byIndex: d, shortcut: f };
}
function Sd(a, t, i, e, n, r, s) {
	function o(d) {
		const h = d.distance,
			l = d.index !== t.get();
		r.add(h),
			h && (e.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			l && (i.set(t.get()), t.set(d.index), s.emit("select"));
	}
	function u(d, h) {
		const l = n.byDistance(d, h);
		o(l);
	}
	function c(d, h) {
		const l = t.clone().set(d),
			g = n.byIndex(l.get(), h);
		o(g);
	}
	return { distance: u, index: c };
}
function Md(a, t, i, e, n, r) {
	let s = 0;
	function o() {
		r.add(document, "keydown", u, !1), t.forEach(c);
	}
	function u(d) {
		d.code === "Tab" && (s = new Date().getTime());
	}
	function c(d) {
		const h = () => {
			if (new Date().getTime() - s > 10) return;
			a.scrollLeft = 0;
			const p = t.indexOf(d),
				_ = i.findIndex((m) => m.includes(p));
			ka(_) && (n.useDuration(0), e.index(_, 0));
		};
		r.add(d, "focus", h, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function Rs(a) {
	let t = a;
	function i() {
		return t;
	}
	function e(u) {
		t = s(u);
	}
	function n(u) {
		t += s(u);
	}
	function r(u) {
		t -= s(u);
	}
	function s(u) {
		return ka(u) ? u : u.get();
	}
	return { get: i, set: e, add: n, subtract: r };
}
function fc(a, t, i) {
	const e = a.scroll === "x" ? s : o,
		n = i.style;
	let r = !1;
	function s(h) {
		return `translate3d(${h}px,0px,0px)`;
	}
	function o(h) {
		return `translate3d(0px,${h}px,0px)`;
	}
	function u(h) {
		r || (n.transform = e(t.apply(h)));
	}
	function c(h) {
		r = !h;
	}
	function f() {
		r ||
			((n.transform = ""),
			i.getAttribute("style") || i.removeAttribute("style"));
	}
	return { clear: f, to: u, toggleActive: c };
}
function Dd(a, t, i, e, n, r, s, o, u, c) {
	const d = es(r),
		h = es(r).reverse(),
		l = x().concat(M());
	function g(O, E) {
		return O.reduce((L, N) => L - r[N], E);
	}
	function p(O, E) {
		return O.reduce((L, N) => (g(L, E) > 0 ? L.concat([N]) : L), []);
	}
	function _(O) {
		return s.map((E, L) => ({
			start: E - n[L] + 0.5 + O,
			end: E + i - 0.5 + O,
		}));
	}
	function m(O, E, L) {
		const N = _(E);
		return O.map((D) => {
			const R = L ? 0 : -e,
				B = L ? e : 0,
				Y = L ? "end" : "start",
				H = N[D][Y];
			return {
				index: D,
				loopPoint: H,
				slideLocation: Rs(-1),
				translate: fc(a, t, c[D]),
				target: () => (u.get() > H ? R : B),
			};
		});
	}
	function x() {
		const O = o[0],
			E = p(h, O);
		return m(E, e, !1);
	}
	function M() {
		const O = i - o[0] - 1,
			E = p(d, O);
		return m(E, -e, !0);
	}
	function v() {
		return l.every(({ index: O }) => {
			const E = d.filter((L) => L !== O);
			return g(E, i) <= 0.1;
		});
	}
	function T() {
		l.forEach((O) => {
			const { target: E, translate: L, slideLocation: N } = O,
				D = E();
			D !== N.get() && (L.to(D), N.set(D));
		});
	}
	function C() {
		l.forEach((O) => O.translate.clear());
	}
	return { canLoop: v, clear: C, loop: T, loopPoints: l };
}
function Od(a, t, i) {
	let e,
		n = !1;
	function r(u) {
		if (!i) return;
		function c(f) {
			for (const d of f)
				if (d.type === "childList") {
					u.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(e = new MutationObserver((f) => {
			n || ((Aa(i) || i(u, f)) && c(f));
		})),
			e.observe(a, { childList: !0 });
	}
	function s() {
		e && e.disconnect(), (n = !0);
	}
	return { init: r, destroy: s };
}
function Pd(a, t, i, e) {
	const n = {};
	let r = null,
		s = null,
		o,
		u = !1;
	function c() {
		(o = new IntersectionObserver(
			(g) => {
				u ||
					(g.forEach((p) => {
						const _ = t.indexOf(p.target);
						n[_] = p;
					}),
					(r = null),
					(s = null),
					i.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: e },
		)),
			t.forEach((g) => o.observe(g));
	}
	function f() {
		o && o.disconnect(), (u = !0);
	}
	function d(g) {
		return is(n).reduce((p, _) => {
			const m = parseInt(_),
				{ isIntersecting: x } = n[m];
			return ((g && x) || (!g && !x)) && p.push(m), p;
		}, []);
	}
	function h(g = !0) {
		if (g && r) return r;
		if (!g && s) return s;
		const p = d(g);
		return g && (r = p), g || (s = p), p;
	}
	return { init: c, destroy: f, get: h };
}
function Cd(a, t, i, e, n, r) {
	const { measureSize: s, startEdge: o, endEdge: u } = a,
		c = i[0] && n,
		f = g(),
		d = p(),
		h = i.map(s),
		l = _();
	function g() {
		if (!c) return 0;
		const x = i[0];
		return Bt(t[o] - x[o]);
	}
	function p() {
		if (!c) return 0;
		const x = r.getComputedStyle(vi(e));
		return parseFloat(x.getPropertyValue(`margin-${u}`));
	}
	function _() {
		return i
			.map((x, M, v) => {
				const T = !M,
					C = Ra(v, M);
				return T ? h[M] + f : C ? h[M] + d : v[M + 1][o] - x[o];
			})
			.map(Bt);
	}
	return { slideSizes: h, slideSizesWithGaps: l, startGap: f, endGap: d };
}
function Ed(a, t, i, e, n, r, s, o, u, c) {
	const { startEdge: f, endEdge: d } = a,
		h = ka(e);
	function l(m, x) {
		return es(m)
			.filter((M) => M % x === 0)
			.map((M) => m.slice(M, M + x));
	}
	function g(m) {
		return m.length
			? es(m)
					.reduce((x, M) => {
						const v = vi(x) || 0,
							T = v === 0,
							C = M === as(m),
							S = r[f] - s[v][f],
							O = r[f] - s[M][d],
							E = !n && T ? t.apply(o) : 0,
							L = !n && C ? t.apply(u) : 0;
						return (
							Bt(O - L - (S + E)) > i + c && x.push(M), C && x.push(m.length), x
						);
					}, [])
					.map((x, M, v) => {
						const T = Math.max(v[M - 1] || 0);
						return m.slice(T, x);
					})
			: [];
	}
	function p(m) {
		return h ? l(m, e) : g(m);
	}
	return { groupSlides: p };
}
function kd(a, t, i, e, n, r, s) {
	const {
			align: o,
			axis: u,
			direction: c,
			startIndex: f,
			loop: d,
			duration: h,
			dragFree: l,
			dragThreshold: g,
			inViewThreshold: p,
			slidesToScroll: _,
			skipSnaps: m,
			containScroll: x,
			watchResize: M,
			watchSlides: v,
			watchDrag: T,
		} = r,
		C = 2,
		S = dd(),
		O = S.measure(t),
		E = i.map(S.measure),
		L = ud(c),
		N = ld(u, c),
		D = N.measureSize(O),
		R = hd(D),
		B = od(o, D),
		Y = !d && !!x,
		H = d || !!x,
		{
			slideSizes: X,
			slideSizesWithGaps: J,
			startGap: ut,
			endGap: b,
		} = Cd(N, O, E, i, H, n),
		j = Ed(N, L, D, _, d, O, E, ut, b, C),
		{ snaps: nt, snapsAligned: ct } = wd(N, B, O, E, j),
		tt = -vi(nt) + vi(J),
		{ snapsContained: Pt, scrollContainLimit: vt } = md(D, tt, ct, x, C),
		ft = Y ? Pt : ct,
		{ limit: rt } = yd(tt, ft, d),
		Mt = cc(as(ft), f, d),
		Dt = Mt.clone(),
		st = es(i),
		V = ({
			dragHandler: qt,
			scrollBody: de,
			scrollBounds: pi,
			options: { loop: Et },
		}) => {
			Et || pi.constrain(qt.pointerDown()), de.seek();
		},
		q = (
			{
				scrollBody: qt,
				translate: de,
				location: pi,
				offsetLocation: Et,
				scrollLooper: bi,
				slideLooper: Ue,
				dragHandler: Ge,
				animation: Ne,
				eventHandler: je,
				options: { loop: Oe },
			},
			ot,
		) => {
			const me = qt.velocity(),
				Rt = qt.settled();
			Rt && !Ge.pointerDown() && (Ne.stop(), je.emit("settle")),
				Rt || je.emit("scroll"),
				Et.set(pi.get() - me + me * ot),
				Oe && (bi.loop(qt.direction()), Ue.loop()),
				de.to(Et.get());
		},
		Z = ad(
			e,
			n,
			() => V(ie),
			(qt) => q(ie, qt),
		),
		K = 0.68,
		Ft = ft[Mt.get()],
		P = Rs(Ft),
		wt = Rs(Ft),
		Yt = Rs(Ft),
		ae = gd(P, wt, Yt, h, K),
		Ct = Td(d, ft, tt, rt, Yt),
		Lt = Sd(Z, Mt, Dt, ae, Ct, Yt, s),
		qe = vd(rt),
		Fe = ns(),
		Xt = Pd(t, i, s, p),
		{ slideRegistry: Wt } = bd(Y, x, ft, vt, j, st),
		St = Md(a, i, Wt, Lt, ae, Fe),
		ie = {
			ownerDocument: e,
			ownerWindow: n,
			eventHandler: s,
			containerRect: O,
			slideRects: E,
			animation: Z,
			axis: N,
			direction: L,
			dragHandler: cd(
				N,
				L,
				a,
				e,
				n,
				Yt,
				fd(N, n),
				P,
				Z,
				Lt,
				ae,
				Ct,
				Mt,
				s,
				R,
				l,
				g,
				m,
				K,
				T,
			),
			eventStore: Fe,
			percentOfView: R,
			index: Mt,
			indexPrevious: Dt,
			limit: rt,
			location: P,
			offsetLocation: wt,
			options: r,
			resizeHandler: pd(t, s, n, i, N, M, S),
			scrollBody: ae,
			scrollBounds: _d(rt, wt, Yt, ae, R),
			scrollLooper: xd(tt, rt, wt, [P, wt, Yt]),
			scrollProgress: qe,
			scrollSnapList: ft.map(qe.get),
			scrollSnaps: ft,
			scrollTarget: Ct,
			scrollTo: Lt,
			slideLooper: Dd(N, L, D, tt, X, J, nt, ft, wt, i),
			slideFocus: St,
			slidesHandler: Od(t, s, v),
			slidesInView: Xt,
			slideIndexes: st,
			slideRegistry: Wt,
			slidesToScroll: j,
			target: Yt,
			translate: fc(N, L, t),
		};
	return ie;
}
function Ad() {
	const a = {};
	let t;
	function i(u) {
		t = u;
	}
	function e(u) {
		return a[u] || [];
	}
	function n(u) {
		return e(u).forEach((c) => c(t, u)), o;
	}
	function r(u, c) {
		return (a[u] = e(u).concat([c])), o;
	}
	function s(u, c) {
		return (a[u] = e(u).filter((f) => f !== c)), o;
	}
	const o = { init: i, emit: n, off: s, on: r };
	return o;
}
const Ld = {
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
function Rd(a) {
	function t(r, s) {
		return lc(r, s || {});
	}
	function i(r) {
		const s = r.breakpoints || {},
			o = is(s)
				.filter((u) => a.matchMedia(u).matches)
				.map((u) => s[u])
				.reduce((u, c) => t(u, c), {});
		return t(r, o);
	}
	function e(r) {
		return r
			.map((s) => is(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: i, optionsMediaQueries: e };
}
function Id(a) {
	let t = [];
	function i(r, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(r, a)),
			s.reduce((o, u) => Object.assign(o, { [u.name]: u }), {})
		);
	}
	function e() {
		t = t.filter((r) => r.destroy());
	}
	return { init: i, destroy: e };
}
function Ia(a, t, i) {
	const e = a.ownerDocument,
		n = e.defaultView,
		r = Rd(n),
		s = Id(r),
		o = ns(),
		u = Ad(),
		{ mergeOptions: c, optionsAtMedia: f, optionsMediaQueries: d } = r,
		{ on: h, off: l, emit: g } = u,
		p = N;
	let _ = !1,
		m,
		x = c(Ld, Ia.globalOptions),
		M = c(x),
		v = [],
		T,
		C,
		S;
	function O() {
		const { container: st, slides: V } = M;
		C = (ta(st) ? a.querySelector(st) : st) || a.children[0];
		const Z = ta(V) ? C.querySelectorAll(V) : V;
		S = [].slice.call(Z || C.children);
	}
	function E(st) {
		const V = kd(a, C, S, e, n, st, u);
		if (st.loop && !V.slideLooper.canLoop()) {
			const q = Object.assign({}, st, { loop: !1 });
			return E(q);
		}
		return V;
	}
	function L(st, V) {
		_ ||
			((x = c(x, st)),
			(M = f(x)),
			(v = V || v),
			O(),
			(m = E(M)),
			d([x, ...v.map(({ options: q }) => q)]).forEach((q) =>
				o.add(q, "change", N),
			),
			M.active &&
				(m.translate.to(m.location.get()),
				m.animation.init(),
				m.slidesInView.init(),
				m.slideFocus.init(),
				m.eventHandler.init(Dt),
				m.resizeHandler.init(Dt),
				m.slidesHandler.init(Dt),
				m.options.loop && m.slideLooper.loop(),
				C.offsetParent && S.length && m.dragHandler.init(Dt),
				(T = s.init(Dt, v))));
	}
	function N(st, V) {
		const q = j();
		D(), L(c({ startIndex: q }, st), V), u.emit("reInit");
	}
	function D() {
		m.dragHandler.destroy(),
			m.eventStore.clear(),
			m.translate.clear(),
			m.slideLooper.clear(),
			m.resizeHandler.destroy(),
			m.slidesHandler.destroy(),
			m.slidesInView.destroy(),
			m.animation.destroy(),
			s.destroy(),
			o.clear();
	}
	function R() {
		_ || ((_ = !0), o.clear(), D(), u.emit("destroy"));
	}
	function B(st, V, q) {
		!M.active ||
			_ ||
			(m.scrollBody.useBaseFriction().useDuration(V === !0 ? 0 : M.duration),
			m.scrollTo.index(st, q || 0));
	}
	function Y(st) {
		const V = m.index.add(1).get();
		B(V, st, -1);
	}
	function H(st) {
		const V = m.index.add(-1).get();
		B(V, st, 1);
	}
	function X() {
		return m.index.add(1).get() !== j();
	}
	function J() {
		return m.index.add(-1).get() !== j();
	}
	function ut() {
		return m.scrollSnapList;
	}
	function b() {
		return m.scrollProgress.get(m.location.get());
	}
	function j() {
		return m.index.get();
	}
	function nt() {
		return m.indexPrevious.get();
	}
	function ct() {
		return m.slidesInView.get();
	}
	function tt() {
		return m.slidesInView.get(!1);
	}
	function Pt() {
		return T;
	}
	function vt() {
		return m;
	}
	function ft() {
		return a;
	}
	function rt() {
		return C;
	}
	function Mt() {
		return S;
	}
	const Dt = {
		canScrollNext: X,
		canScrollPrev: J,
		containerNode: rt,
		internalEngine: vt,
		destroy: R,
		off: l,
		on: h,
		emit: g,
		plugins: Pt,
		previousScrollSnap: nt,
		reInit: p,
		rootNode: ft,
		scrollNext: Y,
		scrollPrev: H,
		scrollProgress: b,
		scrollSnapList: ut,
		scrollTo: B,
		selectedScrollSnap: j,
		slideNodes: Mt,
		slidesInView: ct,
		slidesNotInView: tt,
	};
	return L(t, i), setTimeout(() => u.emit("init"), 0), Dt;
}
Ia.globalOptions = void 0;
const Fd = {
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
function Fa(a = {}) {
	let t,
		i,
		e,
		n = !1,
		r = !0,
		s = !1,
		o = 0,
		u = 0;
	function c(v, T) {
		i = v;
		const { mergeOptions: C, optionsAtMedia: S } = T,
			O = C(Fd, Fa.globalOptions),
			E = C(O, a);
		if (((t = S(E)), i.scrollSnapList().length <= 1)) return;
		(s = t.jump), (e = !1);
		const { eventStore: L, ownerDocument: N } = i.internalEngine(),
			D = i.rootNode(),
			R = (t.rootNode && t.rootNode(D)) || D,
			B = i.containerNode();
		i.on("pointerDown", h),
			t.stopOnInteraction || i.on("pointerUp", d),
			t.stopOnMouseEnter &&
				(L.add(R, "mouseenter", () => {
					(r = !1), h();
				}),
				t.stopOnInteraction ||
					L.add(R, "mouseleave", () => {
						(r = !0), d();
					})),
			t.stopOnFocusIn &&
				(L.add(B, "focusin", h),
				t.stopOnInteraction || L.add(B, "focusout", d)),
			L.add(N, "visibilitychange", l),
			t.playOnInit && i.on("init", d).on("reInit", d);
	}
	function f() {
		i.off("init", d).off("reInit", d).off("pointerDown", h).off("pointerUp", d),
			h(),
			cancelAnimationFrame(o),
			(o = 0),
			(e = !0),
			(n = !1);
	}
	function d() {
		if (e || !r) return;
		n || i.emit("autoplay:play");
		const { ownerWindow: v } = i.internalEngine();
		v.clearInterval(u), (u = v.setInterval(x, t.delay)), (n = !0);
	}
	function h() {
		if (e) return;
		n && i.emit("autoplay:stop");
		const { ownerWindow: v } = i.internalEngine();
		v.clearInterval(u), (u = 0), (n = !1);
	}
	function l() {
		const { ownerDocument: v } = i.internalEngine();
		if (v.visibilityState === "hidden") return (r = n), h();
		r && d();
	}
	function g(v) {
		typeof v < "u" && (s = v), (r = !0), d();
	}
	function p() {
		n && h();
	}
	function _() {
		n && g();
	}
	function m() {
		return n;
	}
	function x() {
		o = requestAnimationFrame(() => {
			const { index: v } = i.internalEngine(),
				T = v.clone().add(1).get(),
				C = i.scrollSnapList().length - 1;
			t.stopOnLastSnap && T === C && h(),
				i.canScrollNext() ? i.scrollNext(s) : i.scrollTo(0, s);
		});
	}
	return {
		name: "autoplay",
		options: a,
		init: c,
		destroy: f,
		play: g,
		stop: p,
		reset: _,
		isPlaying: m,
	};
}
Fa.globalOptions = void 0;
class Nd {
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
			i = window.innerHeight;
		this.detectApple(),
			this.getDevice(),
			this.window.width !== t && (this.window.width = window.innerWidth),
			this.window.height !== i && this.createRuler();
	}
}
const te = new Nd();
function zd(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function dc(a, t = 0) {
	const i = a.getBoundingClientRect(),
		e = (window.scrollY || document.documentElement.scrollTop) + i.top - t;
	zd(e);
}
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $i,
	Cn,
	Na,
	io,
	Dr,
	Is,
	Ks,
	Hr,
	xi = "transform",
	ea = xi + "Origin",
	hc,
	pc = function (t) {
		var i = t.ownerDocument || t;
		for (
			!(xi in t.style) &&
			("msTransform" in t.style) &&
			((xi = "msTransform"), (ea = xi + "Origin"));
			i.parentNode && (i = i.parentNode);

		);
		if (((Cn = window), (Ks = new Nn()), i)) {
			($i = i),
				(Na = i.documentElement),
				(io = i.body),
				(Hr = $i.createElementNS("http://www.w3.org/2000/svg", "g")),
				(Hr.style.transform = "none");
			var e = i.createElement("div"),
				n = i.createElement("div"),
				r = i && (i.body || i.firstElementChild);
			r &&
				r.appendChild &&
				(r.appendChild(e),
				e.appendChild(n),
				e.setAttribute(
					"style",
					"position:static;transform:translate3d(0,0,1px)",
				),
				(hc = n.offsetParent !== e),
				r.removeChild(e));
		}
		return i;
	},
	Bd = function (t) {
		for (var i, e; t && t !== io; )
			(e = t._gsap),
				e && e.uncache && e.get(t, "x"),
				e &&
					!e.scaleX &&
					!e.scaleY &&
					e.renderTransform &&
					((e.scaleX = e.scaleY = 1e-4),
					e.renderTransform(1, e),
					i ? i.push(e) : (i = [e])),
				(t = t.parentNode);
		return i;
	},
	gc = [],
	_c = [],
	Yd = function () {
		return Cn.pageYOffset || $i.scrollTop || Na.scrollTop || io.scrollTop || 0;
	},
	Xd = function () {
		return (
			Cn.pageXOffset || $i.scrollLeft || Na.scrollLeft || io.scrollLeft || 0
		);
	},
	za = function (t) {
		return (
			t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
		);
	},
	$d = function a(t) {
		if (Cn.getComputedStyle(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	wo = function a(t, i) {
		if (t.parentNode && ($i || pc(t))) {
			var e = za(t),
				n = e
					? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				r = e ? (i ? "rect" : "g") : "div",
				s = i !== 2 ? 0 : 100,
				o = i === 3 ? 100 : 0,
				u =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				c = $i.createElementNS
					? $i.createElementNS(n.replace(/^https/, "http"), r)
					: $i.createElement(r);
			return (
				i &&
					(e
						? (Is || (Is = a(t)),
							c.setAttribute("width", 0.01),
							c.setAttribute("height", 0.01),
							c.setAttribute("transform", "translate(" + s + "," + o + ")"),
							Is.appendChild(c))
						: (Dr || ((Dr = a(t)), (Dr.style.cssText = u)),
							(c.style.cssText =
								u +
								"width:0.1px;height:0.1px;top:" +
								o +
								"px;left:" +
								s +
								"px"),
							Dr.appendChild(c))),
				c
			);
		}
		throw "Need document and parent.";
	},
	Hd = function (t) {
		for (var i = new Nn(), e = 0; e < t.numberOfItems; e++)
			i.multiply(t.getItem(e).matrix);
		return i;
	},
	Vd = function (t) {
		var i = t.getCTM(),
			e;
		return (
			i ||
				((e = t.style[xi]),
				(t.style[xi] = "none"),
				t.appendChild(Hr),
				(i = Hr.getCTM()),
				t.removeChild(Hr),
				e
					? (t.style[xi] = e)
					: t.style.removeProperty(
							xi.replace(/([A-Z])/g, "-$1").toLowerCase(),
						)),
			i || Ks.clone()
		);
	},
	Wd = function (t, i) {
		var e = za(t),
			n = t === e,
			r = e ? gc : _c,
			s = t.parentNode,
			o,
			u,
			c,
			f,
			d,
			h;
		if (t === Cn) return t;
		if (
			(r.length || r.push(wo(t, 1), wo(t, 2), wo(t, 3)), (o = e ? Is : Dr), e)
		)
			n
				? ((c = Vd(t)), (f = -c.e / c.a), (d = -c.f / c.d), (u = Ks))
				: t.getBBox
					? ((c = t.getBBox()),
						(u = t.transform ? t.transform.baseVal : {}),
						(u = u.numberOfItems
							? u.numberOfItems > 1
								? Hd(u)
								: u.getItem(0).matrix
							: Ks),
						(f = u.a * c.x + u.c * c.y),
						(d = u.b * c.x + u.d * c.y))
					: ((u = new Nn()), (f = d = 0)),
				i && t.tagName.toLowerCase() === "g" && (f = d = 0),
				(n ? e : s).appendChild(o),
				o.setAttribute(
					"transform",
					"matrix(" +
						u.a +
						"," +
						u.b +
						"," +
						u.c +
						"," +
						u.d +
						"," +
						(u.e + f) +
						"," +
						(u.f + d) +
						")",
				);
		else {
			if (((f = d = 0), hc))
				for (
					u = t.offsetParent, c = t;
					c && (c = c.parentNode) && c !== u && c.parentNode;

				)
					(Cn.getComputedStyle(c)[xi] + "").length > 4 &&
						((f = c.offsetLeft), (d = c.offsetTop), (c = 0));
			if (
				((h = Cn.getComputedStyle(t)),
				h.position !== "absolute" && h.position !== "fixed")
			)
				for (u = t.offsetParent; s && s !== u; )
					(f += s.scrollLeft || 0), (d += s.scrollTop || 0), (s = s.parentNode);
			(c = o.style),
				(c.top = t.offsetTop - d + "px"),
				(c.left = t.offsetLeft - f + "px"),
				(c[xi] = h[xi]),
				(c[ea] = h[ea]),
				(c.position = h.position === "fixed" ? "fixed" : "absolute"),
				t.parentNode.appendChild(o);
		}
		return o;
	},
	bo = function (t, i, e, n, r, s, o) {
		return (t.a = i), (t.b = e), (t.c = n), (t.d = r), (t.e = s), (t.f = o), t;
	},
	Nn = (function () {
		function a(i, e, n, r, s, o) {
			i === void 0 && (i = 1),
				e === void 0 && (e = 0),
				n === void 0 && (n = 0),
				r === void 0 && (r = 1),
				s === void 0 && (s = 0),
				o === void 0 && (o = 0),
				bo(this, i, e, n, r, s, o);
		}
		var t = a.prototype;
		return (
			(t.inverse = function () {
				var e = this.a,
					n = this.b,
					r = this.c,
					s = this.d,
					o = this.e,
					u = this.f,
					c = e * s - n * r || 1e-10;
				return bo(
					this,
					s / c,
					-n / c,
					-r / c,
					e / c,
					(r * u - s * o) / c,
					-(e * u - n * o) / c,
				);
			}),
			(t.multiply = function (e) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					u = this.e,
					c = this.f,
					f = e.a,
					d = e.c,
					h = e.b,
					l = e.d,
					g = e.e,
					p = e.f;
				return bo(
					this,
					f * n + h * s,
					f * r + h * o,
					d * n + l * s,
					d * r + l * o,
					u + g * n + p * s,
					c + g * r + p * o,
				);
			}),
			(t.clone = function () {
				return new a(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(t.equals = function (e) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					u = this.e,
					c = this.f;
				return (
					n === e.a &&
					r === e.b &&
					s === e.c &&
					o === e.d &&
					u === e.e &&
					c === e.f
				);
			}),
			(t.apply = function (e, n) {
				n === void 0 && (n = {});
				var r = e.x,
					s = e.y,
					o = this.a,
					u = this.b,
					c = this.c,
					f = this.d,
					d = this.e,
					h = this.f;
				return (
					(n.x = r * o + s * c + d || 0), (n.y = r * u + s * f + h || 0), n
				);
			}),
			a
		);
	})();
function xn(a, t, i, e) {
	if (!a || !a.parentNode || ($i || pc(a)).documentElement === a)
		return new Nn();
	var n = Bd(a),
		r = za(a),
		s = r ? gc : _c,
		o = Wd(a, i),
		u = s[0].getBoundingClientRect(),
		c = s[1].getBoundingClientRect(),
		f = s[2].getBoundingClientRect(),
		d = o.parentNode,
		h = !e && $d(a),
		l = new Nn(
			(c.left - u.left) / 100,
			(c.top - u.top) / 100,
			(f.left - u.left) / 100,
			(f.top - u.top) / 100,
			u.left + (h ? 0 : Xd()),
			u.top + (h ? 0 : Yd()),
		);
	if ((d.removeChild(o), n))
		for (u = n.length; u--; )
			(c = n[u]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
	return t ? l.inverse() : l;
}
function Sl(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function qd(a, t) {
	(a.prototype = Object.create(t.prototype)),
		(a.prototype.constructor = a),
		(a.__proto__ = t);
}
var yt,
	At,
	ei,
	wi,
	Hi,
	To,
	zi,
	ia,
	Or,
	nn,
	mc,
	na,
	rs,
	Ba,
	Pr,
	_i,
	Cr,
	Fs,
	yc,
	ra,
	Qs = 0,
	xc = function () {
		return typeof window < "u";
	},
	vc = function () {
		return yt || (xc() && (yt = window.gsap) && yt.registerPlugin && yt);
	},
	Ki = function (t) {
		return typeof t == "function";
	},
	Vr = function (t) {
		return typeof t == "object";
	},
	yi = function (t) {
		return typeof t > "u";
	},
	Ns = function () {
		return !1;
	},
	Wr = "transform",
	sa = "transformOrigin",
	Ui = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	yr = Array.isArray,
	Ts = function (t, i) {
		var e = ei.createElementNS
			? ei.createElementNS(
					(i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: ei.createElement(t);
		return e.style ? e : ei.createElement(t);
	},
	Ml = 180 / Math.PI,
	pn = 1e20,
	Ud = new Nn(),
	Gi =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	En = [],
	er = {},
	Gd = 0,
	jd = /^(?:a|input|textarea|button|select)$/i,
	Dl = 0,
	$n = {},
	Ii = {},
	wc = function (t, i) {
		var e = {},
			n;
		for (n in t) e[n] = i ? t[n] * i : t[n];
		return e;
	},
	Kd = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	Ol = function a(t, i) {
		for (var e = t.length, n; e--; )
			i
				? (t[e].style.touchAction = i)
				: t[e].style.removeProperty("touch-action"),
				(n = t[e].children),
				n && n.length && a(n, i);
	},
	bc = function () {
		return En.forEach(function (t) {
			return t();
		});
	},
	Qd = function (t) {
		En.push(t), En.length === 1 && yt.ticker.add(bc);
	},
	Pl = function () {
		return !En.length && yt.ticker.remove(bc);
	},
	Cl = function (t) {
		for (var i = En.length; i--; ) En[i] === t && En.splice(i, 1);
		yt.to(Pl, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: Pl,
			data: "_draggable",
		});
	},
	Zd = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	se = function (t, i, e, n) {
		if (t.addEventListener) {
			var r = rs[i];
			(n = n || (mc ? { passive: !1 } : null)),
				t.addEventListener(r || i, e, n),
				r && i !== r && t.addEventListener(i, e, n);
		}
	},
	Zt = function (t, i, e, n) {
		if (t.removeEventListener) {
			var r = rs[i];
			t.removeEventListener(r || i, e, n),
				r && i !== r && t.removeEventListener(i, e, n);
		}
	},
	si = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	Jd = function (t, i) {
		for (var e = t.length; e--; ) if (t[e].identifier === i) return !0;
	},
	th = function a(t) {
		(Ba = t.touches && Qs < t.touches.length), Zt(t.target, "touchend", a);
	},
	El = function (t) {
		(Ba = t.touches && Qs < t.touches.length), se(t.target, "touchend", th);
	},
	ir = function (t) {
		return (
			At.pageYOffset ||
			t.scrollTop ||
			t.documentElement.scrollTop ||
			t.body.scrollTop ||
			0
		);
	},
	nr = function (t) {
		return (
			At.pageXOffset ||
			t.scrollLeft ||
			t.documentElement.scrollLeft ||
			t.body.scrollLeft ||
			0
		);
	},
	kl = function a(t, i) {
		se(t, "scroll", i), cr(t.parentNode) || a(t.parentNode, i);
	},
	Al = function a(t, i) {
		Zt(t, "scroll", i), cr(t.parentNode) || a(t.parentNode, i);
	},
	cr = function (t) {
		return (
			!t ||
			t === wi ||
			t.nodeType === 9 ||
			t === ei.body ||
			t === At ||
			!t.nodeType ||
			!t.parentNode
		);
	},
	Ll = function (t, i) {
		var e = i === "x" ? "Width" : "Height",
			n = "scroll" + e,
			r = "client" + e;
		return Math.max(
			0,
			cr(t)
				? Math.max(wi[n], Hi[n]) - (At["inner" + e] || wi[r] || Hi[r])
				: t[n] - t[r],
		);
	},
	So = function a(t, i) {
		var e = Ll(t, "x"),
			n = Ll(t, "y");
		cr(t) ? (t = Ii) : a(t.parentNode, i),
			(t._gsMaxScrollX = e),
			(t._gsMaxScrollY = n),
			i ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	Mo = function (t, i, e) {
		var n = t.style;
		n &&
			(yi(n[i]) && (i = Or(i, t) || i),
			e == null
				? n.removeProperty &&
					n.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (n[i] = e));
	},
	ss = function (t) {
		return At.getComputedStyle(
			t instanceof Element ? t : t.host || (t.parentNode || {}).host || t,
		);
	},
	gn = {},
	Hn = function (t) {
		if (t === At)
			return (
				(gn.left = gn.top = 0),
				(gn.width = gn.right =
					wi.clientWidth || t.innerWidth || Hi.clientWidth || 0),
				(gn.height = gn.bottom =
					(t.innerHeight || 0) - 20 < wi.clientHeight
						? wi.clientHeight
						: t.innerHeight || Hi.clientHeight || 0),
				gn
			);
		var i = t.ownerDocument || ei,
			e = yi(t.pageX)
				? !t.nodeType && !yi(t.left) && !yi(t.top)
					? t
					: nn(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - nr(i),
						top: t.pageY - ir(i),
						right: t.pageX - nr(i) + 1,
						bottom: t.pageY - ir(i) + 1,
					};
		return (
			yi(e.right) && !yi(e.width)
				? ((e.right = e.left + e.width), (e.bottom = e.top + e.height))
				: yi(e.width) &&
					(e = {
						width: e.right - e.left,
						height: e.bottom - e.top,
						right: e.right,
						left: e.left,
						bottom: e.bottom,
						top: e.top,
					}),
			e
		);
	},
	jt = function (t, i, e) {
		var n = t.vars,
			r = n[e],
			s = t._listeners[i],
			o;
		return (
			Ki(r) &&
				(o = r.apply(
					n.callbackScope || t,
					n[e + "Params"] || [t.pointerEvent],
				)),
			s && t.dispatchEvent(i) === !1 && (o = !1),
			o
		);
	},
	Rl = function (t, i) {
		var e = nn(t)[0],
			n,
			r,
			s;
		return !e.nodeType && e !== At
			? yi(t.left)
				? ((r = t.min || t.minX || t.minRotation || 0),
					(n = t.min || t.minY || 0),
					{
						left: r,
						top: n,
						width: (t.max || t.maxX || t.maxRotation || 0) - r,
						height: (t.max || t.maxY || 0) - n,
					})
				: ((s = { x: 0, y: 0 }),
					{
						left: t.left - s.x,
						top: t.top - s.y,
						width: t.width,
						height: t.height,
					})
			: eh(e, i);
	},
	oi = {},
	eh = function (t, i) {
		i = nn(i)[0];
		var e = t.getBBox && t.ownerSVGElement,
			n = t.ownerDocument || ei,
			r,
			s,
			o,
			u,
			c,
			f,
			d,
			h,
			l,
			g,
			p,
			_,
			m;
		if (t === At)
			(o = ir(n)),
				(r = nr(n)),
				(s =
					r +
					(n.documentElement.clientWidth ||
						t.innerWidth ||
						n.body.clientWidth ||
						0)),
				(u =
					o +
					((t.innerHeight || 0) - 20 < n.documentElement.clientHeight
						? n.documentElement.clientHeight
						: t.innerHeight || n.body.clientHeight || 0));
		else {
			if (i === At || yi(i)) return t.getBoundingClientRect();
			(r = o = 0),
				e
					? ((g = t.getBBox()), (p = g.width), (_ = g.height))
					: (t.viewBox &&
							(g = t.viewBox.baseVal) &&
							((r = g.x || 0), (o = g.y || 0), (p = g.width), (_ = g.height)),
						p ||
							((m = ss(t)),
							(g = m.boxSizing === "border-box"),
							(p =
								(parseFloat(m.width) || t.clientWidth || 0) +
								(g
									? 0
									: parseFloat(m.borderLeftWidth) +
										parseFloat(m.borderRightWidth))),
							(_ =
								(parseFloat(m.height) || t.clientHeight || 0) +
								(g
									? 0
									: parseFloat(m.borderTopWidth) +
										parseFloat(m.borderBottomWidth))))),
				(s = p),
				(u = _);
		}
		return t === i
			? { left: r, top: o, width: s - r, height: u - o }
			: ((c = xn(i, !0).multiply(xn(t))),
				(f = c.apply({ x: r, y: o })),
				(d = c.apply({ x: s, y: o })),
				(h = c.apply({ x: s, y: u })),
				(l = c.apply({ x: r, y: u })),
				(r = Math.min(f.x, d.x, h.x, l.x)),
				(o = Math.min(f.y, d.y, h.y, l.y)),
				{
					left: r,
					top: o,
					width: Math.max(f.x, d.x, h.x, l.x) - r,
					height: Math.max(f.y, d.y, h.y, l.y) - o,
				});
	},
	Do = function (t, i, e, n, r, s) {
		var o = {},
			u,
			c,
			f;
		if (i)
			if (r !== 1 && i instanceof Array) {
				if (((o.end = u = []), (f = i.length), Vr(i[0])))
					for (c = 0; c < f; c++) u[c] = wc(i[c], r);
				else for (c = 0; c < f; c++) u[c] = i[c] * r;
				(e += 1.1), (n -= 1.1);
			} else
				Ki(i)
					? (o.end = function (d) {
							var h = i.call(t, d),
								l,
								g;
							if (r !== 1)
								if (Vr(h)) {
									l = {};
									for (g in h) l[g] = h[g] * r;
									h = l;
								} else h *= r;
							return h;
						})
					: (o.end = i);
		return (
			(e || e === 0) && (o.max = e),
			(n || n === 0) && (o.min = n),
			s && (o.velocity = 0),
			o
		);
	},
	ih = function a(t) {
		var i;
		return !t || !t.getAttribute || t === Hi
			? !1
			: (i = t.getAttribute("data-clickable")) === "true" ||
				  (i !== "false" &&
						(jd.test(t.nodeName + "") ||
							t.getAttribute("contentEditable") === "true"))
				? !0
				: a(t.parentNode);
	},
	Ss = function (t, i) {
		for (var e = t.length, n; e--; )
			(n = t[e]),
				(n.ondragstart = n.onselectstart = i ? null : Ns),
				yt.set(n, { lazy: !0, userSelect: i ? "text" : "none" });
	},
	nh = function a(t) {
		if (ss(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	Tc,
	oa,
	rh = function (t, i) {
		(t = yt.utils.toArray(t)[0]), (i = i || {});
		var e = document.createElement("div"),
			n = e.style,
			r = t.firstChild,
			s = 0,
			o = 0,
			u = t.scrollTop,
			c = t.scrollLeft,
			f = t.scrollWidth,
			d = t.scrollHeight,
			h = 0,
			l = 0,
			g = 0,
			p,
			_,
			m,
			x,
			M,
			v;
		Tc && i.force3D !== !1
			? ((M = "translate3d("), (v = "px,0px)"))
			: Wr && ((M = "translate("), (v = "px)")),
			(this.scrollTop = function (T, C) {
				if (!arguments.length) return -this.top();
				this.top(-T, C);
			}),
			(this.scrollLeft = function (T, C) {
				if (!arguments.length) return -this.left();
				this.left(-T, C);
			}),
			(this.left = function (T, C) {
				if (!arguments.length) return -(t.scrollLeft + o);
				var S = t.scrollLeft - c,
					O = o;
				if ((S > 2 || S < -2) && !C) {
					(c = t.scrollLeft),
						yt.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-c),
						i.onKill && i.onKill();
					return;
				}
				(T = -T),
					T < 0
						? ((o = (T - 0.5) | 0), (T = 0))
						: T > l
							? ((o = (T - l) | 0), (T = l))
							: (o = 0),
					(o || O) &&
						(this._skip || (n[Wr] = M + -o + "px," + -s + v),
						o + h >= 0 && (n.paddingRight = o + h + "px")),
					(t.scrollLeft = T | 0),
					(c = t.scrollLeft);
			}),
			(this.top = function (T, C) {
				if (!arguments.length) return -(t.scrollTop + s);
				var S = t.scrollTop - u,
					O = s;
				if ((S > 2 || S < -2) && !C) {
					(u = t.scrollTop),
						yt.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-u),
						i.onKill && i.onKill();
					return;
				}
				(T = -T),
					T < 0
						? ((s = (T - 0.5) | 0), (T = 0))
						: T > g
							? ((s = (T - g) | 0), (T = g))
							: (s = 0),
					(s || O) && (this._skip || (n[Wr] = M + -o + "px," + -s + v)),
					(t.scrollTop = T | 0),
					(u = t.scrollTop);
			}),
			(this.maxScrollTop = function () {
				return g;
			}),
			(this.maxScrollLeft = function () {
				return l;
			}),
			(this.disable = function () {
				for (r = e.firstChild; r; )
					(x = r.nextSibling), t.appendChild(r), (r = x);
				t === e.parentNode && t.removeChild(e);
			}),
			(this.enable = function () {
				if (((r = t.firstChild), r !== e)) {
					for (; r; ) (x = r.nextSibling), e.appendChild(r), (r = x);
					t.appendChild(e), this.calibrate();
				}
			}),
			(this.calibrate = function (T) {
				var C = t.clientWidth === p,
					S,
					O,
					E;
				(u = t.scrollTop),
					(c = t.scrollLeft),
					!(
						C &&
						t.clientHeight === _ &&
						e.offsetHeight === m &&
						f === t.scrollWidth &&
						d === t.scrollHeight &&
						!T
					) &&
						((s || o) &&
							((O = this.left()),
							(E = this.top()),
							this.left(-t.scrollLeft),
							this.top(-t.scrollTop)),
						(S = ss(t)),
						(!C || T) &&
							((n.display = "block"),
							(n.width = "auto"),
							(n.paddingRight = "0px"),
							(h = Math.max(0, t.scrollWidth - t.clientWidth)),
							h &&
								(h +=
									parseFloat(S.paddingLeft) +
									(oa ? parseFloat(S.paddingRight) : 0))),
						(n.display = "inline-block"),
						(n.position = "relative"),
						(n.overflow = "visible"),
						(n.verticalAlign = "top"),
						(n.boxSizing = "content-box"),
						(n.width = "100%"),
						(n.paddingRight = h + "px"),
						oa && (n.paddingBottom = S.paddingBottom),
						(p = t.clientWidth),
						(_ = t.clientHeight),
						(f = t.scrollWidth),
						(d = t.scrollHeight),
						(l = t.scrollWidth - p),
						(g = t.scrollHeight - _),
						(m = e.offsetHeight),
						(n.display = "block"),
						(O || E) && (this.left(O), this.top(E)));
			}),
			(this.content = e),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	Oo = function (t) {
		if (xc() && document.body) {
			var i = window && window.navigator;
			(At = window),
				(ei = document),
				(wi = ei.documentElement),
				(Hi = ei.body),
				(To = Ts("div")),
				(Fs = !!window.PointerEvent),
				(zi = Ts("div")),
				(zi.style.cssText =
					"visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
				(Cr = zi.style.cursor === "grab" ? "grab" : "move"),
				(Pr = i && i.userAgent.toLowerCase().indexOf("android") !== -1),
				(na =
					("ontouchstart" in wi && "orientation" in At) ||
					(i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0))),
				(oa = (function () {
					var e = Ts("div"),
						n = Ts("div"),
						r = n.style,
						s = Hi,
						o;
					return (
						(r.display = "inline-block"),
						(r.position = "relative"),
						(e.style.cssText =
							"width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
						e.appendChild(n),
						s.appendChild(e),
						(o = n.offsetHeight + 18 > e.scrollHeight),
						s.removeChild(e),
						o
					);
				})()),
				(rs = (function (e) {
					for (
						var n = e.split(","),
							r = (
								("onpointerdown" in To)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in To)
										? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
										: e
							).split(","),
							s = {},
							o = 4;
						--o > -1;

					)
						(s[n[o]] = r[o]), (s[r[o]] = n[o]);
					try {
						wi.addEventListener(
							"test",
							null,
							Object.defineProperty({}, "passive", {
								get: function () {
									mc = 1;
								},
							}),
						);
					} catch {}
					return s;
				})("touchstart,touchmove,touchend,touchcancel")),
				se(ei, "touchcancel", Ns),
				se(At, "touchmove", Ns),
				Hi && Hi.addEventListener("touchstart", Ns),
				se(ei, "contextmenu", function () {
					for (var e in er) er[e].isPressed && er[e].endDrag();
				}),
				(yt = ia = vc());
		}
		yt
			? ((_i = yt.plugins.inertia),
				(yc = yt.core.context || function () {}),
				(Or = yt.utils.checkPrefix),
				(Wr = Or(Wr)),
				(sa = Or(sa)),
				(nn = yt.utils.toArray),
				(ra = yt.core.getStyleSaver),
				(Tc = !!Or("perspective")))
			: t && console.warn("Please gsap.registerPlugin(Draggable)");
	},
	sh = (function () {
		function a(i) {
			(this._listeners = {}), (this.target = i || this);
		}
		var t = a.prototype;
		return (
			(t.addEventListener = function (e, n) {
				var r = this._listeners[e] || (this._listeners[e] = []);
				~r.indexOf(n) || r.push(n);
			}),
			(t.removeEventListener = function (e, n) {
				var r = this._listeners[e],
					s = r && r.indexOf(n);
				s >= 0 && r.splice(s, 1);
			}),
			(t.dispatchEvent = function (e) {
				var n = this,
					r;
				return (
					(this._listeners[e] || []).forEach(function (s) {
						return s.call(n, { type: e, target: n.target }) === !1 && (r = !1);
					}),
					r
				);
			}),
			a
		);
	})(),
	fr = (function (a) {
		qd(t, a);
		function t(i, e) {
			var n;
			(n = a.call(this) || this),
				ia || Oo(1),
				(i = nn(i)[0]),
				(n.styles = ra && ra(i, "transform,left,top")),
				_i || (_i = yt.plugins.inertia),
				(n.vars = e = wc(e || {})),
				(n.target = i),
				(n.x = n.y = n.rotation = 0),
				(n.dragResistance = parseFloat(e.dragResistance) || 0),
				(n.edgeResistance = isNaN(e.edgeResistance)
					? 1
					: parseFloat(e.edgeResistance) || 0),
				(n.lockAxis = e.lockAxis),
				(n.autoScroll = e.autoScroll || 0),
				(n.lockedAxis = null),
				(n.allowEventDefault = !!e.allowEventDefault),
				yt.getProperty(i, "x");
			var r = (e.type || "x,y").toLowerCase(),
				s = ~r.indexOf("x") || ~r.indexOf("y"),
				o = r.indexOf("rotation") !== -1,
				u = o ? "rotation" : s ? "x" : "left",
				c = s ? "y" : "top",
				f = !!(~r.indexOf("x") || ~r.indexOf("left") || r === "scroll"),
				d = !!(~r.indexOf("y") || ~r.indexOf("top") || r === "scroll"),
				h = e.minimumMovement || 2,
				l = Sl(n),
				g = nn(e.trigger || e.handle || i),
				p = {},
				_ = 0,
				m = !1,
				x = e.autoScrollMarginTop || 40,
				M = e.autoScrollMarginRight || 40,
				v = e.autoScrollMarginBottom || 40,
				T = e.autoScrollMarginLeft || 40,
				C = e.clickableTest || ih,
				S = 0,
				O = i._gsap || yt.core.getCache(i),
				E = nh(i),
				L = function (y, z) {
					return parseFloat(O.get(i, y, z));
				},
				N = i.ownerDocument || ei,
				D,
				R,
				B,
				Y,
				H,
				X,
				J,
				ut,
				b,
				j,
				nt,
				ct,
				tt,
				Pt,
				vt,
				ft,
				rt,
				Mt,
				Dt,
				st,
				V,
				q,
				Z,
				K,
				Ft,
				P,
				wt,
				Yt,
				ae,
				Ct,
				Lt,
				qe,
				Fe,
				Xt = function (y) {
					return (
						si(y),
						y.stopImmediatePropagation && y.stopImmediatePropagation(),
						!1
					);
				},
				Wt = function Q(y) {
					if (l.autoScroll && l.isDragging && (m || rt)) {
						var z = i,
							w = l.autoScroll * 15,
							k,
							F,
							A,
							$,
							I,
							W,
							it,
							G;
						for (
							m = !1,
								Ii.scrollTop =
									At.pageYOffset != null
										? At.pageYOffset
										: N.documentElement.scrollTop != null
											? N.documentElement.scrollTop
											: N.body.scrollTop,
								Ii.scrollLeft =
									At.pageXOffset != null
										? At.pageXOffset
										: N.documentElement.scrollLeft != null
											? N.documentElement.scrollLeft
											: N.body.scrollLeft,
								$ = l.pointerX - Ii.scrollLeft,
								I = l.pointerY - Ii.scrollTop;
							z && !F;

						)
							(F = cr(z.parentNode)),
								(k = F ? Ii : z.parentNode),
								(A = F
									? {
											bottom: Math.max(wi.clientHeight, At.innerHeight || 0),
											right: Math.max(wi.clientWidth, At.innerWidth || 0),
											left: 0,
											top: 0,
										}
									: k.getBoundingClientRect()),
								(W = it = 0),
								d &&
									((G = k._gsMaxScrollY - k.scrollTop),
									G < 0
										? (it = G)
										: I > A.bottom - v && G
											? ((m = !0),
												(it = Math.min(
													G,
													(w * (1 - Math.max(0, A.bottom - I) / v)) | 0,
												)))
											: I < A.top + x &&
												k.scrollTop &&
												((m = !0),
												(it = -Math.min(
													k.scrollTop,
													(w * (1 - Math.max(0, I - A.top) / x)) | 0,
												))),
									it && (k.scrollTop += it)),
								f &&
									((G = k._gsMaxScrollX - k.scrollLeft),
									G < 0
										? (W = G)
										: $ > A.right - M && G
											? ((m = !0),
												(W = Math.min(
													G,
													(w * (1 - Math.max(0, A.right - $) / M)) | 0,
												)))
											: $ < A.left + T &&
												k.scrollLeft &&
												((m = !0),
												(W = -Math.min(
													k.scrollLeft,
													(w * (1 - Math.max(0, $ - A.left) / T)) | 0,
												))),
									W && (k.scrollLeft += W)),
								F &&
									(W || it) &&
									(At.scrollTo(k.scrollLeft, k.scrollTop),
									me(l.pointerX + W, l.pointerY + it)),
								(z = k);
					}
					if (rt) {
						var lt = l.x,
							bt = l.y;
						o
							? ((l.deltaX = lt - parseFloat(O.rotation)),
								(l.rotation = lt),
								(O.rotation = lt + "deg"),
								O.renderTransform(1, O))
							: R
								? (d && ((l.deltaY = bt - R.top()), R.top(bt)),
									f && ((l.deltaX = lt - R.left()), R.left(lt)))
								: s
									? (d &&
											((l.deltaY = bt - parseFloat(O.y)), (O.y = bt + "px")),
										f && ((l.deltaX = lt - parseFloat(O.x)), (O.x = lt + "px")),
										O.renderTransform(1, O))
									: (d &&
											((l.deltaY = bt - parseFloat(i.style.top || 0)),
											(i.style.top = bt + "px")),
										f &&
											((l.deltaX = lt - parseFloat(i.style.left || 0)),
											(i.style.left = lt + "px"))),
							ut &&
								!y &&
								!Yt &&
								((Yt = !0),
								jt(l, "drag", "onDrag") === !1 &&
									(f && (l.x -= l.deltaX), d && (l.y -= l.deltaY), Q(!0)),
								(Yt = !1));
					}
					rt = !1;
				},
				St = function (y, z) {
					var w = l.x,
						k = l.y,
						F,
						A;
					i._gsap || (O = yt.core.getCache(i)),
						O.uncache && yt.getProperty(i, "x"),
						s
							? ((l.x = parseFloat(O.x)), (l.y = parseFloat(O.y)))
							: o
								? (l.x = l.rotation = parseFloat(O.rotation))
								: R
									? ((l.y = R.top()), (l.x = R.left()))
									: ((l.y =
											parseFloat(i.style.top || ((A = ss(i)) && A.top)) || 0),
										(l.x = parseFloat(i.style.left || (A || {}).left) || 0)),
						(Dt || st || V) &&
							!z &&
							(l.isDragging || l.isThrowing) &&
							(V &&
								(($n.x = l.x),
								($n.y = l.y),
								(F = V($n)),
								F.x !== l.x && ((l.x = F.x), (rt = !0)),
								F.y !== l.y && ((l.y = F.y), (rt = !0))),
							Dt &&
								((F = Dt(l.x)),
								F !== l.x && ((l.x = F), o && (l.rotation = F), (rt = !0))),
							st && ((F = st(l.y)), F !== l.y && (l.y = F), (rt = !0))),
						rt && Wt(!0),
						y ||
							((l.deltaX = l.x - w),
							(l.deltaY = l.y - k),
							jt(l, "throwupdate", "onThrowUpdate"));
				},
				ie = function (y, z, w, k) {
					return (
						z == null && (z = -pn),
						w == null && (w = pn),
						Ki(y)
							? function (F) {
									var A = l.isPressed ? 1 - l.edgeResistance : 1;
									return (
										y.call(
											l,
											(F > w ? w + (F - w) * A : F < z ? z + (F - z) * A : F) *
												k,
										) * k
									);
								}
							: yr(y)
								? function (F) {
										for (var A = y.length, $ = 0, I = pn, W, it; --A > -1; )
											(W = y[A]),
												(it = W - F),
												it < 0 && (it = -it),
												it < I && W >= z && W <= w && (($ = A), (I = it));
										return y[$];
									}
								: isNaN(y)
									? function (F) {
											return F;
										}
									: function () {
											return y * k;
										}
					);
				},
				qt = function (y, z, w, k, F, A, $) {
					return (
						(A = A && A < pn ? A * A : pn),
						Ki(y)
							? function (I) {
									var W = l.isPressed ? 1 - l.edgeResistance : 1,
										it = I.x,
										G = I.y,
										lt,
										bt,
										Tt;
									return (
										(I.x = it =
											it > w
												? w + (it - w) * W
												: it < z
													? z + (it - z) * W
													: it),
										(I.y = G =
											G > F ? F + (G - F) * W : G < k ? k + (G - k) * W : G),
										(lt = y.call(l, I)),
										lt !== I && ((I.x = lt.x), (I.y = lt.y)),
										$ !== 1 && ((I.x *= $), (I.y *= $)),
										A < pn &&
											((bt = I.x - it),
											(Tt = I.y - G),
											bt * bt + Tt * Tt > A && ((I.x = it), (I.y = G))),
										I
									);
								}
							: yr(y)
								? function (I) {
										for (
											var W = y.length, it = 0, G = pn, lt, bt, Tt, pt;
											--W > -1;

										)
											(Tt = y[W]),
												(lt = Tt.x - I.x),
												(bt = Tt.y - I.y),
												(pt = lt * lt + bt * bt),
												pt < G && ((it = W), (G = pt));
										return G <= A ? y[it] : I;
									}
								: function (I) {
										return I;
									}
					);
				},
				de = function () {
					var y, z, w, k;
					(J = !1),
						R
							? (R.calibrate(),
								(l.minX = nt = -R.maxScrollLeft()),
								(l.minY = tt = -R.maxScrollTop()),
								(l.maxX = j = l.maxY = ct = 0),
								(J = !0))
							: e.bounds &&
								((y = Rl(e.bounds, i.parentNode)),
								o
									? ((l.minX = nt = y.left),
										(l.maxX = j = y.left + y.width),
										(l.minY = tt = l.maxY = ct = 0))
									: !yi(e.bounds.maxX) || !yi(e.bounds.maxY)
										? ((y = e.bounds),
											(l.minX = nt = y.minX),
											(l.minY = tt = y.minY),
											(l.maxX = j = y.maxX),
											(l.maxY = ct = y.maxY))
										: ((z = Rl(i, i.parentNode)),
											(l.minX = nt = Math.round(L(u, "px") + y.left - z.left)),
											(l.minY = tt = Math.round(L(c, "px") + y.top - z.top)),
											(l.maxX = j = Math.round(nt + (y.width - z.width))),
											(l.maxY = ct = Math.round(tt + (y.height - z.height)))),
								nt > j && ((l.minX = j), (l.maxX = j = nt), (nt = l.minX)),
								tt > ct && ((l.minY = ct), (l.maxY = ct = tt), (tt = l.minY)),
								o && ((l.minRotation = nt), (l.maxRotation = j)),
								(J = !0)),
						e.liveSnap &&
							((w = e.liveSnap === !0 ? e.snap || {} : e.liveSnap),
							(k = yr(w) || Ki(w)),
							o
								? ((Dt = ie(k ? w : w.rotation, nt, j, 1)), (st = null))
								: w.points
									? (V = qt(
											k ? w : w.points,
											nt,
											j,
											tt,
											ct,
											w.radius,
											R ? -1 : 1,
										))
									: (f &&
											(Dt = ie(
												k ? w : w.x || w.left || w.scrollLeft,
												nt,
												j,
												R ? -1 : 1,
											)),
										d &&
											(st = ie(
												k ? w : w.y || w.top || w.scrollTop,
												tt,
												ct,
												R ? -1 : 1,
											))));
				},
				pi = function () {
					(l.isThrowing = !1), jt(l, "throwcomplete", "onThrowComplete");
				},
				Et = function () {
					l.isThrowing = !1;
				},
				bi = function (y, z) {
					var w, k, F, A;
					y && _i
						? (y === !0 &&
								((w = e.snap || e.liveSnap || {}),
								(k = yr(w) || Ki(w)),
								(y = {
									resistance:
										(e.throwResistance || e.resistance || 1e3) / (o ? 10 : 1),
								}),
								o
									? (y.rotation = Do(l, k ? w : w.rotation, j, nt, 1, z))
									: (f &&
											(y[u] = Do(
												l,
												k ? w : w.points || w.x || w.left,
												j,
												nt,
												R ? -1 : 1,
												z || l.lockedAxis === "x",
											)),
										d &&
											(y[c] = Do(
												l,
												k ? w : w.points || w.y || w.top,
												ct,
												tt,
												R ? -1 : 1,
												z || l.lockedAxis === "y",
											)),
										(w.points || (yr(w) && Vr(w[0]))) &&
											((y.linkedProps = u + "," + c), (y.radius = w.radius)))),
							(l.isThrowing = !0),
							(A = isNaN(e.overshootTolerance)
								? e.edgeResistance === 1
									? 0
									: 1 - l.edgeResistance + 0.2
								: e.overshootTolerance),
							y.duration ||
								(y.duration = {
									max: Math.max(
										e.minDuration || 0,
										"maxDuration" in e ? e.maxDuration : 2,
									),
									min: isNaN(e.minDuration)
										? A === 0 || (Vr(y) && y.resistance > 1e3)
											? 0
											: 0.5
										: e.minDuration,
									overshoot: A,
								}),
							(l.tween = F =
								yt.to(R || i, {
									inertia: y,
									data: "_draggable",
									inherit: !1,
									onComplete: pi,
									onInterrupt: Et,
									onUpdate: e.fastMode ? jt : St,
									onUpdateParams: e.fastMode
										? [l, "onthrowupdate", "onThrowUpdate"]
										: w && w.radius
											? [!1, !0]
											: [],
								})),
							e.fastMode ||
								(R && (R._skip = !0),
								F.render(1e9, !0, !0),
								St(!0, !0),
								(l.endX = l.x),
								(l.endY = l.y),
								o && (l.endRotation = l.x),
								F.play(0),
								St(!0, !0),
								R && (R._skip = !1)))
						: J && l.applyBounds();
				},
				Ue = function (y) {
					var z = K,
						w;
					(K = xn(i.parentNode, !0)),
						y &&
							l.isPressed &&
							!K.equals(z || new Nn()) &&
							((w = z.inverse().apply({ x: B, y: Y })),
							K.apply(w, w),
							(B = w.x),
							(Y = w.y)),
						K.equals(Ud) && (K = null);
				},
				Ge = function () {
					var y = 1 - l.edgeResistance,
						z = E ? nr(N) : 0,
						w = E ? ir(N) : 0,
						k,
						F,
						A;
					s &&
						((O.x = L(u, "px") + "px"),
						(O.y = L(c, "px") + "px"),
						O.renderTransform()),
						Ue(!1),
						(oi.x = l.pointerX - z),
						(oi.y = l.pointerY - w),
						K && K.apply(oi, oi),
						(B = oi.x),
						(Y = oi.y),
						rt && (me(l.pointerX, l.pointerY), Wt(!0)),
						(qe = xn(i)),
						R
							? (de(), (X = R.top()), (H = R.left()))
							: (Ne() ? (St(!0, !0), de()) : l.applyBounds(),
								o
									? ((k = i.ownerSVGElement
											? [O.xOrigin - i.getBBox().x, O.yOrigin - i.getBBox().y]
											: (ss(i)[sa] || "0 0").split(" ")),
										(ft = l.rotationOrigin =
											xn(i).apply({
												x: parseFloat(k[0]) || 0,
												y: parseFloat(k[1]) || 0,
											})),
										St(!0, !0),
										(F = l.pointerX - ft.x - z),
										(A = ft.y - l.pointerY + w),
										(H = l.x),
										(X = l.y = Math.atan2(A, F) * Ml))
									: ((X = L(c, "px")), (H = L(u, "px")))),
						J &&
							y &&
							(H > j
								? (H = j + (H - j) / y)
								: H < nt && (H = nt - (nt - H) / y),
							o ||
								(X > ct
									? (X = ct + (X - ct) / y)
									: X < tt && (X = tt - (tt - X) / y))),
						(l.startX = H = Ui(H)),
						(l.startY = X = Ui(X));
				},
				Ne = function () {
					return l.tween && l.tween.isActive();
				},
				je = function () {
					zi.parentNode &&
						!Ne() &&
						!l.isDragging &&
						zi.parentNode.removeChild(zi);
				},
				Oe = function (y, z) {
					var w;
					if (
						!D ||
						l.isPressed ||
						!y ||
						((y.type === "mousedown" || y.type === "pointerdown") &&
							!z &&
							Gi() - S < 30 &&
							rs[l.pointerEvent.type])
					) {
						Lt && y && D && si(y);
						return;
					}
					if (
						((Ft = Ne()),
						(Fe = !1),
						(l.pointerEvent = y),
						rs[y.type]
							? ((Z = ~y.type.indexOf("touch")
									? y.currentTarget || y.target
									: N),
								se(Z, "touchend", Rt),
								se(Z, "touchmove", ot),
								se(Z, "touchcancel", Rt),
								se(N, "touchstart", El))
							: ((Z = null), se(N, "mousemove", ot)),
						(wt = null),
						(!Fs || !Z) &&
							(se(N, "mouseup", Rt),
							y && y.target && se(y.target, "mouseup", Rt)),
						(q = C.call(l, y.target) && e.dragClickables === !1 && !z),
						q)
					) {
						se(y.target, "change", Rt),
							jt(l, "pressInit", "onPressInit"),
							jt(l, "press", "onPress"),
							Ss(g, !0),
							(Lt = !1);
						return;
					}
					if (
						((P =
							!Z ||
							f === d ||
							l.vars.allowNativeTouchScrolling === !1 ||
							(l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2))
								? !1
								: f
									? "y"
									: "x"),
						(Lt = !P && !l.allowEventDefault),
						Lt && (si(y), se(At, "touchforcechange", si)),
						y.changedTouches
							? ((y = Pt = y.changedTouches[0]), (vt = y.identifier))
							: y.pointerId
								? (vt = y.pointerId)
								: (Pt = vt = null),
						Qs++,
						Qd(Wt),
						(Y = l.pointerY = y.pageY),
						(B = l.pointerX = y.pageX),
						jt(l, "pressInit", "onPressInit"),
						(P || l.autoScroll) && So(i.parentNode),
						i.parentNode &&
							l.autoScroll &&
							!R &&
							!o &&
							i.parentNode._gsMaxScrollX &&
							!zi.parentNode &&
							!i.getBBox &&
							((zi.style.width = i.parentNode.scrollWidth + "px"),
							i.parentNode.appendChild(zi)),
						Ge(),
						l.tween && l.tween.kill(),
						(l.isThrowing = !1),
						yt.killTweensOf(R || i, p, !0),
						R && yt.killTweensOf(i, { scrollTo: 1 }, !0),
						(l.tween = l.lockedAxis = null),
						(e.zIndexBoost || (!o && !R && e.zIndexBoost !== !1)) &&
							(i.style.zIndex = t.zIndex++),
						(l.isPressed = !0),
						(ut = !!(e.onDrag || l._listeners.drag)),
						(b = !!(e.onMove || l._listeners.move)),
						e.cursor !== !1 || e.activeCursor)
					)
						for (w = g.length; --w > -1; )
							yt.set(g[w], {
								cursor:
									e.activeCursor ||
									e.cursor ||
									(Cr === "grab" ? "grabbing" : Cr),
							});
					jt(l, "press", "onPress");
				},
				ot = function (y) {
					var z = y,
						w,
						k,
						F,
						A,
						$,
						I;
					if (!D || Ba || !l.isPressed || !y) {
						Lt && y && D && si(y);
						return;
					}
					if (((l.pointerEvent = y), (w = y.changedTouches), w)) {
						if (((y = w[0]), y !== Pt && y.identifier !== vt)) {
							for (
								A = w.length;
								--A > -1 && (y = w[A]).identifier !== vt && y.target !== i;

							);
							if (A < 0) return;
						}
					} else if (y.pointerId && vt && y.pointerId !== vt) return;
					if (
						Z &&
						P &&
						!wt &&
						((oi.x = y.pageX - (E ? nr(N) : 0)),
						(oi.y = y.pageY - (E ? ir(N) : 0)),
						K && K.apply(oi, oi),
						(k = oi.x),
						(F = oi.y),
						($ = Math.abs(k - B)),
						(I = Math.abs(F - Y)),
						(($ !== I && ($ > h || I > h)) || (Pr && P === wt)) &&
							((wt = $ > I && f ? "x" : "y"),
							P && wt !== P && se(At, "touchforcechange", si),
							l.vars.lockAxisOnTouchScroll !== !1 &&
								f &&
								d &&
								((l.lockedAxis = wt === "x" ? "y" : "x"),
								Ki(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, z)),
							Pr && P === wt))
					) {
						Rt(z);
						return;
					}
					!l.allowEventDefault &&
					(!P || (wt && P !== wt)) &&
					z.cancelable !== !1
						? (si(z), (Lt = !0))
						: Lt && (Lt = !1),
						l.autoScroll && (m = !0),
						me(y.pageX, y.pageY, b);
				},
				me = function (y, z, w) {
					var k = 1 - l.dragResistance,
						F = 1 - l.edgeResistance,
						A = l.pointerX,
						$ = l.pointerY,
						I = X,
						W = l.x,
						it = l.y,
						G = l.endX,
						lt = l.endY,
						bt = l.endRotation,
						Tt = rt,
						pt,
						_t,
						Ot,
						at,
						he,
						Ut;
					(l.pointerX = y),
						(l.pointerY = z),
						E && ((y -= nr(N)), (z -= ir(N))),
						o
							? ((at = Math.atan2(ft.y - z, y - ft.x) * Ml),
								(he = l.y - at),
								he > 180
									? ((X -= 360), (l.y = at))
									: he < -180 && ((X += 360), (l.y = at)),
								l.x !== H || Math.abs(X - at) > h
									? ((l.y = at), (Ot = H + (X - at) * k))
									: (Ot = H))
							: (K &&
									((Ut = y * K.a + z * K.c + K.e),
									(z = y * K.b + z * K.d + K.f),
									(y = Ut)),
								(_t = z - Y),
								(pt = y - B),
								_t < h && _t > -h && (_t = 0),
								pt < h && pt > -h && (pt = 0),
								(l.lockAxis || l.lockedAxis) &&
									(pt || _t) &&
									((Ut = l.lockedAxis),
									Ut ||
										((l.lockedAxis = Ut =
											f && Math.abs(pt) > Math.abs(_t) ? "y" : d ? "x" : null),
										Ut &&
											Ki(l.vars.onLockAxis) &&
											l.vars.onLockAxis.call(l, l.pointerEvent)),
									Ut === "y" ? (_t = 0) : Ut === "x" && (pt = 0)),
								(Ot = Ui(H + pt * k)),
								(at = Ui(X + _t * k))),
						(Dt || st || V) &&
							(l.x !== Ot || (l.y !== at && !o)) &&
							(V &&
								(($n.x = Ot),
								($n.y = at),
								(Ut = V($n)),
								(Ot = Ui(Ut.x)),
								(at = Ui(Ut.y))),
							Dt && (Ot = Ui(Dt(Ot))),
							st && (at = Ui(st(at)))),
						J &&
							(Ot > j
								? (Ot = j + Math.round((Ot - j) * F))
								: Ot < nt && (Ot = nt + Math.round((Ot - nt) * F)),
							o ||
								(at > ct
									? (at = Math.round(ct + (at - ct) * F))
									: at < tt && (at = Math.round(tt + (at - tt) * F)))),
						(l.x !== Ot || (l.y !== at && !o)) &&
							(o
								? ((l.endRotation = l.x = l.endX = Ot), (rt = !0))
								: (d && ((l.y = l.endY = at), (rt = !0)),
									f && ((l.x = l.endX = Ot), (rt = !0))),
							!w || jt(l, "move", "onMove") !== !1
								? !l.isDragging &&
									l.isPressed &&
									((l.isDragging = Fe = !0), jt(l, "dragstart", "onDragStart"))
								: ((l.pointerX = A),
									(l.pointerY = $),
									(X = I),
									(l.x = W),
									(l.y = it),
									(l.endX = G),
									(l.endY = lt),
									(l.endRotation = bt),
									(rt = Tt)));
				},
				Rt = function Q(y, z) {
					if (
						!D ||
						!l.isPressed ||
						(y &&
							vt != null &&
							!z &&
							((y.pointerId && y.pointerId !== vt && y.target !== i) ||
								(y.changedTouches && !Jd(y.changedTouches, vt))))
					) {
						Lt && y && D && si(y);
						return;
					}
					l.isPressed = !1;
					var w = y,
						k = l.isDragging,
						F = l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2),
						A = yt.delayedCall(0.001, je),
						$,
						I,
						W,
						it,
						G;
					if (
						(Z
							? (Zt(Z, "touchend", Q),
								Zt(Z, "touchmove", ot),
								Zt(Z, "touchcancel", Q),
								Zt(N, "touchstart", El))
							: Zt(N, "mousemove", ot),
						Zt(At, "touchforcechange", si),
						(!Fs || !Z) &&
							(Zt(N, "mouseup", Q),
							y && y.target && Zt(y.target, "mouseup", Q)),
						(rt = !1),
						k && ((_ = Dl = Gi()), (l.isDragging = !1)),
						Cl(Wt),
						q && !F)
					) {
						y && (Zt(y.target, "change", Q), (l.pointerEvent = w)),
							Ss(g, !1),
							jt(l, "release", "onRelease"),
							jt(l, "click", "onClick"),
							(q = !1);
						return;
					}
					for (I = g.length; --I > -1; )
						Mo(g[I], "cursor", e.cursor || (e.cursor !== !1 ? Cr : null));
					if ((Qs--, y)) {
						if (
							(($ = y.changedTouches),
							$ && ((y = $[0]), y !== Pt && y.identifier !== vt))
						) {
							for (
								I = $.length;
								--I > -1 && (y = $[I]).identifier !== vt && y.target !== i;

							);
							if (I < 0 && !z) return;
						}
						(l.pointerEvent = w),
							(l.pointerX = y.pageX),
							(l.pointerY = y.pageY);
					}
					return (
						F && w
							? (si(w), (Lt = !0), jt(l, "release", "onRelease"))
							: w && !k
								? ((Lt = !1),
									Ft && (e.snap || e.bounds) && bi(e.inertia || e.throwProps),
									jt(l, "release", "onRelease"),
									(!Pr || w.type !== "touchmove") &&
										w.type.indexOf("cancel") === -1 &&
										(jt(l, "click", "onClick"),
										Gi() - S < 300 && jt(l, "doubleclick", "onDoubleClick"),
										(it = w.target || i),
										(S = Gi()),
										(G = function () {
											S !== ae &&
												l.enabled() &&
												!l.isPressed &&
												!w.defaultPrevented &&
												(it.click
													? it.click()
													: N.createEvent &&
														((W = N.createEvent("MouseEvents")),
														W.initMouseEvent(
															"click",
															!0,
															!0,
															At,
															1,
															l.pointerEvent.screenX,
															l.pointerEvent.screenY,
															l.pointerX,
															l.pointerY,
															!1,
															!1,
															!1,
															!1,
															0,
															null,
														),
														it.dispatchEvent(W)));
										}),
										!Pr && !w.defaultPrevented && yt.delayedCall(0.05, G)))
								: (bi(e.inertia || e.throwProps),
									!l.allowEventDefault &&
									w &&
									(e.dragClickables !== !1 || !C.call(l, w.target)) &&
									k &&
									(!P || (wt && P === wt)) &&
									w.cancelable !== !1
										? ((Lt = !0), si(w))
										: (Lt = !1),
									jt(l, "release", "onRelease")),
						Ne() && A.duration(l.tween.duration()),
						k && jt(l, "dragend", "onDragEnd"),
						!0
					);
				},
				ye = function (y) {
					if (y && l.isDragging && !R) {
						var z = y.target || i.parentNode,
							w = z.scrollLeft - z._gsScrollX,
							k = z.scrollTop - z._gsScrollY;
						(w || k) &&
							(K
								? ((B -= w * K.a + k * K.c), (Y -= k * K.d + w * K.b))
								: ((B -= w), (Y -= k)),
							(z._gsScrollX += w),
							(z._gsScrollY += k),
							me(l.pointerX, l.pointerY));
					}
				},
				ze = function (y) {
					var z = Gi(),
						w = z - S < 100,
						k = z - _ < 50,
						F = w && ae === S,
						A = l.pointerEvent && l.pointerEvent.defaultPrevented,
						$ = w && Ct === S,
						I = y.isTrusted || (y.isTrusted == null && w && F);
					if (
						((F || (k && l.vars.suppressClickOnDrag !== !1)) &&
							y.stopImmediatePropagation &&
							y.stopImmediatePropagation(),
						w &&
							!(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
							(!F || (I && !$)))
					) {
						I && F && (Ct = S), (ae = S);
						return;
					}
					(l.isPressed || k || w) && (!I || !y.detail || !w || A) && si(y),
						!w &&
							!k &&
							!Fe &&
							(y && y.target && (l.pointerEvent = y),
							jt(l, "click", "onClick"));
				},
				Ti = function (y) {
					return K
						? { x: y.x * K.a + y.y * K.c + K.e, y: y.x * K.b + y.y * K.d + K.f }
						: { x: y.x, y: y.y };
				};
			return (
				(Mt = t.get(i)),
				Mt && Mt.kill(),
				(n.startDrag = function (Q, y) {
					var z, w, k, F;
					Oe(Q || l.pointerEvent, !0),
						y &&
							!l.hitTest(Q || l.pointerEvent) &&
							((z = Hn(Q || l.pointerEvent)),
							(w = Hn(i)),
							(k = Ti({ x: z.left + z.width / 2, y: z.top + z.height / 2 })),
							(F = Ti({ x: w.left + w.width / 2, y: w.top + w.height / 2 })),
							(B -= k.x - F.x),
							(Y -= k.y - F.y)),
						l.isDragging ||
							((l.isDragging = Fe = !0), jt(l, "dragstart", "onDragStart"));
				}),
				(n.drag = ot),
				(n.endDrag = function (Q) {
					return Rt(Q || l.pointerEvent, !0);
				}),
				(n.timeSinceDrag = function () {
					return l.isDragging ? 0 : (Gi() - _) / 1e3;
				}),
				(n.timeSinceClick = function () {
					return (Gi() - S) / 1e3;
				}),
				(n.hitTest = function (Q, y) {
					return t.hitTest(l.target, Q, y);
				}),
				(n.getDirection = function (Q, y) {
					var z =
							Q === "velocity" && _i ? Q : Vr(Q) && !o ? "element" : "start",
						w,
						k,
						F,
						A,
						$,
						I;
					return (
						z === "element" && (($ = Hn(l.target)), (I = Hn(Q))),
						(w =
							z === "start"
								? l.x - H
								: z === "velocity"
									? _i.getVelocity(i, u)
									: $.left + $.width / 2 - (I.left + I.width / 2)),
						o
							? w < 0
								? "counter-clockwise"
								: "clockwise"
							: ((y = y || 2),
								(k =
									z === "start"
										? l.y - X
										: z === "velocity"
											? _i.getVelocity(i, c)
											: $.top + $.height / 2 - (I.top + I.height / 2)),
								(F = Math.abs(w / k)),
								(A = F < 1 / y ? "" : w < 0 ? "left" : "right"),
								F < y && (A !== "" && (A += "-"), (A += k < 0 ? "up" : "down")),
								A)
					);
				}),
				(n.applyBounds = function (Q, y) {
					var z, w, k, F, A, $;
					if (Q && e.bounds !== Q) return (e.bounds = Q), l.update(!0, y);
					if ((St(!0), de(), J && !Ne())) {
						if (
							((z = l.x),
							(w = l.y),
							z > j ? (z = j) : z < nt && (z = nt),
							w > ct ? (w = ct) : w < tt && (w = tt),
							(l.x !== z || l.y !== w) &&
								((k = !0),
								(l.x = l.endX = z),
								o ? (l.endRotation = z) : (l.y = l.endY = w),
								(rt = !0),
								Wt(!0),
								l.autoScroll && !l.isDragging))
						)
							for (
								So(i.parentNode),
									F = i,
									Ii.scrollTop =
										At.pageYOffset != null
											? At.pageYOffset
											: N.documentElement.scrollTop != null
												? N.documentElement.scrollTop
												: N.body.scrollTop,
									Ii.scrollLeft =
										At.pageXOffset != null
											? At.pageXOffset
											: N.documentElement.scrollLeft != null
												? N.documentElement.scrollLeft
												: N.body.scrollLeft;
								F && !$;

							)
								($ = cr(F.parentNode)),
									(A = $ ? Ii : F.parentNode),
									d &&
										A.scrollTop > A._gsMaxScrollY &&
										(A.scrollTop = A._gsMaxScrollY),
									f &&
										A.scrollLeft > A._gsMaxScrollX &&
										(A.scrollLeft = A._gsMaxScrollX),
									(F = A);
						l.isThrowing &&
							(k || l.endX > j || l.endX < nt || l.endY > ct || l.endY < tt) &&
							bi(e.inertia || e.throwProps, k);
					}
					return l;
				}),
				(n.update = function (Q, y, z) {
					if (y && l.isPressed) {
						var w = xn(i),
							k = qe.apply({ x: l.x - H, y: l.y - X }),
							F = xn(i.parentNode, !0);
						F.apply({ x: w.e - k.x, y: w.f - k.y }, k),
							(l.x -= k.x - F.e),
							(l.y -= k.y - F.f),
							Wt(!0),
							Ge();
					}
					var A = l.x,
						$ = l.y;
					return (
						Ue(!y),
						Q ? l.applyBounds() : (rt && z && Wt(!0), St(!0)),
						y && (me(l.pointerX, l.pointerY), rt && Wt(!0)),
						l.isPressed &&
							!y &&
							((f && Math.abs(A - l.x) > 0.01) ||
								(d && Math.abs($ - l.y) > 0.01 && !o)) &&
							Ge(),
						l.autoScroll &&
							(So(i.parentNode, l.isDragging),
							(m = l.isDragging),
							Wt(!0),
							Al(i, ye),
							kl(i, ye)),
						l
					);
				}),
				(n.enable = function (Q) {
					var y = { lazy: !0 },
						z,
						w,
						k;
					if (
						(e.cursor !== !1 && (y.cursor = e.cursor || Cr),
						yt.utils.checkPrefix("touchCallout") && (y.touchCallout = "none"),
						Q !== "soft")
					) {
						for (
							Ol(
								g,
								f === d
									? "none"
									: (e.allowNativeTouchScrolling &&
												(i.scrollHeight === i.clientHeight) ==
													(i.scrollWidth === i.clientHeight)) ||
										  e.allowEventDefault
										? "manipulation"
										: f
											? "pan-y"
											: "pan-x",
							),
								w = g.length;
							--w > -1;

						)
							(k = g[w]),
								Fs || se(k, "mousedown", Oe),
								se(k, "touchstart", Oe),
								se(k, "click", ze, !0),
								yt.set(k, y),
								k.getBBox &&
									k.ownerSVGElement &&
									f !== d &&
									yt.set(k.ownerSVGElement, {
										touchAction:
											e.allowNativeTouchScrolling || e.allowEventDefault
												? "manipulation"
												: f
													? "pan-y"
													: "pan-x",
									}),
								e.allowContextMenu || se(k, "contextmenu", Xt);
						Ss(g, !1);
					}
					return (
						kl(i, ye),
						(D = !0),
						_i &&
							Q !== "soft" &&
							_i.track(R || i, s ? "x,y" : o ? "rotation" : "top,left"),
						(i._gsDragID = z = "d" + Gd++),
						(er[z] = l),
						R && (R.enable(), (R.element._gsDragID = z)),
						(e.bounds || o) && Ge(),
						e.bounds && l.applyBounds(),
						l
					);
				}),
				(n.disable = function (Q) {
					for (var y = l.isDragging, z = g.length, w; --z > -1; )
						Mo(g[z], "cursor", null);
					if (Q !== "soft") {
						for (Ol(g, null), z = g.length; --z > -1; )
							(w = g[z]),
								Mo(w, "touchCallout", null),
								Zt(w, "mousedown", Oe),
								Zt(w, "touchstart", Oe),
								Zt(w, "click", ze, !0),
								Zt(w, "contextmenu", Xt);
						Ss(g, !0),
							Z &&
								(Zt(Z, "touchcancel", Rt),
								Zt(Z, "touchend", Rt),
								Zt(Z, "touchmove", ot)),
							Zt(N, "mouseup", Rt),
							Zt(N, "mousemove", ot);
					}
					return (
						Al(i, ye),
						(D = !1),
						_i &&
							Q !== "soft" &&
							(_i.untrack(R || i, s ? "x,y" : o ? "rotation" : "top,left"),
							l.tween && l.tween.kill()),
						R && R.disable(),
						Cl(Wt),
						(l.isDragging = l.isPressed = q = !1),
						y && jt(l, "dragend", "onDragEnd"),
						l
					);
				}),
				(n.enabled = function (Q, y) {
					return arguments.length ? (Q ? l.enable(y) : l.disable(y)) : D;
				}),
				(n.kill = function () {
					return (
						(l.isThrowing = !1),
						l.tween && l.tween.kill(),
						l.disable(),
						yt.set(g, { clearProps: "userSelect" }),
						delete er[i._gsDragID],
						l
					);
				}),
				(n.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~r.indexOf("scroll") &&
					((R = n.scrollProxy =
						new rh(
							i,
							Kd(
								{
									onKill: function () {
										l.isPressed && Rt(null);
									},
								},
								e,
							),
						)),
					(i.style.overflowY = d && !na ? "auto" : "hidden"),
					(i.style.overflowX = f && !na ? "auto" : "hidden"),
					(i = R.content)),
				o ? (p.rotation = 1) : (f && (p[u] = 1), d && (p[c] = 1)),
				(O.force3D = "force3D" in e ? e.force3D : !0),
				yc(Sl(n)),
				n.enable(),
				n
			);
		}
		return (
			(t.register = function (e) {
				(yt = e), Oo();
			}),
			(t.create = function (e, n) {
				return (
					ia || Oo(!0),
					nn(e).map(function (r) {
						return new t(r, n);
					})
				);
			}),
			(t.get = function (e) {
				return er[(nn(e)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Gi() - Dl) / 1e3;
			}),
			(t.hitTest = function (e, n, r) {
				if (e === n) return !1;
				var s = Hn(e),
					o = Hn(n),
					u = s.top,
					c = s.left,
					f = s.right,
					d = s.bottom,
					h = s.width,
					l = s.height,
					g = o.left > f || o.right < c || o.top > d || o.bottom < u,
					p,
					_,
					m;
				return g || !r
					? !g
					: ((m = (r + "").indexOf("%") !== -1),
						(r = parseFloat(r) || 0),
						(p = { left: Math.max(c, o.left), top: Math.max(u, o.top) }),
						(p.width = Math.min(f, o.right) - p.left),
						(p.height = Math.min(d, o.bottom) - p.top),
						p.width < 0 || p.height < 0
							? !1
							: m
								? ((r *= 0.01),
									(_ = p.width * p.height),
									_ >= h * l * r || _ >= o.width * o.height * r)
								: p.width > r && p.height > r);
			}),
			t
		);
	})(sh);
Zd(fr.prototype, {
	pointerX: 0,
	pointerY: 0,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	isDragging: !1,
	isPressed: !1,
});
fr.zIndex = 1e3;
fr.version = "3.12.5";
vc() && yt.registerPlugin(fr);
const Ye = "power4.inOut",
	Yi = (a, t = !0, i = 0) => (t ? i : a);
function oh(a, t) {
	(a = et.utils.toArray(a)), (t = t || {});
	let i = t.onChange,
		e = 0,
		n = et.timeline({
			repeat: t.repeat,
			onUpdate:
				i &&
				function () {
					let D = n.closestIndex();
					e !== D && ((e = D), i(a[D], D));
				},
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => n.totalTime(n.rawTime() + n.duration() * 100),
		}),
		r = a.length,
		s = a[0].offsetLeft,
		o = [],
		u = [],
		c = [],
		f = [],
		d = 0,
		h = !1,
		l = t.center,
		g = (t.speed || 1) * 100,
		p = t.snap === !1 ? (D) => D : et.utils.snap(t.snap || 1),
		_ = 0,
		m = l === !0 ? a[0].parentNode : et.utils.toArray(l)[0] || a[0].parentNode,
		x,
		M = () =>
			a[r - 1].offsetLeft +
			(f[r - 1] / 100) * u[r - 1] -
			s +
			c[0] +
			a[r - 1].offsetWidth * et.getProperty(a[r - 1], "scaleX") +
			(parseFloat(t.paddingRight) || 0),
		v = () => {
			let D = m.getBoundingClientRect(),
				R;
			a.forEach((B, Y) => {
				(u[Y] = parseFloat(et.getProperty(B, "width", "px"))),
					(f[Y] = p(
						(parseFloat(et.getProperty(B, "x", "px")) / u[Y]) * 100 +
							et.getProperty(B, "xPercent"),
					)),
					(R = B.getBoundingClientRect()),
					(c[Y] = R.left - (Y ? D.right : D.left)),
					(D = R);
			}),
				et.set(a, { xPercent: (B) => f[B] }),
				(x = M());
		},
		T,
		C = () => {
			(_ = l ? (n.duration() * (m.offsetWidth / 2)) / x : 0),
				l &&
					o.forEach((D, R) => {
						o[R] = T(n.labels["label" + R] + (n.duration() * u[R]) / 2 / x - _);
					});
		},
		S = (D, R, B) => {
			let Y = D.length,
				H = 1e10,
				X = 0,
				J;
			for (; Y--; )
				(J = Math.abs(D[Y] - R)),
					J > B / 2 && (J = B - J),
					J < H && ((H = J), (X = Y));
			return X;
		},
		O = () => {
			let D, R, B, Y, H;
			for (n.clear(), D = 0; D < r; D++)
				(R = a[D]),
					(B = (f[D] / 100) * u[D]),
					(Y = R.offsetLeft + B - s + c[0]),
					(H = Y + u[D] * et.getProperty(R, "scaleX")),
					n
						.to(R, { xPercent: p(((B - H) / u[D]) * 100), duration: H / g }, 0)
						.fromTo(
							R,
							{ xPercent: p(((B - H + x) / u[D]) * 100) },
							{
								xPercent: f[D],
								duration: (B - H + x - B) / g,
								immediateRender: !1,
							},
							H / g,
						)
						.add("label" + D, Y / g),
					(o[D] = Y / g);
			T = et.utils.wrap(0, n.duration());
		},
		E = (D) => {
			let R = n.progress();
			n.progress(0, !0),
				v(),
				D && O(),
				C(),
				D && n.draggable ? n.time(o[d], !0) : n.progress(R, !0);
		},
		L;
	et.set(a, { x: 0 }),
		v(),
		O(),
		C(),
		window.addEventListener("resize", () => E(!0));
	function N(D, R) {
		(R = R || {}), Math.abs(D - d) > r / 2 && (D += D > d ? -r : r);
		let B = et.utils.wrap(0, r, D),
			Y = o[B];
		return (
			Y > n.time() != D > d &&
				D !== d &&
				(Y += n.duration() * (D > d ? 1 : -1)),
			(Y < 0 || Y > n.duration()) && (R.modifiers = { time: T }),
			(d = B),
			(R.overwrite = !0),
			et.killTweensOf(L),
			R.duration === 0 ? n.time(T(Y)) : n.tweenTo(Y, R)
		);
	}
	if (
		((n.toIndex = (D, R) => N(D, R)),
		(n.closestIndex = (D) => {
			let R = S(o, n.time(), n.duration());
			return D && ((d = R), (h = !1)), R;
		}),
		(n.current = () => (h ? n.closestIndex(!0) : d)),
		(n.next = (D) => N(n.current() + 1, D)),
		(n.previous = (D) => N(n.current() - 1, D)),
		(n.times = o),
		n.progress(1, !0).progress(0, !0),
		t.reversed && (n.vars.onReverseComplete(), n.reverse()),
		t.draggable && typeof fr == "function")
	) {
		L = document.createElement("div");
		let D = et.utils.wrap(0, 1),
			R,
			B,
			Y,
			H,
			X,
			J = () => n.progress(D(B + (Y.startX - Y.x) * R)),
			ut = () => n.closestIndex(!0);
		typeof InertiaPlugin > "u" &&
			console.warn(
				"InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
			),
			(Y = fr.create(L, {
				trigger: a[0].parentNode,
				type: "x",
				onPressInit() {
					let b = this.x;
					et.killTweensOf(n),
						(B = n.progress()),
						E(),
						(R = 1 / x),
						(X = B / -R - b),
						et.set(L, { x: B / -R });
				},
				onDrag: J,
				onThrowUpdate: J,
				overshootTolerance: 0,
				inertia: !0,
				snap(b) {
					if (Math.abs(B / -R - this.x) < 10) return H + X;
					let j = -(b * R) * n.duration(),
						nt = T(j),
						ct = o[S(o, nt, n.duration())],
						tt = ct - nt;
					return (
						Math.abs(tt) > n.duration() / 2 &&
							(tt += tt < 0 ? n.duration() : -n.duration()),
						(H = (j + tt) / n.duration() / -R),
						H
					);
				},
				onRelease() {
					ut(), Y.isThrowing && (h = !0);
				},
				onThrowComplete: ut,
			})[0]),
			(n.draggable = Y);
	}
	return n.closestIndex(!0), (e = d), i && i(a[d], d), n;
}
const Po = 66,
	Il = 5e3;
class ah {
	constructor() {
		we(this, "onSlideCtaClick", (t) => {
			const i = t.currentTarget,
				e = i.closest(".js-features-carousel-item");
			if ((t.preventDefault(), e.classList.contains("is-active"))) {
				const n = i.getAttribute("href"),
					r = document.querySelector(`${n}`);
				r && dc(r, 150);
			} else this.instance.scrollTo(parseInt(e.dataset.index, 10));
		});
		we(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				i = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const e = this.DOM.slides[i],
				n = this.DOM.slides[this.activeIndex];
			et.timeline({
				onStart: () => {
					t.stop(), this.progressTl.pause();
				},
				onComplete: () => {
					t.play(), this.progressTl.restart();
				},
			})
				.add(this.outSlide(e))
				.add(this.inSlide(n), "<");
		});
		we(this, "outSlide", (t) => {
			const i = t.querySelector(".js-features-carousel-item-text"),
				e = et.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				te.device < 1
					? e.to(t, {
							opacity: 0,
							xPercent: -200,
							rotate: -5,
							duration: 0.8,
							ease: Ye,
							onComplete: () => {
								et.set(t, { xPercent: 0, rotate: 5 });
							},
						})
					: e
							.to(t, { height: Po, duration: 0.8, ease: Ye })
							.to(
								i,
								{ opacity: 0, height: 0, duration: 0.8, ease: Ye },
								"-=0.8",
							),
				e
			);
		});
		we(this, "inSlide", (t, i = !1) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				n = et.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				te.device < 1
					? n.to(t, {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
							duration: Yi(0.8, i),
							ease: Ye,
						})
					: n
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: Yi(0.8, i),
								ease: Ye,
							})
							.to(
								e,
								{ opacity: 1, height: "auto", duration: Yi(0.8, i), ease: Ye },
								Yi("-=0.67", i),
							),
				n
			);
		});
		we(this, "start", () => {
			var t, i, e;
			(this.progressTl = et
				.timeline({ paused: !0 })
				.to(this.DOM.progress, {
					scaleX: 1,
					duration: Il / 1e3,
					ease: "linear",
				})),
				this.progressTl.play(),
				(e =
					(i = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: i.autoplay) == null || e.play();
		});
		this.init();
	}
	setup() {
		(this.layoutMode = te.device < 1 ? "mobile" : "desktop"),
			(this.hRatio = te.device < 1 ? 1 : 0.72331),
			(this.instance = Ia(this.DOM.fakeCarousel, { loop: !0 }, [
				Fa({ delay: Il, playOnInit: !1 }),
			])),
			te.device < 1 &&
				(et.set(this.DOM.slides, { opacity: 0, xPercent: 0, rotate: 5 }),
				et.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 })),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
		for (let t = 0; t < this.DOM.ctas.length; t++)
			this.DOM.ctas[t].addEventListener("click", this.onSlideCtaClick);
		this.start();
	}
	destroy() {
		var t, i;
		if (this.DOM) {
			((i = (t = this.instance) == null ? void 0 : t.plugins()) == null
				? void 0
				: i.autoplay
			).stop(),
				this.instance.off("select", this.onSlideChange),
				this.instance.destroy();
			for (let n = 0; n < this.DOM.ctas.length; n++)
				this.DOM.ctas[n].removeEventListener("click", this.onSlideCtaClick);
			(this.instance = void 0), (this.DOM = void 0);
		}
	}
	resize() {
		var t, i;
		if (this.DOM) {
			if (
				((this.hRatio = te.device < 1 ? 1 : 0.72331),
				te.device < 1 && this.layoutMode !== "mobile"
					? (et.set(this.DOM.slides, {
							opacity: 0,
							xPercent: 0,
							rotate: 5,
							height: "auto",
						}),
						et.set(this.DOM.slides[this.activeIndex], {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
						}),
						et.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 }))
					: te.device >= 1 && this.layoutMode !== "desktop"
						? (et.set(this.DOM.slides, {
								opacity: 1,
								xPercent: "none",
								rotate: 0,
								height: Po,
							}),
							et.set(this.DOM.slidesTexts, { height: 0, opacity: 0 }),
							et.set(this.DOM.slides[this.activeIndex], {
								height: (e, n) => n.offsetWidth * this.hRatio,
							}),
							et.set(this.DOM.slidesTexts[this.activeIndex], {
								height: "auto",
							}))
						: te.device >= 1 &&
							this.layoutMode === "desktop" &&
							et.set(this.DOM.slides, {
								height: (e) =>
									e === this.activeIndex
										? this.DOM.slides[e].offsetWidth * this.hRatio
										: Po,
							}),
				te.device >= 1 || (te.device < 1 && this.layoutMode !== "mobile"))
			) {
				const e =
					(i = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: i.autoplay;
				this.progressTl.pause(),
					e.reset(),
					e.play(),
					this.progressTl.restart(),
					this.progressTl.play();
			}
			this.layoutMode = te.device < 1 ? "mobile" : "desktop";
		}
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const i = t.querySelector(".js-features-carousel");
		i &&
			((this.DOM = {}),
			(this.DOM.wrap = i),
			(this.DOM.fakeCarousel = this.DOM.wrap.querySelector(
				".js-time-carousel-viewport",
			)),
			(this.DOM.slides = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item",
			)),
			(this.DOM.slidesTexts = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item-text",
			)),
			(this.DOM.ctas = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-cta",
			)),
			(this.DOM.progress = this.DOM.wrap.querySelector(
				".js-features-carousel-progress",
			)),
			(this.instance = void 0),
			(this.activeIndex = 0),
			this.setup());
	}
}
class lh {
	constructor() {
		this.instances = {};
	}
	add(t, i, e) {
		this.instances[t] = { key: t, instance: i, preserve: e };
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
		const i = this.get(t);
		i && (!i.preserve && i.destroy && i.destroy(), (this.instances[t] = null));
	}
	removeAll() {
		for (const t in this.instances) this.remove(t);
	}
	destroy(t) {
		const i = this.get(t),
			e = this.instances[t] ? this.instances[t].preserve : !1;
		i && !e && i.destroy && i.destroy();
	}
	destroyAll() {
		for (const t in this.instances) this.destroy(t);
	}
	map(t, ...i) {
		for (const e in this.instances) {
			const n = this.get(e);
			n[t] && n[t](...i);
		}
	}
	call(t, i, ...e) {
		const n = this.get(t);
		if (n && n[i]) return n[i](...e);
	}
}
const Ri = new lh();
class uh {
	constructor() {
		we(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const e = t.currentTarget.getAttribute("href"),
				n = document.querySelector(`${e}`);
			n ? dc(n, 150) : console.warn("Target non esiste per l'id: ", e);
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
		const i = t.querySelectorAll(".js-hash-scroll");
		i.length > 0 &&
			((this.DOM = {}), (this.DOM.hashElements = i), this.setup());
	}
}
class ch {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = oh(this.DOM.items, {
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
class fh {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const i = this.DOM.rows[t];
			i &&
				this.instances.push(
					new ch({
						container: i,
						config: {
							repeat: -1,
							speed: 1.25,
							reversed: i.dataset.reversed !== void 0,
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
		const i = t.querySelectorAll(".js-marquee-row");
		i.length &&
			((this.DOM = {}),
			(this.DOM.rows = i),
			(this.instances = []),
			this.setup());
	}
}
et.registerPlugin(dt);
class dh {
	constructor() {
		we(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		we(this, "hideNav", (t = !1, i = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const e = et.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), i && i();
					},
				});
				return (
					e
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: Yi(0.8, t),
							stagger: Yi(0.1, t),
							onComplete: () => {
								et.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: Ye,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: Yi(0.8, t),
								onComplete: () => {
									et.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: Ye,
							},
							Yi(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: Yi(0.8, t),
							onComplete: () => {
								et.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: Ye,
						})
						.set(this.DOM.navMobile, {
							zIndex: -1,
							visibility: "hidden",
							pointerEvents: "none",
						}),
					e
				);
			}
		});
		we(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = et.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !0);
					},
				});
				return (
					t
						.set(this.DOM.navMobile, {
							zIndex: 89,
							visibility: "visible",
							pointerEvents: "all",
						})
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 100%" })
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: Ye })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: Ye },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: Ye },
							"-=0.34",
						),
					t
				);
			}
		});
		this.init();
	}
	setup() {
		this.addEvents(), this.hideNav(!0), this.addHeadTrigger();
	}
	addEvents() {
		this.DOM.navToggle.addEventListener("click", this.toggleMenu);
	}
	removeEvents() {
		this.DOM.navToggle.removeEventListener("click", this.toggleMenu);
	}
	addHeadTrigger() {
		this.headTrigger = dt.create({
			trigger: document.window,
			start: "top -20%",
			onUpdate: (t) => {
				t.direction === 1
					? (document.body.classList.add("is-scrolling-down"),
						document.body.classList.remove("is-scrolling-up"))
					: (document.body.classList.add("is-scrolling-up"),
						document.body.classList.remove("is-scrolling-down"));
			},
			onLeaveBack: () => {
				document.body.classList.remove("is-scrolling-up");
			},
		});
	}
	reinit(t) {
		this.init(t);
	}
	destroy() {
		this.DOM &&
			(this.removeEvents(),
			this.headTrigger &&
				(this.headTrigger.kill(), (this.headTrigger = void 0)),
			(this.DOM = void 0));
	}
	init(t = document) {
		const i = t.querySelector(".js-nav"),
			e = t.querySelector(".js-nav-mobile");
		i &&
			e &&
			((this.DOM = {}),
			(this.DOM.nav = i),
			(this.DOM.navMobile = e),
			(this.DOM.navToggle = this.DOM.nav.querySelector(".js-nav-toggle")),
			(this.DOM.navMobileLinks = this.DOM.navMobile.querySelectorAll(
				".js-nav-mobile-link",
			)),
			(this.DOM.navMobileBg =
				this.DOM.navMobile.querySelector(".js-nav-mobile-bg")),
			(this.DOM.navMobileCta =
				this.DOM.navMobile.querySelector(".js-nav-mobile-cta")),
			(this.isOpenMenu = !1),
			(this.isAnimatingMenu = !1),
			this.setup());
	}
}
et.registerPlugin(dt);
class hh {
	constructor() {
		this.init();
	}
	setup() {
		et.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(i) => {
				const { isMobile: e, isDesk: n } = i.conditions;
				e && this.setMobileTrigger(), n && this.setTrigger();
			},
		);
	}
	setTrigger() {
		et.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				scrub: 1.5,
				ease: "none",
			},
		}).fromTo(
			this.DOM.cards,
			{ y: (i, e) => parseInt(e.dataset.index, 10) * 25 },
			{ y: 0, stagger: { each: 0.024 } },
		);
	}
	setMobileTrigger() {
		et.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top top+=75%",
				end: "bottom top",
			},
		}).from(this.DOM.cards, {
			opacity: 0,
			duration: 1,
			stagger: { each: 0.01, from: "random" },
			ease: "none",
		});
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const i = t.querySelector(".js-team-section");
		i &&
			((this.DOM = {}),
			(this.DOM.section = i),
			(this.DOM.cards = this.DOM.section.querySelectorAll(".js-team-card")),
			this.setup());
	}
}
et.registerPlugin(dt);
class ph {
	constructor() {
		we(this, "onCarouselPrev", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === 0
						? this.DOM.cards.length - 1
						: this.activeIndex - 1;
				const i = this.DOM.cards[t],
					e = this.DOM.cards[this.activeIndex];
				et.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(i))
					.add(this.enterSlide(e), 0);
			}
		});
		we(this, "onCarouselNext", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === this.DOM.cards.length - 1
						? 0
						: this.activeIndex + 1;
				const i = this.DOM.cards[t],
					e = this.DOM.cards[this.activeIndex];
				et.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(i))
					.add(this.enterSlide(e), 0);
			}
		});
		we(this, "exitSlide", (t) => {
			const i = et.timeline();
			return (
				i.to(t, {
					opacity: 0,
					xPercent: -100,
					duration: 0.8,
					onComplete: () => {
						et.set(t, { opacity: 0, xPercent: 100 });
					},
					ease: Ye,
				}),
				i
			);
		});
		we(this, "enterSlide", (t) => {
			const i = et.timeline();
			return i.to(t, { opacity: 1, xPercent: 0, duration: 0.8, ease: Ye }), i;
		});
		we(this, "buildCardsTl", () => {
			const t = et.timeline();
			for (let i = 0; i < this.DOM.cards.length; i++) {
				const e = this.DOM.cards[i],
					n = et.timeline();
				n
					.from(e, { y: te.window.height * 0.5, duration: 1.4 })
					.to(
						e,
						{
							y: () => i * 10,
							scale: () => 1 - (this.DOM.cards.length - i) * 0.02,
							duration: 0.8,
						},
						1.5,
					),
					t.add(n, i === 0 ? 0 : "-=1.25");
			}
			return t;
		});
		this.init();
	}
	setup() {
		et
			.matchMedia()
			.add(
				{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
				(i) => {
					const { isDesk: e, isMobile: n } = i.conditions;
					e ? this.setTrigger() : n && this.setMobileCarousel();
				},
			),
			this.DOM.carouselPrev.addEventListener("click", this.onCarouselPrev),
			this.DOM.carouselNext.addEventListener("click", this.onCarouselNext);
	}
	setMobileCarousel() {
		et.set(this.DOM.cards, { opacity: 0, xPercent: 100 }),
			et.set(this.DOM.cards[this.activeIndex], { opacity: 1, xPercent: 0 });
	}
	setTrigger() {
		et.set(this.DOM.cards, { opacity: 1, xPercent: 0, rotate: 0 });
		const t = et.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=20%",
					end: `+=${te.window.height * 5}`,
					pin: !0,
					scrub: !0,
				},
			}),
			i = this.buildCardsTl();
		t.add(i, 0);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const i = t.querySelector(".js-testimonial-section");
		i &&
			((this.DOM = {}),
			(this.DOM.section = i),
			(this.DOM.cards = this.DOM.section.querySelectorAll(
				".js-testimonial-card",
			)),
			(this.DOM.carouselPrev = this.DOM.section.querySelector(
				".js-testimonial-carousel-prev",
			)),
			(this.DOM.carouselNext = this.DOM.section.querySelector(
				".js-testimonial-carousel-next",
			)),
			(this.isAnimating = !1),
			(this.activeIndex = 0),
			this.setup());
	}
}
class gh {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== te.window.width &&
			((this.winW = te.window.width), this.setup());
	}
	setup() {
		const t = te.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = te.window.width), this.setup();
	}
}
function Fl(a, t, i) {
	var e;
	return function () {
		var n = this,
			r = arguments,
			s = function () {
				(e = null), i || a.apply(n, r);
			},
			o = i && !e;
		clearTimeout(e), (e = setTimeout(s, t)), o && a.apply(n, r);
	};
}
function Nl() {
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
class _h {
	constructor() {
		we(this, "onResize", () => {
			te.resize(),
				document.body.classList.toggle("is-touch", Nl()),
				Ri.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", Nl());
		}),
			window.addEventListener("load", () => {
				te.init(),
					Ri.add("viewportFixer", new gh()),
					Ri.add("nav", new dh()),
					Ri.add("hashScroll", new uh()),
					Ri.add("featuresCarousel", new ah()),
					Ri.add("marqueeManager", new fh()),
					Ri.add("computeBlock", new rd()),
					Ri.add("testimonials", new ph()),
					Ri.add("team", new hh());
			}),
			window.addEventListener("resize", Fl(this.onResize, 150)),
			window.addEventListener("orientationchange", Fl(this.onResize, 150));
	}
}
const mh = new _h();
mh.start();
