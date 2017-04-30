/**
 * Created by Trajan on 27/04/2017.
 */
import {DECORATE_STRING_FOR_REPLACEMENT} from './replacements-map';

declare global {
    interface String {
        decorate: Function;
        replaceAll: Function;
        toCamelCase: Function;
        toCamelFirstUpper: Function;
        toSnakeCase: Function;
    }
}

export class StringHelper {

    public extendString(): void {

        let self: StringHelper = this;

        String.prototype.decorate = function {
            return DECORATE_STRING_FOR_REPLACEMENT(this);
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
