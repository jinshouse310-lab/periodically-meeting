/*
 * 定例会データ / Meeting data
 * ---------------------------------------------------------------
 * このファイルを編集すると、ダッシュボードに反映されます。
 * Edit this file to update the dashboard.
 *
 * frequency:
 *   { kind: "weekly" }
 *   { kind: "biweekly", anchor: "2026-09-01" }   // anchor = 開催週の任意の日付 / any date in an "on" week
 *   { kind: "monthly", nth: 2 }                   // 第n週 (1–4)、最終週は -1 / nth weekday of month, -1 = last
 * weekday: 0=日/Sun 1=月/Mon … 6=土/Sat
 * time: "HH:MM" (JST), duration: 分 / minutes
 * materials[].url: 空欄なら「リンク未設定」と表示 / leave "" to show "not linked"
 *
 * ※ 下記は構成例のサンプルデータです。実際の内容に置き換えてください。
 *   The entries below are sample data. Replace them with your own.
 */
window.MEETINGS_DATA = {
  sample: true,
  project: {
    ja: "バイオガス発電プロジェクト",
    en: "Biogas Power Project"
  },
  types: [
    { id: "steer",  code: "PMO", ja: "全体・経営",     en: "Steering" },
    { id: "eng",    code: "ENG", ja: "設計・技術",     en: "Engineering" },
    { id: "constr", code: "EPC", ja: "工程・施工",     en: "Construction" },
    { id: "feed",   code: "FST", ja: "原料調達",       en: "Feedstock" },
    { id: "om",     code: "O&M", ja: "運転・保守",     en: "Operations" },
    { id: "permit", code: "ENV", ja: "許認可・環境",   en: "Permits & Env." },
    { id: "grid",   code: "GRD", ja: "系統・売電",     en: "Grid & Offtake" },
    { id: "hse",    code: "HSE", ja: "安全衛生",       en: "Health & Safety" }
  ],
  meetings: [
    {
      id: "steering",
      type: "steer",
      name: { ja: "プロジェクト全体定例", en: "Project Steering Meeting" },
      frequency: { kind: "monthly", nth: 1 },
      weekday: 1, time: "10:00", duration: 90,
      location: { ja: "本社 会議室A ＋ オンライン", en: "HQ Room A + online" },
      owner: { ja: "プロジェクトマネージャー", en: "Project Manager" },
      participants: [
        { ja: "事業責任者", en: "Business owner" },
        { ja: "各分科会リーダー", en: "Workstream leads" },
        { ja: "EPC 元請", en: "EPC contractor" },
        { ja: "レンダー窓口", en: "Lender liaison" }
      ],
      purpose: {
        ja: "全体工程・予算・リスクの確認と、分科会で決めきれない事項の意思決定。",
        en: "Review overall schedule, budget and risks; decide issues escalated from workstreams."
      },
      materials: [
        { ja: "マスタースケジュール", en: "Master schedule", url: "" },
        { ja: "リスク登録簿", en: "Risk register", url: "" },
        { ja: "月次進捗報告書", en: "Monthly progress report", url: "" }
      ]
    },
    {
      id: "engineering",
      type: "eng",
      name: { ja: "設計・技術定例", en: "Engineering Review" },
      frequency: { kind: "weekly" },
      weekday: 2, time: "14:00", duration: 60,
      location: { ja: "オンライン", en: "Online" },
      owner: { ja: "技術リーダー", en: "Engineering Lead" },
      participants: [
        { ja: "プロセス設計", en: "Process design" },
        { ja: "電気・計装", en: "Electrical & I&C" },
        { ja: "メタン発酵設備メーカー", en: "Digester supplier" },
        { ja: "ガスエンジンメーカー", en: "Gas engine supplier" }
      ],
      purpose: {
        ja: "消化槽・脱硫・ガスホルダー・発電設備の設計課題、図面承認、仕様変更の確認。",
        en: "Resolve design issues for digester, desulfurization, gas holder and CHP; approve drawings and spec changes."
      },
      materials: [
        { ja: "図面承認リスト", en: "Drawing approval list", url: "" },
        { ja: "P&ID 最新版", en: "Latest P&ID", url: "" },
        { ja: "技術課題管理表", en: "Technical issue log", url: "" }
      ]
    },
    {
      id: "construction",
      type: "constr",
      name: { ja: "工程・施工定例", en: "Construction Progress Meeting" },
      frequency: { kind: "weekly" },
      weekday: 4, time: "10:00", duration: 60,
      location: { ja: "現場事務所", en: "Site office" },
      owner: { ja: "施工管理責任者", en: "Construction Manager" },
      participants: [
        { ja: "EPC 元請 現場代理人", en: "EPC site agent" },
        { ja: "主要協力会社", en: "Key subcontractors" },
        { ja: "発注者 工事監理", en: "Owner's engineer" }
      ],
      purpose: {
        ja: "週間工程の進捗・遅延対策、資機材搬入、検査・試運転の段取り確認。",
        en: "Track weekly progress and delays, material deliveries, inspections and commissioning prep."
      },
      materials: [
        { ja: "週間工程表", en: "Weekly look-ahead schedule", url: "" },
        { ja: "現場写真フォルダ", en: "Site photo folder", url: "" }
      ]
    },
    {
      id: "feedstock",
      type: "feed",
      name: { ja: "原料調達定例", en: "Feedstock Supply Meeting" },
      frequency: { kind: "biweekly", anchor: "2026-09-02" },
      weekday: 3, time: "15:00", duration: 45,
      location: { ja: "オンライン", en: "Online" },
      owner: { ja: "原料調達担当", en: "Feedstock Manager" },
      participants: [
        { ja: "酪農組合", en: "Dairy cooperative" },
        { ja: "食品工場（残渣排出者）", en: "Food plant (waste supplier)" },
        { ja: "収集運搬業者", en: "Waste hauler" }
      ],
      purpose: {
        ja: "家畜ふん尿・食品残渣の受入量（t/日）、性状（TS・VS）、搬入スケジュールと契約条件の確認。",
        en: "Review manure and food-waste intake (t/day), quality (TS/VS), delivery schedule and contract terms."
      },
      materials: [
        { ja: "原料受入実績表", en: "Feedstock intake log", url: "" },
        { ja: "原料供給契約", en: "Feedstock supply agreements", url: "" }
      ]
    },
    {
      id: "om",
      type: "om",
      name: { ja: "運転・保守定例", en: "O&M Meeting" },
      frequency: { kind: "weekly" },
      weekday: 5, time: "09:30", duration: 45,
      location: { ja: "プラント管理棟", en: "Plant control building" },
      owner: { ja: "プラント所長", en: "Plant Manager" },
      participants: [
        { ja: "運転員", en: "Operators" },
        { ja: "保守担当", en: "Maintenance" },
        { ja: "ガスエンジン保守会社", en: "Engine service provider" }
      ],
      purpose: {
        ja: "バイオガス発生量（Nm³/日）、メタン濃度、消化槽温度、発電量と停止・トラブルの振り返り。",
        en: "Review biogas yield (Nm³/day), methane content, digester temperature, power output and outages."
      },
      materials: [
        { ja: "運転日報", en: "Daily operation reports", url: "" },
        { ja: "保全計画", en: "Maintenance plan", url: "" },
        { ja: "トラブル記録", en: "Incident log", url: "" }
      ]
    },
    {
      id: "permitting",
      type: "permit",
      name: { ja: "許認可・環境定例", en: "Permitting & Environment" },
      frequency: { kind: "monthly", nth: 3 },
      weekday: 3, time: "13:30", duration: 60,
      location: { ja: "本社 会議室B", en: "HQ Room B" },
      owner: { ja: "許認可担当", en: "Permitting Lead" },
      participants: [
        { ja: "環境コンサルタント", en: "Environmental consultant" },
        { ja: "法務", en: "Legal" },
        { ja: "地元対応担当", en: "Community relations" }
      ],
      purpose: {
        ja: "廃棄物処理法・建築・消防の申請状況、臭気対策、消化液（液肥）利用と地元説明の進捗確認。",
        en: "Track waste, building and fire permits, odor control, digestate use as fertilizer and community engagement."
      },
      materials: [
        { ja: "許認可トラッカー", en: "Permit tracker", url: "" },
        { ja: "臭気測定結果", en: "Odor survey results", url: "" }
      ]
    },
    {
      id: "grid",
      type: "grid",
      name: { ja: "系統連系・売電定例", en: "Grid & Power Offtake" },
      frequency: { kind: "monthly", nth: 2 },
      weekday: 4, time: "16:00", duration: 60,
      location: { ja: "オンライン", en: "Online" },
      owner: { ja: "事業開発担当", en: "Business Development Lead" },
      participants: [
        { ja: "電気主任技術者", en: "Chief electrical engineer" },
        { ja: "一般送配電事業者 窓口", en: "Grid operator contact" },
        { ja: "小売電気事業者", en: "Power purchaser" }
      ],
      purpose: {
        ja: "系統連系工事の協議、FIT/FIP 認定・売電契約、発電計画の提出状況を確認。",
        en: "Coordinate grid connection works, FIT/FIP approval, power purchase agreement and generation forecasts."
      },
      materials: [
        { ja: "連系協議記録", en: "Grid connection minutes", url: "" },
        { ja: "売電契約書", en: "Power purchase agreement", url: "" }
      ]
    },
    {
      id: "hse",
      type: "hse",
      name: { ja: "安全衛生定例", en: "HSE Meeting" },
      frequency: { kind: "weekly" },
      weekday: 1, time: "08:30", duration: 30,
      location: { ja: "現場事務所", en: "Site office" },
      owner: { ja: "安全管理者", en: "HSE Manager" },
      participants: [
        { ja: "現場作業責任者", en: "Work supervisors" },
        { ja: "協力会社 職長", en: "Subcontractor foremen" }
      ],
      purpose: {
        ja: "今週の危険予知（KY）、硫化水素・メタン漏洩対策、ヒヤリハットの共有。",
        en: "Weekly hazard review, H₂S and methane leak precautions, near-miss sharing."
      },
      materials: [
        { ja: "KY シート", en: "Hazard assessment sheet", url: "" },
        { ja: "ヒヤリハット報告", en: "Near-miss reports", url: "" }
      ]
    }
  ]
};
