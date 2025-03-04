import { z } from 'zod';

const Roblox_Groups_Api_Models_Response_UserModel = z.object({
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  hasVerifiedBadge: z.boolean(),
  userId: z.number().int(),
  username: z.string(),
  displayName: z.string(),
});
const Roblox_Groups_Api_ShoutResponse = z.object({
  body: z.string(),
  poster: Roblox_Groups_Api_Models_Response_UserModel,
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Groups_Api_GroupDetailResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  owner: Roblox_Groups_Api_Models_Response_UserModel,
  shout: Roblox_Groups_Api_ShoutResponse,
  memberCount: z.number().int(),
  isBuildersClubOnly: z.boolean(),
  publicEntryAllowed: z.boolean(),
  isLocked: z.boolean(),
  hasVerifiedBadge: z.boolean(),
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
const Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem = z.object({
  actor: Roblox_Groups_Api_UserGroupRoleResponse,
  actionType: z.string(),
  description: z.unknown(),
  created: z.string().datetime(),
});
const Roblox_Groups_Api_GroupAuditLogPageResponse_Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem_ =
  z.object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem),
  });
const Roblox_Groups_Api_MembersRequest = z.object({
  UserIds: z.array(z.number()),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Groups_Api_GroupJoinRequestResponse = z.object({
  requester: Roblox_Groups_Api_Models_Response_UserModel,
  created: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupJoinRequestResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupJoinRequestResponse),
});
const Roblox_Groups_Api_GroupPostsPermissionsModel = z.object({
  viewWall: z.boolean(),
  postToWall: z.boolean(),
  deleteFromWall: z.boolean(),
  viewStatus: z.boolean(),
  postToStatus: z.boolean(),
});
const Roblox_Groups_Api_GroupMembershipPermissionsModel = z.object({
  changeRank: z.boolean(),
  inviteMembers: z.boolean(),
  removeMembers: z.boolean(),
});
const Roblox_Groups_Api_GroupManagementPermissionsModel = z.object({
  manageRelationships: z.boolean(),
  manageClan: z.boolean(),
  viewAuditLogs: z.boolean(),
});
const Roblox_Groups_Api_GroupEconomyPermissionsModel = z.object({
  spendGroupFunds: z.boolean(),
  advertiseGroup: z.boolean(),
  createItems: z.boolean(),
  manageItems: z.boolean(),
  addGroupPlaces: z.boolean(),
  manageGroupGames: z.boolean(),
  viewGroupPayouts: z.boolean(),
  viewAnalytics: z.boolean(),
});
const Roblox_Groups_Api_GroupOpenCloudPermissionsModel = z.object({
  useCloudAuthentication: z.boolean(),
  administerCloudAuthentication: z.boolean(),
});
const Roblox_Groups_Api_GroupPermissionsModel = z.object({
  groupPostsPermissions: Roblox_Groups_Api_GroupPostsPermissionsModel,
  groupMembershipPermissions: Roblox_Groups_Api_GroupMembershipPermissionsModel,
  groupManagementPermissions: Roblox_Groups_Api_GroupManagementPermissionsModel,
  groupEconomyPermissions: Roblox_Groups_Api_GroupEconomyPermissionsModel,
  groupOpenCloudPermissions: Roblox_Groups_Api_GroupOpenCloudPermissionsModel,
});
const Roblox_Groups_Api_GroupMembershipMetadataResponse = z.object({
  groupId: z.number().int(),
  isPrimary: z.boolean(),
  isPendingJoin: z.boolean(),
  userRole: Roblox_Groups_Api_UserGroupRoleResponse,
  permissions: Roblox_Groups_Api_GroupPermissionsModel,
  areGroupGamesVisible: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  canConfigure: z.boolean(),
});
const Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem = z.object({
  name: z.string(),
  created: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem_ =
  z.object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem),
  });
