# Plan: Stitch MCP 설치 및 설정

## 1. 개요
- **목표**: Stitch MCP(Model Context Protocol)를 설치하고 Gemini CLI와 연동하여 AI 디자인 기능을 활성화한다.
- **대상 URL**: https://stitch.withgoogle.com/docs/mcp/setup/
- **주요 도구**: npx, gcloud CLI, Gemini CLI

## 2. 현재 상태 분석
- Gemini CLI 사용 중
- gcloud CLI 설치 여부 확인 필요
- Stitch API 권한 및 프로젝트 설정 필요

## 3. 상세 계획 (Tasks)
- [ ] gcloud CLI 설치 및 로그인 확인
- [ ] Google Cloud 프로젝트 설정 및 Stitch API 활성화
- [ ] `npx @_davideast/stitch-mcp init` 명령어를 통한 가이드 설치 진행
- [ ] Gemini CLI의 MCP 설정에 Stitch MCP 추가
- [ ] 설치 결과 검증 (디자인 컨텍스트 추출 테스트)

## 4. 기대 효과
- AI 에이전트가 UI 디자인을 이해하고 생성할 수 있는 능력 확보
- 디자인에서 코드로의 전환 프로세스 자동화 기반 마련

## 5. 리스크 및 대응
- **권한 문제**: Google Cloud 프로젝트의 IAM 권한 확인 필요
- **환경 차이**: win32 환경에서의 경로 및 실행 권한 주의
