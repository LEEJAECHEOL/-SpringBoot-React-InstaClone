package com.cos.oauth2jwt.domain.user;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;

import com.cos.oauth2jwt.domain.post.Post;

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
	
	private String website; // 자기 홈페이지
	private String intro; // 자기소개
	private String phone; // 전화번호
	private String profileImageUrl; // 프로필 이미지
	private String provider; // 제공자 Google, Facebook, Naver
    
	private String role; // USER, ADMIN
	
	@OneToMany(mappedBy = "user")
	private List<Post> posts;
	
    @CreationTimestamp
    private Timestamp createDate;
	
	
}
