'use strict'

const Schema = use('Schema')

class AlterTasksReferenceInSchema extends Schema {
  up () {
    this.table('alter_tasks_reference_ins', (table) => {
      // alter table
    })
  }

  down () {
    this.table('alter_tasks_reference_ins', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterTasksReferenceInSchema
