# SEO 改动台账 · animeexpeditions.dev

每次 SEO 调整记一条：为什么、预期、复查日、指标。到期补结果。

## 2026-11-17 · 标题月份改成从核对日期自动算

**为什么**：11-07 扫到、11-17 线上仍是：标题里的月份是手写的，自动更新（autopilot）核对码 / 数据时只改日期字段、按规矩不碰标题，月份就停在上个月。标题月份过期会让人觉得页面没人管（codes / tier list 这类词大家按月搜），也和页面上的核对日期对不上。这个站多语言页也一样：西 / 葡 / 俄 codes 标题还写 9 月（Septiembre / Setembro / сентябрь），11-07 的英文扫描没认出来。

**改了什么**
- /（codes）：「Anime Expeditions Codes (October 2026) — …」→「Anime Expeditions Codes (November 2026) — …」；/es/ /pt/ /ru/ 的 codes 标题从 9 月改成 Noviembre / Novembro / ноябрь 2026。月份来自 `src/data/codes.ts` 的 `LAST_VERIFIED`（2026-11-09）
- /updates/（+ es / pt / ru）：「Anime Expeditions Updates — Update 3.5 Monster Clash Patch Notes (Oct 2026)」→「Anime Expeditions Updates — Halloween event: Candy Corns (Nov 2026)」：标题取 `src/data/updates.ts` 最新一条 + `UPDATES_VERIFIED`（11-04）的月份，以后在最上面加新更新，标题自己跟着变
- /tier-list/（+ es / pt / ru）：标题改成从 `UNITS_VERIFIED` 算月份；它还是 2026-10-11，所以线上暂时仍是 October，已交给自动更新引擎复核，核对过改 UNITS_VERIFIED 后自动变
- 新增 `src/data/month.ts`（monthYear(iso, locale)）

**预期**：以后核对过这页（改核对日期 / lastModified）标题月份自动跟上，不用再手改；每日巡检（seo-structure ⑧）标题月份早于上个月就点名。GSC 里这些页的 CTR 不降，codes / tier list 词的点击有机会小涨。

**复查**：📅 2026-12-01（线上标题是不是 November / December；12-01 后巡检有没有点名这些页；GSC 这几页 28 天 CTR / 点击对比 11-17 前）

**当天跟进**：f43c3f9：autopilot 复核（码无变化、没有可确认的新单位），UNITS_VERIFIED / LAST_VERIFIED / UPDATES_VERIFIED 改成 11-17，/tier-list/ 四种语言线上都是 11 月。

**结果**：（待补）
