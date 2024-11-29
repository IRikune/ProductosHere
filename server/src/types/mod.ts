export interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  directions: string[]
  contracts: Contract[]
  orders: Order[]
}

export interface Contract {
  id: string
  details: string
  amount: number
  status: string
}

export interface Product {
  id: string
  producer: "AVON" | "ESIKA" | "LBEL"
  name: string
  category: string
  aproxPrice: number
}

export interface Order {
  id: string
  series: string
  createdAt: string
  expectedDate: string
  expectedProducts: Product[]
  expectedAmount: number
  deliveredDate?: string
  deliveredProducts?: Product[]
  deliveredAmount?: number
  products: Product[]
  status: "pending" | "delivered" | "cancelled"
}
