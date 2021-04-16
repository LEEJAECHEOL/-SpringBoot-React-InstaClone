package com.cos.oauth2jwt.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cos.oauth2jwt.config.auth.PrincipalDetails;
import com.cos.oauth2jwt.domain.user.User;
import com.cos.oauth2jwt.domain.user.UserRepository;
import com.cos.oauth2jwt.util.ImageUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;
	
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

}
