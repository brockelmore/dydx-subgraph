import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ExpirySet extends EthereumEvent {
  get params(): ExpirySet__Params {
    return new ExpirySet__Params(this);
  }
}

export class ExpirySet__Params {
  _event: ExpirySet;

  constructor(event: ExpirySet) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get number(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get marketId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LogExpiryRampTimeSet extends EthereumEvent {
  get params(): LogExpiryRampTimeSet__Params {
    return new LogExpiryRampTimeSet__Params(this);
  }
}

export class LogExpiryRampTimeSet__Params {
  _event: LogExpiryRampTimeSet;

  constructor(event: LogExpiryRampTimeSet) {
    this._event = event;
  }

  get expiryRampTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Expiry__getSpreadAdjustedPricesResult {
  value0: EthereumTuple;
  value1: EthereumTuple;

  constructor(value0: EthereumTuple, value1: EthereumTuple) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromTuple(this.value0));
    map.set("value1", EthereumValue.fromTuple(this.value1));
    return map;
  }
}

export class Expiry extends SmartContract {
  static bind(address: Address): Expiry {
    return new Expiry("Expiry", address);
  }

  SOLO_MARGIN(): Address {
    let result = super.call("SOLO_MARGIN", []);
    return result[0].toAddress();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  g_expiryRampTime(): BigInt {
    let result = super.call("g_expiryRampTime", []);
    return result[0].toBigInt();
  }

  getExpiry(account: EthereumTuple, marketId: BigInt): BigInt {
    let result = super.call("getExpiry", [
      EthereumValue.fromTuple(account),
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toBigInt();
  }

  getSpreadAdjustedPrices(
    heldMarketId: BigInt,
    owedMarketId: BigInt,
    expiry: BigInt
  ): Expiry__getSpreadAdjustedPricesResult {
    let result = super.call("getSpreadAdjustedPrices", [
      EthereumValue.fromUnsignedBigInt(heldMarketId),
      EthereumValue.fromUnsignedBigInt(owedMarketId),
      EthereumValue.fromUnsignedBigInt(expiry)
    ]);
    return new Expiry__getSpreadAdjustedPricesResult(
      result[0].toTuple(),
      result[1].toTuple()
    );
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get soloMargin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get expiryRampTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class OwnerSetExpiryRampTimeCall extends EthereumCall {
  get inputs(): OwnerSetExpiryRampTimeCall__Inputs {
    return new OwnerSetExpiryRampTimeCall__Inputs(this);
  }

  get outputs(): OwnerSetExpiryRampTimeCall__Outputs {
    return new OwnerSetExpiryRampTimeCall__Outputs(this);
  }
}

export class OwnerSetExpiryRampTimeCall__Inputs {
  _call: OwnerSetExpiryRampTimeCall;

  constructor(call: OwnerSetExpiryRampTimeCall) {
    this._call = call;
  }

  get newExpiryRampTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OwnerSetExpiryRampTimeCall__Outputs {
  _call: OwnerSetExpiryRampTimeCall;

  constructor(call: OwnerSetExpiryRampTimeCall) {
    this._call = call;
  }
}

export class CallFunctionCall extends EthereumCall {
  get inputs(): CallFunctionCall__Inputs {
    return new CallFunctionCall__Inputs(this);
  }

  get outputs(): CallFunctionCall__Outputs {
    return new CallFunctionCall__Outputs(this);
  }
}

export class CallFunctionCall__Inputs {
  _call: CallFunctionCall;

  constructor(call: CallFunctionCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get account(): CallFunctionCallAccountStruct {
    return this._call.inputValues[1].value.toTuple() as CallFunctionCallAccountStruct;
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CallFunctionCall__Outputs {
  _call: CallFunctionCall;

  constructor(call: CallFunctionCall) {
    this._call = call;
  }
}

export class CallFunctionCallAccountStruct extends EthereumTuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get number(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCall extends EthereumCall {
  get inputs(): GetTradeCostCall__Inputs {
    return new GetTradeCostCall__Inputs(this);
  }

  get outputs(): GetTradeCostCall__Outputs {
    return new GetTradeCostCall__Outputs(this);
  }
}

export class GetTradeCostCall__Inputs {
  _call: GetTradeCostCall;

  constructor(call: GetTradeCostCall) {
    this._call = call;
  }

  get inputMarketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get outputMarketId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get makerAccount(): GetTradeCostCallMakerAccountStruct {
    return this._call.inputValues[2].value.toTuple() as GetTradeCostCallMakerAccountStruct;
  }

  get value3(): GetTradeCostCallValue3Struct {
    return this._call.inputValues[3].value.toTuple() as GetTradeCostCallValue3Struct;
  }

  get oldInputPar(): GetTradeCostCallOldInputParStruct {
    return this._call.inputValues[4].value.toTuple() as GetTradeCostCallOldInputParStruct;
  }

  get newInputPar(): GetTradeCostCallNewInputParStruct {
    return this._call.inputValues[5].value.toTuple() as GetTradeCostCallNewInputParStruct;
  }

  get inputWei(): GetTradeCostCallInputWeiStruct {
    return this._call.inputValues[6].value.toTuple() as GetTradeCostCallInputWeiStruct;
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class GetTradeCostCall__Outputs {
  _call: GetTradeCostCall;

  constructor(call: GetTradeCostCall) {
    this._call = call;
  }

  get value0(): GetTradeCostCallValue0Struct {
    return this._call.outputValues[0].value.toTuple() as GetTradeCostCallValue0Struct;
  }
}

export class GetTradeCostCallMakerAccountStruct extends EthereumTuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get number(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCallValue3Struct extends EthereumTuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get number(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCallOldInputParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCallNewInputParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCallInputWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class GetTradeCostCallValue0Struct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get denomination(): i32 {
    return this[1].toI32();
  }

  get ref(): i32 {
    return this[2].toI32();
  }

  get value(): BigInt {
    return this[3].toBigInt();
  }
}