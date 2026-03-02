✨ A super-fast open-source URL shortener built with Next.js 16 + cache components.

## 🚀 Demo  
https://ziggto.vercel.app

## 📦 What it is  
A straightforward URL-shortening service: give it a URL, get a short link.  
Built as a lightweight, easy-to-deploy OSS project.  

## 🛠 Built with  
- Next.js 16  
- Tailwind CSS
- Drizzle ORM
- PostgreSQL

## 🔧 Getting Started

### 1. Fork and clone the repository

Fork the repo and then clone your fork:
```bash
git clone https://github.com/your-username/the-fastest-url-shortener.git
cd the-fastest-url-shortener
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```

> Open `.env` and fill in the required values.

### 4. Start the database
```bash
npm run docker:up
```

### 5. Run database migrations
```bash
npm run db:generate
npm run db:migrate
```

### 6. Start the development server
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

Contributions are welcome. If you want to help:

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: …'`)
4. Push to your branch and open a Pull Request

## 📄 License

This project is available under the MIT License — see [LICENSE](LICENSE) for details.