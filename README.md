# 🚀 Node.js Learning – Day 01  
## Topic: What is Node.js & Why It Exists

Today I’m starting my **Node.js learning journey**.  
This series will cover Node.js from **basics to production-level concepts**.

---

## 🔹 What is Node.js?

Node.js is a **runtime environment** that allows us to run **JavaScript outside the browser**.

It is built on:
- **Google Chrome’s V8 JavaScript Engine**
- Written in **C++ and JavaScript**

With Node.js, JavaScript can be used to build:
- Backend servers
- REST APIs
- Real-time applications
- Command-line tools

---

## 🔹 Why Node.js Was Created?

Before Node.js:
- JavaScript was limited to browsers
- Backend development relied on languages like Java, PHP, or Python

**Node.js solved this by enabling JavaScript on the server side.**

Problems it addressed:
- Blocking I/O operations
- Poor scalability for real-time apps
- Slow data handling

---

## 🔹 Key Features of Node.js

- **Single-threaded**
- **Non-blocking I/O**
- **Event-driven architecture**
- **High performance**
- **Powered by V8 Engine**

These features make Node.js highly scalable and efficient.

---

## 🔹 Where is Node.js Used?

Popular companies using Node.js:
- Netflix
- PayPal
- Uber
- LinkedIn
- Walmart

Node.js is commonly used for:
- Chat applications
- Streaming services
- API development
- Microservices architecture

---

## 🔹 Important Takeaway (Day 01)

> Node.js is **not a framework**.  
> It is a **runtime environment** that allows JavaScript to run on the server.

---


### ✅ Day 01 Completed




\# 🚀 Node.js Learning – Day 02

\## Topic: How Node.js Works Internally (Event Loop & Architecture)

\---

\## 📌 Overview

Day 02 focuses on understanding \*\*how Node.js works internally\*\*.

This knowledge is critical for writing \*\*high-performance, scalable, and production-ready\*\* Node.js applications.

\---

\## 🔹 JavaScript Execution in Node.js

Node.js uses \*\*Google Chrome’s V8 JavaScript Engine\*\* to execute JavaScript code.

\### V8 Responsibilities:

\- Parses JavaScript

\- Compiles JavaScript into machine code

\- Executes synchronous code

\- Manages memory (heap & garbage collection)

\> V8 executes JavaScript only. It does not handle I/O operations.

\---

\## 🔹 Single-Threaded Nature of Node.js

Node.js runs JavaScript on a \*\*single main thread\*\*.

\- All synchronous code runs in the \*\*Call Stack\*\*

\- Only one function executes at a time

\- Blocking the call stack blocks the entire application

\---

\## ❌ Blocking Operations

Blocking operations pause execution until the task completes.

\### Problems:

\- Blocks the call stack

\- Causes poor performance

\- Not suitable for production environments

\---

\## 🟢 Non-Blocking Operations

Non-blocking operations allow Node.js to continue executing other code while tasks run in the background.

\### Example:

