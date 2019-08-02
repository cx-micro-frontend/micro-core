const activeGrid = (req, res) => {
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功',
    resultData: {
      precinctNameList: [
        {
          value: '',
          label: '',
        },
        {
          value: '1',
          label: '桃李春风小区',
        },
        {
          value: '5',
          label: '浙江·杭州·学苑管家测试',
        },
        {
          value: '6',
          label: '夏夏夏',
        },
        {
          value: '7',
          label: '中牟百合花园',
        },
        {
          value: '8',
          label: '第二·春江花月',
        },
      ],
      pageInfo: {
        pageNum: 1,
        pageSize: 20,
        size: 2,
        startRow: 1,
        endRow: 2,
        total: 2,
        pages: 1,
        list: [
          {
            id: 48,
            category: 2,
            title: '22222',
            picid: 1560762294055,
            usertype: 0,
            createuserid: 1,
            createtime: '2019-06-14 14:45:28',
            updateuserid: 1,
            updatetime: '2019-06-17 17:04:53',
            rulecategory: 1,
            rulevalue: '{"ruleValueID":48,"ruleValueName":"22222"}',
            status: 2,
            publishtime: '2019-06-17 17:04:53',
            publishuserid: 1,
            publishUserName: 'admin',
            sendtype: 0,
            ispush: 0,
            activityStartTime: '2019-06-05 14:44:00',
            activityEndTime: '2019-06-14 14:45:00',
            sponsor: 'zx',
            activitySpace: '22222',
            activityNum: 0,
            roasting: 0,
            bgPicId: 0,
            recommend: 1,
            sendToWx: 0,
            categoryName: '系统参数',
            content: '',
            precinctNames: '第二·春江花月,夏夏夏,中牟百合花园,浙江·杭州·学苑管家测试',
            listPrecinctName: ['第二·春江花月', '夏夏夏', '中牟百合花园', '浙江·杭州·学苑管家测试'],
            precincts: [
              {
                precinctName: '第二·春江花月,夏夏夏,中牟百合花园,浙江·杭州·学苑管家测试',
                createTime: '2019-06-17 17:04:53',
                updateTime: '2019-06-17 17:04:53',
                serviceCall: '',
                heatingCall: '',
                waterCall: '',
                electricCall: '',
                gasCall: '',
                precinctShortName: '',
              },
            ],
          },
          {
            id: 49,
            category: 2,
            title: 'zxzxzx',
            picid: 1560759955995,
            usertype: 0,
            createuserid: 1,
            createtime: '2019-06-17 16:25:55',
            updateuserid: 1,
            updatetime: '2019-06-17 16:25:55',
            rulecategory: 1,
            rulevalue: '{"ruleValueID":49,"ruleValueName":"zxzxzx"}',
            status: 2,
            publishtime: '2019-06-17 16:25:55',
            publishuserid: 1,
            publishUserName: 'admin',
            sendtype: 0,
            ispush: 0,
            activityStartTime: '2019-06-12 16:00:00',
            activityEndTime: '2019-06-17 16:13:00',
            sponsor: 'zxzbf',
            activitySpace: 'zxhddd',
            activityNum: 0,
            roasting: 0,
            bgPicId: 0,
            recommend: 1,
            sendToWx: 0,
            categoryName: '系统参数',
            content: '',
            precinctNames: '第二·春江花月,夏夏夏,中牟百合花园,浙江·杭州·学苑管家测试',
            listPrecinctName: ['第二·春江花月', '夏夏夏', '中牟百合花园', '浙江·杭州·学苑管家测试'],
            precincts: [
              {
                precinctName: '第二·春江花月,夏夏夏,中牟百合花园,浙江·杭州·学苑管家测试',
                createTime: '2019-06-17 17:04:53',
                updateTime: '2019-06-17 17:04:53',
                serviceCall: '',
                heatingCall: '',
                waterCall: '',
                electricCall: '',
                gasCall: '',
                precinctShortName: '',
              },
            ],
          },
        ],
        firstPage: 1,
        prePage: 0,
        nextPage: 0,
        lastPage: 1,
        isFirstPage: true,
        isLastPage: true,
        hasPreviousPage: false,
        hasNextPage: false,
        navigatePages: 8,
        navigatepageNums: [1],
      },
      userType: 1,
    },
  });
};

const notice = (req, res) => {
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: {
      id: 135,
      category: 1,
      title: '2222账号发布檀香的公告66',
      picId: 0,
      userType: 0,
      createUserId: 1,
      createTime: '2019-07-04 22:46:58',
      updateUserId: 1,
      updateTime: '2019-07-08 14:05:56',
      ruleCategory: null,
      ruleValue: null,
      status: 0,
      publishTime: '2019-07-08 14:05:56',
      publishUserId: 1,
      sendType: 0,
      isPush: null,
      categoryKey: null,
      publishUserName: 'superAdmin',
      noticeCategory: '',
      type: 0,
      secondCategoryKey: null,
      voteEndTime: null,
      candidateNum: null,
      activityStartTime: null,
      activityEndTime: null,
      enableApply: 0,
      point: null,
      price: null,
      sponsor: null,
      activitySpace: '',
      activityNum: null,
      roasting: null,
      bgPicId: null,
      triggered: null,
      effectiveReplyTime: null,
      activityLimitType: null,
      activityLimitNum: null,
      smsTemplateId: null,
      recommend: 1,
      sendToWx: null,
      categoryName: null,
      categoryKeyName: null,
      precinctIds: ['13'],
      productIds: null,
      precinctID: null,
      detailID: null,
      detailText: null,
      content:
        '<p>2222账号发布檀香的公告2222账号发布檀香的公告2222账号发布檀香的公告2222账号发布檀香的公告</p>\n<p>2222账号发布檀香的公告</p>\n<p>2222账号发布檀香的公告</p>\n<p>2222账号发布檀香的公告2222账号发布檀香的公告2222账号发布檀香的公告2222账号发布檀香的公告</p>',
      targetType: null,
      fileUrls: null,
      bgUrl: null,
      fileList: null,
      url: null,
      precinctNames: null,
      listPrecinctName: null,
      listPrecinct: [
        {
          value: '13',
          label: '福州檀府',
          valueType: null,
        },
      ],
      secondCategoryName: null,
      applyId: null,
      applyTotal: null,
      precincts: [],
      categoryHtmlUrl: null,
      categoryPicUrl: null,
      provinceId: '35',
      cityId: '3501',
    },
    pageNum: null,
    pageSize: null,
    total: null,
  });
};

module.exports = {
  'POST /o2o/notice/listNotice': activeGrid,
  'GET /o2o/notice/detailNotice': notice,
};
