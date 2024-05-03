package com.drip.backend.domain;
import jakarta.persistence.*;
import lombok.*;

@Entity@Table(name="tbl_drip")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Drip {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY) //pk 자동생성
    private Long no;
    private String content;
    private int likes;
}
