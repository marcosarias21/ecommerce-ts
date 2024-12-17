/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CategorieObject {
  site_id: string
  country_default_time_zone: string
  paging: Paging
  results: Result[]
  sort: Sort
  available_sorts: AvailableSort[]
  filters: Filter[]
  available_filters: AvailableFilter[]
  pdp_tracking: PdpTracking
  user_context: any
}

export interface Paging {
  total: number
  primary_results: number
  offset: number
  limit: number
}

export interface Result {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id?: string
  listing_type_id: string
  sanitized_title: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price?: number
  sale_price: SalePrice
  available_quantity: number
  official_store_id?: number
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: Shipping
  stop_time: string
  seller: Seller
  address: Address
  attributes: Attribute[]
  installments: Installments
  winner_item_id: any
  catalog_listing: boolean
  discounts: any
  promotion_decorations: any
  promotions: any
  inventory_id?: string
  official_store_name?: string
  variation_id?: string
  variation_filters?: string[]
  variations_data?: VariationsData
}

export interface SalePrice {
  price_id: string
  amount: number
  conditions: Conditions
  currency_id: string
  exchange_rate: any
  payment_method_prices: any[]
  payment_method_type: string
  regular_amount?: number
  type: string
  metadata: Metadata
}

export interface Conditions {
  eligible: boolean
  context_restrictions: string[]
  start_time?: string
  end_time?: string
}

export interface Metadata {
  campaign_discount_percentage?: number
  campaign_end_date?: string
  campaign_id?: string
  discount_meli_amount?: number
  funding_mode?: string
  order_item_price?: number
  promotion_id?: string
  promotion_type?: string
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  benefits: any
  promise: any
  shipping_score: number
}

export interface Seller {
  id: number
  nickname: string
}

export interface Address {
  state_id: string
  state_name: string
  city_id?: string
  city_name: string
}

export interface Attribute {
  id: string
  name: string
  value_id?: string
  value_name?: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct?: ValueStruct
  values: Value[]
  source: number
  value_type: string
}

export interface ValueStruct {
  number: number
  unit: string
}

export interface Value {
  id?: string
  name?: string
  struct?: Struct
  source: number
}

export interface Struct {
  number: number
  unit: string
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
  metadata: Metadata2
}

export interface Metadata2 {
  meliplus_installments: boolean
  additional_bank_interest: boolean
}

export interface VariationsData {
  "184416721531"?: N184416721531
  "60801370520"?: N60801370520
  "179833453277"?: N179833453277
  "64346226200"?: N64346226200
  "181171062707"?: N181171062707
  "181171062705"?: N181171062705
  "178964942545"?: N178964942545
}

export interface N184416721531 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  user_product_id: string
  attributes: Attribute2[]
  attribute_combinations: AttributeCombination[]
}

export interface Attribute2 {
  id: string
  name: string
  value_name: string
  value_type: string
}

export interface AttributeCombination {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N60801370520 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  inventory_id: string
  user_product_id: string
  attributes: any[]
  attribute_combinations: AttributeCombination2[]
}

export interface AttributeCombination2 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N179833453277 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  inventory_id: string
  user_product_id: string
  attributes: Attribute3[]
  attribute_combinations: AttributeCombination3[]
}

export interface Attribute3 {
  id: string
  name: string
  value_name: string
  value_type: any
}

export interface AttributeCombination3 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N64346226200 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  inventory_id: string
  user_product_id: string
  attributes: any[]
  attribute_combinations: AttributeCombination4[]
}

export interface AttributeCombination4 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N181171062707 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  user_product_id: string
  attributes: Attribute4[]
  attribute_combinations: AttributeCombination5[]
}

export interface Attribute4 {
  id: string
  name: string
  value_name: string
  value_type: string
}

export interface AttributeCombination5 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N181171062705 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  user_product_id: string
  attributes: Attribute5[]
  attribute_combinations: AttributeCombination6[]
}

export interface Attribute5 {
  id: string
  name: string
  value_name: string
  value_type: string
}

export interface AttributeCombination6 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface N178964942545 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  price: number
  inventory_id: string
  user_product_id: string
  attributes: any[]
  attribute_combinations: AttributeCombination7[]
}

export interface AttributeCombination7 {
  id: string
  name: string
  value_id: any
  value_name: string
  value_struct: any
  values: any
}

export interface Sort {
  id: string
  name: string
}

export interface AvailableSort {
  id: string
  name: string
}

export interface Filter {
  id: string
  name: string
  type: string
  values: Value2[]
}

export interface Value2 {
  id: string
  name: string
  path_from_root: PathFromRoot[]
}

export interface PathFromRoot {
  id: string
  name: string
}

export interface AvailableFilter {
  id: string
  name: string
  type: string
  values: Value3[]
}

export interface Value3 {
  id: string
  name: string
  results: number
}

export interface PdpTracking {
  group: boolean
  product_info: ProductInfo[]
}

export interface ProductInfo {
  id: string
  score: number
  status: string
}
