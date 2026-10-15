// Vietnamese / Japanese switch shared by /pm and /pm-brse.
// The pages are written in Vietnamese; switching to Japanese swaps each text node through JA
// (exact match on the trimmed text), falling back to RULES for recurring patterns.
// Choice order: ?lang= in the URL, then the viewer's saved choice, then the browser language.
(function(){
  var JA={
    // titles, attributes
    'Đặng Việt Phong – Project Manager':'Đặng Việt Phong – プロジェクトマネージャー',
    'Ảnh chân dung Đặng Việt Phong':'Đặng Việt Phong の顔写真',
    'Chế độ xem kinh nghiệm':'職務経歴の表示モード',

    // hero
    'Hồ sơ ứng tuyển · PM':'応募書類 · PM',
    'Hồ sơ ứng tuyển · BrSE / PM':'応募書類 · BrSE / PM',
    'Project Manager cho khách hàng Nhật, đi lên từ IT Comtor và BrSE. Tôi thống nhất phạm vi với khách hàng, lập kế hoạch, điều phối team và quản lý tiến độ, rủi ro đến khi bàn giao, dùng AI để tăng tốc ở từng bước.':'日本のお客様向けのプロジェクトマネージャー。ITコミュニケーター、BrSEを経てPMになりました。お客様との範囲合意、計画立案、チームの調整、進捗・リスク管理から納品までを担当し、各工程でAIを活用してスピードを上げています。',
    '4 năm làm phần mềm cho khách hàng Nhật, đi từ IT Comtor lên BrSE rồi PM. Tôi hearing và define yêu cầu, truyền đạt cho team phát triển, và dùng AI để tăng tốc từ khâu phân tích đến khi bàn giao.':'日本のお客様向けソフトウェア開発に4年間携わり、ITコミュニケーターからBrSE、PMへとステップアップしました。要件のヒアリングと定義、開発チームへの伝達を担当し、分析から納品までAIを活用してスピードを上げています。',
    'Sao chép':'コピー',
    'Đã sao chép':'コピーしました',
    'Đã chọn':'選択しました',
    '133 Lê Duẩn, Hoàn Kiếm, Hà Nội':'133 Lê Duẩn, Hoàn Kiếm, ハノイ',
    'Sinh ngày 09/12/1994':'1994年12月9日生まれ',
    'năm':'年',
    'dự án':'件',
    'làm việc với khách hàng Nhật':'日本のお客様との業務経験',
    'làm PM, tổng 61 MM, team đến 10 người':'PMとして担当、計61MM・最大10名のチーム',
    'từ 2 dự án mới đã chốt PO với khách hàng':'受注確定済みの新規2案件',
    'và TOEIC 700–800':'TOEIC 700–800',
    'dự án đa dạng domain, infra phần lớn trên AWS':'多様なドメインのプロジェクト、インフラの大半はAWS',
    'triển khai sản phẩm bằng Claude':'Claudeを活用したプロダクト開発',

    // career path
    'Lộ trình':'経歴',
    'ĐH Thông tin Kyushu':'九州情報大学',
    'Quản trị Mạng – HTTT':'ネットワーク管理・情報システム',
    'Thực tập Cisco Tokyo':'シスコ東京でインターン',
    'Tự học tại Nhật':'日本で自己研鑽',
    'Tài chính, JLPT N2':'財務、JLPT N2',
    'IT Comtor':'ITコミュニケーター',

    // skills
    'Kỹ năng':'スキル',
    'Ngôn ngữ':'語学',
    'Tiếng Nhật':'日本語',
    'Tiếng Anh':'英語',
    'Xác định phạm vi':'範囲定義',
    'Ước lượng công số':'工数見積もり',
    'Phân bổ resource & schedule':'リソース・スケジュール配分',
    'Quản lý tiến độ':'進捗管理',
    'Quản lý ngân sách':'予算管理',
    'Quản lý rủi ro':'リスク管理',
    'Change request':'変更要求対応',
    'Weekly report':'週次報告',
    'Kiểm soát chất lượng':'品質管理',
    'Bàn giao':'納品',
    'Viết prompt / skill':'プロンプト・スキル作成',
    'Hearing & define yêu cầu':'要件ヒアリング・定義',
    'SRS / Basic Design tiếng Nhật':'日本語の要件定義書・基本設計書',
    'Truyền đạt spec, Q&A':'仕様伝達・Q&A',
    'Biên phiên dịch Nhật–Việt':'日越翻訳・通訳',
    'Hearing requirement':'要件ヒアリング',
    'Phân tích & define yêu cầu':'要件分析・定義',
    'SRS':'要件定義書',
    'Basic Design':'基本設計書',
    'Thiết kế màn hình, DB, API':'画面・DB・API設計',
    'Review testcase':'テストケースレビュー',
    'Acceptance test':'受入テスト',
    'Tài liệu tiếng Nhật':'日本語ドキュメント作成',
    'Kỹ thuật':'技術',
    'Công cụ':'ツール',

    // experience
    'Kinh nghiệm':'職務経歴',
    'Hiện tại':'現在',
    'Trước khi có AI':'AI導入前',
    'Mỗi bước kèm phần việc do AI đảm nhận (nhãn AI).':'各工程に、AIが担う作業を併記しています（AIラベル）。',
    'Cách làm trước đây: mỗi bước do con người thực hiện thủ công.':'以前のやり方：各工程を人が手作業で行っていました。',
    'Công ty Cổ phần Kaopiz Software':'株式会社Kaopiz Software',
    'Bridge System Engineer':'ブリッジシステムエンジニア',

    'Xác định phạm vi:':'範囲定義：',
    'làm việc trực tiếp với khách hàng Nhật để thống nhất phạm vi và định hướng sản phẩm.':'日本のお客様と直接やり取りし、範囲と製品の方向性を合意。',
    'thống nhất phạm vi và định hướng sản phẩm với khách hàng Nhật.':'日本のお客様と範囲・製品の方向性を合意。',
    'Tổng hợp yêu cầu và biên bản họp thành danh sách hạng mục.':'要望と議事録をもとに対象項目一覧を作成。',
    'Lập kế hoạch:':'計画立案：',
    'chia WBS, ước lượng công số, phân bổ resource và schedule cho team phát triển.':'WBS作成、工数見積もり、開発チームのリソースとスケジュールを配分。',
    'phân bổ resource và schedule cho team phát triển.':'開発チームのリソースとスケジュールを配分。',
    'Dựng WBS và ước lượng công số từ SRS.':'要件定義書からWBSを作成し、工数を見積もり。',
    'Theo dõi & điều phối:':'進捗管理・調整：',
    'quản lý tiến độ và ngân sách, điều phối công việc của team hằng ngày.':'進捗と予算を管理し、チームの作業を日々調整。',
    'quản lý tiến độ, ngân sách và điều phối team hằng ngày.':'進捗・予算の管理とチームの日々の調整。',
    'Tổng hợp tình trạng task, phát hiện sớm hạng mục chậm.':'タスク状況を集計し、遅れている項目を早期に発見。',
    'Quản lý rủi ro & thay đổi:':'リスク・変更管理：',
    'theo dõi rủi ro, xử lý change request và điều chỉnh kế hoạch khi phạm vi thay đổi.':'リスクを監視し、変更要求に対応。範囲が変わった際は計画を見直し。',
    'xử lý change request và điều chỉnh kế hoạch.':'変更要求への対応と計画の見直し。',
    'Đánh giá nhanh ảnh hưởng của change request lên phạm vi và schedule.':'変更要求が範囲とスケジュールに与える影響を素早く評価。',
    'Báo cáo:':'報告：',
    'gửi weekly report và họp tiến độ định kỳ với khách hàng.':'週次報告書を送付し、お客様と定例の進捗会議を実施。',
    'họp tiến độ định kỳ với khách hàng.':'お客様との定例進捗会議。',
    'Soạn weekly report tiếng Nhật hoàn chỉnh.':'日本語の週次報告書を作成。',
    'Bàn giao:':'納品：',
    'kiểm soát chất lượng đầu ra, đảm bảo bàn giao dự án đúng thời hạn.':'成果物の品質を管理し、期限どおりの納品を確保。',
    'kiểm soát chất lượng, bàn giao dự án đúng thời hạn.':'品質管理と期限どおりの納品。',
    'Rà soát tài liệu và checklist bàn giao.':'納品資料とチェックリストを確認。',

    'Yêu cầu & thiết kế:':'要件・設計：',
    'hearing và Q&A với khách hàng Nhật, chốt yêu cầu, viết SRS và Basic Design (màn hình, luồng nghiệp vụ, DB, API) bằng tiếng Nhật; tư vấn kiến trúc trên AWS.':'日本のお客様へのヒアリングとQ&A、要件の確定、要件定義書・基本設計書（画面、業務フロー、DB、API）を日本語で作成。AWS上のアーキテクチャを提案。',
    'hearing, chốt yêu cầu với khách hàng Nhật; tư vấn kiến trúc trên AWS.':'日本のお客様へのヒアリングと要件確定、AWS上のアーキテクチャ提案。',
    'Tóm tắt biên bản họp, viết SRS, Basic Design, API spec và spec tiếng Việt hoàn chỉnh.':'議事録の要約、要件定義書・基本設計書・API仕様書・ベトナム語仕様書を作成。',
    'Truyền đạt & nghiệm thu:':'伝達・受入：',
    'giải thích spec, trả lời Q&A cho team dev; review testcase, kết quả phát triển và hỗ trợ khách hàng acceptance test.':'開発チームへの仕様説明とQ&A対応。テストケースと開発成果をレビューし、お客様の受入テストを支援。',
    'giải thích spec cho team dev, hỗ trợ khách hàng acceptance test.':'開発チームへの仕様説明、お客様の受入テスト支援。',
    'Đối chiếu testcase với Basic Design, tổng hợp Q&A và feedback thành danh sách sửa đổi.':'テストケースを基本設計書と照合し、Q&Aとフィードバックを修正一覧にまとめる。',

    'Hearing requirement:':'要件ヒアリング：',
    'họp và Q&A trực tiếp với khách hàng Nhật, làm rõ các yêu cầu còn mơ hồ.':'日本のお客様と直接会議・Q&Aを行い、曖昧な要件を明確化。',
    'họp và Q&A trực tiếp với khách hàng Nhật.':'日本のお客様との直接の会議・Q&A。',
    'Chuẩn bị câu hỏi trước họp, tóm tắt biên bản và liệt kê điểm cần Q&A.':'会議前の質問準備、議事録の要約、Q&Aが必要な点の洗い出し。',
    'Phân tích & define:':'分析・定義：',
    'chốt yêu cầu và viết SRS bằng tiếng Nhật.':'要件を確定し、日本語で要件定義書を作成。',
    'chốt yêu cầu với khách hàng.':'お客様との要件確定。',
    'Phân tích requirement, phát hiện chỗ thiếu hoặc mâu thuẫn; viết SRS tiếng Nhật hoàn chỉnh.':'要件を分析して不足や矛盾を発見し、日本語の要件定義書を作成。',
    'Thiết kế:':'設計：',
    'viết Basic Design (màn hình, luồng nghiệp vụ, DB, API); tư vấn giải pháp kỹ thuật và kiến trúc hệ thống trên AWS.':'基本設計書（画面、業務フロー、DB、API）を作成。技術的な解決策とAWS上のシステムアーキテクチャを提案。',
    'tư vấn giải pháp kỹ thuật và kiến trúc hệ thống trên AWS.':'技術的な解決策とAWS上のシステムアーキテクチャを提案。',
    'Viết Basic Design (màn hình, luồng nghiệp vụ, DB), API spec hoàn chỉnh và bản spec tiếng Việt cho team dev.':'基本設計書（画面、業務フロー、DB）、API仕様書、開発チーム向けのベトナム語仕様書を作成。',
    'Truyền đạt:':'伝達：',
    'giải thích spec cho team dev, trả lời Q&A trong suốt quá trình phát triển.':'開発チームに仕様を説明し、開発期間を通してQ&Aに対応。',
    'giải thích spec và trả lời Q&A cho team dev.':'開発チームへの仕様説明とQ&A対応。',
    'Tổng hợp câu hỏi của dev và câu trả lời thành danh sách Q&A.':'開発者からの質問と回答をQ&A一覧にまとめる。',
    'Kiểm soát chất lượng:':'品質管理：',
    'review testcase và kết quả phát triển trước khi bàn giao.':'納品前にテストケースと開発成果をレビュー。',
    'review testcase của tester và kết quả phát triển trước khi bàn giao.':'納品前にテスターのテストケースと開発成果をレビュー。',
    'Đối chiếu testcase của tester với Basic Design, kiểm tra độ bao phủ và chỉ ra case còn thiếu.':'テスターのテストケースを基本設計書と照合し、網羅性を確認して不足ケースを指摘。',
    'Nghiệm thu:':'受入：',
    'hỗ trợ khách hàng acceptance test và bàn giao sản phẩm.':'お客様の受入テストを支援し、製品を納品。',
    'hỗ trợ khách hàng acceptance test và bàn giao.':'お客様の受入テスト支援と納品。',
    'Tổng hợp feedback thành danh sách sửa đổi.':'フィードバックを修正一覧にまとめる。',

    'Biên phiên dịch:':'翻訳・通訳：',
    'dịch tài liệu kỹ thuật, spec, testcase Nhật–Việt; phiên dịch các buổi họp với khách hàng.':'技術資料・仕様書・テストケースの日越翻訳、お客様との会議の通訳。',
    'phiên dịch các buổi họp với khách hàng.':'お客様との会議の通訳。',
    'Dịch tài liệu, spec, testcase Nhật–Việt với thuật ngữ thống nhất.':'資料・仕様書・テストケースを、用語を統一して日越翻訳。',
    'Hỗ trợ PM/BrSE:':'PM/BrSEのサポート：',
    'theo dõi tiến độ hằng ngày, quản lý task và trao đổi qua Jira, Email.':'日々の進捗確認、Jiraとメールでのタスク管理・連絡。',
    'theo dõi tiến độ, quản lý task trên Jira.':'進捗確認とJiraでのタスク管理。',
    'Tóm tắt email và biên bản họp, update task trên Jira.':'メールと議事録を要約し、Jiraのタスクを更新。',

    'Tự học và phát triển bản thân':'自己研鑽期間',
    'Nhật Bản':'日本',
    'Bối cảnh:':'背景：',
    'dịch COVID-19 khiến tôi chưa thể về Việt Nam, nên tôi dành thời gian này để đầu tư vào năng lực bản thân.':'新型コロナの影響でベトナムに帰国できず、この期間を自己投資に充てました。',
    'Tự học tài chính, kế toán, quản trị chi phí':'財務・会計・原価管理を独学',
    'theo giáo trình CFA, CMA, CPA, và áp dụng ngay vào đầu tư cá nhân.':'（CFA・CMA・CPAの教材を使用）し、個人の投資ですぐに実践。',
    'Song song đó, nâng cao tiếng Nhật':'並行して日本語力を高め、',
    'và đạt JLPT N2 (7/2021).':'JLPT N2に合格（2021年7月）。',

    // documents in the input → output flows
    'Yêu cầu khách hàng (tài liệu, email, chat)':'お客様の要望（資料・メール・チャット）',
    'Biên bản họp':'議事録',
    'Danh sách hạng mục (scope)':'対象項目一覧（スコープ）',
    'Bảng ước lượng công số':'工数見積表',
    'Schedule':'スケジュール',
    'Task trên Jira':'Jiraのタスク',
    'Bảng theo dõi tiến độ':'進捗管理表',
    'Danh sách rủi ro':'リスク一覧',
    'Đánh giá ảnh hưởng':'影響評価',
    'Weekly report (tiếng Nhật)':'週次報告書（日本語）',
    'Sản phẩm':'成果物',
    'Kết quả review':'レビュー結果',
    'Danh sách sửa đổi':'修正一覧',
    'Checklist bàn giao':'納品チェックリスト',
    'Sản phẩm bàn giao':'納品物',
    'SRS (要件定義書)':'要件定義書（SRS）',
    'Basic Design (基本設計書)':'基本設計書',
    'Spec tiếng Việt':'ベトナム語仕様書',
    'Testcase (tester)':'テストケース（テスター作成）',
    'Feedback khách hàng':'お客様のフィードバック',
    'Testcase':'テストケース',
    'Testcase tiếng Việt':'ベトナム語テストケース',
    'Email':'メール',
    'Cuộc họp':'会議',
    'Update task trên Jira':'Jiraのタスク更新',
    'Danh sách Q&A':'Q&A一覧',
    'UI / Wireframe':'UI / ワイヤーフレーム',
    'API spec':'API仕様書',

    // client voices (the Japanese originals stay; the Vietnamese translations are hidden in Japanese)
    'Phản hồi khách hàng':'お客様の声',
    'Lời cảm ơn khách hàng Nhật gửi khi tôi kết thúc công việc tại Kaopiz (9/2026). Trích nguyên văn toàn bộ tin nhắn, kèm bản dịch (đã ẩn tên và địa chỉ liên hệ của khách hàng).':'Kaopizでの業務を終える際（2026年9月）に、日本のお客様からいただいたお礼のメッセージです。全文をそのまま掲載しています（お客様の氏名と連絡先は伏せています）。',
    'Bối cảnh':'背景',
    'Cả hai dự án dưới đây trước đó do một vendor Việt Nam khác phụ trách.':'以下の2つのプロジェクトは、以前は別のベトナムのベンダーが担当していました。',
    'Khi làm với vendor cũ, khách hàng liên tục gặp vấn đề: trao đổi không thông suốt, spec có nhiều lỗi nghiêm trọng và dính lỗi security nặng.':'旧ベンダーとの間では、コミュニケーションがうまくいかない、仕様に重大な不備が多い、深刻なセキュリティ問題が起きるなど、問題が続いていました。',
    'Vì vậy, khách hàng quyết định chuyển sang hợp tác với Kaopiz, và công ty đã tin tưởng giao khách hàng này cho tôi phụ trách.':'そのためお客様はKaopizへの切り替えを決め、会社はこのお客様の担当を私に任せました。',
    'Chu đáo':'丁寧',
    'Tận tâm':'誠実',
    'Muốn hợp tác tiếp':'今後も協業したい',
    'Khách hàng Nhật':'日本のお客様',
    'qua Slack · 15/9, ngày làm việc cuối':'Slackにて · 9月15日（最終出社日）',
    'Hỗ trợ tận tình':'手厚いサポート',
    'Linh hoạt':'柔軟な対応',
    'Đồng hành từ phát triển đến vận hành':'開発から運用まで伴走',

    // projects
    'Dự án':'プロジェクト',
    '5 dự án làm PM (2025 – 2026)':'PM担当プロジェクト5件（2025〜2026）',
    ', tổng 61 MM, sắp xếp từ mới nhất đến cũ nhất. Hai thẻ viền nét đứt trên cùng là dự án tôi đã chốt PO với khách hàng, sắp triển khai.':'、計61MM。新しい順に掲載しています。上部の点線枠の2件は、お客様と受注（PO）を確定済みで、これから開始するプロジェクトです。',
    '14 dự án tại Kaopiz (2022 – 2026)':'Kaopizでのプロジェクト14件（2022〜2026）',
    ', đa dạng domain, infra phần lớn trên AWS, sắp xếp từ mới nhất đến cũ nhất. Hai thẻ viền nét đứt trên cùng là dự án tôi đã chốt PO với khách hàng, sắp triển khai.':'。多様なドメインで、インフラの大半はAWS。新しい順に掲載しています。上部の点線枠の2件は、お客様と受注（PO）を確定済みで、これから開始するプロジェクトです。',
    '9 dự án BrSE':'BrSE担当プロジェクト9件',
    '(2022 – 2025), vai trò cầu nối yêu cầu và spec giữa khách hàng Nhật và team phát triển.':'（2022〜2025）。日本のお客様と開発チームの間で、要件と仕様の橋渡しを担当。',
    'Đã chốt PO':'受注確定',
    'Dự kiến 12 tháng':'予定期間 12ヶ月',
    'Dự kiến 3 tháng':'予定期間 3ヶ月',
    'Shopping thời trang fitness & yoga · phase thực thi':'フィットネス・ヨガ向けアパレルEC · 実装フェーズ',
    'Phase thực thi tiếp nối phase hearing & spec bên dưới. Tôi đã chốt với khách hàng trước khi kết thúc công việc tại Kaopiz.':'下記のヒアリング・仕様フェーズに続く実装フェーズ。Kaopizでの業務を終える前にお客様と合意しました。',
    'Tạo WBS tự động bằng AI · dự án mở rộng':'AIによるWBS自動作成 · 拡張プロジェクト',
    'Dự án mới phát triển tiếp từ hệ thống tạo WBS bằng AI bên dưới, đã chốt với khách hàng.':'下記のAI WBS作成システムを発展させる新規プロジェクトで、お客様と合意済み。',
    'Shopping thời trang fitness & yoga · phase hearing & spec':'フィットネス・ヨガ向けアパレルEC · ヒアリング・仕様フェーズ',
    'Hệ thống bán quần áo và sản phẩm chuyên về fitness, yoga; kèm quản lý học viên và hội viên.':'フィットネス・ヨガ専門の衣料品・商品販売システム。受講生・会員管理機能付き。',
    'Đặt chỗ cơ sở công cộng':'公共施設予約',
    'Đặt lịch và rút thăm phòng công cộng theo 3 tầng Tenant/Room/Sub-room; phân quyền 4 cấp, thanh toán online, MFA, đăng nhập LINE/Google.':'Tenant/Room/Sub-roomの3階層による公共施設の予約・抽選。4段階の権限、オンライン決済、MFA、LINE/Googleログイン。',
    'Tạo WBS tự động bằng AI':'AIによるWBS自動作成',
    'Dùng AI chia nhỏ hạng mục công việc từ lớn đến chi tiết, tự sinh sơ đồ cây và WBS.':'AIで作業項目を大項目から詳細まで分解し、ツリー図とWBSを自動生成。',
    'Đặt món F&B qua influencer':'インフルエンサー経由の飲食店注文',
    'Giúp quán ăn nhỏ ở Nhật kết nối khách qua influencer: order online, đặt bàn/takeaway, thanh toán Stripe.':'日本の小規模飲食店とお客様をインフルエンサー経由でつなぐサービス。オンライン注文、席予約・テイクアウト、Stripe決済。',
    'Quản lý lưu trú & visa':'在留資格・ビザ管理',
    'Cho luật sư và doanh nghiệp tuyển lao động nước ngoài theo dõi hồ sơ, tiến độ xin và gia hạn tư cách lưu trú.':'弁護士や外国人材を雇用する企業向けに、在留資格の申請・更新の書類と進捗を管理。',
    'Nền tảng tư vấn DX':'DXコンサルティングプラットフォーム',
    'Hỗ trợ đăng bài từ WordPress, đặt lịch gặp khách hàng – consultant, quản lý lịch sử trao đổi.':'WordPressからの記事投稿、お客様とコンサルタントの面談予約、やり取り履歴の管理。',
    'App tư vấn trị liệu':'セラピー相談アプリ',
    'Kết nối người dùng với therapist, tư vấn online qua voice, video và livestream.':'ユーザーとセラピストをつなぎ、音声・ビデオ・ライブ配信でオンライン相談。',
    'E-commerce bản đồ tùy chỉnh':'オリジナル地図EC',
    'Chọn vị trí, phạm vi và style bản đồ để in lên sản phẩm rồi đặt mua.':'地図の場所・範囲・スタイルを選んで商品に印刷し、注文できるサービス。',
    'Điều phối sản xuất ô tô (ALC)':'自動車生産指示（ALC）',
    'Lập kế hoạch sản xuất theo mẫu xe từng ngày; theo dõi tiến độ dây chuyền qua các điểm RFID cố định trong nhà máy.':'車種ごとの日次生産計画を作成し、工場内の固定RFIDポイントで生産ラインの進捗を追跡。',
    'Quản lý vận hành trường học':'学校運営管理',
    'Học bạ, điểm danh, điểm số, thời khóa biểu; học phí, tuyển sinh, quản lý phòng học.':'学籍簿、出欠、成績、時間割、学費、入学選考、教室管理。',
    'Quản lý kho xe':'車両在庫管理',
    'Quản lý nhập/xuất kho, tính sản lượng, tạo P/O.':'入出庫管理、生産量の計算、P/O作成。',
    'Quản lý sức khỏe':'健康管理',
    'Quản lý tình trạng sức khỏe bệnh nhân và đặt lịch khám.':'患者の健康状態の管理と診察予約。',
    'Nhận diện khuôn mặt':'顔認識',
    'App trên thiết bị quảng cáo ở siêu thị, dùng AI ước tính số người, độ tuổi của khách quan tâm quảng cáo.':'スーパーの広告端末上のアプリ。AIで広告に関心を持った人数と年齢層を推定。',
    'Quản lý sản xuất ô tô':'自動車生産管理',
    'Tính linh kiện tồn kho theo kế hoạch sản xuất, đặt hàng nhà cung cấp, nhập container và điều phối kho đến khi lắp ráp xe.':'生産計画に基づく部品在庫の算出、仕入先への発注、コンテナ入荷、組立までの倉庫調整。',

    // education
    'Học vấn':'学歴・資格',
    'Học vấn & hoạt động':'学歴・活動',
    'Đại học Thông tin Kyushu':'九州情報大学',
    'Quản trị Mạng – Hệ thống Thông tin':'ネットワーク管理・情報システム',
    'Cisco Tokyo – Cyber Security & SOC':'シスコ東京 – Cyber Security & SOC',
    'Thực tập: tấn công/phòng thủ trên máy ảo':'インターン：仮想マシン上での攻撃・防御演習',
    'Sở thích':'趣味',
    'Đọc sách, nghe nhạc, đầu tư chứng khoán':'読書、音楽鑑賞、株式投資',
    'Chứng chỉ':'資格',
    'Bản tiếng Anh':'英語版',
    'Năng lực tiếng Nhật':'日本語能力試験',
    'Quản trị mạng, bản tiếng Nhật':'ネットワーク管理、日本語版',

    // footer
    'Dành cho HR':'採用担当者様へ',
    'Bản PDF khổ':'PDF版（',
    'A4, 6 trang':'A4・6ページ',
    'A4, 5 trang':'A4・5ページ',
    ', bản đầy đủ BrSE / PM. Cảm ơn anh/chị đã xem hồ sơ của tôi.':'）は、BrSE / PMの全内容を収録した日本語版です。ご覧いただきありがとうございます。',
    ', đầy đủ nội dung trang này. Cảm ơn anh/chị đã xem hồ sơ của tôi.':'）は、このページの全内容を収録しています。ご覧いただきありがとうございます。',
    'Tải CV (PDF)':'履歴書をダウンロード（PDF）'
  };
  // recurring patterns: month/year dates, head counts, durations
  var RULES=[
    [/\b(\d{1,2})\/(\d{4})\b/g,'$2/$1'],
    [/(\d+) người/g,'$1名'],
    [/(\d+) tháng/g,'$1ヶ月']
  ];
  var SKIP='script,style,svg,blockquote,.voice .vi,.lang-switch,[data-i18n-skip]';
  var ATTRS=['alt','aria-label','title'];
  var CJK_START=/^[　-鿿＀-￯]/,CJK_END=/[　-鿿＀-￯]$/;

  var root=document.documentElement,lang='vi';
  var origText=new WeakMap(),origAttr=new WeakMap(),origTitle=document.title;

  function tr(s){
    var m=/^(\s*)([\s\S]*?)(\s*)$/.exec(s),core=m[2];
    if(!core) return s;
    var out=Object.prototype.hasOwnProperty.call(JA,core)?JA[core]:RULES.reduce(function(a,r){return a.replace(r[0],r[1]);},core);
    // Japanese needs no spaces around it ("4 năm" -> "4年")
    return (CJK_START.test(out)?'':m[1])+out+(CJK_END.test(out)?'':m[3]);
  }
  function skipped(n){var e=n.nodeType===1?n:n.parentElement;return !e||!!e.closest(SKIP);}
  function textNodes(el){
    var w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),a=[],n;
    while((n=w.nextNode())) if(n.nodeValue.trim()&&!skipped(n)) a.push(n);
    return a;
  }
  function paint(n){
    if(!origText.has(n)) origText.set(n,n.nodeValue);
    var v=lang==='ja'?tr(origText.get(n)):origText.get(n);
    if(n.nodeValue!==v) n.nodeValue=v;
  }
  function paintAttrs(el){
    var o=origAttr.get(el);
    if(!o){o={};ATTRS.forEach(function(a){if(el.hasAttribute(a))o[a]=el.getAttribute(a);});origAttr.set(el,o);}
    Object.keys(o).forEach(function(a){el.setAttribute(a,lang==='ja'?tr(o[a]):o[a]);});
  }

  // text the page scripts write later (count-up, mode note, copy button) is Vietnamese: record it, then translate
  var mo=new MutationObserver(function(ms){
    ms.forEach(function(m){
      var nodes=m.type==='characterData'?[m.target]:[].concat.apply([],[].map.call(m.addedNodes,function(a){return a.nodeType===3?[a]:a.nodeType===1?textNodes(a):[];}));
      nodes.forEach(function(n){if(n.nodeType===3&&n.nodeValue.trim()&&!skipped(n)){origText.set(n,n.nodeValue);paint(n);}});
    });
    mo.takeRecords();
  });

  function setLang(l,save){
    if(l!=='ja') l='vi';
    lang=l;
    root.setAttribute('lang',l);
    textNodes(document.body).forEach(paint);
    [].forEach.call(document.body.querySelectorAll('[alt],[aria-label],[title]'),function(el){if(!skipped(el))paintAttrs(el);});
    document.title=l==='ja'?tr(origTitle):origTitle;
    // links with a Japanese counterpart (the PDF download)
    [].forEach.call(document.querySelectorAll('[data-ja-href]'),function(a){
      if(!a.hasAttribute('data-vi-href')){a.setAttribute('data-vi-href',a.getAttribute('href'));a.setAttribute('data-vi-download',a.getAttribute('download')||'');}
      a.setAttribute('href',a.getAttribute('data-'+l+'-href'));
      a.setAttribute('download',a.getAttribute('data-'+l+'-download')||'');
    });
    mo.takeRecords();
    [].forEach.call(document.querySelectorAll('.lang-switch button'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===l?'true':'false');});
    if(save){
      try{localStorage.setItem('cv-lang',l);}catch(e){}
      try{var u=new URL(location.href);if(l==='ja')u.searchParams.set('lang','ja');else u.searchParams.delete('lang');history.replaceState(history.state,'',u);}catch(e){}
    }
  }

  var initial=null;
  try{initial=new URLSearchParams(location.search).get('lang');}catch(e){}
  if(initial!=='vi'&&initial!=='ja'){try{initial=localStorage.getItem('cv-lang');}catch(e){}}
  if(initial!=='vi'&&initial!=='ja') initial=/^ja\b/i.test(navigator.language||'')?'ja':'vi';

  mo.observe(document.body,{subtree:true,childList:true,characterData:true});
  setLang(initial,false);
  [].forEach.call(document.querySelectorAll('.lang-switch'),function(g){
    g.addEventListener('click',function(e){var b=e.target.closest('button');if(b)setLang(b.getAttribute('data-lang'),true);});
  });
})();
