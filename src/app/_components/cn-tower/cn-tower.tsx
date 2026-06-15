import Image from "next/image";


export function CnTower({className}: {className?: string}) {
    return (<div className={className}>
        <Image alt="cn tower" src="/simple-cn-tower.svg" height={270} width={188} />
    </div>)
}