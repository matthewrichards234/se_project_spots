# 🟣 Spots — Static Social Media Web App

## 🔍 Overview

**Spots** is a front-end-only static social media-style web app where users can view posts, like them, and see a sample profile. Designed with accessibility and scalability in mind, Spots is built entirely with HTML and CSS — **no JavaScript** involved. The layout is responsive and visually driven, closely following a custom **Figma** design.

---

## 🚀 Features

- 📷 **Image Feed**: Scrollable list of photo posts with captions
- ❤️ **Like Button (Static)**: Each post includes a heart icon styled for interaction (hover effect only)
- 👤 **Profile Section**: Sample user profile with avatar, name, title, and action buttons
- 📱 **Responsive Design**: Built with **CSS media queries** for mobile and desktop views
- 🧱 **Grid Layouts**: Utilizes **CSS Grid** for responsive card arrangement
- 🖋️ **Custom Fonts**: Integrated via `@font-face` for unique branding
- 🧩 **Modular Block-Based CSS**: Clear BEM-style naming and flat file structure

---

## 🛠️ Built With

- **HTML5** — Semantic and accessible markup
- **CSS3** — Modern layouts using Grid and Flexbox
- **Figma** — Used for UI/UX prototyping and design reference
- **Custom Fonts** — Loaded locally with `@font-face`
- **Flat File Structure** — Organized, scalable directory layout

---

## 📸 Card Component Example

```html
<li class="card">
  <img src="./images/1-photo.jpg" alt="Val Thorens" class="card__image" />
  <div class="card__content">
    <h2 class="card__title">Val Thorens</h2>
    <button class="card__like-btn"></button>
  </div>
</li>

## 🧠 What I Learned - Built a complete static web app using only **HTML and
CSS** - Implemented **responsive layouts** with CSS Grid and media queries -
Translated a **Figma design** into clean, structured code - Organized styles
using **modular, block-based CSS** - Imported custom fonts locally using
`@font-face` - Optimized the project for **desktop and mobile** — all without
JavaScript --- ## 🚧 Planned Improvements - Add JavaScript for **post
creation**, **like counters**, and other dynamic features - Implement **form
validation** and **modals** for editing profiles or adding posts - Expand user
experience by creating a **dedicated profile page** - Introduce **dark mode
support** with a toggle switch
```
