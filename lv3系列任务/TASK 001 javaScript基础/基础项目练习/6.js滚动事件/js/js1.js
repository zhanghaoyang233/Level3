var html = document.querySelector('html')
window.onscroll = function(e) {
    if (window.scrollY > 100) {
        var child1 = document.querySelector('.child1'); //querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。 
        // querySelectorAll() 方法可以寻找所有的css元素
        child1.className = 'child1 ani'; //为child1加样式的属性名称
    }
}