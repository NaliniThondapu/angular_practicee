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
## Example

```
const http = require('http')
const fs = require('fs')
const server = http.createServer()
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})

//because of this approach the NODE will read the entire fiel and keep that in memory.It causes the performence issue.
// server.on('request', (req, res) => {
//   //we are reading the large file data and send the same in the response
//   fs.readFile('./files/largefile.txt', (error, data) => {
//     if (error) {
//       res.end("Some thing went wrong")
//       return;
//     }
//     res.end(data);
//   })

// })


//to avoid the above problem we need to use streams
server.on('request', (req, res) => {
  //read the data using readable streams
  let rs = fs.createReadStream('./files/largefile.txt');
  rs.on('data', (chunk) => {
    //if we use end method it will not read any of other chunk so we need to use write method
    res.write(chunk)
    //once all the chinks got finished we need end the readstream
    res.end();
  })
  //in case of any error event this will call and give us the error information
  rs.on('error', (error) => {
    res.end(error.message);
  })

})
```
- In the above example , we are calling end method immediate after wrting the first chunk.
- Because of this all the data from file was not sent in the response.
- So,to avoid that we can add "end" event to trigger that end method.
- Once all the chunks of data done, stream will raise end event and in that event we can call end method on the response.

```
server.on('request', (req, res) => {
  let rs = fs.createReadStream('./files/largefile.txt');

  rs.on('data', (chunk) => {
    res.write(chunk)
  })
  //instead of calling end method we can raise an event
  res.on('end',()=>{
    res.end();
  })

  rs.on('error', (error) => {
    res.end(error.message);
  })

})

```

## Pipe Method
- The above example still have some issues.
- We are reading the data in chinks and writing the data to the response stream as chink wise only.
- we are not writing the data to the response stream at once.
- The problem here is that , our readable stream is at speed 4Mbps and response writable stream is 3Mbps.
- So, our readable stream is much faster but our writable stream is bit slow and this will overleam the writable stream which can not hadles all these incoming  data so fast. This problem is called backpressure. 
- Back pressure happens when the response can not send the data ASAP as it receiving from the file.
- To fix the above problem we can use pipe method.
- Need to check the example for few more points

## Uses of pipe method
- fixes the problem of backpressure

```
//Using pipe method
server.on('request', (req, res) => {
    let rs = fs.createReadStream('./files/largefile.txt');

    //for pipe we need pass the writable stream
    //Here the response is the writable stream
    //This pipe method allows us pipe the output of a readable stream write into the input of a writable stream
    //This method is avalible on only readable stream we can not apply on the writable stream.
    rs.pipe(res)
})
```
