const initFromAddPerson = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: {
      modelData: {
        organizationId: '',
        roleid: '5632275a-31f5-467c-ad16-6ce8bd4c5ed7',
        userIds: [172, 262],
      },
      fields: [],
      info: {
        id: null,
        enterpriseId: null,
        organizationId: null,
        jeCoreFuncinfoId: null,
        funcinfoAttachmentpath: null,
        funcinfoBigbutton: null,
        funcinfoBookmarkconfig: null,
        funcinfoChartsopen: null,
        funcinfoCheckstatus: null,
        funcinfoCheckuser: null,
        funcinfoCheckusercode: null,
        funcinfoCheckuserid: null,
        funcinfoChildfilter: null,
        funcinfoChildrefresh: null,
        funcinfoChildshowtype: null,
        funcinfoColumnlazy: null,
        funcinfoCombine: null,
        funcinfoCxclselmodel: null,
        funcinfoDatasource: null,
        funcinfoDdorder: null,
        funcinfoEnableformprint: null,
        funcinfoExpandentityname: null,
        funcinfoExpandjs: null,
        funcinfoExpandpanels: null,
        funcinfoFieldbordercolor: null,
        funcinfoFieldlazy: null,
        funcinfoFormbgcolor: null,
        funcinfoFormcols: null,
        funcinfoFormdefwidth: null,
        funcinfoFormjslistener: null,
        funcinfoFormlabelwidth: null,
        funcinfoFormlabelwidthEn: null,
        funcinfoFormlazy: null,
        funcinfoFormminwidth: null,
        funcinfoFormpaging: null,
        funcinfoFormpagingconfig: null,
        funcinfoFormtitle: null,
        funcinfoFormtitletype: null,
        funcinfoFuncaction: null,
        funcinfoFunccode: null,
        funcinfoFuncdic: null,
        funcinfoFuncdicconfig: null,
        funcinfoFuncname: null,
        funcinfoFuncnameEn: null,
        funcinfoFuncremark: null,
        funcinfoFunctype: null,
        funcinfoGroupfield: null,
        funcinfoGroupfieldtpl: null,
        funcinfoGroupformopen: null,
        funcinfoGuidelocation: null,
        funcinfoHelp: null,
        funcinfoHideformtbar: null,
        funcinfoHidegridtbar: null,
        funcinfoIcon: null,
        funcinfoIconcls: null,
        funcinfoIdname: null,
        funcinfoInserttype: null,
        funcinfoIsbookmark: null,
        funcinfoIscomplete: null,
        funcinfoIsgridtree: null,
        funcinfoLabelbgcolor: null,
        funcinfoListform: null,
        funcinfoMultiquery: null,
        funcinfoMultiselect: null,
        funcinfoNodeinfo: null,
        funcinfoNodeinfotype: null,
        funcinfoOrdersql: null,
        funcinfoOrdersqlDes: null,
        funcinfoPagesize: null,
        funcinfoPermconfig: null,
        funcinfoPkname: null,
        funcinfoQuerywidth: null,
        funcinfoReportfile: null,
        funcinfoSeedeptids: null,
        funcinfoSeedeptnames: null,
        funcinfoSeeroleids: null,
        funcinfoSeerolenames: null,
        funcinfoSeesentryids: null,
        funcinfoSeesentrynames: null,
        funcinfoSeeuserids: null,
        funcinfoSeeusernames: null,
        funcinfoSubsystemId: null,
        funcinfoSysmode: null,
        funcinfoSystemname: null,
        funcinfoTablename: null,
        funcinfoTablestyle: null,
        funcinfoTreerefresh: null,
        funcinfoTreetip: null,
        funcinfoTreetipEn: null,
        funcinfoVersion: null,
        funcinfoWheresql: null,
        funcinfoWheresqlDes: null,
        funcinfoWinformwh: null,
        syCreateorg: null,
        syCreateorgname: null,
        syCreatetime: null,
        syCreateuser: null,
        syCreateusername: null,
        syFlag: null,
        syFormuploadfiles: null,
        syLayer: null,
        syModifyorg: null,
        syModifyorgname: null,
        syModifytime: null,
        syModifyuser: null,
        syModifyusername: null,
        syNodetype: null,
        syOrderindex: null,
        syParent: null,
        syParentpath: null,
        syPath: null,
        resourcebuttons: null,
        buttonIds: null,
        dataSeeScopeVo: null,
      },
    },
    pageNum: null,
    pageSize: null,
    total: null,
  });
};

