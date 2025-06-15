//SPDX-license-Identifier:MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {EthPayUSD} from "../src/EthPayUSD.sol";
import {HelperConfig} from "../script/HelperConfig.s.sol";

contract DeployEthPayUSD is Script {
    EthPayUSD ethusdpay;
    HelperConfig helperconfig;

    function run() public returns (EthPayUSD) {
        helperconfig = new HelperConfig();
        address pricefeed = helperconfig.ActiveNetwork();
        vm.startBroadcast();
        ethusdpay = new EthPayUSD(pricefeed);
        vm.stopBroadcast();
        return ethusdpay;
    }
}
