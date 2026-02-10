# 랜딩 페이지 섹션 통합 설계서

> 버전: 1.0.0 | 작성일: 2026-02-10 | 상태: 초안

## 1. 개요 (Overview)
본 설계서는 5개의 개별 HTML 섹션을 하나의 일관된 랜딩 페이지로 통합하기 위한 기술적 세부 사항을 정의합니다.

## 2. 통합 순서 (Sequence)
사용자 설득 흐름(AIDA 모델 기반)에 따라 다음과 같이 배치합니다:
1.  **Hero**: `AI Automation Course Hero Variant 1` (주의 환기)
2.  **Problem**: `Problem Awareness Section Variant 2` (문제 제기)
3.  **Solution**: `Solution and Social Proof Variant 3` (해결책 및 신뢰)
4.  **Curriculum**: `Curriculum and Target Audience Section` (상세 정보)
5.  **CTA**: `Final Conversion and CTA Section` (최종 전환)

## 3. 기술 사양 (Technical Specifications)

### 3.1 공통 Head 구성
- **CSS Framework**: Tailwind CSS (CDN)
- **Fonts**: Pretendard, Material Icons
- **Tailwind Config**:
  ```javascript
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#FF6B00",
          "background-light": "#ffffff",
          "background-dark": "#0A0A0A",
        },
        fontFamily: {
          display: ["Pretendard", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "12px",
        },
      },
    },
  };
  ```

### 3.2 HTML 구조 설계
- 전체 레이아웃은 단일 `integrated_landing.html` 파일로 구성.
- 각 섹션의 `<main>` 또는 핵심 컨텐츠 영역만 추출하여 통합.
- 첫 번째 섹션의 `<nav>`를 전역 내비게이션으로 사용.
- 각 섹션 사이에 적절한 여백 또는 구분선 추가 고려 (기존 디자인 유지).

## 4. 자산 및 경로 관리
- 모든 외부 라이브러리(CDN)는 상단 `<head>`에 통합.
- 섹션별 고유 스타일(CSS 클래스)은 `<style>` 태그 내에 통합하되 이름 충돌 주의.

## 5. 테스트 계획 (Test Plan)
- 브라우저에서 통합 페이지 로드 확인.
- 섹션 간 전환 시 스타일 불일치 여부 확인.
- 반응형 레이아웃(모바일/데스크탑) 정상 작동 확인.
