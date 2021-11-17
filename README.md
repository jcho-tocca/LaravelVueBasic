# Laravel + Vue.jsでSPA(Single Page Application)を作る
## 概要
LaravelとVue.js構成でユーザー情報のCRUDを作成する

## 必須事項
* PHP >= 7.2.5 
* Composer 2.x 
* Node.js >=14.x 

## 構成
* Laravel 8.35.1 
* Vue 2.5.17 
* Vuex 3.6.2 
* vue-router 3.5.1 
* Vuetify 2.4.11 
* laravel/sanctum : 認証 

※Vue.js バージョン2で構築する - バージョン3は現時点では対応する関連ライブラリなど少ないため。

### 構築手順
#### 1. Laravelの環境構築
※Homested環境の場合は基本的に必要事項が備えているのでその環境で構築可能

#### 2. Compoerで laravel/ui インストール
```
composer require laravel/ui
```
#### 3. Vue スカフォールド
基本的なスカフォールドを生成
```
php artisan ui vue
```
#### 4. 依存パッケージインストール
```
npm install
```
#### 5. Vue Router インストール
```
npm install vue-router
```
#### 6. Veux インストール
```
npm install --save-dev vuex
```
#### 7. Vuetify インストール
管理画面などのUIをVuetifyで構成する場合使用

```
npm install vuetify
```
#### 8. app.jsの修正
```js
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import router from './Router'
import store from './Store';
import App from './App.vue'

Vue.use(Vuetify);
Vue.use(VueRouter)

window.events = new Vue();

// メッセージ表示用イベントバス
window.flash = function(messageObj) {
    window.events.$emit('flash', messageObj);
}

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        iconfont: 'mdi',
    }),
    router,
    store,
    components: { App }
});
```
#### 9. resources\js配下にディレクトリを作成する
##### ■ Apis
サーバーとのapi通信ロジックを管理

##### ■ Components
コンポネントの管理

##### ■ Mixins
Mixin管理

##### ■ Pages
ページの管理

##### ■ Router
ルーティング設定

##### ■ Store
Veuxのストア管理

##### ■ Styles
scssファイル管理

##### ■ app.js
エントリーポイント

##### ■ App.vue
最上位 vue

##### ■ bootstrap.js
ブートストラップファイル - app.jsより先に読まれる

#### 10. ルーティング設定
routes\web.php

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
    return view('index');
})->where('any', '.*');
```
#### 11. bladeファイルの修正
resources\views\index.blade.php

```html
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <title>タイトル</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        <App></App>
    </div>
</body>
</html>
```
#### 12. Laravel Sanctum（SPA認証使用） インストール
```
composer require laravel/sanctum
```
