import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'Клининг в Минске | Уборка квартир и офисов по выгодным ценам',
  description: 'Надежная клининговая компания в Минске предоставляет высококачественные услуги по уборке квартир и офисов. Профессиональные уборщики, гибкая система скидок и доступные цены. Закажите у нас и наслаждайтесь чистотой!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
