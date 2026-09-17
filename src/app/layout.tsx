import { Epilogue, Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/_assets/css/main.scss'

import Header from "@/_components/header"
import Footer from "@/_components/footer"

const epiloque = Epilogue({
    subsets: ['latin'],
    variable: '--font-epilogue',
    weight: ['300', '500', '700']
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['300', '500','700']
})

const brasileiro = localFont({
    variable: '--font-brasileiro',
    src:[
        {path: '../_assets/fonts/Brasilero2018Free.otf', style: 'normal'}
    ]
})

const RootLayout = (
    { children }: {children: React.ReactNode }
) => {
    return (
        <html 
            lang="pt-BR"
            suppressHydrationWarning={true}
            data-qb-installed="true"
        >
            <body className={`${epiloque.variable} ${inter.variable} ${brasileiro.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout;