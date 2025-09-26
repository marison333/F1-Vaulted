import { MobileSnapshot } from "./mobile"

export const ScheduleSnapshot = () => {
    return (
        <div data-slot='schedule-snapshot'>
            {/* @TODO: render mobile or desktop component based on screen width */}
            <MobileSnapshot />
        </div>
    )
}