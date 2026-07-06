export const personalInfo = {
  name: "蔣羽茿",
  university: "中山醫學大學",
  department: "醫學資訊學系",
  phone: "0910-628-070",
  email: "yuzhuj.2024@gmail.com",
  description: "專注於 AI 情緒辨識、多模態分析、前端開發 與 UI/UX 設計。擁有專案開發、競賽與國際研討會發表經驗。",
  bio: [
    "您好！我是蔣羽茿。目前就讀中山醫學大學醫學資訊學系。曾經擔任系學會的執秘，負責會議紀錄與文書撰寫。專注於 AI 情緒辨識、多模態分析與 UI/UX 設計領域，並且也有寫過腳本與拍攝影片。",
    "在學期間參與多項競賽、專案開發與國際研討會投稿，逐漸培養跨領域整合與系統開發能力。",
    "我喜歡將技術與使用者體驗結合，希望透過設計與程式開發，建立真正能解決問題的系統與互動體驗。",
    "除了技術能力之外，我也重視團隊溝通與專案協作，面對問題時習慣主動學習並持續優化。"
  ],
  status: [
    "申請大專生計畫",
    "參加2026 GiCS女婕思創意競賽",
    "個人化椅墊設計"
  ],
  traits: ["抗壓性高", "團隊溝通與協作", "專案執行能力", "跨領域整合能力", "持續優化與學習"],
  directions: ["UI / UX 設計", "AI 情緒辨識", "資料分析", "前端互動開發", "智慧醫療系統", "簡報與提案"],
};

export const radarData = [
  { label: "AI 研發", score: 40 },
  { label: "UI/UX", score: 55 },
  { label: "數據分析", score: 45 },
  { label: "溝通協作", score: 70 },
  { label: "開發能力", score: 75 },
];

export const skills = [
  {
    category: "前端開發",
    techs: "HTML / CSS / JavaScript",
    proficiency: 45,
    projects: ["個人網站", "AI初步問診系統", "模擬維基百科_資料庫網站"]
  },
  {
    category: "UI/UX",
    techs: "Figma / Prototype / Stitch",
    proficiency: 55,
    projects: ["康博AI健康管家", "借塑一宿", "青青眼護你"]
  },
  {
    category: "AI Development",
    techs: "TensorFlow / OpenCV / CNNs",
    proficiency: 40,
    projects: ["Transformer情緒辨識研究", "基於深度學習之即時情緒辨識系統"]
  },
  {
    category: "Database",
    techs: "MSSQL / MySQL / XAMPP",
    proficiency: 35,
    projects: ["進貨管理系統", "AI初步問診系統"]
  }
];

export const awards = [
  {
    year: "2026",
    badge: "學術發表",
    title: "11th ICBDA 國際研討會",
    desc: "“A Scalable Multimodal Big Data Framework for Transformer-Based Emotion Recognition and Mental Health Analytic”"
  },
  {
    year: "2025",
    badge: "第二名",
    title: "永續智慧創新黑客松競賽",
    desc: "專案：「康博AI健康管家」智慧診所互動體驗設計計畫",
    role: "負責：系統介面設計與 Demo"
  },
  {
    year: "2025",
    badge: "佳作",
    title: "全國大專校院智慧創新暨跨域整合創作競賽",
    desc: "項目：體感互動科技",
    role: "負責：專案開發"
  },
  {
    year: "2025",
    badge: "優勝",
    title: "第五屆尋找資安女捷思",
    desc: "項目：創意發想賽",
    role: "負責：劇本發想、影片剪輯、報告"
  },
  {
    year: "2025",
    badge: "學術發表",
    title: "中國科技大學資訊科技應用國際學術研討會",
    role: "基於深度學習之即時情緒辨識系統於高壓職業環境的應用與評估"
  },
  {
    year: "2025",
    badge: "第二名",
    title: "中山醫學大學全國智慧醫療暨永續發展創意競賽",
    desc: "項目：智慧醫療組",
    role: "負責：專案開發"
  },
  {
    year: "2025",
    badge: "第一名",
    title: "第二屆中山醫學大學資料視覺化創意競賽",
    desc: "項目：體感互動科技",
    role: "負責：資料查找與清洗"
  },
  {
    year: "2024",
    badge: "第二名",
    title: "永續智慧創新黑客松競賽",
    desc: "項目：封閉式循環區域回收系統建置",
    role: "負責：創意構想、文書處理"
  },
  {
    year: "2024",
    badge: "第三名",
    title: "永續智慧創新黑客松競賽",
    desc: "項目：正確偏頭痛的就醫與用藥攻略",
    role: "負責：上台發表"
  },
  {
    year: "2024",
    badge: "佳作",
    title: "中山醫學大學第九屆「全國大專院校創新、創意及創業競賽」",
    desc: "項目：創新科技組",
    role: "負責：專案開發"
  }
];

