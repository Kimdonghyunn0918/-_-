// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ChamematItem.sol";

contract Crafting {
    ChamematItem public immutable item;

    constructor(address _item) {
        item = ChamematItem(_item);
    }

    function craft(
        uint256[] memory tokenIds,
        uint8 newTier,
        uint16 newAtk,
        uint16 newDef,
        string memory newURI
    ) external {
        require(tokenIds.length == 3, "Need exactly 3 items");
        require(newTier > 0 && newTier <= 4, "Invalid tier");

        uint8 requiredTier = newTier - 1;

        for (uint i = 0; i < 3; i++) {
            require(item.ownerOf(tokenIds[i]) == msg.sender, "Not owner");
            require(item.tier(tokenIds[i]) == requiredTier, "Wrong tier for crafting");
            item.burn(tokenIds[i]);
        }

        item.mint(msg.sender, newURI, newTier, newAtk, newDef);
    }
}
