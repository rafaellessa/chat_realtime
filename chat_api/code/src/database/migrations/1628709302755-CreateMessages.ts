import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMessages1628709302755 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'messages',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'text',
            type: 'varchar(1000)'
          },
          {
            name: 'room_id',
            type: 'varchar',
            generationStrategy: 'uuid'
          },
          {
            name: 'author_id',
            type: 'varchar',
            generationStrategy: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('messages')
  }
}
