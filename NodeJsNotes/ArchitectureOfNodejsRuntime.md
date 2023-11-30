## Architecture
- Nodejs uses event driven architecture and is built around callback.
- Node Dependencies are basically some libraries on which nodejs depends on in order to work properly.
- This runtime has several dependencies to work properly.
- The most imp dependencies are v8 engine and LIBUV.
- The v8 engine in Nodejs application is responsible to execute the javascript code which we write to create the backend application.
- The v8 engine converts the javascript code into machine undersatble code.v8 engine alone is not suffecient to develop server side applications.
- LIBUV is an opensource library with strong focus on deleaing with asynchronous input and output.It is NODEJS runtime.
- It provides underlying access of file system, operating system  and networking etc.
- LIBUV implements two extream features of Nodejs those "EVENTLOOP" and "THREADPOOL".
- EVENTLOOP, it is responsible for executing easy tasks like executing callback functions and NEtwork IOC.
- THREADPOOL , it is used to process heavy tasks like file access, compression etc.
- In NODEJS , by default we can get 4 different thread in thread pool we can configured upto 1024 threads.
- Otherthan V8 and LIBUV NODEJS  has other dependencies as well like HTTP PARSER, OPENSSL etc.

![Screenshot 2023-11-30 162117](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/89b22db4-be86-4d03-886b-7f3c72654b19)

## Process
- A process is just a program which is currently executing.
- Every process is bydefault a single main thread.
- A thread is responsible to execute the a program code on the process.

  ![Screenshot 2023-11-30 162859](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/dbdc050b-5750-4177-a597-6291e7c49b9c)

  ![Screenshot 2023-11-30 163223](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/37bd73ca-1470-495d-bb33-f1338e15059c)

## EventLoop in NODEJS
- It is heart of NODEJS architecture.
- It is where all the callback functions wait for their execution
- If the callback function has any heavy tasks like filereads or writes those ar first executed by the thread of Threadpool.
- Once the fileread done , the callback function related to that task is load into eventloop.

  ![Screenshot 2023-11-30 184425](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/c3eb5631-69e2-4c04-ba6a-3b142df5f370)

  - An event loop has different phases at each phase of an event loop it has a seperate callback queue
  - The callbacl queue is nothing but it can store callback functions attached to an event.
  - There are mainly have four phases of event loop.
  - Expired Timers,IO tasks &polling, setImmediate callback,Closed callbacks.
  - The callback functions related to timers are the first to be executed in the event loop.
  - When the callback functions of current phase are empty means there are no callback functions are left to execute eventloop will move the next phase.
  - Once it moves to the next pahse it needs to finish all the phases and then second phase other call backs will execute.
  - The second phase is the most important phase , because most of the NODEJS code is related to networking and file access related operations only.
  - Almost 90% of the code will execute once this phase got complete.

  ![Screenshot 2023-11-30 185643](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/c1f9ff38-b5d9-4587-b0b6-6095bbd80e6c)

- Beside the above queues we have two more queues in the eventloop.
- MICROSTACK queue and NEXTTICK QUEUE.

![Screenshot 2023-11-30 191536](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/cbb80d73-653d-48dd-a5cd-293fbb38face)

- MICROSTACK queues store call backfunctions of resolved promises and NEXTTICK queue stores callback functions of process.nexttick function.
- These two queues are not related to any phase of the eventloop. These two are independent.
- If these queues have any of the call back functions to be executed those will execute immediately after the current phase of event loop got finished.
- These do not wait till the entire phase event loop got executed.
- Each cycle of the event loop is called as TICK.

  ## What Not to do to avoid blocking of Main thread
  - Do not use synchronous version of functions(readfile,writefile) in fs, crypto, Zlib modules inside the callback functions.
  - Do not perform very complex functions inside the callback function which can block the main thread.
  - Becareful with JSON which has a large number of JSON objects.
  - Do not use too complex regular expressions inside the callback functions.
  

