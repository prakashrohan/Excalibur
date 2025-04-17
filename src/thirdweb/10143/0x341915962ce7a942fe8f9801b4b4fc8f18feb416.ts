import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"spender","type":"address"}>
}>;

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  spender: ...,
 * })
 * ],
 * });
 * ```
 */
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature: "event Approval(address indexed owner, address indexed spender, uint256 value)",
    filters,
  });
};
  

/**
 * Represents the filters for the "DelegateChanged" event.
 */
export type DelegateChangedEventFilters = Partial<{
  delegator: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"delegator","type":"address"}>
fromDelegate: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"}>
toDelegate: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}>
}>;

/**
 * Creates an event object for the DelegateChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { delegateChangedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  delegateChangedEvent({
 *  delegator: ...,
 *  fromDelegate: ...,
 *  toDelegate: ...,
 * })
 * ],
 * });
 * ```
 */
export function delegateChangedEvent(filters: DelegateChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
    filters,
  });
};
  

/**
 * Represents the filters for the "DelegateVotesChanged" event.
 */
export type DelegateVotesChangedEventFilters = Partial<{
  delegate: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"delegate","type":"address"}>
}>;

/**
 * Creates an event object for the DelegateVotesChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { delegateVotesChangedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  delegateVotesChangedEvent({
 *  delegate: ...,
 * })
 * ],
 * });
 * ```
 */
export function delegateVotesChangedEvent(filters: DelegateVotesChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)",
    filters,
  });
};
  



/**
 * Creates an event object for the EIP712DomainChanged event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { eIP712DomainChangedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  eIP712DomainChangedEvent()
 * ],
 * });
 * ```
 */
export function eIP712DomainChangedEvent() {
  return prepareEvent({
    signature: "event EIP712DomainChanged()",
  });
};
  



/**
 * Creates an event object for the FlatPlatformFeeUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { flatPlatformFeeUpdatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  flatPlatformFeeUpdatedEvent()
 * ],
 * });
 * ```
 */
export function flatPlatformFeeUpdatedEvent() {
  return prepareEvent({
    signature: "event FlatPlatformFeeUpdated(address platformFeeRecipient, uint256 flatFee)",
  });
};
  



/**
 * Creates an event object for the Initialized event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { initializedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  initializedEvent()
 * ],
 * });
 * ```
 */
export function initializedEvent() {
  return prepareEvent({
    signature: "event Initialized(uint8 version)",
  });
};
  

/**
 * Represents the filters for the "PlatformFeeInfoUpdated" event.
 */
export type PlatformFeeInfoUpdatedEventFilters = Partial<{
  platformFeeRecipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"platformFeeRecipient","type":"address"}>
}>;

/**
 * Creates an event object for the PlatformFeeInfoUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { platformFeeInfoUpdatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  platformFeeInfoUpdatedEvent({
 *  platformFeeRecipient: ...,
 * })
 * ],
 * });
 * ```
 */
export function platformFeeInfoUpdatedEvent(filters: PlatformFeeInfoUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)",
    filters,
  });
};
  



/**
 * Creates an event object for the PlatformFeeTypeUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { platformFeeTypeUpdatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  platformFeeTypeUpdatedEvent()
 * ],
 * });
 * ```
 */
export function platformFeeTypeUpdatedEvent() {
  return prepareEvent({
    signature: "event PlatformFeeTypeUpdated(uint8 feeType)",
  });
};
  

/**
 * Represents the filters for the "PrimarySaleRecipientUpdated" event.
 */
export type PrimarySaleRecipientUpdatedEventFilters = Partial<{
  recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
}>;

/**
 * Creates an event object for the PrimarySaleRecipientUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { primarySaleRecipientUpdatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  primarySaleRecipientUpdatedEvent({
 *  recipient: ...,
 * })
 * ],
 * });
 * ```
 */
export function primarySaleRecipientUpdatedEvent(filters: PrimarySaleRecipientUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PrimarySaleRecipientUpdated(address indexed recipient)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
previousAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"}>
newAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}>
}>;

