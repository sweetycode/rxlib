/**
 * https://github.com/floating-ui/floating-ui/tree/master/packages
 */


// TODO

import type { Ref } from "preact";



type Placement = 'top'|'left'|'button'|'right'

export function useFloating({anchorRef, placement}: {anchorRef: Ref<any>, placement: Placement}): {className: string} {
    return {
        className: ``,
    }
}