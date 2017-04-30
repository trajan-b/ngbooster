/**
 * Created by Trajan on 25/04/2017.
 */

export const CAMEL_NAME: string = '<%=camelName%>';
export const CAMEL_NAME_FIRST_UP: string = '<%=camelNameFirstUpper%>';
export const DASH_NAME: string = '<%=dashName%>';
export const INPUTS: string = '<%=inputs%>';
export const OUTPUTS: string = '<%=outputs%>';

export const DECORATE_STRING_FOR_REPLACEMENT: Function = (str: string) => {
    return `<%=${str}%>`;
};

export const DECORATE_STRING_FOR_CONDITIONAL: Function = (str: string) => {
    return `<!--begin-${str}[^]*end-${str}-->\n`;
};

export const DECORATE_BEGIN_CONDITIONAL: Function = (str: string) => {
    return `<!--begin-${str}`;
};

export const DECORATE_END_CONDITIONAL: Function = (str: string) => {
    return `end-${str}-->\n`;
};
