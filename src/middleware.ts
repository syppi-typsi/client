import type { APIContext } from "astro";

export async function onRequest(context: APIContext, next: () => any) {
	const subdomain = context.url.hostname.split(".")[0];

	if (subdomain !== "typsi" && subdomain !== "syppi") {
		return Response.redirect(
			`http://syppi.${import.meta.env.BASE_HOSTNAME}`, // you should have an HTTPS redirect for the resulting URL
			301,
		);
	}

	// return a Response or the result of calling `next()`
	return next();
}
