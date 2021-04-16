package com.cos.oauth2jwt.web;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.service.PostService;
import com.cos.oauth2jwt.web.dto.post.PostReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class PostRestController {
	private final PostService postService;
	
	@PostMapping("/post")
	public String image(PostReqDto postReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
		postService.사진업로드(postReqDto, principalDetails);
		
		return null;
	}

}
