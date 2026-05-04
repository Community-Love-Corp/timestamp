const core = require('@actions/core');

function formatDate() {
  const now = new Date();

  const day = now.toLocaleDateString('en-NZ', { weekday: 'long' });
  const date = now.toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `${day}, ${date}`;
}

try {
  const today = formatDate();
  core.setOutput('today', today);
} catch (error) {
  core.setFailed(error.message);
}
