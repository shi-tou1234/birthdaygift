# birthdaygift
# 🎂 生日快乐祝福网页

一个充满温情的生日祝福网页，专为您的父亲打造！包含动态生日蛋糕、可交互蜡烛和自动播放的生日快乐歌。

## ✨ 功能特点

- 🎨 **精美的生日蛋糕设计**：三层渐变色蛋糕，带有奶油装饰和星星点缀
- 🕯️ **可交互蜡烛**：点击蜡烛即可吹灭，附带火焰闪烁动画
- 🎵 **生日快乐歌**：自动播放背景音乐，可暂停/播放
- 🎉 **彩纸庆祝效果**：当所有蜡烛熄灭后触发彩纸动画
- ✨ **背景粒子效果**：漂浮的粒子营造梦幻氛围
- 📱 **响应式设计**：完美支持手机和平板设备
- ⌨️ **键盘快捷键**：
  - `空格键`：播放/暂停音乐
  - `R键`：重新点燃所有蜡烛
  - `数字键1-5`：熄灭对应序号的蜡烛

## 🎵 添加音频文件

网页需要一个生日快乐歌音频文件才能播放音乐。有以下几种方法：

### 方法1：使用自己的音频文件

1. 准备一个生日快乐歌的音频文件（支持MP3或OGG格式）
2. 将文件命名为 `happy-birthday.mp3`
3. 将文件放在项目根目录（与`index.html`同级）

### 方法2：使用在线音频链接

如果您有在线音频资源，可以修改 `index.html` 中的音频标签：

```html
<audio id="birthdayAudio" loop>
    <source src="您的音频URL" type="audio/mpeg">
</audio>
```

### 方法3：使用免费资源

您可以从以下网站下载免费的生日快乐歌：
- [Freesound.org](https://freesound.org/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

**注意**：请确保遵守音频文件的版权规定。

## 🚀 在GitHub Pages上部署

### 步骤1：创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` 号，选择 `New repository`
3. 输入仓库名称（例如：`birthday-gift`）
4. 选择 `Public`（公开）
5. 点击 `Create repository`

### 步骤2：上传文件

#### 方法A：通过GitHub网页上传

1. 在新创建的仓库页面，点击 `uploading an existing file`
2. 拖拽或选择以下文件：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `happy-birthday.mp3`（如果有）
3. 填写提交信息，点击 `Commit changes`

#### 方法B：通过Git命令行上传

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "初始提交：生日祝福网页"

# 添加远程仓库（替换为您的GitHub用户名和仓库名）
git remote add origin https://github.com/您的用户名/birthday-gift.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3：启用GitHub Pages

1. 在GitHub仓库页面，点击 `Settings`（设置）
2. 在左侧菜单找到 `Pages`
3. 在 `Source` 下拉菜单中选择 `main` 分支
4. 点击 `Save`（保存）
5. 等待几分钟后，页面会显示您的网站链接：`https://您的用户名.github.io/仓库名/`

### 步骤4：访问您的网页

打开生成的链接，您就可以看到生日祝福网页了！🎉

## 📋 项目结构

```
birthdaygift/
│
├── index.html          # 主HTML文件
├── styles.css          # 样式表
├── script.js           # JavaScript交互脚本
├── happy-birthday.mp3  # 生日快乐歌音频（需自行添加）
└── README.md           # 说明文档
```

## 🎮 使用说明

1. **打开网页**：在浏览器中打开 `index.html` 或访问部署后的GitHub Pages链接
2. **播放音乐**：页面会尝试自动播放音乐，如果没有，点击"播放生日歌"按钮
3. **吹蜡烛**：点击蛋糕上的蜡烛将其熄灭
4. **庆祝**：当所有蜡烛熄灭后，会出现彩纸庆祝效果
5. **重新开始**：点击"重新点燃"按钮可以重新点燃所有蜡烛

## 🎨 自定义

### 修改祝福语

编辑 `index.html` 中的以下部分：

```html
<h1 class="title">🎉 生日快乐 🎉</h1>
<h2 class="subtitle">亲爱的父亲</h2>
<p class="wish">愿您健康长寿，幸福安康！</p>
```

### 修改颜色主题

编辑 `styles.css` 中的渐变色：

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 调整蜡烛数量

在 `index.html` 中添加或删除蜡烛元素，并相应更新JavaScript代码。

## 🌐 浏览器兼容性

- ✅ Chrome（推荐）
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动端浏览器

## 📝 许可证

本项目为个人使用，可自由修改和分享。

## 💝 祝福

愿这个小小的网页能为您父亲的生日增添一份特别的惊喜和温暖！

---

**制作日期**：2025年11月
**祝福语**：生日快乐！愿您的父亲健康长寿，幸福美满！🎂🎉
