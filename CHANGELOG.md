# Change Log

All notable changes to the "crc32-opcode-helper" extension will be documented in this file.

## [1.1.3] - 2024-01-14

### Fixed

-   Updated regex in `generateAndCopyOpcodeFuncConsts` to correctly handle multi-line definitions

## [1.1.2] - 2023-12-22

### Fixed

-   Zero-padding for opcodes to have fixed bit length
-   Updated regex that finds opcodes in scheme

## [1.1.1] - 2023-07-09

### Added

-   Nothing

## [1.1.0] - 2023-07-09

### Added

-   New command `crc32-opcode-helper.generateAndCopyOpcodeFuncConsts` for opcode constants generation and copying to clipboard. It can parse selected text in the editor, identify opcode constants in the `name#tag` format, generate corresponding FunC constant declarations, and copy the result to clipboard.
-   Error handling for clipboard operations with user notifications.

## [1.0.0] - 2023-07-08

### Added

-   Initial release of CRC32 Opcode Helper.
