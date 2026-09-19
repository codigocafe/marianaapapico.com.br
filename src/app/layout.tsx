import { Fonts } from '@/_inc/fonts'

import '@/_assets/css/main.scss'

import Header from "@/_components/header"
import Footer from "@/_components/footer"


const RootLayout = (
    { children }: {children: React.ReactNode }
) => {
    return (
        <html 
            lang="pt-BR"
            suppressHydrationWarning={true}
            data-qb-installed="true"
        >
            <body className={Fonts}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout;