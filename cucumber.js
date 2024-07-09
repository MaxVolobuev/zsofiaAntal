const common = [
    'tests/**/*.ts'
  ];
  
  module.exports = {
    default: {
      requireModule: ['ts-node/register'],
      require: common,
      format: ['progress', 'json:./test-results/cucumber_report.json'],
      timeout: 60000,
      paths: ['tests/features/**/*.feature']
    }
  };
  