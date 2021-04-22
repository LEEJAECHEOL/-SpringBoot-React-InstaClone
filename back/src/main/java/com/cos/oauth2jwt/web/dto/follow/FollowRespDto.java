package com.cos.oauth2jwt.web.dto.follow;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FollowRespDto {
	private BigInteger userId;
	private String username;
	private String profileImageUrl;
	private BigInteger followState;
	private BigInteger equalState;

}
