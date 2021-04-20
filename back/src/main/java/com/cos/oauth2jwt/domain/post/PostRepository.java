package com.cos.oauth2jwt.domain.post;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	@Query(value = "select * from post where userId in (:principalId, (select toUserId from follow where fromUserId = :principalId)) order by id desc", nativeQuery = true)
	Page<Post> mPost(Long principalId, Pageable pageable);
	
	@Query(value = "select * from post where id in (select postId from (select postId, count(postId) likeCount from likes group by postId order by 2 desc) t) and userId != :principalId  ", nativeQuery = true)
	List<Post> mExplore(Long principalId);
}
