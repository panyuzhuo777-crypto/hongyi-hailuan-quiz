# 红夷海乱心测结果自动收集设置

当前已接入的 Web 应用 URL：

https://script.google.com/macros/s/AKfycbyi_aSiJUY8-6AlARIP4J5P3cFWjjrfhCm2FRr2YF4wekY60Gk7sAfMNroE5LVu496jWQ/exec

网站里的 `app.js` 已使用这个 URL 自动提交结果。以下步骤仅用于以后重新部署或更换表格时参考。

1. 打开这张结果表：
   https://docs.google.com/spreadsheets/d/1gRP1AOeuNfii8__D2az9Uhqy6XdTgiCNgdSprH0q0_o/edit

2. 在表格里点 `扩展程序` -> `Apps Script`。

3. 删除默认代码，把 `Code.gs` 里的全部内容复制进去，保存。

4. 点右上角 `部署` -> `新建部署`。

5. 类型选择 `网页应用`，设置：
   - 执行身份：`我`
   - 谁可以访问：`任何人`

6. 点 `部署`，按提示授权。完成后复制 `网页应用 URL`。

7. 把这个 URL 接进 `app.js` 的 `resultEndpoint`，重新发布 GitHub Pages。
