package com.cos.oauth2jwt.web.dto.user;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginRespDto {
	private Long id;
	private String username; 
	private String name; // 이름
	private String profileImageUrl;
	private String role; // USER, ADMIN
}