const Roblox_Groups_Api_GroupPayoutRestrictionResponse = z.object({
  canUseRecurringPayout: z.boolean(),
  canUseOneTimePayout: z.boolean(),
});
const Roblox_Groups_Api_GroupPayoutResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  percentage: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPayoutResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupPayoutResponse),
});
const Roblox_Groups_Api_PayoutRecipientRequest = z.object({
  recipientId: z.number().int(),
  recipientType: z.union([z.literal(0), z.literal(1)]),
  amount: z.number().int(),
});
const Roblox_Groups_Api_PayoutRequest = z.object({
  PayoutType: z.union([z.literal(1), z.literal(2)]),
  Recipients: z.array(Roblox_Groups_Api_PayoutRecipientRequest),
});
const Roblox_Groups_Api_GroupRelationshipsResponse = z.object({
  groupId: z.number().int(),
  relationshipType: z.union([z.literal(1), z.literal(2)]),
  totalGroupCount: z.number().int(),
  relatedGroups: z.array(Roblox_Groups_Api_GroupDetailResponse),
  nextRowIndex: z.number().int(),
});
const Roblox_Groups_Api_RelationshipsRequest = z.object({
  GroupIds: z.array(z.number()),
});
const Roblox_Groups_Api_GroupAllRolesResponse = z.object({
  groupId: z.number().int(),
  roles: z.array(Roblox_Groups_Api_GroupRoleResponse),
});
const Roblox_Groups_Api_GroupPermissionsResponse = z.object({
  groupId: z.number().int(),
  role: Roblox_Groups_Api_GroupRoleResponse,
  permissions: Roblox_Groups_Api_GroupPermissionsModel,
});
const Roblox_Groups_Api_UpdatePermissionsRequest = z.object({
  permissions: z.object({
    DeleteFromWall: z.boolean(),
    PostToWall: z.boolean(),
    InviteMembers: z.boolean(),
    PostToStatus: z.boolean(),
    RemoveMembers: z.boolean(),
    ViewStatus: z.boolean(),
    ViewWall: z.boolean(),
    ChangeRank: z.boolean(),
    AdvertiseGroup: z.boolean(),
    ManageRelationships: z.boolean(),
    AddGroupPlaces: z.boolean(),
    ViewAuditLogs: z.boolean(),
    CreateItems: z.boolean(),
    ManageItems: z.boolean(),
    SpendGroupFunds: z.boolean(),
    ManageClan: z.boolean(),
    ManageGroupGames: z.boolean(),
    UseCloudAuthentication: z.boolean(),
    AdministerCloudAuthentication: z.boolean(),
    ViewAnalytics: z.boolean(),
  }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_UserModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_Models_Response_UserModel),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPermissionsResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupPermissionsResponse),
});
const Roblox_Groups_Api_GroupSettingsResponse = z.object({
  isApprovalRequired: z.boolean(),
  isBuildersClubRequired: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areGroupGamesVisible: z.boolean(),
  isGroupNameChangeEnabled: z.boolean(),
});
const Roblox_Groups_Api_UpdateGroupSettingsRequest = z.object({
  isApprovalRequired: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areGroupGamesVisible: z.boolean(),
});
const Roblox_Groups_Api_SocialLinkResponse = z.object({
  id: z.number().int(),
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
  url: z.string(),
  title: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_SocialLinkResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_SocialLinkResponse),
});
const Roblox_Groups_Api_SocialLinkRequest = z.object({
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
  url: z.string(),
  title: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_UserGroupRoleResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_UserGroupRoleResponse),
});
const Roblox_Groups_Api_JoinGroupRequest = z.object({
  sessionId: z.string(),
  redemptionToken: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Groups_Api_Models_Response_GroupWallPostModel = z.object({
  id: z.number().int(),
  poster: Roblox_Groups_Api_Models_Response_UserModel,
  body: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupWallPostModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_Models_Response_GroupWallPostModel),
});
const Roblox_Groups_Api_CreateWallPostRequest = z.object({
  body: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Groups_Api_GroupConfigurationResponse = z.object({
  nameMaxLength: z.number().int(),
  descriptionMaxLength: z.number().int(),
  iconMaxFileSizeMb: z.number().int(),
  cost: z.number().int(),
  isUsingTwoStepWebviewComponent: z.boolean(),
});
const Roblox_Groups_Api_RecurringPayoutsConfigurationResponse = z.object({
  maxPayoutPartners: z.number().int(),
});
const Roblox_Groups_Api_RoleConfigurationResponse = z.object({
  nameMaxLength: z.number().int(),
  descriptionMaxLength: z.number().int(),
  limit: z.number().int(),
  cost: z.number().int(),
  minRank: z.number().int(),
  maxRank: z.number().int(),
});
const Roblox_Groups_Api_GroupNameChangeConfigurationResponse = z.object({
  cost: z.number().int(),
  cooldownInDays: z.number().int(),
  ownershipCooldownInDays: z.number().int(),
});
const Roblox_Groups_Api_GroupConfigurationDisplayOptionsResponse = z.object({
  groupConfiguration: Roblox_Groups_Api_GroupConfigurationResponse,
  recurringPayoutsConfiguration: Roblox_Groups_Api_RecurringPayoutsConfigurationResponse,
  roleConfiguration: Roblox_Groups_Api_RoleConfigurationResponse,
  groupNameChangeConfiguration: Roblox_Groups_Api_GroupNameChangeConfigurationResponse,
  isPremiumPayoutsEnabled: z.boolean(),
  isDefaultEmblemPolicyEnabled: z.boolean(),
});
const Roblox_Groups_Api_GroupsDisplayOptionsResponse = z.object({
  groupLimit: z.number().int(),
  currentGroupCount: z.number().int(),
  groupStatusMaxLength: z.number().int(),
  groupPostMaxLength: z.number().int(),
  isGroupWallNotificationsEnabled: z.boolean(),
  groupWallNotificationsSubscribeIntervalInMilliseconds: z.number().int(),
  areProfileGroupsHidden: z.boolean(),
  isGroupDetailsPolicyEnabled: z.boolean(),
  showPreviousGroupNames: z.boolean(),
});
const Roblox_Groups_Api_GroupSearchResponseItem = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  memberCount: z.number().int(),
  previousName: z.string(),
  publicEntryAllowed: z.boolean(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Groups_Api_GroupSearchPageResponse = z.object({
  keyword: z.string(),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupSearchResponseItem),
});
const Roblox_Web_Responses_Groups_GroupBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  memberCount: z.number().int(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupBasicResponse_ = z.object({
  data: z.array(Roblox_Web_Responses_Groups_GroupBasicResponse),
});
const Roblox_Groups_Api_GroupSearchMetadataResponse = z.object({
  SuggestedGroupKeywords: z.array(z.string()),
  ShowFriendsGroupsSort: z.boolean(),
});
const Roblox_Groups_Api_GroupRoleDetailResponse = z.object({
  groupId: z.number().int(),
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  memberCount: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupRoleDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupRoleDetailResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupDetailResponse),
});
const Roblox_Groups_Api_GroupMembershipDetailResponse = z.object({
  group: Roblox_Groups_Api_GroupDetailResponse,
  role: Roblox_Groups_Api_GroupRoleResponse,
  isPrimaryGroup: z.boolean(),
});
const Roblox_Groups_Api_UserGroupMembershipResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  groups: z.array(Roblox_Groups_Api_GroupMembershipDetailResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_UserGroupMembershipResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_UserGroupMembershipResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupMembershipDetailResponse),
});
const Roblox_Groups_Api_ChangeOwnerRequest = z.object({
  userId: z.number().int(),
});
const Roblox_Groups_Api_Models_Request_CreateRoleSetRequest = z.object({
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  usingGroupFunds: z.boolean(),
});
const postGroupsCreate_Body = z.object({
  name: z.string(),
  description: z.string(),
  publicGroup: z.boolean(),
  buildersClubMembersOnly: z.boolean(),
  Files: z.unknown(),
});
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
const Roblox_Groups_Api_GroupPolicyRequest = z.object({
  groupIds: z.array(z.number()),
});
const Roblox_Groups_Api_GroupPolicyResponse = z.object({
  canViewGroup: z.boolean(),
  groupId: z.number().int(),
});
const Roblox_Groups_Api_GroupPoliciesResponse = z.object({
  groups: z.array(Roblox_Groups_Api_GroupPolicyResponse),
});
const Roblox_Groups_Api_PrimaryGroupRequest = z.object({
  groupId: z.number().int(),
});
const Roblox_Groups_Api_UpdateGroupDescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_Groups_Api_GroupDescriptionResponse = z.object({
  newDescription: z.string(),
});
const Roblox_Groups_Api_UpdateGroupNameRequest = z.object({ name: z.string() });
const Roblox_Groups_Api_UpdateGroupNameResponse = z.object({
  newName: z.string(),
});
const Roblox_Groups_Api_Models_Request_UpdateRoleSetRequest = z.object({
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
});
const Roblox_Groups_Api_PostGroupStatusRequest = z.object({
  message: z.string(),
});
const Roblox_Groups_Api_UpdateUserRoleRequest = z.object({
  roleId: z.number().int(),
});

const schemas = {
  Roblox_Groups_Api_Models_Response_UserModel,
  Roblox_Groups_Api_ShoutResponse,
  Roblox_Groups_Api_GroupDetailResponse,
  Roblox_Groups_Api_GroupRoleResponse,
  Roblox_Groups_Api_UserGroupRoleResponse,
  Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem,
  Roblox_Groups_Api_GroupAuditLogPageResponse_Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem_,
  Roblox_Groups_Api_MembersRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Groups_Api_GroupJoinRequestResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupJoinRequestResponse_,
  Roblox_Groups_Api_GroupPostsPermissionsModel,
  Roblox_Groups_Api_GroupMembershipPermissionsModel,
  Roblox_Groups_Api_GroupManagementPermissionsModel,
  Roblox_Groups_Api_GroupEconomyPermissionsModel,
  Roblox_Groups_Api_GroupOpenCloudPermissionsModel,
  Roblox_Groups_Api_GroupPermissionsModel,
  Roblox_Groups_Api_GroupMembershipMetadataResponse,
  Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem_,
  Roblox_Groups_Api_GroupPayoutRestrictionResponse,
  Roblox_Groups_Api_GroupPayoutResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPayoutResponse_,
  Roblox_Groups_Api_PayoutRecipientRequest,
  Roblox_Groups_Api_PayoutRequest,
  Roblox_Groups_Api_GroupRelationshipsResponse,
  Roblox_Groups_Api_RelationshipsRequest,
  Roblox_Groups_Api_GroupAllRolesResponse,
  Roblox_Groups_Api_GroupPermissionsResponse,
  Roblox_Groups_Api_UpdatePermissionsRequest,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_UserModel_,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPermissionsResponse_,
  Roblox_Groups_Api_GroupSettingsResponse,
  Roblox_Groups_Api_UpdateGroupSettingsRequest,
  Roblox_Groups_Api_SocialLinkResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_SocialLinkResponse_,
  Roblox_Groups_Api_SocialLinkRequest,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_UserGroupRoleResponse_,
  Roblox_Groups_Api_JoinGroupRequest,
  Roblox_Groups_Api_Models_Response_GroupWallPostModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupWallPostModel_,
  Roblox_Groups_Api_CreateWallPostRequest,
  Roblox_Groups_Api_GroupConfigurationResponse,
  Roblox_Groups_Api_RecurringPayoutsConfigurationResponse,
  Roblox_Groups_Api_RoleConfigurationResponse,
  Roblox_Groups_Api_GroupNameChangeConfigurationResponse,
  Roblox_Groups_Api_GroupConfigurationDisplayOptionsResponse,
  Roblox_Groups_Api_GroupsDisplayOptionsResponse,
  Roblox_Groups_Api_GroupSearchResponseItem,
  Roblox_Groups_Api_GroupSearchPageResponse,
  Roblox_Web_Responses_Groups_GroupBasicResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupBasicResponse_,
  Roblox_Groups_Api_GroupSearchMetadataResponse,
  Roblox_Groups_Api_GroupRoleDetailResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupRoleDetailResponse_,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupDetailResponse_,
  Roblox_Groups_Api_GroupMembershipDetailResponse,
  Roblox_Groups_Api_UserGroupMembershipResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_UserGroupMembershipResponse_,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipDetailResponse_,
  Roblox_Groups_Api_ChangeOwnerRequest,
  Roblox_Groups_Api_Models_Request_CreateRoleSetRequest,
  postGroupsCreate_Body,
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_,
  Roblox_Web_Responses_Groups_GroupResponseV2,
  Roblox_Groups_Api_GroupPolicyRequest,
  Roblox_Groups_Api_GroupPolicyResponse,
  Roblox_Groups_Api_GroupPoliciesResponse,
  Roblox_Groups_Api_PrimaryGroupRequest,
  Roblox_Groups_Api_UpdateGroupDescriptionRequest,
  Roblox_Groups_Api_GroupDescriptionResponse,
  Roblox_Groups_Api_UpdateGroupNameRequest,
  Roblox_Groups_Api_UpdateGroupNameResponse,
  Roblox_Groups_Api_Models_Request_UpdateRoleSetRequest,
  Roblox_Groups_Api_PostGroupStatusRequest,
  Roblox_Groups_Api_UpdateUserRoleRequest,
};

/**
 * @api get https://groups.roblox.com/v1/groups/:groupId
 * @param groupId
 */
export const getGroupsGroupid = {
  method: 'get' as const,
  path: '/v1/groups/:groupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupDetailResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/audit-log
 * @param groupId
 * @param actionType
 * @param userId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidAuditLog = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/audit-log',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    actionType: z
      .enum([
        'DeletePost',
        'RemoveMember',
        'AcceptJoinRequest',
        'DeclineJoinRequest',
        'PostStatus',
        'ChangeRank',
        'BuyAd',
        'SendAllyRequest',
        'CreateEnemy',
        'AcceptAllyRequest',
        'DeclineAllyRequest',
        'DeleteAlly',
        'DeleteEnemy',
        'AddGroupPlace',
        'RemoveGroupPlace',
        'CreateItems',
        'ConfigureItems',
        'SpendGroupFunds',
        'ChangeOwner',
        'Delete',
        'AdjustCurrencyAmounts',
        'Abandon',
        'Claim',
        'Rename',
        'ChangeDescription',
        'InviteToClan',
        'KickFromClan',
        'CancelClanInvite',
        'BuyClan',
        'CreateGroupAsset',
        'UpdateGroupAsset',
        'ConfigureGroupAsset',
        'RevertGroupAsset',
        'CreateGroupDeveloperProduct',
        'ConfigureGroupGame',
        'Lock',
        'Unlock',
        'CreateGamePass',
        'CreateBadge',
        'ConfigureBadge',
        'SavePlace',
        'PublishPlace',
        'UpdateRolesetRank',
        'UpdateRolesetData',
      ])
      .optional(),
    userId: z.number().int().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Groups_Api_GroupAuditLogPageResponse_Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/change-owner
 * @param body The request.
 * @param groupId
 */
export const postGroupsGroupidChangeOwner = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/change-owner',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ userId: z.number().int() }),
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
15: User is not a member of the group.
16: The user does not have the necessary level of premium membership.`,
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
17: You are not authorized to change the owner of this group.
25: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/claim-ownership
 * @param groupId
 */
export const postGroupsGroupidClaimOwnership = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/claim-ownership',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
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
11: You are not authorized to claim this group
12: This group already has an owner
13: Too many attempts to claim groups. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/description
 * @param body The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
 * @param groupId
 */
export const patchGroupsGroupidDescription = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/description',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ description: z.string() }),
    groupId: z.number().int(),
  },
  response: z.object({ newDescription: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
29: Your group description was empty.`,
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
18: The description is too long.
23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @param body The Roblox.Groups.Api.MembersRequest.
 * @param groupId
 */
export const deleteGroupsGroupidJoinRequests = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/join-requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_MembersRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.`,
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
 * @api get https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidJoinRequests = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/join-requests',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupJoinRequestResponse_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `19: You have insufficient permissions for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @param body The Roblox.Groups.Api.MembersRequest.
 * @param groupId
 */
export const postGroupsGroupidJoinRequests = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/join-requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_MembersRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
20: The group join request is invalid.`,
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
6: You are already in the maximum number of groups.
19: You have insufficient permissions for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: Something went wrong.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @param groupId
 * @param userId
 */
export const deleteGroupsGroupidJoinRequestsUsersUserid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
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
4: You do not have permission to manage this member.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @param groupId
 * @param userId
 */
export const getGroupsGroupidJoinRequestsUsersUserid = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupJoinRequestResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `19: You have insufficient permissions for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @param groupId
 * @param userId
 */
export const postGroupsGroupidJoinRequestsUsersUserid = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
20: The group join request is invalid.`,
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
6: You are already in the maximum number of groups.
19: You have insufficient permissions for this request.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/membership
 * @param groupId
 */
export const getGroupsGroupidMembership = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/membership',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupMembershipMetadataResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/name
 * @param body The Roblox.Groups.Api.UpdateGroupNameRequest.
 * @param groupId
 */
export const patchGroupsGroupidName = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/name',
  baseUrl: 'https://groups.roblox.com',
  description: `This endpoint will charge Robux for the group rename.`,
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ name: z.string() }),
    groupId: z.number().int(),
  },
  response: z.object({ newName: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
13: The name is invalid.
19: The name is too long.
20: The name has been taken.`,
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
12: Insufficient Robux funds.
14: The name is moderated.
23: Insufficient permissions to complete the request.
38: Your account must be verified in order to change your group&#x27;s name.
39: The group ownership was changed too recently.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `36: The name was changed too recently.
37: The name was in use too recently.`,
      schema: z.void(),
    },
    {
      status: 413,
      description: `0: Unknown error.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `17: Too many requests.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/name-history
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidNameHistory = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/name-history',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/payout-restriction
 * @param groupId
 */
export const getGroupsGroupidPayoutRestriction = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/payout-restriction',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPayoutRestrictionResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: You don&#x27;t have permission to view this group&#x27;s payouts.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/payouts
 * @param groupId
 */
export const getGroupsGroupidPayouts = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/payouts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPayoutResponse_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: You don&#x27;t have permission to view this group&#x27;s payouts.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/payouts
 * @param body The Roblox.Groups.Api.PayoutRequest.
 * @param groupId
 */
export const postGroupsGroupidPayouts = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/payouts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_PayoutRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
12: Insufficient Robux funds.
24: Invalid payout type.
25: The amount is invalid.
26: Too many recipients.`,
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
23: Insufficient permissions to complete the request.
28: Group has paid out too recently. Please wait and try again.
35: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `22: The feature is disabled.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/payouts/recurring
 * @param body The Roblox.Groups.Api.PayoutRequest.
 * @param groupId
 */
export const postGroupsGroupidPayoutsRecurring = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/payouts/recurring',
  baseUrl: 'https://groups.roblox.com',
  description: `This endpoint will remove any recipients not sent in the request.
If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_PayoutRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
24: Invalid payout type.
25: The amount is invalid.
26: Too many recipients.
27: The recipients are invalid.`,
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
12: Insufficient Robux funds.
28: Group has paid out too recently. Please wait and try again.
35: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `22: The feature is disabled.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType
 * @param groupId
 * @param groupRelationshipType
 * @param StartRowIndex
 * @param MaxRows
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptype = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    StartRowIndex: z.number().int(),
    MaxRows: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRelationshipsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
4: Group relationship type or request type is invalid.
8: Invalid or missing pagination parameters`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId
 * @param groupId
 * @param groupRelationshipType
 * @param relatedGroupId
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRelatedgroupid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Invalid group.
3: Target group is invalid or does not exist.
11: Relationship does not exist.`,
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
8: You are blocked from communicating with this user.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId
 * @param groupId
 * @param groupRelationshipType
 * @param relatedGroupId
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRelatedgroupid = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
4: Your group cannot establish a relationship with itself.`,
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
5: Your group does not allow enemy declarations.
6: Other group does not allow enemy declarations.
7: Your group already has a relationship with the target group.
8: You are blocked from communicating with this user.
9: Insufficient permissions.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @param body The Roblox.Groups.Api.RelationshipsRequest.
 * @param groupId
 * @param groupRelationshipType
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRequests = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_RelationshipsRequest,
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
  },
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
 * @api get https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @param groupId
 * @param groupRelationshipType
 * @param StartRowIndex
 * @param MaxRows
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptypeRequests = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    StartRowIndex: z.number().int(),
    MaxRows: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRelationshipsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
4: Group relationship type or request type is invalid.
8: Invalid or missing pagination parameters`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `5: You don&#x27;t have permission to manage this group&#x27;s relationships.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @param body The Roblox.Groups.Api.RelationshipsRequest.
 * @param groupId
 * @param groupRelationshipType
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRequests = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_RelationshipsRequest,
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
  },
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
 * @api delete https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId
 * @param groupId
 * @param groupRelationshipType
 * @param relatedGroupId
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRequestsRelatedgroupid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
10: Relationship request does not exist.`,
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
9: Insufficient permissions.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId
 * @param groupId
 * @param groupRelationshipType
 * @param relatedGroupId
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRequestsRelatedgroupid = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
10: Relationship request does not exist.`,
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
9: Insufficient permissions.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/roles
 * @param groupId
 */
