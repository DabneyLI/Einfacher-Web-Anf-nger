document.getElementById('languageSelector').addEventListener('change', function () {
    var language = this.value;
    var currentUrl = new URL(window.location.href);

    // 获取当前页面的路径，例如 "/KI-Website-Generator/index.html"
    var currentPath = currentUrl.pathname;

    // 根据选择的语言构建新的子域名
    var newSubdomain = language === 'de' ? '' : language + '.';
    var newUrl;

    // 创建一个新的URL对象，用新的子域名和当前路径
    if (language === 'de') {
        newUrl = new URL('https://' + currentUrl.hostname + currentPath);
    } else {
        newUrl = new URL('https://' + newSubdomain + 'einfachwebsiteerstellen.de' + currentPath);
    }

    // 跳转到新的URL
    window.location.href = newUrl.href;
});
