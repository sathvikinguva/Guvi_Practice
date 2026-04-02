package com.codespace.EasyBasket.repository;

import com.codespace.EasyBasket.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