export const getGroupsGroupidRoles = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupAllRolesResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/permissions
 * @param groupId
 * @param roleSetId
 */
export const getGroupsGroupidRolesRolesetidPermissions = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/roles/:roleSetId/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    roleSetId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
2: The roleset is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `3: You are not authorized to view/edit permissions for this role.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/permissions
 * @param body The request.
 * @param groupId
 * @param roleSetId
 */
export const patchGroupsGroupidRolesRolesetidPermissions = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/roles/:roleSetId/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_UpdatePermissionsRequest,
    groupId: z.number().int(),
    roleSetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
2: The roleset is invalid or does not exist.`,
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
3: You are not authorized to view/edit permissions for this role.
4: This role&#x27;s permissions can not be modified.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/users
 * @param groupId
 * @param roleSetId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidRolesRolesetidUsers = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/roles/:roleSetId/users',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    roleSetId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_UserModel_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: The roleset is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/roles/guest/permissions
 * @param groupId
 */
export const getGroupsGroupidRolesGuestPermissions = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/roles/guest/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/roles/permissions
 * @param groupId
 */
export const getGroupsGroupidRolesPermissions = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/roles/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPermissionsResponse_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/rolesets/:rolesetId
 * @param groupId
 * @param rolesetId
 */
export const deleteGroupsGroupidRolesetsRolesetid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/rolesets/:rolesetId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    rolesetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `10: This group does not exist.
15: This role does not exist.
17: Cannot remove any more roles
18: Cannot delete this role.`,
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
9: You do not have permissions to perform this action.
16: There are users in this role.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/rolesets/:rolesetId
 * @param body The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
 * @param groupId
 * @param rolesetId
 */
