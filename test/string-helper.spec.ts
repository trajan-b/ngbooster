import {StringHelper} from '../src/string-helper';

describe('StringHelper', () => {

    beforeEach(() => {

    });

    it('should test StringHelper', () => {

        let str: string = 'rabbit';
        expect(str.decorateForReplacement).toBeUndefined();
        expect(str.decorateBeginConditional).toBeUndefined();
        expect(str.decorateEndConditional).toBeUndefined();
        expect(str.decorateForConditional).toBeUndefined();
        expect(str.replaceAll).toBeUndefined();
        expect(str.toCamelCase).toBeUndefined();
        expect(str.toCamelFirstUpper).toBeUndefined();
        expect(str.toSnakeCase).toBeUndefined();

        let st: StringHelper = new StringHelper();
        st.extendString();

        let str2: string = 'wolf';
        expect(str2.decorateForReplacement).toBeUndefined();
        expect(str2.decorateBeginConditional).toBeUndefined();
        expect(str2.decorateEndConditional).toBeUndefined();
        expect(str2.decorateForConditional).toBeUndefined();
        expect(str2.replaceAll).toBeUndefined();
        expect(str2.toCamelCase).toBeUndefined();
        expect(str2.toCamelFirstUpper).toBeUndefined();
        expect(str2.toSnakeCase).toBeUndefined();

    });

});
