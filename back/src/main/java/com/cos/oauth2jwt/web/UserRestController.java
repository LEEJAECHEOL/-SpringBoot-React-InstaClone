package com.cos.oauth2jwt.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.user.User;
import com.cos.oauth2jwt.service.FollowService;
import com.cos.oauth2jwt.service.UserService;
import com.cos.oauth2jwt.web.dto.follow.FollowRespDto;
import com.cos.oauth2jwt.web.dto.user.LoginRespDto;
import com.cos.oauth2jwt.web.dto.user.ProfileImageRespDto;
import com.cos.oauth2jwt.web.dto.user.UserProfileRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class UserRestController {
	
	private final UserService userService;
	private final FollowService followService;
	
	@GetMapping("/user/{pageUserId}/follow") // data 리턴하는 것
	public ResponseEntity<?> followList(@AuthenticationPrincipal PrincipalDetails principalDetails, @PathVariable Long pageUserId){
		List<FollowRespDto> followRespDto = followService.팔로우리스트(principalDetails.getUser().getId(), pageUserId);
		return new ResponseEntity<>(followRespDto, HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> profile(@PathVariable Long id, @AuthenticationPrincipal PrincipalDetails principalDetails) {
		
		UserProfileRespDto userProfileRespDto = userService.회원프로필(id, principalDetails.getUser().getId());
		
		return new ResponseEntity<>(userProfileRespDto, HttpStatus.OK);
	}
	
	@GetMapping("/user/load")
	public ResponseEntity<?> loadUser(@AuthenticationPrincipal PrincipalDetails principalDetails){
		if(principalDetails != null) { // 사용자가 있을 경우 사용자 정보를 리턴
			User user = principalDetails.getUser();
			LoginRespDto loginRespDto = LoginRespDto.builder()
													.id(user.getId())
													.username(user.getUsername())
													.name(user.getName())
													.profileImageUrl(user.getProfileImageUrl())
													.role(user.getRole())
													.build();
			return new ResponseEntity<>(loginRespDto, HttpStatus.OK);
		}else {	// null일 경우 401 리턴
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	@PutMapping("/user/{id}/profileImageUrl")
	public ResponseEntity<?> profileImageUrlUpdate(@PathVariable int id, MultipartFile profileImageFile, @AuthenticationPrincipal PrincipalDetails principalDetails){
		// id값이랑 principal id 비교(다르면 익셉션), 나중에 처리
		User userEntity = userService.회원사진변경(profileImageFile, principalDetails);
		
		// 바뀐 프로필 부분만 리턴
		ProfileImageRespDto respDto = new ProfileImageRespDto();
		respDto.setProfileImageUrl(userEntity.getProfileImageUrl());
		return new ResponseEntity<>(respDto, HttpStatus.OK);
	}
	
}
