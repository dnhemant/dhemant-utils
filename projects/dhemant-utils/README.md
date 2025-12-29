# dhemant-utils 🚀

A lightweight, performance-focused Angular utility library that contains **multiple reusable utilities**
such as **directives, pipes, and helpers** — including tooltips, click-outside handling, safe HTML pipes, and more.
Designed to be **standalone-friendly**, easy to use, and production-ready.

[![npm version](https://img.shields.io/npm/v/dhemant-utils.svg)](https://www.npmjs.com/package/dhemant-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🔗 Live Documentation

Explore the **Live Utility Dashboard** with interactive demos and documentation:  
👉 **[Live Utility Dashboard](https://dhemant-dev.github.io/dhemant-utils/)**

---

## 📦 Installation

Install the package via npm:

```bash
npm install dhemant-utils
```

---

## 🛠 Utilities Included (More Coming Soon 🚧)

`dhemant-utils` currently includes a small but growing set of reusable Angular utilities
such as UI directives and helper pipes.

These utilities are designed to be:
- Standalone-first
- Lightweight and dependency-free
- Easy to plug into any Angular application

👉 **To see what’s available and how to use each utility, please visit the demo page.**

---

## 🚀 Usage

All utilities are provided as standalone exports and can be imported directly
into your Angular components.

```ts
import { ClickOutsideDirective, SafePipe, TooltipDirective } from 'dhemant-utils';

@Component({
  selector: 'app-feature',
  imports: [ClickOutsideDirective, SafePipe, TooltipDirective],
  template: `
    <!-- See demo page for full usage examples -->
  `
})
export class FeatureComponent {}
```

---

## 📈 Roadmap

- More UI directives (hover, focus, debounce, scroll)
- Utility pipes (date, string, number helpers)
- Zero-config performance helpers

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this package in both personal and commercial projects.
The software is provided **"as is"**, without warranty of any kind.

---

## 👨‍💻 Author

**Hemant Dubey**

- GitHub: https://github.com/dhemant-dev  
- Demo: **[Live Utility Dashboard](https://dhemant-dev.github.io/dhemant-utils/)**

---

