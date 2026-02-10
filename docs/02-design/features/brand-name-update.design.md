# 브랜드 명칭 수정 설계서

> 버전: 1.0.0 | 작성일: 2026-02-10 | 상태: 초안

## 1. 개요 (Overview)
본 설계서는 `integrated_landing.html`에서 벤치마킹 브랜드를 실제 브랜드로 치환하기 위한 상세 규칙을 정의합니다.

## 2. 치환 규칙 (Replacement Rules)

### 2.1 국문 명칭
- **대상**: `멋쟁이사자처럼`
- **변경**: `플래닝하이`
- **적용 위치**: 푸터(Footer) 내 서비스명 등

### 2.2 영문 명칭
- **대상**: `LIKELION AI`
- **변경**: `PlanningHigh`
- **적용 위치**: Copyright 문구 내
- **참고**: 연도 정보가 포함된 경우 현재 시점(2026년)에 맞춰 업데이트 고려 가능 (사용자 별도 요청 없으므로 명칭 위주로 진행하되 브랜드 일관성 유지)

## 3. 상세 수정 마크업
- **Before**:
  ```html
  <p class="font-bold text-slate-900 dark:text-white mb-2">멋쟁이사자처럼 AI 마스터코스</p>
  <p class="text-slate-500 text-sm">© 2024 LIKELION AI. All rights reserved.</p>
  ```
- **After**:
  ```html
  <p class="font-bold text-slate-900 dark:text-white mb-2">플래닝하이 AI 마스터코스</p>
  <p class="text-slate-500 text-sm">© 2026 PlanningHigh. All rights reserved.</p>
  ```

## 4. 테스트 계획 (Test Plan)
- `grep` 또는 `search_file_content`를 통해 "멋쟁이사자", "likelion" 키워드가 존재하지 않음을 확인.
- 브라우저에서 푸터 영역의 텍스트가 정상적으로 노출되는지 확인.
