let step=0,looks=0,outfit="وردي",selectedDay="legs";

const workouts = {
  legs: [
    ["🔥 البداية","إحماء وتنشيط","صحّي الأرجل أول. حركة مرتبة وبعدين نبدأ الشغل الحقيقي.","fajr-sitting.png"],
    ["🍑 الشغل الأساسي","Hip Thrust","ارفعي بتحكم واثبتي فوق. مجلس إدارة المكوة يطلب جودة بالتنفيذ، مو عدات والسلام. 😭","fajr-main.png"],
    ["✨ تحكم","RDL","نزول هادئ وظهر ثابت. هنا يبان شغل الرجلين والتناسق الحلو بين خصرك وفخوذك. خلصنا المدح، كملي.","fajr-pose.png"],
    ["🍑 ركزي","Kick Back","كل عدة استثمار إضافي في مكوتك. الاستثمار أصلًا ناجح، بس واضح إن الآنسة فجر طماعة وتبيها أحلى. 😭","fajr-mirror.png"],
    ["🔥 آخر حرق","Abduction","آخر مرحلة. تحكمي بالحركة. وبعدها مسموح نظرة سريعة للمراية… سريعة يا فجر، مو جلسة تصوير.","fajr-squat.png"]
  ],
  chest: [
    ["💪 البداية","Dumbbell Bench Press","نزول بتحكم وادفعي للأعلى. ركزي على الصدر يا فجر… والموقع بيحاول يركز على التكنيك فقط. نحاول. 😭","fajr-main.png"],
    ["✨ شد وتحكم","Pec Deck / Chest Fly","افتحي بتحكم واجمعي قدامك. أهم شيء الشد يكون في الصدر. الإدارة تؤكد أن هذه جملة تدريبية بحتة. 😇","fajr-pose.png"],
    ["🔥 كتف أمامي","Dumbbell Front Raise","ارفعي الدمبل للأمام بتحكم إلى مستوى الكتف تقريبًا. الكتف الأمامي دخل الحصة بدون استئذان.","fajr-sitting.png"],
    ["💀 التراي بدأ","Cable Triceps Extension","ثبتي الكوع وخلي الحركة من مفصل الكوع. التراي بدأ يراجع قراراته بالحياة.","fajr-mirror.png"],
    ["🔥 كملي","Cable Triceps Pushdown","الكوع قريب من الجسم، ادفعي لتحت وارجعي بهدوء. لا نبي الجسم كله يشارك في عدة التراي يا معضّلة.","fajr-squat.png"],
    ["🏁 آخر تمرين","Overhead Triceps Extension","آخر تمرين. مدّي التراي فوق الرأس بتحكم وخلي الكوع ثابت. بعدها رسميًا ما لك شغل إلا الـPump والمراية. 😭","fajr-main.png"]
  ]
};

function show(id){
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("on"));
  document.getElementById(id).classList.add("on");
  scrollTo(0,0);
}

function chooseDay(day){
  selectedDay=day;
  document.getElementById("outfitTitle").textContent =
    day==="legs" ? "اختاري الأوتفيت 🎀 — يوم الأرجل" : "اختاري الأوتفيت 🎀 — صدر + تراي";
  show("outfit");
}

function pick(c,e){
  outfit=c;
  document.getElementById("outfitMsg").textContent=e+" "+({
    وردي:"الوردي؟ جاية تتمرنين وتسوين مشاكل بنفس الوقت. 😭",
    أسود:"الأسود؟ واضح اليوم الأوزان هي اللي لازم تخاف. 🖤",
    أبيض:"الأبيض؟ بريئة بالأوتفيت فقط. 🤍"
  }[c]);
}

function start(){
  step=0; looks=0;
  show("workout");
  render();
}

function render(){
  const stages=workouts[selectedDay];
  const s=stages[step];
  document.getElementById("tag").textContent=s[0];
  document.getElementById("title").textContent=s[1];
  document.getElementById("copy").textContent=s[2];
  document.getElementById("pic").src=s[3];
  document.getElementById("count").textContent=(step+1)+" / "+stages.length;
  document.getElementById("bar").style.width=((step+1)/stages.length*100)+"%";
  document.getElementById("msg").classList.add("hide");
}

function done(){
  const stages=workouts[selectedDay];
  step++;

  if(step>=stages.length){
    const finishText=document.getElementById("finishText");

    if(selectedDay==="legs"){
      finishText.innerHTML=`
        <span>🏆 خلصنا</span>
        <h2>أحسنتِ يا فجر</h2>
        <p>الفخوذ أخذت حقها، العضلات اشتغلت، و<strong>المكوة</strong> أخذت استثمارها اليومي بنجاح. 🍑</p>
        <p>جسمك الرياضي مرتب وشغل الأرجل واضح عليك. والحين بعد كل هالشغل نقدر نعتمد النتيجة رسميًا:</p>
        <div class="msg"><strong>💋 فحص الجودة النهائي:</strong><br>أيوه… الآن المكوة مناسبة للتبويس. اعتماد رسمي بعد التمرين. 😭🍑</div>
        <p>الحين روحي كلي ولا توقفين عند المراية وتنسين الوجبة.</p>`;
    } else {
      finishText.innerHTML=`
        <span>🏆 خلصنا</span>
        <h2>صدر + تراي Complete 💪</h2>
        <p>الصدر: أخذ حقه ✅</p>
        <p>التراي: انتهى رسميًا 💀</p>
        <p>فجر: نجت من الحصة 🎀</p>
        <div class="msg"><strong>💋 جاهزين للبوس.</strong><br><br>
        فجر: «وش اللي جاهز بالضبط؟»<br>
        الموقع: «الصدر والتراي طبعًا، وش حسبتي؟ 😇»<br>
        🚨 الإدارة: اقفلوا الموقع.</div>`;
    }

    show("finish");
  } else {
    render();
  }
}

function mirror(){
  looks++;
  const m=document.getElementById("msg");

  if(selectedDay==="legs"){
    m.textContent=looks<3
      ?"إيه، للحين حلوة. المكوة ما اختفت من آخر مجموعة. ارجعي تمرني. 😭"
      :"هذه النظرة رقم "+looks+". مكوتك ما راح تكبر خلال دقيقتين يا فجر. 💀";
  }else{
    m.textContent=looks<3
      ?"إيه الـPump موجود. لا، ما يحتاج فحص كل دقيقتين يا فجر. 😭"
      :"هذه النظرة رقم "+looks+". الصدر والتراي للحين مكانهم، ارجعي كملي. 💀";
  }
  m.classList.remove("hide");
}

function lazy(){
  const m=document.getElementById("msg");
  const arr=selectedDay==="legs"
    ?["طلب الدلع وصل وتم رفضه. كملي. 😭","أنتِ اللي اخترتي يوم الأرجل، تحملي قراراتك.","خذي نفس واشربي موية وكملي يا معضّلة. 💪"]
    :["طلب الدلع وصل وتم رفضه. كملي صدر وتراي. 😭","الـPump ما يجي بالتمني يا فجر، كملي.","خذي نفس واشربي موية وارجعي للتراي يا معضّلة. 💪"];
  m.textContent=arr[Math.floor(Math.random()*arr.length)];
  m.classList.remove("hide");
}
