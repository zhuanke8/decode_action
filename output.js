//Sun Sep 15 2024 14:24:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("9.5-9.17 中秋团圆夜好礼聚好味");
const _0xb8462 = $.isNode() ? require("./jdCookie.js") : "",
  _0x3e1649 = $.isNode() ? require("./sendNotify") : "",
  _0x503d24 = require("./function/dylank"),
  _0x4c8ed2 = require("./function/dylany"),
  _0x28f6ac = /^-?\d+(\.\d+)?$/.test(process.env.opencard_draw) ? process.env.opencard_draw : "5";
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
let _0x34e088 = [],
  _0xbcdb3c = "",
  _0x30ede6 = 0;
if ($.isNode()) {
  Object.keys(_0xb8462).forEach(_0x3adf62 => {
    _0x34e088.push(_0xb8462[_0x3adf62]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x34e088 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x411a89 => _0x411a89.cookie)].filter(_0x40025c => !!_0x40025c);
}
const _0x4b6dd0 = "https://szxyun-rc.isvjcloud.com";
let _0x3419ba = ["1834393963975077889"],
  _0x101bd9 = [],
  _0x20e66d = [],
  _0x207100 = "";
$.shopId = "1000100710";
$.activeId = "unionOpenZQTYY240905VwBBa6kb";
$.acUrl = "https://szxyun-rc.isvjcloud.com/pagec/unionOpenZQTYY240905/index.html";
!(async () => {
  if (!_0x34e088[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  await _0x3814ae();
  _0x20e66d = _0x101bd9.length != 0 ? _0x101bd9 : _0x3419ba;
  _0x207100 = _0x20e66d[_0x3c82bb(0, _0x20e66d.length)];
  $.shareUuid = _0x207100;
  $.log("\n自测有无水！！！");
  console.log("环境变量（非必须）：");
  $.log("默认抽奖5次，opencard_draw='6'");
  $.log("代理API，DY_PROXY='apiurl'");
  for (let _0x5a6497 = 0; _0x5a6497 < _0x34e088.length; _0x5a6497++) {
    _0xbcdb3c = _0x34e088[_0x5a6497];
    originCookie = _0x34e088[_0x5a6497];
    if (_0xbcdb3c) {
      $.UserName = decodeURIComponent(_0xbcdb3c.match(/pt_pin=([^; ]+)(?=;?)/) && _0xbcdb3c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x5a6497 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      _0x5d0c5c();
      await _0x52e0e2();
      if (!$.isLogin) {
        const _0x4a7dc4 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x4a7dc4);
        $.isNode() && (await _0x3e1649.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await _0x3a3887();
      if ($.outFlag) {
        console.log("此ip已被限制，请过10分钟后再执行脚本\n");
        return;
      }
      if ($.activityEnd) {
        return;
      }
    }
  }
})().catch(_0x581fa1 => {
  return $.logErr(_0x581fa1);
}).finally(() => {
  return $.done();
});
async function _0x3a3887() {
  try {
    $.jdToken = "";
    $.wxToken = "";
    $.joinId = "";
    $.jdToken = await _0x503d24(_0xbcdb3c, _0x4b6dd0);
    if (!$.jdToken) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    await _0x558bd5("login");
    if (!$.wxToken) {
      console.log("❌ 登录失败");
      return;
    }
    await _0x558bd5("active");
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
    await _0x558bd5("shareme");
    console.log("\n去开卡(" + $.bindCardInfo.length + "个店铺)...");
    for (let _0x3c237f of $.bindCardInfo) {
      if (_0x3c237f.isBindCard) {
        continue;
      }
      $.joinVenderId = _0x3c237f.openUrl.match(/venderId=(\d+)&/)[1];
      for (let _0x1af8b6 of Array(3)) {
        await _0x2616b0();
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
    for (let _0x12bdfb in $.jobMap) {
      $.de = "";
      switch (_0x12bdfb) {
        case "addCart":
          break;
        case "followShop":
          console.log("一键关注...");
          $.de = $.jobMap[_0x12bdfb].done;
          $.jobForm = $.jobMap[_0x12bdfb].jobForm;
          break;
        default:
          console.log("无匹任务");
          break;
      }
      if ($.de === "") {
        continue;
      }
      $.de ? console.log("已完成！") : await _0x558bd5("job");
    }
    await _0x558bd5("active");
    await _0x558bd5("sharehe");
    if (_0x101bd9.length > 0) {
      for (let _0x23d698 = 0; _0x23d698 < _0x20e66d.length; _0x23d698++) {
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        _0x207100 = _0x20e66d[_0x23d698];
        await _0x558bd5("shareau");
      }
    }
    let _0x2edcb1 = Math.min.apply(null, [$.point2, _0x28f6ac]);
    console.log("\n去抽奖(" + _0x2edcb1 + "次)...");
    for (let _0x5bc2e9 of Array(_0x2edcb1)) {
      await _0x558bd5("lottery");
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
    await _0x558bd5("awardList");
    $.point > 0 && console.log("已邀请：" + $.point);
    $.index == 1 && ($.shareUuid = $.joinId, console.log("后面的号都会助力 -> " + $.shareUuid));
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x49d2e1) {
    console.log(_0x49d2e1);
  }
}
async function _0x558bd5(_0x5b0400) {
  if ($.outFlag) {
    return;
  }
  let _0x350c26 = "",
    _0x179aba = "POST",
    _0x201437;
  switch (_0x5b0400) {
    case "login":
      const _0x1915b3 = {
        shopId: $.shopId,
        token: $.jdToken,
        source: "01"
      };
      _0x350c26 = _0x1915b3;
      _0x201437 = _0x4b6dd0 + "/webc/login/userLogin";
      break;
    case "active":
      const _0x5c6e0d = {
        activeId: $.activeId,
        shareId: $.shareUuid || null
      };
      _0x350c26 = _0x5c6e0d;
      _0x201437 = _0x4b6dd0 + "/webc/unionOpen/active";
      break;
    case "shareme":
      const _0x508826 = {
        activeId: $.activeId,
        joinId: $.joinId
      };
      _0x350c26 = _0x508826;
      _0x201437 = _0x4b6dd0 + "/webc/interact/common/share";
      break;
    case "sharehe":
      const _0x241b49 = {
        activeId: $.activeId,
        joinId: $.joinId,
        shareId: $.shareUuid
      };
      _0x350c26 = _0x241b49;
      _0x201437 = _0x4b6dd0 + "/webc/unionOpen/share";
      break;
    case "shareau":
      const _0x1ceadd = {
        activeId: $.activeId,
        joinId: $.joinId,
        shareId: _0x207100
      };
      _0x350c26 = _0x1ceadd;
      _0x201437 = _0x4b6dd0 + "/webc/unionOpen/share";
      break;
    case "awardList":
      const _0x27b3a4 = {
        activeId: $.activeId,
        joinId: $.joinId
      };
      _0x350c26 = _0x27b3a4;
      _0x201437 = _0x4b6dd0 + "/webc/interact/common/awardList";
      break;
    case "job":
      const _0x36d0d1 = {
        activeId: $.activeId,
        jobForm: $.jobForm,
        jobDetail: 1,
        joinId: $.joinId
      };
      _0x350c26 = _0x36d0d1;
      _0x201437 = _0x4b6dd0 + "/webc/unionOpen/job";
      break;
    case "lottery":
      const _0x46f27a = {
        activeId: $.activeId,
        joinId: $.joinId,
        lotteryForm: 0
      };
      _0x350c26 = _0x46f27a;
      _0x201437 = _0x4b6dd0 + "/webc/unionOpen/lottery";
      break;
    default:
      console.log("错误" + _0x5b0400);
  }
  let _0x1ad20b = _0x2501ca(_0x201437, $.toStr(_0x350c26), _0x179aba);
  return new Promise(async _0x3e6cbe => {
    $.dpost(_0x1ad20b, async (_0x24fae0, _0x2881d9, _0x2debc4) => {
      try {
        if (_0x24fae0) {
          if (_0x2881d9 && typeof _0x2881d9.statusCode != "undefined") {
            if (_0x2881d9.statusCode == 493) {
              if (_0x30ede6 < 3) {
                _0x30ede6++;
                await _0x558bd5(_0x5b0400);
                return;
              }
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x24fae0, _0x24fae0));
        } else {
          if (_0x2debc4.includes("doctype") && _0x30ede6 < 3) {
            _0x30ede6++;
            await _0x558bd5(_0x5b0400);
            return;
          }
          _0x30ede6 = 0;
          _0x81263d(_0x5b0400, _0x2debc4);
        }
      } catch (_0x5cbea9) {
        console.log(_0x5cbea9, _0x2881d9);
      } finally {
        _0x3e6cbe();
      }
    });
  });
}
async function _0x81263d(_0x7d0c7, _0x462d71) {
  let _0x546fc8 = "";
  try {
    _0x546fc8 = JSON.parse(_0x462d71);
  } catch (_0x1bd32b) {
    console.log(_0x7d0c7 + " 执行任务异常");
  }
  try {
    switch (_0x7d0c7) {
      case "login":
        if (_0x546fc8.success) {
          $.wxToken = _0x546fc8.data;
        }
        break;
      case "active":
        if (_0x546fc8.success) {
          $.endTime = _0x546fc8.data.activeVO.endTime || 0;
          $.overTime = _0x546fc8.data.activeVO.overTime || 0;
          $.bindCardInfo = _0x546fc8.data.bindCardInfo || [];
          $.jobMap = _0x546fc8.data.jobMap || [];
          $.activityName = _0x546fc8.data.activeVO.activeTitle;
          $.joinId = _0x546fc8.data.userVO.joinId || "";
          $.point = _0x546fc8.data.userVO.points || 0;
          $.point2 = _0x546fc8.data.userVO.points2 || 0;
          $.showBeanList = _0x546fc8.data.showBeanList;
        }
        break;
      case "shareme":
      case "shareau":
        break;
      case "job":
        if (_0x546fc8.success) {
          console.log("任务完成!");
        } else {
          console.log(_0x546fc8.message);
        }
        break;
      case "sharehe":
        _0x546fc8.success ? $.helpStatus = _0x546fc8.data.helpStatus : console.log(_0x546fc8.message);
        break;
      case "awardList":
        if (_0x546fc8.success) {
          let _0x390a0c = [];
          for (let _0x2c19ef of _0x546fc8.data) {
            switch (_0x2c19ef.awardType) {
              case 1:
                _0x390a0c.push(_0x2c19ef.awardName.match(/(\d+)京豆/)[1]);
                break;
              default:
                console.log(_0x2c19ef.awardName);
            }
          }
          _0x390a0c.length > 0 && console.log("总计获得 " + _0x390a0c.reduce((_0x2a6842, _0x3dc13d) => Number(_0x2a6842) + Number(_0x3dc13d)) + " 京豆🥔");
        } else {
          console.log(_0x546fc8.message);
        }
        break;
      case "lottery":
        if (_0x546fc8.success === true) {
          if (_0x546fc8.data) {
            switch (_0x546fc8.data.awardType) {
              case 2:
                console.log("垃圾券");
                break;
              case 3:
                console.log("获得实物：" + _0x546fc8.data.awardName + "，去填写地址:\n" + $.acUrl);
                await _0x3e1649.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + _0x546fc8.data.awardName + "，去填写地址:\n" + $.acUrl);
                break;
              case 0:
              case 1:
              default:
                console.log(_0x546fc8.data.awardName);
                break;
            }
          } else {
            console.log("空气💨 ");
          }
        } else {
          console.log(_0x546fc8.message);
        }
        break;
      default:
        console.log(_0x7d0c7 + " -> " + _0x462d71);
    }
    if (typeof _0x546fc8 == "object") {
      if (_0x546fc8.errorMessage) {
        if (_0x546fc8.errorMessage.indexOf("火爆") > -1) {
          $.hotFlag = true;
        }
      }
    }
  } catch (_0x5b44ae) {
    console.log(_0x7d0c7 + " " + _0x5b44ae);
  }
}
function _0x2501ca(_0x3ee9bc, _0x4c4399, _0x41e985 = "POST") {
  const _0xb9ec65 = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "jd-fast-token": $.wxToken,
    Host: "szxyun-rc.isvjcloud.com",
    Referer: "https://szxyun-rc.isvjcloud.com/",
    Origin: "https://szxyun-rc.isvjcloud.com",
    "User-Agent": $.UA,
    Cookie: _0xbcdb3c
  };
  const _0x2479d3 = {
    url: _0x3ee9bc,
    method: _0x41e985,
    headers: _0xb9ec65,
    body: _0x4c4399,
    timeout: 30000
  };
  return _0x2479d3;
}
async function _0x5d0c5c() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x4bb7e2(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x4bb7e2(_0x541d53) {
  _0x541d53 = _0x541d53 || 32;
  let _0x49cc28 = "abcdef0123456789",
    _0x50c454 = _0x49cc28.length,
    _0x4d0333 = "";
  for (i = 0; i < _0x541d53; i++) {
    _0x4d0333 += _0x49cc28.charAt(Math.floor(Math.random() * _0x50c454));
  }
  return _0x4d0333;
}
async function _0x2616b0() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x13ba50 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x56e8eb = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x56e8eb.activityId;
    const _0x4f5f69 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x56e8eb,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x56e8eb = await _0x4c8ed2.getbody(_0x4f5f69);
    const _0x4b6659 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0xbcdb3c,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x4cec2b = {
      url: "https://api.m.jd.com/client.action?" + _0x56e8eb + "&uuid=88888",
      headers: _0x4b6659,
      timeout: 30000
    };
    $.dget(_0x4cec2b, async (_0x2a6656, _0x2bfdc4, _0x1b9662) => {
      try {
        _0x1b9662 = _0x1b9662 && _0x1b9662.match(/jsonp_.*?\((.*?)\);/) && _0x1b9662.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1b9662;
        let _0x2fe65d = $.toObj(_0x1b9662, _0x1b9662);
        if (_0x2fe65d && typeof _0x2fe65d == "object") {
          if (_0x2fe65d && _0x2fe65d.success === true) {
            console.log("    " + _0x2fe65d.message);
            $.errorJoinShop = _0x2fe65d.message;
            if (_0x2fe65d.result && _0x2fe65d.result.giftInfo) {
              for (let _0x51c4b1 of _0x2fe65d.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x51c4b1.discountString + _0x51c4b1.prizeName + _0x51c4b1.secondLineDesc);
              }
            }
          } else {
            _0x2fe65d && typeof _0x2fe65d == "object" && _0x2fe65d.message ? ($.errorJoinShop = _0x2fe65d.message, console.log("" + (_0x2fe65d.message || ""))) : console.log(_0x1b9662);
          }
        } else {
          console.log(_0x1b9662);
        }
      } catch (_0x17778f) {
        $.logErr(_0x17778f, _0x2bfdc4);
      } finally {
        _0x13ba50();
      }
    });
  });
}
function _0x9c3732(_0x3dd64d) {
  if (typeof _0x3dd64d == "string") {
    try {
      return JSON.parse(_0x3dd64d);
    } catch (_0x1f8d48) {
      console.log(_0x1f8d48);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x2616b0() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x9f2fc7 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x28de00 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x28de00.activityId;
    const _0x597d50 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x28de00,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x28de00 = await _0x4c8ed2.getbody(_0x597d50);
    const _0x55cc87 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0xbcdb3c,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0xb4c138 = {
      url: "https://api.m.jd.com/client.action?" + _0x28de00 + "&uuid=88888",
      headers: _0x55cc87,
      timeout: 30000
    };
    $.dget(_0xb4c138, async (_0x11c07f, _0x2cd593, _0x5280dd) => {
      try {
        _0x5280dd = _0x5280dd && _0x5280dd.match(/jsonp_.*?\((.*?)\);/) && _0x5280dd.match(/jsonp_.*?\((.*?)\);/)[1] || _0x5280dd;
        let _0x12bdc7 = $.toObj(_0x5280dd, _0x5280dd);
        if (_0x12bdc7 && typeof _0x12bdc7 == "object") {
          if (_0x12bdc7 && _0x12bdc7.success === true) {
            console.log("    " + _0x12bdc7.message);
            $.errorJoinShop = _0x12bdc7.message;
            if (_0x12bdc7.result && _0x12bdc7.result.giftInfo) {
              for (let _0x56efd6 of _0x12bdc7.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x56efd6.discountString + _0x56efd6.prizeName + _0x56efd6.secondLineDesc);
              }
            }
          } else {
            if (_0x12bdc7 && typeof _0x12bdc7 == "object" && _0x12bdc7.message) {
              $.errorJoinShop = _0x12bdc7.message;
              console.log("" + (_0x12bdc7.message || ""));
            } else {
              console.log(_0x5280dd);
            }
          }
        } else {
          console.log(_0x5280dd);
        }
      } catch (_0x4f81ec) {
        $.logErr(_0x4f81ec, _0x2cd593);
      } finally {
        _0x9f2fc7();
      }
    });
  });
}
function _0x3814ae() {
  const _0x1d249e = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/szxyun0723",
    timeout: 30000
  };
  return new Promise(_0x48b3b7 => {
    $.get(_0x1d249e, async (_0x154d59, _0x4ecc4e, _0x56fa64) => {
      try {
        if (!_0x154d59) {
          if (_0x56fa64) {
            _0x56fa64 = JSON.parse(_0x56fa64);
            if (_0x56fa64.code === 200) {
              _0x101bd9 = _0x56fa64.data;
            }
          }
        }
      } catch (_0x8f2a42) {} finally {
        _0x48b3b7(_0x101bd9);
      }
    });
  });
}
async function _0x23f9be() {
  return new Promise(async _0x31309f => {
    const _0xf4274b = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x348a93 = _0xf4274b;
    const _0x5cd36e = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x348a93,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x348a93 = await _0x4c8ed2.getbody(_0x5cd36e);
    const _0x45257f = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0xbcdb3c,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x3863f5 = {
      url: "https://api.m.jd.com/client.action?" + _0x348a93 + "&uuid=88888",
      headers: _0x45257f,
      timeout: 60000
    };
    $.get(_0x3863f5, async (_0x54d13f, _0xd707c3, _0x1da6ee) => {
      try {
        _0x1da6ee = _0x1da6ee && _0x1da6ee.match(/jsonp_.*?\((.*?)\);/) && _0x1da6ee.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1da6ee;
        let _0x179d73 = $.toObj(_0x1da6ee, _0x1da6ee);
        _0x179d73 && typeof _0x179d73 == "object" ? _0x179d73 && _0x179d73.success == true && (console.log("去加入 -> " + (_0x179d73.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x179d73.result[0].interestsRuleList && _0x179d73.result[0].interestsRuleList[0] && _0x179d73.result[0].interestsRuleList[0].interestsInfo && _0x179d73.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x1da6ee);
      } catch (_0x561b04) {
        $.logErr(_0x561b04, _0xd707c3);
      } finally {
        _0x31309f();
      }
    });
  });
}
function _0x3c82bb(_0x51711c, _0x1788d2) {
  return Math.floor(Math.random() * (_0x1788d2 - _0x51711c)) + _0x51711c;
}
function _0x51503d(_0x35c40b = +new Date()) {
  var _0x3b174c = new Date(_0x35c40b + 28800000);
  return _0x3b174c.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x52e0e2() {
  return new Promise(_0x536483 => {
    const _0x1a39de = {
      Cookie: _0xbcdb3c,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5121eb = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x1a39de,
      timeout: 10000
    };
    $.get(_0x5121eb, (_0x1d19e4, _0x445c61, _0x50552a) => {
      try {
        if (_0x50552a) {
          _0x50552a = JSON.parse(_0x50552a);
          if (!(_0x50552a.islogin === "1")) {
            if (_0x50552a.islogin === "0") {
              $.isLogin = false;
            }
          }
        }
      } catch (_0x3abfb2) {
        console.log(_0x3abfb2);
      } finally {
        _0x536483();
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