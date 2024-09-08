/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Conversation = {
  __typename: "Conversation",
  createdAt?: string | null,
  id: string,
  messages?: ModelMessageConnection | null,
  owner?: string | null,
  participants?: ModelUserConversationsConnection | null,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  conversation?: Conversation | null,
  conversationId: string,
  createdAt?: string | null,
  id: string,
  message?: string | null,
  updatedAt: string,
};

export type ModelUserConversationsConnection = {
  __typename: "ModelUserConversationsConnection",
  items:  Array<UserConversations | null >,
  nextToken?: string | null,
};

export type UserConversations = {
  __typename: "UserConversations",
  conversation?: Conversation | null,
  conversationId: string,
  createdAt?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type User = {
  __typename: "User",
  conversations?: ModelUserConversationsConnection | null,
  createdAt: string,
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  updatedAt: string,
};

export type Organization = {
  __typename: "Organization",
  address?: number | null,
  createdAt: string,
  id: string,
  name?: string | null,
  owner?: string | null,
  platformsConfiguration?: PlatformsConfiguration | null,
  updatedAt: string,
  url?: string | null,
};

export type PlatformsConfiguration = {
  __typename: "PlatformsConfiguration",
  createdAt: string,
  crmSettings?: PlatformsConfigurationCrmSettings | null,
  enabledPlatforms?: Array< string | null > | null,
  id: string,
  organization?: Organization | null,
  organizationId?: string | null,
  owner?: string | null,
  updatedAt: string,
};

export type PlatformsConfigurationCrmSettings = {
  __typename: "PlatformsConfigurationCrmSettings",
  array?: Array< string | null > | null,
  boolean?: boolean | null,
  integer?: number | null,
  object?: PlatformsConfigurationCrmSettingsObject | null,
  string?: string | null,
};

export type PlatformsConfigurationCrmSettingsObject = {
  __typename: "PlatformsConfigurationCrmSettingsObject",
  key1?: string | null,
  key2?: number | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt?: string | null,
  id: string,
  updatedAt: string,
};

export type ModelConversationFilterInput = {
  and?: Array< ModelConversationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelConversationFilterInput | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  and?: Array< ModelMessageFilterInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  not?: ModelMessageFilterInput | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelOrganizationFilterInput = {
  address?: ModelIntInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationFilterInput | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelPlatformsConfigurationFilterInput = {
  and?: Array< ModelPlatformsConfigurationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  enabledPlatforms?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPlatformsConfigurationFilterInput | null,
  or?: Array< ModelPlatformsConfigurationFilterInput | null > | null,
  organizationId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPlatformsConfigurationConnection = {
  __typename: "ModelPlatformsConfigurationConnection",
  items:  Array<PlatformsConfiguration | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserConversationsFilterInput = {
  and?: Array< ModelUserConversationsFilterInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserConversationsFilterInput | null,
  or?: Array< ModelUserConversationsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelConversationConditionInput = {
  and?: Array< ModelConversationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelConversationConditionInput | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateConversationInput = {
  createdAt?: string | null,
  id?: string | null,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  message?: ModelStringInput | null,
  not?: ModelMessageConditionInput | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateMessageInput = {
  conversationId: string,
  createdAt?: string | null,
  id?: string | null,
  message?: string | null,
};

export type ModelOrganizationConditionInput = {
  address?: ModelIntInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelOrganizationConditionInput | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type CreateOrganizationInput = {
  address?: number | null,
  id?: string | null,
  name?: string | null,
  url?: string | null,
};

export type ModelPlatformsConfigurationConditionInput = {
  and?: Array< ModelPlatformsConfigurationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  enabledPlatforms?: ModelStringInput | null,
  not?: ModelPlatformsConfigurationConditionInput | null,
  or?: Array< ModelPlatformsConfigurationConditionInput | null > | null,
  organizationId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePlatformsConfigurationInput = {
  crmSettings?: PlatformsConfigurationCrmSettingsInput | null,
  enabledPlatforms?: Array< string | null > | null,
  id?: string | null,
  organizationId?: string | null,
};

export type PlatformsConfigurationCrmSettingsInput = {
  array?: Array< string | null > | null,
  boolean?: boolean | null,
  integer?: number | null,
  object?: PlatformsConfigurationCrmSettingsObjectInput | null,
  string?: string | null,
};

export type PlatformsConfigurationCrmSettingsObjectInput = {
  key1?: string | null,
  key2?: number | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
};

export type ModelUserConversationsConditionInput = {
  and?: Array< ModelUserConversationsConditionInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserConversationsConditionInput | null,
  or?: Array< ModelUserConversationsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserConversationsInput = {
  conversationId: string,
  createdAt?: string | null,
  id?: string | null,
  userId: string,
};

export type DeleteConversationInput = {
  id: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type DeletePlatformsConfigurationInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteUserConversationsInput = {
  id: string,
};

export type UpdateConversationInput = {
  createdAt?: string | null,
  id: string,
};

export type UpdateMessageInput = {
  conversationId?: string | null,
  createdAt?: string | null,
  id: string,
  message?: string | null,
};

export type UpdateOrganizationInput = {
  address?: number | null,
  id: string,
  name?: string | null,
  url?: string | null,
};

export type UpdatePlatformsConfigurationInput = {
  crmSettings?: PlatformsConfigurationCrmSettingsInput | null,
  enabledPlatforms?: Array< string | null > | null,
  id: string,
  organizationId?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id: string,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  profileOwner?: string | null,
};

export type UpdateUserConversationsInput = {
  conversationId?: string | null,
  createdAt?: string | null,
  id: string,
  userId?: string | null,
};

export type ModelSubscriptionConversationFilterInput = {
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  conversationId?: ModelStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  address?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPlatformsConfigurationFilterInput = {
  and?: Array< ModelSubscriptionPlatformsConfigurationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  enabledPlatforms?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPlatformsConfigurationFilterInput | null > | null,
  organizationId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserConversationsFilterInput = {
  and?: Array< ModelSubscriptionUserConversationsFilterInput | null > | null,
  conversationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserConversationsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type GetPlatformsConfigurationQueryVariables = {
  id: string,
};

export type GetPlatformsConfigurationQuery = {
  getPlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserConversationsQueryVariables = {
  id: string,
};

export type GetUserConversationsQuery = {
  getUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      conversationId: string,
      createdAt?: string | null,
      id: string,
      message?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPlatformsConfigurationsQueryVariables = {
  filter?: ModelPlatformsConfigurationFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlatformsConfigurationsQuery = {
  listPlatformsConfigurations?:  {
    __typename: "ModelPlatformsConfigurationConnection",
    items:  Array< {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserConversationsQueryVariables = {
  filter?: ModelUserConversationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserConversationsQuery = {
  listUserConversations?:  {
    __typename: "ModelUserConversationsConnection",
    items:  Array< {
      __typename: "UserConversations",
      conversationId: string,
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: CreateConversationInput,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: CreateOrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type CreatePlatformsConfigurationMutationVariables = {
  condition?: ModelPlatformsConfigurationConditionInput | null,
  input: CreatePlatformsConfigurationInput,
};

export type CreatePlatformsConfigurationMutation = {
  createPlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserConversationsMutationVariables = {
  condition?: ModelUserConversationsConditionInput | null,
  input: CreateUserConversationsInput,
};

export type CreateUserConversationsMutation = {
  createUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: DeleteConversationInput,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: DeleteOrganizationInput,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type DeletePlatformsConfigurationMutationVariables = {
  condition?: ModelPlatformsConfigurationConditionInput | null,
  input: DeletePlatformsConfigurationInput,
};

export type DeletePlatformsConfigurationMutation = {
  deletePlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserConversationsMutationVariables = {
  condition?: ModelUserConversationsConditionInput | null,
  input: DeleteUserConversationsInput,
};

export type DeleteUserConversationsMutation = {
  deleteUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: UpdateConversationInput,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  condition?: ModelOrganizationConditionInput | null,
  input: UpdateOrganizationInput,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type UpdatePlatformsConfigurationMutationVariables = {
  condition?: ModelPlatformsConfigurationConditionInput | null,
  input: UpdatePlatformsConfigurationInput,
};

export type UpdatePlatformsConfigurationMutation = {
  updatePlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserConversationsMutationVariables = {
  condition?: ModelUserConversationsConditionInput | null,
  input: UpdateUserConversationsInput,
};

export type UpdateUserConversationsMutation = {
  updateUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
  owner?: string | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  conversationId?: string | null,
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnCreatePlatformsConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformsConfigurationFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlatformsConfigurationSubscription = {
  onCreatePlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserConversationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConversationsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserConversationsSubscription = {
  onCreateUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  conversationId?: string | null,
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnDeletePlatformsConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformsConfigurationFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlatformsConfigurationSubscription = {
  onDeletePlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserConversationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConversationsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserConversationsSubscription = {
  onDeleteUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    participants?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  conversationId?: string | null,
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    message?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    address?: number | null,
    createdAt: string,
    id: string,
    name?: string | null,
    owner?: string | null,
    platformsConfiguration?:  {
      __typename: "PlatformsConfiguration",
      createdAt: string,
      enabledPlatforms?: Array< string | null > | null,
      id: string,
      organizationId?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnUpdatePlatformsConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionPlatformsConfigurationFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlatformsConfigurationSubscription = {
  onUpdatePlatformsConfiguration?:  {
    __typename: "PlatformsConfiguration",
    createdAt: string,
    crmSettings?:  {
      __typename: "PlatformsConfigurationCrmSettings",
      array?: Array< string | null > | null,
      boolean?: boolean | null,
      integer?: number | null,
      string?: string | null,
    } | null,
    enabledPlatforms?: Array< string | null > | null,
    id: string,
    organization?:  {
      __typename: "Organization",
      address?: number | null,
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    organizationId?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    conversations?:  {
      __typename: "ModelUserConversationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserConversationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConversationsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserConversationsSubscription = {
  onUpdateUserConversations?:  {
    __typename: "UserConversations",
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};
