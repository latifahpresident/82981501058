# 🐞 Syndica Front-end Challenge

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.0-yellow?logo=vite)

---

## Overview

Welcome to the **Syndica Front-end Challenge**! This is a small React 18 + TypeScript + Tailwind app simulating a simple Task Manager.

Your goal is to **identify and fix a series of subtle React bugs** that affect the app’s functionality and performance.

---

## 🚀 Your Mission

You have **45 minutes** to:

1. Clone this repo and run the app locally.
2. Find and fix **4-5 bugs** causing incorrect behavior.
3. Ensure the app:
   - Loads and displays tasks correctly without infinite loops. ✅
   - Allows adding new tasks reliably. ✅
   - Logs task count accurately.
   - Displays accurate task completion statistics. ✅
   - Provides a smooth user experience.
4. (Optional) Improve code readability or add comments explaining your fixes.

---

## 🔍 What’s Broken?

This challenge includes several intentionally introduced issues, such as:

- **Infinite re-fetch loop**: fetchTasks should only run once on initial load.
- **Stale logs**: task count in the logs never updates.
- **Broken task stats**: completed task count may appear incorrect after toggling.
- **UI jank**: network latency causing inconsitant and buggy ux.
- **Implement remove task**: implement remove task functionality

---

## 🛠 Setup

Make sure you have Node.js (v18+) installed.

```bash
# Clone the repo
git clone <repo-url>
cd syndica-front-end-challenge

# Install dependencies
npm install

# Start development server
npm run dev

Open http://localhost:5173 in your browser to view the app.


## 🧑‍💻 How to Approach

- Familiarize yourself with the codebase.
- Use browser DevTools and React DevTools.
- Look for console warnings/errors.
- Review code carefully.
- Test user flows: adding tasks, toggling completion, watching task counts.
- Fix bugs incrementally and verify your fixes.
---
```
