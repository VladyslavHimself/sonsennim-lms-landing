// @flow
import * as React from 'react';

type Props = {
    title: string,
    description?: string,
    isAttentionCard?: boolean,
};

const attentionCardClasses = "bg-blaze text-white shadow-[inset_0_0_50px_20px_rgba(255,255,255,0.25)]";
const baseCardClasses = "bg-card-background text-black";

export const FeatureTextCard = ({title, description, isAttentionCard, classes, ...props}: Props) => {
    const isAttentionCardClasses = isAttentionCard ? attentionCardClasses : baseCardClasses;

    const firstWord = title.split(" ")[0];
    const restOfTitle = title.slice(firstWord.length);

    return (
        <div
            {...props}
            className={`flex w-full h-fit md:h-full flex-col min-h-[150px] rounded-4xl pt-6 pb-6 pr-5 pl-5
             shadow-[0_0_15px_0_rgba(0,0,0,0.2)] ${isAttentionCardClasses} ${classes}`}>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
                {!isAttentionCard && <><span className="text-blaze">{firstWord}</span> {restOfTitle}</>}
                {isAttentionCard && <span className="text-3xl">{title}</span>}
            </div>
            <div className="text-xl lg:text-2xl xl:text-2xl">
                {description}
            </div>
        </div>
    );
};