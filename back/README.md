# insta Clone Project

### 1. 의존성
- Spring Web
- Lombok
- Spring Dev Tool
- OAuth`
- JPA
- Security
- MySQL Driver
- qlrm
- validation
- jwt

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
</dependency>
<dependency>
	<groupId>com.auth0</groupId>
	<artifactId>java-jwt</artifactId>
	<version>3.10.3</version>
</dependency>
<dependency>
	<groupId>org.qlrm</groupId>
	<artifactId>qlrm</artifactId>
	<version>2.1.1</version>
</dependency>
```

### 2. DB 생성
```spl
create user 'insta'@'%' identified by '1234';
GRANT ALL PRIVILEGES ON *.* TO 'insta'@'%';
create database insta;
use insta;
```

### 3. application.yml 세팅
```yml
server:
  port: 8080
  servlet:
    context-path: /
    encoding:
      charset: UTF-8
      enabled: true
      force: true
      
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/insta?serverTimezone=Asia/Seoul
    username: nomad
    password: 1234

  jpa:
    hibernate:
      ddl-auto: create #create update none
      naming:
        physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
    show-sql: true

```