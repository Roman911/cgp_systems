import { initialBlocs } from '../var/initialBlocs.ts';

/**
 * Save data to localStorage
 * @param key - string key for localStorage
 * @param value - any value to save (will be serialized to JSON)
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
	try {
		const serialized = JSON.stringify(value);
		localStorage.setItem(key, serialized);
		window.dispatchEvent(new Event('localStorageUpdated'));
	} catch(error) {
		console.error(`Failed to save "${ key }" to localStorage:`, error);
	}
}

/**
 * Load data from localStorage
 * @param key - string key for localStorage
 * @param fallback - optional default value if not found or parse fails
 */
export function loadFromLocalStorage<T>(key: string, fallback: T | null = null): T | null {
	try {
		const item = localStorage.getItem(key);
		if(!item) return initialBlocs as T;
		return JSON.parse(item) as T;
	} catch(error) {
		console.error(`Failed to load "${ key }" from localStorage:`, error);
		return fallback;
	}
}

/**
 * Remove item from localStorage
 * @param key - string key for localStorage
 */
export function removeFromLocalStorage(key: string): void {
	try {
		localStorage.removeItem(key);
	} catch(error) {
		console.error(`Failed to remove "${ key }" from localStorage:`, error);
	}
}
