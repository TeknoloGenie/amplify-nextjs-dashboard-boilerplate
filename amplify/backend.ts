import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { componentConfigStorage } from "./storage/resource";

export const backend = defineBackend({
  auth,
  data,
  storage: componentConfigStorage,
});

const { cfnIdentityPool } = backend.auth.resources.cfnResources;
cfnIdentityPool.allowUnauthenticatedIdentities = false;