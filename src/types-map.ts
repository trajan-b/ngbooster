
export type GeneratedType = 'component' | 'component-spec' | 'component-module' | 'html' | 'sass' | 'spec'
    | 'store' | 'store-spec' | 'store-module';

export const COMPONENT: GeneratedType = 'component';
export const COMPONENT_MODULE: GeneratedType = 'component-module';
export const COMPONENT_SPEC: GeneratedType = 'component-spec';
export const HTML: GeneratedType = 'html';
export const SASS: GeneratedType = 'sass';
export const STORE: GeneratedType = 'store';
export const STORE_SPEC: GeneratedType = 'store-spec';
export const STORE_MODULE: GeneratedType = 'store-module';

export interface IGeneratedTypeInfos {
    fileLabelAdditional: string;
    templateFile: string;
}

export const TYPES_MAP: Map<GeneratedType, IGeneratedTypeInfos> = new Map([
    [COMPONENT, {
        fileLabelAdditional: '.component.ts',
        templateFile: 'component-template.ts'
    }],
    [COMPONENT_MODULE, {
        fileLabelAdditional: '.module.ts',
        templateFile: 'component-module-template.ts'
    }],
    [COMPONENT_SPEC, {
        fileLabelAdditional: '.component.spec.ts',
        templateFile: 'spec-template.spec.ts'
    }],
    [HTML, {
        fileLabelAdditional: '.component.html',
        templateFile: 'html-template.html'
    }],
    [SASS, {
        fileLabelAdditional: '.component.scss',
        templateFile: 'sass-template.scss'
    }],
    [STORE, {
        fileLabelAdditional: '-store.ts',
        templateFile: 'store-template.ts'
    }],
    [STORE_MODULE, {
        fileLabelAdditional: '-store.module.ts',
        templateFile: 'store-module-template.ts'
    }],
    [STORE_SPEC, {
        fileLabelAdditional: '-store.spec.ts',
        templateFile: 'spec-store-template.spec.ts'
    }]
]);
