package com.cos.oauth2jwt.util;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

public class ImageUtil {
	
	public static String SaveImage(String uploadFolder, MultipartFile profileImageFile) {

		UUID uuid = UUID.randomUUID();
		String imageFileName = uuid+"_"+profileImageFile.getOriginalFilename();
		Path imageFilePath = Paths.get(uploadFolder + imageFileName);
		try {
			Files.write(imageFilePath, profileImageFile.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return imageFileName;
	}
}
