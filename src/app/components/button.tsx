import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props }: ButtonProps) => {
    return (
        <button
        className={cn(
            'bg-black py-3 px-4 text-gray-50 flex items-center justify-center gap-2 rounded-full hover:bg-blue-500 transition-all',
            className
        )}
        {...props}>
            {children}
        </button>
    )
}