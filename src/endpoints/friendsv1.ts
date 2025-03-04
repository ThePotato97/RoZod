import { z } from 'zod';

const Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse = z.object({
  isFriendsFilterBarEnabled: z.boolean(),
  isFriendsPageSortExperimentEnabled: z.boolean(),
  isFriendsUserDataStoreCacheEnabled: z.boolean(),
  frequentFriendSortRollout: z.number().int(),
  userName: z.string(),
  displayName: z.string(),
});
const Roblox_Friends_Api_FriendsCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_Friends_Api_FriendRequest = z.object({
  sentAt: z.string().datetime(),
  senderId: z.number().int(),
  sourceUniverseId: z.number().int(),
  originSourceType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ]),
  contactName: z.string(),
});
const Roblox_Friends_Api_FriendRequestResponse = z.object({
  friendRequest: Roblox_Friends_Api_FriendRequest,
  mutualFriendsList: z.array(z.string()),
  hasVerifiedBadge: z.boolean(),
  description: z.string(),
  created: z.string().datetime(),
  isBanned: z.boolean(),
  externalAppDisplayName: z.string(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Friends_Api_FriendRequestResponse),
});
const Roblox_Friends_Api_Models_Response_UserRecommendation = z.object({
  userId: z.number().int(),
  userName: z.string(),
  userProfilePageUrl: z.string(),
  userPresenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Friends_Api_Models_Response_UserRecommendationsResponse = z.object({
  recommendedUsers: z.array(Roblox_Friends_Api_Models_Response_UserRecommendation),
});
const Roblox_Friends_Api_PendingFriendRequestCountModel = z.object({
  count: z.number().int(),
});
const Roblox_Friends_Api_Models_Response_UserResponse = z.object({
  isOnline: z.boolean(),
  presenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  isDeleted: z.boolean(),
  friendFrequentScore: z.number().int(),
  friendFrequentRank: z.number().int(),
  hasVerifiedBadge: z.boolean(),
  description: z.string(),
  created: z.string().datetime(),
  isBanned: z.boolean(),
  externalAppDisplayName: z.string(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Friends_Api_Models_Response_UserResponse),
});
const Roblox_Friends_Api_FollowCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_ = z.object({
  data: z.array(Roblox_Friends_Api_Models_Response_UserResponse),
});
const Roblox_Friends_Api_Models_Response_UserPresenceResponseModel = z.object({
  UserPresenceType: z.string(),
  UserLocationType: z.string(),
  lastLocation: z.string(),
  placeId: z.number().int(),
  rootPlaceId: z.number().int(),
  gameInstanceId: z.string().uuid(),
  universeId: z.number().int(),
  lastOnline: z.string().datetime(),
});
const Roblox_Friends_Api_Models_Response_UserPresenceResponse = z.object({
  userPresence: Roblox_Friends_Api_Models_Response_UserPresenceResponseModel,
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_ = z.object({
  data: z.array(Roblox_Friends_Api_Models_Response_UserPresenceResponse),
});
const Roblox_Friends_Api_FriendStatusResponse = z.object({
  id: z.number().int(),
  status: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_ = z.object({
  data: z.array(Roblox_Friends_Api_FriendStatusResponse),
});
const Roblox_Friends_Api_CaptchaStatusResponseModel = z.object({
  success: z.boolean(),
  isCaptchaRequired: z.boolean(),
});
const Roblox_Friends_Api_FollowingExistsRequestModel = z.object({
  targetUserIds: z.array(z.number()),
});
const Roblox_Friends_Api_Models_Response_FollowingExistsResponse = z.object({
  isFollowing: z.boolean(),
  isFollowed: z.boolean(),
  userId: z.number().int(),
});
const Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel = z.object({
  followings: z.array(Roblox_Friends_Api_Models_Response_FollowingExistsResponse),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Friends_Api_Models_Request_FriendingTokenRequestModel = z.object({
  friendingToken: z.string(),
});
const Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest = z.object({
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Friends_Api_RecountResponse = z.object({
  existingCount: z.number().int(),
  computedCount: z.number().int(),
  updated: z.boolean(),
});
const Roblox_Friends_Api_FriendshipRequestModel = z.object({
  friendshipOriginSourceType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ]),
});

const schemas = {
  Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse,
  Roblox_Friends_Api_FriendsCountResponse,
  Roblox_Friends_Api_FriendRequest,
  Roblox_Friends_Api_FriendRequestResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_,
  Roblox_Friends_Api_Models_Response_UserRecommendation,
  Roblox_Friends_Api_Models_Response_UserRecommendationsResponse,
  Roblox_Friends_Api_PendingFriendRequestCountModel,
  Roblox_Friends_Api_Models_Response_UserResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  Roblox_Friends_Api_FollowCountResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  Roblox_Friends_Api_Models_Response_UserPresenceResponseModel,
  Roblox_Friends_Api_Models_Response_UserPresenceResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_,
  Roblox_Friends_Api_FriendStatusResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_,
  Roblox_Friends_Api_CaptchaStatusResponseModel,
  Roblox_Friends_Api_FollowingExistsRequestModel,
  Roblox_Friends_Api_Models_Response_FollowingExistsResponse,
  Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Friends_Api_Models_Request_FriendingTokenRequestModel,
  Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest,
  Roblox_Friends_Api_RecountResponse,
  Roblox_Friends_Api_FriendshipRequestModel,
};

/**
 * @api post https://friends.roblox.com/v1/contacts/:targetContactId/request-friendship
 * @param targetContactId
 */
export const postContactsTargetcontactidRequestFriendship = {
  method: 'post' as const,
  path: '/v1/contacts/:targetContactId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetContactId: z.string(),
  },
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
31: User with max friends sent friend request.`,
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
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/metadata
 * @param targetUserId
 */
export const getMetadata = {
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int().optional(),
  },
  response: Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse,
  errors: [],
};
/**
 * @api get https://friends.roblox.com/v1/my/friends/count
 */
export const getMyFriendsCount = {
  method: 'get' as const,
  path: '/v1/my/friends/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/my/friends/requests
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getMyFriendsRequests = {
  method: 'get' as const,
  path: '/v1/my/friends/requests',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/recommended-users
 */
export const getRecommendedUsers = {
  method: 'get' as const,
  path: '/v1/recommended-users',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Friends_Api_Models_Response_UserRecommendationsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/user/following-exists
 * @param body The userIds potentially being followed
 */
export const postUserFollowingExists = {
  method: 'post' as const,
  path: '/v1/user/following-exists',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Friends_Api_FollowingExistsRequestModel,
  },
  response: Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel,
  errors: [
    {
      status: 400,
      description: `0: An invalid userId was passed in.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: Followers are disabled at this time.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/user/friend-requests/count
 */
export const getUserFriendRequestsCount = {
  method: 'get' as const,
  path: '/v1/user/friend-requests/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/user/friend-requests/decline-all
 */
export const postUserFriendRequestsDeclineAll = {
  method: 'post' as const,
  path: '/v1/user/friend-requests/decline-all',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:requesterUserId/accept-friend-request
 * @param requesterUserId
 */
export const postUsersRequesteruseridAcceptFriendRequest = {
  method: 'post' as const,
  path: '/v1/users/:requesterUserId/accept-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.
11: The current users friends limit has been exceeded.
12: The target users friends limit has been exceeded.`,
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
3: The user is blocked from performing this action.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:requesterUserId/decline-friend-request
 * @param requesterUserId
 */
export const postUsersRequesteruseridDeclineFriendRequest = {
  method: 'post' as const,
  path: '/v1/users/:requesterUserId/decline-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:senderUserId/accept-friend-request-with-token
 * @param body
 * @param senderUserId
 */
export const postUsersSenderuseridAcceptFriendRequestWithToken = {
  method: 'post' as const,
  path: '/v1/users/:senderUserId/accept-friend-request-with-token',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ friendingToken: z.string() }),
    senderUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
3: The user is blocked from performing this action.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
11: The current users friends limit has been exceeded.
12: The target users friends limit has been exceeded.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:targetUserId/follow
 * @param body
 * @param targetUserId
 */
export const postUsersTargetuseridFollow = {
  method: 'post' as const,
  path: '/v1/users/:targetUserId/follow',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest,
    targetUserId: z.number().int(),
  },
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.
8: The user cannot follow itself.`,
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
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:targetUserId/followers
 * @param targetUserId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersTargetuseridFollowers = {
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followers',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:targetUserId/followers/count
 * @param targetUserId
 */
export const getUsersTargetuseridFollowersCount = {
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followers/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:targetUserId/followings
 * @param targetUserId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersTargetuseridFollowings = {
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followings',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:targetUserId/followings/count
 * @param targetUserId
 */
export const getUsersTargetuseridFollowingsCount = {
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followings/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:targetUserId/followings/recount
 * @param targetUserId
 */
export const postUsersTargetuseridFollowingsRecount = {
  method: 'post' as const,
  path: '/v1/users/:targetUserId/followings/recount',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
  },
  response: Roblox_Friends_Api_RecountResponse,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
32: Counter over limit.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:targetUserId/request-friendship
 * @param body The source which the friend request originated from
 * @param targetUserId
 */
export const postUsersTargetuseridRequestFriendship = {
  method: 'post' as const,
  path: '/v1/users/:targetUserId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Friends_Api_FriendshipRequestModel,
    targetUserId: z.number().int(),
  },
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
10: The friend request does not exist.
13: The users are not in the same game.
31: User with max friends sent friend request.`,
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
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:targetUserId/unfollow
 * @param targetUserId
 */
export const postUsersTargetuseridUnfollow = {
  method: 'post' as const,
  path: '/v1/users/:targetUserId/unfollow',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.
8: The user cannot follow itself.`,
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
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://friends.roblox.com/v1/users/:targetUserId/unfriend
 * @param targetUserId
 */
export const postUsersTargetuseridUnfriend = {
  method: 'post' as const,
  path: '/v1/users/:targetUserId/unfriend',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:userId/friends
 * @param userId
 * @param userSort
 */
export const getUsersUseridFriends = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    userSort: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:userId/friends/count
 * @param userId
 */
export const getUsersUseridFriendsCount = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:userId/friends/inactive
 * @param userId
 */
export const getUsersUseridFriendsInactive = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends/inactive',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:userId/friends/online
 * @param userId
 */
export const getUsersUseridFriendsOnline = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends/online',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://friends.roblox.com/v1/users/:userId/friends/statuses
 * @param userId
 * @param userIds
 */
export const getUsersUseridFriendsStatuses = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends/statuses',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    userIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
15: Too many ids.
16: Invalid ids.`,
      schema: z.void(),
    },
  ],
};
