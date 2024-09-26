import { defineStorage } from "@aws-amplify/backend-storage";

export const componentConfigStorage = defineStorage({
  name: "ComponentConfigStorage",
  access: (allow) => ({
    "*": [
      allow.authenticated.to(["read", "write"]),
    ]
  })
});