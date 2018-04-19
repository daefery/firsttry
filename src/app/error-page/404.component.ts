import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>404 (NOT FOUND)</title>
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato">
</head>
<body>
  <div class="page-wrap">
    <h1>404</h1>
    <h2>Halaman Tidak Ditemukan</h2>
    <p><a href="/">home</a></p>
  </div>
</body>
</html>

  `,
  styles: [`
body {
  background: #607D8B;
  font-family: 'Lato', serif;
  color: #fff;
  margin: 0;
  padding: 0;
}

.page-wrap {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

p, a {
  font-size: 1em;
}

h2, a {
    text-transform: uppercase;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  width: 88px;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  border: 2px solid #fff;
  transition: all .5s ease;
}

a:hover {
  background: #90A4AE;
  border: 2px solid #90A4AE;
  width: 132px;
}

/* MEDIA QUERIES
================================================== */

/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
@media (min-width:320px) {
h1 {font-size: 2em; }
h2 {font-size: 1.5em; }
}

/* smartphones, Android phones, landscape iPhone */
@media (min-width:480px) {
h1 {font-size: 3em; }
h2 {font-size: 1.75em; }
}

/* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
@media (min-width:600px) {
h1 {font-size: 4em; }
h2 {font-size: 2em; }
}

/* tablet, landscape iPad, lo-res laptops ands desktops */
@media (min-width:801px) {
h1 {font-size: 5em; }
h2 {font-size: 3em; }
}


/* big landscape tablets, laptops, and desktops */
@media (min-width:1025px) {
h1 {font-size: 6em; }
h2 {font-size: 4em; }
}


/* hi-res laptops and desktops */
@media (min-width:1281px) {
h1 {font-size: 7em; }
h2 {font-size: 5em; }
}
  `]
})
export class NotFoundComponent {
}
