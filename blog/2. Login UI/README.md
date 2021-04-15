# 2. LoGIN UI

- Warning : Props 'className' did not match 해결
  첫 페이지는 SSR로 작동하며 이후 CSR로 화면을 렌더링하게 되는데, 이때 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올수 없는 문제가 발생한다.

다음과 같이 하면 해결됨. (일시적)

```
npm i babel-plugin-styled-components
```

제일 상단에 .babelrc를 생성 후 다음과 같이 입력

```json
{
  "presets": ["next/babel"],
  "plugins": [
    ["babel-plugin-styled-components", { "ssr": true, "displayName": true }]
  ]
}
```
