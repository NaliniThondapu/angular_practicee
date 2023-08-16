## NodeJS Architecture
- NodeJS runtime has two main dependencies
- one is v8 engine and LIBUV. V8 engine will convert the js code into machine code to exeucte.
- LIBUV is an open source library with strong foucs on asynchronous input and output.It implements to extreamly important features of NODEJS. Theose are "Event loop" and "threadpool"
- Eventloop is responsible to execute the easy taks where as thread pool is responsible to execute the heavy tasks like file loading ,compression , access ectc.
## Process
- A process is just a program which is currently executing.
## Thread
 - A thread in a process is responsible to exeucte the program code in the process.Bydefault every process has one main thread.
## Event Loop
- It is heart of NODEJS architecture.
- It is where all the callback functions wait for their execution.
- When the main thread is empty then event loop pushes the callback jobs from the eventloop queue for the execution.
- It offloads a callback function which is doing some heavy tasks like file reading to thread pool.
- NODEJS uses event driven architecture and is built around callback.
- It starts immediately as soon as  when NODEJS gets started.
- When an event happens event loops will stores the callback function attached to that event and wait for the completion of execution of top level code.
- when the top level code is executed , the even loop start pushing callback functions to the main thread if it is empty.
- It has multiple phases. In each phase it has its own seperate callback queues.
- It maily has 4 phases.
- Expiredtimers , IO tasks and Polling, set Immediate callback, Closed callback
- 
