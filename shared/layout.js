/**
 * Shared academy layout — header, lesson nav, and footer.
 * Reads data-page / data-course / data-session from <body>.
 */
(function () {
  function getBasePath() {
    const script = document.querySelector('script[src*="shared/layout.js"]');
    if (!script) return "";
    return script.getAttribute("src").replace(/shared\/layout\.js$/, "");
  }

  function padSession(id) {
    return String(id).padStart(2, "0");
  }

  function sessionHref(base, courseId, sessionId) {
    const course = window.ACADEMY.courses[courseId];
    const prefix = (course && typeof course.pathPrefix === "string")
      ? course.pathPrefix
      : "courses/" + courseId + "/";
    return base + prefix + "session-" + padSession(sessionId) + "/lesson.html";
  }

  function courseHref(base, courseId) {
    return base + "courses/" + courseId + "/index.html";
  }

  function hubHref(base) {
    return base + "index.html";
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderAcademyBar(base, activeCourse) {
    const academy = window.ACADEMY;
    return (
      '<a class="skip-link" href="#main-content">تخطي إلى المحتوى</a>' +
      '<div class="academy-bar">' +
        '<div class="container academy-bar-inner">' +
          '<a class="brand" href="' + hubHref(base) + '">' +
            '<span class="brand-mark" aria-hidden="true">وب</span>' +
            '<span class="brand-text">' + escapeHtml(academy.name) + '</span>' +
          '</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="academy-nav" aria-label="فتح قائمة التنقل">' +
            '<span class="nav-toggle-bars" aria-hidden="true"></span>' +
          '</button>' +
        '</div>' +
        '<nav class="academy-nav" id="academy-nav">' +
          '<div class="container academy-nav-links">' +
            '<a href="' + hubHref(base) + '"' + (activeCourse === "hub" ? ' class="is-active"' : "") + '>الرئيسية</a>' +
            '<a href="' + courseHref(base, "web") + '"' + (activeCourse === "web" ? ' class="is-active"' : "") + '>أساسيات الويب</a>' +
            '<a href="' + courseHref(base, "react") + '"' + (activeCourse === "react" ? ' class="is-active"' : "") + '>React</a>' +
            '<a href="' + courseHref(base, "git") + '"' + (activeCourse === "git" ? ' class="is-active"' : "") + '>Git و GitHub</a>' +
            '<a href="' + courseHref(base, "react-advanced") + '"' + (activeCourse === "react-advanced" ? ' class="is-active"' : "") + '>React المتقدم</a>' +
            '<a href="' + courseHref(base, "vps") + '"' + (activeCourse === "vps" ? ' class="is-active"' : "") + '>VPS</a>' +
            '<a href="' + courseHref(base, "backend") + '"' + (activeCourse === "backend" ? ' class="is-active"' : "") + '>Backend</a>' +
            '<a href="' + courseHref(base, "se") + '"' + (activeCourse === "se" ? ' class="is-active"' : "") + '>هندسة SE</a>' +
          '</div>' +
        '</nav>' +
      '</div>'
    );
  }

  function renderLessonHeader(base, course, sessionId, session) {
    const total = course.sessionCount;
    const current = parseInt(sessionId, 10);
    const percent = Math.round((current / total) * 100);
    const displayTitle = session.titleAr || session.title;
    const prevId = current > 1 ? padSession(current - 1) : null;
    const nextId = current < total ? padSession(current + 1) : null;

    let options = "";
    Object.keys(course.sessions).forEach(function (id) {
      const item = course.sessions[id];
      const label = id + " — " + (item.titleAr || item.title);
      options += '<option value="' + sessionHref(base, course.id, id) + '"' +
        (id === sessionId ? " selected" : "") + ">" + escapeHtml(label) + "</option>";
    });

    return (
      '<header class="site-header">' +
        '<div class="container">' +
          '<nav class="breadcrumbs" aria-label="مسار التنقل">' +
            '<a href="' + hubHref(base) + '">الرئيسية</a>' +
            '<span class="crumb-sep">/</span>' +
            '<a href="' + courseHref(base, course.id) + '">' + escapeHtml(course.title) + '</a>' +
            '<span class="crumb-sep">/</span>' +
            '<span>الجلسة ' + sessionId + '</span>' +
          '</nav>' +
          '<span class="course-badge">' + escapeHtml(session.phase) + (session.project ? " · مشروع" : "") + '</span>' +
          '<h1>الجلسة ' + sessionId + ': ' + escapeHtml(displayTitle) + '</h1>' +
          '<div class="session-meta">' +
            '<span>المدة: ' + escapeHtml(session.duration) + '</span>' +
            '<span>الجلسة ' + current + ' من ' + total + '</span>' +
          '</div>' +
          '<div class="progress-track" role="progressbar" aria-valuemin="1" aria-valuemax="' + total + '" aria-valuenow="' + current + '" aria-label="تقدم الجلسات">' +
            '<span style="width:' + percent + '%"></span>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<nav class="lesson-nav">' +
        '<div class="container lesson-nav-inner">' +
          '<a class="nav-link nav-index" href="' + courseHref(base, course.id) + '">فهرس الكورس</a>' +
          (prevId
            ? '<a class="nav-link nav-prev" href="' + sessionHref(base, course.id, prevId) + '"><span class="nav-full">الجلسة السابقة</span><span class="nav-short">السابقة</span></a>'
            : '<span class="nav-link nav-prev disabled"><span class="nav-full">الجلسة السابقة</span><span class="nav-short">السابقة</span></span>') +
          (nextId
            ? '<a class="nav-link nav-next" href="' + sessionHref(base, course.id, nextId) + '"><span class="nav-full">الجلسة التالية</span><span class="nav-short">التالية</span></a>'
            : '<span class="nav-link nav-next disabled"><span class="nav-full">الجلسة التالية</span><span class="nav-short">التالية</span></span>') +
          '<label class="session-jump">' +
            '<span class="visually-hidden">الانتقال إلى جلسة</span>' +
            '<select aria-label="الانتقال إلى جلسة">' + options + '</select>' +
          '</label>' +
        '</div>' +
      '</nav>'
    );
  }

  function renderFooter(course) {
    const academy = window.ACADEMY;
    const courseTitle = course ? course.title + " — " + course.subtitle : academy.name;
    return (
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<p class="footer-course">' + escapeHtml(courseTitle) + '</p>' +
          '<p class="footer-instructor">' +
            escapeHtml(academy.instructor) + " · " + escapeHtml(academy.instructorTitle) +
          '</p>' +
          '<p class="footer-copy">مرجع دراسي مشترك لجميع الطلاب · ' + academy.year + '</p>' +
        '</div>' +
      '</footer>'
    );
  }

  function setMenuOpen(toggle, nav, open) {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل");
  }

  function bindChrome() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("academy-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        setMenuOpen(toggle, nav, !nav.classList.contains("is-open"));
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setMenuOpen(toggle, nav, false);
        });
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setMenuOpen(toggle, nav, false);
      });

      document.addEventListener("click", function (event) {
        if (!nav.classList.contains("is-open")) return;
        if (nav.contains(event.target) || toggle.contains(event.target)) return;
        setMenuOpen(toggle, nav, false);
      });
    }

    const jump = document.querySelector(".session-jump select");
    if (jump) {
      jump.addEventListener("change", function () {
        if (jump.value) window.location.href = jump.value;
      });
    }
  }

  function initLayout() {
    if (!window.ACADEMY) return;

    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=1, viewport-fit=cover");
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      const theme = document.createElement("meta");
      theme.setAttribute("name", "theme-color");
      theme.setAttribute("content", "#0f1b2d");
      document.head.appendChild(theme);
    }

    const body = document.body;
    const page = body.getAttribute("data-page") || "lesson";
    const courseId = body.getAttribute("data-course");
    const sessionId = padSession(body.getAttribute("data-session") || "");
    const base = getBasePath();
    const course = courseId ? window.ACADEMY.courses[courseId] : null;

    if (courseId) {
      body.setAttribute("data-accent", course && course.accent ? course.accent : "gold");
    }

    const headerMount = document.getElementById("layout-header");
    const footerMount = document.getElementById("layout-footer");

    if (headerMount) {
      if (page === "lesson" && course && course.sessions[sessionId]) {
        headerMount.innerHTML =
          renderAcademyBar(base, courseId) +
          renderLessonHeader(base, course, sessionId, course.sessions[sessionId]);
      } else {
        headerMount.innerHTML = renderAcademyBar(base, page === "hub" ? "hub" : courseId);
      }
    }

    if (footerMount) {
      footerMount.innerHTML = renderFooter(course);
    }

    if (page === "lesson" && course && course.sessions[sessionId]) {
      const session = course.sessions[sessionId];
      const displayTitle = session.titleAr || session.title;
      document.title = "الجلسة " + sessionId + " — " + displayTitle + " | " + course.title;
    }

    bindChrome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLayout);
  } else {
    initLayout();
  }
})();
