package com.cos.oauth2jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.domain.post.PostRepository;
import com.cos.oauth2jwt.domain.tag.Tag;
import com.cos.oauth2jwt.domain.tag.TagRepository;
import com.cos.oauth2jwt.util.ImageUtil;
import com.cos.oauth2jwt.util.TagUtil;
import com.cos.oauth2jwt.web.dto.post.PostReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PostService {

	private final PostRepository postRepository;
	private final TagRepository tagRepository;
	
	@Value("${file.path}")
	private String uploadFolder;
	

	@Transactional(readOnly = true)
	public List<Post> 인기사진(Long principalId){
		return postRepository.mExplore(principalId);
	}
	
	@Transactional(readOnly = true)
	public Page<Post> 포스트이미지(Long principalId, Pageable pageable){
		
		// 1. principalId 로 내가 팔로우하고 있는 사용자를 찾아야 됨. (한개이거나 컬렉션이거나)
		// select * from image where userId in (select toUserId from follow where fromUserId = 1);
		
		Page<Post> posts = postRepository.mPost(principalId, pageable);
		
		// 좋아요 하트 색깔 로직 + 좋아요 카운트 로직
		posts.forEach((post)-> {
			
			int likeCount = post.getLikes().size();
			post.setLikeCount(likeCount);
			
			post.getLikes().forEach((like)->{
				if(like.getUser().getId() == principalId) {
					post.setLikeState(true);
				}
			});
			post.getUser().setPassword("");
		});
		
		return posts;
	}

	@Transactional
	public void 사진업로드(PostReqDto imageReDto, PrincipalDetails principalDetails) {
		
		String imageFileName = ImageUtil.SaveImage(uploadFolder, imageReDto.getFile());
		// 참고 :  Image 엔티티에 Tag는 주인이 아니다. Image 엔티티로 통해서 Tag를 save할 수 없다.
		
		// 1. Image 저장
		Post post = imageReDto.toEntity(imageFileName, principalDetails.getUser());
		Post postEntity = postRepository.save(post);
		
		// 2. Tag 저장
		List<Tag> tags = TagUtil.parsingToTagObject(imageReDto.getTags(), postEntity);
		tagRepository.saveAll(tags);
		
	}
}
