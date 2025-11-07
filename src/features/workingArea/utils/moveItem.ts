export function moveItem<T>(array: T[], fromIndex: number, toIndex: number): T[] {
	if (fromIndex < 0 || fromIndex >= array.length || toIndex < 0 || toIndex >= array.length) {
		return array; // if the indices are incorrect, return the original
	}

	const newArray = [...array];
	const [movedItem] = newArray.splice(fromIndex, 1);
	newArray.splice(toIndex, 0, movedItem);

	return newArray;
}
