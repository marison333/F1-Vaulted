import Image from 'next/image';

export const FlagIcon = ({ name, iconUrl }: { name: string; iconUrl: string }) => {
    return (
        <>
            <div data-slot='flag' className='rounded-[0.1rem]'>
                <Image
                    alt={`${name} flag`}
                    height={24}
                    objectFit='contain'
                    src={`/icons/flags/${iconUrl}.svg`}
                    width={30}
                />
                <span className='sr-only'>{name} flag</span>
            </div>
        </>
    );
};

export const FlagIconWithText = ({ name, iconUrl }: { name: string; iconUrl: string }) => {
    return (
        <div className='flex items-center gap-2'>
            {FlagIcon({ name, iconUrl })}
            <span className='text-sm font-semibold'>{name}</span>
        </div>
    );
};
