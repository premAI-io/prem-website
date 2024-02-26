var qu = Object.defineProperty;
var Hu = (a, t, e) =>
	t in a
		? qu(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
		: (a[t] = e);
var Ie = (a, t, e) => (Hu(a, typeof t != "symbol" ? t + "" : t, e), e);
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
function mn(a) {
	if (a === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return a;
}
function pa(a, t) {
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
 */ var Ae = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	Or = { duration: 0.5, overwrite: !1, delay: 0 },
	Ks,
	se,
	mt,
	Ye = 1e8,
	ht = 1 / Ye,
	Ss = Math.PI * 2,
	Uu = Ss / 4,
	$u = 0,
	_a = Math.sqrt,
	Wu = Math.cos,
	Gu = Math.sin,
	jt = function (t) {
		return typeof t == "string";
	},
	Ct = function (t) {
		return typeof t == "function";
	},
	Tn = function (t) {
		return typeof t == "number";
	},
	Qs = function (t) {
		return typeof t > "u";
	},
	hn = function (t) {
		return typeof t == "object";
	},
	ve = function (t) {
		return t !== !1;
	},
	Zs = function () {
		return typeof window < "u";
	},
	wi = function (t) {
		return Ct(t) || jt(t);
	},
	ga =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
	oe = Array.isArray,
	Ms = /(?:-?\.?\d|\.)+/gi,
	ma = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	mr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	as = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	ya = /[+-]=-?[.\d]+/,
	va = /[^,'"\[\]\s]+/gi,
	ju = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Tt,
	sn,
	Os,
	Js,
	Re = {},
	Hi = {},
	xa,
	wa = function (t) {
		return (Hi = rr(t, Re)) && Te;
	},
	to = function (t, e) {
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
	ba = function (t, e) {
		return (t && (Re[t] = e) && Hi && (Hi[t] = e)) || Re;
	},
	oi = function () {
		return 0;
	},
	Ku = { suppressEvents: !0, isStart: !0, kill: !1 },
	Li = { suppressEvents: !0, kill: !1 },
	Qu = { suppressEvents: !0 },
	eo = {},
	Ln = [],
	Ds = {},
	Ta,
	Pe = {},
	us = {},
	Po = 30,
	Ii = [],
	no = "",
	ro = function (t) {
		var e = t[0],
			n,
			r;
		if ((hn(e) || Ct(e) || (t = [t]), !(n = (e._gsap || {}).harness))) {
			for (r = Ii.length; r-- && !Ii[r].targetTest(e); );
			n = Ii[r];
		}
		for (r = t.length; r--; )
			(t[r] && (t[r]._gsap || (t[r]._gsap = new Wa(t[r], n)))) ||
				t.splice(r, 1);
		return t;
	},
	Kn = function (t) {
		return t._gsap || ro(Ve(t))[0]._gsap;
	},
	Sa = function (t, e, n) {
		return (n = t[e]) && Ct(n)
			? t[e]()
			: (Qs(n) && t.getAttribute && t.getAttribute(e)) || n;
	},
	xe = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	At = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Gt = function (t) {
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
	Zu = function (t, e) {
		for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
		return r < n;
	},
	Ui = function () {
		var t = Ln.length,
			e = Ln.slice(0),
			n,
			r;
		for (Ds = {}, Ln.length = 0, n = 0; n < t; n++)
			(r = e[n]),
				r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
	},
	Ma = function (t, e, n, r) {
		Ln.length && !se && Ui(),
			t.render(e, n, r || (se && e < 0 && (t._initted || t._startAt))),
			Ln.length && !se && Ui();
	},
	Oa = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + "").match(va).length < 2
			? e
			: jt(t)
				? t.trim()
				: t;
	},
	Da = function (t) {
		return t;
	},
	qe = function (t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t;
	},
	Ju = function (t) {
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
				(t[n] = hn(e[n]) ? a(t[n] || (t[n] = {}), e[n]) : e[n]);
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
			n = t.keyframes ? Ju(oe(t.keyframes)) : qe;
		if (ve(t.inherit))
			for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	tl = function (t, e) {
		for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; );
		return n < 0;
	},
	Pa = function (t, e, n, r, i) {
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
	el = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	Ps = function (t, e, n, r) {
		return (
			t._startAt &&
			(se
				? t._startAt.revert(Li)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, r))
		);
	},
	nl = function a(t) {
		return !t || (t._ts && a(t.parent));
	},
	ko = function (t) {
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
		return (t._end = Gt(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || ht) || 0),
		));
	},
	is = function (t, e) {
		var n = t._dp;
		return (
			n &&
				n.smoothChildTiming &&
				t._ts &&
				((t._start = Gt(
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
	an = function (t, e, n, r) {
		return (
			e.parent && zn(e),
			(e._start = Gt(
				(Tn(n) ? n : n || t !== Tt ? Fe(t, n, e) : t._time) + e._delay,
			)),
			(e._end = Gt(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			Pa(t, e, "_first", "_last", t._sort ? "_start" : 0),
			Cs(e) || (t._recent = e),
			r || Ca(t, e),
			t._ts < 0 && is(t, t._tTime),
			t
		);
	},
	ka = function (t, e) {
		return (
			(Re.ScrollTrigger || to("scrollTrigger", e)) &&
			Re.ScrollTrigger.create(e, t)
		);
	},
	Ea = function (t, e, n, r, i) {
		if ((so(t, e, i), !t._initted)) return 1;
		if (
			!n &&
			t._pt &&
			!se &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			Ta !== Ce.frame
		)
			return Ln.push(t), (t._lazy = [i, r]), 1;
	},
	rl = function a(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
	},
	Cs = function (t) {
		var e = t.data;
		return e === "isFromStart" || e === "isStart";
	},
	il = function (t, e, n, r) {
		var i = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && rl(t) && !(!t._initted && Cs(t))) ||
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
			s !== i || se || r || t._zTime === ht || (!e && t._zTime))
		) {
			if (!t._initted && Ea(t, e, r, n, u)) return;
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
			e < 0 && Ps(t, e, n, !0),
				t._onUpdate && !n && Ee(t, "onUpdate"),
				u && t._repeat && !n && t.parent && Ee(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && zn(t, 1),
					!n &&
						!se &&
						(Ee(t, s ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	sl = function (t, e, n) {
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
	Pr = function (t, e, n, r) {
		var i = t._repeat,
			s = Gt(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !r && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = i ? (i < 0 ? 1e10 : Gt(s * (i + 1) + t._rDelay * i)) : s),
			o > 0 && !r && is(t, (t._tTime = t._tDur * o)),
			t.parent && rs(t),
			n || Qn(t.parent, t),
			t
		);
	},
	Eo = function (t) {
		return t instanceof de ? Qn(t) : Pr(t, t._dur);
	},
	ol = { _start: 0, endTime: oi, totalDuration: oi },
	Fe = function a(t, e, n) {
		var r = t.labels,
			i = t._recent || ol,
			s = t.duration() >= Ye ? i.endTime(!1) : t._dur,
			o,
			u,
			l;
		return jt(e) && (isNaN(e) || e in r)
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
							l && n && (u = (u / 100) * (oe(n) ? n[0] : n).totalDuration()),
							o > 1 ? a(t, e.substr(0, o - 1), n) + u : s + u))
			: e == null
				? s
				: +e;
	},
	Wr = function (t, e, n) {
		var r = Tn(e[1]),
			i = (r ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[i],
			o,
			u;
		if ((r && (s.duration = e[1]), (s.parent = n), t)) {
			for (o = s, u = n; u && !("immediateRender" in o); )
				(o = u.vars.defaults || {}), (u = ve(u.vars.inherit) && u.parent);
			(s.immediateRender = ve(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[i - 1]);
		}
		return new Bt(e[0], s, e[i + 1]);
	},
	Yn = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	mi = function (t, e, n) {
		return n < t ? t : n > e ? e : n;
	},
	ie = function (t, e) {
		return !jt(t) || !(e = ju.exec(t)) ? "" : e[1];
	},
	al = function (t, e, n) {
		return Yn(n, function (r) {
			return mi(t, e, r);
		});
	},
	ks = [].slice,
	Aa = function (t, e) {
		return (
			t &&
			hn(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && hn(t[0]))) &&
			!t.nodeType &&
			t !== sn
		);
	},
	ul = function (t, e, n) {
		return (
			n === void 0 && (n = []),
			t.forEach(function (r) {
				var i;
				return (jt(r) && !e) || Aa(r, 1)
					? (i = n).push.apply(i, Ve(r))
					: n.push(r);
			}) || n
		);
	},
	Ve = function (t, e, n) {
		return mt && !e && mt.selector
			? mt.selector(t)
			: jt(t) && !n && (Os || !Cr())
				? ks.call((e || Js).querySelectorAll(t), 0)
				: oe(t)
					? ul(t, n)
					: Aa(t)
						? ks.call(t, 0)
						: t
							? [t]
							: [];
	},
	Es = function (t) {
		return (
			(t = Ve(t)[0] || si("Invalid scope") || {}),
			function (e) {
				var n = t.current || t.nativeElement || t;
				return Ve(
					e,
					n.querySelectorAll
						? n
						: n === t
							? si("Invalid scope") || Js.createElement("div")
							: t,
				);
			}
		);
	},
	Ra = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	La = function (t) {
		if (Ct(t)) return t;
		var e = hn(t) ? t : { each: t },
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
			jt(r)
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
					P,
					M;
				if (!g) {
					if (((M = e.grid === "auto" ? 0 : (e.grid || [1, Ye])[1]), !M)) {
						for (
							T = -Ye;
							T < (T = _[M++].getBoundingClientRect().left) && M < d;

						);
						M < d && M--;
					}
					for (
						g = s[d] = [],
							m = u ? Math.min(M, d) * c - 0.5 : r % M,
							y = M === Ye ? 0 : u ? (d * f) / M - 0.5 : (r / M) | 0,
							T = 0,
							P = Ye,
							O = 0;
						O < d;
						O++
					)
						(w = (O % M) - m),
							(v = y - ((O / M) | 0)),
							(g[O] = b = l ? Math.abs(l === "y" ? v : w) : _a(w * w + v * v)),
							b > T && (T = b),
							b < P && (P = b);
					r === "random" && Ra(g),
						(g.max = T - P),
						(g.min = P),
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
						(g.u = ie(e.amount || e.each) || 0),
						(n = n && d < 0 ? Ha(n) : n);
				}
				return (
					(d = (g[p] - g.min) / g.max || 0),
					Gt(g.b + (n ? n(d) : d) * g.v) + g.u
				);
			}
		);
	},
	As = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (n) {
			var r = Gt(Math.round(parseFloat(n) / t) * t * e);
			return (r - (r % 1)) / e + (Tn(n) ? 0 : ie(n));
		};
	},
	Ia = function (t, e) {
		var n = oe(t),
			r,
			i;
		return (
			!n &&
				hn(t) &&
				((r = n = t.radius || Ye),
				t.values
					? ((t = Ve(t.values)), (i = !Tn(t[0])) && (r *= r))
					: (t = As(t.increment))),
			Yn(
				e,
				n
					? Ct(t)
						? function (s) {
								return (i = t(s)), Math.abs(i - s) <= r ? i : s;
							}
						: function (s) {
								for (
									var o = parseFloat(i ? s.x : s),
										u = parseFloat(i ? s.y : 0),
										l = Ye,
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
									i || c === s || Tn(s) ? c : c + ie(s)
								);
							}
					: As(t),
			)
		);
	},
	Fa = function (t, e, n, r) {
		return Yn(oe(t) ? !e : n === !0 ? !!(n = 0) : !r, function () {
			return oe(t)
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
	ll = function () {
		for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
			e[n] = arguments[n];
		return function (r) {
			return e.reduce(function (i, s) {
				return s(i);
			}, r);
		};
	},
	cl = function (t, e) {
		return function (n) {
			return t(parseFloat(n)) + (e || ie(n));
		};
	},
	fl = function (t, e, n) {
		return Na(t, e, 0, 1, n);
	},
	za = function (t, e, n) {
		return Yn(n, function (r) {
			return t[~~e(r)];
		});
	},
	hl = function a(t, e, n) {
		var r = e - t;
		return oe(t)
			? za(t, a(0, t.length), e)
			: Yn(n, function (i) {
					return ((r + ((i - t) % r)) % r) + t;
				});
	},
	dl = function a(t, e, n) {
		var r = e - t,
			i = r * 2;
		return oe(t)
			? za(t, a(0, t.length - 1), e)
			: Yn(n, function (s) {
					return (s = (i + ((s - t) % i)) % i || 0), t + (s > r ? i - s : s);
				});
	},
	ai = function (t) {
		for (var e = 0, n = "", r, i, s, o; ~(r = t.indexOf("random(", e)); )
			(s = t.indexOf(")", r)),
				(o = t.charAt(r + 7) === "["),
				(i = t.substr(r + 7, s - r - 7).match(o ? va : Ms)),
				(n +=
					t.substr(e, r - e) + Fa(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5)),
				(e = s + 1);
		return n + t.substr(e, t.length - e);
	},
	Na = function (t, e, n, r, i) {
		var s = e - t,
			o = r - n;
		return Yn(i, function (u) {
			return n + (((u - t) / s) * o || 0);
		});
	},
	pl = function a(t, e, n, r) {
		var i = isNaN(t + e)
			? 0
			: function (h) {
					return (1 - h) * t + h * e;
				};
		if (!i) {
			var s = jt(t),
				o = {},
				u,
				l,
				c,
				f,
				p;
			if ((n === !0 && (r = 1) && (n = null), s))
				(t = { p: t }), (e = { p: e });
			else if (oe(t) && !oe(e)) {
				for (c = [], f = t.length, p = f - 2, l = 1; l < f; l++)
					c.push(a(t[l - 1], t[l]));
				f--,
					(i = function (_) {
						_ *= f;
						var d = Math.min(p, ~~_);
						return c[d](_ - d);
					}),
					(n = e);
			} else r || (t = rr(oe(t) ? [] : {}, t));
			if (!c) {
				for (u in e) io.call(o, t, u, "get", e[u]);
				i = function (_) {
					return uo(_, o) || (s ? t.p : t);
				};
			}
		}
		return Yn(n, i);
	},
	Ao = function (t, e, n) {
		var r = t.labels,
			i = Ye,
			s,
			o,
			u;
		for (s in r)
			(o = r[s] - e),
				o < 0 == !!n && o && i > (o = Math.abs(o)) && ((u = s), (i = o));
		return u;
	},
	Ee = function (t, e, n) {
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
				n && Ln.length && Ui(),
				o && (mt = o),
				(c = u ? i.apply(l, u) : i.call(l)),
				(mt = s),
				c
			);
	},
	Br = function (t) {
		return (
			zn(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!se),
			t.progress() < 1 && Ee(t, "onInterrupt"),
			t
		);
	},
	yr,
	Ba = [],
	Ya = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), Zs() || t.headless)) {
				var e = t.name,
					n = Ct(t),
					r =
						e && !n && t.init
							? function () {
									this._props = [];
								}
							: t,
					i = {
						init: oi,
						render: uo,
						add: io,
						kill: kl,
						modifier: Cl,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: ao,
						aliases: {},
						register: 0,
					};
				if ((Cr(), t !== r)) {
					if (Pe[e]) return;
					qe(r, qe($i(t, i), s)),
						rr(r.prototype, rr(i, $i(t, s))),
						(Pe[(r.prop = e)] = r),
						t.targetTest && (Ii.push(r), (eo[e] = 1)),
						(e =
							(e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				ba(e, r), t.register && t.register(Te, r, we);
			} else Ba.push(t);
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
	Va = function (t, e, n) {
		var r = t ? (Tn(t) ? [t >> 16, (t >> 8) & ct, t & ct] : 0) : Yr.black,
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
				if (((r = _ = t.match(Ms)), !e))
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
					return (r = t.match(ma)), n && r.length < 4 && (r[3] = 1), r;
			} else r = t.match(Ms) || Yr.transparent;
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
	Ro = function (t, e, n) {
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
					(p = Va(p, e, 1)) &&
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
	_l = /hsl[a]?\(/,
	qa = function (t) {
		var e = t.join(" "),
			n;
		if (((In.lastIndex = 0), In.test(e)))
			return (
				(n = _l.test(e)),
				(t[1] = Ro(t[1], n)),
				(t[0] = Ro(t[0], n, Xa(t[1]))),
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
					xa &&
						(!Os &&
							Zs() &&
							((sn = Os = window),
							(Js = sn.document || {}),
							(Re.gsap = Te),
							(sn.gsapVersions || (sn.gsapVersions = [])).push(Te.version),
							wa(Hi || sn.GreenSockGlobals || (!sn.gsap && sn) || {}),
							Ba.forEach(Ya)),
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
					return f.remove(g), o[y ? "unshift" : "push"](w), Cr(), w;
				},
				remove: function (g, m) {
					~(m = o.indexOf(g)) && o.splice(m, 1) && h >= m && h--;
				},
				_listeners: o,
			}),
			f
		);
	})(),
	Cr = function () {
		return !ui && Ce.wake();
	},
	rt = {},
	gl = /^[\d.\-M][\d.\-,\s]/,
	ml = /["']/g,
	yl = function (t) {
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
				(e[r] = isNaN(l) ? l.replace(ml, "").trim() : +l),
				(r = u.substr(o + 1).trim());
		return e;
	},
	vl = function (t) {
		var e = t.indexOf("(") + 1,
			n = t.indexOf(")"),
			r = t.indexOf("(", e);
		return t.substring(e, ~r && r < n ? t.indexOf(")", n + 1) : n);
	},
	xl = function (t) {
		var e = (t + "").split("("),
			n = rt[e[0]];
		return n && e.length > 1 && n.config
			? n.config.apply(
					null,
					~t.indexOf("{") ? [yl(e[1])] : vl(t).split(",").map(Oa),
				)
			: rt._CE && gl.test(t)
				? rt._CE("", t)
				: n;
	},
	Ha = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	Ua = function a(t, e) {
		for (var n = t._first, r; n; )
			n instanceof de
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
		return (t && (Ct(t) ? t : rt[t] || xl(t))) || e;
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
			xe(t, function (o) {
				(rt[o] = Re[o] = i), (rt[(s = o.toLowerCase())] = n);
				for (var u in i)
					rt[
						s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
					] = rt[o + "." + u] = i[u];
			}),
			i
		);
	},
	$a = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	cs = function a(t, e, n) {
		var r = e >= 1 ? e : 1,
			i = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (i / Ss) * (Math.asin(1 / r) || 0),
			o = function (c) {
				return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Gu((c - s) * i) + 1;
			},
			u =
				t === "out"
					? o
					: t === "in"
						? function (l) {
								return 1 - o(1 - l);
							}
						: $a(o);
		return (
			(i = Ss / i),
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
						: $a(n);
		return (
			(r.config = function (i) {
				return a(t, i);
			}),
			r
		);
	};
xe("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
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
rt.Linear.easeNone = rt.none = rt.Linear.easeIn;
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
	return -(_a(1 - a * a) - 1);
});
lr("Sine", function (a) {
	return a === 1 ? 1 : -Wu(a * Uu) + 1;
});
lr("Back", fs("in"), fs("out"), fs());
rt.SteppedEase =
	rt.steps =
	Re.SteppedEase =
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
Or.ease = rt["quad.out"];
xe(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (a) {
		return (no += a + "," + a + "Params,");
	},
);
var Wa = function (t, e) {
		(this.id = $u++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : Sa),
			(this.set = e ? e.getSetter : ao);
	},
	li = (function () {
		function a(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				Pr(this, +e.duration, 1, 1),
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
						Pr(
							this,
							this._repeat < 0
								? n
								: (n - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(t.totalTime = function (n, r) {
				if ((Cr(), !arguments.length)) return this._tTime;
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
						an(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== n ||
						(!this._dur && !r) ||
						(this._initted && Math.abs(this._zTime) === ht) ||
						(!n && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = n), Ma(this, n, r)),
					this
				);
			}),
			(t.time = function (n, r) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), n + ko(this)) %
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
								ko(this),
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
					el(this)
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
								: (Cr(),
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
						r && (r._sort || !this.parent) && an(r, this, n - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (n) {
				return (
					this._start +
					(ve(n) ? this.totalDuration() : this.duration()) /
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
				n === void 0 && (n = Qu);
				var r = se;
				return (
					(se = n),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(n),
						this.totalTime(-0.01, n.suppressEvents)),
					this.data !== "nested" && n.kill !== !1 && this.kill(),
					(se = r),
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
					? ((this._repeat = n === 1 / 0 ? -2 : n), Eo(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(t.repeatDelay = function (n) {
				if (arguments.length) {
					var r = this._time;
					return (this._rDelay = n), Eo(this), r ? this.time(r) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (n) {
				return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
			}),
			(t.seek = function (n, r) {
				return this.totalTime(Fe(this, n), ve(r));
			}),
			(t.restart = function (n, r) {
				return this.play().totalTime(n ? -this._delay : 0, ve(r));
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
					var s = Ct(n) ? n : Da,
						o = function () {
							var l = r.then;
							(r.then = null),
								Ct(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
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
qe(li.prototype, {
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
var de = (function (a) {
	pa(t, a);
	function t(n, r) {
		var i;
		return (
			n === void 0 && (n = {}),
			(i = a.call(this, n) || this),
			(i.labels = {}),
			(i.smoothChildTiming = !!n.smoothChildTiming),
			(i.autoRemoveChildren = !!n.autoRemoveChildren),
			(i._sort = ve(n.sortChildren)),
			Tt && an(n.parent || Tt, mn(i), r),
			n.reversed && i.reverse(),
			n.paused && i.paused(!0),
			n.scrollTrigger && ka(mn(i), n.scrollTrigger),
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
				new Bt(r, i, Fe(this, s), 1),
				this
			);
		}),
		(e.call = function (r, i, s) {
			return an(this, Bt.delayedCall(0, r, i), s);
		}),
		(e.staggerTo = function (r, i, s, o, u, l, c) {
			return (
				(s.duration = i),
				(s.stagger = s.stagger || o),
				(s.onComplete = l),
				(s.onCompleteParams = c),
				(s.parent = this),
				new Bt(r, s, Fe(this, u)),
				this
			);
		}),
		(e.staggerFrom = function (r, i, s, o, u, l, c) {
			return (
				(s.runBackwards = 1),
				($r(s).immediateRender = ve(s.immediateRender)),
				this.staggerTo(r, i, s, o, u, l, c)
			);
		}),
		(e.staggerFromTo = function (r, i, s, o, u, l, c, f) {
			return (
				(o.startAt = s),
				($r(o).immediateRender = ve(o.immediateRender)),
				this.staggerTo(r, i, o, u, l, c, f)
			);
		}),
		(e.render = function (r, i, s) {
			var o = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				l = this._dur,
				c = r <= 0 ? 0 : Gt(r),
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
						((p = Gt(c % g)),
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
						var P = O && b & 1,
							M = P === (O && d & 1);
						if (
							(d < b && (P = !P),
							(o = P ? 0 : c % l ? l : c),
							(this._lock = 1),
							(this.render(o || (T ? 0 : Gt(d * g)), i, !l)._lock = 0),
							(this._tTime = c),
							!i && this.parent && Ee(this, "onRepeat"),
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
								(o = P ? l : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !T && this.invalidate()),
							(this._lock = 0),
							!this._ts && !m)
						)
							return this;
						Ua(this, T);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = sl(this, Gt(o), Gt(p))), y && (c -= p - (p = y._start))),
					(this._tTime = c),
					(this._time = p),
					(this._act = !w),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = r),
						(o = 0)),
					!o && p && !i && !d && (Ee(this, "onStart"), this._tTime !== c))
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
									s || (se && (h._initted || h._startAt)),
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
				this._onUpdate && !i && Ee(this, "onUpdate", !0),
					((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
						(v === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
						(this._lock ||
							((r || !l) &&
								((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
								zn(this, 1),
							!i &&
								!(r < 0 && !o) &&
								(c || o || !u) &&
								(Ee(
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
			if ((Tn(i) || (i = Fe(this, i, r)), !(r instanceof li))) {
				if (oe(r))
					return (
						r.forEach(function (o) {
							return s.add(o, i);
						}),
						this
					);
				if (jt(r)) return this.addLabel(r, i);
				if (Ct(r)) r = Bt.delayedCall(0, r);
				else return this;
			}
			return this !== r ? an(this, r, i) : this;
		}),
		(e.getChildren = function (r, i, s, o) {
			r === void 0 && (r = !0),
				i === void 0 && (i = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -Ye);
			for (var u = [], l = this._first; l; )
				l._start >= o &&
					(l instanceof Bt
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
			return jt(r)
				? this.removeLabel(r)
				: Ct(r)
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
						(this._start = Gt(
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
			return (this.labels[r] = Fe(this, i)), this;
		}),
		(e.removeLabel = function (r) {
			return delete this.labels[r], this;
		}),
		(e.addPause = function (r, i, s) {
			var o = Bt.delayedCall(0, i || oi, s);
			return (
				(o.data = "isPause"), (this._hasPause = 1), an(this, o, Fe(this, r))
			);
		}),
		(e.removePause = function (r) {
			var i = this._first;
			for (r = Fe(this, r); i; )
				i._start === r && i.data === "isPause" && zn(i), (i = i._next);
		}),
		(e.killTweensOf = function (r, i, s) {
			for (var o = this.getTweensOf(r, s), u = o.length; u--; )
				Cn !== o[u] && o[u].kill(r, i);
			return this;
		}),
		(e.getTweensOf = function (r, i) {
			for (var s = [], o = Ve(r), u = this._first, l = Tn(i), c; u; )
				u instanceof Bt
					? Zu(u._targets, o) &&
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
				o = Fe(s, r),
				u = i,
				l = u.startAt,
				c = u.onStart,
				f = u.onStartParams,
				p = u.immediateRender,
				h,
				_ = Bt.to(
					s,
					qe(
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
									_._dur !== g && Pr(_, g, 0, 1).render(_._time, !0, !0),
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
			return this.tweenTo(i, qe({ startAt: { time: Fe(this, r) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (r) {
			return r === void 0 && (r = this._time), Ao(this, Fe(this, r));
		}),
		(e.previousLabel = function (r) {
			return r === void 0 && (r = this._time), Ao(this, Fe(this, r), 1);
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
				u = Ye,
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
							? ((s._lock = 1), (an(s, o, c - o._delay, 1)._lock = 0))
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
				Pr(s, s === Tt && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (r) {
			if ((Tt._ts && (Ma(Tt, Wi(r, Tt)), (Ta = Ce.frame)), Ce.frame >= Po)) {
				Po += Ae.autoSleep || 120;
				var i = Tt._first;
				if ((!i || !i._ts) && Ae.autoSleep && Ce._listeners.length < 2) {
					for (; i && !i._ts; ) i = i._next;
					i || Ce.sleep();
				}
			}
		}),
		t
	);
})(li);
qe(de.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var wl = function (t, e, n, r, i, s, o) {
		var u = new we(this._pt, t, e, 0, 1, Ja, null, i),
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
			(ya.test(r) || m) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	io = function (t, e, n, r, i, s, o, u, l, c) {
		Ct(r) && (r = r(i || 0, t, s));
		var f = t[e],
			p =
				n !== "get"
					? n
					: Ct(f)
						? l
							? t[
									e.indexOf("set") || !Ct(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](l)
							: t[e]()
						: f,
			h = Ct(f) ? (l ? Ol : Qa) : oo,
			_;
		if (
			(jt(r) &&
				(~r.indexOf("random(") && (r = ai(r)),
				r.charAt(1) === "=" &&
					((_ = xr(p, r) + (ie(p) || 0)), (_ || _ === 0) && (r = _))),
			!c || p !== r || Rs)
		)
			return !isNaN(p * r) && r !== ""
				? ((_ = new we(
						this._pt,
						t,
						e,
						+p || 0,
						r - (p || 0),
						typeof f == "boolean" ? Pl : Za,
						0,
						h,
					)),
					l && (_.fp = l),
					o && _.modifier(o, this, t),
					(this._pt = _))
				: (!f && !(e in t) && to(e, r),
					wl.call(this, t, e, p, r, h, u || Ae.stringFilter, l));
	},
	bl = function (t, e, n, r, i) {
		if (
			(Ct(t) && (t = Gr(t, i, e, n, r)),
			!hn(t) || (t.style && t.nodeType) || oe(t) || ga(t))
		)
			return jt(t) ? Gr(t, i, e, n, r) : t;
		var s = {},
			o;
		for (o in t) s[o] = Gr(t[o], i, e, n, r);
		return s;
	},
	Ga = function (t, e, n, r, i, s) {
		var o, u, l, c;
		if (
			Pe[t] &&
			(o = new Pe[t]()).init(
				i,
				o.rawVars ? e[t] : bl(e[t], r, i, s, n),
				n,
				r,
				s,
			) !== !1 &&
			((n._pt = u = new we(n._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
			n !== yr)
		)
			for (l = n._ptLookup[n._targets.indexOf(i)], c = o._props.length; c--; )
				l[o._props[c]] = u;
		return o;
	},
	Cn,
	Rs,
	so = function a(t, e, n) {
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
			w = t._overwrite === "auto" && !Ks,
			v = t.timeline,
			b,
			O,
			T,
			P,
			M,
			D,
			E,
			C,
			N,
			F,
			V,
			Y,
			I;
		if (
			(v && (!p || !i) && (i = "none"),
			(t._ease = Zn(i, Or.ease)),
			(t._yEase = f ? Ha(Zn(f === !0 ? i : f, Or.ease)) : 0),
			f &&
				t._yoyo &&
				!t._repeat &&
				((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
			(t._from = !v && !!r.runBackwards),
			!v || (p && !r.stagger))
		) {
			if (
				((C = g[0] ? Kn(g[0]).harness : 0),
				(Y = C && r[C.prop]),
				(b = $i(r, eo)),
				d &&
					(d._zTime < 0 && d.progress(1),
					e < 0 && c && o && !h ? d.render(-1, !0) : d.revert(c && _ ? Li : Ku),
					(d._lazy = 0)),
				s)
			) {
				if (
					(zn(
						(t._startAt = Bt.set(
							g,
							qe(
								{
									data: "isStart",
									overwrite: !1,
									parent: m,
									immediateRender: !0,
									lazy: !d && ve(u),
									startAt: null,
									delay: 0,
									onUpdate:
										l &&
										function () {
											return Ee(t, "onUpdate");
										},
									stagger: 0,
								},
								s,
							),
						)),
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (se || (!o && !h)) && t._startAt.revert(Li),
					o && _ && e <= 0 && n <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (c && _ && !d) {
				if (
					(e && (o = !1),
					(T = qe(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: o && !d && ve(u),
							immediateRender: o,
							stagger: 0,
							parent: m,
						},
						b,
					)),
					Y && (T[C.prop] = Y),
					zn((t._startAt = Bt.set(g, T))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (se ? t._startAt.revert(Li) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					a(t._startAt, ht, ht);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, u = (_ && ve(u)) || (u && !_), O = 0;
				O < g.length;
				O++
			) {
				if (
					((M = g[O]),
					(E = M._gsap || ro(g)[O]._gsap),
					(t._ptLookup[O] = F = {}),
					Ds[E.id] && Ln.length && Ui(),
					(V = y === g ? O : y.indexOf(M)),
					C &&
						(N = new C()).init(M, Y || b, t, V, y) !== !1 &&
						((t._pt = P =
							new we(t._pt, M, N.name, 0, 1, N.render, N, 0, N.priority)),
						N._props.forEach(function ($) {
							F[$] = P;
						}),
						N.priority && (D = 1)),
					!C || Y)
				)
					for (T in b)
						Pe[T] && (N = Ga(T, b, t, V, M, y))
							? N.priority && (D = 1)
							: (F[T] = P =
									io.call(t, M, T, "get", b[T], V, y, 0, r.stringFilter));
				t._op && t._op[O] && t.kill(M, t._op[O]),
					w &&
						t._pt &&
						((Cn = t),
						Tt.killTweensOf(M, F, t.globalTime(e)),
						(I = !t.parent),
						(Cn = 0)),
					t._pt && u && (Ds[E.id] = 1);
			}
			D && tu(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = l),
			(t._initted = (!t._op || t._pt) && !I),
			p && e <= 0 && v.render(Ye, !0, !0);
	},
	Tl = function (t, e, n, r, i, s, o, u) {
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
						(Rs = 1),
						(t.vars[e] = "+=0"),
						so(t, o),
						(Rs = 0),
						u ? si(e + " not eligible for reset") : 1
					);
				l.push(c);
			}
		for (h = l.length; h--; )
			(f = l[h]),
				(c = f._pt || f),
				(c.s = (r || r === 0) && !i ? r : c.s + (r || 0) + s * c.c),
				(c.c = n - c.s),
				f.e && (f.e = At(n) + ie(f.e)),
				f.b && (f.b = c.s + ie(f.b));
	},
	Sl = function (t, e) {
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
	Ml = function (t, e, n, r) {
		var i = e.ease || r || "power1.inOut",
			s,
			o;
		if (oe(e))
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
		return Ct(t)
			? t.call(e, n, r, i)
			: jt(t) && ~t.indexOf("random(")
				? ai(t)
				: t;
	},
	ja = no + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	Ka = {};
xe(ja + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
	return (Ka[a] = 1);
});
var Bt = (function (a) {
	pa(t, a);
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
			w = (oe(n) || ga(n) ? Tn(n[0]) : "length" in r) ? [n] : Ve(n),
			v,
			b,
			O,
			T,
			P,
			M,
			D,
			E;
		if (
			((o._targets = w.length
				? ro(w)
				: si(
						"GSAP target " + n + " not found. https://gsap.com",
						!Ae.nullTargetWarn,
					) || []),
			(o._ptLookup = []),
			(o._overwrite = h),
			_ || p || wi(l) || wi(c))
		) {
			if (
				((r = o.vars),
				(v = o.timeline =
					new de({
						data: "nested",
						defaults: d || {},
						targets: y && y.data === "nested" ? y.vars.targets : w,
					})),
				v.kill(),
				(v.parent = v._dp = mn(o)),
				(v._start = 0),
				p || wi(l) || wi(c))
			) {
				if (((T = w.length), (D = p && La(p)), hn(p)))
					for (P in p) ~ja.indexOf(P) && (E || (E = {}), (E[P] = p[P]));
				for (b = 0; b < T; b++)
					(O = $i(r, Ka)),
						(O.stagger = 0),
						m && (O.yoyoEase = m),
						E && rr(O, E),
						(M = w[b]),
						(O.duration = +Gr(l, mn(o), b, M, w)),
						(O.delay = (+Gr(c, mn(o), b, M, w) || 0) - o._delay),
						!p &&
							T === 1 &&
							O.delay &&
							((o._delay = c = O.delay), (o._start += c), (O.delay = 0)),
						v.to(M, O, D ? D(b, M, w) : 0),
						(v._ease = rt.none);
				v.duration() ? (l = c = 0) : (o.timeline = 0);
			} else if (_) {
				$r(qe(v.vars.defaults, { ease: "none" })),
					(v._ease = Zn(_.ease || r.ease || "none"));
				var C = 0,
					N,
					F,
					V;
				if (oe(_))
					_.forEach(function (Y) {
						return v.to(w, Y, ">");
					}),
						v.duration();
				else {
					O = {};
					for (P in _)
						P === "ease" || P === "easeEach" || Ml(P, _[P], O, _.easeEach);
					for (P in O)
						for (
							N = O[P].sort(function (Y, I) {
								return Y.t - I.t;
							}),
								C = 0,
								b = 0;
							b < N.length;
							b++
						)
							(F = N[b]),
								(V = {
									ease: F.e,
									duration: ((F.t - (b ? N[b - 1].t : 0)) / 100) * l,
								}),
								(V[P] = F.v),
								v.to(w, V, C),
								(C += V.duration);
					v.duration() < l && v.to({}, { duration: l - v.duration() });
				}
			}
			l || o.duration((l = v.duration()));
		} else o.timeline = 0;
		return (
			h === !0 && !Ks && ((Cn = mn(o)), Tt.killTweensOf(w), (Cn = 0)),
			an(y, mn(o), i),
			r.reversed && o.reverse(),
			r.paused && o.paused(!0),
			(f ||
				(!l &&
					!_ &&
					o._start === Gt(y._time) &&
					ve(f) &&
					nl(mn(o)) &&
					y.data !== "nested")) &&
				((o._tTime = -ht), o.render(Math.max(0, -c) || 0)),
			g && ka(mn(o), g),
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
			if (!l) il(this, r, i, s);
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
						((p = Gt(f % d)),
						f === u
							? ((_ = this._repeat), (p = l))
							: ((_ = ~~(f / d)),
								_ && _ === Gt(f / d) && ((p = l), _--),
								p > l && (p = l)),
						(m = this._yoyo && _ & 1),
						m && ((v = this._yEase), (p = l - p)),
						(g = Dr(this._tTime, d)),
						p === o && !s && this._initted && _ === g)
					)
						return (this._tTime = f), this;
					_ !== g &&
						(w && this._yEase && Ua(w, m),
						this.vars.repeatRefresh &&
							!m &&
							!this._lock &&
							this._time !== d &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(Gt(d * _), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Ea(this, c ? r : p, s, i, f)) return (this._tTime = 0), this;
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
					p && !o && !i && !_ && (Ee(this, "onStart"), this._tTime !== f))
				)
					return this;
				for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
				(w && w.render(r < 0 ? r : w._dur * w._ease(p / this._dur), i, s)) ||
					(this._startAt && (this._zTime = r)),
					this._onUpdate &&
						!i &&
						(c && Ps(this, r, i, s), Ee(this, "onUpdate")),
					this._repeat &&
						_ !== g &&
						this.vars.onRepeat &&
						!i &&
						this.parent &&
						Ee(this, "onRepeat"),
					(f === this._tDur || !f) &&
						this._tTime === f &&
						(c && !this._onUpdate && Ps(this, r, !0, !0),
						(r || !l) &&
							((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
							zn(this, 1),
						!i &&
							!(c && !o) &&
							(f || o || m) &&
							(Ee(this, f === u ? "onComplete" : "onReverseComplete", !0),
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
				this._initted || so(this, l),
				(c = this._ease(l / this._dur)),
				Tl(this, r, i, s, o, c, l, u)
					? this.resetTo(r, i, s, o, 1)
					: (is(this, 0),
						this.parent ||
							Pa(
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
						Pr(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				u = r ? Ve(r) : o,
				l = this._ptLookup,
				c = this._pt,
				f,
				p,
				h,
				_,
				d,
				g,
				m;
			if ((!i || i === "all") && tl(o, u))
				return i === "all" && (this._pt = 0), Br(this);
			for (
				f = this._op = this._op || [],
					i !== "all" &&
						(jt(i) &&
							((d = {}),
							xe(i, function (y) {
								return (d[y] = 1);
							}),
							(i = d)),
						(i = Sl(o, i))),
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
qe(Bt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
xe("staggerTo,staggerFrom,staggerFromTo", function (a) {
	Bt[a] = function () {
		var t = new de(),
			e = ks.call(arguments, 0);
		return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
	};
});
var oo = function (t, e, n) {
		return (t[e] = n);
	},
	Qa = function (t, e, n) {
		return t[e](n);
	},
	Ol = function (t, e, n, r) {
		return t[e](r.fp, n);
	},
	Dl = function (t, e, n) {
		return t.setAttribute(e, n);
	},
	ao = function (t, e) {
		return Ct(t[e]) ? Qa : Qs(t[e]) && t.setAttribute ? Dl : oo;
	},
	Za = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	Pl = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	Ja = function (t, e) {
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
	uo = function (t, e) {
		for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
	},
	Cl = function (t, e, n, r) {
		for (var i = this._pt, s; i; )
			(s = i._next), i.p === r && i.modifier(t, e, n), (i = s);
	},
	kl = function (t) {
		for (var e = this._pt, n, r; e; )
			(r = e._next),
				(e.p === t && !e.op) || e.op === t
					? ns(this, e, "_pt")
					: e.dep || (n = 1),
				(e = r);
		return !n;
	},
	El = function (t, e, n, r) {
		r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
	},
	tu = function (t) {
		for (var e = t._pt, n, r, i, s; e; ) {
			for (n = e._next, r = i; r && r.pr > e.pr; ) r = r._next;
			(e._prev = r ? r._prev : s) ? (e._prev._next = e) : (i = e),
				(e._next = r) ? (r._prev = e) : (s = e),
				(e = n);
		}
		t._pt = i;
	},
	we = (function () {
		function a(e, n, r, i, s, o, u, l, c) {
			(this.t = n),
				(this.s = i),
				(this.c = s),
				(this.p = r),
				(this.r = o || Za),
				(this.d = u || this),
				(this.set = l || oo),
				(this.pr = c || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = a.prototype;
		return (
			(t.modifier = function (n, r, i) {
				(this.mSet = this.mSet || this.set),
					(this.set = El),
					(this.m = n),
					(this.mt = i),
					(this.tween = r);
			}),
			a
		);
	})();
xe(
	no +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (a) {
		return (eo[a] = 1);
	},
);
Re.TweenMax = Re.TweenLite = Bt;
Re.TimelineLite = Re.TimelineMax = de;
Tt = new de({
	sortChildren: !1,
	defaults: Or,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
Ae.stringFilter = qa;
var Jn = [],
	Fi = {},
	Al = [],
	Lo = 0,
	Rl = 0,
	hs = function (t) {
		return (Fi[t] || Al).map(function (e) {
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
					(s = sn.matchMedia(r[o]).matches),
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
	eu = (function () {
		function a(e, n) {
			(this.selector = n && Es(n)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = Rl++),
				e && this.add(e);
		}
		var t = a.prototype;
		return (
			(t.add = function (n, r, i) {
				Ct(n) && ((i = r), (r = n), (n = Ct));
				var s = this,
					o = function () {
						var l = mt,
							c = s.selector,
							f;
						return (
							l && l !== s && l.data.push(s),
							i && (s.selector = Es(i)),
							(mt = s),
							(f = r.apply(s, arguments)),
							Ct(f) && s._r.push(f),
							(mt = l),
							(s.selector = c),
							(s.isReverted = !1),
							f
						);
					};
				return (
					(s.last = o),
					n === Ct
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
							: r instanceof Bt &&
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
										l instanceof de
											? l.data !== "nested" &&
												(l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
											: !(l instanceof Bt) && l.revert && l.revert(n);
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
				hn(n) || (n = { matches: n });
				var s = new eu(0, i || this.scope),
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
						: ((u = sn.matchMedia(n[l])),
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
				return Ya(r);
			});
		},
		timeline: function (t) {
			return new de(t);
		},
		getTweensOf: function (t, e) {
			return Tt.getTweensOf(t, e);
		},
		getProperty: function (t, e, n, r) {
			jt(t) && (t = Ve(t)[0]);
			var i = Kn(t || {}).get,
				s = n ? Da : Oa;
			return (
				n === "native" && (n = ""),
				t &&
					(e
						? s(((Pe[e] && Pe[e].get) || i)(t, e, n, r))
						: function (o, u, l) {
								return s(((Pe[o] && Pe[o].get) || i)(t, o, u, l));
							})
			);
		},
		quickSetter: function (t, e, n) {
			if (((t = Ve(t)), t.length > 1)) {
				var r = t.map(function (c) {
						return Te.quickSetter(c, e, n);
					}),
					i = r.length;
				return function (c) {
					for (var f = i; f--; ) r[f](c);
				};
			}
			t = t[0] || {};
			var s = Pe[e],
				o = Kn(t),
				u = (o.harness && (o.harness.aliases || {})[e]) || e,
				l = s
					? function (c) {
							var f = new s();
							(yr._pt = 0),
								f.init(t, n ? c + n : c, yr, 0, [t]),
								f.render(1, f),
								yr._pt && uo(1, yr);
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
				i = Te.to(
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
			return Co(Ae, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				n = t.effect,
				r = t.plugins,
				i = t.defaults,
				s = t.extendTimeline;
			(r || "").split(",").forEach(function (o) {
				return (
					o && !Pe[o] && !Re[o] && si(e + " effect requires " + o + " plugin.")
				);
			}),
				(us[e] = function (o, u, l) {
					return n(Ve(o), qe(u || {}, i), l);
				}),
				s &&
					(de.prototype[e] = function (o, u, l) {
						return this.add(us[e](o, hn(u) ? u : (l = u) && {}, this), l);
					});
		},
		registerEase: function (t, e) {
			rt[t] = Zn(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Zn(t, e) : rt;
		},
		getById: function (t) {
			return Tt.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var n = new de(t),
				r,
				i;
			for (
				n.smoothChildTiming = ve(t.smoothChildTiming),
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
							r instanceof Bt &&
							r.vars.onComplete === r._targets[0]
						)) &&
						an(n, r, r._start - r._delay),
					(r = i);
			return an(Tt, n, 0), n;
		},
		context: function (t, e) {
			return t ? new eu(t, e) : mt;
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
			wrap: hl,
			wrapYoyo: dl,
			distribute: La,
			random: Fa,
			snap: Ia,
			normalize: fl,
			getUnit: ie,
			clamp: al,
			splitColor: Va,
			toArray: Ve,
			selector: Es,
			mapRange: Na,
			pipe: ll,
			unitize: cl,
			interpolate: pl,
			shuffle: Ra,
		},
		install: wa,
		effects: us,
		ticker: Ce,
		updateRoot: de.updateRoot,
		plugins: Pe,
		globalTimeline: Tt,
		core: {
			PropTween: we,
			globals: ba,
			Tween: Bt,
			Timeline: de,
			Animation: li,
			getCache: Kn,
			_removeLinkedListItem: ns,
			reverting: function () {
				return se;
			},
			context: function (t) {
				return t && mt && (mt.data.push(t), (t._ctx = mt)), mt;
			},
			suppressOverwrites: function (t) {
				return (Ks = t);
			},
		},
	};
xe("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
	return (Gi[a] = Bt[a]);
});
Ce.add(de.updateRoot);
yr = Gi.to({}, { duration: 0 });
var Il = function (t, e) {
		for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
			n = n._next;
		return n;
	},
	Fl = function (t, e) {
		var n = t._targets,
			r,
			i,
			s;
		for (r in e)
			for (i = n.length; i--; )
				(s = t._ptLookup[i][r]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Il(s, r)),
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
						(jt(i) &&
							((u = {}),
							xe(i, function (c) {
								return (u[c] = 1);
							}),
							(i = u)),
						e)
					) {
						u = {};
						for (l in i) u[l] = e(i[l]);
						i = u;
					}
					Fl(o, i);
				};
			},
		};
	},
	Te =
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
						se ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
				},
			},
			{
				name: "endArray",
				init: function (t, e) {
					for (var n = e.length; n--; )
						this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
				},
			},
			ds("roundProps", As),
			ds("modifiers"),
			ds("snap", Ia),
		) || Gi;
Bt.version = de.version = Te.version = "3.12.5";
xa = 1;
Zs() && Cr();
rt.Power0;
rt.Power1;
rt.Power2;
rt.Power3;
rt.Power4;
rt.Linear;
rt.Quad;
rt.Cubic;
rt.Quart;
rt.Quint;
rt.Strong;
rt.Elastic;
rt.Back;
rt.SteppedEase;
rt.Bounce;
rt.Sine;
rt.Expo;
rt.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Io,
	kn,
	wr,
	lo,
	Gn,
	Fo,
	co,
	zl = function () {
		return typeof window < "u";
	},
	Sn = {},
	Un = 180 / Math.PI,
	br = Math.PI / 180,
	hr = Math.atan2,
	zo = 1e8,
	fo = /([A-Z])/g,
	Nl = /(left|right|width|margin|padding|x)/i,
	Bl = /[\s,\(]\S/,
	un = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	Is = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Yl = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e,
		);
	},
	Vl = function (t, e) {
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
	nu = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	ru = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	ql = function (t, e, n) {
		return (t.style[e] = n);
	},
	Hl = function (t, e, n) {
		return t.style.setProperty(e, n);
	},
	Ul = function (t, e, n) {
		return (t._gsap[e] = n);
	},
	$l = function (t, e, n) {
		return (t._gsap.scaleX = t._gsap.scaleY = n);
	},
	Wl = function (t, e, n, r, i) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = n), s.renderTransform(i, s);
	},
	Gl = function (t, e, n, r, i) {
		var s = t._gsap;
		(s[e] = n), s.renderTransform(i, s);
	},
	St = "transform",
	be = St + "Origin",
	jl = function a(t, e) {
		var n = this,
			r = this.target,
			i = r.style,
			s = r._gsap;
		if (t in Sn && i) {
			if (((this.tfm = this.tfm || {}), t !== "transform"))
				(t = un[t] || t),
					~t.indexOf(",")
						? t.split(",").forEach(function (o) {
								return (n.tfm[o] = yn(r, o));
							})
						: (this.tfm[t] = s.x ? s[t] : yn(r, t)),
					t === be && (this.tfm.zOrigin = s.zOrigin);
			else
				return un.transform.split(",").forEach(function (o) {
					return a.call(n, o, e);
				});
			if (this.props.indexOf(St) >= 0) return;
			s.svg &&
				((this.svgo = r.getAttribute("data-svg-origin")),
				this.props.push(be, e, "")),
				(t = St);
		}
		(i || e) && this.props.push(t, e, i[t]);
	},
	iu = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Kl = function () {
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
								: t[i].replace(fo, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (s in this.tfm) r[s] = this.tfm[s];
			r.svg &&
				(r.renderTransform(),
				e.setAttribute("data-svg-origin", this.svgo || "")),
				(i = co()),
				(!i || !i.isStart) &&
					!n[St] &&
					(iu(n),
					r.zOrigin &&
						n[be] &&
						((n[be] += " " + r.zOrigin + "px"),
						(r.zOrigin = 0),
						r.renderTransform()),
					(r.uncache = 1));
		}
	},
	su = function (t, e) {
		var n = { target: t, props: [], revert: Kl, save: jl };
		return (
			t._gsap || Te.core.getCache(t),
			e &&
				e.split(",").forEach(function (r) {
					return n.save(r);
				}),
			n
		);
	},
	ou,
	Fs = function (t, e) {
		var n = kn.createElementNS
			? kn.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
					t,
				)
			: kn.createElement(t);
		return n && n.style ? n : kn.createElement(t);
	},
	cn = function a(t, e, n) {
		var r = getComputedStyle(t);
		return (
			r[e] ||
			r.getPropertyValue(e.replace(fo, "-$1").toLowerCase()) ||
			r.getPropertyValue(e) ||
			(!n && a(t, kr(e) || e, 1)) ||
			""
		);
	},
	No = "O,Moz,ms,Ms,Webkit".split(","),
	kr = function (t, e, n) {
		var r = e || Gn,
			i = r.style,
			s = 5;
		if (t in i && !n) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(No[s] + t in i);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? No[s] : "") + t;
	},
	zs = function () {
		zl() &&
			window.document &&
			((Io = window),
			(kn = Io.document),
			(wr = kn.documentElement),
			(Gn = Fs("div") || { style: {} }),
			Fs("div"),
			(St = kr(St)),
			(be = St + "Origin"),
			(Gn.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(ou = !!kr("perspective")),
			(co = Te.core.reverting),
			(lo = 1));
	},
	ps = function a(t) {
		var e = Fs(
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
	Bo = function (t, e) {
		for (var n = e.length; n--; )
			if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
	},
	au = function (t) {
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
						x: +Bo(t, ["x", "cx", "x1"]) || 0,
						y: +Bo(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
				: e
		);
	},
	uu = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && au(t));
	},
	ir = function (t, e) {
		if (e) {
			var n = t.style,
				r;
			e in Sn && e !== be && (e = St),
				n.removeProperty
					? ((r = e.substr(0, 2)),
						(r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
						n.removeProperty(
							r === "--" ? e : e.replace(fo, "-$1").toLowerCase(),
						))
					: n.removeAttribute(e);
		}
	},
	En = function (t, e, n, r, i, s) {
		var o = new we(t._pt, e, n, 0, 1, s ? ru : nu);
		return (t._pt = o), (o.b = r), (o.e = i), t._props.push(n), o;
	},
	Yo = { deg: 1, rad: 1, turn: 1 },
	Ql = { grid: 1, flex: 1 },
	Nn = function a(t, e, n, r) {
		var i = parseFloat(n) || 0,
			s = (n + "").trim().substr((i + "").length) || "px",
			o = Gn.style,
			u = Nl.test(e),
			l = t.tagName.toLowerCase() === "svg",
			c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
			f = 100,
			p = r === "px",
			h = r === "%",
			_,
			d,
			g,
			m;
		if (r === s || !i || Yo[r] || Yo[s]) return i;
		if (
			(s !== "px" && !p && (i = a(t, e, n, "px")),
			(m = t.getCTM && uu(t)),
			(h || s === "%") && (Sn[e] || ~e.indexOf("adius")))
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
			(!d || d === kn || !d.appendChild) && (d = kn.body),
			(g = d._gsap),
			g && h && g.width && u && g.time === Ce.time && !g.uncache)
		)
			return At((i / g.width) * f);
		if (h && (e === "height" || e === "width")) {
			var y = t.style[e];
			(t.style[e] = f + r), (_ = t[c]), y ? (t.style[e] = y) : ir(t, e);
		} else
			(h || s === "%") &&
				!Ql[cn(d, "display")] &&
				(o.position = cn(t, "position")),
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
	yn = function (t, e, n, r) {
		var i;
		return (
			lo || zs(),
			e in un &&
				e !== "transform" &&
				((e = un[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
			Sn[e] && e !== "transform"
				? ((i = fi(t, r)),
					(i =
						e !== "transformOrigin"
							? i[e]
							: i.svg
								? i.origin
								: Ki(cn(t, be)) + " " + i.zOrigin + "px"))
				: ((i = t.style[e]),
					(!i || i === "auto" || r || ~(i + "").indexOf("calc(")) &&
						(i =
							(ji[e] && ji[e](t, e, n)) ||
							cn(t, e) ||
							Sa(t, e) ||
							(e === "opacity" ? 1 : 0))),
			n && !~(i + "").trim().indexOf(" ") ? Nn(t, e, i, n) + n : i
		);
	},
	Zl = function (t, e, n, r) {
		if (!n || n === "none") {
			var i = kr(e, t, 1),
				s = i && cn(t, i, 1);
			s && s !== n
				? ((e = i), (n = s))
				: e === "borderColor" && (n = cn(t, "borderTopColor"));
		}
		var o = new we(this._pt, t.style, e, 0, 1, Ja),
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
				(r = cn(t, e) || r),
				d ? (t.style[e] = d) : ir(t, e)),
			(c = [n, r]),
			qa(c),
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
							((w = w || Ae.units[e] || v),
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
		} else o.r = e === "display" && r === "none" ? ru : nu;
		return ya.test(r) && (o.e = 0), (this._pt = o), o;
	},
	Vo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
	Jl = function (t) {
		var e = t.split(" "),
			n = e[0],
			r = e[1] || "50%";
		return (
			(n === "top" || n === "bottom" || r === "left" || r === "right") &&
				((t = n), (n = r), (r = t)),
			(e[0] = Vo[n] || n),
			(e[1] = Vo[r] || r),
			e.join(" ")
		);
	},
	tc = function (t, e) {
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
						Sn[o] && ((u = 1), (o = o === "transformOrigin" ? be : St)),
						ir(n, o);
			u &&
				(ir(n, St),
				s &&
					(s.svg && n.removeAttribute("transform"),
					fi(n, 1),
					(s.uncache = 1),
					iu(r)));
		}
	},
	ji = {
		clearProps: function (t, e, n, r, i) {
			if (i.data !== "isFromStart") {
				var s = (t._pt = new we(t._pt, e, n, 0, 0, tc));
				return (s.u = r), (s.pr = -10), (s.tween = i), t._props.push(n), 1;
			}
		},
	},
	ci = [1, 0, 0, 1, 0, 0],
	lu = {},
	cu = function (t) {
		return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
	},
	Xo = function (t) {
		var e = cn(t, St);
		return cu(e) ? ci : e.substr(7).match(ma).map(At);
	},
	ho = function (t, e) {
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
	Ns = function (t, e, n, r, i, s) {
		var o = t._gsap,
			u = i || ho(t, !0),
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
			P,
			M;
		n
			? u !== ci &&
				(T = h * g - _ * d) &&
				((P = v * (g / T) + b * (-d / T) + (d * y - g * m) / T),
				(M = v * (-_ / T) + b * (h / T) - (h * y - _ * m) / T),
				(v = P),
				(b = M))
			: ((O = au(t)),
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
			(t.style[be] = "0px 0px"),
			s &&
				(En(s, o, "xOrigin", l, v),
				En(s, o, "yOrigin", c, b),
				En(s, o, "xOffset", f, o.xOffset),
				En(s, o, "yOffset", p, o.yOffset)),
			t.setAttribute("data-svg-origin", v + " " + b);
	},
	fi = function (t, e) {
		var n = t._gsap || new Wa(t);
		if ("x" in n && !e && !n.uncache) return n;
		var r = t.style,
			i = n.scaleX < 0,
			s = "px",
			o = "deg",
			u = getComputedStyle(t),
			l = cn(t, be) || "0",
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
			P,
			M,
			D,
			E,
			C,
			N,
			F,
			V,
			Y,
			I,
			$,
			tt,
			x,
			J,
			Mt,
			Ht,
			st,
			vt;
		return (
			(c = f = p = d = g = m = y = w = v = 0),
			(h = _ = 1),
			(n.svg = !!(t.getCTM && uu(t))),
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
			(T = ho(t, n.svg)),
			n.svg &&
				(n.uncache
					? (($ = t.getBBox()),
						(l = n.xOrigin - $.x + "px " + (n.yOrigin - $.y) + "px"),
						(I = ""))
					: (I = !e && t.getAttribute("data-svg-origin")),
				Ns(t, I || l, !!I || n.originIsAbsolute, n.smooth !== !1, T)),
			(b = n.xOrigin || 0),
			(O = n.yOrigin || 0),
			T !== ci &&
				((E = T[0]),
				(C = T[1]),
				(N = T[2]),
				(F = T[3]),
				(c = V = T[4]),
				(f = Y = T[5]),
				T.length === 6
					? ((h = Math.sqrt(E * E + C * C)),
						(_ = Math.sqrt(F * F + N * N)),
						(d = E || C ? hr(C, E) * Un : 0),
						(y = N || F ? hr(N, F) * Un + d : 0),
						y && (_ *= Math.abs(Math.cos(y * br))),
						n.svg && ((c -= b - (b * E + O * N)), (f -= O - (b * C + O * F))))
					: ((vt = T[6]),
						(Ht = T[7]),
						(x = T[8]),
						(J = T[9]),
						(Mt = T[10]),
						(st = T[11]),
						(c = T[12]),
						(f = T[13]),
						(p = T[14]),
						(P = hr(vt, Mt)),
						(g = P * Un),
						P &&
							((M = Math.cos(-P)),
							(D = Math.sin(-P)),
							(I = V * M + x * D),
							($ = Y * M + J * D),
							(tt = vt * M + Mt * D),
							(x = V * -D + x * M),
							(J = Y * -D + J * M),
							(Mt = vt * -D + Mt * M),
							(st = Ht * -D + st * M),
							(V = I),
							(Y = $),
							(vt = tt)),
						(P = hr(-N, Mt)),
						(m = P * Un),
						P &&
							((M = Math.cos(-P)),
							(D = Math.sin(-P)),
							(I = E * M - x * D),
							($ = C * M - J * D),
							(tt = N * M - Mt * D),
							(st = F * D + st * M),
							(E = I),
							(C = $),
							(N = tt)),
						(P = hr(C, E)),
						(d = P * Un),
						P &&
							((M = Math.cos(P)),
							(D = Math.sin(P)),
							(I = E * M + C * D),
							($ = V * M + Y * D),
							(C = C * M - E * D),
							(Y = Y * M - V * D),
							(E = I),
							(V = $)),
						g &&
							Math.abs(g) + Math.abs(d) > 359.9 &&
							((g = d = 0), (m = 180 - m)),
						(h = At(Math.sqrt(E * E + C * C + N * N))),
						(_ = At(Math.sqrt(Y * Y + vt * vt))),
						(P = hr(V, Y)),
						(y = Math.abs(P) > 2e-4 ? P * Un : 0),
						(v = st ? 1 / (st < 0 ? -st : st) : 0)),
				n.svg &&
					((I = t.getAttribute("transform")),
					(n.forceCSS = t.setAttribute("transform", "") || !cu(cn(t, St))),
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
				(r[be] = Ki(l)),
			(n.xOffset = n.yOffset = 0),
			(n.force3D = Ae.force3D),
			(n.renderTransform = n.svg ? nc : ou ? fu : ec),
			(n.uncache = 0),
			n
		);
	},
	Ki = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	_s = function (t, e, n) {
		var r = ie(e);
		return At(parseFloat(e) + parseFloat(Nn(t, "x", n + "px", r))) + r;
	},
	ec = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			fu(t, e);
	},
	qn = "0deg",
	Fr = "0px",
	Hn = ") ",
	fu = function (t, e) {
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
				P = Math.cos(O),
				M;
			(O = parseFloat(f) * br),
				(M = Math.cos(O)),
				(s = _s(y, s, T * M * -w)),
				(o = _s(y, o, -Math.sin(O) * -w)),
				(u = _s(y, u, P * M * -w + w));
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
	nc = function (t, e) {
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
			P,
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
					(P = Math.cos(u - l) * p),
					l &&
						((c *= br),
						(M = Math.tan(l - c)),
						(M = Math.sqrt(1 + M * M)),
						(T *= M),
						(P *= M),
						c &&
							((M = Math.tan(c)),
							(M = Math.sqrt(1 + M * M)),
							(b *= M),
							(O *= M))),
					(b = At(b)),
					(O = At(O)),
					(T = At(T)),
					(P = At(P)))
				: ((b = f), (P = p), (O = T = 0)),
			((w && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
				((w = Nn(h, "x", s, "px")), (v = Nn(h, "y", o, "px"))),
			(_ || d || g || m) &&
				((w = At(w + _ - (_ * b + d * T) + g)),
				(v = At(v + d - (_ * O + d * P) + m))),
			(r || i) &&
				((M = h.getBBox()),
				(w = At(w + (r / 100) * M.width)),
				(v = At(v + (i / 100) * M.height))),
			(M =
				"matrix(" + b + "," + O + "," + T + "," + P + "," + w + "," + v + ")"),
			h.setAttribute("transform", M),
			y && (h.style[St] = M);
	},
	rc = function (t, e, n, r, i) {
		var s = 360,
			o = jt(i),
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
					? (l = ((l + s * zo) % s) - ~~(l / s) * s)
					: f === "ccw" && l > 0 && (l = ((l - s * zo) % s) - ~~(l / s) * s)),
			(t._pt = p = new we(t._pt, e, n, r, l, Yl)),
			(p.e = c),
			(p.u = "deg"),
			t._props.push(n),
			p
		);
	},
	qo = function (t, e) {
		for (var n in e) t[n] = e[n];
		return t;
	},
	ic = function (t, e, n) {
		var r = qo({}, n._gsap),
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
		for (u in Sn)
			(l = r[u]),
				(c = o[u]),
				l !== c &&
					i.indexOf(u) < 0 &&
					((h = ie(l)),
					(_ = ie(c)),
					(f = h !== _ ? Nn(n, u, l, _) : parseFloat(l)),
					(p = parseFloat(c)),
					(t._pt = new we(t._pt, o, u, f, p - f, Is)),
					(t._pt.u = _ || 0),
					t._props.push(u));
		qo(o, r);
	};
xe("padding,margin,Width,Radius", function (a, t) {
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
					return yn(o, _, l);
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
var hu = {
	name: "css",
	register: zs,
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
			P;
		lo || zs(),
			(this.styles = this.styles || su(t)),
			(P = this.styles.props),
			(this.tween = n);
		for (d in e)
			if (d !== "autoRound" && ((c = e[d]), !(Pe[d] && Ga(d, e, n, r, t, i)))) {
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
						In.test(l) || ((g = ie(l)), (m = ie(c))),
						m ? g !== m && (l = Nn(t, d, l, m) + m) : g && (c += g),
						this.add(o, "setProperty", l, c, r, i, 0, 0, d),
						s.push(d),
						P.push(d, 0, o[d]);
				else if (h !== "undefined") {
					if (
						(u && d in u
							? ((l = typeof u[d] == "function" ? u[d].call(n, r, t, i) : u[d]),
								jt(l) && ~l.indexOf("random(") && (l = ai(l)),
								ie(l + "") ||
									l === "auto" ||
									(l += Ae.units[d] || ie(yn(t, d)) || ""),
								(l + "").charAt(1) === "=" && (l = yn(t, d)))
							: (l = yn(t, d)),
						(p = parseFloat(l)),
						(y = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
						y && (c = c.substr(2)),
						(f = parseFloat(c)),
						d in un &&
							(d === "autoAlpha" &&
								(p === 1 && yn(t, "visibility") === "hidden" && f && (p = 0),
								P.push("visibility", 0, o.visibility),
								En(
									this,
									o,
									"visibility",
									p ? "inherit" : "hidden",
									f ? "inherit" : "hidden",
									!f,
								)),
							d !== "scale" &&
								d !== "transform" &&
								((d = un[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
						(w = d in Sn),
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
									new we(this._pt, o, St, 0, 1, b.renderTransform, b, 0, -1)),
								(v.dep = 1)),
							d === "scale")
						)
							(this._pt = new we(
								this._pt,
								b,
								"scaleY",
								b.scaleY,
								(y ? xr(b.scaleY, y + f) : f) - b.scaleY || 0,
								Is,
							)),
								(this._pt.u = 0),
								s.push("scaleY", d),
								(d += "X");
						else if (d === "transformOrigin") {
							P.push(be, 0, o[be]),
								(c = Jl(c)),
								b.svg
									? Ns(t, c, 0, O, 0, this)
									: ((m = parseFloat(c.split(" ")[2]) || 0),
										m !== b.zOrigin && En(this, b, "zOrigin", b.zOrigin, m),
										En(this, o, d, Ki(l), Ki(c)));
							continue;
						} else if (d === "svgOrigin") {
							Ns(t, c, 1, O, 0, this);
							continue;
						} else if (d in lu) {
							rc(this, b, d, p, y ? xr(p, y + c) : c);
							continue;
						} else if (d === "smoothOrigin") {
							En(this, b, "smooth", b.smooth, c);
							continue;
						} else if (d === "force3D") {
							b[d] = c;
							continue;
						} else if (d === "transform") {
							ic(this, c, t);
							continue;
						}
					} else d in o || (d = kr(d) || d);
					if (w || ((f || f === 0) && (p || p === 0) && !Bl.test(c) && d in o))
						(g = (l + "").substr((p + "").length)),
							f || (f = 0),
							(m = ie(c) || (d in Ae.units ? Ae.units[d] : g)),
							g !== m && (p = Nn(t, d, l, m)),
							(this._pt = new we(
								this._pt,
								w ? b : o,
								d,
								p,
								(y ? xr(p, y + f) : f) - p,
								!w && (m === "px" || d === "zIndex") && e.autoRound !== !1
									? Xl
									: Is,
							)),
							(this._pt.u = m || 0),
							g !== m && m !== "%" && ((this._pt.b = l), (this._pt.r = Vl));
					else if (d in o) Zl.call(this, t, d, l, y ? y + c : c);
					else if (d in t) this.add(t, d, l || t[d], y ? y + c : c, r, i);
					else if (d !== "parseTransform") {
						to(d, c);
						continue;
					}
					w || (d in o ? P.push(d, 0, o[d]) : P.push(d, 1, l || t[d])),
						s.push(d);
				}
			}
		T && tu(this);
	},
	render: function (t, e) {
		if (e.tween._time || !co())
			for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
		else e.styles.revert();
	},
	get: yn,
	aliases: un,
	getSetter: function (t, e, n) {
		var r = un[e];
		return (
			r && r.indexOf(",") < 0 && (e = r),
			e in Sn && e !== be && (t._gsap.x || yn(t, "x"))
				? n && Fo === n
					? e === "scale"
						? $l
						: Ul
					: (Fo = n || {}) && (e === "scale" ? Wl : Gl)
				: t.style && !Qs(t.style[e])
					? ql
					: ~e.indexOf("-")
						? Hl
						: ao(t, e)
		);
	},
	core: { _removeProperty: ir, _getMatrix: ho },
};
Te.utils.checkPrefix = kr;
Te.core.getStyleSaver = su;
(function (a, t, e, n) {
	var r = xe(a + "," + t + "," + e, function (i) {
		Sn[i] = 1;
	});
	xe(t, function (i) {
		(Ae.units[i] = "deg"), (lu[i] = 1);
	}),
		(un[r[13]] = a + "," + t),
		xe(n, function (i) {
			var s = i.split(":");
			un[s[1]] = r[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
xe(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (a) {
		Ae.units[a] = "px";
	},
);
Te.registerPlugin(hu);
var W = Te.registerPlugin(hu) || Te;
W.core.Tween;
function Ho(a, t) {
	for (var e = 0; e < t.length; e++) {
		var n = t[e];
		(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			"value" in n && (n.writable = !0),
			Object.defineProperty(a, n.key, n);
	}
}
function sc(a, t, e) {
	return t && Ho(a.prototype, t), e && Ho(a, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Zt,
	zi,
	ke,
	An,
	Rn,
	Tr,
	du,
	$n,
	jr,
	pu,
	wn,
	je,
	_u,
	gu = function () {
		return (
			Zt ||
			(typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt)
		);
	},
	mu = 1,
	vr = [],
	Z = [],
	fn = [],
	Kr = Date.now,
	Bs = function (t, e) {
		return e;
	},
	oc = function () {
		var t = jr.core,
			e = t.bridge || {},
			n = t._scrollers,
			r = t._proxies;
		n.push.apply(n, Z),
			r.push.apply(r, fn),
			(Z = n),
			(fn = r),
			(Bs = function (s, o) {
				return e[s](o);
			});
	},
	Fn = function (t, e) {
		return ~fn.indexOf(t) && fn[fn.indexOf(t) + 1][e];
	},
	Qr = function (t) {
		return !!~pu.indexOf(t);
	},
	le = function (t, e, n, r, i) {
		return t.addEventListener(e, n, { passive: r !== !1, capture: !!i });
	},
	ue = function (t, e, n, r) {
		return t.removeEventListener(e, n, !!r);
	},
	bi = "scrollLeft",
	Ti = "scrollTop",
	Ys = function () {
		return (wn && wn.isPressed) || Z.cache++;
	},
	Qi = function (t, e) {
		var n = function r(i) {
			if (i || i === 0) {
				mu && (ke.history.scrollRestoration = "manual");
				var s = wn && wn.isPressed;
				(i = r.v = Math.round(i) || (wn && wn.iOS ? 1 : 0)),
					t(i),
					(r.cacheID = Z.cache),
					s && Bs("ss", i);
			} else
				(e || Z.cache !== r.cacheID || Bs("ref")) &&
					((r.cacheID = Z.cache), (r.v = t()));
			return r.v + r.offset;
		};
		return (n.offset = 0), t && n;
	},
	pe = {
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
				? ke.scrollTo(a, qt.sc())
				: ke.pageXOffset || An[bi] || Rn[bi] || Tr[bi] || 0;
		}),
	},
	qt = {
		s: Ti,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: pe,
		sc: Qi(function (a) {
			return arguments.length
				? ke.scrollTo(pe.sc(), a)
				: ke.pageYOffset || An[Ti] || Rn[Ti] || Tr[Ti] || 0;
		}),
	},
	ye = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || Zt.utils.toArray)(t)[0] ||
			(typeof t == "string" && Zt.config().nullTargetWarn !== !1
				? console.warn("Element not found:", t)
				: null)
		);
	},
	Bn = function (t, e) {
		var n = e.s,
			r = e.sc;
		Qr(t) && (t = An.scrollingElement || Rn);
		var i = Z.indexOf(t),
			s = r === qt.sc ? 1 : 2;
		!~i && (i = Z.push(t) - 1), Z[i + s] || le(t, "scroll", Ys);
		var o = Z[i + s],
			u =
				o ||
				(Z[i + s] =
					Qi(Fn(t, n), !0) ||
					(Qr(t)
						? r
						: Qi(function (l) {
								return arguments.length ? (t[n] = l) : t[n];
							})));
		return (
			(u.target = t),
			o || (u.smooth = Zt.getProperty(t, "scrollBehavior") === "smooth"),
			u
		);
	},
	Vs = function (t, e, n) {
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
	Uo = function (t) {
		var e = Math.max.apply(Math, t),
			n = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(n) ? e : n;
	},
	yu = function () {
		(jr = Zt.core.globals().ScrollTrigger), jr && jr.core && oc();
	},
	vu = function (t) {
		return (
			(Zt = t || gu()),
			!zi &&
				Zt &&
				typeof document < "u" &&
				document.body &&
				((ke = window),
				(An = document),
				(Rn = An.documentElement),
				(Tr = An.body),
				(pu = [ke, An, Rn, Tr]),
				Zt.utils.clamp,
				(_u = Zt.core.context || function () {}),
				($n = "onpointerenter" in Tr ? "pointer" : "mouse"),
				(du = Rt.isTouch =
					ke.matchMedia &&
					ke.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in ke ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(je = Rt.eventTypes =
					(
						"ontouchstart" in Rn
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in Rn
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (mu = 0);
				}, 500),
				yu(),
				(zi = 1)),
			zi
		);
	};
pe.op = qt;
Z.cache = 0;
var Rt = (function () {
	function a(e) {
		this.init(e);
	}
	var t = a.prototype;
	return (
		(t.init = function (n) {
			zi || vu(Zt) || console.warn("Please gsap.registerPlugin(Observer)"),
				jr || yu();
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
				P = n.onDown,
				M = n.onChangeX,
				D = n.onChangeY,
				E = n.onChange,
				C = n.onToggleX,
				N = n.onToggleY,
				F = n.onHover,
				V = n.onHoverEnd,
				Y = n.onMove,
				I = n.ignoreCheck,
				$ = n.isNormalizer,
				tt = n.onGestureStart,
				x = n.onGestureEnd,
				J = n.onWheel,
				Mt = n.onEnable,
				Ht = n.onDisable,
				st = n.onClick,
				vt = n.scrollSpeed,
				kt = n.capture,
				it = n.allowClicks,
				ut = n.lockAxis,
				ft = n.onLockAxis;
			(this.target = o = ye(o) || Rn),
				(this.vars = n),
				h && (h = Zt.utils.toArray(h)),
				(r = r || 1e-9),
				(i = i || 0),
				(_ = _ || 1),
				(vt = vt || 1),
				(s = s || "wheel,touch,pointer"),
				(l = l !== !1),
				u || (u = parseFloat(ke.getComputedStyle(Tr).lineHeight) || 22);
			var Lt,
				G,
				A,
				L,
				q,
				ot,
				Ot,
				S = this,
				Dt = 0,
				Yt = 0,
				ge = n.passive || !c,
				_t = Bn(o, pe),
				Le = Bn(o, qt),
				Ze = _t(),
				dn = Le(),
				It =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					je[0] === "pointerdown",
				He = Qr(o),
				xt = o.ownerDocument || An,
				ae = [0, 0, 0],
				Ft = [0, 0, 0],
				Se = 0,
				pn = function () {
					return (Se = Kr());
				},
				dt = function (B, at) {
					return (
						((S.event = B) && h && ~h.indexOf(B.target)) ||
						(at && It && B.pointerType !== "touch") ||
						(I && I(B, at))
					);
				},
				cr = function () {
					S._vx.reset(), S._vy.reset(), G.pause(), f && f(S);
				},
				Je = function () {
					var B = (S.deltaX = Uo(ae)),
						at = (S.deltaY = Uo(Ft)),
						k = Math.abs(B) >= r,
						U = Math.abs(at) >= r;
					E && (k || U) && E(S, B, at, ae, Ft),
						k &&
							(b && S.deltaX > 0 && b(S),
							O && S.deltaX < 0 && O(S),
							M && M(S),
							C && S.deltaX < 0 != Dt < 0 && C(S),
							(Dt = S.deltaX),
							(ae[0] = ae[1] = ae[2] = 0)),
						U &&
							(P && S.deltaY > 0 && P(S),
							T && S.deltaY < 0 && T(S),
							D && D(S),
							N && S.deltaY < 0 != Yt < 0 && N(S),
							(Yt = S.deltaY),
							(Ft[0] = Ft[1] = Ft[2] = 0)),
						(L || A) && (Y && Y(S), A && (y(S), (A = !1)), (L = !1)),
						ot && !(ot = !1) && ft && ft(S),
						q && (J(S), (q = !1)),
						(Lt = 0);
				},
				Mn = function (B, at, k) {
					(ae[k] += B),
						(Ft[k] += at),
						S._vx.update(B),
						S._vy.update(at),
						l ? Lt || (Lt = requestAnimationFrame(Je)) : Je();
				},
				On = function (B, at) {
					ut &&
						!Ot &&
						((S.axis = Ot = Math.abs(B) > Math.abs(at) ? "x" : "y"), (ot = !0)),
						Ot !== "y" && ((ae[2] += B), S._vx.update(B, !0)),
						Ot !== "x" && ((Ft[2] += at), S._vy.update(at, !0)),
						l ? Lt || (Lt = requestAnimationFrame(Je)) : Je();
				},
				Ue = function (B) {
					if (!dt(B, 1)) {
						B = zr(B, c);
						var at = B.clientX,
							k = B.clientY,
							U = at - S.x,
							z = k - S.y,
							X = S.isDragging;
						(S.x = at),
							(S.y = k),
							(X ||
								Math.abs(S.startX - at) >= i ||
								Math.abs(S.startY - k) >= i) &&
								(y && (A = !0),
								X || (S.isDragging = !0),
								On(U, z),
								X || (g && g(S)));
					}
				},
				_n = (S.onPress = function (H) {
					dt(H, 1) ||
						(H && H.button) ||
						((S.axis = Ot = null),
						G.pause(),
						(S.isPressed = !0),
						(H = zr(H)),
						(Dt = Yt = 0),
						(S.startX = S.x = H.clientX),
						(S.startY = S.y = H.clientY),
						S._vx.reset(),
						S._vy.reset(),
						le($ ? o : xt, je[1], Ue, ge, !0),
						(S.deltaX = S.deltaY = 0),
						w && w(S));
				}),
				j = (S.onRelease = function (H) {
					if (!dt(H, 1)) {
						ue($ ? o : xt, je[1], Ue, !0);
						var B = !isNaN(S.y - S.startY),
							at = S.isDragging,
							k =
								at &&
								(Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
							U = zr(H);
						!k &&
							B &&
							(S._vx.reset(),
							S._vy.reset(),
							c &&
								it &&
								Zt.delayedCall(0.08, function () {
									if (Kr() - Se > 300 && !H.defaultPrevented) {
										if (H.target.click) H.target.click();
										else if (xt.createEvent) {
											var z = xt.createEvent("MouseEvents");
											z.initMouseEvent(
												"click",
												!0,
												!0,
												ke,
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
							f && at && !$ && G.restart(!0),
							m && at && m(S),
							v && v(S, k);
					}
				}),
				tn = function (B) {
					return (
						B.touches &&
						B.touches.length > 1 &&
						(S.isGesturing = !0) &&
						tt(B, S.isDragging)
					);
				},
				me = function () {
					return (S.isGesturing = !1) || x(S);
				},
				$e = function (B) {
					if (!dt(B)) {
						var at = _t(),
							k = Le();
						Mn((at - Ze) * vt, (k - dn) * vt, 1),
							(Ze = at),
							(dn = k),
							f && G.restart(!0);
					}
				},
				We = function (B) {
					if (!dt(B)) {
						(B = zr(B, c)), J && (q = !0);
						var at =
							(B.deltaMode === 1 ? u : B.deltaMode === 2 ? ke.innerHeight : 1) *
							_;
						Mn(B.deltaX * at, B.deltaY * at, 0), f && !$ && G.restart(!0);
					}
				},
				Vn = function (B) {
					if (!dt(B)) {
						var at = B.clientX,
							k = B.clientY,
							U = at - S.x,
							z = k - S.y;
						(S.x = at),
							(S.y = k),
							(L = !0),
							f && G.restart(!0),
							(U || z) && On(U, z);
					}
				},
				fr = function (B) {
					(S.event = B), F(S);
				},
				gn = function (B) {
					(S.event = B), V(S);
				},
				Ar = function (B) {
					return dt(B) || (zr(B, c) && st(S));
				};
			(G = S._dc = Zt.delayedCall(p || 0.25, cr).pause()),
				(S.deltaX = S.deltaY = 0),
				(S._vx = Vs(0, 50, !0)),
				(S._vy = Vs(0, 50, !0)),
				(S.scrollX = _t),
				(S.scrollY = Le),
				(S.isDragging = S.isGesturing = S.isPressed = !1),
				_u(this),
				(S.enable = function (H) {
					return (
						S.isEnabled ||
							(le(He ? xt : o, "scroll", Ys),
							s.indexOf("scroll") >= 0 && le(He ? xt : o, "scroll", $e, ge, kt),
							s.indexOf("wheel") >= 0 && le(o, "wheel", We, ge, kt),
							((s.indexOf("touch") >= 0 && du) || s.indexOf("pointer") >= 0) &&
								(le(o, je[0], _n, ge, kt),
								le(xt, je[2], j),
								le(xt, je[3], j),
								it && le(o, "click", pn, !0, !0),
								st && le(o, "click", Ar),
								tt && le(xt, "gesturestart", tn),
								x && le(xt, "gestureend", me),
								F && le(o, $n + "enter", fr),
								V && le(o, $n + "leave", gn),
								Y && le(o, $n + "move", Vn)),
							(S.isEnabled = !0),
							H && H.type && _n(H),
							Mt && Mt(S)),
						S
					);
				}),
				(S.disable = function () {
					S.isEnabled &&
						(vr.filter(function (H) {
							return H !== S && Qr(H.target);
						}).length || ue(He ? xt : o, "scroll", Ys),
						S.isPressed &&
							(S._vx.reset(), S._vy.reset(), ue($ ? o : xt, je[1], Ue, !0)),
						ue(He ? xt : o, "scroll", $e, kt),
						ue(o, "wheel", We, kt),
						ue(o, je[0], _n, kt),
						ue(xt, je[2], j),
						ue(xt, je[3], j),
						ue(o, "click", pn, !0),
						ue(o, "click", Ar),
						ue(xt, "gesturestart", tn),
						ue(xt, "gestureend", me),
						ue(o, $n + "enter", fr),
						ue(o, $n + "leave", gn),
						ue(o, $n + "move", Vn),
						(S.isEnabled = S.isPressed = S.isDragging = !1),
						Ht && Ht(S));
				}),
				(S.kill = S.revert =
					function () {
						S.disable();
						var H = vr.indexOf(S);
						H >= 0 && vr.splice(H, 1), wn === S && (wn = 0);
					}),
				vr.push(S),
				$ && Qr(o) && (wn = S),
				S.enable(d);
		}),
		sc(a, [
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
Rt.version = "3.12.5";
Rt.create = function (a) {
	return new Rt(a);
};
Rt.register = vu;
Rt.getAll = function () {
	return vr.slice();
};
Rt.getById = function (a) {
	return vr.filter(function (t) {
		return t.vars.id === a;
	})[0];
};
gu() && Zt.registerPlugin(Rt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var R,
	_r,
	nt,
	bt,
	Ke,
	pt,
	xu,
	Zi,
	hi,
	Zr,
	Vr,
	Si,
	ne,
	ss,
	Xs,
	fe,
	$o,
	Wo,
	gr,
	wu,
	gs,
	bu,
	ce,
	qs,
	Tu,
	Su,
	Pn,
	Hs,
	po,
	Sr,
	_o,
	Ji,
	Us,
	ms,
	Mi = 1,
	re = Date.now,
	ys = re(),
	Xe = 0,
	Xr = 0,
	Go = function (t, e, n) {
		var r = De(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
		return (n["_" + e + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
	},
	jo = function (t, e) {
		return e && (!De(t) || t.substr(0, 6) !== "clamp(")
			? "clamp(" + t + ")"
			: t;
	},
	ac = function a() {
		return Xr && requestAnimationFrame(a);
	},
	Ko = function () {
		return (ss = 1);
	},
	Qo = function () {
		return (ss = 0);
	},
	on = function (t) {
		return t;
	},
	qr = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	Mu = function () {
		return typeof window < "u";
	},
	Ou = function () {
		return R || (Mu() && (R = window.gsap) && R.registerPlugin && R);
	},
	sr = function (t) {
		return !!~xu.indexOf(t);
	},
	Du = function (t) {
		return (
			(t === "Height" ? _o : nt["inner" + t]) ||
			Ke["client" + t] ||
			pt["client" + t]
		);
	},
	Pu = function (t) {
		return (
			Fn(t, "getBoundingClientRect") ||
			(sr(t)
				? function () {
						return (Xi.width = nt.innerWidth), (Xi.height = _o), Xi;
					}
				: function () {
						return vn(t);
					})
		);
	},
	uc = function (t, e, n) {
		var r = n.d,
			i = n.d2,
			s = n.a;
		return (s = Fn(t, "getBoundingClientRect"))
			? function () {
					return s()[r];
				}
			: function () {
					return (e ? Du(i) : t["client" + i]) || 0;
				};
	},
	lc = function (t, e) {
		return !e || ~fn.indexOf(t)
			? Pu(t)
			: function () {
					return Xi;
				};
	},
	ln = function (t, e) {
		var n = e.s,
			r = e.d2,
			i = e.d,
			s = e.a;
		return Math.max(
			0,
			(n = "scroll" + r) && (s = Fn(t, n))
				? s() - Pu(t)()[i]
				: sr(t)
					? (Ke[n] || pt[n]) - Du(r)
					: t[n] - t["offset" + r],
		);
	},
	Oi = function (t, e) {
		for (var n = 0; n < gr.length; n += 3)
			(!e || ~e.indexOf(gr[n + 1])) && t(gr[n], gr[n + 1], gr[n + 2]);
	},
	De = function (t) {
		return typeof t == "string";
	},
	_e = function (t) {
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
	ku = "top",
	go = "right",
	mo = "bottom",
	tr = "width",
	er = "height",
	Jr = "Right",
	ti = "Left",
	ei = "Top",
	ni = "Bottom",
	zt = "padding",
	ze = "margin",
	Er = "Width",
	yo = "Height",
	Xt = "px",
	Ne = function (t) {
		return nt.getComputedStyle(t);
	},
	cc = function (t) {
		var e = Ne(t).position;
		t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
	},
	Zo = function (t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t;
	},
	vn = function (t, e) {
		var n =
				e &&
				Ne(t)[Xs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				R.to(t, {
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
	Eu = function (t) {
		var e = [],
			n = t.labels,
			r = t.duration(),
			i;
		for (i in n) e.push(n[i] / r);
		return e;
	},
	fc = function (t) {
		return function (e) {
			return R.utils.snap(Eu(t), e);
		};
	},
	vo = function (t) {
		var e = R.utils.snap(t),
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
	hc = function (t) {
		return function (e, n) {
			return vo(Eu(t))(e, n.direction);
		};
	},
	Di = function (t, e, n, r) {
		return n.split(",").forEach(function (i) {
			return t(e, i, r);
		});
	},
	Wt = function (t, e, n, r, i) {
		return t.addEventListener(e, n, { passive: !r, capture: !!i });
	},
	$t = function (t, e, n, r) {
		return t.removeEventListener(e, n, !!r);
	},
	Pi = function (t, e, n) {
		(n = n && n.wheelHandler), n && (t(e, "wheel", n), t(e, "touchmove", n));
	},
	Jo = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	Ci = { toggleActions: "play", anticipatePin: 0 },
	es = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Ni = function (t, e) {
		if (De(t)) {
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
				(v += (r === qt ? go : mo) + ":" + (s + parseFloat(p)) + "px;"),
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
			R.set(t, i);
	},
	Q = [],
	$s = {},
	di,
	ta = function () {
		return re() - Xe > 34 && (di || (di = requestAnimationFrame(bn)));
	},
	pr = function () {
		(!ce || !ce.isPressed || ce.startX > pt.clientWidth) &&
			(Z.cache++,
			ce ? di || (di = requestAnimationFrame(bn)) : bn(),
			Xe || ar("scrollStart"),
			(Xe = re()));
	},
	xs = function () {
		(Su = nt.innerWidth), (Tu = nt.innerHeight);
	},
	Ur = function () {
		Z.cache++,
			!ne &&
				!bu &&
				!bt.fullscreenElement &&
				!bt.webkitFullscreenElement &&
				(!qs ||
					Su !== nt.innerWidth ||
					Math.abs(nt.innerHeight - Tu) > nt.innerHeight * 0.25) &&
				Zi.restart(!0);
	},
	or = {},
	dc = [],
	Au = function a() {
		return $t(K, "scrollEnd", a) || jn(!0);
	},
	ar = function (t) {
		return (
			(or[t] &&
				or[t].map(function (e) {
					return e();
				})) ||
			dc
		);
	},
	Oe = [],
	Ru = function (t) {
		for (var e = 0; e < Oe.length; e += 5)
			(!t || (Oe[e + 4] && Oe[e + 4].query === t)) &&
				((Oe[e].style.cssText = Oe[e + 1]),
				Oe[e].getBBox && Oe[e].setAttribute("transform", Oe[e + 2] || ""),
				(Oe[e + 3].uncache = 1));
	},
	xo = function (t, e) {
		var n;
		for (fe = 0; fe < Q.length; fe++)
			(n = Q[fe]),
				n && (!e || n._ctx === e) && (t ? n.kill(1) : n.revert(!0, !0));
		(Ji = !0), e && Ru(e), e || ar("revert");
	},
	Lu = function (t, e) {
		Z.cache++,
			(e || !he) &&
				Z.forEach(function (n) {
					return _e(n) && n.cacheID++ && (n.rec = 0);
				}),
			De(t) && (nt.history.scrollRestoration = po = t);
	},
	he,
	nr = 0,
	ea,
	pc = function () {
		if (ea !== nr) {
			var t = (ea = nr);
			requestAnimationFrame(function () {
				return t === nr && jn(!0);
			});
		}
	},
	Iu = function () {
		pt.appendChild(Sr),
			(_o = (!ce && Sr.offsetHeight) || nt.innerHeight),
			pt.removeChild(Sr);
	},
	na = function (t) {
		return hi(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	jn = function (t, e) {
		if (Xe && !t && !Ji) {
			Wt(K, "scrollEnd", Au);
			return;
		}
		Iu(),
			(he = K.isRefreshing = !0),
			Z.forEach(function (r) {
				return _e(r) && ++r.cacheID && (r.rec = r());
			});
		var n = ar("refreshInit");
		wu && K.sort(),
			e || xo(),
			Z.forEach(function (r) {
				_e(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
			}),
			Q.slice(0).forEach(function (r) {
				return r.refresh();
			}),
			(Ji = !1),
			Q.forEach(function (r) {
				if (r._subPinOffset && r.pin) {
					var i = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
						s = r.pin[i];
					r.revert(!0, 1), r.adjustPinSpacing(r.pin[i] - s), r.refresh();
				}
			}),
			(Us = 1),
			na(!0),
			Q.forEach(function (r) {
				var i = ln(r.scroller, r._dir),
					s = r.vars.end === "max" || (r._endClamp && r.end > i),
					o = r._startClamp && r.start >= i;
				(s || o) &&
					r.setPositions(
						o ? i - 1 : r.start,
						s ? Math.max(o ? i : r.start + 1, i) : r.end,
						!0,
					);
			}),
			na(!1),
			(Us = 0),
			n.forEach(function (r) {
				return r && r.render && r.render(-1);
			}),
			Z.forEach(function (r) {
				_e(r) &&
					(r.smooth &&
						requestAnimationFrame(function () {
							return (r.target.style.scrollBehavior = "smooth");
						}),
					r.rec && r(r.rec));
			}),
			Lu(po, 1),
			Zi.pause(),
			nr++,
			(he = 2),
			bn(2),
			Q.forEach(function (r) {
				return _e(r.vars.onRefresh) && r.vars.onRefresh(r);
			}),
			(he = K.isRefreshing = !1),
			ar("refresh");
	},
	Ws = 0,
	Yi = 1,
	ri,
	bn = function (t) {
		if (t === 2 || (!he && !Ji)) {
			(K.isUpdating = !0), ri && ri.update(0);
			var e = Q.length,
				n = re(),
				r = n - ys >= 50,
				i = e && Q[0].scroll();
			if (
				((Yi = Ws > i ? -1 : 1),
				he || (Ws = i),
				r &&
					(Xe && !ss && n - Xe > 200 && ((Xe = 0), ar("scrollEnd")),
					(Vr = ys),
					(ys = n)),
				Yi < 0)
			) {
				for (fe = e; fe-- > 0; ) Q[fe] && Q[fe].update(0, r);
				Yi = 1;
			} else for (fe = 0; fe < e; fe++) Q[fe] && Q[fe].update(0, r);
			K.isUpdating = !1;
		}
		di = 0;
	},
	Gs = [
		Cu,
		ku,
		mo,
		go,
		ze + ni,
		ze + Jr,
		ze + ei,
		ze + ti,
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
	Vi = Gs.concat([
		tr,
		er,
		"boxSizing",
		"max" + Er,
		"max" + yo,
		"position",
		ze,
		zt,
		zt + ei,
		zt + Jr,
		zt + ni,
		zt + ti,
	]),
	_c = function (t, e, n) {
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
			for (var i = Gs.length, s = e.style, o = t.style, u; i--; )
				(u = Gs[i]), (s[u] = n[u]);
			(s.position = n.position === "absolute" ? "absolute" : "relative"),
				n.display === "inline" && (s.display = "inline-block"),
				(o[mo] = o[go] = "auto"),
				(s.flexBasis = n.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[tr] = ts(t, pe) + Xt),
				(s[er] = ts(t, qt) + Xt),
				(s[zt] = o[ze] = o[ku] = o[Cu] = "0"),
				Mr(r),
				(o[tr] = o["max" + Er] = n[tr]),
				(o[er] = o["max" + yo] = n[er]),
				(o[zt] = n[zt]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	gc = /([A-Z])/g,
	Mr = function (t) {
		if (t) {
			var e = t.t.style,
				n = t.length,
				r = 0,
				i,
				s;
			for ((t.t._gsap || R.core.getCache(t.t)).uncache = 1; r < n; r += 2)
				(s = t[r + 1]),
					(i = t[r]),
					s
						? (e[i] = s)
						: e[i] && e.removeProperty(i.replace(gc, "-$1").toLowerCase());
		}
	},
	Ei = function (t) {
		for (var e = Vi.length, n = t.style, r = [], i = 0; i < e; i++)
			r.push(Vi[i], n[Vi[i]]);
		return (r.t = t), r;
	},
	mc = function (t, e, n) {
		for (var r = [], i = t.length, s = n ? 8 : 0, o; s < i; s += 2)
			(o = t[s]), r.push(o, o in e ? e[o] : t[s + 1]);
		return (r.t = t.t), r;
	},
	Xi = { left: 0, top: 0 },
	ra = function (t, e, n, r, i, s, o, u, l, c, f, p, h, _) {
		_e(t) && (t = t(u)),
			De(t) &&
				t.substr(0, 3) === "max" &&
				(t = p + (t.charAt(4) === "=" ? Ni("0" + t.substr(3), n) : 0));
		var d = h ? h.time() : 0,
			g,
			m,
			y;
		if ((h && h.seek(0), isNaN(t) || (t = +t), Hr(t)))
			h &&
				(t = R.utils.mapRange(
					h.scrollTrigger.start,
					h.scrollTrigger.end,
					0,
					p,
					t,
				)),
				o && Bi(o, n, r, !0);
		else {
			_e(e) && (e = e(u));
			var w = (t || "0").split(" "),
				v,
				b,
				O,
				T;
			(y = ye(e, u) || pt),
				(v = vn(y) || {}),
				(!v || (!v.left && !v.top)) &&
					Ne(y).display === "none" &&
					((T = y.style.display),
					(y.style.display = "block"),
					(v = vn(y)),
					T ? (y.style.display = T) : y.style.removeProperty("display")),
				(b = Ni(w[0], v[r.d])),
				(O = Ni(w[1] || "0", n)),
				(t = v[r.p] - l[r.p] - c + b + i - O),
				o && Bi(o, O, r, n - O < 20 || (o._isStart && O > 20)),
				(n -= n - O);
		}
		if ((_ && ((u[_] = t || -0.001), t < 0 && (t = 0)), s)) {
			var P = t + n,
				M = s._isStart;
			(g = "scroll" + r.d2),
				Bi(
					s,
					P,
					r,
					(M && P > 20) ||
						(!M && (f ? Math.max(pt[g], Ke[g]) : s.parentNode[g]) <= P + 1),
				),
				f &&
					((l = vn(o)),
					f && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + Xt));
		}
		return (
			h &&
				y &&
				((g = vn(y)),
				h.seek(p),
				(m = vn(y)),
				(h._caScrollDist = g[r.p] - m[r.p]),
				(t = (t / h._caScrollDist) * p)),
			h && h.seek(d),
			h ? t : Math.round(t)
		);
	},
	yc = /(webkit|moz|length|cssText|inset)/i,
	ia = function (t, e, n, r) {
		if (t.parentNode !== e) {
			var i = t.style,
				s,
				o;
			if (e === pt) {
				(t._stOrig = i.cssText), (o = Ne(t));
				for (s in o)
					!+s &&
						!yc.test(s) &&
						o[s] &&
						typeof i[s] == "string" &&
						s !== "0" &&
						(i[s] = o[s]);
				(i.top = n), (i.left = r);
			} else i.cssText = t._stOrig;
			(R.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	Fu = function (t, e, n) {
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
		(r[e.p] = "+=" + n), R.set(t, r);
	},
	sa = function (t, e) {
		var n = Bn(t, e),
			r = "_scroll" + e.p2,
			i = function s(o, u, l, c, f) {
				var p = s.tween,
					h = u.onComplete,
					_ = {};
				l = l || n();
				var d = Fu(n, l, function () {
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
						Z.cache++, s.tween && bn();
					}),
					(u.onComplete = function () {
						(s.tween = 0), h && h.call(p);
					}),
					(p = s.tween = R.to(t, u)),
					p
				);
			};
		return (
			(t[r] = n),
			(n.wheelHandler = function () {
				return i.tween && i.tween.kill() && (i.tween = 0);
			}),
			Wt(t, "wheel", n.wheelHandler),
			K.isTouch && Wt(t, "touchmove", n.wheelHandler),
			i
		);
	},
	K = (function () {
		function a(e, n) {
			_r ||
				a.register(R) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				Hs(this),
				this.init(e, n);
		}
		var t = a.prototype;
		return (
			(t.init = function (n, r) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Xr)
				) {
					this.update = this.refresh = this.kill = on;
					return;
				}
				n = Zo(De(n) || Hr(n) || n.nodeType ? { trigger: n } : n, Ci);
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
					P = i.fastScrollEnd,
					M = i.preventOverlaps,
					D =
						n.horizontal || (n.containerAnimation && n.horizontal !== !1)
							? pe
							: qt,
					E = !f && f !== 0,
					C = ye(n.scroller || nt),
					N = R.core.getCache(C),
					F = sr(C),
					V =
						("pinType" in n
							? n.pinType
							: Fn(C, "pinType") || (F && "fixed")) === "fixed",
					Y = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
					I = E && n.toggleActions.split(" "),
					$ = "markers" in n ? n.markers : Ci.markers,
					tt = F ? 0 : parseFloat(Ne(C)["border" + D.p2 + Er]) || 0,
					x = this,
					J =
						n.onRefreshInit &&
						function () {
							return n.onRefreshInit(x);
						},
					Mt = uc(C, F, D),
					Ht = lc(C, F),
					st = 0,
					vt = 0,
					kt = 0,
					it = Bn(C, D),
					ut,
					ft,
					Lt,
					G,
					A,
					L,
					q,
					ot,
					Ot,
					S,
					Dt,
					Yt,
					ge,
					_t,
					Le,
					Ze,
					dn,
					It,
					He,
					xt,
					ae,
					Ft,
					Se,
					pn,
					dt,
					cr,
					Je,
					Mn,
					On,
					Ue,
					_n,
					j,
					tn,
					me,
					$e,
					We,
					Vn,
					fr,
					gn;
				if (
					((x._startClamp = x._endClamp = !1),
					(x._dir = D),
					(g *= 45),
					(x.scroller = C),
					(x.scroll = T ? T.time.bind(T) : it),
					(G = it()),
					(x.vars = n),
					(r = r || n.animation),
					"refreshPriority" in n &&
						((wu = 1), n.refreshPriority === -9999 && (ri = x)),
					(N.tweenScroll = N.tweenScroll || {
						top: sa(C, qt),
						left: sa(C, pe),
					}),
					(x.tweenTo = ut = N.tweenScroll[D.p]),
					(x.scrubDuration = function (k) {
						(tn = Hr(k) && k),
							tn
								? j
									? j.duration(k)
									: (j = R.to(r, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: tn,
											paused: !0,
											onComplete: function () {
												return m && m(x);
											},
										}))
								: (j && j.progress(1).kill(), (j = 0));
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
						(Ue = 0),
						u || (u = r.vars.id)),
					v &&
						((!Wn(v) || v.push) && (v = { snapTo: v }),
						"scrollBehavior" in pt.style &&
							R.set(F ? [pt, Ke] : C, { scrollBehavior: "auto" }),
						Z.forEach(function (k) {
							return (
								_e(k) &&
								k.target === (F ? bt.scrollingElement || Ke : C) &&
								(k.smooth = !1)
							);
						}),
						(Lt = _e(v.snapTo)
							? v.snapTo
							: v.snapTo === "labels"
								? fc(r)
								: v.snapTo === "labelsDirectional"
									? hc(r)
									: v.directional !== !1
										? function (k, U) {
												return vo(v.snapTo)(
													k,
													re() - vt < 500 ? 0 : U.direction,
												);
											}
										: R.utils.snap(v.snapTo)),
						(me = v.duration || { min: 0.1, max: 2 }),
						(me = Wn(me) ? Zr(me.min, me.max) : Zr(me, me)),
						($e = R.delayedCall(v.delay || tn / 2 || 0.1, function () {
							var k = it(),
								U = re() - vt < 500,
								z = ut.tween;
							if (
								(U || Math.abs(x.getVelocity()) < 10) &&
								!z &&
								!ss &&
								st !== k
							) {
								var X = (k - L) / _t,
									Ut = r && !E ? r.totalProgress() : X,
									et = U ? 0 : ((Ut - _n) / (re() - Vr)) * 1e3 || 0,
									Et = R.utils.clamp(-X, 1 - X, (dr(et / 2) * et) / 0.185),
									Jt = X + (v.inertia === !1 ? 0 : Et),
									Pt,
									gt,
									lt = v,
									Ge = lt.onStart,
									wt = lt.onInterrupt,
									Me = lt.onComplete;
								if (
									((Pt = Lt(Jt, x)),
									Hr(Pt) || (Pt = Jt),
									(gt = Math.round(L + Pt * _t)),
									k <= q && k >= L && gt !== k)
								) {
									if (z && !z._initted && z.data <= dr(gt - k)) return;
									v.inertia === !1 && (Et = Pt - X),
										ut(
											gt,
											{
												duration: me(
													dr(
														(Math.max(dr(Jt - Ut), dr(Pt - Ut)) * 0.185) /
															et /
															0.05 || 0,
													),
												),
												ease: v.ease || "power3",
												data: dr(gt - k),
												onInterrupt: function () {
													return $e.restart(!0) && wt && wt(x);
												},
												onComplete: function () {
													x.update(),
														(st = it()),
														r &&
															(j
																? j.resetTo(
																		"totalProgress",
																		Pt,
																		r._tTime / r._tDur,
																	)
																: r.progress(Pt)),
														(Ue = _n =
															r && !E ? r.totalProgress() : x.progress),
														y && y(x),
														Me && Me(x);
												},
											},
											k,
											Et * _t,
											gt - k - Et * _t,
										),
										Ge && Ge(x, ut.tween);
								}
							} else x.isActive && st !== k && $e.restart(!0);
						}).pause())),
					u && ($s[u] = x),
					(p = x.trigger = ye(p || (h !== !0 && h))),
					(gn = p && p._gsap && p._gsap.stRevert),
					gn && (gn = gn(x)),
					(h = h === !0 ? p : ye(h)),
					De(o) && (o = { targets: p, className: o }),
					h &&
						(_ === !1 ||
							_ === ze ||
							(_ =
								!_ &&
								h.parentNode &&
								h.parentNode.style &&
								Ne(h.parentNode).display === "flex"
									? !1
									: zt),
						(x.pin = h),
						(ft = R.core.getCache(h)),
						ft.spacer
							? (Le = ft.pinState)
							: (O &&
									((O = ye(O)),
									O && !O.nodeType && (O = O.current || O.nativeElement),
									(ft.spacerIsNative = !!O),
									O && (ft.spacerState = Ei(O))),
								(ft.spacer = It = O || bt.createElement("div")),
								It.classList.add("pin-spacer"),
								u && It.classList.add("pin-spacer-" + u),
								(ft.pinState = Le = Ei(h))),
						n.force3D !== !1 && R.set(h, { force3D: !0 }),
						(x.spacer = It = ft.spacer),
						(On = Ne(h)),
						(pn = On[_ + D.os2]),
						(xt = R.getProperty(h)),
						(ae = R.quickSetter(h, D.a, Xt)),
						ws(h, It, On),
						(dn = Ei(h))),
					$)
				) {
					(Yt = Wn($) ? Zo($, Jo) : Jo),
						(S = ki("scroller-start", u, C, D, Yt, 0)),
						(Dt = ki("scroller-end", u, C, D, Yt, 0, S)),
						(He = S["offset" + D.op.d2]);
					var Ar = ye(Fn(C, "content") || C);
					(ot = this.markerStart = ki("start", u, Ar, D, Yt, He, 0, T)),
						(Ot = this.markerEnd = ki("end", u, Ar, D, Yt, He, 0, T)),
						T && (fr = R.quickSetter([ot, Ot], D.a, Xt)),
						!V &&
							!(fn.length && Fn(C, "fixedMarkers") === !0) &&
							(cc(F ? pt : C),
							R.set([S, Dt], { force3D: !0 }),
							(cr = R.quickSetter(S, D.a, Xt)),
							(Mn = R.quickSetter(Dt, D.a, Xt)));
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
						return Q[Q.indexOf(x) - 1];
					}),
					(x.next = function () {
						return Q[Q.indexOf(x) + 1];
					}),
					(x.revert = function (k, U) {
						if (!U) return x.kill(!0);
						var z = k !== !1 || !x.enabled,
							X = ne;
						z !== x.isReverted &&
							(z &&
								((We = Math.max(it(), x.scroll.rec || 0)),
								(kt = x.progress),
								(Vn = r && r.progress())),
							ot &&
								[ot, Ot, S, Dt].forEach(function (Ut) {
									return (Ut.style.display = z ? "none" : "block");
								}),
							z && ((ne = x), x.update(z)),
							h &&
								(!b || !x.isActive) &&
								(z ? _c(h, It, Le) : ws(h, It, Ne(h), dt)),
							z || x.update(z),
							(ne = X),
							(x.isReverted = z));
					}),
					(x.refresh = function (k, U, z, X) {
						if (!((ne || !x.enabled) && !U)) {
							if (h && k && Xe) {
								Wt(a, "scrollEnd", Au);
								return;
							}
							!he && J && J(x),
								(ne = x),
								ut.tween && !z && (ut.tween.kill(), (ut.tween = 0)),
								j && j.pause(),
								d && r && r.revert({ kill: !1 }).invalidate(),
								x.isReverted || x.revert(!0, !0),
								(x._subPinOffset = !1);
							var Ut = Mt(),
								et = Ht(),
								Et = T ? T.duration() : ln(C, D),
								Jt = _t <= 0.01,
								Pt = 0,
								gt = X || 0,
								lt = Wn(z) ? z.end : n.end,
								Ge = n.endTrigger || p,
								wt = Wn(z)
									? z.start
									: n.start || (n.start === 0 || !p ? 0 : h ? "0 0" : "0 100%"),
								Me = (x.pinnedContainer =
									n.pinnedContainer && ye(n.pinnedContainer, x)),
								en = (p && Math.max(0, Q.indexOf(x))) || 0,
								Kt = en,
								Qt,
								te,
								Xn,
								vi,
								ee,
								Vt,
								nn,
								os,
								Do,
								Rr,
								rn,
								Lr,
								xi;
							for (
								$ &&
								Wn(z) &&
								((Lr = R.getProperty(S, D.p)), (xi = R.getProperty(Dt, D.p)));
								Kt--;

							)
								(Vt = Q[Kt]),
									Vt.end || Vt.refresh(0, 1) || (ne = x),
									(nn = Vt.pin),
									nn &&
										(nn === p || nn === h || nn === Me) &&
										!Vt.isReverted &&
										(Rr || (Rr = []), Rr.unshift(Vt), Vt.revert(!0, !0)),
									Vt !== Q[Kt] && (en--, Kt--);
							for (
								_e(wt) && (wt = wt(x)),
									wt = Go(wt, "start", x),
									L =
										ra(
											wt,
											p,
											Ut,
											D,
											it(),
											ot,
											S,
											x,
											et,
											tt,
											V,
											Et,
											T,
											x._startClamp && "_startClamp",
										) || (h ? -0.001 : 0),
									_e(lt) && (lt = lt(x)),
									De(lt) &&
										!lt.indexOf("+=") &&
										(~lt.indexOf(" ")
											? (lt = (De(wt) ? wt.split(" ")[0] : "") + lt)
											: ((Pt = Ni(lt.substr(2), Ut)),
												(lt = De(wt)
													? wt
													: (T
															? R.utils.mapRange(
																	0,
																	T.duration(),
																	T.scrollTrigger.start,
																	T.scrollTrigger.end,
																	L,
																)
															: L) + Pt),
												(Ge = p))),
									lt = Go(lt, "end", x),
									q =
										Math.max(
											L,
											ra(
												lt || (Ge ? "100% 0" : Et),
												Ge,
												Ut,
												D,
												it() + Pt,
												Ot,
												Dt,
												x,
												et,
												tt,
												V,
												Et,
												T,
												x._endClamp && "_endClamp",
											),
										) || -0.001,
									Pt = 0,
									Kt = en;
								Kt--;

							)
								(Vt = Q[Kt]),
									(nn = Vt.pin),
									nn &&
										Vt.start - Vt._pinPush <= L &&
										!T &&
										Vt.end > 0 &&
										((Qt =
											Vt.end -
											(x._startClamp ? Math.max(0, Vt.start) : Vt.start)),
										((nn === p && Vt.start - Vt._pinPush < L) || nn === Me) &&
											isNaN(wt) &&
											(Pt += Qt * (1 - Vt.progress)),
										nn === h && (gt += Qt));
							if (
								((L += Pt),
								(q += Pt),
								x._startClamp && (x._startClamp += Pt),
								x._endClamp &&
									!he &&
									((x._endClamp = q || -0.001), (q = Math.min(q, ln(C, D)))),
								(_t = q - L || ((L -= 0.01) && 0.001)),
								Jt && (kt = R.utils.clamp(0, 1, R.utils.normalize(L, q, We))),
								(x._pinPush = gt),
								ot &&
									Pt &&
									((Qt = {}),
									(Qt[D.a] = "+=" + Pt),
									Me && (Qt[D.p] = "-=" + it()),
									R.set([ot, Ot], Qt)),
								h && !(Us && x.end >= ln(C, D)))
							)
								(Qt = Ne(h)),
									(vi = D === qt),
									(Xn = it()),
									(Ft = parseFloat(xt(D.a)) + gt),
									!Et &&
										q > 1 &&
										((rn = (F ? bt.scrollingElement || Ke : C).style),
										(rn = {
											style: rn,
											value: rn["overflow" + D.a.toUpperCase()],
										}),
										F &&
											Ne(pt)["overflow" + D.a.toUpperCase()] !== "scroll" &&
											(rn.style["overflow" + D.a.toUpperCase()] = "scroll")),
									ws(h, It, Qt),
									(dn = Ei(h)),
									(te = vn(h, !0)),
									(os = V && Bn(C, vi ? pe : qt)()),
									_
										? ((dt = [_ + D.os2, _t + gt + Xt]),
											(dt.t = It),
											(Kt = _ === zt ? ts(h, D) + _t + gt : 0),
											Kt &&
												(dt.push(D.d, Kt + Xt),
												It.style.flexBasis !== "auto" &&
													(It.style.flexBasis = Kt + Xt)),
											Mr(dt),
											Me &&
												Q.forEach(function (Ir) {
													Ir.pin === Me &&
														Ir.vars.pinSpacing !== !1 &&
														(Ir._subPinOffset = !0);
												}),
											V && it(We))
										: ((Kt = ts(h, D)),
											Kt &&
												It.style.flexBasis !== "auto" &&
												(It.style.flexBasis = Kt + Xt)),
									V &&
										((ee = {
											top: te.top + (vi ? Xn - L : os) + Xt,
											left: te.left + (vi ? os : Xn - L) + Xt,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(ee[tr] = ee["max" + Er] = Math.ceil(te.width) + Xt),
										(ee[er] = ee["max" + yo] = Math.ceil(te.height) + Xt),
										(ee[ze] =
											ee[ze + ei] =
											ee[ze + Jr] =
											ee[ze + ni] =
											ee[ze + ti] =
												"0"),
										(ee[zt] = Qt[zt]),
										(ee[zt + ei] = Qt[zt + ei]),
										(ee[zt + Jr] = Qt[zt + Jr]),
										(ee[zt + ni] = Qt[zt + ni]),
										(ee[zt + ti] = Qt[zt + ti]),
										(Ze = mc(Le, ee, b)),
										he && it(0)),
									r
										? ((Do = r._initted),
											gs(1),
											r.render(r.duration(), !0, !0),
											(Se = xt(D.a) - Ft + _t + gt),
											(Je = Math.abs(_t - Se) > 1),
											V && Je && Ze.splice(Ze.length - 2, 2),
											r.render(0, !0, !0),
											Do || r.invalidate(!0),
											r.parent || r.totalTime(r.totalTime()),
											gs(0))
										: (Se = _t),
									rn &&
										(rn.value
											? (rn.style["overflow" + D.a.toUpperCase()] = rn.value)
											: rn.style.removeProperty("overflow-" + D.a));
							else if (p && it() && !T)
								for (te = p.parentNode; te && te !== pt; )
									te._pinOffset && ((L -= te._pinOffset), (q -= te._pinOffset)),
										(te = te.parentNode);
							Rr &&
								Rr.forEach(function (Ir) {
									return Ir.revert(!1, !0);
								}),
								(x.start = L),
								(x.end = q),
								(G = A = he ? We : it()),
								!T && !he && (G < We && it(We), (x.scroll.rec = 0)),
								x.revert(!1, !0),
								(vt = re()),
								$e && ((st = -1), $e.restart(!0)),
								(ne = 0),
								r &&
									E &&
									(r._initted || Vn) &&
									r.progress() !== Vn &&
									r.progress(Vn || 0, !0).render(r.time(), !0, !0),
								(Jt || kt !== x.progress || T || d) &&
									(r &&
										!E &&
										r.totalProgress(
											T && L < -0.001 && !kt ? R.utils.normalize(L, q, 0) : kt,
											!0,
										),
									(x.progress = Jt || (G - L) / _t === kt ? 0 : kt)),
								h && _ && (It._pinOffset = Math.round(x.progress * Se)),
								j && j.invalidate(),
								isNaN(Lr) ||
									((Lr -= R.getProperty(S, D.p)),
									(xi -= R.getProperty(Dt, D.p)),
									Ai(S, D, Lr),
									Ai(ot, D, Lr - (X || 0)),
									Ai(Dt, D, xi),
									Ai(Ot, D, xi - (X || 0))),
								Jt && !he && x.update(),
								c && !he && !ge && ((ge = !0), c(x), (ge = !1));
						}
					}),
					(x.getVelocity = function () {
						return ((it() - A) / (re() - Vr)) * 1e3 || 0;
					}),
					(x.endAnimation = function () {
						Nr(x.callbackAnimation),
							r &&
								(j
									? j.progress(1)
									: r.paused()
										? E || Nr(r, x.direction < 0, 1)
										: Nr(r, r.reversed()));
					}),
					(x.labelToScroll = function (k) {
						return (
							(r &&
								r.labels &&
								(L || x.refresh() || L) + (r.labels[k] / r.duration()) * _t) ||
							0
						);
					}),
					(x.getTrailing = function (k) {
						var U = Q.indexOf(x),
							z = x.direction > 0 ? Q.slice(0, U).reverse() : Q.slice(U + 1);
						return (
							De(k)
								? z.filter(function (X) {
										return X.vars.preventOverlaps === k;
									})
								: z
						).filter(function (X) {
							return x.direction > 0 ? X.end <= L : X.start >= q;
						});
					}),
					(x.update = function (k, U, z) {
						if (!(T && !z && !k)) {
							var X = he === !0 ? We : x.scroll(),
								Ut = k ? 0 : (X - L) / _t,
								et = Ut < 0 ? 0 : Ut > 1 ? 1 : Ut || 0,
								Et = x.progress,
								Jt,
								Pt,
								gt,
								lt,
								Ge,
								wt,
								Me,
								en;
							if (
								(U &&
									((A = G),
									(G = T ? it() : X),
									v && ((_n = Ue), (Ue = r && !E ? r.totalProgress() : et))),
								g &&
									h &&
									!ne &&
									!Mi &&
									Xe &&
									(!et && L < X + ((X - A) / (re() - Vr)) * g
										? (et = 1e-4)
										: et === 1 &&
											q > X + ((X - A) / (re() - Vr)) * g &&
											(et = 0.9999)),
								et !== Et && x.enabled)
							) {
								if (
									((Jt = x.isActive = !!et && et < 1),
									(Pt = !!Et && Et < 1),
									(wt = Jt !== Pt),
									(Ge = wt || !!et != !!Et),
									(x.direction = et > Et ? 1 : -1),
									(x.progress = et),
									Ge &&
										!ne &&
										((gt = et && !Et ? 0 : et === 1 ? 1 : Et === 1 ? 2 : 3),
										E &&
											((lt =
												(!wt && I[gt + 1] !== "none" && I[gt + 1]) || I[gt]),
											(en =
												r &&
												(lt === "complete" || lt === "reset" || lt in r)))),
									M &&
										(wt || en) &&
										(en || f || !r) &&
										(_e(M)
											? M(x)
											: x.getTrailing(M).forEach(function (Xn) {
													return Xn.endAnimation();
												})),
									E ||
										(j && !ne && !Mi
											? (j._dp._time - j._start !== j._time &&
													j.render(j._dp._time - j._start),
												j.resetTo
													? j.resetTo("totalProgress", et, r._tTime / r._tDur)
													: ((j.vars.totalProgress = et),
														j.invalidate().restart()))
											: r && r.totalProgress(et, !!(ne && (vt || k)))),
									h)
								) {
									if ((k && _ && (It.style[_ + D.os2] = pn), !V))
										ae(qr(Ft + Se * et));
									else if (Ge) {
										if (
											((Me = !k && et > Et && q + 1 > X && X + 1 >= ln(C, D)),
											b)
										)
											if (!k && (Jt || Me)) {
												var Kt = vn(h, !0),
													Qt = X - L;
												ia(
													h,
													pt,
													Kt.top + (D === qt ? Qt : 0) + Xt,
													Kt.left + (D === qt ? 0 : Qt) + Xt,
												);
											} else ia(h, It);
										Mr(Jt || Me ? Ze : dn),
											(Je && et < 1 && Jt) ||
												ae(Ft + (et === 1 && !Me ? Se : 0));
									}
								}
								v && !ut.tween && !ne && !Mi && $e.restart(!0),
									o &&
										(wt || (w && et && (et < 1 || !ms))) &&
										hi(o.targets).forEach(function (Xn) {
											return Xn.classList[Jt || w ? "add" : "remove"](
												o.className,
											);
										}),
									s && !E && !k && s(x),
									Ge && !ne
										? (E &&
												(en &&
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
												w && (et === 1 ? x.kill(!1, 1) : (Y[gt] = 0)),
												wt || ((gt = et === 1 ? 1 : 3), Y[gt] && vs(x, Y[gt]))),
											P &&
												!Jt &&
												Math.abs(x.getVelocity()) > (Hr(P) ? P : 2500) &&
												(Nr(x.callbackAnimation),
												j
													? j.progress(1)
													: Nr(r, lt === "reverse" ? 1 : !et, 1)))
										: E && s && !ne && s(x);
							}
							if (Mn) {
								var te = T ? (X / T.duration()) * (T._caScrollDist || 0) : X;
								cr(te + (S._isFlipped ? 1 : 0)), Mn(te);
							}
							fr && fr((-X / T.duration()) * (T._caScrollDist || 0));
						}
					}),
					(x.enable = function (k, U) {
						x.enabled ||
							((x.enabled = !0),
							Wt(C, "resize", Ur),
							F || Wt(C, "scroll", pr),
							J && Wt(a, "refreshInit", J),
							k !== !1 && ((x.progress = kt = 0), (G = A = st = it())),
							U !== !1 && x.refresh());
					}),
					(x.getTween = function (k) {
						return k && ut ? ut.tween : j;
					}),
					(x.setPositions = function (k, U, z, X) {
						if (T) {
							var Ut = T.scrollTrigger,
								et = T.duration(),
								Et = Ut.end - Ut.start;
							(k = Ut.start + (Et * k) / et), (U = Ut.start + (Et * U) / et);
						}
						x.refresh(
							!1,
							!1,
							{
								start: jo(k, z && !!x._startClamp),
								end: jo(U, z && !!x._endClamp),
							},
							X,
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
							U || (j && j.pause()),
							(We = 0),
							ft && (ft.uncache = 1),
							J && $t(a, "refreshInit", J),
							$e && ($e.pause(), ut.tween && ut.tween.kill() && (ut.tween = 0)),
							!F)
						) {
							for (var z = Q.length; z--; )
								if (Q[z].scroller === C && Q[z] !== x) return;
							$t(C, "resize", Ur), F || $t(C, "scroll", pr);
						}
					}),
					(x.kill = function (k, U) {
						x.disable(k, U), j && !U && j.kill(), u && delete $s[u];
						var z = Q.indexOf(x);
						z >= 0 && Q.splice(z, 1),
							z === fe && Yi > 0 && fe--,
							(z = 0),
							Q.forEach(function (X) {
								return X.scroller === x.scroller && (z = 1);
							}),
							z || he || (x.scroll.rec = 0),
							r &&
								((r.scrollTrigger = null),
								k && r.revert({ kill: !1 }),
								U || r.kill()),
							ot &&
								[ot, Ot, S, Dt].forEach(function (X) {
									return X.parentNode && X.parentNode.removeChild(X);
								}),
							ri === x && (ri = 0),
							h &&
								(ft && (ft.uncache = 1),
								(z = 0),
								Q.forEach(function (X) {
									return X.pin === h && z++;
								}),
								z || (ft.spacer = 0)),
							n.onKill && n.onKill(x);
					}),
					Q.push(x),
					x.enable(!1, !1),
					gn && gn(x),
					r && r.add && !_t)
				) {
					var at = x.update;
					(x.update = function () {
						(x.update = at), L || q || x.refresh();
					}),
						R.delayedCall(0.01, x.update),
						(_t = 0.01),
						(L = q = 0);
				} else x.refresh();
				h && pc();
			}),
			(a.register = function (n) {
				return (
					_r ||
						((R = n || Ou()), Mu() && window.document && a.enable(), (_r = Xr)),
					_r
				);
			}),
			(a.defaults = function (n) {
				if (n) for (var r in n) Ci[r] = n[r];
				return Ci;
			}),
			(a.disable = function (n, r) {
				(Xr = 0),
					Q.forEach(function (s) {
						return s[r ? "kill" : "disable"](n);
					}),
					$t(nt, "wheel", pr),
					$t(bt, "scroll", pr),
					clearInterval(Si),
					$t(bt, "touchcancel", on),
					$t(pt, "touchstart", on),
					Di($t, bt, "pointerdown,touchstart,mousedown", Ko),
					Di($t, bt, "pointerup,touchend,mouseup", Qo),
					Zi.kill(),
					Oi($t);
				for (var i = 0; i < Z.length; i += 3)
					Pi($t, Z[i], Z[i + 1]), Pi($t, Z[i], Z[i + 2]);
			}),
			(a.enable = function () {
				if (
					((nt = window),
					(bt = document),
					(Ke = bt.documentElement),
					(pt = bt.body),
					R &&
						((hi = R.utils.toArray),
						(Zr = R.utils.clamp),
						(Hs = R.core.context || on),
						(gs = R.core.suppressOverwrites || on),
						(po = nt.history.scrollRestoration || "auto"),
						(Ws = nt.pageYOffset),
						R.core.globals("ScrollTrigger", a),
						pt))
				) {
					(Xr = 1),
						(Sr = document.createElement("div")),
						(Sr.style.height = "100vh"),
						(Sr.style.position = "absolute"),
						Iu(),
						ac(),
						Rt.register(R),
						(a.isTouch = Rt.isTouch),
						(Pn =
							Rt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(qs = Rt.isTouch === 1),
						Wt(nt, "wheel", pr),
						(xu = [nt, bt, Ke, pt]),
						R.matchMedia
							? ((a.matchMedia = function (u) {
									var l = R.matchMedia(),
										c;
									for (c in u) l.add(c, u[c]);
									return l;
								}),
								R.addEventListener("matchMediaInit", function () {
									return xo();
								}),
								R.addEventListener("matchMediaRevert", function () {
									return Ru();
								}),
								R.addEventListener("matchMedia", function () {
									jn(0, 1), ar("matchMedia");
								}),
								R.matchMedia("(orientation: portrait)", function () {
									return xs(), xs;
								}))
							: console.warn("Requires GSAP 3.11.0 or later"),
						xs(),
						Wt(bt, "scroll", pr);
					var n = pt.style,
						r = n.borderTopStyle,
						i = R.core.Animation.prototype,
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
							s = vn(pt),
							qt.m = Math.round(s.top + qt.sc()) || 0,
							pe.m = Math.round(s.left + pe.sc()) || 0,
							r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
							Si = setInterval(ta, 250),
							R.delayedCall(0.5, function () {
								return (Mi = 0);
							}),
							Wt(bt, "touchcancel", on),
							Wt(pt, "touchstart", on),
							Di(Wt, bt, "pointerdown,touchstart,mousedown", Ko),
							Di(Wt, bt, "pointerup,touchend,mouseup", Qo),
							Xs = R.utils.checkPrefix("transform"),
							Vi.push(Xs),
							_r = re(),
							Zi = R.delayedCall(0.2, jn).pause(),
							gr = [
								bt,
								"visibilitychange",
								function () {
									var u = nt.innerWidth,
										l = nt.innerHeight;
									bt.hidden
										? (($o = u), (Wo = l))
										: ($o !== u || Wo !== l) && Ur();
								},
								bt,
								"DOMContentLoaded",
								jn,
								nt,
								"load",
								jn,
								nt,
								"resize",
								Ur,
							],
							Oi(Wt),
							Q.forEach(function (u) {
								return u.enable(0, 1);
							}),
							o = 0;
						o < Z.length;
						o += 3
					)
						Pi($t, Z[o], Z[o + 1]), Pi($t, Z[o], Z[o + 2]);
				}
			}),
			(a.config = function (n) {
				"limitCallbacks" in n && (ms = !!n.limitCallbacks);
				var r = n.syncInterval;
				(r && clearInterval(Si)) || ((Si = r) && setInterval(ta, r)),
					"ignoreMobileResize" in n &&
						(qs = a.isTouch === 1 && n.ignoreMobileResize),
					"autoRefreshEvents" in n &&
						(Oi($t) || Oi(Wt, n.autoRefreshEvents || "none"),
						(bu = (n.autoRefreshEvents + "").indexOf("resize") === -1));
			}),
			(a.scrollerProxy = function (n, r) {
				var i = ye(n),
					s = Z.indexOf(i),
					o = sr(i);
				~s && Z.splice(s, o ? 6 : 2),
					r && (o ? fn.unshift(nt, r, pt, r, Ke, r) : fn.unshift(i, r));
			}),
			(a.clearMatchMedia = function (n) {
				Q.forEach(function (r) {
					return r._ctx && r._ctx.query === n && r._ctx.kill(!0, !0);
				});
			}),
			(a.isInViewport = function (n, r, i) {
				var s = (De(n) ? ye(n) : n).getBoundingClientRect(),
					o = s[i ? tr : er] * r || 0;
				return i
					? s.right - o > 0 && s.left + o < nt.innerWidth
					: s.bottom - o > 0 && s.top + o < nt.innerHeight;
			}),
			(a.positionInViewport = function (n, r, i) {
				De(n) && (n = ye(n));
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
				return i ? (s.left + u) / nt.innerWidth : (s.top + u) / nt.innerHeight;
			}),
			(a.killAll = function (n) {
				if (
					(Q.slice(0).forEach(function (i) {
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
K.version = "3.12.5";
K.saveStyles = function (a) {
	return a
		? hi(a).forEach(function (t) {
				if (t && t.style) {
					var e = Oe.indexOf(t);
					e >= 0 && Oe.splice(e, 5),
						Oe.push(
							t,
							t.style.cssText,
							t.getBBox && t.getAttribute("transform"),
							R.core.getCache(t),
							Hs(),
						);
				}
			})
		: Oe;
};
K.revert = function (a, t) {
	return xo(!a, t);
};
K.create = function (a, t) {
	return new K(a, t);
};
K.refresh = function (a) {
	return a ? Ur() : (_r || K.register()) && jn(!0);
};
K.update = function (a) {
	return ++Z.cache && bn(a === !0 ? 2 : 0);
};
K.clearScrollMemory = Lu;
K.maxScroll = function (a, t) {
	return ln(a, t ? pe : qt);
};
K.getScrollFunc = function (a, t) {
	return Bn(ye(a), t ? pe : qt);
};
K.getById = function (a) {
	return $s[a];
};
K.getAll = function () {
	return Q.filter(function (a) {
		return a.vars.id !== "ScrollSmoother";
	});
};
K.isScrolling = function () {
	return !!Xe;
};
K.snapDirectional = vo;
K.addEventListener = function (a, t) {
	var e = or[a] || (or[a] = []);
	~e.indexOf(t) || e.push(t);
};
K.removeEventListener = function (a, t) {
	var e = or[a],
		n = e && e.indexOf(t);
	n >= 0 && e.splice(n, 1);
};
K.batch = function (a, t) {
	var e = [],
		n = {},
		r = t.interval || 0.016,
		i = t.batchMax || 1e9,
		s = function (l, c) {
			var f = [],
				p = [],
				h = R.delayedCall(r, function () {
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
			o.substr(0, 2) === "on" && _e(t[o]) && o !== "onRefreshInit"
				? s(o, t[o])
				: t[o];
	return (
		_e(i) &&
			((i = i()),
			Wt(K, "refresh", function () {
				return (i = t.batchMax());
			})),
		hi(a).forEach(function (u) {
			var l = {};
			for (o in n) l[o] = n[o];
			(l.trigger = u), e.push(K.create(l));
		}),
		e
	);
};
var oa = function (t, e, n, r) {
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
							? "pan-" + e + (Rt.isTouch ? " pinch-zoom" : "")
							: "none"),
			t === Ke && a(pt, e);
	},
	Ri = { auto: 1, scroll: 1 },
	vc = function (t) {
		var e = t.event,
			n = t.target,
			r = t.axis,
			i = (e.changedTouches ? e.changedTouches[0] : e).target,
			s = i._gsap || R.core.getCache(i),
			o = re(),
			u;
		if (!s._isScrollT || o - s._isScrollT > 2e3) {
			for (
				;
				i &&
				i !== pt &&
				((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
					!(Ri[(u = Ne(i)).overflowY] || Ri[u.overflowX]));

			)
				i = i.parentNode;
			(s._isScroll =
				i &&
				i !== n &&
				!sr(i) &&
				(Ri[(u = Ne(i)).overflowY] || Ri[u.overflowX])),
				(s._isScrollT = o);
		}
		(s._isScroll || r === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
	},
	zu = function (t, e, n, r) {
		return Rt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (r = r && vc),
			onPress: r,
			onDrag: r,
			onScroll: r,
			onEnable: function () {
				return n && Wt(bt, Rt.eventTypes[0], ua, !1, !0);
			},
			onDisable: function () {
				return $t(bt, Rt.eventTypes[0], ua, !0);
			},
		});
	},
	xc = /(input|label|select|textarea)/i,
	aa,
	ua = function (t) {
		var e = xc.test(t.target.tagName);
		(e || aa) && ((t._gsapAllow = !0), (aa = e));
	},
	wc = function (t) {
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
			l = ye(t.target) || Ke,
			c = R.core.globals().ScrollSmoother,
			f = c && c.get(),
			p =
				Pn &&
				((t.content && ye(t.content)) ||
					(f && t.content !== !1 && !f.smooth() && f.content())),
			h = Bn(l, qt),
			_ = Bn(l, pe),
			d = 1,
			g =
				(Rt.isTouch && nt.visualViewport
					? nt.visualViewport.scale * nt.visualViewport.width
					: nt.outerWidth) / nt.innerWidth,
			m = 0,
			y = _e(r)
				? function () {
						return r(o);
					}
				: function () {
						return r || 2.8;
					},
			w,
			v,
			b = zu(l, t.type, !0, i),
			O = function () {
				return (v = !1);
			},
			T = on,
			P = on,
			M = function () {
				(u = ln(l, qt)),
					(P = Zr(Pn ? 1 : 0, u)),
					n && (T = Zr(0, ln(l, pe))),
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
						tt = P(h.v - $);
					if (p && tt !== h.v + h.offset) {
						h.offset = tt - h.v;
						var x = qr((parseFloat(p && p._gsap.y) || 0) - h.offset);
						(p.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							x +
							", 0, 1)"),
							(p._gsap.y = x + "px"),
							(h.cacheID = Z.cache),
							bn();
					}
					return !0;
				}
				h.offset && D(), (v = !0);
			},
			C,
			N,
			F,
			V,
			Y = function () {
				M(),
					C.isActive() &&
						C.vars.scrollY > u &&
						(h() > u ? C.progress(1) && h(u) : C.resetTo("scrollY", u));
			};
		return (
			p && R.set(p, { y: "+=0" }),
			(t.ignoreCheck = function (I) {
				return (
					(Pn && I.type === "touchmove" && E()) ||
					(d > 1.05 && I.type !== "touchstart") ||
					o.isGesturing ||
					(I.touches && I.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				v = !1;
				var I = d;
				(d = qr(((nt.visualViewport && nt.visualViewport.scale) || 1) / g)),
					C.pause(),
					I !== d && bs(l, d > 1.01 ? !0 : n ? !1 : "x"),
					(N = _()),
					(F = h()),
					M(),
					(w = nr);
			}),
			(t.onRelease = t.onGestureStart =
				function (I, $) {
					if ((h.offset && D(), !$)) V.restart(!0);
					else {
						Z.cache++;
						var tt = y(),
							x,
							J;
						n &&
							((x = _()),
							(J = x + (tt * 0.05 * -I.velocityX) / 0.227),
							(tt *= oa(_, x, J, ln(l, pe))),
							(C.vars.scrollX = T(J))),
							(x = h()),
							(J = x + (tt * 0.05 * -I.velocityY) / 0.227),
							(tt *= oa(h, x, J, ln(l, qt))),
							(C.vars.scrollY = P(J)),
							C.invalidate().duration(tt).play(0.01),
							((Pn && C.vars.scrollY >= u) || x >= u - 1) &&
								R.to({}, { onUpdate: Y, duration: tt });
					}
					s && s(I);
				}),
			(t.onWheel = function () {
				C._ts && C.pause(), re() - m > 1e3 && ((w = 0), (m = re()));
			}),
			(t.onChange = function (I, $, tt, x, J) {
				if (
					(nr !== w && M(),
					$ && n && _(T(x[2] === $ ? N + (I.startX - I.x) : _() + $ - x[1])),
					tt)
				) {
					h.offset && D();
					var Mt = J[2] === tt,
						Ht = Mt ? F + I.startY - I.y : h() + tt - J[1],
						st = P(Ht);
					Mt && Ht !== st && (F += st - Ht), h(st);
				}
				(tt || $) && bn();
			}),
			(t.onEnable = function () {
				bs(l, n ? !1 : "x"),
					K.addEventListener("refresh", Y),
					Wt(nt, "resize", Y),
					h.smooth &&
						((h.target.style.scrollBehavior = "auto"),
						(h.smooth = _.smooth = !1)),
					b.enable();
			}),
			(t.onDisable = function () {
				bs(l, !0),
					$t(nt, "resize", Y),
					K.removeEventListener("refresh", Y),
					b.kill();
			}),
			(t.lockAxis = t.lockAxis !== !1),
			(o = new Rt(t)),
			(o.iOS = Pn),
			Pn && !h() && h(1),
			Pn && R.ticker.add(on),
			(V = o._dc),
			(C = R.to(o, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: n ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: Fu(h, h(), function () {
						return C.pause();
					}),
				},
				onUpdate: bn,
				onComplete: V.vars.onComplete,
			})),
			o
		);
	};
K.sort = function (a) {
	return Q.sort(
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
K.observe = function (a) {
	return new Rt(a);
};
K.normalizeScroll = function (a) {
	if (typeof a > "u") return ce;
	if (a === !0 && ce) return ce.enable();
	if (a === !1) {
		ce && ce.kill(), (ce = a);
		return;
	}
	var t = a instanceof Rt ? a : wc(a);
	return ce && ce.target === t.target && ce.kill(), sr(t.target) && (ce = t), t;
};
K.core = {
	_getVelocityProp: Vs,
	_inputObserver: zu,
	_scrollers: Z,
	_proxies: fn,
	bridge: {
		ss: function () {
			Xe || ar("scrollStart"), (Xe = re());
		},
		ref: function () {
			return ne;
		},
	},
};
Ou() && R.registerPlugin(K);
W.registerPlugin(K);
class bc {
	constructor() {
		this.init();
	}
	setup() {
		this.visibilityTl = W.timeline({
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
function wo(a) {
	return typeof a == "number";
}
function js(a) {
	return typeof a == "string";
}
function bo(a) {
	return typeof a == "boolean";
}
function la(a) {
	return Object.prototype.toString.call(a) === "[object Object]";
}
function yt(a) {
	return Math.abs(a);
}
function To(a) {
	return Math.sign(a);
}
function ii(a, t) {
	return yt(a - t);
}
function Tc(a, t) {
	if (a === 0 || t === 0 || yt(a) <= yt(t)) return 0;
	const e = ii(yt(a), yt(t));
	return yt(e / a);
}
function pi(a) {
	return _i(a).map(Number);
}
function Qe(a) {
	return a[yi(a)];
}
function yi(a) {
	return Math.max(0, a.length - 1);
}
function So(a, t) {
	return t === yi(a);
}
function ca(a, t = 0) {
	return Array.from(Array(a), (e, n) => t + n);
}
function _i(a) {
	return Object.keys(a);
}
function Nu(a, t) {
	return [a, t].reduce(
		(e, n) => (
			_i(n).forEach((r) => {
				const i = e[r],
					s = n[r],
					o = la(i) && la(s);
				e[r] = o ? Nu(i, s) : s;
			}),
			e
		),
		{},
	);
}
function Bu(a, t) {
	return typeof t.MouseEvent < "u" && a instanceof t.MouseEvent;
}
function Sc(a, t) {
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
		return js(a) ? e[a](u) : a(t, u, l);
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
function Mc(a, t, e, n) {
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
function Oc(a, t) {
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
function Yu(a, t, e) {
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
		return Yu(a, o(), e);
	}
	const f = { get: o, set: u, add: l, clone: c };
	return f;
}
function Dc(a) {
	const t = a === "rtl" ? -1 : 1;
	function e(r) {
		return r * t;
	}
	return { apply: e };
}
function Pc(a, t, e, n, r, i, s, o, u, l, c, f, p, h, _, d, g, m, y, w) {
	const { cross: v } = a,
		b = ["INPUT", "SELECT", "TEXTAREA"],
		O = { passive: !1 },
		T = gi(),
		P = gi(),
		M = ur(50, 225).constrain(_.measure(20)),
		D = { mouse: 300, touch: 400 },
		E = { mouse: 500, touch: 600 },
		C = d ? 43 : 25;
	let N = !1,
		F = 0,
		V = 0,
		Y = !1,
		I = !1,
		$ = !1,
		tt = !1;
	function x(A) {
		if (!w) return;
		function L(ot) {
			(bo(w) || w(A, ot)) && kt(ot);
		}
		const q = e;
		T.add(q, "dragstart", (ot) => ot.preventDefault(), O)
			.add(q, "touchmove", () => {}, O)
			.add(q, "touchend", () => {})
			.add(q, "touchstart", L)
			.add(q, "mousedown", L)
			.add(q, "touchcancel", ut)
			.add(q, "contextmenu", ut)
			.add(q, "click", ft, !0);
	}
	function J() {
		T.clear(), P.clear();
	}
	function Mt() {
		const A = tt ? n : e;
		P.add(A, "touchmove", it, O)
			.add(A, "touchend", ut)
			.add(A, "mousemove", it, O)
			.add(A, "mouseup", ut);
	}
	function Ht(A) {
		const L = A.nodeName || "";
		return b.includes(L);
	}
	function st() {
		return (d ? E : D)[tt ? "mouse" : "touch"];
	}
	function vt(A, L) {
		const q = p.add(To(A) * -1),
			ot = f.byDistance(A, !d).distance;
		return d || yt(A) < M
			? ot
			: m && L
				? ot * 0.5
				: f.byIndex(q.get(), 0).distance;
	}
	function kt(A) {
		const L = Bu(A, r);
		(tt = L),
			!(L && A.button !== 0) &&
				(Ht(A.target) ||
					(($ = d && L && !A.buttons && N),
					(N = ii(i.get(), o.get()) >= 2),
					(Y = !0),
					s.pointerDown(A),
					c.useFriction(0).useDuration(0),
					i.set(o),
					Mt(),
					(F = s.readPoint(A)),
					(V = s.readPoint(A, v)),
					h.emit("pointerDown")));
	}
	function it(A) {
		const L = s.readPoint(A),
			q = s.readPoint(A, v),
			ot = ii(L, F),
			Ot = ii(q, V);
		if (!I && !tt && (!A.cancelable || ((I = ot > Ot), !I))) return ut(A);
		const S = s.pointerMove(A);
		ot > g && ($ = !0),
			c.useFriction(0.3).useDuration(1),
			u.start(),
			i.add(t.apply(S)),
			A.preventDefault();
	}
	function ut(A) {
		const q = f.byDistance(0, !1).index !== p.get(),
			ot = s.pointerUp(A) * st(),
			Ot = vt(t.apply(ot), q),
			S = Tc(ot, Ot),
			Dt = C - 10 * S,
			Yt = y + S / 50;
		(I = !1),
			(Y = !1),
			P.clear(),
			c.useDuration(Dt).useFriction(Yt),
			l.distance(Ot, !d),
			(tt = !1),
			h.emit("pointerUp");
	}
	function ft(A) {
		$ && (A.stopPropagation(), A.preventDefault());
	}
	function Lt() {
		return Y;
	}
	return { init: x, pointerDown: Lt, destroy: J };
}
function Cc(a, t) {
	let n, r;
	function i(f) {
		return f.timeStamp;
	}
	function s(f, p) {
		const _ = `client${(p || a.scroll) === "x" ? "X" : "Y"}`;
		return (Bu(f, t) ? f : f.touches[0])[_];
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
function kc() {
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
function Ec(a) {
	function t(n) {
		return a * (n / 100);
	}
	return { measure: t };
}
function Ac(a, t, e, n, r, i, s) {
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
			c || ((bo(i) || i(d, y)) && g(y));
		})),
			[a].concat(n).forEach((y) => o.observe(y));
	}
	function h() {
		o && o.disconnect(), (c = !0);
	}
	return { init: p, destroy: h };
}
function Rc(a, t, e, n, r) {
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
			(s = To(T)),
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
function Ic(a, t, e, n, r) {
	const i = ur(-t + a, 0),
		s = f(),
		o = c(),
		u = p();
	function l(_, d) {
		return ii(_, d) < 1;
	}
	function c() {
		const _ = s[0],
			d = Qe(s),
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
					v = So(e, d);
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
function Fc(a, t, e) {
	const n = t[0],
		r = e ? n - a : Qe(t);
	return { limit: ur(r, n) };
}
function zc(a, t, e, n) {
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
function Nc(a) {
	const { max: t, length: e } = a;
	function n(i) {
		const s = i - t;
		return e ? s / -e : 0;
	}
	return { get: n };
}
function Bc(a, t, e, n, r) {
	const { startEdge: i, endEdge: s } = a,
		{ groupSlides: o } = r,
		u = f().map(t.measure),
		l = p(),
		c = h();
	function f() {
		return o(n)
			.map((d) => Qe(d)[s] - d[0][i])
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
function Yc(a, t, e, n, r, i) {
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
							y = So(g, d);
						if (m) {
							const w = Qe(g[0]) + 1;
							return ca(w);
						}
						if (y) {
							const w = yi(i) - Qe(g)[0] + 1;
							return ca(w, Qe(g)[0]);
						}
						return _;
					});
	}
	return { slideRegistry: l };
}
function Vc(a, t, e, n, r) {
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
		const m = g.filter((y) => To(y) === d);
		return m.length ? u(m) : Qe(g) - e;
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
function qc(a, t, e, n, r, i) {
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
			wo(g) && (r.useDuration(0), n.index(g, 0));
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
		return wo(u) ? u : u.get();
	}
	return { get: e, set: n, add: r, subtract: i };
}
function Vu(a, t, e) {
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
function Hc(a, t, e, n, r, i, s, o, u, l) {
	const f = pi(i),
		p = pi(i).reverse(),
		h = y().concat(w());
	function _(P, M) {
		return P.reduce((D, E) => D - i[E], M);
	}
	function d(P, M) {
		return P.reduce((D, E) => (_(D, M) > 0 ? D.concat([E]) : D), []);
	}
	function g(P) {
		return s.map((M, D) => ({
			start: M - r[D] + 0.5 + P,
			end: M + e - 0.5 + P,
		}));
	}
	function m(P, M, D) {
		const E = g(M);
		return P.map((C) => {
			const N = D ? 0 : -n,
				F = D ? n : 0,
				V = D ? "end" : "start",
				Y = E[C][V];
			return {
				index: C,
				loopPoint: Y,
				slideLocation: qi(-1),
				translate: Vu(a, t, l[C]),
				target: () => (u.get() > Y ? N : F),
			};
		});
	}
	function y() {
		const P = o[0],
			M = d(p, P);
		return m(M, n, !1);
	}
	function w() {
		const P = e - o[0] - 1,
			M = d(f, P);
		return m(M, -n, !0);
	}
	function v() {
		return h.every(({ index: P }) => {
			const M = f.filter((D) => D !== P);
			return _(M, e) <= 0.1;
		});
	}
	function b() {
		h.forEach((P) => {
			const { target: M, translate: D, slideLocation: E } = P,
				C = M();
			C !== E.get() && (D.to(C), E.set(C));
		});
	}
	function O() {
		h.forEach((P) => P.translate.clear());
	}
	return { canLoop: v, clear: O, loop: b, loopPoints: h };
}
function Uc(a, t, e) {
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
			r || ((bo(e) || e(u, c)) && l(c));
		})),
			n.observe(a, { childList: !0 });
	}
	function s() {
		n && n.disconnect(), (r = !0);
	}
	return { init: i, destroy: s };
}
function $c(a, t, e, n) {
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
function Wc(a, t, e, n, r, i) {
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
		const y = i.getComputedStyle(Qe(n));
		return parseFloat(y.getPropertyValue(`margin-${u}`));
	}
	function g() {
		return e
			.map((y, w, v) => {
				const b = !w,
					O = So(v, w);
				return b ? p[w] + c : O ? p[w] + f : v[w + 1][o] - y[o];
			})
			.map(yt);
	}
	return { slideSizes: p, slideSizesWithGaps: h, startGap: c, endGap: f };
}
function Gc(a, t, e, n, r, i, s, o, u, l) {
	const { startEdge: c, endEdge: f } = a,
		p = wo(n);
	function h(m, y) {
		return pi(m)
			.filter((w) => w % y === 0)
			.map((w) => m.slice(w, w + y));
	}
	function _(m) {
		return m.length
			? pi(m)
					.reduce((y, w) => {
						const v = Qe(y) || 0,
							b = v === 0,
							O = w === yi(m),
							T = i[c] - s[v][c],
							P = i[c] - s[w][f],
							M = !r && b ? t.apply(o) : 0,
							D = !r && O ? t.apply(u) : 0;
						return (
							yt(P - D - (T + M)) > e + l && y.push(w), O && y.push(m.length), y
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
function jc(a, t, e, n, r, i, s) {
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
		T = kc(),
		P = T.measure(t),
		M = e.map(T.measure),
		D = Dc(l),
		E = Oc(u, l),
		C = E.measureSize(P),
		N = Ec(C),
		F = Sc(o, C),
		V = !f && !!y,
		Y = f || !!y,
		{
			slideSizes: I,
			slideSizesWithGaps: $,
			startGap: tt,
			endGap: x,
		} = Wc(E, P, M, e, Y, r),
		J = Gc(E, D, C, g, f, P, M, tt, x, O),
		{ snaps: Mt, snapsAligned: Ht } = Bc(E, F, P, M, J),
		st = -Qe(Mt) + Qe($),
		{ snapsContained: vt, scrollContainLimit: kt } = Ic(C, st, Ht, y, O),
		it = V ? vt : Ht,
		{ limit: ut } = Fc(st, it, f),
		ft = Yu(yi(it), c, f),
		Lt = ft.clone(),
		G = pi(e),
		A = ({
			dragHandler: Ft,
			scrollBody: Se,
			scrollBounds: pn,
			options: { loop: dt },
		}) => {
			dt || pn.constrain(Ft.pointerDown()), Se.seek();
		},
		L = (
			{
				scrollBody: Ft,
				translate: Se,
				location: pn,
				offsetLocation: dt,
				scrollLooper: cr,
				slideLooper: Je,
				dragHandler: Mn,
				animation: On,
				eventHandler: Ue,
				options: { loop: _n },
			},
			j,
		) => {
			const tn = Ft.velocity(),
				me = Ft.settled();
			me && !Mn.pointerDown() && (On.stop(), Ue.emit("settle")),
				me || Ue.emit("scroll"),
				dt.set(pn.get() - tn + tn * j),
				_n && (cr.loop(Ft.direction()), Je.loop()),
				Se.to(dt.get());
		},
		q = Mc(
			n,
			r,
			() => A(ae),
			(Ft) => L(ae, Ft),
		),
		ot = 0.68,
		Ot = it[ft.get()],
		S = qi(Ot),
		Dt = qi(Ot),
		Yt = qi(Ot),
		ge = Rc(S, Dt, Yt, p, ot),
		_t = Vc(f, it, st, ut, Yt),
		Le = Xc(q, ft, Lt, ge, _t, Yt, s),
		Ze = Nc(ut),
		dn = gi(),
		It = $c(t, e, s, d),
		{ slideRegistry: He } = Yc(V, y, it, kt, J, G),
		xt = qc(a, e, He, Le, ge, dn),
		ae = {
			ownerDocument: n,
			ownerWindow: r,
			eventHandler: s,
			containerRect: P,
			slideRects: M,
			animation: q,
			axis: E,
			direction: D,
			dragHandler: Pc(
				E,
				D,
				a,
				n,
				r,
				Yt,
				Cc(E, r),
				S,
				q,
				Le,
				ge,
				_t,
				ft,
				s,
				N,
				h,
				_,
				m,
				ot,
				b,
			),
			eventStore: dn,
			percentOfView: N,
			index: ft,
			indexPrevious: Lt,
			limit: ut,
			location: S,
			offsetLocation: Dt,
			options: i,
			resizeHandler: Ac(t, s, r, e, E, w, T),
			scrollBody: ge,
			scrollBounds: Lc(ut, Dt, Yt, ge, N),
			scrollLooper: zc(st, ut, Dt, [S, Dt, Yt]),
			scrollProgress: Ze,
			scrollSnapList: it.map(Ze.get),
			scrollSnaps: it,
			scrollTarget: _t,
			scrollTo: Le,
			slideLooper: Hc(E, D, C, st, I, $, Mt, it, Dt, e),
			slideFocus: xt,
			slidesHandler: Uc(t, s, v),
			slidesInView: It,
			slideIndexes: G,
			slideRegistry: He,
			slidesToScroll: J,
			target: Yt,
			translate: Vu(E, D, t),
		};
	return ae;
}
function Kc() {
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
const Qc = {
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
function Zc(a) {
	function t(i, s) {
		return Nu(i, s || {});
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
function Jc(a) {
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
function Mo(a, t, e) {
	const n = a.ownerDocument,
		r = n.defaultView,
		i = Zc(r),
		s = Jc(i),
		o = gi(),
		u = Kc(),
		{ mergeOptions: l, optionsAtMedia: c, optionsMediaQueries: f } = i,
		{ on: p, off: h, emit: _ } = u,
		d = E;
	let g = !1,
		m,
		y = l(Qc, Mo.globalOptions),
		w = l(y),
		v = [],
		b,
		O,
		T;
	function P() {
		const { container: G, slides: A } = w;
		O = (js(G) ? a.querySelector(G) : G) || a.children[0];
		const q = js(A) ? O.querySelectorAll(A) : A;
		T = [].slice.call(q || O.children);
	}
	function M(G) {
		const A = jc(a, O, T, n, r, G, u);
		if (G.loop && !A.slideLooper.canLoop()) {
			const L = Object.assign({}, G, { loop: !1 });
			return M(L);
		}
		return A;
	}
	function D(G, A) {
		g ||
			((y = l(y, G)),
			(w = c(y)),
			(v = A || v),
			P(),
			(m = M(w)),
			f([y, ...v.map(({ options: L }) => L)]).forEach((L) =>
				o.add(L, "change", E),
			),
			w.active &&
				(m.translate.to(m.location.get()),
				m.animation.init(),
				m.slidesInView.init(),
				m.slideFocus.init(),
				m.eventHandler.init(Lt),
				m.resizeHandler.init(Lt),
				m.slidesHandler.init(Lt),
				m.options.loop && m.slideLooper.loop(),
				O.offsetParent && T.length && m.dragHandler.init(Lt),
				(b = s.init(Lt, v))));
	}
	function E(G, A) {
		const L = J();
		C(), D(l({ startIndex: L }, G), A), u.emit("reInit");
	}
	function C() {
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
		g || ((g = !0), o.clear(), C(), u.emit("destroy"));
	}
	function F(G, A, L) {
		!w.active ||
			g ||
			(m.scrollBody.useBaseFriction().useDuration(A === !0 ? 0 : w.duration),
			m.scrollTo.index(G, L || 0));
	}
	function V(G) {
		const A = m.index.add(1).get();
		F(A, G, -1);
	}
	function Y(G) {
		const A = m.index.add(-1).get();
		F(A, G, 1);
	}
	function I() {
		return m.index.add(1).get() !== J();
	}
	function $() {
		return m.index.add(-1).get() !== J();
	}
	function tt() {
		return m.scrollSnapList;
	}
	function x() {
		return m.scrollProgress.get(m.location.get());
	}
	function J() {
		return m.index.get();
	}
	function Mt() {
		return m.indexPrevious.get();
	}
	function Ht() {
		return m.slidesInView.get();
	}
	function st() {
		return m.slidesInView.get(!1);
	}
	function vt() {
		return b;
	}
	function kt() {
		return m;
	}
	function it() {
		return a;
	}
	function ut() {
		return O;
	}
	function ft() {
		return T;
	}
	const Lt = {
		canScrollNext: I,
		canScrollPrev: $,
		containerNode: ut,
		internalEngine: kt,
		destroy: N,
		off: h,
		on: p,
		emit: _,
		plugins: vt,
		previousScrollSnap: Mt,
		reInit: d,
		rootNode: it,
		scrollNext: V,
		scrollPrev: Y,
		scrollProgress: x,
		scrollSnapList: tt,
		scrollTo: F,
		selectedScrollSnap: J,
		slideNodes: ft,
		slidesInView: Ht,
		slidesNotInView: st,
	};
	return D(t, e), setTimeout(() => u.emit("init"), 0), Lt;
}
Mo.globalOptions = void 0;
const tf = {
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
function Oo(a = {}) {
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
			P = O(tf, Oo.globalOptions),
			M = O(P, a);
		if (((t = T(M)), e.scrollSnapList().length <= 1)) return;
		(s = t.jump), (n = !1);
		const { eventStore: D, ownerDocument: E } = e.internalEngine(),
			C = e.rootNode(),
			N = (t.rootNode && t.rootNode(C)) || C,
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
Oo.globalOptions = void 0;
class ef {
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
const Nt = new ef();
function nf(a = 0) {
	window.scrollTo({ top: a, behavior: "smooth" });
}
function Xu(a, t = 0) {
	const e = a.getBoundingClientRect(),
		n = (window.scrollY || document.documentElement.scrollTop) + e.top - t;
	nf(n);
}
const Be = "power4.inOut",
	xn = (a, t = !0, e = 0) => (t ? e : a);
function rf(a, t) {
	(a = W.utils.toArray(a)), (t = t || {});
	let e = W.timeline({
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
		c = t.snap === !1 ? (y) => y : W.utils.snap(t.snap || 1),
		f,
		p,
		h,
		_,
		d,
		g;
	for (
		W.set(a, {
			xPercent: (y, w) => {
				let v = (s[y] = parseFloat(W.getProperty(w, "width", "px")));
				return (
					(o[y] = c(
						(parseFloat(W.getProperty(w, "x", "px")) / v) * 100 +
							W.getProperty(w, "xPercent"),
					)),
					o[y]
				);
			},
		}),
			W.set(a, { x: 0 }),
			f =
				a[n - 1].offsetLeft +
				(o[n - 1] / 100) * s[n - 1] -
				r +
				a[n - 1].offsetWidth * W.getProperty(a[n - 1], "scaleX") +
				(parseFloat(t.paddingRight) || 0),
			g = 0;
		g < n;
		g++
	)
		(d = a[g]),
			(p = (o[g] / 100) * s[g]),
			(h = d.offsetLeft + p - r),
			(_ = h + s[g] * W.getProperty(d, "scaleX")),
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
		let v = W.utils.wrap(0, n, y),
			b = i[v];
		return (
			b > e.time() != y > u &&
				((w.modifiers = { time: W.utils.wrap(0, e.duration()) }),
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
const Ts = 66,
	fa = 5e3;
class sf {
	constructor() {
		Ie(this, "onSlideCtaClick", (t) => {
			const e = t.currentTarget,
				n = e.closest(".js-features-carousel-item");
			if ((t.preventDefault(), n.classList.contains("is-active"))) {
				const r = e.getAttribute("href"),
					i = document.querySelector(`${r}`);
				i && Xu(i, 150);
			} else this.instance.scrollTo(parseInt(n.dataset.index, 10));
		});
		Ie(this, "onSlideChange", () => {
			var s, o;
			const t =
					(o = (s = this.instance) == null ? void 0 : s.plugins()) == null
						? void 0
						: o.autoplay,
				e = this.instance.previousScrollSnap();
			this.activeIndex = this.instance.selectedScrollSnap();
			const n = this.DOM.slides[e],
				r = this.DOM.slides[this.activeIndex];
			W.timeline({
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
		Ie(this, "outSlide", (t) => {
			const e = t.querySelector(".js-features-carousel-item-text"),
				n = W.timeline({
					onStart: () => {
						t.classList.remove("is-active");
					},
				});
			return (
				Nt.device < 1
					? n.to(t, {
							opacity: 0,
							xPercent: -200,
							rotate: -5,
							duration: 0.8,
							ease: Be,
							onComplete: () => {
								W.set(t, { xPercent: 0, rotate: 5 });
							},
						})
					: n
							.to(t, { height: Ts, duration: 0.8, ease: Be })
							.to(
								e,
								{ opacity: 0, height: 0, duration: 0.8, ease: Be },
								"-=0.8",
							),
				n
			);
		});
		Ie(this, "inSlide", (t, e = !1) => {
			const n = t.querySelector(".js-features-carousel-item-text"),
				r = W.timeline({
					onStart: () => {
						t.classList.add("is-active");
					},
				});
			return (
				Nt.device < 1
					? r.to(t, {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
							duration: xn(0.8, e),
							ease: Be,
						})
					: r
							.to(t, {
								height: () => t.offsetWidth * this.hRatio,
								duration: xn(0.8, e),
								ease: Be,
							})
							.to(
								n,
								{ opacity: 1, height: "auto", duration: xn(0.8, e), ease: Be },
								xn("-=0.67", e),
							),
				r
			);
		});
		Ie(this, "start", () => {
			var t, e, n;
			(this.progressTl = W.timeline({ paused: !0 }).to(this.DOM.progress, {
				scaleX: 1,
				duration: fa / 1e3,
				ease: "linear",
			})),
				this.progressTl.play(),
				(n =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay) == null || n.play();
		});
		this.init();
	}
	setup() {
		(this.layoutMode = Nt.device < 1 ? "mobile" : "desktop"),
			(this.hRatio = Nt.device < 1 ? 1 : 0.72331),
			(this.instance = Mo(this.DOM.fakeCarousel, { loop: !0 }, [
				Oo({ delay: fa, playOnInit: !1 }),
			])),
			Nt.device < 1 &&
				(W.set(this.DOM.slides, { opacity: 0, xPercent: 0, rotate: 5 }),
				W.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 })),
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
	resize() {
		var t, e;
		if (this.DOM) {
			if (
				((this.hRatio = Nt.device < 1 ? 1 : 0.72331),
				Nt.device < 1 && this.layoutMode !== "mobile"
					? (W.set(this.DOM.slides, {
							opacity: 0,
							xPercent: 0,
							rotate: 5,
							height: "auto",
						}),
						W.set(this.DOM.slides[this.activeIndex], {
							opacity: 1,
							xPercent: -100,
							rotate: 0,
						}),
						W.set(this.DOM.slidesTexts, { height: "auto", opacity: 1 }))
					: Nt.device >= 1 && this.layoutMode !== "desktop"
						? (W.set(this.DOM.slides, {
								opacity: 1,
								xPercent: "none",
								rotate: 0,
								height: Ts,
							}),
							W.set(this.DOM.slidesTexts, { height: 0, opacity: 0 }),
							W.set(this.DOM.slides[this.activeIndex], {
								height: (n, r) => r.offsetWidth * this.hRatio,
							}),
							W.set(this.DOM.slidesTexts[this.activeIndex], { height: "auto" }))
						: Nt.device >= 1 &&
							this.layoutMode === "desktop" &&
							W.set(this.DOM.slides, {
								height: (n) =>
									n === this.activeIndex
										? this.DOM.slides[n].offsetWidth * this.hRatio
										: Ts,
							}),
				Nt.device >= 1 || (Nt.device < 1 && this.layoutMode !== "mobile"))
			) {
				const n =
					(e = (t = this.instance) == null ? void 0 : t.plugins()) == null
						? void 0
						: e.autoplay;
				this.progressTl.pause(),
					n.reset(),
					n.play(),
					this.progressTl.restart(),
					this.progressTl.play();
			}
			this.layoutMode = Nt.device < 1 ? "mobile" : "desktop";
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
			(this.instance = void 0),
			(this.activeIndex = 0),
			this.setup());
	}
}
class of {
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
const Dn = new of();
class af {
	constructor() {
		Ie(this, "scrollLinkTo", (t) => {
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
class uf {
	constructor(t) {
		this.init(t);
	}
	start() {
		this.loop = rf(this.DOM.items, {
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
W.registerPlugin(K);
class cf {
	constructor() {
		Ie(this, "toggleMenu", () => {
			this.isOpenMenu ? this.hideNav() : this.revealNav();
		});
		Ie(this, "hideNav", (t = !1, e = !1) => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0),
					document.body.classList.remove("is-nav-open");
				const n = W.timeline({
					onComplete: () => {
						(this.isAnimatingMenu = !1), (this.isOpenMenu = !1), e && e();
					},
				});
				return (
					n
						.to(this.DOM.navMobileLinks, {
							yPercent: -100,
							duration: xn(0.8, t),
							stagger: xn(0.1, t),
							onComplete: () => {
								W.set(this.DOM.navMobileLinks, { yPercent: 100 });
							},
							ease: Be,
						})
						.to(
							this.DOM.navMobileCta,
							{
								yPercent: -100,
								duration: xn(0.8, t),
								onComplete: () => {
									W.set(this.DOM.navMobileCta, { yPercent: 100 });
								},
								ease: Be,
							},
							xn(0.1, t),
						)
						.set(this.DOM.navMobileBg, { transformOrigin: "50% 0%" })
						.to(this.DOM.navMobileBg, {
							yPercent: -100,
							duration: xn(0.8, t),
							onComplete: () => {
								W.set(this.DOM.navMobileBg, { yPercent: 100 });
							},
							ease: Be,
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
		Ie(this, "revealNav", () => {
			if (!this.isAnimatingMenu) {
				(this.isAnimatingMenu = !0), document.body.classList.add("is-nav-open");
				const t = W.timeline({
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
						.to(this.DOM.navMobileBg, { yPercent: 0, duration: 0.8, ease: Be })
						.to(
							this.DOM.navMobileCta,
							{ yPercent: 0, duration: 0.8, ease: Be },
							"-=0.34",
						)
						.to(
							this.DOM.navMobileLinks,
							{ yPercent: 0, stagger: 0.1, duration: 0.8, ease: Be },
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
		this.headTrigger = K.create({
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
W.registerPlugin(K);
class ff {
	constructor() {
		Ie(this, "buildCardsTl", () => {
			const t = W.timeline();
			for (let e = 0; e < this.DOM.cards.length; e++) {
				const n = this.DOM.cards[e],
					r = W.timeline();
				r
					.from(n, { y: Nt.window.height * 0.5, duration: 1.4 })
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
		W.matchMedia().add({ isDesk: "(min-width: 1024px)" }, (e) => {
			const { isDesk: n } = e.conditions;
			n && this.setTrigger();
		});
	}
	setTrigger() {
		const t = W.timeline({
				scrollTrigger: {
					trigger: this.DOM.section,
					start: "top -=20%",
					end: `+=${Nt.window.height * 5}`,
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
		this.winW !== Nt.window.width &&
			((this.winW = Nt.window.width), this.setup());
	}
	setup() {
		const t = Nt.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		),
			document.documentElement.style.setProperty("--v-height", `${t}px`);
	}
	init() {
		(this.winW = Nt.window.width), this.setup();
	}
}
function ha(a, t, e) {
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
function da() {
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
		Ie(this, "onResize", () => {
			Nt.resize(),
				document.body.classList.toggle("is-touch", da()),
				Dn.map("resize");
		});
	}
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			(document.documentElement.className = "js"),
				document.body.classList.toggle("is-touch", da());
		}),
			window.addEventListener("load", () => {
				Nt.init(),
					Dn.add("viewportFixer", new hf()),
					Dn.add("nav", new cf()),
					Dn.add("hashScroll", new af()),
					Dn.add("featuresCarousel", new sf()),
					Dn.add("marqueeManager", new lf()),
					Dn.add("computeBlock", new bc()),
					Dn.add("testimonials", new ff());
			}),
			window.addEventListener("resize", ha(this.onResize, 150)),
			window.addEventListener("orientationchange", ha(this.onResize, 150));
	}
}
const pf = new df();
pf.start();
