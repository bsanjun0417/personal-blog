# 배포 사용법

이 블로그는 `project` 폴더가 실제 Git 저장소입니다. GitHub에 올릴 때는 항상 아래 폴더에서 작업합니다.

```powershell
cd C:\Users\bsanj\Desktop\github_blog\project
```

## 1. 로컬에서 글 작성

관리자 도구는 상위 폴더에서 실행합니다.

```powershell
cd C:\Users\bsanj\Desktop\github_blog
.\start-local.bat
```

접속 주소:

```text
Admin: http://127.0.0.1:4322/
Blog : http://127.0.0.1:4321/
```

Admin에서 Markdown 파일과 이미지/영상 파일을 불러온 뒤 저장하면 글은 아래에 생성됩니다.

```text
project/src/content/posts/<slug>/index.md
project/public/uploads/<slug>/
```

`cover`를 비워두면 본문에서 가장 먼저 등장하는 첨부 이미지가 썸네일로 자동 지정됩니다.

## 2. 배포 전 확인

```powershell
cd C:\Users\bsanj\Desktop\github_blog\project
npm.cmd run build
```

빌드가 성공해야 배포해도 됩니다.

## 3. GitHub에 올리기

```powershell
git status
git add .
git commit -m "Update blog"
git push origin master
```

현재 배포 workflow는 `master` 브랜치 push를 기준으로 실행됩니다. push 후 GitHub 저장소의 Actions 탭에서 `Deploy to GitHub Pages`가 성공했는지 확인합니다.

## 4. 배포 결과 확인

Actions가 성공하면 아래 사이트에 반영됩니다.

```text
https://blog.san2blog.com
```

반영이 늦으면 브라우저 새로고침 또는 잠시 후 다시 확인합니다.
