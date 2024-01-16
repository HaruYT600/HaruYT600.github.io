import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.members = True

client = commands.Bot(command_prefix='!', intents=intents)

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

client.run('MTE5MTY5MjgzOTYwODkzMDMxNA.GUW3YI.0TbDIt4J_mWmnTxj2G-UIuW1NhmaPrEFh7J4k8')
