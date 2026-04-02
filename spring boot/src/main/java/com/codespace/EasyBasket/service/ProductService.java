package com.codespace.EasyBasket.service;

import com.codespace.EasyBasket.dtos.RegisterProductRequest;
import com.codespace.EasyBasket.exception.ResourceNotFoundException;
import com.codespace.EasyBasket.model.Product;
import com.codespace.EasyBasket.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product save(RegisterProductRequest request) {
        Product product = new Product();
        product.setName(request.getProductName());
        product.setPrice(request.getPrice());
        return productRepository.save(product);
    }

    public Product update(Long id, RegisterProductRequest request) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
        product.setName(request.getProductName());
        product.setPrice(request.getPrice());
        return productRepository.save(product);
    }

    public void delete(Long id) {
        productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
        productRepository.deleteById(id);
    }
}
