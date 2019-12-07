class ChangeColorIdColumnOnEvent < ActiveRecord::Migration[6.0]
  def change
    change_column_null :events, :color_id, false
  end
end
