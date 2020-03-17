import echarts from 'echarts';
import themeInit from './config/theme-init';
echarts.registerTheme('customed', themeInit);

//环形图
import pieChart from './modules/pieChart';
//显示引导线的环形图
import labelLinePieChart from './modules/labelLinePieChart';
//柱状图
import columnChart from './modules/columnChart';

export default {
  pieChart,
  labelLinePieChart,
  columnChart,
};
