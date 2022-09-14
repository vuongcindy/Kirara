require 'open-uri'

User.delete_all
Profile.delete_all
Video.delete_all
WatchlistItem.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('profiles')
ActiveRecord::Base.connection.reset_pk_sequence!('videos')
ActiveRecord::Base.connection.reset_pk_sequence!('watchlistItems')

# demo user
demoUser = User.create(email: 'demo@gmail.com', password: '123456')

# demo profiles
demoProfile1 = Profile.create(profile_name: 'taro', user_id: demoUser.id)
demoProfile2 = Profile.create(profile_name: 'ulu', user_id:  demoUser.id)
demoProfile3 = Profile.create(profile_name: 'poi', user_id:  demoUser.id)

# demo profile avatars
file = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file2 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')
file3 = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg')

demoProfile1.avatar.attach(io: file, filename: 'lightsaber_boy.jpg')
demoProfile2.avatar.attach(io: file2, filename: 'lightsaber_boy.jpg')
demoProfile3.avatar.attach(io: file3, filename: 'lightsaber_boy.jpg')

# 1 mirai
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

# 2 arcane legend
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

# 3 boruto
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

# 4 brother bear
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

# 5 kiki's delivery service
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

# 6 princess mononoke
princess_mononoke = Video.create!(
    title: "Princess Mononoke", 
    description:"In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.", 
    studio: "Studio Ghibli", 
    genre: "Romance", 
    year: 1997, 
    runtime: 7980, 
    video_type: "movie"
)
princess_mononoke_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/princess-mononoke-thumbnail.jpeg')
princess_mononoke.thumbnail.attach(io: princess_mononoke_thumbnail, filename: 'princess-mononoke-thumbnail.jpeg')

princess_mononoke_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/princess-mononoke-bg.jpg')
princess_mononoke.background.attach(io: princess_mononoke_bg, filename:'princess-mononoke-bg.jpg')

princess_mononoke_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/princess-mononoke.mp4')
princess_mononoke.video.attach(io: princess_mononoke_video, filename: 'princess-mononoke.mp4')

# 7 raya
raya = Video.create!(
    title: "Raya and the Last Dragon", 
    description:"Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.", 
    studio: "Disney", 
    genre: "Adventure", 
    year: 2021, 
    runtime: 6840, 
    video_type: "movie"
)
raya_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/raya-thumbnail.jpeg')
raya.thumbnail.attach(io: raya_thumbnail, filename: 'raya-thumbnail.jpeg')

raya_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/raya-bg.jpg')
raya.background.attach(io: raya_bg, filename:'raya-bg.jpg')

raya_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/raya.mp4')
raya.video.attach(io: raya_video, filename: 'raya.mp4')

# 8 tarzan
tarzan = Video.create!(
    title: "Tarzan", 
    description:"the orphaned Tarzan grows up in the remote African wilderness, raised by the gentle gorilla Kala. When a British expedition enters the jungle, Tarzan encounters the beautiful Jane and recognizes that, like her, he's human. Falling in love with Jane, Tarzan is torn between embracing civilization and staying with his gorilla family, which becomes threatened by the ruthless hunter Clayton.", 
    studio: "Disney", 
    genre: "Romance", 
    year: 1999, 
    runtime: 5280, 
    video_type: "movie"
)
tarzan_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/tarzan-thumbnail.jpeg')
tarzan.thumbnail.attach(io: tarzan_thumbnail, filename: 'tarzan-thumbnail.jpeg')

tarzan_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/tarzan-bg.jpg')
tarzan.background.attach(io: tarzan_bg, filename:'tarzan-bg.jpg')

tarzan_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/tarzan.mp4')
tarzan.video.attach(io: tarzan_video, filename: 'tarzan.mp4')

# 9 love is blind: japan
love_is_blind_japan = Video.create!(
    title: "Love is Blind: Japan", 
    description:"Love is Blind is Netflix's American unscripted series where singles who want to be loved for who they are, rather than what they look like, have signed up for a less conventional approach to modern dating where they hope to meet the person they want to spend the rest of their lives with…without ever having seen them…

    With no distractions from the outside world, the singles talk to a stream of potential love interests and when back in the real world, as the couples plan towards their wedding day, they will quickly discover whether they can turn their emotional connection into a true love before the fast-approaching ceremony.
    
    Takashi Fujii and Yuka Itaya will be navigators for Love is Blind: Japan and see how the social experiment goes on.", 
    studio: "Netflix", 
    genre: "Romance", 
    year: 2022, 
    runtime: 36180, 
    video_type: "series"
)
love_is_blind_japan_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/love-is-blind-japan-thumbnail.jpeg')
love_is_blind_japan.thumbnail.attach(io: love_is_blind_japan_thumbnail, filename: 'love-is-blind-japan-thumbnail.jpeg')

love_is_blind_japan_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/love-is-blind-japan-bg.jpg')
love_is_blind_japan.background.attach(io: love_is_blind_japan_bg, filename:'love-is-blind-japan-bg.jpg')

love_is_blind_japan_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/love-is-blind-japan.mp4')
love_is_blind_japan.video.attach(io: love_is_blind_japan_video, filename: 'love-is-blind-japan.mp4')

# 10 lion king
lion_king = Video.create!(
    title: "The Lion King", 
    description:"This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella).", 
    studio: "Disney", 
    genre: "Adventure", 
    year: 1994, 
    runtime: 5220, 
    video_type: "movie"
)
lion_king_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lion-king-thumbnail.jpeg')
lion_king.thumbnail.attach(io: lion_king_thumbnail, filename: 'lion-king-thumbnail.jpeg')

