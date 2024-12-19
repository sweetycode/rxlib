import type { CcProps } from "common-ui/types";
import { ccx } from "common-utils/cx";

export default function Skeleton({className, children}: CcProps) {
    return <div className={ccx(`animate-pulse rounded-md bg-zinc-900/10`, className)}>{children}</div>
}