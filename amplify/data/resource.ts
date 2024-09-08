import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      createdAt: a.datetime().default(new Date().toISOString())
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Message: a
    .model({
      message: a.string(),
      conversation: a.belongsTo("Conversation", "conversationId"),
      conversationId: a.id().required(),
      createdAt: a.datetime().default(new Date().toISOString())
    })
    .authorization((allow) => [
      allow.ownerDefinedIn('conversationId'),
      allow.authenticated()
    ]),
  UserConversations: a
    .model({
      userId: a.id().required(),
      conversationId: a.id().required(),
      user: a.belongsTo("User", "userId"),
      conversation: a.belongsTo("Conversation", "conversationId"),
      createdAt: a.datetime().default(new Date().toISOString())
    })
    .authorization((allow) => [allow.owner()]),
  User: a
    .model({
      email: a.string(),
      profileOwner: a.string(),
      conversations: a.hasMany("UserConversations", "userId"),
    })
    .authorization((allow) => [
      allow.ownerDefinedIn("profileOwner"),
    ]),
  Conversation: a
    .model({
      id: a.id().required(),
      messages: a.hasMany("Message", "conversationId"),
      participants: a.hasMany("UserConversations", "conversationId"),
      createdAt: a.datetime().default(new Date().toISOString())
    })
    .authorization((allow) => [allow.owner()]),
  PlatformsConfiguration: a
    .model({
      id: a.id().required(),
      organization: a.belongsTo("Organization", "organizationId"),
      enabledPlatforms: a.string().array(),
      organizationId: a.id(),
      crmSettings: a.customType({
        string: a.string(),
        boolean: a.boolean(),
        integer: a.integer(),
        object: a.customType({
          key1: a.string(),
          key2: a.integer(),
        }),
        array: a.string().array(),
      }),
    })
    .authorization((allow) => [allow.owner()]),
  Organization: a.model({
    id: a.id().required(),
    name: a.string(),
    address: a.integer(),
    platformsConfiguration: a.hasOne("PlatformsConfiguration", "organizationId"),
    url: a.string(),
  })
  .authorization((allow) => [allow.owner()]),
})
.authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
