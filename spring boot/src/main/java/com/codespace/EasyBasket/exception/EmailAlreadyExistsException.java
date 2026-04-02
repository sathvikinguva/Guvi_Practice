package com.codespace.EasyBasket.exception;

public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException(String email) {
        super("Email is already in use: " + email);
    }
}
