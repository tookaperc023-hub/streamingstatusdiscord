import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

// When the client is ready, run this code
client.once('ready', () => {
  console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
  
  // Set bot status
  client.user.setPresence({
    activities: [{
      name: 'with Discord.js',
      type: ActivityType.Playing
    }],
    status: 'online'
  });
});

// Handle slash commands
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    const ping = client.ws.ping;
    await interaction.reply({
      content: `🏓 Pong! Latency: ${ping}ms`,
      ephemeral: true
    });
  }

  if (commandName === 'hello') {
    await interaction.reply({
      content: `👋 Hello ${interaction.user.displayName}!`,
      ephemeral: true
    });
  }

  if (commandName === 'server') {
    const guild = interaction.guild;
    await interaction.reply({
      content: `📊 Server: ${guild.name}\n👥 Members: ${guild.memberCount}`,
      ephemeral: true
    });
  }
});

// Handle regular messages
client.on('messageCreate', message => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Simple ping response
  if (message.content.toLowerCase() === 'ping') {
    message.reply('🏓 Pong!');
  }
});

// Error handling
client.on('error', error => {
  console.error('❌ Discord client error:', error);
});

process.on('unhandledRejection', error => {
  console.error('❌ Unhandled promise rejection:', error);
});

// Login to Discord
if (!process.env.DISCORD_TOKEN) {
  console.error('❌ No Discord token provided! Please check your .env file.');
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN);