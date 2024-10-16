//Wed Oct 16 2024 15:25:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("Jd转赚红包2");
const _0x4a5f38 = $.isNode() ? require("./sendNotify") : "",
  _0x7ce5e9 = $.isNode() ? require("./jdCookie.js") : "",
  _0xeacf9b = require("./function/dylans"),
  _0x4dec2a = require("./USER_AGENTS"),
  _0x17794a = require("./function/dylib");
let _0x169bb0 = true,
  _0x404402 = [],
  _0x4c0f39 = [],
  _0x44bc23 = [],
  _0xd4b6d1 = [],
  _0x1096be = {},
  _0x1d3e3a = [],
  _0x40da2f = "",
  _0x10ff62 = "",
  _0x478770 = "",
  _0x51f1d8 = "",
  _0x19042f;
const _0x326ca3 = process.env.JDZHB2NUM || "9999",
  _0x36a4c5 = process.env.JDZHB2LTNUM || "-1",
  _0x444684 = process.env.JDZHB2DELAY || "1",
  _0x5b3143 = process.env.TXDELAY || "5",
  _0x262d93 = process.env.HLDELAY || "1",
  _0x177f5c = process.env.TXIVAL || "1",
  _0x5b00ed = process.env.JDZHB2TORED || false,
  _0x21d67f = process.env.JDZHB2TOPPIN || "",
  _0x5f327d = process.env.TXSILENT || false,
  _0x514215 = process.env.ZZHB2CODE || "",
  _0x59485d = process.env.CXJLJQ_COUNT || "10",
  _0x4f62b8 = process.env.TX_MODE || "0",
  _0x15b6b7 = process.env.CXJHELP_NODRAW || false,
  _0x354ca5 = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    _0x1096be = require("./function/proxy.js");
    $.dget = _0x1096be.intoRequest($.get.bind($));
    $.dpost = _0x1096be.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(_0x7ce5e9).forEach(_0x20998a => {
    _0x1d3e3a.push(_0x7ce5e9[_0x20998a]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x1d3e3a = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x44cec0($.getdata("CookiesJD") || "[]").map(_0x3a054a => _0x3a054a.cookie)].filter(_0x293d11 => !!_0x293d11);
}
!(async () => {
  if (!_0x1d3e3a[0]) {
    const _0x169f7b = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x169f7b);
    return;
  }
  $.log("\n❗❗❗每天1次助力次数，0点刷新❗❗❗");
  $.log("\n当前版本：20240822");
  console.log("执行流程，车头开团--助力車頭--車頭抽獎--車頭提現");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头：不指定默认CK1  JDZHB2TOPPIN='jdpin'\n  指定助力CODE：都去助力TA  ZZHB2CODE='xxx'\n  多少助力停止：默认9999个  JDZHB2NUM='100'\n  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  助力间隔：默认1秒  HLDELAY='3'\n  提现模式：默认提当前，设置1查列表提现，TX_MODE='1'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  支持代理API： DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  关闭抽奖：默认助力完车头自动抽奖，CXJHELP_NODRAW='true'\n  关闭提现：NOTX='true'\n");
  let _0x36e736 = await _0x544cf3();
  if (_0x21d67f) {
    console.log("\n已指定PIN：" + _0x21d67f);
    let _0x3928cc = _0x1d3e3a.findIndex(_0x3750ff => _0x3750ff.includes(_0x21d67f));
    if (_0x3928cc == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    _0x10ff62 = _0x1d3e3a[_0x3928cc];
  } else {
    console.log("\n未指定PIN默认CK1车头");
    _0x10ff62 = _0x1d3e3a[0];
  }
  _0x40da2f = _0x10ff62;
  $.UserName = decodeURIComponent(_0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/) && _0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = _0x4dec2a.UARAM ? _0x4dec2a.UARAM() : _0x4dec2a.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await _0x3103d2();
  if (!$.isLogin) {
    const _0x2431db = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2431db);
    $.isNode() && (await _0x4a5f38.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await _0x4d5bfa(1);
  await $.wait(1000);
  if (_0x36e736.length != 0) {
    let _0x1af5b6 = _0x36e736[Math.floor(Math.random() * _0x36e736.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(_0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/) && _0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = _0x4dec2a.UARAM ? _0x4dec2a.UARAM() : _0x4dec2a.USER_AGENT;
    let _0x443660 = await _0x17794a.jddToken($.UA);
    if (_0x443660) {
      $.apitoken = _0x443660.token;
    }
    await _0x4d5f99(_0x1af5b6);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n———————————开始助力车头(助力间隔" + _0x262d93 + "秒)—————————————");
  _0x514215 && (console.log("\n已指定助力CODE,那抛弃车头去助力TA"), _0x404402 = [], _0x404402.push(_0x514215));
  _0x19042f = 0;
  for (let _0x1eba37 of _0x404402) {
    if (_0x1d3e3a.length === 1) {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x1eba37);
    $.suc = 0;
    for (let _0x17abd6 = _0x19042f; _0x17abd6 < _0x1d3e3a.length; _0x17abd6++) {
      if (_0x1d3e3a[_0x17abd6]) {
        _0x40da2f = _0x1d3e3a[_0x17abd6];
        $.UserName = decodeURIComponent(_0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/) && _0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x17abd6 + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = _0x4dec2a.UARAM ? _0x4dec2a.UARAM() : _0x4dec2a.USER_AGENT;
        let _0x48cc47 = await _0x17794a.jddToken($.UA);
        if (_0x48cc47) {
          $.apitoken = _0x48cc47.token;
        }
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await _0x4d5f99(_0x1eba37);
        _0x1096be.swip && (await _0x1096be.swip());
        if ($.suc >= Number(_0x326ca3)) {
          $.log("已达目标助力数，跳出！");
          _0x19042f = _0x17abd6 + 1;
          break;
        }
        await $.wait(_0x262d93 * 1000);
      }
    }
    if ($.index === _0x1d3e3a.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  if (_0x15b6b7 == "true") {
    console.log("\n已设置不自动抽奖提现");
    return;
  }
  console.log("\n\n—————————————————开始车头抽奖和提现—————————————————");
  _0x36a4c5 > -1 && console.log("\n已设置本次运行抽奖次数：" + _0x36a4c5);
  let _0x161ddd = new Date();
  _0x161ddd.setDate(_0x161ddd.getDate() - _0x177f5c);
  _0x40da2f = _0x10ff62;
  $.UserName = decodeURIComponent(_0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/) && _0x40da2f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.fail = 0;
  _0x4c0f39 = [];
  _0x44bc23 = [];
  txjscore = [];
  $.txj = true;
  $.fg = 1;
  $.txfull = false;
  $.nocashnum = 0;
  $.end = false;
  $.hotflag = false;
  $.toredfailnum = 0;
  $.txjsuc = false;
  $.banip = false;
  $.xcrflag = 1;
  $.leftAmount = 0;
  $.txsuc = [];
  $.UA = _0x4dec2a.UARAM ? _0x4dec2a.UARAM() : _0x4dec2a.USER_AGENT;
  $.uuid = _0x17794a.UUID();
  let _0x217d54 = await _0x17794a.jddToken($.UA);
  if (_0x217d54) {
    $.apitoken = _0x217d54.token;
  }
  let _0x37c90c = await _0x4d5bfa(0);
  await $.wait(1000);
  if (_0x37c90c.code != "0") {
    return;
  }
  $.log("本轮已抽奖次数：" + _0x37c90c.data.drawPrizeNum);
  $.log("本轮剩余抽奖次数：" + $.times);
  if (_0x37c90c.data.cashVo) {
    if (_0x37c90c.data?.["cashVo"]?.["state"] === 1) {
      $.log("本轮提现金进度：" + _0x37c90c.data.cashVo.amount + "/" + _0x37c90c.data.cashVo.totalAmount + "(-" + _0x37c90c.data.cashVo.leftAmount + ")");
    } else {
      _0x37c90c.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x37c90c.data.cashVo.totalAmount + " 🤑"), $.txj = false, $.txjsuc = true);
    }
  } else {
    $.txj = false;
  }
  $.log("本轮结束时间： " + _0xdb019e(new Date(Date.now() + _0x37c90c.data.countDownTime)));
  for (let _0x3050a9 = 0; _0x3050a9 < (_0x36a4c5 > -1 && _0x36a4c5 < $.times ? _0x36a4c5 : $.times); _0x3050a9++) {
    process.stdout.write("\n第" + (_0x3050a9 + 1) + "次抽奖结果：");
    for (let _0xef4374 of Array(1)) {
      await _0x162a38(_0xef4374 + 1);
      if (!$.hotflag) {
        break;
      }
      await $.wait(Math.random() * 500 + _0x444684 * 1000);
    }
    if ($.banip || !$.isLogin) {
      break;
    }
    if ($.end) {
      console.log("\n本轮结束了，开启新一轮");
      let _0x2cd9ff = await _0x4d5bfa(0);
      _0x2cd9ff.code == 0 && $.log("开启成功，结束时间： " + _0xdb019e(new Date(Date.now() + _0x2cd9ff.data.countDownTime)));
    }
    $.txj && (await _0x139ff2());
    await $.wait(Math.random() * 500 + _0x444684 * 1000);
    if ($.fail >= _0x59485d) {
      $.log("连续垃圾券，不继续抽了");
      break;
    }
  }
  _0x44bc23.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + _0x44bc23.reduce((_0x14d487, _0x23308d) => _0x14d487 + _0x23308d * 100, 0) / 100 + "元");
  _0x4c0f39.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + _0x4c0f39.reduce((_0x4b92a4, _0x2ffc09) => _0x4b92a4 + _0x2ffc09 * 100, 0) / 100 + "元");
  if (txjscore.length !== 0) {
    let _0x17bda4 = txjscore.reduce((_0x5dab03, _0x4367aa) => _0x5dab03 + _0x4367aa * 100, 0) / 100,
      _0x1985e9 = (_0x17bda4 / (_0x36a4c5 > -1 ? Math.min.apply(null, [_0x36a4c5, $.times]) : $.times)).toFixed(4);
    $.log("\n\n本次抽奖获得提现金 " + _0x17bda4 + "个,还差 " + $.leftAmount + "个, 平均 " + _0x1985e9 + "个/抽" + ($.leftAmount > 0 && $.leftAmount < "1.00" ? "，预计还需" + parseInt($.leftAmount / _0x1985e9) + "抽" : ""));
  }
  if (_0x354ca5 != "true") {
    if (new Date().getHours() < 6 && _0x5f327d) {
      return;
    }
    $.log("\n——————————————开始提现（间隔" + _0x5b3143 + "秒）————————————————");
    $.log("\n当前提现模式：" + (_0x4f62b8 == "1" ? _0x177f5c + "天内历史" : "本次所抽现金"));
    $.log("上限转红包：" + (_0x5b00ed ? "开启" : "关闭(续期♻️)"));
    $.toredsuc = [];
    $.failtxlist = [];
    $.banip = false;
    if (_0x4f62b8 == "1") {
      for (let _0x19d22e = 0; _0x19d22e < 500; _0x19d22e++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
          break;
        }
        process.stdout.write("\n" + (_0x19d22e + 1) + "页：");
        let _0x1e7933 = await _0x2abb15(_0x19d22e + 1);
        _0x1e7933 == "" && (await $.wait(5000), await _0x2abb15(_0x19d22e + 1));
        if (!$.baglist || $.baglist.length === 0) {
          break;
        }
        for (let _0x296ed9 of $.baglist) {
          if (Math.max.apply(null, [new Date(_0x296ed9.createTime), new Date(_0x296ed9.startTime)]) < _0x161ddd || $.toredfailnum > 4) {
            $.nocashnum = 5;
            break;
          }
          if (_0x296ed9.prizeType == 4) {
            $.txfail = false;
            if (_0x296ed9.state == 0 || _0x296ed9.state == 2) {
              process.stdout.write("" + Number(_0x296ed9.amount));
              let _0x5e2c27 = await _0x4feee5(_0x296ed9, Number(_0x296ed9.amount));
              if ($.txfail) {
                await $.wait(5000);
                _0x5e2c27 = await _0x4feee5(_0x296ed9, Number(_0x296ed9.amount));
              }
              $.txfail && $.failtxlist.push(_0x296ed9);
              if (_0x5e2c27.data?.["message"]?.["includes"]("上限") && _0x5b00ed == "true" && $.toredfailnum < 5) {
                await _0x3d81c3(_0x296ed9, Number(_0x296ed9.amount));
              }
              await $.wait(_0x5b3143 * 1000);
            } else {
              _0x296ed9.state == 8;
            }
          }
        }
        await $.wait(3000);
      }
      $.banip = false;
      while ($.failtxlist.length > 0 && $.toredfailnum < 5) {
        console.log("\n" + $.failtxlist.length);
        for (let _0x2b28c5 = 0; _0x2b28c5 < $.failtxlist.length;) {
          let _0x413537 = $.failtxlist[_0x2b28c5];
          if (_0x413537.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x413537.amount));
            let _0x88aca7 = await _0x4feee5(_0x413537, Number(_0x413537.amount));
            $.txfail && (await $.wait(5000), _0x88aca7 = await _0x4feee5(_0x413537, Number(_0x413537.amount)));
            $.txfail ? _0x2b28c5++ : $.failtxlist.splice(_0x2b28c5, 1);
            if (_0x88aca7.data.message.includes("上限") && _0x5b00ed == "true" && $.toredfailnum < 5) {
              await _0x3d81c3(_0x413537, Number(_0x413537.amount));
            }
            await $.wait(_0x5b3143 * 1000);
          }
        }
      }
    } else {
      for (let _0x193e4a = 0; _0x193e4a < 1; _0x193e4a++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4) {
          break;
        }
        while (_0xd4b6d1.length > 0) {
          console.log("\n" + _0xd4b6d1.length);
          for (let _0x27946c = 0; _0x27946c < _0xd4b6d1.length;) {
            let _0x1e884a = _0xd4b6d1[_0x27946c];
            if (_0x1e884a.prizeType == 4) {
              $.txfail = false;
              process.stdout.write("" + Number(_0x1e884a.amount));
              let _0x4b2c78 = await _0x4feee5(_0x1e884a, Number(_0x1e884a.amount));
              if ($.txfail) {
                await $.wait(5000);
                _0x4b2c78 = await _0x4feee5(_0x1e884a, Number(_0x1e884a.amount));
              }
              $.txfail ? _0x27946c++ : _0xd4b6d1.splice(_0x27946c, 1);
              if (_0x4b2c78.data?.["message"]?.["includes"]("上限") && _0x5b00ed == "true" && $.toredfailnum < 5) {
                await _0x3d81c3(_0x1e884a, Number(_0x1e884a.amount));
              }
              await $.wait(_0x5b3143 * 1000);
            }
          }
          await $.wait(2000);
        }
      }
    }
    $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x370343, _0x27b985) => _0x370343 + _0x27b985 * 100, 0) / 100 + "元");
    $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x5328c0, _0x22bde2) => _0x5328c0 + _0x22bde2 * 100, 0) / 100 + "元");
  } else {
    $.log("\n\n⚠已设置不提现！");
  }
  _0xd4b6d1 = [];
  await $.wait(2000);
})().catch(_0x41787e => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x41787e + "!", "");
}).finally(() => {
  $.done();
});
async function _0x4d5bfa(_0x419ee6) {
  const _0x2e7a09 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    inviter: ""
  };
  let _0x9ba5c1 = _0x2e7a09,
    _0x2effc5 = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x9ba5c1,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  _0x9ba5c1 = await _0xeacf9b.getbody(_0x2effc5);
  if (!_0x9ba5c1) {
    return;
  }
  return new Promise(async _0x328bb8 => {
    $.dpost(_0x32ec42(_0x9ba5c1), async (_0x5b1298, _0x340726, _0x48c8d1) => {
      try {
        if (_0x5b1298) {
          console.log("" + JSON.stringify(_0x5b1298));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x48c8d1 = JSON.parse(_0x48c8d1);
          if (_0x48c8d1.code == 0) {
            $.times = _0x48c8d1.data.prizeNum;
            if (_0x419ee6) {
              console.log("我的助力码：" + _0x48c8d1.data.inviter);
            }
            _0x404402.push(_0x48c8d1.data.inviter);
          } else {
            console.log(_0x48c8d1.errMsg);
          }
        }
      } catch (_0x348694) {
        $.logErr(_0x348694, _0x340726);
      } finally {
        _0x328bb8(_0x48c8d1);
      }
    });
  });
}
async function _0x139ff2() {
  const _0x3b1bc0 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x1963c4 = _0x3b1bc0,
    _0x52741c = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x1963c4,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x1963c4 = await _0xeacf9b.getbody(_0x52741c);
  if (!_0x1963c4) {
    return;
  }
  return new Promise(async _0x18fe7b => {
    $.dpost(_0x32ec42(_0x1963c4), async (_0x233d07, _0x12753d, _0x17b850) => {
      try {
        if (_0x233d07) {
          console.log("" + JSON.stringify(_0x233d07));
          console.log("receive请求失败，请检查网路重试");
          _0x233d07.includes("403") && ($.banip = true);
        } else {
          _0x17b850 = JSON.parse(_0x17b850);
          if (_0x17b850.code == 0) {
            process.stdout.write("----提现金" + _0x17b850.data.amount + "(+" + _0x17b850.data.receiveList[0].amount + ")");
            txjscore.push(_0x17b850.data.receiveList[0].amount);
            if (_0x17b850.data?.["state"] == 3) {
              process.stdout.write("----恭喜达成");
              if (_0x17b850.data.cashRecord) {
                let _0x2c3694 = _0x17b850.data.cashRecord;
                process.stdout.write(" 提现" + Number(_0x2c3694.amount) + "元");
                let _0x142b92 = await _0x4feee5(_0x2c3694, Number(_0x2c3694.amount));
                _0x142b92.data?.["message"]?.["includes"]("上限") && process.stdout.write(" 本月上限了");
              }
              $.txj = false;
              $.txjsuc = true;
            }
            $.leftAmount = _0x17b850.data.leftAmount;
          } else {
            if (_0x17b850.code == 80208) {
              process.stdout.write("----未获得提现金");
            } else {
              _0x17b850.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0x17b850));
            }
          }
        }
      } catch (_0x33223f) {
        $.logErr(_0x33223f, _0x12753d);
      } finally {
        _0x18fe7b(_0x17b850);
      }
    });
  });
}
async function _0x162a38(_0x235771) {
  const _0x237d57 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0xff1011 = _0x237d57,
    _0x5bb101 = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0xff1011,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0xff1011 = await _0xeacf9b.getbody(_0x5bb101);
  if (!_0xff1011) {
    return;
  }
  return new Promise(async _0x10433f => {
    $.dpost(_0x32ec42(_0xff1011), async (_0x23071e, _0x137032, _0x1ea0e2) => {
      try {
        if (_0x23071e) {
          console.log("" + JSON.stringify(_0x23071e));
          console.log("lottery请求失败，请检查网路重试");
          _0x23071e.includes("403") && ($.banip = true);
        } else {
          _0x1ea0e2 = JSON.parse(_0x1ea0e2);
          if (_0x1ea0e2.code == 0) {
            const _0x311d26 = _0x1ea0e2.data.prizeType;
            if (!_0x311d26) {
              fail++;
            }
            switch (_0x311d26) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x1f8fe5 = parseFloat(_0x1ea0e2.data.prizeValue).toFixed(2);
                process.stdout.write(_0x1f8fe5 + "现金💰️");
                _0x4c0f39.push(_0x1f8fe5);
                const _0x5dae6c = {
                  prizeValue: _0x1ea0e2.data.prizeValue,
                  id: _0x1ea0e2.data.id,
                  poolBaseId: _0x1ea0e2.data.poolBaseId,
                  prizeGroupId: _0x1ea0e2.data.prizeGroupId,
                  prizeBaseId: _0x1ea0e2.data.prizeBaseId,
                  prizeType: _0x1ea0e2.data.prizeType,
                  amount: _0x1ea0e2.data.amount
                };
                _0xd4b6d1.push(_0x5dae6c);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x4e20f0 = parseFloat(_0x1ea0e2.data.prizeValue).toFixed(2);
                process.stdout.write(_0x4e20f0 + "红包🧧");
                _0x44bc23.push(_0x4e20f0);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x1ea0e2.data));
            }
          } else {
            if (_0x1ea0e2.errMsg.includes("火爆")) {
              process.stdout.write("未.中.奖💨");
              $.hotflag = true;
            } else {
              if (_0x1ea0e2.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x1ea0e2.errMsg);
              } else {
                if (_0x1ea0e2.errMsg.includes("未登录")) {
                  $.isLogin = false;
                  $.hotflag = false;
                  console.log(_0x1ea0e2.errMsg);
                } else {
                  $.hotflag = false;
                  console.log(_0x1ea0e2.errMsg);
                }
              }
            }
          }
        }
      } catch (_0x56ea75) {
        $.logErr(_0x56ea75, _0x137032);
      } finally {
        _0x10433f(_0x1ea0e2);
      }
    });
  });
}
async function _0x2abb15(_0x2dc66a) {
  const _0x597f12 = {
    pageNum: _0x2dc66a,
    pageSize: 100,
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    business: "fission"
  };
  let _0x2f0eb3 = _0x597f12;
  let _0x6e28f = {
    appId: "f2b1d",
    functionId: "superRedBagList",
    fn: "superRedBagList",
    body: _0x2f0eb3,
    appid: "activities_platform",
    apid: "activities_platform",
    clientVersion: $.UA.split(";")[2],
    ver: $.UA.split(";")[2],
    client: "ios",
    cl: "ios",
    user: $.UserName,
    t: Date.now(),
    code: 1,
    xcr: $.xcrflag,
    ua: $.UA
  };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x2f0eb3 = await _0xeacf9b.getbody(_0x6e28f);
  if (!_0x2f0eb3) {
    return;
  }
  const _0xa5dc3f = {
    url: "https://api.m.jd.com/api",
    body: _0x2f0eb3 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: _0x17794a.cpstr
  };
  _0xa5dc3f.headers.Accept = "application/json, text/plain, */*";
  _0xa5dc3f.headers["x-rp-client"] = "h5_1.0.0";
  _0xa5dc3f.headers["Accept-Language"] = "zh-cn";
  _0xa5dc3f.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0xa5dc3f.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0xa5dc3f.headers.Origin = "https://pro.m.jd.com";
  _0xa5dc3f.headers["User-Agent"] = $.UA;
  _0xa5dc3f.headers.Referer = "https://pro.m.jd.com/";
  _0xa5dc3f.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0xa5dc3f.headers["request-from"] = "native";
  _0xa5dc3f.headers.Cookie = _0x40da2f;
  return new Promise(async _0x110698 => {
    $.dpost(_0xa5dc3f, async (_0x46ffdc, _0x5c4f1c, _0x125c8e) => {
      try {
        if (_0x46ffdc) {
          console.log("" + JSON.stringify(_0x46ffdc));
          console.log(" API请求失败，请检查网路重试");
          _0x46ffdc.includes("403") && ($.banip = true);
          _0x125c8e = "";
        } else {
          _0x125c8e = JSON.parse(_0x125c8e);
          if (_0x125c8e.code == 0) {
            $.baglist = _0x125c8e.data.items;
          } else {
            console.log(_0x125c8e.errMsg);
          }
        }
      } catch (_0x4b943a) {
        $.logErr(_0x4b943a, _0x5c4f1c);
      } finally {
        _0x110698(_0x125c8e);
      }
    });
  });
}
async function _0x4d5f99(_0x8f28af) {
  const _0x544d48 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    isJdApp: true,
    inviter: _0x8f28af
  };
  let _0x38bd70 = _0x544d48;
  let _0x1add2c = {
    appId: "c5389",
    functionId: "inviteFissionhelp",
    fn: "inviteFissionhelp",
    body: _0x38bd70,
    appid: "activities_platform",
    apid: "activities_platform",
    clientVersion: $.UA.split(";")[2],
    ver: $.UA.split(";")[2],
    client: "ios",
    cl: "ios",
    user: $.UserName,
    t: Date.now(),
    code: 1,
    xcr: 1,
    ua: $.UA
  };
  _0x38bd70 = await _0xeacf9b.getbody(_0x1add2c);
  if (!_0x38bd70) {
    return;
  }
  return new Promise(async _0x5d2186 => {
    $.dpost(_0x32ec42(_0x38bd70), async (_0x571b80, _0x44cd64, _0x7c990d) => {
      try {
        if (_0x571b80) {
          console.log("" + JSON.stringify(_0x571b80));
          console.log("help请求失败，请检查网路重试");
          if (_0x571b80.includes("403")) {
            $.banip = true;
          }
        } else {
          _0x7c990d = JSON.parse(_0x7c990d);
          if (_0x7c990d.code == 0) {
            if (!_0x7c990d.data.helpFlg) {
              $.log("结果：不能助力自己！");
              return;
            }
            if (_0x7c990d.data.helpResult == 1) {
              $.suc++;
              console.log("结果：助力成功 ✅ " + ($.suc || ""));
            } else {
              if (_0x7c990d.data.helpResult == 6) {
                console.log("结果：已经助力过TA！");
              } else {
                if (_0x7c990d.data.helpResult == 3) {
                  console.log("结果：没有次数！");
                } else {
                  if (_0x7c990d.data.helpResult == 2) {
                    $.log("结果：太火爆了 💣");
                    $.hot = true;
                  } else {
                    if (_0x7c990d.data.helpResult == 4) {
                      $.log("结果：没有助力次数！");
                    } else {
                      if (_0x7c990d.data.helpResult == 8) {
                        $.log("结果：TA未开启新的一轮 💤");
                      } else {
                        console.log("结果：" + _0x7c990d.data?.["helpResult"]);
                      }
                    }
                  }
                }
              }
            }
          } else {
            console.log(_0x7c990d.errMsg);
          }
        }
      } catch (_0xd7ec44) {
        $.logErr(_0xd7ec44, _0x44cd64);
      } finally {
        _0x5d2186(_0x7c990d);
      }
    });
  });
}
async function _0x4feee5(_0x2c1a19, _0x3c53df) {
  let _0x2260f6 = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x2c1a19.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x2c1a19.poolBaseId + ",\"prizeGroupId\":" + _0x2c1a19.prizeGroupId + ",\"prizeBaseId\":" + _0x2c1a19.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x27411b = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x40da2f
  };
  const _0x3648f3 = {
    url: "https://api.m.jd.com/api",
    body: _0x2260f6,
    headers: _0x27411b
  };
  return new Promise(async _0x44a47b => {
    $.dpost(_0x3648f3, async (_0x4116c6, _0x34e233, _0x125a7b) => {
      try {
        if (_0x4116c6) {
          console.log("" + JSON.stringify(_0x4116c6));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0x4116c6.includes("403") && ($.banip = true);
        } else {
          _0x125a7b = JSON.parse(_0x125a7b);
          if (_0x125a7b.code == 0) {
            if (_0x125a7b.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x125a7b.data.message.includes("上限")) {
                !_0x5b00ed && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x125a7b.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x3c53df), $.txfail = false) : console.log(_0x125a7b.data.message);
              }
            }
          } else {
            console.log(_0x125a7b.errMsg);
          }
        }
      } catch (_0x47ab21) {
        $.logErr(_0x47ab21, _0x34e233);
      } finally {
        _0x44a47b(_0x125a7b || "");
      }
    });
  });
}
async function _0x3d81c3(_0x21a616, _0x1e052c) {
  let _0x4b3ac4 = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x21a616.id + ",\"business\":\"fission\",\"poolId\":" + _0x21a616.poolBaseId + ",\"prizeGroupId\":" + _0x21a616.prizeGroupId + ",\"prizeId\":" + _0x21a616.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x2e7fdf = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x40da2f
  };
  const _0x2bee67 = {
    url: "https://api.m.jd.com/api",
    body: _0x4b3ac4,
    headers: _0x2e7fdf
  };
  return new Promise(async _0x1d8c77 => {
    $.dpost(_0x2bee67, async (_0x247e4c, _0x4c6c6b, _0x55da72) => {
      try {
        if (_0x247e4c) {
          console.log("" + JSON.stringify(_0x247e4c));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x247e4c.includes("403") && ($.banip = true);
        } else {
          _0x55da72 = JSON.parse(_0x55da72);
          if (_0x55da72.code == 0) {
            _0x55da72.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x1e052c)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else {
            _0x55da72.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x55da72.errMsg);
          }
        }
      } catch (_0x31a491) {
        $.logErr(_0x31a491, _0x4c6c6b);
      } finally {
        _0x1d8c77(_0x55da72);
      }
    });
  });
}
function _0x32ec42(_0xedd898) {
  const _0x17dda0 = {
    url: "https://api.m.jd.com/api?&loginType=2&loginWQBiz=wegame&" + _0xedd898 + "&x-api-eid-token=" + $.apitoken,
    headers: {}
  };
  _0x17dda0.headers.Accept = "application/json, text/plain, */*";
  _0x17dda0.headers["x-rp-client"] = "h5_1.0.0";
  _0x17dda0.headers["Content-type"] = "application/x-www-form-urlencoded";
  _0x17dda0.headers["User-Agent"] = $.UA;
  _0x17dda0.headers["x-referer-page"] = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x17dda0.headers.Origin = "https://pro.m.jd.com";
  _0x17dda0.headers["X-Requested-With"] = "com.jingdong.app.mall";
  _0x17dda0.headers.Referer = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x17dda0.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x17dda0.headers["Accept-language"] = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x17dda0.headers.Cookie = _0x40da2f;
  return _0x17dda0;
}
function _0x3103d2() {
  return new Promise(_0x328d13 => {
    const _0x67cda5 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x67cda5.headers.Cookie = _0x40da2f;
    _0x67cda5.headers.referer = "https://h5.m.jd.com/";
    _0x67cda5.headers["User-Agent"] = $.UA;
    $.get(_0x67cda5, (_0x4757b0, _0x1bda82, _0x24207d) => {
      try {
        if (_0x24207d) {
          _0x24207d = JSON.parse(_0x24207d);
          if (!(_0x24207d.islogin === "1")) {
            if (_0x24207d.islogin === "0") {
              $.isLogin = false;
            }
          }
        }
      } catch (_0x172694) {
        console.log(_0x172694);
      } finally {
        _0x328d13();
      }
    });
  });
}
function _0x5f16b2() {
  return new Promise(_0x431bcb => {
    !_0x169bb0 ? $.msg($.name, "", "" + _0x478770) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x478770);
    _0x431bcb();
  });
}
function _0x21f4a8(_0x2b6a83) {
  try {
    if (typeof JSON.parse(_0x2b6a83) == "object") {
      return true;
    }
  } catch (_0x5fdf4b) {
    console.log(_0x5fdf4b);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x544cf3() {
  const _0x2762e1 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zzhb2",
    timeout: 30000
  };
  return new Promise(_0x3268e2 => {
    $.get(_0x2762e1, async (_0x10dc74, _0xada013, _0x11837e) => {
      try {
        if (_0x10dc74) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          if (_0x11837e) {
            _0x11837e = JSON.parse(_0x11837e);
            if (_0x11837e.code === 200) {
              _0x51f1d8 = _0x11837e.data;
            }
          }
        }
      } catch (_0x1bae20) {
        $.logErr(_0x1bae20, _0xada013);
      } finally {
        _0x3268e2(_0x51f1d8);
      }
    });
  });
}
function _0xdb019e(_0x258203) {
  const _0x248abc = _0x258203.getFullYear();
  const _0x3d620a = ("0" + (_0x258203.getMonth() + 1)).slice(-2),
    _0x39d79e = ("0" + _0x258203.getDate()).slice(-2),
    _0x1fb57d = ("0" + _0x258203.getHours()).slice(-2),
    _0x5c262c = ("0" + _0x258203.getMinutes()).slice(-2),
    _0x4c062a = ("0" + _0x258203.getSeconds()).slice(-2);
  return _0x248abc + "/" + _0x3d620a + "/" + _0x39d79e + " " + _0x1fb57d + ":" + _0x5c262c + ":" + _0x4c062a;
}
function _0x44cec0(_0x1f624c) {
  if (typeof _0x1f624c == "string") {
    try {
      return JSON.parse(_0x1f624c);
    } catch (_0x375345) {
      console.log(_0x375345);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\n🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}