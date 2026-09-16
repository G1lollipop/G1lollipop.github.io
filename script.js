(() => {
  "use strict";
  const profile = window.PORTFOLIO || {};
  const name = typeof profile.name === "string" ? profile.name.trim() : "";
  if (name) {
    document.querySelectorAll("[data-name]").forEach(el => { el.textContent = name; });
    document.title = `${name} | Software & AI Engineering`;
    document.querySelector('meta[property="og:title"]').content = document.title;
  }
  if (profile.graduation) document.querySelector("[data-graduation]").textContent = profile.graduation;
  document.getElementById("year").textContent = new Date().getFullYear();
  function safeUrl(value, allowLocal = false) {
    if (typeof value !== "string" || !value.trim()) return null;
    const trimmed = value.trim();
    if (allowLocal && /^\.\/assets\/[a-z0-9_.\/-]+\.pdf$/i.test(trimmed) && !trimmed.includes("..")) return trimmed;
    try { const url = new URL(trimmed); return url.protocol === "https:" && !url.username && !url.password ? url.href : null; }
    catch { return null; }
  }
  const labels = {github: "GitHub ↗", linkedin: "LinkedIn ↗", resume: "View resume ↗", resumeDownload: "Download PDF ↓", autoAgent: "View project ↗", payments: "View project ↗"};
  document.querySelectorAll("[data-link]").forEach(placeholder => {
    const key = placeholder.dataset.link;
    const isResume = key === "resume" || key === "resumeDownload";
    let href;
    const isEmail = key === "email" || key === "academicEmail";
    if (isEmail) {
      const email = typeof profile[key] === "string" ? profile[key].trim() : "";
      if (/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) href = `mailto:${email}`;
    } else href = safeUrl(profile[isResume ? "resume" : key], isResume);
    if (!href) return;
    const link = document.createElement("a");
    link.className = placeholder.className;
    link.href = href;
    link.textContent = isEmail ? profile[key].trim() : labels[key];
    if (key === "resumeDownload") {
      if (href.startsWith("./")) link.download = "resume.pdf";
      else link.textContent = "Open PDF to download ↗";
    }
    if (!isEmail && !link.hasAttribute("download")) { link.target = "_blank"; link.rel = "noopener noreferrer"; link.setAttribute("aria-label", `${link.textContent.replace("↗", "").trim()} (opens in a new tab)`); }
    placeholder.replaceWith(link);
  });
  if (safeUrl(profile.resume, true)) document.getElementById("resume-status").textContent = "PDF resume";
})();
