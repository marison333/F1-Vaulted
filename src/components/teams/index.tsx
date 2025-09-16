import { getTeams } from '@/lib/data/teams';
import OverviewLayout from '../layouts/overview-layout';

import { DriverBanner } from './_components/banner';
import { Overview } from './_components/overview';

export default async function TeamsOverview() {
    const teamsData = await getTeams();
    teamsData.sort((a, b) => a.id.localeCompare(b.id));

    return (
        <OverviewLayout>
            <div>
                <div className='mb-6 flex flex-col gap-1'>
                    <h1 className='uppercase font-bold'>F1 Teams 2025</h1>
                    <p>Find the current Formula 1 teams for the 2025 season</p>
                </div>
            </div>
            <Overview teams={teamsData} />
            <DriverBanner />
        </OverviewLayout>
    );
}
