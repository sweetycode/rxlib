import type { CnProps } from "common-ui/decl";
import { ccx } from "common-utils/cx";
import type { ComponentProps } from "preact";



export default function Checkbox({className}: CnProps & ComponentProps<'input'>) {
    return <input type="checkbox" className={ccx(`peer h-4 w-4 shrink-0 rounded border border-zinc-900 shadow`, className)} />
}