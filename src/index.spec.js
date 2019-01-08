const slugger = require('./index');

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        //...your code here
        const input = slugger.slugger('hello world');
        expect(input).toEqual('hello-world');
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        //...your code here
        const inputs = slugger.slugger('i am a slugger', 'and me too')
        expect(inputs).toEqual('i-am-a-slugger-and-me-too');
    })
})