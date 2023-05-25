# View Encapsulation
-  This is used to stopping overflowing of CSS from one component to another component.
-  By default all styles for our components are encapsulated, that means it does not leak out the styles to any of other component of our application.
-  we can set the encapsulation strategy using the encapsulation property like below.
-  ViewEncapsulation has 3 values Emulated, None and ShadowDom
-  Emulated is the default behaviour , does not overflow the styles from one component to another component.
-  If One and two components encapsulation is None and third component encapsulation is Emulated, third component style as usval . For one and two , two component style will apply for both.
For all Nones , the latest component style will apply for the others.

## app.component.html
```
<app-one></app-one>
<app-four></app-four>
<app-two></app-two>
<app-three></app-three>
```

```
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
```


