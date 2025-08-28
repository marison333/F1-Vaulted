'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Driver, GrandPrix, Team } from '@/types';
import { getDrivers } from '@/lib/data/drivers';
import { getTeams } from '@/lib/data/teams';
import { getGrandPrixData } from '@/lib/data/grand-prix';

import DriversList from './_components/drivers-list';
import NavDropdownLayout from '@/components/layouts/nav-dropdown-layout';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import RaceEvents from './_components/race-events';
import ResultsLinks from './_components/results-links';
import TeamsList from './_components/teams-list';

export default function DesktopNavigation() {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [races, setRaces] = useState<GrandPrix[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const [driversData, teamsData, racesData] = await Promise.all([
                getDrivers(),
                getTeams(),
                getGrandPrixData()
            ]);
            setDrivers(
                [...driversData].sort((a, b) =>
                    (a.familyName || '').localeCompare(b.familyName || '')
                )
            );
            setTeams([...teamsData].sort((a, b) => (a.id || '').localeCompare(b.id || '')));
            setRaces(
                [...racesData].sort((a, b) => (a.dateStart || '').localeCompare(b.dateStart || ''))
            );
            setLoading(false);
        }
        fetchData();
    }, []);

    const upcomingRaces = races.slice(0, 4);

    if (loading) {
        return (
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
                                    <NavDropdownLayout>
                                        <span>...loading</span>
                                    </NavDropdownLayout>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavDropdownLayout>
                                        <span>...loading</span>
                                    </NavDropdownLayout>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Drivers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavDropdownLayout>
                                        <span>...loading</span>
                                    </NavDropdownLayout>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavDropdownLayout>
                                        <span>...loading</span>
                                    </NavDropdownLayout>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        );
    }

    return (
        <div className='sticky top-0 left-0 right-0 z-10 w-full h-20 bg-zinc-900'>
            <div className='w-full xl:w-[90rem] mx-auto h-full flex items-center justify-between'>
                <NavigationMenu>
                    <NavigationMenuList className='text-white'>
                        <NavigationMenuItem asChild className='hover:cursor-pointer border-none'>
                            <Link className='uppercase font-bold text-4xl' href='/'>
                                <span>f1 vaulted</span>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <RaceEvents races={upcomingRaces} />
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ResultsLinks />
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
    );
}
