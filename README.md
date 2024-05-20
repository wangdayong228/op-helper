# op-helper

## 命令

```sh
Usage: op-helper [options] [command]

Options:
  -h, --help      display help for command

Commands:
  frl [options]   format run-latest.json file
  help [command]  display help for command
```

### frl
作用：将 run-latest.json 文件中的合约地址转换为 checksum 格式。

原因：foundry 在用 script 命令部署合约时，保存在 broadcast 文件夹下的run-latest.json文件中的合约地址是 lowercase 格式的，会导致执行 `forge script scripts/Deploy.s.sol:Deploy --sig 'sync()' --rpc-url $L1_RPC_URL`时失败。

原因是 该命令会从 run-latest.json 中匹配 checksum 格式的地址，导致查找不到。从而报错 `Deploy Tx not found for %s skipping deployment artifact generation", "L1CrossDomainMessengerProxy"`
