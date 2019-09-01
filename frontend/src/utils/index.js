import { formatDistanceToNow } from 'date-fns';

export const slugify = str =>
    require('slugify')(str, {
        remove: /[*+~.()'"!:$@#]/g,
        lower: true
    });

export const formatTimeDistance = time =>
    formatDistanceToNow(new Date(time), {
        addSuffix: true
    });

export const getAlertColor = type => {
    if (type === `success`) {
        return `green`;
    } else if (type === `failure`) {
        return `red`;
    } else if (type === `info`) {
        return `grey`;
    }
};

/*
|--------------------------------------------------------------------------
| HARDCODE
|--------------------------------------------------------------------------
*/

export const stageList = [
    'applied',
    'screened',
    'interviewed',
    'second_interviewed',
    `failed`
];
