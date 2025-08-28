'use client';

import { useIsMobile } from '@/hooks/use-mobile';

import DesktopNavigation from './_Components/desktop';
import MobileNavigation from './_Components/mobile';

export default function Navigation() {
    const isMobile = useIsMobile();
    console.log('isMobile', isMobile);

    return <header>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</header>;
}
