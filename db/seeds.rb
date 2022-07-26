# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.delete_all
Profile.delete_all
Video.delete_all

demoUser = User.create!(email: 'demo@gmail.com', password: '123456')

demoProfile1 = Profile.create!(profile_name: 'taro', user_id: demoUser.id)
demoProfile2 = Profile.create!(profile_name: 'ulu', user_id:  demoUser.id)
demoProfile3 = Profile.create!(profile_name: 'poi', user_id:  demoUser.id)

file = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file2 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file3 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')

demoProfile1.avatar.attach(io: file, filename: 'lightsaber_boy.jpg')
demoProfile2.avatar.attach(io: file2, filename: 'lightsaber_boy.jpg')
demoProfile3.avatar.attach(io: file3, filename: 'lightsaber_boy.jpg')

# mirai = Video.create!(title: "Mirai", description:"A young boy named Kun feels forgotten by his family when his little sister Mirai arrives. Running away from home, Kun stumbles upon a magical garden that serves as a time-travelling gateway where he encounters his mother as a little girl and has a series of adventures with his baby sister, who is all grown up, opening a new perspective on his world", studio: "Studio Chizu", genre: "Adventure", year: 2018, runtime:5880, video_type: "movie")
# mirai_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg')
# mirai.thumbnail.attach(io: mirai_thumbnail, filename: 'mirai-thumbnail.jpeg')
# mirai_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/mirai-video.mp4')
# mirai.video.attach(io: mirai_video, filename: 'mirai-video.mp4')