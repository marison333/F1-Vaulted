import Link from 'next/link';
import Image from 'next/image';

import { Driver } from '@/types';
import { teamGradientColor } from '@/utils/team-colors';

import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface OverviewProps {
    drivers: Driver[];
}

interface DriverCardProps {
    driver: Driver;
}

export function Overview({ drivers }: OverviewProps) {
    const DriverCard = ({ driver }: DriverCardProps) => {
        const driverLink = `/drivers/${driver.givenName.toLowerCase()}-${driver.familyName.toLowerCase()}`;
        
        return (
            <Link data-slot='driver-card' href={driverLink}>
                <Card
                    className={`group h-[14rem] w-full text-white bg-gradient-to-br ${teamGradientColor(driver.team.id)} to-stone-800`}>
                    <div className='w-full p-1.5 flex justify-between overflow-hidden'>
                        <div className='flex flex-col justify-between w-max p-2'>
                            <div className='h-full flex flex-col justify-between'>
                                <div className='flex flex-col'>
                                    <span className='flex flex-col gap-1 capitalize leading-5 text-2xl  group-hover:underline' data-testid='driver-name'>
                                        <span>{driver.givenName}</span>
                                        <span className='font-bold'>{driver.familyName}</span>
                                    </span>
                                    <span className='relative w-max my-1 capitalize font-bold'>
                                        {driver.team.id.replace('-', ' ')}
                                    </span>
                                    <span className='text-3xl font-extrabold'>
                                        #{driver.permanentNumber}
                                    </span>
                                </div>
                                <FlagIcon
                                    iconUrl={driver.nationality.code}
                                    name={driver.nationality.name}
                                />
                            </div>
                        </div>
                        <div className='w-max'>
                            <Image
                                alt={`Picture of Formula One ${driver.givenName} ${driver.familyName}`}
                                className='object-center w-max'
                                height={250}
                                src={driver.mugshotUrl}
                                width={150}
                            />
                        </div>
                        <div></div>
                    </div>
                </Card>
            </Link>
        );
    };

    return (
        <ul
            className='w-full flex flex-col gap-3 list-none [@media(min-width:679px)]:grid [@media(min-width:679px)]:grid-cols-2'
            data-slot='driver-list'>
            {drivers.map((driver) => (
                <li key={driver.code}>
                    <DriverCard driver={driver} />
                </li>
            ))}
        </ul>
    );
}
