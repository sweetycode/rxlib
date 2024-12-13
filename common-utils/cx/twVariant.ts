import { cached } from "../utils/caching"


/**
 * Cluster the tailwind classname (without psuodo class) to an index,
 * to help with merging. Will default to 0 when can't resolve
 */
export const getVariantIndex = cached<string, number>((className: string) => {
    for (let {index, values, prefixes, patterns} of variants) {
        if (values != null && values.has(className)) {
            return index
        }
        if (prefixes != null) {
            for (let prefix of prefixes) {
                if (className.startsWith(prefix)) {
                    return index
                }
            }
        }
        if (patterns != null) {
            for (let pattern of patterns) {
                if (pattern.test(className)) {
                    return index
                }
            }
        }
    }
    return 0
})

interface Variant {
    index: number
    prefixes?: string[]
    values?: Set<string>
    patterns?: RegExp[]
}


let variantCounter = 0
const variants: Variant[] = []
function declareVariant({prefixes, values, patterns}: Omit<Variant, 'index'>): void {
    variants.push({
        index: ++variantCounter,
        prefixes,
        values,
        patterns
    })
}

function declareVariantPrefix(...prefixes: string[]) {
    return declareVariant({prefixes})
}

function declareVariantValue(...values: string[]){
    return declareVariant({values: new Set(values)})
}

function declareVariantPattern(...patterns: RegExp[]) {
    return declareVariant({patterns})
}

function orthogonalize(part1: string[], part2: string[], part3: string[] = ['']): string[] {
    return part1.map(p1 => {
        return part2.map(p2 => {
            return part3.map(p3 => p1 + p2 + p3)
        })
    }).flat(2)
}


const COLORS = ['inherit', 'current', 'transparent', 'black', 'white', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
const SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']



// padding, margin
orthogonalize(['p', 'm'], ['', ...'xytrpb'], ['-'])
    .forEach(prefix => declareVariantPrefix(...orthogonalize(['', '-'], [prefix])));

// width, height
orthogonalize(['max-', 'min-', ''], ['w-', 'h-'])
    .forEach(prefix => declareVariantPrefix(prefix));

['space-', 'size-'].forEach(prefix => declareVariantPrefix(prefix));

// rounded
declareVariantPrefix('rounded');

// border
declareVariantPattern(/^border(-\d)?$/);
orthogonalize(['border-'], [...'xysetrbl'], ['-'])
    .forEach(prefix => declareVariantPrefix(prefix));

declareVariantPattern(/^border-[a-z](-\d)?/);
declareVariantPrefix(...orthogonalize(['border-'], ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none']));
declareVariantPrefix(...orthogonalize(['border-'], COLORS));

// bg
declareVariantPrefix(...orthogonalize(['bg-'], COLORS))

// display
declareVariantValue(...'inline-block,block,inline-flex,flex,inline-table,table,inline-grid,grid,inline,flex,table,grid,hidden,list-item,table-cell,table-column'.split(','))

// position
declareVariantValue(...'static,fixed,absolute,relative,sticky'.split(','));

// overflow
declareVariantPrefix('overflow-');

declareVariantPrefix('leading-');
declareVariantPrefix('clear-');

// flex, grid
declareVariantPrefix(...orthogonalize(['flex-'], ['row', 'col']));
declareVariantPrefix(...orthogonalize(['flex-'], ['wrap', 'nowrap']));
declareVariantValue(...orthogonalize(['flex-'], ['1', 'auto', 'initial', 'none']));
declareVariantValue(...orthogonalize(['grow'], ['', '-0']));
declareVariantValue(...orthogonalize(['shrink'], ['', '-0']));
declareVariantPattern(/^gap-[\d\.]+/)
declareVariantPattern(/^gap-[x|y]-/);
['basis-', 'order-', 'justify-'].forEach(prefix => declareVariantPrefix(prefix));
orthogonalize(['justify-', ''], ['self-', 'items-'])
    .forEach(prefix => declareVariantPrefix(prefix));
orthogonalize(['place-'], ['content-', 'items-', 'self-'])
    .forEach(prefix => declareVariantPrefix(prefix));

// opacity
declareVariantPrefix('opacity-');

// text
const WRAP_STYLES = ['wrap', 'nowrap', 'balance', 'pretty']
const TEXT_ALIGNS = ['left', 'right', 'center', 'justify', 'start', 'end']
const FONT_FAMILIES = ['sans', 'serif', 'mono']
const FONT_WEIGHTS = ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'];

declareVariantPrefix(...orthogonalize(['text-'], COLORS));
declareVariantPrefix(...orthogonalize(['text-'], SIZES));
declareVariantPrefix(...orthogonalize(['text-'], WRAP_STYLES));
declareVariantPrefix(...orthogonalize(['text-'], TEXT_ALIGNS));
declareVariantPrefix(...orthogonalize(['text-'], FONT_WEIGHTS));
declareVariantPrefix(...orthogonalize(['text-'], FONT_FAMILIES));

['whitespace-', 'break-'].forEach(prefix => declareVariantPrefix(prefix))

// shadow
const SHADOW_SIZES = ['sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];

declareVariantPrefix(...orthogonalize(['shadow-'], COLORS));
declareVariantPrefix(...orthogonalize(['shadow-'], SHADOW_SIZES).concat('shadow'));


// z-index
declareVariantPrefix('z-')
declareVariantPattern(/^start-[\d\.]+$/)
declareVariantPattern(/^end-[\d\.]+$/)
declareVariantPattern(/^(?:-)?top-[\d\.]+$/)
declareVariantPattern(/^(?:-)?right-[\d\.]+$/)
declareVariantPattern(/^(?:-)?bottom-[\d\.]+$/)
declareVariantPattern(/^(?:-)?left-[\d\.]+$/)
