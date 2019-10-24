import { dataFilter } from '@NEAP/utils/fetch/fetchDataType'
import fetch from '@NEAP/utils/fetch/fetch'

// 请求数据字典数据（单位类型）
export function getDictionaryData (query) {
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/getDictionary',
    method: 'post',
    data: query
  });
};

// 获取项目列表
export function getProjectList (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/getProjectListByUser',
    method: 'get',
    query: query
  });
};

// 获取房产范围
export function getBuildingDataForLayout (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/house/getBuildingDataForLayout',
    method: 'post',
    data: query
  });
};

/***************** 导出下载兼容写法 ********************/
export function downLoadFile(url) {
  if ((navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1) || (navigator.userAgent.indexOf("Trident") > -1)){
    var oPop = window.open(url,"","width=1, height=1, top=5000, left=5000");
    for(; oPop.document.readyState != "complete"; )
    {
      if (oPop.document.readyState == "complete")break;
    }
    oPop.document.execCommand("SaveAs")
    oPop.close();
  } else {
    var a = document.createElement('a')
    var filename = 'myfile.xlsx'
    a.href = url
    a.download = filename
    a.click()
  }
}

/******** 检查项 *********/

// 根据交付类型获取检查项
export function getTargetByDeliverType (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/target/getTargetByDeliverType',
    method: 'post',
    data: query
  });
};

// 新增关注问题项
export function addStandardproblem (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/standardproblem/addStandardproblem',
    method: 'post',
    data: query
  });
};

// 编辑关注问题项
export function updateStandardproblem (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/standardproblem/updateStandardproblem',
    method: 'post',
    data: query
  });
};

// 删除关注问题项
export function deleteStandardproblemById (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/standardproblem/deleteStandardproblemById',
    method: 'post',
    data: query
  });
};

/******** 单位管理 *********/

// 新增管理单位
export function addUnit (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/addUnit',
    method: 'post',
    data: query
  });
};

// 更新管理单位
export function updateUnit (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/updateUnit',
    method: 'post',
    data: query
  });
};

// 删除管理单位
export function deleteUnit (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/deleteUnitById',
    method: 'post',
    data: query
  });
};

// 新增管理单位下属项目
export function addProject (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/addProject',
    method: 'post',
    data: query
  });
};

// 编辑管理单位下属项目
export function updateProject (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/updateProject',
    method: 'post',
    data: query
  });
};

// 删除管理单位下属项目
export function deleteProject (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/deleteProjectById',
    method: 'post',
    data: query
  });
};

// 新增管理单位下属供应商参与人
export function addUser (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/addUser',
    method: 'post',
    data: query
  });
};

// 编辑管理单位下属供应商参与人
export function updateUser (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/updateUser',
    method: 'post',
    data: query
  });
};

/******** 户型 *********/

// 新增户型
export function addLayout (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/layout/addLayout',
    method: 'post',
    data: query
  });
};

// 编辑户型
export function updateLayout (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/layout/updateLayout',
    method: 'post',
    data: query
  });
};

// 删除户型
export function deleteLayout (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/layout/deleteLayout',
    method: 'post',
    data: query
  });
};

// 绑定房间户型
export function bindingLayout (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/layout/bindingLayout',
    method: 'post',
    data: query
  });
};

/******** 项目设置 *********/

// 编辑项目
export function editProject (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/editProject',
    method: 'post',
    data: query
  });
};

// 获取所有单位
export function selectUnitList (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/selectUnitList',
    method: 'post',
    data: query
  });
};

// 新增项目单位
export function addProjectUnit (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/addProjectUnit',
    method: 'post',
    data: query
  });
};

// 编辑项目单位
export function updateProjectUnit (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/updateProjectUnit',
    method: 'post',
    data: query
  });
};

// 删除项目单位
export function deleteProjectUnitById (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/unit/deleteProjectUnitById',
    method: 'post',
    data: query
  });
};

// 新增项目分期
export function addProjectPhase (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/addProjectPhase',
    method: 'post',
    data: query
  });
};

// 编辑项目分期
export function editProjectPhase (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/editProjectPhase',
    method: 'post',
    data: query
  });
};

// 删除项目分期
export function deleteProjectPhase (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/deleteProjectPhase',
    method: 'post',
    data: query
  });
};

// 保存上传资料
export function saveProjectDoc (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/saveProjectDoc',
    method: 'post',
    data: query
  });
};

// 获取已上传资料
export function getProjectDoc (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/getProjectDoc',
    method: 'post',
    data: query
  });
};

// 删除已上传资料
export function deleteProjectDoc (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/deleteProjectDoc',
    method: 'post',
    data: query
  });
};

// 根据分期获取房产
export function getBuildingDataForProjectPhase (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/house/getBuildingDataForProjectPhase',
    method: 'post',
    data: query
  });
};

// 分期绑定房产
export function bindingPhaseHouse (query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/project/bindingPhaseHouse',
    method: 'post',
    data: query
  });
};



/**
 * 表头请求
 * @param head
 */
export function listColumnService(head) {
  dataFilter(head);
  return fetch({
    url: '/system/column/list-column',
    method: 'get',
    headers: head,
  });
}
