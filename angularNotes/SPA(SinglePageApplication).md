## Routing And Navigation
## BootStrap
  - Bootstrap is the most popular CSS Framework for developing responsive and websites.
  - To inject this in our angular we need to include below few in the head of section of **index.html**
  - please check **SPA project for understanding**
## index.html

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>SPA</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <!-- Bootstarp related urls -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

## routerLink
 - This is to link the path , to which component we can communicate when click on this.
 - **router-outlet** is used to check the path.
 
