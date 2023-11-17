document.getElementById('languageSelector').addEventListener('change', function () {
    var language = this.value;
    var currentUrl = new URL(window.location.href);
    var currentPath = currentUrl.pathname; // 获取当前页面的路径

    // 对于德语，我们需要移除子域名；对于其他语言，我们需要添加相应的子域名
    var hostname = currentUrl.hostname;
    var domain = 'einfachwebsiteerstellen.de';
    var newSubdomain = language === 'de' ? '' : language + '.';
    
    // 如果当前已经是子域名，先去掉子域名部分
    if (hostname.startsWith('en.') || hostname.startsWith('cn.')) {
        hostname = hostname.substring(hostname.indexOf('.') + 1);
    }

    // 构建新的URL
    var newUrl = `https://${newSubdomain}${hostname}${currentPath}`;

    // 跳转到新的URL
    window.location.href = newUrl;
});
