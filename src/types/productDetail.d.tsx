/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: string
  site_id: string
  title: string
  seller_id: number
  category_id: string
  official_store_id: any
  price: number
  base_price: number
  original_price: any
  currency_id: string
  initial_quantity: number
  sale_terms: SaleTerm[]
  buying_mode: string
  listing_type_id: string
  condition: string
  permalink: string
  thumbnail_id: string
  thumbnail: string
  pictures: Picture[]
  video_id: any
  descriptions: any[]
  accepts_mercadopago: boolean
  non_mercado_pago_payment_methods: any[]
  shipping: Shipping
  international_delivery_mode: string
  seller_address: SellerAddress
  seller_contact: any
  location: Location
  coverage_areas: any[]
  attributes: Attribute[]
  listing_source: string
  variations: Variation[]
  status: string
  sub_status: any[]
  tags: string[]
  warranty: string
  catalog_product_id: any
  domain_id: string
  parent_item_id: any
  deal_ids: any[]
  automatic_relist: boolean
  date_created: string
  last_updated: string
  health: number
  catalog_listing: boolean
}

export interface SaleTerm {
  id: string
  name: string
  value_id?: string
  value_name: string
  value_struct?: ValueStruct
  values: Value[]
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
}

export interface Struct {
  number: number
  unit: string
}

export interface Picture {
  id: string
  url: string
  secure_url: string
  size: string
  max_size: string
  quality: string
}

export interface Shipping {
  mode: string
  methods: any[]
  tags: string[]
  dimensions: any
  local_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  store_pick_up: boolean
}

export interface SellerAddress {
  city: City
  state: State
  country: Country
  search_location: SearchLocation
  id: number
}

export interface City {
  name: string
}

export interface State {
  id: string
  name: string
}

export interface Country {
  id: string
  name: string
}

export interface SearchLocation {
  neighborhood: Neighborhood
  city: City2
  state: State2
}

export interface Neighborhood {
  id: string
  name: string
}

export interface City2 {
  id: string
  name: string
}

export interface State2 {
  id: string
  name: string
}

export interface Location {}

export interface Attribute {
  id: string
  name: string
  value_id?: string
  value_name: string
  values: Value2[]
  value_type: string
}

export interface Value2 {
  id?: string
  name: string
  struct: any
}

export interface Variation {
  id: number
  price: number
  attribute_combinations: AttributeCombination[]
  sale_terms: any[]
  picture_ids: string[]
  catalog_product_id: any
}

export interface AttributeCombination {
  id: string
  name: string
  value_id?: string
  value_name: string
  values: Value3[]
  value_type: string
}

export interface Value3 {
  id?: string
  name: string
  struct: any
}
