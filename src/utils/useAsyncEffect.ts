import { useEffect } from 'react'

export const useAsyncEffect = 
(effect: ()=> Promise<any>, deps: any[]) => {

	useEffect(() => {
		const asyncEffect = async () => {
			await effect()
		}
		asyncEffect().then()
	}, deps)
}