import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export const pingCommand = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

export async function executePingCommand(interaction: CommandInteraction) {
    return  interaction.reply("Pong!");
}