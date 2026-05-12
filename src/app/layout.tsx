import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rise at Seven — We Create Category Leaders',
  description: 'Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en ">
      <body
        className=""
      >{children}</body>
    </html>
  )
}
