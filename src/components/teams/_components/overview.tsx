import { Team } from '@/types';

import { TeamCard } from './team-card';

interface OverviewProps {
    teams: Team[];
}

export async function Overview({ teams }: OverviewProps) {

    return (
        <ul
            className='w-full flex flex-col gap-3 list-none [@media(min-width:679px)]:grid [@media(min-width:679px)]:grid-cols-2'
            data-slot='driver-list'>
            {teams.map((team) => (
                <li key={team.id}>
                    <TeamCard team={team} />
                </li>
            ))}
        </ul>
    );
}
