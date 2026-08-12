"use strict";

const STORAGE_KEY = "sitepilot-demo-state-v1";

const roles = {
  worker: {
    label: "Field Worker",
    icon: "👷",
    description: "Assigned work, capture, safety and alerts",
    initials: "FW",
    allowedModules: ["progress", "drawings", "photos", "safety", "quality", "documents"]
  },
  superintendent: {
    label: "Superintendent",
    icon: "🦺",
    description: "Daily plan, crews, schedule, safety and quality",
    initials: "LA",
    allowedModules: ["progress", "schedule", "drawings", "photos", "safety", "quality", "procurement", "documents", "reports", "team"]
  },
  projectManager: {
    label: "Project Manager",
    icon: "📋",
    description: "Schedule, cost, documents, reports and team",
    initials: "PM",
    allowedModules: ["progress", "schedule", "drawings", "photos", "quality", "procurement", "documents", "reports", "team"]
  },
  safety: {
    label: "Safety / Quality",
    icon: "🛡️",
    description: "Inspections, observations, incidents and punch work",
    initials: "SQ",
    allowedModules: ["photos", "safety", "quality", "documents", "reports"]
  },
  owner: {
    label: "Owner / Client",
    icon: "🏢",
    description: "Simple project health, milestones and reports",
    initials: "OC",
    allowedModules: ["progress", "schedule", "photos", "reports", "documents"]
  }
};

const projects = [
  { id: "riverfront", name: "Riverfront Medical Center", location: "San Diego, CA", progress: 64, status: "At risk" },
  { id: "northgate", name: "Northgate Apartments", location: "Chula Vista, CA", progress: 38, status: "On track" },
  { id: "leoconcrete", name: "LeoConcrete Yard Upgrade", location: "National City, CA", progress: 82, status: "On track" }
];

const modules = [
  { id: "progress", icon: "📈", title: "Progress", description: "Planned versus actual work by area and trade" },
  { id: "schedule", icon: "🗓️", title: "Schedule", description: "Look-ahead plan, milestones and delay risks" },
  { id: "drawings", icon: "📐", title: "Drawings & BIM", description: "Plans, revisions, model areas and linked records" },
  { id: "photos", icon: "📷", title: "Photos", description: "Field photos, 360 walks and visual history" },
  { id: "safety", icon: "🛡️", title: "Safety", description: "Observations, inspections, incidents and corrective actions" },
  { id: "quality", icon: "✅", title: "Quality", description: "Inspections, punch list and rework prevention" },
  { id: "procurement", icon: "🚚", title: "Procurement", description: "Deliveries, long-lead items and material risk" },
  { id: "documents", icon: "📁", title: "Documents", description: "RFIs, submittals, contracts and specifications" },
  { id: "reports", icon: "📊", title: "Reports", description: "Daily logs, weekly owner reports and exports" },
  { id: "team", icon: "👥", title: "Team & Crews", description: "Assignments, permissions and trade coordination" }
];

const seedTasks = [
  { id: 1, title: "Complete firestopping inspection", area: "Level 3 — Zone B", trade: "Fireproofing", due: "Before drywall", owner: "Miguel R.", done: false },
  { id: 2, title: "Verify electrical rough-in", area: "Level 3 — Zone B", trade: "Electrical", due: "Today 11:00 AM", owner: "Electrical crew", done: false },
  { id: 3, title: "Upload east wing progress photos", area: "Level 2 — East Wing", trade: "General", due: "Today 3:00 PM", owner: "Leonardo", done: false },
  { id: 4, title: "Confirm concrete delivery ticket", area: "Exterior", trade: "Concrete", due: "Today 4:30 PM", owner: "Field engineer", done: true }
];

const seedAlerts = [
  { id: 1, severity: "high", title: "Drywall may start before inspection", area: "Level 3 — Zone B", detail: "Firestopping inspection is incomplete while drywall is scheduled tomorrow.", action: "Hold drywall in Zone B and notify the electrical and firestopping leads.", status: "open" },
  { id: 2, severity: "medium", title: "Air handler delivery risk", area: "Roof", detail: "Supplier forecast moved two days beyond the planned crane pick.", action: "Confirm supplier date and reserve an alternate crane window.", status: "open" },
  { id: 3, severity: "medium", title: "Photo coverage is incomplete", area: "Level 2 — East Wing", detail: "No progress photos have been uploaded for three days.", action: "Complete a photo walk before the afternoon coordination meeting.", status: "open" },
  { id: 4, severity: "low", title: "Concrete pour documentation complete", area: "Exterior", detail: "Tickets, photos and test records are attached.", action: "No action required.", status: "resolved" }
];

