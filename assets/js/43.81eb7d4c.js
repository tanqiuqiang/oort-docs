(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{436:function(v,_,t){"use strict";t.r(_);var d=t(25),s=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[v._v("#")]),v._v(" 命名规范")]),v._v(" "),t("p",[v._v("由历史原因及个人习惯引起的 DOM 结构、命名不统一，导致不同成员在维护同一页面时，效率低下，迭代、维护成本极高。")]),v._v(" "),t("h3",{attrs:{id:"目录命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录命名"}},[v._v("#")]),v._v(" 目录命名")]),v._v(" "),t("ul",[t("li",[v._v("项目文件夹：your project name")]),v._v(" "),t("li",[v._v("样式文件夹：css")]),v._v(" "),t("li",[v._v("脚本文件夹：js")]),v._v(" "),t("li",[v._v("样式类图片文件夹：images")])]),v._v(" "),t("h3",{attrs:{id:"html-css文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-css文件命名"}},[v._v("#")]),v._v(" HTML/CSS文件命名")]),v._v(" "),t("p",[v._v("确保命名总是以字母开头而不是数字，且字母一律小写，以下划线连接")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("\x3c!-- HTML --\x3e\njdc.html\njdc_list.html\njdc_detail.html\n\n\x3c!-- SASS --\x3e\njdc.scss\njdc_list.scss\njdc_detail.scss\n")])])]),t("h3",{attrs:{id:"图片命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片命名"}},[v._v("#")]),v._v(" 图片命名")]),v._v(" "),t("h4",{attrs:{id:"命名顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名顺序"}},[v._v("#")]),v._v(" 命名顺序")]),v._v(" "),t("p",[v._v("图片命名建议以以下顺序命名：")]),v._v(" "),t("p",[t("strong",[v._v("图片业务(可选) +（mod_) 图片功能类别（必选）+ 图片模块名称（可选) + 图片精度（可选）")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("图片业务：")]),v._v(" "),t("ul",[t("li",[v._v("pp_：拍拍")]),v._v(" "),t("li",[v._v("wx_：微信")]),v._v(" "),t("li",[v._v("sq_：手Q")]),v._v(" "),t("li",[v._v("jd_：京东商城")]),v._v(" "),t("li",[v._v("...")])])]),v._v(" "),t("li",[t("p",[v._v("图片功能类别：")]),v._v(" "),t("ul",[t("li",[v._v("mod_：是否公共，可选")]),v._v(" "),t("li",[v._v("icon：模块类固化的图标")]),v._v(" "),t("li",[v._v("logo：LOGO类")]),v._v(" "),t("li",[v._v("spr：单页面各种元素合并集合")]),v._v(" "),t("li",[v._v("btn：按钮")]),v._v(" "),t("li",[v._v("bg：可平铺或者大背景")]),v._v(" "),t("li",[v._v("...")])])]),v._v(" "),t("li",[t("p",[v._v("图片模块名称：")]),v._v(" "),t("ul",[t("li",[v._v("goodslist：商品列表")]),v._v(" "),t("li",[v._v("goodsinfo：商品信息")]),v._v(" "),t("li",[v._v("userava\ttar：用户头像")]),v._v(" "),t("li",[v._v("...")])])]),v._v(" "),t("li",[t("p",[v._v("图片精度：")]),v._v(" "),t("ul",[t("li",[v._v("普清：@1x")]),v._v(" "),t("li",[v._v("Retina：@2x | @3x")]),v._v(" "),t("li",[v._v("...")])])])]),v._v(" "),t("p",[v._v("如下面例子：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("公共模块：\nwx_mod_btn_goodlist@2x.png\nwx_mod_btn_goodlist.png\nmod_btn_goodlist.png \n\n非公共模块：\nwx_btn_goodlist@2x.png\nwx_btn_goodlist.png\nbtn_goodlist.png\n")])])]),t("h4",{attrs:{id:"交叉业务协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交叉业务协作"}},[v._v("#")]),v._v(" 交叉业务协作")]),v._v(" "),t("p",[v._v("业务交叉协作的时候，为了避免图片命名冲突，建议图片名加上业务和模块前辍，如拍拍侧和手Q侧的业务交叉合作时，侧栏导航icon雪碧图命名：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("推荐：\npp_icon_mod_sidenav.png\n\n不推荐：\nicon_mod_sidenav.png\n")])])]),t("p",[v._v("处理高清图片的时候，命名应该加上图片相应的精度说明")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("推荐：\njdc_logo@1x.png\njdc_logo@2x.png\n\n不推荐：\njdc_logo.png\njdc_logo_retina.png\n")])])]),t("h3",{attrs:{id:"classname命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classname命名"}},[v._v("#")]),v._v(" ClassName命名")]),v._v(" "),t("p",[v._v("ClassName的命名应该尽量精短、明确，必须以"),t("strong",[v._v("字母开头命名")]),v._v("，且"),t("strong",[v._v("全部字母为小写")]),v._v("，单词之间"),t("strong",[v._v("统一使用下划线")]),v._v(" “_” 连接")]),v._v(" "),t("h4",{attrs:{id:"命名原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名原则"}},[v._v("#")]),v._v(" 命名原则")]),v._v(" "),t("p",[v._v("基于姓氏命名法（继承 + 外来），如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://labs.qiang.it/ppguide/img/standard_jiapu.png",alt:"enter image description here"}})]),v._v(" "),t("p",[v._v("祖先模块不能出现下划线，除了是全站公用模块，如 "),t("code",[v._v("mod_")]),v._v(" 系列的命名：")]),v._v(" "),t("p",[t("strong",[v._v("推荐：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="modulename">\n\t<div class="modulename_info">\n\t\t<div class="modulename_son"></div>\n\t\t<div class="modulename_son"></div>\n\t\t...\n\t</div>\n</div>\n\n\x3c!-- 这个是全站公用模块，祖先模块允许直接出现下划线 --\x3e\n<div class="mod_info">\n\t<div class="mod_info_son"></div>\n\t<div class="mod_info_son"></div>\n\t...\t\t\n</div>\n')])])]),t("p",[t("strong",[v._v("不推荐：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="modulename_info">\n\t<div class="modulename_info_son"></div>\n\t<div class="modulename_info_son"></div>\n\t...\t\t\n</div>\t\n')])])]),t("p",[v._v("在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info"></div>\n</div>\n')])])]),t("p",[v._v("当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块")]),v._v(" "),t("p",[t("strong",[v._v("推荐：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info">\n    \t<div class="modulename_info_user">\n    \t\t<div class="modulename_info_user_img">\n    \t\t\t<img src="" alt="">\n    \t\t\t\x3c!-- 这个时候 jiui 为 modulename_info_user_img 首字母缩写--\x3e\n    \t\t\t<div class="jiui_tit"></div>\n    \t\t\t<div class="jiui_txt"></div>\n    \t\t\t...\n    \t\t</div>\n    \t</div>\n    \t<div class="modulename_info_list"></div>\n\t</div>\n</div>\n')])])]),t("p",[t("strong",[v._v("不推荐：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info">\n    \t<div class="modulename_info_user">\n    \t\t<div class="modulename_info_user_img">\n    \t\t\t<img src="" alt="">\n    \t\t\t<div class="modulename_info_user_img_tit"></div>\n    \t\t\t<div class="modulename_info_user_img_txt"></div>\n    \t\t\t...\n    \t\t</div>\n    \t</div>\n    \t<div class="modulename_info_list"></div>\n\t</div>\n</div>\n')])])]),t("h4",{attrs:{id:"模块命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块命名"}},[v._v("#")]),v._v(" 模块命名")]),v._v(" "),t("p",[v._v("全站公共模块：以 "),t("code",[v._v("mod_")]),v._v(" 开头")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="mod_yours"></div>\n')])])]),t("p",[v._v("业务公共模块：以 "),t("code",[v._v("业务名_mod_")]),v._v(" 开头")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="paipai_mod_yours"></div>\n')])])]),t("h4",{attrs:{id:"常用命名推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命名推荐"}},[v._v("#")]),v._v(" 常用命名推荐")]),v._v(" "),t("p",[t("strong",[v._v("注意")]),v._v("：ad,baaner 等有机会和广告挂勾的字眠不建议直接用来做 ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此")]),v._v(" "),t("p",[t("code",[v._v('<div class="ad"></div>')]),v._v(" 这种情况不应该出现")]),v._v(" "),t("p",[v._v("另外，"),t("strong",[v._v("敏感不和谐字眼")]),v._v("也不应该出现，如")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v('<div class="fuck"></div>\n<div class="jer"></div>\n<div class="sm"></div>\n<div class="isis"></div> \n<div class="KMT"></div> \n...\n')])])]),t("table",[t("thead",[t("tr",[t("th",[v._v("ClassName")]),v._v(" "),t("th",[v._v("含义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("about")]),v._v(" "),t("td",[v._v("关于")])]),v._v(" "),t("tr",[t("td",[v._v("account")]),v._v(" "),t("td",[v._v("账户")])]),v._v(" "),t("tr",[t("td",[v._v("arrow")]),v._v(" "),t("td",[v._v("箭头图标")])]),v._v(" "),t("tr",[t("td",[v._v("article")]),v._v(" "),t("td",[v._v("文章")])]),v._v(" "),t("tr",[t("td",[v._v("aside")]),v._v(" "),t("td",[v._v("边栏")])]),v._v(" "),t("tr",[t("td",[v._v("audio")]),v._v(" "),t("td",[v._v("音频")])]),v._v(" "),t("tr",[t("td",[v._v("avatar")]),v._v(" "),t("td",[v._v("头像")])]),v._v(" "),t("tr",[t("td",[v._v("bg,background")]),v._v(" "),t("td",[v._v("背景")])]),v._v(" "),t("tr",[t("td",[v._v("bar")]),v._v(" "),t("td",[v._v("栏（工具类）")])]),v._v(" "),t("tr",[t("td",[v._v("branding")]),v._v(" "),t("td",[v._v("品牌化")])]),v._v(" "),t("tr",[t("td",[v._v("crumb,breadcrumbs")]),v._v(" "),t("td",[v._v("面包屑")])]),v._v(" "),t("tr",[t("td",[v._v("btn,button")]),v._v(" "),t("td",[v._v("按钮")])]),v._v(" "),t("tr",[t("td",[v._v("caption")]),v._v(" "),t("td",[v._v("标题，说明")])]),v._v(" "),t("tr",[t("td",[v._v("category")]),v._v(" "),t("td",[v._v("分类")])]),v._v(" "),t("tr",[t("td",[v._v("chart")]),v._v(" "),t("td",[v._v("图表")])]),v._v(" "),t("tr",[t("td",[v._v("clearfix")]),v._v(" "),t("td",[v._v("清除浮动")])]),v._v(" "),t("tr",[t("td",[v._v("close")]),v._v(" "),t("td",[v._v("关闭")])]),v._v(" "),t("tr",[t("td",[v._v("col,column")]),v._v(" "),t("td",[v._v("列")])]),v._v(" "),t("tr",[t("td",[v._v("comment")]),v._v(" "),t("td",[v._v("评论")])]),v._v(" "),t("tr",[t("td",[v._v("community")]),v._v(" "),t("td",[v._v("社区")])]),v._v(" "),t("tr",[t("td",[v._v("container")]),v._v(" "),t("td",[v._v("容器")])]),v._v(" "),t("tr",[t("td",[v._v("content")]),v._v(" "),t("td",[v._v("内容")])]),v._v(" "),t("tr",[t("td",[v._v("copyright")]),v._v(" "),t("td",[v._v("版权")])]),v._v(" "),t("tr",[t("td",[v._v("current")]),v._v(" "),t("td",[v._v("当前态，选中态")])]),v._v(" "),t("tr",[t("td",[v._v("default")]),v._v(" "),t("td",[v._v("默认")])]),v._v(" "),t("tr",[t("td",[v._v("description")]),v._v(" "),t("td",[v._v("描述")])]),v._v(" "),t("tr",[t("td",[v._v("details")]),v._v(" "),t("td",[v._v("细节")])]),v._v(" "),t("tr",[t("td",[v._v("disabled")]),v._v(" "),t("td",[v._v("不可用")])]),v._v(" "),t("tr",[t("td",[v._v("entry")]),v._v(" "),t("td",[v._v("文章，博文")])]),v._v(" "),t("tr",[t("td",[v._v("error")]),v._v(" "),t("td",[v._v("错误")])]),v._v(" "),t("tr",[t("td",[v._v("even")]),v._v(" "),t("td",[v._v("偶数，常用于多行列表或表格中")])]),v._v(" "),t("tr",[t("td",[v._v("fail")]),v._v(" "),t("td",[v._v("失败（提示）")])]),v._v(" "),t("tr",[t("td",[v._v("feature")]),v._v(" "),t("td",[v._v("专题")])]),v._v(" "),t("tr",[t("td",[v._v("fewer")]),v._v(" "),t("td",[v._v("收起")])]),v._v(" "),t("tr",[t("td",[v._v("field")]),v._v(" "),t("td",[v._v("用于表单的输入区域")])]),v._v(" "),t("tr",[t("td",[v._v("figure")]),v._v(" "),t("td",[v._v("图")])]),v._v(" "),t("tr",[t("td",[v._v("filter")]),v._v(" "),t("td",[v._v("筛选")])]),v._v(" "),t("tr",[t("td",[v._v("first")]),v._v(" "),t("td",[v._v("第一个，常用于列表中")])]),v._v(" "),t("tr",[t("td",[v._v("footer")]),v._v(" "),t("td",[v._v("页脚")])]),v._v(" "),t("tr",[t("td",[v._v("forum")]),v._v(" "),t("td",[v._v("论坛")])]),v._v(" "),t("tr",[t("td",[v._v("gallery")]),v._v(" "),t("td",[v._v("画廊")])]),v._v(" "),t("tr",[t("td",[v._v("group")]),v._v(" "),t("td",[v._v("模块，清除浮动")])]),v._v(" "),t("tr",[t("td",[v._v("header")]),v._v(" "),t("td",[v._v("页头")])]),v._v(" "),t("tr",[t("td",[v._v("help")]),v._v(" "),t("td",[v._v("帮助")])]),v._v(" "),t("tr",[t("td",[v._v("hide")]),v._v(" "),t("td",[v._v("隐藏")])]),v._v(" "),t("tr",[t("td",[v._v("hightlight")]),v._v(" "),t("td",[v._v("高亮")])]),v._v(" "),t("tr",[t("td",[v._v("home")]),v._v(" "),t("td",[v._v("主页")])]),v._v(" "),t("tr",[t("td",[v._v("icon")]),v._v(" "),t("td",[v._v("图标")])]),v._v(" "),t("tr",[t("td",[v._v("info,information")]),v._v(" "),t("td",[v._v("信息")])]),v._v(" "),t("tr",[t("td",[v._v("last")]),v._v(" "),t("td",[v._v("最后一个，常用于列表中")])]),v._v(" "),t("tr",[t("td",[v._v("links")]),v._v(" "),t("td",[v._v("链接")])]),v._v(" "),t("tr",[t("td",[v._v("login")]),v._v(" "),t("td",[v._v("登录")])]),v._v(" "),t("tr",[t("td",[v._v("logout")]),v._v(" "),t("td",[v._v("退出")])]),v._v(" "),t("tr",[t("td",[v._v("logo")]),v._v(" "),t("td",[v._v("标志")])]),v._v(" "),t("tr",[t("td",[v._v("main")]),v._v(" "),t("td",[v._v("主体")])]),v._v(" "),t("tr",[t("td",[v._v("menu")]),v._v(" "),t("td",[v._v("菜单")])]),v._v(" "),t("tr",[t("td",[v._v("meta")]),v._v(" "),t("td",[v._v("作者、更新时间等信息栏，一般位于标题之下")])]),v._v(" "),t("tr",[t("td",[v._v("module")]),v._v(" "),t("td",[v._v("模块")])]),v._v(" "),t("tr",[t("td",[v._v("more")]),v._v(" "),t("td",[v._v("更多（展开）")])]),v._v(" "),t("tr",[t("td",[v._v("msg，message")]),v._v(" "),t("td",[v._v("消息")])]),v._v(" "),t("tr",[t("td",[v._v("nav,navigation")]),v._v(" "),t("td",[v._v("导航")])]),v._v(" "),t("tr",[t("td",[v._v("next")]),v._v(" "),t("td",[v._v("下一页")])]),v._v(" "),t("tr",[t("td",[v._v("nub")]),v._v(" "),t("td",[v._v("小块")])]),v._v(" "),t("tr",[t("td",[v._v("odd")]),v._v(" "),t("td",[v._v("奇数，常用于多行列表或表格中")])]),v._v(" "),t("tr",[t("td",[v._v("off")]),v._v(" "),t("td",[v._v("鼠标离开")])]),v._v(" "),t("tr",[t("td",[v._v("on")]),v._v(" "),t("td",[v._v("鼠标移过")])]),v._v(" "),t("tr",[t("td",[v._v("output")]),v._v(" "),t("td",[v._v("输出")])]),v._v(" "),t("tr",[t("td",[v._v("pagination")]),v._v(" "),t("td",[v._v("分页")])]),v._v(" "),t("tr",[t("td",[v._v("pop,popup")]),v._v(" "),t("td",[v._v("弹窗")])]),v._v(" "),t("tr",[t("td",[v._v("preview")]),v._v(" "),t("td",[v._v("预览")])]),v._v(" "),t("tr",[t("td",[v._v("previous")]),v._v(" "),t("td",[v._v("上一页")])]),v._v(" "),t("tr",[t("td",[v._v("primary")]),v._v(" "),t("td",[v._v("主要")])]),v._v(" "),t("tr",[t("td",[v._v("progress")]),v._v(" "),t("td",[v._v("进度条")])]),v._v(" "),t("tr",[t("td",[v._v("promotion")]),v._v(" "),t("td",[v._v("促销")])]),v._v(" "),t("tr",[t("td",[v._v("rcommd,recommendations")]),v._v(" "),t("td",[v._v("推荐")])]),v._v(" "),t("tr",[t("td",[v._v("reg,register")]),v._v(" "),t("td",[v._v("注册")])]),v._v(" "),t("tr",[t("td",[v._v("save")]),v._v(" "),t("td",[v._v("保存")])]),v._v(" "),t("tr",[t("td",[v._v("search")]),v._v(" "),t("td",[v._v("搜索")])]),v._v(" "),t("tr",[t("td",[v._v("secondary")]),v._v(" "),t("td",[v._v("次要")])]),v._v(" "),t("tr",[t("td",[v._v("section")]),v._v(" "),t("td",[v._v("区块")])]),v._v(" "),t("tr",[t("td",[v._v("selected")]),v._v(" "),t("td",[v._v("已选")])]),v._v(" "),t("tr",[t("td",[v._v("share")]),v._v(" "),t("td",[v._v("分享")])]),v._v(" "),t("tr",[t("td",[v._v("show")]),v._v(" "),t("td",[v._v("显示")])]),v._v(" "),t("tr",[t("td",[v._v("sidebar")]),v._v(" "),t("td",[v._v("边栏，侧栏")])]),v._v(" "),t("tr",[t("td",[v._v("slide")]),v._v(" "),t("td",[v._v("幻灯片，图片切换")])]),v._v(" "),t("tr",[t("td",[v._v("sort")]),v._v(" "),t("td",[v._v("排序")])]),v._v(" "),t("tr",[t("td",[v._v("sub")]),v._v(" "),t("td",[v._v("次级的，子级的")])]),v._v(" "),t("tr",[t("td",[v._v("submit")]),v._v(" "),t("td",[v._v("提交")])]),v._v(" "),t("tr",[t("td",[v._v("subscribe")]),v._v(" "),t("td",[v._v("订阅")])]),v._v(" "),t("tr",[t("td",[v._v("subtitle")]),v._v(" "),t("td",[v._v("副标题")])]),v._v(" "),t("tr",[t("td",[v._v("success")]),v._v(" "),t("td",[v._v("成功（提示）")])]),v._v(" "),t("tr",[t("td",[v._v("summary")]),v._v(" "),t("td",[v._v("摘要")])]),v._v(" "),t("tr",[t("td",[v._v("tab")]),v._v(" "),t("td",[v._v("标签页")])]),v._v(" "),t("tr",[t("td",[v._v("table")]),v._v(" "),t("td",[v._v("表格")])]),v._v(" "),t("tr",[t("td",[v._v("txt,text")]),v._v(" "),t("td",[v._v("文本")])]),v._v(" "),t("tr",[t("td",[v._v("thumbnail")]),v._v(" "),t("td",[v._v("缩略图")])]),v._v(" "),t("tr",[t("td",[v._v("time")]),v._v(" "),t("td",[v._v("时间")])]),v._v(" "),t("tr",[t("td",[v._v("tips")]),v._v(" "),t("td",[v._v("提示")])]),v._v(" "),t("tr",[t("td",[v._v("title")]),v._v(" "),t("td",[v._v("标题")])]),v._v(" "),t("tr",[t("td",[v._v("video")]),v._v(" "),t("td",[v._v("视频")])]),v._v(" "),t("tr",[t("td",[v._v("wrap")]),v._v(" "),t("td",[v._v("容器，包，一般用于最外层")])]),v._v(" "),t("tr",[t("td",[v._v("wrapper")]),v._v(" "),t("td",[v._v("容器，包，一般用于最外层")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);