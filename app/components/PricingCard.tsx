import Link from "next/link";

export type PricingCardEntity = {
    prefix: string,
    price: number,
    suffix: string,
    bulletList: string[],
    link: string,
}

type Props = {
    variant: "standard" | "premium",
    pricingInfo: PricingCardEntity,
};

export default function PricingCard({variant, pricingInfo}: Props) {

    const standardClasses = "bg-card-background text-black";
    const premiumClasses = "bg-blaze text-white border-2 border-blaze";
    const classesVariants = variant === "standard" ? standardClasses : premiumClasses;


    return (
        <div className={`flex flex-col shadow-[0_0_15px_0_rgba(0,0,0,0.15)] justify-between w-full md:w-75 lg:w-85 xl:flex-1 rounded-4xl px-4 py-4 min-h-[450px] xl:min-h-[524px] ${classesVariants}`}>
            <div>
                <div className={`flex flex-col py-2 border-b-2 ${variant === "premium" ? "border-white" : "border-blaze"}`}>
                    <span className="font-bold">{pricingInfo.prefix}</span>
                    <span className="text-3xl mt-3">${pricingInfo.price}/m</span>
                    <span>{pricingInfo.suffix}</span>
                </div>

                <div className="flex flex-col py-2">
                    <ul className="flex flex-col gap-2 list-disc pl-3">
                        {pricingInfo.bulletList.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Link className={`flex ${variant === "premium" ? "border-white bg-white text-black" : "border-blaze"} justify-center border-2 text-xl p-3 rounded-2xl`} href="#">Get
                started</Link>
        </div>
    );
};