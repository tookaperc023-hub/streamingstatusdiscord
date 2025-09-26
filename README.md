# Discord Bot

A modern Discord bot built with Node.js and Discord.js v14.

## Features

- 🏓 Ping command with latency display
- 👋 Greeting commands
- 📊 Server information
- 🔧 Slash command support
- ⚡ Modern ES6+ syntax

## Setup

1. **Create a Discord Application**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application" and give it a name
   - Go to the "Bot" section and create a bot
   - Copy the bot token

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your bot token, client ID, and guild ID

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Deploy Slash Commands**
   ```bash
   node src/deploy-commands.js
   ```

5. **Start the Bot**
   ```bash
   npm start
   ```

## Bot Permissions

Make sure your bot has these permissions:
- Send Messages
- Use Slash Commands
- Read Message History
- View Channels

## Invite Link

Generate an invite link in the Discord Developer Portal under OAuth2 > URL Generator with the following scopes:
- `bot`
- `applications.commands`

## Development

For development with auto-restart:
```bash
npm run dev
```

## Important Notes

- This bot follows Discord's Terms of Service
- Uses proper bot tokens (not user tokens)
- Implements modern Discord.js v14 features
- Includes proper error handling