import NavBar from '@/components/NavBar'
import '@/public/globals.css'

export const metadata = {
  title: 'Dxni Template',
  description: 'Wonderful website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <NavBar />
        {children}
        </body>
    </html>
  )
}
