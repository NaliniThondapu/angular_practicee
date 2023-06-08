## Callback function
- If we are able to pass a function as an argument or if a function is returning any other function as an output 
- then that is called as higer order function or Callbackfuntion.

## Promises and Observables(Very Imp for Interview)
- Both are deal with Asynchronous operations.
-**Promise has two callbackfunctions resolve (Mandatory) and reject(Not Mandatory).**
- **Observable has only one paramer that is** **subscriber**
- Promises are eager in nature that means as and when we declare a promise it will not expect any one access this or call explicitly. It will execute by its own.
- Observables must be subscibed(Must be call explicitly to consume this) that means they are lazy in nature.4
- Promise can return/emit only single value where as Observable will return/ emit one or more values ver a period of time that is streaming of data.
- Promises do not have operators where as in observable operators can be used such as map, filter, retry,reduce etc.
- Promises can not be cancelled where as observables can cencelled/unsubscribed.

## Example

```
//Promise
    const myPromise = new Promise(resolve => {
      console.log("Promise call...")
      setTimeout(() => {
        resolve("Promise working")
        resolve("Promise working1")
        resolve("Promise working2")
      }, 1000)
    })

    myPromise.then(res => {
      console.log(res)
    })

    //Observable
    const myObservable = new Observable(sub => {
      console.log("Observable call...")
      setTimeout(() => {
        sub.next("Observable working")
        sub.next("Observable working1")
        sub.next("Observable working2")
      }, 1000)
    })

    myObservable.subscribe(result => {
      console.log(result)
    })

  }
```

## Output
```
Promise call...
Observable call...
Promise working // only one time because promise can emit only single value
Observable working // Observable can be a stream of data
Observable working1
Observable working2
```

## Example2
- apply filters

```
//Observable
    const myObservable = new Observable(sub => {
      console.log("Observable call...")
      setTimeout(() => {
        sub.next("Observable working")
        sub.next("Observable working1")
        sub.next("Observable working2")
      }, 1000)
    })

    // myObservable.subscribe(result => {
    //   console.log(result)
    // })

    myObservable.pipe(filter(data =>
      data === 'Observable working1'
    )).subscribe(result => {
      console.log(result) //only will get Observable working1 because of filter
    })
```

## Example3
- Unsubscribe the observable
- we must unsubscribe in ngOnDestroy method

```
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObjectUnsubscribedError, Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  private mySubScription: Subscription = new Subscription

  ngOnInit(): void {
    //unsubscribing
    const observable = new Observable(sub => {
      console.log("Observable call....")
      let counter = 0
      setInterval(() => {
        counter = counter + 1
        sub.next(counter)
      }, 1000)
    })
    this.mySubScription = observable.subscribe(result => console.log(result))


  }

  ngOnDestroy(): void {
    this.mySubScription.unsubscribe()

  }
}
```

## Promises
- we can achieve this in the two ways
- One is using resolve and reject and the second option is async and await

## Example Using call back
  
  ```
  addUser(user: any, dispaly: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.users.push(user)
        dispaly()
        const error = false
        if (!error) {
          resolve("Success");
        } else {
          reject("Something went wrong")
        }
      }, 2000)
    })
  }

  displayUsers() {
    console.log(this.users);
  }
  
  //callback
    this.addUser({ id: 3, name: 'rani' },this.displayUsers)
  ```
  
  ## Example using Promise
  
  ```
   addUser(user: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.users.push(user)
        const error = false
        if (!error) {
          resolve("Success");
        } else {
          reject("Something went wrong")
        }
      }, 2000)
    })
  }

  displayUsers() {
    console.log(this.users);
  }


 //consuming Promise method
    this.addUser({ id: 3, name: 'rani' }).then(this.displayUsers).catch(err=>console.log(err))
```

## Example using async and await

```
 async init(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json();
    console.log(data)
  }
  
  ```
  
  
    
 
    
    
