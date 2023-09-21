import Link from 'next/link'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'hyeonwoo',
}

export default async function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
