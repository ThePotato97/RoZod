import { z } from 'zod';

const Roblox_AccountInformation_Api_Models_BirthdateResponse = z.object({
  birthMonth: z.number().int(),
  birthDay: z.number().int(),
  birthYear: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_BirthdateRequest = z.object({
  birthMonth: z.number().int(),
  birthDay: z.number().int(),
  birthYear: z.number().int(),
  password: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_AccountInformation_Api_Models_DescriptionResponse = z.object({
  description: z.string(),
});
const Roblox_AccountInformation_Api_Models_DescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_AccountInformation_Api_Models_GenderResponse = z.object({
  gender: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_GenderRequest = z.object({
  gender: z.string(),
});
const Roblox_AccountInformation_Api_Models_MetadataResponse = z.object({
  isAllowedNotificationsEndpointDisabled: z.boolean(),
  isAccountSettingsPolicyEnabled: z.boolean(),
  isPhoneNumberEnabled: z.boolean(),
  MaxUserDescriptionLength: z.number().int(),
  isUserDescriptionEnabled: z.boolean(),
  isUserBlockEndpointsUpdated: z.boolean(),
  isPasswordRequiredForAgingDown: z.boolean(),
  shouldUsePersonaForIdVerification: z.boolean(),
  shouldDisplaySessionManagement: z.boolean(),
  shouldUseSecurityReactUI: z.boolean(),
});
const Roblox_AccountInformation_Api_Models_PhoneResponse = z.object({
  countryCode: z.string(),
  prefix: z.string(),
  phone: z.string(),
  isVerified: z.boolean(),
  verificationCodeLength: z.number().int(),
  canBypassPasswordForPhoneUpdate: z.boolean(),
});
const Roblox_AccountInformation_Api_Models_PhoneRequest = z.object({
  countryCode: z.string(),
  prefix: z.string(),
  phone: z.string(),
  password: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsResponse = z.object({
  promotionChannelsVisibilityPrivacy: z.string(),
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
  guilded: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsRequest = z.object({
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
  guilded: z.string(),
  promotionChannelsVisibilityPrivacy: z.string(),
});
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse = z.object({
  userId: z.number().int(),
  name: z.string(),
  code: z.string(),
});
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest = z.object({
  code: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse = z.object({
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
  guilded: z.string(),
});
const Roblox_AccountInformation_Api_RobloxBadgeResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string(),
});
const Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse = z.object({ count: z.number().int() });
const Roblox_AccountInformation_Api_Models_VerifyEmailRequest = z.object({
  ticket: z.string(),
});
const Roblox_AccountInformation_Api_Models_VerifyEmailResponse = z.object({
  verifiedUserHatAssetId: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_EmptyRequest = z.object({});
const Roblox_AccountInformation_Api_Models_VerifyPhoneRequest = z.object({
  code: z.string(),
});

const schemas = {
  Roblox_AccountInformation_Api_Models_BirthdateResponse,
  Roblox_AccountInformation_Api_Models_BirthdateRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_AccountInformation_Api_Models_DescriptionResponse,
  Roblox_AccountInformation_Api_Models_DescriptionRequest,
  Roblox_AccountInformation_Api_Models_GenderResponse,
  Roblox_AccountInformation_Api_Models_GenderRequest,
  Roblox_AccountInformation_Api_Models_MetadataResponse,
  Roblox_AccountInformation_Api_Models_PhoneResponse,
  Roblox_AccountInformation_Api_Models_PhoneRequest,
  Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest,
  Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  Roblox_AccountInformation_Api_RobloxBadgeResponse,
  Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse,
  Roblox_AccountInformation_Api_Models_VerifyEmailRequest,
  Roblox_AccountInformation_Api_Models_VerifyEmailResponse,
  Roblox_AccountInformation_Api_Models_EmptyRequest,
  Roblox_AccountInformation_Api_Models_VerifyPhoneRequest,
};

/**
 * @api get https://accountinformation.roblox.com/v1/birthdate
 */
export const getBirthdate = {
  method: 'get' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
 * @api post https://accountinformation.roblox.com/v1/birthdate
 * @param body The Roblox.AccountInformation.Api.Models.BirthdateRequest
 */
export const postBirthdate = {
  method: 'post' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_BirthdateRequest,
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: User not found.
4: The birthdate provided is invalid.
8: Password is incorrect.`,
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
2: PIN is locked.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/description
 */
export const getDescription = {
  method: 'get' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
 * @api post https://accountinformation.roblox.com/v1/description
 * @param body The Roblox.AccountInformation.Api.Models.DescriptionRequest
 */
export const postDescription = {
  method: 'post' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ description: z.string() }),
  },
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/email/verify
 * @param body Roblox.AccountInformation.Api.Models.VerifyEmailRequest
 */
export const postEmailVerify = {
  method: 'post' as const,
  path: '/v1/email/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ ticket: z.string() }),
  },
  response: z.object({ verifiedUserHatAssetId: z.number().int() }),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/gender
 */
export const getGender = {
  method: 'get' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ gender: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
 * @api post https://accountinformation.roblox.com/v1/gender
 * @param body The Roblox.AccountInformation.Api.Models.GenderRequest
 */
export const postGender = {
  method: 'post' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ gender: z.string() }),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
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
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/metadata
 */
export const getMetadata = {
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_MetadataResponse,
  errors: [],
};
/**
 * @api get https://accountinformation.roblox.com/v1/phone
 */
export const getPhone = {
  method: 'get' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PhoneResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/phone
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhone = {
  method: 'post' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
8: Invalid Phone Number Type`,
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
4: Account Pin Locked
5: Incorrect Password
10: `,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/phone/delete
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneDelete = {
  method: 'post' as const,
  path: '/v1/phone/delete',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PhoneRequest,
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
      description: `0: Token Validation Failed
4: Account Pin Locked
5: Incorrect Password`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/phone/resend
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneResend = {
  method: 'post' as const,
  path: '/v1/phone/resend',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({}),
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
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/phone/verify
 * @param body Roblox.AccountInformation.Api.Models.VerifyPhoneRequest
 */
export const postPhoneVerify = {
  method: 'post' as const,
  path: '/v1/phone/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ code: z.string() }),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
7: Invalid Code`,
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
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/promotion-channels
 */
export const getPromotionChannels = {
  method: 'get' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
 * @api post https://accountinformation.roblox.com/v1/promotion-channels
 * @param body The Roblox.AccountInformation.Api.Models.PromotionChannelsRequest
 */
export const postPromotionChannels = {
  method: 'post' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The request was empty.
11: The Facebook profile url is invalid.
12: The Twitter handle is invalid.
13: The YouTube url is invalid.
14: The Twitch profile url is invalid.
15: The Guilded profile url is invalid.`,
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
3: PIN is locked.
4: Only users who are over twelve years of age may edit social network channels.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api delete https://accountinformation.roblox.com/v1/star-code-affiliates
 */
export const deleteStarCodeAffiliates = {
  method: 'delete' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
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
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/star-code-affiliates
 */
export const getStarCodeAffiliates = {
  method: 'get' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://accountinformation.roblox.com/v1/star-code-affiliates
 * @param body Roblox.AccountInformation.Api.Models.StarCodeAffiliateRequest
 */
export const postStarCodeAffiliates = {
  method: 'post' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ code: z.string() }),
  },
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 400,
      description: `1: The code was invalid.`,
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
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/users/:userId/promotion-channels
 * @param userId
 */
export const getUsersUseridPromotionChannels = {
  method: 'get' as const,
  path: '/v1/users/:userId/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://accountinformation.roblox.com/v1/users/:userId/roblox-badges
 * @param userId
 */
export const getUsersUseridRobloxBadges = {
  method: 'get' as const,
  path: '/v1/users/:userId/roblox-badges',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.array(Roblox_AccountInformation_Api_RobloxBadgeResponse),
  errors: [],
};
/**
 * @api get https://accountinformation.roblox.com/v1/xbox-live/consecutive-login-days
 */
export const getXboxLiveConsecutiveLoginDays = {
  method: 'get' as const,
  path: '/v1/xbox-live/consecutive-login-days',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: The account is not connected to an Xbox Live account`,
      schema: z.void(),
    },
  ],
};
