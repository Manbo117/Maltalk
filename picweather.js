// 天气插件
var result = window.matchMedia('(max-width: 768px)');

if (result.matches) {
//console.log('页面宽度小于等于768px');
//写移动端的js效果
} else {
//console.log('页面宽度大于768px');
//写页面宽度大于768px的js效果
WIDGET = {
    CONFIG: {
      "modules": "01234",
          "background": 5,
          "tmpColor": "ffffff",
          "tmpSize": 16,
          "cityColor": "ffffff",
          "citySize": 16,
          "aqiSize": 16,
          "weatherIconSize": 24,
          "alertIconSize": 18,
          "padding": "10px 10px 10px 10px",
          "shadow": "0",
          "language": "zh",
          "borderRadius": 5,
          "fixed": "true",
          "vertical": "middle",
          "horizontal": "center",
          "left": "210",
          "top": 10,
          "key": "yWDnSXAs5I"
    }
  }
}


