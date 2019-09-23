class ReplaceAlternateBottleSize < ActiveRecord::Migration[5.2]
  def change
    remove_column :bottles, :alternate_bottle_size
    add_column :bottles, :alternate_bottle_size, :string
  end
end
