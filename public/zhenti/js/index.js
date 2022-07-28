var ua = window.navigator.userAgent;
if (/Mobile|iP(hone|ad)|Android|BlackBerry|IEMobile/.test(ua)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    // link.href = '//misc.eol.cn/html/ky/zhenti/css/mobile.css';
    link.href = 'css/mobile.css';
    head.appendChild(link);
    var root=document.getElementById(".ad1_img");
         root.className="active1";
    $("iframe").css("display","block");
}
