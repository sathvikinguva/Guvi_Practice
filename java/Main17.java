import java.util.*;

class Main17 {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack elements: " + stack);
        stack.pop();
        System.out.println("Affter Pop: " + stack);
    }
}