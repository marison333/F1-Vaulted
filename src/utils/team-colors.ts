export const getTeamVariable = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return '--alpine';
        case 'aston-martin':
            return '--aston-martin';
        case 'ferrari':
            return '--ferrari';
        case 'haas':
            return '--haas';
        case 'kick-sauber':
            return '--kick-sauber';
        case 'mclaren':
            return '--mclaren';
        case 'mercedes':
            return '--mercedes';
        case 'racing-bulls':
            return '--racing-bulls';
        case 'red-bull':
            return '--red-bull';
        case 'williams':
            return '--williams';
        default:
            return '--gray-500';
    }
};

export const getTeamGradientClass = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return 'from-alpine';
        case 'aston-martin':
            return 'from-aston-martin';
        case 'ferrari':
            return 'from-ferrari';
        case 'haas':
            return 'from-haas';
        case 'kick-sauber':
            return 'from-kick-sauber';
        case 'mclaren':
            return 'from-mclaren';
        case 'mercedes':
            return 'from-mercedes';
        case 'racing-bulls':
            return 'from-racing-bulls';
        case 'red-bull':
            return 'from-red-bull';
        case 'williams':
            return 'from-williams';
        default:
            return 'from-gray-500';
    }
};
export const getTeamGradientDarkClass = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return 'to-alpine-dark';
        case 'aston-martin':
            return 'to-aston-martin-dark';
        case 'ferrari':
            return 'to-ferrari-dark';
        case 'haas':
            return 'to-haas-dark';
        case 'kick-sauber':
            return 'to-kick-sauber-dark';
        case 'mclaren':
            return 'to-mclaren-dark';
        case 'mercedes':
            return 'to-mercedes-dark';
        case 'racing-bulls':
            return 'to-racing-bulls-dark';
        case 'red-bull':
            return 'to-red-bull-dark';
        case 'williams':
            return 'to-williams-dark';
        default:
            return 'to-stone-800';
    }
};

const DEFAULT_VAR = '--gray-500';
const DEFAULT_BG = 'bg-gray-500';
const DEFAULT_FROM = 'from-gray-500';
const DEFAULT_TO = 'to-stone-800';

export const teamBackgroundColor = (teamId: string): string => {
    const cssVar = getTeamVariable(teamId);
    return cssVar === DEFAULT_VAR ? DEFAULT_BG : `bg-[rgb(var(${cssVar}))]`;
};

export const teamGradientColor = (teamId: string): string => {
    const cssVar = getTeamGradientClass(teamId);
    return cssVar === DEFAULT_FROM ? DEFAULT_FROM : cssVar;
};

export const darkTeamGradientColor = (teamId: string): string => {
    const cssVar = getTeamGradientDarkClass(teamId);
    return cssVar === DEFAULT_TO ? DEFAULT_TO : cssVar;
};
