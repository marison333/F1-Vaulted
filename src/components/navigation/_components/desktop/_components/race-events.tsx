import { cn } from '@/lib/utils';
import { GrandPrix } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

interface RaceEventsProps {
    races: GrandPrix[];
}

interface RaceEventCardProps {
    race: GrandPrix;
}

const RaceEventCard = ({ race }: RaceEventCardProps) => {
    return (
        <Card className='h-[15rem] p-0 overflow-hidden' data-slot='race-event-card'>
            <Image
                alt={race.name}
                src={`${race.imageUrl}`}
                className='block'
                fill={true}
                objectFit='cover'
            />
            <div className='z-auto'>
                <h3 className='uppercase font-extrabold'>{race.id}</h3>
                <span>
                    {race.dateStart} - {race.dateEnd}
                </span>
            </div>
        </Card>
    );
};

const RaceSection: React.FC<{ title: string; races: RaceEventCardProps[]; nextRace?: GrandPrix | null }> = ({
    title,
    races,
    nextRace
}) => (
    <div className='space-y-4'>
        <h2 className='text-2xl uppercase font-bold text-white'>{title}</h2> 
        <div className=''>
            {nextRace && <RaceEventCard race={races} />}
        </div>
    </div>
);

export default function RaceEvents({ races }: RaceEventsProps) {
    return (
        <NavDropdownLayout>
            <div className='flex flex-col'>
                <div className='w-full flex items-center justify-between'>
                    {['previous', 'next', 'upcoming'].map((type, index) => (
                        <h2 className='capitalize font-bold text-white' key={index}>
                            {type}
                        </h2>
                    ))}
                </div>
                <div className='flex flex-row flex-nowrap'>
                    {races.map((race, index) => (
                        <RaceEventCard
                            key={index}
                            race={race}
                            type={index === 0 ? 'next' : index === 1 ? 'previous' : 'upcoming'}
                        />
                    ))}
                </div>
            </div>
            <Separator />
            <div className='w-full'>
                <Button asChild className='capitalize' variant='ghost'>
                    <Link href='/schedule'>full schedule</Link>
                </Button>
            </div>
        </NavDropdownLayout>
    );
}
