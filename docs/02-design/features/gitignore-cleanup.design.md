# .gitignore 정리 및 Git 초기화 설계서

> 버전: 1.0.0 | 작성일: 2026-02-10 | 상태: 초안

## 1. 개요 (Overview)
본 설계서는 Git 저장소 초기화 전 프로젝트를 깨끗하게 유지하기 위한 `.gitignore` 규칙과 파일 정리 절차를 정의합니다.

## 2. 상세 설계 (Details)

### 2.1 .gitignore 구성 항목
1.  **Node.js/Vite 표준**: `node_modules`, `dist`, `dist-ssr`, `*.local`, `*.log`
2.  **IDE/OS**: `.vscode`, `.idea`, `.DS_Store`
3.  **Gemini CLI 특정 항목**:
    - `.gemini/tmp/` (임시 작업 파일)
    - `docs/.pdca-snapshots/` (PDCA 상태 스냅샷 - 버전 관리에서 제외 권장)
4.  **에셋 및 라이브러리**:
    - `stitch_project_*/` (Stitch에서 받은 원본 데이터 - 필요한 경우 수동으로 추가하거나 배제)

### 2.2 정리(Cleanup) 절차
1.  기존 `.gitignore` 백업 및 업데이트
2.  프로젝트 루트의 임시 또는 중복 파일 확인 및 삭제
    - 예: `App (1).jsx`, `index (1).css` 등 중복된 파일 정리
3.  `git init` 수행
4.  `git status`로 무시 항목 작동 확인

## 3. 테스트 계획 (Test Plan)
| 테스트 케이스 | 기대 결과 |
|-----------|-----------------|
| `git status` 실행 | `node_modules`가 목록에 나타나지 않음 |
| `.gemini/tmp` 생성 후 확인 | 추적되지 않는 파일로 나타나지 않음 |
| 중복 파일 존재 여부 | `src/` 내 `(1)` 붙은 파일들이 제거됨 |
