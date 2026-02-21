# 📝 Keeper App

A focused, minimalist note-taking application built with **React** and **Vite**. This project demonstrates the fundamentals of organizing a web interface into reusable, independent building blocks (components).

## 🚀 Features
- **Component-Based Architecture**: Divided into Header, Footer, and Note components.
- **Dynamic Content**: Uses JavaScript expressions within JSX (like the dynamic copyright year).
- **Modern Styling**: Clean, responsive CSS layout.

## 🛠️ Tech Stack
- **React**: Library for building the UI.
- **Vite**: Next-generation frontend tooling for fast development.
- **CSS3**: Custom styling for the "sticky note" aesthetic.

## 📂 Project Structure
```text
src/
 ├── components/
 │    ├── App.jsx      # Root component (The Orchestrator)
 │    ├── Header.jsx   # Top navigation/branding
 │    ├── Footer.jsx   # Bottom copyright section
 │    └── Note.jsx     # Individual note card
 ├── index.jsx         # Entry point for the React DOM
 └── styles.css        # Global styles