'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';

const sectionLabels: string[] = ['overview', 'statistics', 'news'];

const executeScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const headerButtons = () => {
    return (
        <div className='flex'>
            {sectionLabels.map((button) => (
                <Button
                    className='capitalize'
                    key={button}
                    onClick={() => executeScroll(button)}
                    variant='link'>
                    {button}
                </Button>
            ))}
        </div>
    );
};

const ProfileSectionSelect = () => {
    return (
        <Select>
            <SelectTrigger className='w-32 px-2 py-1 border-transparent bg-transparent'>
                <SelectValue placeholder='Select Section' />
            </SelectTrigger>
            <SelectContent>
                {sectionLabels.map((button) => (
                    <SelectItem key={button} value={button} onSelect={() => executeScroll(button)}>
                        {button}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export const DriverHeader = () => {
    return (
        <div
            className='absolute h-[2.5rem] w-full left-0 top-20 bg-slate-100 border border-b-transparent'
            data-slot='driver-header'>
            <div className='relative max-w-[90rem] mx-auto flex items-center justify-between'>
                <Button asChild className='capitalize' variant='ghost'>
                    <Link href='/drivers'>
                        <ArrowLeft />
                        Back to Drivers
                    </Link>
                </Button>
                {/* if the screen width is less than 767px render the ProfileSectionSelect component otherwise render the headerButtons */}
                <div>
                    <div className='hidden md:flex'>{headerButtons()}</div>
                    <div className='md:hidden'>
                        <ProfileSectionSelect />
                    </div>
                </div>
            </div>
        </div>
    );
};
