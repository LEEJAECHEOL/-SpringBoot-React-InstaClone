package com.cos.oauth2jwt.domain.user;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank
	@Column(unique = true)
	private String username;
	@NotBlank
	private String password;
	private String email;
	private String name; // 이름
	
	private String imageUrl;
	private String website; // 자기 홈페이지
	private String intro; // 자기소개
	private String phone; // 전화번호
	private String profileImageUrl;
	private String provider; // 제공자 Google, Facebook, Naver
    
	private String role; // USER, ADMIN
	
    @CreationTimestamp
    private Timestamp createDate;
	
	
}
