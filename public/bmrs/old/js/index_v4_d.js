var ailiHome = window.ailiHome = function() {
	return ailiHome.fn.initialization()
};
ailiHome.fn = ailiHome.prototype = {
	_topLink: function(e, t) {
		return t = jQuery.extend({
			min: 1,
			fadeSpeed: 200,
			ieOffset: 50
		},
		t),
		e.each(function() {
			$(window).scroll(function() {
				$(window).scrollTop() >= t.min ? $(".tFdNav").removeClass("tFdNavDe") : $(".tFdNav").addClass("tFdNavDe")
			})
		})
	},
	bind: function() {
		var e = $("#tAlMain").offset().top;
		e += 57,
		this._topLink($(".tFdNav"), {
			min: e,
			fadeSpeed: 500
		}),
		$("#tAlTop").click(function(e) {
			e.preventDefault(),
			$.scrollTo(0, 300)
		}),
		document.onkeyup = function(e) {
			var e = e || window.event;
			e.keyCode == 84 && $.scrollTo(0, 300)
		}
	},
	initialization: function() {
		this.bind()
	}
},
ailiHome(),
$(document).ready(function() { (function(e) {
		function n(e) {
			return typeof e == "object" ? e: {
				top: e,
				left: e
			}
		}
		var t = e.scrollTo = function(t, n, r) {
			e(window).scrollTo(t, n, r)
		};
		t.defaults = {
			axis: "xy",
			duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1
		},
		t.window = function(t) {
			return e(window)._scrollable()
		},
		e.fn._scrollable = function() {
			return this.map(function() {
				var t = this,
				n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
				if (!n) return t;
				var r = (t.contentWindow || t).document || t.ownerDocument || t;
				return e.browser.safari || r.compatMode == "BackCompat" ? r.body: r.documentElement
			})
		},
		e.fn.scrollTo = function(r, i, s) {
			return typeof i == "object" && (s = i, i = 0),
			typeof s == "function" && (s = {
				onAfter: s
			}),
			r == "max" && (r = 9e9),
			s = e.extend({},
			t.defaults, s),
			i = i || s.speed || s.duration,
			s.queue = s.queue && s.axis.length > 1,
			s.queue && (i /= 2),
			s.offset = n(s.offset),
			s.over = n(s.over),
			this._scrollable().each(function() {
				function h(e) {
					u.animate(l, i, s.easing, e &&
					function() {
						e.call(this, r, s)
					})
				}
				var o = this,
				u = e(o),
				a = r,
				f,
				l = {},
				c = u.is("html,body");
				switch (typeof a) {
				case "number":
				case "string":
					if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
						a = n(a);
						break
					}
					a = e(a, this);
				case "object":
					if (a.is || a.style) f = (a = e(a)).offset()
				}
				e.each(s.axis.split(""),
				function(e, n) {
					var r = n == "x" ? "Left": "Top",
					i = r.toLowerCase(),
					p = "scroll" + r,
					d = o[p],
					v = t.max(o, n);
					if (f) l[p] = f[i] + (c ? 0 : d - u.offset()[i]),
					s.margin && (l[p] -= parseInt(a.css("margin" + r)) || 0, l[p] -= parseInt(a.css("border" + r + "Width")) || 0),
					l[p] += s.offset[i] || 0,
					s.over[i] && (l[p] += a[n == "x" ? "width": "height"]() * s.over[i]);
					else {
						var m = a[i];
						l[p] = m.slice && m.slice( - 1) == "%" ? parseFloat(m) / 100 * v: m
					}
					/^\d+$/.test(l[p]) && (l[p] = l[p] <= 0 ? 0 : Math.min(l[p], v)),
					!e && s.queue && (d != l[p] && h(s.onAfterFirst), delete l[p])
				}),
				h(s.onAfter)
			}).end()
		},
		t.max = function(t, n) {
			var r = n == "x" ? "Width": "Height",
			i = "scroll" + r;
			if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
			var s = "client" + r,
			o = t.ownerDocument.documentElement,
			u = t.ownerDocument.body;
			return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
		}
	})(jQuery)
})