export const patchGroupsGroupidRolesetsRolesetid = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/rolesets/:rolesetId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_Models_Request_UpdateRoleSetRequest,
    groupId: z.number().int(),
    rolesetId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRoleResponse,
  errors: [
    {
      status: 400,
      description: `5: Role name already exists.
6: Rank value is out of bounds.
7: The role name is too long.
8: The role description is too long.
10: This group does not exist.
14: Role name can not be empty.
15: This role does not exist.
19: Cannot update Guest role.
20: Cannot update Owner role rank.`,
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
9: You do not have permissions to perform this action.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/rolesets/create
 * @param body The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
 * @param groupId
 */
export const postGroupsGroupidRolesetsCreate = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/rolesets/create',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_Models_Request_CreateRoleSetRequest,
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRoleResponse,
  errors: [
    {
      status: 400,
      description: `0: Something went wrong.
3: You do not have enough funds to purchase this role.
5: Role name already exists.
6: Rank value is out of bounds.
7: The role name is too long.
8: The role description is too long.
10: This group does not exist.
11: Failed to process payment to purchase role.
12: Limit for roles have been reached on this group.
14: Role name can not be empty.
15: This role does not exist.`,
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
9: You do not have permissions to perform this action.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/settings
 * @param groupId
 */
export const getGroupsGroupidSettings = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/settings',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/settings
 * @param body Roblox.Groups.Api.UpdateGroupSettingsRequest
 * @param groupId
 */
export const patchGroupsGroupidSettings = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/settings',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_UpdateGroupSettingsRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
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
23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `31: Service is currently unavailable.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/social-links
 * @param groupId
 */
export const getGroupsGroupidSocialLinks = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/social-links',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_SocialLinkResponse_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `13: Only users who are over thirteen years of age may edit social links.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/social-links
 * @param body The Roblox.Groups.Api.SocialLinkRequest
 * @param groupId
 */
export const postGroupsGroupidSocialLinks = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/social-links',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_SocialLinkRequest,
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_SocialLinkResponse,
  errors: [
    {
      status: 400,
      description: `3: The social link title is too long.
4: The social link title cannot be empty.
5: The social link url cannot be empty.
7: The request was null.
9: The social link type is invalid.
12: The social link title was moderated.`,
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
2: You do not have permission to configure this social link.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `8: The requested group or social link was not found.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `11: Social links cannot be processed as this time.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/social-links/:socialLinkId
 * @param groupId
 * @param socialLinkId
 */
export const deleteGroupsGroupidSocialLinksSociallinkid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/social-links/:socialLinkId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    socialLinkId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
10: The social link is not for a group.
15: The social link id doesn&#x27;t match the group id.`,
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
2: You do not have permission to configure this social link.
13: Only users who are over thirteen years of age may edit social links.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/social-links/:socialLinkId
 * @param body The Roblox.Groups.Api.SocialLinkRequest.
 * @param groupId
 * @param socialLinkId
 */
export const patchGroupsGroupidSocialLinksSociallinkid = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/social-links/:socialLinkId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_SocialLinkRequest,
    groupId: z.number().int(),
    socialLinkId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
3: The social link title is too long.
4: The social link title cannot be empty.
5: The social link url cannot be empty.
6: The social link url was improperly formatted.
7: The request was null.
8: The requested group or social link was not found.
9: The social link type is invalid.
10: The social link is not for a group.
12: The social link title was moderated.
16: A social link with this type already exists on this group.`,
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
2: You do not have permission to configure this social link.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `11: Social links cannot be processed as this time.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/status
 * @param body The Roblox.Groups.Api.PostGroupStatusRequest.
 * @param groupId
 */
export const patchGroupsGroupidStatus = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/status',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ message: z.string() }),
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_ShoutResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
6: You are not authorized to set the status of this group
7: Missing group status content.`,
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
 * @api get https://groups.roblox.com/v1/groups/:groupId/users
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidUsers = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/users',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_UserGroupRoleResponse_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/users
 * @param body Only supplied when captcha has been solved.
 * @param groupId
 */
export const postGroupsGroupidUsers = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/users',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_JoinGroupRequest,
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
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
5: You must pass the captcha test before joining this group.
6: You are already in the maximum number of groups.
9: You do not have the builders club membership necessary to join this group.
14: You cannot join a closed group.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `7: You have already requested to join this group.
8: You are already a member of this group.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `10: Too many attempts to join the group. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/users/:userId
 * @param groupId
 * @param userId
 */
export const deleteGroupsGroupidUsersUserid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.`,
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
4: You do not have permission to manage this member.
25: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/:groupId/users/:userId
 * @param body The Roblox.Groups.Api.UpdateUserRoleRequest.
 * @param groupId
 * @param userId
 */
export const patchGroupsGroupidUsersUserid = {
  method: 'patch' as const,
  path: '/v1/groups/:groupId/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ roleId: z.number().int() }),
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
2: The roleset is invalid or does not exist.
3: The user is invalid or does not exist.
23: You cannot change your own role.
26: You cannot change the user&#x27;s role to the same role.`,
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
4: You do not have permission to manage this member.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/:groupId/wall/posts
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidWallPosts = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/wall/posts',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupWallPostModel_,
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
 * @api post https://groups.roblox.com/v1/groups/:groupId/wall/posts
 * @param body The Roblox.Groups.Api.CreateWallPostRequest.
 * @param groupId
 */
export const postGroupsGroupidWallPosts = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_CreateWallPostRequest,
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_Models_Response_GroupWallPostModel,
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
 * @api delete https://groups.roblox.com/v1/groups/:groupId/wall/posts/:postId
 * @param groupId
 * @param postId
 */
export const deleteGroupsGroupidWallPostsPostid = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/wall/posts/:postId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    postId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The group wall post id is invalid or does not exist.`,
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
2: You do not have permission to access this group wall.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://groups.roblox.com/v1/groups/:groupId/wall/subscribe
 * @param groupId
 */
export const postGroupsGroupidWallSubscribe = {
  method: 'post' as const,
  path: '/v1/groups/:groupId/wall/subscribe',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
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
2: You do not have permission to access this group wall.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/groups/:groupId/wall/users/:userId/posts
 * @param groupId
 * @param userId
 */
export const deleteGroupsGroupidWallUsersUseridPosts = {
  method: 'delete' as const,
  path: '/v1/groups/:groupId/wall/users/:userId/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
6: The user specified is invalid or does not exist.`,
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
2: You do not have permission to access this group wall.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/configuration/metadata
 */
export const getGroupsConfigurationMetadata = {
  method: 'get' as const,
  path: '/v1/groups/configuration/metadata',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Groups_Api_GroupConfigurationDisplayOptionsResponse,
  errors: [],
};
/**
 * @api post https://groups.roblox.com/v1/groups/create
 * @param body
 */
export const postGroupsCreate = {
  method: 'post' as const,
  path: '/v1/groups/create',
  baseUrl: 'https://groups.roblox.com',
  description: `This endpoint will charge Robux for the group purchase.
Http status code 413 is thrown when the group icon file size is too large.`,
  requestFormat: 'form-data' as const,
  parameters: {
    body: postGroupsCreate_Body,
  },
  response: Roblox_Web_Responses_Groups_GroupResponseV2,
  errors: [
    {
      status: 400,
      description: `13: The name is invalid.
15: The group icon is invalid.
16: The group icon is missing from the request.
18: The description is too long.
19: The name is too long.
20: The name has been taken.`,
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
10: User must have builders club membership.
11: User is in maximum number of groups.
12: Insufficient Robux funds.
14: The name is moderated.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `37: The name was in use too recently.`,
      schema: z.void(),
    },
    {
      status: 413,
      description: `0: Unknown error.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `17: Too many requests.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `21: Group creation is currently disabled.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://groups.roblox.com/v1/groups/icon
 * @param body
 * @param groupId
 */
export const patchGroupsIcon = {
  method: 'patch' as const,
  path: '/v1/groups/icon',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'form-data' as const,
  parameters: {
    body: z.object({ Files: z.unknown() }),
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
16: The group icon is missing from the request.
17: Too many requests.
30: Invalid file type for group icon.`,
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
23: Insufficient permissions to complete the request.`,
      schema: z.void(),
    },
    {
      status: 413,
      description: `0: Unknown error.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/metadata
 */
export const getGroupsMetadata = {
  method: 'get' as const,
  path: '/v1/groups/metadata',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Groups_Api_GroupsDisplayOptionsResponse,
  errors: [],
};
/**
 * @api post https://groups.roblox.com/v1/groups/policies
 * @param body
 */
export const postGroupsPolicies = {
  method: 'post' as const,
  path: '/v1/groups/policies',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Groups_Api_GroupPolicyRequest,
  },
  response: Roblox_Groups_Api_GroupPoliciesResponse,
  errors: [
    {
      status: 400,
      description: `1: Too many ids in request.
2: Ids could not be parsed from request.`,
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
 * @api get https://groups.roblox.com/v1/groups/search
 * @param keyword
 * @param prioritizeExactMatch
 * @param limit
 * @param cursor
 */
export const getGroupsSearch = {
  method: 'get' as const,
  path: '/v1/groups/search',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    keyword: z.string(),
    prioritizeExactMatch: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Groups_Api_GroupSearchPageResponse,
  errors: [
    {
      status: 400,
      description: `2: Search term not appropriate for Roblox.
3: Search term was left empty.
4: Search terms can be 2 to 50 characters long.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/search/lookup
 * @param groupName
 */
export const getGroupsSearchLookup = {
  method: 'get' as const,
  path: '/v1/groups/search/lookup',
  baseUrl: 'https://groups.roblox.com',
  description: `Should only be used for direct lookups where a user is inputting a group name, shouldn&#x27;t be used for search pages.`,
  requestFormat: 'json' as const,
  parameters: {
    groupName: z.string(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupBasicResponse_,
  errors: [
    {
      status: 400,
      description: `1: Name is missing or has invalid characters.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/groups/search/metadata
 */
export const getGroupsSearchMetadata = {
  method: 'get' as const,
  path: '/v1/groups/search/metadata',
  baseUrl: 'https://groups.roblox.com',
  description: `Although there is no reason for this to require an authenticated user right now, in the future,
we will use coco to return different suggested groups based upon that user&#x27;s request context`,
  requestFormat: 'json' as const,
  response: Roblox_Groups_Api_GroupSearchMetadataResponse,
  errors: [
    {
      status: 404,
      description: `5: No Localized Version of group search category exists`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/roles
 * @param ids
 */
export const getRoles = {
  method: 'get' as const,
  path: '/v1/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupRoleDetailResponse_,
  errors: [
    {
      status: 400,
      description: `1: Ids could not be parsed from request.
2: Too many ids in request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/user/groups/pending
 */
export const getUserGroupsPending = {
  method: 'get' as const,
  path: '/v1/user/groups/pending',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupDetailResponse_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://groups.roblox.com/v1/user/groups/primary
 */
export const deleteUserGroupsPrimary = {
  method: 'delete' as const,
  path: '/v1/user/groups/primary',
  baseUrl: 'https://groups.roblox.com',
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
 * @api post https://groups.roblox.com/v1/user/groups/primary
 * @param body The request body containing the group id.
 */
export const postUserGroupsPrimary = {
  method: 'post' as const,
  path: '/v1/user/groups/primary',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ groupId: z.number().int() }),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
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
2: You aren&#x27;t a member of the group specified.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/users/:userId/friends/groups/roles
 * @param userId
 */
export const getUsersUseridFriendsGroupsRoles = {
  method: 'get' as const,
  path: '/v1/users/:userId/friends/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_UserGroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `3: The user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/users/:userId/groups/primary/role
 * @param userId
 */
export const getUsersUseridGroupsPrimaryRole = {
  method: 'get' as const,
  path: '/v1/users/:userId/groups/primary/role',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupMembershipDetailResponse,
  errors: [
    {
      status: 400,
      description: `4: User is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://groups.roblox.com/v1/users/:userId/groups/roles
 * @param userId
 */
export const getUsersUseridGroupsRoles = {
  method: 'get' as const,
  path: '/v1/users/:userId/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipDetailResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
