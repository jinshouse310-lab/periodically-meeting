# バイオガス定例会ボード / Biogas Meeting Board

バイオガスプロジェクトの定例会を一覧・管理する静的ダッシュボードです（日本語／English 切替）。
A static dashboard for the recurring meetings of a biogas project, in Japanese and English.

## 表示内容 / What it shows

- 定例会の種類（分科会）/ Meeting type (workstream)
- 定例曜日・時間・所要時間・場所 / Weekday, time, duration, location
- 参加者・主担当 / Attendees and owner
- 目的 / Purpose
- 関連資料（リンク）/ Related documents (links)
- 週間スケジュール表、今後2週間の開催予定（隔週・月次ルールから自動計算）、種類フィルタ・検索
  / Weekly timetable, next-2-weeks list computed from biweekly/monthly rules, type filter and search

## 使い方 / Usage

`index.html` をブラウザで開くだけで動きます。GitHub Pages で公開する場合は、リポジトリ設定の Pages でこのブランチのルートを指定してください。
Open `index.html` in a browser. To host it, enable GitHub Pages for this branch's root.

URL 末尾に `#en` / `#ja` を付けると表示言語を指定できます。
Append `#en` or `#ja` to the URL to pick the language.

## データの編集 / Editing meetings

定例会はすべて `meetings.js` に記載しています。各項目は `ja` / `en` の両方を書いてください。
All meetings live in `meetings.js`. Give every text field both `ja` and `en`.

| 項目 / Field | 説明 / Description |
| --- | --- |
| `type` | `types` の `id`（色・コードが決まる）/ id from `types` (sets color and code) |
| `frequency` | `{kind:"weekly"}` / `{kind:"biweekly", anchor:"YYYY-MM-DD"}` / `{kind:"monthly", nth:1–4 または -1(最終)}` |
| `weekday` | 0=日 Sun … 6=土 Sat |
| `time`, `duration` | 開始 "HH:MM"（JST）、分 / start "HH:MM" (JST), minutes |
| `owner`, `participants` | 主担当、参加者 / owner, attendees |
| `purpose` | 目的 / purpose |
| `materials` | `{ja, en, url}`。`url` が空なら「リンク未設定」/ empty `url` shows "not linked" |

同梱の定例会はサンプルです。実際の内容に置き換えたら `sample: true` を `false` にすると注記が消えます。
The bundled meetings are samples. Set `sample: false` once you replace them to hide the notice.
