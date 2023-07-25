// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "算了，没啥说的",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "李栋小朋友",  // 同上...
        "今天又是你的生日",
        "这个生日我们都还在",
        "以后还会有",
        "下一个",
        "下下一个。。。",
        "给你的祝福呢",
        "就是愿一切",
        "都为你变得简单",
        "比如：幸福~",
        "差不多了，就这样吧",
        "生日快乐吖，小宝贝儿~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "一直一直很爱你~": "./imgs/9e064fa5c7b173327e2ea3f54cc6e170.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "不要点我",
        play: "真的别点",
        bannar_coming: "你再点我试试",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
