package com.cos.oauth2jwt.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.service.FollowService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FollowRestController {

	private final FollowService followService;
	
	@PostMapping("/follow/{toUserId}") // /follow/3
	public ResponseEntity<?> follow(@AuthenticationPrincipal PrincipalDetails principalDetails, @PathVariable Long toUserId) {
		followService.팔로우(principalDetails.getUser().getId(), toUserId);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@DeleteMapping("/follow/{toUserId}") // /follow/3
	public ResponseEntity<?> unFollow(@AuthenticationPrincipal PrincipalDetails principalDetails, @PathVariable Long toUserId) {
		followService.언팔로우(principalDetails.getUser().getId(), toUserId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
