import { useState, useEffect } from "react";

// ─── MOBILE HOOK ───
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
};

// ─── COLOUR PALETTE ───
const C = {
  primary: "#0C4A6E", primaryLight: "#0369A1", accent: "#0EA5E9",
  accentSoft: "#E0F2FE", success: "#059669", successSoft: "#D1FAE5",
  warning: "#D97706", warningSoft: "#FEF3C7", danger: "#DC2626",
  dangerSoft: "#FEE2E2", bg: "#F8FAFC", card: "#FFFFFF",
  border: "#E2E8F0", text: "#0F172A", muted: "#64748B", light: "#94A3B8",
  moderator: "#7C3AED", moderatorSoft: "#EDE9FE",
};

// ─── MOCK DATA ───
const TRAINEES = [
  { id: 1, name: "Ahmed Mohammed Ali", year: 2, hospital: "Khartoum Teaching Hospital", status: "active", done: 9, total: 12, trainer: "Dr. Sara Ahmed", tid: 1, uni: "KU-2024-001" },
  { id: 2, name: "Fatima Abdullah Hassan", year: 1, hospital: "Omdurman Hospital", status: "active", done: 4, total: 6, trainer: "Dr. Sara Ahmed", tid: 1, uni: "KU-2024-002" },
  { id: 3, name: "Mohammed Ibrahim Yusuf", year: 3, hospital: "Bahri Hospital", status: "active", done: 16, total: 18, trainer: "Dr. Khalid Omar", tid: 2, uni: "KU-2023-015" },
  { id: 4, name: "Hala Othman Mahmoud", year: 4, hospital: "Khartoum Teaching Hospital", status: "active", done: 22, total: 24, trainer: "Dr. Khalid Omar", tid: 2, uni: "KU-2022-008" },
  { id: 5, name: "Omar Hussein Adam", year: 1, hospital: "Omdurman Hospital", status: "frozen", done: 2, total: 6, trainer: "Dr. Sara Ahmed", tid: 1, uni: "KU-2024-009" },
  { id: 6, name: "Mariam Saleh Abdulrahman", year: 2, hospital: "Bahri Hospital", status: "active", done: 7, total: 12, trainer: "Dr. Khalid Omar", tid: 2, uni: "KU-2024-011" },
  { id: 7, name: "Salma Yaqoub Khalid", year: 3, hospital: "Khartoum Hospital", status: "active", done: 14, total: 18, trainer: "Dr. Nadia Hassan", tid: 3, uni: "KU-2023-022" },
  { id: 8, name: "Hossam Al-Din Awad", year: 1, hospital: "Omdurman Hospital", status: "active", done: 3, total: 6, trainer: "Dr. Nadia Hassan", tid: 3, uni: "KU-2025-003" },
];

const TRAINERS = [
  { id: 1, name: "Dr. Sara Ahmed", spec: "Obstetrics & Gynaecology", hospital: "Khartoum Teaching Hospital", status: "active" },
  { id: 2, name: "Dr. Khalid Omar", spec: "Obstetrics & Gynaecology", hospital: "Bahri Hospital", status: "active" },
  { id: 3, name: "Dr. Nadia Hassan", spec: "Obstetrics & Gynaecology", hospital: "Omdurman Hospital", status: "active" },
  { id: 4, name: "Dr. Ammar Mahmoud", spec: "Obstetrics & Gynaecology", hospital: "Khartoum Hospital", status: "active" },
];

const ASSESS = [
  { id: 1, tId: 1, trainee: "Ahmed Mohammed Ali", trainer: "Dr. Sara Ahmed", type: "DOPS", proc: "Caesarean Section — Delivery", date: "2026-02-15", result: "Good", year: 2, axis: "Clinical Skills", note: "Good performance; decision-making speed needs improvement" },
  { id: 2, tId: 2, trainee: "Fatima Abdullah Hassan", trainer: "Dr. Sara Ahmed", type: "DOPS", proc: "Ultrasound Examination", date: "2026-02-10", result: "Excellent", year: 1, axis: "Clinical Skills", note: "Excellent performance, high measurement accuracy" },
  { id: 3, tId: 3, trainee: "Mohammed Ibrahim Yusuf", trainer: "Dr. Khalid Omar", type: "DOPS", proc: "Myomectomy", date: "2026-02-08", result: "Needs Improvement", year: 3, axis: "Clinical Skills", note: "Requires more training on surgical technique" },
  { id: 4, tId: 4, trainee: "Hala Othman Mahmoud", trainer: "Dr. Khalid Omar", type: "DOPS", proc: "Normal Vaginal Delivery", date: "2026-01-28", result: "Excellent", year: 4, axis: "Clinical Skills", note: "Outstanding performance and confidence" },
  { id: 5, tId: 1, trainee: "Ahmed Mohammed Ali", trainer: "Dr. Sara Ahmed", type: "DOPS", proc: "High-Risk Pregnancy Assessment", date: "2026-01-20", result: "Good", year: 2, axis: "Clinical Skills", note: "Noticeable improvement" },
  { id: 6, tId: 7, trainee: "Salma Yaqoub Khalid", trainer: "Dr. Nadia Hassan", type: "Communication Assessment", proc: "Informing Family of Complications", date: "2026-02-12", result: "Good", year: 3, axis: "Teamwork & Communication", note: "Good communication" },
  { id: 7, tId: 8, trainee: "Hossam Al-Din Awad", trainer: "Dr. Nadia Hassan", type: "DOPS", proc: "General Gynaecological Examination", date: "2026-02-18", result: "Good", year: 1, axis: "Clinical Skills", note: "Good start" },
  { id: 8, tId: 6, trainee: "Mariam Saleh Abdulrahman", trainer: "Dr. Khalid Omar", type: "Environment Assessment", proc: "Learning Environment — Emergency", date: "2026-02-05", result: "Good", year: 2, axis: "Learning Environment", note: "Suitable environment with recommendations" },
];

const DOCS = [
  { id: 1, tId: 2, trainee: "Fatima Abdullah Hassan", type: "Maternity Leave", date: "2026-01-15", ft: "PDF", uploadedBy: "trainer" },
  { id: 2, tId: 1, trainee: "Ahmed Mohammed Ali", type: "Scientific Presentation", date: "2026-02-01", ft: "PDF", uploadedBy: "trainee" },
  { id: 3, tId: 3, trainee: "Mohammed Ibrahim Yusuf", type: "Course Certificate", date: "2025-12-20", ft: "Image", uploadedBy: "trainee" },
  { id: 4, tId: 1, trainee: "Ahmed Mohammed Ali", type: "Investigation Committee Minutes", date: "2025-11-10", ft: "PDF", uploadedBy: "trainer" },
  { id: 5, tId: 7, trainee: "Salma Yaqoub Khalid", type: "Scientific Presentation", date: "2026-01-22", ft: "PDF", uploadedBy: "trainee" },
  { id: 6, tId: 4, trainee: "Hala Othman Mahmoud", type: "Simulation Certificate", date: "2026-02-10", ft: "Image", uploadedBy: "trainee" },
];

const TPLS = [
  { id: 1, name: "DOPS — Caesarean Section", year: "All Years", items: 12, axis: "Clinical Skills" },
  { id: 2, name: "DOPS — Normal Vaginal Delivery", year: "Year 1–2", items: 10, axis: "Clinical Skills" },
  { id: 3, name: "DOPS — Ultrasound Examination", year: "All Years", items: 8, axis: "Clinical Skills" },
  { id: 4, name: "DOPS — Myomectomy", year: "Year 3–4", items: 14, axis: "Clinical Skills" },
  { id: 5, name: "DOPS — High-Risk Pregnancy Assessment", year: "All Years", items: 9, axis: "Clinical Skills" },
  { id: 6, name: "Teamwork & Communication Assessment", year: "All Years", items: 7, axis: "Teamwork & Communication" },
  { id: 7, name: "Learning Environment Assessment", year: "All Years", items: 6, axis: "Learning Environment" },
  { id: 8, name: "DOPS — General Gynaecological Examination", year: "Year 1–2", items: 11, axis: "Clinical Skills" },
];

// ─── PENDING REGISTRATIONS (Moderator review queue) ───
const PENDING_REGISTRATIONS = [
  { id: 1, name: "Nour El-Din Salah", email: "noureldinsalah@example.com", role: "Trainee", hospital: "Khartoum Teaching Hospital", submittedAt: "2026-02-25", idDoc: "passport_nour.pdf", code: "TRN-2026-041" },
  { id: 2, name: "Dr. Amira Fadl", email: "amirafadl@example.com", role: "Trainer", hospital: "Omdurman Hospital", submittedAt: "2026-02-24", idDoc: "passport_amira.pdf", code: "CON-2026-012" },
  { id: 3, name: "Hassan Abdelmoneim", email: "hassanabdelmoneim@example.com", role: "Trainee", hospital: "Bahri Hospital", submittedAt: "2026-02-23", idDoc: "id_hassan.pdf", code: "TRN-2026-042" },
];

