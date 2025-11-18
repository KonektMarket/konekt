# Konekt - Open Source

Get a number without a SIM. Use it to chat, call, bet, or pay, all on-chain. The first anonymous, pay-per-action social marketplace powered by x402 on Solana.

## Features

- 💬 Real-time chat with WebRTC calling
- 💰 Solana wallet integration with USDC transfers
- 🔐 Encrypted vault for files and notes
- 📱 Mobile-responsive design
- 🔔 Push notifications
- 👥 User discovery and contact management
- 📊 Admin dashboard and analytics

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Edge Functions, Realtime, Database)
- **Blockchain**: Solana (USDC transfers, SPL tokens)
- **Authentication**: Privy
- **Real-time**: Supabase Realtime, WebRTC

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Supabase account and project
- Privy account and app credentials
- Solana wallet (for testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/KonektMarket/konekt.git
cd konekt

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PRIVY_APP_ID=your_privy_app_id
VITE_SOLANA_RPC_URL=your_solana_rpc_url
```

## Project Structure

```
open-source/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── contexts/      # React contexts
│   └── integrations/  # Third-party integrations
├── supabase/
│   ├── functions/     # Edge functions
│   └── migrations/   # Database migrations
├── public/            # Static assets
└── package.json       # Dependencies
```

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details

## Links

- **Website**: [konekt.market](https://konekt.market)
- **DApp**: [dapp.konekt.market](https://dapp.konekt.market)
- **Twitter (App)**: [@KonektMarket](https://x.com/KonektMarket)
- **Twitter (Founder)**: [@x402founder](https://x.com/x402founder)
- **Substack**: [x402founder.substack.com](https://x402founder.substack.com)

## Support

For issues and questions, please open an issue on [GitHub](https://github.com/KonektMarket/konekt/issues).

