// fdescribe = for only run this Test
// xdescribe = for exclude this test
describe("My Unit Testing",()=>{
    let expected = '';
    let notExpected = '';
    let matchExpected = null;

    beforeEach(()=>{
        expected = 'hello';
        notExpected = 'hi';
        matchExpected = new RegExp(/^hello/);
    })

    afterEach(()=>{
        expected = '';
        notExpected = '';
    })

    it('test hello is = hello',()=>{
        expect("hello").toBe(expected);
    })
    it('test hello is not hello',()=>{
        expect("hello").not.toBe(notExpected);
    })
    it('test starts with hello',()=>{
        expect("hello radhe krishna").toMatch(matchExpected);
    })
})