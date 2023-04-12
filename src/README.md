# TDDBC for TypeScript + Jest with Node.js

これは、TDDBC の TypeScript + Jest 向けプロジェクトです。

## Documentation

### セットアップ&テスト

```sh
$ git clone https://github.com/tddbc/typescript-jest.git
$ cd typescript-jest
$ npm install
$ npm test

> typescript-jest@0.1.0 pretest
> npm run fmt:check && npm run lint


> typescript-jest@0.1.0 fmt:check
> prettier --check *.ts lib/*.ts

Checking formatting...
All matched files use Prettier code style!

> typescript-jest@0.1.0 lint
> eslint main.ts lib/*.ts


> typescript-jest@0.1.0 test
> ts-node node_modules/jest/bin/jest.js

 PASS  lib/sample_test.ts
  ✓ exported class (1 ms)
  ✓ private function (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.978 s, estimated 2 s
Ran all test suites.
```

### コマンド

| コマンド            | 内容                                                           |
| :------------------ | :------------------------------------------------------------- |
| `npm start`         | main.ts を実行します                                           |
| `npm run fmt`       | コードの整形を行います                                         |
| `npm run fmt:check` | コードの整形ルールに違反しているファイルがないかチェックします |
| `npm run lint`      | コードの静的検証を行います                                     |
| `npm run pretest`   | fmt:check と lint を行います                                   |
| `npm test`          | pretest とテストをまとめて行います                             |
| `npm run watch`     | ファイル変更を監視し、変更があったらテストを自動で行います     |

## License

Copyright (c) 2022 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
