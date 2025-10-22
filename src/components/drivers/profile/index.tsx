import { Driver } from '@/types';

import { DriverHeader } from './_components/driver-header';

interface DriverProfileProps {
    driver: Driver;
}

export default function DriverProfile({ driver }: DriverProfileProps) {
    return (
        <>
            <DriverHeader />
            <h1>{`${driver.givenName} ${driver.familyName}`}</h1>
        </>
    );
}
