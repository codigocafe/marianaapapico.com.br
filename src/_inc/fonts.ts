import local from 'next/font/local'

const brasilero = local({
    variable: '--font-brasilero',
    src: [{path: '../_assets/fonts/brasilero/Brasilero2018Free.otf', style: 'normal'}],
    preload: true,
    display: 'swap'
})

const epilogue = local({
    variable: '--font-epilogue',
    src: [{path: '../_assets/fonts/epilogue/Epilogue.ttf', style: 'normal'}],
    preload: true,
    display: 'swap'
})

const inter = local({
    variable: '--font-inter',
    src: [{path: '../_assets/fonts/inter/Inter.ttf', style: 'normal'}],
    preload: true,
    display: 'swap'
})

const Fonts =  `${brasilero.variable} ${epilogue.variable} ${inter.variable}`

export { Fonts }