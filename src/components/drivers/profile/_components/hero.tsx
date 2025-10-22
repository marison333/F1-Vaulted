import { Driver } from '@/types';

interface DriverProfileProps {
    driver: Driver;
}

export const DriverHero = ({ driver }: DriverProfileProps) => {
    return (
        <div data-slot='driver-profile-hero'>
            {/* @TODO: 
        1. find a hand written font for the `givenName`
        2. add dynamically add team colors as gradient background
        3. add mask image to the background
        4. add driver mugshot in the middle and fade out at the bottom

        (Look at https://www.formula1.com/en/drivers/oscar-piastri for reference)
         */}
        </div>
    );
};
