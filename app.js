const roleOrder = ["鄭森", "田川七左衛門", "羅賓", "泰雅", "阿美", "伊莎貝拉", "焉遲落"];

const roles = {
  "鄭森": {
    gender: "male",
    mark: "鄭",
    image: "assets/characters/zhengsen.jpg",
    caption: "國姓爺｜明軍統帥",
    line: "家國、責任、在絕路上仍要扛旗的人",
    description:
      "你更接近那個把個人情感壓進戰鼓裡的人。你會為了道統、承諾和身後的人硬撐到底，也會在每一次取捨裡被親情與責任反覆撕扯。",
    tags: ["家國大義", "主帥", "死戰", "兄弟羈絆"]
  },
  "田川七左衛門": {
    gender: "male",
    mark: "田",
    image: "assets/characters/tianchuan.jpg",
    caption: "仙之助號｜豐辰家的武士",
    line: "漂泊、執拗、想把失去的人重新留住",
    description:
      "你對關係裡的缺席和虧欠格外敏感，也很難對重要的人真正放手。比起宏大的旗幟，你更在意自己終於能停靠在哪裡，能不能把舊日被奪走的東西奪回來。",
    tags: ["武士", "快船", "身世", "情感拉扯"]
  },
  "羅賓": {
    gender: "male",
    mark: "羅",
    image: "assets/characters/robin.jpg",
    caption: "飛翔的荷蘭人｜福爾摩沙守望者",
    line: "船長、承諾、把遠方當成歸宿的人",
    description:
      "你身上有很強的生存韌性和船長氣質。你會為了同伴守住最後一座城，也會為了一個遠方的夢不肯退後半步，哪怕那片土地已經被砲火染紅。",
    tags: ["船長", "頑強", "砲擊", "同伴承諾"]
  },
  "泰雅": {
    gender: "male",
    mark: "泰",
    image: "assets/characters/taiya.jpg",
    caption: "原住民戰士｜阿美的守護者",
    line: "自由、守護、在夾縫裡等待反擊",
    description:
      "你更像沉默但清醒的保護者。你能忍、能退、也能在關鍵時刻浴血向前；你想要的不是誰贏，而是故土和重要的人終於不再被外來旗幟擺佈。",
    tags: ["原住民自由", "戰術撤退", "浴血奮戰", "守護"]
  },
  "阿美": {
    gender: "female",
    mark: "阿",
    image: "assets/characters/amei.jpg",
    caption: "大肚國公主｜霧影與疾行",
    line: "故土、恩情、溫柔裡藏著鋒刃的人",
    description:
      "你重情，也有很強的行動力。你會記得誰救過你、誰保護過你，也會為了部族和愛人主動走進危險裡；你的柔軟不是退讓，而是讓自己繼續戰鬥的理由。",
    tags: ["公主", "部族", "霧影", "報恩"]
  },
  "伊莎貝拉": {
    gender: "female",
    mark: "伊",
    image: "assets/characters/isabella.jpg",
    caption: "西班牙公主｜黃金蟒與海盜",
    line: "身份、自由、把命運握回掌心的人",
    description:
      "你適合多重身份和高張力選擇。你可以是公主、間諜、海盜，也可以在戰場前決定自己究竟屬於哪面旗；你的魅力來自危險、膽識和不願被定義。",
    tags: ["公主", "海盜", "間諜", "縱橫四海"]
  },
  "焉遲落": {
    gender: "female",
    mark: "落",
    image: "assets/characters/yanchiluo.jpg",
    caption: "明軍副將｜縝密與療養",
    line: "謀算、隱忍、用秘密保護所愛的人",
    description:
      "你更像把情緒收進袖中的執棋者。你擅長權衡、佈局和隱藏真實目的，也願意為了讓重要的人活下去揹負誤解；你的心軟常常以冷靜的形式出現。",
    tags: ["暗線", "縝密", "療養", "兩難選擇"]
  }
};

