/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface DirectPairInterface extends utils.Interface {
  functions: {};

  events: {
    "Test()": EventFragment;
    "Test1()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Test"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Test1"): EventFragment;
}

export interface TestEventObject {}
export type TestEvent = TypedEvent<[], TestEventObject>;

export type TestEventFilter = TypedEventFilter<TestEvent>;

export interface Test1EventObject {}
export type Test1Event = TypedEvent<[], Test1EventObject>;

export type Test1EventFilter = TypedEventFilter<Test1Event>;

export interface DirectPair extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DirectPairInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Test()"(): TestEventFilter;
    Test(): TestEventFilter;

    "Test1()"(): Test1EventFilter;
    Test1(): Test1EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
