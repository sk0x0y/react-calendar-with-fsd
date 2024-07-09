# React Calendar with FSD Architecture
안녕하세요, 프론트엔드 엔지니어 양석영입니다.<br/>
이 레포지토리는 좀 더 효율적인 FE 아키텍처, 설계와 및 구현에 대한 좀 더 깊은 고민을 해보고자 직접 캘린더를 만들어본 미니 프로젝트입니다.<br/><br/>
기존 Clean Architecture 를 주로 사용했지만, 최근 FSD (Feature Slice Domain) 아키텍처를 접하며 새로운 관점을 얻고 이를 적용해보고자 합니다.

## 실행 방법
### 미리보기
- [여기를 클릭하세요](https://react-calendar-with-fsd.vercel.app)

## 주요 포인트
- [FSD](https://feature-sliced.design/) (Feature Slice Domain) 아키텍처를 기반으로 구성했습니다.
- package.json 의 packageManager, engines 및 .nvmrc 를 통해 Node.js 버전을 명시하여 환경을 일관되게 유지했습니다.
- ESLint 와 Prettier 를 적용하여 코드 스타일을 일관되게 유지했습니다.
- Tailwind CSS 를 적용하여 CSS 스타일링을 빠르게 구현했습니다.
- Storybook 을 통해 UI Driven 개발 방식을 적용했습니다.
- *~~Vitest 를 통해 유닛 테스트를 적용했습니다.~~*

## 기술 스택
### CI/CD
- Vercel

### 번들러 및 트랜스파일러
- Vite, SWC, ESBuild, Babel

### 환경
- NVM with Node.js v18.20.3 or later
- NPM v10.0.0 or later
- React, TypeScript
- ESLint, Prettier

### 테스트
- *~~Vitest~~*, Storybook

### 스타일링
- Tailwind CSS

## 브랜치 전략
- 기본적으로 Git Flow 전략을 따릅니다.
- feature 브랜치는 `feature/ISSUE-123` 형식으로 생성합니다.
- 이 프로젝트의 이슈 번호는 `PFC-000` 형식입니다.

## Git Commit Convention
프로젝트에 적용된 Git 커밋 메시지 규칙은 다음과 같습니다.

```plaintext
chore(BRANCH_PREFIX): [ISSUE-123] 커밋 메시지 제목

- 상세한 변경 사항 설명
- 이슈 해결을 위해 수행한 작업 목록

IF CHERRY-PICK:
cherry-pick: [WALLET-284][feature/WALLET-284] 이벤트 기능 추가

- A 를 했다.
- B API 를 연동했다.

cherry-picked from commit 1a2b3c4d
```