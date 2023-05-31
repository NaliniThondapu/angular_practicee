import { Component } from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyPractice';

  products: any = [
    {
      id: "1",
      name: "ApplePhone"
    },
    {
      id: "2",
      name: "MacBookPro"
    }
  ]

  sellers: string[] = ["AppleStore", "Amazon"]

  name: string = "Angular" + VERSION.major

  jokes: string[] = [
    "What did the cheese say when it looked in the mirror?",
    "What kind of cheese do you use to disguise a small horse?",
    "A kid threw a lump of cheddar at me"
      ]

 //Puns Challenge
   puns: string[] = [
      "Hello-me (Halloumi)",
      "Mask-a-pony (Mascarpone)",
      "I thought ‘That’s not very mature’"
   ]
}
