
export type GeneratedType = 'component' | 'component-spec' | 'html' | 'module' | 'sass' | 'spec'
    | 'store' | 'store-spec';

export const COMPONENT: GeneratedType = 'component';
export const COMPONENT_SPEC: GeneratedType = 'component-spec';
export const HTML: GeneratedType = 'html';
export const MODULE: GeneratedType = 'module';
export const SASS: GeneratedType = 'sass';
export const STORE: GeneratedType = 'store';
export const STORE_SPEC: GeneratedType = 'store-spec';

export interface IGeneratedTypeInfos {
    fileLabelAdditional: string;
    templateFile: string;
}

export const TYPES_MAP: Map<GeneratedType, IGeneratedTypeInfos> = new Map([
    [COMPONENT, {
        fileLabelAdditional: '.component.ts',
        templateFile: 'component-template.ts'
    }],
    [HTML, {
        fileLabelAdditional: '.component.html',
        templateFile: 'html-template.html'
    }],
    [MODULE, {
        fileLabelAdditional: '.module.ts',
        templateFile: 'module-template.ts'
    }],
    [SASS, {
        fileLabelAdditional: '.component.scss',
        templateFile: 'sass-template.scss'
    }],
    [STORE, {
        fileLabelAdditional: '-store.ts',
        templateFile: 'store-template.ts'
    }],
    [COMPONENT_SPEC, {
        fileLabelAdditional: '.component.spec.ts',
        templateFile: 'spec-template.spec.ts'
    }],
    [STORE_SPEC, {
        fileLabelAdditional: '-store.spec.ts',
        templateFile: 'spec-store-template.spec.ts'
    }]
]);
