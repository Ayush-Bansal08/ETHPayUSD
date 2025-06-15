💡Why use EthPayUSD?
In many dApps, users are required to pay in ETH—but pricing is often communicated in USD. This creates confusion, overpayments, and price fluctuation risks. EthPayUSD bridges this gap by letting users:
👉 Specify an amount in USD instead of manually calculating ETH.
👉 Reliably convert that amount into ETH using live on-chain price feeds.
👉 Automatically refund any excess ETH if overpaid.
👉 Eliminate middlemen with a fully on-chain and trustless flow.


⚙️Core Features
🔐 Owner-Safe Access – Owner of the contract is prevented from initiating payments for extra security.
🧮 Dynamic ETH Calculation – USD input is converted to ETH in real-time using Chainlink oracles.
💸 Precise Payouts – Receiver gets the exact ETH value; no more guessing conversion rates.
🔁 Auto Refunds – Excess ETH (due to user miscalculating gas/price) is safely returned.
🧾 Event Emissions – Emits AmountSent and RefundReceived events to improve front-end tracking and test clarity.



## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
