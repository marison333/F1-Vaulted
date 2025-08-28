import type { Metadata } from 'next';
import './styles/globals.css';

import { SidebarProvider } from '@/components/ui/sidebar';

import BaseLayout from '@/components/layouts/base-layout';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
    title: {
        template: '%s - Formula 1 Vaulted',
        default: 'Formula 1 Vaulted'
    },
    description:
        'Formula 1 statistic tracker, track your favorite drivers and teams. Get the latest championship standings.',
    keywords:
        'f1, formula 1, statistic tracker, formula 1 statistic tracker, f1 stat tracker, f1 stats, f1 championship standings, f1 drivers, f1 teams, f1 drivers standings, f1 teams standings, f1 drivers championship standings, f1 teams championship standings',
    creator: 'Marison'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en-nl'>
            <body>
                <SidebarProvider>
                    <div className='sm:grid sm:grid-cols-[1fr] sm:grid-rows-[auto,1fr,auto] min-h-screen'>
                        <Navigation />
                        <BaseLayout>{children}</BaseLayout>
                        <Footer />
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
