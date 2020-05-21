const filterValues = (source, predicate) => {
    return Object.keys(source)
        .filter(key => predicate(source[key], key))
        .reduce((result, key) => Object.assign(result, { [key]: source[key] }), {});
};

export default filterValues;
