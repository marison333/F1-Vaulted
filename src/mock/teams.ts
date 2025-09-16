import { Team } from '../types/index';
import nationality from './nationality';

const teams: Team[] = [
    {
        id: 'ferrari',
        name: 'Scuderia Ferrari',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
        drivers: {
            first: {
                familyName: 'Leclerc',
                givenName: 'Charles',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp'
            },
            second: {
                familyName: 'Hamilton',
                givenName: 'Lewis',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp'
            }
        }
    },
    {
        id: 'mercedes',
        name: 'Mercedes-AMG Petronas Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
        drivers: {
            first: {
                familyName: 'Russell',
                givenName: 'George',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp'
            },
            second: {
                givenName: 'Kimi',
                familyName: 'Antonelli',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp'
            }
        }
    },
    {
        id: 'red-bull',
        name: 'Red Bull Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
        drivers: {
            first: {
                familyName: 'Verstappen',
                givenName: 'Max',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp'
            },
            second: {
                familyName: 'Tsunoda',
                givenName: 'Yuki',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp'
            }
        }
    },
    {
        id: 'mclaren',
        name: 'McLaren Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
        drivers: {
            first: {
                familyName: 'Norris',
                givenName: 'Lando',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp'
            },
            second: {
                familyName: 'Piastri',
                givenName: 'Oscar',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp'
            }
        }
    },
    {
        id: 'alpine',
        name: 'BTW Alpine Formula 1 Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp',
        drivers: {
            first: {
                familyName: 'Gasly',
                givenName: 'Pierre',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01right.webp'
            },
            second: {
                givenName: 'Franco',
                familyName: 'Colapinto',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01right.webp'
            }
        }
    },
    {
        id: 'kick-sauber',
        name: 'Stake F1 Team Kick Sauber',
        nationality: nationality[11],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksaubercarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksauberlogowhite.webp',
        drivers: {
            first: {
                familyName: 'Hülkenberg',
                givenName: 'Nico',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01right.webp'
            },
            second: {
                givenName: 'Gabriel',
                familyName: 'Bortoleto',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp'
            }
        }
    },
    {
        id: 'aston-martin',
        name: 'Aston Martin Aramco Formula One Team',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartincarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
        drivers: {
            first: {
                familyName: 'Piastri',
                givenName: 'Oscar',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp'
            },
            second: {
                familyName: 'Alonso',
                givenName: 'Fernando',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp'
            }
        }
    },
    {
        id: 'racing-bulls',
        name: 'Visa Cash App racing Bulls Formula 1 Team',
        nationality: nationality[2],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullscarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
        drivers: {
            first: {
                givenName: 'Liam',
                familyName: 'Lawson',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01right.webp'
            },
            second: {
                givenName: 'Isack',
                familyName: 'Hadjar',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01right.webp'
            }
        }
    },
    {
        id: 'haas',
        name: 'MonetGram Haas F1 Team',
        nationality: nationality[4],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/haas/2025haascarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/haas/2025haaslogowhite.webp',
        drivers: {
            first: {
                familyName: 'Ocon',
                givenName: 'Esteban',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/estoco01/2025haasestoco01right.webp'
            },
            second: {
                givenName: 'Oliver',
                familyName: 'Bearman',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp'
            }
        }
    },
    {
        id: 'williams',
        name: 'Atlassian Williams Racing',
        nationality: nationality[1],
        carImageUrl:
            'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/common/f1/2025/williams/2025williamscarright.webp',
        iconUrl:
            'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
        drivers: {
            first: {
                familyName: 'Albon',
                givenName: 'Alexander',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp'
            },
            second: {
                familyName: 'Sainz',
                givenName: 'Carlos',
                mugshotUrl:
                    'https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp'
            }
        }
    }
];

export default teams;
