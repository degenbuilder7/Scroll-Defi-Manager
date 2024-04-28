/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockVault,
  MockVaultInterface,
} from "../../../../contracts/mocks/MockVault.sol/MockVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610255806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806369328dec14610030575b600080fd5b61004a60048036038101906100459190610178565b610060565b60405161005791906101da565b60405180910390f35b60008373ffffffffffffffffffffffffffffffffffffffff166367a5cd06836040518263ffffffff1660e01b815260040161009b9190610204565b600060405180830381600087803b1580156100b557600080fd5b505af11580156100c9573d6000803e3d6000fd5b50505050670de0b6b3a764000090509392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061010f826100e4565b9050919050565b61011f81610104565b811461012a57600080fd5b50565b60008135905061013c81610116565b92915050565b6000819050919050565b61015581610142565b811461016057600080fd5b50565b6000813590506101728161014c565b92915050565b600080600060608486031215610191576101906100df565b5b600061019f8682870161012d565b93505060206101b086828701610163565b92505060406101c18682870161012d565b9150509250925092565b6101d481610142565b82525050565b60006020820190506101ef60008301846101cb565b92915050565b6101fe81610104565b82525050565b600060208201905061021960008301846101f5565b9291505056fea2646970667358221220057990670d56b03957be77cdb85491621b4c5532bcf912e781bb67bc6e2740a264736f6c63430008130033";

type MockVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVault__factory extends ContractFactory {
  constructor(...args: MockVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockVault> {
    return super.deploy(overrides || {}) as Promise<MockVault>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  override connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVaultInterface {
    return new utils.Interface(_abi) as MockVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}
