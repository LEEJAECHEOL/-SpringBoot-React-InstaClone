package com.cos.oauth2jwt.util;

import java.util.ArrayList;
import java.util.List;

import com.cos.oauth2jwt.domain.post.Post;
import com.cos.oauth2jwt.domain.tag.Tag;

public class TagUtil {
	public static List<Tag> parsingToTagObject(String tags, Post postEntity){
		String temp[] = tags.split("#"); 
		List<Tag> list = new ArrayList<>();
	
		// 파싱할 때 0번지에 공백이 들어와서 시작번지를 1로 함.
		for (int i=1; i<temp.length; i++) {
			Tag tag = Tag.builder()
					.name(temp[i].trim())
					.post(postEntity)
					.build();
			list.add(tag);
		}
		
		return list;
	}
}
