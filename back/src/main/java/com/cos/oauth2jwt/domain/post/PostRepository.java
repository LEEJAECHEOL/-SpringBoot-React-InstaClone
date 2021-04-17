package com.cos.oauth2jwt.domain.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	@Query(value = "select * from post where userId in (:principalId, (select toUserId from follow where fromUserId = :principalId)) order by id desc", nativeQuery = true)
	Page<Post> mPost(Long principalId, Pageable pageable);
}
