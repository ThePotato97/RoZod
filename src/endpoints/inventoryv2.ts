import { z } from 'zod';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Agents_AgentType_ = z.object({
  id: z.number().int(),
  type: z.union([z.literal(1), z.literal(2)]),
  name: z.string(),
});
const Roblox_Inventory_Api_V2_AssetOwnerResponse = z.object({
  id: z.number().int(),
  serialNumber: z.number().int(),
  owner: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Agents_AgentType_,
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_AssetOwnerResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_V2_AssetOwnerResponse),
});
const Roblox_Inventory_Api_V2_UserAssetItemModelV2 = z.object({
  assetId: z.number().int(),
  name: z.string(),
  assetType: z.union([
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
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(21),
    z.literal(22),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
    z.literal(30),
    z.literal(31),
    z.literal(32),
    z.literal(33),
    z.literal(34),
    z.literal(35),
    z.literal(37),
    z.literal(38),
    z.literal(39),
    z.literal(40),
    z.literal(41),
    z.literal(42),
    z.literal(43),
    z.literal(44),
    z.literal(45),
    z.literal(46),
    z.literal(47),
    z.literal(48),
    z.literal(49),
    z.literal(50),
    z.literal(51),
    z.literal(52),
    z.literal(53),
    z.literal(54),
    z.literal(55),
    z.literal(56),
    z.literal(59),
    z.literal(60),
    z.literal(61),
    z.literal(62),
    z.literal(63),
    z.literal(64),
    z.literal(65),
    z.literal(66),
    z.literal(67),
    z.literal(68),
    z.literal(69),
    z.literal(70),
    z.literal(71),
    z.literal(72),
    z.literal(73),
    z.literal(74),
    z.literal(75),
    z.literal(76),
    z.literal(77),
    z.literal(78),
    z.literal(79),
    z.literal(80),
  ]),
  created: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_UserAssetItemModelV2_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_V2_UserAssetItemModelV2),
});
const Roblox_Inventory_Api_Models_UserModel = z.object({
  userId: z.number().int(),
  username: z.string(),
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Roblox_Inventory_Api_Models_InventoryItemModel = z.object({
  userAssetId: z.number().int(),
  assetId: z.number().int(),
  assetName: z.string(),
  collectibleItemId: z.string(),
  collectibleItemInstanceId: z.string(),
  serialNumber: z.number().int(),
  owner: Roblox_Inventory_Api_Models_UserModel,
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_InventoryItemModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_Models_InventoryItemModel),
});

const schemas = {
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Agents_AgentType_,
  Roblox_Inventory_Api_V2_AssetOwnerResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_AssetOwnerResponse_,
  Roblox_Inventory_Api_V2_UserAssetItemModelV2,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_UserAssetItemModelV2_,
  Roblox_Inventory_Api_Models_UserModel,
  Roblox_Inventory_Api_Models_InventoryItemModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_InventoryItemModel_,
};

/**
 * @api get https://inventory.roblox.com/v2/assets/:assetId/owners
 * @param assetId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getAssetsAssetidOwners = {
  method: 'get' as const,
  path: '/v2/assets/:assetId/owners',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    assetId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_AssetOwnerResponse_,
  errors: [
    {
      status: 400,
      description: `1: The asset id is invalid.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You do not have permission to view the owners of this asset.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://inventory.roblox.com/v2/users/:userId/inventory
 * @param userId
 * @param assetTypes
 * @param filterDisapprovedAssets
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridInventory = {
  method: 'get' as const,
  path: '/v2/users/:userId/inventory',
  baseUrl: 'https://inventory.roblox.com',
  description: `GamePass and Badges not allowed.`,
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    assetTypes: z.array(z.unknown()),
    filterDisapprovedAssets: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_UserAssetItemModelV2_,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset type Id.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `3: Insufficient permission.
4: You are not authorized to view this user&#x27;s inventory.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://inventory.roblox.com/v2/users/:userId/inventory/:assetTypeId
 * @param userId
 * @param assetTypeId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridInventoryAssettypeid = {
  method: 'get' as const,
  path: '/v2/users/:userId/inventory/:assetTypeId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    assetTypeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_InventoryItemModel_,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset type Id.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `3: Insufficient permission.
4: You are not authorized to view this user&#x27;s inventory.`,
      schema: z.void(),
    },
  ],
};
