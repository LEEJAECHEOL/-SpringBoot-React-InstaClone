# 9. login 로직 구현

1. front 로그인 구현

Cors 요청의 경우 브라우저는 기본적으로 다음 헤더만 제공함.

- Cache-Control
- Content-Language
- Content-Type
- Expires
- Last-Modified
- Pragma

헤더의 authorization 을 받기 위해서 서버측에서 setExposedHeaders를 해주어야함.
서버측에서 CorsConfig필터 내에 다음을 추가해주면 된다.

```java
	List<String> exposeHeaders = new ArrayList<>();
   exposeHeaders.add("Authorization");
	config.setExposedHeaders(exposeHeaders);
```
