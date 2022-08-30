import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
};

export type AccountDeleteResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type AccountInfoResult = {
  customer?: Maybe<Customer>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type ActivityInput = {
  commentId?: InputMaybe<Scalars['Int']>;
};

export type AddItemToCartInput = {
  booking?: InputMaybe<BookingProductInput>;
  bundleOptions?: InputMaybe<Array<BundledOptionsInput>>;
  isBuyNow?: InputMaybe<Scalars['Boolean']>;
  links?: InputMaybe<Array<Scalars['Int']>>;
  productId: Scalars['ID'];
  qty?: InputMaybe<Array<GroupedProductInput>>;
  quantity: Scalars['Int'];
  selectedConfigurableOption?: InputMaybe<Scalars['Int']>;
  superAttribute?: InputMaybe<Array<ConfigurableProductInput>>;
};

export type AddToCompareInput = {
  productFlatId: Scalars['ID'];
};

export type AddToCompareResponse = {
  compareProduct?: Maybe<CustomerCompareProduct>;
  success?: Maybe<Scalars['String']>;
};

export type AddToWishlistInput = {
  productId: Scalars['ID'];
};

export type AddToWishlistResponse = {
  success?: Maybe<Scalars['String']>;
  wishlist?: Maybe<Array<Maybe<Wishlist>>>;
};

export type AddressListResult = {
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type AdvertismentInput = {
  advertisementFour?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  advertisementThree?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  advertisementTwo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ApplyCouponInput = {
  code: Scalars['String'];
};

export type AppointmentBookingProductSlots = {
  bookingProductId: Scalars['ID'];
  breakTime?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  sameSlotAllDays?: Maybe<Scalars['Boolean']>;
  slots?: Maybe<Array<BookingDaySlots>>;
};

export type Attribute = {
  adminName: Scalars['String'];
  code: Scalars['String'];
  id: Scalars['ID'];
  isComparable: Scalars['Boolean'];
  isConfigurable: Scalars['Boolean'];
  isFilterable?: Maybe<Scalars['Boolean']>;
  isRequired: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  isUserDefined?: Maybe<Scalars['Boolean']>;
  isVisibleOnFront?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<AttributeOption>>;
  position?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['String']>;
  swatchType?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<AttributeTranslation>>;
  type: Scalars['String'];
  useInFlat?: Maybe<Scalars['Boolean']>;
  validation?: Maybe<Scalars['String']>;
  valuePerChannel?: Maybe<Scalars['Boolean']>;
  valuePerLocale?: Maybe<Scalars['Boolean']>;
};

export type AttributeFamily = {
  attributeGroups?: Maybe<Array<AttributeGroup>>;
  code: Scalars['String'];
  id: Scalars['ID'];
  isUserDefined?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

/** A paginated list of AttributeFamily items. */
export type AttributeFamilyPaginator = {
  /** A list of AttributeFamily items. */
  data: Array<AttributeFamily>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AttributeGroup = {
  attributeFamilyId: Scalars['ID'];
  customAttributes?: Maybe<Array<Maybe<Attribute>>>;
  id: Scalars['ID'];
  isUserDefined?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position: Scalars['Int'];
  success?: Maybe<Scalars['String']>;
};

/** A paginated list of AttributeGroup items. */
export type AttributeGroupPaginator = {
  /** A list of AttributeGroup items. */
  data: Array<AttributeGroup>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AttributeOption = {
  adminName: Scalars['String'];
  attribute: Attribute;
  attributeId: Scalars['ID'];
  id: Scalars['ID'];
  sortOrder: Scalars['Int'];
  swatchValue?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<AttributeOptionTranslation>>;
};

/** A paginated list of AttributeOption items. */
export type AttributeOptionPaginator = {
  /** A list of AttributeOption items. */
  data: Array<AttributeOption>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AttributeOptionTranslation = {
  attributeOptionId: Scalars['ID'];
  id: Scalars['ID'];
  label: Scalars['String'];
  locale: Scalars['String'];
};

/** A paginated list of AttributeOptionTranslation items. */
export type AttributeOptionTranslationPaginator = {
  /** A list of AttributeOptionTranslation items. */
  data: Array<AttributeOptionTranslation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Attribute items. */
export type AttributePaginator = {
  /** A list of Attribute items. */
  data: Array<Attribute>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AttributeTranslation = {
  attribute: Attribute;
  attributeId: Scalars['ID'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type AttributeTranslationInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

/** A paginated list of AttributeTranslation items. */
export type AttributeTranslationPaginator = {
  /** A list of AttributeTranslation items. */
  data: Array<AttributeTranslation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AutoGeneratedCouponInput = {
  codeFormat: Scalars['String'];
  codeLength: Scalars['Int'];
  codePrefix?: InputMaybe<Scalars['String']>;
  codeSuffix?: InputMaybe<Scalars['String']>;
  couponQty: Scalars['Int'];
};

export type Booking = {
  availableFrom?: Maybe<Scalars['Int']>;
  availableTo?: Maybe<Scalars['Int']>;
  bookingProductEventTicketId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  orderItemId?: Maybe<Scalars['ID']>;
  productId: Scalars['ID'];
  qty?: Maybe<Scalars['Int']>;
};

export type BookingDaySlots = {
  day?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** A paginated list of Booking items. */
export type BookingPaginator = {
  /** A list of Booking items. */
  data: Array<Booking>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type BookingProduct = {
  appointmentSlot?: Maybe<AppointmentBookingProductSlots>;
  availableEveryWeek?: Maybe<Scalars['Boolean']>;
  availableFrom?: Maybe<Scalars['DateTime']>;
  availableTo?: Maybe<Scalars['DateTime']>;
  defaultSlot?: Maybe<DefaultBookingProductSlots>;
  eventTickets?: Maybe<Array<TicketBookingProductSlots>>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  product: Product;
  productId: Scalars['ID'];
  qty?: Maybe<Scalars['Int']>;
  rentalSlot?: Maybe<RentalBookingProductSlots>;
  showLocation?: Maybe<Scalars['Boolean']>;
  tableSlot?: Maybe<TableBookingProductSlots>;
  type: Scalars['String'];
};

export type BookingProductInput = {
  date: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  qty?: InputMaybe<Array<EventBookingInput>>;
  slot: BookingSlotInput;
};

/** A paginated list of BookingProduct items. */
export type BookingProductPaginator = {
  /** A list of BookingProduct items. */
  data: Array<BookingProduct>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type BookingRentalInput = {
  dailyPrice?: InputMaybe<Scalars['Float']>;
  hourlyPrice?: InputMaybe<Scalars['Float']>;
  rentingType: Scalars['String'];
  slots?: InputMaybe<Array<BookingSlotsInput>>;
};

export type BookingSlotInput = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type BookingSlotsInput = {
  day?: InputMaybe<Scalars['Int']>;
  from: Scalars['String'];
  fromDay?: InputMaybe<Scalars['Int']>;
  to: Scalars['String'];
  toDay?: InputMaybe<Scalars['Int']>;
};

export type BookingTableInput = {
  guestLimit?: InputMaybe<Scalars['Int']>;
  preventSchedulingBefore: Scalars['Int'];
  priceType: Scalars['String'];
  slots?: InputMaybe<Array<BookingSlotsInput>>;
};

export type BookingTicketsInput = {
  locales?: InputMaybe<Array<BookingTicketsTranslationsInput>>;
  price: Scalars['Float'];
  qty: Scalars['Int'];
  specialPriceFrom?: InputMaybe<Scalars['String']>;
  specialPriceTo?: InputMaybe<Scalars['String']>;
  special_price?: InputMaybe<Scalars['Float']>;
};

export type BookingTicketsTranslations = {
  description?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type BookingTicketsTranslationsInput = {
  description?: InputMaybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type BundleOptionLocaleInput = {
  code: Scalars['String'];
  label: Scalars['String'];
};

export type BundleOptionTranslation = {
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  productBundleOptionId: Scalars['ID'];
};

export type BundleProductInput = {
  bundleOptionProductId?: InputMaybe<Scalars['ID']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  productId: Scalars['ID'];
  qty: Scalars['Int'];
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type BundledOptionsInput = {
  bundleOptionId: Scalars['Int'];
  bundleOptionProductId?: InputMaybe<Array<Scalars['Int']>>;
  qty?: InputMaybe<Scalars['Int']>;
};

export type CacheImage = {
  largeImageUrl?: Maybe<Scalars['String']>;
  mediumImageUrl?: Maybe<Scalars['String']>;
  originalImageUrl?: Maybe<Scalars['String']>;
  smallImageUrl?: Maybe<Scalars['String']>;
};

export type Cart = {
  addresses?: Maybe<Array<CartAddress>>;
  allItems?: Maybe<Array<CartItem>>;
  appliedCartRuleIds?: Maybe<Scalars['String']>;
  baseCurrencyCode?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseGrandTotal?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  baseTaxTotal?: Maybe<Scalars['Float']>;
  billingAddress?: Maybe<CartAddress>;
  cartCurrencyCode?: Maybe<Scalars['String']>;
  channelCurrencyCode?: Maybe<Scalars['String']>;
  channelId: Scalars['ID'];
  checkoutMethod?: Maybe<Scalars['String']>;
  conversionTime?: Maybe<Scalars['DateTime']>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerFirstName?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['ID']>;
  customerLastName?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  globalCurrencyCode?: Maybe<Scalars['String']>;
  grandTotal?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isGift: Scalars['Boolean'];
  isGuest?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<CartItem>>;
  itemsCount?: Maybe<Scalars['Int']>;
  itemsQty?: Maybe<Scalars['Int']>;
  payment?: Maybe<CartPayment>;
  selectedShippingRate?: Maybe<CartShippingRate>;
  shippingAddress?: Maybe<CartAddress>;
  shippingMethod?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  taxTotal?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartAddress = {
  additional?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  addressType?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  cartId?: Maybe<Scalars['ID']>;
  city: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  defaultAddress: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orderId?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
  postcode: Scalars['String'];
  shippingRates?: Maybe<Array<Maybe<CartShippingRate>>>;
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  vatId?: Maybe<Scalars['String']>;
};

export type CartItem = {
  additional?: Maybe<Scalars['String']>;
  appliedCartRuleIds?: Maybe<Scalars['String']>;
  baseDiscountAmount: Scalars['Float'];
  basePrice: Scalars['Float'];
  baseTaxAmount?: Maybe<Scalars['Float']>;
  baseTotal: Scalars['Float'];
  baseTotalWeight: Scalars['Float'];
  cart?: Maybe<Cart>;
  cartId: Scalars['ID'];
  children?: Maybe<CartItem>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customPrice?: Maybe<Scalars['Float']>;
  discountAmount: Scalars['Float'];
  discountPercent: Scalars['Float'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CartItem>;
  parentId?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  product: Product;
  productFlat?: Maybe<ProductFlat>;
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  taxCategoryId?: Maybe<Scalars['ID']>;
  taxPercent?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
  totalWeight: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['Float'];
};

export type CartItemResponse = {
  cart?: Maybe<Cart>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CartPayment = {
  cartId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  methodTitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of CartPayment items. */
export type CartPaymentPaginator = {
  /** A list of CartPayment items. */
  data: Array<CartPayment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CartRule = {
  actionType: Scalars['String'];
  actions?: Maybe<Scalars['String']>;
  applyToShipping: Scalars['Boolean'];
  cartRuleChannels?: Maybe<Array<Channel>>;
  cartRuleCoupon?: Maybe<CartRuleCoupon>;
  cartRuleCustomerGroups?: Maybe<Array<CustomerGroup>>;
  conditionType: Scalars['String'];
  conditions?: Maybe<Scalars['String']>;
  couponType?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountAmount: Scalars['Float'];
  discountQuantity: Scalars['Int'];
  discountStep: Scalars['Int'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: Maybe<Scalars['DateTime']>;
  freeShipping: Scalars['Boolean'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  startsFrom?: Maybe<Scalars['DateTime']>;
  status: Scalars['Boolean'];
  success?: Maybe<Scalars['String']>;
  timesUsed: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  usagePerCustomer: Scalars['Int'];
  useAutoGeneration: Scalars['Boolean'];
  usesAttributeConditions: Scalars['Boolean'];
  usesPerCoupon: Scalars['Int'];
};

export type CartRuleCoupon = {
  cartRule: CartRule;
  cartRuleId: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  couponUsage?: Maybe<Array<Maybe<CartRuleCouponUsage>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  timesUsed: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  usageLimit: Scalars['Int'];
  usagePerCustomer: Scalars['Int'];
};

export type CartRuleCouponUsage = {
  cartRuleCouponId: Scalars['ID'];
  customerId: Scalars['ID'];
  id: Scalars['ID'];
  timesUsed: Scalars['Int'];
};

/** A paginated list of CartRule items. */
export type CartRulePaginator = {
  /** A list of CartRule items. */
  data: Array<CartRule>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CartShippingRate = {
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  carrier: Scalars['String'];
  carrierTitle: Scalars['String'];
  cartAddressId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discountAmount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  methodDescription?: Maybe<Scalars['String']>;
  methodTitle: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  shippingAddress?: Maybe<CartAddress>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CatalogRule = {
  actionType?: Maybe<Scalars['String']>;
  catalogRuleProductPrices?: Maybe<Array<CatalogRuleProductPrice>>;
  catalogRuleProducts?: Maybe<Array<CatalogRuleProduct>>;
  channels?: Maybe<Array<Channel>>;
  conditionType: Scalars['Boolean'];
  conditions?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customerGroups?: Maybe<Array<CustomerGroup>>;
  description?: Maybe<Scalars['String']>;
  discountAmount: Scalars['Float'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  startsFrom?: Maybe<Scalars['Date']>;
  status: Scalars['Boolean'];
  success?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CatalogRuleConditionInput = {
  attribute: Scalars['String'];
  attributeType: Scalars['String'];
  operator: Scalars['String'];
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A paginated list of CatalogRule items. */
export type CatalogRulePaginator = {
  /** A list of CatalogRule items. */
  data: Array<CatalogRule>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CatalogRuleProduct = {
  actionType?: Maybe<Scalars['String']>;
  catalogRule: CatalogRule;
  catalogRuleId: Scalars['ID'];
  channel: Channel;
  channelId: Scalars['ID'];
  customerGroup: CustomerGroup;
  customerGroupId: Scalars['ID'];
  discountAmount: Scalars['Int'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  sortOrder: Scalars['Int'];
  startsFrom?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of CatalogRuleProduct items. */
export type CatalogRuleProductPaginator = {
  /** A list of CatalogRuleProduct items. */
  data: Array<CatalogRuleProduct>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CatalogRuleProductPrice = {
  catalogRuleId: Scalars['ID'];
  channelId: Scalars['ID'];
  customerGroupId: Scalars['ID'];
  endsTill?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  price: Scalars['Float'];
  productId: Scalars['ID'];
  ruleDate: Scalars['Date'];
  startsFrom?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of CatalogRuleProductPrice items. */
export type CatalogRuleProductPricePaginator = {
  /** A list of CatalogRuleProductPrice items. */
  data: Array<CatalogRuleProductPrice>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Category = {
  additional?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<CategoryBreadcrumbs>>>;
  categoryProductMaxPrice?: Maybe<Scalars['Float']>;
  children?: Maybe<Array<Category>>;
  count?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  displayMode: Scalars['String'];
  filterableAttributes?: Maybe<Array<FilterableAttribute>>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  productCount?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  status: Scalars['Boolean'];
  success?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Translation>>;
  updatedAt: Scalars['DateTime'];
  urlPath?: Maybe<Scalars['String']>;
};

export type CategoryBreadcrumbs = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  urlPath?: Maybe<Scalars['String']>;
};

/** A paginated list of Category items. */
export type CategoryPaginator = {
  /** A list of Category items. */
  data: Array<Category>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CategorySuggestion = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Channel = {
  baseCurrency: Scalars['String'];
  baseCurrencyId: Scalars['Int'];
  code: Scalars['String'];
  currencies?: Maybe<Array<Currency>>;
  defaultLocale: Scalars['String'];
  defaultLocaleId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  faviconUrl?: Maybe<Scalars['String']>;
  footerContent?: Maybe<Scalars['String']>;
  homePageContent?: Maybe<Scalars['String']>;
  homeSeo: Scalars['String'];
  hostname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inventorySources?: Maybe<Array<InventorySource>>;
  locales?: Maybe<Array<Locale>>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rootCategory: Scalars['String'];
  rootCategoryId: Scalars['Int'];
  success?: Maybe<Scalars['String']>;
  theme: Scalars['String'];
};

/** A paginated list of Channel items. */
export type ChannelPaginator = {
  /** A list of Channel items. */
  data: Array<Channel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CheckoutAddressesResponse = {
  addressList?: Maybe<Array<Maybe<CustomerAddress>>>;
  addresses?: Maybe<Array<Maybe<FormattedAddresses>>>;
  cartCount?: Maybe<Scalars['Int']>;
  customer?: Maybe<Customer>;
  defaultCountry?: Maybe<Scalars['String']>;
  isGuest?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type CmsPage = {
  channels?: Maybe<Array<Channel>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  layout?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<CmsTranslation>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of CmsPage items. */
export type CmsPagePaginator = {
  /** A list of CmsPage items. */
  data: Array<CmsPage>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CmsTranslation = {
  cmsPageId: Scalars['ID'];
  htmlContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  urlKey: Scalars['String'];
};

/** A paginated list of CmsTranslation items. */
export type CmsTranslationPaginator = {
  /** A list of CmsTranslation items. */
  data: Array<CmsTranslation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CommentLike = {
  id?: Maybe<Scalars['Int']>;
  reviewId?: Maybe<Scalars['Int']>;
};

export type ConditionInput = {
  attribute: Scalars['String'];
  attributeType: Scalars['String'];
  operator: Scalars['String'];
  value?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigurableProductInput = {
  attributeId: Scalars['Int'];
  attributeOptionId: Scalars['Int'];
};

export type ConfigutableProductAttributes = {
  code: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<ConfigutableProductOptions>>;
  swatchType?: Maybe<Scalars['String']>;
};

export type ConfigutableProductData = {
  attributes?: Maybe<Array<ConfigutableProductAttributes>>;
  chooseText?: Maybe<Scalars['String']>;
  index?: Maybe<Array<ConfigutableSimpleProducts>>;
  regularPrice?: Maybe<ConfigutableRegularPrice>;
  variantImages?: Maybe<Array<Maybe<ConfigutableVariantImages>>>;
  variantPrices?: Maybe<Array<Maybe<ConfigutableVariantPrices>>>;
  variantVideos?: Maybe<Array<Maybe<ConfigutableVariantVideos>>>;
};

export type ConfigutableProductOptions = {
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['Int']>>>;
  swatchType?: Maybe<Scalars['String']>;
};

export type ConfigutableRegularPrice = {
  formatedPrice?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ConfigutableSimpleProducts = {
  attributeOptionIds?: Maybe<Array<Maybe<AttributeOptionIds>>>;
  id: Scalars['ID'];
};

export type ConfigutableVariantImageUrls = {
  largeImageUrl?: Maybe<Scalars['String']>;
  mediumImageUrl?: Maybe<Scalars['String']>;
  originalImageUrl?: Maybe<Scalars['String']>;
  smallImageUrl?: Maybe<Scalars['String']>;
};

export type ConfigutableVariantImages = {
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<ConfigutableVariantImageUrls>>>;
};

export type ConfigutableVariantPrices = {
  finalPrice?: Maybe<VariantRegularFinalPrice>;
  id: Scalars['ID'];
  regularPrice?: Maybe<VariantRegularFinalPrice>;
};

export type ConfigutableVariantVideos = {
  id: Scalars['ID'];
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentTranslation = {
  catalogType?: Maybe<Scalars['String']>;
  content: HeaderContent;
  contentId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customHeading?: Maybe<Scalars['String']>;
  customTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  linkTarget: Scalars['Boolean'];
  locale?: Maybe<Scalars['String']>;
  pageLink?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of ContentTranslation items. */
export type ContentTranslationPaginator = {
  /** A list of ContentTranslation items. */
  data: Array<ContentTranslation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CoreConfig = {
  channelCode?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  id: Scalars['ID'];
  localeCode?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** A paginated list of CoreConfig items. */
export type CoreConfigPaginator = {
  /** A list of CoreConfig items. */
  data: Array<CoreConfig>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Country = {
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  states?: Maybe<Array<Maybe<CountryState>>>;
  translations?: Maybe<Array<CountryTranslation>>;
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  /** A list of Country items. */
  data: Array<Country>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CountryState = {
  code: Scalars['String'];
  countryCode: Scalars['String'];
  countryId: Scalars['ID'];
  defaultName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  translations?: Maybe<Array<CountryStateTranslation>>;
};

/** A paginated list of CountryState items. */
export type CountryStatePaginator = {
  /** A list of CountryState items. */
  data: Array<CountryState>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CountryStateTranslation = {
  countryStateId: Scalars['ID'];
  defaultName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale: Scalars['String'];
};

export type CountryTranslation = {
  countryId: Scalars['ID'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type CouponResponse = {
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreateAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  state: Scalars['String'];
  vatId?: InputMaybe<Scalars['String']>;
};

export type CreateAttributeFamilyInput = {
  attributeGroups?: InputMaybe<Array<CreateAttributeGroupInput>>;
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateAttributeGroupInput = {
  attributeFamilyId?: InputMaybe<Scalars['ID']>;
  customAttributes?: InputMaybe<Array<InputMaybe<CustomerAttributeInput>>>;
  isUserDefined?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type CreateAttributeInput = {
  adminName: Scalars['String'];
  code: Scalars['String'];
  isComparable: Scalars['Boolean'];
  isConfigurable: Scalars['Boolean'];
  isFilterable?: InputMaybe<Scalars['Boolean']>;
  isRequired: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  isVisibleOnFront?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<Array<InputMaybe<OptionInput>>>;
  swatchType?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<AttributeTranslationInput>>>;
  type: Scalars['String'];
  useInFlat?: InputMaybe<Scalars['Boolean']>;
  validation?: InputMaybe<Scalars['String']>;
  valuePerChannel?: InputMaybe<Scalars['Boolean']>;
  valuePerLocale?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCartRuleInput = {
  actionType: Scalars['String'];
  actions?: InputMaybe<Scalars['String']>;
  applyToShipping: Scalars['Boolean'];
  channels?: InputMaybe<Array<Scalars['Int']>>;
  conditionType: Scalars['Boolean'];
  conditions?: InputMaybe<Array<InputMaybe<ConditionInput>>>;
  couponCode?: InputMaybe<Scalars['String']>;
  couponType?: InputMaybe<Scalars['Int']>;
  customerGroups?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  discountAmount: Scalars['Float'];
  discountQuantity: Scalars['Int'];
  discountStep: Scalars['Int'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: InputMaybe<Scalars['DateTime']>;
  freeShipping: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  startsFrom?: InputMaybe<Scalars['DateTime']>;
  status: Scalars['Boolean'];
  timesUsed: Scalars['Int'];
  usagePerCustomer: Scalars['Int'];
  useAutoGeneration?: InputMaybe<Scalars['Boolean']>;
  usesAttributeConditions: Scalars['Boolean'];
  usesPerCoupon: Scalars['Int'];
};

export type CreateCatalogRuleInput = {
  actionType: Scalars['String'];
  channels?: InputMaybe<Array<Scalars['Int']>>;
  conditionType?: InputMaybe<Scalars['Int']>;
  conditions?: InputMaybe<Array<InputMaybe<CatalogRuleConditionInput>>>;
  customerGroups?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  discountAmount: Scalars['Float'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  sortOrder?: InputMaybe<Scalars['Int']>;
  startsFrom?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCategoryInput = {
  attributes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  description: Scalars['String'];
  displayMode: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  locale: Scalars['String'];
  metaDescription: Scalars['String'];
  metaKeywords: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
  position: Scalars['Int'];
  slug: Scalars['String'];
  status: Scalars['Boolean'];
};

export type CreateChannelInput = {
  baseCurrencyId: Scalars['Int'];
  code: Scalars['String'];
  currencies: Array<Scalars['Int']>;
  defaultLocaleId: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<Scalars['String']>;
  footerContent?: InputMaybe<Scalars['String']>;
  homePageContent?: InputMaybe<Scalars['String']>;
  hostname?: InputMaybe<Scalars['String']>;
  inventorySources?: InputMaybe<Array<Scalars['Int']>>;
  locales: Array<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rootCategoryId: Scalars['Int'];
  seoDescription: Scalars['String'];
  seoKeywords: Scalars['String'];
  seoTitle: Scalars['String'];
  theme: Scalars['String'];
};

export type CreateCmsPageInput = {
  channels?: InputMaybe<Array<Scalars['Int']>>;
  htmlContent?: InputMaybe<Scalars['String']>;
  layout?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  pageTitle: Scalars['String'];
  urlKey: Scalars['String'];
};

export type CreateCurrencyInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  symbol?: InputMaybe<Scalars['String']>;
};

export type CreateCustomScriptInput = {
  channel: Scalars['Int'];
  customCSS?: InputMaybe<Scalars['String']>;
  customJS?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  customerId: Scalars['Int'];
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  state: Scalars['String'];
  vatId?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerGroupInput = {
  code: Scalars['String'];
  isUserDefined?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CreateCustomerInput = {
  customerGroupId: Scalars['Int'];
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type CreateExchangeRateInput = {
  rate: Scalars['Float'];
  targetCurrency: Scalars['Int'];
};

export type CreateHeaderContentInput = {
  contentType: Scalars['String'];
  linkTarget: Scalars['Boolean'];
  locale?: InputMaybe<Scalars['String']>;
  pageLink: Scalars['String'];
  position: Scalars['Int'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateInvoiceInput = {
  invoiceData?: InputMaybe<Array<InvoiceDataInput>>;
  orderId: Scalars['Int'];
};

export type CreateLocaleInput = {
  code: Scalars['String'];
  direction: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateMetaDataInput = {
  channel: Scalars['String'];
  featuredProductCount?: InputMaybe<Scalars['Int']>;
  footerLeftContent?: InputMaybe<Scalars['String']>;
  footerMiddleContent?: InputMaybe<Scalars['String']>;
  headerContentCount?: InputMaybe<Scalars['Int']>;
  homePageContent?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<AdvertismentInput>;
  locale: Scalars['String'];
  newProductsCount?: InputMaybe<Scalars['Int']>;
  productPolicy?: InputMaybe<Scalars['String']>;
  sidebarCategoryCount?: InputMaybe<Scalars['Int']>;
  slider: Scalars['Boolean'];
  subscriptionBarContent?: InputMaybe<Scalars['String']>;
};

export type CreateProductInput = {
  attributeFamilyId: Scalars['Int'];
  family?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  superAttributes?: InputMaybe<Array<InputMaybe<SuperAttributesInput>>>;
  type: Scalars['String'];
};

export type CreateRefundInput = {
  adjustmentFee: Scalars['Int'];
  adjustmentRefund: Scalars['Int'];
  orderId: Scalars['Int'];
  refundData?: InputMaybe<Array<RefundDataInput>>;
  refundShipping: Scalars['Int'];
};

export type CreateRegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type CreateReviewInput = {
  comment: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  rating: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateReviewResponse = {
  review?: Maybe<Review>;
  success?: Maybe<Scalars['String']>;
};

export type CreateRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissionType: Scalars['String'];
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateShipmentInput = {
  carrierTitle: Scalars['String'];
  inventorySourceId: Scalars['Int'];
  orderId: Scalars['Int'];
  shipmentData?: InputMaybe<Array<ShipmentDataInput>>;
  trackNumber: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation?: InputMaybe<Scalars['String']>;
  roleId: Scalars['Int'];
  status: Scalars['Boolean'];
};

export type CreateUserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  remember?: InputMaybe<Scalars['Boolean']>;
};

export type Currency = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  exchangeRate?: Maybe<ExchangeRate>;
  id: Scalars['ID'];
  name: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  symbol: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Currency items. */
export type CurrencyPaginator = {
  /** A list of Currency items. */
  data: Array<Currency>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomScript = {
  channelCode?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  id: Scalars['ID'];
  localeCode?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type Customer = {
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  apiToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupId?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  defaultAddress?: Maybe<CustomerAddress>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  subscribedToNewsLetter?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerAddress = {
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  addressType?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId: Scalars['Int'];
  defaultAddress?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  state: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vatId?: Maybe<Scalars['String']>;
};

/** A paginated list of CustomerAddress items. */
export type CustomerAddressPaginator = {
  /** A list of CustomerAddress items. */
  data: Array<CustomerAddress>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerAttributeInput = {
  id: Scalars['Int'];
};

export type CustomerCompareProduct = {
  createdAt: Scalars['DateTime'];
  customer: Customer;
  customerId: Scalars['ID'];
  id: Scalars['ID'];
  product: Product;
  productFlat: ProductFlat;
  productFlatId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CustomerGroup = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isUserDefined: Scalars['Boolean'];
  name: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of CustomerGroup items. */
export type CustomerGroupPaginator = {
  /** A list of CustomerGroup items. */
  data: Array<CustomerGroup>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerGroupPrice = {
  createdAt: Scalars['DateTime'];
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  qty: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Int'];
  valueType: Scalars['String'];
};

export type CustomerGroupPriceInput = {
  customerGroupId?: InputMaybe<Scalars['ID']>;
  qty: Scalars['Int'];
  value: Scalars['Int'];
  valueType: Scalars['String'];
};

export type CustomerLoginResult = {
  accessToken?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  expiresIn?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
};

export type CustomerLogoutResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

/** A paginated list of Customer items. */
export type CustomerPaginator = {
  /** A list of Customer items. */
  data: Array<Customer>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerRegisterResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type CustomerReviewInput = {
  customerId?: InputMaybe<Scalars['Int']>;
  customerName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewsOrder>;
  productId?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DefaultBookingProductSlots = {
  bookingProductId: Scalars['ID'];
  bookingType: Scalars['String'];
  breakTime?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  slots?: Maybe<Array<DefaultSlots>>;
};

export type DefaultSlots = {
  from: Scalars['String'];
  fromDay: Scalars['Int'];
  to: Scalars['String'];
  toDay: Scalars['Int'];
};

export type DeleteAccountInput = {
  password: Scalars['String'];
};

export type DeleteReviewResponse = {
  message?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DownloadableLinkPurchased = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID'];
  downloadBought: Scalars['Int'];
  downloadUsed: Scalars['Int'];
  file?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  order: Order;
  orderId: Scalars['ID'];
  orderItem?: Maybe<OrderItem>;
  orderItemId: Scalars['ID'];
  productName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type DownloadableLocaleInput = {
  code: Scalars['String'];
  title: Scalars['String'];
};

export type EventBookingInput = {
  quantity: Scalars['Int'];
  ticketId: Scalars['Int'];
};

export type ExchangeRate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  currency: Currency;
  id: Scalars['ID'];
  rate: Scalars['Float'];
  success?: Maybe<Scalars['String']>;
  targetCurrency: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of ExchangeRate items. */
export type ExchangeRatePaginator = {
  /** A list of ExchangeRate items. */
  data: Array<ExchangeRate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type FilterAttributeFamiliesInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterAttributesInput = {
  adminName?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isRequired?: InputMaybe<Scalars['Int']>;
  isUnique?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  valuePerChannel?: InputMaybe<Scalars['Int']>;
  valuePerLocale?: InputMaybe<Scalars['Int']>;
};

export type FilterCartRulesInput = {
  couponCode?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterCatalogRuleProductInput = {
  actionType?: InputMaybe<Scalars['String']>;
  catalogRuleId: Scalars['Int'];
  channelId?: InputMaybe<Scalars['ID']>;
  customerGroupId?: InputMaybe<Scalars['ID']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  endOtherRules?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  productId?: InputMaybe<Scalars['ID']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type FilterCatalogRuleProductPriceInput = {
  catalogRuleId: Scalars['Int'];
  channelId: Scalars['ID'];
  customerGroupId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  productId: Scalars['ID'];
};

export type FilterCatalogRulesInput = {
  end?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterCategoryListInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterChannelInput = {
  code?: InputMaybe<Scalars['String']>;
  hostname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterCmsPageInput = {
  id?: InputMaybe<Scalars['Int']>;
  pageTitle?: InputMaybe<Scalars['String']>;
  urlKey?: InputMaybe<Scalars['String']>;
};

export type FilterCmsPageTranslationInput = {
  cmsPageId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  pageTitle?: InputMaybe<Scalars['String']>;
  urlKey?: InputMaybe<Scalars['String']>;
};

export type FilterCompareProductsInput = {
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  productFlatId?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
};

export type FilterContentInput = {
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FilterCoreConfigInput = {
  channelCode?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  localeCode?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FilterCurrencyInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterCustomerAddressInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['Int']>;
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
};

export type FilterCustomerGroupInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterCustomerInput = {
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  groupName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterCustomerOrderInput = {
  baseGrandTotal?: InputMaybe<Scalars['Float']>;
  baseSubTotal?: InputMaybe<Scalars['Float']>;
  channelName?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  incrementId?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FilterDownloadablePurchaseInput = {
  downloadBought?: InputMaybe<Scalars['Int']>;
  downloadUsed?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  linkName?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  orderItemId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FilterExchangeRateInput = {
  currency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type FilterInventorySourceInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterInvoiceInput = {
  grandTotal?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  invoiceDate?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
};

export type FilterInvoiceItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  invoiceId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  orderItemId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
};

export type FilterLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterOrderBrandInput = {
  brandName?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  orderId?: InputMaybe<Scalars['Int']>;
  orderItemId?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
};

export type FilterOrderInput = {
  baseGrandTotal?: InputMaybe<Scalars['Float']>;
  baseSubTotal?: InputMaybe<Scalars['Float']>;
  billedTo?: InputMaybe<Scalars['String']>;
  channelName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  orderDate?: InputMaybe<Scalars['String']>;
  shippedTo?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FilterOrderInvoiceInput = {
  amount?: InputMaybe<Scalars['Float']>;
  customerName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  invoiceDate?: InputMaybe<Scalars['String']>;
  orderId: Scalars['Int'];
  status?: InputMaybe<Scalars['String']>;
};

export type FilterOrderItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderId: Scalars['Int'];
  price?: InputMaybe<Scalars['Float']>;
  qtyCanceled?: InputMaybe<Scalars['Float']>;
  qtyInvoiced?: InputMaybe<Scalars['Float']>;
  qtyOrdered?: InputMaybe<Scalars['Float']>;
  qtyRefunded?: InputMaybe<Scalars['Float']>;
  qtyShipped?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  totalWeight?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterOrderRefundInput = {
  customerName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId: Scalars['Int'];
  refundDate?: InputMaybe<Scalars['String']>;
  refunded?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FilterOrderShipmentInput = {
  carrierTitle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId: Scalars['Int'];
  shipmentDate?: InputMaybe<Scalars['String']>;
  totalQty?: InputMaybe<Scalars['Int']>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type FilterProductListingInput = {
  attributes?: InputMaybe<Array<InputMaybe<FilterableAttributes>>>;
  categoryId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<PriceRange>;
  reviews?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SortValues>;
  url_key?: InputMaybe<Scalars['String']>;
};

export type FilterProductsInput = {
  attributeFamily?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  parentId?: InputMaybe<Scalars['ID']>;
  qty?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterRefundInput = {
  baseGrandTotal?: InputMaybe<Scalars['Float']>;
  billedTo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  refundDate?: InputMaybe<Scalars['String']>;
  refunded?: InputMaybe<Scalars['Float']>;
};

export type FilterRefundItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderItemId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  refundId: Scalars['ID'];
  sku?: InputMaybe<Scalars['String']>;
};

export type FilterRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  permissionType?: InputMaybe<Scalars['String']>;
};

export type FilterShipmentInput = {
  id?: InputMaybe<Scalars['Int']>;
  inventorySource?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  shipment_date?: InputMaybe<Scalars['String']>;
  shippingTo?: InputMaybe<Scalars['String']>;
  totalQty?: InputMaybe<Scalars['Int']>;
};

export type FilterShipmentItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orderItemId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  shipmentId: Scalars['ID'];
  sku?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterSliderInput = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FilterSubscriberInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isSubscribed?: InputMaybe<Scalars['Boolean']>;
};

export type FilterTaxCategoryInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterTaxRateInput = {
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
  isZip?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['Float']>;
  zipCode?: InputMaybe<Scalars['String']>;
  zipFrom?: InputMaybe<Scalars['String']>;
  zipTo?: InputMaybe<Scalars['String']>;
};

export type FilterUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FilterWislistInput = {
  channelId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
};

export type FilterableAttribute = {
  adminName: Scalars['String'];
  category: Category;
  code: Scalars['String'];
  id: Scalars['ID'];
  isFilterable: Scalars['Int'];
  options?: Maybe<Array<AttributeOption>>;
  position: Scalars['Int'];
  type: Scalars['String'];
  validation?: Maybe<Scalars['String']>;
};

export type FilterableAttributes = {
  code: Scalars['String'];
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type FormattedAddresses = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type GroupedProductInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type HeaderContent = {
  contentType: Scalars['String'];
  id: Scalars['ID'];
  position: Scalars['Int'];
  status: Scalars['Boolean'];
  success?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<ContentTranslation>>;
};

/** A paginated list of HeaderContent items. */
export type HeaderContentPaginator = {
  /** A list of HeaderContent items. */
  data: Array<HeaderContent>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Image = {
  id: Scalars['ID'];
  path: Scalars['String'];
  product: Product;
  productId: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type InventoriesInput = {
  inventorySourceId: Scalars['ID'];
  qty: Scalars['Int'];
};

export type Inventory = {
  id: Scalars['ID'];
  inventorySource: InventorySource;
  inventorySourceId: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  qty: Scalars['Int'];
  vendorId: Scalars['Int'];
};

export type InventorySource = {
  city: Scalars['String'];
  code: Scalars['String'];
  contactEmail: Scalars['String'];
  contactFax?: Maybe<Scalars['String']>;
  contactName: Scalars['String'];
  contactNumber: Scalars['String'];
  country: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postcode: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  state: Scalars['String'];
  status: Scalars['Boolean'];
  street: Scalars['String'];
  success?: Maybe<Scalars['String']>;
};

/** A paginated list of InventorySource items. */
export type InventorySourcePaginator = {
  /** A list of InventorySource items. */
  data: Array<InventorySource>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Invoice = {
  baseCurrencyCode?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseGrandTotal?: Maybe<Scalars['Float']>;
  baseShippingAmount?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  baseTaxAmount?: Maybe<Scalars['Float']>;
  channelCurrencyCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  emailSent?: Maybe<Scalars['Int']>;
  grandTotal?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  incrementId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<InvoiceItem>>;
  order: Order;
  orderAddressId?: Maybe<Scalars['Int']>;
  orderCurrencyCode?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  shippingAmount?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  taxAmount?: Maybe<Scalars['Float']>;
  totalQty?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type InvoiceDataInput = {
  orderItemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type InvoiceItem = {
  additional?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  basePrice: Scalars['Float'];
  baseTaxAmount?: Maybe<Scalars['Float']>;
  baseTotal: Scalars['Float'];
  children?: Maybe<Array<Maybe<InvoiceItem>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoice?: Maybe<Invoice>;
  invoiceId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  orderItem?: Maybe<OrderItem>;
  orderItemId: Scalars['ID'];
  parentId?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
  product: Product;
  productId: Scalars['ID'];
  productType?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of InvoiceItem items. */
export type InvoiceItemPaginator = {
  /** A list of InvoiceItem items. */
  data: Array<InvoiceItem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Invoice items. */
export type InvoicePaginator = {
  /** A list of Invoice items. */
  data: Array<Invoice>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type LikeReviewResponse = {
  message?: Maybe<Scalars['String']>;
  review?: Maybe<Review>;
  status?: Maybe<Scalars['Boolean']>;
};

export type LinkTranslation = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  productDownloadableLinkId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type Locale = {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  direction: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** A paginated list of Locale items. */
export type LocalePaginator = {
  /** A list of Locale items. */
  data: Array<Locale>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  remember?: InputMaybe<Scalars['Boolean']>;
};

export type LoginResponse = {
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type LogoutResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type MetaData = {
  advertisement?: Maybe<Array<Maybe<Scalars['String']>>>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featuredProductCount?: Maybe<Scalars['Int']>;
  footerLeftContent?: Maybe<Scalars['String']>;
  footerMiddleContent?: Maybe<Scalars['String']>;
  headerContentCount?: Maybe<Scalars['String']>;
  homePageCategories?: Maybe<Array<Maybe<Category>>>;
  homePageContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  newProductsCount?: Maybe<Scalars['Int']>;
  productPolicy?: Maybe<Scalars['String']>;
  productViewImages?: Maybe<Array<Maybe<Scalars['String']>>>;
  sidebarCategoryCount?: Maybe<Scalars['Int']>;
  slider?: Maybe<Scalars['Boolean']>;
  subscriptionBarContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of MetaData items. */
export type MetaDataPaginator = {
  /** A list of MetaData items. */
  data: Array<MetaData>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type MethodResponse = {
  basePrice: Scalars['Float'];
  code: Scalars['String'];
  formattedBasePrice: Scalars['String'];
  formattedPrice: Scalars['String'];
  label: Scalars['String'];
  price: Scalars['Float'];
};

export type MoveToCartResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type Mutation = {
  LikeReview?: Maybe<LikeReviewResponse>;
  addItemToCart?: Maybe<CartItemResponse>;
  addToCompare?: Maybe<AddToCompareResponse>;
  addToWishlist?: Maybe<AddToWishlistResponse>;
  applyCoupon?: Maybe<CouponResponse>;
  cancelOrder?: Maybe<Order>;
  createAddress?: Maybe<AddressListResult>;
  createAttribute?: Maybe<Attribute>;
  createAttributeFamily?: Maybe<AttributeFamily>;
  createAttributeGroup?: Maybe<AttributeGroup>;
  createCartRule?: Maybe<CartRule>;
  createCatalogRule?: Maybe<CatalogRule>;
  createCategory?: Maybe<Category>;
  createChannel?: Maybe<Channel>;
  createCmsPage?: Maybe<CmsPage>;
  createCurrency?: Maybe<Currency>;
  createCustomScript?: Maybe<CustomScript>;
  createCustomer?: Maybe<Customer>;
  createCustomerAddress?: Maybe<CustomerAddress>;
  createCustomerGroup?: Maybe<CustomerGroup>;
  createExchangeRate?: Maybe<ExchangeRate>;
  createHeaderContent?: Maybe<HeaderContent>;
  createInventorySource?: Maybe<InventorySource>;
  createInvoice?: Maybe<Invoice>;
  createLocale?: Maybe<Locale>;
  createProduct?: Maybe<Product>;
  createRefund?: Maybe<Refund>;
  createReview?: Maybe<CreateReviewResponse>;
  createRole?: Maybe<Role>;
  createShipment?: Maybe<Shipment>;
  createTaxCategory?: Maybe<TaxCategory>;
  createTaxRate?: Maybe<TaxRate>;
  createUser?: Maybe<User>;
  customerLogin?: Maybe<CustomerLoginResult>;
  customerLogout?: Maybe<CustomerLogoutResponse>;
  customerRegister?: Maybe<CustomerRegisterResponse>;
  deleteAccount?: Maybe<AccountDeleteResponse>;
  deleteAddress?: Maybe<AddressListResult>;
  deleteAttribute?: Maybe<Attribute>;
  deleteAttributeFamily?: Maybe<AttributeFamily>;
  deleteAttributeGroup?: Maybe<AttributeGroup>;
  deleteCartRule?: Maybe<CartRule>;
  deleteCatalogRule?: Maybe<CatalogRule>;
  deleteCategory?: Maybe<Category>;
  deleteChannel?: Maybe<Channel>;
  deleteCmsPage?: Maybe<CmsPage>;
  deleteCurrency?: Maybe<Currency>;
  deleteCustomScript?: Maybe<CustomScript>;
  deleteCustomer?: Maybe<Customer>;
  deleteCustomerAddress?: Maybe<Customer>;
  deleteCustomerGroup?: Maybe<CustomerGroup>;
  deleteExchangeRate?: Maybe<ExchangeRate>;
  deleteHeaderContent?: Maybe<HeaderContent>;
  deleteInventorySource?: Maybe<InventorySource>;
  deleteLocale?: Maybe<Locale>;
  deleteProduct?: Maybe<Product>;
  deleteReview?: Maybe<DeleteReviewResponse>;
  deleteRole?: Maybe<Role>;
  deleteSubscriber?: Maybe<Subscriber>;
  deleteTaxCategory?: Maybe<TaxCategory>;
  deleteTaxRate?: Maybe<TaxRate>;
  deleteUser?: Maybe<User>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  me?: Maybe<Customer>;
  moveToCart?: Maybe<MoveToCartResponse>;
  moveToWishlist?: Maybe<CartItemResponse>;
  paymentMethods?: Maybe<PaymentMethodsResponse>;
  placeOrder?: Maybe<PlacedOrderResponse>;
  removeAllCompareProducts?: Maybe<RemoveCompareResponse>;
  removeAllWishlists?: Maybe<RemoveWishlistResponse>;
  removeCartItem?: Maybe<CartItemResponse>;
  removeFromCompareProduct?: Maybe<RemoveCompareResponse>;
  removeFromWishlist?: Maybe<RemoveWishlistResponse>;
  saveCheckoutAddresses?: Maybe<ShippingMethodsResponse>;
  savePayment?: Maybe<ReviewOrderResponse>;
  subscribe?: Maybe<Subscriber>;
  unSubscribe?: Maybe<Subscriber>;
  updateAccount?: Maybe<AccountInfoResult>;
  updateAddress?: Maybe<AddressListResult>;
  updateAttribute?: Maybe<Attribute>;
  updateAttributeFamily?: Maybe<AttributeFamily>;
  updateAttributeGroup?: Maybe<AttributeGroup>;
  updateCartRule?: Maybe<CartRule>;
  updateCatalogRule?: Maybe<CatalogRule>;
  updateCategory?: Maybe<Category>;
  updateChannel?: Maybe<Channel>;
  updateCmsPage?: Maybe<CmsPage>;
  updateCurrency?: Maybe<Currency>;
  updateCustomCSSScript?: Maybe<CustomScript>;
  updateCustomJSScript?: Maybe<CustomScript>;
  updateCustomer?: Maybe<Customer>;
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerGroup?: Maybe<CustomerGroup>;
  updateExchangeRate?: Maybe<ExchangeRate>;
  updateHeaderContent?: Maybe<HeaderContent>;
  updateInventorySource?: Maybe<InventorySource>;
  updateItemToCart?: Maybe<CartItemResponse>;
  updateLocale?: Maybe<Locale>;
  updateMetaData?: Maybe<MetaData>;
  updateProduct?: Maybe<Product>;
  updateRole?: Maybe<Role>;
  updateTaxCategory?: Maybe<TaxCategory>;
  updateTaxRate?: Maybe<TaxRate>;
  updateUser?: Maybe<User>;
  userLogin?: Maybe<LoginResponse>;
  userLogout?: Maybe<LogoutResponse>;
};


export type MutationLikeReviewArgs = {
  commentId?: InputMaybe<Scalars['ID']>;
};


export type MutationAddItemToCartArgs = {
  input: AddItemToCartInput;
};


export type MutationAddToCompareArgs = {
  input: AddToCompareInput;
};


export type MutationAddToWishlistArgs = {
  input: AddToWishlistInput;
};


export type MutationApplyCouponArgs = {
  input: ApplyCouponInput;
};


export type MutationCancelOrderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


export type MutationCreateAttributeArgs = {
  input: CreateAttributeInput;
};


export type MutationCreateAttributeFamilyArgs = {
  input: CreateAttributeFamilyInput;
};


export type MutationCreateAttributeGroupArgs = {
  input: CreateAttributeGroupInput;
};


export type MutationCreateCartRuleArgs = {
  input: CreateCartRuleInput;
};


export type MutationCreateCatalogRuleArgs = {
  input: CreateCatalogRuleInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCmsPageArgs = {
  input: CreateCmsPageInput;
};


export type MutationCreateCurrencyArgs = {
  input: CreateCurrencyInput;
};


export type MutationCreateCustomScriptArgs = {
  input: CreateCustomScriptInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateCustomerAddressInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateExchangeRateArgs = {
  input: CreateExchangeRateInput;
};


export type MutationCreateHeaderContentArgs = {
  input: CreateHeaderContentInput;
};


export type MutationCreateInventorySourceArgs = {
  input: CreateInventorySourceInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateLocaleArgs = {
  input: CreateLocaleInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateRefundArgs = {
  input: CreateRefundInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateShipmentArgs = {
  input: CreateShipmentInput;
};


export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput;
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCustomerLoginArgs = {
  input: LoginInput;
};


export type MutationCustomerRegisterArgs = {
  input: CreateRegisterInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAttributeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAttributeFamilyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAttributeGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCartRuleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCatalogRuleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChannelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCmsPageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCurrencyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomScriptArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteExchangeRateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHeaderContentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteInventorySourceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLocaleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSubscriberArgs = {
  email: Scalars['String'];
};


export type MutationDeleteTaxCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaxRateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationMoveToCartArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationMoveToWishlistArgs = {
  id: Scalars['ID'];
};


export type MutationPaymentMethodsArgs = {
  input: SaveShippingMethodInput;
};


export type MutationRemoveCartItemArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveFromCompareProductArgs = {
  input: AddToCompareInput;
};


export type MutationRemoveFromWishlistArgs = {
  input: AddToWishlistInput;
};


export type MutationSaveCheckoutAddressesArgs = {
  input: SaveShippingAddressInput;
};


export type MutationSavePaymentArgs = {
  input: SavePaymentMethodInput;
};


export type MutationSubscribeArgs = {
  input: SubscriberInput;
};


export type MutationUnSubscribeArgs = {
  token: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdateAddressArgs = {
  id: Scalars['ID'];
  input: UpdateAddressInput;
};


export type MutationUpdateAttributeArgs = {
  id: Scalars['ID'];
  input: CreateAttributeInput;
};


export type MutationUpdateAttributeFamilyArgs = {
  id: Scalars['ID'];
  input: CreateAttributeFamilyInput;
};


export type MutationUpdateAttributeGroupArgs = {
  id: Scalars['ID'];
  input: CreateAttributeGroupInput;
};


export type MutationUpdateCartRuleArgs = {
  id: Scalars['ID'];
  input: UpdateCartRuleInput;
};


export type MutationUpdateCatalogRuleArgs = {
  id: Scalars['ID'];
  input: CreateCatalogRuleInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input: CreateCategoryInput;
};


export type MutationUpdateChannelArgs = {
  id: Scalars['ID'];
  input: CreateChannelInput;
};


export type MutationUpdateCmsPageArgs = {
  id: Scalars['ID'];
  input: CreateCmsPageInput;
};


export type MutationUpdateCurrencyArgs = {
  id: Scalars['ID'];
  input: CreateCurrencyInput;
};


export type MutationUpdateCustomCssScriptArgs = {
  input: UpdateCustomCssInput;
};


export type MutationUpdateCustomJsScriptArgs = {
  input: UpdateCustomJsInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['ID'];
  input: CreateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['ID'];
  input: CreateCustomerAddressInput;
};


export type MutationUpdateCustomerGroupArgs = {
  id: Scalars['ID'];
  input: CreateCustomerGroupInput;
};


export type MutationUpdateExchangeRateArgs = {
  id: Scalars['ID'];
  input: CreateExchangeRateInput;
};


export type MutationUpdateHeaderContentArgs = {
  id: Scalars['ID'];
  input: CreateHeaderContentInput;
};


export type MutationUpdateInventorySourceArgs = {
  id: Scalars['ID'];
  input: CreateInventorySourceInput;
};


export type MutationUpdateItemToCartArgs = {
  input: UpdateItemToCartInput;
};


export type MutationUpdateLocaleArgs = {
  id: Scalars['ID'];
  input: CreateLocaleInput;
};


export type MutationUpdateMetaDataArgs = {
  id: Scalars['ID'];
  input: CreateMetaDataInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input: UpdateProductInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  input: CreateRoleInput;
};


export type MutationUpdateTaxCategoryArgs = {
  id: Scalars['ID'];
  input: CreateTaxCategoryInput;
};


export type MutationUpdateTaxRateArgs = {
  id: Scalars['ID'];
  input: CreateTaxRateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: CreateUserInput;
};


export type MutationUserLoginArgs = {
  input: CreateUserLoginInput;
};

export type NewAddressInput = {
  additional?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  saveAsAddress?: InputMaybe<Scalars['Boolean']>;
  state: Scalars['String'];
  useForShipping?: InputMaybe<Scalars['Boolean']>;
};

export type OptionInput = {
  adminName: Scalars['String'];
  swatchValue?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<InputMaybe<OptionTranslationInput>>>;
};

export type OptionTranslationInput = {
  code: Scalars['String'];
  label: Scalars['String'];
};

export type Order = {
  addresses?: Maybe<Array<OrderAddress>>;
  appliedCartRuleIds?: Maybe<Scalars['String']>;
  baseCurrencyCode?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  baseGrandTotal?: Maybe<Scalars['Float']>;
  baseGrandTotalInvoiced?: Maybe<Scalars['Float']>;
  baseGrandTotalRefunded?: Maybe<Scalars['Float']>;
  baseShippingAmount?: Maybe<Scalars['Float']>;
  baseShippingDiscountAmount?: Maybe<Scalars['Float']>;
  baseShippingInvoiced?: Maybe<Scalars['Float']>;
  baseShippingRefunded?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  baseSubTotalInvoiced?: Maybe<Scalars['Float']>;
  baseSubTotalRefunded?: Maybe<Scalars['Float']>;
  baseTaxAmount?: Maybe<Scalars['Float']>;
  baseTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  baseTaxAmountRefunded?: Maybe<Scalars['Float']>;
  billingAddress: OrderAddress;
  cart: Cart;
  cartId?: Maybe<Scalars['ID']>;
  channel?: Maybe<Channel>;
  channelCurrencyCode?: Maybe<Scalars['String']>;
  channelId?: Maybe<Scalars['Int']>;
  channelName?: Maybe<Scalars['String']>;
  channelType?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<OrderComment>>>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerCompanyName?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerFirstName?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerLastName?: Maybe<Scalars['String']>;
  customerType?: Maybe<Scalars['String']>;
  customerVatId?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountInvoiced?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  discountRefunded?: Maybe<Scalars['Float']>;
  grandTotal?: Maybe<Scalars['Float']>;
  grandTotalInvoiced?: Maybe<Scalars['Float']>;
  grandTotalRefunded?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  incrementId?: Maybe<Scalars['String']>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  isGift?: Maybe<Scalars['Int']>;
  isGuest?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<OrderItem>>;
  orderCurrencyCode?: Maybe<Scalars['String']>;
  payment?: Maybe<OrderPayment>;
  refunds?: Maybe<Array<Refund>>;
  shipments?: Maybe<Array<Maybe<Shipment>>>;
  shippingAddress: OrderAddress;
  shippingAmount?: Maybe<Scalars['Float']>;
  shippingDescription?: Maybe<Scalars['String']>;
  shippingDiscountAmount?: Maybe<Scalars['Float']>;
  shippingInvoiced?: Maybe<Scalars['Float']>;
  shippingMethod?: Maybe<Scalars['String']>;
  shippingRefunded?: Maybe<Scalars['Float']>;
  shippingTitle?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  subTotalInvoiced?: Maybe<Scalars['Float']>;
  subTotalRefunded?: Maybe<Scalars['Float']>;
  success?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  taxAmountInvoiced?: Maybe<Scalars['Float']>;
  taxAmountRefunded?: Maybe<Scalars['Float']>;
  totalItemCount?: Maybe<Scalars['Int']>;
  totalQtyOrdered?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderAddress = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  defaultAddress?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
};

export type OrderBrand = {
  brand?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Category>>;
  getBrands?: Maybe<AttributeOption>;
  id: Scalars['ID'];
  orderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
  productId: Scalars['ID'];
};

/** A paginated list of OrderBrand items. */
export type OrderBrandPaginator = {
  /** A list of OrderBrand items. */
  data: Array<OrderBrand>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type OrderComment = {
  comment?: Maybe<Scalars['String']>;
  customerNotified: Scalars['Boolean'];
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
};

export type OrderInventory = {
  channel: Channel;
  channelId: Scalars['ID'];
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  qty: Scalars['Int'];
};

export type OrderInvoiceInput = {
  baseGrandTotal?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  invoiceDate?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type OrderItem = {
  additional?: Maybe<Scalars['String']>;
  amountRefunded: Scalars['Float'];
  baseAmountRefunded: Scalars['Float'];
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseDiscountInvoiced?: Maybe<Scalars['Float']>;
  baseDiscountRefunded?: Maybe<Scalars['Float']>;
  basePrice: Scalars['Float'];
  baseTaxAmount?: Maybe<Scalars['Float']>;
  baseTaxAmountInvoiced?: Maybe<Scalars['Float']>;
  baseTaxAmountRefunded?: Maybe<Scalars['Float']>;
  baseTotal: Scalars['Float'];
  baseTotalInvoiced: Scalars['Float'];
  child?: Maybe<OrderItem>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountInvoiced?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  discountRefunded?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>;
  name?: Maybe<Scalars['String']>;
  order: Order;
  orderId: Scalars['ID'];
  parent?: Maybe<OrderItem>;
  parentId?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  product: Product;
  productId: Scalars['ID'];
  productType?: Maybe<Scalars['String']>;
  qtyCanceled?: Maybe<Scalars['Int']>;
  qtyInvoiced?: Maybe<Scalars['Int']>;
  qtyOrdered?: Maybe<Scalars['Int']>;
  qtyRefunded?: Maybe<Scalars['Int']>;
  qtyShipped?: Maybe<Scalars['Int']>;
  refundItems?: Maybe<Array<Maybe<RefundItem>>>;
  shipmentItems?: Maybe<Array<Maybe<ShipmentItem>>>;
  sku: Scalars['String'];
  taxAmount?: Maybe<Scalars['Float']>;
  taxAmountInvoiced?: Maybe<Scalars['Float']>;
  taxAmountRefunded?: Maybe<Scalars['Float']>;
  taxPercent?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
  totalInvoiced: Scalars['Float'];
  totalWeight?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight: Scalars['Float'];
};

/** A paginated list of OrderItem items. */
export type OrderItemPaginator = {
  /** A list of OrderItem items. */
  data: Array<OrderItem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Order items. */
export type OrderPaginator = {
  /** A list of Order items. */
  data: Array<Order>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type OrderPayment = {
  additional?: Maybe<OrderPaymentAdditional>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  methodTitle?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderPaymentAdditional = {
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type OrderRefundInput = {
  adjustmentFee?: InputMaybe<Scalars['Float']>;
  adjustmentRefund?: InputMaybe<Scalars['Float']>;
  baseGrandTotal?: InputMaybe<Scalars['Float']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  grandTotal?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  refundDate?: InputMaybe<Scalars['String']>;
  shippingAmount?: InputMaybe<Scalars['Float']>;
  taxAmount?: InputMaybe<Scalars['Float']>;
};

export type OrderShipmentInput = {
  carrierTitle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  shipmentDate?: InputMaybe<Scalars['String']>;
  shipmentDateFrom?: InputMaybe<Scalars['String']>;
  shipmentDateTo?: InputMaybe<Scalars['String']>;
  trackNumber?: InputMaybe<Scalars['String']>;
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type PaymentMethodInput = {
  method: Scalars['String'];
};

export type PaymentMethodsResponse = {
  cart: Cart;
  cartCount: Scalars['Int'];
  cartTotal: Scalars['String'];
  jumpToSection?: Maybe<Scalars['String']>;
  paymentMethods?: Maybe<Array<PaymentResponse>>;
  success?: Maybe<Scalars['String']>;
};

export type PaymentResponse = {
  description?: Maybe<Scalars['String']>;
  method: Scalars['String'];
  method_title: Scalars['String'];
  sort: Scalars['Int'];
};

export type PlacedOrderResponse = {
  order?: Maybe<Order>;
  redirectUrl?: Maybe<Scalars['String']>;
  selectedMethod?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
};

export type PriceRange = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  additionalData?: Maybe<Array<Maybe<ProductAdditionalData>>>;
  attributeFamily: AttributeFamily;
  attributeFamilyId: Scalars['Int'];
  attributeValues?: Maybe<Array<ProductAttributeValue>>;
  booking?: Maybe<BookingProduct>;
  bundleOptions?: Maybe<Array<Maybe<ProductBundleOption>>>;
  cacheBaseImage?: Maybe<CacheImage>;
  cacheGalleryImages?: Maybe<Array<Maybe<CacheImage>>>;
  categories?: Maybe<Array<Category>>;
  configutableData?: Maybe<ConfigutableProductData>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerGroupPrices?: Maybe<Array<Maybe<CustomerGroupPrice>>>;
  differentDaySlots?: Maybe<Array<BookingDaySlots>>;
  downloadableLinks?: Maybe<Array<Maybe<ProductDownloadableLink>>>;
  downloadableSamples?: Maybe<Array<Maybe<ProductDownloadableSample>>>;
  groupedProducts?: Maybe<Array<Maybe<ProductGroupedProduct>>>;
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  inventories?: Maybe<Array<Inventory>>;
  isInWishlist?: Maybe<Scalars['Boolean']>;
  orderedInventories?: Maybe<Array<OrderInventory>>;
  parent?: Maybe<Product>;
  parentId?: Maybe<Scalars['ID']>;
  priceHtml?: Maybe<ProductPriceHtml>;
  productFlat?: Maybe<ProductFlat>;
  productFlats?: Maybe<Array<ProductFlat>>;
  relatedProducts?: Maybe<Array<Product>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  sameDaySlots?: Maybe<Array<BookingDaySlots>>;
  sku: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  superAttributes?: Maybe<Array<Attribute>>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  variants?: Maybe<Array<Maybe<Product>>>;
  videos?: Maybe<Array<Video>>;
};


export type ProductProductFlatArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type ProductProductFlatsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductAdditionalData = {
  admin_name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ProductAttributeValue = {
  attribute: Attribute;
  attributeId: Scalars['ID'];
  booleanValue?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<Scalars['String']>;
  dateTimeValue?: Maybe<Scalars['String']>;
  dateValue?: Maybe<Scalars['String']>;
  floatValue?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  integerValue?: Maybe<Scalars['Int']>;
  jsonValue?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  product: Product;
  productId: Scalars['ID'];
  textValue?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ProductBundleOption = {
  bundleOptionProducts?: Maybe<Array<ProductBundleOptionProduct>>;
  id: Scalars['ID'];
  isRequired: Scalars['Boolean'];
  product: Product;
  productId: Scalars['ID'];
  sortOrder: Scalars['Int'];
  translations?: Maybe<Array<BundleOptionTranslation>>;
  type: Scalars['String'];
};

export type ProductBundleOptionProduct = {
  bundleOption: ProductBundleOption;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  isUserDefined: Scalars['Boolean'];
  product: Product;
  productBundleOptionId: Scalars['ID'];
  productId: Scalars['ID'];
  qty: Scalars['Int'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type ProductDownloadableLink = {
  downloads: Scalars['Int'];
  file?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  price: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sampleFile?: Maybe<Scalars['String']>;
  sampleFileName?: Maybe<Scalars['String']>;
  sampleType?: Maybe<Scalars['String']>;
  sampleUrl?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<LinkTranslation>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProductDownloadableSample = {
  createdAt: Scalars['DateTime'];
  file?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  sortOrder?: Maybe<Scalars['Int']>;
  translations?: Maybe<Array<SampleTranslation>>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

export type ProductFlat = {
  averageRating?: Maybe<Scalars['Float']>;
  channel: Scalars['String'];
  color?: Maybe<Scalars['Int']>;
  colorLabel?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  locale: Scalars['String'];
  mainCategory?: Maybe<Category>;
  maxPrice?: Maybe<Scalars['Float']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  minPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<ProductFlat>;
  parentId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  product: Product;
  productId: Scalars['ID'];
  productNumber?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  reviewsCount?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sizeLabel?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  specialPrice?: Maybe<Scalars['Float']>;
  specialPriceFrom?: Maybe<Scalars['String']>;
  specialPriceTo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ProductFlat>>>;
  visibleIndividually?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** A paginated list of ProductFlat items. */
export type ProductFlatPaginator = {
  /** A list of ProductFlat items. */
  data: Array<ProductFlat>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ProductGroupedProduct = {
  associatedProduct: Product;
  associatedProductId: Scalars['ID'];
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  qty: Scalars['Int'];
  sortOrder: Scalars['Int'];
};

/** A paginated list of Product items. */
export type ProductPaginator = {
  /** A list of Product items. */
  data: Array<Product>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ProductPriceHtml = {
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  regular?: Maybe<Scalars['String']>;
  special?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  accountInfo?: Maybe<AccountInfoResult>;
  address?: Maybe<CustomerAddress>;
  addresses?: Maybe<AddressListResult>;
  attribute?: Maybe<Attribute>;
  attributeFamilies?: Maybe<AttributeFamilyPaginator>;
  attributeFamily?: Maybe<AttributeFamily>;
  attributeGroup?: Maybe<AttributeGroup>;
  attributeGroups?: Maybe<AttributeGroupPaginator>;
  attributeOption?: Maybe<AttributeOption>;
  attributeOptionTranslation?: Maybe<AttributeOptionTranslation>;
  attributeOptionTranslations?: Maybe<AttributeOptionTranslationPaginator>;
  attributeOptions?: Maybe<AttributeOptionPaginator>;
  attributeTranslation?: Maybe<AttributeTranslation>;
  attributeTranslations?: Maybe<AttributeTranslationPaginator>;
  attributes?: Maybe<AttributePaginator>;
  booking?: Maybe<Booking>;
  bookingProduct?: Maybe<BookingProduct>;
  bookingProducts?: Maybe<BookingProductPaginator>;
  bookings?: Maybe<BookingPaginator>;
  cartDetail?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartPayment?: Maybe<CartPayment>;
  cartPayments?: Maybe<CartPaymentPaginator>;
  cartRule?: Maybe<CartRule>;
  cartRules?: Maybe<CartRulePaginator>;
  catalogRule?: Maybe<CatalogRule>;
  catalogRuleProduct?: Maybe<CatalogRuleProduct>;
  catalogRuleProductPrice?: Maybe<CatalogRuleProductPrice>;
  catalogRuleProductPrices?: Maybe<CatalogRuleProductPricePaginator>;
  catalogRuleProducts?: Maybe<CatalogRuleProductPaginator>;
  catalogRules?: Maybe<CatalogRulePaginator>;
  categories?: Maybe<CategoryPaginator>;
  category?: Maybe<Category>;
  channel?: Maybe<Channel>;
  channels?: Maybe<ChannelPaginator>;
  checkoutAddresses?: Maybe<CheckoutAddressesResponse>;
  cmsPage?: Maybe<CmsPage>;
  cmsPageTranslation?: Maybe<CmsTranslation>;
  cmsPageTranslations?: Maybe<CmsTranslationPaginator>;
  cmsPages?: Maybe<CmsPagePaginator>;
  compareProduct?: Maybe<CustomerCompareProduct>;
  compareProducts?: Maybe<Array<CustomerCompareProduct>>;
  contentTranslation?: Maybe<ContentTranslation>;
  contentTranslations?: Maybe<ContentTranslationPaginator>;
  coreConfig?: Maybe<CoreConfig>;
  coreConfigs?: Maybe<CoreConfigPaginator>;
  countrieState?: Maybe<CountryState>;
  countrieStates?: Maybe<CountryStatePaginator>;
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  currencies?: Maybe<CurrencyPaginator>;
  currency?: Maybe<Currency>;
  customer?: Maybe<Customer>;
  customerAddress?: Maybe<CustomerAddress>;
  customerAddresses?: Maybe<CustomerAddressPaginator>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups?: Maybe<CustomerGroupPaginator>;
  customers?: Maybe<CustomerPaginator>;
  downloadableLinkPurchase?: Maybe<DownloadableLinkPurchased>;
  downloadableLinkPurchases?: Maybe<Array<DownloadableLinkPurchased>>;
  exchangeRate?: Maybe<ExchangeRate>;
  exchangeRates?: Maybe<ExchangeRatePaginator>;
  filterableAttributes?: Maybe<Array<Attribute>>;
  getProductListing?: Maybe<ProductPaginator>;
  headerContent?: Maybe<HeaderContent>;
  headerContents?: Maybe<HeaderContentPaginator>;
  inventorySource?: Maybe<InventorySource>;
  inventorySources?: Maybe<InventorySourcePaginator>;
  invoice?: Maybe<Invoice>;
  invoiceItem?: Maybe<InvoiceItem>;
  invoiceItems?: Maybe<InvoiceItemPaginator>;
  invoices?: Maybe<InvoicePaginator>;
  locale?: Maybe<Locale>;
  locales?: Maybe<LocalePaginator>;
  metaData?: Maybe<MetaData>;
  newsletterSubscriber?: Maybe<Subscriber>;
  newsletterSubscribers?: Maybe<SubscriberPaginator>;
  order?: Maybe<Order>;
  orderDetail?: Maybe<Order>;
  orderInvoice?: Maybe<Invoice>;
  orderInvoices?: Maybe<InvoicePaginator>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<OrderItemPaginator>;
  orderRefund?: Maybe<Refund>;
  orderRefunds?: Maybe<RefundPaginator>;
  orderShipment?: Maybe<Shipment>;
  orderShipments?: Maybe<ShipmentPaginator>;
  orderbrand?: Maybe<OrderBrand>;
  orderbrands?: Maybe<OrderBrandPaginator>;
  orders?: Maybe<OrderPaginator>;
  ordersList?: Maybe<OrderPaginator>;
  product?: Maybe<Product>;
  productFlat?: Maybe<ProductFlat>;
  productFlats?: Maybe<ProductFlatPaginator>;
  products?: Maybe<ProductPaginator>;
  refund?: Maybe<Refund>;
  refundItem?: Maybe<RefundItem>;
  refundItems?: Maybe<RefundItemPaginator>;
  refunds?: Maybe<RefundPaginator>;
  relatedProducts?: Maybe<Array<Maybe<Product>>>;
  review?: Maybe<Review>;
  reviewDetail?: Maybe<Review>;
  reviews?: Maybe<ReviewPaginator>;
  reviewsInfo?: Maybe<ReviewListReturnType>;
  reviewsList?: Maybe<ReviewPaginator>;
  role?: Maybe<Role>;
  roles?: Maybe<RolePaginator>;
  searchProduct?: Maybe<ProductPaginator>;
  shipment?: Maybe<Shipment>;
  shipmentItem?: Maybe<ShipmentItem>;
  shipmentItems?: Maybe<ShipmentItemPaginator>;
  shipments?: Maybe<ShipmentPaginator>;
  shippingMethods?: Maybe<ShippingMethodsResponse>;
  slider?: Maybe<Slider>;
  sliders?: Maybe<SliderPaginator>;
  taxCategories?: Maybe<TaxCategoryPaginator>;
  taxCategory?: Maybe<TaxCategory>;
  taxRate?: Maybe<TaxRate>;
  taxRates?: Maybe<TaxRatePaginator>;
  userActivity?: Maybe<UserActivityType>;
  users?: Maybe<UserPaginator>;
  velocityMetaData?: Maybe<MetaDataPaginator>;
  viewInvoice?: Maybe<Invoice>;
  viewInvoices?: Maybe<Array<Invoice>>;
  viewRefund?: Maybe<Refund>;
  viewRefunds?: Maybe<Array<Refund>>;
  viewShipment?: Maybe<Shipment>;
  viewShipments?: Maybe<Array<Shipment>>;
  wishlist?: Maybe<WishlistPaginator>;
  wishlists?: Maybe<WishlistPaginator>;
};


export type QueryAddressArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeFamiliesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterAttributeFamiliesInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributeFamilyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeGroupsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributeOptionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeOptionTranslationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeOptionTranslationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributeOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributeTranslationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributeTranslationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterAttributesInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBookingArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBookingProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBookingProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBookingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCartItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCartPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCartPaymentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCartRuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCartRulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCartRulesInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCatalogRuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCatalogRuleProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterCatalogRuleProductInput;
};


export type QueryCatalogRuleProductPriceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterCatalogRuleProductPriceInput;
};


export type QueryCatalogRuleProductPricesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterCatalogRuleProductPriceInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCatalogRuleProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterCatalogRuleProductInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCatalogRulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCatalogRulesInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCategoryListInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChannelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterChannelInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCmsPageTranslationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterCmsPageTranslationInput;
};


export type QueryCmsPageTranslationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterCmsPageTranslationInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCmsPagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCmsPageInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCompareProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompareProductsArgs = {
  input?: InputMaybe<FilterCompareProductsInput>;
};


export type QueryContentTranslationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContentTranslationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCoreConfigArgs = {
  code: Scalars['String'];
};


export type QueryCoreConfigsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCoreConfigInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountrieStateArgs = {
  id: Scalars['ID'];
};


export type QueryCountrieStatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCurrencyInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerAddressArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCustomerAddressInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCustomerGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerGroupsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCustomerGroupInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCustomersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCustomerInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryDownloadableLinkPurchaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDownloadableLinkPurchasesArgs = {
  input?: InputMaybe<FilterDownloadablePurchaseInput>;
};


export type QueryExchangeRateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryExchangeRatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterExchangeRateInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductListingArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterProductListingInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryHeaderContentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryHeaderContentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterContentInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryInventorySourceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryInventorySourcesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterInventorySourceInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryInvoiceItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterInvoiceItemInput;
};


export type QueryInvoiceItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterInvoiceItemInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryInvoicesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterInvoiceInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLocalesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterLocaleInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMetaDataArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNewsletterSubscriberArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNewsletterSubscribersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterSubscriberInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderDetailArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderInvoicesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterOrderInvoiceInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterOrderItemInput;
};


export type QueryOrderItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterOrderItemInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderRefundArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderRefundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterOrderRefundInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderShipmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderShipmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterOrderShipmentInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderbrandArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrderbrandsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterOrderBrandInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterOrderInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryOrdersListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterCustomerOrderInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductFlatArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductFlatsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterProductsInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRefundArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRefundItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterRefundItemInput;
};


export type QueryRefundItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterRefundItemInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRefundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterRefundInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRelatedProductsArgs = {
  productId: Scalars['Int'];
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryReviewDetailArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryReviewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<ReviewFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryReviewsInfoArgs = {
  productId?: InputMaybe<Scalars['Int']>;
};


export type QueryReviewsListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<CustomerReviewInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterRoleInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchProductArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<SearchProductInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryShipmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryShipmentItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: FilterShipmentItemInput;
};


export type QueryShipmentItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: FilterShipmentItemInput;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryShipmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterShipmentInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySliderArgs = {
  id: Scalars['ID'];
};


export type QuerySlidersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterSliderInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTaxCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterTaxCategoryInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTaxCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTaxRateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTaxRatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterTaxRateInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUserActivityArgs = {
  input?: InputMaybe<UserActivityinput>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterUserInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryVelocityMetaDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryViewInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryViewInvoicesArgs = {
  input?: InputMaybe<OrderInvoiceInput>;
};


export type QueryViewRefundArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryViewRefundsArgs = {
  input?: InputMaybe<OrderRefundInput>;
};


export type QueryViewShipmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryViewShipmentsArgs = {
  input?: InputMaybe<OrderShipmentInput>;
};


export type QueryWishlistArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryWishlistsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<FilterWislistInput>;
  page?: InputMaybe<Scalars['Int']>;
};

export type RatesResponse = {
  methods: MethodResponse;
  title: Scalars['String'];
};

export type Refund = {
  adjustmentFee?: Maybe<Scalars['Float']>;
  adjustmentRefund?: Maybe<Scalars['Float']>;
  baseAdjustmentFee?: Maybe<Scalars['Float']>;
  baseAdjustmentRefund?: Maybe<Scalars['Float']>;
  baseCurrencyCode?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  baseGrandTotal?: Maybe<Scalars['Float']>;
  baseShippingAmount?: Maybe<Scalars['Float']>;
  baseSubTotal?: Maybe<Scalars['Float']>;
  baseTaxAmount?: Maybe<Scalars['Float']>;
  channelCurrencyCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  emailSent?: Maybe<Scalars['Int']>;
  grandTotal?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  incrementId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<RefundItem>>;
  order: Order;
  orderCurrencyCode?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  shippingAmount?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  success?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  totalQty?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type RefundDataInput = {
  orderItemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type RefundItem = {
  additional?: Maybe<Scalars['String']>;
  baseDiscountAmount?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  baseTaxAmount?: Maybe<Scalars['Float']>;
  baseTotal?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  orderItem: OrderItem;
  orderItemId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  product: Product;
  productId?: Maybe<Scalars['Int']>;
  productType?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  refund: Refund;
  refundId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of RefundItem items. */
export type RefundItemPaginator = {
  /** A list of RefundItem items. */
  data: Array<RefundItem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Refund items. */
export type RefundPaginator = {
  /** A list of Refund items. */
  data: Array<Refund>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type RelatedProduct = {
  childId?: Maybe<Scalars['ID']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type RemoveCompareResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
};

export type RemoveWishlistResponse = {
  status?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
  wishlist?: Maybe<Array<Maybe<Wishlist>>>;
};

export type RentalBookingProductSlots = {
  bookingProductId: Scalars['ID'];
  dailyPrice?: Maybe<Scalars['Float']>;
  hourlyPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  rentingType: Scalars['String'];
  sameSlotAllDays?: Maybe<Scalars['Boolean']>;
  slots?: Maybe<Array<Maybe<BookingDaySlots>>>;
};

export type Review = {
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['ID']>;
  customerName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initials?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  product: Product;
  productId: Scalars['ID'];
  rating: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userLike?: Maybe<Scalars['Boolean']>;
};

export type ReviewFilterInput = {
  customerId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  rating?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ReviewListReturnType = {
  averageRating?: Maybe<Scalars['Float']>;
  starsMap?: Maybe<Array<Maybe<StarsMap>>>;
};

export type ReviewOrderResponse = {
  cart: Cart;
  jumpToSection?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
};

/** A paginated list of Review items. */
export type ReviewPaginator = {
  /** A list of Review items. */
  data: Array<Review>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum ReviewsOrder {
  Newest = 'NEWEST',
  Popular = 'POPULAR'
}

export type Role = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  permissionType: Scalars['String'];
  permissions?: Maybe<Array<Scalars['String']>>;
  success?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Role items. */
export type RolePaginator = {
  /** A list of Role items. */
  data: Array<Role>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type SampleTranslation = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  productDownloadableSampleId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type SavePaymentMethodInput = {
  payment: PaymentMethodInput;
};

export type SaveShippingAddressInput = {
  billing?: InputMaybe<NewAddressInput>;
  billingAddressId: Scalars['Int'];
  currency?: InputMaybe<Scalars['String']>;
  shipping?: InputMaybe<NewAddressInput>;
  shippingAddressId: Scalars['Int'];
  type: Scalars['String'];
};

export type SaveShippingMethodInput = {
  currency?: InputMaybe<Scalars['String']>;
  shippingMethod: Scalars['String'];
};

export type SearchProductInput = {
  term?: InputMaybe<Scalars['String']>;
};

export type Shipment = {
  carrierCode?: Maybe<Scalars['String']>;
  carrierTitle?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Int']>;
  customerType?: Maybe<Scalars['String']>;
  emailSent?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inventorySource: InventorySource;
  inventorySourceId?: Maybe<Scalars['Int']>;
  inventorySourceName?: Maybe<Scalars['String']>;
  items?: Maybe<Array<ShipmentItem>>;
  order: Order;
  orderAddressId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  totalQty?: Maybe<Scalars['Int']>;
  totalWeight?: Maybe<Scalars['Float']>;
  trackNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ShipmentDataInput = {
  orderItemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type ShipmentItem = {
  additional?: Maybe<Scalars['String']>;
  basePrice?: Maybe<Scalars['Float']>;
  baseTotal?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  orderItem: OrderItem;
  orderItemId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  product: Product;
  productId: Scalars['ID'];
  productType?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  shipment: Shipment;
  shipmentId: Scalars['ID'];
  sku?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

/** A paginated list of ShipmentItem items. */
export type ShipmentItemPaginator = {
  /** A list of ShipmentItem items. */
  data: Array<ShipmentItem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Shipment items. */
export type ShipmentPaginator = {
  /** A list of Shipment items. */
  data: Array<Shipment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ShippingMethodsResponse = {
  cart?: Maybe<Cart>;
  cartCount: Scalars['Int'];
  cartTotal: Scalars['String'];
  jumpToSection?: Maybe<Scalars['String']>;
  paymentMethods?: Maybe<Array<PaymentResponse>>;
  shippingMethods?: Maybe<Array<RatesResponse>>;
  success?: Maybe<Scalars['String']>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

export type Slider = {
  channel: Channel;
  channelId: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  path: Scalars['String'];
  sliderPath?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** A paginated list of Slider items. */
export type SliderPaginator = {
  /** A list of Slider items. */
  data: Array<Slider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export enum SortValues {
  Count = 'Count',
  Discount = 'Discount',
  Expensive = 'Expensive',
  List = 'List',
  Most = 'Most',
  Newest = 'Newest',
  Popular = 'Popular',
  Reviews = 'Reviews'
}

export type StarsMap = {
  count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type Subscriber = {
  channelId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  isSubscribed?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriberInput = {
  email: Scalars['String'];
};

/** A paginated list of Subscriber items. */
export type SubscriberPaginator = {
  /** A list of Subscriber items. */
  data: Array<Subscriber>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Suggestion = {
  category?: Maybe<CategorySuggestion>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  specialPrice?: Maybe<Scalars['Float']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type SuggestionResponse = {
  data?: Maybe<Array<Maybe<Suggestion>>>;
};

export type SuperAttributesInput = {
  attributeCode: Scalars['String'];
  values?: InputMaybe<Array<Scalars['Int']>>;
};

export type TableBookingProductSlots = {
  bookingProductId: Scalars['ID'];
  breakTime?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  guestLimit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  preventSchedulingBefore: Scalars['Boolean'];
  priceType: Scalars['String'];
  sameSlotAllDays: Scalars['Boolean'];
  slots?: Maybe<Array<BookingDaySlots>>;
};

export type TaxCategory = {
  code: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  taxRates?: Maybe<Array<TaxRate>>;
};

/** A paginated list of TaxCategory items. */
export type TaxCategoryPaginator = {
  /** A list of TaxCategory items. */
  data: Array<TaxCategory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TaxRate = {
  country: Scalars['String'];
  id: Scalars['ID'];
  identifier: Scalars['String'];
  isZip?: Maybe<Scalars['Int']>;
  state: Scalars['String'];
  success?: Maybe<Scalars['String']>;
  taxCategories?: Maybe<Array<Maybe<TaxCategory>>>;
  taxRate: Scalars['Float'];
  zipCode?: Maybe<Scalars['String']>;
  zipFrom?: Maybe<Scalars['String']>;
  zipTo?: Maybe<Scalars['String']>;
};

/** A paginated list of TaxRate items. */
export type TaxRatePaginator = {
  /** A list of TaxRate items. */
  data: Array<TaxRate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TicketBookingProductSlots = {
  bookingProductId: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  qty: Scalars['Int'];
  specialPrice?: Maybe<Scalars['Float']>;
  specialPriceFrom?: Maybe<Scalars['DateTime']>;
  specialPriceTo?: Maybe<Scalars['DateTime']>;
  translations?: Maybe<Array<BookingTicketsTranslations>>;
};

export type Translation = {
  category_id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale: Scalars['String'];
  localeId?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  urlPath?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAccountInput = {
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  oldpassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordConfirmation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  defaultAddress?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  state: Scalars['String'];
  vatId?: InputMaybe<Scalars['String']>;
};

export type UpdateBookingInput = {
  availableEveryWeek?: InputMaybe<Scalars['Boolean']>;
  availableFrom?: InputMaybe<Scalars['String']>;
  availableTo?: InputMaybe<Scalars['String']>;
  bookingType?: InputMaybe<Scalars['String']>;
  breakTime?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  location: Scalars['String'];
  qty?: InputMaybe<Scalars['Int']>;
  rentalSlot?: InputMaybe<BookingRentalInput>;
  sameSlotAllDays?: InputMaybe<Scalars['Boolean']>;
  slots?: InputMaybe<Array<BookingSlotsInput>>;
  tableSlot?: InputMaybe<BookingTableInput>;
  tickets?: InputMaybe<Array<BookingTicketsInput>>;
  type: Scalars['String'];
};

export type UpdateBundleOptionsInput = {
  bundleOptionId?: InputMaybe<Scalars['ID']>;
  isRequired: Scalars['Boolean'];
  locales?: InputMaybe<Array<BundleOptionLocaleInput>>;
  products?: InputMaybe<Array<BundleProductInput>>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type UpdateCartRuleInput = {
  actionType: Scalars['String'];
  actions?: InputMaybe<Scalars['String']>;
  applyToShipping: Scalars['Boolean'];
  autogeneratedCoupons?: InputMaybe<AutoGeneratedCouponInput>;
  channels?: InputMaybe<Array<Scalars['Int']>>;
  conditionType: Scalars['Boolean'];
  conditions?: InputMaybe<Array<InputMaybe<ConditionInput>>>;
  couponCode?: InputMaybe<Scalars['String']>;
  couponType?: InputMaybe<Scalars['Int']>;
  customerGroups?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  discountAmount: Scalars['Float'];
  discountQuantity: Scalars['Int'];
  discountStep: Scalars['Int'];
  endOtherRules: Scalars['Boolean'];
  endsTill?: InputMaybe<Scalars['DateTime']>;
  freeShipping: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  startsFrom?: InputMaybe<Scalars['DateTime']>;
  status: Scalars['Boolean'];
  timesUsed: Scalars['Int'];
  usagePerCustomer: Scalars['Int'];
  useAutoGeneration?: InputMaybe<Scalars['Boolean']>;
  usesAttributeConditions: Scalars['Boolean'];
  usesPerCoupon: Scalars['Int'];
};

export type UpdateCustomCssInput = {
  channel: Scalars['Int'];
  customCSS: Scalars['String'];
};

export type UpdateCustomJsInput = {
  channel: Scalars['Int'];
  customJS: Scalars['String'];
};

export type UpdateDownloadableLinksInput = {
  downloads: Scalars['Int'];
  file?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  linkProductId?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<DownloadableLocaleInput>>;
  price: Scalars['Float'];
  sampleFile?: InputMaybe<Scalars['String']>;
  sampleFileName?: InputMaybe<Scalars['String']>;
  sampleType: Scalars['String'];
  sampleUrl?: InputMaybe<Scalars['String']>;
  sortOrder: Scalars['Int'];
  type: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateDownloadableSamplesInput = {
  file?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<DownloadableLocaleInput>>;
  sampleProductId?: InputMaybe<Scalars['ID']>;
  sortOrder: Scalars['Int'];
  type: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateGroupedProductInput = {
  associatedProductId: Scalars['ID'];
  groupProductId?: InputMaybe<Scalars['ID']>;
  qty: Scalars['Int'];
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateItemToCartInput = {
  qty?: InputMaybe<Array<UpdateItemsQty>>;
};

export type UpdateItemsQty = {
  cartItemId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type UpdateProductInput = {
  booking?: InputMaybe<UpdateBookingInput>;
  bundleOptions?: InputMaybe<Array<UpdateBundleOptionsInput>>;
  categories?: InputMaybe<Array<Scalars['Int']>>;
  channel: Scalars['String'];
  channels?: InputMaybe<Array<Scalars['Int']>>;
  color?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Float']>;
  crossSells?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  customerGroupPrices?: InputMaybe<Array<InputMaybe<CustomerGroupPriceInput>>>;
  depth?: InputMaybe<Scalars['Float']>;
  description: Scalars['String'];
  downloadableLinks?: InputMaybe<Array<UpdateDownloadableLinksInput>>;
  downloadableSamples?: InputMaybe<Array<UpdateDownloadableSamplesInput>>;
  featured?: InputMaybe<Scalars['Boolean']>;
  guestCheckout?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Float']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inventories?: InputMaybe<Array<InventoriesInput>>;
  links?: InputMaybe<Array<UpdateGroupedProductInput>>;
  locale: Scalars['String'];
  metaDescription?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  new?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Float'];
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  shortDescription: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  specialPrice?: InputMaybe<Scalars['Float']>;
  specialPriceFrom?: InputMaybe<Scalars['String']>;
  specialPriceTo?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  taxCategoryId?: InputMaybe<Scalars['Int']>;
  upSell?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  urlKey: Scalars['String'];
  variants?: InputMaybe<Array<UpdateVariantInput>>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibleIndividually?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type UpdateVariantInput = {
  color?: InputMaybe<Scalars['Int']>;
  inventories?: InputMaybe<Array<VariantInventoryInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  size?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  status: Scalars['Boolean'];
  variantId: Scalars['Int'];
  weight: Scalars['Float'];
};

export type User = {
  apiToken: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  roleId: Scalars['Int'];
  status: Scalars['Boolean'];
  success?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserActivityinput = {
  productId?: InputMaybe<Scalars['Int']>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type VariantInventoryInput = {
  inventorySourceId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type VariantRegularFinalPrice = {
  formatedPrice?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Video = {
  id: Scalars['ID'];
  path: Scalars['String'];
  product: Product;
  productId: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Wishlist = {
  additional?: Maybe<Scalars['String']>;
  channel: Channel;
  channelId: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  itemOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  movedToCart?: Maybe<Scalars['Boolean']>;
  product: Product;
  productId: Scalars['ID'];
  shared?: Maybe<Scalars['Boolean']>;
  timeOfMoving?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Wishlist items. */
export type WishlistPaginator = {
  /** A list of Wishlist items. */
  data: Array<Wishlist>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AttributeOptionIds = {
  attributeId: Scalars['ID'];
  attributeOptionId: Scalars['ID'];
};

export type CreateInventorySourceInput = {
  city: Scalars['String'];
  code: Scalars['String'];
  contactEmail: Scalars['String'];
  contactFax?: InputMaybe<Scalars['String']>;
  contactName: Scalars['String'];
  contactNumber: Scalars['String'];
  country: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postcode: Scalars['String'];
  priority?: InputMaybe<Scalars['Int']>;
  state: Scalars['String'];
  status: Scalars['Boolean'];
  street: Scalars['String'];
};

export type CreateTaxCategoryInput = {
  code: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  taxrates: Array<Scalars['Int']>;
};

export type CreateTaxRateInput = {
  country: Scalars['String'];
  identifier: Scalars['String'];
  isZip?: InputMaybe<Scalars['Int']>;
  state: Scalars['String'];
  taxRate: Scalars['Float'];
  zipCode?: InputMaybe<Scalars['String']>;
  zipFrom?: InputMaybe<Scalars['String']>;
  zipTo?: InputMaybe<Scalars['String']>;
};

export type UserActivityType = {
  commentLikes?: Maybe<Array<Maybe<CommentLike>>>;
  productId?: Maybe<Scalars['ID']>;
};

export type BreadcrumbsFragmentFragment = { name?: string | null, slug?: string | null, urlPath?: string | null };

export type CategoryFieldsFragmentFragment = { id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null };

export type PaginatorFieldsFragmentFragment = { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number };

export type ProductFlatFragmentFragment = { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null };

export type AddItemToCartMutationVariables = Exact<{
  input: AddItemToCartInput;
}>;


export type AddItemToCartMutation = { addItemToCart?: { status?: boolean | null, message?: string | null, cart?: { isGuest?: boolean | null } | null } | null };

export type RemoveCartItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveCartItemMutation = { removeCartItem?: { status?: boolean | null, message?: string | null } | null };

export type CreateReviewMutationVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReviewMutation = { createReview?: { success?: string | null, review?: { id: string, productId: string } | null } | null };

export type LikeReviewMutationVariables = Exact<{
  commentId?: InputMaybe<Scalars['ID']>;
}>;


export type LikeReviewMutation = { LikeReview?: { status?: boolean | null, message?: string | null, review?: { likes?: number | null, id: string } | null } | null };

export type CustomerLoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type CustomerLoginMutation = { customerLogin?: { status?: boolean | null, success?: string | null, accessToken?: string | null, tokenType?: string | null, expiresIn?: number | null, customer?: { id: string, firstName: string, lastName: string, name?: string | null, gender?: string | null, dateOfBirth?: string | null, email: string, phone?: string | null, apiToken?: string | null, addresses?: Array<{ id: string, customerId: number, companyName?: string | null, firstName: string, lastName: string, email?: string | null, address1: string, address2?: string | null, country: string, state: string, city: string, postcode: string, vatId?: string | null, phone: string } | null> | null } | null } | null };

export type CustomerRegisterMutationVariables = Exact<{
  input: CreateRegisterInput;
}>;


export type CustomerRegisterMutation = { customerRegister?: { status?: boolean | null, success?: string | null } | null };

export type NewsletterSubscriberMutationVariables = Exact<{
  input: SubscriberInput;
}>;


export type NewsletterSubscriberMutation = { subscribe?: { id: string } | null };

export type AddToWishlistMutationVariables = Exact<{
  input: AddToWishlistInput;
}>;


export type AddToWishlistMutation = { addToWishlist?: { wishlist?: Array<{ product: { productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null } } | null> | null } | null };

export type RemoveFromWishlistMutationVariables = Exact<{
  input: AddToWishlistInput;
}>;


export type RemoveFromWishlistMutation = { removeFromWishlist?: { wishlist?: Array<{ product: { productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null } } | null> | null } | null };

export type UserActivityQueryVariables = Exact<{
  input?: InputMaybe<UserActivityinput>;
}>;


export type UserActivityQuery = { userActivity?: { productId?: string | null, commentLikes?: Array<{ id?: number | null, reviewId?: number | null } | null> | null } | null };

export type CartDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type CartDetailQuery = { cartDetail?: { id: string, itemsCount?: number | null, itemsQty?: number | null, globalCurrencyCode?: string | null, grandTotal?: number | null, baseGrandTotal?: number | null, subTotal?: number | null, discountAmount?: number | null, baseTaxTotal?: number | null, allItems?: Array<{ cartId: string, id: string, quantity: number, total: number, basePrice: number, discountPercent: number, discountAmount: number, productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null }> | null } | null };

export type CategoriesQueryVariables = Exact<{
  input?: InputMaybe<FilterCategoryListInput>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type CategoriesQuery = { categories?: { data: Array<{ id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null, children?: Array<{ id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null, children?: Array<{ id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null }> | null }> | null }> } | null };

export type CategoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CategoryQuery = { category?: { categoryProductMaxPrice?: number | null, count?: number | null, id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null, children?: Array<{ id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null }> | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null, filterableAttributes?: Array<{ id: string, code: string, adminName: string, options?: Array<{ id: string, adminName: string }> | null }> | null } | null };

export type ProductsQueryVariables = Exact<{
  input?: InputMaybe<FilterProductListingInput>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsQuery = { getProductListing?: { data: Array<{ id: string, productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null, inventories?: Array<{ qty: number }> | null, categories?: Array<{ name: string, slug: string, urlPath?: string | null }> | null, attributeValues?: Array<{ id: string, textValue?: string | null }> | null, configutableData?: { attributes?: Array<{ id: string, code: string }> | null } | null }> } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { accountInfo?: { status?: boolean | null, customer?: { id: string, firstName: string, lastName: string, email: string, phone?: string | null, isVerified?: boolean | null, subscribedToNewsLetter?: boolean | null } | null } | null };

export type VelocityMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type VelocityMetaDataQuery = { metaData?: { homePageContent?: string | null, advertisement?: Array<string | null> | null, logo?: string | null, homePageCategories?: Array<{ id: string, name: string, slug: string, urlPath?: string | null, productCount?: number | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null> | null } | null };

export type ProductQueryVariables = Exact<{
  onlyLink?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type ProductQuery = { product?: { id: string, type: string, sku: string, productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null, parent?: { variants?: Array<{ id: string, sku: string, productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null } | null> | null } | null, relatedProducts?: Array<{ productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null }> | null, attributeValues?: Array<{ id: string, textValue?: string | null, booleanValue?: boolean | null, integerValue?: number | null, floatValue?: number | null, dateTimeValue?: string | null, dateValue?: string | null, value?: string | null, attribute: { code: string, adminName: string, isVisibleOnFront?: boolean | null } }> | null, categories?: Array<{ productCount?: number | null, count?: number | null, id: string, name: string, slug: string, urlPath?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null }> | null, inventories?: Array<{ id: string, qty: number }> | null, images?: Array<{ id: string, type?: string | null, path: string, url: string }> | null, cacheGalleryImages?: Array<{ largeImageUrl?: string | null } | null> | null } | null };

export type GetProductListingQueryVariables = Exact<{
  input?: InputMaybe<FilterProductListingInput>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetProductListingQuery = { getProductListing?: { paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number }, data: Array<{ id: string, productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null, inventories?: Array<{ qty: number }> | null, categories?: Array<{ name: string, slug: string, urlPath?: string | null }> | null }> } | null };

export type ReviewsListQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReviewsOrder>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
}>;


export type ReviewsListQuery = { reviewsList?: { data: Array<{ id: string, title?: string | null, rating: number, comment?: string | null, status?: string | null, customerName?: string | null, likes?: number | null, createdAt?: any | null, productId: string, initials?: string | null, userLike?: boolean | null }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } | null };

export type ReviewsInfoQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']>;
}>;


export type ReviewsInfoQuery = { reviewsInfo?: { averageRating?: number | null, starsMap?: Array<{ rating?: number | null, count?: number | null } | null> | null } | null };

export type SearchProductQueryVariables = Exact<{
  input?: InputMaybe<SearchProductInput>;
  locale?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type SearchProductQuery = { searchProduct?: { __typename: 'ProductPaginator', data: Array<{ __typename: 'Product', productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null, categories?: Array<{ __typename: 'Category', name: string, slug: string, id: string }> | null }> } | null };

export type WishlistQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type WishlistQuery = { wishlist?: { data: Array<{ product: { productFlat?: { id: string, createdAt?: string | null, name?: string | null, urlKey?: string | null, price?: number | null, specialPrice?: number | null, thumbnail?: string | null, reviewsCount?: number | null, averageRating?: number | null, new?: boolean | null, featured?: boolean | null, status?: boolean | null, description?: string | null, minPrice?: number | null, qty?: number | null, mainCategory?: { name: string, slug: string, id: string, path?: string | null, breadcrumbs?: Array<{ name?: string | null, slug?: string | null, urlPath?: string | null } | null> | null } | null } | null } }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } | null };

export const CategoryFieldsFragmentFragmentDoc = gql`
    fragment categoryFieldsFragment on Category {
  id
  name
  slug
  urlPath
  metaTitle
  metaDescription
  metaKeywords
  path @client
}
    `;
export const PaginatorFieldsFragmentFragmentDoc = gql`
    fragment paginatorFieldsFragment on PaginatorInfo {
  count
  currentPage
  firstItem
  hasMorePages
  lastItem
  lastPage
  perPage
  total
}
    `;
export const BreadcrumbsFragmentFragmentDoc = gql`
    fragment breadcrumbsFragment on CategoryBreadcrumbs {
  name
  slug
  urlPath
}
    `;
export const ProductFlatFragmentFragmentDoc = gql`
    fragment productFlatFragment on ProductFlat {
  id
  createdAt
  name
  urlKey
  price
  specialPrice
  thumbnail
  reviewsCount
  averageRating
  new
  featured
  status
  description
  minPrice
  qty @client
  mainCategory @client {
    name
    slug
    id
    path
    breadcrumbs {
      ...breadcrumbsFragment
    }
  }
}
    ${BreadcrumbsFragmentFragmentDoc}`;
export const AddItemToCartDocument = gql`
    mutation addItemToCart($input: AddItemToCartInput!) {
  addItemToCart(input: $input) {
    status
    message
    cart {
      isGuest
    }
  }
}
    `;
export type AddItemToCartMutationFn = Apollo.MutationFunction<AddItemToCartMutation, AddItemToCartMutationVariables>;

/**
 * __useAddItemToCartMutation__
 *
 * To run a mutation, you first call `useAddItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToCartMutation, { data, loading, error }] = useAddItemToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddItemToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddItemToCartMutation, AddItemToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, options);
      }
export type AddItemToCartMutationHookResult = ReturnType<typeof useAddItemToCartMutation>;
export type AddItemToCartMutationResult = Apollo.MutationResult<AddItemToCartMutation>;
export type AddItemToCartMutationOptions = Apollo.BaseMutationOptions<AddItemToCartMutation, AddItemToCartMutationVariables>;
export const RemoveCartItemDocument = gql`
    mutation removeCartItem($id: ID!) {
  removeCartItem(id: $id) {
    status
    message
  }
}
    `;
export type RemoveCartItemMutationFn = Apollo.MutationFunction<RemoveCartItemMutation, RemoveCartItemMutationVariables>;

/**
 * __useRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemMutation, { data, loading, error }] = useRemoveCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCartItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartItemMutation, RemoveCartItemMutationVariables>(RemoveCartItemDocument, options);
      }
export type RemoveCartItemMutationHookResult = ReturnType<typeof useRemoveCartItemMutation>;
export type RemoveCartItemMutationResult = Apollo.MutationResult<RemoveCartItemMutation>;
export type RemoveCartItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    review {
      id
      productId
    }
    success
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const LikeReviewDocument = gql`
    mutation LikeReview($commentId: ID) {
  LikeReview(commentId: $commentId) {
    status
    message
    review {
      likes
      id
    }
  }
}
    `;
export type LikeReviewMutationFn = Apollo.MutationFunction<LikeReviewMutation, LikeReviewMutationVariables>;

/**
 * __useLikeReviewMutation__
 *
 * To run a mutation, you first call `useLikeReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeReviewMutation, { data, loading, error }] = useLikeReviewMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useLikeReviewMutation(baseOptions?: Apollo.MutationHookOptions<LikeReviewMutation, LikeReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeReviewMutation, LikeReviewMutationVariables>(LikeReviewDocument, options);
      }
export type LikeReviewMutationHookResult = ReturnType<typeof useLikeReviewMutation>;
export type LikeReviewMutationResult = Apollo.MutationResult<LikeReviewMutation>;
export type LikeReviewMutationOptions = Apollo.BaseMutationOptions<LikeReviewMutation, LikeReviewMutationVariables>;
export const CustomerLoginDocument = gql`
    mutation customerLogin($input: LoginInput!) {
  customerLogin(input: $input) {
    status
    success
    accessToken
    tokenType
    expiresIn
    customer {
      id
      firstName
      lastName
      name
      gender
      dateOfBirth
      email
      phone
      apiToken
      addresses {
        id
        customerId
        companyName
        firstName
        lastName
        email
        address1
        address2
        country
        state
        city
        postcode
        vatId
        phone
      }
    }
  }
}
    `;
export type CustomerLoginMutationFn = Apollo.MutationFunction<CustomerLoginMutation, CustomerLoginMutationVariables>;

/**
 * __useCustomerLoginMutation__
 *
 * To run a mutation, you first call `useCustomerLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerLoginMutation, { data, loading, error }] = useCustomerLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerLoginMutation(baseOptions?: Apollo.MutationHookOptions<CustomerLoginMutation, CustomerLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerLoginMutation, CustomerLoginMutationVariables>(CustomerLoginDocument, options);
      }
export type CustomerLoginMutationHookResult = ReturnType<typeof useCustomerLoginMutation>;
export type CustomerLoginMutationResult = Apollo.MutationResult<CustomerLoginMutation>;
export type CustomerLoginMutationOptions = Apollo.BaseMutationOptions<CustomerLoginMutation, CustomerLoginMutationVariables>;
export const CustomerRegisterDocument = gql`
    mutation customerRegister($input: CreateRegisterInput!) {
  customerRegister(input: $input) {
    status
    success
  }
}
    `;
export type CustomerRegisterMutationFn = Apollo.MutationFunction<CustomerRegisterMutation, CustomerRegisterMutationVariables>;

/**
 * __useCustomerRegisterMutation__
 *
 * To run a mutation, you first call `useCustomerRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerRegisterMutation, { data, loading, error }] = useCustomerRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerRegisterMutation(baseOptions?: Apollo.MutationHookOptions<CustomerRegisterMutation, CustomerRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerRegisterMutation, CustomerRegisterMutationVariables>(CustomerRegisterDocument, options);
      }
export type CustomerRegisterMutationHookResult = ReturnType<typeof useCustomerRegisterMutation>;
export type CustomerRegisterMutationResult = Apollo.MutationResult<CustomerRegisterMutation>;
export type CustomerRegisterMutationOptions = Apollo.BaseMutationOptions<CustomerRegisterMutation, CustomerRegisterMutationVariables>;
export const NewsletterSubscriberDocument = gql`
    mutation newsletterSubscriber($input: SubscriberInput!) {
  subscribe(input: $input) {
    id
  }
}
    `;
export type NewsletterSubscriberMutationFn = Apollo.MutationFunction<NewsletterSubscriberMutation, NewsletterSubscriberMutationVariables>;

/**
 * __useNewsletterSubscriberMutation__
 *
 * To run a mutation, you first call `useNewsletterSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewsletterSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newsletterSubscriberMutation, { data, loading, error }] = useNewsletterSubscriberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNewsletterSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<NewsletterSubscriberMutation, NewsletterSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewsletterSubscriberMutation, NewsletterSubscriberMutationVariables>(NewsletterSubscriberDocument, options);
      }
export type NewsletterSubscriberMutationHookResult = ReturnType<typeof useNewsletterSubscriberMutation>;
export type NewsletterSubscriberMutationResult = Apollo.MutationResult<NewsletterSubscriberMutation>;
export type NewsletterSubscriberMutationOptions = Apollo.BaseMutationOptions<NewsletterSubscriberMutation, NewsletterSubscriberMutationVariables>;
export const AddToWishlistDocument = gql`
    mutation addToWishlist($input: AddToWishlistInput!) {
  addToWishlist(input: $input) {
    wishlist {
      product {
        productFlat {
          ...productFlatFragment
        }
      }
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}`;
export type AddToWishlistMutationFn = Apollo.MutationFunction<AddToWishlistMutation, AddToWishlistMutationVariables>;

/**
 * __useAddToWishlistMutation__
 *
 * To run a mutation, you first call `useAddToWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToWishlistMutation, { data, loading, error }] = useAddToWishlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToWishlistMutation(baseOptions?: Apollo.MutationHookOptions<AddToWishlistMutation, AddToWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToWishlistMutation, AddToWishlistMutationVariables>(AddToWishlistDocument, options);
      }
export type AddToWishlistMutationHookResult = ReturnType<typeof useAddToWishlistMutation>;
export type AddToWishlistMutationResult = Apollo.MutationResult<AddToWishlistMutation>;
export type AddToWishlistMutationOptions = Apollo.BaseMutationOptions<AddToWishlistMutation, AddToWishlistMutationVariables>;
export const RemoveFromWishlistDocument = gql`
    mutation removeFromWishlist($input: AddToWishlistInput!) {
  removeFromWishlist(input: $input) {
    wishlist {
      product {
        productFlat {
          ...productFlatFragment
        }
      }
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}`;
export type RemoveFromWishlistMutationFn = Apollo.MutationFunction<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>;

/**
 * __useRemoveFromWishlistMutation__
 *
 * To run a mutation, you first call `useRemoveFromWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromWishlistMutation, { data, loading, error }] = useRemoveFromWishlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveFromWishlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>(RemoveFromWishlistDocument, options);
      }
export type RemoveFromWishlistMutationHookResult = ReturnType<typeof useRemoveFromWishlistMutation>;
export type RemoveFromWishlistMutationResult = Apollo.MutationResult<RemoveFromWishlistMutation>;
export type RemoveFromWishlistMutationOptions = Apollo.BaseMutationOptions<RemoveFromWishlistMutation, RemoveFromWishlistMutationVariables>;
export const UserActivityDocument = gql`
    query userActivity($input: UserActivityinput) {
  userActivity(input: $input) {
    productId @client
    commentLikes {
      id
      reviewId
    }
  }
}
    `;

/**
 * __useUserActivityQuery__
 *
 * To run a query within a React component, call `useUserActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserActivityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserActivityQuery(baseOptions?: Apollo.QueryHookOptions<UserActivityQuery, UserActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserActivityQuery, UserActivityQueryVariables>(UserActivityDocument, options);
      }
export function useUserActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserActivityQuery, UserActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserActivityQuery, UserActivityQueryVariables>(UserActivityDocument, options);
        }
export type UserActivityQueryHookResult = ReturnType<typeof useUserActivityQuery>;
export type UserActivityLazyQueryHookResult = ReturnType<typeof useUserActivityLazyQuery>;
export type UserActivityQueryResult = Apollo.QueryResult<UserActivityQuery, UserActivityQueryVariables>;
export const CartDetailDocument = gql`
    query cartDetail {
  cartDetail {
    id
    itemsCount
    itemsQty
    globalCurrencyCode
    grandTotal
    baseGrandTotal
    subTotal
    discountAmount
    baseTaxTotal
    allItems {
      cartId
      id
      quantity
      total
      basePrice
      discountPercent
      discountAmount
      productFlat {
        ...productFlatFragment
      }
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}`;

/**
 * __useCartDetailQuery__
 *
 * To run a query within a React component, call `useCartDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartDetailQuery(baseOptions?: Apollo.QueryHookOptions<CartDetailQuery, CartDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartDetailQuery, CartDetailQueryVariables>(CartDetailDocument, options);
      }
export function useCartDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartDetailQuery, CartDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartDetailQuery, CartDetailQueryVariables>(CartDetailDocument, options);
        }
export type CartDetailQueryHookResult = ReturnType<typeof useCartDetailQuery>;
export type CartDetailLazyQueryHookResult = ReturnType<typeof useCartDetailLazyQuery>;
export type CartDetailQueryResult = Apollo.QueryResult<CartDetailQuery, CartDetailQueryVariables>;
export const CategoriesDocument = gql`
    query categories($input: FilterCategoryListInput = {parent: null}, $first: Int = 10, $page: Int) {
  categories(input: $input, first: $first, page: $page) {
    data {
      ...categoryFieldsFragment
      children {
        ...categoryFieldsFragment
        children {
          ...categoryFieldsFragment
        }
      }
    }
  }
}
    ${CategoryFieldsFragmentFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query category($id: ID) {
  category(id: $id) {
    ...categoryFieldsFragment
    categoryProductMaxPrice
    count
    children {
      ...categoryFieldsFragment
    }
    breadcrumbs {
      ...breadcrumbsFragment
    }
    filterableAttributes {
      id
      code
      adminName
      options {
        id
        adminName
      }
    }
  }
}
    ${CategoryFieldsFragmentFragmentDoc}
${BreadcrumbsFragmentFragmentDoc}`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const ProductsDocument = gql`
    query Products($input: FilterProductListingInput, $first: Int = 10, $page: Int = 1) {
  getProductListing(input: $input, first: $first, page: $page) {
    data {
      id
      productFlat(locale: "en") {
        ...productFlatFragment
      }
      inventories {
        qty
      }
      categories {
        name
        slug
        urlPath
      }
      attributeValues {
        id
        textValue
      }
      configutableData {
        attributes {
          id
          code
        }
      }
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const MeDocument = gql`
    query me {
  accountInfo {
    status
    customer {
      id
      firstName
      lastName
      email
      phone
      isVerified
      subscribedToNewsLetter
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const VelocityMetaDataDocument = gql`
    query velocityMetaData {
  metaData(id: 1) {
    homePageContent
    advertisement
    logo
    homePageCategories {
      id
      name
      slug
      urlPath
      productCount
      breadcrumbs {
        name
        slug
        urlPath
      }
    }
  }
}
    `;

/**
 * __useVelocityMetaDataQuery__
 *
 * To run a query within a React component, call `useVelocityMetaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useVelocityMetaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVelocityMetaDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useVelocityMetaDataQuery(baseOptions?: Apollo.QueryHookOptions<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>(VelocityMetaDataDocument, options);
      }
export function useVelocityMetaDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>(VelocityMetaDataDocument, options);
        }
export type VelocityMetaDataQueryHookResult = ReturnType<typeof useVelocityMetaDataQuery>;
export type VelocityMetaDataLazyQueryHookResult = ReturnType<typeof useVelocityMetaDataLazyQuery>;
export type VelocityMetaDataQueryResult = Apollo.QueryResult<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>;
export const ProductDocument = gql`
    query product($onlyLink: Boolean = false, $id: ID) {
  product(id: $id) {
    id
    type
    sku
    productFlat {
      ...productFlatFragment
    }
    parent {
      variants {
        id
        sku
        productFlat {
          ...productFlatFragment
        }
      }
    }
    relatedProducts {
      productFlat {
        ...productFlatFragment
      }
    }
    attributeValues {
      id
      textValue
      booleanValue
      integerValue
      floatValue
      dateTimeValue
      dateValue
      value @client
      attribute {
        code
        adminName
        isVisibleOnFront
      }
    }
    categories {
      ...categoryFieldsFragment
      productCount @skip(if: $onlyLink)
      count @skip(if: $onlyLink)
      breadcrumbs {
        ...breadcrumbsFragment
      }
    }
    inventories {
      id
      qty
    }
    images {
      id
      type
      path
      url
    }
    cacheGalleryImages {
      largeImageUrl
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}
${CategoryFieldsFragmentFragmentDoc}
${BreadcrumbsFragmentFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      onlyLink: // value for 'onlyLink'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const GetProductListingDocument = gql`
    query getProductListing($input: FilterProductListingInput, $first: Int = 10, $page: Int = 1) {
  getProductListing(input: $input, first: $first, page: $page) {
    paginatorInfo {
      ...paginatorFieldsFragment
    }
    data {
      id
      productFlat {
        ...productFlatFragment
      }
      inventories {
        qty
      }
      categories {
        name
        slug
        urlPath
      }
    }
  }
}
    ${PaginatorFieldsFragmentFragmentDoc}
${ProductFlatFragmentFragmentDoc}`;

/**
 * __useGetProductListingQuery__
 *
 * To run a query within a React component, call `useGetProductListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetProductListingQuery(baseOptions?: Apollo.QueryHookOptions<GetProductListingQuery, GetProductListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductListingQuery, GetProductListingQueryVariables>(GetProductListingDocument, options);
      }
export function useGetProductListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductListingQuery, GetProductListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductListingQuery, GetProductListingQueryVariables>(GetProductListingDocument, options);
        }
export type GetProductListingQueryHookResult = ReturnType<typeof useGetProductListingQuery>;
export type GetProductListingLazyQueryHookResult = ReturnType<typeof useGetProductListingLazyQuery>;
export type GetProductListingQueryResult = Apollo.QueryResult<GetProductListingQuery, GetProductListingQueryVariables>;
export const ReviewsListDocument = gql`
    query reviewsList($productId: Int, $order: ReviewsOrder, $first: Int = 5, $page: Int, $rating: Int) {
  reviewsList(
    input: {productId: $productId, order: $order, rating: $rating}
    first: $first
    page: $page
  ) {
    data {
      id
      title
      rating
      comment
      status
      customerName
      likes
      createdAt
      productId
      initials @client
      userLike @client
    }
    paginatorInfo {
      ...paginatorFieldsFragment
    }
  }
}
    ${PaginatorFieldsFragmentFragmentDoc}`;

/**
 * __useReviewsListQuery__
 *
 * To run a query within a React component, call `useReviewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsListQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useReviewsListQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsListQuery, ReviewsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsListQuery, ReviewsListQueryVariables>(ReviewsListDocument, options);
      }
export function useReviewsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsListQuery, ReviewsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsListQuery, ReviewsListQueryVariables>(ReviewsListDocument, options);
        }
export type ReviewsListQueryHookResult = ReturnType<typeof useReviewsListQuery>;
export type ReviewsListLazyQueryHookResult = ReturnType<typeof useReviewsListLazyQuery>;
export type ReviewsListQueryResult = Apollo.QueryResult<ReviewsListQuery, ReviewsListQueryVariables>;
export const ReviewsInfoDocument = gql`
    query reviewsInfo($productId: Int) {
  reviewsInfo(productId: $productId) {
    averageRating
    starsMap {
      rating
      count
    }
  }
}
    `;

/**
 * __useReviewsInfoQuery__
 *
 * To run a query within a React component, call `useReviewsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsInfoQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useReviewsInfoQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsInfoQuery, ReviewsInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsInfoQuery, ReviewsInfoQueryVariables>(ReviewsInfoDocument, options);
      }
export function useReviewsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsInfoQuery, ReviewsInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsInfoQuery, ReviewsInfoQueryVariables>(ReviewsInfoDocument, options);
        }
export type ReviewsInfoQueryHookResult = ReturnType<typeof useReviewsInfoQuery>;
export type ReviewsInfoLazyQueryHookResult = ReturnType<typeof useReviewsInfoLazyQuery>;
export type ReviewsInfoQueryResult = Apollo.QueryResult<ReviewsInfoQuery, ReviewsInfoQueryVariables>;
export const SearchProductDocument = gql`
    query searchProduct($input: SearchProductInput, $locale: String = "en", $first: Int = 5, $page: Int = 1) {
  searchProduct(input: $input, first: $first, page: $page) {
    data {
      productFlat(locale: $locale) {
        ...productFlatFragment
      }
      categories {
        name
        slug
        id
        __typename
      }
      __typename
    }
    __typename
  }
}
    ${ProductFlatFragmentFragmentDoc}`;

/**
 * __useSearchProductQuery__
 *
 * To run a query within a React component, call `useSearchProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchProductQuery(baseOptions?: Apollo.QueryHookOptions<SearchProductQuery, SearchProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProductQuery, SearchProductQueryVariables>(SearchProductDocument, options);
      }
export function useSearchProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductQuery, SearchProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProductQuery, SearchProductQueryVariables>(SearchProductDocument, options);
        }
export type SearchProductQueryHookResult = ReturnType<typeof useSearchProductQuery>;
export type SearchProductLazyQueryHookResult = ReturnType<typeof useSearchProductLazyQuery>;
export type SearchProductQueryResult = Apollo.QueryResult<SearchProductQuery, SearchProductQueryVariables>;
export const WishlistDocument = gql`
    query wishlist($first: Int = 10, $page: Int = 1) {
  wishlist(first: $first, page: $page) {
    data {
      product {
        productFlat {
          ...productFlatFragment
        }
      }
    }
    paginatorInfo {
      ...paginatorFieldsFragment
    }
  }
}
    ${ProductFlatFragmentFragmentDoc}
${PaginatorFieldsFragmentFragmentDoc}`;

/**
 * __useWishlistQuery__
 *
 * To run a query within a React component, call `useWishlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishlistQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useWishlistQuery(baseOptions?: Apollo.QueryHookOptions<WishlistQuery, WishlistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WishlistQuery, WishlistQueryVariables>(WishlistDocument, options);
      }
export function useWishlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WishlistQuery, WishlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WishlistQuery, WishlistQueryVariables>(WishlistDocument, options);
        }
export type WishlistQueryHookResult = ReturnType<typeof useWishlistQuery>;
export type WishlistLazyQueryHookResult = ReturnType<typeof useWishlistLazyQuery>;
export type WishlistQueryResult = Apollo.QueryResult<WishlistQuery, WishlistQueryVariables>;