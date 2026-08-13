# 个人作品集网站

一个使用HTML、CSS、JavaScript构建的AI视频创作者个人作品集网站。

## 功能特点

- 🎨 现代响应式设计，支持移动端和桌面端
- 🎬 AI视频生成功能（集成免费API）
- 📁 作品集展示，支持分类筛选
- 👤 个人介绍和技能展示
- 🔍 SEO优化，支持搜索引擎收录
- 🚀 静态网站，可部署到GitHub Pages

## 网站结构

```
├── index.html          # 首页
├── portfolio.html      # 作品集页面
├── about.html          # 关于我页面
├── css/
│   └── style.css       # 样式表
├── js/
│   ├── main.js         # 主要JavaScript功能
│   └── video-generator.js  # AI视频生成器
├── images/             # 图片资源
├── videos/             # 视频资源
├── robots.txt          # 搜索引擎爬虫配置
├── sitemap.xml         # 网站地图
└── README.md           # 项目说明
```

## 本地运行

1. 克隆项目到本地：
```bash
git clone https://github.com/Michael-4753/portfolio.git
cd portfolio
```

2. 使用本地服务器运行（推荐）：
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx http-server

# 或使用PHP
php -S localhost:8000
```

3. 在浏览器中访问：`http://localhost:8000`

## 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 登录GitHub，创建新仓库
2. 仓库名称建议：`yourusername.github.io`（用于主网站）或 `portfolio`（用于项目网站）

### 步骤2：上传代码
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Michael-4753/portfolio.git
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 进入仓库的Settings页面
2. 找到Pages选项
3. Source选择：Deploy from a branch
4. Branch选择：main / (root)
5. 点击Save

### 步骤4：访问网站
- 主网站：`https://michael-4753.github.io/portfolio/`

## 自定义配置

### 更新个人信息
1. 修改HTML文件中的个人信息：
   - 邮箱地址
   - GitHub链接
   - Bilibili链接
   - 个人简介

2. 更新SEO元标签：
   - 在每个HTML文件的`<head>`部分更新`og:url`和`twitter:url`
   - 将`yourusername.github.io`替换为你的实际域名

### 添加真实作品
1. 将视频文件放入`videos/`目录
2. 将图片文件放入`images/`目录
3. 在HTML文件中更新对应的`src`属性

### 集成真实AI视频API
在`js/video-generator.js`文件中，取消注释并配置以下API之一：

1. **Seedance API**（国内可用，每日免费积分）
2. **海螺AI API**（国内可用，免费无水印）
3. **Magic Hour API**（国际可用，有免费额度）

获取API密钥后，将`apiKey`替换为你的实际密钥。

## 技术栈

- HTML5
- CSS3（Flexbox、Grid）
- JavaScript（ES6+）
- 响应式设计
- SEO优化

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License - 可自由使用和修改

## 联系方式

如有问题或建议，请通过以下方式联系：
- GitHub：github.com/Michael-4753