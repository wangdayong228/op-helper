import { program } from 'commander';
import { ethers } from 'ethers';
import * as fs from 'fs';

program
    .command("currencies")
    .requiredOption('--file, <string>', 'run-latest.json file path')
    .action(async (options) => {
        const { file } = options
        formatRunlatest(file);
    })

function formatRunlatest(filePath: string) {
    // change contractAddress to checksum address use ethers.js  
    const runLatest = require(filePath);
    runLatest.transactions = runLatest.transactions.map((item: { contractAddress: string }) => {
        item.contractAddress = ethers.getAddress(item.contractAddress)
    })
    fs.writeFileSync(filePath, JSON.stringify(filePath, null, 2));
    console.log('run-latest.json file has been formatted');
}