// ─── ICON SYSTEM ───
const Ic = ({ d, s = 20, c = C.muted }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const I = {
  dash:    "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  users:   "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2 M23 21v-2a4 4 0 00-3-3.87 M9 7a4 4 0 110-8 4 4 0 010 8 M16 3.13a4 4 0 010 7.75",
  clip:    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2",
  file:    "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  gear:    "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
  search:  "M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z M21 21l-4.35-4.35",
  up:      "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
  out:     "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
  plus:    "M12 5v14 M5 12h14",
  eye:     "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z M12 9a3 3 0 110 6 3 3 0 010-6z",
  cal:     "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z M16 2v4 M8 2v4 M3 10h18",
  award:   "M12 15l-3.5 2 .67-3.89L6 10.22l3.94-.34L12 6.5l2.06 3.38 3.94.34-3.17 2.89.67 3.89z",
  book:    "M4 19.5A2.5 2.5 0 016.5 17H20 M4 19.5A2.5 2.5 0 004 17V5a2.5 2.5 0 012.5-2.5H20v17",
  warn:    "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z M12 9v4 M12 17h.01",
  check:   "M20 6L9 17l-5-5",
  x:       "M18 6L6 18 M6 6l12 12",
  shield:  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  lock:    "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z M17 11V7a5 5 0 00-10 0v4",
  id:      "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z M12 17a2 2 0 100-4 2 2 0 000 4z",
  mod:     "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
};

// ─── REUSABLE PRIMITIVES ───
const Bdg = ({ children, c = C.accent, b = C.accentSoft }) => (
  <span style={{ display: "inline-block", padding: "3px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600, color: c, backgroundColor: b, whiteSpace: "nowrap" }}>
    {children}
  </span>
);

const SBdg = ({ s }) => {
  const m = {
    active:             { l: "Active",           c: C.success,      b: C.successSoft },
    frozen:             { l: "Frozen",            c: C.danger,       b: C.dangerSoft },
    pending:            { l: "Pending",           c: C.warning,      b: C.warningSoft },
    approved:           { l: "Approved",          c: C.success,      b: C.successSoft },
    rejected:           { l: "Rejected",          c: C.danger,       b: C.dangerSoft },
    Excellent:          { l: "Excellent",         c: C.success,      b: C.successSoft },
    Good:               { l: "Good",              c: C.primaryLight, b: C.accentSoft },
    "Needs Improvement":{ l: "Needs Improvement", c: C.warning,      b: C.warningSoft },
    Weak:               { l: "Weak",              c: C.danger,       b: C.dangerSoft },
    // Arabic legacy keys
    "ممتاز":            { l: "Excellent",         c: C.success,      b: C.successSoft },
    "جيد":              { l: "Good",              c: C.primaryLight, b: C.accentSoft },
    "يحتاج تحسين":      { l: "Needs Improvement", c: C.warning,      b: C.warningSoft },
    "ضعيف":             { l: "Weak",              c: C.danger,       b: C.dangerSoft },
  };
  const v = m[s] || { l: s, c: C.muted, b: "#F1F5F9" };
  return <Bdg c={v.c} b={v.b}>{v.l}</Bdg>;
};

const ABdg = ({ a }) => {
  const m = {
    "Clinical Skills":         { c: "#7C3AED", b: "#EDE9FE" },
    "Learning Environment":    { c: "#0891B2", b: "#CFFAFE" },
    "Teamwork & Communication":{ c: "#EA580C", b: "#FFF7ED" },
  };
  const v = m[a] || { c: C.muted, b: "#F1F5F9" };
  return <Bdg c={v.c} b={v.b}>{a}</Bdg>;
};

const PBar = ({ v, mx, h = 8 }) => {
  const p = Math.round((v / mx) * 100);
  const cl = p >= 80 ? C.success : p >= 50 ? C.warning : C.danger;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: h, borderRadius: h, backgroundColor: "#E2E8F0", overflow: "hidden" }}>
        <div style={{ width: `${p}%`, height: "100%", borderRadius: h, backgroundColor: cl, transition: "width 0.6s" }}/>
      </div>
      <span style={{ fontSize: 12, fontWeight: 700, color: cl, minWidth: 36, textAlign: "center" }}>{p}%</span>
    </div>
  );
};

const Crd = ({ children, style, onClick, hv }) => {
  const [h, sH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => sH(true)} onMouseLeave={() => sH(false)}
      style={{ backgroundColor: C.card, borderRadius: 16, border: `1px solid ${C.border}`, padding: 24, boxShadow: h && hv ? "0 8px 30px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)", transition: "all 0.2s", cursor: onClick ? "pointer" : "default", transform: h && hv ? "translateY(-2px)" : "none", ...style }}>
      {children}
    </div>
  );
};

