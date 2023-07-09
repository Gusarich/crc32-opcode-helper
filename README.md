# CRC32 Opcode Helper for TON

This Visual Studio Code extension helps developers who are working with [The Open Network (TON)](https://ton.org) blockchain technology to generate opcode for TL-B (Type Language - Binary) schemes using crc32.

The extension supports generating request and response opcodes, following all standards and best practices of TON and TL-B.

## Features

-   Generate request opcode.
-   Generate response opcode.
-   Generate opcode constants for your FunC code based on TL-B scheme.

## Prerequisites

-   Visual Studio Code version 1.80.0 or higher.
-   Basic knowledge of TON blockchain and TL-B scheme. Visit the official TON documentation [here](https://docs.ton.org/develop/data-formats/tl-b-language) for more details.

## How to Use

1. Install the extension from the Visual Studio Code marketplace.
2. Open a file containing your TL-B scheme.
3. Select the scheme that you want to generate opcode for.
4. Right-click and choose one of the following commands:
    - `Generate request crc32 opcode` to generate a request opcode.
    - `Generate response crc32 opcode` to generate a response opcode.

The selected TL-B scheme will be updated with the calculated opcode.

You can also select the scheme with calculated opcodes and use `Generate and copy opcode FunC constants from the selected scheme` option to generate opcode constants for your FunC code and copy them to clipboard.

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Resources

-   [TON TL-B Language](https://docs.ton.org/develop/data-formats/tl-b-language)
-   [TON CRC32](https://docs.ton.org/develop/data-formats/crc32)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Release Notes

[CHANGELOG](/CHANGELOG.md)

## Issues

If you encounter any problems or have suggestions, please open an issue [here](https://github.com/Gusarich/crc32-opcode-helper/issues).

---

Disclaimer: This extension is not officially related to TON. Please read the [TON documentation](https://docs.ton.org/) for the official resources.
