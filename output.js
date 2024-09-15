//Sun Sep 15 2024 14:28:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大牌0913");
const _0x1109b5 = $.isNode() ? require("./jdCookie.js") : "",
  _0x4a39ae = $.isNode() ? require("./sendNotify") : "",
  _0x341d5b = require("crypto-js"),
  _0x450a67 = require("./function/dylank"),
  _0xf7221b = require("./function/dylany"),
  _0x5d41a8 = require("./function/dylib.js");
let _0x303439 = [],
  _0x2a73db = "",
  _0x41d240 = "",
  _0x37480d = "",
  _0x2c73a4 = "3";
if (process.env.DY_PROXY) {
  const _0x4180a5 = require("./function/proxy.js");
  $.get = _0x4180a5.intoRequest($.get.bind($));
  $.post = _0x4180a5.intoRequest($.post.bind($));
}
if ($.isNode()) {
  Object.keys(_0x1109b5).forEach(_0x43b357 => {
    _0x303439.push(_0x1109b5[_0x43b357]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x303439 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1ab113 => _0x1ab113.cookie)].filter(_0x3d1ba4 => !!_0x3d1ba4);
}
let _0x4fe1d3 = process.env.DPLH_BSHOP || "false",
  _0x285367 = process.env.DPLH_OPENCARD || "true",
  _0xc966e5 = "https://jinggengjcq-isv.isvjcloud.com";
$.Url = "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/pages/oC20240612dda/oC20240612dda?actId=706119c3277041509b45b16e3d_240913";
$.bianh = $.Url.match(/oC[0-9a-z]+/)[0];
$.actId = $.Url.match(/actId=([0-9a-f]+_\d+)/)[1];
$.appkey = "94854284";
$.userId = "10299171";
$.outFlag = false;
let _0x200d81 = ["OsiH6Sic/uTxioPBG6hh5K9AMkY4oJ31vhy6nI5LWbOiIw7XUQOP/Btn03/M1TYH"];
$.inviteNick = _0x200d81[_0x309983(0, _0x200d81.length)];
$.awardId = process.env.DPLH_AWID || "";
$.bwater = false;
!(async () => {
  $.log("\n💬 有水的时候跑，浏览店铺任务每天刷新");
  $.log("💬 代理API，DY_PROXY='url'");
  $.log("💬 默认开卡，关闭DPLH_OPENCARD='false'");
  if (!_0x303439[0]) {
    const _0x502313 = {
      "open-url": "https://bean.m.jd.com/"
    };
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", _0x502313);
    return;
  }
  for (let _0x558bee = 0; _0x558bee < _0x303439.length; _0x558bee++) {
    _0x2a73db = _0x303439[_0x558bee];
    if (_0x2a73db) {
      $.UserName = decodeURIComponent(_0x2a73db.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2a73db.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x558bee + 1;
      $.bean = 0;
      $.nickName = "";
      _0xde4f0();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      await _0x4cbcf2();
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
      if ($.outFlag) {
        break;
      }
    }
  }
  if ($.outFlag) {
    let _0x542cbf = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x542cbf);
    if ($.isNode()) {
      await _0x4a39ae.sendNotify("" + $.name, "" + _0x542cbf);
    }
  }
})().catch(_0x5c8726 => $.logErr(_0x5c8726)).finally(() => $.done());
async function _0x4cbcf2() {
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
    $.Token = await _0x450a67(_0x2a73db, _0xc966e5);
    if (!$.Token) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    for (let _0x1430ba = 0; _0x1430ba < _0x2c73a4; _0x1430ba++) {
      await _0x9bd76a("activity_load");
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
      if ($.sTime > Date.now()) {
        $.log("活动未开始!!!");
        process.exit();
      } else {
        $.index == 1 && console.log("活动结束时间：" + _0xbb439b($.endTime));
      }
    }
    for (let _0x36c9af = 0; _0x36c9af < _0x2c73a4; _0x36c9af++) {
      await _0x9bd76a("绑定");
      if ($.okFlag) {
        break;
      }
    }
    for (let _0xf68566 = 0; _0xf68566 < _0x2c73a4; _0xf68566++) {
      await _0x9bd76a("shopList");
      if ($.okFlag) {
        break;
      }
    }
    if ($.offList.length != 0) {
      $.log("总共" + $.openList.length + "个店铺，还需开卡" + $.offList.length + "个");
      if (_0x285367 !== "false") {
        $.log("\n去开卡...");
        for (let _0x3f1088 of $.openList) {
          $.missionType = "openCard";
          if (_0x3f1088.open != true && _0x3f1088.openCardUrl) {
            $.openCard = false;
            $.joinVenderId = _0x3f1088.userId;
            for (let _0x13af40 = 0; _0x13af40 < _0x2c73a4; _0x13af40++) {
              await _0x9bd76a("mission");
              if ($.okFlag) {
                break;
              }
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            if ($.openCard == true) {
              $.errorJoinShop = "";
              await _0x568913();
              if ($.errorJoinShop.indexOf("您的手机号已被其他账号绑定本店会员，请先登陆原账号解绑") > -1) {
                return;
              }
              $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 && (console.log("😤 呜呜呜，重试开卡"), await $.wait(1000), await _0x568913(), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
                console.log("💔 无法开卡,跳过运行");
                return;
              }
              for (let _0x9f044d = 0; _0x9f044d < _0x2c73a4; _0x9f044d++) {
                await _0x9bd76a("activity_load");
                if ($.okFlag) {
                  break;
                }
              }
              for (let _0x5a5b0d = 0; _0x5a5b0d < _0x2c73a4; _0x5a5b0d++) {
                await _0x9bd76a("shopList");
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
      for (let _0x168f90 = 0; _0x168f90 < _0x2c73a4; _0x168f90++) {
        await _0x9bd76a("mission");
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
        for (let _0x1bacc7 = 0; _0x1bacc7 < _0x2c73a4; _0x1bacc7++) {
          await _0x9bd76a("mission");
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
      if (_0x4fe1d3 == "true") {
        $.nojifen = false;
        $.nobeans = false;
        $.log("\n去浏览店铺...");
        $.missionType = "viewShop";
        if (!$.bwater) {
          let _0x16807f = _0x5d41a8.getRandomEle($.openList, 1);
          $.goodsNumId = _0x16807f[0].userId;
          await _0x9bd76a("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.nojifen && $.nobeans) {
            console.log("可能没水,换个时间再试试");
          } else {
            for (let _0x3a4036 of $.openList) {
              $.goodsNumId = _0x3a4036.userId;
              await _0x9bd76a("mission");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            $.bwater = true;
          }
        } else {
          for (let _0x422453 of $.openList) {
            $.goodsNumId = _0x422453.userId;
            await _0x9bd76a("mission");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
        }
      } else {
        console.log("\n默认不做浏览店铺，设置变量DPLH_BSHOP='true'");
      }
    }
    await _0x9bd76a("myAward");
    await _0x9bd76a("inviteList");
    $.index == 1 && _0x285367 !== "false" && ($.inviteNick = $.MixNick, console.log("\n车头助力作者，后面都会助力 -> " + $.UserName));
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  } catch (_0x4072bc) {
    console.log(_0x4072bc);
  }
}
async function _0x9bd76a(_0x10f75d) {
  if ($.outFlag) {
    return;
  }
  let _0x30c16c = "https://jinggengjcq-isv.isvjcloud.com",
    _0x55631f = "",
    _0x58a478 = "POST",
    _0x1950c5 = "";
  switch (_0x10f75d) {
    case "activity_load":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x5079d3 = {
        jdToken: $.Token,
        source: "01",
        ak: "",
        sk: "",
        inviteNick: $.inviteNick || ""
      };
      _0x1950c5 = _0x5079d3;
      if ($.joinVenderId) {
        _0x1950c5 = {
          ..._0x1950c5,
          shopId: "" + $.joinVenderId
        };
      }
      _0x55631f = _0x315c3c("/jdJoinCardtf/activity/load", _0x1950c5);
      break;
    case "shopList":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      _0x1950c5 = {};
      _0x55631f = _0x315c3c("/jdJoinCardtf/shop/shopList", _0x1950c5);
      break;
    case "绑定":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x5b03a2 = {
        inviterNick: $.inviteNick || ""
      };
      _0x1950c5 = _0x5b03a2;
      _0x55631f = _0x315c3c("/jdJoinCardtf/customer/inviteRelation", _0x1950c5);
      break;
    case "mission":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x252918 = {
        missionType: $.missionType
      };
      _0x1950c5 = _0x252918;
      if ($.joinVenderId) {
        _0x1950c5 = {
          ..._0x1950c5,
          shopId: $.joinVenderId
        };
      }
      if ($.goodsId) {
        _0x1950c5 = {
          ..._0x1950c5,
          goodsId: $.goodsId
        };
      }
      if ($.goodsNumId) {
        _0x1950c5 = {
          ..._0x1950c5,
          goodsNumId: $.goodsNumId
        };
      }
      _0x55631f = _0x315c3c("/jdJoinCardtf/mission/completeMission", _0x1950c5);
      break;
    case "抽奖":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/interactive/drawPos?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x4d8bed = {
        dataType: "draw",
        usedGameNum: "2"
      };
      _0x1950c5 = _0x4d8bed;
      _0x55631f = _0x315c3c("/jdJoinCardtf/interactive/drawPos", _0x1950c5);
      break;
    case "followShop":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/followShop?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x1fd9bb = {
        actId: $.actId,
        missionType: "collectShop"
      };
      _0x1950c5 = _0x1fd9bb;
      _0x55631f = _0x315c3c("/jdJoinCardtf/followShop", _0x1950c5);
      break;
    case "getAwardSettingList":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x134237 = {
        dataType: "exchange"
      };
      _0x1950c5 = _0x134237;
      _0x55631f = _0x315c3c("/jdJoinCardtf/awards/getAwardSettingList", _0x1950c5);
      break;
    case "exchangePost":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x23c236 = {
        dataType: "exchange",
        awardId: $.awardId
      };
      _0x1950c5 = _0x23c236;
      _0x55631f = _0x315c3c("/jdJoinCardtf/interactive/exchangePost", _0x1950c5);
      break;
    case "addCart":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/addCart?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x1de767 = {
        actId: $.actId,
        missionType: "addCart"
      };
      _0x1950c5 = _0x1de767;
      _0x55631f = _0x315c3c("/jdJoinCardtf/addCart", _0x1950c5);
      break;
    case "myAward":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x348673 = {
        passes: "",
        pageNo: 1,
        pageSize: 9999
      };
      _0x1950c5 = _0x348673;
      _0x55631f = _0x315c3c("/jdJoinCardtf/awards/list", _0x1950c5);
      break;
    case "inviteList":
      url = _0x30c16c + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x51744f = {
        missionType: "shareAct",
        pageNo: 1,
        pageSize: 10
      };
      _0x1950c5 = _0x51744f;
      _0x55631f = _0x315c3c("/jdJoinCardtf/customer/inviteList", _0x1950c5);
      break;
    default:
      console.log("错误" + _0x10f75d);
  }
  let _0x26a68e = _0x4bd440(url, _0x55631f, _0x58a478);
  return new Promise(async _0x57d324 => {
    $.post(_0x26a68e, (_0x31f2dd, _0x31e7a7, _0x19d6c2) => {
      try {
        if (_0x31f2dd) {
          _0x31e7a7 && _0x31e7a7.statusCode && _0x31e7a7.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true);
          $.okFlag = false;
        } else {
          _0x504a75(_0x10f75d, _0x19d6c2);
        }
      } catch (_0x41d8f8) {
        console.log(_0x41d8f8, _0x31e7a7);
      } finally {
        _0x57d324();
      }
    });
  });
}
function _0x46a3d2(_0xf665fe) {
  let _0x27e7c1 = "";
  switch (_0xf665fe) {
    case "bdy_0x154ed0":
      const _0x200e08 = {
        bdy_0x154ed0: _0x200e08
      };
      _0x27e7c1 = _0x200e08;
      break;
    case "bdy_0x2c605c":
      const _0x21b9f0 = {
        bdy_0x2c605c: _0x21b9f0
      };
      _0x27e7c1 = _0x21b9f0;
      break;
    case "bdy_0x5ade7a":
      const _0x17106e = {
        bdy_0x5ade7a: _0x17106e
      };
      _0x27e7c1 = _0x17106e;
      break;
  }
}
async function _0x504a75(_0x289377, _0x453c1b) {
  let _0x69c8b1 = "";
  try {
    $.okFlag = true;
    (_0x289377 != "accessLogWithAD" || _0x289377 != "drawContent") && (_0x69c8b1 = JSON.parse(_0x453c1b));
  } catch (_0x1a7312) {
    console.log("🤬 " + _0x289377 + " 数据异常");
    $.runFalag = false;
  }
  try {
    switch (_0x289377) {
      case "accessLogWithAD":
      case "drawContent":
      case "绑定":
        break;
      case "shopList":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          _0x69c8b1.data.status == 200 && ($.openList = _0x69c8b1.data.data || [], $.offList = $.openList.filter(_0x572474 => !_0x572474.open));
        }
        break;
      case "getAwardSettingList":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          if (_0x69c8b1.data?.["status"] == 200) {
            _0x69c8b1 = _0x69c8b1.data;
            for (let _0x39129c of _0x69c8b1.data.awardSettings) {
              console.log(_0x39129c.awardName + ": id(" + _0x39129c.id + ")--库存(" + _0x39129c.remainNum + ")--需积分(" + _0x39129c.awardDes + ")--" + _0x39129c.exchangeFlag);
            }
          } else {
            $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
          }
        }
        break;
      case "exchangePost":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          _0x69c8b1.data?.["status"] == 200 ? (_0x69c8b1 = _0x69c8b1.data, $.log("兑换成功：" + _0x69c8b1.data.awardSendLog.awardName), _0x69c8b1.data.awardSendLog.awardType == "goods" && $.log("实物请手动填地址：" + $.Url)) : $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
        }
        break;
      case "activity_load":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          if (_0x69c8b1.data?.["status"] == 200) {
            _0x69c8b1 = _0x69c8b1.data;
            if (_0x69c8b1.msg || _0x69c8b1.data.isOpenCard) {
              if ((_0x69c8b1.msg || _0x69c8b1.data.isOpenCard || "").indexOf("绑定成功") > -1) {
                $.toBind = 1;
              }
            }
            $.endTime = _0x69c8b1.data.cusActivity.endTime || 0;
            $.sTime = _0x69c8b1.data.cusActivity.startTime || 0;
            $.MixNick = _0x69c8b1.data.missionCustomer.buyerNick || "";
            $.usedChance = _0x69c8b1.data.missionCustomer.usedChance || 0;
            $.hasCollectShop = _0x69c8b1.data.missionCustomer.hasCollectShop || 0;
            $.hasAddCart = _0x69c8b1.data.missionCustomer.hasAddCart || 0;
            $.remainPoint = _0x69c8b1.data.missionCustomer.remainPoint || 0;
            $.totalPoint = _0x69c8b1.data.missionCustomer.totalPoint || 0;
            if (_0x69c8b1.data.openCardMsg) {
              console.log("🔊 " + _0x69c8b1.data.openCardMsg);
            }
          } else {
            $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
          }
        } else {
          console.log(_0x453c1b);
        }
        break;
      case "mission":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          if (_0x69c8b1.data?.["status"] == 200) {
            _0x69c8b1 = _0x69c8b1.data;
            if (_0x69c8b1.msg || _0x69c8b1.data.isOpenCard || _0x69c8b1.data.remark) {
              console.log("🔊 " + (_0x69c8b1.msg || _0x69c8b1.data.isOpenCard || _0x69c8b1.data.remark || ""));
            }
            $.openCard = _0x69c8b1.data.remark.includes("不是会员") ? true : false;
            $.nojifen = !_0x69c8b1.data.remark.includes("积分") ? true : false;
            $.nobeans = !_0x69c8b1.data.remark.includes("京豆") ? true : false;
          } else {
            $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
          }
        } else {
          console.log(_0x453c1b);
        }
        break;
      case "inviteList":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          if (_0x69c8b1.data?.["status"] == 200) {
            _0x69c8b1 = _0x69c8b1.data;
            _0x69c8b1.data.inviteNum > 0 && console.log("\n已邀请：" + _0x69c8b1.data.inviteNum);
          } else {
            $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
          }
        } else {
          console.log(_0x453c1b);
        }
        break;
      case "myAward":
        if (_0x69c8b1.success === true && _0x69c8b1.data) {
          if (_0x69c8b1.data?.["status"] == 200) {
            _0x69c8b1 = _0x69c8b1.data;
            let _0x473723 = 0;
            try {
              _0x473723 = eval(_0x453c1b.match(/\d+个?京豆/g).map(_0x48c9f1 => _0x48c9f1.replace(/[\u4e00-\u9fa5]/g, "")).join("+"));
            } catch {}
            _0x473723 > 0 && console.log("\n共获得 " + _0x473723 + " 京豆🥔");
          } else {
            $.log("" + (_0x69c8b1.errorMessage || _0x69c8b1.data.msg));
          }
        } else {
          console.log(_0x453c1b);
        }
        break;
      default:
        console.log(_0x289377 + "-> " + _0x453c1b);
    }
    if (typeof _0x69c8b1 == "object") {
      if (_0x69c8b1.errorMessage) {
        _0x69c8b1.errorMessage.indexOf("火爆") > -1;
      }
    }
  } catch {}
}
function _0x4bd440(_0x2afc60, _0x269690, _0x9c4aa3 = "POST") {
  const _0xf4661d = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: _0x2a73db,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  _0x2afc60.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1 && (_0xf4661d.Origin = "https://jinggengjcq-isv.isvjcloud.com", _0xf4661d["Content-Type"] = "application/json; charset=utf-8", delete _0xf4661d.Cookie);
  return {
    url: _0x2afc60,
    method: _0x9c4aa3,
    headers: _0xf4661d,
    body: _0x269690,
    timeout: 10000
  };
}
function _0x315c3c(_0x49ca66, _0x515a32) {
  const _0x5a20a5 = {
    actId: $.actId,
    ..._0x515a32,
    method: _0x49ca66,
    userId: $.userId,
    buyerNick: $.MixNick || ""
  };
  d = _0x5a20a5;
  sign2 = _0xe25a36(d);
  const _0x3a6019 = {
    m: "POST",
    oba: sign2.sign,
    timestamp: sign2.timeStamp,
    userId: $.userId
  };
  const _0x3f602e = {
    commonParameter: _0x3a6019,
    admJson: d
  };
  const _0x4982e4 = {
    jsonRpc: "2.0",
    params: _0x3f602e
  };
  return $.toStr(_0x4982e4, _0x4982e4);
}
function _0xe25a36(_0x55b83d) {
  AppSecret = _0x37480d || "6cc5dbd8900e434b94c4bdb0c16348ed";
  key = _0x41d240 || "c1614da9ac68";
  time2 = new Date().valueOf();
  s2 = encodeURIComponent(JSON.stringify(_0x55b83d));
  c = new RegExp("'", "g");
  A = new RegExp("~", "g");
  s2 = s2.replace(c, "%27");
  s2 = s2.replace(A, "%7E");
  signBody = "f" + key + "D" + s2 + "c" + time2 + AppSecret;
  sign = _0x341d5b.MD5(signBody.toLowerCase()).toString();
  return {
    sign: sign,
    timeStamp: time2
  };
}
async function _0x2ec25d() {
  id = _0x341d5b.MD5(Date.now()).toString().substring(0, 16);
  _0x341d5b.enc.Base64._map = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  const _0x36543c = _0x341d5b.enc.Utf8.parse(id),
    _0x1a1804 = _0x341d5b.enc.Base64.stringify(_0x36543c),
    _0x5dbd05 = {
      sv: "EG==",
      ad: _0x1a1804,
      od: "",
      ov: "Ctq=",
      ud: _0x1a1804
    };
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: new Date().getTime(),
    ridx: -1,
    cipher: _0x5dbd05,
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  return "jdapp;android;11.0.2;;;appBuild/97565;ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Note9 Build/PKQ1.181203.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046010 Mobile Safari/537.36";
}
function _0x1ee0f0(_0x452dc5) {
  _0x452dc5 = _0x452dc5 || 32;
  let _0x52b3b6 = "abcdef0123456789",
    _0x363f29 = _0x52b3b6.length,
    _0xa759d = "";
  for (let _0x3a8829 = 0; _0x3a8829 < _0x452dc5; _0x3a8829++) {
    _0xa759d += _0x52b3b6.charAt(Math.floor(Math.random() * _0x363f29));
  }
  return _0xa759d;
}
function _0x28166a(_0x1bd727) {
  if (typeof _0x1bd727 == "string") {
    try {
      return JSON.parse(_0x1bd727);
    } catch (_0x1bd9ea) {
      console.log(_0x1bd9ea);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x568913() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x20f2a7 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    let _0x1ff1c9 = "";
    if ($.shopactivityId) {
      _0x1ff1c9 = ",\"activityId\":" + $.shopactivityId;
    }
    const _0x3d0527 = "{\"venderId\":\"" + $.joinVenderId + "\",\"shopId\":\"" + $.joinVenderId + "\",\"bindByVerifyCodeFlag\":1,\"registerExtend\":{},\"writeChildFlag\":0" + _0x1ff1c9 + ",\"channel\":406}",
      _0x194930 = {
        appId: "27004",
        apid: "shopmember_m_jd_com",
        fn: "bindWithVender",
        ver: "9.2.0",
        cl: "H5",
        body: JSON.parse(_0x3d0527),
        code: 0,
        user: $.UserName,
        ua: $.UA
      };
    for (var _0x4021f3 = "", _0x30613f = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x4ad5a1 = 0; _0x4ad5a1 < 16; _0x4ad5a1++) {
      var _0x398d31 = Math.round(Math.random() * (_0x30613f.length - 1));
      _0x4021f3 += _0x30613f.substring(_0x398d31, _0x398d31 + 1);
    }
    uuid = Buffer.from(_0x4021f3, "utf8").toString("base64");
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
    const _0x4c9b0d = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x2a73db,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x27ec94 = await _0xf7221b.getbody(_0x194930),
      _0x16ba1e = {
        url: "https://api.m.jd.com/client.action?" + _0x27ec94 + "&uuid=88888",
        headers: _0x4c9b0d
      };
    $.get(_0x16ba1e, async (_0x11a6b2, _0x3f8d00, _0x4aaa96) => {
      try {
        if (_0x11a6b2) {
          _0x3f8d00 && typeof _0x3f8d00.statusCode != "undefined" && _0x3f8d00.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x4aaa96 = _0x4aaa96 && _0x4aaa96.match(/jsonp_.*?\((.*?)\);/) && _0x4aaa96.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4aaa96;
          let _0x27f77d = $.toObj(_0x4aaa96, _0x4aaa96);
          if (_0x27f77d && typeof _0x27f77d == "object") {
            if (_0x27f77d && _0x27f77d.success === true) {
              $.errorJoinShop = _0x27f77d.message;
              if (_0x27f77d.result && _0x27f77d.result.giftInfo) {
                for (let _0x1a5209 of _0x27f77d.result.giftInfo.giftList) {
                  console.log("🔊 入会获得：" + _0x1a5209.discountString + _0x1a5209.prizeName + _0x1a5209.secondLineDesc);
                }
              }
            } else {
              _0x27f77d && typeof _0x27f77d == "object" && _0x27f77d.message ? ($.errorJoinShop = _0x27f77d.message, console.log("" + (_0x27f77d.message || ""))) : console.log(_0x4aaa96);
            }
          } else {
            console.log(_0x4aaa96);
          }
        }
      } catch (_0x41e836) {
        $.logErr(_0x41e836, _0x3f8d00);
      } finally {
        _0x20f2a7();
      }
    });
  });
}
async function _0x3c261b() {
  return new Promise(async _0x562f52 => {
    const _0x461b1b = "{\"venderId\":\"" + $.joinVenderId + "\",\"channel\":406,\"payUpShop\":true}",
      _0x4aeccc = {
        appid: "jd_shop_member",
        functionId: "bindWithVender",
        clientVersion: "9.2.0",
        client: "H5",
        body: JSON.parse(_0x461b1b)
      };
    await $.wait(1000);
    const _0x148318 = await _0xf7221b("8adfb", _0x4aeccc),
      _0x3ece4a = {
        url: "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=" + _0x461b1b + "&clientVersion=9.2.0&client=H5&uuid=88888&h5st=" + encodeURIComponent(_0x148318),
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          cookie: _0x2a73db,
          origin: "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
      };
    $.get(_0x3ece4a, async (_0x5a68a4, _0x37e1e6, _0x4622e2) => {
      try {
        if (_0x5a68a4) {
          _0x37e1e6 && typeof _0x37e1e6.statusCode != "undefined" && _0x37e1e6.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x4622e2 = _0x4622e2 && _0x4622e2.match(/jsonp_.*?\((.*?)\);/) && _0x4622e2.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4622e2;
          let _0x324361 = $.toObj(_0x4622e2, _0x4622e2);
          _0x324361 && typeof _0x324361 == "object" ? _0x324361 && _0x324361.success == true && (console.log("去加入：" + (_0x324361.result.shopMemberCardInfo.venderCardName || "") + " (" + $.joinVenderId + ")"), $.shopactivityId = _0x324361.result.interestsRuleList && _0x324361.result.interestsRuleList[0] && _0x324361.result.interestsRuleList[0].interestsInfo && _0x324361.result.interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x4622e2);
        }
      } catch (_0x5b3b7c) {
        $.logErr(_0x5b3b7c, _0x37e1e6);
      } finally {
        _0x562f52();
      }
    });
  });
}
function _0x4f997c(_0x370d6d) {
  return new Promise(_0x1adff1 => {
    const _0xade68f = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
    };
    const _0x4808d5 = {
      url: _0x370d6d + "?" + new Date(),
      timeout: 10000,
      headers: _0xade68f
    };
    $.get(_0x4808d5, async (_0x4e1ce4, _0x1b2fd6, _0x4ce079) => {
      try {
        if (_0x4e1ce4) {
          $.getAuthorCodeListerr = false;
        } else {
          if (_0x4ce079) {
            _0x4ce079 = JSON.parse(_0x4ce079);
          }
          $.getAuthorCodeListerr = true;
        }
      } catch (_0x462f63) {
        $.logErr(_0x462f63, _0x1b2fd6);
        _0x4ce079 = null;
      } finally {
        _0x1adff1(_0x4ce079);
      }
    });
  });
}
function _0x309983(_0x5b6cf4, _0x5d5cd9) {
  return Math.floor(Math.random() * (_0x5d5cd9 - _0x5b6cf4)) + _0x5b6cf4;
}
async function _0xde4f0() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0xf231ca(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0xf231ca(_0x5328fb) {
  _0x5328fb = _0x5328fb || 32;
  let _0x2f97d3 = "abcdef0123456789",
    _0x2883a7 = _0x2f97d3.length,
    _0x1ffe29 = "";
  for (let _0x5bb13d = 0; _0x5bb13d < _0x5328fb; _0x5bb13d++) {
    _0x1ffe29 += _0x2f97d3.charAt(Math.floor(Math.random() * _0x2883a7));
  }
  return _0x1ffe29;
}
function _0x411e26() {
  const _0x310ed6 = {
    url: "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/index." + $.jscode + ".js",
    headers: {}
  };
  _0x310ed6.headers["User-Agent"] = $.UA;
  return new Promise(_0x5971f9 => {
    $.get(_0x310ed6, async (_0x306db4, _0x8c3ee6, _0x3ac628) => {
      try {
        if (_0x306db4) {
          console.log("" + JSON.stringify(_0x306db4));
          console.log("get请求失败，请检查网路重试");
        } else {
          $.bianh = "pages-" + $.bianh + "-" + $.bianh;
          let _0x2a6a33 = new RegExp("\"" + $.bianh + "\":\"([0-9a-f]{8})\"");
          $.bianh = $.bianh + "." + _0x3ac628.match(_0x2a6a33)[1];
          let _0x15cebe = await _0x1d32a0("https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/" + $.bianh + ".js");
          _0x37480d = _0x15cebe.match(/as:\"([0-9a-f]{32})\"/)[1];
          _0x41d240 = _0x15cebe.match(/ak:\"([0-9a-f]{12})\"/)[1];
        }
      } catch (_0x1e2772) {} finally {
        _0x5971f9();
      }
    });
  });
}
function _0x4780cc(_0x393e16) {
  const _0x29ff16 = {
    "User-Agent": $.UA
  };
  const _0x58e4e4 = {
    url: _0x393e16,
    headers: _0x29ff16
  };
  return new Promise(_0x5f8580 => {
    $.get(_0x58e4e4, async (_0x3d7be6, _0x4d5b76, _0x2a2856) => {
      try {
        if (_0x3d7be6) {
          console.log("" + JSON.stringify(_0x3d7be6));
          console.log("get请求失败，请检查网路重试");
        } else {
          $.jscode = _0x2a2856.match(/index.([0-9a-f]{8}).js/)[1];
        }
      } catch (_0x265a7e) {} finally {
        _0x5f8580();
      }
    });
  });
}
function _0xbb439b(_0x5c85c2 = +new Date()) {
  var _0x55c183 = new Date(_0x5c85c2 + 28800000);
  return _0x55c183.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x1d32a0(_0x3e3056) {
  const _0x3f8ed6 = {
    "User-Agent": $.UA
  };
  const _0x412173 = {
    url: _0x3e3056,
    headers: _0x3f8ed6
  };
  return new Promise(_0x50b571 => {
    $.get(_0x412173, async (_0x4ae903, _0x151fbc, _0x2b2732) => {
      try {
        if (_0x4ae903) {
          console.log("" + JSON.stringify(_0x4ae903));
          console.log("get请求失败，请检查网路重试");
        }
      } catch (_0x31c4ce) {} finally {
        _0x50b571(_0x2b2732);
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