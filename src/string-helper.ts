/**
 * Created by Trajan on 27/04/2017.
 */

export class StringHelper {

    static extendString(): void {

        let self: StringHelper = this;

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

    }

    /* To be converted, a string must be in lower camel case */
    private _isValid(str: string): void {

        if (false) { // TODO
            throw new Error(`The string ${str} can't be converted. It must be lower camel case`);
        }

    }

    private _toCamelCase(str: string): string {
        this._isValid(str);
        return str; // TODO
    }

    private _toCamelFirstUpper(str: string): string {
        this._isValid(str);
        return str; // TODO
    }

    private _toSnakeCase(str: string): string {
        this._isValid(str);
        return str; // TODO
    }

}
