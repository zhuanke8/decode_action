//Thu Sep 05 2024 14:30:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("9.1-9.12 中秋携好礼 团圆更欢喜");
const _0x1230ac = $.isNode() ? require("./jdCookie.js") : "",
  _0x3106b8 = $.isNode() ? require("./sendNotify") : "",
  _0x5153a4 = require("./function/dylank"),
  _0x27c6cb = require("./function/dylany"),
  _0x3f1645 = /^-?\d+(\.\d+)?$/.test(process.env.opencard_draw) ? process.env.opencard_draw : "5";
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let _0x4e055d = [],
  _0x25e0c8 = "",
  _0x397f0a = 0;
if ($.isNode()) {
  Object.keys(_0x1230ac).forEach(_0x40618e => {
    _0x4e055d.push(_0x1230ac[_0x40618e]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x4e055d = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x501abf => _0x501abf.cookie)].filter(_0x4d3d8b => !!_0x4d3d8b);
}
const _0x2f3e81 = "https://szxyun-rc.isvjcloud.com";
let _0x204791 = ["1830895889658875906"],
  _0x409e15 = [],
  _0x25629c = [],
  _0x51015c = "";
$.shopId = "1000100710";
$.activeId = "unionOpenZQXHL240901FFKcHsgR";
$.acUrl = "https://szxyun-rc.isvjcloud.com/pagec/unionOpenZQXHL240901/index.html";
!(async () => {
  if (!_0x4e055d[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  await _0x3090f0();
  _0x25629c = _0x409e15.length != 0 ? _0x409e15 : _0x204791;
  _0x51015c = _0x25629c[_0x548cec(0, _0x25629c.length)];
  $.shareUuid = _0x51015c;
  $.log("\n自测有无水！！！");
  console.log("环境变量（非必须）：");
  $.log("默认抽奖5次，opencard_draw='6'");
  $.log("代理API，DY_PROXY='apiurl'");
  for (let _0x2e780f = 0; _0x2e780f < _0x4e055d.length; _0x2e780f++) {
    _0x25e0c8 = _0x4e055d[_0x2e780f];
    originCookie = _0x4e055d[_0x2e780f];
    if (_0x25e0c8) {
      $.UserName = decodeURIComponent(_0x25e0c8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x25e0c8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2e780f + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      _0x1933eb();
      await _0x2f3ce7();
      if (!$.isLogin) {
        const _0x2f75df = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2f75df);
        $.isNode() && (await _0x3106b8.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await _0x2c4f7d();
      if ($.outFlag) {
        console.log("此ip已被限制，请过10分钟后再执行脚本\n");
        return;
      }
      if ($.activityEnd) {
        return;
      }
    }
  }
})().catch(_0x3c1e74 => {
  return $.logErr(_0x3c1e74);
}).finally(() => {
  return $.done();
});
async function _0x2c4f7d() {
  try {
    $.jdToken = "";
    $.wxToken = "";
    $.joinId = "";
    $.jdToken = await _0x5153a4(_0x25e0c8, _0x2f3e81);
    if (!$.jdToken) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    await _0x2d865b("login");
    if (!$.wxToken) {
      console.log("❌ 登录失败");
      return;
    }
    await _0x2d865b("active");
    if (!$.joinId) {
      console.log("获取joinId失败");
      return;
    }
    if ($.endTime && Date.now() > $.endTime) {
      $.activityEnd = true;
      console.log("活动结束！！！");
      return;
    } else {
      $.index == 1 && console.log($.activityName);
      $.index == 1 && console.log("结束时间：" + $.endTime);
    }
    await _0x2d865b("shareme");
    console.log("\n去开卡(" + $.bindCardInfo.length + "个店铺)...");
    for (let _0x309a88 of $.bindCardInfo) {
      if (_0x309a88.isBindCard) {
        continue;
      }
      $.joinVenderId = _0x309a88.openUrl.match(/venderId=(\d+)&/)[1];
      for (let _0x44c7d4 of Array(3)) {
        await _0x2a9607();
        if ($.errorJoinShop.indexOf("失败") == -1 || $.errorJoinShop.indexOf("火爆") == -1) {
          break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      if ($.errorJoinShop.indexOf("火爆") > -1) {
        console.log("可能开卡黑了,跳出");
        return;
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    for (let _0x1fbc74 in $.jobMap) {
      $.de = "";
      switch (_0x1fbc74) {
        case "addCart":
          break;
        case "followShop":
          console.log("一键关注...");
          $.de = $.jobMap[_0x1fbc74].done;
          $.jobForm = $.jobMap[_0x1fbc74].jobForm;
          break;
        default:
          console.log("无匹任务");
          break;
      }
      if ($.de === "") {
        continue;
      }
      if ($.de) {
        console.log("已完成！");
      } else {
        await _0x2d865b("job");
      }
    }
    await _0x2d865b("active");
    await _0x2d865b("sharehe");
    if (_0x409e15.length > 0) {
      for (let _0x50f203 = 0; _0x50f203 < _0x25629c.length; _0x50f203++) {
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        _0x51015c = _0x25629c[_0x50f203];
        await _0x2d865b("shareau");
      }
    }
    let _0x33a46a = Math.min.apply(null, [$.point2, _0x3f1645]);
    console.log("\n去抽奖(" + _0x33a46a + "次)...");
    for (let _0x492d20 of Array(_0x33a46a)) {
      await _0x2d865b("lottery");
      await $.wait(1000);
    }
    console.log("");
    switch ($.helpStatus) {
      case 0:
        console.log("助力结果:不能为自己助力");
        break;
      case 1:
        console.log("助力结果:助力成功✅");
        break;
      case 2:
      case 12:
        console.log("助力结果:已为好友助力");
        break;
      case 3:
        console.log("助力结果:已为他人助力");
        break;
      case 4:
        console.log("助力结果:发起人助力到达限制");
        break;
      case 5:
        console.log("助力结果:发起人助力数达到上");
        break;
      case 7:
        console.log("助力结果:助力人没全部开卡");
        break;
      case 36:
        console.log("助力结果:助力人未预约商品");
        break;
      case 37:
        console.log("助力结果:发起人未预约商品");
        break;
      default:
        console.log("助力结果:未知 " + $.helpStatus);
        break;
    }
    await _0x2d865b("awardList");
    $.point > 0 && console.log("已邀请：" + $.point);
    $.index == 1 && ($.shareUuid = $.joinId, console.log("后面的号都会助力 -> " + $.shareUuid));
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x222e6d) {
    console.log(_0x222e6d);
  }
}
async function _0x2d865b(_0x56a7f1) {
  if ($.outFlag) {
    return;
  }
  let _0x3bf8e7 = "",
    _0x5e0097 = "POST",
    _0x36d503;
  switch (_0x56a7f1) {
    case "login":
      const _0x4c1d0a = {
        shopId: $.shopId,
        token: $.jdToken,
        source: "01"
      };
      _0x3bf8e7 = _0x4c1d0a;
      _0x36d503 = _0x2f3e81 + "/webc/login/userLogin";
      break;
    case "active":
      const _0x4aa013 = {
        activeId: $.activeId,
        shareId: $.shareUuid || null
      };
      _0x3bf8e7 = _0x4aa013;
      _0x36d503 = _0x2f3e81 + "/webc/unionOpen/active";
      break;
    case "shareme":
      const _0x1aa25f = {
        activeId: $.activeId,
        joinId: $.joinId
      };
      _0x3bf8e7 = _0x1aa25f;
      _0x36d503 = _0x2f3e81 + "/webc/interact/common/share";
      break;
    case "sharehe":
      const _0x3b701a = {
        activeId: $.activeId,
        joinId: $.joinId,
        shareId: $.shareUuid
      };
      _0x3bf8e7 = _0x3b701a;
      _0x36d503 = _0x2f3e81 + "/webc/unionOpen/share";
      break;
    case "shareau":
      const _0x3df12f = {
        activeId: $.activeId,
        joinId: $.joinId,
        shareId: _0x51015c
      };
      _0x3bf8e7 = _0x3df12f;
      _0x36d503 = _0x2f3e81 + "/webc/unionOpen/share";
      break;
    case "awardList":
      const _0x10fd00 = {
        activeId: $.activeId,
        joinId: $.joinId
      };
      _0x3bf8e7 = _0x10fd00;
      _0x36d503 = _0x2f3e81 + "/webc/interact/common/awardList";
      break;
    case "job":
      const _0x186aba = {
        activeId: $.activeId,
        jobForm: $.jobForm,
        jobDetail: 1,
        joinId: $.joinId
      };
      _0x3bf8e7 = _0x186aba;
      _0x36d503 = _0x2f3e81 + "/webc/unionOpen/job";
      break;
    case "lottery":
      const _0x759c7 = {
        activeId: $.activeId,
        joinId: $.joinId,
        lotteryForm: 0
      };
      _0x3bf8e7 = _0x759c7;
      _0x36d503 = _0x2f3e81 + "/webc/unionOpen/lottery";
      break;
    default:
      console.log("错误" + _0x56a7f1);
  }
  let _0x275085 = _0x5b2fd6(_0x36d503, $.toStr(_0x3bf8e7), _0x5e0097);
  return new Promise(async _0xcbbb8f => {
    $.dpost(_0x275085, async (_0x4383e5, _0x3b3fcc, _0x3f2699) => {
      try {
        if (_0x4383e5) {
          if (_0x3b3fcc && typeof _0x3b3fcc.statusCode != "undefined") {
            if (_0x3b3fcc.statusCode == 493) {
              if (_0x397f0a < 3) {
                _0x397f0a++;
                await _0x2d865b(_0x56a7f1);
                return;
              }
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x4383e5, _0x4383e5));
        } else {
          if (_0x3f2699.includes("doctype") && _0x397f0a < 3) {
            _0x397f0a++;
            await _0x2d865b(_0x56a7f1);
            return;
          }
          _0x397f0a = 0;
          _0x2b096c(_0x56a7f1, _0x3f2699);
        }
      } catch (_0x3db86e) {
        console.log(_0x3db86e, _0x3b3fcc);
      } finally {
        _0xcbbb8f();
      }
    });
  });
}
async function _0x2b096c(_0x138328, _0x5880ab) {
  let _0x43b51b = "";
  try {
    _0x43b51b = JSON.parse(_0x5880ab);
  } catch (_0x5a9255) {
    console.log(_0x138328 + " 执行任务异常");
  }
  try {
    switch (_0x138328) {
      case "login":
        if (_0x43b51b.success) {
          $.wxToken = _0x43b51b.data;
        }
        break;
      case "active":
        if (_0x43b51b.success) {
          $.endTime = _0x43b51b.data.activeVO.endTime || 0;
          $.overTime = _0x43b51b.data.activeVO.overTime || 0;
          $.bindCardInfo = _0x43b51b.data.bindCardInfo || [];
          $.jobMap = _0x43b51b.data.jobMap || [];
          $.activityName = _0x43b51b.data.activeVO.activeTitle;
          $.joinId = _0x43b51b.data.userVO.joinId || "";
          $.point = _0x43b51b.data.userVO.points || 0;
          $.point2 = _0x43b51b.data.userVO.points2 || 0;
          $.showBeanList = _0x43b51b.data.showBeanList;
        }
        break;
      case "shareme":
      case "shareau":
        break;
      case "job":
        if (_0x43b51b.success) {
          console.log("任务完成!");
        } else {
          console.log(_0x43b51b.message);
        }
        break;
      case "sharehe":
        _0x43b51b.success ? $.helpStatus = _0x43b51b.data.helpStatus : console.log(_0x43b51b.message);
        break;
      case "awardList":
        if (_0x43b51b.success) {
          let _0x4331af = [];
          for (let _0x4be6fc of _0x43b51b.data) {
            switch (_0x4be6fc.awardType) {
              case 1:
                _0x4331af.push(_0x4be6fc.awardName.match(/(\d+)京豆/)[1]);
                break;
              default:
                console.log(_0x4be6fc.awardName);
            }
          }
          _0x4331af.length > 0 && console.log("总计获得 " + _0x4331af.reduce((_0x5a8b10, _0x4d1de4) => Number(_0x5a8b10) + Number(_0x4d1de4)) + " 京豆🥔");
        } else {
          console.log(_0x43b51b.message);
        }
        break;
      case "lottery":
        if (_0x43b51b.success === true) {
          if (_0x43b51b.data) {
            switch (_0x43b51b.data.awardType) {
              case 2:
                console.log("垃圾券");
                break;
              case 3:
                console.log("获得实物：" + _0x43b51b.data.awardName + "，去填写地址:\n" + $.acUrl);
                await _0x3106b8.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + _0x43b51b.data.awardName + "，去填写地址:\n" + $.acUrl);
                break;
              case 0:
              case 1:
              default:
                console.log(_0x43b51b.data.awardName);
                break;
            }
          } else {
            console.log("空气💨 ");
          }
        } else {
          console.log(_0x43b51b.message);
        }
        break;
      default:
        console.log(_0x138328 + " -> " + _0x5880ab);
    }
    typeof _0x43b51b == "object" && _0x43b51b.errorMessage && _0x43b51b.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x533841) {
    console.log(_0x138328 + " " + _0x533841);
  }
}
function _0x5b2fd6(_0x41b3b1, _0x11c293, _0x5b8a38 = "POST") {
  const _0x2884a9 = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "jd-fast-token": $.wxToken,
    Host: "szxyun-rc.isvjcloud.com",
    Referer: "https://szxyun-rc.isvjcloud.com/",
    Origin: "https://szxyun-rc.isvjcloud.com",
    "User-Agent": $.UA,
    Cookie: _0x25e0c8
  };
  const _0x162fea = {
    url: _0x41b3b1,
    method: _0x5b8a38,
    headers: _0x2884a9,
    body: _0x11c293,
    timeout: 30000
  };
  return _0x162fea;
}
async function _0x1933eb() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x1a71e8(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x1a71e8(_0x2155f6) {
  _0x2155f6 = _0x2155f6 || 32;
  let _0x44d75c = "abcdef0123456789",
    _0x58498b = _0x44d75c.length,
    _0x285391 = "";
  for (i = 0; i < _0x2155f6; i++) {
    _0x285391 += _0x44d75c.charAt(Math.floor(Math.random() * _0x58498b));
  }
  return _0x285391;
}
async function _0x2a9607() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x26e5a3 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x39d214 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x39d214.activityId;
    const _0x14bd65 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x39d214,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x39d214 = await _0x27c6cb.getbody(_0x14bd65);
    const _0x40e551 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x25e0c8,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x171b01 = {
      url: "https://api.m.jd.com/client.action?" + _0x39d214 + "&uuid=88888",
      headers: _0x40e551,
      timeout: 30000
    };
    $.dget(_0x171b01, async (_0x1ddc42, _0x84c250, _0x39f51f) => {
      try {
        _0x39f51f = _0x39f51f && _0x39f51f.match(/jsonp_.*?\((.*?)\);/) && _0x39f51f.match(/jsonp_.*?\((.*?)\);/)[1] || _0x39f51f;
        let _0x2c9c18 = $.toObj(_0x39f51f, _0x39f51f);
        if (_0x2c9c18 && typeof _0x2c9c18 == "object") {
          if (_0x2c9c18 && _0x2c9c18.success === true) {
            console.log("    " + _0x2c9c18.message);
            $.errorJoinShop = _0x2c9c18.message;
            if (_0x2c9c18.result && _0x2c9c18.result.giftInfo) {
              for (let _0x16e16b of _0x2c9c18.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x16e16b.discountString + _0x16e16b.prizeName + _0x16e16b.secondLineDesc);
              }
            }
          } else {
            _0x2c9c18 && typeof _0x2c9c18 == "object" && _0x2c9c18.message ? ($.errorJoinShop = _0x2c9c18.message, console.log("" + (_0x2c9c18.message || ""))) : console.log(_0x39f51f);
          }
        } else {
          console.log(_0x39f51f);
        }
      } catch (_0x4c8f98) {
        $.logErr(_0x4c8f98, _0x84c250);
      } finally {
        _0x26e5a3();
      }
    });
  });
}
function _0x12c40b(_0x16eb34) {
  if (typeof _0x16eb34 == "string") {
    try {
      return JSON.parse(_0x16eb34);
    } catch (_0x3fe365) {
      console.log(_0x3fe365);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x2a9607() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x2d6699 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x4a6628 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x4a6628.activityId;
    const _0x3285bd = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x4a6628,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x4a6628 = await _0x27c6cb.getbody(_0x3285bd);
    const _0x583290 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x25e0c8,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x591bc1 = {
      url: "https://api.m.jd.com/client.action?" + _0x4a6628 + "&uuid=88888",
      headers: _0x583290,
      timeout: 30000
    };
    $.dget(_0x591bc1, async (_0x3559a0, _0x3548ca, _0x14435d) => {
      try {
        _0x14435d = _0x14435d && _0x14435d.match(/jsonp_.*?\((.*?)\);/) && _0x14435d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x14435d;
        let _0x35a654 = $.toObj(_0x14435d, _0x14435d);
        if (_0x35a654 && typeof _0x35a654 == "object") {
          if (_0x35a654 && _0x35a654.success === true) {
            console.log("    " + _0x35a654.message);
            $.errorJoinShop = _0x35a654.message;
            if (_0x35a654.result && _0x35a654.result.giftInfo) {
              for (let _0x439044 of _0x35a654.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x439044.discountString + _0x439044.prizeName + _0x439044.secondLineDesc);
              }
            }
          } else {
            _0x35a654 && typeof _0x35a654 == "object" && _0x35a654.message ? ($.errorJoinShop = _0x35a654.message, console.log("" + (_0x35a654.message || ""))) : console.log(_0x14435d);
          }
        } else {
          console.log(_0x14435d);
        }
      } catch (_0x8f8f1a) {
        $.logErr(_0x8f8f1a, _0x3548ca);
      } finally {
        _0x2d6699();
      }
    });
  });
}
function _0x3090f0() {
  const _0x2f8d84 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/szxyun0723",
    timeout: 30000
  };
  return new Promise(_0x2d8bac => {
    $.get(_0x2f8d84, async (_0x381c36, _0x4619db, _0x2a2e03) => {
      try {
        if (!_0x381c36) {
          if (_0x2a2e03) {
            _0x2a2e03 = JSON.parse(_0x2a2e03);
            if (_0x2a2e03.code === 200) {
              _0x409e15 = _0x2a2e03.data;
            }
          }
        }
      } catch (_0x4e340a) {} finally {
        _0x2d8bac(_0x409e15);
      }
    });
  });
}
async function _0x100249() {
  return new Promise(async _0x2e9fe3 => {
    const _0x4cb800 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x3671cf = _0x4cb800;
    const _0x168125 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x3671cf,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x3671cf = await _0x27c6cb.getbody(_0x168125);
    const _0x550fdd = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x25e0c8,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x4b9d7e = {
      url: "https://api.m.jd.com/client.action?" + _0x3671cf + "&uuid=88888",
      headers: _0x550fdd,
      timeout: 60000
    };
    $.get(_0x4b9d7e, async (_0x1a118e, _0x4b2f44, _0x596aba) => {
      try {
        _0x596aba = _0x596aba && _0x596aba.match(/jsonp_.*?\((.*?)\);/) && _0x596aba.match(/jsonp_.*?\((.*?)\);/)[1] || _0x596aba;
        let _0x1afba2 = $.toObj(_0x596aba, _0x596aba);
        _0x1afba2 && typeof _0x1afba2 == "object" ? _0x1afba2 && _0x1afba2.success == true && (console.log("去加入 -> " + (_0x1afba2.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x1afba2.result[0].interestsRuleList && _0x1afba2.result[0].interestsRuleList[0] && _0x1afba2.result[0].interestsRuleList[0].interestsInfo && _0x1afba2.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x596aba);
      } catch (_0x556363) {
        $.logErr(_0x556363, _0x4b2f44);
      } finally {
        _0x2e9fe3();
      }
    });
  });
}
function _0x548cec(_0x2f1123, _0x2afdfd) {
  return Math.floor(Math.random() * (_0x2afdfd - _0x2f1123)) + _0x2f1123;
}
function _0x19126c(_0x21a40c = +new Date()) {
  var _0x35513e = new Date(_0x21a40c + 28800000);
  return _0x35513e.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x2f3ce7() {
  return new Promise(_0x10cf4d => {
    const _0xb1ce89 = {
      Cookie: _0x25e0c8,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x327d6e = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0xb1ce89,
      timeout: 10000
    };
    $.get(_0x327d6e, (_0x5d27e4, _0x58508e, _0x2c1dd1) => {
      try {
        if (_0x2c1dd1) {
          _0x2c1dd1 = JSON.parse(_0x2c1dd1);
          if (!(_0x2c1dd1.islogin === "1")) {
            _0x2c1dd1.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5d5d36) {
        console.log(_0x5d5d36);
      } finally {
        _0x10cf4d();
      }
    });
  });
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