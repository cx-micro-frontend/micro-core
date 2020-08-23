import echarts from 'echarts';

function assign(obj1, obj2) {
  //相当于Object.assign()
  for (var key in obj2) {
    obj2.hasOwnProperty(key) === true && (obj1[key] = obj2[key]); //此处hasOwnProperty是判断自有属性
  }
  return obj1;
}

echarts.registerTheme('customed', {
  color: ['#3487c6', '#46b175', '#efba41', '#ef7a37', '#a058d4', '#27bbb8'],
  backgroundColor: 'rgba(0, 0, 0, 0)',
  textStyle: {},
  title: {
    textStyle: {
      color: '#333',
    },
    subtextStyle: {
      color: '#aaa',
    },
  },
  line: {
    itemStyle: {
      normal: {
        borderWidth: '0',
      },
    },
    lineStyle: {
      normal: {
        width: '2',
      },
    },
    symbolSize: '5',
    symbol: 'emptyCircle',
    smooth: true,
  },
  radar: {
    itemStyle: {
      normal: {
        borderWidth: '0',
      },
    },
    lineStyle: {
      normal: {
        width: '2',
      },
    },
    symbolSize: '2',
    symbol: 'emptyCircle',
    smooth: true,
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
      emphasis: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
    },
  },
  pie: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  boxplot: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  parallel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  sankey: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  funnel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  gauge: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#c23531',
        color0: '#314656',
        borderColor: '#c23531',
        borderColor0: '#314656',
        borderWidth: 1,
      },
    },
  },
  graph: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    lineStyle: {
      normal: {
        width: 1,
        color: '#aaa',
      },
    },
    symbolSize: '2',
    symbol: 'emptyCircle',
    smooth: true,
    color: ['#3487c6', '#46b175', '#efba41', '#ef7a37', '#a058d4', '#27bbb8'],
    label: {
      normal: {
        textStyle: {
          color: '#333333',
        },
      },
    },
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: '#000',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgb(100,0,0)',
        },
      },
    },
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: '#000',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgb(100,0,0)',
        },
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#666666',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#ccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: 'red',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#999999',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#efefef'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: 'red',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: false,
      textStyle: {
        color: '#333',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#ccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['red', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: 'red',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: false,
      textStyle: {
        color: '#333',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#ccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: '#999999',
      },
      emphasis: {
        borderColor: '#666666',
      },
    },
  },
  legend: {
    textStyle: {
      color: '#333333',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#ccc',
        width: 1,
      },
      crossStyle: {
        color: '#ccc',
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: '#293c55',
      width: '1',
    },
    itemStyle: {
      normal: {
        color: '#293c55',
        borderWidth: 1,
      },
      emphasis: {
        color: '#a9334c',
      },
    },
    controlStyle: {
      normal: {
        color: '#293c55',
        borderColor: '#293c55',
        borderWidth: 0.5,
      },
      emphasis: {
        color: '#293c55',
        borderColor: '#293c55',
        borderWidth: 0.5,
      },
    },
    checkpointStyle: {
      color: '#2b181c',
      borderColor: 'rgba(194,53,49, 0.5)',
    },
    label: {
      normal: {
        textStyle: {
          color: '#293c55',
        },
      },
      emphasis: {
        textStyle: {
          color: '#293c55',
        },
      },
    },
  },
  visualMap: {
    color: ['#3487c6', '#46b175', '#efba41', '#ef7a37', '#a058d4', '#27bbb8'],
  },
  dataZoom: {
    backgroundColor: 'rgba(47,69,84,0)',
    dataBackgroundColor: 'rgba(47,69,84,0.3)',
    fillerColor: 'rgba(167,183,204,0.4)',
    handleColor: '#a7b7cc',
    handleSize: '100%',
    textStyle: {
      color: '#333',
    },
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: '#333333',
        },
      },
      emphasis: {
        textStyle: {
          color: '#333333',
        },
      },
    },
  },
});

// 环形图
// commonPieChart(data, chartID, opts)
// data             data
// chartID	        放置图表的元素id
// opts包含了下列参数
// radiuPosition    饼图圆心位置，数组的元素分别对应离容器左侧和顶部的距离，例如：['50%','50%']
// radiusScale      饼图半径，对应内圈和外圈的大小，例如：['50%','75%']
// legendPosition   图例位置，例如：['50%','50%']
// formatterName    中心文字内容，例如：function(){ return xxx;}

// 柱状图
// barChart(data ,chartID, opts)
// data             图表数据
// chartID          放置图表的元素id
// opts包含了下列参数
// legendName       图例名称，例如：['xx']
// tooltipFormatter 浮动层文字
// yAxisFormatter   Y轴文字
// showPlan         是否同时显示计划与实际(默认不显示，显示的值为true)

export const nsecharts = {
  _tooltipStyle: {
    padding: [11, 16],
    width: 159,
    height: 64,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    extraCssText: 'box-shadow: 0 3px 6px 0 rgba(0,0,0,0.24);',
    textStyle: {
      color: '#333',
      fontSize: 14,
    },
  },
  //图形通用颜色列表
  _colorList: [
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            offset: 0,
            color: '#5DC3F0',
          },
          {
            offset: 1,
            color: '#3487C6',
          },
        ]),
      },
    },
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#ffa87a',
          },
          {
            offset: 1,
            color: '#ff6161',
          },
        ]),
      },
    },
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#a5ec27',
          },
          {
            offset: 1,
            color: '#4ed552',
          },
        ]),
      },
    },
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#11d6cb',
          },
          {
            offset: 1,
            color: '#23c8c4',
          },
        ]),
      },
    },
  ],
  //环形图
  pieChart: function(data, chartID, options) {
    // data--数据，chartID--放置图表的元素id，options包含了下列参数
    var defaultOpts = {
      centerPosition: ['30%', '50%'], //饼图圆心离容器左侧和顶部的距离
      radiusScale: ['50%', '70%'], //饼图半径，对应内圈和外圈的大小
      textPosition: ['29%', '44%'], //标题离容器左侧和顶部的距离
      text: ['', ''], //标题和副标题文本
      color: '#333', //标题文字颜色
      fontSize: 12, //标题字体大小
      subtextFontSize: 12, //副标题字体大小
      legendPosition: ['50%', '25%'], //图例离容器左侧和顶部的距离
      legendMaxRowNum: 5, //图例每列最多个数
      legendMaxCharNum: 20, //图例文字最大个数
      legendFontSize: 12, //图例字体大小
      tooltipConfine: false, //是否将提示框限制在图表区域内
      tooltipUnit: '', //提示框单位
      tooltipExtra: '', //提示框额外数据
      tooltipExtraUnit: '', //提示框额外数据单位
      clickFn: null, //点击事件
    };
    var opts = assign(defaultOpts, options);
    var names = [],
      nums = [],
      length = data.length >= opts.legendMaxRowNum ? opts.legendMaxRowNum : data.length,
      height = 15 * length + 10 * (length - 1);
    for (var i = 0; i < data.length; i++) {
      names.push({
        name: data[i].targetItem,
        icon: 'circle', //图例图标类型
      });
      nums.push({
        name: data[i].targetItem,
        value: data[i].actualTarget,
      });
    }
    var chart = echarts.init(document.getElementById(chartID), 'customed'),
      tooltip = assign(
        {
          trigger: 'item',
          confine: opts.tooltipConfine,
          formatter: function(result) {
            var unit = opts.tooltipUnit;
            if (parseInt(result.value).toString().length > 4) {
              result.value = (parseFloat(result.value) / 10000).toFixed(2);
              if (opts.tooltipUnit.indexOf('万') > -1) {
                unit = unit.replace('万', '亿');
              } else {
                unit = '万' + unit;
              }
            }
            // debugger
            if (opts.tooltipExtra) {
              return `${result.name}<br>${data[result.dataIndex][opts.tooltipExtra]}${
                opts.tooltipExtraUnit
              } ${result.value}${unit} (${result.percent}%)`;
            } else {
              return `${result.name}<br>${result.value}${unit} (${result.percent}%)`;
            }

            // return result.name + '<br>' + result.value + unit + ' (' + result.percent + '%)';
          },
        },
        this._tooltipStyle
      );
    chart.setOption({
      title: {
        text: opts.text[0],
        subtext: opts.text[1],
        left: opts.textPosition[0],
        top: opts.textPosition[1],
        itemGap: 0,
        textAlign: 'center',
        triggerEvent: true, //是否触发事件
        textStyle: {
          fontWeight: 'bold',
          lineHeight: opts.fontSize,
          fontSize: opts.fontSize,
          color: opts.color,
        },
        subtextStyle: {
          fontWeight: 'bold',
          lineHeight: opts.subtextFontSize,
          fontSize: opts.subtextFontSize,
          color: opts.color,
        },
      },
      tooltip: tooltip, //提示框
      legend: {
        //图例
        left: opts.legendPosition[0],
        top: opts.legendPosition[1],
        height: height,
        orient: 'vertical',
        selectedMode: false, //选中图例是否改变系列的显示状态
        data: names,
        textStyle: {
          lineHeight: 15, //行高最小为15px
          fontSize: opts.legendFontSize,
        },
        formatter: function(value) {
          if (value.length > opts.legendMaxCharNum) {
            value = value.slice(0, opts.legendMaxCharNum - 1) + '…';
          }
          return value;
        },
      },
      series: [
        {
          type: 'pie', //图表类型
          radius: opts.radiusScale,
          center: opts.centerPosition,
          avoidLabelOverlap: false, //是否启用防止标签重叠策略
          data: nums,
          label: {
            show: false, //图表上是否显示数据
          },
        },
      ],
    });
    opts.clickFn &&
      chart.on('click', result => {
        opts.clickFn(result, data);
      });
  },

  //柱状图
  columnChart: function(data, chartID, options) {
    var defaultOpts = {
      gridLeft: 30, //图表距离容器左边界距离
      gridTop: 60, //上
      gridRight: 30, //右
      gridBottom: 30, //下
      legendTop: 10, //图例距离容器上边界距离
      legendName: [''], //图例名称
      tooltipUnit: '', //提示框单位
      xAxisFontSize: 12, //X轴字体大小
      xAxisMaxCharNum: 2, //X轴每行文字最大个数
      xAxisFilter: '', //X轴过滤文字
      yAxisUnit: '', //Y轴单位
      yAxisSplitNum: 5, //Y轴分割线个数
      dataZoomStyle: [0, 100, false], //图表和dataZoom组件的开始位置，结束位置以及是否显示dataZoom组件
      showPlan: false, //是否显示计划。注：当值为true时，确保包含数据的数组个数为1
      clickFn: null, //点击事件
    };
    var opts = assign(defaultOpts, options);
    var xAxisNames = [],
      series = [];
    if (opts.showPlan) {
      if (data.length > 1) throw '当设置showPlan的值为true时，数组长度不能大于1';
      var seriesData1 = [],
        seriesData2 = [];
      for (var i = 0; i < data[0].length; i++) {
        xAxisNames.push(data[0][i].departmentName.replace(opts.xAxisFilter, ''));
        seriesData1.push(data[0][i].shouldTarget);
        seriesData2.push(data[0][i].actualTarget);
      }
      series.push({
        type: 'bar',
        name: opts.legendName[0],
        data: seriesData1,
        itemStyle: this._colorList[0],
        barMaxWidth: 20,
        barCategoryGap: '30%', //柱间距离
      });
      series.push({
        type: 'bar',
        name: opts.legendName[1],
        data: seriesData2,
        itemStyle: this._colorList[1],
        barMaxWidth: 20,
        barCategoryGap: '30%',
      });
    } else {
      var seriesData = [];
      for (var j = 0; j < data.length; j++) {
        seriesData.push([]);
        for (var k = 0; k < data[j].length; k++) {
          j == 0 && xAxisNames.push(data[j][k].departmentName.replace(opts.xAxisFilter, '')); //以第一个数组元素的值作为x轴的名称
          seriesData[j].push(data[j][k].actualTarget);
        }
        series.push({
          type: 'bar',
          name: opts.legendName[j],
          data: seriesData[j],
          itemStyle: this._colorList[j],
          barMaxWidth: 20,
          barCategoryGap: '30%',
        });
      }
    }
    var chart = echarts.init(document.getElementById(chartID), 'customed'),
      tooltip = assign(
        {
          trigger: 'axis',
          formatter: function(result) {
            var returnVal = result[0].name;
            for (var i = 0; i < result.length; i++) {
              var marker =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                result[i].color.colorStops[0].color +
                ';"></span>';
              if (result[i].seriesName === '') {
                returnVal += '<br>' + result[i].value + opts.tooltipUnit;
              } else {
                returnVal +=
                  '<br>' +
                  marker +
                  result[i].seriesName +
                  '：' +
                  result[i].value +
                  opts.tooltipUnit;
              }
            }
            return returnVal;
          },
        },
        this._tooltipStyle
      );
    chart.setOption({
      tooltip: tooltip,
      grid: {
        //容器间距
        left: opts.gridLeft,
        top: opts.gridTop,
        right: opts.gridRight,
        bottom: opts.gridBottom,
        containLabel: true, //是否包含坐标轴的刻度标签
      },
      legend: {
        top: opts.legendTop,
        data: opts.legendName,
      },
      xAxis: {
        offset: 0, //X轴相对于默认位置的上下偏移
        data: xAxisNames,
        axisLabel: {
          lineHeight: opts.xAxisFontSize,
          fontSize: opts.xAxisFontSize,
          formatter: function(value) {
            var str = '',
              maxLength = opts.xAxisMaxCharNum,
              rowNum = Math.ceil(value.length / maxLength); //总行数
            for (var i = 0; i < rowNum; i++) {
              var part = value.slice(i * maxLength, (i + 1) * maxLength);
              rowNum - 1 > 0 && (part += '\n');
              str += part;
            }
            return str;
          },
        },
      },
      yAxis: {
        type: 'value',
        splitNumber: opts.yAxisSplitNum,
        axisLabel: {
          formatter: function(value) {
            return value + opts.yAxisUnit;
          },
        },
      },
      dataZoom: [
        {
          type: 'inside', //坐标系内拖动或滚轮(或移动触屏上的两指滑动)进行缩放
          xAxisIndex: 0,
          start: opts.dataZoomStyle[0],
          end: opts.dataZoomStyle[1],
          zoomOnMouseWheel: false, //鼠标滚轮不能触发缩放
        },
        {
          type: 'slider', //dataZoom组件内拖动
          xAxisIndex: 0,
          start: opts.dataZoomStyle[0],
          end: opts.dataZoomStyle[1],
          show: opts.dataZoomStyle[2],
          zoomLock: true, //是否锁定选择区域
        },
      ],
      series: series,
    });
    opts.clickFn &&
      chart.on('click', result => {
        opts.clickFn(result, data);
      });
    // opts.clickFn && (chart.on('click', opts.clickFn));
  },
};
