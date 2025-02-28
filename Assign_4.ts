// Exercise 1: Basic Abstract Class
abstract class Shape {
    constructor(private color: string) {}
    abstract calculateArea(): number;
    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Exercise 2: Implementing an Interface
interface Vehicle {
    speed: number;
    move(): void;
}

class Car implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Car is moving at ${this.speed} km/h`);
    }
}

class Bicycle implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Bicycle is moving at ${this.speed} km/h`);
    }
}

// Exercise 3: Combining Abstract Class and Interface
interface Flyable {
    fly(): void;
}

abstract class Bird {
    constructor(protected name: string) {}
    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

class Eagle extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is soaring high!`);
    }
}

class Sparrow extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is fluttering around!`);
    }
}

// Exercise 4: Interface Inheritance
interface Person {
    name: string;
    speak(): void;
}

interface Employee extends Person {
    salary: number;
    work(): void;
}

class Developer implements Employee {
    constructor(public name: string, public salary: number) {}
    speak(): void {
        console.log(`${this.name} says hello!`);
    }
    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

// Advanced Exercise 1: Abstract Class for Banking System
abstract class BankAccount {
    protected balance: number;
    constructor(protected accountNumber: string, initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    abstract withdraw(amount: number): boolean;
    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit = 1000;
    withdraw(amount: number): boolean {
        if (amount <= this.balance && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit = 500;
    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

// Advanced Exercise 2: Interface for Payment System
interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}

class CreditCard implements PaymentMethod {
    constructor(private balance: number) {}
    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} with Credit Card.`);
        } else {
            console.log("Insufficient funds.");
        }
    }
    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Credit Card.`);
    }
}

// Advanced Exercise 3: Combining Abstract Class and Interface
abstract class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount}`);
    }
    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount}`);
    }
    abstract validateTransaction(transactionId: string): boolean;
}

interface SecurePayment {
    authenticateUser(userId: string): boolean;
}

class PayPal extends PaymentGateway implements SecurePayment {
    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user ${userId}`);
        return true;
    }
    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction ${transactionId}`);
        return true;
    }
}

// Advanced Exercise 4: Multiple Interface Implementation
interface Loan {
    applyForLoan(amount: number): void;
}

interface Insurance {
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance {
    private loanAmount = 0;
    private insurancePolicy = "";
    applyForLoan(amount: number): void {
        this.loanAmount = amount;
        console.log(`Loan of ${amount} applied.`);
    }
    applyForInsurance(policy: string): void {
        this.insurancePolicy = policy;
        console.log(`Insurance policy ${policy} applied.`);
    }
}
