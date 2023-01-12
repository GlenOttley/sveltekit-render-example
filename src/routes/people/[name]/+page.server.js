//@ts-nocheck
export const actions = {
	addComment: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
};
