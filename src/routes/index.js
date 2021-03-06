const createImportFactory = (path) => () => import (`@/pages/${path}`)
export default [
	{ path: '/home', meta: { title: '看中医',keepAlive: true}, component: createImportFactory('Home') },
	{ path: '/myHome', meta: { title: '个人中心' }, component: createImportFactory('MyHome') },
	{ path: '/lookDoc', meta: { title: '最近看诊' }, component: createImportFactory('LookDoc') },
	{ path: '/todayConsult', meta: { title: '今明分诊' }, component: createImportFactory('TodayConsult') },
	{ path: '/report', meta: { title: '报告单解读' }, component: createImportFactory('Report.vue') },
	{ path: '/SearchAll', meta: { title: '搜索' }, component: createImportFactory('SearchAll.vue') },
	{ path: '/SearchHome', meta: { title: '疾病' }, component: createImportFactory('SearchHome.vue') },
	{ path: '/seleDoc', meta: { title: '医生' }, component: createImportFactory('SeleDoc.vue') },
	{ path: '/doc-home', meta: { title: '医生主页' }, component: createImportFactory('DocHome/DocHome') },
	{ path: '/evaluate', meta: { title: '评价' }, component: createImportFactory('DocHome/Evaluate') },
	{ path: '/sendEvaluate', meta: { title: '发表评价' }, component: createImportFactory('DocHome/SendEvaluate') },
	{ path: '/selfTesting', meta: { title: '九大体制自测' }, component: createImportFactory('SelfTesting.vue') },
	{ path: '/sourceList', meta: { title: '号源列表' }, component: createImportFactory('SourceList.vue') },
	{ path: '/docInfo', meta: { title: '医生详情' }, component: createImportFactory('DocHome/DocInfo.vue') },
	{ path: '/myNews', meta: { title: '消息' }, component: createImportFactory('MyNews.vue') },
	{ path: '/consultDoc', meta: { title: '问医生' }, component: createImportFactory('ConsultDoc.vue') },
	{ path: '/againConsult', meta: { title: '网络复诊' }, component: createImportFactory('AgainConsult.vue') },
	{ path: '/appointment', meta: { title: '确认预约' }, component: createImportFactory('Appointment.vue') },
	{ path: '/imgConsult', meta: { title: '图文咨询' }, component: createImportFactory('ImgConsult.vue') },
	{ path: '/pay', meta: { title: '支付订单' }, component: createImportFactory('Pay.vue') },
	{ path: '/myCollec', meta: { title: '我的收藏' }, component: createImportFactory('MyCollec.vue') },
	{ path: '/priceConsult', meta: { title: '图文咨询' }, component: createImportFactory('PriceConsult.vue') },
	{ path: '/keptList', meta: { title: '图文咨询' }, component: createImportFactory('KeptList.vue') },
	{ path: '/seleUser', meta: { title: '常用就诊人' }, component: createImportFactory('SeleUser.vue') },
	{ path: '/addUser', meta: { title: '修改就诊人资料' }, component: createImportFactory('AddUser.vue') },
	{ path: '/myOrder', meta: { title: '我的预约' }, component: createImportFactory('MyOrder.vue') },
	{ path: '/docArtical', meta: { title: '医生文章' }, component: createImportFactory('DocArtical.vue') },
	{ path: '/set', meta: { title: '设置' }, component: createImportFactory('Setting/Set.vue') },
	{ path: '/accutSetting', meta: { title: '账号设置' }, component: createImportFactory('Setting/AccutSetting.vue') },
	{ path: '/myConsult', meta: { title: '我的咨询' }, component: createImportFactory('MyConsult/MyConsult.vue') },
	{ path: '/hosList', meta: { title: '医馆大全' }, component: createImportFactory('HosList.vue') },
	{ path: '/chart', meta: { title: '图文咨询' }, component: createImportFactory('Chart.vue') },
	{ path: '/myMdical', meta: { title: '我的药方' }, component: createImportFactory('MyMdical/MyMdical.vue') },
	
]