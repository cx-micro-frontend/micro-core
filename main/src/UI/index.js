import expand from '../../expand';
//依赖
import './depends';

//load applaction style
import '../style/index.scss';

//icon
import '../assets/iconfont/iconfont';

//components
import '../components/index';

//enject UI
import '../../../injection/entrance/entrance_ui';

//load utils event
import '../utils';

//load custom iconfont
expand.UI.iconfont();
//load custom theme style
expand.UI.theme();
