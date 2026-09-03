# Pain Point 섹션 개선 설계서

> 버전: 1.0.0 | 작성일: 2026-02-10 | 상태: 초안

## 1. 개요 (Overview)
본 설계서는 Pain Point 섹션의 시각적 완성도와 정보 전달력을 높이기 위한 상세 마크업 및 스타일링 가이드를 제공합니다.

## 2. 디자인 변경 사항 (Design Changes)

### 2.1 카드 구조 개선
- **기존**: 아이콘 + 제목 + 설명
- **변경**: 아이콘 + 제목 + 설명 + **상세 체크리스트(3개 항목)**
- **스타일**:
    - `check_circle` 아이콘을 `primary` 색상으로 적용.
    - 리스트 항목 간의 간격을 `space-y-3`로 설정하여 가독성 확보.
    - 카드 하단에 여백을 충분히 두어(`p-8`) 답답하지 않게 구성.

### 2.2 인터랙션 및 시각 효과
- **Hover Effect**: 카드 호버 시 보더 색상이 `primary/50`으로 변경되며 살짝 떠오르는(`-translate-y-1`) 효과 유지.
- **Icon Animation**: 아이콘 컨테이너에 `group-hover:scale-110` 적용.

## 3. 마크업 예시 (Target Markup)
```html
<div class="group relative bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 card-shadow">
    <div class="mb-6 w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
        <span class="material-icons-round text-3xl">trending_down</span>
    </div>
    <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">"나만 뒤처지는 것 같아요"</h3>
    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        주변 동료들은 이미 AI를 업무에 활용한다는데, 나는 어디서부터 시작해야 할지 막막합니다.
    </p>
    <ul class="space-y-3">
        <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
            <span class="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
            AI 툴들이 너무 많아 무엇이 진짜 필요한지 혼란스러움
        </li>
        <!-- ... 생략 ... -->
    </ul>
</div>
```

## 4. 테스트 계획 (Test Plan)
- 3개 카드 모두 동일한 높이(또는 조화로운 배치)를 유지하는지 확인.
- 다크 모드에서 체크리스트 텍스트가 잘 보이는지 확인.
- 모바일 환경에서 텍스트가 넘치거나 잘리지 않는지 확인.
