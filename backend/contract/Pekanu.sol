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
        // uint256 hs; // hash value of S
        // uint256 k; //number_of_solutions;
        // uint256 h; //accumulator value of responses
        // uint256[] v; //task targeted set
        // uint256[2] cm; //Commitment
    }
    mapping(uint256 => Task) private tasks;
    mapping(address => uint256[]) private tasksByUser;
    mapping(address => mapping(uint256 => Task)) private taskById;
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

    // Step 3
    function getTaskById(address user, uint256 id)
        public
        view
        returns (string memory, string memory)
    {
        require(user != address(0) && id <= taskId, "Task Not Exist");
        Task memory _task = taskById[user][id];
        return (_task.Pdesc, _task.Fdesc);
    }

    // This function will sends the the task raised by user --> Array
    function getTasks_Associated_User(address user)
        public
        view
        userExist(user)
        returns (Task[] memory)
    {
        uint256[] memory _ids = tasksByUser[user];
        uint256 len = _ids.length;
        Task[] memory _tasks;
        for (uint256 i = 0; i < len; i++) {
            _tasks[i] = taskById[user][_ids[i]];
        }
        return _tasks;
    }

    modifier userExist(address user) {
        require(user != address(0), "Task Not Exist");
        _;
    }

    receive() external payable {}

    function taskDone(
        uint256 amount,
        address worker,
        uint256 _id
    ) public payable returns (bool success) {
        require(msg.value >= 2 * amount, "Amount is not be less");
        verifyTasks[worker].push(_id);
        return true;
    }

    function verifyByUser(uint256 _id, uint256 _verified)
        public
        payable
        returns (bool success)
    {
        Task memory task = tasks[_id];
        uint256 price = task.price;
        if (_verified == 0) {
            task.status = TaskStatus.VERIFIED;
            address worker = task.worker;

            payable(worker).transfer(3 * price);
        } else {
            task.status = TaskStatus.NOTVERIFIED;
            address user = task.user;
            payable(user).transfer(3 * price);
        }
        return true;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
