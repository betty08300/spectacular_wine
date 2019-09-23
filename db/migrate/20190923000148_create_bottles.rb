class CreateBottles < ActiveRecord::Migration[5.2]
  def change
    create_table :bottles do |t|
      t.integer :bottle_id, null: false
      t.string :winery_full, null: false
      t.string :wine_full, null: false 
      t.integer :vintage, null: false 
      t.string :taster_initials, null: false
      t.string :color, null: false 
      t.string :country, null: false 
      t.string :region, null: false 
      t.integer :score, null: false 
      t.integer :price, null: false 
      t.string :alternate_bottle_size, null:true
      t.string :issue_date, null: false 
      t.integer :top100_year, null: false 
      t.integer :top100_rank, null: false 
    end
  end
end
