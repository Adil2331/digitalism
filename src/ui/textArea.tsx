'use client'

import { cn } from '@/utils/classNames'
import * as React from 'react'

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => (
	<textarea
		ref={ref}
		className={cn(
			'block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
			className
		)}
		{...props}
	/>
))
Textarea.displayName = 'Textarea'

const TextareaLabel = React.forwardRef<
	HTMLLabelElement,
	React.ComponentPropsWithoutRef<'label'>
>(({ className, children, ...props }, ref) => (
	<label
		ref={ref}
		className={cn('block text-sm font-medium text-gray-700', className)}
		{...props}
	>
		{children}
	</label>
))
TextareaLabel.displayName = 'TextareaLabel'

const TextareaContainer = ({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-2', className)} {...props}>
		{children}
	</div>
)
TextareaContainer.displayName = 'TextareaContainer'

const TextareaError = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('text-sm text-red-600', className)} {...props}>
		{children}
	</div>
))
TextareaError.displayName = 'TextareaError'

export { Textarea, TextareaContainer, TextareaError, TextareaLabel }
