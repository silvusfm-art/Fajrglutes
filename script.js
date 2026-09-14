
const days = {
  legs: {
    name: "يوم الأرجل",
    icon: "🦵",
    meta: "5 مراحل • المتاح الآن",
    exercises: [
      {title:"Warm-up", ar:"إحماء", img:"fajr-sitting.png", text:"صحّي الأرجل أول. حركة مرتبة وبعدين نبدأ الشغل الحقيقي."},
      {title:"Hip Thrust", ar:"دفع الورك", img:"fajr-main.png", text:"ارفعي بتحكم واثبتي فوق. مجلس إدارة المكوة يطلب جودة بالتنفيذ، مو عدات والسلام. 😭"},
      {title:"RDL", ar:"الرفعة الرومانية", img:"fajr-pose.png", text:"نزول هادئ وظهر ثابت. هنا يبان شغل الرجلين والتناسق الحلو بين خصرك وفخوذك. خلصنا المدح، كملي."},
      {title:"Kick Back", ar:"ركلة خلفية", img:"fajr-mirror.png", text:"كل عدة استثمار إضافي في مكوتك. الاستثمار أصلًا ناجح، بس واضح إن الآنسة فجر طماعة وتبيها أحلى. 😭"},
      {title:"Abduction", ar:"فتح الورك", img:"fajr-squat.png", text:"آخر مرحلة. تحكمي بالحركة. وبعدها مسموح نظرة سريعة للمراية… سريعة يا فجر، مو جلسة تصوير."}
    ],
    finalTitle:"Leg Day Complete 🦵✨",
    finalLines:["الأرجل: نجت بصعوبة ✅","المكوة: أخذت حقها من التمرين 🍑","فجر: معضّلة رسميًا 💪"],
    finalRule:"💋 فحص الجودة النهائي: أيوه… الآن المكوة مناسبة للتبويس."
  },
  chest: {
    name: "صدر + تراي",
    icon: "💪",
    meta: "6 تمارين • المتاح الآن",
    exercises: [
      {title:"Dumbbell Bench Press", ar:"ضغط صدر بالدمبل", img:"fajr-main.png", text:"نزول بتحكم وادفعي للأعلى. ركزي على الصدر يا فجر… والموقع بيحاول يركز على التكنيك فقط. نحاول. 😭"},
      {title:"Pec Deck / Chest Fly", ar:"تفتيح صدر جهاز", img:"fajr-pose.png", text:"افتحي بتحكم واجمعي قدامك بدون ما تحولينها Press. أهم شيء الشد يكون في الصدر. الإدارة تؤكد أن هذه جملة تدريبية بحتة. 😇"},
      {title:"Dumbbell Front Raise", ar:"رفع أمامي بالدمبل", img:"fajr-sitting.png", text:"ارفعي الدمبل للأمام بتحكم إلى مستوى الكتف تقريبًا، بدون رمي الوزن. الكتف الأمامي دخل الحصة بدون استئذان."},
      {title:"Cable Triceps Extension", ar:"تمديد ترايسبس بالكابل", img:"fajr-mirror.png", text:"ثبتي الكوع وخلي الحركة من مفصل الكوع. التراي يبدأ الآن يراجع قراراته بالحياة."},
      {title:"Cable Triceps Pushdown", ar:"دفع ترايسبس بالكابل", img:"fajr-squat.png", text:"الكوع قريب من الجسم، ادفعي لتحت وارجعي بهدوء. لا نبي الجسم كله يشارك في عدة التراي يا معضّلة."},
      {title:"Overhead Triceps Extension", ar:"تمديد ترايسبس فوق الرأس", img:"fajr-main.png", text:"آخر تمرين. مدّي التراي فوق الرأس بتحكم وخلي الكوع ثابت قدر الإمكان. بعدها رسميًا ما لك شغل إلا الـPump والمراية. 😭"}
    ],
    finalTitle:"Chest + Triceps Complete 💪✨",
    finalLines:["الصدر: أخذ حقه ✅","التراي: انتهى رسميًا 💀","فجر: نجت من الحصة 🎀"],
    finalRule:"💋 جاهزين للبوس."
  }
};

let currentDay = null;
let step = 0;
let mirrorCount = 0;

function home() {
  currentDay = null;
  step = 0;
  mirrorCount = 0;

  document.getElementById("app").innerHTML = `
    <section class="hero-card">
      <div class="hero-text">
        <div class="eyebrow">FAJR GYM ✦</div>
        <h1>👑 أهلاً يا معضّلة</h1>
        <p>وش بنعذّب اليوم؟</p>
        <small>الدلع مسموح، الهروب لا.</small>
      </div>
      <img class="hero-image" src="fajr-main.png" alt="Fajr">
    </section>

    <section class="panel">
      <h2>اختاري يوم التمرين</h2>

      <button class="day-choice" onclick="openDay('legs')">
        <div>
          <strong>🦵 يوم الأرجل</strong>
          <span>5 مراحل • المتاح الآن</span>
        </div>
        <b>←</b>
      </button>

      <button class="day-choice" onclick="openDay('chest')">
        <div>
          <strong>💪 صدر + تراي</strong>
          <span>6 تمارين • المتاح الآن</span>
        </div>
        <b>←</b>
      </button>

      <div class="locked-note">🔒 باقي الأيام بنضيفها يوم بيوم</div>
    </section>`;
}

