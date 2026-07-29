/* =========================================================
   26MKM501 — Marketing Management course site
   Schedule data + interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Session topics, in calendar order (53 sessions) ---- */
  var SESSIONS = [
    ["ORNT", "Orientation & Course Introduction"],
    ["U1", "Marketing Management: Nature & Scope"],
    ["U1", "Evolution from Traditional 4Ps to Digital 4Cs"],
    ["U1", "Selling vs Marketing"],
    ["U1", "CRM and E-CRM"],
    ["U1", "Emerging role of marketing in the digital age"],
    ["U1", "Marketing Environment: Concept & Need for Study"],
    ["U1", "Search, Social, Mobile ecosystems & impact on decisions"],
    ["U1", "Case Study: Transitioning to Digital CRM (Shiksha)"],
    ["U2", "Consumer vs Organizational Buyer"],
    ["U2", "Characteristics & Determinants of Consumer Behaviour"],
    ["U2", "Theories of Consumer Behaviour"],
    ["U2", "Consumer Decision-Making Process"],
    ["U2", "Market Segmentation: Bases of segmenting consumer markets"],
    ["U2", "Digital footprints & online buying behaviour"],
    ["U2", "Micro-segmentation & Positioning"],
    ["U2", "Case Study: Decoding the Gamer"],
    ["ASSESS", "Internal Assessment 1 (Units 1\u20132)"],
    ["U3", "Concept of Product & Classification"],
    ["U3", "Product Line and Mix"],
    ["U3", "Branding, Packaging, Customer Services"],
    ["U3", "Digital Products and Virtual Services"],
    ["U3", "New Product Development & Product Life Cycle"],
    ["U3", "Pricing as a Marketing Variable; Price vs Non-Price Competition"],
    ["U3", "Freemium & Subscription Models; Pricing Policies & Strategies"],
    ["U3", "Case Study: The Digital Agency Model"],
    ["ACTIVITY", "Gamified Quiz / Experiential Learning Activity 1"],
    ["U4", "Why Intermediaries are Used; Channel Functions"],
    ["U4", "Selecting Channels; Determining Intensity"],
    ["U4", "Channel Management Decisions"],
    ["U4", "E-commerce Platforms and D2C Models"],
    ["U4", "Manufacturer\u2013Distributor Relationship"],
    ["U4", "Retailing and Wholesaling"],
    ["U4", "Omnichannel Logistics"],
    ["U4", "Case Study: Event Marketing Distribution (TEDx)"],
    ["U4", "Unit 4 Recap & Application Exercise"],
    ["ASSESS", "Internal Assessment 2 (Units 3\u20134)"],
    ["ACTIVITY", "Guest Lecture / Industry Expert Session"],
    ["U5", "Nature, Objectives, Promotion Mix"],
    ["U5", "Advertising; Personal Selling"],
    ["U5", "Public Relations; Sales Promotion"],
    ["U5", "Search Engine Optimization (SEO)"],
    ["U5", "Social Media Marketing; Google Ads"],
    ["U5", "Consumerism & Consumer Protection Measures in India"],
    ["U5", "Data Privacy & Ethical Digital Advertising"],
    ["U5", "Case Study: Hyper-Local SEO & Promotion"],
    ["U5", "Unit 5 Recap & Course Wrap-up"],
    ["ACTIVITY", "Gamified Quiz / Experiential Learning Activity 2"],
    ["REVISION", "Revision Session 1 (Units 1\u20133)"],
    ["REVISION", "Revision Session 2 (Units 4\u20135)"],
    ["BUFFER", "Doubt Clearing / Buffer"],
    ["BUFFER", "Doubt Clearing / Buffer"],
    ["WRAPUP", "Exit Ticket, Course Feedback & Wrap-up"]
  ];

  var TAG_COLOR = {
    U1: "var(--u1)", U2: "var(--u2)", U3: "var(--u3)", U4: "var(--u4)", U5: "var(--u5)",
    ORNT: "var(--ink-soft)", ASSESS: "var(--ink-soft)", ACTIVITY: "var(--ink-soft)",
    REVISION: "var(--ink-soft)", BUFFER: "var(--ink-soft)", WRAPUP: "var(--ink-soft)"
  };
  var TAG_LABEL = {
    U1: "Unit 1", U2: "Unit 2", U3: "Unit 3", U4: "Unit 4", U5: "Unit 5",
    ORNT: "Orient.", ASSESS: "Assess", ACTIVITY: "Activity",
    REVISION: "Revision", BUFFER: "Buffer", WRAPUP: "Wrap-up"
  };
  var DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  /* ---- Build the real Mon/Tue/Wed dates between 1 Sep and 30 Dec 2026 ---- */
  function buildDates() {
    var start = new Date(2026, 8, 1);   // 1 Sep 2026
    var end = new Date(2026, 11, 30);   // 30 Dec 2026
    var dates = [];
    for (var d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      var day = d.getDay();
      if (day >= 1 && day <= 3) dates.push(new Date(d));
    }
    return dates;
  }

  function fmtDate(d) {
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    return dd + "-" + mm + "-2026";
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  /* ---- Populate the schedule table ---- */
  var dates = buildDates();
  var tbody = document.getElementById("scheduleBody");
  var today = new Date();
  var frag = document.createDocumentFragment();
  var nextRowInfo = null;

  dates.forEach(function (d, i) {
    var entry = SESSIONS[i];
    if (!entry) return;
    var tag = entry[0], topic = entry[1];

    var tr = document.createElement("tr");
    tr.dataset.tag = tag;

    var isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var isToday = sameDay(d, today);
    if (isToday) tr.classList.add("row-today");
    else if (isPast) tr.classList.add("row-past");

    if (!nextRowInfo && !isPast) nextRowInfo = { date: d, topic: topic };

    tr.innerHTML =
      "<td>" + (i + 1) + "</td>" +
      "<td>" + fmtDate(d) + "</td>" +
      "<td>" + DAY_NAMES[d.getDay()] + "</td>" +
      "<td class=\"cell-unit\"><span style=\"--tag:" + (TAG_COLOR[tag] || "var(--ink-soft)") + "\">" + (TAG_LABEL[tag] || tag) + "</span></td>" +
      "<td>" + topic + "</td>";

    frag.appendChild(tr);
  });
  tbody.appendChild(frag);

  /* ---- "Next session" callout ---- */
  if (nextRowInfo) {
    var box = document.getElementById("nextSession");
    document.getElementById("nextDate").textContent = fmtDate(nextRowInfo.date) + " (" + DAY_NAMES[nextRowInfo.date.getDay()] + ")";
    document.getElementById("nextTopic").textContent = nextRowInfo.topic;
    box.hidden = false;
  }

  /* ---- Filter chips ---- */
  var chips = document.querySelectorAll(".filter-chip");
  var rows = tbody.querySelectorAll("tr");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var filter = chip.dataset.filter;
      rows.forEach(function (row) {
        var tag = row.dataset.tag;
        var show = filter === "all" ||
          (filter === "OTHER" ? !["U1", "U2", "U3", "U4", "U5"].includes(tag) : tag === filter);
        row.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");
  navToggle.addEventListener("click", function () {
    var open = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  primaryNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Scrollspy: highlight the current section's nav link ---- */
  var navLinks = document.querySelectorAll("[data-nav]");
  var sections = Array.from(navLinks).map(function (a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
