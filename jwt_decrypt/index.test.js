const test = require('node:test');
const assert = require('node:assert/strict');
const { splitToken, base64Decode, decryptJwt } = require('./index.js');

const SAMPLE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

test('splitToken', async (t) => {
    await t.test('should split a valid JWT into header, payload, and signature', () => {
        const parts = splitToken(SAMPLE_JWT);
        assert.equal(parts.length, 3);
        assert.equal(parts[0], 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
        assert.equal(parts[1], 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ');
        assert.equal(parts[2], 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    });

    await t.test('should throw TypeError when argument is not a string', () => {
        assert.throws(() => splitToken(123), TypeError);
    });

    await t.test('should throw Error when token format is invalid (not 3 parts)', () => {
        assert.throws(() => splitToken('part1.part2'), {
            message: 'Invalid JWT format: Token must consist of 3 parts separated by dots'
        });
        assert.throws(() => splitToken('part1.part2.part3.part4'), {
            message: 'Invalid JWT format: Token must consist of 3 parts separated by dots'
        });
    });
});

test('base64Decode', async (t) => {
    await t.test('should correctly decode a base64 encoded string', () => {
        const encodedHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
        const decoded = base64Decode(encodedHeader);
        assert.equal(decoded, '{"alg":"HS256","typ":"JWT"}');
    });

    await t.test('should throw TypeError when input is not a string', () => {
        assert.throws(() => base64Decode(null), TypeError);
    });
});

test('decryptJwt', async (t) => {
    await t.test('should successfully decrypt a full JWT token', () => {
        const result = decryptJwt(SAMPLE_JWT);
        assert.deepEqual(result, {
            header: '{"alg":"HS256","typ":"JWT"}',
            payload: '{"sub":"1234567890","name":"John Doe","iat":1516239022}',
            signature: 'M¬ÇDE¼D¾\u001fÀÀæI¾ï§Sö\u0005÷ºÕ<\u0017'
        });
    });

    await t.test('should propagate error for invalid JWT input', () => {
        assert.throws(() => decryptJwt('invalid_token'), {
            message: 'Invalid JWT format: Token must consist of 3 parts separated by dots'
        });
    });
});
