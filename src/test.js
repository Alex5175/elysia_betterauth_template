import { auth } from "./auth";

// auth.api.signUpEmail({ body: {
//   email: "alex.zeitlhof211er@outlook.at",
//   name: "alex",
//   password:"12345678"
// } });

let schema = await auth.api.generateOpenAPISchema();

let path = schema.paths["/sign-up/email"];
console.log(path.post.requestBody.content["application/json"].schema);
