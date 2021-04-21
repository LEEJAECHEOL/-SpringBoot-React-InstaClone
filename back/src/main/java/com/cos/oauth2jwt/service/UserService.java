package com.cos.oauth2jwt.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.follow.FollowRepository;
import com.cos.oauth2jwt.domain.user.User;
import com.cos.oauth2jwt.domain.user.UserRepository;
import com.cos.oauth2jwt.util.ImageUtil;
import com.cos.oauth2jwt.web.dto.user.UserProfileRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;
	private final FollowRepository followRepository;
	
	@Value("${file.path}")
	private String uploadFolder;
	
	@Transactional
	public User 회원사진변경(MultipartFile profileImageFile, PrincipalDetails principalDetails) {
		
		String imageFileName = ImageUtil.SaveImage(uploadFolder, profileImageFile);
		System.out.println(imageFileName);
		User userEntity = userRepository.findById(principalDetails.getUser().getId()).get();
		userEntity.setProfileImageUrl(imageFileName);
		
		return userEntity;
	} // 더티체킹
	
	
	@Transactional(readOnly = true)
	public UserProfileRespDto 회원프로필(Long userId, Long principalId) {
		UserProfileRespDto userProfileRespDto = new UserProfileRespDto();
		
		User userEntity = userRepository.findById(userId).orElseThrow(()-> {
			return new IllegalArgumentException();
		});
		
		int followState = followRepository.mFollowState(principalId, userId);
		int followCount = followRepository.mFollowCount(userId);
		System.out.println(followState == 1);
		userProfileRespDto.setFollowState(followState == 1);
		userProfileRespDto.setFollowCount(followCount); // 내가 팔로우 하고 있는 카운트
		userProfileRespDto.setPostCount(userEntity.getPosts().size());
		
		userEntity.getPosts().forEach((image)->{
			image.setLikeCount(image.getLikes().size());
		});
		
		userProfileRespDto.setUser(userEntity);
		userProfileRespDto.getUser().setPassword("");
		return userProfileRespDto;
	}

}
