import Link from "next/link";
import {JSX} from "react";

type Props = {
    variant: 'primary' | 'outline',
    value: string,
    ImageComponent?: (props: { classes: string }) => JSX.Element,
    classes?: string,
    link?: string,
}

const primaryButtonClasses = "text-lg text-white font-bold bg-blaze";
const outlineButtonClasses = "text-lg text-blaze font-bold border-blaze bg-white border-2";

export default function LinkButton(props: Props & JSX.IntrinsicElements["a"]) {
    const {variant = "primary", value, ImageComponent, classes, link, ...properties} = props;

    const classesInvariants = variant === 'primary' ? primaryButtonClasses : outlineButtonClasses;
    const imageFillColor = variant === 'primary' ? "fill-white" : "fill-blaze";

    return (
        <Link
            {...properties}
            className={`p-2 ${classesInvariants} ${classes} pl-4 pr-4 cursor-pointer w-fit flex justify-center items-center h-12 rounded-4xl`}
            href={link || "#"}>
            {ImageComponent && <ImageComponent classes={`mr-2 ${imageFillColor}`} />}
            {value}
        </Link>
    );
};