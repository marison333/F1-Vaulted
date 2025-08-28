import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                alpine: '#009ee4',
                astonMartin: '#22976e',
                ferrari: '#ce3035',
                haas: '#9b9da0',
                kickSauber: '#00bc0d',
                mclaren: '#f17602',
                mercedes: '#00d5b5',
                racingBulls: '#457ed4',
                redBull: '#457ed4',
                williams: '#1963d9'
            }
        }
    },
    plugins: [tailwindcssAnimate]
};

export default config;
