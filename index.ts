import { program } from 'commander';
import { ethers } from 'ethers';
import * as fs from 'fs';

console.log("hello world!");

program
    .command("frl")
    .description('format run-latest.json file')
    .requiredOption('--file, <string>', 'run-latest.json file path')
    .action((options) => {
        const { file } = options
        formatRunlatest(file);
    })
program.parse(process.argv);

function formatRunlatest(filePath: string) {
    console.log("format run-latest.json file")
    // change contractAddress to checksum address use ethers.js  
    const runLatest = require(filePath);
    runLatest.transactions = runLatest.transactions.map((item: { contractAddress: string }) => {
        item.contractAddress = ethers.getAddress(item.contractAddress)
        return item;
    })
    fs.writeFileSync(filePath, JSON.stringify(runLatest, null, 2));
    console.log('run-latest.json file has been formatted');
}