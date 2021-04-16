package com.cos.oauth2jwt.domain.post;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;

import com.cos.oauth2jwt.domain.comment.Comment;
import com.cos.oauth2jwt.domain.like.Likes;
import com.cos.oauth2jwt.domain.tag.Tag;
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
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String caption;
	private String postImageUrl;

	@JsonIgnoreProperties({"posts"})
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user; // 작성자

	@JsonIgnoreProperties({"post"})
	@OneToMany(mappedBy = "post")
	private List<Tag> tags;	// 태그

	@JsonIgnoreProperties({"post"})
	@OneToMany(mappedBy = "post")
	private List<Likes> likes; // 좋아요

	@OrderBy("id DESC")  // 정렬
	@JsonIgnoreProperties({"post"})
	@OneToMany(mappedBy = "post")
	private List<Comment> comments; // 댓글
	
	@CreationTimestamp
	private Timestamp createDate;
	
	@Transient // 칼럼이 만들어지지 않는다.
	private int likeCount; 
	
	@Transient
	private boolean likeState;
}
