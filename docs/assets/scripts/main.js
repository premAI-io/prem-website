var Pu = Object.defineProperty;
var ku = (a, t, i) =>
	t in a
		? Pu(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
		: (a[t] = i);
var te = (a, t, i) => (ku(a, typeof t != "symbol" ? t + "" : t, i), i);
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
	pa = function (t, i) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			i,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	jr = function (t, i) {
		return !i && console.warn(t);
	},
	Kl = function (t, i) {
		return (t && (si[t] = i) && zs && (zs[t] = i)) || si;
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
		var i = t[0],
			e,
			n;
		if ((Ri(i) || Kt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
			for (n = Os.length; n-- && !Os[n].targetTest(i); );
			e = Os[n];
		}
		for (n = t.length; n--; )
			(t[n] && (t[n]._gsap || (t[n]._gsap = new wc(t[n], e)))) ||
				t.splice(n, 1);
		return t;
	},
	bn = function (t) {
		return t._gsap || ma(di(t))[0]._gsap;
	},
	Zl = function (t, i, e) {
		return (e = t[i]) && Kt(e)
			? t[i]()
			: (fa(e) && t.getAttribute && t.getAttribute(i)) || e;
	},
	He = function (t, i) {
		return (t = t.split(",")).forEach(i) || t;
	},
	Zt = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	de = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	Gn = function (t, i) {
		var e = i.charAt(0),
			n = parseFloat(i.substr(2));
		return (
			(t = parseFloat(t)),
			e === "+" ? t + n : e === "-" ? t - n : e === "*" ? t * n : t / n
		);
	},
	Bu = function (t, i) {
		for (var e = i.length, n = 0; t.indexOf(i[n]) < 0 && ++n < e; );
		return n < e;
	},
	Ys = function () {
		var t = rn.length,
			i = rn.slice(0),
			e,
			n;
		for (Ro = {}, rn.length = 0, e = 0; e < t; e++)
			(n = i[e]),
				n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
	},
	Jl = function (t, i, e, n) {
		rn.length && !De && Ys(),
			t.render(i, e, n || (De && i < 0 && (t._initted || t._startAt))),
			rn.length && !De && Ys();
	},
	tc = function (t) {
		var i = parseFloat(t);
		return (i || i === 0) && (t + "").match(jl).length < 2
			? i
			: he(t)
				? t.trim()
				: t;
	},
	ec = function (t) {
		return t;
	},
	pi = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	zu = function (t) {
		return function (i, e) {
			for (var n in e)
				n in i || (n === "duration" && t) || n === "ease" || (i[n] = e[n]);
		};
	},
	En = function (t, i) {
		for (var e in i) t[e] = i[e];
		return t;
	},
	Va = function a(t, i) {
		for (var e in i)
			e !== "__proto__" &&
				e !== "constructor" &&
				e !== "prototype" &&
				(t[e] = Ri(i[e]) ? a(t[e] || (t[e] = {}), i[e]) : i[e]);
		return t;
	},
	Xs = function (t, i) {
		var e = {},
			n;
		for (n in t) n in i || (e[n] = t[n]);
		return e;
	},
	Er = function (t) {
		var i = t.parent || $t,
			e = t.keyframes ? zu(Oe(t.keyframes)) : pi;
		if (qe(t.inherit))
			for (; i; ) e(t, i.vars.defaults), (i = i.parent || i._dp);
		return t;
	},
	Yu = function (t, i) {
		for (var e = t.length, n = e === i.length; n && e-- && t[e] === i[e]; );
		return e < 0;
	},
	ic = function (t, i, e, n, r) {
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
	eo = function (t, i, e, n) {
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
	Xu = function (t) {
		for (var i = t.parent; i && i.parent; )
			(i._dirty = 1), i.totalDuration(), (i = i.parent);
		return t;
	},
	No = function (t, i, e, n) {
		return (
			t._startAt &&
			(De
				? t._startAt.revert(Ds)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(i, !0, n))
		);
	},
	qu = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	Wa = function (t) {
		return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	sr = function (t, i) {
		var e = Math.floor((t /= i));
		return t && e === t ? e - 1 : e;
	},
	qs = function (t, i) {
		return (
			(t - i._start) * i._ts +
			(i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
		);
	},
	io = function (t) {
		return (t._end = de(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || Ft) || 0),
		));
	},
	no = function (t, i) {
		var e = t._dp;
		return (
			e &&
				e.smoothChildTiming &&
				t._ts &&
				((t._start = de(
					e._time -
						(t._ts > 0
							? i / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts),
				)),
				io(t),
				e._dirty || Tn(e, t)),
			t
		);
	},
	nc = function (t, i) {
		var e;
		if (
			((i._time ||
				(!i._dur && i._initted) ||
				(i._start < t._time && (i._dur || !i.add))) &&
				((e = qs(t.rawTime(), i)),
				(!i._dur || as(0, i.totalDuration(), e) - i._tTime > Ft) &&
					i.render(e, !0)),
			Tn(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (e = t; e._dp; )
					e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
			t._zTime = -Ft;
		}
	},
	Pi = function (t, i, e, n) {
		return (
			i.parent && an(i),
			(i._start = de(
				(Vi(e) ? e : e || t !== $t ? li(t, e, i) : t._time) + i._delay,
			)),
			(i._end = de(
				i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0),
			)),
			ic(t, i, "_first", "_last", t._sort ? "_start" : 0),
			Fo(i) || (t._recent = i),
			n || nc(t, i),
			t._ts < 0 && no(t, t._tTime),
			t
		);
	},
	rc = function (t, i) {
		return (
			(si.ScrollTrigger || pa("scrollTrigger", i)) &&
			si.ScrollTrigger.create(i, t)
		);
	},
	sc = function (t, i, e, n, r) {
		if ((va(t, i, r), !t._initted)) return 1;
		if (
			!e &&
			t._pt &&
			!De &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Ql !== ti.frame
		)
			return rn.push(t), (t._lazy = [r, n]), 1;
	},
	Hu = function a(t) {
		var i = t.parent;
		return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || a(i));
	},
	Fo = function (t) {
		var i = t.data;
		return i === "isFromStart" || i === "isStart";
	},
	$u = function (t, i, e, n) {
		var r = t.ratio,
			s =
				i < 0 ||
				(!i &&
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
				((c = as(0, t._tDur, i)),
				(f = sr(c, o)),
				t._yoyo && f & 1 && (s = 1 - s),
				f !== sr(t._tTime, o) &&
					((r = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== r || De || n || t._zTime === Ft || (!i && t._zTime))
		) {
			if (!t._initted && sc(t, i, n, e, c)) return;
			for (
				d = t._zTime,
					t._zTime = i || (e ? Ft : 0),
					e || (e = i && !d),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = c,
					u = t._pt;
				u;

			)
				u.r(s, u.d), (u = u._next);
			i < 0 && No(t, i, e, !0),
				t._onUpdate && !e && ni(t, "onUpdate"),
				c && t._repeat && !e && t.parent && ni(t, "onRepeat"),
				(i >= t._tDur || i < 0) &&
					t.ratio === s &&
					(s && an(t, 1),
					!e &&
						!De &&
						(ni(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = i);
	},
	Vu = function (t, i, e) {
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
			s = de(i) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !n && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = r ? (r < 0 ? 1e10 : de(s * (r + 1) + t._rDelay * r)) : s),
			o > 0 && !n && no(t, (t._tTime = t._tDur * o)),
			t.parent && io(t),
			e || Tn(t.parent, t),
			t
		);
	},
	ja = function (t) {
		return t instanceof Re ? Tn(t) : or(t, t._dur);
	},
	Wu = { _start: 0, endTime: Ur, totalDuration: Ur },
	li = function a(t, i, e) {
		var n = t.labels,
			r = t._recent || Wu,
			s = t.duration() >= fi ? r.endTime(!1) : t._dur,
			o,
			c,
			u;
		return he(i) && (isNaN(i) || i in n)
			? ((c = i.charAt(0)),
				(u = i.substr(-1) === "%"),
				(o = i.indexOf("=")),
				c === "<" || c === ">"
					? (o >= 0 && (i = i.replace(/=/, "")),
						(c === "<" ? r._start : r.endTime(r._repeat >= 0)) +
							(parseFloat(i.substr(1)) || 0) *
								(u ? (o < 0 ? r : e).totalDuration() / 100 : 1))
					: o < 0
						? (i in n || (n[i] = s), n[i])
						: ((c = parseFloat(i.charAt(o - 1) + i.substr(o + 1))),
							u && e && (c = (c / 100) * (Oe(e) ? e[0] : e).totalDuration()),
							o > 1 ? a(t, i.substr(0, o - 1), e) + c : s + c))
			: i == null
				? s
				: +i;
	},
	Ar = function (t, i, e) {
		var n = Vi(i[1]),
			r = (n ? 2 : 1) + (t < 2 ? 0 : 1),
			s = i[r],
			o,
			c;
		if ((n && (s.duration = i[1]), (s.parent = e), t)) {
			for (o = s, c = e; c && !("immediateRender" in o); )
				(o = c.vars.defaults || {}), (c = qe(c.vars.inherit) && c.parent);
			(s.immediateRender = qe(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = i[r - 1]);
		}
		return new ne(i[0], s, i[r + 1]);
	},
	un = function (t, i) {
		return t || t === 0 ? i(t) : i;
	},
	as = function (t, i, e) {
		return e < t ? t : e > i ? i : e;
	},
	Me = function (t, i) {
		return !he(t) || !(i = Ru.exec(t)) ? "" : i[1];
	},
	ju = function (t, i, e) {
		return un(e, function (n) {
			return as(t, i, n);
		});
	},
	Bo = [].slice,
	oc = function (t, i) {
		return (
			t &&
			Ri(t) &&
			"length" in t &&
			((!i && !t.length) || (t.length - 1 in t && Ri(t[0]))) &&
			!t.nodeType &&
			t !== Oi
		);
	},
	Uu = function (t, i, e) {
		return (
			e === void 0 && (e = []),
			t.forEach(function (n) {
				var r;
				return (he(n) && !i) || oc(n, 1)
					? (r = e).push.apply(r, di(n))
					: e.push(n);
			}) || e
		);
	},
	di = function (t, i, e) {
		return zt && !i && zt.selector
			? zt.selector(t)
			: he(t) && !e && (Io || !ar())
				? Bo.call((i || ha).querySelectorAll(t), 0)
				: Oe(t)
					? Uu(t, e)
					: oc(t)
						? Bo.call(t, 0)
						: t
							? [t]
							: [];
	},
	zo = function (t) {
		return (
			(t = di(t)[0] || jr("Invalid scope") || {}),
			function (i) {
				var e = t.current || t.nativeElement || t;
				return di(
					i,
					e.querySelectorAll
						? e
						: e === t
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
		var i = Ri(t) ? t : { each: t },
			e = Sn(i.ease),
			n = i.from || 0,
			r = parseFloat(i.base) || 0,
			s = {},
			o = n > 0 && n < 1,
			c = isNaN(n) || o,
			u = i.axis,
			f = n,
			d = n;
		return (
			he(n)
				? (f = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
				: !o && c && ((f = n[0]), (d = n[1])),
			function (p, l, g) {
				var h = (g || i).length,
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
					if (((k = i.grid === "auto" ? 0 : (i.grid || [1, fi])[1]), !k)) {
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
							(parseFloat(i.amount) ||
								parseFloat(i.each) *
									(k > h
										? h - 1
										: u
											? u === "y"
												? h / k
												: k
											: Math.max(k, h / k)) ||
								0) * (n === "edges" ? -1 : 1)),
						(m.b = h < 0 ? r - h : r),
						(m.u = Me(i.amount || i.each) || 0),
						(e = e && h < 0 ? yc(e) : e);
				}
				return (
					(h = (m[p] - m.min) / m.max || 0),
					de(m.b + (e ? e(h) : h) * m.v) + m.u
				);
			}
		);
	},
	Yo = function (t) {
		var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (e) {
			var n = de(Math.round(parseFloat(e) / t) * t * i);
			return (n - (n % 1)) / i + (Vi(e) ? 0 : Me(e));
		};
	},
	cc = function (t, i) {
		var e = Oe(t),
			n,
			r;
		return (
			!e &&
				Ri(t) &&
				((n = e = t.radius || fi),
				t.values
					? ((t = di(t.values)), (r = !Vi(t[0])) && (n *= n))
					: (t = Yo(t.increment))),
			un(
				i,
				e
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
	uc = function (t, i, e, n) {
		return un(Oe(t) ? !i : e === !0 ? !!(e = 0) : !n, function () {
			return Oe(t)
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
	Gu = function () {
		for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
			i[e] = arguments[e];
		return function (n) {
			return i.reduce(function (r, s) {
				return s(r);
			}, n);
		};
	},
	Ku = function (t, i) {
		return function (e) {
			return t(parseFloat(e)) + (i || Me(e));
		};
	},
	Qu = function (t, i, e) {
		return dc(t, i, 0, 1, e);
	},
	fc = function (t, i, e) {
		return un(e, function (n) {
			return t[~~i(n)];
		});
	},
	Zu = function a(t, i, e) {
		var n = i - t;
		return Oe(t)
			? fc(t, a(0, t.length), i)
			: un(e, function (r) {
					return ((n + ((r - t) % n)) % n) + t;
				});
	},
	Ju = function a(t, i, e) {
		var n = i - t,
			r = n * 2;
		return Oe(t)
			? fc(t, a(0, t.length - 1), i)
			: un(e, function (s) {
					return (s = (r + ((s - t) % r)) % r || 0), t + (s > n ? r - s : s);
				});
	},
	Gr = function (t) {
		for (var i = 0, e = "", n, r, s, o; ~(n = t.indexOf("random(", i)); )
			(s = t.indexOf(")", n)),
				(o = t.charAt(n + 7) === "["),
				(r = t.substr(n + 7, s - n - 7).match(o ? jl : Lo)),
				(e +=
					t.substr(i, n - i) + uc(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
				(i = s + 1);
		return e + t.substr(i, t.length - i);
	},
	dc = function (t, i, e, n, r) {
		var s = i - t,
			o = n - e;
		return un(r, function (c) {
			return e + (((c - t) / s) * o || 0);
		});
	},
	tf = function a(t, i, e, n) {
		var r = isNaN(t + i)
			? 0
			: function (l) {
					return (1 - l) * t + l * i;
				};
		if (!r) {
			var s = he(t),
				o = {},
				c,
				u,
				f,
				d,
				p;
			if ((e === !0 && (n = 1) && (e = null), s))
				(t = { p: t }), (i = { p: i });
			else if (Oe(t) && !Oe(i)) {
				for (f = [], d = t.length, p = d - 2, u = 1; u < d; u++)
					f.push(a(t[u - 1], t[u]));
				d--,
					(r = function (g) {
						g *= d;
						var h = Math.min(p, ~~g);
						return f[h](g - h);
					}),
					(e = i);
			} else n || (t = En(Oe(t) ? [] : {}, t));
			if (!f) {
				for (c in i) ya.call(o, t, c, "get", i[c]);
				r = function (g) {
					return ba(g, o) || (s ? t.p : t);
				};
			}
		}
		return un(e, r);
	},
	Ua = function (t, i, e) {
		var n = t.labels,
			r = fi,
			s,
			o,
			c;
		for (s in n)
			(o = n[s] - i),
				o < 0 == !!e && o && r > (o = Math.abs(o)) && ((c = s), (r = o));
		return c;
	},
	ni = function (t, i, e) {
		var n = t.vars,
			r = n[i],
			s = zt,
			o = t._ctx,
			c,
			u,
			f;
		if (r)
			return (
				(c = n[i + "Params"]),
				(u = n.callbackScope || t),
				e && rn.length && Ys(),
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
				var i = t.name,
					e = Kt(t),
					n =
						i && !e && t.init
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
					if (Je[i]) return;
					pi(n, pi(Xs(t, r), s)),
						En(n.prototype, En(r, Xs(t, s))),
						(Je[(n.prop = i)] = n),
						t.targetTest && (Os.push(n), (ga[i] = 1)),
						(i =
							(i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
							"Plugin");
				}
				Kl(i, n), t.register && t.register(We, n, $e);
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
	co = function (t, i, e) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? i + (e - i) * t * 6
				: t < 0.5
					? e
					: t * 3 < 2
						? i + (e - i) * (2 / 3 - t) * 6
						: i) *
				Lt +
				0.5) |
				0
		);
	},
	gc = function (t, i, e) {
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
				if (((n = g = t.match(Lo)), !i))
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
					return (n = t.match(Vl)), e && n.length < 4 && (n[3] = 1), n;
			} else n = t.match(Lo) || wr.transparent;
			n = n.map(Number);
		}
		return (
			i &&
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
			e && n.length < 4 && (n[3] = 1),
			n
		);
	},
	_c = function (t) {
		var i = [],
			e = [],
			n = -1;
		return (
			t.split(sn).forEach(function (r) {
				var s = r.match(Wn) || [];
				i.push.apply(i, s), e.push((n += s.length + 1));
			}),
			(i.c = e),
			i
		);
	},
	Ga = function (t, i, e) {
		var n = "",
			r = (t + n).match(sn),
			s = i ? "hsla(" : "rgba(",
			o = 0,
			c,
			u,
			f,
			d;
		if (!r) return t;
		if (
			((r = r.map(function (p) {
				return (
					(p = gc(p, i, 1)) &&
					s +
						(i ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
						")"
				);
			})),
			e && ((f = _c(t)), (c = e.c), c.join(n) !== f.c.join(n)))
		)
			for (u = t.replace(sn, "1").split(Wn), d = u.length - 1; o < d; o++)
				n +=
					u[o] +
					(~c.indexOf(o)
						? r.shift() || s + "0,0,0,0)"
						: (f.length ? f : r.length ? r : e).shift());
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
		var i = t.join(" "),
			e;
		if (((sn.lastIndex = 0), sn.test(i)))
			return (
				(e = ef.test(i)),
				(t[1] = Ga(t[1], e)),
				(t[0] = Ga(t[0], e, _c(t[1]))),
				!0
			);
	},
	Kr,
	ti = (function () {
		var a = Date.now,
			t = 500,
			i = 33,
			e = a(),
			n = e,
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
					((_ > t || _ < 0) && (e += _ - i),
					(n += _),
					(b = n - e),
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
					(t = m || 1 / 0), (i = Math.min(_ || 33, t));
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
			var i = {},
				e = t.substr(1, t.length - 3).split(":"),
				n = e[0],
				r = 1,
				s = e.length,
				o,
				c,
				u;
			r < s;
			r++
		)
			(c = e[r]),
				(o = r !== s - 1 ? c.lastIndexOf(",") : c.length),
				(u = c.substr(0, o)),
				(i[n] = isNaN(u) ? u.replace(rf, "").trim() : +u),
				(n = c.substr(o + 1).trim());
		return i;
	},
	of = function (t) {
		var i = t.indexOf("(") + 1,
			e = t.indexOf(")"),
			n = t.indexOf("(", i);
		return t.substring(i, ~n && n < e ? t.indexOf(")", e + 1) : e);
	},
	af = function (t) {
		var i = (t + "").split("("),
			e = St[i[0]];
		return e && i.length > 1 && e.config
			? e.config.apply(
					null,
					~t.indexOf("{") ? [sf(i[1])] : of(t).split(",").map(tc),
				)
			: St._CE && nf.test(t)
				? St._CE("", t)
				: e;
	},
	yc = function (t) {
		return function (i) {
			return 1 - t(1 - i);
		};
	},
	vc = function a(t, i) {
		for (var e = t._first, n; e; )
			e instanceof Re
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
		return (t && (Kt(t) ? t : St[t] || af(t))) || i;
	},
	Bn = function (t, i, e, n) {
		e === void 0 &&
			(e = function (c) {
				return 1 - i(1 - c);
			}),
			n === void 0 &&
				(n = function (c) {
					return c < 0.5 ? i(c * 2) / 2 : 1 - i((1 - c) * 2) / 2;
				});
		var r = { easeIn: i, easeOut: e, easeInOut: n },
			s;
		return (
			He(t, function (o) {
				(St[o] = si[o] = r), (St[(s = o.toLowerCase())] = e);
				for (var c in r)
					St[
						s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
					] = St[o + "." + c] = r[c];
			}),
			r
		);
	},
	xc = function (t) {
		return function (i) {
			return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
		};
	},
	uo = function a(t, i, e) {
		var n = i >= 1 ? i : 1,
			r = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
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
	fo = function a(t, i) {
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
						: xc(e);
		return (
			(n.config = function (r) {
				return a(t, r);
			}),
			n
		);
	};
He("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var i = t < 5 ? t + 1 : t;
	Bn(
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
St.Linear.easeNone = St.none = St.Linear.easeIn;
Bn("Elastic", uo("in"), uo("out"), uo());
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
			config: function (t, i) {
				t === void 0 && (t = 1);
				var e = 1 / t,
					n = t + (i ? 0 : 1),
					r = i ? 1 : 0,
					s = 1 - Ft;
				return function (o) {
					return (((n * as(0, s, o)) | 0) + r) * e;
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
var wc = function (t, i) {
		(this.id = Au++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = i),
			(this.get = i ? i.get : Zl),
			(this.set = i ? i.getSetter : wa);
	},
	Qr = (function () {
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
				Kr || ti.wake();
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
					for (no(this, e), !r._dp || r.parent || nc(r, this); r && r.parent; )
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
						(this._initted && Math.abs(this._zTime) === Ft) ||
						(!e && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = e), Jl(this, e, n)),
					this
				);
			}),
			(t.time = function (e, n) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), e + Wa(this)) %
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
								Wa(this),
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
				if (!arguments.length) return this._rts === -Ft ? 0 : this._rts;
				if (this._rts === e) return this;
				var r =
					this.parent && this._ts ? qs(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +e || 0),
					(this._ts = this._ps || e === -Ft ? 0 : this._rts),
					this.totalTime(as(-Math.abs(this._delay), this._tDur, r), n !== !1),
					io(this),
					Xu(this)
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
											Math.abs(this._zTime) !== Ft &&
											(this._tTime -= Ft),
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
					(qe(e) ? this.totalDuration() : this.duration()) /
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
							? qs(n.rawTime(e), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (e) {
				e === void 0 && (e = Fu);
				var n = De;
				return (
					(De = e),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(e),
						this.totalTime(-0.01, e.suppressEvents)),
					this.data !== "nested" && e.kill !== !1 && this.kill(),
					(De = n),
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
					? ((this._repeat = e === 1 / 0 ? -2 : e), ja(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (e) {
				if (arguments.length) {
					var n = this._time;
					return (this._rDelay = e), ja(this), n ? this.time(n) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (e) {
				return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
			}),
			(t.seek = function (e, n) {
				return this.totalTime(li(this, e), qe(n));
			}),
			(t.restart = function (e, n) {
				return this.play().totalTime(e ? -this._delay : 0, qe(n));
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
							this.timeScale(-this._rts || (e ? -Ft : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -Ft), this;
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
						r < this.endTime(!0) - Ft)
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
					var s = Kt(e) ? e : ec,
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
	function t(e, n) {
		var r;
		return (
			e === void 0 && (e = {}),
			(r = a.call(this, e) || this),
			(r.labels = {}),
			(r.smoothChildTiming = !!e.smoothChildTiming),
			(r.autoRemoveChildren = !!e.autoRemoveChildren),
			(r._sort = qe(e.sortChildren)),
			$t && Pi(e.parent || $t, Fi(r), n),
			e.reversed && r.reverse(),
			e.paused && r.paused(!0),
			e.scrollTrigger && rc(Fi(r), e.scrollTrigger),
			r
		);
	}
	var i = t.prototype;
	return (
		(i.to = function (n, r, s) {
			return Ar(0, arguments, this), this;
		}),
		(i.from = function (n, r, s) {
			return Ar(1, arguments, this), this;
		}),
		(i.fromTo = function (n, r, s, o) {
			return Ar(2, arguments, this), this;
		}),
		(i.set = function (n, r, s) {
			return (
				(r.duration = 0),
				(r.parent = this),
				Er(r).repeatDelay || (r.repeat = 0),
				(r.immediateRender = !!r.immediateRender),
				new ne(n, r, li(this, s), 1),
				this
			);
		}),
		(i.call = function (n, r, s) {
			return Pi(this, ne.delayedCall(0, n, r), s);
		}),
		(i.staggerTo = function (n, r, s, o, c, u, f) {
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
		(i.staggerFrom = function (n, r, s, o, c, u, f) {
			return (
				(s.runBackwards = 1),
				(Er(s).immediateRender = qe(s.immediateRender)),
				this.staggerTo(n, r, s, o, c, u, f)
			);
		}),
		(i.staggerFromTo = function (n, r, s, o, c, u, f, d) {
			return (
				(o.startAt = s),
				(Er(o).immediateRender = qe(o.immediateRender)),
				this.staggerTo(n, r, o, c, u, f, d)
			);
		}),
		(i.render = function (n, r, s) {
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
		(i.add = function (n, r) {
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
		(i.getChildren = function (n, r, s, o) {
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
		(i.getById = function (n) {
			for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
				if (r[s].vars.id === n) return r[s];
		}),
		(i.remove = function (n) {
			return he(n)
				? this.removeLabel(n)
				: Kt(n)
					? this.killTweensOf(n)
					: (eo(this, n),
						n === this._recent && (this._recent = this._last),
						Tn(this));
		}),
		(i.totalTime = function (n, r) {
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
		(i.addLabel = function (n, r) {
			return (this.labels[n] = li(this, r)), this;
		}),
		(i.removeLabel = function (n) {
			return delete this.labels[n], this;
		}),
		(i.addPause = function (n, r, s) {
			var o = ne.delayedCall(0, r || Ur, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), Pi(this, o, li(this, n))
			);
		}),
		(i.removePause = function (n) {
			var r = this._first;
			for (n = li(this, n); r; )
				r._start === n && r.data === "isPause" && an(r), (r = r._next);
		}),
		(i.killTweensOf = function (n, r, s) {
			for (var o = this.getTweensOf(n, s), c = o.length; c--; )
				Qi !== o[c] && o[c].kill(n, r);
			return this;
		}),
		(i.getTweensOf = function (n, r) {
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
		(i.tweenTo = function (n, r) {
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
		(i.tweenFromTo = function (n, r, s) {
			return this.tweenTo(r, pi({ startAt: { time: li(this, n) } }, s));
		}),
		(i.recent = function () {
			return this._recent;
		}),
		(i.nextLabel = function (n) {
			return n === void 0 && (n = this._time), Ua(this, li(this, n));
		}),
		(i.previousLabel = function (n) {
			return n === void 0 && (n = this._time), Ua(this, li(this, n), 1);
		}),
		(i.currentLabel = function (n) {
			return arguments.length
				? this.seek(n, !0)
				: this.previousLabel(this._time + Ft);
		}),
		(i.shiftChildren = function (n, r, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, c = this.labels, u; o; )
				o._start >= s && ((o._start += n), (o._end += n)), (o = o._next);
			if (r) for (u in c) c[u] >= s && (c[u] += n);
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
var lf = function (t, i, e, n, r, s, o) {
		var c = new $e(this._pt, t, i, 0, 1, Oc, null, r),
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
			c.b = e,
				c.e = n,
				e += "",
				n += "",
				(_ = ~n.indexOf("random(")) && (n = Gr(n)),
				s && ((y = [e, n]), s(y, t, i), (e = y[0]), (n = y[1])),
				p = e.match(ao) || [];
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
	ya = function (t, i, e, n, r, s, o, c, u, f) {
		Kt(n) && (n = n(r || 0, t, s));
		var d = t[i],
			p =
				e !== "get"
					? e
					: Kt(d)
						? u
							? t[
									i.indexOf("set") || !Kt(t["get" + i.substr(3)])
										? i
										: "get" + i.substr(3)
								](u)
							: t[i]()
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
						i,
						+p || 0,
						n - (p || 0),
						typeof d == "boolean" ? gf : Dc,
						0,
						l,
					)),
					u && (g.fp = u),
					o && g.modifier(o, this, t),
					(this._pt = g))
				: (!d && !(i in t) && pa(i, n),
					lf.call(this, t, i, p, n, l, c || ri.stringFilter, u));
	},
	cf = function (t, i, e, n, r) {
		if (
			(Kt(t) && (t = Lr(t, r, i, e, n)),
			!Ri(t) || (t.style && t.nodeType) || Oe(t) || $l(t))
		)
			return he(t) ? Lr(t, r, i, e, n) : t;
		var s = {},
			o;
		for (o in t) s[o] = Lr(t[o], r, i, e, n);
		return s;
	},
	bc = function (t, i, e, n, r, s) {
		var o, c, u, f;
		if (
			Je[t] &&
			(o = new Je[t]()).init(
				r,
				o.rawVars ? i[t] : cf(i[t], n, r, s, e),
				e,
				n,
				s,
			) !== !1 &&
			((e._pt = c = new $e(e._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
			e !== jn)
		)
			for (u = e._ptLookup[e._targets.indexOf(r)], f = o._props.length; f--; )
				u[o._props[f]] = c;
		return o;
	},
	Qi,
	Xo,
	va = function a(t, i, e) {
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
					i < 0 && f && o && !l ? h.render(-1, !0) : h.revert(f && g ? Ds : Nu),
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
					i < 0 && (De || (!o && !l)) && t._startAt.revert(Ds),
					o && g && i <= 0 && e <= 0)
				) {
					i && (t._zTime = i);
					return;
				}
			} else if (f && g && !h) {
				if (
					(i && (o = !1),
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
					i < 0 && (De ? t._startAt.revert(Ds) : t._startAt.render(-1, !0)),
					(t._zTime = i),
					!o)
				)
					a(t._startAt, Ft, Ft);
				else if (!i) return;
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
						$t.killTweensOf(k, X, t.globalTime(i)),
						(H = !t.parent),
						(Qi = 0)),
					t._pt && c && (Ro[F.id] = 1);
			}
			L && Cc(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = u),
			(t._initted = (!t._op || t._pt) && !H),
			p && i <= 0 && x.render(fi, !0, !0);
	},
	uf = function (t, i, e, n, r, s, o, c) {
		var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
			f,
			d,
			p,
			l;
		if (!u)
			for (
				u = t._ptCache[i] = [], p = t._ptLookup, l = t._targets.length;
				l--;

			) {
				if (((f = p[l][i]), f && f.d && f.d._pt))
					for (f = f.d._pt; f && f.p !== i && f.fp !== i; ) f = f._next;
				if (!f)
					return (
						(Xo = 1),
						(t.vars[i] = "+=0"),
						va(t, o),
						(Xo = 0),
						c ? jr(i + " not eligible for reset") : 1
					);
				u.push(f);
			}
		for (l = u.length; l--; )
			(d = u[l]),
				(f = d._pt || d),
				(f.s = (n || n === 0) && !r ? n : f.s + (n || 0) + s * f.c),
				(f.c = e - f.s),
				d.e && (d.e = Zt(e) + Me(d.e)),
				d.b && (d.b = f.s + Me(d.b));
	},
	ff = function (t, i) {
		var e = t[0] ? bn(t[0]).harness : 0,
			n = e && e.aliases,
			r,
			s,
			o,
			c;
		if (!n) return i;
		r = En({}, i);
		for (s in n)
			if (s in r) for (c = n[s].split(","), o = c.length; o--; ) r[c[o]] = r[s];
		return r;
	},
	df = function (t, i, e, n) {
		var r = i.ease || n || "power1.inOut",
			s,
			o;
		if (Oe(i))
			(o = e[t] || (e[t] = [])),
				i.forEach(function (c, u) {
					return o.push({ t: (u / (i.length - 1)) * 100, v: c, e: r });
				});
		else
			for (s in i)
				(o = e[s] || (e[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: i[s], e: r });
	},
	Lr = function (t, i, e, n, r) {
		return Kt(t)
			? t.call(i, e, n, r)
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
	function t(e, n, r, s) {
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
			S = (Oe(e) || $l(e) ? Vi(e[0]) : "length" in n) ? [e] : di(e),
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
						"GSAP target " + e + " not found. https://gsap.com",
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
	var i = t.prototype;
	return (
		(i.render = function (n, r, s) {
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
		(i.resetTo = function (n, r, s, o, c) {
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
			i = Bo.call(arguments, 0);
		return i.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, i);
	};
});
var xa = function (t, i, e) {
		return (t[i] = e);
	},
	Mc = function (t, i, e) {
		return t[i](e);
	},
	hf = function (t, i, e, n) {
		return t[i](n.fp, e);
	},
	pf = function (t, i, e) {
		return t.setAttribute(i, e);
	},
	wa = function (t, i) {
		return Kt(t[i]) ? Mc : fa(t[i]) && t.setAttribute ? pf : xa;
	},
	Dc = function (t, i) {
		return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
	},
	gf = function (t, i) {
		return i.set(i.t, i.p, !!(i.s + i.c * t), i);
	},
	Oc = function (t, i) {
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
	ba = function (t, i) {
		for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
	},
	_f = function (t, i, e, n) {
		for (var r = this._pt, s; r; )
			(s = r._next), r.p === n && r.modifier(t, i, e), (r = s);
	},
	mf = function (t) {
		for (var i = this._pt, e, n; i; )
			(n = i._next),
				(i.p === t && !i.op) || i.op === t
					? eo(this, i, "_pt")
					: i.dep || (e = 1),
				(i = n);
		return !e;
	},
	yf = function (t, i, e, n) {
		n.mSet(t, i, n.m.call(n.tween, e, n.mt), n);
	},
	Cc = function (t) {
		for (var i = t._pt, e, n, r, s; i; ) {
			for (e = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
			(i._prev = n ? n._prev : s) ? (i._prev._next = i) : (r = i),
				(i._next = n) ? (n._prev = i) : (s = i),
				(i = e);
		}
		t._pt = r;
	},
	$e = (function () {
		function a(i, e, n, r, s, o, c, u, f) {
			(this.t = e),
				(this.s = r),
				(this.c = s),
				(this.p = n),
				(this.r = o || Dc),
				(this.d = c || this),
				(this.set = u || xa),
				(this.pr = f || 0),
				(this._next = i),
				i && (i._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (e, n, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = yf),
					(this.m = e),
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
		return (Cs[t] || vf).map(function (i) {
			return i();
		});
	},
	qo = function () {
		var t = Date.now(),
			i = [];
		t - Ka > 2 &&
			(ho("matchMediaInit"),
			Mn.forEach(function (e) {
				var n = e.queries,
					r = e.conditions,
					s,
					o,
					c,
					u;
				for (o in n)
					(s = Oi.matchMedia(n[o]).matches),
						s && (c = 1),
						s !== r[o] && ((r[o] = s), (u = 1));
				u && (e.revert(), c && i.push(e));
			}),
			ho("matchMediaRevert"),
			i.forEach(function (e) {
				return e.onMatch(e, function (n) {
					return e.add(null, n);
				});
			}),
			(Ka = t),
			ho("matchMedia"));
	},
	Pc = (function () {
		function a(i, e) {
			(this.selector = e && zo(e)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = xf++),
				i && this.add(i);
		}
		var t = a.prototype;
		return (
			(t.add = function (e, n, r) {
				Kt(e) && ((r = n), (n = e), (e = Kt));
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
					e === Kt
						? o(s, function (c) {
								return s.add(null, c);
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
							: n instanceof ne &&
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
											return f.t.revert(e);
										}),
										c = r.data.length;
									c--;

								)
									(u = r.data[c]),
										u instanceof Re
											? u.data !== "nested" &&
												(u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
											: !(u instanceof ne) && u.revert && u.revert(e);
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
	wf = (function () {
		function a(i) {
			(this.contexts = []), (this.scope = i), zt && zt.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (e, n, r) {
				Ri(e) || (e = { matches: e });
				var s = new Pc(0, r || this.scope),
					o = (s.conditions = {}),
					c,
					u,
					f;
				zt && !s.selector && (s.selector = zt.selector),
					this.contexts.push(s),
					(n = s.add("onMatch", n)),
					(s.queries = e);
				for (u in e)
					u === "all"
						? (f = 1)
						: ((c = Oi.matchMedia(e[u])),
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
	Hs = {
		registerPlugin: function () {
			for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
				i[e] = arguments[e];
			i.forEach(function (n) {
				return pc(n);
			});
		},
		timeline: function (t) {
			return new Re(t);
		},
		getTweensOf: function (t, i) {
			return $t.getTweensOf(t, i);
		},
		getProperty: function (t, i, e, n) {
			he(t) && (t = di(t)[0]);
			var r = bn(t || {}).get,
				s = e ? ec : tc;
			return (
				e === "native" && (e = ""),
				t &&
					(i
						? s(((Je[i] && Je[i].get) || r)(t, i, e, n))
						: function (o, c, u) {
								return s(((Je[o] && Je[o].get) || r)(t, o, c, u));
							})
			);
		},
		quickSetter: function (t, i, e) {
			if (((t = di(t)), t.length > 1)) {
				var n = t.map(function (f) {
						return We.quickSetter(f, i, e);
					}),
					r = n.length;
				return function (f) {
					for (var d = r; d--; ) n[d](f);
				};
			}
			t = t[0] || {};
			var s = Je[i],
				o = bn(t),
				c = (o.harness && (o.harness.aliases || {})[i]) || i,
				u = s
					? function (f) {
							var d = new s();
							(jn._pt = 0),
								d.init(t, e ? f + e : f, jn, 0, [t]),
								d.render(1, d),
								jn._pt && ba(1, jn);
						}
					: o.set(t, c);
			return s
				? u
				: function (f) {
						return u(t, c, e ? f + e : f, o, 1);
					};
		},
		quickTo: function (t, i, e) {
			var n,
				r = We.to(
					t,
					En(((n = {}), (n[i] = "+=0.1"), (n.paused = !0), n), e || {}),
				),
				s = function (c, u, f) {
					return r.resetTo(i, c, u, f);
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
			var i = t.name,
				e = t.effect,
				n = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(n || "").split(",").forEach(function (o) {
				return (
					o && !Je[o] && !si[o] && jr(i + " effect requires " + o + " plugin.")
				);
			}),
				(lo[i] = function (o, c, u) {
					return e(di(o), pi(c || {}, r), u);
				}),
				s &&
					(Re.prototype[i] = function (o, c, u) {
						return this.add(lo[i](o, Ri(c) ? c : (u = c) && {}, this), u);
					});
		},
		registerEase: function (t, i) {
			St[t] = Sn(i);
		},
		parseEase: function (t, i) {
			return arguments.length ? Sn(t, i) : St;
		},
		getById: function (t) {
			return $t.getById(t);
		},
		exportRoot: function (t, i) {
			t === void 0 && (t = {});
			var e = new Re(t),
				n,
				r;
			for (
				e.smoothChildTiming = qe(t.smoothChildTiming),
					$t.remove(e),
					e._dp = 0,
					e._time = e._tTime = $t._time,
					n = $t._first;
				n;

			)
				(r = n._next),
					(i ||
						!(
							!n._dur &&
							n instanceof ne &&
							n.vars.onComplete === n._targets[0]
						)) &&
						Pi(e, n, n._start - n._delay),
					(n = r);
			return Pi($t, e, 0), e;
		},
		context: function (t, i) {
			return t ? new Pc(t, i) : zt;
		},
		matchMedia: function (t) {
			return new wf(t);
		},
		matchMediaRefresh: function () {
			return (
				Mn.forEach(function (t) {
					var i = t.conditions,
						e,
						n;
					for (n in i) i[n] && ((i[n] = !1), (e = 1));
					e && t.revert();
				}) || qo()
			);
		},
		addEventListener: function (t, i) {
			var e = Cs[t] || (Cs[t] = []);
			~e.indexOf(i) || e.push(i);
		},
		removeEventListener: function (t, i) {
			var e = Cs[t],
				n = e && e.indexOf(i);
			n >= 0 && e.splice(n, 1);
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
var bf = function (t, i) {
		for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
			e = e._next;
		return e;
	},
	Tf = function (t, i) {
		var e = t._targets,
			n,
			r,
			s;
		for (n in i)
			for (r = e.length; r--; )
				(s = t._ptLookup[r][n]),
					s &&
						(s = s.d) &&
						(s._pt && (s = bf(s, n)),
						s && s.modifier && s.modifier(i[n], t, e[r], n));
	},
	po = function (t, i) {
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
						i)
					) {
						c = {};
						for (u in r) c[u] = i(r[u]);
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
				init: function (t, i, e, n, r) {
					var s, o, c;
					this.tween = e;
					for (s in i)
						(c = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(c || 0) + "",
								i[s],
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
				render: function (t, i) {
					for (var e = i._pt; e; )
						De ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next);
				},
			},
			{
				name: "endArray",
				init: function (t, i) {
					for (var e = i.length; e--; )
						this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
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
	Ho = function (t, i) {
		return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
	},
	Of = function (t, i) {
		return i.set(
			i.t,
			i.p,
			t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
			i,
		);
	},
	Cf = function (t, i) {
		return i.set(
			i.t,
			i.p,
			t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
			i,
		);
	},
	Pf = function (t, i) {
		var e = i.s + i.c * t;
		i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
	},
	kc = function (t, i) {
		return i.set(i.t, i.p, t ? i.e : i.b, i);
	},
	Ec = function (t, i) {
		return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
	},
	kf = function (t, i, e) {
		return (t.style[i] = e);
	},
	Ef = function (t, i, e) {
		return t.style.setProperty(i, e);
	},
	Af = function (t, i, e) {
		return (t._gsap[i] = e);
	},
	Lf = function (t, i, e) {
		return (t._gsap.scaleX = t._gsap.scaleY = e);
	},
	If = function (t, i, e, n, r) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = e), s.renderTransform(r, s);
	},
	Rf = function (t, i, e, n, r) {
		var s = t._gsap;
		(s[i] = e), s.renderTransform(r, s);
	},
	Vt = "transform",
	Ve = Vt + "Origin",
	Nf = function a(t, i) {
		var e = this,
			n = this.target,
			r = n.style,
			s = n._gsap;
		if (t in Wi && r) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = Ei[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (e.tfm[o] = Bi(n, o));
							})
						: (this.tfm[t] = s.x ? s[t] : Bi(n, t)),
					t === Ve && (this.tfm.zOrigin = s.zOrigin);
			else
				return Ei.transform.split(",").forEach(function (o) {
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
	Ac = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Ff = function () {
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
								: t[r].replace(Ma, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) n[s] = this.tfm[s];
			n.svg &&
				(n.renderTransform(),
				i.setAttribute("data-svg-origin", this.svgo || "")),
				(r = Sa()),
				(!r || !r.isStart) &&
					!e[Vt] &&
					(Ac(e),
					n.zOrigin &&
						e[Ve] &&
						((e[Ve] += " " + n.zOrigin + "px"),
						(n.zOrigin = 0),
						n.renderTransform()),
					(n.uncache = 1));
		}
	},
	Lc = function (t, i) {
		var e = { target: t, props: [], revert: Ff, save: Nf };
		return (
			t._gsap || We.core.getCache(t),
			i &&
				i.split(",").forEach(function (n) {
					return e.save(n);
				}),
			e
		);
	},
	Ic,
	$o = function (t, i) {
		var e = Zi.createElementNS
			? Zi.createElementNS(
					(i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Zi.createElement(t);
		return e && e.style ? e : Zi.createElement(t);
	},
	Li = function a(t, i, e) {
		var n = getComputedStyle(t);
		return (
			n[i] ||
			n.getPropertyValue(i.replace(Ma, "-$1").toLowerCase()) ||
			n.getPropertyValue(i) ||
			(!e && a(t, lr(i) || i, 1)) ||
			""
		);
	},
	tl = "O,Moz,ms,Ms,Webkit".split(","),
	lr = function (t, i, e) {
		var n = i || xn,
			r = n.style,
			s = 5;
		if (t in r && !e) return t;
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
		var i = $o(
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
	el = function (t, i) {
		for (var e = i.length; e--; )
			if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
	},
	Rc = function (t) {
		var i;
		try {
			i = t.getBBox();
		} catch {
			i = go.call(t, !0);
		}
		return (
			(i && (i.width || i.height)) || t.getBBox === go || (i = go.call(t, !0)),
			i && !i.width && !i.x && !i.y
				? {
						x: +el(t, ["x", "cx", "x1"]) || 0,
						y: +el(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: i
		);
	},
	Nc = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Rc(t));
	},
	An = function (t, i) {
		if (i) {
			var e = t.style,
				n;
			i in Wi && i !== Ve && (i = Vt),
				e.removeProperty
					? ((n = i.substr(0, 2)),
						(n === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
						e.removeProperty(
							n === "--" ? i : i.replace(Ma, "-$1").toLowerCase(),
						))
					: e.removeAttribute(i);
		}
	},
	Ji = function (t, i, e, n, r, s) {
		var o = new $e(t._pt, i, e, 0, 1, s ? Ec : kc);
		return (t._pt = o), (o.b = n), (o.e = r), t._props.push(e), o;
	},
	il = { deg: 1, rad: 1, turn: 1 },
	Bf = { grid: 1, flex: 1 },
	ln = function a(t, i, e, n) {
		var r = parseFloat(e) || 0,
			s = (e + "").trim().substr((r + "").length) || "px",
			o = xn.style,
			c = Mf.test(i),
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
			(s !== "px" && !p && (r = a(t, i, e, "px")),
			(_ = t.getCTM && Nc(t)),
			(l || s === "%") && (Wi[i] || ~i.indexOf("adius")))
		)
			return (
				(g = _ ? t.getBBox()[c ? "width" : "height"] : t[f]),
				Zt(l ? (r / g) * d : (r / 100) * g)
			);
		if (
			((o[c ? "width" : "height"] = d + (p ? s : n)),
			(h =
				~i.indexOf("adius") || (n === "em" && t.appendChild && !u)
					? t
					: t.parentNode),
			_ && (h = (t.ownerSVGElement || {}).parentNode),
			(!h || h === Zi || !h.appendChild) && (h = Zi.body),
			(m = h._gsap),
			m && l && m.width && c && m.time === ti.time && !m.uncache)
		)
			return Zt((r / m.width) * d);
		if (l && (i === "height" || i === "width")) {
			var y = t.style[i];
			(t.style[i] = d + n), (g = t[f]), y ? (t.style[i] = y) : An(t, i);
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
	Bi = function (t, i, e, n) {
		var r;
		return (
			Ta || Vo(),
			i in Ei &&
				i !== "transform" &&
				((i = Ei[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
			Wi[i] && i !== "transform"
				? ((r = Jr(t, n)),
					(r =
						i !== "transformOrigin"
							? r[i]
							: r.svg
								? r.origin
								: Vs(Li(t, Ve)) + " " + r.zOrigin + "px"))
				: ((r = t.style[i]),
					(!r || r === "auto" || n || ~(r + "").indexOf("calc(")) &&
						(r =
							($s[i] && $s[i](t, i, e)) ||
							Li(t, i) ||
							Zl(t, i) ||
							(i === "opacity" ? 1 : 0))),
			e && !~(r + "").trim().indexOf(" ") ? ln(t, i, r, e) + e : r
		);
	},
	zf = function (t, i, e, n) {
		if (!e || e === "none") {
			var r = lr(i, t, 1),
				s = r && Li(t, r, 1);
			s && s !== e
				? ((i = r), (e = s))
				: i === "borderColor" && (e = Li(t, "borderTopColor"));
		}
		var o = new $e(this._pt, t.style, i, 0, 1, Oc),
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
			((o.b = e),
			(o.e = n),
			(e += ""),
			(n += ""),
			n === "auto" &&
				((h = t.style[i]),
				(t.style[i] = n),
				(n = Li(t, i) || n),
				h ? (t.style[i] = h) : An(t, i)),
			(f = [e, n]),
			mc(f),
			(e = f[0]),
			(n = f[1]),
			(p = e.match(Wn) || []),
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
							((S = S || ri.units[i] || x),
							c === n.length && ((n += S), (o.e += S))),
						x !== S && (l = ln(t, i, h, S) || 0),
						(o._pt = {
							_next: o._pt,
							p: y || u === 1 ? y : ",",
							s: l,
							c: _ - l,
							m: (g && g < 4) || i === "zIndex" ? Math.round : 0,
						}));
			o.c = c < n.length ? n.substring(c, n.length) : "";
		} else o.r = i === "display" && n === "none" ? Ec : kc;
		return Wl.test(n) && (o.e = 0), (this._pt = o), o;
	},
	nl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Yf = function (t) {
		var i = t.split(" "),
			e = i[0],
			n = i[1] || "50%";
		return (
			(e === "top" || e === "bottom" || n === "left" || n === "right") &&
				((t = e), (e = n), (n = t)),
			(i[0] = nl[e] || e),
			(i[1] = nl[n] || n),
			i.join(" ")
		);
	},
	Xf = function (t, i) {
		if (i.tween && i.tween._time === i.tween._dur) {
			var e = i.t,
				n = e.style,
				r = i.u,
				s = e._gsap,
				o,
				c,
				u;
			if (r === "all" || r === !0) (n.cssText = ""), (c = 1);
			else
				for (r = r.split(","), u = r.length; --u > -1; )
					(o = r[u]),
						Wi[o] && ((c = 1), (o = o === "transformOrigin" ? Ve : Vt)),
						An(e, o);
			c &&
				(An(e, Vt),
				s &&
					(s.svg && e.removeAttribute("transform"),
					Jr(e, 1),
					(s.uncache = 1),
					Ac(n)));
		}
	},
	$s = {
		clearProps: function (t, i, e, n, r) {
			if (r.data !== "isFromStart") {
				var s = (t._pt = new $e(t._pt, i, e, 0, 0, Xf));
				return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(e), 1;
			}
		},
	},
	Zr = [1, 0, 0, 1, 0, 0],
	Fc = {},
	Bc = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	rl = function (t) {
		var i = Li(t, Vt);
		return Bc(i) ? Zr : i.substr(7).match(Vl).map(Zt);
	},
	Da = function (t, i) {
		var e = t._gsap || bn(t),
			n = t.style,
			r = rl(t),
			s,
			o,
			c,
			u;
		return e.svg && t.getAttribute("transform")
			? ((c = t.transform.baseVal.consolidate().matrix),
				(r = [c.a, c.b, c.c, c.d, c.e, c.f]),
				r.join(",") === "1,0,0,1,0,0" ? Zr : r)
			: (r === Zr &&
					!t.offsetParent &&
					t !== Kn &&
					!e.svg &&
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
				i && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
	},
	Wo = function (t, i, e, n, r, s) {
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
			S = i.split(" "),
			x = parseFloat(S[0]) || 0,
			b = parseFloat(S[1]) || 0,
			P,
			M,
			O,
			k;
		e
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
			(o.origin = i),
			(o.originIsAbsolute = !!e),
			(t.style[Ve] = "0px 0px"),
			s &&
				(Ji(s, o, "xOrigin", u, x),
				Ji(s, o, "yOrigin", f, b),
				Ji(s, o, "xOffset", d, o.xOffset),
				Ji(s, o, "yOffset", p, o.yOffset)),
			t.setAttribute("data-svg-origin", x + " " + b);
	},
	Jr = function (t, i) {
		var e = t._gsap || new wc(t);
		if ("x" in e && !i && !e.uncache) return e;
		var n = t.style,
			r = e.scaleX < 0,
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
			(e.svg = !!(t.getCTM && Nc(t))),
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
			(M = Da(t, e.svg)),
			e.svg &&
				(e.uncache
					? ((tt = t.getBBox()),
						(u = e.xOrigin - tt.x + "px " + (e.yOrigin - tt.y) + "px"),
						(H = ""))
					: (H = !i && t.getAttribute("data-svg-origin")),
				Wo(t, H || u, !!H || e.originIsAbsolute, e.smooth !== !1, M)),
			(b = e.xOrigin || 0),
			(P = e.yOrigin || 0),
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
						e.svg && ((f -= b - (b * F + P * R)), (d -= P - (b * D + P * X))))
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
				e.svg &&
					((H = t.getAttribute("transform")),
					(e.forceCSS = t.setAttribute("transform", "") || !Bc(Li(t, Vt))),
					H && t.setAttribute("transform", H))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(r
					? ((l *= -1), (y += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
					: ((g *= -1), (y += y <= 0 ? 180 : -180))),
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
			(e.z = p + s),
			(e.scaleX = Zt(l)),
			(e.scaleY = Zt(g)),
			(e.rotation = Zt(h) + o),
			(e.rotationX = Zt(m) + o),
			(e.rotationY = Zt(_) + o),
			(e.skewX = y + o),
			(e.skewY = S + o),
			(e.transformPerspective = x + s),
			(e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
				(n[Ve] = Vs(u)),
			(e.xOffset = e.yOffset = 0),
			(e.force3D = ri.force3D),
			(e.renderTransform = e.svg ? Hf : Ic ? zc : qf),
			(e.uncache = 0),
			e
		);
	},
	Vs = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	_o = function (t, i, e) {
		var n = Me(i);
		return Zt(parseFloat(i) + parseFloat(ln(t, "x", e + "px", n))) + n;
	},
	qf = function (t, i) {
		(i.z = "0px"),
			(i.rotationY = i.rotationX = "0deg"),
			(i.force3D = 0),
			zc(t, i);
	},
	dn = "0deg",
	gr = "0px",
	hn = ") ",
	zc = function (t, i) {
		var e = i || this,
			n = e.xPercent,
			r = e.yPercent,
			s = e.x,
			o = e.y,
			c = e.z,
			u = e.rotation,
			f = e.rotationY,
			d = e.rotationX,
			p = e.skewX,
			l = e.skewY,
			g = e.scaleX,
			h = e.scaleY,
			m = e.transformPerspective,
			_ = e.force3D,
			y = e.target,
			S = e.zOrigin,
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
	Hf = function (t, i) {
		var e = i || this,
			n = e.xPercent,
			r = e.yPercent,
			s = e.x,
			o = e.y,
			c = e.rotation,
			u = e.skewX,
			f = e.skewY,
			d = e.scaleX,
			p = e.scaleY,
			l = e.target,
			g = e.xOrigin,
			h = e.yOrigin,
			m = e.xOffset,
			_ = e.yOffset,
			y = e.forceCSS,
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
	$f = function (t, i, e, n, r) {
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
			(t._pt = p = new $e(t._pt, i, e, n, u, Of)),
			(p.e = f),
			(p.u = "deg"),
			t._props.push(e),
			p
		);
	},
	sl = function (t, i) {
		for (var e in i) t[e] = i[e];
		return t;
	},
	Vf = function (t, i, e) {
		var n = sl({}, e._gsap),
			r = "perspective,force3D,transformOrigin,svgOrigin",
			s = e.style,
			o,
			c,
			u,
			f,
			d,
			p,
			l,
			g;
		n.svg
			? ((u = e.getAttribute("transform")),
				e.setAttribute("transform", ""),
				(s[Vt] = i),
				(o = Jr(e, 1)),
				An(e, Vt),
				e.setAttribute("transform", u))
			: ((u = getComputedStyle(e)[Vt]),
				(s[Vt] = i),
				(o = Jr(e, 1)),
				(s[Vt] = u));
		for (c in Wi)
			(u = n[c]),
				(f = o[c]),
				u !== f &&
					r.indexOf(c) < 0 &&
					((l = Me(u)),
					(g = Me(f)),
					(d = l !== g ? ln(e, c, u, g) : parseFloat(u)),
					(p = parseFloat(f)),
					(t._pt = new $e(t._pt, o, c, d, p - d, Ho)),
					(t._pt.u = g || 0),
					t._props.push(c));
		sl(o, n);
	};
He("padding,margin,Width,Radius", function (a, t) {
	var i = "Top",
		e = "Right",
		n = "Bottom",
		r = "Left",
		s = (t < 3 ? [i, e, n, r] : [i + r, i + e, n + e, n + r]).map(function (o) {
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
	init: function (t, i, e, n, r) {
		var s = this._props,
			o = t.style,
			c = e.vars.startAt,
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
			(this.tween = e);
		for (h in i)
			if (h !== "autoRound" && ((f = i[h]), !(Je[h] && bc(h, i, e, n, t, r)))) {
				if (
					((l = typeof f),
					(g = $s[h]),
					l === "function" && ((f = f.call(e, n, t, r)), (l = typeof f)),
					l === "string" && ~f.indexOf("random(") && (f = Gr(f)),
					g)
				)
					g(this, t, h, f, e) && (M = 1);
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
							? ((u = typeof c[h] == "function" ? c[h].call(e, n, t, r) : c[h]),
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
								(b.renderTransform && !i.parseTransform) ||
									Jr(t, i.parseTransform),
								(P = i.smoothOrigin !== !1 && b.smooth),
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
								!S && (_ === "px" || h === "zIndex") && i.autoRound !== !1
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
	render: function (t, i) {
		if (i.tween._time || !Sa())
			for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
		else i.styles.revert();
	},
	get: Bi,
	aliases: Ei,
	getSetter: function (t, i, e) {
		var n = Ei[i];
		return (
			n && n.indexOf(",") < 0 && (i = n),
			i in Wi && i !== Ve && (t._gsap.x || Bi(t, "x"))
				? e && Za === e
					? i === "scale"
						? Lf
						: Af
					: (Za = e || {}) && (i === "scale" ? If : Rf)
				: t.style && !fa(t.style[i])
					? kf
					: ~i.indexOf("-")
						? Ef
						: wa(t, i)
		);
	},
	core: { _removeProperty: An, _getMatrix: Da },
};
We.utils.checkPrefix = lr;
We.core.getStyleSaver = Lc;
(function (a, t, i, e) {
	var n = He(a + "," + t + "," + i, function (r) {
		Wi[r] = 1;
	});
	He(t, function (r) {
		(ri.units[r] = "deg"), (Fc[r] = 1);
	}),
		(Ei[n[13]] = a + "," + t),
		He(e, function (r) {
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
	for (var i = 0; i < t.length; i++) {
		var e = t[i];
		(e.enumerable = e.enumerable || !1),
			(e.configurable = !0),
			"value" in e && (e.writable = !0),
			Object.defineProperty(a, e.key, e);
	}
}
function Wf(a, t, i) {
	return t && ol(a.prototype, t), i && ol(a, i), a;
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
	jo = function (t, i) {
		return i;
	},
	jf = function () {
		var t = Ir.core,
			i = t.bridge || {},
			e = t._scrollers,
			n = t._proxies;
		e.push.apply(e, vt),
			n.push.apply(n, Ii),
			(vt = e),
			(Ii = n),
			(jo = function (s, o) {
				return i[s](o);
			});
	},
	on = function (t, i) {
		return ~Ii.indexOf(t) && Ii[Ii.indexOf(t) + 1][i];
	},
	Nr = function (t) {
		return !!~qc.indexOf(t);
	},
	ke = function (t, i, e, n, r) {
		return t.addEventListener(i, e, { passive: n !== !1, capture: !!r });
	},
	Pe = function (t, i, e, n) {
		return t.removeEventListener(i, e, !!n);
	},
	ds = "scrollLeft",
	hs = "scrollTop",
	Uo = function () {
		return (Xi && Xi.isPressed) || vt.cache++;
	},
	Ws = function (t, i) {
		var e = function n(r) {
			if (r || r === 0) {
				Vc && (ei.history.scrollRestoration = "manual");
				var s = Xi && Xi.isPressed;
				(r = n.v = Math.round(r) || (Xi && Xi.iOS ? 1 : 0)),
					t(r),
					(n.cacheID = vt.cache),
					s && jo("ss", r);
			} else
				(i || vt.cache !== n.cacheID || jo("ref")) &&
					((n.cacheID = vt.cache), (n.v = t()));
			return n.v + n.offset;
		};
		return (e.offset = 0), t && e;
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
	Xe = function (t, i) {
		return (
			((i && i._ctx && i._ctx.selector) || ye.utils.toArray)(t)[0] ||
			(typeof t == "string" && ye.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	cn = function (t, i) {
		var e = i.s,
			n = i.sc;
		Nr(t) && (t = tn.scrollingElement || en);
		var r = vt.indexOf(t),
			s = n === le.sc ? 1 : 2;
		!~r && (r = vt.push(t) - 1), vt[r + s] || ke(t, "scroll", Uo);
		var o = vt[r + s],
			c =
				o ||
				(vt[r + s] =
					Ws(on(t, e), !0) ||
					(Nr(t)
						? n
						: Ws(function (u) {
								return arguments.length ? (t[e] = u) : t[e];
							})));
		return (
			(c.target = t),
			o || (c.smooth = ye.getProperty(t, "scrollBehavior") === "smooth"),
			c
		);
	},
	Go = function (t, i, e) {
		var n = t,
			r = t,
			s = Rr(),
			o = s,
			c = i || 50,
			u = Math.max(500, c * 3),
			f = function (g, h) {
				var m = Rr();
				h || m - s > c
					? ((r = n), (n = g), (o = s), (s = m))
					: e
						? (n += g)
						: (n = r + ((g - r) / (m - o)) * (s - o));
			},
			d = function () {
				(r = n = e ? 0 : n), (o = s = 0);
			},
			p = function (g) {
				var h = o,
					m = r,
					_ = Rr();
				return (
					(g || g === 0) && g !== n && f(g),
					s === o || _ - o > u
						? 0
						: ((n + (e ? m : -m)) / ((e ? _ : s) - h)) * 1e3
				);
			};
		return { update: f, reset: d, getVelocity: p };
	},
	_r = function (t, i) {
		return (
			i && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	al = function (t) {
		var i = Math.max.apply(Math, t),
			e = Math.min.apply(Math, t);
		return Math.abs(i) >= Math.abs(e) ? i : e;
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
	function a(i) {
		this.init(i);
	}
	var t = a.prototype;
	return (
		(t.init = function (e) {
			Ps || jc(ye) || console.warn("Please gsap.registerPlugin(Observer)"),
				Ir || Wc();
			var n = e.tolerance,
				r = e.dragMinimum,
				s = e.type,
				o = e.target,
				c = e.lineHeight,
				u = e.debounce,
				f = e.preventDefault,
				d = e.onStop,
				p = e.onStopDelay,
				l = e.ignore,
				g = e.wheelSpeed,
				h = e.event,
				m = e.onDragStart,
				_ = e.onDragEnd,
				y = e.onDrag,
				S = e.onPress,
				x = e.onRelease,
				b = e.onRight,
				P = e.onLeft,
				M = e.onUp,
				O = e.onDown,
				k = e.onChangeX,
				L = e.onChangeY,
				F = e.onChange,
				D = e.onToggleX,
				R = e.onToggleY,
				X = e.onHover,
				q = e.onHoverEnd,
				V = e.onMove,
				H = e.ignoreCheck,
				tt = e.isNormalizer,
				pt = e.onGestureStart,
				T = e.onGestureEnd,
				nt = e.onWheel,
				ut = e.onEnable,
				I = e.onDisable,
				N = e.onClick,
				j = e.scrollSpeed,
				J = e.capture,
				U = e.allowClicks,
				G = e.lockAxis,
				lt = e.onLockAxis;
			(this.target = o = Xe(o) || en),
				(this.vars = e),
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
				ce = e.passive || !f,
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
	ul = function (t, i, e) {
		var n = Ze(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (e["_" + i + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
	},
	fl = function (t, i) {
		return i && (!Ze(t) || t.substr(0, 6) !== "clamp(")
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
	Gf = function (t, i, e) {
		var n = e.d,
			r = e.d2,
			s = e.a;
		return (s = on(t, "getBoundingClientRect"))
			? function () {
					return s()[n];
				}
			: function () {
					return (i ? eu(r) : t["client" + r]) || 0;
				};
	},
	Kf = function (t, i) {
		return !i || ~Ii.indexOf(t)
			? iu(t)
			: function () {
					return Is;
				};
	},
	Ai = function (t, i) {
		var e = i.s,
			n = i.d2,
			r = i.d,
			s = i.a;
		return Math.max(
			0,
			(e = "scroll" + n) && (s = on(t, e))
				? s() - iu(t)()[r]
				: Ln(t)
					? (yi[e] || Bt[e]) - eu(n)
					: t[e] - t["offset" + n],
		);
	},
	_s = function (t, i) {
		for (var e = 0; e < Vn.length; e += 3)
			(!i || ~i.indexOf(Vn[e + 1])) && t(Vn[e], Vn[e + 1], Vn[e + 2]);
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
	mr = function (t, i, e) {
		return t && t.progress(i ? 0 : 1) && e && t.pause();
	},
	xo = function (t, i) {
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
		var i = ui(t).position;
		t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
	},
	pl = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	Yi = function (t, i) {
		var e =
				i &&
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
		return e && e.progress(0).kill(), n;
	},
	Gs = function (t, i) {
		var e = i.d2;
		return t["offset" + e] || t["client" + e] || 0;
	},
	su = function (t) {
		var i = [],
			e = t.labels,
			n = t.duration(),
			r;
		for (r in e) i.push(e[r] / n);
		return i;
	},
	Zf = function (t) {
		return function (i) {
			return it.utils.snap(su(t), i);
		};
	},
	Aa = function (t) {
		var i = it.utils.snap(t),
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
	Jf = function (t) {
		return function (i, e) {
			return Aa(su(t))(i, e.direction);
		};
	},
	ms = function (t, i, e, n) {
		return e.split(",").forEach(function (r) {
			return t(i, r, n);
		});
	},
	fe = function (t, i, e, n, r) {
		return t.addEventListener(i, e, { passive: !n, capture: !!r });
	},
	ue = function (t, i, e, n) {
		return t.removeEventListener(i, e, !!n);
	},
	ys = function (t, i, e) {
		(e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e));
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
	ks = function (t, i) {
		if (Ze(t)) {
			var e = t.indexOf("="),
				n = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
			~e && (t.indexOf("%") > e && (n *= i / 100), (t = t.substr(0, e - 1))),
				(t =
					n +
					(t in Ks
						? Ks[t] * i
						: ~t.indexOf("%")
							? (parseFloat(t) * i) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	xs = function (t, i, e, n, r, s, o, c) {
		var u = r.startColor,
			f = r.endColor,
			d = r.fontSize,
			p = r.indent,
			l = r.fontWeight,
			g = Ht.createElement("div"),
			h = Ln(e) || on(e, "pinType") === "fixed",
			m = t.indexOf("scroller") !== -1,
			_ = h ? Bt : e,
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
			g.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
			(g.style.cssText = x),
			(g.innerText = i || i === 0 ? t + "-" + i : t),
			_.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
			(g._offset = g["offset" + n.op.d2]),
			Es(g, 0, n, y),
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
			(r["border" + s + cr] = 1),
			(r["border" + o + cr] = 0),
			(r[e.p] = i + "px"),
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
				In[t].map(function (i) {
					return i();
				})) ||
			td
		);
	},
	Qe = [],
	au = function (t) {
		for (var i = 0; i < Qe.length; i += 5)
			(!t || (Qe[i + 4] && Qe[i + 4].query === t)) &&
				((Qe[i].style.cssText = Qe[i + 1]),
				Qe[i].getBBox && Qe[i].setAttribute("transform", Qe[i + 2] || ""),
				(Qe[i + 3].uncache = 1));
	},
	La = function (t, i) {
		var e;
		for (Le = 0; Le < mt.length; Le++)
			(e = mt[Le]),
				e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
		(Us = !0), i && au(i), i || Rn("revert");
	},
	lu = function (t, i) {
		vt.cache++,
			(i || !Ie) &&
				vt.forEach(function (e) {
					return Fe(e) && e.cacheID++ && (e.rec = 0);
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
		).forEach(function (i) {
			return (i.style.display = t ? "none" : "block");
		});
	},
	wn = function (t, i) {
		if (hi && !t && !Us) {
			fe(_t, "scrollEnd", ou);
			return;
		}
		cu(),
			(Ie = _t.isRefreshing = !0),
			vt.forEach(function (n) {
				return Fe(n) && ++n.cacheID && (n.rec = n());
			});
		var e = Rn("refreshInit");
		Gc && _t.sort(),
			i || La(),
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
			e.forEach(function (n) {
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
			var i = mt.length,
				e = Se(),
				n = e - vo >= 50,
				r = i && mt[0].scroll();
			if (
				((As = ea > r ? -1 : 1),
				Ie || (ea = r),
				n &&
					(hi && !ro && e - hi > 200 && ((hi = 0), Rn("scrollEnd")),
					(br = vo),
					(vo = e)),
				As < 0)
			) {
				for (Le = i; Le-- > 0; ) mt[Le] && mt[Le].update(0, n);
				As = 1;
			} else for (Le = 0; Le < i; Le++) mt[Le] && mt[Le].update(0, n);
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
	id = function (t, i, e) {
		tr(e);
		var n = t._gsap;
		if (n.spacerIsNative) tr(n.spacerState);
		else if (t._gsap.swappedIn) {
			var r = i.parentNode;
			r && (r.insertBefore(t, i), r.removeChild(i));
		}
		t._gsap.swappedIn = !1;
	},
	bo = function (t, i, e, n) {
		if (!t._gsap.swappedIn) {
			for (var r = ia.length, s = i.style, o = t.style, c; r--; )
				(c = ia[r]), (s[c] = e[c]);
			(s.position = e.position === "absolute" ? "absolute" : "relative"),
				e.display === "inline" && (s.display = "inline-block"),
				(o[ka] = o[Pa] = "auto"),
				(s.flexBasis = e.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[Dn] = Gs(t, Ne) + oe),
				(s[On] = Gs(t, le) + oe),
				(s[ie] = o[ci] = o[ru] = o[nu] = "0"),
				tr(n),
				(o[Dn] = o["max" + cr] = e[Dn]),
				(o[On] = o["max" + Ea] = e[On]),
				(o[ie] = e[ie]),
				t.parentNode !== i &&
					(t.parentNode.insertBefore(i, t), i.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	nd = /([A-Z])/g,
	tr = function (t) {
		if (t) {
			var i = t.t.style,
				e = t.length,
				n = 0,
				r,
				s;
			for ((t.t._gsap || it.core.getCache(t.t)).uncache = 1; n < e; n += 2)
				(s = t[n + 1]),
					(r = t[n]),
					s
						? (i[r] = s)
						: i[r] && i.removeProperty(r.replace(nd, "-$1").toLowerCase());
		}
	},
	ws = function (t) {
		for (var i = Ls.length, e = t.style, n = [], r = 0; r < i; r++)
			n.push(Ls[r], e[Ls[r]]);
		return (n.t = t), n;
	},
	rd = function (t, i, e) {
		for (var n = [], r = t.length, s = e ? 8 : 0, o; s < r; s += 2)
			(o = t[s]), n.push(o, o in i ? i[o] : t[s + 1]);
		return (n.t = t.t), n;
	},
	Is = { left: 0, top: 0 },
	vl = function (t, i, e, n, r, s, o, c, u, f, d, p, l, g) {
		Fe(t) && (t = t(c)),
			Ze(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? ks("0" + t.substr(3), e) : 0));
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
				o && Es(o, e, n, !0);
		else {
			Fe(i) && (i = i(c));
			var S = (t || "0").split(" "),
				x,
				b,
				P,
				M;
			(y = Xe(i, c) || Bt),
				(x = Yi(y) || {}),
				(!x || (!x.left && !x.top)) &&
					ui(y).display === "none" &&
					((M = y.style.display),
					(y.style.display = "block"),
					(x = Yi(y)),
					M ? (y.style.display = M) : y.style.removeProperty("display")),
				(b = ks(S[0], x[n.d])),
				(P = ks(S[1] || "0", e)),
				(t = x[n.p] - u[n.p] - f + b + r - P),
				o && Es(o, P, n, e - P < 20 || (o._isStart && P > 20)),
				(e -= e - P);
		}
		if ((g && ((c[g] = t || -0.001), t < 0 && (t = 0)), s)) {
			var O = t + e,
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
	xl = function (t, i, e, n) {
		if (t.parentNode !== i) {
			var r = t.style,
				s,
				o;
			if (i === Bt) {
				(t._stOrig = r.cssText), (o = ui(t));
				for (s in o)
					!+s &&
						!sd.test(s) &&
						o[s] &&
						typeof r[s] == "string" &&
						s !== "0" &&
						(r[s] = o[s]);
				(r.top = e), (r.left = n);
			} else r.cssText = t._stOrig;
			(it.core.getCache(t).uncache = 1), i.appendChild(t);
		}
	},
	uu = function (t, i, e) {
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
	bs = function (t, i, e) {
		var n = {};
		(n[i.p] = "+=" + e), it.set(t, n);
	},
	wl = function (t, i) {
		var e = cn(t, i),
			n = "_scroll" + i.p2,
			r = function s(o, c, u, f, d) {
				var p = s.tween,
					l = c.onComplete,
					g = {};
				u = u || e();
				var h = uu(e, u, function () {
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
			(t[n] = e),
			(e.wheelHandler = function () {
				return r.tween && r.tween.kill() && (r.tween = 0);
			}),
			fe(t, "wheel", e.wheelHandler),
			_t.isTouch && fe(t, "touchmove", e.wheelHandler),
			r
		);
	},
	_t = (function () {
		function a(i, e) {
			$n ||
				a.register(it) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				Zo(this),
				this.init(i, e);
		}
		var t = a.prototype;
		return (
			(t.init = function (e, n) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Tr)
				) {
					this.update = this.refresh = this.kill = Ci;
					return;
				}
				e = pl(Ze(e) || Mr(e) || e.nodeType ? { trigger: e } : e, vs);
				var r = e,
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
						e.horizontal || (e.containerAnimation && e.horizontal !== !1)
							? Ne
							: le,
					F = !d && d !== 0,
					D = Xe(e.scroller || bt),
					R = it.core.getCache(D),
					X = Ln(D),
					q =
						("pinType" in e
							? e.pinType
							: on(D, "pinType") || (X && "fixed")) === "fixed",
					V = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
					H = F && e.toggleActions.split(" "),
					tt = "markers" in e ? e.markers : vs.markers,
					pt = X ? 0 : parseFloat(ui(D)["border" + L.p2 + cr]) || 0,
					T = this,
					nt =
						e.onRefreshInit &&
						function () {
							return e.onRefreshInit(T);
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
					(T.vars = e),
					(n = n || e.animation),
					"refreshPriority" in e &&
						((Gc = 1), e.refreshPriority === -9999 && (qr = T)),
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
								e.immediateRender !== !1 &&
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
						e.force3D !== !1 && it.set(l, { force3D: !0 }),
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
								xt = yn(B) ? B.end : e.end,
								Pt = e.endTrigger || p,
								ht = yn(B)
									? B.start
									: e.start || (e.start === 0 || !p ? 0 : l ? "0 0" : "0 100%"),
								ge = (T.pinnedContainer =
									e.pinnedContainer && Xe(e.pinnedContainer, T)),
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
							e.onKill && e.onKill(T);
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
			(a.register = function (e) {
				return (
					$n ||
						((it = e || tu()),
						Jc() && window.document && a.enable(),
						($n = Tr)),
					$n
				);
			}),
			(a.defaults = function (e) {
				if (e) for (var n in e) vs[n] = e[n];
				return vs;
			}),
			(a.disable = function (e, n) {
				(Tr = 0),
					mt.forEach(function (s) {
						return s[n ? "kill" : "disable"](e);
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
					var e = Bt.style,
						n = e.borderTopStyle,
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
							e.borderTopStyle = "solid",
							s = Yi(Bt),
							le.m = Math.round(s.top + le.sc()) || 0,
							Ne.m = Math.round(s.left + Ne.sc()) || 0,
							n ? (e.borderTopStyle = n) : e.removeProperty("border-top-style"),
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
			(a.config = function (e) {
				"limitCallbacks" in e && (yo = !!e.limitCallbacks);
				var n = e.syncInterval;
				(n && clearInterval(ps)) || ((ps = n) && setInterval(_l, n)),
					"ignoreMobileResize" in e &&
						(Qo = a.isTouch === 1 && e.ignoreMobileResize),
					"autoRefreshEvents" in e &&
						(_s(ue) || _s(fe, e.autoRefreshEvents || "none"),
						(Kc = (e.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (e, n) {
				var r = Xe(e),
					s = vt.indexOf(r),
					o = Ln(r);
				~s && vt.splice(s, o ? 6 : 2),
					n && (o ? Ii.unshift(bt, n, Bt, n, yi, n) : Ii.unshift(r, n));
			}),
			(a.clearMatchMedia = function (e) {
				mt.forEach(function (n) {
					return n._ctx && n._ctx.query === e && n._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (e, n, r) {
				var s = (Ze(e) ? Xe(e) : e).getBoundingClientRect(),
					o = s[r ? Dn : On] * n || 0;
				return r
					? s.right - o > 0 && s.left + o < bt.innerWidth
					: s.bottom - o > 0 && s.top + o < bt.innerHeight;
			}),
			(a.positionInViewport = function (e, n, r) {
				Ze(e) && (e = Xe(e));
				var s = e.getBoundingClientRect(),
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
			(a.killAll = function (e) {
				if (
					(mt.slice(0).forEach(function (r) {
						return r.vars.id !== "ScrollSmoother" && r.kill();
					}),
					e !== !0)
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
					var i = Qe.indexOf(t);
					i >= 0 && Qe.splice(i, 5),
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
	var i = In[a] || (In[a] = []);
	~i.indexOf(t) || i.push(t);
};
_t.removeEventListener = function (a, t) {
	var i = In[a],
		e = i && i.indexOf(t);
	e >= 0 && i.splice(e, 1);
};
_t.batch = function (a, t) {
	var i = [],
		e = {},
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
		e[o] =
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
			for (o in e) u[o] = e[o];
			(u.trigger = c), i.push(_t.create(u));
		}),
		i
	);
};
var bl = function (t, i, e, n) {
		return (
			i > n ? t(n) : i < 0 && t(0),
			e > n ? (n - i) / (e - i) : e < 0 ? i / (i - e) : 1
		);
	},
	To = function a(t, i) {
		i === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					i === !0
						? "auto"
						: i
							? "pan-" + i + (Jt.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === yi && a(Bt, i);
	},
	Ts = { auto: 1, scroll: 1 },
	od = function (t) {
		var i = t.event,
			e = t.target,
			n = t.axis,
			r = (i.changedTouches ? i.changedTouches[0] : i).target,
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
				r !== e &&
				!Ln(r) &&
				(Ts[(c = ui(r)).overflowY] || Ts[c.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || n === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
	},
	fu = function (t, i, e, n) {
		return Jt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: i,
			onWheel: (n = n && od),
			onPress: n,
			onDrag: n,
			onScroll: n,
			onEnable: function () {
				return e && fe(Ht, Jt.eventTypes[0], Sl, !1, !0);
			},
			onDisable: function () {
				return ue(Ht, Jt.eventTypes[0], Sl, !0);
			},
		});
	},
	ad = /(input|label|select|textarea)/i,
	Tl,
	Sl = function (t) {
		var i = ad.test(t.target.tagName);
		(i || Tl) && ((t._gsapAllow = !0), (Tl = i));
	},
	ld = function (t) {
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
					e && (M = Fr(0, Ai(u, Ne))),
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
					H !== h && To(u, h > 1.01 ? !0 : e ? !1 : "x"),
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
						e &&
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
					tt && e && g(M(T[2] === tt ? R + (H.startX - H.x) : g() + tt - T[1])),
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
				To(u, e ? !1 : "x"),
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
				scrollX: e ? "+=0.1" : "+=0",
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
			function (t, i) {
				return (
					(t.vars.refreshPriority || 0) * -1e6 +
					t.start -
					(i.start + (i.vars.refreshPriority || 0) * -1e6)
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
		const i = t.querySelector(".js-compute-section");
		i && ((this.DOM = {}), (this.DOM.section = i), this.setup());
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
	const i = Hr(Yt(a), Yt(t));
	return Yt(i / a);
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
	return Array.from(Array(a), (i, e) => t + e);
}
function ns(a) {
	return Object.keys(a);
}
function du(a, t) {
	return [a, t].reduce(
		(i, e) => (
			ns(e).forEach((n) => {
				const r = i[n],
					s = e[n],
					o = Ml(r) && Ml(s);
				i[n] = o ? du(r, s) : s;
			}),
			i
		),
		{},
	);
}
function hu(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function fd(a, t) {
	const i = { start: e, center: n, end: r };
	function e() {
		return 0;
	}
	function n(c) {
		return r(c) / 2;
	}
	function r(c) {
		return t - c;
	}
	function s(c, u) {
		return na(a) ? i[a](c) : a(t, c, u);
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
		return a.push(c), e;
	}
	function i() {
		a = a.filter((n) => n());
	}
	const e = { add: t, clear: i };
	return e;
}
function dd(a, t, i, e) {
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
		for (s = m, o += _; o >= r; ) i(), (o -= r);
		const y = Yt(o / r);
		e(y), c && t.requestAnimationFrame(d);
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
	return { init: u, destroy: f, start: p, stop: l, update: i, render: e };
}
function hd(a, t) {
	const i = a === "y" ? "y" : "x",
		e = a === "y" ? "x" : "y",
		n = o(),
		r = c();
	function s(f) {
		const { width: d, height: p } = f;
		return i === "x" ? d : p;
	}
	function o() {
		return i === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function c() {
		return i === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: i, cross: e, startEdge: n, endEdge: r, measureSize: s };
}
function Nn(a = 0, t = 0) {
	const i = Yt(a - t);
	function e(u) {
		return u < a;
	}
	function n(u) {
		return u > t;
	}
	function r(u) {
		return e(u) || n(u);
	}
	function s(u) {
		return r(u) ? (e(u) ? a : t) : u;
	}
	function o(u) {
		return i ? u - i * Math.ceil((u - t) / i) : u;
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
function pu(a, t, i) {
	const { constrain: e } = Nn(0, a),
		n = a + 1;
	let r = s(t);
	function s(p) {
		return i ? Yt((n + p) % n) : e(p);
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
		return pu(a, o(), i);
	}
	const d = { get: o, set: c, add: u, clone: f };
	return d;
}
function pd(a) {
	const t = a === "rtl" ? -1 : 1;
	function i(n) {
		return n * t;
	}
	return { apply: i };
}
function gd(a, t, i, e, n, r, s, o, c, u, f, d, p, l, g, h, m, _, y, S) {
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
		const ot = i;
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
		const W = pt ? e : i;
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
	let e, n;
	function r(d) {
		return d.timeStamp;
	}
	function s(d, p) {
		const g = `client${(p || a.scroll) === "x" ? "X" : "Y"}`;
		return (hu(d, t) ? d : d.touches[0])[g];
	}
	function o(d) {
		return (e = d), (n = d), s(d);
	}
	function c(d) {
		const p = s(d) - s(n),
			l = r(d) - r(e) > 170;
		return (n = d), l && (e = d), p;
	}
	function u(d) {
		if (!e || !n) return 0;
		const p = s(n) - s(e),
			l = r(d) - r(e),
			g = r(d) - r(n) > 170,
			h = p / l;
		return l && !g && Yt(h) > 0.1 ? h : 0;
	}
	return { pointerDown: o, pointerMove: c, pointerUp: u, readPoint: s };
}
function md() {
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
function yd(a) {
	function t(e) {
		return a * (e / 100);
	}
	return { measure: t };
}
function vd(a, t, i, e, n, r, s) {
	let o,
		c,
		u = [],
		f = !1;
	function d(h) {
		return n.measureSize(s.measure(h));
	}
	function p(h) {
		if (!r) return;
		(c = d(a)), (u = e.map(d));
		function m(y) {
			for (const S of y) {
				const x = S.target === a,
					b = e.indexOf(S.target),
					P = x ? c : u[b],
					M = d(x ? a : e[b]);
				if (Yt(M - P) >= 0.5) {
					i.requestAnimationFrame(() => {
						h.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((y) => {
			f || ((Ra(r) || r(h, y)) && m(y));
		})),
			[a].concat(e).forEach((y) => o.observe(y));
	}
	function l() {
		o && o.disconnect(), (f = !0);
	}
	return { init: p, destroy: l };
}
function xd(a, t, i, e, n) {
	let r = 0,
		s = 0,
		o = e,
		c = n,
		u = a.get(),
		f = 0;
	function d() {
		const b = i.get() - a.get(),
			P = !o;
		let M = 0;
		return (
			P
				? ((r = 0), a.set(i), (M = b))
				: ((r += b / o), (r *= c), (u += r), a.add(r), (M = u - f)),
			(s = Na(M)),
			(f = u),
			x
		);
	}
	function p() {
		const b = i.get() - t.get();
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
		return y(e);
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
function wd(a, t, i, e, n) {
	const r = n.measure(10),
		s = n.measure(50),
		o = Nn(0.1, 0.99);
	let c = !1;
	function u() {
		return !(c || !a.reachedAny(i.get()) || !a.reachedAny(t.get()));
	}
	function f(l) {
		if (!u()) return;
		const g = a.reachedMin(t.get()) ? "min" : "max",
			h = Yt(a[g] - t.get()),
			m = i.get() - t.get(),
			_ = o.constrain(h / s);
		i.subtract(m * _),
			!l &&
				Yt(m) < r &&
				(i.set(a.constrain(i.get())), e.useDuration(25).useBaseFriction());
	}
	function d(l) {
		c = !l;
	}
	return { constrain: f, toggleActive: d };
}
function bd(a, t, i, e, n) {
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
		return i
			.map((g, h) => {
				const { min: m, max: _ } = r,
					y = r.constrain(g),
					S = !h,
					x = Fa(i, h);
				return S ? _ : x || u(m, y) ? m : u(_, y) ? _ : y;
			})
			.map((g) => parseFloat(g.toFixed(3)));
	}
	function p() {
		if (t <= a + n) return [r.max];
		if (e === "keepSnaps") return s;
		const { min: g, max: h } = o;
		return s.slice(g, h);
	}
	return { snapsContained: c, scrollContainLimit: o };
}
function Td(a, t, i) {
	const e = t[0],
		n = i ? e - a : wi(t);
	return { limit: Nn(n, e) };
}
function Sd(a, t, i, e) {
	const r = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: c } = Nn(r, s);
	function u(p) {
		return p === 1 ? c(i.get()) : p === -1 ? o(i.get()) : !1;
	}
	function f(p) {
		if (!u(p)) return;
		const l = a * (p * -1);
		e.forEach((g) => g.add(l));
	}
	return { loop: f };
}
function Md(a) {
	const { max: t, length: i } = a;
	function e(r) {
		const s = r - t;
		return i ? s / -i : 0;
	}
	return { get: e };
}
function Dd(a, t, i, e, n) {
	const { startEdge: r, endEdge: s } = a,
		{ groupSlides: o } = n,
		c = d().map(t.measure),
		u = p(),
		f = l();
	function d() {
		return o(e)
			.map((h) => wi(h)[s] - h[0][r])
			.map(Yt);
	}
	function p() {
		return e.map((h) => i[r] - h[r]).map((h) => -Yt(h));
	}
	function l() {
		return o(u)
			.map((h) => h[0])
			.map((h, m) => h + c[m]);
	}
	return { snaps: u, snapsAligned: f };
}
function Od(a, t, i, e, n, r) {
	const { groupSlides: s } = n,
		{ min: o, max: c } = e,
		u = f();
	function f() {
		const p = s(r),
			l = !a || t === "keepSnaps";
		return i.length === 1
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
function Cd(a, t, i, e, n) {
	const { reachedAny: r, removeOffset: s, constrain: o } = e;
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
		const m = [g, g + i, g - i];
		if (!a) return m[0];
		if (!h) return c(m);
		const _ = m.filter((y) => Na(y) === h);
		return _.length ? c(_) : wi(m) - i;
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
function Pd(a, t, i, e, n, r, s) {
	function o(d) {
		const p = d.distance,
			l = d.index !== t.get();
		r.add(p),
			p && (e.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			l && (i.set(t.get()), t.set(d.index), s.emit("select"));
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
function kd(a, t, i, e, n, r) {
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
				m = i.findIndex((_) => _.includes(h));
			Ia(m) && (n.useDuration(0), e.index(m, 0));
		};
		r.add(d, "focus", p, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function Rs(a) {
	let t = a;
	function i() {
		return t;
	}
	function e(c) {
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
	return { get: i, set: e, add: n, subtract: r };
}
function gu(a, t, i) {
	const e = a.scroll === "x" ? s : o,
		n = i.style;
	let r = !1;
	function s(p) {
		return `translate3d(${p}px,0px,0px)`;
	}
	function o(p) {
		return `translate3d(0px,${p}px,0px)`;
	}
	function c(p) {
		r || (n.transform = e(t.apply(p)));
	}
	function u(p) {
		r = !p;
	}
	function f() {
		r ||
			((n.transform = ""),
			i.getAttribute("style") || i.removeAttribute("style"));
	}
	return { clear: f, to: c, toggleActive: u };
}
function Ed(a, t, i, e, n, r, s, o, c, u) {
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
			end: k + i - 0.5 + O,
		}));
	}
	function _(O, k, L) {
		const F = m(k);
		return O.map((D) => {
			const R = L ? 0 : -e,
				X = L ? e : 0,
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
		return _(k, e, !1);
	}
	function S() {
		const O = i - o[0] - 1,
			k = h(d, O);
		return _(k, -e, !0);
	}
	function x() {
		return l.every(({ index: O }) => {
			const k = d.filter((L) => L !== O);
			return g(k, i) <= 0.1;
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
function Ad(a, t, i) {
	let e,
		n = !1;
	function r(c) {
		if (!i) return;
		function u(f) {
			for (const d of f)
				if (d.type === "childList") {
					c.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(e = new MutationObserver((f) => {
			n || ((Ra(i) || i(c, f)) && u(f));
		})),
			e.observe(a, { childList: !0 });
	}
	function s() {
		e && e.disconnect(), (n = !0);
	}
	return { init: r, destroy: s };
}
function Ld(a, t, i, e) {
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
					i.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: e },
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
function Id(a, t, i, e, n, r) {
	const { measureSize: s, startEdge: o, endEdge: c } = a,
		u = i[0] && n,
		f = g(),
		d = h(),
		p = i.map(s),
		l = m();
	function g() {
		if (!u) return 0;
		const y = i[0];
		return Yt(t[o] - y[o]);
	}
	function h() {
		if (!u) return 0;
		const y = r.getComputedStyle(wi(e));
		return parseFloat(y.getPropertyValue(`margin-${c}`));
	}
	function m() {
		return i
			.map((y, S, x) => {
				const b = !S,
					P = Fa(x, S);
				return b ? p[S] + f : P ? p[S] + d : x[S + 1][o] - y[o];
			})
			.map(Yt);
	}
	return { slideSizes: p, slideSizesWithGaps: l, startGap: f, endGap: d };
}
function Rd(a, t, i, e, n, r, s, o, c, u) {
	const { startEdge: f, endEdge: d } = a,
		p = Ia(e);
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
							Yt(O - L - (M + k)) > i + u && y.push(S), P && y.push(_.length), y
						);
					}, [])
					.map((y, S, x) => {
						const b = Math.max(x[S - 1] || 0);
						return _.slice(b, y);
					})
			: [];
	}
	function h(_) {
		return p ? l(_, e) : g(_);
	}
	return { groupSlides: h };
}
function Nd(a, t, i, e, n, r, s) {
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
		k = i.map(M.measure),
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
		} = Id(F, O, k, i, V, n),
		nt = Rd(F, L, D, m, d, O, k, pt, T, P),
		{ snaps: ut, snapsAligned: I } = Dd(F, X, O, k, nt),
		N = -wi(ut) + wi(tt),
		{ snapsContained: j, scrollContainLimit: J } = bd(D, N, I, y, P),
		U = q ? j : I,
		{ limit: G } = Td(N, U, d),
		lt = pu(ls(U), f, d),
		ft = lt.clone(),
		et = is(i),
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
			e,
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
		qt = Ld(t, i, s, h),
		{ slideRegistry: Wt } = Od(q, y, U, J, nt, et),
		Ct = kd(a, i, Wt, Rt, ce, Be),
		re = {
			ownerDocument: e,
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
				e,
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
			resizeHandler: vd(t, s, n, i, F, S, M),
			scrollBody: ce,
			scrollBounds: wd(G, Mt, Xt, ce, R),
			scrollLooper: Sd(N, G, Mt, [C, Mt, Xt]),
			scrollProgress: je,
			scrollSnapList: U.map(je.get),
			scrollSnaps: U,
			scrollTarget: Et,
			scrollTo: Rt,
			slideLooper: Ed(F, L, D, N, H, tt, ut, U, Mt, i),
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
	function i(c) {
		t = c;
	}
	function e(c) {
		return a[c] || [];
	}
	function n(c) {
		return e(c).forEach((u) => u(t, c)), o;
	}
	function r(c, u) {
		return (a[c] = e(c).concat([u])), o;
	}
	function s(c, u) {
		return (a[c] = e(c).filter((f) => f !== u)), o;
	}
	const o = { init: i, emit: n, off: s, on: r };
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
	function i(r) {
		const s = r.breakpoints || {},
			o = ns(s)
				.filter((c) => a.matchMedia(c).matches)
				.map((c) => s[c])
				.reduce((c, u) => t(c, u), {});
		return t(r, o);
	}
	function e(r) {
		return r
			.map((s) => ns(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: i, optionsMediaQueries: e };
}
function Yd(a) {
	let t = [];
	function i(r, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(r, a)),
			s.reduce((o, c) => Object.assign(o, { [c.name]: c }), {})
		);
	}
	function e() {
		t = t.filter((r) => r.destroy());
	}
	return { init: i, destroy: e };
}
function Ba(a, t, i) {
	const e = a.ownerDocument,
		n = e.defaultView,
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
		const W = Nd(a, P, M, e, n, et, c);
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
	return L(t, i), setTimeout(() => c.emit("init"), 0), ft;
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
		i,
		e,
		n = !1,
		r = !0,
		s = !1,
		o = 0,
		c = 0;
	function u(x, b) {
		i = x;
		const { mergeOptions: P, optionsAtMedia: M } = b,
			O = P(Xd, za.globalOptions),
			k = P(O, a);
		if (((t = M(k)), i.scrollSnapList().length <= 1)) return;
		(s = t.jump), (e = !1);
		const { eventStore: L, ownerDocument: F } = i.internalEngine(),
			D = i.rootNode(),
			R = (t.rootNode && t.rootNode(D)) || D,
			X = i.containerNode();
		i.on("pointerDown", p),
			t.stopOnInteraction || i.on("pointerUp", d),
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
			t.playOnInit && i.on("init", d).on("reInit", d);
	}
	function f() {
		i.off("init", d).off("reInit", d).off("pointerDown", p).off("pointerUp", d),
			p(),
			cancelAnimationFrame(o),
			(o = 0),
			(e = !0),
			(n = !1);
	}
	function d() {
		if (e || !r) return;
		n || i.emit("autoplay:play");
		const { ownerWindow: x } = i.internalEngine();
		x.clearInterval(c), (c = x.setInterval(y, t.delay)), (n = !0);
	}
	function p() {
		if (e) return;
		n && i.emit("autoplay:stop");
		const { ownerWindow: x } = i.internalEngine();
		x.clearInterval(c), (c = 0), (n = !1);
	}
	function l() {
		const { ownerDocument: x } = i.internalEngine();
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
			const { index: x } = i.internalEngine(),
				b = x.clone().add(1).get(),
				P = i.scrollSnapList().length - 1;
			t.stopOnLastSnap && b === P && p(),
				i.canScrollNext() ? i.scrollNext(s) : i.scrollTo(0, s);
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
			i = window.innerHeight;
		this.detectApple(),
			this.getDevice(),
			this.window.width !== t && (this.window.width = window.innerWidth),
			this.window.height !== i && this.createRuler();
	}
}
const Gt = new qd();
function Hd(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function _u(a, t = 0) {
	const i = a.getBoundingClientRect(),
		e = (window.scrollY || document.documentElement.scrollTop) + i.top - t;
	Hd(e);
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
		var i = t.ownerDocument || t;
		for (
			!(xi in t.style) &&
			("msTransform" in t.style) &&
			((xi = "msTransform"), (ra = xi + "Origin"));
			i.parentNode && (i = i.parentNode);

		);
		if (((Pn = window), (Qs = new Fn()), i)) {
			(qi = i),
				(Ya = i.documentElement),
				(so = i.body),
				($r = qi.createElementNS("http://www.w3.org/2000/svg", "g")),
				($r.style.transform = "none");
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
				(mu = n.offsetParent !== e),
				r.removeChild(e));
		}
		return i;
	},
	$d = function (t) {
		for (var i, e; t && t !== so; )
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
	So = function a(t, i) {
		if (t.parentNode && (qi || yu(t))) {
			var e = Xa(t),
				n = e
					? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				r = e ? (i ? "rect" : "g") : "div",
				s = i !== 2 ? 0 : 100,
				o = i === 3 ? 100 : 0,
				c =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				u = qi.createElementNS
					? qi.createElementNS(n.replace(/^https/, "http"), r)
					: qi.createElement(r);
			return (
				i &&
					(e
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
		for (var i = new Fn(), e = 0; e < t.numberOfItems; e++)
			i.multiply(t.getItem(e).matrix);
		return i;
	},
	Gd = function (t) {
		var i = t.getCTM(),
			e;
		return (
			i ||
				((e = t.style[xi]),
				(t.style[xi] = "none"),
				t.appendChild($r),
				(i = $r.getCTM()),
				t.removeChild($r),
				e
					? (t.style[xi] = e)
					: t.style.removeProperty(
							xi.replace(/([A-Z])/g, "-$1").toLowerCase(),
						)),
			i || Qs.clone()
		);
	},
	Kd = function (t, i) {
		var e = Xa(t),
			n = t === e,
			r = e ? vu : xu,
			s = t.parentNode,
			o,
			c,
			u,
			f,
			d,
			p;
		if (t === Pn) return t;
		if (
			(r.length || r.push(So(t, 1), So(t, 2), So(t, 3)), (o = e ? Ns : Or), e)
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
				i && t.tagName.toLowerCase() === "g" && (f = d = 0),
				(n ? e : s).appendChild(o),
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
	Mo = function (t, i, e, n, r, s, o) {
		return (t.a = i), (t.b = e), (t.c = n), (t.d = r), (t.e = s), (t.f = o), t;
	},
	Fn = (function () {
		function a(i, e, n, r, s, o) {
			i === void 0 && (i = 1),
				e === void 0 && (e = 0),
				n === void 0 && (n = 0),
				r === void 0 && (r = 1),
				s === void 0 && (s = 0),
				o === void 0 && (o = 0),
				Mo(this, i, e, n, r, s, o);
		}
		var t = a.prototype;
		return (
			(t.inverse = function () {
				var e = this.a,
					n = this.b,
					r = this.c,
					s = this.d,
					o = this.e,
					c = this.f,
					u = e * s - n * r || 1e-10;
				return Mo(
					this,
					s / u,
					-n / u,
					-r / u,
					e / u,
					(r * c - s * o) / u,
					-(e * c - n * o) / u,
				);
			}),
			(t.multiply = function (e) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f,
					f = e.a,
					d = e.c,
					p = e.b,
					l = e.d,
					g = e.e,
					h = e.f;
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
			(t.equals = function (e) {
				var n = this.a,
					r = this.b,
					s = this.c,
					o = this.d,
					c = this.e,
					u = this.f;
				return (
					n === e.a &&
					r === e.b &&
					s === e.c &&
					o === e.d &&
					c === e.e &&
					u === e.f
				);
			}),
			(t.apply = function (e, n) {
				n === void 0 && (n = {});
				var r = e.x,
					s = e.y,
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
function vn(a, t, i, e) {
	if (!a || !a.parentNode || (qi || yu(a)).documentElement === a)
		return new Fn();
	var n = $d(a),
		r = Xa(a),
		s = r ? vu : xu,
		o = Kd(a, i),
		c = s[0].getBoundingClientRect(),
		u = s[1].getBoundingClientRect(),
		f = s[2].getBoundingClientRect(),
		d = o.parentNode,
		p = !e && jd(a),
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
	Ss = function (t, i) {
		var e = ii.createElementNS
			? ii.createElementNS(
					(i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: ii.createElement(t);
		return e.style ? e : ii.createElement(t);
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
	Mu = function (t, i) {
		var e = {},
			n;
		for (n in t) e[n] = i ? t[n] * i : t[n];
		return e;
	},
	eh = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	kl = function a(t, i) {
		for (var e = t.length, n; e--; )
			i
				? (t[e].style.touchAction = i)
				: t[e].style.removeProperty("touch-action"),
				(n = t[e].children),
				n && n.length && a(n, i);
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
		for (var i = kn.length; i--; ) kn[i] === t && kn.splice(i, 1);
		Tt.to(El, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: El,
			data: "_draggable",
		});
	},
	nh = function (t, i) {
		for (var e in i) e in t || (t[e] = i[e]);
		return t;
	},
	ae = function (t, i, e, n) {
		if (t.addEventListener) {
			var r = ss[i];
			(n = n || (wu ? { passive: !1 } : null)),
				t.addEventListener(r || i, e, n),
				r && i !== r && t.addEventListener(i, e, n);
		}
	},
	ee = function (t, i, e, n) {
		if (t.removeEventListener) {
			var r = ss[i];
			t.removeEventListener(r || i, e, n),
				r && i !== r && t.removeEventListener(i, e, n);
		}
	},
	oi = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	rh = function (t, i) {
		for (var e = t.length; e--; ) if (t[e].identifier === i) return !0;
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
	Il = function a(t, i) {
		ae(t, "scroll", i), ur(t.parentNode) || a(t.parentNode, i);
	},
	Rl = function a(t, i) {
		ee(t, "scroll", i), ur(t.parentNode) || a(t.parentNode, i);
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
	Nl = function (t, i) {
		var e = i === "x" ? "Width" : "Height",
			n = "scroll" + e,
			r = "client" + e;
		return Math.max(
			0,
			ur(t)
				? Math.max(bi[n], Hi[n]) - (It["inner" + e] || bi[r] || Hi[r])
				: t[n] - t[r],
		);
	},
	Oo = function a(t, i) {
		var e = Nl(t, "x"),
			n = Nl(t, "y");
		ur(t) ? (t = Ni) : a(t.parentNode, i),
			(t._gsMaxScrollX = e),
			(t._gsMaxScrollY = n),
			i ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	Co = function (t, i, e) {
		var n = t.style;
		n &&
			(vi(n[i]) && (i = Cr(i, t) || i),
			e == null
				? n.removeProperty &&
					n.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (n[i] = e));
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
		var i = t.ownerDocument || ii,
			e = vi(t.pageX)
				? !t.nodeType && !vi(t.left) && !vi(t.top)
					? t
					: nn(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - nr(i),
						top: t.pageY - ir(i),
						right: t.pageX - nr(i) + 1,
						bottom: t.pageY - ir(i) + 1,
					};
		return (
			vi(e.right) && !vi(e.width)
				? ((e.right = e.left + e.width), (e.bottom = e.top + e.height))
				: vi(e.width) &&
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
	Qt = function (t, i, e) {
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
	Fl = function (t, i) {
		var e = nn(t)[0],
			n,
			r,
			s;
		return !e.nodeType && e !== It
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
			: oh(e, i);
	},
	ai = {},
	oh = function (t, i) {
		i = nn(i)[0];
		var e = t.getBBox && t.ownerSVGElement,
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
			if (i === It || vi(i)) return t.getBoundingClientRect();
			(r = o = 0),
				e
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
		return t === i
			? { left: r, top: o, width: s - r, height: c - o }
			: ((u = vn(i, !0).multiply(vn(t))),
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
	Po = function (t, i, e, n, r, s) {
		var o = {},
			c,
			u,
			f;
		if (i)
			if (r !== 1 && i instanceof Array) {
				if (((o.end = c = []), (f = i.length), Vr(i[0])))
					for (u = 0; u < f; u++) c[u] = Mu(i[u], r);
				else for (u = 0; u < f; u++) c[u] = i[u] * r;
				(e += 1.1), (n -= 1.1);
			} else
				Ki(i)
					? (o.end = function (d) {
							var p = i.call(t, d),
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
					: (o.end = i);
		return (
			(e || e === 0) && (o.max = e),
			(n || n === 0) && (o.min = n),
			s && (o.velocity = 0),
			o
		);
	},
	ah = function a(t) {
		var i;
		return !t || !t.getAttribute || t === Hi
			? !1
			: (i = t.getAttribute("data-clickable")) === "true" ||
				  (i !== "false" &&
						(th.test(t.nodeName + "") ||
							t.getAttribute("contentEditable") === "true"))
				? !0
				: a(t.parentNode);
	},
	Ms = function (t, i) {
		for (var e = t.length, n; e--; )
			(n = t[e]),
				(n.ondragstart = n.onselectstart = i ? null : Bs),
				Tt.set(n, { lazy: !0, userSelect: i ? "text" : "none" });
	},
	lh = function a(t) {
		if (os(t).position === "fixed") return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return a(t);
	},
	Ou,
	ca,
	ch = function (t, i) {
		(t = Tt.utils.toArray(t)[0]), (i = i || {});
		var e = document.createElement("div"),
			n = e.style,
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
		Ou && i.force3D !== !1
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
						i.onKill && i.onKill();
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
						i.onKill && i.onKill();
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
				for (r = e.firstChild; r; )
					(y = r.nextSibling), t.appendChild(r), (r = y);
				t === e.parentNode && t.removeChild(e);
			}),
			(this.enable = function () {
				if (((r = t.firstChild), r !== e)) {
					for (; r; ) (y = r.nextSibling), e.appendChild(r), (r = y);
					t.appendChild(e), this.calibrate();
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
						e.offsetHeight === _ &&
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
						(_ = e.offsetHeight),
						(n.display = "block"),
						(O || k) && (this.left(O), this.top(k)));
			}),
			(this.content = e),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	ko = function (t) {
		if (Tu() && document.body) {
			var i = window && window.navigator;
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
				(Pr = i && i.userAgent.toLowerCase().indexOf("android") !== -1),
				(oa =
					("ontouchstart" in bi && "orientation" in It) ||
					(i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0))),
				(ca = (function () {
					var e = Ss("div"),
						n = Ss("div"),
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
				(ss = (function (e) {
					for (
						var n = e.split(","),
							r = (
								("onpointerdown" in Do)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in Do)
										? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
										: e
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
					for (var e in er) er[e].isPressed && er[e].endDrag();
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
		Qd(t, a);
		function t(i, e) {
			var n;
			(n = a.call(this) || this),
				sa || ko(1),
				(i = nn(i)[0]),
				(n.styles = aa && aa(i, "transform,left,top")),
				mi || (mi = Tt.plugins.inertia),
				(n.vars = e = Mu(e || {})),
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
				Tt.getProperty(i, "x");
			var r = (e.type || "x,y").toLowerCase(),
				s = ~r.indexOf("x") || ~r.indexOf("y"),
				o = r.indexOf("rotation") !== -1,
				c = o ? "rotation" : s ? "x" : "left",
				u = s ? "y" : "top",
				f = !!(~r.indexOf("x") || ~r.indexOf("left") || r === "scroll"),
				d = !!(~r.indexOf("y") || ~r.indexOf("top") || r === "scroll"),
				p = e.minimumMovement || 2,
				l = Ol(n),
				g = nn(e.trigger || e.handle || i),
				h = {},
				m = 0,
				_ = !1,
				y = e.autoScrollMarginTop || 40,
				S = e.autoScrollMarginRight || 40,
				x = e.autoScrollMarginBottom || 40,
				b = e.autoScrollMarginLeft || 40,
				P = e.clickableTest || ah,
				M = 0,
				O = i._gsap || Tt.core.getCache(i),
				k = lh(i),
				L = function (v, Y) {
					return parseFloat(O.get(i, v, Y));
				},
				F = i.ownerDocument || ii,
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
						var Y = i,
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
											((l.deltaY = Dt - parseFloat(i.style.top || 0)),
											(i.style.top = Dt + "px")),
										f &&
											((l.deltaX = gt - parseFloat(i.style.left || 0)),
											(i.style.left = gt + "px"))),
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
					i._gsap || (O = Tt.core.getCache(i)),
						O.uncache && Tt.getProperty(i, "x"),
						s
							? ((l.x = parseFloat(O.x)), (l.y = parseFloat(O.y)))
							: o
								? (l.x = l.rotation = parseFloat(O.rotation))
								: R
									? ((l.y = R.top()), (l.x = R.left()))
									: ((l.y =
											parseFloat(i.style.top || ((A = os(i)) && A.top)) || 0),
										(l.x = parseFloat(i.style.left || (A || {}).left) || 0)),
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
							: e.bounds &&
								((v = Fl(e.bounds, i.parentNode)),
								o
									? ((l.minX = ut = v.left),
										(l.maxX = nt = v.left + v.width),
										(l.minY = N = l.maxY = I = 0))
									: !vi(e.bounds.maxX) || !vi(e.bounds.maxY)
										? ((v = e.bounds),
											(l.minX = ut = v.minX),
											(l.minY = N = v.minY),
											(l.maxX = nt = v.maxX),
											(l.maxY = I = v.maxY))
										: ((Y = Fl(i, i.parentNode)),
											(l.minX = ut = Math.round(L(c, "px") + v.left - Y.left)),
											(l.minY = N = Math.round(L(u, "px") + v.top - Y.top)),
											(l.maxX = nt = Math.round(ut + (v.width - Y.width))),
											(l.maxY = I = Math.round(N + (v.height - Y.height)))),
								ut > nt && ((l.minX = nt), (l.maxX = nt = ut), (ut = l.minX)),
								N > I && ((l.minY = I), (l.maxY = I = N), (N = l.minY)),
								o && ((l.minRotation = ut), (l.maxRotation = nt)),
								(tt = !0)),
						e.liveSnap &&
							((w = e.liveSnap === !0 ? e.snap || {} : e.liveSnap),
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
								((w = e.snap || e.liveSnap || {}),
								(E = yr(w) || Ki(w)),
								(v = {
									resistance:
										(e.throwResistance || e.resistance || 1e3) / (o ? 10 : 1),
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
							(A = isNaN(e.overshootTolerance)
								? e.edgeResistance === 1
									? 0
									: 1 - l.edgeResistance + 0.2
								: e.overshootTolerance),
							v.duration ||
								(v.duration = {
									max: Math.max(
										e.minDuration || 0,
										"maxDuration" in e ? e.maxDuration : 2,
									),
									min: isNaN(e.minDuration)
										? A === 0 || (Vr(v) && v.resistance > 1e3)
											? 0
											: 0.5
										: e.minDuration,
									overshoot: A,
								}),
							(l.tween = z =
								Tt.to(R || i, {
									inertia: v,
									data: "_draggable",
									inherit: !1,
									onComplete: gi,
									onInterrupt: At,
									onUpdate: e.fastMode ? Qt : Ct,
									onUpdateParams: e.fastMode
										? [l, "onthrowupdate", "onThrowUpdate"]
										: w && w.radius
											? [!1, !0]
											: [],
								})),
							e.fastMode ||
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
					(st = vn(i.parentNode, !0)),
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
						(je = vn(i)),
						R
							? (pe(), (H = R.top()), (V = R.left()))
							: (ze() ? (Ct(!0, !0), pe()) : l.applyBounds(),
								o
									? ((E = i.ownerSVGElement
											? [O.xOrigin - i.getBBox().x, O.yOrigin - i.getBBox().y]
											: (os(i)[la] || "0 0").split(" ")),
										(U = l.rotationOrigin =
											vn(i).apply({
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
						(Z = P.call(l, v.target) && e.dragClickables === !1 && !Y),
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
						(C || l.autoScroll) && Oo(i.parentNode),
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
						Tt.killTweensOf(R || i, h, !0),
						R && Tt.killTweensOf(i, { scrollTo: 1 }, !0),
						(l.tween = l.lockedAxis = null),
						(e.zIndexBoost || (!o && !R && e.zIndexBoost !== !1)) &&
							(i.style.zIndex = t.zIndex++),
						(l.isPressed = !0),
						(pt = !!(e.onDrag || l._listeners.drag)),
						(T = !!(e.onMove || l._listeners.move)),
						e.cursor !== !1 || e.activeCursor)
					)
						for (w = g.length; --w > -1; )
							Tt.set(g[w], {
								cursor:
									e.activeCursor ||
									e.cursor ||
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
								--A > -1 && (v = w[A]).identifier !== J && v.target !== i;

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
							((v.pointerId && v.pointerId !== J && v.target !== i) ||
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
						Co(g[B], "cursor", e.cursor || (e.cursor !== !1 ? kr : null));
					if ((Zs--, v)) {
						if (
							(($ = v.changedTouches),
							$ && ((v = $[0]), v !== j && v.identifier !== J))
						) {
							for (
								B = $.length;
								--B > -1 && (v = $[B]).identifier !== J && v.target !== i;

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
									kt && (e.snap || e.bounds) && Ti(e.inertia || e.throwProps),
									Qt(l, "release", "onRelease"),
									(!Pr || w.type !== "touchmove") &&
										w.type.indexOf("cancel") === -1 &&
										(Qt(l, "click", "onClick"),
										Ui() - M < 300 && Qt(l, "doubleclick", "onDoubleClick"),
										(ct = w.target || i),
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
								: (Ti(e.inertia || e.throwProps),
									!l.allowEventDefault &&
									w &&
									(e.dragClickables !== !1 || !P.call(l, w.target)) &&
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
						var Y = v.target || i.parentNode,
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
				(lt = t.get(i)),
				lt && lt.kill(),
				(n.startDrag = function (at, v) {
					var Y, w, E, z;
					Ce(at || l.pointerEvent, !0),
						v &&
							!l.hitTest(at || l.pointerEvent) &&
							((Y = Hn(at || l.pointerEvent)),
							(w = Hn(i)),
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
									? mi.getVelocity(i, c)
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
											? mi.getVelocity(i, u)
											: $.top + $.height / 2 - (B.top + B.height / 2)),
								(z = Math.abs(w / E)),
								(A = z < 1 / v ? "" : w < 0 ? "left" : "right"),
								z < v && (A !== "" && (A += "-"), (A += E < 0 ? "up" : "down")),
								A)
					);
				}),
				(n.applyBounds = function (at, v) {
					var Y, w, E, z, A, $;
					if (at && e.bounds !== at) return (e.bounds = at), l.update(!0, v);
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
								Oo(i.parentNode),
									z = i,
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
							Ti(e.inertia || e.throwProps, E);
					}
					return l;
				}),
				(n.update = function (at, v, Y) {
					if (v && l.isPressed) {
						var w = vn(i),
							E = je.apply({ x: l.x - V, y: l.y - H }),
							z = vn(i.parentNode, !0);
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
							(Oo(i.parentNode, l.isDragging),
							(_ = l.isDragging),
							Wt(!0),
							Rl(i, xe),
							Il(i, xe)),
						l
					);
				}),
				(n.enable = function (at) {
					var v = { lazy: !0 },
						Y,
						w,
						E;
					if (
						(e.cursor !== !1 && (v.cursor = e.cursor || kr),
						Tt.utils.checkPrefix("touchCallout") && (v.touchCallout = "none"),
						at !== "soft")
					) {
						for (
							kl(
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
											e.allowNativeTouchScrolling || e.allowEventDefault
												? "manipulation"
												: f
													? "pan-y"
													: "pan-x",
									}),
								e.allowContextMenu || ae(E, "contextmenu", qt);
						Ms(g, !1);
					}
					return (
						Il(i, xe),
						(D = !0),
						mi &&
							at !== "soft" &&
							mi.track(R || i, s ? "x,y" : o ? "rotation" : "top,left"),
						(i._gsDragID = Y = "d" + Jd++),
						(er[Y] = l),
						R && (R.enable(), (R.element._gsDragID = Y)),
						(e.bounds || o) && Ge(),
						e.bounds && l.applyBounds(),
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
						Rl(i, xe),
						(D = !1),
						mi &&
							at !== "soft" &&
							(mi.untrack(R || i, s ? "x,y" : o ? "rotation" : "top,left"),
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
						delete er[i._gsDragID],
						l
					);
				}),
				(n.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~r.indexOf("scroll") &&
					((R = n.scrollProxy =
						new ch(
							i,
							eh(
								{
									onKill: function () {
										l.isPressed && Nt(null);
									},
								},
								e,
							),
						)),
					(i.style.overflowY = d && !oa ? "auto" : "hidden"),
					(i.style.overflowX = f && !oa ? "auto" : "hidden"),
					(i = R.content)),
				o ? (h.rotation = 1) : (f && (h[c] = 1), d && (h[u] = 1)),
				(O.force3D = "force3D" in e ? e.force3D : !0),
				bu(Ol(n)),
				n.enable(),
				n
			);
		}
		return (
			(t.register = function (e) {
				(Tt = e), ko();
			}),
			(t.create = function (e, n) {
				return (
					sa || ko(!0),
					nn(e).map(function (r) {
						return new t(r, n);
					})
				);
			}),
			(t.get = function (e) {
				return er[(nn(e)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Ui() - Pl) / 1e3;
			}),
			(t.hitTest = function (e, n, r) {
				if (e === n) return !1;
				var s = Hn(e),
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
	ki = (a, t = !0, i = 0) => (t ? i : a);
function fh(a, t) {
	(a = Q.utils.toArray(a)), (t = t || {});
	let i = t.onChange,
		e = 0,
		n = Q.timeline({
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
	return n.closestIndex(!0), (e = d), i && i(a[d], d), n;
}
const Eo = 66,
	Bl = 5e3;
class dh {
	constructor() {
		te(this, "onSlideCtaClick", (t) => {
			const i = t.currentTarget,
				e = i.closest(".js-features-carousel-item");
			if ((t.preventDefault(), e.classList.contains("is-active"))) {
				const n = i.getAttribute("href"),
					r = document.querySelector(`${n}`);
				r && _u(r, 150);
			} else this.instance.scrollTo(parseInt(e.dataset.index, 10));
		});
		te(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				i = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const e = this.DOM.slides[i],
				n = this.DOM.slides[this.activeIndex];
			Q.timeline({
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
		te(this, "outSlide", (t) => {
			const i = t.querySelector(".js-features-carousel-item-text"),
				e = Q.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				Gt.device < 1
					? e.to(t, {
							opacity: 0,
							xPercent: -200,
							rotate: -5,
							duration: 0.8,
							ease: wt,
							onComplete: () => {
								Q.set(t, { xPercent: 0, rotate: 5 });
							},
						})
					: e
							.to(t, { height: Eo, duration: 0.8, ease: wt })
							.to(
								i,
								{ opacity: 0, height: 0, duration: 0.8, ease: wt },
								"-=0.8",
							),
				e
			);
		});
		te(this, "inSlide", (t, i = !1) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
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
							duration: ki(0.8, i),
							ease: wt,
						})
					: n
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: ki(0.8, i),
								ease: wt,
							})
							.to(
								e,
								{ opacity: 1, height: "auto", duration: ki(0.8, i), ease: wt },
								ki("-=0.67", i),
							),
				n
			);
		});
		te(this, "start", () => {
			var t, i, e;
			(this.progressTl = Q.timeline({ paused: !0 }).to(this.DOM.progressbar, {
				scaleX: 1,
				duration: Bl / 1e3,
				ease: "linear",
			})),
				this.progressTl.play(),
				(e =
					(i = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: i.autoplay) == null || e.play();
		});
		te(this, "hide", () => {
			const t = Q.timeline();
			if (Gt.device < 1) {
				const i = this.DOM.slides[this.activeIndex],
					e = i.querySelectorAll(".js-features-carousel-content");
				t.set(i, { transformOrigin: "50% 100%", scale: 0, y: 30 })
					.set(e, { opacity: 0 })
					.set(this.DOM.progress, { opacity: 0, y: 20 });
			} else
				for (let i = 0; i < this.DOM.slides.length; i++) {
					const e = this.DOM.slides[i],
						n = e.querySelectorAll(".js-features-carousel-content");
					t.set(e, { transformOrigin: "50% 100%", opacity: 0, y: 30 })
						.set(n, { opacity: 0 })
						.set(this.DOM.progress, { opacity: 0, y: 20 });
				}
			return t;
		});
		te(this, "reveal", () => {
			const t = Q.timeline();
			if (Gt.device < 1) {
				const i = this.DOM.slides[this.activeIndex],
					e = i.querySelectorAll(".js-features-carousel-content");
				t.to(i, { scale: 1, y: 0, duration: 0.8, ease: wt })
					.to(e, { opacity: 1, duration: 0.8, ease: wt }, "-=0.3")
					.to(
						this.DOM.progress,
						{ opacity: 1, y: 0, duration: 0.8, ease: wt },
						"-=0.8",
					);
			} else {
				const i = Q.utils.toArray(this.DOM.slides).reverse();
				for (let e = 0; e < i.length; e++) {
					const n = Q.timeline(),
						r = i[e],
						s = r.querySelectorAll(".js-features-carousel-content");
					n
						.to(r, { y: 0, opacity: 1, duration: 0.8, ease: wt })
						.set(s, { opacity: 1, duration: 0.8, ease: wt }, "-=0.3")
						.to(
							this.DOM.progress,
							{ opacity: 1, y: 0, duration: 0.8, ease: wt },
							"-=0.8",
						),
						t.add(n, e * 0.07);
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
								height: (e, n) => n.offsetWidth * this.hRatio,
							}),
							Q.set(this.DOM.slidesTexts[this.activeIndex], { height: "auto" }))
						: Gt.device >= 1 &&
							this.layoutMode === "desktop" &&
							Q.set(this.DOM.slides, {
								height: (e) =>
									e === this.activeIndex
										? this.DOM.slides[e].offsetWidth * this.hRatio
										: Eo,
							}),
				Gt.device >= 1 || (Gt.device < 1 && this.layoutMode !== "mobile"))
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
			this.layoutMode = Gt.device < 1 ? "mobile" : "desktop";
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
const Ae = new hh();
class ph {
	constructor() {
		te(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const e = t.currentTarget.getAttribute("href"),
				n = document.querySelector(`${e}`);
			n ? _u(n, 150) : console.warn("Target non esiste per l'id: ", e);
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
			const i = this.DOM.rows[t];
			i &&
				this.instances.push(
					new gh({
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
		te(this, "hideNav", (t = !1, i = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const e = Q.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), i && i();
					},
				});
				return (
					e
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
					e
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
		const i = this.DOM.nav.querySelector(".js-nav-link.is-active");
		i && i.classList.remove("is-active");
		const e = this.DOM.nav.querySelector(`.js-nav-link[data-route="${t}"]`);
		e && e.classList.add("is-active");
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
	(function (i, e) {
		a.exports = e();
	})(vh, function () {
		var i = document,
			e = i.createTextNode.bind(i);
		function n(I, N, j) {
			I.style.setProperty(N, j);
		}
		function r(I, N) {
			return I.appendChild(N);
		}
		function s(I, N, j, J) {
			var U = i.createElement("span");
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
					: [].slice.call(I[0].nodeName ? I : (N || i).querySelectorAll(I));
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
						(W[0] === " " && ft.push(e(" ")),
						f(Z.split(j), function (ot, st) {
							st && U && ft.push(s(lt, "whitespace", " ", U));
							var kt = s(lt, N, ot);
							G.push(kt), ft.push(kt);
						}),
						W[W.length - 1] === " " && ft.push(e(" ")));
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
		const i = t.querySelectorAll("[data-split='chars']");
		i.length > 0 &&
			((this.charsInstance = vr({ target: i, by: "chars" })),
			this.instances.push(this.charsInstance));
	}
	initWords(t = document) {
		const i = t.querySelectorAll("[data-split='words']");
		i.length > 0 &&
			((this.wordsInstance = vr({ target: i, by: "words" })),
			this.instances.push(this.wordsInstance));
	}
	initWordsLines() {
		const t = document.querySelectorAll("[data-split='lines']");
		t.length > 0 &&
			((this.wordsLinesInstance = vr({ target: t, by: "lines" })),
			this.instances.push(this.wordsLinesInstance));
	}
	initLines(t = document) {
		const i = t.querySelectorAll("[data-line]");
		for (let e = 0; e < i.length; e++) this.buildLine(i[e]);
	}
	buildLine(t) {
		const i = t.innerHTML,
			e = document.createElement("div"),
			n = document.createElement("div");
		(e.className = "line-wrap"),
			(n.className = "line-wrap__inner js-line-wrap-anim"),
			(n.innerHTML = i),
			(t.innerHTML = ""),
			e.appendChild(n),
			t.appendChild(e);
	}
	getInstance(t) {
		const i = this.instances.filter((e) => e.id === t);
		if (i !== void 0) return i[0];
	}
	addInstance(t, i, e = !0) {
		(this[t] = vr(i)), e && this.instances.push({ id: `${t}`, value: this[t] });
	}
	createInstance(t) {
		return vr(t);
	}
	removeInstance(t) {
		const i = this.instances.filter((e) => e.id !== t);
		this.instances = i;
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
			(i) => {
				const { isMobile: e, isDesk: n } = i.conditions;
				e && this.setMobileTrigger(), n && this.setTrigger();
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
			{ y: (i, e) => parseInt(e.dataset.index, 10) * 25 },
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
		const i = t.querySelector(".js-team-section");
		i &&
			((this.DOM = {}),
			(this.DOM.section = i),
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
				const i = this.DOM.cards[t],
					e = this.DOM.cards[this.activeIndex];
				Q.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(i))
					.add(this.enterSlide(e), 0);
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
				const i = this.DOM.cards[t],
					e = this.DOM.cards[this.activeIndex];
				Q.timeline({
					onComplete: () => {
						this.isAnimating = !1;
					},
				})
					.add(this.exitSlide(i))
					.add(this.enterSlide(e), 0);
			}
		});
		te(this, "exitSlide", (t) => {
			const i = Q.timeline();
			return (
				i.to(t, {
					opacity: 0,
					xPercent: -100,
					duration: 0.8,
					onComplete: () => {
						Q.set(t, { opacity: 0, xPercent: 100 });
					},
					ease: wt,
				}),
				i
			);
		});
		te(this, "enterSlide", (t) => {
			const i = Q.timeline();
			return i.to(t, { opacity: 1, xPercent: 0, duration: 0.8, ease: wt }), i;
		});
		te(this, "buildCardsTl", () => {
			const t = Q.timeline();
			for (let i = 0; i < this.DOM.cards.length; i++) {
				const e = this.DOM.cards[i],
					n = Q.timeline();
				n
					.from(e, { y: Gt.window.height * 0.7, duration: 1.4 })
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
		Q.matchMedia().add(
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
const Dh = ({ pageName: a, container: t = document, immediate: i = !0 }) => {
		const e = Q.timeline(),
			n = Ae.get("nav");
		switch ((n && e.add(n.hide(!0)), a)) {
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
					g = c.querySelectorAll(".word"),
					h = Ae.get("featuresCarousel");
				h && h.hide(),
					e
						.set([d, p, l], { scale: 0, y: -100, transformOrigin: "50% 0%" })
						.set([s, o, g, u], { opacity: 0, y: -40 });
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
					h = d.getTotalLength(),
					m = c.querySelectorAll(".word");
				e.set([s, o, m], { opacity: 0, y: 40 })
					.set(g, { opacity: 0 })
					.set(f, { opacity: 0, scale: 0, transformOrigin: "50% 50%" })
					.set(d, { strokeDasharray: h, strokeDashoffset: h })
					.set(p, { scale: 0, transformOrigin: "50% 50%" })
					.set(l, { opacity: 0, scale: 0, transformOrigin: "50% 50%" });
				break;
			}
		}
		return e;
	},
	Oh = ({ pageName: a, container: t = document, cb: i = !1 }) => {
		const e = Q.timeline({
				onComplete: () => {
					if (a === "homepage") {
						const r = Ae.get("featuresCarousel");
						r && r.start();
					}
					i && i();
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
				e
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
						{ duration: 1, opacity: 1, y: 0, stagger: 0.1, ease: wt },
						0.75,
					),
					g && e.add(g.reveal(), 0.75);
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
				e.to(s, { duration: 1, opacity: 1, y: 0, ease: wt }, 0.75)
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
		return n && e.add(n.reveal(), 0.5), e;
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
			delay: 0.3,
			onComplete: () => {
				console.log("load transition complete");
			},
		});
		return a.add(Ph()).add(Oh({ pageName: Js.activeView }), "-=0.2"), a;
	};
function Yl(a, t, i) {
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
