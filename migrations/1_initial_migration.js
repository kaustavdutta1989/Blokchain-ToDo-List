const TodoLists = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(TodoLists);
};
