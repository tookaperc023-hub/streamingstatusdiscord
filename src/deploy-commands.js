import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const commands = [
  {
    name: 'ping',
    description: 'Check bot latency'
  },
  {
    name: 'hello',
    description: 'Get a friendly greeting'
  },
  {
    name: 'server',
    description: 'Get server information'
  }
];

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

try {
  console.log('🔄 Started refreshing application (/) commands.');

  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands }
  );

  console.log('✅ Successfully reloaded application (/) commands.');
} catch (error) {
  console.error('❌ Error deploying commands:', error);
}