//Wed Oct 16 2024 15:27:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("Jd转赚红包2");
const _0x24753b = $.isNode() ? require("./sendNotify") : "",
  _0x1b79e7 = $.isNode() ? require("./jdCookie.js") : "",
  _0x8e30e5 = require("./function/dylans"),
  _0x35b0f8 = require("./USER_AGENTS"),
  _0x41031e = require("./function/dylib");
let _0x5695ff = true,
  _0x361d86 = [],
  _0x36d148 = [],
  _0x41b58e = [],
  _0x5cc26d = [],
  _0x4eac2f = {},
  _0x2f254c = [],
  _0x2205b8 = "",
  _0x13354a = "",
  _0x9f0af7 = "",
  _0x5bd205 = "",
  _0x243175;
const _0x3c85d8 = process.env.JDZHB2NUM || "9999",
  _0x3bc9bf = process.env.JDZHB2LTNUM || "-1",
  _0x46235a = process.env.JDZHB2DELAY || "1",
  _0x372d26 = process.env.TXDELAY || "5",
  _0x4ad453 = process.env.HLDELAY || "1",
  _0x9da4d7 = process.env.TXIVAL || "1",
  _0x24f6c7 = process.env.JDZHB2TORED || false,
  _0x39d772 = process.env.JDZHB2TOPPIN || "";
const _0x2fe84c = process.env.TXSILENT || false,
  _0xa579e3 = process.env.ZZHB2CODE || "",
  _0x44654e = process.env.CXJLJQ_COUNT || "10",
  _0x2adcb5 = process.env.TX_MODE || "0",
  _0x5edde7 = process.env.CXJHELP_NODRAW || false,
  _0x4114c8 = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    _0x4eac2f = require("./function/proxy.js");
    $.dget = _0x4eac2f.intoRequest($.get.bind($));
    $.dpost = _0x4eac2f.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(_0x1b79e7).forEach(_0x2e3ed3 => {
    _0x2f254c.push(_0x1b79e7[_0x2e3ed3]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x2f254c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x277bec($.getdata("CookiesJD") || "[]").map(_0x5ec636 => _0x5ec636.cookie)].filter(_0x155bd5 => !!_0x155bd5);
}
!(async () => {
  if (!_0x2f254c[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n❗❗❗每天1次助力次数，0点刷新❗❗❗");
  $.log("\n当前版本：20240915 ");
  console.log("执行流程，车头开团--助力車頭--車頭抽獎--車頭提現");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头：不指定默认CK1  JDZHB2TOPPIN='jdpin'\n  指定助力CODE：都去助力TA  ZZHB2CODE='code1' 多个&连接\n  多少助力停止：默认9999个  JDZHB2NUM='100'\n  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  助力间隔：默认1秒  HLDELAY='3'\n  提现模式：默认提当前，设置1查列表提现，TX_MODE='1'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  支持代理API： DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  关闭抽奖：默认助力完车头自动抽奖，CXJHELP_NODRAW='true'\n  关闭提现：NOTX='true'\n");
  let _0x4e546a = await _0x2046dd();
  if (_0x39d772) {
    console.log("\n已指定PIN：" + _0x39d772);
    let _0x2166b9 = _0x2f254c.findIndex(_0x336aa8 => _0x336aa8.includes(_0x39d772));
    if (_0x2166b9 == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    _0x13354a = _0x2f254c[_0x2166b9];
  } else {
    console.log("\n未指定PIN默认CK1车头");
    _0x13354a = _0x2f254c[0];
  }
  _0x2205b8 = _0x13354a;
  $.UserName = decodeURIComponent(_0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = _0x35b0f8.UARAM ? _0x35b0f8.UARAM() : _0x35b0f8.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await _0x184cf9();
  if (!$.isLogin) {
    const _0x528d35 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x528d35);
    $.isNode() && (await _0x24753b.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await _0x1301ce(1);
  await $.wait(1000);
  if (_0x4e546a.length != 0) {
    let _0xb02cd4 = _0x4e546a[Math.floor(Math.random() * _0x4e546a.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(_0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = _0x35b0f8.UARAM ? _0x35b0f8.UARAM() : _0x35b0f8.USER_AGENT;
    let _0x597d12 = await _0x41031e.jddToken($.UA);
    if (_0x597d12) {
      $.apitoken = _0x597d12.token;
    }
    await _0x28c20c(_0xb02cd4);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n———————————开始助力车头(助力间隔" + _0x4ad453 + "秒)—————————————");
  _0xa579e3 && (console.log("\n已指定助力CODE,抛弃车头去助力TA"), _0x361d86 = _0xa579e3.split(/&|,|@|\n/));
  _0x243175 = 0;
  for (let _0x507300 of _0x361d86) {
    if (_0x2f254c.length === 1 && _0xa579e3 == "") {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x507300);
    $.suc = 0;
    for (let _0x374e2e = _0x243175; _0x374e2e < _0x2f254c.length; _0x374e2e++) {
      if (_0x2f254c[_0x374e2e]) {
        _0x2205b8 = _0x2f254c[_0x374e2e];
        $.UserName = decodeURIComponent(_0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x374e2e + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = _0x35b0f8.UARAM ? _0x35b0f8.UARAM() : _0x35b0f8.USER_AGENT;
        let _0x31b31a = await _0x41031e.jddToken($.UA);
        if (_0x31b31a) {
          $.apitoken = _0x31b31a.token;
        }
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await _0x28c20c(_0x507300);
        _0x4eac2f.swip && (await _0x4eac2f.swip());
        if ($.suc >= Number(_0x3c85d8)) {
          $.log("已达目标助力数，跳出！");
          _0x243175 = _0x374e2e + 1;
          break;
        }
        await $.wait(_0x4ad453 * 1000);
      }
    }
    if ($.index === _0x2f254c.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  if (_0x5edde7 == "true") {
    console.log("\n已设置不自动抽奖提现");
    return;
  }
  console.log("\n\n—————————————————开始车头抽奖和提现—————————————————");
  _0x3bc9bf > -1 && console.log("\n已设置本次运行抽奖次数：" + _0x3bc9bf);
  let _0xb0db53 = new Date();
  _0xb0db53.setDate(_0xb0db53.getDate() - _0x9da4d7);
  _0x2205b8 = _0x13354a;
  $.UserName = decodeURIComponent(_0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2205b8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.fail = 0;
  _0x36d148 = [];
  _0x41b58e = [];
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
  $.UA = _0x35b0f8.UARAM ? _0x35b0f8.UARAM() : _0x35b0f8.USER_AGENT;
  $.uuid = _0x41031e.UUID();
  let _0x266ade = await _0x41031e.jddToken($.UA);
  if (_0x266ade) {
    $.apitoken = _0x266ade.token;
  }
  let _0x351ed1 = await _0x1301ce(0);
  await $.wait(1000);
  if (_0x351ed1.code != "0") {
    return;
  }
  $.log("本轮已抽奖次数：" + _0x351ed1.data.drawPrizeNum);
  $.log("本轮剩余抽奖次数：" + $.times);
  if (_0x351ed1.data.cashVo) {
    if (_0x351ed1.data?.["cashVo"]?.["state"] === 1) {
      $.log("本轮提现金进度：" + _0x351ed1.data.cashVo.amount + "/" + _0x351ed1.data.cashVo.totalAmount + "(-" + _0x351ed1.data.cashVo.leftAmount + ")");
    } else {
      _0x351ed1.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x351ed1.data.cashVo.totalAmount + " 🤑"), $.txj = false, $.txjsuc = true);
    }
  } else {
    $.txj = false;
  }
  $.log("本轮结束时间： " + _0xa2de7(new Date(Date.now() + _0x351ed1.data.countDownTime)));
  for (let _0x460523 = 0; _0x460523 < (_0x3bc9bf > -1 && _0x3bc9bf < $.times ? _0x3bc9bf : $.times); _0x460523++) {
    process.stdout.write("\n第" + (_0x460523 + 1) + "次抽奖结果：");
    for (let _0x4aea82 of Array(1)) {
      await _0x4fe075(_0x4aea82 + 1);
      if (!$.hotflag) {
        break;
      }
      await $.wait(Math.random() * 500 + _0x46235a * 1000);
    }
    if ($.banip || !$.isLogin) {
      break;
    }
    if ($.end) {
      console.log("\n本轮结束了，开启新一轮");
      let _0x4b846b = await _0x1301ce(0);
      _0x4b846b.code == 0 && $.log("开启成功，结束时间： " + _0xa2de7(new Date(Date.now() + _0x4b846b.data.countDownTime)));
    }
    $.txj && (await _0x2ebb5c());
    await $.wait(Math.random() * 500 + _0x46235a * 1000);
    if ($.fail >= _0x44654e) {
      $.log("连续垃圾券，不继续抽了");
      break;
    }
  }
  _0x41b58e.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + _0x41b58e.reduce((_0x3ee7d4, _0x5828c7) => _0x3ee7d4 + _0x5828c7 * 100, 0) / 100 + "元");
  _0x36d148.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + _0x36d148.reduce((_0x3e6a2e, _0x5bfbeb) => _0x3e6a2e + _0x5bfbeb * 100, 0) / 100 + "元");
  if (txjscore.length !== 0) {
    let _0x5803ad = txjscore.reduce((_0x1aafb7, _0x4a7506) => _0x1aafb7 + _0x4a7506 * 100, 0) / 100,
      _0x196aa3 = (_0x5803ad / (_0x3bc9bf > -1 ? Math.min.apply(null, [_0x3bc9bf, $.times]) : $.times)).toFixed(4);
    $.log("\n\n本次抽奖获得提现金 " + _0x5803ad + "个,还差 " + $.leftAmount + "个, 平均 " + _0x196aa3 + "个/抽" + ($.leftAmount > 0 && $.leftAmount < "1.00" ? "，预计还需" + parseInt($.leftAmount / _0x196aa3) + "抽" : ""));
  }
  if (_0x4114c8 != "true") {
    if (new Date().getHours() < 6 && _0x2fe84c) {
      return;
    }
    $.log("\n——————————————开始提现（间隔" + _0x372d26 + "秒）————————————————");
    $.log("\n当前提现模式：" + (_0x2adcb5 == "1" ? _0x9da4d7 + "天内历史" : "本次所抽现金"));
    $.log("上限转红包：" + (_0x24f6c7 ? "开启" : "关闭(续期♻️)"));
    $.toredsuc = [];
    $.failtxlist = [];
    $.banip = false;
    if (_0x2adcb5 == "1") {
      for (let _0x4bd105 = 0; _0x4bd105 < 500; _0x4bd105++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
          break;
        }
        process.stdout.write("\n" + (_0x4bd105 + 1) + "页：");
        let _0x278718 = await _0x318ef7(_0x4bd105 + 1);
        _0x278718 == "" && (await $.wait(5000), await _0x318ef7(_0x4bd105 + 1));
        if (!$.baglist || $.baglist.length === 0) {
          break;
        }
        for (let _0x3696f4 of $.baglist) {
          if (Math.max.apply(null, [new Date(_0x3696f4.createTime), new Date(_0x3696f4.startTime)]) < _0xb0db53 || $.toredfailnum > 4) {
            $.nocashnum = 5;
            break;
          }
          if (_0x3696f4.prizeType == 4) {
            $.txfail = false;
            if (_0x3696f4.state == 0 || _0x3696f4.state == 2) {
              process.stdout.write("" + Number(_0x3696f4.amount));
              let _0x260cbb = await _0x4a8316(_0x3696f4, Number(_0x3696f4.amount));
              $.txfail && (await $.wait(5000), _0x260cbb = await _0x4a8316(_0x3696f4, Number(_0x3696f4.amount)));
              $.txfail && $.failtxlist.push(_0x3696f4);
              if (_0x260cbb.data?.["message"]?.["includes"]("上限") && _0x24f6c7 == "true" && $.toredfailnum < 5) {
                await _0x3e4f4e(_0x3696f4, Number(_0x3696f4.amount));
              }
              await $.wait(_0x372d26 * 1000);
            } else {
              _0x3696f4.state == 8;
            }
          }
        }
        await $.wait(3000);
      }
      $.banip = false;
      while ($.failtxlist.length > 0 && $.toredfailnum < 5) {
        console.log("\n" + $.failtxlist.length);
        for (let _0x3db72e = 0; _0x3db72e < $.failtxlist.length;) {
          let _0x27fc6c = $.failtxlist[_0x3db72e];
          if (_0x27fc6c.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x27fc6c.amount));
            let _0x1f7dfd = await _0x4a8316(_0x27fc6c, Number(_0x27fc6c.amount));
            $.txfail && (await $.wait(5000), _0x1f7dfd = await _0x4a8316(_0x27fc6c, Number(_0x27fc6c.amount)));
            $.txfail ? _0x3db72e++ : $.failtxlist.splice(_0x3db72e, 1);
            if (_0x1f7dfd.data.message.includes("上限") && _0x24f6c7 == "true" && $.toredfailnum < 5) {
              await _0x3e4f4e(_0x27fc6c, Number(_0x27fc6c.amount));
            }
            await $.wait(_0x372d26 * 1000);
          }
        }
      }
    } else {
      for (let _0xb84e11 = 0; _0xb84e11 < 1; _0xb84e11++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4) {
          break;
        }
        while (_0x5cc26d.length > 0) {
          console.log("\n" + _0x5cc26d.length);
          for (let _0x99d705 = 0; _0x99d705 < _0x5cc26d.length;) {
            let _0x47c190 = _0x5cc26d[_0x99d705];
            if (_0x47c190.prizeType == 4) {
              $.txfail = false;
              process.stdout.write("" + Number(_0x47c190.amount));
              let _0x4614a5 = await _0x4a8316(_0x47c190, Number(_0x47c190.amount));
              if ($.txfail) {
                await $.wait(5000);
                _0x4614a5 = await _0x4a8316(_0x47c190, Number(_0x47c190.amount));
              }
              $.txfail ? _0x99d705++ : _0x5cc26d.splice(_0x99d705, 1);
              if (_0x4614a5.data?.["message"]?.["includes"]("上限") && _0x24f6c7 == "true" && $.toredfailnum < 5) {
                await _0x3e4f4e(_0x47c190, Number(_0x47c190.amount));
              }
              await $.wait(_0x372d26 * 1000);
            }
          }
          await $.wait(2000);
        }
      }
    }
    $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x2250dc, _0x3f2d03) => _0x2250dc + _0x3f2d03 * 100, 0) / 100 + "元");
    $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x23c92a, _0x57a2ba) => _0x23c92a + _0x57a2ba * 100, 0) / 100 + "元");
  } else {
    $.log("\n\n⚠已设置不提现！");
  }
  _0x5cc26d = [];
  await $.wait(2000);
})().catch(_0x4d8543 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4d8543 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x1301ce(_0x5f5563) {
  const _0x57143e = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    inviter: ""
  };
  let _0x43ef57 = _0x57143e,
    _0x77ea9a = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x43ef57,
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
  _0x43ef57 = await _0x8e30e5.getbody(_0x77ea9a);
  if (!_0x43ef57) {
    return;
  }
  return new Promise(async _0x5cb53d => {
    $.dpost(_0x192d4b(_0x43ef57), async (_0x27bc9f, _0x2ba73b, _0x1591a8) => {
      try {
        if (_0x27bc9f) {
          console.log("" + JSON.stringify(_0x27bc9f));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x1591a8 = JSON.parse(_0x1591a8);
          if (_0x1591a8.code == 0) {
            $.times = _0x1591a8.data.prizeNum;
            if (_0x5f5563) {
              console.log("我的助力码：" + _0x1591a8.data.inviter);
            }
            _0x361d86.push(_0x1591a8.data.inviter);
          } else {
            console.log(_0x1591a8.errMsg);
          }
        }
      } catch (_0x4e4fae) {
        $.logErr(_0x4e4fae, _0x2ba73b);
      } finally {
        _0x5cb53d(_0x1591a8);
      }
    });
  });
}
async function _0x2ebb5c() {
  const _0x42829c = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x441222 = _0x42829c,
    _0x3a61a6 = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x441222,
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
  _0x441222 = await _0x8e30e5.getbody(_0x3a61a6);
  if (!_0x441222) {
    return;
  }
  return new Promise(async _0x4032be => {
    $.dpost(_0x192d4b(_0x441222), async (_0x24a7cf, _0x3f5ecb, _0xe2bc1f) => {
      try {
        if (_0x24a7cf) {
          console.log("" + JSON.stringify(_0x24a7cf));
          console.log("receive请求失败，请检查网路重试");
          _0x24a7cf.includes("403") && ($.banip = true);
        } else {
          _0xe2bc1f = JSON.parse(_0xe2bc1f);
          if (_0xe2bc1f.code == 0) {
            process.stdout.write("----提现金" + _0xe2bc1f.data.amount + "(+" + _0xe2bc1f.data.receiveList[0].amount + ")");
            txjscore.push(_0xe2bc1f.data.receiveList[0].amount);
            if (_0xe2bc1f.data?.["state"] == 3) {
              process.stdout.write("----恭喜达成");
              if (_0xe2bc1f.data.cashRecord) {
                let _0x24f0e0 = _0xe2bc1f.data.cashRecord;
                process.stdout.write(" 提现" + Number(_0x24f0e0.amount) + "元");
                let _0x3a15c2 = await _0x4a8316(_0x24f0e0, Number(_0x24f0e0.amount));
                _0x3a15c2.data?.["message"]?.["includes"]("上限") && process.stdout.write(" 本月上限了");
              }
              $.txj = false;
              $.txjsuc = true;
            }
            $.leftAmount = _0xe2bc1f.data.leftAmount;
          } else {
            if (_0xe2bc1f.code == 80208) {
              process.stdout.write("----未获得提现金");
            } else {
              _0xe2bc1f.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0xe2bc1f));
            }
          }
        }
      } catch (_0x50c932) {
        $.logErr(_0x50c932, _0x3f5ecb);
      } finally {
        _0x4032be(_0xe2bc1f);
      }
    });
  });
}
async function _0x4fe075(_0x54ef9c) {
  const _0x501879 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x5e31b0 = _0x501879,
    _0x5ac293 = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0x5e31b0,
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
  _0x5e31b0 = await _0x8e30e5.getbody(_0x5ac293);
  if (!_0x5e31b0) {
    return;
  }
  return new Promise(async _0x2680a8 => {
    $.dpost(_0x192d4b(_0x5e31b0), async (_0xf09b69, _0x2d2287, _0x4ace2d) => {
      try {
        if (_0xf09b69) {
          console.log("" + JSON.stringify(_0xf09b69));
          console.log("lottery请求失败，请检查网路重试");
          _0xf09b69.includes("403") && ($.banip = true);
        } else {
          _0x4ace2d = JSON.parse(_0x4ace2d);
          if (_0x4ace2d.code == 0) {
            const _0x5e37e4 = _0x4ace2d.data.prizeType;
            if (!_0x5e37e4) {
              fail++;
            }
            switch (_0x5e37e4) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x548008 = parseFloat(_0x4ace2d.data.prizeValue).toFixed(2);
                process.stdout.write(_0x548008 + "现金💰️");
                _0x36d148.push(_0x548008);
                const _0x52b96b = {
                  prizeValue: _0x4ace2d.data.prizeValue,
                  id: _0x4ace2d.data.id,
                  poolBaseId: _0x4ace2d.data.poolBaseId,
                  prizeGroupId: _0x4ace2d.data.prizeGroupId,
                  prizeBaseId: _0x4ace2d.data.prizeBaseId,
                  prizeType: _0x4ace2d.data.prizeType,
                  amount: _0x4ace2d.data.amount
                };
                _0x5cc26d.push(_0x52b96b);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0xb9b74 = parseFloat(_0x4ace2d.data.prizeValue).toFixed(2);
                process.stdout.write(_0xb9b74 + "红包🧧");
                _0x41b58e.push(_0xb9b74);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x4ace2d.data));
            }
          } else {
            if (_0x4ace2d.errMsg.includes("火爆")) {
              process.stdout.write("未.中.奖💨");
              $.hotflag = true;
            } else {
              if (_0x4ace2d.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x4ace2d.errMsg);
              } else {
                _0x4ace2d.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x4ace2d.errMsg)) : ($.hotflag = false, console.log(_0x4ace2d.errMsg));
              }
            }
          }
        }
      } catch (_0x55f872) {
        $.logErr(_0x55f872, _0x2d2287);
      } finally {
        _0x2680a8(_0x4ace2d);
      }
    });
  });
}
async function _0x318ef7(_0x134e71) {
  const _0x12ffd9 = {
    pageNum: _0x134e71,
    pageSize: 100,
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    business: "fission"
  };
  let _0x354f26 = _0x12ffd9,
    _0x4f3ac6 = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x354f26,
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
  _0x354f26 = await _0x8e30e5.getbody(_0x4f3ac6);
  if (!_0x354f26) {
    return;
  }
  const _0x221a33 = {
    url: "https://api.m.jd.com/api",
    body: _0x354f26 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: _0x41031e.cpstr
  };
  _0x221a33.headers.Accept = "application/json, text/plain, */*";
  _0x221a33.headers["x-rp-client"] = "h5_1.0.0";
  _0x221a33.headers["Accept-Language"] = "zh-cn";
  _0x221a33.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x221a33.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x221a33.headers.Origin = "https://pro.m.jd.com";
  _0x221a33.headers["User-Agent"] = $.UA;
  _0x221a33.headers.Referer = "https://pro.m.jd.com/";
  _0x221a33.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0x221a33.headers["request-from"] = "native";
  _0x221a33.headers.Cookie = _0x2205b8;
  return new Promise(async _0x1f77e2 => {
    $.dpost(_0x221a33, async (_0x570456, _0x14df96, _0x332c79) => {
      try {
        if (_0x570456) {
          console.log("" + JSON.stringify(_0x570456));
          console.log(" API请求失败，请检查网路重试");
          if (_0x570456.includes("403")) {
            $.banip = true;
          }
          _0x332c79 = "";
        } else {
          _0x332c79 = JSON.parse(_0x332c79);
          _0x332c79.code == 0 ? $.baglist = _0x332c79.data.items : console.log(_0x332c79.errMsg);
        }
      } catch (_0x2f5f10) {
        $.logErr(_0x2f5f10, _0x14df96);
      } finally {
        _0x1f77e2(_0x332c79);
      }
    });
  });
}
async function _0x28c20c(_0x44f132) {
  const _0x56fb3f = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    isJdApp: true,
    inviter: _0x44f132
  };
  let _0x437e16 = _0x56fb3f,
    _0x4d75af = {
      appId: "c5389",
      functionId: "inviteFissionhelp",
      fn: "inviteFissionhelp",
      body: _0x437e16,
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
  _0x437e16 = await _0x8e30e5.getbody(_0x4d75af);
  if (!_0x437e16) {
    return;
  }
  return new Promise(async _0x169931 => {
    $.dpost(_0x192d4b(_0x437e16), async (_0x5a96e6, _0x379733, _0x3205a8) => {
      try {
        if (_0x5a96e6) {
          console.log("" + JSON.stringify(_0x5a96e6));
          console.log("help请求失败，请检查网路重试");
          if (_0x5a96e6.includes("403")) {
            $.banip = true;
          }
        } else {
          _0x3205a8 = JSON.parse(_0x3205a8);
          if (_0x3205a8.code == 0) {
            if (!_0x3205a8.data.helpFlg) {
              $.log("结果：不能助力自己！");
              return;
            }
            if (_0x3205a8.data.helpResult == 1) {
              $.suc++;
              console.log("结果：助力成功 ✅ " + ($.suc || ""));
            } else {
              if (_0x3205a8.data.helpResult == 6) {
                console.log("结果：已经助力过TA！");
              } else {
                if (_0x3205a8.data.helpResult == 3) {
                  console.log("结果：没有次数！");
                } else {
                  if (_0x3205a8.data.helpResult == 2) {
                    $.log("结果：太火爆了 💣");
                    $.hot = true;
                  } else {
                    if (_0x3205a8.data.helpResult == 4) {
                      $.log("结果：没有助力次数！");
                    } else {
                      _0x3205a8.data.helpResult == 8 ? $.log("结果：TA未开启新的一轮 💤") : console.log("结果：" + _0x3205a8.data?.["helpResult"]);
                    }
                  }
                }
              }
            }
          } else {
            console.log(_0x3205a8.errMsg);
          }
        }
      } catch (_0x2e6c4c) {
        $.logErr(_0x2e6c4c, _0x379733);
      } finally {
        _0x169931(_0x3205a8);
      }
    });
  });
}
async function _0x4a8316(_0x1224d3, _0x49a455) {
  let _0x3a0377 = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x1224d3.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x1224d3.poolBaseId + ",\"prizeGroupId\":" + _0x1224d3.prizeGroupId + ",\"prizeBaseId\":" + _0x1224d3.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x1dd181 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x2205b8
  };
  const _0x53f5e3 = {
    url: "https://api.m.jd.com/api",
    body: _0x3a0377,
    headers: _0x1dd181
  };
  return new Promise(async _0x37b117 => {
    $.dpost(_0x53f5e3, async (_0x8efd7b, _0x3af5c3, _0x378468) => {
      try {
        if (_0x8efd7b) {
          console.log("" + JSON.stringify(_0x8efd7b));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0x8efd7b.includes("403") && ($.banip = true);
        } else {
          _0x378468 = JSON.parse(_0x378468);
          if (_0x378468.code == 0) {
            if (_0x378468.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x378468.data.message.includes("上限")) {
                !_0x24f6c7 && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x378468.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x49a455), $.txfail = false) : console.log(_0x378468.data.message);
              }
            }
          } else {
            console.log(_0x378468.errMsg);
          }
        }
      } catch (_0x4889ed) {
        $.logErr(_0x4889ed, _0x3af5c3);
      } finally {
        _0x37b117(_0x378468 || "");
      }
    });
  });
}
async function _0x3e4f4e(_0x550ea3, _0x2ade7b) {
  let _0x3495e5 = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x550ea3.id + ",\"business\":\"fission\",\"poolId\":" + _0x550ea3.poolBaseId + ",\"prizeGroupId\":" + _0x550ea3.prizeGroupId + ",\"prizeId\":" + _0x550ea3.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0xb0f46c = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x2205b8
  };
  const _0x559de9 = {
    url: "https://api.m.jd.com/api",
    body: _0x3495e5,
    headers: _0xb0f46c
  };
  return new Promise(async _0x422c3c => {
    $.dpost(_0x559de9, async (_0x1e43e0, _0x44439f, _0x4275f9) => {
      try {
        if (_0x1e43e0) {
          console.log("" + JSON.stringify(_0x1e43e0));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x1e43e0.includes("403") && ($.banip = true);
        } else {
          _0x4275f9 = JSON.parse(_0x4275f9);
          if (_0x4275f9.code == 0) {
            if (_0x4275f9.data.resCode === "0") {
              process.stdout.write("🧧 ");
              $.toredsuc.push(_0x2ade7b);
            } else {
              process.stdout.write("❎ ");
              $.toredfailnum++;
            }
          } else {
            _0x4275f9.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x4275f9.errMsg);
          }
        }
      } catch (_0x5f121d) {
        $.logErr(_0x5f121d, _0x44439f);
      } finally {
        _0x422c3c(_0x4275f9);
      }
    });
  });
}
function _0x192d4b(_0x3c594a) {
  const _0x3d24eb = {
    url: "https://api.m.jd.com/api?&loginType=2&loginWQBiz=wegame&" + _0x3c594a + "&x-api-eid-token=" + $.apitoken,
    headers: {}
  };
  _0x3d24eb.headers.Accept = "application/json, text/plain, */*";
  _0x3d24eb.headers["x-rp-client"] = "h5_1.0.0";
  _0x3d24eb.headers["Content-type"] = "application/x-www-form-urlencoded";
  _0x3d24eb.headers["User-Agent"] = $.UA;
  _0x3d24eb.headers["x-referer-page"] = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x3d24eb.headers.Origin = "https://pro.m.jd.com";
  _0x3d24eb.headers["X-Requested-With"] = "com.jingdong.app.mall";
  _0x3d24eb.headers.Referer = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x3d24eb.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x3d24eb.headers["Accept-language"] = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x3d24eb.headers.Cookie = _0x2205b8;
  return _0x3d24eb;
}
function _0x184cf9() {
  return new Promise(_0x4b0ef2 => {
    const _0x1a544d = {
      Cookie: _0x2205b8,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x197a91 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x1a544d,
      timeout: 10000
    };
    $.get(_0x197a91, (_0x46bc02, _0x1887d5, _0x429f24) => {
      try {
        if (_0x429f24) {
          _0x429f24 = JSON.parse(_0x429f24);
          if (!(_0x429f24.islogin === "1")) {
            _0x429f24.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x34fbfc) {
        console.log(_0x34fbfc);
      } finally {
        _0x4b0ef2();
      }
    });
  });
}
function _0x33063e() {
  return new Promise(_0x282912 => {
    !_0x5695ff ? $.msg($.name, "", "" + _0x9f0af7) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x9f0af7);
    _0x282912();
  });
}
function _0x228c2f(_0x48fabb) {
  try {
    if (typeof JSON.parse(_0x48fabb) == "object") {
      return true;
    }
  } catch (_0x3586d3) {
    console.log(_0x3586d3);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x2046dd() {
  const _0x4e7b27 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zzhb2",
    timeout: 30000
  };
  return new Promise(_0x469351 => {
    $.get(_0x4e7b27, async (_0x3794a3, _0x8ee4a0, _0x13efa0) => {
      try {
        if (_0x3794a3) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          if (_0x13efa0) {
            _0x13efa0 = JSON.parse(_0x13efa0);
            if (_0x13efa0.code === 200) {
              _0x5bd205 = _0x13efa0.data;
            }
          }
        }
      } catch (_0x5b33fc) {
        $.logErr(_0x5b33fc, _0x8ee4a0);
      } finally {
        _0x469351(_0x5bd205);
      }
    });
  });
}
function _0xa2de7(_0x332ec5) {
  const _0x370f5d = _0x332ec5.getFullYear(),
    _0xab756b = ("0" + (_0x332ec5.getMonth() + 1)).slice(-2),
    _0x40ece4 = ("0" + _0x332ec5.getDate()).slice(-2),
    _0x1d3fe7 = ("0" + _0x332ec5.getHours()).slice(-2),
    _0x3f58e7 = ("0" + _0x332ec5.getMinutes()).slice(-2),
    _0x1606d0 = ("0" + _0x332ec5.getSeconds()).slice(-2);
  return _0x370f5d + "/" + _0xab756b + "/" + _0x40ece4 + " " + _0x1d3fe7 + ":" + _0x3f58e7 + ":" + _0x1606d0;
}
function _0x277bec(_0x34a587) {
  if (typeof _0x34a587 == "string") {
    try {
      return JSON.parse(_0x34a587);
    } catch (_0x301549) {
      console.log(_0x301549);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(o, t) {
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
      return new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
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
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20,
          [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@"));
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) {
        return {};
      }
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, r, e) {
      Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") {
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
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
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          });
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r);
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = r => {
          const {
            $open: t,
            $copy: e,
            $media: i,
            $mediaMime: a
          } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: r
                  };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return {
                    "open-url": r
                  };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (s && Object.assign(o, {
                    action: "open-url",
                    url: s
                  }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                    action: "clipboard",
                    text: s
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [r] = i.split(";"),
                          [, a] = i.split(",");
                        e = a;
                        s = r.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          var e,
                            s = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg"
                            };
                          for (e in s) if (0 === t.indexOf(e)) {
                            return s[e];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  });
                  return o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    });
                    console.log(JSON.stringify(e));
                    return e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    });
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    });
                    console.log(JSON.stringify(a));
                    return a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(t, e, s, a(r));
            break;
          case "Quantumult X":
            $notify(t, e, s, a(r));
            break;
          case "Node.js":
        }
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}