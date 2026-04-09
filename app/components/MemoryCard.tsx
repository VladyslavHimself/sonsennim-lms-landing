// @flow
import * as React from 'react';

type Props = {
    frontWord: string,
    backWord?: string,
    variant?: 'primary' | 'secondary',
};

const primaryClasses = " ring-5 ring-inset ring-[rgba(0,0,0,.1)] items-start  text-white bg-blaze pl-4"
const secondaryClasses = "items-center text-black bg-white"

export const MemoryCard = ({frontWord, backWord, variant = "primary" }: Props) => {


    const classesInvariants = variant === 'primary' ? primaryClasses : secondaryClasses;

    return (
        <div
            className={`flex flex-col ${classesInvariants} w-[179px] h-[82px] lg:w-[220px] lg:h-[100px] rounded-[21px] shadow-[0_0_25px_0_rgba(0,0,0,0.1)]  justify-center`}>
            <span className="lg:text-xl">{frontWord}</span>
            {backWord && <span className="text-sm lg:text-xl opacity-80">{backWord}</span>}
        </div>
    );
};