/**
 * Creates an event object for the RoleAdminChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleAdminChangedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleAdminChangedEvent({
 *  role: ...,
 *  previousAdminRole: ...,
 *  newAdminRole: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleAdminChangedEvent(filters: RoleAdminChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleGranted" event.
 */
export type RoleGrantedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleGranted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleGrantedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleGrantedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleGrantedEvent(filters: RoleGrantedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleRevoked" event.
 */
export type RoleRevokedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleRevoked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleRevokedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleRevokedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleRevokedEvent(filters: RoleRevokedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TokensMinted" event.
 */
export type TokensMintedEventFilters = Partial<{
  mintedTo: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"}>
}>;

/**
 * Creates an event object for the TokensMinted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokensMintedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokensMintedEvent({
 *  mintedTo: ...,
 * })
 * ],
 * });
 * ```
 */
export function tokensMintedEvent(filters: TokensMintedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokensMinted(address indexed mintedTo, uint256 quantityMinted)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TokensMintedWithSignature" event.
 */
export type TokensMintedWithSignatureEventFilters = Partial<{
  signer: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"signer","type":"address"}>
mintedTo: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"}>
}>;

/**
 * Creates an event object for the TokensMintedWithSignature event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokensMintedWithSignatureEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokensMintedWithSignatureEvent({
 *  signer: ...,
 *  mintedTo: ...,
 * })
 * ],
 * });
 * ```
 */
export function tokensMintedWithSignatureEvent(filters: TokensMintedWithSignatureEventFilters = {}) {
  return prepareEvent({
    signature: "event TokensMintedWithSignature(address indexed signer, address indexed mintedTo, (address to, address primarySaleRecipient, uint256 quantity, uint256 price, address currency, uint128 validityStartTimestamp, uint128 validityEndTimestamp, bytes32 uid) mintRequest)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
}>;

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: "event Transfer(address indexed from, address indexed to, uint256 value)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "CLOCK_MODE" function on the contract.
 * @param options - The options for the CLOCK_MODE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { CLOCK_MODE } from "TODO";
 *
 * const result = await CLOCK_MODE();
 *
 * ```
 */
export async function CLOCK_MODE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4bf5d7e9",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "DEFAULT_ADMIN_ROLE" function on the contract.
 * @param options - The options for the DEFAULT_ADMIN_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DEFAULT_ADMIN_ROLE } from "TODO";
 *
 * const result = await DEFAULT_ADMIN_ROLE();
 *
 * ```
 */
export async function DEFAULT_ADMIN_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa217fddf",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "DEFAULT_FEE_RECIPIENT" function on the contract.
 * @param options - The options for the DEFAULT_FEE_RECIPIENT function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DEFAULT_FEE_RECIPIENT } from "TODO";
 *
 * const result = await DEFAULT_FEE_RECIPIENT();
 *
 * ```
 */
export async function DEFAULT_FEE_RECIPIENT(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x637102df",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "DOMAIN_SEPARATOR" function on the contract.
 * @param options - The options for the DOMAIN_SEPARATOR function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DOMAIN_SEPARATOR } from "TODO";
 *
 * const result = await DOMAIN_SEPARATOR();
 *
 * ```
 */
export async function DOMAIN_SEPARATOR(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3644e515",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "allowance" function.
 */
export type AllowanceParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
};

/**
 * Calls the "allowance" function on the contract.
 * @param options - The options for the allowance function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { allowance } from "TODO";
 *
 * const result = await allowance({
 *  owner: ...,
 *  spender: ...,
 * });
 *
 * ```
 */
export async function allowance(
  options: BaseTransactionOptions<AllowanceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xdd62ed3e",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner, options.spender]
  });
};


/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 *
 * const result = await balanceOf({
 *  account: ...,
 * });
 *
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x70a08231",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "checkpoints" function.
 */
export type CheckpointsParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
pos: AbiParameterToPrimitiveType<{"internalType":"uint32","name":"pos","type":"uint32"}>
};

/**
 * Calls the "checkpoints" function on the contract.
 * @param options - The options for the checkpoints function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { checkpoints } from "TODO";
 *
 * const result = await checkpoints({
 *  account: ...,
 *  pos: ...,
 * });
 *
 * ```
 */
