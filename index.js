const path = require('path')
const { name, version } = require('./package.json')

module.exports = {
  name,
  version,
  metadata: {
    year: new Date().getFullYear()
  },
  prompts: [

    // {
    //   name: 'mode',
    //   type:'select',
    //   message: 'github action mode',
    //   hint: ' ',
    //   choices: [
    //     { title: 'changeset', value: 'changeset' },
    //     { title: 'vanilla', value: 'vanilla' },
    //     { title: 'yarn', value: 'yarn' }
    //   ]
    // }
  ],
  init: true,
  emit: async ctx => {
    ctx.config.install = false
  },
  complete: async ctx => {
    console.clear()
    console.log('Create Github-Action')


  }
}