package com.cos.oauth2jwt.domain.comment;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 100, nullable = false)
	private String content;
	
	@JoinColumn(name = "postId")
	@ManyToOne
	private Post post;

	@JsonIgnoreProperties({"posts"})
	@JoinColumn(name = "userId")
	@ManyToOne 
	private User user;
	
	@CreationTimestamp
	private Timestamp createDate;
} 
