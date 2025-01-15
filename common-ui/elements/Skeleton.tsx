import type { CcProps } from "common-ui/decl";
import { ccx } from "common-utils/cx";
import { useState } from "preact/hooks";
import { useMount } from "react-lib/hooks/lifecycle";
import { useIsClient } from "react-lib/hooks/states";

export function Skeleton({className, children}: CcProps) {
    const isClient = useIsClient()
    if (!isClient) {
        return <></>
    }
    return <div className={ccx(`animate-pulse rounded-md bg-zinc-900/10`, className)}>{children}</div>
}

const CONDIDATE_SIZES = ['w-1/3', 'w-5/12', 'w-1/2', 'w-7/12', 'w-2/3']

export function RandomTextSkeleton({rows, className}: {rows?: number, className?: string}) {
    const [lines, setLines] = useState<string[]>([])

    useMount(() => {
        const n = rows != null ? rows: Math.floor(3 + Math.random() * 4)
        setLines([...Array(n)].map(() => {
            const i = Math.floor(Math.random() * CONDIDATE_SIZES.length);
            return CONDIDATE_SIZES[i]
        }))
    })

    const isClient = useIsClient()
    if (!isClient) {
        return <></>
    }

    return <div className={ccx(`space-y-1 flex flex-col`, className)}>
        {lines.map(line => <Skeleton className={`${line} h-4 rounded-sm`}/>)}
    </div>
}