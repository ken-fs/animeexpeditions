# SEO 收尾清单 — animeexpeditions.dev

> 最后更新：2026-08-10。这一轮 SEO 优化的完整记录 + 待办，方便以后回来接着做。

## 站点现状

- **框架**：Next.js 16.3 static export（`output: export`），部署在 Cloudflare（wrangler，`./out` 作为静态资产）
- **部署方式**：push 到 `main` → 自动构建部署。改代码后不用手动 build。
- **包管理**：用 **npm**（`package-lock.json`）。不要用 pnpm，会触发 `unrs-resolver` 构建脚本报错。
- **本地构建**：`npm run build`；改路由结构后先 `rm -rf .next` 再 build（Next 16 会缓存旧的类型校验路径）。
- **AdSense pub id**：`pub-4969757168101127`（与其他站共用同一账号）

## 页面清单（14 页）

**多语言页（en 根 + es/pt/ru）**
- `/` Codes（首页）· `/tier-list/` · `/units/` · `/evolution-planner/` · `/beginner-guide/`

**英文单页（本轮新增，暂无 es/pt/ru）**
- 内容页：`/traits/` · `/updates/` · `/game-modes/` · `/about/` · `/maps/` · `/gamepasses/`
- 交互工具：`/team-builder/` · `/daily-checklist/`（都在 `(en)` route group 下）

## 本轮已完成（8 次提交，全部已上线）

| commit | 内容 |
|---|---|
| `d1a42d2` | 首页加 Roblox 官方游戏截图 + YouTube trailer 嵌入 |
| `b5a13a9` | 安全响应头（`public/_headers`）+ VideoObject + units ItemList schema |
| `6627bfe` | per-locale `<html lang>` 修复（route-group 多 root layout，URL 不变） |
| `58e2a97` | Traits 页（17 traits + 概率 + pity + reroll 指南，~2000 词） |
| `5ac66cd` | Updates / Game Modes / About 三页 |
| `22fe011` | Maps & Drops / Gamepasses 两页 |
| `cda766e` | Team Builder 交互工具（角色覆盖分析） |
| `07ba94d` | Daily Checklist 交互工具（localStorage + 每日/每周自动重置） |

## 审计问题状态

| 问题 | 状态 |
|---|---|
| AI 爬虫被 Cloudflare 封（ChatGPT/Claude 可见性 0%） | ✅ 关掉 Cloudflare「托管 robots.txt」开关后解封 |
| www 返回 522 | ✅ 已自愈，www → 非www 301 正确跳转 |
| 各语言 `<html lang>` 全是 en | ✅ route-group 重构，es/pt/ru 现在正确输出 lang |
| 安全响应头缺失（HSTS/CSP 等） | ✅ 加了 `public/_headers` |
| fan-made 免责声明 | ✅ 首页本就有（`disclaimer1/2`，4 语言） |
| Schema 缺 VideoObject / units ItemList | ✅ 已加 |
| 内容薄 / 覆盖不足 | ✅ 新增 6 内容页 + 3 工具页 |

## ⏳ 待办（下次做）

1. **多语言翻译**：es/pt/ru 的单位 role 描述仍是英文（审计判为"半吊子机翻"）。要么补全翻译，要么维持现状。新增的 6 英文页也还没多语言版本——**刻意的**，等英文版验证有效再投入翻译（见 memory：先做单站验证）。
2. **GSC 手动请求收录**：核心英文页（`/`、`/tier-list/`、`/traits/`）去 Search Console 点"请求编入索引"催一下。
3. **看数据再优化**：等 14 页进索引 + AI 爬虫重新抓取（几天），看 GSC 哪些页有曝光，再针对性补内容。
4. **数据维护**：游戏更新时改这些数据文件即可（组件不用动）：
   - `src/data/codes.ts` — 新码 / 过期码 + `LAST_VERIFIED`
   - `src/data/units.ts` — 单位 / tier
   - `src/data/updates.ts` — **顶部加新更新条目**（这是主要新鲜度信号，保持更新）
   - `src/data/traits.ts` / `maps.ts` / `gamepasses.ts` / `checklist.ts`
5. **未做的工具**（数据门槛高，缺可信数据别硬做）：
   - Damage Calculator — 需要每个单位的攻击/攻速**数值**，现有数据只有 role 文字
   - Summon/Banner Planner — 需要 banner 概率数据

## ⚠️ 数据准确性提醒

新页的游戏数据是从参考站（animeexpeditions.org/.net）和 Roblox 官方 API 抓的，**有时效/准确性风险**。页面已诚实标注 REPORTED / PROVISIONAL。traits 概率、updates 日期、maps 掉落这些建议核对后再当权威。数据都抽成了独立 `src/data/*.ts` 文件，更新只改数据不碰组件。

## 参考竞品

- https://animeexpeditions.org/ — 内容型 wiki（codes/units/tier/traits/gameplay/updates）
- https://animeexpeditions.net/ — 工具型 hub（含 team builder / calculators / checklist 等交互工具）

本站现已覆盖两者的核心内容面，工具层（3 个交互工具）已超过 .org。
