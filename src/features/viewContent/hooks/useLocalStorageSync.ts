import { useEffect, useState } from 'react';
import { loadFromLocalStorage } from '../../../utils/localStorage.ts';

/**
 * React hook for syncing state with localStorage (auto-updates on change)
 * @param key - localStorage key
 * @param fallback - default value if nothing is stored
 */
export function useLocalStorageSync<T>(key: string, fallback: T) {
	const [value, setValue] = useState<T>(() => loadFromLocalStorage<T>(key, fallback) as T);

	useEffect(() => {
		// Handler for external tab updates
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				setValue(loadFromLocalStorage<T>(key, fallback) as T);
			}
		};

		// Handler for same-tab updates
		const handleLocalChange = () => {
			setValue(loadFromLocalStorage<T>(key, fallback) as T);
		};

		window.addEventListener('storage', handleStorageChange);
		window.addEventListener('localStorageUpdated', handleLocalChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('localStorageUpdated', handleLocalChange);
		};
	}, [key, fallback]);

	return value;
}
