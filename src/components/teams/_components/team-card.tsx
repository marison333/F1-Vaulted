import Image from 'next/image';
import Link from 'next/link';

import { Team } from '@/types';
import { teamGradientColor, darkTeamGradientColor, getTeamVariable } from '@/utils/team-colors';

import { Card } from '@/components/ui/card';

interface TeamCardProps {
    team: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
    const drivers = [team.drivers.first, team.drivers.second];
    const teamDisplayName = team.id.replace(/-/g, ' ');

    return (
        <Link data-slot='team-card' href={`/teams/${team.id}`} className='relativegroup'>
            <Card
                className={`relative h-[15rem] w-full p-4 gap-0 text-white overflow-hidden bg-gradient-to-l ${teamGradientColor(team.id)} ${darkTeamGradientColor(team.id)}`}>
                <span
                    className='absolute block top-0 bottom-0 left-0 w-[max(20rem,100%)]'
                    style={{
                        maskImage: 'url(/images/teams/background.webp)',
                        maskSize: 'cover',
                        maskRepeat: 'no-repeat',
                        backgroundColor: getTeamVariable(team.id),
                        opacity: 1,
                    }}
                />
                <span className='relative h-fit flex justify-between'>
                    <span>
                        <h3 className='capitalize group-hover:underline'>{teamDisplayName}</h3>
                        <span className='w-full md:flex md:flex-row md:gap-2'>
                            {drivers.map((driver, index) => (
                                <span className='flex flex-wrap gap-0.5' key={index}>
                                    <span>{driver.givenName}</span>
                                    <span className='font-black'>{driver.familyName}</span>
                                </span>
                            ))}
                        </span>
                    </span>
                    <span className='size-11 p-1.5 flex items-center justify-center rounded-full bg-black/50'>
                        <Image
                            alt={`${team.id} icon`}
                            className='object-contain flex items-center'
                            height={50}
                            src={`${team.iconUrl}`}
                            width={50}
                        />
                    </span>
                </span>
                <span className='relative h-[8rem] w-[35rem] flex items-center justify-end'>
                    <Image
                        alt={`Picture of ${team.name}'s car`}
                        className='md:object-cover h-[8rem] w-full'
                        height={450}
                        src={`${team.carImageUrl}`}
                        width={450}
                    />
                </span>
            </Card>
        </Link>
    );
};