const moduleDetails = {
  progress: {
    title: "Progress Tracker",
    subtitle: "See actual progress against the plan.",
    metrics: [["Overall progress", "64%", "2% behind plan"], ["This week", "+4.5%", "Target +6%"], ["Areas tracked", "18", "3 need updates"], ["Photo confidence", "87%", "Human review enabled"]],
    rows: [
      ["Level 3 — Electrical rough-in", "80%", "Behind 5%"],
      ["Level 2 — Framing", "92%", "On plan"],
      ["Level 1 — MEP overhead", "61%", "Behind 8%"],
      ["Exterior — Concrete paving", "100%", "Complete"]
    ]
  },
  schedule: {
    title: "Schedule Intelligence",
    subtitle: "Focus on the activities most likely to affect completion.",
    metrics: [["Project status", "At risk", "3 active constraints"], ["Critical activities", "12", "2 need action"], ["Forecast variance", "+6 days", "Current model"], ["Look-ahead", "21 days", "Last updated today"]],
    rows: [
      ["Firestopping inspection", "Tomorrow", "High risk"],
      ["Level 3 drywall start", "Tomorrow", "Blocked"],
      ["Roof air handler set", "Jul 18", "Delivery risk"],
      ["Exterior concrete paving", "Complete", "Closed"]
    ]
  },
  drawings: {
    title: "Drawings & BIM",
    subtitle: "Find current information without searching through folders.",
    metrics: [["Current drawings", "428", "12 revised this week"], ["Open markups", "17", "5 assigned to you"], ["Model areas", "46", "IFC synchronized"], ["Superseded sheets", "31", "Clearly marked"]],
    rows: [
      ["E3.21 — Level 3 Power Plan", "Rev 5", "Current"],
      ["A5.12 — Interior Details", "Rev 3", "Current"],
      ["M2.03 — Roof Mechanical", "Rev 4", "New revision"],
      ["BIM — Level 3 Coordination", "Jul 10", "Synced"]
    ]
  },
  photos: {
    title: "Site Photos",
    subtitle: "A visual project record organized by date, area and trade.",
    metrics: [["Photos this week", "286", "+48 today"], ["Areas covered", "15/18", "3 missing"], ["360 walks", "4", "Latest yesterday"], ["AI tagged", "91%", "26 need review"]],
    rows: [
      ["Level 3 — Zone B", "46 photos", "Today"],
      ["Level 2 — East Wing", "No recent photos", "Update needed"],
      ["Roof", "18 photos", "Yesterday"],
      ["Exterior", "33 photos", "Today"]
    ]
  },
  safety: {
    title: "Safety Center",
    subtitle: "Make reporting fast and corrective actions visible.",
    metrics: [["Days without incident", "24", "Project total"], ["Open observations", "7", "2 high priority"], ["Inspections", "94%", "Weekly completion"], ["Corrective actions", "5", "Due today"]],
    rows: [
      ["Open edge protection", "Level 2", "High priority"],
      ["Housekeeping route", "Level 1", "Due today"],
      ["Equipment exclusion zone", "Exterior", "Verified"],
      ["Daily pre-task plans", "11/12 crews", "One missing"]
    ]
  },
  quality: {
    title: "Quality Control",
    subtitle: "Catch incomplete work before it becomes rework.",
    metrics: [["Open inspections", "13", "4 due today"], ["Punch items", "42", "11 overdue"], ["First-pass rate", "88%", "+3% this month"], ["Rework risk", "$18K", "Estimated exposure"]],
    rows: [
      ["Firestopping inspection", "Level 3", "Blocked"],
      ["Wall framing above ceiling", "Level 2", "Ready"],
      ["Concrete finish review", "Exterior", "Passed"],
      ["Door frame alignment", "Level 1", "5 punch items"]
    ]
  },
  procurement: {
    title: "Procurement Brain",
    subtitle: "Connect material decisions with the field schedule.",
    metrics: [["Long-lead items", "18", "3 at risk"], ["Deliveries today", "9", "2 pending"], ["Late items", "2", "Action required"], ["Next 14 days", "31", "Planned deliveries"]],
    rows: [
      ["Roof air handler", "Forecast Jul 20", "2 days late"],
      ["Level 3 light fixtures", "Jul 16", "Confirmed"],
      ["Drywall Type X", "Tomorrow", "On site"],
      ["Exterior bollards", "Jul 29", "Submittal pending"]
    ]
  },
  documents: {
    title: "Document Intelligence",
    subtitle: "Search project records and keep deadlines visible.",
    metrics: [["Open RFIs", "22", "6 overdue"], ["Submittals", "38", "8 due this week"], ["Notices", "3", "Deadline tracked"], ["Indexed files", "4,812", "Search ready"]],
    rows: [
      ["RFI 184 — Firestopping sequence", "Due today", "Open"],
      ["Submittal 093 — Air handler", "Returned", "Revise"],
      ["ASI 017 — Level 3 corridor", "Issued Jul 9", "Current"],
      ["Owner meeting minutes", "Jul 10", "Published"]
    ]
  },
  reports: {
    title: "Reports",
    subtitle: "Turn field data into clear updates for every audience.",
    metrics: [["Daily log", "Draft", "8 sections complete"], ["Weekly owner report", "Ready", "Review before sending"], ["Open actions", "27", "Across all reports"], ["Time saved", "5.2 hrs", "This week"]],
    rows: [
      ["Daily field report", "Today", "Draft"],
      ["Weekly owner report", "Week 28", "Ready for review"],
      ["Safety summary", "Week 28", "Generated"],
      ["Progress photo report", "Jul 10", "Published"]
    ]
  },
  team: {
    title: "Team & Crews",
    subtitle: "Give each person the information and permissions they need.",
    metrics: [["Workers on site", "86", "12 crews"], ["Active users", "34", "Today"], ["Unassigned tasks", "4", "Needs owner"], ["Pending invites", "3", "Expires in 5 days"]],
    rows: [
      ["Electrical crew", "14 workers", "Level 3"],
      ["Drywall crew", "11 workers", "Level 2 staging"],
      ["Concrete crew", "8 workers", "Exterior"],
      ["Safety team", "3 users", "Project wide"]
    ]
  }
};

