// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md

module.exports = {
  extends: ['@dreamistlabs/config-commitlint'],
  // update these rules in ^ config package
  rules: {
    // override existing rules here
    'header-case': [2, 'never', ['snake-case', 'kebab-case', 'pascal-case', 'upper-case']],
    'header-max-length': [1, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'scope-empty': [2, 'always'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', ['start-case']],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['Added', 'Changed', 'Chore', 'Deprecated', 'Fixed', 'Removed', 'Security'],
    ],
  },
};
