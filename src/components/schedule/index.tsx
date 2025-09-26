import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';
import { ScheduleSnapshot } from './_components/snapshot';

export function ScheduleOverview() {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <div>
                    <h1 className='uppercase'>2025 formula one world championship</h1>
                    <h2 className='text-3xl font-black uppercase'>race calendar</h2>
                </div>
                <Button className='rounded-full bg-amber-600' size='lg'>
                    <Calendar />
                    Add F1 calendar
                </Button>
            </div>
            <ScheduleSnapshot />
        </div>
    );
}
