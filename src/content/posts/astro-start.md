---
title: "Astro 블로그 시작하기"
description: "Astro로 Markdown 기반 개인 블로그를 만드는 첫 기록입니다."
date: "2026-05-17"
category: "dev"
tags: ["astro", "blog", "github-pages"]
draft: false
slug: "astro-start"
---

## Astro 선택 이유

Astro는 정적 콘텐츠 중심의 블로그를 만들기에 가볍고 빠릅니다. 글은 Markdown으로 관리하고, 화면은 Astro 컴포넌트로 필요한 만큼만 구성할 수 있습니다.

## 기본 구조

글은 `src/content/posts`에 추가합니다. frontmatter에 제목, 설명, 날짜, 카테고리, 태그, 공개 여부를 작성하면 목록과 상세 페이지에 자동으로 반영됩니다.

```ts
const message = "Markdown 글이 자동으로 블로그에 반영됩니다.";
console.log(message);
```

## 다음 단계

검색, 태그, 카테고리 페이지를 함께 운영하면 시간이 지난 글도 다시 찾기 쉬워집니다.
