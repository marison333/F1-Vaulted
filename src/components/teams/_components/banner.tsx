import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const DriverBanner = () => {
    return (
        <Card className='h-[20rem] p-5 my-10 bg-amber-600 text-white' data-slot='driver-banner'>
            <div className='w-full mt-auto'>
                <h2 className='uppercase text-4xl font-extrabold'>2025 f1 drivers</h2>
                <p>
                    Check out this season&apos;s official F1 line-up by following your favourite F1
                    drivers on and off the track.
                </p>
                <Button asChild className='bg-white text-black' size='lg'>
                    <Link href='/drivers'>View drivers</Link>
                </Button>
            </div>
        </Card>
    );
};
