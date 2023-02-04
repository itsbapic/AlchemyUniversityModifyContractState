//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  string public randomString;

  constructor(uint _x, string memory _randomString) {
    x = _x;
    randomString = _randomString;
  }

  function modifyToTenThousand() public {
    x = 10000;
  }

  function modifyString() public {
    randomString = "Holy moly this is a different string!";
  }

}