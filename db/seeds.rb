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

# boruto
boruto = Video.create!(
    title: "Boruto", 
    description:"Opening with a teenaged Boruto Uzumaki facing a foe named Kawaki during the destruction of his village, the manga follows with a retelling of events in Boruto: Naruto the Movie with added content.[2] The son of the Seventh Hokage Naruto Uzumaki, Boruto feels angry over his father placing the village before his family. At that time, Boruto becomes a member of a ninja team led by Naruto's protégé Konohamaru Sarutobi, alongside Sarada Uchiha, the daughter of Sasuke and Sakura Uchiha, and Mitsuki, Orochimaru's artificial son. Sasuke returns to the village to warn Naruto of an impending threat relating to deduce the motivations of Kaguya Ōtsutsuki. Boruto asks Sasuke to train him for the upcoming Chunin exam to impress his father.", 
    studio: "Netflix", 
    genre: "Action", 
    year: 2016, 
    runtime: 0, 
    video_type: "series"
)
boruto_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/boruto-thumbnail.png')
boruto.thumbnail.attach(io: boruto_thumbnail, filename: 'https://kirara.s3.us-west-1.amazonaws.com/boruto-thumbnail.png')

boruto_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/boruto-bg.jpg')
boruto.background.attach(io: boruto_bg, filename:'boruto-bg.jpg')

boruto_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/boruto.mp4')
boruto.video.attach(io: boruto_video, filename: 'boruto.mp4')

# brother bear
brother_bear = Video.create!(
    title: "Brother Bear", 
    description:"Kenai is a young Indian brave with a particular distaste for bears. When his brother Sitka is killed by one, Kenai in turn kills the bear, only to be magically transformed into one himself. To make matters worse, his other brother Denahi vows to kill the bear Kenai has become. Kenai's only hope is a magical mountain where he believes he can be changed back to a human, and he enlists a real bear cub, Koda, to get him there.", 
    studio: "Disney", 
    genre: "Adventure", 
    year: 2003, 
    runtime:5100, 
    video_type: "movie"
)
brother_bear_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother-bear-thumbnail.jpeg')
brother_bear.thumbnail.attach(io: brother_bear_thumbnail, filename: 'brother-bear-thumbnail.jpeg')

brother_bear_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother-bear-bg.jpg')
brother_bear.background.attach(io: brother_bear_bg, filename:'brother-bear-bg.jpg')

brother_bear_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/brother-bear.mp4')
brother_bear.video.attach(io: brother_bear_video, filename: 'brother-bear.mp4')

# kiki's delivery service
kiki = Video.create!(
    title: "Kiki's Delivery Service", 
    description:"In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.", 
    studio: "Studio Ghibli", 
    genre: "Adventure", 
    year: 1989, 
    runtime: 6120, 
    video_type: "movie"
)
kiki_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/kiki-thumbnail.jpeg')
kiki.thumbnail.attach(io: kiki_thumbnail, filename: 'kiki-thumbnail.jpeg')

kiki_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/kiki-bg.jpg')
kiki.background.attach(io: kiki_bg, filename:'kiki-bg.jpg')

kiki_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/kiki.mp4')
kiki.video.attach(io: kiki_video, filename: 'kiki.mp4')