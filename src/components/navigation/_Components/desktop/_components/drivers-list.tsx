'use client';

import Image from 'next/image';
import Link from 'next/link';

import { getTeamBackgroundColorDark } from '@/utils/team-colors';

import { Button } from '@/components/ui/button';
import { Driver } from '@/types';
import { Separator } from '@/components/ui/separator';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';

interface DriverListProps {
    drivers: Driver[];
}

interface DriverBadgeProps {
    driver: Driver;
}

interface DriverButtonItem {
    name: string;
    url: string;
}

const DriverButtonItems: DriverButtonItem[] = [
    {
        name: 'all drivers',
        url: '/drivers'
    },
    {
        name: 'hall of fame',
        url: '/drivers/hall-of-fame'
    }
];

const DriverBadge = ({ driver }: DriverBadgeProps) => {
    const backgroundColor: string = getTeamBackgroundColorDark(driver.team.id);

    return (
        <>
            <Button
                asChild
                className='group rounded-[0.2rem]'
                data-slot='driver-badge'
                size='lg'
                variant='ghost'>
                <Link
                    className={`flex items-center justify-start w-full text-left`}
                    href={`/drivers/${driver.givenName}-${driver.familyName}`}>
                    <div className='flex justify-center gap-1'>
                        <span
                            className={`rounded-full overflow-hidden size-7 shadow-md ${backgroundColor}`}>
                            <Image
                                alt={`2025 picture of ${driver.givenName} ${driver.familyName}`}
                                className='object-top'
                                height={250}
                                loading='eager'
                                priority={true}
                                quality={25}
                                src={driver.mugshotUrl}
                                width={100}
                            />
                        </span>
                        <span className='flex gap-1 text-xl text-white group-hover:underline'>
                            {driver.givenName} {driver.familyName}
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
        <NavDropdownLayout data-slot='drivers-list'>
            <div className='mb-5 grid grid-cols-4 gap-2.5'>
                {drivers.map((driver, index) => (
                    <DriverBadge key={index} driver={driver} />
                ))}
            </div>
            <Separator className='dark' />
            <div className='my-4 flex gap-2'>
                {DriverButtonItems.map((item, index) => (
                    <Button asChild className='dark text-white' key={index} variant='ghost'>
                        <Link href={item.url}>{item.name}</Link>
                    </Button>
                ))}
            </div>
        </NavDropdownLayout>
    );
}
