import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ESモジュールで __dirname を使用するための設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Cloud Run は環境変数 PORT を指定してくるため、それに従う（デフォルトは 8080）
const PORT = process.env.PORT || 8080;

// Vite のビルド出力ディレクトリ (dist) を静的ファイルとして配信
app.use(express.static(path.join(__dirname, 'dist')));

// SPA 対応: どのパスへのアクセスも index.html を返す
// (HashRouterを使用している場合も、ルート以外への直接アクセス対策として有効)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});