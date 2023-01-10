const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
  // Get inputs
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('bucket-region', { required: true });
  const dist = core.getInput('dist-folder', { required: true });

  // Upload dist folder
  const s3Uri = `s3://${bucket}`

  exec.exec(`aws s3 sync ${dist} ${s3Uri} --region ${region}`);

  const webUrl = `http://${bucket}.s3-website-${region}.amazonaws.com`;

  core.setOutput('website-url', webUrl);
}

run();