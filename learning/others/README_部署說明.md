# 龍山國中學習網站｜GitHub Pages 部署

本資料包內的檔案直接放到 GitHub 專案的 `learning/others/` 資料夾（**不要再多包一層 others**）。

## 檔案
- `index.html`：新入口網站，路徑 `/learning/others/`
- `voc_7th_1.html`：英文原網址保持不變
- `int_calc.html`：數學原網址保持不變
- `school-hub.js`：共用登入、獎牌、完整紀錄介面
- `firebase-config.js`：你需要填入的 Firebase Web 設定
- `firestore.rules`：必須在 Firebase Console 貼上的資料庫安全規則，**不要把這個檔案當成線上規則已經生效**

## 必做的 Firebase 設定（未完成前仍可訪客練習）
1. 前往 https://console.firebase.google.com 建立專案。
2. Authentication → Sign-in method → 啟用 Google 登入；選擇專案支援電子郵件。
3. Authentication → Settings → Authorized domains：增加你 GitHub Pages 所在的主機名稱（例如 `帳號.github.io`；若使用自訂網域亦需加入）。Google 登入會顯示 Google 帳號選擇視窗。
4. Project settings → Your apps → 建立 Web 應用程式 → 複製 `firebaseConfig` 的 `apiKey`、`authDomain`、`projectId`、`appId` 到 `firebase-config.js`。不要上傳任何服務帳戶 JSON 或私密金鑰。
5. Firestore Database → 建立資料庫（依學校資料保護需求選擇資料所在地區；建立後區域通常無法更改）。
6. Firestore Database → Rules → 將 `firestore.rules` 全文貼入，按 Publish。不要使用公開的 `allow read, write: if true`。
7. GitHub Pages 網站需 HTTPS。部署後，從入口頁與兩個練習頁分別驗證學生帳號登入、訪客練習、儲存及查詢紀錄。

## 身分檢查及注意事項
- 必須透過 Google 認證且 Google 登入的已驗證 email 結尾為 `@lsjh.tp.edu.tw`，不是單純輸入信箱字串。
- 所有單元仍允許不登入練習；訪客不會寫入雲端。
- 英文／數學各自儲存至 `users/{uid}/englishSessions` 與 `users/{uid}/mathSessions`，個別頁只顯示自己科目的紀錄，入口頁則合併顯示。
- `firstVisits` 記錄登入後第一次進入各科頁面（各科各一枚）；每天練習、完美作答及每 50 次練習須單次至少 10 題且完整作答。
- 本版獎勵與次數是根據 Firestore 個人練習資料即時計算，不必另外存可被使用者改動的獎牌數字。登入後的讀取速度會隨紀錄量增加；大量使用時宜追加後端彙總。
- 這仍屬學習鼓勵而非防作弊考試系統。題目與初次作答發生在前端，有技術能力的使用者可能偽造送入的練習資料；正式獎品/競賽需後端產題與驗證。
- 未提供 Firebase 設定時，登入／雲端紀錄不可用，但訪客練習仍可使用。
- Firebase 服務用量、免費額度及學校隱私規範請自行確認；系統保存學生信箱及逐題作答資料，應明確告知學生及監護人，訂定資料保留期限、刪除與權限管理政策。


## 2026-11-18 視覺修正

- 入口網站登入後只保留一個「📊 詳細資料」按鈕。
- 以圖示卡片顯示每天練習、完美作答、練習多多與練習次數。
- 取消首次登入獎勵，並不再新增 `firstVisits` 紀錄。已經存在的舊資料不會自動刪除。
- 如要同時禁止舊版客戶端寫入首次登入資料，請將此資料包 `firestore.rules` 重新發布到 Firebase Firestore 規則頁。
- 兩個練習頁面網址保持不變。

## 2026-11-18 精熟度與手機操作更新

本版新增英文單字的「初學／熟悉／精熟」三級標記：
- 初學：尚未達到熟悉門檻。
- 熟悉：同一單字連續首次答對至少 3 次，且其中至少 1 次是拼寫首次正確。
- 精熟：同一單字連續首次答對至少 5 次，且其中至少 2 次是拼寫首次正確，成功作答日期跨至少 2 個臺灣日期。
- 答錯會將該字連續答對／成功拼寫／跨日連續證據重新歸零；同題訂正成功不算首次答對。
- 「只練習尚未精熟」僅決定出題目標，四選一干擾選項仍來自全部已選單元。
- 單字卡、單字清單顯示等級，清單可篩選尚未精熟，單字按課本原始順序。
- 已登入學生精熟度依 `englishSessions` 完整逐題紀錄重新計算，舊版紀錄亦可用單元及英文對應還原；未登入時僅保留目前分頁中的暫時進度，重新整理後可能消失。
- 精熟是練習網站中的操作性指標，不保證永久記住；後續答錯會重新評估。

手機登入：一般 Safari / Chrome 優先採用 Google 登入彈出視窗；LINE 等內建瀏覽器可能遭 Google OAuth 安全政策禁止，頁面會提示用外部 Safari / Chrome 開啟。請確認瀏覽器允許登入視窗；不提供繞過 Google 安全政策的內嵌登入。

數學答題：自訂數字鍵盤為預設，數字欄位設為唯讀以防手機軟鍵盤跳出；可按「使用系統鍵盤」切換成原生輸入。首次按鈕不會自動聚焦輸入欄位。

**重要：** 本更新僅更新 `index.html`、`voc_7th_1.html`、`int_calc.html`、`school-hub.js` 及說明檔，沿用已部署的 `firebase-config.js` 與 `firestore.rules`。由於精熟度由既有的英文逐題紀錄計算，通常無需變更安全規則。請保留你已發布的安全規則，不要將訪客讀寫權限開放。
