# 16. profile 나머지 구현

1.  이전 : principal 데이터 뿌림
    변경 : profile 진입 시 해당 프로필 정보 가져와서 뿌리기

- follow 상태

```sql
select count(*)
from follow
where
  fromUserId = :principalId
  AND toUserId = :userId
```

- follow count

```sql
select count(*)
from follow
where fromUserId = :userId
```

Follow 복합키 추가
User 모델에 posts 추가

로그아웃 기능 추가
