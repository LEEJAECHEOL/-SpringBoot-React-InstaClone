package com.cos.oauth2jwt.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.comment.Comment;
import com.cos.oauth2jwt.domain.user.User;
import com.cos.oauth2jwt.service.CommentService;
import com.cos.oauth2jwt.service.PostService;
import com.cos.oauth2jwt.web.dto.comment.CommentSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class CommentRestController {
	private final CommentService commentService;
	private final PostService postService;
	
	@PostMapping("/comment")
	public ResponseEntity<?> save(@RequestBody CommentSaveReqDto commentSaveReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
		System.out.println(commentSaveReqDto);
		Comment commentEntity = commentService.댓글쓰기(commentSaveReqDto, principalDetails.getUser());
		commentEntity.getUser().setPassword("");
		
		return new ResponseEntity<>(commentEntity, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id, @AuthenticationPrincipal PrincipalDetails principalDetails){
		
		commentService.댓글삭제(id, principalDetails.getUser().getId());
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
