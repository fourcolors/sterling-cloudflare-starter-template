export const response = (
	status: number,
	statusText: string,
	body = null,
	headers?: Record<string, any>
) =>
	new Response(body, {
		status,
		statusText,
		...(headers && { headers }),
	});
