/**
 * Created by Trajan on 25/04/2017.
 */

import { IGeneratedTypeInfos } from './generator';

export type GeneratedType = 'component' | 'html' | 'module' | 'sass' | 'spec';

export const COMPONENT: GeneratedType = 'component';
export const HTML: GeneratedType = 'html';
export const MODULE: GeneratedType = 'module';
export const SASS: GeneratedType = 'sass';
export const SPEC: GeneratedType = 'spec';

export const TYPES_MAP: Map<GeneratedType, IGeneratedTypeInfos> = new Map([
  [COMPONENT, {
    fileLabelAdditional: '.component.ts',
    name: 'component',
    templateFile: 'component-template.ts'
  }],
  [HTML, {
    fileLabelAdditional: '.component.html',
    name: 'html',
    templateFile: 'html-template.html'
  }],
  [MODULE, {
    fileLabelAdditional: '.module.ts',
    name: 'module',
    templateFile: 'module-template.ts'
  }],
  [SASS, {
    fileLabelAdditional: '.component.scss',
    name: 'sass',
    templateFile: 'sass-template.scss'
  }],
  [SPEC, {
    fileLabelAdditional: '.component.spec.ts',
    name: 'spec',
    templateFile: 'spec-template.spec.ts'
  }]
]);
