import Link from 'next/link';
import { Driver, Team } from '@/types';

import DriversList from './_components/drivers-list';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import TeamsList from './_components/teams-list';

export default async function DesktopNavigation() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = {
        drivers: await fetch(`${baseUrl}/api/drivers`),
        teams: await fetch(`${baseUrl}/api/teams`)
    };

    const { data: driversData } = await response.drivers.json();
    const drivers: Driver[] = [...driversData].sort((a, b) =>
        (a.familyName || '').localeCompare(b.familyName || '')
    );

    const teamsData = await response.teams.json();
    const teams: Team[] = [...teamsData].sort((a, b) => (a.id || '').localeCompare(b.id || ''));

    return (
        <header>
            <div className='sticky top-0 left-0 right-0 z-10 w-full h-20 bg-zinc-900'>
                <div className='w-full xl:w-[90rem] mx-auto h-full flex items-center justify-between'>
                    <NavigationMenu>
                        <NavigationMenuList className='text-white'>
                            <NavigationMenuItem
                                asChild
                                className='hover:cursor-pointer border-none'>
                                <Link className='uppercase font-bold text-4xl' href='/'>
                                    <span>f1 vaulted</span>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {/* <RaceTimeline /> */}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[90rem] mx-auto py-4 flex gap-2 text-white'>
                                        {['races', 'drivers', 'teams'].map((name, index) => (
                                            <Button
                                                asChild
                                                className='dark'
                                                key={index}
                                                variant='secondary'>
                                                <Link
                                                    className='capitalize'
                                                    href={`/results/${name}`}>
                                                    {name}
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Drivers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <DriversList drivers={drivers} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <TeamsList teams={teams} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}
