 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ChamematItem.sol";

contract Crafting {
    ChamematItem public immutable item;

    constructor(address _item) {
        item = ChamematItem(_item);
    }

    // 3개 동일 티어 아이템 소각 → 상위 티어 1개 생성
    function craft(uint256[] memory tokenIds, uint8 newTier, uint16 atk, uint16 def, string memory newURI) external {
        require(tokenIds.length == 3, "Exactly 3 items required");

        for (uint i = 0; i < 3; i++) {
            require(item.ownerOf(tokenIds[i]) == msg.sender, "Not owner");
            require(item.tier(tokenIds[i]) == newTier - 1, "Wrong tier");
            item.burn(tokenIds[i]);
        }
        item.mint(msg.sender, newURI, newTier, atk, def);
    }
}
