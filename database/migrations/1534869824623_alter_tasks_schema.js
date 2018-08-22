'use strict'

const Schema = use('Schema')

class AlterTasksSchema extends Schema {
  up () {
    this.table('tasks', table => {
      table.dropColumn('project_id')
    })
  }

  down () {
    this.table('alter_tasks', table => {
      // reverse alternations
    })
  }
}

module.exports = AlterTasksSchema