const Stat = ({ icon, label, value, sub, color = C.accent }) => (
  <Crd hv style={{ padding: "16px 18px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 46, height: 46, borderRadius: 12, backgroundColor: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Ic d={icon} s={22} c={color}/>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: C.muted, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: C.text, lineHeight: 1.1 }}>{value}</div>
        {sub && <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  </Crd>
);

const Tbl = ({ cols, data, onRow }) => (
  <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${C.border}` }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
      <thead>
        <tr style={{ backgroundColor: "#F8FAFC" }}>
          {cols.map((c, i) => (
            <th key={i} style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: C.muted, fontSize: 12, borderBottom: `2px solid ${C.border}`, whiteSpace: "nowrap" }}>{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i} onClick={() => onRow?.(r)} style={{ cursor: onRow ? "pointer" : "default", borderBottom: `1px solid ${C.border}` }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#F8FAFC"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
            {cols.map((c, j) => (
              <td key={j} style={{ padding: "12px 16px", color: C.text, whiteSpace: "nowrap" }}>{c.render ? c.render(r) : r[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Btn = ({ children, onClick, v = "primary", sz = "md", icon, sx }) => {
  const st = { primary: [C.primary, "#fff"], accent: [C.accent, "#fff"], ghost: ["transparent", C.muted], success: [C.success, "#fff"], danger: [C.danger, "#fff"], outline: ["transparent", C.primary], moderator: [C.moderator, "#fff"] };
  const [bg, cl] = st[v] || st.primary;
  const pd = sz === "sm" ? "6px 14px" : sz === "lg" ? "14px 28px" : "10px 20px";
  const fs = sz === "sm" ? 13 : sz === "lg" ? 16 : 14;
  return (
    <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: pd, borderRadius: 10, fontSize: fs, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s", backgroundColor: bg, color: cl, border: v === "outline" ? `2px solid ${C.primary}` : "none", ...sx }}>
      {icon && <Ic d={icon} s={sz === "sm" ? 14 : 18} c={cl}/>}
      {children}
    </button>
  );
};

const Search = ({ value, onChange, ph }) => (
  <div style={{ position: "relative", flex: 1, minWidth: 200, maxWidth: 360 }}>
    <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)" }}>
      <Ic d={I.search} s={18} c={C.light}/>
    </div>
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={ph}
      style={{ width: "100%", padding: "10px 40px 10px 16px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit", outline: "none", backgroundColor: C.card, color: C.text, direction: "rtl", boxSizing: "border-box" }}/>
  </div>
);

const YTL = ({ y }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, direction: "ltr" }}>
    {[1,2,3,4].map(v => (
      <div key={v} style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, backgroundColor: v < y ? C.success : v === y ? C.accent : "#E2E8F0", color: v <= y ? "#fff" : C.muted, boxShadow: v === y ? `0 0 0 3px ${C.accent}30` : "none" }}>
          {v < y ? "✓" : v}
        </div>
        {v < 4 && <div style={{ width: 24, height: 3, backgroundColor: v < y ? C.success : "#E2E8F0", borderRadius: 2 }}/>}
      </div>
    ))}
  </div>
);

const Modal = ({ title, onClose, children, w = 640 }) => {
  const isMobile = useMobile();
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center", zIndex: 1000, padding: isMobile ? 0 : 20 }}>
      <div style={{ backgroundColor: C.card, borderRadius: isMobile ? "20px 20px 0 0" : 20, padding: isMobile ? "24px 20px" : 32, maxWidth: w, width: "100%", maxHeight: isMobile ? "92vh" : "90vh", overflowY: "auto", direction: "rtl" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: C.primary, margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: C.muted, fontFamily: "inherit" }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};

const FL = ({ label, children }) => (
  <div>
    <label style={{ fontSize: 13, fontWeight: 700, color: C.muted, display: "block", marginBottom: 6 }}>{label}</label>
    {children}
  </div>
);
const Sel = ({ value, onChange, opts, ph }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit", direction: "rtl", backgroundColor: "#fff" }}>
    <option value="">{ph}</option>
    {opts.map((o, i) => <option key={i} value={o.v}>{o.l}</option>)}
  </select>
);
const Inp = ({ value, onChange, ph, dir = "rtl", type = "text" }) => (
  <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={ph}
    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit", direction: dir, boxSizing: "border-box" }}/>
);
const TA = ({ value, onChange, ph }) => (
  <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} placeholder={ph}
    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit", resize: "vertical", direction: "rtl", boxSizing: "border-box" }}/>
);
const UpZone = ({ text = "Drag file here or click to upload", sub = "PDF / JPG / PNG — max 10MB" }) => (
  <div style={{ border: `2px dashed ${C.border}`, borderRadius: 12, padding: 28, textAlign: "center", cursor: "pointer", backgroundColor: "#FAFBFC" }}>
    <Ic d={I.up} s={32} c={C.light}/>
    <p style={{ color: C.muted, fontSize: 14, margin: "8px 0 0" }}>{text}</p>
    <p style={{ color: C.light, fontSize: 12, margin: "4px 0 0" }}>{sub}</p>
  </div>
);

// ─── ASSESSMENT FORM ───
const AssessForm = ({ onClose, tFilter }) => {
  const [fd, sfd] = useState({ trainee: "", tpl: "", cl: {}, result: "", note: "" });
  const tpl = TPLS.find(t => t.name === fd.tpl);
  const items = tpl ? Array.from({ length: tpl.items }, (_, i) => `Assessment Item ${i + 1}`) : [];
  const avail = tFilter ? TRAINEES.filter(t => t.tid === tFilter && t.status === "active") : TRAINEES.filter(t => t.status === "active");
  const ck = Object.values(fd.cl).filter(Boolean).length;
  const results = ["Excellent", "Good", "Needs Improvement", "Weak"];
  const rcm = { "Excellent": [C.success, C.successSoft], "Good": [C.accent, C.accentSoft], "Needs Improvement": [C.warning, C.warningSoft], "Weak": [C.danger, C.dangerSoft] };

  return (
    <Modal title="New Assessment (DOPS)" onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <FL label="Select Resident">
          <Sel value={fd.trainee} onChange={v => sfd({ ...fd, trainee: v })} ph="— Select Trainee —"
            opts={avail.map(t => ({ v: t.name, l: `${t.name} — Year ${t.year} — ${t.hospital}` }))}/>
        </FL>
        <FL label="Select Assessment Form">
          <Sel value={fd.tpl} onChange={v => sfd({ ...fd, tpl: v, cl: {} })} ph="— Select Template —"
            opts={TPLS.map(t => ({ v: t.name, l: `${t.name} (${t.axis})` }))}/>
        </FL>
        {tpl && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <ABdg a={tpl.axis}/><Bdg>{tpl.year}</Bdg><Bdg c={C.muted} b="#F1F5F9">{tpl.items} items</Bdg>
          </div>
        )}
        {items.length > 0 && (
          <FL label={`Checklist (${ck}/${items.length})`}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: 16, backgroundColor: "#F8FAFC", borderRadius: 12, maxHeight: 200, overflowY: "auto" }}>
              {items.map((it, i) => (
                <label key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, cursor: "pointer", padding: "5px 0" }}>
                  <input type="checkbox" checked={fd.cl[i] || false} onChange={e => sfd({ ...fd, cl: { ...fd.cl, [i]: e.target.checked } })} style={{ width: 18, height: 18, accentColor: C.accent }}/>
                  {it}
                </label>
              ))}
            </div>
          </FL>
        )}
        <FL label="Qualitative Rating">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {results.map(r => {
              const s = fd.result === r;
              const [cc, cb] = rcm[r];
              return (
                <button key={r} onClick={() => sfd({ ...fd, result: r })}
                  style={{ padding: "10px 22px", borderRadius: 10, fontSize: 14, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", border: s ? `2px solid ${cc}` : `1px solid ${C.border}`, backgroundColor: s ? cb : "#fff", color: s ? cc : C.muted, transition: "all 0.15s", transform: s ? "scale(1.05)" : "scale(1)" }}>
                  {r}
                </button>
              );
            })}
          </div>
        </FL>
        <FL label="Trainer Notes"><TA value={fd.note} onChange={v => sfd({ ...fd, note: v })} ph="Add your notes and recommendations here..."/></FL>
        <FL label="Attach File (optional)"><UpZone/></FL>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Btn v="success" icon={I.up} onClick={onClose}>Submit Assessment</Btn>
          <Btn v="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </Modal>
  );
};

// ─── UPLOAD DOC ───
// Per meeting decision: only Consultants (trainers) and Admin can upload sensitive documents.
// Trainees can only upload: Scientific Presentation, Course Certificate, Simulation Certificate.
const TRAINER_ONLY_DOC_TYPES = ["Maternity Leave (>2 weeks)", "Investigation Committee Minutes", "Sick Leave (>2 weeks)", "Official Administrative Leave"];
const TRAINEE_DOC_TYPES      = ["Scientific Presentation", "Course Certificate", "Simulation Certificate", "Other"];

const DocUpload = ({ onClose, tFilter, uploaderRole }) => {
  const [fd, sfd] = useState({ trainee: "", docType: "", title: "" });
  const avail = tFilter ? TRAINEES.filter(t => t.id === tFilter) : TRAINEES;
  const docTypes = uploaderRole === "trainee" ? TRAINEE_DOC_TYPES : [...TRAINER_ONLY_DOC_TYPES, ...TRAINEE_DOC_TYPES];

  return (
    <Modal title="Upload New Document" onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {uploaderRole === "trainer" && (
          <div style={{ padding: "10px 14px", backgroundColor: C.warningSoft, borderRadius: 10, borderRight: `4px solid ${C.warning}`, fontSize: 13, color: C.warning, fontWeight: 600 }}>
            ⚠ As a Consultant, you are the sole authority for uploading sensitive administrative documents (e.g. maternity leaves, investigation minutes) on behalf of registrars.
          </div>
        )}
        {uploaderRole === "trainee" && (
          <div style={{ padding: "10px 14px", backgroundColor: C.accentSoft, borderRadius: 10, borderRight: `4px solid ${C.accent}`, fontSize: 13, color: C.primaryLight }}>
            ℹ Sensitive administrative documents (maternity leaves, investigation minutes) can only be uploaded by your assigned Consultant.
          </div>
        )}
        <FL label="Resident">
          <Sel value={fd.trainee} onChange={v => sfd({ ...fd, trainee: v })} ph="— Select Trainee —"
            opts={avail.map(t => ({ v: t.name, l: t.name }))}/>
        </FL>
        <FL label="Document Type">
          <Sel value={fd.docType} onChange={v => sfd({ ...fd, docType: v })} ph="— Select Type —"
            opts={docTypes.map(v => ({ v, l: v }))}/>
        </FL>
        <FL label="Document Title"><Inp value={fd.title} onChange={v => sfd({ ...fd, title: v })} ph="Enter document title"/></FL>
        <FL label="File"><UpZone/></FL>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Btn v="accent" icon={I.up} onClick={onClose}>Upload Document</Btn>
          <Btn v="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </Modal>
  );
};

// ─── ADD USER (Admin) ───
const AddUser = ({ onClose, type }) => {
  const [fd, sfd] = useState({ name: "", email: "", hospital: "", year: "1", trainer: "" });
  const isTr = type === "trainee";
  return (
    <Modal title={isTr ? "Add New Resident" : "Add New Consultant"} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <FL label="Full Name"><Inp value={fd.name} onChange={v => sfd({ ...fd, name: v })} ph="Enter full name"/></FL>
        <FL label="Email"><Inp value={fd.email} onChange={v => sfd({ ...fd, email: v })} ph="example@email.com" dir="ltr"/></FL>
        <FL label="Hospital">
          <Sel value={fd.hospital} onChange={v => sfd({ ...fd, hospital: v })} ph="— Select —"
            opts={["Khartoum Teaching Hospital","Omdurman Hospital","Bahri Hospital","Khartoum Hospital"].map(v => ({ v, l: v }))}/>
        </FL>
        {isTr && (
          <>
            <FL label="Training Year">
              <Sel value={fd.year} onChange={v => sfd({ ...fd, year: v })} ph=""
                opts={[1,2,3,4].map(y => ({ v: String(y), l: `Year ${y}` }))}/>
            </FL>
            <FL label="Assigned Consultant">
              <Sel value={fd.trainer} onChange={v => sfd({ ...fd, trainer: v })} ph="— Select Consultant —"
                opts={TRAINERS.map(t => ({ v: t.name, l: `${t.name} — ${t.hospital}` }))}/>
            </FL>
          </>
        )}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Btn v="accent" icon={I.plus} onClick={onClose}>Save</Btn>
          <Btn v="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </Modal>
  );
};

// ─── TPL UPLOAD ───
const TplUpload = ({ onClose }) => {
  const [fd, sfd] = useState({ name: "", axis: "Clinical Skills", year: "all" });
  return (
    <Modal title="Upload New Assessment Template" onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <FL label="Template Name"><Inp value={fd.name} onChange={v => sfd({ ...fd, name: v })} ph="e.g. DOPS — Caesarean Section"/></FL>
        <FL label="Assessment Axis">
          <Sel value={fd.axis} onChange={v => sfd({ ...fd, axis: v })} ph=""
            opts={["Clinical Skills","Learning Environment","Teamwork & Communication"].map(v => ({ v, l: v }))}/>
        </FL>
        <FL label="Target Year">
          <Sel value={fd.year} onChange={v => sfd({ ...fd, year: v })} ph=""
            opts={[{ v: "all", l: "All Years" },{ v: "1-2", l: "Year 1–2" },{ v: "3-4", l: "Year 3–4" }]}/>
        </FL>
        <FL label="Template File"><UpZone text="Upload template file (PDF)"/></FL>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Btn v="accent" icon={I.up} onClick={onClose}>Upload Template</Btn>
          <Btn v="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </Modal>
  );
};

// ─── TRAINEE PROFILE ───
const Profile = ({ t, onClose }) => {
  const isMobile = useMobile();
  const ta = ASSESS.filter(a => a.tId === t.id);
  const td = DOCS.filter(d => d.tId === t.id);
  const [tab, sTab] = useState("a");
  const rc = {
    ex: ta.filter(a => a.result === "Excellent" || a.result === "ممتاز").length,
    gd: ta.filter(a => a.result === "Good"      || a.result === "جيد").length,
    ni: ta.filter(a => a.result === "Needs Improvement" || a.result === "يحتاج تحسين").length,
  };

  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center", zIndex: 1000, padding: isMobile ? 0 : 20 }}>
      <div style={{ backgroundColor: C.bg, borderRadius: isMobile ? "20px 20px 0 0" : 20, maxWidth: 860, width: "100%", maxHeight: isMobile ? "92vh" : "90vh", overflowY: "auto", direction: "rtl" }}>
        <div style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryLight})`, padding: "24px 28px", borderRadius: "20px 20px 0 0", color: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 4 }}>Resident Portfolio</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>{t.name}</h2>
              <p style={{ margin: "6px 0 0", opacity: 0.75, fontSize: 13 }}>{t.hospital} — {t.trainer} — {t.uni}</p>
            </div>
            <button onClick={onClose} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: "6px 12px", color: "#fff", fontSize: 18, cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
            <YTL y={t.year}/><SBdg s={t.status}/>
          </div>
        </div>
        <div style={{ padding: "20px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 20 }}>
            <Crd style={{ padding: 14, textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 800, color: C.accent }}>{t.done}/{t.total}</div><div style={{ fontSize: 11, color: C.muted }}>Assessments</div></Crd>
            <Crd style={{ padding: 14, textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 800, color: C.success }}>{rc.ex}</div><div style={{ fontSize: 11, color: C.muted }}>Excellent</div></Crd>
            <Crd style={{ padding: 14, textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 800, color: C.primaryLight }}>{rc.gd}</div><div style={{ fontSize: 11, color: C.muted }}>Good</div></Crd>
            <Crd style={{ padding: 14, textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 800, color: C.warning }}>{rc.ni}</div><div style={{ fontSize: 11, color: C.muted }}>Needs Improvement</div></Crd>
          </div>
          <Crd style={{ marginBottom: 16, padding: 14 }}><PBar v={t.done} mx={t.total} h={12}/></Crd>
          <div style={{ display: "flex", gap: 4, marginBottom: 16, backgroundColor: "#F1F5F9", borderRadius: 10, padding: 3 }}>
            {[{ id: "a", l: `Assessments (${ta.length})` },{ id: "d", l: `Documents (${td.length})` }].map(x => (
              <button key={x.id} onClick={() => sTab(x.id)}
                style={{ flex: 1, padding: "9px 14px", borderRadius: 8, fontSize: 13, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", border: "none", backgroundColor: tab === x.id ? "#fff" : "transparent", color: tab === x.id ? C.primary : C.muted, boxShadow: tab === x.id ? "0 1px 3px rgba(0,0,0,0.1)" : "none", transition: "all 0.15s" }}>
                {x.l}
              </button>
            ))}
          </div>
          {tab === "a" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ta.length > 0 ? ta.map(a => (
                <Crd key={a.id} style={{ padding: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{a.proc}</div>
                      <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{a.type} • {a.date} • {a.trainer}</div>
                      {a.note && <div style={{ fontSize: 12, color: C.muted, marginTop: 8, fontStyle: "italic", padding: "6px 10px", backgroundColor: "#F8FAFC", borderRadius: 8, borderRight: `3px solid ${C.accent}` }}>"{a.note}"</div>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                      <SBdg s={a.result}/><ABdg a={a.axis}/>
                    </div>
                  </div>
                </Crd>
              )) : <p style={{ color: C.muted, textAlign: "center", padding: 24 }}>No assessments found</p>}
            </div>
          )}
          {tab === "d" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {td.length > 0 ? td.map(d => (
                <Crd key={d.id} style={{ padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: d.ft === "PDF" ? C.dangerSoft : C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Ic d={I.file} s={18} c={d.ft === "PDF" ? C.danger : C.accent}/>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13 }}>{d.type}</div>
                        <div style={{ fontSize: 11, color: C.muted }}>{d.date} — {d.ft} — Uploaded by: {d.uploadedBy}</div>
                      </div>
                    </div>
                    <Bdg c={C.success} b={C.successSoft}>Verified</Bdg>
                  </div>
                </Crd>
              )) : <p style={{ color: C.muted, textAlign: "center", padding: 24 }}>No documents found</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── REGISTRATION FORM (new users — sent invitation code required) ───
const RegisterForm = ({ onBack }) => {
  const [step, setStep] = useState(1); // step 1 = code entry, step 2 = details, step 3 = submitted
  const [fd, sfd] = useState({ code: "", name: "", email: "", role: "", hospital: "", year: "1", idUploaded: false });

  if (step === 3) {
    return (
      <div style={{ maxWidth: 460, width: "100%", textAlign: "center", direction: "rtl" }}>
        <Crd style={{ padding: 36 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: C.successSoft, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Ic d={I.check} s={32} c={C.success}/>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.text, margin: "0 0 10px" }}>Registration Submitted</h2>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 20px" }}>
            Your registration is <b>pending review</b> by the Moderator team. You will be notified once your account is activated.
          </p>
          <div style={{ padding: "12px 18px", backgroundColor: C.warningSoft, borderRadius: 10, fontSize: 13, color: C.warning, fontWeight: 600, marginBottom: 20 }}>
            ⏳ Awaiting identity verification and account activation
          </div>
          <Btn v="outline" onClick={onBack}>Back to Login</Btn>
        </Crd>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 460, width: "100%", direction: "rtl" }}>
      <div style={{ marginBottom: 20, textAlign: "center" }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>Create Account</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, margin: 0 }}>
          You must have received an <b>invitation code</b> from the Council before registering.
        </p>
      </div>
      <Crd style={{ padding: 28 }}>
        {/* Step indicator */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, direction: "ltr" }}>
          {[1, 2].map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: s < 2 ? 1 : 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, backgroundColor: step >= s ? C.accent : "#E2E8F0", color: step >= s ? "#fff" : C.muted }}>
                {step > s ? "✓" : s}
              </div>
              {s < 2 && <div style={{ flex: 1, height: 3, backgroundColor: step > s ? C.accent : "#E2E8F0", margin: "0 8px", borderRadius: 2 }}/>}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 14px", backgroundColor: C.accentSoft, borderRadius: 10, fontSize: 13, color: C.primaryLight }}>
              <Ic d={I.lock} s={16} c={C.primaryLight}/> Enter the invitation code sent to you by the Council
            </div>
            <FL label="Invitation Code">
              <Inp value={fd.code} onChange={v => sfd({ ...fd, code: v })} ph="e.g. TRN-2026-041" dir="ltr"/>
            </FL>
            <Btn v="accent" sz="lg" onClick={() => fd.code.trim() && setStep(2)} sx={{ width: "100%", justifyContent: "center" }}>
              Verify Code
            </Btn>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FL label="Full Name (as in passport/ID)">
              <Inp value={fd.name} onChange={v => sfd({ ...fd, name: v })} ph="Full name in English"/>
            </FL>
            <FL label="Email Address">
              <Inp value={fd.email} onChange={v => sfd({ ...fd, email: v })} ph="example@email.com" dir="ltr"/>
            </FL>
            <FL label="Role">
              <Sel value={fd.role} onChange={v => sfd({ ...fd, role: v })} ph="— Select Role —"
                opts={[{ v: "trainee", l: "Resident (Trainee)" },{ v: "trainer", l: "Consultant (Trainer)" }]}/>
            </FL>
            <FL label="Hospital">
              <Sel value={fd.hospital} onChange={v => sfd({ ...fd, hospital: v })} ph="— Select Hospital —"
                opts={["Khartoum Teaching Hospital","Omdurman Hospital","Bahri Hospital","Khartoum Hospital"].map(v => ({ v, l: v }))}/>
            </FL>
            {fd.role === "trainee" && (
              <FL label="Training Year">
                <Sel value={fd.year} onChange={v => sfd({ ...fd, year: v })} ph=""
                  opts={[1,2,3,4].map(y => ({ v: String(y), l: `Year ${y}` }))}/>
              </FL>
            )}
            <FL label="Upload Identity Proof (Passport or National ID)">
              <div onClick={() => sfd({ ...fd, idUploaded: true })}
                style={{ border: `2px dashed ${fd.idUploaded ? C.success : C.border}`, borderRadius: 12, padding: 22, textAlign: "center", cursor: "pointer", backgroundColor: fd.idUploaded ? C.successSoft : "#FAFBFC", transition: "all 0.2s" }}>
                <Ic d={fd.idUploaded ? I.check : I.id} s={28} c={fd.idUploaded ? C.success : C.light}/>
                <p style={{ color: fd.idUploaded ? C.success : C.muted, fontSize: 13, margin: "8px 0 0", fontWeight: fd.idUploaded ? 700 : 400 }}>
                  {fd.idUploaded ? "Identity document uploaded ✓" : "Click to upload passport or national ID"}
                </p>
                {!fd.idUploaded && <p style={{ color: C.light, fontSize: 12, margin: "4px 0 0" }}>PDF / JPG / PNG — max 5MB</p>}
              </div>
            </FL>
            <div style={{ padding: "10px 14px", backgroundColor: C.moderatorSoft, borderRadius: 10, fontSize: 12, color: C.moderator }}>
              🛡 Your identity document will be reviewed by the Moderator team before account activation.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Btn v="ghost" onClick={() => setStep(1)}>Back</Btn>
              <Btn v="success" sz="lg" icon={I.up} onClick={() => setStep(3)} sx={{ flex: 1, justifyContent: "center" }}>
                Submit Registration
              </Btn>
            </div>
          </div>
        )}
      </Crd>
    </div>
  );
};

// ─── MODERATOR: PENDING ACCOUNT REVIEW MODAL ───
const ReviewModal = ({ reg, onClose }) => {
  const [decision, setDecision] = useState(null);
  return (
    <Modal title={`Review Registration — ${reg.name}`} onClose={onClose} w={560}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[["Full Name", reg.name],["Email", reg.email],["Role", reg.role],["Hospital", reg.hospital],["Invitation Code", reg.code],["Submitted", reg.submittedAt]].map(([l, v]) => (
            <div key={l} style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: C.muted, marginBottom: 3 }}>{l}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: 14, border: `1px solid ${C.border}`, borderRadius: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 10 }}>Identity Document</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: C.dangerSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ic d={I.file} s={18} c={C.danger}/>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{reg.idDoc}</div>
              <Btn v="ghost" sz="sm" icon={I.eye} sx={{ padding: "2px 8px", marginTop: 2 }}>View Document</Btn>
            </div>
          </div>
        </div>
        {!decision ? (
          <div style={{ display: "flex", gap: 10 }}>
            <Btn v="success" icon={I.check} onClick={() => setDecision("approved")} sx={{ flex: 1, justifyContent: "center" }}>Approve Account</Btn>
            <Btn v="danger" icon={I.x} onClick={() => setDecision("rejected")} sx={{ flex: 1, justifyContent: "center" }}>Reject</Btn>
          </div>
        ) : (
          <div style={{ padding: "12px 16px", backgroundColor: decision === "approved" ? C.successSoft : C.dangerSoft, borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <Ic d={decision === "approved" ? I.check : I.x} s={18} c={decision === "approved" ? C.success : C.danger}/>
            <span style={{ fontWeight: 700, color: decision === "approved" ? C.success : C.danger, fontSize: 14 }}>
              Account {decision === "approved" ? "Approved" : "Rejected"} — notification will be sent to {reg.email}
            </span>
          </div>
        )}
        <Btn v="ghost" onClick={onClose}>Close</Btn>
      </div>
    </Modal>
  );
};

// ─── MOBILE TOP BAR ───
const MobileHeader = ({ role, tab, onHamburger, sideOpen }) => {
  const tabs = {
    admin:     { dashboard:"Dashboard", trainees:"Residents", trainers:"Consultants", assessments:"Assessments", templates:"Templates", documents:"Documents" },
    moderator: { dashboard:"Dashboard", pending:"Pending Accounts", users:"User Management" },
    trainer:   { dashboard:"Dashboard", myTrainees:"My Residents", assessments:"Assessments" },
    trainee:   { dashboard:"My Portfolio", myAssess:"My Assessments", myDocs:"My Documents" },
  };
  const currentLabel = tabs[role]?.[tab] || "Dashboard";
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 56, backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", zIndex: 200, direction: "rtl" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>e-Portfolio</div>
        <div style={{ width: 1, height: 16, backgroundColor: "rgba(255,255,255,0.2)" }}/>
        <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{currentLabel}</div>
      </div>
      <button onClick={onHamburger} style={{ background: sideOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, width: 38, height: 38, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: sideOpen ? 0 : 5, cursor: "pointer", padding: 8, transition: "all 0.2s" }}>
        {sideOpen ? (
          <div style={{ fontSize: 20, color: "#fff", fontWeight: 300, lineHeight: 1, fontFamily: "inherit" }}>✕</div>
        ) : (
          <>
            <div style={{ width: 18, height: 2, backgroundColor: "#fff", borderRadius: 2 }}/>
            <div style={{ width: 18, height: 2, backgroundColor: "#fff", borderRadius: 2 }}/>
            <div style={{ width: 18, height: 2, backgroundColor: "#fff", borderRadius: 2 }}/>
          </>
        )}
      </button>
    </div>
  );
};

// ─── SIDEBAR ───
const Side = ({ role, tab, sTab, onOut, isMobile, isOpen, onClose }) => {
  const tabs = {
    admin:     [["dashboard","Dashboard",I.dash],["trainees","Residents",I.users],["trainers","Consultants",I.award],["assessments","Assessments",I.clip],["templates","Templates",I.book],["documents","Documents",I.file]],
    moderator: [["dashboard","Dashboard",I.dash],["pending","Pending Accounts",I.warn],["users","User Management",I.users]],
    trainer:   [["dashboard","Dashboard",I.dash],["myTrainees","My Residents",I.users],["assessments","Assessments",I.clip]],
    trainee:   [["dashboard","My Portfolio",I.dash],["myAssess","My Assessments",I.clip],["myDocs","My Documents",I.file]],
  };
  const names  = { admin: "Prof. Duriya Reis", moderator: "Moderator Team", trainer: "Dr. Sara Ahmed", trainee: "Ahmed Mohammed Ali" };
  const labels = { admin: "Admin", moderator: "Moderator", trainer: "Consultant", trainee: "Resident" };
  const roleColors = { admin: C.accent, moderator: C.moderator, trainer: C.success, trainee: C.warning };

  const handleNav = (id) => { sTab(id); if (isMobile) onClose(); };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div onClick={onClose} style={{ position: "fixed", top: 56, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 150 }}/>
      )}
      <div style={{
        width: 260,
        backgroundColor: C.primary,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        height: isMobile ? "calc(100vh - 56px)" : "100vh",
        position: "fixed",
        right: 0,
        top: isMobile ? 56 : 0,
        zIndex: 160,
        transition: "transform 0.3s ease",
        transform: isMobile ? (isOpen ? "translateX(0)" : "translateX(100%)") : "translateX(0)",
        boxShadow: isMobile && isOpen ? "-4px 0 20px rgba(0,0,0,0.3)" : "none",
      }}>
        <div style={{ padding: "22px 18px 14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.4, letterSpacing: 2, marginBottom: 3 }}>e-Portfolio System</div>
              <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.4 }}>Electronic Portfolio System</div>
              <div style={{ fontSize: 11, opacity: 0.45, marginTop: 2 }}>Sudan Obstetrics & Gynaecology Council</div>
            </div>
          </div>
        </div>
        <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: `${roleColors[role]}30`, border: `2px solid ${roleColors[role]}60`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>
            {names[role]?.[0]}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{names[role]}</div>
            <div style={{ fontSize: 10, opacity: 0.5 }}>
              <span style={{ backgroundColor: `${roleColors[role]}40`, padding: "1px 7px", borderRadius: 10, fontWeight: 700 }}>{labels[role]}</span>
            </div>
          </div>
        </div>
        <nav style={{ flex: 1, padding: "10px 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
          {(tabs[role] || []).map(([id, l, ic]) => (
            <button key={id} onClick={() => handleNav(id)}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, textAlign: "right", backgroundColor: tab === id ? "rgba(255,255,255,0.15)" : "transparent", color: tab === id ? "#fff" : "rgba(255,255,255,0.6)", transition: "all 0.15s" }}>
              <Ic d={ic} s={18} c={tab === id ? "#fff" : "rgba(255,255,255,0.35)"}/>
              {l}
              {id === "pending" && <span style={{ marginRight: "auto", backgroundColor: C.warning, color: "#fff", borderRadius: 10, padding: "1px 7px", fontSize: 11, fontWeight: 800 }}>{PENDING_REGISTRATIONS.length}</span>}
            </button>
          ))}
        </nav>
        <div style={{ padding: "10px 8px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={onOut}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 12px", borderRadius: 10, width: "100%", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, textAlign: "right", backgroundColor: "transparent", color: "rgba(255,255,255,0.45)" }}>
            <Ic d={I.out} s={18} c="rgba(255,255,255,0.35)"/>Logout
          </button>
        </div>
      </div>
    </>
  );
};

