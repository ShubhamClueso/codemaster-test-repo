// Generic helpers — orthogonal to auth. Kept here so we have a non-auth
// file to push innocent changes against during validation testing.

function formatTimestamp(d) {
  return d.toISOString();
}

module.exports = { formatTimestamp };
