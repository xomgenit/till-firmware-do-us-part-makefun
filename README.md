# Till Firmware Do Us Part

[![Competition](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/xomgenit/till-firmware-do-us-part-makefun/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/xomgenit/till-firmware-do-us-part-makefun/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

Entry for the [make.fun bounty "Till Firmware Do Us Part"](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929).

## The vow

> I promise to love you through every update, every crash, and every time you forget my password.

## How it works

`main.ts` writes that single line to `entry.txt` in the output directory the
harness points at (`MAKEFUN_OUTPUT_DIR`, default `out`). It then reads the file
back and checks it is byte-identical to the vow, one line, 95 characters,
inside the 1–200 character gate.

Run it locally:

```sh
node main.ts
```
