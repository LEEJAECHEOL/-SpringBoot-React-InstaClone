package com.cos.oauth2jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
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
