var Vu = Object.defineProperty;
var qu = (a, t, e) =>
	t in a
		? Vu(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (a[t] = e);
var Re = (a, t, e) => (qu(a, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
	new MutationObserver((r) => {
		for (const i of r)
			if (i.type === "childList")
				for (const s of i.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(r) {
		const i = {};
		return (
			r.integrity && (i.integrity = r.integrity),
			r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: r.crossOrigin === "anonymous"
					? (i.credentials = "omit")
					: (i.credentials = "same-origin"),
			i
		);
	}
	function n(r) {
		if (r.ep) return;
		r.ep = !0;
		const i = e(r);
		fetch(r.href, i);
	}
})();
function gn(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function da(a, t) {
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
 */ var Ee = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	Or = { duration: 0.5, overwrite: !1, delay: 0 },
	js,
	ie,
	mt,
	Ne = 1e8,
	ht = 1 / Ne,
	Ts = Math.PI * 2,
	Hu = Ts / 4,
	Uu = 0,
	pa = Math.sqrt,
	$u = Math.cos,
	Wu = Math.sin,
	Gt = function (t) {
		return typeof t == "string";
	},
	Pt = function (t) {
		return typeof t == "function";
	},
	wn = function (t) {
		return typeof t == "number";
	},
	Ks = function (t) {
		return typeof t > "u";
	},
	fn = function (t) {
		return typeof t == "object";
	},
	ye = function (t) {
		return t !== !1;
	},
	Qs = function () {
		return typeof window < "u";
	},
	wi = function (t) {
		return Pt(t) || Gt(t);
	},
	_a =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	se = Array.isArray,
	Ss = /(?:-?\.?\d|\.)+/gi,
	ga = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	mr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	as = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	ma = /[+-]=-?[.\d]+/,
	ya = /[^,'"\[\]\s]+/gi,
	Gu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Tt,
	nn,
	Ms,
	Zs,
	Ae = {},
	Hi = {},
	va,
	xa = function (t) {
		return (Hi = rr(t, Ae)) && be;
	},
	Js = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	si = function (t, e) {
		return !e && console.warn(t);
	},
	wa = function (t, e) {
		return (t && (Ae[t] = e) && Hi && (Hi[t] = e)) || Ae;
	},
	oi = function () {
		return 0;
	},
	ju = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ri = { suppressEvents: !0, kill: !1 },
	Ku = { suppressEvents: !0 },
	to = {},
	Rn = [],
	Os = {},
	ba,
	De = {},
	us = {},
	Do = 30,
	Ii = [],
	eo = "",
	no = function (t) {
		var e = t[0],
			n,
			r;
		if ((fn(e) || Pt(e) || (t = [t]), !(n = (e._gsap || {}).harness))) {
			for (r = Ii.length; r-- && !Ii[r].targetTest(e); );
			n = Ii[r];
		}
		for (r = t.length; r--; )
			(t[r] && (t[r]._gsap || (t[r]._gsap = new $a(t[r], n)))) ||
				t.splice(r, 1);
		return t;
	},
	Kn = function (t) {
		return t._gsap || no(Be(t))[0]._gsap;
	},
	Ta = function (t, e, n) {
		return (n = t[e]) && Pt(n)
			? t[e]()
			: (Ks(n) && t.getAttribute && t.getAttribute(e)) || n;
	},
	ve = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	At = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Wt = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	xr = function (t, e) {
		var n = e.charAt(0),
			r = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			n === "+" ? t + r : n === "-" ? t - r : n === "*" ? t * r : t / r
		);
	},
	Qu = function (t, e) {
		for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
		return r < n;
	},
	Ui = function () {
		var t = Rn.length,
			e = Rn.slice(0),
			n,
			r;
		for (Os = {}, Rn.length = 0, n = 0; n < t; n++)
			(r = e[n]),
				r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
	},
	Sa = function (t, e, n, r) {
		Rn.length && !ie && Ui(),
			t.render(e, n, r || (ie && e < 0 && (t._initted || t._startAt))),
			Rn.length && !ie && Ui();
	},
	Ma = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(ya).length < 2
			? e
			: Gt(t)
				? t.trim()
				: t;
	},
	Oa = function (t) {
		return t;
	},
	Xe = function (t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t;
	},
	Zu = function (t) {
		return function (e, n) {
			for (var r in n)
				r in e || (r === "duration" && t) || r === "ease" || (e[r] = n[r]);
		};
	},
	rr = function (t, e) {
		for (var n in e) t[n] = e[n];
		return t;
	},
	Co = function a(t, e) {
		for (var n in e)
			n !== "__proto__" &&
				n !== "constructor" &&
				n !== "prototype" &&
				(t[n] = fn(e[n]) ? a(t[n] || (t[n] = {}), e[n]) : e[n]);
		return t;
	},
	$i = function (t, e) {
		var n = {},
			r;
		for (r in t) r in e || (n[r] = t[r]);
		return n;
	},
	$r = function (t) {
		var e = t.parent || Tt,
			n = t.keyframes ? Zu(se(t.keyframes)) : Xe;
		if (ye(t.inherit))
			for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Ju = function (t, e) {
		for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; );
		return n < 0;
	},
	Da = function (t, e, n, r, i) {
		n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
		var s = t[r],
			o;
		if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
		return (
			s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)),
			e._next ? (e._next._prev = e) : (t[r] = e),
			(e._prev = s),
			(e.parent = e._dp = t),
			e
		);
	},
	ns = function (t, e, n, r) {
		n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
		var i = e._prev,
			s = e._next;
		i ? (i._next = s) : t[n] === e && (t[n] = s),
			s ? (s._prev = i) : t[r] === e && (t[r] = i),
			(e._next = e._prev = e.parent = null);
	},
	zn = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Qn = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
		return t;
	},
	tl = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	Ds = function (t, e, n, r) {
		return (
			t._startAt &&
			(ie
				? t._startAt.revert(Ri)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, r))
		);
	},
	el = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	Po = function (t) {
		return t._repeat ? Dr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	Dr = function (t, e) {
		var n = Math.floor((t /= e));
		return t && n === t ? n - 1 : n;
	},
	Wi = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	rs = function (t) {
		return (t._end = Wt(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || ht) || 0),
		));
	},
	is = function (t, e) {
		var n = t._dp;
		return (
			n &&
				n.smoothChildTiming &&
				t._ts &&
				((t._start = Wt(
					n._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
				)),
				rs(t),
				n._dirty || Qn(n, t)),
			t
		);
	},
	Ca = function (t, e) {
		var n;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((n = Wi(t.rawTime(), e)),
				(!e._dur || mi(0, e.totalDuration(), n) - e._tTime > ht) &&
					e.render(n, !0)),
			Qn(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (n = t; n._dp; )
					n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
			t._zTime = -ht;
		}
	},
	on = function (t, e, n, r) {
		return (
			e.parent && zn(e),
			(e._start = Wt(
				(wn(n) ? n : n || t !== Tt ? Ie(t, n, e) : t._time) + e._delay,
			)),
			(e._end = Wt(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			Da(t, e, "_first", "_last", t._sort ? "_start" : 0),
			Cs(e) || (t._recent = e),
			r || Ca(t, e),
			t._ts < 0 && is(t, t._tTime),
			t
		);
	},
	Pa = function (t, e) {
		return (
			(Ae.ScrollTrigger || Js("scrollTrigger", e)) &&
			Ae.ScrollTrigger.create(e, t)
		);
	},
	ka = function (t, e, n, r, i) {
		if ((io(t, e, i), !t._initted)) return 1;
		if (
			!n &&
			t._pt &&
			!ie &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			ba !== Ce.frame
		)
			return Rn.push(t), (t._lazy = [i, r]), 1;
	},
	nl = function a(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
	},
	Cs = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	rl = function (t, e, n, r) {
		var i = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && nl(t) && !(!t._initted && Cs(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !Cs(t))))
					? 0
					: 1,
			o = t._rDelay,
			u = 0,
			l,
			c,
			f;
		if (
			(o &&
				t._repeat &&
				((u = mi(0, t._tDur, e)),
				(c = Dr(u, o)),
				t._yoyo && c & 1 && (s = 1 - s),
				c !== Dr(t._tTime, o) &&
					((i = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== i || ie || r || t._zTime === ht || (!e && t._zTime))
		) {
			if (!t._initted && ka(t, e, r, n, u)) return;
			for (
				f = t._zTime,
					t._zTime = e || (n ? ht : 0),
					n || (n = e && !f),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = u,
					l = t._pt;
				l;

			)
				l.r(s, l.d), (l = l._next);
			e < 0 && Ds(t, e, n, !0),
				t._onUpdate && !n && ke(t, "onUpdate"),
				u && t._repeat && !n && t.parent && ke(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && zn(t, 1),
					!n &&
						!ie &&
						(ke(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	il = function (t, e, n) {
		var r;
		if (n > e)
			for (r = t._first; r && r._start <= n; ) {
				if (r.data === "isPause" && r._start > e) return r;
				r = r._next;
			}
		else
			for (r = t._last; r && r._start >= n; ) {
				if (r.data === "isPause" && r._start < e) return r;
				r = r._prev;
			}
	},
	Cr = function (t, e, n, r) {
		var i = t._repeat,
			s = Wt(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !r && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = i ? (i < 0 ? 1e10 : Wt(s * (i + 1) + t._rDelay * i)) : s),
			o > 0 && !r && is(t, (t._tTime = t._tDur * o)),
			t.parent && rs(t),
			n || Qn(t.parent, t),
			t
		);
	},
	ko = function (t) {
		return t instanceof he ? Qn(t) : Cr(t, t._dur);
	},
	sl = { _start: 0, endTime: oi, totalDuration: oi },
	Ie = function a(t, e, n) {
		var r = t.labels,
			i = t._recent || sl,
			s = t.duration() >= Ne ? i.endTime(!1) : t._dur,
			o,
			u,
			l;
		return Gt(e) && (isNaN(e) || e in r)
			? ((u = e.charAt(0)),
				(l = e.substr(-1) === "%"),
				(o = e.indexOf("=")),
				u === "<" || u === ">"
					? (o >= 0 && (e = e.replace(/=/, "")),
						(u === "<" ? i._start : i.endTime(i._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(l ? (o < 0 ? i : n).totalDuration() / 100 : 1))
					: o < 0
						? (e in r || (r[e] = s), r[e])
						: ((u = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
							l && n && (u = (u / 100) * (se(n) ? n[0] : n).totalDuration()),
							o > 1 ? a(t, e.substr(0, o - 1), n) + u : s + u))
			: e == null
				? s
				: +e;
	},
	Wr = function (t, e, n) {
		var r = wn(e[1]),
			i = (r ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[i],
			o,
			u;
		if ((r && (s.duration = e[1]), (s.parent = n), t)) {
			for (o = s, u = n; u && !("immediateRender" in o); )
				(o = u.vars.defaults || {}), (u = ye(u.vars.inherit) && u.parent);
			(s.immediateRender = ye(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[i - 1]);
		}
		return new Nt(e[0], s, e[i + 1]);
	},
	Yn = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	mi = function (t, e, n) {
		return n < t ? t : n > e ? e : n;
	},
	re = function (t, e) {
		return !Gt(t) || !(e = Gu.exec(t)) ? "" : e[1];
	},
	ol = function (t, e, n) {
		return Yn(n, function (r) {
			return mi(t, e, r);
		});
	},
	Ps = [].slice,
	Ea = function (t, e) {
		return (
			t &&
			fn(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && fn(t[0]))) &&
			!t.nodeType &&
			t !== nn
		);
	},
	al = function (t, e, n) {
		return (
			n === void 0 && (n = []),
			t.forEach(function (r) {
				var i;
				return (Gt(r) && !e) || Ea(r, 1)
					? (i = n).push.apply(i, Be(r))
					: n.push(r);
			}) || n
		);
	},
	Be = function (t, e, n) {
		return mt && !e && mt.selector
			? mt.selector(t)
			: Gt(t) && !n && (Ms || !Pr())
				? Ps.call((e || Zs).querySelectorAll(t), 0)
				: se(t)
					? al(t, n)
					: Ea(t)
						? Ps.call(t, 0)
						: t
							? [t]
							: [];
	},
	ks = function (t) {
		return (
			(t = Be(t)[0] || si("Invalid scope") || {}),
			function (e) {
				var n = t.current || t.nativeElement || t;
				return Be(
					e,
					n.querySelectorAll
						? n
						: n === t
							? si("Invalid scope") || Zs.createElement("div")
							: t,
				);
			}
		);
	},
	Aa = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	La = function (t) {
		if (Pt(t)) return t;
		var e = fn(t) ? t : { each: t },
			n = Zn(e.ease),
			r = e.from || 0,
			i = parseFloat(e.base) || 0,
			s = {},
			o = r > 0 && r < 1,
			u = isNaN(r) || o,
			l = e.axis,
			c = r,
			f = r;
		return (
			Gt(r)
				? (c = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
				: !o && u && ((c = r[0]), (f = r[1])),
			function (p, h, _) {
				var d = (_ || e).length,
					g = s[d],
					m,
					y,
					w,
					v,
					b,
					O,
					T,
					C,
					M;
				if (!g) {
					if (((M = e.grid === "auto" ? 0 : (e.grid || [1, Ne])[1]), !M)) {
						for (
							T = -Ne;
							T < (T = _[M++].getBoundingClientRect().left) && M < d;

						);
						M < d && M--;
					}
					for (
						g = s[d] = [],
							m = u ? Math.min(M, d) * c - 0.5 : r % M,
							y = M === Ne ? 0 : u ? (d * f) / M - 0.5 : (r / M) | 0,
							T = 0,
							C = Ne,
							O = 0;
						O < d;
						O++
					)
						(w = (O % M) - m),
							(v = y - ((O / M) | 0)),
							(g[O] = b = l ? Math.abs(l === "y" ? v : w) : pa(w * w + v * v)),
							b > T && (T = b),
							b < C && (C = b);
					r === "random" && Aa(g),
						(g.max = T - C),
						(g.min = C),
						(g.v = d =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(M > d
										? d - 1
										: l
											? l === "y"
												? d / M
												: M
											: Math.max(M, d / M)) ||
								0) * (r === "edges" ? -1 : 1)),
						(g.b = d < 0 ? i - d : i),
						(g.u = re(e.amount || e.each) || 0),
						(n = n && d < 0 ? qa(n) : n);
				}
				return (
					(d = (g[p] - g.min) / g.max || 0),
					Wt(g.b + (n ? n(d) : d) * g.v) + g.u
				);
			}
		);
	},
	Es = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (n) {
			var r = Wt(Math.round(parseFloat(n) / t) * t * e);
			return (r - (r % 1)) / e + (wn(n) ? 0 : re(n));
		};
	},
	Ra = function (t, e) {
		var n = se(t),
			r,
			i;
		return (
			!n &&
				fn(t) &&
				((r = n = t.radius || Ne),
				t.values
					? ((t = Be(t.values)), (i = !wn(t[0])) && (r *= r))
					: (t = Es(t.increment))),
			Yn(
				e,
				n
					? Pt(t)
						? function (s) {
								return (i = t(s)), Math.abs(i - s) <= r ? i : s;
							}
						: function (s) {
								for (
									var o = parseFloat(i ? s.x : s),
										u = parseFloat(i ? s.y : 0),
										l = Ne,
										c = 0,
										f = t.length,
										p,
										h;
									f--;

								)
									i
										? ((p = t[f].x - o), (h = t[f].y - u), (p = p * p + h * h))
										: (p = Math.abs(t[f] - o)),
										p < l && ((l = p), (c = f));
								return (
									(c = !r || l <= r ? t[c] : s),
									i || c === s || wn(s) ? c : c + re(s)
								);
							}
					: Es(t),
			)
		);
	},
	Ia = function (t, e, n, r) {
		return Yn(se(t) ? !e : n === !0 ? !!(n = 0) : !r, function () {
			return se(t)
				? t[~~(Math.random() * t.length)]
				: (n = n || 1e-5) &&
						(r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
						Math.floor(
							Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) *
								n *
								r,
						) / r;
		});
	},
	ul = function () {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
			e[n] = arguments[n];
		return function (r) {
			return e.reduce(function (i, s) {
				return s(i);
			}, r);
		};
	},
	ll = function (t, e) {
		return function (n) {
			return t(parseFloat(n)) + (e || re(n));
		};
	},
	cl = function (t, e, n) {
		return za(t, e, 0, 1, n);
	},
	Fa = function (t, e, n) {
		return Yn(n, function (r) {
			return t[~~e(r)];
		});
	},
	fl = function a(t, e, n) {
		var r = e - t;
		return se(t)
			? Fa(t, a(0, t.length), e)
			: Yn(n, function (i) {
					return ((r + ((i - t) % r)) % r) + t;
				});
	},
	hl = function a(t, e, n) {
		var r = e - t,
			i = r * 2;
		return se(t)
			? Fa(t, a(0, t.length - 1), e)
			: Yn(n, function (s) {
					return (s = (i + ((s - t) % i)) % i || 0), t + (s > r ? i - s : s);
				});
	},
	ai = function (t) {
		for (var e = 0, n = "", r, i, s, o; ~(r = t.indexOf("random(", e)); )
			(s = t.indexOf(")", r)),
				(o = t.charAt(r + 7) === "["),
				(i = t.substr(r + 7, s - r - 7).match(o ? ya : Ss)),
				(n +=
					t.substr(e, r - e) + Ia(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5)),
				(e = s + 1);
		return n + t.substr(e, t.length - e);
	},
	za = function (t, e, n, r, i) {
		var s = e - t,
			o = r - n;
		return Yn(i, function (u) {
			return n + (((u - t) / s) * o || 0);
		});
	},
	dl = function a(t, e, n, r) {
		var i = isNaN(t + e)
			? 0
			: function (h) {
					return (1 - h) * t + h * e;
				};
		if (!i) {
			var s = Gt(t),
				o = {},
				u,
				l,
				c,
				f,
				p;
			if ((n === !0 && (r = 1) && (n = null), s))
				(t = { p: t }), (e = { p: e });
			else if (se(t) && !se(e)) {
				for (c = [], f = t.length, p = f - 2, l = 1; l < f; l++)
					c.push(a(t[l - 1], t[l]));
				f--,
					(i = function (_) {
						_ *= f;
						var d = Math.min(p, ~~_);
						return c[d](_ - d);
					}),
					(n = e);
			} else r || (t = rr(se(t) ? [] : {}, t));
			if (!c) {
				for (u in e) ro.call(o, t, u, "get", e[u]);
				i = function (_) {
					return ao(_, o) || (s ? t.p : t);
				};
			}
		}
		return Yn(n, i);
	},
	Eo = function (t, e, n) {
		var r = t.labels,
			i = Ne,
			s,
			o,
			u;
		for (s in r)
			(o = r[s] - e),
				o < 0 == !!n && o && i > (o = Math.abs(o)) && ((u = s), (i = o));
		return u;
	},
	ke = function (t, e, n) {
		var r = t.vars,
			i = r[e],
			s = mt,
			o = t._ctx,
			u,
			l,
			c;
		if (i)
			return (
				(u = r[e + "Params"]),
				(l = r.callbackScope || t),
				n && Rn.length && Ui(),
				o && (mt = o),
				(c = u ? i.apply(l, u) : i.call(l)),
				(mt = s),
				c
			);
	},
	Br = function (t) {
		return (
			zn(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!ie),
			t.progress() < 1 && ke(t, "onInterrupt"),
			t
		);
	},
	yr,
	Na = [],
	Ba = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), Qs() || t.headless)) {
				var e = t.name,
					n = Pt(t),
					r =
						e && !n && t.init
							? function () {
									this._props = [];
								}
							: t,
					i = {
						init: oi,
						render: ao,
						add: ro,
						kill: Pl,
						modifier: Cl,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: oo,
						aliases: {},
						register: 0,
					};
				if ((Pr(), t !== r)) {
					if (De[e]) return;
					Xe(r, Xe($i(t, i), s)),
						rr(r.prototype, rr(i, $i(t, s))),
						(De[(r.prop = e)] = r),
						t.targetTest && (Ii.push(r), (to[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				wa(e, r), t.register && t.register(be, r, xe);
			} else Na.push(t);
	},
	ct = 255,
	Yr = {
		aqua: [0, ct, ct],
		lime: [0, ct, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, ct],
		navy: [0, 0, 128],
		white: [ct, ct, ct],
		olive: [128, 128, 0],
		yellow: [ct, ct, 0],
		orange: [ct, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [ct, 0, 0],
		pink: [ct, 192, 203],
		cyan: [0, ct, ct],
		transparent: [ct, ct, ct, 0],
	},
	ls = function (t, e, n) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? e + (n - e) * t * 6
				: t < 0.5
					? n
					: t * 3 < 2
						? e + (n - e) * (2 / 3 - t) * 6
						: e) *
				ct +
				0.5) |
				0
		);
	},
	Ya = function (t, e, n) {
		var r = t ? (wn(t) ? [t >> 16, (t >> 8) & ct, t & ct] : 0) : Yr.black,
			i,
			s,
			o,
			u,
			l,
			c,
			f,
			p,
			h,
			_;
		if (!r) {
			if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yr[t]))
				r = Yr[t];
			else if (t.charAt(0) === "#") {
				if (
					(t.length < 6 &&
						((i = t.charAt(1)),
						(s = t.charAt(2)),
						(o = t.charAt(3)),
						(t =
							"#" +
							i +
							i +
							s +
							s +
							o +
							o +
							(t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
					t.length === 9)
				)
					return (
						(r = parseInt(t.substr(1, 6), 16)),
						[r >> 16, (r >> 8) & ct, r & ct, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & ct, t & ct]);
			} else if (t.substr(0, 3) === "hsl") {
				if (((r = _ = t.match(Ss)), !e))
					(u = (+r[0] % 360) / 360),
						(l = +r[1] / 100),
						(c = +r[2] / 100),
						(s = c <= 0.5 ? c * (l + 1) : c + l - c * l),
						(i = c * 2 - s),
						r.length > 3 && (r[3] *= 1),
						(r[0] = ls(u + 1 / 3, i, s)),
						(r[1] = ls(u, i, s)),
						(r[2] = ls(u - 1 / 3, i, s));
				else if (~t.indexOf("="))
					return (r = t.match(ga)), n && r.length < 4 && (r[3] = 1), r;
			} else r = t.match(Ss) || Yr.transparent;
			r = r.map(Number);
		}
		return (
			e &&
				!_ &&
				((i = r[0] / ct),
				(s = r[1] / ct),
				(o = r[2] / ct),
				(f = Math.max(i, s, o)),
				(p = Math.min(i, s, o)),
				(c = (f + p) / 2),
				f === p
					? (u = l = 0)
					: ((h = f - p),
						(l = c > 0.5 ? h / (2 - f - p) : h / (f + p)),
						(u =
							f === i
								? (s - o) / h + (s < o ? 6 : 0)
								: f === s
									? (o - i) / h + 2
									: (i - s) / h + 4),
						(u *= 60)),
				(r[0] = ~~(u + 0.5)),
				(r[1] = ~~(l * 100 + 0.5)),
				(r[2] = ~~(c * 100 + 0.5))),
			n && r.length < 4 && (r[3] = 1),
			r
		);
	},
	Xa = function (t) {
		var e = [],
			n = [],
			r = -1;
		return (
			t.split(In).forEach(function (i) {
				var s = i.match(mr) || [];
				e.push.apply(e, s), n.push((r += s.length + 1));
			}),
			(e.c = n),
			e
		);
	},
	Ao = function (t, e, n) {
		var r = "",
			i = (t + r).match(In),
			s = e ? "hsla(" : "rgba(",
			o = 0,
			u,
			l,
			c,
			f;
		if (!i) return t;
		if (
			((i = i.map(function (p) {
				return (
					(p = Ya(p, e, 1)) &&
					s +
						(e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
						")"
				);
			})),
			n && ((c = Xa(t)), (u = n.c), u.join(r) !== c.c.join(r)))
		)
			for (l = t.replace(In, "1").split(mr), f = l.length - 1; o < f; o++)
				r +=
					l[o] +
					(~u.indexOf(o)
						? i.shift() || s + "0,0,0,0)"
						: (c.length ? c : i.length ? i : n).shift());
		if (!l)
			for (l = t.split(In), f = l.length - 1; o < f; o++) r += l[o] + i[o];
		return r + l[f];
	},
	In = (function () {
		var a =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			t;
		for (t in Yr) a += "|" + t + "\\b";
		return new RegExp(a + ")", "gi");
	})(),
	pl = /hsl[a]?\(/,
	Va = function (t) {
		var e = t.join(" "),
			n;
		if (((In.lastIndex = 0), In.test(e)))
			return (
				(n = pl.test(e)),
				(t[1] = Ao(t[1], n)),
				(t[0] = Ao(t[0], n, Xa(t[1]))),
				!0
			);
	},
	ui,
	Ce = (function () {
		var a = Date.now,
			t = 500,
			e = 33,
			n = a(),
			r = n,
			i = 1e3 / 240,
			s = i,
			o = [],
			u,
			l,
			c,
			f,
			p,
			h,
			_ = function d(g) {
				var m = a() - r,
					y = g === !0,
					w,
					v,
					b,
					O;
				if (
					((m > t || m < 0) && (n += m - e),
					(r += m),
					(b = r - n),
					(w = b - s),
					(w > 0 || y) &&
						((O = ++f.frame),
						(p = b - f.time * 1e3),
						(f.time = b = b / 1e3),
						(s += w + (w >= i ? 4 : i - w)),
						(v = 1)),
					y || (u = l(d)),
					v)
				)
					for (h = 0; h < o.length; h++) o[h](b, p, O, g);
			};
		return (
			(f = {
				time: 0,
				frame: 0,
				tick: function () {
					_(!0);
				},
				deltaRatio: function (g) {
					return p / (1e3 / (g || 60));
				},
				wake: function () {
					va &&
						(!Ms &&
							Qs() &&
							((nn = Ms = window),
							(Zs = nn.document || {}),
							(Ae.gsap = be),
							(nn.gsapVersions || (nn.gsapVersions = [])).push(be.version),
							xa(Hi || nn.GreenSockGlobals || (!nn.gsap && nn) || {}),
							Na.forEach(Ba)),
						(c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
						u && f.sleep(),
						(l =
							c ||
							function (g) {
								return setTimeout(g, (s - f.time * 1e3 + 1) | 0);
							}),
						(ui = 1),
						_(2));
				},
				sleep: function () {
					(c ? cancelAnimationFrame : clearTimeout)(u), (ui = 0), (l = oi);
				},
				lagSmoothing: function (g, m) {
					(t = g || 1 / 0), (e = Math.min(m || 33, t));
				},
				fps: function (g) {
					(i = 1e3 / (g || 240)), (s = f.time * 1e3 + i);
				},
				add: function (g, m, y) {
					var w = m
						? function (v, b, O, T) {
								g(v, b, O, T), f.remove(w);
							}
						: g;
					return f.remove(g), o[y ? "unshift" : "push"](w), Pr(), w;
				},
				remove: function (g, m) {
					~(m = o.indexOf(g)) && o.splice(m, 1) && h >= m && h--;
				},
				_listeners: o,
			}),
			f
		);
	})(),
	Pr = function () {
		return !ui && Ce.wake();
	},
	nt = {},
	_l = /^[\d.\-M][\d.\-,\s]/,
	gl = /["']/g,
	ml = function (t) {
		for (
			var e = {},
				n = t.substr(1, t.length - 3).split(":"),
				r = n[0],
				i = 1,
				s = n.length,
				o,
				u,
				l;
			i < s;
			i++
		)
			(u = n[i]),
				(o = i !== s - 1 ? u.lastIndexOf(",") : u.length),
				(l = u.substr(0, o)),
				(e[r] = isNaN(l) ? l.replace(gl, "").trim() : +l),
				(r = u.substr(o + 1).trim());
		return e;
	},
	yl = function (t) {
		var e = t.indexOf("(") + 1,
			n = t.indexOf(")"),
			r = t.indexOf("(", e);
		return t.substring(e, ~r && r < n ? t.indexOf(")", n + 1) : n);
	},
	vl = function (t) {
		var e = (t + "").split("("),
			n = nt[e[0]];
		return n && e.length > 1 && n.config
			? n.config.apply(
					null,
					~t.indexOf("{") ? [ml(e[1])] : yl(t).split(",").map(Ma),
				)
			: nt._CE && _l.test(t)
				? nt._CE("", t)
				: n;
	},
	qa = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	Ha = function a(t, e) {
		for (var n = t._first, r; n; )
			n instanceof he
				? a(n, e)
				: n.vars.yoyoEase &&
					(!n._yoyo || !n._repeat) &&
					n._yoyo !== e &&
					(n.timeline
						? a(n.timeline, e)
						: ((r = n._ease),
							(n._ease = n._yEase),
							(n._yEase = r),
							(n._yoyo = e))),
				(n = n._next);
	},
	Zn = function (t, e) {
		return (t && (Pt(t) ? t : nt[t] || vl(t))) || e;
	},
	lr = function (t, e, n, r) {
		n === void 0 &&
			(n = function (u) {
				return 1 - e(1 - u);
			}),
			r === void 0 &&
				(r = function (u) {
					return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
				});
		var i = { easeIn: e, easeOut: n, easeInOut: r },
			s;
		return (
			ve(t, function (o) {
				(nt[o] = Ae[o] = i), (nt[(s = o.toLowerCase())] = n);
				for (var u in i)
					nt[
						s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
					] = nt[o + "." + u] = i[u];
			}),
			i
		);
	},
	Ua = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	cs = function a(t, e, n) {
		var r = e >= 1 ? e : 1,
			i = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (i / Ts) * (Math.asin(1 / r) || 0),
			o = function (c) {
				return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Wu((c - s) * i) + 1;
			},
			u =
				t === "out"
					? o
					: t === "in"
						? function (l) {
								return 1 - o(1 - l);
							}
						: Ua(o);
		return (
			(i = Ts / i),
			(u.config = function (l, c) {
				return a(t, l, c);
			}),
			u
		);
	},
	fs = function a(t, e) {
		e === void 0 && (e = 1.70158);
		var n = function (s) {
				return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
			},
			r =
				t === "out"
					? n
					: t === "in"
						? function (i) {
								return 1 - n(1 - i);
							}
						: Ua(n);
		return (
			(r.config = function (i) {
				return a(t, i);
			}),
			r
		);
	};
ve("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
	var e = t < 5 ? t + 1 : t;
	lr(
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
nt.Linear.easeNone = nt.none = nt.Linear.easeIn;
lr("Elastic", cs("in"), cs("out"), cs());
(function (a, t) {
	var e = 1 / t,
		n = 2 * e,
		r = 2.5 * e,
		i = function (o) {
			return o < e
				? a * o * o
				: o < n
					? a * Math.pow(o - 1.5 / t, 2) + 0.75
					: o < r
						? a * (o -= 2.25 / t) * o + 0.9375
						: a * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	lr(
		"Bounce",
		function (s) {
			return 1 - i(1 - s);
		},
		i,
	);
})(7.5625, 2.75);
lr("Expo", function (a) {
	return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
lr("Circ", function (a) {
	return -(pa(1 - a * a) - 1);
});
lr("Sine", function (a) {
	return a === 1 ? 1 : -$u(a * Hu) + 1;
});
lr("Back", fs("in"), fs("out"), fs());
nt.SteppedEase =
	nt.steps =
	Ae.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var n = 1 / t,
					r = t + (e ? 0 : 1),
					i = e ? 1 : 0,
					s = 1 - ht;
				return function (o) {
					return (((r * mi(0, s, o)) | 0) + i) * n;
				};
			},
		};
Or.ease = nt["quad.out"];
ve(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (eo += a + "," + a + "Params,");
	},
);
var $a = function (t, e) {
		(this.id = Uu++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : Ta),
			(this.set = e ? e.getSetter : oo);
	},
	li = (function () {
		function a(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				Cr(this, +e.duration, 1, 1),
				(this.data = e.data),
				mt && ((this._ctx = mt), mt.data.push(this)),
				ui || Ce.wake();
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
						Cr(
							this,
							this._repeat < 0
								? n
								: (n - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (n, r) {
				if ((Pr(), !arguments.length)) return this._tTime;
				var i = this._dp;
				if (i && i.smoothChildTiming && this._ts) {
					for (is(this, n), !i._dp || i.parent || Ca(i, this); i && i.parent; )
						i.parent._time !==
							i._start +
								(i._ts >= 0
									? i._tTime / i._ts
									: (i.totalDuration() - i._tTime) / -i._ts) &&
							i.totalTime(i._tTime, !0),
							(i = i.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && n < this._tDur) ||
							(this._ts < 0 && n > 0) ||
							(!this._tDur && !n)) &&
						on(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== n ||
						(!this._dur && !r) ||
						(this._initted && Math.abs(this._zTime) === ht) ||
						(!n && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = n), Sa(this, n, r)),
					this
				);
			}),
			(t.time = function (n, r) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), n + Po(this)) %
								(this._dur + this._rDelay) || (n ? this._dur : 0),
							r,
						)
					: this._time;
			}),
			(t.totalProgress = function (n, r) {
				return arguments.length
					? this.totalTime(this.totalDuration() * n, r)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.progress = function (n, r) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
								Po(this),
							r,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(t.iteration = function (n, r) {
				var i = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (n - 1) * i, r)
					: this._repeat
						? Dr(this._tTime, i) + 1
						: 1;
			}),
			(t.timeScale = function (n, r) {
				if (!arguments.length) return this._rts === -ht ? 0 : this._rts;
				if (this._rts === n) return this;
				var i =
					this.parent && this._ts ? Wi(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +n || 0),
					(this._ts = this._ps || n === -ht ? 0 : this._rts),
					this.totalTime(mi(-Math.abs(this._delay), this._tDur, i), r !== !1),
					rs(this),
					tl(this)
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
								: (Pr(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== ht &&
											(this._tTime -= ht),
									))),
						this)
					: this._ps;
			}),
			(t.startTime = function (n) {
				if (arguments.length) {
					this._start = n;
					var r = this.parent || this._dp;
					return (
						r && (r._sort || !this.parent) && on(r, this, n - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (n) {
				return (
					this._start +
					(ye(n) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (n) {
				var r = this.parent || this._dp;
				return r
					? n &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? Wi(r.rawTime(n), this)
							: this._tTime
					: this._tTime;
			}),
			(t.revert = function (n) {
				n === void 0 && (n = Ku);
				var r = ie;
				return (
					(ie = n),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(n),
						this.totalTime(-0.01, n.suppressEvents)),
					this.data !== "nested" && n.kill !== !1 && this.kill(),
					(ie = r),
					this
				);
			}),
			(t.globalTime = function (n) {
				for (var r = this, i = arguments.length ? n : r.rawTime(); r; )
					(i = r._start + i / (Math.abs(r._ts) || 1)), (r = r._dp);
				return !this.parent && this._sat ? this._sat.globalTime(n) : i;
			}),
			(t.repeat = function (n) {
				return arguments.length
					? ((this._repeat = n === 1 / 0 ? -2 : n), ko(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (n) {
				if (arguments.length) {
					var r = this._time;
					return (this._rDelay = n), ko(this), r ? this.time(r) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (n) {
				return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
			}),
			(t.seek = function (n, r) {
				return this.totalTime(Ie(this, n), ye(r));
			}),
			(t.restart = function (n, r) {
				return this.play().totalTime(n ? -this._delay : 0, ye(r));
			}),
			(t.play = function (n, r) {
				return n != null && this.seek(n, r), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (n, r) {
				return (
					n != null && this.seek(n || this.totalDuration(), r),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (n, r) {
				return n != null && this.seek(n, r), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (n) {
				return arguments.length
					? (!!n !== this.reversed() &&
							this.timeScale(-this._rts || (n ? -ht : 0)),
						this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -ht), this;
			}),
			(t.isActive = function () {
				var n = this.parent || this._dp,
					r = this._start,
					i;
				return !!(
					!n ||
					(this._ts &&
						this._initted &&
						n.isActive() &&
						(i = n.rawTime(!0)) >= r &&
						i < this.endTime(!0) - ht)
				);
			}),
			(t.eventCallback = function (n, r, i) {
				var s = this.vars;
				return arguments.length > 1
					? (r
							? ((s[n] = r),
								i && (s[n + "Params"] = i),
								n === "onUpdate" && (this._onUpdate = r))
							: delete s[n],
						this)
					: s[n];
			}),
			(t.then = function (n) {
				var r = this;
				return new Promise(function (i) {
					var s = Pt(n) ? n : Oa,
						o = function () {
							var l = r.then;
							(r.then = null),
								Pt(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
								i(s),
								(r.then = l);
						};
					(r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
					(!r._tTime && r._ts < 0)
						? o()
						: (r._prom = o);
				});
			}),
			(t.kill = function () {
				Br(this);
			}),
			a
		);
	})();
Xe(li.prototype, {
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
	_zTime: -ht,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var he = (function (a) {
	da(t, a);
	function t(n, r) {
		var i;
		return (
			n === void 0 && (n = {}),
			(i = a.call(this, n) || this),
			(i.labels = {}),
			(i.smoothChildTiming = !!n.smoothChildTiming),
			(i.autoRemoveChildren = !!n.autoRemoveChildren),
			(i._sort = ye(n.sortChildren)),
			Tt && on(n.parent || Tt, gn(i), r),
			n.reversed && i.reverse(),
			n.paused && i.paused(!0),
			n.scrollTrigger && Pa(gn(i), n.scrollTrigger),
			i
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (r, i, s) {
			return Wr(0, arguments, this), this;
		}),
		(e.from = function (r, i, s) {
			return Wr(1, arguments, this), this;
		}),
		(e.fromTo = function (r, i, s, o) {
			return Wr(2, arguments, this), this;
		}),
		(e.set = function (r, i, s) {
			return (
				(i.duration = 0),
				(i.parent = this),
				$r(i).repeatDelay || (i.repeat = 0),
				(i.immediateRender = !!i.immediateRender),
				new Nt(r, i, Ie(this, s), 1),
				this
			);
		}),
		(e.call = function (r, i, s) {
			return on(this, Nt.delayedCall(0, r, i), s);
		}),
		(e.staggerTo = function (r, i, s, o, u, l, c) {
			return (
				(s.duration = i),
				(s.stagger = s.stagger || o),
				(s.onComplete = l),
				(s.onCompleteParams = c),
				(s.parent = this),
				new Nt(r, s, Ie(this, u)),
				this
			);
		}),
		(e.staggerFrom = function (r, i, s, o, u, l, c) {
			return (
				(s.runBackwards = 1),
				($r(s).immediateRender = ye(s.immediateRender)),
				this.staggerTo(r, i, s, o, u, l, c)
			);
		}),
		(e.staggerFromTo = function (r, i, s, o, u, l, c, f) {
			return (
				(o.startAt = s),
				($r(o).immediateRender = ye(o.immediateRender)),
				this.staggerTo(r, i, o, u, l, c, f)
			);
		}),
		(e.render = function (r, i, s) {
			var o = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				l = this._dur,
				c = r <= 0 ? 0 : Wt(r),
				f = this._zTime < 0 != r < 0 && (this._initted || !l),
				p,
				h,
				_,
				d,
				g,
				m,
				y,
				w,
				v,
				b,
				O,
				T;
			if (
				(this !== Tt && c > u && r >= 0 && (c = u), c !== this._tTime || s || f)
			) {
				if (
					(o !== this._time &&
						l &&
						((c += this._time - o), (r += this._time - o)),
					(p = c),
					(v = this._start),
					(w = this._ts),
					(m = !w),
					f && (l || (o = this._zTime), (r || !i) && (this._zTime = r)),
					this._repeat)
				) {
					if (
						((O = this._yoyo),
						(g = l + this._rDelay),
						this._repeat < -1 && r < 0)
					)
						return this.totalTime(g * 100 + r, i, s);
					if (
						((p = Wt(c % g)),
						c === u
							? ((d = this._repeat), (p = l))
							: ((d = ~~(c / g)),
								d && d === c / g && ((p = l), d--),
								p > l && (p = l)),
						(b = Dr(this._tTime, g)),
						!o &&
							this._tTime &&
							b !== d &&
							this._tTime - b * g - this._dur <= 0 &&
							(b = d),
						O && d & 1 && ((p = l - p), (T = 1)),
						d !== b && !this._lock)
					) {
						var C = O && b & 1,
							M = C === (O && d & 1);
						if (
							(d < b && (C = !C),
							(o = C ? 0 : c % l ? l : c),
							(this._lock = 1),
							(this.render(o || (T ? 0 : Wt(d * g)), i, !l)._lock = 0),
							(this._tTime = c),
							!i && this.parent && ke(this, "onRepeat"),
							this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								m !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((l = this._dur),
							(u = this._tDur),
							M &&
								((this._lock = 2),
								(o = C ? l : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !T && this.invalidate()),
							(this._lock = 0),
							!this._ts && !m)
						)
							return this;
						Ha(this, T);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = il(this, Wt(o), Wt(p))), y && (c -= p - (p = y._start))),
					(this._tTime = c),
					(this._time = p),
					(this._act = !w),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = r),
						(o = 0)),
					!o && p && !i && !d && (ke(this, "onStart"), this._tTime !== c))
				)
					return this;
				if (p >= o && r >= 0)
					for (h = this._first; h; ) {
						if (
							((_ = h._next), (h._act || p >= h._start) && h._ts && y !== h)
						) {
							if (h.parent !== this) return this.render(r, i, s);
							if (
								(h.render(
									h._ts > 0
										? (p - h._start) * h._ts
										: (h._dirty ? h.totalDuration() : h._tDur) +
												(p - h._start) * h._ts,
									i,
									s,
								),
								p !== this._time || (!this._ts && !m))
							) {
								(y = 0), _ && (c += this._zTime = -ht);
								break;
							}
						}
						h = _;
					}
				else {
					h = this._last;
					for (var D = r < 0 ? r : p; h; ) {
						if (((_ = h._prev), (h._act || D <= h._end) && h._ts && y !== h)) {
							if (h.parent !== this) return this.render(r, i, s);
							if (
								(h.render(
									h._ts > 0
										? (D - h._start) * h._ts
										: (h._dirty ? h.totalDuration() : h._tDur) +
												(D - h._start) * h._ts,
									i,
									s || (ie && (h._initted || h._startAt)),
								),
								p !== this._time || (!this._ts && !m))
							) {
								(y = 0), _ && (c += this._zTime = D ? -ht : ht);
								break;
							}
						}
						h = _;
					}
				}
				if (
					y &&
					!i &&
					(this.pause(),
					(y.render(p >= o ? 0 : -ht)._zTime = p >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = v), rs(this), this.render(r, i, s);
				this._onUpdate && !i && ke(this, "onUpdate", !0),
					((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
						(v === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
						(this._lock ||
							((r || !l) &&
								((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
								zn(this, 1),
							!i &&
								!(r < 0 && !o) &&
								(c || o || !u) &&
								(ke(
									this,
									c === u && r >= 0 ? "onComplete" : "onReverseComplete",
									!0,
								),
								this._prom &&
									!(c < u && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(e.add = function (r, i) {
			var s = this;
			if ((wn(i) || (i = Ie(this, i, r)), !(r instanceof li))) {
				if (se(r))
					return (
						r.forEach(function (o) {
							return s.add(o, i);
						}),
						this
					);
				if (Gt(r)) return this.addLabel(r, i);
				if (Pt(r)) r = Nt.delayedCall(0, r);
				else return this;
			}
			return this !== r ? on(this, r, i) : this;
		}),
		(e.getChildren = function (r, i, s, o) {
			r === void 0 && (r = !0),
				i === void 0 && (i = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -Ne);
			for (var u = [], l = this._first; l; )
				l._start >= o &&
					(l instanceof Nt
						? i && u.push(l)
						: (s && u.push(l), r && u.push.apply(u, l.getChildren(!0, i, s)))),
					(l = l._next);
			return u;
		}),
		(e.getById = function (r) {
			for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
				if (i[s].vars.id === r) return i[s];
		}),
		(e.remove = function (r) {
			return Gt(r)
				? this.removeLabel(r)
				: Pt(r)
					? this.killTweensOf(r)
					: (ns(this, r),
						r === this._recent && (this._recent = this._last),
						Qn(this));
		}),
		(e.totalTime = function (r, i) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = Wt(
							Ce.time -
								(this._ts > 0
									? r / this._ts
									: (this.totalDuration() - r) / -this._ts),
						)),
					a.prototype.totalTime.call(this, r, i),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(e.addLabel = function (r, i) {
			return (this.labels[r] = Ie(this, i)), this;
		}),
		(e.removeLabel = function (r) {
			return delete this.labels[r], this;
		}),
		(e.addPause = function (r, i, s) {
			var o = Nt.delayedCall(0, i || oi, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), on(this, o, Ie(this, r))
			);
		}),
		(e.removePause = function (r) {
			var i = this._first;
			for (r = Ie(this, r); i; )
				i._start === r && i.data === "isPause" && zn(i), (i = i._next);
		}),
		(e.killTweensOf = function (r, i, s) {
			for (var o = this.getTweensOf(r, s), u = o.length; u--; )
				Cn !== o[u] && o[u].kill(r, i);
			return this;
		}),
		(e.getTweensOf = function (r, i) {
			for (var s = [], o = Be(r), u = this._first, l = wn(i), c; u; )
				u instanceof Nt
					? Qu(u._targets, o) &&
						(l
							? (!Cn || (u._initted && u._ts)) &&
								u.globalTime(0) <= i &&
								u.globalTime(u.totalDuration()) > i
							: !i || u.isActive()) &&
						s.push(u)
					: (c = u.getTweensOf(o, i)).length && s.push.apply(s, c),
					(u = u._next);
			return s;
		}),
		(e.tweenTo = function (r, i) {
			i = i || {};
			var s = this,
				o = Ie(s, r),
				u = i,
				l = u.startAt,
				c = u.onStart,
				f = u.onStartParams,
				p = u.immediateRender,
				h,
				_ = Nt.to(
					s,
					Xe(
						{
							ease: i.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: o,
							overwrite: "auto",
							duration:
								i.duration ||
								Math.abs(
									(o - (l && "time" in l ? l.time : s._time)) / s.timeScale(),
								) ||
								ht,
							onStart: function () {
								if ((s.pause(), !h)) {
									var g =
										i.duration ||
										Math.abs(
											(o - (l && "time" in l ? l.time : s._time)) /
												s.timeScale(),
										);
									_._dur !== g && Cr(_, g, 0, 1).render(_._time, !0, !0),
										(h = 1);
								}
								c && c.apply(_, f || []);
							},
						},
						i,
					),
				);
			return p ? _.render(0) : _;
		}),
		(e.tweenFromTo = function (r, i, s) {
			return this.tweenTo(i, Xe({ startAt: { time: Ie(this, r) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (r) {
			return r === void 0 && (r = this._time), Eo(this, Ie(this, r));
		}),
		(e.previousLabel = function (r) {
			return r === void 0 && (r = this._time), Eo(this, Ie(this, r), 1);
		}),
		(e.currentLabel = function (r) {
			return arguments.length
				? this.seek(r, !0)
				: this.previousLabel(this._time + ht);
		}),
		(e.shiftChildren = function (r, i, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, u = this.labels, l; o; )
				o._start >= s && ((o._start += r), (o._end += r)), (o = o._next);
			if (i) for (l in u) u[l] >= s && (u[l] += r);
			return Qn(this);
		}),
		(e.invalidate = function (r) {
			var i = this._first;
			for (this._lock = 0; i; ) i.invalidate(r), (i = i._next);
			return a.prototype.invalidate.call(this, r);
		}),
		(e.clear = function (r) {
			r === void 0 && (r = !0);
			for (var i = this._first, s; i; ) (s = i._next), this.remove(i), (i = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				r && (this.labels = {}),
				Qn(this)
			);
		}),
		(e.totalDuration = function (r) {
			var i = 0,
				s = this,
				o = s._last,
				u = Ne,
				l,
				c,
				f;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -r : r),
				);
			if (s._dirty) {
				for (f = s.parent; o; )
					(l = o._prev),
						o._dirty && o.totalDuration(),
						(c = o._start),
						c > u && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (on(s, o, c - o._delay, 1)._lock = 0))
							: (u = c),
						c < 0 &&
							o._ts &&
							((i -= c),
							((!f && !s._dp) || (f && f.smoothChildTiming)) &&
								((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
							s.shiftChildren(-c, !1, -1 / 0),
							(u = 0)),
						o._end > i && o._ts && (i = o._end),
						(o = l);
				Cr(s, s === Tt && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (r) {
			if ((Tt._ts && (Sa(Tt, Wi(r, Tt)), (ba = Ce.frame)), Ce.frame >= Do)) {
				Do += Ee.autoSleep || 120;
				var i = Tt._first;
				if ((!i || !i._ts) && Ee.autoSleep && Ce._listeners.length < 2) {
					for (; i && !i._ts; ) i = i._next;
					i || Ce.sleep();
				}
			}
		}),
		t
	);
})(li);
Xe(he.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var xl = function (t, e, n, r, i, s, o) {
		var u = new xe(this._pt, t, e, 0, 1, Za, null, i),
			l = 0,
			c = 0,
			f,
			p,
			h,
			_,
			d,
			g,
			m,
			y;
		for (
			u.b = n,
				u.e = r,
				n += "",
				r += "",
				(m = ~r.indexOf("random(")) && (r = ai(r)),
				s && ((y = [n, r]), s(y, t, e), (n = y[0]), (r = y[1])),
				p = n.match(as) || [];
			(f = as.exec(r));

		)
			(_ = f[0]),
				(d = r.substring(l, f.index)),
				h ? (h = (h + 1) % 5) : d.substr(-5) === "rgba(" && (h = 1),
				_ !== p[c++] &&
					((g = parseFloat(p[c - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: d || c === 1 ? d : ",",
						s: g,
						c: _.charAt(1) === "=" ? xr(g, _) - g : parseFloat(_) - g,
						m: h && h < 4 ? Math.round : 0,
					}),
					(l = as.lastIndex));
		return (
			(u.c = l < r.length ? r.substring(l, r.length) : ""),
			(u.fp = o),
			(ma.test(r) || m) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	ro = function (t, e, n, r, i, s, o, u, l, c) {
		Pt(r) && (r = r(i || 0, t, s));
		var f = t[e],
			p =
				n !== "get"
					? n
					: Pt(f)
						? l
							? t[
									e.indexOf("set") || !Pt(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](l)
							: t[e]()
						: f,
			h = Pt(f) ? (l ? Ml : Ka) : so,
			_;
		if (
			(Gt(r) &&
				(~r.indexOf("random(") && (r = ai(r)),
				r.charAt(1) === "=" &&
					((_ = xr(p, r) + (re(p) || 0)), (_ || _ === 0) && (r = _))),
			!c || p !== r || As)
		)
			return !isNaN(p * r) && r !== ""
				? ((_ = new xe(
						this._pt,
						t,
						e,
						+p || 0,
						r - (p || 0),
						typeof f == "boolean" ? Dl : Qa,
						0,
						h,
					)),
					l && (_.fp = l),
					o && _.modifier(o, this, t),
					(this._pt = _))
				: (!f && !(e in t) && Js(e, r),
					xl.call(this, t, e, p, r, h, u || Ee.stringFilter, l));
	},
	wl = function (t, e, n, r, i) {
		if (
			(Pt(t) && (t = Gr(t, i, e, n, r)),
			!fn(t) || (t.style && t.nodeType) || se(t) || _a(t))
		)
			return Gt(t) ? Gr(t, i, e, n, r) : t;
		var s = {},
			o;
		for (o in t) s[o] = Gr(t[o], i, e, n, r);
		return s;
	},
	Wa = function (t, e, n, r, i, s) {
		var o, u, l, c;
		if (
			De[t] &&
			(o = new De[t]()).init(
				i,
				o.rawVars ? e[t] : wl(e[t], r, i, s, n),
				n,
				r,
				s,
			) !== !1 &&
			((n._pt = u = new xe(n._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
			n !== yr)
		)
			for (l = n._ptLookup[n._targets.indexOf(i)], c = o._props.length; c--; )
				l[o._props[c]] = u;
		return o;
	},
	Cn,
	As,
	io = function a(t, e, n) {
		var r = t.vars,
			i = r.ease,
			s = r.startAt,
			o = r.immediateRender,
			u = r.lazy,
			l = r.onUpdate,
			c = r.runBackwards,
			f = r.yoyoEase,
			p = r.keyframes,
			h = r.autoRevert,
			_ = t._dur,
			d = t._startAt,
			g = t._targets,
			m = t.parent,
			y = m && m.data === "nested" ? m.vars.targets : g,
			w = t._overwrite === "auto" && !js,
			v = t.timeline,
			b,
			O,
			T,
			C,
			M,
			D,
			E,
			P,
			N,
			F,
			X,
			Y,
			I;
		if (
			(v && (!p || !i) && (i = "none"),
			(t._ease = Zn(i, Or.ease)),
			(t._yEase = f ? qa(Zn(f === !0 ? i : f, Or.ease)) : 0),
			f &&
				t._yoyo &&
				!t._repeat &&
				((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
			(t._from = !v && !!r.runBackwards),
			!v || (p && !r.stagger))
		) {
			if (
				((P = g[0] ? Kn(g[0]).harness : 0),
				(Y = P && r[P.prop]),
				(b = $i(r, to)),
				d &&
					(d._zTime < 0 && d.progress(1),
					e < 0 && c && o && !h ? d.render(-1, !0) : d.revert(c && _ ? Ri : ju),
					(d._lazy = 0)),
				s)
			) {
				if (
					(zn(
						(t._startAt = Nt.set(
							g,
							Xe(
								{
									data: "isStart",
									overwrite: !1,
									parent: m,
									immediateRender: !0,
									lazy: !d && ye(u),
									startAt: null,
									delay: 0,
									onUpdate:
										l &&
										function () {
											return ke(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (ie || (!o && !h)) && t._startAt.revert(Ri),
					o && _ && e <= 0 && n <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (c && _ && !d) {
				if (
					(e && (o = !1),
					(T = Xe(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !d && ye(u),
							immediateRender: o,
							stagger: 0,
							parent: m,
						},
						b,
					)),
					Y && (T[P.prop] = Y),
					zn((t._startAt = Nt.set(g, T))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (ie ? t._startAt.revert(Ri) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					a(t._startAt, ht, ht);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, u = (_ && ye(u)) || (u && !_), O = 0;
				O < g.length;
				O++
			) {
				if (
					((M = g[O]),
					(E = M._gsap || no(g)[O]._gsap),
					(t._ptLookup[O] = F = {}),
					Os[E.id] && Rn.length && Ui(),
					(X = y === g ? O : y.indexOf(M)),
					P &&
						(N = new P()).init(M, Y || b, t, X, y) !== !1 &&
						((t._pt = C =
							new xe(t._pt, M, N.name, 0, 1, N.render, N, 0, N.priority)),
						N._props.forEach(function ($) {
							F[$] = C;
						}),
						N.priority && (D = 1)),
					!P || Y)
				)
					for (T in b)
						De[T] && (N = Wa(T, b, t, X, M, y))
							? N.priority && (D = 1)
							: (F[T] = C =
									ro.call(t, M, T, "get", b[T], X, y, 0, r.stringFilter));
				t._op && t._op[O] && t.kill(M, t._op[O]),
					w &&
						t._pt &&
						((Cn = t),
						Tt.killTweensOf(M, F, t.globalTime(e)),
						(I = !t.parent),
						(Cn = 0)),
					t._pt && u && (Os[E.id] = 1);
			}
			D && Ja(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = l),
			(t._initted = (!t._op || t._pt) && !I),
			p && e <= 0 && v.render(Ne, !0, !0);
	},
	bl = function (t, e, n, r, i, s, o, u) {
		var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
			c,
			f,
			p,
			h;
		if (!l)
			for (
				l = t._ptCache[e] = [], p = t._ptLookup, h = t._targets.length;
				h--;

			) {
				if (((c = p[h][e]), c && c.d && c.d._pt))
					for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
				if (!c)
					return (
						(As = 1),
						(t.vars[e] = "+=0"),
						io(t, o),
						(As = 0),
						u ? si(e + " not eligible for reset") : 1
					);
				l.push(c);
			}
		for (h = l.length; h--; )
			(f = l[h]),
				(c = f._pt || f),
				(c.s = (r || r === 0) && !i ? r : c.s + (r || 0) + s * c.c),
				(c.c = n - c.s),
				f.e && (f.e = At(n) + re(f.e)),
				f.b && (f.b = c.s + re(f.b));
	},
	Tl = function (t, e) {
		var n = t[0] ? Kn(t[0]).harness : 0,
			r = n && n.aliases,
			i,
			s,
			o,
			u;
		if (!r) return e;
		i = rr({}, e);
		for (s in r)
			if (s in i) for (u = r[s].split(","), o = u.length; o--; ) i[u[o]] = i[s];
		return i;
	},
	Sl = function (t, e, n, r) {
		var i = e.ease || r || "power1.inOut",
			s,
			o;
		if (se(e))
			(o = n[t] || (n[t] = [])),
				e.forEach(function (u, l) {
					return o.push({ t: (l / (e.length - 1)) * 100, v: u, e: i });
				});
		else
			for (s in e)
				(o = n[s] || (n[s] = [])),
					s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: i });
	},
	Gr = function (t, e, n, r, i) {
		return Pt(t)
			? t.call(e, n, r, i)
			: Gt(t) && ~t.indexOf("random(")
				? ai(t)
				: t;
	},
	Ga = eo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	ja = {};
ve(Ga + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (ja[a] = 1);
});
var Nt = (function (a) {
	da(t, a);
	function t(n, r, i, s) {
		var o;
		typeof r == "number" && ((i.duration = r), (r = i), (i = null)),
			(o = a.call(this, s ? r : $r(r)) || this);
		var u = o.vars,
			l = u.duration,
			c = u.delay,
			f = u.immediateRender,
			p = u.stagger,
			h = u.overwrite,
			_ = u.keyframes,
			d = u.defaults,
			g = u.scrollTrigger,
			m = u.yoyoEase,
			y = r.parent || Tt,
			w = (se(n) || _a(n) ? wn(n[0]) : "length" in r) ? [n] : Be(n),
			v,
			b,
			O,
			T,
			C,
			M,
			D,
			E;
		if (
			((o._targets = w.length
				? no(w)
				: si(
						"GSAP target " + n + " not found. https://gsap.com",
						!Ee.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = h),
			_ || p || wi(l) || wi(c))
		) {
			if (
				((r = o.vars),
				(v = o.timeline =
					new he({
						data: "nested",
						defaults: d || {},
						targets: y && y.data === "nested" ? y.vars.targets : w,
					})),
				v.kill(),
				(v.parent = v._dp = gn(o)),
				(v._start = 0),
				p || wi(l) || wi(c))
			) {
				if (((T = w.length), (D = p && La(p)), fn(p)))
					for (C in p) ~Ga.indexOf(C) && (E || (E = {}), (E[C] = p[C]));
				for (b = 0; b < T; b++)
					(O = $i(r, ja)),
						(O.stagger = 0),
						m && (O.yoyoEase = m),
						E && rr(O, E),
						(M = w[b]),
						(O.duration = +Gr(l, gn(o), b, M, w)),
						(O.delay = (+Gr(c, gn(o), b, M, w) || 0) - o._delay),
						!p &&
							T === 1 &&
							O.delay &&
							((o._delay = c = O.delay), (o._start += c), (O.delay = 0)),
						v.to(M, O, D ? D(b, M, w) : 0),
						(v._ease = nt.none);
				v.duration() ? (l = c = 0) : (o.timeline = 0);
			} else if (_) {
				$r(Xe(v.vars.defaults, { ease: "none" })),
					(v._ease = Zn(_.ease || r.ease || "none"));
				var P = 0,
					N,
					F,
					X;
				if (se(_))
					_.forEach(function (Y) {
						return v.to(w, Y, ">");
					}),
						v.duration();
				else {
					O = {};
					for (C in _)
						C === "ease" || C === "easeEach" || Sl(C, _[C], O, _.easeEach);
					for (C in O)
						for (
							N = O[C].sort(function (Y, I) {
								return Y.t - I.t;
							}),
								P = 0,
								b = 0;
							b < N.length;
							b++
						)
							(F = N[b]),
								(X = {
									ease: F.e,
									duration: ((F.t - (b ? N[b - 1].t : 0)) / 100) * l,
								}),
								(X[C] = F.v),
								v.to(w, X, P),
								(P += X.duration);
					v.duration() < l && v.to({}, { duration: l - v.duration() });
				}
			}
			l || o.duration((l = v.duration()));
		} else o.timeline = 0;
		return (
			h === !0 && !js && ((Cn = gn(o)), Tt.killTweensOf(w), (Cn = 0)),
			on(y, gn(o), i),
			r.reversed && o.reverse(),
			r.paused && o.paused(!0),
			(f ||
				(!l &&
					!_ &&
					o._start === Wt(y._time) &&
					ye(f) &&
					el(gn(o)) &&
					y.data !== "nested")) &&
				((o._tTime = -ht), o.render(Math.max(0, -c) || 0)),
			g && Pa(gn(o), g),
			o
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (r, i, s) {
			var o = this._time,
				u = this._tDur,
				l = this._dur,
				c = r < 0,
				f = r > u - ht && !c ? u : r < ht ? 0 : r,
				p,
				h,
				_,
				d,
				g,
				m,
				y,
				w,
				v;
			if (!l) rl(this, r, i, s);
			else if (
				f !== this._tTime ||
				!r ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== c)
			) {
				if (((p = f), (w = this.timeline), this._repeat)) {
					if (((d = l + this._rDelay), this._repeat < -1 && c))
						return this.totalTime(d * 100 + r, i, s);
					if (
						((p = Wt(f % d)),
						f === u
							? ((_ = this._repeat), (p = l))
							: ((_ = ~~(f / d)),
								_ && _ === Wt(f / d) && ((p = l), _--),
								p > l && (p = l)),
						(m = this._yoyo && _ & 1),
						m && ((v = this._yEase), (p = l - p)),
						(g = Dr(this._tTime, d)),
						p === o && !s && this._initted && _ === g)
					)
						return (this._tTime = f), this;
					_ !== g &&
						(w && this._yEase && Ha(w, m),
						this.vars.repeatRefresh &&
							!m &&
							!this._lock &&
							this._time !== d &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(Wt(d * _), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (ka(this, c ? r : p, s, i, f)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
						return this;
					if (l !== this._dur) return this.render(r, i, s);
				}
				if (
					((this._tTime = f),
					(this._time = p),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (v || this._ease)(p / l)),
					this._from && (this.ratio = y = 1 - y),
					p && !o && !i && !_ && (ke(this, "onStart"), this._tTime !== f))
				)
					return this;
				for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
				(w && w.render(r < 0 ? r : w._dur * w._ease(p / this._dur), i, s)) ||
					(this._startAt && (this._zTime = r)),
					this._onUpdate &&
						!i &&
						(c && Ds(this, r, i, s), ke(this, "onUpdate")),
					this._repeat &&
						_ !== g &&
						this.vars.onRepeat &&
						!i &&
						this.parent &&
						ke(this, "onRepeat"),
					(f === this._tDur || !f) &&
						this._tTime === f &&
						(c && !this._onUpdate && Ds(this, r, !0, !0),
						(r || !l) &&
							((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
							zn(this, 1),
						!i &&
							!(c && !o) &&
							(f || o || m) &&
							(ke(this, f === u ? "onComplete" : "onReverseComplete", !0),
							this._prom && !(f < u && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(e.targets = function () {
			return this._targets;
		}),
		(e.invalidate = function (r) {
			return (
				(!r || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(r),
				a.prototype.invalidate.call(this, r)
			);
		}),
		(e.resetTo = function (r, i, s, o, u) {
			ui || Ce.wake(), this._ts || this.play();
			var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c;
			return (
				this._initted || io(this, l),
				(c = this._ease(l / this._dur)),
				bl(this, r, i, s, o, c, l, u)
					? this.resetTo(r, i, s, o, 1)
					: (is(this, 0),
						this.parent ||
							Da(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(e.kill = function (r, i) {
			if ((i === void 0 && (i = "all"), !r && (!i || i === "all")))
				return (this._lazy = this._pt = 0), this.parent ? Br(this) : this;
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(r, i, Cn && Cn.vars.overwrite !== !0)
						._first || Br(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						Cr(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				u = r ? Be(r) : o,
				l = this._ptLookup,
				c = this._pt,
				f,
				p,
				h,
				_,
				d,
				g,
				m;
			if ((!i || i === "all") && Ju(o, u))
				return i === "all" && (this._pt = 0), Br(this);
			for (
				f = this._op = this._op || [],
					i !== "all" &&
						(Gt(i) &&
							((d = {}),
							ve(i, function (y) {
								return (d[y] = 1);
							}),
							(i = d)),
						(i = Tl(o, i))),
					m = o.length;
				m--;

			)
				if (~u.indexOf(o[m])) {
					(p = l[m]),
						i === "all"
							? ((f[m] = i), (_ = p), (h = {}))
							: ((h = f[m] = f[m] || {}), (_ = i));
					for (d in _)
						(g = p && p[d]),
							g &&
								((!("kill" in g.d) || g.d.kill(d) === !0) && ns(this, g, "_pt"),
								delete p[d]),
							h !== "all" && (h[d] = 1);
				}
			return this._initted && !this._pt && c && Br(this), this;
		}),
		(t.to = function (r, i) {
			return new t(r, i, arguments[2]);
		}),
		(t.from = function (r, i) {
			return Wr(1, arguments);
		}),
		(t.delayedCall = function (r, i, s, o) {
			return new t(i, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: r,
				onComplete: i,
				onReverseComplete: i,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: o,
			});
		}),
		(t.fromTo = function (r, i, s) {
			return Wr(2, arguments);
		}),
		(t.set = function (r, i) {
			return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new t(r, i);
		}),
		(t.killTweensOf = function (r, i, s) {
			return Tt.killTweensOf(r, i, s);
		}),
		t
	);
})(li);
Xe(Nt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ve("staggerTo,staggerFrom,staggerFromTo", function (a) {
	Nt[a] = function () {
		var t = new he(),
			e = Ps.call(arguments, 0);
		return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
	};
});
var so = function (t, e, n) {
		return (t[e] = n);
	},
	Ka = function (t, e, n) {
		return t[e](n);
	},
	Ml = function (t, e, n, r) {
		return t[e](r.fp, n);
	},
	Ol = function (t, e, n) {
		return t.setAttribute(e, n);
	},
	oo = function (t, e) {
		return Pt(t[e]) ? Ka : Ks(t[e]) && t.setAttribute ? Ol : so;
	},
	Qa = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	Dl = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	Za = function (t, e) {
		var n = e._pt,
			r = "";
		if (!t && e.b) r = e.b;
		else if (t === 1 && e.e) r = e.e;
		else {
			for (; n; )
				(r =
					n.p +
					(n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) +
					r),
					(n = n._next);
			r += e.c;
		}
		e.set(e.t, e.p, r, e);
	},
	ao = function (t, e) {
		for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
	},
	Cl = function (t, e, n, r) {
		for (var i = this._pt, s; i; )
			(s = i._next), i.p === r && i.modifier(t, e, n), (i = s);
	},
	Pl = function (t) {
		for (var e = this._pt, n, r; e; )
			(r = e._next),
				(e.p === t && !e.op) || e.op === t
					? ns(this, e, "_pt")
					: e.dep || (n = 1),
				(e = r);
		return !n;
	},
	kl = function (t, e, n, r) {
		r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
	},
	Ja = function (t) {
		for (var e = t._pt, n, r, i, s; e; ) {
			for (n = e._next, r = i; r && r.pr > e.pr; ) r = r._next;
			(e._prev = r ? r._prev : s) ? (e._prev._next = e) : (i = e),
				(e._next = r) ? (r._prev = e) : (s = e),
				(e = n);
		}
		t._pt = i;
	},
	xe = (function () {
		function a(e, n, r, i, s, o, u, l, c) {
			(this.t = n),
				(this.s = i),
				(this.c = s),
				(this.p = r),
				(this.r = o || Qa),
				(this.d = u || this),
				(this.set = l || so),
				(this.pr = c || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (n, r, i) {
				(this.mSet = this.mSet || this.set),
					(this.set = kl),
					(this.m = n),
					(this.mt = i),
					(this.tween = r);
			}),
			a
		);
	})();
ve(
	eo +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (to[a] = 1);
	},
);
Ae.TweenMax = Ae.TweenLite = Nt;
Ae.TimelineLite = Ae.TimelineMax = he;
Tt = new he({
	sortChildren: !1,
	defaults: Or,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
Ee.stringFilter = Va;
var Jn = [],
	Fi = {},
	El = [],
	Lo = 0,
	Al = 0,
	hs = function (t) {
		return (Fi[t] || El).map(function (e) {
			return e();
		});
	},
	Ls = function () {
		var t = Date.now(),
			e = [];
		t - Lo > 2 &&
			(hs("matchMediaInit"),
			Jn.forEach(function (n) {
				var r = n.queries,
					i = n.conditions,
					s,
					o,
					u,
					l;
				for (o in r)
					(s = nn.matchMedia(r[o]).matches),
						s && (u = 1),
						s !== i[o] && ((i[o] = s), (l = 1));
				l && (n.revert(), u && e.push(n));
			}),
			hs("matchMediaRevert"),
			e.forEach(function (n) {
				return n.onMatch(n, function (r) {
					return n.add(null, r);
				});
			}),
			(Lo = t),
			hs("matchMedia"));
	},
	tu = (function () {
		function a(e, n) {
			(this.selector = n && ks(n)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = Al++),
				e && this.add(e);
		}
		var t = a.prototype;
		return (
			(t.add = function (n, r, i) {
				Pt(n) && ((i = r), (r = n), (n = Pt));
				var s = this,
					o = function () {
						var l = mt,
							c = s.selector,
							f;
						return (
							l && l !== s && l.data.push(s),
							i && (s.selector = ks(i)),
							(mt = s),
							(f = r.apply(s, arguments)),
							Pt(f) && s._r.push(f),
							(mt = l),
							(s.selector = c),
							(s.isReverted = !1),
							f
						);
					};
				return (
					(s.last = o),
					n === Pt
						? o(s, function (u) {
								return s.add(null, u);
							})
						: n
							? (s[n] = o)
							: o
				);
			}),
			(t.ignore = function (n) {
				var r = mt;
				(mt = null), n(this), (mt = r);
			}),
			(t.getTweens = function () {
				var n = [];
				return (
					this.data.forEach(function (r) {
						return r instanceof a
							? n.push.apply(n, r.getTweens())
							: r instanceof Nt &&
									!(r.parent && r.parent.data === "nested") &&
									n.push(r);
					}),
					n
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (n, r) {
				var i = this;
				if (
					(n
						? (function () {
								for (var o = i.getTweens(), u = i.data.length, l; u--; )
									(l = i.data[u]),
										l.data === "isFlip" &&
											(l.revert(),
											l.getChildren(!0, !0, !1).forEach(function (c) {
												return o.splice(o.indexOf(c), 1);
											}));
								for (
									o
										.map(function (c) {
											return {
												g:
													c._dur ||
													c._delay ||
													(c._sat && !c._sat.vars.immediateRender)
														? c.globalTime(0)
														: -1 / 0,
												t: c,
											};
										})
										.sort(function (c, f) {
											return f.g - c.g || -1 / 0;
										})
										.forEach(function (c) {
											return c.t.revert(n);
										}),
										u = i.data.length;
									u--;

								)
									(l = i.data[u]),
										l instanceof he
											? l.data !== "nested" &&
												(l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
											: !(l instanceof Nt) && l.revert && l.revert(n);
								i._r.forEach(function (c) {
									return c(n, i);
								}),
									(i.isReverted = !0);
							})()
						: this.data.forEach(function (o) {
								return o.kill && o.kill();
							}),
					this.clear(),
					r)
				)
					for (var s = Jn.length; s--; )
						Jn[s].id === this.id && Jn.splice(s, 1);
			}),
			(t.revert = function (n) {
				this.kill(n || {});
			}),
			a
		);
	})(),
	Ll = (function () {
		function a(e) {
			(this.contexts = []), (this.scope = e), mt && mt.data.push(this);
		}
		var t = a.prototype;
		return (
			(t.add = function (n, r, i) {
				fn(n) || (n = { matches: n });
				var s = new tu(0, i || this.scope),
					o = (s.conditions = {}),
					u,
					l,
					c;
				mt && !s.selector && (s.selector = mt.selector),
					this.contexts.push(s),
					(r = s.add("onMatch", r)),
					(s.queries = n);
				for (l in n)
					l === "all"
						? (c = 1)
						: ((u = nn.matchMedia(n[l])),
							u &&
								(Jn.indexOf(s) < 0 && Jn.push(s),
								(o[l] = u.matches) && (c = 1),
								u.addListener
									? u.addListener(Ls)
									: u.addEventListener("change", Ls)));
				return (
					c &&
						r(s, function (f) {
							return s.add(null, f);
						}),
					this
				);
			}),
			(t.revert = function (n) {
				this.kill(n || {});
			}),
			(t.kill = function (n) {
				this.contexts.forEach(function (r) {
					return r.kill(n, !0);
				});
			}),
			a
		);
	})(),
	Gi = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
				e[n] = arguments[n];
			e.forEach(function (r) {
				return Ba(r);
			});
		},
		timeline: function (t) {
			return new he(t);
		},
		getTweensOf: function (t, e) {
			return Tt.getTweensOf(t, e);
		},
		getProperty: function (t, e, n, r) {
			Gt(t) && (t = Be(t)[0]);
			var i = Kn(t || {}).get,
				s = n ? Oa : Ma;
			return (
				n === "native" && (n = ""),
				t &&
					(e
						? s(((De[e] && De[e].get) || i)(t, e, n, r))
						: function (o, u, l) {
								return s(((De[o] && De[o].get) || i)(t, o, u, l));
							})
			);
		},
		quickSetter: function (t, e, n) {
			if (((t = Be(t)), t.length > 1)) {
				var r = t.map(function (c) {
						return be.quickSetter(c, e, n);
					}),
					i = r.length;
				return function (c) {
					for (var f = i; f--; ) r[f](c);
				};
			}
			t = t[0] || {};
			var s = De[e],
				o = Kn(t),
				u = (o.harness && (o.harness.aliases || {})[e]) || e,
				l = s
					? function (c) {
							var f = new s();
							(yr._pt = 0),
								f.init(t, n ? c + n : c, yr, 0, [t]),
								f.render(1, f),
								yr._pt && ao(1, yr);
						}
					: o.set(t, u);
			return s
				? l
				: function (c) {
						return l(t, u, n ? c + n : c, o, 1);
					};
		},
		quickTo: function (t, e, n) {
			var r,
				i = be.to(
					t,
					rr(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), n || {}),
				),
				s = function (u, l, c) {
					return i.resetTo(e, u, l, c);
				};
			return (s.tween = i), s;
		},
		isTweening: function (t) {
			return Tt.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = Zn(t.ease, Or.ease)), Co(Or, t || {});
		},
		config: function (t) {
			return Co(Ee, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				n = t.effect,
				r = t.plugins,
				i = t.defaults,
				s = t.extendTimeline;
			(r || "").split(",").forEach(function (o) {
				return (
					o && !De[o] && !Ae[o] && si(e + " effect requires " + o + " plugin.")
				);
			}),
				(us[e] = function (o, u, l) {
					return n(Be(o), Xe(u || {}, i), l);
				}),
				s &&
					(he.prototype[e] = function (o, u, l) {
						return this.add(us[e](o, fn(u) ? u : (l = u) && {}, this), l);
					});
		},
		registerEase: function (t, e) {
			nt[t] = Zn(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Zn(t, e) : nt;
		},
		getById: function (t) {
			return Tt.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var n = new he(t),
				r,
				i;
			for (
				n.smoothChildTiming = ye(t.smoothChildTiming),
					Tt.remove(n),
					n._dp = 0,
					n._time = n._tTime = Tt._time,
					r = Tt._first;
				r;

			)
				(i = r._next),
					(e ||
						!(
							!r._dur &&
							r instanceof Nt &&
							r.vars.onComplete === r._targets[0]
						)) &&
						on(n, r, r._start - r._delay),
					(r = i);
			return on(Tt, n, 0), n;
		},
		context: function (t, e) {
			return t ? new tu(t, e) : mt;
		},
		matchMedia: function (t) {
			return new Ll(t);
		},
		matchMediaRefresh: function () {
			return (
				Jn.forEach(function (t) {
					var e = t.conditions,
						n,
						r;
					for (r in e) e[r] && ((e[r] = !1), (n = 1));
					n && t.revert();
				}) || Ls()
			);
		},
		addEventListener: function (t, e) {
			var n = Fi[t] || (Fi[t] = []);
			~n.indexOf(e) || n.push(e);
		},
		removeEventListener: function (t, e) {
			var n = Fi[t],
				r = n && n.indexOf(e);
			r >= 0 && n.splice(r, 1);
		},
		utils: {
			wrap: fl,
			wrapYoyo: hl,
			distribute: La,
			random: Ia,
			snap: Ra,
			normalize: cl,
			getUnit: re,
			clamp: ol,
			splitColor: Ya,
			toArray: Be,
			selector: ks,
			mapRange: za,
			pipe: ul,
			unitize: ll,
			interpolate: dl,
			shuffle: Aa,
		},
		install: xa,
		effects: us,
		ticker: Ce,
		updateRoot: he.updateRoot,
		plugins: De,
		globalTimeline: Tt,
		core: {
			PropTween: xe,
			globals: wa,
			Tween: Nt,
			Timeline: he,
			Animation: li,
			getCache: Kn,
			_removeLinkedListItem: ns,
			reverting: function () {
				return ie;
			},
			context: function (t) {
				return t && mt && (mt.data.push(t), (t._ctx = mt)), mt;
			},
			suppressOverwrites: function (t) {
				return (js = t);
			},
		},
	};
ve("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return (Gi[a] = Nt[a]);
});
Ce.add(he.updateRoot);
yr = Gi.to({}, { duration: 0 });
var Rl = function (t, e) {
		for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
			n = n._next;
		return n;
	},
	Il = function (t, e) {
		var n = t._targets,
			r,
			i,
			s;
		for (r in e)
			for (i = n.length; i--; )
				(s = t._ptLookup[i][r]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Rl(s, r)),
						s && s.modifier && s.modifier(e[r], t, n[i], r));
	},
	ds = function (t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function (r, i, s) {
				s._onInit = function (o) {
					var u, l;
					if (
						(Gt(i) &&
							((u = {}),
							ve(i, function (c) {
								return (u[c] = 1);
							}),
							(i = u)),
						e)
					) {
						u = {};
						for (l in i) u[l] = e(i[l]);
						i = u;
					}
					Il(o, i);
				};
			},
		};
	},
	be =
		Gi.registerPlugin(
			{
				name: "attr",
				init: function (t, e, n, r, i) {
					var s, o, u;
					this.tween = n;
					for (s in e)
						(u = t.getAttribute(s) || ""),
							(o = this.add(
								t,
								"setAttribute",
								(u || 0) + "",
								e[s],
								r,
								i,
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
						ie ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
				},
			},
			{
				name: "endArray",
				init: function (t, e) {
					for (var n = e.length; n--; )
						this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
				},
			},
			ds("roundProps", Es),
			ds("modifiers"),
			ds("snap", Ra),
		) || Gi;
Nt.version = he.version = be.version = "3.12.5";
va = 1;
Qs() && Pr();
nt.Power0;
nt.Power1;
nt.Power2;
nt.Power3;
nt.Power4;
nt.Linear;
nt.Quad;
nt.Cubic;
nt.Quart;
nt.Quint;
nt.Strong;
nt.Elastic;
nt.Back;
nt.SteppedEase;
nt.Bounce;
nt.Sine;
nt.Expo;
nt.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ro,
	Pn,
	wr,
	uo,
	Gn,
	Io,
	lo,
	Fl = function () {
		return typeof window < "u";
	},
	bn = {},
	Un = 180 / Math.PI,
	br = Math.PI / 180,
	hr = Math.atan2,
	Fo = 1e8,
	co = /([A-Z])/g,
	zl = /(left|right|width|margin|padding|x)/i,
	Nl = /[\s,\(]\S/,
	an = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	Rs = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Bl = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	Yl = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e,
		);
	},
	Xl = function (t, e) {
		var n = e.s + e.c * t;
		e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	eu = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	nu = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	Vl = function (t, e, n) {
		return (t.style[e] = n);
	},
	ql = function (t, e, n) {
		return t.style.setProperty(e, n);
	},
	Hl = function (t, e, n) {
		return (t._gsap[e] = n);
	},
	Ul = function (t, e, n) {
		return (t._gsap.scaleX = t._gsap.scaleY = n);
	},
	$l = function (t, e, n, r, i) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = n), s.renderTransform(i, s);
	},
	Wl = function (t, e, n, r, i) {
		var s = t._gsap;
		(s[e] = n), s.renderTransform(i, s);
	},
	St = "transform",
	we = St + "Origin",
	Gl = function a(t, e) {
		var n = this,
			r = this.target,
			i = r.style,
			s = r._gsap;
		if (t in bn && i) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = an[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (n.tfm[o] = mn(r, o));
							})
						: (this.tfm[t] = s.x ? s[t] : mn(r, t)),
					t === we && (this.tfm.zOrigin = s.zOrigin);
			else
				return an.transform.split(",").forEach(function (o) {
					return a.call(n, o, e);
				});
			if (this.props.indexOf(St) >= 0) return;
			s.svg &&
				((this.svgo = r.getAttribute("data-svg-origin")),
				this.props.push(we, e, "")),
				(t = St);
		}
		(i || e) && this.props.push(t, e, i[t]);
	},
	ru = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	jl = function () {
		var t = this.props,
			e = this.target,
			n = e.style,
			r = e._gsap,
			i,
			s;
		for (i = 0; i < t.length; i += 3)
			t[i + 1]
				? (e[t[i]] = t[i + 2])
				: t[i + 2]
					? (n[t[i]] = t[i + 2])
					: n.removeProperty(
							t[i].substr(0, 2) === "--"
								? t[i]
								: t[i].replace(co, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) r[s] = this.tfm[s];
			r.svg &&
				(r.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(i = lo()),
				(!i || !i.isStart) &&
					!n[St] &&
					(ru(n),
					r.zOrigin &&
						n[we] &&
						((n[we] += " " + r.zOrigin + "px"),
						(r.zOrigin = 0),
						r.renderTransform()),
					(r.uncache = 1));
		}
	},
	iu = function (t, e) {
		var n = { target: t, props: [], revert: jl, save: Gl };
		return (
			t._gsap || be.core.getCache(t),
			e &&
				e.split(",").forEach(function (r) {
					return n.save(r);
				}),
			n
		);
	},
	su,
	Is = function (t, e) {
		var n = Pn.createElementNS
			? Pn.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: Pn.createElement(t);
		return n && n.style ? n : Pn.createElement(t);
	},
	ln = function a(t, e, n) {
		var r = getComputedStyle(t);
		return (
			r[e] ||
			r.getPropertyValue(e.replace(co, "-$1").toLowerCase()) ||
			r.getPropertyValue(e) ||
			(!n && a(t, kr(e) || e, 1)) ||
			""
		);
	},
	zo = "O,Moz,ms,Ms,Webkit".split(","),
	kr = function (t, e, n) {
		var r = e || Gn,
			i = r.style,
			s = 5;
		if (t in i && !n) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(zo[s] + t in i);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? zo[s] : "") + t;
	},
	Fs = function () {
		Fl() &&
			window.document &&
			((Ro = window),
			(Pn = Ro.document),
			(wr = Pn.documentElement),
			(Gn = Is("div") || { style: {} }),
			Is("div"),
			(St = kr(St)),
			(we = St + "Origin"),
			(Gn.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(su = !!kr("perspective")),
			(lo = be.core.reverting),
			(uo = 1));
	},
	ps = function a(t) {
		var e = Is(
				"svg",
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg",
			),
			n = this.parentNode,
			r = this.nextSibling,
			i = this.style.cssText,
			s;
		if (
			(wr.appendChild(e),
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
			n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
			wr.removeChild(e),
			(this.style.cssText = i),
			s
		);
	},
	No = function (t, e) {
		for (var n = e.length; n--; )
			if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
	},
	ou = function (t) {
		var e;
		try {
			e = t.getBBox();
		} catch {
			e = ps.call(t, !0);
		}
		return (
			(e && (e.width || e.height)) || t.getBBox === ps || (e = ps.call(t, !0)),
			e && !e.width && !e.x && !e.y
				? {
						x: +No(t, ["x", "cx", "x1"]) || 0,
						y: +No(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	au = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ou(t));
	},
	ir = function (t, e) {
		if (e) {
			var n = t.style,
				r;
			e in bn && e !== we && (e = St),
				n.removeProperty
					? ((r = e.substr(0, 2)),
						(r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						n.removeProperty(
							r === "--" ? e : e.replace(co, "-$1").toLowerCase(),
						))
					: n.removeAttribute(e);
		}
	},
	kn = function (t, e, n, r, i, s) {
		var o = new xe(t._pt, e, n, 0, 1, s ? nu : eu);
		return (t._pt = o), (o.b = r), (o.e = i), t._props.push(n), o;
	},
	Bo = { deg: 1, rad: 1, turn: 1 },
	Kl = { grid: 1, flex: 1 },
	Nn = function a(t, e, n, r) {
		var i = parseFloat(n) || 0,
			s = (n + "").trim().substr((i + "").length) || "px",
			o = Gn.style,
			u = zl.test(e),
			l = t.tagName.toLowerCase() === "svg",
			c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
			f = 100,
			p = r === "px",
			h = r === "%",
			_,
			d,
			g,
			m;
		if (r === s || !i || Bo[r] || Bo[s]) return i;
		if (
			(s !== "px" && !p && (i = a(t, e, n, "px")),
			(m = t.getCTM && au(t)),
			(h || s === "%") && (bn[e] || ~e.indexOf("adius")))
		)
			return (
				(_ = m ? t.getBBox()[u ? "width" : "height"] : t[c]),
				At(h ? (i / _) * f : (i / 100) * _)
			);
		if (
			((o[u ? "width" : "height"] = f + (p ? s : r)),
			(d =
				~e.indexOf("adius") || (r === "em" && t.appendChild && !l)
					? t
					: t.parentNode),
			m && (d = (t.ownerSVGElement || {}).parentNode),
			(!d || d === Pn || !d.appendChild) && (d = Pn.body),
			(g = d._gsap),
			g && h && g.width && u && g.time === Ce.time && !g.uncache)
		)
			return At((i / g.width) * f);
		if (h && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = f + r), (_ = t[c]), y ? (t.style[e] = y) : ir(t, e);
		} else
			(h || s === "%") &&
				!Kl[ln(d, "display")] &&
				(o.position = ln(t, "position")),
				d === t && (o.position = "static"),
				d.appendChild(Gn),
				(_ = Gn[c]),
				d.removeChild(Gn),
				(o.position = "absolute");
		return (
			u && h && ((g = Kn(d)), (g.time = Ce.time), (g.width = d[c])),
			At(p ? (_ * i) / f : _ && i ? (f / _) * i : 0)
		);
	},
	mn = function (t, e, n, r) {
		var i;
		return (
			uo || Fs(),
			e in an &&
				e !== "transform" &&
				((e = an[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			bn[e] && e !== "transform"
				? ((i = fi(t, r)),
					(i =
						e !== "transformOrigin"
							? i[e]
							: i.svg
								? i.origin
								: Ki(ln(t, we)) + " " + i.zOrigin + "px"))
				: ((i = t.style[e]),
					(!i || i === "auto" || r || ~(i + "").indexOf("calc(")) &&
						(i =
							(ji[e] && ji[e](t, e, n)) ||
							ln(t, e) ||
							Ta(t, e) ||
							(e === "opacity" ? 1 : 0))),
			n && !~(i + "").trim().indexOf(" ") ? Nn(t, e, i, n) + n : i
		);
	},
	Ql = function (t, e, n, r) {
		if (!n || n === "none") {
			var i = kr(e, t, 1),
				s = i && ln(t, i, 1);
			s && s !== n
				? ((e = i), (n = s))
				: e === "borderColor" && (n = ln(t, "borderTopColor"));
		}
		var o = new xe(this._pt, t.style, e, 0, 1, Za),
			u = 0,
			l = 0,
			c,
			f,
			p,
			h,
			_,
			d,
			g,
			m,
			y,
			w,
			v,
			b;
		if (
			((o.b = n),
			(o.e = r),
			(n += ""),
			(r += ""),
			r === "auto" &&
				((d = t.style[e]),
				(t.style[e] = r),
				(r = ln(t, e) || r),
				d ? (t.style[e] = d) : ir(t, e)),
			(c = [n, r]),
			Va(c),
			(n = c[0]),
			(r = c[1]),
			(p = n.match(mr) || []),
			(b = r.match(mr) || []),
			b.length)
		) {
			for (; (f = mr.exec(r)); )
				(g = f[0]),
					(y = r.substring(u, f.index)),
					_
						? (_ = (_ + 1) % 5)
						: (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1),
					g !== (d = p[l++] || "") &&
						((h = parseFloat(d) || 0),
						(v = d.substr((h + "").length)),
						g.charAt(1) === "=" && (g = xr(h, g) + v),
						(m = parseFloat(g)),
						(w = g.substr((m + "").length)),
						(u = mr.lastIndex - w.length),
						w ||
							((w = w || Ee.units[e] || v),
							u === r.length && ((r += w), (o.e += w))),
						v !== w && (h = Nn(t, e, d, w) || 0),
						(o._pt = {
							_next: o._pt,
							p: y || l === 1 ? y : ",",
							s: h,
							c: m - h,
							m: (_ && _ < 4) || e === "zIndex" ? Math.round : 0,
						}));
			o.c = u < r.length ? r.substring(u, r.length) : "";
		} else o.r = e === "display" && r === "none" ? nu : eu;
		return ma.test(r) && (o.e = 0), (this._pt = o), o;
	},
	Yo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Zl = function (t) {
		var e = t.split(" "),
			n = e[0],
			r = e[1] || "50%";
		return (
			(n === "top" || n === "bottom" || r === "left" || r === "right") &&
				((t = n), (n = r), (r = t)),
			(e[0] = Yo[n] || n),
			(e[1] = Yo[r] || r),
			e.join(" ")
		);
	},
	Jl = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var n = e.t,
				r = n.style,
				i = e.u,
				s = n._gsap,
				o,
				u,
				l;
			if (i === "all" || i === !0) (r.cssText = ""), (u = 1);
			else
				for (i = i.split(","), l = i.length; --l > -1; )
					(o = i[l]),
						bn[o] && ((u = 1), (o = o === "transformOrigin" ? we : St)),
						ir(n, o);
			u &&
				(ir(n, St),
				s &&
					(s.svg && n.removeAttribute("transform"),
					fi(n, 1),
					(s.uncache = 1),
					ru(r)));
		}
	},
	ji = {
		clearProps: function (t, e, n, r, i) {
			if (i.data !== "isFromStart") {
				var s = (t._pt = new xe(t._pt, e, n, 0, 0, Jl));
				return (s.u = r), (s.pr = -10), (s.tween = i), t._props.push(n), 1;
			}
		},
	},
	ci = [1, 0, 0, 1, 0, 0],
	uu = {},
	lu = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	Xo = function (t) {
		var e = ln(t, St);
		return lu(e) ? ci : e.substr(7).match(ga).map(At);
	},
	fo = function (t, e) {
		var n = t._gsap || Kn(t),
			r = t.style,
			i = Xo(t),
			s,
			o,
			u,
			l;
		return n.svg && t.getAttribute("transform")
			? ((u = t.transform.baseVal.consolidate().matrix),
				(i = [u.a, u.b, u.c, u.d, u.e, u.f]),
				i.join(",") === "1,0,0,1,0,0" ? ci : i)
			: (i === ci &&
					!t.offsetParent &&
					t !== wr &&
					!n.svg &&
					((u = r.display),
					(r.display = "block"),
					(s = t.parentNode),
					(!s || !t.offsetParent) &&
						((l = 1), (o = t.nextElementSibling), wr.appendChild(t)),
					(i = Xo(t)),
					u ? (r.display = u) : ir(t, "display"),
					l &&
						(o
							? s.insertBefore(t, o)
							: s
								? s.appendChild(t)
								: wr.removeChild(t))),
				e && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
	},
	zs = function (t, e, n, r, i, s) {
		var o = t._gsap,
			u = i || fo(t, !0),
			l = o.xOrigin || 0,
			c = o.yOrigin || 0,
			f = o.xOffset || 0,
			p = o.yOffset || 0,
			h = u[0],
			_ = u[1],
			d = u[2],
			g = u[3],
			m = u[4],
			y = u[5],
			w = e.split(" "),
			v = parseFloat(w[0]) || 0,
			b = parseFloat(w[1]) || 0,
			O,
			T,
			C,
			M;
		n
			? u !== ci &&
				(T = h * g - _ * d) &&
				((C = v * (g / T) + b * (-d / T) + (d * y - g * m) / T),
				(M = v * (-_ / T) + b * (h / T) - (h * y - _ * m) / T),
				(v = C),
				(b = M))
			: ((O = ou(t)),
				(v = O.x + (~w[0].indexOf("%") ? (v / 100) * O.width : v)),
				(b = O.y + (~(w[1] || w[0]).indexOf("%") ? (b / 100) * O.height : b))),
			r || (r !== !1 && o.smooth)
				? ((m = v - l),
					(y = b - c),
					(o.xOffset = f + (m * h + y * d) - m),
					(o.yOffset = p + (m * _ + y * g) - y))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = v),
			(o.yOrigin = b),
			(o.smooth = !!r),
			(o.origin = e),
			(o.originIsAbsolute = !!n),
			(t.style[we] = "0px 0px"),
			s &&
				(kn(s, o, "xOrigin", l, v),
				kn(s, o, "yOrigin", c, b),
				kn(s, o, "xOffset", f, o.xOffset),
				kn(s, o, "yOffset", p, o.yOffset)),
			t.setAttribute("data-svg-origin", v + " " + b);
	},
	fi = function (t, e) {
		var n = t._gsap || new $a(t);
		if ("x" in n && !e && !n.uncache) return n;
		var r = t.style,
			i = n.scaleX < 0,
			s = "px",
			o = "deg",
			u = getComputedStyle(t),
			l = ln(t, we) || "0",
			c,
			f,
			p,
			h,
			_,
			d,
			g,
			m,
			y,
			w,
			v,
			b,
			O,
			T,
			C,
			M,
			D,
			E,
			P,
			N,
			F,
			X,
			Y,
			I,
			$,
			J,
			x,
			Z,
			Mt,
			qt,
			it,
			vt;
		return (
			(c = f = p = d = g = m = y = w = v = 0),
			(h = _ = 1),
			(n.svg = !!(t.getCTM && au(t))),
			u.translate &&
				((u.translate !== "none" ||
					u.scale !== "none" ||
					u.rotate !== "none") &&
					(r[St] =
						(u.translate !== "none"
							? "translate3d(" +
								(u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
								") "
							: "") +
						(u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
						(u.scale !== "none"
							? "scale(" + u.scale.split(" ").join(",") + ") "
							: "") +
						(u[St] !== "none" ? u[St] : "")),
				(r.scale = r.rotate = r.translate = "none")),
			(T = fo(t, n.svg)),
			n.svg &&
				(n.uncache
					? (($ = t.getBBox()),
						(l = n.xOrigin - $.x + "px " + (n.yOrigin - $.y) + "px"),
						(I = ""))
					: (I = !e && t.getAttribute("data-svg-origin")),
				zs(t, I || l, !!I || n.originIsAbsolute, n.smooth !== !1, T)),
			(b = n.xOrigin || 0),
			(O = n.yOrigin || 0),
			T !== ci &&
				((E = T[0]),
				(P = T[1]),
				(N = T[2]),
				(F = T[3]),
				(c = X = T[4]),
				(f = Y = T[5]),
				T.length === 6
					? ((h = Math.sqrt(E * E + P * P)),
						(_ = Math.sqrt(F * F + N * N)),
						(d = E || P ? hr(P, E) * Un : 0),
						(y = N || F ? hr(N, F) * Un + d : 0),
						y && (_ *= Math.abs(Math.cos(y * br))),
						n.svg && ((c -= b - (b * E + O * N)), (f -= O - (b * P + O * F))))
					: ((vt = T[6]),
						(qt = T[7]),
						(x = T[8]),
						(Z = T[9]),
						(Mt = T[10]),
						(it = T[11]),
						(c = T[12]),
						(f = T[13]),
						(p = T[14]),
						(C = hr(vt, Mt)),
						(g = C * Un),
						C &&
							((M = Math.cos(-C)),
							(D = Math.sin(-C)),
							(I = X * M + x * D),
							($ = Y * M + Z * D),
							(J = vt * M + Mt * D),
							(x = X * -D + x * M),
							(Z = Y * -D + Z * M),
							(Mt = vt * -D + Mt * M),
							(it = qt * -D + it * M),
							(X = I),
							(Y = $),
							(vt = J)),
						(C = hr(-N, Mt)),
						(m = C * Un),
						C &&
							((M = Math.cos(-C)),
							(D = Math.sin(-C)),
							(I = E * M - x * D),
							($ = P * M - Z * D),
							(J = N * M - Mt * D),
							(it = F * D + it * M),
							(E = I),
							(P = $),
							(N = J)),
						(C = hr(P, E)),
						(d = C * Un),
						C &&
							((M = Math.cos(C)),
							(D = Math.sin(C)),
							(I = E * M + P * D),
							($ = X * M + Y * D),
							(P = P * M - E * D),
							(Y = Y * M - X * D),
							(E = I),
							(X = $)),
						g &&
							Math.abs(g) + Math.abs(d) > 359.9 &&
							((g = d = 0), (m = 180 - m)),
						(h = At(Math.sqrt(E * E + P * P + N * N))),
						(_ = At(Math.sqrt(Y * Y + vt * vt))),
						(C = hr(X, Y)),
						(y = Math.abs(C) > 2e-4 ? C * Un : 0),
						(v = it ? 1 / (it < 0 ? -it : it) : 0)),
				n.svg &&
					((I = t.getAttribute("transform")),
					(n.forceCSS = t.setAttribute("transform", "") || !lu(ln(t, St))),
					I && t.setAttribute("transform", I))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(i
					? ((h *= -1), (y += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
					: ((_ *= -1), (y += y <= 0 ? 180 : -180))),
			(e = e || n.uncache),
			(n.x =
				c -
				((n.xPercent =
					c &&
					((!e && n.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
					? (t.offsetWidth * n.xPercent) / 100
					: 0) +
				s),
			(n.y =
				f -
				((n.yPercent =
					f &&
					((!e && n.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
					? (t.offsetHeight * n.yPercent) / 100
					: 0) +
				s),
			(n.z = p + s),
			(n.scaleX = At(h)),
			(n.scaleY = At(_)),
			(n.rotation = At(d) + o),
			(n.rotationX = At(g) + o),
			(n.rotationY = At(m) + o),
			(n.skewX = y + o),
			(n.skewY = w + o),
			(n.transformPerspective = v + s),
			(n.zOrigin = parseFloat(l.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
				(r[we] = Ki(l)),
			(n.xOffset = n.yOffset = 0),
			(n.force3D = Ee.force3D),
			(n.renderTransform = n.svg ? ec : su ? cu : tc),
			(n.uncache = 0),
			n
		);
	},
	Ki = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	_s = function (t, e, n) {
		var r = re(e);
		return At(parseFloat(e) + parseFloat(Nn(t, "x", n + "px", r))) + r;
	},
	tc = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			cu(t, e);
	},
	qn = "0deg",
	Fr = "0px",
	Hn = ") ",
	cu = function (t, e) {
		var n = e || this,
			r = n.xPercent,
			i = n.yPercent,
			s = n.x,
			o = n.y,
			u = n.z,
			l = n.rotation,
			c = n.rotationY,
			f = n.rotationX,
			p = n.skewX,
			h = n.skewY,
			_ = n.scaleX,
			d = n.scaleY,
			g = n.transformPerspective,
			m = n.force3D,
			y = n.target,
			w = n.zOrigin,
			v = "",
			b = (m === "auto" && t && t !== 1) || m === !0;
		if (w && (f !== qn || c !== qn)) {
			var O = parseFloat(c) * br,
				T = Math.sin(O),
				C = Math.cos(O),
				M;
			(O = parseFloat(f) * br),
				(M = Math.cos(O)),
				(s = _s(y, s, T * M * -w)),
				(o = _s(y, o, -Math.sin(O) * -w)),
				(u = _s(y, u, C * M * -w + w));
		}
		g !== Fr && (v += "perspective(" + g + Hn),
			(r || i) && (v += "translate(" + r + "%, " + i + "%) "),
			(b || s !== Fr || o !== Fr || u !== Fr) &&
				(v +=
					u !== Fr || b
						? "translate3d(" + s + ", " + o + ", " + u + ") "
						: "translate(" + s + ", " + o + Hn),
			l !== qn && (v += "rotate(" + l + Hn),
			c !== qn && (v += "rotateY(" + c + Hn),
			f !== qn && (v += "rotateX(" + f + Hn),
			(p !== qn || h !== qn) && (v += "skew(" + p + ", " + h + Hn),
			(_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Hn),
			(y.style[St] = v || "translate(0, 0)");
	},
	ec = function (t, e) {
		var n = e || this,
			r = n.xPercent,
			i = n.yPercent,
			s = n.x,
			o = n.y,
			u = n.rotation,
			l = n.skewX,
			c = n.skewY,
			f = n.scaleX,
			p = n.scaleY,
			h = n.target,
			_ = n.xOrigin,
			d = n.yOrigin,
			g = n.xOffset,
			m = n.yOffset,
			y = n.forceCSS,
			w = parseFloat(s),
			v = parseFloat(o),
			b,
			O,
			T,
			C,
			M;
		(u = parseFloat(u)),
			(l = parseFloat(l)),
			(c = parseFloat(c)),
			c && ((c = parseFloat(c)), (l += c), (u += c)),
			u || l
				? ((u *= br),
					(l *= br),
					(b = Math.cos(u) * f),
					(O = Math.sin(u) * f),
					(T = Math.sin(u - l) * -p),
					(C = Math.cos(u - l) * p),
					l &&
						((c *= br),
						(M = Math.tan(l - c)),
						(M = Math.sqrt(1 + M * M)),
						(T *= M),
						(C *= M),
						c &&
							((M = Math.tan(c)),
							(M = Math.sqrt(1 + M * M)),
							(b *= M),
							(O *= M))),
					(b = At(b)),
					(O = At(O)),
					(T = At(T)),
					(C = At(C)))
				: ((b = f), (C = p), (O = T = 0)),
			((w && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
				((w = Nn(h, "x", s, "px")), (v = Nn(h, "y", o, "px"))),
			(_ || d || g || m) &&
				((w = At(w + _ - (_ * b + d * T) + g)),
				(v = At(v + d - (_ * O + d * C) + m))),
			(r || i) &&
				((M = h.getBBox()),
				(w = At(w + (r / 100) * M.width)),
				(v = At(v + (i / 100) * M.height))),
			(M =
				"matrix(" + b + "," + O + "," + T + "," + C + "," + w + "," + v + ")"),
			h.setAttribute("transform", M),
			y && (h.style[St] = M);
	},
	nc = function (t, e, n, r, i) {
		var s = 360,
			o = Gt(i),
			u = parseFloat(i) * (o && ~i.indexOf("rad") ? Un : 1),
			l = u - r,
			c = r + l + "deg",
			f,
			p;
		return (
			o &&
				((f = i.split("_")[1]),
				f === "short" && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
				f === "cw" && l < 0
					? (l = ((l + s * Fo) % s) - ~~(l / s) * s)
					: f === "ccw" && l > 0 && (l = ((l - s * Fo) % s) - ~~(l / s) * s)),
			(t._pt = p = new xe(t._pt, e, n, r, l, Bl)),
			(p.e = c),
			(p.u = "deg"),
			t._props.push(n),
			p
		);
	},
	Vo = function (t, e) {
		for (var n in e) t[n] = e[n];
		return t;
	},
	rc = function (t, e, n) {
		var r = Vo({}, n._gsap),
			i = "perspective,force3D,transformOrigin,svgOrigin",
			s = n.style,
			o,
			u,
			l,
			c,
			f,
			p,
			h,
			_;
		r.svg
			? ((l = n.getAttribute("transform")),
				n.setAttribute("transform", ""),
				(s[St] = e),
				(o = fi(n, 1)),
				ir(n, St),
				n.setAttribute("transform", l))
			: ((l = getComputedStyle(n)[St]),
				(s[St] = e),
				(o = fi(n, 1)),
				(s[St] = l));
		for (u in bn)
			(l = r[u]),
				(c = o[u]),
				l !== c &&
					i.indexOf(u) < 0 &&
					((h = re(l)),
					(_ = re(c)),
					(f = h !== _ ? Nn(n, u, l, _) : parseFloat(l)),
					(p = parseFloat(c)),
					(t._pt = new xe(t._pt, o, u, f, p - f, Rs)),
					(t._pt.u = _ || 0),
					t._props.push(u));
		Vo(o, r);
	};
ve("padding,margin,Width,Radius", function (a, t) {
	var e = "Top",
		n = "Right",
		r = "Bottom",
		i = "Left",
		s = (t < 3 ? [e, n, r, i] : [e + i, e + n, r + n, r + i]).map(function (o) {
			return t < 2 ? a + o : "border" + o + a;
		});
	ji[t > 1 ? "border" + a : a] = function (o, u, l, c, f) {
		var p, h;
		if (arguments.length < 4)
			return (
				(p = s.map(function (_) {
					return mn(o, _, l);
				})),
				(h = p.join(" ")),
				h.split(p[0]).length === 5 ? p[0] : h
			);
		(p = (c + "").split(" ")),
			(h = {}),
			s.forEach(function (_, d) {
				return (h[_] = p[d] = p[d] || p[((d - 1) / 2) | 0]);
			}),
			o.init(u, h, f);
	};
});
var fu = {
	name: "css",
	register: Fs,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, n, r, i) {
		var s = this._props,
			o = t.style,
			u = n.vars.startAt,
			l,
			c,
			f,
			p,
			h,
			_,
			d,
			g,
			m,
			y,
			w,
			v,
			b,
			O,
			T,
			C;
		uo || Fs(),
			(this.styles = this.styles || iu(t)),
			(C = this.styles.props),
			(this.tween = n);
		for (d in e)
			if (d !== "autoRound" && ((c = e[d]), !(De[d] && Wa(d, e, n, r, t, i)))) {
				if (
					((h = typeof c),
					(_ = ji[d]),
					h === "function" && ((c = c.call(n, r, t, i)), (h = typeof c)),
					h === "string" && ~c.indexOf("random(") && (c = ai(c)),
					_)
				)
					_(this, t, d, c, n) && (T = 1);
				else if (d.substr(0, 2) === "--")
					(l = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
						(c += ""),
						(In.lastIndex = 0),
						In.test(l) || ((g = re(l)), (m = re(c))),
						m ? g !== m && (l = Nn(t, d, l, m) + m) : g && (c += g),
						this.add(o, "setProperty", l, c, r, i, 0, 0, d),
						s.push(d),
						C.push(d, 0, o[d]);
				else if (h !== "undefined") {
					if (
						(u && d in u
							? ((l = typeof u[d] == "function" ? u[d].call(n, r, t, i) : u[d]),
								Gt(l) && ~l.indexOf("random(") && (l = ai(l)),
								re(l + "") ||
									l === "auto" ||
									(l += Ee.units[d] || re(mn(t, d)) || ""),
								(l + "").charAt(1) === "=" && (l = mn(t, d)))
							: (l = mn(t, d)),
						(p = parseFloat(l)),
						(y = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
						y && (c = c.substr(2)),
						(f = parseFloat(c)),
						d in an &&
							(d === "autoAlpha" &&
								(p === 1 && mn(t, "visibility") === "hidden" && f && (p = 0),
								C.push("visibility", 0, o.visibility),
								kn(
									this,
									o,
									"visibility",
									p ? "inherit" : "hidden",
									f ? "inherit" : "hidden",
									!f,
								)),
							d !== "scale" &&
								d !== "transform" &&
								((d = an[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
						(w = d in bn),
						w)
					) {
						if (
							(this.styles.save(d),
							v ||
								((b = t._gsap),
								(b.renderTransform && !e.parseTransform) ||
									fi(t, e.parseTransform),
								(O = e.smoothOrigin !== !1 && b.smooth),
								(v = this._pt =
									new xe(this._pt, o, St, 0, 1, b.renderTransform, b, 0, -1)),
								(v.dep = 1)),
							d === "scale")
						)
							(this._pt = new xe(
								this._pt,
								b,
								"scaleY",
								b.scaleY,
								(y ? xr(b.scaleY, y + f) : f) - b.scaleY || 0,
								Rs,
							)),
								(this._pt.u = 0),
								s.push("scaleY", d),
								(d += "X");
						else if (d === "transformOrigin") {
							C.push(we, 0, o[we]),
								(c = Zl(c)),
								b.svg
									? zs(t, c, 0, O, 0, this)
									: ((m = parseFloat(c.split(" ")[2]) || 0),
										m !== b.zOrigin && kn(this, b, "zOrigin", b.zOrigin, m),
										kn(this, o, d, Ki(l), Ki(c)));
							continue;
						} else if (d === "svgOrigin") {
							zs(t, c, 1, O, 0, this);
							continue;
						} else if (d in uu) {
							nc(this, b, d, p, y ? xr(p, y + c) : c);
							continue;
						} else if (d === "smoothOrigin") {
							kn(this, b, "smooth", b.smooth, c);
							continue;
						} else if (d === "force3D") {
							b[d] = c;
							continue;
						} else if (d === "transform") {
							rc(this, c, t);
							continue;
						}
					} else d in o || (d = kr(d) || d);
					if (w || ((f || f === 0) && (p || p === 0) && !Nl.test(c) && d in o))
						(g = (l + "").substr((p + "").length)),
							f || (f = 0),
							(m = re(c) || (d in Ee.units ? Ee.units[d] : g)),
							g !== m && (p = Nn(t, d, l, m)),
							(this._pt = new xe(
								this._pt,
								w ? b : o,
								d,
								p,
								(y ? xr(p, y + f) : f) - p,
								!w && (m === "px" || d === "zIndex") && e.autoRound !== !1
									? Xl
									: Rs,
							)),
							(this._pt.u = m || 0),
							g !== m && m !== "%" && ((this._pt.b = l), (this._pt.r = Yl));
					else if (d in o) Ql.call(this, t, d, l, y ? y + c : c);
					else if (d in t) this.add(t, d, l || t[d], y ? y + c : c, r, i);
					else if (d !== "parseTransform") {
						Js(d, c);
						continue;
					}
					w || (d in o ? C.push(d, 0, o[d]) : C.push(d, 1, l || t[d])),
						s.push(d);
				}
			}
		T && Ja(this);
	},
	render: function (t, e) {
		if (e.tween._time || !lo())
			for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
		else e.styles.revert();
	},
	get: mn,
	aliases: an,
	getSetter: function (t, e, n) {
		var r = an[e];
		return (
			r && r.indexOf(",") < 0 && (e = r),
			e in bn && e !== we && (t._gsap.x || mn(t, "x"))
				? n && Io === n
					? e === "scale"
						? Ul
						: Hl
					: (Io = n || {}) && (e === "scale" ? $l : Wl)
				: t.style && !Ks(t.style[e])
					? Vl
					: ~e.indexOf("-")
						? ql
						: oo(t, e)
		);
	},
	core: { _removeProperty: ir, _getMatrix: fo },
};
be.utils.checkPrefix = kr;
be.core.getStyleSaver = iu;
(function (a, t, e, n) {
	var r = ve(a + "," + t + "," + e, function (i) {
		bn[i] = 1;
	});
	ve(t, function (i) {
		(Ee.units[i] = "deg"), (uu[i] = 1);
	}),
		(an[r[13]] = a + "," + t),
		ve(n, function (i) {
			var s = i.split(":");
			an[s[1]] = r[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
ve(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		Ee.units[a] = "px";
	},
);
be.registerPlugin(fu);
var ut = be.registerPlugin(fu) || be;
ut.core.Tween;
function qo(a, t) {
	for (var e = 0; e < t.length; e++) {
		var n = t[e];
		(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			"value" in n && (n.writable = !0),
			Object.defineProperty(a, n.key, n);
	}
}
function ic(a, t, e) {
	return t && qo(a.prototype, t), e && qo(a, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qt,
	zi,
	Pe,
	En,
	An,
	Tr,
	hu,
	$n,
	jr,
	du,
	vn,
	We,
	pu,
	_u = function () {
		return (
			Qt ||
			(typeof window < "u" && (Qt = window.gsap) && Qt.registerPlugin && Qt)
		);
	},
	gu = 1,
	vr = [],
	Q = [],
	cn = [],
	Kr = Date.now,
	Ns = function (t, e) {
		return e;
	},
	sc = function () {
		var t = jr.core,
			e = t.bridge || {},
			n = t._scrollers,
			r = t._proxies;
		n.push.apply(n, Q),
			r.push.apply(r, cn),
			(Q = n),
			(cn = r),
			(Ns = function (s, o) {
				return e[s](o);
			});
	},
	Fn = function (t, e) {
		return ~cn.indexOf(t) && cn[cn.indexOf(t) + 1][e];
	},
	Qr = function (t) {
		return !!~du.indexOf(t);
	},
	ue = function (t, e, n, r, i) {
		return t.addEventListener(e, n, { passive: r !== !1, capture: !!i });
	},
	ae = function (t, e, n, r) {
		return t.removeEventListener(e, n, !!r);
	},
	bi = "scrollLeft",
	Ti = "scrollTop",
	Bs = function () {
		return (vn && vn.isPressed) || Q.cache++;
	},
	Qi = function (t, e) {
		var n = function r(i) {
			if (i || i === 0) {
				gu && (Pe.history.scrollRestoration = "manual");
				var s = vn && vn.isPressed;
				(i = r.v = Math.round(i) || (vn && vn.iOS ? 1 : 0)),
					t(i),
					(r.cacheID = Q.cache),
					s && Ns("ss", i);
			} else
				(e || Q.cache !== r.cacheID || Ns("ref")) &&
					((r.cacheID = Q.cache), (r.v = t()));
			return r.v + r.offset;
		};
		return (n.offset = 0), t && n;
	},
	de = {
		s: bi,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: Qi(function (a) {
			return arguments.length
				? Pe.scrollTo(a, Vt.sc())
				: Pe.pageXOffset || En[bi] || An[bi] || Tr[bi] || 0;
		}),
	},
	Vt = {
		s: Ti,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: de,
		sc: Qi(function (a) {
			return arguments.length
				? Pe.scrollTo(de.sc(), a)
				: Pe.pageYOffset || En[Ti] || An[Ti] || Tr[Ti] || 0;
		}),
	},
	me = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || Qt.utils.toArray)(t)[0] ||
			(typeof t == "string" && Qt.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	Bn = function (t, e) {
		var n = e.s,
			r = e.sc;
		Qr(t) && (t = En.scrollingElement || An);
		var i = Q.indexOf(t),
			s = r === Vt.sc ? 1 : 2;
		!~i && (i = Q.push(t) - 1), Q[i + s] || ue(t, "scroll", Bs);
		var o = Q[i + s],
			u =
				o ||
				(Q[i + s] =
					Qi(Fn(t, n), !0) ||
					(Qr(t)
						? r
						: Qi(function (l) {
								return arguments.length ? (t[n] = l) : t[n];
							})));
		return (
			(u.target = t),
			o || (u.smooth = Qt.getProperty(t, "scrollBehavior") === "smooth"),
			u
		);
	},
	Ys = function (t, e, n) {
		var r = t,
			i = t,
			s = Kr(),
			o = s,
			u = e || 50,
			l = Math.max(500, u * 3),
			c = function (_, d) {
				var g = Kr();
				d || g - s > u
					? ((i = r), (r = _), (o = s), (s = g))
					: n
						? (r += _)
						: (r = i + ((_ - i) / (g - o)) * (s - o));
			},
			f = function () {
				(i = r = n ? 0 : r), (o = s = 0);
			},
			p = function (_) {
				var d = o,
					g = i,
					m = Kr();
				return (
					(_ || _ === 0) && _ !== r && c(_),
					s === o || m - o > l
						? 0
						: ((r + (n ? g : -g)) / ((n ? m : s) - d)) * 1e3
				);
			};
		return { update: c, reset: f, getVelocity: p };
	},
	zr = function (t, e) {
		return (
			e && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	Ho = function (t) {
		var e = Math.max.apply(Math, t),
			n = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(n) ? e : n;
	},
	mu = function () {
		(jr = Qt.core.globals().ScrollTrigger), jr && jr.core && sc();
	},
	yu = function (t) {
		return (
			(Qt = t || _u()),
			!zi &&
				Qt &&
				typeof document < "u" &&
				document.body &&
				((Pe = window),
				(En = document),
				(An = En.documentElement),
				(Tr = En.body),
				(du = [Pe, En, An, Tr]),
				Qt.utils.clamp,
				(pu = Qt.core.context || function () {}),
				($n = "onpointerenter" in Tr ? "pointer" : "mouse"),
				(hu = Lt.isTouch =
					Pe.matchMedia &&
					Pe.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in Pe ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(We = Lt.eventTypes =
					(
						"ontouchstart" in An
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in An
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (gu = 0);
				}, 500),
				mu(),
				(zi = 1)),
			zi
		);
	};
de.op = Vt;
Q.cache = 0;
var Lt = (function () {
	function a(e) {
		this.init(e);
	}
	var t = a.prototype;
	return (
		(t.init = function (n) {
			zi || yu(Qt) || console.warn("Please gsap.registerPlugin(Observer)"),
				jr || mu();
			var r = n.tolerance,
				i = n.dragMinimum,
				s = n.type,
				o = n.target,
				u = n.lineHeight,
				l = n.debounce,
				c = n.preventDefault,
				f = n.onStop,
				p = n.onStopDelay,
				h = n.ignore,
				_ = n.wheelSpeed,
				d = n.event,
				g = n.onDragStart,
				m = n.onDragEnd,
				y = n.onDrag,
				w = n.onPress,
				v = n.onRelease,
				b = n.onRight,
				O = n.onLeft,
				T = n.onUp,
				C = n.onDown,
				M = n.onChangeX,
				D = n.onChangeY,
				E = n.onChange,
				P = n.onToggleX,
				N = n.onToggleY,
				F = n.onHover,
				X = n.onHoverEnd,
				Y = n.onMove,
				I = n.ignoreCheck,
				$ = n.isNormalizer,
				J = n.onGestureStart,
				x = n.onGestureEnd,
				Z = n.onWheel,
				Mt = n.onEnable,
				qt = n.onDisable,
				it = n.onClick,
				vt = n.scrollSpeed,
				kt = n.capture,
				rt = n.allowClicks,
				at = n.lockAxis,
				ft = n.onLockAxis;
			(this.target = o = me(o) || An),
				(this.vars = n),
				h && (h = Qt.utils.toArray(h)),
				(r = r || 1e-9),
				(i = i || 0),
				(_ = _ || 1),
				(vt = vt || 1),
				(s = s || "wheel,touch,pointer"),
				(l = l !== !1),
				u || (u = parseFloat(Pe.getComputedStyle(Tr).lineHeight) || 22);
			var Rt,
				W,
				A,
				R,
				q,
				st,
				Ot,
				S = this,
				Dt = 0,
				Bt = 0,
				_e = n.passive || !c,
				_t = Bn(o, de),
				Le = Bn(o, Vt),
				Ke = _t(),
				hn = Le(),
				It =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					We[0] === "pointerdown",
				Ve = Qr(o),
				xt = o.ownerDocument || En,
				oe = [0, 0, 0],
				Ft = [0, 0, 0],
				Te = 0,
				dn = function () {
					return (Te = Kr());
				},
				dt = function (B, ot) {
					return (
						((S.event = B) && h && ~h.indexOf(B.target)) ||
						(ot && It && B.pointerType !== "touch") ||
						(I && I(B, ot))
					);
				},
				cr = function () {
					S._vx.reset(), S._vy.reset(), W.pause(), f && f(S);
				},
				Qe = function () {
					var B = (S.deltaX = Ho(oe)),
						ot = (S.deltaY = Ho(Ft)),
						k = Math.abs(B) >= r,
						U = Math.abs(ot) >= r;
					E && (k || U) && E(S, B, ot, oe, Ft),
						k &&
							(b && S.deltaX > 0 && b(S),
							O && S.deltaX < 0 && O(S),
							M && M(S),
							P && S.deltaX < 0 != Dt < 0 && P(S),
							(Dt = S.deltaX),
							(oe[0] = oe[1] = oe[2] = 0)),
						U &&
							(C && S.deltaY > 0 && C(S),
							T && S.deltaY < 0 && T(S),
							D && D(S),
							N && S.deltaY < 0 != Bt < 0 && N(S),
							(Bt = S.deltaY),
							(Ft[0] = Ft[1] = Ft[2] = 0)),
						(R || A) && (Y && Y(S), A && (y(S), (A = !1)), (R = !1)),
						st && !(st = !1) && ft && ft(S),
						q && (Z(S), (q = !1)),
						(Rt = 0);
				},
				Tn = function (B, ot, k) {
					(oe[k] += B),
						(Ft[k] += ot),
						S._vx.update(B),
						S._vy.update(ot),
						l ? Rt || (Rt = requestAnimationFrame(Qe)) : Qe();
				},
				Sn = function (B, ot) {
					at &&
						!Ot &&
						((S.axis = Ot = Math.abs(B) > Math.abs(ot) ? "x" : "y"), (st = !0)),
						Ot !== "y" && ((oe[2] += B), S._vx.update(B, !0)),
						Ot !== "x" && ((Ft[2] += ot), S._vy.update(ot, !0)),
						l ? Rt || (Rt = requestAnimationFrame(Qe)) : Qe();
				},
				qe = function (B) {
					if (!dt(B, 1)) {
						B = zr(B, c);
						var ot = B.clientX,
							k = B.clientY,
							U = ot - S.x,
							z = k - S.y,
							V = S.isDragging;
						(S.x = ot),
							(S.y = k),
							(V ||
								Math.abs(S.startX - ot) >= i ||
								Math.abs(S.startY - k) >= i) &&
								(y && (A = !0),
								V || (S.isDragging = !0),
								Sn(U, z),
								V || (g && g(S)));
					}
				},
				pn = (S.onPress = function (H) {
					dt(H, 1) ||
						(H && H.button) ||
						((S.axis = Ot = null),
						W.pause(),
						(S.isPressed = !0),
						(H = zr(H)),
						(Dt = Bt = 0),
						(S.startX = S.x = H.clientX),
						(S.startY = S.y = H.clientY),
						S._vx.reset(),
						S._vy.reset(),
						ue($ ? o : xt, We[1], qe, _e, !0),
						(S.deltaX = S.deltaY = 0),
						w && w(S));
				}),
				G = (S.onRelease = function (H) {
					if (!dt(H, 1)) {
						ae($ ? o : xt, We[1], qe, !0);
						var B = !isNaN(S.y - S.startY),
							ot = S.isDragging,
							k =
								ot &&
								(Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
							U = zr(H);
						!k &&
							B &&
							(S._vx.reset(),
							S._vy.reset(),
							c &&
								rt &&
								Qt.delayedCall(0.08, function () {
									if (Kr() - Te > 300 && !H.defaultPrevented) {
										if (H.target.click) H.target.click();
										else if (xt.createEvent) {
											var z = xt.createEvent("MouseEvents");
											z.initMouseEvent(
												"click",
												!0,
												!0,
												Pe,
												1,
												U.screenX,
												U.screenY,
												U.clientX,
												U.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												H.target.dispatchEvent(z);
										}
									}
								})),
							(S.isDragging = S.isGesturing = S.isPressed = !1),
							f && ot && !$ && W.restart(!0),
							m && ot && m(S),
							v && v(S, k);
					}
				}),
				Ze = function (B) {
					return (
						B.touches &&
						B.touches.length > 1 &&
						(S.isGesturing = !0) &&
						J(B, S.isDragging)
					);
				},
				ge = function () {
					return (S.isGesturing = !1) || x(S);
				},
				He = function (B) {
					if (!dt(B)) {
						var ot = _t(),
							k = Le();
						Tn((ot - Ke) * vt, (k - hn) * vt, 1),
							(Ke = ot),
							(hn = k),
							f && W.restart(!0);
					}
				},
				Ue = function (B) {
					if (!dt(B)) {
						(B = zr(B, c)), Z && (q = !0);
						var ot =
							(B.deltaMode === 1 ? u : B.deltaMode === 2 ? Pe.innerHeight : 1) *
							_;
						Tn(B.deltaX * ot, B.deltaY * ot, 0), f && !$ && W.restart(!0);
					}
				},
				Xn = function (B) {
					if (!dt(B)) {
						var ot = B.clientX,
							k = B.clientY,
							U = ot - S.x,
							z = k - S.y;
						(S.x = ot),
							(S.y = k),
							(R = !0),
							f && W.restart(!0),
							(U || z) && Sn(U, z);
					}
				},
				fr = function (B) {
					(S.event = B), F(S);
				},
				_n = function (B) {
					(S.event = B), X(S);
				},
				Ar = function (B) {
					return dt(B) || (zr(B, c) && it(S));
				};
			(W = S._dc = Qt.delayedCall(p || 0.25, cr).pause()),
				(S.deltaX = S.deltaY = 0),
				(S._vx = Ys(0, 50, !0)),
				(S._vy = Ys(0, 50, !0)),
				(S.scrollX = _t),
				(S.scrollY = Le),
				(S.isDragging = S.isGesturing = S.isPressed = !1),
				pu(this),
				(S.enable = function (H) {
					return (
						S.isEnabled ||
							(ue(Ve ? xt : o, "scroll", Bs),
							s.indexOf("scroll") >= 0 && ue(Ve ? xt : o, "scroll", He, _e, kt),
							s.indexOf("wheel") >= 0 && ue(o, "wheel", Ue, _e, kt),
							((s.indexOf("touch") >= 0 && hu) || s.indexOf("pointer") >= 0) &&
								(ue(o, We[0], pn, _e, kt),
								ue(xt, We[2], G),
								ue(xt, We[3], G),
								rt && ue(o, "click", dn, !0, !0),
								it && ue(o, "click", Ar),
								J && ue(xt, "gesturestart", Ze),
								x && ue(xt, "gestureend", ge),
								F && ue(o, $n + "enter", fr),
								X && ue(o, $n + "leave", _n),
								Y && ue(o, $n + "move", Xn)),
							(S.isEnabled = !0),
							H && H.type && pn(H),
							Mt && Mt(S)),
						S
					);
				}),
				(S.disable = function () {
					S.isEnabled &&
						(vr.filter(function (H) {
							return H !== S && Qr(H.target);
						}).length || ae(Ve ? xt : o, "scroll", Bs),
						S.isPressed &&
							(S._vx.reset(), S._vy.reset(), ae($ ? o : xt, We[1], qe, !0)),
						ae(Ve ? xt : o, "scroll", He, kt),
						ae(o, "wheel", Ue, kt),
						ae(o, We[0], pn, kt),
						ae(xt, We[2], G),
						ae(xt, We[3], G),
						ae(o, "click", dn, !0),
						ae(o, "click", Ar),
						ae(xt, "gesturestart", Ze),
						ae(xt, "gestureend", ge),
						ae(o, $n + "enter", fr),
						ae(o, $n + "leave", _n),
						ae(o, $n + "move", Xn),
						(S.isEnabled = S.isPressed = S.isDragging = !1),
						qt && qt(S));
				}),
				(S.kill = S.revert =
					function () {
						S.disable();
						var H = vr.indexOf(S);
						H >= 0 && vr.splice(H, 1), vn === S && (vn = 0);
					}),
				vr.push(S),
				$ && Qr(o) && (vn = S),
				S.enable(d);
		}),
		ic(a, [
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
Lt.version = "3.12.5";
Lt.create = function (a) {
	return new Lt(a);
};
Lt.register = yu;
Lt.getAll = function () {
	return vr.slice();
};
Lt.getById = function (a) {
	return vr.filter(function (t) {
		return t.vars.id === a;
	})[0];
};
_u() && Qt.registerPlugin(Lt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var L,
	_r,
	et,
	bt,
	Ge,
	pt,
	vu,
	Zi,
	hi,
	Zr,
	Xr,
	Si,
	ee,
	ss,
	Xs,
	ce,
	Uo,
	$o,
	gr,
	xu,
	gs,
	wu,
	le,
	Vs,
	bu,
	Tu,
	On,
	qs,
	ho,
	Sr,
	po,
	Ji,
	Hs,
	ms,
	Mi = 1,
	ne = Date.now,
	ys = ne(),
	Ye = 0,
	Vr = 0,
	Wo = function (t, e, n) {
		var r = Oe(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (n["_" + e + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
	},
	Go = function (t, e) {
		return e && (!Oe(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	oc = function a() {
		return Vr && requestAnimationFrame(a);
	},
	jo = function () {
		return (ss = 1);
	},
	Ko = function () {
		return (ss = 0);
	},
	rn = function (t) {
		return t;
	},
	qr = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Su = function () {
		return typeof window < "u";
	},
	Mu = function () {
		return L || (Su() && (L = window.gsap) && L.registerPlugin && L);
	},
	sr = function (t) {
		return !!~vu.indexOf(t);
	},
	Ou = function (t) {
		return (
			(t === "Height" ? po : et["inner" + t]) ||
			Ge["client" + t] ||
			pt["client" + t]
		);
	},
	Du = function (t) {
		return (
			Fn(t, "getBoundingClientRect") ||
			(sr(t)
				? function () {
						return (Vi.width = et.innerWidth), (Vi.height = po), Vi;
					}
				: function () {
						return yn(t);
					})
		);
	},
	ac = function (t, e, n) {
		var r = n.d,
			i = n.d2,
			s = n.a;
		return (s = Fn(t, "getBoundingClientRect"))
			? function () {
					return s()[r];
				}
			: function () {
					return (e ? Ou(i) : t["client" + i]) || 0;
				};
	},
	uc = function (t, e) {
		return !e || ~cn.indexOf(t)
			? Du(t)
			: function () {
					return Vi;
				};
	},
	un = function (t, e) {
		var n = e.s,
			r = e.d2,
			i = e.d,
			s = e.a;
		return Math.max(
			0,
			(n = "scroll" + r) && (s = Fn(t, n))
				? s() - Du(t)()[i]
				: sr(t)
					? (Ge[n] || pt[n]) - Ou(r)
					: t[n] - t["offset" + r],
		);
	},
	Oi = function (t, e) {
		for (var n = 0; n < gr.length; n += 3)
			(!e || ~e.indexOf(gr[n + 1])) && t(gr[n], gr[n + 1], gr[n + 2]);
	},
	Oe = function (t) {
		return typeof t == "string";
	},
	pe = function (t) {
		return typeof t == "function";
	},
	Hr = function (t) {
		return typeof t == "number";
	},
	Wn = function (t) {
		return typeof t == "object";
	},
	Nr = function (t, e, n) {
		return t && t.progress(e ? 0 : 1) && n && t.pause();
	},
	vs = function (t, e) {
		if (t.enabled) {
			var n = t._ctx
				? t._ctx.add(function () {
						return e(t);
					})
				: e(t);
			n && n.totalTime && (t.callbackAnimation = n);
		}
	},
	dr = Math.abs,
	Cu = "left",
	Pu = "top",
	_o = "right",
	go = "bottom",
	tr = "width",
	er = "height",
	Jr = "Right",
	ti = "Left",
	ei = "Top",
	ni = "Bottom",
	zt = "padding",
	Fe = "margin",
	Er = "Width",
	mo = "Height",
	Xt = "px",
	ze = function (t) {
		return et.getComputedStyle(t);
	},
	lc = function (t) {
		var e = ze(t).position;
		t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
	},
	Qo = function (t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t;
	},
	yn = function (t, e) {
		var n =
				e &&
				ze(t)[Xs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				L.to(t, {
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
			r = t.getBoundingClientRect();
		return n && n.progress(0).kill(), r;
	},
	ts = function (t, e) {
		var n = e.d2;
		return t["offset" + n] || t["client" + n] || 0;
	},
	ku = function (t) {
		var e = [],
			n = t.labels,
			r = t.duration(),
			i;
		for (i in n) e.push(n[i] / r);
		return e;
	},
	cc = function (t) {
		return function (e) {
			return L.utils.snap(ku(t), e);
		};
	},
	yo = function (t) {
		var e = L.utils.snap(t),
			n =
				Array.isArray(t) &&
				t.slice(0).sort(function (r, i) {
					return r - i;
				});
		return n
			? function (r, i, s) {
					s === void 0 && (s = 0.001);
					var o;
					if (!i) return e(r);
					if (i > 0) {
						for (r -= s, o = 0; o < n.length; o++) if (n[o] >= r) return n[o];
						return n[o - 1];
					} else for (o = n.length, r += s; o--; ) if (n[o] <= r) return n[o];
					return n[0];
				}
			: function (r, i, s) {
					s === void 0 && (s = 0.001);
					var o = e(r);
					return !i || Math.abs(o - r) < s || o - r < 0 == i < 0
						? o
						: e(i < 0 ? r - t : r + t);
				};
	},
	fc = function (t) {
		return function (e, n) {
			return yo(ku(t))(e, n.direction);
		};
	},
	Di = function (t, e, n, r) {
		return n.split(",").forEach(function (i) {
			return t(e, i, r);
		});
	},
	$t = function (t, e, n, r, i) {
		return t.addEventListener(e, n, { passive: !r, capture: !!i });
	},
	Ut = function (t, e, n, r) {
		return t.removeEventListener(e, n, !!r);
	},
	Ci = function (t, e, n) {
		(n = n && n.wheelHandler), n && (t(e, "wheel", n), t(e, "touchmove", n));
	},
	Zo = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	Pi = { toggleActions: "play", anticipatePin: 0 },
	es = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Ni = function (t, e) {
		if (Oe(t)) {
			var n = t.indexOf("="),
				r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
			~n && (t.indexOf("%") > n && (r *= e / 100), (t = t.substr(0, n - 1))),
				(t =
					r +
					(t in es
						? es[t] * e
						: ~t.indexOf("%")
							? (parseFloat(t) * e) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	ki = function (t, e, n, r, i, s, o, u) {
		var l = i.startColor,
			c = i.endColor,
			f = i.fontSize,
			p = i.indent,
			h = i.fontWeight,
			_ = bt.createElement("div"),
			d = sr(n) || Fn(n, "pinType") === "fixed",
			g = t.indexOf("scroller") !== -1,
			m = d ? pt : n,
			y = t.indexOf("start") !== -1,
			w = y ? l : c,
			v =
				"border-color:" +
				w +
				";font-size:" +
				f +
				";color:" +
				w +
				";font-weight:" +
				h +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(v += "position:" + ((g || u) && d ? "fixed;" : "absolute;")),
			(g || u || !d) &&
				(v += (r === Vt ? _o : go) + ":" + (s + parseFloat(p)) + "px;"),
			o &&
				(v +=
					"box-sizing:border-box;text-align:left;width:" +
					o.offsetWidth +
					"px;"),
			(_._isStart = y),
			_.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
			(_.style.cssText = v),
			(_.innerText = e || e === 0 ? t + "-" + e : t),
			m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_),
			(_._offset = _["offset" + r.op.d2]),
			Bi(_, 0, r, y),
			_
		);
	},
	Bi = function (t, e, n, r) {
		var i = { display: "block" },
			s = n[r ? "os2" : "p2"],
			o = n[r ? "p2" : "os2"];
		(t._isFlipped = r),
			(i[n.a + "Percent"] = r ? -100 : 0),
			(i[n.a] = r ? "1px" : 0),
			(i["border" + s + Er] = 1),
			(i["border" + o + Er] = 0),
			(i[n.p] = e + "px"),
			L.set(t, i);
	},
	K = [],
	Us = {},
	di,
	Jo = function () {
		return ne() - Ye > 34 && (di || (di = requestAnimationFrame(xn)));
	},
	pr = function () {
		(!le || !le.isPressed || le.startX > pt.clientWidth) &&
			(Q.cache++,
			le ? di || (di = requestAnimationFrame(xn)) : xn(),
			Ye || ar("scrollStart"),
			(Ye = ne()));
	},
	xs = function () {
		(Tu = et.innerWidth), (bu = et.innerHeight);
	},
	Ur = function () {
		Q.cache++,
			!ee &&
				!wu &&
				!bt.fullscreenElement &&
				!bt.webkitFullscreenElement &&
				(!Vs ||
					Tu !== et.innerWidth ||
					Math.abs(et.innerHeight - bu) > et.innerHeight * 0.25) &&
				Zi.restart(!0);
	},
	or = {},
	hc = [],
	Eu = function a() {
		return Ut(j, "scrollEnd", a) || jn(!0);
	},
	ar = function (t) {
		return (
			(or[t] &&
				or[t].map(function (e) {
					return e();
				})) ||
			hc
		);
	},
	Me = [],
	Au = function (t) {
		for (var e = 0; e < Me.length; e += 5)
			(!t || (Me[e + 4] && Me[e + 4].query === t)) &&
				((Me[e].style.cssText = Me[e + 1]),
				Me[e].getBBox && Me[e].setAttribute("transform", Me[e + 2] || ""),
				(Me[e + 3].uncache = 1));
	},
	vo = function (t, e) {
		var n;
		for (ce = 0; ce < K.length; ce++)
			(n = K[ce]),
				n && (!e || n._ctx === e) && (t ? n.kill(1) : n.revert(!0, !0));
		(Ji = !0), e && Au(e), e || ar("revert");
	},
	Lu = function (t, e) {
		Q.cache++,
			(e || !fe) &&
				Q.forEach(function (n) {
					return pe(n) && n.cacheID++ && (n.rec = 0);
				}),
			Oe(t) && (et.history.scrollRestoration = ho = t);
	},
	fe,
	nr = 0,
	ta,
	dc = function () {
		if (ta !== nr) {
			var t = (ta = nr);
			requestAnimationFrame(function () {
				return t === nr && jn(!0);
			});
		}
	},
	Ru = function () {
		pt.appendChild(Sr),
			(po = (!le && Sr.offsetHeight) || et.innerHeight),
			pt.removeChild(Sr);
	},
	ea = function (t) {
		return hi(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	jn = function (t, e) {
		if (Ye && !t && !Ji) {
			$t(j, "scrollEnd", Eu);
			return;
		}
		Ru(),
			(fe = j.isRefreshing = !0),
			Q.forEach(function (r) {
				return pe(r) && ++r.cacheID && (r.rec = r());
			});
		var n = ar("refreshInit");
		xu && j.sort(),
			e || vo(),
			Q.forEach(function (r) {
				pe(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
			}),
			K.slice(0).forEach(function (r) {
				return r.refresh();
			}),
			(Ji = !1),
			K.forEach(function (r) {
				if (r._subPinOffset && r.pin) {
					var i = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
						s = r.pin[i];
					r.revert(!0, 1), r.adjustPinSpacing(r.pin[i] - s), r.refresh();
				}
			}),
			(Hs = 1),
			ea(!0),
			K.forEach(function (r) {
				var i = un(r.scroller, r._dir),
					s = r.vars.end === "max" || (r._endClamp && r.end > i),
					o = r._startClamp && r.start >= i;
				(s || o) &&
					r.setPositions(
						o ? i - 1 : r.start,
						s ? Math.max(o ? i : r.start + 1, i) : r.end,
						!0,
					);
			}),
			ea(!1),
			(Hs = 0),
			n.forEach(function (r) {
				return r && r.render && r.render(-1);
			}),
			Q.forEach(function (r) {
				pe(r) &&
					(r.smooth &&
						requestAnimationFrame(function () {
							return (r.target.style.scrollBehavior = "smooth");
						}),
					r.rec && r(r.rec));
			}),
			Lu(ho, 1),
			Zi.pause(),
			nr++,
			(fe = 2),
			xn(2),
			K.forEach(function (r) {
				return pe(r.vars.onRefresh) && r.vars.onRefresh(r);
			}),
			(fe = j.isRefreshing = !1),
			ar("refresh");
	},
	$s = 0,
	Yi = 1,
	ri,
	xn = function (t) {
		if (t === 2 || (!fe && !Ji)) {
			(j.isUpdating = !0), ri && ri.update(0);
			var e = K.length,
				n = ne(),
				r = n - ys >= 50,
				i = e && K[0].scroll();
			if (
				((Yi = $s > i ? -1 : 1),
				fe || ($s = i),
				r &&
					(Ye && !ss && n - Ye > 200 && ((Ye = 0), ar("scrollEnd")),
					(Xr = ys),
					(ys = n)),
				Yi < 0)
			) {
				for (ce = e; ce-- > 0; ) K[ce] && K[ce].update(0, r);
				Yi = 1;
			} else for (ce = 0; ce < e; ce++) K[ce] && K[ce].update(0, r);
			j.isUpdating = !1;
		}
		di = 0;
	},
	Ws = [
		Cu,
		Pu,
		go,
		_o,
		Fe + ni,
		Fe + Jr,
		Fe + ei,
		Fe + ti,
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
	Xi = Ws.concat([
		tr,
		er,
		"boxSizing",
		"max" + Er,
		"max" + mo,
		"position",
		Fe,
		zt,
		zt + ei,
		zt + Jr,
		zt + ni,
		zt + ti,
	]),
	pc = function (t, e, n) {
		Mr(n);
		var r = t._gsap;
		if (r.spacerIsNative) Mr(r.spacerState);
		else if (t._gsap.swappedIn) {
			var i = e.parentNode;
			i && (i.insertBefore(t, e), i.removeChild(e));
		}
		t._gsap.swappedIn = !1;
	},
	ws = function (t, e, n, r) {
		if (!t._gsap.swappedIn) {
			for (var i = Ws.length, s = e.style, o = t.style, u; i--; )
				(u = Ws[i]), (s[u] = n[u]);
			(s.position = n.position === "absolute" ? "absolute" : "relative"),
				n.display === "inline" && (s.display = "inline-block"),
				(o[go] = o[_o] = "auto"),
				(s.flexBasis = n.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[tr] = ts(t, de) + Xt),
				(s[er] = ts(t, Vt) + Xt),
				(s[zt] = o[Fe] = o[Pu] = o[Cu] = "0"),
				Mr(r),
				(o[tr] = o["max" + Er] = n[tr]),
				(o[er] = o["max" + mo] = n[er]),
				(o[zt] = n[zt]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	_c = /([A-Z])/g,
	Mr = function (t) {
		if (t) {
			var e = t.t.style,
				n = t.length,
				r = 0,
				i,
				s;
			for ((t.t._gsap || L.core.getCache(t.t)).uncache = 1; r < n; r += 2)
				(s = t[r + 1]),
					(i = t[r]),
					s
						? (e[i] = s)
						: e[i] && e.removeProperty(i.replace(_c, "-$1").toLowerCase());
		}
	},
	Ei = function (t) {
		for (var e = Xi.length, n = t.style, r = [], i = 0; i < e; i++)
			r.push(Xi[i], n[Xi[i]]);
		return (r.t = t), r;
	},
	gc = function (t, e, n) {
		for (var r = [], i = t.length, s = n ? 8 : 0, o; s < i; s += 2)
			(o = t[s]), r.push(o, o in e ? e[o] : t[s + 1]);
		return (r.t = t.t), r;
	},
	Vi = { left: 0, top: 0 },
	na = function (t, e, n, r, i, s, o, u, l, c, f, p, h, _) {
		pe(t) && (t = t(u)),
			Oe(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? Ni("0" + t.substr(3), n) : 0));
		var d = h ? h.time() : 0,
			g,
			m,
			y;
		if ((h && h.seek(0), isNaN(t) || (t = +t), Hr(t)))
			h &&
				(t = L.utils.mapRange(
					h.scrollTrigger.start,
					h.scrollTrigger.end,
					0,
					p,
					t,
				)),
				o && Bi(o, n, r, !0);
		else {
			pe(e) && (e = e(u));
			var w = (t || "0").split(" "),
				v,
				b,
				O,
				T;
			(y = me(e, u) || pt),
				(v = yn(y) || {}),
				(!v || (!v.left && !v.top)) &&
					ze(y).display === "none" &&
					((T = y.style.display),
					(y.style.display = "block"),
					(v = yn(y)),
					T ? (y.style.display = T) : y.style.removeProperty("display")),
				(b = Ni(w[0], v[r.d])),
				(O = Ni(w[1] || "0", n)),
				(t = v[r.p] - l[r.p] - c + b + i - O),
				o && Bi(o, O, r, n - O < 20 || (o._isStart && O > 20)),
				(n -= n - O);
		}
		if ((_ && ((u[_] = t || -0.001), t < 0 && (t = 0)), s)) {
			var C = t + n,
				M = s._isStart;
			(g = "scroll" + r.d2),
				Bi(
					s,
					C,
					r,
					(M && C > 20) ||
						(!M && (f ? Math.max(pt[g], Ge[g]) : s.parentNode[g]) <= C + 1),
				),
				f &&
					((l = yn(o)),
					f && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + Xt));
		}
		return (
			h &&
				y &&
				((g = yn(y)),
				h.seek(p),
				(m = yn(y)),
				(h._caScrollDist = g[r.p] - m[r.p]),
				(t = (t / h._caScrollDist) * p)),
			h && h.seek(d),
			h ? t : Math.round(t)
		);
	},
	mc = /(webkit|moz|length|cssText|inset)/i,
	ra = function (t, e, n, r) {
		if (t.parentNode !== e) {
			var i = t.style,
				s,
				o;
			if (e === pt) {
				(t._stOrig = i.cssText), (o = ze(t));
				for (s in o)
					!+s &&
						!mc.test(s) &&
						o[s] &&
						typeof i[s] == "string" &&
						s !== "0" &&
						(i[s] = o[s]);
				(i.top = n), (i.left = r);
			} else i.cssText = t._stOrig;
			(L.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	Iu = function (t, e, n) {
		var r = e,
			i = r;
		return function (s) {
			var o = Math.round(t());
			return (
				o !== r &&
					o !== i &&
					Math.abs(o - r) > 3 &&
					Math.abs(o - i) > 3 &&
					((s = o), n && n()),
				(i = r),
				(r = s),
				s
			);
		};
	},
	Ai = function (t, e, n) {
		var r = {};
		(r[e.p] = "+=" + n), L.set(t, r);
	},
	ia = function (t, e) {
		var n = Bn(t, e),
			r = "_scroll" + e.p2,
			i = function s(o, u, l, c, f) {
				var p = s.tween,
					h = u.onComplete,
					_ = {};
				l = l || n();
				var d = Iu(n, l, function () {
					p.kill(), (s.tween = 0);
				});
				return (
					(f = (c && f) || 0),
					(c = c || o - l),
					p && p.kill(),
					(u[r] = o),
					(u.inherit = !1),
					(u.modifiers = _),
					(_[r] = function () {
						return d(l + c * p.ratio + f * p.ratio * p.ratio);
					}),
					(u.onUpdate = function () {
						Q.cache++, s.tween && xn();
					}),
					(u.onComplete = function () {
						(s.tween = 0), h && h.call(p);
					}),
					(p = s.tween = L.to(t, u)),
					p
				);
			};
		return (
			(t[r] = n),
			(n.wheelHandler = function () {
				return i.tween && i.tween.kill() && (i.tween = 0);
			}),
			$t(t, "wheel", n.wheelHandler),
			j.isTouch && $t(t, "touchmove", n.wheelHandler),
			i
		);
	},
	j = (function () {
		function a(e, n) {
			_r ||
				a.register(L) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				qs(this),
				this.init(e, n);
		}
		var t = a.prototype;
		return (
			(t.init = function (n, r) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Vr)
				) {
					this.update = this.refresh = this.kill = rn;
					return;
				}
				n = Qo(Oe(n) || Hr(n) || n.nodeType ? { trigger: n } : n, Pi);
				var i = n,
					s = i.onUpdate,
					o = i.toggleClass,
					u = i.id,
					l = i.onToggle,
					c = i.onRefresh,
					f = i.scrub,
					p = i.trigger,
					h = i.pin,
					_ = i.pinSpacing,
					d = i.invalidateOnRefresh,
					g = i.anticipatePin,
					m = i.onScrubComplete,
					y = i.onSnapComplete,
					w = i.once,
					v = i.snap,
					b = i.pinReparent,
					O = i.pinSpacer,
					T = i.containerAnimation,
					C = i.fastScrollEnd,
					M = i.preventOverlaps,
					D =
						n.horizontal || (n.containerAnimation && n.horizontal !== !1)
							? de
							: Vt,
					E = !f && f !== 0,
					P = me(n.scroller || et),
					N = L.core.getCache(P),
					F = sr(P),
					X =
						("pinType" in n
							? n.pinType
							: Fn(P, "pinType") || (F && "fixed")) === "fixed",
					Y = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
					I = E && n.toggleActions.split(" "),
					$ = "markers" in n ? n.markers : Pi.markers,
					J = F ? 0 : parseFloat(ze(P)["border" + D.p2 + Er]) || 0,
					x = this,
					Z =
						n.onRefreshInit &&
						function () {
							return n.onRefreshInit(x);
						},
					Mt = ac(P, F, D),
					qt = uc(P, F),
					it = 0,
					vt = 0,
					kt = 0,
					rt = Bn(P, D),
					at,
					ft,
					Rt,
					W,
					A,
					R,
					q,
					st,
					Ot,
					S,
					Dt,
					Bt,
					_e,
					_t,
					Le,
					Ke,
					hn,
					It,
					Ve,
					xt,
					oe,
					Ft,
					Te,
					dn,
					dt,
					cr,
					Qe,
					Tn,
					Sn,
					qe,
					pn,
					G,
					Ze,
					ge,
					He,
					Ue,
					Xn,
					fr,
					_n;
				if (
					((x._startClamp = x._endClamp = !1),
					(x._dir = D),
					(g *= 45),
					(x.scroller = P),
					(x.scroll = T ? T.time.bind(T) : rt),
					(W = rt()),
					(x.vars = n),
					(r = r || n.animation),
					"refreshPriority" in n &&
						((xu = 1), n.refreshPriority === -9999 && (ri = x)),
					(N.tweenScroll = N.tweenScroll || {
						top: ia(P, Vt),
						left: ia(P, de),
					}),
					(x.tweenTo = at = N.tweenScroll[D.p]),
					(x.scrubDuration = function (k) {
						(Ze = Hr(k) && k),
							Ze
								? G
									? G.duration(k)
									: (G = L.to(r, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: Ze,
											paused: !0,
											onComplete: function () {
												return m && m(x);
											},
										}))
								: (G && G.progress(1).kill(), (G = 0));
					}),
					r &&
						((r.vars.lazy = !1),
						(r._initted && !x.isReverted) ||
							(r.vars.immediateRender !== !1 &&
								n.immediateRender !== !1 &&
								r.duration() &&
								r.render(0, !0, !0)),
						(x.animation = r.pause()),
						(r.scrollTrigger = x),
						x.scrubDuration(f),
						(qe = 0),
						u || (u = r.vars.id)),
					v &&
						((!Wn(v) || v.push) && (v = { snapTo: v }),
						"scrollBehavior" in pt.style &&
							L.set(F ? [pt, Ge] : P, { scrollBehavior: "auto" }),
						Q.forEach(function (k) {
							return (
								pe(k) &&
								k.target === (F ? bt.scrollingElement || Ge : P) &&
								(k.smooth = !1)
							);
						}),
						(Rt = pe(v.snapTo)
							? v.snapTo
							: v.snapTo === "labels"
								? cc(r)
								: v.snapTo === "labelsDirectional"
									? fc(r)
									: v.directional !== !1
										? function (k, U) {
												return yo(v.snapTo)(
													k,
													ne() - vt < 500 ? 0 : U.direction,
												);
											}
										: L.utils.snap(v.snapTo)),
						(ge = v.duration || { min: 0.1, max: 2 }),
						(ge = Wn(ge) ? Zr(ge.min, ge.max) : Zr(ge, ge)),
						(He = L.delayedCall(v.delay || Ze / 2 || 0.1, function () {
							var k = rt(),
								U = ne() - vt < 500,
								z = at.tween;
							if (
								(U || Math.abs(x.getVelocity()) < 10) &&
								!z &&
								!ss &&
								it !== k
							) {
								var V = (k - R) / _t,
									Ht = r && !E ? r.totalProgress() : V,
									tt = U ? 0 : ((Ht - pn) / (ne() - Xr)) * 1e3 || 0,
									Et = L.utils.clamp(-V, 1 - V, (dr(tt / 2) * tt) / 0.185),
									Zt = V + (v.inertia === !1 ? 0 : Et),
									Ct,
									gt,
									lt = v,
									$e = lt.onStart,
									wt = lt.onInterrupt,
									Se = lt.onComplete;
								if (
									((Ct = Rt(Zt, x)),
									Hr(Ct) || (Ct = Zt),
									(gt = Math.round(R + Ct * _t)),
									k <= q && k >= R && gt !== k)
								) {
									if (z && !z._initted && z.data <= dr(gt - k)) return;
									v.inertia === !1 && (Et = Ct - V),
										at(
											gt,
											{
												duration: ge(
													dr(
														(Math.max(dr(Zt - Ht), dr(Ct - Ht)) * 0.185) /
															tt /
															0.05 || 0,
													),
												),
												ease: v.ease || "power3",
												data: dr(gt - k),
												onInterrupt: function () {
													return He.restart(!0) && wt && wt(x);
												},
												onComplete: function () {
													x.update(),
														(it = rt()),
														r &&
															(G
																? G.resetTo(
																		"totalProgress",
																		Ct,
																		r._tTime / r._tDur,
																	)
																: r.progress(Ct)),
														(qe = pn =
															r && !E ? r.totalProgress() : x.progress),
														y && y(x),
														Se && Se(x);
												},
											},
											k,
											Et * _t,
											gt - k - Et * _t,
										),
										$e && $e(x, at.tween);
								}
							} else x.isActive && it !== k && He.restart(!0);
						}).pause())),
					u && (Us[u] = x),
					(p = x.trigger = me(p || (h !== !0 && h))),
					(_n = p && p._gsap && p._gsap.stRevert),
					_n && (_n = _n(x)),
					(h = h === !0 ? p : me(h)),
					Oe(o) && (o = { targets: p, className: o }),
					h &&
						(_ === !1 ||
							_ === Fe ||
							(_ =
								!_ &&
								h.parentNode &&
								h.parentNode.style &&
								ze(h.parentNode).display === "flex"
									? !1
									: zt),
						(x.pin = h),
						(ft = L.core.getCache(h)),
						ft.spacer
							? (Le = ft.pinState)
							: (O &&
									((O = me(O)),
									O && !O.nodeType && (O = O.current || O.nativeElement),
									(ft.spacerIsNative = !!O),
									O && (ft.spacerState = Ei(O))),
								(ft.spacer = It = O || bt.createElement("div")),
								It.classList.add("pin-spacer"),
								u && It.classList.add("pin-spacer-" + u),
								(ft.pinState = Le = Ei(h))),
						n.force3D !== !1 && L.set(h, { force3D: !0 }),
						(x.spacer = It = ft.spacer),
						(Sn = ze(h)),
						(dn = Sn[_ + D.os2]),
						(xt = L.getProperty(h)),
						(oe = L.quickSetter(h, D.a, Xt)),
						ws(h, It, Sn),
						(hn = Ei(h))),
					$)
				) {
					(Bt = Wn($) ? Qo($, Zo) : Zo),
						(S = ki("scroller-start", u, P, D, Bt, 0)),
						(Dt = ki("scroller-end", u, P, D, Bt, 0, S)),
						(Ve = S["offset" + D.op.d2]);
					var Ar = me(Fn(P, "content") || P);
					(st = this.markerStart = ki("start", u, Ar, D, Bt, Ve, 0, T)),
						(Ot = this.markerEnd = ki("end", u, Ar, D, Bt, Ve, 0, T)),
						T && (fr = L.quickSetter([st, Ot], D.a, Xt)),
						!X &&
							!(cn.length && Fn(P, "fixedMarkers") === !0) &&
							(lc(F ? pt : P),
							L.set([S, Dt], { force3D: !0 }),
							(cr = L.quickSetter(S, D.a, Xt)),
							(Tn = L.quickSetter(Dt, D.a, Xt)));
				}
				if (T) {
					var H = T.vars.onUpdate,
						B = T.vars.onUpdateParams;
					T.eventCallback("onUpdate", function () {
						x.update(0, 0, 1), H && H.apply(T, B || []);
					});
				}
				if (
					((x.previous = function () {
						return K[K.indexOf(x) - 1];
					}),
					(x.next = function () {
						return K[K.indexOf(x) + 1];
					}),
					(x.revert = function (k, U) {
						if (!U) return x.kill(!0);
						var z = k !== !1 || !x.enabled,
							V = ee;
						z !== x.isReverted &&
							(z &&
								((Ue = Math.max(rt(), x.scroll.rec || 0)),
								(kt = x.progress),
								(Xn = r && r.progress())),
							st &&
								[st, Ot, S, Dt].forEach(function (Ht) {
									return (Ht.style.display = z ? "none" : "block");
								}),
							z && ((ee = x), x.update(z)),
							h &&
								(!b || !x.isActive) &&
								(z ? pc(h, It, Le) : ws(h, It, ze(h), dt)),
							z || x.update(z),
							(ee = V),
							(x.isReverted = z));
					}),
					(x.refresh = function (k, U, z, V) {
						if (!((ee || !x.enabled) && !U)) {
							if (h && k && Ye) {
								$t(a, "scrollEnd", Eu);
								return;
							}
							!fe && Z && Z(x),
								(ee = x),
								at.tween && !z && (at.tween.kill(), (at.tween = 0)),
								G && G.pause(),
								d && r && r.revert({ kill: !1 }).invalidate(),
								x.isReverted || x.revert(!0, !0),
								(x._subPinOffset = !1);
							var Ht = Mt(),
								tt = qt(),
								Et = T ? T.duration() : un(P, D),
								Zt = _t <= 0.01,
								Ct = 0,
								gt = V || 0,
								lt = Wn(z) ? z.end : n.end,
								$e = n.endTrigger || p,
								wt = Wn(z)
									? z.start
									: n.start || (n.start === 0 || !p ? 0 : h ? "0 0" : "0 100%"),
								Se = (x.pinnedContainer =
									n.pinnedContainer && me(n.pinnedContainer, x)),
								Je = (p && Math.max(0, K.indexOf(x))) || 0,
								jt = Je,
								Kt,
								Jt,
								Vn,
								vi,
								te,
								Yt,
								tn,
								os,
								Oo,
								Lr,
								en,
								Rr,
								xi;
							for (
								$ &&
								Wn(z) &&
								((Rr = L.getProperty(S, D.p)), (xi = L.getProperty(Dt, D.p)));
								jt--;

							)
								(Yt = K[jt]),
									Yt.end || Yt.refresh(0, 1) || (ee = x),
									(tn = Yt.pin),
									tn &&
										(tn === p || tn === h || tn === Se) &&
										!Yt.isReverted &&
										(Lr || (Lr = []), Lr.unshift(Yt), Yt.revert(!0, !0)),
									Yt !== K[jt] && (Je--, jt--);
							for (
								pe(wt) && (wt = wt(x)),
									wt = Wo(wt, "start", x),
									R =
										na(
											wt,
											p,
											Ht,
											D,
											rt(),
											st,
											S,
											x,
											tt,
											J,
											X,
											Et,
											T,
											x._startClamp && "_startClamp",
										) || (h ? -0.001 : 0),
									pe(lt) && (lt = lt(x)),
									Oe(lt) &&
										!lt.indexOf("+=") &&
										(~lt.indexOf(" ")
											? (lt = (Oe(wt) ? wt.split(" ")[0] : "") + lt)
											: ((Ct = Ni(lt.substr(2), Ht)),
												(lt = Oe(wt)
													? wt
													: (T
															? L.utils.mapRange(
																	0,
																	T.duration(),
																	T.scrollTrigger.start,
																	T.scrollTrigger.end,
																	R,
																)
															: R) + Ct),
												($e = p))),
									lt = Wo(lt, "end", x),
									q =
										Math.max(
											R,
											na(
												lt || ($e ? "100% 0" : Et),
												$e,
												Ht,
												D,
												rt() + Ct,
												Ot,
												Dt,
												x,
												tt,
												J,
												X,
												Et,
												T,
												x._endClamp && "_endClamp",
											),
										) || -0.001,
									Ct = 0,
									jt = Je;
								jt--;

							)
								(Yt = K[jt]),
									(tn = Yt.pin),
									tn &&
										Yt.start - Yt._pinPush <= R &&
										!T &&
										Yt.end > 0 &&
										((Kt =
											Yt.end -
											(x._startClamp ? Math.max(0, Yt.start) : Yt.start)),
										((tn === p && Yt.start - Yt._pinPush < R) || tn === Se) &&
											isNaN(wt) &&
											(Ct += Kt * (1 - Yt.progress)),
										tn === h && (gt += Kt));
							if (
								((R += Ct),
								(q += Ct),
								x._startClamp && (x._startClamp += Ct),
								x._endClamp &&
									!fe &&
									((x._endClamp = q || -0.001), (q = Math.min(q, un(P, D)))),
								(_t = q - R || ((R -= 0.01) && 0.001)),
								Zt && (kt = L.utils.clamp(0, 1, L.utils.normalize(R, q, Ue))),
								(x._pinPush = gt),
								st &&
									Ct &&
									((Kt = {}),
									(Kt[D.a] = "+=" + Ct),
									Se && (Kt[D.p] = "-=" + rt()),
									L.set([st, Ot], Kt)),
								h && !(Hs && x.end >= un(P, D)))
							)
								(Kt = ze(h)),
									(vi = D === Vt),
									(Vn = rt()),
									(Ft = parseFloat(xt(D.a)) + gt),
									!Et &&
										q > 1 &&
										((en = (F ? bt.scrollingElement || Ge : P).style),
										(en = {
											style: en,
											value: en["overflow" + D.a.toUpperCase()],
										}),
										F &&
											ze(pt)["overflow" + D.a.toUpperCase()] !== "scroll" &&
											(en.style["overflow" + D.a.toUpperCase()] = "scroll")),
									ws(h, It, Kt),
									(hn = Ei(h)),
									(Jt = yn(h, !0)),
									(os = X && Bn(P, vi ? de : Vt)()),
									_
										? ((dt = [_ + D.os2, _t + gt + Xt]),
											(dt.t = It),
											(jt = _ === zt ? ts(h, D) + _t + gt : 0),
											jt &&
												(dt.push(D.d, jt + Xt),
												It.style.flexBasis !== "auto" &&
													(It.style.flexBasis = jt + Xt)),
											Mr(dt),
											Se &&
												K.forEach(function (Ir) {
													Ir.pin === Se &&
														Ir.vars.pinSpacing !== !1 &&
														(Ir._subPinOffset = !0);
												}),
											X && rt(Ue))
										: ((jt = ts(h, D)),
											jt &&
												It.style.flexBasis !== "auto" &&
												(It.style.flexBasis = jt + Xt)),
									X &&
										((te = {
											top: Jt.top + (vi ? Vn - R : os) + Xt,
											left: Jt.left + (vi ? os : Vn - R) + Xt,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(te[tr] = te["max" + Er] = Math.ceil(Jt.width) + Xt),
										(te[er] = te["max" + mo] = Math.ceil(Jt.height) + Xt),
										(te[Fe] =
											te[Fe + ei] =
											te[Fe + Jr] =
											te[Fe + ni] =
											te[Fe + ti] =
												"0"),
										(te[zt] = Kt[zt]),
										(te[zt + ei] = Kt[zt + ei]),
										(te[zt + Jr] = Kt[zt + Jr]),
										(te[zt + ni] = Kt[zt + ni]),
										(te[zt + ti] = Kt[zt + ti]),
										(Ke = gc(Le, te, b)),
										fe && rt(0)),
									r
										? ((Oo = r._initted),
											gs(1),
											r.render(r.duration(), !0, !0),
											(Te = xt(D.a) - Ft + _t + gt),
											(Qe = Math.abs(_t - Te) > 1),
											X && Qe && Ke.splice(Ke.length - 2, 2),
											r.render(0, !0, !0),
											Oo || r.invalidate(!0),
											r.parent || r.totalTime(r.totalTime()),
											gs(0))
										: (Te = _t),
									en &&
										(en.value
											? (en.style["overflow" + D.a.toUpperCase()] = en.value)
											: en.style.removeProperty("overflow-" + D.a));
							else if (p && rt() && !T)
								for (Jt = p.parentNode; Jt && Jt !== pt; )
									Jt._pinOffset && ((R -= Jt._pinOffset), (q -= Jt._pinOffset)),
										(Jt = Jt.parentNode);
							Lr &&
								Lr.forEach(function (Ir) {
									return Ir.revert(!1, !0);
								}),
								(x.start = R),
								(x.end = q),
								(W = A = fe ? Ue : rt()),
								!T && !fe && (W < Ue && rt(Ue), (x.scroll.rec = 0)),
								x.revert(!1, !0),
								(vt = ne()),
								He && ((it = -1), He.restart(!0)),
								(ee = 0),
								r &&
									E &&
									(r._initted || Xn) &&
									r.progress() !== Xn &&
									r.progress(Xn || 0, !0).render(r.time(), !0, !0),
								(Zt || kt !== x.progress || T || d) &&
									(r &&
										!E &&
										r.totalProgress(
											T && R < -0.001 && !kt ? L.utils.normalize(R, q, 0) : kt,
											!0,
										),
									(x.progress = Zt || (W - R) / _t === kt ? 0 : kt)),
								h && _ && (It._pinOffset = Math.round(x.progress * Te)),
								G && G.invalidate(),
								isNaN(Rr) ||
									((Rr -= L.getProperty(S, D.p)),
									(xi -= L.getProperty(Dt, D.p)),
									Ai(S, D, Rr),
									Ai(st, D, Rr - (V || 0)),
									Ai(Dt, D, xi),
									Ai(Ot, D, xi - (V || 0))),
								Zt && !fe && x.update(),
								c && !fe && !_e && ((_e = !0), c(x), (_e = !1));
						}
					}),
					(x.getVelocity = function () {
						return ((rt() - A) / (ne() - Xr)) * 1e3 || 0;
					}),
					(x.endAnimation = function () {
						Nr(x.callbackAnimation),
							r &&
								(G
									? G.progress(1)
									: r.paused()
										? E || Nr(r, x.direction < 0, 1)
										: Nr(r, r.reversed()));
					}),
					(x.labelToScroll = function (k) {
						return (
							(r &&
								r.labels &&
								(R || x.refresh() || R) + (r.labels[k] / r.duration()) * _t) ||
							0
						);
					}),
					(x.getTrailing = function (k) {
						var U = K.indexOf(x),
							z = x.direction > 0 ? K.slice(0, U).reverse() : K.slice(U + 1);
						return (
							Oe(k)
								? z.filter(function (V) {
										return V.vars.preventOverlaps === k;
									})
								: z
						).filter(function (V) {
							return x.direction > 0 ? V.end <= R : V.start >= q;
						});
					}),
					(x.update = function (k, U, z) {
						if (!(T && !z && !k)) {
							var V = fe === !0 ? Ue : x.scroll(),
								Ht = k ? 0 : (V - R) / _t,
								tt = Ht < 0 ? 0 : Ht > 1 ? 1 : Ht || 0,
								Et = x.progress,
								Zt,
								Ct,
								gt,
								lt,
								$e,
								wt,
								Se,
								Je;
							if (
								(U &&
									((A = W),
									(W = T ? rt() : V),
									v && ((pn = qe), (qe = r && !E ? r.totalProgress() : tt))),
								g &&
									h &&
									!ee &&
									!Mi &&
									Ye &&
									(!tt && R < V + ((V - A) / (ne() - Xr)) * g
										? (tt = 1e-4)
										: tt === 1 &&
											q > V + ((V - A) / (ne() - Xr)) * g &&
											(tt = 0.9999)),
								tt !== Et && x.enabled)
							) {
								if (
									((Zt = x.isActive = !!tt && tt < 1),
									(Ct = !!Et && Et < 1),
									(wt = Zt !== Ct),
									($e = wt || !!tt != !!Et),
									(x.direction = tt > Et ? 1 : -1),
									(x.progress = tt),
									$e &&
										!ee &&
										((gt = tt && !Et ? 0 : tt === 1 ? 1 : Et === 1 ? 2 : 3),
										E &&
											((lt =
												(!wt && I[gt + 1] !== "none" && I[gt + 1]) || I[gt]),
											(Je =
												r &&
												(lt === "complete" || lt === "reset" || lt in r)))),
									M &&
										(wt || Je) &&
										(Je || f || !r) &&
										(pe(M)
											? M(x)
											: x.getTrailing(M).forEach(function (Vn) {
													return Vn.endAnimation();
												})),
									E ||
										(G && !ee && !Mi
											? (G._dp._time - G._start !== G._time &&
													G.render(G._dp._time - G._start),
												G.resetTo
													? G.resetTo("totalProgress", tt, r._tTime / r._tDur)
													: ((G.vars.totalProgress = tt),
														G.invalidate().restart()))
											: r && r.totalProgress(tt, !!(ee && (vt || k)))),
									h)
								) {
									if ((k && _ && (It.style[_ + D.os2] = dn), !X))
										oe(qr(Ft + Te * tt));
									else if ($e) {
										if (
											((Se = !k && tt > Et && q + 1 > V && V + 1 >= un(P, D)),
											b)
										)
											if (!k && (Zt || Se)) {
												var jt = yn(h, !0),
													Kt = V - R;
												ra(
													h,
													pt,
													jt.top + (D === Vt ? Kt : 0) + Xt,
													jt.left + (D === Vt ? 0 : Kt) + Xt,
												);
											} else ra(h, It);
										Mr(Zt || Se ? Ke : hn),
											(Qe && tt < 1 && Zt) ||
												oe(Ft + (tt === 1 && !Se ? Te : 0));
									}
								}
								v && !at.tween && !ee && !Mi && He.restart(!0),
									o &&
										(wt || (w && tt && (tt < 1 || !ms))) &&
										hi(o.targets).forEach(function (Vn) {
											return Vn.classList[Zt || w ? "add" : "remove"](
												o.className,
											);
										}),
									s && !E && !k && s(x),
									$e && !ee
										? (E &&
												(Je &&
													(lt === "complete"
														? r.pause().totalProgress(1)
														: lt === "reset"
															? r.restart(!0).pause()
															: lt === "restart"
																? r.restart(!0)
																: r[lt]()),
												s && s(x)),
											(wt || !ms) &&
												(l && wt && vs(x, l),
												Y[gt] && vs(x, Y[gt]),
												w && (tt === 1 ? x.kill(!1, 1) : (Y[gt] = 0)),
												wt || ((gt = tt === 1 ? 1 : 3), Y[gt] && vs(x, Y[gt]))),
											C &&
												!Zt &&
												Math.abs(x.getVelocity()) > (Hr(C) ? C : 2500) &&
												(Nr(x.callbackAnimation),
												G
													? G.progress(1)
													: Nr(r, lt === "reverse" ? 1 : !tt, 1)))
										: E && s && !ee && s(x);
							}
							if (Tn) {
								var Jt = T ? (V / T.duration()) * (T._caScrollDist || 0) : V;
								cr(Jt + (S._isFlipped ? 1 : 0)), Tn(Jt);
							}
							fr && fr((-V / T.duration()) * (T._caScrollDist || 0));
						}
					}),
					(x.enable = function (k, U) {
						x.enabled ||
							((x.enabled = !0),
							$t(P, "resize", Ur),
							F || $t(P, "scroll", pr),
							Z && $t(a, "refreshInit", Z),
							k !== !1 && ((x.progress = kt = 0), (W = A = it = rt())),
							U !== !1 && x.refresh());
					}),
					(x.getTween = function (k) {
						return k && at ? at.tween : G;
					}),
					(x.setPositions = function (k, U, z, V) {
						if (T) {
							var Ht = T.scrollTrigger,
								tt = T.duration(),
								Et = Ht.end - Ht.start;
							(k = Ht.start + (Et * k) / tt), (U = Ht.start + (Et * U) / tt);
						}
						x.refresh(
							!1,
							!1,
							{
								start: Go(k, z && !!x._startClamp),
								end: Go(U, z && !!x._endClamp),
							},
							V,
						),
							x.update();
					}),
					(x.adjustPinSpacing = function (k) {
						if (dt && k) {
							var U = dt.indexOf(D.d) + 1;
							(dt[U] = parseFloat(dt[U]) + k + Xt),
								(dt[1] = parseFloat(dt[1]) + k + Xt),
								Mr(dt);
						}
					}),
					(x.disable = function (k, U) {
						if (
							x.enabled &&
							(k !== !1 && x.revert(!0, !0),
							(x.enabled = x.isActive = !1),
							U || (G && G.pause()),
							(Ue = 0),
							ft && (ft.uncache = 1),
							Z && Ut(a, "refreshInit", Z),
							He && (He.pause(), at.tween && at.tween.kill() && (at.tween = 0)),
							!F)
						) {
							for (var z = K.length; z--; )
								if (K[z].scroller === P && K[z] !== x) return;
							Ut(P, "resize", Ur), F || Ut(P, "scroll", pr);
						}
					}),
					(x.kill = function (k, U) {
						x.disable(k, U), G && !U && G.kill(), u && delete Us[u];
						var z = K.indexOf(x);
						z >= 0 && K.splice(z, 1),
							z === ce && Yi > 0 && ce--,
							(z = 0),
							K.forEach(function (V) {
								return V.scroller === x.scroller && (z = 1);
							}),
							z || fe || (x.scroll.rec = 0),
							r &&
								((r.scrollTrigger = null),
								k && r.revert({ kill: !1 }),
								U || r.kill()),
							st &&
								[st, Ot, S, Dt].forEach(function (V) {
									return V.parentNode && V.parentNode.removeChild(V);
								}),
							ri === x && (ri = 0),
							h &&
								(ft && (ft.uncache = 1),
								(z = 0),
								K.forEach(function (V) {
									return V.pin === h && z++;
								}),
								z || (ft.spacer = 0)),
							n.onKill && n.onKill(x);
					}),
					K.push(x),
					x.enable(!1, !1),
					_n && _n(x),
					r && r.add && !_t)
				) {
					var ot = x.update;
					(x.update = function () {
						(x.update = ot), R || q || x.refresh();
					}),
						L.delayedCall(0.01, x.update),
						(_t = 0.01),
						(R = q = 0);
				} else x.refresh();
				h && dc();
			}),
			(a.register = function (n) {
				return (
					_r ||
						((L = n || Mu()), Su() && window.document && a.enable(), (_r = Vr)),
					_r
				);
			}),
			(a.defaults = function (n) {
				if (n) for (var r in n) Pi[r] = n[r];
				return Pi;
			}),
			(a.disable = function (n, r) {
				(Vr = 0),
					K.forEach(function (s) {
						return s[r ? "kill" : "disable"](n);
					}),
					Ut(et, "wheel", pr),
					Ut(bt, "scroll", pr),
					clearInterval(Si),
					Ut(bt, "touchcancel", rn),
					Ut(pt, "touchstart", rn),
					Di(Ut, bt, "pointerdown,touchstart,mousedown", jo),
					Di(Ut, bt, "pointerup,touchend,mouseup", Ko),
					Zi.kill(),
					Oi(Ut);
				for (var i = 0; i < Q.length; i += 3)
					Ci(Ut, Q[i], Q[i + 1]), Ci(Ut, Q[i], Q[i + 2]);
			}),
			(a.enable = function () {
				if (
					((et = window),
					(bt = document),
					(Ge = bt.documentElement),
					(pt = bt.body),
					L &&
						((hi = L.utils.toArray),
						(Zr = L.utils.clamp),
						(qs = L.core.context || rn),
						(gs = L.core.suppressOverwrites || rn),
						(ho = et.history.scrollRestoration || "auto"),
						($s = et.pageYOffset),
						L.core.globals("ScrollTrigger", a),
						pt))
				) {
					(Vr = 1),
						(Sr = document.createElement("div")),
						(Sr.style.height = "100vh"),
						(Sr.style.position = "absolute"),
						Ru(),
						oc(),
						Lt.register(L),
						(a.isTouch = Lt.isTouch),
						(On =
							Lt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(Vs = Lt.isTouch === 1),
						$t(et, "wheel", pr),
						(vu = [et, bt, Ge, pt]),
						L.matchMedia
							? ((a.matchMedia = function (u) {
									var l = L.matchMedia(),
										c;
									for (c in u) l.add(c, u[c]);
									return l;
								}),
								L.addEventListener("matchMediaInit", function () {
									return vo();
								}),
								L.addEventListener("matchMediaRevert", function () {
									return Au();
								}),
								L.addEventListener("matchMedia", function () {
									jn(0, 1), ar("matchMedia");
								}),
								L.matchMedia("(orientation: portrait)", function () {
									return xs(), xs;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						xs(),
						$t(bt, "scroll", pr);
					var n = pt.style,
						r = n.borderTopStyle,
						i = L.core.Animation.prototype,
						s,
						o;
					for (
						i.revert ||
							Object.defineProperty(i, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							n.borderTopStyle = "solid",
							s = yn(pt),
							Vt.m = Math.round(s.top + Vt.sc()) || 0,
							de.m = Math.round(s.left + de.sc()) || 0,
							r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
							Si = setInterval(Jo, 250),
							L.delayedCall(0.5, function () {
								return (Mi = 0);
							}),
							$t(bt, "touchcancel", rn),
							$t(pt, "touchstart", rn),
							Di($t, bt, "pointerdown,touchstart,mousedown", jo),
							Di($t, bt, "pointerup,touchend,mouseup", Ko),
							Xs = L.utils.checkPrefix("transform"),
							Xi.push(Xs),
							_r = ne(),
							Zi = L.delayedCall(0.2, jn).pause(),
							gr = [
								bt,
								"visibilitychange",
								function () {
									var u = et.innerWidth,
										l = et.innerHeight;
									bt.hidden
										? ((Uo = u), ($o = l))
										: (Uo !== u || $o !== l) && Ur();
								},
								bt,
								"DOMContentLoaded",
								jn,
								et,
								"load",
								jn,
								et,
								"resize",
								Ur,
							],
							Oi($t),
							K.forEach(function (u) {
								return u.enable(0, 1);
							}),
							o = 0;
						o < Q.length;
						o += 3
					)
						Ci(Ut, Q[o], Q[o + 1]), Ci(Ut, Q[o], Q[o + 2]);
				}
			}),
			(a.config = function (n) {
				"limitCallbacks" in n && (ms = !!n.limitCallbacks);
				var r = n.syncInterval;
				(r && clearInterval(Si)) || ((Si = r) && setInterval(Jo, r)),
					"ignoreMobileResize" in n &&
						(Vs = a.isTouch === 1 && n.ignoreMobileResize),
					"autoRefreshEvents" in n &&
						(Oi(Ut) || Oi($t, n.autoRefreshEvents || "none"),
						(wu = (n.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (n, r) {
				var i = me(n),
					s = Q.indexOf(i),
					o = sr(i);
				~s && Q.splice(s, o ? 6 : 2),
					r && (o ? cn.unshift(et, r, pt, r, Ge, r) : cn.unshift(i, r));
			}),
			(a.clearMatchMedia = function (n) {
				K.forEach(function (r) {
					return r._ctx && r._ctx.query === n && r._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (n, r, i) {
				var s = (Oe(n) ? me(n) : n).getBoundingClientRect(),
					o = s[i ? tr : er] * r || 0;
				return i
					? s.right - o > 0 && s.left + o < et.innerWidth
					: s.bottom - o > 0 && s.top + o < et.innerHeight;
			}),
			(a.positionInViewport = function (n, r, i) {
				Oe(n) && (n = me(n));
				var s = n.getBoundingClientRect(),
					o = s[i ? tr : er],
					u =
						r == null
							? o / 2
							: r in es
								? es[r] * o
								: ~r.indexOf("%")
									? (parseFloat(r) * o) / 100
									: parseFloat(r) || 0;
				return i ? (s.left + u) / et.innerWidth : (s.top + u) / et.innerHeight;
			}),
			(a.killAll = function (n) {
				if (
					(K.slice(0).forEach(function (i) {
						return i.vars.id !== "ScrollSmoother" && i.kill();
					}),
					n !== !0)
				) {
					var r = or.killAll || [];
					(or = {}),
						r.forEach(function (i) {
							return i();
						});
				}
			}),
			a
		);
	})();
j.version = "3.12.5";
j.saveStyles = function (a) {
	return a
		? hi(a).forEach(function (t) {
				if (t && t.style) {
					var e = Me.indexOf(t);
					e >= 0 && Me.splice(e, 5),
						Me.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							L.core.getCache(t),
							qs(),
						);
				}
			})
		: Me;
};
j.revert = function (a, t) {
	return vo(!a, t);
};
j.create = function (a, t) {
	return new j(a, t);
};
j.refresh = function (a) {
	return a ? Ur() : (_r || j.register()) && jn(!0);
};
j.update = function (a) {
	return ++Q.cache && xn(a === !0 ? 2 : 0);
};
j.clearScrollMemory = Lu;
j.maxScroll = function (a, t) {
	return un(a, t ? de : Vt);
};
j.getScrollFunc = function (a, t) {
	return Bn(me(a), t ? de : Vt);
};
j.getById = function (a) {
	return Us[a];
};
j.getAll = function () {
	return K.filter(function (a) {
		return a.vars.id !== "ScrollSmoother";
	});
};
j.isScrolling = function () {
	return !!Ye;
};
j.snapDirectional = yo;
j.addEventListener = function (a, t) {
	var e = or[a] || (or[a] = []);
	~e.indexOf(t) || e.push(t);
};
j.removeEventListener = function (a, t) {
	var e = or[a],
		n = e && e.indexOf(t);
	n >= 0 && e.splice(n, 1);
};
j.batch = function (a, t) {
	var e = [],
		n = {},
		r = t.interval || 0.016,
		i = t.batchMax || 1e9,
		s = function (l, c) {
			var f = [],
				p = [],
				h = L.delayedCall(r, function () {
					c(f, p), (f = []), (p = []);
				}).pause();
			return function (_) {
				f.length || h.restart(!0),
					f.push(_.trigger),
					p.push(_),
					i <= f.length && h.progress(1);
			};
		},
		o;
	for (o in t)
		n[o] =
			o.substr(0, 2) === "on" && pe(t[o]) && o !== "onRefreshInit"
				? s(o, t[o])
				: t[o];
	return (
		pe(i) &&
			((i = i()),
			$t(j, "refresh", function () {
				return (i = t.batchMax());
			})),
		hi(a).forEach(function (u) {
			var l = {};
			for (o in n) l[o] = n[o];
			(l.trigger = u), e.push(j.create(l));
		}),
		e
	);
};
var sa = function (t, e, n, r) {
		return (
			e > r ? t(r) : e < 0 && t(0),
			n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
		);
	},
	bs = function a(t, e) {
		e === !0
			? t.style.removeProperty("touch-action")
			: (t.style.touchAction =
					e === !0
						? "auto"
						: e
							? "pan-" + e + (Lt.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === Ge && a(pt, e);
	},
	Li = { auto: 1, scroll: 1 },
	yc = function (t) {
		var e = t.event,
			n = t.target,
			r = t.axis,
			i = (e.changedTouches ? e.changedTouches[0] : e).target,
			s = i._gsap || L.core.getCache(i),
			o = ne(),
			u;
		if (!s._isScrollT || o - s._isScrollT > 2e3) {
			for (
				;
				i &&
				i !== pt &&
				((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
					!(Li[(u = ze(i)).overflowY] || Li[u.overflowX]));

			)
				i = i.parentNode;
			(s._isScroll =
				i &&
				i !== n &&
				!sr(i) &&
				(Li[(u = ze(i)).overflowY] || Li[u.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || r === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
	},
	Fu = function (t, e, n, r) {
		return Lt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (r = r && yc),
			onPress: r,
			onDrag: r,
			onScroll: r,
			onEnable: function () {
				return n && $t(bt, Lt.eventTypes[0], aa, !1, !0);
			},
			onDisable: function () {
				return Ut(bt, Lt.eventTypes[0], aa, !0);
			},
		});
	},
	vc = /(input|label|select|textarea)/i,
	oa,
	aa = function (t) {
		var e = vc.test(t.target.tagName);
		(e || oa) && ((t._gsapAllow = !0), (oa = e));
	},
	xc = function (t) {
		Wn(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var e = t,
			n = e.normalizeScrollX,
			r = e.momentum,
			i = e.allowNestedScroll,
			s = e.onRelease,
			o,
			u,
			l = me(t.target) || Ge,
			c = L.core.globals().ScrollSmoother,
			f = c && c.get(),
			p =
				On &&
				((t.content && me(t.content)) ||
					(f && t.content !== !1 && !f.smooth() && f.content())),
			h = Bn(l, Vt),
			_ = Bn(l, de),
			d = 1,
			g =
				(Lt.isTouch && et.visualViewport
					? et.visualViewport.scale * et.visualViewport.width
					: et.outerWidth) / et.innerWidth,
			m = 0,
			y = pe(r)
				? function () {
						return r(o);
					}
				: function () {
						return r || 2.8;
					},
			w,
			v,
			b = Fu(l, t.type, !0, i),
			O = function () {
				return (v = !1);
			},
			T = rn,
			C = rn,
			M = function () {
				(u = un(l, Vt)),
					(C = Zr(On ? 1 : 0, u)),
					n && (T = Zr(0, un(l, de))),
					(w = nr);
			},
			D = function () {
				(p._gsap.y = qr(parseFloat(p._gsap.y) + h.offset) + "px"),
					(p.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(p._gsap.y) +
						", 0, 1)"),
					(h.offset = h.cacheID = 0);
			},
			E = function () {
				if (v) {
					requestAnimationFrame(O);
					var $ = qr(o.deltaY / 2),
						J = C(h.v - $);
					if (p && J !== h.v + h.offset) {
						h.offset = J - h.v;
						var x = qr((parseFloat(p && p._gsap.y) || 0) - h.offset);
						(p.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							x +
							", 0, 1)"),
							(p._gsap.y = x + "px"),
							(h.cacheID = Q.cache),
							xn();
					}
					return !0;
				}
				h.offset && D(), (v = !0);
			},
			P,
			N,
			F,
			X,
			Y = function () {
				M(),
					P.isActive() &&
						P.vars.scrollY > u &&
						(h() > u ? P.progress(1) && h(u) : P.resetTo("scrollY", u));
			};
		return (
			p && L.set(p, { y: "+=0" }),
			(t.ignoreCheck = function (I) {
				return (
					(On && I.type === "touchmove" && E()) ||
					(d > 1.05 && I.type !== "touchstart") ||
					o.isGesturing ||
					(I.touches && I.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				v = !1;
				var I = d;
				(d = qr(((et.visualViewport && et.visualViewport.scale) || 1) / g)),
					P.pause(),
					I !== d && bs(l, d > 1.01 ? !0 : n ? !1 : "x"),
					(N = _()),
					(F = h()),
					M(),
					(w = nr);
			}),
			(t.onRelease = t.onGestureStart =
				function (I, $) {
					if ((h.offset && D(), !$)) X.restart(!0);
					else {
						Q.cache++;
						var J = y(),
							x,
							Z;
						n &&
							((x = _()),
							(Z = x + (J * 0.05 * -I.velocityX) / 0.227),
							(J *= sa(_, x, Z, un(l, de))),
							(P.vars.scrollX = T(Z))),
							(x = h()),
							(Z = x + (J * 0.05 * -I.velocityY) / 0.227),
							(J *= sa(h, x, Z, un(l, Vt))),
							(P.vars.scrollY = C(Z)),
							P.invalidate().duration(J).play(0.01),
							((On && P.vars.scrollY >= u) || x >= u - 1) &&
								L.to({}, { onUpdate: Y, duration: J });
					}
					s && s(I);
				}),
			(t.onWheel = function () {
				P._ts && P.pause(), ne() - m > 1e3 && ((w = 0), (m = ne()));
			}),
			(t.onChange = function (I, $, J, x, Z) {
				if (
					(nr !== w && M(),
					$ && n && _(T(x[2] === $ ? N + (I.startX - I.x) : _() + $ - x[1])),
					J)
				) {
					h.offset && D();
					var Mt = Z[2] === J,
						qt = Mt ? F + I.startY - I.y : h() + J - Z[1],
						it = C(qt);
					Mt && qt !== it && (F += it - qt), h(it);
				}
				(J || $) && xn();
			}),
			(t.onEnable = function () {
				bs(l, n ? !1 : "x"),
					j.addEventListener("refresh", Y),
					$t(et, "resize", Y),
					h.smooth &&
						((h.target.style.scrollBehavior = "auto"),
						(h.smooth = _.smooth = !1)),
					b.enable();
			}),
			(t.onDisable = function () {
				bs(l, !0),
					Ut(et, "resize", Y),
					j.removeEventListener("refresh", Y),
					b.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(o = new Lt(t)),
			(o.iOS = On),
			On && !h() && h(1),
			On && L.ticker.add(rn),
			(X = o._dc),
			(P = L.to(o, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: n ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: Iu(h, h(), function () {
						return P.pause();
					}),
				},
				onUpdate: xn,
				onComplete: X.vars.onComplete,
			})),
			o
		);
	};
j.sort = function (a) {
	return K.sort(
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
j.observe = function (a) {
	return new Lt(a);
};
j.normalizeScroll = function (a) {
	if (typeof a > "u") return le;
	if (a === !0 && le) return le.enable();
	if (a === !1) {
		le && le.kill(), (le = a);
		return;
	}
	var t = a instanceof Lt ? a : xc(a);
	return le && le.target === t.target && le.kill(), sr(t.target) && (le = t), t;
};
j.core = {
	_getVelocityProp: Ys,
	_inputObserver: Fu,
	_scrollers: Q,
	_proxies: cn,
	bridge: {
		ss: function () {
			Ye || ar("scrollStart"), (Ye = ne());
		},
		ref: function () {
			return ee;
		},
	},
};
Mu() && L.registerPlugin(j);
ut.registerPlugin(j);
class wc {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = ut.timeline({
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
function xo(a) {
	return typeof a == "number";
}
function Gs(a) {
	return typeof a == "string";
}
function wo(a) {
	return typeof a == "boolean";
}
function ua(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function yt(a) {
	return Math.abs(a);
}
function bo(a) {
	return Math.sign(a);
}
function ii(a, t) {
	return yt(a - t);
}
function bc(a, t) {
	if (a === 0 || t === 0 || yt(a) <= yt(t)) return 0;
	const e = ii(yt(a), yt(t));
	return yt(e / a);
}
function pi(a) {
	return _i(a).map(Number);
}
function je(a) {
	return a[yi(a)];
}
function yi(a) {
	return Math.max(0, a.length - 1);
}
function To(a, t) {
	return t === yi(a);
}
function la(a, t = 0) {
	return Array.from(Array(a), (e, n) => t + n);
}
function _i(a) {
	return Object.keys(a);
}
function zu(a, t) {
	return [a, t].reduce(
		(e, n) => (
			_i(n).forEach((r) => {
				const i = e[r],
					s = n[r],
					o = ua(i) && ua(s);
				e[r] = o ? zu(i, s) : s;
			}),
			e
		),
		{},
	);
}
function Nu(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function Tc(a, t) {
	const e = { start: n, center: r, end: i };
	function n() {
		return 0;
	}
	function r(u) {
		return i(u) / 2;
	}
	function i(u) {
		return t - u;
	}
	function s(u, l) {
		return Gs(a) ? e[a](u) : a(t, u, l);
	}
	return { measure: s };
}
function gi() {
	let a = [];
	function t(r, i, s, o = { passive: !0 }) {
		let u;
		if ("addEventListener" in r)
			r.addEventListener(i, s, o), (u = () => r.removeEventListener(i, s, o));
		else {
			const l = r;
			l.addListener(s), (u = () => l.removeListener(s));
		}
		return a.push(u), n;
	}
	function e() {
		a = a.filter((r) => r());
	}
	const n = { add: t, clear: e };
	return n;
}
function Sc(a, t, e, n) {
	const r = gi(),
		i = 1e3 / 60;
	let s = null,
		o = 0,
		u = 0;
	function l() {
		r.add(a, "visibilitychange", () => {
			a.hidden && _();
		});
	}
	function c() {
		h(), r.clear();
	}
	function f(g) {
		if (!u) return;
		s || (s = g);
		const m = g - s;
		for (s = g, o += m; o >= i; ) e(), (o -= i);
		const y = yt(o / i);
		n(y), u && t.requestAnimationFrame(f);
	}
	function p() {
		u || (u = t.requestAnimationFrame(f));
	}
	function h() {
		t.cancelAnimationFrame(u), (s = null), (o = 0), (u = 0);
	}
	function _() {
		(s = null), (o = 0);
	}
	return { init: l, destroy: c, start: p, stop: h, update: e, render: n };
}
function Mc(a, t) {
	const e = a === "y" ? "y" : "x",
		n = a === "y" ? "x" : "y",
		r = o(),
		i = u();
	function s(c) {
		const { width: f, height: p } = c;
		return e === "x" ? f : p;
	}
	function o() {
		return e === "y" ? "top" : t === "rtl" ? "right" : "left";
	}
	function u() {
		return e === "y" ? "bottom" : t === "rtl" ? "left" : "right";
	}
	return { scroll: e, cross: n, startEdge: r, endEdge: i, measureSize: s };
}
function ur(a = 0, t = 0) {
	const e = yt(a - t);
	function n(l) {
		return l < a;
	}
	function r(l) {
		return l > t;
	}
	function i(l) {
		return n(l) || r(l);
	}
	function s(l) {
		return i(l) ? (n(l) ? a : t) : l;
	}
	function o(l) {
		return e ? l - e * Math.ceil((l - t) / e) : l;
	}
	return {
		length: e,
		max: t,
		min: a,
		constrain: s,
		reachedAny: i,
		reachedMax: r,
		reachedMin: n,
		removeOffset: o,
	};
}
function Bu(a, t, e) {
	const { constrain: n } = ur(0, a),
		r = a + 1;
	let i = s(t);
	function s(p) {
		return e ? yt((r + p) % r) : n(p);
	}
	function o() {
		return i;
	}
	function u(p) {
		return (i = s(p)), f;
	}
	function l(p) {
		return c().set(o() + p);
	}
	function c() {
		return Bu(a, o(), e);
	}
	const f = { get: o, set: u, add: l, clone: c };
	return f;
}
function Oc(a) {
	const t = a === "rtl" ? -1 : 1;
	function e(r) {
		return r * t;
	}
	return { apply: e };
}
function Dc(a, t, e, n, r, i, s, o, u, l, c, f, p, h, _, d, g, m, y, w) {
	const { cross: v } = a,
		b = ["INPUT", "SELECT", "TEXTAREA"],
		O = { passive: !1 },
		T = gi(),
		C = gi(),
		M = ur(50, 225).constrain(_.measure(20)),
		D = { mouse: 300, touch: 400 },
		E = { mouse: 500, touch: 600 },
		P = d ? 43 : 25;
	let N = !1,
		F = 0,
		X = 0,
		Y = !1,
		I = !1,
		$ = !1,
		J = !1;
	function x(A) {
		if (!w) return;
		function R(st) {
			(wo(w) || w(A, st)) && kt(st);
		}
		const q = e;
		T.add(q, "dragstart", (st) => st.preventDefault(), O)
			.add(q, "touchmove", () => {}, O)
			.add(q, "touchend", () => {})
			.add(q, "touchstart", R)
			.add(q, "mousedown", R)
			.add(q, "touchcancel", at)
			.add(q, "contextmenu", at)
			.add(q, "click", ft, !0);
	}
	function Z() {
		T.clear(), C.clear();
	}
	function Mt() {
		const A = J ? n : e;
		C.add(A, "touchmove", rt, O)
			.add(A, "touchend", at)
			.add(A, "mousemove", rt, O)
			.add(A, "mouseup", at);
	}
	function qt(A) {
		const R = A.nodeName || "";
		return b.includes(R);
	}
	function it() {
		return (d ? E : D)[J ? "mouse" : "touch"];
	}
	function vt(A, R) {
		const q = p.add(bo(A) * -1),
			st = f.byDistance(A, !d).distance;
		return d || yt(A) < M
			? st
			: m && R
				? st * 0.5
				: f.byIndex(q.get(), 0).distance;
	}
	function kt(A) {
		const R = Nu(A, r);
		(J = R),
			!(R && A.button !== 0) &&
				(qt(A.target) ||
					(($ = d && R && !A.buttons && N),
					(N = ii(i.get(), o.get()) >= 2),
					(Y = !0),
					s.pointerDown(A),
					c.useFriction(0).useDuration(0),
					i.set(o),
					Mt(),
					(F = s.readPoint(A)),
					(X = s.readPoint(A, v)),
					h.emit("pointerDown")));
	}
	function rt(A) {
		const R = s.readPoint(A),
			q = s.readPoint(A, v),
			st = ii(R, F),
			Ot = ii(q, X);
		if (!I && !J && (!A.cancelable || ((I = st > Ot), !I))) return at(A);
		const S = s.pointerMove(A);
		st > g && ($ = !0),
			c.useFriction(0.3).useDuration(1),
			u.start(),
			i.add(t.apply(S)),
			A.preventDefault();
	}
	function at(A) {
		const q = f.byDistance(0, !1).index !== p.get(),
			st = s.pointerUp(A) * it(),
			Ot = vt(t.apply(st), q),
			S = bc(st, Ot),
			Dt = P - 10 * S,
			Bt = y + S / 50;
		(I = !1),
			(Y = !1),
			C.clear(),
			c.useDuration(Dt).useFriction(Bt),
			l.distance(Ot, !d),
			(J = !1),
			h.emit("pointerUp");
	}
	function ft(A) {
		$ && (A.stopPropagation(), A.preventDefault());
	}
	function Rt() {
		return Y;
	}
	return { init: x, pointerDown: Rt, destroy: Z };
}
function Cc(a, t) {
	let n, r;
	function i(f) {
		return f.timeStamp;
	}
	function s(f, p) {
		const _ = `client${(p || a.scroll) === "x" ? "X" : "Y"}`;
		return (Nu(f, t) ? f : f.touches[0])[_];
	}
	function o(f) {
		return (n = f), (r = f), s(f);
	}
	function u(f) {
		const p = s(f) - s(r),
			h = i(f) - i(n) > 170;
		return (r = f), h && (n = f), p;
	}
	function l(f) {
		if (!n || !r) return 0;
		const p = s(r) - s(n),
			h = i(f) - i(n),
			_ = i(f) - i(r) > 170,
			d = p / h;
		return h && !_ && yt(d) > 0.1 ? d : 0;
	}
	return { pointerDown: o, pointerMove: u, pointerUp: l, readPoint: s };
}
function Pc() {
	function a(e) {
		const { offsetTop: n, offsetLeft: r, offsetWidth: i, offsetHeight: s } = e;
		return {
			top: n,
			right: r + i,
			bottom: n + s,
			left: r,
			width: i,
			height: s,
		};
	}
	return { measure: a };
}
function kc(a) {
	function t(n) {
		return a * (n / 100);
	}
	return { measure: t };
}
function Ec(a, t, e, n, r, i, s) {
	let o,
		u,
		l = [],
		c = !1;
	function f(d) {
		return r.measureSize(s.measure(d));
	}
	function p(d) {
		if (!i) return;
		(u = f(a)), (l = n.map(f));
		function g(y) {
			for (const w of y) {
				const v = w.target === a,
					b = n.indexOf(w.target),
					O = v ? u : l[b],
					T = f(v ? a : n[b]);
				if (yt(T - O) >= 0.5) {
					e.requestAnimationFrame(() => {
						d.reInit(), t.emit("resize");
					});
					break;
				}
			}
		}
		(o = new ResizeObserver((y) => {
			c || ((wo(i) || i(d, y)) && g(y));
		})),
			[a].concat(n).forEach((y) => o.observe(y));
	}
	function h() {
		o && o.disconnect(), (c = !0);
	}
	return { init: p, destroy: h };
}
function Ac(a, t, e, n, r) {
	let i = 0,
		s = 0,
		o = n,
		u = r,
		l = a.get(),
		c = 0;
	function f() {
		const b = e.get() - a.get(),
			O = !o;
		let T = 0;
		return (
			O
				? ((i = 0), a.set(e), (T = b))
				: ((i += b / o), (i *= u), (l += i), a.add(i), (T = l - c)),
			(s = bo(T)),
			(c = l),
			v
		);
	}
	function p() {
		const b = e.get() - t.get();
		return yt(b) < 0.001;
	}
	function h() {
		return o;
	}
	function _() {
		return s;
	}
	function d() {
		return i;
	}
	function g() {
		return y(n);
	}
	function m() {
		return w(r);
	}
	function y(b) {
		return (o = b), v;
	}
	function w(b) {
		return (u = b), v;
	}
	const v = {
		direction: _,
		duration: h,
		velocity: d,
		seek: f,
		settled: p,
		useBaseFriction: m,
		useBaseDuration: g,
		useFriction: w,
		useDuration: y,
	};
	return v;
}
function Lc(a, t, e, n, r) {
	const i = r.measure(10),
		s = r.measure(50),
		o = ur(0.1, 0.99);
	let u = !1;
	function l() {
		return !(u || !a.reachedAny(e.get()) || !a.reachedAny(t.get()));
	}
	function c(h) {
		if (!l()) return;
		const _ = a.reachedMin(t.get()) ? "min" : "max",
			d = yt(a[_] - t.get()),
			g = e.get() - t.get(),
			m = o.constrain(d / s);
		e.subtract(g * m),
			!h &&
				yt(g) < i &&
				(e.set(a.constrain(e.get())), n.useDuration(25).useBaseFriction());
	}
	function f(h) {
		u = !h;
	}
	return { constrain: c, toggleActive: f };
}
function Rc(a, t, e, n, r) {
	const i = ur(-t + a, 0),
		s = f(),
		o = c(),
		u = p();
	function l(_, d) {
		return ii(_, d) < 1;
	}
	function c() {
		const _ = s[0],
			d = je(s),
			g = s.lastIndexOf(_),
			m = s.indexOf(d) + 1;
		return ur(g, m);
	}
	function f() {
		return e
			.map((_, d) => {
				const { min: g, max: m } = i,
					y = i.constrain(_),
					w = !d,
					v = To(e, d);
				return w ? m : v || l(g, y) ? g : l(m, y) ? m : y;
			})
			.map((_) => parseFloat(_.toFixed(3)));
	}
	function p() {
		if (t <= a + r) return [i.max];
		if (n === "keepSnaps") return s;
		const { min: _, max: d } = o;
		return s.slice(_, d);
	}
	return { snapsContained: u, scrollContainLimit: o };
}
function Ic(a, t, e) {
	const n = t[0],
		r = e ? n - a : je(t);
	return { limit: ur(r, n) };
}
function Fc(a, t, e, n) {
	const i = t.min + 0.1,
		s = t.max + 0.1,
		{ reachedMin: o, reachedMax: u } = ur(i, s);
	function l(p) {
		return p === 1 ? u(e.get()) : p === -1 ? o(e.get()) : !1;
	}
	function c(p) {
		if (!l(p)) return;
		const h = a * (p * -1);
		n.forEach((_) => _.add(h));
	}
	return { loop: c };
}
function zc(a) {
	const { max: t, length: e } = a;
	function n(i) {
		const s = i - t;
		return e ? s / -e : 0;
	}
	return { get: n };
}
function Nc(a, t, e, n, r) {
	const { startEdge: i, endEdge: s } = a,
		{ groupSlides: o } = r,
		u = f().map(t.measure),
		l = p(),
		c = h();
	function f() {
		return o(n)
			.map((d) => je(d)[s] - d[0][i])
			.map(yt);
	}
	function p() {
		return n.map((d) => e[i] - d[i]).map((d) => -yt(d));
	}
	function h() {
		return o(l)
			.map((d) => d[0])
			.map((d, g) => d + u[g]);
	}
	return { snaps: l, snapsAligned: c };
}
function Bc(a, t, e, n, r, i) {
	const { groupSlides: s } = r,
		{ min: o, max: u } = n,
		l = c();
	function c() {
		const p = s(i),
			h = !a || t === "keepSnaps";
		return e.length === 1
			? [i]
			: h
				? p
				: p.slice(o, u).map((_, d, g) => {
						const m = !d,
							y = To(g, d);
						if (m) {
							const w = je(g[0]) + 1;
							return la(w);
						}
						if (y) {
							const w = yi(i) - je(g)[0] + 1;
							return la(w, je(g)[0]);
						}
						return _;
					});
	}
	return { slideRegistry: l };
}
function Yc(a, t, e, n, r) {
	const { reachedAny: i, removeOffset: s, constrain: o } = n;
	function u(_) {
		return _.concat().sort((d, g) => yt(d) - yt(g))[0];
	}
	function l(_) {
		const d = a ? s(_) : o(_),
			g = t
				.map((y) => y - d)
				.map((y) => c(y, 0))
				.map((y, w) => ({ diff: y, index: w }))
				.sort((y, w) => yt(y.diff) - yt(w.diff)),
			{ index: m } = g[0];
		return { index: m, distance: d };
	}
	function c(_, d) {
		const g = [_, _ + e, _ - e];
		if (!a) return g[0];
		if (!d) return u(g);
		const m = g.filter((y) => bo(y) === d);
		return m.length ? u(m) : je(g) - e;
	}
	function f(_, d) {
		const g = t[_] - r.get(),
			m = c(g, d);
		return { index: _, distance: m };
	}
	function p(_, d) {
		const g = r.get() + _,
			{ index: m, distance: y } = l(g),
			w = !a && i(g);
		if (!d || w) return { index: m, distance: _ };
		const v = t[m] - y,
			b = _ + c(v, 0);
		return { index: m, distance: b };
	}
	return { byDistance: p, byIndex: f, shortcut: c };
}
function Xc(a, t, e, n, r, i, s) {
	function o(f) {
		const p = f.distance,
			h = f.index !== t.get();
		i.add(p),
			p && (n.duration() ? a.start() : (a.update(), a.render(1), a.update())),
			h && (e.set(t.get()), t.set(f.index), s.emit("select"));
	}
	function u(f, p) {
		const h = r.byDistance(f, p);
		o(h);
	}
	function l(f, p) {
		const h = t.clone().set(f),
			_ = r.byIndex(h.get(), p);
		o(_);
	}
	return { distance: u, index: l };
}
function Vc(a, t, e, n, r, i) {
	let s = 0;
	function o() {
		i.add(document, "keydown", u, !1), t.forEach(l);
	}
	function u(f) {
		f.code === "Tab" && (s = new Date().getTime());
	}
	function l(f) {
		const p = () => {
			if (new Date().getTime() - s > 10) return;
			a.scrollLeft = 0;
			const d = t.indexOf(f),
				g = e.findIndex((m) => m.includes(d));
			xo(g) && (r.useDuration(0), n.index(g, 0));
		};
		i.add(f, "focus", p, { passive: !0, capture: !0 });
	}
	return { init: o };
}
function qi(a) {
	let t = a;
	function e() {
		return t;
	}
	function n(u) {
		t = s(u);
	}
	function r(u) {
		t += s(u);
	}
	function i(u) {
		t -= s(u);
	}
	function s(u) {
		return xo(u) ? u : u.get();
	}
	return { get: e, set: n, add: r, subtract: i };
}
function Yu(a, t, e) {
	const n = a.scroll === "x" ? s : o,
		r = e.style;
	let i = !1;
	function s(p) {
		return `translate3d(${p}px,0px,0px)`;
	}
	function o(p) {
		return `translate3d(0px,${p}px,0px)`;
	}
	function u(p) {
		i || (r.transform = n(t.apply(p)));
	}
	function l(p) {
		i = !p;
	}
	function c() {
		i ||
			((r.transform = ""),
			e.getAttribute("style") || e.removeAttribute("style"));
	}
	return { clear: c, to: u, toggleActive: l };
}
function qc(a, t, e, n, r, i, s, o, u, l) {
	const f = pi(i),
		p = pi(i).reverse(),
		h = y().concat(w());
	function _(C, M) {
		return C.reduce((D, E) => D - i[E], M);
	}
	function d(C, M) {
		return C.reduce((D, E) => (_(D, M) > 0 ? D.concat([E]) : D), []);
	}
	function g(C) {
		return s.map((M, D) => ({
			start: M - r[D] + 0.5 + C,
			end: M + e - 0.5 + C,
		}));
	}
	function m(C, M, D) {
		const E = g(M);
		return C.map((P) => {
			const N = D ? 0 : -n,
				F = D ? n : 0,
				X = D ? "end" : "start",
				Y = E[P][X];
			return {
				index: P,
				loopPoint: Y,
				slideLocation: qi(-1),
				translate: Yu(a, t, l[P]),
				target: () => (u.get() > Y ? N : F),
			};
		});
	}
	function y() {
		const C = o[0],
			M = d(p, C);
		return m(M, n, !1);
	}
	function w() {
		const C = e - o[0] - 1,
			M = d(f, C);
		return m(M, -n, !0);
	}
	function v() {
		return h.every(({ index: C }) => {
			const M = f.filter((D) => D !== C);
			return _(M, e) <= 0.1;
		});
	}
	function b() {
		h.forEach((C) => {
			const { target: M, translate: D, slideLocation: E } = C,
				P = M();
			P !== E.get() && (D.to(P), E.set(P));
		});
	}
	function O() {
		h.forEach((C) => C.translate.clear());
	}
	return { canLoop: v, clear: O, loop: b, loopPoints: h };
}
function Hc(a, t, e) {
	let n,
		r = !1;
	function i(u) {
		if (!e) return;
		function l(c) {
			for (const f of c)
				if (f.type === "childList") {
					u.reInit(), t.emit("slidesChanged");
					break;
				}
		}
		(n = new MutationObserver((c) => {
			r || ((wo(e) || e(u, c)) && l(c));
		})),
			n.observe(a, { childList: !0 });
	}
	function s() {
		n && n.disconnect(), (r = !0);
	}
	return { init: i, destroy: s };
}
function Uc(a, t, e, n) {
	const r = {};
	let i = null,
		s = null,
		o,
		u = !1;
	function l() {
		(o = new IntersectionObserver(
			(_) => {
				u ||
					(_.forEach((d) => {
						const g = t.indexOf(d.target);
						r[g] = d;
					}),
					(i = null),
					(s = null),
					e.emit("slidesInView"));
			},
			{ root: a.parentElement, threshold: n },
		)),
			t.forEach((_) => o.observe(_));
	}
	function c() {
		o && o.disconnect(), (u = !0);
	}
	function f(_) {
		return _i(r).reduce((d, g) => {
			const m = parseInt(g),
				{ isIntersecting: y } = r[m];
			return ((_ && y) || (!_ && !y)) && d.push(m), d;
		}, []);
	}
	function p(_ = !0) {
		if (_ && i) return i;
		if (!_ && s) return s;
		const d = f(_);
		return _ && (i = d), _ || (s = d), d;
	}
	return { init: l, destroy: c, get: p };
}
function $c(a, t, e, n, r, i) {
	const { measureSize: s, startEdge: o, endEdge: u } = a,
		l = e[0] && r,
		c = _(),
		f = d(),
		p = e.map(s),
		h = g();
	function _() {
		if (!l) return 0;
		const y = e[0];
		return yt(t[o] - y[o]);
	}
	function d() {
		if (!l) return 0;
		const y = i.getComputedStyle(je(n));
		return parseFloat(y.getPropertyValue(`margin-${u}`));
	}
	function g() {
		return e
			.map((y, w, v) => {
				const b = !w,
					O = To(v, w);
				return b ? p[w] + c : O ? p[w] + f : v[w + 1][o] - y[o];
			})
			.map(yt);
	}
	return { slideSizes: p, slideSizesWithGaps: h, startGap: c, endGap: f };
}
function Wc(a, t, e, n, r, i, s, o, u, l) {
	const { startEdge: c, endEdge: f } = a,
		p = xo(n);
	function h(m, y) {
		return pi(m)
			.filter((w) => w % y === 0)
			.map((w) => m.slice(w, w + y));
	}
	function _(m) {
		return m.length
			? pi(m)
					.reduce((y, w) => {
						const v = je(y) || 0,
							b = v === 0,
							O = w === yi(m),
							T = i[c] - s[v][c],
							C = i[c] - s[w][f],
							M = !r && b ? t.apply(o) : 0,
							D = !r && O ? t.apply(u) : 0;
						return (
							yt(C - D - (T + M)) > e + l && y.push(w), O && y.push(m.length), y
						);
					}, [])
					.map((y, w, v) => {
						const b = Math.max(v[w - 1] || 0);
						return m.slice(b, y);
					})
			: [];
	}
	function d(m) {
		return p ? h(m, n) : _(m);
	}
	return { groupSlides: d };
}
function Gc(a, t, e, n, r, i, s) {
	const {
			align: o,
			axis: u,
			direction: l,
			startIndex: c,
			loop: f,
			duration: p,
			dragFree: h,
			dragThreshold: _,
			inViewThreshold: d,
			slidesToScroll: g,
			skipSnaps: m,
			containScroll: y,
			watchResize: w,
			watchSlides: v,
			watchDrag: b,
		} = i,
		O = 2,
		T = Pc(),
		C = T.measure(t),
		M = e.map(T.measure),
		D = Oc(l),
		E = Mc(u, l),
		P = E.measureSize(C),
		N = kc(P),
		F = Tc(o, P),
		X = !f && !!y,
		Y = f || !!y,
		{
			slideSizes: I,
			slideSizesWithGaps: $,
			startGap: J,
			endGap: x,
		} = $c(E, C, M, e, Y, r),
		Z = Wc(E, D, P, g, f, C, M, J, x, O),
		{ snaps: Mt, snapsAligned: qt } = Nc(E, F, C, M, Z),
		it = -je(Mt) + je($),
		{ snapsContained: vt, scrollContainLimit: kt } = Rc(P, it, qt, y, O),
		rt = X ? vt : qt,
		{ limit: at } = Ic(it, rt, f),
		ft = Bu(yi(rt), c, f),
		Rt = ft.clone(),
		W = pi(e),
		A = ({
			dragHandler: Ft,
			scrollBody: Te,
			scrollBounds: dn,
			options: { loop: dt },
		}) => {
			dt || dn.constrain(Ft.pointerDown()), Te.seek();
		},
		R = (
			{
				scrollBody: Ft,
				translate: Te,
				location: dn,
				offsetLocation: dt,
				scrollLooper: cr,
				slideLooper: Qe,
				dragHandler: Tn,
				animation: Sn,
				eventHandler: qe,
				options: { loop: pn },
			},
			G,
		) => {
			const Ze = Ft.velocity(),
				ge = Ft.settled();
			ge && !Tn.pointerDown() && (Sn.stop(), qe.emit("settle")),
				ge || qe.emit("scroll"),
				dt.set(dn.get() - Ze + Ze * G),
				pn && (cr.loop(Ft.direction()), Qe.loop()),
				Te.to(dt.get());
		},
		q = Sc(
			n,
			r,
			() => A(oe),
			(Ft) => R(oe, Ft),
		),
		st = 0.68,
		Ot = rt[ft.get()],
		S = qi(Ot),
		Dt = qi(Ot),
		Bt = qi(Ot),
		_e = Ac(S, Dt, Bt, p, st),
		_t = Yc(f, rt, it, at, Bt),
		Le = Xc(q, ft, Rt, _e, _t, Bt, s),
		Ke = zc(at),
		hn = gi(),
		It = Uc(t, e, s, d),
		{ slideRegistry: Ve } = Bc(X, y, rt, kt, Z, W),
		xt = Vc(a, e, Ve, Le, _e, hn),
		oe = {
			ownerDocument: n,
			ownerWindow: r,
			eventHandler: s,
			containerRect: C,
			slideRects: M,
			animation: q,
			axis: E,
			direction: D,
			dragHandler: Dc(
				E,
				D,
				a,
				n,
				r,
				Bt,
				Cc(E, r),
				S,
				q,
				Le,
				_e,
				_t,
				ft,
				s,
				N,
				h,
				_,
				m,
				st,
				b,
			),
			eventStore: hn,
			percentOfView: N,
			index: ft,
			indexPrevious: Rt,
			limit: at,
			location: S,
			offsetLocation: Dt,
			options: i,
			resizeHandler: Ec(t, s, r, e, E, w, T),
			scrollBody: _e,
			scrollBounds: Lc(at, Dt, Bt, _e, N),
			scrollLooper: Fc(it, at, Dt, [S, Dt, Bt]),
			scrollProgress: Ke,
			scrollSnapList: rt.map(Ke.get),
			scrollSnaps: rt,
			scrollTarget: _t,
			scrollTo: Le,
			slideLooper: qc(E, D, P, it, I, $, Mt, rt, Dt, e),
			slideFocus: xt,
			slidesHandler: Hc(t, s, v),
			slidesInView: It,
			slideIndexes: W,
			slideRegistry: Ve,
			slidesToScroll: Z,
			target: Bt,
			translate: Yu(E, D, t),
		};
	return oe;
}
function jc() {
	const a = {};
	let t;
	function e(u) {
		t = u;
	}
	function n(u) {
		return a[u] || [];
	}
	function r(u) {
		return n(u).forEach((l) => l(t, u)), o;
	}
	function i(u, l) {
		return (a[u] = n(u).concat([l])), o;
	}
	function s(u, l) {
		return (a[u] = n(u).filter((c) => c !== l)), o;
	}
	const o = { init: e, emit: r, off: s, on: i };
	return o;
}
const Kc = {
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
function Qc(a) {
	function t(i, s) {
		return zu(i, s || {});
	}
	function e(i) {
		const s = i.breakpoints || {},
			o = _i(s)
				.filter((u) => a.matchMedia(u).matches)
				.map((u) => s[u])
				.reduce((u, l) => t(u, l), {});
		return t(i, o);
	}
	function n(i) {
		return i
			.map((s) => _i(s.breakpoints || {}))
			.reduce((s, o) => s.concat(o), [])
			.map(a.matchMedia);
	}
	return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: n };
}
function Zc(a) {
	let t = [];
	function e(i, s) {
		return (
			(t = s.filter(({ options: o }) => a.optionsAtMedia(o).active !== !1)),
			t.forEach((o) => o.init(i, a)),
			s.reduce((o, u) => Object.assign(o, { [u.name]: u }), {})
		);
	}
	function n() {
		t = t.filter((i) => i.destroy());
	}
	return { init: e, destroy: n };
}
function So(a, t, e) {
	const n = a.ownerDocument,
		r = n.defaultView,
		i = Qc(r),
		s = Zc(i),
		o = gi(),
		u = jc(),
		{ mergeOptions: l, optionsAtMedia: c, optionsMediaQueries: f } = i,
		{ on: p, off: h, emit: _ } = u,
		d = E;
	let g = !1,
		m,
		y = l(Kc, So.globalOptions),
		w = l(y),
		v = [],
		b,
		O,
		T;
	function C() {
		const { container: W, slides: A } = w;
		O = (Gs(W) ? a.querySelector(W) : W) || a.children[0];
		const q = Gs(A) ? O.querySelectorAll(A) : A;
		T = [].slice.call(q || O.children);
	}
	function M(W) {
		const A = Gc(a, O, T, n, r, W, u);
		if (W.loop && !A.slideLooper.canLoop()) {
			const R = Object.assign({}, W, { loop: !1 });
			return M(R);
		}
		return A;
	}
	function D(W, A) {
		g ||
			((y = l(y, W)),
			(w = c(y)),
			(v = A || v),
			C(),
			(m = M(w)),
			f([y, ...v.map(({ options: R }) => R)]).forEach((R) =>
				o.add(R, "change", E),
			),
			w.active &&
				(m.translate.to(m.location.get()),
				m.animation.init(),
				m.slidesInView.init(),
				m.slideFocus.init(),
				m.eventHandler.init(Rt),
				m.resizeHandler.init(Rt),
				m.slidesHandler.init(Rt),
				m.options.loop && m.slideLooper.loop(),
				O.offsetParent && T.length && m.dragHandler.init(Rt),
				(b = s.init(Rt, v))));
	}
	function E(W, A) {
		const R = Z();
		P(), D(l({ startIndex: R }, W), A), u.emit("reInit");
	}
	function P() {
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
	function N() {
		g || ((g = !0), o.clear(), P(), u.emit("destroy"));
	}
	function F(W, A, R) {
		!w.active ||
			g ||
			(m.scrollBody.useBaseFriction().useDuration(A === !0 ? 0 : w.duration),
			m.scrollTo.index(W, R || 0));
	}
	function X(W) {
		const A = m.index.add(1).get();
		F(A, W, -1);
	}
	function Y(W) {
		const A = m.index.add(-1).get();
		F(A, W, 1);
	}
	function I() {
		return m.index.add(1).get() !== Z();
	}
	function $() {
		return m.index.add(-1).get() !== Z();
	}
	function J() {
		return m.scrollSnapList;
	}
	function x() {
		return m.scrollProgress.get(m.location.get());
	}
	function Z() {
		return m.index.get();
	}
	function Mt() {
		return m.indexPrevious.get();
	}
	function qt() {
		return m.slidesInView.get();
	}
	function it() {
		return m.slidesInView.get(!1);
	}
	function vt() {
		return b;
	}
	function kt() {
		return m;
	}
	function rt() {
		return a;
	}
	function at() {
		return O;
	}
	function ft() {
		return T;
	}
	const Rt = {
		canScrollNext: I,
		canScrollPrev: $,
		containerNode: at,
		internalEngine: kt,
		destroy: N,
		off: h,
		on: p,
		emit: _,
		plugins: vt,
		previousScrollSnap: Mt,
		reInit: d,
		rootNode: rt,
		scrollNext: X,
		scrollPrev: Y,
		scrollProgress: x,
		scrollSnapList: J,
		scrollTo: F,
		selectedScrollSnap: Z,
		slideNodes: ft,
		slidesInView: qt,
		slidesNotInView: it,
	};
	return D(t, e), setTimeout(() => u.emit("init"), 0), Rt;
}
So.globalOptions = void 0;
const Jc = {
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
function Mo(a = {}) {
	let t,
		e,
		n,
		r = !1,
		i = !0,
		s = !1,
		o = 0,
		u = 0;
	function l(v, b) {
		e = v;
		const { mergeOptions: O, optionsAtMedia: T } = b,
			C = O(Jc, Mo.globalOptions),
			M = O(C, a);
		if (((t = T(M)), e.scrollSnapList().length <= 1)) return;
		(s = t.jump), (n = !1);
		const { eventStore: D, ownerDocument: E } = e.internalEngine(),
			P = e.rootNode(),
			N = (t.rootNode && t.rootNode(P)) || P,
			F = e.containerNode();
		e.on("pointerDown", p),
			t.stopOnInteraction || e.on("pointerUp", f),
			t.stopOnMouseEnter &&
				(D.add(N, "mouseenter", () => {
					(i = !1), p();
				}),
				t.stopOnInteraction ||
					D.add(N, "mouseleave", () => {
						(i = !0), f();
					})),
			t.stopOnFocusIn &&
				(D.add(F, "focusin", p),
				t.stopOnInteraction || D.add(F, "focusout", f)),
			D.add(E, "visibilitychange", h),
			t.playOnInit && e.on("init", f).on("reInit", f);
	}
	function c() {
		e.off("init", f).off("reInit", f).off("pointerDown", p).off("pointerUp", f),
			p(),
			cancelAnimationFrame(o),
			(o = 0),
			(n = !0),
			(r = !1);
	}
	function f() {
		if (n || !i) return;
		r || e.emit("autoplay:play");
		const { ownerWindow: v } = e.internalEngine();
		v.clearInterval(u), (u = v.setInterval(y, t.delay)), (r = !0);
	}
	function p() {
		if (n) return;
		r && e.emit("autoplay:stop");
		const { ownerWindow: v } = e.internalEngine();
		v.clearInterval(u), (u = 0), (r = !1);
	}
	function h() {
		const { ownerDocument: v } = e.internalEngine();
		if (v.visibilityState === "hidden") return (i = r), p();
		i && f();
	}
	function _(v) {
		typeof v < "u" && (s = v), (i = !0), f();
	}
	function d() {
		r && p();
	}
	function g() {
		r && _();
	}
	function m() {
		return r;
	}
	function y() {
		o = requestAnimationFrame(() => {
			const { index: v } = e.internalEngine(),
				b = v.clone().add(1).get(),
				O = e.scrollSnapList().length - 1;
			t.stopOnLastSnap && b === O && p(),
				e.canScrollNext() ? e.scrollNext(s) : e.scrollTo(0, s);
		});
	}
	return {
		name: "autoplay",
		options: a,
		init: l,
		destroy: c,
		play: _,
		stop: d,
		reset: g,
		isPlaying: m,
	};
}
Mo.globalOptions = void 0;
function tf(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function Xu(a, t = 0) {
	const e = a.getBoundingClientRect(),
		n = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	tf(n);
}
const sn = "power4.inOut",
	Dn = (a, t = !0, e = 0) => (t ? e : a);
function ef(a, t) {
	(a = ut.utils.toArray(a)), (t = t || {});
	let e = ut.timeline({
			repeat: t.repeat,
			paused: t.paused,
			defaults: { ease: "none" },
			onReverseComplete: () => e.totalTime(e.rawTime() + e.duration() * 100),
		}),
		n = a.length,
		r = a[0].offsetLeft,
		i = [],
		s = [],
		o = [],
		u = 0,
		l = (t.speed || 1) * 100,
		c = t.snap === !1 ? (y) => y : ut.utils.snap(t.snap || 1),
		f,
		p,
		h,
		_,
		d,
		g;
	for (
		ut.set(a, {
			xPercent: (y, w) => {
				let v = (s[y] = parseFloat(ut.getProperty(w, "width", "px")));
				return (
					(o[y] = c(
						(parseFloat(ut.getProperty(w, "x", "px")) / v) * 100 +
							ut.getProperty(w, "xPercent"),
					)),
					o[y]
				);
			},
		}),
			ut.set(a, { x: 0 }),
			f =
				a[n - 1].offsetLeft +
				(o[n - 1] / 100) * s[n - 1] -
				r +
				a[n - 1].offsetWidth * ut.getProperty(a[n - 1], "scaleX") +
				(parseFloat(t.paddingRight) || 0),
			g = 0;
		g < n;
		g++
	)
		(d = a[g]),
			(p = (o[g] / 100) * s[g]),
			(h = d.offsetLeft + p - r),
			(_ = h + s[g] * ut.getProperty(d, "scaleX")),
			e.to(d, { xPercent: c(((p - _) / s[g]) * 100), duration: _ / l }, 0),
			e
				.fromTo(
					d,
					{ xPercent: c(((p - _ + f) / s[g]) * 100) },
					{
						xPercent: o[g],
						duration: (p - _ + f - p) / l,
						immediateRender: !1,
					},
					_ / l,
				)
				.add("label" + g, h / l),
			(i[g] = h / l);
	function m(y, w) {
		(w = w || {}), Math.abs(y - u) > n / 2 && (y += y > u ? -n : n);
		let v = ut.utils.wrap(0, n, y),
			b = i[v];
		return (
			b > e.time() != y > u &&
				((w.modifiers = { time: ut.utils.wrap(0, e.duration()) }),
				(b += e.duration() * (y > u ? 1 : -1))),
			(u = v),
			(w.overwrite = !0),
			e.tweenTo(b, w)
		);
	}
	return (
		(e.next = (y) => m(u + 1, y)),
		(e.previous = (y) => m(u - 1, y)),
		(e.current = () => u),
		(e.toIndex = (y, w) => m(y, w)),
		(e.times = i),
		e.progress(1, !0).progress(0, !0),
		t.reversed && (e.vars.onReverseComplete(), e.reverse()),
		e
	);
}
const nf = 0.72331,
	ca = 5e3;
class rf {
	constructor() {
		Re(this, "onSlideCtaClick", (t) => {
			const e = t.currentTarget,
				n = e.closest(".js-features-carousel-item");
			if ((t.preventDefault(), n.classList.contains("is-active"))) {
				const r = e.getAttribute("href"),
					i = document.querySelector(`${r}`);
				i && Xu(i, 150);
			} else this.instance.scrollTo(parseInt(n.dataset.index, 10));
		});
		Re(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const n = this.DOM.slides[e],
				r = this.DOM.slides[this.activeIndex];
			ut.timeline({
				onStart: () => {
					t.stop(), this.progressTl.pause();
				},
				onComplete: () => {
					t.play(), this.progressTl.restart();
				},
			})
				.add(this.outSlide(n))
				.add(this.inSlide(r), "<");
		});
		Re(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				n = ut.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				n
					.to(t, { height: 66, duration: 0.8, ease: sn })
					.to(e, { opacity: 0, height: 0, duration: 0.8, ease: sn }, "-=0.8"),
				n
			);
		});
		Re(this, "inSlide", (t, e = !1) => {
			const n = t.querySelector(".js-features-carousel-item-text"),
				r = ut.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				r
					.to(t, { height: t.offsetWidth * nf, duration: Dn(0.8, e), ease: sn })
					.to(
						n,
						{ opacity: 1, height: "auto", duration: Dn(0.8, e), ease: sn },
						Dn("-=0.67", e),
					),
				r
			);
		});
		Re(this, "start", () => {
			var t, e, n;
			(n =
				(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
					? void 0
					: e.autoplay) == null || n.play(),
				(this.progressTl = ut
					.timeline({ paused: !0 })
					.to(this.DOM.progress, {
						scaleX: 1,
						duration: ca / 1e3,
						ease: "linear",
					})),
				this.progressTl.play();
		});
		this.init();
	}
	setup() {
		(this.instance = So(this.DOM.fakeCarousel, { loop: !0 }, [
			Mo({ delay: ca, playOnInit: !1 }),
		])),
			this.inSlide(this.DOM.slides[this.activeIndex], !0),
			this.DOM.slides[this.activeIndex].classList.add("is-active"),
			this.instance.on("select", this.onSlideChange);
		for (let t = 0; t < this.DOM.ctas.length; t++)
			this.DOM.ctas[t].addEventListener("click", this.onSlideCtaClick);
		this.start();
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
			for (let r = 0; r < this.DOM.ctas.length; r++)
				this.DOM.ctas[r].removeEventListener("click", this.onSlideCtaClick);
			(this.instance = void 0), (this.DOM = void 0);
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
class sf {
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
			const r = this.get(n);
			r[t] && r[t](...e);
		}
	}
	call(t, e, ...n) {
		const r = this.get(t);
		if (r && r[e]) return r[e](...n);
	}
}
const Mn = new sf();
class of {
	constructor() {
		Re(this, "scrollLinkTo", (t) => {
			t.preventDefault();
			const n = t.currentTarget.getAttribute("href"),
				r = document.querySelector(`${n}`);
			r ? Xu(r, 150) : console.warn("Target non esiste per l'id: ", n);
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
class af {
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
const Ln = new af();
class uf {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = ef(this.DOM.items, {
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
class lf {
	constructor() {
		this.init();
	}
	setup() {
		for (let t = 0; t < this.DOM.rows.length; t++) {
			const e = this.DOM.rows[t];
			e &&
				this.instances.push(
					new uf({
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
ut.registerPlugin(j);
class cf {
	constructor() {
		Re(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		Re(this, "hideNav", (t = !1, e = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const n = ut.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), e && e();
					},
				});
				return (
					n
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: Dn(0.8, t),
							stagger: Dn(0.1, t),
							onComplete: () => {
								ut.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: sn,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: Dn(0.8, t),
								onComplete: () => {
									ut.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: sn,
							},
							Dn(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: Dn(0.8, t),
							onComplete: () => {
								ut.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: sn,
						})
						.set(this.DOM.navMobile, {
							zIndex: -1,
							visibility: "hidden",
							pointerEvents: "none",
						}),
					n
				);
			}
		});
		Re(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = ut.timeline({
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
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: sn })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: sn },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: sn },
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
		this.headTrigger = j.create({
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
			n = t.querySelector(".js-nav-mobile");
		e &&
			n &&
			((this.DOM = {}),
			(this.DOM.nav = e),
			(this.DOM.navMobile = n),
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
ut.registerPlugin(j);
class ff {
	constructor() {
		Re(this, "buildCardsTl", () => {
			const t = ut.timeline();
			for (let e = 0; e < this.DOM.cards.length; e++) {
				const n = this.DOM.cards[e],
					r = ut.timeline();
				r
					.from(n, { y: Ln.window.height * 0.5, duration: 1.4 })
					.to(
						n,
						{
							y: () => e * 10,
							scale: () => 1 - (this.DOM.cards.length - e) * 0.02,
							duration: 0.8,
						},
						1.5,
					),
					t.add(r, e === 0 ? 0 : "-=1.25");
			}
			return t;
		});
		this.init();
	}
	setup() {
		ut.matchMedia().add({ isDesk: "(min-width: 1024px)" }, (e) => {
			const { isDesk: n } = e.conditions;
			n && this.setTrigger();
		});
	}
	setTrigger() {
		const t = ut.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=20%",
					end: `+=${Ln.window.height * 5}`,
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
			this.setup());
	}
}
class hf {
	constructor() {
		this.init();
	}
	resize() {
		this.winW !== Ln.window.width &&
			((this.winW = Ln.window.width), this.setup());
	}
	setup() {
		const t = Ln.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = Ln.window.width), this.setup();
	}
}
function fa(a, t, e) {
	var n;
	return function () {
		var r = this,
			i = arguments,
			s = function () {
				(n = null), e || a.apply(r, i);
			},
			o = e && !n;
		clearTimeout(n), (n = setTimeout(s, t)), o && a.apply(r, i);
	};
}
function ha() {
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
class df {
	constructor() {
		Re(this, "onResize", () => {
			Ln.resize(),
				document.body.classList.toggle("is-touch", ha()),
				Mn.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", ha());
		}),
			window.addEventListener("load", () => {
				Ln.init(),
					Mn.add("viewportFixer", new hf()),
					Mn.add("nav", new cf()),
					Mn.add("hashScroll", new of()),
					Mn.add("featuresCarousel", new rf()),
					Mn.add("marqueeManager", new lf()),
					Mn.add("computeBlock", new wc()),
					Mn.add("testimonials", new ff());
			}),
			window.addEventListener("resize", fa(this.onResize, 150)),
			window.addEventListener("orientationchange", fa(this.onResize, 150));
	}
}
const pf = new df();
pf.start();
