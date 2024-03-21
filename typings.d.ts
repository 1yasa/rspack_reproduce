import 'react'

declare module 'react' {
	export const unstable_Activity: ComponentClass<
		{
			children: ReactNode
			mode: 'hidden' | 'visible'
		},
		any
	>
}
