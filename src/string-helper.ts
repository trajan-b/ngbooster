
import {
    DECORATE_BEGIN_CONDITIONAL,
    DECORATE_END_CONDITIONAL,
    DECORATE_STRING_FOR_CONDITIONAL,
    DECORATE_STRING_FOR_REPLACEMENT
} from './replacements-map';

declare global {
    interface String {
        decorateForReplacement: Function;
        decorateBeginConditional: Function;
        decorateEndConditional: Function;
        decorateForConditional: Function;
        replaceAll: Function;
        toCamelCase: Function;
        toCamelFirstUpper: Function;
        toSnakeCase: Function;
    }
}

export class StringHelper {

    public extendString(): void {

        let self: StringHelper = this;

        String.prototype.decorateForReplacement = function {
            return DECORATE_STRING_FOR_REPLACEMENT(this);
        };

        String.prototype.decorateBeginConditional = function(identifier: string) {
            return DECORATE_BEGIN_CONDITIONAL(this, identifier);
        };

        String.prototype.decorateEndConditional = function(identifier: string) {
            return DECORATE_END_CONDITIONAL(this, identifier);
        };

        String.prototype.decorateForConditional = function(identifier: string) {
            return DECORATE_STRING_FOR_CONDITIONAL(this, identifier);
        };

        /* We purposely dont use arrow function because of `this` */
        String.prototype.toCamelCase = function {
            return self._toCamelCase(this);
        };

        String.prototype.toCamelFirstUpper = function {
            return self._toCamelFirstUpper(this);
        };

        String.prototype.toSnakeCase = function {
            return self._toSnakeCase(this);
        };

        String.prototype.replaceAll = function(search: string, replacement: string) {
            return this.replace(new RegExp(search, 'g'), replacement);
        };

    }

    /* To be converted, a string must be in lower camel case */
    private _isValid(str: string): void {
        if (str == null || str.length === 0) {
            throw new Error(`The string ${str} can't be converted. It must be lower camel case`);
        }
        str = str.toLowerCase();
    }

    private _toCamelCase(str: string): string {
        this._isValid(str);
        let camelStrAllUp: string = this._toCamelFirstUpper(str);
        return camelStrAllUp.charAt(0).toLowerCase() + camelStrAllUp.slice(1);
    }

    private _toCamelFirstUpper(str: string): string {
        this._isValid(str);
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    }

    private _toSnakeCase(str: string): string {
        this._isValid(str);
        return str.replaceAll('-', '_');
    }

}
