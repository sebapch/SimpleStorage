pragma solidity ^0.5.0;

contract SimpleStorage {
    string public data;
    
    //setter function
    //specify type, memory and name
    function set(string memory _data) public {
        data = _data;
    }
    
    //getter function
    //view read the storage of the smart contract
    function get() view public returns(string memory){
        return data;
    }
}