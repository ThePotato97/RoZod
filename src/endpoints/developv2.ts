import { z } from 'zod';

const Roblox_Api_Develop_AssetVersion = z.object({
  Id: z.number().int(),
  assetId: z.number().int(),
  assetVersionNumber: z.number().int(),
  creatorType: z.string(),
  creatorTargetId: z.number().int(),
  creatingUniverseId: z.number().int(),
  created: z.string().datetime(),
  isEqualToCurrentPublishedVersion: z.boolean(),
  isPublished: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_AssetVersion_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Api_Develop_AssetVersion),
});
const Roblox_Api_Develop_Models_PlaceModelV2 = z.object({
  maxPlayerCount: z.number().int(),
  socialSlotType: z.string(),
  customSocialSlotsCount: z.number().int(),
  allowCopying: z.boolean(),
  currentSavedVersion: z.number().int(),
  isAllGenresAllowed: z.boolean(),
  allowedGearTypes: z.array(
    z.union([
      z.literal(0),
      z.literal(8),
      z.literal(9),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(14),
      z.literal(21),
      z.literal(22),
    ]),
  ),
  maxPlayersAllowed: z.number().int(),
  id: z.number().int(),
  universeId: z.number().int(),
  name: z.string(),
  description: z.string(),
  isRootPlace: z.boolean(),
});
const Roblox_Api_Develop_Models_PlaceConfigurationModelV2 = z.object({
  name: z.string(),
  description: z.string(),
  maxPlayerCount: z.number().int(),
  socialSlotType: z.string(),
  customSocialSlotsCount: z.number().int(),
  allowCopying: z.boolean(),
  allowedGearTypes: z.array(z.string()),
  isAllGenresAllowed: z.boolean(),
});
const Roblox_Platform_UniverseSettings_UniverseAvatarAssetOverrideResponseModel = z.object({
  assetID: z.number().int(),
  assetTypeID: z.number().int(),
  isPlayerChoice: z.boolean(),
});
const Roblox_Web_Responses_Avatar_ScaleModel = z.object({
  height: z.number(),
  width: z.number(),
  head: z.number(),
  depth: z.number(),
  proportion: z.number(),
  bodyType: z.number(),
});
const Roblox_Api_Develop_Models_UniversePluginPermissions = z.object({
  IsThirdPartyTeleportAllowed: z.boolean(),
  IsThirdPartyAssetAllowed: z.boolean(),
  IsThirdPartyPurchaseAllowed: z.boolean(),
});
const Roblox_Api_Develop_Models_UniverseSettingsRequestV2 = z.object({
  allowPrivateServers: z.boolean(),
  privateServerPrice: z.number().int(),
  name: z.string(),
  description: z.string(),
  universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  universeAnimationType: z.union([z.literal(1), z.literal(2)]),
  universeCollisionType: z.union([z.literal(1), z.literal(2)]),
  universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
  isArchived: z.boolean(),
  isFriendsOnly: z.boolean(),
  genre: z.union([
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
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
  ]),
  playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
  isForSale: z.boolean(),
  price: z.number().int(),
  universeAvatarAssetOverrides: z.array(Roblox_Platform_UniverseSettings_UniverseAvatarAssetOverrideResponseModel),
  universeAvatarMinScales: Roblox_Web_Responses_Avatar_ScaleModel,
  universeAvatarMaxScales: Roblox_Web_Responses_Avatar_ScaleModel,
  studioAccessToApisAllowed: z.boolean(),
  permissions: Roblox_Api_Develop_Models_UniversePluginPermissions,
  optInRegions: z.array(z.union([z.literal(0), z.literal(1)])),
  optOutRegions: z.array(z.union([z.literal(0), z.literal(1)])),
});
const Roblox_Api_Develop_Models_UniverseModerationPolicyStatus = z.object({
  region: z.union([z.literal(0), z.literal(1)]),
  status: z.string(),
});
const Roblox_Api_Develop_Models_UniverseSettingsResponseV2 = z.object({
  allowPrivateServers: z.boolean(),
  privateServerPrice: z.number().int(),
  optInRegions: z.array(Roblox_Api_Develop_Models_UniverseModerationPolicyStatus),
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  universeAnimationType: z.union([z.literal(1), z.literal(2)]),
  universeCollisionType: z.union([z.literal(1), z.literal(2)]),
  universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
  isArchived: z.boolean(),
  isFriendsOnly: z.boolean(),
  genre: z.union([
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
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
  ]),
  playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
  isForSale: z.boolean(),
  price: z.number().int(),
  universeAvatarAssetOverrides: z.array(Roblox_Platform_UniverseSettings_UniverseAvatarAssetOverrideResponseModel),
  universeAvatarMinScales: Roblox_Web_Responses_Avatar_ScaleModel,
  universeAvatarMaxScales: Roblox_Web_Responses_Avatar_ScaleModel,
  studioAccessToApisAllowed: z.boolean(),
  permissions: Roblox_Api_Develop_Models_UniversePluginPermissions,
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

const schemas = {
  Roblox_Api_Develop_AssetVersion,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_AssetVersion_,
  Roblox_Api_Develop_Models_PlaceModelV2,
  Roblox_Api_Develop_Models_PlaceConfigurationModelV2,
  Roblox_Platform_UniverseSettings_UniverseAvatarAssetOverrideResponseModel,
  Roblox_Web_Responses_Avatar_ScaleModel,
  Roblox_Api_Develop_Models_UniversePluginPermissions,
  Roblox_Api_Develop_Models_UniverseSettingsRequestV2,
  Roblox_Api_Develop_Models_UniverseModerationPolicyStatus,
  Roblox_Api_Develop_Models_UniverseSettingsResponseV2,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
};

/**
 * @api get https://develop.roblox.com/v2/assets/:id/versions
 * @param id
 * @param Roblox-Place-Id
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getAssetsIdVersions = {
  method: 'get' as const,
  path: '/v2/assets/:id/versions',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    id: z.number().int(),
    'Roblox-Place-Id': z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_AssetVersion_,
  errors: [],
};
/**
 * @api get https://develop.roblox.com/v2/places/:placeId
 * @param placeId
 */
export const getPlacesPlaceid = {
  method: 'get' as const,
  path: '/v2/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PlaceModelV2,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `placeId Place not found.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://develop.roblox.com/v2/places/:placeId
 * @param body
 * @param placeId
 */
export const patchPlacesPlaceid = {
  method: 'patch' as const,
  path: '/v2/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_PlaceConfigurationModelV2,
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PlaceModelV2,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.
0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `placeId Place not found.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://develop.roblox.com/v2/teamtest/:placeId
 * @param placeId
 * @param gameId
 */
export const deleteTeamtestPlaceid = {
  method: 'delete' as const,
  path: '/v2/teamtest/:placeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
    gameId: z.string().uuid(),
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
 * @api patch https://develop.roblox.com/v2/universes/:universeId/configuration
 * @param body The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
 * @param universeId
 */
export const patchUniversesUniverseidConfiguration = {
  method: 'patch' as const,
  path: '/v2/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_UniverseSettingsRequestV2,
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseSettingsResponseV2,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
3: Invalid UniverseAvatarType.
4: Invalid UniverseScaleType.
5: Invalid UniverseAnimationType.
6: Invalid UniverseCollisionType.
7: New universe name or description has been rejected.
8: New universe name is too long.
10: Invalid UniverseBodyType.
11: Invalid UniverseJointPositioningType.
12: The universe has no root place.
13: At least one playable device must be provided.
15: Price is required when isForSale is true.
16: This game cannot be offered for sale because it is not public.
17: This game cannot be offered for sale because it has private servers enabled.
18: The game price is outside of the allowed range.
19: Invalid genre.
20: The request body is missing.
21: Invalid device type.
22: Invalid asset type.
23: Invalid value, the min must be less than or equal to the max
24: Invalid scale value
28: OptIn/Out Regions Not Supported.
29: Luobu app terms of service user agreement is missing.`,
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
2: You are not authorized to configure this universe.
14: You are not authorized to sell games.
30: Unknown error while updating Opt in out region.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `9: Failed to shutdown all intances of game after changing AvatarType. The change has been reverted.`,
      schema: z.void(),
    },
  ],
};