// ─── LOGIN ───
const Login = ({ onIn, onRegister }) => {
  const [s, ss] = useState(null);
  const [err, setErr] = useState(false);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${C.primary} 0%, #075985 50%, ${C.accent} 100%)`, padding: 20 }}>
      <div style={{ maxWidth: 460, width: "100%", textAlign: "center", direction: "rtl" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: 2, marginBottom: 8 }}>e-Portfolio System</div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", margin: "0 0 6px", lineHeight: 1.3 }}>Electronic Portfolio System</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, margin: 0 }}>Continuous Assessment Platform — Sudan Obstetrics & Gynaecology Council</p>
        </div>
        <Crd style={{ padding: 28 }}>
          <h2 style={{ fontSize: 17, fontWeight: 800, color: C.text, margin: "0 0 16px" }}>Sign In</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
            <Inp ph="Email address" value="" onChange={() => {}} dir="ltr"/>
            <input type="password" placeholder="Password" style={{ padding: "11px 12px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit", direction: "rtl", width: "100%", boxSizing: "border-box" }}/>
          </div>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.muted, margin: "0 0 10px" }}>— Or select a role to preview —</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
            {[
              ["admin",     "Admin",      I.gear,   "Prof. Duriya",  C.accent],
              ["moderator", "Moderator",  I.shield, "Mod. Team",     C.moderator],
              ["trainer",   "Consultant", I.award,  "Dr. Sara",      C.success],
              ["trainee",   "Resident",  I.users,  "Ahmed M.",      C.warning],
            ].map(([r,l,ic,n,col]) => (
              <button key={r} onClick={() => { ss(r); setErr(false); }}
                style={{ padding: "11px 10px", borderRadius: 12, border: s === r ? `2px solid ${col}` : `1px solid ${C.border}`, backgroundColor: s === r ? `${col}15` : "#fff", cursor: "pointer", fontFamily: "inherit", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, transition: "all 0.15s" }}>
                <Ic d={ic} s={20} c={s === r ? col : C.muted}/>
                <span style={{ fontSize: 12, fontWeight: 700, color: s === r ? col : C.muted }}>{l}</span>
                <span style={{ fontSize: 10, color: C.light }}>{n}</span>
              </button>
            ))}
          </div>
          {err && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: C.dangerSoft, border: `1px solid ${C.danger}`, borderRadius: 10, marginBottom: 12, color: C.danger, fontSize: 13, fontWeight: 600, textAlign: "center", justifyContent: "center" }}>
              ⚠️ Please choose your role: Moderator, Admin, Consultant, or Resident.
            </div>
          )}
          <Btn v="accent" sz="lg" onClick={() => { if (!s) { setErr(true); } else { onIn(s); } }} sx={{ width: "100%", justifyContent: "center" }}>Sign In</Btn>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: C.muted, margin: "0 0 8px" }}>Don't have an account?</p>
            <Btn v="outline" onClick={onRegister} sx={{ width: "100%", justifyContent: "center" }}>Register with Invitation Code</Btn>
          </div>
        </Crd>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 16 }}>RCOG + WFME 2023 — Sudan Medical Specialization Council</p>
      </div>
    </div>
  );
};

