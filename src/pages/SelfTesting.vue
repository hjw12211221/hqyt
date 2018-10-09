<template lang='jade'>
#selfTesting.pt4.px3
  .title.wordColor.f16 中医有九种体质，你知道你属于哪一种吗？
  .c9.f14.line24.mt2 我们每个人的体质都是不一样的，不同的体质有不同的养生方法，那你知道你是属于什么体质吗？
  .my3
    img.w10(src="../assets/images/tz1.png")
  .f14.line24.wordColor 平和型：“身体倍儿棒，吃嘛嘛香”，睡眠好、性格
      | 开朗，社会适应能力强。体型均匀健壮，面色、肤色
      | 润泽，头发稠密有光泽，目光有神，唇色红润，不易
      | 疲劳，精力充沛，胃口好，大小便正常。平和体质日
      | 常养生应采取中庸之道，吃不要过饱，也不能过饥，
      | 不吃冷，也不吃得过热。多吃五谷杂粮、蔬菜瓜果，
      | 少食过于油腻及辛辣之物。运动上，一般选择温和的
      | 锻炼方式，运动强度不要太大就可以。老年人适当散
      | 步、打太极拳。
  .py2.bg-white.text-center(@click="jump(0)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz2.png")
  .f14.line24.wordColor 气虚型：说话没劲，经常疲乏无力，喜欢安静，吃喝
                       | 凉的食物就不舒服，容易大便稀溏，小便颜色清而量
                       | 多。性格多沉闷、内向。容易感冒，生病后抗病能力
                       | 弱且难以痊愈，易患内脏下垂比如胃下垂等。多吃具
                       | 有益气健脾作用的药物，实际上我们中医有一个概念
                       | 就是药食同源，在中医看来有很多食物是有一定的药
                       | 用功能的，所以我们下边病理性体质的时候，所用的
                       | 饮食内容，往往有一些是属于药，同时也属于食物。
                       | 针对气虚型的人可以吃一些如黄豆、白扁豆、鸡肉、
                       | 泥鳅、香菇、大枣、桂圆、蜂蜜等。吃了这些食物有
                       | 补气健脾的作用，平时吃东西的时候也一些耗气作用
                       | 的食物尽量避免，如槟榔、空心菜、生萝卜等。以柔
                       | 缓运动，散步、打太极拳等为主，不宜做大负荷消耗 
                       | 体力的运动和出大汗的运动。
  .py2.bg-white.text-center(@click="jump(1)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz3.png")
  .f14.line24.wordColor 阳虚型：总是手脚发冷，不敢吃凉的东西。易得风湿
                        | 性关节炎、老寒腿、性功能低下、水肿等疾病。可多
                        | 吃容易甘温益气的食物，如牛羊狗肉、葱、姜、蒜、
                        | 花椒、鳝鱼、韭菜、辣椒、胡椒等。少食生冷寒凉食
                        | 物，比如黄瓜、藕、梨、西瓜等。秋冬注意保暖，尤
                        | 其是足下、背部及下腹部丹田部位的防寒保暖。夏季
                        | 避免吹空调电扇。可做一些舒缓柔和的运动，如慢跑
                        | 、散步、打太极拳、做广播操。自行按摩气海、足三
                        | 里、涌泉等穴位，或经常灸足三里、关元，可适当洗
                        | 桑拿、温泉浴。多与别人交谈，平时多听一些激扬、
                        | 高亢、豪迈的音乐，调节一下情绪。
  .py2.bg-white.text-center(@click="jump(2)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz4.png")
  .f14.line24.wordColor 阴虚型：怕热，经常感到手脚心发热，皮肤干燥，口
                      | 干舌燥，容易失眠，经常大便干结。易患口腔溃疡、
                      | 便秘、甲亢、更年期综合征。多吃甘凉滋润的食物，
                      | 比如瘦猪肉、鸭肉、龟、鳖、绿豆、冬瓜、芝麻、百
                      | 合等。少食羊肉、狗肉、韭菜、辣椒、葱、蒜、葵花
                      | 子等性温燥烈食物。中午保持一定的午休时间。避免
                      | 熬夜、剧烈运动和在高温酷暑下工作。宜节制房事，
                      | 因为我们有些房事活动伤精耗液，对男女都一样。只
                      | 适合做中小强度、间断性的身体锻炼，可选择太极拳
                      | 、太极剑等。锻炼时要控制出汗量，及时补充水分。
                      | 不适合洗桑拿。平时宜克制情绪，遇事要冷静，正确
                      | 对待顺境和逆境。可以用练书法、下棋来怡情悦性，
                      | 用旅游来寄情山水、陶冶情操。平时多听一些曲调舒
                      | 缓、轻柔、抒情的音乐，防止恼怒。
  .py2.bg-white.text-center(@click="jump(3)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz5.png")
  .f14.line24.wordColor 痰湿质：心宽体胖、腹部松软、皮肤出油、汗多、眼
                      | 睛浮肿、容易困倦。易患高血压、高血脂、心脑血管
                      | 疾病、中风。心宽体胖、腹部松软、皮肤出油、汗多
                      | 、眼睛浮肿、容易困倦。易患高血压、高血脂、心脑
                      | 血管疾病、中风。饮食清淡为原则，少食肥肉及甜、
                      | 黏、油腻的食物。可多食葱、蒜、海藻、海带、冬瓜
                      | 、萝卜、金橘、芥末等食物。平时多进行户外活动。
                      | 衣着应透气散湿，容易把一些湿气能够散掉，经常晒
                      | 太阳或进行日光浴。中医对痰湿型的人有一些常用的
                      | 方药，可以给大家简单的说一下。比如用白术、苍术
                      | 、黄芪、防己、泽泻、荷叶、橘红、生蒲黄、生大黄
                      | 、鸡内金。用这些药物，有助于化痰去湿。
  .py2.bg-white.text-center(@click="jump(4)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz6.png")
  .f14.line24.wordColor 湿热型：脸部和鼻尖总是油光发亮，还容易生粉刺，
                      | 一开口就有异味。常感到口苦、口臭，大便粘稠，小
                      | 便有发热感，尿色发黄。易患泌尿系统感染、痛风、
                      | 前列腺炎。饮食清淡，多吃甘寒、甘平的食物，如绿
                      | 豆、空心菜、苋菜、芹菜、黄瓜、冬瓜、藕、西瓜等
                      | 。少食辛温助热的食物。应戒除烟酒，因为烟酒在中
                      | 医看来属于具有温热作用的。不要熬夜、过于劳累。
                      | 盛夏暑湿较重的季节，减少户外活动。适合做大强度
                      | 、大运动量的锻炼，如中长跑、游泳、爬山、各种球
                      | 类、武术等。
  .py2.bg-white.text-center(@click="jump(5)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz7.png")
  .f14.line24.wordColor 气郁型：多愁善感、体形偏瘦、常叹气，容易心慌失
                      | 眠，感情脆弱、胆小，常感觉咽喉部经常有堵塞感或
                      | 有异物感。易患忧郁症、肺结核、乳腺增生。多吃小
                      | 麦、蒿子杆、葱、蒜、海带、海藻、萝卜、金橘、山
                      | 楂等，因为这些食物具有行气、解郁、消食、醒神的
                      | 作用。睡前避免饮茶、咖啡等提神醒脑的饮料。尽量
                      | 增加户外活动，可坚持较大量的运动锻炼，如跑步、
                      | 登山、游泳、武术等。另外，这类人因为性格上有一
                      | 些自我封闭的表现，要经常有意识的参加集体性的运
                      | 动，多跟其他人交往，多交交朋友，有了这些朋友才
                      | 能够有一个比较好的对不良情绪的倾诉对象。
  
  .py2.bg-white.text-center(@click="jump(6)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz8.png")
  .f14.line24.wordColor 血瘀质：刷牙时牙龈易出血，眼睛常有红丝，皮肤干
                      | 燥、粗糙，容易烦躁、健忘。易患前列腺炎、心脑血
                      | 管疾病、静脉曲张、乳腺癌。血瘀型：可多食黑豆、
                      | 海藻、海带、紫菜、萝卜、胡萝卜、金橘、橙、柚、
                      | 桃、李子、山楂、醋、玫瑰花、绿茶，因此这些物质
                      | 有活血、散结、行气、疏肝解郁的作用，少食肥猪肉
                      | 等。保持足够的睡眠，但不可过于安逸。可进行一些
                      | 有助于促进气血运行的运动项目，如太极拳、太极剑
                      | 、舞蹈、步行等。保健按摩可使经络畅通，达到缓解
                      | 疼痛、稳定情绪、增强人体功能的作用。血瘀体质的
                      | 人在运动时如出现胸闷、呼吸困难、脉搏显著加快等
                      | 不适症状，应去医院检查。
  .py2.bg-white.text-center(@click="jump(7)")
    img.w9(src="../assets/images/button.png")
  .my3
    img.w10(src="../assets/images/tz9.png")
  .f14.line24.wordColor 特禀质：对花粉或某食物过敏等，即使不感冒也经常
                      | 鼻塞打喷嚏、流鼻水、容易哮喘。易患过敏性皮炎、
                      | 海鲜过敏、荨麻疹、水土不服。饮食宜清淡、均衡，
                      | 粗细搭配适当，荤素搭配合理。通常容易发生过敏反
                      | 应的食物也要尽量避免，比如蚕豆、白扁豆、牛肉、
                      | 鹅肉、鲤鱼、虾、蟹、茄子、酒、辣椒、浓茶、咖啡
                      | 等辛辣之品、腥膻发物及含致敏物质的食物。保持室
                      | 内清洁，被褥、床单要经常洗晒，室内装修后不宜立
                      | 即搬进居住，要放一段时间，里面一些容易引发过敏
                      | 或者有害的物质要放一段以后、通风充分以后能够排
                      | 掉。春季尽量减少室外活动时间，因为这个时候花粉
                      | 比较多，容易引发过敏。
  .py2.bg-white.text-center(@click="jump(8)")
    img.w9(src="../assets/images/button.png")
  //- transition(name="fade")
  //-   .fixed.bottom0.left0.right0.bg-white.text-center(v-if="showBar")
  //-     img.w9(src="../assets/images/button.png")
</template>
<script>
export default {
  data () {
    return {
      topValue: 0,
      interval: null,
      showBar: true
    }
  },
  components: {
  },
  mounted () {
    // this.getTop()
  },
  methods: {
    getTop () {
      var _that = this
      document.onscroll = function() { 
        if(_that.interval == null)// 未发起时，启动定时器  
          _that.showBar = false
          _that.interval = setInterval(_that.showBtn, 800);  
          _that.topValue = document.documentElement.scrollTop
      }  
    },
    showBtn () {
      if(document.documentElement.scrollTop == this.topValue) {  
        this.showBar = true
        clearInterval(this.interval)  
        this.interval = null 
      }
    },
    jump (index) {
      this.$router.push(`/priceConsult?from=tesing&num=${index}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
#selfTesting
  padding-bottom 45px
.fade-enter-active, .fade-leave-active
  transition opacity .2s
.fade-enter, .fade-leave-to
  opacity 0
.line24
  line-height 24px
</style>