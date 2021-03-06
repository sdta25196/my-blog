(function(i) {
	var l = {
		version: "1.1.2",
		debug: false
	};
	function h(s, r) {
		if (s instanceof Array) {
			for (var q = 0,
			p = s.length; q < p; q++) {
				if (r.call(s[q], s[q], q) === false) {
					return
				}
			}
		} else {
			for (var q in s) {
				if (s.hasOwnProperty(q)) {
					if (r.call(s[q], s[q], q) === false) {
						return
					}
				}
			}
		}
	}
	function j(p, r) {
		if (Array.prototype.indexOf) {
			return p.indexOf(r)
		}
		for (var q = 0,
		o = p.length; q < o; q++) {
			if (p[q] === r) {
				return q
			}
		}
		return - 1
	}
	function a(o, q) {
		if (Array.prototype.filter) {
			return o.filter(q)
		}
		var p = [];
		h(o,
		function(t, s, r) {
			if (q(t, s, r)) {
				p.push(t)
			}
		});
		return p
	}
	function e(o, p) {
		return a(p,
		function(q) {
			return ! g.loadingPaths[q] || !n(g.cache[q], o)
		})
	}
	function n(p, q) {
		if (!p || p._loaded) {
			return false
		}
		var r = p.deps || [];
		if (r.length) {
			if (j(r, q) > -1) {
				return true
			} else {
				for (var o = 0; o < r.length; o++) {
					if (n(g.cache[r[o]], q)) {
						return true
					}
				}
				return false
			}
		}
		return false
	}
	function g(p, o) {
		this.name = o;
		this.path = p;
		this.fn = null;
		this.exports = {};
		this._loaded = false;
		this._requiredStack = [];
		this._readyStack = [];
		g.cache[this.name] = this
	}
	g.loadedPaths = {};
	g.loadingPaths = {};
	g.cache = {};
	g.paths = {};
	g.moduleFileMap = {};
	g.requiredPaths = {};
	g.lazyLoadPaths = {};
	g.prototype = {
		init: function() {
			if (!this._inited) {
				this._inited = true;
				if (!this.fn) {
					throw new Error('Module "' + this.name + '" not found!')
				}
				var o;
				if (o = this.fn.call(null, d, this.exports)) {
					this.exports = o
				}
			}
		},
		load: function() {
			g.loadingPaths[this.path] = true;
			var o = g.moduleFileMap[this.name] || this.path;
			m.create({
				src: o
			})
		},
		lazyLoad: function() {
			var o = this.name,
			p = this.path;
			if (g.lazyLoadPaths[o]) {
				this.define();
				delete g.lazyLoadPaths[o]
			} else {
				if (g.loadedPaths[p]) {
					this.triggerStack()
				} else {
					if (!g.loadingPaths[p]) {
						g.requiredPaths[this.name] = true;
						this.load()
					}
				}
			}
		},
		ready: function(p, q) {
			var o = q ? this._requiredStack: this._readyStack;
			if (p) {
				if (this._loaded) {
					this.init();
					p()
				} else {
					o.push(p)
				}
			} else {
				this._loaded = true;
				g.loadedPaths[this.path] = true;
				delete g.loadingPaths[this.path];
				this.triggerStack()
			}
		},
		triggerStack: function() {
			if (this._readyStack.length > 0) {
				this.init();
				h(this._readyStack,
				function(o) {
					if (!o.doing) {
						o.doing = true;
						o()
					}
				});
				this._readyStack = []
			}
			if (this._requiredStack.length > 0) {
				h(this._requiredStack,
				function(o) {
					if (!o.doing) {
						o.doing = true;
						o()
					}
				});
				this._requiredStack = []
			}
		},
		define: function() {
			var q = this,
			o = this.deps,
			p = [];
			if (!o && l.debug) {
				this.deps = getDependents(q.fn)
			}
			o = e(q.path, this.deps);
			if (o.length) {
				g.loadingPaths[this.path] = true;
				h(o,
				function(s) {
					var r = c(s);
					p.push(r.path)
				});
				h(o,
				function(s) {
					var r = c(s);
					r.ready(function() {
						if (k(p)) {
							q.ready()
						}
					},
					true);
					r.lazyLoad()
				})
			} else {
				this.ready()
			}
		}
	};
	function d(o) {
		if (typeof l.requireListener == "function") {
			l.requireListener(o)
		}
		var p = c(o);
		p.init();
		return p.exports
	}
	function k(p) {
		var o = true;
		h(p,
		function(q) {
			if (! (q in g.loadedPaths)) {
				return o = false
			}
		});
		return o
	}
	function f(o) {
		return i ? (i + o) : o
	}
	function c(o) {
		var p = o.indexOf(":") > -1 ? o: f(o);
		if (g.cache[o]) {
			return g.cache[o]
		}
		return new g(p, o)
	}
	if (i && i.charAt(i.length - 1) == "/") {
		i = i.substr(0, i.length - 1)
	}
	var m = {
		create: function(p) {
			if (p.src in this._paths) {
				return
			}
			this._paths[p.src] = true;
			h(this._rules,
			function(r) {
				r.call(null, p)
			});
			var o = document.getElementsByTagName("head")[0];
			var q = document.createElement("script");
			q.type = p.type || "text/javascript";
			p.charset && (q.charset = p.charset);
			q.src = p.src;
			q.onload = q.onerror = q.onreadystatechange = function() {
				if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
					q.onload = q.onerror = q.onreadystatechange = null;
					if (q.parentNode && !l.debug) {
						o.removeChild(q)
					}
					q = undefined;
					p.loaded && p.loaded()
				}
			};
			o.insertBefore(q, o.firstChild)
		},
		_paths: {},
		_rules: [],
		addPathRule: function(o) {
			this._rules.push(o)
		}
	};
	l.use = function(r, q) {
		if (typeof r === "string") {
			r = [r]
		}
		var p = [];
		var o = [];
		h(r,
		function(s, t) {
			o[t] = false
		});
		if (typeof l.useListener == "function") {
			l.useListener(r)
		}
		h(r,
		function(s, u) {
			var t = c(s);
			t.ready(function() {
				p[u] = t.exports;
				o[u] = true;
				var v = true;
				h(o,
				function(w) {
					if (w === false) {
						return v = false
					}
				});
				if (q && v) {
					q.apply(null, p)
				}
			});
			t.lazyLoad()
		})
	};
	l.module = function(o, q, r) {
		var p = c(o);
		p.fn = q;
		p.deps = r;
		if (g.requiredPaths[o]) {
			p.define()
		} else {
			g.lazyLoadPaths[o] = true
		}
	};
	l.pathRule = function(o) {
		m.addPathRule(o)
	};
	l._fileMap = function(p, o) {
		if (typeof p === "object") {
			h(p,
			function(q, r) {
				l._fileMap(r, q)
			})
		} else {
			if (typeof o === "string") {
				o = [o]
			}
			h(o,
			function(q) {
				g.moduleFileMap[q] = p
			})
		}
	};
	var b = {};
	l.context = function(p, r) {
		var q = arguments.length;
		if (q > 1) {
			b[p] = r
		} else {
			if (q == 1) {
				if (typeof p == "object") {
					for (var o in p) {
						if (p.hasOwnProperty(o)) {
							b[o] = p[o]
						}
					}
				} else {
					return b[p]
				}
			}
		}
	};
	"F" in window || (window.F = l)
})("http://exp.bdstatic.com/");