// ─── MODERATOR VIEWS ───
const ModDashboard = ({ onReview, setTab }) => {
  const pending = PENDING_REGISTRATIONS;
  const totalUsers = TRAINEES.length + TRAINERS.length;
  const activeUsers = TRAINEES.filter(t => t.status === "active").length + TRAINERS.length;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: 0 }}>Moderator Dashboard</h1>
        <p style={{ color: C.muted, margin: "4px 0 0", fontSize: 14 }}>Review registrations and manage user accounts</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
        <Stat icon={I.warn}   label="Pending Reviews"  value={pending.length}    sub="Awaiting activation" color={C.warning}/>
        <Stat icon={I.users}  label="Active Users"     value={activeUsers}        sub={`of ${totalUsers} total`} color={C.success}/>
        <Stat icon={I.check}  label="Approved Today"   value={2}                  sub="This week: 7" color={C.primaryLight}/>
        <Stat icon={I.shield} label="Moderator Role"   value="Active"             color={C.moderator}/>
      </div>
      {pending.length > 0 && (
        <Crd>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Ic d={I.warn} s={20} c={C.warning}/>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: 0 }}>Pending Registrations ({pending.length})</h2>
            </div>
            <Btn v="ghost" sz="sm" onClick={() => setTab("pending")}>View All →</Btn>
          </div>
          {pending.map(r => (
            <div key={r.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", backgroundColor: C.warningSoft, borderRadius: 10, marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
              <div>
                <b style={{ fontSize: 14 }}>{r.name}</b>
                <div style={{ fontSize: 12, color: C.muted }}>{r.role} — {r.hospital} — Submitted: {r.submittedAt}</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Bdg c={C.warning} b="#FDE68A">{r.role}</Bdg>
                <Btn v="moderator" sz="sm" icon={I.eye} onClick={() => onReview(r)}>Review</Btn>
              </div>
            </div>
          ))}
        </Crd>
      )}
      <Crd>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: "0 0 14px" }}>Quick Access</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "View All Pending", icon: I.warn, tab: "pending", color: C.warning },
            { label: "User Management", icon: I.users, tab: "users",   color: C.accent },
          ].map(item => (
            <button key={item.tab} onClick={() => setTab(item.tab)}
              style={{ padding: "16px 14px", borderRadius: 12, border: `1px solid ${C.border}`, backgroundColor: "#fff", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 10, transition: "all 0.15s" }}>
              <Ic d={item.icon} s={20} c={item.color}/>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{item.label}</span>
            </button>
          ))}
        </div>
      </Crd>
    </div>
  );
};

