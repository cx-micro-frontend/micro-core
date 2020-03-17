import echarts from 'echarts';
import tooltipStyle from '../config/tooltipStyle';

//显示引导线的环形图
export default function(data, chartID, options) {
  const defaultOpts = {
      centerPosition: ['30%', '50%'], //饼图圆心离容器左侧和顶部的距离
      radiusScale: ['50%', '70%'], //饼图半径，对应内圈和外圈的大小
      legendPosition: ['50%', '25%'], //图例位置
      legendMaxRowNum: 5, //图例每列最多个数
      legendFontSize: 12, //图例字体大小
      labelLineLength: 10, //引导线第一段长度
      labelLineLength2: 10, //引导线第二段长度
      tooltipUnit: '', //提示框单位
      clickFn: null, //点击事件
    },
    opts = Object.assign(defaultOpts, options);
  let names = [],
    nums = [],
    length = data[0].length >= opts.legendMaxRowNum ? opts.legendMaxRowNum : data[0].length,
    height = 15 * length + 10 * (length - 1);
  for (let i = 0; i < data[0].length; i++) {
    names.push({
      name: data[0][i].targetItem,
      icon: 'circle',
    });
    nums.push({
      value: data[0][i].actualTarget,
      name: data[0][i].targetItem,
    });
  }
  let chart = echarts.init(document.getElementById(chartID), 'customed');
  const tooltip = Object.assign(
    {
      trigger: 'item',
      formatter: function(result) {
        let unit = opts.tooltipUnit;
        if (parseInt(result.value).toString().length > 4) {
          result.value = (parseFloat(result.value) / 10000).toFixed(2);
          if (opts.tooltipUnit.indexOf('万') > -1) {
            unit = unit.replace('万', '亿');
          } else {
            unit = `万${unit}`;
          }
        }
        return `${result.name}<br>${result.value}${unit} (${result.percent}%)`;
      },
    },
    tooltipStyle
  );
  chart.setOption({
    tooltip: tooltip,
    legend: {
      left: opts.legendPosition[0],
      top: opts.legendPosition[1],
      height: height,
      orient: 'vertical',
      selectedMode: false,
      data: names,
      textStyle: {
        lineHeight: 15,
        fontSize: opts.legendFontSize,
      },
    },
    series: [
      {
        type: 'pie',
        radius: opts.radiusScale,
        center: opts.centerPosition,
        avoidLabelOverlap: true,
        data: nums,
        label: {
          lineHeight: 12,
          formatter: '{b}：{c} ({d}%)',
        },
        labelLine: {
          length: opts.labelLineLength,
          length2: opts.labelLineLength2,
        },
      },
    ],
  });
  opts.clickFn &&
    chart.on('click', result => {
      opts.clickFn(result, data);
    });
}
