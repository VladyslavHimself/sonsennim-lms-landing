import Link from "next/link";
import {JSX} from "react";

type Props = {
    variant: 'primary' | 'outline',
    value: string,
    ImageComponent?: (props: { classes: string }) => JSX.Element,
}

const primaryButtonClasses = "text-lg text-white font-bold bg-blaze";
const outlineButtonClasses = "text-lg text-blaze font-bold border-blaze bg-white border-2";

export default function LinkButton(props: Props) {
    const {variant = "primary", value, ImageComponent, ...properties} = props;

    const classesInvariants = variant === 'primary' ? primaryButtonClasses : outlineButtonClasses;
    const imageFillColor = variant === 'primary' ? "fill-white" : "fill-blaze";

    return (
        <Link
            {...properties}
            className={`p-2 ${classesInvariants} pl-4 pr-4 cursor-pointer w-fit flex justify-center items-center h-12 rounded-4xl`}
            href="#">
            {ImageComponent && <ImageComponent classes={`mr-2 ${imageFillColor}`} />}
            {value}
        </Link>
    );
};