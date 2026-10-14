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
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
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
      label: "A connected clinic day",
      title: "From arrival to receipt, without losing the thread.",
      description: "Online bookings, phone bookings and walk-ins appear in the same operating view. Staff can check people in, issue tokens and update appointment status as the clinic moves through the day.",
      bullets: [
        "Keep a single view of today's schedule",
        "Track normal, priority and emergency-marked arrivals",
        "Hand off the patient to consultation and billing"
      ],
      visual: `
        <div class="mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>Appointments</strong><small>Today</small></div>
          <div class="mini-toolbar"><span>All visits <b>24</b></span><span>Waiting <b>5</b></span><span>Completed <b>8</b></span></div>
          <div class="mini-table-head"><span>Patient / token</span><span>Type</span><span>Status</span></div>
          <div class="mini-table-row"><span><b>Token 08</b><small>Meera K.</small></span><em class="tag-normal">Normal</em><span class="mini-status">Waiting</span></div>
          <div class="mini-table-row"><span><b>Token 09</b><small>Arjun S.</small></span><em class="tag-priority">Priority</em><span class="mini-status">Checked in</span></div>
          <div class="mini-table-row"><span><b>Token 10</b><small>R. Khan</small></span><em class="tag-online">Online</em><span class="mini-status">Confirmed</span></div>
          <div class="mini-table-row"><span><b>Token 11</b><small>P. Joshi</small></span><em class="tag-normal">Normal</em><span class="mini-status">Booked</span></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> Illustrative interface · Not live patient data</div>
        </div>`
    },
    patient: {
      label: "A doctor-ready patient view",
      title: "Relevant history in one place, with the source still available.",
      description: "A patient overview can bring prior visit notes, recorded medicines, allergies and follow-up tasks together. An AI-generated brief would help the doctor prepare, while keeping the original record one step away.",
      bullets: [
        "Review the visit timeline without opening each record separately",
        "See what information is missing or may need confirmation",
        "Keep the clinician responsible for reviewing and acting on the record"
      ],
      visual: `
        <div class="mini-window patient-mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>Patient overview</strong><small>Sample record</small></div>
          <div class="patient-mini-profile"><span class="patient-avatar">MK</span><div><b>Meera K., 58 F</b><small>Example patient · Fictional data</small></div><span class="sample-chip">Example</span></div>
          <div class="patient-mini-summary"><div><span class="ai-spark">✳</span><b>Patient brief <em class="review-required">Review required</em></b></div><p><strong>Last visit 12 Aug:</strong> knee pain; advised rest. Allergy recorded: <strong>Penicillin</strong>. <strong>1 follow-up pending.</strong></p><button class="source-link source-link-action source-note-open" type="button" data-open-source-notes>↳ Source notes one tap away</button></div>
          <div class="patient-mini-timeline"><div><i></i><span><b>12 Aug · Consultation</b><small>Knee pain · rest advised</small></span></div><div><i></i><span><b>Recorded allergy</b><small>Penicillin · confirm with patient</small></span></div><div><i></i><span><b>Follow-up</b><small>One follow-up pending</small></span></div></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> Illustrative interface · Clinician must verify summary</div>
        </div>`
    },
    revenue: {
      label: "A clearer business view",
      title: "Understand activity, collections and questions that need attention.",
      description: "Daily and monthly reports can help owners review patient volume, completed visits, revenue, expenses and outstanding bills. Reconciliation and stock records help turn totals into information the owner can act on.",
      bullets: [
        "Compare recorded daily, monthly and yearly collections",
        "Review expenses, stock movement and unpaid invoices",
        "Flag possible prescription-to-dispensing gaps for follow-up—not assume every gap is a lost sale"
      ],
      visual: `
        <div class="mini-window revenue-mini-window">
          <div class="mini-window-bar"><span></span><span></span><span></span><strong>Owner's overview</strong><small>This month</small></div>
          <div class="revenue-mini-kpis"><div><small>Patients seen</small><b>—</b><span>Recorded visits</span></div><div><small>Collections</small><b>₹ —</b><span>Recorded payments</span></div></div>
          <div class="revenue-mini-chart"><div class="chart-caption"><strong>Revenue and expenses</strong><small>Illustrative trend</small></div><div class="bar-chart"><span style="--bar:47%"><i></i><small>W1</small></span><span style="--bar:68%"><i></i><small>W2</small></span><span style="--bar:55%"><i></i><small>W3</small></span><span style="--bar:83%"><i></i><small>W4</small></span></div><div class="chart-key"><span><i class="legend-dot teal-dot"></i>Revenue</span><span><i class="legend-dot gold-dot"></i>Expenses</span></div></div>
          <div class="revenue-mini-alert"><span>!</span><div><b>Items to review</b><small>Unpaid bills · Low stock · Missing entries</small></div></div>
          <div class="mini-window-foot"><span class="tiny-check">✓</span> Illustrative interface · Not actual clinic data</div>
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

  // Patient overview preview tabs
  const briefTabs = [...document.querySelectorAll(".brief-tab")];
  const briefContent = document.querySelector("#brief-content");
  const briefViews = {
    summary: `
      <div class="brief-heading"><span class="ai-spark">✳</span><div><strong>Patient brief <em class="review-required">Review required</em></strong><small>Generated from available record entries</small></div></div>
      <div class="patient-name-line"><strong>Meera K., 58 F</strong><span>Illustrative example · Fictional data</span></div>
      <div class="summary-point"><span>01</span><p><strong>Last visit 12 Aug:</strong> knee pain; advised rest.</p></div>
      <div class="summary-point"><span>02</span><p><strong>Allergy recorded:</strong> <strong class="allergy-emphasis">Penicillin</strong>.</p></div>
      <div class="summary-point"><span>03</span><p><strong>1 follow-up pending.</strong> Confirm its status with the patient.</p></div>
      <button class="source-link source-link-action source-note-open" type="button" data-open-source-notes><span class="source-mark">↳</span> Source notes one tap away</button>`,
    timeline: `
      <div class="brief-heading"><span class="ai-spark">◷</span><div><strong>Previous visits</strong><small>Example timeline from available records</small></div></div>
      <div class="summary-point"><span>12</span><p><strong>12 Aug · Consultation</strong><br>Knee pain recorded; rest advised.</p></div>
      <div class="summary-point"><span>26</span><p><strong>Allergy record</strong><br>Penicillin listed; confirm with patient.</p></div>
      <div class="summary-point"><span>01</span><p><strong>Follow-up</strong><br>One follow-up remains pending.</p></div>
      <button class="source-link source-link-action source-note-open" type="button" data-open-source-notes><span class="source-mark">↳</span> Source notes one tap away</button>`,
    medicines: `
      <div class="brief-heading"><span class="ai-spark">＋</span><div><strong>Recorded medicines</strong><small>Confirm with the patient before relying on this list</small></div></div>
      <div class="summary-point"><span>01</span><p><strong>Prescription entry</strong><br>Medicine name, dose and duration as recorded in the original prescription.</p></div>
      <div class="summary-point"><span>02</span><p><strong>Allergy record</strong><br>Check whether an allergy is recorded and ask the patient to confirm current information.</p></div>
      <div class="summary-point"><span>03</span><p><strong>Current use not confirmed</strong><br>A past prescription does not prove that the patient still takes that medicine.</p></div>
      <div class="source-link"><span class="source-mark">↳</span> Open the original prescription for clinical review</div>`
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
        "Hello Mr. Shashank Awasthi,",
        "I would like to discuss the VaidyaLoop clinic management concept.",
        "",
        `Name: ${value("name")}`,
        `Role: ${value("role")}`,
        `Clinic / hospital: ${value("clinic")}`,
        `City / town: ${value("city")}`,
        `Clinic size: ${value("size")}`,
        `Main area of interest: ${value("interest")}`
      ];
      if (value("notes")) lines.push(`Additional notes: ${value("notes")}`);
      lines.push("", "Please let me know a suitable time to discuss the workflow and current product concept.");
      const message = lines.join("\n");
      const url = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
      if (formStatus) {
        formStatus.classList.remove("form-status-error");
        formStatus.textContent = `Opening WhatsApp to ${CONTACT_LABEL}. Review the prefilled message and send it when ready.`;
      }
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        if (formStatus) {
          formStatus.textContent = "Your message is ready. Use this link to continue to WhatsApp.";
          const link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = " Open WhatsApp";
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
      rosterToggle.firstChild.textContent = expanded ? "See what the planner considers " : "Hide planning rules ";
    });
  }

  // Set current year in footer.
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
