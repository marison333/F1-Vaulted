import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getDriverByName } from '@/lib/data/drivers';
import { Driver } from '@/types';

interface DriverPageProps {
    params: Promise<{
        name: string;
    }>;
}

export async function generateMetadata({ params }: DriverPageProps): Promise<Metadata> {
    const { name } = await params;
    const searchName = decodeURIComponent(name.replace(/-/g, ' '));

    try {
        const driver = await getDriverByName(searchName);
        const fullName = `${driver.givenName} ${driver.familyName}`;

        return {
            title: `${fullName}`,
            description: `View profile and information for Formula 1 driver ${fullName}`
        };
    } catch (error) {
        return {
            title: 'Driver Not Found',
            description: 'The requested driver could not be found'
        };
    }
}

export default async function DriverPage({ params }: DriverPageProps) {
    const { name } = await params;
    const searchName = name.replace(/-/g, ' ');

    let driver: Driver;
    try {
        driver = await getDriverByName(searchName);
    } catch (error) {
        console.error(`Failed to fetch driver: ${searchName}`, error);
        notFound();
    }

    return <h1>{`${driver.givenName} ${driver.familyName}`}</h1>;
}
