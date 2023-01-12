import { writable } from 'svelte/store';

export const people = writable([
	{
		name: 'john',
		age: 32,
		comments: [
			{
				id: 1,
				content: 'an original post from john'
			}
		]
	},
	{
		name: 'jane',
		age: 31,
		comments: [
			{
				id: 2,
				content: 'an original post from jane'
			}
		]
	}
]);
