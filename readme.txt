一、需求：
1.地址列表页
2.餐厅列表页
3.餐厅名称搜索页
4.购物车详情页
5.布局采用自定义布局   ionic css框架
二、代码设计：
  代码架构：FLUX（中介者模式）
1.目录结构
entry----------------->入口
	app.js---------------->入口文件，配置路由
model------------------------>模块
	Veiw--------------------->视图组件
		Page----------------->页面组件
			Address---------->地址列表页
				containner.js
				header.js
			Rlist------------>餐厅列表页
				containner.js
				search.js
				singleList.js
			Rsearch---------->餐厅名称搜索页
				containner.js

			CartList--------->购物车详情页
				containner.js
		Common--------------->公用组件
			SingleShop------->单个商家
	Store-------------------->数据模型
		AddressStore
		RlistStore
		RsearchStore
		CartListStore
	Action------------------->行为
		AddressAction
		RlistAction
		RsearchAction
		CartListAction
	