const ModPending = ({ onReview }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>Pending Registrations ({PENDING_REGISTRATIONS.length})</h1>
      <Bdg c={C.warning} b={C.warningSoft}>Requires Action</Bdg>
    </div>
    <Tbl
      cols={[
        { header: "Full Name",    render: r => <b>{r.name}</b> },
        { header: "Role",         render: r => <Bdg c={r.role === "Trainer" ? C.success : C.accent} b={r.role === "Trainer" ? C.successSoft : C.accentSoft}>{r.role}</Bdg> },
        { header: "Hospital",     key: "hospital" },
        { header: "Invite Code",  render: r => <span style={{ fontFamily: "monospace", fontSize: 12 }}>{r.code}</span> },
        { header: "Submitted",    key: "submittedAt" },
        { header: "ID Document",  render: r => <Bdg c={C.warning} b={C.warningSoft}>{r.idDoc}</Bdg> },
        { header: "",             render: r => <Btn v="moderator" sz="sm" icon={I.eye} onClick={() => onReview(r)}>Review</Btn> },
      ]}
      data={PENDING_REGISTRATIONS}
    />
  </div>
);

const ModUsers = () => {
  const allUsers = [
    ...TRAINEES.map(t => ({ ...t, userRole: "Resident", email: `${t.uni.toLowerCase()}@council.sd` })),
    ...TRAINERS.map(t => ({ ...t, userRole: "Consultant", email: `${t.name.toLowerCase().replace(/[. ]/g,"")  }@council.sd`, status: t.status })),
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>User Management ({allUsers.length})</h1>
      <Tbl
        cols={[
          { header: "Name",    render: r => <b>{r.name}</b> },
          { header: "Role",    render: r => <Bdg c={r.userRole === "Consultant" ? C.success : C.primaryLight} b={r.userRole === "Consultant" ? C.successSoft : C.accentSoft}>{r.userRole}</Bdg> },
          { header: "Hospital",key: "hospital" },
          { header: "Status",  render: r => <SBdg s={r.status}/> },
          { header: "Actions", render: r => (
            <div style={{ display: "flex", gap: 6 }}>
              {r.status === "active"
                ? <Btn v="danger"  sz="sm" icon={I.lock}>Freeze</Btn>
                : <Btn v="success" sz="sm" icon={I.check}>Activate</Btn>}
            </div>
          )},
        ]}
        data={allUsers}
      />
    </div>
  );
};

