import { Elysia } from "elysia";
import z from "zod";
import { openapi } from "@elysiajs/openapi";
import { auth } from "./auth";
import { betterAuthPlugin, OpenAPI } from "./http/plugins/betterAuthPlugin";

//

const app = new Elysia()
  .use(betterAuthPlugin)
  .use(
    openapi({
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    })
  )

  // .post("sign-up/email", () => "Hello World", {
  //   body: userInsertSchema,
  // })
  .get("/", () => "Hello Elysia", {})
  .get("/test/", ({ user }) => ({ message: "Hallo " + user.name }), {
    detail: {
      summary: "Test is a test Route",
      tags: ["test"],
    },
    auth: true,
    response: {
      200: z.object({
        message: z.string(),
      }),
    },
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
