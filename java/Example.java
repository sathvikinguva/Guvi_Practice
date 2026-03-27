package com.mypackage;

public class Example {
    
    public void showMessage() {
        System.out.println("This is an example of a Java package.");
    }

    public static void main(String[] args) {
        Example obj = new Example();
        obj.showMessage();
    }
}