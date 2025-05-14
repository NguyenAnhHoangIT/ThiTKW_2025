!function(t) {
    function e(e) {
        for (var i, r, l = e[0], p = e[1], c = e[2], d = 0, y = []; d < l.length; d++)
            r = l[d],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && y.push(n[r][0]),
            n[r] = 0;
        for (i in p)
            Object.prototype.hasOwnProperty.call(p, i) && (t[i] = p[i]);
        for (o && o(e); y.length; )
            y.shift()();
        return s.push.apply(s, c || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], i = !0, l = 1; l < a.length; l++) {
                var p = a[l];
                0 !== n[p] && (i = !1)
            }
            i && (s.splice(e--, 1),
            t = r(r.s = a[0]))
        }
        return t
    }
    var i = {}
      , n = {
        1: 0
    }
      , s = [];
    function r(e) {
        if (i[e])
            return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = t,
    r.c = i,
    r.d = function(t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (r.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(a, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return a
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "./";
    var l = window.webpackJsonp = window.webpackJsonp || []
      , p = l.push.bind(l);
    l.push = e,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        e(l[c]);
    var o = p;
    s.push([12, 0]),
    a()
}([function(t, e) {
    t.exports = Twig
}
, , , , function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:37bd6c28a4a6dc52a8b8b257e95ea752dad3b2ae814d74bffefa94edfecbb09544dda9bfe4971230ca38622f317561615eaa34d001dcd22d0badc7f546b6a733:_macros.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.macro",
                macroName: "video",
                parameters: ["mp4", "webm", "attr"],
                defaults: {
                    webm: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }],
                    attr: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }]
                },
                output: [{
                    type: "raw",
                    value: '\r\n\t<video width="1920" height="1080" preload="none" '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "attr",
                        match: ["attr"]
                    }]
                }, {
                    type: "raw",
                    value: ">\r\n\t\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "mp4",
                            match: ["mp4"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t<source src="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "mp4",
                                match: ["mp4"]
                            }]
                        }, {
                            type: "raw",
                            value: '" type="video/mp4">\r\n\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "webm",
                            match: ["webm"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t<source src="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "webm",
                                match: ["webm"]
                            }]
                        }, {
                            type: "raw",
                            value: '" type="video/webm">\r\n\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t\tYour browser does not support the video tag.\r\n\t</video>\r\n"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.macro",
                macroName: "image",
                parameters: ["desktop", "mobile", "type", "lazyload"],
                defaults: {
                    type: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }],
                    lazyload: [{
                        type: "Twig.expression.type.bool",
                        value: !0
                    }]
                },
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "lazyClass",
                        expression: [{
                            type: "Twig.expression.type.string",
                            value: ""
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "lazyPrefixSrc",
                        expression: [{
                            type: "Twig.expression.type.string",
                            value: ""
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "lazyload",
                            match: ["lazyload"]
                        }],
                        output: [{
                            type: "raw",
                            value: "\r\n\t\t"
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "lazyClass",
                                expression: [{
                                    type: "Twig.expression.type.string",
                                    value: "lazyload"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\t\t"
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "lazyPrefixSrc",
                                expression: [{
                                    type: "Twig.expression.type.string",
                                    value: "data-"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\t\t"
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "type",
                                    match: ["type"]
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "swiper"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "==",
                                    precidence: 9,
                                    associativity: "leftToRight",
                                    operator: "=="
                                }],
                                output: [{
                                    type: "raw",
                                    value: "\r\n\t\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "lazyClass",
                                        expression: [{
                                            type: "Twig.expression.type.string",
                                            value: "swiper-lazy"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\t"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "desktop",
                            match: ["desktop"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: "\r\n\t\t<img "
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "lazyPrefixSrc",
                                match: ["lazyPrefixSrc"]
                            }]
                        }, {
                            type: "raw",
                            value: 'src="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "desktop",
                                match: ["desktop"]
                            }]
                        }, {
                            type: "raw",
                            value: '" class="desktop '
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "lazyClass",
                                match: ["lazyClass"]
                            }]
                        }, {
                            type: "raw",
                            value: '" alt="">\r\n\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "mobile",
                            match: ["mobile"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: "\r\n\t\t<img "
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "lazyPrefixSrc",
                                match: ["lazyPrefixSrc"]
                            }]
                        }, {
                            type: "raw",
                            value: 'src="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "mobile",
                                match: ["mobile"]
                            }]
                        }, {
                            type: "raw",
                            value: '" class="mobile '
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "lazyClass",
                                match: ["lazyClass"]
                            }]
                        }, {
                            type: "raw",
                            value: '" alt="">\r\n\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.macro",
                macroName: "swiper_animation",
                parameters: ["animation_in", "animation_out", "delay", "speed_in", "speed_out"],
                defaults: {
                    animation_in: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }],
                    animation_out: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }],
                    delay: [{
                        type: "Twig.expression.type.string",
                        value: ".2s"
                    }],
                    speed_in: [{
                        type: "Twig.expression.type.string",
                        value: ".4s"
                    }],
                    speed_out: [{
                        type: "Twig.expression.type.string",
                        value: ".4s"
                    }]
                },
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.spaceless",
                        match: ["spaceless"],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\tdata-swiper-animation="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "animation_in",
                                match: ["animation_in"]
                            }]
                        }, {
                            type: "raw",
                            value: '" \r\n\t\tdata-duration="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "speed_in",
                                match: ["speed_in"]
                            }]
                        }, {
                            type: "raw",
                            value: '" \r\n\t\tdata-delay="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "delay",
                                match: ["delay"]
                            }]
                        }, {
                            type: "raw",
                            value: '" \r\n\t\tdata-swiper-out-animation="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "animation_out",
                                match: ["animation_out"]
                            }]
                        }, {
                            type: "raw",
                            value: '"\r\n\t\tdata-out-duration="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "speed_out",
                                match: ["speed_out"]
                            }]
                        }, {
                            type: "raw",
                            value: '"\r\n\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.macro",
                macroName: "generateString",
                parameters: ["defaultString", "len"],
                defaults: {
                    defaultString: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }],
                    len: [{
                        type: "Twig.expression.type.number",
                        value: 10,
                        match: ["10", null]
                    }]
                },
                output: [{
                    type: "raw",
                    value: "\r\n"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.spaceless",
                        match: ["spaceless"],
                        output: [{
                            type: "raw",
                            value: "\r\n\t"
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "defaultString",
                                    match: ["defaultString"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "length",
                                    match: ["|length", "length"]
                                }, {
                                    type: "Twig.expression.type.number",
                                    value: 0,
                                    match: ["0", null]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ">",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: ">"
                                }],
                                output: [{
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "defaultString",
                                        match: ["defaultString"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: "\r\n\t"
                                }]
                            }
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.else",
                                match: ["else"],
                                output: [{
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "randomString",
                                        expression: [{
                                            type: "Twig.expression.type.array.start",
                                            value: "[",
                                            match: ["["]
                                        }, {
                                            type: "Twig.expression.type.array.end",
                                            value: "]",
                                            match: ["]"]
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "alpha",
                                        expression: [{
                                            type: "Twig.expression.type.string",
                                            value: "abcdefghijklmnopqrstuvwxyz"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "numbers",
                                        expression: [{
                                            type: "Twig.expression.type.string",
                                            value: "0123456789"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\r\n\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.for",
                                        keyVar: null,
                                        valueVar: "i",
                                        expression: [{
                                            type: "Twig.expression.type.number",
                                            value: 1,
                                            match: ["1", null]
                                        }, {
                                            type: "Twig.expression.type.number",
                                            value: 10,
                                            match: ["10", null]
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "..",
                                            precidence: 20,
                                            associativity: "leftToRight",
                                            operator: ".."
                                        }],
                                        output: [{
                                            type: "raw",
                                            value: "\r\n\t\t\t"
                                        }, {
                                            type: "logic",
                                            token: {
                                                type: "Twig.logic.type.set",
                                                key: "randomCharacter",
                                                expression: [{
                                                    type: "Twig.expression.type._function",
                                                    fn: "random",
                                                    params: [{
                                                        type: "Twig.expression.type.parameter.start",
                                                        value: "(",
                                                        match: ["("]
                                                    }, {
                                                        type: "Twig.expression.type.variable",
                                                        value: "alpha",
                                                        match: ["alpha"]
                                                    }, {
                                                        type: "Twig.expression.type.variable",
                                                        value: "alpha",
                                                        match: ["alpha"]
                                                    }, {
                                                        type: "Twig.expression.type.filter",
                                                        value: "upper",
                                                        match: ["|upper", "upper"]
                                                    }, {
                                                        type: "Twig.expression.type.operator.binary",
                                                        value: "~",
                                                        precidence: 6,
                                                        associativity: "leftToRight",
                                                        operator: "~"
                                                    }, {
                                                        type: "Twig.expression.type.variable",
                                                        value: "numbers",
                                                        match: ["numbers"]
                                                    }, {
                                                        type: "Twig.expression.type.operator.binary",
                                                        value: "~",
                                                        precidence: 6,
                                                        associativity: "leftToRight",
                                                        operator: "~"
                                                    }, {
                                                        type: "Twig.expression.type.string",
                                                        value: "-_"
                                                    }, {
                                                        type: "Twig.expression.type.operator.binary",
                                                        value: "~",
                                                        precidence: 6,
                                                        associativity: "leftToRight",
                                                        operator: "~"
                                                    }, {
                                                        type: "Twig.expression.type.parameter.end",
                                                        value: ")",
                                                        match: [")"],
                                                        expression: !1
                                                    }]
                                                }]
                                            }
                                        }, {
                                            type: "raw",
                                            value: "\r\n\t\t\t"
                                        }, {
                                            type: "logic",
                                            token: {
                                                type: "Twig.logic.type.set",
                                                key: "randomString",
                                                expression: [{
                                                    type: "Twig.expression.type.variable",
                                                    value: "randomString",
                                                    match: ["randomString"]
                                                }, {
                                                    type: "Twig.expression.type.filter",
                                                    value: "merge",
                                                    match: ["|merge", "merge"],
                                                    params: [{
                                                        type: "Twig.expression.type.parameter.start",
                                                        value: "(",
                                                        match: ["("]
                                                    }, {
                                                        type: "Twig.expression.type.array.start",
                                                        value: "[",
                                                        match: ["["]
                                                    }, {
                                                        type: "Twig.expression.type.variable",
                                                        value: "randomCharacter",
                                                        match: ["randomCharacter"]
                                                    }, {
                                                        type: "Twig.expression.type.array.end",
                                                        value: "]",
                                                        match: ["]"]
                                                    }, {
                                                        type: "Twig.expression.type.parameter.end",
                                                        value: ")",
                                                        match: [")"],
                                                        expression: !1
                                                    }]
                                                }]
                                            }
                                        }, {
                                            type: "raw",
                                            value: "\r\n\t\t"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "randomString",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "randomString",
                                            match: ["randomString"]
                                        }, {
                                            type: "Twig.expression.type.filter",
                                            value: "join",
                                            match: ["|join", "join"]
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "\r\n\t\t"
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "randomString",
                                        match: ["randomString"]
                                    }]
                                }, {
                                    type: "raw",
                                    value: "\r\n\t"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n"
                }]
            }
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.macro",
            macroName: "video",
            parameters: ["mp4", "webm", "attr"],
            defaults: {
                webm: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }],
                attr: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }]
            },
            output: [{
                type: "raw",
                value: '\r\n\t<video width="1920" height="1080" preload="none" '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "attr",
                    match: ["attr"]
                }]
            }, {
                type: "raw",
                value: ">\r\n\t\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "mp4",
                        match: ["mp4"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "length",
                        match: ["|length", "length"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 0,
                        match: ["0", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: ">",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: ">"
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t<source src="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "mp4",
                            match: ["mp4"]
                        }]
                    }, {
                        type: "raw",
                        value: '" type="video/mp4">\r\n\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "webm",
                        match: ["webm"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "length",
                        match: ["|length", "length"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 0,
                        match: ["0", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: ">",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: ">"
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t<source src="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "webm",
                            match: ["webm"]
                        }]
                    }, {
                        type: "raw",
                        value: '" type="video/webm">\r\n\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t\tYour browser does not support the video tag.\r\n\t</video>\r\n"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.macro",
            macroName: "image",
            parameters: ["desktop", "mobile", "type", "lazyload"],
            defaults: {
                type: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }],
                lazyload: [{
                    type: "Twig.expression.type.bool",
                    value: !0
                }]
            },
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "lazyClass",
                    expression: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "lazyPrefixSrc",
                    expression: [{
                        type: "Twig.expression.type.string",
                        value: ""
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "lazyload",
                        match: ["lazyload"]
                    }],
                    output: [{
                        type: "raw",
                        value: "\r\n\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "lazyClass",
                            expression: [{
                                type: "Twig.expression.type.string",
                                value: "lazyload"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "lazyPrefixSrc",
                            expression: [{
                                type: "Twig.expression.type.string",
                                value: "data-"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.if",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "type",
                                match: ["type"]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "swiper"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "==",
                                precidence: 9,
                                associativity: "leftToRight",
                                operator: "=="
                            }],
                            output: [{
                                type: "raw",
                                value: "\r\n\t\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "lazyClass",
                                    expression: [{
                                        type: "Twig.expression.type.string",
                                        value: "swiper-lazy"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\t"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "desktop",
                        match: ["desktop"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "length",
                        match: ["|length", "length"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 0,
                        match: ["0", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: ">",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: ">"
                    }],
                    output: [{
                        type: "raw",
                        value: "\r\n\t\t<img "
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "lazyPrefixSrc",
                            match: ["lazyPrefixSrc"]
                        }]
                    }, {
                        type: "raw",
                        value: 'src="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "desktop",
                            match: ["desktop"]
                        }]
                    }, {
                        type: "raw",
                        value: '" class="desktop '
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "lazyClass",
                            match: ["lazyClass"]
                        }]
                    }, {
                        type: "raw",
                        value: '" alt="">\r\n\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "mobile",
                        match: ["mobile"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "length",
                        match: ["|length", "length"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 0,
                        match: ["0", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: ">",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: ">"
                    }],
                    output: [{
                        type: "raw",
                        value: "\r\n\t\t<img "
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "lazyPrefixSrc",
                            match: ["lazyPrefixSrc"]
                        }]
                    }, {
                        type: "raw",
                        value: 'src="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "mobile",
                            match: ["mobile"]
                        }]
                    }, {
                        type: "raw",
                        value: '" class="mobile '
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "lazyClass",
                            match: ["lazyClass"]
                        }]
                    }, {
                        type: "raw",
                        value: '" alt="">\r\n\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.macro",
            macroName: "swiper_animation",
            parameters: ["animation_in", "animation_out", "delay", "speed_in", "speed_out"],
            defaults: {
                animation_in: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }],
                animation_out: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }],
                delay: [{
                    type: "Twig.expression.type.string",
                    value: ".2s"
                }],
                speed_in: [{
                    type: "Twig.expression.type.string",
                    value: ".4s"
                }],
                speed_out: [{
                    type: "Twig.expression.type.string",
                    value: ".4s"
                }]
            },
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.spaceless",
                    match: ["spaceless"],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\tdata-swiper-animation="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "animation_in",
                            match: ["animation_in"]
                        }]
                    }, {
                        type: "raw",
                        value: '" \r\n\t\tdata-duration="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "speed_in",
                            match: ["speed_in"]
                        }]
                    }, {
                        type: "raw",
                        value: '" \r\n\t\tdata-delay="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "delay",
                            match: ["delay"]
                        }]
                    }, {
                        type: "raw",
                        value: '" \r\n\t\tdata-swiper-out-animation="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "animation_out",
                            match: ["animation_out"]
                        }]
                    }, {
                        type: "raw",
                        value: '"\r\n\t\tdata-out-duration="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "speed_out",
                            match: ["speed_out"]
                        }]
                    }, {
                        type: "raw",
                        value: '"\r\n\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.macro",
            macroName: "generateString",
            parameters: ["defaultString", "len"],
            defaults: {
                defaultString: [{
                    type: "Twig.expression.type.string",
                    value: ""
                }],
                len: [{
                    type: "Twig.expression.type.number",
                    value: 10,
                    match: ["10", null]
                }]
            },
            output: [{
                type: "raw",
                value: "\r\n"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.spaceless",
                    match: ["spaceless"],
                    output: [{
                        type: "raw",
                        value: "\r\n\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.if",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "defaultString",
                                match: ["defaultString"]
                            }, {
                                type: "Twig.expression.type.filter",
                                value: "length",
                                match: ["|length", "length"]
                            }, {
                                type: "Twig.expression.type.number",
                                value: 0,
                                match: ["0", null]
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: ">",
                                precidence: 8,
                                associativity: "leftToRight",
                                operator: ">"
                            }],
                            output: [{
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "defaultString",
                                    match: ["defaultString"]
                                }]
                            }, {
                                type: "raw",
                                value: "\r\n\t"
                            }]
                        }
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.else",
                            match: ["else"],
                            output: [{
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "randomString",
                                    expression: [{
                                        type: "Twig.expression.type.array.start",
                                        value: "[",
                                        match: ["["]
                                    }, {
                                        type: "Twig.expression.type.array.end",
                                        value: "]",
                                        match: ["]"]
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "alpha",
                                    expression: [{
                                        type: "Twig.expression.type.string",
                                        value: "abcdefghijklmnopqrstuvwxyz"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "numbers",
                                    expression: [{
                                        type: "Twig.expression.type.string",
                                        value: "0123456789"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\r\n\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.for",
                                    keyVar: null,
                                    valueVar: "i",
                                    expression: [{
                                        type: "Twig.expression.type.number",
                                        value: 1,
                                        match: ["1", null]
                                    }, {
                                        type: "Twig.expression.type.number",
                                        value: 10,
                                        match: ["10", null]
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "..",
                                        precidence: 20,
                                        associativity: "leftToRight",
                                        operator: ".."
                                    }],
                                    output: [{
                                        type: "raw",
                                        value: "\r\n\t\t\t"
                                    }, {
                                        type: "logic",
                                        token: {
                                            type: "Twig.logic.type.set",
                                            key: "randomCharacter",
                                            expression: [{
                                                type: "Twig.expression.type._function",
                                                fn: "random",
                                                params: [{
                                                    type: "Twig.expression.type.parameter.start",
                                                    value: "(",
                                                    match: ["("]
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "alpha",
                                                    match: ["alpha"]
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "alpha",
                                                    match: ["alpha"]
                                                }, {
                                                    type: "Twig.expression.type.filter",
                                                    value: "upper",
                                                    match: ["|upper", "upper"]
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: "~",
                                                    precidence: 6,
                                                    associativity: "leftToRight",
                                                    operator: "~"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "numbers",
                                                    match: ["numbers"]
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: "~",
                                                    precidence: 6,
                                                    associativity: "leftToRight",
                                                    operator: "~"
                                                }, {
                                                    type: "Twig.expression.type.string",
                                                    value: "-_"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: "~",
                                                    precidence: 6,
                                                    associativity: "leftToRight",
                                                    operator: "~"
                                                }, {
                                                    type: "Twig.expression.type.parameter.end",
                                                    value: ")",
                                                    match: [")"],
                                                    expression: !1
                                                }]
                                            }]
                                        }
                                    }, {
                                        type: "raw",
                                        value: "\r\n\t\t\t"
                                    }, {
                                        type: "logic",
                                        token: {
                                            type: "Twig.logic.type.set",
                                            key: "randomString",
                                            expression: [{
                                                type: "Twig.expression.type.variable",
                                                value: "randomString",
                                                match: ["randomString"]
                                            }, {
                                                type: "Twig.expression.type.filter",
                                                value: "merge",
                                                match: ["|merge", "merge"],
                                                params: [{
                                                    type: "Twig.expression.type.parameter.start",
                                                    value: "(",
                                                    match: ["("]
                                                }, {
                                                    type: "Twig.expression.type.array.start",
                                                    value: "[",
                                                    match: ["["]
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "randomCharacter",
                                                    match: ["randomCharacter"]
                                                }, {
                                                    type: "Twig.expression.type.array.end",
                                                    value: "]",
                                                    match: ["]"]
                                                }, {
                                                    type: "Twig.expression.type.parameter.end",
                                                    value: ")",
                                                    match: [")"],
                                                    expression: !1
                                                }]
                                            }]
                                        }
                                    }, {
                                        type: "raw",
                                        value: "\r\n\t\t"
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "logic",
                                token: {
                                    type: "Twig.logic.type.set",
                                    key: "randomString",
                                    expression: [{
                                        type: "Twig.expression.type.variable",
                                        value: "randomString",
                                        match: ["randomString"]
                                    }, {
                                        type: "Twig.expression.type.filter",
                                        value: "join",
                                        match: ["|join", "join"]
                                    }]
                                }
                            }, {
                                type: "raw",
                                value: "\r\n\t\t"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "randomString",
                                    match: ["randomString"]
                                }]
                            }, {
                                type: "raw",
                                value: "\r\n\t"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n"
            }]
        }
    }]
}
, , , , , , , , function(t, e, a) {
    t.exports = a(91)
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:f79a27f48645f749ba848c4a2cfa3330cd9fca0925267d9cdbbfae1587a72505f103e24b3da2bf2a5222e69382dc08a87feb46dc8a5edd5aa866f2c44b53cf6a:header.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_header"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<div class="swiper BannerHeader">\r\n\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<video width="2000" height="1000" autoplay muted loop id="myVideo" class="desktop lazyload">\r\n\t\t\t\t\t\t\t<source src="taydu_mansite/header/images/video-bg.mp4" type="video/mp4">\r\n\t\t\t\t\t\t</video>\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/bg-1.jpg" class="lazyload desktop" alt="">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/mb-bg-1.jpg" class="lazyload mobile" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/bg-1.jpg" class="lazyload desktop" alt="">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/mb-bg-1.jpg" class="lazyload mobile" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="appinfo">\r\n\t\t\t\t\t<div class="appinfo__background desktop">\r\n\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/header/images/bg-appinfo.png" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="appinfo__content desktop-flex flex-column">\r\n\t\t\t\t\t\t<div class="content__flex">\r\n\t\t\t\t\t\t\t<div class="appinfo__item appinfo__item--qr">qr</div>\r\n\r\n\t\t\t\t\t\t\t<div class="group_flex flex-column">\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downappstore">downappstore</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downggplay">downggplay</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downapk">downapk</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="group_flex">\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--topup">topup</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--code">code</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t<a href="https://www.youtube.com/watch?v=_1tZ6E0YxQU" data-fancybox class="trailer">trailer</a>\r\n\t\t\t\t<span class="box__18">Age-18</span>\r\n\t\t\t\t<div class="scroll mobile">\r\n\t\t\t\t\t<a href="#" class="btn__scroll"></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_header"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<div class="swiper BannerHeader">\r\n\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<video width="2000" height="1000" autoplay muted loop id="myVideo" class="desktop lazyload">\r\n\t\t\t\t\t\t\t<source src="taydu_mansite/header/images/video-bg.mp4" type="video/mp4">\r\n\t\t\t\t\t\t</video>\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/bg-1.jpg" class="lazyload desktop" alt="">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/mb-bg-1.jpg" class="lazyload mobile" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/bg-1.jpg" class="lazyload desktop" alt="">\r\n\t\t\t\t\t\t<img data-src="taydu_mansite/header/images/mb-bg-1.jpg" class="lazyload mobile" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="appinfo">\r\n\t\t\t\t\t<div class="appinfo__background desktop">\r\n\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/header/images/bg-appinfo.png" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="appinfo__content desktop-flex flex-column">\r\n\t\t\t\t\t\t<div class="content__flex">\r\n\t\t\t\t\t\t\t<div class="appinfo__item appinfo__item--qr">qr</div>\r\n\r\n\t\t\t\t\t\t\t<div class="group_flex flex-column">\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downappstore">downappstore</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downggplay">downggplay</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--downapk">downapk</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="group_flex">\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--topup">topup</a>\r\n\t\t\t\t\t\t\t\t<a href="#" class="appinfo__item appinfo__item--code">code</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t<a href="https://www.youtube.com/watch?v=_1tZ6E0YxQU" data-fancybox class="trailer">trailer</a>\r\n\t\t\t\t<span class="box__18">Age-18</span>\r\n\t\t\t\t<div class="scroll mobile">\r\n\t\t\t\t\t<a href="#" class="btn__scroll"></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_header rendered", {}, (function(t, e) {
        $("#" + e),
        new Swiper(".BannerHeader",{
            direction: "horizontal",
            slidesPerView: "auto",
            loop: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }
    ))
}
, function(t, e, a) {
    a(17),
    a(18);
    var i = (0,
    a(0).twig)({
        id: "$resolved:90c26431fce90e679d510bdde0c5fa5061c40634b409966cc66a943cdb19e7e8d44bd16b92d1e5ab8b47c95beb17081cd981aa940b8e1ba5b5096aa90a9e43a3:news_event.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_news_event"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/news_event/images/bg-2.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/news_event/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="content_newsBanner">\r\n\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "$resolved:8ad2290b2d5108d0f90782755bc583b5b037ed3c66c517de122d36a78f48f7b87c708a1cd746596fd6e7643ea0b1e7c3cbc2c4715633abb9ab1ab503ebfa27f8:home_banner_hoc.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t\t\t\t\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "$resolved:3f2c2e1d596d8b62f3e0a83af29abb43e3bbcce080e88763d619a9e222eb622be93ab3d998785a238bea9911568520cd7013c0c6fe68a2349f850d394ab98098:home_news_hoc.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="info-usage-buttons">\r\n\t\t\t\t\t<a href="#" class="bt-info-01">Hướng dẫn nạp xu</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-02">Điều khoản sử dụng</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-03">Cẩm nang tân thủ</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-04">Chăm sóc khác hàng</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="effect_mountain">\r\n\t\t\t\t\t<div class="layer layer--left" data-speed="80">\r\n\t\t\t\t\t\t<div class="effect_mountain--left"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="layer layer--right" data-speed="90">\r\n\t\t\t\t\t\t<div class="effect_mountain--right"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_news_event"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/news_event/images/bg-2.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/news_event/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="content_newsBanner">\r\n\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "$resolved:8ad2290b2d5108d0f90782755bc583b5b037ed3c66c517de122d36a78f48f7b87c708a1cd746596fd6e7643ea0b1e7c3cbc2c4715633abb9ab1ab503ebfa27f8:home_banner_hoc.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t\t\t\t\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "$resolved:3f2c2e1d596d8b62f3e0a83af29abb43e3bbcce080e88763d619a9e222eb622be93ab3d998785a238bea9911568520cd7013c0c6fe68a2349f850d394ab98098:home_news_hoc.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="info-usage-buttons">\r\n\t\t\t\t\t<a href="#" class="bt-info-01">Hướng dẫn nạp xu</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-02">Điều khoản sử dụng</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-03">Cẩm nang tân thủ</a>\r\n\t\t\t\t\t<a href="#" class="bt-info-04">Chăm sóc khác hàng</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="effect_mountain">\r\n\t\t\t\t\t<div class="layer layer--left" data-speed="80">\r\n\t\t\t\t\t\t<div class="effect_mountain--left"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="layer layer--right" data-speed="90">\r\n\t\t\t\t\t\t<div class="effect_mountain--right"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    a(4);
    var i = (0,
    a(0).twig)({
        id: "$resolved:3f2c2e1d596d8b62f3e0a83af29abb43e3bbcce080e88763d619a9e222eb622be93ab3d998785a238bea9911568520cd7013c0c6fe68a2349f850d394ab98098:home_news_hoc.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.import",
                expression: '"../../setup/html/_macros.html.twig"',
                contextName: "_macro",
                stack: [{
                    type: "Twig.expression.type.string",
                    value: "$resolved:37bd6c28a4a6dc52a8b8b257e95ea752dad3b2ae814d74bffefa94edfecbb09544dda9bfe4971230ca38622f317561615eaa34d001dcd22d0badc7f546b6a733:_macros.html.twig"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "urlDetail",
                expression: [{
                    type: "Twig.expression.type.string",
                    value: "#urlDetail"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "data",
                expression: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "list"
                }, {
                    type: "Twig.expression.type.array.start",
                    value: "[",
                    match: ["["]
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-3.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Hoạt động Long Môn Chiến"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Cái bẫy ở chỗ em là người code từng dòng của sản phẩm đó, dĩ nhiên em sử dụng được tốt. Nhưng nếu cho 1 user ở bên ngoài vào thử, mọi chuyện sẽ hoàn toàn khác. Lúc đó em mới thấy 1 sản phẩm tốt không phải chỉ tốt ở khâu code, mà còn phải hoàn chỉnh cả UI/UX."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 82624164,
                    match: ["82624164", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-4.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Giới thiệu tính năng Quyết Chiến Lăng Tuyệt Phong"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Một ví dụ rất hay xảy ra là khi các bạn UI UX Designer làm xong phần design, đưa cho coder thì bạn coder hay comment là design như thế này khó quá, không thể làm được và yêu cầu thay đổi design để code dễ hơn."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 52357532,
                    match: ["52357532", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-1.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#external"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Thoải chí xưng hùng cùng Lãnh Thổ Chiến Liên Server"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Các bạn lập trình viên trẻ hoặc quen làm bên outsource thường rơi vào cái bẫy là code sao cho nó chạy được thôi. Bạn coder sử dụng được thì user nghiễm nhiên cũng sử dụng được."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 43962914,
                    match: ["43962914", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-2.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Hệ thống Môn Khách SSS"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Coder phải hiểu và làm chủ sản phẩm thì cái anh ta code ra mới chất lượng được. Điều này là rất quan trọng cho mọi developer muốn phát triển lên."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 38943271,
                    match: ["38943271", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-3.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#external"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Yếu tố quan trọng nhất của 2 người đầu tiên này là commitment (sự cam kết) : họ bắt buộc phải sẵn sàng đi với team đến cuối cùng. Nếu họ có đủ mọi yếu tố, nhưng chỉ muốn tham gia team như 1 công việc part-time, hãy chọn người khác."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 25310144,
                    match: ["25310144", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "thumbnail"
                }, {
                    type: "Twig.expression.type.string",
                    value: "assets/images/data/data-4.jpg"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isNewTab"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "linkExternal"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "title"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Hệ thống Môn Khách SSS"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "shortContent"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Tham gia vào các dự án open source: vừa luyện cho mình, vừa đóng góp cho cộng đồng. Khi đi phỏng vấn, nếu em đưa ra được những dự án riêng này của mình ra, nhà tuyển dụng sẽ đánh giá rất cao."
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "publishDate"
                }, {
                    type: "Twig.expression.type.number",
                    value: 23398824,
                    match: ["23398824", null]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.array.end",
                    value: "]",
                    match: ["]"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }, {
            type: "raw",
            value: '\r\n\r\n<div id="blockHomeNews" class="news news--blockHomeNews">\r\n    <div class="news_tab">\r\n        <ul class="tab">\r\n            <li>\r\n                <a  href="#"\r\n                    class="tab__item"\r\n                    data-params=""\r\n                    data-block-name="tin-tuc"\r\n                    data-shorturl="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "shortUrl",
                match: ["shortUrl"]
            }]
        }, {
            type: "raw",
            value: '"\r\n                    data-viewall="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "site",
                match: ["site"]
            }]
        }, {
            type: "raw",
            value: '/tin-tuc/tin-tuc.1.html"\r\n                ><span>Tin Tức</span></a>\r\n            </li>\r\n            <li><a href="#" class="tab__item"><span>Sự kiện</span></a></li>\r\n            <li><a href="#" class="tab__item"><span>Tính năng</span></a></li>\r\n            <li><a href="#" class="tab__item"><span>Hướng dẫn</span></a></li>\r\n            '
        }, {
            type: "raw",
            value: "\r\n        </ul>\r\n        "
        }, {
            type: "raw",
            value: '\r\n    </div>\r\n    \r\n    <div class="news_list">\r\n        '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "data",
                    match: ["data"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "list"
                }, {
                    type: "Twig.expression.type.filter",
                    value: "length",
                    match: ["|length", "length"]
                }, {
                    type: "Twig.expression.type.number",
                    value: 0,
                    match: ["0", null]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ">",
                    precidence: 8,
                    associativity: "leftToRight",
                    operator: ">"
                }],
                output: [{
                    type: "raw",
                    value: "\r\n            <ul>\r\n                "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "item",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "data",
                            match: ["data"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "list"
                        }, {
                            type: "Twig.expression.type.slice",
                            value: "slice",
                            match: ["[0:6]", "0:6"],
                            params: [0, 6]
                        }],
                        output: [{
                            type: "raw",
                            value: "\r\n\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "img",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "thumbnail"
                                }, {
                                    type: "Twig.expression.type.null",
                                    value: null
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "!=",
                                    precidence: 9,
                                    associativity: "leftToRight",
                                    operator: "!="
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "thumbnail"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "http://placehold.it/600x350"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "?",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: "?"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "urlDetail",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "site",
                                    match: ["site"]
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "/tin-tuc"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "link",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "linkExternal"
                                }, {
                                    type: "Twig.expression.type.null",
                                    value: null
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "!=",
                                    precidence: 9,
                                    associativity: "leftToRight",
                                    operator: "!="
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "linkExternal"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "urlDetail",
                                    match: ["urlDetail"]
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "/"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "catCode"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "/"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "linkSeo"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: ".html"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "?",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: "?"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "target",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "isNewTab"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "target=_blank"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: ""
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "?",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: "?"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "robotFlow",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "linkExternal"
                                }, {
                                    type: "Twig.expression.type.null",
                                    value: null
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "!=",
                                    precidence: 9,
                                    associativity: "leftToRight",
                                    operator: "!="
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "rel=nofollow"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: ""
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "?",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: "?"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "isHot",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "isHot"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "isHot"
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: ""
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "?",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: "?"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\r\n                    "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "link",
                                expression: [{
                                    type: "Twig.expression.type.string",
                                    value: "./content-popup.html"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: '\r\n\r\n                    <li>\r\n                        <a data-src="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "link",
                                match: ["link"]
                            }]
                        }, {
                            type: "raw",
                            value: '" class="news_item__title '
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "isHot",
                                match: ["isHot"]
                            }]
                        }, {
                            type: "raw",
                            value: '">\r\n                            '
                        }, {
                            type: "raw",
                            value: "\r\n                                "
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "title"
                            }, {
                                type: "Twig.expression.type.slice",
                                value: "slice",
                                match: ["[0:45]", "0:45"],
                                params: [0, 45]
                            }]
                        }, {
                            type: "raw",
                            value: "\r\n                                "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "title"
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "length",
                                    match: ["|length", "length"]
                                }, {
                                    type: "Twig.expression.type.number",
                                    value: 45,
                                    match: ["45", null]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ">",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: ">"
                                }],
                                output: [{
                                    type: "raw",
                                    value: "..."
                                }]
                            }
                        }, {
                            type: "raw",
                            value: '\r\n                            \r\n                            <span class="news_item__time">\r\n                                '
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "publishDate"
                            }, {
                                type: "Twig.expression.type.filter",
                                value: "date",
                                match: ["|date", "date"],
                                params: [{
                                    type: "Twig.expression.type.parameter.start",
                                    value: "(",
                                    match: ["("]
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "d-m"
                                }, {
                                    type: "Twig.expression.type.parameter.end",
                                    value: ")",
                                    match: [")"],
                                    expression: !1
                                }]
                            }]
                        }, {
                            type: "raw",
                            value: "\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                "
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n            </ul>\r\n        "
                }]
            }
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.else",
                match: ["else"],
                output: [{
                    type: "raw",
                    value: "\r\n            "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "./empty-data.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n        "
                }]
            }
        }, {
            type: "raw",
            value: '\r\n    </div>\r\n\r\n    <a href="#" class="flex news__viewall viewAll">\r\n        ReadMore\r\n    </a>\r\n\r\n    '
        }, {
            type: "raw",
            value: "\r\n\r\n</div>\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.import",
            expression: '"../../setup/html/_macros.html.twig"',
            contextName: "_macro",
            stack: [{
                type: "Twig.expression.type.string",
                value: "$resolved:37bd6c28a4a6dc52a8b8b257e95ea752dad3b2ae814d74bffefa94edfecbb09544dda9bfe4971230ca38622f317561615eaa34d001dcd22d0badc7f546b6a733:_macros.html.twig"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.set",
            key: "urlDetail",
            expression: [{
                type: "Twig.expression.type.string",
                value: "#urlDetail"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.set",
            key: "data",
            expression: [{
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "list"
            }, {
                type: "Twig.expression.type.array.start",
                value: "[",
                match: ["["]
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-3.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Hoạt động Long Môn Chiến"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Cái bẫy ở chỗ em là người code từng dòng của sản phẩm đó, dĩ nhiên em sử dụng được tốt. Nhưng nếu cho 1 user ở bên ngoài vào thử, mọi chuyện sẽ hoàn toàn khác. Lúc đó em mới thấy 1 sản phẩm tốt không phải chỉ tốt ở khâu code, mà còn phải hoàn chỉnh cả UI/UX."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 82624164,
                match: ["82624164", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-4.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Giới thiệu tính năng Quyết Chiến Lăng Tuyệt Phong"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Một ví dụ rất hay xảy ra là khi các bạn UI UX Designer làm xong phần design, đưa cho coder thì bạn coder hay comment là design như thế này khó quá, không thể làm được và yêu cầu thay đổi design để code dễ hơn."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 52357532,
                match: ["52357532", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-1.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: "#external"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Thoải chí xưng hùng cùng Lãnh Thổ Chiến Liên Server"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Các bạn lập trình viên trẻ hoặc quen làm bên outsource thường rơi vào cái bẫy là code sao cho nó chạy được thôi. Bạn coder sử dụng được thì user nghiễm nhiên cũng sử dụng được."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 43962914,
                match: ["43962914", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-2.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Hệ thống Môn Khách SSS"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Coder phải hiểu và làm chủ sản phẩm thì cái anh ta code ra mới chất lượng được. Điều này là rất quan trọng cho mọi developer muốn phát triển lên."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 38943271,
                match: ["38943271", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-3.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: "#external"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Yếu tố quan trọng nhất của 2 người đầu tiên này là commitment (sự cam kết) : họ bắt buộc phải sẵn sàng đi với team đến cuối cùng. Nếu họ có đủ mọi yếu tố, nhưng chỉ muốn tham gia team như 1 công việc part-time, hãy chọn người khác."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 25310144,
                match: ["25310144", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "thumbnail"
            }, {
                type: "Twig.expression.type.string",
                value: "assets/images/data/data-4.jpg"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isNewTab"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "linkExternal"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "title"
            }, {
                type: "Twig.expression.type.string",
                value: "Hệ thống Môn Khách SSS"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "shortContent"
            }, {
                type: "Twig.expression.type.string",
                value: "Tham gia vào các dự án open source: vừa luyện cho mình, vừa đóng góp cho cộng đồng. Khi đi phỏng vấn, nếu em đưa ra được những dự án riêng này của mình ra, nhà tuyển dụng sẽ đánh giá rất cao."
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "publishDate"
            }, {
                type: "Twig.expression.type.number",
                value: 23398824,
                match: ["23398824", null]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.array.end",
                value: "]",
                match: ["]"]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }]
        }
    }, {
        type: "raw",
        value: '\r\n\r\n<div id="blockHomeNews" class="news news--blockHomeNews">\r\n    <div class="news_tab">\r\n        <ul class="tab">\r\n            <li>\r\n                <a  href="#"\r\n                    class="tab__item"\r\n                    data-params=""\r\n                    data-block-name="tin-tuc"\r\n                    data-shorturl="'
    }, {
        type: "output",
        stack: [{
            type: "Twig.expression.type.variable",
            value: "shortUrl",
            match: ["shortUrl"]
        }]
    }, {
        type: "raw",
        value: '"\r\n                    data-viewall="'
    }, {
        type: "output",
        stack: [{
            type: "Twig.expression.type.variable",
            value: "site",
            match: ["site"]
        }]
    }, {
        type: "raw",
        value: '/tin-tuc/tin-tuc.1.html"\r\n                ><span>Tin Tức</span></a>\r\n            </li>\r\n            <li><a href="#" class="tab__item"><span>Sự kiện</span></a></li>\r\n            <li><a href="#" class="tab__item"><span>Tính năng</span></a></li>\r\n            <li><a href="#" class="tab__item"><span>Hướng dẫn</span></a></li>\r\n            '
    }, {
        type: "raw",
        value: "\r\n        </ul>\r\n        "
    }, {
        type: "raw",
        value: '\r\n    </div>\r\n    \r\n    <div class="news_list">\r\n        '
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.if",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "data",
                match: ["data"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "list"
            }, {
                type: "Twig.expression.type.filter",
                value: "length",
                match: ["|length", "length"]
            }, {
                type: "Twig.expression.type.number",
                value: 0,
                match: ["0", null]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ">",
                precidence: 8,
                associativity: "leftToRight",
                operator: ">"
            }],
            output: [{
                type: "raw",
                value: "\r\n            <ul>\r\n                "
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "item",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "data",
                        match: ["data"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "list"
                    }, {
                        type: "Twig.expression.type.slice",
                        value: "slice",
                        match: ["[0:6]", "0:6"],
                        params: [0, 6]
                    }],
                    output: [{
                        type: "raw",
                        value: "\r\n\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "img",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "thumbnail"
                            }, {
                                type: "Twig.expression.type.null",
                                value: null
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "!=",
                                precidence: 9,
                                associativity: "leftToRight",
                                operator: "!="
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "thumbnail"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "http://placehold.it/600x350"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "?",
                                precidence: 16,
                                associativity: "rightToLeft",
                                operator: "?"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "urlDetail",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "site",
                                match: ["site"]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "/tin-tuc"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "link",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "linkExternal"
                            }, {
                                type: "Twig.expression.type.null",
                                value: null
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "!=",
                                precidence: 9,
                                associativity: "leftToRight",
                                operator: "!="
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "linkExternal"
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "urlDetail",
                                match: ["urlDetail"]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "/"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "catCode"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "/"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "linkSeo"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.string",
                                value: ".html"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "?",
                                precidence: 16,
                                associativity: "rightToLeft",
                                operator: "?"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "target",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "isNewTab"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "target=_blank"
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "?",
                                precidence: 16,
                                associativity: "rightToLeft",
                                operator: "?"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "robotFlow",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "linkExternal"
                            }, {
                                type: "Twig.expression.type.null",
                                value: null
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "!=",
                                precidence: 9,
                                associativity: "leftToRight",
                                operator: "!="
                            }, {
                                type: "Twig.expression.type.string",
                                value: "rel=nofollow"
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "?",
                                precidence: 16,
                                associativity: "rightToLeft",
                                operator: "?"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "isHot",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "isHot"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "isHot"
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "?",
                                precidence: 16,
                                associativity: "rightToLeft",
                                operator: "?"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\r\n                    "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "link",
                            expression: [{
                                type: "Twig.expression.type.string",
                                value: "./content-popup.html"
                            }]
                        }
                    }, {
                        type: "raw",
                        value: '\r\n\r\n                    <li>\r\n                        <a data-src="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "link",
                            match: ["link"]
                        }]
                    }, {
                        type: "raw",
                        value: '" class="news_item__title '
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "isHot",
                            match: ["isHot"]
                        }]
                    }, {
                        type: "raw",
                        value: '">\r\n                            '
                    }, {
                        type: "raw",
                        value: "\r\n                                "
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "item",
                            match: ["item"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "title"
                        }, {
                            type: "Twig.expression.type.slice",
                            value: "slice",
                            match: ["[0:45]", "0:45"],
                            params: [0, 45]
                        }]
                    }, {
                        type: "raw",
                        value: "\r\n                                "
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.if",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "title"
                            }, {
                                type: "Twig.expression.type.filter",
                                value: "length",
                                match: ["|length", "length"]
                            }, {
                                type: "Twig.expression.type.number",
                                value: 45,
                                match: ["45", null]
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: ">",
                                precidence: 8,
                                associativity: "leftToRight",
                                operator: ">"
                            }],
                            output: [{
                                type: "raw",
                                value: "..."
                            }]
                        }
                    }, {
                        type: "raw",
                        value: '\r\n                            \r\n                            <span class="news_item__time">\r\n                                '
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "item",
                            match: ["item"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "publishDate"
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "date",
                            match: ["|date", "date"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "d-m"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }, {
                        type: "raw",
                        value: "\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                "
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n            </ul>\r\n        "
            }]
        }
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.else",
            match: ["else"],
            output: [{
                type: "raw",
                value: "\r\n            "
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "./empty-data.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n        "
            }]
        }
    }, {
        type: "raw",
        value: '\r\n    </div>\r\n\r\n    <a href="#" class="flex news__viewall viewAll">\r\n        ReadMore\r\n    </a>\r\n\r\n    '
    }, {
        type: "raw",
        value: "\r\n\r\n</div>\r\n"
    }]
}
, function(t, e, a) {
    a(4);
    var i = (0,
    a(0).twig)({
        id: "$resolved:8ad2290b2d5108d0f90782755bc583b5b037ed3c66c517de122d36a78f48f7b87c708a1cd746596fd6e7643ea0b1e7c3cbc2c4715633abb9ab1ab503ebfa27f8:home_banner_hoc.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.import",
                expression: '"../../setup/html/_macros.html.twig"',
                contextName: "_macro",
                stack: [{
                    type: "Twig.expression.type.string",
                    value: "$resolved:37bd6c28a4a6dc52a8b8b257e95ea752dad3b2ae814d74bffefa94edfecbb09544dda9bfe4971230ca38622f317561615eaa34d001dcd22d0badc7f546b6a733:_macros.html.twig"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n\r\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "data",
                expression: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "list"
                }, {
                    type: "Twig.expression.type.array.start",
                    value: "[",
                    match: ["["]
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "image"
                }, {
                    type: "Twig.expression.type.string",
                    value: "taydu_mansite/news_event/images/banner.png"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "openWindow"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "name"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Hoạt động Long Môn Chiến"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !0
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "image"
                }, {
                    type: "Twig.expression.type.string",
                    value: "taydu_mansite/news_event/images/banner.png"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: "#link"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "openWindow"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "name"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "image"
                }, {
                    type: "Twig.expression.type.string",
                    value: "taydu_mansite/news_event/images/banner.png"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "openWindow"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "name"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "image"
                }, {
                    type: "Twig.expression.type.string",
                    value: "taydu_mansite/news_event/images/banner.png"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "openWindow"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "name"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "image"
                }, {
                    type: "Twig.expression.type.string",
                    value: "taydu_mansite/news_event/images/banner.png"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "link"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "openWindow"
                }, {
                    type: "Twig.expression.type.string",
                    value: ""
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "name"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "isHot"
                }, {
                    type: "Twig.expression.type.bool",
                    value: !1
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }, {
                    type: "Twig.expression.type.array.end",
                    value: "]",
                    match: ["]"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }, {
            type: "raw",
            value: '\r\n\r\n\r\n<div id="blockHomeBanner" class="banner banner--blockHomeBanner">\r\n\t'
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "data",
                    match: ["data"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "list"
                }, {
                    type: "Twig.expression.type.filter",
                    value: "length",
                    match: ["|length", "length"]
                }, {
                    type: "Twig.expression.type.number",
                    value: 0,
                    match: ["0", null]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ">",
                    precidence: 8,
                    associativity: "leftToRight",
                    operator: ">"
                }],
                output: [{
                    type: "raw",
                    value: '\r\n\t\t<div id="blockHomeBannerSwiper" class="swiper banner_list" data-sync-with="blockHomeBannerSwiperFraction">\r\n\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "item",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "data",
                            match: ["data"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "list"
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t'
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "link"
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "length",
                                    match: ["|length", "length"]
                                }, {
                                    type: "Twig.expression.type.number",
                                    value: 0,
                                    match: ["0", null]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ">",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: ">"
                                }],
                                output: [{
                                    type: "raw",
                                    value: '\r\n\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t<a href="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "link"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '" class="banner_item__thumbnail" title="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "name"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '">\r\n\t\t\t\t\t\t\t\t\t<img class="swiper-lazy lazyload" data-src="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "image"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '" alt="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "name"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                                }]
                            }
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.else",
                                match: ["else"],
                                output: [{
                                    type: "raw",
                                    value: '\r\n\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t<img class="swiper-lazy lazyload" data-src="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "image"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '" alt="'
                                }, {
                                    type: "output",
                                    stack: [{
                                        type: "Twig.expression.type.variable",
                                        value: "item",
                                        match: ["item"]
                                    }, {
                                        type: "Twig.expression.type.key.period",
                                        key: "name"
                                    }]
                                }, {
                                    type: "raw",
                                    value: '">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "\r\n\t\t\t\t\t</li>\r\n\t\t\t\t"
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t</ul>\r\n\t\t\t<div class="swiper-pagination swiper-pagination--blockHomeBannerSwiper"></div>\r\n\t\t\t'
                }, {
                    type: "raw",
                    value: "\r\n\t\t</div>\r\n\t"
                }]
            }
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.else",
                match: ["else"],
                output: [{
                    type: "raw",
                    value: "\r\n\t\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "../function/empty-data.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n</div>\r\n\r\n"
        }, {
            type: "raw",
            value: "\r\n\r\n\r\n"
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.import",
            expression: '"../../setup/html/_macros.html.twig"',
            contextName: "_macro",
            stack: [{
                type: "Twig.expression.type.string",
                value: "$resolved:37bd6c28a4a6dc52a8b8b257e95ea752dad3b2ae814d74bffefa94edfecbb09544dda9bfe4971230ca38622f317561615eaa34d001dcd22d0badc7f546b6a733:_macros.html.twig"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n\r\n"
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.set",
            key: "data",
            expression: [{
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "list"
            }, {
                type: "Twig.expression.type.array.start",
                value: "[",
                match: ["["]
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "image"
            }, {
                type: "Twig.expression.type.string",
                value: "taydu_mansite/news_event/images/banner.png"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "openWindow"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "name"
            }, {
                type: "Twig.expression.type.string",
                value: "Hoạt động Long Môn Chiến"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !0
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "image"
            }, {
                type: "Twig.expression.type.string",
                value: "taydu_mansite/news_event/images/banner.png"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: "#link"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "openWindow"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "name"
            }, {
                type: "Twig.expression.type.string",
                value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "image"
            }, {
                type: "Twig.expression.type.string",
                value: "taydu_mansite/news_event/images/banner.png"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "openWindow"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "name"
            }, {
                type: "Twig.expression.type.string",
                value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "image"
            }, {
                type: "Twig.expression.type.string",
                value: "taydu_mansite/news_event/images/banner.png"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "openWindow"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "name"
            }, {
                type: "Twig.expression.type.string",
                value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.object.start",
                value: "{",
                match: ["{"]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "image"
            }, {
                type: "Twig.expression.type.string",
                value: "taydu_mansite/news_event/images/banner.png"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "link"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "openWindow"
            }, {
                type: "Twig.expression.type.string",
                value: ""
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "name"
            }, {
                type: "Twig.expression.type.string",
                value: "Nâng tầm công lực với Tuyệt Học Giang Hồ"
            }, {
                type: "Twig.expression.type.comma"
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ":",
                precidence: 16,
                associativity: "rightToLeft",
                operator: ":",
                key: "isHot"
            }, {
                type: "Twig.expression.type.bool",
                value: !1
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }, {
                type: "Twig.expression.type.array.end",
                value: "]",
                match: ["]"]
            }, {
                type: "Twig.expression.type.object.end",
                value: "}",
                match: ["}"]
            }]
        }
    }, {
        type: "raw",
        value: '\r\n\r\n\r\n<div id="blockHomeBanner" class="banner banner--blockHomeBanner">\r\n\t'
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.if",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "data",
                match: ["data"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "list"
            }, {
                type: "Twig.expression.type.filter",
                value: "length",
                match: ["|length", "length"]
            }, {
                type: "Twig.expression.type.number",
                value: 0,
                match: ["0", null]
            }, {
                type: "Twig.expression.type.operator.binary",
                value: ">",
                precidence: 8,
                associativity: "leftToRight",
                operator: ">"
            }],
            output: [{
                type: "raw",
                value: '\r\n\t\t<div id="blockHomeBannerSwiper" class="swiper banner_list" data-sync-with="blockHomeBannerSwiperFraction">\r\n\t\t\t<ul class="swiper-wrapper">\r\n\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "item",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "data",
                        match: ["data"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "list"
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t<li class="swiper-slide banner_slide">\r\n\t\t\t\t\t\t'
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.if",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "item",
                                match: ["item"]
                            }, {
                                type: "Twig.expression.type.key.period",
                                key: "link"
                            }, {
                                type: "Twig.expression.type.filter",
                                value: "length",
                                match: ["|length", "length"]
                            }, {
                                type: "Twig.expression.type.number",
                                value: 0,
                                match: ["0", null]
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: ">",
                                precidence: 8,
                                associativity: "leftToRight",
                                operator: ">"
                            }],
                            output: [{
                                type: "raw",
                                value: '\r\n\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t<a href="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "link"
                                }]
                            }, {
                                type: "raw",
                                value: '" class="banner_item__thumbnail" title="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "name"
                                }]
                            }, {
                                type: "raw",
                                value: '">\r\n\t\t\t\t\t\t\t\t\t<img class="swiper-lazy lazyload" data-src="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "image"
                                }]
                            }, {
                                type: "raw",
                                value: '" alt="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "name"
                                }]
                            }, {
                                type: "raw",
                                value: '">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                            }]
                        }
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.else",
                            match: ["else"],
                            output: [{
                                type: "raw",
                                value: '\r\n\t\t\t\t\t\t\t<div class="banner_item">\r\n\t\t\t\t\t\t\t\t<div class="banner_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t<img class="swiper-lazy lazyload" data-src="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "image"
                                }]
                            }, {
                                type: "raw",
                                value: '" alt="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "name"
                                }]
                            }, {
                                type: "raw",
                                value: '">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\r\n\t\t\t\t\t</li>\r\n\t\t\t\t"
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t</ul>\r\n\t\t\t<div class="swiper-pagination swiper-pagination--blockHomeBannerSwiper"></div>\r\n\t\t\t'
            }, {
                type: "raw",
                value: "\r\n\t\t</div>\r\n\t"
            }]
        }
    }, {
        type: "logic",
        token: {
            type: "Twig.logic.type.else",
            match: ["else"],
            output: [{
                type: "raw",
                value: "\r\n\t\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "../function/empty-data.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n</div>\r\n\r\n"
    }, {
        type: "raw",
        value: "\r\n\r\n\r\n"
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    a(21);
    $(document).on("taydu_mansite_news_event rendered", {}, (function(t, e) {
        $("#" + e);
        if ($("#blockHomeBannerSwiper").length > 0) {
            $("#blockHomeBannerSwiper").initSwiper({
                swiperOptions: {
                    slidesPerView: 1,
                    centeredSlides: !0,
                    autoplay: {
                        delay: 5e3
                    },
                    lazy: {
                        loadPrevNext: !0
                    }
                }
            })
        }
    }
    ))
}
, , , function(t, e, a) {
    a(24);
    var i = (0,
    a(0).twig)({
        id: "$resolved:f513d326c58d63b76bb9eb2958fbc0ba2571e16211f2231684e23d70070c4251829db493557f8fcf51ca7e41bad4e0a60e4ea40d7122b44f0f9ca1168de0cd7b:char.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_char"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/char/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/char/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.include",
                        only: !1,
                        ignoreMissing: !1,
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: "$resolved:4b51ee16eb61938d237059bba0707e53e79b3aea138d1c9176959248095d4d2b4cbbff80fdd8426ebfff43e9554ad9f359720e57a98a07fbd5af03bd54e96f1f:gno-weapon.html.twig"
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_char"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/char/images/bg.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/char/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "$resolved:4b51ee16eb61938d237059bba0707e53e79b3aea138d1c9176959248095d4d2b4cbbff80fdd8426ebfff43e9554ad9f359720e57a98a07fbd5af03bd54e96f1f:gno-weapon.html.twig"
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:4b51ee16eb61938d237059bba0707e53e79b3aea138d1c9176959248095d4d2b4cbbff80fdd8426ebfff43e9554ad9f359720e57a98a07fbd5af03bd54e96f1f:gno-weapon.html.twig",
        data: [{
            type: "raw",
            value: '<div id="blockHomeChar" class="characters characters--blockHomeChar tabs">\r\n\t<div class="tab_head">\r\n\t\t<ul class="characters_tab">\r\n\t\t\t<li class="tab_item active">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper1" class="characters_tab--thanh">Thánh</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper2" class="characters_tab--tien">Tiên</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper3" class="characters_tab--minh">Minh</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper4" class="characters_tab--yeu">Yêu</span>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class="tab_content">\r\n\t\t<div id="blockHomeCharThanh" class="characters_list active">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Tôn Ngộ Không --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__ngokhong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát thương cao trong lượt đầu</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cái Thế</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảo Động\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCàn Khôn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng địch 200% sát thương vật lý. Khi tấn công kỹ năng sát thương 20% bạo kích, 20% sát thương bạo kích, hồi cho bản thân 1 điểm (Liên Kích).\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đồng Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCộng Tử</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Trư Bát Giới, bản thân tăng 8% sát thương. Trư Bát Giới khi bị đánh bại, Tôn Ngộ Không có 50% kích hoạt [Phục Thù].</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đằng Vân\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tGiá Vũ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">2 hiệp đầu, bản thân tăng 10% sát thương và 20% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Quan Âm --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Khống chế</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Giảm Nộ Toàn đội địch</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Điểm hóa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Chúng Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBình đẳng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 82% sát thương phép thuật. 50% làm mục tiêu giảm 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảng Kinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBố Đạo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Đường Tăng, bản thân tăng 10% tấn công. Khi Quan Âm tấn công, nếu bản thân đầy sinh lực sẽ tăng 15% sát thương.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đại Từ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐại Bi</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi thi triển kỹ năng tiêu hao tất cả nộ khí, khi nộ khí quá 4 điểm, mỗi nộ khí tăng cho kỹ năng lần này 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Đường tăng --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duongtang">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Trị liệu</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi điểm liên kích đội</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cầu Phúc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho 1 đồng đội có sinh lực thấp nhất sinh lực bằng 100% tấn công.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phổ Độ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tChúng Sinh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho toàn bộ phe ta sinh lực 82% tấn công.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảng Kinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBố Đạo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Quan Âm, bản thân tăng 10%Tăng trị liệu. Trước khi chiến đấu, toàn bộ phe ta nhận [Thanh Tâm I].</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thể Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuán Đỉnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu hiệp, chuyển hoá [Liên Kích] bản thân thành nộ khí tương ứng, cứ chuyển hoá 1 điểm [Liên Kích] bản thân tăng 8% tấn công. duy trì 1 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Nữ Nhi Vương Quốc --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__nuvuong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/title__name4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Khống Chế</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi điểm liên kích đội</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hoả Linh\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phi Phượng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐoạn Hồng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 250% sát thương vật lý. 50% làm mục tiêu [Hỗn Loạn I], duy trì 1 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Quốc Sắc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThiên Hương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ngọc Thố Công Chúa, bản thân tăng 8% miễn sát thương. Khi Nữ Nhi Quốc Vương kết thúc hiệp, trị liệu 10% sinh lực bản thân.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thể Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuán Đỉnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu hiệp, chuyển hoá [Liên Kích] bản thân thành nộ khí tương ứng, cứ chuyển hoá 1 điểm [Liên Kích] bản thân tăng 8% tấn công. duy trì 1 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div id="blockHomeCharTien" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Dương Tiễn --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duongtien">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sức mạnh tăng theo lượt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phá Quân</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngạo Thị\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Thiên Hạ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương vật lý. Kèm thêm cho bản thân 1 tầng Hiển Thánh Chân Quân, tối đa cộng dồn 4 tầng.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Châu Liên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBích Hợp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Hằng Nga, bản thân tăng 8% sát thương. Dương Tiễn trước khi triển kỹ năng, Hằng Nga cũng có thể nhận 1 tầng Hiển Thánh Chân Quân, tối đa cộng 1 tầng\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thiên Giáng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThần Phạt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng lần đầu mỗi vòng, có xác suất làm mục tiêu [Choáng], duy trì 1 hiệp. Số lượng mục tiêu tấn công là 1/2/3/4/5/6, tỉ lệ Choáng 60%/30%/20%/15%/12%/10%</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Nhật dạ du thần --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duthan">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/title__name2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Phòng Thủ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Tấn công riêng biệt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Minh Quang</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Trường Không\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tKinh Lạc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương phép thuật. Sau khi thi triển kỹ năng lần đầu, Nhật Dạ Du Thần lần lượt hành động trong chiến đấu. Sau khi lần lượt hành động, Nhật Du Thần và Hạ Du Thần kế thừa 90% thuộc tính ban đầu và xoá tất cả trạng thái trừ [Hộ Thuẫn]\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Sơn Xuyên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNhật Hạ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ly Sơn Quân, bản thân tăng 10% sinh lực. Trước khi chiến đấu, Nhật Dạ Du Thần kèm thêm [Hộ Thuẫn] bằng 10% sinh lực tối đa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Xuyên Suốt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNgày Đêm</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng, 40% triệu hồi trước trận phe ta Nhật Du Thần (Tối đa kích hoạt 1 lần)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- 3-Thái Bạch --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__thaibach">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Dồn Sát Thương Khủng</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tinh Vẫn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đấu Chuyển\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTinh Di</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch  160% sát thương phép thuật. Trước khi thi triển kỹ năng bản thân vào [Kim Tinh Khởi Minh]: Tăng 100% bạo kích, sát thương bạo kích ban đầu biến thành 115%, biến mất khi kết thúc hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tinh Nguyệt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tGiảo Khiết</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Nguyệt Lão, bản thân tăng 10% tấn công. Thái Bạch sau mỗi lần bạo kích, trị liệu Nguyệt Lão và bản thân 5% sinh lực.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Kim Tinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhởi Minh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu chiến đấu, bản thân vào [Kim Tinh Khởi Minh], duy trì 1 hiệp. [Kim Tinh Khởi Minh]: Tăng 100% bao kích, sát thương bạo kích ban đầu biến thành 115%</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- 4-Hằng Nga --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__hangnga">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">hỗ trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi Nộ Khí Phe Tiên</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nguyệt Hoa\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bích Không\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHuỳnh Nguyệt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương phép thuật. Hồi cho bản thân 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Châu Liên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBích Hợp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Dương Tiễn, bản thân tăng 8% sát thương. Hằng Nga sau khi thi triển kỹ năng lần đầu, kèm thêm cho Dương Tiễn [Hộ Thuẫn] bằng 10% sinh lực tối đa.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hạo Nguyệt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐương Không</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, Thần Tướng Tiên giới phe ta tăng 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div id="blockHomeCharMinh" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Bạch Cốt TInh --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__bachcotinh">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Diện Rộng</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cốt Oán</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 32% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bạch Cốt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Luyện Ngục</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 82% sát thương vật lý. Sau khi thi triển kỹ năng, 50% tăng thêm 1 lần đánh thường.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tâm Tâm\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Ấn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Bạch Thử, bản thân tăng 8% sát thương. Bạch Phu Nhân lần đầu đánh thường, tăng 50% sát thương.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Oán Hận\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBạch Cốt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi Thần Tướng phe ta bị đánh bại, triệu hồi Cốt Tướng Quân, duy trì đến khi kết thúc trận đấu, không giải trừ khi người sở hữu bị đánh bại (Tối đa kích hoạt 1 lần)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Diêm QUân --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__diemquan">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Tăng Trong Trận Chiến</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngự Kiếm</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương pháp thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Vô Gian\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuỷ Vực</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương pháp thuật. 60% làm mục tiêu [Trúng Độc], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Luân Hồi\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVãn Sinh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Mạnh Bà, bản thân tăng 10% tấn công. Sau khi thi triển kỹ năng lần đầu, 60% làm hàng sau phe địch [Trúng Độc], duy trì 2 hiệp.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Chúa Tể\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐịa Ngục</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu, người sỡ hữu vào trạng thái [Chúa Tể Địa Ngục], [Chúa Tể Địa Ngục]: Khi Thần Tướng bất kỳ 2 bên bị đánh bại, bản thân tăng vĩnh viễn 10% tấn công, 12% sinh lực</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Thiên yêu Cơ --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__thienyeuco">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/title__name3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Triệu Hồi Nhện</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nọc Độc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Mua Dây\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBuộc Mình</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 250% sát thương vật lý. Triệu hồi trước trận phe ta 1 Nhện Độc. Nhện Độc sau khi được triệu hồi sẽ tấn công ngay hàng sau kẻ địch.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngũ Độc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCâu Toàn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Bách Nhãn Quân, bản thân tăng 10% tấn công. Thiên Yêu Cơ sau khi thi triển kỹ năng lần đầu, 50% triệu hồi trước trận phe ta 1 Nhện Độc.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tiên Thù\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVạn Độc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng lần đầu, 35% triệu hồi trước trận phe ta 1 Nhện Độc (Mỗi vòng tối đa kích hoạt 1 lần). Nhện Độc sau khi được triệu hồi sẽ tấn công ngay gây cho kẻ địch hàng say 250% sát thương vật lý</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Bạch thử --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__bachthu">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Trị Liệu</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Trị Liệu Khi Đồng Minh Gục Ngã</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ân Trạch\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Dũng Tuyền\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Báo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho 3 đồng đội có sinh lực thấp nhất sinh lực bằng 144% tấn công.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tâm Tâm\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Ấn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Dương Tiễn, bản thân tăng 8% sát thương. Hằng Nga sau khi thi triển kỹ năng lần đầu, kèm thêm cho Dương Tiễn [Hộ Thuẫn] bằng 10% sinh lực tối đa.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Lê Hoa\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐai Vũ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng nữ phe ta 10% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id="blockHomeCharYeu" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Ngưu ma vương --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__nguumavuong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Thiêu Đốt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bình Thiên</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Trời Long\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Đất Lở</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho địch hàng ngang và hàng dọc ở phía sau 102% sát thương phép thuật. 60% làm mục tiêu [Thiêu Đốt], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nhất Xúc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTức Phát</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Thiết Phiến Công Chúa, bản thân tăng 10% tấn công. Ngưu Ma Vương ở hàng trước, tăng 8% sát thương và miễn sát thương.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bản Sắc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tYêu Vương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu chiến đấu, nếu người sở hữu ở hàng trước, tăng 10% sát thương và miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Đại bàng kim sí --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__daibang">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Cao Vào Hàng Sau Địch</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Che Trời</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 64% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phong Vân\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBiến Sắc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 160% sát thương vật lý. 50% tăng thêm 1 lần đánh thường.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Triển Sí\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCao Phi</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Khổng Tước Công Chúa, bản thân tăng 8% sát thương. Trước khi chiến đấu, Đại Bàng Kim Sí nhận 1 tầng [Hồi Xuân], và tăng 8% miễn sát thương, duy trì 2 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đại Bàng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTriển Sí</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi tấn công, tăng 30% sát thương (Liên kích vô hiệu)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Phiến thiết công chúa --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__congchua">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Hỗ Trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi Nộ Khí Phe Yêu Giới</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phong Sát\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hỏa Vũ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tToàn Phong</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương phép thuật. Hồi cho bản thân 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nhất Xúc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTức Phát</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ngưu Ma Vương, bản thân tăng 10% tấn công. Thiết Phiến Công Chúa sau khi thi triển kỹ năng lần đầu, hồi thêm cho Ngưu Ma Vương 1 nộ khí.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hỏa Mạo\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTam Trượng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng Yêu Giới phe ta 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Hồ ly --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__holy">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Hỗ Trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hỗ Trợ Tốt Với Thiêu Đốt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hồ Hỏa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngọc Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMị Ảnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương phép thuật. 70% làm mục tiêu [Thiêu Đốt], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thiên Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVưu Vật</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Xích Vĩ Ma Hạt, bản thân tăng 10% tấn công. Sát thương [Thiêu Đốt] từ Ngọc Diện Hồ Ly tăng 15%.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thanh Khâu\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHồ Đồn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng Yêu Giới phe ta 10% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<a class="btn_more">Xem thêm</a>\r\n\t<div class="effect_mountain desktop">\r\n\t\t<div class="layer layer--left" data-speed="90">\r\n\t\t\t<div class="effect_mountain--left"></div>\r\n\t\t</div>\r\n\t\t<div class="layer layer--right" data-speed="50">\r\n\t\t\t<div class="effect_mountain--right"></div>\r\n\t\t</div>\r\n\t\t<div class="layer layer--hoa" data-speed="100">\r\n\t\t\t<div class="effect_mountain--hoa"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "raw",
        value: '<div id="blockHomeChar" class="characters characters--blockHomeChar tabs">\r\n\t<div class="tab_head">\r\n\t\t<ul class="characters_tab">\r\n\t\t\t<li class="tab_item active">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper1" class="characters_tab--thanh">Thánh</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper2" class="characters_tab--tien">Tiên</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper3" class="characters_tab--minh">Minh</span>\r\n\t\t\t</li>\r\n\t\t\t<li class="tab_item">\r\n\t\t\t\t<span data-href="#blockHomeCharSwiper4" class="characters_tab--yeu">Yêu</span>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class="tab_content">\r\n\t\t<div id="blockHomeCharThanh" class="characters_list active">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Tôn Ngộ Không --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__ngokhong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát thương cao trong lượt đầu</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cái Thế</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảo Động\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCàn Khôn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng địch 200% sát thương vật lý. Khi tấn công kỹ năng sát thương 20% bạo kích, 20% sát thương bạo kích, hồi cho bản thân 1 điểm (Liên Kích).\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đồng Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCộng Tử</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Trư Bát Giới, bản thân tăng 8% sát thương. Trư Bát Giới khi bị đánh bại, Tôn Ngộ Không có 50% kích hoạt [Phục Thù].</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-ngokhong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đằng Vân\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tGiá Vũ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">2 hiệp đầu, bản thân tăng 10% sát thương và 20% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Quan Âm --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Khống chế</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Giảm Nộ Toàn đội địch</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Điểm hóa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Chúng Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBình đẳng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 82% sát thương phép thuật. 50% làm mục tiêu giảm 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảng Kinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBố Đạo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Đường Tăng, bản thân tăng 10% tấn công. Khi Quan Âm tấn công, nếu bản thân đầy sinh lực sẽ tăng 15% sát thương.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-quanam-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đại Từ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐại Bi</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi thi triển kỹ năng tiêu hao tất cả nộ khí, khi nộ khí quá 4 điểm, mỗi nộ khí tăng cho kỹ năng lần này 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Đường tăng --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duongtang">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Trị liệu</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi điểm liên kích đội</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cầu Phúc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho 1 đồng đội có sinh lực thấp nhất sinh lực bằng 100% tấn công.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phổ Độ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tChúng Sinh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho toàn bộ phe ta sinh lực 82% tấn công.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Giảng Kinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBố Đạo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Quan Âm, bản thân tăng 10%Tăng trị liệu. Trước khi chiến đấu, toàn bộ phe ta nhận [Thanh Tâm I].</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-duongtang-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thể Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuán Đỉnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu hiệp, chuyển hoá [Liên Kích] bản thân thành nộ khí tương ứng, cứ chuyển hoá 1 điểm [Liên Kích] bản thân tăng 8% tấn công. duy trì 1 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Nữ Nhi Vương Quốc --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__nuvuong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/thanh/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/thanh/title__name4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Khống Chế</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi điểm liên kích đội</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hoả Linh\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phi Phượng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐoạn Hồng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 250% sát thương vật lý. 50% làm mục tiêu [Hỗn Loạn I], duy trì 1 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Quốc Sắc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThiên Hương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ngọc Thố Công Chúa, bản thân tăng 8% miễn sát thương. Khi Nữ Nhi Quốc Vương kết thúc hiệp, trị liệu 10% sinh lực bản thân.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/thanh/skill-nuvuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thể Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuán Đỉnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu hiệp, chuyển hoá [Liên Kích] bản thân thành nộ khí tương ứng, cứ chuyển hoá 1 điểm [Liên Kích] bản thân tăng 8% tấn công. duy trì 1 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div id="blockHomeCharTien" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Dương Tiễn --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duongtien">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sức mạnh tăng theo lượt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phá Quân</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngạo Thị\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Thiên Hạ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương vật lý. Kèm thêm cho bản thân 1 tầng Hiển Thánh Chân Quân, tối đa cộng dồn 4 tầng.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Châu Liên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBích Hợp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Hằng Nga, bản thân tăng 8% sát thương. Dương Tiễn trước khi triển kỹ năng, Hằng Nga cũng có thể nhận 1 tầng Hiển Thánh Chân Quân, tối đa cộng 1 tầng\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duongtien-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thiên Giáng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThần Phạt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng lần đầu mỗi vòng, có xác suất làm mục tiêu [Choáng], duy trì 1 hiệp. Số lượng mục tiêu tấn công là 1/2/3/4/5/6, tỉ lệ Choáng 60%/30%/20%/15%/12%/10%</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Nhật dạ du thần --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__duthan">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/title__name2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Phòng Thủ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Tấn công riêng biệt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Minh Quang</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Trường Không\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tKinh Lạc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương phép thuật. Sau khi thi triển kỹ năng lần đầu, Nhật Dạ Du Thần lần lượt hành động trong chiến đấu. Sau khi lần lượt hành động, Nhật Du Thần và Hạ Du Thần kế thừa 90% thuộc tính ban đầu và xoá tất cả trạng thái trừ [Hộ Thuẫn]\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Sơn Xuyên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNhật Hạ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ly Sơn Quân, bản thân tăng 10% sinh lực. Trước khi chiến đấu, Nhật Dạ Du Thần kèm thêm [Hộ Thuẫn] bằng 10% sinh lực tối đa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-duthan-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Xuyên Suốt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNgày Đêm</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng, 40% triệu hồi trước trận phe ta Nhật Du Thần (Tối đa kích hoạt 1 lần)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- 3-Thái Bạch --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__thaibach">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Dồn Sát Thương Khủng</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tinh Vẫn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đấu Chuyển\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTinh Di</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch  160% sát thương phép thuật. Trước khi thi triển kỹ năng bản thân vào [Kim Tinh Khởi Minh]: Tăng 100% bạo kích, sát thương bạo kích ban đầu biến thành 115%, biến mất khi kết thúc hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tinh Nguyệt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tGiảo Khiết</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Nguyệt Lão, bản thân tăng 10% tấn công. Thái Bạch sau mỗi lần bạo kích, trị liệu Nguyệt Lão và bản thân 5% sinh lực.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-thaibach-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Kim Tinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhởi Minh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu chiến đấu, bản thân vào [Kim Tinh Khởi Minh], duy trì 1 hiệp. [Kim Tinh Khởi Minh]: Tăng 100% bao kích, sát thương bạo kích ban đầu biến thành 115%</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- 4-Hằng Nga --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__hangnga">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/tien/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/tien/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">hỗ trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi Nộ Khí Phe Tiên</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nguyệt Hoa\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bích Không\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHuỳnh Nguyệt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương phép thuật. Hồi cho bản thân 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Châu Liên\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBích Hợp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Dương Tiễn, bản thân tăng 8% sát thương. Hằng Nga sau khi thi triển kỹ năng lần đầu, kèm thêm cho Dương Tiễn [Hộ Thuẫn] bằng 10% sinh lực tối đa.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/tien/skill-hangnga-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hạo Nguyệt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐương Không</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, Thần Tướng Tiên giới phe ta tăng 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div id="blockHomeCharMinh" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Bạch Cốt TInh --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__bachcotinh">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Diện Rộng</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Cốt Oán</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 32% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bạch Cốt\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Luyện Ngục</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho toàn bộ phe địch 82% sát thương vật lý. Sau khi thi triển kỹ năng, 50% tăng thêm 1 lần đánh thường.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tâm Tâm\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Ấn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Bạch Thử, bản thân tăng 8% sát thương. Bạch Phu Nhân lần đầu đánh thường, tăng 50% sát thương.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachcottinh-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Oán Hận\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBạch Cốt</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi Thần Tướng phe ta bị đánh bại, triệu hồi Cốt Tướng Quân, duy trì đến khi kết thúc trận đấu, không giải trừ khi người sở hữu bị đánh bại (Tối đa kích hoạt 1 lần)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Diêm QUân --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__diemquan">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Tăng Trong Trận Chiến</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngự Kiếm</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương pháp thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Vô Gian\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuỷ Vực</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương pháp thuật. 60% làm mục tiêu [Trúng Độc], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Luân Hồi\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVãn Sinh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Mạnh Bà, bản thân tăng 10% tấn công. Sau khi thi triển kỹ năng lần đầu, 60% làm hàng sau phe địch [Trúng Độc], duy trì 2 hiệp.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-diemvuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Chúa Tể\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐịa Ngục</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu, người sỡ hữu vào trạng thái [Chúa Tể Địa Ngục], [Chúa Tể Địa Ngục]: Khi Thần Tướng bất kỳ 2 bên bị đánh bại, bản thân tăng vĩnh viễn 10% tấn công, 12% sinh lực</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Thiên yêu Cơ --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__thienyeuco">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/title__name3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Triệu Hồi Nhện</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nọc Độc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Mua Dây\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBuộc Mình</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 250% sát thương vật lý. Triệu hồi trước trận phe ta 1 Nhện Độc. Nhện Độc sau khi được triệu hồi sẽ tấn công ngay hàng sau kẻ địch.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngũ Độc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCâu Toàn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Bách Nhãn Quân, bản thân tăng 10% tấn công. Thiên Yêu Cơ sau khi thi triển kỹ năng lần đầu, 50% triệu hồi trước trận phe ta 1 Nhện Độc.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-thienyeuco-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tiên Thù\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVạn Độc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Sau khi thi triển kỹ năng lần đầu, 35% triệu hồi trước trận phe ta 1 Nhện Độc (Mỗi vòng tối đa kích hoạt 1 lần). Nhện Độc sau khi được triệu hồi sẽ tấn công ngay gây cho kẻ địch hàng say 250% sát thương vật lý</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Bạch thử --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__bachthu">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/minh/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/minh/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Trị Liệu</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Trị Liệu Khi Đồng Minh Gục Ngã</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ân Trạch\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 100% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Dũng Tuyền\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Báo</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trị liệu cho 3 đồng đội có sinh lực thấp nhất sinh lực bằng 144% tấn công.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Tâm Tâm\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTương Ấn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Dương Tiễn, bản thân tăng 8% sát thương. Hằng Nga sau khi thi triển kỹ năng lần đầu, kèm thêm cho Dương Tiễn [Hộ Thuẫn] bằng 10% sinh lực tối đa.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/minh/skill-bachthu-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Lê Hoa\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tĐai Vũ</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng nữ phe ta 10% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id="blockHomeCharYeu" class="characters_list">\r\n\t\t\t<div class="swiper weaponSwiper" id="weaponSwiper">\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass="swiper-wrapper">\r\n\t\t\t\t\t\x3c!-- Ngưu ma vương --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__nguumavuong">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-1.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name1-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Thiêu Đốt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bình Thiên</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Trời Long\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">Đất Lở</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho địch hàng ngang và hàng dọc ở phía sau 102% sát thương phép thuật. 60% làm mục tiêu [Thiêu Đốt], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nhất Xúc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTức Phát</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Thiết Phiến Công Chúa, bản thân tăng 10% tấn công. Ngưu Ma Vương ở hàng trước, tăng 8% sát thương và miễn sát thương.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-nguumavuong-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Bản Sắc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tYêu Vương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Trước khi bắt đầu chiến đấu, nếu người sở hữu ở hàng trước, tăng 10% sát thương và miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Đại bàng kim sí --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__daibang">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-2.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name2-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Sát Thương</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Sát Thương Cao Vào Hàng Sau Địch</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Che Trời</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 64% sát thương vật lý.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phong Vân\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBiến Sắc</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch hàng sau 160% sát thương vật lý. 50% tăng thêm 1 lần đánh thường.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Triển Sí\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCao Phi</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Khổng Tước Công Chúa, bản thân tăng 8% sát thương. Trước khi chiến đấu, Đại Bàng Kim Sí nhận 1 tầng [Hồi Xuân], và tăng 8% miễn sát thương, duy trì 2 hiệp</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-daibang-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Đại Bàng\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTriển Sí</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi tấn công, tăng 30% sát thương (Liên kích vô hiệu)</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Phiến thiết công chúa --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__congchua">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-3.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name3-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Hỗ Trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hồi Nộ Khí Phe Yêu Giới</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Phong Sát\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hỏa Vũ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tToàn Phong</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho hàng trước phe địch 160% sát thương phép thuật. Hồi cho bản thân 1 nộ khí.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Nhất Xúc\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTức Phát</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Ngưu Ma Vương, bản thân tăng 10% tấn công. Thiết Phiến Công Chúa sau khi thi triển kỹ năng lần đầu, hồi thêm cho Ngưu Ma Vương 1 nộ khí.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-thietphien-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hỏa Mạo\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTam Trượng</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng Yêu Giới phe ta 10% sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- Hồ ly --\x3e\r\n\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t<div class="char">\r\n\t\t\t\t\t\t\t<div class="char__img char__holy">\r\n\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/char-4.png" alt="">\r\n\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/char-4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t<div class="cricle__xoay">\r\n\t\t\t\t\t\t\t\t\t<span class="cricle__xoay--img"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="info__char">\r\n\t\t\t\t\t\t\t\t<div class="info__char--name">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload desktop" data-src="taydu_mansite/char/images/yeu/title__name4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t<img class="lazyload mobile" data-src="taydu_mansite/char/images/yeu/title__name4-mb.png" alt="">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="info__char--content">\r\n\t\t\t\t\t\t\t\t\t<div class="dactinh">\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__1">Hỗ Trợ</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="dactinh__2">Hỗ Trợ Tốt Với Thiêu Đốt</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="char__skill">\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Hồ Hỏa</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho kẻ địch 100% sát thương phép thuật.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--2">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-2.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Ngọc Hồ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMị Ảnh</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Gây cho 1 hàng địch 200% sát thương phép thuật. 70% làm mục tiêu [Thiêu Đốt], duy trì 2 hiệp.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--3">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-3.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thiên Sinh\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVưu Vật</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi ra trận cùng Xích Vĩ Ma Hạt, bản thân tăng 10% tấn công. Sát thương [Thiêu Đốt] từ Ngọc Diện Hồ Ly tăng 15%.</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class="skill__item char__skill--4">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__img">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="lazyload" data-src="taydu_mansite/char/images/yeu/skill-holy-4.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--title">Thanh Khâu\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br class="mobile">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHồ Đồn</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="skill__detail--content">Khi người sở hữu trong trận, tăng cho Thần Tướng Yêu Giới phe ta 10% miễn sát thương</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- Add Pagination --\x3e\r\n\t\t\t\t<div class="swiper-pagination"></div>\r\n\t\t\t\t\x3c!-- Next, Prev slider --\x3e\r\n\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<a class="btn_more">Xem thêm</a>\r\n\t<div class="effect_mountain desktop">\r\n\t\t<div class="layer layer--left" data-speed="90">\r\n\t\t\t<div class="effect_mountain--left"></div>\r\n\t\t</div>\r\n\t\t<div class="layer layer--right" data-speed="50">\r\n\t\t\t<div class="effect_mountain--right"></div>\r\n\t\t</div>\r\n\t\t<div class="layer layer--hoa" data-speed="100">\r\n\t\t\t<div class="effect_mountain--hoa"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_char rendered", {}, (function(t, e) {
        $("#" + e);
        $(".skill__item").on("click", (function(t) {
            $(".swiper-slide-active .skill__item").removeClass("active"),
            $(this).addClass("active"),
            t.preventDefault()
        }
        )),
        $(".tabs > .tab_head > ul > li").click((function(t) {
            $(this).addClass("active"),
            $(this).siblings().removeClass("active");
            var e = $(this).index();
            $(".tabs > .tab_content > div").removeClass("active"),
            $(".tabs > .tab_content > div:nth-child(" + (e + 1) + ")").addClass("active")
        }
        ));
        new Swiper(".weaponSwiper",{
            slidesPerView: 1,
            effect: "fade",
            loop: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                clickable: !0,
                el: ".swiper-pagination"
            }
        })
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:072724665a49d13c64fd6ac873a38a31ae358c60711bd37ee9e835d3b597daee0cbd0ae86e7238fce3bb6f55cc8f651d27a5917aec57efe7ad2adfcd34593603:footer.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_dangkytruoc_footer"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_dangkytruoc/footer/images/bottom-footer.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_dangkytruoc/footer/images/bottom-footer-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="bottom-content flex center">\r\n\t\t\t\t\t<div class="logo-footer">\r\n\t\t\t\t\t\t<img alt="" data-src="taydu_dangkytruoc/footer/images/logo-footer.png" class="desktop lazyload">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="main">\r\n\t\t\t\t\t\t<div class="flex list-btn">\r\n\t\t\t\t\t\t\t<a class="btn btn-fb" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-youtube" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-ins" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-tt" href="#"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<img alt="" data-src="taydu_dangkytruoc/footer/images/logo-footer-mb.png" class="mobile lazyload">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tCông ty Cổ phần VNG\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\tĐịa chỉ trụ sở: Z06, Đường 13, phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\tGiấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 251/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/06/2015.<br>\r\n\t\t\t\t\t\t\tQuyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 1788/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/09/2022.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_dangkytruoc_footer"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_dangkytruoc/footer/images/bottom-footer.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_dangkytruoc/footer/images/bottom-footer-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="bottom-content flex center">\r\n\t\t\t\t\t<div class="logo-footer">\r\n\t\t\t\t\t\t<img alt="" data-src="taydu_dangkytruoc/footer/images/logo-footer.png" class="desktop lazyload">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="main">\r\n\t\t\t\t\t\t<div class="flex list-btn">\r\n\t\t\t\t\t\t\t<a class="btn btn-fb" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-youtube" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-ins" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="btn btn-tt" href="#"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<img alt="" data-src="taydu_dangkytruoc/footer/images/logo-footer-mb.png" class="mobile lazyload">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tCông ty Cổ phần VNG\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\tĐịa chỉ trụ sở: Z06, Đường 13, phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.\r\n\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\tGiấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 251/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/06/2015.<br>\r\n\t\t\t\t\t\t\tQuyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 1788/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/09/2022.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_dangkytruoc_footer rendered", {}, (function(t, e) {
        $("#" + e)
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:200a858ea38fc0651f2fbbbf6000884939bfbc252460aa76f6cd406ca209f57b3bd7b4dca6db880c9845bbfda28b6812713a70ba372abf249341db69fc5b8fb3:floattop.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_floattop"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="floattop '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scaleDesktop scaleMobile" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="floattop__background"></div>\r\n\t\t<div class="floattop__content">\r\n\t\t\t<div class="nav-top setPosTop ">\r\n\t\t\t\t<ul class="flex main-mobile">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="app-icon-mb" href="#"></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="download-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">homemb</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="napthe-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">Nạp</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="code-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">Nhập code</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="open-menu1" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">homemb</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class="menu flex">\r\n\t\t\t\t\t<span class="open-menu2">homemb</span>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_header"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Trang chủ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_news_event"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tin tức HOT</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_char"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Hệ Thống Tướng</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="bxh"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Bảng Xếp Hạng</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="tinhnang"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tính năng đặc sắc</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="image_video"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tây Du Ký</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Wiki Tân Thủ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Hỗ Trợ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="https://rewards.vnggames.com/" target="_blank">\r\n\t\t\t\t\t\t\t<span>Rewards</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="https://myaccount.vnggames.com/" target="_blank">\r\n\t\t\t\t\t\t\t<span>Account</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class="gr__social">\r\n\t\t\t\t\t\t\t<a class="gr__social--fb" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--group" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--youtube" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--tiktok" href="#"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_floattop"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="floattop '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scaleDesktop scaleMobile" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="floattop__background"></div>\r\n\t\t<div class="floattop__content">\r\n\t\t\t<div class="nav-top setPosTop ">\r\n\t\t\t\t<ul class="flex main-mobile">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="app-icon-mb" href="#"></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="download-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">homemb</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="napthe-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">Nạp</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="code-mb" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">Nhập code</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class="open-menu1" href="#">\r\n\t\t\t\t\t\t\t<span class="hidden">homemb</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class="menu flex">\r\n\t\t\t\t\t<span class="open-menu2">homemb</span>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_header"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Trang chủ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_news_event"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tin tức HOT</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="taydu_mansite_char"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Hệ Thống Tướng</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="bxh"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Bảng Xếp Hạng</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="tinhnang"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tính năng đặc sắc</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item scrollFrameControl" data-fts-selector=\'[data-block-id="image_video"]\'>\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Tây Du Ký</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Wiki Tân Thủ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="#">\r\n\t\t\t\t\t\t\t<span>Hỗ Trợ</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="https://rewards.vnggames.com/" target="_blank">\r\n\t\t\t\t\t\t\t<span>Rewards</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="menu__item">\r\n\t\t\t\t\t\t<a class="flex center" href="https://myaccount.vnggames.com/" target="_blank">\r\n\t\t\t\t\t\t\t<span>Account</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class="gr__social">\r\n\t\t\t\t\t\t\t<a class="gr__social--fb" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--group" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--youtube" href="#"></a>\r\n\t\t\t\t\t\t\t<a class="gr__social--tiktok" href="#"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_floattop rendered", {}, (function(t, e) {
        $("#" + e);
        $(".open-menu1").click((function(t) {
            t.preventDefault(),
            $(".menu").addClass("active")
        }
        )),
        $(".open-menu2").click((function(t) {
            t.preventDefault(),
            $(".menu").removeClass("active")
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:36a60071eb5875e9d2bc6202c8a525eedd0e04849ac2c6945291f638aaa91475e294f35d579b1db9d9f339a2736bc526ee06d4df8ffdacdbea139c738e3a65fe:floatleft.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_floatleft"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scaleDesktop scaleMobile scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="floatleft__inertia" id="content">\r\n\t\t\t<div class="floatleft__main desktop">\r\n\t\t\t\t<div class="section__background">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatleft/images/bg-left.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatleft/images/bg-left.png" class="mobile lazyload" alt="">\r\n\t\t\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="section__content">\r\n\t\t\t\t\t<div class="group__logo">\r\n\t\t\t\t\t\t<a class="appicon" href="#"></a>\r\n\t\t\t\t\t\t<a class="logo__game" href="#">lOGO</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="group__menu">\r\n\t\t\t\t\t\t<ul class="menu__left swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" id="pages">\r\n\t\t\t\t\t\t\t<li class="ol flex swiper-pagination-bullet" tabindex="0">\r\n\t\t\t\t\t\t\t\t<i class="icon flower2"></i>\r\n\t\t\t\t\t\t\t\t<span class="text_menu nav-font0"></span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul class="menu__link">\r\n\t\t\t\t\t\t\t<li class="flex">\r\n\t\t\t\t\t\t\t\t<a class="menu__link--item" href="#">Wiki Tân Thủ</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="flex">\r\n\t\t\t\t\t\t\t\t<a class="menu__link--item" href="#">Hỗ Trợ</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="button__gr">\r\n\t\t\t\t\t\t<div class="group__qr">\r\n\t\t\t\t\t\t\t<div class="group__qr--code" href="#">QR</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__napthe">\r\n\t\t\t\t\t\t\t<a class="btn__napthe" href="#">Nạp thẻ</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__download">\r\n\t\t\t\t\t\t\t<span class="group__download--taigame">appstore</span>\r\n\t\t\t\t\t\t\t<div class="tooltip">\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--appstore" href="#" target="_blank">appstore</a>\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--ggplay" href="#" target="_blank">gg play</a>\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--apk" href="#" target="_blank">apk</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__rewards">\r\n\t\t\t\t\t\t\t<a class="btn__rewards" href="https://rewards.vnggames.com/" target="_blank">rewards</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__account">\r\n\t\t\t\t\t\t\t<a class="btn__account" href="https://myaccount.vnggames.com/" target="_blank">Account</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_floatleft"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scaleDesktop scaleMobile scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="floatleft__inertia" id="content">\r\n\t\t\t<div class="floatleft__main desktop">\r\n\t\t\t\t<div class="section__background">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatleft/images/bg-left.png" class="desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatleft/images/bg-left.png" class="mobile lazyload" alt="">\r\n\t\t\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="section__content">\r\n\t\t\t\t\t<div class="group__logo">\r\n\t\t\t\t\t\t<a class="appicon" href="#"></a>\r\n\t\t\t\t\t\t<a class="logo__game" href="#">lOGO</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="group__menu">\r\n\t\t\t\t\t\t<ul class="menu__left swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" id="pages">\r\n\t\t\t\t\t\t\t<li class="ol flex swiper-pagination-bullet" tabindex="0">\r\n\t\t\t\t\t\t\t\t<i class="icon flower2"></i>\r\n\t\t\t\t\t\t\t\t<span class="text_menu nav-font0"></span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul class="menu__link">\r\n\t\t\t\t\t\t\t<li class="flex">\r\n\t\t\t\t\t\t\t\t<a class="menu__link--item" href="#">Wiki Tân Thủ</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="flex">\r\n\t\t\t\t\t\t\t\t<a class="menu__link--item" href="#">Hỗ Trợ</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="button__gr">\r\n\t\t\t\t\t\t<div class="group__qr">\r\n\t\t\t\t\t\t\t<div class="group__qr--code" href="#">QR</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__napthe">\r\n\t\t\t\t\t\t\t<a class="btn__napthe" href="#">Nạp thẻ</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__download">\r\n\t\t\t\t\t\t\t<span class="group__download--taigame">appstore</span>\r\n\t\t\t\t\t\t\t<div class="tooltip">\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--appstore" href="#" target="_blank">appstore</a>\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--ggplay" href="#" target="_blank">gg play</a>\r\n\t\t\t\t\t\t\t\t<a class="tooltip__dowload--apk" href="#" target="_blank">apk</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__rewards">\r\n\t\t\t\t\t\t\t<a class="btn__rewards" href="https://rewards.vnggames.com/" target="_blank">rewards</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="group__account">\r\n\t\t\t\t\t\t\t<a class="btn__account" href="https://myaccount.vnggames.com/" target="_blank">Account</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_floatleft rendered", {}, (function(t, e) {
        $("#" + e);
        $(".group__download--taigame").on("click", (function(t) {
            $(".tooltip__dowload").addClass("active"),
            t.preventDefault()
        }
        )),
        $(".tooltip__dowload a").on("click", (function(t) {
            $(".tooltip__dowload").removeClass("active"),
            t.preventDefault()
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:af5420e2cfc1634530bdc90a473b32f283e8903d976a2d868fc3e8086304c6517c45c06328cfb9853db20eb5c3c09aad46ec19a5b9cb7403f23f65105332d750:float_right.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_float_right"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="floatright '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scaleDesktop scaleMobile desktop" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '" data-desktop-origin="top right">\r\n\t\t<ul class="taydu_mansite_float_right__main active">\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class=" taydu_mansite_float_right__item--fanpage">fanpage</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--group">group</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--youtube">youtube</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--tiktok">tiktok</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<a href="https://taydu.vnggames.com/tin-tuc/tin-tuc/dieu-khoan-su-dung-tay-du-vng.html" class="term">term</a>\r\n\t</div>\r\n\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_float_right"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="floatright '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scaleDesktop scaleMobile desktop" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '" data-desktop-origin="top right">\r\n\t\t<ul class="taydu_mansite_float_right__main active">\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class=" taydu_mansite_float_right__item--fanpage">fanpage</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--group">group</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--youtube">youtube</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="taydu_mansite_float_right__item">\r\n\t\t\t\t<a href="#" class="taydu_mansite_float_right__item taydu_mansite_float_right__item--tiktok">tiktok</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<a href="https://taydu.vnggames.com/tin-tuc/tin-tuc/dieu-khoan-su-dung-tay-du-vng.html" class="term">term</a>\r\n\t</div>\r\n\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_float_right rendered", {}, (function(t, e) {
        $("#" + e);
        $("#asideRightTogglePlaytogether").each((function() {
            $(this).toggleClassname({
                toggle: [{
                    el: $(".taydu_mansite_float_right__main"),
                    className: "active"
                }, {
                    el: $(".taydu_mansite_float_right .aside"),
                    className: "active"
                }]
            })
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:fbf56463f64fff24910690da63ebe5d549d63162be2c513806ba08c3d085d3831bd9b9dcdcd7d2fca010206952f2a57c7dc20fee6a9fdf95b240f344699cfbd3:floatright_sub.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "taydu_mansite_floatright_sub"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="floatright '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scaleDesktop scaleMobile desktop" data-desktop-origin="top right" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="floating__main--right">\r\n\t\t\t<div class="floatright__main active">\r\n\t\t\t\t<div class="floatright__background">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatright_sub/images/bg-right.png" class="desktop lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="floatright__content">\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--topup"></a>\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--entercode"></a>\r\n\t\t\t\t\t<div class="floatright__item--downloading">\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--downappstore">downappstore</a>\r\n\t\t\t\t\t\t<a href="" class="floatright__item floatright__item--downggplay">downggplay</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--downapk">downapk</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="floatright__item floatright__item--social">\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--home">home</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--fanpage">fanpage</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--youtube">youtube</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--tiktok">tiktok</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--top scrollTop">top</a>\r\n\t\t\t\t\t<span id="asideRightToggle" class="floatrightToggle floatright__item floatright__item--toggle">close</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "taydu_mansite_floatright_sub"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '" class="floatright '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scaleDesktop scaleMobile desktop" data-desktop-origin="top right" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="floating__main--right">\r\n\t\t\t<div class="floatright__main active">\r\n\t\t\t\t<div class="floatright__background">\r\n\t\t\t\t\t<img data-src="taydu_mansite/floatright_sub/images/bg-right.png" class="desktop lazyload" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="floatright__content">\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--topup"></a>\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--entercode"></a>\r\n\t\t\t\t\t<div class="floatright__item--downloading">\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--downappstore">downappstore</a>\r\n\t\t\t\t\t\t<a href="" class="floatright__item floatright__item--downggplay">downggplay</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--downapk">downapk</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="floatright__item floatright__item--social">\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--home">home</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--fanpage">fanpage</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--youtube">youtube</a>\r\n\t\t\t\t\t\t<a href="#" class="floatright__item floatright__item--tiktok">tiktok</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href="#" class="floatright__item floatright__item--top scrollTop">top</a>\r\n\t\t\t\t\t<span id="asideRightToggle" class="floatrightToggle floatright__item floatright__item--toggle">close</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("taydu_mansite_floatright_sub rendered", {}, (function(t, e) {
        $("#" + e);
        $(".close").on("click", (function() {
            $(".floatright__main").toggleClass("active"),
            $(this).toggleClass("open")
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:f4700e629ddf6358b79b808acf5d71b0ff51d7266021457c3228b515c4ec6d8df1e86815008a8d6db58165db9e765f54a781a9c6e6d59aeae6bd74c6510029c5:bxh.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "bxh"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/bxh/images/bg-3.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/bxh/images/mb-bg-3.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="container">\r\n\t\t\t\t\t<div class="rank__note">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Dữ liệu lấy lúc 00:00 và hiển thị trên Bảng Xếp Hạng vào 10:00 sáng cùng ngày.</li>\r\n\t\t\t\t\t\t\t<li>Chỉ cập nhật dữ liệu của các Thủ Hộ Sứ có đăng nhập game vào ngày hôm trước.</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-12 col-mobile-12">\r\n\t\t\t\t\t\t\t<div class="effect">\r\n\t\t\t\t\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t\t\t\t\t<div class="para-laplanh desktop laplanh">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/bxh/images/effect.png" data-depth="0.5" class="  lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/bxh/images/character.png" class="character desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<div class="layer layer__right--bottom" data-speed="80">\r\n\t\t\t\t\t\t\t\t\t<div class="para-nui desktop nui">\r\n\t\t\t\t\t\t\t\t\t\t<img data-depth="0.2" data-src="taydu_mansite/bxh/images/nui.png" class="  lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="effect__rank">\r\n\t\t\t\t\t\t\t\t<div id="blockHomeRankTab" class="rank">\r\n\t\t\t\t\t\t\t\t\t<ul class="rank_tab">\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item active">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG Lực chiến\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG BANG HỘI\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG LÔI ĐÀI\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tComing Soon\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div id="blockHomeRank" class="rank">\r\n\t\t\t\t\t\t\t\t\t<div class="rank_filter">\r\n\t\t\t\t\t\t\t\t\t\t<select name="server" data-loadrank-handle="server">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="0">Chọn Máy Chủ</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="0">Thế giới</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20001">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS1-Thái Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20002">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS2-Hoa Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20003">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS3-Vu Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="rank_result">\r\n\t\t\t\t\t\t\t\t\t\t<ul class="rank_result__head">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Hạng</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Nhân vật</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>cấp</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>lực chiến</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Máy chủ</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="rank_result__body">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>1</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCute</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>696576</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>2</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>3</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>4</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>5</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>6</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>7</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>9</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>10</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<div class="rank_result__foot">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class="pagination">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="prev disabled">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">‹</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">1</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">2</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">3</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">4</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">5</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">6</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">7</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">8</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">9</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">10</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="next">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" rel="1">›</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\x3c!-- <div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="block-note">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dữ liệu lấy lúc 00:00 và hiển thị lên Bảng Xếp Hạng từ 09:00 mỗi ngày.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Chỉ cập nhật dữ liệu của các đại hiệp có đăng nhập game vào ngày hôm trước.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "bxh"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/bxh/images/bg-3.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/bxh/images/mb-bg-3.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="container">\r\n\t\t\t\t\t<div class="rank__note">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Dữ liệu lấy lúc 00:00 và hiển thị trên Bảng Xếp Hạng vào 10:00 sáng cùng ngày.</li>\r\n\t\t\t\t\t\t\t<li>Chỉ cập nhật dữ liệu của các Thủ Hộ Sứ có đăng nhập game vào ngày hôm trước.</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-12 col-mobile-12">\r\n\t\t\t\t\t\t\t<div class="effect">\r\n\t\t\t\t\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t\t\t\t\t<div class="para-laplanh desktop laplanh">\r\n\t\t\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/bxh/images/effect.png" data-depth="0.5" class="  lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/bxh/images/character.png" class="character desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<div class="layer layer__right--bottom" data-speed="80">\r\n\t\t\t\t\t\t\t\t\t<div class="para-nui desktop nui">\r\n\t\t\t\t\t\t\t\t\t\t<img data-depth="0.2" data-src="taydu_mansite/bxh/images/nui.png" class="  lazyload" alt="">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="effect__rank">\r\n\t\t\t\t\t\t\t\t<div id="blockHomeRankTab" class="rank">\r\n\t\t\t\t\t\t\t\t\t<ul class="rank_tab">\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item active">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG Lực chiến\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG BANG HỘI\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHẠNG LÔI ĐÀI\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class="">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="rank_tab__item">\r\n\t\t\t\t\t\t\t\t\t\t\t\tComing Soon\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div id="blockHomeRank" class="rank">\r\n\t\t\t\t\t\t\t\t\t<div class="rank_filter">\r\n\t\t\t\t\t\t\t\t\t\t<select name="server" data-loadrank-handle="server">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="0">Chọn Máy Chủ</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="0">Thế giới</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20001">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS1-Thái Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20002">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS2-Hoa Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value="20003">\r\n\t\t\t\t\t\t\t\t\t\t\t\tS3-Vu Sơn</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="rank_result">\r\n\t\t\t\t\t\t\t\t\t\t<ul class="rank_result__head">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Hạng</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Nhân vật</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>cấp</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>lực chiến</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Máy chủ</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="rank_result__body">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>1</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCute</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>696576</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>2</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>3</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>4</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>5</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>6</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>7</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>8</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>9</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>10</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="rank__name">BabyCutePro999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>69</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>99.999.999</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>S1-Thiên Sơn</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<div class="rank_result__foot">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class="pagination">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="prev disabled">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">‹</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1 active">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">1</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">2</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">3</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">4</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">5</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">6</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">7</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">8</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">9</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="page group-page-1">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">10</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="next">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" rel="1">›</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\x3c!-- <div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="block-note">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dữ liệu lấy lúc 00:00 và hiển thị lên Bảng Xếp Hạng từ 09:00 mỗi ngày.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Chỉ cập nhật dữ liệu của các đại hiệp có đăng nhập game vào ngày hôm trước.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("bxh rendered", {}, (function(t, e) {
        $("#" + e)
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:0c5ed8d7fe3033c217b7a2a534f13c772342838391ed4250d8e932943d53f763a26ff64591f2dd24aacdfa383b21916e9e4f61f67ddf6d6b2fa0fd2b8e46d263:tinhnang.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "tinhnang"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/tinhnang/images/bg-pc.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/tinhnang/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="layer layer__left--top" data-speed="80">\r\n\t\t\t\t\t<div class="desktop bientrai">\r\n\t\t\t\t\t\t<img src="taydu_mansite/tinhnang/images/bien-trai.png" class=" " data-depth="0.1" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t<div class="desktop  bienphai">\r\n\t\t\t\t\t\t<img src="taydu_mansite/tinhnang/images/bien-phai.png" class=" " data-depth="0.1" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="swiper mySwiper2">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/khung.png" class="khung desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/khung-mb.png" class="khung mobile lazyload" alt="">\r\n\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "i",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 8,
                            match: ["8", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/banner.jpg" class="desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/banner-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/goc.png" class="goc desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/goc-mb.png" class="goc mobile lazyload" alt="">\r\n\r\n\t\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div thumbsslider="" class="swiper mySwiper">\r\n\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "i",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 8,
                            match: ["8", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/nav-1.jpg" class=" lazyload" alt="">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "tinhnang"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/tinhnang/images/bg-pc.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/tinhnang/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="layer layer__left--top" data-speed="80">\r\n\t\t\t\t\t<div class="desktop bientrai">\r\n\t\t\t\t\t\t<img src="taydu_mansite/tinhnang/images/bien-trai.png" class=" " data-depth="0.1" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t<div class="desktop  bienphai">\r\n\t\t\t\t\t\t<img src="taydu_mansite/tinhnang/images/bien-phai.png" class=" " data-depth="0.1" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="swiper mySwiper2">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/khung.png" class="khung desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/khung-mb.png" class="khung mobile lazyload" alt="">\r\n\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "i",
                    expression: [{
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 8,
                        match: ["8", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "..",
                        precidence: 20,
                        associativity: "leftToRight",
                        operator: ".."
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/banner.jpg" class="desktop lazyload" alt="">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/banner-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/goc.png" class="goc desktop lazyload" alt="">\r\n\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/goc-mb.png" class="goc mobile lazyload" alt="">\r\n\r\n\t\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div thumbsslider="" class="swiper mySwiper">\r\n\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "i",
                    expression: [{
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 8,
                        match: ["8", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "..",
                        precidence: 20,
                        associativity: "leftToRight",
                        operator: ".."
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t<img data-src="taydu_mansite/tinhnang/images/nav-1.jpg" class=" lazyload" alt="">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n"
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("tinhnang rendered", {}, (function(t, e) {
        $("#" + e);
        var a = new Swiper(".mySwiper",{
            spaceBetween: 0,
            slidesPerView: 3,
            freeMode: !0,
            breakpoints: {
                992: {
                    slidesPerView: 5
                }
            }
        });
        new Swiper(".mySwiper2",{
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: a
            }
        })
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:f141bb9de6b5898ce9745f4ab5296c32022df2f6d6bd46e069dac622d72124c9bd886b5acff1ac8d5ce9ecf15325a342fb82d7e5cb746e0baec552894bb766b4:image_video.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "image_video"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section section--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/image_video/images/bg-pc.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/image_video/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t<div class="chim desktop">\r\n\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/chim.png" class="" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__left--bottom" data-speed="30">\r\n\t\t\t\t\t<div class="desktop nuitrai"><img src="taydu_mansite/image_video/images/nui-trai.png" class="" alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__left--tnk" data-speed="100">\r\n\t\t\t\t\t<div class="desktop  tnk"><img src="taydu_mansite/image_video/images/tnk.png" class=" " alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__right--bottom" data-speed="30">\r\n\t\t\t\t\t<div class="desktop  nuiphai"><img src="taydu_mansite/image_video/images/nui-phai.png" class="" alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id="blockHomeGallery" class="gallery gallery--blockHomeGallery container image">\r\n\t\t\t\t\t<div class="gallery_tab">\r\n\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="tab__item active" data-type="html" data-params="?cate=image" data-block-name="home-gallery" data-shorturl="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "site",
                        match: ["site"]
                    }]
                }, {
                    type: "raw",
                    value: '/thu-vien-ajax" data-viewall="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "site",
                        match: ["site"]
                    }]
                }, {
                    type: "raw",
                    value: '/thu-vien/danh-sach.1.html?cate=image">Hình ảnh</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="tab__item">Video</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="gallery_list">\r\n\t\t\t\t\t\t<div class="swiper silder_big" id="sliderMain">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "i",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 10,
                            match: ["10", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="gallery_item gallery_item_video">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class="ban gallery_item__thumbnail" data-fancybox href="taydu_mansite/image_video/images/banner-1.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/banner-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn_play">play</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc="taydu_mansite/image_video/images/khung.png" class="khung " alt="">\r\n\t\t\t\t\t\t\t\x3c!-- <img src="taydu_mansite/image_video/images/khung-mb.png" class="khung mobile" alt=""> --\x3e\r\n\t\t\t\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div thumbsslider="" class="swiper silder_thumb" id="sliderThumb">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t'
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        keyVar: null,
                        valueVar: "i",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 10,
                            match: ["10", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="gallery_item gallery_item_video">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class="nav gallery_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/banner-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn_play">play</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t'
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="footer">\r\n\t\t\t\t\t<div class="logo">\r\n\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/logo_vng.png" class="" alt="logo">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>Công ty Cổ phần VNG</p>\r\n\t\t\t\t\t<p>Địa chỉ trụ sở: Z06, Đường 13, phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>\r\n\t\t\t\t\t<p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 251/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/06/2015.<br class="desktop">\r\n\t\t\t\t\t\tQuyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 1981/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 13/10/2023.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "image_video"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="section section--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/image_video/images/bg-pc.jpg" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/image_video/images/bg-mb.jpg" class="mobile lazyload" alt="">\r\n\t\t\t<span id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '-scrollwatch-pin" class="scrollwatch-pin"></span>\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner inner--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t\t\t<div class="layer" data-speed="80">\r\n\t\t\t\t\t<div class="chim desktop">\r\n\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/chim.png" class="" alt="">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__left--bottom" data-speed="30">\r\n\t\t\t\t\t<div class="desktop nuitrai"><img src="taydu_mansite/image_video/images/nui-trai.png" class="" alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__left--tnk" data-speed="100">\r\n\t\t\t\t\t<div class="desktop  tnk"><img src="taydu_mansite/image_video/images/tnk.png" class=" " alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="layer layer__right--bottom" data-speed="30">\r\n\t\t\t\t\t<div class="desktop  nuiphai"><img src="taydu_mansite/image_video/images/nui-phai.png" class="" alt=""></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id="blockHomeGallery" class="gallery gallery--blockHomeGallery container image">\r\n\t\t\t\t\t<div class="gallery_tab">\r\n\t\t\t\t\t\t<ul class="tab">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="tab__item active" data-type="html" data-params="?cate=image" data-block-name="home-gallery" data-shorturl="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "site",
                    match: ["site"]
                }]
            }, {
                type: "raw",
                value: '/thu-vien-ajax" data-viewall="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "site",
                    match: ["site"]
                }]
            }, {
                type: "raw",
                value: '/thu-vien/danh-sach.1.html?cate=image">Hình ảnh</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="tab__item">Video</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="gallery_list">\r\n\t\t\t\t\t\t<div class="swiper silder_big" id="sliderMain">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "i",
                    expression: [{
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 10,
                        match: ["10", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "..",
                        precidence: 20,
                        associativity: "leftToRight",
                        operator: ".."
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="gallery_item gallery_item_video">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class="ban gallery_item__thumbnail" data-fancybox href="taydu_mansite/image_video/images/banner-1.png">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/banner-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn_play">play</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\tsrc="taydu_mansite/image_video/images/khung.png" class="khung " alt="">\r\n\t\t\t\t\t\t\t\x3c!-- <img src="taydu_mansite/image_video/images/khung-mb.png" class="khung mobile" alt=""> --\x3e\r\n\t\t\t\t\t\t\t<div class="swiper-button-next"></div>\r\n\t\t\t\t\t\t\t<div class="swiper-button-prev"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div thumbsslider="" class="swiper silder_thumb" id="sliderThumb">\r\n\t\t\t\t\t\t\t<div class="swiper-wrapper">\r\n\t\t\t\t\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    keyVar: null,
                    valueVar: "i",
                    expression: [{
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 10,
                        match: ["10", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "..",
                        precidence: 20,
                        associativity: "leftToRight",
                        operator: ".."
                    }],
                    output: [{
                        type: "raw",
                        value: '\r\n\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\r\n\t\t\t\t\t\t\t\t\t\t<div class="gallery_item gallery_item_video">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class="nav gallery_item__thumbnail">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/banner-1.png" alt="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn_play">play</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="footer">\r\n\t\t\t\t\t<div class="logo">\r\n\t\t\t\t\t\t<img src="taydu_mansite/image_video/images/logo_vng.png" class="" alt="logo">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>Công ty Cổ phần VNG</p>\r\n\t\t\t\t\t<p>Địa chỉ trụ sở: Z06, Đường 13, phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>\r\n\t\t\t\t\t<p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 251/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/06/2015.<br class="desktop">\r\n\t\t\t\t\t\tQuyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 1981/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 13/10/2023.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("image_video rendered", {}, (function(t, e) {
        $("#" + e);
        $("#sliderThumb").length > 0 && (swiperGallary = $("#sliderThumb").initSwiper({
            swiperOptions: {
                spaceBetween: 0,
                slidesPerView: 3,
                breakpoints: {
                    992: {
                        direction: "vertical",
                        slidesPerView: 5
                    }
                }
            }
        })),
        $("#sliderMain").length > 0 && (swiperBig = $("#sliderMain").initSwiper({
            swiperOptions: {
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                thumbs: {
                    swiper: swiperGallary
                }
            }
        })),
        $(".gallery").each((function() {
            var t = "#" + $(this).attr("id");
            $().vPortal({
                container: t,
                el: {
                    tabContainer: ".gallery_tab > ul",
                    resultContainer: ".gallery_list"
                },
                paginationOptions: {},
                after: function() {
                    if ($("#wrapper").scalePlatform(),
                    "undefined" != typeof swiperGallary && $("#sliderThumb").length > 0)
                        try {
                            swiperGallary = $("#sliderThumb").initSwiper({
                                swiperOptions: {
                                    spaceBetween: 0,
                                    slidesPerView: 3,
                                    freeMode: !0,
                                    breakpoints: {
                                        768: {
                                            slidesPerView: 5,
                                            direction: "vertical"
                                        }
                                    }
                                }
                            })
                        } catch (t) {
                            console.log(t)
                        }
                    if ("undefined" != typeof swiperBig && $("#sliderMain").length > 0)
                        try {
                            swiperBig = $("#sliderMain").initSwiper({
                                swiperOptions: {
                                    effect: "fade",
                                    fadeEffect: {
                                        crossFade: !0
                                    },
                                    spaceBetween: 10,
                                    navigation: {
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    },
                                    thumbs: {
                                        swiper: swiperGallary
                                    }
                                }
                            })
                        } catch (t) {
                            console.log(t)
                        }
                }
            })
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:65a3d81ab93a3023c3f9bcc18b447ee47305dd23325bdcf9d669da6b0c0d5ea122f63dcc67903adffd9fc3a614bb5fce89293d09d921e22fc9f81bce68c35bb7:subpage.html.twig",
        data: [{
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var i = a(11)
      , n = a.n(i);
    $(document).on("subpage rendered", {}, (function(t, e) {
        $("#" + e);
        $(".openMenu-child").on("click", (function() {
            $(".nav-mobile-child").toggleClass("active"),
            $(".openMenu-child").toggleClass("active")
        }
        )),
        n.a.load({
            google: {
                families: ["Roboto"]
            }
        })
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:cefce98f0c82160cb5c861e5b19e03f376bad9bde1d15824547db25ef60814af5abc4267c296cc44d904eedcef60e9ebb440c6f84f4e15777302b681e1784061:sub_floattop.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "sub_floattop"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<section id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="section  '
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: ' scrollFrame scaleDesktop\r\nscaleMobile" data-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '" data-desktop-origin="top center">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/sub_floattop/images/nav-bg.png" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/sub_floattop/images/mb_nav.jpg" class="mobile lazyload" alt="">\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="active">Trang chủ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">tin tức HOT</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">hệ thống tướng</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">bảng xếp hạng</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">tính năng đặc sắc</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">wiki tân thủ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">hỗ trợ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class="nav-mobile mobile">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_download.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_topup.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_getcode.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" style="z-index: 1;" class="openMenu">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_menu.png" class="open" alt="">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_close.png" class="close" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\t\t\t<ul class="nav-mobile_content">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="active">Trang chủ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">tin tức HOT</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">hệ thống tướng</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">bảng xếp hạng</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">tính năng đặc sắc</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">wiki tân thủ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">hỗ trợ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<div class="icon">\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-fb.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-comu.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-yt.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-tt.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</section>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "sub_floattop"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<section id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '" class="section  '
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: ' scrollFrame scaleDesktop\r\nscaleMobile" data-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '" data-desktop-origin="top center">\r\n\t\t<div class="section__background">\r\n\t\t\t<img data-src="taydu_mansite/sub_floattop/images/nav-bg.png" class="desktop lazyload" alt="">\r\n\t\t\t<img data-src="taydu_mansite/sub_floattop/images/mb_nav.jpg" class="mobile lazyload" alt="">\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class="section__content">\r\n\t\t\t<div class="inner">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="active">Trang chủ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">tin tức HOT</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">hệ thống tướng</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">bảng xếp hạng</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">tính năng đặc sắc</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">wiki tân thủ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" class="">hỗ trợ</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class="nav-mobile mobile">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_download.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_topup.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_getcode.png" class="" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" style="z-index: 1;" class="openMenu">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_menu.png" class="open" alt="">\r\n\t\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/mb_close.png" class="close" alt="">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\t\t\t<ul class="nav-mobile_content">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="active">Trang chủ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">tin tức HOT</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">hệ thống tướng</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">bảng xếp hạng</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">tính năng đặc sắc</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">wiki tân thủ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" class="">hỗ trợ</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<div class="icon">\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-fb.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-comu.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-yt.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="#">\r\n\t\t\t\t\t\t<img src="taydu_mansite/sub_floattop/images/icon-tt.png" class="" alt="">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</section>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("sub_floattop rendered", {}, (function(t, e) {
        $("#" + e);
        $(".openMenu").on("click", (function() {
            $(".nav-mobile_content").toggleClass("active"),
            $(".openMenu").toggleClass("active")
        }
        ))
    }
    ))
}
, function(t, e, a) {
    var i = (0,
    a(0).twig)({
        id: "$resolved:445b130db184d9e310ecfa71be05c074ef304fc24107bba2685935308a8763e1a369317b1220d7933e0ed213f4c900d053661def17fd5f180ee5f20222f553ba:required_loading.html.twig",
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.spaceless",
                match: ["spaceless"],
                output: [{
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockId",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockId",
                            match: ["blockId"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "common_required_loading"
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\r\n\t"
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.set",
                        key: "blockIdPostFix",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "blockIdPostFix",
                            match: ["blockIdPostFix"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "default",
                            match: ["|default", "default"],
                            params: [{
                                type: "Twig.expression.type.parameter.start",
                                value: "(",
                                match: ["("]
                            }, {
                                type: "Twig.expression.type.string",
                                value: ""
                            }, {
                                type: "Twig.expression.type.parameter.end",
                                value: ")",
                                match: [")"],
                                expression: !1
                            }]
                        }]
                    }
                }, {
                    type: "raw",
                    value: '\r\n\t<div\r\n\t\tid="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }]
                }, {
                    type: "raw",
                    value: '" class="required_block required_block--'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: " "
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '" data-required-block-id="'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }]
                }, {
                    type: "raw",
                    value: '">\r\n\t\t'
                }, {
                    type: "raw",
                    value: '\r\n\t\t<div class="loading">\r\n\t\t\t<div class="load-bg"></div>\r\n\t\t\t<div class="load-info">\r\n\t\t\t\t<div class="load-mid">\r\n\t\t\t\t\t<p class="moon"></p>\r\n\t\t\t\t\t<p class="sun"></p>\r\n\t\t\t\t\t<p class="fish"></p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="load-num">0%</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
                }]
            }
        }, {
            type: "raw",
            value: "\r\n"
        }],
        allowInlineIncludes: !0,
        rethrow: !0
    });
    t.exports = function(t) {
        return i.render(t)
    }
    ,
    t.exports.tokens = [{
        type: "logic",
        token: {
            type: "Twig.logic.type.spaceless",
            match: ["spaceless"],
            output: [{
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockId",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockId",
                        match: ["blockId"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "common_required_loading"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: "\r\n\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "blockIdPostFix",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "blockIdPostFix",
                        match: ["blockIdPostFix"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ""
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "raw",
                value: '\r\n\t<div\r\n\t\tid="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockIdPostFix",
                    match: ["blockIdPostFix"]
                }]
            }, {
                type: "raw",
                value: '" class="required_block required_block--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: " "
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '" data-required-block-id="'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "blockId",
                    match: ["blockId"]
                }]
            }, {
                type: "raw",
                value: '">\r\n\t\t'
            }, {
                type: "raw",
                value: '\r\n\t\t<div class="loading">\r\n\t\t\t<div class="load-bg"></div>\r\n\t\t\t<div class="load-info">\r\n\t\t\t\t<div class="load-mid">\r\n\t\t\t\t\t<p class="moon"></p>\r\n\t\t\t\t\t<p class="sun"></p>\r\n\t\t\t\t\t<p class="fish"></p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="load-num">0%</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n'
            }]
        }
    }, {
        type: "raw",
        value: "\r\n"
    }]
}
, function(t, e, a) {
    "use strict";
    a.r(e)
}
, function(t, e) {
    $(document).on("common_required_loading rendered", {}, (function(t, e) {
        $("#" + e);
        var a = "2";
        var i = setInterval((function() {
            Number(a) < 91 ? a = Number(a) + 5 : (a = 100,
            clearInterval(i),
            $(".loading").fadeOut(),
            $(".navbot").attr("class", "navbot forshow")),
            $(".load-num").html(a + "%")
        }
        ), 130);
        "off" != sessionStorage.onis ? $(".loading").show() : ($(".loading").hide(),
        $(".navbot").attr("class", "navbot forshow")),
        sessionStorage.onis = "off"
    }
    ))
}
, function(t, e) {
    $.fn.toggleClassname = function(t) {
        var e = {
            obj: $(this),
            toggle: [{
                el: $(this).parent(),
                className: "active"
            }],
            before: () => {}
            ,
            after: () => {}
        }
          , a = $.extend(e, t);
        a.obj.on("click", (t => {
            console.log("clicked"),
            t.preventDefault(),
            a.before(),
            a.toggle.forEach((function(t) {
                t.el.hasClass(t.className) ? t.el.removeClass(t.className) : t.el.addClass(t.className)
            }
            )),
            a.after()
        }
        ))
    }
}
, function(t, e) {
    $.fn.universalLink = function(t) {
        var e = $.extend({
            dataAppstore: "data-appstore",
            dataAndroid: "data-ggplay"
        }, t)
          , a = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)
          , i = navigator.userAgent.toLowerCase().indexOf("android") > -1
          , n = "#";
        a ? n = $(this).attr(e.dataAppstore) : i && (n = $(this).attr(e.dataAndroid)),
        $(this).attr("href", n)
    }
}
, function(t, e) {
    $.fn.scrollWatch = function(t) {
        var e = {
            before: () => {}
            ,
            options: {
                watchOnce: !1,
                watch: "#sectionHeader",
                scrollThrottle: 20,
                onElementInView: function() {
                    $(".breadcrumb").removeClass("fixed"),
                    $(".nav").removeClass("fixed")
                },
                onElementOutOfView: function() {
                    $(".breadcrumb").addClass("fixed"),
                    $(".nav").addClass("fixed")
                }
            },
            after: () => {}
        }
          , a = $.extend(e, t);
        a.before();
        new ScrollWatch(a.options);
        a.after()
    }
}
, , , function(t, e) {
    t.exports = $,
    jQuery
}
, , , , , , , , , , , , function(t, e) {}
, , , , , , , , , , , , , , function(t, e, a) {
    "use strict";
    a.r(e);
    try {
        ({
            taydu_mansite: {
                content: {
                    header: {
                        html: a(13),
                        scss: a(14),
                        js: a(15),
                        dir: "taydu_mansite/header/header"
                    },
                    news_event: {
                        html: a(16),
                        scss: a(19),
                        js: a(20),
                        dir: "taydu_mansite/news_event/news_event"
                    },
                    char: {
                        html: a(23),
                        scss: a(25),
                        js: a(26),
                        dir: "taydu_mansite/char/char"
                    },
                    footer: {
                        html: a(27),
                        scss: a(28),
                        js: a(29),
                        dir: "taydu_mansite/footer/footer"
                    },
                    floattop: {
                        html: a(30),
                        scss: a(31),
                        js: a(32),
                        dir: "taydu_mansite/floattop/floattop"
                    },
                    floatleft: {
                        html: a(33),
                        scss: a(34),
                        js: a(35),
                        dir: "taydu_mansite/floatleft/floatleft"
                    },
                    float_right: {
                        html: a(36),
                        scss: a(37),
                        js: a(38),
                        dir: "taydu_mansite/float_right/float_right"
                    },
                    floatright_sub: {
                        html: a(39),
                        scss: a(40),
                        js: a(41),
                        dir: "taydu_mansite/floatright_sub/floatright_sub"
                    },
                    bxh: {
                        html: a(42),
                        scss: a(43),
                        js: a(44),
                        dir: "taydu_mansite/bxh/bxh"
                    },
                    tinhnang: {
                        html: a(45),
                        scss: a(46),
                        js: a(47),
                        dir: "taydu_mansite/tinhnang/tinhnang"
                    },
                    image_video: {
                        html: a(48),
                        scss: a(49),
                        js: a(50),
                        dir: "taydu_mansite/image_video/image_video"
                    },
                    subpage: {
                        html: a(51),
                        scss: a(52),
                        js: a(53),
                        dir: "taydu_mansite/subpage/subpage"
                    },
                    sub_floattop: {
                        html: a(54),
                        scss: a(55),
                        js: a(56),
                        dir: "taydu_mansite/sub_floattop/sub_floattop"
                    }
                }
            },
            common: {
                required: {
                    required_loading: {
                        html: a(57),
                        scss: a(58),
                        js: a(59),
                        dir: "common/required_loading/required_loading"
                    }
                }
            }
        })
    } catch (t) {
        console.log(t)
    }
    var i = {
        executeFunctions: function() {
            $("[data-block-id]").each((function() {
                var t = $(this).attr("data-block-id")
                  , e = $(this).attr("id");
                $(document).trigger(t, [e])
            }
            )),
            $("[data-required-block-id]").each((function() {
                var t = $(this).attr("data-required-block-id")
                  , e = $(this).attr("id");
                $(document).trigger(t, [e])
            }
            ))
        }
    }
      , n = (a(60),
    {
        widthTriggerScale: 9999,
        widthDesktopSafe: 1620,
        widthDesktop: 2e3,
        widthMobile: 768,
        heightDesktop: 1e3,
        heightMobile: 1e3,
        func: {
            isMobile: function() {
                var t = $(window).innerWidth()
                  , e = $(window).innerHeight();
                return t <= n.widthMobile || t < e
            }
        }
    })
      , s = n;
    $.fn.scalePlatform = function(t) {
        var e = {
            obj: $(this),
            designSafe: {
                desktop: s.widthTriggerScale,
                mobile: s.widthTriggerScale
            },
            designWidth: {
                desktop: s.widthDesktop,
                mobile: s.widthMobile
            },
            designHeight: {
                desktop: s.heightDesktop,
                mobile: s.heightMobile
            },
            mode: "",
            elScale: {
                desktop: ".scaleDesktop",
                mobile: ".scaleMobile"
            },
            dataScale: "data-scale-ratio",
            dataDevice: "data-device-type",
            dataDisplay: {
                desktop: "data-desktop-display",
                mobile: "data-mobile-display"
            },
            dataOrigin: {
                desktop: "data-desktop-origin",
                mobile: "data-mobile-origin"
            },
            rescaleForParent: !0,
            deviceHeightStyleTag: {
                fix: "fixDeviceHeight",
                max: "maxDeviceHeight"
            },
            deviceHeightStyleVar: "--sr-device-height",
            deviceScaleRatioStyleVar: "--sr-scale-ratio"
        }
          , a = $.extend(e, t)
          , i = ($(a.obj).attr("style", ""),
        $(a.obj).parent().attr("style", ""),
        $(a.elScale.desktop + " , " + a.elScale.mobile).each((function() {
            $(this).attr("style", "")
        }
        )),
        $(a.obj).parent().attr(a.dataScale, 1),
        $(window).outerWidth())
          , n = $(window).innerHeight()
          , r = (t=i, e=n) => t <= 700 || t < e
          , l = r() ? i / a.designWidth.mobile : i / a.designWidth.desktop;
        if (0 != a.deviceHeightStyleTag && $("#deviceHeightStyleTag").length < 1) {
            var p = "calc(100vh * " + 1 / l + ")"
              , c = $(`\n            <style id="deviceHeightStyleTag">\n                .${a.deviceHeightStyleTag.max} {\n                    max-height: ${p}\n                }\n                .${a.deviceHeightStyleTag.fix} {\n                    height: ${p}\n                }\n            </style>\n        `);
            $("html > head").append(c)
        }
        if (0 != a.deviceHeightStyleVar && $("#deviceHeightStyleVar").length < 1) {
            p = "calc(100vh * " + 1 / l + ")",
            c = $(`\n            <style id="deviceHeightStyleVar">\n                :root {\n                    ${a.deviceHeightStyleVar}: ${p};\n                    ${a.deviceScaleRatioStyleVar}: ${l}\n                }\n            </style>\n        `);
            $("html > head").append(c)
        }
        if (0 != a.rescaleForFancybox && $("#rescaleForFancybox").length < 1) {
            p = "calc(100vh * " + 1 / l + ")";
            $("html > head").append(c)
        }
        if ($(a.elScale.desktop + " , " + a.elScale.mobile).each((function() {
            (r() && $(this).hasClass(a.elScale.mobile.replace(".", "")) || !r() && $(this).hasClass(a.elScale.desktop.replace(".", ""))) && $(this).css({
                transform: "scale(" + l + ")",
                marginLeft: "0px",
                transformOrigin: (t=t()) => t && null != $(this).attr(a.dataOrigin.mobile) ? $(this).attr(a.dataOrigin.mobile) : null != $(this).attr(a.dataOrigin.desktop) ? $(this).attr(a.dataOrigin.desktop) : "top left"
            })
        }
        )),
        a.rescaleForParent) {
            var o = {
                height: a.obj.outerHeight()
            }.height * l;
            $(a.obj).parent().css({
                height: o + "px"
            })
        }
        $(a.obj).parent().attr(a.dataScale, l),
        $(a.obj).parent().attr(a.dataDevice, r() ? "mobile" : "desktop");
        var d = {
            scaled: !0,
            scaleRatio: l,
            device: r() ? "mobile" : "desktop"
        };
        window.postMessage(d, "*")
    }
    ;
    var r = {};
    function l({swiper: t, extendParams: e, on: a}) {
        e({
            debugger: !1
        }),
        a("init", ( () => {
            t.params.debugger && console.log("init")
        }
        )),
        a("click", ( (t, e) => {
            t.params.debugger && console.log("click")
        }
        )),
        a("tap", ( (t, e) => {
            t.params.debugger && console.log("tap")
        }
        )),
        a("doubleTap", ( (t, e) => {
            t.params.debugger && console.log("doubleTap")
        }
        )),
        a("sliderMove", ( (t, e) => {
            t.params.debugger && console.log("sliderMove")
        }
        )),
        a("slideChange", ( () => {
            t.params.debugger && console.log("slideChange", t.previousIndex, "->", t.activeIndex)
        }
        )),
        a("slideChangeTransitionStart", ( () => {
            t.params.debugger && console.log("slideChangeTransitionStart")
        }
        )),
        a("slideChangeTransitionEnd", ( () => {
            t.params.debugger && console.log("slideChangeTransitionEnd")
        }
        )),
        a("transitionStart", ( () => {
            t.params.debugger && console.log("transitionStart")
        }
        )),
        a("transitionEnd", ( () => {
            t.params.debugger && console.log("transitionEnd")
        }
        )),
        a("fromEdge", ( () => {
            t.params.debugger && console.log("fromEdge")
        }
        )),
        a("reachBeginning", ( () => {
            t.params.debugger && console.log("reachBeginning")
        }
        )),
        a("reachEnd", ( () => {
            t.params.debugger && console.log("reachEnd")
        }
        ))
    }
    $.fn.initSwiper = function(t) {
        var e = $.extend({
            isNested: !1,
            isSync: !1,
            isRenderBullet: !1,
            isSwiperAnimation: !1,
            swiperOptions: {
                centeredSlides: !0,
                slidesPerView: 1,
                autoplay: {
                    delay: 5e3
                },
                lazy: {
                    loadPrevNext: !0
                },
                followFinger: !1,
                spaceBetween: 0
            },
            nestedOptions: {},
            syncOptions: {},
            onInit: function() {},
            onChange: function(t=function() {}
            ) {
                t()
            },
            before: function() {},
            after: function() {},
            debug: !1
        }, t)
          , a = {};
        if (e.debug && (a = {
            modules: [l],
            debugger: !0
        }),
        0 == $(this).length)
            return;
        let i = "#" + $(this).attr("id");
        e.before(),
        null != r[i.substr(1)] && ("function" == typeof r[i.substr(1)].destroy() && r[i.substr(1)].destroy(),
        delete r[i.substr(1)]);
        var n = {};
        if (e.isRenderBullet) {
            var s = $(this).attr("id");
            n = {
                renderBullet: function(t, e) {
                    var a = ""
                      , i = t + 1
                      , n = $("#" + s + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-name")
                      , r = $("#" + s + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-code");
                    return n && (i = n),
                    r && (a = r + " swiper-pagination-bullet--" + r),
                    '<span class="' + e + " " + a + '">' + i + "</span>"
                }
            }
        }
        e.isNested && $(this).find(".swiper").each((function() {
            void 0 === $(this).attr("data-swiper-isSync") && $(this).initSwiper(e.nestedOptions)
        }
        ));
        var p = {};
        if (e.isSync) {
            s = $(this).attr("id");
            var c = $(this).attr("data-sync-with");
            $("#" + c).initSwiper({
                ...e.syncOptions,
                swiperOptions: {
                    watchOverflow: !0,
                    centeredSlides: !0,
                    centeredSlidesBounds: !0,
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !0,
                    scrollbar: {
                        el: ".swiper-scrollbar-" + c,
                        hide: !0
                    },
                    ...e.syncOptions.swiperOptions
                },
                after: function() {}
            }),
            p = {
                slideToClickedSlide: !0,
                watchOverflow: !0,
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                preventInteractionOnTransition: !0,
                thumbs: {
                    swiper: r[c]
                }
            }
        }
        var o = new SwiperAnimation;
        const d = new Swiper(i,{
            ...e.swiperOptions,
            ...p,
            on: {
                afterInit: function() {
                    e.isSwiperAnimation && null != o.animations && o.init(this).animate(),
                    o.init(this).animate(),
                    e.onInit()
                },
                slideChangeTransitionStart: function() {
                    e.onChange(),
                    e.isSwiperAnimation && null != o.animations && o.init(this).animate(),
                    o.init(this).animate()
                },
                ...e.swiperOptions.on
            },
            pagination: {
                el: ".swiper-pagination--" + i.substr(1),
                clickable: !0,
                ...e.swiperOptions.pagination,
                ...n
            },
            navigation: {
                nextEl: ".swiper-button-next--" + i.substr(1),
                prevEl: ".swiper-button-prev--" + i.substr(1),
                ...e.swiperOptions.navigation
            },
            ...a
        });
        return r[i.substr(1)] = d,
        e.after(),
        d
    }
    ;
    a(61),
    a(62),
    a(63);
    $.fn.vPortal = function(t) {
        var e = {
            container: "",
            el: {
                parentContainer: "",
                tabContainer: "",
                resultContainer: "",
                paginationContainer: ".pagination",
                containerSuffix: " li a",
                viewAll: ".viewAll",
                itemTotal: "#itemTotal",
                itemPerPage: "#itemPerPage",
                currentSection: "#currentSection",
                shortUri: "#shortUri"
            },
            data: {
                startPage: 1,
                totalPage: 1
            },
            paginationOptions: {},
            before: function() {},
            after: function() {}
        }
          , a = {
            ...e,
            ...t,
            el: {
                ...e.el,
                ...t.el
            },
            data: {
                ...e.data,
                ...t.data
            }
        };
        if (a.el.parentContainer = a.container + " ",
        a.before(),
        $(a.el.parentContainer + a.el.paginationContainer).length > 0) {
            var i = $(a.el.parentContainer + a.el.paginationContainer)
              , n = i.attr("data-params");
            null == n && (n = "");
            var s = i.attr("data-type");
            null == s && (s = "json");
            var r = i.attr("data-block-name");
            null == r && (r = "");
            var l = i.attr("data-shorturl");
            null == l && (l = ""),
            p(a.el, s, l, r, n, a.after(), a.paginationOptions)
        }
        $("body").on("click", a.el.parentContainer + a.el.tabContainer + a.el.containerSuffix, (function(t) {
            t.preventDefault(),
            "#" != $(this).attr("href") && (window.location.href = $(this).attr("href")),
            $(a.el.parentContainer + a.el.tabContainer + a.el.containerSuffix).removeClass("active");
            var e = $(this).data("params");
            null == e && (e = "");
            var i = $(this).data("type");
            null == i && (i = "json");
            var n = $(this).data("viewall");
            null == n && (n = "#");
            var s = $(this).data("block-name")
              , r = $(this).data("shorturl");
            return $(this).addClass("active"),
            c(a.el, 1, "loadTab", i, r, s, e, (function() {
                a.after(),
                $(a.el.parentContainer + a.el.viewAll).attr("href", n)
            }
            ), a.paginationOptions),
            !1
        }
        ))
    }
    ;
    var p = function(t, e, a, i, n, s=function() {}
    , r={}) {
        var l = $(t.parentContainer + t.itemTotal).val()
          , p = $(t.parentContainer + t.itemPerPage).val()
          , o = ($(t.parentContainer + t.currentSection).val(),
        l % p > 0 ? 1 : 0)
          , d = parseInt(l / p) + o;
        d > 1 ? $(t.parentContainer + t.paginationContainer).twbsPagination({
            startPage: 1,
            totalPages: d,
            visiblePages: 5,
            first: "&laquo;",
            prev: "&lsaquo;",
            next: "&rsaquo;",
            last: "&raquo;",
            paginationClass: "pagination",
            nextClass: "next",
            prevClass: "prev",
            lastClass: "last",
            firstClass: "first",
            initiateStartPageClick: !1,
            onPageClick: function(l, p) {
                return c(t, p, "paging", e, a, i, n, s(), r),
                !1
            },
            ...r
        }) : ($(t.parentContainer + t.paginationContainer).empty(),
        $(t.parentContainer + t.paginationContainer).removeData("twbs-pagination"),
        $(t.parentContainer + t.paginationContainer).unbind("page"))
    }
      , c = function(t, e, a, i, n, s, r="", l=function() {}
    , c={}) {
        var o = n + "/" + s + "." + e + ".html";
        o = "//" + (o = (o = o.replaceAll("///", "/")).replaceAll("//", "/")),
        r.length > 0 && (o += r),
        l(),
        o.indexOf("undefined") < 0 && $.ajax({
            url: o,
            dataType: i,
            success: function(e) {
                $(t.parentContainer + t.resultContainer).html(e),
                $("#wrapper").scalePlatform(),
                "loadTab" == a && ($(t.parentContainer + t.paginationContainer).empty(),
                $(t.parentContainer + t.paginationContainer).removeData("twbs-pagination"),
                $(t.parentContainer + t.paginationContainer).unbind("page"),
                $(t.parentContainer + t.itemTotal).val() > 0 && p(t, i, n, s, r, l(), c)),
                l()
            }
        })
    };
    a(64),
    a(66);
    const o = {
        el: {
            scrollFrame: ".scrollFrame",
            frame: [],
            nav: ".scrollFrameControl",
            scrollContainer: "html",
            fullPageWrapper: "body"
        },
        data: {
            totalFrame: 0,
            currentFrame: 0,
            currentFrameId: "",
            aniComplete: !0,
            timeAnimation: 500
        },
        func: {
            getTotalFrame: () => $(o.el.scrollFrame).length,
            getScaleRatio: () => $(o.el.fullPageWrapper).length > 0 ? $(o.el.fullPageWrapper).attr("data-scale-ratio") : 1,
            getFrames: () => {
                $(o.el.scrollFrame).each((function() {
                    o.el.frame.push({
                        el: "#" + $(this).attr("id"),
                        offsetTop: $("#" + $(this).attr("id")).offset().top - 100
                    })
                }
                ))
            }
            ,
            getFrameOffset: t => {
                for (let e = 0, a = o.el.frame.length; e < a; e++)
                    if (o.el.frame[e].el === t)
                        return o.el.frame[e].offsetTop;
                return 0
            }
            ,
            scrollTo: (t, e) => {
                let a = o.func.getScaleRatio()
                  , i = o.func.getFrameOffset(t);
                i *= a,
                $(o.el.scrollContainer).animate({
                    scrollTop: i
                }, o.data.timeAnimation, "linear", (function() {
                    o.data.aniComplete = !0
                }
                )),
                o.func.activeNavBullet(t)
            }
            ,
            activeNavBullet: t => {
                $(o.el.nav).length > 0 && ($(o.el.nav).removeClass("active"),
                $(o.el.nav).parent().parent().find('[href="' + t + '"]').addClass("active"))
            }
            ,
            isOpeningPopup: () => $("html").hasClass("popup-opened")
        },
        handleMousewheel: () => {
            $(window).on("mousewheel", (function(t) {
                if (!o.func.isOpeningPopup()) {
                    let e = t.deltaY;
                    e < 0 && o.data.aniComplete && o.data.currentFrame + 1 < o.data.totalFrame ? (o.data.currentFrame++,
                    o.data.aniComplete = !1,
                    o.data.currentFrameId = o.el.frame[o.data.currentFrame].el,
                    o.func.scrollTo(o.data.currentFrameId)) : e > 0 && o.data.aniComplete && o.data.currentFrame > 0 && (o.data.currentFrame--,
                    o.data.aniComplete = !1,
                    o.data.currentFrameId = o.el.frame[o.data.currentFrame].el,
                    o.func.scrollTo(o.data.currentFrameId))
                }
            }
            ))
        }
        ,
        handleNav: () => {
            $(o.el.nav).length > 0 && $(o.el.nav).on("click", (function(t) {
                t.preventDefault();
                let e = $(this).attr("href");
                $(this).attr("data-fts-selector").length > 0 && (e = "#" + $($(this).attr("data-fts-selector")).attr("id"));
                for (let t = 0, a = o.el.frame.length; t < a; t++)
                    o.el.frame[t].el === e && (o.data.currentFrame = t,
                    o.data.currentFrameId = e);
                var a = $(this).attr("data-scroll-offset");
                o.func.scrollTo(e, a)
            }
            ))
        }
        ,
        handleHash: () => {
            if (window.location.hash.length > 0) {
                let t = window.location.hash;
                console.log(o.el.frame);
                for (let e = 0, a = o.el.frame.length; e < a; e++)
                    o.el.frame[e].el === t && (o.data.currentFrame = e,
                    o.data.currentFrameId = t,
                    console.log(e));
                o.func.scrollTo(t)
            }
        }
        ,
        init: () => {
            o.data.totalFrame = o.func.getTotalFrame(),
            o.func.getFrames(),
            o.handleNav(),
            window.addEventListener("message", (function(t) {
                void 0 !== t.data.scaled && o.handleHash()
            }
            ), !1)
        }
    };
    var d = o;
    var y = {
        init: function(t) {
            var e = {
                el: ".scrollwatch-pin",
                before: () => {}
                ,
                options: {
                    watchOnce: !1,
                    watch: "#sectionHeader",
                    scrollThrottle: 20,
                    onElementInView: function(t) {
                        $(".breadcrumb").removeClass("fixed"),
                        $(".nav").removeClass("fixed")
                    },
                    onElementOutOfView: function(t) {
                        $(".breadcrumb").addClass("fixed"),
                        $(".nav").addClass("fixed")
                    }
                },
                after: () => {}
            }
              , a = {
                ...e,
                ...t,
                options: {
                    ...e.options,
                    ...t.options
                }
            };
            a.before();
            const i = {};
            $(a.el).each((function() {
                $(this);
                var t = $(this).attr("id");
                a.options.watch = "#" + t,
                i[t] = new ScrollWatch(a.options)
            }
            )),
            a.after()
        }
    };
    window.addEventListener("load", (function() {
        new URL(window.location.href).searchParams.get("admin");
        i.executeFunctions(),
        $("#wrapper").scalePlatform(),
        $(window).on("resize", (function() {
            $("#wrapper").scalePlatform()
        }
        )),
        v(),
        $("[data-fancybox]").fancybox({
            caption: function(t, e) {
                return $(this).find("figcaption").html()
            }
        })
    }
    ));
    var g, v = function() {
        $("#wrapper").scalePlatform(),
        $(".onelink").each((function() {
            $(".onelink").universalLink()
        }
        )),
        $("#navBurger").each((function() {
            $("#navBurger").toggleClassname({
                toggle: [{
                    el: $("#floattop"),
                    className: "active"
                }, {
                    el: $("#floatnav"),
                    className: "active"
                }, {
                    el: $("#navBurger"),
                    className: "is-active"
                }, {
                    el: $("#navBurger"),
                    className: "active"
                }]
            })
        }
        )),
        $("#subwebBurger").each((function() {
            $("#subwebBurger").toggleClassname({
                toggle: [{
                    el: $(".midbar__menu"),
                    className: "active"
                }, {
                    el: $("#subwebBurger"),
                    className: "is-active"
                }]
            })
        }
        )),
        $("#asideRightToggle").each((function() {
            $(this).toggleClassname({
                toggle: [{
                    el: $(".floatright__main"),
                    className: "active"
                }, {
                    el: $(".floatright .aside"),
                    className: "active"
                }]
            })
        }
        )),
        $(".scrollTop").each((function() {
            $(this).on("click", (function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 400)
            }
            ))
        }
        ))
    };
    d.init(),
    y.init({
        options: {
            onElementInView: function(t) {
                var e = $(t.el).parents("[data-block-id]").attr("data-block-id");
                $("[data-fts-selector]").removeClass("active"),
                $(`[data-fts-selector='[data-block-id="${e}"]']`).addClass("active")
            },
            onElementOutOfView: function(t) {
                var e = $(t.el).parents("[data-block-id]").attr("data-block-id");
                $(`[data-fts-selector='[data-block-id="${e}"]']`).removeClass("active")
            }
        }
    });
    var h = "";
    if ($(".btn-openpopup").on("click", (function(t) {
        return $("html").addClass("popup-opened"),
        g = $(this).data("target"),
        $(g).toggleClass("active"),
        $("#popup_content iframe").attr("src", ""),
        "" == (h = $(this).attr("href")) || $("#popup_content iframe").attr("src", h),
        !1
    }
    )),
    $(".news").each((function() {
        var t = "#" + $(this).attr("id");
        $().vPortal({
            container: t,
            el: {
                tabContainer: ".news_tab > ul",
                resultContainer: ".news_list"
            },
            paginationOptions: {},
            after: function() {
                $("#wrapper").scalePlatform()
            }
        })
    }
    )),
    $(window).width() > 970) {
        $(".pageContent").addClass("swiper-wrapper"),
        new Swiper(".wrapPage",{
            speed: 1300,
            spaceBetween: 30,
            loop: !1,
            effect: "fade",
            mousewheel: !0,
            noSwiping: !0,
            noSwipingClass: "stop-swiping",
            initialSlide: _,
            pagination: {
                el: ".menu__left",
                clickable: !0,
                renderBullet: function(t, e) {
                    return t < 6 ? '<li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + t + '">' + menu[t] + "</span></li>" : '<li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + t + '">' + menu[t] + '</span></li><li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + (t + 1) + '">' + menu[t] + "</span></li>"
                }
            }
        }).on("slideChange", (function() {
            0 === this.activeIndex && $(".floatleft__main, .taydu_mansite_float_right").removeClass("active"),
            this.activeIndex >= 1 && $(".floatleft__main, .taydu_mansite_float_right").addClass("active");
            var t = this.activeIndex
              , e = new URLSearchParams(window.location.search);
            e.set("active", t);
            var a = e.toString();
            window.history.pushState(null, "", "?" + a)
        }
        ));
        var u = new URLSearchParams(window.location.search)
          , m = window.location.hash
          , _ = u.get("active");
        $(m).length > 0 && (_ = $(m).parent().index(),
        console.log(_)),
        _ = parseInt(_, 10),
        isNaN(_) || (console.log(_),
        window.swiper = new Swiper(".wrapPage",{
            speed: 1300,
            spaceBetween: 30,
            loop: !1,
            effect: "fade",
            mousewheel: !0,
            noSwiping: !0,
            noSwipingClass: "stop-swiping",
            initialSlide: _,
            pagination: {
                el: ".menu__left",
                clickable: !0,
                renderBullet: function(t, e) {
                    return t < 6 ? '<li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + t + '">' + menu[t] + "</span></li>" : '<li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + t + '">' + menu[t] + '</span></li><li class="pagination-' + t + " flex " + e + '"><i class="icon flower2"></i><span class="text_menu nav-text' + (t + 1) + '">' + menu[t] + "</span></li>"
                }
            },
            on: {
                slideChange: function() {
                    0 === this.activeIndex && $(".floatleft__main, .taydu_mansite_float_right").removeClass("active"),
                    this.activeIndex >= 1 && $(".floatleft__main, .taydu_mansite_float_right").addClass("active")
                }
            }
        }))
    }
    document.addEventListener("mousemove", (function(t) {
        this.querySelectorAll(".layer").forEach((e => {
            let a = e.getAttribute("data-speed");
            e.style.transform = `translate(${t.clientX * a / 1e3}px, ${t.clientY * a / 1e3}px)`
        }
        ))
    }
    ))
}
]);
