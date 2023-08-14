## Streams
- Streams nothing but, we can process the data piece by piece instead of reading or writing the whole data at once.
- Streams are instances of Eventemitter classes.
## Uses
- It makes the data processing more effecient in terms of memory.Because  there is no need to keep all the data in memory.
## Types
- In NodeJS we have four types of streams
- Readable stream
- writable stream
- duplex stream
- Transform stream
## ReadableStream
- These are the one from where we can read or consume data chunk by chunk.
  ## Example
- Request Stream
- Read File Stream
- data and end are important stream events : the data event will raise when a new chunk of data receieved and if the chucnks are completed the end event will trigger.
- read and pipe are imprtent stream methods :read function is called when we want to read the chunk from the readable stream and the pipe method is used to pass the data from one stream to another simultaneously.
  
  ## Writable Streams
  - It is the one which we can write the data chunk by chunk. It is opposite to readable stream.
  ## Example
- Response Stream
- Write File Stream
- drain and finish are important stream events 
- write and end are imprtent stream methods

  ## Duplex Stream
  - This is the stream which is readable and writable at the same time
  ## Example
    - websockets
  ## TransformStreams
  - These are duplex streams which can also modify or transform data as t is read or written.