export async function checkpoints(
  options: BaseTransactionOptions<CheckpointsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf1127ed8",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "uint32",
      "name": "pos",
      "type": "uint32"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "uint32",
          "name": "fromBlock",
          "type": "uint32"
        },
        {
          "internalType": "uint224",
          "name": "votes",
          "type": "uint224"
        }
      ],
      "internalType": "struct ERC20VotesUpgradeable.Checkpoint",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: [options.account, options.pos]
  });
};




/**
 * Calls the "clock" function on the contract.
 * @param options - The options for the clock function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { clock } from "TODO";
 *
 * const result = await clock();
 *
 * ```
 */
export async function clock(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91ddadf4",
  [],
  [
    {
      "internalType": "uint48",
      "name": "",
      "type": "uint48"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractType" function on the contract.
 * @param options - The options for the contractType function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractType } from "TODO";
 *
 * const result = await contractType();
 *
 * ```
 */
export async function contractType(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xcb2ef6f7",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractURI" function on the contract.
 * @param options - The options for the contractURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractURI } from "TODO";
 *
 * const result = await contractURI();
 *
 * ```
 */
export async function contractURI(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe8a3d485",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractVersion" function on the contract.
 * @param options - The options for the contractVersion function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractVersion } from "TODO";
 *
 * const result = await contractVersion();
 *
 * ```
 */
export async function contractVersion(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa0a8e460",
  [],
  [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "decimals" function on the contract.
 * @param options - The options for the decimals function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { decimals } from "TODO";
 *
 * const result = await decimals();
 *
 * ```
 */
export async function decimals(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x313ce567",
  [],
  [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "delegates" function.
 */
export type DelegatesParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "delegates" function on the contract.
 * @param options - The options for the delegates function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { delegates } from "TODO";
 *
 * const result = await delegates({
 *  account: ...,
 * });
 *
 * ```
 */
export async function delegates(
  options: BaseTransactionOptions<DelegatesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x587cde1e",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.account]
  });
};




/**
 * Calls the "eip712Domain" function on the contract.
 * @param options - The options for the eip712Domain function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { eip712Domain } from "TODO";
 *
 * const result = await eip712Domain();
 *
 * ```
 */
export async function eip712Domain(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x84b0196e",
  [],
  [
    {
      "internalType": "bytes1",
      "name": "fields",
      "type": "bytes1"
    },
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "version",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "chainId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "verifyingContract",
      "type": "address"
    },
    {
      "internalType": "bytes32",
      "name": "salt",
      "type": "bytes32"
    },
    {
      "internalType": "uint256[]",
      "name": "extensions",
      "type": "uint256[]"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getPastTotalSupply" function.
 */
export type GetPastTotalSupplyParams = {
  timepoint: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"timepoint","type":"uint256"}>
};

/**
 * Calls the "getPastTotalSupply" function on the contract.
 * @param options - The options for the getPastTotalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPastTotalSupply } from "TODO";
 *
 * const result = await getPastTotalSupply({
 *  timepoint: ...,
 * });
 *
 * ```
 */
export async function getPastTotalSupply(
  options: BaseTransactionOptions<GetPastTotalSupplyParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8e539e8c",
  [
    {
      "internalType": "uint256",
      "name": "timepoint",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.timepoint]
  });
};


/**
 * Represents the parameters for the "getPastVotes" function.
 */
export type GetPastVotesParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
timepoint: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"timepoint","type":"uint256"}>
};

/**
 * Calls the "getPastVotes" function on the contract.
 * @param options - The options for the getPastVotes function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPastVotes } from "TODO";
 *
 * const result = await getPastVotes({
 *  account: ...,
 *  timepoint: ...,
 * });
 *
 * ```
 */
export async function getPastVotes(
  options: BaseTransactionOptions<GetPastVotesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3a46b1a8",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "timepoint",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account, options.timepoint]
  });
};




/**
 * Calls the "getPlatformFeeInfo" function on the contract.
 * @param options - The options for the getPlatformFeeInfo function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPlatformFeeInfo } from "TODO";
 *
 * const result = await getPlatformFeeInfo();
 *
 * ```
 */
