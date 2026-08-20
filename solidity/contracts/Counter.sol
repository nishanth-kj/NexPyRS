// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;

    event CountChanged(uint256 newCount);

    function increment() public {
        count += 1;
        emit CountChanged(count);
    }

    function decrement() public {
        require(count > 0, "Counter cannot be negative");
        count -= 1;
        emit CountChanged(count);
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
