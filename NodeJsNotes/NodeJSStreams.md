## Streams
- We have readfile and write file methods in the file system, how it will works means first will read the entire file and store in the buffer once the reading got done then only
- will available for using.
- The disadvantage is we have to store the entire file data in system memory.
- If the file size is too large we have to wait till entire file read and store it into buffer that is system memory.
![Screenshot 2023-11-28 184052](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/ac51e4ec-e593-4bbc-8e44-0dbdc72a9b88)

- With streams , we can process data piece by piece instead of reading or writing the whole data once.
- In ctreams first we can read chunk of data and then store into buffer and then use the data and freed that chunk memory like youtube and netflix stream the video chunk by chunk.

  ![Screenshot 2023-11-28 190053](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/d9f6ff9d-fc07-4542-bcff-2ea1890383e4)

## Advantages of Streams
- Streams makes data processing more effecient in terms of memory.Because there is no need to keep all data in memory.
- In terms of performence and time also , streming has advantage because we can start processing the data as soon as the first chunk data arrives.
- All streams are instances of EventEmitter class.

  ![Screenshot 2023-11-28 190754](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/c275427e-fe73-4302-aa77-4d41509c1fce)

  ![Screenshot 2023-11-28 191029](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/81341d60-8d7b-4891-8135-6fd4096122b5)

![Screenshot 2023-11-28 191143](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/85e5da6b-57d7-411f-a6bf-f2ce771fc9ee)

![Screenshot 2023-11-28 191237](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/16342cb5-eb6b-4fe0-8ea4-d5e1dd8e3138)

## Example

## app.js

```
/* --- STREAMS --- 
READ LARGE FILES*/
const http = require("http")
const fs = require("fs")
const server = http.createServer();

// //STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})

// SOLUTION 1 : WITHOUT USING STREAMS
// In this approach our application may crash because NODEJS resources are busy with reading the data only
server.on("request", (req, res) => {
    fs.readFile("./files/largefile.txt", (error, data) => {
        if (error) {
            res.end("Something went wrong")
            return;
        }
        res.end(data)
    })

})

//SOLUITION2: STREAMS
server.on("request", (req, res) => {
    //read the file using read stream
    let rs = fs.createReadStream("./files/largefile.txt")

    rs.on("data", (chunk) => {
        //here we do not use res.end() because we need to send data res as chunk wise
        //the end method need to use if the entire data want to send at a time
        res.write(chunk);

    })
    rs.on("end", () => {
        res.end();
    })
    rs.on("error", (error) => {
        res.end(error.message)
    })

})
```
## Back Pressure
- It happens when the response stream can not send data as early as it is receieveing it from the file.
- For example our read stream reads data at 4mbps speed and write stream writes the data at 3Mbps speed. In this case our writable stream did not send as early as i reads.
- this is called back pressure.To solve the above problem using pipe method.


## Use of PIPE() Method
- This pipe method allows us to pipe the output of a readable stream write into the input of a readable stream.
- Pipe method will always available for readable streams not for writable streams.
- This pipe method fixes the back pressure issue.

## Example

```
const http = require("http")
const fs = require("fs")
const server = http.createServer();

// //STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})

//SOLUTION3: USING PIPE METHOD
server.on("request",(req,res)=>{
    let rs = fs.createReadStream("./files/largefile.txt");
    //response is an example of writable stream
    rs.pipe(res)
})
```

## What is NPM(Node Package Manager)
- It is command line interface as well as Package repository from where we can install or manage packages.
- It is installed automatically when we install NODEJS.
- npmjs.com is a package repository
- npm command line interface is a software that is used to install third party packages.
- to create the package.json need to use the below command

```
npm init
```

## Types of Packages and Installs
- Packages can be classified into two types one is "regular" depedency and other one developer dependencies
- 
