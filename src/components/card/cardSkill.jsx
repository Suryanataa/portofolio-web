import React from "react";

function CardSkill({ title, src, alt }) {
    return (
        <div className="flex flex-col justify-between px-8 py-5 bg-secondary rounded-[18px] w-max gap-3">
            <img src={src} alt={alt} className="object-contain max-h-[60px]" />
            <p className="font-bold text-[16px]">{title}</p>
        </div>
    );
}

export default CardSkill;
