// import { auth } from "./auth";

// auth.api.signUpEmail({ body: {
//   email: "alex.zeitlhof211er@outlook.at",
//   name: "alex",
//   password:"12345678",
//   address: "Obershweinz 11"
// } });

/**
 * TEST: RATE LIMITER
 */

import { createAuthClient } from "better-auth/client";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
  plugins: [
    inferAdditionalFields({
      user: {
        address: {
          type: "string",
        },
      },
    }),
  ],
});

for (let i = 0; i < 1_000; i++) {
  // fetch("http://localhost:3000/auth/sign-up/email", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "test" + i,
  //     email: i + "@test.com",
  //     password: "12345678",
  //     address: " 123",
  //     image: "",
  //     callbackURL: "",
  //     rememberMe: true,
  //   }),
  // });

  authClient.signUp.email({
    name: "test" + i,
    email: i + "@test.com",
    password: "12345678",
    address: " 123",
  });

  // console.log(res.data?.user.name);
}
