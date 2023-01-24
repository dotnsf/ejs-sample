# EJS Sample


## Overview

Node.js + Express + EJS + i18n を使ったサンプルアプリケーション


## Source

**EJS を使う部分**

```
  :

//. EJS の設定
var ejs = require( 'ejs' ); 
app.set( 'views', __dirname + '/views' );  //. ejs ファイルが views フォルダにあることを指定
app.set( 'view engine', 'ejs' );

  :
```

**多言語対応を使う部分**

```
  :

//. 多言語対応
var i18n = require( 'i18n' );              //. 多言語対応
i18n.configure({
  locales: ['ja', 'en'],                   //. ja（日本語）と en（英語）に対応している
  directory: __dirname + '/i18n'           //. 言語ファイルが i18n フォルダにあることを指定
});
app.use( i18n.init );

  :
```


## Licensing

This code is licensed under MIT.


## Copyright

2023  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
