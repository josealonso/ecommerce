package com.example.ecommerce.dao;

import com.example.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")   // Origin is protocol, hostname and port
public interface ProductRepository extends JpaRepository<Product, Long> {

}
