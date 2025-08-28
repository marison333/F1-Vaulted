import Link from 'next/link';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/components/ui/sidebar';

const items = [
    { title: 'home', url: '/' },
    { title: 'schedule', url: '/schedule' },
    { title: 'drivers', url: '/drivers' },
    { title: 'teams', url: '/teams' },
    { title: 'results', url: '/results' }
];

export function MobileSidebar() {
    const isMobile = useSidebar();

    return (
        <Sidebar side='right' variant='floating'>
            <SidebarHeader>
                <span className='uppercase text-2xl font-bold'>formula 1 vaulted</span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            className='uppercase font-bold text-xl'
                                            href={item.url}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
