document.getElementById('languageSelector').addEventListener('change', function () {
    var language = this.value;
    var currentUrl = new URL(window.location.href);

    // 获取当前页面的路径，移除现有的语言子文件夹（如果存在）
    var currentPath = currentUrl.pathname.replace(/\/(en|cn)\//, '/'); 

    // 根据选择的语言更新路径
    if (language === 'en' || language === 'cn') {
        currentPath = '/' + language + currentPath;
    }

    // 构建新的URL
    var newUrl = currentUrl.origin + currentPath + currentUrl.search;

    // 跳转到新的URL
    window.location.href = newUrl;
});
