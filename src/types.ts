export type USER_TYPE = 'ADMIN' | 'USER' | 'AGENT' | 'SUPER_ADMIN';

/**
 * @interface UserInterface
 * Describes the attributes of users 
 */

 export type agentPayload = Pick<UserInterface, '_id' | 'name'  | 'username' | 'email' > & { type: 'AGENT' }

export interface UserInterface {
  name: string;
  username: string;
  email: string;
  _id?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  otp: number;
  type: USER_TYPE;
  token: string;
  phoneNumber: string;
  balance: number;
  agent: agentPayload;
  location: Location;
  status: string;
  bankInfo: withdrawalInfo
};

export type CreateOTPAccountPayload = { 
  username: string
  email?: string
  type: USER_TYPE
 } 

export type AccountStatus = 'ACTIVE' | 'BLOCKED' | 'SUSPENDED'

export type customerPayload = Pick<UserInterface, '_id' | 'name'  | 'username' | 'email' > & { type: 'USER' }

export type Location = {
  street: string;
  zip: string;
  state: string;
  lga: string;
  country: string;
}

export type withdrawalInfo = {
  bank: string
  accountNumber: number
}

export interface ReturnPayloadParam<T> {
  data?: T;
  error: boolean;
  message: string;
}

export type PLASTIC_TYPE = 'PET' | 'HDPE' | 'PPE';

export type PLASTIC_ORDER_STATUS = 'PENDING' | 'IN_PROGRESS' | 'PROCESSED' | 'CLAIMED' | 'CANCELED';

export interface PlasticInterface extends Document {
  type: string;
  weight: number;
  _id: string;
  readonly price: number;
  readonly customer: customerPayload
  transferredTo: customerPayload
  readonly agent: agentPayload
  status: PLASTIC_ORDER_STATUS
  createdAt?: string;
  updatedAt?: string;
}

export interface WithdrawalInterface extends Document {
  userId: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  status: "PENDING" | "APPROVED" | "CANCELED"
}

export interface PlasticTypeInterface extends Document {
  type: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  pricePerKg: number;
}

export type PLASTIC_OBJ = {
  type: string, 
  weight: number,
  customer: string,
  agent: string
}
