import { NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = '7849930503:AAEUCSNKeqd9ZmHLQ7gZipAdmpk5I_maNCc'
const TELEGRAM_CHAT_ID = "409466142"

export async function POST(req: Request) {
   try {
      const { name, email, comment, phone } = await req.json();

      const messageParts = [];
      
      if (name) messageParts.push(`👤 *Имя:* ${name}`);
      if (email) messageParts.push(`📧 *Email:* ${email}`);
      if (phone) messageParts.push(`📞 *Телефон:* ${phone}`);
      if (comment) messageParts.push(`✉️ *Сообщение:* ${comment}`);
      
      const message = `💬 *Новое сообщение с сайта:*\n\n${messageParts.join('\n')}`;

      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
      const response = await fetch(url, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
         }),
      })
      

      if (!response.ok) throw new Error('Ошибка отправки в Telegram')

      return NextResponse.json({ message: 'Сообщение отправлено в Telegram' }, { status: 200 })
   } catch (error) {
      console.error('Ошибка Telegram:', error)
      return NextResponse.json({ message: 'Ошибка при отправке в Telegram' }, { status: 500 })
   }
}
 

