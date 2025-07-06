import { RaceResult } from "@/types";
import createMockRaceResult from "@/mock/race-results";

export async function GET(): Promise<Response> {
    const RaceResults: RaceResult[] = [createMockRaceResult()];

    return new Response(JSON.stringify(RaceResults), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}