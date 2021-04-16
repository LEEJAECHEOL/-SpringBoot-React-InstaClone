package com.cos.oauth2jwt.web.dto.post;

import org.springframework.web.multipart.MultipartFile;

import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.domain.user.User;

import lombok.Data;

@Data
public class PostReqDto {

	private MultipartFile file;
	private String caption;
	private String tags;

	public Post toEntity(String postImageUrl, User userEntity) {
		return Post.builder()
				.caption(caption)
				.postImageUrl(postImageUrl)
				.user(userEntity)
				.build();
	}
}
