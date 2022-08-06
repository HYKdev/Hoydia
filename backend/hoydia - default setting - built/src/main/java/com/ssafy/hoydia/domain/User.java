package com.ssafy.hoydia.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.hoydia.util.SHA256;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor

public class User {

    @Column (name = "user_id")
    @Id
    @Setter (AccessLevel.NONE)
    private String id;

    private String name;

    private String nickname;

    private String email;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Platform platform; // enum으로 타입으로 바꾸기

    @Enumerated(EnumType.STRING)
    private Role role;

    private String gender;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Note> notes = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Diary> diaries = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<MatchingNote> matchingNotes = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Notice> notices = new ArrayList<>();

    public static User createUser(String name, String email, Platform platform, Role role){

        User user = new User();

        SHA256 sha256 = new SHA256();

        try {
            user.id = sha256.encrypt(email+ LocalDateTime.now());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        user.name = name;
        user.email = email;
        user.platform = platform;
        user.role = role;

        return user;
    }

    @Builder
    public User (String id,
                 String name,
                 String nickname,
                 String email,
                 Platform platform,
                 Role role,
                 String gender
                 )
    {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.platform = platform;
        this.role =role;
        this.gender = gender;
    }


}
