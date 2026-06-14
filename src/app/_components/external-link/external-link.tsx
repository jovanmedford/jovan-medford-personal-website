import { ExternalLinkIcon } from "lucide-react";
import { ComponentProps } from "react";

export function ExternalLink({ showIcon, children, ...rest }: ExternalLinkProps) {
    return (<a className="underline text-primary-300 flex gap-1" {...rest}>{children} {showIcon && <ExternalLinkIcon className="w-4"/>}</a>)

}

interface ExternalLinkProps extends ComponentProps<"a"> {
    showIcon?: boolean
}