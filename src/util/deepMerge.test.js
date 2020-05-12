import deepMerge from './deepMerge.js';

const harness = (a, b, c) => expect(deepMerge(a, b)).toStrictEqual(c);

test('overwrites basic types with source', () => {
    harness(2, 7, 7);
});

test('merges arrays, target first', () => {
    harness(['a', 'b'], ['c'], ['a', 'b', 'c']);
});

test('merges object properties', () => {
    harness({ foo: 'bar' }, { baz: 'xyzzy' }, { foo: 'bar', baz: 'xyzzy' });
});

test('deep merges objects', () => {
    harness(
        { foo: { bar: { baz: ['xyzzy'] } } },
        { foo: { bar: { baz: ['plugh'] } } },
        { foo: { bar: { baz: ['xyzzy', 'plugh'] } } }
    );
});

test('does not mutate inputs', () => {
    const a = { foo: 'bar' };
    const b = { baz: 'xyzzy' };
    deepMerge(a, b);
    expect(a).toStrictEqual({ foo: 'bar' });
    expect(b).toStrictEqual({ baz: 'xyzzy' });
})