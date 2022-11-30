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
    mapping(address => uint256[]) private verifyTasks;
    uint256 public taskId;

    //Step 2
    function submitTask(
        string memory _fdesc,
        string memory _pdesc,
        uint256 _price
    ) public payable returns (bool) {
        taskId++;
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
    modifier calledByOnlyUser(address _user, uint256 _id) {
        Task storage task = tasks[_id];
        require(task.user == _user, "You are not the owner of this task");
        _;
    }

    receive() external payable {}

    function taskDone(uint256 _id)
        public
        payable
        returns (bool success)
    {
        Task storage _task = tasks[_id];
        require(_task.user!=msg.sender,"You are the owner of this task");
        require(_id <= taskId, "Task does not exist");
        uint256 amount = _task.price * 2;
        require(msg.value >=  amount, "Amount is not be less");
        return true;
    }

    function verifyByUser(bool isTrue, uint256 _id)
        public
        payable
        calledByOnlyUser(msg.sender, _id)
        returns (bool success)
    {
        Task storage task = tasks[_id];
        if (isTrue) {
            task.status = TaskStatus.VERIFIED;
            address worker = task.worker;
            payable(worker).transfer(3 * task.price);
            verifyTasks[msg.sender].push(_id);
        } else {
            task.status = TaskStatus.NOTVERIFIED;
            address user = task.user;
            payable(user).transfer(3 * task.price);
        }
        return true;
    }
    function getListOfTasks() public view returns(Task[] memory){
        Task[] memory _tasks;
        for(uint i=1 ;i<=taskId;i++){
            _tasks[i]=tasks[i];
        }
        return _tasks;
    }

    function getListOfYourTasks() public view returns(Task[] memory){
        Task[] memory _tasks;
        uint[] memory ids= tasksByUser[msg.sender];
        for(uint i=0;i<ids.length;i++){
            _tasks[i]= tasks[ids[i]];
        }

        return _tasks;
    }

    function getListOfYourVerifiedTasks() public view returns(Task[] memory){
        Task[] memory _tasks;
        uint[] memory ids= verifyTasks[msg.sender];
        for(uint i=0;i<ids.length;i++){
            _tasks[i]= tasks[ids[i]];
        }

        return _tasks;
    }
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
