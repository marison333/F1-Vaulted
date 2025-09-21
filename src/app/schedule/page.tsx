import { ScheduleOverview } from '@/components/schedule';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Schedule 2025'
};

export default function SchedulePage() {
    return <ScheduleOverview />;
}
