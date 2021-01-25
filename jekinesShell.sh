#Design by Broccoli spring( gcx-高仓雄 ) <Lensgcx@163.com>
#!/usr/bin/env bash

#=====================================================================
#子系统过滤抽取配置
#即：一级大模块系统，如：arm，system，check_house，work_order等
#注意：如果不需要配置，请将下列代码注释掉即可，如果想打全量包，则无需配置任何参数
#=====================================================================
#SUBSYSTEMS_LIST='"arm","system","check_house","work_order"'
#SUBSYSTEMS_LIST='"system"'


#=====================================================================
#子模块过滤抽取配置
#即：内部子模块，如：owner，system，charge，report 等
#注意：如果不需要配置，请将下列代码注释掉即可，如果想打全量包，则无需配置任何参数
#=====================================================================
#MODULES_LIST='"quality_components","projectCheck","system"'


#=====================================================================
#头部工具条过滤抽取配置
#即：如：消息，换肤，工具条等
#注意：如果不需要配置，请将下列代码注释掉即可，如果想打全量包，则无需配置任何参数
#=====================================================================
#HEADTOOLBAR_LIST='"owner","charge","report","system1231"'
#
#
#function transform {
#    if [ $1 ];
#    then
#       echo "[$1]"
#    else
#       echo "null"
#    fi
#}
#
#S='{"SUBSYSTEMS_LIST":'$(transform ${SUBSYSTEMS_LIST})'}'
#M='{"MODULES_LIST":'$(transform ${MODULES_LIST})'}'
#H='{"HEADTOOLBAR_LIST":'$(transform ${HEADTOOLBAR_LIST})'}'


#cross-env MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} node ./injecter/injectionList/index.js

#cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} node node_modules/cx-builder/lib/run/prod/run.prod.js

#cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins MODULES_LIST=${M} SUBSYSTEMS_LIST=${S} HEADTOOLBAR_LIST=${H} npm run build:jenkins




#SUBSYSTEMS='all,portal,design_center,arm,o2o_admin,work_order'
#MODULES='bill,refund,Meter,report,pay,job'
#HEADTOOLBAR='a,b,c,d,e,f,g'



cross-env NODE_ENV=production env_config=prod PROD_ENV=jenkins SUBSYSTEMS_LIST=$1 MODULES_LIST=$2  HEADTOOLBAR_LIST=$3 npm run build:dist
