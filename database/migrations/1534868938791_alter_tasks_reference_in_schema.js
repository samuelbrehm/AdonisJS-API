'use strict'

const Schema = use('Schema')

class AlterTasksReferenceInSchema extends Schema {
  up () {
    this.create('alter_tasks_reference_ins', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('alter_tasks_reference_ins')
  }
}

module.exports = AlterTasksReferenceInSchema
