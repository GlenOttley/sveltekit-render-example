// @ts-nocheck
import { people } from '$lib/stores';

export const addComment = (name) => {
	people.update((current) => {
		const comment = { id: Math.floor(Math.random() * 1000), content: 'a pushed comment' };
		const personToUpdate = current.find((person) => person.name === name);

		if (personToUpdate) {
			personToUpdate.comments.push(comment);
		}
		return current;
	});
};
