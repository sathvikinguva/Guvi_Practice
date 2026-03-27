import java.util.LinkedHashSet;

class Main16 {
    public static void main(String[] args) {
        LinkedHashSet<String> names = new LinkedHashSet<>();
        names.add("Sathvik");
        names.add("Yuva");
        names.add("Sathvik");
        names.add("Mohan");
        System.out.println(names);
        for(String name : names){
            System.out.println(name);
        }
    }
}