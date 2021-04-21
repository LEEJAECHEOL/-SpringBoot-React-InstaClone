package com.cos.oauth2jwt.web.dto.user;

import com.cos.oauth2jwt.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserProfileRespDto {
	private boolean followState;
	private int followCount;
	private int postCount;
	private User user;
}