\`\`\`js

const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {

console.log(data);

});

console.log("This will run first");

### Advantages:

*   High performance
    
*   Better scalability
    
*   Ideal for Node.js applications
    

## 🔹 What is the Event Loop?

The **Event Loop** is the mechanism that enables Node.js to perform **non-blocking asynchronous operations**.

It allows Node.js to:

*   Execute asynchronous code
    
*   Handle multiple operations efficiently
    
*   Avoid blocking the main thread
    

The Event Loop continuously monitors:

*   Call Stack
    
*   Callback Queue
    
*   Microtask Queue
    

## 🔹 Core Components of Node.js Architecture

### 1️⃣ Call Stack

*   Executes synchronous JavaScript code
    
*   Follows **LIFO (Last In, First Out)** order
    

### 2️⃣ Node APIs

Examples:

*   fs
    
*   http
    
*   timers
    

Responsibilities:

*   Handle asynchronous operations
    
*   Communicate with the operating system
    

### 3️⃣ Thread Pool (libuv)

*   Executes heavy or blocking tasks
    
*   Default size: **4 threads**
    

Used for:

*   File system operations
    
*   Cryptography
    
*   DNS lookup
    
*   Compression
    

### 4️⃣ Callback Queue

*   Stores completed asynchronous callbacks
    
*   Uses **FIFO (First In, First Out)** order
    

### 5️⃣ Microtask Queue

*   Higher priority than the callback queue
    

Includes:

*   process.nextTick()
    
*   Promise callbacks (.then())
    

## 🔹 Event Loop Workflow

1.  Execute all synchronous code in the call stack
    
2.  Asynchronous tasks are delegated to Node APIs
    
3.  Heavy tasks are processed in the thread pool
    
4.  Completed callbacks are placed into queues
    
5.  Event Loop pushes callbacks to the call stack
    
6.  Callbacks are executed
    

## 🔹 Event Loop Phases

### 🕒 Timers Phase

*   Executes callbacks from setTimeout() and setInterval()
    

### 📥 I/O Callbacks Phase

*   Handles network and file system callbacks
    

### ⚙️ Idle / Prepare Phase

*   Internal use by Node.js
    

### 🔁 Poll Phase

*   Retrieves new I/O events
    
*   Executes I/O callbacks
    

### ✅ Check Phase

*   Executes callbacks registered using setImmediate()
    

### 🔚 Close Callbacks Phase

*   Executes cleanup callbacks
    

## 🔹 Microtasks vs Macrotasks

### Microtasks

*   process.nextTick()
    
*   Promises (.then())
    

### Macrotasks

*   setTimeout
    
*   setInterval
    
*   setImmediate
    
*   I/O callbacks
    

⚠️ Microtasks always execute **before** macrotasks.

## 🔹 Common Mistakes to Avoid

*   Using blocking methods like readFileSync
    
*   Writing CPU-intensive loops
    
*   Not handling asynchronous errors
    
*   Overusing process.nextTick()
    

## 🔹 Real-World Use Cases

Node.js is ideal for:

*   Chat applications
    
*   Real-time dashboards
    
*   Streaming services
    
*   API servers
    

These systems rely heavily on **non-blocking I/O**.

## 🔹 Key Takeaways (Day 02)

*   Node.js is single-threaded but asynchronous
    
*   The Event Loop is the backbone of Node.js
    
*   Non-blocking code ensures scalability
    
*   Understanding internals improves performance
    

### ✅ Day 02 Completed


Day 03 – Modules & First Node.js Program

* * *

## 🔹 What is a Module in Node.js?

In Node.js, every file is treated as a separate module. A module is simply a reusable block of code that has its own scope.

Modules help in:

*   Structuring applications
    
*   Avoiding repetition
    
*   Improving maintainability
    
*   Preventing global namespace pollution
    

* * *

## 🔹 Why Modules Are Important

Without modules:

*   Code becomes messy and hard to debug
    
*   Everything lives in one file
    
*   Scaling becomes difficult
    

With modules:

*   Code becomes organized
    
*   Different developers can work independently
    
*   Application becomes scalable
    

* * *

## 🔹 Types of Modules in Node.js

There are 3 types:

1.  **Built-in Modules**  
    Provided by Node.js itself  
    Examples:
    
    *   fs (file system)
        
    *   http
        
    *   path
        
    *   os
        
2.  **Custom Modules**  
    Created by developers for their code  
    Example: function files, utilities
    
3.  **Third-Party Modules**  
    Installed using npm  
    Examples: express, mongoose, lodash
    

* * *

## 🔹 CommonJS Module System (Default in Node.js)

Node.js uses CommonJS module syntax.

Exporting code:

`module.exports = value`

Importing code:

`const value = require('./file')`

How it works internally:

*   Node wraps each file in a function
    
*   Gives module scope
    
*   Returns exports object
    

* * *

## 🔹 How Node Loads Modules Internally

When you use require():

1.  Node checks if it’s a built-in module
    
2.  If not, checks local files
    
3.  Then looks in node\_modules
    
4.  Wraps the module code
    
5.  Executes it
    
6.  Stores result in cache
    

Because of caching:

*   Module runs once
    
*   Future require() returns cached version
    

* * *

## 🔹 Small First Node.js Program

Create a file:

`console.log("Hello Node.js");`

Run in terminal:

`node filename.js`

This shows that JavaScript runs outside the browser.

* * *

## Key Takeaways (Day 03)

*   Every file in Node.js is a module
    
*   Modules make code organized and scalable
    
*   CommonJS is the default syntax
    
*   require() loads modules
    
*   Node caches modules for better performance