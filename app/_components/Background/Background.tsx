import React from 'react';

interface CustomCSSProperties extends React.CSSProperties {
    '--color-background-image-base'?: string;
    '--color-background-image-accent-1'?: string;
    '--color-background-image-accent-2'?: string;
    '--color-background-image-accent-3'?: string;
    '--color-background-image-accent-4'?: string;
    '--color-background-image-accent-5'?: string;
    '--color-background-image-accent-6'?: string;
    '--color-background-image-accent-7'?: string;
}

const Background: React.FC = () => {
    const style: CustomCSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.5,
        '--color-background-image-base': 'var(--color-background)',
        '--color-background-image-accent-1': 'var(--indigo-a7)',
        '--color-background-image-accent-2': 'var(--violet-6)',
        '--color-background-image-accent-3': 'var(--purple-9)',
        '--color-background-image-accent-4': 'var(--blue-5)',
        '--color-background-image-accent-5': 'var(--slate-1)',
        '--color-background-image-accent-6': 'var(--crimson-a5)',
        '--color-background-image-accent-7': 'var(--indigo-5)'
    };

    return (
        <svg width="2560" height="1920" viewBox="0 0 2560 1920" fill="none" xmlns="http://www.w3.org/2000/svg"
             style={style}>
            <g>
                <path
                    d="M2800 200C3000 300 3100 500 3000 700C2500 1500 1500 2800 1000 3000C-1000 3500 -4000 2500 -2000 1300C0 100 -1500 -200 -400 -1000C900 -1900 2400 0 2800 200Z"
                    fill="url(#paint0_radial_variation)"/>
                <path
                    d="M900 -100L1900 300C2000 350 2050 400 2100 500L2300 1000L3000 750C3050 725 3100 725 3150 750L4150 1150C4250 1200 4300 1300 4250 1400L4000 1700C3975 1725 3950 1750 3900 1775L2600 2150L2900 3150C2925 3200 2900 3250 2875 3300L2500 3750L1300 3300C1200 3250 1150 3200 1100 3100C800 2100 700 2000 300 500C250 350 300 250 325 200L600 -50C650 -125 800 -150 900 -100Z"
                    fill="url(#paint1_radial_variation)"/>
                <path
                    d="M1600 200L2600 600C2700 650 2750 700 2800 800L3000 1300L3700 1050C3750 1025 3800 1025 3850 1050L4850 1450C4950 1500 5000 1600 4950 1700L4700 2000C4675 2025 4650 2050 4600 2075L3300 2450L3600 3450C3625 3500 3600 3550 3575 3600L3200 4050L2000 3600C1900 3550 1850 3500 1800 3400L1600 2800L900 3050C850 3075 800 3075 750 3050C750 3050 -300 2650 -100 2100C100 1550 700 1800 1300 1600L1000 600C975 550 1000 500 1025 450L1275 150C1325 75 1500 150 1600 200Z"
                    fill="url(#paint2_radial_variation)"/>
                <path d="M700 4000L0 1200L5000 -500L8200 4000H700Z" fill="url(#paint3_radial_variation)"/>
                <path d="M800 3750L100 950L5150 -750L8350 3750H800Z" fill="url(#paint4_radial_variation)"/>
                <ellipse cx="2400" cy="300" rx="1700" ry="1600" fill="url(#paint5_radial_variation)"/>
                <path opacity="0.5"
                      d="M6300 3100L3750 4550L300 -500L4350 -4200L6300 3100Z"
                      fill="url(#paint6_radial_variation)"/>
                <path
                    d="M3100 800C3350 1750 3600 2600 3900 3550C3925 3650 3875 3775 3775 3850C2850 4450 -750 5400 100 2800C200 2450 350 2200 600 2200C850 2200 1300 2400 1650 2350C2200 2300 2050 1250 2400 1000L2850 700C2950 650 3050 700 3100 800Z"
                    fill="url(#paint7_radial_variation)"/>
            </g>
            <defs>
                <radialGradient id="paint0_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(-800 -2000) rotate(65) scale(6400 6300)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.08" stopColor="var(--color-background-image-accent-1)"/>
                    <stop offset="0.36" stopColor="var(--color-background-image-accent-2)"/>
                    <stop offset="0.66" stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.80" stopColor="var(--color-background-image-accent-3)"/>
                    <stop offset="0.94" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)"/>
                </radialGradient>
                <radialGradient id="paint1_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(200 -1100) rotate(65) scale(6400 6300)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.08" stopColor="var(--color-background-image-accent-4)"/>
                    <stop offset="0.33" stopColor="var(--color-background-image-accent-5)"/>
                    <stop offset="0.66" stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.80" stopColor="var(--color-background-image-accent-3)"/>
                    <stop offset="0.94" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)"/>
                </radialGradient>
                <radialGradient id="paint2_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(900 -800) rotate(65) scale(6400 6300)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.14" stopColor="var(--color-background-image-accent-6)" stopOpacity="0"/>
                    <stop offset="0.33" stopColor="var(--color-background-image-accent-7)"/>
                    <stop offset="0.66" stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.80" stopColor="var(--color-background-image-accent-3)"/>
                    <stop offset="0.94" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)"/>
                </radialGradient>
                <radialGradient id="paint3_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(2900 2500) rotate(-118) scale(1900 3600)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.82" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint4_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(3100 2300) rotate(-118) scale(1900 3600)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.82" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint5_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(3000 300) rotate(119) scale(1800 2100)">
                    <stop offset="0.33" stopColor="var(--color-background-image-accent-1)" stopOpacity="1"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint6_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(3900 650) rotate(149) scale(1900 3600)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.79" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint7_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(3500 -600) rotate(113) scale(8300 4900)">
                    <stop stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.08" stopColor="var(--color-background-image-accent-1)"/>
                    <stop offset="0.33" stopColor="var(--color-background-image-accent-5)"/>
                    <stop offset="0.66" stopColor="var(--color-background-image-base)"/>
                    <stop offset="0.80" stopColor="var(--color-background-image-accent-3)"/>
                    <stop offset="0.94" stopColor="var(--color-background-image-base)"/>
                    <stop offset="1" stopColor="var(--color-background-image-base)"/>
                </radialGradient>
                <radialGradient id="paint8_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(1280 960) rotate(90) scale(100)">
                    <stop stopColor="var(--color-background-image-accent-4)"/>
                    <stop offset="1" stopColor="var(--color-background-image-accent-4)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint9_radial_variation" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(1920 1440) rotate(90) scale(150)">
                    <stop stopColor="var(--color-background-image-accent-6)"/>
                    <stop offset="1" stopColor="var(--color-background-image-accent-6)" stopOpacity="0"/>
                </radialGradient>
            </defs>
        </svg>
    );
};

export default Background;

