(function () {
  "use strict";

  const CONTACT_NUMBER = "916306028342";
  const CONTACT_LABEL = "+91 6306028342";

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  if (menuToggle && primaryNav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "मेन्यू खोलें");
      primaryNav.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "मेन्यू खोलें" : "मेन्यू बंद करें");
      primaryNav.classList.toggle("is-open", !isOpen);
    });

    primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  // Interactive platform preview: three views, all using illustrative sample data.
  const platformTabs = [...document.querySelectorAll(".platform-tab")];
  const panel = document.querySelector("#platform-panel");
  const panelLabel = document.querySelector("#panel-label");
  const panelTitle = document.querySelector("#panel-title");
  const panelDescription = document.querySelector("#panel-description");
  const panelList = document.querySelector("#panel-list");
  const panelVisual = document.querySelector("#panel-visual");

  const platformViews = {
    flow: {
      label: "क्लिनिक का पूरा दिन एक जगह",
      title: "मरीज के आने से रसीद तक, रिकॉर्ड साथ-साथ।",
      description: "ऑनलाइन बुकिंग, फोन पर बुकिंग और सीधे आए मरीज एक ही सूची में दिखें। स्टाफ टोकन दे सके और मरीज की स्थिति अपडेट कर सके।",
      bullets: [
        "आज के सभी अपॉइंटमेंट एक जगह देखें",
        "सामान्य, प्राथमिकता और आपात स्थिति वाले मरीज पहचानें",
        "डॉक्टर की मुलाकात और बिलिंग तक रिकॉर्ड साथ रहे"
      ],
      visual: `
        <div class="mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>अपॉइंटमेंट</strong><small>आज</small></div>
          <div class="mini-toolbar"><span>कुल विज़िट <b>24</b></span><span>इंतज़ार <b>5</b></span><span>पूरे हुए <b>8</b></span></div>
          <div class="mini-table-head"><span>मरीज / टोकन</span><span>प्रकार</span><span>स्थिति</span></div>
          <div class="mini-table-row"><span><b>टोकन 08</b><small>Meera K.</small></span><em class="tag-normal">सामान्य</em><span class="mini-status">इंतज़ार</span></div>
          <div class="mini-table-row"><span><b>टोकन 09</b><small>Arjun S.</small></span><em class="tag-priority">प्राथमिकता</em><span class="mini-status">Checked in</span></div>
          <div class="mini-table-row"><span><b>टोकन 10</b><small>आर. खान</small></span><em class="tag-online">ऑनलाइन</em><span class="mini-status">पुष्टि हुई</span></div>
          <div class="mini-table-row"><span><b>टोकन 11</b><small>पी. जोशी</small></span><em class="tag-normal">सामान्य</em><span class="mini-status">बुक हुआ</span></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> स्क्रीन का उदाहरण · असली मरीज का डेटा नहीं</div>
        </div>`
    },
    patient: {
      label: "डॉक्टर के लिए तैयार मरीज की जानकारी",
      title: "ज़रूरी हिस्ट्री एक जगह, मूल रिकॉर्ड भी उपलब्ध।",
      description: "मरीज की पिछली विज़िट, दर्ज दवाइयाँ, एलर्जी और फॉलो-अप एक जगह दिख सकते हैं। AI सार से डॉक्टर तैयारी कर सकेंगे और मूल रिकॉर्ड भी खोल सकेंगे।",
      bullets: [
        "हर रिकॉर्ड अलग खोले बिना विज़िट की हिस्ट्री देखें",
        "कौन-सी जानकारी अधूरी है या पुष्टि चाहिए, देखें",
        "रिकॉर्ड की जाँच और फैसले की जिम्मेदारी डॉक्टर की रहे"
      ],
      visual: `
        <div class="mini-window patient-mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>मरीज की जानकारी</strong><small>उदाहरण रिकॉर्ड</small></div>
          <div class="patient-mini-profile"><span class="patient-avatar">MK</span><div><b>मीरा K., 58 वर्ष</b><small>काल्पनिक मरीज का उदाहरण</small></div><span class="sample-chip">उदाहरण</span></div>
          <div class="patient-mini-summary"><div><span class="ai-spark">✳</span><b>मरीज का सार <em class="review-required">जाँच ज़रूरी</em></b></div><p><strong>पिछली विज़िट 12 अगस्त:</strong> घुटने में दर्द; आराम की सलाह। दर्ज एलर्जी: <strong>पेनिसिलिन</strong>। <strong>1 फॉलो-अप बाकी।</strong></p><button class="source-link source-link-action source-note-open" type="button" data-open-source-notes>↳ मूल नोट एक टैप में देखें</button></div>
          <div class="patient-mini-timeline"><div><i></i><span><b>12 अगस्त · मुलाकात</b><small>घुटने में दर्द · आराम की सलाह</small></span></div><div><i></i><span><b>दर्ज एलर्जी</b><small>पेनिसिलिन · मरीज से पुष्टि करें</small></span></div><div><i></i><span><b>फॉलो-अप</b><small>1 फॉलो-अप बाकी</small></span></div></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> उदाहरण स्क्रीन · डॉक्टर सार की जाँच करें</div>
        </div>`
    },
    revenue: {
      label: "कारोबार की साफ जानकारी",
      title: "काम, जमा राशि और ध्यान देने वाली बातों को समझें।",
      description: "रोज़ और महीने की रिपोर्ट से मरीजों की संख्या, पूरी हुई विज़िट, कमाई, खर्च और बकाया देखें। हिसाब और स्टॉक रिकॉर्ड से अगला कदम तय करने में मदद मिलेगी।",
      bullets: [
        "रोज़, महीने और साल की जमा राशि की तुलना करें",
        "खर्च, स्टॉक की आवाजाही और बकाया बिल देखें",
        "पर्ची और दवा देने के रिकॉर्ड में अंतर दिखाएँ; हर अंतर को खोई बिक्री न मानें"
      ],
      visual: `
        <div class="mini-window revenue-mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>मालिक का सार</strong><small>इस महीने</small></div>
          <div class="revenue-mini-kpis"><div><small>देखे गए मरीज</small><b>—</b><span>दर्ज विज़िट</span></div><div><small>जमा राशि</small><b>₹ —</b><span>दर्ज भुगतान</span></div></div>
          <div class="revenue-mini-chart"><div class="chart-caption"><strong>कमाई और खर्च</strong><small>उदाहरण रुझान</small></div><div class="bar-chart"><span style="--bar:47%"><i></i><small>W1</small></span><span style="--bar:68%"><i></i><small>W2</small></span><span style="--bar:55%"><i></i><small>W3</small></span><span style="--bar:83%"><i></i><small>W4</small></span></div><div class="chart-key"><span><i class="legend-dot teal-dot"></i>कमाई</span><span><i class="legend-dot gold-dot"></i>खर्च</span></div></div>
          <div class="revenue-mini-alert"><span>!</span><div><b>जाँचने वाली बातें</b><small>बकाया बिल · कम स्टॉक · अधूरी एंट्री</small></div></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> उदाहरण स्क्रीन · असली क्लिनिक का डेटा नहीं</div>
        </div>`
    }
  };

  function setPlatformView(viewName, clickedTab) {
    const view = platformViews[viewName];
    if (!view || !panel) return;
    platformTabs.forEach((tab) => {
      const active = tab === clickedTab;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", clickedTab ? clickedTab.id : "tab-flow");
    panelLabel.textContent = view.label;
    panelTitle.textContent = view.title;
    panelDescription.textContent = view.description;
    panelList.replaceChildren(...view.bullets.map((text) => {
      const li = document.createElement("li");
      const mark = document.createElement("span");
      mark.textContent = "✓";
      li.append(mark, document.createTextNode(text));
      return li;
    }));
    panelVisual.innerHTML = view.visual;
  }

  platformTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setPlatformView(tab.dataset.view, tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % platformTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + platformTabs.length) % platformTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = platformTabs.length - 1;
      platformTabs[nextIndex].focus();
      setPlatformView(platformTabs[nextIndex].dataset.view, platformTabs[nextIndex]);
    });
  });

  // मरीज की जानकारी preview tabs
  const briefTabs = [...document.querySelectorAll(".brief-tab")];
  const briefContent = document.querySelector("#brief-content");
  const briefViews = {
    summary: `
      <div class="brief-heading"><span class="ai-spark">✳</span><div><strong>मरीज का सार <em class="review-required">जाँच ज़रूरी</em></strong><small>दर्ज रिकॉर्ड के आधार पर बनाया गया</small></div></div>
      <div class="patient-name-line"><strong>मीरा K., 58 वर्ष</strong><span>काल्पनिक उदाहरण</span></div>
      <div class="summary-point"><span>01</span><p><strong>पिछली विज़िट 12 अगस्त:</strong> घुटने में दर्द; आराम की सलाह।</p></div>
      <div class="summary-point"><span>02</span><p><strong>दर्ज एलर्जी:</strong> <strong class="allergy-emphasis">पेनिसिलिन</strong>।</p></div>
      <div class="summary-point"><span>03</span><p><strong>1 फॉलो-अप बाकी।</strong> मरीज से स्थिति की पुष्टि करें।</p></div>
      <button class="source-link source-link-action source-note-open" type="button" data-open-source-notes><span class="source-mark">↳</span> मूल नोट एक टैप में देखें</button>`,
    timeline: `
      <div class="brief-heading"><span class="ai-spark">◷</span><div><strong>पिछली विज़िट</strong><small>दर्ज रिकॉर्ड की उदाहरण टाइमलाइन</small></div></div>
      <div class="summary-point"><span>12</span><p><strong>12 अगस्त · मुलाकात</strong><br>घुटने में दर्द दर्ज; आराम की सलाह।</p></div>
      <div class="summary-point"><span>26</span><p><strong>एलर्जी का रिकॉर्ड</strong><br>पेनिसिलिन दर्ज है; मरीज से पुष्टि करें।</p></div>
      <div class="summary-point"><span>01</span><p><strong>फॉलो-अप</strong><br>एक फॉलो-अप बाकी है।</p></div>
      <button class="source-link source-link-action source-note-open" type="button" data-open-source-notes><span class="source-mark">↳</span> मूल नोट एक टैप में देखें</button>`,
    medicines: `
      <div class="brief-heading"><span class="ai-spark">＋</span><div><strong>दर्ज दवाइयाँ</strong><small>इस सूची पर भरोसा करने से पहले मरीज से पुष्टि करें</small></div></div>
      <div class="summary-point"><span>01</span><p><strong>पर्ची में दर्ज दवा</strong><br>मूल पर्ची में दर्ज दवा का नाम, मात्रा और अवधि।</p></div>
      <div class="summary-point"><span>02</span><p><strong>एलर्जी का रिकॉर्ड</strong><br>देखें कि एलर्जी दर्ज है या नहीं, और मरीज से मौजूदा जानकारी की पुष्टि करें।</p></div>
      <div class="summary-point"><span>03</span><p><strong>अभी दवा लेने की पुष्टि नहीं</strong><br>पुरानी पर्ची से यह साबित नहीं होता कि मरीज आज भी वह दवा ले रहा है।</p></div>
      <div class="source-link"><span class="source-mark">↳</span> डॉक्टर की जाँच के लिए मूल पर्ची खोलें</div>`
  };

  briefTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      briefTabs.forEach((other) => {
        const active = other === tab;
        other.classList.toggle("active", active);
        other.setAttribute("aria-selected", String(active));
      });
      if (briefContent && briefViews[tab.dataset.brief]) {
        briefContent.innerHTML = briefViews[tab.dataset.brief];
      }
    });
  });

  // Demo-only booking slot selection. This does not create an appointment.
  document.querySelectorAll(".slot-choice").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("selected")));
    button.addEventListener("click", () => {
      const group = button.closest(".slot-grid");
      if (!group) return;
      group.querySelectorAll(".slot-choice").forEach((other) => {
        const active = other === button;
        other.classList.toggle("selected", active);
        other.setAttribute("aria-pressed", String(active));
      });
    });
  });

  // Demo request: hand off to WhatsApp with a prefilled message. No server stores form data.
  const demoForm = document.querySelector("#demo-form");
  const formStatus = document.querySelector("#form-status");
  if (demoForm) {
    demoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!demoForm.reportValidity()) return;
      const data = new FormData(demoForm);
      const value = (key) => String(data.get(key) || "").trim();
      const lines = [
        "नमस्ते श्री शशांक अवस्थी जी,",
        "मैं VaidyaLoop के क्लिनिक मैनेजमेंट सिस्टम के बारे में बात करना चाहता/चाहती हूँ।",
        "",
        `नाम: ${value("name")}`,
        `भूमिका: ${value("role")}`,
        `क्लिनिक / अस्पताल: ${value("clinic")}`,
        `शहर / कस्बा: ${value("city")}`,
        `क्लिनिक का आकार: ${value("size")}`,
        `मुख्य ज़रूरत: ${value("interest")}`
      ];
      if (value("notes")) lines.push(`अतिरिक्त जानकारी: ${value("notes")}`);
      lines.push("", "कृपया इस सिस्टम और हमारे काम की ज़रूरत पर बात करने के लिए सही समय बताएं।");
      const message = lines.join("\n");
      const url = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
      if (formStatus) {
        formStatus.classList.remove("form-status-error");
        formStatus.textContent = `WhatsApp खोला जा रहा है: ${CONTACT_LABEL}. तैयार संदेश पढ़ें और सही लगे तो भेजें।`;
      }
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        if (formStatus) {
          formStatus.textContent = "आपका संदेश तैयार है। WhatsApp पर जाने के लिए यह लिंक खोलें।";
          const link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = " WhatsApp खोलें";
          link.className = "whatsapp-fallback-link";
          formStatus.append(link);
        }
      }
    });
  }

  // Open the source note when the patient-brief affordance is selected, including after dynamic tab swaps.
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-source-notes]");
    if (!trigger) return;
    const details = document.querySelector("#notes-example");
    if (!details) return;
    details.open = true;
    details.scrollIntoView({ behavior: "smooth", block: "nearest" });
    const summary = details.querySelector("summary");
    if (summary) summary.focus({ preventScroll: true });
  });

  // Show/hide the roster planner's explanatory draft rules. This is a UI illustration, not a live AI scheduler.
  const rosterToggle = document.querySelector(".roster-explain-toggle");
  const rosterDetail = document.querySelector("#roster-rule-detail");
  if (rosterToggle && rosterDetail) {
    rosterToggle.addEventListener("click", () => {
      const expanded = rosterToggle.getAttribute("aria-expanded") === "true";
      rosterToggle.setAttribute("aria-expanded", String(!expanded));
      rosterDetail.hidden = expanded;
      rosterToggle.querySelector("span").textContent = expanded ? "＋" : "−";
      rosterToggle.firstChild.textContent = expanded ? "प्लानर किन बातों को देखेगा " : "नियम छिपाएँ ";
    });
  }

  // Set current year in footer.
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
