import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (ctx) => {
    return ctx.json({
      message: "Hello Next.js!",
    });
  })
  .get("/hello/:test", (ctx) => {
    return ctx.json({
      message: "Hello World",
      param: ctx.req.param("test"),
    });
  });

export const GET = handle(app);
export const POST = handle(app);
