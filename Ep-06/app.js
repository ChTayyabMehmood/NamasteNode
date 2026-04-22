//Episode-06 | libuv & async IO
/*

Node.js has an event-driven architecture capable of asynchronous I/O. 

Synchronous (Sync) 

A synchronous process is one in which operations are executed sequentially, and each operation must complete before the next one begins.

Example:

In a bank queue, each customer is served one at a time. The next customer cannot be served until the current transaction is fully completed.

Asynchronous (Async) 

An asynchronous process is one in which operations can be initiated without waiting for previous ones to complete, allowing multiple tasks to progress independently.


When ordering food at a restaurant, you place your order and then engage in other activities (such as conversation) while the food is being prepared. You are notified when it is ready.

 
for sync it is very simple for js, even long file i can executed very fast it load into execution context, a same concept of js


for async : in js Engine there isnot timer thing mean we can make a program like it will run after 5 second no concept in it ,  it can be done through some super power which node js added through get thing through the OS operating system or load a file 

the super hero is libuv 
 

 */