import BitArray from '../utils/BitArray';
import { cached } from '../utils/caching';
import { LoadingMap } from '../utils/maps';
import { getVariantIndex } from './twVariant';
export type ClassValue = ClassArray|string|undefined|null
type ClassArray = ClassValue[]


export function cn(...classes: ClassValue[]): string {
    return classes
        .flat()
        .filter(s => typeof s === 'string' && s.length > 0).join(' ')
}

export function cx(...classes: ClassValue[]): string {
    return twMerge(cn(classes))
}


const twMerge = cached<string, string>((className: string) => {
    const classNameFilter = new ClassNameFilter() 
    return className.split(' ')
        .filter(s => s.length > 0)
        .reverse()
        .filter(part => classNameFilter.filter(part))
        .reverse()
        .join(' ')
});



class ClassNameFilter {
    private map = new LoadingMap<string, BitArray>(() => new BitArray());

    filter(className: string): boolean {
        const {pseudo, name, deletion} = decomposeClassName(className)
        const bitArray = this.map.get(pseudo)
        const index = getVariantIndex(name)
        if (index == 0) {
            return true
        }

        if (deletion) {
            bitArray.set(index, 1)
            return false
        }

        const notExist = bitArray.get(index) == 0
        if (notExist) {
            bitArray.set(index, 1)
        }
        return notExist
    }
}


/**
 * decompose a tailwind classname to basic parts:
 * [deletion][{preusdo}:]{name}
 */
function decomposeClassName(dwClassName: string): {pseudo: string, name: string, deletion: boolean} {
    const match = dwClassName.match(/(?<deletion>~)?((?<pseudo>\w+):)*(?<name>[\w\-]+)/)!
    const {deletion, pseudo, name} = match.groups!
    return {
        deletion: deletion != null,
        pseudo: pseudo ?? '',
        name: name ?? '',
    }
}

