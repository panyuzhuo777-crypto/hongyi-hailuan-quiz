const roleOrder = ["郑森", "田川七左卫门", "罗宾", "泰雅", "阿美", "伊莎贝拉", "焉迟落"];

const roles = {
  "郑森": {
    gender: "male",
    mark: "郑",
    image: "assets/characters/zhengsen.jpg",
    caption: "国姓爷｜明军统帅",
    line: "家国、责任、在绝路上仍要扛旗的人",
    description:
      "你更接近那个把个人情感压进战鼓里的人。你会为了道统、承诺和身后的人硬撑到底，也会在每一次取舍里被亲情与责任反复撕扯。",
    tags: ["家国大义", "主帅", "死战", "兄弟羁绊"]
  },
  "田川七左卫门": {
    gender: "male",
    mark: "田",
    image: "assets/characters/tianchuan.jpg",
    caption: "仙之助号｜丰辰家的武士",
    line: "漂泊、执拗、想把失去的人重新留住",
    description:
      "你对关系里的缺席和亏欠格外敏感，也很难对重要的人真正放手。比起宏大的旗帜，你更在意自己终于能停靠在哪里，能不能把旧日被夺走的东西夺回来。",
    tags: ["武士", "快船", "身世", "情感拉扯"]
  },
  "罗宾": {
    gender: "male",
    mark: "罗",
    image: "assets/characters/robin.jpg",
    caption: "飞翔的荷兰人｜福尔摩沙守望者",
    line: "船长、承诺、把远方当成归宿的人",
    description:
      "你身上有很强的生存韧性和船长气质。你会为了同伴守住最后一座城，也会为了一个远方的梦不肯退后半步，哪怕那片土地已经被炮火染红。",
    tags: ["船长", "顽强", "炮击", "同伴承诺"]
  },
  "泰雅": {
    gender: "male",
    mark: "泰",
    image: "assets/characters/taiya.jpg",
    caption: "原住民战士｜阿美的守护者",
    line: "自由、守护、在夹缝里等待反击",
    description:
      "你更像沉默但清醒的保护者。你能忍、能退、也能在关键时刻浴血向前；你想要的不是谁赢，而是故土和重要的人终于不再被外来旗帜摆布。",
    tags: ["原住民自由", "战术撤退", "浴血奋战", "守护"]
  },
  "阿美": {
    gender: "female",
    mark: "阿",
    image: "assets/characters/amei.jpg",
    caption: "大肚国公主｜雾影与疾行",
    line: "故土、恩情、温柔里藏着锋刃的人",
    description:
      "你重情，也有很强的行动力。你会记得谁救过你、谁保护过你，也会为了部族和爱人主动走进危险里；你的柔软不是退让，而是让自己继续战斗的理由。",
    tags: ["公主", "部族", "雾影", "报恩"]
  },
  "伊莎贝拉": {
    gender: "female",
    mark: "伊",
    image: "assets/characters/isabella.jpg",
    caption: "西班牙公主｜黄金蟒与海盗",
    line: "身份、自由、把命运握回掌心的人",
    description:
      "你适合多重身份和高张力选择。你可以是公主、间谍、海盗，也可以在战场前决定自己究竟属于哪面旗；你的魅力来自危险、胆识和不愿被定义。",
    tags: ["公主", "海盗", "间谍", "纵横四海"]
  },
  "焉迟落": {
    gender: "female",
    mark: "落",
    image: "assets/characters/yanchiluo.jpg",
    caption: "明军副将｜缜密与疗养",
    line: "谋算、隐忍、用秘密保护所爱的人",
    description:
      "你更像把情绪收进袖中的执棋者。你擅长权衡、布局和隐藏真实目的，也愿意为了让重要的人活下去背负误解；你的心软常常以冷静的形式出现。",
    tags: ["暗线", "缜密", "疗养", "两难选择"]
  }
};

