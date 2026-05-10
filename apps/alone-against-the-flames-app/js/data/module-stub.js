const imageBase = "../../knowledge-base/wiki/entities/module-alone-against-the-flames-fulltext.assets";

function unresolvedNode(id, title, text) {
  return {
    id,
    title,
    tags: ["待结构化", "占位"],
    text: `${text}\n\n这一段已经被真实正文引用到，但还没被结构化进当前原型。下一步可以继续把它补成可运行节点。`,
    actions: [
      {
        id: `${id}-restart`,
        label: "回到开场",
        description: "返回这段真实开场切片的起点。",
        next: "entry-1"
      }
    ]
  };
}

export const moduleStub = {
  id: "alone-against-the-flames",
  title: "向火独行",
  subtitle: "开场切片结构化原型",
  startNodeId: "entry-1",
  characterTemplate: "tracker-compatible-investigator",
  endings: [
    {
      id: "opening-slice-end",
      label: "开场切片终点",
      summary: "你已经走完当前已结构化的真实开场范围，可以继续补后续条目。"
    },
    {
      id: "emberhead-escape",
      label: "逃离烬头村",
      summary: "你终于从节夜与火光之间脱身，但烬头村留下的问题远没有烧尽。"
    },
    {
      id: "emberhead-consumed",
      label: "被火吞没",
      summary: "你没能从节夜中逃出来，成为烬头村仪式的一部分。"
    }
  ],
  nodes: {
    "entry-1": {
      id: "entry-1",
      title: "条目 1 · 汽车站",
      tags: ["开场", "家乡", "启程"],
      image: `${imageBase}/opening-full-page.png`,
      text:
        "太阳高悬天空，无情地释放着热量。当你来到奥斯本药店门口的汽车站时，感觉自己都要被烤熟了。你放下沉重的行李箱，摘下帽子，终于得到片刻休息。你往脸上扇了扇风。\n\n在你的家乡，夏天总是漫长；但这个夏天格外令你空虚。你望向街对面，街对面是肮脏的肉店，挂着褪色遮阳篷的杂货店，还有破旧的烟草店。人们路过你时，用不信任的表情盯着你看，打量着你的衣着和行李。\n\n一辆灰色的小长途车开了过来，嘎啷嘎啷地响着停下。你戴回帽子，提起你的行李箱。",
      onEnterEffects: [
        { type: "logEntry", text: "真实开场开始：你在炎热的汽车站准备启程前往阿卡姆。" }
      ],
      actions: [
        {
          id: "board-bus",
          label: "提起行李，登上长途车",
          description: "进入真正的旅程起点。",
          next: "entry-263"
        }
      ]
    },
    "entry-263": {
      id: "entry-263",
      title: "条目 263 · 西拉斯与车票",
      tags: ["长途车", "属性分配", "西拉斯"],
      image: `${imageBase}/entry-263-bus-ticket.png`,
      text:
        "两个面有愠色的年轻男人走下了长途车。司机也下了车，瞟了你一眼，穿过马路进了烟草店。等他回来的时候，他正用泛黄的手指搓着烟卷。\n\n“去哪儿？”\n\n你把去奥西皮的票拿给他看。司机擦着火柴，点燃了香烟，又朝车尾指了指：“行李架在上边。”\n\n这一段在原模组里会让玩家分配八项属性，是角色建立真正接入剧情的地方。",
      onEnterEffects: [
        { type: "setFlag", key: "metSilas", value: true },
        { type: "logEntry", text: "你见到了司机西拉斯，模组开始把角色创建绑进剧情。" }
      ],
      actions: [
        {
          id: "lift-luggage",
          label: "把行李往车顶行李架上搬",
          description: "接着进入按体型分支的真实条目。",
          next: "entry-8"
        }
      ]
    },
    "entry-8": {
      id: "entry-8",
      title: "条目 8 · 搬运行李",
      tags: ["体型分支", "西拉斯"],
      text:
        "司机叼着烟，看着你把箱子拖到长途汽车的后面去。行李架装在车顶上，十分不便。你握紧了沉重的箱子。\n\n原文这里会按调查员的体型进行分支：体型 40 走一个入口，高于 40 走另一个入口。",
      actions: [
        {
          id: "size-40",
          label: "按体型 40 的路线继续",
          description: "进入条目 23。",
          next: "entry-23"
        },
        {
          id: "size-above-40",
          label: "按体型高于 40 的路线继续",
          description: "进入条目 38。",
          next: "entry-38"
        }
      ]
    },
    "entry-23": {
      id: "entry-23",
      title: "条目 23 · 司机搭手",
      tags: ["体型 40", "西拉斯"],
      text:
        "你折腾了几秒钟，司机走上前给你搭了把手，嘴里还叼着烟。“小不点，包可够大的。”他说道。你觉得你最好简单地感谢一下他作为回应。",
      actions: [
        {
          id: "thank-silas-small",
          label: "谢过司机，继续上车",
          description: "回到共同的开场主线。",
          next: "entry-233"
        }
      ]
    },
    "entry-38": {
      id: "entry-38",
      title: "条目 38 · 自己抬上去",
      tags: ["体型较高", "西拉斯"],
      text:
        "司机继续享受他的烟卷，饶有兴致地看着你和箱子拼命。你咬咬牙，终于把第二个行李举起来，放到了位。兴许阿卡姆的人会比他有礼貌点儿。",
      actions: [
        {
          id: "board-after-lift",
          label: "忍着不快，登上车厢",
          description: "回到共同的开场主线。",
          next: "entry-233"
        }
      ]
    },
    "entry-233": {
      id: "entry-233",
      title: "条目 233 · 真正上路",
      tags: ["角色建立", "长途车", "共同主线"],
      text:
        "司机把他的烟卷弹进排水沟，走进了车厢。发动机咳嗽着开始运转。你也上了车，非常庆幸自己至少在旅程开始时是唯一的乘客。你怀着复杂的感情，隔着窗户看着那些早已看厌的街道缓缓退远。\n\n原文在这里要求玩家填写属性半值、五分之一值，以及初始理智值与魔法值，说明模组正式进入规则教学。",
      onEnterEffects: [
        { type: "logEntry", text: "你坐上了长途车；原模组会在这里要求填写属性半值、五分之一值、SAN 和 MP。" }
      ],
      actions: [
        {
          id: "continue-beyond-233",
          label: "继续进入后续真实正文",
          description: "当前切片先在这里打一个锚点。",
          next: "entry-134"
        }
      ]
    },

    "entry-3": {
      id: "entry-3",
      title: "条目 3 · 露丝的警告",
      tags: ["第二日白天", "梅", "露丝"],
      text:
        "一上午的辛劳让你饥肠辘辘。你漫步在烬头村的街道上寻找食物。梅·莱德贝特从马路另一头走来，身后跟着个小女孩。这一定是露丝了。\n\n她跑到你身边就停下来，伸开胳膊，做了一个庆祝的手势。突然，她脸上的微笑不见了，好像一瞬间长大了几岁一样。\n\n“节日开始之前就走吧，”她小声嘘道。“走吧！”",
      onEnterEffects: [
        { type: "setFlag", key: "metRuth", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "露丝第一次明确警告你：节日开始之前就离开烬头村。" }
      ],
      actions: [
        {
          id: "ask-ruth",
          label: "追问露丝是什么意思",
          description: "进入条目 9。",
          next: "entry-9"
        },
        {
          id: "ask-may-about-ruth",
          label: "转而问梅为什么露丝这么说",
          description: "进入条目 15。",
          next: "entry-15"
        },
        {
          id: "say-nothing",
          label: "先不戳破，跟着回屋吃午饭",
          description: "进入条目 22。",
          next: "entry-22"
        }
      ]
    },
    "entry-4": {
      id: "entry-4",
      title: "条目 4 · 莱德贝特家借宿",
      tags: ["借宿", "梅", "节日"],
      text:
        "一名卷发松散、身穿粗糙便服的女人打开了门。她带着一点爱尔兰口音问你是不是在寻找过夜的房间。屋子逼仄、天花板低，但壁炉的火光和热茶让你慢慢暖了起来。\n\n“你是来烬头村参加节日的吗？”梅问道。",
      onEnterEffects: [
        { type: "setFlag", key: "metMay", value: true },
        { type: "logEntry", text: "你住进了梅·莱德贝特家，第一次听见“节日”这个词。" }
      ],
      actions: [
        {
          id: "explain-bus",
          label: "解释西拉斯和长途车的事",
          description: "进入条目 14。",
          next: "entry-14"
        },
        {
          id: "ask-festival",
          label: "顺势询问有关节日的事",
          description: "进入条目 21。",
          next: "entry-21"
        }
      ]
    },
    "entry-6": {
      id: "entry-6",
      title: "条目 6 · 村庄总览",
      tags: ["探索", "烬头村", "分支"],
      image: `${imageBase}/entry-6-village-overlook.png`,
      text:
        "你漫步在烬头村的街道上，可是并没有特别想去的地方。这个村子只需要不到五分钟就能从一头走到另一头。西面是盘山路，南边转向东边的路延伸下去，西南角有坍圮的教堂，东北方向则矗立着刻有浮雕的黑色金属建筑物。\n\n这是原作中第一次完整放开探索菜单的地方。",
      actions: [
        {
          id: "go-store",
          label: "去本地杂货店询问交通方式",
          description: "进入条目 16。",
          next: "entry-16"
        },
        {
          id: "go-town-hall",
          label: "找到村会堂",
          description: "当前切片里用条目 11 代表这条线。",
          next: "entry-11"
        },
        {
          id: "go-metal-structure",
          label: "调查巨大的金属建筑物",
          description: "去近距离看看那座不像新英格兰乡村会有的黑色建筑。",
          next: "entry-57"
        },
        {
          id: "go-church",
          label: "探索教堂",
          description: "去看那座坍圮教堂里还剩下什么。",
          next: "entry-34"
        }
      ]
    },
    "entry-7": {
      id: "entry-7",
      title: "条目 7 · 出村被堵",
      tags: ["围村", "逃离", "高压"],
      text:
        "当你来到南边通往下山处的道路时，你看见四个村民手持农具和棍棒挡住了去路。你改变方向前往西盘山路。另一边村口也几乎是同样的光景。你的心凉透了。你被困住了。",
      onEnterEffects: [
        { type: "setFlag", key: "roadsBlocked", value: true },
        { type: "logEntry", text: "你确认两侧村口都有人把守，烬头村已经不是想走就能走的地方。" }
      ],
      actions: [
        {
          id: "blocked-restart",
          label: "回到已结构化的白天探索入口",
          description: "当前切片先收在这个高压提示上。",
          next: "entry-22"
        }
      ]
    },
    "entry-9": {
      id: "entry-9",
      title: "条目 9 · 露丝重复警告",
      tags: ["露丝", "火", "不安"],
      text:
        "你蹲下来问露丝她说的是什么意思。露丝说：“节日很可怕，又亮、又热，到处都是火！”她的脸、她的声音都很幼稚。这转变过于突然，令人不安。",
      onEnterEffects: [
        { type: "setFlag", key: "heardRuthWarning", value: true },
        { type: "logEntry", text: "露丝把“节日”和“火”直接连在了一起。" }
      ],
      actions: [
        {
          id: "after-ruth-warning",
          label: "跟着梅回去吃午饭",
          description: "进入条目 22。",
          next: "entry-22"
        }
      ]
    },
    "entry-11": {
      id: "entry-11",
      title: "条目 11 · 村会堂",
      tags: ["调查", "文特斯", "布告板"],
      text:
        "村会堂俯瞰着村子北面较低的山脊。你推门进去，右手边是一扇写着“私用”的紧闭房门，左手边通往一个摆着长凳和布告板的敞亮房间。",
      actions: [
        {
          id: "inspect-board",
          label: "检查布告板",
          description: "进入条目 17。",
          next: "entry-17"
        },
        {
          id: "knock-private-door",
          label: "去敲那扇“私用”的门",
          description: "进入条目 24。",
          next: "entry-24"
        }
      ]
    },
    "entry-14": {
      id: "entry-14",
      title: "条目 14 · 谈西拉斯",
      tags: ["梅", "西拉斯", "借宿"],
      text:
        "梅谈起西拉斯，说他总是开太快，几年前还撞死过一匹母马。她又替他辩解，说烬头村离不开这个和外界联系的人。\n\n你又问了一遍她要价多少，梅讲了个相当便宜的价钱。吃过饭以后，离你平常睡觉的时间还有几个小时。",
      actions: [
        {
          id: "chat-with-may",
          label: "和梅多聊聊天",
          description: "把这段借宿关系继续往夜谈里推。",
          next: "entry-31"
        },
        {
          id: "walk-outside",
          label: "到外面转转，确认自己的方位",
          description: "先看看夜里的烬头村和悬崖边是什么感觉。",
          next: "entry-75"
        },
        {
          id: "sleep-early",
          label: "提前上床早睡觉",
          description: "把今晚先收住，直接进入睡前段落。",
          next: "entry-63"
        }
      ]
    },
    "entry-15": {
      id: "entry-15",
      title: "条目 15 · 梅替露丝圆场",
      tags: ["梅", "露丝", "隐瞒"],
      text:
        "你问梅为什么露丝要自己离开村子。她狠狠瞪了女儿一眼。梅说，露丝只是不喜欢家里进客人，但生活并不能事事如意，有时必须做些自己不喜欢的事。",
      onEnterEffects: [
        { type: "setFlag", key: "mayDeflectedRuth", value: true },
        { type: "logEntry", text: "梅把露丝的警告轻轻压了下去，但她的反应并不自然。" }
      ],
      actions: [
        {
          id: "after-may-deflects",
          label: "继续回屋吃午饭",
          description: "进入条目 22。",
          next: "entry-22"
        }
      ]
    },
    "entry-16": {
      id: "entry-16",
      title: "条目 16 · 杂货店",
      tags: ["杂货店", "交通", "补给"],
      text:
        "店主是一位体形硕大但动作敏捷的女人。她告诉你：这里每星期只来两辆长途车，下周才会有给杂货店送货的卡车。\n\n你的钱足够买到一两件便宜的日常用品。商店里没有武器，只有一把积满尘土的狩猎小刀。",
      onEnterEffects: [
        { type: "logEntry", text: "你确认烬头村的对外交通极其稀薄，而且可以在这里做少量补给。" }
      ],
      actions: [
        {
          id: "ask-storekeeper-about-festival",
          label: "顺口问问节日和今晚的安排",
          description: "看这位店主愿不愿意比梅说得更直白一点。",
          next: "entry-18"
        },
        {
          id: "take-knife",
          label: "把狩猎小刀也记作可买补给",
          description: "进入条目 25。",
          effects: [
            { type: "gainItem", item: "积尘的狩猎小刀" },
            { type: "setFlag", key: "visitedGeneralStore", value: true }
          ],
          next: "entry-25"
        },
        {
          id: "leave-store",
          label: "先不买武器，记住交通信息",
          description: "进入条目 25。",
          effects: [{ type: "setFlag", key: "visitedGeneralStore", value: true }],
          next: "entry-25"
        }
      ]
    },
    "entry-18": {
      id: "entry-18",
      title: "条目 18 · 杂货店主人的口风",
      tags: ["杂货店", "节日", "村民口风"],
      text:
        "店主先是像没听见一样继续整理货架，过了两秒才哼了一声，说今晚大家都会去悬崖和灯塔那边，最好别挡了路。她说这话时连头都没回，像是在谈一件比天气更普通的村里惯例。\n\n你再追问节日究竟是在庆祝什么，她终于转过身来，用一种不耐烦里掺着戒备的眼神看你。“就是保平安，”她说，“总归比外头那些人信的东西更管用。”随后她又像后悔自己说多了一样，伸手把柜台上那把积尘小刀往里推了推。",
      onEnterEffects: [
        { type: "setFlag", key: "heardStorekeeperFestivalTone", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "杂货店主人对节日的口气过于平常，反而让你更难把它当成普通庆典。" }
      ],
      actions: [
        {
          id: "entry-18-buy-knife",
          label: "顺手把那把小刀带上",
          description: "也许没什么用，但总比空手好。",
          effects: [
            { type: "gainItem", item: "积尘的狩猎小刀" },
            { type: "setFlag", key: "visitedGeneralStore", value: true }
          ],
          next: "entry-25"
        },
        {
          id: "entry-18-leave",
          label: "记住她的口气，先离开",
          description: "你已经得到比她愿意再多给的更多东西了。",
          effects: [{ type: "setFlag", key: "visitedGeneralStore", value: true }],
          next: "entry-25"
        }
      ]
    },
    "entry-17": {
      id: "entry-17",
      title: "条目 17 · 布告板上的细节",
      tags: ["侦查", "布告板", "线索"],
      checkHints: [
        {
          label: "侦查 Spot Hidden",
          type: "skill",
          skill: "侦查",
          notation: "1d100",
          description: "先投一次侦查，再决定走成功还是失败分支。"
        }
      ],
      text:
        "大人们的布告板满是广告和电报价目表，没有和节日相关的东西。孩子们的布告板上则写着托儿所安排，还有一些五颜六色却支离破碎的图画，其中一张画着一只巨鸟正在攻击烬头村。\n\n原文要求进行一次「侦查」检定：成功去条目 30，失败去条目 37。",
      actions: [
        {
          id: "spot-hidden-detail",
          label: "按侦查成功处理",
          description: "先进入条目 30，再并到条目 37。",
          transitionSummary: "你在杂乱细节里抓到了一点不该那么新的修补痕迹。",
          check: { label: "侦查成功", notation: "1d100", type: "skill", skill: "侦查", outcome: "success" },
          next: "entry-30"
        },
        {
          id: "miss-hidden-detail",
          label: "按侦查失败处理",
          description: "直接进入条目 37。",
          transitionSummary: "你没能从布告板周围看出更多异常，只好继续和会堂里的人打交道。",
          check: { label: "侦查失败", notation: "1d100", type: "skill", skill: "侦查", outcome: "failure" },
          next: "entry-37"
        }
      ]
    },
    "entry-21": {
      id: "entry-21",
      title: "条目 21 · 节日与灯塔",
      tags: ["节日", "灯塔", "梅"],
      text:
        "梅说，人们大概只可能是因为节日才会来烬头村。她提到村里有一座灯塔，每年的这个晚上都要举行火把游行，点燃悬崖上的灯塔，据说能保佑村庄全年平安无事。\n\n说完这些，她又把话题轻轻带回晚饭与住宿。",
      onEnterEffects: [
        { type: "setFlag", key: "heardAboutFestival", value: true },
        { type: "logEntry", text: "你第一次听到灯塔、火把游行与“保佑村庄”的说法。" }
      ],
      actions: [
        {
          id: "chat-after-festival",
          label: "和梅多聊聊天",
          description: "继续围着节日与烬头村的生活气氛深聊下去。",
          next: "entry-31"
        },
        {
          id: "walk-after-festival",
          label: "到外面转转，确认自己的方位",
          description: "把灯塔和火把游行的话先记着，再出去看看。",
          next: "entry-75"
        },
        {
          id: "sleep-after-festival",
          label: "提前上床早睡觉",
          description: "暂时不再追问，先结束这一晚。",
          next: "entry-63"
        }
      ]
    },
    "entry-22": {
      id: "entry-22",
      title: "条目 22 · 午饭后的抉择",
      tags: ["白天探索", "离村", "村会堂"],
      text:
        "你别过莱德贝特母女，向她们家走去。在低矮的厨房里，你用干硬的面包和剩下的炖菜凑合了一顿午餐。现在白昼还剩下差不多五个小时。\n\n你可以准备一点干粮，带上自己行李里仅有的必需品，继续出发，希望能在天黑之前抵达下一个村庄；你也可以去文特斯先生那里寻求帮助。",
      actions: [
        {
          id: "leave-village-daylight",
          label: "准备一点干粮，试着白天出村",
          description: "进入条目 28。",
          next: "entry-28"
        },
        {
          id: "visit-town-hall",
          label: "转而造访村会堂",
          description: "进入条目 11。",
          next: "entry-11"
        },
        {
          id: "survey-village-daylight",
          label: "先在村里走一圈，摸清几个关键地点",
          description: "进入村庄总览，从教堂、杂货店和黑色建筑开始调查。",
          next: "entry-6"
        },
        {
          id: "advance-to-festival-eve",
          label: "不再兜圈子，直接熬到节日前夕",
          description: "你已经知道得足够多，决定把注意力集中到今晚会发生什么。",
          next: "entry-190"
        }
      ]
    },
    "entry-24": {
      id: "entry-24",
      title: "条目 24 · 私用房门后的文特斯",
      tags: ["文特斯", "咖啡", "机会"],
      text:
        "你抬手敲门，但还没敲响，门就打开了。门后的中年绅士扶正眼镜。你自我介绍后，他镇定下来：“我是克莱德·文特斯。您要不要来点儿咖啡？我下午这个时间一般会喝一杯。”",
      actions: [
        {
          id: "accept-winters-coffee",
          label: "抓住机会，进去喝咖啡并提问题",
          description: "原文进入条目 43。",
          next: "entry-43"
        }
      ]
    },
    "entry-25": {
      id: "entry-25",
      title: "条目 25 · 白天调查菜单",
      tags: ["调查菜单", "重复探索", "白天"],
      text:
        "你已经能大概摸清自己在烬头村的位置了。你想继续深入调查吗？\n\n原文在这里要求你从若干地点中再选一项，而且不要重复之前的选择；如果下面的选项你已经试过四个，或者打算推进时间，就前往条目 3。",
      actions: [
        {
          id: "menu-store",
          label: "继续回杂货店确认交通",
          description: "再次进入条目 16。",
          next: "entry-16"
        },
        {
          id: "menu-hall",
          label: "去村会堂",
          description: "当前切片里用条目 11 表示这条线。",
          next: "entry-11"
        },
        {
          id: "menu-metal-structure",
          label: "去看黑色金属建筑物",
          description: "直奔那座最突兀的建筑，不再多绕一圈。",
          next: "entry-57"
        },
        {
          id: "menu-church",
          label: "去看坍圮教堂",
          description: "直奔村子西南角那座被掏空似的教堂。",
          next: "entry-34"
        },
        {
          id: "menu-explore-village",
          label: "直接进入白天探索的结果段",
          description: "跳到条目 3，开始露丝与梅的午后段落。",
          next: "entry-3"
        },
        {
          id: "menu-overview",
          label: "回到村庄总览再看一眼",
          description: "进入条目 6。",
          next: "entry-6"
        },
        {
          id: "menu-advance-night",
          label: "觉得线索已经够了，推进到节日前夕",
          description: "让白天收束，直接看今晚的烬头村会露出什么真面目。",
          next: "entry-190"
        }
      ]
    },
    "entry-28": {
      id: "entry-28",
      title: "条目 28 · 白天试着离村",
      tags: ["出村", "博物学", "树林"],
      checkHints: [
        {
          label: "博物学 Natural World",
          type: "skill",
          skill: "博物学",
          notation: "1d100",
          description: "听见树林中的异响后，先做一次博物学检定。"
        }
      ],
      text:
        "你带上钱、水还有几块三明治，还礼貌地给梅留了一张字条。走下南边的道路后，刚进入第一片树林，你就听到北面传来一阵轻快而怪异的呼啸。\n\n原文要求进行一次「博物学」检定：成功去条目 35，失败去条目 41。",
      actions: [
        {
          id: "nature-success",
          label: "按博物学成功处理",
          description: "你辨出了这阵异响的不自然之处。",
          transitionSummary: "那阵呼啸听起来不像单纯的风声，你至少知道自己该警觉什么。",
          check: { label: "博物学成功", notation: "1d100", type: "skill", skill: "博物学", outcome: "success" },
          next: "entry-35"
        },
        {
          id: "nature-fail",
          label: "按博物学失败处理",
          description: "你没听懂，只能带着更重的不安往前走。",
          transitionSummary: "你没分辨出那声音的来头，只觉得树林里的不安感更重了。",
          check: { label: "博物学失败", notation: "1d100", type: "skill", skill: "博物学", outcome: "failure" },
          next: "entry-41"
        }
      ]
    },
    "entry-30": {
      id: "entry-30",
      title: "条目 30 · 侦查成功的额外发现",
      tags: ["侦查成功", "线索"],
      text:
        "午后的阳光照射到地面上，你发现窗户下面的地板比房间中央的地板要新，窗框也有最近曾经更换过的痕迹。也许是雨水漏进来腐蚀了木头，也也许不是。\n\n原文允许你在「侦查」旁打勾，然后并入条目 37。",
      onEnterEffects: [
        { type: "setFlag", key: "noticedNewFloorboards", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你注意到会堂地板与窗框有近期修补的痕迹。" }
      ],
      actions: [
        {
          id: "continue-to-37",
          label: "带着这个发现继续",
          description: "进入条目 37。",
          next: "entry-37"
        }
      ]
    },
    "entry-31": {
      id: "entry-31",
      title: "条目 31 · 和梅夜谈",
      tags: ["夜谈", "梅", "魅惑"],
      checkHints: [
        {
          label: "魅惑 Charm",
          type: "skill",
          skill: "魅惑",
          notation: "1d100",
          description: "想把夜谈撬深一点，先做一次魅惑检定。"
        }
      ],
      text:
        "梅开始说起她在烬头村的生活。她提到住在纽约的妹妹，也提到这里所谓真正的群体性：所有人的脸都是熟脸，所有人都一起工作。她说，除了那些自己选择离开群体的人，这里并不排斥任何人。\n\n原文这里要求进行一次「魅惑」检定：成功去条目 39，失败去条目 51。",
      actions: [
        {
          id: "charm-success",
          label: "按魅惑成功处理",
          description: "进入条目 39。",
          transitionSummary: "梅放下了表面的客气，开始谈起自己的处境与失落。",
          check: { label: "魅惑成功", notation: "1d100", type: "skill", skill: "魅惑", outcome: "success" },
          next: "entry-39"
        },
        {
          id: "charm-fail",
          label: "按魅惑失败处理",
          description: "进入条目 51。",
          transitionSummary: "梅没有真正敞开，只把谈话拖成了疲倦的村庄闲聊。",
          check: { label: "魅惑失败", notation: "1d100", type: "skill", skill: "魅惑", outcome: "failure" },
          next: "entry-51"
        }
      ]
    },
    "entry-43": {
      id: "entry-43",
      title: "条目 43 · 文特斯的房间",
      tags: ["文特斯", "咖啡", "会堂内侧"],
      text:
        "你走进标着“私用”的门。村会堂的这一边和公用空间形成了鲜明对比：房间布置非常紧凑，书架和文件柜整齐地排成几排，角落里还有小型的食品储藏处，可能同时兼作盥洗室。\n\n在文特斯先生给咖啡壶续水时，你上下审视了他一番，也注意到对面墙边桌子上像电报机的装置。",
      onEnterEffects: [
        { type: "setFlag", key: "enteredWintersOffice", value: true },
        { type: "logEntry", text: "你进入了文特斯的私用房间，会堂开始像真正的调查场所而不只是门面。" }
      ],
      actions: [
        {
          id: "ask-telegraph-now",
          label: "立即询问电报的事",
          description: "进入条目 56。",
          next: "entry-56"
        },
        {
          id: "chat-with-winters-first",
          label: "先和文特斯聊聊",
          description: "进入条目 49。",
          next: "entry-49"
        }
      ]
    },
    "entry-37": {
      id: "entry-37",
      title: "条目 37 · 会堂里的邀请",
      tags: ["文特斯", "会堂", "咖啡"],
      text:
        "你身后的门发出吱嘎的响声。一个戴眼镜的中年绅士出现在门前：“有什么需要吗？”你解释说，梅·莱德贝特建议自己来这里。\n\n“啊。好吧。我是克莱德·文特斯。我不知道我能不能帮上您的忙，但……您要不要来点儿咖啡？我下午总爱喝一杯。”",
      actions: [
        {
          id: "accept-coffee",
          label: "接受邀请，进去谈谈",
          description: "原文进入条目 43。",
          next: "entry-43"
        },
        {
          id: "return-to-day-explore",
          label: "先记下这条线，回到白天调查菜单",
          description: "回到当前切片的调查枢纽。",
          next: "entry-25"
        }
      ]
    },
    "entry-39": {
      id: "entry-39",
      title: "条目 39 · 梅的自白",
      tags: ["夜谈成功", "梅", "晚安前"],
      text:
        "随着时间流逝，梅乐观的态度变成了沉吟。她告诉你自己是个寡妇，手头有点钱，也欢迎像你这样的旅行者做客。她说，只要住在这里就不会挨饿，但也直言自己不可能再嫁出去了，村里的每个男人她都认识得太清楚。\n\n她打了个呵欠，终于问你想几点吃早饭。",
      onEnterEffects: [
        { type: "setFlag", key: "charmedMay", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你和梅聊得更深了一层，她的个人处境也稍微向你敞开了些。" }
      ],
      actions: [
        {
          id: "step-out-after-39",
          label: "带着梅说过的话，去外面看看夜空",
          description: "你还不想立刻睡，想把这村子的夜色亲眼看一眼。",
          next: "entry-131"
        },
        {
          id: "catch-ruth-after-39",
          label: "趁气氛还没散，试着再和露丝说话",
          description: "她今晚的古怪存在感一直没从你脑子里退下去。",
          next: "entry-138"
        },
        {
          id: "go-to-bed-after-39",
          label: "道一声晚安，回房睡觉",
          description: "进入条目 63。",
          next: "entry-63"
        }
      ]
    },
    "entry-49": {
      id: "entry-49",
      title: "条目 49 · 文特斯的客套与自负",
      tags: ["文特斯", "会堂", "客套话"],
      text:
        "咖啡壶咕噜噜地响起来，你和文特斯先生互相说着客套话。他谈起住在烬头村是一种交易，也谈起维护这片地方是落在自己头上的责任。\n\n他说，今天晚上夕阳落山时，你应该出去看看村子四周的美景。他们和平地住在这里，正处在“群星之路的中途”。说完这些，他若有所思地看着你。现在是个问电报的好时机。",
      onEnterEffects: [
        { type: "setFlag", key: "heardWintersSpeech", value: true },
        { type: "logEntry", text: "文特斯把自己讲成了烬头村秩序与责任的维护者。" }
      ],
      actions: [
        {
          id: "ask-telegraph-after-small-talk",
          label: "顺势追问电报",
          description: "进入条目 56。",
          next: "entry-56"
        }
      ]
    },
    "entry-51": {
      id: "entry-51",
      title: "条目 51 · 梅的疲惫导览",
      tags: ["夜谈失败", "梅", "晚安前"],
      text:
        "随着时间流逝，梅的话语多少有些变成了疲累的游览指导。她聊起天气好的时候视野有多壮观，又提到锡尔伯里街尽头的工坊和新鲜出炉的面包。你不好意思打断她，说自己其实不久就要继续上路。\n\n最后她还是打起呵欠，问你还要不要继续听她瞎唠，以及明早想几点吃早饭。",
      onEnterEffects: [
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你没能更深地撬开梅的话头，这场夜谈慢慢滑成了疲倦的村庄介绍。" }
      ],
      actions: [
        {
          id: "step-out-after-51",
          label: "不急着睡，先出去透口气",
          description: "这场谈话太闷了，你想看看外面的夜里是不是也一样压抑。",
          next: "entry-131"
        },
        {
          id: "catch-ruth-after-51",
          label: "趁梅去收拾时，再找露丝说一句",
          description: "比起大人的客套，你现在更想知道那个孩子到底在怕什么。",
          next: "entry-138"
        },
        {
          id: "go-to-bed-after-51",
          label: "顺势结束谈话，回房睡觉",
          description: "进入条目 63。",
          next: "entry-63"
        }
      ]
    },
    "entry-56": {
      id: "entry-56",
      title: "条目 56 · 电报线坏了",
      tags: ["电报", "离村机会", "文特斯"],
      text:
        "文特斯解释说，电报线已经坏了两个星期，虽然报修了，但因为问题出在乡下，不会有人太快过来。他希望后天能有人来修。到那时，也许维修队能顺路把你带走，只收一两美元的车马费。\n\n后天。这可不太理想，但总算是一次真正的离村机会。",
      onEnterEffects: [
        { type: "setFlag", key: "learnedTelegraphDelay", value: true },
        { type: "logEntry", text: "你得知电报线还要等后天才可能修好，离村终于有了一个勉强可靠的时间点。" }
      ],
      actions: [
        {
          id: "leave-after-telegraph",
          label: "谢过文特斯先生并离开",
          description: "进入条目 180。",
          next: "entry-180"
        },
        {
          id: "ask-about-library",
          label: "询问他的藏书室",
          description: "进入条目 62。",
          next: "entry-62"
        },
        {
          id: "press-winters-about-building",
          label: "顺势追问那座黑色建筑到底是什么",
          description: "看文特斯对村里最突兀的那栋建筑会给出怎样的说法。",
          next: "entry-61"
        }
      ]
    },
    "entry-61": {
      id: "entry-61",
      title: "条目 61 · 文特斯解释那栋建筑",
      tags: ["文特斯", "黑色建筑", "话术"],
      checkHints: [
        {
          label: "话术 Fast Talk",
          type: "skill",
          skill: "话术",
          notation: "1d100",
          description: "想让文特斯多说两句而不是立刻把话题拨开，就先做一次话术检定。"
        }
      ],
      text:
        "你尽量用轻描淡写的口气提起东北角那座黑色建筑。文特斯推了推眼镜，停顿得几乎看不出来，随后说那不过是村里一处“旧公产”，平时并不对外开放，也没什么值得游客看的。\n\n他说得越平静，你越觉得这不是一个已经准备好给外人听的解释。你若想再往下逼一点，就得让他相信你只是好奇，而不是已经从别处摸到了什么。",
      onEnterEffects: [
        { type: "setFlag", key: "askedWintersAboutStructure", value: true },
        { type: "logEntry", text: "你把话题引到黑色建筑上，文特斯给出的解释平静得过了头。" }
      ],
      actions: [
        {
          id: "entry-61-fasttalk-success",
          label: "按话术成功处理",
          description: "文特斯说漏了一点与“对准”有关的措辞。",
          transitionSummary: "你装出的随意让文特斯也放松了半秒，那半秒已经足够他泄露一点口风。",
          check: { label: "话术成功", type: "skill", skill: "话术", notation: "1d100", outcome: "success" },
          next: "entry-64"
        },
        {
          id: "entry-61-fasttalk-fail",
          label: "按话术失败处理",
          description: "文特斯立刻把问题收回到客气的表面上。",
          transitionSummary: "他看你的那一眼像是在重新评估你到底知道多少，然后整个人又缩回了礼貌里。",
          check: { label: "话术失败", type: "skill", skill: "话术", notation: "1d100", outcome: "failure" },
          next: "entry-62"
        }
      ]
    },
    "entry-64": {
      id: "entry-64",
      title: "条目 64 · “对准得刚刚好”",
      tags: ["文特斯", "黑色建筑", "话术成功"],
      text:
        "文特斯说，那栋建筑很多年前就已经在那里了，村里人只是负责维护。他本来像要就此打住，却又像顺着惯性补了一句：“有些东西摆在那里，正是因为它们对准得刚刚好。”\n\n他说完便意识到自己不该多言，立刻改口把“对准”解释成防风、排水和山脊走势之类的乡间经验。但那句已经落到你耳朵里了，而且和你在别处见过、听过的东西咬得太紧，紧到几乎不像巧合。",
      onEnterEffects: [
        { type: "setFlag", key: "heardWintersAlignmentSlip", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "文特斯在解释黑色建筑时漏出一句“对准得刚刚好”，随后又急忙收了回去。" }
      ],
      actions: [
        {
          id: "entry-64-library",
          label: "装作没听出来，转而要求看看书架",
          description: "既然他已经松了一瞬，图书室也许会给你更多线索。",
          next: "entry-62"
        },
        {
          id: "entry-64-leave",
          label: "把这句记牢，先离开会堂",
          description: "这条口风已经足够值回这趟来访。",
          next: "entry-180"
        }
      ]
    },
    "entry-62": {
      id: "entry-62",
      title: "条目 62 · 属于全村的藏书室",
      tags: ["藏书室", "文特斯", "研究入口"],
      text:
        "你对他架子上那些书做了几句简单而讨好的评论。文特斯高兴地涨红了脸，解释说这当然不是他的私人收藏，而是属于全村的；挂上“私用”的牌子只是为了防止别人集会时随便进出。\n\n你扫了一眼书架：有数学与科学书、还说得过去的文史书、一架文学书，还有几本通俗小说和破烂的《幻丽诡谭》杂志。",
      onEnterEffects: [
        { type: "setFlag", key: "seenVillageLibrary", value: true },
        { type: "logEntry", text: "你确认文特斯的房间其实也是烬头村的图书室。" }
      ],
      actions: [
        {
          id: "study-library",
          label: "花点时间在图书馆里研究研究",
          description: "进入条目 68。",
          next: "entry-68"
        },
        {
          id: "leave-before-dark",
          label: "趁天色还早时离开",
          description: "进入条目 180。",
          next: "entry-180"
        }
      ]
    },
    "entry-63": {
      id: "entry-63",
      title: "条目 63 · 晚安，露丝",
      tags: ["夜里", "露丝", "睡下"],
      text:
        "当梅站起身的时候，你听到身后传来撞门的声音。她把偷听的露丝叫了出来，让她和客人打招呼。门缝后的小女孩大眼睛盯着你，说了句“很高兴见到你”，又被赶回去睡觉。\n\n梅告诉你，露丝今年夏天就十岁了，是个既快乐又痛苦的孩子。你走进自己的房间躺下，房间有点冷，但干净的床单很快让你暖和起来。你很快睡着了。",
      onEnterEffects: [
        { type: "setFlag", key: "metRuthAtNight", value: true },
        { type: "logEntry", text: "露丝在夜里短暂露面，整间屋子的气氛比表面上更古怪。" }
      ],
      actions: [
        {
          id: "sleep-through-night",
          label: "睡去，进入次日清晨",
          description: "原文进入条目 154；当前先作为这一段切片的夜间收束。",
          next: "entry-154"
        }
      ]
    },
    "entry-68": {
      id: "entry-68",
      title: "条目 68 · 整个下午的研究",
      tags: ["图书室", "研究", "分流"],
      text:
        "文特斯很高兴你能花掉整个下午的时间读书，还给你找了一把直挺但舒适的椅子。你有足够的时间顺着一条线索做深入研究。\n\n原文在这里会按研究主题继续分流。",
      onEnterEffects: [
        { type: "setFlag", key: "studiedAtLibrary", value: true },
        { type: "logEntry", text: "你把一个下午押在了村会堂的书架上，准备从纸页里摸烬头村的底。" }
      ],
      actions: [
        {
          id: "study-local-history",
          label: "研读本地历史相关的内容",
          description: "从零散卷册里拼这座村庄更老的一层历史。",
          next: "entry-74"
        },
        {
          id: "study-festival",
          label: "研读节日相关的内容",
          description: "从手稿和专题文章里摸节日的来路。",
          next: "entry-81"
        },
        {
          id: "study-science",
          label: "研读科学书籍",
          description: "看看科学与天文学那一架能不能给你别的角度。",
          next: "entry-88"
        },
        {
          id: "study-weird-fiction",
          label: "研读怪诞小说",
          description: "也许线索没有，至少能给脑子换换气。",
          next: "entry-94"
        }
      ]
    },
    "entry-74": {
      id: "entry-74",
      title: "条目 74 · 本地历史拼图",
      tags: ["图书室", "本地历史", "阿布纳基"],
      text:
        "这里并没有单独记述本地历史的书籍，你只能从大量薄薄的专述卷册中拼凑出大概的模样。\n\n你读到一些暗示：阿布纳基人曾把烬头村所在的山头当成祭祀场所，每年会在“树叶颜色变成日落最浓的颜色时”上山举行仪式。后来乔治王战争的反击把他们几乎彻底驱离此地。至于烬头村本身，可靠记载只表明独立战争后不久山上已经有人定居。",
      onEnterEffects: [
        { type: "setFlag", key: "studiedLocalHistory", value: true },
        { type: "logEntry", text: "你拼出了烬头村背后的更老一层地基：祭祀山头、阿布纳基人、以及断裂得很厉害的定居史。" }
      ],
      actions: [
        {
          id: "cross-check-hill-history",
          label: "把山头祭场和现在的村庄位置对着看一遍",
          description: "你想确认烬头村是不是恰好长在那处旧祭场的脊线上。",
          next: "entry-76"
        },
        {
          id: "after-local-history",
          label: "继续把这下午读下去",
          description: "进入条目 99。",
          next: "entry-99"
        }
      ]
    },
    "entry-76": {
      id: "entry-76",
      title: "条目 76 · 山脊从来没换过",
      tags: ["图书室", "本地历史", "深挖"],
      text:
        "你把几本薄册里提到的地名、山脊线和聚居点位置凑到一起，慢慢意识到一件不舒服的事：无论是阿布纳基人的旧祭场，还是后来的烬头村，它们围着的始终是同一段山头与同一处临崖空地。\n\n换句话说，变的也许只是住在这里的人、他们嘴里讲述的理由，以及他们愿意承认自己到底在延续什么。",
      onEnterEffects: [
        { type: "setFlag", key: "linkedVillageToOldRitualHill", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你看出旧祭场与如今的烬头村并非偶然重叠，而像是一种延续。" }
      ],
      actions: [
        {
          id: "entry-76-back-99",
          label: "记下这层延续，继续研究",
          description: "你已经不再把村史看成几段彼此无关的旧闻。",
          next: "entry-99"
        }
      ]
    },
    "entry-81": {
      id: "entry-81",
      title: "条目 81 · 节日手稿",
      tags: ["图书室", "节日", "阿尼奥洛夫斯基"],
      text:
        "没有出版资料论述烬头村的节日，这并不奇怪。文特斯翻出一盒专题文章，找到阿尼奥洛夫斯基博士写在泛黄纸上的手稿。\n\n你读得很慢。手稿推测，这个节日可能源自凯尔特移民带来的原始宗教仪式，还提到与季节有关的争论，以及和烬头村“校准”相关的间接引文。可文章正要开始讨论现代仪式时，却在第 28 页末尾戛然而止。",
      onEnterEffects: [
        { type: "setFlag", key: "studiedFestivalPapers", value: true },
        { type: "logEntry", text: "你摸到了节日的学术碎片：凯尔特仪式、季节校准，以及一份刚到关键处就断掉的手稿。" }
      ],
      actions: [
        {
          id: "inspect-handwritten-margins",
          label: "再看看断稿前后的批注与边角",
          description: "你怀疑真正关键的东西不一定写在正文里。",
          next: "entry-83"
        },
        {
          id: "after-festival-research",
          label: "带着这些疑点继续研究",
          description: "进入条目 99。",
          next: "entry-99"
        }
      ]
    },
    "entry-83": {
      id: "entry-83",
      title: "条目 83 · 断稿旁边的笔迹",
      tags: ["图书室", "节日", "深挖"],
      text:
        "你把手稿翻回前后几页，终于在页边找到几行被淡铅笔匆匆写下的旁注。字迹和正文不太一样，像是作者后来补上的提醒。其中一行提到“现代实践已与公开叙述脱钩”，另一行则只写了短短几个词：'火、灯塔、站位、不可抬头。'\n\n你盯着最后那几个词看了很久。它们不像学术摘要，更像有人在记一套必须照做的步骤。",
      onEnterEffects: [
        { type: "setFlag", key: "foundFestivalMarginNotes", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你在节日手稿边角找到零碎批注：火、灯塔、站位、不可抬头。" }
      ],
      actions: [
        {
          id: "entry-83-back-99",
          label: "把这几句记牢，继续研究",
          description: "现在你已经不只是在猜今晚会有仪式，而是在猜它的步骤。",
          next: "entry-99"
        }
      ]
    },
    "entry-88": {
      id: "entry-88",
      title: "条目 88 · 天文学与夜空",
      tags: ["图书室", "科学", "天文学"],
      text:
        "你挑出来的科学书籍相当枯燥，后来干脆换了一本天文学书。书里夹着太平洋天文学会的宣传页，讨论火星是否可能存在生命、极地冰盖和会随季节变化的暗区植被。\n\n文特斯听你翻到这里，很赞许地问你是不是天文学家，还说烬头村是观察夜空的理想地点，这几天连北落师门都能看到。",
      onEnterEffects: [
        { type: "setFlag", key: "studiedAstronomy", value: true },
        { type: "logEntry", text: "你在科学书里意外摸到了另一种气氛：火星、星空，以及文特斯对夜空近乎炫耀的熟悉。" }
      ],
      actions: [
        {
          id: "compare-star-notes",
          label: "顺着宣传页和书里的星图再比一轮",
          description: "你想知道文特斯为什么偏偏提到这个时间段的夜空。",
          next: "entry-89"
        },
        {
          id: "after-science-research",
          label: "把书页合上，继续待到下午变晚",
          description: "进入条目 99。",
          next: "entry-99"
        }
      ]
    },
    "entry-89": {
      id: "entry-89",
      title: "条目 89 · 不是哪一晚都行",
      tags: ["图书室", "天文学", "深挖"],
      text:
        "你把宣传页上的季节星空说明和书里的几张简图前后对照，这才意识到文特斯对夜空的熟悉并不是随口夸耀。若真像他所说，眼下这一两天能在这个方位看见特定亮星，那今晚的天空就不是随便一晚都能替代的背景。\n\n你不需要真懂天文学也能明白这点：若村里真在等什么，它等的恐怕不只是天黑，而是某个恰好落在今晚的时刻。",
      onEnterEffects: [
        { type: "setFlag", key: "understoodSpecificNightSky", value: true },
        { type: "logEntry", text: "你意识到文特斯反复提夜空，并不是单纯夸赞景色，而是在强调今晚本身的特殊性。" }
      ],
      actions: [
        {
          id: "entry-89-back-99",
          label: "合上星图，把这点记在心里",
          description: "今晚之所以重要，也许并不只因为村民这么说。",
          next: "entry-99"
        }
      ]
    },
    "entry-94": {
      id: "entry-94",
      title: "条目 94 · 怪诞小说",
      tags: ["图书室", "怪诞小说", "理智缓冲"],
      text:
        "当你拿着破破烂烂的杂志坐下来时，文特斯挑起一只眉毛，但什么也没说。《幻丽诡谭》上的故事尽是些异想天开：轨道上的监牢、囚禁中年妇女的恶魔，还有靠无线电波往来星际的机械蜘蛛。\n\n你看其中一篇科幻小说入了迷。它荒诞、奇异，又奇妙地让你放松下来，把当前的困境都暂时丢进了字缝里。",
      onEnterEffects: [
        { type: "setFlag", key: "readWeirdFiction", value: true },
        { type: "adjustSan", value: 1 },
        { type: "logEntry", text: "你没从怪诞小说里得到线索，却得到了一小段从烬头村现实里脱身的喘息。" }
      ],
      actions: [
        {
          id: "notice-fiction-echo",
          label: "翻完放松之余，留意有没有哪篇故事过分贴近现实",
          description: "有时最不正经的东西反而会把真相照出个边。",
          next: "entry-96"
        },
        {
          id: "after-weird-fiction",
          label: "继续待到文特斯提醒天色不早",
          description: "进入条目 99。",
          next: "entry-99"
        }
      ]
    },
    "entry-96": {
      id: "entry-96",
      title: "条目 96 · 俗艳故事里的影子",
      tags: ["图书室", "怪诞小说", "深挖"],
      text:
        "你本想笑着把杂志合上，却在其中一篇荒唐故事的结尾处停住了。那故事写一群偏远聚落的人为了让“天上的路径保持敞开”，年复一年重复某种他们自己也未必完全理解的火祭。文字当然夸张、俗艳、漏洞百出，可它偏偏用了一个让你不舒服的词：'站位。'\n\n你很清楚这不能算线索，却也很难否认，烬头村已经让你开始把最荒唐的情节都拿来和现实互相映照。",
      onEnterEffects: [
        { type: "setFlag", key: "fictionEchoedRitual", value: true },
        { type: "adjustSan", value: 1 },
        { type: "logEntry", text: "连怪诞小说里都出现了让你联想到烬头村节夜的词：站位、火祭与天上的路径。" }
      ],
      actions: [
        {
          id: "entry-96-back-99",
          label: "把这点不舒服压下去，继续研究",
          description: "它也许只是你的联想，也许不是。",
          next: "entry-99"
        }
      ]
    },
    "entry-99": {
      id: "entry-99",
      title: "条目 99 · 下午正在流逝",
      tags: ["图书室", "时间推进", "信用评级"],
      checkHints: [
        {
          label: "信用评级 Credit Rating",
          type: "skill",
          skill: "信用评级",
          notation: "1d100",
          description: "看文特斯愿不愿意多留你一会儿，先做一次信用评级检定。"
        }
      ],
      text:
        "下午的时间在流逝。你还没彻底完成研读，文特斯就看看窗外，站起身来，清了清嗓子。\n\n原文这里要求进行一次「信用评级」检定：成功去条目 111，失败去条目 105。",
      onEnterEffects: [
        { type: "setFlag", key: "timeAdvancedAtLibrary", value: true },
        { type: "logEntry", text: "研究没有真正读完，但时间先一步把你从书堆里拎了出来。" }
      ],
      actions: [
        {
          id: "credit-success",
          label: "按信用评级成功处理",
          description: "文特斯被你说动，愿意再给你一点时间。",
          transitionSummary: "你的谈吐和姿态让文特斯愿意再多给你一点时间。",
          check: { label: "信用评级成功", notation: "1d100", type: "skill", skill: "信用评级", outcome: "success" },
          next: "entry-111"
        },
        {
          id: "credit-fail",
          label: "按信用评级失败处理",
          description: "你的体面还不足以让他改掉今晚的安排。",
          transitionSummary: "文特斯的客气到此为止，他决定按自己的时间表关门。",
          check: { label: "信用评级失败", notation: "1d100", type: "skill", skill: "信用评级", outcome: "failure" },
          next: "entry-105"
        }
      ]
    },
    "entry-105": {
      id: "entry-105",
      title: "条目 105 · 图书室要关门了",
      tags: ["图书室", "信用评级失败", "收口"],
      text:
        "文特斯带着一点歉意告诉你，他天黑前还有些差事要做，所以今天图书室必须关门了。如果你特别有需要，希望你明天下午再来。\n\n你和他一起离开房子，等着他锁门。你感谢他的咖啡和这段查书时间。你一边想着最好明天下午之前自己已经离村，一边承认：知道这里有个能专注的地方，总归是件事。",
      onEnterEffects: [
        { type: "setFlag", key: "libraryClosedEarly", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你的信用还不够让文特斯继续留你，图书室在傍晚前就收了。" }
      ],
      actions: [
        {
          id: "after-105",
          label: "离开会堂，回到莱德贝特家吃晚饭",
          description: "进入条目 180。",
          next: "entry-180"
        }
      ]
    },
    "entry-111": {
      id: "entry-111",
      title: "条目 111 · 多留半小时",
      tags: ["图书室", "信用评级成功", "额外逗留"],
      checkHints: [
        {
          label: "侦查 Spot Hidden",
          type: "skill",
          skill: "侦查",
          notation: "1d100",
          description: "多出来的半小时里，可以再投一次侦查看看会不会有额外发现。"
        }
      ],
      text:
        "文特斯笑道，他很高兴留你在这里再看半个小时左右，只要没有借书卡，就别把这里的书带走。\n\n你谢过他的信任，继续读了一会儿。光线逐渐昏暗，闭塞的房间让你开始打呵欠。也许现在该换本书，或者换个注意力的方向。",
      onEnterEffects: [
        { type: "setFlag", key: "earnedMoreLibraryTime", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你在文特斯那里挣到了额外半小时，图书室线因此多开了一道缝。" }
      ],
      actions: [
        {
          id: "spot-something-more",
          label: "按侦查成功处理",
          description: "你在图书室的阴影里抓到一条额外线索。",
          transitionSummary: "趁着多出来的半小时，你又从书架和房间细节里抓到了一点东西。",
          check: { label: "侦查成功", notation: "1d100", type: "skill", skill: "侦查", outcome: "success" },
          next: "entry-118"
        },
        {
          id: "miss-extra-clue",
          label: "按侦查失败处理",
          description: "进入条目 124。",
          transitionSummary: "多出来的时间并没有再给你新发现，只是让黄昏更快压下来。",
          check: { label: "侦查失败", notation: "1d100", type: "skill", skill: "侦查", outcome: "failure" },
          next: "entry-124"
        }
      ]
    },
    "entry-124": {
      id: "entry-124",
      title: "条目 124 · 关门时间到了",
      tags: ["图书室", "额外逗留结束", "收口"],
      text:
        "门打开了，文特斯重新回到了藏书室。他露出浅浅的满意笑容，视线落到站在书架前的你身上，笑着说：已经没有想看的了？他们当然也接受捐赠，但现在恐怕到了关门的时候。\n\n你和文特斯一起离开房子，等着他锁上门，随后沿着锡尔伯里街分开。",
      onEnterEffects: [
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你多争取来的那点时间也终于用完了，会堂在昏暗中彻底关上。" }
      ],
      actions: [
        {
          id: "after-124",
          label: "回到莱德贝特家，进入傍晚",
          description: "进入条目 180。",
          next: "entry-180"
        }
      ]
    },
    "entry-75": {
      id: "entry-75",
      title: "条目 75 · 夜里出门散步",
      tags: ["夜游", "提灯", "悬崖边"],
      text:
        "当你说打算出门散步时，梅皱起了眉头，提醒你烬头村四面都是悬崖，也没有城里那种亮得过头的路灯。她递给你一盏沉重的提灯。\n\n走出门后你立刻明白了她的意思：天空浓云密布，只有几缕黯淡月光漏下来。右边是写着“锡尔伯里街”的大街，左边则是歪歪扭扭的篱笆桩，以及篱笆之后看不见底的黑暗。冷气从下面吹到你的脸上，本能驱使你向四周张望。",
      onEnterEffects: [
        { type: "gainItem", item: "梅借出的提灯" },
        { type: "setFlag", key: "walkedAtNight", value: true },
        { type: "adjustSan", value: -1 }
      ],
      actions: [
        {
          id: "continue-night-walk",
          label: "提着灯，继续观察四周",
          description: "去看看夜里的烬头村究竟还醒着什么。",
          next: "entry-86"
        },
        {
          id: "back-inside-from-75",
          label: "还是先回屋，结束今晚",
          description: "回到睡前收束。",
          next: "entry-63"
        }
      ]
    },
    "entry-180": {
      id: "entry-180",
      title: "条目 180 · 晚饭后的不安",
      tags: ["傍晚", "露丝", "莱德贝特家"],
      text:
        "天色渐晚，你回到莱德贝特家，简单地吃了一顿晚饭。梅反常地沉默。吃饭时，露丝轻轻瞟了你几眼，似乎有一种你难以理解的急迫感。吃完饭，梅就拉着女儿回了屋。\n\n你在烬头村已经停留将近一整天了，这里从地理到社会无不给你一种闭塞的感觉。这一晚似乎没有什么事可做。",
      onEnterEffects: [
        { type: "setFlag", key: "returnedAtDusk", value: true },
        { type: "logEntry", text: "你带着会堂里得到的信息回到莱德贝特家，晚饭桌上的沉默比白天更让人不舒服。" }
      ],
      actions: [
        {
          id: "go-stargazing",
          label: "到外面眺望星空",
          description: "你想验证文特斯口中的夜空到底特别在哪里。",
          next: "entry-131"
        },
        {
          id: "try-talk-ruth",
          label: "试着和露丝说说话",
          description: "趁梅不注意，看看能不能从露丝口中听见更多。",
          next: "entry-138"
        },
        {
          id: "fold-back-into-night",
          label: "先把这一天收住，回到睡前节点",
          description: "回到已结构化的夜间收束。",
          next: "entry-63"
        },
        {
          id: "stay-awake-for-festival",
          label: "今晚不睡，等节日真正开始",
          description: "你决定把自己藏在黑暗里，看看烬头村到底在等什么。",
          next: "entry-190"
        },
        {
          id: "revisit-black-structure-at-dusk",
          label: "趁天还没全黑，再去黑色建筑附近看一次",
          description: "你想知道节夜开始前，那地方会不会先出现动静。",
          next: "entry-186"
        }
      ]
    },

    "entry-186": {
      id: "entry-186",
      title: "条目 186 · 黄昏里的黑色建筑",
      tags: ["终盘", "傍晚", "黑色建筑"],
      checkHints: [
        {
          label: "聆听 Listen",
          type: "skill",
          skill: "聆听",
          notation: "1d100",
          description: "想判断建筑里是不是已经有人，就先做一次聆听检定。"
        }
      ],
      text:
        "傍晚最后一点灰金色正从山脊上退下去，你独自又走到那座黑色建筑附近。白天看时它像一块不合时宜的金属，现在则像直接从夜里长出来的一部分。村中其他方向已经有零星火光亮起，而这栋建筑仍旧沉默，沉默得近乎用力。\n\n你贴近墙面时，掌心先感到一阵极轻的震意，像深处有什么东西并不靠声音而靠结构本身在共鸣。若里面已经有人，或者今晚会在这里先做些什么，你现在也许能听出一点苗头。",
      onEnterEffects: [
        { type: "setFlag", key: "revisitedStructureAtDusk", value: true },
        { type: "logEntry", text: "节夜正式开始前，你又回到黑色建筑旁，想看看它会不会先动起来。" }
      ],
      actions: [
        {
          id: "entry-186-listen-success",
          label: "按聆听成功处理",
          description: "你听见里面有低低的合声，像有人在先做准备。",
          transitionSummary: "墙里的声响不像谈话，更像一群人把同一个音压得极低地反复含在喉咙里。",
          check: { label: "聆听成功", type: "skill", skill: "聆听", notation: "1d100", outcome: "success" },
          next: "entry-188"
        },
        {
          id: "entry-186-listen-fail",
          label: "按聆听失败处理",
          description: "你没分辨出具体声音，却更清楚地感觉到墙体在轻轻发颤。",
          transitionSummary: "你没听见明确的人声，但那种微弱共振像比声音更早一步醒过来。",
          check: { label: "聆听失败", type: "skill", skill: "聆听", notation: "1d100", outcome: "failure" },
          next: "entry-189"
        }
      ]
    },
    "entry-188": {
      id: "entry-188",
      title: "条目 188 · 墙后先响起来了",
      tags: ["终盘", "黑色建筑", "聆听成功"],
      text:
        "你把耳朵贴近金属表面，终于听清那并不是风。建筑深处有人在低低合声，音节被压得太平，以至于不像唱歌，更像在反复把某个句式磨成一块没有棱角的石头。偶尔还会有一两下像金属扣合的轻响，像有人在里面调整什么位置。\n\n你往后退开时，第一次生出一种明确判断：今晚要发生的事绝不只在灯塔那边。黑色建筑不是旁观者，它也是节夜的一部分。",
      onEnterEffects: [
        { type: "setFlag", key: "heardChantInStructure", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你听见黑色建筑深处已有低合声响起，证明节夜的准备不只在灯塔空地上展开。" }
      ],
      actions: [
        {
          id: "entry-188-go-finale",
          label: "不再耽搁，去看村民最终往哪里汇",
          description: "建筑已经开始响了，整座村子恐怕都在向同一件事收紧。",
          next: "entry-190"
        }
      ]
    },
    "entry-189": {
      id: "entry-189",
      title: "条目 189 · 先醒的是结构",
      tags: ["终盘", "黑色建筑", "聆听失败"],
      text:
        "你没能从那层厚重金属后面听见清晰人声，却更强烈地感到一种不属于普通房屋的反应。那不是木梁在夜里收缩的脆响，也不是风拍窗板，而像整栋建筑正从某个更深的静止里慢慢醒来。\n\n这种感觉没有给你更多事实，却给了你更坏的直觉：村里今晚真正重要的东西，也许并不需要大张旗鼓地说话。",
      onEnterEffects: [
        { type: "setFlag", key: "feltStructureWake", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你没听清黑色建筑里的声响，却感觉整栋结构像在节夜前先一步苏醒。" }
      ],
      actions: [
        {
          id: "entry-189-go-finale",
          label: "离开这里，去看火光最终汇向何处",
          description: "不管建筑里有没有人，节夜都已经开始把全村拉向同一个方向。",
          next: "entry-190"
        }
      ]
    },

    "entry-190": {
      id: "entry-190",
      title: "条目 190 · 节日前夕",
      tags: ["终盘", "节夜", "推进"],
      text:
        "夜彻底压下来之后，整座村子像忽然屏住了呼吸。你先是听见远处有门一扇扇合上的闷响，接着是更远处、分辨不清方向的低声合唱。那不是谁家自娱自乐的歌声，而像一群人正在重复某种他们早已熟得不必思考的东西。\n\n不多时，屋外出现了移动的光。几盏、十几盏、然后更多提灯与火把从各条街上汇出来，向同一个方向缓慢流去。你意识到，白天听来的节日、露丝的警告、黑色建筑的朝向，今晚都要在某处碰头了。",
      onEnterEffects: [
        { type: "setFlag", key: "festivalNightBegun", value: true },
        { type: "logEntry", text: "节夜开始了，村民正举着火光向某个共同地点汇聚。" }
      ],
      actions: [
        {
          id: "entry-190-follow",
          label: "离远一点，跟上队列",
          description: "你要亲眼看见他们去哪儿，以及火光最后围住什么。",
          next: "entry-196"
        },
        {
          id: "entry-190-hide",
          label: "先留在暗处，从高处观察",
          description: "你不想立刻靠近人群，先看看村子的整体动向。",
          next: "entry-214"
        },
        {
          id: "entry-190-confront-may",
          label: "最后再去敲一次梅的门",
          description: "你想看看她今晚究竟站在哪一边。",
          effects: [
            { type: "adjustSan", value: -1 }
          ],
          next: "entry-205"
        }
      ]
    },
    "entry-196": {
      id: "entry-196",
      title: "条目 196 · 跟着火光走",
      tags: ["终盘", "节夜", "Luck"],
      checkHints: [
        {
          label: "运气 Luck",
          key: "luck",
          type: "attribute",
          notation: "1d100",
          description: "想不被队尾的人发现，就先做一次运气检定。"
        }
      ],
      text:
        "你裹紧外衣，隔着两三栋屋子的距离缀在队尾后面。火把把石路照得一截亮一截暗，唱声则像被风捏扁了一样，断断续续钻进你耳朵里。队列正朝村外与悬崖一侧移动，那里大概就是梅提过的灯塔方向。\n\n可人群并不松散。总有人会在转角处停一下，回头看看后面是否跟得整齐。要想继续跟下去，你得靠一点运气。",
      actions: [
        {
          id: "entry-196-luck-success",
          label: "按运气成功处理",
          description: "你踩准了黑暗与火光之间的空当，没有被发现。",
          transitionSummary: "你在最糟糕的几次回头前都恰好缩进了阴影里。",
          check: { label: "运气成功", key: "luck", type: "attribute", notation: "1d100", outcome: "success" },
          next: "entry-203"
        },
        {
          id: "entry-196-luck-fail",
          label: "按运气失败处理",
          description: "你差了一步，被队尾的人注意到了。",
          transitionSummary: "有人在火把光晕之外看见了你，合唱声顿时漏了一拍。",
          check: { label: "运气失败", key: "luck", type: "attribute", notation: "1d100", outcome: "failure" },
          next: "entry-209"
        }
      ]
    },
    "entry-203": {
      id: "entry-203",
      title: "条目 203 · 灯塔下的空地",
      tags: ["终盘", "仪式", "灯塔"],
      text:
        "队列最后停在悬崖边一片被清出来的空地上。更远处立着灯塔，塔身漆黑，像一根被塞进夜里的铁钉。空地中央堆着整齐码放的木料，外围则围了一圈你白天见过的村民。黑色金属建筑上的那些线条、图书室里那句“让村子对准”的话，此刻忽然都有了更坏的解释。\n\n你还看见了露丝。她没有站在最里圈，却离火堆太近了。她抬眼扫过人群外沿，像是在寻找某个还没出现的人。",
      onEnterEffects: [
        { type: "setFlag", key: "reachedLighthouseRitual", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你跟到了灯塔下的空地，节夜的真正仪式终于显形了。" }
      ],
      actions: [
        {
          id: "entry-203-wait-ruth",
          label: "继续藏着，等露丝给你机会",
          description: "你怀疑她知道一条不在火光中央的路。",
          next: "entry-214"
        },
        {
          id: "entry-203-break-cover",
          label: "不等了，趁人群还没收紧先冲过去",
          description: "你想在仪式真正开始前把局面打乱。",
          next: "entry-220"
        }
      ]
    },
    "entry-205": {
      id: "entry-205",
      title: "条目 205 · 梅站在门里",
      tags: ["终盘", "梅", "说服"],
      checkHints: [
        {
          label: "说服 Persuade",
          type: "skill",
          skill: "说服",
          notation: "1d100",
          description: "想让梅在最后关头帮你而不是交出你，就先做一次说服检定。"
        }
      ],
      text:
        "你回到莱德贝特家门前，敲门时几乎能听见自己指节里的迟疑。门只开了一条缝，梅站在门后，脸色比火光更惨白。屋外远处的合唱已经连成一片，她却还没有跟其他人一起离开。\n\n“你不该在外面。”她低声说，声音里既有惊慌也有某种疲惫到头后的麻木。你忽然意识到，她今晚最怕的或许不是你看见什么，而是她自己最终会不会亲手把你送出去。现在你必须让她选边。",
      onEnterEffects: [
        { type: "setFlag", key: "confrontedMayAtFestival", value: true },
        { type: "logEntry", text: "节夜里，你最后一次回到梅的门前，逼她在沉默与帮助之间选边。" }
      ],
      actions: [
        {
          id: "entry-205-persuade-success",
          label: "按说服成功处理",
          description: "梅终于承认露丝是对的，并把你朝后门放走。",
          transitionSummary: "梅没有真的说“快走”，但她让开的那一步比任何词都更清楚。",
          check: { label: "说服成功", type: "skill", skill: "说服", notation: "1d100", outcome: "success" },
          next: "entry-214"
        },
        {
          id: "entry-205-persuade-fail",
          label: "按说服失败处理",
          description: "梅没法违背已经压在她身上的东西。",
          transitionSummary: "你在她脸上看见了歉意，可歉意没能把门继续往外打开。",
          check: { label: "说服失败", type: "skill", skill: "说服", notation: "1d100", outcome: "failure" },
          next: "entry-209"
        }
      ]
    },
    "entry-209": {
      id: "entry-209",
      title: "条目 209 · 被看见了",
      tags: ["终盘", "暴露", "魅惑"],
      checkHints: [
        {
          label: "魅惑 Charm",
          type: "skill",
          skill: "魅惑",
          notation: "1d100",
          description: "若想争取最后一点空隙，就先做一次魅惑检定。"
        }
      ],
      text:
        "一只手突然从你身后抓住了你的手臂。你刚想挣脱，火把的光就已经照到了你脸上。几个村民没有大喊大叫，只是用一种近乎平静的方式把你往前带，仿佛你也是这场节夜里早就被安排好的部分。\n\n梅站在稍远处，脸色白得像生病。她没有朝你走来，也没有移开视线。你还有一次机会，或者说，最后一次把自己从这群人对你的定义里拔出来的机会。",
      onEnterEffects: [
        { type: "setFlag", key: "wasCaughtAtFestival", value: true },
        { type: "adjustSan", value: -2 },
        { type: "logEntry", text: "你在节夜里暴露了，村民开始把你往仪式中心带。" }
      ],
      actions: [
        {
          id: "entry-209-charm-success",
          label: "按魅惑成功处理",
          description: "你逼梅和几名村民出现了一瞬迟疑。",
          transitionSummary: "你不是说服了他们，而是让他们短暂忘了该怎么立刻把你推进火光里。",
          check: { label: "魅惑成功", type: "skill", skill: "魅惑", notation: "1d100", outcome: "success" },
          next: "entry-220"
        },
        {
          id: "entry-209-charm-fail",
          label: "按魅惑失败处理",
          description: "你的话没能穿过合唱与火光。",
          transitionSummary: "你说出的每个词都像掉进了同一口井里，没有激起任何真正的回音。",
          check: { label: "魅惑失败", type: "skill", skill: "魅惑", notation: "1d100", outcome: "failure" },
          next: "entry-226"
        }
      ]
    },
    "entry-214": {
      id: "entry-214",
      title: "条目 214 · 露丝的手势",
      tags: ["终盘", "露丝", "逃路"],
      text:
        "你没有立刻动。人群的注意力慢慢朝火堆中心收紧，而露丝则在一片成年人的下摆与火把阴影之间，极短地朝你比了个手势。那不是招呼，更像孩童用尽全部谨慎后才敢给出的一点方向。\n\n你顺着她示意的位置望去，看见空地边缘有一段被灌木遮住的石阶，沿着悬崖侧面往下蜿蜒。或许那曾是灯塔维护时留下的小路。露丝没有再看你，只在合唱再次抬高时往旁边退了半步，像是在替你挪出最后一条缝。",
      onEnterEffects: [
        { type: "setFlag", key: "ruthShowedEscapePath", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "露丝在节夜里悄悄给你指出了一条沿悬崖下去的旧石阶。" }
      ],
      actions: [
        {
          id: "entry-214-take-path",
          label: "立刻顺着石阶下去",
          description: "这是你今晚见过的第一条真正像出口的路线。",
          next: "entry-220"
        },
        {
          id: "entry-214-stay-too-long",
          label: "再多看一眼仪式中央究竟发生什么",
          description: "好奇心拖住了你的脚，这可能是个糟糕念头。",
          effects: [
            { type: "adjustSan", value: -1 }
          ],
          next: "entry-226"
        }
      ]
    },
    "entry-220": {
      id: "entry-220",
      title: "条目 220 · 悬崖侧面的旧路",
      tags: ["终盘", "逃脱", "Luck"],
      checkHints: [
        {
          label: "运气 Luck",
          key: "luck",
          type: "attribute",
          notation: "1d100",
          description: "旧石阶湿滑又残缺，能否在黑暗里全身下去要靠一点运气。"
        }
      ],
      text:
        "你抓住石壁，一步一步往下挪。脚下的石阶有些断裂，有些则只剩窄窄一条边。上面传来的歌声并没有停止，反而因为你离开火光而显得更像从天上压下来。下方某处隐约传来浪拍岩石的声音，如果这条路能通到底，你也许能绕到山路另一侧，至少先离开那片空地。\n\n可这不是给人在深夜逃命时走的路。你必须赌它还没有完全塌掉。",
      actions: [
        {
          id: "entry-220-luck-success",
          label: "按运气成功处理",
          description: "你踩住了几处最关键的落脚点，终于离开了火光上方。",
          transitionSummary: "石阶在你脚下发出危险的碎响，但终究没有把你一起送下去。",
          check: { label: "运气成功", key: "luck", type: "attribute", notation: "1d100", outcome: "success" },
          next: "entry-240"
        },
        {
          id: "entry-220-luck-fail",
          label: "按运气失败处理",
          description: "你失足的那一下，已经足够让上面的人重新看见你。",
          transitionSummary: "一块碎石带着你的惊呼滚下悬崖，也把火把的光重新引到了你身上。",
          check: { label: "运气失败", key: "luck", type: "attribute", notation: "1d100", outcome: "failure" },
          next: "entry-226"
        }
      ]
    },
    "entry-226": {
      id: "entry-226",
      title: "条目 226 · 火光合拢",
      tags: ["终盘", "坏结局", "火"],
      text:
        "你没能及时脱身。火光、歌声、村民的肩背与手臂慢慢合拢，把你重新围回那片被清出来的空地中央。你最后看见的不是某一张具体的脸，而是一整圈被火映亮、又被仪式掏空的神情。\n\n你终于明白，烬头村真正保住的从来不是平安，而是某种他们宁可献上外来者也要维持的对准。等热浪扑到你脸上时，你已经很难再把自己当作旁观者了。",
      onEnterEffects: [
        { type: "adjustSan", value: -3 },
        { type: "logEntry", text: "你没能从节夜中逃出来，火光在你四周彻底合拢。" }
      ],
      endingId: "emberhead-consumed",
      actions: [
        {
          id: "entry-226-restart-finale",
          label: "回到节日前夕，换一种走法",
          description: "返回条目 190。",
          next: "entry-190"
        },
        {
          id: "entry-226-restart-opening",
          label: "从开场重新来",
          description: "返回条目 1。",
          next: "entry-1"
        }
      ]
    },
    "entry-240": {
      id: "entry-240",
      title: "条目 240 · 山路尽头的冷风",
      tags: ["终盘", "好结局", "逃离"],
      text:
        "你终于踩上了一片不像会立刻塌掉的碎石地。再回头时，灯塔和那片空地已经被山体遮住，只剩夜空里一小团摇晃的橘光证明它们仍在那里继续。你扶着膝盖喘了很久，直到自己重新能分辨风声和心跳。\n\n天亮前，你沿着崖下荒废的小路摸到了更低处的土道。烬头村还在山上，像一块不愿解释自己的黑影；而你带着露丝的警告、图书室的纸条，以及再也无法被当成民俗趣闻的记忆，终于离它远了一点。",
      onEnterEffects: [
        { type: "setFlag", key: "escapedFestivalNight", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你从节夜与灯塔一侧的旧路逃了出去，暂时离开了烬头村。" }
      ],
      endingId: "emberhead-escape",
      actions: [
        {
          id: "entry-240-restart-finale",
          label: "回到节日前夕，试试别的路线",
          description: "返回条目 190。",
          next: "entry-190"
        },
        {
          id: "entry-240-restart-opening",
          label: "从开场重新体验整段原型",
          description: "返回条目 1。",
          next: "entry-1"
        }
      ]
    },

    "entry-34": {
      id: "entry-34",
      title: "条目 34 · 坍圮教堂",
      tags: ["白天探索", "教堂", "衰败"],
      text:
        "教堂位于村子西南角，比你从远处看时还要破败。钟楼早就塌了，只剩一截歪木梁顶着灰白天空。你踏过荒草和碎石走进去，里面没有真正的长椅，只有几排被拆散的木板和一只倒在角落里的讲道台。\n\n最奇怪的是，它不像一座被时间慢慢放弃的教堂，反而像被人有意掏空了内容。墙上还留着十字架曾经挂过的浅色印子，但真正能表明信仰归属的东西几乎都没了。祭坛后方的石壁则被烟熏得发黑，像是有人长期在这里烧过什么。",
      onEnterEffects: [
        { type: "setFlag", key: "visitedRuinedChurch", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你发现坍圮教堂不是单纯年久失修，而像是被人刻意清空过。" }
      ],
      actions: [
        {
          id: "entry-34-search-altar",
          label: "再看看祭坛后方与黑色烟痕",
          description: "你想确认这里被烧掉的究竟只是木头，还是别的什么。",
          next: "entry-36"
        },
        {
          id: "entry-34-leave-church",
          label: "记下这份异样，离开教堂",
          description: "这里的空洞感已经足够让你不舒服。",
          next: "entry-25"
        }
      ]
    },
    "entry-36": {
      id: "entry-36",
      title: "条目 36 · 祭坛后的灰痕",
      tags: ["白天探索", "教堂", "历史"],
      checkHints: [
        {
          label: "历史 History",
          type: "skill",
          skill: "历史",
          notation: "1d100",
          description: "想从残留结构与痕迹里读出这座教堂经历过什么，就先做一次历史检定。"
        }
      ],
      text:
        "你绕到祭坛后方，更近地看那片被熏黑的石壁。黑痕并不是一次大火留下的喷溅，而是许多次较小、较受控制的燃烧慢慢舔上去的层次。地上还有些碎裂的金属件，像曾固定过烛台、牌匾，或者别的仪式用品。\n\n最让你不舒服的是空出来的位置太多了。有人不是匆忙逃离这里，而是花时间把能说明“这原本是一座什么教堂”的东西一点点摘走了。",
      actions: [
        {
          id: "entry-36-history-success",
          label: "按历史成功处理",
          description: "你看出这更像是一次有计划的清空与改造，而不是单纯的废弃。",
          transitionSummary: "你辨认出几处固定件的位置，它们曾支撑的是完整教会陈设，不是临时摆设。",
          check: { label: "历史成功", type: "skill", skill: "历史", notation: "1d100", outcome: "success" },
          next: "entry-42"
        },
        {
          id: "entry-36-history-fail",
          label: "按历史失败处理",
          description: "你说不准原本是什么，只知道现在这里不该这么空。",
          transitionSummary: "你没法替那些缺失的物件安上名字，只知道这里被人精心地掏空过。",
          check: { label: "历史失败", type: "skill", skill: "历史", notation: "1d100", outcome: "failure" },
          next: "entry-44"
        }
      ]
    },
    "entry-42": {
      id: "entry-42",
      title: "条目 42 · 这不是自然荒废",
      tags: ["白天探索", "教堂", "历史成功"],
      text:
        "你认出了几处很具体的痕迹：讲道台原本的位置被挪动过，祭坛侧边则曾固定过比烛台更大的金属架。换句话说，这里不是穷乡僻壤里一座慢慢坏掉的小教堂，而是有人在某个时期之后，系统地把它改成了另一种不想留名的场所。\n\n想到这里，你几乎能理解为什么真正表明宗派和信条的东西会全部消失。保留下来的只有石壁、火痕，以及足够让人继续使用的空间。",
      onEnterEffects: [
        { type: "setFlag", key: "recognizedChurchStripping", value: true },
        { type: "setFlag", key: "noticedScorchedAltar", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你看出教堂经历的不是自然荒废，而是一次有计划的清空与改造。" }
      ],
      actions: [
        {
          id: "entry-42-back-menu",
          label: "带着这个判断离开教堂",
          description: "现在这地方和黑色建筑已经开始像同一张图上的两处标记。",
          next: "entry-25"
        }
      ]
    },
    "entry-44": {
      id: "entry-44",
      title: "条目 44 · 烟灰与你的想象",
      tags: ["白天探索", "教堂", "历史失败"],
      text:
        "你没法替那些空位和碎金属件安上准确名字，但你也说不服自己这只是普通废墟。这里太整洁了，整洁得像有人在撤走大部分东西之后，还留出了一处依然能被重新使用的空心。\n\n风从破窗灌进来时，地上的灰轻轻起了一层。你几乎有种错觉：这里曾经有人整齐地站着，面朝同一个方向，看着某种并不属于教堂的火。",
      onEnterEffects: [
        { type: "setFlag", key: "noticedScorchedAltar", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你没能准确认出教堂旧痕，却更确定它现在保留的是一处被重新定义过的空壳。" }
      ],
      actions: [
        {
          id: "entry-44-back-menu",
          label: "压下想象，离开教堂",
          description: "这地方继续待下去只会让脑子往更坏的方向跑。",
          next: "entry-25"
        }
      ]
    },
    "entry-35": {
      id: "entry-35",
      title: "条目 35 · 树林里的不自然节奏",
      tags: ["白天离村", "博物学成功", "警觉"],
      text:
        "你站住脚，仔细去听那阵呼啸。那不是鸟鸣，也不像穿林风声。声音有一种太规整的起伏，像是谁在远处用嘴吹出模仿鸟类的信号，却故意吹得过分轻快。更怪的是，四周真正的林鸟反而安静得过头。\n\n你没有继续朝北探去，只沿着山路边缘快步向前。途中你注意到几棵树干上有旧刀刻出来的记号，像是有人长期把这片林地当作固定路线。再往前一些，路势变开，你终于看见村外的去路。",
      onEnterEffects: [
        { type: "setFlag", key: "identifiedFalseBirdcall", value: true },
        { type: "setFlag", key: "noticedForestTrailMarks", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你听出树林中的呼啸更像人为信号，而不是自然声响。" }
      ],
      actions: [
        {
          id: "entry-35-push-exit",
          label: "趁自己还冷静，继续往村外去",
          description: "去确认这条山路是否真能带你离开烬头村。",
          next: "entry-7"
        },
        {
          id: "entry-35-retreat",
          label: "记下这些异常，先折返村里",
          description: "你不想单独钻进陌生树林里追查信号来源。",
          next: "entry-22"
        }
      ]
    },
    "entry-41": {
      id: "entry-41",
      title: "条目 41 · 没听懂，于是更糟",
      tags: ["白天离村", "博物学失败", "不安"],
      text:
        "你停下来听了听，却完全分不清那声音到底是什么。它时远时近，像从林间几处地方轮流冒出来。你告诉自己也许只是陌生山林里的某种鸟，可这解释连你自己都没说服。\n\n你加快脚步时，靴底在湿土和树根间一滑，差点摔倒。你抓住旁边一棵细树稳住身子，掌心却被粗糙树皮刮得生疼。那阵呼啸恰好又响了一次，这回你只觉得它像在催促什么。",
      onEnterEffects: [
        { type: "setFlag", key: "spookedByForestCall", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你没能判断树林异响的来源，反而让这段出村尝试更像一场受监视的逃跑。" }
      ],
      actions: [
        {
          id: "entry-41-force-exit",
          label: "硬着头皮继续朝村外走",
          description: "不管那声音是什么，先把离村这件事做完。",
          next: "entry-7"
        },
        {
          id: "entry-41-back-village",
          label: "放弃这次尝试，掉头回村",
          description: "你宁愿在人多处重新整理思路。",
          next: "entry-22"
        }
      ]
    },
    "entry-57": {
      id: "entry-57",
      title: "条目 57 · 黑色金属建筑物",
      tags: ["白天探索", "金属建筑", "浮雕"],
      text:
        "走近之后，这座建筑比你想象得更不协调。它通体黑沉，表面不像刷漆，更像整块金属本身就呈现出某种吸光的暗色。墙面上有一圈低浅浮雕，乍看像藤蔓与火焰，停久一点又会觉得那些线条更接近蜿蜒的人形和星芒。\n\n门是关着的，没有把手，只有一块嵌进墙里的金属板。你绕着建筑慢慢走了一圈，发现它的边角和村中别的房屋并不平行，反倒像按照山脊或天空中的某个固定方向摆放。白天站在它旁边都让你生出一种不合时宜的肃静感。",
      onEnterEffects: [
        { type: "setFlag", key: "visitedBlackStructure", value: true },
        { type: "setFlag", key: "noticedStrangeOrientation", value: true },
        { type: "logEntry", text: "你近距离看清了黑色金属建筑：它的朝向和浮雕都透着一种过分刻意的意味。" }
      ],
      actions: [
        {
          id: "entry-57-study-reliefs",
          label: "多看一会儿那些浮雕",
          description: "你想把那些近似火焰与星芒的图样记下来。",
          next: "entry-58"
        },
        {
          id: "entry-57-go-townhall",
          label: "带着这个印象，去村会堂问人",
          description: "这地方越不像民宅，你越想知道是谁在维护它。",
          next: "entry-11"
        },
        {
          id: "entry-57-step-away",
          label: "先离开这里，回到村中继续调查",
          description: "光站在门外就已经够让人心烦。",
          next: "entry-25"
        }
      ]
    },
    "entry-58": {
      id: "entry-58",
      title: "条目 58 · 浮雕与金属板",
      tags: ["白天探索", "金属建筑", "神秘学"],
      checkHints: [
        {
          label: "神秘学 Occult",
          type: "skill",
          skill: "神秘学",
          notation: "1d100",
          description: "想判断这些图样究竟只是装饰还是带着某种象征意义，就先做一次神秘学检定。"
        }
      ],
      text:
        "你伸手碰了碰墙面。那金属凉得反常，不像被日头晒了一整天的东西。嵌在墙里的板子也没有锁孔与门缝，更像一块等待某种触发方式的部件。\n\n靠近细看之后，浮雕里的图样更难装作纯装饰：有些线条显然在模仿火焰的向上卷动，有些则像被拉长的人形围成圆弧，而最上方一圈细小刻痕甚至让你联想到天体运行图里常见的标记方式。",
      actions: [
        {
          id: "entry-58-occult-success",
          label: "按神秘学成功处理",
          description: "你看出这些符号在表达的不是美感，而是方位、火与群体的关系。",
          transitionSummary: "你认出这不是随便拼出来的花纹，而像某套仪式符号系统被压扁后嵌进了墙里。",
          check: { label: "神秘学成功", type: "skill", skill: "神秘学", notation: "1d100", outcome: "success" },
          next: "entry-59"
        },
        {
          id: "entry-58-occult-fail",
          label: "按神秘学失败处理",
          description: "你无法给这些线条命名，却更难把它们当普通雕饰。",
          transitionSummary: "你叫不出这些符号属于哪一类知识，但它们显然不是为了给村子添体面。",
          check: { label: "神秘学失败", type: "skill", skill: "神秘学", notation: "1d100", outcome: "failure" },
          next: "entry-60"
        }
      ]
    },
    "entry-59": {
      id: "entry-59",
      title: "条目 59 · 被压扁的仪式语言",
      tags: ["白天探索", "金属建筑", "神秘学成功"],
      text:
        "你没法给这些图样找到一本现成书里的名字，但你能看出它们在表达一套相当具体的关系：火焰向上、众人围拢、上方某个被标记过的点，以及朝向它的固定结构。换句话说，这座建筑不是简单的仓库、纪念碑或私人礼拜堂，它更像一个被摆在村中用来配合别处仪式的节点。\n\n如果图书室里的“校准”纸条是真的，那么它提到的对象恐怕就是这里，以及这里所对准的东西。",
      onEnterEffects: [
        { type: "setFlag", key: "decodedMetalSymbols", value: true },
        { type: "setFlag", key: "studiedMetalReliefs", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你从黑色建筑浮雕里看出了一套与火、群体和朝向有关的仪式语言。" }
      ],
      actions: [
        {
          id: "entry-59-townhall",
          label: "带着这些判断去找文特斯",
          description: "如果村里有人会替这地方编个体面说法，那个人多半就是他。",
          next: "entry-11"
        },
        {
          id: "entry-59-back-menu",
          label: "先把这层意思记住，回到调查菜单",
          description: "你已经不觉得自己是在看一栋普通建筑了。",
          next: "entry-25"
        }
      ]
    },
    "entry-60": {
      id: "entry-60",
      title: "条目 60 · 它就是不该在这里",
      tags: ["白天探索", "金属建筑", "神秘学失败"],
      text:
        "你无法真正解读这些图样，却越来越清楚地知道自己面对的不是一栋普通用途的建筑。它的材质、温度、浮雕的克制密度，以及那块像等待触发的金属板，全都让人联想到某种比“村中公用建筑”更专门、更封闭的用途。\n\n你最终把手收回来，像是担心自己若再多碰一下，就会被这座建筑默默记住。",
      onEnterEffects: [
        { type: "setFlag", key: "studiedMetalReliefs", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你没法解读黑色建筑的图样，却更确定它根本不该被当成普通村舍看待。" }
      ],
      actions: [
        {
          id: "entry-60-townhall",
          label: "去村会堂打听这地方的来历",
          description: "既然自己读不懂，就去看谁最急着替它解释。",
          next: "entry-11"
        },
        {
          id: "entry-60-back-menu",
          label: "先离开这里，回到白天调查",
          description: "你不想继续贴着这面墙站太久。",
          next: "entry-25"
        }
      ]
    },
    "entry-86": {
      id: "entry-86",
      title: "条目 86 · 提灯下的边缘",
      tags: ["夜游", "提灯", "悬崖边"],
      text:
        "你把提灯举高了一点，往篱笆外的黑暗望去。下面并不是平地，而是一整片突兀塌开的深谷。风从底下往上卷，带着潮湿和一种仿佛烧过东西的苦味。\n\n你把灯转向村子另一侧时，远处又有几点橘光亮了起来，像有人在屋与屋之间小心地遮着火走路。它们没有形成真正的队列，却有一种朝同一个方向慢慢汇聚的意味。你忽然很确定，今夜村里并不是所有人都在睡觉。",
      onEnterEffects: [
        { type: "setFlag", key: "sawNightLanterns", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "你在夜里看见村中有几处提灯火光正缓慢汇向同一个方向。" }
      ],
      actions: [
        {
          id: "entry-86-follow-lights",
          label: "沿着街道远远跟上那些火光",
          description: "再往前就太显眼了，你只打算多看一眼再回去。",
          effects: [
            { type: "setFlag", key: "shadowedNightProcession", value: true }
          ],
          next: "entry-63"
        },
        {
          id: "entry-86-retreat",
          label: "把这幕记下来，先回屋",
          description: "你不想一个人提着灯去撞上整村人的夜间活动。",
          next: "entry-63"
        }
      ]
    },
    "entry-118": {
      id: "entry-118",
      title: "条目 118 · 额外半小时里的脚注",
      tags: ["图书室", "额外线索", "侦查成功"],
      text:
        "你起身活动发酸的肩膀时，发现最下层书架和墙之间塞着一张折起来的薄纸。那不是正式书签，更像谁匆忙留下的工作纸。展开之后，你认出其中几个词，和阿尼奥洛夫斯基手稿里提到的“校准”有关。\n\n纸上用铅笔列了几个日期、一个简陋的山脊线草图，以及一句被狠狠划了两遍的话：'不是为了庆典，是为了在群星经过时让村子对准。' 最底下还有一行缩写，像是谁提醒自己去看那座黑色金属建筑物的朝向。",
      onEnterEffects: [
        { type: "setFlag", key: "foundAlignmentNote", value: true },
        { type: "gainItem", item: "图书室里的校准备忘" },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你在图书室暗处找到一张涉及“校准”和黑色建筑朝向的备忘纸。" }
      ],
      actions: [
        {
          id: "entry-118-pocket-note",
          label: "把纸记牢，若无其事地等文特斯回来",
          description: "先别声张，把这条线索带出图书室。",
          next: "entry-124"
        },
        {
          id: "entry-118-leave-thinking",
          label: "带着这份新疑点离开会堂",
          description: "你现在看村里的每一座建筑都像被某种图形摆过位。",
          next: "entry-180"
        }
      ]
    },
    "entry-131": {
      id: "entry-131",
      title: "条目 131 · 星空与屋脊",
      tags: ["夜里", "星空", "压迫感"],
      text:
        "你站到屋外，抬头看天。云层比傍晚散去了一些，露出深得近乎发硬的夜空。文特斯下午那句“群星之路的中途”忽然又回到你脑子里。\n\n你本来只是想散散心，可站得稍久一点，就觉得这片天空并不只是高。它像是在往村庄压下来，而村中几处屋脊和那座黑色金属建筑的棱线，竟让你生出一种它们彼此对应、互相等待的错觉。你说不上来自己究竟看见了什么，只觉得再盯下去会把自己也牵进去。",
      onEnterEffects: [
        { type: "setFlag", key: "feltStarPressure", value: true },
        { type: "adjustSan", value: -1 },
        { type: "logEntry", text: "夜空与村中建筑的排列让你生出一种难以解释的“对准感”。" }
      ],
      actions: [
        {
          id: "entry-131-keep-walking",
          label: "去找梅借盏灯，再到外面走一圈",
          description: "单纯仰望夜空已经不够，你想看看地面上的动静。",
          next: "entry-75"
        },
        {
          id: "entry-131-go-inside",
          label: "压住那股不适，回屋休息",
          description: "今夜的天空已经给了你足够多的暗示。",
          next: "entry-63"
        }
      ]
    },
    "entry-138": {
      id: "entry-138",
      title: "条目 138 · 露丝挑最小声的时候说话",
      tags: ["夜里", "露丝", "私下警告"],
      text:
        "你趁梅收拾桌子的空当，在门边把露丝叫住。小女孩起初只是看着你，像在衡量你值不值得多说一句。等确定母亲暂时没注意这边，她才把声音压得极低。\n\n“他们唱歌的时候，不要看上面。”她说。“也别站在火中间。”你追问她“他们”是谁，露丝却只是很认真地摇头，好像多解释一个词都会给她惹麻烦。她最后补了一句：“你要是今晚听见脚步，就假装睡着。”",
      onEnterEffects: [
        { type: "setFlag", key: "heardRuthNightWarning", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "露丝在夜里给了你更具体的警告：别看上面，别站在火中间。" }
      ],
      actions: [
        {
          id: "entry-138-pretend-sleep",
          label: "把这几句记住，今晚先装作无事",
          description: "你决定按露丝的话做，至少先把自己藏起来。",
          next: "entry-63"
        },
        {
          id: "entry-138-sneak-later",
          label: "记下警告后，还是想晚些出去看看",
          description: "她越是认真，你越难彻底按捺住好奇心。",
          next: "entry-75"
        }
      ]
    },
    "entry-154": {
      id: "entry-154",
      title: "条目 154 · 次日清晨",
      tags: ["次日", "清晨", "过桥段"],
      text:
        "你睡得并不踏实。夜里仿佛有过风声、脚步声，或者只是木屋在寒气里收缩时发出的脆响。等你真正睁开眼时，窗缝里已经透进来一线苍白晨光。\n\n屋里很安静，安静得像昨晚那些不安都被人整整齐齐地收了起来。可你一想起露丝的话、夜里的火光，或是那片压下来的星空，就很难把今天当成一场普通旅途中的早晨。无论如何，烬头村的新一天已经开始了。",
      onEnterEffects: [
        { type: "setFlag", key: "reachedMorning", value: true },
        { type: "logEntry", text: "你熬过了在烬头村的第一夜，次日终于开始了。" }
      ],
      actions: [
        {
          id: "entry-154-breakfast-first",
          label: "先装作一切正常，下楼面对这家人",
          description: "以借宿客人的身份继续这天，看看梅和露丝会如何表现。",
          next: "entry-160"
        },
        {
          id: "entry-154-pack-and-move",
          label: "尽快收拾好东西，白天主动调查",
          description: "你决定少说废话，直接把今天押在出村或找线索上。",
          effects: [
            { type: "adjustLuck", value: 1 }
          ],
          next: "entry-22"
        },
        {
          id: "entry-154-restart",
          label: "从开场重新体验整条链路",
          description: "回到汽车站，把前面的选择重新走一遍。",
          next: "entry-1"
        }
      ]
    },
    "entry-160": {
      id: "entry-160",
      title: "条目 160 · 清晨的早餐桌",
      tags: ["次日", "早餐", "心理学"],
      checkHints: [
        {
          label: "心理学 Psychology",
          type: "skill",
          skill: "心理学",
          notation: "1d100",
          description: "想从梅与露丝的神情里读出更多东西，就先做一次心理学检定。"
        }
      ],
      text:
        "你下楼时，厨房里已经有了热气。梅正在往粗陶杯里倒茶，露丝则坐在桌边，双手捧着一片面包，却几乎没吃。两人都朝你看了一眼，随即又像什么都没发生一样继续各做各的事。\n\n这顿早餐比昨晚的晚饭更安静。梅问你睡得好不好，语气客气得近乎用力；露丝则一直避免和你对视，仿佛她要么说了不该说的话，要么正在等你记起该记起的事。你隐约觉得，今天会不会留在烬头村，已经不只是你一个人的问题。",
      onEnterEffects: [
        { type: "setFlag", key: "sharedMorningBreakfast", value: true },
        { type: "logEntry", text: "你在第二天清晨和梅、露丝坐上了同一张早餐桌。" }
      ],
      actions: [
        {
          id: "entry-160-psychology-success",
          label: "按心理学成功处理",
          description: "你从梅和露丝极力压住的表情里看出，她们知道今晚会发生什么。",
          transitionSummary: "你看懂了那份安静并不是平静，而是两种不同的恐惧在同一张桌上勉强并排坐着。",
          check: { label: "心理学成功", type: "skill", skill: "心理学", notation: "1d100", outcome: "success" },
          next: "entry-168"
        },
        {
          id: "entry-160-psychology-fail",
          label: "按心理学失败处理",
          description: "你只觉得这顿早餐别扭，却抓不住更具体的东西。",
          transitionSummary: "你看不穿她们真正隐瞒的是什么，只知道这间屋子里每个人都在节省词语。",
          check: { label: "心理学失败", type: "skill", skill: "心理学", notation: "1d100", outcome: "failure" },
          next: "entry-172"
        }
      ]
    },
    "entry-168": {
      id: "entry-168",
      title: "条目 168 · 你看懂了那份安静",
      tags: ["次日", "早餐后", "心理学成功"],
      text:
        "当梅转身去拿锅时，露丝飞快地朝你抬了下眼。那一瞬里没有孩童式的任性，只有一种急切确认：你到底有没有把她昨夜的话当真。与此同时，梅虽然一句都没提节日，手却在把杯子放到桌面时微微发抖。\n\n你突然明白了，这对母女并不站在同一个位置上。露丝想让你离开，而梅更像被什么沉重的东西压着，连“帮你离开”这个念头都不敢完整地想出来。你今天在村里做的每一步，也许都在逼近她们最怕你看见的东西。",
      onEnterEffects: [
        { type: "setFlag", key: "readMorningTension", value: true },
        { type: "adjustLuck", value: 1 },
        { type: "logEntry", text: "你读懂了早餐桌上的紧绷：露丝在催你离开，梅则像被某种更大的压力钉住了。" }
      ],
      actions: [
        {
          id: "entry-168-press-day",
          label: "不再浪费白天，立刻出去调查",
          description: "你决定把今天押在找线索和找出口上。",
          next: "entry-22"
        },
        {
          id: "entry-168-ask-ruth-later",
          label: "记住露丝的眼神，打算晚些再找她单独说话",
          description: "你准备先撑过白天，等今晚再把那条线撬开。",
          next: "entry-3"
        }
      ]
    },
    "entry-172": {
      id: "entry-172",
      title: "条目 172 · 这顿饭什么都没说",
      tags: ["次日", "早餐后", "心理学失败"],
      text:
        "你没能从梅和露丝的沉默里读出更多明确的东西。也许只是借宿的尴尬，也许只是你昨夜睡得太差，把一切都听成了预兆。可哪怕这样想，你仍旧没法真正放松下来。\n\n梅替你续了一次茶，客气地提起今天天气不错，适合在村里到处走走。露丝则始终低着头，直到你离桌时才极轻地咬住下唇。你不知道她是想说什么，还是在后悔自己昨晚说得太多。",
      onEnterEffects: [
        { type: "setFlag", key: "missedMorningRead", value: true },
        { type: "logEntry", text: "你没能从第二天早餐桌上读出更多准确信号，只带着更模糊的不安离开了。" }
      ],
      actions: [
        {
          id: "entry-172-go-day",
          label: "离开屋子，把注意力转回村里",
          description: "既然屋里的人都不愿直说，那就去村里找答案。",
          next: "entry-22"
        }
      ]
    },
    "entry-134": {
      id: "entry-134",
      title: "条目 134 · 抵达烬头村",
      tags: ["抵达", "过桥段", "开场后"],
      text:
        "长途车在山路上颠得你骨头发麻。等西拉斯终于把车停下时，天色已经不早了。烬头村比你一路上想象的还小，屋舍低矮，山风里带着木柴和潮土的味道。站在路边的那一刻，你很难说这里到底像避世之地，还是像一只把自己蜷起来不愿被外人看清的拳头。\n\n你还带着旅途末尾的疲惫，也还没意识到自己会在这里停留多久。眼下最现实的问题只有两个：先找地方落脚，还是趁天还没彻底黑下去，先把这地方的大致模样记住。",
      onEnterEffects: [
        { type: "setFlag", key: "arrivedAtEmberhead", value: true },
        { type: "logEntry", text: "你正式抵达烬头村，真正的村庄段落从这里接上了。" }
      ],
      actions: [
        {
          id: "entry-134-find-lodging",
          label: "先找借宿处，别让自己今晚露宿在外",
          description: "顺着人们的指点，去敲梅·莱德贝特家的门。",
          next: "entry-4"
        },
        {
          id: "entry-134-look-around",
          label: "趁还看得见，先把村子的布局看一眼",
          description: "你想先记住地形和几个关键地点，再考虑接下来。",
          next: "entry-6"
        },
        {
          id: "entry-134-jump-day",
          label: "直接跳进次日白天调查",
          description: "如果只是想快速试玩系统与分支，可以直接去午饭后枢纽。",
          next: "entry-22"
        }
      ]
    }
  }
};
