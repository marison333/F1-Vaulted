import { FlagIconWithText } from '@/components/flag';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

interface StandingsTableProps {
    drivers: {
        position: number;
        driver: {
            countryCode: string;
            countryName: string;
            name: string;
            points: number;
            team: string;
        };
    }[];
    teams: {
        position: number;
        team: {
            name: string;
            points: number;
        };
    }[];
    type: 'drivers' | 'teams';
    className?: string;
}

export default function StandingsTable(props: StandingsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow className='[&>*]:uppercase'>
                    <TableHead>pos.</TableHead>
                    <TableHead>driver</TableHead>
                    <TableHead>nationality</TableHead>
                    <TableHead>team</TableHead>
                    <TableHead className='text-right'>pts.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.type === 'drivers' &&
                    props.drivers.map((driver) => (
                        <TableRow key={driver.position}>
                            <TableCell>{driver.position}</TableCell>
                            <TableCell>{driver.driver.name}</TableCell>
                            <TableCell>
                                <FlagIconWithText
                                    iconUrl={driver.driver.countryCode}
                                    name={driver.driver.countryName}
                                />
                            </TableCell>
                            <TableCell>{driver.driver.team}</TableCell>
                            <TableCell className='text-right'>{driver.driver.points}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
}
