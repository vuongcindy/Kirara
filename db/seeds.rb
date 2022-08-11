require 'open-uri'

User.delete_all
Profile.delete_all
Video.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('profiles')
ActiveRecord::Base.connection.reset_pk_sequence!('videos')

# demo user
demoUser = User.create!(email: 'demo@gmail.com', password: '123456')

# demo profiles
demoProfile1 = Profile.create!(profile_name: 'taro', user_id: demoUser.id)
demoProfile2 = Profile.create!(profile_name: 'ulu', user_id:  demoUser.id)
demoProfile3 = Profile.create!(profile_name: 'poi', user_id:  demoUser.id)

# demo profile avatars
file = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file2 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file3 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')

demoProfile1.avatar.attach(io: file, filename: 'lightsaber_boy.jpg')
demoProfile2.avatar.attach(io: file2, filename: 'lightsaber_boy.jpg')
demoProfile3.avatar.attach(io: file3, filename: 'lightsaber_boy.jpg')

# mirai
mirai = Video.create!(
    title: "Mirai", 
    description:"A young boy named Kun feels forgotten by his family when his little sister Mirai arrives. Running away from home, Kun stumbles upon a magical garden that serves as a time-travelling gateway where he encounters his mother as a little girl and has a series of adventures with his baby sister, who is all grown up, opening a new perspective on his world", 
    studio: "Studio Chizu", 
    genre: "Adventure", 
    year: 2018, 
    runtime:5880, 
    video_type: "movie"
)
mirai_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg')
mirai.thumbnail.attach(io: mirai_thumbnail, filename: 'mirai-thumbnail.jpeg')

mirai_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/mirai-bg.jpg')
mirai.background.attach(io: mirai_bg, filename:'mirai-bg.jpg')

mirai_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/mirai-video.mp4')
mirai.video.attach(io: mirai_video, filename: 'mirai-video.mp4')

# arcane legend
arcane = Video.create!(
    title: "Arcane", 
    description:"Amidst the escalating unrest between the rich, utopian city of Piltover and the seedy, oppressed undercity of Zaun, sisters Vi and Jinx find themselves on opposing sides of a brewing war over clashing convictions and arcane technologies.", 
    studio: "Netflix", 
    genre: "Action", 
    year: 2021, 
    runtime: 22680, 
    video_type: "series"
)
arcane_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/arcane-league-thumbnail.jpeg')
arcane.thumbnail.attach(io: arcane_thumbnail, filename: 'arcane-league-thumbnail.jpeg')

arcane_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/arcane_bg.jpg')
arcane.background.attach(io: arcane_bg, filename:'arcane-bg.jpg')

arcane_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/arcane-legend.mp4')
arcane.video.attach(io: arcane_video, filename: 'arcane-legend.mp4')

# brother bear
# brother_bear = Video.create!(
#     title: "Brother Bear", 
#     description:"", 
#     studio: "Studio Chizu", 
#     genre: "Adventure", 
#     year: 2018, 
#     runtime:5880, 
#     video_type: "movie"
# )
# brother_bear_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother_bear-thumbnail.jpeg')
# brother_bear.thumbnail.attach(io: brother_bear_thumbnail, filename: 'brother_bear-thumbnail.jpeg')

# brother_bear_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother_bear-bg.jpg')
# brother_bear.background.attach(io: brother_bear_bg, filename:'brother_bear-bg.jpg')

# brother_bear_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother-bear.mp4')
# brother_bear.video.attach(io: brother_bear_video, filename: 'brother_bear.mp4')