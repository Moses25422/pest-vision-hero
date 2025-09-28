# CropGuard AI 🌱

An intelligent agricultural monitoring platform that leverages AI-powered image analysis to detect pests and diseases in crops, providing early warning systems for farmers.

## 🚀 Features

- **AI-Powered Crop Analysis**: Upload crop images for instant pest and disease detection
- **Real-time Alert Dashboard**: Monitor active alerts, field status, and threat assessments
- **User Authentication**: Secure login/signup with user profile management
- **Farm Management**: Store farm location, contact information, and monitoring preferences
- **Mobile-Ready Interface**: Responsive design optimized for field use
- **Early Detection System**: Predictive analysis for proactive crop protection

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **shadcn/ui** - Premium UI components
- **Lucide React** - Beautiful icons

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Robust database with RLS
- **Row Level Security** - Secure data access
- **Real-time subscriptions** - Live data updates

### Authentication
- **Supabase Auth** - Complete authentication system
- **Email/Password** - Secure user authentication
- **Session management** - Persistent login state

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cropguard-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing hero section
│   ├── Navigation.tsx  # Main navigation
│   ├── ImageAnalyzer.tsx # AI image analysis
│   └── AlertDashboard.tsx # Alert monitoring
├── pages/              # Page components
│   ├── Index.tsx       # Main dashboard
│   ├── Auth.tsx        # Authentication page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   └── useAuth.tsx     # Authentication hook
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client and types
├── lib/                # Utility functions
└── App.tsx            # Main application component
```

## 🗄️ Database Schema

### Profiles Table
```sql
profiles (
  id: uuid (primary key)
  user_id: uuid (references auth.users)
  full_name: text
  farm_name: text
  farm_location: text
  phone: text
  avatar_url: text
  created_at: timestamp
  updated_at: timestamp
)
```

## 🔐 Authentication Flow

1. **Registration**: Users create accounts with email/password
2. **Profile Creation**: Automatic profile creation with farm details
3. **Session Management**: Persistent login across browser sessions
4. **Protected Routes**: Authentication required for main features
5. **Row Level Security**: User data isolation at database level

## 🖼️ Key Components

### ImageAnalyzer
- Drag-and-drop image upload
- AI-powered crop analysis
- Real-time processing feedback
- Threat detection results

### AlertDashboard
- Active alerts overview
- Severity-based color coding
- Farm monitoring statistics
- Confidence scoring

### Navigation
- User authentication status
- Profile management
- Section navigation
- Responsive mobile menu

## 🚀 Deployment

### Lovable Platform (Recommended)
1. Visit your [Lovable project](https://lovable.dev/projects/d959be91-c672-4299-a812-14364d57368a)
2. Click "Share" → "Publish"
3. Your app will be live with automatic deployments

### Manual Deployment
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Semantic HTML structure
- Mobile-first responsive design
- Accessible UI components

## 🌱 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- Open an issue on GitHub
- Contact the development team
- Check the [Lovable documentation](https://docs.lovable.dev/)

## 🔗 Links

- **Live Demo**: [Your Lovable App URL]
- **Supabase Dashboard**: [Your Supabase Project]
- **Lovable Project**: [Your Lovable Project URL]

---

Built with ❤️ for modern agriculture using React, TypeScript, and Supabase.