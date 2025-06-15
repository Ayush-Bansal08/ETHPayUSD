// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {EthPayUSD} from "../src/EthPayUSD.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        address pricefeed;
    }

    NetworkConfig public ActiveNetwork;

    function getSepoliaTestnet() public pure returns (NetworkConfig memory) {
        NetworkConfig memory SepoliaConfig =
            NetworkConfig({pricefeed: address(0x694AA1769357215DE4FAC081bf1f309aDC325306)});
        return SepoliaConfig;
    }

    // first the constructor would run thn the chainid would be detected the the activnetwrk is et eiht th epricefeed that we want
    constructor() {
        if (block.chainid == 11155111) {
            ActiveNetwork = getSepoliaTestnet();
        } else {
            revert("enter only eth sepolia testnet");
        }
    }
}