export const projects = [
  {
    id: "transformer",
    title: "A Scalable Multimodal Big Data Framework for Transformer-Based Emotion Recognition and Mental Health Analytic",
    summary: "建立基於 Transformer 的多模態情緒辨識框架，整合臉部、語音、文字與生理訊號 (ECG、GSR)五種模態。",
    tags: ["ICBDA 2026", "情緒辨識", "多模態架構", "大數據處理"],
    core: "建立一套整合文字、影像、語音與生理訊號的系統，用於心理健康分析與即時情緒監測。本研究旨在解決傳統橫行處理非同步訊號時的對齊難題。",
    highlights: [
      "多模態融合：整合五種模態資訊，降低單一資料源判斷偏差。",
      "跨模態注意力機制：建立共享潛在空間 (Shared Latent Space)，有效捕捉關聯性。",
      "資料集驗證：使用 CK+、IEMOCAP 等公開資料集進行訓練。"
    ],
    links: [
      { text: "研討會發表.PDF", url: "file/A Scalable Multimodal Big Data Framework for Transformer_Based Emotion Recognition and Mental Health Analytics.pdf" }
    ],
    images: [
      { src: "images/P.png", caption: "研討會發表證明1" },
      { src: "images/P2.jpg", caption: "研討會發表證明2" }
    ]
  },
  {
    id: "clinic",
    title: "康博AI健康管家",
    summary: "2025永續智慧創新黑客松競賽項目之一，提出一套結合AI與穿戴式裝置的智慧系統。",
    tags: ["UI/UX Design", "Figma", "AI", "Smart Health"],
    core: "旨在整合康博集團旗下的產業，包含診所、長照服務及泰式按摩服務等。整合多項功能設計一套提供給一般民眾與專業人員的系統。",
    highlights: [
      "介面規劃：負責整體 UIUX 設計，提高使用者使用上的視覺流暢度。",
      "AI輔助分析：設計AI評估介面，協助使用者分析身體健康程度。",
      "多功能：整合線上掛號、報到、用藥提醒等多方面功能。"
    ],
    links: [
      { text: "查看PPT內容", url: "file/Clinic.pdf" },
      { text: "簡易Demo", url: "https://www.figma.com/proto/WzqWInPIsnI8283F0elvOo/%E5%BA%B7%E5%8D%9AAPP%E5%88%9D%E7%89%88%E8%A8%AD%E8%A8%88?node-id=7-74&p=f&t=X2CWq31EmN4lTaRS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A74&show-proto-sidebar=1" }
    ],
    images: [
      { src: "images/Clinic1.png", caption: "UI 頁面展示" },
      { src: "images/Clinic2.png", caption: "獲勝獎狀" }
    ]
  },
  {
    id: "gics",
    title: "數位醫療的防線：運用區塊鏈技術保護醫療隱私",
    summary: "「霍格華資」團隊參加2025 GiCS尋找資安女婕思，且運用以太坊證明服務 (EAS) 打造去中心化醫療隱私防線。",
    tags: ["Ethereum Attestation Service", "Blockchain", "GiCS 2025"],
    core: "隨著醫療產業數位化，中心化系統逐漸成為駭客目標。本團隊旨在建構一套可即時驗證、去中心化且不可竄改的安全機制，守護病患隱私。",
    highlights: [
      "獨立證明紀錄：每次資料存取自動產生不可竄改的上鏈紀錄，確保法律效力。",
      "病患專屬 UID：透過唯一識別碼綁定醫療紀錄，精準控管授權，防範濫權行為。",
      "彈性隱私選擇：使用者可決定資料是否上鏈，敏感個資可僅產生離線證明。",
      "去中心化韌性：運作於以太坊主網，不因單一節點故障影響驗證系統穩定性。"
    ],
    links: [
      { text: "競賽簡報.PDF", url: "files/GiCS.pdf" }
    ],
    images: [
      { src: "images/GICS1.png", caption: "獲勝獎狀" }
    ]
  },
  {
    id: "emotion",
    title: "基於深度學習之即時情緒辨識系統於高壓職業環境的應用與評估",
    summary: "發表於 2025 資訊科技應用國際學術研討會，探討深度學習於高壓職業環境之情緒偵測。",
    tags: ["Deep Learning", "CNNs & OpenCV", "FIDA Algorithm"],
    core: "針對警察、醫療等高壓職場環境，現行情緒評估往往缺乏專業即時性。本研究開發一套即時辨識系統，旨在透過技術干預及預防情緒失衡引發的職業風險。",
    highlights: [
      "影像預處理：利用 OpenCV 進行臉部聚焦、特徵辨識及光線補償，提升環境適應力。",
      "模型架構：採用 CNNs 深度學習模型進行特徵擷取，並結合 FIDA 演算法進行加權分析。",
      "四大功能模組：整合情緒辨識、情緒補給、情感連線與情緒足跡。"
    ],
    links: [
      { text: "研討會發表.PDF", url: "file/Emotion.pdf" }
    ],
    images: [
      { src: "images/Emotion.png", caption: "發表證明" }
    ]
  },
  {
    id: "powerai",
    title: "私立醫學大學知識轉譯與教育吸引力之評估：產學能量與招生吸引力之對話",
    summary: "參加第二屆中山醫學大學資料視覺化創意競賽，利用大數據分析私立醫學大學之產學合作能量與招生吸引力之關聯性研究。",
    tags: ["大數據分析", "Data Cleaning", "知識轉譯", "Power BI"],
    core: "在少子化與高等教育競爭激烈的背景下，本研究聚焦於私立醫學大學如何透過強化產學合作與研發表現，來維持穩定的招生吸引力。",
    highlights: [
      "產學研發指標：分析專利申請件數、新品種授權數、以及產學合作計畫之平均經費。",
      "教育吸引力指標：追蹤歷年新生註冊率、在學學生人數及專任師資變動趨勢。",
      "跨校整合比對：針對北醫、中醫大、高醫、慈濟、中山醫等多所醫學大學進行數據標準化評比。"
    ],
    links: [
      { text: "完整研究報告", url: "https://1drv.ms/f/c/614e8e41087c5cef/IgAkdieNWJngQbDOCeXzU-ddARoTYc0oSFfhfUXfw_ytpMc?e=xQ4cEZ" },
      { text: "資料清洗技術文件", url: "file/Power AI.pdf" }
    ],
    images: [
      { src: "images/Power AI.png", caption: "獲勝獎狀" },
      { src: "images/Power AI2.jpg", caption: "dashboard介面展示" }
    ]
  },
  {
    id: "plastic",
    title: "借塑一宿_封閉式循環回收系統",
    summary: "「台灣塑社」團隊參加2024年黑客松競賽，結合 AI 辨識與超商通路的智慧回收平台，旨在解決廢塑膠回收率低與環保意識不足之痛點。",
    tags: ["AI 辨識", "循環經濟", "智慧回收"],
    core: "結合AI辨識與超商通路，打造智慧化封閉式循環回收系統。",
    highlights: [
      "AI 辨識技術",
      "超商通路合作"
    ],
    links: [],
    images: []
  }
];
