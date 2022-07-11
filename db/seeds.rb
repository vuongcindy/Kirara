User.destroy_all

demoUser = User.create(
    { email: 'demo@gmail.com'},
     { password: '123456' }
    )