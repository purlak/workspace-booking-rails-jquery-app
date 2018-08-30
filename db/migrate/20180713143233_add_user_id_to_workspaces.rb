class AddUserIdToWorkspaces < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :current_user_id, :integer
  end
end
