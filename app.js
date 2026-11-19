const illustrationAssets={'studio':'assets/illustration_07.jpg','metro':'assets/illustration_08.jpg','phone':'assets/illustration_09.jpg','team':'assets/illustration_10.jpg','stationphone':'assets/illustration_11.jpg'};

const chapters = [
  {act:"ACT 1",kicker:"01 / THE TEAM",title:"一条消息，打破平静",sub:"校园新媒体运营团队",art:"夜色里的编辑室",img:"studio",body:"晚上九点多，校园新媒体工作室的灯还亮着。你们刚结束当天的选题讨论，群聊里突然跳出阿哲的一条消息。",dialogue:"小林：今天的运营任务终于结束啦。\n阿哲：等等，我刚刚在地铁上好像看到一件事。"},
  {act:"ACT 1",kicker:"02 / THE MOMENT",title:"地铁偶遇",sub:"事情发生得很突然",art:"车厢 · 21:19",img:"metro",body:"列车即将到站。车厢另一端，一名工作人员正与一位乘客交谈，周围的人慢慢围了过来。有人皱着眉，有人举起手机，也有人小声议论。你只看到了事情发生的一部分。",dialogue:"身边的乘客：刚刚好像有人摔倒了？到底发生什么了？"},
  {act:"ACT 1",kicker:"03 / THE VIDEO",title:"只有17秒",sub:"镜头记录了现场，却没有记录全部",art:"手机相册 · VIDEO 00:17",img:"phone",body:"你低头查看手机，发现自己拍下了一段17秒的视频。画面从争执已经发生时开始，没有前因，也没有完整的现场信息。视频是真的，但它能说明全部事实吗？",dialogue:"系统提示：视频已保存。\n你要把它发到运营群吗？"},
  {act:"ACT 1",kicker:"04 / THE GROUP CHAT",title:"四个人，四种想法",sub:"发布之前，团队出现了分歧",art:"运营群 · 4人在线",img:"team",body:"你把视频发进群里。几乎同时，三条不同意见弹了出来。每个人都觉得自己的判断有道理。",messages:[["阿哲","视频不完整，先核实一下。"],["小雨","当事人的脸要处理，注意隐私。"],["陈述","现在热度正好，发出去大家才会关注。"]]},
  {act:"ACT 1",kicker:"05 / YOUR DECISION",title:"你会怎么做？",sub:"一次发布决定，可能改变整个事件",art:"决定权交到你手中",img:"stationphone",body:"你现在拥有三种选择。没有一个选项可以让你完全避开代价。你会优先考虑传播速度、事实核查，还是当事人的权益？",dialogue:"陈述：小林，决定权交给你。我们接下来怎么做？",choices:[["A","立即发布","抢占传播先机，但信息不完整可能带来误导。"],["B","先核实视频","补充完整信息，但可能错过传播时机。"],["C","联系当事人","了解双方情况，同时注意隐私与采访边界。"]],choiceKey:"choice1"},

  {act:"ACT 2",kicker:"06 / TRENDING",title:"热搜开始发酵",sub:"网络舆论扩展了民主监督的对象与范围",art:"热搜与转发",img:"phone",dynamic:{
      A:"你选择了立即发布。不到半小时，视频就被不断转发，相关话题冲上本地热搜。公众把注意力迅速集中到地铁服务、工作人员态度与公共安全上。",
      B:"你选择了先核实视频。虽然你没有第一时间发出，但其他账号开始传播类似片段，舆论依然迅速升温。你意识到，慢一步并不意味着可以脱离公共议题。",
      C:"你选择了联系当事人。就在你准备沟通时，现场视频已在网上被大量转发。舆论先你一步发酵，公众开始追问：地铁系统到底发生了什么？"
    },dialogue:"讨论在不断扩散。有人在追问真相，也有人只抓住情绪最强烈的片段。"},
  {act:"ACT 2",kicker:"07 / PRIVATE MESSAGES",title:"居民私信涌来",sub:"公众提供的新线索，正在突破传统把关边界",art:"私信与线索",img:"stationphone",body:"你的后台收到越来越多私信。有人说自己也遇到过扶梯故障，有人反映老年人出行不便，还有人提供了更完整的目击信息。网络舆论正在把更多普通人的经验推到台前。",messages:[["社区居民","我妈妈上个月就在这里碰到扶梯停运。"],["通勤乘客","我看到了前面，是有人先差点摔倒。"],["热心网友","别只看17秒，问题可能在地铁设施本身。"]]},
  {act:"ACT 2",kicker:"08 / BIG V ENTERS",title:"大V入场，议题升级",sub:"新的意见领袖开始影响舆论走向",art:"评论与直播",img:"metro",body:"一位本地百万粉丝博主发出观点视频，事件迅速从单一争执，转向“城市公共服务是否足够友好”的讨论。议题被重新打包，更多人卷入进来。",messages:[["城市观察博主","如果真是设施问题，这不是一次偶发冲突，而是公共管理议题。"],["网友评论","希望官方回应，也希望大家别网暴当事人。"]]},
  {act:"ACT 2",kicker:"09 / FACT CHECK",title:"证据开始拼合",sub:"事实核查决定舆论是走向监督，还是走向误伤",art:"工作室再讨论",img:"team",dynamic:{
      A:"发布之后，你们开始补证。阿哲找到更完整的现场片段，小雨整理时间线，发现原视频确实遗漏了关键前情：乘客是因设施异常差点摔倒后情绪失控。",
      B:"因为没有急着发出，你们更早完成了核实。阿哲调取多方信息后确认，事件的核心并不是简单争执，而是一次由设施异常引发的公共服务问题。",
      C:"在与当事人沟通后，你们补足了最关键的信息：乘客原本在帮老人避让时差点跌倒，冲突只是后续结果，根本问题仍指向现场管理与无障碍设施。"
    },dialogue:"阿哲：完整信息出来了。\n小雨：如果要发，我们必须把事实链说清楚。"},
  {act:"ACT 2",kicker:"10 / OFFICIAL RESPONSE",title:"官方回应出现",sub:"网络舆论开始进入公共治理的反馈环节",art:"回应与整改",img:"studio",body:"当地地铁运营方发布说明，承认相关设施曾短时异常，并表示将开展排查、优化提示和无障碍服务流程。舆论开始从情绪宣泄，转向“是否真正整改”的追问。",dialogue:"官方回应：已对现场情况启动复核，并将公布后续整改进展。"},
  {act:"ACT 2",kicker:"11 / SECOND DECISION",title:"接下来，你还要怎么做？",sub:"监督不该结束在热搜，而要走向更负责的传播",art:"第二次选择",img:"studio",body:"事件已经有了初步回应，但讨论并没有结束。你的下一步，会影响这场网络舆论究竟停留在围观，还是真正推动治理。",choices:[["D","继续跟踪整改","关注后续变化，让监督不只停在情绪峰值。"],["E","发布更正说明","补充完整事实，主动修正片面传播带来的误差。"],["F","做议题复盘","把事件上升为公共议题，讨论网络舆论与民主监督的关系。"]],choiceKey:"choice2"},
  {act:"ACT 3",kicker:"12 / FOLLOW-UP",title:"热度退去之后",sub:"真正的监督，发生在热搜消失之后",art:"整改追踪",img:"studio",body:"几天后，相关话题的热度明显下降。你们回到最初的问题：地铁运营方承诺的排查和优化，究竟有没有落实？阿哲整理了公开回应，小雨把网友提供的线索按时间和地点分类。你们决定再做一次回访。",dialogue:"小雨：热搜可以过去，但公共问题不能只停留在回应里。"},
  {act:"ACT 3",kicker:"13 / PUBLIC FEEDBACK",title:"新的声音被听见",sub:"监督对象从一次现场事件，延伸到公共服务细节",art:"公众反馈",img:"stationphone",body:"后台又收到一些补充反馈：有人关注扶梯维护，有人关心无障碍通行，也有人建议增加现场提示。大家谈论的不再只是视频里的两个人，而是公共服务如何回应不同群体的真实需要。",messages:[["老年乘客","如果有清楚的提示，我们出行会安心很多。"],["轮椅使用者","希望整改时也考虑无障碍通道是否方便。"],["普通通勤者","能不能公开维护情况，让大家知道改到哪一步？"]]},
  {act:"ACT 3",kicker:"14 / KEEP WATCHING",title:"监督，还是到此为止？",sub:"让公众表达转化为持续、理性的公共参与",art:"第三次选择",img:"team",body:"你们准备发布一篇后续报道。团队提出了三种方向：持续跟进整改进度、整理公众建议并向运营方反馈，或把事件做成一次公共议题复盘。不同做法，会带来不同的参与路径。",choices:[["G","持续追踪整改","定期核对公开进展，用事实检验承诺是否落实。"],["H","汇总公众建议","整理不同群体的需求，推动公共服务回应更具体的问题。"],["I","制作议题复盘","呈现事件如何从一段视频发展为公共讨论，并反思传播边界。"]],choiceKey:"choice3"},
  {act:"ACT 3",kicker:"15 / DIFFERENT OUTCOMES",title:"你的行动，带来不同结果",sub:"网络舆论的价值，不只在于让问题被看见",art:"行动结果",img:"phone",dynamic:{
    G:"你们持续发布整改追踪。运营方陆续公开设施检查与提示优化进度，网友也能对照承诺查看变化。监督没有停在一次回应，而是形成了持续反馈。",
    H:"你们把居民、老年乘客和无障碍出行者的建议整理成清单，向运营方反馈。讨论从单一事件延伸到更多群体的公共服务体验，让过去不容易进入议程的需求被看见。",
    I:"你们制作了完整的事件复盘，呈现视频传播、网友补充线索、媒体跟进和官方回应的过程，也说明了片段传播可能造成的误读。更多同学开始讨论如何理性表达、核查信息并参与公共监督。"
  },dialogue:"阿哲：我们没有替公众下结论，而是把事实、问题和不同声音呈现出来。"},
  {act:"ACT 4",kicker:"16 / FINAL DECISION",title:"最后的选择",sub:"热搜之外，故事还没有结束",art:"最终决定",img:"stationphone",body:"事件已经得到初步回应，但你们仍要决定如何收尾。是继续跟进整改，还是暂时结束报道？此前发布的片段是否需要公开更正？你的决定将影响团队的公信力，也会影响公众如何理解这场事件。",choices:[
    ["J","继续追踪整改 + 公开更正","持续监督后续落实，同时主动说明此前视频信息不完整。"],
    ["K","继续追踪整改 + 发布补充","继续关注整改，但以补充说明的方式完善信息。"],
    ["L","继续追踪整改 + 不再说明","继续监督公共服务，但不主动回应此前信息偏差。"],
    ["M","暂告一段落 + 公开更正","结束持续跟进，并公开更正此前不完整的信息。"],
    ["N","暂告一段落 + 发布补充","暂时收束报道，以补充说明完善事件记录。"],
    ["O","暂告一段落 + 不再说明","结束报道，不再追加说明或后续追踪。"]
  ],choiceKey:"choice4"},
  {act:"ENDING",kicker:"ENDING / YOUR CONSEQUENCE",title:"你的最终结局",sub:"每一种选择，都留下不同的公共影响",art:"结局海报",img:"team",dynamicTitle:{J:"结局一：透明监督者",K:"结局二：持续跟进者",L:"结局三：监督有始有终",M:"结局四：主动纠错者",N:"结局五：谨慎收束者",O:"结局六：热度退场"},dynamicSub:{J:"持续追踪整改，并公开更正",K:"持续追踪整改，并补充信息",L:"继续监督，但留下信息缺口",M:"主动更正，暂时结束跟进",N:"补充说明后暂时收束",O:"结束报道，不再追加说明"},dynamic:{
    J:"你们继续跟进整改，并公开更正此前不完整的视频信息。团队承认信息缺口，也持续核对公共服务改进情况。虽然更正需要面对质疑，但透明和持续监督让报道重新建立了公信力。",
    K:"你们继续追踪整改，同时发布补充说明。报道逐渐补齐事实，但没有明确说明此前内容的局限。公众获得了更多信息，团队也意识到更正机制仍有完善空间。",
    L:"你们持续关注整改，却没有回应此前传播中的信息偏差。公共问题得到持续监督，但部分受众仍可能保留最初的片面印象。监督行动有价值，传播责任却留下了缺口。",
    M:"你们公开更正此前不完整的信息，并暂时结束持续报道。团队主动修正传播偏差，降低了误解，但整改是否落实仍需要其他公众和媒体继续关注。",
    N:"你们发布补充说明后暂时收束报道。事件脉络更加完整，但对后续整改的关注逐渐减弱，公众参与也可能随着热度下降而减少。",
    O:"你们结束报道，也没有进一步说明此前信息的局限。事件热度慢慢消退，但最初的片段可能继续影响部分人的判断。这是一次提醒：不回应，也是一种传播选择。"
  },isFinalEnding:true},
  {act:"PROFILE",kicker:"17 / YOUR PUBLIC OPINION PROFILE",title:"个人舆论档案",sub:"回看你的选择，看看自己如何参与公共讨论",art:"参与者画像",img:"phone",profile:true},
  {act:"RECAP",kicker:"18 / COURSE REVIEW",title:"课程回顾",sub:"从一次热搜，看见网络舆论与民主政治建设",art:"热搜之外",img:"stationphone",body:"网络舆论扩展了民主监督的对象和范围，让普通公众能够围绕公共服务提出问题、提供线索并参与讨论。它突破了传统议程设置与把关人的边界，使更多社会议题进入公共视野。与此同时，传播也可能出现信息失真、情绪裹挟和隐私侵害。因此，负责任的网络参与需要事实核查、理性表达、尊重个体，并持续关注公共问题是否得到回应。",recap:true}

];

