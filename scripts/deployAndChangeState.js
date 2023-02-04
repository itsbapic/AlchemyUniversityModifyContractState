const hre = require("hardhat");

async function main() {

    const ModifyVariable = await hre.ethers.getContractFactory("ModifyVariable");
    const modifyVariable = await ModifyVariable.deploy(1, "This is the initial state string");

    await modifyVariable.deployed();
    console.log(`\n---- 🥳 Contract was deployed to ${modifyVariable.address} !🕺----`);

    // Get Inital states
    console.log(`\n\n---- 🔢 INITIAL VARIABLE STATES 🔢 ----`);
    console.log(`uint public x: ${await modifyVariable.x()}`, `\nstring public randomString: ${await modifyVariable.randomString()}`);

    // change state
    await modifyVariable.modifyToTenThousand();
    await modifyVariable.modifyString();

    // Get newly changed variable states
    console.log(`\n\n---- 🚀🚀 CHANGED VARIABLE STATES 🚀🚀 ----`);
    console.log(`uint public x: ${await modifyVariable.x()}`, `\nstring public randomString: ${await modifyVariable.randomString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
