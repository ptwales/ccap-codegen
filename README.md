# CCAP-CODEGEN

Wrapper for [purescript-ccap-codegen](purescript-ccap-codegen) that exposes the
`codegen` and `get-schema` scripts to npm so they can be ran with something like
`npx`.

This currently only supports downloading prebundled versions from GitHub but in
the future it should cache those downloaded versions and building from source if
the prebundle doesn't exist.

**TODO:** Stop using this download-github-release npm package! It hasn't been
updated in 2 years and only supports zip files. Also one of its dependencies has
a security vulnerability. 

[codegen]: https://github.com/ccap/purescript-ccap-codegen
