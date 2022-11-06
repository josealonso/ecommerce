package com.example.ecommerce.dao;

import com.example.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")   // Origin is protocol, hostname and port
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Spring will execute a query similar to this:
    // SELECT * FROM product where category_id=?
    // Spring Data REST automatically exposes endpoint
    // http:localhost:8080/api/products/search/findByCategoryId?id=2
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
