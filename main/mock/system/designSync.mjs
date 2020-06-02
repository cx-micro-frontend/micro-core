const companyOrg = (req, res) => {
  req.method = 'GET';
  let orgName = req.body.orgName || '';
  let arg = [
    {
      organizationId: 239,
      enterpriseId: 107,
      groupId: 108,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: 'SOSS',
      organizationShortName: 'SOSS',
      organizationCode: '0000',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 145,
      createUserName: 'sossAdmin',
      createTime: '2018-09-21 15:02:06',
      updateUserId: 145,
      updateUserName: 'sossAdmin',
      updateTime: '2018-09-21 15:02:06',
    },
    {
      organizationId: 247,
      enterpriseId: 750,
      groupId: 113,
      companyId: 90,
      departmentId: 0,
      organizationParentId: 244,
      organizationName: '七七子公司',
      organizationShortName: '七七子公司',
      organizationCode: 'qqzgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/244/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 151,
      createUserName: '七七',
      createTime: '2019-03-28 06:36:17',
      updateUserId: 151,
      updateUserName: '七七',
      updateTime: '2019-03-28 06:36:17',
    },
    {
      organizationId: 244,
      enterpriseId: 750,
      groupId: 113,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '七七公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 151,
      createUserName: '七七',
      createTime: '2019-03-28 09:43:59',
      updateUserId: 151,
      updateUserName: '七七',
      updateTime: '2019-03-28 01:43:59',
    },
    {
      organizationId: 246,
      enterpriseId: 752,
      groupId: 115,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '璇',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 154,
      createUserName: '璇',
      createTime: '2019-03-28 14:05:27',
      updateUserId: 154,
      updateUserName: '璇',
      updateTime: '2019-03-28 06:05:27',
    },
    {
      organizationId: 248,
      enterpriseId: 753,
      groupId: 116,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: ' 杭州新视窗信息技术有限公司',
      organizationShortName: '新视窗',
      organizationCode: 'jtbh',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-03-28 14:36:34',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-04-28 01:30:00',
    },
    {
      organizationId: 249,
      enterpriseId: 754,
      groupId: 117,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '绿城物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 158,
      createUserName: '孙伟',
      createTime: '2019-03-28 14:49:16',
      updateUserId: 158,
      updateUserName: '孙伟',
      updateTime: '2019-03-28 06:49:16',
    },
    {
      organizationId: 250,
      enterpriseId: 755,
      groupId: 118,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '王军集团',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 159,
      createUserName: '王军',
      createTime: '2019-03-28 15:03:14',
      updateUserId: 159,
      updateUserName: '王军',
      updateTime: '2019-03-28 07:03:14',
    },
    {
      organizationId: 251,
      enterpriseId: 756,
      groupId: 119,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '新环天益置企',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 160,
      createUserName: '木木',
      createTime: '2019-03-28 15:04:59',
      updateUserId: 160,
      updateUserName: '木木',
      updateTime: '2019-03-28 07:04:59',
    },
    {
      organizationId: 253,
      enterpriseId: 758,
      groupId: 121,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '小米公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 163,
      createUserName: '小米',
      createTime: '2019-03-28 16:27:33',
      updateUserId: 163,
      updateUserName: '小米',
      updateTime: '2019-03-28 08:27:33',
    },
    {
      organizationId: 258,
      enterpriseId: 763,
      groupId: 126,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '哈哈哈公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 168,
      createUserName: '小哈',
      createTime: '2019-03-28 18:21:08',
      updateUserId: 168,
      updateUserName: '小哈',
      updateTime: '2019-03-28 10:21:07',
    },
    {
      organizationId: 259,
      enterpriseId: 764,
      groupId: 127,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '果粒橙科技有限公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 169,
      createUserName: '叶立铖',
      createTime: '2019-03-29 08:40:24',
      updateUserId: 169,
      updateUserName: '叶立铖',
      updateTime: '2019-03-29 00:40:24',
    },
    {
      organizationId: 260,
      enterpriseId: 765,
      groupId: 128,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '浙江昆仑物业管理有限公司',
      organizationShortName: 'zjklwy',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 170,
      createUserName: '张三',
      createTime: '2019-03-29 14:00:53',
      updateUserId: 145,
      updateUserName: '张三',
      updateTime: '2019-05-13 09:09:28',
    },
    {
      organizationId: 263,
      enterpriseId: 767,
      groupId: 130,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: 'new see',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 172,
      createUserName: 'lin',
      createTime: '2019-04-01 11:15:13',
      updateUserId: 172,
      updateUserName: 'lin',
      updateTime: '2019-04-01 03:15:13',
    },
    {
      organizationId: 264,
      enterpriseId: 768,
      groupId: 131,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '新视窗',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 173,
      createUserName: '测试01',
      createTime: '2019-04-01 11:16:55',
      updateUserId: 173,
      updateUserName: '测试01',
      updateTime: '2019-04-01 03:16:55',
    },
    {
      organizationId: 265,
      enterpriseId: 769,
      groupId: 132,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '杭城物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 175,
      createUserName: '孙伟',
      createTime: '2019-04-01 19:54:12',
      updateUserId: 175,
      updateUserName: '孙伟',
      updateTime: '2019-04-01 11:54:12',
    },
    {
      organizationId: 268,
      enterpriseId: 755,
      groupId: 118,
      companyId: 91,
      departmentId: 0,
      organizationParentId: 250,
      organizationName: '二',
      organizationShortName: '二二',
      organizationCode: 'e',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/250/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 159,
      createUserName: '王军',
      createTime: '2019-04-02 03:18:32',
      updateUserId: 159,
      updateUserName: '王军',
      updateTime: '2019-04-02 03:18:32',
    },
    {
      organizationId: 269,
      enterpriseId: 772,
      groupId: 135,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: 'skyForeverdan',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 178,
      createUserName: 'skyForeverdan',
      createTime: '2019-04-02 11:23:49',
      updateUserId: 178,
      updateUserName: 'skyForeverdan',
      updateTime: '2019-04-02 03:23:48',
    },
    {
      organizationId: 276,
      enterpriseId: 777,
      groupId: 140,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '最帅',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 187,
      createUserName: 'UI帅',
      createTime: '2019-04-04 17:39:57',
      updateUserId: 187,
      updateUserName: 'UI帅',
      updateTime: '2019-04-04 09:39:57',
    },
    {
      organizationId: 277,
      enterpriseId: 778,
      groupId: 141,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '江心屿',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 188,
      createUserName: '林吵吵',
      createTime: '2019-04-04 17:41:18',
      updateUserId: 188,
      updateUserName: '林吵吵',
      updateTime: '2019-04-04 09:41:17',
    },
    {
      organizationId: 280,
      enterpriseId: 781,
      groupId: 144,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: 'iu公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 191,
      createUserName: 'iu',
      createTime: '2019-04-13 14:16:28',
      updateUserId: 191,
      updateUserName: 'iu',
      updateTime: '2019-04-13 06:16:27',
    },
    {
      organizationId: 281,
      enterpriseId: 782,
      groupId: 145,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '果壳科技',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 192,
      createUserName: 'Miss.Lin',
      createTime: '2019-04-15 11:12:38',
      updateUserId: 192,
      updateUserName: 'Miss.Lin',
      updateTime: '2019-04-15 03:12:38',
    },
    {
      organizationId: 286,
      enterpriseId: 781,
      groupId: 144,
      companyId: 93,
      departmentId: 0,
      organizationParentId: 280,
      organizationName: 'iu子公司',
      organizationShortName: 'iu子公司',
      organizationCode: 'iuzgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/280/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 191,
      createUserName: 'iu',
      createTime: '2019-04-16 03:57:43',
      updateUserId: 191,
      updateUserName: 'iu',
      updateTime: '2019-04-16 03:57:43',
    },
    {
      organizationId: 289,
      enterpriseId: 784,
      groupId: 147,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '樱桃小丸子公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 200,
      createUserName: '林先生',
      createTime: '2019-04-16 15:49:32',
      updateUserId: 200,
      updateUserName: '林先生',
      updateTime: '2019-04-16 07:49:32',
    },
    {
      organizationId: 290,
      enterpriseId: 785,
      groupId: 148,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '小张物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 202,
      createUserName: '张袁',
      createTime: '2019-04-19 10:07:35',
      updateUserId: 202,
      updateUserName: '张袁',
      updateTime: '2019-04-19 02:07:35',
    },
    {
      organizationId: 292,
      enterpriseId: 786,
      groupId: 149,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '银川物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 203,
      createUserName: '张无忌',
      createTime: '2019-04-23 13:56:51',
      updateUserId: 203,
      updateUserName: '张无忌',
      updateTime: '2019-04-23 05:56:50',
    },
    {
      organizationId: 293,
      enterpriseId: 787,
      groupId: 150,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '恒海物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 204,
      createUserName: '花无缺',
      createTime: '2019-04-23 14:02:19',
      updateUserId: 204,
      updateUserName: '花无缺',
      updateTime: '2019-04-23 06:02:18',
    },
    {
      organizationId: 295,
      enterpriseId: 754,
      groupId: 117,
      companyId: 94,
      departmentId: 0,
      organizationParentId: 249,
      organizationName: '华南区',
      organizationShortName: '华南区',
      organizationCode: 'hnq',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/249/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 158,
      createUserName: '孙伟',
      createTime: '2019-04-26 03:08:20',
      updateUserId: 158,
      updateUserName: '孙伟',
      updateTime: '2019-04-26 03:08:20',
    },
    {
      organizationId: 296,
      enterpriseId: 754,
      groupId: 117,
      companyId: 95,
      departmentId: 0,
      organizationParentId: 295,
      organizationName: '杭州新视窗物业服务有限公司',
      organizationShortName: '杭州新视窗',
      organizationCode: 'hnq-hzxscwyfwyxgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/249/295/',
      organizationLevel: 2,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 158,
      createUserName: '孙伟',
      createTime: '2019-04-26 03:09:01',
      updateUserId: 158,
      updateUserName: '孙伟',
      updateTime: '2019-04-26 03:09:01',
    },
    {
      organizationId: 297,
      enterpriseId: 789,
      groupId: 152,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '海棠物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 206,
      createUserName: '小龙女',
      createTime: '2019-04-26 13:41:35',
      updateUserId: 206,
      updateUserName: '小龙女',
      updateTime: '2019-04-26 05:41:35',
    },
    {
      organizationId: 298,
      enterpriseId: 790,
      groupId: 153,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '腾冲物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 207,
      createUserName: '杨不过',
      createTime: '2019-04-26 14:12:31',
      updateUserId: 207,
      updateUserName: '杨不过',
      updateTime: '2019-04-26 06:12:31',
    },
    {
      organizationId: 299,
      enterpriseId: 753,
      groupId: 116,
      companyId: 96,
      departmentId: 0,
      organizationParentId: 248,
      organizationName: '一分公司',
      organizationShortName: '一分公司',
      organizationCode: 'yfgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/',
      organizationLevel: 1,
      organizationOrdercolumn: 2,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 00:44:30',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-04-28 00:44:30',
    },
    {
      organizationId: 303,
      enterpriseId: 753,
      groupId: 116,
      companyId: 97,
      departmentId: 0,
      organizationParentId: 248,
      organizationName: '专业公司',
      organizationShortName: '专业公司',
      organizationCode: 'zygs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/',
      organizationLevel: 1,
      organizationOrdercolumn: 5,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 01:27:46',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-04-28 01:27:46',
    },
    {
      organizationId: 304,
      enterpriseId: 753,
      groupId: 116,
      companyId: 98,
      departmentId: 0,
      organizationParentId: 303,
      organizationName: '杭州保安公司',
      organizationShortName: '专业公司-杭州保安公司',
      organizationCode: 'zygs-hzbags',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/303/',
      organizationLevel: 2,
      organizationOrdercolumn: 1,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 01:28:58',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-04-28 01:28:58',
    },
    {
      organizationId: 305,
      enterpriseId: 753,
      groupId: 116,
      companyId: 99,
      departmentId: 0,
      organizationParentId: 248,
      organizationName: '杭州分公司',
      organizationShortName: '新视窗-杭州分公司',
      organizationCode: 'xsc-hzfgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 02:30:59',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-05-05 06:37:30',
    },
    {
      organizationId: 307,
      enterpriseId: 768,
      groupId: 131,
      companyId: 100,
      departmentId: 0,
      organizationParentId: 264,
      organizationName: '物业云公司',
      organizationShortName: '物业云公司',
      organizationCode: 'wyygs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/264/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 173,
      createUserName: '测试01',
      createTime: '2019-04-28 02:56:27',
      updateUserId: 173,
      updateUserName: '测试01',
      updateTime: '2019-04-28 02:56:27',
    },
    {
      organizationId: 309,
      enterpriseId: 768,
      groupId: 131,
      companyId: 101,
      departmentId: 0,
      organizationParentId: 307,
      organizationName: '物业云子公司',
      organizationShortName: '物业云公司-物业云子公司',
      organizationCode: 'wyygs-wyyzgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/264/307/',
      organizationLevel: 2,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 173,
      createUserName: '测试01',
      createTime: '2019-04-28 03:13:33',
      updateUserId: 173,
      updateUserName: '测试01',
      updateTime: '2019-04-28 03:13:33',
    },
    {
      organizationId: 312,
      enterpriseId: 753,
      groupId: 116,
      companyId: 102,
      departmentId: 0,
      organizationParentId: 305,
      organizationName: '世界之窗北京分公司',
      organizationShortName: '新视窗-newsee杭州分公司-世界之窗北京分公司',
      organizationCode: 'xsc-newseehzfgs-sjzcbjfgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/305/',
      organizationLevel: 2,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 06:19:42',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-04-28 06:19:42',
    },
    {
      organizationId: 313,
      enterpriseId: 753,
      groupId: 116,
      companyId: 103,
      departmentId: 0,
      organizationParentId: 312,
      organizationName: '北京二分部',
      organizationShortName: '新视窗-newsee杭州分公司-世界之窗北京分公司-世界之窗北京二分部',
      organizationCode: 'xsc-newseehzfgs-sjzcbjfgs-bjefb',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/305/312/',
      organizationLevel: 3,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-04-28 06:20:21',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-05-05 06:38:22',
    },
    {
      organizationId: 315,
      enterpriseId: 791,
      groupId: 154,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '楚新物业',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 223,
      createUserName: '彭于晏',
      createTime: '2019-04-29 09:26:22',
      updateUserId: 223,
      updateUserName: '彭于晏',
      updateTime: '2019-04-29 01:26:22',
    },
    {
      organizationId: 318,
      enterpriseId: 753,
      groupId: 116,
      companyId: 104,
      departmentId: 0,
      organizationParentId: 303,
      organizationName: '杭州保洁公司',
      organizationShortName: '杭州保洁公司',
      organizationCode: 'zygs-hzbjgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/248/303/',
      organizationLevel: 2,
      organizationOrdercolumn: 2,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 155,
      createUserName: '朱斌',
      createTime: '2019-05-05 06:31:11',
      updateUserId: 155,
      updateUserName: '朱斌',
      updateTime: '2019-05-05 06:31:11',
    },
    {
      organizationId: 326,
      enterpriseId: 763,
      groupId: 126,
      companyId: 105,
      departmentId: 0,
      organizationParentId: 258,
      organizationName: '哈哈哈子公司',
      organizationShortName: '哈哈哈子公司',
      organizationCode: 'hhhzgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/258/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 168,
      createUserName: '小哈',
      createTime: '2019-05-06 06:42:48',
      updateUserId: 168,
      updateUserName: '小哈',
      updateTime: '2019-05-06 06:42:48',
    },
    {
      organizationId: 332,
      enterpriseId: 797,
      groupId: 160,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '77888',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 233,
      createUserName: '222666',
      createTime: '2019-05-06 17:06:37',
      updateUserId: 233,
      updateUserName: '222666',
      updateTime: '2019-05-06 09:06:36',
    },
    {
      organizationId: 333,
      enterpriseId: 798,
      groupId: 161,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '浙江物业管理有限公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 240,
      createUserName: '昆仑',
      createTime: '2019-05-08 16:51:44',
      updateUserId: 240,
      updateUserName: '昆仑',
      updateTime: '2019-05-08 08:51:44',
    },
    {
      organizationId: 336,
      enterpriseId: 764,
      groupId: 127,
      companyId: 107,
      departmentId: 0,
      organizationParentId: 259,
      organizationName: '1分公司',
      organizationShortName: '1分公司',
      organizationCode: '1fgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/259/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 169,
      createUserName: '蜡笔小叶',
      createTime: '2019-05-09 01:13:29',
      updateUserId: 169,
      updateUserName: '蜡笔小叶',
      updateTime: '2019-05-09 01:13:29',
    },
    {
      organizationId: 342,
      enterpriseId: 801,
      groupId: 164,
      companyId: 110,
      departmentId: 0,
      organizationParentId: 339,
      organizationName: '测测子公司',
      organizationShortName: '测测子公司',
      organizationCode: 'cczgs',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/339/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 247,
      createUserName: '侧耳',
      createTime: '2019-05-10 03:46:09',
      updateUserId: 247,
      updateUserName: '侧耳',
      updateTime: '2019-05-10 03:46:09',
    },
    {
      organizationId: 339,
      enterpriseId: 801,
      groupId: 164,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '测测公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 247,
      createUserName: '侧耳',
      createTime: '2019-05-10 09:55:20',
      updateUserId: 247,
      updateUserName: '侧耳',
      updateTime: '2019-05-10 01:55:20',
    },
    {
      organizationId: 349,
      enterpriseId: 767,
      groupId: 130,
      companyId: 112,
      departmentId: 0,
      organizationParentId: 263,
      organizationName: '213123',
      organizationShortName: '213123',
      organizationCode: '213123',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/263/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 172,
      createUserName: 'lin',
      createTime: '2019-05-14 13:21:45',
      updateUserId: 172,
      updateUserName: 'lin',
      updateTime: '2019-05-14 13:21:45',
    },
    {
      organizationId: 350,
      enterpriseId: 785,
      groupId: 148,
      companyId: 113,
      departmentId: 0,
      organizationParentId: 290,
      organizationName: 'xxx',
      organizationShortName: 'xxx',
      organizationCode: 'xxx',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/290/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 202,
      createUserName: '张袁',
      createTime: '2019-05-15 02:01:21',
      updateUserId: 202,
      updateUserName: '张袁',
      updateTime: '2019-05-15 02:01:21',
    },
    {
      organizationId: 351,
      enterpriseId: 772,
      groupId: 135,
      companyId: 114,
      departmentId: 0,
      organizationParentId: 269,
      organizationName: '公司1',
      organizationShortName: '公司1',
      organizationCode: 'gs1',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/269/',
      organizationLevel: 1,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 178,
      createUserName: 'skyForeverdan',
      createTime: '2019-05-16 10:49:28',
      updateUserId: 178,
      updateUserName: 'skyForeverdan',
      updateTime: '2019-05-16 10:50:49',
    },
    {
      organizationId: 353,
      enterpriseId: 772,
      groupId: 135,
      companyId: 115,
      departmentId: 0,
      organizationParentId: 351,
      organizationName: '子公司1',
      organizationShortName: '公司1-子公司1',
      organizationCode: 'gs1-zgs1',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/269/351/',
      organizationLevel: 2,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 178,
      createUserName: 'skyForeverdan',
      createTime: '2019-05-16 10:52:44',
      updateUserId: 178,
      updateUserName: 'skyForeverdan',
      updateTime: '2019-05-16 10:52:44',
    },
    {
      organizationId: 355,
      enterpriseId: 772,
      groupId: 135,
      companyId: 116,
      departmentId: 0,
      organizationParentId: 353,
      organizationName: 'aaa',
      organizationShortName: '公司1-子公司1-aaa',
      organizationCode: 'gs1-zgs1-aaa',
      organizationType: 1,
      organizationEnablestate: 2,
      organizationPath: '/269/351/353/',
      organizationLevel: 3,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 178,
      createUserName: 'skyForeverdan',
      createTime: '2019-05-17 07:21:08',
      updateUserId: 178,
      updateUserName: 'skyForeverdan',
      updateTime: '2019-05-17 07:21:08',
    },
    {
      organizationId: 370,
      enterpriseId: 820,
      groupId: 183,
      companyId: 0,
      departmentId: 0,
      organizationParentId: 0,
      organizationName: '姜武公司',
      organizationShortName: '',
      organizationCode: '',
      organizationType: 0,
      organizationEnablestate: 2,
      organizationPath: '/',
      organizationLevel: 0,
      organizationOrdercolumn: 0,
      remark: '',
      isDeleted: 0,
      versionId: 0,
      createUserId: 277,
      createUserName: '小小',
      createTime: '2019-05-23 18:21:29',
      updateUserId: 277,
      updateUserName: '小小',
      updateTime: '2019-05-23 10:21:29',
    },
  ];

  let filterArg = arg.filter(item => {
    return item.organizationName.indexOf(orgName) > -1;
  });

  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: filterArg,
    pageNum: null,
    pageSize: null,
    total: null,
  });
};
module.exports = {
  'POST /system/sync/get-all-company-org': companyOrg,
};