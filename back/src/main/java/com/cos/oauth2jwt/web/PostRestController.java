package com.cos.oauth2jwt.web;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.service.LikesService;
import com.cos.oauth2jwt.service.PostService;
import com.cos.oauth2jwt.web.dto.post.PostReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class PostRestController {
	private final PostService postService;
	private final LikesService likesService;
	
	@GetMapping("/post")
	public ResponseEntity<?> post(@AuthenticationPrincipal PrincipalDetails principalDetails, 
			@PageableDefault(size=3, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
		
		Page<Post> pages = postService.포스트이미지(principalDetails.getUser().getId(), pageable);
		return new ResponseEntity<>(pages, HttpStatus.OK); // MessageConverter 발동 = Jackson = 무한참조
	}
	
	@PostMapping("/post")
	public ResponseEntity<?> image(PostReqDto postReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails) {
		postService.사진업로드(postReqDto, principalDetails);
		
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PostMapping("/post/{postId}/likes")
	public ResponseEntity<?> like(@PathVariable Long postId, @AuthenticationPrincipal PrincipalDetails principalDetails){
		System.out.println(principalDetails);
		likesService.좋아요(postId, principalDetails.getUser().getId());
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@DeleteMapping("/post/{postId}/likes")
	public ResponseEntity<?> unLike(@PathVariable Long postId, @AuthenticationPrincipal PrincipalDetails principalDetails){
		likesService.싫어요(postId, principalDetails.getUser().getId());
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
