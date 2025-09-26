import { SnapshotCard } from '../_components/snapshot-card';

export const MobileSnapshot = () => {
    return (
        <div className='flex flex-col gap-4' data-slot='mobile-schedule-snapshot'>
            <p className='text-3xl font-black'>next</p>
            {/* @TODO: get prop dynamiclly */}
            <SnapshotCard
                date='03 -05 oct'
                imageUrl='https://media.formula1.com/image/upload/c_lfill,w_1296/q_auto/v1740000000/fom-website/static-assets/2025/races/card/singapore.webp'
                round={19}
                title='Singapore'
            />
        </div>
    );
};
