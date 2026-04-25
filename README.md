# NexMindSystems

<div align="center">
  
  ![NexMindSystems](https://img.shields.io/badge/NexMindSystems-Enterprise%20Software-blue?style=for-the-badge)
  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
  ![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)
  
</div>

## 🚀 About

**NexMindSystems** is a modern, enterprise-grade software platform designed for healthcare, finance, logistics, and manufacturing industries. Built with cutting-edge technologies to deliver scalable, intelligent solutions that drive digital transformation.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark/light mode
- ⚡ **High Performance** - Lightning-fast with Vite and React 18
- 🔒 **Type Safety** - Full TypeScript support for robust development
- 🎭 **Smooth Animations** - Framer Motion & GSAP powered interactions
- 📱 **Mobile First** - Fully responsive across all devices
- 🧩 **Component Library** - Extensive shadcn/ui component collection
- 🎨 **Customizable** - Tailwind CSS for easy styling

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| ⚛️ **React 18** | Modern UI library with concurrent features |
| 📘 **TypeScript** | Type-safe development |
| ⚡ **Vite** | Next-generation build tool |
| 🎨 **Tailwind CSS** | Utility-first CSS framework |
| 🧩 **shadcn/ui** | High-quality, accessible components |
| 🎭 **Framer Motion** | Production-ready animations |
| 🎬 **GSAP** | Professional-grade animation library |
| 🔄 **React Router** | Client-side routing |
| 📊 **Recharts** | Powerful charting library |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) or **bun** (v1.0+)

> 💡 **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd nexmindsystems
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
bun install
```

### 3️⃣ Start Development Server

```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

### 4️⃣ Optional: WhatsApp Floating Contact Button

Set these environment variables in a `.env` file to enable the floating WhatsApp button:

```bash
VITE_WHATSAPP_NUMBER=923001234567
VITE_WHATSAPP_MESSAGE=Hi, I want to discuss a project with your team.
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment.

### 📊 Build Output

- **Minified & optimized** JavaScript and CSS
- **Tree-shaken** for minimal bundle size
- **Source maps** for debugging
- **Static assets** optimized and hashed

## 🌐 Deployment

Deploy NexMindSystems to your preferred platform:

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
npm run build
# Deploy the dist/ folder
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

### Other Platforms

- **AWS Amplify** - Connect your Git repository
- **Azure Static Web Apps** - GitHub Actions integration
- **Google Cloud Run** - Container-based deployment
- **GitHub Pages** - Static site hosting

## 🏗️ Project Structure

```
nexmindsystems/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── test/           # Test files
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Application entry
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite configuration
└── tailwind.config.ts  # Tailwind configuration
```

## 🎨 Customization

### Theme Configuration

Customize colors and theme in `src/index.css`:

```css
:root {
  --primary: 217 91% 60%;
  --accent: 262 83% 58%;
  /* Add your custom colors */
}
```

### Component Styling

All components use Tailwind CSS. Modify classes directly or update `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      // Your custom theme extensions
    }
  }
}
```

## 🧪 Testing

Run the test suite:

```bash
# Run tests once
npm test

# Watch mode
npm run test:watch
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software owned by NexMindSystems. All rights reserved.

## 📞 Support

Need help? Reach out to us:

- 📧 Email: info@nexmindsystems.com
- 🌐 Website: [Coming Soon]
- 💬 Discord: [Coming Soon]

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Framer Motion](https://www.framer.com/motion/) - Animation Library

---

<div align="center">
  
  **Made with ❤️ by NexMindSystems Team**
  
  ⭐ Star us on GitHub if you find this helpful!
  
</div>