export async function getPlatformFeeInfo(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd45573f6",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint16",
      "name": "",
      "type": "uint16"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
};

/**
 * Calls the "getRoleAdmin" function on the contract.
 * @param options - The options for the getRoleAdmin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleAdmin } from "TODO";
 *
 * const result = await getRoleAdmin({
 *  role: ...,
 * });
 *
 * ```
 */
export async function getRoleAdmin(
  options: BaseTransactionOptions<GetRoleAdminParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x248a9ca3",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getRoleMember" function.
 */
export type GetRoleMemberParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"index","type":"uint256"}>
};

/**
 * Calls the "getRoleMember" function on the contract.
 * @param options - The options for the getRoleMember function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleMember } from "TODO";
 *
 * const result = await getRoleMember({
 *  role: ...,
 *  index: ...,
 * });
 *
 * ```
 */
export async function getRoleMember(
  options: BaseTransactionOptions<GetRoleMemberParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9010d07c",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "uint256",
      "name": "index",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.role, options.index]
  });
};


/**
 * Represents the parameters for the "getRoleMemberCount" function.
 */
export type GetRoleMemberCountParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
};

/**
 * Calls the "getRoleMemberCount" function on the contract.
 * @param options - The options for the getRoleMemberCount function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleMemberCount } from "TODO";
 *
 * const result = await getRoleMemberCount({
 *  role: ...,
 * });
 *
 * ```
 */
export async function getRoleMemberCount(
  options: BaseTransactionOptions<GetRoleMemberCountParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xca15c873",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getVotes" function.
 */
export type GetVotesParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "getVotes" function on the contract.
 * @param options - The options for the getVotes function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getVotes } from "TODO";
 *
 * const result = await getVotes({
 *  account: ...,
 * });
 *
 * ```
 */
export async function getVotes(
  options: BaseTransactionOptions<GetVotesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9ab24eb0",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "hasRole" function on the contract.
 * @param options - The options for the hasRole function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasRole } from "TODO";
 *
 * const result = await hasRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * ```
 */
export async function hasRole(
  options: BaseTransactionOptions<HasRoleParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91d14854",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "isTrustedForwarder" function.
 */
export type IsTrustedForwarderParams = {
  forwarder: AbiParameterToPrimitiveType<{"internalType":"address","name":"forwarder","type":"address"}>
};

/**
 * Calls the "isTrustedForwarder" function on the contract.
 * @param options - The options for the isTrustedForwarder function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isTrustedForwarder } from "TODO";
 *
 * const result = await isTrustedForwarder({
 *  forwarder: ...,
 * });
 *
 * ```
 */
export async function isTrustedForwarder(
  options: BaseTransactionOptions<IsTrustedForwarderParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x572b6c05",
  [
    {
      "internalType": "address",
      "name": "forwarder",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.forwarder]
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 *
 * const result = await name();
 *
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "nonces" function.
 */
export type NoncesParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
};

/**
 * Calls the "nonces" function on the contract.
 * @param options - The options for the nonces function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nonces } from "TODO";
 *
 * const result = await nonces({
 *  owner: ...,
 * });
 *
 * ```
 */
export async function nonces(
  options: BaseTransactionOptions<NoncesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7ecebe00",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner]
  });
};


/**
 * Represents the parameters for the "numCheckpoints" function.
 */
export type NumCheckpointsParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "numCheckpoints" function on the contract.
 * @param options - The options for the numCheckpoints function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { numCheckpoints } from "TODO";
 *
 * const result = await numCheckpoints({
 *  account: ...,
 * });
 *
 * ```
 */
export async function numCheckpoints(
  options: BaseTransactionOptions<NumCheckpointsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6fcfff45",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint32",
      "name": "",
      "type": "uint32"
    }
  ]
],
    params: [options.account]
  });
};




/**
 * Calls the "primarySaleRecipient" function on the contract.
 * @param options - The options for the primarySaleRecipient function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { primarySaleRecipient } from "TODO";
 *
 * const result = await primarySaleRecipient();
 *
 * ```
 */
