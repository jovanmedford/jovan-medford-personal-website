import Image from "next/image";


export function CnTower({className}: {className?: string}) {
    return (
        <Image
            className={className}
            alt="cn tower"
            src="/simple-cn-tower.svg"
            height={270}
            width={196}
        />
    )
}
