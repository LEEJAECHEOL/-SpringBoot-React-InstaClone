package com.cos.oauth2jwt.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.oauth2jwt.domain.comment.Comment;
import com.cos.oauth2jwt.domain.comment.CommentRepository;
import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.domain.user.User;
import com.cos.oauth2jwt.web.dto.comment.CommentSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CommentService {
	
	private final CommentRepository commentRepository;
	
	@Transactional
	public Comment 댓글쓰기(CommentSaveReqDto commentSaveReqDto, User principal) {
		Post post = Post.builder()
				.id(commentSaveReqDto.getPostId())
				.build();
				
		// Save할 때 연관관계가 있으면 오브젝트로 만들어서 id값만 넣어주면 된다.
		Comment comment = Comment.builder()
				.content(commentSaveReqDto.getContent())
				.post(post)
				.user(principal)
				.build();
		
		return commentRepository.save(comment);
	}

	@Transactional
	public void 댓글삭제(Long id, Long principalId) {
		Comment commentEntity = commentRepository.findById(id).get();
		if(commentEntity.getUser().getId() == principalId) {
			commentRepository.deleteById(id);
		}else {
			// 스로우 익센션 날려서 ControllAdvice 처리
		}
	}
}
