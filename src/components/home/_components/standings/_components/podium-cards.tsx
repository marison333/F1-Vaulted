import Image from 'next/image';
import clsx from 'clsx';
import { Card } from '@/components/ui/card';
import { FlagIcon } from '@/components/flag';

interface PodiumCardProps {
    className?: string;
    countryCode: string;
    countryName: string;
    familyName: string;
    givenName: string;
    imageUrl: string;
    points: number;
    position: 'first' | 'second' | 'third';
    team: string;
}

export default function PodiumCards({
    className,
    countryCode,
    countryName,
    familyName,
    givenName,
    imageUrl,
    points,
    position,
    team
}: PodiumCardProps) {
    return (
        <Card
            data-slot={`${position}-place-card`}
            className={clsx(
                'relative flex-row justify-stretch h-[18rem] md:w-[30rem] [&>*]:w-full overflow-hidden',
                position === 'first' && 'h-[20rem]',
                position === 'second' && 'h-[18rem]',
                position === 'third' && 'h-[16rem]',
                className
            )}>
            <div className='flex flex-col justify-between p-2'>
                <div>
                    <div>
                        <span className='font-extrabold'>
                            <span className='text-2xl'>
                                {position === 'first' ? '1' : position === 'second' ? '2' : '3'}
                            </span>
                            <span className='uppercase'>
                                {position === 'first' ? 'st' : position === 'second' ? 'nd' : 'rd'}
                            </span>
                        </span>
                    </div>
                    <div className='mb-3 flex-col gap-1 justify-items-start'>
                        <span className='flex gap-1 capitalize text-2xl'>
                            <span>{givenName}</span>
                            <span className='font-bold'>{familyName}</span>
                        </span>
                        <span className='capitalize text-sm'>{team}</span>
                    </div>
                    <FlagIcon iconUrl={countryCode} name={countryName} />
                </div>
                <div className=''>
                    <span className='font-extrabold'>
                        <span className='text-2xl'>{points}</span>
                        <span className='text-lg'>pts</span>
                    </span>
                </div>
            </div>
            <div className='w-full'>
                <Image
                    alt='name'
                    className='object-center w-max'
                    height={400}
                    src={imageUrl}
                    width={200}
                />
            </div>
        </Card>
    );
}
