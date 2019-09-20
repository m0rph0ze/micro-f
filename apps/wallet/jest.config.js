module.exports = {
  name: 'wallet',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wallet',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
