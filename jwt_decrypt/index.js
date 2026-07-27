const fs = require('node:fs');

function main() {
    console.log('jwt_decrypt');
    const [, , jwtToken] = process.argv;
    console.log(jwtToken);
    const [header, payload, signature] = splitToken(jwtToken);
    console.log('Header: ', base64Decode(header));
    console.log('Payload: ', base64Decode(payload));
    console.log('Signature: ', base64Decode(signature));
}

function splitToken(jwtToken) {
    return jwtToken.split('.');
}

function base64Decode(base64String) {
    return Buffer.from(base64String, 'base64').toString('utf-8');
}

main();