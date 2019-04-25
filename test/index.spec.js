let chai = require('chai');
let expect = chai.expect;
let piece = require('../index');

describe('cardValidator', () => {
    it('Deveria retornar true para número de cartão 3782 8224 6310 00 5', () => {
        expect(piece.cardValidator('378282246310005')).to.equal(true);
    });
    it('Deveria retornar false para número de cartão 3782 8224 6310 00 4', () => {
        expect(piece.cardValidator('378282246310004')).to.equal(false);
    });
    it('Deveria retornar false para número de cartão 799 273 9871 6', () => {
        expect(piece.cardValidator('79927398716')).to.equal(false);
    });
    it('Deveria retornar false para número de cartão 0000 0000 0000 00 0', () => {
        expect(piece.cardValidator('000000000000000')).to.equal(false);
    });
});