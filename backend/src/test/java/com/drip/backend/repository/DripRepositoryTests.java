package com.drip.backend.repository;

import static org.mockito.ArgumentMatchers.isNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.drip.backend.domain.Drip;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class DripRepositoryTests {
    @Autowired
    private DripRepository dripRepository;
    @Test
    public void test1() {
        for (int i = 1; i <= 10; i++) {
            Drip drip = Drip.builder()
            .content("Content is" + i)
            .likes(i)
            .build();

            dripRepository.save(drip);
        }
        log.info("-------------");
        log.info(dripRepository);
    }
    
}
