package com.codespace.EasyBasket.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterProductRequest {

    @NotBlank(message = "Product name must not be blank")
    private String productName;

    @NotNull(message = "Price must not be null")
    @Min(value = 0, message = "Price must be zero or greater")
    private Double price;
}