// ─── MAIN APP ───
export default function App() {
  const isMobile = useMobile();
  const [role,     sRole]    = useState(null);
  const [tab,      sTab]     = useState("dashboard");
  const [sideOpen, setSideOpen] = useState(false);
  const [showReg,  sShowReg] = useState(false);
  const [showAF,   sAF]      = useState(false);
  const [showDU,   sDU]      = useState(false);
  const [showAU,   sAU]      = useState(null);
  const [showTU,   sTU]      = useState(false);
  const [selT,     sSelT]    = useState(null);
  const [revReg,   sRevReg]  = useState(null);
  const [srch,     sSrch]    = useState("");
  const [yf,       sYf]      = useState("all");

  // Close sidebar on tab change when on mobile
  const handleTabChange = (id) => { sTab(id); if (isMobile) setSideOpen(false); };

  // ── REGISTRATION SCREEN ──
  if (!role && showReg) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${C.primary} 0%, #075985 50%, ${C.accent} 100%)`, padding: 20 }}>
        <RegisterForm onBack={() => sShowReg(false)}/>
      </div>
    );
  }

  // ── LOGIN SCREEN ──
  if (!role) {
    return <Login onIn={r => { sRole(r); sTab("dashboard"); }} onRegister={() => sShowReg(true)}/>;
  }

  // ── CONTENT RENDERER ──
  const content = () => {

    // ─── DASHBOARDS ───
    if (tab === "dashboard") {
      if (role === "admin") {
        const need = TRAINEES.filter(t => (t.done / t.total) < 0.6 && t.status === "active");
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: 0 }}>Welcome, Professor Duriya</h1>
              <p style={{ color: C.muted, margin: "4px 0 0", fontSize: 14 }}>Main Admin Dashboard</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              <Stat icon={I.users} label="Active Residents" value={TRAINEES.filter(t => t.status === "active").length} sub={`of ${TRAINEES.length}`} color={C.accent}/>
              <Stat icon={I.award} label="Consultants"       value={TRAINERS.length}  sub="Pilot phase" color={C.success}/>
              <Stat icon={I.clip}  label="Assessments"       value={ASSESS.length}    color={C.warning}/>
              <Stat icon={I.file}  label="Documents"         value={DOCS.length}      color={C.primaryLight}/>
            </div>
            <Crd>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: 0 }}>Latest Assessments</h2>
                <Btn v="ghost" sz="sm" onClick={() => sTab("assessments")}>View All →</Btn>
              </div>
              <Tbl cols={[
                { header: "Resident", render: r => <b>{r.trainee}</b> },
                { header: "Procedure", key: "proc" },
                { header: "Axis",      render: r => <ABdg a={r.axis}/> },
                { header: "Date",      key: "date" },
                { header: "Result",    render: r => <SBdg s={r.result}/> },
              ]} data={ASSESS.slice(0, 5)}/>
            </Crd>
            {need.length > 0 && (
              <Crd>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Ic d={I.warn} s={20} c={C.warning}/>
                  <h2 style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: 0 }}>Needs Follow-up ({need.length})</h2>
                </div>
                {need.map(t => (
                  <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", backgroundColor: C.warningSoft, borderRadius: 10, marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                    <div><b style={{ fontSize: 14 }}>{t.name}</b><div style={{ fontSize: 12, color: C.muted }}>{t.hospital} — Year {t.year}</div></div>
                    <div style={{ minWidth: 120 }}><PBar v={t.done} mx={t.total}/></div>
                  </div>
                ))}
              </Crd>
            )}
          </div>
        );
      }

      if (role === "moderator") return <ModDashboard onReview={r => sRevReg(r)} setTab={sTab}/>;

      if (role === "trainer") {
        const my = TRAINEES.filter(t => t.tid === 1);
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: 0 }}>Welcome, Dr. Sara Ahmed</h1>
              <p style={{ color: C.muted, margin: "4px 0 0", fontSize: 14 }}>Consultant Dashboard</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              <Stat icon={I.users} label="My Residents" value={my.length} sub={`${my.filter(t => t.status === "active").length} active`} color={C.accent}/>
              <Stat icon={I.clip}  label="My Assessments" value={ASSESS.filter(a => a.trainer === "Dr. Sara Ahmed").length} color={C.success}/>
            </div>
            <Crd>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>My Residents</h2>
                <Btn v="success" sz="sm" icon={I.plus} onClick={() => sAF(true)}>New Assessment</Btn>
              </div>
              {my.map(t => (
                <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: `1px solid ${C.border}`, flexWrap: "wrap", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: C.accent }}>{t.name[0]}</div>
                    <div><b style={{ fontSize: 13 }}>{t.name}</b><div style={{ fontSize: 11, color: C.muted }}>Year {t.year}</div></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <SBdg s={t.status}/>
                    <div style={{ minWidth: 100 }}><PBar v={t.done} mx={t.total}/></div>
                    <Btn v="ghost" sz="sm" icon={I.eye} onClick={() => sSelT(t)}>View</Btn>
                  </div>
                </div>
              ))}
            </Crd>
          </div>
        );
      }

      if (role === "trainee") {
        const me = TRAINEES[0];
        const myA = ASSESS.filter(a => a.tId === 1);
        const myD = DOCS.filter(d => d.tId === 1);
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: 0 }}>Welcome, {me.name}</h1>
              <p style={{ color: C.muted, margin: "4px 0 0", fontSize: 14 }}>Your Training Portfolio — Year {me.year}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontWeight: 700, color: C.muted, fontSize: 13 }}>Your Progress:</span>
              <YTL y={me.year}/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 14 }}>
              <Stat icon={I.clip}  label="Assessments"     value={`${me.done}/${me.total}`}/>
              <Stat icon={I.cal}   label="Training Year"   value={me.year}       color={C.success}/>
              <Stat icon={I.file}  label="Documents"       value={myD.length}    color={C.primaryLight}/>
              <Stat icon={I.award} label="Consultant"      value={me.trainer}    color={C.warning}/>
            </div>
            <Crd>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 10px" }}>Assessment Progress</h3>
              <PBar v={me.done} mx={me.total} h={12}/>
            </Crd>
            <div style={{ padding: "10px 16px", backgroundColor: C.accentSoft, borderRadius: 10, fontSize: 13, color: C.primaryLight }}>
              ℹ Sensitive administrative documents (maternity leaves, investigation minutes) must be uploaded by your assigned Consultant: <b>{me.trainer}</b>.
            </div>
            <Crd>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Latest Assessments</h3>
                <Btn v="ghost" sz="sm" onClick={() => sTab("myAssess")}>All →</Btn>
              </div>
              {myA.slice(0, 3).map(a => (
                <div key={a.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", backgroundColor: "#F8FAFC", borderRadius: 10, marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
                  <div><b style={{ fontSize: 13 }}>{a.proc}</b><div style={{ fontSize: 11, color: C.muted }}>{a.date} • {a.trainer}</div></div>
                  <div style={{ display: "flex", gap: 4 }}><SBdg s={a.result}/><ABdg a={a.axis}/></div>
                </div>
              ))}
            </Crd>
          </div>
        );
      }
    }

    // ─── TRAINEES LIST ───
    if (tab === "trainees") {
      const fl = TRAINEES.filter(t => (t.name.includes(srch) || t.hospital.includes(srch)) && (yf === "all" || t.year === parseInt(yf)));
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>Residents ({TRAINEES.length})</h1>
            <Btn icon={I.plus} onClick={() => sAU("trainee")}>Add Resident</Btn>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Search value={srch} onChange={sSrch} ph="Search..."/>
            <select value={yf} onChange={e => sYf(e.target.value)}
              style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: "inherit" }}>
              <option value="all">All Years</option>
              {[1,2,3,4].map(y => <option key={y} value={y}>Year {y}</option>)}
            </select>
          </div>
          <Tbl cols={[
            { header: "Name",       render: r => <b>{r.name}</b> },
            { header: "Year",       render: r => <YTL y={r.year}/> },
            { header: "Hospital",   key: "hospital" },
            { header: "Consultant", key: "trainer" },
            { header: "Status",     render: r => <SBdg s={r.status}/> },
            { header: "Progress",   render: r => <div style={{ minWidth: 110 }}><PBar v={r.done} mx={r.total}/></div> },
            { header: "",           render: r => <Btn v="ghost" sz="sm" icon={I.eye} onClick={() => sSelT(r)}>View</Btn> },
          ]} data={fl}/>
        </div>
      );
    }

    // ─── TRAINER'S TRAINEES ───
    if (tab === "myTrainees") {
      const my = TRAINEES.filter(t => t.tid === 1);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>My Residents ({my.length})</h1>
            <Btn icon={I.plus} v="success" onClick={() => sAF(true)}>New Assessment</Btn>
          </div>
          <Tbl cols={[
            { header: "Name",     render: r => <b>{r.name}</b> },
            { header: "Year",     render: r => <YTL y={r.year}/> },
            { header: "Hospital", key: "hospital" },
            { header: "Status",   render: r => <SBdg s={r.status}/> },
            { header: "Progress", render: r => <div style={{ minWidth: 110 }}><PBar v={r.done} mx={r.total}/></div> },
            { header: "",         render: r => <Btn v="ghost" sz="sm" icon={I.eye} onClick={() => sSelT(r)}>View</Btn> },
          ]} data={my}/>
        </div>
      );
    }

    // ─── TRAINERS LIST ───
    if (tab === "trainers") return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>Consultants ({TRAINERS.length})</h1>
          <Btn icon={I.plus} onClick={() => sAU("trainer")}>Add Consultant</Btn>
        </div>
        <Tbl cols={[
          { header: "Name",        render: r => <b>{r.name}</b> },
          { header: "Specialty",   key: "spec" },
          { header: "Hospital",    key: "hospital" },
          { header: "Residents",  render: r => <Bdg>{TRAINEES.filter(t => t.tid === r.id).length}</Bdg> },
          { header: "Status",      render: r => <SBdg s={r.status}/> },
        ]} data={TRAINERS}/>
      </div>
    );

    // ─── ASSESSMENTS ───
    if (tab === "assessments") {
      const data = role === "trainer" ? ASSESS.filter(a => a.trainer === "Dr. Sara Ahmed") : ASSESS;
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>Assessment Records ({data.length})</h1>
            <Btn icon={I.plus} v="success" onClick={() => sAF(true)}>New Assessment</Btn>
          </div>
          <Tbl cols={[
            { header: "Resident",  render: r => <b>{r.trainee}</b> },
            { header: "Consultant", key: "trainer" },
            { header: "Procedure",  key: "proc" },
            { header: "Axis",       render: r => <ABdg a={r.axis}/> },
            { header: "Date",       key: "date" },
            { header: "Result",     render: r => <SBdg s={r.result}/> },
          ]} data={data}/>
        </div>
      );
    }

    // ─── TRAINEE: MY ASSESSMENTS ───
    if (tab === "myAssess") {
      const my = ASSESS.filter(a => a.tId === 1);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>My Assessments ({my.length})</h1>
          {my.map(a => (
            <Crd key={a.id}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: 15 }}>{a.proc}</b>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{a.type} • {a.date} • {a.trainer}</div>
                  {a.note && <div style={{ fontSize: 12, color: C.muted, marginTop: 8, fontStyle: "italic", padding: "6px 10px", backgroundColor: "#F8FAFC", borderRadius: 8, borderRight: `3px solid ${C.accent}` }}>"{a.note}"</div>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                  <SBdg s={a.result}/><ABdg a={a.axis}/>
                </div>
              </div>
            </Crd>
          ))}
        </div>
      );
    }

    // ─── TEMPLATES ───
    if (tab === "templates") return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>Assessment Templates ({TPLS.length})</h1>
          <Btn icon={I.up} onClick={() => sTU(true)}>Upload New Template</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
          {TPLS.map(t => (
            <Crd key={t.id} hv>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Ic d={I.clip} s={20} c={C.accent}/>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: C.text, marginBottom: 6 }}>{t.name}</div>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    <ABdg a={t.axis}/><Bdg c={C.muted} b="#F1F5F9">{t.year}</Bdg><Bdg>{t.items} items</Bdg>
                  </div>
                </div>
              </div>
            </Crd>
          ))}
        </div>
      </div>
    );

    // ─── DOCUMENTS ───
    if (tab === "documents" || tab === "myDocs") {
      const data = tab === "myDocs" ? DOCS.filter(d => d.tId === 1) : DOCS;
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>
              {tab === "myDocs" ? "My Documents" : "Documents"} ({data.length})
            </h1>
            <Btn icon={I.up} onClick={() => sDU(true)}>Upload Document</Btn>
          </div>
          {tab === "myDocs" && (
            <div style={{ padding: "10px 16px", backgroundColor: C.accentSoft, borderRadius: 10, fontSize: 13, color: C.primaryLight }}>
              ℹ Sensitive documents (maternity leaves, investigation minutes) can only be uploaded by your assigned Consultant.
            </div>
          )}
          <Tbl cols={[
            ...(tab !== "myDocs" ? [{ header: "Resident", render: r => <b>{r.trainee}</b> }] : []),
            { header: "Type",       key: "type" },
            { header: "Format",     render: r => <Bdg c={r.ft === "PDF" ? C.danger : C.accent} b={r.ft === "PDF" ? C.dangerSoft : C.accentSoft}>{r.ft}</Bdg> },
            { header: "Date",       key: "date" },
            { header: "Uploaded By",render: r => <Bdg c={r.uploadedBy === "trainer" ? C.success : C.primaryLight} b={r.uploadedBy === "trainer" ? C.successSoft : C.accentSoft}>{r.uploadedBy}</Bdg> },
            { header: "Status",     render: () => <Bdg c={C.success} b={C.successSoft}>Verified</Bdg> },
          ]} data={data}/>
        </div>
      );
    }

    // ─── MODERATOR TABS ───
    if (tab === "pending") return <ModPending onReview={r => sRevReg(r)}/>;
    if (tab === "users")   return <ModUsers/>;

    return null;
  };

  return (
    <div style={{ direction: "rtl", fontFamily: "'Noto Sans Arabic', 'Segoe UI', Tahoma, sans-serif", backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Mobile top bar */}
      {isMobile && <MobileHeader role={role} tab={tab} onHamburger={() => setSideOpen(o => !o)} sideOpen={sideOpen}/>}

      {/* Sidebar — drawer on mobile, fixed on desktop */}
      <Side
        role={role} tab={tab} sTab={handleTabChange}
        onOut={() => { sRole(null); sTab("dashboard"); setSideOpen(false); }}
        isMobile={isMobile} isOpen={sideOpen} onClose={() => setSideOpen(false)}
      />

      {/* Main content */}
      <main style={{
        marginRight: isMobile ? 0 : 260,
        padding: isMobile ? "72px 16px 24px" : "24px 32px",
        minHeight: "100vh",
      }}>
        {content()}
      </main>

      {showAF  && <AssessForm onClose={() => sAF(false)} tFilter={role === "trainer" ? 1 : null}/>}
      {showDU  && <DocUpload  onClose={() => sDU(false)} tFilter={role === "trainee" ? 1 : null} uploaderRole={role}/>}
      {showAU  && <AddUser    onClose={() => sAU(null)}  type={showAU}/>}
      {showTU  && <TplUpload  onClose={() => sTU(false)}/>}
      {selT    && <Profile    t={selT}   onClose={() => sSelT(null)}/>}
      {revReg  && <ReviewModal reg={revReg} onClose={() => sRevReg(null)}/>}
    </div>
  );
}
