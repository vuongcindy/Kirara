@profiles.each do |profile|
    json.set! profile.id do
        json.partial! "api/profiles/profile", profile: profile
        if profile.avatar.attached?
            json.avatar url_for(profile.avatar)
        end
    end
end