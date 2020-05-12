const deepMerge = (target, source) => {
    if (target.constructor === Array && source.constructor === Array) {
        return [].concat(target).concat(source);
    }
    else if (target.constructor === Object && source.constructor === Object) {
        const sourceProps = new Set(Object.keys(source));
        const targetProps = new Set(Object.keys(target));
    
        const oldProps = [...targetProps].filter(p => !sourceProps.has(p));
        const newProps = [...sourceProps].filter(p => !targetProps.has(p));
        const mergeProps = [...targetProps].filter(p => sourceProps.has(p));
    
        const result = {};
        oldProps.forEach(p => result[p] = target[p]);
        newProps.forEach(p => result[p] = source[p]);
        mergeProps.forEach(p => result[p] = deepMerge(target[p], source[p]));
        return result;
    }
    else {
        return source;
    }
}

export default deepMerge;