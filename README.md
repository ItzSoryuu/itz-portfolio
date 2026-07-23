<div align="center">
  <br />
  <h1>✨ itz. — Personal Portfolio</h1>
  <p>
    <strong>A modern, animated portfolio website built with React + Vite + TailwindCSS v4</strong>
  </p>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-TailwindCSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS v4" />
    <img src="https://img.shields.io/badge/-React_Router-000000?style=for-the-badge&logo=react-router" alt="React Router" />
    <img src="https://img.shields.io/badge/-Lucide_Icons-F56565?style=for-the-badge&logo=lucide" alt="Lucide Icons" />
    <img src="https://img.shields.io/badge/-Radix_UI-9D4EDD?style=for-the-badge&logo=radix-ui" alt="Radix UI" />
  </div>
  <br />
</div>

---

## 📋 Table of Contents

1. [About](#-about)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Project Structure](#-project-structure)
5. [Quick Start](#-quick-start)
6. [Available Scripts](#-available-scripts)
7. [Deployment](#-deployment)
8. [License](#-license)

---

## 🧑‍💻 About

This is the personal portfolio website of **Hanif Baihaqi Abdurrahman (ItzSoryuu)** — a 12th-grade student at SMAIT Ummul Quro Bogor with a deep passion for STEM (Science, Technology, Engineering, and Mathematics).

The site showcases:

- **Academic journey** — grades from semesters 1 through 5
- **Experience** — organizational roles, competitions, and extracurriculars
- **Projects** — featured web development work
- **Achievements** — awards, medals, and participated events
- **Contact** — get in touch for collaboration or opportunities

Built as a single-page React application with smooth animations, glassmorphism UI, dark/light theme support, and an interactive starry night background.

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component architecture |
| **Vite 7** | Fast development & build tool |
| **TailwindCSS v4** | Utility-first styling with `@theme` directives |
| **React Router v7** | Client-side routing (Home & 404 pages) |
| **Lucide React** | Clean, consistent icon set |
| **Radix UI Toast** | Accessible toast notification primitives |
| **Class Variance Authority + Tailwind Merge + Clsx** | Utility-first class management |

---

## ⚡ Features

### 🎬 Animated Intro Splash Screen
A multi-language greeting sequence (`Hello`, `Halo`, `Bonjour`, `Hola`, etc.) with dot indicators and a skip button — creates a welcoming first impression.

### 🌠 Star & Meteor Background
A dynamic, procedurally generated starfield with twinkling stars and shooting meteors that respond to window resize — built with pure CSS animations.

### ⌨️ Typing Animation Hero
The hero section features a self-typing and deleting name animation ("Hi, I'm Hanif") with a blinking cursor, alongside a profile photo with floating glass badges.

### 🌓 Dark / Light Mode Toggle
Persistent theme preference stored in `localStorage`. Smooth color transitions across all components via CSS custom properties.

### 🪟 Glassmorphism UI
Custom `glass` and `glass-strong` utility classes applied throughout — cards, navigation, and badges feature backdrop blur, semi-transparency, and glowing borders.

### 📱 Responsive Design
Full mobile responsiveness with a hamburger menu for navigation, adaptive grid layouts, and touch-friendly interactions.

### 🧭 Smooth Scroll Navigation
Fixed glass navbar with active section links and smooth scroll behavior (`scroll-behavior: smooth`).

### 💼 Experience Timeline
A left/right alternating timeline with glowing center line, animated dots, and cards containing period, title, description, and tech tags.

### 🖼️ Projects Showcase
Image cards with hover zoom effect, tech stack tags, GitHub and external demo links — fetched from a local data file.

### 🏆 Achievements Grid
Icon-categorized achievement cards (champion, medalist, award, participant) using Lucide icons.

### 📊 Academic Grade Viewer
Tabbed semester selector with animated progress bars, color-coded grade values (blue ≥95, green ≥90, yellow ≥80, etc.), and average score display. Includes a "Coming Soon" placeholder for future semesters.

### 📬 Contact Section
Contact information (email, phone, location) with social media links, plus a functional contact form with toast notification feedback.

### 🚀 One-Click Deployment
Ready for deployment on Vercel with zero configuration.

---

## 📁 Project Structure

```
itz-portfolio/
├── public/
│   ├── profile-photo.jpg          # Hero section profile image
│   ├── projects/
│   │   ├── project1.png
│   │   ├── project2.png
│   │   └── project3.png
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.jsx       # About me with skill cards
│   │   ├── AchievementSection.jsx  # Achievement grid
│   │   ├── ContactSection.jsx      # Contact form + info
│   │   ├── ExperienceSection.jsx   # Timeline experience
│   │   ├── Footer.jsx              # Page footer
│   │   ├── GradeSection.jsx        # Academic grades viewer
│   │   ├── HeroSection.jsx         # Hero with typing animation
│   │   ├── Intro.jsx               # Multilingual splash intro
│   │   ├── Navbar.jsx              # Glassmorphism navbar
│   │   ├── ProjectsSection.jsx     # Projects gallery
│   │   ├── StarBackground.jsx      # Animated star/meteor field
│   │   ├── ThemeToggle.jsx         # Dark/light mode switcher
│   │   └── ui/
│   │       ├── toast.jsx           # Radix toast component
│   │       └── toaster.jsx         # Toast container
│   ├── data/
│   │   ├── Achievement.js          # Achievement data
│   │   ├── Experience.js           # Experience timeline data
│   │   ├── Grade.js                # Academic grades data
│   │   └── Projects.js             # Projects showcase data
│   ├── hooks/
│   │   └── use-toast.js            # Toast hook
│   ├── lib/
│   │   └── utils.js                # Utility functions (cn)
│   ├── pages/
│   │   ├── Home.jsx                # Main page (all sections)
│   │   └── NotFound.jsx            # 404 page
│   ├── App.jsx                     # Root component with router
│   ├── index.css                   # Global styles + Tailwind + themes
│   └── main.jsx                    # Entry point
├── .eslintrc.cjs
├── index.html
├── package.json
├── vite.config.js                  # Vite config with @ alias
└── README.md
```

---

## 👌 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Clone and Run

```bash
# Clone the repository
git clone https://github.com/ItzSoryuu/itz-portfolio.git

# Navigate into the project
cd itz-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your app will be available at **http://localhost:5173**

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all JS/JSX files |

---

## ☁️ Deployment

### Deploy on Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New → Project**
4. Import your portfolio repository
5. Vercel will auto-detect Vite — no configuration needed
6. Click **Deploy**

Your live site will be available at a URL like `https://itz-portfolio.vercel.app`

You can also set up a **custom domain** in the Vercel dashboard.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>
    Built with ❤️ by <a href="https://github.com/ItzSoryuu">Hanif Baihaqi Abdurrahman</a>
  </p>
  <p>
    <a href="https://github.com/ItzSoryuu">GitHub</a> ·
    <a href="mailto:hanifbaihaqi135@gmail.com">Email</a>
  </p>
</div>

