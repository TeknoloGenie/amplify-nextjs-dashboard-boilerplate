import { defineStorage } from "@aws-amplify/backend-storage";

export const componentConfigStorage = defineStorage({
  name: "media",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.authenticated.to(["list"])
    ],
    "media/profile-pictures/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"])
    ]
  })
});