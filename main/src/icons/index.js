const req = require.context('@ROOT/config/expand/iconfont', true, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
