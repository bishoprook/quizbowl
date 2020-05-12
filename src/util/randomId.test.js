import randomId from './randomId.js';

test('4 capital letters by default', () => {
    expect(randomId()).toMatch(/^[A-Z]{4}$/);
});

test('length can be configured', () => {
    expect(randomId({ length: 10 })).toMatch(/^[A-Z]{10}$/);
});

test('source can be configured', () => {
    expect(randomId({ source: '12' })).toMatch(/^[12]{4}$/);
});

test('allows seeding for predictability', () => {
    expect(randomId({ seed: 'foo' })).toStrictEqual(randomId({ seed: 'foo' }));
});

test('avoids collision with forbidden set', () => {
    const existing = randomId({ seed: 'foo' });
    expect(randomId({ seed: 'foo', forbid: [existing] })).not.toStrictEqual(existing);
});