import { getDrivers } from '@/lib/data/drivers';
import DriversPageLayout from '../../layouts/drivers-page-layout';

import { Overview } from './_components/overview';
import { TeamsBanner } from './_components/banner';

export default async function Drivers() {
    const driversData = await getDrivers();
    driversData.sort((a, b) => a.team.id.localeCompare(b.team.id));

    return (
        <DriversPageLayout>
            <div className='mb-6 flex flex-col gap-1'>
                <h1 className='uppercase font-bold'>drivers 2025</h1>
                <p>Find the current drivers of the 2025 Formula 1 season</p>
            </div>
            <Overview drivers={driversData} />
            <TeamsBanner />
        </DriversPageLayout>
    );
}
