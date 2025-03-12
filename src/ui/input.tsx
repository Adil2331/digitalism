import { cn } from '@/utils/classNames'
import { LucideIcon } from 'lucide-react'
import * as React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	startIcon?: LucideIcon
	endIcon?: LucideIcon
	onClickEndIcon?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, startIcon, endIcon, type, onClickEndIcon, ...props }, ref) => {
		const StartIcon = startIcon
		const EndIcon = endIcon
		return (
			<div className='w-full relative'>
				{StartIcon && (
					<div className='absolute left-1.5 top-1/2 transform -translate-y-1/2'>
						<StartIcon size={18} className='stroke-slate-700/70' />
					</div>
				)}
				<input
					type={type}
					className={cn(
						'flex h-9 w-full rounded-md ' +
							'border border-input bg-transparent ' +
							'px-3 py-1 text-sm shadow-sm transition-colors ' +
							'file:border-0 file:bg-transparent ' +
							'file:text-sm file:font-medium ' +
							'placeholder:text-muted-foreground ' +
							'focus-visible:outline-none focus-visible:ring-1 ' +
							'focus-visible:ring-ring disabled:cursor-not-allowed ' +
							'disabled:opacity-50',
						startIcon ? 'pl-8' : '',
						endIcon ? 'pr-8' : '',
						className
					)}
					ref={ref}
					{...props}
				/>
				{EndIcon && (
					<div
						className='absolute right-3 top-1/2 transform -translate-y-1/2'
						onClick={onClickEndIcon}
					>
						<EndIcon className='text-muted-foreground' size={18} />
					</div>
				)}
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
