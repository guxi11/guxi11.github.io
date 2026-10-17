---
layout: home
title: Guxi11
description: 个人项目与开发记录
lang: zh-CN
---

<p>我是 Guxi11，这里收录我的工具项目与开发记录。</p>
<p><a href="https://github.com/guxi11">GitHub</a> · <a href="mailto:{{ site.email | escape }}">联系我</a> · <a href="{{ '/archive/' | relative_url }}">文章归档</a></p>

<section aria-labelledby="projects">
  <h2 id="projects">项目</h2>
  <ul class="post-list">
    <li>
      <a class="post-link" href="{{ '/modeck/' | relative_url }}">
        <h3 class="post-title">modeck</h3>
        <p class="post-content-preview">集中管理 AI 编程助手的规则、技能与外部资源，按项目组合工作模式，在会话启动时加载。</p>
        <span class="post-meta">项目介绍与使用指南 →</span>
      </a>
    </li>
    <li>
      <a class="post-link" href="{{ '/dingmujing/' | relative_url }}">
        <h3 class="post-title">定目镜 · Steadeye</h3>
        <p class="post-content-preview">锁定并放大眼睛画面，帮助看清戴摘隐形眼镜、滴眼药水等操作。</p>
        <span class="post-meta">使用说明、隐私政策与反馈 →</span>
      </a>
    </li>
  </ul>
</section>

<section aria-labelledby="writing">
  <h2 id="writing">开发记录</h2>
  <p>过去的项目介绍与技术文章已收录到归档，按年份整理，也可以按标签浏览。</p>
  <a class="post-link" href="{{ '/archive/' | relative_url }}">
    <h3 class="post-title">文章归档</h3>
    <p class="post-content-preview">{{ site.posts.size }} 篇文章 · {{ site.posts.last.date | date: '%Y' }}—{{ site.posts.first.date | date: '%Y' }}</p>
    <span class="post-meta">浏览全部文章 →</span>
  </a>
</section>