const questions = [
  {
    kicker: "身份",
    type: "single",
    title: "在这个故事里，你最想背负哪一种身份重量？",
    options: [
      { label: "A", text: "残旗之下的主帅，明知无路也要撑住众人", score: { "郑森": 3, "罗宾": 1, "焉迟落": 1 } },
      { label: "B", text: "被海潮推着漂泊的人，先为自己找到停靠处", score: { "田川七左卫门": 3, "罗宾": 2, "阿美": 1 } },
      { label: "C", text: "故土与族人的守护者，不愿再被外人支配", score: { "泰雅": 3, "阿美": 3 } },
      { label: "D", text: "多重身份的冒险者，旗帜可以换，但选择必须归我", score: { "伊莎贝拉": 3, "焉迟落": 1, "罗宾": 1 } }
    ]
  },
  {
    kicker: "决策",
    type: "single",
    title: "局势失控时，你最自然的第一反应是？",
    options: [
      { label: "A", text: "正面顶上去，先把大家的士气稳住", score: { "郑森": 2, "罗宾": 2 } },
      { label: "B", text: "绕到暗处查清信息，再决定站到哪一边", score: { "焉迟落": 2, "伊莎贝拉": 2, "田川七左卫门": 1 } },
      { label: "C", text: "先确认重要的人安不安全，胜负之后再说", score: { "泰雅": 2, "阿美": 2, "田川七左卫门": 2 } },
      { label: "D", text: "让两股力量彼此消耗，等真正的机会出现", score: { "泰雅": 2, "焉迟落": 2 } }
    ]
  },
  {
    kicker: "羁绊",
    type: "multi",
    title: "哪些关系线最容易打动你？",
    options: [
      { label: "A", text: "从小一起长大，却被时代拆散的三人", score: { "郑森": 2, "田川七左卫门": 2, "焉迟落": 2 } },
      { label: "B", text: "公主与守护者，隔着多年仍想回到彼此身边", score: { "阿美": 2, "泰雅": 2 } },
      { label: "C", text: "船长与公主，在火光和海风里相互拯救", score: { "罗宾": 2, "伊莎贝拉": 2 } },
      { label: "D", text: "一起扛过苦难的同伴，比血缘更像家人", score: { "罗宾": 2, "泰雅": 1, "郑森": 1 } },
      { label: "E", text: "恩情太重，明知危险也要用行动偿还", score: { "阿美": 2, "田川七左卫门": 1, "伊莎贝拉": 1 } }
    ]
  },
  {
    kicker: "边界",
    type: "single",
    title: "以下哪种体验你最难接受？",
    options: [
      { label: "A", text: "个人愿望长期被家国使命压住", score: { "郑森": -3, "焉迟落": -2 } },
      { label: "B", text: "最在乎的人站在互相冲突的阵营里", score: { "田川七左卫门": -2, "焉迟落": -2, "阿美": -1, "泰雅": -1 } },
      { label: "C", text: "漂泊多年，几乎没有真正的归处", score: { "罗宾": -2, "田川七左卫门": -2 } },
      { label: "D", text: "必须隐藏身份、说谎或背负误解", score: { "伊莎贝拉": -2, "焉迟落": -3 } },
      { label: "E", text: "大规模攻城与军团压力贯穿全程", score: { "郑森": -2, "罗宾": -2, "泰雅": -1 } }
    ]
  },
  {
    kicker: "资源",
    type: "single",
    title: "如果只能优先掌握一种资源，你会选？",
    options: [
      { label: "A", text: "地图、海图、加农炮和援军", score: { "郑森": 3, "伊莎贝拉": 1 } },
      { label: "B", text: "档案、账本、密信和专属情报", score: { "焉迟落": 2, "泰雅": 2, "阿美": 2 } },
      { label: "C", text: "快船、机动、潜入路线", score: { "田川七左卫门": 3, "阿美": 2, "伊莎贝拉": 1 } },
      { label: "D", text: "舰队、城防、士兵和火力", score: { "罗宾": 3, "郑森": 1, "泰雅": 1 } }
    ]
  },
  {
    kicker: "战场",
    type: "single",
    title: "你的战斗气质更像哪一种？",
    options: [
      { label: "A", text: "死战不退，用最后一口气守住旗帜", score: { "郑森": 3, "罗宾": 2 } },
      { label: "B", text: "能退能忍，关键时刻再浴血反击", score: { "泰雅": 3, "焉迟落": 1 } },
      { label: "C", text: "轻快、隐蔽、突然出现又立刻离开", score: { "阿美": 3, "田川七左卫门": 2 } },
      { label: "D", text: "海上突袭，靠胆量和经验打穿局面", score: { "伊莎贝拉": 3, "罗宾": 1 } }
    ]
  },
  {
    kicker: "取舍",
    type: "single",
    title: "你更愿意承受哪一种两难？",
    options: [
      { label: "A", text: "为了大局做残忍选择，然后继续向前", score: { "郑森": 2, "焉迟落": 2 } },
      { label: "B", text: "明知会影响胜负，也要优先护住一个人", score: { "泰雅": 2, "阿美": 2, "田川七左卫门": 2 } },
      { label: "C", text: "在多重身份之间选择真正的自己", score: { "伊莎贝拉": 3, "罗宾": 1, "焉迟落": 1 } },
      { label: "D", text: "给无家可归的人找一片能活下去的土地", score: { "田川七左卫门": 2, "罗宾": 2, "泰雅": 2 } }
    ]
  },
  {
    kicker: "推理",
    type: "rank",
    title: "推理与探索中，请选出你最想追的前三类线索。",
    options: [
      { label: "A", text: "阵营政治、主权归属、暗中协议", score: { "焉迟落": 2, "郑森": 1, "伊莎贝拉": 1 } },
      { label: "B", text: "航海、军团、火炮、攻守路线", score: { "郑森": 2, "罗宾": 2, "泰雅": 1 } },
      { label: "C", text: "隐藏身份、通缉、间谍目的", score: { "伊莎贝拉": 2, "焉迟落": 2, "田川七左卫门": 1 } },
      { label: "D", text: "十一年前的旧案与失散真相", score: { "田川七左卫门": 2, "罗宾": 1, "泰雅": 1, "阿美": 1 } },
      { label: "E", text: "情感修罗场与人物关系的亏欠", score: { "阿美": 2, "田川七左卫门": 2, "焉迟落": 1 } },
      { label: "F", text: "部族、传教士、长鲸与故土秘密", score: { "阿美": 2, "泰雅": 2 } }
    ]
  },
  {
    kicker: "体验",
    type: "single",
    title: "你更享受哪种玩家体验？",
    options: [
      { label: "A", text: "主 C 带队，主动和所有人谈判推进", score: { "郑森": 2, "罗宾": 2, "伊莎贝拉": 2 } },
      { label: "B", text: "暗线操盘，关键时刻才亮出真正底牌", score: { "焉迟落": 3, "田川七左卫门": 1, "伊莎贝拉": 1 } },
      { label: "C", text: "强情感沉浸，关系选择比胜负更刺痛", score: { "阿美": 2, "泰雅": 2, "田川七左卫门": 2, "焉迟落": 1 } },
      { label: "D", text: "支援与保护队友，让别人能活着完成目标", score: { "焉迟落": 2, "泰雅": 2, "阿美": 1 } }
    ]
  },
  {
    kicker: "阵营",
    type: "single",
    title: "如果必须站队，你更接近哪种立场？",
    options: [
      { label: "A", text: "为明与故国道统拼到底", score: { "郑森": 3, "焉迟落": -1 } },
      { label: "B", text: "原住民应该拥有自己的自由", score: { "泰雅": 3, "阿美": 3 } },
      { label: "C", text: "海盗与个人自由比官方旗帜更真实", score: { "伊莎贝拉": 2, "罗宾": 2 } },
      { label: "D", text: "现实保全比名分更重要", score: { "焉迟落": 3, "田川七左卫门": 1 } },
      { label: "E", text: "武士身世与个人名誉必须被证明", score: { "田川七左卫门": 3 } }
    ]
  },
  {
    kicker: "队伍",
    type: "single",
    title: "在一桌人里，你通常更像？",
    options: [
      { label: "A", text: "能被看见的旗帜，负责把方向喊出来", score: { "郑森": 2, "罗宾": 2 } },
      { label: "B", text: "独自跑线的人，效率和行动范围都很高", score: { "田川七左卫门": 2, "伊莎贝拉": 1, "阿美": 2 } },
      { label: "C", text: "关系纽带，谁受伤谁动摇你都会在意", score: { "阿美": 2, "泰雅": 2, "焉迟落": 1 } },
      { label: "D", text: "冷静算牌的人，先把局势看透再表态", score: { "焉迟落": 3, "泰雅": 1 } }
    ]
  },
  {
    kicker: "终点",
    type: "single",
    title: "故事最后，你最想亲手完成哪件事？",
    options: [
      { label: "A", text: "让故土与部族拥有自己的兵营和未来", score: { "泰雅": 2, "阿美": 3 } },
      { label: "B", text: "等同伴归来，把承诺埋进福尔摩沙的土地", score: { "罗宾": 3, "伊莎贝拉": 1 } },
      { label: "C", text: "护住最后的道统与身边的亲人", score: { "郑森": 3, "焉迟落": 1 } },
      { label: "D", text: "找回被时代夺走的人，证明自己从哪里来", score: { "田川七左卫门": 3, "焉迟落": 1 } },
      { label: "E", text: "在战场前决定：我是公主、间谍，还是海盗", score: { "伊莎贝拉": 3 } }
    ]
  },
  {
    kicker: "爽点",
    type: "multi",
    title: "你最期待哪些爽点？",
    options: [
      { label: "A", text: "军团战、攻城、火炮和援军", score: { "郑森": 2, "罗宾": 2, "泰雅": 1 } },
      { label: "B", text: "密信、账本、图纸、秘密接头", score: { "焉迟落": 2, "伊莎贝拉": 1, "泰雅": 1 } },
      { label: "C", text: "海盗浪漫、法雅节、纵横四海", score: { "伊莎贝拉": 2, "罗宾": 2 } },
      { label: "D", text: "原住民线、部族自由、长鲸秘密", score: { "阿美": 2, "泰雅": 2 } },
      { label: "E", text: "兄弟、旧爱、名义婚姻和情感撕扯", score: { "田川七左卫门": 2, "焉迟落": 2, "阿美": 1 } }
    ]
  },
  {
    kicker: "劝退",
    type: "multi",
    title: "哪些体验会明显消耗你？",
    options: [
      { label: "A", text: "长时间军事统筹和高压带队", score: { "郑森": -2, "罗宾": -2 } },
      { label: "B", text: "情感纠葛太重，必须反复面对亏欠", score: { "田川七左卫门": -2, "焉迟落": -2, "阿美": -1, "泰雅": -1 } },
      { label: "C", text: "主动隐藏目的，甚至要骗过亲近的人", score: { "焉迟落": -3, "伊莎贝拉": -2 } },
      { label: "D", text: "需要频繁主动社交、拉人协助", score: { "伊莎贝拉": -1, "罗宾": -1, "郑森": -1 } },
      { label: "E", text: "大量等待、支援、克制自己不先出手", score: { "泰雅": -2, "焉迟落": -1 } }
    ]
  }
];

