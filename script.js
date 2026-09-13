const stages=[
["🔥 إحماء","صحّي العضلة أول",`إحماء وتنشيط بسيط. وبالمناسبة: <b>وقفي تناظرين في المرآة.</b><br><br>نعم، نعرف أنها حلوة. نعم، شغل النادي واضح. خذي نظرتك وابدئي. 😭`],
["🍑 التمرين الأساسي","Hip Thrust — نشتغل على التحفة",`ارفعي بتحكم، اثبتي فوق وانزلي بهدوء. إحنا مو نبني من الصفر؛ إحنا نطوّر شيء <b>جميل وممتلئ ومرسوم من الأساس.</b><br><br>إذا استمريتي بهذا المستوى، قريب بنحتاج نكبّر الموقع عشان يستوعب حجم مؤخرتك. 😭`],
["✨ تحكم وتمدد","RDL — الرسمة قاعدة تكتمل",`نزول هادئ وتكنيك مضبوط. هنا يبان التناسق بين <b>خصرك ومؤخرتك وفخوذك</b>. ممتلئة، مستديرة، وشغل النادي واضح عليها.<br><br>بس النظر لها بعد كل مجموعة ما يكبرها يا دلوعة، التمرين هو اللي يسوي الشغل.`],
["🦵 ادفعي الفاتورة","Bulgarian Split Squat",`هنا ما فيه دلع. أنتِ اللي تبينها أقوى وأجمل وأكثر امتلاءً، والحين جاء وقت دفع الفاتورة.<br><br>إذا حرق؟ ممتاز. <b>هذا صوت المشروع وهو يتطور.</b>`],
["🍑 النهاية","Abduction — آخر حرق",`آخر مرحلة. تحكمي بالحركة ولا ترمين الوزن. وهنا مسموح نظرة سريعة للمراية… <b>قلت سريعة يا فجر، مو جلسة تصوير.</b> 😭`]
];
const compliments=[
"مؤخرتك مستديرة وممتلئة بشكل جميل، وشغل النادي واضح عليها.",
"التناسق بينها وبين خصرك وفخوذك هو اللي يخلي شكلها مرسوم فعلًا.",
"جسم نادي قوي، لكن بانحناءات ناعمة وواضحة — تركيبة ناجحة جدًا.",
"إيه يا فجر، ما زالت حلوة. ما يحتاج تتأكدين من المرآة كل دقيقتين. 😭",
"واضح إن Leg Day أدى الأمانة، والنتيجة قاعدة تتكلم عن نفسها.",
"مسموح تكونين فخورة فيها… بس كملي المجموعة أول يا ملكة. 👑"
];
let stage=0,sets=0,mirrors=0;
const $=id=>document.getElementById(id);
function render(){
 if(stage>=stages.length){$("game").classList.add("hidden");$("finish").classList.remove("hidden");return}
 $("tag").textContent=stages[stage][0];$("title").textContent=stages[stage][1];$("copy").innerHTML=stages[stage][2];
 const p=Math.round(stage/stages.length*100);$("progress").textContent=p+"%";$("bar").style.width=p+"%";$("sets").textContent=sets;$("mirrors").textContent=mirrors;
 $("message").classList.remove("show");$("weight").value="";$("reps").value="";
}
$("start").onclick=()=>{$("game").classList.remove("hidden");$("start").closest(".hero").classList.add("hidden");render();scrollTo({top:0,behavior:"smooth"})};
$("done").onclick=()=>{sets++;stage++;render()};
$("mirror").onclick=()=>{mirrors++;$("mirrors").textContent=mirrors;let m=mirrors<3?"إيه، لسه جميلة ومستديرة وممتلئة. مبسوطة؟ الحين ارجعي للتمرين. 😭":`هذه النظرة رقم ${mirrors}. يا فجر خلاص، ما راح تكبر خلال دقيقتين! خذي نظرتك وارجعي للمجموعة. 💀`; $("message").innerHTML=m;$("message").classList.add("show")};
$("lazy").onclick=()=>{const a=["لا يا دلوعة. أنتِ اللي تبين النتيجة، كملي العدات. 😭","طلب الاستسلام مرفوض. خذي نفس وكملي.","كل هذا المدح وبعدين تقولين مالي خلق؟ مستحيل. 🍑"];$("message").textContent=a[Math.floor(Math.random()*a.length)];$("message").classList.add("show")};
$("praise").onclick=()=>{$("compliment").textContent=compliments[Math.floor(Math.random()*compliments.length)]};
$("reset").onclick=()=>location.reload();
