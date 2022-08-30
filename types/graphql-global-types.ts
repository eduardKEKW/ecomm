/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SortValues {
  Count = "Count",
  Discount = "Discount",
  Expensive = "Expensive",
  List = "List",
  Most = "Most",
  Newest = "Newest",
  Popular = "Popular",
  Reviews = "Reviews",
}

export interface AddItemToCartInput {
  isBuyNow?: boolean | null;
  productId: string;
  quantity: number;
  selectedConfigurableOption?: number | null;
  superAttribute?: ConfigurableProductInput[] | null;
  qty?: GroupedProductInput[] | null;
  links?: number[] | null;
  bundleOptions?: BundledOptionsInput[] | null;
  booking?: BookingProductInput | null;
}

export interface AddToWishlistInput {
  productId: string;
}

export interface BookingProductInput {
  date: string;
  slot: BookingSlotInput;
  qty?: EventBookingInput[] | null;
  note?: string | null;
}

export interface BookingSlotInput {
  from?: number | null;
  to?: number | null;
}

export interface BundledOptionsInput {
  bundleOptionId: number;
  bundleOptionProductId?: number[] | null;
  qty?: number | null;
}

export interface ConfigurableProductInput {
  attributeId: number;
  attributeOptionId: number;
}

export interface EventBookingInput {
  ticketId: number;
  quantity: number;
}

export interface FilterCategoryListInput {
  id?: number | null;
  slug?: string | null;
  name?: string | null;
  status?: boolean | null;
  position?: number | null;
  parent?: number | null;
}

export interface FilterProductListingInput {
  categoryId?: number | null;
  search?: string | null;
  name?: string | null;
  url_key?: string | null;
  sort?: SortValues | null;
  price?: PriceRange | null;
  reviews?: number | null;
  attributes?: (FilterableAttributes | null)[] | null;
}

export interface FilterableAttributes {
  code: string;
  values?: (string | null)[] | null;
}

export interface GroupedProductInput {
  productId: number;
  quantity: number;
}

export interface PriceRange {
  min?: number | null;
  max?: number | null;
}

export interface SearchProductInput {
  term?: string | null;
}

export interface SubscriberInput {
  email: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
