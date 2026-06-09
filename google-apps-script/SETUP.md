# 紅夷海亂心測結果自動收集設定

目前已接入的 Web 應用 URL：

https://script.google.com/macros/s/AKfycbyi_aSiJUY8-6AlARIP4J5P3cFWjjrfhCm2FRr2YF4wekY60Gk7sAfMNroE5LVu496jWQ/exec

網站裡的 `app.js` 已使用這個 URL 自動提交結果。以下步驟僅用於以後重新部署或更換表格時參考。

1. 打開這張結果表：
   https://docs.google.com/spreadsheets/d/1gRP1AOeuNfii8__D2az9Uhqy6XdTgiCNgdSprH0q0_o/edit

2. 在表格裡點 `擴充功能` -> `Apps Script`。

3. 刪除預設程式碼，把 `Code.gs` 裡的全部內容複製進去，儲存。

4. 點右上角 `部署` -> `新建部署`。

5. 類型選擇 `網頁應用程式`，設定：
   - 執行身份：`我`
   - 誰可以存取：`任何人`

6. 點 `部署`，按提示授權。完成後複製 `網頁應用程式 URL`。

7. 把這個 URL 接進 `app.js` 的 `resultEndpoint`，重新發布 GitHub Pages。
