import seedrandom from 'seedrandom';

const randomId = ({
    length = 4,
    source = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    forbid = [],
    seed = null
} = {}) => {
    let rng = seedrandom(seed);
    let forbidSet = new Set(forbid);
    let result;
    do {
        result = Array.from(new Array(length))
            .map(() => Math.floor(rng() * source.length))
            .map(i => source[i])
            .join('');
    } while (forbidSet.has(result));
    return result;
}

export default randomId;
