# Graph Report - .  (2026-07-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 32 nodes · 65 edges · 6 communities (4 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bb72af6e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_renderAll|renderAll]]
- [[_COMMUNITY_app.js|app.js]]
- [[_COMMUNITY_esc|esc]]
- [[_COMMUNITY_parseYearMonth|parseYearMonth]]
- [[_COMMUNITY_getDynamicYears|getDynamicYears]]
- [[_COMMUNITY_content.js|content.js]]

## God Nodes (most connected - your core abstractions)
1. `renderAll()` - 14 edges
2. `icon()` - 13 edges
3. `esc()` - 7 edges
4. `parseYearMonth()` - 4 edges
5. `renderNav()` - 4 edges
6. `renderHero()` - 4 edges
7. `renderAbout()` - 4 edges
8. `renderAI()` - 4 edges
9. `renderContact()` - 4 edges
10. `renderFooter()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `renderAbout()` --calls--> `icon()`  [EXTRACTED]
  app.js → app.js  _Bridges community 0 → community 2_
- `getDynamicYears()` --calls--> `parseYearMonth()`  [EXTRACTED]
  app.js → app.js  _Bridges community 3 → community 4_

## Import Cycles
- None detected.

## Communities (6 total, 2 thin omitted)

### Community 0 - "renderAll"
Cohesion: 0.33
Nodes (10): icon(), renderAchievements(), renderAll(), renderBackToTop(), renderEducation(), renderExperience(), renderHero(), renderOpenSource() (+2 more)

### Community 1 - "app.js"
Cohesion: 0.22
Nodes (3): ACHIEVEMENT_GRADIENTS, ICONS, SKILL_PROFICIENCY

### Community 2 - "esc"
Cohesion: 0.33
Nodes (6): esc(), renderAbout(), renderAI(), renderContact(), renderFooter(), renderNav()

### Community 3 - "parseYearMonth"
Cohesion: 0.67
Nodes (3): formatPeriod(), getDurationMonths(), parseYearMonth()

## Knowledge Gaps
- **4 isolated node(s):** `ICONS`, `SKILL_PROFICIENCY`, `ACHIEVEMENT_GRADIENTS`, `PORTFOLIO_CONTENT`
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `renderAll()` connect `renderAll` to `app.js`, `esc`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `icon()` connect `renderAll` to `app.js`, `esc`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `esc()` connect `esc` to `renderAll`, `app.js`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `ICONS`, `SKILL_PROFICIENCY`, `ACHIEVEMENT_GRADIENTS` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._