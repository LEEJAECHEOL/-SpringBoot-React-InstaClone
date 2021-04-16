# 10. 프로필 이미지 변경

1. 토큰 만료시간 10시간으로 잠시 변경

2. 서버 이미지 업로드 설정

3. 유저정보 가져오기

4. profile/index -> profile/[id]로 변경

5. 이미지 업로드 UI

6. 이미리 업로드 로직 구현

7. nextjs next.config.js 생성

```javascript
module.exports = {
  env: {
    imageUrl: "http://localhost:8080/upload/",
  },
};
```

사용법 : process.env.imageUrl
