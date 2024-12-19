import type { ComponentChildren } from "preact"


export type CnProps = {className?: string}

export type ChProps<T = ComponentChildren> = {children: T}

export type CcProps<T = ComponentChildren> = CnProps & ChProps<T>
