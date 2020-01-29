# CCAP-CODEGEN

Wrapper for [purescript-ccap-codegen][purescript-ccap-codegen] that exposes the
`codegen` and `get-schema` scripts to npm so they can be ran with something like
`npx`.

This currently only supports downloading prebundled versions from GitHub but in
the future it should cache those downloaded versions and building from source if
the prebundle doesn't exist.

[codegen]: https://github.com/ccap/purescript-ccap-codegen
