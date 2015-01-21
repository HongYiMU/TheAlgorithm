(function(){
    if(window.$_GLOBAL) {
        return;
    }
    if (!window.console){
        console = {
            log : function(){
            },
            dir : function(){
            },
            error : function(){
            }
        };
    }
    if(typeof window.staticTime=="undefined")
        window.staticTime=new Date().getTime();
    var startTime = window.staticTime;
    window.$_GLOBAL = {};

    // pageid.js version
    $_GLOBAL.ver = {
         "blog7"    : "551"
        ,"blog7photo"  : "193"
        ,"blog7icp"    : "268"
        ,"blog7activity": "75"
        ,"blog7crowd"  : "3"
        ,"di_yuan_xin" : "2"
    };
    $_GLOBAL.msgPlaySound = !1;

    //群博客的 接口域名
    $_GLOBAL.qURL = 'http://pro.qing.sina.com.cn';
  //Qing博客换新域名
    $_GLOBAL.qingURL = 'http://qing.blog.sina.com.cn/';

    $_GLOBAL.grzxTipBlack = {'other' : 1,'editor' : 1,'pageSetM' : 1,'editor_film' : 1,'other' : 1};

    $_GLOBAL.cssBasicURL = 'http://simg.sinajs.cn/blog7style/css/';

    //flash的基本地址
    //新的:'http://sjs.sinajs.cn/blog7swf/';
    $_GLOBAL.flashBasicURL = 'http://sjs.sinajs.cn/blog7swf/';

    //顶踩的标志位代码,用于和老的PHP代码结合或者出现线上问题，可快速下线,如果没有问题，可在一个月以后摘除
    $_GLOBAL.diggerOpenFlag = true;
    //等待flash的加载超时时间,如果flash的加载超过了这个时间，就认为它无效
    $_GLOBAL.diggerFlashTimeout = 5000;

    // flash template info
    $_GLOBAL.flash_template = {};
    $_GLOBAL._weiCaoPanUid = [1300871220,1216826604,1245296155,1284139322,1285707277,1458594614,1236135807,1504965870,1279884602,1364334665,1298535315,1319231304,1243037810,1278228085,1243881594,1282871591,1233227211,1279916282,1319802272,1215172700,1305431810,1301484230,1249424622,1258609013,1603589321,1307309734,1483330984,1092672395,1273642560,1500243557,1147012071,1253205351,1290677635,1434387020,1092849864,1342877185,1649821184,1264802107,1253386310,1409928055,1220069571,1301047350,1301047350,1301047350,1403112787,1219262581,1199839991,1272573150,1361584961,1251977337];
    //* 下线tips广告
    // 推广位tips广告数据，如果不需要投
  // 博客logo替换
  // $_GLOBAL.platformTrayLogo = {
    // "imgForIE6":"http://simg.sinajs.cn/blog7style/images/common/topbar/topbar_logo_earthday.gif ",
    // "imgForOtherBrs": "http://simg.sinajs.cn/blog7style/images/common/topbar/topbar_logo_earthday.png"
  // };

    $_GLOBAL.tipsConfig={
      "blogTip" : 1,
      // 是否显示此广告
      "isShow"      : true,
      // 托盘文字连接--Tips导航文字链
      "adLink"      : '<a style="color:red" href="http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528884,534161&cid=0,0,0&sid=534779&advid=358&camid=37389&show=ignore&url=http://games.sina.com.cn/weibo/vplan/index.shtml" target="_blank">天上掉馅饼，微博掉勋章</a>',
      //tips广告背景
      "backgroundPic" : 'http://www.sinaimg.cn/blog/qing/image/tips/weicaopan_bj.gif',
      //"ie6BackgroundPic" : 'http://www.sinaimg.cn/blog/ads/weicaopan_bj.gif',
      //点击图片的链接--Tips头像
      "imageLinkHref"   : 'http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528886,534163&cid=0,0,0&sid=534780&advid=358&camid=37389&show=ignore&url=http://weibo.gxq.com.cn/',

      // 灰色标题
      "tipsTitle"   : '<a target="_blank" href="http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528887,534164&cid=0,0,0&sid=534781&advid=358&camid=37389&show=ignore&url=http://games.sina.com.cn/weibo/vplan/index.shtml">天上掉馅饼，微博掉勋章</a>',
      // 红色广告文字--Tips专题标题
      "tipsTxtLink" : '<a href="http://sina.allyes.com/main/adfclick?db=sina&bid=204720,440571,445872&cid=0,0,0&sid=443863&advid=358&camid=37389&show=ignore&url=http://games.sina.com.cn/weibo/vplan/index.shtml" class="tips_adwords" target="_blank"></a>',
      "tipsTxtLinkBgPic" : 'http://www.sinaimg.cn/blog/qing/image/tips/weicaopan_wz.gif',
      "ie6TipsTxtLinkBgPic" : 'http://www.sinaimg.cn/blog/qing/image/tips/weicaopan_wz.gif',
      // 底部参加按钮
      "tipsBtn"     : '<a href="http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528889,534166&cid=0,0,0&sid=534782&advid=358&camid=37389&show=ignore&url=http://games.sina.com.cn/weibo/vplan/index.shtml" target="_blank">立即参加</a>',
      // 统计布码
      "status": {
            "adstart": 'http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528882,534159&cid=0,0,0&sid=534776&advid=358&camid=37389&show=ignore',
            "adend": '',
            "adclose": 'http://sina.allyes.com/main/adfclick?db=sina&bid=204720,528883,534160&cid=0,0,0&sid=534778&advid=358&camid=37389&show=ignore' //注意：这里不要url
      }
    };
    //*/
    $_GLOBAL.tipsMeila={
      // 是否显示此广告
      "isShow"      : true,
      // 托盘文字连接
      "adLink"      : '<a style="color:black;" target="_blank" href="http://sina.allyes.com/main/adfclick?db=sina&bid=204720,451397,456695&cid=0,0,0&sid=454907&advid=358&camid=37389&show=ignore&url=http://hao.weibo.com/home?entry=blog#login">凹凸曼，还用邮箱登录微博？！</a>',
      //tips广告背景
      "backgroundPic" : 'http://simg.sinajs.cn/xblogstyle/images/help/bg.gif',
      "ie6BackgroundPic" : '',

      // 广告文字链接
      "tipsTxtLink" : '<a target="_blank" href="http://union.9173.com/pub?p=1&u=1008">恭喜您获得微三国新手大礼包！【 点击获取】</a>',
      "tipsTxtLinkBgPic" : '',
      "ie6TipsTxtLinkBgPic" : '',
      // 统计布码
      "status": {
            "adstart": '',
            "adend": '',
            "adclose": ''
      }
    };
    // 动态模板的配置信息，宽|高
    $_GLOBAL.flashtemplate = {
    "13_1": { width:950,height:266 },
    "13_2": { width:950,height:266 },
    "13_3": { width:950,height:266 },
    "13_4": { width:950,height:266 },
    "13_5": { width:950,height:306 },
    "13_6": { width:950,height:306 },
    "13_7": { width:950,height:286 },
    "13_8": { width:950,height:266 },
    "13_9": { width:950,height:266 },
    "13_10": { width:950,height:265 },
    "13_11": { width:950,height:266 },
    "13_12": { width:950,height:276 },
    "13_13": { width:950,height:286 },
    "13_14": { width:950,height:266 },
    "13_15": { width:950,height:306 },
    "13_16": { width:950,height:266 },
    "13_17": { width:950,height:266 },
    "13_18": { width:950,height:266 },
    "13_19": { width:950,height:313 },
    "13_20": { width:950,height:266 },
    "13_21": { width:950,height:265 },
    "10_57": { width:950,height:302 },
    "10_94": { width:292,height:190 }
    };

    //表情点击左侧表情选择的统计,结构为{pageID:{回复中点击(0):功能参数,评论中点击(1):功能参数}}
    $_GLOBAL.faceChooseTable = {
    'photo' : {'0':'05','1':'04'},
    'articleM' : {'0':'02','1':'01'},
    'personalM' : {'0':'07','1':'07'},
    'article' : {'0':'02','1':'01'},
    'personal' : {'0':'07','1':'07'},
    'profile_commlist' : {'0':'03','1':'03'},
    'profile_commphotolist' : {'0':'06','1':'06'}
    };

    //表情点击'更多>>'按钮的统计,结构为{pageID:{父节点的父节点的ID:[功能参数,置一个参数用于区分是回复还是评论]}}
    //0是从回复中点击，1是从评论中点击
    $_GLOBAL.faceCountMoreLinkTable = {
        'photo' : {'reply':['05','0'],'smilesSortShow':['04','1']},
        'articleM' : {'reply':['02','0'],'smilesSortShow':['01','1']},
        'personalM' : {'smilesSortShow':['07','1']},
        'article' : {'reply':['02','0'],'smilesSortShow':['01','1']},
        'personal' : {'smilesSortShow':['07','1']},
        'profile_commlist' : {'reply':['03','1']},
        'profile_commphotolist' : {'reply':['06','1']}
    };

    //活动提示黑名单
    $_GLOBAL.activityBlackList = {'blogMove':true};

    //MSN搬家权限提示黑名单
    $_GLOBAL.msnMoveBlackList = {'blogMove':true};

    //表情点击推荐表情的统计,结构为{pageID:{父节点的父节点的ID:功能参数}}
    $_GLOBAL.faceCountRecommLinkTable = {
        'photo' : '04',
        'articleM' : '01',
        'personalM' : '07',
        'article' : '01',
        'personal' : '07',
        'profile_commlist' : '03',
        'profile_commphotolist' : '06'
    };

    //是否在人气接口合并好友接口
    $_GLOBAL.mashAddFriend = true;

    // --- End of GLOBAL config ---
    (function (){
    //- debug -
    var __debug_mode = false; //should be false
    //- sina lib version - TODO 
    var __sina_ver = "0.0.1";

    // js base domain
    var __js_domain = "http://sjs.sinajs.cn/";
        var ssoURL = "http://i.sso.sina.com.cn/js/ssologin.js";

        var addScript = function(url, opt){
            var js = document.createElement("script");
            js.src = url;
            js.charset = opt.charset || "utf-8";
            js.async   = !!opt.async;

            js.onload  = js.onreadystatechange = function () {
              if (js.readyState && js.readyState != "loaded" && js.readyState != "complete") {
                return;
              }
              js.onload = js.onreadystatechange = js.onerror = null;
              // js.src = "";
              // js.parentNode.removeChild(js);
              // js = null;
              clearTimeout(loadCheck); loadCheck = null;
              opt && opt.success && opt.success();
            };

            js.onerror = function () {
              js.onload = js.onreadystatechange = js.onerror = null;
              // js.src = "";
              // js.parentNode.removeChild(js);
              // js = null;
              clearTimeout(loadCheck); loadCheck = null;
              opt && opt.failure && opt.failure(404);
            };      
            var startTime = new Date().getTime();
            document.getElementsByTagName("head")[0].appendChild(js);
            var loadCheck = setTimeout(function () {
              opt && opt.failure && opt.failure(-1);
              clearTimeout(loadCheck); loadCheck = null;
            }, opt.timeout || 30000);
        };

    // @desc add DOM onload Event
    var __addDOMLoadEvent = function(func){
      var __load_events;
      var __load_timer;
      if (!__load_events) {
        var init = function(){
          // quit if this function has already been called
          if (arguments.callee.done) {
            return;
          }
          // flag this function so we don't do the same thing twice
          arguments.callee.done = true;
          // kill the timer
          if (__load_timer) {
            clearInterval(__load_timer);
            __load_timer = null;
          }
          // execute each function in the stack in the order they were added
          for (var i = 0; i < __load_events.length; i++) {
            __load_events[i]();
          }
          __load_events = null;
        };
        // for Mozilla/Opera9
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", init, false);
        }
        
        // for Internet Explorer
        /*@cc_on @*/
        /*@if (@_win32)
         var domlen = document.getElementsByTagName("*").length;
         var domnum = 0;
         (function () {
         if(domnum != domlen) {
         setTimeout(arguments.callee, 500);
         }
         else {
         setTimeout(init, 500);
         }
         domnum = domlen;
         })();
         @end @*/
        // for Safari
        if (/WebKit/i.test(navigator.userAgent)) { // sniff
          __load_timer = setInterval(function(){
            if (/loaded|complete/.test(document.readyState)) {
              init(); // call the onload handler
            }
          }, 10);
        }
        // for other browsers
          window.onload = init;
        // create event function stack
        __load_events = [];
      }
      // add function to event stack
      __load_events.push(func);
    };

    var addEvent = function(elm, func, evType, useCapture) {
      var _el = $E(elm);
      if(_el == null){ return; }
      useCapture = useCapture || false;
      if(typeof evType == "undefined"){
        evType = "click";
      }
      if(_el.addEventListener){
        _el.addEventListener(evType, func, useCapture);
        return true;
      }else if(_el.attachEvent){
        var r = _el.attachEvent("on" + evType, func);
        return true;
      }else{
        _el['on' + evType] = func;
      }
    };
    var __addFocusEvent = function(fFocusFunction){
      //TODO not available during the dev
      if(window.excute != null && typeof window.excute == "function"){
        excute();
        excute = null;
      }
    };
        // ssologin.js加载时间设置为三秒，避免影响其它JS执行
        addScript(ssoURL, {async:!0, timeout:3000});
    if(__debug_mode){
      document.write('<s'+'cript type="text/javascript" src="' + __js_domain + 'bind2/debug/debug_base.js"></s'+'cript>');
      document.write('<s'+'cript type="text/javascript" src="' + __js_domain + 'bind2/debug/debug.js"></s'+'cript>');
    }

    window.__load_js = function(){
      var url = "";
      if(__debug_mode == true){
        url =   __js_domain + "bind2/index.php?product=" + scope.$PRODUCT_NAME + "&pageid=" + scope.$pageid
              + "&rnd=" + new Date().getTime();
      }else{
        // 取得 JS 版本号
        var jsver =  (typeof $_GLOBAL != "undefined" && $_GLOBAL.ver != null)
                ? $_GLOBAL.ver[scope.$PRODUCT_NAME] || "-1"
                : "-1";
        url =   __js_domain + scope.$PRODUCT_NAME + "/" + scope.$pageid + ".js?"
            + jsver + ".js";
      }
      function render_page(){
        __addDOMLoadEvent(main);
        addEvent(document.body, __addFocusEvent, "focus");
        addEvent(window, __addFocusEvent, "scroll");
        addEvent(document.body, __addFocusEvent, "mousemove");
        addEvent(document.body, __addFocusEvent, "mouseover");
      }
      function report_error(time){
        var err_log_url = "http://control.blog.sina.com.cn/admin/article/ria_debug.php?type=js_err_log&page=" + scope.$PRODUCT_NAME
          + "_" + scope.$pageid + "&code=404&desc=&usetime=" + (new Date().getTime() - startTime);
        new Image().src = err_log_url;
        report_error = function (){};
      }
      if (scope && scope.$pageid.indexOf("articletj") !== -1) {
          var pfpUrl = "http://pfp.sina.com.cn/blog/js/blogad.js";
          //var pfpUrl = "http://blog.sina.com.cn/blog/js/blogad.js"
          addScript(pfpUrl,{
            charset:"gb2312"
          });
      }
      
      if(__debug_mode == true){
        window.__render_page = render_page;
        document.write('<s'+'cript src="' + url +'" charset="utf-8"></s'+'cript>');
      } else {
        addScript(url, {
            success : function(){
                if(typeof main != "undefined"){ 
                    render_page(); 
                } else { 
                    report_error(); 
                }
            },
            failure : function(code){
                code = code?code:0;
                report_error(code);
            }
        });
        
      }
    };
    window.__render_page = function(){};

    if (typeof scope.$setDomain == "undefined" || scope.$setDomain == true) {
      document.domain = "sina.com.cn";
    }
    if(/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == false){return;}
    document.addEventListener('mouseover', function(e){
        var ele = e.target;
        do{
            if(ele.tagName == 'A'){
                ele.target = '_self';
                return;
            }
            if(ele.tagName == 'DIV'){return;}
            ele = ele.parentNode;
        }while(ele);
    },false);
    })();

    scope.testboot={};//千万别删除，此代码测试发博文页面的Boot.js是否加载
})();
