function main() {
    console.log('jwt_decrypt');
    const [, , jwtToken] = process.argv;
    if (!jwtToken) {
        console.error('Error: Please provide a JWT token as an argument.');
        process.exit(1);
    }
    try {
        const { header, payload, signature } = decryptJwt(jwtToken);
        console.log('Header: ', header);
        console.log('Payload: ', payload);
        console.log('Signature: ', signature);
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

function splitToken(jwtToken) {
    if (typeof jwtToken !== 'string') {
        throw new TypeError('JWT token must be a string');
    }
    const parts = jwtToken.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid JWT format: Token must consist of 3 parts separated by dots');
    }
    return parts;
}

function base64Decode(base64String) {
    if (typeof base64String !== 'string') {
        throw new TypeError('Base64 input must be a string');
    }
    return Buffer.from(base64String, 'base64').toString('utf-8');
}

function decryptJwt(jwtToken) {
    const [header, payload, signature] = splitToken(jwtToken);
    return {
        header: base64Decode(header),
        payload: base64Decode(payload),
        signature: base64Decode(signature)
    };
}

if (require.main === module) {
    main();
}

module.exports = {
    splitToken,
    base64Decode,
    decryptJwt
};