# Design: Stitch MCP 설치 및 Gemini CLI 연동

## 1. 아키텍처 및 구성
- **구성 요소**:
    - **Stitch MCP Server**: `@_davideast/stitch-mcp` (Node.js 기반)
    - **Client**: Gemini CLI (MCP 호스트)
    - **Auth**: API Key 또는 gcloud ADC (Application Default Credentials)

## 2. 세부 설계
### 2.1 인증 방식 선택
- gcloud CLI가 설치되어 있지 않으므로, **API Key 방식**을 우선적으로 고려하거나 gcloud 설치 안내를 포함한다.
- 사용자가 Google Cloud 콘솔에서 Stitch API를 활성화하고 API Key를 발급받아야 할 수 있음.

### 2.2 설치 프로세스 설계
1. **의존성 확인**: Node.js v18+ 확인 (완료: v22.17.0)
2. **초기화 실행**: `npx @_davideast/stitch-mcp init`
3. **Gemini CLI 설정 업데이트**:
    - MCP 설정 파일(보통 `config.json` 또는 환경 변수)에 Stitch MCP 서버 경로 및 인자 추가.
    - 예시 설정:
      ```json
      {
        "mcpServers": {
          "stitch": {
            "command": "npx",
            "args": ["-y", "@_davideast/stitch-mcp"]
          }
        }
      }
      ```

## 3. 구현 단계 (Do Phase) 가이드
1. `npx @_davideast/stitch-mcp init` 실행 후 출력되는 안내에 따라 설정 진행.
2. 생성된 설정을 Gemini CLI 환경에 적용.
3. `stitch-mcp` 서버가 정상 동작하는지 확인.

## 4. 검증 시나리오 (Check Phase)
1. Gemini CLI에서 `list_tools` 또는 유사한 명령으로 `stitch` 관련 도구가 노출되는지 확인.
2. 간단한 Stitch 도구 호출 테스트 (예: `stitch_extract_context`).
