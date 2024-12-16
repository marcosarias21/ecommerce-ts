/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ArrayProductsDiscount {
 results: ProductsDiscount[]
}
export interface ProductsDiscount {
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
  official_store_name?: string
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: Shipping
  stop_time: string
  seller: Seller
  address: Address
  attributes: Attribute[]
  installments?: Installments
  winner_item_id: any
  catalog_listing: boolean
  discounts: any
  promotion_decorations: any
  promotions: any
  inventory_id?: string
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
  promotion_id?: string
  promotion_type?: string
  campaign_id?: string
  funding_mode?: string
  order_item_price?: number
  campaign_end_date?: string
  discount_meli_amount?: number
  experiment_id?: string
  variation?: string
  campaign_discount_percentage?: number
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
  value_name: string
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
  name: string
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


export interface IconNavItem {
  icon: JSX.Element
  textInfo: string
  button: boolean
}  

export type Categories = Categorie[]

export interface Categorie {
  id: string
  name: string
}




export interface Categorie {
  id: string
  name: string
  picture: string
  permalink: string
  total_items_in_this_category: number
  path_from_root: PathFromRoot[]
  children_categories: ChildrenCategory[]
  attribute_types: string
  settings: Settings
  channels_settings: ChannelsSetting[]
  meta_categ_id: any
  attributable: boolean
  date_created: string
}

export interface PathFromRoot {
  id: string
  name: string
}

export interface ChildrenCategory {
  id: string
  name: string
  total_items_in_this_category: number
}

export interface Settings {
  adult_content: boolean
  buying_allowed: boolean
  buying_modes: string[]
  catalog_domain: string
  coverage_areas: string
  currencies: string[]
  fragile: boolean
  immediate_payment: string
  item_conditions: string[]
  items_reviews_allowed: boolean
  listing_allowed: boolean
  max_description_length: number
  max_pictures_per_item: number
  max_pictures_per_item_var: number
  max_sub_title_length: number
  max_title_length: number
  max_variations_allowed: number
  maximum_price: any
  maximum_price_currency: string
  minimum_price: number
  minimum_price_currency: string
  mirror_category: any
  mirror_master_category: any
  mirror_slave_categories: any[]
  price: string
  reservation_allowed: string
  restrictions: any[]
  rounded_address: boolean
  seller_contact: string
  shipping_options: string[]
  shipping_profile: string
  show_contact_information: boolean
  simple_shipping: string
  stock: string
  sub_vertical: string
  subscribable: boolean
  tags: any[]
  vertical: string
  vip_subdomain: string
  buyer_protection_programs: string[]
  status: string
}

export interface ChannelsSetting {
  channel: string
  settings: Settings2
}

export interface Settings2 {
  minimum_price?: number
  status?: string
  buying_modes?: string[]
  immediate_payment?: string
}





