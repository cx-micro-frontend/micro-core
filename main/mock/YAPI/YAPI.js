const mockMap = () => {
  return {
    //===== 主表-银行流水-显示字段 =====
    precinctIdName: Random.id(), //项目ID
    transactionSerialNumber: Random.guid(), //交易流水号
    nameOfPayee: Random.cname(), //收款方名称
    accountNumberOfReceivingBank: Random.id(), //收款银行账号
    nameOfPayer: Random.cname(), //付款方名称
    transactionStartDate: Random.date(), //交易日期
    transactionTime: Random.time(), //交易时间
    summaryInformation: Random.csentence(20), //摘要

    transactionAmount: Random.float(0, 100000, 0, 2), //交易金额
    auditStatus: Random.pick([0, 1]), //稽核状态('0-未稽核','1-已稽核')
    auditMethod: Random.pick([0, 1]), //稽核方式('0-人工','1-系统')
    auditAccuracy: Random.pick([0, 1, 2]), //稽核准确度('0-完全匹配','1-相似匹配','2-无法匹配')
    auditor: Random.cname(), //稽核人

    //===== 从表-应收稽核明细-显示字段 =====
    bankStatementId: Random.id(), //银行流水表ID
    chargeDetailId: Random.id(), //应收款ID
    houseId: Random.id(), //房产ID
    houseName: (function() {
      return `${Random.pick([
        '杭州壹号院',
        '江河鸣翠',
        '滨江嘉品美寓',
        '养云静舍',
        '融创颐和园',
        '江锦绣之城',
      ])}-${Random.integer(1, 20)}-${Random.integer(1, 9)}0${Random.integer(1, 4)}`;
    })(), //房产简称
    customerId: Random.id(), //客户ID
    customerName: Random.cname(), //客户名称
    chargeItemId: Random.id(), //收费科目ID
    chargeItemName: Random.pick([
      '临时物业费',
      '临时电费',
      '广告费',
      '垃圾清运费',
      '临时停车费',
      '保证金',
      '燃气费',
      '水费',
      '电费',
      '公共能耗费',
      '装修押金',
      '综合预收款',
      '会所收入',
      '特约服务',
    ]), //收费科目
    calcStartDate: Random.date('yyyy-MM-dd'), //计费开始日期
    calcEndDate: Random.date('yyyy-MM-dd'), //计费结束日期
    calcCycel: (function() {
      return `${Random.date('yyyy-MM-dd')}至${Random.date('yyyy-MM-dd')}`;
    })(), //计费周期
    shouldChargeDate: Random.date('yyyy-MM-dd'), //应收日期
    amountReceivable: Random.float(0, 100000, 0, 2), //应收金额
    deductionAmount: Random.float(0, 10000, 0, 2), //减免金额
    actualReceivable: Random.float(0, 100000, 0, 2), //实际应收
    auditAmount: Random.float(0, 10000, 0, 2), //稽核金额
  };
};

mockJson.resultCode = '200';
mockJson.resultMsg = '操作成功';

if (header.mock_code == 'MOCK_CODE_EXPORT') {
  resHeader['Content-Type'] = 'application/octet-stream;charset=UTF-8';
  resHeader['Access-Control-Expose-Headers'] = 'downloadFileName, Content-Disposition';
  resHeader['Content-Disposition'] =
    "attachment;filename*=UTF-8''%E9%AB%98%E4%BB%93%E9%9B%84%E7%9A%84%E6%B5%8B%E8%AF%95%E5%AF%BC%E5%87%BAEXCEL.xlsx";
  resHeader['downloadFileName'] =
    '%E9%AB%98%E4%BB%93%E9%9B%84%E7%9A%84%E6%B5%8B%E8%AF%95%E5%AF%BC%E5%87%BAEXCEL.xlsx';
}

if (header.mock_code == 'MOCK_CODE_LIST') {
  mockJson.resultData.pageNum = 1;
  mockJson.resultData.pageSize = 20;
  mockJson.resultData.size = 20;
  mockJson.resultData.total = Random.natural(100, 1000);

  if (mockJson.resultData.list) {
    mockJson.resultData.list.forEach(item => {
      const map = mockMap();

      Object.keys(item).forEach(k => {
        item[k] = map[k] === undefined ? item[k] : map[k];
      });
    });
  }
}

if (header.mock_code == 'MOCK_CODE_DETAIL') {
  if (mockJson.resultData) {
    Object.keys(mockJson.resultData).forEach(k => {
      const map = mockMap();
      mockJson.resultData[k] = map[k] === undefined ? mockJson.resultData[k] : map[k];

      //   if(Object.prototype.toString.call(item[k]) === '[object Object]'){
      //         item[k].forEach(k => {
      //     item[k] = map[k] === undefined ? item[k] : map[k];
      //   });
      // }
    });
  }
}

// const rowInfo = mockJson.resultData.list[0];
// mockJson.resultData.list = [];

// Object.keys(rowInfo).forEach(k => {
//     if (typeof rowInfo[k] === 'string') {
//       rowInfo[k]= Random.title(3, 5)
//     }
//   }
// )

// for (var i = 0; i < 100; i++) {
//     mockJson.resultData.list.push(rowInfo)
// }

// mockJson.resultData.list.length=20;
