/**
 * Created by Trajan on 25/04/2017.
 */

export const CAMEL_NAME: string = '<%=camelName%>';
export const CAMEL_NAME_FIRST_UP: string = '<%=camelNameFirstUpper%>';
export const DASH_NAME: string = '<%=dashName%>';
export const INPUTS: string = '<%=inputs%>';
export const OUTPUTS: string = '<%=outputs%>';

export const REPLACEMENTS_MAP: Map<string, string> = new Map<string, string> ([
    [CAMEL_NAME, ''],
    [CAMEL_NAME_FIRST_UP, ''],
    [DASH_NAME, ''],
    [INPUTS, ''],
    [OUTPUTS, '']
]);

export const DECORATE_STRING_FOR_REPLACEMENT: Function = (str: string) => {
    return `<%=${str}%>`;
};
