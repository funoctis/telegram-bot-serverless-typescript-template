import makeHandler, { APIGatewayEventHandler } from 'lambda-request-handler';
import { Telegraf } from 'telegraf';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN, {
  telegram: {
    webhookReply: true,
  },
});

// start command
bot.start(async (ctx) => {
  ctx.reply('Hello!');
});

// direct messages
bot.on('text', (ctx) => {
  const message = getMessage();
  ctx.telegram.sendMessage(ctx.message.chat.id, message);
});

// inline queries
bot.on('inline_query', (ctx) => {
  const result = [];
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
});

export function getMessage() {
  return `Beep bop, I'm a bot`;
}

// main handler function
export const hello: APIGatewayEventHandler = makeHandler(
  bot.webhookCallback('/')
);
