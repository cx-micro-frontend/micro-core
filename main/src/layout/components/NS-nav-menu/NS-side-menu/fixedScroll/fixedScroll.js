import './fixedScroll.scss';
//定义滚动用对象
let scrollObj = {
  autoHeight: 0,
  clickY: 0,
  drag: false,
  mousedownFn: null,
};

import { addClass, removeClass } from '../../../../../utils/library/class';

export default {
  methods: {
    //
    /**
     * 初始化滚动
     *
     * @param el
     * @param obj - obj是用于存储drag/clickY/autoHeight属性和mousedownFn/mousewheelFn方法的对象
     */
    initScroll(el, obj) {
      //插入滚动条
      var wrap = document.createElement('div'),
        scrollbar = document.createElement('div');
      wrap.className = 'scrollbar-wrap';
      scrollbar.className = 'scrollbar-wrap__scrollbar';
      wrap.appendChild(scrollbar);
      el.appendChild(wrap);
      el.style.position = 'relative';
      // el.style.overflow = 'hidden';
      //子元素(除滚动条和not-included类外)添加标记class
      for (var dom of el.children) {
        !/scrollbar-wrap|not-included/.test(dom.className) && addClass(dom, 'filler');
      }
      //定义常用元素
      var wrap = el.querySelector('.scrollbar-wrap'),
        scrollbar = el.querySelector('.scrollbar-wrap__scrollbar'),
        topFiller = el.querySelector('.filler');
      topFiller.style.marginTop === '' && (topFiller.style.marginTop = '0px');
      //滚动用对象赋值
      for (var dom of el.querySelectorAll('.filler')) {
        obj.autoHeight += dom.offsetHeight;
      }
      obj.mousewheelFn = function(event) {
        //更新滚动条和滚动区域的位置
        var marginTop = parseFloat(topFiller.style.marginTop),
          minMarginTop = el.offsetHeight - obj.autoHeight;
        event.wheelDelta > 0 ? (marginTop += 100) : (marginTop -= 100);
        marginTop > 0 && (marginTop = 0);
        marginTop < minMarginTop && (marginTop = minMarginTop);
        topFiller.style.marginTop = marginTop + 'px';
        scrollbar.style.marginTop =
          ((wrap.offsetHeight - scrollbar.offsetHeight) * marginTop) / minMarginTop + 'px';
        event.preventDefault();
      };
      //初始化滚动条长度及绑定滚动条相关事件处理函数
      obj.autoHeight > el.offsetHeight &&
        (scrollbar.style.height = Math.pow(el.offsetHeight, 2) / obj.autoHeight + 'px');
      scrollbar.onmousedown = function(event) {
        obj.drag = true;
        obj.clickY = event.clientY - this.offsetTop; //clientY为鼠标相对可视区域的垂直坐标，offsetTop为元素相对父级元素的垂直坐标
        addClass(scrollbar, 'active');
        event.preventDefault(); //避免鼠标松开后元素仍被选中
        typeof obj.mousedownFn === 'function' && obj.mousedownFn();
      };
      window.onmousemove = function(event) {
        if (!obj.drag) return;
        //更新滚动条和滚动区域的位置
        var marginTop = event.clientY - obj.clickY,
          maxMarginTop = wrap.offsetHeight - scrollbar.offsetHeight;
        marginTop < 0 && (marginTop = 0);
        marginTop > maxMarginTop && (marginTop = maxMarginTop);
        scrollbar.style.marginTop = marginTop + 'px';
        topFiller.style.marginTop =
          ((el.offsetHeight - obj.autoHeight) * marginTop) / maxMarginTop + 'px';
      };
      window.onmouseup = window.onblur = function() {
        obj.drag = false;
        removeClass(scrollbar, 'active');
      };
    },

    /**
     * 更新滚动
     * @param el
     * @param obj
     */
    updateScroll(el, obj) {
      var wrap = el.querySelector('.scrollbar-wrap'),
        scrollbar = el.querySelector('.scrollbar-wrap__scrollbar'),
        topFiller = el.querySelector('.filler');
      //滚动用对象更新
      obj.autoHeight = 0;
      for (var dom of el.querySelectorAll('.filler')) {
        obj.autoHeight += dom.offsetHeight;
      }
      //当自适应高度大于设定高度
      if (obj.autoHeight > el.offsetHeight) {
        //绑定滚轮事件处理函数
        el.onmousewheel = function(event) {
          obj.mousewheelFn(event);
        };
        //更新滚动区域位置
        var marginTop = parseFloat(topFiller.style.marginTop),
          minMarginTop = el.offsetHeight - obj.autoHeight;
        marginTop < minMarginTop && (marginTop = minMarginTop); //当区域底部收缩导致空缺时，当前区域底部会填补空缺
        topFiller.style.marginTop = marginTop + 'px';
        //更新滚动条长度和位置并显示
        scrollbar.style.height = Math.pow(el.offsetHeight, 2) / obj.autoHeight + 'px';
        scrollbar.style.marginTop =
          ((wrap.offsetHeight - scrollbar.offsetHeight) * marginTop) / minMarginTop + 'px';
        wrap.style.display = 'block';
      } else {
        //解除滚轮事件处理函数
        el.onmousewheel = null;
        //滚动区域移到顶部
        topFiller.style.marginTop = '0px';
        //隐藏滚动条并移到顶部
        wrap.style.display = 'none';
        scrollbar.style.marginTop = '0px';
      }
    },
  },
  mounted() {
    this.initScroll(document.querySelector('.ns-biz-sidebar'), scrollObj);
    this.$nextTick(function() {
      //将回调延迟到下次DOM更新循环之后执行。在修改数据之后立即使用它，然后等待DOM更新。
      setTimeout(() => {
        this.updateScroll(document.querySelector('.ns-biz-sidebar'), scrollObj);
      }, 100);
    });
  },
};
