document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector('.menu');
    var navigation = document.querySelector('nav');
    var menuItems = document.querySelectorAll('nav ul li a');

    // 点击汉堡包按钮时切换导航栏的显示
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });

    // 点击菜单项时关闭导航栏
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navigation.classList.remove('active');
        });
    });

    // 点击菜单区域外的其他位置时关闭导航栏
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = navigation.contains(event.target) || menuButton.contains(event.target);

        if (!isClickInsideMenu && navigation.classList.contains('active')) {
            navigation.classList.remove('active');
        }
    });
});
