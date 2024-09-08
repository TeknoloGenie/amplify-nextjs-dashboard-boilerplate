/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createConversation = /* GraphQL */ `mutation CreateConversation(
  $condition: ModelConversationConditionInput
  $input: CreateConversationInput!
) {
  createConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: CreateOrganizationInput!
) {
  createOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const createPlatformsConfiguration = /* GraphQL */ `mutation CreatePlatformsConfiguration(
  $condition: ModelPlatformsConfigurationConditionInput
  $input: CreatePlatformsConfigurationInput!
) {
  createPlatformsConfiguration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePlatformsConfigurationMutationVariables,
  APITypes.CreatePlatformsConfigurationMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserConversations = /* GraphQL */ `mutation CreateUserConversations(
  $condition: ModelUserConversationsConditionInput
  $input: CreateUserConversationsInput!
) {
  createUserConversations(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserConversationsMutationVariables,
  APITypes.CreateUserConversationsMutation
>;
export const deleteConversation = /* GraphQL */ `mutation DeleteConversation(
  $condition: ModelConversationConditionInput
  $input: DeleteConversationInput!
) {
  deleteConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationMutationVariables,
  APITypes.DeleteConversationMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $condition: ModelOrganizationConditionInput
  $input: DeleteOrganizationInput!
) {
  deleteOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const deletePlatformsConfiguration = /* GraphQL */ `mutation DeletePlatformsConfiguration(
  $condition: ModelPlatformsConfigurationConditionInput
  $input: DeletePlatformsConfigurationInput!
) {
  deletePlatformsConfiguration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePlatformsConfigurationMutationVariables,
  APITypes.DeletePlatformsConfigurationMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserConversations = /* GraphQL */ `mutation DeleteUserConversations(
  $condition: ModelUserConversationsConditionInput
  $input: DeleteUserConversationsInput!
) {
  deleteUserConversations(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserConversationsMutationVariables,
  APITypes.DeleteUserConversationsMutation
>;
export const updateConversation = /* GraphQL */ `mutation UpdateConversation(
  $condition: ModelConversationConditionInput
  $input: UpdateConversationInput!
) {
  updateConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationMutationVariables,
  APITypes.UpdateConversationMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $condition: ModelOrganizationConditionInput
  $input: UpdateOrganizationInput!
) {
  updateOrganization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const updatePlatformsConfiguration = /* GraphQL */ `mutation UpdatePlatformsConfiguration(
  $condition: ModelPlatformsConfigurationConditionInput
  $input: UpdatePlatformsConfigurationInput!
) {
  updatePlatformsConfiguration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePlatformsConfigurationMutationVariables,
  APITypes.UpdatePlatformsConfigurationMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserConversations = /* GraphQL */ `mutation UpdateUserConversations(
  $condition: ModelUserConversationsConditionInput
  $input: UpdateUserConversationsInput!
) {
  updateUserConversations(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserConversationsMutationVariables,
  APITypes.UpdateUserConversationsMutation
>;
