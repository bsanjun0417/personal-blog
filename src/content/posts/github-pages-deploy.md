---
title: "GitHub Pages 배포 준비"
description: "GitHub Actions로 Astro 블로그를 자동 배포하는 흐름을 정리합니다."
date: "2026-05-16"
category: "dev"
tags: ["github-actions", "deploy", "astro"]
draft: false
slug: "github-pages-deploy"
---

## 배포 흐름

`main` 브랜치에 변경 사항을 push하면 GitHub Actions가 의존성을 설치하고 `npm run build`를 실행합니다. 생성된 `dist` 폴더가 GitHub Pages에 배포됩니다.

## 도메인

처음에는 GitHub Pages 주소로 시작하고, 이후 `blog.san2blog.com` 같은 커스텀 도메인을 연결할 수 있도록 `site` 설정을 분리해 둡니다.
