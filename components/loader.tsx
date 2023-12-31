import Image from "next/image"


const Loader = () => {
  return (
    <div className="h-full flex flex-col gp-y-4 items-center justify-center">
        <div className="w-10 h-10 relative animate-spin">
            <Image
            alt="Logo"
            fill
            src="/logo.png"
            className="rounded-full"
            />
        </div>
        <p className="text-sm mt-2  text-muted-foreground">MyAI is thinking...</p>
    </div>
  )
}

export default Loader