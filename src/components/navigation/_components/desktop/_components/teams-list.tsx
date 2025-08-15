import Link from 'next/link';
import Image from 'next/image';
import { Team } from '@/types';
import { teamBackgroundColor, teamGradientColor } from '@/utils/team-colors';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TeamsListProps {
    teams: Team[];
}

type TeamCardProps = {
    team: Team;
};

const TeamCard = ({ team }: TeamCardProps) => {
    return (
        <>
            <Link className='overflow-hidden' data-slot='team-navigation-card' href={`/teams/${team.id}`}>
                <Card className={`w-full h-[9rem] border-stone-800 dark bg-gradient-to-t ${teamGradientColor(team.id)} from-50% to-stone-800`}>
                    <CardHeader className='flex items-center gap-1 w-full p-2'>
                        <span className={`p-0.5 rounded-full shadow ${teamBackgroundColor(team.id)}`}>
                            <Image
                                alt={`${team.name} logo`}
                                className='object-contain'
                                height={20}
                                loading='lazy'
                                src={`${team.iconUrl}`}
                                width={20}
                            />
                        </span>
                        <span className='uppercase font-extrabold'>
                            {team.id.replace(/-/g, ' ')}
                        </span>
                    </CardHeader>
                    <CardContent>
                        <Image
                            alt={`${team.name}`}
                            className='object-contain size-full'
                            height={300}
                            loading='lazy'
                            quality={50}
                            src={`${team.carImageUrl}`}
                            width={450}
                        />
                    </CardContent>
                </Card>
            </Link>
        </>
    );
};

export default function TeamsList({ teams }: TeamsListProps) {
    return (
        <div className='max-w-[90rem] mx-auto' data-slot='teams-list'>
            <div className='mb-5 grid grid-cols-4 gap-2.5'>
                {teams.map((team, index) => (
                    <TeamCard key={index} team={team} />
                ))}
            </div>
            <Separator className='dark' />
            <div className='my-4'>
                <Button asChild className='dark text-white' variant='ghost'>
                    <Link href='/teams' className='capitalize'>
                        all teams
                    </Link>
                </Button>
            </div>
        </div>
    );
}
