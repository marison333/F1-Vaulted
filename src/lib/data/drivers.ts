import { Driver } from '@/types';
import drivers from '@/mock/drivers';

export async function getDrivers(): Promise<Driver[]> {
    return drivers;
}

export function getDriverByName(searchName: string): Promise<Driver> {
    const sanitizedSearchName = searchName;

    const driver = drivers.find((driver) => {
        const fullName = `${driver.givenName} ${driver.familyName}`.toLowerCase();

        return (
            fullName === sanitizedSearchName.toLowerCase() ||
            fullName.replace(/\s+/g, '-') === sanitizedSearchName
        );
    });

    if (!driver) {
        return Promise.reject(new Error(`Driver not found: ${searchName}`));
    }

    return Promise.resolve(driver);
}
