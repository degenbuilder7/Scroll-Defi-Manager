/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface AuthorizedOriginReceiverInterfaceInterface
  extends utils.Interface {
  functions: {
    "activateAuthorizedReceiver()": FunctionFragment;
    "addAuthorizedSenders(address[])": FunctionFragment;
    "authorizedReceiverActive()": FunctionFragment;
    "deactivateAuthorizedReceiver()": FunctionFragment;
    "getAuthorizedSenders()": FunctionFragment;
    "isAuthorizedSender(address)": FunctionFragment;
    "removeAuthorizedSenders(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateAuthorizedReceiver"
      | "addAuthorizedSenders"
      | "authorizedReceiverActive"
      | "deactivateAuthorizedReceiver"
      | "getAuthorizedSenders"
      | "isAuthorizedSender"
      | "removeAuthorizedSenders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateAuthorizedReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAuthorizedSenders",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedReceiverActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateAuthorizedReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorizedSender",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorizedSenders",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateAuthorizedReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedReceiverActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateAuthorizedReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorizedSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorizedSenders",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AuthorizedOriginReceiverInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthorizedOriginReceiverInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    authorizedReceiverActive(overrides?: CallOverrides): Promise<[boolean]>;

    deactivateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<[string[]]>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activateAuthorizedReceiver(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addAuthorizedSenders(
    senders: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  authorizedReceiverActive(overrides?: CallOverrides): Promise<boolean>;

  deactivateAuthorizedReceiver(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

  isAuthorizedSender(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeAuthorizedSenders(
    senders: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateAuthorizedReceiver(overrides?: CallOverrides): Promise<void>;

    addAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    authorizedReceiverActive(overrides?: CallOverrides): Promise<boolean>;

    deactivateAuthorizedReceiver(overrides?: CallOverrides): Promise<void>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    activateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    authorizedReceiverActive(overrides?: CallOverrides): Promise<BigNumber>;

    deactivateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    authorizedReceiverActive(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deactivateAuthorizedReceiver(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAuthorizedSenders(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
