//. app.js
var express = require( 'express' ),
    app = express();

//. EJS の設定
var ejs = require( 'ejs' ); 
app.set( 'views', __dirname + '/views' );  //. ejs ファイルが views フォルダにあることを指定
app.set( 'view engine', 'ejs' );

//. 多言語対応
var i18n = require( 'i18n' );              //. 多言語対応
i18n.configure({
  locales: ['ja', 'en'],                   //. ja（日本語）と en（英語）に対応している
  directory: __dirname + '/i18n'           //. 言語ファイルが i18n フォルダにあることを指定
});
app.use( i18n.init );


//. http://localhost:8080/ にアクセスした時の処理
app.get( '/', function( req, res ){
  res.render( 'index', {} );               //. index.ejs を使って表示する
});

//. http://localhost:8080/hello にアクセスした時の処理
app.get( '/hello', function( req, res ){
  res.render( 'hello', {} );               //. hello.ejs を使って表示する
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
