package com.cos.oauth2jwt.web.dto.comment;

import lombok.Data;

@Data
public class CommentSaveReqDto {
	private Long postId;
	private String content;
}
