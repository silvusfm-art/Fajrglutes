let step=0,looks=0,outfit="وردي";
const stages=[
["🔥 البداية","إحماء وتنشيط","صحّي الأرجل أول. حركة مرتبة وبعدين نبدأ الشغل الحقيقي.","fajr-sitting.png"],
["🍑 الشغل الأساسي","Hip Thrust","ارفعي بتحكم واثبتي فوق. مجلس إدارة المكوة يطلب جودة بالتنفيذ، مو عدات والسلام. 😭","fajr-main.png"],
["✨ تحكم","RDL","نزول هادئ وظهر ثابت. هنا يبان شغل الرجلين والتناسق الحلو بين خصرك وفخوذك. خلصنا المدح، كملي.","fajr-pose.png"],
["🍑 ركزي","Kick Back","كل عدة استثمار إضافي في مكوتك. الاستثمار أصلًا ناجح، بس واضح إن الآنسة فجر طماعة وتبيها أحلى. 😭","fajr-mirror.png"],
["🔥 آخر حرق","Abduction","آخر مرحلة. تحكمي بالحركة. وبعدها مسموح نظرة سريعة للمراية… سريعة يا فجر، مو جلسة تصوير.","fajr-squat.png"]];
function show(id){document.querySelectorAll(".page").forEach(x=>x.classList.remove("on"));document.getElementById(id).classList.add("on");scrollTo(0,0)}
function pick(c,e){outfit=c;document.getElementById("outfitMsg").textContent=e+" "+({وردي:"الوردي؟ جاية تتمرنين وتسوين مشاكل بنفس الوقت. 😭",أسود:"الأسود؟ واضح اليوم الأوزان هي اللي لازم تخاف. 🖤",أبيض:"الأبيض؟ بريئة بالأوتفيت فقط. 🤍"}[c])}
function start(){step=0;looks=0;show("workout");render()}
function render(){let s=stages[step];tag.textContent=s[0];title.textContent=s[1];copy.textContent=s[2];pic.src=""+s[3];count.textContent=(step+1)+" / "+stages.length;bar.style.width=(step/stages.length*100)+"%";msg.classList.add("hide")}
function done(){
  step++;
  if(step>=stages.length){
    const finishText=document.querySelector("#finish .finish");
    finishText.innerHTML=`<span>🏆 خلصنا</span>
      <h2>أحسنتِ يا فجر</h2>
      <p>الفخوذ أخذت حقها، العضلات اشتغلت، و<strong>المكوة</strong> أخذت استثمارها اليومي بنجاح. 🍑</p>
      <p>جسمك الرياضي مرتب وشغل الأرجل واضح عليك. والحين بعد كل هالشغل نقدر نعتمد النتيجة رسميًا:</p>
      <div class="msg"><strong>💋 فحص الجودة النهائي:</strong><br>أيوه… الآن المكوة مناسبة للتبويس. اعتماد رسمي بعد التمرين. 😭🍑</div>
      <p>الحين روحي كلي ولا توقفين عند المراية وتنسين الوجبة.</p>`;
    show("finish");
  } else render();
}
function mirror(){looks++;msg.textContent=looks<3?"إيه، للحين حلوة. المكوة ما اختفت من آخر مجموعة. ارجعي تمرني. 😭":"هذه النظرة رقم "+looks+". مكوتك ما راح تكبر خلال دقيقتين يا فجر. 💀";msg.classList.remove("hide")}
function lazy(){msg.textContent=["طلب الدلع وصل وتم رفضه. كملي. 😭","أنتِ اللي اخترتي يوم الأرجل، تحملي قراراتك.","خذي نفس واشربي موية وكملي يا معضّلة. 💪"][Math.floor(Math.random()*3)];msg.classList.remove("hide")}