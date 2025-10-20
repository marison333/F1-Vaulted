import type { Metadata } from 'next';

import Drivers from '@/components/drivers/overview';

export const metadata: Metadata = {
    title: 'Drivers 2025',
    description: 'Find the current drivers of the 2025 Formula 1 season.',
    keywords:
        'f1 drivers, formula 1 drivers, f1 drivers 2025, formula 1 drivers 2025, f1 teams, formula 1 teams, f1 teams 2025, formula 1 teams 2025'
};

export default function DriversPage() {
    return (
        <>
            <Drivers />
        </>
    );
}
