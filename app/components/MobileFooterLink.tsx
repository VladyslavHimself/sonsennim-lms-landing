// @flow
import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import ChevronRight from '../../public/glyphs_chevron-right.svg';

type Props = {
    value: string,
    link: string,
};

export default function MobileFooterLink({value, link}: Props) {
    return (
        <Link className="w-full h-15 text-xl rounded-2xl bg-card-background flex items-center justify-between py-8 px-4"
              href={link}>
            {value}
            <Image width={24} height={24} src={ChevronRight} alt={"chevron"}/>
        </Link>
    );
};