package com.cos.oauth2jwt.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.oauth2jwt.domain.like.LikesRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class LikesService {

	private final LikesRepository likesRepository;
	
	@Transactional
	public void 좋아요(Long postId, Long principalId) {
		likesRepository.mLike(postId, principalId);
	}
	
	@Transactional
	public void 싫어요(Long postId, Long principalId) {
		likesRepository.mUnLike(postId, principalId);
	}
}
