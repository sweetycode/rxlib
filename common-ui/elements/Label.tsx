import type { ComponentProps } from "preact";
import { cx } from '../../common-utils/cx/index';


export default function Label({className, ...props}: ComponentProps<'label'>) {
    return <label className={cx(`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, className as string)} {...props}></label>
}
