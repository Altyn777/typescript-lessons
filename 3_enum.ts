enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership) // 1
console.log(membershipReverse) // Premium

enum SocialMedia {
    TG = 'TELEGRAM',
    FB = 'FACEBOOK',
    INST = 'INSTAGRAM'
}

const social = SocialMedia.INST
console.log(social)