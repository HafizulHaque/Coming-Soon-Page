import { Poppins } from 'next/font/google'
import './globals.css'
import style from './layout.module.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Coming Soon',
  description: 'A placeholder website template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${style['bg-img']}`}>
        {children}
      </body>
    </html>
  )
}
