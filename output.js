//Thu Mar 19 2026 09:26:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x37e928 = {
    name: "顺丰速运",
    tokenTitle: "顺丰速运Token",
    description: "快递物流服务",
    icon: "🚚"
  };
  var _0x2b866a = {
    name: "朴朴超市",
    tokenTitle: "朴朴超市Token",
    description: "生鲜购物平台",
    icon: "🛒"
  };
  var _0x2ca8b3 = {
    name: "永辉超市",
    tokenTitle: "永辉超市Token",
    description: "社区生活超市",
    icon: "🏪"
  };
  var _0x27edcb = {
    name: "酷狗音乐",
    type: "verification",
    api: "/api/getQr"
  };
  var _0xc70b6b = {
    name: "星芽短剧",
    type: "verification",
    api: "/api/getQr"
  };
  var _0x3593f7 = {
    sf: _0x37e928,
    ppcs: _0x2b866a,
    yh: _0x2ca8b3,
    kugou: _0x27edcb,
    xydj: _0xc70b6b
  };
  var _0x367097 = "/api";
  function _0x2bac0c() {
    var _0x469cd9,
      _0x2e0da4,
      _0x3a6bae = "function" == typeof Symbol ? Symbol : {},
      _0x38739e = _0x3a6bae.iterator || "@@iterator",
      _0x39ab7c = _0x3a6bae.toStringTag || "@@toStringTag";
    function _0x148c1a(_0x11f225, _0x2da7da, _0x5ab1b6, _0x388fcd) {
      var _0x32b564 = _0x2da7da && _0x2da7da.prototype instanceof _0x50da97 ? _0x2da7da : _0x50da97,
        _0x4ef76f = Object.create(_0x32b564.prototype);
      _0x2e3a15(_0x4ef76f, "_invoke", function (_0x3cc13e, _0x440ed5, _0x2fa595) {
        var _0x277ce1,
          _0x12b1c3,
          _0x2094d6,
          _0x1965ef = 0,
          _0x54128c = _0x2fa595 || [],
          _0x14a573 = !1,
          _0x261817 = {
            p: 0,
            n: 0,
            v: _0x469cd9,
            a: _0x59134c,
            f: _0x59134c.bind(_0x469cd9, 4),
            d: function (_0x42b5c2, _0x1a0379) {
              _0x277ce1 = _0x42b5c2;
              _0x12b1c3 = 0;
              _0x2094d6 = _0x469cd9;
              _0x261817.n = _0x1a0379;
              return _0x3c3b63;
            }
          };
        function _0x59134c(_0x1f01c8, _0x610450) {
          for (_0x12b1c3 = _0x1f01c8, _0x2094d6 = _0x610450, _0x2e0da4 = 0; !_0x14a573 && _0x1965ef && !_0x225e8e && _0x2e0da4 < _0x54128c.length; _0x2e0da4++) {
            var _0x225e8e,
              _0x3df25d = _0x54128c[_0x2e0da4],
              _0x1db10b = _0x261817.p,
              _0x318178 = _0x3df25d[2];
            _0x1f01c8 > 3 ? (_0x225e8e = _0x318178 === _0x610450) && (_0x2094d6 = _0x3df25d[(_0x12b1c3 = _0x3df25d[4]) ? 5 : (_0x12b1c3 = 3, 3)], _0x3df25d[4] = _0x3df25d[5] = _0x469cd9) : _0x3df25d[0] <= _0x1db10b && ((_0x225e8e = _0x1f01c8 < 2 && _0x1db10b < _0x3df25d[1]) ? (_0x12b1c3 = 0, _0x261817.v = _0x610450, _0x261817.n = _0x3df25d[1]) : _0x1db10b < _0x318178 && (_0x225e8e = _0x1f01c8 < 3 || _0x3df25d[0] > _0x610450 || _0x610450 > _0x318178) && (_0x3df25d[4] = _0x1f01c8, _0x3df25d[5] = _0x610450, _0x261817.n = _0x318178, _0x12b1c3 = 0));
          }
          if (_0x225e8e || _0x1f01c8 > 1) {
            return _0x3c3b63;
          }
          throw _0x14a573 = !0, _0x610450;
        }
        return function (_0x540510, _0x5387cc, _0x15fc69) {
          if (_0x1965ef > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x14a573 && 1 === _0x5387cc && _0x59134c(_0x5387cc, _0x15fc69), _0x12b1c3 = _0x5387cc, _0x2094d6 = _0x15fc69; (_0x2e0da4 = _0x12b1c3 < 2 ? _0x469cd9 : _0x2094d6) || !_0x14a573;) {
            _0x277ce1 || (_0x12b1c3 ? _0x12b1c3 < 3 ? (_0x12b1c3 > 1 && (_0x261817.n = -1), _0x59134c(_0x12b1c3, _0x2094d6)) : _0x261817.n = _0x2094d6 : _0x261817.v = _0x2094d6);
            try {
              if (_0x1965ef = 2, _0x277ce1) {
                if (_0x12b1c3 || (_0x540510 = "next"), _0x2e0da4 = _0x277ce1[_0x540510]) {
                  if (!(_0x2e0da4 = _0x2e0da4.call(_0x277ce1, _0x2094d6))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x2e0da4.done) {
                    return _0x2e0da4;
                  }
                  _0x2094d6 = _0x2e0da4.value;
                  _0x12b1c3 < 2 && (_0x12b1c3 = 0);
                } else {
                  1 === _0x12b1c3 && (_0x2e0da4 = _0x277ce1.return) && _0x2e0da4.call(_0x277ce1);
                  _0x12b1c3 < 2 && (_0x2094d6 = TypeError("The iterator does not provide a '" + _0x540510 + "' method"), _0x12b1c3 = 1);
                }
                _0x277ce1 = _0x469cd9;
              } else {
                if ((_0x2e0da4 = (_0x14a573 = _0x261817.n < 0) ? _0x2094d6 : _0x3cc13e.call(_0x440ed5, _0x261817)) !== _0x3c3b63) {
                  break;
                }
              }
            } catch (_0x3c37ad) {
              _0x277ce1 = _0x469cd9;
              _0x12b1c3 = 1;
              _0x2094d6 = _0x3c37ad;
            } finally {
              _0x1965ef = 1;
            }
          }
          var _0x173a68 = {
            value: _0x2e0da4,
            done: _0x14a573
          };
          return _0x173a68;
        };
      }(_0x11f225, _0x5ab1b6, _0x388fcd), !0);
      return _0x4ef76f;
    }
    var _0x3c3b63 = {};
    function _0x50da97() {}
    function _0x1ffc9d() {}
    function _0x1f84d0() {}
    _0x2e0da4 = Object.getPrototypeOf;
    _0x1f84d0.prototype = _0x50da97.prototype = Object.create(_0x2672a1);
    var _0x2672a1 = [][_0x38739e] ? _0x2e0da4(_0x2e0da4([][_0x38739e]())) : (_0x2e3a15(_0x2e0da4 = {}, _0x38739e, function () {
        return this;
      }), _0x2e0da4),
      _0x91a596 = _0x1f84d0.prototype;
    function _0x4b192a(_0x4d8b09) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x4d8b09, _0x1f84d0) : (_0x4d8b09.__proto__ = _0x1f84d0, _0x2e3a15(_0x4d8b09, _0x39ab7c, "GeneratorFunction"));
      _0x4d8b09.prototype = Object.create(_0x91a596);
      return _0x4d8b09;
    }
    _0x1ffc9d.prototype = _0x1f84d0;
    _0x2e3a15(_0x91a596, "constructor", _0x1f84d0);
    _0x2e3a15(_0x1f84d0, "constructor", _0x1ffc9d);
    _0x1ffc9d.displayName = "GeneratorFunction";
    _0x2e3a15(_0x1f84d0, _0x39ab7c, "GeneratorFunction");
    _0x2e3a15(_0x91a596);
    _0x2e3a15(_0x91a596, _0x39ab7c, "Generator");
    _0x2e3a15(_0x91a596, _0x38739e, function () {
      return this;
    });
    _0x2e3a15(_0x91a596, "toString", function () {
      return "[object Generator]";
    });
    return (_0x2bac0c = function () {
      var _0x2732cf = {
        w: _0x148c1a,
        m: _0x4b192a
      };
      return _0x2732cf;
    })();
  }
  function _0x2e3a15(_0x70c07, _0x35f810, _0x225898, _0x206388) {
    var _0x19b156 = Object.defineProperty;
    try {
      _0x19b156({}, "", {});
    } catch (_0x258411) {
      _0x19b156 = 0;
    }
    _0x2e3a15 = function (_0x45e531, _0xc39db3, _0x45f248, _0x135fd5) {
      function _0x5cd9d1(_0x50f65d, _0xfb89ef) {
        _0x2e3a15(_0x45e531, _0x50f65d, function (_0x537f8e) {
          return this._invoke(_0x50f65d, _0xfb89ef, _0x537f8e);
        });
      }
      var _0x472363 = {
        value: _0x45f248,
        enumerable: !_0x135fd5,
        configurable: !_0x135fd5,
        writable: !_0x135fd5
      };
      _0xc39db3 ? _0x19b156 ? _0x19b156(_0x45e531, _0xc39db3, _0x472363) : _0x45e531[_0xc39db3] = _0x45f248 : (_0x5cd9d1("next", 0), _0x5cd9d1("throw", 1), _0x5cd9d1("return", 2));
    };
    _0x2e3a15(_0x70c07, _0x35f810, _0x225898, _0x206388);
  }
  function _0x4fba7f(_0x597367, _0x12e88d) {
    return function (_0xd021b5) {
      if (Array.isArray(_0xd021b5)) {
        return _0xd021b5;
      }
    }(_0x597367) || function (_0x84bbc6, _0x5a480b) {
      var _0x1efa9a = null == _0x84bbc6 ? null : "undefined" != typeof Symbol && _0x84bbc6[Symbol.iterator] || _0x84bbc6["@@iterator"];
      if (null != _0x1efa9a) {
        var _0x5f4aeb,
          _0x2f334c,
          _0x80219a,
          _0x3184b1,
          _0x16ca21 = [],
          _0xaf5020 = !0,
          _0x132b30 = !1;
        try {
          if (_0x80219a = (_0x1efa9a = _0x1efa9a.call(_0x84bbc6)).next, 0 === _0x5a480b) {
            if (Object(_0x1efa9a) !== _0x1efa9a) {
              return;
            }
            _0xaf5020 = !1;
          } else {
            for (; !(_0xaf5020 = (_0x5f4aeb = _0x80219a.call(_0x1efa9a)).done) && (_0x16ca21.push(_0x5f4aeb.value), _0x16ca21.length !== _0x5a480b); _0xaf5020 = !0) {}
          }
        } catch (_0x1f2773) {
          _0x132b30 = !0;
          _0x2f334c = _0x1f2773;
        } finally {
          try {
            if (!_0xaf5020 && null != _0x1efa9a.return && (_0x3184b1 = _0x1efa9a.return(), Object(_0x3184b1) !== _0x3184b1)) {
              return;
            }
          } finally {
            if (_0x132b30) {
              throw _0x2f334c;
            }
          }
        }
        return _0x16ca21;
      }
    }(_0x597367, _0x12e88d) || function (_0x309348, _0x349c29) {
      if (_0x309348) {
        if ("string" == typeof _0x309348) {
          return _0x33aa2f(_0x309348, _0x349c29);
        }
        var _0x38ac5c = {}.toString.call(_0x309348).slice(8, -1);
        "Object" === _0x38ac5c && _0x309348.constructor && (_0x38ac5c = _0x309348.constructor.name);
        return "Map" === _0x38ac5c || "Set" === _0x38ac5c ? Array.from(_0x309348) : "Arguments" === _0x38ac5c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x38ac5c) ? _0x33aa2f(_0x309348, _0x349c29) : void 0;
      }
    }(_0x597367, _0x12e88d) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x33aa2f(_0x44063d, _0x4f58cf) {
    (null == _0x4f58cf || _0x4f58cf > _0x44063d.length) && (_0x4f58cf = _0x44063d.length);
    for (var _0x3cb017 = 0, _0x308f6c = Array(_0x4f58cf); _0x3cb017 < _0x4f58cf; _0x3cb017++) {
      _0x308f6c[_0x3cb017] = _0x44063d[_0x3cb017];
    }
    return _0x308f6c;
  }
  function _0x59ac50(_0x4eff5f, _0x4da5e4, _0x4a65ab, _0x4d1d4f, _0x324cee, _0x15bf06, _0x267984) {
    try {
      var _0x2655ab = _0x4eff5f[_0x15bf06](_0x267984),
        _0x3739c1 = _0x2655ab.value;
    } catch (_0x552508) {
      return void _0x4a65ab(_0x552508);
    }
    _0x2655ab.done ? _0x4da5e4(_0x3739c1) : Promise.resolve(_0x3739c1).then(_0x4d1d4f, _0x324cee);
  }
  function _0x2e2219(_0x16d761) {
    return function () {
      var _0x1a7869 = this,
        _0x7a293c = arguments;
      return new Promise(function (_0xbf25d2, _0x6b73f0) {
        var _0x2ad208 = _0x16d761.apply(_0x1a7869, _0x7a293c);
        function _0x3cd58a(_0x558721) {
          _0x59ac50(_0x2ad208, _0xbf25d2, _0x6b73f0, _0x3cd58a, _0xd4c357, "next", _0x558721);
        }
        function _0xd4c357(_0x5d11db) {
          _0x59ac50(_0x2ad208, _0xbf25d2, _0x6b73f0, _0x3cd58a, _0xd4c357, "throw", _0x5d11db);
        }
        _0x3cd58a(void 0);
      });
    };
  }
  var _0x4b4da7 = {
    modulus: null,
    exponent: null,
    csrfToken: null,
    processedToken: null,
    salt: null,
    timestamp: null,
    fingerprint: null,
    initialized: !1
  };
  function _0x551c59() {
    var _0x4183cf = document.createElement("canvas"),
      _0x54ad35 = _0x4183cf.getContext("2d");
    _0x54ad35.textBaseline = "top";
    _0x54ad35.font = "14px Arial";
    _0x54ad35.fillText("fingerprint", 2, 2);
    var _0x36005a = _0x4183cf.toDataURL().slice(-50),
      _0x2174dd = "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
      _0x47cc17 = Intl.DateTimeFormat().resolvedOptions().timeZone,
      _0x4f8737 = navigator.language,
      _0x2340e0 = navigator.platform,
      _0x5047dd = navigator.plugins ? navigator.plugins.length : 0;
    return _0x5c8a1b("".concat(_0x36005a, "|").concat(_0x2174dd, "|").concat(_0x47cc17, "|").concat(_0x4f8737, "|").concat(_0x2340e0, "|").concat(_0x5047dd)).substring(0, 16);
  }
  function _0x157b9f(_0x2af072, _0x37b753, _0xca6f1a) {
    var _0x58b706 = "".concat(_0x2af072.substring(0, 16)).concat(_0x37b753).concat(_0x2af072.substring(16)),
      _0xc0df8d = (_0xca6f1a % 1000000).toString(16);
    return _0x5c8a1b("".concat(_0x58b706).concat(_0xc0df8d));
  }
  function _0x525763() {
    return _0x34e0db.apply(this, arguments);
  }
  function _0x34e0db() {
    return (_0x34e0db = _0x2e2219(_0x2bac0c().m(function _0x4c0a10() {
      var _0x4cdadb, _0x3800e6;
      return _0x2bac0c().w(function (_0x128c91) {
        for (;;) {
          switch (_0x128c91.p = _0x128c91.n) {
            case 0:
              _0x128c91.p = 0;
              _0x4b4da7.fingerprint = _0x551c59();
              _0x128c91.n = 1;
              return fetch("/api/getPublicKey");
            case 1:
              _0x4cdadb = _0x128c91.v;
              _0x128c91.n = 2;
              return _0x4cdadb.json();
            case 2:
              if (0 !== (_0x3800e6 = _0x128c91.v).code || !_0x3800e6.data) {
                _0x128c91.n = 3;
                break;
              }
              _0x4b4da7.modulus = _0x3800e6.data.modulus;
              _0x4b4da7.exponent = _0x3800e6.data.exponent;
              _0x4b4da7.csrfToken = _0x3800e6.data.csrfToken;
              _0x4b4da7.salt = _0x3800e6.data.salt;
              _0x4b4da7.timestamp = _0x3800e6.data.timestamp;
              _0x4b4da7.processedToken = _0x157b9f(_0x3800e6.data.csrfToken, _0x3800e6.data.salt, _0x3800e6.data.timestamp, _0x4b4da7.fingerprint);
              _0x4b4da7.initialized = !0;
              return _0x128c91.a(2, !0);
            case 3:
              return _0x128c91.a(2, !1);
            case 4:
              _0x128c91.p = 4;
              _0x128c91.v;
              return _0x128c91.a(2, !1);
          }
        }
      }, _0x4c0a10, null, [[0, 4]]);
    }))).apply(this, arguments);
  }
  function _0x4d9605() {
    return _0x4b4da7.initialized;
  }
  function _0x58b0d7(_0x22c48d) {
    for (var _0x36854b = atob(_0x22c48d), _0x53873f = new Uint8Array(_0x36854b.length), _0x50d514 = 0; _0x50d514 < _0x36854b.length; _0x50d514++) {
      _0x53873f[_0x50d514] = _0x36854b.charCodeAt(_0x50d514);
    }
    return _0x53873f;
  }
  function _0x4f85c5(_0xdd62d7) {
    for (var _0x44da80 = BigInt(0), _0x3c9422 = 0; _0x3c9422 < _0xdd62d7.length; _0x3c9422++) {
      _0x44da80 = (_0x44da80 << BigInt(8)) + BigInt(_0xdd62d7[_0x3c9422]);
    }
    return _0x44da80;
  }
  function _0x1907fd(_0x30b80f) {
    if (!_0x4b4da7.initialized) {
      return null;
    }
    try {
      var _0x4f67d3 = _0x58b0d7(_0x4b4da7.modulus),
        _0x162c67 = _0x58b0d7(_0x4b4da7.exponent),
        _0x29a19b = _0x4f85c5(_0x4f67d3),
        _0x45048b = _0x4f85c5(_0x162c67),
        _0x530d65 = _0x4f67d3.length,
        _0x46bfff = function (_0x3782b4, _0x2b646d) {
          var _0x172414 = new TextEncoder().encode(_0x3782b4),
            _0x5ca88b = _0x2b646d - _0x172414.length - 3;
          if (_0x5ca88b < 8) {
            throw new Error("Message too long for key size");
          }
          var _0x3ff937 = new Uint8Array(_0x2b646d);
          _0x3ff937[0] = 0;
          _0x3ff937[1] = 2;
          for (var _0x4df084 = 2; _0x4df084 < _0x5ca88b + 2; _0x4df084++) {
            _0x3ff937[_0x4df084] = Math.floor(254 * Math.random()) + 1;
          }
          _0x3ff937[_0x5ca88b + 2] = 0;
          _0x3ff937.set(_0x172414, _0x5ca88b + 3);
          return _0x3ff937;
        }(_0x30b80f, _0x530d65),
        _0x1f08fc = function (_0x5d4b1d, _0x4f01e4) {
          for (var _0x3e460e = new Uint8Array(_0x4f01e4), _0x51166b = _0x4f01e4 - 1; _0x51166b >= 0; _0x51166b--) {
            _0x3e460e[_0x51166b] = Number(_0x5d4b1d & BigInt(255));
            _0x5d4b1d >>= BigInt(8);
          }
          return _0x3e460e;
        }(function (_0x2f5e29, _0x4e0f6a, _0x51281f) {
          var _0x383669 = BigInt(1);
          _0x2f5e29 %= _0x51281f;
          for (; _0x4e0f6a > BigInt(0);) {
            _0x4e0f6a % BigInt(2) === BigInt(1) && (_0x383669 = _0x383669 * _0x2f5e29 % _0x51281f);
            _0x4e0f6a >>= BigInt(1);
            _0x2f5e29 = _0x2f5e29 * _0x2f5e29 % _0x51281f;
          }
          return _0x383669;
        }(_0x4f85c5(_0x46bfff), _0x45048b, _0x29a19b), _0x530d65);
      return btoa(String.fromCharCode.apply(null, _0x1f08fc));
    } catch (_0x58bf6f) {
      return null;
    }
  }
  function _0x5c8a1b(_0x1d5391) {
    function _0x58fb30(_0x153e0d, _0x240e68) {
      return _0x153e0d << _0x240e68 | _0x153e0d >>> 32 - _0x240e68;
    }
    function _0x419ba2(_0xe8cd8f, _0x58de59) {
      var _0x133b1d = 1073741824 & _0xe8cd8f,
        _0x27c8b5 = 1073741824 & _0x58de59,
        _0x3702bd = 2147483648 & _0xe8cd8f,
        _0x3454eb = 2147483648 & _0x58de59,
        _0x41bb47 = (1073741823 & _0xe8cd8f) + (1073741823 & _0x58de59);
      return _0x133b1d & _0x27c8b5 ? 2147483648 ^ _0x41bb47 ^ _0x3702bd ^ _0x3454eb : _0x133b1d | _0x27c8b5 ? 1073741824 & _0x41bb47 ? 3221225472 ^ _0x41bb47 ^ _0x3702bd ^ _0x3454eb : 1073741824 ^ _0x41bb47 ^ _0x3702bd ^ _0x3454eb : _0x41bb47 ^ _0x3702bd ^ _0x3454eb;
    }
    function _0x44b6e4(_0x52e9cb, _0x2eeede, _0x5f55c2, _0x2e586e, _0x26ca08, _0x2e7c54, _0x8fe700) {
      _0x52e9cb = _0x419ba2(_0x52e9cb, _0x419ba2(_0x419ba2(function (_0x2d2aaf, _0xc05536, _0x6f184e) {
        return _0x2d2aaf & _0xc05536 | ~_0x2d2aaf & _0x6f184e;
      }(_0x2eeede, _0x5f55c2, _0x2e586e), _0x26ca08), _0x8fe700));
      return _0x419ba2(_0x58fb30(_0x52e9cb, _0x2e7c54), _0x2eeede);
    }
    function _0x5691bb(_0x4a76e4, _0x3b8226, _0x329113, _0x4d809b, _0x1d1f02, _0x412053, _0x2433e5) {
      _0x4a76e4 = _0x419ba2(_0x4a76e4, _0x419ba2(_0x419ba2(function (_0x53e51b, _0x52d7c9, _0x43cb0a) {
        return _0x53e51b & _0x43cb0a | _0x52d7c9 & ~_0x43cb0a;
      }(_0x3b8226, _0x329113, _0x4d809b), _0x1d1f02), _0x2433e5));
      return _0x419ba2(_0x58fb30(_0x4a76e4, _0x412053), _0x3b8226);
    }
    function _0x2c6c16(_0xbaa265, _0x35fd0f, _0xe8470, _0x3c8499, _0x3cab7d, _0x2df04e, _0x532e71) {
      _0xbaa265 = _0x419ba2(_0xbaa265, _0x419ba2(_0x419ba2(function (_0x36e4f5, _0x1bb1ed, _0x2bdd3a) {
        return _0x36e4f5 ^ _0x1bb1ed ^ _0x2bdd3a;
      }(_0x35fd0f, _0xe8470, _0x3c8499), _0x3cab7d), _0x532e71));
      return _0x419ba2(_0x58fb30(_0xbaa265, _0x2df04e), _0x35fd0f);
    }
    function _0x346a74(_0x2db084, _0x408765, _0x34445b, _0x2cd38e, _0x36e4ac, _0x18f4be, _0x472cba) {
      _0x2db084 = _0x419ba2(_0x2db084, _0x419ba2(_0x419ba2(function (_0x26c592, _0x426914, _0x5583bd) {
        return _0x426914 ^ (_0x26c592 | ~_0x5583bd);
      }(_0x408765, _0x34445b, _0x2cd38e), _0x36e4ac), _0x472cba));
      return _0x419ba2(_0x58fb30(_0x2db084, _0x18f4be), _0x408765);
    }
    function _0x31bb70(_0x125d76) {
      for (var _0x2e6273 = "", _0x15eda1 = "", _0x39c730 = 0; _0x39c730 <= 3; _0x39c730++) {
        _0x2e6273 += (_0x15eda1 = "0" + (_0x125d76 >>> 8 * _0x39c730 & 255).toString(16)).substr(_0x15eda1.length - 2, 2);
      }
      return _0x2e6273;
    }
    for (var _0x9f6b8b = function (_0x33d17b) {
        for (var _0xcf02cd, _0x24c7e5 = _0x33d17b.length, _0x1caa40 = _0x24c7e5 + 8, _0x7821aa = 16 * ((_0x1caa40 - _0x1caa40 % 64) / 64 + 1), _0x4dae56 = Array(_0x7821aa - 1), _0x3cbaf3 = 0, _0x80c597 = 0; _0x80c597 < _0x24c7e5;) {
          _0x3cbaf3 = _0x80c597 % 4 * 8;
          _0x4dae56[_0xcf02cd = (_0x80c597 - _0x80c597 % 4) / 4] = _0x4dae56[_0xcf02cd] | _0x33d17b.charCodeAt(_0x80c597) << _0x3cbaf3;
          _0x80c597++;
        }
        _0x3cbaf3 = _0x80c597 % 4 * 8;
        _0x4dae56[_0xcf02cd = (_0x80c597 - _0x80c597 % 4) / 4] = _0x4dae56[_0xcf02cd] | 128 << _0x3cbaf3;
        _0x4dae56[_0x7821aa - 2] = _0x24c7e5 << 3;
        _0x4dae56[_0x7821aa - 1] = _0x24c7e5 >>> 29;
        return _0x4dae56;
      }(_0x1d5391), _0x53eb29 = 1732584193, _0x2ebca7 = 4023233417, _0xae423 = 2562383102, _0x209fa1 = 271733878, _0x19829d = 0; _0x19829d < _0x9f6b8b.length; _0x19829d += 16) {
      var _0x4281a8 = _0x53eb29,
        _0x146ec4 = _0x2ebca7,
        _0x55a430 = _0xae423,
        _0x3eb648 = _0x209fa1;
      _0x53eb29 = _0x44b6e4(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 0], 7, 3614090360);
      _0x209fa1 = _0x44b6e4(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 1], 12, 3905402710);
      _0xae423 = _0x44b6e4(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 2], 17, 606105819);
      _0x2ebca7 = _0x44b6e4(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 3], 22, 3250441966);
      _0x53eb29 = _0x44b6e4(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 4], 7, 4118548399);
      _0x209fa1 = _0x44b6e4(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 5], 12, 1200080426);
      _0xae423 = _0x44b6e4(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 6], 17, 2821735955);
      _0x2ebca7 = _0x44b6e4(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 7], 22, 4249261313);
      _0x53eb29 = _0x44b6e4(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 8], 7, 1770035416);
      _0x209fa1 = _0x44b6e4(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 9], 12, 2336552879);
      _0xae423 = _0x44b6e4(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 10], 17, 4294925233);
      _0x2ebca7 = _0x44b6e4(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 11], 22, 2304563134);
      _0x53eb29 = _0x44b6e4(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 12], 7, 1804603682);
      _0x209fa1 = _0x44b6e4(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 13], 12, 4254626195);
      _0xae423 = _0x44b6e4(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 14], 17, 2792965006);
      _0x53eb29 = _0x5691bb(_0x53eb29, _0x2ebca7 = _0x44b6e4(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 15], 22, 1236535329), _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 1], 5, 4129170786);
      _0x209fa1 = _0x5691bb(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 6], 9, 3225465664);
      _0xae423 = _0x5691bb(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 11], 14, 643717713);
      _0x2ebca7 = _0x5691bb(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 0], 20, 3921069994);
      _0x53eb29 = _0x5691bb(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 5], 5, 3593408605);
      _0x209fa1 = _0x5691bb(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 10], 9, 38016083);
      _0xae423 = _0x5691bb(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 15], 14, 3634488961);
      _0x2ebca7 = _0x5691bb(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 4], 20, 3889429448);
      _0x53eb29 = _0x5691bb(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 9], 5, 568446438);
      _0x209fa1 = _0x5691bb(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 14], 9, 3275163606);
      _0xae423 = _0x5691bb(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 3], 14, 4107603335);
      _0x2ebca7 = _0x5691bb(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 8], 20, 1163531501);
      _0x53eb29 = _0x5691bb(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 13], 5, 2850285829);
      _0x209fa1 = _0x5691bb(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 2], 9, 4243563512);
      _0xae423 = _0x5691bb(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 7], 14, 1735328473);
      _0x53eb29 = _0x2c6c16(_0x53eb29, _0x2ebca7 = _0x5691bb(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 12], 20, 2368359562), _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 5], 4, 4294588738);
      _0x209fa1 = _0x2c6c16(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 8], 11, 2272392833);
      _0xae423 = _0x2c6c16(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 11], 16, 1839030562);
      _0x2ebca7 = _0x2c6c16(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 14], 23, 4259657740);
      _0x53eb29 = _0x2c6c16(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 1], 4, 2763975236);
      _0x209fa1 = _0x2c6c16(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 4], 11, 1272893353);
      _0xae423 = _0x2c6c16(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 7], 16, 4139469664);
      _0x2ebca7 = _0x2c6c16(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 10], 23, 3200236656);
      _0x53eb29 = _0x2c6c16(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 13], 4, 681279174);
      _0x209fa1 = _0x2c6c16(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 0], 11, 3936430074);
      _0xae423 = _0x2c6c16(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 3], 16, 3572445317);
      _0x2ebca7 = _0x2c6c16(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 6], 23, 76029189);
      _0x53eb29 = _0x2c6c16(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 9], 4, 3654602809);
      _0x209fa1 = _0x2c6c16(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 12], 11, 3873151461);
      _0xae423 = _0x2c6c16(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 15], 16, 530742520);
      _0x53eb29 = _0x346a74(_0x53eb29, _0x2ebca7 = _0x2c6c16(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 2], 23, 3299628645), _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 0], 6, 4096336452);
      _0x209fa1 = _0x346a74(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 7], 10, 1126891415);
      _0xae423 = _0x346a74(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 14], 15, 2878612391);
      _0x2ebca7 = _0x346a74(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 5], 21, 4237533241);
      _0x53eb29 = _0x346a74(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 12], 6, 1700485571);
      _0x209fa1 = _0x346a74(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 3], 10, 2399980690);
      _0xae423 = _0x346a74(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 10], 15, 4293915773);
      _0x2ebca7 = _0x346a74(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 1], 21, 2240044497);
      _0x53eb29 = _0x346a74(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 8], 6, 1873313359);
      _0x209fa1 = _0x346a74(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 15], 10, 4264355552);
      _0xae423 = _0x346a74(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 6], 15, 2734768916);
      _0x2ebca7 = _0x346a74(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 13], 21, 1309151649);
      _0x53eb29 = _0x346a74(_0x53eb29, _0x2ebca7, _0xae423, _0x209fa1, _0x9f6b8b[_0x19829d + 4], 6, 4149444226);
      _0x209fa1 = _0x346a74(_0x209fa1, _0x53eb29, _0x2ebca7, _0xae423, _0x9f6b8b[_0x19829d + 11], 10, 3174756917);
      _0xae423 = _0x346a74(_0xae423, _0x209fa1, _0x53eb29, _0x2ebca7, _0x9f6b8b[_0x19829d + 2], 15, 718787259);
      _0x2ebca7 = _0x346a74(_0x2ebca7, _0xae423, _0x209fa1, _0x53eb29, _0x9f6b8b[_0x19829d + 9], 21, 3951481745);
      _0x53eb29 = _0x419ba2(_0x53eb29, _0x4281a8);
      _0x2ebca7 = _0x419ba2(_0x2ebca7, _0x146ec4);
      _0xae423 = _0x419ba2(_0xae423, _0x55a430);
      _0x209fa1 = _0x419ba2(_0x209fa1, _0x3eb648);
    }
    return (_0x31bb70(_0x53eb29) + _0x31bb70(_0x2ebca7) + _0x31bb70(_0xae423) + _0x31bb70(_0x209fa1)).toLowerCase();
  }
  function _0x2281c3() {
    var _0x52435e = {};
    _0x52435e["Content-Type"] = "application/json";
    var _0x89d2cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      _0x134b29 = _0x52435e;
    _0x4b4da7.processedToken && (_0x134b29["X-CSRF-Token"] = _0x4b4da7.processedToken);
    _0x4b4da7.fingerprint && (_0x134b29["X-Client-FP"] = _0x4b4da7.fingerprint);
    var _0x562baf = function () {
      var _0x383e67 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        _0x2399fb = Date.now(),
        _0x4ac520 = Math.random().toString(36).substring(2, 15),
        _0x4755d7 = _0x383e67 ? _0x5c8a1b(_0x383e67).substring(0, 8) : "";
      return _0x1907fd("".concat(_0x2399fb, "|").concat(_0x4ac520, "|").concat(_0x4755d7));
    }("string" == typeof _0x89d2cb ? _0x89d2cb : JSON.stringify(_0x89d2cb));
    _0x562baf && (_0x134b29["X-Encrypted-Body"] = _0x562baf);
    for (var _0x1af098 = function () {
        for (var _0x17b797 = ["_tk", "_sid", "_ref", "_ts", "_hash", "_sign", "_v"], _0x5566b6 = {}, _0x365f23 = 2 + Math.floor(2 * Math.random()), _0x233db1 = 0; _0x233db1 < _0x365f23; _0x233db1++) {
          _0x5566b6[_0x17b797[Math.floor(Math.random() * _0x17b797.length)]] = Math.random().toString(36).substring(2, 10);
        }
        return _0x5566b6;
      }(), _0xc26e3d = 0, _0x5495cb = Object.entries(_0x1af098); _0xc26e3d < _0x5495cb.length; _0xc26e3d++) {
      var _0x595ca2 = _0x4fba7f(_0x5495cb[_0xc26e3d], 2),
        _0x81a2f1 = _0x595ca2[0],
        _0x490107 = _0x595ca2[1];
      _0x134b29["X-".concat(_0x81a2f1.toUpperCase())] = _0x490107;
    }
    return _0x134b29;
  }
  function _0x53b678() {
    return _0x158337.apply(this, arguments);
  }
  function _0x158337() {
    return (_0x158337 = _0x2e2219(_0x2bac0c().m(function _0x4267fd() {
      return _0x2bac0c().w(function (_0x436b9a) {
        for (;;) {
          switch (_0x436b9a.n) {
            case 0:
              _0x4b4da7.initialized = !1;
              _0x436b9a.n = 1;
              return _0x525763();
            case 1:
              return _0x436b9a.a(2, _0x436b9a.v);
          }
        }
      }, _0x4267fd);
    }))).apply(this, arguments);
  }
  function _0x3303de() {
    var _0x27a1e1 = document.getElementById("announcementBar"),
      _0x46a78d = document.body;
    localStorage.removeItem("announcementClosed");
    _0x27a1e1.style.display = "block";
    _0x27a1e1.style.transform = "translateY(0)";
    _0x27a1e1.style.opacity = "1";
    _0x46a78d.classList.remove("announcement-hidden");
    _0x27a1e1.style.animation = "slideDown 0.5s ease-out";
  }
  function _0x19230d(_0x2cd2ce) {
    var _0x282ef1 = document.getElementById("copyTooltip");
    _0x282ef1 && (_0x282ef1.textContent = _0x2cd2ce, _0x282ef1.classList.add("show"), setTimeout(function () {
      return _0x282ef1.classList.remove("show");
    }, 2000));
  }
  function _0x185e7c(_0x41a65c) {
    var _0x505e0 = document.createElement("textarea");
    _0x505e0.value = _0x41a65c;
    _0x505e0.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
    document.body.appendChild(_0x505e0);
    _0x505e0.select();
    try {
      document.execCommand("copy");
      _0x19230d("复制成功 COPIED");
    } catch (_0x27cd01) {
      _0x19230d("复制失败 COPY FAILED");
    }
    document.body.removeChild(_0x505e0);
  }
  function _0x70f681(_0x13ec21) {
    var _0x5b7eda = document.getElementById("status");
    _0x5b7eda && (_0x5b7eda.textContent = "ERROR: ".concat(_0x13ec21), _0x5b7eda.style.color = "var(--s-error)");
  }
  function _0x29281c(_0x11303c) {
    var _0x2e4939 = document.getElementById("status");
    _0x2e4939 && (_0x2e4939.textContent = _0x11303c, _0x2e4939.style.color = "var(--s-success)");
  }
  function _0x14fcb6() {
    var _0x10ca37 = document.getElementById("loadingSpinner");
    _0x10ca37 && _0x10ca37.classList.remove("hidden");
    var _0xa9468c = document.getElementById("qrCode");
    _0xa9468c && (_0xa9468c.innerHTML = "");
  }
  function _0x268c1b() {
    var _0x1dec8a = document.getElementById("loadingSpinner");
    _0x1dec8a && _0x1dec8a.classList.add("hidden");
  }
  function _0x582ed1(_0x12792f) {
    var _0x3b4af9 = document.getElementById("themeIcon");
    _0x3b4af9 && (_0x3b4af9.innerHTML = _0x12792f ? "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>" : "<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>");
  }
  function _0x5dbdb9() {
    var _0x4e6e48,
      _0x3375d2,
      _0x556cfe = "function" == typeof Symbol ? Symbol : {},
      _0x1cdad3 = _0x556cfe.iterator || "@@iterator",
      _0x4890ee = _0x556cfe.toStringTag || "@@toStringTag";
    function _0xa276c(_0x3d000f, _0x44ebd1, _0x11f170, _0x4e781b) {
      var _0x5cfb55 = _0x44ebd1 && _0x44ebd1.prototype instanceof _0x4fc58a ? _0x44ebd1 : _0x4fc58a,
        _0xbe7602 = Object.create(_0x5cfb55.prototype);
      _0xb54103(_0xbe7602, "_invoke", function (_0x2a4fd8, _0x28ef40, _0x57abb1) {
        var _0xd428e6,
          _0x4d389e,
          _0xafc1f,
          _0x47c92a = 0,
          _0x1cc144 = _0x57abb1 || [],
          _0x2324b7 = !1,
          _0x4962df = {
            p: 0,
            n: 0,
            v: _0x4e6e48,
            a: _0x223a3f,
            f: _0x223a3f.bind(_0x4e6e48, 4),
            d: function (_0x220684, _0x15a28e) {
              _0xd428e6 = _0x220684;
              _0x4d389e = 0;
              _0xafc1f = _0x4e6e48;
              _0x4962df.n = _0x15a28e;
              return _0x205d5b;
            }
          };
        function _0x223a3f(_0x3fe97b, _0x20e737) {
          for (_0x4d389e = _0x3fe97b, _0xafc1f = _0x20e737, _0x3375d2 = 0; !_0x2324b7 && _0x47c92a && !_0xd6ca82 && _0x3375d2 < _0x1cc144.length; _0x3375d2++) {
            var _0xd6ca82,
              _0x106bb6 = _0x1cc144[_0x3375d2],
              _0xc35c59 = _0x4962df.p,
              _0xffc2a3 = _0x106bb6[2];
            _0x3fe97b > 3 ? (_0xd6ca82 = _0xffc2a3 === _0x20e737) && (_0xafc1f = _0x106bb6[(_0x4d389e = _0x106bb6[4]) ? 5 : (_0x4d389e = 3, 3)], _0x106bb6[4] = _0x106bb6[5] = _0x4e6e48) : _0x106bb6[0] <= _0xc35c59 && ((_0xd6ca82 = _0x3fe97b < 2 && _0xc35c59 < _0x106bb6[1]) ? (_0x4d389e = 0, _0x4962df.v = _0x20e737, _0x4962df.n = _0x106bb6[1]) : _0xc35c59 < _0xffc2a3 && (_0xd6ca82 = _0x3fe97b < 3 || _0x106bb6[0] > _0x20e737 || _0x20e737 > _0xffc2a3) && (_0x106bb6[4] = _0x3fe97b, _0x106bb6[5] = _0x20e737, _0x4962df.n = _0xffc2a3, _0x4d389e = 0));
          }
          if (_0xd6ca82 || _0x3fe97b > 1) {
            return _0x205d5b;
          }
          throw _0x2324b7 = !0, _0x20e737;
        }
        return function (_0x31de46, _0xa842aa, _0x374abb) {
          if (_0x47c92a > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x2324b7 && 1 === _0xa842aa && _0x223a3f(_0xa842aa, _0x374abb), _0x4d389e = _0xa842aa, _0xafc1f = _0x374abb; (_0x3375d2 = _0x4d389e < 2 ? _0x4e6e48 : _0xafc1f) || !_0x2324b7;) {
            _0xd428e6 || (_0x4d389e ? _0x4d389e < 3 ? (_0x4d389e > 1 && (_0x4962df.n = -1), _0x223a3f(_0x4d389e, _0xafc1f)) : _0x4962df.n = _0xafc1f : _0x4962df.v = _0xafc1f);
            try {
              if (_0x47c92a = 2, _0xd428e6) {
                if (_0x4d389e || (_0x31de46 = "next"), _0x3375d2 = _0xd428e6[_0x31de46]) {
                  if (!(_0x3375d2 = _0x3375d2.call(_0xd428e6, _0xafc1f))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x3375d2.done) {
                    return _0x3375d2;
                  }
                  _0xafc1f = _0x3375d2.value;
                  _0x4d389e < 2 && (_0x4d389e = 0);
                } else {
                  1 === _0x4d389e && (_0x3375d2 = _0xd428e6.return) && _0x3375d2.call(_0xd428e6);
                  _0x4d389e < 2 && (_0xafc1f = TypeError("The iterator does not provide a '" + _0x31de46 + "' method"), _0x4d389e = 1);
                }
                _0xd428e6 = _0x4e6e48;
              } else {
                if ((_0x3375d2 = (_0x2324b7 = _0x4962df.n < 0) ? _0xafc1f : _0x2a4fd8.call(_0x28ef40, _0x4962df)) !== _0x205d5b) {
                  break;
                }
              }
            } catch (_0x207005) {
              _0xd428e6 = _0x4e6e48;
              _0x4d389e = 1;
              _0xafc1f = _0x207005;
            } finally {
              _0x47c92a = 1;
            }
          }
          var _0x201b4e = {
            value: _0x3375d2,
            done: _0x2324b7
          };
          return _0x201b4e;
        };
      }(_0x3d000f, _0x11f170, _0x4e781b), !0);
      return _0xbe7602;
    }
    var _0x205d5b = {};
    function _0x4fc58a() {}
    function _0x2233dc() {}
    function _0x4908fa() {}
    _0x3375d2 = Object.getPrototypeOf;
    _0x4908fa.prototype = _0x4fc58a.prototype = Object.create(_0x51bf52);
    var _0x51bf52 = [][_0x1cdad3] ? _0x3375d2(_0x3375d2([][_0x1cdad3]())) : (_0xb54103(_0x3375d2 = {}, _0x1cdad3, function () {
        return this;
      }), _0x3375d2),
      _0x3a2980 = _0x4908fa.prototype;
    function _0x113fa5(_0x3df921) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x3df921, _0x4908fa) : (_0x3df921.__proto__ = _0x4908fa, _0xb54103(_0x3df921, _0x4890ee, "GeneratorFunction"));
      _0x3df921.prototype = Object.create(_0x3a2980);
      return _0x3df921;
    }
    _0x2233dc.prototype = _0x4908fa;
    _0xb54103(_0x3a2980, "constructor", _0x4908fa);
    _0xb54103(_0x4908fa, "constructor", _0x2233dc);
    _0x2233dc.displayName = "GeneratorFunction";
    _0xb54103(_0x4908fa, _0x4890ee, "GeneratorFunction");
    _0xb54103(_0x3a2980);
    _0xb54103(_0x3a2980, _0x4890ee, "Generator");
    _0xb54103(_0x3a2980, _0x1cdad3, function () {
      return this;
    });
    _0xb54103(_0x3a2980, "toString", function () {
      return "[object Generator]";
    });
    return (_0x5dbdb9 = function () {
      var _0x1bc6bd = {
        w: _0xa276c,
        m: _0x113fa5
      };
      return _0x1bc6bd;
    })();
  }
  function _0xb54103(_0x483974, _0x105845, _0xbc8ce2, _0x527ec2) {
    var _0x37c359 = Object.defineProperty;
    try {
      _0x37c359({}, "", {});
    } catch (_0x15423d) {
      _0x37c359 = 0;
    }
    _0xb54103 = function (_0x14dce4, _0x28cab6, _0x5555f5, _0x401149) {
      function _0x2627b7(_0x58524a, _0x28f95c) {
        _0xb54103(_0x14dce4, _0x58524a, function (_0x2b5497) {
          return this._invoke(_0x58524a, _0x28f95c, _0x2b5497);
        });
      }
      var _0x19f777 = {
        value: _0x5555f5,
        enumerable: !_0x401149,
        configurable: !_0x401149,
        writable: !_0x401149
      };
      _0x28cab6 ? _0x37c359 ? _0x37c359(_0x14dce4, _0x28cab6, _0x19f777) : _0x14dce4[_0x28cab6] = _0x5555f5 : (_0x2627b7("next", 0), _0x2627b7("throw", 1), _0x2627b7("return", 2));
    };
    _0xb54103(_0x483974, _0x105845, _0xbc8ce2, _0x527ec2);
  }
  function _0x644b28(_0x3f79f8, _0xf066fe, _0x22ecc2, _0xe64e5d, _0xb870ed, _0x4073a8, _0x3e444d) {
    try {
      var _0x47c1f8 = _0x3f79f8[_0x4073a8](_0x3e444d),
        _0x483fd0 = _0x47c1f8.value;
    } catch (_0x161596) {
      return void _0x22ecc2(_0x161596);
    }
    _0x47c1f8.done ? _0xf066fe(_0x483fd0) : Promise.resolve(_0x483fd0).then(_0xe64e5d, _0xb870ed);
  }
  function _0x5eb86d(_0x565544) {
    return function () {
      var _0x39052e = this,
        _0x2a2b1d = arguments;
      return new Promise(function (_0x4fee1d, _0x322e19) {
        var _0x38ac14 = _0x565544.apply(_0x39052e, _0x2a2b1d);
        function _0x11252c(_0x131bd4) {
          _0x644b28(_0x38ac14, _0x4fee1d, _0x322e19, _0x11252c, _0x41c728, "next", _0x131bd4);
        }
        function _0x41c728(_0x587354) {
          _0x644b28(_0x38ac14, _0x4fee1d, _0x322e19, _0x11252c, _0x41c728, "throw", _0x587354);
        }
        _0x11252c(void 0);
      });
    };
  }
  function _0x4abcf6(_0x4dec45, _0x1d33c0) {
    return _0x4a4e08.apply(this, arguments);
  }
  function _0x4a4e08() {
    return (_0x4a4e08 = _0x5eb86d(_0x5dbdb9().m(function _0x59b203(_0x4ec7ef, _0x35170f) {
      var _0x51c0a9, _0x1d8e69, _0x53d9b2, _0x3dbc8d, _0x1b6a58, _0x133454;
      return _0x5dbdb9().w(function (_0x10508f) {
        for (;;) {
          switch (_0x10508f.p = _0x10508f.n) {
            case 0:
              if (_0x10508f.p = 0, _0x4d9605()) {
                _0x10508f.n = 1;
                break;
              }
              _0x10508f.n = 1;
              return _0x53b678();
            case 1:
              _0x51c0a9 = JSON.stringify(_0x35170f);
              _0x1d8e69 = _0x2281c3(_0x51c0a9);
              _0x10508f.n = 2;
              return fetch(_0x4ec7ef, {
                method: "POST",
                headers: _0x1d8e69,
                body: _0x51c0a9
              });
            case 2:
              if (403 !== (_0x53d9b2 = _0x10508f.v).status) {
                _0x10508f.n = 6;
                break;
              }
              _0x10508f.n = 3;
              return _0x53d9b2.json();
            case 3:
              if ("CSRF_INVALID" !== (_0x3dbc8d = _0x10508f.v).code && "CSRF_MISSING" !== _0x3dbc8d.code) {
                _0x10508f.n = 6;
                break;
              }
              _0x10508f.n = 4;
              return _0x53b678();
            case 4:
              _0x1b6a58 = JSON.stringify(_0x35170f);
              _0x133454 = _0x2281c3(_0x1b6a58);
              _0x10508f.n = 5;
              return fetch(_0x4ec7ef, {
                method: "POST",
                headers: _0x133454,
                body: _0x1b6a58
              });
            case 5:
              return _0x10508f.a(2, _0x10508f.v);
            case 6:
              return _0x10508f.a(2, _0x53d9b2);
            case 7:
              throw _0x10508f.p = 7, _0x10508f.v;
            case 8:
              return _0x10508f.a(2);
          }
        }
      }, _0x59b203, null, [[0, 7]]);
    }))).apply(this, arguments);
  }
  function _0x4201fc(_0x3f1502) {
    return _0x52ac84.apply(this, arguments);
  }
  function _0x52ac84() {
    return (_0x52ac84 = _0x5eb86d(_0x5dbdb9().m(function _0x4aa893(_0x3d93e5) {
      return _0x5dbdb9().w(function (_0x5f22e3) {
        for (;;) {
          switch (_0x5f22e3.n) {
            case 0:
              _0x5f22e3.n = 1;
              return _0x4abcf6("".concat(_0x367097, "/getQr"), {
                project: _0x3d93e5
              });
            case 1:
              return _0x5f22e3.a(2, _0x5f22e3.v);
          }
        }
      }, _0x4aa893);
    }))).apply(this, arguments);
  }
  function _0x3dfb4e(_0x4c9e78, _0x124ffe) {
    return _0x266636.apply(this, arguments);
  }
  function _0x266636() {
    return (_0x266636 = _0x5eb86d(_0x5dbdb9().m(function _0x13a162(_0x30008c, _0xbe0517) {
      return _0x5dbdb9().w(function (_0x4b8762) {
        for (;;) {
          switch (_0x4b8762.n) {
            case 0:
              _0x4b8762.n = 1;
              return _0x4abcf6("".concat(_0x367097, "/checkQr"), {
                uuid: _0x30008c,
                project: _0xbe0517
              });
            case 1:
              return _0x4b8762.a(2, _0x4b8762.v);
          }
        }
      }, _0x13a162);
    }))).apply(this, arguments);
  }
  function _0x3b2d86(_0x5708d3, _0x810fa6) {
    return _0x23df8c.apply(this, arguments);
  }
  function _0x23df8c() {
    return (_0x23df8c = _0x5eb86d(_0x5dbdb9().m(function _0x3a9cc2(_0x5e6748, _0x3e6f54) {
      return _0x5dbdb9().w(function (_0x426c83) {
        for (;;) {
          switch (_0x426c83.n) {
            case 0:
              _0x426c83.n = 1;
              return _0x4abcf6("".concat(_0x367097, "/generateToken"), {
                code: _0x5e6748,
                project: _0x3e6f54
              });
            case 1:
              return _0x426c83.a(2, _0x426c83.v);
          }
        }
      }, _0x3a9cc2);
    }))).apply(this, arguments);
  }
  function _0x518ab3(_0x1327b8) {
    return _0x3442d1.apply(this, arguments);
  }
  function _0x3442d1() {
    return (_0x3442d1 = _0x5eb86d(_0x5dbdb9().m(function _0x539257(_0x40cf5c) {
      return _0x5dbdb9().w(function (_0x421dbd) {
        for (;;) {
          switch (_0x421dbd.n) {
            case 0:
              _0x421dbd.n = 1;
              return _0x4abcf6("".concat(_0x367097, "/sendKugouCode"), {
                mobile: _0x40cf5c
              });
            case 1:
              return _0x421dbd.a(2, _0x421dbd.v);
          }
        }
      }, _0x539257);
    }))).apply(this, arguments);
  }
  function _0x265ff4(_0x1d5787, _0x366326) {
    return _0x26cdff.apply(this, arguments);
  }
  function _0x26cdff() {
    return (_0x26cdff = _0x5eb86d(_0x5dbdb9().m(function _0x14a67c(_0x12720e, _0x10c8f2) {
      return _0x5dbdb9().w(function (_0x26d95e) {
        for (;;) {
          switch (_0x26d95e.n) {
            case 0:
              _0x26d95e.n = 1;
              return _0x4abcf6("".concat(_0x367097, "/loginKugou"), {
                mobile: _0x12720e,
                code: _0x10c8f2
              });
            case 1:
              return _0x26d95e.a(2, _0x26d95e.v);
          }
        }
      }, _0x14a67c);
    }))).apply(this, arguments);
  }
  function _0x15fbdb(_0x5bbda8) {
    return _0x5db067.apply(this, arguments);
  }
  function _0x5db067() {
    return (_0x5db067 = _0x5eb86d(_0x5dbdb9().m(function _0x5d6e78(_0x34bfc3) {
      return _0x5dbdb9().w(function (_0x1e03a9) {
        for (;;) {
          if (0 === _0x1e03a9.n) {
            return _0x1e03a9.a(2, _0x4abcf6("/api/sendXydjCode", {
              mobile: _0x34bfc3
            }));
          }
        }
      }, _0x5d6e78);
    }))).apply(this, arguments);
  }
  function _0x2bee92(_0x11bbb6, _0x14eb07, _0x31d67c, _0x24bcb8) {
    return _0x3a0d0c.apply(this, arguments);
  }
  function _0x3a0d0c() {
    return (_0x3a0d0c = _0x5eb86d(_0x5dbdb9().m(function _0x25bb4c(_0x3816eb, _0x1bd2a9, _0x3d5be8, _0x4cbd5f) {
      return _0x5dbdb9().w(function (_0x415744) {
        for (;;) {
          if (0 === _0x415744.n) {
            return _0x415744.a(2, _0x4abcf6("/api/loginXydj", {
              mobile: _0x3816eb,
              code: _0x1bd2a9,
              temp_token: _0x3d5be8,
              device_id: _0x4cbd5f
            }));
          }
        }
      }, _0x25bb4c);
    }))).apply(this, arguments);
  }
  function _0x35be1c() {
    var _0x5e7bb8,
      _0x10367a,
      _0x35db34 = "function" == typeof Symbol ? Symbol : {},
      _0x270943 = _0x35db34.iterator || "@@iterator",
      _0x21da14 = _0x35db34.toStringTag || "@@toStringTag";
    function _0x3fbc50(_0x2b6484, _0x3a32dd, _0xd2c3e8, _0x4e5245) {
      var _0x3df6d1 = _0x3a32dd && _0x3a32dd.prototype instanceof _0x1bebbc ? _0x3a32dd : _0x1bebbc,
        _0x500468 = Object.create(_0x3df6d1.prototype);
      _0x1e81b7(_0x500468, "_invoke", function (_0x30a948, _0x405c69, _0x78c1e5) {
        var _0x45f510,
          _0x4ccc7b,
          _0xa00713,
          _0xca6fd2 = 0,
          _0x454ead = _0x78c1e5 || [],
          _0x1c6f09 = !1,
          _0x1e67ef = {
            p: 0,
            n: 0,
            v: _0x5e7bb8,
            a: _0x1b10ce,
            f: _0x1b10ce.bind(_0x5e7bb8, 4),
            d: function (_0x48c480, _0x26bdf0) {
              _0x45f510 = _0x48c480;
              _0x4ccc7b = 0;
              _0xa00713 = _0x5e7bb8;
              _0x1e67ef.n = _0x26bdf0;
              return _0x1d2d0a;
            }
          };
        function _0x1b10ce(_0x5efa1d, _0x24ec25) {
          for (_0x4ccc7b = _0x5efa1d, _0xa00713 = _0x24ec25, _0x10367a = 0; !_0x1c6f09 && _0xca6fd2 && !_0x498074 && _0x10367a < _0x454ead.length; _0x10367a++) {
            var _0x498074,
              _0x20f965 = _0x454ead[_0x10367a],
              _0x3e8ec5 = _0x1e67ef.p,
              _0x4576c5 = _0x20f965[2];
            _0x5efa1d > 3 ? (_0x498074 = _0x4576c5 === _0x24ec25) && (_0xa00713 = _0x20f965[(_0x4ccc7b = _0x20f965[4]) ? 5 : (_0x4ccc7b = 3, 3)], _0x20f965[4] = _0x20f965[5] = _0x5e7bb8) : _0x20f965[0] <= _0x3e8ec5 && ((_0x498074 = _0x5efa1d < 2 && _0x3e8ec5 < _0x20f965[1]) ? (_0x4ccc7b = 0, _0x1e67ef.v = _0x24ec25, _0x1e67ef.n = _0x20f965[1]) : _0x3e8ec5 < _0x4576c5 && (_0x498074 = _0x5efa1d < 3 || _0x20f965[0] > _0x24ec25 || _0x24ec25 > _0x4576c5) && (_0x20f965[4] = _0x5efa1d, _0x20f965[5] = _0x24ec25, _0x1e67ef.n = _0x4576c5, _0x4ccc7b = 0));
          }
          if (_0x498074 || _0x5efa1d > 1) {
            return _0x1d2d0a;
          }
          throw _0x1c6f09 = !0, _0x24ec25;
        }
        return function (_0x43df01, _0x119a7d, _0x3af0bc) {
          if (_0xca6fd2 > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x1c6f09 && 1 === _0x119a7d && _0x1b10ce(_0x119a7d, _0x3af0bc), _0x4ccc7b = _0x119a7d, _0xa00713 = _0x3af0bc; (_0x10367a = _0x4ccc7b < 2 ? _0x5e7bb8 : _0xa00713) || !_0x1c6f09;) {
            _0x45f510 || (_0x4ccc7b ? _0x4ccc7b < 3 ? (_0x4ccc7b > 1 && (_0x1e67ef.n = -1), _0x1b10ce(_0x4ccc7b, _0xa00713)) : _0x1e67ef.n = _0xa00713 : _0x1e67ef.v = _0xa00713);
            try {
              if (_0xca6fd2 = 2, _0x45f510) {
                if (_0x4ccc7b || (_0x43df01 = "next"), _0x10367a = _0x45f510[_0x43df01]) {
                  if (!(_0x10367a = _0x10367a.call(_0x45f510, _0xa00713))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x10367a.done) {
                    return _0x10367a;
                  }
                  _0xa00713 = _0x10367a.value;
                  _0x4ccc7b < 2 && (_0x4ccc7b = 0);
                } else {
                  1 === _0x4ccc7b && (_0x10367a = _0x45f510.return) && _0x10367a.call(_0x45f510);
                  _0x4ccc7b < 2 && (_0xa00713 = TypeError("The iterator does not provide a '" + _0x43df01 + "' method"), _0x4ccc7b = 1);
                }
                _0x45f510 = _0x5e7bb8;
              } else {
                if ((_0x10367a = (_0x1c6f09 = _0x1e67ef.n < 0) ? _0xa00713 : _0x30a948.call(_0x405c69, _0x1e67ef)) !== _0x1d2d0a) {
                  break;
                }
              }
            } catch (_0x27171a) {
              _0x45f510 = _0x5e7bb8;
              _0x4ccc7b = 1;
              _0xa00713 = _0x27171a;
            } finally {
              _0xca6fd2 = 1;
            }
          }
          var _0x1e9564 = {
            value: _0x10367a,
            done: _0x1c6f09
          };
          return _0x1e9564;
        };
      }(_0x2b6484, _0xd2c3e8, _0x4e5245), !0);
      return _0x500468;
    }
    var _0x1d2d0a = {};
    function _0x1bebbc() {}
    function _0xedffa7() {}
    function _0x4990f1() {}
    _0x10367a = Object.getPrototypeOf;
    _0x4990f1.prototype = _0x1bebbc.prototype = Object.create(_0x4a3dfd);
    var _0x4a3dfd = [][_0x270943] ? _0x10367a(_0x10367a([][_0x270943]())) : (_0x1e81b7(_0x10367a = {}, _0x270943, function () {
        return this;
      }), _0x10367a),
      _0x3acdfc = _0x4990f1.prototype;
    function _0x55c863(_0x2ce888) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x2ce888, _0x4990f1) : (_0x2ce888.__proto__ = _0x4990f1, _0x1e81b7(_0x2ce888, _0x21da14, "GeneratorFunction"));
      _0x2ce888.prototype = Object.create(_0x3acdfc);
      return _0x2ce888;
    }
    _0xedffa7.prototype = _0x4990f1;
    _0x1e81b7(_0x3acdfc, "constructor", _0x4990f1);
    _0x1e81b7(_0x4990f1, "constructor", _0xedffa7);
    _0xedffa7.displayName = "GeneratorFunction";
    _0x1e81b7(_0x4990f1, _0x21da14, "GeneratorFunction");
    _0x1e81b7(_0x3acdfc);
    _0x1e81b7(_0x3acdfc, _0x21da14, "Generator");
    _0x1e81b7(_0x3acdfc, _0x270943, function () {
      return this;
    });
    _0x1e81b7(_0x3acdfc, "toString", function () {
      return "[object Generator]";
    });
    return (_0x35be1c = function () {
      var _0x4a1532 = {
        w: _0x3fbc50,
        m: _0x55c863
      };
      return _0x4a1532;
    })();
  }
  function _0x1e81b7(_0x44abbb, _0x3965f1, _0x2d793e, _0x1e0405) {
    var _0x4f609d = Object.defineProperty;
    try {
      _0x4f609d({}, "", {});
    } catch (_0x5d6192) {
      _0x4f609d = 0;
    }
    _0x1e81b7 = function (_0x1aac4e, _0x5ee8b5, _0x1649bc, _0x16dcba) {
      function _0x2dd274(_0x35d08e, _0x595e5f) {
        _0x1e81b7(_0x1aac4e, _0x35d08e, function (_0x43d7d9) {
          return this._invoke(_0x35d08e, _0x595e5f, _0x43d7d9);
        });
      }
      var _0x43d7c1 = {
        value: _0x1649bc,
        enumerable: !_0x16dcba,
        configurable: !_0x16dcba,
        writable: !_0x16dcba
      };
      _0x5ee8b5 ? _0x4f609d ? _0x4f609d(_0x1aac4e, _0x5ee8b5, _0x43d7c1) : _0x1aac4e[_0x5ee8b5] = _0x1649bc : (_0x2dd274("next", 0), _0x2dd274("throw", 1), _0x2dd274("return", 2));
    };
    _0x1e81b7(_0x44abbb, _0x3965f1, _0x2d793e, _0x1e0405);
  }
  function _0x36419f(_0x2eb47e, _0x18f8a5, _0x1aa34f, _0x459d70, _0x3057a2, _0x19840, _0x26e646) {
    try {
      var _0xcdbfba = _0x2eb47e[_0x19840](_0x26e646),
        _0x2481c6 = _0xcdbfba.value;
    } catch (_0x306f9f) {
      return void _0x1aa34f(_0x306f9f);
    }
    _0xcdbfba.done ? _0x18f8a5(_0x2481c6) : Promise.resolve(_0x2481c6).then(_0x459d70, _0x3057a2);
  }
  function _0x36908c(_0x55e181) {
    return function () {
      var _0x4ad48c = this,
        _0x231bd4 = arguments;
      return new Promise(function (_0x3bf07e, _0x40a085) {
        var _0x3a6c34 = _0x55e181.apply(_0x4ad48c, _0x231bd4);
        function _0x1b8437(_0x3ed9ac) {
          _0x36419f(_0x3a6c34, _0x3bf07e, _0x40a085, _0x1b8437, _0x3d40d2, "next", _0x3ed9ac);
        }
        function _0x3d40d2(_0x1d9eac) {
          _0x36419f(_0x3a6c34, _0x3bf07e, _0x40a085, _0x1b8437, _0x3d40d2, "throw", _0x1d9eac);
        }
        _0x1b8437(void 0);
      });
    };
  }
  window.initSecurity = _0x525763;
  window.getSecurityHeaders = _0x2281c3;
  window.refreshSecurity = _0x53b678;
  document.addEventListener("DOMContentLoaded", function () {
    !function () {
      if ("true" === localStorage.getItem("announcementClosed")) {
        var _0x29a88c = document.getElementById("announcementBar"),
          _0x798153 = document.body;
        _0x29a88c.style.display = "none";
        _0x798153.classList.add("announcement-hidden");
      }
    }();
  });
  window.closeAnnouncement = function () {
    var _0x73df5f = document.getElementById("announcementBar"),
      _0x13dca6 = document.body;
    _0x73df5f.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    _0x73df5f.style.transform = "translateY(-100%)";
    _0x73df5f.style.opacity = "0";
    _0x13dca6.classList.add("announcement-hidden");
    setTimeout(function () {
      _0x73df5f.style.display = "none";
    }, 300);
    localStorage.setItem("announcementClosed", "true");
  };
  window.showAnnouncement = _0x3303de;
  window.resetAnnouncementStatus = function () {
    localStorage.removeItem("announcementClosed");
    location.reload();
  };
  document.addEventListener("DOMContentLoaded", function () {
    var _0x12e2a3 = localStorage.getItem("theme"),
      _0x511a18 = window.matchMedia("(prefers-color-scheme: dark)").matches;
    ("dark" === _0x12e2a3 || !_0x12e2a3 && _0x511a18) && (document.body.classList.add("dark-mode"), _0x582ed1(!0));
  });
  window.toggleTheme = function () {
    var _0x404320 = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", _0x404320 ? "dark" : "light");
    _0x582ed1(_0x404320);
  };
  var _0x8c655a = 0,
    _0x120b69 = null;
  function _0x100d05() {
    return (_0x100d05 = _0x36908c(_0x35be1c().m(function _0x32d29a() {
      var _0x393671;
      return _0x35be1c().w(function (_0x2cde07) {
        for (;;) {
          switch (_0x2cde07.p = _0x2cde07.n) {
            case 0:
              if ((_0x393671 = document.getElementById("mobileInput").value.trim()) && 11 === _0x393671.length) {
                _0x2cde07.n = 1;
                break;
              }
              _0x70f681("INVALID NUMBER");
              return _0x2cde07.a(2);
            case 1:
              _0x2cde07.p = 1;
              _0x2cde07.n = 2;
              return _0x518ab3(_0x393671);
            case 2:
              _0x29281c("CODE SENT");
              _0x15ffa4();
              _0x2cde07.n = 4;
              break;
            case 3:
              _0x2cde07.p = 3;
              _0x70f681(_0x2cde07.v.message || "SEND FAILED");
            case 4:
              return _0x2cde07.a(2);
          }
        }
      }, _0x32d29a, null, [[1, 3]]);
    }))).apply(this, arguments);
  }
  function _0x15ffa4() {
    _0x8c655a = 60;
    var _0x3a08c8 = document.getElementById("sendCodeBtn"),
      _0x2aca87 = document.getElementById("sendCodeText");
    _0x3a08c8.disabled = !0;
    _0x120b69 = setInterval(function () {
      _0x8c655a--;
      _0x2aca87.textContent = "".concat(_0x8c655a, "s");
      _0x8c655a <= 0 && (clearInterval(_0x120b69), _0x3a08c8.disabled = !1, _0x2aca87.textContent = "SEND");
    }, 1000);
  }
  function _0x289768() {
    return (_0x289768 = _0x36908c(_0x35be1c().m(function _0x4f951f() {
      var _0x465c87, _0x3ecdc6, _0x45625a, _0x57ce35;
      return _0x35be1c().w(function (_0x5029ab) {
        for (;;) {
          switch (_0x5029ab.p = _0x5029ab.n) {
            case 0:
              if (_0x465c87 = document.getElementById("mobileInput").value, _0x3ecdc6 = document.getElementById("codeInput").value, _0x465c87 && _0x3ecdc6) {
                _0x5029ab.n = 1;
                break;
              }
              _0x70f681("MISSING INPUT");
              return _0x5029ab.a(2);
            case 1:
              _0x5029ab.p = 1;
              _0x5029ab.n = 2;
              return _0x265ff4(_0x465c87, _0x3ecdc6);
            case 2:
              _0x45625a = _0x5029ab.v;
              _0x5029ab.n = 3;
              return _0x45625a.json();
            case 3:
              if (0 !== (_0x57ce35 = _0x5029ab.v).code || !_0x57ce35.data) {
                _0x5029ab.n = 4;
                break;
              }
              _0x1a7d2d(_0x57ce35.data.token_data.original_token, _0x57ce35.data.token_data.encoded_token, _0x57ce35.data.token_data.mobile, _0x57ce35.data.token_data.userid);
              _0x5029ab.n = 5;
              break;
            case 4:
              throw new Error("LOGIN FAILED");
            case 5:
              _0x5029ab.n = 7;
              break;
            case 6:
              _0x5029ab.p = 6;
              _0x70f681(_0x5029ab.v.message);
            case 7:
              return _0x5029ab.a(2);
          }
        }
      }, _0x4f951f, null, [[1, 6]]);
    }))).apply(this, arguments);
  }
  function _0x1a7d2d(_0x31adf2, _0x4a8c72, _0x5376d4, _0x19bba2) {
    document.getElementById("tokenResult").innerHTML = "\n        <div><strong>UID:</strong> ".concat(_0x19bba2, "</div>\n        <div style=\"margin-top:10px\"><strong>TOKEN:</strong><br>").concat(_0x31adf2, "</div>\n        <div style=\"margin-top:10px\"><strong>DATA:</strong><br>").concat(_0x4a8c72, "</div>\n    ");
    _0x3d2846();
    window.originalToken = _0x31adf2;
    window.encodedToken = _0x4a8c72;
  }
  function _0x13ae6e() {
    var _0x3cb76e,
      _0x5de2a8,
      _0x796cc4 = "function" == typeof Symbol ? Symbol : {},
      _0x435223 = _0x796cc4.iterator || "@@iterator",
      _0x19cf9d = _0x796cc4.toStringTag || "@@toStringTag";
    function _0x3fc772(_0x109e42, _0x105a1b, _0x1b09f7, _0x1172c8) {
      var _0x1e3852 = _0x105a1b && _0x105a1b.prototype instanceof _0x55c2a2 ? _0x105a1b : _0x55c2a2,
        _0x2df60e = Object.create(_0x1e3852.prototype);
      _0x4b1b76(_0x2df60e, "_invoke", function (_0x4391f0, _0x5c12d2, _0x262449) {
        var _0x5399a7,
          _0x53a263,
          _0x4a5dea,
          _0x335272 = 0,
          _0x47ae6b = _0x262449 || [],
          _0x35a832 = !1,
          _0x1b0e0b = {
            p: 0,
            n: 0,
            v: _0x3cb76e,
            a: _0x1aa706,
            f: _0x1aa706.bind(_0x3cb76e, 4),
            d: function (_0x18f45d, _0x2e9df4) {
              _0x5399a7 = _0x18f45d;
              _0x53a263 = 0;
              _0x4a5dea = _0x3cb76e;
              _0x1b0e0b.n = _0x2e9df4;
              return _0x2d97fb;
            }
          };
        function _0x1aa706(_0x84d199, _0x3ba4ac) {
          for (_0x53a263 = _0x84d199, _0x4a5dea = _0x3ba4ac, _0x5de2a8 = 0; !_0x35a832 && _0x335272 && !_0x3ec003 && _0x5de2a8 < _0x47ae6b.length; _0x5de2a8++) {
            var _0x3ec003,
              _0x5ce511 = _0x47ae6b[_0x5de2a8],
              _0x10833d = _0x1b0e0b.p,
              _0x148ae3 = _0x5ce511[2];
            _0x84d199 > 3 ? (_0x3ec003 = _0x148ae3 === _0x3ba4ac) && (_0x4a5dea = _0x5ce511[(_0x53a263 = _0x5ce511[4]) ? 5 : (_0x53a263 = 3, 3)], _0x5ce511[4] = _0x5ce511[5] = _0x3cb76e) : _0x5ce511[0] <= _0x10833d && ((_0x3ec003 = _0x84d199 < 2 && _0x10833d < _0x5ce511[1]) ? (_0x53a263 = 0, _0x1b0e0b.v = _0x3ba4ac, _0x1b0e0b.n = _0x5ce511[1]) : _0x10833d < _0x148ae3 && (_0x3ec003 = _0x84d199 < 3 || _0x5ce511[0] > _0x3ba4ac || _0x3ba4ac > _0x148ae3) && (_0x5ce511[4] = _0x84d199, _0x5ce511[5] = _0x3ba4ac, _0x1b0e0b.n = _0x148ae3, _0x53a263 = 0));
          }
          if (_0x3ec003 || _0x84d199 > 1) {
            return _0x2d97fb;
          }
          throw _0x35a832 = !0, _0x3ba4ac;
        }
        return function (_0x43c3cc, _0x2dfea5, _0x4cd7db) {
          if (_0x335272 > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x35a832 && 1 === _0x2dfea5 && _0x1aa706(_0x2dfea5, _0x4cd7db), _0x53a263 = _0x2dfea5, _0x4a5dea = _0x4cd7db; (_0x5de2a8 = _0x53a263 < 2 ? _0x3cb76e : _0x4a5dea) || !_0x35a832;) {
            _0x5399a7 || (_0x53a263 ? _0x53a263 < 3 ? (_0x53a263 > 1 && (_0x1b0e0b.n = -1), _0x1aa706(_0x53a263, _0x4a5dea)) : _0x1b0e0b.n = _0x4a5dea : _0x1b0e0b.v = _0x4a5dea);
            try {
              if (_0x335272 = 2, _0x5399a7) {
                if (_0x53a263 || (_0x43c3cc = "next"), _0x5de2a8 = _0x5399a7[_0x43c3cc]) {
                  if (!(_0x5de2a8 = _0x5de2a8.call(_0x5399a7, _0x4a5dea))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x5de2a8.done) {
                    return _0x5de2a8;
                  }
                  _0x4a5dea = _0x5de2a8.value;
                  _0x53a263 < 2 && (_0x53a263 = 0);
                } else {
                  1 === _0x53a263 && (_0x5de2a8 = _0x5399a7.return) && _0x5de2a8.call(_0x5399a7);
                  _0x53a263 < 2 && (_0x4a5dea = TypeError("The iterator does not provide a '" + _0x43c3cc + "' method"), _0x53a263 = 1);
                }
                _0x5399a7 = _0x3cb76e;
              } else {
                if ((_0x5de2a8 = (_0x35a832 = _0x1b0e0b.n < 0) ? _0x4a5dea : _0x4391f0.call(_0x5c12d2, _0x1b0e0b)) !== _0x2d97fb) {
                  break;
                }
              }
            } catch (_0x466590) {
              _0x5399a7 = _0x3cb76e;
              _0x53a263 = 1;
              _0x4a5dea = _0x466590;
            } finally {
              _0x335272 = 1;
            }
          }
          var _0x12c856 = {
            value: _0x5de2a8,
            done: _0x35a832
          };
          return _0x12c856;
        };
      }(_0x109e42, _0x1b09f7, _0x1172c8), !0);
      return _0x2df60e;
    }
    var _0x2d97fb = {};
    function _0x55c2a2() {}
    function _0x18e7d1() {}
    function _0x43f209() {}
    _0x5de2a8 = Object.getPrototypeOf;
    _0x43f209.prototype = _0x55c2a2.prototype = Object.create(_0x5ba8b9);
    var _0x5ba8b9 = [][_0x435223] ? _0x5de2a8(_0x5de2a8([][_0x435223]())) : (_0x4b1b76(_0x5de2a8 = {}, _0x435223, function () {
        return this;
      }), _0x5de2a8),
      _0x1e0f1c = _0x43f209.prototype;
    function _0x151d98(_0x2092c4) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x2092c4, _0x43f209) : (_0x2092c4.__proto__ = _0x43f209, _0x4b1b76(_0x2092c4, _0x19cf9d, "GeneratorFunction"));
      _0x2092c4.prototype = Object.create(_0x1e0f1c);
      return _0x2092c4;
    }
    _0x18e7d1.prototype = _0x43f209;
    _0x4b1b76(_0x1e0f1c, "constructor", _0x43f209);
    _0x4b1b76(_0x43f209, "constructor", _0x18e7d1);
    _0x18e7d1.displayName = "GeneratorFunction";
    _0x4b1b76(_0x43f209, _0x19cf9d, "GeneratorFunction");
    _0x4b1b76(_0x1e0f1c);
    _0x4b1b76(_0x1e0f1c, _0x19cf9d, "Generator");
    _0x4b1b76(_0x1e0f1c, _0x435223, function () {
      return this;
    });
    _0x4b1b76(_0x1e0f1c, "toString", function () {
      return "[object Generator]";
    });
    return (_0x13ae6e = function () {
      var _0x107ae4 = {
        w: _0x3fc772,
        m: _0x151d98
      };
      return _0x107ae4;
    })();
  }
  function _0x4b1b76(_0x272dac, _0x407f2e, _0x3f9765, _0xb3a6cb) {
    var _0x2106c0 = Object.defineProperty;
    try {
      _0x2106c0({}, "", {});
    } catch (_0x379020) {
      _0x2106c0 = 0;
    }
    _0x4b1b76 = function (_0x3b1786, _0x5927e5, _0x44a748, _0x3f6ef1) {
      function _0x5a8f8d(_0x118495, _0x4c914d) {
        _0x4b1b76(_0x3b1786, _0x118495, function (_0x1e8332) {
          return this._invoke(_0x118495, _0x4c914d, _0x1e8332);
        });
      }
      var _0x6ae274 = {
        value: _0x44a748,
        enumerable: !_0x3f6ef1,
        configurable: !_0x3f6ef1,
        writable: !_0x3f6ef1
      };
      _0x5927e5 ? _0x2106c0 ? _0x2106c0(_0x3b1786, _0x5927e5, _0x6ae274) : _0x3b1786[_0x5927e5] = _0x44a748 : (_0x5a8f8d("next", 0), _0x5a8f8d("throw", 1), _0x5a8f8d("return", 2));
    };
    _0x4b1b76(_0x272dac, _0x407f2e, _0x3f9765, _0xb3a6cb);
  }
  function _0x241693(_0x28903f, _0x3469f4, _0x2c324b, _0x548123, _0x298557, _0x1f7c93, _0x29adf6) {
    try {
      var _0x4b0bc5 = _0x28903f[_0x1f7c93](_0x29adf6),
        _0x2d432e = _0x4b0bc5.value;
    } catch (_0x2bc66f) {
      return void _0x2c324b(_0x2bc66f);
    }
    _0x4b0bc5.done ? _0x3469f4(_0x2d432e) : Promise.resolve(_0x2d432e).then(_0x548123, _0x298557);
  }
  function _0x1b79a2(_0x57a726) {
    return function () {
      var _0x22cb67 = this,
        _0x292757 = arguments;
      return new Promise(function (_0x13dd88, _0x5e543b) {
        var _0x584d3b = _0x57a726.apply(_0x22cb67, _0x292757);
        function _0x411b59(_0x4921a8) {
          _0x241693(_0x584d3b, _0x13dd88, _0x5e543b, _0x411b59, _0x271a71, "next", _0x4921a8);
        }
        function _0x271a71(_0x20e791) {
          _0x241693(_0x584d3b, _0x13dd88, _0x5e543b, _0x411b59, _0x271a71, "throw", _0x20e791);
        }
        _0x411b59(void 0);
      });
    };
  }
  window.sendKugouCode = function () {
    return _0x100d05.apply(this, arguments);
  };
  window.loginKugou = function () {
    return _0x289768.apply(this, arguments);
  };
  var _0x55a6e2 = 0,
    _0x2b79d1 = null;
  function _0x277091() {
    return (_0x277091 = _0x1b79a2(_0x13ae6e().m(function _0x43ca3b() {
      var _0xe2e51b, _0x23cf82, _0x430f60;
      return _0x13ae6e().w(function (_0x4dec71) {
        for (;;) {
          switch (_0x4dec71.p = _0x4dec71.n) {
            case 0:
              if ((_0xe2e51b = document.getElementById("xydjMobileInput").value.trim()) && 11 === _0xe2e51b.length) {
                _0x4dec71.n = 1;
                break;
              }
              _0x70f681("无效的手机号 INVALID NUMBER");
              return _0x4dec71.a(2);
            case 1:
              _0x4dec71.p = 1;
              _0x4dec71.n = 2;
              return _0x15fbdb(_0xe2e51b);
            case 2:
              _0x23cf82 = _0x4dec71.v;
              _0x4dec71.n = 3;
              return _0x23cf82.json();
            case 3:
              if (0 !== (_0x430f60 = _0x4dec71.v).code || !_0x430f60.data) {
                _0x4dec71.n = 4;
                break;
              }
              _0x29281c("验证码已发送 CODE SENT");
              document.getElementById("xydjTempToken").value = _0x430f60.data.temp_token;
              document.getElementById("xydjDeviceId").value = _0x430f60.data.device_id;
              _0x5c1d67();
              _0x4dec71.n = 5;
              break;
            case 4:
              throw new Error(_0x430f60.error || "获取失败 FAILED");
            case 5:
              _0x4dec71.n = 7;
              break;
            case 6:
              _0x4dec71.p = 6;
              _0x70f681(_0x4dec71.v.message || "网络错误 NETWORK ERROR");
            case 7:
              return _0x4dec71.a(2);
          }
        }
      }, _0x43ca3b, null, [[1, 6]]);
    }))).apply(this, arguments);
  }
  function _0x5c1d67() {
    _0x55a6e2 = 60;
    var _0x15dab0 = document.getElementById("xydjSendCodeBtn"),
      _0x1ba764 = document.getElementById("xydjSendCodeText");
    _0x15dab0.disabled = !0;
    _0x2b79d1 = setInterval(function () {
      _0x55a6e2--;
      _0x1ba764.textContent = "".concat(_0x55a6e2, "s");
      _0x55a6e2 <= 0 && (clearInterval(_0x2b79d1), _0x15dab0.disabled = !1, _0x1ba764.textContent = "发送 SEND");
    }, 1000);
  }
  function _0x4ce72e() {
    return (_0x4ce72e = _0x1b79a2(_0x13ae6e().m(function _0x3803ba() {
      var _0x654bce, _0x47dcc6, _0x15d90b, _0x5a984f, _0x5f3261, _0x430186;
      return _0x13ae6e().w(function (_0x625f5a) {
        for (;;) {
          switch (_0x625f5a.p = _0x625f5a.n) {
            case 0:
              if (_0x654bce = document.getElementById("xydjMobileInput").value.trim(), _0x47dcc6 = document.getElementById("xydjCodeInput").value.trim(), _0x15d90b = document.getElementById("xydjTempToken").value.trim(), _0x5a984f = document.getElementById("xydjDeviceId").value.trim(), _0x654bce && _0x47dcc6) {
                _0x625f5a.n = 1;
                break;
              }
              _0x70f681("请输入完整信息 MISSING INPUT");
              return _0x625f5a.a(2);
            case 1:
              if (_0x15d90b && _0x5a984f) {
                _0x625f5a.n = 2;
                break;
              }
              _0x70f681("请先获取验证码 GET CODE FIRST");
              return _0x625f5a.a(2);
            case 2:
              _0x625f5a.p = 2;
              _0x625f5a.n = 3;
              return _0x2bee92(_0x654bce, _0x47dcc6, _0x15d90b, _0x5a984f);
            case 3:
              _0x5f3261 = _0x625f5a.v;
              _0x625f5a.n = 4;
              return _0x5f3261.json();
            case 4:
              if (0 !== (_0x430186 = _0x625f5a.v).code || !_0x430186.data) {
                _0x625f5a.n = 5;
                break;
              }
              _0x35c864(_0x430186.data.token_data.original_token, _0x430186.data.token_data.encoded_token, _0x430186.data.token_data.mobile, _0x430186.data.token_data.userid);
              _0x625f5a.n = 6;
              break;
            case 5:
              throw new Error(_0x430186.error || "登录失败 LOGIN FAILED");
            case 6:
              _0x625f5a.n = 8;
              break;
            case 7:
              _0x625f5a.p = 7;
              _0x70f681(_0x625f5a.v.message || "登录异常 LOGIN ERROR");
            case 8:
              return _0x625f5a.a(2);
          }
        }
      }, _0x3803ba, null, [[2, 7]]);
    }))).apply(this, arguments);
  }
  function _0x35c864(_0x5f3afa, _0x5ef03b, _0x776b45, _0x3bfca0) {
    document.getElementById("tokenResult").innerHTML = "\n        <div><strong>UID:</strong> ".concat(_0x3bfca0, "</div>\n        <div style=\"margin-top:10px\"><strong>TOKEN:</strong><br>").concat(_0x5f3afa, "</div>\n    ");
    _0x3d2846();
    window.originalToken = _0x5f3afa;
    window.encodedToken = _0x5ef03b;
  }
  window.sendXydjCode = function () {
    return _0x277091.apply(this, arguments);
  };
  window.loginXydj = function () {
    return _0x4ce72e.apply(this, arguments);
  };
  var _0xcb93de = !1;
  function _0x3d2846() {
    var _0x3d7280 = document.getElementById("scanCard"),
      _0x499bda = document.getElementById("tokenCard");
    _0x3d7280 && _0x499bda && (_0x3d7280.classList.add("hidden"), _0x499bda.classList.remove("hidden"));
  }
  function _0x33cf81() {
    var _0x522438 = document.getElementById("scanCard"),
      _0x7228e = document.getElementById("tokenCard");
    _0x522438 && _0x7228e && (_0x7228e.classList.add("hidden"), _0x522438.classList.remove("hidden"));
  }
  function _0x381ac3() {
    var _0x193d86,
      _0x5626b6,
      _0x317553 = "function" == typeof Symbol ? Symbol : {},
      _0xf2fab2 = _0x317553.iterator || "@@iterator",
      _0x5527f4 = _0x317553.toStringTag || "@@toStringTag";
    function _0x43af43(_0x4c7d95, _0x44f3c6, _0x359d53, _0x407d21) {
      var _0x49b958 = _0x44f3c6 && _0x44f3c6.prototype instanceof _0x24763b ? _0x44f3c6 : _0x24763b,
        _0x5ef605 = Object.create(_0x49b958.prototype);
      _0x1e90de(_0x5ef605, "_invoke", function (_0x44a483, _0x809410, _0x3ea768) {
        var _0x232316,
          _0x246b60,
          _0x65456,
          _0x1b19c8 = 0,
          _0x2870a1 = _0x3ea768 || [],
          _0x4d6d7d = !1,
          _0x141263 = {
            p: 0,
            n: 0,
            v: _0x193d86,
            a: _0x330531,
            f: _0x330531.bind(_0x193d86, 4),
            d: function (_0x47c1c4, _0x59f976) {
              _0x232316 = _0x47c1c4;
              _0x246b60 = 0;
              _0x65456 = _0x193d86;
              _0x141263.n = _0x59f976;
              return _0x47cb1c;
            }
          };
        function _0x330531(_0x53c289, _0x5dd100) {
          for (_0x246b60 = _0x53c289, _0x65456 = _0x5dd100, _0x5626b6 = 0; !_0x4d6d7d && _0x1b19c8 && !_0x33eb33 && _0x5626b6 < _0x2870a1.length; _0x5626b6++) {
            var _0x33eb33,
              _0x5185e4 = _0x2870a1[_0x5626b6],
              _0x33c6b7 = _0x141263.p,
              _0x428c7d = _0x5185e4[2];
            _0x53c289 > 3 ? (_0x33eb33 = _0x428c7d === _0x5dd100) && (_0x65456 = _0x5185e4[(_0x246b60 = _0x5185e4[4]) ? 5 : (_0x246b60 = 3, 3)], _0x5185e4[4] = _0x5185e4[5] = _0x193d86) : _0x5185e4[0] <= _0x33c6b7 && ((_0x33eb33 = _0x53c289 < 2 && _0x33c6b7 < _0x5185e4[1]) ? (_0x246b60 = 0, _0x141263.v = _0x5dd100, _0x141263.n = _0x5185e4[1]) : _0x33c6b7 < _0x428c7d && (_0x33eb33 = _0x53c289 < 3 || _0x5185e4[0] > _0x5dd100 || _0x5dd100 > _0x428c7d) && (_0x5185e4[4] = _0x53c289, _0x5185e4[5] = _0x5dd100, _0x141263.n = _0x428c7d, _0x246b60 = 0));
          }
          if (_0x33eb33 || _0x53c289 > 1) {
            return _0x47cb1c;
          }
          throw _0x4d6d7d = !0, _0x5dd100;
        }
        return function (_0xff4edf, _0x2cc4f5, _0x879136) {
          if (_0x1b19c8 > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x4d6d7d && 1 === _0x2cc4f5 && _0x330531(_0x2cc4f5, _0x879136), _0x246b60 = _0x2cc4f5, _0x65456 = _0x879136; (_0x5626b6 = _0x246b60 < 2 ? _0x193d86 : _0x65456) || !_0x4d6d7d;) {
            _0x232316 || (_0x246b60 ? _0x246b60 < 3 ? (_0x246b60 > 1 && (_0x141263.n = -1), _0x330531(_0x246b60, _0x65456)) : _0x141263.n = _0x65456 : _0x141263.v = _0x65456);
            try {
              if (_0x1b19c8 = 2, _0x232316) {
                if (_0x246b60 || (_0xff4edf = "next"), _0x5626b6 = _0x232316[_0xff4edf]) {
                  if (!(_0x5626b6 = _0x5626b6.call(_0x232316, _0x65456))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x5626b6.done) {
                    return _0x5626b6;
                  }
                  _0x65456 = _0x5626b6.value;
                  _0x246b60 < 2 && (_0x246b60 = 0);
                } else {
                  1 === _0x246b60 && (_0x5626b6 = _0x232316.return) && _0x5626b6.call(_0x232316);
                  _0x246b60 < 2 && (_0x65456 = TypeError("The iterator does not provide a '" + _0xff4edf + "' method"), _0x246b60 = 1);
                }
                _0x232316 = _0x193d86;
              } else {
                if ((_0x5626b6 = (_0x4d6d7d = _0x141263.n < 0) ? _0x65456 : _0x44a483.call(_0x809410, _0x141263)) !== _0x47cb1c) {
                  break;
                }
              }
            } catch (_0x17e3f8) {
              _0x232316 = _0x193d86;
              _0x246b60 = 1;
              _0x65456 = _0x17e3f8;
            } finally {
              _0x1b19c8 = 1;
            }
          }
          var _0x187f94 = {
            value: _0x5626b6,
            done: _0x4d6d7d
          };
          return _0x187f94;
        };
      }(_0x4c7d95, _0x359d53, _0x407d21), !0);
      return _0x5ef605;
    }
    var _0x47cb1c = {};
    function _0x24763b() {}
    function _0xda84cf() {}
    function _0x54f31d() {}
    _0x5626b6 = Object.getPrototypeOf;
    _0x54f31d.prototype = _0x24763b.prototype = Object.create(_0x5a986a);
    var _0x5a986a = [][_0xf2fab2] ? _0x5626b6(_0x5626b6([][_0xf2fab2]())) : (_0x1e90de(_0x5626b6 = {}, _0xf2fab2, function () {
        return this;
      }), _0x5626b6),
      _0x4f1d9b = _0x54f31d.prototype;
    function _0x539b68(_0x42766e) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x42766e, _0x54f31d) : (_0x42766e.__proto__ = _0x54f31d, _0x1e90de(_0x42766e, _0x5527f4, "GeneratorFunction"));
      _0x42766e.prototype = Object.create(_0x4f1d9b);
      return _0x42766e;
    }
    _0xda84cf.prototype = _0x54f31d;
    _0x1e90de(_0x4f1d9b, "constructor", _0x54f31d);
    _0x1e90de(_0x54f31d, "constructor", _0xda84cf);
    _0xda84cf.displayName = "GeneratorFunction";
    _0x1e90de(_0x54f31d, _0x5527f4, "GeneratorFunction");
    _0x1e90de(_0x4f1d9b);
    _0x1e90de(_0x4f1d9b, _0x5527f4, "Generator");
    _0x1e90de(_0x4f1d9b, _0xf2fab2, function () {
      return this;
    });
    _0x1e90de(_0x4f1d9b, "toString", function () {
      return "[object Generator]";
    });
    return (_0x381ac3 = function () {
      var _0x3f2b1d = {
        w: _0x43af43,
        m: _0x539b68
      };
      return _0x3f2b1d;
    })();
  }
  function _0x1e90de(_0x1df413, _0x220012, _0x2b283e, _0x51b60a) {
    var _0x3487c = Object.defineProperty;
    try {
      _0x3487c({}, "", {});
    } catch (_0x30ccf7) {
      _0x3487c = 0;
    }
    _0x1e90de = function (_0x2f4563, _0x558108, _0x8637df, _0x4f3963) {
      function _0x2dd524(_0x29ac26, _0x544efc) {
        _0x1e90de(_0x2f4563, _0x29ac26, function (_0xbd528c) {
          return this._invoke(_0x29ac26, _0x544efc, _0xbd528c);
        });
      }
      var _0x321f51 = {
        value: _0x8637df,
        enumerable: !_0x4f3963,
        configurable: !_0x4f3963,
        writable: !_0x4f3963
      };
      _0x558108 ? _0x3487c ? _0x3487c(_0x2f4563, _0x558108, _0x321f51) : _0x2f4563[_0x558108] = _0x8637df : (_0x2dd524("next", 0), _0x2dd524("throw", 1), _0x2dd524("return", 2));
    };
    _0x1e90de(_0x1df413, _0x220012, _0x2b283e, _0x51b60a);
  }
  function _0x33b263(_0x86a364, _0x49bdc0, _0x5c3bd6, _0x5c6d87, _0x196c25, _0x4c67f8, _0x25a64e) {
    try {
      var _0x568b01 = _0x86a364[_0x4c67f8](_0x25a64e),
        _0x48999e = _0x568b01.value;
    } catch (_0xf8deae) {
      return void _0x5c3bd6(_0xf8deae);
    }
    _0x568b01.done ? _0x49bdc0(_0x48999e) : Promise.resolve(_0x48999e).then(_0x5c6d87, _0x196c25);
  }
  function _0x22c4ce(_0x100ac9) {
    return function () {
      var _0x3545f4 = this,
        _0x58ec0b = arguments;
      return new Promise(function (_0x2cdcb8, _0x3e85d6) {
        var _0x558fb9 = _0x100ac9.apply(_0x3545f4, _0x58ec0b);
        function _0x2c9640(_0x244082) {
          _0x33b263(_0x558fb9, _0x2cdcb8, _0x3e85d6, _0x2c9640, _0x330b86, "next", _0x244082);
        }
        function _0x330b86(_0x1183f8) {
          _0x33b263(_0x558fb9, _0x2cdcb8, _0x3e85d6, _0x2c9640, _0x330b86, "throw", _0x1183f8);
        }
        _0x2c9640(void 0);
      });
    };
  }
  window.selectProject = function (_0x40c500) {
    if (!_0xcb93de) {
      _0xcb93de = !0;
      window.currentApp = _0x40c500;
      (function (_0x73abc0) {
        var _0x2f0c8e = document.getElementById("currentProjectName"),
          _0x24eea5 = document.getElementById("currentProjectDesc"),
          _0x54a291 = _0x3593f7[_0x73abc0];
        _0x2f0c8e && (_0x2f0c8e.textContent = _0x54a291 ? _0x54a291.name : _0x73abc0.toUpperCase());
        _0x24eea5 && (_0x24eea5.innerHTML = "kugou" === _0x73abc0 || "xydj" === _0x73abc0 ? "MODE: <span style=\"color:var(--c-primary)\">VERIFICATION</span>" : "MODE: <span style=\"color:var(--c-secondary)\">QR SCAN</span>");
      })(_0x40c500);
      var _0xd19f98 = document.getElementById("projectSelection"),
        _0x2c5164 = document.getElementById("scanningInterface");
      _0xd19f98.classList.add("slide-out");
      _0xd19f98.classList.remove("active");
      setTimeout(function () {
        _0x2c5164.classList.add("active");
        "kugou" === _0x40c500 ? function () {
          var _0xeedab7 = document.getElementById("qrWrapper");
          _0xeedab7 && (_0xeedab7.style.display = "none");
          var _0x46f541 = document.getElementById("kugouLoginForm");
          _0x46f541 && _0x46f541.classList.remove("hidden");
          _0x33cf81();
          document.getElementById("mobileInput").value = "";
          document.getElementById("codeInput").value = "";
          var _0x5c4133 = document.getElementById("sendCodeBtn");
          _0x5c4133 && (_0x5c4133.disabled = !1, document.getElementById("sendCodeText").textContent = "SEND");
        }() : "xydj" === _0x40c500 ? function () {
          var _0x555693 = document.getElementById("qrWrapper");
          _0x555693 && (_0x555693.style.display = "none");
          var _0x55c512 = document.getElementById("kugouLoginForm");
          _0x55c512 && _0x55c512.classList.add("hidden");
          var _0x4f8411 = document.getElementById("xydjLoginForm");
          _0x4f8411 && _0x4f8411.classList.remove("hidden");
          _0x33cf81();
          document.getElementById("xydjMobileInput").value = "";
          document.getElementById("xydjCodeInput").value = "";
          document.getElementById("xydjTempToken").value = "";
          document.getElementById("xydjDeviceId").value = "";
          var _0x373a0e = document.getElementById("xydjSendCodeBtn");
          _0x373a0e && (_0x373a0e.disabled = !1, document.getElementById("xydjSendCodeText").textContent = "发送 SEND");
        }() : _0x358045();
        setTimeout(function () {
          _0xcb93de = !1;
        }, 600);
      }, 300);
    }
  };
  window.backToSelection = function () {
    if (!_0xcb93de) {
      _0xcb93de = !0;
      (function () {
        window.clearCheckInterval && window.clearCheckInterval();
        _0x48afec();
        _0x120b69 && clearInterval(_0x120b69);
        _0x2b79d1 && clearInterval(_0x2b79d1);
        var _0x12bf35 = document.getElementById("kugouLoginForm");
        _0x12bf35 && _0x12bf35.classList.add("hidden");
        var _0x39b7a3 = document.getElementById("xydjLoginForm");
        _0x39b7a3 && _0x39b7a3.classList.add("hidden");
        var _0x27af0b = document.getElementById("qrWrapper");
        _0x27af0b && (_0x27af0b.style.display = "flex");
        window.originalToken = null;
        window.encodedToken = null;
      })();
      var _0xc8c566 = document.getElementById("projectSelection");
      document.getElementById("scanningInterface").classList.remove("active");
      setTimeout(function () {
        _0xc8c566.classList.remove("slide-out");
        _0xc8c566.classList.add("active");
        setTimeout(function () {
          _0xcb93de = !1;
        }, 600);
      }, 300);
    }
  };
  window.showTokenCard = _0x3d2846;
  window.hideTokenCard = _0x33cf81;
  var _0x59aa78,
    _0x490db9 = null,
    _0x6e4096 = null,
    _0x5b1ada = null;
  function _0x358045() {
    return _0x40e72c.apply(this, arguments);
  }
  function _0x40e72c() {
    return (_0x40e72c = _0x22c4ce(_0x381ac3().m(function _0x32e67c() {
      var _0x1d3515, _0x1c718d, _0x3e1d74, _0x343d19, _0xfad2e3, _0x554d2b, _0x28454d;
      return _0x381ac3().w(function (_0x10b92a) {
        for (;;) {
          switch (_0x10b92a.p = _0x10b92a.n) {
            case 0:
              _0x1d3515 = window.currentApp || "sf";
              window.encodedToken = null;
              _0x490db9 = null;
              _0x33cf81();
              (_0x1c718d = document.getElementById("kugouLoginForm")) && _0x1c718d.classList.add("hidden");
              (_0x3e1d74 = document.getElementById("qrWrapper")) && (_0x3e1d74.style.display = "flex");
              (_0x343d19 = document.getElementById("refreshButton")) && _0x343d19.classList.add("hidden");
              _0x14fcb6();
              _0x541eed();
              _0x10b92a.p = 1;
              _0x10b92a.n = 2;
              return _0x4201fc(_0x1d3515);
            case 2:
              if ((_0xfad2e3 = _0x10b92a.v).ok) {
                _0x10b92a.n = 3;
                break;
              }
              throw new Error("Network Error");
            case 3:
              _0x10b92a.n = 4;
              return _0xfad2e3.json();
            case 4:
              if (!(_0x554d2b = _0x10b92a.v).error) {
                _0x10b92a.n = 5;
                break;
              }
              throw new Error(_0x554d2b.error);
            case 5:
              _0x490db9 = _0x554d2b.data.uuid;
              _0x1f9ba1(_0x554d2b.data.img_url);
              _0x268c1b();
              _0x13e160("SCAN CODE ON MOBILE");
              _0x1682ea(30);
              _0x18be04();
              _0x10b92a.n = 7;
              break;
            case 6:
              _0x10b92a.p = 6;
              _0x28454d = _0x10b92a.v;
              _0x268c1b();
              _0x70f681(_0x28454d.message || "INIT FAILED");
              document.getElementById("refreshButton").classList.remove("hidden");
            case 7:
              return _0x10b92a.a(2);
          }
        }
      }, _0x32e67c, null, [[1, 6]]);
    }))).apply(this, arguments);
  }
  function _0x1f9ba1(_0x3fa7e0) {
    var _0x460032 = document.getElementById("qrCode"),
      _0xe33d63 = document.createElement("img");
    _0xe33d63.src = _0x3fa7e0;
    _0x460032.innerHTML = "";
    _0x460032.appendChild(_0xe33d63);
  }
  function _0x13e160(_0x5c3f8d) {
    var _0x3d69b8 = document.getElementById("status");
    _0x3d69b8 && (_0x3d69b8.textContent = _0x5c3f8d);
  }
  function _0x40e882() {
    return _0x23d864.apply(this, arguments);
  }
  function _0x23d864() {
    return (_0x23d864 = _0x22c4ce(_0x381ac3().m(function _0x1a997d() {
      var _0x2b80a4, _0x51b595, _0x21ced8, _0x179bd2, _0x50eaa5, _0x337a5c;
      return _0x381ac3().w(function (_0x182a4a) {
        for (;;) {
          switch (_0x182a4a.p = _0x182a4a.n) {
            case 0:
              if (_0x490db9) {
                _0x182a4a.n = 1;
                break;
              }
              return _0x182a4a.a(2);
            case 1:
              _0x2b80a4 = window.currentApp || "sf";
              _0x182a4a.p = 2;
              _0x182a4a.n = 3;
              return _0x3dfb4e(_0x490db9, _0x2b80a4);
            case 3:
              if ((_0x51b595 = _0x182a4a.v).ok) {
                _0x182a4a.n = 4;
                break;
              }
              return _0x182a4a.a(2);
            case 4:
              _0x182a4a.n = 5;
              return _0x51b595.json();
            case 5:
              if (0 !== (_0x21ced8 = _0x182a4a.v).code || !_0x21ced8.data || !_0x21ced8.data.code) {
                _0x182a4a.n = 8;
                break;
              }
              _0x541eed();
              _0x13e160("AUTHORIZING...");
              _0x182a4a.n = 6;
              return _0x3b2d86(_0x21ced8.data.code, _0x2b80a4);
            case 6:
              _0x179bd2 = _0x182a4a.v;
              _0x182a4a.n = 7;
              return _0x179bd2.json();
            case 7:
              (_0x50eaa5 = _0x182a4a.v).original_token ? _0x1c9af8(_0x50eaa5.original_token, _0x50eaa5.encoded_token || _0x50eaa5.original_token, _0x50eaa5.mobile || "UNKNOWN") : (_0x337a5c = _0x50eaa5.error || "AUTHORIZATION FAILED", "sf" === _0x2b80a4 && _0x252338(_0x337a5c) && _0x122c43(), _0x70f681(_0x337a5c), document.getElementById("refreshButton").classList.remove("hidden"));
              _0x182a4a.n = 9;
              break;
            case 8:
              2 === _0x21ced8.code && _0x2f1309();
            case 9:
              _0x182a4a.n = 11;
              break;
            case 10:
              _0x182a4a.p = 10;
              _0x182a4a.v;
            case 11:
              return _0x182a4a.a(2);
          }
        }
      }, _0x1a997d, null, [[2, 10]]);
    }))).apply(this, arguments);
  }
  function _0x1c9af8(_0x1c5e6f, _0x59263a, _0x599b1d) {
    var _0x5ed138 = document.getElementById("tokenResult"),
      _0x96eaaa = "<div><strong>UID:</strong> ".concat(_0x599b1d, "</div>");
    "xiaomi" === window.currentApp ? (_0x96eaaa += "<div style=\"margin-top:10px\"><strong>TOKEN (Cookie):</strong><br>".concat(_0x59263a, "</div>"), window.encodedToken = _0x59263a, window.originalToken = _0x1c5e6f) : (_0x96eaaa += "<div style=\"margin-top:10px\"><strong>CK:</strong><br>".concat(_0x1c5e6f, "</div>"), window.encodedToken = _0x59263a, window.originalToken = _0x1c5e6f);
    _0x5ed138.innerHTML = _0x96eaaa;
    _0x3d2846();
  }
  function _0x1682ea(_0x389c01) {
    var _0x378556 = _0x389c01;
    _0x5b1ada = setInterval(function () {
      --_0x378556 <= 0 ? _0x2f1309() : _0x13e160("请扫码 SCAN CODE (".concat(_0x378556, "s)"));
    }, 1000);
  }
  function _0x2f1309() {
    _0x541eed();
    _0x13e160("二维码已过期 EXPIRED");
    _0x1f9ba1("/二维码已过期.jpg");
    document.getElementById("refreshButton").classList.remove("hidden");
  }
  function _0x18be04() {
    _0x6e4096 && clearInterval(_0x6e4096);
    _0x6e4096 = setInterval(_0x40e882, 2000);
  }
  function _0x541eed() {
    _0x6e4096 && clearInterval(_0x6e4096);
    _0x5b1ada && clearInterval(_0x5b1ada);
  }
  function _0x48afec() {
    _0x33cf81();
    window.originalToken = null;
    window.encodedToken = null;
  }
  function _0x252338(_0x1efc81) {
    return ["用户权限有误", "获取微信token失败", "获取用户信息失败"].some(function (_0x530653) {
      return _0x1efc81.includes(_0x530653);
    });
  }
  function _0x122c43() {
    var _0x3fccf6 = document.getElementById("sfBindTipOverlay");
    _0x3fccf6 || ((_0x3fccf6 = document.createElement("div")).id = "sfBindTipOverlay", _0x3fccf6.className = "sf-bind-overlay", _0x3fccf6.innerHTML = "\n            <div class=\"sf-bind-dialog\">\n                <div class=\"sf-bind-header\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>\n                    <span>NOTICE</span>\n                </div>\n                <div class=\"sf-bind-body\">\n                    <p class=\"sf-bind-title\">扫码登录需要先绑定微信</p>\n                    <div class=\"sf-bind-steps\">\n                        <div class=\"sf-bind-step\"><span class=\"step-num\">1</span>打开 <strong>顺丰速运 App</strong></div>\n                        <div class=\"sf-bind-step\"><span class=\"step-num\">2</span>进入 <strong>设置 → 账号安全 → 绑定微信</strong></div>\n                        <div class=\"sf-bind-step\"><span class=\"step-num\">3</span>绑定后，通过 <strong>微信登录一次</strong> App</div>\n                        <div class=\"sf-bind-step\"><span class=\"step-num\">4</span>完成后即可使用扫码登录获取</div>\n                    </div>\n                </div>\n                <button class=\"tech-btn sf-bind-close\" onclick=\"closeSfBindTip()\">知道了 GOT IT</button>\n            </div>\n        ", document.body.appendChild(_0x3fccf6));
    _0x3fccf6.classList.add("show");
  }
  function _0x990112() {
    var _0x20ed5b,
      _0x4a40ce,
      _0x463019 = "function" == typeof Symbol ? Symbol : {},
      _0x1b4b81 = _0x463019.iterator || "@@iterator",
      _0x587856 = _0x463019.toStringTag || "@@toStringTag";
    function _0x2b263a(_0x5f496d, _0x17d070, _0x4d6503, _0x1fcb15) {
      var _0x48cd3c = _0x17d070 && _0x17d070.prototype instanceof _0x2a0a78 ? _0x17d070 : _0x2a0a78,
        _0x34be6d = Object.create(_0x48cd3c.prototype);
      _0x144d7d(_0x34be6d, "_invoke", function (_0x107181, _0x1c31bf, _0x3e691d) {
        var _0x274c04,
          _0x45a609,
          _0xe39fa9,
          _0x179e49 = 0,
          _0x1db43a = _0x3e691d || [],
          _0x8ce474 = !1,
          _0x11fc0c = {
            p: 0,
            n: 0,
            v: _0x20ed5b,
            a: _0x19e4a8,
            f: _0x19e4a8.bind(_0x20ed5b, 4),
            d: function (_0xdd2f4c, _0x15d24b) {
              _0x274c04 = _0xdd2f4c;
              _0x45a609 = 0;
              _0xe39fa9 = _0x20ed5b;
              _0x11fc0c.n = _0x15d24b;
              return _0x5ed75f;
            }
          };
        function _0x19e4a8(_0x55ca69, _0x3879dd) {
          for (_0x45a609 = _0x55ca69, _0xe39fa9 = _0x3879dd, _0x4a40ce = 0; !_0x8ce474 && _0x179e49 && !_0x427914 && _0x4a40ce < _0x1db43a.length; _0x4a40ce++) {
            var _0x427914,
              _0x34144e = _0x1db43a[_0x4a40ce],
              _0x510cad = _0x11fc0c.p,
              _0x36408f = _0x34144e[2];
            _0x55ca69 > 3 ? (_0x427914 = _0x36408f === _0x3879dd) && (_0xe39fa9 = _0x34144e[(_0x45a609 = _0x34144e[4]) ? 5 : (_0x45a609 = 3, 3)], _0x34144e[4] = _0x34144e[5] = _0x20ed5b) : _0x34144e[0] <= _0x510cad && ((_0x427914 = _0x55ca69 < 2 && _0x510cad < _0x34144e[1]) ? (_0x45a609 = 0, _0x11fc0c.v = _0x3879dd, _0x11fc0c.n = _0x34144e[1]) : _0x510cad < _0x36408f && (_0x427914 = _0x55ca69 < 3 || _0x34144e[0] > _0x3879dd || _0x3879dd > _0x36408f) && (_0x34144e[4] = _0x55ca69, _0x34144e[5] = _0x3879dd, _0x11fc0c.n = _0x36408f, _0x45a609 = 0));
          }
          if (_0x427914 || _0x55ca69 > 1) {
            return _0x5ed75f;
          }
          throw _0x8ce474 = !0, _0x3879dd;
        }
        return function (_0x52ab33, _0x6dc439, _0x1ca5fb) {
          if (_0x179e49 > 1) {
            throw TypeError("Generator is already running");
          }
          for (_0x8ce474 && 1 === _0x6dc439 && _0x19e4a8(_0x6dc439, _0x1ca5fb), _0x45a609 = _0x6dc439, _0xe39fa9 = _0x1ca5fb; (_0x4a40ce = _0x45a609 < 2 ? _0x20ed5b : _0xe39fa9) || !_0x8ce474;) {
            _0x274c04 || (_0x45a609 ? _0x45a609 < 3 ? (_0x45a609 > 1 && (_0x11fc0c.n = -1), _0x19e4a8(_0x45a609, _0xe39fa9)) : _0x11fc0c.n = _0xe39fa9 : _0x11fc0c.v = _0xe39fa9);
            try {
              if (_0x179e49 = 2, _0x274c04) {
                if (_0x45a609 || (_0x52ab33 = "next"), _0x4a40ce = _0x274c04[_0x52ab33]) {
                  if (!(_0x4a40ce = _0x4a40ce.call(_0x274c04, _0xe39fa9))) {
                    throw TypeError("iterator result is not an object");
                  }
                  if (!_0x4a40ce.done) {
                    return _0x4a40ce;
                  }
                  _0xe39fa9 = _0x4a40ce.value;
                  _0x45a609 < 2 && (_0x45a609 = 0);
                } else {
                  1 === _0x45a609 && (_0x4a40ce = _0x274c04.return) && _0x4a40ce.call(_0x274c04);
                  _0x45a609 < 2 && (_0xe39fa9 = TypeError("The iterator does not provide a '" + _0x52ab33 + "' method"), _0x45a609 = 1);
                }
                _0x274c04 = _0x20ed5b;
              } else {
                if ((_0x4a40ce = (_0x8ce474 = _0x11fc0c.n < 0) ? _0xe39fa9 : _0x107181.call(_0x1c31bf, _0x11fc0c)) !== _0x5ed75f) {
                  break;
                }
              }
            } catch (_0x408cd4) {
              _0x274c04 = _0x20ed5b;
              _0x45a609 = 1;
              _0xe39fa9 = _0x408cd4;
            } finally {
              _0x179e49 = 1;
            }
          }
          var _0x240194 = {
            value: _0x4a40ce,
            done: _0x8ce474
          };
          return _0x240194;
        };
      }(_0x5f496d, _0x4d6503, _0x1fcb15), !0);
      return _0x34be6d;
    }
    var _0x5ed75f = {};
    function _0x2a0a78() {}
    function _0x20504c() {}
    function _0xc4f107() {}
    _0x4a40ce = Object.getPrototypeOf;
    _0xc4f107.prototype = _0x2a0a78.prototype = Object.create(_0x20b603);
    var _0x20b603 = [][_0x1b4b81] ? _0x4a40ce(_0x4a40ce([][_0x1b4b81]())) : (_0x144d7d(_0x4a40ce = {}, _0x1b4b81, function () {
        return this;
      }), _0x4a40ce),
      _0x311083 = _0xc4f107.prototype;
    function _0x1aea04(_0x28af8b) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x28af8b, _0xc4f107) : (_0x28af8b.__proto__ = _0xc4f107, _0x144d7d(_0x28af8b, _0x587856, "GeneratorFunction"));
      _0x28af8b.prototype = Object.create(_0x311083);
      return _0x28af8b;
    }
    _0x20504c.prototype = _0xc4f107;
    _0x144d7d(_0x311083, "constructor", _0xc4f107);
    _0x144d7d(_0xc4f107, "constructor", _0x20504c);
    _0x20504c.displayName = "GeneratorFunction";
    _0x144d7d(_0xc4f107, _0x587856, "GeneratorFunction");
    _0x144d7d(_0x311083);
    _0x144d7d(_0x311083, _0x587856, "Generator");
    _0x144d7d(_0x311083, _0x1b4b81, function () {
      return this;
    });
    _0x144d7d(_0x311083, "toString", function () {
      return "[object Generator]";
    });
    return (_0x990112 = function () {
      var _0x37497a = {
        w: _0x2b263a,
        m: _0x1aea04
      };
      return _0x37497a;
    })();
  }
  function _0x144d7d(_0x43395d, _0x4591f9, _0xb72a0b, _0x430732) {
    var _0x58c101 = Object.defineProperty;
    try {
      _0x58c101({}, "", {});
    } catch (_0x3081cb) {
      _0x58c101 = 0;
    }
    _0x144d7d = function (_0x507f89, _0x28e136, _0x36fb1d, _0x536836) {
      function _0x463bda(_0x5edc7b, _0x4591b8) {
        _0x144d7d(_0x507f89, _0x5edc7b, function (_0x1a26a9) {
          return this._invoke(_0x5edc7b, _0x4591b8, _0x1a26a9);
        });
      }
      var _0x10c936 = {
        value: _0x36fb1d,
        enumerable: !_0x536836,
        configurable: !_0x536836,
        writable: !_0x536836
      };
      _0x28e136 ? _0x58c101 ? _0x58c101(_0x507f89, _0x28e136, _0x10c936) : _0x507f89[_0x28e136] = _0x36fb1d : (_0x463bda("next", 0), _0x463bda("throw", 1), _0x463bda("return", 2));
    };
    _0x144d7d(_0x43395d, _0x4591f9, _0xb72a0b, _0x430732);
  }
  function _0x41d2f4(_0x3d77af, _0x32cdcc, _0x31b5fe, _0x1aac18, _0x45434b, _0x30f9f3, _0x5c9f93) {
    try {
      var _0x726289 = _0x3d77af[_0x30f9f3](_0x5c9f93),
        _0x3878de = _0x726289.value;
    } catch (_0x170cb4) {
      return void _0x31b5fe(_0x170cb4);
    }
    _0x726289.done ? _0x32cdcc(_0x3878de) : Promise.resolve(_0x3878de).then(_0x1aac18, _0x45434b);
  }
  window.initQRCode = _0x358045;
  window.retryGetQRCode = function () {
    _0x48afec();
    _0x358045();
  };
  window.clearCheckInterval = _0x541eed;
  window.closeSfBindTip = function () {
    var _0x96bba2 = document.getElementById("sfBindTipOverlay");
    _0x96bba2 && _0x96bba2.classList.remove("show");
  };
  window.copyToken = function () {
    var _0x5da46f,
      _0x2d23a4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? window.encodedToken : window.originalToken;
    (_0x5da46f = _0x2d23a4) && (navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(_0x5da46f).then(function () {
      _0x19230d("复制成功 COPIED");
    }).catch(function () {
      _0x185e7c(_0x5da46f);
    }) : _0x185e7c(_0x5da46f));
  };
  window.currentApp = "sf";
  window.originalToken = null;
  window.encodedToken = null;
  (_0x59aa78 = _0x990112().m(function _0x189b58() {
    return _0x990112().w(function (_0x8ec769) {
      for (;;) {
        switch (_0x8ec769.p = _0x8ec769.n) {
          case 0:
            _0x8ec769.p = 0;
            _0x8ec769.n = 1;
            return _0x525763();
          case 1:
            _0x8ec769.n = 3;
            break;
          case 2:
            _0x8ec769.p = 2;
            _0x8ec769.v;
          case 3:
            return _0x8ec769.a(2);
        }
      }
    }, _0x189b58, null, [[0, 2]]);
  }), function () {
    var _0x4f3892 = this,
      _0x2e6104 = arguments;
    return new Promise(function (_0x2ad08b, _0x122ebd) {
      var _0x3a84a0 = _0x59aa78.apply(_0x4f3892, _0x2e6104);
      function _0x3c7309(_0x2c63c1) {
        _0x41d2f4(_0x3a84a0, _0x2ad08b, _0x122ebd, _0x3c7309, _0x2eaca6, "next", _0x2c63c1);
      }
      function _0x2eaca6(_0x37d4c4) {
        _0x41d2f4(_0x3a84a0, _0x2ad08b, _0x122ebd, _0x3c7309, _0x2eaca6, "throw", _0x37d4c4);
      }
      _0x3c7309(void 0);
    });
  })();
  document.addEventListener("keydown", function (_0x381210) {
    !_0x381210.ctrlKey && !_0x381210.metaKey || "c" !== _0x381210.key || _0x381210.shiftKey || document.querySelectorAll(".token-text").length > 0 && (_0x381210.preventDefault(), window.copyToken(!1));
    (_0x381210.ctrlKey || _0x381210.metaKey) && "c" === _0x381210.key && _0x381210.shiftKey && document.querySelectorAll(".token-text").length > 0 && (_0x381210.preventDefault(), window.copyToken(!0));
    if ("F5" === _0x381210.key || (_0x381210.ctrlKey || _0x381210.metaKey) && "r" === _0x381210.key) {
      var _0x27373d = document.getElementById("refreshButton");
      _0x27373d && !_0x27373d.classList.contains("hidden") && (_0x381210.preventDefault(), window.initQRCode());
    }
    if ((_0x381210.ctrlKey || _0x381210.metaKey) && _0x381210.shiftKey && "A" === _0x381210.key && (_0x381210.preventDefault(), window.showAnnouncement()), "Escape" === _0x381210.key) {
      var _0x5e135a = document.getElementById("scanningInterface");
      _0x5e135a && !_0x5e135a.classList.contains("hidden") && (_0x381210.preventDefault(), window.backToSelection());
    }
  });
  var _0x446015 = document.createElement("style");
  _0x446015.textContent = "\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n            transform: scale(1);\n        }\n        to {\n            opacity: 0;\n            transform: scale(0.98);\n        }\n    }\n";
  document.head.appendChild(_0x446015);
})();