composer create-project laravel/laravel .

git init

■ .gitattributes 修正(warning: LF will be replaced by CRLF対策)
    * -text
    *.css linguist-vendored
    *.scss linguist-vendored
    *.js linguist-vendored
    CHANGELOG.md export-ignore

composer require laravel/ui

php artisan ui vue --auth

■ Vue 3とlaravel-mixのバージョン6インストール(vue3にしたい場合のみ使用)
npm install -save-dev laravel-mix@next vue@next

※cross-envはインストールしなくていいのか疑問

npm install

npm run dev

php artisan serve

npm run watch
npm install

npm install vue-router

npm install --save-dev vuex

npm install -D  cross-env

composer require laravel/sanctum