let page = -1;
let choices = {choice1:"", choice2:"", choice3:"", choice4:""};
let confirmed = {choice1:false, choice2:false, choice3:false, choice4:false};
const totalPages = chapters.length + 1;
const $ = id => document.getElementById(id);

function choiceText(key,val){
  const chapter = chapters.find(c => c.choiceKey === key);
  if(!chapter || !chapter.choices) return "";
  const hit = chapter.choices.find(o => o[0] === val);
  return hit ? hit[1] : "";
}

function choiceFeedback(key,val){
  if(key === "choice1"){
    if(val === "A") return "视频可能迅速传播，但你也必须面对真实性与隐私质疑。";
    if(val === "B") return "你争取到了核实时间，但其他账号可能抢先发布。";
    return "你开始接触当事人，同时需要谨慎保护个人隐私。";
  }
  if(val === "D") return "你把重点放在持续监督上，让舆论从一时热度走向长效关注。";
  if(val === "E") return "你选择主动更正与补充，这能降低误伤，也提升传播公信力。";
  if(key === "choice2") return "你希望把个案上升为公共议题，让同学们理解舆论与民主监督的关系。";
  if(key === "choice4"){
    const feedbacks={
      J:"你同时选择持续监督与公开更正，兼顾公共责任和传播透明。",
      K:"你选择继续监督并补充信息，持续关注与信息完善并行。",
      L:"你重视整改追踪，但此前信息偏差仍需要回应。",
      M:"你主动更正信息，体现传播责任，但后续监督需要其他力量接续。",
      N:"你补充了事件信息，也选择暂时收束报道。",
      O:"你结束跟进且不再说明，舆论可能留下未被修正的认知偏差。"
    };
    return feedbacks[val] || "";
  }
  if(val === "G") return "你选择持续追踪整改，让公共监督形成连续的反馈。";
  if(val === "H") return "你把不同群体的声音汇总起来，让公共服务回应更具体的需求。";
  return "你用复盘呈现舆论形成过程，也反思传播中的责任与边界。";
}

