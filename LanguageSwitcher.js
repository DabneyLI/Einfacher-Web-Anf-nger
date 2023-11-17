document.getElementById('languageSelector').addEventListener('change', function () {
    var language = this.value;
    var currentUrl = new URL(window.location.href);

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

    // 跳转到新的URL
    window.location.href = currentUrl.href;
});