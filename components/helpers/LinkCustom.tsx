import {default as NextLink} from "next/link"
import React from "react"
import { useRouter } from 'next/router'

interface LinkCustomContentProps {
    onClick?: React.MouseEventHandler
    href?: string
    children: JSX.Element | string
    parentClassName?: string
    useEvent?: boolean
    back?: boolean
}

interface Props extends LinkCustomContentProps {
    onMouseEnter?: React.MouseEventHandler<Element> | undefined
    href: string | undefined
}

const Link = (({ children, parentClassName, ...linkProps }: Props) => {

    return (
        <NextLink {...linkProps} passHref>
            <LinkCustomContent parentClassName={parentClassName}>
                {children}
            </LinkCustomContent>
        </NextLink>
    )
})

const LinkCustomContent = React.forwardRef<HTMLAnchorElement, LinkCustomContentProps>(({ 
        onClick,
        href,
        parentClassName,
        children,
        useEvent,
        back = false
    }: LinkCustomContentProps, ref) => {
    const router = useRouter()

    const onChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(back) {
            e.preventDefault();
            router.back();
        } else {
            if(useEvent) {
                e.preventDefault();
                router.push(href);
            } else {
                onClick(e);
            }
        }
    }

    return (
        <a className={parentClassName} href={href} onClick={onChange} ref={ref} >
            {children}
        </a>
    )
})

export default Link;