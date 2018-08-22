'use strict'

const Schema = use('Schema')

class CreateProjectidTasksSchema extends Schema {
  up () {
    this.table('tasks', table => {
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('create_projectid_tasks', table => {
      // reverse alternations
    })
  }
}

module.exports = CreateProjectidTasksSchema
