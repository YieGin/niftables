import localFont from 'next/font/local'

export const monument = localFont({
    src: '../app/fonts/MonumentExtended-Regular.woff2',
    variable: '--font-monument',
})

export const satoshiBold = localFont({
    src: "../app/fonts/Satoshi-Bold.woff2",
    variable: '--font-satoshi-Bold',
});

export const satoshiMedium = localFont({
    src: "../app/fonts/Satoshi-Medium.woff2",
    variable: '--font-satoshi-Medium',
});

export const satoshiRegular = localFont({
    src: "../app/fonts/Satoshi-Regular.woff2",
    variable: '--font-satoshi-Regular',
});