const questions = [
  {
    kicker: "身份",
    type: "single",
    title: "在這個故事裡，你最想揹負哪一種身份重量？",
    options: [
      { label: "A", text: "殘旗之下的主帥，明知無路也要撐住眾人", score: { "鄭森": 3, "羅賓": 1, "焉遲落": 1 } },
      { label: "B", text: "被海潮推著漂泊的人，先為自己找到停靠處", score: { "田川七左衛門": 3, "羅賓": 2, "阿美": 1 } },
      { label: "C", text: "故土與族人的守護者，不願再被外人支配", score: { "泰雅": 3, "阿美": 3 } },
      { label: "D", text: "多重身份的冒險者，旗幟可以換，但選擇必須歸我", score: { "伊莎貝拉": 3, "焉遲落": 1, "羅賓": 1 } }
    ]
  },
  {
    kicker: "決策",
    type: "single",
    title: "局勢失控時，你最自然的第一反應是？",
    options: [
      { label: "A", text: "正面頂上去，先把大家的士氣穩住", score: { "鄭森": 2, "羅賓": 2 } },
      { label: "B", text: "繞到暗處查清資訊，再決定站到哪一邊", score: { "焉遲落": 2, "伊莎貝拉": 2, "田川七左衛門": 1 } },
      { label: "C", text: "先確認重要的人安不安全，勝負之後再說", score: { "泰雅": 2, "阿美": 2, "田川七左衛門": 2 } },
      { label: "D", text: "讓兩股力量彼此消耗，等真正的機會出現", score: { "泰雅": 2, "焉遲落": 2 } }
    ]
  },
  {
    kicker: "羈絆",
    type: "multi",
    title: "哪些關係線最容易打動你？",
    options: [
      { label: "A", text: "從小一起長大，卻被時代拆散的三人", score: { "鄭森": 2, "田川七左衛門": 2, "焉遲落": 2 } },
      { label: "B", text: "公主與守護者，隔著多年仍想回到彼此身邊", score: { "阿美": 2, "泰雅": 2 } },
      { label: "C", text: "船長與公主，在火光和海風裡相互拯救", score: { "羅賓": 2, "伊莎貝拉": 2 } },
      { label: "D", text: "一起扛過苦難的同伴，比血緣更像家人", score: { "羅賓": 2, "泰雅": 1, "鄭森": 1 } },
      { label: "E", text: "恩情太重，明知危險也要用行動償還", score: { "阿美": 2, "田川七左衛門": 1, "伊莎貝拉": 1 } }
    ]
  },
  {
    kicker: "邊界",
    type: "single",
    title: "以下哪種體驗你最難接受？",
    options: [
      { label: "A", text: "個人願望長期被家國使命壓住", score: { "鄭森": -3, "焉遲落": -2 } },
      { label: "B", text: "最在乎的人站在互相衝突的陣營裡", score: { "田川七左衛門": -2, "焉遲落": -2, "阿美": -1, "泰雅": -1 } },
      { label: "C", text: "漂泊多年，幾乎沒有真正的歸處", score: { "羅賓": -2, "田川七左衛門": -2 } },
      { label: "D", text: "必須隱藏身份、說謊或揹負誤解", score: { "伊莎貝拉": -2, "焉遲落": -3 } },
      { label: "E", text: "大規模攻城與軍團壓力貫穿全程", score: { "鄭森": -2, "羅賓": -2, "泰雅": -1 } }
    ]
  },
  {
    kicker: "資源",
    type: "single",
    title: "如果只能優先掌握一種資源，你會選？",
    options: [
      { label: "A", text: "地圖、海圖、加農砲和援軍", score: { "鄭森": 3, "伊莎貝拉": 1 } },
      { label: "B", text: "檔案、帳本、密信和專屬情報", score: { "焉遲落": 2, "泰雅": 2, "阿美": 2 } },
      { label: "C", text: "快船、機動、潛入路線", score: { "田川七左衛門": 3, "阿美": 2, "伊莎貝拉": 1 } },
      { label: "D", text: "艦隊、城防、士兵和火力", score: { "羅賓": 3, "鄭森": 1, "泰雅": 1 } }
    ]
  },
  {
    kicker: "戰場",
    type: "single",
    title: "你的戰鬥氣質更像哪一種？",
    options: [
      { label: "A", text: "死戰不退，用最後一口氣守住旗幟", score: { "鄭森": 3, "羅賓": 2 } },
      { label: "B", text: "能退能忍，關鍵時刻再浴血反擊", score: { "泰雅": 3, "焉遲落": 1 } },
      { label: "C", text: "輕快、隱蔽、突然出現又立刻離開", score: { "阿美": 3, "田川七左衛門": 2 } },
      { label: "D", text: "海上突襲，靠膽量和經驗打穿局面", score: { "伊莎貝拉": 3, "羅賓": 1 } }
    ]
  },
  {
    kicker: "取捨",
    type: "single",
    title: "你更願意承受哪一種兩難？",
    options: [
      { label: "A", text: "為了大局做殘忍選擇，然後繼續向前", score: { "鄭森": 2, "焉遲落": 2 } },
      { label: "B", text: "明知會影響勝負，也要優先護住一個人", score: { "泰雅": 2, "阿美": 2, "田川七左衛門": 2 } },
      { label: "C", text: "在多重身份之間選擇真正的自己", score: { "伊莎貝拉": 3, "羅賓": 1, "焉遲落": 1 } },
      { label: "D", text: "給無家可歸的人找一片能活下去的土地", score: { "田川七左衛門": 2, "羅賓": 2, "泰雅": 2 } }
    ]
  },
  {
    kicker: "推理",
    type: "rank",
    title: "推理與探索中，請選出你最想追的前三類線索。",
    options: [
      { label: "A", text: "陣營政治、主權歸屬、暗中協議", score: { "焉遲落": 2, "鄭森": 1, "伊莎貝拉": 1 } },
      { label: "B", text: "航海、軍團、火砲、攻守路線", score: { "鄭森": 2, "羅賓": 2, "泰雅": 1 } },
      { label: "C", text: "隱藏身份、通緝、間諜目的", score: { "伊莎貝拉": 2, "焉遲落": 2, "田川七左衛門": 1 } },
      { label: "D", text: "十一年前的舊案與失散真相", score: { "田川七左衛門": 2, "羅賓": 1, "泰雅": 1, "阿美": 1 } },
      { label: "E", text: "情感修羅場與人物關係的虧欠", score: { "阿美": 2, "田川七左衛門": 2, "焉遲落": 1 } },
      { label: "F", text: "部族、傳教士、長鯨與故土秘密", score: { "阿美": 2, "泰雅": 2 } }
    ]
  },
  {
    kicker: "體驗",
    type: "single",
    title: "你更享受哪種玩家體驗？",
    options: [
      { label: "A", text: "主 C 帶隊，主動和所有人談判推進", score: { "鄭森": 2, "羅賓": 2, "伊莎貝拉": 2 } },
      { label: "B", text: "暗線操盤，關鍵時刻才亮出真正底牌", score: { "焉遲落": 3, "田川七左衛門": 1, "伊莎貝拉": 1 } },
      { label: "C", text: "強情感沉浸，關係選擇比勝負更刺痛", score: { "阿美": 2, "泰雅": 2, "田川七左衛門": 2, "焉遲落": 1 } },
      { label: "D", text: "支援與保護隊友，讓別人能活著完成目標", score: { "焉遲落": 2, "泰雅": 2, "阿美": 1 } }
    ]
  },
  {
    kicker: "陣營",
    type: "single",
    title: "如果必須站隊，你更接近哪種立場？",
    options: [
      { label: "A", text: "為明與故國道統拼到底", score: { "鄭森": 3, "焉遲落": -1 } },
      { label: "B", text: "原住民應該擁有自己的自由", score: { "泰雅": 3, "阿美": 3 } },
      { label: "C", text: "海盜與個人自由比官方旗幟更真實", score: { "伊莎貝拉": 2, "羅賓": 2 } },
      { label: "D", text: "現實保全比名分更重要", score: { "焉遲落": 3, "田川七左衛門": 1 } },
      { label: "E", text: "武士身世與個人名譽必須被證明", score: { "田川七左衛門": 3 } }
    ]
  },
  {
    kicker: "隊伍",
    type: "single",
    title: "在一桌人裡，你通常更像？",
    options: [
      { label: "A", text: "能被看見的旗幟，負責把方向喊出來", score: { "鄭森": 2, "羅賓": 2 } },
      { label: "B", text: "獨自跑線的人，效率和行動範圍都很高", score: { "田川七左衛門": 2, "伊莎貝拉": 1, "阿美": 2 } },
      { label: "C", text: "關係紐帶，誰受傷誰動搖你都會在意", score: { "阿美": 2, "泰雅": 2, "焉遲落": 1 } },
      { label: "D", text: "冷靜算牌的人，先把局勢看透再表態", score: { "焉遲落": 3, "泰雅": 1 } }
    ]
  },
  {
    kicker: "終點",
    type: "single",
    title: "故事最後，你最想親手完成哪件事？",
    options: [
      { label: "A", text: "讓故土與部族擁有自己的兵營和未來", score: { "泰雅": 2, "阿美": 3 } },
      { label: "B", text: "等同伴歸來，把承諾埋進福爾摩沙的土地", score: { "羅賓": 3, "伊莎貝拉": 1 } },
      { label: "C", text: "護住最後的道統與身邊的親人", score: { "鄭森": 3, "焉遲落": 1 } },
      { label: "D", text: "找回被時代奪走的人，證明自己從哪裡來", score: { "田川七左衛門": 3, "焉遲落": 1 } },
      { label: "E", text: "在戰場前決定：我是公主、間諜，還是海盜", score: { "伊莎貝拉": 3 } }
    ]
  },
  {
    kicker: "爽點",
    type: "multi",
    title: "你最期待哪些爽點？",
    options: [
      { label: "A", text: "軍團戰、攻城、火砲和援軍", score: { "鄭森": 2, "羅賓": 2, "泰雅": 1 } },
      { label: "B", text: "密信、帳本、圖紙、秘密接頭", score: { "焉遲落": 2, "伊莎貝拉": 1, "泰雅": 1 } },
      { label: "C", text: "海盜浪漫、法雅節、縱橫四海", score: { "伊莎貝拉": 2, "羅賓": 2 } },
      { label: "D", text: "原住民線、部族自由、長鯨秘密", score: { "阿美": 2, "泰雅": 2 } },
      { label: "E", text: "兄弟、舊愛、名義婚姻和情感撕扯", score: { "田川七左衛門": 2, "焉遲落": 2, "阿美": 1 } }
    ]
  },
  {
    kicker: "勸退",
    type: "multi",
    title: "哪些體驗會明顯消耗你？",
    options: [
      { label: "A", text: "長時間軍事統籌和高壓帶隊", score: { "鄭森": -2, "羅賓": -2 } },
      { label: "B", text: "情感糾葛太重，必須反覆面對虧欠", score: { "田川七左衛門": -2, "焉遲落": -2, "阿美": -1, "泰雅": -1 } },
      { label: "C", text: "主動隱藏目的，甚至要騙過親近的人", score: { "焉遲落": -3, "伊莎貝拉": -2 } },
      { label: "D", text: "需要頻繁主動社交、拉人協助", score: { "伊莎貝拉": -1, "羅賓": -1, "鄭森": -1 } },
      { label: "E", text: "大量等待、支援、剋制自己不先出手", score: { "泰雅": -2, "焉遲落": -1 } }
    ]
  }
];

const rankPoints = [3, 2, 1];
const storageKey = "hongyi-role-quiz-records";
const pendingSubmissionKey = "hongyi-role-quiz-pending-submissions";
const resultSheetId = "1gRP1AOeuNfii8__D2az9Uhqy6XdTgiCNgdSprH0q0_o";
const resultEndpoint = "https://script.google.com/macros/s/AKfycbyi_aSiJUY8-6AlARIP4J5P3cFWjjrfhCm2FRr2YF4wekY60Gk7sAfMNroE5LVu496jWQ/exec";
const legacyRoleNames = {
  "鄭森": "郑森",
  "田川七左衛門": "田川七左卫门",
  "羅賓": "罗宾",
  "泰雅": "泰雅",
  "阿美": "阿美",
  "伊莎貝拉": "伊莎贝拉",
  "焉遲落": "焉迟落"
};

const state = {
  step: 0,
  gender: "male",
  playerName: "",
  answers: questions.map(() => []),
  savedResultId: null,
  submittedResultId: null
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
const submitStatus = document.querySelector("#submitStatus");
const submitStatusTitle = document.querySelector("#submitStatusTitle");
const submitStatusText = document.querySelector("#submitStatusText");
let bgmEnabled = true;

totalSteps.textContent = String(questions.length).padStart(2, "0");
renderRolePreviewStrip();
renderRecords();
retryPendingSubmissions();
renderAudioState();
playBgm();

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

document.addEventListener("pointerdown", playBgmAfterGesture, { passive: true });
document.addEventListener("keydown", playBgmAfterGesture);

audioToggle.addEventListener("click", async () => {
  bgmEnabled = !bgmEnabled;
  renderAudioState();

  if (bgmEnabled) {
    await playBgm();
  } else {
    bgm.pause();
  }
});

function renderAudioState() {
  audioToggle.classList.toggle("is-playing", bgmEnabled);
  audioToggle.textContent = bgmEnabled ? "BGM ON" : "BGM";
  audioToggle.setAttribute(
    "aria-label",
    bgmEnabled ? "背景音樂目前開啟，點擊關閉" : "背景音樂目前關閉，點擊開啟"
  );
}

async function playBgm() {
  if (!bgmEnabled) return false;
  try {
    bgm.volume = 0.65;
    await bgm.play();
    return true;
  } catch {
    return false;
  }
}

function playBgmAfterGesture(event) {
  if (!bgmEnabled || !bgm.paused) return;
  if (event?.target && audioToggle.contains(event.target)) return;
  playBgm();
}

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
  nextButton.textContent = state.step === questions.length - 1 ? "看結果" : "下一題";

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
  resultOwner.textContent = state.playerName ? `${state.playerName}的結果` : "玩家結果";
  scoreScope.textContent = state.gender === "male" ? "男角色" : "女角色";

  roleTags.innerHTML = "";
  role.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    roleTags.appendChild(item);
  });

  renderScoreRows(candidates);
  saveRecord(winner.role, candidates);
  queueAndSubmitResult(buildSubmissionPayload(winner, candidates, scores, percents));
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
    time: new Date().toLocaleString("zh-TW", { hour12: false }),
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
  state.submittedResultId = null;
  setSubmitStatus("idle", "自動提交", "正在準備提交結果。");
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
  button.textContent = "已複製";
  setTimeout(() => {
    button.textContent = "複製完整結果";
  }, 1400);
}