export async function primarySaleRecipient(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x079fe40e",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 *
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 *
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};




/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 *
 * const result = await symbol();
 *
 * ```
 */
export async function symbol(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x95d89b41",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "totalSupply" function on the contract.
 * @param options - The options for the totalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalSupply } from "TODO";
 *
 * const result = await totalSupply();
 *
 * ```
 */
export async function totalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x18160ddd",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "verify" function.
 */
export type VerifyParams = {
  req: AbiParameterToPrimitiveType<{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"}>
signature: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_signature","type":"bytes"}>
};

/**
 * Calls the "verify" function on the contract.
 * @param options - The options for the verify function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { verify } from "TODO";
 *
 * const result = await verify({
 *  req: ...,
 *  signature: ...,
 * });
 *
 * ```
 */
export async function verify(
  options: BaseTransactionOptions<VerifyParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc1b606e2",
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "primarySaleRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "validityStartTimestamp",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "validityEndTimestamp",
          "type": "uint128"
        },
        {
          "internalType": "bytes32",
          "name": "uid",
          "type": "bytes32"
        }
      ],
      "internalType": "struct ITokenERC20.MintRequest",
      "name": "_req",
      "type": "tuple"
    },
    {
      "internalType": "bytes",
      "name": "_signature",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.req, options.signature]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 *
 * const transaction = approve({
 *  spender: ...,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function approve(
  options: BaseTransactionOptions<ApproveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x095ea7b3",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.amount]
  });
};


/**
 * Represents the parameters for the "burn" function.
 */
