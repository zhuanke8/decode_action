//Sun Sep 15 2024 14:30:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大牌0915");
const _0x1619fb = $.isNode() ? require("./jdCookie.js") : "",
  _0x1a9f2e = $.isNode() ? require("./sendNotify") : "",
  _0x369821 = require("crypto-js"),
  _0x249f2d = require("./function/dylank"),
  _0x459ac5 = require("./function/dylany"),
  _0x53e4e4 = require("./function/dylib.js");
let _0xe77603 = [],
  _0x176f67 = "",
  _0xdf755c = "",
  _0x5040c2 = "",
  _0x5008a2 = "3";
if (process.env.DY_PROXY) {
  const _0x514b4e = require("./function/proxy.js");
  $.get = _0x514b4e.intoRequest($.get.bind($));
  $.post = _0x514b4e.intoRequest($.post.bind($));
}
if ($.isNode()) {
  Object.keys(_0x1619fb).forEach(_0x23e539 => {
    _0xe77603.push(_0x1619fb[_0x23e539]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0xe77603 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x5e9c24 => _0x5e9c24.cookie)].filter(_0x46a17c => !!_0x46a17c);
}
let _0x3c7816 = process.env.DPLH_BSHOP || "false",
  _0x400f5f = process.env.DPLH_OPENCARD || "true",
  _0x5be8ec = "https://jinggengjcq-isv.isvjcloud.com";
$.Url = "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/pages/oC20240612dda/oC20240612dda?actId=9aaefe23b5304defa72205237_240915";
$.bianh = $.Url.match(/oC[0-9a-z]+/)[0];
$.actId = $.Url.match(/actId=([0-9a-f]+_\d+)/)[1];
$.appkey = "94854284";
$.userId = "10299171";
$.outFlag = false;
let _0x52d456 = ["4OUhkiGu672Q05SVjNh6JcjNhNaYFy2HteErE6izlhTf9nrGY7gBkCdGU4C6z/xD"];
$.inviteNick = _0x52d456[_0x3a82f1(0, _0x52d456.length)];
$.awardId = process.env.DPLH_AWID || "";
$.bwater = false;
!(async () => {
  $.log("\n💬 有水的时候跑，浏览店铺任务每天刷新");
  $.log("💬 代理API，DY_PROXY='url'");
  $.log("💬 默认开卡，关闭DPLH_OPENCARD='false'");
  if (!_0xe77603[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  for (let _0x34267a = 0; _0x34267a < _0xe77603.length; _0x34267a++) {
    _0x176f67 = _0xe77603[_0x34267a];
    if (_0x176f67) {
      $.UserName = decodeURIComponent(_0x176f67.match(/pt_pin=([^; ]+)(?=;?)/) && _0x176f67.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x34267a + 1;
      $.bean = 0;
      $.nickName = "";
      _0x13ff78();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      await _0x17f83d();
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
      if ($.outFlag) {
        break;
      }
    }
  }
  if ($.outFlag) {
    let _0xc22724 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0xc22724);
    if ($.isNode()) {
      await _0x1a9f2e.sendNotify("" + $.name, "" + _0xc22724);
    }
  }
})().catch(_0x551018 => $.logErr(_0x551018)).finally(() => $.done());
async function _0x17f83d() {
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
    $.Token = await _0x249f2d(_0x176f67, _0x5be8ec);
    if (!$.Token) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    for (let _0x5d064d = 0; _0x5d064d < _0x5008a2; _0x5d064d++) {
      await _0x1b070b("activity_load");
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
      $.sTime > Date.now() ? ($.log("活动未开始!!!"), process.exit()) : $.index == 1 && console.log("活动结束时间：" + _0x162959($.endTime));
    }
    for (let _0x425271 = 0; _0x425271 < _0x5008a2; _0x425271++) {
      await _0x1b070b("绑定");
      if ($.okFlag) {
        break;
      }
    }
    for (let _0x43f46a = 0; _0x43f46a < _0x5008a2; _0x43f46a++) {
      await _0x1b070b("shopList");
      if ($.okFlag) {
        break;
      }
    }
    if ($.offList.length != 0) {
      $.log("总共" + $.openList.length + "个店铺，还需开卡" + $.offList.length + "个");
      if (_0x400f5f !== "false") {
        $.log("\n去开卡...");
        for (let _0x3b41d1 of $.openList) {
          $.missionType = "openCard";
          if (_0x3b41d1.open != true && _0x3b41d1.openCardUrl) {
            $.openCard = false;
            $.joinVenderId = _0x3b41d1.userId;
            for (let _0x5c7e7d = 0; _0x5c7e7d < _0x5008a2; _0x5c7e7d++) {
              await _0x1b070b("mission");
              if ($.okFlag) {
                break;
              }
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            if ($.openCard == true) {
              $.errorJoinShop = "";
              await _0x3d413a();
              if ($.errorJoinShop.indexOf("您的手机号已被其他账号绑定本店会员，请先登陆原账号解绑") > -1) {
                return;
              }
              $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 && (console.log("😤 呜呜呜，重试开卡"), await $.wait(1000), await _0x3d413a(), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
                console.log("💔 无法开卡,跳过运行");
                return;
              }
              for (let _0x198c04 = 0; _0x198c04 < _0x5008a2; _0x198c04++) {
                await _0x1b070b("activity_load");
                if ($.okFlag) {
                  break;
                }
              }
              for (let _0x509bb0 = 0; _0x509bb0 < _0x5008a2; _0x509bb0++) {
                await _0x1b070b("shopList");
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
      for (let _0x53f559 = 0; _0x53f559 < _0x5008a2; _0x53f559++) {
        await _0x1b070b("mission");
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
        for (let _0x3f2f96 = 0; _0x3f2f96 < _0x5008a2; _0x3f2f96++) {
          await _0x1b070b("mission");
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
      if (_0x3c7816 == "true") {
        $.nojifen = false;
        $.nobeans = false;
        $.log("\n去浏览店铺...");
        $.missionType = "viewShop";
        if (!$.bwater) {
          let _0x515902 = _0x53e4e4.getRandomEle($.openList, 1);
          $.goodsNumId = _0x515902[0].userId;
          await _0x1b070b("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.nojifen && $.nobeans) {
            console.log("可能没水,换个时间再试试");
          } else {
            for (let _0x2dfdff of $.openList) {
              $.goodsNumId = _0x2dfdff.userId;
              await _0x1b070b("mission");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            $.bwater = true;
          }
        } else {
          for (let _0x21bd7d of $.openList) {
            $.goodsNumId = _0x21bd7d.userId;
            await _0x1b070b("mission");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
        }
      } else {
        console.log("\n默认不做浏览店铺，设置变量DPLH_BSHOP='true'");
      }
    }
    await _0x1b070b("myAward");
    await _0x1b070b("inviteList");
    $.index == 1 && _0x400f5f !== "false" && ($.inviteNick = $.MixNick, console.log("\n车头助力作者，后面都会助力 -> " + $.UserName));
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  } catch (_0x1f73c7) {
    console.log(_0x1f73c7);
  }
}
async function _0x1b070b(_0x5dc285) {
  if ($.outFlag) {
    return;
  }
  let _0x227af8 = "https://jinggengjcq-isv.isvjcloud.com",
    _0x3c0506 = "",
    _0x44f511 = "POST",
    _0x1c41ee = "";
  switch (_0x5dc285) {
    case "activity_load":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x586fec = {
        jdToken: $.Token,
        source: "01",
        ak: "",
        sk: "",
        inviteNick: $.inviteNick || ""
      };
      _0x1c41ee = _0x586fec;
      if ($.joinVenderId) {
        _0x1c41ee = {
          ..._0x1c41ee,
          shopId: "" + $.joinVenderId
        };
      }
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/activity/load", _0x1c41ee);
      break;
    case "shopList":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      _0x1c41ee = {};
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/shop/shopList", _0x1c41ee);
      break;
    case "绑定":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x34ffb3 = {
        inviterNick: $.inviteNick || ""
      };
      _0x1c41ee = _0x34ffb3;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/customer/inviteRelation", _0x1c41ee);
      break;
    case "mission":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x5e0ce9 = {
        missionType: $.missionType
      };
      _0x1c41ee = _0x5e0ce9;
      if ($.joinVenderId) {
        _0x1c41ee = {
          ..._0x1c41ee,
          shopId: $.joinVenderId
        };
      }
      if ($.goodsId) {
        _0x1c41ee = {
          ..._0x1c41ee,
          goodsId: $.goodsId
        };
      }
      if ($.goodsNumId) {
        _0x1c41ee = {
          ..._0x1c41ee,
          goodsNumId: $.goodsNumId
        };
      }
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/mission/completeMission", _0x1c41ee);
      break;
    case "抽奖":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/interactive/drawPos?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x4dfef7 = {
        dataType: "draw",
        usedGameNum: "2"
      };
      _0x1c41ee = _0x4dfef7;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/interactive/drawPos", _0x1c41ee);
      break;
    case "followShop":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/followShop?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x2ad393 = {
        actId: $.actId,
        missionType: "collectShop"
      };
      _0x1c41ee = _0x2ad393;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/followShop", _0x1c41ee);
      break;
    case "getAwardSettingList":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x3548a3 = {
        dataType: "exchange"
      };
      _0x1c41ee = _0x3548a3;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/awards/getAwardSettingList", _0x1c41ee);
      break;
    case "exchangePost":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x15a003 = {
        dataType: "exchange",
        awardId: $.awardId
      };
      _0x1c41ee = _0x15a003;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/interactive/exchangePost", _0x1c41ee);
      break;
    case "addCart":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/addCart?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x13fbee = {
        actId: $.actId,
        missionType: "addCart"
      };
      _0x1c41ee = _0x13fbee;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/addCart", _0x1c41ee);
      break;
    case "myAward":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x464024 = {
        passes: "",
        pageNo: 1,
        pageSize: 9999
      };
      _0x1c41ee = _0x464024;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/awards/list", _0x1c41ee);
      break;
    case "inviteList":
      url = _0x227af8 + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x1a9a10 = {
        missionType: "shareAct",
        pageNo: 1,
        pageSize: 10
      };
      _0x1c41ee = _0x1a9a10;
      _0x3c0506 = _0x2c99b6("/jdJoinCardtf/customer/inviteList", _0x1c41ee);
      break;
    default:
      console.log("错误" + _0x5dc285);
  }
  let _0x5e648e = _0x3c84e3(url, _0x3c0506, _0x44f511);
  return new Promise(async _0x14c754 => {
    $.post(_0x5e648e, (_0x3166b2, _0xdde2f5, _0x34852b) => {
      try {
        _0x3166b2 ? (_0xdde2f5 && _0xdde2f5.statusCode && _0xdde2f5.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true), $.okFlag = false) : _0x596ac1(_0x5dc285, _0x34852b);
      } catch (_0x1ec9c6) {
        console.log(_0x1ec9c6, _0xdde2f5);
      } finally {
        _0x14c754();
      }
    });
  });
}
function _0xd2e000(_0x51ceb7) {
  let _0x3a98d8 = "";
  switch (_0x51ceb7) {
    case "bdy_0x154ed0":
      const _0x4a4208 = {
        bdy_0x154ed0: _0x4a4208
      };
      _0x3a98d8 = _0x4a4208;
      break;
    case "bdy_0x2c605c":
      const _0x1edb4e = {
        bdy_0x2c605c: _0x1edb4e
      };
      _0x3a98d8 = _0x1edb4e;
      break;
    case "bdy_0x5ade7a":
      const _0xf364e0 = {
        bdy_0x5ade7a: _0xf364e0
      };
      _0x3a98d8 = _0xf364e0;
      break;
  }
}
async function _0x596ac1(_0x1ba144, _0x2279a4) {
  let _0x4ada24 = "";
  try {
    $.okFlag = true;
    (_0x1ba144 != "accessLogWithAD" || _0x1ba144 != "drawContent") && (_0x4ada24 = JSON.parse(_0x2279a4));
  } catch (_0x228ce5) {
    console.log("🤬 " + _0x1ba144 + " 数据异常");
    $.runFalag = false;
  }
  try {
    switch (_0x1ba144) {
      case "accessLogWithAD":
      case "drawContent":
      case "绑定":
        break;
      case "shopList":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          _0x4ada24.data.status == 200 && ($.openList = _0x4ada24.data.data || [], $.offList = $.openList.filter(_0x1a9a90 => !_0x1a9a90.open));
        }
        break;
      case "getAwardSettingList":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          if (_0x4ada24.data?.["status"] == 200) {
            _0x4ada24 = _0x4ada24.data;
            for (let _0x4fea53 of _0x4ada24.data.awardSettings) {
              console.log(_0x4fea53.awardName + ": id(" + _0x4fea53.id + ")--库存(" + _0x4fea53.remainNum + ")--需积分(" + _0x4fea53.awardDes + ")--" + _0x4fea53.exchangeFlag);
            }
          } else {
            $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
          }
        }
        break;
      case "exchangePost":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          _0x4ada24.data?.["status"] == 200 ? (_0x4ada24 = _0x4ada24.data, $.log("兑换成功：" + _0x4ada24.data.awardSendLog.awardName), _0x4ada24.data.awardSendLog.awardType == "goods" && $.log("实物请手动填地址：" + $.Url)) : $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
        }
        break;
      case "activity_load":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          if (_0x4ada24.data?.["status"] == 200) {
            _0x4ada24 = _0x4ada24.data;
            if (_0x4ada24.msg || _0x4ada24.data.isOpenCard) {
              if ((_0x4ada24.msg || _0x4ada24.data.isOpenCard || "").indexOf("绑定成功") > -1) {
                $.toBind = 1;
              }
            }
            $.endTime = _0x4ada24.data.cusActivity.endTime || 0;
            $.sTime = _0x4ada24.data.cusActivity.startTime || 0;
            $.MixNick = _0x4ada24.data.missionCustomer.buyerNick || "";
            $.usedChance = _0x4ada24.data.missionCustomer.usedChance || 0;
            $.hasCollectShop = _0x4ada24.data.missionCustomer.hasCollectShop || 0;
            $.hasAddCart = _0x4ada24.data.missionCustomer.hasAddCart || 0;
            $.remainPoint = _0x4ada24.data.missionCustomer.remainPoint || 0;
            $.totalPoint = _0x4ada24.data.missionCustomer.totalPoint || 0;
            if (_0x4ada24.data.openCardMsg) {
              console.log("🔊 " + _0x4ada24.data.openCardMsg);
            }
          } else {
            $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
          }
        } else {
          console.log(_0x2279a4);
        }
        break;
      case "mission":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          if (_0x4ada24.data?.["status"] == 200) {
            _0x4ada24 = _0x4ada24.data;
            if (_0x4ada24.msg || _0x4ada24.data.isOpenCard || _0x4ada24.data.remark) {
              console.log("🔊 " + (_0x4ada24.msg || _0x4ada24.data.isOpenCard || _0x4ada24.data.remark || ""));
            }
            $.openCard = _0x4ada24.data.remark.includes("不是会员") ? true : false;
            $.nojifen = !_0x4ada24.data.remark.includes("积分") ? true : false;
            $.nobeans = !_0x4ada24.data.remark.includes("京豆") ? true : false;
          } else {
            $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
          }
        } else {
          console.log(_0x2279a4);
        }
        break;
      case "inviteList":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          _0x4ada24.data?.["status"] == 200 ? (_0x4ada24 = _0x4ada24.data, _0x4ada24.data.inviteNum > 0 && console.log("\n已邀请：" + _0x4ada24.data.inviteNum)) : $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
        } else {
          console.log(_0x2279a4);
        }
        break;
      case "myAward":
        if (_0x4ada24.success === true && _0x4ada24.data) {
          if (_0x4ada24.data?.["status"] == 200) {
            _0x4ada24 = _0x4ada24.data;
            let _0x1f8d3c = 0;
            try {
              _0x1f8d3c = eval(_0x2279a4.match(/\d+个?京豆/g).map(_0x53cd2f => _0x53cd2f.replace(/[\u4e00-\u9fa5]/g, "")).join("+"));
            } catch {}
            _0x1f8d3c > 0 && console.log("\n共获得 " + _0x1f8d3c + " 京豆🥔");
          } else {
            $.log("" + (_0x4ada24.errorMessage || _0x4ada24.data.msg));
          }
        } else {
          console.log(_0x2279a4);
        }
        break;
      default:
        console.log(_0x1ba144 + "-> " + _0x2279a4);
    }
    if (typeof _0x4ada24 == "object") {
      if (_0x4ada24.errorMessage) {
        _0x4ada24.errorMessage.indexOf("火爆") > -1;
      }
    }
  } catch {}
}
function _0x3c84e3(_0x351e7d, _0x26b024, _0x276b52 = "POST") {
  const _0x3bd960 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: _0x176f67,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  _0x351e7d.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1 && (_0x3bd960.Origin = "https://jinggengjcq-isv.isvjcloud.com", _0x3bd960["Content-Type"] = "application/json; charset=utf-8", delete _0x3bd960.Cookie);
  return {
    url: _0x351e7d,
    method: _0x276b52,
    headers: _0x3bd960,
    body: _0x26b024,
    timeout: 10000
  };
}
function _0x2c99b6(_0x870616, _0x2c1679) {
  const _0x23c5af = {
    actId: $.actId,
    ..._0x2c1679,
    method: _0x870616,
    userId: $.userId,
    buyerNick: $.MixNick || ""
  };
  d = _0x23c5af;
  sign2 = _0x22b6c6(d);
  const _0x160015 = {
    m: "POST",
    oba: sign2.sign,
    timestamp: sign2.timeStamp,
    userId: $.userId
  };
  const _0xab35bd = {
    commonParameter: _0x160015,
    admJson: d
  };
  const _0xadc637 = {
    jsonRpc: "2.0",
    params: _0xab35bd
  };
  return $.toStr(_0xadc637, _0xadc637);
}
function _0x22b6c6(_0x559e88) {
  AppSecret = _0x5040c2 || "6cc5dbd8900e434b94c4bdb0c16348ed";
  key = _0xdf755c || "c1614da9ac68";
  time2 = new Date().valueOf();
  s2 = encodeURIComponent(JSON.stringify(_0x559e88));
  c = new RegExp("'", "g");
  A = new RegExp("~", "g");
  s2 = s2.replace(c, "%27");
  s2 = s2.replace(A, "%7E");
  signBody = "f" + key + "D" + s2 + "c" + time2 + AppSecret;
  sign = _0x369821.MD5(signBody.toLowerCase()).toString();
  return {
    sign: sign,
    timeStamp: time2
  };
}
async function _0x28dbe1() {
  id = _0x369821.MD5(Date.now()).toString().substring(0, 16);
  _0x369821.enc.Base64._map = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  const _0x297d14 = _0x369821.enc.Utf8.parse(id),
    _0x577543 = _0x369821.enc.Base64.stringify(_0x297d14);
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: new Date().getTime(),
    ridx: -1,
    cipher: {
      sv: "EG==",
      ad: _0x577543,
      od: "",
      ov: "Ctq=",
      ud: _0x577543
    },
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  return "jdapp;android;11.0.2;;;appBuild/97565;ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Note9 Build/PKQ1.181203.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046010 Mobile Safari/537.36";
}
function _0x41b4b8(_0x9cdc34) {
  _0x9cdc34 = _0x9cdc34 || 32;
  let _0x632c6b = "abcdef0123456789",
    _0x2ff70b = _0x632c6b.length,
    _0x22665c = "";
  for (let _0x1c37d2 = 0; _0x1c37d2 < _0x9cdc34; _0x1c37d2++) {
    _0x22665c += _0x632c6b.charAt(Math.floor(Math.random() * _0x2ff70b));
  }
  return _0x22665c;
}
function _0x1aee97(_0x4d31c2) {
  if (typeof _0x4d31c2 == "string") {
    try {
      return JSON.parse(_0x4d31c2);
    } catch (_0x2ac0f4) {
      console.log(_0x2ac0f4);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x3d413a() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x289e0d => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    let _0x2771d1 = "";
    if ($.shopactivityId) {
      _0x2771d1 = ",\"activityId\":" + $.shopactivityId;
    }
    const _0x96a5e0 = "{\"venderId\":\"" + $.joinVenderId + "\",\"shopId\":\"" + $.joinVenderId + "\",\"bindByVerifyCodeFlag\":1,\"registerExtend\":{},\"writeChildFlag\":0" + _0x2771d1 + ",\"channel\":406}",
      _0x15c107 = {
        appId: "27004",
        apid: "shopmember_m_jd_com",
        fn: "bindWithVender",
        ver: "9.2.0",
        cl: "H5",
        body: JSON.parse(_0x96a5e0),
        code: 0,
        user: $.UserName,
        ua: $.UA
      };
    for (var _0x329b16 = "", _0x90abd7 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x24af68 = 0; _0x24af68 < 16; _0x24af68++) {
      var _0x25c92a = Math.round(Math.random() * (_0x90abd7.length - 1));
      _0x329b16 += _0x90abd7.substring(_0x25c92a, _0x25c92a + 1);
    }
    uuid = Buffer.from(_0x329b16, "utf8").toString("base64");
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
    const _0x4acd13 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x176f67,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x2b6522 = await _0x459ac5.getbody(_0x15c107),
      _0x411113 = {
        url: "https://api.m.jd.com/client.action?" + _0x2b6522 + "&uuid=88888",
        headers: _0x4acd13
      };
    $.get(_0x411113, async (_0x24a4d4, _0x556a83, _0x4204e8) => {
      try {
        if (_0x24a4d4) {
          _0x556a83 && typeof _0x556a83.statusCode != "undefined" && _0x556a83.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x4204e8 = _0x4204e8 && _0x4204e8.match(/jsonp_.*?\((.*?)\);/) && _0x4204e8.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4204e8;
          let _0x3f6afa = $.toObj(_0x4204e8, _0x4204e8);
          if (_0x3f6afa && typeof _0x3f6afa == "object") {
            if (_0x3f6afa && _0x3f6afa.success === true) {
              $.errorJoinShop = _0x3f6afa.message;
              if (_0x3f6afa.result && _0x3f6afa.result.giftInfo) {
                for (let _0x5db27b of _0x3f6afa.result.giftInfo.giftList) {
                  console.log("🔊 入会获得：" + _0x5db27b.discountString + _0x5db27b.prizeName + _0x5db27b.secondLineDesc);
                }
              }
            } else {
              _0x3f6afa && typeof _0x3f6afa == "object" && _0x3f6afa.message ? ($.errorJoinShop = _0x3f6afa.message, console.log("" + (_0x3f6afa.message || ""))) : console.log(_0x4204e8);
            }
          } else {
            console.log(_0x4204e8);
          }
        }
      } catch (_0x87fa98) {
        $.logErr(_0x87fa98, _0x556a83);
      } finally {
        _0x289e0d();
      }
    });
  });
}
async function _0x39fa96() {
  return new Promise(async _0x1dca5c => {
    const _0x29482d = "{\"venderId\":\"" + $.joinVenderId + "\",\"channel\":406,\"payUpShop\":true}",
      _0x49e2f1 = {
        appid: "jd_shop_member",
        functionId: "bindWithVender",
        clientVersion: "9.2.0",
        client: "H5",
        body: JSON.parse(_0x29482d)
      };
    await $.wait(1000);
    const _0x3bc11d = await _0x459ac5("8adfb", _0x49e2f1),
      _0x730d69 = {
        url: "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=" + _0x29482d + "&clientVersion=9.2.0&client=H5&uuid=88888&h5st=" + encodeURIComponent(_0x3bc11d),
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          cookie: _0x176f67,
          origin: "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
      };
    $.get(_0x730d69, async (_0x34d875, _0x55cd64, _0x5baabd) => {
      try {
        if (_0x34d875) {
          _0x55cd64 && typeof _0x55cd64.statusCode != "undefined" && _0x55cd64.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x5baabd = _0x5baabd && _0x5baabd.match(/jsonp_.*?\((.*?)\);/) && _0x5baabd.match(/jsonp_.*?\((.*?)\);/)[1] || _0x5baabd;
          let _0xd66db1 = $.toObj(_0x5baabd, _0x5baabd);
          _0xd66db1 && typeof _0xd66db1 == "object" ? _0xd66db1 && _0xd66db1.success == true && (console.log("去加入：" + (_0xd66db1.result.shopMemberCardInfo.venderCardName || "") + " (" + $.joinVenderId + ")"), $.shopactivityId = _0xd66db1.result.interestsRuleList && _0xd66db1.result.interestsRuleList[0] && _0xd66db1.result.interestsRuleList[0].interestsInfo && _0xd66db1.result.interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x5baabd);
        }
      } catch (_0x18287a) {
        $.logErr(_0x18287a, _0x55cd64);
      } finally {
        _0x1dca5c();
      }
    });
  });
}
function _0xbc2cd0(_0x21a7d1) {
  return new Promise(_0x5202be => {
    const _0x15f025 = {
      url: _0x21a7d1 + "?" + new Date(),
      timeout: 10000,
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    $.get(_0x15f025, async (_0x477945, _0x1eb8c9, _0x58ce54) => {
      try {
        if (_0x477945) {
          $.getAuthorCodeListerr = false;
        } else {
          if (_0x58ce54) {
            _0x58ce54 = JSON.parse(_0x58ce54);
          }
          $.getAuthorCodeListerr = true;
        }
      } catch (_0x2ab0f5) {
        $.logErr(_0x2ab0f5, _0x1eb8c9);
        _0x58ce54 = null;
      } finally {
        _0x5202be(_0x58ce54);
      }
    });
  });
}
function _0x3a82f1(_0x6b9c37, _0x5789e7) {
  return Math.floor(Math.random() * (_0x5789e7 - _0x6b9c37)) + _0x6b9c37;
}
async function _0x13ff78() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x1e2d64(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x1e2d64(_0x1e0323) {
  _0x1e0323 = _0x1e0323 || 32;
  let _0x194c04 = "abcdef0123456789",
    _0x3c296d = _0x194c04.length,
    _0x34269f = "";
  for (let _0x22db10 = 0; _0x22db10 < _0x1e0323; _0x22db10++) {
    _0x34269f += _0x194c04.charAt(Math.floor(Math.random() * _0x3c296d));
  }
  return _0x34269f;
}
function _0x293a7c() {
  const _0x55a3ec = {
    url: "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/index." + $.jscode + ".js",
    headers: {}
  };
  _0x55a3ec.headers["User-Agent"] = $.UA;
  return new Promise(_0x120d8e => {
    $.get(_0x55a3ec, async (_0x2ea66c, _0x426114, _0x290c4a) => {
      try {
        if (_0x2ea66c) {
          console.log("" + JSON.stringify(_0x2ea66c));
          console.log("get请求失败，请检查网路重试");
        } else {
          $.bianh = "pages-" + $.bianh + "-" + $.bianh;
          let _0x54722f = new RegExp("\"" + $.bianh + "\":\"([0-9a-f]{8})\"");
          $.bianh = $.bianh + "." + _0x290c4a.match(_0x54722f)[1];
          let _0x5ef067 = await _0x2a7ef6("https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/" + $.bianh + ".js");
          _0x5040c2 = _0x5ef067.match(/as:\"([0-9a-f]{32})\"/)[1];
          _0xdf755c = _0x5ef067.match(/ak:\"([0-9a-f]{12})\"/)[1];
        }
      } catch (_0x22c136) {} finally {
        _0x120d8e();
      }
    });
  });
}
function _0x425ce1(_0x1b5b20) {
  const _0x30e851 = {
    "User-Agent": $.UA
  };
  const _0x5842fc = {
    url: _0x1b5b20,
    headers: _0x30e851
  };
  return new Promise(_0x357bb6 => {
    $.get(_0x5842fc, async (_0x33c076, _0x2bbf9c, _0x5e627d) => {
      try {
        _0x33c076 ? (console.log("" + JSON.stringify(_0x33c076)), console.log("get请求失败，请检查网路重试")) : $.jscode = _0x5e627d.match(/index.([0-9a-f]{8}).js/)[1];
      } catch (_0x131b6f) {} finally {
        _0x357bb6();
      }
    });
  });
}
function _0x162959(_0x48735a = +new Date()) {
  var _0x5ab6f2 = new Date(_0x48735a + 28800000);
  return _0x5ab6f2.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x2a7ef6(_0x27ddb5) {
  const _0x4308c0 = {
    "User-Agent": $.UA
  };
  const _0x3bc927 = {
    url: _0x27ddb5,
    headers: _0x4308c0
  };
  return new Promise(_0x31b6d4 => {
    $.get(_0x3bc927, async (_0x658204, _0x449299, _0x484907) => {
      try {
        if (_0x658204) {
          console.log("" + JSON.stringify(_0x658204));
          console.log("get请求失败，请检查网路重试");
        }
      } catch (_0x37b3c1) {} finally {
        _0x31b6d4(_0x484907);
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