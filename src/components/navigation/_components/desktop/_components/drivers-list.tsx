'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Driver } from '@/types';
import { Separator } from '@/components/ui/separator';

type DriverListProps = {
    drivers: Driver[];
};

interface driverBadgeProps {
    driver: Driver;
}

const buttonItems = [
    {
        name: 'all drivers',
        url: '/drivers'
    },
    {
        name: 'hall of fame',
        url: '/drivers/hall-of-fame'
    }
];

// @TODO: create util for this
const teamBackgroundColor = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return 'bg-[rgb(var(--alpine))]';
        case 'aston-martin':
            return 'bg-[rgb(var(--aston-martin))]';
        case 'ferrari':
            return 'bg-[rgb(var(--ferrari))]';
        case 'haas':
            return 'bg-[rgb(var(--haas))]';
        case 'kick-sauber':
            return 'bg-[rgb(var(--kick-sauber))]';
        case 'mclaren':
            return 'bg-[rgb(var(--mclaren))]';
        case 'mercedes':
            return 'bg-[rgb(var(--mercedes))]';
        case 'racing-bulls':
            return 'bg-[rgb(var(--racing-bulls))]';
        case 'red-bull':
            return 'bg-[rgb(var(--red-bull))]';
        case 'williams':
            return 'bg-[rgb(var(--williams))]';
        default:
            return 'bg-gray-500';
    }
};

// @TODO: create util for this
const getTeamVariable = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return '--alpine';
        case 'aston-martin':
            return '--aston-martin';
        case 'ferrari':
            return '--ferrari';
        case 'haas':
            return '--haas';
        case 'kick-sauber':
            return '--kick-sauber';
        case 'mclaren':
            return '--mclaren';
        case 'mercedes':
            return '--mercedes';
        case 'racing-bulls':
            return '--racing-bulls';
        case 'red-bull':
            return '--red-bull';
        case 'williams':
            return '--williams';
        default:
            return '--gray-500';
    }
};

const DriverBadge = ({ driver }: driverBadgeProps) => {
    const teamVar = getTeamVariable(driver.team.id);

    return (
        <>
            <Button asChild data-slot='driver-badge' size='lg' variant='ghost'>
                <Link
                    className='flex items-center justify-start w-full text-left transition-colors duration-200'
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `rgb(var(${teamVar}) / 0.2)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    href={`/${driver.givenName}-${driver.familyName}`}>
                    <div className='flex justify-center gap-1'>
                        <span
                            className={`rounded-full overflow-hidden size-7 shadow-md ${teamBackgroundColor(driver.team.id)}`}>
                            <Image
                                alt={`${driver.givenName} ${driver.familyName}`}
                                className='object-top'
                                height={250}
                                loading='lazy'
                                quality={25}
                                src={driver.mugshotUrl}
                                width={100}
                            />
                        </span>
                        <span className='flex gap-1 text-xl text-white'>
                            <span className='capitalize'>{driver.givenName}</span>
                            <span className='uppercase font-extrabold'>{driver.familyName}</span>
                        </span>
                    </div>
                    <span className='sr-only'>{`${driver.givenName} ${driver.familyName}`}</span>
                </Link>
            </Button>
        </>
    );
};

export default function DriversList({ drivers }: DriverListProps) {
    return (
        <div className='max-w-[90rem] mx-auto' data-slot='drivers-list'>
            <div className='mb-5 grid grid-cols-4 gap-2.5'>
                {drivers.map((driver, index) => (
                    <DriverBadge key={index} driver={driver} />
                ))}
            </div>
            <Separator className='dark' />
            <div className='my-4 flex gap-2'>
                {buttonItems.map((item, index) => (
                    <Button asChild className='dark text-white' key={index} variant='ghost'>
                        <Link href={item.url}>{item.name}</Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}
