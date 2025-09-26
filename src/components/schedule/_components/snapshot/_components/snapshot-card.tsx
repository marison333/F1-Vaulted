import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface SnapshotCardProps {
    date: string;
    imageUrl: string;
    round: number;
    title: string;
}

export const SnapshotCard = ({ date, imageUrl, round, title }: SnapshotCardProps) => {
    // @TODO: create layout for tablets with cards
    return (
        <Link href=''>
            <Card className='relative z-0 h-[17rem] w-full text-white overflow-hidden'>
                <Image
                    alt={`Background image of ${title} circuit`}
                    className='absolute object-cover block size-full'
                    height={500}
                    src={imageUrl}
                    width={500}
                />
                <span className='absolute block size-full bg-black/45' />
                <span className='relative z-20 size-full p-8 flex flex-col gap-0.5 justify-start'>
                    <span className='uppercase '>{`round ${round}`}</span>
                    <span className='text-3xl capitalize font-black'>{title}</span>
                    <span className='uppercase'>{date}</span>
                </span>
            </Card>
        </Link>
    );
};
