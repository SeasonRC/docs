import DefaultTheme from "vitepress/theme";

// 图片缩放部分导入
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import "./styles/index.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    
    // 继承默认主题
    DefaultTheme.enhanceApp(ctx);
  },

  // 图片缩放
  setup() {
    const route = useRoute();
    const initZoom = () => {
        mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};