function loadState() {
  const fallback = {
    route: "today",
    role: "superintendent",
    projectId: projects[0].id,
    tasks: seedTasks,
    alerts: seedAlerts,
    records: [],
    alertFilter: "open"
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

let state = loadState();
const app = document.querySelector("#app-content");
const roleDialog = document.querySelector("#roleDialog");
const projectDialog = document.querySelector("#projectDialog");
const actionDialog = document.querySelector("#actionDialog");
const actionForm = document.querySelector("#actionForm");
const toast = document.querySelector("#toast");

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentRole() {
  return roles[state.role] || roles.superintendent;
}

function currentProject() {
  return projects.find(project => project.id === state.projectId) || projects[0];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function updateHeader() {
  const project = currentProject();
  const role = currentRole();
  document.querySelector("#projectName").textContent = project.name;
  document.querySelector("#profileInitials").textContent = role.initials;
  const openAlerts = state.alerts.filter(alert => alert.status === "open").length;
  const badge = document.querySelector("#alertBadge");
  badge.textContent = openAlerts;
  badge.hidden = openAlerts === 0;
}

function pageHeader(eyebrow, title, subtitle) {
  return `<header class="page-header"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></header>`;
}

function metricCard(label, value, detail, progress) {
  return `<article class="metric-card"><p>${escapeHtml(label)}</p><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small>${progress !== undefined ? `<div class="progress-bar" aria-label="${escapeHtml(label)} ${progress} percent"><span style="width:${Math.max(0, Math.min(100, progress))}%"></span></div>` : ""}</article>`;
}

function renderToday() {
  const role = currentRole();
  const project = currentProject();
  const openAlerts = state.alerts.filter(alert => alert.status === "open");
  const unfinished = state.tasks.filter(task => !task.done);

  if (state.role === "owner") {
    app.innerHTML = `${pageHeader("Owner view", project.name, "A simple view of project health, decisions and milestones.")}
      <section class="hero-card"><p class="eyebrow">Project health</p><h2>${project.status}: ${project.progress}% complete</h2><p>Schedule forecast is currently six days beyond plan. Three decisions need team follow-up.</p><div class="hero-actions"><button class="primary-button" data-module="reports">Open weekly report</button><button class="secondary-button" data-module="progress">View progress</button></div></section>
      <section class="section"><div class="section-heading"><h2>Executive snapshot</h2></div><div class="metrics-grid">${metricCard("Overall progress", `${project.progress}%`, "2% behind plan", project.progress)}${metricCard("Schedule forecast", "+6 days", "Current model")}${metricCard("Open owner decisions", "3", "One due today")}${metricCard("Safety", "24 days", "Without incident")}</div></section>
      <section class="section"><div class="section-heading"><h2>What needs attention</h2><button data-route="alerts">All alerts</button></div><div class="alert-list">${openAlerts.slice(0, 3).map(alertCard).join("")}</div></section>`;
    return;
  }

  const greeting = state.role === "worker" ? "Your work today" : state.role === "safety" ? "Today’s inspections" : "Command center";
  const heroTitle = openAlerts[0]?.title || "Project activity is on plan";
  const heroText = openAlerts[0]?.action || "No high-priority actions are currently open.";

  app.innerHTML = `${pageHeader(role.label, greeting, `${project.name} • ${project.location}`)}
    <section class="hero-card"><p class="eyebrow">Top recommended action</p><h2>${escapeHtml(heroTitle)}</h2><p>${escapeHtml(heroText)}</p><div class="hero-actions"><button class="primary-button" data-route="alerts">Review alert</button><button class="secondary-button" data-action="progress update">Add update</button></div></section>
    <section class="section"><div class="section-heading"><h2>Quick actions</h2></div><div class="quick-grid">
      ${quickAction("📷", "Progress photo", "Document installed work", "progress photo")}
      ${quickAction("🛡️", "Safety observation", "Report a hazard or good catch", "safety observation")}
      ${quickAction("✅", "Quality check", "Inspection or punch item", "quality check")}
      ${quickAction("📝", "Daily note", "Record manpower or delay", "daily note")}
    </div></section>
    <section class="section"><div class="section-heading"><h2>Project pulse</h2><button data-module="progress">Details</button></div><div class="metrics-grid">${metricCard("Overall progress", `${project.progress}%`, "2% behind plan", project.progress)}${metricCard("Open alerts", String(openAlerts.length), "1 high priority")}${metricCard("My tasks", String(unfinished.length), "Due or active")}${metricCard("Workers on site", "86", "12 crews")}</div></section>
    <section class="section"><div class="section-heading"><h2>Next work</h2><button data-route="work">View all</button></div><div class="task-list">${state.tasks.filter(task => !task.done).slice(0, 3).map(taskCard).join("")}</div></section>`;
}

function quickAction(icon, title, detail, type) {
  return `<button class="quick-action" type="button" data-action="${escapeHtml(type)}"><span class="quick-icon" aria-hidden="true">${icon}</span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small></button>`;
}

function taskCard(task) {
  return `<article class="task-card ${task.done ? "is-done" : ""}"><div class="card-row"><button class="task-check" type="button" data-task-id="${task.id}" aria-label="Mark ${escapeHtml(task.title)} ${task.done ? "not complete" : "complete"}">${task.done ? "✓" : ""}</button><div><h3>${escapeHtml(task.title)}</h3><p>${escapeHtml(task.area)}</p><div class="task-meta"><span class="badge">${escapeHtml(task.trade)}</span><span>${escapeHtml(task.due)}</span><span>• ${escapeHtml(task.owner)}</span></div></div></div></article>`;
}

function alertCard(alert) {
  return `<article class="alert-card ${alert.severity}"><div class="section-heading"><span class="badge ${alert.severity}">${escapeHtml(alert.severity.toUpperCase())}</span><span class="badge">${escapeHtml(alert.area)}</span></div><h3>${escapeHtml(alert.title)}</h3><p>${escapeHtml(alert.detail)}</p><p><strong>Recommended:</strong> ${escapeHtml(alert.action)}</p>${alert.status === "open" ? `<div class="alert-actions"><button class="small-button" type="button" data-resolve-alert="${alert.id}">Mark resolved</button><button class="small-button" type="button" data-action="alert follow-up">Add follow-up</button></div>` : `<div class="task-meta"><span class="badge low">Resolved</span></div>`}</article>`;
}

function renderWork() {
  const visibleTasks = state.role === "worker" ? state.tasks.filter(task => task.owner === "Leonardo" || task.owner.includes("crew")) : state.tasks;
  app.innerHTML = `${pageHeader("Field execution", "My Work", "One clear list of assignments, inspections and follow-ups.")}
    <section class="section"><div class="filter-row"><button class="filter-chip is-active">Today</button><button class="filter-chip">Upcoming</button><button class="filter-chip">Completed</button><button class="filter-chip">By area</button></div></section>
    <section class="section"><div class="section-heading"><h2>${visibleTasks.filter(task => !task.done).length} active tasks</h2><button data-action="new task">Add task</button></div><div class="task-list">${visibleTasks.map(taskCard).join("")}</div></section>`;
}

function renderCapture() {
  app.innerHTML = `${pageHeader("Field capture", "Record it once", "Photos, notes and location stay connected to the project.")}
    <section class="capture-panel"><button class="capture-big" type="button" data-action="progress photo" aria-label="Take or upload a progress photo">＋</button><h2>Add a field record</h2><p>Use your camera, choose the area, and add a short note. SitePilot organizes the rest.</p></section>
    <section class="section"><div class="section-heading"><h2>Choose record type</h2></div><div class="quick-grid">
      ${quickAction("📈", "Progress", "Installed or completed work", "progress update")}
      ${quickAction("🛡️", "Safety", "Hazard, observation or incident", "safety observation")}
      ${quickAction("✅", "Quality", "Inspection, defect or punch", "quality check")}
      ${quickAction("🚚", "Delivery", "Material receipt or shortage", "delivery record")}
      ${quickAction("👥", "Manpower", "Crew count and hours", "manpower record")}
      ${quickAction("⏱️", "Delay", "Constraint or lost time", "delay record")}
    </div></section>
    <section class="section"><div class="section-heading"><h2>Recent records</h2></div><div class="timeline">${state.records.length ? state.records.slice().reverse().slice(0, 6).map(record => `<article class="timeline-item"><h3>${escapeHtml(record.type)}</h3><p>${escapeHtml(record.area)} • ${escapeHtml(record.time)}${record.photo ? " • Photo attached" : ""}</p><p>${escapeHtml(record.notes || "No notes")}</p></article>`).join("") : `<article class="empty-card"><strong>No demo records yet</strong><p>Your saved field records will appear here.</p></article>`}</div></section>`;
}

function renderAlerts() {
  const filters = ["open", "high", "resolved", "all"];
  const filtered = state.alerts.filter(alert => {
    if (state.alertFilter === "all") return true;
    if (state.alertFilter === "high") return alert.severity === "high" && alert.status === "open";
    return alert.status === state.alertFilter;
  });
  app.innerHTML = `${pageHeader("Project intelligence", "Alerts & Decisions", "Prioritized risks with evidence and a recommended next action.")}
    <div class="filter-row">${filters.map(filter => `<button class="filter-chip ${state.alertFilter === filter ? "is-active" : ""}" type="button" data-alert-filter="${filter}">${filter[0].toUpperCase() + filter.slice(1)}</button>`).join("")}</div>
    <section class="section"><div class="section-heading"><h2>${filtered.length} results</h2><button data-action="new issue">Report issue</button></div><div class="alert-list">${filtered.length ? filtered.map(alertCard).join("") : `<article class="empty-card"><strong>No alerts in this view</strong><p>Change the filter or create a field record.</p></article>`}</div></section>`;
}

function renderMore() {
  const allowed = currentRole().allowedModules;
  const visibleModules = modules.filter(module => allowed.includes(module.id));
  app.innerHTML = `${pageHeader("Project tools", "More", "Everything is grouped by the job to be done—not by complicated software menus.")}
    <section class="section"><div class="section-heading"><h2>Modules for ${escapeHtml(currentRole().label)}</h2></div><div class="module-grid">${visibleModules.map(module => `<button class="module-card" type="button" data-module="${module.id}"><span class="module-icon" aria-hidden="true">${module.icon}</span><h3>${escapeHtml(module.title)}</h3><p>${escapeHtml(module.description)}</p></button>`).join("")}</div></section>
    <section class="section"><div class="section-heading"><h2>Account & support</h2></div><div class="card-list"><button class="role-option" type="button" id="changeRoleInline"><span>👤</span><span><strong>Role and permissions</strong><small>Current: ${escapeHtml(currentRole().label)}</small></span></button><button class="role-option" type="button" data-module="settings"><span>⚙️</span><span><strong>Project settings</strong><small>Notifications, offline sync and preferences</small></span></button><button class="role-option" type="button" data-module="help"><span>?</span><span><strong>Help & training</strong><small>Simple instructions for every field workflow</small></span></button></div></section>`;
}

function renderModule(moduleId) {
  if (moduleId === "settings") return renderSettings();
  if (moduleId === "help") return renderHelp();
  const details = moduleDetails[moduleId];
  if (!details) return renderMore();
  const isAllowed = currentRole().allowedModules.includes(moduleId);
  if (!isAllowed) {
    app.innerHTML = `${pageHeader("Permissions", "Access restricted", "Your project administrator controls access to this module.")}<article class="empty-card"><strong>${escapeHtml(currentRole().label)} does not currently have access.</strong><p>Ask a project administrator to update your permissions.</p><button class="secondary-button" data-route="more">Back to modules</button></article>`;
    return;
  }
  app.innerHTML = `${pageHeader("${modules.find(module => module.id === moduleId)?.title || "Project module"}", details.title, details.subtitle)}
    <section class="metrics-grid">${details.metrics.map(metric => metricCard(...metric)).join("")}</section>
    <section class="section"><div class="section-heading"><h2>Priority items</h2><button data-action="${moduleId} record">Add</button></div><div class="card-list">${details.rows.map(row => `<article class="card"><div class="card-row"><span class="module-icon" aria-hidden="true">${modules.find(module => module.id === moduleId)?.icon || "•"}</span><div><h3>${escapeHtml(row[0])}</h3><p>${escapeHtml(row[1])}</p><div class="task-meta"><span class="badge">${escapeHtml(row[2])}</span></div></div></div></article>`).join("")}</div></section>
    <section class="section"><button class="secondary-button" data-route="more">← Back to all modules</button></section>`;
}

function renderSettings() {
  app.innerHTML = `${pageHeader("Preferences", "Project Settings", "Controls designed for unreliable jobsite connections and shared field devices.")}
    <div class="card-list"><article class="card"><h3>Offline field mode</h3><p>Cache assigned work, drawings and forms. Upload records automatically when the connection returns.</p><div class="task-meta"><span class="badge low">Recommended: On</span></div></article><article class="card"><h3>Large-button mode</h3><p>Keep primary actions at least 48 pixels high for gloves and outdoor use.</p><div class="task-meta"><span class="badge low">On</span></div></article><article class="card"><h3>Language</h3><p>English now. Spanish field interface is the recommended next localization.</p><div class="task-meta"><span class="badge">English</span></div></article><article class="card"><h3>Notifications</h3><p>Only urgent safety, assigned work and schedule blockers should interrupt field workers.</p><div class="task-meta"><span class="badge">Priority only</span></div></article></div>`;
}

function renderHelp() {
  app.innerHTML = `${pageHeader("Training", "Help for the field", "Every workflow should be teachable in less than two minutes.")}
    <div class="card-list"><article class="card"><h3>1. Check Today</h3><p>See your top action, assigned work and urgent alerts when you open the app.</p></article><article class="card"><h3>2. Complete My Work</h3><p>Tap the large check button when an assignment is complete. Add evidence when required.</p></article><article class="card"><h3>3. Capture field conditions</h3><p>Choose Progress, Safety, Quality, Delivery, Manpower or Delay; select the area; add a photo and a short note.</p></article><article class="card"><h3>4. Review alerts</h3><p>Each alert explains the evidence, risk and recommended next action. A qualified team member confirms important decisions.</p></article></div>`;
}

function render() {
  updateHeader();
  document.querySelectorAll(".nav-item").forEach(button => {
    const isActive = button.dataset.route === state.route && ["today", "work", "capture", "alerts", "more"].includes(state.route);
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });

  if (state.route === "today") renderToday();
  else if (state.route === "work") renderWork();
  else if (state.route === "capture") renderCapture();
  else if (state.route === "alerts") renderAlerts();
  else if (state.route === "more") renderMore();
  else renderModule(state.route);

  saveState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(route) {
  state.route = route;
  render();
}

function openAction(type) {
  document.querySelector("#actionTitle").textContent = type.replace(/\b\w/g, letter => letter.toUpperCase());
  document.querySelector("#actionType").value = type;
  document.querySelector("#actionArea").value = "";
  document.querySelector("#actionNotes").value = "";
  document.querySelector("#cameraInput").value = "";
  document.querySelector("#cameraStatus").textContent = "No photo selected.";
  actionDialog.showModal();
}

function populateRoleDialog() {
  document.querySelector("#roleOptions").innerHTML = Object.entries(roles).map(([id, role]) => `<button class="role-option ${state.role === id ? "is-active" : ""}" type="button" data-role="${id}"><span>${role.icon}</span><span><strong>${escapeHtml(role.label)}</strong><small>${escapeHtml(role.description)}</small></span></button>`).join("");
}

function populateProjectDialog() {
  document.querySelector("#projectOptions").innerHTML = projects.map(project => `<button class="role-option ${state.projectId === project.id ? "is-active" : ""}" type="button" data-project-id="${project.id}"><span>🏗️</span><span><strong>${escapeHtml(project.name)}</strong><small>${escapeHtml(project.location)} • ${project.progress}% complete</small></span></button>`).join("");
}

document.querySelector(".bottom-nav").addEventListener("click", event => {
  const button = event.target.closest("[data-route]");
  if (button) navigate(button.dataset.route);
});

document.querySelector("#profileButton").addEventListener("click", () => {
  populateRoleDialog();
  roleDialog.showModal();
});

document.querySelector("#projectButton").addEventListener("click", () => {
  populateProjectDialog();
  projectDialog.showModal();
});

document.querySelector("#syncButton").addEventListener("click", () => {
  document.querySelector("#syncTime").textContent = "syncing…";
  window.setTimeout(() => {
    document.querySelector("#syncTime").textContent = "just now";
    showToast("Project data synchronized");
  }, 650);
});

roleDialog.addEventListener("click", event => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  state.role = button.dataset.role;
  state.route = "today";
  roleDialog.close();
  render();
  showToast(`Switched to ${currentRole().label}`);
});

projectDialog.addEventListener("click", event => {
  const button = event.target.closest("[data-project-id]");
  if (!button) return;
  state.projectId = button.dataset.projectId;
  state.route = "today";
  projectDialog.close();
  render();
  showToast(`Opened ${currentProject().name}`);
});

app.addEventListener("click", event => {
  const route = event.target.closest("[data-route]");
  if (route) return navigate(route.dataset.route);

  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) return navigate(moduleButton.dataset.module);

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) return openAction(actionButton.dataset.action);

  const taskButton = event.target.closest("[data-task-id]");
  if (taskButton) {
    const task = state.tasks.find(item => item.id === Number(taskButton.dataset.taskId));
    if (task) {
      task.done = !task.done;
      render();
      showToast(task.done ? "Task marked complete" : "Task reopened");
    }
    return;
  }

  const alertButton = event.target.closest("[data-resolve-alert]");
  if (alertButton) {
    const alert = state.alerts.find(item => item.id === Number(alertButton.dataset.resolveAlert));
    if (alert) {
      alert.status = "resolved";
      render();
      showToast("Alert marked resolved");
    }
    return;
  }

  const filterButton = event.target.closest("[data-alert-filter]");
  if (filterButton) {
    state.alertFilter = filterButton.dataset.alertFilter;
    render();
    return;
  }

  if (event.target.closest("#changeRoleInline")) {
    populateRoleDialog();
    roleDialog.showModal();
  }
});

document.querySelector("#cameraInput").addEventListener("change", event => {
  const file = event.target.files?.[0];
  document.querySelector("#cameraStatus").textContent = file ? `${file.name} selected.` : "No photo selected.";
});

actionForm.addEventListener("submit", event => {
  event.preventDefault();
  const type = document.querySelector("#actionType").value || "field record";
  const area = document.querySelector("#actionArea").value;
  const notes = document.querySelector("#actionNotes").value.trim();
  const photo = Boolean(document.querySelector("#cameraInput").files?.length);
  if (!area) {
    showToast("Select an area before saving");
    return;
  }
  state.records.push({ id: Date.now(), type, area, notes, photo, time: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) });
  actionDialog.close();
  state.route = "capture";
  render();
  showToast("Field record saved on this device");
});

render();
