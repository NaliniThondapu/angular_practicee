import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObjectUnsubscribedError, Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  private mySubScription: Subscription = new Subscription

  users: any = [{ id: 1, name: 'nalini' }, { id: 2, name: 'shiva' }]

  ngOnInit(): void {


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

    // myObservable.subscribe(result => {
    //   console.log(result)
    // })

    myObservable.pipe(filter(data =>
      data === 'Observable working1'
    )).subscribe(result => {
      console.log(result) //only will get Observable working1 because of filter
    })


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


    //consuming Promise method
    this.addUser({ id: 3, name: 'rani' }).then(this.displayUsers).catch(err=>console.log(err))


  }

  ngOnDestroy(): void {
    this.mySubScription.unsubscribe()

  }

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

  async init(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json();
    console.log(data)
  }






}
