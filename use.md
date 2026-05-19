# san2blog 사용법

이 블로그는 Astro 기반 정적 블로그입니다. 글은 로컬에서 Markdown 파일로 작성하고, GitHub에 push하면 GitHub Actions가 자동으로 빌드해서 GitHub Pages에 배포하는 방식입니다.

## 1. 로컬에서 실행하기

PowerShell에서는 `npm` 대신 `npm.cmd`를 사용합니다.

```powershell
cd C:\Users\bsanj\Desktop\github_blog\project
npm.cmd install
npm.cmd run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:4321/
```

## 2. 글 작성하기

글은 아래 폴더에 Markdown 파일로 추가합니다.

```text
src/content/posts/
```

예시:

```text
src/content/posts/my-first-post.md
```

기본 형식:

```md
---
title: "글 제목"
description: "글 요약"
date: "2026-05-18"
category: "dev"
tags: ["astro", "blog"]
draft: false
slug: "my-first-post"
---

## 본문 제목

여기에 Markdown으로 글을 작성합니다.
```

주의할 점:

- `draft: false`여야 공개 글로 표시됩니다.
- `category`는 `dev`, `english`, `memo`, `project` 중 하나를 사용합니다.
- URL은 파일명 기준입니다. 예: `my-first-post.md` → `/posts/my-first-post`
- `slug`는 기록용으로 유지해도 되지만, 현재 Astro 라우팅은 파일명을 기준으로 사용합니다.

## 3. 로컬에서 확인하기

개발 서버가 켜져 있으면 글을 저장했을 때 자동으로 반영됩니다.

```powershell
npm.cmd run dev
```

확인할 페이지:

```text
http://127.0.0.1:4321/posts
http://127.0.0.1:4321/posts/my-first-post
```

## 4. 빌드 확인하기

배포 전에 빌드가 성공하는지 확인합니다.

```powershell
npm.cmd run build
```

성공하면 `dist/` 폴더가 생성되고, Pagefind 검색 인덱스도 함께 만들어집니다.

빌드 결과를 로컬에서 확인하려면:

```powershell
npm.cmd run preview
```

## 5. GitHub에 올리기

처음 한 번은 이 폴더를 Git 저장소로 만들고 GitHub 원격 저장소를 연결해야 합니다.

```powershell
git init
git add .
git commit -m "Initial blog"
git branch -M main
git remote add origin https://github.com/USER/REPOSITORY.git
git push -u origin main
```

이미 GitHub 저장소가 연결되어 있다면 글을 쓴 뒤 아래만 실행하면 됩니다.

```powershell
git add src/content/posts/my-first-post.md
git commit -m "Add my first post"
git push
```

## 6. 실제 배포 흐름

정적 블로그는 서버에 글을 직접 올리는 방식이 아닙니다.

```text
로컬에서 Markdown 글 작성
→ git add / commit / push
→ GitHub 저장소에 소스 코드 업로드
→ GitHub Actions 실행
→ npm.cmd run build와 같은 빌드 수행
→ dist/ 결과물이 GitHub Pages에 배포
→ 공개 블로그에 반영
```

즉, GitHub에 올리는 것은 `dist/`가 아니라 `src/`, `package.json`, Markdown 글 파일 같은 소스 코드입니다.

## 7. GitHub Pages 설정

GitHub 저장소에서 아래 설정을 확인합니다.

```text
Settings → Pages → Build and deployment → Source: GitHub Actions
```

이 프로젝트에는 `.github/workflows/deploy.yml`이 있어서 `main` 브랜치에 push하면 자동 배포됩니다.

## 8. 검색 기능

검색은 Pagefind를 사용합니다.

- 개발 서버(`npm.cmd run dev`)에서는 검색 인덱스가 없어서 완전히 동작하지 않을 수 있습니다.
- `npm.cmd run build` 후 `npm.cmd run preview`에서 검색 기능을 확인하는 것이 정확합니다.

검색 흐름:

```text
헤더 돋보기 클릭
→ 검색 레이어에서 검색어 입력
→ /search?q=검색어 이동
→ Pagefind 결과 표시
```

## 9. 자주 쓰는 명령어

```powershell
# 개발 서버
npm.cmd run dev

# 배포 전 빌드 확인
npm.cmd run build

# 빌드 결과 미리보기
npm.cmd run preview

# 변경 파일 확인
git status

# 변경 내용 저장
git add .
git commit -m "Update blog"

# GitHub에 올리기
git push
```

## 10. 아직 필요한 작업

- GitHub 저장소 생성
- 현재 폴더와 GitHub 원격 저장소 연결
- GitHub Pages를 GitHub Actions 방식으로 설정
- 필요하면 커스텀 도메인 연결
