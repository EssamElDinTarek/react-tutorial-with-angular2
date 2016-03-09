# react-tutorial-with-angular2

Angular2 の公式ページにある [5 Min Quickstart](https://angular.io/docs/ts/latest/quickstart.html) をベースにして gulp + browserify 対応を行ったうえで、React Tutorial を Angular2 で実施しました。

このレポジトリの詳細については以下の Qiita の記事で説明しています。  
[Angular2 を利用して React の公式Tutorial を実行した際の詳細手順。gulp + browserify も利用。](http://qiita.com/ma-tu/items/f2a559ebfe276c872125)

過去に以下の記事で書いた React Tutorial の続編となります。
* [React.js の 公式Tutorial を gulp を利用して簡単に実行できる環境を作って、ES6も試した](http://qiita.com/ma-tu/items/9d58f5db7e7afd306dd7)
* [React.js の 公式Tutorial を Redux を利用して書き直した。また Mocha + power-assert を利用したテストも追加](http://qiita.com/ma-tu/items/561cbf84ffeb14dad4a7)

2016年3月時点の最新環境で実行してます。

## ブランチ および コミットの説明

ブランチの説明
* 5-min-quickstart-ends - 5 Min Quick start 完了
* start-react-tutorial  - React Tutorial 開始
* finish-react-tutorial - React Tutorial 作業完了

コミットは React Tutorial の各セクションの単位で作成しています。

## 利用方法

同レポジトリを利用して React Tutorial を開始する場合は以下を利用します。
他のブランチを利用する場合は適時 checkout の先を変更してください。
```
git clone https://github.com/ma-tu/react-tutorial-with-angular2.git
cd react-tutorial-with-angular2
git checkout start-react-tutorial
```

インストール作業は以下コマンドです。  
npm の install および TypeScript の型定義の取得までを行います。
```
npm install
```

以下コマンドで起動します。
```
npm start
```

## License

MIT License
