package com.cos.oauth2jwt.domain.like;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface LikesRepository extends JpaRepository<Likes, Long> {

	@Modifying
	@Query(value = "INSERT INTO likes(postId, userId) VALUES(:postId, :principalId)", nativeQuery = true)
	int mLike(Long postId, Long principalId);
	
	@Modifying
	@Query(value = "DELETE FROM likes WHERE postId = :postId AND userId = :principalId", nativeQuery = true)
	int mUnLike(Long postId, Long principalId);
}
