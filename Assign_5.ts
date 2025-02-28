// 1. Partial - Define a function updateUser that updates user information
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(user: Partial<User>): void {
    console.log("Updated User:", user);
  }
  
  updateUser({ name: "John Doe" }); 
  updateUser({ email: "john@example.com", id: 1 }); 
  
  // 2. Required - Convert UserProfile to make all properties mandatory
  interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  
  type RequiredUserProfile = Required<UserProfile>;
  
  const userProfile: RequiredUserProfile = {
    id: 101,
    name: "Alice",
    age: 25,
  }; 
  
  // 3. Readonly - Define a constant config that cannot be modified
  const config: Readonly<{ apiKey: string; timeout: number }> = {
    apiKey: "12345",
    timeout: 5000,
  };
  
  // config.apiKey = "67890"; //  Error: Cannot assign to 'apiKey' because it is a read-only property
  
  // 4. Pick - Create ProductSummary type with selected properties
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  type ProductSummary = Pick<Product, "id" | "name" | "price">;
  
  const product: ProductSummary = {
    id: 1,
    name: "Laptop",
    price: 1500,
  };
  
  // 5. Omit - Create UserWithoutEmail excluding 'email'
  type UserWithoutEmail = Omit<User, "email">;
  
  const userWithoutEmail: UserWithoutEmail = {
    id: 2,
    name: "Bob",
  };
  
  // 6. Record - Create a UserRoles type mapping user IDs to role names
  type UserRoles = Record<number, string>;
  
  const userRoles: UserRoles = {
    1: "Admin",
    2: "Editor",
    3: "Viewer",
  };
  
  console.log("Updated User:", updateUser);
  console.log("Required UserProfile:", userProfile);
  console.log("Readonly Config:", config);
  console.log("Product Summary:", product);
  console.log("User Without Email:", userWithoutEmail);
  console.log("User Roles:", userRoles);
  