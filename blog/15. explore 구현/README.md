# 15. explore 구현

- explore는 라이크가 하나 이상인 이미지만 가져옴.
- 자기 게시물은 가져오지 않는다.
- explore 사진을 클릭하면 해당 게시물의 유저 프로필로 이동함.

```sql
select *
from post
where
   id in (select postId
         from (
            select postId, count(postId) likeCount
            from likes
            group by postId
            order by 2 desc
            ) t
         )
   and userId != :principalId
```

- 이미지 업로드 후 이미지 안뜨는 에러 수정
