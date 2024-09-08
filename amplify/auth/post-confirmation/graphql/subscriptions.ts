/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateConversation = /* GraphQL */ `subscription OnCreateConversation(
  $filter: ModelSubscriptionConversationFilterInput
  $owner: String
) {
  onCreateConversation(filter: $filter, owner: $owner) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    owner
    participants {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateConversationSubscriptionVariables,
  APITypes.OnCreateConversationSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $conversationId: String
  $filter: ModelSubscriptionMessageFilterInput
) {
  onCreateMessage(conversationId: $conversationId, filter: $filter) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    message
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onCreateOrganization(filter: $filter, owner: $owner) {
    address
    createdAt
    id
    name
    owner
    platformsConfiguration {
      createdAt
      enabledPlatforms
      id
      organizationId
      owner
      updatedAt
      __typename
    }
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onCreatePlatformsConfiguration = /* GraphQL */ `subscription OnCreatePlatformsConfiguration(
  $filter: ModelSubscriptionPlatformsConfigurationFilterInput
  $owner: String
) {
  onCreatePlatformsConfiguration(filter: $filter, owner: $owner) {
    createdAt
    crmSettings {
      array
      boolean
      integer
      string
      __typename
    }
    enabledPlatforms
    id
    organization {
      address
      createdAt
      id
      name
      owner
      updatedAt
      url
      __typename
    }
    organizationId
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlatformsConfigurationSubscriptionVariables,
  APITypes.OnCreatePlatformsConfigurationSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onCreateUser(filter: $filter, profileOwner: $profileOwner) {
    conversations {
      nextToken
      __typename
    }
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserConversations = /* GraphQL */ `subscription OnCreateUserConversations(
  $filter: ModelSubscriptionUserConversationsFilterInput
  $owner: String
) {
  onCreateUserConversations(filter: $filter, owner: $owner) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    owner
    updatedAt
    user {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserConversationsSubscriptionVariables,
  APITypes.OnCreateUserConversationsSubscription
>;
export const onDeleteConversation = /* GraphQL */ `subscription OnDeleteConversation(
  $filter: ModelSubscriptionConversationFilterInput
  $owner: String
) {
  onDeleteConversation(filter: $filter, owner: $owner) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    owner
    participants {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteConversationSubscriptionVariables,
  APITypes.OnDeleteConversationSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $conversationId: String
  $filter: ModelSubscriptionMessageFilterInput
) {
  onDeleteMessage(conversationId: $conversationId, filter: $filter) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    message
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onDeleteOrganization(filter: $filter, owner: $owner) {
    address
    createdAt
    id
    name
    owner
    platformsConfiguration {
      createdAt
      enabledPlatforms
      id
      organizationId
      owner
      updatedAt
      __typename
    }
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onDeletePlatformsConfiguration = /* GraphQL */ `subscription OnDeletePlatformsConfiguration(
  $filter: ModelSubscriptionPlatformsConfigurationFilterInput
  $owner: String
) {
  onDeletePlatformsConfiguration(filter: $filter, owner: $owner) {
    createdAt
    crmSettings {
      array
      boolean
      integer
      string
      __typename
    }
    enabledPlatforms
    id
    organization {
      address
      createdAt
      id
      name
      owner
      updatedAt
      url
      __typename
    }
    organizationId
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlatformsConfigurationSubscriptionVariables,
  APITypes.OnDeletePlatformsConfigurationSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onDeleteUser(filter: $filter, profileOwner: $profileOwner) {
    conversations {
      nextToken
      __typename
    }
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserConversations = /* GraphQL */ `subscription OnDeleteUserConversations(
  $filter: ModelSubscriptionUserConversationsFilterInput
  $owner: String
) {
  onDeleteUserConversations(filter: $filter, owner: $owner) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    owner
    updatedAt
    user {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserConversationsSubscriptionVariables,
  APITypes.OnDeleteUserConversationsSubscription
>;
export const onUpdateConversation = /* GraphQL */ `subscription OnUpdateConversation(
  $filter: ModelSubscriptionConversationFilterInput
  $owner: String
) {
  onUpdateConversation(filter: $filter, owner: $owner) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    owner
    participants {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateConversationSubscriptionVariables,
  APITypes.OnUpdateConversationSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $conversationId: String
  $filter: ModelSubscriptionMessageFilterInput
) {
  onUpdateMessage(conversationId: $conversationId, filter: $filter) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    message
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
  $owner: String
) {
  onUpdateOrganization(filter: $filter, owner: $owner) {
    address
    createdAt
    id
    name
    owner
    platformsConfiguration {
      createdAt
      enabledPlatforms
      id
      organizationId
      owner
      updatedAt
      __typename
    }
    updatedAt
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onUpdatePlatformsConfiguration = /* GraphQL */ `subscription OnUpdatePlatformsConfiguration(
  $filter: ModelSubscriptionPlatformsConfigurationFilterInput
  $owner: String
) {
  onUpdatePlatformsConfiguration(filter: $filter, owner: $owner) {
    createdAt
    crmSettings {
      array
      boolean
      integer
      string
      __typename
    }
    enabledPlatforms
    id
    organization {
      address
      createdAt
      id
      name
      owner
      updatedAt
      url
      __typename
    }
    organizationId
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlatformsConfigurationSubscriptionVariables,
  APITypes.OnUpdatePlatformsConfigurationSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onUpdateUser(filter: $filter, profileOwner: $profileOwner) {
    conversations {
      nextToken
      __typename
    }
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserConversations = /* GraphQL */ `subscription OnUpdateUserConversations(
  $filter: ModelSubscriptionUserConversationsFilterInput
  $owner: String
) {
  onUpdateUserConversations(filter: $filter, owner: $owner) {
    conversation {
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    owner
    updatedAt
    user {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserConversationsSubscriptionVariables,
  APITypes.OnUpdateUserConversationsSubscription
>;
