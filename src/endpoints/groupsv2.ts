import { z } from 'zod';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_ = z.object({
  id: z.number().int(),
  type: z.literal(0),
  name: z.string(),
});
const Roblox_Web_Responses_Groups_GroupResponseV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  owner: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_,
  memberCount: z.number().int(),
  created: z.string().datetime(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_ = z.object({
  data: z.array(Roblox_Web_Responses_Groups_GroupResponseV2),
});
const Roblox_Groups_Api_Models_Response_UserModel = z.object({
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  hasVerifiedBadge: z.boolean(),
  userId: z.number().int(),
  username: z.string(),
  displayName: z.string(),
});
const Roblox_Groups_Api_GroupRoleResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  memberCount: z.number().int(),
});
const Roblox_Groups_Api_UserGroupRoleResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  role: Roblox_Groups_Api_GroupRoleResponse,
});
const Roblox_Groups_Api_GroupWallPostV2Model = z.object({
  id: z.number().int(),
  poster: Roblox_Groups_Api_UserGroupRoleResponse,
  body: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupWallPostV2Model),
});
const Roblox_Groups_Api_CreateWallPostRequest = z.object({
  body: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Web_Responses_Groups_GroupBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  memberCount: z.number().int(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_Responses_Groups_GroupRoleBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  rank: z.number().int(),
});
const Roblox_Groups_Api_GroupMembershipResponse = z.object({
  group: Roblox_Web_Responses_Groups_GroupBasicResponse,
  role: Roblox_Web_Responses_Groups_GroupRoleBasicResponse,
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupMembershipResponse),
});

const schemas = {
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_,
  Roblox_Web_Responses_Groups_GroupResponseV2,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_,
  Roblox_Groups_Api_Models_Response_UserModel,
  Roblox_Groups_Api_GroupRoleResponse,
  Roblox_Groups_Api_UserGroupRoleResponse,
  Roblox_Groups_Api_GroupWallPostV2Model,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_,
  Roblox_Groups_Api_CreateWallPostRequest,
  Roblox_Web_Responses_Groups_GroupBasicResponse,
  Roblox_Web_Responses_Groups_GroupRoleBasicResponse,
  Roblox_Groups_Api_GroupMembershipResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_,
};

/**
 * @api get https://groups.roblox.com/v2/groups
 * @param groupIds
 */
export const getGroups = {
  method: 'get' as const,
  path: '/v2/groups',
  baseUrl: 'https://groups.roblox.com',
  description: `If a group comes back as null, it will not be returned in the response.`,
  requestFormat: 'json' as const,
  parameters: {
    groupIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_,
  errors: [
    {
      status: 400,
      description: `2: Too many ids in request.
3: Ids could not be parsed from request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v2/groups/:groupId/wall/posts
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidWallPosts = {
  method: 'get' as const,
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You do not have permission to access this group wall.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v2/groups/:groupId/wall/posts
 * @param body The Roblox.Groups.Api.CreateWallPostRequest.
 * @param groupId
 */
export const postGroupsGroupidWallPosts = {
  method: 'post' as const,
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_CreateWallPostRequest,
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupWallPostV2Model,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
5: Your post was empty, white space, or more than 500 characters.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to access this group wall.
7: Captcha must be solved.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `4: You are posting too fast, please try again in a few minutes.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v2/users/:userId/groups/roles
 * @param userId
 */
export const getUsersUseridGroupsRoles = {
  method: 'get' as const,
  path: '/v2/users/:userId/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