const listUserByOrganizationId = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      {
        userId: 172,
        enterpriseId: 767,
        organizationId: 263,
        groupId: 130,
        companyId: 0,
        departmentId: 0,
        sentryId: '0',
        positionId: 0,
        userName: '12',
        userSex: '1',
        userAge: 0,
        userAccount: '18857177119',
        userTelephone: '18857177119',
        userPassword: null,
        userBirthday: null,
        userHiredate: null,
        userState: '1',
        userType: 1,
        userCertificateType: '10',
        userCertificateNumber: '',
        userPicurl: '',
        isDeleted: 0,
        isActived: '1',
        remark: '',
        roleVos: null,
        organizationVo: null,
        roleids: null,
        organizationName: 'new see',
        organizationShortName: '',
        appId: null,
        handlerId: null,
        userRoleType: null,
      },
      {
        userId: 186,
        enterpriseId: 767,
        organizationId: 263,
        groupId: 130,
        companyId: 0,
        departmentId: 0,
        sentryId: '',
        positionId: 0,
        userName: '无概览',
        userSex: '1',
        userAge: 0,
        userAccount: 'saas',
        userTelephone: '18888887658',
        userPassword: null,
        userBirthday: null,
        userHiredate: null,
        userState: '1',
        userType: 1,
        userCertificateType: '10',
        userCertificateNumber: '',
        userPicurl: '',
        isDeleted: 0,
        isActived: '1',
        remark: '',
        roleVos: null,
        organizationVo: null,
        roleids: null,
        organizationName: 'new see',
        organizationShortName: '',
        appId: null,
        handlerId: null,
        userRoleType: null,
      },
      {
        userId: 257,
        enterpriseId: 767,
        organizationId: 263,
        groupId: 130,
        companyId: 0,
        departmentId: 0,
        sentryId: '1',
        positionId: 0,
        userName: 'zxxx',
        userSex: '1',
        userAge: 0,
        userAccount: 'xxxxz',
        userTelephone: '18762738949',
        userPassword: null,
        userBirthday: null,
        userHiredate: '2019-05-07 00:00:00',
        userState: '1',
        userType: 1,
        userCertificateType: '10',
        userCertificateNumber: '',
        userPicurl: '',
        isDeleted: 0,
        isActived: '1',
        remark: '',
        roleVos: null,
        organizationVo: null,
        roleids: null,
        organizationName: 'new see',
        organizationShortName: '',
        appId: null,
        handlerId: null,
        userRoleType: null,
      },
      {
        userId: 262,
        enterpriseId: 767,
        organizationId: 263,
        groupId: 130,
        companyId: 0,
        departmentId: 0,
        sentryId: '',
        positionId: 0,
        userName: 'zx',
        userSex: '0',
        userAge: 0,
        userAccount: '412722199801235462',
        userTelephone: '13055555555',
        userPassword: null,
        userBirthday: null,
        userHiredate: null,
        userState: '1',
        userType: 1,
        userCertificateType: '10',
        userCertificateNumber: '',
        userPicurl: '',
        isDeleted: 0,
        isActived: '1',
        remark: '',
        roleVos: null,
        organizationVo: null,
        roleids: null,
        organizationName: 'new see',
        organizationShortName: '',
        appId: null,
        handlerId: null,
        userRoleType: null,
      },
      {
        userId: 265,
        enterpriseId: 767,
        organizationId: 263,
        groupId: 130,
        companyId: 0,
        departmentId: 0,
        sentryId: '',
        positionId: 0,
        userName: '阿斯顿',
        userSex: '',
        userAge: 0,
        userAccount: '12345678',
        userTelephone: '17620023368',
        userPassword: null,
        userBirthday: null,
        userHiredate: null,
        userState: '1',
        userType: 0,
        userCertificateType: '10',
        userCertificateNumber: '',
        userPicurl: '',
        isDeleted: 0,
        isActived: '1',
        remark: '',
        roleVos: null,
        organizationVo: null,
        roleids: null,
        organizationName: 'new see',
        organizationShortName: '',
        appId: null,
        handlerId: null,
        userRoleType: null,
      },
    ],
    pageNum: null,
    pageSize: null,
    total: null,
  });
};

module.exports = {
  'GET /system/role/init-form-add-person': initFromAddPerson,
  'GET /system/user/list-user-by-organizationId': listUserByOrganizationId,
};