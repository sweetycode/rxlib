import type { CnProps } from "common-ui/decl";
import { ccx } from '../common-utils/cx/index';

export function LightBlueBackground({className}: CnProps) {
    return <div className={ccx(`bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`, className)}/>
}