import cookie from './modules/utils'

import Base from './modules/base';
import TopBar from './modules/TopBar';
import ZoomPage from './modules/ZoomPage';
import PointerFllow from './modules/PointerFllow';
import CursorAuto from './modules/CursorAuto';
import BigText from './modules/BigText';
class Assist extends Base {
  
    constructor(opts = {}) {
      super(opts);
      // 合并参数
      this.mergeConfig(opts);
      this.init();
      console.log('cook-----',cookie.get('show',this.config.namespace))
      if(cookie.get('show',this.config.namespace)) {
        this.isShowTopBar(true)
      }
    }
  
    init() {
      this.use(TopBar);
      this.use(ZoomPage);
      this.use(PointerFllow);
      this.use(CursorAuto);
      this.use(BigText);
    }
    
  }
  export default Assist;