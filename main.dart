import "dart:html";
import "dart:js" as js;

void main() {
  const dynamic titles = {
    "type": 'category',
    "boundaryGap": true,
    "data": ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  };

  const dynamic title = {"text": '未来一周气温变化', "subtext": '纯属虚构'};
  const dynamic legend = {
    "data": ['最高气温', '最低气温']
  };

  const dynamic data = [
    {
      "name": '最高气温',
      "type": 'line',
      "data": [11, 11, 15, 13, 12, 13, 10],
      "markPoint": {
        "data": [
          {"type": 'max', "name": '最大值'},
          {"type": 'min', "name": '最小值'}
        ]
      },
      "markLine": {
        "data": [
          {"type": 'average', "name": '平均值'}
        ]
      }
    }
  ];

  var context = document.querySelector("#container");
  js.context["EntryPoint"].callMethod("drawLine", [
    context,
    js.JsObject.jsify(title),
    js.JsObject.jsify(legend),
    js.JsObject.jsify(titles),
    js.JsObject.jsify(data),
    "辆"
  ]);
}
