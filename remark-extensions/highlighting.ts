
import {visit} from 'unist-util-visit';


export default function highlighting(options: {classNameMapper?: (link: string) => string}) {
    const resolveClassName = (link: string) => {
        if (options.classNameMapper) {
            return options.classNameMapper(link)
        }
        return link
    }

    return (tree) => {
        visit(tree, 'link', (node) => {
            if (/^\d+$/.test(node.url)) {
                node.type = 'span'
                node.data = {
                    hName: 'span',
                    hProperties: {
                        className: resolveClassName(node.url)
                    }
                }
            }
        })
    }
}