const rankPoints = [3, 2, 1];
const storageKey = "hongyi-role-quiz-records";

const state = {
  step: 0,
  gender: "male",
  playerName: "",
  answers: questions.map(() => []),
  savedResultId: null
};

const introScreen = document.querySelector("#introScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const questionKicker = document.querySelector("#questionKicker");
const questionTitle = document.querySelector("#questionTitle");
const optionsEl = document.querySelector("#options");
const currentStep = document.querySelector("#currentStep");
const totalSteps = document.querySelector("#totalSteps");
const progressFill = document.querySelector("#progressFill");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const roleBadge = document.querySelector("#roleBadge");
const roleImage = document.querySelector("#roleImage");
const roleCaption = document.querySelector("#roleCaption");
const roleName = document.querySelector("#roleName");
const roleLine = document.querySelector("#roleLine");
const roleDescription = document.querySelector("#roleDescription");
const roleTags = document.querySelector("#roleTags");
const resultMatch = document.querySelector("#resultMatch");
const resultOwner = document.querySelector("#resultOwner");
const scoreRows = document.querySelector("#scoreRows");
const scoreScope = document.querySelector("#scoreScope");
const playerNameInput = document.querySelector("#playerName");
const bgm = document.querySelector("#bgm");
const audioToggle = document.querySelector("#audioToggle");

totalSteps.textContent = String(questions.length).padStart(2, "0");
renderRolePreviewStrip();
renderRecords();

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.gender = button.dataset.gender;
    renderRolePreviewStrip();
  });
});

playerNameInput.addEventListener("input", () => {
  state.playerName = playerNameInput.value.trim();
});

document.querySelector("#startButton").addEventListener("click", () => {
  state.playerName = playerNameInput.value.trim();
  showScreen("quiz");
  renderQuestion();
});

document.querySelector("#restartButton").addEventListener("click", resetQuiz);
document.querySelector("#againButton").addEventListener("click", resetQuiz);
document.querySelector("#clearRecordsButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderRecords();
});

audioToggle.addEventListener("click", async () => {
  try {
    if (bgm.paused) {
      await bgm.play();
      audioToggle.classList.add("is-playing");
      audioToggle.textContent = "BGM ON";
    } else {
      bgm.pause();
      audioToggle.classList.remove("is-playing");
      audioToggle.textContent = "BGM";
    }
  } catch {
    audioToggle.textContent = "BGM";
  }
});

document.querySelector("#shareButton").addEventListener("click", async () => {
  const text = buildShareText();
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      copyWithFallback(text);
    }
    flashShareButton();
  } catch {
    copyWithFallback(text);
    flashShareButton();
  }
});

prevButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!isAnswered()) return;

  if (state.step === questions.length - 1) {
    renderResult();
    return;
  }

  state.step += 1;
  renderQuestion();
});

