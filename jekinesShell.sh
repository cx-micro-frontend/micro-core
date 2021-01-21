#Design by Broccoli spring( gcx-高仓雄 ) <Lensgcx@163.com>
#!/usr/bin/env bash

#子系统（一级大模块系统，如：arm，system，check_house，work_order等)
SUBSYSTEMS_LIST='"arm","system","check_house","work_order"'

SUBSYSTEMS_LIST='"system"'


#子模块（内部子模块，如：owner，system，charge，report 等)
MODULES_LIST='"quality_components","projectCheck","system"'

#头部工具条（如：)
HEADTOOLBAR_LIST='"owner","charge","report","system1231"'


S='{"SUBSYSTEMS_LIST":['${SUBSYSTEMS_LIST}']}'
M='{"MODULES_LIST":['${MODULES_LIST}']}'
H='{"HEADTOOLBAR_LIST":['${HEADTOOLBAR_LIST}']}'

#cross-env MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} node ./injecter/injectionList/index.js

#cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} node node_modules/cx-builder/lib/run/prod/run.prod.js

#cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} npm run build:jenkins

cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} npm run build:dist
