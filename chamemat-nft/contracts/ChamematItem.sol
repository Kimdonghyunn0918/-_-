 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChamematItem is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    // 0=Common(Iron), 1=Uncommon(Steel), 2=Rare(Mithril), 3=Epic(Orichalcum), 4=Legendary(Excalibur)
    mapping(uint256 => uint8) public tier;
    mapping(uint256 => uint16) public attack;
    mapping(uint256 => uint16) public defense;

    constructor() ERC721("ChamematItem", "CMT") Ownable(msg.sender) {}

    function mint(
        address to,
        string memory tokenURI,
        uint8 _tier,
        uint16 _atk,
        uint16 _def
    ) external onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tier[tokenId] = _tier;
        attack[tokenId] = _atk;
        defense[tokenId] = _def;
    }

    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not owner");
        _burn(tokenId);
    }
}
