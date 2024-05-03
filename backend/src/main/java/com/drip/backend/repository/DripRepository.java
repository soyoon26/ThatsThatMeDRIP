package com.drip.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.drip.backend.domain.Drip;
public interface DripRepository extends JpaRepository<Drip, Long> {
    
}
