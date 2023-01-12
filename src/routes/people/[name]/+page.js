import { error } from '@sveltejs/kit';
import { people } from '$lib/stores';

// @ts-ignore
export const load = ({ params }) => {
	let person;
	people.subscribe((current) => {
		person = current.find((person) => person.name === params.name);
	});
	if (person) {
		return person;
	} else {
		throw error(404, 'Not found');
	}
};
