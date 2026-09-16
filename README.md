# SWE / AI Engineer Portfolio

面向美国 SWE / AI Engineer 实习招聘的英文个人网站。原生 HTML / CSS / JavaScript，无框架、无构建、无外部字体或第三方脚本。适用于 GitHub Pages 的个人站和项目站，也可直接双击 `index.html` 查看。

## 文件结构

```text
portfolio/
  index.html       页面、项目描述、SEO 元信息
  styles.css       桌面 / 移动端 / 打印样式
  profile.js       姓名、毕业时间、联系方式和项目链接
  script.js        应用配置、生成有效链接
  .nojekyll        关闭 Jekyll 处理
  .gitignore
  assets/
    README.md      简历放置说明
  README.md
```

## 1. 补充个人信息

编辑 `profile.js`，把空字符串替换为自己的真实信息：

| 字段 | 内容 |
| --- | --- |
| `name` | 简历上的英文姓名 |
| `graduation` | 实际预计毕业月份和年份 |
| `email` | 邮箱，不加 `mailto:` |
| `github` | GitHub 个人主页完整 HTTPS 链接 |
| `linkedin` | LinkedIn 个人主页完整 HTTPS 链接 |
| `resume` | `./assets/resume.pdf` 或公开 HTTPS PDF 链接 |
| `autoAgent` | AutoAgent 仓库或项目说明页链接 |
| `payments` | 支付系统仓库或项目说明页链接 |

空链接保留为不可点击的占位文字，不会跳转到别人的页面或不存在的 PDF。只接受 HTTPS 外链；简历也支持 `./assets/` 下的本地 PDF。填写本地简历路径时必须实际放入 PDF。外部 PDF 的下载入口会打开原文件，由浏览器或服务商提供下载；本地 PDF 可直接下载。

为保证搜索引擎、链接预览和关闭 JavaScript 的访客也能看到正确姓名，请同时在 `index.html` 中全局替换 `[YOUR NAME]` 与 `[MONTH YEAR]`。无 JavaScript 时核心内容仍可阅读，但配置里的联系链接不会生成；如需支持这种情况，可把对应 `data-link` 占位 `<span>` 直接替换成真实 `<a href="...">`。

网页依据提供的 Rice CS master's、AutoAgent 和支付系统信息撰写。没有虚构雇主、职位、日期、吞吐量或提升百分比。发布前逐条确认项目描述准确，明确哪些是自己完成的工作；目前采用项目经历形式。若属于公司经历，可补充获得公开许可的公司名、职务和时间。私有项目可以保留介绍并移除仓库占位，不必公开源码。

## 2. 本地预览

直接双击 `index.html` 即可；本项目不需要 Node.js、npm 或安装依赖。

如果安装了 Python，也可在此文件夹运行：

```sh
python -m http.server 8000
```

访问 `http://localhost:8000`。停止预览按 Ctrl+C。

## 3. 部署到 GitHub Pages（推荐：网页上传）

1. 在 GitHub 创建公开仓库。个人主页仓库命名为 `YOUR_USERNAME.github.io`，其中 `YOUR_USERNAME` 替换为真实 GitHub 用户名。
2. 在仓库选择 **Add file → Upload files**。上传本文件夹内的文件和 `assets` 文件夹，提交到 `main`。**`index.html` 必须在仓库根目录，不要把外层 `portfolio` 文件夹一起上传。** 确保 `.nojekyll` 也在根目录；如上传时隐藏文件被省略，可用 **Add file → Create new file** 创建 `.nojekyll`，内容可写一行注释。
3. 打开 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择 **main** 和 **/(root)**，点击 **Save**。
6. 等待部署完成，在 Pages 设置页打开网站，通常为 `https://YOUR_USERNAME.github.io/`。可在 **Actions** 查看发布状态。

也可用普通仓库名，例如 `portfolio`；对应网址通常为 `https://YOUR_USERNAME.github.io/portfolio/`。所有资源使用相对路径，两种地址均适用。不需要额外 GitHub Actions 配置。

已核对的 GitHub 官方说明：
- [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 4. 可选：使用 Git 上传

先创建空的 GitHub 仓库，然后在本文件夹运行（替换用户名）：

```sh
git init
git add .
git commit -m "Create internship portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

之后仍需按上面步骤设置 Pages。后续修改后提交并推送即可更新。

## 发布前检查

- 替换所有可见占位文字，或删除暂时不公开的字段和入口。
- 添加真实简历，验证预览和下载；不要把本页面直接当作已核实的简历。
- 核对姓名、毕业时间、实习方向、技能和个人项目贡献。
- 检查 GitHub、LinkedIn、邮箱、项目链接及仓库公开权限。
- 在手机与桌面打开网站，检查导航、项目阅读和键盘操作。
- 不公开内部代码、客户信息或公司机密。

## 设计与维护

顶部概览 → About / 教育 → 两个项目 → Skills → Resume → Contact。蓝白配色，系统字体，移动端自动单列，包含键盘焦点、跳过导航入口、减少动画偏好和打印样式。配色可在 `styles.css` 顶部 CSS 变量中调整，项目正文直接修改 `index.html`。

发布目标：https://g1lollipop.github.io/；现有仓库的 Pages 来源为 master 分支根目录。维护此仓库时推送 master，无须改为 main。没有采集表单、分析追踪、后端服务或付费依赖。