function openDay(dayKey) {
  currentDay = dayKey;
  const day = days[dayKey];

  document.getElementById("app").innerHTML = `
    <section class="panel outfit-layout">
      <div>
        <div class="eyebrow">${day.icon} ${day.name}</div>
        <h2>اختاري الأوتفيت 🎀</h2>
        <p>سوتيانا رياضية + ليغينز. لأن اللون طبعًا قرار مصيري.</p>

        <div class="color-row">
          <button onclick="pickColor(this,'الوردي؟ جاية تتمرنين وتسوين مشاكل بنفس الوقت. 😭')">🩷 وردي</button>
          <button onclick="pickColor(this,'الأسود؟ واضح اليوم الأوزان هي اللي لازم تخاف. 🖤')">🖤 أسود</button>
          <button onclick="pickColor(this,'الأبيض؟ بريئة بالأوتفيت فقط. 🤍')">🤍 أبيض</button>
        </div>

        <div id="colorComment" class="comment-box">اختاري اللون أول يا فجر.</div>

        <button class="main-btn" onclick="startWorkout()">ابدئي التمرين 💪</button>
        <button class="ghost-btn" onclick="home()">رجوع</button>
      </div>

      <img class="outfit-image" src="fajr-pose.png" alt="Fajr">
    </section>`;
}

function pickColor(btn, message) {
  document.querySelectorAll(".color-row button").forEach(x => x.classList.remove("active-color"));
  btn.classList.add("active-color");
  document.getElementById("colorComment").textContent = message;
}

function startWorkout() {
  step = 0;
  mirrorCount = 0;
  renderExercise();
}

function renderExercise() {
  const day = days[currentDay];
  const ex = day.exercises[step];

  document.getElementById("app").innerHTML = `
    <section class="panel workout-card">
      <div class="workout-progress">
        <span style="width:${((step + 1) / day.exercises.length) * 100}%"></span>
      </div>

      <div class="step-count">${step + 1} / ${day.exercises.length} • ${day.name}</div>

      <img class="workout-image" src="${ex.img}" alt="${ex.title}">
      <h2>${ex.title}</h2>
      <h3>${ex.ar}</h3>
      <p>${ex.text}</p>

      <div id="reaction" class="comment-box"></div>

      <div class="action-grid">
        <button class="main-btn" onclick="finishExercise()">✅ خلصت</button>
        <button class="ghost-btn" onclick="mirror()">🪞 بشوف النتيجة</button>
        <button class="ghost-btn" onclick="lazy()">😭 مالي خلق</button>
      </div>
    </section>`;
}

function finishExercise() {
  const day = days[currentDay];
  if (step < day.exercises.length - 1) {
    step++;
    renderExercise();
    return;
  }

  document.getElementById("app").innerHTML = `
    <section class="panel finish-card">
      <h2>${day.finalTitle}</h2>
      ${day.finalLines.map(line => `<p>${line}</p>`).join("")}
      <div class="final-rule">${day.finalRule}</div>

      ${currentDay === "chest" ? `
        <div class="comment-box">
          <b>فجر:</b> «وش اللي جاهز بالضبط؟»<br>
          <b>الموقع:</b> «الصدر والتراي طبعًا، وش حسبتي؟ 😇»<br>
          <b>🚨 الإدارة:</b> اقفلوا الموقع.
        </div>` : ""}

      <button class="main-btn" onclick="home()">العودة للرئيسية</button>
    </section>`;
}

function mirror() {
  mirrorCount++;
  const box = document.getElementById("reaction");

  if (currentDay === "legs") {
    box.textContent = mirrorCount === 1
      ? "إيه، للحين حلوة. المكوة ما اختفت من آخر مجموعة. ارجعي تمرني. 😭"
      : `هذه النظرة رقم ${mirrorCount}. مكوتك ما راح تكبر خلال دقيقتين يا فجر. 💀`;
  } else {
    box.textContent = mirrorCount === 1
      ? "إيه الـPump موجود. لا، ما يحتاج فحص كل دقيقتين يا فجر. 😭"
      : `هذه النظرة رقم ${mirrorCount}. الصدر والتراي للحين مكانهم، ارجعي كملي. 💀`;
  }
}

function lazy() {
  const msgs = [
    "طلب الدلع وصل وتم رفضه. كملي. 😭",
    "أنتِ اللي اخترتي التمرين، تحملي قراراتك.",
    "خذي نفس واشربي موية وكملي يا معضّلة. 💪"
  ];
  document.getElementById("reaction").textContent =
    msgs[Math.floor(Math.random() * msgs.length)];
}

home();
