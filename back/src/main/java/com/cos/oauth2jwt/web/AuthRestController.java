package com.cos.oauth2jwt.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.oauth2jwt.service.AuthService;
import com.cos.oauth2jwt.web.dto.auth.UserJoinReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class AuthRestController {
	
	private final AuthService authService;
	
	@PostMapping("/auth/join")
	public ResponseEntity<?>  join(@RequestBody UserJoinReqDto userJoinReqDto){
		// 나중에 exception 처리
		authService.회원가입(userJoinReqDto.toEntity());
		return new ResponseEntity<>(HttpStatus.CREATED); // 성공시 201 반환
	}
}
