import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getDriverByName } from '@/lib/data/drivers';

import DriverProfile from '@/components/drivers/profile';

interface DriverPageProps {
    params: {
        name: string;
    };
}

export async function generateMetadata({ params }: DriverPageProps): Promise<Metadata> {
    const searchName = decodeURIComponent(params.name.replace(/-/g, ' '));

    const driver = await getDriverByName(searchName).catch(() => null);

    if (!driver) {
        return {
            title: 'Driver Not Found',
            description: 'The requested driver profile could not be found.'
        };
    }

    const fullName = `${driver.givenName} ${driver.familyName}`;
    return {
        title: fullName,
        description: `View profile and information for Formula 1 driver ${fullName}`
    };
}

export default async function DriverPage({ params }: DriverPageProps) {
    const searchName = decodeURIComponent(params.name.replace(/-/g, ' '));

    const driver = await getDriverByName(searchName).catch((error) => {
        console.error(`Failed to fetch driver: ${searchName}`, error);
        return null;
    });

    if (!driver) notFound();

    return <DriverProfile driver={driver} />;
}