lion_king_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/lion-king-bg.jpg')
lion_king.background.attach(io: lion_king_bg, filename:'lion-king-bg.jpg')

lion_king_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/the-lion-king.mp4')
lion_king.video.attach(io: lion_king_video, filename: 'the-lion-king.mp4')

# 11 inuyasha
inuyasha = Video.create!(
    title: "Inuyasha", 
    description:"InuYasha is the story of a dog half-demon who is constantly after a jewel of immense power, the Shikon jewel, also no as the Shikon no tama. He lives in the forest near the village where the jewel is protected by a priestess named Kikyo.", 
    studio: "Sunrise", 
    genre: "Romance", 
    year: 1996 - 2004, 
    runtime: 241200, 
    video_type: "series"
)
inuyasha_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/inuyasha-thumbnail.jpeg')
inuyasha.thumbnail.attach(io: inuyasha_thumbnail, filename: 'inuyasha-thumbnail.jpeg')

inuyasha_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/inuyasha-bg.jpg')
inuyasha.background.attach(io: inuyasha_bg, filename:'inuyasha-bg.jpg')

inuyasha_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/inuyasha.mp4')
inuyasha.video.attach(io: inuyasha_video, filename: 'inuyasha.mp4')

# 12 toradora
toradora = Video.create!(
    title: "Toradora!", 
    description:"Toradora! revolves around Ryuuji Takasu, despite his gentle personality, his eyes make him look like an intimidating delinquent. Class rearrangements on his second high school year put him together with his best friend, Yusaku Kitamura, and his hidden crush, Minori Kushieda.", 
    studio: "NIS America", 
    genre: "Romance", 
    year: 2008 - 2009, 
    runtime: 40500, 
    video_type: "series"
)
toradora_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/toradora-thumbnail.jpeg')
toradora.thumbnail.attach(io: toradora_thumbnail, filename: 'toradora-thumbnail.jpeg')

toradora_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/toradora-bg.jpg')
toradora.background.attach(io: toradora_bg, filename:'toradora-bg.jpg')

toradora_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/toradora.mp4')
toradora.video.attach(io: toradora_video, filename: 'toradora.mp4')

# 13 one piece
one_piece = Video.create!(
    title: "One Piece", 
    description:"One Piece is the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.Nov 6, 2021", 
    studio: "Crunchyroll", 
    genre: "Action", 
    year: 1999 - 2022, 
    runtime: 1238400, 
    video_type: "series"
)
one_piece_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/one-piece-thumbnail.jpeg')
one_piece.thumbnail.attach(io: one_piece_thumbnail, filename: 'one-piece-thumbnail.jpeg')

one_piece_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/one-piece-bg.jpg')
one_piece.background.attach(io: one_piece_bg, filename:'one-piece-bg.jpg')

one_piece_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/one-piece.mp4')
one_piece.video.attach(io: one_piece_video, filename: 'one-piece.mp4')

# 14 spy x family
spy_x_family = Video.create!(
    title: "Spy x Family", 
    description:"A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together. A spy on an undercover mission gets married and adopts a child as part of his cover.", 
    studio: "VIZ Media", 
    genre: "Action", 
    year: 2019, 
    runtime: 12600, 
    video_type: "series"
)
spy_x_family_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/spy-x-family-thumbnail.jpeg')
spy_x_family.thumbnail.attach(io: spy_x_family_thumbnail, filename: 'spy-x-family-thumbnail.jpeg')

spy_x_family_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/spy-x-family-bg.jpg')
spy_x_family.background.attach(io: spy_x_family_bg, filename:'spy-x-family-bg.jpg')

spy_x_family_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/spy-x-family.mp4')
spy_x_family.video.attach(io: spy_x_family_video, filename: 'spy-x-family.mp4')

# 15 rurouni kenshin
rurouni_kenshin = Video.create!(
    title: "Rurouni Kenshin", 
    description:"Rurouni Kenshin tells the story of a wanderer named Kenshin, who used to be called Hitokiri Battousai during the Japanese civil war. His tale is about redemption of his past and all his murders by helping those in trouble with his reverse-blade sword, the sakabato.", 
    studio: "Viz Media", 
    genre: "Action", 
    year: 1996 - 1998, 
    runtime: 142200, 
    video_type: "series"
)
rurouni_kenshin_thumbnail = URI.open('https://kirara.s3.us-west-1.amazonaws.com/rurouni-kenshin-thumbnail.jpeg')
rurouni_kenshin.thumbnail.attach(io: rurouni_kenshin_thumbnail, filename: 'rurouni-kenshin-thumbnail.jpeg')

rurouni_kenshin_bg = URI.open('https://kirara.s3.us-west-1.amazonaws.com/rurouni-kenshin-bg.jpg')
rurouni_kenshin.background.attach(io: rurouni_kenshin_bg, filename:'rurouni-kenshin-bg.jpg')

rurouni_kenshin_video = URI.open('https://kirara.s3.us-west-1.amazonaws.com/rurouni-kenshin.mp4')
rurouni_kenshin.video.attach(io: rurouni_kenshin_video, filename: 'rurouni-kenshin.mp4')

# watchlist
demoProfile1WatchlistItem1 = WatchlistItem.create({profile_id: 1, video_id: 1})
demoProfile1WatchlistItem2 = WatchlistItem.create({profile_id: 1, video_id: 5})
