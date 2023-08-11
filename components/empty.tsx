import Image from "next/image"

interface EmptyProps {
    label:string
}
export const Empty = ({label}:EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
        
        {/* <div className="h-72 w-72">
            <Image 
            alt="Empty"
            fill
            src="/empty.png"
            />
        </div> */}
        <p className="text-muted-foreground text-center text-sm">
            {label}
        </p>
        </div>
  )
}

