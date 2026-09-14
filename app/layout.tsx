import { Epilogue, Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/assets/css/main.scss'

const epiloque = Epilogue({
    subsets: ['latin'],
    variable: '--font-epilogue',
    weight: ['500', '700']
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
                {children}
            </body>
        </html>
    )
}

export default RootLayout;