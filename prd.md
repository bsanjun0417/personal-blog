Astro 기반 개인 블로그를 만들어줘.

## 1. 프로젝트 목적
개발 공부 기록, 짧은 메모, 영어 공부 기록, 개인 포트폴리오, GitHub 링크 정리를 위한 정적 블로그다.
처음에는 GitHub Pages로 배포하고, 나중에는 개인 서버/VPS로 이전할 수 있게 URL 구조를 깔끔하게 설계한다.

## 2. 기술 스택
- Astro
- TypeScript
- npm
- Markdown 기반 글 작성
- Astro Content Collections 사용
- 글 저장 위치: src/content/posts
- 검색: Pagefind
- 코드 하이라이트 지원
- TOC, 즉 글 목차 지원
- GitHub Actions 자동 배포

## 3. 도메인/URL 구조
향후 도메인은 blog.san2blog.com 같은 서브도메인을 고려한다.
URL은 서버 이전 후에도 유지하기 쉽게 설계한다.

권장 URL:
- 메인: /
- 글 목록: /posts
- 글 상세: /posts/[slug]
- 카테고리: /categories/[category]
- 태그: /tags/[tag]
- 프로젝트: /projects
- 소개: /about
- 검색: /search

base path에 의존하지 않도록 커스텀 도메인 기준으로 설계하되,
GitHub Pages 배포 설정도 함께 준비한다.

## 4. 디자인 방향
디자인은 Notion 느낌 50%, 감성 개인 블로그 50%로 한다.
전체 분위기는 차분하고 어두운 계열이며, 개인 작업실 같은 느낌을 준다.
약한 Liquid Glass / glassmorphism 느낌을 사용한다.

디자인 키워드:
- dark theme first
- calm
- personal workspace
- minimal
- soft glass card
- readable blog
- developer portfolio

폰트:
- Noto Sans KR 우선 사용
- fallback은 system-ui, sans-serif

## 5. 필수 페이지
1. Home
   - 간단한 자기소개 영역
   - 최신 글 목록
   - 주요 카테고리
   - GitHub 링크
   - Projects 일부 미리보기

2. Posts
   - 전체 글 목록
   - 카테고리 필터
   - 태그 표시
   - 작성일 표시
   - 설명/요약 표시

3. Post Detail
   - Markdown 본문 렌더링
   - 코드블록 하이라이트
   - 오른쪽 또는 상단에 TOC 표시
   - 태그, 카테고리, 작성일 표시
   - 이전/다음 글 이동

4. Categories
   - dev, english, memo, project 등 카테고리 지원

5. Tags
   - 태그별 글 모아보기

6. Projects
   - 개인 프로젝트 카드형 목록
   - GitHub 링크
   - 기술스택 표시
   - 설명 표시

7. About
   - 간단한 자기소개
   - 공부 중인 기술
   - GitHub 주소
   - 블로그 목적 설명

8. Search
   - Pagefind 기반 검색
   - 제목, 본문, 태그 검색 가능

## 6. Markdown 글 frontmatter
각 글은 아래 메타데이터를 가진다.

title: 글 제목
description: 글 요약
date: 작성일
category: dev | english | memo | project
tags: 배열
draft: true/false
slug: URL용 문자열

예시:
---
title: "Astro 블로그 시작하기"
description: "Astro로 Markdown 기반 블로그를 만드는 기록"
date: "2026-05-17"
category: "dev"
tags: ["astro", "blog", "github-pages"]
draft: false
slug: "astro-start"
---

## 7. UI 요구사항
- 모바일 우선 반응형
- 상단 네비게이션
- 모바일에서는 햄버거 메뉴 또는 단순 메뉴
- 글 목록은 카드형 또는 리스트형 혼합
- 글 상세는 가독성을 최우선
- 배경은 어두운 톤
- 카드는 반투명 glass 느낌
- 과한 애니메이션은 금지
- hover 효과는 은은하게
- 블로그답게 오래 읽어도 눈이 피로하지 않게

## 8. 폴더 구조 예시
src/
  content/
    posts/
  components/
  layouts/
  pages/
    index.astro
    posts/
    categories/
    tags/
    projects.astro
    about.astro
    search.astro
  styles/

## 9. 배포 요구사항
- GitHub Pages 배포용 GitHub Actions workflow 작성
- npm build 기준으로 빌드
- dist 폴더가 배포되도록 구성
- 나중에 blog.san2blog.com 커스텀 도메인을 연결하기 쉽게 설정
- README에 실행/빌드/배포 방법 작성

## 10. 완료 기준
- npm install 후 실행 가능
- npm run dev로 로컬 미리보기 가능
- npm run build 성공
- Markdown 글 추가 시 자동으로 글 목록/상세 페이지에 반영
- 검색 페이지 동작
- 카테고리/태그 페이지 동작
- GitHub Pages 배포 준비 완료