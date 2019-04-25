let chai = require('chai');
let expect = chai.expect;
let piece = require('../index');

describe('cardValidator', () => {
    it('Deveria retornar true para número de cartão 7992739871-3', () => {
        expect(piece.cardValidator('79927398713')).to.equal(true);
    });
    it('Deveria retornar true para número de cartão 7992739871-6', () => {
        expect(piece.cardValidator('79927398716')).to.equal(true);
    });
});