function showScreen(name) {
  introScreen.classList.toggle("is-hidden", name !== "intro");
  quizScreen.classList.toggle("is-hidden", name !== "quiz");
  resultScreen.classList.toggle("is-hidden", name !== "result");
}

function renderQuestion() {
  const question = questions[state.step];
  const answer = state.answers[state.step];

  questionKicker.textContent = question.kicker;
  questionTitle.textContent = question.title;
  currentStep.textContent = String(state.step + 1).padStart(2, "0");
  progressFill.style.width = `${((state.step + 1) / questions.length) * 100}%`;
  prevButton.disabled = state.step === 0;
  nextButton.textContent = state.step === questions.length - 1 ? "看结果" : "下一题";

  optionsEl.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const isSelected = answer.includes(index);
    const rankIndex = answer.indexOf(index);

    button.className = `option${isSelected ? " is-selected" : ""}`;
    button.type = "button";
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="option-mark">${option.label}</span>
      <span class="option-text">${option.text}</span>
      <span class="rank-mark">${question.type === "rank" && isSelected ? `第${rankIndex + 1}` : ""}</span>
    `;

    button.addEventListener("click", () => selectOption(index));
    optionsEl.appendChild(button);
  });

  updateNextState();
}

function selectOption(index) {
  const question = questions[state.step];
  const answer = state.answers[state.step];

  if (question.type === "single") {
    state.answers[state.step] = [index];
  }

  if (question.type === "multi") {
    if (answer.includes(index)) {
      state.answers[state.step] = answer.filter((item) => item !== index);
    } else {
      state.answers[state.step] = [...answer, index];
    }
  }

  if (question.type === "rank") {
    if (answer.includes(index)) {
      state.answers[state.step] = answer.filter((item) => item !== index);
    } else if (answer.length < 3) {
      state.answers[state.step] = [...answer, index];
    }
  }

  renderQuestion();
}

function updateNextState() {
  nextButton.disabled = !isAnswered();
}

function isAnswered() {
  const question = questions[state.step];
  const answer = state.answers[state.step];
  return question.type === "rank" ? answer.length === 3 : answer.length > 0;
}

function getScores() {
  const scores = Object.fromEntries(roleOrder.map((role) => [role, 0]));

  questions.forEach((question, questionIndex) => {
    const answer = state.answers[questionIndex];

    if (question.type === "rank") {
      answer.forEach((optionIndex, rankIndex) => {
        const score = question.options[optionIndex].score || {};
        Object.entries(score).forEach(([role, points]) => {
          scores[role] += points * rankPoints[rankIndex];
        });
      });
      return;
    }

    answer.forEach((optionIndex) => {
      const score = question.options[optionIndex].score || {};
      Object.entries(score).forEach(([role, points]) => {
        scores[role] += points;
      });
    });
  });

  return scores;
}

function getMaxScores() {
  const maxScores = Object.fromEntries(roleOrder.map((role) => [role, 0]));

  questions.forEach((question) => {
    roleOrder.forEach((role) => {
      if (question.type === "single") {
        const best = Math.max(0, ...question.options.map((option) => option.score?.[role] || 0));
        maxScores[role] += best;
      }

      if (question.type === "multi") {
        const positiveSum = question.options.reduce((sum, option) => {
          const points = option.score?.[role] || 0;
          return points > 0 ? sum + points : sum;
        }, 0);
        maxScores[role] += positiveSum;
      }

      if (question.type === "rank") {
        const positives = question.options
          .map((option) => option.score?.[role] || 0)
          .filter((points) => points > 0)
          .sort((a, b) => b - a)
          .slice(0, rankPoints.length);
        positives.forEach((points, index) => {
          maxScores[role] += points * rankPoints[index];
        });
      }
    });
  });

  return maxScores;
}

function getPercents(scores, maxScores) {
  return Object.fromEntries(
    roleOrder.map((role) => {
      const max = Math.max(1, maxScores[role]);
      return [role, Math.round((scores[role] / max) * 100)];
    })
  );
}

function getCandidates(scores, percents) {
  return roleOrder
    .filter((role) => roles[role].gender === state.gender)
    .map((role) => ({ role, score: scores[role], percent: percents[role] }))
    .sort((a, b) => {
      if (b.percent !== a.percent) return b.percent - a.percent;
      if (b.score !== a.score) return b.score - a.score;
      return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    });
}

function renderResult() {
  const scores = getScores();
  const maxScores = getMaxScores();
  const percents = getPercents(scores, maxScores);
  const candidates = getCandidates(scores, percents);
  const winner = candidates[0];
  const role = roles[winner.role];

  roleBadge.textContent = role.mark;
  roleImage.src = role.image;
  roleImage.alt = `${winner.role}角色封面`;
  roleCaption.textContent = role.caption;
  roleName.textContent = winner.role;
  roleLine.textContent = role.line;
  roleDescription.textContent = role.description;
  resultMatch.textContent = `${winner.percent}% MATCH`;
  resultOwner.textContent = state.playerName ? `${state.playerName}的结果` : "玩家结果";
  scoreScope.textContent = state.gender === "male" ? "男角色" : "女角色";

  roleTags.innerHTML = "";
  role.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    roleTags.appendChild(item);
  });

  renderScoreRows(candidates);
  saveRecord(winner.role, candidates);
  showScreen("result");
}

function renderScoreRows(candidates) {
  scoreRows.innerHTML = "";

  candidates.forEach((item) => {
    const row = document.createElement("div");
    const positive = item.percent >= 0;
    const width = Math.min(100, Math.abs(item.percent)) / 2;
    row.className = `score-row${positive ? "" : " is-negative"}`;
    row.innerHTML = `
      <div class="score-meta">
        <span>${item.role}</span>
        <strong>${item.percent}%</strong>
      </div>
      <div class="score-track">
        <div class="score-zero" aria-hidden="true"></div>
        <div class="score-fill" style="width: ${width}%"></div>
      </div>
    `;
    scoreRows.appendChild(row);
  });
}

function saveRecord(winnerRole, candidates) {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  if (state.savedResultId) return;

  const record = {
    id,
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    name: state.playerName || "未命名玩家",
    gender: state.gender,
    winnerRole,
    scores: candidates.map(({ role, percent }) => ({ role, percent }))
  };
  const records = getRecords();
  records.unshift(record);
  localStorage.setItem(storageKey, JSON.stringify(records.slice(0, 60)));
  state.savedResultId = id;
  renderRecords();
}

function getRecords() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function renderRecords() {
  const panel = document.querySelector("#recordsPanel");
  const list = document.querySelector("#recordsList");
  const records = getRecords();
  panel.classList.toggle("is-hidden", records.length === 0);
  list.innerHTML = "";

  records.slice(0, 12).forEach((record) => {
    const item = document.createElement("div");
    item.className = "record-item";
    const scoreText = record.scores.map((score) => `${score.role}${score.percent}%`).join(" / ");
    item.innerHTML = `
      <div>
        <strong>${record.name}</strong>
        <span>${record.time}</span>
      </div>
      <p>${record.winnerRole}｜${scoreText}</p>
    `;
    list.appendChild(item);
  });
}

function resetQuiz() {
  state.step = 0;
  state.answers = questions.map(() => []);
  state.savedResultId = null;
  showScreen("intro");
}

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function flashShareButton() {
  const button = document.querySelector("#shareButton");
  button.textContent = "已复制";
  setTimeout(() => {
    button.textContent = "复制完整结果";
  }, 1400);
}

function buildShareText() {
  const scores = Array.from(scoreRows.querySelectorAll(".score-row")).map((row) => {
    const name = row.querySelector(".score-meta span").textContent;
    const percent = row.querySelector(".score-meta strong").textContent;
    return `${name} ${percent}`;
  });
  const owner = state.playerName || "玩家";
  return `《红夷海乱》角色心测｜${owner}\n主匹配：${roleName.textContent}（${resultMatch.textContent}）\n同性别匹配：${scores.join(" / ")}`;
}

function renderRolePreviewStrip() {
  const strip = document.querySelector("#rolePreviewStrip");
  const filteredRoles = roleOrder.filter((roleNameValue) => roles[roleNameValue].gender === state.gender);
  strip.innerHTML = "";
  strip.style.setProperty("--preview-count", filteredRoles.length);

  filteredRoles.forEach((roleNameValue) => {
    const role = roles[roleNameValue];
    const item = document.createElement("div");
    item.className = "role-preview";
    item.innerHTML = `
      <img src="${role.image}" alt="${roleNameValue}角色封面" loading="lazy" />
      <span>${roleNameValue}</span>
    `;
    strip.appendChild(item);
  });
}
