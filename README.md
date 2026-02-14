# 環境

```shell
% node -v
v22.22.0

% npm -v
11.9.0
```

- Vite + Vue 3 + TypeScript + Electron + Prisma

# アプリケーションの起動手順

1. 依存関係をインストール

```shell
npm install
```

2. 環境変数ファイルを確認（`DATABASE_URL` が必要）

`.env` に以下が設定されていることを確認してください。

```dotenv
DATABASE_URL="file:./prisma/investment-portfolio.db"
```

3. Prisma Client を生成

```shell
npx prisma generate
```

4. 開発モードで起動

```shell
npm run dev
```

5. （任意）本番ビルド

```shell
npm run build
```