export type BurnParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "burn" function on the contract.
 * @param options - The options for the "burn" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burn } from "TODO";
 *
 * const transaction = burn({
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function burn(
  options: BaseTransactionOptions<BurnParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42966c68",
  [
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "burnFrom" function.
 */
export type BurnFromParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "burnFrom" function on the contract.
 * @param options - The options for the "burnFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burnFrom } from "TODO";
 *
 * const transaction = burnFrom({
 *  account: ...,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function burnFrom(
  options: BaseTransactionOptions<BurnFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x79cc6790",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.account, options.amount]
  });
};


/**
 * Represents the parameters for the "decreaseAllowance" function.
 */
export type DecreaseAllowanceParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
subtractedValue: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"subtractedValue","type":"uint256"}>
};

/**
 * Calls the "decreaseAllowance" function on the contract.
 * @param options - The options for the "decreaseAllowance" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { decreaseAllowance } from "TODO";
 *
 * const transaction = decreaseAllowance({
 *  spender: ...,
 *  subtractedValue: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function decreaseAllowance(
  options: BaseTransactionOptions<DecreaseAllowanceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa457c2d7",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "subtractedValue",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.subtractedValue]
  });
};


/**
 * Represents the parameters for the "delegate" function.
 */
export type DelegateParams = {
  delegatee: AbiParameterToPrimitiveType<{"internalType":"address","name":"delegatee","type":"address"}>
};

/**
 * Calls the "delegate" function on the contract.
 * @param options - The options for the "delegate" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { delegate } from "TODO";
 *
 * const transaction = delegate({
 *  delegatee: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function delegate(
  options: BaseTransactionOptions<DelegateParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x5c19a95c",
  [
    {
      "internalType": "address",
      "name": "delegatee",
      "type": "address"
    }
  ],
  []
],
    params: [options.delegatee]
  });
};


/**
 * Represents the parameters for the "delegateBySig" function.
 */
export type DelegateBySigParams = {
  delegatee: AbiParameterToPrimitiveType<{"internalType":"address","name":"delegatee","type":"address"}>
nonce: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"nonce","type":"uint256"}>
expiry: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"expiry","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "delegateBySig" function on the contract.
 * @param options - The options for the "delegateBySig" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { delegateBySig } from "TODO";
 *
 * const transaction = delegateBySig({
 *  delegatee: ...,
 *  nonce: ...,
 *  expiry: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function delegateBySig(
  options: BaseTransactionOptions<DelegateBySigParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xc3cda520",
  [
    {
      "internalType": "address",
      "name": "delegatee",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "nonce",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "expiry",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.delegatee, options.nonce, options.expiry, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "grantRole" function on the contract.
 * @param options - The options for the "grantRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantRole } from "TODO";
 *
 * const transaction = grantRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function grantRole(
  options: BaseTransactionOptions<GrantRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2f2ff15d",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "increaseAllowance" function.
 */
export type IncreaseAllowanceParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
addedValue: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"addedValue","type":"uint256"}>
};

/**
 * Calls the "increaseAllowance" function on the contract.
 * @param options - The options for the "increaseAllowance" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increaseAllowance } from "TODO";
 *
 * const transaction = increaseAllowance({
 *  spender: ...,
 *  addedValue: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function increaseAllowance(
  options: BaseTransactionOptions<IncreaseAllowanceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x39509351",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "addedValue",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.addedValue]
  });
};


/**
 * Represents the parameters for the "initialize" function.
 */
export type InitializeParams = {
  defaultAdmin: AbiParameterToPrimitiveType<{"internalType":"address","name":"_defaultAdmin","type":"address"}>
name: AbiParameterToPrimitiveType<{"internalType":"string","name":"_name","type":"string"}>
symbol: AbiParameterToPrimitiveType<{"internalType":"string","name":"_symbol","type":"string"}>
contractURI: AbiParameterToPrimitiveType<{"internalType":"string","name":"_contractURI","type":"string"}>
trustedForwarders: AbiParameterToPrimitiveType<{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"}>
primarySaleRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_primarySaleRecipient","type":"address"}>
platformFeeRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_platformFeeRecipient","type":"address"}>
platformFeeBps: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}>
};

/**
 * Calls the "initialize" function on the contract.
 * @param options - The options for the "initialize" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { initialize } from "TODO";
 *
 * const transaction = initialize({
 *  defaultAdmin: ...,
 *  name: ...,
 *  symbol: ...,
 *  contractURI: ...,
 *  trustedForwarders: ...,
 *  primarySaleRecipient: ...,
 *  platformFeeRecipient: ...,
 *  platformFeeBps: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function initialize(
  options: BaseTransactionOptions<InitializeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xdfad80a6",
  [
    {
      "internalType": "address",
      "name": "_defaultAdmin",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "_symbol",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "_contractURI",
      "type": "string"
    },
    {
      "internalType": "address[]",
      "name": "_trustedForwarders",
      "type": "address[]"
    },
    {
      "internalType": "address",
      "name": "_primarySaleRecipient",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_platformFeeRecipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_platformFeeBps",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.defaultAdmin, options.name, options.symbol, options.contractURI, options.trustedForwarders, options.primarySaleRecipient, options.platformFeeRecipient, options.platformFeeBps]
  });
};


/**
 * Represents the parameters for the "mintTo" function.
 */
export type MintToParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "mintTo" function on the contract.
 * @param options - The options for the "mintTo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mintTo } from "TODO";
 *
 * const transaction = mintTo({
 *  to: ...,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function mintTo(
  options: BaseTransactionOptions<MintToParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x449a52f8",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.to, options.amount]
  });
};


/**
 * Represents the parameters for the "mintWithSignature" function.
 */
export type MintWithSignatureParams = {
  req: AbiParameterToPrimitiveType<{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"}>
signature: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_signature","type":"bytes"}>
};

/**
 * Calls the "mintWithSignature" function on the contract.
 * @param options - The options for the "mintWithSignature" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mintWithSignature } from "TODO";
 *
 * const transaction = mintWithSignature({
 *  req: ...,
 *  signature: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function mintWithSignature(
  options: BaseTransactionOptions<MintWithSignatureParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x8f0fefbb",
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "primarySaleRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "validityStartTimestamp",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "validityEndTimestamp",
          "type": "uint128"
        },
        {
          "internalType": "bytes32",
          "name": "uid",
          "type": "bytes32"
        }
      ],
      "internalType": "struct ITokenERC20.MintRequest",
      "name": "_req",
      "type": "tuple"
    },
    {
      "internalType": "bytes",
      "name": "_signature",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.req, options.signature]
  });
};


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes[]","name":"data","type":"bytes[]"}>
};

/**
 * Calls the "multicall" function on the contract.
 * @param options - The options for the "multicall" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multicall } from "TODO";
 *
 * const transaction = multicall({
 *  data: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function multicall(
  options: BaseTransactionOptions<MulticallParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xac9650d8",
  [
    {
      "internalType": "bytes[]",
      "name": "data",
      "type": "bytes[]"
    }
  ],
  [
    {
      "internalType": "bytes[]",
      "name": "results",
      "type": "bytes[]"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "permit" function.
 */
export type PermitParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "permit" function on the contract.
 * @param options - The options for the "permit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { permit } from "TODO";
 *
 * const transaction = permit({
 *  owner: ...,
 *  spender: ...,
 *  value: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function permit(
  options: BaseTransactionOptions<PermitParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd505accf",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.owner, options.spender, options.value, options.deadline, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "renounceRole" function on the contract.
 * @param options - The options for the "renounceRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceRole } from "TODO";
 *
 * const transaction = renounceRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function renounceRole(
  options: BaseTransactionOptions<RenounceRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x36568abe",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "revokeRole" function on the contract.
 * @param options - The options for the "revokeRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeRole } from "TODO";
 *
 * const transaction = revokeRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function revokeRole(
  options: BaseTransactionOptions<RevokeRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd547741f",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "setContractURI" function.
 */
export type SetContractURIParams = {
  uri: AbiParameterToPrimitiveType<{"internalType":"string","name":"_uri","type":"string"}>
};

/**
 * Calls the "setContractURI" function on the contract.
 * @param options - The options for the "setContractURI" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setContractURI } from "TODO";
 *
 * const transaction = setContractURI({
 *  uri: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setContractURI(
  options: BaseTransactionOptions<SetContractURIParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x938e3d7b",
  [
    {
      "internalType": "string",
      "name": "_uri",
      "type": "string"
    }
  ],
  []
],
    params: [options.uri]
  });
};


/**
 * Represents the parameters for the "setPlatformFeeInfo" function.
 */
export type SetPlatformFeeInfoParams = {
  platformFeeRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_platformFeeRecipient","type":"address"}>
platformFeeBps: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}>
};

/**
 * Calls the "setPlatformFeeInfo" function on the contract.
 * @param options - The options for the "setPlatformFeeInfo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setPlatformFeeInfo } from "TODO";
 *
 * const transaction = setPlatformFeeInfo({
 *  platformFeeRecipient: ...,
 *  platformFeeBps: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setPlatformFeeInfo(
  options: BaseTransactionOptions<SetPlatformFeeInfoParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1e7ac488",
  [
    {
      "internalType": "address",
      "name": "_platformFeeRecipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_platformFeeBps",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.platformFeeRecipient, options.platformFeeBps]
  });
};


/**
 * Represents the parameters for the "setPrimarySaleRecipient" function.
 */
export type SetPrimarySaleRecipientParams = {
  saleRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_saleRecipient","type":"address"}>
};

/**
 * Calls the "setPrimarySaleRecipient" function on the contract.
 * @param options - The options for the "setPrimarySaleRecipient" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setPrimarySaleRecipient } from "TODO";
 *
 * const transaction = setPrimarySaleRecipient({
 *  saleRecipient: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setPrimarySaleRecipient(
  options: BaseTransactionOptions<SetPrimarySaleRecipientParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x6f4f2837",
  [
    {
      "internalType": "address",
      "name": "_saleRecipient",
      "type": "address"
    }
  ],
  []
],
    params: [options.saleRecipient]
  });
};


/**
 * Represents the parameters for the "transfer" function.
 */
export type TransferParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "transfer" function on the contract.
 * @param options - The options for the "transfer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transfer } from "TODO";
 *
 * const transaction = transfer({
 *  to: ...,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transfer(
  options: BaseTransactionOptions<TransferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa9059cbb",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.to, options.amount]
  });
};


/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 *
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transferFrom(
  options: BaseTransactionOptions<TransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x23b872dd",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.from, options.to, options.amount]
  });
};