function buildShareText() {
  const scores = Array.from(scoreRows.querySelectorAll(".score-row")).map((row) => {
    const name = row.querySelector(".score-meta span").textContent;
    const percent = row.querySelector(".score-meta strong").textContent;
    return `${name} ${percent}`;
  });
  const owner = state.playerName || "玩家";
  return `《紅夷海亂》角色心測｜${owner}\n主匹配：${roleName.textContent}（${resultMatch.textContent}）\n同性別匹配：${scores.join(" / ")}`;
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

function buildSubmissionPayload(winner, candidates, rawScores, percents) {
  const allPercents = Object.fromEntries(roleOrder.map((role) => [role, percents[role]]));
  const allRawScores = Object.fromEntries(roleOrder.map((role) => [role, rawScores[role]]));

  Object.entries(legacyRoleNames).forEach(([role, legacyRole]) => {
    allPercents[legacyRole] = percents[role];
    allRawScores[legacyRole] = rawScores[role];
  });

  const selectedAnswers = questions.map((question, index) => {
    const selected = state.answers[index].map((optionIndex) => {
      const option = question.options[optionIndex];
      return `${option.label}. ${option.text}`;
    });

    return {
      number: index + 1,
      type: question.type,
      title: question.title,
      selected
    };
  });

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    sheetId: resultSheetId,
    submittedAt: new Date().toISOString(),
    localTime: new Date().toLocaleString("zh-TW", { hour12: false }),
    playerName: state.playerName || "未命名玩家",
    gender: state.gender,
    genderLabel: state.gender === "male" ? "男角色" : "女角色",
    winnerRole: winner.role,
    matchPercent: winner.percent,
    visibleScores: candidates.map(({ role, percent, score }) => ({ role, percent, score })),
    allPercents,
    rawScores: allRawScores,
    answers: selectedAnswers,
    userAgent: navigator.userAgent,
    pageUrl: location.href
  };
}

function getPendingSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(pendingSubmissionKey) || "[]");
  } catch {
    return [];
  }
}

function setPendingSubmissions(items) {
  localStorage.setItem(pendingSubmissionKey, JSON.stringify(items.slice(-20)));
}

function queueAndSubmitResult(payload) {
  if (state.submittedResultId === payload.id) return;
  state.submittedResultId = payload.id;

  const pending = getPendingSubmissions();
  pending.push(payload);
  setPendingSubmissions(pending);
  submitPayload(payload, { visible: true });
}

async function retryPendingSubmissions() {
  if (!resultEndpoint) return;
  const pending = getPendingSubmissions();
  if (pending.length === 0) return;

  const remaining = [];
  for (const payload of pending) {
    const ok = await submitPayload(payload, { visible: false });
    if (!ok) remaining.push(payload);
  }
  setPendingSubmissions(remaining);
}

async function submitPayload(payload, { visible }) {
  if (!resultEndpoint) {
    if (visible) {
      setSubmitStatus(
        "warning",
        "自動提交待設定",
        "結果已儲存在本機。部署 Google Apps Script 後，我會把它接到表格自動收集。"
      );
    }
    return false;
  }

  if (visible) {
    setSubmitStatus("submitting", "正在自動提交", "正在把結果送到主持人的 Google 表格。");
  }

  try {
    const body = new URLSearchParams();
    body.set("payload", JSON.stringify(payload));
    await fetch(resultEndpoint, {
      method: "POST",
      mode: "no-cors",
      body
    });

    const remaining = getPendingSubmissions().filter((item) => item.id !== payload.id);
    setPendingSubmissions(remaining);
    if (visible) {
      setSubmitStatus("success", "已自動提交", "結果已送到主持人的 Google 表格。");
    }
    return true;
  } catch {
    if (visible) {
      setSubmitStatus("error", "自動提交失敗", "結果已儲存在本機。網路恢復後會重試，也可以複製結果發給主持人。");
    }
    return false;
  }
}

function setSubmitStatus(kind, title, text) {
  if (!submitStatus) return;
  submitStatus.className = `submit-status is-${kind}`;
  submitStatusTitle.textContent = title;
  submitStatusText.textContent = text;
}
