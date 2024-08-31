//Sat Aug 31 2024 15:04:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大牌0830");
const _0x2512aa = $.isNode() ? require("./jdCookie.js") : "",
  _0x3e39a5 = $.isNode() ? require("./sendNotify") : "",
  _0x323a49 = require("crypto-js"),
  _0x38c692 = require("./function/dylank"),
  _0x4983a3 = require("./function/dylany"),
  _0x14e2f8 = require("./function/dylib.js");
let _0x31da5c = [],
  _0x1cfff6 = "",
  _0x3588ad = "",
  _0x50f312 = "",
  _0x4471be = "3";
if (process.env.DY_PROXY) {
  const _0x348864 = require("./function/proxy.js");
  $.get = _0x348864.intoRequest($.get.bind($));
  $.post = _0x348864.intoRequest($.post.bind($));
}
if ($.isNode()) {
  Object.keys(_0x2512aa).forEach(_0x165f03 => {
    _0x31da5c.push(_0x2512aa[_0x165f03]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x31da5c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x287ac6 => _0x287ac6.cookie)].filter(_0x3e8712 => !!_0x3e8712);
}
let _0x2ffa63 = process.env.DPLH_BSHOP || "false",
  _0x462172 = process.env.DPLH_OPENCARD || "true",
  _0x311535 = "https://jinggengjcq-isv.isvjcloud.com";
$.Url = " https://jinggengjcq-isv.isvjcloud.com/jdbeverage/pages/oC20240612dda/oC20240612dda?actId=5ec3ae9a02ed48ab9f3736c_240830";
$.bianh = $.Url.match(/oC[0-9a-z]+/)[0];
$.actId = $.Url.match(/actId=([0-9a-f]+_\d+)/)[1];
$.appkey = "94854284";
$.userId = "10299171";
$.outFlag = false;
let _0x22b28b = ["OsiH6Sic/uTxioPBG6hh5K9AMkY4oJ31vhy6nI5LWbOiIw7XUQOP/Btn03/M1TYH"];
$.inviteNick = _0x22b28b[_0x1c115a(0, _0x22b28b.length)];
$.awardId = process.env.DPLH_AWID || "";
$.bwater = false;
!(async () => {
  $.log("\n💬 有水的时候跑，浏览店铺任务每天刷新");
  $.log("💬 代理API，DY_PROXY='url'");
  $.log("💬 默认开卡，关闭DPLH_OPENCARD='false'");
  if (!_0x31da5c[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  for (let _0xa3c47 = 0; _0xa3c47 < _0x31da5c.length; _0xa3c47++) {
    _0x1cfff6 = _0x31da5c[_0xa3c47];
    if (_0x1cfff6) {
      $.UserName = decodeURIComponent(_0x1cfff6.match(/pt_pin=([^; ]+)(?=;?)/) && _0x1cfff6.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xa3c47 + 1;
      $.bean = 0;
      $.nickName = "";
      _0x2c42ba();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      await _0x32a412();
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
      if ($.outFlag) {
        break;
      }
    }
  }
  if ($.outFlag) {
    let _0x220d79 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x220d79);
    if ($.isNode()) {
      await _0x3e39a5.sendNotify("" + $.name, "" + _0x220d79);
    }
  }
})().catch(_0x4afdef => $.logErr(_0x4afdef)).finally(() => $.done());
async function _0x32a412() {
  try {
    $.okFlag = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.MixNick = "";
    $.openList = [];
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    $.Token = await _0x38c692(_0x1cfff6, _0x311535);
    if (!$.Token) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    for (let _0x1ea63c = 0; _0x1ea63c < _0x4471be; _0x1ea63c++) {
      await _0x1483fc("activity_load");
      if ($.okFlag) {
        break;
      }
    }
    if ($.MixNick == "") {
      return;
    }
    if ($.endTime < Date.now()) {
      $.log("活动已结束!!!");
      process.exit();
    } else {
      $.sTime > Date.now() ? ($.log("活动未开始!!!"), process.exit()) : $.index == 1 && console.log("活动结束时间：" + _0x326c67($.endTime));
    }
    for (let _0x5020ba = 0; _0x5020ba < _0x4471be; _0x5020ba++) {
      await _0x1483fc("绑定");
      if ($.okFlag) {
        break;
      }
    }
    for (let _0xeaa848 = 0; _0xeaa848 < _0x4471be; _0xeaa848++) {
      await _0x1483fc("shopList");
      if ($.okFlag) {
        break;
      }
    }
    if ($.offList.length != 0) {
      $.log("总共" + $.openList.length + "个店铺，还需开卡" + $.offList.length + "个");
      if (_0x462172 !== "false") {
        $.log("\n去开卡...");
        for (let _0x59c39d of $.openList) {
          $.missionType = "openCard";
          if (_0x59c39d.open != true && _0x59c39d.openCardUrl) {
            $.openCard = false;
            $.joinVenderId = _0x59c39d.userId;
            for (let _0x2d7ce2 = 0; _0x2d7ce2 < _0x4471be; _0x2d7ce2++) {
              await _0x1483fc("mission");
              if ($.okFlag) {
                break;
              }
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            if ($.openCard == true) {
              $.errorJoinShop = "";
              await _0x2a4ce5();
              if ($.errorJoinShop.indexOf("您的手机号已被其他账号绑定本店会员，请先登陆原账号解绑") > -1) {
                return;
              }
              $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 && (console.log("😤 呜呜呜，重试开卡"), await $.wait(1000), await _0x2a4ce5(), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
                console.log("💔 无法开卡,跳过运行");
                return;
              }
              for (let _0x51eaf2 = 0; _0x51eaf2 < _0x4471be; _0x51eaf2++) {
                await _0x1483fc("activity_load");
                if ($.okFlag) {
                  break;
                }
              }
              for (let _0x192a99 = 0; _0x192a99 < _0x4471be; _0x192a99++) {
                await _0x1483fc("shopList");
                if ($.okFlag) {
                  break;
                }
              }
            }
          }
        }
      } else {
        console.log("\n🔊 已设置不开卡,也无法助力哦!");
      }
    } else {
      $.log("\n🔊 已全部开卡!");
    }
    if ($.hasCollectShop === 0) {
      $.missionType = "uniteCollectShop";
      for (let _0x565d11 = 0; _0x565d11 < _0x4471be; _0x565d11++) {
        await _0x1483fc("mission");
        if ($.okFlag) {
          break;
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    } else {
      console.log("\n🔊 已完成关注任务!");
    }
    if (process.env.DPLH_ADDCAR == "true") {
      $.log("\n去一键加购...");
      if ($.hasAddCart === 0) {
        $.missionType = "uniteAddCart";
        for (let _0x4057d4 = 0; _0x4057d4 < _0x4471be; _0x4057d4++) {
          await _0x1483fc("mission");
          if ($.okFlag) {
            break;
          }
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      } else {
        console.log("\n🔊 已完成加购任务!");
      }
    } else {
      console.log("\n🔊 默认不做加购任务，可设置变量DPLH_ADDCAR='true'开启");
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if (!$.nowater || 1) {
      if (_0x2ffa63 == "true") {
        $.nojifen = false;
        $.nobeans = false;
        $.log("\n去浏览店铺...");
        $.missionType = "viewShop";
        if (!$.bwater) {
          let _0x278bf0 = _0x14e2f8.getRandomEle($.openList, 1);
          $.goodsNumId = _0x278bf0[0].userId;
          await _0x1483fc("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.nojifen && $.nobeans) {
            console.log("可能没水,换个时间再试试");
          } else {
            for (let _0x313aa7 of $.openList) {
              $.goodsNumId = _0x313aa7.userId;
              await _0x1483fc("mission");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            $.bwater = true;
          }
        } else {
          for (let _0x397cff of $.openList) {
            $.goodsNumId = _0x397cff.userId;
            await _0x1483fc("mission");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
        }
      } else {
        console.log("\n默认不做浏览店铺，设置变量DPLH_BSHOP='true'");
      }
    }
    await _0x1483fc("myAward");
    await _0x1483fc("inviteList");
    $.index == 1 && _0x462172 !== "false" && ($.inviteNick = $.MixNick, console.log("\n车头助力作者，后面都会助力 -> " + $.UserName));
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  } catch (_0x5eb812) {
    console.log(_0x5eb812);
  }
}
async function _0x1483fc(_0xed73d8) {
  if ($.outFlag) {
    return;
  }
  let _0x29ee40 = "https://jinggengjcq-isv.isvjcloud.com",
    _0x3251f7 = "",
    _0x44342e = "POST",
    _0x3e05ca = "";
  switch (_0xed73d8) {
    case "activity_load":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x3c19e7 = {
        jdToken: $.Token,
        source: "01",
        ak: "",
        sk: "",
        inviteNick: $.inviteNick || ""
      };
      _0x3e05ca = _0x3c19e7;
      if ($.joinVenderId) {
        _0x3e05ca = {
          ..._0x3e05ca,
          shopId: "" + $.joinVenderId
        };
      }
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/activity/load", _0x3e05ca);
      break;
    case "shopList":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      _0x3e05ca = {};
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/shop/shopList", _0x3e05ca);
      break;
    case "绑定":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x1917a3 = {
        inviterNick: $.inviteNick || ""
      };
      _0x3e05ca = _0x1917a3;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/customer/inviteRelation", _0x3e05ca);
      break;
    case "mission":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x3f459e = {
        missionType: $.missionType
      };
      _0x3e05ca = _0x3f459e;
      if ($.joinVenderId) {
        _0x3e05ca = {
          ..._0x3e05ca,
          shopId: $.joinVenderId
        };
      }
      if ($.goodsId) {
        _0x3e05ca = {
          ..._0x3e05ca,
          goodsId: $.goodsId
        };
      }
      if ($.goodsNumId) {
        _0x3e05ca = {
          ..._0x3e05ca,
          goodsNumId: $.goodsNumId
        };
      }
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/mission/completeMission", _0x3e05ca);
      break;
    case "抽奖":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/interactive/drawPos?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x52062d = {
        dataType: "draw",
        usedGameNum: "2"
      };
      _0x3e05ca = _0x52062d;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/interactive/drawPos", _0x3e05ca);
      break;
    case "followShop":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/followShop?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x5a6307 = {
        actId: $.actId,
        missionType: "collectShop"
      };
      _0x3e05ca = _0x5a6307;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/followShop", _0x3e05ca);
      break;
    case "getAwardSettingList":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x4727b1 = {
        dataType: "exchange"
      };
      _0x3e05ca = _0x4727b1;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/awards/getAwardSettingList", _0x3e05ca);
      break;
    case "exchangePost":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x346035 = {
        dataType: "exchange",
        awardId: $.awardId
      };
      _0x3e05ca = _0x346035;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/interactive/exchangePost", _0x3e05ca);
      break;
    case "addCart":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/addCart?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x249216 = {
        actId: $.actId,
        missionType: "addCart"
      };
      _0x3e05ca = _0x249216;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/addCart", _0x3e05ca);
      break;
    case "myAward":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x47f10c = {
        passes: "",
        pageNo: 1,
        pageSize: 9999
      };
      _0x3e05ca = _0x47f10c;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/awards/list", _0x3e05ca);
      break;
    case "inviteList":
      url = _0x29ee40 + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x19fe1a = {
        missionType: "shareAct",
        pageNo: 1,
        pageSize: 10
      };
      _0x3e05ca = _0x19fe1a;
      _0x3251f7 = _0x1d64a0("/jdJoinCardtf/customer/inviteList", _0x3e05ca);
      break;
    default:
      console.log("错误" + _0xed73d8);
  }
  let _0x48af88 = _0x1737e8(url, _0x3251f7, _0x44342e);
  return new Promise(async _0x2ec506 => {
    $.post(_0x48af88, (_0x5aedf8, _0x246e5a, _0x427556) => {
      try {
        if (_0x5aedf8) {
          _0x246e5a && _0x246e5a.statusCode && _0x246e5a.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true);
          $.okFlag = false;
        } else {
          _0x10fbb4(_0xed73d8, _0x427556);
        }
      } catch (_0x5c826e) {
        console.log(_0x5c826e, _0x246e5a);
      } finally {
        _0x2ec506();
      }
    });
  });
}
function _0x25be81(_0x34441c) {
  let _0x5b6b93 = "";
  switch (_0x34441c) {
    case "bdy_0x154ed0":
      const _0x123080 = {
        bdy_0x154ed0: _0x123080
      };
      _0x5b6b93 = _0x123080;
      break;
    case "bdy_0x2c605c":
      const _0x518a69 = {
        bdy_0x2c605c: _0x518a69
      };
      _0x5b6b93 = _0x518a69;
      break;
    case "bdy_0x5ade7a":
      const _0x4daf59 = {
        bdy_0x5ade7a: _0x4daf59
      };
      _0x5b6b93 = _0x4daf59;
      break;
  }
}
async function _0x10fbb4(_0xea03c0, _0x108570) {
  let _0x5d4dce = "";
  try {
    $.okFlag = true;
    (_0xea03c0 != "accessLogWithAD" || _0xea03c0 != "drawContent") && (_0x5d4dce = JSON.parse(_0x108570));
  } catch (_0x35d586) {
    console.log("🤬 " + _0xea03c0 + " 数据异常");
    $.runFalag = false;
  }
  try {
    switch (_0xea03c0) {
      case "accessLogWithAD":
      case "drawContent":
      case "绑定":
        break;
      case "shopList":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          _0x5d4dce.data.status == 200 && ($.openList = _0x5d4dce.data.data || [], $.offList = $.openList.filter(_0x38196b => !_0x38196b.open));
        }
        break;
      case "getAwardSettingList":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          if (_0x5d4dce.data?.["status"] == 200) {
            _0x5d4dce = _0x5d4dce.data;
            for (let _0x40474d of _0x5d4dce.data.awardSettings) {
              console.log(_0x40474d.awardName + ": id(" + _0x40474d.id + ")--库存(" + _0x40474d.remainNum + ")--需积分(" + _0x40474d.awardDes + ")--" + _0x40474d.exchangeFlag);
            }
          } else {
            $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
          }
        }
        break;
      case "exchangePost":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          _0x5d4dce.data?.["status"] == 200 ? (_0x5d4dce = _0x5d4dce.data, $.log("兑换成功：" + _0x5d4dce.data.awardSendLog.awardName), _0x5d4dce.data.awardSendLog.awardType == "goods" && $.log("实物请手动填地址：" + $.Url)) : $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
        }
        break;
      case "activity_load":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          if (_0x5d4dce.data?.["status"] == 200) {
            _0x5d4dce = _0x5d4dce.data;
            if (_0x5d4dce.msg || _0x5d4dce.data.isOpenCard) {
              if ((_0x5d4dce.msg || _0x5d4dce.data.isOpenCard || "").indexOf("绑定成功") > -1) {
                $.toBind = 1;
              }
            }
            $.endTime = _0x5d4dce.data.cusActivity.endTime || 0;
            $.sTime = _0x5d4dce.data.cusActivity.startTime || 0;
            $.MixNick = _0x5d4dce.data.missionCustomer.buyerNick || "";
            $.usedChance = _0x5d4dce.data.missionCustomer.usedChance || 0;
            $.hasCollectShop = _0x5d4dce.data.missionCustomer.hasCollectShop || 0;
            $.hasAddCart = _0x5d4dce.data.missionCustomer.hasAddCart || 0;
            $.remainPoint = _0x5d4dce.data.missionCustomer.remainPoint || 0;
            $.totalPoint = _0x5d4dce.data.missionCustomer.totalPoint || 0;
            if (_0x5d4dce.data.openCardMsg) {
              console.log("🔊 " + _0x5d4dce.data.openCardMsg);
            }
          } else {
            $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
          }
        } else {
          console.log(_0x108570);
        }
        break;
      case "mission":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          if (_0x5d4dce.data?.["status"] == 200) {
            _0x5d4dce = _0x5d4dce.data;
            if (_0x5d4dce.msg || _0x5d4dce.data.isOpenCard || _0x5d4dce.data.remark) {
              console.log("🔊 " + (_0x5d4dce.msg || _0x5d4dce.data.isOpenCard || _0x5d4dce.data.remark || ""));
            }
            $.openCard = _0x5d4dce.data.remark.includes("不是会员") ? true : false;
            $.nojifen = !_0x5d4dce.data.remark.includes("积分") ? true : false;
            $.nobeans = !_0x5d4dce.data.remark.includes("京豆") ? true : false;
          } else {
            $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
          }
        } else {
          console.log(_0x108570);
        }
        break;
      case "inviteList":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          if (_0x5d4dce.data?.["status"] == 200) {
            _0x5d4dce = _0x5d4dce.data;
            _0x5d4dce.data.inviteNum > 0 && console.log("\n已邀请：" + _0x5d4dce.data.inviteNum);
          } else {
            $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
          }
        } else {
          console.log(_0x108570);
        }
        break;
      case "myAward":
        if (_0x5d4dce.success === true && _0x5d4dce.data) {
          if (_0x5d4dce.data?.["status"] == 200) {
            _0x5d4dce = _0x5d4dce.data;
            let _0x42710e = 0;
            try {
              _0x42710e = eval(_0x108570.match(/\d+个?京豆/g).map(_0x778a57 => _0x778a57.replace(/[\u4e00-\u9fa5]/g, "")).join("+"));
            } catch {}
            _0x42710e > 0 && console.log("\n共获得 " + _0x42710e + " 京豆🥔");
          } else {
            $.log("" + (_0x5d4dce.errorMessage || _0x5d4dce.data.msg));
          }
        } else {
          console.log(_0x108570);
        }
        break;
      default:
        console.log(_0xea03c0 + "-> " + _0x108570);
    }
    if (typeof _0x5d4dce == "object") {
      if (_0x5d4dce.errorMessage) {
        _0x5d4dce.errorMessage.indexOf("火爆") > -1;
      }
    }
  } catch {}
}
function _0x1737e8(_0x368b7b, _0x218d7b, _0x365ba3 = "POST") {
  const _0x318fb3 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: _0x1cfff6,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  _0x368b7b.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1 && (_0x318fb3.Origin = "https://jinggengjcq-isv.isvjcloud.com", _0x318fb3["Content-Type"] = "application/json; charset=utf-8", delete _0x318fb3.Cookie);
  return {
    url: _0x368b7b,
    method: _0x365ba3,
    headers: _0x318fb3,
    body: _0x218d7b,
    timeout: 10000
  };
}
function _0x1d64a0(_0x31cd03, _0x33e770) {
  const _0x31ce01 = {
    actId: $.actId,
    ..._0x33e770,
    method: _0x31cd03,
    userId: $.userId,
    buyerNick: $.MixNick || ""
  };
  d = _0x31ce01;
  sign2 = _0x3844a6(d);
  const _0x2b6572 = {
    jsonRpc: "2.0",
    params: {}
  };
  _0x2b6572.params.commonParameter = {};
  _0x2b6572.params.admJson = d;
  _0x2b6572.params.commonParameter.m = "POST";
  _0x2b6572.params.commonParameter.oba = sign2.sign;
  _0x2b6572.params.commonParameter.timestamp = sign2.timeStamp;
  _0x2b6572.params.commonParameter.userId = $.userId;
  return $.toStr(_0x2b6572, _0x2b6572);
}
function _0x3844a6(_0x623792) {
  AppSecret = _0x50f312 || "6cc5dbd8900e434b94c4bdb0c16348ed";
  key = _0x3588ad || "c1614da9ac68";
  time2 = new Date().valueOf();
  s2 = encodeURIComponent(JSON.stringify(_0x623792));
  c = new RegExp("'", "g");
  A = new RegExp("~", "g");
  s2 = s2.replace(c, "%27");
  s2 = s2.replace(A, "%7E");
  signBody = "f" + key + "D" + s2 + "c" + time2 + AppSecret;
  sign = _0x323a49.MD5(signBody.toLowerCase()).toString();
  return {
    sign: sign,
    timeStamp: time2
  };
}
async function _0x205daa() {
  id = _0x323a49.MD5(Date.now()).toString().substring(0, 16);
  _0x323a49.enc.Base64._map = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  const _0x117e00 = _0x323a49.enc.Utf8.parse(id),
    _0xef02e1 = _0x323a49.enc.Base64.stringify(_0x117e00),
    _0x1fea2f = {
      sv: "EG==",
      ad: _0xef02e1,
      od: "",
      ov: "Ctq=",
      ud: _0xef02e1
    };
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: new Date().getTime(),
    ridx: -1,
    cipher: _0x1fea2f,
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  return "jdapp;android;11.0.2;;;appBuild/97565;ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Note9 Build/PKQ1.181203.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046010 Mobile Safari/537.36";
}
function _0x336121(_0x1e3b59) {
  _0x1e3b59 = _0x1e3b59 || 32;
  let _0x2d324f = "abcdef0123456789",
    _0x170f56 = _0x2d324f.length,
    _0x3e2182 = "";
  for (let _0x511dcf = 0; _0x511dcf < _0x1e3b59; _0x511dcf++) {
    _0x3e2182 += _0x2d324f.charAt(Math.floor(Math.random() * _0x170f56));
  }
  return _0x3e2182;
}
function _0x1d4720(_0x333c2b) {
  if (typeof _0x333c2b == "string") {
    try {
      return JSON.parse(_0x333c2b);
    } catch (_0x1b2e4d) {
      console.log(_0x1b2e4d);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x2a4ce5() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4e2a35 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    let _0x184763 = "";
    if ($.shopactivityId) {
      _0x184763 = ",\"activityId\":" + $.shopactivityId;
    }
    const _0x5bd46e = "{\"venderId\":\"" + $.joinVenderId + "\",\"shopId\":\"" + $.joinVenderId + "\",\"bindByVerifyCodeFlag\":1,\"registerExtend\":{},\"writeChildFlag\":0" + _0x184763 + ",\"channel\":406}",
      _0x1f06c4 = {
        appId: "27004",
        apid: "shopmember_m_jd_com",
        fn: "bindWithVender",
        ver: "9.2.0",
        cl: "H5",
        body: JSON.parse(_0x5bd46e),
        code: 0,
        user: $.UserName,
        ua: $.UA
      };
    for (var _0x52a119 = "", _0x18ce27 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x2e6311 = 0; _0x2e6311 < 16; _0x2e6311++) {
      var _0x1e6158 = Math.round(Math.random() * (_0x18ce27.length - 1));
      _0x52a119 += _0x18ce27.substring(_0x1e6158, _0x1e6158 + 1);
    }
    uuid = Buffer.from(_0x52a119, "utf8").toString("base64");
    ep = encodeURIComponent(JSON.stringify({
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      ts: new Date().getTime(),
      ridx: -1,
      cipher: {
        screen: "CJS0CseyCtK4",
        osVersion: "CJGkEK==",
        uuid: uuid
      },
      ciphertype: 5,
      version: "1.0.3",
      appname: "com.360buy.jdmobile"
    }));
    const _0x1ef18a = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x1cfff6,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x3533e2 = await _0x4983a3.getbody(_0x1f06c4),
      _0x139d32 = {
        url: "https://api.m.jd.com/client.action?" + _0x3533e2 + "&uuid=88888",
        headers: _0x1ef18a
      };
    $.get(_0x139d32, async (_0x5e96b2, _0x1121c7, _0x51a330) => {
      try {
        if (_0x5e96b2) {
          _0x1121c7 && typeof _0x1121c7.statusCode != "undefined" && _0x1121c7.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x51a330 = _0x51a330 && _0x51a330.match(/jsonp_.*?\((.*?)\);/) && _0x51a330.match(/jsonp_.*?\((.*?)\);/)[1] || _0x51a330;
          let _0x5f422b = $.toObj(_0x51a330, _0x51a330);
          if (_0x5f422b && typeof _0x5f422b == "object") {
            if (_0x5f422b && _0x5f422b.success === true) {
              $.errorJoinShop = _0x5f422b.message;
              if (_0x5f422b.result && _0x5f422b.result.giftInfo) {
                for (let _0x3af66b of _0x5f422b.result.giftInfo.giftList) {
                  console.log("🔊 入会获得：" + _0x3af66b.discountString + _0x3af66b.prizeName + _0x3af66b.secondLineDesc);
                }
              }
            } else {
              _0x5f422b && typeof _0x5f422b == "object" && _0x5f422b.message ? ($.errorJoinShop = _0x5f422b.message, console.log("" + (_0x5f422b.message || ""))) : console.log(_0x51a330);
            }
          } else {
            console.log(_0x51a330);
          }
        }
      } catch (_0x93f671) {
        $.logErr(_0x93f671, _0x1121c7);
      } finally {
        _0x4e2a35();
      }
    });
  });
}
async function _0x421ff7() {
  return new Promise(async _0x402bb0 => {
    const _0x4d5558 = "{\"venderId\":\"" + $.joinVenderId + "\",\"channel\":406,\"payUpShop\":true}",
      _0x155c4b = {
        appid: "jd_shop_member",
        functionId: "bindWithVender",
        clientVersion: "9.2.0",
        client: "H5",
        body: JSON.parse(_0x4d5558)
      };
    await $.wait(1000);
    const _0x153323 = await _0x4983a3("8adfb", _0x155c4b),
      _0x5bb0ab = {
        url: "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=" + _0x4d5558 + "&clientVersion=9.2.0&client=H5&uuid=88888&h5st=" + encodeURIComponent(_0x153323),
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          cookie: _0x1cfff6,
          origin: "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
      };
    $.get(_0x5bb0ab, async (_0x400595, _0x5e2792, _0x2155a5) => {
      try {
        if (_0x400595) {
          _0x5e2792 && typeof _0x5e2792.statusCode != "undefined" && _0x5e2792.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x2155a5 = _0x2155a5 && _0x2155a5.match(/jsonp_.*?\((.*?)\);/) && _0x2155a5.match(/jsonp_.*?\((.*?)\);/)[1] || _0x2155a5;
          let _0x1dd413 = $.toObj(_0x2155a5, _0x2155a5);
          _0x1dd413 && typeof _0x1dd413 == "object" ? _0x1dd413 && _0x1dd413.success == true && (console.log("去加入：" + (_0x1dd413.result.shopMemberCardInfo.venderCardName || "") + " (" + $.joinVenderId + ")"), $.shopactivityId = _0x1dd413.result.interestsRuleList && _0x1dd413.result.interestsRuleList[0] && _0x1dd413.result.interestsRuleList[0].interestsInfo && _0x1dd413.result.interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x2155a5);
        }
      } catch (_0x509a54) {
        $.logErr(_0x509a54, _0x5e2792);
      } finally {
        _0x402bb0();
      }
    });
  });
}
function _0x543219(_0x5a2e90) {
  return new Promise(_0x2ac96a => {
    const _0xb49c3 = {
      url: _0x5a2e90 + "?" + new Date(),
      timeout: 10000,
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    $.get(_0xb49c3, async (_0x3a1876, _0x33b274, _0x4983d9) => {
      try {
        if (_0x3a1876) {
          $.getAuthorCodeListerr = false;
        } else {
          if (_0x4983d9) {
            _0x4983d9 = JSON.parse(_0x4983d9);
          }
          $.getAuthorCodeListerr = true;
        }
      } catch (_0x2a17bd) {
        $.logErr(_0x2a17bd, _0x33b274);
        _0x4983d9 = null;
      } finally {
        _0x2ac96a(_0x4983d9);
      }
    });
  });
}
function _0x1c115a(_0x3dfd38, _0x2aa82b) {
  return Math.floor(Math.random() * (_0x2aa82b - _0x3dfd38)) + _0x3dfd38;
}
async function _0x2c42ba() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x4cccc0(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x4cccc0(_0x401f4e) {
  _0x401f4e = _0x401f4e || 32;
  let _0x167998 = "abcdef0123456789",
    _0x3a9d2e = _0x167998.length,
    _0xfd60cb = "";
  for (let _0x2e3245 = 0; _0x2e3245 < _0x401f4e; _0x2e3245++) {
    _0xfd60cb += _0x167998.charAt(Math.floor(Math.random() * _0x3a9d2e));
  }
  return _0xfd60cb;
}
function _0x516531() {
  const _0x48495d = {
    url: "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/index." + $.jscode + ".js",
    headers: {}
  };
  _0x48495d.headers["User-Agent"] = $.UA;
  return new Promise(_0x8bc50b => {
    $.get(_0x48495d, async (_0x5ed4a5, _0x372805, _0x58d006) => {
      try {
        if (_0x5ed4a5) {
          console.log("" + JSON.stringify(_0x5ed4a5));
          console.log("get请求失败，请检查网路重试");
        } else {
          $.bianh = "pages-" + $.bianh + "-" + $.bianh;
          let _0x3e9209 = new RegExp("\"" + $.bianh + "\":\"([0-9a-f]{8})\"");
          $.bianh = $.bianh + "." + _0x58d006.match(_0x3e9209)[1];
          let _0x2f24ad = await _0x429977("https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/" + $.bianh + ".js");
          _0x50f312 = _0x2f24ad.match(/as:\"([0-9a-f]{32})\"/)[1];
          _0x3588ad = _0x2f24ad.match(/ak:\"([0-9a-f]{12})\"/)[1];
        }
      } catch (_0x49b208) {} finally {
        _0x8bc50b();
      }
    });
  });
}
function _0x418343(_0x1ee620) {
  const _0x4aeab3 = {
    "User-Agent": $.UA
  };
  const _0x5a49c2 = {
    url: _0x1ee620,
    headers: _0x4aeab3
  };
  return new Promise(_0x5b1759 => {
    $.get(_0x5a49c2, async (_0x458ca8, _0x48ae63, _0x4db5d6) => {
      try {
        _0x458ca8 ? (console.log("" + JSON.stringify(_0x458ca8)), console.log("get请求失败，请检查网路重试")) : $.jscode = _0x4db5d6.match(/index.([0-9a-f]{8}).js/)[1];
      } catch (_0x34fc38) {} finally {
        _0x5b1759();
      }
    });
  });
}
function _0x326c67(_0x546332 = +new Date()) {
  var _0x446eba = new Date(_0x546332 + 28800000);
  return _0x446eba.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x429977(_0x1db9eb) {
  const _0x7b0234 = {
    "User-Agent": $.UA
  };
  const _0x247cb8 = {
    url: _0x1db9eb,
    headers: _0x7b0234
  };
  return new Promise(_0x6466a4 => {
    $.get(_0x247cb8, async (_0x5b5121, _0x360ce3, _0x43c887) => {
      try {
        if (_0x5b5121) {
          console.log("" + JSON.stringify(_0x5b5121));
          console.log("get请求失败，请检查网路重试");
        }
      } catch (_0x35474e) {} finally {
        _0x6466a4(_0x43c887);
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