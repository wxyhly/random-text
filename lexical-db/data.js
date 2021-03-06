(function(data){
    typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = data) :
	grammarLoader.part(data);
})({
    'start': '<sentence>',
    'sentence': [
        '@ <action-sentence>',
        '<news-verb><subject><speak>。',
        '<news-verb><subject><adv-modifier><verb>。'
    ],
    'action-sentence': [
        '<subject><speak>。',
        '<subject>一边<verb>一边<verb>。',
        '<subject>一边<verb>一边<speak>。',
        '<subject><hard-work-verb><speak>。',
        '<subject><hard-work-verb><adv-modifier-without-time><verb>。',
        '<subject><verb>，然后<verb>。',
        '<subject><verb>，然后<speak>。',
        '<subject>在<subject>的<position><verb>。',
        '<subject>骑在<subject>的<body-part><verb>。',
        '<subject>努力让<subject><adv-modifier><verb>。',
        '<subject>拿着<weapon-like>威胁<subject>，要他<adv-modifier><verb>。',
        '<subject><adv-modifier><verb>。'
    ],
    'subject': '<person>',
    'speak': '<verb-speak>：<speak-content>',
    'class': [
        '语文', 
        '数学', 
        '英语', 
        '物理', 
        '化学', 
        '生物', 
        '微积分', 
        '线性代数', 
        '概率论', 
        '通用技术',
        '军事理论', 
        '近代史', 
        '马哲', 
        '毛概', 
        '数据结构', 
        '编译原理', 
        '电动力学', 
        '统计力学', 
        '复变函数',
        '数理方程', 
        '量子力学', 
        '计算机网络'
    ],
    'person': [
        "netrol",
        "黄大仙",
        "细胞",
        "伟萨",
        "韶华",
        "吴大右",
        "包子",
        "晟鬼",
        "喜欢喝冰红茶的某人",
        "彪娃",
        "小弟",
        "生活老师",
        "妖娆哥",
        "王铭章",
        "旗旗",
        "李明",
        "温神",
        "通用技术老师",
        "雀妈",
        "女人",
        "Daass",
        "黑蛋",
        "何二B",
        "苯丙氨酸",
        "显性纯合",
        "Black Five",
        "Lyrics",
        "町哥",
        "顺发",
        "张世明",
        "飞机",
        "有为",
        "张春晖",
        "胡宇",
        "邝元霄",
        "野田",
        "安倍",
        "金三胖",
        "奥巴马",
        "芽儿",
        "DQ",
        "WJ",
        "囗囗部部长",
        "某囗囗部员",
        "小组长",
        "QD",
        "ZZY",
        "阿波",
        "李云龙",
        "年级第一",
        "全班第一",
        "年级总是第三十一名的学生",
        "[匿名]",
        "等生",
        "抖森",
        "教民",
        "教父",
        "大主教",
        "石锅老板",
        "小主教",
        "巨婴",
        "卢蛋",
        "刘旭东",
        "freemerze",
        "何肥",
        "表表机器人",
        "云天明",
        "程心",
        "刘慈欣"
    ],//a
    'place': [
        "教室里",
        "鲤鱼所里",
        "Oak大业余无线电协会",
        "东海海底",
        "东海教会里",
        "操场上",
        "游乐园里",
        "大巴车里",
        "干洗店里",
        "干杂店里",
        "军事法庭上",
        "过山车里",
        "石象湖底",
        "女子十米跳台上",
        "囗囗部里",
        "座位上",
        "飞机上",
        "留尼旺岛马航残骸旁",
        "秦始皇墓里",
        "两千米深钻井底部",
        "洗衣机里",
        "厕所里",
        "办公室里",
        "珠穆朗玛峰顶",
        "天安门广场前",
        "火车站候车厅",
        "食堂",
        "大英博物馆",
        "建筑工地上",
        "铺盖窝里",
        "埃菲尔铁塔顶",
        "凯旋门面前",
        "百慕大三角上空",
        "天桥上",
        "钓鱼岛的海边",
        "公共汽车上",
        "地下停车场",
        "电脑面前",
        "月球上",
        "一大片西瓜地旁",
        "火星上",
        "木星上",
        "公共汽车的老弱病残孕座位上",
        "英国某南部小镇",
        '@ <class>课上'
    ],
    'place-time': [
        "奥运会领奖台上",
        "万隆会议上",
        "春晚舞台上"
    ],
    'time': [
        '午夜0点',
        '高考后'
    ],
    'adv-modifier': [
        "@ <adv-modifier-without-time>",
        "@ <time>在<place>",
    ],//b
    'adv-modifier-without-time': [
        "用跑操的时间",
        "用吃饭的时间",
        "跑到操场上",
        "拿着蓝翔的毕业证",
        "@ 在<place-time>",
        "@ 在<place>",
        "@ 在<time>"
    ],
    'verb': [
        "涂唇膏",
        "跳蜡笔小新舞",
        "吸食白粉",
        "绕操场跑了三十圈",
        "当大等生",
        "举办记者招待会",
        "举办新闻发布会",
        "听收音机",
        "闻臭氧有多臭",
        "模拟进行太空授课",
        "画了一幅自画像",
        "唱字母歌",
        "找UFO",
        "找失散多年的亲弟弟",
        "贩卖儿童",
        "走私枪支弹药",
        "舔棒棒糖",
        "对着电脑发呆",
        "翻起了白眼",
        "咬到了自己的舌头",
        "把自己变成了猪",
        "弹起了心爱的旧琵琶",
        "偷自行车",
        "写作文",
        "讲故事",
        "连不上WIFI，心急如焚",
        "切断了所有静脉",
        "切断了所有动脉",
        "割断了气管",
        "得了小儿麻痹症",
        "唱起了情歌",
        "吹起了口哨",
        "拉小提琴",
        "搓澡",
        "大口大口吃醋",
        "学习马列主义",
        "学习毛泽东思想",
        "贯彻了三个代表的精神",
        "认真贯彻落实了科学发展观",
        "唱起了少先队队歌",
        "唱黑猫警长",
        "唱葫芦娃",
        "烧光了头发",
        "用胶带封住了嘴",
        "一瘸一拐慢慢往前挪动",
        "行使合法权益",
        "证明了哥德巴赫猜想",
        "跳进了化粪池",
        "回答了问题，为小组加了2分",
        "紧张地进行有丝分裂",
        "紧张地进行脱分化",
        "紧张地进行无丝分裂",
        "用浓硫酸洗脸",
        "用王水洗脚",
        "赶作业",
        "踢足球",
        "睡觉",
        "面壁思过",
        "悟笔记",
        "啃鸡腿",
        "把嘴巴闭到了",
        "听摇滚乐",
        "细细回味辣条",
        "开挖掘机",
        // "耍手机",
        "说带着浓重地方口音的<lang>",
        "吸毒",
        "看学案，但实在无聊睡着了",
        "看着手机发呆",
        "发动了信仰之跃",
        "试图在岩浆里游泳",
        "@ 做<noun-do>",
        '@ 看<noun-watch>',
        '@ 玩<noun-play>',
        "@ 吃<noun-eat>",
        "@ 喝<noun-drink>",
        "@ 打<noun-hit>",
        '@ 拿出了《<book>》',
    ],//c
    'noun-watch': [
        '小说',
        '新闻联播',
        '书',
        '喜羊羊与灰太狼',
        '智慧树',
        '猫和老鼠',
        '海绵宝宝',
        '日全食',
        '国足',
        '物理实验视频',
        '天线宝宝',
        '蜡笔小新',
        '动画片',
        '@ 《<movie>》',
    ],
    'noun-play': [
        "agar.io",
        "贪吃蛇",
        "回收大战",
        "扫雷",
        "老鹰捉小鸡",
        "MC",
        "Golly",
        "cursor.io",
        '手机'
    ],
    'noun-eat': [
        "锅盔",
        "糖丸",
        "宝宝霜",
        "苏丹红",
        "僵尸肉",
        "翔",
        "洗衣粉",
        "饭",
        "土豆",
        "石锅",
        "烩面",
        "虾饺",
    ],
    'noun-do': [
        "眼保健操",
        "引体向上",
        "垂体切除手术",
        "脊蛙反射实验",
        "指纹识别",
        "DNA鉴定",
        "下蹲",
        "“CuO的正交分解”实验",
        "“魂断盐桥”实验", 
    ],
    'noun-drink': [
        "冰红茶",
        "氯水",
        "王水",
        "马尿",
        "二锅头",
    ],
    'noun-hit': [
        "麻将",
        "三国杀",
        "游戏",
        "干瞪眼",
        "斗地主",
        "篮球",
        "排球",
        "乒乓球",
    ],
    'lang': [
        '英语',
        '日语',
        '法语'
    ],
    'verb-speak': [
        "大声吼道",
        "疑神疑鬼地说",
        "感叹道",
        "轻声地说",
        "拿着喇叭，并对着说",
        "边哭边说",
        "在全国人民代表大会上发言",
        "当着全校在主席台上说",
        "在HitBoard上写道",
        "在自己的学案上写道",
        "在作文本上写道",
        "在媒体面前公然宣言",
        "口中振振有词地说",
        "面不改色心不跳地说",
        "皮笑肉不笑地说",
        "在批斗大会上邪恶地说",
        "在餐厅里突然高声说",
        "在弥留之际说道",
        "在高考考试时大声说",
        "对着猪圈说",
        "在街上吆喝",
        "在朋友圈里说道",
        "在说说里写道",
        "背着党和国家说道",
        "回眸一笑，轻声说道",
        "当众喊道"
    ],//d
    'speak-content': [
        "@ “<speak-text>”",
        "“我走了……请你们……一定要为……我……报……仇！”（死）"
    ],
    'speak-text': [
        "我一定会回来的！",
        "我不想星期天晚上考数学！",
        "不要迷恋我，我只是个传说！",
        "我强烈要求每天晚自习看电影！",
        "脑壳有乒乓嗦！",
        "我不想上第四节晚自习！",
        "我不是人！",
        "我想撞墙！",
        "打死我也不说！",
        "你可以Die了！",
        "我撞墙我选择！",
        "我跳楼我选择！",
        "我很独裁啊~",
        "我是猪我选择！",
        "人才啊！",
        "我真的想吐槽！",
        "不晓得为啥子……-……",
        "我控诉！",
        "傻爆了！",
        "死变态！",
        "这个烟花不是为我而放！",
        "我已经对生活失去希望了！",
        "妖精，哪里逃！",
        "统统锁迩大主教写法！",
        "我就是猴子请来的那个逗逼！",
        "听说飞机脑膜炎又犯了。",
        "你爷爷在此！",
        "世界那么大，我想去看看。",
        "我骄傲！",
        "糟了糟了，没落了。",
        "I'd rather not say.",
        "So you married her.",
        "you know,the ugly one."
    ],//e
    'hard-work-verb': [
        "总是梦想着有一天能",
        "一直都希望",
        "天天都想",
        "躺在床上闭着眼睛想",
        "在看学案时偷偷的想",
        "认为自己一定能",
        "相信自己能够",
        "坚持了21天，终于能",
        "在外打拼多年，终于可以",
        "觉得自己早该",
        "经多年的实地考察，终于可以放心地",
        "装了很久的逼，才",
        "花光了所有的积蓄，才"
    ],//f
    'news-verb': [
        "新华社消息：",
        "美联社报道：",
        "这个寓言故事的大意就是说，",
        "据有关部门透露：",
        "相关人士向记者透露：",
        "下面请看一则简讯：",
        "权威机构发布消息：",
        "据史料记载："
    ],//g
    'position': [
        '前面', 
        '背后'
    ],
    'body-part': [
        '肩上', 
        '背上', 
        '腿上'
    ],
    'weapon-like': [
        "核弹", 
        "匕首", 
        "电蚊拍", 
        "苍蝇拍", 
        "手榴弹", 
        "榴莲"
    ],
    'movie': [
        '唐之韵', 
        '星球大战', 
        '蜘蛛侠'
    ],
    'book': [
        '名师一号', 
        '红对钩', 
        '课时优化', 
        '文科爱好者', 
        '理科爱好者', 
        '天府数学', 
        '无机化学',
        '有机化学', 
        '小题狂练',
        '5年高考3年模拟',
        '5年中考3年模拟', 
        '典中点', 
        'An Introduction to Quantum Field Theory', 
        '吉米多维奇数学分析习题集',
        '量子力学习题精选与剖析',
        '高等数学证明题500例解析',
        '钢琴集体课教程',
        '简明法语教程',
        '微分几何入门与广义相对论',
        '简明量子场论'
    ]
});