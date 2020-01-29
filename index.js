const downloadGithubRelease = require('download-github-release');

if (process.argv.length < 3) {
  console.error("Please provide a codegen version", process.argv);
  process.exit(1);
} else if (process.argv.length > 3) {
  console.error("Too many arguments provided", process.argv);
  process.exit(1);
}

const version = process.argv[2];

const user = 'ccap';

const repo = 'purescript-ccap-codegen';

const isVersion = (release) => release.tag_name === version;

const isZip = (asset) => asset.name.endsWith('.zip');

downloadGithubRelease(user, repo, process.env.PWD, isVersion, isZip)
  .catch((err) => {
    console.error('');
    console.error("Failed to install codegen!", err.message);
    process.exit(1);
  });

