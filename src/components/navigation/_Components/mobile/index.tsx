import Link from 'next/link';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { MobileSidebar } from './_components/sidebar';

export default function MobileNavigation() {
    return (
        <>
            <div className='sticky w-screen h-20 p-2 flex items-center bg-zinc-900'>
                <div className='w-full flex justify-between text-white'>
                    <Link className='uppercase font-bold text-2xl' href='/'>
                        <span>f1 vaulted</span>
                    </Link>
                    <SidebarTrigger />
                </div>
            </div>
            <MobileSidebar />
        </>
    );
}
