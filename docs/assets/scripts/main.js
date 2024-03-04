var Hf = Object.defineProperty;
var Xf = (r, t, e) =>
	t in r
		? Hf(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (r[t] = e);
var zt = (r, t, e) => (Xf(r, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
	new MutationObserver((n) => {
		for (const s of n)
			if (s.type === "childList")
				for (const o of s.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(n) {
		const s = {};
		return (
			n.integrity && (s.integrity = n.integrity),
			n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
			n.crossOrigin === "use-credentials"
				? (s.credentials = "include")
				: n.crossOrigin === "anonymous"
					? (s.credentials = "omit")
					: (s.credentials = "same-origin"),
			s
		);
	}
	function i(n) {
		if (n.ep) return;
		n.ep = !0;
		const s = e(n);
		fetch(n.href, s);
	}
})();
function Bi(r) {
	if (r === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return r;
}
function Oc(r, t) {
	(r.prototype = Object.create(t.prototype)),
		(r.prototype.constructor = r),
		(r.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var oi = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	dr = { duration: 0.5, overwrite: !1, delay: 0 },
	Ea,
	De,
	qt,
	hi = 1e8,
	Ft = 1 / hi,
	Qo = Math.PI * 2,
	$f = Qo / 4,
	Vf = 0,
	Dc = Math.sqrt,
	jf = Math.cos,
	Wf = Math.sin,
	pe = function (t) {
		return typeof t == "string";
	},
	Qt = function (t) {
		return typeof t == "function";
	},
	Wi = function (t) {
		return typeof t == "number";
	},
	ka = function (t) {
		return typeof t > "u";
	},
	Fi = function (t) {
		return typeof t == "object";
	},
	Xe = function (t) {
		return t !== !1;
	},
	Aa = function () {
		return typeof window < "u";
	},
	Ms = function (t) {
		return Qt(t) || pe(t);
	},
	Cc =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	Ce = Array.isArray,
	Zo = /(?:-?\.?\d|\.)+/gi,
	Pc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	tr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Do = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Ec = /[+-]=-?[.\d]+/,
	kc = /[^,'"\[\]\s]+/gi,
	Gf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Vt,
	Pi,
	Jo,
	La,
	ai = {},
	Js = {},
	Ac,
	Lc = function (t) {
		return (Js = Fn(t, ai)) && Ge;
	},
	Ia = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	ns = function (t, e) {
		return !e && console.warn(t);
	},
	Ic = function (t, e) {
		return (t && (ai[t] = e) && Js && (Js[t] = e)) || ai;
	},
	rs = function () {
		return 0;
	},
	Uf = { suppressEvents: !0, isStart: !0, kill: !1 },
	qs = { suppressEvents: !0, kill: !1 },
	Kf = { suppressEvents: !0 },
	Ra = {},
	an = [],
	ta = {},
	Rc,
	ei = {},
	Co = {},
	wl = 30,
	Ys = [],
	Na = "",
	Fa = function (t) {
		var e = t[0],
			i,
			n;
		if ((Fi(e) || Qt(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
			for (n = Ys.length; n-- && !Ys[n].targetTest(e); );
			i = Ys[n];
		}
		for (n = t.length; n--; )
			(t[n] && (t[n]._gsap || (t[n]._gsap = new su(t[n], i)))) ||
				t.splice(n, 1);
		return t;
	},
	Cn = function (t) {
		return t._gsap || Fa(pi(t))[0]._gsap;
	},
	Nc = function (t, e, i) {
		return (i = t[e]) && Qt(i)
			? t[e]()
			: (ka(i) && t.getAttribute && t.getAttribute(e)) || i;
	},
	$e = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	te = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	he = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	nr = function (t, e) {
		var i = e.charAt(0),
			n = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n
		);
	},
	Qf = function (t, e) {
		for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
		return n < i;
	},
	to = function () {
		var t = an.length,
			e = an.slice(0),
			i,
			n;
		for (ta = {}, an.length = 0, i = 0; i < t; i++)
			(n = e[i]),
				n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
	},
	Fc = function (t, e, i, n) {
		an.length && !De && to(),
			t.render(e, i, n || (De && e < 0 && (t._initted || t._startAt))),
			an.length && !De && to();
	},
	zc = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(kc).length < 2
			? e
			: pe(t)
				? t.trim()
				: t;
	},
	Bc = function (t) {
		return t;
	},
	_i = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Zf = function (t) {
		return function (e, i) {
			for (var n in i)
				n in e || (n === "duration" && t) || n === "ease" || (e[n] = i[n]);
		};
	},
	Fn = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	bl = function r(t, e) {
		for (var i in e)
			i !== "__proto__" &&
				i !== "constructor" &&
				i !== "prototype" &&
				(t[i] = Fi(e[i]) ? r(t[i] || (t[i] = {}), e[i]) : e[i]);
		return t;
	},
	eo = function (t, e) {
		var i = {},
			n;
		for (n in t) n in e || (i[n] = t[n]);
		return i;
	},
	Yr = function (t) {
		var e = t.parent || Vt,
			i = t.keyframes ? Zf(Ce(t.keyframes)) : _i;
		if (Xe(t.inherit))
			for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Jf = function (t, e) {
		for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
		return i < 0;
	},
	qc = function (t, e, i, n, s) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var o = t[n],
			a;
		if (s) for (a = e[s]; o && o[s] > a; ) o = o._prev;
		return (
			o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[i]), (t[i] = e)),
			e._next ? (e._next._prev = e) : (t[n] = e),
			(e._prev = o),
			(e.parent = e._dp = t),
			e
		);
	},
	mo = function (t, e, i, n) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var s = e._prev,
			o = e._next;
		s ? (s._next = o) : t[i] === e && (t[i] = o),
			o ? (o._prev = s) : t[n] === e && (t[n] = s),
			(e._next = e._prev = e.parent = null);
	},
	fn = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Pn = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
		return t;
	},
	td = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	ea = function (t, e, i, n) {
		return (
			t._startAt &&
			(De
				? t._startAt.revert(qs)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, n))
		);
	},
	ed = function r(t) {
		return !t || (t._ts && r(t.parent));
	},
	Tl = function (t) {
		return t._repeat ? hr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	hr = function (t, e) {
		var i = Math.floor((t /= e));
		return t && i === t ? i - 1 : i;
	},
	io = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	yo = function (t) {
		return (t._end = he(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || Ft) || 0),
		));
	},
	vo = function (t, e) {
		var i = t._dp;
		return (
			i &&
				i.smoothChildTiming &&
				t._ts &&
				((t._start = he(
					i._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
				)),
				yo(t),
				i._dirty || Pn(i, t)),
			t
		);
	},
	Yc = function (t, e) {
		var i;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((i = io(t.rawTime(), e)),
				(!e._dur || ys(0, e.totalDuration(), i) - e._tTime > Ft) &&
					e.render(i, !0)),
			Pn(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (i = t; i._dp; )
					i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
			t._zTime = -Ft;
		}
	},
	Ai = function (t, e, i, n) {
		return (
			e.parent && fn(e),
			(e._start = he(
				(Wi(i) ? i : i || t !== Vt ? ui(t, i, e) : t._time) + e._delay,
			)),
			(e._end = he(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			qc(t, e, "_first", "_last", t._sort ? "_start" : 0),
			ia(e) || (t._recent = e),
			n || Yc(t, e),
			t._ts < 0 && vo(t, t._tTime),
			t
		);
	},
	Hc = function (t, e) {
		return (
			(ai.ScrollTrigger || Ia("scrollTrigger", e)) &&
			ai.ScrollTrigger.create(e, t)
		);
	},
	Xc = function (t, e, i, n, s) {
		if ((Ba(t, e, s), !t._initted)) return 1;
		if (
			!i &&
			t._pt &&
			!De &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Rc !== ii.frame
		)
			return an.push(t), (t._lazy = [s, n]), 1;
	},
	id = function r(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r(e));
	},
	ia = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	nd = function (t, e, i, n) {
		var s = t.ratio,
			o =
				e < 0 ||
				(!e &&
					((!t._start && id(t) && !(!t._initted && ia(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !ia(t))))
					? 0
					: 1,
			a = t._rDelay,
			c = 0,
			u,
			f,
			d;
		if (
			(a &&
				t._repeat &&
				((c = ys(0, t._tDur, e)),
				(f = hr(c, a)),
				t._yoyo && f & 1 && (o = 1 - o),
				f !== hr(t._tTime, a) &&
					((s = 1 - o), t.vars.repeatRefresh && t._initted && t.invalidate())),
			o !== s || De || n || t._zTime === Ft || (!e && t._zTime))
		) {
			if (!t._initted && Xc(t, e, n, i, c)) return;
			for (
				d = t._zTime,
					t._zTime = e || (i ? Ft : 0),
					i || (i = e && !d),
					t.ratio = o,
					t._from && (o = 1 - o),
					t._time = 0,
					t._tTime = c,
					u = t._pt;
				u;

			)
				u.r(o, u.d), (u = u._next);
			e < 0 && ea(t, e, i, !0),
				t._onUpdate && !i && si(t, "onUpdate"),
				c && t._repeat && !i && t.parent && si(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === o &&
					(o && fn(t, 1),
					!i &&
						!De &&
						(si(t, o ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	rd = function (t, e, i) {
		var n;
		if (i > e)
			for (n = t._first; n && n._start <= i; ) {
				if (n.data === "isPause" && n._start > e) return n;
				n = n._next;
			}
		else
			for (n = t._last; n && n._start >= i; ) {
				if (n.data === "isPause" && n._start < e) return n;
				n = n._prev;
			}
	},
	pr = function (t, e, i, n) {
		var s = t._repeat,
			o = he(e) || 0,
			a = t._tTime / t._tDur;
		return (
			a && !n && (t._time *= o / t._dur),
			(t._dur = o),
			(t._tDur = s ? (s < 0 ? 1e10 : he(o * (s + 1) + t._rDelay * s)) : o),
			a > 0 && !n && vo(t, (t._tTime = t._tDur * a)),
			t.parent && yo(t),
			i || Pn(t.parent, t),
			t
		);
	},
	Sl = function (t) {
		return t instanceof Re ? Pn(t) : pr(t, t._dur);
	},
	sd = { _start: 0, endTime: rs, totalDuration: rs },
	ui = function r(t, e, i) {
		var n = t.labels,
			s = t._recent || sd,
			o = t.duration() >= hi ? s.endTime(!1) : t._dur,
			a,
			c,
			u;
		return pe(e) && (isNaN(e) || e in n)
			? ((c = e.charAt(0)),
				(u = e.substr(-1) === "%"),
				(a = e.indexOf("=")),
				c === "<" || c === ">"
					? (a >= 0 && (e = e.replace(/=/, "")),
						(c === "<" ? s._start : s.endTime(s._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
					: a < 0
						? (e in n || (n[e] = o), n[e])
						: ((c = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
							u && i && (c = (c / 100) * (Ce(i) ? i[0] : i).totalDuration()),
							a > 1 ? r(t, e.substr(0, a - 1), i) + c : o + c))
			: e == null
				? o
				: +e;
	},
	Hr = function (t, e, i) {
		var n = Wi(e[1]),
			s = (n ? 2 : 1) + (t < 2 ? 0 : 1),
			o = e[s],
			a,
			c;
		if ((n && (o.duration = e[1]), (o.parent = i), t)) {
			for (a = o, c = i; c && !("immediateRender" in a); )
				(a = c.vars.defaults || {}), (c = Xe(c.vars.inherit) && c.parent);
			(o.immediateRender = Xe(a.immediateRender)),
				t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
		}
		return new re(e[0], o, e[s + 1]);
	},
	pn = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	ys = function (t, e, i) {
		return i < t ? t : i > e ? e : i;
	},
	Oe = function (t, e) {
		return !pe(t) || !(e = Gf.exec(t)) ? "" : e[1];
	},
	od = function (t, e, i) {
		return pn(i, function (n) {
			return ys(t, e, n);
		});
	},
	na = [].slice,
	$c = function (t, e) {
		return (
			t &&
			Fi(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && Fi(t[0]))) &&
			!t.nodeType &&
			t !== Pi
		);
	},
	ad = function (t, e, i) {
		return (
			i === void 0 && (i = []),
			t.forEach(function (n) {
				var s;
				return (pe(n) && !e) || $c(n, 1)
					? (s = i).push.apply(s, pi(n))
					: i.push(n);
			}) || i
		);
	},
	pi = function (t, e, i) {
		return qt && !e && qt.selector
			? qt.selector(t)
			: pe(t) && !i && (Jo || !gr())
				? na.call((e || La).querySelectorAll(t), 0)
				: Ce(t)
					? ad(t, i)
					: $c(t)
						? na.call(t, 0)
						: t
							? [t]
							: [];
	},
	ra = function (t) {
		return (
			(t = pi(t)[0] || ns("Invalid scope") || {}),
			function (e) {
				var i = t.current || t.nativeElement || t;
				return pi(
					e,
					i.querySelectorAll
						? i
						: i === t
							? ns("Invalid scope") || La.createElement("div")
							: t,
				);
			}
		);
	},
	Vc = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	jc = function (t) {
		if (Qt(t)) return t;
		var e = Fi(t) ? t : { each: t },
			i = En(e.ease),
			n = e.from || 0,
			s = parseFloat(e.base) || 0,
			o = {},
			a = n > 0 && n < 1,
			c = isNaN(n) || a,
			u = e.axis,
			f = n,
			d = n;
		return (
			pe(n)
				? (f = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
				: !a && c && ((f = n[0]), (d = n[1])),
			function (p, l, g) {
				var h = (g || e).length,
					m = o[h],
					_,
					y,
					S,
					x,
					b,
					P,
					M,
					D,
					E;
				if (!m) {
					if (((E = e.grid === "auto" ? 0 : (e.grid || [1, hi])[1]), !E)) {
						for (
							M = -hi;
							M < (M = g[E++].getBoundingClientRect().left) && E < h;

						);
						E < h && E--;
					}
					for (
						m = o[h] = [],
							_ = c ? Math.min(E, h) * f - 0.5 : n % E,
							y = E === hi ? 0 : c ? (h * d) / E - 0.5 : (n / E) | 0,
							M = 0,
							D = hi,
							P = 0;
						P < h;
						P++
					)
						(S = (P % E) - _),
							(x = y - ((P / E) | 0)),
							(m[P] = b = u ? Math.abs(u === "y" ? x : S) : Dc(S * S + x * x)),
							b > M && (M = b),
							b < D && (D = b);
					n === "random" && Vc(m),
						(m.max = M - D),
						(m.min = D),
						(m.v = h =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(E > h
										? h - 1
										: u
											? u === "y"
												? h / E
												: E
											: Math.max(E, h / E)) ||
								0) * (n === "edges" ? -1 : 1)),
						(m.b = h < 0 ? s - h : s),
						(m.u = Oe(e.amount || e.each) || 0),
						(i = i && h < 0 ? iu(i) : i);
				}
				return (
					(h = (m[p] - m.min) / m.max || 0),
					he(m.b + (i ? i(h) : h) * m.v) + m.u
				);
			}
		);
	},
	sa = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (i) {
			var n = he(Math.round(parseFloat(i) / t) * t * e);
			return (n - (n % 1)) / e + (Wi(i) ? 0 : Oe(i));
		};
	},
	Wc = function (t, e) {
		var i = Ce(t),
			n,
			s;
		return (
			!i &&
				Fi(t) &&
				((n = i = t.radius || hi),
				t.values
					? ((t = pi(t.values)), (s = !Wi(t[0])) && (n *= n))
					: (t = sa(t.increment))),
			pn(
				e,
				i
					? Qt(t)
						? function (o) {
								return (s = t(o)), Math.abs(s - o) <= n ? s : o;
							}
						: function (o) {
								for (
									var a = parseFloat(s ? o.x : o),
										c = parseFloat(s ? o.y : 0),
										u = hi,
										f = 0,
										d = t.length,
										p,
										l;
									d--;

								)
									s
										? ((p = t[d].x - a), (l = t[d].y - c), (p = p * p + l * l))
										: (p = Math.abs(t[d] - a)),
										p < u && ((u = p), (f = d));
								return (
									(f = !n || u <= n ? t[f] : o),
									s || f === o || Wi(o) ? f : f + Oe(o)
								);
							}
					: sa(t),
			)
		);
	},
	Gc = function (t, e, i, n) {
		return pn(Ce(t) ? !e : i === !0 ? !!(i = 0) : !n, function () {
			return Ce(t)
				? t[~~(Math.random() * t.length)]
				: (i = i || 1e-5) &&
						(n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
						Math.floor(
							Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
								i *
								n,
						) / n;
		});
	},
	ld = function () {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return function (n) {
			return e.reduce(function (s, o) {
				return o(s);
			}, n);
		};
	},
	cd = function (t, e) {
		return function (i) {
			return t(parseFloat(i)) + (e || Oe(i));
		};
	},
	ud = function (t, e, i) {
		return Kc(t, e, 0, 1, i);
	},
	Uc = function (t, e, i) {
		return pn(i, function (n) {
			return t[~~e(n)];
		});
	},
	fd = function r(t, e, i) {
		var n = e - t;
		return Ce(t)
			? Uc(t, r(0, t.length), e)
			: pn(i, function (s) {
					return ((n + ((s - t) % n)) % n) + t;
				});
	},
	dd = function r(t, e, i) {
		var n = e - t,
			s = n * 2;
		return Ce(t)
			? Uc(t, r(0, t.length - 1), e)
			: pn(i, function (o) {
					return (o = (s + ((o - t) % s)) % s || 0), t + (o > n ? s - o : o);
				});
	},
	ss = function (t) {
		for (var e = 0, i = "", n, s, o, a; ~(n = t.indexOf("random(", e)); )
			(o = t.indexOf(")", n)),
				(a = t.charAt(n + 7) === "["),
				(s = t.substr(n + 7, o - n - 7).match(a ? kc : Zo)),
				(i +=
					t.substr(e, n - e) + Gc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
				(e = o + 1);
		return i + t.substr(e, t.length - e);
	},
	Kc = function (t, e, i, n, s) {
		var o = e - t,
			a = n - i;
		return pn(s, function (c) {
			return i + (((c - t) / o) * a || 0);
		});
	},
	hd = function r(t, e, i, n) {
		var s = isNaN(t + e)
			? 0
			: function (l) {
					return (1 - l) * t + l * e;
				};
		if (!s) {
			var o = pe(t),
				a = {},
				c,
				u,
				f,
				d,
				p;
			if ((i === !0 && (n = 1) && (i = null), o))
				(t = { p: t }), (e = { p: e });
			else if (Ce(t) && !Ce(e)) {
				for (f = [], d = t.length, p = d - 2, u = 1; u < d; u++)
					f.push(r(t[u - 1], t[u]));
				d--,
					(s = function (g) {
						g *= d;
						var h = Math.min(p, ~~g);
						return f[h](g - h);
					}),
					(i = e);
			} else n || (t = Fn(Ce(t) ? [] : {}, t));
			if (!f) {
				for (c in e) za.call(a, t, c, "get", e[c]);
				s = function (g) {
					return Ha(g, a) || (o ? t.p : t);
				};
			}
		}
		return pn(i, s);
	},
	Ml = function (t, e, i) {
		var n = t.labels,
			s = hi,
			o,
			a,
			c;
		for (o in n)
			(a = n[o] - e),
				a < 0 == !!i && a && s > (a = Math.abs(a)) && ((c = o), (s = a));
		return c;
	},
	si = function (t, e, i) {
		var n = t.vars,
			s = n[e],
			o = qt,
			a = t._ctx,
			c,
			u,
			f;
		if (s)
			return (
				(c = n[e + "Params"]),
				(u = n.callbackScope || t),
				i && an.length && to(),
				a && (qt = a),
				(f = c ? s.apply(u, c) : s.call(u)),
				(qt = o),
				f
			);
	},
	Er = function (t) {
		return (
			fn(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!De),
			t.progress() < 1 && si(t, "onInterrupt"),
			t
		);
	},
	er,
	Qc = [],
	Zc = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), Aa() || t.headless)) {
				var e = t.name,
					i = Qt(t),
					n =
						e && !i && t.init
							? function () {
									this._props = [];
								}
							: t,
					s = {
						init: rs,
						render: Ha,
						add: za,
						kill: Pd,
						modifier: Cd,
						rawVars: 0,
					},
					o = {
						targetTest: 0,
						get: 0,
						getSetter: Ya,
						aliases: {},
						register: 0,
					};
				if ((gr(), t !== n)) {
					if (ei[e]) return;
					_i(n, _i(eo(t, s), o)),
						Fn(n.prototype, Fn(s, eo(t, o))),
						(ei[(n.prop = e)] = n),
						t.targetTest && (Ys.push(n), (Ra[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				Ic(e, n), t.register && t.register(Ge, n, Ve);
			} else Qc.push(t);
	},
	Lt = 255,
	kr = {
		aqua: [0, Lt, Lt],
		lime: [0, Lt, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, Lt],
		navy: [0, 0, 128],
		white: [Lt, Lt, Lt],
		olive: [128, 128, 0],
		yellow: [Lt, Lt, 0],
		orange: [Lt, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [Lt, 0, 0],
		pink: [Lt, 192, 203],
		cyan: [0, Lt, Lt],
		transparent: [Lt, Lt, Lt, 0],
	},
	Po = function (t, e, i) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? e + (i - e) * t * 6
				: t < 0.5
					? i
					: t * 3 < 2
						? e + (i - e) * (2 / 3 - t) * 6
						: e) *
				Lt +
				0.5) |
				0
		);
	},
	Jc = function (t, e, i) {
		var n = t ? (Wi(t) ? [t >> 16, (t >> 8) & Lt, t & Lt] : 0) : kr.black,
			s,
			o,
			a,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		if (!n) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), kr[t]))
				n = kr[t];
			else if (t.charAt(0) === "#") {
				if (
					(t.length < 6 &&
						((s = t.charAt(1)),
						(o = t.charAt(2)),
						(a = t.charAt(3)),
						(t =
							"#" +
							s +
							s +
							o +
							o +
							a +
							a +
							(t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
					t.length === 9)
				)
					return (
						(n = parseInt(t.substr(1, 6), 16)),
						[n >> 16, (n >> 8) & Lt, n & Lt, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (n = [t >> 16, (t >> 8) & Lt, t & Lt]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((n = g = t.match(Zo)), !e))
					(c = (+n[0] % 360) / 360),
						(u = +n[1] / 100),
						(f = +n[2] / 100),
						(o = f <= 0.5 ? f * (u + 1) : f + u - f * u),
						(s = f * 2 - o),
						n.length > 3 && (n[3] *= 1),
						(n[0] = Po(c + 1 / 3, s, o)),
						(n[1] = Po(c, s, o)),
						(n[2] = Po(c - 1 / 3, s, o));
				else if (~t.indexOf("="))
					return (n = t.match(Pc)), i && n.length < 4 && (n[3] = 1), n;
			} else n = t.match(Zo) || kr.transparent;
			n = n.map(Number);
		}
		return (
			e &&
				!g &&
				((s = n[0] / Lt),
				(o = n[1] / Lt),
				(a = n[2] / Lt),
				(d = Math.max(s, o, a)),
				(p = Math.min(s, o, a)),
				(f = (d + p) / 2),
				d === p
					? (c = u = 0)
					: ((l = d - p),
						(u = f > 0.5 ? l / (2 - d - p) : l / (d + p)),
						(c =
							d === s
								? (o - a) / l + (o < a ? 6 : 0)
								: d === o
									? (a - s) / l + 2
									: (s - o) / l + 4),
						(c *= 60)),
				(n[0] = ~~(c + 0.5)),
				(n[1] = ~~(u * 100 + 0.5)),
				(n[2] = ~~(f * 100 + 0.5))),
			i && n.length < 4 && (n[3] = 1),
			n
		);
	},
	tu = function (t) {
		var e = [],
			i = [],
			n = -1;
		return (
			t.split(ln).forEach(function (s) {
				var o = s.match(tr) || [];
				e.push.apply(e, o), i.push((n += o.length + 1));
			}),
			(e.c = i),
			e
		);
	},
	Ol = function (t, e, i) {
		var n = "",
			s = (t + n).match(ln),
			o = e ? "hsla(" : "rgba(",
			a = 0,
			c,
			u,
			f,
			d;
		if (!s) return t;
		if (
			((s = s.map(function (p) {
				return (
					(p = Jc(p, e, 1)) &&
					o +
						(e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
						")"
				);
			})),
			i && ((f = tu(t)), (c = i.c), c.join(n) !== f.c.join(n)))
		)
			for (u = t.replace(ln, "1").split(tr), d = u.length - 1; a < d; a++)
				n +=
					u[a] +
					(~c.indexOf(a)
						? s.shift() || o + "0,0,0,0)"
						: (f.length ? f : s.length ? s : i).shift());
		if (!u)
			for (u = t.split(ln), d = u.length - 1; a < d; a++) n += u[a] + s[a];
		return n + u[d];
	},
	ln = (function () {
		var r =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in kr) r += "|" + t + "\\b";
		return new RegExp(r + ")", "gi");
	})(),
	pd = /hsl[a]?\(/,
	eu = function (t) {
		var e = t.join(" "),
			i;
		if (((ln.lastIndex = 0), ln.test(e)))
			return (
				(i = pd.test(e)),
				(t[1] = Ol(t[1], i)),
				(t[0] = Ol(t[0], i, tu(t[1]))),
				!0
			);
	},
	os,
	ii = (function () {
		var r = Date.now,
			t = 500,
			e = 33,
			i = r(),
			n = i,
			s = 1e3 / 240,
			o = s,
			a = [],
			c,
			u,
			f,
			d,
			p,
			l,
			g = function h(m) {
				var _ = r() - n,
					y = m === !0,
					S,
					x,
					b,
					P;
				if (
					((_ > t || _ < 0) && (i += _ - e),
					(n += _),
					(b = n - i),
					(S = b - o),
					(S > 0 || y) &&
						((P = ++d.frame),
						(p = b - d.time * 1e3),
						(d.time = b = b / 1e3),
						(o += S + (S >= s ? 4 : s - S)),
						(x = 1)),
					y || (c = u(h)),
					x)
				)
					for (l = 0; l < a.length; l++) a[l](b, p, P, m);
			};
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					g(!0);
				},
				deltaRatio: function (m) {
					return p / (1e3 / (m || 60));
				},
				wake: function () {
					Ac &&
						(!Jo &&
							Aa() &&
							((Pi = Jo = window),
							(La = Pi.document || {}),
							(ai.gsap = Ge),
							(Pi.gsapVersions || (Pi.gsapVersions = [])).push(Ge.version),
							Lc(Js || Pi.GreenSockGlobals || (!Pi.gsap && Pi) || {}),
							Qc.forEach(Zc)),
						(f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						c && d.sleep(),
						(u =
							f ||
							function (m) {
								return setTimeout(m, (o - d.time * 1e3 + 1) | 0);
							}),
						(os = 1),
						g(2));
				},
				sleep: function () {
					(f ? cancelAnimationFrame : clearTimeout)(c), (os = 0), (u = rs);
				},
				lagSmoothing: function (m, _) {
					(t = m || 1 / 0), (e = Math.min(_ || 33, t));
				},
				fps: function (m) {
					(s = 1e3 / (m || 240)), (o = d.time * 1e3 + s);
				},
				add: function (m, _, y) {
					var S = _
						? function (x, b, P, M) {
								m(x, b, P, M), d.remove(S);
							}
						: m;
					return d.remove(m), a[y ? "unshift" : "push"](S), gr(), S;
				},
				remove: function (m, _) {
					~(_ = a.indexOf(m)) && a.splice(_, 1) && l >= _ && l--;
				},
				_listeners: a,
			}),
			d
		);
	})(),
	gr = function () {
		return !os && ii.wake();
	},
	St = {},
	gd = /^[\d.\-M][\d.\-,\s]/,
	_d = /["']/g,
	md = function (t) {
		for (
			var e = {},
				i = t.substr(1, t.length - 3).split(":"),
				n = i[0],
				s = 1,
				o = i.length,
				a,
				c,
				u;
			s < o;
			s++
		)
			(c = i[s]),
				(a = s !== o - 1 ? c.lastIndexOf(",") : c.length),
				(u = c.substr(0, a)),
				(e[n] = isNaN(u) ? u.replace(_d, "").trim() : +u),
				(n = c.substr(a + 1).trim());
		return e;
	},
	yd = function (t) {
		var e = t.indexOf("(") + 1,
			i = t.indexOf(")"),
			n = t.indexOf("(", e);
		return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
	},
	vd = function (t) {
		var e = (t + "").split("("),
			i = St[e[0]];
		return i && e.length > 1 && i.config
			? i.config.apply(
					null,
					~t.indexOf("{") ? [md(e[1])] : yd(t).split(",").map(zc),
				)
			: St._CE && gd.test(t)
				? St._CE("", t)
				: i;
	},
	iu = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	nu = function r(t, e) {
		for (var i = t._first, n; i; )
			i instanceof Re
				? r(i, e)
				: i.vars.yoyoEase &&
					(!i._yoyo || !i._repeat) &&
					i._yoyo !== e &&
					(i.timeline
						? r(i.timeline, e)
						: ((n = i._ease),
							(i._ease = i._yEase),
							(i._yEase = n),
							(i._yoyo = e))),
				(i = i._next);
	},
	En = function (t, e) {
		return (t && (Qt(t) ? t : St[t] || vd(t))) || e;
	},
	Vn = function (t, e, i, n) {
		i === void 0 &&
			(i = function (c) {
				return 1 - e(1 - c);
			}),
			n === void 0 &&
				(n = function (c) {
					return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2;
				});
		var s = { easeIn: e, easeOut: i, easeInOut: n },
			o;
		return (
			$e(t, function (a) {
				(St[a] = ai[a] = s), (St[(o = a.toLowerCase())] = i);
				for (var c in s)
					St[
						o + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
					] = St[a + "." + c] = s[c];
			}),
			s
		);
	},
	ru = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	Eo = function r(t, e, i) {
		var n = e >= 1 ? e : 1,
			s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			o = (s / Qo) * (Math.asin(1 / n) || 0),
			a = function (f) {
				return f === 1 ? 1 : n * Math.pow(2, -10 * f) * Wf((f - o) * s) + 1;
			},
			c =
				t === "out"
					? a
					: t === "in"
						? function (u) {
								return 1 - a(1 - u);
							}
						: ru(a);
		return (
			(s = Qo / s),
			(c.config = function (u, f) {
				return r(t, u, f);
			}),
			c
		);
	},
	ko = function r(t, e) {
		e === void 0 && (e = 1.70158);
		var i = function (o) {
				return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
			},
			n =
				t === "out"
					? i
					: t === "in"
						? function (s) {
								return 1 - i(1 - s);
							}
						: ru(i);
		return (
			(n.config = function (s) {
				return r(t, s);
			}),
			n
		);
	};
$e("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, t) {
	var e = t < 5 ? t + 1 : t;
	Vn(
		r + ",Power" + (e - 1),
		t
			? function (i) {
					return Math.pow(i, e);
				}
			: function (i) {
					return i;
				},
		function (i) {
			return 1 - Math.pow(1 - i, e);
		},
		function (i) {
			return i < 0.5
				? Math.pow(i * 2, e) / 2
				: 1 - Math.pow((1 - i) * 2, e) / 2;
		},
	);
});
St.Linear.easeNone = St.none = St.Linear.easeIn;
Vn("Elastic", Eo("in"), Eo("out"), Eo());
(function (r, t) {
	var e = 1 / t,
		i = 2 * e,
		n = 2.5 * e,
		s = function (a) {
			return a < e
				? r * a * a
				: a < i
					? r * Math.pow(a - 1.5 / t, 2) + 0.75
					: a < n
						? r * (a -= 2.25 / t) * a + 0.9375
						: r * Math.pow(a - 2.625 / t, 2) + 0.984375;
		};
	Vn(
		"Bounce",
		function (o) {
			return 1 - s(1 - o);
		},
		s,
	);
})(7.5625, 2.75);
Vn("Expo", function (r) {
	return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
Vn("Circ", function (r) {
	return -(Dc(1 - r * r) - 1);
});
Vn("Sine", function (r) {
	return r === 1 ? 1 : -jf(r * $f) + 1;
});
Vn("Back", ko("in"), ko("out"), ko());
St.SteppedEase =
	St.steps =
	ai.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var i = 1 / t,
					n = t + (e ? 0 : 1),
					s = e ? 1 : 0,
					o = 1 - Ft;
				return function (a) {
					return (((n * ys(0, o, a)) | 0) + s) * i;
				};
			},
		};
dr.ease = St["quad.out"];
$e(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (r) {
		return (Na += r + "," + r + "Params,");
	},
);
var su = function (t, e) {
		(this.id = Vf++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : Nc),
			(this.set = e ? e.getSetter : Ya);
	},
	as = (function () {
		function r(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				pr(this, +e.duration, 1, 1),
				(this.data = e.data),
				qt && ((this._ctx = qt), qt.data.push(this)),
				os || ii.wake();
		}
		var t = r.prototype;
		return (
			(t.delay = function (i) {
				return i || i === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + i - this._delay),
						(this._delay = i),
						this)
					: this._delay;
			}),
			(t.duration = function (i) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
						)
					: this.totalDuration() && this._dur;
			}),
			(t.totalDuration = function (i) {
				return arguments.length
					? ((this._dirty = 0),
						pr(
							this,
							this._repeat < 0
								? i
								: (i - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (i, n) {
				if ((gr(), !arguments.length)) return this._tTime;
				var s = this._dp;
				if (s && s.smoothChildTiming && this._ts) {
					for (vo(this, i), !s._dp || s.parent || Yc(s, this); s && s.parent; )
						s.parent._time !==
							s._start +
								(s._ts >= 0
									? s._tTime / s._ts
									: (s.totalDuration() - s._tTime) / -s._ts) &&
							s.totalTime(s._tTime, !0),
							(s = s.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && i < this._tDur) ||
							(this._ts < 0 && i > 0) ||
							(!this._tDur && !i)) &&
						Ai(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== i ||
						(!this._dur && !n) ||
						(this._initted && Math.abs(this._zTime) === Ft) ||
						(!i && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = i), Fc(this, i, n)),
					this
				);
			}),
			(t.time = function (i, n) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), i + Tl(this)) %
								(this._dur + this._rDelay) || (i ? this._dur : 0),
							n,
						)
					: this._time;
			}),
			(t.totalProgress = function (i, n) {
				return arguments.length
					? this.totalTime(this.totalDuration() * i, n)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.progress = function (i, n) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
								Tl(this),
							n,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (i, n) {
				var s = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (i - 1) * s, n)
					: this._repeat
						? hr(this._tTime, s) + 1
						: 1;
			}),
			(t.timeScale = function (i, n) {
				if (!arguments.length) return this._rts === -Ft ? 0 : this._rts;
				if (this._rts === i) return this;
				var s =
					this.parent && this._ts ? io(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +i || 0),
					(this._ts = this._ps || i === -Ft ? 0 : this._rts),
					this.totalTime(ys(-Math.abs(this._delay), this._tDur, s), n !== !1),
					yo(this),
					td(this)
				);
			}),
			(t.paused = function (i) {
				return arguments.length
					? (this._ps !== i &&
							((this._ps = i),
							i
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (gr(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== Ft &&
											(this._tTime -= Ft),
									))),
						this)
					: this._ps;
			}),
			(t.startTime = function (i) {
				if (arguments.length) {
					this._start = i;
					var n = this.parent || this._dp;
					return (
						n && (n._sort || !this.parent) && Ai(n, this, i - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (i) {
				return (
					this._start +
					(Xe(i) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (i) {
				var n = this.parent || this._dp;
				return n
					? i &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? io(n.rawTime(i), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (i) {
				i === void 0 && (i = Kf);
				var n = De;
				return (
					(De = i),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(i),
						this.totalTime(-0.01, i.suppressEvents)),
					this.data !== "nested" && i.kill !== !1 && this.kill(),
					(De = n),
					this
				);
			}),
			(t.globalTime = function (i) {
				for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
					(s = n._start + s / (Math.abs(n._ts) || 1)), (n = n._dp);
				return !this.parent && this._sat ? this._sat.globalTime(i) : s;
			}),
			(t.repeat = function (i) {
				return arguments.length
					? ((this._repeat = i === 1 / 0 ? -2 : i), Sl(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (i) {
				if (arguments.length) {
					var n = this._time;
					return (this._rDelay = i), Sl(this), n ? this.time(n) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (i) {
				return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
			}),
			(t.seek = function (i, n) {
				return this.totalTime(ui(this, i), Xe(n));
			}),
			(t.restart = function (i, n) {
				return this.play().totalTime(i ? -this._delay : 0, Xe(n));
			}),
			(t.play = function (i, n) {
				return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (i, n) {
				return (
					i != null && this.seek(i || this.totalDuration(), n),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (i, n) {
				return i != null && this.seek(i, n), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (i) {
				return arguments.length
					? (!!i !== this.reversed() &&
							this.timeScale(-this._rts || (i ? -Ft : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -Ft), this;
			}),
			(t.isActive = function () {
				var i = this.parent || this._dp,
					n = this._start,
					s;
				return !!(
					!i ||
					(this._ts &&
						this._initted &&
						i.isActive() &&
						(s = i.rawTime(!0)) >= n &&
						s < this.endTime(!0) - Ft)
				);
			}),
			(t.eventCallback = function (i, n, s) {
				var o = this.vars;
				return arguments.length > 1
					? (n
							? ((o[i] = n),
								s && (o[i + "Params"] = s),
								i === "onUpdate" && (this._onUpdate = n))
							: delete o[i],
						this)
					: o[i];
			}),
			(t.then = function (i) {
				var n = this;
				return new Promise(function (s) {
					var o = Qt(i) ? i : Bc,
						a = function () {
							var u = n.then;
							(n.then = null),
								Qt(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
								s(o),
								(n.then = u);
						};
					(n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
					(!n._tTime && n._ts < 0)
						? a()
						: (n._prom = a);
				});
			}),
			(t.kill = function () {
				Er(this);
			}),
			r
		);
	})();
_i(as.prototype, {
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
	_zTime: -Ft,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Re = (function (r) {
	Oc(t, r);
	function t(i, n) {
		var s;
		return (
			i === void 0 && (i = {}),
			(s = r.call(this, i) || this),
			(s.labels = {}),
			(s.smoothChildTiming = !!i.smoothChildTiming),
			(s.autoRemoveChildren = !!i.autoRemoveChildren),
			(s._sort = Xe(i.sortChildren)),
			Vt && Ai(i.parent || Vt, Bi(s), n),
			i.reversed && s.reverse(),
			i.paused && s.paused(!0),
			i.scrollTrigger && Hc(Bi(s), i.scrollTrigger),
			s
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (n, s, o) {
			return Hr(0, arguments, this), this;
		}),
		(e.from = function (n, s, o) {
			return Hr(1, arguments, this), this;
		}),
		(e.fromTo = function (n, s, o, a) {
			return Hr(2, arguments, this), this;
		}),
		(e.set = function (n, s, o) {
			return (
				(s.duration = 0),
				(s.parent = this),
				Yr(s).repeatDelay || (s.repeat = 0),
				(s.immediateRender = !!s.immediateRender),
				new re(n, s, ui(this, o), 1),
				this
			);
		}),
		(e.call = function (n, s, o) {
			return Ai(this, re.delayedCall(0, n, s), o);
		}),
		(e.staggerTo = function (n, s, o, a, c, u, f) {
			return (
				(o.duration = s),
				(o.stagger = o.stagger || a),
				(o.onComplete = u),
				(o.onCompleteParams = f),
				(o.parent = this),
				new re(n, o, ui(this, c)),
				this
			);
		}),
		(e.staggerFrom = function (n, s, o, a, c, u, f) {
			return (
				(o.runBackwards = 1),
				(Yr(o).immediateRender = Xe(o.immediateRender)),
				this.staggerTo(n, s, o, a, c, u, f)
			);
		}),
		(e.staggerFromTo = function (n, s, o, a, c, u, f, d) {
			return (
				(a.startAt = o),
				(Yr(a).immediateRender = Xe(a.immediateRender)),
				this.staggerTo(n, s, a, c, u, f, d)
			);
		}),
		(e.render = function (n, s, o) {
			var a = this._time,
				c = this._dirty ? this.totalDuration() : this._tDur,
				u = this._dur,
				f = n <= 0 ? 0 : he(n),
				d = this._zTime < 0 != n < 0 && (this._initted || !u),
				p,
				l,
				g,
				h,
				m,
				_,
				y,
				S,
				x,
				b,
				P,
				M;
			if (
				(this !== Vt && f > c && n >= 0 && (f = c), f !== this._tTime || o || d)
			) {
				if (
					(a !== this._time &&
						u &&
						((f += this._time - a), (n += this._time - a)),
					(p = f),
					(x = this._start),
					(S = this._ts),
					(_ = !S),
					d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
					this._repeat)
				) {
					if (
						((P = this._yoyo),
						(m = u + this._rDelay),
						this._repeat < -1 && n < 0)
					)
						return this.totalTime(m * 100 + n, s, o);
					if (
						((p = he(f % m)),
						f === c
							? ((h = this._repeat), (p = u))
							: ((h = ~~(f / m)),
								h && h === f / m && ((p = u), h--),
								p > u && (p = u)),
						(b = hr(this._tTime, m)),
						!a &&
							this._tTime &&
							b !== h &&
							this._tTime - b * m - this._dur <= 0 &&
							(b = h),
						P && h & 1 && ((p = u - p), (M = 1)),
						h !== b && !this._lock)
					) {
						var D = P && b & 1,
							E = D === (P && h & 1);
						if (
							(h < b && (D = !D),
							(a = D ? 0 : f % u ? u : f),
							(this._lock = 1),
							(this.render(a || (M ? 0 : he(h * m)), s, !u)._lock = 0),
							(this._tTime = f),
							!s && this.parent && si(this, "onRepeat"),
							this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1),
							(a && a !== this._time) ||
								_ !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((u = this._dur),
							(c = this._tDur),
							E &&
								((this._lock = 2),
								(a = D ? u : -1e-4),
								this.render(a, !0),
								this.vars.repeatRefresh && !M && this.invalidate()),
							(this._lock = 0),
							!this._ts && !_)
						)
							return this;
						nu(this, M);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = rd(this, he(a), he(p))), y && (f -= p - (p = y._start))),
					(this._tTime = f),
					(this._time = p),
					(this._act = !S),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = n),
						(a = 0)),
					!a && p && !s && !h && (si(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (p >= a && n >= 0)
					for (l = this._first; l; ) {
						if (
							((g = l._next), (l._act || p >= l._start) && l._ts && y !== l)
						) {
							if (l.parent !== this) return this.render(n, s, o);
							if (
								(l.render(
									l._ts > 0
										? (p - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(p - l._start) * l._ts,
									s,
									o,
								),
								p !== this._time || (!this._ts && !_))
							) {
								(y = 0), g && (f += this._zTime = -Ft);
								break;
							}
						}
						l = g;
					}
				else {
					l = this._last;
					for (var L = n < 0 ? n : p; l; ) {
						if (((g = l._prev), (l._act || L <= l._end) && l._ts && y !== l)) {
							if (l.parent !== this) return this.render(n, s, o);
							if (
								(l.render(
									l._ts > 0
										? (L - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(L - l._start) * l._ts,
									s,
									o || (De && (l._initted || l._startAt)),
								),
								p !== this._time || (!this._ts && !_))
							) {
								(y = 0), g && (f += this._zTime = L ? -Ft : Ft);
								break;
							}
						}
						l = g;
					}
				}
				if (
					y &&
					!s &&
					(this.pause(),
					(y.render(p >= a ? 0 : -Ft)._zTime = p >= a ? 1 : -1),
					this._ts)
				)
					return (this._start = x), yo(this), this.render(n, s, o);
				this._onUpdate && !s && si(this, "onUpdate", !0),
					((f === c && this._tTime >= this.totalDuration()) || (!f && a)) &&
						(x === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
						(this._lock ||
							((n || !u) &&
								((f === c && this._ts > 0) || (!f && this._ts < 0)) &&
								fn(this, 1),
							!s &&
								!(n < 0 && !a) &&
								(f || a || !c) &&
								(si(
									this,
									f === c && n >= 0 ? "onComplete" : "onReverseComplete",
									!0,
								),
								this._prom &&
									!(f < c && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(e.add = function (n, s) {
			var o = this;
			if ((Wi(s) || (s = ui(this, s, n)), !(n instanceof as))) {
				if (Ce(n))
					return (
						n.forEach(function (a) {
							return o.add(a, s);
						}),
						this
					);
				if (pe(n)) return this.addLabel(n, s);
				if (Qt(n)) n = re.delayedCall(0, n);
				else return this;
			}
			return this !== n ? Ai(this, n, s) : this;
		}),
		(e.getChildren = function (n, s, o, a) {
			n === void 0 && (n = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = !0),
				a === void 0 && (a = -hi);
			for (var c = [], u = this._first; u; )
				u._start >= a &&
					(u instanceof re
						? s && c.push(u)
						: (o && c.push(u), n && c.push.apply(c, u.getChildren(!0, s, o)))),
					(u = u._next);
			return c;
		}),
		(e.getById = function (n) {
			for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
				if (s[o].vars.id === n) return s[o];
		}),
		(e.remove = function (n) {
			return pe(n)
				? this.removeLabel(n)
				: Qt(n)
					? this.killTweensOf(n)
					: (mo(this, n),
						n === this._recent && (this._recent = this._last),
						Pn(this));
		}),
		(e.totalTime = function (n, s) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = he(
							ii.time -
								(this._ts > 0
									? n / this._ts
									: (this.totalDuration() - n) / -this._ts),
						)),
					r.prototype.totalTime.call(this, n, s),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(e.addLabel = function (n, s) {
			return (this.labels[n] = ui(this, s)), this;
		}),
		(e.removeLabel = function (n) {
			return delete this.labels[n], this;
		}),
		(e.addPause = function (n, s, o) {
			var a = re.delayedCall(0, s || rs, o);
			return (
				(a.data = "isPause"), (this._hasPause = 1), Ai(this, a, ui(this, n))
			);
		}),
		(e.removePause = function (n) {
			var s = this._first;
			for (n = ui(this, n); s; )
				s._start === n && s.data === "isPause" && fn(s), (s = s._next);
		}),
		(e.killTweensOf = function (n, s, o) {
			for (var a = this.getTweensOf(n, o), c = a.length; c--; )
				tn !== a[c] && a[c].kill(n, s);
			return this;
		}),
		(e.getTweensOf = function (n, s) {
			for (var o = [], a = pi(n), c = this._first, u = Wi(s), f; c; )
				c instanceof re
					? Qf(c._targets, a) &&
						(u
							? (!tn || (c._initted && c._ts)) &&
								c.globalTime(0) <= s &&
								c.globalTime(c.totalDuration()) > s
							: !s || c.isActive()) &&
						o.push(c)
					: (f = c.getTweensOf(a, s)).length && o.push.apply(o, f),
					(c = c._next);
			return o;
		}),
		(e.tweenTo = function (n, s) {
			s = s || {};
			var o = this,
				a = ui(o, n),
				c = s,
				u = c.startAt,
				f = c.onStart,
				d = c.onStartParams,
				p = c.immediateRender,
				l,
				g = re.to(
					o,
					_i(
						{
							ease: s.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: a,
							overwrite: "auto",
							duration:
								s.duration ||
								Math.abs(
									(a - (u && "time" in u ? u.time : o._time)) / o.timeScale(),
								) ||
								Ft,
							onStart: function () {
								if ((o.pause(), !l)) {
									var m =
										s.duration ||
										Math.abs(
											(a - (u && "time" in u ? u.time : o._time)) /
												o.timeScale(),
										);
									g._dur !== m && pr(g, m, 0, 1).render(g._time, !0, !0),
										(l = 1);
								}
								f && f.apply(g, d || []);
							},
						},
						s,
					),
				);
			return p ? g.render(0) : g;
		}),
		(e.tweenFromTo = function (n, s, o) {
			return this.tweenTo(s, _i({ startAt: { time: ui(this, n) } }, o));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (n) {
			return n === void 0 && (n = this._time), Ml(this, ui(this, n));
		}),
		(e.previousLabel = function (n) {
			return n === void 0 && (n = this._time), Ml(this, ui(this, n), 1);
		}),
		(e.currentLabel = function (n) {
			return arguments.length
				? this.seek(n, !0)
				: this.previousLabel(this._time + Ft);
		}),
		(e.shiftChildren = function (n, s, o) {
			o === void 0 && (o = 0);
			for (var a = this._first, c = this.labels, u; a; )
				a._start >= o && ((a._start += n), (a._end += n)), (a = a._next);
			if (s) for (u in c) c[u] >= o && (c[u] += n);
			return Pn(this);
		}),
		(e.invalidate = function (n) {
			var s = this._first;
			for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
			return r.prototype.invalidate.call(this, n);
		}),
		(e.clear = function (n) {
			n === void 0 && (n = !0);
			for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				n && (this.labels = {}),
				Pn(this)
			);
		}),
		(e.totalDuration = function (n) {
			var s = 0,
				o = this,
				a = o._last,
				c = hi,
				u,
				f,
				d;
			if (arguments.length)
				return o.timeScale(
					(o._repeat < 0 ? o.duration() : o.totalDuration()) /
						(o.reversed() ? -n : n),
				);
			if (o._dirty) {
				for (d = o.parent; a; )
					(u = a._prev),
						a._dirty && a.totalDuration(),
						(f = a._start),
						f > c && o._sort && a._ts && !o._lock
							? ((o._lock = 1), (Ai(o, a, f - a._delay, 1)._lock = 0))
							: (c = f),
						f < 0 &&
							a._ts &&
							((s -= f),
							((!d && !o._dp) || (d && d.smoothChildTiming)) &&
								((o._start += f / o._ts), (o._time -= f), (o._tTime -= f)),
							o.shiftChildren(-f, !1, -1 / 0),
							(c = 0)),
						a._end > s && a._ts && (s = a._end),
						(a = u);
				pr(o, o === Vt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
			}
			return o._tDur;
		}),
		(t.updateRoot = function (n) {
			if ((Vt._ts && (Fc(Vt, io(n, Vt)), (Rc = ii.frame)), ii.frame >= wl)) {
				wl += oi.autoSleep || 120;
				var s = Vt._first;
				if ((!s || !s._ts) && oi.autoSleep && ii._listeners.length < 2) {
					for (; s && !s._ts; ) s = s._next;
					s || ii.sleep();
				}
			}
		}),
		t
	);
})(as);
_i(Re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var xd = function (t, e, i, n, s, o, a) {
		var c = new Ve(this._pt, t, e, 0, 1, fu, null, s),
			u = 0,
			f = 0,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y;
		for (
			c.b = i,
				c.e = n,
				i += "",
				n += "",
				(_ = ~n.indexOf("random(")) && (n = ss(n)),
				o && ((y = [i, n]), o(y, t, e), (i = y[0]), (n = y[1])),
				p = i.match(Do) || [];
			(d = Do.exec(n));

		)
			(g = d[0]),
				(h = n.substring(u, d.index)),
				l ? (l = (l + 1) % 5) : h.substr(-5) === "rgba(" && (l = 1),
				g !== p[f++] &&
					((m = parseFloat(p[f - 1]) || 0),
					(c._pt = {
						_next: c._pt,
						p: h || f === 1 ? h : ",",
						s: m,
						c: g.charAt(1) === "=" ? nr(m, g) - m : parseFloat(g) - m,
						m: l && l < 4 ? Math.round : 0,
					}),
					(u = Do.lastIndex));
		return (
			(c.c = u < n.length ? n.substring(u, n.length) : ""),
			(c.fp = a),
			(Ec.test(n) || _) && (c.e = 0),
			(this._pt = c),
			c
		);
	},
	za = function (t, e, i, n, s, o, a, c, u, f) {
		Qt(n) && (n = n(s || 0, t, o));
		var d = t[e],
			p =
				i !== "get"
					? i
					: Qt(d)
						? u
							? t[
									e.indexOf("set") || !Qt(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](u)
							: t[e]()
						: d,
			l = Qt(d) ? (u ? Md : cu) : qa,
			g;
		if (
			(pe(n) &&
				(~n.indexOf("random(") && (n = ss(n)),
				n.charAt(1) === "=" &&
					((g = nr(p, n) + (Oe(p) || 0)), (g || g === 0) && (n = g))),
			!f || p !== n || oa)
		)
			return !isNaN(p * n) && n !== ""
				? ((g = new Ve(
						this._pt,
						t,
						e,
						+p || 0,
						n - (p || 0),
						typeof d == "boolean" ? Dd : uu,
						0,
						l,
					)),
					u && (g.fp = u),
					a && g.modifier(a, this, t),
					(this._pt = g))
				: (!d && !(e in t) && Ia(e, n),
					xd.call(this, t, e, p, n, l, c || oi.stringFilter, u));
	},
	wd = function (t, e, i, n, s) {
		if (
			(Qt(t) && (t = Xr(t, s, e, i, n)),
			!Fi(t) || (t.style && t.nodeType) || Ce(t) || Cc(t))
		)
			return pe(t) ? Xr(t, s, e, i, n) : t;
		var o = {},
			a;
		for (a in t) o[a] = Xr(t[a], s, e, i, n);
		return o;
	},
	ou = function (t, e, i, n, s, o) {
		var a, c, u, f;
		if (
			ei[t] &&
			(a = new ei[t]()).init(
				s,
				a.rawVars ? e[t] : wd(e[t], n, s, o, i),
				i,
				n,
				o,
			) !== !1 &&
			((i._pt = c = new Ve(i._pt, s, t, 0, 1, a.render, a, 0, a.priority)),
			i !== er)
		)
			for (u = i._ptLookup[i._targets.indexOf(s)], f = a._props.length; f--; )
				u[a._props[f]] = c;
		return a;
	},
	tn,
	oa,
	Ba = function r(t, e, i) {
		var n = t.vars,
			s = n.ease,
			o = n.startAt,
			a = n.immediateRender,
			c = n.lazy,
			u = n.onUpdate,
			f = n.runBackwards,
			d = n.yoyoEase,
			p = n.keyframes,
			l = n.autoRevert,
			g = t._dur,
			h = t._startAt,
			m = t._targets,
			_ = t.parent,
			y = _ && _.data === "nested" ? _.vars.targets : m,
			S = t._overwrite === "auto" && !Ea,
			x = t.timeline,
			b,
			P,
			M,
			D,
			E,
			L,
			F,
			O,
			R,
			Y,
			H,
			j,
			X;
		if (
			(x && (!p || !s) && (s = "none"),
			(t._ease = En(s, dr.ease)),
			(t._yEase = d ? iu(En(d === !0 ? s : d, dr.ease)) : 0),
			d &&
				t._yoyo &&
				!t._repeat &&
				((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
			(t._from = !x && !!n.runBackwards),
			!x || (p && !n.stagger))
		) {
			if (
				((O = m[0] ? Cn(m[0]).harness : 0),
				(j = O && n[O.prop]),
				(b = eo(n, Ra)),
				h &&
					(h._zTime < 0 && h.progress(1),
					e < 0 && f && a && !l ? h.render(-1, !0) : h.revert(f && g ? qs : Uf),
					(h._lazy = 0)),
				o)
			) {
				if (
					(fn(
						(t._startAt = re.set(
							m,
							_i(
								{
									data: "isStart",
									overwrite: !1,
									parent: _,
									immediateRender: !0,
									lazy: !h && Xe(c),
									startAt: null,
									delay: 0,
									onUpdate:
										u &&
										function () {
											return si(t, "onUpdate");
										},
									stagger: 0,
								},
								o,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (De || (!a && !l)) && t._startAt.revert(qs),
					a && g && e <= 0 && i <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (f && g && !h) {
				if (
					(e && (a = !1),
					(M = _i(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: a && !h && Xe(c),
							immediateRender: a,
							stagger: 0,
							parent: _,
						},
						b,
					)),
					j && (M[O.prop] = j),
					fn((t._startAt = re.set(m, M))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (De ? t._startAt.revert(qs) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!a)
				)
					r(t._startAt, Ft, Ft);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, c = (g && Xe(c)) || (c && !g), P = 0;
				P < m.length;
				P++
			) {
				if (
					((E = m[P]),
					(F = E._gsap || Fa(m)[P]._gsap),
					(t._ptLookup[P] = Y = {}),
					ta[F.id] && an.length && to(),
					(H = y === m ? P : y.indexOf(E)),
					O &&
						(R = new O()).init(E, j || b, t, H, y) !== !1 &&
						((t._pt = D =
							new Ve(t._pt, E, R.name, 0, 1, R.render, R, 0, R.priority)),
						R._props.forEach(function (tt) {
							Y[tt] = D;
						}),
						R.priority && (L = 1)),
					!O || j)
				)
					for (M in b)
						ei[M] && (R = ou(M, b, t, H, E, y))
							? R.priority && (L = 1)
							: (Y[M] = D =
									za.call(t, E, M, "get", b[M], H, y, 0, n.stringFilter));
				t._op && t._op[P] && t.kill(E, t._op[P]),
					S &&
						t._pt &&
						((tn = t),
						Vt.killTweensOf(E, Y, t.globalTime(e)),
						(X = !t.parent),
						(tn = 0)),
					t._pt && c && (ta[F.id] = 1);
			}
			L && du(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = u),
			(t._initted = (!t._op || t._pt) && !X),
			p && e <= 0 && x.render(hi, !0, !0);
	},
	bd = function (t, e, i, n, s, o, a, c) {
		var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
			f,
			d,
			p,
			l;
		if (!u)
			for (
				u = t._ptCache[e] = [], p = t._ptLookup, l = t._targets.length;
				l--;

			) {
				if (((f = p[l][e]), f && f.d && f.d._pt))
					for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
				if (!f)
					return (
						(oa = 1),
						(t.vars[e] = "+=0"),
						Ba(t, a),
						(oa = 0),
						c ? ns(e + " not eligible for reset") : 1
					);
				u.push(f);
			}
		for (l = u.length; l--; )
			(d = u[l]),
				(f = d._pt || d),
				(f.s = (n || n === 0) && !s ? n : f.s + (n || 0) + o * f.c),
				(f.c = i - f.s),
				d.e && (d.e = te(i) + Oe(d.e)),
				d.b && (d.b = f.s + Oe(d.b));
	},
	Td = function (t, e) {
		var i = t[0] ? Cn(t[0]).harness : 0,
			n = i && i.aliases,
			s,
			o,
			a,
			c;
		if (!n) return e;
		s = Fn({}, e);
		for (o in n)
			if (o in s) for (c = n[o].split(","), a = c.length; a--; ) s[c[a]] = s[o];
		return s;
	},
	Sd = function (t, e, i, n) {
		var s = e.ease || n || "power1.inOut",
			o,
			a;
		if (Ce(e))
			(a = i[t] || (i[t] = [])),
				e.forEach(function (c, u) {
					return a.push({ t: (u / (e.length - 1)) * 100, v: c, e: s });
				});
		else
			for (o in e)
				(a = i[o] || (i[o] = [])),
					o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: s });
	},
	Xr = function (t, e, i, n, s) {
		return Qt(t)
			? t.call(e, i, n, s)
			: pe(t) && ~t.indexOf("random(")
				? ss(t)
				: t;
	},
	au = Na + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	lu = {};
$e(au + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
	return (lu[r] = 1);
});
var re = (function (r) {
	Oc(t, r);
	function t(i, n, s, o) {
		var a;
		typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
			(a = r.call(this, o ? n : Yr(n)) || this);
		var c = a.vars,
			u = c.duration,
			f = c.delay,
			d = c.immediateRender,
			p = c.stagger,
			l = c.overwrite,
			g = c.keyframes,
			h = c.defaults,
			m = c.scrollTrigger,
			_ = c.yoyoEase,
			y = n.parent || Vt,
			S = (Ce(i) || Cc(i) ? Wi(i[0]) : "length" in n) ? [i] : pi(i),
			x,
			b,
			P,
			M,
			D,
			E,
			L,
			F;
		if (
			((a._targets = S.length
				? Fa(S)
				: ns(
						"GSAP target " + i + " not found. https://gsap.com",
						!oi.nullTargetWarn,
					) || []),
			(a._ptLookup = []),
			(a._overwrite = l),
			g || p || Ms(u) || Ms(f))
		) {
			if (
				((n = a.vars),
				(x = a.timeline =
					new Re({
						data: "nested",
						defaults: h || {},
						targets: y && y.data === "nested" ? y.vars.targets : S,
					})),
				x.kill(),
				(x.parent = x._dp = Bi(a)),
				(x._start = 0),
				p || Ms(u) || Ms(f))
			) {
				if (((M = S.length), (L = p && jc(p)), Fi(p)))
					for (D in p) ~au.indexOf(D) && (F || (F = {}), (F[D] = p[D]));
				for (b = 0; b < M; b++)
					(P = eo(n, lu)),
						(P.stagger = 0),
						_ && (P.yoyoEase = _),
						F && Fn(P, F),
						(E = S[b]),
						(P.duration = +Xr(u, Bi(a), b, E, S)),
						(P.delay = (+Xr(f, Bi(a), b, E, S) || 0) - a._delay),
						!p &&
							M === 1 &&
							P.delay &&
							((a._delay = f = P.delay), (a._start += f), (P.delay = 0)),
						x.to(E, P, L ? L(b, E, S) : 0),
						(x._ease = St.none);
				x.duration() ? (u = f = 0) : (a.timeline = 0);
			} else if (g) {
				Yr(_i(x.vars.defaults, { ease: "none" })),
					(x._ease = En(g.ease || n.ease || "none"));
				var O = 0,
					R,
					Y,
					H;
				if (Ce(g))
					g.forEach(function (j) {
						return x.to(S, j, ">");
					}),
						x.duration();
				else {
					P = {};
					for (D in g)
						D === "ease" || D === "easeEach" || Sd(D, g[D], P, g.easeEach);
					for (D in P)
						for (
							R = P[D].sort(function (j, X) {
								return j.t - X.t;
							}),
								O = 0,
								b = 0;
							b < R.length;
							b++
						)
							(Y = R[b]),
								(H = {
									ease: Y.e,
									duration: ((Y.t - (b ? R[b - 1].t : 0)) / 100) * u,
								}),
								(H[D] = Y.v),
								x.to(S, H, O),
								(O += H.duration);
					x.duration() < u && x.to({}, { duration: u - x.duration() });
				}
			}
			u || a.duration((u = x.duration()));
		} else a.timeline = 0;
		return (
			l === !0 && !Ea && ((tn = Bi(a)), Vt.killTweensOf(S), (tn = 0)),
			Ai(y, Bi(a), s),
			n.reversed && a.reverse(),
			n.paused && a.paused(!0),
			(d ||
				(!u &&
					!g &&
					a._start === he(y._time) &&
					Xe(d) &&
					ed(Bi(a)) &&
					y.data !== "nested")) &&
				((a._tTime = -Ft), a.render(Math.max(0, -f) || 0)),
			m && Hc(Bi(a), m),
			a
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (n, s, o) {
			var a = this._time,
				c = this._tDur,
				u = this._dur,
				f = n < 0,
				d = n > c - Ft && !f ? c : n < Ft ? 0 : n,
				p,
				l,
				g,
				h,
				m,
				_,
				y,
				S,
				x;
			if (!u) nd(this, n, s, o);
			else if (
				d !== this._tTime ||
				!n ||
				o ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((p = d), (S = this.timeline), this._repeat)) {
					if (((h = u + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(h * 100 + n, s, o);
					if (
						((p = he(d % h)),
						d === c
							? ((g = this._repeat), (p = u))
							: ((g = ~~(d / h)),
								g && g === he(d / h) && ((p = u), g--),
								p > u && (p = u)),
						(_ = this._yoyo && g & 1),
						_ && ((x = this._yEase), (p = u - p)),
						(m = hr(this._tTime, h)),
						p === a && !o && this._initted && g === m)
					)
						return (this._tTime = d), this;
					g !== m &&
						(S && this._yEase && nu(S, _),
						this.vars.repeatRefresh &&
							!_ &&
							!this._lock &&
							this._time !== h &&
							this._initted &&
							((this._lock = o = 1),
							(this.render(he(h * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Xc(this, f ? n : p, o, s, d)) return (this._tTime = 0), this;
					if (a !== this._time && !(o && this.vars.repeatRefresh && g !== m))
						return this;
					if (u !== this._dur) return this.render(n, s, o);
				}
				if (
					((this._tTime = d),
					(this._time = p),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (x || this._ease)(p / u)),
					this._from && (this.ratio = y = 1 - y),
					p && !a && !s && !g && (si(this, "onStart"), this._tTime !== d))
				)
					return this;
				for (l = this._pt; l; ) l.r(y, l.d), (l = l._next);
				(S && S.render(n < 0 ? n : S._dur * S._ease(p / this._dur), s, o)) ||
					(this._startAt && (this._zTime = n)),
					this._onUpdate &&
						!s &&
						(f && ea(this, n, s, o), si(this, "onUpdate")),
					this._repeat &&
						g !== m &&
						this.vars.onRepeat &&
						!s &&
						this.parent &&
						si(this, "onRepeat"),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(f && !this._onUpdate && ea(this, n, !0, !0),
						(n || !u) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							fn(this, 1),
						!s &&
							!(f && !a) &&
							(d || a || _) &&
							(si(this, d === c ? "onComplete" : "onReverseComplete", !0),
							this._prom && !(d < c && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(e.targets = function () {
			return this._targets;
		}),
		(e.invalidate = function (n) {
			return (
				(!n || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(n),
				r.prototype.invalidate.call(this, n)
			);
		}),
		(e.resetTo = function (n, s, o, a, c) {
			os || ii.wake(), this._ts || this.play();
			var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				f;
			return (
				this._initted || Ba(this, u),
				(f = this._ease(u / this._dur)),
				bd(this, n, s, o, a, f, u, c)
					? this.resetTo(n, s, o, a, 1)
					: (vo(this, 0),
						this.parent ||
							qc(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(e.kill = function (n, s) {
			if ((s === void 0 && (s = "all"), !n && (!s || s === "all")))
				return (this._lazy = this._pt = 0), this.parent ? Er(this) : this;
			if (this.timeline) {
				var o = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(n, s, tn && tn.vars.overwrite !== !0)
						._first || Er(this),
					this.parent &&
						o !== this.timeline.totalDuration() &&
						pr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
					this
				);
			}
			var a = this._targets,
				c = n ? pi(n) : a,
				u = this._ptLookup,
				f = this._pt,
				d,
				p,
				l,
				g,
				h,
				m,
				_;
			if ((!s || s === "all") && Jf(a, c))
				return s === "all" && (this._pt = 0), Er(this);
			for (
				d = this._op = this._op || [],
					s !== "all" &&
						(pe(s) &&
							((h = {}),
							$e(s, function (y) {
								return (h[y] = 1);
							}),
							(s = h)),
						(s = Td(a, s))),
					_ = a.length;
				_--;

			)
				if (~c.indexOf(a[_])) {
					(p = u[_]),
						s === "all"
							? ((d[_] = s), (g = p), (l = {}))
							: ((l = d[_] = d[_] || {}), (g = s));
					for (h in g)
						(m = p && p[h]),
							m &&
								((!("kill" in m.d) || m.d.kill(h) === !0) && mo(this, m, "_pt"),
								delete p[h]),
							l !== "all" && (l[h] = 1);
				}
			return this._initted && !this._pt && f && Er(this), this;
		}),
		(t.to = function (n, s) {
			return new t(n, s, arguments[2]);
		}),
		(t.from = function (n, s) {
			return Hr(1, arguments);
		}),
		(t.delayedCall = function (n, s, o, a) {
			return new t(s, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: n,
				onComplete: s,
				onReverseComplete: s,
				onCompleteParams: o,
				onReverseCompleteParams: o,
				callbackScope: a,
			});
		}),
		(t.fromTo = function (n, s, o) {
			return Hr(2, arguments);
		}),
		(t.set = function (n, s) {
			return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(n, s);
		}),
		(t.killTweensOf = function (n, s, o) {
			return Vt.killTweensOf(n, s, o);
		}),
		t
	);
})(as);
_i(re.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
$e("staggerTo,staggerFrom,staggerFromTo", function (r) {
	re[r] = function () {
		var t = new Re(),
			e = na.call(arguments, 0);
		return e.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), t[r].apply(t, e);
	};
});
var qa = function (t, e, i) {
		return (t[e] = i);
	},
	cu = function (t, e, i) {
		return t[e](i);
	},
	Md = function (t, e, i, n) {
		return t[e](n.fp, i);
	},
	Od = function (t, e, i) {
		return t.setAttribute(e, i);
	},
	Ya = function (t, e) {
		return Qt(t[e]) ? cu : ka(t[e]) && t.setAttribute ? Od : qa;
	},
	uu = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	Dd = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	fu = function (t, e) {
		var i = e._pt,
			n = "";
		if (!t && e.b) n = e.b;
		else if (t === 1 && e.e) n = e.e;
		else {
			for (; i; )
				(n =
					i.p +
					(i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
					n),
					(i = i._next);
			n += e.c;
		}
		e.set(e.t, e.p, n, e);
	},
	Ha = function (t, e) {
		for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
	},
	Cd = function (t, e, i, n) {
		for (var s = this._pt, o; s; )
			(o = s._next), s.p === n && s.modifier(t, e, i), (s = o);
	},
	Pd = function (t) {
		for (var e = this._pt, i, n; e; )
			(n = e._next),
				(e.p === t && !e.op) || e.op === t
					? mo(this, e, "_pt")
					: e.dep || (i = 1),
				(e = n);
		return !i;
	},
	Ed = function (t, e, i, n) {
		n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
	},
	du = function (t) {
		for (var e = t._pt, i, n, s, o; e; ) {
			for (i = e._next, n = s; n && n.pr > e.pr; ) n = n._next;
			(e._prev = n ? n._prev : o) ? (e._prev._next = e) : (s = e),
				(e._next = n) ? (n._prev = e) : (o = e),
				(e = i);
		}
		t._pt = s;
	},
	Ve = (function () {
		function r(e, i, n, s, o, a, c, u, f) {
			(this.t = i),
				(this.s = s),
				(this.c = o),
				(this.p = n),
				(this.r = a || uu),
				(this.d = c || this),
				(this.set = u || qa),
				(this.pr = f || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = r.prototype;
		return (
			(t.modifier = function (i, n, s) {
				(this.mSet = this.mSet || this.set),
					(this.set = Ed),
					(this.m = i),
					(this.mt = s),
					(this.tween = n);
			}),
			r
		);
	})();
$e(
	Na +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (r) {
		return (Ra[r] = 1);
	},
);
ai.TweenMax = ai.TweenLite = re;
ai.TimelineLite = ai.TimelineMax = Re;
Vt = new Re({
	sortChildren: !1,
	defaults: dr,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
oi.stringFilter = eu;
var kn = [],
	Hs = {},
	kd = [],
	Dl = 0,
	Ad = 0,
	Ao = function (t) {
		return (Hs[t] || kd).map(function (e) {
			return e();
		});
	},
	aa = function () {
		var t = Date.now(),
			e = [];
		t - Dl > 2 &&
			(Ao("matchMediaInit"),
			kn.forEach(function (i) {
				var n = i.queries,
					s = i.conditions,
					o,
					a,
					c,
					u;
				for (a in n)
					(o = Pi.matchMedia(n[a]).matches),
						o && (c = 1),
						o !== s[a] && ((s[a] = o), (u = 1));
				u && (i.revert(), c && e.push(i));
			}),
			Ao("matchMediaRevert"),
			e.forEach(function (i) {
				return i.onMatch(i, function (n) {
					return i.add(null, n);
				});
			}),
			(Dl = t),
			Ao("matchMedia"));
	},
	hu = (function () {
		function r(e, i) {
			(this.selector = i && ra(i)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = Ad++),
				e && this.add(e);
		}
		var t = r.prototype;
		return (
			(t.add = function (i, n, s) {
				Qt(i) && ((s = n), (n = i), (i = Qt));
				var o = this,
					a = function () {
						var u = qt,
							f = o.selector,
							d;
						return (
							u && u !== o && u.data.push(o),
							s && (o.selector = ra(s)),
							(qt = o),
							(d = n.apply(o, arguments)),
							Qt(d) && o._r.push(d),
							(qt = u),
							(o.selector = f),
							(o.isReverted = !1),
							d
						);
					};
				return (
					(o.last = a),
					i === Qt
						? a(o, function (c) {
								return o.add(null, c);
							})
						: i
							? (o[i] = a)
							: a
				);
			}),
			(t.ignore = function (i) {
				var n = qt;
				(qt = null), i(this), (qt = n);
			}),
			(t.getTweens = function () {
				var i = [];
				return (
					this.data.forEach(function (n) {
						return n instanceof r
							? i.push.apply(i, n.getTweens())
							: n instanceof re &&
									!(n.parent && n.parent.data === "nested") &&
									i.push(n);
					}),
					i
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (i, n) {
				var s = this;
				if (
					(i
						? (function () {
								for (var a = s.getTweens(), c = s.data.length, u; c--; )
									(u = s.data[c]),
										u.data === "isFlip" &&
											(u.revert(),
											u.getChildren(!0, !0, !1).forEach(function (f) {
												return a.splice(a.indexOf(f), 1);
											}));
								for (
									a
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
											return f.t.revert(i);
										}),
										c = s.data.length;
									c--;

								)
									(u = s.data[c]),
										u instanceof Re
											? u.data !== "nested" &&
												(u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
											: !(u instanceof re) && u.revert && u.revert(i);
								s._r.forEach(function (f) {
									return f(i, s);
								}),
									(s.isReverted = !0);
							})()
						: this.data.forEach(function (a) {
								return a.kill && a.kill();
							}),
					this.clear(),
					n)
				)
					for (var o = kn.length; o--; )
						kn[o].id === this.id && kn.splice(o, 1);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			r
		);
	})(),
	Ld = (function () {
		function r(e) {
			(this.contexts = []), (this.scope = e), qt && qt.data.push(this);
		}
		var t = r.prototype;
		return (
			(t.add = function (i, n, s) {
				Fi(i) || (i = { matches: i });
				var o = new hu(0, s || this.scope),
					a = (o.conditions = {}),
					c,
					u,
					f;
				qt && !o.selector && (o.selector = qt.selector),
					this.contexts.push(o),
					(n = o.add("onMatch", n)),
					(o.queries = i);
				for (u in i)
					u === "all"
						? (f = 1)
						: ((c = Pi.matchMedia(i[u])),
							c &&
								(kn.indexOf(o) < 0 && kn.push(o),
								(a[u] = c.matches) && (f = 1),
								c.addListener
									? c.addListener(aa)
									: c.addEventListener("change", aa)));
				return (
					f &&
						n(o, function (d) {
							return o.add(null, d);
						}),
					this
				);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			(t.kill = function (i) {
				this.contexts.forEach(function (n) {
					return n.kill(i, !0);
				});
			}),
			r
		);
	})(),
	no = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
				e[i] = arguments[i];
			e.forEach(function (n) {
				return Zc(n);
			});
		},
		timeline: function (t) {
			return new Re(t);
		},
		getTweensOf: function (t, e) {
			return Vt.getTweensOf(t, e);
		},
		getProperty: function (t, e, i, n) {
			pe(t) && (t = pi(t)[0]);
			var s = Cn(t || {}).get,
				o = i ? Bc : zc;
			return (
				i === "native" && (i = ""),
				t &&
					(e
						? o(((ei[e] && ei[e].get) || s)(t, e, i, n))
						: function (a, c, u) {
								return o(((ei[a] && ei[a].get) || s)(t, a, c, u));
							})
			);
		},
		quickSetter: function (t, e, i) {
			if (((t = pi(t)), t.length > 1)) {
				var n = t.map(function (f) {
						return Ge.quickSetter(f, e, i);
					}),
					s = n.length;
				return function (f) {
					for (var d = s; d--; ) n[d](f);
				};
			}
			t = t[0] || {};
			var o = ei[e],
				a = Cn(t),
				c = (a.harness && (a.harness.aliases || {})[e]) || e,
				u = o
					? function (f) {
							var d = new o();
							(er._pt = 0),
								d.init(t, i ? f + i : f, er, 0, [t]),
								d.render(1, d),
								er._pt && Ha(1, er);
						}
					: a.set(t, c);
			return o
				? u
				: function (f) {
						return u(t, c, i ? f + i : f, a, 1);
					};
		},
		quickTo: function (t, e, i) {
			var n,
				s = Ge.to(
					t,
					Fn(((n = {}), (n[e] = "+=0.1"), (n.paused = !0), n), i || {}),
				),
				o = function (c, u, f) {
					return s.resetTo(e, c, u, f);
				};
			return (o.tween = s), o;
		},
		isTweening: function (t) {
			return Vt.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = En(t.ease, dr.ease)), bl(dr, t || {});
		},
		config: function (t) {
			return bl(oi, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				i = t.effect,
				n = t.plugins,
				s = t.defaults,
				o = t.extendTimeline;
			(n || "").split(",").forEach(function (a) {
				return (
					a && !ei[a] && !ai[a] && ns(e + " effect requires " + a + " plugin.")
				);
			}),
				(Co[e] = function (a, c, u) {
					return i(pi(a), _i(c || {}, s), u);
				}),
				o &&
					(Re.prototype[e] = function (a, c, u) {
						return this.add(Co[e](a, Fi(c) ? c : (u = c) && {}, this), u);
					});
		},
		registerEase: function (t, e) {
			St[t] = En(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? En(t, e) : St;
		},
		getById: function (t) {
			return Vt.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var i = new Re(t),
				n,
				s;
			for (
				i.smoothChildTiming = Xe(t.smoothChildTiming),
					Vt.remove(i),
					i._dp = 0,
					i._time = i._tTime = Vt._time,
					n = Vt._first;
				n;

			)
				(s = n._next),
					(e ||
						!(
							!n._dur &&
							n instanceof re &&
							n.vars.onComplete === n._targets[0]
						)) &&
						Ai(i, n, n._start - n._delay),
					(n = s);
			return Ai(Vt, i, 0), i;
		},
		context: function (t, e) {
			return t ? new hu(t, e) : qt;
		},
		matchMedia: function (t) {
			return new Ld(t);
		},
		matchMediaRefresh: function () {
			return (
				kn.forEach(function (t) {
					var e = t.conditions,
						i,
						n;
					for (n in e) e[n] && ((e[n] = !1), (i = 1));
					i && t.revert();
				}) || aa()
			);
		},
		addEventListener: function (t, e) {
			var i = Hs[t] || (Hs[t] = []);
			~i.indexOf(e) || i.push(e);
		},
		removeEventListener: function (t, e) {
			var i = Hs[t],
				n = i && i.indexOf(e);
			n >= 0 && i.splice(n, 1);
		},
		utils: {
			wrap: fd,
			wrapYoyo: dd,
			distribute: jc,
			random: Gc,
			snap: Wc,
			normalize: ud,
			getUnit: Oe,
			clamp: od,
			splitColor: Jc,
			toArray: pi,
			selector: ra,
			mapRange: Kc,
			pipe: ld,
			unitize: cd,
			interpolate: hd,
			shuffle: Vc,
		},
		install: Lc,
		effects: Co,
		ticker: ii,
		updateRoot: Re.updateRoot,
		plugins: ei,
		globalTimeline: Vt,
		core: {
			PropTween: Ve,
			globals: Ic,
			Tween: re,
			Timeline: Re,
			Animation: as,
			getCache: Cn,
			_removeLinkedListItem: mo,
			reverting: function () {
				return De;
			},
			context: function (t) {
				return t && qt && (qt.data.push(t), (t._ctx = qt)), qt;
			},
			suppressOverwrites: function (t) {
				return (Ea = t);
			},
		},
	};
$e("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
	return (no[r] = re[r]);
});
ii.add(Re.updateRoot);
er = no.to({}, { duration: 0 });
var Id = function (t, e) {
		for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
			i = i._next;
		return i;
	},
	Rd = function (t, e) {
		var i = t._targets,
			n,
			s,
			o;
		for (n in e)
			for (s = i.length; s--; )
				(o = t._ptLookup[s][n]),
					o &&
						(o = o.d) &&
						(o._pt && (o = Id(o, n)),
						o && o.modifier && o.modifier(e[n], t, i[s], n));
	},
	Lo = function (t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function (n, s, o) {
				o._onInit = function (a) {
					var c, u;
					if (
						(pe(s) &&
							((c = {}),
							$e(s, function (f) {
								return (c[f] = 1);
							}),
							(s = c)),
						e)
					) {
						c = {};
						for (u in s) c[u] = e(s[u]);
						s = c;
					}
					Rd(a, s);
				};
			},
		};
	},
	Ge =
		no.registerPlugin(
			{
				name: "attr",
				init: function (t, e, i, n, s) {
					var o, a, c;
					this.tween = i;
					for (o in e)
						(c = t.getAttribute(o) || ""),
							(a = this.add(
								t,
								"setAttribute",
								(c || 0) + "",
								e[o],
								n,
								s,
								0,
								0,
								o,
							)),
							(a.op = o),
							(a.b = c),
							this._props.push(o);
				},
				render: function (t, e) {
					for (var i = e._pt; i; )
						De ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
				},
			},
			{
				name: "endArray",
				init: function (t, e) {
					for (var i = e.length; i--; )
						this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
				},
			},
			Lo("roundProps", sa),
			Lo("modifiers"),
			Lo("snap", Wc),
		) || no;
re.version = Re.version = Ge.version = "3.12.5";
Ac = 1;
Aa() && gr();
St.Power0;
St.Power1;
St.Power2;
St.Power3;
St.Power4;
St.Linear;
St.Quad;
St.Cubic;
St.Quart;
St.Quint;
St.Strong;
St.Elastic;
St.Back;
St.SteppedEase;
St.Bounce;
St.Sine;
St.Expo;
St.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Cl,
	en,
	rr,
	Xa,
	On,
	Pl,
	$a,
	Nd = function () {
		return typeof window < "u";
	},
	Gi = {},
	bn = 180 / Math.PI,
	sr = Math.PI / 180,
	Wn = Math.atan2,
	El = 1e8,
	Va = /([A-Z])/g,
	Fd = /(left|right|width|margin|padding|x)/i,
	zd = /[\s,\(]\S/,
	Li = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	la = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Bd = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	qd = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e,
		);
	},
	Yd = function (t, e) {
		var i = e.s + e.c * t;
		e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	pu = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	gu = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	Hd = function (t, e, i) {
		return (t.style[e] = i);
	},
	Xd = function (t, e, i) {
		return t.style.setProperty(e, i);
	},
	$d = function (t, e, i) {
		return (t._gsap[e] = i);
	},
	Vd = function (t, e, i) {
		return (t._gsap.scaleX = t._gsap.scaleY = i);
	},
	jd = function (t, e, i, n, s) {
		var o = t._gsap;
		(o.scaleX = o.scaleY = i), o.renderTransform(s, o);
	},
	Wd = function (t, e, i, n, s) {
		var o = t._gsap;
		(o[e] = i), o.renderTransform(s, o);
	},
	jt = "transform",
	je = jt + "Origin",
	Gd = function r(t, e) {
		var i = this,
			n = this.target,
			s = n.style,
			o = n._gsap;
		if (t in Gi && s) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = Li[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (a) {
								return (i.tfm[a] = qi(n, a));
							})
						: (this.tfm[t] = o.x ? o[t] : qi(n, t)),
					t === je && (this.tfm.zOrigin = o.zOrigin);
			else
				return Li.transform.split(",").forEach(function (a) {
					return r.call(i, a, e);
				});
			if (this.props.indexOf(jt) >= 0) return;
			o.svg &&
				((this.svgo = n.getAttribute("data-svg-origin")),
				this.props.push(je, e, "")),
				(t = jt);
		}
		(s || e) && this.props.push(t, e, s[t]);
	},
	_u = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Ud = function () {
		var t = this.props,
			e = this.target,
			i = e.style,
			n = e._gsap,
			s,
			o;
		for (s = 0; s < t.length; s += 3)
			t[s + 1]
				? (e[t[s]] = t[s + 2])
				: t[s + 2]
					? (i[t[s]] = t[s + 2])
					: i.removeProperty(
							t[s].substr(0, 2) === "--"
								? t[s]
								: t[s].replace(Va, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (o in this.tfm) n[o] = this.tfm[o];
			n.svg &&
				(n.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(s = $a()),
				(!s || !s.isStart) &&
					!i[jt] &&
					(_u(i),
					n.zOrigin &&
						i[je] &&
						((i[je] += " " + n.zOrigin + "px"),
						(n.zOrigin = 0),
						n.renderTransform()),
					(n.uncache = 1));
		}
	},
	mu = function (t, e) {
		var i = { target: t, props: [], revert: Ud, save: Gd };
		return (
			t._gsap || Ge.core.getCache(t),
			e &&
				e.split(",").forEach(function (n) {
					return i.save(n);
				}),
			i
		);
	},
	yu,
	ca = function (t, e) {
		var i = en.createElementNS
			? en.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: en.createElement(t);
		return i && i.style ? i : en.createElement(t);
	},
	Ri = function r(t, e, i) {
		var n = getComputedStyle(t);
		return (
			n[e] ||
			n.getPropertyValue(e.replace(Va, "-$1").toLowerCase()) ||
			n.getPropertyValue(e) ||
			(!i && r(t, _r(e) || e, 1)) ||
			""
		);
	},
	kl = "O,Moz,ms,Ms,Webkit".split(","),
	_r = function (t, e, i) {
		var n = e || On,
			s = n.style,
			o = 5;
		if (t in s && !i) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			o-- && !(kl[o] + t in s);

		);
		return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? kl[o] : "") + t;
	},
	ua = function () {
		Nd() &&
			window.document &&
			((Cl = window),
			(en = Cl.document),
			(rr = en.documentElement),
			(On = ca("div") || { style: {} }),
			ca("div"),
			(jt = _r(jt)),
			(je = jt + "Origin"),
			(On.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(yu = !!_r("perspective")),
			($a = Ge.core.reverting),
			(Xa = 1));
	},
	Io = function r(t) {
		var e = ca(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			i = this.parentNode,
			n = this.nextSibling,
			s = this.style.cssText,
			o;
		if (
			(rr.appendChild(e),
			e.appendChild(this),
			(this.style.display = "block"),
			t)
		)
			try {
				(o = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = r);
			} catch {}
		else this._gsapBBox && (o = this._gsapBBox());
		return (
			i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
			rr.removeChild(e),
			(this.style.cssText = s),
			o
		);
	},
	Al = function (t, e) {
		for (var i = e.length; i--; )
			if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
	},
	vu = function (t) {
		var e;
		try {
			e = t.getBBox();
		} catch {
			e = Io.call(t, !0);
		}
		return (
			(e && (e.width || e.height)) || t.getBBox === Io || (e = Io.call(t, !0)),
			e && !e.width && !e.x && !e.y
				? {
						x: +Al(t, ["x", "cx", "x1"]) || 0,
						y: +Al(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	xu = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && vu(t));
	},
	zn = function (t, e) {
		if (e) {
			var i = t.style,
				n;
			e in Gi && e !== je && (e = jt),
				i.removeProperty
					? ((n = e.substr(0, 2)),
						(n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						i.removeProperty(
							n === "--" ? e : e.replace(Va, "-$1").toLowerCase(),
						))
					: i.removeAttribute(e);
		}
	},
	nn = function (t, e, i, n, s, o) {
		var a = new Ve(t._pt, e, i, 0, 1, o ? gu : pu);
		return (t._pt = a), (a.b = n), (a.e = s), t._props.push(i), a;
	},
	Ll = { deg: 1, rad: 1, turn: 1 },
	Kd = { grid: 1, flex: 1 },
	dn = function r(t, e, i, n) {
		var s = parseFloat(i) || 0,
			o = (i + "").trim().substr((s + "").length) || "px",
			a = On.style,
			c = Fd.test(e),
			u = t.tagName.toLowerCase() === "svg",
			f = (u ? "client" : "offset") + (c ? "Width" : "Height"),
			d = 100,
			p = n === "px",
			l = n === "%",
			g,
			h,
			m,
			_;
		if (n === o || !s || Ll[n] || Ll[o]) return s;
		if (
			(o !== "px" && !p && (s = r(t, e, i, "px")),
			(_ = t.getCTM && xu(t)),
			(l || o === "%") && (Gi[e] || ~e.indexOf("adius")))
		)
			return (
				(g = _ ? t.getBBox()[c ? "width" : "height"] : t[f]),
				te(l ? (s / g) * d : (s / 100) * g)
			);
		if (
			((a[c ? "width" : "height"] = d + (p ? o : n)),
			(h =
				~e.indexOf("adius") || (n === "em" && t.appendChild && !u)
					? t
					: t.parentNode),
			_ && (h = (t.ownerSVGElement || {}).parentNode),
			(!h || h === en || !h.appendChild) && (h = en.body),
			(m = h._gsap),
			m && l && m.width && c && m.time === ii.time && !m.uncache)
		)
			return te((s / m.width) * d);
		if (l && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = d + n), (g = t[f]), y ? (t.style[e] = y) : zn(t, e);
		} else
			(l || o === "%") &&
				!Kd[Ri(h, "display")] &&
				(a.position = Ri(t, "position")),
				h === t && (a.position = "static"),
				h.appendChild(On),
				(g = On[f]),
				h.removeChild(On),
				(a.position = "absolute");
		return (
			c && l && ((m = Cn(h)), (m.time = ii.time), (m.width = h[f])),
			te(p ? (g * s) / d : g && s ? (d / g) * s : 0)
		);
	},
	qi = function (t, e, i, n) {
		var s;
		return (
			Xa || ua(),
			e in Li &&
				e !== "transform" &&
				((e = Li[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			Gi[e] && e !== "transform"
				? ((s = cs(t, n)),
					(s =
						e !== "transformOrigin"
							? s[e]
							: s.svg
								? s.origin
								: so(Ri(t, je)) + " " + s.zOrigin + "px"))
				: ((s = t.style[e]),
					(!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
						(s =
							(ro[e] && ro[e](t, e, i)) ||
							Ri(t, e) ||
							Nc(t, e) ||
							(e === "opacity" ? 1 : 0))),
			i && !~(s + "").trim().indexOf(" ") ? dn(t, e, s, i) + i : s
		);
	},
	Qd = function (t, e, i, n) {
		if (!i || i === "none") {
			var s = _r(e, t, 1),
				o = s && Ri(t, s, 1);
			o && o !== i
				? ((e = s), (i = o))
				: e === "borderColor" && (i = Ri(t, "borderTopColor"));
		}
		var a = new Ve(this._pt, t.style, e, 0, 1, fu),
			c = 0,
			u = 0,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b;
		if (
			((a.b = i),
			(a.e = n),
			(i += ""),
			(n += ""),
			n === "auto" &&
				((h = t.style[e]),
				(t.style[e] = n),
				(n = Ri(t, e) || n),
				h ? (t.style[e] = h) : zn(t, e)),
			(f = [i, n]),
			eu(f),
			(i = f[0]),
			(n = f[1]),
			(p = i.match(tr) || []),
			(b = n.match(tr) || []),
			b.length)
		) {
			for (; (d = tr.exec(n)); )
				(m = d[0]),
					(y = n.substring(c, d.index)),
					g
						? (g = (g + 1) % 5)
						: (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
					m !== (h = p[u++] || "") &&
						((l = parseFloat(h) || 0),
						(x = h.substr((l + "").length)),
						m.charAt(1) === "=" && (m = nr(l, m) + x),
						(_ = parseFloat(m)),
						(S = m.substr((_ + "").length)),
						(c = tr.lastIndex - S.length),
						S ||
							((S = S || oi.units[e] || x),
							c === n.length && ((n += S), (a.e += S))),
						x !== S && (l = dn(t, e, h, S) || 0),
						(a._pt = {
							_next: a._pt,
							p: y || u === 1 ? y : ",",
							s: l,
							c: _ - l,
							m: (g && g < 4) || e === "zIndex" ? Math.round : 0,
						}));
			a.c = c < n.length ? n.substring(c, n.length) : "";
		} else a.r = e === "display" && n === "none" ? gu : pu;
		return Ec.test(n) && (a.e = 0), (this._pt = a), a;
	},
	Il = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Zd = function (t) {
		var e = t.split(" "),
			i = e[0],
			n = e[1] || "50%";
		return (
			(i === "top" || i === "bottom" || n === "left" || n === "right") &&
				((t = i), (i = n), (n = t)),
			(e[0] = Il[i] || i),
			(e[1] = Il[n] || n),
			e.join(" ")
		);
	},
	Jd = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var i = e.t,
				n = i.style,
				s = e.u,
				o = i._gsap,
				a,
				c,
				u;
			if (s === "all" || s === !0) (n.cssText = ""), (c = 1);
			else
				for (s = s.split(","), u = s.length; --u > -1; )
					(a = s[u]),
						Gi[a] && ((c = 1), (a = a === "transformOrigin" ? je : jt)),
						zn(i, a);
			c &&
				(zn(i, jt),
				o &&
					(o.svg && i.removeAttribute("transform"),
					cs(i, 1),
					(o.uncache = 1),
					_u(n)));
		}
	},
	ro = {
		clearProps: function (t, e, i, n, s) {
			if (s.data !== "isFromStart") {
				var o = (t._pt = new Ve(t._pt, e, i, 0, 0, Jd));
				return (o.u = n), (o.pr = -10), (o.tween = s), t._props.push(i), 1;
			}
		},
	},
	ls = [1, 0, 0, 1, 0, 0],
	wu = {},
	bu = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	Rl = function (t) {
		var e = Ri(t, jt);
		return bu(e) ? ls : e.substr(7).match(Pc).map(te);
	},
	ja = function (t, e) {
		var i = t._gsap || Cn(t),
			n = t.style,
			s = Rl(t),
			o,
			a,
			c,
			u;
		return i.svg && t.getAttribute("transform")
			? ((c = t.transform.baseVal.consolidate().matrix),
				(s = [c.a, c.b, c.c, c.d, c.e, c.f]),
				s.join(",") === "1,0,0,1,0,0" ? ls : s)
			: (s === ls &&
					!t.offsetParent &&
					t !== rr &&
					!i.svg &&
					((c = n.display),
					(n.display = "block"),
					(o = t.parentNode),
					(!o || !t.offsetParent) &&
						((u = 1), (a = t.nextElementSibling), rr.appendChild(t)),
					(s = Rl(t)),
					c ? (n.display = c) : zn(t, "display"),
					u &&
						(a
							? o.insertBefore(t, a)
							: o
								? o.appendChild(t)
								: rr.removeChild(t))),
				e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
	},
	fa = function (t, e, i, n, s, o) {
		var a = t._gsap,
			c = s || ja(t, !0),
			u = a.xOrigin || 0,
			f = a.yOrigin || 0,
			d = a.xOffset || 0,
			p = a.yOffset || 0,
			l = c[0],
			g = c[1],
			h = c[2],
			m = c[3],
			_ = c[4],
			y = c[5],
			S = e.split(" "),
			x = parseFloat(S[0]) || 0,
			b = parseFloat(S[1]) || 0,
			P,
			M,
			D,
			E;
		i
			? c !== ls &&
				(M = l * m - g * h) &&
				((D = x * (m / M) + b * (-h / M) + (h * y - m * _) / M),
				(E = x * (-g / M) + b * (l / M) - (l * y - g * _) / M),
				(x = D),
				(b = E))
			: ((P = vu(t)),
				(x = P.x + (~S[0].indexOf("%") ? (x / 100) * P.width : x)),
				(b = P.y + (~(S[1] || S[0]).indexOf("%") ? (b / 100) * P.height : b))),
			n || (n !== !1 && a.smooth)
				? ((_ = x - u),
					(y = b - f),
					(a.xOffset = d + (_ * l + y * h) - _),
					(a.yOffset = p + (_ * g + y * m) - y))
				: (a.xOffset = a.yOffset = 0),
			(a.xOrigin = x),
			(a.yOrigin = b),
			(a.smooth = !!n),
			(a.origin = e),
			(a.originIsAbsolute = !!i),
			(t.style[je] = "0px 0px"),
			o &&
				(nn(o, a, "xOrigin", u, x),
				nn(o, a, "yOrigin", f, b),
				nn(o, a, "xOffset", d, a.xOffset),
				nn(o, a, "yOffset", p, a.yOffset)),
			t.setAttribute("data-svg-origin", x + " " + b);
	},
	cs = function (t, e) {
		var i = t._gsap || new su(t);
		if ("x" in i && !e && !i.uncache) return i;
		var n = t.style,
			s = i.scaleX < 0,
			o = "px",
			a = "deg",
			c = getComputedStyle(t),
			u = Ri(t, je) || "0",
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b,
			P,
			M,
			D,
			E,
			L,
			F,
			O,
			R,
			Y,
			H,
			j,
			X,
			tt,
			gt,
			T,
			nt,
			ut,
			I,
			N,
			G;
		return (
			(f = d = p = h = m = _ = y = S = x = 0),
			(l = g = 1),
			(i.svg = !!(t.getCTM && xu(t))),
			c.translate &&
				((c.translate !== "none" ||
					c.scale !== "none" ||
					c.rotate !== "none") &&
					(n[jt] =
						(c.translate !== "none"
							? "translate3d(" +
								(c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
						(c.scale !== "none"
							? "scale(" + c.scale.split(" ").join(",") + ") "
							: "") +
						(c[jt] !== "none" ? c[jt] : "")),
				(n.scale = n.rotate = n.translate = "none")),
			(M = ja(t, i.svg)),
			i.svg &&
				(i.uncache
					? ((tt = t.getBBox()),
						(u = i.xOrigin - tt.x + "px " + (i.yOrigin - tt.y) + "px"),
						(X = ""))
					: (X = !e && t.getAttribute("data-svg-origin")),
				fa(t, X || u, !!X || i.originIsAbsolute, i.smooth !== !1, M)),
			(b = i.xOrigin || 0),
			(P = i.yOrigin || 0),
			M !== ls &&
				((F = M[0]),
				(O = M[1]),
				(R = M[2]),
				(Y = M[3]),
				(f = H = M[4]),
				(d = j = M[5]),
				M.length === 6
					? ((l = Math.sqrt(F * F + O * O)),
						(g = Math.sqrt(Y * Y + R * R)),
						(h = F || O ? Wn(O, F) * bn : 0),
						(y = R || Y ? Wn(R, Y) * bn + h : 0),
						y && (g *= Math.abs(Math.cos(y * sr))),
						i.svg && ((f -= b - (b * F + P * R)), (d -= P - (b * O + P * Y))))
					: ((G = M[6]),
						(I = M[7]),
						(T = M[8]),
						(nt = M[9]),
						(ut = M[10]),
						(N = M[11]),
						(f = M[12]),
						(d = M[13]),
						(p = M[14]),
						(D = Wn(G, ut)),
						(m = D * bn),
						D &&
							((E = Math.cos(-D)),
							(L = Math.sin(-D)),
							(X = H * E + T * L),
							(tt = j * E + nt * L),
							(gt = G * E + ut * L),
							(T = H * -L + T * E),
							(nt = j * -L + nt * E),
							(ut = G * -L + ut * E),
							(N = I * -L + N * E),
							(H = X),
							(j = tt),
							(G = gt)),
						(D = Wn(-R, ut)),
						(_ = D * bn),
						D &&
							((E = Math.cos(-D)),
							(L = Math.sin(-D)),
							(X = F * E - T * L),
							(tt = O * E - nt * L),
							(gt = R * E - ut * L),
							(N = Y * L + N * E),
							(F = X),
							(O = tt),
							(R = gt)),
						(D = Wn(O, F)),
						(h = D * bn),
						D &&
							((E = Math.cos(D)),
							(L = Math.sin(D)),
							(X = F * E + O * L),
							(tt = H * E + j * L),
							(O = O * E - F * L),
							(j = j * E - H * L),
							(F = X),
							(H = tt)),
						m &&
							Math.abs(m) + Math.abs(h) > 359.9 &&
							((m = h = 0), (_ = 180 - _)),
						(l = te(Math.sqrt(F * F + O * O + R * R))),
						(g = te(Math.sqrt(j * j + G * G))),
						(D = Wn(H, j)),
						(y = Math.abs(D) > 2e-4 ? D * bn : 0),
						(x = N ? 1 / (N < 0 ? -N : N) : 0)),
				i.svg &&
					((X = t.getAttribute("transform")),
					(i.forceCSS = t.setAttribute("transform", "") || !bu(Ri(t, jt))),
					X && t.setAttribute("transform", X))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(s
					? ((l *= -1), (y += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
					: ((g *= -1), (y += y <= 0 ? 180 : -180))),
			(e = e || i.uncache),
			(i.x =
				f -
				((i.xPercent =
					f &&
					((!e && i.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
					? (t.offsetWidth * i.xPercent) / 100
					: 0) +
				o),
			(i.y =
				d -
				((i.yPercent =
					d &&
					((!e && i.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (t.offsetHeight * i.yPercent) / 100
					: 0) +
				o),
			(i.z = p + o),
			(i.scaleX = te(l)),
			(i.scaleY = te(g)),
			(i.rotation = te(h) + a),
			(i.rotationX = te(m) + a),
			(i.rotationY = te(_) + a),
			(i.skewX = y + a),
			(i.skewY = S + a),
			(i.transformPerspective = x + o),
			(i.zOrigin = parseFloat(u.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
				(n[je] = so(u)),
			(i.xOffset = i.yOffset = 0),
			(i.force3D = oi.force3D),
			(i.renderTransform = i.svg ? eh : yu ? Tu : th),
			(i.uncache = 0),
			i
		);
	},
	so = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	Ro = function (t, e, i) {
		var n = Oe(e);
		return te(parseFloat(e) + parseFloat(dn(t, "x", i + "px", n))) + n;
	},
	th = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			Tu(t, e);
	},
	yn = "0deg",
	Mr = "0px",
	vn = ") ",
	Tu = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			s = i.yPercent,
			o = i.x,
			a = i.y,
			c = i.z,
			u = i.rotation,
			f = i.rotationY,
			d = i.rotationX,
			p = i.skewX,
			l = i.skewY,
			g = i.scaleX,
			h = i.scaleY,
			m = i.transformPerspective,
			_ = i.force3D,
			y = i.target,
			S = i.zOrigin,
			x = "",
			b = (_ === "auto" && t && t !== 1) || _ === !0;
		if (S && (d !== yn || f !== yn)) {
			var P = parseFloat(f) * sr,
				M = Math.sin(P),
				D = Math.cos(P),
				E;
			(P = parseFloat(d) * sr),
				(E = Math.cos(P)),
				(o = Ro(y, o, M * E * -S)),
				(a = Ro(y, a, -Math.sin(P) * -S)),
				(c = Ro(y, c, D * E * -S + S));
		}
		m !== Mr && (x += "perspective(" + m + vn),
			(n || s) && (x += "translate(" + n + "%, " + s + "%) "),
			(b || o !== Mr || a !== Mr || c !== Mr) &&
				(x +=
					c !== Mr || b
						? "translate3d(" + o + ", " + a + ", " + c + ") "
						: "translate(" + o + ", " + a + vn),
			u !== yn && (x += "rotate(" + u + vn),
			f !== yn && (x += "rotateY(" + f + vn),
			d !== yn && (x += "rotateX(" + d + vn),
			(p !== yn || l !== yn) && (x += "skew(" + p + ", " + l + vn),
			(g !== 1 || h !== 1) && (x += "scale(" + g + ", " + h + vn),
			(y.style[jt] = x || "translate(0, 0)");
	},
	eh = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			s = i.yPercent,
			o = i.x,
			a = i.y,
			c = i.rotation,
			u = i.skewX,
			f = i.skewY,
			d = i.scaleX,
			p = i.scaleY,
			l = i.target,
			g = i.xOrigin,
			h = i.yOrigin,
			m = i.xOffset,
			_ = i.yOffset,
			y = i.forceCSS,
			S = parseFloat(o),
			x = parseFloat(a),
			b,
			P,
			M,
			D,
			E;
		(c = parseFloat(c)),
			(u = parseFloat(u)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (u += f), (c += f)),
			c || u
				? ((c *= sr),
					(u *= sr),
					(b = Math.cos(c) * d),
					(P = Math.sin(c) * d),
					(M = Math.sin(c - u) * -p),
					(D = Math.cos(c - u) * p),
					u &&
						((f *= sr),
						(E = Math.tan(u - f)),
						(E = Math.sqrt(1 + E * E)),
						(M *= E),
						(D *= E),
						f &&
							((E = Math.tan(f)),
							(E = Math.sqrt(1 + E * E)),
							(b *= E),
							(P *= E))),
					(b = te(b)),
					(P = te(P)),
					(M = te(M)),
					(D = te(D)))
				: ((b = d), (D = p), (P = M = 0)),
			((S && !~(o + "").indexOf("px")) || (x && !~(a + "").indexOf("px"))) &&
				((S = dn(l, "x", o, "px")), (x = dn(l, "y", a, "px"))),
			(g || h || m || _) &&
				((S = te(S + g - (g * b + h * M) + m)),
				(x = te(x + h - (g * P + h * D) + _))),
			(n || s) &&
				((E = l.getBBox()),
				(S = te(S + (n / 100) * E.width)),
				(x = te(x + (s / 100) * E.height))),
			(E =
				"matrix(" + b + "," + P + "," + M + "," + D + "," + S + "," + x + ")"),
			l.setAttribute("transform", E),
			y && (l.style[jt] = E);
	},
	ih = function (t, e, i, n, s) {
		var o = 360,
			a = pe(s),
			c = parseFloat(s) * (a && ~s.indexOf("rad") ? bn : 1),
			u = c - n,
			f = n + u + "deg",
			d,
			p;
		return (
			a &&
				((d = s.split("_")[1]),
				d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
				d === "cw" && u < 0
					? (u = ((u + o * El) % o) - ~~(u / o) * o)
					: d === "ccw" && u > 0 && (u = ((u - o * El) % o) - ~~(u / o) * o)),
			(t._pt = p = new Ve(t._pt, e, i, n, u, Bd)),
			(p.e = f),
			(p.u = "deg"),
			t._props.push(i),
			p
		);
	},
	Nl = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	nh = function (t, e, i) {
		var n = Nl({}, i._gsap),
			s = "perspective,force3D,transformOrigin,svgOrigin",
			o = i.style,
			a,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		n.svg
			? ((u = i.getAttribute("transform")),
				i.setAttribute("transform", ""),
				(o[jt] = e),
				(a = cs(i, 1)),
				zn(i, jt),
				i.setAttribute("transform", u))
			: ((u = getComputedStyle(i)[jt]),
				(o[jt] = e),
				(a = cs(i, 1)),
				(o[jt] = u));
		for (c in Gi)
			(u = n[c]),
				(f = a[c]),
				u !== f &&
					s.indexOf(c) < 0 &&
					((l = Oe(u)),
					(g = Oe(f)),
					(d = l !== g ? dn(i, c, u, g) : parseFloat(u)),
					(p = parseFloat(f)),
					(t._pt = new Ve(t._pt, a, c, d, p - d, la)),
					(t._pt.u = g || 0),
					t._props.push(c));
		Nl(a, n);
	};
$e("padding,margin,Width,Radius", function (r, t) {
	var e = "Top",
		i = "Right",
		n = "Bottom",
		s = "Left",
		o = (t < 3 ? [e, i, n, s] : [e + s, e + i, n + i, n + s]).map(function (a) {
			return t < 2 ? r + a : "border" + a + r;
		});
	ro[t > 1 ? "border" + r : r] = function (a, c, u, f, d) {
		var p, l;
		if (arguments.length < 4)
			return (
				(p = o.map(function (g) {
					return qi(a, g, u);
				})),
				(l = p.join(" ")),
				l.split(p[0]).length === 5 ? p[0] : l
			);
		(p = (f + "").split(" ")),
			(l = {}),
			o.forEach(function (g, h) {
				return (l[g] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
			}),
			a.init(c, l, d);
	};
});
var Su = {
	name: "css",
	register: ua,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, i, n, s) {
		var o = this._props,
			a = t.style,
			c = i.vars.startAt,
			u,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_,
			y,
			S,
			x,
			b,
			P,
			M,
			D;
		Xa || ua(),
			(this.styles = this.styles || mu(t)),
			(D = this.styles.props),
			(this.tween = i);
		for (h in e)
			if (h !== "autoRound" && ((f = e[h]), !(ei[h] && ou(h, e, i, n, t, s)))) {
				if (
					((l = typeof f),
					(g = ro[h]),
					l === "function" && ((f = f.call(i, n, t, s)), (l = typeof f)),
					l === "string" && ~f.indexOf("random(") && (f = ss(f)),
					g)
				)
					g(this, t, h, f, i) && (M = 1);
				else if (h.substr(0, 2) === "--")
					(u = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
						(f += ""),
						(ln.lastIndex = 0),
						ln.test(u) || ((m = Oe(u)), (_ = Oe(f))),
						_ ? m !== _ && (u = dn(t, h, u, _) + _) : m && (f += m),
						this.add(a, "setProperty", u, f, n, s, 0, 0, h),
						o.push(h),
						D.push(h, 0, a[h]);
				else if (l !== "undefined") {
					if (
						(c && h in c
							? ((u = typeof c[h] == "function" ? c[h].call(i, n, t, s) : c[h]),
								pe(u) && ~u.indexOf("random(") && (u = ss(u)),
								Oe(u + "") ||
									u === "auto" ||
									(u += oi.units[h] || Oe(qi(t, h)) || ""),
								(u + "").charAt(1) === "=" && (u = qi(t, h)))
							: (u = qi(t, h)),
						(p = parseFloat(u)),
						(y = l === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
						y && (f = f.substr(2)),
						(d = parseFloat(f)),
						h in Li &&
							(h === "autoAlpha" &&
								(p === 1 && qi(t, "visibility") === "hidden" && d && (p = 0),
								D.push("visibility", 0, a.visibility),
								nn(
									this,
									a,
									"visibility",
									p ? "inherit" : "hidden",
									d ? "inherit" : "hidden",
									!d,
								)),
							h !== "scale" &&
								h !== "transform" &&
								((h = Li[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
						(S = h in Gi),
						S)
					) {
						if (
							(this.styles.save(h),
							x ||
								((b = t._gsap),
								(b.renderTransform && !e.parseTransform) ||
									cs(t, e.parseTransform),
								(P = e.smoothOrigin !== !1 && b.smooth),
								(x = this._pt =
									new Ve(this._pt, a, jt, 0, 1, b.renderTransform, b, 0, -1)),
								(x.dep = 1)),
							h === "scale")
						)
							(this._pt = new Ve(
								this._pt,
								b,
								"scaleY",
								b.scaleY,
								(y ? nr(b.scaleY, y + d) : d) - b.scaleY || 0,
								la,
							)),
								(this._pt.u = 0),
								o.push("scaleY", h),
								(h += "X");
						else if (h === "transformOrigin") {
							D.push(je, 0, a[je]),
								(f = Zd(f)),
								b.svg
									? fa(t, f, 0, P, 0, this)
									: ((_ = parseFloat(f.split(" ")[2]) || 0),
										_ !== b.zOrigin && nn(this, b, "zOrigin", b.zOrigin, _),
										nn(this, a, h, so(u), so(f)));
							continue;
						} else if (h === "svgOrigin") {
							fa(t, f, 1, P, 0, this);
							continue;
						} else if (h in wu) {
							ih(this, b, h, p, y ? nr(p, y + f) : f);
							continue;
						} else if (h === "smoothOrigin") {
							nn(this, b, "smooth", b.smooth, f);
							continue;
						} else if (h === "force3D") {
							b[h] = f;
							continue;
						} else if (h === "transform") {
							nh(this, f, t);
							continue;
						}
					} else h in a || (h = _r(h) || h);
					if (S || ((d || d === 0) && (p || p === 0) && !zd.test(f) && h in a))
						(m = (u + "").substr((p + "").length)),
							d || (d = 0),
							(_ = Oe(f) || (h in oi.units ? oi.units[h] : m)),
							m !== _ && (p = dn(t, h, u, _)),
							(this._pt = new Ve(
								this._pt,
								S ? b : a,
								h,
								p,
								(y ? nr(p, y + d) : d) - p,
								!S && (_ === "px" || h === "zIndex") && e.autoRound !== !1
									? Yd
									: la,
							)),
							(this._pt.u = _ || 0),
							m !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = qd));
					else if (h in a) Qd.call(this, t, h, u, y ? y + f : f);
					else if (h in t) this.add(t, h, u || t[h], y ? y + f : f, n, s);
					else if (h !== "parseTransform") {
						Ia(h, f);
						continue;
					}
					S || (h in a ? D.push(h, 0, a[h]) : D.push(h, 1, u || t[h])),
						o.push(h);
				}
			}
		M && du(this);
	},
	render: function (t, e) {
		if (e.tween._time || !$a())
			for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
		else e.styles.revert();
	},
	get: qi,
	aliases: Li,
	getSetter: function (t, e, i) {
		var n = Li[e];
		return (
			n && n.indexOf(",") < 0 && (e = n),
			e in Gi && e !== je && (t._gsap.x || qi(t, "x"))
				? i && Pl === i
					? e === "scale"
						? Vd
						: $d
					: (Pl = i || {}) && (e === "scale" ? jd : Wd)
				: t.style && !ka(t.style[e])
					? Hd
					: ~e.indexOf("-")
						? Xd
						: Ya(t, e)
		);
	},
	core: { _removeProperty: zn, _getMatrix: ja },
};
Ge.utils.checkPrefix = _r;
Ge.core.getStyleSaver = mu;
(function (r, t, e, i) {
	var n = $e(r + "," + t + "," + e, function (s) {
		Gi[s] = 1;
	});
	$e(t, function (s) {
		(oi.units[s] = "deg"), (wu[s] = 1);
	}),
		(Li[n[13]] = r + "," + t),
		$e(i, function (s) {
			var o = s.split(":");
			Li[o[1]] = n[o[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
$e(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (r) {
		oi.units[r] = "px";
	},
);
Ge.registerPlugin(Su);
var $ = Ge.registerPlugin(Su) || Ge;
$.core.Tween;
function Fl(r, t) {
	for (var e = 0; e < t.length; e++) {
		var i = t[e];
		(i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			"value" in i && (i.writable = !0),
			Object.defineProperty(r, i.key, i);
	}
}
function rh(r, t, e) {
	return t && Fl(r.prototype, t), e && Fl(r, e), r;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ve,
	Xs,
	ni,
	rn,
	sn,
	or,
	Mu,
	Tn,
	$r,
	Ou,
	Xi,
	yi,
	Du,
	Cu = function () {
		return (
			ve ||
			(typeof window < "u" && (ve = window.gsap) && ve.registerPlugin && ve)
		);
	},
	Pu = 1,
	ir = [],
	xt = [],
	Ni = [],
	Vr = Date.now,
	da = function (t, e) {
		return e;
	},
	sh = function () {
		var t = $r.core,
			e = t.bridge || {},
			i = t._scrollers,
			n = t._proxies;
		i.push.apply(i, xt),
			n.push.apply(n, Ni),
			(xt = i),
			(Ni = n),
			(da = function (o, a) {
				return e[o](a);
			});
	},
	cn = function (t, e) {
		return ~Ni.indexOf(t) && Ni[Ni.indexOf(t) + 1][e];
	},
	jr = function (t) {
		return !!~Ou.indexOf(t);
	},
	ke = function (t, e, i, n, s) {
		return t.addEventListener(e, i, { passive: n !== !1, capture: !!s });
	},
	Ee = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	Os = "scrollLeft",
	Ds = "scrollTop",
	ha = function () {
		return (Xi && Xi.isPressed) || xt.cache++;
	},
	oo = function (t, e) {
		var i = function n(s) {
			if (s || s === 0) {
				Pu && (ni.history.scrollRestoration = "manual");
				var o = Xi && Xi.isPressed;
				(s = n.v = Math.round(s) || (Xi && Xi.iOS ? 1 : 0)),
					t(s),
					(n.cacheID = xt.cache),
					o && da("ss", s);
			} else
				(e || xt.cache !== n.cacheID || da("ref")) &&
					((n.cacheID = xt.cache), (n.v = t()));
			return n.v + n.offset;
		};
		return (i.offset = 0), t && i;
	},
	Ne = {
		s: Os,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: oo(function (r) {
			return arguments.length
				? ni.scrollTo(r, ce.sc())
				: ni.pageXOffset || rn[Os] || sn[Os] || or[Os] || 0;
		}),
	},
	ce = {
		s: Ds,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Ne,
		sc: oo(function (r) {
			return arguments.length
				? ni.scrollTo(Ne.sc(), r)
				: ni.pageYOffset || rn[Ds] || sn[Ds] || or[Ds] || 0;
		}),
	},
	Ye = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || ve.utils.toArray)(t)[0] ||
			(typeof t == "string" && ve.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	hn = function (t, e) {
		var i = e.s,
			n = e.sc;
		jr(t) && (t = rn.scrollingElement || sn);
		var s = xt.indexOf(t),
			o = n === ce.sc ? 1 : 2;
		!~s && (s = xt.push(t) - 1), xt[s + o] || ke(t, "scroll", ha);
		var a = xt[s + o],
			c =
				a ||
				(xt[s + o] =
					oo(cn(t, i), !0) ||
					(jr(t)
						? n
						: oo(function (u) {
								return arguments.length ? (t[i] = u) : t[i];
							})));
		return (
			(c.target = t),
			a || (c.smooth = ve.getProperty(t, "scrollBehavior") === "smooth"),
			c
		);
	},
	pa = function (t, e, i) {
		var n = t,
			s = t,
			o = Vr(),
			a = o,
			c = e || 50,
			u = Math.max(500, c * 3),
			f = function (g, h) {
				var m = Vr();
				h || m - o > c
					? ((s = n), (n = g), (a = o), (o = m))
					: i
						? (n += g)
						: (n = s + ((g - s) / (m - a)) * (o - a));
			},
			d = function () {
				(s = n = i ? 0 : n), (a = o = 0);
			},
			p = function (g) {
				var h = a,
					m = s,
					_ = Vr();
				return (
					(g || g === 0) && g !== n && f(g),
					o === a || _ - a > u
						? 0
						: ((n + (i ? m : -m)) / ((i ? _ : o) - h)) * 1e3
				);
			};
		return { update: f, reset: d, getVelocity: p };
	},
	Or = function (t, e) {
		return (
			e && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	zl = function (t) {
		var e = Math.max.apply(Math, t),
			i = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(i) ? e : i;
	},
	Eu = function () {
		($r = ve.core.globals().ScrollTrigger), $r && $r.core && sh();
	},
	ku = function (t) {
		return (
			(ve = t || Cu()),
			!Xs &&
				ve &&
				typeof document < "u" &&
				document.body &&
				((ni = window),
				(rn = document),
				(sn = rn.documentElement),
				(or = rn.body),
				(Ou = [ni, rn, sn, or]),
				ve.utils.clamp,
				(Du = ve.core.context || function () {}),
				(Tn = "onpointerenter" in or ? "pointer" : "mouse"),
				(Mu = ee.isTouch =
					ni.matchMedia &&
					ni.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in ni ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(yi = ee.eventTypes =
					(
						"ontouchstart" in sn
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in sn
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (Pu = 0);
				}, 500),
				Eu(),
				(Xs = 1)),
			Xs
		);
	};
Ne.op = ce;
xt.cache = 0;
var ee = (function () {
	function r(e) {
		this.init(e);
	}
	var t = r.prototype;
	return (
		(t.init = function (i) {
			Xs || ku(ve) || console.warn("Please gsap.registerPlugin(Observer)"),
				$r || Eu();
			var n = i.tolerance,
				s = i.dragMinimum,
				o = i.type,
				a = i.target,
				c = i.lineHeight,
				u = i.debounce,
				f = i.preventDefault,
				d = i.onStop,
				p = i.onStopDelay,
				l = i.ignore,
				g = i.wheelSpeed,
				h = i.event,
				m = i.onDragStart,
				_ = i.onDragEnd,
				y = i.onDrag,
				S = i.onPress,
				x = i.onRelease,
				b = i.onRight,
				P = i.onLeft,
				M = i.onUp,
				D = i.onDown,
				E = i.onChangeX,
				L = i.onChangeY,
				F = i.onChange,
				O = i.onToggleX,
				R = i.onToggleY,
				Y = i.onHover,
				H = i.onHoverEnd,
				j = i.onMove,
				X = i.ignoreCheck,
				tt = i.isNormalizer,
				gt = i.onGestureStart,
				T = i.onGestureEnd,
				nt = i.onWheel,
				ut = i.onEnable,
				I = i.onDisable,
				N = i.onClick,
				G = i.scrollSpeed,
				J = i.capture,
				U = i.allowClicks,
				K = i.lockAxis,
				lt = i.onLockAxis;
			(this.target = a = Ye(a) || sn),
				(this.vars = i),
				l && (l = ve.utils.toArray(l)),
				(n = n || 1e-9),
				(s = s || 0),
				(g = g || 1),
				(G = G || 1),
				(o = o || "wheel,touch,pointer"),
				(u = u !== !1),
				c || (c = parseFloat(ni.getComputedStyle(or).lineHeight) || 22);
			var ft,
				et,
				W,
				Z,
				ot,
				st,
				Et,
				C = this,
				Mt = 0,
				Ht = 0,
				ue = i.passive || !f,
				kt = hn(a, Ne),
				Rt = hn(a, ce),
				Ue = kt(),
				ze = Rt(),
				Xt =
					~o.indexOf("touch") &&
					!~o.indexOf("pointer") &&
					yi[0] === "pointerdown",
				Wt = jr(a),
				Ct = a.ownerDocument || rn,
				se = [0, 0, 0],
				Gt = [0, 0, 0],
				ge = 0,
				mi = function () {
					return (ge = Vr());
				},
				At = function (k, B) {
					return (
						((C.event = k) && l && ~l.indexOf(k.target)) ||
						(B && Xt && k.pointerType !== "touch") ||
						(X && X(k, B))
					);
				},
				Mi = function () {
					C._vx.reset(), C._vy.reset(), et.pause(), d && d(C);
				},
				Ke = function () {
					var k = (C.deltaX = zl(se)),
						B = (C.deltaY = zl(Gt)),
						A = Math.abs(k) >= n,
						V = Math.abs(B) >= n;
					F && (A || V) && F(C, k, B, se, Gt),
						A &&
							(b && C.deltaX > 0 && b(C),
							P && C.deltaX < 0 && P(C),
							E && E(C),
							O && C.deltaX < 0 != Mt < 0 && O(C),
							(Mt = C.deltaX),
							(se[0] = se[1] = se[2] = 0)),
						V &&
							(D && C.deltaY > 0 && D(C),
							M && C.deltaY < 0 && M(C),
							L && L(C),
							R && C.deltaY < 0 != Ht < 0 && R(C),
							(Ht = C.deltaY),
							(Gt[0] = Gt[1] = Gt[2] = 0)),
						(Z || W) && (j && j(C), W && (y(C), (W = !1)), (Z = !1)),
						st && !(st = !1) && lt && lt(C),
						ot && (nt(C), (ot = !1)),
						(ft = 0);
				},
				Qe = function (k, B, A) {
					(se[A] += k),
						(Gt[A] += B),
						C._vx.update(k),
						C._vy.update(B),
						u ? ft || (ft = requestAnimationFrame(Ke)) : Ke();
				},
				Be = function (k, B) {
					K &&
						!Et &&
						((C.axis = Et = Math.abs(k) > Math.abs(B) ? "x" : "y"), (st = !0)),
						Et !== "y" && ((se[2] += k), C._vx.update(k, !0)),
						Et !== "x" && ((Gt[2] += B), C._vy.update(B, !0)),
						u ? ft || (ft = requestAnimationFrame(Ke)) : Ke();
				},
				Ze = function (k) {
					if (!At(k, 1)) {
						k = Or(k, f);
						var B = k.clientX,
							A = k.clientY,
							V = B - C.x,
							z = A - C.y,
							Q = C.isDragging;
						(C.x = B),
							(C.y = A),
							(Q ||
								Math.abs(C.startX - B) >= s ||
								Math.abs(C.startY - A) >= s) &&
								(y && (W = !0),
								Q || (C.isDragging = !0),
								Be(V, z),
								Q || (m && m(C)));
					}
				},
				Pe = (C.onPress = function (w) {
					At(w, 1) ||
						(w && w.button) ||
						((C.axis = Et = null),
						et.pause(),
						(C.isPressed = !0),
						(w = Or(w)),
						(Mt = Ht = 0),
						(C.startX = C.x = w.clientX),
						(C.startY = C.y = w.clientY),
						C._vx.reset(),
						C._vy.reset(),
						ke(tt ? a : Ct, yi[1], Ze, ue, !0),
						(C.deltaX = C.deltaY = 0),
						S && S(C));
				}),
				dt = (C.onRelease = function (w) {
					if (!At(w, 1)) {
						Ee(tt ? a : Ct, yi[1], Ze, !0);
						var k = !isNaN(C.y - C.startY),
							B = C.isDragging,
							A =
								B &&
								(Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
							V = Or(w);
						!A &&
							k &&
							(C._vx.reset(),
							C._vy.reset(),
							f &&
								U &&
								ve.delayedCall(0.08, function () {
									if (Vr() - ge > 300 && !w.defaultPrevented) {
										if (w.target.click) w.target.click();
										else if (Ct.createEvent) {
											var z = Ct.createEvent("MouseEvents");
											z.initMouseEvent(
												"click",
												!0,
												!0,
												ni,
												1,
												V.screenX,
												V.screenY,
												V.clientX,
												V.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												w.target.dispatchEvent(z);
										}
									}
								})),
							(C.isDragging = C.isGesturing = C.isPressed = !1),
							d && B && !tt && et.restart(!0),
							_ && B && _(C),
							x && x(C, A);
					}
				}),
				xe = function (k) {
					return (
						k.touches &&
						k.touches.length > 1 &&
						(C.isGesturing = !0) &&
						gt(k, C.isDragging)
					);
				},
				Nt = function () {
					return (C.isGesturing = !1) || T(C);
				},
				we = function (k) {
					if (!At(k)) {
						var B = kt(),
							A = Rt();
						Qe((B - Ue) * G, (A - ze) * G, 1),
							(Ue = B),
							(ze = A),
							d && et.restart(!0);
					}
				},
				qe = function (k) {
					if (!At(k)) {
						(k = Or(k, f)), nt && (ot = !0);
						var B =
							(k.deltaMode === 1 ? c : k.deltaMode === 2 ? ni.innerHeight : 1) *
							g;
						Qe(k.deltaX * B, k.deltaY * B, 0), d && !tt && et.restart(!0);
					}
				},
				Oi = function (k) {
					if (!At(k)) {
						var B = k.clientX,
							A = k.clientY,
							V = B - C.x,
							z = A - C.y;
						(C.x = B),
							(C.y = A),
							(Z = !0),
							d && et.restart(!0),
							(V || z) && Be(V, z);
					}
				},
				at = function (k) {
					(C.event = k), Y(C);
				},
				v = function (k) {
					(C.event = k), H(C);
				},
				q = function (k) {
					return At(k) || (Or(k, f) && N(C));
				};
			(et = C._dc = ve.delayedCall(p || 0.25, Mi).pause()),
				(C.deltaX = C.deltaY = 0),
				(C._vx = pa(0, 50, !0)),
				(C._vy = pa(0, 50, !0)),
				(C.scrollX = kt),
				(C.scrollY = Rt),
				(C.isDragging = C.isGesturing = C.isPressed = !1),
				Du(this),
				(C.enable = function (w) {
					return (
						C.isEnabled ||
							(ke(Wt ? Ct : a, "scroll", ha),
							o.indexOf("scroll") >= 0 && ke(Wt ? Ct : a, "scroll", we, ue, J),
							o.indexOf("wheel") >= 0 && ke(a, "wheel", qe, ue, J),
							((o.indexOf("touch") >= 0 && Mu) || o.indexOf("pointer") >= 0) &&
								(ke(a, yi[0], Pe, ue, J),
								ke(Ct, yi[2], dt),
								ke(Ct, yi[3], dt),
								U && ke(a, "click", mi, !0, !0),
								N && ke(a, "click", q),
								gt && ke(Ct, "gesturestart", xe),
								T && ke(Ct, "gestureend", Nt),
								Y && ke(a, Tn + "enter", at),
								H && ke(a, Tn + "leave", v),
								j && ke(a, Tn + "move", Oi)),
							(C.isEnabled = !0),
							w && w.type && Pe(w),
							ut && ut(C)),
						C
					);
				}),
				(C.disable = function () {
					C.isEnabled &&
						(ir.filter(function (w) {
							return w !== C && jr(w.target);
						}).length || Ee(Wt ? Ct : a, "scroll", ha),
						C.isPressed &&
							(C._vx.reset(), C._vy.reset(), Ee(tt ? a : Ct, yi[1], Ze, !0)),
						Ee(Wt ? Ct : a, "scroll", we, J),
						Ee(a, "wheel", qe, J),
						Ee(a, yi[0], Pe, J),
						Ee(Ct, yi[2], dt),
						Ee(Ct, yi[3], dt),
						Ee(a, "click", mi, !0),
						Ee(a, "click", q),
						Ee(Ct, "gesturestart", xe),
						Ee(Ct, "gestureend", Nt),
						Ee(a, Tn + "enter", at),
						Ee(a, Tn + "leave", v),
						Ee(a, Tn + "move", Oi),
						(C.isEnabled = C.isPressed = C.isDragging = !1),
						I && I(C));
				}),
				(C.kill = C.revert =
					function () {
						C.disable();
						var w = ir.indexOf(C);
						w >= 0 && ir.splice(w, 1), Xi === C && (Xi = 0);
					}),
				ir.push(C),
				tt && jr(a) && (Xi = C),
				C.enable(h);
		}),
		rh(r, [
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
		r
	);
})();
ee.version = "3.12.5";
ee.create = function (r) {
	return new ee(r);
};
ee.register = ku;
ee.getAll = function () {
	return ir.slice();
};
ee.getById = function (r) {
	return ir.filter(function (t) {
		return t.vars.id === r;
	})[0];
};
Cu() && ve.registerPlugin(ee);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
	Zn,
	bt,
	$t,
	xi,
	Bt,
	Au,
	ao,
	us,
	Wr,
	Ar,
	Cs,
	Se,
	xo,
	ga,
	Le,
	Bl,
	ql,
	Jn,
	Lu,
	No,
	Iu,
	Ae,
	_a,
	Ru,
	Nu,
	Zi,
	ma,
	Wa,
	ar,
	Ga,
	lo,
	ya,
	Fo,
	Ps = 1,
	Me = Date.now,
	zo = Me(),
	gi = 0,
	Lr = 0,
	Yl = function (t, e, i) {
		var n = ti(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (i["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
	},
	Hl = function (t, e) {
		return e && (!ti(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	oh = function r() {
		return Lr && requestAnimationFrame(r);
	},
	Xl = function () {
		return (xo = 1);
	},
	$l = function () {
		return (xo = 0);
	},
	Ei = function (t) {
		return t;
	},
	Ir = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Fu = function () {
		return typeof window < "u";
	},
	zu = function () {
		return it || (Fu() && (it = window.gsap) && it.registerPlugin && it);
	},
	Bn = function (t) {
		return !!~Au.indexOf(t);
	},
	Bu = function (t) {
		return (
			(t === "Height" ? Ga : bt["inner" + t]) ||
			xi["client" + t] ||
			Bt["client" + t]
		);
	},
	qu = function (t) {
		return (
			cn(t, "getBoundingClientRect") ||
			(Bn(t)
				? function () {
						return (Gs.width = bt.innerWidth), (Gs.height = Ga), Gs;
					}
				: function () {
						return Hi(t);
					})
		);
	},
	ah = function (t, e, i) {
		var n = i.d,
			s = i.d2,
			o = i.a;
		return (o = cn(t, "getBoundingClientRect"))
			? function () {
					return o()[n];
				}
			: function () {
					return (e ? Bu(s) : t["client" + s]) || 0;
				};
	},
	lh = function (t, e) {
		return !e || ~Ni.indexOf(t)
			? qu(t)
			: function () {
					return Gs;
				};
	},
	Ii = function (t, e) {
		var i = e.s,
			n = e.d2,
			s = e.d,
			o = e.a;
		return Math.max(
			0,
			(i = "scroll" + n) && (o = cn(t, i))
				? o() - qu(t)()[s]
				: Bn(t)
					? (xi[i] || Bt[i]) - Bu(n)
					: t[i] - t["offset" + n],
		);
	},
	Es = function (t, e) {
		for (var i = 0; i < Jn.length; i += 3)
			(!e || ~e.indexOf(Jn[i + 1])) && t(Jn[i], Jn[i + 1], Jn[i + 2]);
	},
	ti = function (t) {
		return typeof t == "string";
	},
	Fe = function (t) {
		return typeof t == "function";
	},
	Rr = function (t) {
		return typeof t == "number";
	},
	Sn = function (t) {
		return typeof t == "object";
	},
	Dr = function (t, e, i) {
		return t && t.progress(e ? 0 : 1) && i && t.pause();
	},
	Bo = function (t, e) {
		if (t.enabled) {
			var i = t._ctx
				? t._ctx.add(function () {
						return e(t);
					})
				: e(t);
			i && i.totalTime && (t.callbackAnimation = i);
		}
	},
	Gn = Math.abs,
	Yu = "left",
	Hu = "top",
	Ua = "right",
	Ka = "bottom",
	An = "width",
	Ln = "height",
	Gr = "Right",
	Ur = "Left",
	Kr = "Top",
	Qr = "Bottom",
	ne = "padding",
	fi = "margin",
	mr = "Width",
	Qa = "Height",
	ae = "px",
	di = function (t) {
		return bt.getComputedStyle(t);
	},
	ch = function (t) {
		var e = di(t).position;
		t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
	},
	Vl = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Hi = function (t, e) {
		var i =
				e &&
				di(t)[ga] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				it
					.to(t, {
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
					})
					.progress(1),
			n = t.getBoundingClientRect();
		return i && i.progress(0).kill(), n;
	},
	co = function (t, e) {
		var i = e.d2;
		return t["offset" + i] || t["client" + i] || 0;
	},
	Xu = function (t) {
		var e = [],
			i = t.labels,
			n = t.duration(),
			s;
		for (s in i) e.push(i[s] / n);
		return e;
	},
	uh = function (t) {
		return function (e) {
			return it.utils.snap(Xu(t), e);
		};
	},
	Za = function (t) {
		var e = it.utils.snap(t),
			i =
				Array.isArray(t) &&
				t.slice(0).sort(function (n, s) {
					return n - s;
				});
		return i
			? function (n, s, o) {
					o === void 0 && (o = 0.001);
					var a;
					if (!s) return e(n);
					if (s > 0) {
						for (n -= o, a = 0; a < i.length; a++) if (i[a] >= n) return i[a];
						return i[a - 1];
					} else for (a = i.length, n += o; a--; ) if (i[a] <= n) return i[a];
					return i[0];
				}
			: function (n, s, o) {
					o === void 0 && (o = 0.001);
					var a = e(n);
					return !s || Math.abs(a - n) < o || a - n < 0 == s < 0
						? a
						: e(s < 0 ? n - t : n + t);
				};
	},
	fh = function (t) {
		return function (e, i) {
			return Za(Xu(t))(e, i.direction);
		};
	},
	ks = function (t, e, i, n) {
		return i.split(",").forEach(function (s) {
			return t(e, s, n);
		});
	},
	de = function (t, e, i, n, s) {
		return t.addEventListener(e, i, { passive: !n, capture: !!s });
	},
	fe = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	As = function (t, e, i) {
		(i = i && i.wheelHandler), i && (t(e, "wheel", i), t(e, "touchmove", i));
	},
	jl = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	Ls = { toggleActions: "play", anticipatePin: 0 },
	uo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	$s = function (t, e) {
		if (ti(t)) {
			var i = t.indexOf("="),
				n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
			~i && (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))),
				(t =
					n +
					(t in uo
						? uo[t] * e
						: ~t.indexOf("%")
							? (parseFloat(t) * e) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	Is = function (t, e, i, n, s, o, a, c) {
		var u = s.startColor,
			f = s.endColor,
			d = s.fontSize,
			p = s.indent,
			l = s.fontWeight,
			g = $t.createElement("div"),
			h = Bn(i) || cn(i, "pinType") === "fixed",
			m = t.indexOf("scroller") !== -1,
			_ = h ? Bt : i,
			y = t.indexOf("start") !== -1,
			S = y ? u : f,
			x =
				"border-color:" +
				S +
				";font-size:" +
				d +
				";color:" +
				S +
				";font-weight:" +
				l +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(x += "position:" + ((m || c) && h ? "fixed;" : "absolute;")),
			(m || c || !h) &&
				(x += (n === ce ? Ua : Ka) + ":" + (o + parseFloat(p)) + "px;"),
			a &&
				(x +=
					"box-sizing:border-box;text-align:left;width:" +
					a.offsetWidth +
					"px;"),
			(g._isStart = y),
			g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
			(g.style.cssText = x),
			(g.innerText = e || e === 0 ? t + "-" + e : t),
			_.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
			(g._offset = g["offset" + n.op.d2]),
			Vs(g, 0, n, y),
			g
		);
	},
	Vs = function (t, e, i, n) {
		var s = { display: "block" },
			o = i[n ? "os2" : "p2"],
			a = i[n ? "p2" : "os2"];
		(t._isFlipped = n),
			(s[i.a + "Percent"] = n ? -100 : 0),
			(s[i.a] = n ? "1px" : 0),
			(s["border" + o + mr] = 1),
			(s["border" + a + mr] = 0),
			(s[i.p] = e + "px"),
			it.set(t, s);
	},
	yt = [],
	va = {},
	fs,
	Wl = function () {
		return Me() - gi > 34 && (fs || (fs = requestAnimationFrame(ji)));
	},
	Un = function () {
		(!Ae || !Ae.isPressed || Ae.startX > Bt.clientWidth) &&
			(xt.cache++,
			Ae ? fs || (fs = requestAnimationFrame(ji)) : ji(),
			gi || Yn("scrollStart"),
			(gi = Me()));
	},
	qo = function () {
		(Nu = bt.innerWidth), (Ru = bt.innerHeight);
	},
	Nr = function () {
		xt.cache++,
			!Se &&
				!Iu &&
				!$t.fullscreenElement &&
				!$t.webkitFullscreenElement &&
				(!_a ||
					Nu !== bt.innerWidth ||
					Math.abs(bt.innerHeight - Ru) > bt.innerHeight * 0.25) &&
				ao.restart(!0);
	},
	qn = {},
	dh = [],
	$u = function r() {
		return fe(mt, "scrollEnd", r) || Dn(!0);
	},
	Yn = function (t) {
		return (
			(qn[t] &&
				qn[t].map(function (e) {
					return e();
				})) ||
			dh
		);
	},
	Je = [],
	Vu = function (t) {
		for (var e = 0; e < Je.length; e += 5)
			(!t || (Je[e + 4] && Je[e + 4].query === t)) &&
				((Je[e].style.cssText = Je[e + 1]),
				Je[e].getBBox && Je[e].setAttribute("transform", Je[e + 2] || ""),
				(Je[e + 3].uncache = 1));
	},
	Ja = function (t, e) {
		var i;
		for (Le = 0; Le < yt.length; Le++)
			(i = yt[Le]),
				i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
		(lo = !0), e && Vu(e), e || Yn("revert");
	},
	ju = function (t, e) {
		xt.cache++,
			(e || !Ie) &&
				xt.forEach(function (i) {
					return Fe(i) && i.cacheID++ && (i.rec = 0);
				}),
			ti(t) && (bt.history.scrollRestoration = Wa = t);
	},
	Ie,
	In = 0,
	Gl,
	hh = function () {
		if (Gl !== In) {
			var t = (Gl = In);
			requestAnimationFrame(function () {
				return t === In && Dn(!0);
			});
		}
	},
	Wu = function () {
		Bt.appendChild(ar),
			(Ga = (!Ae && ar.offsetHeight) || bt.innerHeight),
			Bt.removeChild(ar);
	},
	Ul = function (t) {
		return us(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	Dn = function (t, e) {
		if (gi && !t && !lo) {
			de(mt, "scrollEnd", $u);
			return;
		}
		Wu(),
			(Ie = mt.isRefreshing = !0),
			xt.forEach(function (n) {
				return Fe(n) && ++n.cacheID && (n.rec = n());
			});
		var i = Yn("refreshInit");
		Lu && mt.sort(),
			e || Ja(),
			xt.forEach(function (n) {
				Fe(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
			}),
			yt.slice(0).forEach(function (n) {
				return n.refresh();
			}),
			(lo = !1),
			yt.forEach(function (n) {
				if (n._subPinOffset && n.pin) {
					var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
						o = n.pin[s];
					n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
				}
			}),
			(ya = 1),
			Ul(!0),
			yt.forEach(function (n) {
				var s = Ii(n.scroller, n._dir),
					o = n.vars.end === "max" || (n._endClamp && n.end > s),
					a = n._startClamp && n.start >= s;
				(o || a) &&
					n.setPositions(
						a ? s - 1 : n.start,
						o ? Math.max(a ? s : n.start + 1, s) : n.end,
						!0,
					);
			}),
			Ul(!1),
			(ya = 0),
			i.forEach(function (n) {
				return n && n.render && n.render(-1);
			}),
			xt.forEach(function (n) {
				Fe(n) &&
					(n.smooth &&
						requestAnimationFrame(function () {
							return (n.target.style.scrollBehavior = "smooth");
						}),
					n.rec && n(n.rec));
			}),
			ju(Wa, 1),
			ao.pause(),
			In++,
			(Ie = 2),
			ji(2),
			yt.forEach(function (n) {
				return Fe(n.vars.onRefresh) && n.vars.onRefresh(n);
			}),
			(Ie = mt.isRefreshing = !1),
			Yn("refresh");
	},
	xa = 0,
	js = 1,
	Zr,
	ji = function (t) {
		if (t === 2 || (!Ie && !lo)) {
			(mt.isUpdating = !0), Zr && Zr.update(0);
			var e = yt.length,
				i = Me(),
				n = i - zo >= 50,
				s = e && yt[0].scroll();
			if (
				((js = xa > s ? -1 : 1),
				Ie || (xa = s),
				n &&
					(gi && !xo && i - gi > 200 && ((gi = 0), Yn("scrollEnd")),
					(Ar = zo),
					(zo = i)),
				js < 0)
			) {
				for (Le = e; Le-- > 0; ) yt[Le] && yt[Le].update(0, n);
				js = 1;
			} else for (Le = 0; Le < e; Le++) yt[Le] && yt[Le].update(0, n);
			mt.isUpdating = !1;
		}
		fs = 0;
	},
	wa = [
		Yu,
		Hu,
		Ka,
		Ua,
		fi + Qr,
		fi + Gr,
		fi + Kr,
		fi + Ur,
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
	Ws = wa.concat([
		An,
		Ln,
		"boxSizing",
		"max" + mr,
		"max" + Qa,
		"position",
		fi,
		ne,
		ne + Kr,
		ne + Gr,
		ne + Qr,
		ne + Ur,
	]),
	ph = function (t, e, i) {
		lr(i);
		var n = t._gsap;
		if (n.spacerIsNative) lr(n.spacerState);
		else if (t._gsap.swappedIn) {
			var s = e.parentNode;
			s && (s.insertBefore(t, e), s.removeChild(e));
		}
		t._gsap.swappedIn = !1;
	},
	Yo = function (t, e, i, n) {
		if (!t._gsap.swappedIn) {
			for (var s = wa.length, o = e.style, a = t.style, c; s--; )
				(c = wa[s]), (o[c] = i[c]);
			(o.position = i.position === "absolute" ? "absolute" : "relative"),
				i.display === "inline" && (o.display = "inline-block"),
				(a[Ka] = a[Ua] = "auto"),
				(o.flexBasis = i.flexBasis || "auto"),
				(o.overflow = "visible"),
				(o.boxSizing = "border-box"),
				(o[An] = co(t, Ne) + ae),
				(o[Ln] = co(t, ce) + ae),
				(o[ne] = a[fi] = a[Hu] = a[Yu] = "0"),
				lr(n),
				(a[An] = a["max" + mr] = i[An]),
				(a[Ln] = a["max" + Qa] = i[Ln]),
				(a[ne] = i[ne]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	gh = /([A-Z])/g,
	lr = function (t) {
		if (t) {
			var e = t.t.style,
				i = t.length,
				n = 0,
				s,
				o;
			for ((t.t._gsap || it.core.getCache(t.t)).uncache = 1; n < i; n += 2)
				(o = t[n + 1]),
					(s = t[n]),
					o
						? (e[s] = o)
						: e[s] && e.removeProperty(s.replace(gh, "-$1").toLowerCase());
		}
	},
	Rs = function (t) {
		for (var e = Ws.length, i = t.style, n = [], s = 0; s < e; s++)
			n.push(Ws[s], i[Ws[s]]);
		return (n.t = t), n;
	},
	_h = function (t, e, i) {
		for (var n = [], s = t.length, o = i ? 8 : 0, a; o < s; o += 2)
			(a = t[o]), n.push(a, a in e ? e[a] : t[o + 1]);
		return (n.t = t.t), n;
	},
	Gs = { left: 0, top: 0 },
	Kl = function (t, e, i, n, s, o, a, c, u, f, d, p, l, g) {
		Fe(t) && (t = t(c)),
			ti(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? $s("0" + t.substr(3), i) : 0));
		var h = l ? l.time() : 0,
			m,
			_,
			y;
		if ((l && l.seek(0), isNaN(t) || (t = +t), Rr(t)))
			l &&
				(t = it.utils.mapRange(
					l.scrollTrigger.start,
					l.scrollTrigger.end,
					0,
					p,
					t,
				)),
				a && Vs(a, i, n, !0);
		else {
			Fe(e) && (e = e(c));
			var S = (t || "0").split(" "),
				x,
				b,
				P,
				M;
			(y = Ye(e, c) || Bt),
				(x = Hi(y) || {}),
				(!x || (!x.left && !x.top)) &&
					di(y).display === "none" &&
					((M = y.style.display),
					(y.style.display = "block"),
					(x = Hi(y)),
					M ? (y.style.display = M) : y.style.removeProperty("display")),
				(b = $s(S[0], x[n.d])),
				(P = $s(S[1] || "0", i)),
				(t = x[n.p] - u[n.p] - f + b + s - P),
				a && Vs(a, P, n, i - P < 20 || (a._isStart && P > 20)),
				(i -= i - P);
		}
		if ((g && ((c[g] = t || -0.001), t < 0 && (t = 0)), o)) {
			var D = t + i,
				E = o._isStart;
			(m = "scroll" + n.d2),
				Vs(
					o,
					D,
					n,
					(E && D > 20) ||
						(!E && (d ? Math.max(Bt[m], xi[m]) : o.parentNode[m]) <= D + 1),
				),
				d &&
					((u = Hi(a)),
					d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + ae));
		}
		return (
			l &&
				y &&
				((m = Hi(y)),
				l.seek(p),
				(_ = Hi(y)),
				(l._caScrollDist = m[n.p] - _[n.p]),
				(t = (t / l._caScrollDist) * p)),
			l && l.seek(h),
			l ? t : Math.round(t)
		);
	},
	mh = /(webkit|moz|length|cssText|inset)/i,
	Ql = function (t, e, i, n) {
		if (t.parentNode !== e) {
			var s = t.style,
				o,
				a;
			if (e === Bt) {
				(t._stOrig = s.cssText), (a = di(t));
				for (o in a)
					!+o &&
						!mh.test(o) &&
						a[o] &&
						typeof s[o] == "string" &&
						o !== "0" &&
						(s[o] = a[o]);
				(s.top = i), (s.left = n);
			} else s.cssText = t._stOrig;
			(it.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	Gu = function (t, e, i) {
		var n = e,
			s = n;
		return function (o) {
			var a = Math.round(t());
			return (
				a !== n &&
					a !== s &&
					Math.abs(a - n) > 3 &&
					Math.abs(a - s) > 3 &&
					((o = a), i && i()),
				(s = n),
				(n = o),
				o
			);
		};
	},
	Ns = function (t, e, i) {
		var n = {};
		(n[e.p] = "+=" + i), it.set(t, n);
	},
	Zl = function (t, e) {
		var i = hn(t, e),
			n = "_scroll" + e.p2,
			s = function o(a, c, u, f, d) {
				var p = o.tween,
					l = c.onComplete,
					g = {};
				u = u || i();
				var h = Gu(i, u, function () {
					p.kill(), (o.tween = 0);
				});
				return (
					(d = (f && d) || 0),
					(f = f || a - u),
					p && p.kill(),
					(c[n] = a),
					(c.inherit = !1),
					(c.modifiers = g),
					(g[n] = function () {
						return h(u + f * p.ratio + d * p.ratio * p.ratio);
					}),
					(c.onUpdate = function () {
						xt.cache++, o.tween && ji();
					}),
					(c.onComplete = function () {
						(o.tween = 0), l && l.call(p);
					}),
					(p = o.tween = it.to(t, c)),
					p
				);
			};
		return (
			(t[n] = i),
			(i.wheelHandler = function () {
				return s.tween && s.tween.kill() && (s.tween = 0);
			}),
			de(t, "wheel", i.wheelHandler),
			mt.isTouch && de(t, "touchmove", i.wheelHandler),
			s
		);
	},
	mt = (function () {
		function r(e, i) {
			Zn ||
				r.register(it) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				ma(this),
				this.init(e, i);
		}
		var t = r.prototype;
		return (
			(t.init = function (i, n) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Lr)
				) {
					this.update = this.refresh = this.kill = Ei;
					return;
				}
				i = Vl(ti(i) || Rr(i) || i.nodeType ? { trigger: i } : i, Ls);
				var s = i,
					o = s.onUpdate,
					a = s.toggleClass,
					c = s.id,
					u = s.onToggle,
					f = s.onRefresh,
					d = s.scrub,
					p = s.trigger,
					l = s.pin,
					g = s.pinSpacing,
					h = s.invalidateOnRefresh,
					m = s.anticipatePin,
					_ = s.onScrubComplete,
					y = s.onSnapComplete,
					S = s.once,
					x = s.snap,
					b = s.pinReparent,
					P = s.pinSpacer,
					M = s.containerAnimation,
					D = s.fastScrollEnd,
					E = s.preventOverlaps,
					L =
						i.horizontal || (i.containerAnimation && i.horizontal !== !1)
							? Ne
							: ce,
					F = !d && d !== 0,
					O = Ye(i.scroller || bt),
					R = it.core.getCache(O),
					Y = Bn(O),
					H =
						("pinType" in i
							? i.pinType
							: cn(O, "pinType") || (Y && "fixed")) === "fixed",
					j = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
					X = F && i.toggleActions.split(" "),
					tt = "markers" in i ? i.markers : Ls.markers,
					gt = Y ? 0 : parseFloat(di(O)["border" + L.p2 + mr]) || 0,
					T = this,
					nt =
						i.onRefreshInit &&
						function () {
							return i.onRefreshInit(T);
						},
					ut = ah(O, Y, L),
					I = lh(O, Y),
					N = 0,
					G = 0,
					J = 0,
					U = hn(O, L),
					K,
					lt,
					ft,
					et,
					W,
					Z,
					ot,
					st,
					Et,
					C,
					Mt,
					Ht,
					ue,
					kt,
					Rt,
					Ue,
					ze,
					Xt,
					Wt,
					Ct,
					se,
					Gt,
					ge,
					mi,
					At,
					Mi,
					Ke,
					Qe,
					Be,
					Ze,
					Pe,
					dt,
					xe,
					Nt,
					we,
					qe,
					Oi,
					at,
					v;
				if (
					((T._startClamp = T._endClamp = !1),
					(T._dir = L),
					(m *= 45),
					(T.scroller = O),
					(T.scroll = M ? M.time.bind(M) : U),
					(et = U()),
					(T.vars = i),
					(n = n || i.animation),
					"refreshPriority" in i &&
						((Lu = 1), i.refreshPriority === -9999 && (Zr = T)),
					(R.tweenScroll = R.tweenScroll || {
						top: Zl(O, ce),
						left: Zl(O, Ne),
					}),
					(T.tweenTo = K = R.tweenScroll[L.p]),
					(T.scrubDuration = function (A) {
						(xe = Rr(A) && A),
							xe
								? dt
									? dt.duration(A)
									: (dt = it.to(n, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: xe,
											paused: !0,
											onComplete: function () {
												return _ && _(T);
											},
										}))
								: (dt && dt.progress(1).kill(), (dt = 0));
					}),
					n &&
						((n.vars.lazy = !1),
						(n._initted && !T.isReverted) ||
							(n.vars.immediateRender !== !1 &&
								i.immediateRender !== !1 &&
								n.duration() &&
								n.render(0, !0, !0)),
						(T.animation = n.pause()),
						(n.scrollTrigger = T),
						T.scrubDuration(d),
						(Ze = 0),
						c || (c = n.vars.id)),
					x &&
						((!Sn(x) || x.push) && (x = { snapTo: x }),
						"scrollBehavior" in Bt.style &&
							it.set(Y ? [Bt, xi] : O, { scrollBehavior: "auto" }),
						xt.forEach(function (A) {
							return (
								Fe(A) &&
								A.target === (Y ? $t.scrollingElement || xi : O) &&
								(A.smooth = !1)
							);
						}),
						(ft = Fe(x.snapTo)
							? x.snapTo
							: x.snapTo === "labels"
								? uh(n)
								: x.snapTo === "labelsDirectional"
									? fh(n)
									: x.directional !== !1
										? function (A, V) {
												return Za(x.snapTo)(
													A,
													Me() - G < 500 ? 0 : V.direction,
												);
											}
										: it.utils.snap(x.snapTo)),
						(Nt = x.duration || { min: 0.1, max: 2 }),
						(Nt = Sn(Nt) ? Wr(Nt.min, Nt.max) : Wr(Nt, Nt)),
						(we = it
							.delayedCall(x.delay || xe / 2 || 0.1, function () {
								var A = U(),
									V = Me() - G < 500,
									z = K.tween;
								if (
									(V || Math.abs(T.getVelocity()) < 10) &&
									!z &&
									!xo &&
									N !== A
								) {
									var Q = (A - Z) / kt,
										ct = n && !F ? n.totalProgress() : Q,
										rt = V ? 0 : ((ct - Pe) / (Me() - Ar)) * 1e3 || 0,
										_t = it.utils.clamp(-Q, 1 - Q, (Gn(rt / 2) * rt) / 0.185),
										Ot = Q + (x.inertia === !1 ? 0 : _t),
										Dt,
										vt,
										wt = x,
										Pt = wt.onStart,
										pt = wt.onInterrupt,
										_e = wt.onComplete;
									if (
										((Dt = ft(Ot, T)),
										Rr(Dt) || (Dt = Ot),
										(vt = Math.round(Z + Dt * kt)),
										A <= ot && A >= Z && vt !== A)
									) {
										if (z && !z._initted && z.data <= Gn(vt - A)) return;
										x.inertia === !1 && (_t = Dt - Q),
											K(
												vt,
												{
													duration: Nt(
														Gn(
															(Math.max(Gn(Ot - ct), Gn(Dt - ct)) * 0.185) /
																rt /
																0.05 || 0,
														),
													),
													ease: x.ease || "power3",
													data: Gn(vt - A),
													onInterrupt: function () {
														return we.restart(!0) && pt && pt(T);
													},
													onComplete: function () {
														T.update(),
															(N = U()),
															n &&
																(dt
																	? dt.resetTo(
																			"totalProgress",
																			Dt,
																			n._tTime / n._tDur,
																		)
																	: n.progress(Dt)),
															(Ze = Pe =
																n && !F ? n.totalProgress() : T.progress),
															y && y(T),
															_e && _e(T);
													},
												},
												A,
												_t * kt,
												vt - A - _t * kt,
											),
											Pt && Pt(T, K.tween);
									}
								} else T.isActive && N !== A && we.restart(!0);
							})
							.pause())),
					c && (va[c] = T),
					(p = T.trigger = Ye(p || (l !== !0 && l))),
					(v = p && p._gsap && p._gsap.stRevert),
					v && (v = v(T)),
					(l = l === !0 ? p : Ye(l)),
					ti(a) && (a = { targets: p, className: a }),
					l &&
						(g === !1 ||
							g === fi ||
							(g =
								!g &&
								l.parentNode &&
								l.parentNode.style &&
								di(l.parentNode).display === "flex"
									? !1
									: ne),
						(T.pin = l),
						(lt = it.core.getCache(l)),
						lt.spacer
							? (Rt = lt.pinState)
							: (P &&
									((P = Ye(P)),
									P && !P.nodeType && (P = P.current || P.nativeElement),
									(lt.spacerIsNative = !!P),
									P && (lt.spacerState = Rs(P))),
								(lt.spacer = Xt = P || $t.createElement("div")),
								Xt.classList.add("pin-spacer"),
								c && Xt.classList.add("pin-spacer-" + c),
								(lt.pinState = Rt = Rs(l))),
						i.force3D !== !1 && it.set(l, { force3D: !0 }),
						(T.spacer = Xt = lt.spacer),
						(Be = di(l)),
						(mi = Be[g + L.os2]),
						(Ct = it.getProperty(l)),
						(se = it.quickSetter(l, L.a, ae)),
						Yo(l, Xt, Be),
						(ze = Rs(l))),
					tt)
				) {
					(Ht = Sn(tt) ? Vl(tt, jl) : jl),
						(C = Is("scroller-start", c, O, L, Ht, 0)),
						(Mt = Is("scroller-end", c, O, L, Ht, 0, C)),
						(Wt = C["offset" + L.op.d2]);
					var q = Ye(cn(O, "content") || O);
					(st = this.markerStart = Is("start", c, q, L, Ht, Wt, 0, M)),
						(Et = this.markerEnd = Is("end", c, q, L, Ht, Wt, 0, M)),
						M && (at = it.quickSetter([st, Et], L.a, ae)),
						!H &&
							!(Ni.length && cn(O, "fixedMarkers") === !0) &&
							(ch(Y ? Bt : O),
							it.set([C, Mt], { force3D: !0 }),
							(Mi = it.quickSetter(C, L.a, ae)),
							(Qe = it.quickSetter(Mt, L.a, ae)));
				}
				if (M) {
					var w = M.vars.onUpdate,
						k = M.vars.onUpdateParams;
					M.eventCallback("onUpdate", function () {
						T.update(0, 0, 1), w && w.apply(M, k || []);
					});
				}
				if (
					((T.previous = function () {
						return yt[yt.indexOf(T) - 1];
					}),
					(T.next = function () {
						return yt[yt.indexOf(T) + 1];
					}),
					(T.revert = function (A, V) {
						if (!V) return T.kill(!0);
						var z = A !== !1 || !T.enabled,
							Q = Se;
						z !== T.isReverted &&
							(z &&
								((qe = Math.max(U(), T.scroll.rec || 0)),
								(J = T.progress),
								(Oi = n && n.progress())),
							st &&
								[st, Et, C, Mt].forEach(function (ct) {
									return (ct.style.display = z ? "none" : "block");
								}),
							z && ((Se = T), T.update(z)),
							l &&
								(!b || !T.isActive) &&
								(z ? ph(l, Xt, Rt) : Yo(l, Xt, di(l), At)),
							z || T.update(z),
							(Se = Q),
							(T.isReverted = z));
					}),
					(T.refresh = function (A, V, z, Q) {
						if (!((Se || !T.enabled) && !V)) {
							if (l && A && gi) {
								de(r, "scrollEnd", $u);
								return;
							}
							!Ie && nt && nt(T),
								(Se = T),
								K.tween && !z && (K.tween.kill(), (K.tween = 0)),
								dt && dt.pause(),
								h && n && n.revert({ kill: !1 }).invalidate(),
								T.isReverted || T.revert(!0, !0),
								(T._subPinOffset = !1);
							var ct = ut(),
								rt = I(),
								_t = M ? M.duration() : Ii(O, L),
								Ot = kt <= 0.01,
								Dt = 0,
								vt = Q || 0,
								wt = Sn(z) ? z.end : i.end,
								Pt = i.endTrigger || p,
								pt = Sn(z)
									? z.start
									: i.start || (i.start === 0 || !p ? 0 : l ? "0 0" : "0 100%"),
								_e = (T.pinnedContainer =
									i.pinnedContainer && Ye(i.pinnedContainer, T)),
								Ut = (p && Math.max(0, yt.indexOf(T))) || 0,
								me = Ut,
								ye,
								be,
								mn,
								Ts,
								Te,
								oe,
								Di,
								Oo,
								xl,
								br,
								Ci,
								Tr,
								Ss;
							for (
								tt &&
								Sn(z) &&
								((Tr = it.getProperty(C, L.p)), (Ss = it.getProperty(Mt, L.p)));
								me--;

							)
								(oe = yt[me]),
									oe.end || oe.refresh(0, 1) || (Se = T),
									(Di = oe.pin),
									Di &&
										(Di === p || Di === l || Di === _e) &&
										!oe.isReverted &&
										(br || (br = []), br.unshift(oe), oe.revert(!0, !0)),
									oe !== yt[me] && (Ut--, me--);
							for (
								Fe(pt) && (pt = pt(T)),
									pt = Yl(pt, "start", T),
									Z =
										Kl(
											pt,
											p,
											ct,
											L,
											U(),
											st,
											C,
											T,
											rt,
											gt,
											H,
											_t,
											M,
											T._startClamp && "_startClamp",
										) || (l ? -0.001 : 0),
									Fe(wt) && (wt = wt(T)),
									ti(wt) &&
										!wt.indexOf("+=") &&
										(~wt.indexOf(" ")
											? (wt = (ti(pt) ? pt.split(" ")[0] : "") + wt)
											: ((Dt = $s(wt.substr(2), ct)),
												(wt = ti(pt)
													? pt
													: (M
															? it.utils.mapRange(
																	0,
																	M.duration(),
																	M.scrollTrigger.start,
																	M.scrollTrigger.end,
																	Z,
																)
															: Z) + Dt),
												(Pt = p))),
									wt = Yl(wt, "end", T),
									ot =
										Math.max(
											Z,
											Kl(
												wt || (Pt ? "100% 0" : _t),
												Pt,
												ct,
												L,
												U() + Dt,
												Et,
												Mt,
												T,
												rt,
												gt,
												H,
												_t,
												M,
												T._endClamp && "_endClamp",
											),
										) || -0.001,
									Dt = 0,
									me = Ut;
								me--;

							)
								(oe = yt[me]),
									(Di = oe.pin),
									Di &&
										oe.start - oe._pinPush <= Z &&
										!M &&
										oe.end > 0 &&
										((ye =
											oe.end -
											(T._startClamp ? Math.max(0, oe.start) : oe.start)),
										((Di === p && oe.start - oe._pinPush < Z) || Di === _e) &&
											isNaN(pt) &&
											(Dt += ye * (1 - oe.progress)),
										Di === l && (vt += ye));
							if (
								((Z += Dt),
								(ot += Dt),
								T._startClamp && (T._startClamp += Dt),
								T._endClamp &&
									!Ie &&
									((T._endClamp = ot || -0.001), (ot = Math.min(ot, Ii(O, L)))),
								(kt = ot - Z || ((Z -= 0.01) && 0.001)),
								Ot && (J = it.utils.clamp(0, 1, it.utils.normalize(Z, ot, qe))),
								(T._pinPush = vt),
								st &&
									Dt &&
									((ye = {}),
									(ye[L.a] = "+=" + Dt),
									_e && (ye[L.p] = "-=" + U()),
									it.set([st, Et], ye)),
								l && !(ya && T.end >= Ii(O, L)))
							)
								(ye = di(l)),
									(Ts = L === ce),
									(mn = U()),
									(Gt = parseFloat(Ct(L.a)) + vt),
									!_t &&
										ot > 1 &&
										((Ci = (Y ? $t.scrollingElement || xi : O).style),
										(Ci = {
											style: Ci,
											value: Ci["overflow" + L.a.toUpperCase()],
										}),
										Y &&
											di(Bt)["overflow" + L.a.toUpperCase()] !== "scroll" &&
											(Ci.style["overflow" + L.a.toUpperCase()] = "scroll")),
									Yo(l, Xt, ye),
									(ze = Rs(l)),
									(be = Hi(l, !0)),
									(Oo = H && hn(O, Ts ? Ne : ce)()),
									g
										? ((At = [g + L.os2, kt + vt + ae]),
											(At.t = Xt),
											(me = g === ne ? co(l, L) + kt + vt : 0),
											me &&
												(At.push(L.d, me + ae),
												Xt.style.flexBasis !== "auto" &&
													(Xt.style.flexBasis = me + ae)),
											lr(At),
											_e &&
												yt.forEach(function (Sr) {
													Sr.pin === _e &&
														Sr.vars.pinSpacing !== !1 &&
														(Sr._subPinOffset = !0);
												}),
											H && U(qe))
										: ((me = co(l, L)),
											me &&
												Xt.style.flexBasis !== "auto" &&
												(Xt.style.flexBasis = me + ae)),
									H &&
										((Te = {
											top: be.top + (Ts ? mn - Z : Oo) + ae,
											left: be.left + (Ts ? Oo : mn - Z) + ae,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(Te[An] = Te["max" + mr] = Math.ceil(be.width) + ae),
										(Te[Ln] = Te["max" + Qa] = Math.ceil(be.height) + ae),
										(Te[fi] =
											Te[fi + Kr] =
											Te[fi + Gr] =
											Te[fi + Qr] =
											Te[fi + Ur] =
												"0"),
										(Te[ne] = ye[ne]),
										(Te[ne + Kr] = ye[ne + Kr]),
										(Te[ne + Gr] = ye[ne + Gr]),
										(Te[ne + Qr] = ye[ne + Qr]),
										(Te[ne + Ur] = ye[ne + Ur]),
										(Ue = _h(Rt, Te, b)),
										Ie && U(0)),
									n
										? ((xl = n._initted),
											No(1),
											n.render(n.duration(), !0, !0),
											(ge = Ct(L.a) - Gt + kt + vt),
											(Ke = Math.abs(kt - ge) > 1),
											H && Ke && Ue.splice(Ue.length - 2, 2),
											n.render(0, !0, !0),
											xl || n.invalidate(!0),
											n.parent || n.totalTime(n.totalTime()),
											No(0))
										: (ge = kt),
									Ci &&
										(Ci.value
											? (Ci.style["overflow" + L.a.toUpperCase()] = Ci.value)
											: Ci.style.removeProperty("overflow-" + L.a));
							else if (p && U() && !M)
								for (be = p.parentNode; be && be !== Bt; )
									be._pinOffset &&
										((Z -= be._pinOffset), (ot -= be._pinOffset)),
										(be = be.parentNode);
							br &&
								br.forEach(function (Sr) {
									return Sr.revert(!1, !0);
								}),
								(T.start = Z),
								(T.end = ot),
								(et = W = Ie ? qe : U()),
								!M && !Ie && (et < qe && U(qe), (T.scroll.rec = 0)),
								T.revert(!1, !0),
								(G = Me()),
								we && ((N = -1), we.restart(!0)),
								(Se = 0),
								n &&
									F &&
									(n._initted || Oi) &&
									n.progress() !== Oi &&
									n.progress(Oi || 0, !0).render(n.time(), !0, !0),
								(Ot || J !== T.progress || M || h) &&
									(n &&
										!F &&
										n.totalProgress(
											M && Z < -0.001 && !J ? it.utils.normalize(Z, ot, 0) : J,
											!0,
										),
									(T.progress = Ot || (et - Z) / kt === J ? 0 : J)),
								l && g && (Xt._pinOffset = Math.round(T.progress * ge)),
								dt && dt.invalidate(),
								isNaN(Tr) ||
									((Tr -= it.getProperty(C, L.p)),
									(Ss -= it.getProperty(Mt, L.p)),
									Ns(C, L, Tr),
									Ns(st, L, Tr - (Q || 0)),
									Ns(Mt, L, Ss),
									Ns(Et, L, Ss - (Q || 0))),
								Ot && !Ie && T.update(),
								f && !Ie && !ue && ((ue = !0), f(T), (ue = !1));
						}
					}),
					(T.getVelocity = function () {
						return ((U() - W) / (Me() - Ar)) * 1e3 || 0;
					}),
					(T.endAnimation = function () {
						Dr(T.callbackAnimation),
							n &&
								(dt
									? dt.progress(1)
									: n.paused()
										? F || Dr(n, T.direction < 0, 1)
										: Dr(n, n.reversed()));
					}),
					(T.labelToScroll = function (A) {
						return (
							(n &&
								n.labels &&
								(Z || T.refresh() || Z) + (n.labels[A] / n.duration()) * kt) ||
							0
						);
					}),
					(T.getTrailing = function (A) {
						var V = yt.indexOf(T),
							z = T.direction > 0 ? yt.slice(0, V).reverse() : yt.slice(V + 1);
						return (
							ti(A)
								? z.filter(function (Q) {
										return Q.vars.preventOverlaps === A;
									})
								: z
						).filter(function (Q) {
							return T.direction > 0 ? Q.end <= Z : Q.start >= ot;
						});
					}),
					(T.update = function (A, V, z) {
						if (!(M && !z && !A)) {
							var Q = Ie === !0 ? qe : T.scroll(),
								ct = A ? 0 : (Q - Z) / kt,
								rt = ct < 0 ? 0 : ct > 1 ? 1 : ct || 0,
								_t = T.progress,
								Ot,
								Dt,
								vt,
								wt,
								Pt,
								pt,
								_e,
								Ut;
							if (
								(V &&
									((W = et),
									(et = M ? U() : Q),
									x && ((Pe = Ze), (Ze = n && !F ? n.totalProgress() : rt))),
								m &&
									l &&
									!Se &&
									!Ps &&
									gi &&
									(!rt && Z < Q + ((Q - W) / (Me() - Ar)) * m
										? (rt = 1e-4)
										: rt === 1 &&
											ot > Q + ((Q - W) / (Me() - Ar)) * m &&
											(rt = 0.9999)),
								rt !== _t && T.enabled)
							) {
								if (
									((Ot = T.isActive = !!rt && rt < 1),
									(Dt = !!_t && _t < 1),
									(pt = Ot !== Dt),
									(Pt = pt || !!rt != !!_t),
									(T.direction = rt > _t ? 1 : -1),
									(T.progress = rt),
									Pt &&
										!Se &&
										((vt = rt && !_t ? 0 : rt === 1 ? 1 : _t === 1 ? 2 : 3),
										F &&
											((wt =
												(!pt && X[vt + 1] !== "none" && X[vt + 1]) || X[vt]),
											(Ut =
												n &&
												(wt === "complete" || wt === "reset" || wt in n)))),
									E &&
										(pt || Ut) &&
										(Ut || d || !n) &&
										(Fe(E)
											? E(T)
											: T.getTrailing(E).forEach(function (mn) {
													return mn.endAnimation();
												})),
									F ||
										(dt && !Se && !Ps
											? (dt._dp._time - dt._start !== dt._time &&
													dt.render(dt._dp._time - dt._start),
												dt.resetTo
													? dt.resetTo("totalProgress", rt, n._tTime / n._tDur)
													: ((dt.vars.totalProgress = rt),
														dt.invalidate().restart()))
											: n && n.totalProgress(rt, !!(Se && (G || A)))),
									l)
								) {
									if ((A && g && (Xt.style[g + L.os2] = mi), !H))
										se(Ir(Gt + ge * rt));
									else if (Pt) {
										if (
											((_e = !A && rt > _t && ot + 1 > Q && Q + 1 >= Ii(O, L)),
											b)
										)
											if (!A && (Ot || _e)) {
												var me = Hi(l, !0),
													ye = Q - Z;
												Ql(
													l,
													Bt,
													me.top + (L === ce ? ye : 0) + ae,
													me.left + (L === ce ? 0 : ye) + ae,
												);
											} else Ql(l, Xt);
										lr(Ot || _e ? Ue : ze),
											(Ke && rt < 1 && Ot) ||
												se(Gt + (rt === 1 && !_e ? ge : 0));
									}
								}
								x && !K.tween && !Se && !Ps && we.restart(!0),
									a &&
										(pt || (S && rt && (rt < 1 || !Fo))) &&
										us(a.targets).forEach(function (mn) {
											return mn.classList[Ot || S ? "add" : "remove"](
												a.className,
											);
										}),
									o && !F && !A && o(T),
									Pt && !Se
										? (F &&
												(Ut &&
													(wt === "complete"
														? n.pause().totalProgress(1)
														: wt === "reset"
															? n.restart(!0).pause()
															: wt === "restart"
																? n.restart(!0)
																: n[wt]()),
												o && o(T)),
											(pt || !Fo) &&
												(u && pt && Bo(T, u),
												j[vt] && Bo(T, j[vt]),
												S && (rt === 1 ? T.kill(!1, 1) : (j[vt] = 0)),
												pt || ((vt = rt === 1 ? 1 : 3), j[vt] && Bo(T, j[vt]))),
											D &&
												!Ot &&
												Math.abs(T.getVelocity()) > (Rr(D) ? D : 2500) &&
												(Dr(T.callbackAnimation),
												dt
													? dt.progress(1)
													: Dr(n, wt === "reverse" ? 1 : !rt, 1)))
										: F && o && !Se && o(T);
							}
							if (Qe) {
								var be = M ? (Q / M.duration()) * (M._caScrollDist || 0) : Q;
								Mi(be + (C._isFlipped ? 1 : 0)), Qe(be);
							}
							at && at((-Q / M.duration()) * (M._caScrollDist || 0));
						}
					}),
					(T.enable = function (A, V) {
						T.enabled ||
							((T.enabled = !0),
							de(O, "resize", Nr),
							Y || de(O, "scroll", Un),
							nt && de(r, "refreshInit", nt),
							A !== !1 && ((T.progress = J = 0), (et = W = N = U())),
							V !== !1 && T.refresh());
					}),
					(T.getTween = function (A) {
						return A && K ? K.tween : dt;
					}),
					(T.setPositions = function (A, V, z, Q) {
						if (M) {
							var ct = M.scrollTrigger,
								rt = M.duration(),
								_t = ct.end - ct.start;
							(A = ct.start + (_t * A) / rt), (V = ct.start + (_t * V) / rt);
						}
						T.refresh(
							!1,
							!1,
							{
								start: Hl(A, z && !!T._startClamp),
								end: Hl(V, z && !!T._endClamp),
							},
							Q,
						),
							T.update();
					}),
					(T.adjustPinSpacing = function (A) {
						if (At && A) {
							var V = At.indexOf(L.d) + 1;
							(At[V] = parseFloat(At[V]) + A + ae),
								(At[1] = parseFloat(At[1]) + A + ae),
								lr(At);
						}
					}),
					(T.disable = function (A, V) {
						if (
							T.enabled &&
							(A !== !1 && T.revert(!0, !0),
							(T.enabled = T.isActive = !1),
							V || (dt && dt.pause()),
							(qe = 0),
							lt && (lt.uncache = 1),
							nt && fe(r, "refreshInit", nt),
							we && (we.pause(), K.tween && K.tween.kill() && (K.tween = 0)),
							!Y)
						) {
							for (var z = yt.length; z--; )
								if (yt[z].scroller === O && yt[z] !== T) return;
							fe(O, "resize", Nr), Y || fe(O, "scroll", Un);
						}
					}),
					(T.kill = function (A, V) {
						T.disable(A, V), dt && !V && dt.kill(), c && delete va[c];
						var z = yt.indexOf(T);
						z >= 0 && yt.splice(z, 1),
							z === Le && js > 0 && Le--,
							(z = 0),
							yt.forEach(function (Q) {
								return Q.scroller === T.scroller && (z = 1);
							}),
							z || Ie || (T.scroll.rec = 0),
							n &&
								((n.scrollTrigger = null),
								A && n.revert({ kill: !1 }),
								V || n.kill()),
							st &&
								[st, Et, C, Mt].forEach(function (Q) {
									return Q.parentNode && Q.parentNode.removeChild(Q);
								}),
							Zr === T && (Zr = 0),
							l &&
								(lt && (lt.uncache = 1),
								(z = 0),
								yt.forEach(function (Q) {
									return Q.pin === l && z++;
								}),
								z || (lt.spacer = 0)),
							i.onKill && i.onKill(T);
					}),
					yt.push(T),
					T.enable(!1, !1),
					v && v(T),
					n && n.add && !kt)
				) {
					var B = T.update;
					(T.update = function () {
						(T.update = B), Z || ot || T.refresh();
					}),
						it.delayedCall(0.01, T.update),
						(kt = 0.01),
						(Z = ot = 0);
				} else T.refresh();
				l && hh();
			}),
			(r.register = function (i) {
				return (
					Zn ||
						((it = i || zu()),
						Fu() && window.document && r.enable(),
						(Zn = Lr)),
					Zn
				);
			}),
			(r.defaults = function (i) {
				if (i) for (var n in i) Ls[n] = i[n];
				return Ls;
			}),
			(r.disable = function (i, n) {
				(Lr = 0),
					yt.forEach(function (o) {
						return o[n ? "kill" : "disable"](i);
					}),
					fe(bt, "wheel", Un),
					fe($t, "scroll", Un),
					clearInterval(Cs),
					fe($t, "touchcancel", Ei),
					fe(Bt, "touchstart", Ei),
					ks(fe, $t, "pointerdown,touchstart,mousedown", Xl),
					ks(fe, $t, "pointerup,touchend,mouseup", $l),
					ao.kill(),
					Es(fe);
				for (var s = 0; s < xt.length; s += 3)
					As(fe, xt[s], xt[s + 1]), As(fe, xt[s], xt[s + 2]);
			}),
			(r.enable = function () {
				if (
					((bt = window),
					($t = document),
					(xi = $t.documentElement),
					(Bt = $t.body),
					it &&
						((us = it.utils.toArray),
						(Wr = it.utils.clamp),
						(ma = it.core.context || Ei),
						(No = it.core.suppressOverwrites || Ei),
						(Wa = bt.history.scrollRestoration || "auto"),
						(xa = bt.pageYOffset),
						it.core.globals("ScrollTrigger", r),
						Bt))
				) {
					(Lr = 1),
						(ar = document.createElement("div")),
						(ar.style.height = "100vh"),
						(ar.style.position = "absolute"),
						Wu(),
						oh(),
						ee.register(it),
						(r.isTouch = ee.isTouch),
						(Zi =
							ee.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(_a = ee.isTouch === 1),
						de(bt, "wheel", Un),
						(Au = [bt, $t, xi, Bt]),
						it.matchMedia
							? ((r.matchMedia = function (c) {
									var u = it.matchMedia(),
										f;
									for (f in c) u.add(f, c[f]);
									return u;
								}),
								it.addEventListener("matchMediaInit", function () {
									return Ja();
								}),
								it.addEventListener("matchMediaRevert", function () {
									return Vu();
								}),
								it.addEventListener("matchMedia", function () {
									Dn(0, 1), Yn("matchMedia");
								}),
								it.matchMedia("(orientation: portrait)", function () {
									return qo(), qo;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						qo(),
						de($t, "scroll", Un);
					var i = Bt.style,
						n = i.borderTopStyle,
						s = it.core.Animation.prototype,
						o,
						a;
					for (
						s.revert ||
							Object.defineProperty(s, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							i.borderTopStyle = "solid",
							o = Hi(Bt),
							ce.m = Math.round(o.top + ce.sc()) || 0,
							Ne.m = Math.round(o.left + Ne.sc()) || 0,
							n ? (i.borderTopStyle = n) : i.removeProperty("border-top-style"),
							Cs = setInterval(Wl, 250),
							it.delayedCall(0.5, function () {
								return (Ps = 0);
							}),
							de($t, "touchcancel", Ei),
							de(Bt, "touchstart", Ei),
							ks(de, $t, "pointerdown,touchstart,mousedown", Xl),
							ks(de, $t, "pointerup,touchend,mouseup", $l),
							ga = it.utils.checkPrefix("transform"),
							Ws.push(ga),
							Zn = Me(),
							ao = it.delayedCall(0.2, Dn).pause(),
							Jn = [
								$t,
								"visibilitychange",
								function () {
									var c = bt.innerWidth,
										u = bt.innerHeight;
									$t.hidden
										? ((Bl = c), (ql = u))
										: (Bl !== c || ql !== u) && Nr();
								},
								$t,
								"DOMContentLoaded",
								Dn,
								bt,
								"load",
								Dn,
								bt,
								"resize",
								Nr,
							],
							Es(de),
							yt.forEach(function (c) {
								return c.enable(0, 1);
							}),
							a = 0;
						a < xt.length;
						a += 3
					)
						As(fe, xt[a], xt[a + 1]), As(fe, xt[a], xt[a + 2]);
				}
			}),
			(r.config = function (i) {
				"limitCallbacks" in i && (Fo = !!i.limitCallbacks);
				var n = i.syncInterval;
				(n && clearInterval(Cs)) || ((Cs = n) && setInterval(Wl, n)),
					"ignoreMobileResize" in i &&
						(_a = r.isTouch === 1 && i.ignoreMobileResize),
					"autoRefreshEvents" in i &&
						(Es(fe) || Es(de, i.autoRefreshEvents || "none"),
						(Iu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(r.scrollerProxy = function (i, n) {
				var s = Ye(i),
					o = xt.indexOf(s),
					a = Bn(s);
				~o && xt.splice(o, a ? 6 : 2),
					n && (a ? Ni.unshift(bt, n, Bt, n, xi, n) : Ni.unshift(s, n));
			}),
			(r.clearMatchMedia = function (i) {
				yt.forEach(function (n) {
					return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
				});
			}),
			(r.isInViewport = function (i, n, s) {
				var o = (ti(i) ? Ye(i) : i).getBoundingClientRect(),
					a = o[s ? An : Ln] * n || 0;
				return s
					? o.right - a > 0 && o.left + a < bt.innerWidth
					: o.bottom - a > 0 && o.top + a < bt.innerHeight;
			}),
			(r.positionInViewport = function (i, n, s) {
				ti(i) && (i = Ye(i));
				var o = i.getBoundingClientRect(),
					a = o[s ? An : Ln],
					c =
						n == null
							? a / 2
							: n in uo
								? uo[n] * a
								: ~n.indexOf("%")
									? (parseFloat(n) * a) / 100
									: parseFloat(n) || 0;
				return s ? (o.left + c) / bt.innerWidth : (o.top + c) / bt.innerHeight;
			}),
			(r.killAll = function (i) {
				if (
					(yt.slice(0).forEach(function (s) {
						return s.vars.id !== "ScrollSmoother" && s.kill();
					}),
					i !== !0)
				) {
					var n = qn.killAll || [];
					(qn = {}),
						n.forEach(function (s) {
							return s();
						});
				}
			}),
			r
		);
	})();
mt.version = "3.12.5";
mt.saveStyles = function (r) {
	return r
		? us(r).forEach(function (t) {
				if (t && t.style) {
					var e = Je.indexOf(t);
					e >= 0 && Je.splice(e, 5),
						Je.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							it.core.getCache(t),
							ma(),
						);
				}
			})
		: Je;
};
mt.revert = function (r, t) {
	return Ja(!r, t);
};
mt.create = function (r, t) {
	return new mt(r, t);
};
mt.refresh = function (r) {
	return r ? Nr() : (Zn || mt.register()) && Dn(!0);
};
mt.update = function (r) {
	return ++xt.cache && ji(r === !0 ? 2 : 0);
};
mt.clearScrollMemory = ju;
mt.maxScroll = function (r, t) {
	return Ii(r, t ? Ne : ce);
};
mt.getScrollFunc = function (r, t) {
	return hn(Ye(r), t ? Ne : ce);
};
mt.getById = function (r) {
	return va[r];
};
mt.getAll = function () {
	return yt.filter(function (r) {
		return r.vars.id !== "ScrollSmoother";
	});
};
mt.isScrolling = function () {
	return !!gi;
};
mt.snapDirectional = Za;
mt.addEventListener = function (r, t) {
	var e = qn[r] || (qn[r] = []);
	~e.indexOf(t) || e.push(t);
};
mt.removeEventListener = function (r, t) {
	var e = qn[r],
		i = e && e.indexOf(t);
	i >= 0 && e.splice(i, 1);
};
mt.batch = function (r, t) {
	var e = [],
		i = {},
		n = t.interval || 0.016,
		s = t.batchMax || 1e9,
		o = function (u, f) {
			var d = [],
				p = [],
				l = it
					.delayedCall(n, function () {
						f(d, p), (d = []), (p = []);
					})
					.pause();
			return function (g) {
				d.length || l.restart(!0),
					d.push(g.trigger),
					p.push(g),
					s <= d.length && l.progress(1);
			};
		},
		a;
	for (a in t)
		i[a] =
			a.substr(0, 2) === "on" && Fe(t[a]) && a !== "onRefreshInit"
				? o(a, t[a])
				: t[a];
	return (
		Fe(s) &&
			((s = s()),
			de(mt, "refresh", function () {
				return (s = t.batchMax());
			})),
		us(r).forEach(function (c) {
			var u = {};
			for (a in i) u[a] = i[a];
			(u.trigger = c), e.push(mt.create(u));
		}),
		e
	);
};
var Jl = function (t, e, i, n) {
		return (
			e > n ? t(n) : e < 0 && t(0),
			i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
		);
	},
	Ho = function r(t, e) {
		e === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					e === !0
						? "auto"
						: e
							? "pan-" + e + (ee.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === xi && r(Bt, e);
	},
	Fs = { auto: 1, scroll: 1 },
	yh = function (t) {
		var e = t.event,
			i = t.target,
			n = t.axis,
			s = (e.changedTouches ? e.changedTouches[0] : e).target,
			o = s._gsap || it.core.getCache(s),
			a = Me(),
			c;
		if (!o._isScrollT || a - o._isScrollT > 2e3) {
			for (
				;
				s &&
				s !== Bt &&
				((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
					!(Fs[(c = di(s)).overflowY] || Fs[c.overflowX]));

			)
				s = s.parentNode;
			(o._isScroll =
				s &&
				s !== i &&
				!Bn(s) &&
				(Fs[(c = di(s)).overflowY] || Fs[c.overflowX])),
				(o._isScrollT = a);
		}
		(o._isScroll || n === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
	},
	Uu = function (t, e, i, n) {
		return ee.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (n = n && yh),
			onPress: n,
			onDrag: n,
			onScroll: n,
			onEnable: function () {
				return i && de($t, ee.eventTypes[0], ec, !1, !0);
			},
			onDisable: function () {
				return fe($t, ee.eventTypes[0], ec, !0);
			},
		});
	},
	vh = /(input|label|select|textarea)/i,
	tc,
	ec = function (t) {
		var e = vh.test(t.target.tagName);
		(e || tc) && ((t._gsapAllow = !0), (tc = e));
	},
	xh = function (t) {
		Sn(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var e = t,
			i = e.normalizeScrollX,
			n = e.momentum,
			s = e.allowNestedScroll,
			o = e.onRelease,
			a,
			c,
			u = Ye(t.target) || xi,
			f = it.core.globals().ScrollSmoother,
			d = f && f.get(),
			p =
				Zi &&
				((t.content && Ye(t.content)) ||
					(d && t.content !== !1 && !d.smooth() && d.content())),
			l = hn(u, ce),
			g = hn(u, Ne),
			h = 1,
			m =
				(ee.isTouch && bt.visualViewport
					? bt.visualViewport.scale * bt.visualViewport.width
					: bt.outerWidth) / bt.innerWidth,
			_ = 0,
			y = Fe(n)
				? function () {
						return n(a);
					}
				: function () {
						return n || 2.8;
					},
			S,
			x,
			b = Uu(u, t.type, !0, s),
			P = function () {
				return (x = !1);
			},
			M = Ei,
			D = Ei,
			E = function () {
				(c = Ii(u, ce)),
					(D = Wr(Zi ? 1 : 0, c)),
					i && (M = Wr(0, Ii(u, Ne))),
					(S = In);
			},
			L = function () {
				(p._gsap.y = Ir(parseFloat(p._gsap.y) + l.offset) + "px"),
					(p.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(p._gsap.y) +
						", 0, 1)"),
					(l.offset = l.cacheID = 0);
			},
			F = function () {
				if (x) {
					requestAnimationFrame(P);
					var tt = Ir(a.deltaY / 2),
						gt = D(l.v - tt);
					if (p && gt !== l.v + l.offset) {
						l.offset = gt - l.v;
						var T = Ir((parseFloat(p && p._gsap.y) || 0) - l.offset);
						(p.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							T +
							", 0, 1)"),
							(p._gsap.y = T + "px"),
							(l.cacheID = xt.cache),
							ji();
					}
					return !0;
				}
				l.offset && L(), (x = !0);
			},
			O,
			R,
			Y,
			H,
			j = function () {
				E(),
					O.isActive() &&
						O.vars.scrollY > c &&
						(l() > c ? O.progress(1) && l(c) : O.resetTo("scrollY", c));
			};
		return (
			p && it.set(p, { y: "+=0" }),
			(t.ignoreCheck = function (X) {
				return (
					(Zi && X.type === "touchmove" && F()) ||
					(h > 1.05 && X.type !== "touchstart") ||
					a.isGesturing ||
					(X.touches && X.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				x = !1;
				var X = h;
				(h = Ir(((bt.visualViewport && bt.visualViewport.scale) || 1) / m)),
					O.pause(),
					X !== h && Ho(u, h > 1.01 ? !0 : i ? !1 : "x"),
					(R = g()),
					(Y = l()),
					E(),
					(S = In);
			}),
			(t.onRelease = t.onGestureStart =
				function (X, tt) {
					if ((l.offset && L(), !tt)) H.restart(!0);
					else {
						xt.cache++;
						var gt = y(),
							T,
							nt;
						i &&
							((T = g()),
							(nt = T + (gt * 0.05 * -X.velocityX) / 0.227),
							(gt *= Jl(g, T, nt, Ii(u, Ne))),
							(O.vars.scrollX = M(nt))),
							(T = l()),
							(nt = T + (gt * 0.05 * -X.velocityY) / 0.227),
							(gt *= Jl(l, T, nt, Ii(u, ce))),
							(O.vars.scrollY = D(nt)),
							O.invalidate().duration(gt).play(0.01),
							((Zi && O.vars.scrollY >= c) || T >= c - 1) &&
								it.to({}, { onUpdate: j, duration: gt });
					}
					o && o(X);
				}),
			(t.onWheel = function () {
				O._ts && O.pause(), Me() - _ > 1e3 && ((S = 0), (_ = Me()));
			}),
			(t.onChange = function (X, tt, gt, T, nt) {
				if (
					(In !== S && E(),
					tt && i && g(M(T[2] === tt ? R + (X.startX - X.x) : g() + tt - T[1])),
					gt)
				) {
					l.offset && L();
					var ut = nt[2] === gt,
						I = ut ? Y + X.startY - X.y : l() + gt - nt[1],
						N = D(I);
					ut && I !== N && (Y += N - I), l(N);
				}
				(gt || tt) && ji();
			}),
			(t.onEnable = function () {
				Ho(u, i ? !1 : "x"),
					mt.addEventListener("refresh", j),
					de(bt, "resize", j),
					l.smooth &&
						((l.target.style.scrollBehavior = "auto"),
						(l.smooth = g.smooth = !1)),
					b.enable();
			}),
			(t.onDisable = function () {
				Ho(u, !0),
					fe(bt, "resize", j),
					mt.removeEventListener("refresh", j),
					b.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(a = new ee(t)),
			(a.iOS = Zi),
			Zi && !l() && l(1),
			Zi && it.ticker.add(Ei),
			(H = a._dc),
			(O = it.to(a, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: i ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: Gu(l, l(), function () {
						return O.pause();
					}),
				},
				onUpdate: ji,
				onComplete: H.vars.onComplete,
			})),
			a
		);
	};
mt.sort = function (r) {
	return yt.sort(
		r ||
			function (t, e) {
				return (
					(t.vars.refreshPriority || 0) * -1e6 +
					t.start -
					(e.start + (e.vars.refreshPriority || 0) * -1e6)
				);
			},
	);
};
mt.observe = function (r) {
	return new ee(r);
};
mt.normalizeScroll = function (r) {
	if (typeof r > "u") return Ae;
	if (r === !0 && Ae) return Ae.enable();
	if (r === !1) {
		Ae && Ae.kill(), (Ae = r);
		return;
	}
	var t = r instanceof ee ? r : xh(r);
	return Ae && Ae.target === t.target && Ae.kill(), Bn(t.target) && (Ae = t), t;
};
mt.core = {
	_getVelocityProp: pa,
	_inputObserver: Uu,
	_scrollers: xt,
	_proxies: Ni,
	bridge: {
		ss: function () {
			gi || Yn("scrollStart"), (gi = Me());
		},
		ref: function () {
			return Se;
		},
	},
};
zu() && it.registerPlugin(mt);
$.registerPlugin(mt);
class wh {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = $.timeline({
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
		const e = t.querySelector(".js-compute-section");
		e && ((this.DOM = {}), (this.DOM.section = e), this.setup());
	}
}
function tl(r) {
	return typeof r == "number";
}
function ba(r) {
	return typeof r == "string";
}
function el(r) {
	return typeof r == "boolean";
}
function ic(r) {
	return Object.prototype.toString.call(r) === "[object Object]";
}
function Yt(r) {
	return Math.abs(r);
}
function il(r) {
	return Math.sign(r);
}
function Jr(r, t) {
	return Yt(r - t);
}
function bh(r, t) {
	if (r === 0 || t === 0 || Yt(r) <= Yt(t)) return 0;
	const e = Jr(Yt(r), Yt(t));
	return Yt(e / r);
}
function ds(r) {
	return hs(r).map(Number);
}
function Ti(r) {
	return r[vs(r)];
}
function vs(r) {
	return Math.max(0, r.length - 1);
}
function nl(r, t) {
	return t === vs(r);
}
function nc(r, t = 0) {
	return Array.from(Array(r), (e, i) => t + i);
}
function hs(r) {
	return Object.keys(r);
}
function Ku(r, t) {
	return [r, t].reduce(
		(e, i) => (
			hs(i).forEach((n) => {
				const s = e[n],
					o = i[n],
					a = ic(s) && ic(o);
				e[n] = a ? Ku(s, o) : o;
			}),
			e
		),
		{},
	);
}
function Qu(r, t) {
	return typeof t.MouseEvent < "u" && r instanceof t.MouseEvent;
}
function Th(r, t) {
	const e = { start: i, center: n, end: s };
	function i() {
		return 0;
	}
	function n(c) {
		return s(c) / 2;
	}
	function s(c) {
		return t - c;
	}
	function o(c, u) {
		return ba(r) ? e[r](c) : r(t, c, u);
	}
	return { measure: o };
}
function ps() {
	let r = [];
	function t(n, s, o, a = { passive: !0 }) {
		let c;
		if ("addEventListener" in n)
			n.addEventListener(s, o, a), (c = () => n.removeEventListener(s, o, a));
		else {
			const u = n;
			u.addListener(o), (c = () => u.removeListener(o));
		}
		return r.push(c), i;
	}
	function e() {
		r = r.filter((n) => n());
	}
	const i = { add: t, clear: e };
	return i;
}
function Sh(r, t, e, i) {
	const n = ps(),
		s = 1e3 / 60;
	let o = null,
		a = 0,
		c = 0;
	function u() {
		n.add(r, "visibilitychange", () => {
			r.hidden && g();
		});
	}
	function f() {
		l(), n.clear();
	}
	function d(m) {
		if (!c) return;
		o || (o = m);
		const _ = m - o;
		for (o = m, a += _; a >= s; ) e(), (a -= s);
		const y = Yt(a / s);
		i(y), c && t.requestAnimationFrame(d);
	}
	function p() {
		c || (c = t.requestAnimationFrame(d));
	}
	function l() {
		t.cancelAnimationFrame(c), (o = null), (a = 0), (c = 0);
	}
	function g() {
		(o = null), (a = 0);
	}
	return { init: u, destroy: f, start: p, stop: l, update: e, render: i };
}
function Mh(r, t) {
	const e = r === "y" ? "y" : "x",
		i = r === "y" ? "x" : "y",
		n = a(),
		s = c();
	function o(f) {
		const { width: d, height: p } = f;
		return e === "x" ? d : p;
	}
	function a() {
		return e === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function c() {
		return e === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: e, cross: i, startEdge: n, endEdge: s, measureSize: o };
}
function Hn(r = 0, t = 0) {
	const e = Yt(r - t);
	function i(u) {
		return u < r;
	}
	function n(u) {
		return u > t;
	}
	function s(u) {
		return i(u) || n(u);
	}
	function o(u) {
		return s(u) ? (i(u) ? r : t) : u;
	}
	function a(u) {
		return e ? u - e * Math.ceil((u - t) / e) : u;
	}
	return {
		length: e,
		max: t,
		min: r,
		constrain: o,
		reachedAny: s,
		reachedMax: n,
		reachedMin: i,
		removeOffset: a,
	};
}
function Zu(r, t, e) {
	const { constrain: i } = Hn(0, r),
		n = r + 1;
	let s = o(t);
	function o(p) {
		return e ? Yt((n + p) % n) : i(p);
	}
	function a() {
		return s;
	}
	function c(p) {
		return (s = o(p)), d;
	}
	function u(p) {
		return f().set(a() + p);
	}
	function f() {
		return Zu(r, a(), e);
	}
	const d = { get: a, set: c, add: u, clone: f };
	return d;
}
function Oh(r) {
	const t = r === "rtl" ? -1 : 1;
	function e(n) {
		return n * t;
	}
	return { apply: e };
}
function Dh(r, t, e, i, n, s, o, a, c, u, f, d, p, l, g, h, m, _, y, S) {
	const { cross: x } = r,
		b = ["INPUT", "SELECT", "TEXTAREA"],
		P = { passive: !1 },
		M = ps(),
		D = ps(),
		E = Hn(50, 225).constrain(g.measure(20)),
		L = { mouse: 300, touch: 400 },
		F = { mouse: 500, touch: 600 },
		O = h ? 43 : 25;
	let R = !1,
		Y = 0,
		H = 0,
		j = !1,
		X = !1,
		tt = !1,
		gt = !1;
	function T(W) {
		if (!S) return;
		function Z(st) {
			(el(S) || S(W, st)) && J(st);
		}
		const ot = e;
		M.add(ot, "dragstart", (st) => st.preventDefault(), P)
			.add(ot, "touchmove", () => {}, P)
			.add(ot, "touchend", () => {})
			.add(ot, "touchstart", Z)
			.add(ot, "mousedown", Z)
			.add(ot, "touchcancel", K)
			.add(ot, "contextmenu", K)
			.add(ot, "click", lt, !0);
	}
	function nt() {
		M.clear(), D.clear();
	}
	function ut() {
		const W = gt ? i : e;
		D.add(W, "touchmove", U, P)
			.add(W, "touchend", K)
			.add(W, "mousemove", U, P)
			.add(W, "mouseup", K);
	}
	function I(W) {
		const Z = W.nodeName || "";
		return b.includes(Z);
	}
	function N() {
		return (h ? F : L)[gt ? "mouse" : "touch"];
	}
	function G(W, Z) {
		const ot = p.add(il(W) * -1),
			st = d.byDistance(W, !h).distance;
		return h || Yt(W) < E
			? st
			: _ && Z
				? st * 0.5
				: d.byIndex(ot.get(), 0).distance;
	}
	function J(W) {
		const Z = Qu(W, n);
		(gt = Z),
			!(Z && W.button !== 0) &&
				(I(W.target) ||
					((tt = h && Z && !W.buttons && R),
					(R = Jr(s.get(), a.get()) >= 2),
					(j = !0),
					o.pointerDown(W),
					f.useFriction(0).useDuration(0),
					s.set(a),
					ut(),
					(Y = o.readPoint(W)),
					(H = o.readPoint(W, x)),
					l.emit("pointerDown")));
	}
	function U(W) {
		const Z = o.readPoint(W),
			ot = o.readPoint(W, x),
			st = Jr(Z, Y),
			Et = Jr(ot, H);
		if (!X && !gt && (!W.cancelable || ((X = st > Et), !X))) return K(W);
		const C = o.pointerMove(W);
		st > m && (tt = !0),
			f.useFriction(0.3).useDuration(1),
			c.start(),
			s.add(t.apply(C)),
			W.preventDefault();
	}
	function K(W) {
		const ot = d.byDistance(0, !1).index !== p.get(),
			st = o.pointerUp(W) * N(),
			Et = G(t.apply(st), ot),
			C = bh(st, Et),
			Mt = O - 10 * C,
			Ht = y + C / 50;
		(X = !1),
			(j = !1),
			D.clear(),
			f.useDuration(Mt).useFriction(Ht),
			u.distance(Et, !h),
			(gt = !1),
			l.emit("pointerUp");
	}
	function lt(W) {
		tt && (W.stopPropagation(), W.preventDefault());
	}
	function ft() {
		return j;
	}
	return { init: T, pointerDown: ft, destroy: nt };
}
function Ch(r, t) {
	let i, n;
	function s(d) {
		return d.timeStamp;
	}
	function o(d, p) {
		const g = `client${(p || r.scroll) === "x" ? "X" : "Y"}`;
		return (Qu(d, t) ? d : d.touches[0])[g];
	}
	function a(d) {
		return (i = d), (n = d), o(d);
	}
	function c(d) {
		const p = o(d) - o(n),
			l = s(d) - s(i) > 170;
		return (n = d), l && (i = d), p;
	}
	function u(d) {
		if (!i || !n) return 0;
		const p = o(n) - o(i),
			l = s(d) - s(i),
			g = s(d) - s(n) > 170,
			h = p / l;
		return l && !g && Yt(h) > 0.1 ? h : 0;
	}
	return { pointerDown: a, pointerMove: c, pointerUp: u, readPoint: o };
}
function Ph() {
	function r(e) {
		const { offsetTop: i, offsetLeft: n, offsetWidth: s, offsetHeight: o } = e;
		return {
			top: i,
			right: n + s,
			bottom: i + o,
			left: n,
			width: s,
			height: o,
		};
	}
	return { measure: r };
}
function Eh(r) {
	function t(i) {
		return r * (i / 100);
	}
	return { measure: t };
}
function kh(r, t, e, i, n, s, o) {
	let a,
		c,
		u = [],
		f = !1;
	function d(h) {
		return n.measureSize(o.measure(h));
	}
	function p(h) {
		if (!s) return;
		(c = d(r)), (u = i.map(d));
		function m(y) {
			for (const S of y) {
				const x = S.target === r,
					b = i.indexOf(S.target),
					P = x ? c : u[b],
					M = d(x ? r : i[b]);
				if (Yt(M - P) >= 0.5) {
					e.requestAnimationFrame(() => {
						h.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(a = new ResizeObserver((y) => {
			f || ((el(s) || s(h, y)) && m(y));
		})),
			[r].concat(i).forEach((y) => a.observe(y));
	}
	function l() {
		a && a.disconnect(), (f = !0);
	}
	return { init: p, destroy: l };
}
function Ah(r, t, e, i, n) {
	let s = 0,
		o = 0,
		a = i,
		c = n,
		u = r.get(),
		f = 0;
	function d() {
		const b = e.get() - r.get(),
			P = !a;
		let M = 0;
		return (
			P
				? ((s = 0), r.set(e), (M = b))
				: ((s += b / a), (s *= c), (u += s), r.add(s), (M = u - f)),
			(o = il(M)),
			(f = u),
			x
		);
	}
	function p() {
		const b = e.get() - t.get();
		return Yt(b) < 0.001;
	}
	function l() {
		return a;
	}
	function g() {
		return o;
	}
	function h() {
		return s;
	}
	function m() {
		return y(i);
	}
	function _() {
		return S(n);
	}
	function y(b) {
		return (a = b), x;
	}
	function S(b) {
		return (c = b), x;
	}
	const x = {
		direction: g,
		duration: l,
		velocity: h,
		seek: d,
		settled: p,
		useBaseFriction: _,
		useBaseDuration: m,
		useFriction: S,
		useDuration: y,
	};
	return x;
}
function Lh(r, t, e, i, n) {
	const s = n.measure(10),
		o = n.measure(50),
		a = Hn(0.1, 0.99);
	let c = !1;
	function u() {
		return !(c || !r.reachedAny(e.get()) || !r.reachedAny(t.get()));
	}
	function f(l) {
		if (!u()) return;
		const g = r.reachedMin(t.get()) ? "min" : "max",
			h = Yt(r[g] - t.get()),
			m = e.get() - t.get(),
			_ = a.constrain(h / o);
		e.subtract(m * _),
			!l &&
				Yt(m) < s &&
				(e.set(r.constrain(e.get())), i.useDuration(25).useBaseFriction());
	}
	function d(l) {
		c = !l;
	}
	return { constrain: f, toggleActive: d };
}
function Ih(r, t, e, i, n) {
	const s = Hn(-t + r, 0),
		o = d(),
		a = f(),
		c = p();
	function u(g, h) {
		return Jr(g, h) < 1;
	}
	function f() {
		const g = o[0],
			h = Ti(o),
			m = o.lastIndexOf(g),
			_ = o.indexOf(h) + 1;
		return Hn(m, _);
	}
	function d() {
		return e
			.map((g, h) => {
				const { min: m, max: _ } = s,
					y = s.constrain(g),
					S = !h,
					x = nl(e, h);
				return S ? _ : x || u(m, y) ? m : u(_, y) ? _ : y;
			})
			.map((g) => parseFloat(g.toFixed(3)));
	}
	function p() {
		if (t <= r + n) return [s.max];
		if (i === "keepSnaps") return o;
		const { min: g, max: h } = a;
		return o.slice(g, h);
	}
	return { snapsContained: c, scrollContainLimit: a };
}
function Rh(r, t, e) {
	const i = t[0],
		n = e ? i - r : Ti(t);
	return { limit: Hn(n, i) };
}
function Nh(r, t, e, i) {
	const s = t.min + 0.1,
		o = t.max + 0.1,
		{ reachedMin: a, reachedMax: c } = Hn(s, o);
	function u(p) {
		return p === 1 ? c(e.get()) : p === -1 ? a(e.get()) : !1;
	}
	function f(p) {
		if (!u(p)) return;
		const l = r * (p * -1);
		i.forEach((g) => g.add(l));
	}
	return { loop: f };
}
function Fh(r) {
	const { max: t, length: e } = r;
	function i(s) {
		const o = s - t;
		return e ? o / -e : 0;
	}
	return { get: i };
}
function zh(r, t, e, i, n) {
	const { startEdge: s, endEdge: o } = r,
		{ groupSlides: a } = n,
		c = d().map(t.measure),
		u = p(),
		f = l();
	function d() {
		return a(i)
			.map((h) => Ti(h)[o] - h[0][s])
			.map(Yt);
	}
	function p() {
		return i.map((h) => e[s] - h[s]).map((h) => -Yt(h));
	}
	function l() {
		return a(u)
			.map((h) => h[0])
			.map((h, m) => h + c[m]);
	}
	return { snaps: u, snapsAligned: f };
}
function Bh(r, t, e, i, n, s) {
	const { groupSlides: o } = n,
		{ min: a, max: c } = i,
		u = f();
	function f() {
		const p = o(s),
			l = !r || t === "keepSnaps";
		return e.length === 1
			? [s]
			: l
				? p
				: p.slice(a, c).map((g, h, m) => {
						const _ = !h,
							y = nl(m, h);
						if (_) {
							const S = Ti(m[0]) + 1;
							return nc(S);
						}
						if (y) {
							const S = vs(s) - Ti(m)[0] + 1;
							return nc(S, Ti(m)[0]);
						}
						return g;
					});
	}
	return { slideRegistry: u };
}
function qh(r, t, e, i, n) {
	const { reachedAny: s, removeOffset: o, constrain: a } = i;
	function c(g) {
		return g.concat().sort((h, m) => Yt(h) - Yt(m))[0];
	}
	function u(g) {
		const h = r ? o(g) : a(g),
			m = t
				.map((y) => y - h)
				.map((y) => f(y, 0))
				.map((y, S) => ({ diff: y, index: S }))
				.sort((y, S) => Yt(y.diff) - Yt(S.diff)),
			{ index: _ } = m[0];
		return { index: _, distance: h };
	}
	function f(g, h) {
		const m = [g, g + e, g - e];
		if (!r) return m[0];
		if (!h) return c(m);
		const _ = m.filter((y) => il(y) === h);
		return _.length ? c(_) : Ti(m) - e;
	}
	function d(g, h) {
		const m = t[g] - n.get(),
			_ = f(m, h);
		return { index: g, distance: _ };
	}
	function p(g, h) {
		const m = n.get() + g,
			{ index: _, distance: y } = u(m),
			S = !r && s(m);
		if (!h || S) return { index: _, distance: g };
		const x = t[_] - y,
			b = g + f(x, 0);
		return { index: _, distance: b };
	}
	return { byDistance: p, byIndex: d, shortcut: f };
}
function Yh(r, t, e, i, n, s, o) {
	function a(d) {
		const p = d.distance,
			l = d.index !== t.get();
		s.add(p),
			p && (i.duration() ? r.start() : (r.update(), r.render(1), r.update())),
			l && (e.set(t.get()), t.set(d.index), o.emit("select"));
	}
	function c(d, p) {
		const l = n.byDistance(d, p);
		a(l);
	}
	function u(d, p) {
		const l = t.clone().set(d),
			g = n.byIndex(l.get(), p);
		a(g);
	}
	return { distance: c, index: u };
}
function Hh(r, t, e, i, n, s) {
	let o = 0;
	function a() {
		s.add(document, "keydown", c, !1), t.forEach(u);
	}
	function c(d) {
		d.code === "Tab" && (o = new Date().getTime());
	}
	function u(d) {
		const p = () => {
			if (new Date().getTime() - o > 10) return;
			r.scrollLeft = 0;
			const h = t.indexOf(d),
				m = e.findIndex((_) => _.includes(h));
			tl(m) && (n.useDuration(0), i.index(m, 0));
		};
		s.add(d, "focus", p, { passive: !0, capture: !0 });
	}
	return { init: a };
}
function Us(r) {
	let t = r;
	function e() {
		return t;
	}
	function i(c) {
		t = o(c);
	}
	function n(c) {
		t += o(c);
	}
	function s(c) {
		t -= o(c);
	}
	function o(c) {
		return tl(c) ? c : c.get();
	}
	return { get: e, set: i, add: n, subtract: s };
}
function Ju(r, t, e) {
	const i = r.scroll === "x" ? o : a,
		n = e.style;
	let s = !1;
	function o(p) {
		return `translate3d(${p}px,0px,0px)`;
	}
	function a(p) {
		return `translate3d(0px,${p}px,0px)`;
	}
	function c(p) {
		s || (n.transform = i(t.apply(p)));
	}
	function u(p) {
		s = !p;
	}
	function f() {
		s ||
			((n.transform = ""),
			e.getAttribute("style") || e.removeAttribute("style"));
	}
	return { clear: f, to: c, toggleActive: u };
}
function Xh(r, t, e, i, n, s, o, a, c, u) {
	const d = ds(s),
		p = ds(s).reverse(),
		l = y().concat(S());
	function g(D, E) {
		return D.reduce((L, F) => L - s[F], E);
	}
	function h(D, E) {
		return D.reduce((L, F) => (g(L, E) > 0 ? L.concat([F]) : L), []);
	}
	function m(D) {
		return o.map((E, L) => ({
			start: E - n[L] + 0.5 + D,
			end: E + e - 0.5 + D,
		}));
	}
	function _(D, E, L) {
		const F = m(E);
		return D.map((O) => {
			const R = L ? 0 : -i,
				Y = L ? i : 0,
				H = L ? "end" : "start",
				j = F[O][H];
			return {
				index: O,
				loopPoint: j,
				slideLocation: Us(-1),
				translate: Ju(r, t, u[O]),
				target: () => (c.get() > j ? R : Y),
			};
		});
	}
	function y() {
		const D = a[0],
			E = h(p, D);
		return _(E, i, !1);
	}
	function S() {
		const D = e - a[0] - 1,
			E = h(d, D);
		return _(E, -i, !0);
	}
	function x() {
		return l.every(({ index: D }) => {
			const E = d.filter((L) => L !== D);
			return g(E, e) <= 0.1;
		});
	}
	function b() {
		l.forEach((D) => {
			const { target: E, translate: L, slideLocation: F } = D,
				O = E();
			O !== F.get() && (L.to(O), F.set(O));
		});
	}
	function P() {
		l.forEach((D) => D.translate.clear());
	}
	return { canLoop: x, clear: P, loop: b, loopPoints: l };
}
function $h(r, t, e) {
	let i,
		n = !1;
	function s(c) {
		if (!e) return;
		function u(f) {
			for (const d of f)
				if (d.type === "childList") {
					c.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(i = new MutationObserver((f) => {
			n || ((el(e) || e(c, f)) && u(f));
		})),
			i.observe(r, { childList: !0 });
	}
	function o() {
		i && i.disconnect(), (n = !0);
	}
	return { init: s, destroy: o };
}
function Vh(r, t, e, i) {
	const n = {};
	let s = null,
		o = null,
		a,
		c = !1;
	function u() {
		(a = new IntersectionObserver(
			(g) => {
				c ||
					(g.forEach((h) => {
						const m = t.indexOf(h.target);
						n[m] = h;
					}),
					(s = null),
					(o = null),
					e.emit("slidesInView"));
			},
			{ root: r.parentElement, threshold: i },
		)),
			t.forEach((g) => a.observe(g));
	}
	function f() {
		a && a.disconnect(), (c = !0);
	}
	function d(g) {
		return hs(n).reduce((h, m) => {
			const _ = parseInt(m),
				{ isIntersecting: y } = n[_];
			return ((g && y) || (!g && !y)) && h.push(_), h;
		}, []);
	}
	function p(g = !0) {
		if (g && s) return s;
		if (!g && o) return o;
		const h = d(g);
		return g && (s = h), g || (o = h), h;
	}
	return { init: u, destroy: f, get: p };
}
function jh(r, t, e, i, n, s) {
	const { measureSize: o, startEdge: a, endEdge: c } = r,
		u = e[0] && n,
		f = g(),
		d = h(),
		p = e.map(o),
		l = m();
	function g() {
		if (!u) return 0;
		const y = e[0];
		return Yt(t[a] - y[a]);
	}
	function h() {
		if (!u) return 0;
		const y = s.getComputedStyle(Ti(i));
		return parseFloat(y.getPropertyValue(`margin-${c}`));
	}
	function m() {
		return e
			.map((y, S, x) => {
				const b = !S,
					P = nl(x, S);
				return b ? p[S] + f : P ? p[S] + d : x[S + 1][a] - y[a];
			})
			.map(Yt);
	}
	return { slideSizes: p, slideSizesWithGaps: l, startGap: f, endGap: d };
}
function Wh(r, t, e, i, n, s, o, a, c, u) {
	const { startEdge: f, endEdge: d } = r,
		p = tl(i);
	function l(_, y) {
		return ds(_)
			.filter((S) => S % y === 0)
			.map((S) => _.slice(S, S + y));
	}
	function g(_) {
		return _.length
			? ds(_)
					.reduce((y, S) => {
						const x = Ti(y) || 0,
							b = x === 0,
							P = S === vs(_),
							M = s[f] - o[x][f],
							D = s[f] - o[S][d],
							E = !n && b ? t.apply(a) : 0,
							L = !n && P ? t.apply(c) : 0;
						return (
							Yt(D - L - (M + E)) > e + u && y.push(S), P && y.push(_.length), y
						);
					}, [])
					.map((y, S, x) => {
						const b = Math.max(x[S - 1] || 0);
						return _.slice(b, y);
					})
			: [];
	}
	function h(_) {
		return p ? l(_, i) : g(_);
	}
	return { groupSlides: h };
}
function Gh(r, t, e, i, n, s, o) {
	const {
			align: a,
			axis: c,
			direction: u,
			startIndex: f,
			loop: d,
			duration: p,
			dragFree: l,
			dragThreshold: g,
			inViewThreshold: h,
			slidesToScroll: m,
			skipSnaps: _,
			containScroll: y,
			watchResize: S,
			watchSlides: x,
			watchDrag: b,
		} = s,
		P = 2,
		M = Ph(),
		D = M.measure(t),
		E = e.map(M.measure),
		L = Oh(u),
		F = Mh(c, u),
		O = F.measureSize(D),
		R = Eh(O),
		Y = Th(a, O),
		H = !d && !!y,
		j = d || !!y,
		{
			slideSizes: X,
			slideSizesWithGaps: tt,
			startGap: gt,
			endGap: T,
		} = jh(F, D, E, e, j, n),
		nt = Wh(F, L, O, m, d, D, E, gt, T, P),
		{ snaps: ut, snapsAligned: I } = zh(F, Y, D, E, nt),
		N = -Ti(ut) + Ti(tt),
		{ snapsContained: G, scrollContainLimit: J } = Ih(O, N, I, y, P),
		U = H ? G : I,
		{ limit: K } = Rh(N, U, d),
		lt = Zu(vs(U), f, d),
		ft = lt.clone(),
		et = ds(e),
		W = ({
			dragHandler: Gt,
			scrollBody: ge,
			scrollBounds: mi,
			options: { loop: At },
		}) => {
			At || mi.constrain(Gt.pointerDown()), ge.seek();
		},
		Z = (
			{
				scrollBody: Gt,
				translate: ge,
				location: mi,
				offsetLocation: At,
				scrollLooper: Mi,
				slideLooper: Ke,
				dragHandler: Qe,
				animation: Be,
				eventHandler: Ze,
				options: { loop: Pe },
			},
			dt,
		) => {
			const xe = Gt.velocity(),
				Nt = Gt.settled();
			Nt && !Qe.pointerDown() && (Be.stop(), Ze.emit("settle")),
				Nt || Ze.emit("scroll"),
				At.set(mi.get() - xe + xe * dt),
				Pe && (Mi.loop(Gt.direction()), Ke.loop()),
				ge.to(At.get());
		},
		ot = Sh(
			i,
			n,
			() => W(se),
			(Gt) => Z(se, Gt),
		),
		st = 0.68,
		Et = U[lt.get()],
		C = Us(Et),
		Mt = Us(Et),
		Ht = Us(Et),
		ue = Ah(C, Mt, Ht, p, st),
		kt = qh(d, U, N, K, Ht),
		Rt = Yh(ot, lt, ft, ue, kt, Ht, o),
		Ue = Fh(K),
		ze = ps(),
		Xt = Vh(t, e, o, h),
		{ slideRegistry: Wt } = Bh(H, y, U, J, nt, et),
		Ct = Hh(r, e, Wt, Rt, ue, ze),
		se = {
			ownerDocument: i,
			ownerWindow: n,
			eventHandler: o,
			containerRect: D,
			slideRects: E,
			animation: ot,
			axis: F,
			direction: L,
			dragHandler: Dh(
				F,
				L,
				r,
				i,
				n,
				Ht,
				Ch(F, n),
				C,
				ot,
				Rt,
				ue,
				kt,
				lt,
				o,
				R,
				l,
				g,
				_,
				st,
				b,
			),
			eventStore: ze,
			percentOfView: R,
			index: lt,
			indexPrevious: ft,
			limit: K,
			location: C,
			offsetLocation: Mt,
			options: s,
			resizeHandler: kh(t, o, n, e, F, S, M),
			scrollBody: ue,
			scrollBounds: Lh(K, Mt, Ht, ue, R),
			scrollLooper: Nh(N, K, Mt, [C, Mt, Ht]),
			scrollProgress: Ue,
			scrollSnapList: U.map(Ue.get),
			scrollSnaps: U,
			scrollTarget: kt,
			scrollTo: Rt,
			slideLooper: Xh(F, L, O, N, X, tt, ut, U, Mt, e),
			slideFocus: Ct,
			slidesHandler: $h(t, o, x),
			slidesInView: Xt,
			slideIndexes: et,
			slideRegistry: Wt,
			slidesToScroll: nt,
			target: Ht,
			translate: Ju(F, L, t),
		};
	return se;
}
function Uh() {
	const r = {};
	let t;
	function e(c) {
		t = c;
	}
	function i(c) {
		return r[c] || [];
	}
	function n(c) {
		return i(c).forEach((u) => u(t, c)), a;
	}
	function s(c, u) {
		return (r[c] = i(c).concat([u])), a;
	}
	function o(c, u) {
		return (r[c] = i(c).filter((f) => f !== u)), a;
	}
	const a = { init: e, emit: n, off: o, on: s };
	return a;
}
const Kh = {
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
function Qh(r) {
	function t(s, o) {
		return Ku(s, o || {});
	}
	function e(s) {
		const o = s.breakpoints || {},
			a = hs(o)
				.filter((c) => r.matchMedia(c).matches)
				.map((c) => o[c])
				.reduce((c, u) => t(c, u), {});
		return t(s, a);
	}
	function i(s) {
		return s
			.map((o) => hs(o.breakpoints || {}))
			.reduce((o, a) => o.concat(a), [])
			.map(r.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: i };
}
function Zh(r) {
	let t = [];
	function e(s, o) {
		return (
			(t = o.filter(({ options: a }) => r.optionsAtMedia(a).active !== !1)),
			t.forEach((a) => a.init(s, r)),
			o.reduce((a, c) => Object.assign(a, { [c.name]: c }), {})
		);
	}
	function i() {
		t = t.filter((s) => s.destroy());
	}
	return { init: e, destroy: i };
}
function rl(r, t, e) {
	const i = r.ownerDocument,
		n = i.defaultView,
		s = Qh(n),
		o = Zh(s),
		a = ps(),
		c = Uh(),
		{ mergeOptions: u, optionsAtMedia: f, optionsMediaQueries: d } = s,
		{ on: p, off: l, emit: g } = c,
		h = F;
	let m = !1,
		_,
		y = u(Kh, rl.globalOptions),
		S = u(y),
		x = [],
		b,
		P,
		M;
	function D() {
		const { container: et, slides: W } = S;
		P = (ba(et) ? r.querySelector(et) : et) || r.children[0];
		const ot = ba(W) ? P.querySelectorAll(W) : W;
		M = [].slice.call(ot || P.children);
	}
	function E(et) {
		const W = Gh(r, P, M, i, n, et, c);
		if (et.loop && !W.slideLooper.canLoop()) {
			const Z = Object.assign({}, et, { loop: !1 });
			return E(Z);
		}
		return W;
	}
	function L(et, W) {
		m ||
			((y = u(y, et)),
			(S = f(y)),
			(x = W || x),
			D(),
			(_ = E(S)),
			d([y, ...x.map(({ options: Z }) => Z)]).forEach((Z) =>
				a.add(Z, "change", F),
			),
			S.active &&
				(_.translate.to(_.location.get()),
				_.animation.init(),
				_.slidesInView.init(),
				_.slideFocus.init(),
				_.eventHandler.init(ft),
				_.resizeHandler.init(ft),
				_.slidesHandler.init(ft),
				_.options.loop && _.slideLooper.loop(),
				P.offsetParent && M.length && _.dragHandler.init(ft),
				(b = o.init(ft, x))));
	}
	function F(et, W) {
		const Z = nt();
		O(), L(u({ startIndex: Z }, et), W), c.emit("reInit");
	}
	function O() {
		_.dragHandler.destroy(),
			_.eventStore.clear(),
			_.translate.clear(),
			_.slideLooper.clear(),
			_.resizeHandler.destroy(),
			_.slidesHandler.destroy(),
			_.slidesInView.destroy(),
			_.animation.destroy(),
			o.destroy(),
			a.clear();
	}
	function R() {
		m || ((m = !0), a.clear(), O(), c.emit("destroy"));
	}
	function Y(et, W, Z) {
		!S.active ||
			m ||
			(_.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : S.duration),
			_.scrollTo.index(et, Z || 0));
	}
	function H(et) {
		const W = _.index.add(1).get();
		Y(W, et, -1);
	}
	function j(et) {
		const W = _.index.add(-1).get();
		Y(W, et, 1);
	}
	function X() {
		return _.index.add(1).get() !== nt();
	}
	function tt() {
		return _.index.add(-1).get() !== nt();
	}
	function gt() {
		return _.scrollSnapList;
	}
	function T() {
		return _.scrollProgress.get(_.location.get());
	}
	function nt() {
		return _.index.get();
	}
	function ut() {
		return _.indexPrevious.get();
	}
	function I() {
		return _.slidesInView.get();
	}
	function N() {
		return _.slidesInView.get(!1);
	}
	function G() {
		return b;
	}
	function J() {
		return _;
	}
	function U() {
		return r;
	}
	function K() {
		return P;
	}
	function lt() {
		return M;
	}
	const ft = {
		canScrollNext: X,
		canScrollPrev: tt,
		containerNode: K,
		internalEngine: J,
		destroy: R,
		off: l,
		on: p,
		emit: g,
		plugins: G,
		previousScrollSnap: ut,
		reInit: h,
		rootNode: U,
		scrollNext: H,
		scrollPrev: j,
		scrollProgress: T,
		scrollSnapList: gt,
		scrollTo: Y,
		selectedScrollSnap: nt,
		slideNodes: lt,
		slidesInView: I,
		slidesNotInView: N,
	};
	return L(t, e), setTimeout(() => c.emit("init"), 0), ft;
}
rl.globalOptions = void 0;
const Jh = {
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
function sl(r = {}) {
	let t,
		e,
		i,
		n = !1,
		s = !0,
		o = !1,
		a = 0,
		c = 0;
	function u(x, b) {
		e = x;
		const { mergeOptions: P, optionsAtMedia: M } = b,
			D = P(Jh, sl.globalOptions),
			E = P(D, r);
		if (((t = M(E)), e.scrollSnapList().length <= 1)) return;
		(o = t.jump), (i = !1);
		const { eventStore: L, ownerDocument: F } = e.internalEngine(),
			O = e.rootNode(),
			R = (t.rootNode && t.rootNode(O)) || O,
			Y = e.containerNode();
		e.on("pointerDown", p),
			t.stopOnInteraction || e.on("pointerUp", d),
			t.stopOnMouseEnter &&
				(L.add(R, "mouseenter", () => {
					(s = !1), p();
				}),
				t.stopOnInteraction ||
					L.add(R, "mouseleave", () => {
						(s = !0), d();
					})),
			t.stopOnFocusIn &&
				(L.add(Y, "focusin", p),
				t.stopOnInteraction || L.add(Y, "focusout", d)),
			L.add(F, "visibilitychange", l),
			t.playOnInit && e.on("init", d).on("reInit", d);
	}
	function f() {
		e.off("init", d).off("reInit", d).off("pointerDown", p).off("pointerUp", d),
			p(),
			cancelAnimationFrame(a),
			(a = 0),
			(i = !0),
			(n = !1);
	}
	function d() {
		if (i || !s) return;
		n || e.emit("autoplay:play");
		const { ownerWindow: x } = e.internalEngine();
		x.clearInterval(c), (c = x.setInterval(y, t.delay)), (n = !0);
	}
	function p() {
		if (i) return;
		n && e.emit("autoplay:stop");
		const { ownerWindow: x } = e.internalEngine();
		x.clearInterval(c), (c = 0), (n = !1);
	}
	function l() {
		const { ownerDocument: x } = e.internalEngine();
		if (x.visibilityState === "hidden") return (s = n), p();
		s && d();
	}
	function g(x) {
		typeof x < "u" && (o = x), (s = !0), d();
	}
	function h() {
		n && p();
	}
	function m() {
		n && g();
	}
	function _() {
		return n;
	}
	function y() {
		a = requestAnimationFrame(() => {
			const { index: x } = e.internalEngine(),
				b = x.clone().add(1).get(),
				P = e.scrollSnapList().length - 1;
			t.stopOnLastSnap && b === P && p(),
				e.canScrollNext() ? e.scrollNext(o) : e.scrollTo(0, o);
		});
	}
	return {
		name: "autoplay",
		options: r,
		init: u,
		destroy: f,
		play: g,
		stop: h,
		reset: m,
		isPlaying: _,
	};
}
sl.globalOptions = void 0;
class tp {
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
const Kt = new tp();
function ep(r = 0) {
	window.scrollTo({ top: r, behavior: "smooth" });
}
function tf(r, t = 0) {
	const e = r.getBoundingClientRect(),
		i = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	ep(i);
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
	Rn,
	ol,
	wo,
	Fr,
	Ks,
	fo,
	ts,
	bi = "transform",
	Ta = bi + "Origin",
	ef,
	nf = function (t) {
		var e = t.ownerDocument || t;
		for (
			!(bi in t.style) &&
			("msTransform" in t.style) &&
			((bi = "msTransform"), (Ta = bi + "Origin"));
			e.parentNode && (e = e.parentNode);

		);
		if (((Rn = window), (fo = new Xn()), e)) {
			($i = e),
				(ol = e.documentElement),
				(wo = e.body),
				(ts = $i.createElementNS("http://www.w3.org/2000/svg", "g")),
				(ts.style.transform = "none");
			var i = e.createElement("div"),
				n = e.createElement("div"),
				s = e && (e.body || e.firstElementChild);
			s &&
				s.appendChild &&
				(s.appendChild(i),
				i.appendChild(n),
				i.setAttribute(
					"style",
					"position:static;transform:translate3d(0,0,1px)",
				),
				(ef = n.offsetParent !== i),
				s.removeChild(i));
		}
		return e;
	},
	ip = function (t) {
		for (var e, i; t && t !== wo; )
			(i = t._gsap),
				i && i.uncache && i.get(t, "x"),
				i &&
					!i.scaleX &&
					!i.scaleY &&
					i.renderTransform &&
					((i.scaleX = i.scaleY = 1e-4),
					i.renderTransform(1, i),
					e ? e.push(i) : (e = [i])),
				(t = t.parentNode);
		return e;
	},
	rf = [],
	sf = [],
	np = function () {
		return Rn.pageYOffset || $i.scrollTop || ol.scrollTop || wo.scrollTop || 0;
	},
	rp = function () {
		return (
			Rn.pageXOffset || $i.scrollLeft || ol.scrollLeft || wo.scrollLeft || 0
		);
	},
	al = function (t) {
		return (
			t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
		);
	},
	sp = function r(t) {
		if (Rn.getComputedStyle(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return r(t);
	},
	Xo = function r(t, e) {
		if (t.parentNode && ($i || nf(t))) {
			var i = al(t),
				n = i
					? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				s = i ? (e ? "rect" : "g") : "div",
				o = e !== 2 ? 0 : 100,
				a = e === 3 ? 100 : 0,
				c =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				u = $i.createElementNS
					? $i.createElementNS(n.replace(/^https/, "http"), s)
					: $i.createElement(s);
			return (
				e &&
					(i
						? (Ks || (Ks = r(t)),
							u.setAttribute("width", 0.01),
							u.setAttribute("height", 0.01),
							u.setAttribute("transform", "translate(" + o + "," + a + ")"),
							Ks.appendChild(u))
						: (Fr || ((Fr = r(t)), (Fr.style.cssText = c)),
							(u.style.cssText =
								c +
								"width:0.1px;height:0.1px;top:" +
								a +
								"px;left:" +
								o +
								"px"),
							Fr.appendChild(u))),
				u
			);
		}
		throw "Need document and parent.";
	},
	op = function (t) {
		for (var e = new Xn(), i = 0; i < t.numberOfItems; i++)
			e.multiply(t.getItem(i).matrix);
		return e;
	},
	ap = function (t) {
		var e = t.getCTM(),
			i;
		return (
			e ||
				((i = t.style[bi]),
				(t.style[bi] = "none"),
				t.appendChild(ts),
				(e = ts.getCTM()),
				t.removeChild(ts),
				i
					? (t.style[bi] = i)
					: t.style.removeProperty(
							bi.replace(/([A-Z])/g, "-$1").toLowerCase(),
						)),
			e || fo.clone()
		);
	},
	lp = function (t, e) {
		var i = al(t),
			n = t === i,
			s = i ? rf : sf,
			o = t.parentNode,
			a,
			c,
			u,
			f,
			d,
			p;
		if (t === Rn) return t;
		if (
			(s.length || s.push(Xo(t, 1), Xo(t, 2), Xo(t, 3)), (a = i ? Ks : Fr), i)
		)
			n
				? ((u = ap(t)), (f = -u.e / u.a), (d = -u.f / u.d), (c = fo))
				: t.getBBox
					? ((u = t.getBBox()),
						(c = t.transform ? t.transform.baseVal : {}),
						(c = c.numberOfItems
							? c.numberOfItems > 1
								? op(c)
								: c.getItem(0).matrix
							: fo),
						(f = c.a * u.x + c.c * u.y),
						(d = c.b * u.x + c.d * u.y))
					: ((c = new Xn()), (f = d = 0)),
				e && t.tagName.toLowerCase() === "g" && (f = d = 0),
				(n ? i : o).appendChild(a),
				a.setAttribute(
					"transform",
					"matrix(" +
						c.a +
						"," +
						c.b +
						"," +
						c.c +
						"," +
						c.d +
						"," +
						(c.e + f) +
						"," +
						(c.f + d) +
						")",
				);
		else {
			if (((f = d = 0), ef))
				for (
					c = t.offsetParent, u = t;
					u && (u = u.parentNode) && u !== c && u.parentNode;

				)
					(Rn.getComputedStyle(u)[bi] + "").length > 4 &&
						((f = u.offsetLeft), (d = u.offsetTop), (u = 0));
			if (
				((p = Rn.getComputedStyle(t)),
				p.position !== "absolute" && p.position !== "fixed")
			)
				for (c = t.offsetParent; o && o !== c; )
					(f += o.scrollLeft || 0), (d += o.scrollTop || 0), (o = o.parentNode);
			(u = a.style),
				(u.top = t.offsetTop - d + "px"),
				(u.left = t.offsetLeft - f + "px"),
				(u[bi] = p[bi]),
				(u[Ta] = p[Ta]),
				(u.position = p.position === "fixed" ? "fixed" : "absolute"),
				t.parentNode.appendChild(a);
		}
		return a;
	},
	$o = function (t, e, i, n, s, o, a) {
		return (t.a = e), (t.b = i), (t.c = n), (t.d = s), (t.e = o), (t.f = a), t;
	},
	Xn = (function () {
		function r(e, i, n, s, o, a) {
			e === void 0 && (e = 1),
				i === void 0 && (i = 0),
				n === void 0 && (n = 0),
				s === void 0 && (s = 1),
				o === void 0 && (o = 0),
				a === void 0 && (a = 0),
				$o(this, e, i, n, s, o, a);
		}
		var t = r.prototype;
		return (
			(t.inverse = function () {
				var i = this.a,
					n = this.b,
					s = this.c,
					o = this.d,
					a = this.e,
					c = this.f,
					u = i * o - n * s || 1e-10;
				return $o(
					this,
					o / u,
					-n / u,
					-s / u,
					i / u,
					(s * c - o * a) / u,
					-(i * c - n * a) / u,
				);
			}),
			(t.multiply = function (i) {
				var n = this.a,
					s = this.b,
					o = this.c,
					a = this.d,
					c = this.e,
					u = this.f,
					f = i.a,
					d = i.c,
					p = i.b,
					l = i.d,
					g = i.e,
					h = i.f;
				return $o(
					this,
					f * n + p * o,
					f * s + p * a,
					d * n + l * o,
					d * s + l * a,
					c + g * n + h * o,
					u + g * s + h * a,
				);
			}),
			(t.clone = function () {
				return new r(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(t.equals = function (i) {
				var n = this.a,
					s = this.b,
					o = this.c,
					a = this.d,
					c = this.e,
					u = this.f;
				return (
					n === i.a &&
					s === i.b &&
					o === i.c &&
					a === i.d &&
					c === i.e &&
					u === i.f
				);
			}),
			(t.apply = function (i, n) {
				n === void 0 && (n = {});
				var s = i.x,
					o = i.y,
					a = this.a,
					c = this.b,
					u = this.c,
					f = this.d,
					d = this.e,
					p = this.f;
				return (
					(n.x = s * a + o * u + d || 0), (n.y = s * c + o * f + p || 0), n
				);
			}),
			r
		);
	})();
function Mn(r, t, e, i) {
	if (!r || !r.parentNode || ($i || nf(r)).documentElement === r)
		return new Xn();
	var n = ip(r),
		s = al(r),
		o = s ? rf : sf,
		a = lp(r, e),
		c = o[0].getBoundingClientRect(),
		u = o[1].getBoundingClientRect(),
		f = o[2].getBoundingClientRect(),
		d = a.parentNode,
		p = !i && sp(r),
		l = new Xn(
			(u.left - c.left) / 100,
			(u.top - c.top) / 100,
			(f.left - c.left) / 100,
			(f.top - c.top) / 100,
			c.left + (p ? 0 : rp()),
			c.top + (p ? 0 : np()),
		);
	if ((d.removeChild(a), n))
		for (c = n.length; c--; )
			(u = n[c]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
	return t ? l.inverse() : l;
}
function rc(r) {
	if (r === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return r;
}
function cp(r, t) {
	(r.prototype = Object.create(t.prototype)),
		(r.prototype.constructor = r),
		(r.__proto__ = t);
}
var Tt,
	It,
	ri,
	Si,
	Vi,
	Vo,
	Yi,
	Sa,
	zr,
	on,
	of,
	Ma,
	gs,
	ll,
	Br,
	vi,
	qr,
	Qs,
	af,
	Oa,
	ho = 0,
	lf = function () {
		return typeof window < "u";
	},
	cf = function () {
		return Tt || (lf() && (Tt = window.gsap) && Tt.registerPlugin && Tt);
	},
	Ji = function (t) {
		return typeof t == "function";
	},
	es = function (t) {
		return typeof t == "object";
	},
	wi = function (t) {
		return typeof t > "u";
	},
	Zs = function () {
		return !1;
	},
	is = "transform",
	Da = "transformOrigin",
	Ki = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	Cr = Array.isArray,
	zs = function (t, e) {
		var i = ri.createElementNS
			? ri.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: ri.createElement(t);
		return i.style ? i : ri.createElement(t);
	},
	sc = 180 / Math.PI,
	xn = 1e20,
	up = new Xn(),
	Qi =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	Nn = [],
	cr = {},
	fp = 0,
	dp = /^(?:a|input|textarea|button|select)$/i,
	oc = 0,
	Kn = {},
	zi = {},
	uf = function (t, e) {
		var i = {},
			n;
		for (n in t) i[n] = e ? t[n] * e : t[n];
		return i;
	},
	hp = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	ac = function r(t, e) {
		for (var i = t.length, n; i--; )
			e
				? (t[i].style.touchAction = e)
				: t[i].style.removeProperty("touch-action"),
				(n = t[i].children),
				n && n.length && r(n, e);
	},
	ff = function () {
		return Nn.forEach(function (t) {
			return t();
		});
	},
	pp = function (t) {
		Nn.push(t), Nn.length === 1 && Tt.ticker.add(ff);
	},
	lc = function () {
		return !Nn.length && Tt.ticker.remove(ff);
	},
	cc = function (t) {
		for (var e = Nn.length; e--; ) Nn[e] === t && Nn.splice(e, 1);
		Tt.to(lc, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: lc,
			data: "_draggable",
		});
	},
	gp = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	le = function (t, e, i, n) {
		if (t.addEventListener) {
			var s = gs[e];
			(n = n || (of ? { passive: !1 } : null)),
				t.addEventListener(s || e, i, n),
				s && e !== s && t.addEventListener(e, i, n);
		}
	},
	ie = function (t, e, i, n) {
		if (t.removeEventListener) {
			var s = gs[e];
			t.removeEventListener(s || e, i, n),
				s && e !== s && t.removeEventListener(e, i, n);
		}
	},
	li = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	_p = function (t, e) {
		for (var i = t.length; i--; ) if (t[i].identifier === e) return !0;
	},
	mp = function r(t) {
		(ll = t.touches && ho < t.touches.length), ie(t.target, "touchend", r);
	},
	uc = function (t) {
		(ll = t.touches && ho < t.touches.length), le(t.target, "touchend", mp);
	},
	ur = function (t) {
		return (
			It.pageYOffset ||
			t.scrollTop ||
			t.documentElement.scrollTop ||
			t.body.scrollTop ||
			0
		);
	},
	fr = function (t) {
		return (
			It.pageXOffset ||
			t.scrollLeft ||
			t.documentElement.scrollLeft ||
			t.body.scrollLeft ||
			0
		);
	},
	fc = function r(t, e) {
		le(t, "scroll", e), yr(t.parentNode) || r(t.parentNode, e);
	},
	dc = function r(t, e) {
		ie(t, "scroll", e), yr(t.parentNode) || r(t.parentNode, e);
	},
	yr = function (t) {
		return (
			!t ||
			t === Si ||
			t.nodeType === 9 ||
			t === ri.body ||
			t === It ||
			!t.nodeType ||
			!t.parentNode
		);
	},
	hc = function (t, e) {
		var i = e === "x" ? "Width" : "Height",
			n = "scroll" + i,
			s = "client" + i;
		return Math.max(
			0,
			yr(t)
				? Math.max(Si[n], Vi[n]) - (It["inner" + i] || Si[s] || Vi[s])
				: t[n] - t[s],
		);
	},
	jo = function r(t, e) {
		var i = hc(t, "x"),
			n = hc(t, "y");
		yr(t) ? (t = zi) : r(t.parentNode, e),
			(t._gsMaxScrollX = i),
			(t._gsMaxScrollY = n),
			e ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	Wo = function (t, e, i) {
		var n = t.style;
		n &&
			(wi(n[e]) && (e = zr(e, t) || e),
			i == null
				? n.removeProperty &&
					n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (n[e] = i));
	},
	_s = function (t) {
		return It.getComputedStyle(
			t instanceof Element ? t : t.host || (t.parentNode || {}).host || t,
		);
	},
	wn = {},
	Qn = function (t) {
		if (t === It)
			return (
				(wn.left = wn.top = 0),
				(wn.width = wn.right =
					Si.clientWidth || t.innerWidth || Vi.clientWidth || 0),
				(wn.height = wn.bottom =
					(t.innerHeight || 0) - 20 < Si.clientHeight
						? Si.clientHeight
						: t.innerHeight || Vi.clientHeight || 0),
				wn
			);
		var e = t.ownerDocument || ri,
			i = wi(t.pageX)
				? !t.nodeType && !wi(t.left) && !wi(t.top)
					? t
					: on(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - fr(e),
						top: t.pageY - ur(e),
						right: t.pageX - fr(e) + 1,
						bottom: t.pageY - ur(e) + 1,
					};
		return (
			wi(i.right) && !wi(i.width)
				? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
				: wi(i.width) &&
					(i = {
						width: i.right - i.left,
						height: i.bottom - i.top,
						right: i.right,
						left: i.left,
						bottom: i.bottom,
						top: i.top,
					}),
			i
		);
	},
	Zt = function (t, e, i) {
		var n = t.vars,
			s = n[i],
			o = t._listeners[e],
			a;
		return (
			Ji(s) &&
				(a = s.apply(
					n.callbackScope || t,
					n[i + "Params"] || [t.pointerEvent],
				)),
			o && t.dispatchEvent(e) === !1 && (a = !1),
			a
		);
	},
	pc = function (t, e) {
		var i = on(t)[0],
			n,
			s,
			o;
		return !i.nodeType && i !== It
			? wi(t.left)
				? ((s = t.min || t.minX || t.minRotation || 0),
					(n = t.min || t.minY || 0),
					{
						left: s,
						top: n,
						width: (t.max || t.maxX || t.maxRotation || 0) - s,
						height: (t.max || t.maxY || 0) - n,
					})
				: ((o = { x: 0, y: 0 }),
					{
						left: t.left - o.x,
						top: t.top - o.y,
						width: t.width,
						height: t.height,
					})
			: yp(i, e);
	},
	ci = {},
	yp = function (t, e) {
		e = on(e)[0];
		var i = t.getBBox && t.ownerSVGElement,
			n = t.ownerDocument || ri,
			s,
			o,
			a,
			c,
			u,
			f,
			d,
			p,
			l,
			g,
			h,
			m,
			_;
		if (t === It)
			(a = ur(n)),
				(s = fr(n)),
				(o =
					s +
					(n.documentElement.clientWidth ||
						t.innerWidth ||
						n.body.clientWidth ||
						0)),
				(c =
					a +
					((t.innerHeight || 0) - 20 < n.documentElement.clientHeight
						? n.documentElement.clientHeight
						: t.innerHeight || n.body.clientHeight || 0));
		else {
			if (e === It || wi(e)) return t.getBoundingClientRect();
			(s = a = 0),
				i
					? ((g = t.getBBox()), (h = g.width), (m = g.height))
					: (t.viewBox &&
							(g = t.viewBox.baseVal) &&
							((s = g.x || 0), (a = g.y || 0), (h = g.width), (m = g.height)),
						h ||
							((_ = _s(t)),
							(g = _.boxSizing === "border-box"),
							(h =
								(parseFloat(_.width) || t.clientWidth || 0) +
								(g
									? 0
									: parseFloat(_.borderLeftWidth) +
										parseFloat(_.borderRightWidth))),
							(m =
								(parseFloat(_.height) || t.clientHeight || 0) +
								(g
									? 0
									: parseFloat(_.borderTopWidth) +
										parseFloat(_.borderBottomWidth))))),
				(o = h),
				(c = m);
		}
		return t === e
			? { left: s, top: a, width: o - s, height: c - a }
			: ((u = Mn(e, !0).multiply(Mn(t))),
				(f = u.apply({ x: s, y: a })),
				(d = u.apply({ x: o, y: a })),
				(p = u.apply({ x: o, y: c })),
				(l = u.apply({ x: s, y: c })),
				(s = Math.min(f.x, d.x, p.x, l.x)),
				(a = Math.min(f.y, d.y, p.y, l.y)),
				{
					left: s,
					top: a,
					width: Math.max(f.x, d.x, p.x, l.x) - s,
					height: Math.max(f.y, d.y, p.y, l.y) - a,
				});
	},
	Go = function (t, e, i, n, s, o) {
		var a = {},
			c,
			u,
			f;
		if (e)
			if (s !== 1 && e instanceof Array) {
				if (((a.end = c = []), (f = e.length), es(e[0])))
					for (u = 0; u < f; u++) c[u] = uf(e[u], s);
				else for (u = 0; u < f; u++) c[u] = e[u] * s;
				(i += 1.1), (n -= 1.1);
			} else
				Ji(e)
					? (a.end = function (d) {
							var p = e.call(t, d),
								l,
								g;
							if (s !== 1)
								if (es(p)) {
									l = {};
									for (g in p) l[g] = p[g] * s;
									p = l;
								} else p *= s;
							return p;
						})
					: (a.end = e);
		return (
			(i || i === 0) && (a.max = i),
			(n || n === 0) && (a.min = n),
			o && (a.velocity = 0),
			a
		);
	},
	vp = function r(t) {
		var e;
		return !t || !t.getAttribute || t === Vi
			? !1
			: (e = t.getAttribute("data-clickable")) === "true" ||
				  (e !== "false" &&
						(dp.test(t.nodeName + "") ||
							t.getAttribute("contentEditable") === "true"))
				? !0
				: r(t.parentNode);
	},
	Bs = function (t, e) {
		for (var i = t.length, n; i--; )
			(n = t[i]),
				(n.ondragstart = n.onselectstart = e ? null : Zs),
				Tt.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
	},
	xp = function r(t) {
		if (_s(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return r(t);
	},
	df,
	Ca,
	wp = function (t, e) {
		(t = Tt.utils.toArray(t)[0]), (e = e || {});
		var i = document.createElement("div"),
			n = i.style,
			s = t.firstChild,
			o = 0,
			a = 0,
			c = t.scrollTop,
			u = t.scrollLeft,
			f = t.scrollWidth,
			d = t.scrollHeight,
			p = 0,
			l = 0,
			g = 0,
			h,
			m,
			_,
			y,
			S,
			x;
		df && e.force3D !== !1
			? ((S = "translate3d("), (x = "px,0px)"))
			: is && ((S = "translate("), (x = "px)")),
			(this.scrollTop = function (b, P) {
				if (!arguments.length) return -this.top();
				this.top(-b, P);
			}),
			(this.scrollLeft = function (b, P) {
				if (!arguments.length) return -this.left();
				this.left(-b, P);
			}),
			(this.left = function (b, P) {
				if (!arguments.length) return -(t.scrollLeft + a);
				var M = t.scrollLeft - u,
					D = a;
				if ((M > 2 || M < -2) && !P) {
					(u = t.scrollLeft),
						Tt.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-u),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((a = (b - 0.5) | 0), (b = 0))
						: b > l
							? ((a = (b - l) | 0), (b = l))
							: (a = 0),
					(a || D) &&
						(this._skip || (n[is] = S + -a + "px," + -o + x),
						a + p >= 0 && (n.paddingRight = a + p + "px")),
					(t.scrollLeft = b | 0),
					(u = t.scrollLeft);
			}),
			(this.top = function (b, P) {
				if (!arguments.length) return -(t.scrollTop + o);
				var M = t.scrollTop - c,
					D = o;
				if ((M > 2 || M < -2) && !P) {
					(c = t.scrollTop),
						Tt.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-c),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((o = (b - 0.5) | 0), (b = 0))
						: b > g
							? ((o = (b - g) | 0), (b = g))
							: (o = 0),
					(o || D) && (this._skip || (n[is] = S + -a + "px," + -o + x)),
					(t.scrollTop = b | 0),
					(c = t.scrollTop);
			}),
			(this.maxScrollTop = function () {
				return g;
			}),
			(this.maxScrollLeft = function () {
				return l;
			}),
			(this.disable = function () {
				for (s = i.firstChild; s; )
					(y = s.nextSibling), t.appendChild(s), (s = y);
				t === i.parentNode && t.removeChild(i);
			}),
			(this.enable = function () {
				if (((s = t.firstChild), s !== i)) {
					for (; s; ) (y = s.nextSibling), i.appendChild(s), (s = y);
					t.appendChild(i), this.calibrate();
				}
			}),
			(this.calibrate = function (b) {
				var P = t.clientWidth === h,
					M,
					D,
					E;
				(c = t.scrollTop),
					(u = t.scrollLeft),
					!(
						P &&
						t.clientHeight === m &&
						i.offsetHeight === _ &&
						f === t.scrollWidth &&
						d === t.scrollHeight &&
						!b
					) &&
						((o || a) &&
							((D = this.left()),
							(E = this.top()),
							this.left(-t.scrollLeft),
							this.top(-t.scrollTop)),
						(M = _s(t)),
						(!P || b) &&
							((n.display = "block"),
							(n.width = "auto"),
							(n.paddingRight = "0px"),
							(p = Math.max(0, t.scrollWidth - t.clientWidth)),
							p &&
								(p +=
									parseFloat(M.paddingLeft) +
									(Ca ? parseFloat(M.paddingRight) : 0))),
						(n.display = "inline-block"),
						(n.position = "relative"),
						(n.overflow = "visible"),
						(n.verticalAlign = "top"),
						(n.boxSizing = "content-box"),
						(n.width = "100%"),
						(n.paddingRight = p + "px"),
						Ca && (n.paddingBottom = M.paddingBottom),
						(h = t.clientWidth),
						(m = t.clientHeight),
						(f = t.scrollWidth),
						(d = t.scrollHeight),
						(l = t.scrollWidth - h),
						(g = t.scrollHeight - m),
						(_ = i.offsetHeight),
						(n.display = "block"),
						(D || E) && (this.left(D), this.top(E)));
			}),
			(this.content = i),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	Uo = function (t) {
		if (lf() && document.body) {
			var e = window && window.navigator;
			(It = window),
				(ri = document),
				(Si = ri.documentElement),
				(Vi = ri.body),
				(Vo = zs("div")),
				(Qs = !!window.PointerEvent),
				(Yi = zs("div")),
				(Yi.style.cssText =
					"visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
				(qr = Yi.style.cursor === "grab" ? "grab" : "move"),
				(Br = e && e.userAgent.toLowerCase().indexOf("android") !== -1),
				(Ma =
					("ontouchstart" in Si && "orientation" in It) ||
					(e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
				(Ca = (function () {
					var i = zs("div"),
						n = zs("div"),
						s = n.style,
						o = Vi,
						a;
					return (
						(s.display = "inline-block"),
						(s.position = "relative"),
						(i.style.cssText =
							"width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
						i.appendChild(n),
						o.appendChild(i),
						(a = n.offsetHeight + 18 > i.scrollHeight),
						o.removeChild(i),
						a
					);
				})()),
				(gs = (function (i) {
					for (
						var n = i.split(","),
							s = (
								("onpointerdown" in Vo)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in Vo)
										? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
										: i
							).split(","),
							o = {},
							a = 4;
						--a > -1;

					)
						(o[n[a]] = s[a]), (o[s[a]] = n[a]);
					try {
						Si.addEventListener(
							"test",
							null,
							Object.defineProperty({}, "passive", {
								get: function () {
									of = 1;
								},
							}),
						);
					} catch {}
					return o;
				})("touchstart,touchmove,touchend,touchcancel")),
				le(ri, "touchcancel", Zs),
				le(It, "touchmove", Zs),
				Vi && Vi.addEventListener("touchstart", Zs),
				le(ri, "contextmenu", function () {
					for (var i in cr) cr[i].isPressed && cr[i].endDrag();
				}),
				(Tt = Sa = cf());
		}
		Tt
			? ((vi = Tt.plugins.inertia),
				(af = Tt.core.context || function () {}),
				(zr = Tt.utils.checkPrefix),
				(is = zr(is)),
				(Da = zr(Da)),
				(on = Tt.utils.toArray),
				(Oa = Tt.core.getStyleSaver),
				(df = !!zr("perspective")))
			: t && console.warn("Please gsap.registerPlugin(Draggable)");
	},
	bp = (function () {
		function r(e) {
			(this._listeners = {}), (this.target = e || this);
		}
		var t = r.prototype;
		return (
			(t.addEventListener = function (i, n) {
				var s = this._listeners[i] || (this._listeners[i] = []);
				~s.indexOf(n) || s.push(n);
			}),
			(t.removeEventListener = function (i, n) {
				var s = this._listeners[i],
					o = s && s.indexOf(n);
				o >= 0 && s.splice(o, 1);
			}),
			(t.dispatchEvent = function (i) {
				var n = this,
					s;
				return (
					(this._listeners[i] || []).forEach(function (o) {
						return o.call(n, { type: i, target: n.target }) === !1 && (s = !1);
					}),
					s
				);
			}),
			r
		);
	})(),
	vr = (function (r) {
		cp(t, r);
		function t(e, i) {
			var n;
			(n = r.call(this) || this),
				Sa || Uo(1),
				(e = on(e)[0]),
				(n.styles = Oa && Oa(e, "transform,left,top")),
				vi || (vi = Tt.plugins.inertia),
				(n.vars = i = uf(i || {})),
				(n.target = e),
				(n.x = n.y = n.rotation = 0),
				(n.dragResistance = parseFloat(i.dragResistance) || 0),
				(n.edgeResistance = isNaN(i.edgeResistance)
					? 1
					: parseFloat(i.edgeResistance) || 0),
				(n.lockAxis = i.lockAxis),
				(n.autoScroll = i.autoScroll || 0),
				(n.lockedAxis = null),
				(n.allowEventDefault = !!i.allowEventDefault),
				Tt.getProperty(e, "x");
			var s = (i.type || "x,y").toLowerCase(),
				o = ~s.indexOf("x") || ~s.indexOf("y"),
				a = s.indexOf("rotation") !== -1,
				c = a ? "rotation" : o ? "x" : "left",
				u = o ? "y" : "top",
				f = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"),
				d = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"),
				p = i.minimumMovement || 2,
				l = rc(n),
				g = on(i.trigger || i.handle || e),
				h = {},
				m = 0,
				_ = !1,
				y = i.autoScrollMarginTop || 40,
				S = i.autoScrollMarginRight || 40,
				x = i.autoScrollMarginBottom || 40,
				b = i.autoScrollMarginLeft || 40,
				P = i.clickableTest || vp,
				M = 0,
				D = e._gsap || Tt.core.getCache(e),
				E = xp(e),
				L = function (v, q) {
					return parseFloat(D.get(e, v, q));
				},
				F = e.ownerDocument || ri,
				O,
				R,
				Y,
				H,
				j,
				X,
				tt,
				gt,
				T,
				nt,
				ut,
				I,
				N,
				G,
				J,
				U,
				K,
				lt,
				ft,
				et,
				W,
				Z,
				ot,
				st,
				Et,
				C,
				Mt,
				Ht,
				ue,
				kt,
				Rt,
				Ue,
				ze,
				Xt = function (v) {
					return (
						li(v),
						v.stopImmediatePropagation && v.stopImmediatePropagation(),
						!1
					);
				},
				Wt = function at(v) {
					if (l.autoScroll && l.isDragging && (_ || K)) {
						var q = e,
							w = l.autoScroll * 15,
							k,
							B,
							A,
							V,
							z,
							Q,
							ct,
							rt;
						for (
							_ = !1,
								zi.scrollTop =
									It.pageYOffset != null
										? It.pageYOffset
										: F.documentElement.scrollTop != null
											? F.documentElement.scrollTop
											: F.body.scrollTop,
								zi.scrollLeft =
									It.pageXOffset != null
										? It.pageXOffset
										: F.documentElement.scrollLeft != null
											? F.documentElement.scrollLeft
											: F.body.scrollLeft,
								V = l.pointerX - zi.scrollLeft,
								z = l.pointerY - zi.scrollTop;
							q && !B;

						)
							(B = yr(q.parentNode)),
								(k = B ? zi : q.parentNode),
								(A = B
									? {
											bottom: Math.max(Si.clientHeight, It.innerHeight || 0),
											right: Math.max(Si.clientWidth, It.innerWidth || 0),
											left: 0,
											top: 0,
										}
									: k.getBoundingClientRect()),
								(Q = ct = 0),
								d &&
									((rt = k._gsMaxScrollY - k.scrollTop),
									rt < 0
										? (ct = rt)
										: z > A.bottom - x && rt
											? ((_ = !0),
												(ct = Math.min(
													rt,
													(w * (1 - Math.max(0, A.bottom - z) / x)) | 0,
												)))
											: z < A.top + y &&
												k.scrollTop &&
												((_ = !0),
												(ct = -Math.min(
													k.scrollTop,
													(w * (1 - Math.max(0, z - A.top) / y)) | 0,
												))),
									ct && (k.scrollTop += ct)),
								f &&
									((rt = k._gsMaxScrollX - k.scrollLeft),
									rt < 0
										? (Q = rt)
										: V > A.right - S && rt
											? ((_ = !0),
												(Q = Math.min(
													rt,
													(w * (1 - Math.max(0, A.right - V) / S)) | 0,
												)))
											: V < A.left + b &&
												k.scrollLeft &&
												((_ = !0),
												(Q = -Math.min(
													k.scrollLeft,
													(w * (1 - Math.max(0, V - A.left) / b)) | 0,
												))),
									Q && (k.scrollLeft += Q)),
								B &&
									(Q || ct) &&
									(It.scrollTo(k.scrollLeft, k.scrollTop),
									xe(l.pointerX + Q, l.pointerY + ct)),
								(q = k);
					}
					if (K) {
						var _t = l.x,
							Ot = l.y;
						a
							? ((l.deltaX = _t - parseFloat(D.rotation)),
								(l.rotation = _t),
								(D.rotation = _t + "deg"),
								D.renderTransform(1, D))
							: R
								? (d && ((l.deltaY = Ot - R.top()), R.top(Ot)),
									f && ((l.deltaX = _t - R.left()), R.left(_t)))
								: o
									? (d &&
											((l.deltaY = Ot - parseFloat(D.y)), (D.y = Ot + "px")),
										f && ((l.deltaX = _t - parseFloat(D.x)), (D.x = _t + "px")),
										D.renderTransform(1, D))
									: (d &&
											((l.deltaY = Ot - parseFloat(e.style.top || 0)),
											(e.style.top = Ot + "px")),
										f &&
											((l.deltaX = _t - parseFloat(e.style.left || 0)),
											(e.style.left = _t + "px"))),
							gt &&
								!v &&
								!Ht &&
								((Ht = !0),
								Zt(l, "drag", "onDrag") === !1 &&
									(f && (l.x -= l.deltaX), d && (l.y -= l.deltaY), at(!0)),
								(Ht = !1));
					}
					K = !1;
				},
				Ct = function (v, q) {
					var w = l.x,
						k = l.y,
						B,
						A;
					e._gsap || (D = Tt.core.getCache(e)),
						D.uncache && Tt.getProperty(e, "x"),
						o
							? ((l.x = parseFloat(D.x)), (l.y = parseFloat(D.y)))
							: a
								? (l.x = l.rotation = parseFloat(D.rotation))
								: R
									? ((l.y = R.top()), (l.x = R.left()))
									: ((l.y =
											parseFloat(e.style.top || ((A = _s(e)) && A.top)) || 0),
										(l.x = parseFloat(e.style.left || (A || {}).left) || 0)),
						(ft || et || W) &&
							!q &&
							(l.isDragging || l.isThrowing) &&
							(W &&
								((Kn.x = l.x),
								(Kn.y = l.y),
								(B = W(Kn)),
								B.x !== l.x && ((l.x = B.x), (K = !0)),
								B.y !== l.y && ((l.y = B.y), (K = !0))),
							ft &&
								((B = ft(l.x)),
								B !== l.x && ((l.x = B), a && (l.rotation = B), (K = !0))),
							et && ((B = et(l.y)), B !== l.y && (l.y = B), (K = !0))),
						K && Wt(!0),
						v ||
							((l.deltaX = l.x - w),
							(l.deltaY = l.y - k),
							Zt(l, "throwupdate", "onThrowUpdate"));
				},
				se = function (v, q, w, k) {
					return (
						q == null && (q = -xn),
						w == null && (w = xn),
						Ji(v)
							? function (B) {
									var A = l.isPressed ? 1 - l.edgeResistance : 1;
									return (
										v.call(
											l,
											(B > w ? w + (B - w) * A : B < q ? q + (B - q) * A : B) *
												k,
										) * k
									);
								}
							: Cr(v)
								? function (B) {
										for (var A = v.length, V = 0, z = xn, Q, ct; --A > -1; )
											(Q = v[A]),
												(ct = Q - B),
												ct < 0 && (ct = -ct),
												ct < z && Q >= q && Q <= w && ((V = A), (z = ct));
										return v[V];
									}
								: isNaN(v)
									? function (B) {
											return B;
										}
									: function () {
											return v * k;
										}
					);
				},
				Gt = function (v, q, w, k, B, A, V) {
					return (
						(A = A && A < xn ? A * A : xn),
						Ji(v)
							? function (z) {
									var Q = l.isPressed ? 1 - l.edgeResistance : 1,
										ct = z.x,
										rt = z.y,
										_t,
										Ot,
										Dt;
									return (
										(z.x = ct =
											ct > w
												? w + (ct - w) * Q
												: ct < q
													? q + (ct - q) * Q
													: ct),
										(z.y = rt =
											rt > B
												? B + (rt - B) * Q
												: rt < k
													? k + (rt - k) * Q
													: rt),
										(_t = v.call(l, z)),
										_t !== z && ((z.x = _t.x), (z.y = _t.y)),
										V !== 1 && ((z.x *= V), (z.y *= V)),
										A < xn &&
											((Ot = z.x - ct),
											(Dt = z.y - rt),
											Ot * Ot + Dt * Dt > A && ((z.x = ct), (z.y = rt))),
										z
									);
								}
							: Cr(v)
								? function (z) {
										for (
											var Q = v.length, ct = 0, rt = xn, _t, Ot, Dt, vt;
											--Q > -1;

										)
											(Dt = v[Q]),
												(_t = Dt.x - z.x),
												(Ot = Dt.y - z.y),
												(vt = _t * _t + Ot * Ot),
												vt < rt && ((ct = Q), (rt = vt));
										return rt <= A ? v[ct] : z;
									}
								: function (z) {
										return z;
									}
					);
				},
				ge = function () {
					var v, q, w, k;
					(tt = !1),
						R
							? (R.calibrate(),
								(l.minX = ut = -R.maxScrollLeft()),
								(l.minY = N = -R.maxScrollTop()),
								(l.maxX = nt = l.maxY = I = 0),
								(tt = !0))
							: i.bounds &&
								((v = pc(i.bounds, e.parentNode)),
								a
									? ((l.minX = ut = v.left),
										(l.maxX = nt = v.left + v.width),
										(l.minY = N = l.maxY = I = 0))
									: !wi(i.bounds.maxX) || !wi(i.bounds.maxY)
										? ((v = i.bounds),
											(l.minX = ut = v.minX),
											(l.minY = N = v.minY),
											(l.maxX = nt = v.maxX),
											(l.maxY = I = v.maxY))
										: ((q = pc(e, e.parentNode)),
											(l.minX = ut = Math.round(L(c, "px") + v.left - q.left)),
											(l.minY = N = Math.round(L(u, "px") + v.top - q.top)),
											(l.maxX = nt = Math.round(ut + (v.width - q.width))),
											(l.maxY = I = Math.round(N + (v.height - q.height)))),
								ut > nt && ((l.minX = nt), (l.maxX = nt = ut), (ut = l.minX)),
								N > I && ((l.minY = I), (l.maxY = I = N), (N = l.minY)),
								a && ((l.minRotation = ut), (l.maxRotation = nt)),
								(tt = !0)),
						i.liveSnap &&
							((w = i.liveSnap === !0 ? i.snap || {} : i.liveSnap),
							(k = Cr(w) || Ji(w)),
							a
								? ((ft = se(k ? w : w.rotation, ut, nt, 1)), (et = null))
								: w.points
									? (W = Gt(
											k ? w : w.points,
											ut,
											nt,
											N,
											I,
											w.radius,
											R ? -1 : 1,
										))
									: (f &&
											(ft = se(
												k ? w : w.x || w.left || w.scrollLeft,
												ut,
												nt,
												R ? -1 : 1,
											)),
										d &&
											(et = se(
												k ? w : w.y || w.top || w.scrollTop,
												N,
												I,
												R ? -1 : 1,
											))));
				},
				mi = function () {
					(l.isThrowing = !1), Zt(l, "throwcomplete", "onThrowComplete");
				},
				At = function () {
					l.isThrowing = !1;
				},
				Mi = function (v, q) {
					var w, k, B, A;
					v && vi
						? (v === !0 &&
								((w = i.snap || i.liveSnap || {}),
								(k = Cr(w) || Ji(w)),
								(v = {
									resistance:
										(i.throwResistance || i.resistance || 1e3) / (a ? 10 : 1),
								}),
								a
									? (v.rotation = Go(l, k ? w : w.rotation, nt, ut, 1, q))
									: (f &&
											(v[c] = Go(
												l,
												k ? w : w.points || w.x || w.left,
												nt,
												ut,
												R ? -1 : 1,
												q || l.lockedAxis === "x",
											)),
										d &&
											(v[u] = Go(
												l,
												k ? w : w.points || w.y || w.top,
												I,
												N,
												R ? -1 : 1,
												q || l.lockedAxis === "y",
											)),
										(w.points || (Cr(w) && es(w[0]))) &&
											((v.linkedProps = c + "," + u), (v.radius = w.radius)))),
							(l.isThrowing = !0),
							(A = isNaN(i.overshootTolerance)
								? i.edgeResistance === 1
									? 0
									: 1 - l.edgeResistance + 0.2
								: i.overshootTolerance),
							v.duration ||
								(v.duration = {
									max: Math.max(
										i.minDuration || 0,
										"maxDuration" in i ? i.maxDuration : 2,
									),
									min: isNaN(i.minDuration)
										? A === 0 || (es(v) && v.resistance > 1e3)
											? 0
											: 0.5
										: i.minDuration,
									overshoot: A,
								}),
							(l.tween = B =
								Tt.to(R || e, {
									inertia: v,
									data: "_draggable",
									inherit: !1,
									onComplete: mi,
									onInterrupt: At,
									onUpdate: i.fastMode ? Zt : Ct,
									onUpdateParams: i.fastMode
										? [l, "onthrowupdate", "onThrowUpdate"]
										: w && w.radius
											? [!1, !0]
											: [],
								})),
							i.fastMode ||
								(R && (R._skip = !0),
								B.render(1e9, !0, !0),
								Ct(!0, !0),
								(l.endX = l.x),
								(l.endY = l.y),
								a && (l.endRotation = l.x),
								B.play(0),
								Ct(!0, !0),
								R && (R._skip = !1)))
						: tt && l.applyBounds();
				},
				Ke = function (v) {
					var q = st,
						w;
					(st = Mn(e.parentNode, !0)),
						v &&
							l.isPressed &&
							!st.equals(q || new Xn()) &&
							((w = q.inverse().apply({ x: Y, y: H })),
							st.apply(w, w),
							(Y = w.x),
							(H = w.y)),
						st.equals(up) && (st = null);
				},
				Qe = function () {
					var v = 1 - l.edgeResistance,
						q = E ? fr(F) : 0,
						w = E ? ur(F) : 0,
						k,
						B,
						A;
					o &&
						((D.x = L(c, "px") + "px"),
						(D.y = L(u, "px") + "px"),
						D.renderTransform()),
						Ke(!1),
						(ci.x = l.pointerX - q),
						(ci.y = l.pointerY - w),
						st && st.apply(ci, ci),
						(Y = ci.x),
						(H = ci.y),
						K && (xe(l.pointerX, l.pointerY), Wt(!0)),
						(Ue = Mn(e)),
						R
							? (ge(), (X = R.top()), (j = R.left()))
							: (Be() ? (Ct(!0, !0), ge()) : l.applyBounds(),
								a
									? ((k = e.ownerSVGElement
											? [D.xOrigin - e.getBBox().x, D.yOrigin - e.getBBox().y]
											: (_s(e)[Da] || "0 0").split(" ")),
										(U = l.rotationOrigin =
											Mn(e).apply({
												x: parseFloat(k[0]) || 0,
												y: parseFloat(k[1]) || 0,
											})),
										Ct(!0, !0),
										(B = l.pointerX - U.x - q),
										(A = U.y - l.pointerY + w),
										(j = l.x),
										(X = l.y = Math.atan2(A, B) * sc))
									: ((X = L(u, "px")), (j = L(c, "px")))),
						tt &&
							v &&
							(j > nt
								? (j = nt + (j - nt) / v)
								: j < ut && (j = ut - (ut - j) / v),
							a ||
								(X > I
									? (X = I + (X - I) / v)
									: X < N && (X = N - (N - X) / v))),
						(l.startX = j = Ki(j)),
						(l.startY = X = Ki(X));
				},
				Be = function () {
					return l.tween && l.tween.isActive();
				},
				Ze = function () {
					Yi.parentNode &&
						!Be() &&
						!l.isDragging &&
						Yi.parentNode.removeChild(Yi);
				},
				Pe = function (v, q) {
					var w;
					if (
						!O ||
						l.isPressed ||
						!v ||
						((v.type === "mousedown" || v.type === "pointerdown") &&
							!q &&
							Qi() - M < 30 &&
							gs[l.pointerEvent.type])
					) {
						Rt && v && O && li(v);
						return;
					}
					if (
						((Et = Be()),
						(ze = !1),
						(l.pointerEvent = v),
						gs[v.type]
							? ((ot = ~v.type.indexOf("touch")
									? v.currentTarget || v.target
									: F),
								le(ot, "touchend", Nt),
								le(ot, "touchmove", dt),
								le(ot, "touchcancel", Nt),
								le(F, "touchstart", uc))
							: ((ot = null), le(F, "mousemove", dt)),
						(Mt = null),
						(!Qs || !ot) &&
							(le(F, "mouseup", Nt),
							v && v.target && le(v.target, "mouseup", Nt)),
						(Z = P.call(l, v.target) && i.dragClickables === !1 && !q),
						Z)
					) {
						le(v.target, "change", Nt),
							Zt(l, "pressInit", "onPressInit"),
							Zt(l, "press", "onPress"),
							Bs(g, !0),
							(Rt = !1);
						return;
					}
					if (
						((C =
							!ot ||
							f === d ||
							l.vars.allowNativeTouchScrolling === !1 ||
							(l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2))
								? !1
								: f
									? "y"
									: "x"),
						(Rt = !C && !l.allowEventDefault),
						Rt && (li(v), le(It, "touchforcechange", li)),
						v.changedTouches
							? ((v = G = v.changedTouches[0]), (J = v.identifier))
							: v.pointerId
								? (J = v.pointerId)
								: (G = J = null),
						ho++,
						pp(Wt),
						(H = l.pointerY = v.pageY),
						(Y = l.pointerX = v.pageX),
						Zt(l, "pressInit", "onPressInit"),
						(C || l.autoScroll) && jo(e.parentNode),
						e.parentNode &&
							l.autoScroll &&
							!R &&
							!a &&
							e.parentNode._gsMaxScrollX &&
							!Yi.parentNode &&
							!e.getBBox &&
							((Yi.style.width = e.parentNode.scrollWidth + "px"),
							e.parentNode.appendChild(Yi)),
						Qe(),
						l.tween && l.tween.kill(),
						(l.isThrowing = !1),
						Tt.killTweensOf(R || e, h, !0),
						R && Tt.killTweensOf(e, { scrollTo: 1 }, !0),
						(l.tween = l.lockedAxis = null),
						(i.zIndexBoost || (!a && !R && i.zIndexBoost !== !1)) &&
							(e.style.zIndex = t.zIndex++),
						(l.isPressed = !0),
						(gt = !!(i.onDrag || l._listeners.drag)),
						(T = !!(i.onMove || l._listeners.move)),
						i.cursor !== !1 || i.activeCursor)
					)
						for (w = g.length; --w > -1; )
							Tt.set(g[w], {
								cursor:
									i.activeCursor ||
									i.cursor ||
									(qr === "grab" ? "grabbing" : qr),
							});
					Zt(l, "press", "onPress");
				},
				dt = function (v) {
					var q = v,
						w,
						k,
						B,
						A,
						V,
						z;
					if (!O || ll || !l.isPressed || !v) {
						Rt && v && O && li(v);
						return;
					}
					if (((l.pointerEvent = v), (w = v.changedTouches), w)) {
						if (((v = w[0]), v !== G && v.identifier !== J)) {
							for (
								A = w.length;
								--A > -1 && (v = w[A]).identifier !== J && v.target !== e;

							);
							if (A < 0) return;
						}
					} else if (v.pointerId && J && v.pointerId !== J) return;
					if (
						ot &&
						C &&
						!Mt &&
						((ci.x = v.pageX - (E ? fr(F) : 0)),
						(ci.y = v.pageY - (E ? ur(F) : 0)),
						st && st.apply(ci, ci),
						(k = ci.x),
						(B = ci.y),
						(V = Math.abs(k - Y)),
						(z = Math.abs(B - H)),
						((V !== z && (V > p || z > p)) || (Br && C === Mt)) &&
							((Mt = V > z && f ? "x" : "y"),
							C && Mt !== C && le(It, "touchforcechange", li),
							l.vars.lockAxisOnTouchScroll !== !1 &&
								f &&
								d &&
								((l.lockedAxis = Mt === "x" ? "y" : "x"),
								Ji(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, q)),
							Br && C === Mt))
					) {
						Nt(q);
						return;
					}
					!l.allowEventDefault &&
					(!C || (Mt && C !== Mt)) &&
					q.cancelable !== !1
						? (li(q), (Rt = !0))
						: Rt && (Rt = !1),
						l.autoScroll && (_ = !0),
						xe(v.pageX, v.pageY, T);
				},
				xe = function (v, q, w) {
					var k = 1 - l.dragResistance,
						B = 1 - l.edgeResistance,
						A = l.pointerX,
						V = l.pointerY,
						z = X,
						Q = l.x,
						ct = l.y,
						rt = l.endX,
						_t = l.endY,
						Ot = l.endRotation,
						Dt = K,
						vt,
						wt,
						Pt,
						pt,
						_e,
						Ut;
					(l.pointerX = v),
						(l.pointerY = q),
						E && ((v -= fr(F)), (q -= ur(F))),
						a
							? ((pt = Math.atan2(U.y - q, v - U.x) * sc),
								(_e = l.y - pt),
								_e > 180
									? ((X -= 360), (l.y = pt))
									: _e < -180 && ((X += 360), (l.y = pt)),
								l.x !== j || Math.abs(X - pt) > p
									? ((l.y = pt), (Pt = j + (X - pt) * k))
									: (Pt = j))
							: (st &&
									((Ut = v * st.a + q * st.c + st.e),
									(q = v * st.b + q * st.d + st.f),
									(v = Ut)),
								(wt = q - H),
								(vt = v - Y),
								wt < p && wt > -p && (wt = 0),
								vt < p && vt > -p && (vt = 0),
								(l.lockAxis || l.lockedAxis) &&
									(vt || wt) &&
									((Ut = l.lockedAxis),
									Ut ||
										((l.lockedAxis = Ut =
											f && Math.abs(vt) > Math.abs(wt) ? "y" : d ? "x" : null),
										Ut &&
											Ji(l.vars.onLockAxis) &&
											l.vars.onLockAxis.call(l, l.pointerEvent)),
									Ut === "y" ? (wt = 0) : Ut === "x" && (vt = 0)),
								(Pt = Ki(j + vt * k)),
								(pt = Ki(X + wt * k))),
						(ft || et || W) &&
							(l.x !== Pt || (l.y !== pt && !a)) &&
							(W &&
								((Kn.x = Pt),
								(Kn.y = pt),
								(Ut = W(Kn)),
								(Pt = Ki(Ut.x)),
								(pt = Ki(Ut.y))),
							ft && (Pt = Ki(ft(Pt))),
							et && (pt = Ki(et(pt)))),
						tt &&
							(Pt > nt
								? (Pt = nt + Math.round((Pt - nt) * B))
								: Pt < ut && (Pt = ut + Math.round((Pt - ut) * B)),
							a ||
								(pt > I
									? (pt = Math.round(I + (pt - I) * B))
									: pt < N && (pt = Math.round(N + (pt - N) * B)))),
						(l.x !== Pt || (l.y !== pt && !a)) &&
							(a
								? ((l.endRotation = l.x = l.endX = Pt), (K = !0))
								: (d && ((l.y = l.endY = pt), (K = !0)),
									f && ((l.x = l.endX = Pt), (K = !0))),
							!w || Zt(l, "move", "onMove") !== !1
								? !l.isDragging &&
									l.isPressed &&
									((l.isDragging = ze = !0), Zt(l, "dragstart", "onDragStart"))
								: ((l.pointerX = A),
									(l.pointerY = V),
									(X = z),
									(l.x = Q),
									(l.y = ct),
									(l.endX = rt),
									(l.endY = _t),
									(l.endRotation = Ot),
									(K = Dt)));
				},
				Nt = function at(v, q) {
					if (
						!O ||
						!l.isPressed ||
						(v &&
							J != null &&
							!q &&
							((v.pointerId && v.pointerId !== J && v.target !== e) ||
								(v.changedTouches && !_p(v.changedTouches, J))))
					) {
						Rt && v && O && li(v);
						return;
					}
					l.isPressed = !1;
					var w = v,
						k = l.isDragging,
						B = l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2),
						A = Tt.delayedCall(0.001, Ze),
						V,
						z,
						Q,
						ct,
						rt;
					if (
						(ot
							? (ie(ot, "touchend", at),
								ie(ot, "touchmove", dt),
								ie(ot, "touchcancel", at),
								ie(F, "touchstart", uc))
							: ie(F, "mousemove", dt),
						ie(It, "touchforcechange", li),
						(!Qs || !ot) &&
							(ie(F, "mouseup", at),
							v && v.target && ie(v.target, "mouseup", at)),
						(K = !1),
						k && ((m = oc = Qi()), (l.isDragging = !1)),
						cc(Wt),
						Z && !B)
					) {
						v && (ie(v.target, "change", at), (l.pointerEvent = w)),
							Bs(g, !1),
							Zt(l, "release", "onRelease"),
							Zt(l, "click", "onClick"),
							(Z = !1);
						return;
					}
					for (z = g.length; --z > -1; )
						Wo(g[z], "cursor", i.cursor || (i.cursor !== !1 ? qr : null));
					if ((ho--, v)) {
						if (
							((V = v.changedTouches),
							V && ((v = V[0]), v !== G && v.identifier !== J))
						) {
							for (
								z = V.length;
								--z > -1 && (v = V[z]).identifier !== J && v.target !== e;

							);
							if (z < 0 && !q) return;
						}
						(l.pointerEvent = w),
							(l.pointerX = v.pageX),
							(l.pointerY = v.pageY);
					}
					return (
						B && w
							? (li(w), (Rt = !0), Zt(l, "release", "onRelease"))
							: w && !k
								? ((Rt = !1),
									Et && (i.snap || i.bounds) && Mi(i.inertia || i.throwProps),
									Zt(l, "release", "onRelease"),
									(!Br || w.type !== "touchmove") &&
										w.type.indexOf("cancel") === -1 &&
										(Zt(l, "click", "onClick"),
										Qi() - M < 300 && Zt(l, "doubleclick", "onDoubleClick"),
										(ct = w.target || e),
										(M = Qi()),
										(rt = function () {
											M !== ue &&
												l.enabled() &&
												!l.isPressed &&
												!w.defaultPrevented &&
												(ct.click
													? ct.click()
													: F.createEvent &&
														((Q = F.createEvent("MouseEvents")),
														Q.initMouseEvent(
															"click",
															!0,
															!0,
															It,
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
														ct.dispatchEvent(Q)));
										}),
										!Br && !w.defaultPrevented && Tt.delayedCall(0.05, rt)))
								: (Mi(i.inertia || i.throwProps),
									!l.allowEventDefault &&
									w &&
									(i.dragClickables !== !1 || !P.call(l, w.target)) &&
									k &&
									(!C || (Mt && C === Mt)) &&
									w.cancelable !== !1
										? ((Rt = !0), li(w))
										: (Rt = !1),
									Zt(l, "release", "onRelease")),
						Be() && A.duration(l.tween.duration()),
						k && Zt(l, "dragend", "onDragEnd"),
						!0
					);
				},
				we = function (v) {
					if (v && l.isDragging && !R) {
						var q = v.target || e.parentNode,
							w = q.scrollLeft - q._gsScrollX,
							k = q.scrollTop - q._gsScrollY;
						(w || k) &&
							(st
								? ((Y -= w * st.a + k * st.c), (H -= k * st.d + w * st.b))
								: ((Y -= w), (H -= k)),
							(q._gsScrollX += w),
							(q._gsScrollY += k),
							xe(l.pointerX, l.pointerY));
					}
				},
				qe = function (v) {
					var q = Qi(),
						w = q - M < 100,
						k = q - m < 50,
						B = w && ue === M,
						A = l.pointerEvent && l.pointerEvent.defaultPrevented,
						V = w && kt === M,
						z = v.isTrusted || (v.isTrusted == null && w && B);
					if (
						((B || (k && l.vars.suppressClickOnDrag !== !1)) &&
							v.stopImmediatePropagation &&
							v.stopImmediatePropagation(),
						w &&
							!(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
							(!B || (z && !V)))
					) {
						z && B && (kt = M), (ue = M);
						return;
					}
					(l.isPressed || k || w) && (!z || !v.detail || !w || A) && li(v),
						!w &&
							!k &&
							!ze &&
							(v && v.target && (l.pointerEvent = v),
							Zt(l, "click", "onClick"));
				},
				Oi = function (v) {
					return st
						? {
								x: v.x * st.a + v.y * st.c + st.e,
								y: v.x * st.b + v.y * st.d + st.f,
							}
						: { x: v.x, y: v.y };
				};
			return (
				(lt = t.get(e)),
				lt && lt.kill(),
				(n.startDrag = function (at, v) {
					var q, w, k, B;
					Pe(at || l.pointerEvent, !0),
						v &&
							!l.hitTest(at || l.pointerEvent) &&
							((q = Qn(at || l.pointerEvent)),
							(w = Qn(e)),
							(k = Oi({ x: q.left + q.width / 2, y: q.top + q.height / 2 })),
							(B = Oi({ x: w.left + w.width / 2, y: w.top + w.height / 2 })),
							(Y -= k.x - B.x),
							(H -= k.y - B.y)),
						l.isDragging ||
							((l.isDragging = ze = !0), Zt(l, "dragstart", "onDragStart"));
				}),
				(n.drag = dt),
				(n.endDrag = function (at) {
					return Nt(at || l.pointerEvent, !0);
				}),
				(n.timeSinceDrag = function () {
					return l.isDragging ? 0 : (Qi() - m) / 1e3;
				}),
				(n.timeSinceClick = function () {
					return (Qi() - M) / 1e3;
				}),
				(n.hitTest = function (at, v) {
					return t.hitTest(l.target, at, v);
				}),
				(n.getDirection = function (at, v) {
					var q =
							at === "velocity" && vi ? at : es(at) && !a ? "element" : "start",
						w,
						k,
						B,
						A,
						V,
						z;
					return (
						q === "element" && ((V = Qn(l.target)), (z = Qn(at))),
						(w =
							q === "start"
								? l.x - j
								: q === "velocity"
									? vi.getVelocity(e, c)
									: V.left + V.width / 2 - (z.left + z.width / 2)),
						a
							? w < 0
								? "counter-clockwise"
								: "clockwise"
							: ((v = v || 2),
								(k =
									q === "start"
										? l.y - X
										: q === "velocity"
											? vi.getVelocity(e, u)
											: V.top + V.height / 2 - (z.top + z.height / 2)),
								(B = Math.abs(w / k)),
								(A = B < 1 / v ? "" : w < 0 ? "left" : "right"),
								B < v && (A !== "" && (A += "-"), (A += k < 0 ? "up" : "down")),
								A)
					);
				}),
				(n.applyBounds = function (at, v) {
					var q, w, k, B, A, V;
					if (at && i.bounds !== at) return (i.bounds = at), l.update(!0, v);
					if ((Ct(!0), ge(), tt && !Be())) {
						if (
							((q = l.x),
							(w = l.y),
							q > nt ? (q = nt) : q < ut && (q = ut),
							w > I ? (w = I) : w < N && (w = N),
							(l.x !== q || l.y !== w) &&
								((k = !0),
								(l.x = l.endX = q),
								a ? (l.endRotation = q) : (l.y = l.endY = w),
								(K = !0),
								Wt(!0),
								l.autoScroll && !l.isDragging))
						)
							for (
								jo(e.parentNode),
									B = e,
									zi.scrollTop =
										It.pageYOffset != null
											? It.pageYOffset
											: F.documentElement.scrollTop != null
												? F.documentElement.scrollTop
												: F.body.scrollTop,
									zi.scrollLeft =
										It.pageXOffset != null
											? It.pageXOffset
											: F.documentElement.scrollLeft != null
												? F.documentElement.scrollLeft
												: F.body.scrollLeft;
								B && !V;

							)
								(V = yr(B.parentNode)),
									(A = V ? zi : B.parentNode),
									d &&
										A.scrollTop > A._gsMaxScrollY &&
										(A.scrollTop = A._gsMaxScrollY),
									f &&
										A.scrollLeft > A._gsMaxScrollX &&
										(A.scrollLeft = A._gsMaxScrollX),
									(B = A);
						l.isThrowing &&
							(k || l.endX > nt || l.endX < ut || l.endY > I || l.endY < N) &&
							Mi(i.inertia || i.throwProps, k);
					}
					return l;
				}),
				(n.update = function (at, v, q) {
					if (v && l.isPressed) {
						var w = Mn(e),
							k = Ue.apply({ x: l.x - j, y: l.y - X }),
							B = Mn(e.parentNode, !0);
						B.apply({ x: w.e - k.x, y: w.f - k.y }, k),
							(l.x -= k.x - B.e),
							(l.y -= k.y - B.f),
							Wt(!0),
							Qe();
					}
					var A = l.x,
						V = l.y;
					return (
						Ke(!v),
						at ? l.applyBounds() : (K && q && Wt(!0), Ct(!0)),
						v && (xe(l.pointerX, l.pointerY), K && Wt(!0)),
						l.isPressed &&
							!v &&
							((f && Math.abs(A - l.x) > 0.01) ||
								(d && Math.abs(V - l.y) > 0.01 && !a)) &&
							Qe(),
						l.autoScroll &&
							(jo(e.parentNode, l.isDragging),
							(_ = l.isDragging),
							Wt(!0),
							dc(e, we),
							fc(e, we)),
						l
					);
				}),
				(n.enable = function (at) {
					var v = { lazy: !0 },
						q,
						w,
						k;
					if (
						(i.cursor !== !1 && (v.cursor = i.cursor || qr),
						Tt.utils.checkPrefix("touchCallout") && (v.touchCallout = "none"),
						at !== "soft")
					) {
						for (
							ac(
								g,
								f === d
									? "none"
									: (i.allowNativeTouchScrolling &&
												(e.scrollHeight === e.clientHeight) ==
													(e.scrollWidth === e.clientHeight)) ||
										  i.allowEventDefault
										? "manipulation"
										: f
											? "pan-y"
											: "pan-x",
							),
								w = g.length;
							--w > -1;

						)
							(k = g[w]),
								Qs || le(k, "mousedown", Pe),
								le(k, "touchstart", Pe),
								le(k, "click", qe, !0),
								Tt.set(k, v),
								k.getBBox &&
									k.ownerSVGElement &&
									f !== d &&
									Tt.set(k.ownerSVGElement, {
										touchAction:
											i.allowNativeTouchScrolling || i.allowEventDefault
												? "manipulation"
												: f
													? "pan-y"
													: "pan-x",
									}),
								i.allowContextMenu || le(k, "contextmenu", Xt);
						Bs(g, !1);
					}
					return (
						fc(e, we),
						(O = !0),
						vi &&
							at !== "soft" &&
							vi.track(R || e, o ? "x,y" : a ? "rotation" : "top,left"),
						(e._gsDragID = q = "d" + fp++),
						(cr[q] = l),
						R && (R.enable(), (R.element._gsDragID = q)),
						(i.bounds || a) && Qe(),
						i.bounds && l.applyBounds(),
						l
					);
				}),
				(n.disable = function (at) {
					for (var v = l.isDragging, q = g.length, w; --q > -1; )
						Wo(g[q], "cursor", null);
					if (at !== "soft") {
						for (ac(g, null), q = g.length; --q > -1; )
							(w = g[q]),
								Wo(w, "touchCallout", null),
								ie(w, "mousedown", Pe),
								ie(w, "touchstart", Pe),
								ie(w, "click", qe, !0),
								ie(w, "contextmenu", Xt);
						Bs(g, !0),
							ot &&
								(ie(ot, "touchcancel", Nt),
								ie(ot, "touchend", Nt),
								ie(ot, "touchmove", dt)),
							ie(F, "mouseup", Nt),
							ie(F, "mousemove", dt);
					}
					return (
						dc(e, we),
						(O = !1),
						vi &&
							at !== "soft" &&
							(vi.untrack(R || e, o ? "x,y" : a ? "rotation" : "top,left"),
							l.tween && l.tween.kill()),
						R && R.disable(),
						cc(Wt),
						(l.isDragging = l.isPressed = Z = !1),
						v && Zt(l, "dragend", "onDragEnd"),
						l
					);
				}),
				(n.enabled = function (at, v) {
					return arguments.length ? (at ? l.enable(v) : l.disable(v)) : O;
				}),
				(n.kill = function () {
					return (
						(l.isThrowing = !1),
						l.tween && l.tween.kill(),
						l.disable(),
						Tt.set(g, { clearProps: "userSelect" }),
						delete cr[e._gsDragID],
						l
					);
				}),
				(n.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~s.indexOf("scroll") &&
					((R = n.scrollProxy =
						new wp(
							e,
							hp(
								{
									onKill: function () {
										l.isPressed && Nt(null);
									},
								},
								i,
							),
						)),
					(e.style.overflowY = d && !Ma ? "auto" : "hidden"),
					(e.style.overflowX = f && !Ma ? "auto" : "hidden"),
					(e = R.content)),
				a ? (h.rotation = 1) : (f && (h[c] = 1), d && (h[u] = 1)),
				(D.force3D = "force3D" in i ? i.force3D : !0),
				af(rc(n)),
				n.enable(),
				n
			);
		}
		return (
			(t.register = function (i) {
				(Tt = i), Uo();
			}),
			(t.create = function (i, n) {
				return (
					Sa || Uo(!0),
					on(i).map(function (s) {
						return new t(s, n);
					})
				);
			}),
			(t.get = function (i) {
				return cr[(on(i)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Qi() - oc) / 1e3;
			}),
			(t.hitTest = function (i, n, s) {
				if (i === n) return !1;
				var o = Qn(i),
					a = Qn(n),
					c = o.top,
					u = o.left,
					f = o.right,
					d = o.bottom,
					p = o.width,
					l = o.height,
					g = a.left > f || a.right < u || a.top > d || a.bottom < c,
					h,
					m,
					_;
				return g || !s
					? !g
					: ((_ = (s + "").indexOf("%") !== -1),
						(s = parseFloat(s) || 0),
						(h = { left: Math.max(u, a.left), top: Math.max(c, a.top) }),
						(h.width = Math.min(f, a.right) - h.left),
						(h.height = Math.min(d, a.bottom) - h.top),
						h.width < 0 || h.height < 0
							? !1
							: _
								? ((s *= 0.01),
									(m = h.width * h.height),
									m >= p * l * s || m >= a.width * a.height * s)
								: h.width > s && h.height > s);
			}),
			t
		);
	})(bp);
gp(vr.prototype, {
	pointerX: 0,
	pointerY: 0,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	isDragging: !1,
	isPressed: !1,
});
vr.zIndex = 1e3;
vr.version = "3.12.5";
cf() && Tt.registerPlugin(vr);
const ht = "power4.inOut",
	gc = "expo.inOut",
	He = (r, t = !0, e = 0) => (t ? e : r);
function Tp(r, t) {
	(r = $.utils.toArray(r)), (t = t || {});
	let e = t.onChange,
		i = 0,
		n = $.timeline({
			repeat: t.repeat,
			onUpdate:
				e &&
				function () {
					let O = n.closestIndex();
					i !== O && ((i = O), e(r[O], O));
				},
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => n.totalTime(n.rawTime() + n.duration() * 100),
		}),
		s = r.length,
		o = r[0].offsetLeft,
		a = [],
		c = [],
		u = [],
		f = [],
		d = 0,
		p = !1,
		l = t.center,
		g = (t.speed || 1) * 100,
		h = t.snap === !1 ? (O) => O : $.utils.snap(t.snap || 1),
		m = 0,
		_ = l === !0 ? r[0].parentNode : $.utils.toArray(l)[0] || r[0].parentNode,
		y,
		S = () =>
			r[s - 1].offsetLeft +
			(f[s - 1] / 100) * c[s - 1] -
			o +
			u[0] +
			r[s - 1].offsetWidth * $.getProperty(r[s - 1], "scaleX") +
			(parseFloat(t.paddingRight) || 0),
		x = () => {
			let O = _.getBoundingClientRect(),
				R;
			r.forEach((Y, H) => {
				(c[H] = parseFloat($.getProperty(Y, "width", "px"))),
					(f[H] = h(
						(parseFloat($.getProperty(Y, "x", "px")) / c[H]) * 100 +
							$.getProperty(Y, "xPercent"),
					)),
					(R = Y.getBoundingClientRect()),
					(u[H] = R.left - (H ? O.right : O.left)),
					(O = R);
			}),
				$.set(r, { xPercent: (Y) => f[Y] }),
				(y = S());
		},
		b,
		P = () => {
			(m = l ? (n.duration() * (_.offsetWidth / 2)) / y : 0),
				l &&
					a.forEach((O, R) => {
						a[R] = b(n.labels["label" + R] + (n.duration() * c[R]) / 2 / y - m);
					});
		},
		M = (O, R, Y) => {
			let H = O.length,
				j = 1e10,
				X = 0,
				tt;
			for (; H--; )
				(tt = Math.abs(O[H] - R)),
					tt > Y / 2 && (tt = Y - tt),
					tt < j && ((j = tt), (X = H));
			return X;
		},
		D = () => {
			let O, R, Y, H, j;
			for (n.clear(), O = 0; O < s; O++)
				(R = r[O]),
					(Y = (f[O] / 100) * c[O]),
					(H = R.offsetLeft + Y - o + u[0]),
					(j = H + c[O] * $.getProperty(R, "scaleX")),
					n
						.to(R, { xPercent: h(((Y - j) / c[O]) * 100), duration: j / g }, 0)
						.fromTo(
							R,
							{ xPercent: h(((Y - j + y) / c[O]) * 100) },
							{
								xPercent: f[O],
								duration: (Y - j + y - Y) / g,
								immediateRender: !1,
							},
							j / g,
						)
						.add("label" + O, H / g),
					(a[O] = H / g);
			b = $.utils.wrap(0, n.duration());
		},
		E = (O) => {
			let R = n.progress();
			n.progress(0, !0),
				x(),
				O && D(),
				P(),
				O && n.draggable ? n.time(a[d], !0) : n.progress(R, !0);
		},
		L;
	$.set(r, { x: 0 }),
		x(),
		D(),
		P(),
		window.addEventListener("resize", () => E(!0));
	function F(O, R) {
		(R = R || {}), Math.abs(O - d) > s / 2 && (O += O > d ? -s : s);
		let Y = $.utils.wrap(0, s, O),
			H = a[Y];
		return (
			H > n.time() != O > d &&
				O !== d &&
				(H += n.duration() * (O > d ? 1 : -1)),
			(H < 0 || H > n.duration()) && (R.modifiers = { time: b }),
			(d = Y),
			(R.overwrite = !0),
			$.killTweensOf(L),
			R.duration === 0 ? n.time(b(H)) : n.tweenTo(H, R)
		);
	}
	if (
		((n.toIndex = (O, R) => F(O, R)),
		(n.closestIndex = (O) => {
			let R = M(a, n.time(), n.duration());
			return O && ((d = R), (p = !1)), R;
		}),
		(n.current = () => (p ? n.closestIndex(!0) : d)),
		(n.next = (O) => F(n.current() + 1, O)),
		(n.previous = (O) => F(n.current() - 1, O)),
		(n.times = a),
		n.progress(1, !0).progress(0, !0),
		t.reversed && (n.vars.onReverseComplete(), n.reverse()),
		t.draggable && typeof vr == "function")
	) {
		L = document.createElement("div");
		let O = $.utils.wrap(0, 1),
			R,
			Y,
			H,
			j,
			X,
			tt = () => n.progress(O(Y + (H.startX - H.x) * R)),
			gt = () => n.closestIndex(!0);
		typeof InertiaPlugin > "u" &&
			console.warn(
				"InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
			),
			(H = vr.create(L, {
				trigger: r[0].parentNode,
				type: "x",
				onPressInit() {
					let T = this.x;
					$.killTweensOf(n),
						(Y = n.progress()),
						E(),
						(R = 1 / y),
						(X = Y / -R - T),
						$.set(L, { x: Y / -R });
				},
				onDrag: tt,
				onThrowUpdate: tt,
				overshootTolerance: 0,
				inertia: !0,
				snap(T) {
					if (Math.abs(Y / -R - this.x) < 10) return j + X;
					let nt = -(T * R) * n.duration(),
						ut = b(nt),
						I = a[M(a, ut, n.duration())],
						N = I - ut;
					return (
						Math.abs(N) > n.duration() / 2 &&
							(N += N < 0 ? n.duration() : -n.duration()),
						(j = (nt + N) / n.duration() / -R),
						j
					);
				},
				onRelease() {
					gt(), H.isThrowing && (p = !0);
				},
				onThrowComplete: gt,
			})[0]),
			(n.draggable = H);
	}
	return n.closestIndex(!0), (i = d), e && e(r[d], d), n;
}
const Ko = 66,
	_c = 5e3;
class Sp {
	constructor() {
		zt(this, "onSlideCtaClick", (t) => {
			const e = t.currentTarget,
				i = e.closest(".js-features-carousel-item");
			if ((t.preventDefault(), i.classList.contains("is-active"))) {
				const n = e.getAttribute("href"),
					s = document.querySelector(`${n}`);
				s && tf(s, 150);
			} else this.instance.scrollTo(parseInt(i.dataset.index, 10));
		});
		zt(this, "onSlideChange", () => {
			var o, a;
			const t =
					(a = (o = this.instance) == null ? void 0 : o.plugins()) == null
						? void 0
						: a.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const i = this.DOM.slides[e],
				n = this.DOM.slides[this.activeIndex];
			$.timeline({
				onStart: () => {
					this.DOM.wrap.classList.add("is-animate"),
						t.stop(),
						this.progressTl.pause();
				},
				onComplete: () => {
					t.play(),
						this.progressTl.restart(),
						this.DOM.wrap.classList.remove("is-animate");
				},
			})
				.add(this.outSlide(i))
				.add(this.inSlide(n), "<");
		});
		zt(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				i = t.querySelector(".js-features-carousel-ill"),
				n = $.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				Kt.device < 1
					? n
							.to(t, {
								opacity: 0,
								xPercent: -200,
								rotate: -5,
								duration: 0.8,
								ease: ht,
								onComplete: () => {
									$.set(t, { xPercent: 0, rotate: 5 });
								},
							})
							.to(i, { opacity: 0, duration: 0.8, ease: ht }, "-=0.67")
					: n
							.to(t, { height: Ko, duration: 0.8, ease: ht })
							.to(i, { opacity: 0, duration: 0.4, ease: ht }, "-=0.8")
							.to(
								e,
								{ opacity: 0, height: 0, duration: 0.8, ease: ht },
								"-=0.8",
							),
				n
			);
		});
		zt(this, "inSlide", (t, e = !1) => {
			const i = t.querySelector(".js-features-carousel-item-text"),
				n = t.querySelector(".js-features-carousel-ill"),
				s = $.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				Kt.device < 1
					? s
							.to(t, {
								opacity: 1,
								xPercent: -100,
								rotate: 0,
								duration: He(0.8, e),
								ease: ht,
							})
							.to(
								n,
								{ opacity: 1, duration: He(0.8, e), ease: ht },
								He("-=0.67", e),
							)
					: s
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: He(0.8, e),
								ease: ht,
							})
							.to(
								i,
								{ opacity: 1, height: "auto", duration: He(0.8, e), ease: ht },
								He("-=0.67", e),
							)
							.to(
								n,
								{ opacity: 1, duration: He(0.8, e), ease: ht },
								He("-=0.67", e),
							),
				s
			);
		});
		zt(this, "start", () => {
			var t, e, i;
			this.progressTl.play(),
				(i =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay) == null || i.play();
		});
		zt(this, "hide", () => {
			const t = $.timeline();
			if (Kt.device < 1) {
				const e = this.DOM.slides[this.activeIndex],
					i = e.querySelectorAll(".js-features-carousel-content");
				t.set(e, { transformOrigin: "50% 100%", scale: 0, y: 30 })
					.set(i, { opacity: 0 })
					.set(this.DOM.progress, { opacity: 0, y: 20 });
			} else
				for (let e = 0; e < this.DOM.slides.length; e++) {
					const i = this.DOM.slides[e],
						n = i.querySelectorAll(".js-features-carousel-content");
					t.set(i, { transformOrigin: "50% 100%", opacity: 0, y: 30 })
						.set(n, { opacity: 0 })
						.set(this.DOM.progress, { opacity: 0, y: 20 });
				}
			return t;
		});
		zt(this, "reveal", () => {
			const t = $.timeline();
			if (Kt.device < 1) {
				const e = this.DOM.slides[this.activeIndex],
					i = e.querySelectorAll(".js-features-carousel-content");
				t.to(e, { scale: 1, y: 0, duration: 0.8, ease: ht })
					.to(i, { opacity: 1, duration: 0.8, ease: ht }, "-=0.3")
					.to(
						this.DOM.progress,
						{ opacity: 1, y: 0, duration: 0.8, ease: ht },
						"-=0.8",
					);
			} else {
				const e = $.utils.toArray(this.DOM.slides).reverse();
				for (let i = 0; i < e.length; i++) {
					const n = $.timeline(),
						s = e[i],
						o = s.querySelectorAll(".js-features-carousel-content");
					n
						.to(s, { y: 0, opacity: 1, duration: 0.8, ease: ht })
						.set(o, { opacity: 1, duration: 0.8, ease: ht }, "-=0.3")
						.to(
							this.DOM.progress,
							{ opacity: 1, y: 0, duration: 0.8, ease: ht },
							"-=0.8",
						),
						t.add(n, i * 0.07);
				}
			}
			return t;
		});
		this.init();
	}
	setup() {
		(this.layoutMode = Kt.device < 1 ? "mobile" : "desktop"),
			(this.hRatio = Kt.device < 1 ? 1 : 0.72331),
			(this.instance = rl(this.DOM.fakeCarousel, { loop: !0 }, [
				sl({ delay: _c, playOnInit: !1 }),
			])),
			Kt.device < 1 &&
				($.set(this.DOM.slides, { opacity: 0, xPercent: 0, rotate: 5 }),
				$.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 })),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
		for (let t = 0; t < this.DOM.ctas.length; t++)
			this.DOM.ctas[t].addEventListener("click", this.onSlideCtaClick);
		this.progressTl = $.timeline({ paused: !0 }).to(this.DOM.progressbar, {
			scaleX: 1,
			duration: _c / 1e3,
			ease: "linear",
		});
	}
	destroy() {
		var t, e;
		if (this.DOM) {
			((e = (t = this.instance) == null ? void 0 : t.plugins()) == null
				? void 0
				: e.autoplay
			).stop(),
				this.instance.off("select", this.onSlideChange),
				this.instance.destroy();
			for (let n = 0; n < this.DOM.ctas.length; n++)
				this.DOM.ctas[n].removeEventListener("click", this.onSlideCtaClick);
			(this.instance = void 0), (this.DOM = void 0);
		}
	}
	resize() {
		var t, e;
		if (this.DOM) {
			if (
				((this.hRatio = Kt.device < 1 ? 1 : 0.72331),
				Kt.device < 1 && this.layoutMode !== "mobile"
					? ($.set(this.DOM.slides, {
							opacity: 0,
							xPercent: 0,
							rotate: 5,
							height: "auto",
						}),
						$.set(this.DOM.slides[this.activeIndex], {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
						}),
						$.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 }))
					: Kt.device >= 1 && this.layoutMode !== "desktop"
						? ($.set(this.DOM.slides, {
								opacity: 1,
								xPercent: "none",
								rotate: 0,
								height: Ko,
							}),
							$.set(this.DOM.slidesTexts, { height: 0, opacity: 0 }),
							$.set(this.DOM.slides[this.activeIndex], {
								height: (i, n) => n.offsetWidth * this.hRatio,
							}),
							$.set(this.DOM.slidesTexts[this.activeIndex], { height: "auto" }))
						: Kt.device >= 1 &&
							this.layoutMode === "desktop" &&
							$.set(this.DOM.slides, {
								height: (i) =>
									i === this.activeIndex
										? this.DOM.slides[i].offsetWidth * this.hRatio
										: Ko,
							}),
				Kt.device >= 1 || (Kt.device < 1 && this.layoutMode !== "mobile"))
			) {
				const i =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay;
				this.progressTl.pause(),
					i.reset(),
					i.play(),
					this.progressTl.restart(),
					this.progressTl.play();
			}
			this.layoutMode = Kt.device < 1 ? "mobile" : "desktop";
		}
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
			(this.DOM.slidesTexts = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item-text",
			)),
			(this.DOM.ctas = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-cta",
			)),
			(this.DOM.progress = this.DOM.wrap.querySelector(
				".js-features-carousel-progress",
			)),
			(this.DOM.progressbar = this.DOM.wrap.querySelector(
				".js-features-carousel-progressbar",
			)),
			(this.instance = void 0),
			(this.activeIndex = 0),
			this.setup());
	}
}
class Mp {
	constructor() {
		this.instances = {};
	}
	add(t, e, i) {
		this.instances[t] = { key: t, instance: e, preserve: i };
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
			i = this.instances[t] ? this.instances[t].preserve : !1;
		e && !i && e.destroy && e.destroy();
	}
	destroyAll() {
		for (const t in this.instances) this.destroy(t);
	}
	map(t, ...e) {
		for (const i in this.instances) {
			const n = this.get(i);
			n[t] && n[t](...e);
		}
	}
	call(t, e, ...i) {
		const n = this.get(t);
		if (n && n[e]) return n[e](...i);
	}
}
const Jt = new Mp();
class Op {
	constructor() {
		zt(this, "onMouseMove", (t) => {
			const i = t.currentTarget.querySelectorAll(".js-glow-card");
			for (let n = 0; n < i.length; n++) {
				const s = i[n].getBoundingClientRect(),
					o = t.clientX - s.left,
					a = t.clientY - s.top;
				i[n].style.setProperty("--mouse-x", `${o}px`),
					i[n].style.setProperty("--mouse-y", `${a}px`);
			}
		});
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.sections.length; t++)
			this.DOM.sections[t].addEventListener("mousemove", this.onMouseMove);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll(".js-glow-cards");
		e.length && ((this.DOM = {}), (this.DOM.sections = e), this.setup());
	}
}
class Dp {
	constructor() {
		zt(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const i = t.currentTarget.getAttribute("href"),
				n = document.querySelector(`${i}`);
			n ? tf(n, 150) : console.warn("Target non esiste per l'id: ", i);
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
const gn = typeof window < "u",
	hf =
		(gn && !("onscroll" in window)) ||
		(typeof navigator < "u" &&
			/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
	pf = gn && "IntersectionObserver" in window,
	gf = gn && "classList" in document.createElement("p"),
	_f = gn && window.devicePixelRatio > 1,
	Cp = {
		elements_selector: ".lazy",
		container: hf || gn ? document : null,
		threshold: 300,
		thresholds: null,
		data_src: "src",
		data_srcset: "srcset",
		data_sizes: "sizes",
		data_bg: "bg",
		data_bg_hidpi: "bg-hidpi",
		data_bg_multi: "bg-multi",
		data_bg_multi_hidpi: "bg-multi-hidpi",
		data_bg_set: "bg-set",
		data_poster: "poster",
		class_applied: "applied",
		class_loading: "loading",
		class_loaded: "loaded",
		class_error: "error",
		class_entered: "entered",
		class_exited: "exited",
		unobserve_completed: !0,
		unobserve_entered: !1,
		cancel_on_exit: !0,
		callback_enter: null,
		callback_exit: null,
		callback_applied: null,
		callback_loading: null,
		callback_loaded: null,
		callback_error: null,
		callback_finish: null,
		callback_cancel: null,
		use_native: !1,
		restore_on_error: !1,
	},
	mf = (r) => Object.assign({}, Cp, r),
	mc = function (r, t) {
		let e;
		const i = "LazyLoad::Initialized",
			n = new r(t);
		try {
			e = new CustomEvent(i, { detail: { instance: n } });
		} catch {
			(e = document.createEvent("CustomEvent")),
				e.initCustomEvent(i, !1, !1, { instance: n });
		}
		window.dispatchEvent(e);
	},
	Pp = (r, t) => {
		if (t)
			if (!t.length) mc(r, t);
			else for (let e = 0, i; (i = t[e]); e += 1) mc(r, i);
	},
	Ui = "src",
	cl = "srcset",
	ul = "sizes",
	yf = "poster",
	xs = "llOriginalAttrs",
	vf = "data",
	fl = "loading",
	xf = "loaded",
	wf = "applied",
	Ep = "entered",
	dl = "error",
	bf = "native",
	Tf = "data-",
	Sf = "ll-status",
	We = (r, t) => r.getAttribute(Tf + t),
	kp = (r, t, e) => {
		const i = Tf + t;
		if (e === null) {
			r.removeAttribute(i);
			return;
		}
		r.setAttribute(i, e);
	},
	ws = (r) => We(r, Sf),
	jn = (r, t) => kp(r, Sf, t),
	bo = (r) => jn(r, null),
	hl = (r) => ws(r) === null,
	Ap = (r) => ws(r) === fl,
	Lp = (r) => ws(r) === dl,
	pl = (r) => ws(r) === bf,
	Ip = [fl, xf, wf, dl],
	Rp = (r) => Ip.indexOf(ws(r)) >= 0,
	_n = (r, t, e, i) => {
		if (!(!r || typeof r != "function")) {
			if (i !== void 0) {
				r(t, e, i);
				return;
			}
			if (e !== void 0) {
				r(t, e);
				return;
			}
			r(t);
		}
	},
	wr = (r, t) => {
		if (gf) {
			r.classList.add(t);
			return;
		}
		r.className += (r.className ? " " : "") + t;
	},
	ki = (r, t) => {
		if (gf) {
			r.classList.remove(t);
			return;
		}
		r.className = r.className
			.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
			.replace(/^\s+/, "")
			.replace(/\s+$/, "");
	},
	Np = (r) => {
		r.llTempImage = document.createElement("IMG");
	},
	Fp = (r) => {
		delete r.llTempImage;
	},
	Mf = (r) => r.llTempImage,
	To = (r, t) => {
		if (!t) return;
		const e = t._observer;
		e && e.unobserve(r);
	},
	zp = (r) => {
		r.disconnect();
	},
	Bp = (r, t, e) => {
		t.unobserve_entered && To(r, e);
	},
	gl = (r, t) => {
		r && (r.loadingCount += t);
	},
	qp = (r) => {
		r && (r.toLoadCount -= 1);
	},
	Of = (r, t) => {
		r && (r.toLoadCount = t);
	},
	Yp = (r) => r.loadingCount > 0,
	Hp = (r) => r.toLoadCount > 0,
	Df = (r) => {
		let t = [];
		for (let e = 0, i; (i = r.children[e]); e += 1)
			i.tagName === "SOURCE" && t.push(i);
		return t;
	},
	_l = (r, t) => {
		const e = r.parentNode;
		if (!e || e.tagName !== "PICTURE") return;
		Df(e).forEach(t);
	},
	Cf = (r, t) => {
		Df(r).forEach(t);
	},
	So = [Ui],
	Pf = [Ui, yf],
	ms = [Ui, cl, ul],
	Ef = [vf],
	Mo = (r) => !!r[xs],
	kf = (r) => r[xs],
	Af = (r) => delete r[xs],
	xr = (r, t) => {
		if (Mo(r)) return;
		const e = {};
		t.forEach((i) => {
			e[i] = r.getAttribute(i);
		}),
			(r[xs] = e);
	},
	Xp = (r) => {
		Mo(r) || (r[xs] = { backgroundImage: r.style.backgroundImage });
	},
	$p = (r, t, e) => {
		if (!e) {
			r.removeAttribute(t);
			return;
		}
		r.setAttribute(t, e);
	},
	$n = (r, t) => {
		if (!Mo(r)) return;
		const e = kf(r);
		t.forEach((i) => {
			$p(r, i, e[i]);
		});
	},
	Vp = (r) => {
		if (!Mo(r)) return;
		const t = kf(r);
		r.style.backgroundImage = t.backgroundImage;
	},
	Lf = (r, t, e) => {
		wr(r, t.class_applied),
			jn(r, wf),
			e && (t.unobserve_completed && To(r, t), _n(t.callback_applied, r, e));
	},
	If = (r, t, e) => {
		wr(r, t.class_loading),
			jn(r, fl),
			e && (gl(e, 1), _n(t.callback_loading, r, e));
	},
	un = (r, t, e) => {
		e && r.setAttribute(t, e);
	},
	yc = (r, t) => {
		un(r, ul, We(r, t.data_sizes)),
			un(r, cl, We(r, t.data_srcset)),
			un(r, Ui, We(r, t.data_src));
	},
	jp = (r, t) => {
		_l(r, (e) => {
			xr(e, ms), yc(e, t);
		}),
			xr(r, ms),
			yc(r, t);
	},
	Wp = (r, t) => {
		xr(r, So), un(r, Ui, We(r, t.data_src));
	},
	Gp = (r, t) => {
		Cf(r, (e) => {
			xr(e, So), un(e, Ui, We(e, t.data_src));
		}),
			xr(r, Pf),
			un(r, yf, We(r, t.data_poster)),
			un(r, Ui, We(r, t.data_src)),
			r.load();
	},
	Up = (r, t) => {
		xr(r, Ef), un(r, vf, We(r, t.data_src));
	},
	Kp = (r, t, e) => {
		const i = We(r, t.data_bg),
			n = We(r, t.data_bg_hidpi),
			s = _f && n ? n : i;
		s &&
			((r.style.backgroundImage = `url("${s}")`),
			Mf(r).setAttribute(Ui, s),
			If(r, t, e));
	},
	Qp = (r, t, e) => {
		const i = We(r, t.data_bg_multi),
			n = We(r, t.data_bg_multi_hidpi),
			s = _f && n ? n : i;
		s && ((r.style.backgroundImage = s), Lf(r, t, e));
	},
	Zp = (r, t, e) => {
		const i = We(r, t.data_bg_set);
		if (!i) return;
		const n = i.split("|");
		let s = n.map((o) => `image-set(${o})`);
		(r.style.backgroundImage = s.join()),
			r.style.backgroundImage === "" &&
				((s = n.map((o) => `-webkit-image-set(${o})`)),
				(r.style.backgroundImage = s.join())),
			Lf(r, t, e);
	},
	Rf = { IMG: jp, IFRAME: Wp, VIDEO: Gp, OBJECT: Up },
	Jp = (r, t) => {
		const e = Rf[r.tagName];
		e && e(r, t);
	},
	tg = (r, t, e) => {
		const i = Rf[r.tagName];
		i && (i(r, t), If(r, t, e));
	},
	eg = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
	ig = (r) => eg.indexOf(r.tagName) > -1,
	Nf = (r, t) => {
		t && !Yp(t) && !Hp(t) && _n(r.callback_finish, t);
	},
	vc = (r, t, e) => {
		r.addEventListener(t, e), (r.llEvLisnrs[t] = e);
	},
	ng = (r, t, e) => {
		r.removeEventListener(t, e);
	},
	ml = (r) => !!r.llEvLisnrs,
	rg = (r, t, e) => {
		ml(r) || (r.llEvLisnrs = {});
		const i = r.tagName === "VIDEO" ? "loadeddata" : "load";
		vc(r, i, t), vc(r, "error", e);
	},
	Pa = (r) => {
		if (!ml(r)) return;
		const t = r.llEvLisnrs;
		for (let e in t) {
			const i = t[e];
			ng(r, e, i);
		}
		delete r.llEvLisnrs;
	},
	Ff = (r, t, e) => {
		Fp(r),
			gl(e, -1),
			qp(e),
			ki(r, t.class_loading),
			t.unobserve_completed && To(r, e);
	},
	sg = (r, t, e, i) => {
		const n = pl(t);
		Ff(t, e, i),
			wr(t, e.class_loaded),
			jn(t, xf),
			_n(e.callback_loaded, t, i),
			n || Nf(e, i);
	},
	og = (r, t, e, i) => {
		const n = pl(t);
		Ff(t, e, i),
			wr(t, e.class_error),
			jn(t, dl),
			_n(e.callback_error, t, i),
			e.restore_on_error && $n(t, ms),
			n || Nf(e, i);
	},
	yl = (r, t, e) => {
		const i = Mf(r) || r;
		if (ml(i)) return;
		rg(
			i,
			(o) => {
				sg(o, r, t, e), Pa(i);
			},
			(o) => {
				og(o, r, t, e), Pa(i);
			},
		);
	},
	ag = (r, t, e) => {
		Np(r), yl(r, t, e), Xp(r), Kp(r, t, e), Qp(r, t, e), Zp(r, t, e);
	},
	lg = (r, t, e) => {
		yl(r, t, e), tg(r, t, e);
	},
	vl = (r, t, e) => {
		ig(r) ? lg(r, t, e) : ag(r, t, e);
	},
	cg = (r, t, e) => {
		r.setAttribute("loading", "lazy"), yl(r, t, e), Jp(r, t), jn(r, bf);
	},
	xc = (r) => {
		r.removeAttribute(Ui), r.removeAttribute(cl), r.removeAttribute(ul);
	},
	ug = (r) => {
		_l(r, (t) => {
			xc(t);
		}),
			xc(r);
	},
	zf = (r) => {
		_l(r, (t) => {
			$n(t, ms);
		}),
			$n(r, ms);
	},
	fg = (r) => {
		Cf(r, (t) => {
			$n(t, So);
		}),
			$n(r, Pf),
			r.load();
	},
	dg = (r) => {
		$n(r, So);
	},
	hg = (r) => {
		$n(r, Ef);
	},
	pg = { IMG: zf, IFRAME: dg, VIDEO: fg, OBJECT: hg },
	gg = (r) => {
		const t = pg[r.tagName];
		if (!t) {
			Vp(r);
			return;
		}
		t(r);
	},
	_g = (r, t) => {
		hl(r) ||
			pl(r) ||
			(ki(r, t.class_entered),
			ki(r, t.class_exited),
			ki(r, t.class_applied),
			ki(r, t.class_loading),
			ki(r, t.class_loaded),
			ki(r, t.class_error));
	},
	mg = (r, t) => {
		gg(r), _g(r, t), bo(r), Af(r);
	},
	yg = (r, t, e, i) => {
		e.cancel_on_exit &&
			Ap(r) &&
			r.tagName === "IMG" &&
			(Pa(r),
			ug(r),
			zf(r),
			ki(r, e.class_loading),
			gl(i, -1),
			bo(r),
			_n(e.callback_cancel, r, t, i));
	},
	vg = (r, t, e, i) => {
		const n = Rp(r);
		jn(r, Ep),
			wr(r, e.class_entered),
			ki(r, e.class_exited),
			Bp(r, e, i),
			_n(e.callback_enter, r, t, i),
			!n && vl(r, e, i);
	},
	xg = (r, t, e, i) => {
		hl(r) ||
			(wr(r, e.class_exited), yg(r, t, e, i), _n(e.callback_exit, r, t, i));
	},
	wg = ["IMG", "IFRAME", "VIDEO"],
	Bf = (r) => r.use_native && "loading" in HTMLImageElement.prototype,
	bg = (r, t, e) => {
		r.forEach((i) => {
			wg.indexOf(i.tagName) !== -1 && cg(i, t, e);
		}),
			Of(e, 0);
	},
	Tg = (r) => r.isIntersecting || r.intersectionRatio > 0,
	Sg = (r) => ({
		root: r.container === document ? null : r.container,
		rootMargin: r.thresholds || r.threshold + "px",
	}),
	Mg = (r, t, e) => {
		r.forEach((i) => (Tg(i) ? vg(i.target, i, t, e) : xg(i.target, i, t, e)));
	},
	Og = (r, t) => {
		t.forEach((e) => {
			r.observe(e);
		});
	},
	Dg = (r, t) => {
		zp(r), Og(r, t);
	},
	Cg = (r, t) => {
		!pf ||
			Bf(r) ||
			(t._observer = new IntersectionObserver((e) => {
				Mg(e, r, t);
			}, Sg(r)));
	},
	qf = (r) => Array.prototype.slice.call(r),
	po = (r) => r.container.querySelectorAll(r.elements_selector),
	Pg = (r) => qf(r).filter(hl),
	Eg = (r) => Lp(r),
	kg = (r) => qf(r).filter(Eg),
	wc = (r, t) => Pg(r || po(t)),
	Ag = (r, t) => {
		kg(po(r)).forEach((i) => {
			ki(i, r.class_error), bo(i);
		}),
			t.update();
	},
	Lg = (r, t) => {
		gn &&
			((t._onlineHandler = () => {
				Ag(r, t);
			}),
			window.addEventListener("online", t._onlineHandler));
	},
	Ig = (r) => {
		gn && window.removeEventListener("online", r._onlineHandler);
	},
	bs = function (r, t) {
		const e = mf(r);
		(this._settings = e),
			(this.loadingCount = 0),
			Cg(e, this),
			Lg(e, this),
			this.update(t);
	};
bs.prototype = {
	update: function (r) {
		const t = this._settings,
			e = wc(r, t);
		if ((Of(this, e.length), hf || !pf)) {
			this.loadAll(e);
			return;
		}
		if (Bf(t)) {
			bg(e, t, this);
			return;
		}
		Dg(this._observer, e);
	},
	destroy: function () {
		this._observer && this._observer.disconnect(),
			Ig(this),
			po(this._settings).forEach((r) => {
				Af(r);
			}),
			delete this._observer,
			delete this._settings,
			delete this._onlineHandler,
			delete this.loadingCount,
			delete this.toLoadCount;
	},
	loadAll: function (r) {
		const t = this._settings;
		wc(r, t).forEach((i) => {
			To(i, this), vl(i, t, this);
		});
	},
	restoreAll: function () {
		const r = this._settings;
		po(r).forEach((t) => {
			mg(t, r);
		});
	},
};
bs.load = (r, t) => {
	const e = mf(t);
	vl(r, e);
};
bs.resetStatus = (r) => {
	bo(r);
};
gn && Pp(bs, window.lazyLoadOptions);
class Rg {
	constructor() {
		this.init();
	}
	reinit() {
		this.init();
	}
	init() {
		this.instance = new bs({
			class_loading: "is-lazy-loading",
			class_loaded: "is-lazy-loaded",
			class_error: "is-lazy-error",
			elements_selector: ".js-lazy-el",
			data_bg: "lazy-bg",
			data_poster: "lazy-poster",
			data_src: "lazy-src",
			callback_error: (t) => {
				console.log("element_error", t), t.classList.add("is-lazy-error");
			},
		});
	}
	destroy() {
		this.instance && (this.instance.destroy(), (this.instance = null));
	}
}
class Ng {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = Tp(this.DOM.items, {
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
				speed: t.config.speed || 1.6,
				reversed: t.config.reversed || !1,
			}),
			this.start();
	}
}
class Fg {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const e = this.DOM.rows[t];
			e &&
				this.instances.push(
					new Ng({
						container: e,
						config: {
							repeat: -1,
							speed: 1,
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
class zg {
	setActiveView(t) {
		this.activeView = t;
	}
	init() {
		(this.DOM = {}),
			(this.DOM.view = document.querySelector("[data-router-view]")),
			(this.activeView = this.DOM.view.dataset.routerView);
	}
}
const go = new zg();
$.registerPlugin(mt);
class Bg {
	constructor() {
		zt(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		zt(this, "onScroll", () => {
			const t = window.scrollY || document.documentElement.scrollTop;
			t > this.lastScrollTop
				? (document.body.classList.add("is-scrolling-down"),
					document.body.classList.remove("is-scrolling-up"))
				: (document.body.classList.add("is-scrolling-up"),
					document.body.classList.remove("is-scrolling-down")),
				(this.lastScrollTop = t <= 0 ? 0 : t);
		});
		zt(this, "hideNav", (t = !1, e = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const i = $.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), e && e();
					},
				});
				return (
					i
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: He(0.8, t),
							stagger: He(0.1, t),
							onComplete: () => {
								$.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: ht,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: He(0.8, t),
								onComplete: () => {
									$.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: ht,
							},
							He(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: He(0.8, t),
							onComplete: () => {
								$.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: ht,
						})
						.set(this.DOM.navMobile, {
							zIndex: -1,
							visibility: "hidden",
							pointerEvents: "none",
						}),
					i
				);
			}
		});
		zt(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = $.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !0);
					},
				});
				return (
					t
						.set(this.DOM.navMobile, {
							zIndex: 399,
							visibility: "visible",
							pointerEvents: "all",
						})
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 100%" })
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: ht })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: ht },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: ht },
							"-=0.34",
						),
					t
				);
			}
		});
		zt(this, "hide", () => $.set(this.DOM.nav, { opacity: 0 }));
		zt(this, "reveal", () =>
			$.timeline().to(this.DOM.nav, {
				opacity: 1,
				duration: 0.8,
				ease: ht,
				clearProps: "opacity",
			}),
		);
		this.init();
	}
	setup() {
		this.addEvents(),
			this.hideNav(!0),
			this.setActiveItem(),
			this.setupScroll();
	}
	setActiveItem(t = go.activeView) {
		const e = this.DOM.nav.querySelector(".js-nav-link.is-active");
		e && e.classList.remove("is-active");
		const i = this.DOM.nav.querySelector(`.js-nav-link[data-route="${t}"]`);
		i && i.classList.add("is-active");
	}
	addEvents() {
		this.DOM.navToggle.addEventListener("click", this.toggleMenu);
	}
	removeEvents() {
		this.DOM.navToggle.removeEventListener("click", this.toggleMenu),
			window.removeEventListener("scroll", this.onScroll, !1);
	}
	setupScroll() {
		(this.lastScrollTop = window.scrollY || document.documentElement.scrollTop),
			window.addEventListener("scroll", this.onScroll, !1);
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
		const e = t.querySelector(".js-nav"),
			i = t.querySelector(".js-nav-mobile");
		e &&
			i &&
			((this.DOM = {}),
			(this.DOM.nav = e),
			(this.DOM.navMobile = i),
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
const qg = (r) => {
		const t = r.querySelectorAll(".js-divider-label-ill"),
			e = r.querySelector(".js-divider-label-text");
		return $.timeline()
			.set(t, {
				clipPath: (i) =>
					i === 0
						? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
						: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
			})
			.set(e, { yPercent: 100 });
	},
	Yg = (r) => {
		const t = r.querySelectorAll(".js-divider-label-ill"),
			e = r.querySelector(".js-divider-label-text");
		return $.timeline()
			.to(t, {
				duration: 1,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				stagger: 0.08,
				clearProps: "clipPath",
				ease: ht,
			})
			.to(e, { duration: 1, yPercent: 0, clearProps: "y", ease: ht }, "-=0.7");
	},
	Hg = (r) => {
		const e = Jt.get("splitText", r).getSubInstanceFrom(
			r,
			"wordsLinesInstance",
		);
		e && $.set(e.lines, { yPercent: 10, opacity: 0 });
	},
	Xg = (r) => {
		const e = Jt.get("splitText", r).getSubInstanceFrom(
			r,
			"wordsLinesInstance",
		);
		if (e)
			return $.to(e.lines, {
				duration: 1,
				yPercent: 0,
				opacity: 1,
				stagger: 0.08,
				clearProps: "y",
				ease: ht,
			});
	},
	bc = {
		hideAll: (r) => {
			for (let t = 0; t < r.length; t++) {
				const e = r[t],
					i = e.dataset.scrollTrigger;
				if (e)
					switch (i) {
						case "trusted": {
							const n = e.querySelector(".js-anim-title"),
								s = e.querySelectorAll(".js-anim-row"),
								o = e.querySelector(".js-anim-divider");
							Hg(n), $.set([o, s], { yPercent: 20, opacity: 0 });
							break;
						}
						case "collaborate": {
							const n = e.querySelector(".js-divider-label"),
								s = e.querySelector(".js-anim-title"),
								o = e.querySelectorAll(".js-anim-item"),
								a = e.querySelector(".js-anim-divider");
							qg(n), $.set([s, o, a], { yPercent: 20, opacity: 0 });
							break;
						}
						case "anim-group": {
							const n = e.querySelectorAll(".js-anim-item");
							$.set(n, { y: 50, opacity: 0 });
							break;
						}
						case "item": {
							$.set(e, { y: 50, opacity: 0 });
							break;
						}
					}
			}
		},
		activate: (r) => {
			$.registerPlugin(mt);
			for (let t = 0; t < r.length; t++) {
				const e = r[t],
					i = e.dataset.scrollTrigger,
					n = { trigger: e, start: "top bottom-=30%", end: "bottom top" };
				if (e)
					switch (i) {
						case "trusted": {
							const s = e.querySelector(".js-anim-title"),
								o = e.querySelectorAll(".js-anim-row"),
								a = e.querySelector(".js-anim-divider");
							$.timeline({ scrollTrigger: n })
								.add(Xg(s))
								.to(
									o,
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										stagger: 0.08,
										clearProps: "y,opacity",
										ease: ht,
									},
									"<",
								)
								.to(
									a,
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										clearProps: "y,opacity",
										ease: gc,
									},
									"-=0.8",
								);
							break;
						}
						case "collaborate": {
							const s = e.querySelector(".js-divider-label"),
								o = e.querySelector(".js-anim-title"),
								a = e.querySelectorAll(".js-anim-item"),
								c = e.querySelector(".js-anim-divider");
							$.timeline({ scrollTrigger: n })
								.add(Yg(s))
								.to(
									o,
									{ duration: 1, yPercent: 0, opacity: 1, ease: ht },
									"-=0.8",
								)
								.to(
									[a, c],
									{
										duration: 1,
										yPercent: 0,
										opacity: 1,
										stagger: 0.08,
										clearProps: "y,opacity",
										ease: gc,
									},
									"-=0.8",
								);
							break;
						}
						case "anim-group": {
							const s = e.querySelectorAll(".js-anim-group"),
								o = $.timeline({ scrollTrigger: n });
							for (let a = 0; a < s.length; a++) {
								const u = s[a].querySelectorAll(".js-anim-item");
								o.to(
									u,
									{
										y: 0,
										opacity: 1,
										duration: 1,
										ease: ht,
										stagger: 0.08,
										clearProps: "y,opacity",
									},
									a === 0 ? 0 : "-=0.8",
								);
							}
							break;
						}
						case "item": {
							$.timeline({ scrollTrigger: n }).to(e, {
								y: 0,
								opacity: 1,
								duration: 1,
								ease: ht,
							});
							break;
						}
					}
			}
		},
	};
class $g {
	constructor() {
		zt(this, "start", () => {
			this.DOM &&
				this.DOM.scrollTriggerElements.length &&
				bc.activate(this.DOM.scrollTriggerElements);
		});
		zt(this, "hide", () => {
			this.DOM &&
				this.DOM.scrollTriggerElements.length &&
				bc.hideAll(this.DOM.scrollTriggerElements);
		});
		this.init();
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelectorAll("[data-scroll-trigger]");
		e.length && ((this.DOM = {}), (this.DOM.scrollTriggerElements = e));
	}
}
var Vg =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function jg(r) {
	return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
		? r.default
		: r;
}
var Yf = { exports: {} };
(function (r, t) {
	(function (e, i) {
		r.exports = i();
	})(Vg, function () {
		var e = document,
			i = e.createTextNode.bind(e);
		function n(I, N, G) {
			I.style.setProperty(N, G);
		}
		function s(I, N) {
			return I.appendChild(N);
		}
		function o(I, N, G, J) {
			var U = e.createElement("span");
			return (
				N && (U.className = N),
				G && (!J && U.setAttribute("data-" + N, G), (U.textContent = G)),
				(I && s(I, U)) || U
			);
		}
		function a(I, N) {
			return I.getAttribute("data-" + N);
		}
		function c(I, N) {
			return !I || I.length == 0
				? []
				: I.nodeName
					? [I]
					: [].slice.call(I[0].nodeName ? I : (N || e).querySelectorAll(I));
		}
		function u(I) {
			for (var N = []; I--; ) N[I] = [];
			return N;
		}
		function f(I, N) {
			I && I.some(N);
		}
		function d(I) {
			return function (N) {
				return I[N];
			};
		}
		function p(I, N, G) {
			var J = "--" + N,
				U = J + "-index";
			f(G, function (K, lt) {
				Array.isArray(K)
					? f(K, function (ft) {
							n(ft, U, lt);
						})
					: n(K, U, lt);
			}),
				n(I, J + "-total", G.length);
		}
		var l = {};
		function g(I, N, G) {
			var J = G.indexOf(I);
			if (J == -1)
				G.unshift(I),
					f(l[I].depends, function (K) {
						g(K, I, G);
					});
			else {
				var U = G.indexOf(N);
				G.splice(J, 1), G.splice(U, 0, I);
			}
			return G;
		}
		function h(I, N, G, J) {
			return { by: I, depends: N, key: G, split: J };
		}
		function m(I) {
			return g(I, 0, []).map(d(l));
		}
		function _(I) {
			l[I.by] = I;
		}
		function y(I, N, G, J, U) {
			I.normalize();
			var K = [],
				lt = document.createDocumentFragment();
			J && K.push(I.previousSibling);
			var ft = [];
			return (
				c(I.childNodes).some(function (et) {
					if (et.tagName && !et.hasChildNodes()) {
						ft.push(et);
						return;
					}
					if (et.childNodes && et.childNodes.length) {
						ft.push(et), K.push.apply(K, y(et, N, G, J, U));
						return;
					}
					var W = et.wholeText || "",
						Z = W.trim();
					Z.length &&
						(W[0] === " " && ft.push(i(" ")),
						f(Z.split(G), function (ot, st) {
							st && U && ft.push(o(lt, "whitespace", " ", U));
							var Et = o(lt, N, ot);
							K.push(Et), ft.push(Et);
						}),
						W[W.length - 1] === " " && ft.push(i(" ")));
				}),
				f(ft, function (et) {
					s(lt, et);
				}),
				(I.innerHTML = ""),
				s(I, lt),
				K
			);
		}
		var S = 0;
		function x(I, N) {
			for (var G in N) I[G] = N[G];
			return I;
		}
		var b = "words",
			P = h(b, S, "word", function (I) {
				return y(I, "word", /\s+/, 0, 1);
			}),
			M = "chars",
			D = h(M, [b], "char", function (I, N, G) {
				var J = [];
				return (
					f(G[b], function (U, K) {
						J.push.apply(J, y(U, "char", "", N.whitespace && K));
					}),
					J
				);
			});
		function E(I) {
			I = I || {};
			var N = I.key;
			return c(I.target || "[data-splitting]").map(function (G) {
				var J = G["🍌"];
				if (!I.force && J) return J;
				J = G["🍌"] = { el: G };
				var U = m(I.by || a(G, "splitting") || M),
					K = x({}, I);
				return (
					f(U, function (lt) {
						if (lt.split) {
							var ft = lt.by,
								et = (N ? "-" + N : "") + lt.key,
								W = lt.split(G, K, J);
							et && p(G, et, W), (J[ft] = W), G.classList.add(ft);
						}
					}),
					G.classList.add("splitting"),
					J
				);
			});
		}
		function L(I) {
			I = I || {};
			var N = (I.target = o());
			return (N.innerHTML = I.content), E(I), N.outerHTML;
		}
		(E.html = L), (E.add = _);
		function F(I, N, G) {
			var J = c(N.matching || I.children, I),
				U = {};
			return (
				f(J, function (K) {
					var lt = Math.round(K[G]);
					(U[lt] || (U[lt] = [])).push(K);
				}),
				Object.keys(U).map(Number).sort(O).map(d(U))
			);
		}
		function O(I, N) {
			return I - N;
		}
		var R = h("lines", [b], "line", function (I, N, G) {
				return F(I, { matching: G[b] }, "offsetTop");
			}),
			Y = h("items", S, "item", function (I, N) {
				return c(N.matching || I.children, I);
			}),
			H = h("rows", S, "row", function (I, N) {
				return F(I, N, "offsetTop");
			}),
			j = h("cols", S, "col", function (I, N) {
				return F(I, N, "offsetLeft");
			}),
			X = h("grid", ["rows", "cols"]),
			tt = "layout",
			gt = h(tt, S, S, function (I, N) {
				var G = (N.rows = +(N.rows || a(I, "rows") || 1)),
					J = (N.columns = +(N.columns || a(I, "columns") || 1));
				if (
					((N.image = N.image || a(I, "image") || I.currentSrc || I.src),
					N.image)
				) {
					var U = c("img", I)[0];
					N.image = U && (U.currentSrc || U.src);
				}
				N.image && n(I, "background-image", "url(" + N.image + ")");
				for (var K = G * J, lt = [], ft = o(S, "cell-grid"); K--; ) {
					var et = o(ft, "cell");
					o(et, "cell-inner"), lt.push(et);
				}
				return s(I, ft), lt;
			}),
			T = h("cellRows", [tt], "row", function (I, N, G) {
				var J = N.rows,
					U = u(J);
				return (
					f(G[tt], function (K, lt, ft) {
						U[Math.floor(lt / (ft.length / J))].push(K);
					}),
					U
				);
			}),
			nt = h("cellColumns", [tt], "col", function (I, N, G) {
				var J = N.columns,
					U = u(J);
				return (
					f(G[tt], function (K, lt) {
						U[lt % J].push(K);
					}),
					U
				);
			}),
			ut = h("cells", ["cellRows", "cellColumns"], "cell", function (I, N, G) {
				return G[tt];
			});
		return (
			_(P), _(D), _(R), _(Y), _(H), _(j), _(X), _(gt), _(T), _(nt), _(ut), E
		);
	});
})(Yf);
var Wg = Yf.exports;
const Pr = jg(Wg);
class Gg {
	constructor() {
		zt(this, "getSubInstanceFrom", (t, e) => {
			const i = this[e];
			let n;
			for (let s = 0; s < i.length; s++) i[s].el === t && (n = i[s]);
			return n;
		});
	}
	initChars(t = document) {
		const e = t.querySelectorAll("[data-split='chars']");
		e.length > 0 &&
			((this.charsInstance = Pr({ target: e, by: "chars" })),
			this.instances.push(this.charsInstance));
	}
	initWords(t = document) {
		const e = t.querySelectorAll("[data-split='words']");
		e.length > 0 &&
			((this.wordsInstance = Pr({ target: e, by: "words" })),
			this.instances.push(this.wordsInstance));
	}
	initWordsLines() {
		const t = document.querySelectorAll("[data-split='lines']");
		t.length > 0 &&
			((this.wordsLinesInstance = Pr({ target: t, by: "lines" })),
			this.instances.push(this.wordsLinesInstance));
	}
	initLines(t = document) {
		const e = t.querySelectorAll("[data-line]");
		for (let i = 0; i < e.length; i++) this.buildLine(e[i]);
	}
	buildLine(t) {
		const e = t.innerHTML,
			i = document.createElement("div"),
			n = document.createElement("div");
		(i.className = "line-wrap"),
			(n.className = "line-wrap__inner js-line-wrap-anim"),
			(n.innerHTML = e),
			(t.innerHTML = ""),
			i.appendChild(n),
			t.appendChild(i);
	}
	getInstance(t) {
		const e = this.instances.filter((i) => i.id === t);
		if (e !== void 0) return e[0];
	}
	addInstance(t, e, i = !0) {
		(this[t] = Pr(e)), i && this.instances.push({ id: `${t}`, value: this[t] });
	}
	createInstance(t) {
		return Pr(t);
	}
	removeInstance(t) {
		const e = this.instances.filter((i) => i.id !== t);
		this.instances = e;
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		(this.instances = []),
			this.initChars(t),
			this.initWords(),
			this.initWordsLines();
	}
}
const Tc = new Gg();
$.registerPlugin(mt);
class Ug {
	constructor() {
		this.init();
	}
	setup() {
		$.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(e) => {
				const { isMobile: i, isDesk: n } = e.conditions;
				i && this.setMobileTrigger(), n && this.setTrigger();
			},
		);
	}
	setTrigger() {
		$.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				scrub: 1.5,
				ease: "none",
			},
		}).fromTo(
			this.DOM.cards,
			{ y: (e, i) => parseInt(i.dataset.index, 10) * 35 },
			{ y: 0, stagger: { each: 0.024 } },
		);
	}
	setMobileTrigger() {
		$.timeline({
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
		const e = t.querySelector(".js-team-section");
		e &&
			((this.DOM = {}),
			(this.DOM.section = e),
			(this.DOM.cards = this.DOM.section.querySelectorAll(".js-team-card")),
			this.setup());
	}
}
$.registerPlugin(mt);
class Kg {
	constructor() {
		zt(this, "onCarouselPrev", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === 0
						? this.DOM.cards.length - 1
						: this.activeIndex - 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				$.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		zt(this, "onCarouselNext", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === this.DOM.cards.length - 1
						? 0
						: this.activeIndex + 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				$.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		zt(this, "exitSlide", (t) => {
			const e = $.timeline();
			return (
				e.to(t, {
					opacity: 0,
					xPercent: -100,
					duration: 0.8,
					onComplete: () => {
						$.set(t, { opacity: 0, xPercent: 100 });
					},
					ease: ht,
				}),
				e
			);
		});
		zt(this, "enterSlide", (t) => {
			const e = $.timeline();
			return e.to(t, { opacity: 1, xPercent: 0, duration: 0.8, ease: ht }), e;
		});
		zt(this, "buildCardsTl", () => {
			const t = $.timeline();
			for (let e = 0; e < this.DOM.cards.length; e++) {
				const i = this.DOM.cards[e],
					n = $.timeline();
				n
					.from(i, { y: Kt.window.height * 0.7, duration: 1.4 })
					.to(
						i,
						{
							y: () => e * 10,
							scale: () => 1 - (this.DOM.cards.length - e) * 0.02,
							duration: 0.8,
						},
						1.5,
					),
					t.add(n, e === 0 ? 0 : "-=1.25");
			}
			return t;
		});
		this.init();
	}
	setup() {
		$.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(e) => {
				const { isDesk: i, isMobile: n } = e.conditions;
				i ? this.setTrigger() : n && this.setMobileCarousel();
			},
		),
			this.DOM.carouselPrev.addEventListener("click", this.onCarouselPrev),
			this.DOM.carouselNext.addEventListener("click", this.onCarouselNext);
	}
	setMobileCarousel() {
		$.set(this.DOM.cards, { opacity: 0, xPercent: 100 }),
			$.set(this.DOM.cards[this.activeIndex], { opacity: 1, xPercent: 0 });
	}
	setTrigger() {
		$.set(this.DOM.cards, { opacity: 1, xPercent: 0, rotate: 0 });
		const t = $.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=30%",
					end: `+=${Kt.window.height * 5}`,
					pin: !0,
					scrub: !0,
					preventOverlaps: !0,
					fastScrollEnd: 3e3,
				},
			}),
			e = this.buildCardsTl();
		t.add(e, 0);
	}
	destroy() {
		this.DOM && (this.DOM = void 0);
	}
	reinit(t) {
		this.init(t);
	}
	init(t = document) {
		const e = t.querySelector(".js-testimonial-section");
		e &&
			((this.DOM = {}),
			(this.DOM.section = e),
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
class Qg {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== Kt.window.width &&
			((this.winW = Kt.window.width), this.setup());
	}
	setup() {
		const t = Kt.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = Kt.window.width), this.setup();
	}
}
const Zg = ({ pageName: r, container: t = document }) => {
		const e = $.timeline(),
			i = Jt.get("nav");
		switch ((i && e.add(i.hide(!0)), r)) {
			case "homepage": {
				const n = t.querySelector(".js-hero-content"),
					s = n.querySelector(".js-badge"),
					o = n.querySelector(".js-title"),
					a = n.querySelector(".js-subtitle"),
					c = n.querySelectorAll(".js-cta"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-outer"),
					d = u.querySelector(".js-path-middle"),
					p = u.querySelector(".js-path-inner"),
					l = a.querySelectorAll(".word"),
					g = Jt.get("featuresCarousel");
				g && g.hide(),
					e
						.set([f, d, p], { scale: 0, y: -100, transformOrigin: "50% 0%" })
						.set([s, o, l, c], { opacity: 0, y: -40 });
				break;
			}
			case "company": {
				const n = t.querySelector(".js-hero-content"),
					s = n.querySelector(".js-badge"),
					o = n.querySelector(".js-title"),
					a = n.querySelector(".js-subtitle"),
					c = t.querySelector(".js-hero-ill"),
					u = c.querySelector(".js-path-radial"),
					f = c.querySelector(".js-path-stripe"),
					d = c.querySelectorAll(".js-path-ball"),
					p = c.querySelector(".js-path-ball-glow"),
					l = t.querySelector(".js-hero-bg"),
					g = f.getTotalLength(),
					h = a.querySelectorAll(".word");
				e.set([s, o, h], { opacity: 0, y: 40 })
					.set(l, { opacity: 0 })
					.set(u, { opacity: 0, scale: 0, transformOrigin: "50% 50%" })
					.set(f, { strokeDasharray: g, strokeDashoffset: g })
					.set(d, { scale: 0, transformOrigin: "50% 50%" })
					.set(p, { opacity: 0, scale: 0, transformOrigin: "50% 50%" });
				break;
			}
		}
		return e;
	},
	Jg = ({ pageName: r, container: t = document, cb: e = !1 }) => {
		const i = $.timeline({
				onComplete: () => {
					if (r === "homepage") {
						const s = Jt.get("featuresCarousel");
						s && s.start();
					}
					e && e();
				},
			}),
			n = Jt.get("nav");
		switch (r) {
			case "homepage": {
				const s = t.querySelector(".js-hero-content"),
					o = s.querySelector(".js-badge"),
					a = s.querySelector(".js-title"),
					c = s.querySelector(".js-subtitle"),
					u = s.querySelectorAll(".js-cta"),
					f = t.querySelector(".js-hero-ill"),
					d = f.querySelector(".js-path-outer"),
					p = f.querySelector(".js-path-middle"),
					l = f.querySelector(".js-path-inner"),
					g = Jt.get("featuresCarousel"),
					h = c.querySelectorAll(".word");
				i
					.to([d, p, l], {
						duration: 2,
						y: 0,
						stagger: 0.1,
						scale: 1,
						clearProps: "scale,y",
						ease: ht,
					})
					.to(o, { duration: 1, opacity: 1, y: 0, ease: ht }, 0.75)
					.to(
						a,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						u,
						{
							duration: 1,
							opacity: 1,
							y: 0,
							stagger: 0.1,
							clearProps: "opacity,y",
							ease: ht,
						},
						0.75,
					),
					g && i.add(g.reveal(), 0.75);
				break;
			}
			case "company": {
				const s = t.querySelector(".js-hero-content"),
					o = s.querySelector(".js-badge"),
					a = s.querySelector(".js-title"),
					c = s.querySelector(".js-subtitle"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-radial"),
					d = u.querySelector(".js-path-stripe"),
					p = u.querySelectorAll(".js-path-ball"),
					l = u.querySelector(".js-path-ball-glow"),
					g = t.querySelector(".js-hero-bg"),
					h = c.querySelectorAll(".word");
				i.to(o, { duration: 1, opacity: 1, y: 0, ease: ht }, 0.75)
					.to(
						a,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: ht },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.01, ease: ht },
						0.75,
					)
					.to(d, { duration: 2, strokeDashoffset: 0, ease: ht }, 0)
					.to(p, { duration: 0.8, scale: 1, stagger: 0.05, ease: ht }, "-=1")
					.to(l, { duration: 0.8, opacity: 1, scale: 1, ease: ht })
					.to(f, { duration: 2, scale: 1, opacity: 0.45, ease: ht }, 1)
					.to(g, { duration: 1, opacity: 1, ease: ht }, 1.5);
				break;
			}
		}
		return n && i.add(n.reveal(), 0.5), i;
	},
	_o = { pageTransition: document.querySelector(".js-page-loader") },
	t_ = (r = !1) => {
		const t = $.timeline();
		return (
			t
				.set(_o.pageTransition, { display: "block", zIndex: 421 })
				.to(_o.pageTransition, { duration: He(1, r), opacity: 1, ease: ht }),
			t
		);
	},
	e_ = () => {
		const r = $.timeline({
			onComplete: () => {
				$.set(_o.pageTransition, { display: "none", zIndex: -1 });
			},
		});
		return r.to(_o.pageTransition, { duration: 1, opacity: 0, ease: ht }), r;
	},
	i_ = () => {
		const r = Jt.get("scrollAnimator");
		r && r.hide(), t_(!0), Zg({ pageName: go.activeView });
		const t = $.timeline({
			onStart: () => {
				r && r.start();
			},
		});
		return t.add(e_()).add(Jg({ pageName: go.activeView }), "-=0.2"), t;
	};
function Sc(r, t, e) {
	var i;
	return function () {
		var n = this,
			s = arguments,
			o = function () {
				(i = null), e || r.apply(n, s);
			},
			a = e && !i;
		clearTimeout(i), (i = setTimeout(o, t)), a && r.apply(n, s);
	};
}
function Mc() {
	let r = !1;
	return (
		window.PointerEvent && "maxTouchPoints" in navigator
			? navigator.maxTouchPoints > 0 && (r = !0)
			: ((window.matchMedia &&
					window.matchMedia("(any-pointer:coarse)").matches) ||
					window.TouchEvent ||
					"ontouchstart" in window) &&
				(r = !0),
		r
	);
}
class n_ {
	constructor() {
		zt(this, "onResize", () => {
			Kt.resize(),
				document.body.classList.toggle("is-touch", Mc()),
				Jt.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", Mc()),
				go.init(),
				Jt.add("nav", new Bg());
		}),
			window.addEventListener("load", () => {
				Kt.init(),
					Tc.init(),
					Jt.add("splitText", Tc, !0),
					Jt.add("viewportFixer", new Qg()),
					Jt.add("lazyLoader", new Rg()),
					Jt.add("hashScroll", new Dp()),
					Jt.add("featuresCarousel", new Sp()),
					Jt.add("marqueeManager", new Fg()),
					Jt.add("computeBlock", new wh()),
					Jt.add("testimonials", new Kg()),
					Jt.add("glowCards", new Op()),
					Jt.add("team", new Ug()),
					Jt.add("scrollAnimator", new $g()),
					i_();
			}),
			window.addEventListener("resize", Sc(this.onResize, 150)),
			window.addEventListener("orientationchange", Sc(this.onResize, 150));
	}
}
const r_ = new n_();
r_.start();