function render(){
  $("cover").style.display = page < 0 ? "block" : "none";
  $("bottom").hidden = page < 0;
  $("count").textContent = page < 0
    ? "COVER / 01"
    : `${chapters[page].act} · ${String(page+2).padStart(2,"0")} / ${String(totalPages).padStart(2,"0")}`;
  $("progress").style.width = page < 0 ? "0%" : `${(page+2)/totalPages*100}%`;

  if(page < 0){ $("story").innerHTML = ""; return; }

  const c = chapters[page];
  const body = c.dynamic ? c.dynamic[ c.choiceKey ? (choices[c.choiceKey] || "A") : (c.isFinalEnding ? (choices.choice4 || "J") : (choices.choice1 || "A")) ] : c.body;
  let content = `<section class="screen active"><div class="scene-head"><div class="kicker">${c.kicker}</div><h1>${c.isFinalEnding ? c.dynamicTitle[choices.choice4 || "J"] : c.title}</h1><div class="subtitle">${c.isFinalEnding ? c.dynamicSub[choices.choice4 || "J"] : c.sub}</div></div>
  <div class="scene-art ${c.img ? 'has-image' : ''}">${c.img ? `<img src="${illustrationAssets[c.img]}" alt="${c.art}" loading="lazy">` : `<div class="art-caption"><div class="symbol">◇</div><div class="label">${c.art}</div></div>`}</div>
  <div class="prose"><p>${body}</p>`;

  if(c.dialogue){
    content += `<div class="dialogue"><div class="dialogue-label">现场记录 / MESSAGE</div><p>${c.dialogue.replace(/\n/g,"<br>")}</p></div>`;
  }
  if(c.messages){
    content += `<div class="chat">${c.messages.map(m => `<div class="message"><span class="avatar">${m[0][0]}</span><div class="bubble"><b>${m[0]}</b><br>${m[1]}</div></div>`).join("")}</div>`;
  }
  if(c.choices){
    content += `<div class="choices">${c.choices.map(o => `<button class="choice ${choices[c.choiceKey]===o[0] ? 'selected' : ''}" data-choice="${o[0]}" data-key="${c.choiceKey}"><span class="letter">${o[0]}</span><span><strong>${o[1]}</strong><small>${o[2]}</small></span></button>`).join("")}</div>`;
    if(confirmed[c.choiceKey]){
      content += `<div class="feedback"><b>选择已记录：${choiceText(c.choiceKey, choices[c.choiceKey])}</b>${choiceFeedback(c.choiceKey, choices[c.choiceKey])}</div>`;
    }
  }
  if(c.summary){
    const persona = choices.choice3==="G" ? "持续监督型参与者" : choices.choice3==="H" ? "公共协商型参与者" : "理性传播型参与者";
    const personaDesc = choices.choice3==="G" ? "你更关注承诺是否落实，愿意把监督延伸到热度退去之后。" : choices.choice3==="H" ? "你善于收集不同群体的经验，让被忽略的需求进入公共议程。" : "你重视信息核查与传播责任，愿意帮助公众看见完整事实。";
    content += `<div class="feedback"><b>你的舆论参与者画像｜${persona}</b>${personaDesc}<br><br><b>你的三次关键选择</b><br>第一次：${choiceText("choice1", choices.choice1)}<br>第二次：${choiceText("choice2", choices.choice2)}<br>第三次：${choiceText("choice3", choices.choice3)}<br><br>网络舆论让公众能够提出问题、补充线索、监督公共服务，也突破了传统议程设置与把关人的边界。但传播越快，越需要事实核查、理性表达和对个人权利的尊重。</div>`;
  }

  if(c.profile){
    const correction = ["J","M"].includes(choices.choice4) ? 3 : ["K","N"].includes(choices.choice4) ? 2 : 0;
    const followup = ["J","K","L"].includes(choices.choice4) ? 3 : 1;
    const fact = (choices.choice1==="B" ? 3 : choices.choice1==="C" ? 2 : 1) + correction;
    const influence = (choices.choice1==="A" ? 3 : choices.choice1==="B" ? 2 : 1) + (["G","H","I"].includes(choices.choice3)?2:1);
    const emotion = choices.choice2==="D" ? 2 : choices.choice2==="E" ? 1 : 3;
    const responsibility = (choices.choice1!=="A" ? 2 : 1) + (["J","K","M","N"].includes(choices.choice4)?2:0);
    const bars = [["事实核查意识",fact],["舆论影响力",influence],["情绪卷入度",emotion],["公共责任感",responsibility]];
    content += `<div class="profile-card">${bars.map(([label,val])=>`<div class="profile-row"><div class="profile-label"><span>${label}</span><b>${Math.min(5,val)}/5</b></div><div class="profile-track"><i style="width:${Math.min(5,val)*20}%"></i></div></div>`).join("")}<p class="profile-note">档案根据你在故事中的选择生成，用于课堂讨论，不代表真实人格测评。</p><div class="feedback"><b>你的最终决定</b>${choiceText("choice4",choices.choice4)}<br><br>继续跟进整改：${followup===3?"是":"暂时告一段落"}<br>信息处理：${correction===3?"公开更正":correction===2?"补充说明":"未追加说明"}</div></div>`;
  }
  if(c.recap){
    content += `<div class="recap-grid"><div><b>监督对象与范围</b><p>从单一现场冲突，扩展到公共设施、服务流程与不同群体的出行需求。</p></div><div><b>议程设置边界</b><p>普通用户提供的线索和经验，也可能推动议题进入公共讨论。</p></div><div><b>把关人边界</b><p>媒体不再是唯一的信息入口，公众、当事人和意见领袖都可能参与传播。</p></div><div><b>公众参与与民主治理</b><p>表达、核查、协商和持续监督，让网络舆论有机会转化为公共治理反馈。</p></div></div>`;
  }

  let btnText = "继续　→";
  if(c.choices) btnText = confirmed[c.choiceKey] ? "继续进入下一页" : "确认我的选择";
  else if(c.isFinalEnding) btnText = "查看个人舆论档案";
  else if(c.profile) btnText = "查看课程回顾";
  else if(c.recap) btnText = "重新体验";
  else if(page === chapters.length - 1) btnText = "返回封面";
  content += `<div class="controls"><button class="primary" id="next">${btnText}</button></div></div></section>`;
  $("story").innerHTML = content;

  if(c.choices){
    document.querySelectorAll("[data-choice]").forEach(btn => {
      btn.onclick = () => {
        choices[btn.dataset.key] = btn.dataset.choice;
        confirmed[btn.dataset.key] = false;
        render();
      };
    });
  }

  $("next").onclick = () => {
    if(c.isFinalEnding){
      page++;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
      return;
    }
    if(c.profile){
      page++;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
      return;
    }
    if(c.recap){
      page = -1;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
      return;
    }
    if(c.isEnding){
      page = chapters.length - 1;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
      return;
    }
    if(c.choices){
      if(!choices[c.choiceKey]) return;
      if(!confirmed[c.choiceKey]) {
        confirmed[c.choiceKey] = true;
        render();
      } else {
        if(c.choiceKey === "choice3") {
          page++;
          render();
          window.scrollTo({top:0, behavior:"smooth"});
        } else if(c.choiceKey === "choice4") {
          page++;
          render();
          window.scrollTo({top:0, behavior:"smooth"});
        } else if(c.isEnding) {
          page = chapters.length - 1;
          render();
          window.scrollTo({top:0, behavior:"smooth"});
        } else if(page < chapters.length - 1) {
          page++;
          render();
          window.scrollTo({top:0, behavior:"smooth"});
        } else {
          page = -1;
          render();
          window.scrollTo({top:0, behavior:"smooth"});
        }
      }
    } else {
      if(page < chapters.length - 1) {
        page++;
        render();
        window.scrollTo({top:0, behavior:"smooth"});
      } else {
        page = -1;
        render();
        window.scrollTo({top:0, behavior:"smooth"});
      }
    }
  };
  $("back").disabled = page === 0;
}

$("start").onclick = () => {
  page = 0;
  render();
  window.scrollTo({top:0, behavior:"smooth"});
};
$("back").onclick = () => {
  if(page > 0){
    page--;
    render();
    window.scrollTo({top:0, behavior:"smooth"});
  }
};
$("again").onclick = () => {
  page = -1;
  choices = {choice1:"", choice2:"", choice3:"", choice4:""};
  confirmed = {choice1:false, choice2:false, choice3:false, choice4:false};
  render();
  window.scrollTo({top:0, behavior:"smooth"});
};
render();
