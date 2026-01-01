import { Elysia } from "elysia";
import z from "zod";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
  .use(openapi())
  .get("/", () => "Hello Elysia")
  .get("/test/:id", ({ params: { id } }) => ({ message: "" + id }), {
    params: z.object({
      id: z.string(),
    }),
    detail: {
      summary: "Test is a test Route",
      tags: ["test"],
    },
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
