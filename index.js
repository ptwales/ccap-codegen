const downloadGithubRelease = require('download-github-release');

if (process.argv.length < 3) {
  console.error("Please provide a codegen version", process.argv);
  process.exit(1);
} else if (process.argv.length > 3) {
  console.error("Too many arguments provided", process.argv);
  process.exit(1);
}

const codegenVersion = process.argv[2];

const filterRelease = (release) => release.tag_name === codegenVersion;

const user = 'ccap';
const repo = 'purescript-ccap-codegen';
downloadGithubRelease(user, repo, 'src', filterRelease)
  .then(() => console.log('All done!'))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

