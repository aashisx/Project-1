// Base class
class Vehicle {
    void start() {
        System.out.println("Vehicle is starting...");
    }
}

// Subclass
class Car extends Vehicle {
    void playMusic() {
        System.out.println("Music is playing in the car...");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // 1. Upcasting: Car object as Vehicle
        Vehicle v = new Car();  // Upcasting
        v.start();              // Works fine

        // 2. Downcasting back to Car
        Car c = (Car) v;        // Downcasting
        c.playMusic();          // Now we can call Car methods

        // 3. Wrong downcasting (real object is only Vehicle)
        Vehicle v2 = new Vehicle();  // Just a Vehicle, not a Car

        try {
            Car c2 = (Car) v2;       // Wrong! Will cause error
            c2.playMusic();
        } catch (ClassCastException e) {
            System.out.println("Error: Cannot convert Vehicle to Car.");
        }
    }
}
