'use strict';
// var sinaadToolkit;
// var sinaadsRenderHandler;
sinaadsRenderHandler = window.sinaadsRenderHandler || {};
sinaadsRenderHandler.blogbf = function (element, width, height, content, config) {

    function handler(config) {
        var CLOSE_NORMAL_BTN = "http://d1.sina.com.cn/shh/ws/2012/09/29/1/close1.gif",
            CLOSE_ZINDEX = 11010;
        var isClosed = false;
        var container = new sinaadToolkit.Box({
            width : config.width,
            height : config.height,
            position : 'none bottom',
            autoShow : 0,
            follow : true,
            zIndex : 10501
        });
        container.getMain().style.cssText += ';transition:all .3s;-webkit;-webkit-transition: all .3s;';

        var mainContent = sinaadToolkit.ad.createHTML(
            config.type,
            config.src,
            config.width,
            config.height,
            config.link,
            config.monitor
        //增加一个遮罩层
        );

        var closeBtn = document.createElement('div');
        closeBtn.style.cssText = 'background:url(' + CLOSE_NORMAL_BTN + ') left top no-repeat;cursor:pointer;z-index:' +
            CLOSE_ZINDEX + ';position:absolute;width:42px;height:19px;right:7px;top:1px;';

        var mainWrap = document.createElement('div');
        mainWrap.innerHTML = mainContent;
        container.getMain().appendChild(mainWrap);
        container.getMain().appendChild(closeBtn);

        sinaadToolkit.event.on(closeBtn, 'click', function () {
            container.hide();
            timer && clearInterval(timer);
            isClosed = true;
            //关闭之后 15分钟不再显示。FrequenceController.disable没有暴露参数。
            sinaadToolkit.storage.set(sinaadsRFC.uid + config.pdps + '_disabled', 1, 15 * 60 * 1000);
        });

        sinaadToolkit.event.on(window, 'scroll', function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > config.top) {
                !isClosed && container.show();
            } else {
                !isClosed && container.hide();
            }
        });
        
        function getDivElementsByClassName (clz) {
            var divs =  document.getElementsByTagName('div');
            var reg = new RegExp('\\b' + clz + '\\b');
            for (var i = 0; i < divs.length; i++) {
                if (reg.test(divs[i].className)) {
                    return divs[i];
                }
            }
            return null;
        }
        
        function detectAd () {//'blogrecommend' 'PDPS000000025956'
            var popAd = document.getElementById('blogrecommend') || getDivElementsByClassName('blogreco') || getDivElementsByClassName('popBox');
            var pdpsAd = document.getElementById('PDPS000000025956');
            var remain;
            if ((popAd) || (pdpsAd && pdpsAd.clientWidth !== 0)) {
                remain = document.body.clientWidth - 950;
                container.getMain().style.left = Math.floor(remain / 2) + 'px';
                container.position = Math.floor(remain / 2) + ' bottom';
            } else {
                    /**
                     * 居中底浮广告，IE下，margin auto的方式不起作用
                     * 另该container自身有timer重置position，需要同时修改position属性
                     */
                    remain = document.body.clientWidth - config.width;
                    container.getMain().style.left = Math.floor(remain / 2) + 'px';
                    container.position = Math.floor(remain / 2) + ' bottom';
            }
        }

        var timer = setInterval(detectAd, 1000);
        detectAd();
    
    }

    content = content[0];
    var data = {
        width: width || 640,
        height: height || 90,
        src: content.src,
        link: content.link,
        type: content.type,
        monitor: content.monitor || [],
        top : config.sinaads_blogdf_top || 600, //滚动到top值时显示
        pdps: config.sinaads_ad_pdps
    };


    handler(data);

};