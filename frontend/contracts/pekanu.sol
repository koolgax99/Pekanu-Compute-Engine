// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Pekanu {
    address public admin;

    constructor() payable {
        admin = msg.sender;
    }

    //Step 1
    enum TaskStatus {
        NEUTRAL,
        NOTVERIFIED,
        VERIFIED
    }
    struct Task {
        address user;
        address worker;
        string Fdesc;
        string Pdesc;
        uint256 price;
        TaskStatus status;
    }
    mapping(uint256 => Task) public tasks;
    mapping(address => uint256[]) private tasksByUser;
    // mapping(address => uint) private taskById;
    mapping(address => uint256[]) public verifyTasks;
    uint256 private taskId;

    //Step 2
    function submitTask(
        string memory _fdesc,
        string memory _pdesc,
        uint256 _price
    ) public payable returns (bool) {
        taskId++;
        // uint256[2] memory _cm;
        require(msg.value == _price, "Amount is not sufficient");
        tasks[taskId] = Task(
            msg.sender,
            address(0),
            _fdesc,
            _pdesc,
            _price,
            TaskStatus.NEUTRAL
        );
        tasksByUser[msg.sender].push(taskId);
        return true;
    }


    modifier userExist(address user) {
        require(user != address(0), "Task Not Exist");
        _;
    }

    receive() external payable {}

    function taskDone(address worker, uint256 _id)
        public
        payable
        returns (bool success)
    {
        require(_id <= taskId, "Task does not exist");
        uint256 amount = tasks[_id].price * 2;
        require(msg.value >= 2 * amount, "Amount is not be less");

        return true;
    }


    function verifyByUser(bool isTrue,uint _id)
        public
        payable
        returns (bool success)
    {
        Task memory task = tasks[_id];
        if (isTrue) {
            task.status = TaskStatus.VERIFIED;
            address worker = task.worker;

            payable(worker).transfer(3*task.price);
        } else {
            task.status = TaskStatus.NOTVERIFIED;
            address user = task.user;
            payable(user).transfer(3*task.price);
        }
        return true;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
