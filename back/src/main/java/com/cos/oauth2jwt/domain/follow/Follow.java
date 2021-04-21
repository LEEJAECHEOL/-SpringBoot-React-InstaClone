package com.cos.oauth2jwt.domain.follow;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.CreationTimestamp;
import com.cos.oauth2jwt.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(
		name="follow",
		uniqueConstraints={
			@UniqueConstraint(
				name = "follow_uk",
				columnNames={"fromUserId","toUserId"}
			)
		}
	)
public class Follow {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonIgnoreProperties({"posts"})
	@JoinColumn(name = "fromUserId")
	@ManyToOne
	private User fromUser;  // ~~로부터  (1)
	
	@JsonIgnoreProperties({"posts"})
	@JoinColumn(name = "toUserId")
	@ManyToOne
	private User toUser; // ~~를  (3)
	
	@CreationTimestamp
	private Timestamp createDate;
}
