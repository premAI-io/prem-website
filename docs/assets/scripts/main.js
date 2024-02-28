var Pu = Object.defineProperty;
var ku = (a, t, e) =>
	t in a
		? Pu(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (a[t] = e);
var te = (a, t, e) => (ku(a, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
	new MutationObserver((n) => {
		for (const r of n)
			if (r.type === "childList")
				for (const s of r.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(n) {
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
	function i(n) {
		if (n.ep) return;
		n.ep = !0;
		const r = e(n);
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
function ql(a, t) {
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
 */ var ri = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	rr = { duration: 0.5, overwrite: !1, delay: 0 },
	ua,
	De,
	zt,
	fi = 1e8,
	Ft = 1 / fi,
	Ao = Math.PI * 2,
	Eu = Ao / 4,
	Au = 0,
	Hl = Math.sqrt,
	Lu = Math.cos,
	Iu = Math.sin,
	he = function (t) {
		return typeof t == "string";
	},
	Kt = function (t) {
		return typeof t == "function";
	},
	Vi = function (t) {
		return typeof t == "number";
	},
	fa = function (t) {
		return typeof t > "u";
	},
	Ri = function (t) {
		return typeof t == "object";
	},
	qe = function (t) {
		return t !== !1;
	},
	da = function () {
		return typeof window < "u";
	},
	fs = function (t) {
		return Kt(t) || he(t);
	},
	$l =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	Oe = Array.isArray,
	Lo = /(?:-?\.?\d|\.)+/gi,
	Vl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Wn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	ao = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Wl = /[+-]=-?[.\d]+/,
	jl = /[^,'"\[\]\s]+/gi,
	Ru = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	$t,
	Oi,
	Io,
	ha,
	si = {},
	zs = {},
	Ul,
	Gl = function (t) {
		return (zs = En(t, si)) && We;
	},
	pa = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	jr = function (t, e) {
		return !e && console.warn(t);
	},
	Kl = function (t, e) {
		return (t && (si[t] = e) && zs && (zs[t] = e)) || si;
	},
	Ur = function () {
		return 0;
	},
	Nu = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ds = { suppressEvents: !0, kill: !1 },
	Fu = { suppressEvents: !0 },
	ga = {},
	rn = [],
	Ro = {},
	Ql,
	Je = {},
	lo = {},
	$a = 30,
	Os = [],
	_a = "",
	ma = function (t) {
		var e = t[0],
			i,
			n;
		if ((Ri(e) || Kt(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
			for (n = Os.length; n-- && !Os[n].targetTest(e); );
			i = Os[n];
		}
		for (n = t.length; n--; )
			(t[n] && (t[n]._gsap || (t[n]._gsap = new wc(t[n], i)))) ||
				t.splice(n, 1);
		return t;
	},
	bn = function (t) {
		return t._gsap || ma(di(t))[0]._gsap;
	},
	Zl = function (t, e, i) {
		return (i = t[e]) && Kt(i)
			? t[e]()
			: (fa(i) && t.getAttribute && t.getAttribute(e)) || i;
	},
	He = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	Zt = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	de = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	Gn = function (t, e) {
		var i = e.charAt(0),
			n = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n
		);
	},
	Bu = function (t, e) {
		for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
		return n < i;
	},
	Ys = function () {
		var t = rn.length,
			e = rn.slice(0),
			i,
			n;
		for (Ro = {}, rn.length = 0, i = 0; i < t; i++)
			(n = e[i]),
				n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
	},
	Jl = function (t, e, i, n) {
		rn.length && !De && Ys(),
			t.render(e, i, n || (De && e < 0 && (t._initted || t._startAt))),
			rn.length && !De && Ys();
	},
	tc = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(jl).length < 2
			? e
			: he(t)
				? t.trim()
				: t;
	},
	ec = function (t) {
		return t;
	},
	pi = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	zu = function (t) {
		return function (e, i) {
			for (var n in i)
				n in e || (n === "duration" && t) || n === "ease" || (e[n] = i[n]);
		};
	},
	En = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	Va = function a(t, e) {
		for (var i in e)
			i !== "__proto__" &&
				i !== "constructor" &&
				i !== "prototype" &&
				(t[i] = Ri(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
		return t;
	},
	Xs = function (t, e) {
		var i = {},
			n;
		for (n in t) n in e || (i[n] = t[n]);
		return i;
	},
	Er = function (t) {
		var e = t.parent || $t,
			i = t.keyframes ? zu(Oe(t.keyframes)) : pi;
		if (qe(t.inherit))
			for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Yu = function (t, e) {
		for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
		return i < 0;
	},
	ic = function (t, e, i, n, r) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var s = t[n],
			o;
		if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
		return (
			s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
			e._next ? (e._next._prev = e) : (t[n] = e),
			(e._prev = s),
			(e.parent = e._dp = t),
			e
		);
	},
	eo = function (t, e, i, n) {
		i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
		var r = e._prev,
			s = e._next;
		r ? (r._next = s) : t[i] === e && (t[i] = s),
			s ? (s._prev = r) : t[n] === e && (t[n] = r),
			(e._next = e._prev = e.parent = null);
	},
	an = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Tn = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
		return t;
	},
	Xu = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	No = function (t, e, i, n) {
		return (
			t._startAt &&
			(De
				? t._startAt.revert(Ds)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, n))
		);
	},
	qu = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	Wa = function (t) {
		return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	sr = function (t, e) {
		var i = Math.floor((t /= e));
		return t && i === t ? i - 1 : i;
	},
	qs = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	io = function (t) {
		return (t._end = de(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || Ft) || 0),
		));
	},
	no = function (t, e) {
		var i = t._dp;
		return (
			i &&
				i.smoothChildTiming &&
				t._ts &&
				((t._start = de(
					i._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
				)),
				io(t),
				i._dirty || Tn(i, t)),
			t
		);
	},
	nc = function (t, e) {
		var i;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((i = qs(t.rawTime(), e)),
				(!e._dur || as(0, e.totalDuration(), i) - e._tTime > Ft) &&
					e.render(i, !0)),
			Tn(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (i = t; i._dp; )
					i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
			t._zTime = -Ft;
		}
	},
	Pi = function (t, e, i, n) {
		return (
			e.parent && an(e),
			(e._start = de(
				(Vi(i) ? i : i || t !== $t ? li(t, i, e) : t._time) + e._delay,
			)),
			(e._end = de(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			ic(t, e, "_first", "_last", t._sort ? "_start" : 0),
			Fo(e) || (t._recent = e),
			n || nc(t, e),
			t._ts < 0 && no(t, t._tTime),
			t
		);
	},
	rc = function (t, e) {
		return (
			(si.ScrollTrigger || pa("scrollTrigger", e)) &&
			si.ScrollTrigger.create(e, t)
		);
	},
	sc = function (t, e, i, n, r) {
		if ((va(t, e, r), !t._initted)) return 1;
		if (
			!i &&
			t._pt &&
			!De &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Ql !== ti.frame
		)
			return rn.push(t), (t._lazy = [r, n]), 1;
	},
	Hu = function a(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
	},
	Fo = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	$u = function (t, e, i, n) {
		var r = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && Hu(t) && !(!t._initted && Fo(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !Fo(t))))
					? 0
					: 1,
			o = t._rDelay,
			c = 0,
			u,
			f,
			d;
		if (
			(o &&
				t._repeat &&
				((c = as(0, t._tDur, e)),
				(f = sr(c, o)),
				t._yoyo && f & 1 && (s = 1 - s),
				f !== sr(t._tTime, o) &&
					((r = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== r || De || n || t._zTime === Ft || (!e && t._zTime))
		) {
			if (!t._initted && sc(t, e, n, i, c)) return;
			for (
				d = t._zTime,
					t._zTime = e || (i ? Ft : 0),
					i || (i = e && !d),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = c,
					u = t._pt;
				u;

			)
				u.r(s, u.d), (u = u._next);
			e < 0 && No(t, e, i, !0),
				t._onUpdate && !i && ni(t, "onUpdate"),
				c && t._repeat && !i && t.parent && ni(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && an(t, 1),
					!i &&
						!De &&
						(ni(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	Vu = function (t, e, i) {
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
	or = function (t, e, i, n) {
		var r = t._repeat,
			s = de(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !n && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = r ? (r < 0 ? 1e10 : de(s * (r + 1) + t._rDelay * r)) : s),
			o > 0 && !n && no(t, (t._tTime = t._tDur * o)),
			t.parent && io(t),
			i || Tn(t.parent, t),
			t
		);
	},
	ja = function (t) {
		return t instanceof Re ? Tn(t) : or(t, t._dur);
	},
	Wu = { _start: 0, endTime: Ur, totalDuration: Ur },
	li = function a(t, e, i) {
		var n = t.labels,
			r = t._recent || Wu,
			s = t.duration() >= fi ? r.endTime(!1) : t._dur,
			o,
			c,
			u;
		return he(e) && (isNaN(e) || e in n)
			? ((c = e.charAt(0)),
				(u = e.substr(-1) === "%"),
				(o = e.indexOf("=")),
				c === "<" || c === ">"
					? (o >= 0 && (e = e.replace(/=/, "")),
						(c === "<" ? r._start : r.endTime(r._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(u ? (o < 0 ? r : i).totalDuration() / 100 : 1))
					: o < 0
						? (e in n || (n[e] = s), n[e])
						: ((c = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
							u && i && (c = (c / 100) * (Oe(i) ? i[0] : i).totalDuration()),
							o > 1 ? a(t, e.substr(0, o - 1), i) + c : s + c))
			: e == null
				? s
				: +e;
	},
	Ar = function (t, e, i) {
		var n = Vi(e[1]),
			r = (n ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[r],
			o,
			c;
		if ((n && (s.duration = e[1]), (s.parent = i), t)) {
			for (o = s, c = i; c && !("immediateRender" in o); )
				(o = c.vars.defaults || {}), (c = qe(c.vars.inherit) && c.parent);
			(s.immediateRender = qe(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[r - 1]);
		}
		return new ne(e[0], s, e[r + 1]);
	},
	un = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	as = function (t, e, i) {
		return i < t ? t : i > e ? e : i;
	},
	Me = function (t, e) {
		return !he(t) || !(e = Ru.exec(t)) ? "" : e[1];
	},
	ju = function (t, e, i) {
		return un(i, function (n) {
			return as(t, e, n);
		});
	},
	Bo = [].slice,
	oc = function (t, e) {
		return (
			t &&
			Ri(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && Ri(t[0]))) &&
			!t.nodeType &&
			t !== Oi
		);
	},
	Uu = function (t, e, i) {
		return (
			i === void 0 && (i = []),
			t.forEach(function (n) {
				var r;
				return (he(n) && !e) || oc(n, 1)
					? (r = i).push.apply(r, di(n))
					: i.push(n);
			}) || i
		);
	},
	di = function (t, e, i) {
		return zt && !e && zt.selector
			? zt.selector(t)
			: he(t) && !i && (Io || !ar())
				? Bo.call((e || ha).querySelectorAll(t), 0)
				: Oe(t)
					? Uu(t, i)
					: oc(t)
						? Bo.call(t, 0)
						: t
							? [t]
							: [];
	},
	zo = function (t) {
		return (
			(t = di(t)[0] || jr("Invalid scope") || {}),
			function (e) {
				var i = t.current || t.nativeElement || t;
				return di(
					e,
					i.querySelectorAll
						? i
						: i === t
							? jr("Invalid scope") || ha.createElement("div")
							: t,
				);
			}
		);
	},
	ac = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	lc = function (t) {
		if (Kt(t)) return t;
		var e = Ri(t) ? t : { each: t },
			i = Sn(e.ease),
			n = e.from || 0,
			r = parseFloat(e.base) || 0,
			s = {},
			o = n > 0 && n < 1,
			c = isNaN(n) || o,
			u = e.axis,
			f = n,
			d = n;
		return (
			he(n)
				? (f = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
				: !o && c && ((f = n[0]), (d = n[1])),
			function (p, l, g) {
				var h = (g || e).length,
					m = s[h],
					_,
					y,
					S,
					x,
					b,
					P,
					M,
					O,
					k;
				if (!m) {
					if (((k = e.grid === "auto" ? 0 : (e.grid || [1, fi])[1]), !k)) {
						for (
							M = -fi;
							M < (M = g[k++].getBoundingClientRect().left) && k < h;

						);
						k < h && k--;
					}
					for (
						m = s[h] = [],
							_ = c ? Math.min(k, h) * f - 0.5 : n % k,
							y = k === fi ? 0 : c ? (h * d) / k - 0.5 : (n / k) | 0,
							M = 0,
							O = fi,
							P = 0;
						P < h;
						P++
					)
						(S = (P % k) - _),
							(x = y - ((P / k) | 0)),
							(m[P] = b = u ? Math.abs(u === "y" ? x : S) : Hl(S * S + x * x)),
							b > M && (M = b),
							b < O && (O = b);
					n === "random" && ac(m),
						(m.max = M - O),
						(m.min = O),
						(m.v = h =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(k > h
										? h - 1
										: u
											? u === "y"
												? h / k
												: k
											: Math.max(k, h / k)) ||
								0) * (n === "edges" ? -1 : 1)),
						(m.b = h < 0 ? r - h : r),
						(m.u = Me(e.amount || e.each) || 0),
						(i = i && h < 0 ? yc(i) : i);
				}
				return (
					(h = (m[p] - m.min) / m.max || 0),
					de(m.b + (i ? i(h) : h) * m.v) + m.u
				);
			}
		);
	},
	Yo = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (i) {
			var n = de(Math.round(parseFloat(i) / t) * t * e);
			return (n - (n % 1)) / e + (Vi(i) ? 0 : Me(i));
		};
	},
	cc = function (t, e) {
		var i = Oe(t),
			n,
			r;
		return (
			!i &&
				Ri(t) &&
				((n = i = t.radius || fi),
				t.values
					? ((t = di(t.values)), (r = !Vi(t[0])) && (n *= n))
					: (t = Yo(t.increment))),
			un(
				e,
				i
					? Kt(t)
						? function (s) {
								return (r = t(s)), Math.abs(r - s) <= n ? r : s;
							}
						: function (s) {
								for (
									var o = parseFloat(r ? s.x : s),
										c = parseFloat(r ? s.y : 0),
										u = fi,
										f = 0,
										d = t.length,
										p,
										l;
									d--;

								)
									r
										? ((p = t[d].x - o), (l = t[d].y - c), (p = p * p + l * l))
										: (p = Math.abs(t[d] - o)),
										p < u && ((u = p), (f = d));
								return (
									(f = !n || u <= n ? t[f] : s),
									r || f === s || Vi(s) ? f : f + Me(s)
								);
							}
					: Yo(t),
			)
		);
	},
	uc = function (t, e, i, n) {
		return un(Oe(t) ? !e : i === !0 ? !!(i = 0) : !n, function () {
			return Oe(t)
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
	Gu = function () {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return function (n) {
			return e.reduce(function (r, s) {
				return s(r);
			}, n);
		};
	},
	Ku = function (t, e) {
		return function (i) {
			return t(parseFloat(i)) + (e || Me(i));
		};
	},
	Qu = function (t, e, i) {
		return dc(t, e, 0, 1, i);
	},
	fc = function (t, e, i) {
		return un(i, function (n) {
			return t[~~e(n)];
		});
	},
	Zu = function a(t, e, i) {
		var n = e - t;
		return Oe(t)
			? fc(t, a(0, t.length), e)
			: un(i, function (r) {
					return ((n + ((r - t) % n)) % n) + t;
				});
	},
	Ju = function a(t, e, i) {
		var n = e - t,
			r = n * 2;
		return Oe(t)
			? fc(t, a(0, t.length - 1), e)
			: un(i, function (s) {
					return (s = (r + ((s - t) % r)) % r || 0), t + (s > n ? r - s : s);
				});
	},
	Gr = function (t) {
		for (var e = 0, i = "", n, r, s, o; ~(n = t.indexOf("random(", e)); )
			(s = t.indexOf(")", n)),
				(o = t.charAt(n + 7) === "["),
				(r = t.substr(n + 7, s - n - 7).match(o ? jl : Lo)),
				(i +=
					t.substr(e, n - e) + uc(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
				(e = s + 1);
		return i + t.substr(e, t.length - e);
	},
	dc = function (t, e, i, n, r) {
		var s = e - t,
			o = n - i;
		return un(r, function (c) {
			return i + (((c - t) / s) * o || 0);
		});
	},
	tf = function a(t, e, i, n) {
		var r = isNaN(t + e)
			? 0
			: function (l) {
					return (1 - l) * t + l * e;
				};
		if (!r) {
			var s = he(t),
				o = {},
				c,
				u,
				f,
				d,
				p;
			if ((i === !0 && (n = 1) && (i = null), s))
				(t = { p: t }), (e = { p: e });
			else if (Oe(t) && !Oe(e)) {
				for (f = [], d = t.length, p = d - 2, u = 1; u < d; u++)
					f.push(a(t[u - 1], t[u]));
				d--,
					(r = function (g) {
						g *= d;
						var h = Math.min(p, ~~g);
						return f[h](g - h);
					}),
					(i = e);
			} else n || (t = En(Oe(t) ? [] : {}, t));
			if (!f) {
				for (c in e) ya.call(o, t, c, "get", e[c]);
				r = function (g) {
					return ba(g, o) || (s ? t.p : t);
				};
			}
		}
		return un(i, r);
	},
	Ua = function (t, e, i) {
		var n = t.labels,
			r = fi,
			s,
			o,
			c;
		for (s in n)
			(o = n[s] - e),
				o < 0 == !!i && o && r > (o = Math.abs(o)) && ((c = s), (r = o));
		return c;
	},
	ni = function (t, e, i) {
		var n = t.vars,
			r = n[e],
			s = zt,
			o = t._ctx,
			c,
			u,
			f;
		if (r)
			return (
				(c = n[e + "Params"]),
				(u = n.callbackScope || t),
				i && rn.length && Ys(),
				o && (zt = o),
				(f = c ? r.apply(u, c) : r.call(u)),
				(zt = s),
				f
			);
	},
	xr = function (t) {
		return (
			an(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!De),
			t.progress() < 1 && ni(t, "onInterrupt"),
			t
		);
	},
	jn,
	hc = [],
	pc = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), da() || t.headless)) {
				var e = t.name,
					i = Kt(t),
					n =
						e && !i && t.init
							? function () {
									this._props = [];
								}
							: t,
					r = {
						init: Ur,
						render: ba,
						add: ya,
						kill: mf,
						modifier: _f,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: wa,
						aliases: {},
						register: 0,
					};
				if ((ar(), t !== n)) {
					if (Je[e]) return;
					pi(n, pi(Xs(t, r), s)),
						En(n.prototype, En(r, Xs(t, s))),
						(Je[(n.prop = e)] = n),
						t.targetTest && (Os.push(n), (ga[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				Kl(e, n), t.register && t.register(We, n, $e);
			} else hc.push(t);
	},
	Lt = 255,
	wr = {
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
	co = function (t, e, i) {
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
	gc = function (t, e, i) {
		var n = t ? (Vi(t) ? [t >> 16, (t >> 8) & Lt, t & Lt] : 0) : wr.black,
			r,
			s,
			o,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		if (!n) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), wr[t]))
				n = wr[t];
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
						[n >> 16, (n >> 8) & Lt, n & Lt, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (n = [t >> 16, (t >> 8) & Lt, t & Lt]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((n = g = t.match(Lo)), !e))
					(c = (+n[0] % 360) / 360),
						(u = +n[1] / 100),
						(f = +n[2] / 100),
						(s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
						(r = f * 2 - s),
						n.length > 3 && (n[3] *= 1),
						(n[0] = co(c + 1 / 3, r, s)),
						(n[1] = co(c, r, s)),
						(n[2] = co(c - 1 / 3, r, s));
				else if (~t.indexOf("="))
					return (n = t.match(Vl)), i && n.length < 4 && (n[3] = 1), n;
			} else n = t.match(Lo) || wr.transparent;
			n = n.map(Number);
		}
		return (
			e &&
				!g &&
				((r = n[0] / Lt),
				(s = n[1] / Lt),
				(o = n[2] / Lt),
				(d = Math.max(r, s, o)),
				(p = Math.min(r, s, o)),
				(f = (d + p) / 2),
				d === p
					? (c = u = 0)
					: ((l = d - p),
						(u = f > 0.5 ? l / (2 - d - p) : l / (d + p)),
						(c =
							d === r
								? (s - o) / l + (s < o ? 6 : 0)
								: d === s
									? (o - r) / l + 2
									: (r - s) / l + 4),
						(c *= 60)),
				(n[0] = ~~(c + 0.5)),
				(n[1] = ~~(u * 100 + 0.5)),
				(n[2] = ~~(f * 100 + 0.5))),
			i && n.length < 4 && (n[3] = 1),
			n
		);
	},
	_c = function (t) {
		var e = [],
			i = [],
			n = -1;
		return (
			t.split(sn).forEach(function (r) {
				var s = r.match(Wn) || [];
				e.push.apply(e, s), i.push((n += s.length + 1));
			}),
			(e.c = i),
			e
		);
	},
	Ga = function (t, e, i) {
		var n = "",
			r = (t + n).match(sn),
			s = e ? "hsla(" : "rgba(",
			o = 0,
			c,
			u,
			f,
			d;
		if (!r) return t;
		if (
			((r = r.map(function (p) {
				return (
					(p = gc(p, e, 1)) &&
					s +
						(e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
						")"
				);
			})),
			i && ((f = _c(t)), (c = i.c), c.join(n) !== f.c.join(n)))
		)
			for (u = t.replace(sn, "1").split(Wn), d = u.length - 1; o < d; o++)
				n +=
					u[o] +
					(~c.indexOf(o)
						? r.shift() || s + "0,0,0,0)"
						: (f.length ? f : r.length ? r : i).shift());
		if (!u)
			for (u = t.split(sn), d = u.length - 1; o < d; o++) n += u[o] + r[o];
		return n + u[d];
	},
	sn = (function () {
		var a =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in wr) a += "|" + t + "\\b";
		return new RegExp(a + ")", "gi");
	})(),
	ef = /hsl[a]?\(/,
	mc = function (t) {
		var e = t.join(" "),
			i;
		if (((sn.lastIndex = 0), sn.test(e)))
			return (
				(i = ef.test(e)),
				(t[1] = Ga(t[1], i)),
				(t[0] = Ga(t[0], i, _c(t[1]))),
				!0
			);
	},
	Kr,
	ti = (function () {
		var a = Date.now,
			t = 500,
			e = 33,
			i = a(),
			n = i,
			r = 1e3 / 240,
			s = r,
			o = [],
			c,
			u,
			f,
			d,
			p,
			l,
			g = function h(m) {
				var _ = a() - n,
					y = m === !0,
					S,
					x,
					b,
					P;
				if (
					((_ > t || _ < 0) && (i += _ - e),
					(n += _),
					(b = n - i),
					(S = b - s),
					(S > 0 || y) &&
						((P = ++d.frame),
						(p = b - d.time * 1e3),
						(d.time = b = b / 1e3),
						(s += S + (S >= r ? 4 : r - S)),
						(x = 1)),
					y || (c = u(h)),
					x)
				)
					for (l = 0; l < o.length; l++) o[l](b, p, P, m);
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
					Ul &&
						(!Io &&
							da() &&
							((Oi = Io = window),
							(ha = Oi.document || {}),
							(si.gsap = We),
							(Oi.gsapVersions || (Oi.gsapVersions = [])).push(We.version),
							Gl(zs || Oi.GreenSockGlobals || (!Oi.gsap && Oi) || {}),
							hc.forEach(pc)),
						(f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						c && d.sleep(),
						(u =
							f ||
							function (m) {
								return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
							}),
						(Kr = 1),
						g(2));
				},
				sleep: function () {
					(f ? cancelAnimationFrame : clearTimeout)(c), (Kr = 0), (u = Ur);
				},
				lagSmoothing: function (m, _) {
					(t = m || 1 / 0), (e = Math.min(_ || 33, t));
				},
				fps: function (m) {
					(r = 1e3 / (m || 240)), (s = d.time * 1e3 + r);
				},
				add: function (m, _, y) {
					var S = _
						? function (x, b, P, M) {
								m(x, b, P, M), d.remove(S);
							}
						: m;
					return d.remove(m), o[y ? "unshift" : "push"](S), ar(), S;
				},
				remove: function (m, _) {
					~(_ = o.indexOf(m)) && o.splice(_, 1) && l >= _ && l--;
				},
				_listeners: o,
			}),
			d
		);
	})(),
	ar = function () {
		return !Kr && ti.wake();
	},
	St = {},
	nf = /^[\d.\-M][\d.\-,\s]/,
	rf = /["']/g,
	sf = function (t) {
		for (
			var e = {},
				i = t.substr(1, t.length - 3).split(":"),
				n = i[0],
				r = 1,
				s = i.length,
				o,
				c,
				u;
			r < s;
			r++
		)
			(c = i[r]),
				(o = r !== s - 1 ? c.lastIndexOf(",") : c.length),
				(u = c.substr(0, o)),
				(e[n] = isNaN(u) ? u.replace(rf, "").trim() : +u),
				(n = c.substr(o + 1).trim());
		return e;
	},
	of = function (t) {
		var e = t.indexOf("(") + 1,
			i = t.indexOf(")"),
			n = t.indexOf("(", e);
		return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
	},
	af = function (t) {
		var e = (t + "").split("("),
			i = St[e[0]];
		return i && e.length > 1 && i.config
			? i.config.apply(
					null,
					~t.indexOf("{") ? [sf(e[1])] : of(t).split(",").map(tc),
				)
			: St._CE && nf.test(t)
				? St._CE("", t)
				: i;
	},
	yc = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	vc = function a(t, e) {
		for (var i = t._first, n; i; )
			i instanceof Re
				? a(i, e)
				: i.vars.yoyoEase &&
					(!i._yoyo || !i._repeat) &&
					i._yoyo !== e &&
					(i.timeline
						? a(i.timeline, e)
						: ((n = i._ease),
							(i._ease = i._yEase),
							(i._yEase = n),
							(i._yoyo = e))),
				(i = i._next);
	},
	Sn = function (t, e) {
		return (t && (Kt(t) ? t : St[t] || af(t))) || e;
	},
	Bn = function (t, e, i, n) {
		i === void 0 &&
			(i = function (c) {
				return 1 - e(1 - c);
			}),
			n === void 0 &&
				(n = function (c) {
					return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2;
				});
		var r = { easeIn: e, easeOut: i, easeInOut: n },
			s;
		return (
			He(t, function (o) {
				(St[o] = si[o] = r), (St[(s = o.toLowerCase())] = i);
				for (var c in r)
					St[
						s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
					] = St[o + "." + c] = r[c];
			}),
			r
		);
	},
	xc = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	uo = function a(t, e, i) {
		var n = e >= 1 ? e : 1,
			r = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (r / Ao) * (Math.asin(1 / n) || 0),
			o = function (f) {
				return f === 1 ? 1 : n * Math.pow(2, -10 * f) * Iu((f - s) * r) + 1;
			},
			c =
				t === "out"
					? o
					: t === "in"
						? function (u) {
								return 1 - o(1 - u);
							}
						: xc(o);
		return (
			(r = Ao / r),
			(c.config = function (u, f) {
				return a(t, u, f);
			}),
			c
		);
	},
	fo = function a(t, e) {
		e === void 0 && (e = 1.70158);
		var i = function (s) {
				return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
			},
			n =
				t === "out"
					? i
					: t === "in"
						? function (r) {
								return 1 - i(1 - r);
							}
						: xc(i);
		return (
			(n.config = function (r) {
				return a(t, r);
			}),
			n
		);
	};
He("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var e = t < 5 ? t + 1 : t;
	Bn(
		a + ",Power" + (e - 1),
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
Bn("Elastic", uo("in"), uo("out"), uo());
(function (a, t) {
	var e = 1 / t,
		i = 2 * e,
		n = 2.5 * e,
		r = function (o) {
			return o < e
				? a * o * o
				: o < i
					? a * Math.pow(o - 1.5 / t, 2) + 0.75
					: o < n
						? a * (o -= 2.25 / t) * o + 0.9375
						: a * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	Bn(
		"Bounce",
		function (s) {
			return 1 - r(1 - s);
		},
		r,
	);
})(7.5625, 2.75);
Bn("Expo", function (a) {
	return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
Bn("Circ", function (a) {
	return -(Hl(1 - a * a) - 1);
});
Bn("Sine", function (a) {
	return a === 1 ? 1 : -Lu(a * Eu) + 1;
});
Bn("Back", fo("in"), fo("out"), fo());
St.SteppedEase =
	St.steps =
	si.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var i = 1 / t,
					n = t + (e ? 0 : 1),
					r = e ? 1 : 0,
					s = 1 - Ft;
				return function (o) {
					return (((n * as(0, s, o)) | 0) + r) * i;
				};
			},
		};
rr.ease = St["quad.out"];
He(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (_a += a + "," + a + "Params,");
	},
);
var wc = function (t, e) {
		(this.id = Au++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : Zl),
			(this.set = e ? e.getSetter : wa);
	},
	Qr = (function () {
		function a(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				or(this, +e.duration, 1, 1),
				(this.data = e.data),
				zt && ((this._ctx = zt), zt.data.push(this)),
				Kr || ti.wake();
		}
		var t = a.prototype;
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
						or(
							this,
							this._repeat < 0
								? i
								: (i - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (i, n) {
				if ((ar(), !arguments.length)) return this._tTime;
				var r = this._dp;
				if (r && r.smoothChildTiming && this._ts) {
					for (no(this, i), !r._dp || r.parent || nc(r, this); r && r.parent; )
						r.parent._time !==
							r._start +
								(r._ts >= 0
									? r._tTime / r._ts
									: (r.totalDuration() - r._tTime) / -r._ts) &&
							r.totalTime(r._tTime, !0),
							(r = r.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && i < this._tDur) ||
							(this._ts < 0 && i > 0) ||
							(!this._tDur && !i)) &&
						Pi(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== i ||
						(!this._dur && !n) ||
						(this._initted && Math.abs(this._zTime) === Ft) ||
						(!i && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = i), Jl(this, i, n)),
					this
				);
			}),
			(t.time = function (i, n) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), i + Wa(this)) %
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
								Wa(this),
							n,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (i, n) {
				var r = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (i - 1) * r, n)
					: this._repeat
						? sr(this._tTime, r) + 1
						: 1;
			}),
			(t.timeScale = function (i, n) {
				if (!arguments.length) return this._rts === -Ft ? 0 : this._rts;
				if (this._rts === i) return this;
				var r =
					this.parent && this._ts ? qs(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +i || 0),
					(this._ts = this._ps || i === -Ft ? 0 : this._rts),
					this.totalTime(as(-Math.abs(this._delay), this._tDur, r), n !== !1),
					io(this),
					Xu(this)
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
								: (ar(),
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
						n && (n._sort || !this.parent) && Pi(n, this, i - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (i) {
				return (
					this._start +
					(qe(i) ? this.totalDuration() : this.duration()) /
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
							? qs(n.rawTime(i), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (i) {
				i === void 0 && (i = Fu);
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
				for (var n = this, r = arguments.length ? i : n.rawTime(); n; )
					(r = n._start + r / (Math.abs(n._ts) || 1)), (n = n._dp);
				return !this.parent && this._sat ? this._sat.globalTime(i) : r;
			}),
			(t.repeat = function (i) {
				return arguments.length
					? ((this._repeat = i === 1 / 0 ? -2 : i), ja(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (i) {
				if (arguments.length) {
					var n = this._time;
					return (this._rDelay = i), ja(this), n ? this.time(n) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (i) {
				return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
			}),
			(t.seek = function (i, n) {
				return this.totalTime(li(this, i), qe(n));
			}),
			(t.restart = function (i, n) {
				return this.play().totalTime(i ? -this._delay : 0, qe(n));
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
					r;
				return !!(
					!i ||
					(this._ts &&
						this._initted &&
						i.isActive() &&
						(r = i.rawTime(!0)) >= n &&
						r < this.endTime(!0) - Ft)
				);
			}),
			(t.eventCallback = function (i, n, r) {
				var s = this.vars;
				return arguments.length > 1
					? (n
							? ((s[i] = n),
								r && (s[i + "Params"] = r),
								i === "onUpdate" && (this._onUpdate = n))
							: delete s[i],
						this)
					: s[i];
			}),
			(t.then = function (i) {
				var n = this;
				return new Promise(function (r) {
					var s = Kt(i) ? i : ec,
						o = function () {
							var u = n.then;
							(n.then = null),
								Kt(s) && (s = s(n)) && (s.then || s === n) && (n.then = u),
								r(s),
								(n.then = u);
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
pi(Qr.prototype, {
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
var Re = (function (a) {
	ql(t, a);
	function t(i, n) {
		var r;
		return (
			i === void 0 && (i = {}),
			(r = a.call(this, i) || this),
			(r.labels = {}),
			(r.smoothChildTiming = !!i.smoothChildTiming),
			(r.autoRemoveChildren = !!i.autoRemoveChildren),
			(r._sort = qe(i.sortChildren)),
			$t && Pi(i.parent || $t, Fi(r), n),
			i.reversed && r.reverse(),
			i.paused && r.paused(!0),
			i.scrollTrigger && rc(Fi(r), i.scrollTrigger),
			r
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (n, r, s) {
			return Ar(0, arguments, this), this;
		}),
		(e.from = function (n, r, s) {
			return Ar(1, arguments, this), this;
		}),
		(e.fromTo = function (n, r, s, o) {
			return Ar(2, arguments, this), this;
		}),
		(e.set = function (n, r, s) {
			return (
				(r.duration = 0),
				(r.parent = this),
				Er(r).repeatDelay || (r.repeat = 0),
				(r.immediateRender = !!r.immediateRender),
				new ne(n, r, li(this, s), 1),
				this
			);
		}),
		(e.call = function (n, r, s) {
			return Pi(this, ne.delayedCall(0, n, r), s);
		}),
		(e.staggerTo = function (n, r, s, o, c, u, f) {
			return (
				(s.duration = r),
				(s.stagger = s.stagger || o),
				(s.onComplete = u),
				(s.onCompleteParams = f),
				(s.parent = this),
				new ne(n, s, li(this, c)),
				this
			);
		}),
		(e.staggerFrom = function (n, r, s, o, c, u, f) {
			return (
				(s.runBackwards = 1),
				(Er(s).immediateRender = qe(s.immediateRender)),
				this.staggerTo(n, r, s, o, c, u, f)
			);
		}),
		(e.staggerFromTo = function (n, r, s, o, c, u, f, d) {
			return (
				(o.startAt = s),
				(Er(o).immediateRender = qe(o.immediateRender)),
				this.staggerTo(n, r, o, c, u, f, d)
			);
		}),
		(e.render = function (n, r, s) {
			var o = this._time,
				c = this._dirty ? this.totalDuration() : this._tDur,
				u = this._dur,
				f = n <= 0 ? 0 : de(n),
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
				(this !== $t && f > c && n >= 0 && (f = c), f !== this._tTime || s || d)
			) {
				if (
					(o !== this._time &&
						u &&
						((f += this._time - o), (n += this._time - o)),
					(p = f),
					(x = this._start),
					(S = this._ts),
					(_ = !S),
					d && (u || (o = this._zTime), (n || !r) && (this._zTime = n)),
					this._repeat)
				) {
					if (
						((P = this._yoyo),
						(m = u + this._rDelay),
						this._repeat < -1 && n < 0)
					)
						return this.totalTime(m * 100 + n, r, s);
					if (
						((p = de(f % m)),
						f === c
							? ((h = this._repeat), (p = u))
							: ((h = ~~(f / m)),
								h && h === f / m && ((p = u), h--),
								p > u && (p = u)),
						(b = sr(this._tTime, m)),
						!o &&
							this._tTime &&
							b !== h &&
							this._tTime - b * m - this._dur <= 0 &&
							(b = h),
						P && h & 1 && ((p = u - p), (M = 1)),
						h !== b && !this._lock)
					) {
						var O = P && b & 1,
							k = O === (P && h & 1);
						if (
							(h < b && (O = !O),
							(o = O ? 0 : f % u ? u : f),
							(this._lock = 1),
							(this.render(o || (M ? 0 : de(h * m)), r, !u)._lock = 0),
							(this._tTime = f),
							!r && this.parent && ni(this, "onRepeat"),
							this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								_ !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((u = this._dur),
							(c = this._tDur),
							k &&
								((this._lock = 2),
								(o = O ? u : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !M && this.invalidate()),
							(this._lock = 0),
							!this._ts && !_)
						)
							return this;
						vc(this, M);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = Vu(this, de(o), de(p))), y && (f -= p - (p = y._start))),
					(this._tTime = f),
					(this._time = p),
					(this._act = !S),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = n),
						(o = 0)),
					!o && p && !r && !h && (ni(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (p >= o && n >= 0)
					for (l = this._first; l; ) {
						if (
							((g = l._next), (l._act || p >= l._start) && l._ts && y !== l)
						) {
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (p - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(p - l._start) * l._ts,
									r,
									s,
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
							if (l.parent !== this) return this.render(n, r, s);
							if (
								(l.render(
									l._ts > 0
										? (L - l._start) * l._ts
										: (l._dirty ? l.totalDuration() : l._tDur) +
												(L - l._start) * l._ts,
									r,
									s || (De && (l._initted || l._startAt)),
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
					!r &&
					(this.pause(),
					(y.render(p >= o ? 0 : -Ft)._zTime = p >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = x), io(this), this.render(n, r, s);
				this._onUpdate && !r && ni(this, "onUpdate", !0),
					((f === c && this._tTime >= this.totalDuration()) || (!f && o)) &&
						(x === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
						(this._lock ||
							((n || !u) &&
								((f === c && this._ts > 0) || (!f && this._ts < 0)) &&
								an(this, 1),
							!r &&
								!(n < 0 && !o) &&
								(f || o || !c) &&
								(ni(
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
		(e.add = function (n, r) {
			var s = this;
			if ((Vi(r) || (r = li(this, r, n)), !(n instanceof Qr))) {
				if (Oe(n))
					return (
						n.forEach(function (o) {
							return s.add(o, r);
						}),
						this
					);
				if (he(n)) return this.addLabel(n, r);
				if (Kt(n)) n = ne.delayedCall(0, n);
				else return this;
			}
			return this !== n ? Pi(this, n, r) : this;
		}),
		(e.getChildren = function (n, r, s, o) {
			n === void 0 && (n = !0),
				r === void 0 && (r = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -fi);
			for (var c = [], u = this._first; u; )
				u._start >= o &&
					(u instanceof ne
						? r && c.push(u)
						: (s && c.push(u), n && c.push.apply(c, u.getChildren(!0, r, s)))),
					(u = u._next);
			return c;
		}),
		(e.getById = function (n) {
			for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
				if (r[s].vars.id === n) return r[s];
		}),
		(e.remove = function (n) {
			return he(n)
				? this.removeLabel(n)
				: Kt(n)
					? this.killTweensOf(n)
					: (eo(this, n),
						n === this._recent && (this._recent = this._last),
						Tn(this));
		}),
		(e.totalTime = function (n, r) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = de(
							ti.time -
								(this._ts > 0
									? n / this._ts
									: (this.totalDuration() - n) / -this._ts),
						)),
					a.prototype.totalTime.call(this, n, r),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(e.addLabel = function (n, r) {
			return (this.labels[n] = li(this, r)), this;
		}),
		(e.removeLabel = function (n) {
			return delete this.labels[n], this;
		}),
		(e.addPause = function (n, r, s) {
			var o = ne.delayedCall(0, r || Ur, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), Pi(this, o, li(this, n))
			);
		}),
		(e.removePause = function (n) {
			var r = this._first;
			for (n = li(this, n); r; )
				r._start === n && r.data === "isPause" && an(r), (r = r._next);
		}),
		(e.killTweensOf = function (n, r, s) {
			for (var o = this.getTweensOf(n, s), c = o.length; c--; )
				Qi !== o[c] && o[c].kill(n, r);
			return this;
		}),
		(e.getTweensOf = function (n, r) {
			for (var s = [], o = di(n), c = this._first, u = Vi(r), f; c; )
				c instanceof ne
					? Bu(c._targets, o) &&
						(u
							? (!Qi || (c._initted && c._ts)) &&
								c.globalTime(0) <= r &&
								c.globalTime(c.totalDuration()) > r
							: !r || c.isActive()) &&
						s.push(c)
					: (f = c.getTweensOf(o, r)).length && s.push.apply(s, f),
					(c = c._next);
			return s;
		}),
		(e.tweenTo = function (n, r) {
			r = r || {};
			var s = this,
				o = li(s, n),
				c = r,
				u = c.startAt,
				f = c.onStart,
				d = c.onStartParams,
				p = c.immediateRender,
				l,
				g = ne.to(
					s,
					pi(
						{
							ease: r.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: o,
							overwrite: "auto",
							duration:
								r.duration ||
								Math.abs(
									(o - (u && "time" in u ? u.time : s._time)) / s.timeScale(),
								) ||
								Ft,
							onStart: function () {
								if ((s.pause(), !l)) {
									var m =
										r.duration ||
										Math.abs(
											(o - (u && "time" in u ? u.time : s._time)) /
												s.timeScale(),
										);
									g._dur !== m && or(g, m, 0, 1).render(g._time, !0, !0),
										(l = 1);
								}
								f && f.apply(g, d || []);
							},
						},
						r,
					),
				);
			return p ? g.render(0) : g;
		}),
		(e.tweenFromTo = function (n, r, s) {
			return this.tweenTo(r, pi({ startAt: { time: li(this, n) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (n) {
			return n === void 0 && (n = this._time), Ua(this, li(this, n));
		}),
		(e.previousLabel = function (n) {
			return n === void 0 && (n = this._time), Ua(this, li(this, n), 1);
		}),
		(e.currentLabel = function (n) {
			return arguments.length
				? this.seek(n, !0)
				: this.previousLabel(this._time + Ft);
		}),
		(e.shiftChildren = function (n, r, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, c = this.labels, u; o; )
				o._start >= s && ((o._start += n), (o._end += n)), (o = o._next);
			if (r) for (u in c) c[u] >= s && (c[u] += n);
			return Tn(this);
		}),
		(e.invalidate = function (n) {
			var r = this._first;
			for (this._lock = 0; r; ) r.invalidate(n), (r = r._next);
			return a.prototype.invalidate.call(this, n);
		}),
		(e.clear = function (n) {
			n === void 0 && (n = !0);
			for (var r = this._first, s; r; ) (s = r._next), this.remove(r), (r = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				n && (this.labels = {}),
				Tn(this)
			);
		}),
		(e.totalDuration = function (n) {
			var r = 0,
				s = this,
				o = s._last,
				c = fi,
				u,
				f,
				d;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -n : n),
				);
			if (s._dirty) {
				for (d = s.parent; o; )
					(u = o._prev),
						o._dirty && o.totalDuration(),
						(f = o._start),
						f > c && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (Pi(s, o, f - o._delay, 1)._lock = 0))
							: (c = f),
						f < 0 &&
							o._ts &&
							((r -= f),
							((!d && !s._dp) || (d && d.smoothChildTiming)) &&
								((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
							s.shiftChildren(-f, !1, -1 / 0),
							(c = 0)),
						o._end > r && o._ts && (r = o._end),
						(o = u);
				or(s, s === $t && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (n) {
			if (($t._ts && (Jl($t, qs(n, $t)), (Ql = ti.frame)), ti.frame >= $a)) {
				$a += ri.autoSleep || 120;
				var r = $t._first;
				if ((!r || !r._ts) && ri.autoSleep && ti._listeners.length < 2) {
					for (; r && !r._ts; ) r = r._next;
					r || ti.sleep();
				}
			}
		}),
		t
	);
})(Qr);
pi(Re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var lf = function (t, e, i, n, r, s, o) {
		var c = new $e(this._pt, t, e, 0, 1, Oc, null, r),
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
				(_ = ~n.indexOf("random(")) && (n = Gr(n)),
				s && ((y = [i, n]), s(y, t, e), (i = y[0]), (n = y[1])),
				p = i.match(ao) || [];
			(d = ao.exec(n));

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
						c: g.charAt(1) === "=" ? Gn(m, g) - m : parseFloat(g) - m,
						m: l && l < 4 ? Math.round : 0,
					}),
					(u = ao.lastIndex));
		return (
			(c.c = u < n.length ? n.substring(u, n.length) : ""),
			(c.fp = o),
			(Wl.test(n) || _) && (c.e = 0),
			(this._pt = c),
			c
		);
	},
	ya = function (t, e, i, n, r, s, o, c, u, f) {
		Kt(n) && (n = n(r || 0, t, s));
		var d = t[e],
			p =
				i !== "get"
					? i
					: Kt(d)
						? u
							? t[
									e.indexOf("set") || !Kt(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](u)
							: t[e]()
						: d,
			l = Kt(d) ? (u ? hf : Mc) : xa,
			g;
		if (
			(he(n) &&
				(~n.indexOf("random(") && (n = Gr(n)),
				n.charAt(1) === "=" &&
					((g = Gn(p, n) + (Me(p) || 0)), (g || g === 0) && (n = g))),
			!f || p !== n || Xo)
		)
			return !isNaN(p * n) && n !== ""
				? ((g = new $e(
						this._pt,
						t,
						e,
						+p || 0,
						n - (p || 0),
						typeof d == "boolean" ? gf : Dc,
						0,
						l,
					)),
					u && (g.fp = u),
					o && g.modifier(o, this, t),
					(this._pt = g))
				: (!d && !(e in t) && pa(e, n),
					lf.call(this, t, e, p, n, l, c || ri.stringFilter, u));
	},
	cf = function (t, e, i, n, r) {
		if (
			(Kt(t) && (t = Lr(t, r, e, i, n)),
			!Ri(t) || (t.style && t.nodeType) || Oe(t) || $l(t))
		)
			return he(t) ? Lr(t, r, e, i, n) : t;
		var s = {},
			o;
		for (o in t) s[o] = Lr(t[o], r, e, i, n);
		return s;
	},
	bc = function (t, e, i, n, r, s) {
		var o, c, u, f;
		if (
			Je[t] &&
			(o = new Je[t]()).init(
				r,
				o.rawVars ? e[t] : cf(e[t], n, r, s, i),
				i,
				n,
				s,
			) !== !1 &&
			((i._pt = c = new $e(i._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
			i !== jn)
		)
			for (u = i._ptLookup[i._targets.indexOf(r)], f = o._props.length; f--; )
				u[o._props[f]] = c;
		return o;
	},
	Qi,
	Xo,
	va = function a(t, e, i) {
		var n = t.vars,
			r = n.ease,
			s = n.startAt,
			o = n.immediateRender,
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
			S = t._overwrite === "auto" && !ua,
			x = t.timeline,
			b,
			P,
			M,
			O,
			k,
			L,
			F,
			D,
			R,
			X,
			q,
			V,
			H;
		if (
			(x && (!p || !r) && (r = "none"),
			(t._ease = Sn(r, rr.ease)),
			(t._yEase = d ? yc(Sn(d === !0 ? r : d, rr.ease)) : 0),
			d &&
				t._yoyo &&
				!t._repeat &&
				((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
			(t._from = !x && !!n.runBackwards),
			!x || (p && !n.stagger))
		) {
			if (
				((D = m[0] ? bn(m[0]).harness : 0),
				(V = D && n[D.prop]),
				(b = Xs(n, ga)),
				h &&
					(h._zTime < 0 && h.progress(1),
					e < 0 && f && o && !l ? h.render(-1, !0) : h.revert(f && g ? Ds : Nu),
					(h._lazy = 0)),
				s)
			) {
				if (
					(an(
						(t._startAt = ne.set(
							m,
							pi(
								{
									data: "isStart",
									overwrite: !1,
									parent: _,
									immediateRender: !0,
									lazy: !h && qe(c),
									startAt: null,
									delay: 0,
									onUpdate:
										u &&
										function () {
											return ni(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (De || (!o && !l)) && t._startAt.revert(Ds),
					o && g && e <= 0 && i <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (f && g && !h) {
				if (
					(e && (o = !1),
					(M = pi(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !h && qe(c),
							immediateRender: o,
							stagger: 0,
							parent: _,
						},
						b,
					)),
					V && (M[D.prop] = V),
					an((t._startAt = ne.set(m, M))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (De ? t._startAt.revert(Ds) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					a(t._startAt, Ft, Ft);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, c = (g && qe(c)) || (c && !g), P = 0;
				P < m.length;
				P++
			) {
				if (
					((k = m[P]),
					(F = k._gsap || ma(m)[P]._gsap),
					(t._ptLookup[P] = X = {}),
					Ro[F.id] && rn.length && Ys(),
					(q = y === m ? P : y.indexOf(k)),
					D &&
						(R = new D()).init(k, V || b, t, q, y) !== !1 &&
						((t._pt = O =
							new $e(t._pt, k, R.name, 0, 1, R.render, R, 0, R.priority)),
						R._props.forEach(function (tt) {
							X[tt] = O;
						}),
						R.priority && (L = 1)),
					!D || V)
				)
					for (M in b)
						Je[M] && (R = bc(M, b, t, q, k, y))
							? R.priority && (L = 1)
							: (X[M] = O =
									ya.call(t, k, M, "get", b[M], q, y, 0, n.stringFilter));
				t._op && t._op[P] && t.kill(k, t._op[P]),
					S &&
						t._pt &&
						((Qi = t),
						$t.killTweensOf(k, X, t.globalTime(e)),
						(H = !t.parent),
						(Qi = 0)),
					t._pt && c && (Ro[F.id] = 1);
			}
			L && Cc(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = u),
			(t._initted = (!t._op || t._pt) && !H),
			p && e <= 0 && x.render(fi, !0, !0);
	},
	uf = function (t, e, i, n, r, s, o, c) {
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
						(Xo = 1),
						(t.vars[e] = "+=0"),
						va(t, o),
						(Xo = 0),
						c ? jr(e + " not eligible for reset") : 1
					);
				u.push(f);
			}
		for (l = u.length; l--; )
			(d = u[l]),
				(f = d._pt || d),
				(f.s = (n || n === 0) && !r ? n : f.s + (n || 0) + s * f.c),
				(f.c = i - f.s),
				d.e && (d.e = Zt(i) + Me(d.e)),
				d.b && (d.b = f.s + Me(d.b));
	},
	ff = function (t, e) {
		var i = t[0] ? bn(t[0]).harness : 0,
			n = i && i.aliases,
			r,
			s,
			o,
			c;
		if (!n) return e;
		r = En({}, e);
		for (s in n)
			if (s in r) for (c = n[s].split(","), o = c.length; o--; ) r[c[o]] = r[s];
		return r;
	},
	df = function (t, e, i, n) {
		var r = e.ease || n || "power1.inOut",
			s,
			o;
		if (Oe(e))
			(o = i[t] || (i[t] = [])),
				e.forEach(function (c, u) {
					return o.push({ t: (u / (e.length - 1)) * 100, v: c, e: r });
				});
		else
			for (s in e)
				(o = i[s] || (i[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: r });
	},
	Lr = function (t, e, i, n, r) {
		return Kt(t)
			? t.call(e, i, n, r)
			: he(t) && ~t.indexOf("random(")
				? Gr(t)
				: t;
	},
	Tc = _a + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	Sc = {};
He(Tc + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (Sc[a] = 1);
});
var ne = (function (a) {
	ql(t, a);
	function t(i, n, r, s) {
		var o;
		typeof n == "number" && ((r.duration = n), (n = r), (r = null)),
			(o = a.call(this, s ? n : Er(n)) || this);
		var c = o.vars,
			u = c.duration,
			f = c.delay,
			d = c.immediateRender,
			p = c.stagger,
			l = c.overwrite,
			g = c.keyframes,
			h = c.defaults,
			m = c.scrollTrigger,
			_ = c.yoyoEase,
			y = n.parent || $t,
			S = (Oe(i) || $l(i) ? Vi(i[0]) : "length" in n) ? [i] : di(i),
			x,
			b,
			P,
			M,
			O,
			k,
			L,
			F;
		if (
			((o._targets = S.length
				? ma(S)
				: jr(
						"GSAP target " + i + " not found. https://gsap.com",
						!ri.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = l),
			g || p || fs(u) || fs(f))
		) {
			if (
				((n = o.vars),
				(x = o.timeline =
					new Re({
						data: "nested",
						defaults: h || {},
						targets: y && y.data === "nested" ? y.vars.targets : S,
					})),
				x.kill(),
				(x.parent = x._dp = Fi(o)),
				(x._start = 0),
				p || fs(u) || fs(f))
			) {
				if (((M = S.length), (L = p && lc(p)), Ri(p)))
					for (O in p) ~Tc.indexOf(O) && (F || (F = {}), (F[O] = p[O]));
				for (b = 0; b < M; b++)
					(P = Xs(n, Sc)),
						(P.stagger = 0),
						_ && (P.yoyoEase = _),
						F && En(P, F),
						(k = S[b]),
						(P.duration = +Lr(u, Fi(o), b, k, S)),
						(P.delay = (+Lr(f, Fi(o), b, k, S) || 0) - o._delay),
						!p &&
							M === 1 &&
							P.delay &&
							((o._delay = f = P.delay), (o._start += f), (P.delay = 0)),
						x.to(k, P, L ? L(b, k, S) : 0),
						(x._ease = St.none);
				x.duration() ? (u = f = 0) : (o.timeline = 0);
			} else if (g) {
				Er(pi(x.vars.defaults, { ease: "none" })),
					(x._ease = Sn(g.ease || n.ease || "none"));
				var D = 0,
					R,
					X,
					q;
				if (Oe(g))
					g.forEach(function (V) {
						return x.to(S, V, ">");
					}),
						x.duration();
				else {
					P = {};
					for (O in g)
						O === "ease" || O === "easeEach" || df(O, g[O], P, g.easeEach);
					for (O in P)
						for (
							R = P[O].sort(function (V, H) {
								return V.t - H.t;
							}),
								D = 0,
								b = 0;
							b < R.length;
							b++
						)
							(X = R[b]),
								(q = {
									ease: X.e,
									duration: ((X.t - (b ? R[b - 1].t : 0)) / 100) * u,
								}),
								(q[O] = X.v),
								x.to(S, q, D),
								(D += q.duration);
					x.duration() < u && x.to({}, { duration: u - x.duration() });
				}
			}
			u || o.duration((u = x.duration()));
		} else o.timeline = 0;
		return (
			l === !0 && !ua && ((Qi = Fi(o)), $t.killTweensOf(S), (Qi = 0)),
			Pi(y, Fi(o), r),
			n.reversed && o.reverse(),
			n.paused && o.paused(!0),
			(d ||
				(!u &&
					!g &&
					o._start === de(y._time) &&
					qe(d) &&
					qu(Fi(o)) &&
					y.data !== "nested")) &&
				((o._tTime = -Ft), o.render(Math.max(0, -f) || 0)),
			m && rc(Fi(o), m),
			o
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (n, r, s) {
			var o = this._time,
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
			if (!u) $u(this, n, r, s);
			else if (
				d !== this._tTime ||
				!n ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((p = d), (S = this.timeline), this._repeat)) {
					if (((h = u + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(h * 100 + n, r, s);
					if (
						((p = de(d % h)),
						d === c
							? ((g = this._repeat), (p = u))
							: ((g = ~~(d / h)),
								g && g === de(d / h) && ((p = u), g--),
								p > u && (p = u)),
						(_ = this._yoyo && g & 1),
						_ && ((x = this._yEase), (p = u - p)),
						(m = sr(this._tTime, h)),
						p === o && !s && this._initted && g === m)
					)
						return (this._tTime = d), this;
					g !== m &&
						(S && this._yEase && vc(S, _),
						this.vars.repeatRefresh &&
							!_ &&
							!this._lock &&
							this._time !== h &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(de(h * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (sc(this, f ? n : p, s, r, d)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && g !== m))
						return this;
					if (u !== this._dur) return this.render(n, r, s);
				}
				if (
					((this._tTime = d),
					(this._time = p),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (x || this._ease)(p / u)),
					this._from && (this.ratio = y = 1 - y),
					p && !o && !r && !g && (ni(this, "onStart"), this._tTime !== d))
				)
					return this;
				for (l = this._pt; l; ) l.r(y, l.d), (l = l._next);
				(S && S.render(n < 0 ? n : S._dur * S._ease(p / this._dur), r, s)) ||
					(this._startAt && (this._zTime = n)),
					this._onUpdate &&
						!r &&
						(f && No(this, n, r, s), ni(this, "onUpdate")),
					this._repeat &&
						g !== m &&
						this.vars.onRepeat &&
						!r &&
						this.parent &&
						ni(this, "onRepeat"),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(f && !this._onUpdate && No(this, n, !0, !0),
						(n || !u) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							an(this, 1),
						!r &&
							!(f && !o) &&
							(d || o || _) &&
							(ni(this, d === c ? "onComplete" : "onReverseComplete", !0),
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
				a.prototype.invalidate.call(this, n)
			);
		}),
		(e.resetTo = function (n, r, s, o, c) {
			Kr || ti.wake(), this._ts || this.play();
			var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				f;
			return (
				this._initted || va(this, u),
				(f = this._ease(u / this._dur)),
				uf(this, n, r, s, o, f, u, c)
					? this.resetTo(n, r, s, o, 1)
					: (no(this, 0),
						this.parent ||
							ic(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(e.kill = function (n, r) {
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
				c = n ? di(n) : o,
				u = this._ptLookup,
				f = this._pt,
				d,
				p,
				l,
				g,
				h,
				m,
				_;
			if ((!r || r === "all") && Yu(o, c))
				return r === "all" && (this._pt = 0), xr(this);
			for (
				d = this._op = this._op || [],
					r !== "all" &&
						(he(r) &&
							((h = {}),
							He(r, function (y) {
								return (h[y] = 1);
							}),
							(r = h)),
						(r = ff(o, r))),
					_ = o.length;
				_--;

			)
				if (~c.indexOf(o[_])) {
					(p = u[_]),
						r === "all"
							? ((d[_] = r), (g = p), (l = {}))
							: ((l = d[_] = d[_] || {}), (g = r));
					for (h in g)
						(m = p && p[h]),
							m &&
								((!("kill" in m.d) || m.d.kill(h) === !0) && eo(this, m, "_pt"),
								delete p[h]),
							l !== "all" && (l[h] = 1);
				}
			return this._initted && !this._pt && f && xr(this), this;
		}),
		(t.to = function (n, r) {
			return new t(n, r, arguments[2]);
		}),
		(t.from = function (n, r) {
			return Ar(1, arguments);
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
			return Ar(2, arguments);
		}),
		(t.set = function (n, r) {
			return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(n, r);
		}),
		(t.killTweensOf = function (n, r, s) {
			return $t.killTweensOf(n, r, s);
		}),
		t
	);
})(Qr);
pi(ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
He("staggerTo,staggerFrom,staggerFromTo", function (a) {
	ne[a] = function () {
		var t = new Re(),
			e = Bo.call(arguments, 0);
		return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
	};
});
var xa = function (t, e, i) {
		return (t[e] = i);
	},
	Mc = function (t, e, i) {
		return t[e](i);
	},
	hf = function (t, e, i, n) {
		return t[e](n.fp, i);
	},
	pf = function (t, e, i) {
		return t.setAttribute(e, i);
	},
	wa = function (t, e) {
		return Kt(t[e]) ? Mc : fa(t[e]) && t.setAttribute ? pf : xa;
	},
	Dc = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	gf = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	Oc = function (t, e) {
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
	ba = function (t, e) {
		for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
	},
	_f = function (t, e, i, n) {
		for (var r = this._pt, s; r; )
			(s = r._next), r.p === n && r.modifier(t, e, i), (r = s);
	},
	mf = function (t) {
		for (var e = this._pt, i, n; e; )
			(n = e._next),
				(e.p === t && !e.op) || e.op === t
					? eo(this, e, "_pt")
					: e.dep || (i = 1),
				(e = n);
		return !i;
	},
	yf = function (t, e, i, n) {
		n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
	},
	Cc = function (t) {
		for (var e = t._pt, i, n, r, s; e; ) {
			for (i = e._next, n = r; n && n.pr > e.pr; ) n = n._next;
			(e._prev = n ? n._prev : s) ? (e._prev._next = e) : (r = e),
				(e._next = n) ? (n._prev = e) : (s = e),
				(e = i);
		}
		t._pt = r;
	},
	$e = (function () {
		function a(e, i, n, r, s, o, c, u, f) {
			(this.t = i),
				(this.s = r),
				(this.c = s),
				(this.p = n),
				(this.r = o || Dc),
				(this.d = c || this),
				(this.set = u || xa),
				(this.pr = f || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (i, n, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = yf),
					(this.m = i),
					(this.mt = r),
					(this.tween = n);
			}),
			a
		);
	})();
He(
	_a +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (ga[a] = 1);
	},
);
si.TweenMax = si.TweenLite = ne;
si.TimelineLite = si.TimelineMax = Re;
$t = new Re({
	sortChildren: !1,
	defaults: rr,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
ri.stringFilter = mc;
var Mn = [],
	Cs = {},
	vf = [],
	Ka = 0,
	xf = 0,
	ho = function (t) {
		return (Cs[t] || vf).map(function (e) {
			return e();
		});
	},
	qo = function () {
		var t = Date.now(),
			e = [];
		t - Ka > 2 &&
			(ho("matchMediaInit"),
			Mn.forEach(function (i) {
				var n = i.queries,
					r = i.conditions,
					s,
					o,
					c,
					u;
				for (o in n)
					(s = Oi.matchMedia(n[o]).matches),
						s && (c = 1),
						s !== r[o] && ((r[o] = s), (u = 1));
				u && (i.revert(), c && e.push(i));
			}),
			ho("matchMediaRevert"),
			e.forEach(function (i) {
				return i.onMatch(i, function (n) {
					return i.add(null, n);
				});
			}),
			(Ka = t),
			ho("matchMedia"));
	},
	Pc = (function () {
		function a(e, i) {
			(this.selector = i && zo(i)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = xf++),
				e && this.add(e);
		}
		var t = a.prototype;
		return (
			(t.add = function (i, n, r) {
				Kt(i) && ((r = n), (n = i), (i = Kt));
				var s = this,
					o = function () {
						var u = zt,
							f = s.selector,
							d;
						return (
							u && u !== s && u.data.push(s),
							r && (s.selector = zo(r)),
							(zt = s),
							(d = n.apply(s, arguments)),
							Kt(d) && s._r.push(d),
							(zt = u),
							(s.selector = f),
							(s.isReverted = !1),
							d
						);
					};
				return (
					(s.last = o),
					i === Kt
						? o(s, function (c) {
								return s.add(null, c);
							})
						: i
							? (s[i] = o)
							: o
				);
			}),
			(t.ignore = function (i) {
				var n = zt;
				(zt = null), i(this), (zt = n);
			}),
			(t.getTweens = function () {
				var i = [];
				return (
					this.data.forEach(function (n) {
						return n instanceof a
							? i.push.apply(i, n.getTweens())
							: n instanceof ne &&
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
				var r = this;
				if (
					(i
						? (function () {
								for (var o = r.getTweens(), c = r.data.length, u; c--; )
									(u = r.data[c]),
										u.data === "isFlip" &&
											(u.revert(),
											u.getChildren(!0, !0, !1).forEach(function (f) {
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
											return f.t.revert(i);
										}),
										c = r.data.length;
									c--;

								)
									(u = r.data[c]),
										u instanceof Re
											? u.data !== "nested" &&
												(u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
											: !(u instanceof ne) && u.revert && u.revert(i);
								r._r.forEach(function (f) {
									return f(i, r);
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
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			a
		);
	})(),
	wf = (function () {
		function a(e) {
			(this.contexts = []), (this.scope = e), zt && zt.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (i, n, r) {
				Ri(i) || (i = { matches: i });
				var s = new Pc(0, r || this.scope),
					o = (s.conditions = {}),
					c,
					u,
					f;
				zt && !s.selector && (s.selector = zt.selector),
					this.contexts.push(s),
					(n = s.add("onMatch", n)),
					(s.queries = i);
				for (u in i)
					u === "all"
						? (f = 1)
						: ((c = Oi.matchMedia(i[u])),
							c &&
								(Mn.indexOf(s) < 0 && Mn.push(s),
								(o[u] = c.matches) && (f = 1),
								c.addListener
									? c.addListener(qo)
									: c.addEventListener("change", qo)));
				return (
					f &&
						n(s, function (d) {
							return s.add(null, d);
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
			a
		);
	})(),
	Hs = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
				e[i] = arguments[i];
			e.forEach(function (n) {
				return pc(n);
			});
		},
		timeline: function (t) {
			return new Re(t);
		},
		getTweensOf: function (t, e) {
			return $t.getTweensOf(t, e);
		},
		getProperty: function (t, e, i, n) {
			he(t) && (t = di(t)[0]);
			var r = bn(t || {}).get,
				s = i ? ec : tc;
			return (
				i === "native" && (i = ""),
				t &&
					(e
						? s(((Je[e] && Je[e].get) || r)(t, e, i, n))
						: function (o, c, u) {
								return s(((Je[o] && Je[o].get) || r)(t, o, c, u));
							})
			);
		},
		quickSetter: function (t, e, i) {
			if (((t = di(t)), t.length > 1)) {
				var n = t.map(function (f) {
						return We.quickSetter(f, e, i);
					}),
					r = n.length;
				return function (f) {
					for (var d = r; d--; ) n[d](f);
				};
			}
			t = t[0] || {};
			var s = Je[e],
				o = bn(t),
				c = (o.harness && (o.harness.aliases || {})[e]) || e,
				u = s
					? function (f) {
							var d = new s();
							(jn._pt = 0),
								d.init(t, i ? f + i : f, jn, 0, [t]),
								d.render(1, d),
								jn._pt && ba(1, jn);
						}
					: o.set(t, c);
			return s
				? u
				: function (f) {
						return u(t, c, i ? f + i : f, o, 1);
					};
		},
		quickTo: function (t, e, i) {
			var n,
				r = We.to(
					t,
					En(((n = {}), (n[e] = "+=0.1"), (n.paused = !0), n), i || {}),
				),
				s = function (c, u, f) {
					return r.resetTo(e, c, u, f);
				};
			return (s.tween = r), s;
		},
		isTweening: function (t) {
			return $t.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = Sn(t.ease, rr.ease)), Va(rr, t || {});
		},
		config: function (t) {
			return Va(ri, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				i = t.effect,
				n = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(n || "").split(",").forEach(function (o) {
				return (
					o && !Je[o] && !si[o] && jr(e + " effect requires " + o + " plugin.")
				);
			}),
				(lo[e] = function (o, c, u) {
					return i(di(o), pi(c || {}, r), u);
				}),
				s &&
					(Re.prototype[e] = function (o, c, u) {
						return this.add(lo[e](o, Ri(c) ? c : (u = c) && {}, this), u);
					});
		},
		registerEase: function (t, e) {
			St[t] = Sn(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Sn(t, e) : St;
		},
		getById: function (t) {
			return $t.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var i = new Re(t),
				n,
				r;
			for (
				i.smoothChildTiming = qe(t.smoothChildTiming),
					$t.remove(i),
					i._dp = 0,
					i._time = i._tTime = $t._time,
					n = $t._first;
				n;

			)
				(r = n._next),
					(e ||
						!(
							!n._dur &&
							n instanceof ne &&
							n.vars.onComplete === n._targets[0]
						)) &&
						Pi(i, n, n._start - n._delay),
					(n = r);
			return Pi($t, i, 0), i;
		},
		context: function (t, e) {
			return t ? new Pc(t, e) : zt;
		},
		matchMedia: function (t) {
			return new wf(t);
		},
		matchMediaRefresh: function () {
			return (
				Mn.forEach(function (t) {
					var e = t.conditions,
						i,
						n;
					for (n in e) e[n] && ((e[n] = !1), (i = 1));
					i && t.revert();
				}) || qo()
			);
		},
		addEventListener: function (t, e) {
			var i = Cs[t] || (Cs[t] = []);
			~i.indexOf(e) || i.push(e);
		},
		removeEventListener: function (t, e) {
			var i = Cs[t],
				n = i && i.indexOf(e);
			n >= 0 && i.splice(n, 1);
		},
		utils: {
			wrap: Zu,
			wrapYoyo: Ju,
			distribute: lc,
			random: uc,
			snap: cc,
			normalize: Qu,
			getUnit: Me,
			clamp: ju,
			splitColor: gc,
			toArray: di,
			selector: zo,
			mapRange: dc,
			pipe: Gu,
			unitize: Ku,
			interpolate: tf,
			shuffle: ac,
		},
		install: Gl,
		effects: lo,
		ticker: ti,
		updateRoot: Re.updateRoot,
		plugins: Je,
		globalTimeline: $t,
		core: {
			PropTween: $e,
			globals: Kl,
			Tween: ne,
			Timeline: Re,
			Animation: Qr,
			getCache: bn,
			_removeLinkedListItem: eo,
			reverting: function () {
				return De;
			},
			context: function (t) {
				return t && zt && (zt.data.push(t), (t._ctx = zt)), zt;
			},
			suppressOverwrites: function (t) {
				return (ua = t);
			},
		},
	};
He("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return (Hs[a] = ne[a]);
});
ti.add(Re.updateRoot);
jn = Hs.to({}, { duration: 0 });
var bf = function (t, e) {
		for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
			i = i._next;
		return i;
	},
	Tf = function (t, e) {
		var i = t._targets,
			n,
			r,
			s;
		for (n in e)
			for (r = i.length; r--; )
				(s = t._ptLookup[r][n]),
					s &&
						(s = s.d) &&
						(s._pt && (s = bf(s, n)),
						s && s.modifier && s.modifier(e[n], t, i[r], n));
	},
	po = function (t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function (n, r, s) {
				s._onInit = function (o) {
					var c, u;
					if (
						(he(r) &&
							((c = {}),
							He(r, function (f) {
								return (c[f] = 1);
							}),
							(r = c)),
						e)
					) {
						c = {};
						for (u in r) c[u] = e(r[u]);
						r = c;
					}
					Tf(o, r);
				};
			},
		};
	},
	We =
		Hs.registerPlugin(
			{
				name: "attr",
				init: function (t, e, i, n, r) {
					var s, o, c;
					this.tween = i;
					for (s in e)
						(c = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(c || 0) + "",
								e[s],
								n,
								r,
								0,
								0,
								s,
							)),
							(o.op = s),
							(o.b = c),
							this._props.push(s);
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
			po("roundProps", Yo),
			po("modifiers"),
			po("snap", cc),
		) || Hs;
ne.version = Re.version = We.version = "3.12.5";
Ul = 1;
da() && ar();
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
 */ var Qa,
	Zi,
	Kn,
	Ta,
	xn,
	Za,
	Sa,
	Sf = function () {
		return typeof window < "u";
	},
	Wi = {},
	_n = 180 / Math.PI,
	Qn = Math.PI / 180,
	zn = Math.atan2,
	Ja = 1e8,
	Ma = /([A-Z])/g,
	Mf = /(left|right|width|margin|padding|x)/i,
	Df = /[\s,\(]\S/,
	Ei = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	Ho = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Of = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	Cf = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e,
		);
	},
	Pf = function (t, e) {
		var i = e.s + e.c * t;
		e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	kc = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	Ec = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	kf = function (t, e, i) {
		return (t.style[e] = i);
	},
	Ef = function (t, e, i) {
		return t.style.setProperty(e, i);
	},
	Af = function (t, e, i) {
		return (t._gsap[e] = i);
	},
	Lf = function (t, e, i) {
		return (t._gsap.scaleX = t._gsap.scaleY = i);
	},
	If = function (t, e, i, n, r) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = i), s.renderTransform(r, s);
	},
	Rf = function (t, e, i, n, r) {
		var s = t._gsap;
		(s[e] = i), s.renderTransform(r, s);
	},
	Vt = "transform",
	Ve = Vt + "Origin",
	Nf = function a(t, e) {
		var i = this,
			n = this.target,
			r = n.style,
			s = n._gsap;
		if (t in Wi && r) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = Ei[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (i.tfm[o] = Bi(n, o));
							})
						: (this.tfm[t] = s.x ? s[t] : Bi(n, t)),
					t === Ve && (this.tfm.zOrigin = s.zOrigin);
			else
				return Ei.transform.split(",").forEach(function (o) {
					return a.call(i, o, e);
				});
			if (this.props.indexOf(Vt) >= 0) return;
			s.svg &&
				((this.svgo = n.getAttribute("data-svg-origin")),
				this.props.push(Ve, e, "")),
				(t = Vt);
		}
		(r || e) && this.props.push(t, e, r[t]);
	},
	Ac = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Ff = function () {
		var t = this.props,
			e = this.target,
			i = e.style,
			n = e._gsap,
			r,
			s;
		for (r = 0; r < t.length; r += 3)
			t[r + 1]
				? (e[t[r]] = t[r + 2])
				: t[r + 2]
					? (i[t[r]] = t[r + 2])
					: i.removeProperty(
							t[r].substr(0, 2) === "--"
								? t[r]
								: t[r].replace(Ma, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) n[s] = this.tfm[s];
			n.svg &&
				(n.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(r = Sa()),
				(!r || !r.isStart) &&
					!i[Vt] &&
					(Ac(i),
					n.zOrigin &&
						i[Ve] &&
						((i[Ve] += " " + n.zOrigin + "px"),
						(n.zOrigin = 0),
						n.renderTransform()),
					(n.uncache = 1));
		}
	},
	Lc = function (t, e) {
		var i = { target: t, props: [], revert: Ff, save: Nf };
		return (
			t._gsap || We.core.getCache(t),
			e &&
				e.split(",").forEach(function (n) {
					return i.save(n);
				}),
			i
		);
	},
	Ic,
	$o = function (t, e) {
		var i = Zi.createElementNS
			? Zi.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Zi.createElement(t);
		return i && i.style ? i : Zi.createElement(t);
	},
	Li = function a(t, e, i) {
		var n = getComputedStyle(t);
		return (
			n[e] ||
			n.getPropertyValue(e.replace(Ma, "-$1").toLowerCase()) ||
			n.getPropertyValue(e) ||
			(!i && a(t, lr(e) || e, 1)) ||
			""
		);
	},
	tl = "O,Moz,ms,Ms,Webkit".split(","),
	lr = function (t, e, i) {
		var n = e || xn,
			r = n.style,
			s = 5;
		if (t in r && !i) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(tl[s] + t in r);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? tl[s] : "") + t;
	},
	Vo = function () {
		Sf() &&
			window.document &&
			((Qa = window),
			(Zi = Qa.document),
			(Kn = Zi.documentElement),
			(xn = $o("div") || { style: {} }),
			$o("div"),
			(Vt = lr(Vt)),
			(Ve = Vt + "Origin"),
			(xn.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Ic = !!lr("perspective")),
			(Sa = We.core.reverting),
			(Ta = 1));
	},
	go = function a(t) {
		var e = $o(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			i = this.parentNode,
			n = this.nextSibling,
			r = this.style.cssText,
			s;
		if (
			(Kn.appendChild(e),
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
			i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
			Kn.removeChild(e),
			(this.style.cssText = r),
			s
		);
	},
	el = function (t, e) {
		for (var i = e.length; i--; )
			if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
	},
	Rc = function (t) {
		var e;
		try {
			e = t.getBBox();
		} catch {
			e = go.call(t, !0);
		}
		return (
			(e && (e.width || e.height)) || t.getBBox === go || (e = go.call(t, !0)),
			e && !e.width && !e.x && !e.y
				? {
						x: +el(t, ["x", "cx", "x1"]) || 0,
						y: +el(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	Nc = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Rc(t));
	},
	An = function (t, e) {
		if (e) {
			var i = t.style,
				n;
			e in Wi && e !== Ve && (e = Vt),
				i.removeProperty
					? ((n = e.substr(0, 2)),
						(n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						i.removeProperty(
							n === "--" ? e : e.replace(Ma, "-$1").toLowerCase(),
						))
					: i.removeAttribute(e);
		}
	},
	Ji = function (t, e, i, n, r, s) {
		var o = new $e(t._pt, e, i, 0, 1, s ? Ec : kc);
		return (t._pt = o), (o.b = n), (o.e = r), t._props.push(i), o;
	},
	il = { deg: 1, rad: 1, turn: 1 },
	Bf = { grid: 1, flex: 1 },
	ln = function a(t, e, i, n) {
		var r = parseFloat(i) || 0,
			s = (i + "").trim().substr((r + "").length) || "px",
			o = xn.style,
			c = Mf.test(e),
			u = t.tagName.toLowerCase() === "svg",
			f = (u ? "client" : "offset") + (c ? "Width" : "Height"),
			d = 100,
			p = n === "px",
			l = n === "%",
			g,
			h,
			m,
			_;
		if (n === s || !r || il[n] || il[s]) return r;
		if (
			(s !== "px" && !p && (r = a(t, e, i, "px")),
			(_ = t.getCTM && Nc(t)),
			(l || s === "%") && (Wi[e] || ~e.indexOf("adius")))
		)
			return (
				(g = _ ? t.getBBox()[c ? "width" : "height"] : t[f]),
				Zt(l ? (r / g) * d : (r / 100) * g)
			);
		if (
			((o[c ? "width" : "height"] = d + (p ? s : n)),
			(h =
				~e.indexOf("adius") || (n === "em" && t.appendChild && !u)
					? t
					: t.parentNode),
			_ && (h = (t.ownerSVGElement || {}).parentNode),
			(!h || h === Zi || !h.appendChild) && (h = Zi.body),
			(m = h._gsap),
			m && l && m.width && c && m.time === ti.time && !m.uncache)
		)
			return Zt((r / m.width) * d);
		if (l && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = d + n), (g = t[f]), y ? (t.style[e] = y) : An(t, e);
		} else
			(l || s === "%") &&
				!Bf[Li(h, "display")] &&
				(o.position = Li(t, "position")),
				h === t && (o.position = "static"),
				h.appendChild(xn),
				(g = xn[f]),
				h.removeChild(xn),
				(o.position = "absolute");
		return (
			c && l && ((m = bn(h)), (m.time = ti.time), (m.width = h[f])),
			Zt(p ? (g * r) / d : g && r ? (d / g) * r : 0)
		);
	},
	Bi = function (t, e, i, n) {
		var r;
		return (
			Ta || Vo(),
			e in Ei &&
				e !== "transform" &&
				((e = Ei[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			Wi[e] && e !== "transform"
				? ((r = Jr(t, n)),
					(r =
						e !== "transformOrigin"
							? r[e]
							: r.svg
								? r.origin
								: Vs(Li(t, Ve)) + " " + r.zOrigin + "px"))
				: ((r = t.style[e]),
					(!r || r === "auto" || n || ~(r + "").indexOf("calc(")) &&
						(r =
							($s[e] && $s[e](t, e, i)) ||
							Li(t, e) ||
							Zl(t, e) ||
							(e === "opacity" ? 1 : 0))),
			i && !~(r + "").trim().indexOf(" ") ? ln(t, e, r, i) + i : r
		);
	},
	zf = function (t, e, i, n) {
		if (!i || i === "none") {
			var r = lr(e, t, 1),
				s = r && Li(t, r, 1);
			s && s !== i
				? ((e = r), (i = s))
				: e === "borderColor" && (i = Li(t, "borderTopColor"));
		}
		var o = new $e(this._pt, t.style, e, 0, 1, Oc),
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
			((o.b = i),
			(o.e = n),
			(i += ""),
			(n += ""),
			n === "auto" &&
				((h = t.style[e]),
				(t.style[e] = n),
				(n = Li(t, e) || n),
				h ? (t.style[e] = h) : An(t, e)),
			(f = [i, n]),
			mc(f),
			(i = f[0]),
			(n = f[1]),
			(p = i.match(Wn) || []),
			(b = n.match(Wn) || []),
			b.length)
		) {
			for (; (d = Wn.exec(n)); )
				(m = d[0]),
					(y = n.substring(c, d.index)),
					g
						? (g = (g + 1) % 5)
						: (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
					m !== (h = p[u++] || "") &&
						((l = parseFloat(h) || 0),
						(x = h.substr((l + "").length)),
						m.charAt(1) === "=" && (m = Gn(l, m) + x),
						(_ = parseFloat(m)),
						(S = m.substr((_ + "").length)),
						(c = Wn.lastIndex - S.length),
						S ||
							((S = S || ri.units[e] || x),
							c === n.length && ((n += S), (o.e += S))),
						x !== S && (l = ln(t, e, h, S) || 0),
						(o._pt = {
							_next: o._pt,
							p: y || u === 1 ? y : ",",
							s: l,
							c: _ - l,
							m: (g && g < 4) || e === "zIndex" ? Math.round : 0,
						}));
			o.c = c < n.length ? n.substring(c, n.length) : "";
		} else o.r = e === "display" && n === "none" ? Ec : kc;
		return Wl.test(n) && (o.e = 0), (this._pt = o), o;
	},
	nl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Yf = function (t) {
		var e = t.split(" "),
			i = e[0],
			n = e[1] || "50%";
		return (
			(i === "top" || i === "bottom" || n === "left" || n === "right") &&
				((t = i), (i = n), (n = t)),
			(e[0] = nl[i] || i),
			(e[1] = nl[n] || n),
			e.join(" ")
		);
	},
	Xf = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var i = e.t,
				n = i.style,
				r = e.u,
				s = i._gsap,
				o,
				c,
				u;
			if (r === "all" || r === !0) (n.cssText = ""), (c = 1);
			else
				for (r = r.split(","), u = r.length; --u > -1; )
					(o = r[u]),
						Wi[o] && ((c = 1), (o = o === "transformOrigin" ? Ve : Vt)),
						An(i, o);
			c &&
				(An(i, Vt),
				s &&
					(s.svg && i.removeAttribute("transform"),
					Jr(i, 1),
					(s.uncache = 1),
					Ac(n)));
		}
	},
	$s = {
		clearProps: function (t, e, i, n, r) {
			if (r.data !== "isFromStart") {
				var s = (t._pt = new $e(t._pt, e, i, 0, 0, Xf));
				return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
			}
		},
	},
	Zr = [1, 0, 0, 1, 0, 0],
	Fc = {},
	Bc = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	rl = function (t) {
		var e = Li(t, Vt);
		return Bc(e) ? Zr : e.substr(7).match(Vl).map(Zt);
	},
	Da = function (t, e) {
		var i = t._gsap || bn(t),
			n = t.style,
			r = rl(t),
			s,
			o,
			c,
			u;
		return i.svg && t.getAttribute("transform")
			? ((c = t.transform.baseVal.consolidate().matrix),
				(r = [c.a, c.b, c.c, c.d, c.e, c.f]),
				r.join(",") === "1,0,0,1,0,0" ? Zr : r)
			: (r === Zr &&
					!t.offsetParent &&
					t !== Kn &&
					!i.svg &&
					((c = n.display),
					(n.display = "block"),
					(s = t.parentNode),
					(!s || !t.offsetParent) &&
						((u = 1), (o = t.nextElementSibling), Kn.appendChild(t)),
					(r = rl(t)),
					c ? (n.display = c) : An(t, "display"),
					u &&
						(o
							? s.insertBefore(t, o)
							: s
								? s.appendChild(t)
								: Kn.removeChild(t))),
				e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
	},
	Wo = function (t, e, i, n, r, s) {
		var o = t._gsap,
			c = r || Da(t, !0),
			u = o.xOrigin || 0,
			f = o.yOrigin || 0,
			d = o.xOffset || 0,
			p = o.yOffset || 0,
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
			O,
			k;
		i
			? c !== Zr &&
				(M = l * m - g * h) &&
				((O = x * (m / M) + b * (-h / M) + (h * y - m * _) / M),
				(k = x * (-g / M) + b * (l / M) - (l * y - g * _) / M),
				(x = O),
				(b = k))
			: ((P = Rc(t)),
				(x = P.x + (~S[0].indexOf("%") ? (x / 100) * P.width : x)),
				(b = P.y + (~(S[1] || S[0]).indexOf("%") ? (b / 100) * P.height : b))),
			n || (n !== !1 && o.smooth)
				? ((_ = x - u),
					(y = b - f),
					(o.xOffset = d + (_ * l + y * h) - _),
					(o.yOffset = p + (_ * g + y * m) - y))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = x),
			(o.yOrigin = b),
			(o.smooth = !!n),
			(o.origin = e),
			(o.originIsAbsolute = !!i),
			(t.style[Ve] = "0px 0px"),
			s &&
				(Ji(s, o, "xOrigin", u, x),
				Ji(s, o, "yOrigin", f, b),
				Ji(s, o, "xOffset", d, o.xOffset),
				Ji(s, o, "yOffset", p, o.yOffset)),
			t.setAttribute("data-svg-origin", x + " " + b);
	},
	Jr = function (t, e) {
		var i = t._gsap || new wc(t);
		if ("x" in i && !e && !i.uncache) return i;
		var n = t.style,
			r = i.scaleX < 0,
			s = "px",
			o = "deg",
			c = getComputedStyle(t),
			u = Li(t, Ve) || "0",
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
			O,
			k,
			L,
			F,
			D,
			R,
			X,
			q,
			V,
			H,
			tt,
			pt,
			T,
			nt,
			ut,
			I,
			N,
			j;
		return (
			(f = d = p = h = m = _ = y = S = x = 0),
			(l = g = 1),
			(i.svg = !!(t.getCTM && Nc(t))),
			c.translate &&
				((c.translate !== "none" ||
					c.scale !== "none" ||
					c.rotate !== "none") &&
					(n[Vt] =
						(c.translate !== "none"
							? "translate3d(" +
								(c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
						(c.scale !== "none"
							? "scale(" + c.scale.split(" ").join(",") + ") "
							: "") +
						(c[Vt] !== "none" ? c[Vt] : "")),
				(n.scale = n.rotate = n.translate = "none")),
			(M = Da(t, i.svg)),
			i.svg &&
				(i.uncache
					? ((tt = t.getBBox()),
						(u = i.xOrigin - tt.x + "px " + (i.yOrigin - tt.y) + "px"),
						(H = ""))
					: (H = !e && t.getAttribute("data-svg-origin")),
				Wo(t, H || u, !!H || i.originIsAbsolute, i.smooth !== !1, M)),
			(b = i.xOrigin || 0),
			(P = i.yOrigin || 0),
			M !== Zr &&
				((F = M[0]),
				(D = M[1]),
				(R = M[2]),
				(X = M[3]),
				(f = q = M[4]),
				(d = V = M[5]),
				M.length === 6
					? ((l = Math.sqrt(F * F + D * D)),
						(g = Math.sqrt(X * X + R * R)),
						(h = F || D ? zn(D, F) * _n : 0),
						(y = R || X ? zn(R, X) * _n + h : 0),
						y && (g *= Math.abs(Math.cos(y * Qn))),
						i.svg && ((f -= b - (b * F + P * R)), (d -= P - (b * D + P * X))))
					: ((j = M[6]),
						(I = M[7]),
						(T = M[8]),
						(nt = M[9]),
						(ut = M[10]),
						(N = M[11]),
						(f = M[12]),
						(d = M[13]),
						(p = M[14]),
						(O = zn(j, ut)),
						(m = O * _n),
						O &&
							((k = Math.cos(-O)),
							(L = Math.sin(-O)),
							(H = q * k + T * L),
							(tt = V * k + nt * L),
							(pt = j * k + ut * L),
							(T = q * -L + T * k),
							(nt = V * -L + nt * k),
							(ut = j * -L + ut * k),
							(N = I * -L + N * k),
							(q = H),
							(V = tt),
							(j = pt)),
						(O = zn(-R, ut)),
						(_ = O * _n),
						O &&
							((k = Math.cos(-O)),
							(L = Math.sin(-O)),
							(H = F * k - T * L),
							(tt = D * k - nt * L),
							(pt = R * k - ut * L),
							(N = X * L + N * k),
							(F = H),
							(D = tt),
							(R = pt)),
						(O = zn(D, F)),
						(h = O * _n),
						O &&
							((k = Math.cos(O)),
							(L = Math.sin(O)),
							(H = F * k + D * L),
							(tt = q * k + V * L),
							(D = D * k - F * L),
							(V = V * k - q * L),
							(F = H),
							(q = tt)),
						m &&
							Math.abs(m) + Math.abs(h) > 359.9 &&
							((m = h = 0), (_ = 180 - _)),
						(l = Zt(Math.sqrt(F * F + D * D + R * R))),
						(g = Zt(Math.sqrt(V * V + j * j))),
						(O = zn(q, V)),
						(y = Math.abs(O) > 2e-4 ? O * _n : 0),
						(x = N ? 1 / (N < 0 ? -N : N) : 0)),
				i.svg &&
					((H = t.getAttribute("transform")),
					(i.forceCSS = t.setAttribute("transform", "") || !Bc(Li(t, Vt))),
					H && t.setAttribute("transform", H))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(r
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
				s),
			(i.y =
				d -
				((i.yPercent =
					d &&
					((!e && i.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (t.offsetHeight * i.yPercent) / 100
					: 0) +
				s),
			(i.z = p + s),
			(i.scaleX = Zt(l)),
			(i.scaleY = Zt(g)),
			(i.rotation = Zt(h) + o),
			(i.rotationX = Zt(m) + o),
			(i.rotationY = Zt(_) + o),
			(i.skewX = y + o),
			(i.skewY = S + o),
			(i.transformPerspective = x + s),
			(i.zOrigin = parseFloat(u.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
				(n[Ve] = Vs(u)),
			(i.xOffset = i.yOffset = 0),
			(i.force3D = ri.force3D),
			(i.renderTransform = i.svg ? Hf : Ic ? zc : qf),
			(i.uncache = 0),
			i
		);
	},
	Vs = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	_o = function (t, e, i) {
		var n = Me(e);
		return Zt(parseFloat(e) + parseFloat(ln(t, "x", i + "px", n))) + n;
	},
	qf = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			zc(t, e);
	},
	dn = "0deg",
	gr = "0px",
	hn = ") ",
	zc = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			r = i.yPercent,
			s = i.x,
			o = i.y,
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
		if (S && (d !== dn || f !== dn)) {
			var P = parseFloat(f) * Qn,
				M = Math.sin(P),
				O = Math.cos(P),
				k;
			(P = parseFloat(d) * Qn),
				(k = Math.cos(P)),
				(s = _o(y, s, M * k * -S)),
				(o = _o(y, o, -Math.sin(P) * -S)),
				(c = _o(y, c, O * k * -S + S));
		}
		m !== gr && (x += "perspective(" + m + hn),
			(n || r) && (x += "translate(" + n + "%, " + r + "%) "),
			(b || s !== gr || o !== gr || c !== gr) &&
				(x +=
					c !== gr || b
						? "translate3d(" + s + ", " + o + ", " + c + ") "
						: "translate(" + s + ", " + o + hn),
			u !== dn && (x += "rotate(" + u + hn),
			f !== dn && (x += "rotateY(" + f + hn),
			d !== dn && (x += "rotateX(" + d + hn),
			(p !== dn || l !== dn) && (x += "skew(" + p + ", " + l + hn),
			(g !== 1 || h !== 1) && (x += "scale(" + g + ", " + h + hn),
			(y.style[Vt] = x || "translate(0, 0)");
	},
	Hf = function (t, e) {
		var i = e || this,
			n = i.xPercent,
			r = i.yPercent,
			s = i.x,
			o = i.y,
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
			S = parseFloat(s),
			x = parseFloat(o),
			b,
			P,
			M,
			O,
			k;
		(c = parseFloat(c)),
			(u = parseFloat(u)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (u += f), (c += f)),
			c || u
				? ((c *= Qn),
					(u *= Qn),
					(b = Math.cos(c) * d),
					(P = Math.sin(c) * d),
					(M = Math.sin(c - u) * -p),
					(O = Math.cos(c - u) * p),
					u &&
						((f *= Qn),
						(k = Math.tan(u - f)),
						(k = Math.sqrt(1 + k * k)),
						(M *= k),
						(O *= k),
						f &&
							((k = Math.tan(f)),
							(k = Math.sqrt(1 + k * k)),
							(b *= k),
							(P *= k))),
					(b = Zt(b)),
					(P = Zt(P)),
					(M = Zt(M)),
					(O = Zt(O)))
				: ((b = d), (O = p), (P = M = 0)),
			((S && !~(s + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
				((S = ln(l, "x", s, "px")), (x = ln(l, "y", o, "px"))),
			(g || h || m || _) &&
				((S = Zt(S + g - (g * b + h * M) + m)),
				(x = Zt(x + h - (g * P + h * O) + _))),
			(n || r) &&
				((k = l.getBBox()),
				(S = Zt(S + (n / 100) * k.width)),
				(x = Zt(x + (r / 100) * k.height))),
			(k =
				"matrix(" + b + "," + P + "," + M + "," + O + "," + S + "," + x + ")"),
			l.setAttribute("transform", k),
			y && (l.style[Vt] = k);
	},
	$f = function (t, e, i, n, r) {
		var s = 360,
			o = he(r),
			c = parseFloat(r) * (o && ~r.indexOf("rad") ? _n : 1),
			u = c - n,
			f = n + u + "deg",
			d,
			p;
		return (
			o &&
				((d = r.split("_")[1]),
				d === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
				d === "cw" && u < 0
					? (u = ((u + s * Ja) % s) - ~~(u / s) * s)
					: d === "ccw" && u > 0 && (u = ((u - s * Ja) % s) - ~~(u / s) * s)),
			(t._pt = p = new $e(t._pt, e, i, n, u, Of)),
			(p.e = f),
			(p.u = "deg"),
			t._props.push(i),
			p
		);
	},
	sl = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	Vf = function (t, e, i) {
		var n = sl({}, i._gsap),
			r = "perspective,force3D,transformOrigin,svgOrigin",
			s = i.style,
			o,
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
				(s[Vt] = e),
				(o = Jr(i, 1)),
				An(i, Vt),
				i.setAttribute("transform", u))
			: ((u = getComputedStyle(i)[Vt]),
				(s[Vt] = e),
				(o = Jr(i, 1)),
				(s[Vt] = u));
		for (c in Wi)
			(u = n[c]),
				(f = o[c]),
				u !== f &&
					r.indexOf(c) < 0 &&
					((l = Me(u)),
					(g = Me(f)),
					(d = l !== g ? ln(i, c, u, g) : parseFloat(u)),
					(p = parseFloat(f)),
					(t._pt = new $e(t._pt, o, c, d, p - d, Ho)),
					(t._pt.u = g || 0),
					t._props.push(c));
		sl(o, n);
	};
He("padding,margin,Width,Radius", function (a, t) {
	var e = "Top",
		i = "Right",
		n = "Bottom",
		r = "Left",
		s = (t < 3 ? [e, i, n, r] : [e + r, e + i, n + i, n + r]).map(function (o) {
			return t < 2 ? a + o : "border" + o + a;
		});
	$s[t > 1 ? "border" + a : a] = function (o, c, u, f, d) {
		var p, l;
		if (arguments.length < 4)
			return (
				(p = s.map(function (g) {
					return Bi(o, g, u);
				})),
				(l = p.join(" ")),
				l.split(p[0]).length === 5 ? p[0] : l
			);
		(p = (f + "").split(" ")),
			(l = {}),
			s.forEach(function (g, h) {
				return (l[g] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
			}),
			o.init(c, l, d);
	};
});
var Yc = {
	name: "css",
	register: Vo,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, i, n, r) {
		var s = this._props,
			o = t.style,
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
			O;
		Ta || Vo(),
			(this.styles = this.styles || Lc(t)),
			(O = this.styles.props),
			(this.tween = i);
		for (h in e)
			if (h !== "autoRound" && ((f = e[h]), !(Je[h] && bc(h, e, i, n, t, r)))) {
				if (
					((l = typeof f),
					(g = $s[h]),
					l === "function" && ((f = f.call(i, n, t, r)), (l = typeof f)),
					l === "string" && ~f.indexOf("random(") && (f = Gr(f)),
					g)
				)
					g(this, t, h, f, i) && (M = 1);
				else if (h.substr(0, 2) === "--")
					(u = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
						(f += ""),
						(sn.lastIndex = 0),
						sn.test(u) || ((m = Me(u)), (_ = Me(f))),
						_ ? m !== _ && (u = ln(t, h, u, _) + _) : m && (f += m),
						this.add(o, "setProperty", u, f, n, r, 0, 0, h),
						s.push(h),
						O.push(h, 0, o[h]);
				else if (l !== "undefined") {
					if (
						(c && h in c
							? ((u = typeof c[h] == "function" ? c[h].call(i, n, t, r) : c[h]),
								he(u) && ~u.indexOf("random(") && (u = Gr(u)),
								Me(u + "") ||
									u === "auto" ||
									(u += ri.units[h] || Me(Bi(t, h)) || ""),
								(u + "").charAt(1) === "=" && (u = Bi(t, h)))
							: (u = Bi(t, h)),
						(p = parseFloat(u)),
						(y = l === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
						y && (f = f.substr(2)),
						(d = parseFloat(f)),
						h in Ei &&
							(h === "autoAlpha" &&
								(p === 1 && Bi(t, "visibility") === "hidden" && d && (p = 0),
								O.push("visibility", 0, o.visibility),
								Ji(
									this,
									o,
									"visibility",
									p ? "inherit" : "hidden",
									d ? "inherit" : "hidden",
									!d,
								)),
							h !== "scale" &&
								h !== "transform" &&
								((h = Ei[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
						(S = h in Wi),
						S)
					) {
						if (
							(this.styles.save(h),
							x ||
								((b = t._gsap),
								(b.renderTransform && !e.parseTransform) ||
									Jr(t, e.parseTransform),
								(P = e.smoothOrigin !== !1 && b.smooth),
								(x = this._pt =
									new $e(this._pt, o, Vt, 0, 1, b.renderTransform, b, 0, -1)),
								(x.dep = 1)),
							h === "scale")
						)
							(this._pt = new $e(
								this._pt,
								b,
								"scaleY",
								b.scaleY,
								(y ? Gn(b.scaleY, y + d) : d) - b.scaleY || 0,
								Ho,
							)),
								(this._pt.u = 0),
								s.push("scaleY", h),
								(h += "X");
						else if (h === "transformOrigin") {
							O.push(Ve, 0, o[Ve]),
								(f = Yf(f)),
								b.svg
									? Wo(t, f, 0, P, 0, this)
									: ((_ = parseFloat(f.split(" ")[2]) || 0),
										_ !== b.zOrigin && Ji(this, b, "zOrigin", b.zOrigin, _),
										Ji(this, o, h, Vs(u), Vs(f)));
							continue;
						} else if (h === "svgOrigin") {
							Wo(t, f, 1, P, 0, this);
							continue;
						} else if (h in Fc) {
							$f(this, b, h, p, y ? Gn(p, y + f) : f);
							continue;
						} else if (h === "smoothOrigin") {
							Ji(this, b, "smooth", b.smooth, f);
							continue;
						} else if (h === "force3D") {
							b[h] = f;
							continue;
						} else if (h === "transform") {
							Vf(this, f, t);
							continue;
						}
					} else h in o || (h = lr(h) || h);
					if (S || ((d || d === 0) && (p || p === 0) && !Df.test(f) && h in o))
						(m = (u + "").substr((p + "").length)),
							d || (d = 0),
							(_ = Me(f) || (h in ri.units ? ri.units[h] : m)),
							m !== _ && (p = ln(t, h, u, _)),
							(this._pt = new $e(
								this._pt,
								S ? b : o,
								h,
								p,
								(y ? Gn(p, y + d) : d) - p,
								!S && (_ === "px" || h === "zIndex") && e.autoRound !== !1
									? Pf
									: Ho,
							)),
							(this._pt.u = _ || 0),
							m !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = Cf));
					else if (h in o) zf.call(this, t, h, u, y ? y + f : f);
					else if (h in t) this.add(t, h, u || t[h], y ? y + f : f, n, r);
					else if (h !== "parseTransform") {
						pa(h, f);
						continue;
					}
					S || (h in o ? O.push(h, 0, o[h]) : O.push(h, 1, u || t[h])),
						s.push(h);
				}
			}
		M && Cc(this);
	},
	render: function (t, e) {
		if (e.tween._time || !Sa())
			for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
		else e.styles.revert();
	},
	get: Bi,
	aliases: Ei,
	getSetter: function (t, e, i) {
		var n = Ei[e];
		return (
			n && n.indexOf(",") < 0 && (e = n),
			e in Wi && e !== Ve && (t._gsap.x || Bi(t, "x"))
				? i && Za === i
					? e === "scale"
						? Lf
						: Af
					: (Za = i || {}) && (e === "scale" ? If : Rf)
				: t.style && !fa(t.style[e])
					? kf
					: ~e.indexOf("-")
						? Ef
						: wa(t, e)
		);
	},
	core: { _removeProperty: An, _getMatrix: Da },
};
We.utils.checkPrefix = lr;
We.core.getStyleSaver = Lc;
(function (a, t, e, i) {
	var n = He(a + "," + t + "," + e, function (r) {
		Wi[r] = 1;
	});
	He(t, function (r) {
		(ri.units[r] = "deg"), (Fc[r] = 1);
	}),
		(Ei[n[13]] = a + "," + t),
		He(i, function (r) {
			var s = r.split(":");
			Ei[s[1]] = n[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
He(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		ri.units[a] = "px";
	},
);
We.registerPlugin(Yc);
var Q = We.registerPlugin(Yc) || We;
Q.core.Tween;
function ol(a, t) {
	for (var e = 0; e < t.length; e++) {
		var i = t[e];
		(i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			"value" in i && (i.writable = !0),
			Object.defineProperty(a, i.key, i);
	}
}
function Wf(a, t, e) {
	return t && ol(a.prototype, t), e && ol(a, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ye,
	Ps,
	ei,
	tn,
	en,
	Zn,
	Xc,
	mn,
	Ir,
	qc,
	Xi,
	_i,
	Hc,
	$c = function () {
		return (
			ye ||
			(typeof window < "u" && (ye = window.gsap) && ye.registerPlugin && ye)
		);
	},
	Vc = 1,
	Un = [],
	vt = [],
	Ii = [],
	Rr = Date.now,
	jo = function (t, e) {
		return e;
	},
	jf = function () {
		var t = Ir.core,
			e = t.bridge || {},
			i = t._scrollers,
			n = t._proxies;
		i.push.apply(i, vt),
			n.push.apply(n, Ii),
			(vt = i),
			(Ii = n),
			(jo = function (s, o) {
				return e[s](o);
			});
	},
	on = function (t, e) {
		return ~Ii.indexOf(t) && Ii[Ii.indexOf(t) + 1][e];
	},
	Nr = function (t) {
		return !!~qc.indexOf(t);
	},
	ke = function (t, e, i, n, r) {
		return t.addEventListener(e, i, { passive: n !== !1, capture: !!r });
	},
	Pe = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	ds = "scrollLeft",
	hs = "scrollTop",
	Uo = function () {
		return (Xi && Xi.isPressed) || vt.cache++;
	},
	Ws = function (t, e) {
		var i = function n(r) {
			if (r || r === 0) {
				Vc && (ei.history.scrollRestoration = "manual");
				var s = Xi && Xi.isPressed;
				(r = n.v = Math.round(r) || (Xi && Xi.iOS ? 1 : 0)),
					t(r),
					(n.cacheID = vt.cache),
					s && jo("ss", r);
			} else
				(e || vt.cache !== n.cacheID || jo("ref")) &&
					((n.cacheID = vt.cache), (n.v = t()));
			return n.v + n.offset;
		};
		return (i.offset = 0), t && i;
	},
	Ne = {
		s: ds,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: Ws(function (a) {
			return arguments.length
				? ei.scrollTo(a, le.sc())
				: ei.pageXOffset || tn[ds] || en[ds] || Zn[ds] || 0;
		}),
	},
	le = {
		s: hs,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Ne,
		sc: Ws(function (a) {
			return arguments.length
				? ei.scrollTo(Ne.sc(), a)
				: ei.pageYOffset || tn[hs] || en[hs] || Zn[hs] || 0;
		}),
	},
	Xe = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || ye.utils.toArray)(t)[0] ||
			(typeof t == "string" && ye.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	cn = function (t, e) {
		var i = e.s,
			n = e.sc;
		Nr(t) && (t = tn.scrollingElement || en);
		var r = vt.indexOf(t),
			s = n === le.sc ? 1 : 2;
		!~r && (r = vt.push(t) - 1), vt[r + s] || ke(t, "scroll", Uo);
		var o = vt[r + s],
			c =
				o ||
				(vt[r + s] =
					Ws(on(t, i), !0) ||
					(Nr(t)
						? n
						: Ws(function (u) {
								return arguments.length ? (t[i] = u) : t[i];
							})));
		return (
			(c.target = t),
			o || (c.smooth = ye.getProperty(t, "scrollBehavior") === "smooth"),
			c
		);
	},
	Go = function (t, e, i) {
		var n = t,
			r = t,
			s = Rr(),
			o = s,
			c = e || 50,
			u = Math.max(500, c * 3),
			f = function (g, h) {
				var m = Rr();
				h || m - s > c
					? ((r = n), (n = g), (o = s), (s = m))
					: i
						? (n += g)
						: (n = r + ((g - r) / (m - o)) * (s - o));
			},
			d = function () {
				(r = n = i ? 0 : n), (o = s = 0);
			},
			p = function (g) {
				var h = o,
					m = r,
					_ = Rr();
				return (
					(g || g === 0) && g !== n && f(g),
					s === o || _ - o > u
						? 0
						: ((n + (i ? m : -m)) / ((i ? _ : s) - h)) * 1e3
				);
			};
		return { update: f, reset: d, getVelocity: p };
	},
	_r = function (t, e) {
		return (
			e && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	al = function (t) {
		var e = Math.max.apply(Math, t),
			i = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(i) ? e : i;
	},
	Wc = function () {
		(Ir = ye.core.globals().ScrollTrigger), Ir && Ir.core && jf();
	},
	jc = function (t) {
		return (
			(ye = t || $c()),
			!Ps &&
				ye &&
				typeof document < "u" &&
				document.body &&
				((ei = window),
				(tn = document),
				(en = tn.documentElement),
				(Zn = tn.body),
				(qc = [ei, tn, en, Zn]),
				ye.utils.clamp,
				(Hc = ye.core.context || function () {}),
				(mn = "onpointerenter" in Zn ? "pointer" : "mouse"),
				(Xc = Jt.isTouch =
					ei.matchMedia &&
					ei.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in ei ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(_i = Jt.eventTypes =
					(
						"ontouchstart" in en
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in en
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (Vc = 0);
				}, 500),
				Wc(),
				(Ps = 1)),
			Ps
		);
	};
Ne.op = le;
vt.cache = 0;
var Jt = (function () {
	function a(e) {
		this.init(e);
	}
	var t = a.prototype;
	return (
		(t.init = function (i) {
			Ps || jc(ye) || console.warn("Please gsap.registerPlugin(Observer)"),
				Ir || Wc();
			var n = i.tolerance,
				r = i.dragMinimum,
				s = i.type,
				o = i.target,
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
				O = i.onDown,
				k = i.onChangeX,
				L = i.onChangeY,
				F = i.onChange,
				D = i.onToggleX,
				R = i.onToggleY,
				X = i.onHover,
				q = i.onHoverEnd,
				V = i.onMove,
				H = i.ignoreCheck,
				tt = i.isNormalizer,
				pt = i.onGestureStart,
				T = i.onGestureEnd,
				nt = i.onWheel,
				ut = i.onEnable,
				I = i.onDisable,
				N = i.onClick,
				j = i.scrollSpeed,
				J = i.capture,
				U = i.allowClicks,
				G = i.lockAxis,
				lt = i.onLockAxis;
			(this.target = o = Xe(o) || en),
				(this.vars = i),
				l && (l = ye.utils.toArray(l)),
				(n = n || 1e-9),
				(r = r || 0),
				(g = g || 1),
				(j = j || 1),
				(s = s || "wheel,touch,pointer"),
				(u = u !== !1),
				c || (c = parseFloat(ei.getComputedStyle(Zn).lineHeight) || 22);
			var ft,
				et,
				W,
				Z,
				ot,
				st,
				kt,
				C = this,
				Mt = 0,
				Xt = 0,
				ce = i.passive || !f,
				Et = cn(o, Ne),
				Rt = cn(o, le),
				je = Et(),
				Be = Rt(),
				qt =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					_i[0] === "pointerdown",
				Wt = Nr(o),
				Ct = o.ownerDocument || tn,
				re = [0, 0, 0],
				jt = [0, 0, 0],
				pe = 0,
				gi = function () {
					return (pe = Rr());
				},
				At = function (E, z) {
					return (
						((C.event = E) && l && ~l.indexOf(E.target)) ||
						(z && qt && E.pointerType !== "touch") ||
						(H && H(E, z))
					);
				},
				Ti = function () {
					C._vx.reset(), C._vy.reset(), et.pause(), d && d(C);
				},
				Ue = function () {
					var E = (C.deltaX = al(re)),
						z = (C.deltaY = al(jt)),
						A = Math.abs(E) >= n,
						$ = Math.abs(z) >= n;
					F && (A || $) && F(C, E, z, re, jt),
						A &&
							(b && C.deltaX > 0 && b(C),
							P && C.deltaX < 0 && P(C),
							k && k(C),
							D && C.deltaX < 0 != Mt < 0 && D(C),
							(Mt = C.deltaX),
							(re[0] = re[1] = re[2] = 0)),
						$ &&
							(O && C.deltaY > 0 && O(C),
							M && C.deltaY < 0 && M(C),
							L && L(C),
							R && C.deltaY < 0 != Xt < 0 && R(C),
							(Xt = C.deltaY),
							(jt[0] = jt[1] = jt[2] = 0)),
						(Z || W) && (V && V(C), W && (y(C), (W = !1)), (Z = !1)),
						st && !(st = !1) && lt && lt(C),
						ot && (nt(C), (ot = !1)),
						(ft = 0);
				},
				Ge = function (E, z, A) {
					(re[A] += E),
						(jt[A] += z),
						C._vx.update(E),
						C._vy.update(z),
						u ? ft || (ft = requestAnimationFrame(Ue)) : Ue();
				},
				ze = function (E, z) {
					G &&
						!kt &&
						((C.axis = kt = Math.abs(E) > Math.abs(z) ? "x" : "y"), (st = !0)),
						kt !== "y" && ((re[2] += E), C._vx.update(E, !0)),
						kt !== "x" && ((jt[2] += z), C._vy.update(z, !0)),
						u ? ft || (ft = requestAnimationFrame(Ue)) : Ue();
				},
				Ke = function (E) {
					if (!At(E, 1)) {
						E = _r(E, f);
						var z = E.clientX,
							A = E.clientY,
							$ = z - C.x,
							B = A - C.y,
							K = C.isDragging;
						(C.x = z),
							(C.y = A),
							(K ||
								Math.abs(C.startX - z) >= r ||
								Math.abs(C.startY - A) >= r) &&
								(y && (W = !0),
								K || (C.isDragging = !0),
								ze($, B),
								K || (m && m(C)));
					}
				},
				Ce = (C.onPress = function (w) {
					At(w, 1) ||
						(w && w.button) ||
						((C.axis = kt = null),
						et.pause(),
						(C.isPressed = !0),
						(w = _r(w)),
						(Mt = Xt = 0),
						(C.startX = C.x = w.clientX),
						(C.startY = C.y = w.clientY),
						C._vx.reset(),
						C._vy.reset(),
						ke(tt ? o : Ct, _i[1], Ke, ce, !0),
						(C.deltaX = C.deltaY = 0),
						S && S(C));
				}),
				dt = (C.onRelease = function (w) {
					if (!At(w, 1)) {
						Pe(tt ? o : Ct, _i[1], Ke, !0);
						var E = !isNaN(C.y - C.startY),
							z = C.isDragging,
							A =
								z &&
								(Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
							$ = _r(w);
						!A &&
							E &&
							(C._vx.reset(),
							C._vy.reset(),
							f &&
								U &&
								ye.delayedCall(0.08, function () {
									if (Rr() - pe > 300 && !w.defaultPrevented) {
										if (w.target.click) w.target.click();
										else if (Ct.createEvent) {
											var B = Ct.createEvent("MouseEvents");
											B.initMouseEvent(
												"click",
												!0,
												!0,
												ei,
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
												w.target.dispatchEvent(B);
										}
									}
								})),
							(C.isDragging = C.isGesturing = C.isPressed = !1),
							d && z && !tt && et.restart(!0),
							_ && z && _(C),
							x && x(C, A);
					}
				}),
				ve = function (E) {
					return (
						E.touches &&
						E.touches.length > 1 &&
						(C.isGesturing = !0) &&
						pt(E, C.isDragging)
					);
				},
				Nt = function () {
					return (C.isGesturing = !1) || T(C);
				},
				xe = function (E) {
					if (!At(E)) {
						var z = Et(),
							A = Rt();
						Ge((z - je) * j, (A - Be) * j, 1),
							(je = z),
							(Be = A),
							d && et.restart(!0);
					}
				},
				Ye = function (E) {
					if (!At(E)) {
						(E = _r(E, f)), nt && (ot = !0);
						var z =
							(E.deltaMode === 1 ? c : E.deltaMode === 2 ? ei.innerHeight : 1) *
							g;
						Ge(E.deltaX * z, E.deltaY * z, 0), d && !tt && et.restart(!0);
					}
				},
				Si = function (E) {
					if (!At(E)) {
						var z = E.clientX,
							A = E.clientY,
							$ = z - C.x,
							B = A - C.y;
						(C.x = z),
							(C.y = A),
							(Z = !0),
							d && et.restart(!0),
							($ || B) && ze($, B);
					}
				},
				at = function (E) {
					(C.event = E), X(C);
				},
				v = function (E) {
					(C.event = E), q(C);
				},
				Y = function (E) {
					return At(E) || (_r(E, f) && N(C));
				};
			(et = C._dc = ye.delayedCall(p || 0.25, Ti).pause()),
				(C.deltaX = C.deltaY = 0),
				(C._vx = Go(0, 50, !0)),
				(C._vy = Go(0, 50, !0)),
				(C.scrollX = Et),
				(C.scrollY = Rt),
				(C.isDragging = C.isGesturing = C.isPressed = !1),
				Hc(this),
				(C.enable = function (w) {
					return (
						C.isEnabled ||
							(ke(Wt ? Ct : o, "scroll", Uo),
							s.indexOf("scroll") >= 0 && ke(Wt ? Ct : o, "scroll", xe, ce, J),
							s.indexOf("wheel") >= 0 && ke(o, "wheel", Ye, ce, J),
							((s.indexOf("touch") >= 0 && Xc) || s.indexOf("pointer") >= 0) &&
								(ke(o, _i[0], Ce, ce, J),
								ke(Ct, _i[2], dt),
								ke(Ct, _i[3], dt),
								U && ke(o, "click", gi, !0, !0),
								N && ke(o, "click", Y),
								pt && ke(Ct, "gesturestart", ve),
								T && ke(Ct, "gestureend", Nt),
								X && ke(o, mn + "enter", at),
								q && ke(o, mn + "leave", v),
								V && ke(o, mn + "move", Si)),
							(C.isEnabled = !0),
							w && w.type && Ce(w),
							ut && ut(C)),
						C
					);
				}),
				(C.disable = function () {
					C.isEnabled &&
						(Un.filter(function (w) {
							return w !== C && Nr(w.target);
						}).length || Pe(Wt ? Ct : o, "scroll", Uo),
						C.isPressed &&
							(C._vx.reset(), C._vy.reset(), Pe(tt ? o : Ct, _i[1], Ke, !0)),
						Pe(Wt ? Ct : o, "scroll", xe, J),
						Pe(o, "wheel", Ye, J),
						Pe(o, _i[0], Ce, J),
						Pe(Ct, _i[2], dt),
						Pe(Ct, _i[3], dt),
						Pe(o, "click", gi, !0),
						Pe(o, "click", Y),
						Pe(Ct, "gesturestart", ve),
						Pe(Ct, "gestureend", Nt),
						Pe(o, mn + "enter", at),
						Pe(o, mn + "leave", v),
						Pe(o, mn + "move", Si),
						(C.isEnabled = C.isPressed = C.isDragging = !1),
						I && I(C));
				}),
				(C.kill = C.revert =
					function () {
						C.disable();
						var w = Un.indexOf(C);
						w >= 0 && Un.splice(w, 1), Xi === C && (Xi = 0);
					}),
				Un.push(C),
				tt && Nr(o) && (Xi = C),
				C.enable(h);
		}),
		Wf(a, [
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
Jt.version = "3.12.5";
Jt.create = function (a) {
	return new Jt(a);
};
Jt.register = jc;
Jt.getAll = function () {
	return Un.slice();
};
Jt.getById = function (a) {
	return Un.filter(function (t) {
		return t.vars.id === a;
	})[0];
};
$c() && ye.registerPlugin(Jt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
	$n,
	bt,
	Ht,
	yi,
	Bt,
	Uc,
	js,
	ts,
	Fr,
	br,
	ps,
	Te,
	ro,
	Ko,
	Le,
	ll,
	cl,
	Vn,
	Gc,
	mo,
	Kc,
	Ee,
	Qo,
	Qc,
	Zc,
	Gi,
	Zo,
	Oa,
	Jn,
	Ca,
	Us,
	Jo,
	yo,
	gs = 1,
	Se = Date.now,
	vo = Se(),
	hi = 0,
	Tr = 0,
	ul = function (t, e, i) {
		var n = Ze(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (i["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
	},
	fl = function (t, e) {
		return e && (!Ze(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	Uf = function a() {
		return Tr && requestAnimationFrame(a);
	},
	dl = function () {
		return (ro = 1);
	},
	hl = function () {
		return (ro = 0);
	},
	Ci = function (t) {
		return t;
	},
	Sr = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Jc = function () {
		return typeof window < "u";
	},
	tu = function () {
		return it || (Jc() && (it = window.gsap) && it.registerPlugin && it);
	},
	Ln = function (t) {
		return !!~Uc.indexOf(t);
	},
	eu = function (t) {
		return (
			(t === "Height" ? Ca : bt["inner" + t]) ||
			yi["client" + t] ||
			Bt["client" + t]
		);
	},
	iu = function (t) {
		return (
			on(t, "getBoundingClientRect") ||
			(Ln(t)
				? function () {
						return (Is.width = bt.innerWidth), (Is.height = Ca), Is;
					}
				: function () {
						return Yi(t);
					})
		);
	},
	Gf = function (t, e, i) {
		var n = i.d,
			r = i.d2,
			s = i.a;
		return (s = on(t, "getBoundingClientRect"))
			? function () {
					return s()[n];
				}
			: function () {
					return (e ? eu(r) : t["client" + r]) || 0;
				};
	},
	Kf = function (t, e) {
		return !e || ~Ii.indexOf(t)
			? iu(t)
			: function () {
					return Is;
				};
	},
	Ai = function (t, e) {
		var i = e.s,
			n = e.d2,
			r = e.d,
			s = e.a;
		return Math.max(
			0,
			(i = "scroll" + n) && (s = on(t, i))
				? s() - iu(t)()[r]
				: Ln(t)
					? (yi[i] || Bt[i]) - eu(n)
					: t[i] - t["offset" + n],
		);
	},
	_s = function (t, e) {
		for (var i = 0; i < Vn.length; i += 3)
			(!e || ~e.indexOf(Vn[i + 1])) && t(Vn[i], Vn[i + 1], Vn[i + 2]);
	},
	Ze = function (t) {
		return typeof t == "string";
	},
	Fe = function (t) {
		return typeof t == "function";
	},
	Mr = function (t) {
		return typeof t == "number";
	},
	yn = function (t) {
		return typeof t == "object";
	},
	mr = function (t, e, i) {
		return t && t.progress(e ? 0 : 1) && i && t.pause();
	},
	xo = function (t, e) {
		if (t.enabled) {
			var i = t._ctx
				? t._ctx.add(function () {
						return e(t);
					})
				: e(t);
			i && i.totalTime && (t.callbackAnimation = i);
		}
	},
	Yn = Math.abs,
	nu = "left",
	ru = "top",
	Pa = "right",
	ka = "bottom",
	Dn = "width",
	On = "height",
	Br = "Right",
	zr = "Left",
	Yr = "Top",
	Xr = "Bottom",
	ie = "padding",
	ci = "margin",
	cr = "Width",
	Ea = "Height",
	oe = "px",
	ui = function (t) {
		return bt.getComputedStyle(t);
	},
	Qf = function (t) {
		var e = ui(t).position;
		t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
	},
	pl = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Yi = function (t, e) {
		var i =
				e &&
				ui(t)[Ko] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
	Gs = function (t, e) {
		var i = e.d2;
		return t["offset" + i] || t["client" + i] || 0;
	},
	su = function (t) {
		var e = [],
			i = t.labels,
			n = t.duration(),
			r;
		for (r in i) e.push(i[r] / n);
		return e;
	},
	Zf = function (t) {
		return function (e) {
			return it.utils.snap(su(t), e);
		};
	},
	Aa = function (t) {
		var e = it.utils.snap(t),
			i =
				Array.isArray(t) &&
				t.slice(0).sort(function (n, r) {
					return n - r;
				});
		return i
			? function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o;
					if (!r) return e(n);
					if (r > 0) {
						for (n -= s, o = 0; o < i.length; o++) if (i[o] >= n) return i[o];
						return i[o - 1];
					} else for (o = i.length, n += s; o--; ) if (i[o] <= n) return i[o];
					return i[0];
				}
			: function (n, r, s) {
					s === void 0 && (s = 0.001);
					var o = e(n);
					return !r || Math.abs(o - n) < s || o - n < 0 == r < 0
						? o
						: e(r < 0 ? n - t : n + t);
				};
	},
	Jf = function (t) {
		return function (e, i) {
			return Aa(su(t))(e, i.direction);
		};
	},
	ms = function (t, e, i, n) {
		return i.split(",").forEach(function (r) {
			return t(e, r, n);
		});
	},
	fe = function (t, e, i, n, r) {
		return t.addEventListener(e, i, { passive: !n, capture: !!r });
	},
	ue = function (t, e, i, n) {
		return t.removeEventListener(e, i, !!n);
	},
	ys = function (t, e, i) {
		(i = i && i.wheelHandler), i && (t(e, "wheel", i), t(e, "touchmove", i));
	},
	gl = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	vs = { toggleActions: "play", anticipatePin: 0 },
	Ks = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	ks = function (t, e) {
		if (Ze(t)) {
			var i = t.indexOf("="),
				n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
			~i && (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))),
				(t =
					n +
					(t in Ks
						? Ks[t] * e
						: ~t.indexOf("%")
							? (parseFloat(t) * e) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	xs = function (t, e, i, n, r, s, o, c) {
		var u = r.startColor,
			f = r.endColor,
			d = r.fontSize,
			p = r.indent,
			l = r.fontWeight,
			g = Ht.createElement("div"),
			h = Ln(i) || on(i, "pinType") === "fixed",
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
				(x += (n === le ? Pa : ka) + ":" + (s + parseFloat(p)) + "px;"),
			o &&
				(x +=
					"box-sizing:border-box;text-align:left;width:" +
					o.offsetWidth +
					"px;"),
			(g._isStart = y),
			g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
			(g.style.cssText = x),
			(g.innerText = e || e === 0 ? t + "-" + e : t),
			_.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
			(g._offset = g["offset" + n.op.d2]),
			Es(g, 0, n, y),
			g
		);
	},
	Es = function (t, e, i, n) {
		var r = { display: "block" },
			s = i[n ? "os2" : "p2"],
			o = i[n ? "p2" : "os2"];
		(t._isFlipped = n),
			(r[i.a + "Percent"] = n ? -100 : 0),
			(r[i.a] = n ? "1px" : 0),
			(r["border" + s + cr] = 1),
			(r["border" + o + cr] = 0),
			(r[i.p] = e + "px"),
			it.set(t, r);
	},
	mt = [],
	ta = {},
	es,
	_l = function () {
		return Se() - hi > 34 && (es || (es = requestAnimationFrame($i)));
	},
	Xn = function () {
		(!Ee || !Ee.isPressed || Ee.startX > Bt.clientWidth) &&
			(vt.cache++,
			Ee ? es || (es = requestAnimationFrame($i)) : $i(),
			hi || Rn("scrollStart"),
			(hi = Se()));
	},
	wo = function () {
		(Zc = bt.innerWidth), (Qc = bt.innerHeight);
	},
	Dr = function () {
		vt.cache++,
			!Te &&
				!Kc &&
				!Ht.fullscreenElement &&
				!Ht.webkitFullscreenElement &&
				(!Qo ||
					Zc !== bt.innerWidth ||
					Math.abs(bt.innerHeight - Qc) > bt.innerHeight * 0.25) &&
				js.restart(!0);
	},
	In = {},
	td = [],
	ou = function a() {
		return ue(_t, "scrollEnd", a) || wn(!0);
	},
	Rn = function (t) {
		return (
			(In[t] &&
				In[t].map(function (e) {
					return e();
				})) ||
			td
		);
	},
	Qe = [],
	au = function (t) {
		for (var e = 0; e < Qe.length; e += 5)
			(!t || (Qe[e + 4] && Qe[e + 4].query === t)) &&
				((Qe[e].style.cssText = Qe[e + 1]),
				Qe[e].getBBox && Qe[e].setAttribute("transform", Qe[e + 2] || ""),
				(Qe[e + 3].uncache = 1));
	},
	La = function (t, e) {
		var i;
		for (Le = 0; Le < mt.length; Le++)
			(i = mt[Le]),
				i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
		(Us = !0), e && au(e), e || Rn("revert");
	},
	lu = function (t, e) {
		vt.cache++,
			(e || !Ie) &&
				vt.forEach(function (i) {
					return Fe(i) && i.cacheID++ && (i.rec = 0);
				}),
			Ze(t) && (bt.history.scrollRestoration = Oa = t);
	},
	Ie,
	Cn = 0,
	ml,
	ed = function () {
		if (ml !== Cn) {
			var t = (ml = Cn);
			requestAnimationFrame(function () {
				return t === Cn && wn(!0);
			});
		}
	},
	cu = function () {
		Bt.appendChild(Jn),
			(Ca = (!Ee && Jn.offsetHeight) || bt.innerHeight),
			Bt.removeChild(Jn);
	},
	yl = function (t) {
		return ts(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	wn = function (t, e) {
		if (hi && !t && !Us) {
			fe(_t, "scrollEnd", ou);
			return;
		}
		cu(),
			(Ie = _t.isRefreshing = !0),
			vt.forEach(function (n) {
				return Fe(n) && ++n.cacheID && (n.rec = n());
			});
		var i = Rn("refreshInit");
		Gc && _t.sort(),
			e || La(),
			vt.forEach(function (n) {
				Fe(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
			}),
			mt.slice(0).forEach(function (n) {
				return n.refresh();
			}),
			(Us = !1),
			mt.forEach(function (n) {
				if (n._subPinOffset && n.pin) {
					var r = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
						s = n.pin[r];
					n.revert(!0, 1), n.adjustPinSpacing(n.pin[r] - s), n.refresh();
				}
			}),
			(Jo = 1),
			yl(!0),
			mt.forEach(function (n) {
				var r = Ai(n.scroller, n._dir),
					s = n.vars.end === "max" || (n._endClamp && n.end > r),
					o = n._startClamp && n.start >= r;
				(s || o) &&
					n.setPositions(
						o ? r - 1 : n.start,
						s ? Math.max(o ? r : n.start + 1, r) : n.end,
						!0,
					);
			}),
			yl(!1),
			(Jo = 0),
			i.forEach(function (n) {
				return n && n.render && n.render(-1);
			}),
			vt.forEach(function (n) {
				Fe(n) &&
					(n.smooth &&
						requestAnimationFrame(function () {
							return (n.target.style.scrollBehavior = "smooth");
						}),
					n.rec && n(n.rec));
			}),
			lu(Oa, 1),
			js.pause(),
			Cn++,
			(Ie = 2),
			$i(2),
			mt.forEach(function (n) {
				return Fe(n.vars.onRefresh) && n.vars.onRefresh(n);
			}),
			(Ie = _t.isRefreshing = !1),
			Rn("refresh");
	},
	ea = 0,
	As = 1,
	qr,
	$i = function (t) {
		if (t === 2 || (!Ie && !Us)) {
			(_t.isUpdating = !0), qr && qr.update(0);
			var e = mt.length,
				i = Se(),
				n = i - vo >= 50,
				r = e && mt[0].scroll();
			if (
				((As = ea > r ? -1 : 1),
				Ie || (ea = r),
				n &&
					(hi && !ro && i - hi > 200 && ((hi = 0), Rn("scrollEnd")),
					(br = vo),
					(vo = i)),
				As < 0)
			) {
				for (Le = e; Le-- > 0; ) mt[Le] && mt[Le].update(0, n);
				As = 1;
			} else for (Le = 0; Le < e; Le++) mt[Le] && mt[Le].update(0, n);
			_t.isUpdating = !1;
		}
		es = 0;
	},
	ia = [
		nu,
		ru,
		ka,
		Pa,
		ci + Xr,
		ci + Br,
		ci + Yr,
		ci + zr,
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
	Ls = ia.concat([
		Dn,
		On,
		"boxSizing",
		"max" + cr,
		"max" + Ea,
		"position",
		ci,
		ie,
		ie + Yr,
		ie + Br,
		ie + Xr,
		ie + zr,
	]),
	id = function (t, e, i) {
		tr(i);
		var n = t._gsap;
		if (n.spacerIsNative) tr(n.spacerState);
		else if (t._gsap.swappedIn) {
			var r = e.parentNode;
			r && (r.insertBefore(t, e), r.removeChild(e));
		}
		t._gsap.swappedIn = !1;
	},
	bo = function (t, e, i, n) {
		if (!t._gsap.swappedIn) {
			for (var r = ia.length, s = e.style, o = t.style, c; r--; )
				(c = ia[r]), (s[c] = i[c]);
			(s.position = i.position === "absolute" ? "absolute" : "relative"),
				i.display === "inline" && (s.display = "inline-block"),
				(o[ka] = o[Pa] = "auto"),
				(s.flexBasis = i.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[Dn] = Gs(t, Ne) + oe),
				(s[On] = Gs(t, le) + oe),
				(s[ie] = o[ci] = o[ru] = o[nu] = "0"),
				tr(n),
				(o[Dn] = o["max" + cr] = i[Dn]),
				(o[On] = o["max" + Ea] = i[On]),
				(o[ie] = i[ie]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	nd = /([A-Z])/g,
	tr = function (t) {
		if (t) {
			var e = t.t.style,
				i = t.length,
				n = 0,
				r,
				s;
			for ((t.t._gsap || it.core.getCache(t.t)).uncache = 1; n < i; n += 2)
				(s = t[n + 1]),
					(r = t[n]),
					s
						? (e[r] = s)
						: e[r] && e.removeProperty(r.replace(nd, "-$1").toLowerCase());
		}
	},
	ws = function (t) {
		for (var e = Ls.length, i = t.style, n = [], r = 0; r < e; r++)
			n.push(Ls[r], i[Ls[r]]);
		return (n.t = t), n;
	},
	rd = function (t, e, i) {
		for (var n = [], r = t.length, s = i ? 8 : 0, o; s < r; s += 2)
			(o = t[s]), n.push(o, o in e ? e[o] : t[s + 1]);
		return (n.t = t.t), n;
	},
	Is = { left: 0, top: 0 },
	vl = function (t, e, i, n, r, s, o, c, u, f, d, p, l, g) {
		Fe(t) && (t = t(c)),
			Ze(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? ks("0" + t.substr(3), i) : 0));
		var h = l ? l.time() : 0,
			m,
			_,
			y;
		if ((l && l.seek(0), isNaN(t) || (t = +t), Mr(t)))
			l &&
				(t = it.utils.mapRange(
					l.scrollTrigger.start,
					l.scrollTrigger.end,
					0,
					p,
					t,
				)),
				o && Es(o, i, n, !0);
		else {
			Fe(e) && (e = e(c));
			var S = (t || "0").split(" "),
				x,
				b,
				P,
				M;
			(y = Xe(e, c) || Bt),
				(x = Yi(y) || {}),
				(!x || (!x.left && !x.top)) &&
					ui(y).display === "none" &&
					((M = y.style.display),
					(y.style.display = "block"),
					(x = Yi(y)),
					M ? (y.style.display = M) : y.style.removeProperty("display")),
				(b = ks(S[0], x[n.d])),
				(P = ks(S[1] || "0", i)),
				(t = x[n.p] - u[n.p] - f + b + r - P),
				o && Es(o, P, n, i - P < 20 || (o._isStart && P > 20)),
				(i -= i - P);
		}
		if ((g && ((c[g] = t || -0.001), t < 0 && (t = 0)), s)) {
			var O = t + i,
				k = s._isStart;
			(m = "scroll" + n.d2),
				Es(
					s,
					O,
					n,
					(k && O > 20) ||
						(!k && (d ? Math.max(Bt[m], yi[m]) : s.parentNode[m]) <= O + 1),
				),
				d &&
					((u = Yi(o)),
					d && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + oe));
		}
		return (
			l &&
				y &&
				((m = Yi(y)),
				l.seek(p),
				(_ = Yi(y)),
				(l._caScrollDist = m[n.p] - _[n.p]),
				(t = (t / l._caScrollDist) * p)),
			l && l.seek(h),
			l ? t : Math.round(t)
		);
	},
	sd = /(webkit|moz|length|cssText|inset)/i,
	xl = function (t, e, i, n) {
		if (t.parentNode !== e) {
			var r = t.style,
				s,
				o;
			if (e === Bt) {
				(t._stOrig = r.cssText), (o = ui(t));
				for (s in o)
					!+s &&
						!sd.test(s) &&
						o[s] &&
						typeof r[s] == "string" &&
						s !== "0" &&
						(r[s] = o[s]);
				(r.top = i), (r.left = n);
			} else r.cssText = t._stOrig;
			(it.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	uu = function (t, e, i) {
		var n = e,
			r = n;
		return function (s) {
			var o = Math.round(t());
			return (
				o !== n &&
					o !== r &&
					Math.abs(o - n) > 3 &&
					Math.abs(o - r) > 3 &&
					((s = o), i && i()),
				(r = n),
				(n = s),
				s
			);
		};
	},
	bs = function (t, e, i) {
		var n = {};
		(n[e.p] = "+=" + i), it.set(t, n);
	},
	wl = function (t, e) {
		var i = cn(t, e),
			n = "_scroll" + e.p2,
			r = function s(o, c, u, f, d) {
				var p = s.tween,
					l = c.onComplete,
					g = {};
				u = u || i();
				var h = uu(i, u, function () {
					p.kill(), (s.tween = 0);
				});
				return (
					(d = (f && d) || 0),
					(f = f || o - u),
					p && p.kill(),
					(c[n] = o),
					(c.inherit = !1),
					(c.modifiers = g),
					(g[n] = function () {
						return h(u + f * p.ratio + d * p.ratio * p.ratio);
					}),
					(c.onUpdate = function () {
						vt.cache++, s.tween && $i();
					}),
					(c.onComplete = function () {
						(s.tween = 0), l && l.call(p);
					}),
					(p = s.tween = it.to(t, c)),
					p
				);
			};
		return (
			(t[n] = i),
			(i.wheelHandler = function () {
				return r.tween && r.tween.kill() && (r.tween = 0);
			}),
			fe(t, "wheel", i.wheelHandler),
			_t.isTouch && fe(t, "touchmove", i.wheelHandler),
			r
		);
	},
	_t = (function () {
		function a(e, i) {
			$n ||
				a.register(it) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				Zo(this),
				this.init(e, i);
		}
		var t = a.prototype;
		return (
			(t.init = function (i, n) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Tr)
				) {
					this.update = this.refresh = this.kill = Ci;
					return;
				}
				i = pl(Ze(i) || Mr(i) || i.nodeType ? { trigger: i } : i, vs);
				var r = i,
					s = r.onUpdate,
					o = r.toggleClass,
					c = r.id,
					u = r.onToggle,
					f = r.onRefresh,
					d = r.scrub,
					p = r.trigger,
					l = r.pin,
					g = r.pinSpacing,
					h = r.invalidateOnRefresh,
					m = r.anticipatePin,
					_ = r.onScrubComplete,
					y = r.onSnapComplete,
					S = r.once,
					x = r.snap,
					b = r.pinReparent,
					P = r.pinSpacer,
					M = r.containerAnimation,
					O = r.fastScrollEnd,
					k = r.preventOverlaps,
					L =
						i.horizontal || (i.containerAnimation && i.horizontal !== !1)
							? Ne
							: le,
					F = !d && d !== 0,
					D = Xe(i.scroller || bt),
					R = it.core.getCache(D),
					X = Ln(D),
					q =
						("pinType" in i
							? i.pinType
							: on(D, "pinType") || (X && "fixed")) === "fixed",
					V = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
					H = F && i.toggleActions.split(" "),
					tt = "markers" in i ? i.markers : vs.markers,
					pt = X ? 0 : parseFloat(ui(D)["border" + L.p2 + cr]) || 0,
					T = this,
					nt =
						i.onRefreshInit &&
						function () {
							return i.onRefreshInit(T);
						},
					ut = Gf(D, X, L),
					I = Kf(D, X),
					N = 0,
					j = 0,
					J = 0,
					U = cn(D, L),
					G,
					lt,
					ft,
					et,
					W,
					Z,
					ot,
					st,
					kt,
					C,
					Mt,
					Xt,
					ce,
					Et,
					Rt,
					je,
					Be,
					qt,
					Wt,
					Ct,
					re,
					jt,
					pe,
					gi,
					At,
					Ti,
					Ue,
					Ge,
					ze,
					Ke,
					Ce,
					dt,
					ve,
					Nt,
					xe,
					Ye,
					Si,
					at,
					v;
				if (
					((T._startClamp = T._endClamp = !1),
					(T._dir = L),
					(m *= 45),
					(T.scroller = D),
					(T.scroll = M ? M.time.bind(M) : U),
					(et = U()),
					(T.vars = i),
					(n = n || i.animation),
					"refreshPriority" in i &&
						((Gc = 1), i.refreshPriority === -9999 && (qr = T)),
					(R.tweenScroll = R.tweenScroll || {
						top: wl(D, le),
						left: wl(D, Ne),
					}),
					(T.tweenTo = G = R.tweenScroll[L.p]),
					(T.scrubDuration = function (A) {
						(ve = Mr(A) && A),
							ve
								? dt
									? dt.duration(A)
									: (dt = it.to(n, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: ve,
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
						(Ke = 0),
						c || (c = n.vars.id)),
					x &&
						((!yn(x) || x.push) && (x = { snapTo: x }),
						"scrollBehavior" in Bt.style &&
							it.set(X ? [Bt, yi] : D, { scrollBehavior: "auto" }),
						vt.forEach(function (A) {
							return (
								Fe(A) &&
								A.target === (X ? Ht.scrollingElement || yi : D) &&
								(A.smooth = !1)
							);
						}),
						(ft = Fe(x.snapTo)
							? x.snapTo
							: x.snapTo === "labels"
								? Zf(n)
								: x.snapTo === "labelsDirectional"
									? Jf(n)
									: x.directional !== !1
										? function (A, $) {
												return Aa(x.snapTo)(
													A,
													Se() - j < 500 ? 0 : $.direction,
												);
											}
										: it.utils.snap(x.snapTo)),
						(Nt = x.duration || { min: 0.1, max: 2 }),
						(Nt = yn(Nt) ? Fr(Nt.min, Nt.max) : Fr(Nt, Nt)),
						(xe = it
							.delayedCall(x.delay || ve / 2 || 0.1, function () {
								var A = U(),
									$ = Se() - j < 500,
									B = G.tween;
								if (
									($ || Math.abs(T.getVelocity()) < 10) &&
									!B &&
									!ro &&
									N !== A
								) {
									var K = (A - Z) / Et,
										ct = n && !F ? n.totalProgress() : K,
										rt = $ ? 0 : ((ct - Ce) / (Se() - br)) * 1e3 || 0,
										gt = it.utils.clamp(-K, 1 - K, (Yn(rt / 2) * rt) / 0.185),
										Dt = K + (x.inertia === !1 ? 0 : gt),
										Ot,
										yt,
										xt = x,
										Pt = xt.onStart,
										ht = xt.onInterrupt,
										ge = xt.onComplete;
									if (
										((Ot = ft(Dt, T)),
										Mr(Ot) || (Ot = Dt),
										(yt = Math.round(Z + Ot * Et)),
										A <= ot && A >= Z && yt !== A)
									) {
										if (B && !B._initted && B.data <= Yn(yt - A)) return;
										x.inertia === !1 && (gt = Ot - K),
											G(
												yt,
												{
													duration: Nt(
														Yn(
															(Math.max(Yn(Dt - ct), Yn(Ot - ct)) * 0.185) /
																rt /
																0.05 || 0,
														),
													),
													ease: x.ease || "power3",
													data: Yn(yt - A),
													onInterrupt: function () {
														return xe.restart(!0) && ht && ht(T);
													},
													onComplete: function () {
														T.update(),
															(N = U()),
															n &&
																(dt
																	? dt.resetTo(
																			"totalProgress",
																			Ot,
																			n._tTime / n._tDur,
																		)
																	: n.progress(Ot)),
															(Ke = Ce =
																n && !F ? n.totalProgress() : T.progress),
															y && y(T),
															ge && ge(T);
													},
												},
												A,
												gt * Et,
												yt - A - gt * Et,
											),
											Pt && Pt(T, G.tween);
									}
								} else T.isActive && N !== A && xe.restart(!0);
							})
							.pause())),
					c && (ta[c] = T),
					(p = T.trigger = Xe(p || (l !== !0 && l))),
					(v = p && p._gsap && p._gsap.stRevert),
					v && (v = v(T)),
					(l = l === !0 ? p : Xe(l)),
					Ze(o) && (o = { targets: p, className: o }),
					l &&
						(g === !1 ||
							g === ci ||
							(g =
								!g &&
								l.parentNode &&
								l.parentNode.style &&
								ui(l.parentNode).display === "flex"
									? !1
									: ie),
						(T.pin = l),
						(lt = it.core.getCache(l)),
						lt.spacer
							? (Rt = lt.pinState)
							: (P &&
									((P = Xe(P)),
									P && !P.nodeType && (P = P.current || P.nativeElement),
									(lt.spacerIsNative = !!P),
									P && (lt.spacerState = ws(P))),
								(lt.spacer = qt = P || Ht.createElement("div")),
								qt.classList.add("pin-spacer"),
								c && qt.classList.add("pin-spacer-" + c),
								(lt.pinState = Rt = ws(l))),
						i.force3D !== !1 && it.set(l, { force3D: !0 }),
						(T.spacer = qt = lt.spacer),
						(ze = ui(l)),
						(gi = ze[g + L.os2]),
						(Ct = it.getProperty(l)),
						(re = it.quickSetter(l, L.a, oe)),
						bo(l, qt, ze),
						(Be = ws(l))),
					tt)
				) {
					(Xt = yn(tt) ? pl(tt, gl) : gl),
						(C = xs("scroller-start", c, D, L, Xt, 0)),
						(Mt = xs("scroller-end", c, D, L, Xt, 0, C)),
						(Wt = C["offset" + L.op.d2]);
					var Y = Xe(on(D, "content") || D);
					(st = this.markerStart = xs("start", c, Y, L, Xt, Wt, 0, M)),
						(kt = this.markerEnd = xs("end", c, Y, L, Xt, Wt, 0, M)),
						M && (at = it.quickSetter([st, kt], L.a, oe)),
						!q &&
							!(Ii.length && on(D, "fixedMarkers") === !0) &&
							(Qf(X ? Bt : D),
							it.set([C, Mt], { force3D: !0 }),
							(Ti = it.quickSetter(C, L.a, oe)),
							(Ge = it.quickSetter(Mt, L.a, oe)));
				}
				if (M) {
					var w = M.vars.onUpdate,
						E = M.vars.onUpdateParams;
					M.eventCallback("onUpdate", function () {
						T.update(0, 0, 1), w && w.apply(M, E || []);
					});
				}
				if (
					((T.previous = function () {
						return mt[mt.indexOf(T) - 1];
					}),
					(T.next = function () {
						return mt[mt.indexOf(T) + 1];
					}),
					(T.revert = function (A, $) {
						if (!$) return T.kill(!0);
						var B = A !== !1 || !T.enabled,
							K = Te;
						B !== T.isReverted &&
							(B &&
								((Ye = Math.max(U(), T.scroll.rec || 0)),
								(J = T.progress),
								(Si = n && n.progress())),
							st &&
								[st, kt, C, Mt].forEach(function (ct) {
									return (ct.style.display = B ? "none" : "block");
								}),
							B && ((Te = T), T.update(B)),
							l &&
								(!b || !T.isActive) &&
								(B ? id(l, qt, Rt) : bo(l, qt, ui(l), At)),
							B || T.update(B),
							(Te = K),
							(T.isReverted = B));
					}),
					(T.refresh = function (A, $, B, K) {
						if (!((Te || !T.enabled) && !$)) {
							if (l && A && hi) {
								fe(a, "scrollEnd", ou);
								return;
							}
							!Ie && nt && nt(T),
								(Te = T),
								G.tween && !B && (G.tween.kill(), (G.tween = 0)),
								dt && dt.pause(),
								h && n && n.revert({ kill: !1 }).invalidate(),
								T.isReverted || T.revert(!0, !0),
								(T._subPinOffset = !1);
							var ct = ut(),
								rt = I(),
								gt = M ? M.duration() : Ai(D, L),
								Dt = Et <= 0.01,
								Ot = 0,
								yt = K || 0,
								xt = yn(B) ? B.end : i.end,
								Pt = i.endTrigger || p,
								ht = yn(B)
									? B.start
									: i.start || (i.start === 0 || !p ? 0 : l ? "0 0" : "0 100%"),
								ge = (T.pinnedContainer =
									i.pinnedContainer && Xe(i.pinnedContainer, T)),
								Ut = (p && Math.max(0, mt.indexOf(T))) || 0,
								_e = Ut,
								me,
								we,
								fn,
								cs,
								be,
								se,
								Mi,
								oo,
								Ha,
								dr,
								Di,
								hr,
								us;
							for (
								tt &&
								yn(B) &&
								((hr = it.getProperty(C, L.p)), (us = it.getProperty(Mt, L.p)));
								_e--;

							)
								(se = mt[_e]),
									se.end || se.refresh(0, 1) || (Te = T),
									(Mi = se.pin),
									Mi &&
										(Mi === p || Mi === l || Mi === ge) &&
										!se.isReverted &&
										(dr || (dr = []), dr.unshift(se), se.revert(!0, !0)),
									se !== mt[_e] && (Ut--, _e--);
							for (
								Fe(ht) && (ht = ht(T)),
									ht = ul(ht, "start", T),
									Z =
										vl(
											ht,
											p,
											ct,
											L,
											U(),
											st,
											C,
											T,
											rt,
											pt,
											q,
											gt,
											M,
											T._startClamp && "_startClamp",
										) || (l ? -0.001 : 0),
									Fe(xt) && (xt = xt(T)),
									Ze(xt) &&
										!xt.indexOf("+=") &&
										(~xt.indexOf(" ")
											? (xt = (Ze(ht) ? ht.split(" ")[0] : "") + xt)
											: ((Ot = ks(xt.substr(2), ct)),
												(xt = Ze(ht)
													? ht
													: (M
															? it.utils.mapRange(
																	0,
																	M.duration(),
																	M.scrollTrigger.start,
																	M.scrollTrigger.end,
																	Z,
																)
															: Z) + Ot),
												(Pt = p))),
									xt = ul(xt, "end", T),
									ot =
										Math.max(
											Z,
											vl(
												xt || (Pt ? "100% 0" : gt),
												Pt,
												ct,
												L,
												U() + Ot,
												kt,
												Mt,
												T,
												rt,
												pt,
												q,
												gt,
												M,
												T._endClamp && "_endClamp",
											),
										) || -0.001,
									Ot = 0,
									_e = Ut;
								_e--;

							)
								(se = mt[_e]),
									(Mi = se.pin),
									Mi &&
										se.start - se._pinPush <= Z &&
										!M &&
										se.end > 0 &&
										((me =
											se.end -
											(T._startClamp ? Math.max(0, se.start) : se.start)),
										((Mi === p && se.start - se._pinPush < Z) || Mi === ge) &&
											isNaN(ht) &&
											(Ot += me * (1 - se.progress)),
										Mi === l && (yt += me));
							if (
								((Z += Ot),
								(ot += Ot),
								T._startClamp && (T._startClamp += Ot),
								T._endClamp &&
									!Ie &&
									((T._endClamp = ot || -0.001), (ot = Math.min(ot, Ai(D, L)))),
								(Et = ot - Z || ((Z -= 0.01) && 0.001)),
								Dt && (J = it.utils.clamp(0, 1, it.utils.normalize(Z, ot, Ye))),
								(T._pinPush = yt),
								st &&
									Ot &&
									((me = {}),
									(me[L.a] = "+=" + Ot),
									ge && (me[L.p] = "-=" + U()),
									it.set([st, kt], me)),
								l && !(Jo && T.end >= Ai(D, L)))
							)
								(me = ui(l)),
									(cs = L === le),
									(fn = U()),
									(jt = parseFloat(Ct(L.a)) + yt),
									!gt &&
										ot > 1 &&
										((Di = (X ? Ht.scrollingElement || yi : D).style),
										(Di = {
											style: Di,
											value: Di["overflow" + L.a.toUpperCase()],
										}),
										X &&
											ui(Bt)["overflow" + L.a.toUpperCase()] !== "scroll" &&
											(Di.style["overflow" + L.a.toUpperCase()] = "scroll")),
									bo(l, qt, me),
									(Be = ws(l)),
									(we = Yi(l, !0)),
									(oo = q && cn(D, cs ? Ne : le)()),
									g
										? ((At = [g + L.os2, Et + yt + oe]),
											(At.t = qt),
											(_e = g === ie ? Gs(l, L) + Et + yt : 0),
											_e &&
												(At.push(L.d, _e + oe),
												qt.style.flexBasis !== "auto" &&
													(qt.style.flexBasis = _e + oe)),
											tr(At),
											ge &&
												mt.forEach(function (pr) {
													pr.pin === ge &&
														pr.vars.pinSpacing !== !1 &&
														(pr._subPinOffset = !0);
												}),
											q && U(Ye))
										: ((_e = Gs(l, L)),
											_e &&
												qt.style.flexBasis !== "auto" &&
												(qt.style.flexBasis = _e + oe)),
									q &&
										((be = {
											top: we.top + (cs ? fn - Z : oo) + oe,
											left: we.left + (cs ? oo : fn - Z) + oe,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(be[Dn] = be["max" + cr] = Math.ceil(we.width) + oe),
										(be[On] = be["max" + Ea] = Math.ceil(we.height) + oe),
										(be[ci] =
											be[ci + Yr] =
											be[ci + Br] =
											be[ci + Xr] =
											be[ci + zr] =
												"0"),
										(be[ie] = me[ie]),
										(be[ie + Yr] = me[ie + Yr]),
										(be[ie + Br] = me[ie + Br]),
										(be[ie + Xr] = me[ie + Xr]),
										(be[ie + zr] = me[ie + zr]),
										(je = rd(Rt, be, b)),
										Ie && U(0)),
									n
										? ((Ha = n._initted),
											mo(1),
											n.render(n.duration(), !0, !0),
											(pe = Ct(L.a) - jt + Et + yt),
											(Ue = Math.abs(Et - pe) > 1),
											q && Ue && je.splice(je.length - 2, 2),
											n.render(0, !0, !0),
											Ha || n.invalidate(!0),
											n.parent || n.totalTime(n.totalTime()),
											mo(0))
										: (pe = Et),
									Di &&
										(Di.value
											? (Di.style["overflow" + L.a.toUpperCase()] = Di.value)
											: Di.style.removeProperty("overflow-" + L.a));
							else if (p && U() && !M)
								for (we = p.parentNode; we && we !== Bt; )
									we._pinOffset &&
										((Z -= we._pinOffset), (ot -= we._pinOffset)),
										(we = we.parentNode);
							dr &&
								dr.forEach(function (pr) {
									return pr.revert(!1, !0);
								}),
								(T.start = Z),
								(T.end = ot),
								(et = W = Ie ? Ye : U()),
								!M && !Ie && (et < Ye && U(Ye), (T.scroll.rec = 0)),
								T.revert(!1, !0),
								(j = Se()),
								xe && ((N = -1), xe.restart(!0)),
								(Te = 0),
								n &&
									F &&
									(n._initted || Si) &&
									n.progress() !== Si &&
									n.progress(Si || 0, !0).render(n.time(), !0, !0),
								(Dt || J !== T.progress || M || h) &&
									(n &&
										!F &&
										n.totalProgress(
											M && Z < -0.001 && !J ? it.utils.normalize(Z, ot, 0) : J,
											!0,
										),
									(T.progress = Dt || (et - Z) / Et === J ? 0 : J)),
								l && g && (qt._pinOffset = Math.round(T.progress * pe)),
								dt && dt.invalidate(),
								isNaN(hr) ||
									((hr -= it.getProperty(C, L.p)),
									(us -= it.getProperty(Mt, L.p)),
									bs(C, L, hr),
									bs(st, L, hr - (K || 0)),
									bs(Mt, L, us),
									bs(kt, L, us - (K || 0))),
								Dt && !Ie && T.update(),
								f && !Ie && !ce && ((ce = !0), f(T), (ce = !1));
						}
					}),
					(T.getVelocity = function () {
						return ((U() - W) / (Se() - br)) * 1e3 || 0;
					}),
					(T.endAnimation = function () {
						mr(T.callbackAnimation),
							n &&
								(dt
									? dt.progress(1)
									: n.paused()
										? F || mr(n, T.direction < 0, 1)
										: mr(n, n.reversed()));
					}),
					(T.labelToScroll = function (A) {
						return (
							(n &&
								n.labels &&
								(Z || T.refresh() || Z) + (n.labels[A] / n.duration()) * Et) ||
							0
						);
					}),
					(T.getTrailing = function (A) {
						var $ = mt.indexOf(T),
							B = T.direction > 0 ? mt.slice(0, $).reverse() : mt.slice($ + 1);
						return (
							Ze(A)
								? B.filter(function (K) {
										return K.vars.preventOverlaps === A;
									})
								: B
						).filter(function (K) {
							return T.direction > 0 ? K.end <= Z : K.start >= ot;
						});
					}),
					(T.update = function (A, $, B) {
						if (!(M && !B && !A)) {
							var K = Ie === !0 ? Ye : T.scroll(),
								ct = A ? 0 : (K - Z) / Et,
								rt = ct < 0 ? 0 : ct > 1 ? 1 : ct || 0,
								gt = T.progress,
								Dt,
								Ot,
								yt,
								xt,
								Pt,
								ht,
								ge,
								Ut;
							if (
								($ &&
									((W = et),
									(et = M ? U() : K),
									x && ((Ce = Ke), (Ke = n && !F ? n.totalProgress() : rt))),
								m &&
									l &&
									!Te &&
									!gs &&
									hi &&
									(!rt && Z < K + ((K - W) / (Se() - br)) * m
										? (rt = 1e-4)
										: rt === 1 &&
											ot > K + ((K - W) / (Se() - br)) * m &&
											(rt = 0.9999)),
								rt !== gt && T.enabled)
							) {
								if (
									((Dt = T.isActive = !!rt && rt < 1),
									(Ot = !!gt && gt < 1),
									(ht = Dt !== Ot),
									(Pt = ht || !!rt != !!gt),
									(T.direction = rt > gt ? 1 : -1),
									(T.progress = rt),
									Pt &&
										!Te &&
										((yt = rt && !gt ? 0 : rt === 1 ? 1 : gt === 1 ? 2 : 3),
										F &&
											((xt =
												(!ht && H[yt + 1] !== "none" && H[yt + 1]) || H[yt]),
											(Ut =
												n &&
												(xt === "complete" || xt === "reset" || xt in n)))),
									k &&
										(ht || Ut) &&
										(Ut || d || !n) &&
										(Fe(k)
											? k(T)
											: T.getTrailing(k).forEach(function (fn) {
													return fn.endAnimation();
												})),
									F ||
										(dt && !Te && !gs
											? (dt._dp._time - dt._start !== dt._time &&
													dt.render(dt._dp._time - dt._start),
												dt.resetTo
													? dt.resetTo("totalProgress", rt, n._tTime / n._tDur)
													: ((dt.vars.totalProgress = rt),
														dt.invalidate().restart()))
											: n && n.totalProgress(rt, !!(Te && (j || A)))),
									l)
								) {
									if ((A && g && (qt.style[g + L.os2] = gi), !q))
										re(Sr(jt + pe * rt));
									else if (Pt) {
										if (
											((ge = !A && rt > gt && ot + 1 > K && K + 1 >= Ai(D, L)),
											b)
										)
											if (!A && (Dt || ge)) {
												var _e = Yi(l, !0),
													me = K - Z;
												xl(
													l,
													Bt,
													_e.top + (L === le ? me : 0) + oe,
													_e.left + (L === le ? 0 : me) + oe,
												);
											} else xl(l, qt);
										tr(Dt || ge ? je : Be),
											(Ue && rt < 1 && Dt) ||
												re(jt + (rt === 1 && !ge ? pe : 0));
									}
								}
								x && !G.tween && !Te && !gs && xe.restart(!0),
									o &&
										(ht || (S && rt && (rt < 1 || !yo))) &&
										ts(o.targets).forEach(function (fn) {
											return fn.classList[Dt || S ? "add" : "remove"](
												o.className,
											);
										}),
									s && !F && !A && s(T),
									Pt && !Te
										? (F &&
												(Ut &&
													(xt === "complete"
														? n.pause().totalProgress(1)
														: xt === "reset"
															? n.restart(!0).pause()
															: xt === "restart"
																? n.restart(!0)
																: n[xt]()),
												s && s(T)),
											(ht || !yo) &&
												(u && ht && xo(T, u),
												V[yt] && xo(T, V[yt]),
												S && (rt === 1 ? T.kill(!1, 1) : (V[yt] = 0)),
												ht || ((yt = rt === 1 ? 1 : 3), V[yt] && xo(T, V[yt]))),
											O &&
												!Dt &&
												Math.abs(T.getVelocity()) > (Mr(O) ? O : 2500) &&
												(mr(T.callbackAnimation),
												dt
													? dt.progress(1)
													: mr(n, xt === "reverse" ? 1 : !rt, 1)))
										: F && s && !Te && s(T);
							}
							if (Ge) {
								var we = M ? (K / M.duration()) * (M._caScrollDist || 0) : K;
								Ti(we + (C._isFlipped ? 1 : 0)), Ge(we);
							}
							at && at((-K / M.duration()) * (M._caScrollDist || 0));
						}
					}),
					(T.enable = function (A, $) {
						T.enabled ||
							((T.enabled = !0),
							fe(D, "resize", Dr),
							X || fe(D, "scroll", Xn),
							nt && fe(a, "refreshInit", nt),
							A !== !1 && ((T.progress = J = 0), (et = W = N = U())),
							$ !== !1 && T.refresh());
					}),
					(T.getTween = function (A) {
						return A && G ? G.tween : dt;
					}),
					(T.setPositions = function (A, $, B, K) {
						if (M) {
							var ct = M.scrollTrigger,
								rt = M.duration(),
								gt = ct.end - ct.start;
							(A = ct.start + (gt * A) / rt), ($ = ct.start + (gt * $) / rt);
						}
						T.refresh(
							!1,
							!1,
							{
								start: fl(A, B && !!T._startClamp),
								end: fl($, B && !!T._endClamp),
							},
							K,
						),
							T.update();
					}),
					(T.adjustPinSpacing = function (A) {
						if (At && A) {
							var $ = At.indexOf(L.d) + 1;
							(At[$] = parseFloat(At[$]) + A + oe),
								(At[1] = parseFloat(At[1]) + A + oe),
								tr(At);
						}
					}),
					(T.disable = function (A, $) {
						if (
							T.enabled &&
							(A !== !1 && T.revert(!0, !0),
							(T.enabled = T.isActive = !1),
							$ || (dt && dt.pause()),
							(Ye = 0),
							lt && (lt.uncache = 1),
							nt && ue(a, "refreshInit", nt),
							xe && (xe.pause(), G.tween && G.tween.kill() && (G.tween = 0)),
							!X)
						) {
							for (var B = mt.length; B--; )
								if (mt[B].scroller === D && mt[B] !== T) return;
							ue(D, "resize", Dr), X || ue(D, "scroll", Xn);
						}
					}),
					(T.kill = function (A, $) {
						T.disable(A, $), dt && !$ && dt.kill(), c && delete ta[c];
						var B = mt.indexOf(T);
						B >= 0 && mt.splice(B, 1),
							B === Le && As > 0 && Le--,
							(B = 0),
							mt.forEach(function (K) {
								return K.scroller === T.scroller && (B = 1);
							}),
							B || Ie || (T.scroll.rec = 0),
							n &&
								((n.scrollTrigger = null),
								A && n.revert({ kill: !1 }),
								$ || n.kill()),
							st &&
								[st, kt, C, Mt].forEach(function (K) {
									return K.parentNode && K.parentNode.removeChild(K);
								}),
							qr === T && (qr = 0),
							l &&
								(lt && (lt.uncache = 1),
								(B = 0),
								mt.forEach(function (K) {
									return K.pin === l && B++;
								}),
								B || (lt.spacer = 0)),
							i.onKill && i.onKill(T);
					}),
					mt.push(T),
					T.enable(!1, !1),
					v && v(T),
					n && n.add && !Et)
				) {
					var z = T.update;
					(T.update = function () {
						(T.update = z), Z || ot || T.refresh();
					}),
						it.delayedCall(0.01, T.update),
						(Et = 0.01),
						(Z = ot = 0);
				} else T.refresh();
				l && ed();
			}),
			(a.register = function (i) {
				return (
					$n ||
						((it = i || tu()),
						Jc() && window.document && a.enable(),
						($n = Tr)),
					$n
				);
			}),
			(a.defaults = function (i) {
				if (i) for (var n in i) vs[n] = i[n];
				return vs;
			}),
			(a.disable = function (i, n) {
				(Tr = 0),
					mt.forEach(function (s) {
						return s[n ? "kill" : "disable"](i);
					}),
					ue(bt, "wheel", Xn),
					ue(Ht, "scroll", Xn),
					clearInterval(ps),
					ue(Ht, "touchcancel", Ci),
					ue(Bt, "touchstart", Ci),
					ms(ue, Ht, "pointerdown,touchstart,mousedown", dl),
					ms(ue, Ht, "pointerup,touchend,mouseup", hl),
					js.kill(),
					_s(ue);
				for (var r = 0; r < vt.length; r += 3)
					ys(ue, vt[r], vt[r + 1]), ys(ue, vt[r], vt[r + 2]);
			}),
			(a.enable = function () {
				if (
					((bt = window),
					(Ht = document),
					(yi = Ht.documentElement),
					(Bt = Ht.body),
					it &&
						((ts = it.utils.toArray),
						(Fr = it.utils.clamp),
						(Zo = it.core.context || Ci),
						(mo = it.core.suppressOverwrites || Ci),
						(Oa = bt.history.scrollRestoration || "auto"),
						(ea = bt.pageYOffset),
						it.core.globals("ScrollTrigger", a),
						Bt))
				) {
					(Tr = 1),
						(Jn = document.createElement("div")),
						(Jn.style.height = "100vh"),
						(Jn.style.position = "absolute"),
						cu(),
						Uf(),
						Jt.register(it),
						(a.isTouch = Jt.isTouch),
						(Gi =
							Jt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(Qo = Jt.isTouch === 1),
						fe(bt, "wheel", Xn),
						(Uc = [bt, Ht, yi, Bt]),
						it.matchMedia
							? ((a.matchMedia = function (c) {
									var u = it.matchMedia(),
										f;
									for (f in c) u.add(f, c[f]);
									return u;
								}),
								it.addEventListener("matchMediaInit", function () {
									return La();
								}),
								it.addEventListener("matchMediaRevert", function () {
									return au();
								}),
								it.addEventListener("matchMedia", function () {
									wn(0, 1), Rn("matchMedia");
								}),
								it.matchMedia("(orientation: portrait)", function () {
									return wo(), wo;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						wo(),
						fe(Ht, "scroll", Xn);
					var i = Bt.style,
						n = i.borderTopStyle,
						r = it.core.Animation.prototype,
						s,
						o;
					for (
						r.revert ||
							Object.defineProperty(r, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							i.borderTopStyle = "solid",
							s = Yi(Bt),
							le.m = Math.round(s.top + le.sc()) || 0,
							Ne.m = Math.round(s.left + Ne.sc()) || 0,
							n ? (i.borderTopStyle = n) : i.removeProperty("border-top-style"),
							ps = setInterval(_l, 250),
							it.delayedCall(0.5, function () {
								return (gs = 0);
							}),
							fe(Ht, "touchcancel", Ci),
							fe(Bt, "touchstart", Ci),
							ms(fe, Ht, "pointerdown,touchstart,mousedown", dl),
							ms(fe, Ht, "pointerup,touchend,mouseup", hl),
							Ko = it.utils.checkPrefix("transform"),
							Ls.push(Ko),
							$n = Se(),
							js = it.delayedCall(0.2, wn).pause(),
							Vn = [
								Ht,
								"visibilitychange",
								function () {
									var c = bt.innerWidth,
										u = bt.innerHeight;
									Ht.hidden
										? ((ll = c), (cl = u))
										: (ll !== c || cl !== u) && Dr();
								},
								Ht,
								"DOMContentLoaded",
								wn,
								bt,
								"load",
								wn,
								bt,
								"resize",
								Dr,
							],
							_s(fe),
							mt.forEach(function (c) {
								return c.enable(0, 1);
							}),
							o = 0;
						o < vt.length;
						o += 3
					)
						ys(ue, vt[o], vt[o + 1]), ys(ue, vt[o], vt[o + 2]);
				}
			}),
			(a.config = function (i) {
				"limitCallbacks" in i && (yo = !!i.limitCallbacks);
				var n = i.syncInterval;
				(n && clearInterval(ps)) || ((ps = n) && setInterval(_l, n)),
					"ignoreMobileResize" in i &&
						(Qo = a.isTouch === 1 && i.ignoreMobileResize),
					"autoRefreshEvents" in i &&
						(_s(ue) || _s(fe, i.autoRefreshEvents || "none"),
						(Kc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (i, n) {
				var r = Xe(i),
					s = vt.indexOf(r),
					o = Ln(r);
				~s && vt.splice(s, o ? 6 : 2),
					n && (o ? Ii.unshift(bt, n, Bt, n, yi, n) : Ii.unshift(r, n));
			}),
			(a.clearMatchMedia = function (i) {
				mt.forEach(function (n) {
					return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (i, n, r) {
				var s = (Ze(i) ? Xe(i) : i).getBoundingClientRect(),
					o = s[r ? Dn : On] * n || 0;
				return r
					? s.right - o > 0 && s.left + o < bt.innerWidth
					: s.bottom - o > 0 && s.top + o < bt.innerHeight;
			}),
			(a.positionInViewport = function (i, n, r) {
				Ze(i) && (i = Xe(i));
				var s = i.getBoundingClientRect(),
					o = s[r ? Dn : On],
					c =
						n == null
							? o / 2
							: n in Ks
								? Ks[n] * o
								: ~n.indexOf("%")
									? (parseFloat(n) * o) / 100
									: parseFloat(n) || 0;
				return r ? (s.left + c) / bt.innerWidth : (s.top + c) / bt.innerHeight;
			}),
			(a.killAll = function (i) {
				if (
					(mt.slice(0).forEach(function (r) {
						return r.vars.id !== "ScrollSmoother" && r.kill();
					}),
					i !== !0)
				) {
					var n = In.killAll || [];
					(In = {}),
						n.forEach(function (r) {
							return r();
						});
				}
			}),
			a
		);
	})();
_t.version = "3.12.5";
_t.saveStyles = function (a) {
	return a
		? ts(a).forEach(function (t) {
				if (t && t.style) {
					var e = Qe.indexOf(t);
					e >= 0 && Qe.splice(e, 5),
						Qe.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							it.core.getCache(t),
							Zo(),
						);
				}
			})
		: Qe;
};
_t.revert = function (a, t) {
	return La(!a, t);
};
_t.create = function (a, t) {
	return new _t(a, t);
};
_t.refresh = function (a) {
	return a ? Dr() : ($n || _t.register()) && wn(!0);
};
_t.update = function (a) {
	return ++vt.cache && $i(a === !0 ? 2 : 0);
};
_t.clearScrollMemory = lu;
_t.maxScroll = function (a, t) {
	return Ai(a, t ? Ne : le);
};
_t.getScrollFunc = function (a, t) {
	return cn(Xe(a), t ? Ne : le);
};
_t.getById = function (a) {
	return ta[a];
};
_t.getAll = function () {
	return mt.filter(function (a) {
		return a.vars.id !== "ScrollSmoother";
	});
};
_t.isScrolling = function () {
	return !!hi;
};
_t.snapDirectional = Aa;
_t.addEventListener = function (a, t) {
	var e = In[a] || (In[a] = []);
	~e.indexOf(t) || e.push(t);
};
_t.removeEventListener = function (a, t) {
	var e = In[a],
		i = e && e.indexOf(t);
	i >= 0 && e.splice(i, 1);
};
_t.batch = function (a, t) {
	var e = [],
		i = {},
		n = t.interval || 0.016,
		r = t.batchMax || 1e9,
		s = function (u, f) {
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
					r <= d.length && l.progress(1);
			};
		},
		o;
	for (o in t)
		i[o] =
			o.substr(0, 2) === "on" && Fe(t[o]) && o !== "onRefreshInit"
				? s(o, t[o])
				: t[o];
	return (
		Fe(r) &&
			((r = r()),
			fe(_t, "refresh", function () {
				return (r = t.batchMax());
			})),
		ts(a).forEach(function (c) {
			var u = {};
			for (o in i) u[o] = i[o];
			(u.trigger = c), e.push(_t.create(u));
		}),
		e
	);
};
var bl = function (t, e, i, n) {
		return (
			e > n ? t(n) : e < 0 && t(0),
			i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
		);
	},
	To = function a(t, e) {
		e === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					e === !0
						? "auto"
						: e
							? "pan-" + e + (Jt.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === yi && a(Bt, e);
	},
	Ts = { auto: 1, scroll: 1 },
	od = function (t) {
		var e = t.event,
			i = t.target,
			n = t.axis,
			r = (e.changedTouches ? e.changedTouches[0] : e).target,
			s = r._gsap || it.core.getCache(r),
			o = Se(),
			c;
		if (!s._isScrollT || o - s._isScrollT > 2e3) {
			for (
				;
				r &&
				r !== Bt &&
				((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
					!(Ts[(c = ui(r)).overflowY] || Ts[c.overflowX]));

			)
				r = r.parentNode;
			(s._isScroll =
				r &&
				r !== i &&
				!Ln(r) &&
				(Ts[(c = ui(r)).overflowY] || Ts[c.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || n === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
	},
	fu = function (t, e, i, n) {
		return Jt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (n = n && od),
			onPress: n,
			onDrag: n,
			onScroll: n,
			onEnable: function () {
				return i && fe(Ht, Jt.eventTypes[0], Sl, !1, !0);
			},
			onDisable: function () {
				return ue(Ht, Jt.eventTypes[0], Sl, !0);
			},
		});
	},
	ad = /(input|label|select|textarea)/i,
	Tl,
	Sl = function (t) {
		var e = ad.test(t.target.tagName);
		(e || Tl) && ((t._gsapAllow = !0), (Tl = e));
	},
	ld = function (t) {
		yn(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var e = t,
			i = e.normalizeScrollX,
			n = e.momentum,
			r = e.allowNestedScroll,
			s = e.onRelease,
			o,
			c,
			u = Xe(t.target) || yi,
			f = it.core.globals().ScrollSmoother,
			d = f && f.get(),
			p =
				Gi &&
				((t.content && Xe(t.content)) ||
					(d && t.content !== !1 && !d.smooth() && d.content())),
			l = cn(u, le),
			g = cn(u, Ne),
			h = 1,
			m =
				(Jt.isTouch && bt.visualViewport
					? bt.visualViewport.scale * bt.visualViewport.width
					: bt.outerWidth) / bt.innerWidth,
			_ = 0,
			y = Fe(n)
				? function () {
						return n(o);
					}
				: function () {
						return n || 2.8;
					},
			S,
			x,
			b = fu(u, t.type, !0, r),
			P = function () {
				return (x = !1);
			},
			M = Ci,
			O = Ci,
			k = function () {
				(c = Ai(u, le)),
					(O = Fr(Gi ? 1 : 0, c)),
					i && (M = Fr(0, Ai(u, Ne))),
					(S = Cn);
			},
			L = function () {
				(p._gsap.y = Sr(parseFloat(p._gsap.y) + l.offset) + "px"),
					(p.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(p._gsap.y) +
						", 0, 1)"),
					(l.offset = l.cacheID = 0);
			},
			F = function () {
				if (x) {
					requestAnimationFrame(P);
					var tt = Sr(o.deltaY / 2),
						pt = O(l.v - tt);
					if (p && pt !== l.v + l.offset) {
						l.offset = pt - l.v;
						var T = Sr((parseFloat(p && p._gsap.y) || 0) - l.offset);
						(p.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							T +
							", 0, 1)"),
							(p._gsap.y = T + "px"),
							(l.cacheID = vt.cache),
							$i();
					}
					return !0;
				}
				l.offset && L(), (x = !0);
			},
			D,
			R,
			X,
			q,
			V = function () {
				k(),
					D.isActive() &&
						D.vars.scrollY > c &&
						(l() > c ? D.progress(1) && l(c) : D.resetTo("scrollY", c));
			};
		return (
			p && it.set(p, { y: "+=0" }),
			(t.ignoreCheck = function (H) {
				return (
					(Gi && H.type === "touchmove" && F()) ||
					(h > 1.05 && H.type !== "touchstart") ||
					o.isGesturing ||
					(H.touches && H.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				x = !1;
				var H = h;
				(h = Sr(((bt.visualViewport && bt.visualViewport.scale) || 1) / m)),
					D.pause(),
					H !== h && To(u, h > 1.01 ? !0 : i ? !1 : "x"),
					(R = g()),
					(X = l()),
					k(),
					(S = Cn);
			}),
			(t.onRelease = t.onGestureStart =
				function (H, tt) {
					if ((l.offset && L(), !tt)) q.restart(!0);
					else {
						vt.cache++;
						var pt = y(),
							T,
							nt;
						i &&
							((T = g()),
							(nt = T + (pt * 0.05 * -H.velocityX) / 0.227),
							(pt *= bl(g, T, nt, Ai(u, Ne))),
							(D.vars.scrollX = M(nt))),
							(T = l()),
							(nt = T + (pt * 0.05 * -H.velocityY) / 0.227),
							(pt *= bl(l, T, nt, Ai(u, le))),
							(D.vars.scrollY = O(nt)),
							D.invalidate().duration(pt).play(0.01),
							((Gi && D.vars.scrollY >= c) || T >= c - 1) &&
								it.to({}, { onUpdate: V, duration: pt });
					}
					s && s(H);
				}),
			(t.onWheel = function () {
				D._ts && D.pause(), Se() - _ > 1e3 && ((S = 0), (_ = Se()));
			}),
			(t.onChange = function (H, tt, pt, T, nt) {
				if (
					(Cn !== S && k(),
					tt && i && g(M(T[2] === tt ? R + (H.startX - H.x) : g() + tt - T[1])),
					pt)
				) {
					l.offset && L();
					var ut = nt[2] === pt,
						I = ut ? X + H.startY - H.y : l() + pt - nt[1],
						N = O(I);
					ut && I !== N && (X += N - I), l(N);
				}
				(pt || tt) && $i();
			}),
			(t.onEnable = function () {
				To(u, i ? !1 : "x"),
					_t.addEventListener("refresh", V),
					fe(bt, "resize", V),
					l.smooth &&
						((l.target.style.scrollBehavior = "auto"),
						(l.smooth = g.smooth = !1)),
					b.enable();
			}),
			(t.onDisable = function () {
				To(u, !0),
					ue(bt, "resize", V),
					_t.removeEventListener("refresh", V),
					b.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(o = new Jt(t)),
			(o.iOS = Gi),
			Gi && !l() && l(1),
			Gi && it.ticker.add(Ci),
			(q = o._dc),
			(D = it.to(o, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: i ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: uu(l, l(), function () {
						return D.pause();
					}),
				},
				onUpdate: $i,
				onComplete: q.vars.onComplete,
			})),
			o
		);
	};
_t.sort = function (a) {
	return mt.sort(
		a ||
			function (t, e) {
				return (
					(t.vars.refreshPriority || 0) * -1e6 +
					t.start -
					(e.start + (e.vars.refreshPriority || 0) * -1e6)
				);
			},
	);
};
_t.observe = function (a) {
	return new Jt(a);
};
_t.normalizeScroll = function (a) {
	if (typeof a > "u") return Ee;
	if (a === !0 && Ee) return Ee.enable();
	if (a === !1) {
		Ee && Ee.kill(), (Ee = a);
		return;
	}
	var t = a instanceof Jt ? a : ld(a);
	return Ee && Ee.target === t.target && Ee.kill(), Ln(t.target) && (Ee = t), t;
};
_t.core = {
	_getVelocityProp: Go,
	_inputObserver: fu,
	_scrollers: vt,
	_proxies: Ii,
	bridge: {
		ss: function () {
			hi || Rn("scrollStart"), (hi = Se());
		},
		ref: function () {
			return Te;
		},
	},
};
tu() && it.registerPlugin(_t);
Q.registerPlugin(_t);
class cd {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = Q.timeline({
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
function Ia(a) {
	return typeof a == "number";
}
function na(a) {
	return typeof a == "string";
}
function Ra(a) {
	return typeof a == "boolean";
}
function Ml(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function Yt(a) {
	return Math.abs(a);
}
function Na(a) {
	return Math.sign(a);
}
function Hr(a, t) {
	return Yt(a - t);
}
function ud(a, t) {
	if (a === 0 || t === 0 || Yt(a) <= Yt(t)) return 0;
	const e = Hr(Yt(a), Yt(t));
	return Yt(e / a);
}
function is(a) {
	return ns(a).map(Number);
}
function wi(a) {
	return a[ls(a)];
}
function ls(a) {
	return Math.max(0, a.length - 1);
}
function Fa(a, t) {
	return t === ls(a);
}
function Dl(a, t = 0) {
	return Array.from(Array(a), (e, i) => t + i);
}
function ns(a) {
	return Object.keys(a);
}
function du(a, t) {
	return [a, t].reduce(
		(e, i) => (
			ns(i).forEach((n) => {
				const r = e[n],
					s = i[n],
					o = Ml(r) && Ml(s);
				e[n] = o ? du(r, s) : s;
			}),
			e
		),
		{},
	);
}
function hu(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function fd(a, t) {
	const e = { start: i, center: n, end: r };
	function i() {
		return 0;
	}
	function n(c) {
		return r(c) / 2;
	}
	function r(c) {
		return t - c;
	}
	function s(c, u) {
		return na(a) ? e[a](c) : a(t, c, u);
	}
	return { measure: s };
}
function rs() {
	let a = [];
	function t(n, r, s, o = { passive: !0 }) {
		let c;
		if ("addEventListener" in n)
			n.addEventListener(r, s, o), (c = () => n.removeEventListener(r, s, o));
		else {
			const u = n;
			u.addListener(s), (c = () => u.removeListener(s));
		}
		return a.push(c), i;
	}
	function e() {
		a = a.filter((n) => n());
	}
	const i = { add: t, clear: e };
	return i;
}
function dd(a, t, e, i) {
	const n = rs(),
		r = 1e3 / 60;
	let s = null,
		o = 0,
		c = 0;
	function u() {
		n.add(a, "visibilitychange", () => {
			a.hidden && g();
		});
	}
	function f() {
		l(), n.clear();
	}
	function d(m) {
		if (!c) return;
		s || (s = m);
		const _ = m - s;
		for (s = m, o += _; o >= r; ) e(), (o -= r);
		const y = Yt(o / r);
		i(y), c && t.requestAnimationFrame(d);
	}
	function p() {
		c || (c = t.requestAnimationFrame(d));
	}
	function l() {
		t.cancelAnimationFrame(c), (s = null), (o = 0), (c = 0);
	}
	function g() {
		(s = null), (o = 0);
	}
	return { init: u, destroy: f, start: p, stop: l, update: e, render: i };
}
function hd(a, t) {
	const e = a === "y" ? "y" : "x",
		i = a === "y" ? "x" : "y",
		n = o(),
		r = c();
	function s(f) {
		const { width: d, height: p } = f;
		return e === "x" ? d : p;
	}
	function o() {
		return e === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function c() {
		return e === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: e, cross: i, startEdge: n, endEdge: r, measureSize: s };
}
function Nn(a = 0, t = 0) {
	const e = Yt(a - t);
	function i(u) {
		return u < a;
	}
	function n(u) {
		return u > t;
	}
	function r(u) {
		return i(u) || n(u);
	}
	function s(u) {
		return r(u) ? (i(u) ? a : t) : u;
	}
	function o(u) {
		return e ? u - e * Math.ceil((u - t) / e) : u;
	}
	return {
		length: e,
		max: t,
		min: a,
		constrain: s,
		reachedAny: r,
		reachedMax: n,
		reachedMin: i,
		removeOffset: o,
	};
}
function pu(a, t, e) {
	const { constrain: i } = Nn(0, a),
		n = a + 1;
	let r = s(t);
	function s(p) {
		return e ? Yt((n + p) % n) : i(p);
	}
	function o() {
		return r;
	}
	function c(p) {
		return (r = s(p)), d;
	}
	function u(p) {
		return f().set(o() + p);
	}
	function f() {
		return pu(a, o(), e);
	}
	const d = { get: o, set: c, add: u, clone: f };
	return d;
}
function pd(a) {
	const t = a === "rtl" ? -1 : 1;
	function e(n) {
		return n * t;
	}
	return { apply: e };
}
function gd(a, t, e, i, n, r, s, o, c, u, f, d, p, l, g, h, m, _, y, S) {
	const { cross: x } = a,
		b = ["INPUT", "SELECT", "TEXTAREA"],
		P = { passive: !1 },
		M = rs(),
		O = rs(),
		k = Nn(50, 225).constrain(g.measure(20)),
		L = { mouse: 300, touch: 400 },
		F = { mouse: 500, touch: 600 },
		D = h ? 43 : 25;
	let R = !1,
		X = 0,
		q = 0,
		V = !1,
		H = !1,
		tt = !1,
		pt = !1;
	function T(W) {
		if (!S) return;
		function Z(st) {
			(Ra(S) || S(W, st)) && J(st);
		}
		const ot = e;
		M.add(ot, "dragstart", (st) => st.preventDefault(), P)
			.add(ot, "touchmove", () => {}, P)
			.add(ot, "touchend", () => {})
			.add(ot, "touchstart", Z)
			.add(ot, "mousedown", Z)
			.add(ot, "touchcancel", G)
			.add(ot, "contextmenu", G)
			.add(ot, "click", lt, !0);
	}
	function nt() {
		M.clear(), O.clear();
	}
	function ut() {
		const W = pt ? i : e;
		O.add(W, "touchmove", U, P)
			.add(W, "touchend", G)
			.add(W, "mousemove", U, P)
			.add(W, "mouseup", G);
	}
	function I(W) {
		const Z = W.nodeName || "";
		return b.includes(Z);
	}
	function N() {
		return (h ? F : L)[pt ? "mouse" : "touch"];
	}
	function j(W, Z) {
		const ot = p.add(Na(W) * -1),
			st = d.byDistance(W, !h).distance;
		return h || Yt(W) < k
			? st
			: _ && Z
				? st * 0.5
				: d.byIndex(ot.get(), 0).distance;
	}
	function J(W) {
		const Z = hu(W, n);
		(pt = Z),
			!(Z && W.button !== 0) &&
				(I(W.target) ||
					((tt = h && Z && !W.buttons && R),
					(R = Hr(r.get(), o.get()) >= 2),
					(V = !0),
					s.pointerDown(W),
					f.useFriction(0).useDuration(0),
					r.set(o),
					ut(),
					(X = s.readPoint(W)),
					(q = s.readPoint(W, x)),
					l.emit("pointerDown")));
	}
	function U(W) {
		const Z = s.readPoint(W),
			ot = s.readPoint(W, x),
			st = Hr(Z, X),
			kt = Hr(ot, q);
		if (!H && !pt && (!W.cancelable || ((H = st > kt), !H))) return G(W);
		const C = s.pointerMove(W);
		st > m && (tt = !0),
			f.useFriction(0.3).useDuration(1),
			c.start(),
			r.add(t.apply(C)),
			W.preventDefault();
	}
	function G(W) {
		const ot = d.byDistance(0, !1).index !== p.get(),
			st = s.pointerUp(W) * N(),
			kt = j(t.apply(st), ot),
			C = ud(st, kt),
			Mt = D - 10 * C,
			Xt = y + C / 50;
		(H = !1),
			(V = !1),
			O.clear(),
			f.useDuration(Mt).useFriction(Xt),
			u.distance(kt, !h),
			(pt = !1),
			l.emit("pointerUp");
	}
	function lt(W) {
		tt && (W.stopPropagation(), W.preventDefault());
	}
	function ft() {
		return V;
	}
	return { init: T, pointerDown: ft, destroy: nt };
}
function _d(a, t) {
	let i, n;
	function r(d) {
		return d.timeStamp;
	}
	function s(d, p) {
		const g = `client${(p || a.scroll) === "x" ? "X" : "Y"}`;
		return (hu(d, t) ? d : d.touches[0])[g];
	}
	function o(d) {
		return (i = d), (n = d), s(d);
	}
	function c(d) {
		const p = s(d) - s(n),
			l = r(d) - r(i) > 170;
		return (n = d), l && (i = d), p;
	}
	function u(d) {
		if (!i || !n) return 0;
		const p = s(n) - s(i),
			l = r(d) - r(i),
			g = r(d) - r(n) > 170,
			h = p / l;
		return l && !g && Yt(h) > 0.1 ? h : 0;
	}
	return { pointerDown: o, pointerMove: c, pointerUp: u, readPoint: s };
}
function md() {
	function a(e) {
		const { offsetTop: i, offsetLeft: n, offsetWidth: r, offsetHeight: s } = e;
		return {
			top: i,
			right: n + r,
			bottom: i + s,
			left: n,
			width: r,
			height: s,
		};
	}
	return { measure: a };
}
function yd(a) {
	function t(i) {
		return a * (i / 100);
	}
	return { measure: t };
}
function vd(a, t, e, i, n, r, s) {
	let o,
		c,
		u = [],
		f = !1;
	function d(h) {
		return n.measureSize(s.measure(h));
	}
	function p(h) {
		if (!r) return;
		(c = d(a)), (u = i.map(d));
		function m(y) {
			for (const S of y) {
				const x = S.target === a,
					b = i.indexOf(S.target),
					P = x ? c : u[b],
					M = d(x ? a : i[b]);
				if (Yt(M - P) >= 0.5) {
					e.requestAnimationFrame(() => {
						h.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((y) => {
			f || ((Ra(r) || r(h, y)) && m(y));
		})),
			[a].concat(i).forEach((y) => o.observe(y));
	}
	function l() {
		o && o.disconnect(), (f = !0);
	}
	return { init: p, destroy: l };
}
function xd(a, t, e, i, n) {
	let r = 0,
		s = 0,
		o = i,
		c = n,
		u = a.get(),
		f = 0;
	function d() {
		const b = e.get() - a.get(),
			P = !o;
		let M = 0;
		return (
			P
				? ((r = 0), a.set(e), (M = b))
				: ((r += b / o), (r *= c), (u += r), a.add(r), (M = u - f)),
			(s = Na(M)),
			(f = u),
			x
		);
	}
	function p() {
		const b = e.get() - t.get();
		return Yt(b) < 0.001;
	}
	function l() {
		return o;
	}
	function g() {
		return s;
	}
	function h() {
		return r;
	}
	function m() {
		return y(i);
	}
	function _() {
		return S(n);
	}
	function y(b) {
		return (o = b), x;
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
function wd(a, t, e, i, n) {
	const r = n.measure(10),
		s = n.measure(50),
		o = Nn(0.1, 0.99);
	let c = !1;
	function u() {
		return !(c || !a.reachedAny(e.get()) || !a.reachedAny(t.get()));
	}
	function f(l) {
		if (!u()) return;
		const g = a.reachedMin(t.get()) ? "min" : "max",
			h = Yt(a[g] - t.get()),
			m = e.get() - t.get(),
			_ = o.constrain(h / s);
		e.subtract(m * _),
			!l &&
				Yt(m) < r &&
				(e.set(a.constrain(e.get())), i.useDuration(25).useBaseFriction());
	}
	function d(l) {
		c = !l;
	}
	return { constrain: f, toggleActive: d };
}
function bd(a, t, e, i, n) {
	const r = Nn(-t + a, 0),
		s = d(),
		o = f(),
		c = p();
	function u(g, h) {
		return Hr(g, h) < 1;
	}
	function f() {
		const g = s[0],
			h = wi(s),
			m = s.lastIndexOf(g),
			_ = s.indexOf(h) + 1;
		return Nn(m, _);
	}
	function d() {
		return e
			.map((g, h) => {
				const { min: m, max: _ } = r,
					y = r.constrain(g),
					S = !h,
					x = Fa(e, h);
				return S ? _ : x || u(m, y) ? m : u(_, y) ? _ : y;
			})
			.map((g) => parseFloat(g.toFixed(3)));
	}
	function p() {
		if (t <= a + n) return [r.max];
		if (i === "keepSnaps") return s;
		const { min: g, max: h } = o;
		return s.slice(g, h);
	}
	return { snapsContained: c, scrollContainLimit: o };
}
function Td(a, t, e) {
	const i = t[0],
		n = e ? i - a : wi(t);
	return { limit: Nn(n, i) };
}
function Sd(a, t, e, i) {
	const r = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: c } = Nn(r, s);
	function u(p) {
		return p === 1 ? c(e.get()) : p === -1 ? o(e.get()) : !1;
	}
	function f(p) {
		if (!u(p)) return;
		const l = a * (p * -1);
		i.forEach((g) => g.add(l));
	}
	return { loop: f };
}
function Md(a) {
	const { max: t, length: e } = a;
	function i(r) {
		const s = r - t;
		return e ? s / -e : 0;
	}
	return { get: i };
}
function Dd(a, t, e, i, n) {
	const { startEdge: r, endEdge: s } = a,
		{ groupSlides: o } = n,
		c = d().map(t.measure),
		u = p(),
		f = l();
	function d() {
		return o(i)
			.map((h) => wi(h)[s] - h[0][r])
			.map(Yt);
	}
	function p() {
		return i.map((h) => e[r] - h[r]).map((h) => -Yt(h));
	}
	function l() {
		return o(u)
			.map((h) => h[0])
			.map((h, m) => h + c[m]);
	}
	return { snaps: u, snapsAligned: f };
}
function Od(a, t, e, i, n, r) {
	const { groupSlides: s } = n,
		{ min: o, max: c } = i,
		u = f();
	function f() {
		const p = s(r),
			l = !a || t === "keepSnaps";
		return e.length === 1
			? [r]
			: l
				? p
				: p.slice(o, c).map((g, h, m) => {
						const _ = !h,
							y = Fa(m, h);
						if (_) {
							const S = wi(m[0]) + 1;
							return Dl(S);
						}
						if (y) {
							const S = ls(r) - wi(m)[0] + 1;
							return Dl(S, wi(m)[0]);
						}
						return g;
					});
	}
	return { slideRegistry: u };
}
function Cd(a, t, e, i, n) {
	const { reachedAny: r, removeOffset: s, constrain: o } = i;
	function c(g) {
		return g.concat().sort((h, m) => Yt(h) - Yt(m))[0];
	}
	function u(g) {
		const h = a ? s(g) : o(g),
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
		if (!a) return m[0];
		if (!h) return c(m);
		const _ = m.filter((y) => Na(y) === h);
		return _.length ? c(_) : wi(m) - e;
	}
	function d(g, h) {
		const m = t[g] - n.get(),
			_ = f(m, h);
		return { index: g, distance: _ };
	}
	function p(g, h) {
		const m = n.get() + g,
			{ index: _, distance: y } = u(m),
			S = !a && r(m);
		if (!h || S) return { index: _, distance: g };
		const x = t[_] - y,
			b = g + f(x, 0);
		return { index: _, distance: b };
	}
	return { byDistance: p, byIndex: d, shortcut: f };
}
function Pd(a, t, e, i, n, r, s) {
	function o(d) {
		const p = d.distance,
			l = d.index !== t.get();
		r.add(p),
			p && (i.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			l && (e.set(t.get()), t.set(d.index), s.emit("select"));
	}
	function c(d, p) {
		const l = n.byDistance(d, p);
		o(l);
	}
	function u(d, p) {
		const l = t.clone().set(d),
			g = n.byIndex(l.get(), p);
		o(g);
	}
	return { distance: c, index: u };
}
function kd(a, t, e, i, n, r) {
	let s = 0;
	function o() {
		r.add(document, "keydown", c, !1), t.forEach(u);
	}
	function c(d) {
		d.code === "Tab" && (s = new Date().getTime());
	}
	function u(d) {
		const p = () => {
			if (new Date().getTime() - s > 10) return;
			a.scrollLeft = 0;
			const h = t.indexOf(d),
				m = e.findIndex((_) => _.includes(h));
			Ia(m) && (n.useDuration(0), i.index(m, 0));
		};
		r.add(d, "focus", p, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function Rs(a) {
	let t = a;
	function e() {
		return t;
	}
	function i(c) {
		t = s(c);
	}
	function n(c) {
		t += s(c);
	}
	function r(c) {
		t -= s(c);
	}
	function s(c) {
		return Ia(c) ? c : c.get();
	}
	return { get: e, set: i, add: n, subtract: r };
}
function gu(a, t, e) {
	const i = a.scroll === "x" ? s : o,
		n = e.style;
	let r = !1;
	function s(p) {
		return `translate3d(${p}px,0px,0px)`;
	}
	function o(p) {
		return `translate3d(0px,${p}px,0px)`;
	}
	function c(p) {
		r || (n.transform = i(t.apply(p)));
	}
	function u(p) {
		r = !p;
	}
	function f() {
		r ||
			((n.transform = ""),
			e.getAttribute("style") || e.removeAttribute("style"));
	}
	return { clear: f, to: c, toggleActive: u };
}
function Ed(a, t, e, i, n, r, s, o, c, u) {
	const d = is(r),
		p = is(r).reverse(),
		l = y().concat(S());
	function g(O, k) {
		return O.reduce((L, F) => L - r[F], k);
	}
	function h(O, k) {
		return O.reduce((L, F) => (g(L, k) > 0 ? L.concat([F]) : L), []);
	}
	function m(O) {
		return s.map((k, L) => ({
			start: k - n[L] + 0.5 + O,
			end: k + e - 0.5 + O,
		}));
	}
	function _(O, k, L) {
		const F = m(k);
		return O.map((D) => {
			const R = L ? 0 : -i,
				X = L ? i : 0,
				q = L ? "end" : "start",
				V = F[D][q];
			return {
				index: D,
				loopPoint: V,
				slideLocation: Rs(-1),
				translate: gu(a, t, u[D]),
				target: () => (c.get() > V ? R : X),
			};
		});
	}
	function y() {
		const O = o[0],
			k = h(p, O);
		return _(k, i, !1);
	}
	function S() {
		const O = e - o[0] - 1,
			k = h(d, O);
		return _(k, -i, !0);
	}
	function x() {
		return l.every(({ index: O }) => {
			const k = d.filter((L) => L !== O);
			return g(k, e) <= 0.1;
		});
	}
	function b() {
		l.forEach((O) => {
			const { target: k, translate: L, slideLocation: F } = O,
				D = k();
			D !== F.get() && (L.to(D), F.set(D));
		});
	}
	function P() {
		l.forEach((O) => O.translate.clear());
	}
	return { canLoop: x, clear: P, loop: b, loopPoints: l };
}
function Ad(a, t, e) {
	let i,
		n = !1;
	function r(c) {
		if (!e) return;
		function u(f) {
			for (const d of f)
				if (d.type === "childList") {
					c.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(i = new MutationObserver((f) => {
			n || ((Ra(e) || e(c, f)) && u(f));
		})),
			i.observe(a, { childList: !0 });
	}
	function s() {
		i && i.disconnect(), (n = !0);
	}
	return { init: r, destroy: s };
}
function Ld(a, t, e, i) {
	const n = {};
	let r = null,
		s = null,
		o,
		c = !1;
	function u() {
		(o = new IntersectionObserver(
			(g) => {
				c ||
					(g.forEach((h) => {
						const m = t.indexOf(h.target);
						n[m] = h;
					}),
					(r = null),
					(s = null),
					e.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: i },
		)),
			t.forEach((g) => o.observe(g));
	}
	function f() {
		o && o.disconnect(), (c = !0);
	}
	function d(g) {
		return ns(n).reduce((h, m) => {
			const _ = parseInt(m),
				{ isIntersecting: y } = n[_];
			return ((g && y) || (!g && !y)) && h.push(_), h;
		}, []);
	}
	function p(g = !0) {
		if (g && r) return r;
		if (!g && s) return s;
		const h = d(g);
		return g && (r = h), g || (s = h), h;
	}
	return { init: u, destroy: f, get: p };
}
function Id(a, t, e, i, n, r) {
	const { measureSize: s, startEdge: o, endEdge: c } = a,
		u = e[0] && n,
		f = g(),
		d = h(),
		p = e.map(s),
		l = m();
	function g() {
		if (!u) return 0;
		const y = e[0];
		return Yt(t[o] - y[o]);
	}
	function h() {
		if (!u) return 0;
		const y = r.getComputedStyle(wi(i));
		return parseFloat(y.getPropertyValue(`margin-${c}`));
	}
	function m() {
		return e
			.map((y, S, x) => {
				const b = !S,
					P = Fa(x, S);
				return b ? p[S] + f : P ? p[S] + d : x[S + 1][o] - y[o];
			})
			.map(Yt);
	}
	return { slideSizes: p, slideSizesWithGaps: l, startGap: f, endGap: d };
}
function Rd(a, t, e, i, n, r, s, o, c, u) {
	const { startEdge: f, endEdge: d } = a,
		p = Ia(i);
	function l(_, y) {
		return is(_)
			.filter((S) => S % y === 0)
			.map((S) => _.slice(S, S + y));
	}
	function g(_) {
		return _.length
			? is(_)
					.reduce((y, S) => {
						const x = wi(y) || 0,
							b = x === 0,
							P = S === ls(_),
							M = r[f] - s[x][f],
							O = r[f] - s[S][d],
							k = !n && b ? t.apply(o) : 0,
							L = !n && P ? t.apply(c) : 0;
						return (
							Yt(O - L - (M + k)) > e + u && y.push(S), P && y.push(_.length), y
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
function Nd(a, t, e, i, n, r, s) {
	const {
			align: o,
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
		} = r,
		P = 2,
		M = md(),
		O = M.measure(t),
		k = e.map(M.measure),
		L = pd(u),
		F = hd(c, u),
		D = F.measureSize(O),
		R = yd(D),
		X = fd(o, D),
		q = !d && !!y,
		V = d || !!y,
		{
			slideSizes: H,
			slideSizesWithGaps: tt,
			startGap: pt,
			endGap: T,
		} = Id(F, O, k, e, V, n),
		nt = Rd(F, L, D, m, d, O, k, pt, T, P),
		{ snaps: ut, snapsAligned: I } = Dd(F, X, O, k, nt),
		N = -wi(ut) + wi(tt),
		{ snapsContained: j, scrollContainLimit: J } = bd(D, N, I, y, P),
		U = q ? j : I,
		{ limit: G } = Td(N, U, d),
		lt = pu(ls(U), f, d),
		ft = lt.clone(),
		et = is(e),
		W = ({
			dragHandler: jt,
			scrollBody: pe,
			scrollBounds: gi,
			options: { loop: At },
		}) => {
			At || gi.constrain(jt.pointerDown()), pe.seek();
		},
		Z = (
			{
				scrollBody: jt,
				translate: pe,
				location: gi,
				offsetLocation: At,
				scrollLooper: Ti,
				slideLooper: Ue,
				dragHandler: Ge,
				animation: ze,
				eventHandler: Ke,
				options: { loop: Ce },
			},
			dt,
		) => {
			const ve = jt.velocity(),
				Nt = jt.settled();
			Nt && !Ge.pointerDown() && (ze.stop(), Ke.emit("settle")),
				Nt || Ke.emit("scroll"),
				At.set(gi.get() - ve + ve * dt),
				Ce && (Ti.loop(jt.direction()), Ue.loop()),
				pe.to(At.get());
		},
		ot = dd(
			i,
			n,
			() => W(re),
			(jt) => Z(re, jt),
		),
		st = 0.68,
		kt = U[lt.get()],
		C = Rs(kt),
		Mt = Rs(kt),
		Xt = Rs(kt),
		ce = xd(C, Mt, Xt, p, st),
		Et = Cd(d, U, N, G, Xt),
		Rt = Pd(ot, lt, ft, ce, Et, Xt, s),
		je = Md(G),
		Be = rs(),
		qt = Ld(t, e, s, h),
		{ slideRegistry: Wt } = Od(q, y, U, J, nt, et),
		Ct = kd(a, e, Wt, Rt, ce, Be),
		re = {
			ownerDocument: i,
			ownerWindow: n,
			eventHandler: s,
			containerRect: O,
			slideRects: k,
			animation: ot,
			axis: F,
			direction: L,
			dragHandler: gd(
				F,
				L,
				a,
				i,
				n,
				Xt,
				_d(F, n),
				C,
				ot,
				Rt,
				ce,
				Et,
				lt,
				s,
				R,
				l,
				g,
				_,
				st,
				b,
			),
			eventStore: Be,
			percentOfView: R,
			index: lt,
			indexPrevious: ft,
			limit: G,
			location: C,
			offsetLocation: Mt,
			options: r,
			resizeHandler: vd(t, s, n, e, F, S, M),
			scrollBody: ce,
			scrollBounds: wd(G, Mt, Xt, ce, R),
			scrollLooper: Sd(N, G, Mt, [C, Mt, Xt]),
			scrollProgress: je,
			scrollSnapList: U.map(je.get),
			scrollSnaps: U,
			scrollTarget: Et,
			scrollTo: Rt,
			slideLooper: Ed(F, L, D, N, H, tt, ut, U, Mt, e),
			slideFocus: Ct,
			slidesHandler: Ad(t, s, x),
			slidesInView: qt,
			slideIndexes: et,
			slideRegistry: Wt,
			slidesToScroll: nt,
			target: Xt,
			translate: gu(F, L, t),
		};
	return re;
}
function Fd() {
	const a = {};
	let t;
	function e(c) {
		t = c;
	}
	function i(c) {
		return a[c] || [];
	}
	function n(c) {
		return i(c).forEach((u) => u(t, c)), o;
	}
	function r(c, u) {
		return (a[c] = i(c).concat([u])), o;
	}
	function s(c, u) {
		return (a[c] = i(c).filter((f) => f !== u)), o;
	}
	const o = { init: e, emit: n, off: s, on: r };
	return o;
}
const Bd = {
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
function zd(a) {
	function t(r, s) {
		return du(r, s || {});
	}
	function e(r) {
		const s = r.breakpoints || {},
			o = ns(s)
				.filter((c) => a.matchMedia(c).matches)
				.map((c) => s[c])
				.reduce((c, u) => t(c, u), {});
		return t(r, o);
	}
	function i(r) {
		return r
			.map((s) => ns(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: i };
}
function Yd(a) {
	let t = [];
	function e(r, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(r, a)),
			s.reduce((o, c) => Object.assign(o, { [c.name]: c }), {})
		);
	}
	function i() {
		t = t.filter((r) => r.destroy());
	}
	return { init: e, destroy: i };
}
function Ba(a, t, e) {
	const i = a.ownerDocument,
		n = i.defaultView,
		r = zd(n),
		s = Yd(r),
		o = rs(),
		c = Fd(),
		{ mergeOptions: u, optionsAtMedia: f, optionsMediaQueries: d } = r,
		{ on: p, off: l, emit: g } = c,
		h = F;
	let m = !1,
		_,
		y = u(Bd, Ba.globalOptions),
		S = u(y),
		x = [],
		b,
		P,
		M;
	function O() {
		const { container: et, slides: W } = S;
		P = (na(et) ? a.querySelector(et) : et) || a.children[0];
		const ot = na(W) ? P.querySelectorAll(W) : W;
		M = [].slice.call(ot || P.children);
	}
	function k(et) {
		const W = Nd(a, P, M, i, n, et, c);
		if (et.loop && !W.slideLooper.canLoop()) {
			const Z = Object.assign({}, et, { loop: !1 });
			return k(Z);
		}
		return W;
	}
	function L(et, W) {
		m ||
			((y = u(y, et)),
			(S = f(y)),
			(x = W || x),
			O(),
			(_ = k(S)),
			d([y, ...x.map(({ options: Z }) => Z)]).forEach((Z) =>
				o.add(Z, "change", F),
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
				(b = s.init(ft, x))));
	}
	function F(et, W) {
		const Z = nt();
		D(), L(u({ startIndex: Z }, et), W), c.emit("reInit");
	}
	function D() {
		_.dragHandler.destroy(),
			_.eventStore.clear(),
			_.translate.clear(),
			_.slideLooper.clear(),
			_.resizeHandler.destroy(),
			_.slidesHandler.destroy(),
			_.slidesInView.destroy(),
			_.animation.destroy(),
			s.destroy(),
			o.clear();
	}
	function R() {
		m || ((m = !0), o.clear(), D(), c.emit("destroy"));
	}
	function X(et, W, Z) {
		!S.active ||
			m ||
			(_.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : S.duration),
			_.scrollTo.index(et, Z || 0));
	}
	function q(et) {
		const W = _.index.add(1).get();
		X(W, et, -1);
	}
	function V(et) {
		const W = _.index.add(-1).get();
		X(W, et, 1);
	}
	function H() {
		return _.index.add(1).get() !== nt();
	}
	function tt() {
		return _.index.add(-1).get() !== nt();
	}
	function pt() {
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
	function j() {
		return b;
	}
	function J() {
		return _;
	}
	function U() {
		return a;
	}
	function G() {
		return P;
	}
	function lt() {
		return M;
	}
	const ft = {
		canScrollNext: H,
		canScrollPrev: tt,
		containerNode: G,
		internalEngine: J,
		destroy: R,
		off: l,
		on: p,
		emit: g,
		plugins: j,
		previousScrollSnap: ut,
		reInit: h,
		rootNode: U,
		scrollNext: q,
		scrollPrev: V,
		scrollProgress: T,
		scrollSnapList: pt,
		scrollTo: X,
		selectedScrollSnap: nt,
		slideNodes: lt,
		slidesInView: I,
		slidesNotInView: N,
	};
	return L(t, e), setTimeout(() => c.emit("init"), 0), ft;
}
Ba.globalOptions = void 0;
const Xd = {
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
function za(a = {}) {
	let t,
		e,
		i,
		n = !1,
		r = !0,
		s = !1,
		o = 0,
		c = 0;
	function u(x, b) {
		e = x;
		const { mergeOptions: P, optionsAtMedia: M } = b,
			O = P(Xd, za.globalOptions),
			k = P(O, a);
		if (((t = M(k)), e.scrollSnapList().length <= 1)) return;
		(s = t.jump), (i = !1);
		const { eventStore: L, ownerDocument: F } = e.internalEngine(),
			D = e.rootNode(),
			R = (t.rootNode && t.rootNode(D)) || D,
			X = e.containerNode();
		e.on("pointerDown", p),
			t.stopOnInteraction || e.on("pointerUp", d),
			t.stopOnMouseEnter &&
				(L.add(R, "mouseenter", () => {
					(r = !1), p();
				}),
				t.stopOnInteraction ||
					L.add(R, "mouseleave", () => {
						(r = !0), d();
					})),
			t.stopOnFocusIn &&
				(L.add(X, "focusin", p),
				t.stopOnInteraction || L.add(X, "focusout", d)),
			L.add(F, "visibilitychange", l),
			t.playOnInit && e.on("init", d).on("reInit", d);
	}
	function f() {
		e.off("init", d).off("reInit", d).off("pointerDown", p).off("pointerUp", d),
			p(),
			cancelAnimationFrame(o),
			(o = 0),
			(i = !0),
			(n = !1);
	}
	function d() {
		if (i || !r) return;
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
		if (x.visibilityState === "hidden") return (r = n), p();
		r && d();
	}
	function g(x) {
		typeof x < "u" && (s = x), (r = !0), d();
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
		o = requestAnimationFrame(() => {
			const { index: x } = e.internalEngine(),
				b = x.clone().add(1).get(),
				P = e.scrollSnapList().length - 1;
			t.stopOnLastSnap && b === P && p(),
				e.canScrollNext() ? e.scrollNext(s) : e.scrollTo(0, s);
		});
	}
	return {
		name: "autoplay",
		options: a,
		init: u,
		destroy: f,
		play: g,
		stop: h,
		reset: m,
		isPlaying: _,
	};
}
za.globalOptions = void 0;
class qd {
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
const Gt = new qd();
function Hd(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function _u(a, t = 0) {
	const e = a.getBoundingClientRect(),
		i = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	Hd(i);
}
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var qi,
	Pn,
	Ya,
	so,
	Or,
	Ns,
	Qs,
	$r,
	xi = "transform",
	ra = xi + "Origin",
	mu,
	yu = function (t) {
		var e = t.ownerDocument || t;
		for (
			!(xi in t.style) &&
			("msTransform" in t.style) &&
			((xi = "msTransform"), (ra = xi + "Origin"));
			e.parentNode && (e = e.parentNode);

		);
		if (((Pn = window), (Qs = new Fn()), e)) {
			(qi = e),
				(Ya = e.documentElement),
				(so = e.body),
				($r = qi.createElementNS("http://www.w3.org/2000/svg", "g")),
				($r.style.transform = "none");
			var i = e.createElement("div"),
				n = e.createElement("div"),
				r = e && (e.body || e.firstElementChild);
			r &&
				r.appendChild &&
				(r.appendChild(i),
				i.appendChild(n),
				i.setAttribute(
					"style",
					"position:static;transform:translate3d(0,0,1px)",
				),
				(mu = n.offsetParent !== i),
				r.removeChild(i));
		}
		return e;
	},
	$d = function (t) {
		for (var e, i; t && t !== so; )
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
	vu = [],
	xu = [],
	Vd = function () {
		return Pn.pageYOffset || qi.scrollTop || Ya.scrollTop || so.scrollTop || 0;
	},
	Wd = function () {
		return (
			Pn.pageXOffset || qi.scrollLeft || Ya.scrollLeft || so.scrollLeft || 0
		);
	},
	Xa = function (t) {
		return (
			t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null)
		);
	},
	jd = function a(t) {
		if (Pn.getComputedStyle(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	So = function a(t, e) {
		if (t.parentNode && (qi || yu(t))) {
			var i = Xa(t),
				n = i
					? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				r = i ? (e ? "rect" : "g") : "div",
				s = e !== 2 ? 0 : 100,
				o = e === 3 ? 100 : 0,
				c =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				u = qi.createElementNS
					? qi.createElementNS(n.replace(/^https/, "http"), r)
					: qi.createElement(r);
			return (
				e &&
					(i
						? (Ns || (Ns = a(t)),
							u.setAttribute("width", 0.01),
							u.setAttribute("height", 0.01),
							u.setAttribute("transform", "translate(" + s + "," + o + ")"),
							Ns.appendChild(u))
						: (Or || ((Or = a(t)), (Or.style.cssText = c)),
							(u.style.cssText =
								c +
								"width:0.1px;height:0.1px;top:" +
								o +
								"px;left:" +
								s +
								"px"),
							Or.appendChild(u))),
				u
			);
		}
		throw "Need document and parent.";
	},
	Ud = function (t) {
		for (var e = new Fn(), i = 0; i < t.numberOfItems; i++)
			e.multiply(t.getItem(i).matrix);
		return e;
	},
	Gd = function (t) {
		var e = t.getCTM(),
			i;
		return (
			e ||
				((i = t.style[xi]),
				(t.style[xi] = "none"),
				t.appendChild($r),
				(e = $r.getCTM()),
				t.removeChild($r),
				i
					? (t.style[xi] = i)
					: t.style.removeProperty(
							xi.replace(/([A-Z])/g, "-$1").toLowerCase(),
						)),
			e || Qs.clone()
		);
	},
	Kd = function (t, e) {
		var i = Xa(t),
			n = t === i,
			r = i ? vu : xu,
			s = t.parentNode,
			o,
			c,
			u,
			f,
			d,
			p;
		if (t === Pn) return t;
		if (
			(r.length || r.push(So(t, 1), So(t, 2), So(t, 3)), (o = i ? Ns : Or), i)
		)
			n
				? ((u = Gd(t)), (f = -u.e / u.a), (d = -u.f / u.d), (c = Qs))
				: t.getBBox
					? ((u = t.getBBox()),
						(c = t.transform ? t.transform.baseVal : {}),
						(c = c.numberOfItems
							? c.numberOfItems > 1
								? Ud(c)
								: c.getItem(0).matrix
							: Qs),
						(f = c.a * u.x + c.c * u.y),
						(d = c.b * u.x + c.d * u.y))
					: ((c = new Fn()), (f = d = 0)),
				e && t.tagName.toLowerCase() === "g" && (f = d = 0),
				(n ? i : s).appendChild(o),
				o.setAttribute(
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
			if (((f = d = 0), mu))
				for (
					c = t.offsetParent, u = t;
					u && (u = u.parentNode) && u !== c && u.parentNode;

				)
					(Pn.getComputedStyle(u)[xi] + "").length > 4 &&
						((f = u.offsetLeft), (d = u.offsetTop), (u = 0));
			if (
				((p = Pn.getComputedStyle(t)),
				p.position !== "absolute" && p.position !== "fixed")
			)
				for (c = t.offsetParent; s && s !== c; )
					(f += s.scrollLeft || 0), (d += s.scrollTop || 0), (s = s.parentNode);
			(u = o.style),
				(u.top = t.offsetTop - d + "px"),
				(u.left = t.offsetLeft - f + "px"),
				(u[xi] = p[xi]),
				(u[ra] = p[ra]),
				(u.position = p.position === "fixed" ? "fixed" : "absolute"),
				t.parentNode.appendChild(o);
		}
		return o;
	},
	Mo = function (t, e, i, n, r, s, o) {
		return (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = s), (t.f = o), t;
	},
	Fn = (function () {
		function a(e, i, n, r, s, o) {
			e === void 0 && (e = 1),
				i === void 0 && (i = 0),
				n === void 0 && (n = 0),
				r === void 0 && (r = 1),
				s === void 0 && (s = 0),
				o === void 0 && (o = 0),
				Mo(this, e, i, n, r, s, o);
		}
		var t = a.prototype;
		return (
			(t.inverse = function () {
				var i = this.a,
					n = this.b,
					r = this.c,
					s = this.d,
					o = this.e,
					c = this.f,
					u = i * s - n * r || 1e-10;
				return Mo(
					this,
					s / u,
					-n / u,
					-r / u,
					i / u,
					(r * c - s * o) / u,
					-(i * c - n * o) / u,
				);
			}),
			(t.multiply = function (i) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f,
					f = i.a,
					d = i.c,
					p = i.b,
					l = i.d,
					g = i.e,
					h = i.f;
				return Mo(
					this,
					f * n + p * s,
					f * r + p * o,
					d * n + l * s,
					d * r + l * o,
					c + g * n + h * s,
					u + g * r + h * o,
				);
			}),
			(t.clone = function () {
				return new a(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(t.equals = function (i) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f;
				return (
					n === i.a &&
					r === i.b &&
					s === i.c &&
					o === i.d &&
					c === i.e &&
					u === i.f
				);
			}),
			(t.apply = function (i, n) {
				n === void 0 && (n = {});
				var r = i.x,
					s = i.y,
					o = this.a,
					c = this.b,
					u = this.c,
					f = this.d,
					d = this.e,
					p = this.f;
				return (
					(n.x = r * o + s * u + d || 0), (n.y = r * c + s * f + p || 0), n
				);
			}),
			a
		);
	})();
function vn(a, t, e, i) {
	if (!a || !a.parentNode || (qi || yu(a)).documentElement === a)
		return new Fn();
	var n = $d(a),
		r = Xa(a),
		s = r ? vu : xu,
		o = Kd(a, e),
		c = s[0].getBoundingClientRect(),
		u = s[1].getBoundingClientRect(),
		f = s[2].getBoundingClientRect(),
		d = o.parentNode,
		p = !i && jd(a),
		l = new Fn(
			(u.left - c.left) / 100,
			(u.top - c.top) / 100,
			(f.left - c.left) / 100,
			(f.top - c.top) / 100,
			c.left + (p ? 0 : Wd()),
			c.top + (p ? 0 : Vd()),
		);
	if ((d.removeChild(o), n))
		for (c = n.length; c--; )
			(u = n[c]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
	return t ? l.inverse() : l;
}
function Ol(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function Qd(a, t) {
	(a.prototype = Object.create(t.prototype)),
		(a.prototype.constructor = a),
		(a.__proto__ = t);
}
var Tt,
	It,
	ii,
	bi,
	Hi,
	Do,
	zi,
	sa,
	Cr,
	nn,
	wu,
	oa,
	ss,
	qa,
	Pr,
	mi,
	kr,
	Fs,
	bu,
	aa,
	Zs = 0,
	Tu = function () {
		return typeof window < "u";
	},
	Su = function () {
		return Tt || (Tu() && (Tt = window.gsap) && Tt.registerPlugin && Tt);
	},
	Ki = function (t) {
		return typeof t == "function";
	},
	Vr = function (t) {
		return typeof t == "object";
	},
	vi = function (t) {
		return typeof t > "u";
	},
	Bs = function () {
		return !1;
	},
	Wr = "transform",
	la = "transformOrigin",
	ji = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	yr = Array.isArray,
	Ss = function (t, e) {
		var i = ii.createElementNS
			? ii.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: ii.createElement(t);
		return i.style ? i : ii.createElement(t);
	},
	Cl = 180 / Math.PI,
	pn = 1e20,
	Zd = new Fn(),
	Ui =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	kn = [],
	er = {},
	Jd = 0,
	th = /^(?:a|input|textarea|button|select)$/i,
	Pl = 0,
	qn = {},
	Ni = {},
	Mu = function (t, e) {
		var i = {},
			n;
		for (n in t) i[n] = e ? t[n] * e : t[n];
		return i;
	},
	eh = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	kl = function a(t, e) {
		for (var i = t.length, n; i--; )
			e
				? (t[i].style.touchAction = e)
				: t[i].style.removeProperty("touch-action"),
				(n = t[i].children),
				n && n.length && a(n, e);
	},
	Du = function () {
		return kn.forEach(function (t) {
			return t();
		});
	},
	ih = function (t) {
		kn.push(t), kn.length === 1 && Tt.ticker.add(Du);
	},
	El = function () {
		return !kn.length && Tt.ticker.remove(Du);
	},
	Al = function (t) {
		for (var e = kn.length; e--; ) kn[e] === t && kn.splice(e, 1);
		Tt.to(El, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: El,
			data: "_draggable",
		});
	},
	nh = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	ae = function (t, e, i, n) {
		if (t.addEventListener) {
			var r = ss[e];
			(n = n || (wu ? { passive: !1 } : null)),
				t.addEventListener(r || e, i, n),
				r && e !== r && t.addEventListener(e, i, n);
		}
	},
	ee = function (t, e, i, n) {
		if (t.removeEventListener) {
			var r = ss[e];
			t.removeEventListener(r || e, i, n),
				r && e !== r && t.removeEventListener(e, i, n);
		}
	},
	oi = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	rh = function (t, e) {
		for (var i = t.length; i--; ) if (t[i].identifier === e) return !0;
	},
	sh = function a(t) {
		(qa = t.touches && Zs < t.touches.length), ee(t.target, "touchend", a);
	},
	Ll = function (t) {
		(qa = t.touches && Zs < t.touches.length), ae(t.target, "touchend", sh);
	},
	ir = function (t) {
		return (
			It.pageYOffset ||
			t.scrollTop ||
			t.documentElement.scrollTop ||
			t.body.scrollTop ||
			0
		);
	},
	nr = function (t) {
		return (
			It.pageXOffset ||
			t.scrollLeft ||
			t.documentElement.scrollLeft ||
			t.body.scrollLeft ||
			0
		);
	},
	Il = function a(t, e) {
		ae(t, "scroll", e), ur(t.parentNode) || a(t.parentNode, e);
	},
	Rl = function a(t, e) {
		ee(t, "scroll", e), ur(t.parentNode) || a(t.parentNode, e);
	},
	ur = function (t) {
		return (
			!t ||
			t === bi ||
			t.nodeType === 9 ||
			t === ii.body ||
			t === It ||
			!t.nodeType ||
			!t.parentNode
		);
	},
	Nl = function (t, e) {
		var i = e === "x" ? "Width" : "Height",
			n = "scroll" + i,
			r = "client" + i;
		return Math.max(
			0,
			ur(t)
				? Math.max(bi[n], Hi[n]) - (It["inner" + i] || bi[r] || Hi[r])
				: t[n] - t[r],
		);
	},
	Oo = function a(t, e) {
		var i = Nl(t, "x"),
			n = Nl(t, "y");
		ur(t) ? (t = Ni) : a(t.parentNode, e),
			(t._gsMaxScrollX = i),
			(t._gsMaxScrollY = n),
			e ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	Co = function (t, e, i) {
		var n = t.style;
		n &&
			(vi(n[e]) && (e = Cr(e, t) || e),
			i == null
				? n.removeProperty &&
					n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (n[e] = i));
	},
	os = function (t) {
		return It.getComputedStyle(
			t instanceof Element ? t : t.host || (t.parentNode || {}).host || t,
		);
	},
	gn = {},
	Hn = function (t) {
		if (t === It)
			return (
				(gn.left = gn.top = 0),
				(gn.width = gn.right =
					bi.clientWidth || t.innerWidth || Hi.clientWidth || 0),
				(gn.height = gn.bottom =
					(t.innerHeight || 0) - 20 < bi.clientHeight
						? bi.clientHeight
						: t.innerHeight || Hi.clientHeight || 0),
				gn
			);
		var e = t.ownerDocument || ii,
			i = vi(t.pageX)
				? !t.nodeType && !vi(t.left) && !vi(t.top)
					? t
					: nn(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - nr(e),
						top: t.pageY - ir(e),
						right: t.pageX - nr(e) + 1,
						bottom: t.pageY - ir(e) + 1,
					};
		return (
			vi(i.right) && !vi(i.width)
				? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
				: vi(i.width) &&
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
	Qt = function (t, e, i) {
		var n = t.vars,
			r = n[i],
			s = t._listeners[e],
			o;
		return (
			Ki(r) &&
				(o = r.apply(
					n.callbackScope || t,
					n[i + "Params"] || [t.pointerEvent],
				)),
			s && t.dispatchEvent(e) === !1 && (o = !1),
			o
		);
	},
	Fl = function (t, e) {
		var i = nn(t)[0],
			n,
			r,
			s;
		return !i.nodeType && i !== It
			? vi(t.left)
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
			: oh(i, e);
	},
	ai = {},
	oh = function (t, e) {
		e = nn(e)[0];
		var i = t.getBBox && t.ownerSVGElement,
			n = t.ownerDocument || ii,
			r,
			s,
			o,
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
			(o = ir(n)),
				(r = nr(n)),
				(s =
					r +
					(n.documentElement.clientWidth ||
						t.innerWidth ||
						n.body.clientWidth ||
						0)),
				(c =
					o +
					((t.innerHeight || 0) - 20 < n.documentElement.clientHeight
						? n.documentElement.clientHeight
						: t.innerHeight || n.body.clientHeight || 0));
		else {
			if (e === It || vi(e)) return t.getBoundingClientRect();
			(r = o = 0),
				i
					? ((g = t.getBBox()), (h = g.width), (m = g.height))
					: (t.viewBox &&
							(g = t.viewBox.baseVal) &&
							((r = g.x || 0), (o = g.y || 0), (h = g.width), (m = g.height)),
						h ||
							((_ = os(t)),
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
				(s = h),
				(c = m);
		}
		return t === e
			? { left: r, top: o, width: s - r, height: c - o }
			: ((u = vn(e, !0).multiply(vn(t))),
				(f = u.apply({ x: r, y: o })),
				(d = u.apply({ x: s, y: o })),
				(p = u.apply({ x: s, y: c })),
				(l = u.apply({ x: r, y: c })),
				(r = Math.min(f.x, d.x, p.x, l.x)),
				(o = Math.min(f.y, d.y, p.y, l.y)),
				{
					left: r,
					top: o,
					width: Math.max(f.x, d.x, p.x, l.x) - r,
					height: Math.max(f.y, d.y, p.y, l.y) - o,
				});
	},
	Po = function (t, e, i, n, r, s) {
		var o = {},
			c,
			u,
			f;
		if (e)
			if (r !== 1 && e instanceof Array) {
				if (((o.end = c = []), (f = e.length), Vr(e[0])))
					for (u = 0; u < f; u++) c[u] = Mu(e[u], r);
				else for (u = 0; u < f; u++) c[u] = e[u] * r;
				(i += 1.1), (n -= 1.1);
			} else
				Ki(e)
					? (o.end = function (d) {
							var p = e.call(t, d),
								l,
								g;
							if (r !== 1)
								if (Vr(p)) {
									l = {};
									for (g in p) l[g] = p[g] * r;
									p = l;
								} else p *= r;
							return p;
						})
					: (o.end = e);
		return (
			(i || i === 0) && (o.max = i),
			(n || n === 0) && (o.min = n),
			s && (o.velocity = 0),
			o
		);
	},
	ah = function a(t) {
		var e;
		return !t || !t.getAttribute || t === Hi
			? !1
			: (e = t.getAttribute("data-clickable")) === "true" ||
				  (e !== "false" &&
						(th.test(t.nodeName + "") ||
							t.getAttribute("contentEditable") === "true"))
				? !0
				: a(t.parentNode);
	},
	Ms = function (t, e) {
		for (var i = t.length, n; i--; )
			(n = t[i]),
				(n.ondragstart = n.onselectstart = e ? null : Bs),
				Tt.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
	},
	lh = function a(t) {
		if (os(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	Ou,
	ca,
	ch = function (t, e) {
		(t = Tt.utils.toArray(t)[0]), (e = e || {});
		var i = document.createElement("div"),
			n = i.style,
			r = t.firstChild,
			s = 0,
			o = 0,
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
		Ou && e.force3D !== !1
			? ((S = "translate3d("), (x = "px,0px)"))
			: Wr && ((S = "translate("), (x = "px)")),
			(this.scrollTop = function (b, P) {
				if (!arguments.length) return -this.top();
				this.top(-b, P);
			}),
			(this.scrollLeft = function (b, P) {
				if (!arguments.length) return -this.left();
				this.left(-b, P);
			}),
			(this.left = function (b, P) {
				if (!arguments.length) return -(t.scrollLeft + o);
				var M = t.scrollLeft - u,
					O = o;
				if ((M > 2 || M < -2) && !P) {
					(u = t.scrollLeft),
						Tt.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-u),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((o = (b - 0.5) | 0), (b = 0))
						: b > l
							? ((o = (b - l) | 0), (b = l))
							: (o = 0),
					(o || O) &&
						(this._skip || (n[Wr] = S + -o + "px," + -s + x),
						o + p >= 0 && (n.paddingRight = o + p + "px")),
					(t.scrollLeft = b | 0),
					(u = t.scrollLeft);
			}),
			(this.top = function (b, P) {
				if (!arguments.length) return -(t.scrollTop + s);
				var M = t.scrollTop - c,
					O = s;
				if ((M > 2 || M < -2) && !P) {
					(c = t.scrollTop),
						Tt.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-c),
						e.onKill && e.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((s = (b - 0.5) | 0), (b = 0))
						: b > g
							? ((s = (b - g) | 0), (b = g))
							: (s = 0),
					(s || O) && (this._skip || (n[Wr] = S + -o + "px," + -s + x)),
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
				for (r = i.firstChild; r; )
					(y = r.nextSibling), t.appendChild(r), (r = y);
				t === i.parentNode && t.removeChild(i);
			}),
			(this.enable = function () {
				if (((r = t.firstChild), r !== i)) {
					for (; r; ) (y = r.nextSibling), i.appendChild(r), (r = y);
					t.appendChild(i), this.calibrate();
				}
			}),
			(this.calibrate = function (b) {
				var P = t.clientWidth === h,
					M,
					O,
					k;
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
						((s || o) &&
							((O = this.left()),
							(k = this.top()),
							this.left(-t.scrollLeft),
							this.top(-t.scrollTop)),
						(M = os(t)),
						(!P || b) &&
							((n.display = "block"),
							(n.width = "auto"),
							(n.paddingRight = "0px"),
							(p = Math.max(0, t.scrollWidth - t.clientWidth)),
							p &&
								(p +=
									parseFloat(M.paddingLeft) +
									(ca ? parseFloat(M.paddingRight) : 0))),
						(n.display = "inline-block"),
						(n.position = "relative"),
						(n.overflow = "visible"),
						(n.verticalAlign = "top"),
						(n.boxSizing = "content-box"),
						(n.width = "100%"),
						(n.paddingRight = p + "px"),
						ca && (n.paddingBottom = M.paddingBottom),
						(h = t.clientWidth),
						(m = t.clientHeight),
						(f = t.scrollWidth),
						(d = t.scrollHeight),
						(l = t.scrollWidth - h),
						(g = t.scrollHeight - m),
						(_ = i.offsetHeight),
						(n.display = "block"),
						(O || k) && (this.left(O), this.top(k)));
			}),
			(this.content = i),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	ko = function (t) {
		if (Tu() && document.body) {
			var e = window && window.navigator;
			(It = window),
				(ii = document),
				(bi = ii.documentElement),
				(Hi = ii.body),
				(Do = Ss("div")),
				(Fs = !!window.PointerEvent),
				(zi = Ss("div")),
				(zi.style.cssText =
					"visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
				(kr = zi.style.cursor === "grab" ? "grab" : "move"),
				(Pr = e && e.userAgent.toLowerCase().indexOf("android") !== -1),
				(oa =
					("ontouchstart" in bi && "orientation" in It) ||
					(e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
				(ca = (function () {
					var i = Ss("div"),
						n = Ss("div"),
						r = n.style,
						s = Hi,
						o;
					return (
						(r.display = "inline-block"),
						(r.position = "relative"),
						(i.style.cssText =
							"width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
						i.appendChild(n),
						s.appendChild(i),
						(o = n.offsetHeight + 18 > i.scrollHeight),
						s.removeChild(i),
						o
					);
				})()),
				(ss = (function (i) {
					for (
						var n = i.split(","),
							r = (
								("onpointerdown" in Do)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in Do)
										? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
										: i
							).split(","),
							s = {},
							o = 4;
						--o > -1;

					)
						(s[n[o]] = r[o]), (s[r[o]] = n[o]);
					try {
						bi.addEventListener(
							"test",
							null,
							Object.defineProperty({}, "passive", {
								get: function () {
									wu = 1;
								},
							}),
						);
					} catch {}
					return s;
				})("touchstart,touchmove,touchend,touchcancel")),
				ae(ii, "touchcancel", Bs),
				ae(It, "touchmove", Bs),
				Hi && Hi.addEventListener("touchstart", Bs),
				ae(ii, "contextmenu", function () {
					for (var i in er) er[i].isPressed && er[i].endDrag();
				}),
				(Tt = sa = Su());
		}
		Tt
			? ((mi = Tt.plugins.inertia),
				(bu = Tt.core.context || function () {}),
				(Cr = Tt.utils.checkPrefix),
				(Wr = Cr(Wr)),
				(la = Cr(la)),
				(nn = Tt.utils.toArray),
				(aa = Tt.core.getStyleSaver),
				(Ou = !!Cr("perspective")))
			: t && console.warn("Please gsap.registerPlugin(Draggable)");
	},
	uh = (function () {
		function a(e) {
			(this._listeners = {}), (this.target = e || this);
		}
		var t = a.prototype;
		return (
			(t.addEventListener = function (i, n) {
				var r = this._listeners[i] || (this._listeners[i] = []);
				~r.indexOf(n) || r.push(n);
			}),
			(t.removeEventListener = function (i, n) {
				var r = this._listeners[i],
					s = r && r.indexOf(n);
				s >= 0 && r.splice(s, 1);
			}),
			(t.dispatchEvent = function (i) {
				var n = this,
					r;
				return (
					(this._listeners[i] || []).forEach(function (s) {
						return s.call(n, { type: i, target: n.target }) === !1 && (r = !1);
					}),
					r
				);
			}),
			a
		);
	})(),
	fr = (function (a) {
		Qd(t, a);
		function t(e, i) {
			var n;
			(n = a.call(this) || this),
				sa || ko(1),
				(e = nn(e)[0]),
				(n.styles = aa && aa(e, "transform,left,top")),
				mi || (mi = Tt.plugins.inertia),
				(n.vars = i = Mu(i || {})),
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
			var r = (i.type || "x,y").toLowerCase(),
				s = ~r.indexOf("x") || ~r.indexOf("y"),
				o = r.indexOf("rotation") !== -1,
				c = o ? "rotation" : s ? "x" : "left",
				u = s ? "y" : "top",
				f = !!(~r.indexOf("x") || ~r.indexOf("left") || r === "scroll"),
				d = !!(~r.indexOf("y") || ~r.indexOf("top") || r === "scroll"),
				p = i.minimumMovement || 2,
				l = Ol(n),
				g = nn(i.trigger || i.handle || e),
				h = {},
				m = 0,
				_ = !1,
				y = i.autoScrollMarginTop || 40,
				S = i.autoScrollMarginRight || 40,
				x = i.autoScrollMarginBottom || 40,
				b = i.autoScrollMarginLeft || 40,
				P = i.clickableTest || ah,
				M = 0,
				O = e._gsap || Tt.core.getCache(e),
				k = lh(e),
				L = function (v, Y) {
					return parseFloat(O.get(e, v, Y));
				},
				F = e.ownerDocument || ii,
				D,
				R,
				X,
				q,
				V,
				H,
				tt,
				pt,
				T,
				nt,
				ut,
				I,
				N,
				j,
				J,
				U,
				G,
				lt,
				ft,
				et,
				W,
				Z,
				ot,
				st,
				kt,
				C,
				Mt,
				Xt,
				ce,
				Et,
				Rt,
				je,
				Be,
				qt = function (v) {
					return (
						oi(v),
						v.stopImmediatePropagation && v.stopImmediatePropagation(),
						!1
					);
				},
				Wt = function at(v) {
					if (l.autoScroll && l.isDragging && (_ || G)) {
						var Y = e,
							w = l.autoScroll * 15,
							E,
							z,
							A,
							$,
							B,
							K,
							ct,
							rt;
						for (
							_ = !1,
								Ni.scrollTop =
									It.pageYOffset != null
										? It.pageYOffset
										: F.documentElement.scrollTop != null
											? F.documentElement.scrollTop
											: F.body.scrollTop,
								Ni.scrollLeft =
									It.pageXOffset != null
										? It.pageXOffset
										: F.documentElement.scrollLeft != null
											? F.documentElement.scrollLeft
											: F.body.scrollLeft,
								$ = l.pointerX - Ni.scrollLeft,
								B = l.pointerY - Ni.scrollTop;
							Y && !z;

						)
							(z = ur(Y.parentNode)),
								(E = z ? Ni : Y.parentNode),
								(A = z
									? {
											bottom: Math.max(bi.clientHeight, It.innerHeight || 0),
											right: Math.max(bi.clientWidth, It.innerWidth || 0),
											left: 0,
											top: 0,
										}
									: E.getBoundingClientRect()),
								(K = ct = 0),
								d &&
									((rt = E._gsMaxScrollY - E.scrollTop),
									rt < 0
										? (ct = rt)
										: B > A.bottom - x && rt
											? ((_ = !0),
												(ct = Math.min(
													rt,
													(w * (1 - Math.max(0, A.bottom - B) / x)) | 0,
												)))
											: B < A.top + y &&
												E.scrollTop &&
												((_ = !0),
												(ct = -Math.min(
													E.scrollTop,
													(w * (1 - Math.max(0, B - A.top) / y)) | 0,
												))),
									ct && (E.scrollTop += ct)),
								f &&
									((rt = E._gsMaxScrollX - E.scrollLeft),
									rt < 0
										? (K = rt)
										: $ > A.right - S && rt
											? ((_ = !0),
												(K = Math.min(
													rt,
													(w * (1 - Math.max(0, A.right - $) / S)) | 0,
												)))
											: $ < A.left + b &&
												E.scrollLeft &&
												((_ = !0),
												(K = -Math.min(
													E.scrollLeft,
													(w * (1 - Math.max(0, $ - A.left) / b)) | 0,
												))),
									K && (E.scrollLeft += K)),
								z &&
									(K || ct) &&
									(It.scrollTo(E.scrollLeft, E.scrollTop),
									ve(l.pointerX + K, l.pointerY + ct)),
								(Y = E);
					}
					if (G) {
						var gt = l.x,
							Dt = l.y;
						o
							? ((l.deltaX = gt - parseFloat(O.rotation)),
								(l.rotation = gt),
								(O.rotation = gt + "deg"),
								O.renderTransform(1, O))
							: R
								? (d && ((l.deltaY = Dt - R.top()), R.top(Dt)),
									f && ((l.deltaX = gt - R.left()), R.left(gt)))
								: s
									? (d &&
											((l.deltaY = Dt - parseFloat(O.y)), (O.y = Dt + "px")),
										f && ((l.deltaX = gt - parseFloat(O.x)), (O.x = gt + "px")),
										O.renderTransform(1, O))
									: (d &&
											((l.deltaY = Dt - parseFloat(e.style.top || 0)),
											(e.style.top = Dt + "px")),
										f &&
											((l.deltaX = gt - parseFloat(e.style.left || 0)),
											(e.style.left = gt + "px"))),
							pt &&
								!v &&
								!Xt &&
								((Xt = !0),
								Qt(l, "drag", "onDrag") === !1 &&
									(f && (l.x -= l.deltaX), d && (l.y -= l.deltaY), at(!0)),
								(Xt = !1));
					}
					G = !1;
				},
				Ct = function (v, Y) {
					var w = l.x,
						E = l.y,
						z,
						A;
					e._gsap || (O = Tt.core.getCache(e)),
						O.uncache && Tt.getProperty(e, "x"),
						s
							? ((l.x = parseFloat(O.x)), (l.y = parseFloat(O.y)))
							: o
								? (l.x = l.rotation = parseFloat(O.rotation))
								: R
									? ((l.y = R.top()), (l.x = R.left()))
									: ((l.y =
											parseFloat(e.style.top || ((A = os(e)) && A.top)) || 0),
										(l.x = parseFloat(e.style.left || (A || {}).left) || 0)),
						(ft || et || W) &&
							!Y &&
							(l.isDragging || l.isThrowing) &&
							(W &&
								((qn.x = l.x),
								(qn.y = l.y),
								(z = W(qn)),
								z.x !== l.x && ((l.x = z.x), (G = !0)),
								z.y !== l.y && ((l.y = z.y), (G = !0))),
							ft &&
								((z = ft(l.x)),
								z !== l.x && ((l.x = z), o && (l.rotation = z), (G = !0))),
							et && ((z = et(l.y)), z !== l.y && (l.y = z), (G = !0))),
						G && Wt(!0),
						v ||
							((l.deltaX = l.x - w),
							(l.deltaY = l.y - E),
							Qt(l, "throwupdate", "onThrowUpdate"));
				},
				re = function (v, Y, w, E) {
					return (
						Y == null && (Y = -pn),
						w == null && (w = pn),
						Ki(v)
							? function (z) {
									var A = l.isPressed ? 1 - l.edgeResistance : 1;
									return (
										v.call(
											l,
											(z > w ? w + (z - w) * A : z < Y ? Y + (z - Y) * A : z) *
												E,
										) * E
									);
								}
							: yr(v)
								? function (z) {
										for (var A = v.length, $ = 0, B = pn, K, ct; --A > -1; )
											(K = v[A]),
												(ct = K - z),
												ct < 0 && (ct = -ct),
												ct < B && K >= Y && K <= w && (($ = A), (B = ct));
										return v[$];
									}
								: isNaN(v)
									? function (z) {
											return z;
										}
									: function () {
											return v * E;
										}
					);
				},
				jt = function (v, Y, w, E, z, A, $) {
					return (
						(A = A && A < pn ? A * A : pn),
						Ki(v)
							? function (B) {
									var K = l.isPressed ? 1 - l.edgeResistance : 1,
										ct = B.x,
										rt = B.y,
										gt,
										Dt,
										Ot;
									return (
										(B.x = ct =
											ct > w
												? w + (ct - w) * K
												: ct < Y
													? Y + (ct - Y) * K
													: ct),
										(B.y = rt =
											rt > z
												? z + (rt - z) * K
												: rt < E
													? E + (rt - E) * K
													: rt),
										(gt = v.call(l, B)),
										gt !== B && ((B.x = gt.x), (B.y = gt.y)),
										$ !== 1 && ((B.x *= $), (B.y *= $)),
										A < pn &&
											((Dt = B.x - ct),
											(Ot = B.y - rt),
											Dt * Dt + Ot * Ot > A && ((B.x = ct), (B.y = rt))),
										B
									);
								}
							: yr(v)
								? function (B) {
										for (
											var K = v.length, ct = 0, rt = pn, gt, Dt, Ot, yt;
											--K > -1;

										)
											(Ot = v[K]),
												(gt = Ot.x - B.x),
												(Dt = Ot.y - B.y),
												(yt = gt * gt + Dt * Dt),
												yt < rt && ((ct = K), (rt = yt));
										return rt <= A ? v[ct] : B;
									}
								: function (B) {
										return B;
									}
					);
				},
				pe = function () {
					var v, Y, w, E;
					(tt = !1),
						R
							? (R.calibrate(),
								(l.minX = ut = -R.maxScrollLeft()),
								(l.minY = N = -R.maxScrollTop()),
								(l.maxX = nt = l.maxY = I = 0),
								(tt = !0))
							: i.bounds &&
								((v = Fl(i.bounds, e.parentNode)),
								o
									? ((l.minX = ut = v.left),
										(l.maxX = nt = v.left + v.width),
										(l.minY = N = l.maxY = I = 0))
									: !vi(i.bounds.maxX) || !vi(i.bounds.maxY)
										? ((v = i.bounds),
											(l.minX = ut = v.minX),
											(l.minY = N = v.minY),
											(l.maxX = nt = v.maxX),
											(l.maxY = I = v.maxY))
										: ((Y = Fl(e, e.parentNode)),
											(l.minX = ut = Math.round(L(c, "px") + v.left - Y.left)),
											(l.minY = N = Math.round(L(u, "px") + v.top - Y.top)),
											(l.maxX = nt = Math.round(ut + (v.width - Y.width))),
											(l.maxY = I = Math.round(N + (v.height - Y.height)))),
								ut > nt && ((l.minX = nt), (l.maxX = nt = ut), (ut = l.minX)),
								N > I && ((l.minY = I), (l.maxY = I = N), (N = l.minY)),
								o && ((l.minRotation = ut), (l.maxRotation = nt)),
								(tt = !0)),
						i.liveSnap &&
							((w = i.liveSnap === !0 ? i.snap || {} : i.liveSnap),
							(E = yr(w) || Ki(w)),
							o
								? ((ft = re(E ? w : w.rotation, ut, nt, 1)), (et = null))
								: w.points
									? (W = jt(
											E ? w : w.points,
											ut,
											nt,
											N,
											I,
											w.radius,
											R ? -1 : 1,
										))
									: (f &&
											(ft = re(
												E ? w : w.x || w.left || w.scrollLeft,
												ut,
												nt,
												R ? -1 : 1,
											)),
										d &&
											(et = re(
												E ? w : w.y || w.top || w.scrollTop,
												N,
												I,
												R ? -1 : 1,
											))));
				},
				gi = function () {
					(l.isThrowing = !1), Qt(l, "throwcomplete", "onThrowComplete");
				},
				At = function () {
					l.isThrowing = !1;
				},
				Ti = function (v, Y) {
					var w, E, z, A;
					v && mi
						? (v === !0 &&
								((w = i.snap || i.liveSnap || {}),
								(E = yr(w) || Ki(w)),
								(v = {
									resistance:
										(i.throwResistance || i.resistance || 1e3) / (o ? 10 : 1),
								}),
								o
									? (v.rotation = Po(l, E ? w : w.rotation, nt, ut, 1, Y))
									: (f &&
											(v[c] = Po(
												l,
												E ? w : w.points || w.x || w.left,
												nt,
												ut,
												R ? -1 : 1,
												Y || l.lockedAxis === "x",
											)),
										d &&
											(v[u] = Po(
												l,
												E ? w : w.points || w.y || w.top,
												I,
												N,
												R ? -1 : 1,
												Y || l.lockedAxis === "y",
											)),
										(w.points || (yr(w) && Vr(w[0]))) &&
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
										? A === 0 || (Vr(v) && v.resistance > 1e3)
											? 0
											: 0.5
										: i.minDuration,
									overshoot: A,
								}),
							(l.tween = z =
								Tt.to(R || e, {
									inertia: v,
									data: "_draggable",
									inherit: !1,
									onComplete: gi,
									onInterrupt: At,
									onUpdate: i.fastMode ? Qt : Ct,
									onUpdateParams: i.fastMode
										? [l, "onthrowupdate", "onThrowUpdate"]
										: w && w.radius
											? [!1, !0]
											: [],
								})),
							i.fastMode ||
								(R && (R._skip = !0),
								z.render(1e9, !0, !0),
								Ct(!0, !0),
								(l.endX = l.x),
								(l.endY = l.y),
								o && (l.endRotation = l.x),
								z.play(0),
								Ct(!0, !0),
								R && (R._skip = !1)))
						: tt && l.applyBounds();
				},
				Ue = function (v) {
					var Y = st,
						w;
					(st = vn(e.parentNode, !0)),
						v &&
							l.isPressed &&
							!st.equals(Y || new Fn()) &&
							((w = Y.inverse().apply({ x: X, y: q })),
							st.apply(w, w),
							(X = w.x),
							(q = w.y)),
						st.equals(Zd) && (st = null);
				},
				Ge = function () {
					var v = 1 - l.edgeResistance,
						Y = k ? nr(F) : 0,
						w = k ? ir(F) : 0,
						E,
						z,
						A;
					s &&
						((O.x = L(c, "px") + "px"),
						(O.y = L(u, "px") + "px"),
						O.renderTransform()),
						Ue(!1),
						(ai.x = l.pointerX - Y),
						(ai.y = l.pointerY - w),
						st && st.apply(ai, ai),
						(X = ai.x),
						(q = ai.y),
						G && (ve(l.pointerX, l.pointerY), Wt(!0)),
						(je = vn(e)),
						R
							? (pe(), (H = R.top()), (V = R.left()))
							: (ze() ? (Ct(!0, !0), pe()) : l.applyBounds(),
								o
									? ((E = e.ownerSVGElement
											? [O.xOrigin - e.getBBox().x, O.yOrigin - e.getBBox().y]
											: (os(e)[la] || "0 0").split(" ")),
										(U = l.rotationOrigin =
											vn(e).apply({
												x: parseFloat(E[0]) || 0,
												y: parseFloat(E[1]) || 0,
											})),
										Ct(!0, !0),
										(z = l.pointerX - U.x - Y),
										(A = U.y - l.pointerY + w),
										(V = l.x),
										(H = l.y = Math.atan2(A, z) * Cl))
									: ((H = L(u, "px")), (V = L(c, "px")))),
						tt &&
							v &&
							(V > nt
								? (V = nt + (V - nt) / v)
								: V < ut && (V = ut - (ut - V) / v),
							o ||
								(H > I
									? (H = I + (H - I) / v)
									: H < N && (H = N - (N - H) / v))),
						(l.startX = V = ji(V)),
						(l.startY = H = ji(H));
				},
				ze = function () {
					return l.tween && l.tween.isActive();
				},
				Ke = function () {
					zi.parentNode &&
						!ze() &&
						!l.isDragging &&
						zi.parentNode.removeChild(zi);
				},
				Ce = function (v, Y) {
					var w;
					if (
						!D ||
						l.isPressed ||
						!v ||
						((v.type === "mousedown" || v.type === "pointerdown") &&
							!Y &&
							Ui() - M < 30 &&
							ss[l.pointerEvent.type])
					) {
						Rt && v && D && oi(v);
						return;
					}
					if (
						((kt = ze()),
						(Be = !1),
						(l.pointerEvent = v),
						ss[v.type]
							? ((ot = ~v.type.indexOf("touch")
									? v.currentTarget || v.target
									: F),
								ae(ot, "touchend", Nt),
								ae(ot, "touchmove", dt),
								ae(ot, "touchcancel", Nt),
								ae(F, "touchstart", Ll))
							: ((ot = null), ae(F, "mousemove", dt)),
						(Mt = null),
						(!Fs || !ot) &&
							(ae(F, "mouseup", Nt),
							v && v.target && ae(v.target, "mouseup", Nt)),
						(Z = P.call(l, v.target) && i.dragClickables === !1 && !Y),
						Z)
					) {
						ae(v.target, "change", Nt),
							Qt(l, "pressInit", "onPressInit"),
							Qt(l, "press", "onPress"),
							Ms(g, !0),
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
						Rt && (oi(v), ae(It, "touchforcechange", oi)),
						v.changedTouches
							? ((v = j = v.changedTouches[0]), (J = v.identifier))
							: v.pointerId
								? (J = v.pointerId)
								: (j = J = null),
						Zs++,
						ih(Wt),
						(q = l.pointerY = v.pageY),
						(X = l.pointerX = v.pageX),
						Qt(l, "pressInit", "onPressInit"),
						(C || l.autoScroll) && Oo(e.parentNode),
						e.parentNode &&
							l.autoScroll &&
							!R &&
							!o &&
							e.parentNode._gsMaxScrollX &&
							!zi.parentNode &&
							!e.getBBox &&
							((zi.style.width = e.parentNode.scrollWidth + "px"),
							e.parentNode.appendChild(zi)),
						Ge(),
						l.tween && l.tween.kill(),
						(l.isThrowing = !1),
						Tt.killTweensOf(R || e, h, !0),
						R && Tt.killTweensOf(e, { scrollTo: 1 }, !0),
						(l.tween = l.lockedAxis = null),
						(i.zIndexBoost || (!o && !R && i.zIndexBoost !== !1)) &&
							(e.style.zIndex = t.zIndex++),
						(l.isPressed = !0),
						(pt = !!(i.onDrag || l._listeners.drag)),
						(T = !!(i.onMove || l._listeners.move)),
						i.cursor !== !1 || i.activeCursor)
					)
						for (w = g.length; --w > -1; )
							Tt.set(g[w], {
								cursor:
									i.activeCursor ||
									i.cursor ||
									(kr === "grab" ? "grabbing" : kr),
							});
					Qt(l, "press", "onPress");
				},
				dt = function (v) {
					var Y = v,
						w,
						E,
						z,
						A,
						$,
						B;
					if (!D || qa || !l.isPressed || !v) {
						Rt && v && D && oi(v);
						return;
					}
					if (((l.pointerEvent = v), (w = v.changedTouches), w)) {
						if (((v = w[0]), v !== j && v.identifier !== J)) {
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
						((ai.x = v.pageX - (k ? nr(F) : 0)),
						(ai.y = v.pageY - (k ? ir(F) : 0)),
						st && st.apply(ai, ai),
						(E = ai.x),
						(z = ai.y),
						($ = Math.abs(E - X)),
						(B = Math.abs(z - q)),
						(($ !== B && ($ > p || B > p)) || (Pr && C === Mt)) &&
							((Mt = $ > B && f ? "x" : "y"),
							C && Mt !== C && ae(It, "touchforcechange", oi),
							l.vars.lockAxisOnTouchScroll !== !1 &&
								f &&
								d &&
								((l.lockedAxis = Mt === "x" ? "y" : "x"),
								Ki(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, Y)),
							Pr && C === Mt))
					) {
						Nt(Y);
						return;
					}
					!l.allowEventDefault &&
					(!C || (Mt && C !== Mt)) &&
					Y.cancelable !== !1
						? (oi(Y), (Rt = !0))
						: Rt && (Rt = !1),
						l.autoScroll && (_ = !0),
						ve(v.pageX, v.pageY, T);
				},
				ve = function (v, Y, w) {
					var E = 1 - l.dragResistance,
						z = 1 - l.edgeResistance,
						A = l.pointerX,
						$ = l.pointerY,
						B = H,
						K = l.x,
						ct = l.y,
						rt = l.endX,
						gt = l.endY,
						Dt = l.endRotation,
						Ot = G,
						yt,
						xt,
						Pt,
						ht,
						ge,
						Ut;
					(l.pointerX = v),
						(l.pointerY = Y),
						k && ((v -= nr(F)), (Y -= ir(F))),
						o
							? ((ht = Math.atan2(U.y - Y, v - U.x) * Cl),
								(ge = l.y - ht),
								ge > 180
									? ((H -= 360), (l.y = ht))
									: ge < -180 && ((H += 360), (l.y = ht)),
								l.x !== V || Math.abs(H - ht) > p
									? ((l.y = ht), (Pt = V + (H - ht) * E))
									: (Pt = V))
							: (st &&
									((Ut = v * st.a + Y * st.c + st.e),
									(Y = v * st.b + Y * st.d + st.f),
									(v = Ut)),
								(xt = Y - q),
								(yt = v - X),
								xt < p && xt > -p && (xt = 0),
								yt < p && yt > -p && (yt = 0),
								(l.lockAxis || l.lockedAxis) &&
									(yt || xt) &&
									((Ut = l.lockedAxis),
									Ut ||
										((l.lockedAxis = Ut =
											f && Math.abs(yt) > Math.abs(xt) ? "y" : d ? "x" : null),
										Ut &&
											Ki(l.vars.onLockAxis) &&
											l.vars.onLockAxis.call(l, l.pointerEvent)),
									Ut === "y" ? (xt = 0) : Ut === "x" && (yt = 0)),
								(Pt = ji(V + yt * E)),
								(ht = ji(H + xt * E))),
						(ft || et || W) &&
							(l.x !== Pt || (l.y !== ht && !o)) &&
							(W &&
								((qn.x = Pt),
								(qn.y = ht),
								(Ut = W(qn)),
								(Pt = ji(Ut.x)),
								(ht = ji(Ut.y))),
							ft && (Pt = ji(ft(Pt))),
							et && (ht = ji(et(ht)))),
						tt &&
							(Pt > nt
								? (Pt = nt + Math.round((Pt - nt) * z))
								: Pt < ut && (Pt = ut + Math.round((Pt - ut) * z)),
							o ||
								(ht > I
									? (ht = Math.round(I + (ht - I) * z))
									: ht < N && (ht = Math.round(N + (ht - N) * z)))),
						(l.x !== Pt || (l.y !== ht && !o)) &&
							(o
								? ((l.endRotation = l.x = l.endX = Pt), (G = !0))
								: (d && ((l.y = l.endY = ht), (G = !0)),
									f && ((l.x = l.endX = Pt), (G = !0))),
							!w || Qt(l, "move", "onMove") !== !1
								? !l.isDragging &&
									l.isPressed &&
									((l.isDragging = Be = !0), Qt(l, "dragstart", "onDragStart"))
								: ((l.pointerX = A),
									(l.pointerY = $),
									(H = B),
									(l.x = K),
									(l.y = ct),
									(l.endX = rt),
									(l.endY = gt),
									(l.endRotation = Dt),
									(G = Ot)));
				},
				Nt = function at(v, Y) {
					if (
						!D ||
						!l.isPressed ||
						(v &&
							J != null &&
							!Y &&
							((v.pointerId && v.pointerId !== J && v.target !== e) ||
								(v.changedTouches && !rh(v.changedTouches, J))))
					) {
						Rt && v && D && oi(v);
						return;
					}
					l.isPressed = !1;
					var w = v,
						E = l.isDragging,
						z = l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2),
						A = Tt.delayedCall(0.001, Ke),
						$,
						B,
						K,
						ct,
						rt;
					if (
						(ot
							? (ee(ot, "touchend", at),
								ee(ot, "touchmove", dt),
								ee(ot, "touchcancel", at),
								ee(F, "touchstart", Ll))
							: ee(F, "mousemove", dt),
						ee(It, "touchforcechange", oi),
						(!Fs || !ot) &&
							(ee(F, "mouseup", at),
							v && v.target && ee(v.target, "mouseup", at)),
						(G = !1),
						E && ((m = Pl = Ui()), (l.isDragging = !1)),
						Al(Wt),
						Z && !z)
					) {
						v && (ee(v.target, "change", at), (l.pointerEvent = w)),
							Ms(g, !1),
							Qt(l, "release", "onRelease"),
							Qt(l, "click", "onClick"),
							(Z = !1);
						return;
					}
					for (B = g.length; --B > -1; )
						Co(g[B], "cursor", i.cursor || (i.cursor !== !1 ? kr : null));
					if ((Zs--, v)) {
						if (
							(($ = v.changedTouches),
							$ && ((v = $[0]), v !== j && v.identifier !== J))
						) {
							for (
								B = $.length;
								--B > -1 && (v = $[B]).identifier !== J && v.target !== e;

							);
							if (B < 0 && !Y) return;
						}
						(l.pointerEvent = w),
							(l.pointerX = v.pageX),
							(l.pointerY = v.pageY);
					}
					return (
						z && w
							? (oi(w), (Rt = !0), Qt(l, "release", "onRelease"))
							: w && !E
								? ((Rt = !1),
									kt && (i.snap || i.bounds) && Ti(i.inertia || i.throwProps),
									Qt(l, "release", "onRelease"),
									(!Pr || w.type !== "touchmove") &&
										w.type.indexOf("cancel") === -1 &&
										(Qt(l, "click", "onClick"),
										Ui() - M < 300 && Qt(l, "doubleclick", "onDoubleClick"),
										(ct = w.target || e),
										(M = Ui()),
										(rt = function () {
											M !== ce &&
												l.enabled() &&
												!l.isPressed &&
												!w.defaultPrevented &&
												(ct.click
													? ct.click()
													: F.createEvent &&
														((K = F.createEvent("MouseEvents")),
														K.initMouseEvent(
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
														ct.dispatchEvent(K)));
										}),
										!Pr && !w.defaultPrevented && Tt.delayedCall(0.05, rt)))
								: (Ti(i.inertia || i.throwProps),
									!l.allowEventDefault &&
									w &&
									(i.dragClickables !== !1 || !P.call(l, w.target)) &&
									E &&
									(!C || (Mt && C === Mt)) &&
									w.cancelable !== !1
										? ((Rt = !0), oi(w))
										: (Rt = !1),
									Qt(l, "release", "onRelease")),
						ze() && A.duration(l.tween.duration()),
						E && Qt(l, "dragend", "onDragEnd"),
						!0
					);
				},
				xe = function (v) {
					if (v && l.isDragging && !R) {
						var Y = v.target || e.parentNode,
							w = Y.scrollLeft - Y._gsScrollX,
							E = Y.scrollTop - Y._gsScrollY;
						(w || E) &&
							(st
								? ((X -= w * st.a + E * st.c), (q -= E * st.d + w * st.b))
								: ((X -= w), (q -= E)),
							(Y._gsScrollX += w),
							(Y._gsScrollY += E),
							ve(l.pointerX, l.pointerY));
					}
				},
				Ye = function (v) {
					var Y = Ui(),
						w = Y - M < 100,
						E = Y - m < 50,
						z = w && ce === M,
						A = l.pointerEvent && l.pointerEvent.defaultPrevented,
						$ = w && Et === M,
						B = v.isTrusted || (v.isTrusted == null && w && z);
					if (
						((z || (E && l.vars.suppressClickOnDrag !== !1)) &&
							v.stopImmediatePropagation &&
							v.stopImmediatePropagation(),
						w &&
							!(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
							(!z || (B && !$)))
					) {
						B && z && (Et = M), (ce = M);
						return;
					}
					(l.isPressed || E || w) && (!B || !v.detail || !w || A) && oi(v),
						!w &&
							!E &&
							!Be &&
							(v && v.target && (l.pointerEvent = v),
							Qt(l, "click", "onClick"));
				},
				Si = function (v) {
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
					var Y, w, E, z;
					Ce(at || l.pointerEvent, !0),
						v &&
							!l.hitTest(at || l.pointerEvent) &&
							((Y = Hn(at || l.pointerEvent)),
							(w = Hn(e)),
							(E = Si({ x: Y.left + Y.width / 2, y: Y.top + Y.height / 2 })),
							(z = Si({ x: w.left + w.width / 2, y: w.top + w.height / 2 })),
							(X -= E.x - z.x),
							(q -= E.y - z.y)),
						l.isDragging ||
							((l.isDragging = Be = !0), Qt(l, "dragstart", "onDragStart"));
				}),
				(n.drag = dt),
				(n.endDrag = function (at) {
					return Nt(at || l.pointerEvent, !0);
				}),
				(n.timeSinceDrag = function () {
					return l.isDragging ? 0 : (Ui() - m) / 1e3;
				}),
				(n.timeSinceClick = function () {
					return (Ui() - M) / 1e3;
				}),
				(n.hitTest = function (at, v) {
					return t.hitTest(l.target, at, v);
				}),
				(n.getDirection = function (at, v) {
					var Y =
							at === "velocity" && mi ? at : Vr(at) && !o ? "element" : "start",
						w,
						E,
						z,
						A,
						$,
						B;
					return (
						Y === "element" && (($ = Hn(l.target)), (B = Hn(at))),
						(w =
							Y === "start"
								? l.x - V
								: Y === "velocity"
									? mi.getVelocity(e, c)
									: $.left + $.width / 2 - (B.left + B.width / 2)),
						o
							? w < 0
								? "counter-clockwise"
								: "clockwise"
							: ((v = v || 2),
								(E =
									Y === "start"
										? l.y - H
										: Y === "velocity"
											? mi.getVelocity(e, u)
											: $.top + $.height / 2 - (B.top + B.height / 2)),
								(z = Math.abs(w / E)),
								(A = z < 1 / v ? "" : w < 0 ? "left" : "right"),
								z < v && (A !== "" && (A += "-"), (A += E < 0 ? "up" : "down")),
								A)
					);
				}),
				(n.applyBounds = function (at, v) {
					var Y, w, E, z, A, $;
					if (at && i.bounds !== at) return (i.bounds = at), l.update(!0, v);
					if ((Ct(!0), pe(), tt && !ze())) {
						if (
							((Y = l.x),
							(w = l.y),
							Y > nt ? (Y = nt) : Y < ut && (Y = ut),
							w > I ? (w = I) : w < N && (w = N),
							(l.x !== Y || l.y !== w) &&
								((E = !0),
								(l.x = l.endX = Y),
								o ? (l.endRotation = Y) : (l.y = l.endY = w),
								(G = !0),
								Wt(!0),
								l.autoScroll && !l.isDragging))
						)
							for (
								Oo(e.parentNode),
									z = e,
									Ni.scrollTop =
										It.pageYOffset != null
											? It.pageYOffset
											: F.documentElement.scrollTop != null
												? F.documentElement.scrollTop
												: F.body.scrollTop,
									Ni.scrollLeft =
										It.pageXOffset != null
											? It.pageXOffset
											: F.documentElement.scrollLeft != null
												? F.documentElement.scrollLeft
												: F.body.scrollLeft;
								z && !$;

							)
								($ = ur(z.parentNode)),
									(A = $ ? Ni : z.parentNode),
									d &&
										A.scrollTop > A._gsMaxScrollY &&
										(A.scrollTop = A._gsMaxScrollY),
									f &&
										A.scrollLeft > A._gsMaxScrollX &&
										(A.scrollLeft = A._gsMaxScrollX),
									(z = A);
						l.isThrowing &&
							(E || l.endX > nt || l.endX < ut || l.endY > I || l.endY < N) &&
							Ti(i.inertia || i.throwProps, E);
					}
					return l;
				}),
				(n.update = function (at, v, Y) {
					if (v && l.isPressed) {
						var w = vn(e),
							E = je.apply({ x: l.x - V, y: l.y - H }),
							z = vn(e.parentNode, !0);
						z.apply({ x: w.e - E.x, y: w.f - E.y }, E),
							(l.x -= E.x - z.e),
							(l.y -= E.y - z.f),
							Wt(!0),
							Ge();
					}
					var A = l.x,
						$ = l.y;
					return (
						Ue(!v),
						at ? l.applyBounds() : (G && Y && Wt(!0), Ct(!0)),
						v && (ve(l.pointerX, l.pointerY), G && Wt(!0)),
						l.isPressed &&
							!v &&
							((f && Math.abs(A - l.x) > 0.01) ||
								(d && Math.abs($ - l.y) > 0.01 && !o)) &&
							Ge(),
						l.autoScroll &&
							(Oo(e.parentNode, l.isDragging),
							(_ = l.isDragging),
							Wt(!0),
							Rl(e, xe),
							Il(e, xe)),
						l
					);
				}),
				(n.enable = function (at) {
					var v = { lazy: !0 },
						Y,
						w,
						E;
					if (
						(i.cursor !== !1 && (v.cursor = i.cursor || kr),
						Tt.utils.checkPrefix("touchCallout") && (v.touchCallout = "none"),
						at !== "soft")
					) {
						for (
							kl(
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
							(E = g[w]),
								Fs || ae(E, "mousedown", Ce),
								ae(E, "touchstart", Ce),
								ae(E, "click", Ye, !0),
								Tt.set(E, v),
								E.getBBox &&
									E.ownerSVGElement &&
									f !== d &&
									Tt.set(E.ownerSVGElement, {
										touchAction:
											i.allowNativeTouchScrolling || i.allowEventDefault
												? "manipulation"
												: f
													? "pan-y"
													: "pan-x",
									}),
								i.allowContextMenu || ae(E, "contextmenu", qt);
						Ms(g, !1);
					}
					return (
						Il(e, xe),
						(D = !0),
						mi &&
							at !== "soft" &&
							mi.track(R || e, s ? "x,y" : o ? "rotation" : "top,left"),
						(e._gsDragID = Y = "d" + Jd++),
						(er[Y] = l),
						R && (R.enable(), (R.element._gsDragID = Y)),
						(i.bounds || o) && Ge(),
						i.bounds && l.applyBounds(),
						l
					);
				}),
				(n.disable = function (at) {
					for (var v = l.isDragging, Y = g.length, w; --Y > -1; )
						Co(g[Y], "cursor", null);
					if (at !== "soft") {
						for (kl(g, null), Y = g.length; --Y > -1; )
							(w = g[Y]),
								Co(w, "touchCallout", null),
								ee(w, "mousedown", Ce),
								ee(w, "touchstart", Ce),
								ee(w, "click", Ye, !0),
								ee(w, "contextmenu", qt);
						Ms(g, !0),
							ot &&
								(ee(ot, "touchcancel", Nt),
								ee(ot, "touchend", Nt),
								ee(ot, "touchmove", dt)),
							ee(F, "mouseup", Nt),
							ee(F, "mousemove", dt);
					}
					return (
						Rl(e, xe),
						(D = !1),
						mi &&
							at !== "soft" &&
							(mi.untrack(R || e, s ? "x,y" : o ? "rotation" : "top,left"),
							l.tween && l.tween.kill()),
						R && R.disable(),
						Al(Wt),
						(l.isDragging = l.isPressed = Z = !1),
						v && Qt(l, "dragend", "onDragEnd"),
						l
					);
				}),
				(n.enabled = function (at, v) {
					return arguments.length ? (at ? l.enable(v) : l.disable(v)) : D;
				}),
				(n.kill = function () {
					return (
						(l.isThrowing = !1),
						l.tween && l.tween.kill(),
						l.disable(),
						Tt.set(g, { clearProps: "userSelect" }),
						delete er[e._gsDragID],
						l
					);
				}),
				(n.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~r.indexOf("scroll") &&
					((R = n.scrollProxy =
						new ch(
							e,
							eh(
								{
									onKill: function () {
										l.isPressed && Nt(null);
									},
								},
								i,
							),
						)),
					(e.style.overflowY = d && !oa ? "auto" : "hidden"),
					(e.style.overflowX = f && !oa ? "auto" : "hidden"),
					(e = R.content)),
				o ? (h.rotation = 1) : (f && (h[c] = 1), d && (h[u] = 1)),
				(O.force3D = "force3D" in i ? i.force3D : !0),
				bu(Ol(n)),
				n.enable(),
				n
			);
		}
		return (
			(t.register = function (i) {
				(Tt = i), ko();
			}),
			(t.create = function (i, n) {
				return (
					sa || ko(!0),
					nn(i).map(function (r) {
						return new t(r, n);
					})
				);
			}),
			(t.get = function (i) {
				return er[(nn(i)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Ui() - Pl) / 1e3;
			}),
			(t.hitTest = function (i, n, r) {
				if (i === n) return !1;
				var s = Hn(i),
					o = Hn(n),
					c = s.top,
					u = s.left,
					f = s.right,
					d = s.bottom,
					p = s.width,
					l = s.height,
					g = o.left > f || o.right < u || o.top > d || o.bottom < c,
					h,
					m,
					_;
				return g || !r
					? !g
					: ((_ = (r + "").indexOf("%") !== -1),
						(r = parseFloat(r) || 0),
						(h = { left: Math.max(u, o.left), top: Math.max(c, o.top) }),
						(h.width = Math.min(f, o.right) - h.left),
						(h.height = Math.min(d, o.bottom) - h.top),
						h.width < 0 || h.height < 0
							? !1
							: _
								? ((r *= 0.01),
									(m = h.width * h.height),
									m >= p * l * r || m >= o.width * o.height * r)
								: h.width > r && h.height > r);
			}),
			t
		);
	})(uh);
nh(fr.prototype, {
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
Su() && Tt.registerPlugin(fr);
const wt = "power4.inOut",
	ki = (a, t = !0, e = 0) => (t ? e : a);
function fh(a, t) {
	(a = Q.utils.toArray(a)), (t = t || {});
	let e = t.onChange,
		i = 0,
		n = Q.timeline({
			repeat: t.repeat,
			onUpdate:
				e &&
				function () {
					let D = n.closestIndex();
					i !== D && ((i = D), e(a[D], D));
				},
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => n.totalTime(n.rawTime() + n.duration() * 100),
		}),
		r = a.length,
		s = a[0].offsetLeft,
		o = [],
		c = [],
		u = [],
		f = [],
		d = 0,
		p = !1,
		l = t.center,
		g = (t.speed || 1) * 100,
		h = t.snap === !1 ? (D) => D : Q.utils.snap(t.snap || 1),
		m = 0,
		_ = l === !0 ? a[0].parentNode : Q.utils.toArray(l)[0] || a[0].parentNode,
		y,
		S = () =>
			a[r - 1].offsetLeft +
			(f[r - 1] / 100) * c[r - 1] -
			s +
			u[0] +
			a[r - 1].offsetWidth * Q.getProperty(a[r - 1], "scaleX") +
			(parseFloat(t.paddingRight) || 0),
		x = () => {
			let D = _.getBoundingClientRect(),
				R;
			a.forEach((X, q) => {
				(c[q] = parseFloat(Q.getProperty(X, "width", "px"))),
					(f[q] = h(
						(parseFloat(Q.getProperty(X, "x", "px")) / c[q]) * 100 +
							Q.getProperty(X, "xPercent"),
					)),
					(R = X.getBoundingClientRect()),
					(u[q] = R.left - (q ? D.right : D.left)),
					(D = R);
			}),
				Q.set(a, { xPercent: (X) => f[X] }),
				(y = S());
		},
		b,
		P = () => {
			(m = l ? (n.duration() * (_.offsetWidth / 2)) / y : 0),
				l &&
					o.forEach((D, R) => {
						o[R] = b(n.labels["label" + R] + (n.duration() * c[R]) / 2 / y - m);
					});
		},
		M = (D, R, X) => {
			let q = D.length,
				V = 1e10,
				H = 0,
				tt;
			for (; q--; )
				(tt = Math.abs(D[q] - R)),
					tt > X / 2 && (tt = X - tt),
					tt < V && ((V = tt), (H = q));
			return H;
		},
		O = () => {
			let D, R, X, q, V;
			for (n.clear(), D = 0; D < r; D++)
				(R = a[D]),
					(X = (f[D] / 100) * c[D]),
					(q = R.offsetLeft + X - s + u[0]),
					(V = q + c[D] * Q.getProperty(R, "scaleX")),
					n
						.to(R, { xPercent: h(((X - V) / c[D]) * 100), duration: V / g }, 0)
						.fromTo(
							R,
							{ xPercent: h(((X - V + y) / c[D]) * 100) },
							{
								xPercent: f[D],
								duration: (X - V + y - X) / g,
								immediateRender: !1,
							},
							V / g,
						)
						.add("label" + D, q / g),
					(o[D] = q / g);
			b = Q.utils.wrap(0, n.duration());
		},
		k = (D) => {
			let R = n.progress();
			n.progress(0, !0),
				x(),
				D && O(),
				P(),
				D && n.draggable ? n.time(o[d], !0) : n.progress(R, !0);
		},
		L;
	Q.set(a, { x: 0 }),
		x(),
		O(),
		P(),
		window.addEventListener("resize", () => k(!0));
	function F(D, R) {
		(R = R || {}), Math.abs(D - d) > r / 2 && (D += D > d ? -r : r);
		let X = Q.utils.wrap(0, r, D),
			q = o[X];
		return (
			q > n.time() != D > d &&
				D !== d &&
				(q += n.duration() * (D > d ? 1 : -1)),
			(q < 0 || q > n.duration()) && (R.modifiers = { time: b }),
			(d = X),
			(R.overwrite = !0),
			Q.killTweensOf(L),
			R.duration === 0 ? n.time(b(q)) : n.tweenTo(q, R)
		);
	}
	if (
		((n.toIndex = (D, R) => F(D, R)),
		(n.closestIndex = (D) => {
			let R = M(o, n.time(), n.duration());
			return D && ((d = R), (p = !1)), R;
		}),
		(n.current = () => (p ? n.closestIndex(!0) : d)),
		(n.next = (D) => F(n.current() + 1, D)),
		(n.previous = (D) => F(n.current() - 1, D)),
		(n.times = o),
		n.progress(1, !0).progress(0, !0),
		t.reversed && (n.vars.onReverseComplete(), n.reverse()),
		t.draggable && typeof fr == "function")
	) {
		L = document.createElement("div");
		let D = Q.utils.wrap(0, 1),
			R,
			X,
			q,
			V,
			H,
			tt = () => n.progress(D(X + (q.startX - q.x) * R)),
			pt = () => n.closestIndex(!0);
		typeof InertiaPlugin > "u" &&
			console.warn(
				"InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
			),
			(q = fr.create(L, {
				trigger: a[0].parentNode,
				type: "x",
				onPressInit() {
					let T = this.x;
					Q.killTweensOf(n),
						(X = n.progress()),
						k(),
						(R = 1 / y),
						(H = X / -R - T),
						Q.set(L, { x: X / -R });
				},
				onDrag: tt,
				onThrowUpdate: tt,
				overshootTolerance: 0,
				inertia: !0,
				snap(T) {
					if (Math.abs(X / -R - this.x) < 10) return V + H;
					let nt = -(T * R) * n.duration(),
						ut = b(nt),
						I = o[M(o, ut, n.duration())],
						N = I - ut;
					return (
						Math.abs(N) > n.duration() / 2 &&
							(N += N < 0 ? n.duration() : -n.duration()),
						(V = (nt + N) / n.duration() / -R),
						V
					);
				},
				onRelease() {
					pt(), q.isThrowing && (p = !0);
				},
				onThrowComplete: pt,
			})[0]),
			(n.draggable = q);
	}
	return n.closestIndex(!0), (i = d), e && e(a[d], d), n;
}
const Eo = 66,
	Bl = 5e3;
class dh {
	constructor() {
		te(this, "onSlideCtaClick", (t) => {
			const e = t.currentTarget,
				i = e.closest(".js-features-carousel-item");
			if ((t.preventDefault(), i.classList.contains("is-active"))) {
				const n = e.getAttribute("href"),
					r = document.querySelector(`${n}`);
				r && _u(r, 150);
			} else this.instance.scrollTo(parseInt(i.dataset.index, 10));
		});
		te(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const i = this.DOM.slides[e],
				n = this.DOM.slides[this.activeIndex];
			Q.timeline({
				onStart: () => {
					t.stop(), this.progressTl.pause();
				},
				onComplete: () => {
					t.play(), this.progressTl.restart();
				},
			})
				.add(this.outSlide(i))
				.add(this.inSlide(n), "<");
		});
		te(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				i = Q.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				Gt.device < 1
					? i.to(t, {
							opacity: 0,
							xPercent: -200,
							rotate: -5,
							duration: 0.8,
							ease: wt,
							onComplete: () => {
								Q.set(t, { xPercent: 0, rotate: 5 });
							},
						})
					: i
							.to(t, { height: Eo, duration: 0.8, ease: wt })
							.to(
								e,
								{ opacity: 0, height: 0, duration: 0.8, ease: wt },
								"-=0.8",
							),
				i
			);
		});
		te(this, "inSlide", (t, e = !1) => {
			const i = t.querySelector(".js-features-carousel-item-text"),
				n = Q.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				Gt.device < 1
					? n.to(t, {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
							duration: ki(0.8, e),
							ease: wt,
						})
					: n
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: ki(0.8, e),
								ease: wt,
							})
							.to(
								i,
								{ opacity: 1, height: "auto", duration: ki(0.8, e), ease: wt },
								ki("-=0.67", e),
							),
				n
			);
		});
		te(this, "start", () => {
			var t, e, i;
			(this.progressTl = Q.timeline({ paused: !0 }).to(this.DOM.progressbar, {
				scaleX: 1,
				duration: Bl / 1e3,
				ease: "linear",
			})),
				this.progressTl.play(),
				(i =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay) == null || i.play();
		});
		te(this, "hide", () => {
			const t = Q.timeline();
			if (Gt.device < 1) {
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
		te(this, "reveal", () => {
			const t = Q.timeline();
			if (Gt.device < 1) {
				const e = this.DOM.slides[this.activeIndex],
					i = e.querySelectorAll(".js-features-carousel-content");
				t.to(e, { scale: 1, y: 0, duration: 0.8, ease: wt })
					.to(i, { opacity: 1, duration: 0.8, ease: wt }, "-=0.3")
					.to(
						this.DOM.progress,
						{ opacity: 1, y: 0, duration: 0.8, ease: wt },
						"-=0.8",
					);
			} else {
				const e = Q.utils.toArray(this.DOM.slides).reverse();
				for (let i = 0; i < e.length; i++) {
					const n = Q.timeline(),
						r = e[i],
						s = r.querySelectorAll(".js-features-carousel-content");
					n
						.to(r, { y: 0, opacity: 1, duration: 0.8, ease: wt })
						.set(s, { opacity: 1, duration: 0.8, ease: wt }, "-=0.3")
						.to(
							this.DOM.progress,
							{ opacity: 1, y: 0, duration: 0.8, ease: wt },
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
		(this.layoutMode = Gt.device < 1 ? "mobile" : "desktop"),
			(this.hRatio = Gt.device < 1 ? 1 : 0.72331),
			(this.instance = Ba(this.DOM.fakeCarousel, { loop: !0 }, [
				za({ delay: Bl, playOnInit: !1 }),
			])),
			Gt.device < 1 &&
				(Q.set(this.DOM.slides, { opacity: 0, xPercent: 0, rotate: 5 }),
				Q.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 })),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
		for (let t = 0; t < this.DOM.ctas.length; t++)
			this.DOM.ctas[t].addEventListener("click", this.onSlideCtaClick);
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
				((this.hRatio = Gt.device < 1 ? 1 : 0.72331),
				Gt.device < 1 && this.layoutMode !== "mobile"
					? (Q.set(this.DOM.slides, {
							opacity: 0,
							xPercent: 0,
							rotate: 5,
							height: "auto",
						}),
						Q.set(this.DOM.slides[this.activeIndex], {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
						}),
						Q.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 }))
					: Gt.device >= 1 && this.layoutMode !== "desktop"
						? (Q.set(this.DOM.slides, {
								opacity: 1,
								xPercent: "none",
								rotate: 0,
								height: Eo,
							}),
							Q.set(this.DOM.slidesTexts, { height: 0, opacity: 0 }),
							Q.set(this.DOM.slides[this.activeIndex], {
								height: (i, n) => n.offsetWidth * this.hRatio,
							}),
							Q.set(this.DOM.slidesTexts[this.activeIndex], { height: "auto" }))
						: Gt.device >= 1 &&
							this.layoutMode === "desktop" &&
							Q.set(this.DOM.slides, {
								height: (i) =>
									i === this.activeIndex
										? this.DOM.slides[i].offsetWidth * this.hRatio
										: Eo,
							}),
				Gt.device >= 1 || (Gt.device < 1 && this.layoutMode !== "mobile"))
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
			this.layoutMode = Gt.device < 1 ? "mobile" : "desktop";
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
class hh {
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
const Ae = new hh();
class ph {
	constructor() {
		te(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const i = t.currentTarget.getAttribute("href"),
				n = document.querySelector(`${i}`);
			n ? _u(n, 150) : console.warn("Target non esiste per l'id: ", i);
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
class gh {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = fh(this.DOM.items, {
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
class _h {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const e = this.DOM.rows[t];
			e &&
				this.instances.push(
					new gh({
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
class mh {
	setActiveView(t) {
		this.activeView = t;
	}
	init() {
		(this.DOM = {}),
			(this.DOM.view = document.querySelector("[data-router-view]")),
			(this.activeView = this.DOM.view.dataset.routerView);
	}
}
const Js = new mh();
Q.registerPlugin(_t);
class yh {
	constructor() {
		te(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		te(this, "hideNav", (t = !1, e = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const i = Q.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), e && e();
					},
				});
				return (
					i
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: ki(0.8, t),
							stagger: ki(0.1, t),
							onComplete: () => {
								Q.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: wt,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: ki(0.8, t),
								onComplete: () => {
									Q.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: wt,
							},
							ki(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: ki(0.8, t),
							onComplete: () => {
								Q.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: wt,
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
		te(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = Q.timeline({
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
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: wt })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: wt },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: wt },
							"-=0.34",
						),
					t
				);
			}
		});
		te(this, "hide", () => Q.set(this.DOM.nav, { opacity: 0 }));
		te(this, "reveal", () =>
			Q.timeline().to(this.DOM.nav, {
				opacity: 1,
				duration: 0.8,
				ease: wt,
				clearProps: "opacity",
			}),
		);
		this.init();
	}
	setup() {
		this.addEvents(),
			this.hideNav(!0),
			this.setActiveItem(),
			this.addHeadTrigger();
	}
	setActiveItem(t = Js.activeView) {
		const e = this.DOM.nav.querySelector(".js-nav-link.is-active");
		e && e.classList.remove("is-active");
		const i = this.DOM.nav.querySelector(`.js-nav-link[data-route="${t}"]`);
		i && i.classList.add("is-active");
	}
	addEvents() {
		this.DOM.navToggle.addEventListener("click", this.toggleMenu);
	}
	removeEvents() {
		this.DOM.navToggle.removeEventListener("click", this.toggleMenu);
	}
	addHeadTrigger() {
		this.headTrigger = _t.create({
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
var vh =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function xh(a) {
	return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
		? a.default
		: a;
}
var Cu = { exports: {} };
(function (a, t) {
	(function (e, i) {
		a.exports = i();
	})(vh, function () {
		var e = document,
			i = e.createTextNode.bind(e);
		function n(I, N, j) {
			I.style.setProperty(N, j);
		}
		function r(I, N) {
			return I.appendChild(N);
		}
		function s(I, N, j, J) {
			var U = e.createElement("span");
			return (
				N && (U.className = N),
				j && (!J && U.setAttribute("data-" + N, j), (U.textContent = j)),
				(I && r(I, U)) || U
			);
		}
		function o(I, N) {
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
		function p(I, N, j) {
			var J = "--" + N,
				U = J + "-index";
			f(j, function (G, lt) {
				Array.isArray(G)
					? f(G, function (ft) {
							n(ft, U, lt);
						})
					: n(G, U, lt);
			}),
				n(I, J + "-total", j.length);
		}
		var l = {};
		function g(I, N, j) {
			var J = j.indexOf(I);
			if (J == -1)
				j.unshift(I),
					f(l[I].depends, function (G) {
						g(G, I, j);
					});
			else {
				var U = j.indexOf(N);
				j.splice(J, 1), j.splice(U, 0, I);
			}
			return j;
		}
		function h(I, N, j, J) {
			return { by: I, depends: N, key: j, split: J };
		}
		function m(I) {
			return g(I, 0, []).map(d(l));
		}
		function _(I) {
			l[I.by] = I;
		}
		function y(I, N, j, J, U) {
			I.normalize();
			var G = [],
				lt = document.createDocumentFragment();
			J && G.push(I.previousSibling);
			var ft = [];
			return (
				c(I.childNodes).some(function (et) {
					if (et.tagName && !et.hasChildNodes()) {
						ft.push(et);
						return;
					}
					if (et.childNodes && et.childNodes.length) {
						ft.push(et), G.push.apply(G, y(et, N, j, J, U));
						return;
					}
					var W = et.wholeText || "",
						Z = W.trim();
					Z.length &&
						(W[0] === " " && ft.push(i(" ")),
						f(Z.split(j), function (ot, st) {
							st && U && ft.push(s(lt, "whitespace", " ", U));
							var kt = s(lt, N, ot);
							G.push(kt), ft.push(kt);
						}),
						W[W.length - 1] === " " && ft.push(i(" ")));
				}),
				f(ft, function (et) {
					r(lt, et);
				}),
				(I.innerHTML = ""),
				r(I, lt),
				G
			);
		}
		var S = 0;
		function x(I, N) {
			for (var j in N) I[j] = N[j];
			return I;
		}
		var b = "words",
			P = h(b, S, "word", function (I) {
				return y(I, "word", /\s+/, 0, 1);
			}),
			M = "chars",
			O = h(M, [b], "char", function (I, N, j) {
				var J = [];
				return (
					f(j[b], function (U, G) {
						J.push.apply(J, y(U, "char", "", N.whitespace && G));
					}),
					J
				);
			});
		function k(I) {
			I = I || {};
			var N = I.key;
			return c(I.target || "[data-splitting]").map(function (j) {
				var J = j["🍌"];
				if (!I.force && J) return J;
				J = j["🍌"] = { el: j };
				var U = m(I.by || o(j, "splitting") || M),
					G = x({}, I);
				return (
					f(U, function (lt) {
						if (lt.split) {
							var ft = lt.by,
								et = (N ? "-" + N : "") + lt.key,
								W = lt.split(j, G, J);
							et && p(j, et, W), (J[ft] = W), j.classList.add(ft);
						}
					}),
					j.classList.add("splitting"),
					J
				);
			});
		}
		function L(I) {
			I = I || {};
			var N = (I.target = s());
			return (N.innerHTML = I.content), k(I), N.outerHTML;
		}
		(k.html = L), (k.add = _);
		function F(I, N, j) {
			var J = c(N.matching || I.children, I),
				U = {};
			return (
				f(J, function (G) {
					var lt = Math.round(G[j]);
					(U[lt] || (U[lt] = [])).push(G);
				}),
				Object.keys(U).map(Number).sort(D).map(d(U))
			);
		}
		function D(I, N) {
			return I - N;
		}
		var R = h("lines", [b], "line", function (I, N, j) {
				return F(I, { matching: j[b] }, "offsetTop");
			}),
			X = h("items", S, "item", function (I, N) {
				return c(N.matching || I.children, I);
			}),
			q = h("rows", S, "row", function (I, N) {
				return F(I, N, "offsetTop");
			}),
			V = h("cols", S, "col", function (I, N) {
				return F(I, N, "offsetLeft");
			}),
			H = h("grid", ["rows", "cols"]),
			tt = "layout",
			pt = h(tt, S, S, function (I, N) {
				var j = (N.rows = +(N.rows || o(I, "rows") || 1)),
					J = (N.columns = +(N.columns || o(I, "columns") || 1));
				if (
					((N.image = N.image || o(I, "image") || I.currentSrc || I.src),
					N.image)
				) {
					var U = c("img", I)[0];
					N.image = U && (U.currentSrc || U.src);
				}
				N.image && n(I, "background-image", "url(" + N.image + ")");
				for (var G = j * J, lt = [], ft = s(S, "cell-grid"); G--; ) {
					var et = s(ft, "cell");
					s(et, "cell-inner"), lt.push(et);
				}
				return r(I, ft), lt;
			}),
			T = h("cellRows", [tt], "row", function (I, N, j) {
				var J = N.rows,
					U = u(J);
				return (
					f(j[tt], function (G, lt, ft) {
						U[Math.floor(lt / (ft.length / J))].push(G);
					}),
					U
				);
			}),
			nt = h("cellColumns", [tt], "col", function (I, N, j) {
				var J = N.columns,
					U = u(J);
				return (
					f(j[tt], function (G, lt) {
						U[lt % J].push(G);
					}),
					U
				);
			}),
			ut = h("cells", ["cellRows", "cellColumns"], "cell", function (I, N, j) {
				return j[tt];
			});
		return (
			_(P), _(O), _(R), _(X), _(q), _(V), _(H), _(pt), _(T), _(nt), _(ut), k
		);
	});
})(Cu);
var wh = Cu.exports;
const vr = xh(wh);
class bh {
	initChars(t = document) {
		const e = t.querySelectorAll("[data-split='chars']");
		e.length > 0 &&
			((this.charsInstance = vr({ target: e, by: "chars" })),
			this.instances.push(this.charsInstance));
	}
	initWords(t = document) {
		const e = t.querySelectorAll("[data-split='words']");
		e.length > 0 &&
			((this.wordsInstance = vr({ target: e, by: "words" })),
			this.instances.push(this.wordsInstance));
	}
	initWordsLines() {
		const t = document.querySelectorAll("[data-split='lines']");
		t.length > 0 &&
			((this.wordsLinesInstance = vr({ target: t, by: "lines" })),
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
		(this[t] = vr(e)), i && this.instances.push({ id: `${t}`, value: this[t] });
	}
	createInstance(t) {
		return vr(t);
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
const zl = new bh();
Q.registerPlugin(_t);
class Th {
	constructor() {
		this.init();
	}
	setup() {
		Q.matchMedia().add(
			{ isMobile: "(max-width: 1023px)", isDesk: "(min-width: 1024px)" },
			(e) => {
				const { isMobile: i, isDesk: n } = e.conditions;
				i && this.setMobileTrigger(), n && this.setTrigger();
			},
		);
	}
	setTrigger() {
		Q.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				scrub: 1.5,
				ease: "none",
			},
		}).fromTo(
			this.DOM.cards,
			{ y: (e, i) => parseInt(i.dataset.index, 10) * 25 },
			{ y: 0, stagger: { each: 0.024 } },
		);
	}
	setMobileTrigger() {
		Q.timeline({
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
Q.registerPlugin(_t);
class Sh {
	constructor() {
		te(this, "onCarouselPrev", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === 0
						? this.DOM.cards.length - 1
						: this.activeIndex - 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				Q.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		te(this, "onCarouselNext", () => {
			if (!this.isAnimating) {
				this.isAnimating = !0;
				const t = this.activeIndex;
				this.activeIndex =
					this.activeIndex === this.DOM.cards.length - 1
						? 0
						: this.activeIndex + 1;
				const e = this.DOM.cards[t],
					i = this.DOM.cards[this.activeIndex];
				Q.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(e))
					.add(this.enterSlide(i), 0);
			}
		});
		te(this, "exitSlide", (t) => {
			const e = Q.timeline();
			return (
				e.to(t, {
					opacity: 0,
					xPercent: -100,
					duration: 0.8,
					onComplete: () => {
						Q.set(t, { opacity: 0, xPercent: 100 });
					},
					ease: wt,
				}),
				e
			);
		});
		te(this, "enterSlide", (t) => {
			const e = Q.timeline();
			return e.to(t, { opacity: 1, xPercent: 0, duration: 0.8, ease: wt }), e;
		});
		te(this, "buildCardsTl", () => {
			const t = Q.timeline();
			for (let e = 0; e < this.DOM.cards.length; e++) {
				const i = this.DOM.cards[e],
					n = Q.timeline();
				n
					.from(i, { y: Gt.window.height * 0.7, duration: 1.4 })
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
		Q.matchMedia().add(
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
		Q.set(this.DOM.cards, { opacity: 0, xPercent: 100 }),
			Q.set(this.DOM.cards[this.activeIndex], { opacity: 1, xPercent: 0 });
	}
	setTrigger() {
		Q.set(this.DOM.cards, { opacity: 1, xPercent: 0, rotate: 0 });
		const t = Q.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=30%",
					end: `+=${Gt.window.height * 5}`,
					pin: !0,
					scrub: !0,
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
class Mh {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== Gt.window.width &&
			((this.winW = Gt.window.width), this.setup());
	}
	setup() {
		const t = Gt.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = Gt.window.width), this.setup();
	}
}
const Dh = ({ pageName: a, container: t = document }) => {
		const e = Q.timeline(),
			i = Ae.get("nav");
		switch ((i && e.add(i.hide(!0)), a)) {
			case "homepage": {
				const n = t.querySelector(".js-hero-content"),
					r = n.querySelector(".js-badge"),
					s = n.querySelector(".js-title"),
					o = n.querySelector(".js-subtitle"),
					c = n.querySelectorAll(".js-cta"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-outer"),
					d = u.querySelector(".js-path-middle"),
					p = u.querySelector(".js-path-inner"),
					l = o.querySelectorAll(".word"),
					g = Ae.get("featuresCarousel");
				g && g.hide(),
					e
						.set([f, d, p], { scale: 0, y: -100, transformOrigin: "50% 0%" })
						.set([r, s, l, c], { opacity: 0, y: -40 });
				break;
			}
			case "company": {
				const n = t.querySelector(".js-hero-content"),
					r = n.querySelector(".js-badge"),
					s = n.querySelector(".js-title"),
					o = n.querySelector(".js-subtitle"),
					c = t.querySelector(".js-hero-ill"),
					u = c.querySelector(".js-path-radial"),
					f = c.querySelector(".js-path-stripe"),
					d = c.querySelectorAll(".js-path-ball"),
					p = c.querySelector(".js-path-ball-glow"),
					l = t.querySelector(".js-hero-bg"),
					g = f.getTotalLength(),
					h = o.querySelectorAll(".word");
				e.set([r, s, h], { opacity: 0, y: 40 })
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
	Oh = ({ pageName: a, container: t = document, cb: e = !1 }) => {
		const i = Q.timeline({
				onComplete: () => {
					if (a === "homepage") {
						const r = Ae.get("featuresCarousel");
						r && r.start();
					}
					e && e();
				},
			}),
			n = Ae.get("nav");
		switch (a) {
			case "homepage": {
				const r = t.querySelector(".js-hero-content"),
					s = r.querySelector(".js-badge"),
					o = r.querySelector(".js-title"),
					c = r.querySelector(".js-subtitle"),
					u = r.querySelectorAll(".js-cta"),
					f = t.querySelector(".js-hero-ill"),
					d = f.querySelector(".js-path-outer"),
					p = f.querySelector(".js-path-middle"),
					l = f.querySelector(".js-path-inner"),
					g = Ae.get("featuresCarousel"),
					h = c.querySelectorAll(".word");
				i
					.to([d, p, l], {
						duration: 2,
						y: 0,
						stagger: 0.1,
						scale: 1,
						clearProps: "scale,y",
						ease: wt,
					})
					.to(s, { duration: 1, opacity: 1, y: 0, ease: wt }, 0.75)
					.to(
						o,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: wt },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: wt },
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
							ease: wt,
						},
						0.75,
					),
					g && i.add(g.reveal(), 0.75);
				break;
			}
			case "company": {
				const r = t.querySelector(".js-hero-content"),
					s = r.querySelector(".js-badge"),
					o = r.querySelector(".js-title"),
					c = r.querySelector(".js-subtitle"),
					u = t.querySelector(".js-hero-ill"),
					f = u.querySelector(".js-path-radial"),
					d = u.querySelector(".js-path-stripe"),
					p = u.querySelectorAll(".js-path-ball"),
					l = u.querySelector(".js-path-ball-glow"),
					g = t.querySelector(".js-hero-bg"),
					h = c.querySelectorAll(".word");
				i.to(s, { duration: 1, opacity: 1, y: 0, ease: wt }, 0.75)
					.to(
						o,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.02, ease: wt },
						0.75,
					)
					.to(
						h,
						{ duration: 1, opacity: 1, y: 0, stagger: 0.01, ease: wt },
						0.75,
					)
					.to(d, { duration: 2, strokeDashoffset: 0, ease: wt }, 0)
					.to(p, { duration: 0.8, scale: 1, stagger: 0.05, ease: wt }, "-=1")
					.to(l, { duration: 0.8, opacity: 1, scale: 1, ease: wt })
					.to(f, { duration: 2, scale: 1, opacity: 0.45, ease: wt }, 1)
					.to(g, { duration: 1, opacity: 1, ease: wt }, 1.5);
				break;
			}
		}
		return n && i.add(n.reveal(), 0.5), i;
	},
	to = { pageTransition: document.querySelector(".js-page-loader") },
	Ch = (a = !1) => {
		const t = Q.timeline();
		return (
			t
				.set(to.pageTransition, { display: "block", zIndex: 421 })
				.to(to.pageTransition, { duration: ki(1, a), opacity: 1, ease: wt }),
			t
		);
	},
	Ph = () => {
		const a = Q.timeline({
			onComplete: () => {
				Q.set(to.pageTransition, { display: "none", zIndex: -1 });
			},
		});
		return a.to(to.pageTransition, { duration: 1, opacity: 0, ease: wt }), a;
	},
	kh = () => {
		Ch(!0), Dh({ pageName: Js.activeView });
		const a = Q.timeline({
			onComplete: () => {
				console.log("load transition complete");
			},
		});
		return a.add(Ph()).add(Oh({ pageName: Js.activeView }), "-=0.2"), a;
	};
function Yl(a, t, e) {
	var i;
	return function () {
		var n = this,
			r = arguments,
			s = function () {
				(i = null), e || a.apply(n, r);
			},
			o = e && !i;
		clearTimeout(i), (i = setTimeout(s, t)), o && a.apply(n, r);
	};
}
function Xl() {
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
class Eh {
	constructor() {
		te(this, "onResize", () => {
			Gt.resize(),
				document.body.classList.toggle("is-touch", Xl()),
				Ae.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", Xl()),
				Js.init(),
				Ae.add("nav", new yh());
		}),
			window.addEventListener("load", () => {
				Gt.init(),
					zl.init(),
					Ae.add("splitText", zl, !0),
					Ae.add("viewportFixer", new Mh()),
					Ae.add("hashScroll", new ph()),
					Ae.add("featuresCarousel", new dh()),
					Ae.add("marqueeManager", new _h()),
					Ae.add("computeBlock", new cd()),
					Ae.add("testimonials", new Sh()),
					Ae.add("team", new Th()),
					kh();
			}),
			window.addEventListener("resize", Yl(this.onResize, 150)),
			window.addEventListener("orientationchange", Yl(this.onResize, 150));
	}
}
const Ah = new Eh();
Ah.start();
