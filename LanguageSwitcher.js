document.getElementById('languageSelector').addEventListener('change', function () {
    var language = this.value;
    var currentUrl = new URL(window.location.href);

    // 获取当前的路径（例如 "/c/page.html"）
    var currentPath = currentUrl.pathname;

    // 假设您的URL结构是这样的：
    // 英文: https://en.einfachwebsiteerstellen.de/c/page.html
    // 德语: https://einfachwebsiteerstellen.de/c/page.html
    // 中文: https://cn.einfachwebsiteerstellen.de/c/page.html

    // 移除语言部分（如果有）来获取基础路径
    // 例如，从 "/en/c/page.html" 获取 "/c/page.html"
    var basePath = currentPath.replace(/^\/(en|de|cn)\//, '/');

    // 根据选择的语言更改子域名
    switch (language) {
        case 'en':
            currentUrl.hostname = 'en.einfachwebsiteerstellen.de';
            break;
        case 'de':
            currentUrl.hostname = 'einfachwebsiteerstellen.de';
            break;
        case 'cn':
            currentUrl.hostname = 'cn.einfachwebsiteerstellen.de';
            break;
        // 可以根据需要添加更多的 case
    }

    currentUrl.pathname = basePath; // 设置新的路径

    // 跳转到新的URL
    window.location.href = currentUrl.href;
});
