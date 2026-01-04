// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockTrust {
    struct Certificate {
        string studentName;
        string course;
        uint256 issueDate;
        bool isValid;
    }

    address public admin;
    mapping(string => Certificate) private certificates;

    constructor() {
        admin = msg.sender;
    }

    function issueCertificate(string memory _id, string memory _name, string memory _course) public {
        require(msg.sender == admin, "Only admin");
        require(!certificates[_id].isValid, "Exists");

        certificates[_id] = Certificate(_name, _course, block.timestamp, true);
    }

    function verifyCertificate(string memory _id)
        public
        view
        returns (string memory, string memory, uint256, bool)
    {
        Certificate memory cert = certificates[_id];
        require(cert.isValid, "Invalid ID");

        return (cert.studentName, cert.course, cert.issueDate, cert.isValid);
    }
}
