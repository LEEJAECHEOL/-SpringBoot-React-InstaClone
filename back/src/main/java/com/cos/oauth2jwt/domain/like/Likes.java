package com.cos.oauth2jwt.domain.like;

import java.sql.Timestamp;

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
public class Likes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; 
	
	@ManyToOne
	@JoinColumn(name = "postId")
	private Post post;

	@JsonIgnoreProperties({"posts"})
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	@CreationTimestamp
	private Timestamp createDate; 

}
