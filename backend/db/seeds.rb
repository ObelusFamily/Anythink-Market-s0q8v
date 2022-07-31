# Wipe the database to prevent these from constantly building
User.destroy_all
Item.destroy_all
Comment.destroy_all

# Create the different db records
100.times do |i|
  user = User.create!(username: "User#{i}", password: "password${i}", email: "User#{i}@email.com")
  item = Item.create!(user: user, title: "Item #{i}", description: "An item, of number #{i}")
  Comment.create!(user: user, item: item, body: "I'm a comment on item #{i} by user #{i}")
end

