import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add your page title to here',
  description: 'Add your description to here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
