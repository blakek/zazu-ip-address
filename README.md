# zazu-ip-address [![Travis](https://img.shields.io/travis/blakek/zazu-ip-address.svg)](https://travis-ci.org/blakek/zazu-ip-address)

> Show your internal and external IP address using Zazu 💻

Get your current IP address, internal and public, from your launcher!

## Usage

Open [Zazu](http://zazuapp.org) and type `ip`

![demo](example.gif)

## Install

Add `blakek/zazu-ip-address` inside the `plugins` block of your `~/.zazurc.json` file (`C:\Users\YOUR_NAME\.zazurc.json` on Windows).

**Get IPv4 addresses (default):**

```js
{
  /* In ~/.zazurc.json */
  "plugins": [
    "blakek/zazu-ip-address"
  ]
}
```

**Reorder and/or add IPv6:** (all options)

Notes:
  * Sometimes, some values won't return anything (i.e. IPv6 sometimes won't work). This depends on your network settings.
  * Text in order array ignores letter case

```js
{
  /* In ~/.zazurc.json */
  "plugins": [
    {
      "name": "blakek/zazu-ip-address",
      "variables": {
        "order": [
          "internal ipv4",
          "internal ipv6",
          "public ipv4",
          "public ipv6"
        ]
      }
    }
  ]
}
```

## Acknowledgments

[`blakek/zazu-ip-address`](https://github.com/blakek/zazu-ip-address) depends on the awesome modules [`sindresorhus/internal-ip`](https://github.com/sindresorhus/internal-ip) and [`sindresorhus/public-ip`](https://github.com/sindresorhus/public-ip).

## See Also

- [`tinytacoteam/zazu`](http://github.com/tinytacoteam/zazu)

## License

MIT
