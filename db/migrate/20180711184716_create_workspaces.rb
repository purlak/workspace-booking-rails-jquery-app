class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :workspace_type
      t.boolean :availability
      t.integer :building_id

      t.timestamps
    end
  end
end
