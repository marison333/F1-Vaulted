import Link from 'next/link';
import Image from 'next/image';

import { Card } from '@/components/ui/card';

const heroItems = [
    { href: '/drivers', imageSrc: '/images/home/hero/driver.png', text: 'drivers' },
    { href: '/results', imageSrc: '/images/home/hero/battle.png', text: 'results' }
];

export default function Hero() {
    return (
        <div
            className='relative flex flex-wrap md:grid md:grid-cols-2 gap-2 px-1.5 mx-auto [&>*]:border-zinc-950'
            data-slot='hero'>
            {heroItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                    <Card className='relative h-[40vh] w-full md:h-[55vh] md:w-full mx-auto flex col-span-1 overflow-hidden'>
                        <Image
                            alt={`Hero image #${index + 1}`}
                            className='relative object-cover md:object-top md:size-full'
                            height={500}
                            priority
                            src={`${item.imageSrc}`}
                            width={500}
                        />
                        <div className='bg-gradient-to-b from-transparent to-black absolute z-5 bottom-0 left-0 right-0 p-4 w-full'>
                            <span className='text-white text-2xl font-semibold'>
                                {`Find all 2025 ${item.text}`}
                            </span>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
