import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StandingsButtonProps {
    className?: string;
    destination: string;
}

export default function StandingsButton(props: StandingsButtonProps) {
    return (
        <div className={cn('flex justify-center', props.className)}>
            <Button asChild variant='link' className='text-xl w-fit' data-slot='standings-button'>
                <Link href={`/results/${props.destination}`}>View Standings</Link>
            </Button>
        </div>
    );
}
