/**
 * Created by Trajan on 24/04/2017.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { COMPONENT, GeneratedType, HTML, SASS, SPEC, TYPES_MAP } from './types-map';

export interface IComponent {
    children?: IComponent[];
    inputList?: string[];
    name: string;
    outputList?: string[];
}

export interface IGeneratedTypeInfos {
    fileLabelAdditional: string;
    name: string;
    templateFile: string;
}

class Generator {

    componentTree: IComponent[] = [{
        name: 'connection-list-container',
        children: [{
            name: 'connection-list',
            children: [{
              name: 'connection-preview'
            }]
        }]
    }];

    typesMap: Map<GeneratedType, IGeneratedTypeInfos> = TYPES_MAP;

    outputDirName: string = 'output';
    outputDir: string = 'C:/Windows/Temp';
    rootDir: string = '';

    dashReplace: string = '<%dashName%>';
    camelReplace: string = '<%camelName%>';
    camelFirstUpperReplace: string = '<%camelNameFirstUpper%>';

    replacements: Map<string, string>;

    constructor() {
        this.rootDir = path.dirname(require.main.filename);
        this.outputDir = this.rootDir;
        this.replacements = new Map([
            [this.dashReplace, ''],
            [this.camelReplace, ''],
            [this.camelFirstUpperReplace, '']
        ]);
    }

    generate(): void {
        process.chdir(this.outputDir);
        if (fs.existsSync(this.outputDirName)) {
            rimraf.sync(this.outputDirName);
        }
        fs.mkdirSync(this.outputDirName);
        process.chdir(this.outputDirName);
        this.componentTree.forEach(comp => {
            this.dealWithComponent(comp);
        });
    }

    dealWithComponent(comp: IComponent): void {
        console.log(`Generating ${comp.name}`);
        this.replacements.set(this.dashReplace, comp.name);
        this.replacements.set(this.camelReplace, comp.name);
        this.replacements.set(this.camelFirstUpperReplace, comp.name);

        this.generateFiles(comp.name);
        if (comp.children != null) {
            comp.children.forEach(child => this.dealWithComponent(child));
        }
    }

    generateFiles(name: string): void {
        fs.mkdirSync(name);
        process.chdir(name);
        this.generateFileAndReplace(name, this.typesMap.get(HTML));
        this.generateFileAndReplace(name, this.typesMap.get(SASS));
        this.generateFileAndReplace(name, this.typesMap.get(SPEC));
        this.generateFileAndReplace(name, this.typesMap.get(COMPONENT));
    }

    generateFileAndReplace(name: string, generatedType: IGeneratedTypeInfos): void {

        let content: string = fs.readFileSync(this.rootDir + '/templates/' + generatedType.templateFile).toString();
        let replacedContent: string = this.replaceTemplateWithName(content, this.replacements);
        fs.writeFileSync(name + generatedType.fileLabelAdditional, replacedContent);

    }

    replaceTemplateWithName(template: string, replacements: Map<string, string>): string {

        let initTemplate: string = template;

        replacements.forEach((value: string, key: string) => {
            initTemplate = initTemplate.replace(key, value);
        });

        return initTemplate;
    }

}

new Generator().generate();
